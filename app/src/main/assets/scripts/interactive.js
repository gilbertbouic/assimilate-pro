/**
 * Assimilate Pro - interactive parts: quizzes, real-life stories, progress, progress picture.
 * Quizzes and stories follow the chosen country. Progress stays in localStorage on this device.
 */
(function () {
    'use strict';

    const t = (key, vars) => (window.CAM_I18N ? window.CAM_I18N.t(key, vars) : key);
    const currentRegion = () => {
        if (window.CAM_APP && window.CAM_APP.getCurrentRegion()) return window.CAM_APP.getCurrentRegion();
        try {
            return localStorage.getItem('selectedRegion');
        } catch (_) {
            return null;
        }
    };

    // ------------------------------------------------------------------
    // Progress store
    // ------------------------------------------------------------------
    const ProgressStore = {
        STORAGE_KEY: 'progress',
        ROLE_KEY: 'userRole',

        load() {
            try {
                const stored = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || 'null');
                if (stored && typeof stored === 'object') {
                    return {
                        quizzes: stored.quizzes && typeof stored.quizzes === 'object' ? stored.quizzes : {},
                        scenarios: Array.isArray(stored.scenarios) ? stored.scenarios : [],
                        read: Array.isArray(stored.read) ? stored.read : []
                    };
                }
            } catch (_) {}
            return { quizzes: {}, scenarios: [], read: [] };
        },

        save(progress) {
            try {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
            } catch (_) {}
        },

        reset() {
            try {
                localStorage.removeItem(this.STORAGE_KEY);
                localStorage.removeItem(this.ROLE_KEY);
            } catch (_) {}
        },

        getUserRole() {
            try {
                return localStorage.getItem(this.ROLE_KEY);
            } catch (_) {
                return null;
            }
        },

        setUserRole(role) {
            try {
                localStorage.setItem(this.ROLE_KEY, role);
            } catch (_) {}
        }
    };

    // ------------------------------------------------------------------
    // Data access
    // ------------------------------------------------------------------
    const DataLoader = {
        getAllQuizzes() {
            const data = window.CAM_DATA ? window.CAM_DATA.culturalData : window.culturalData;
            return data && data.quizzes ? data.quizzes : {};
        },
        getAllScenarios() {
            const scenarios = window.CAM_SCENARIOS ? window.CAM_SCENARIOS.scenarios : window.scenarios;
            return scenarios || {};
        },
        // Shared quiz first, then the chosen country.
        getVisibleQuizzes() {
            const all = this.getAllQuizzes();
            const list = [];
            if (all.today) list.push(all.today);
            const region = currentRegion();
            if (region && all[region]) list.push(all[region]);
            return list;
        },
        getVisibleScenarios() {
            const region = currentRegion();
            if (!region) return null;
            const set = this.getAllScenarios()[region] || {};
            return Object.keys(set).map((k) => ({ key: `${region}:${k}`, scenario: set[k] }));
        },
        scenarioCount() {
            const all = this.getAllScenarios();
            return Object.keys(all).reduce((n, r) => n + Object.keys(all[r]).length, 0);
        }
    };

    function el(tag, cls, text) {
        const node = document.createElement(tag);
        if (cls) node.className = cls;
        if (text != null) node.textContent = text;
        return node;
    }

    // ------------------------------------------------------------------
    // Quizzes
    // ------------------------------------------------------------------
    const QuizRenderer = {
        init(options) {
            this.container = options.container;
            this.progress = options.progress;
            this.onProgressUpdate = options.onProgressUpdate;
        },

        renderAll() {
            if (!this.container) return;
            this.container.innerHTML = '';
            DataLoader.getVisibleQuizzes().forEach((quiz) => this.displayQuiz(quiz));
            if (!currentRegion()) {
                this.container.appendChild(el('p', 'hint-box', t('quiz_pick_country')));
            }
        },

        displayQuiz(quiz) {
            if (!quiz || !quiz.questions || !quiz.questions.length) return;
            const block = el('div', 'quiz-block');
            block.appendChild(el('h3', 'quiz-title', quiz.title));

            quiz.questions.forEach((question, index) => {
                block.appendChild(this.createQuestionElement(question, index, quiz));
            });
            this.container.appendChild(block);
        },

        createQuestionElement(question, index, quiz) {
            const fieldset = el('fieldset', 'quiz-question');
            const legend = el('legend', null, `${index + 1}. ${question.question}`);
            legend.id = `q-${quiz.id}-${index}`;
            fieldset.appendChild(legend);

            const options = el('div', 'quiz-options');
            const name = `q-${quiz.id}-${index}-answer`;
            Object.keys(question.options).forEach((key) => {
                const id = `${name}-${key}`;
                const input = el('input', 'quiz-radio-input');
                input.type = 'radio';
                input.name = name;
                input.value = key;
                input.id = id;
                const label = el('label', 'quiz-option-label');
                label.setAttribute('for', id);
                label.appendChild(el('span', 'opt-letter', key.toUpperCase()));
                label.appendChild(el('span', 'opt-text', question.options[key]));
                const wrap = el('div', 'quiz-option');
                wrap.appendChild(input);
                wrap.appendChild(label);
                options.appendChild(wrap);
            });
            fieldset.appendChild(options);

            const feedback = el('div', 'quiz-feedback');
            feedback.setAttribute('role', 'status');
            feedback.setAttribute('aria-live', 'polite');
            fieldset.appendChild(feedback);

            options.addEventListener('change', (event) => this.handleAnswer(event, question, quiz, feedback, index));
            return fieldset;
        },

        handleAnswer(event, question, quiz, feedback, index) {
            const chosen = event.target.value;
            const record = this.progress.quizzes[quiz.title] || (this.progress.quizzes[quiz.title] = { score: 0, total: quiz.questions.length });
            if (!record.right || typeof record.right !== 'object') record.right = {};
            record.total = quiz.questions.length;
            feedback.classList.remove('correct', 'incorrect');
            feedback.innerHTML = '';
            const strong = el('strong');
            const why = el('span', null, ' ' + question.explanation);
            const good = chosen === question.correct;
            record.right[index] = good;
            record.score = Object.keys(record.right).filter((k) => record.right[k]).length;
            if (good) {
                strong.textContent = t('quiz_right');
                feedback.classList.add('correct');
            } else {
                strong.textContent = t('quiz_wrong', { letter: question.correct.toUpperCase() });
                feedback.classList.add('incorrect');
            }
            feedback.appendChild(strong);
            feedback.appendChild(why);
            ProgressStore.save(this.progress);
            if (this.onProgressUpdate) this.onProgressUpdate();
        }
    };

    // ------------------------------------------------------------------
    // Real-life stories (scenarios)
    // ------------------------------------------------------------------
    const ScenarioRenderer = {
        init(options) {
            this.container = options.container;
            this.progress = options.progress;
            this.onProgressUpdate = options.onProgressUpdate;
        },

        renderAll() {
            if (!this.container) return;
            this.container.innerHTML = '';
            const items = DataLoader.getVisibleScenarios();
            if (!items) {
                this.container.appendChild(el('p', 'hint-box', t('sc_pick_country')));
                return;
            }
            const role = ProgressStore.getUserRole();
            const shown = items.filter(({ scenario }) => !(role && scenario.roles && !scenario.roles.includes(role)));
            if (!shown.length) {
                this.container.appendChild(el('p', 'hint-box', t('sc_none')));
                return;
            }
            shown.forEach(({ key, scenario }) => this.displayScenario(key, scenario));
        },

        displayScenario(key, scenario) {
            const card = el('article', 'scenario');
            card.appendChild(el('h3', 'scenario-title', scenario.title));
            (scenario.steps || []).forEach((step) => card.appendChild(this.createStep(step)));

            const read = this.progress.scenarios.includes(scenario.title);
            const btn = el('button', 'btn btn-outline btn-read' + (read ? ' is-read' : ''), read ? t('sc_read_done') : t('sc_read'));
            btn.type = 'button';
            btn.setAttribute('aria-pressed', String(read));
            btn.addEventListener('click', () => {
                const idx = this.progress.scenarios.indexOf(scenario.title);
                if (idx === -1) this.progress.scenarios.push(scenario.title);
                else this.progress.scenarios.splice(idx, 1);
                const now = idx === -1;
                btn.textContent = now ? t('sc_read_done') : t('sc_read');
                btn.setAttribute('aria-pressed', String(now));
                btn.classList.toggle('is-read', now);
                ProgressStore.save(this.progress);
                if (this.onProgressUpdate) this.onProgressUpdate();
            });
            card.appendChild(btn);
            this.container.appendChild(card);
        },

        createStep(step) {
            const wrap = el('div', 'scenario-step');
            wrap.appendChild(el('h4', null, step.title));
            if (step.description) wrap.appendChild(el('p', null, step.description));
            const cols = el('div', 'do-dont');
            cols.appendChild(this.list('do', t('sc_do'), step.dos || []));
            cols.appendChild(this.list('dont', t('sc_dont'), step.donts || []));
            wrap.appendChild(cols);
            return wrap;
        },

        list(kind, title, items) {
            const box = el('div', `dd dd-${kind}`);
            const h = el('h5');
            const mark = el('span', 'dd-mark', kind === 'do' ? '✓' : '✗');
            mark.setAttribute('aria-hidden', 'true');
            h.appendChild(mark);
            h.appendChild(document.createTextNode(' ' + title));
            box.appendChild(h);
            const ul = el('ul');
            items.forEach((item) => ul.appendChild(el('li', null, item)));
            box.appendChild(ul);
            return box;
        }
    };

    // ------------------------------------------------------------------
    // Progress
    // ------------------------------------------------------------------
    const ProgressRenderer = {
        init(options) {
            this.container = options.container;
            this.progress = options.progress;
        },

        knownQuizTitles() {
            const all = DataLoader.getAllQuizzes();
            return Object.keys(all).map((k) => all[k].title);
        },

        calculateOverallProgress() {
            let score = 0;
            let possible = 0;
            const all = DataLoader.getAllQuizzes();
            Object.keys(all).forEach((k) => {
                const record = this.progress.quizzes[all[k].title];
                if (record) {
                    score += record.score;
                    possible += all[k].questions.length;
                }
            });
            const routeTotal = window.CAM_ROUTE ? window.CAM_ROUTE.stops.length : 0;
            const routeDone = window.CAM_ROUTE ? window.CAM_ROUTE.getDone().length : 0;
            score += routeDone;
            possible += routeTotal;
            const knownScenarios = this.progress.scenarios.length;
            score += knownScenarios;
            possible += DataLoader.scenarioCount();
            return possible > 0 ? Math.min(100, (score / possible) * 100) : 0;
        },

        bar(label, percent) {
            const row = el('div', 'progress-row');
            const top = el('div', 'progress-label');
            top.appendChild(el('span', null, label));
            top.appendChild(el('strong', null, `${Math.round(percent)}%`));
            row.appendChild(top);
            const track = el('div', 'progress-bar-container');
            track.setAttribute('role', 'progressbar');
            track.setAttribute('aria-label', label);
            track.setAttribute('aria-valuemin', '0');
            track.setAttribute('aria-valuemax', '100');
            track.setAttribute('aria-valuenow', String(Math.round(percent)));
            const fill = el('div', 'progress-bar');
            fill.style.width = `${percent}%`;
            track.appendChild(fill);
            row.appendChild(track);
            return row;
        },

        render() {
            if (!this.container) return;
            this.container.innerHTML = '';
            const overall = this.calculateOverallProgress();
            this.container.appendChild(this.bar(t('pr_overall'), overall));

            if (window.CAM_ROUTE) {
                const total = window.CAM_ROUTE.stops.length;
                const doneCount = window.CAM_ROUTE.getDone().length;
                this.container.appendChild(this.bar(`${t('pr_stops')} (${doneCount}/${total})`, (doneCount / total) * 100));
            }

            const quizBox = el('div', 'progress-group');
            quizBox.appendChild(el('h3', null, t('pr_quizzes')));
            const known = this.knownQuizTitles();
            const attempted = known.filter((title) => this.progress.quizzes[title] && this.progress.quizzes[title].total);
            if (attempted.length) {
                attempted.forEach((title) => {
                    const q = this.progress.quizzes[title];
                    quizBox.appendChild(this.bar(`${title} (${q.score}/${q.total})`, (q.score / q.total) * 100));
                });
            } else {
                quizBox.appendChild(el('p', 'muted', t('pr_no_quiz')));
            }
            this.container.appendChild(quizBox);

            const scBox = el('div', 'progress-group');
            scBox.appendChild(el('h3', null, t('pr_scenarios')));
            if (this.progress.scenarios.length) {
                const ul = el('ul');
                this.progress.scenarios.forEach((s) => ul.appendChild(el('li', null, s)));
                scBox.appendChild(ul);
            } else {
                scBox.appendChild(el('p', 'muted', t('pr_no_sc')));
            }
            this.container.appendChild(scBox);

            const badgeBox = el('div', 'progress-group');
            badgeBox.appendChild(el('h3', null, t('pr_badges')));
            const badges = this.badges();
            if (badges.length) {
                const row = el('div', 'badges');
                badges.forEach((b) => row.appendChild(el('span', 'badge', b)));
                badgeBox.appendChild(row);
            } else {
                badgeBox.appendChild(el('p', 'muted', t('pr_no_badges')));
            }
            this.container.appendChild(badgeBox);
        },

        badges() {
            const list = [];
            if (window.CAM_ROUTE && window.CAM_ROUTE.getDone().length === window.CAM_ROUTE.stops.length) {
                list.push('🚉 Route complete');
            }
            const all = DataLoader.getAllQuizzes();
            const keys = Object.keys(all);
            if (keys.length && keys.every((k) => {
                const r = this.progress.quizzes[all[k].title];
                return r && r.score >= all[k].questions.length;
            })) {
                list.push('🏆 Quiz master');
            }
            if (this.progress.scenarios.length >= DataLoader.scenarioCount() && DataLoader.scenarioCount() > 0) {
                list.push('🥇 Story expert');
            }
            return list;
        }
    };

    // ------------------------------------------------------------------
    // Progress picture
    // ------------------------------------------------------------------
    const SnapshotGenerator = {
        init(options) {
            this.canvas = options.canvas;
            this.calculateProgress = options.calculateProgress;
        },

        async generate() {
            if (!this.canvas) return;
            try {
                if (document.fonts && document.fonts.load) {
                    await document.fonts.load('600 40px Lexend');
                }
            } catch (_) {}
            const ctx = this.canvas.getContext('2d');
            const W = 800;
            const H = 400;
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, W, H);
            ctx.fillStyle = '#1F2328';
            ctx.fillRect(0, 0, W, 72);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = '600 28px Lexend, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Assimilate Pro', 32, 46);

            const overall = Math.round(this.calculateProgress());
            ctx.fillStyle = '#1F2328';
            ctx.font = '600 72px Lexend, sans-serif';
            ctx.fillText(`${overall}%`, 32, 180);
            ctx.font = '400 24px Lexend, sans-serif';
            ctx.fillText(t('pr_overall'), 32, 216);

            const colors = ['#0057B8', '#00875A', '#6A4C93', '#E07A00', '#D62828'];
            const done = window.CAM_ROUTE ? window.CAM_ROUTE.getDone() : [];
            const stops = window.CAM_ROUTE ? window.CAM_ROUTE.stops : [];
            const y = 300;
            ctx.lineWidth = 12;
            for (let i = 0; i < colors.length - 1; i++) {
                ctx.strokeStyle = colors[i];
                ctx.beginPath();
                ctx.moveTo(80 + i * 160, y);
                ctx.lineTo(80 + (i + 1) * 160, y);
                ctx.stroke();
            }
            colors.forEach((c, i) => {
                const x = 80 + i * 160;
                const finished = stops[i] && done.includes(stops[i].id);
                ctx.beginPath();
                ctx.arc(x, y, 30, 0, Math.PI * 2);
                ctx.fillStyle = finished ? c : '#FFFFFF';
                ctx.fill();
                ctx.lineWidth = 8;
                ctx.strokeStyle = c;
                ctx.stroke();
                ctx.fillStyle = finished ? (c === '#E07A00' ? '#1F2328' : '#FFFFFF') : '#1F2328';
                ctx.font = '600 26px Lexend, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(finished ? '✓' : String(i + 1), x, y + 9);
            });
            ctx.textAlign = 'left';
            ctx.fillStyle = '#56606B';
            ctx.font = '400 18px Lexend, sans-serif';
            ctx.fillText('assimilate-pro.mkweli.tech', 32, 380);
        }
    };

    // ------------------------------------------------------------------
    // Start
    // ------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        const quizContainer = document.getElementById('quiz-list');
        const scenarioContainer = document.getElementById('scenario-list');
        const roleSelection = document.getElementById('role-selection');
        const progressContainer = document.getElementById('progress-container');
        const resetButton = document.getElementById('reset-progress');
        const snapshotButton = document.getElementById('generate-snapshot');
        const snapshotCanvas = document.getElementById('snapshot-canvas');
        const snapshotMessage = document.getElementById('snapshot-message');
        const downloadButton = document.getElementById('download-snapshot');

        let progress = ProgressStore.load();
        const refresh = () => ProgressRenderer.render();

        QuizRenderer.init({ container: quizContainer, progress, onProgressUpdate: refresh });
        ScenarioRenderer.init({ container: scenarioContainer, progress, onProgressUpdate: refresh });
        ProgressRenderer.init({ container: progressContainer, progress });
        SnapshotGenerator.init({
            canvas: snapshotCanvas,
            calculateProgress: () => ProgressRenderer.calculateOverallProgress()
        });

        const renderLists = () => {
            QuizRenderer.renderAll();
            ScenarioRenderer.renderAll();
            ProgressRenderer.render();
        };

        window.addEventListener('regionSelected', renderLists);
        window.addEventListener('routeProgress', refresh);
        document.addEventListener('mkweli-langchange', renderLists);

        if (roleSelection) {
            roleSelection.addEventListener('change', (event) => {
                ProgressStore.setUserRole(event.target.value);
                ScenarioRenderer.renderAll();
            });
            const savedRole = ProgressStore.getUserRole();
            if (savedRole) {
                const radio = roleSelection.querySelector(`input[name="role"][value="${CSS.escape(savedRole)}"]`);
                if (radio) radio.checked = true;
            }
        }

        if (resetButton) {
            resetButton.addEventListener('click', () => {
                if (!window.confirm(t('pr_reset_confirm'))) return;
                ProgressStore.reset();
                progress = { quizzes: {}, scenarios: [], read: [] };
                QuizRenderer.progress = progress;
                ScenarioRenderer.progress = progress;
                ProgressRenderer.progress = progress;
                const checked = document.querySelector('input[name="role"]:checked');
                if (checked) checked.checked = false;
                if (window.CAM_ROUTE) window.CAM_ROUTE.reset();
                renderLists();
                if (snapshotCanvas) snapshotCanvas.hidden = true;
                if (snapshotMessage) snapshotMessage.hidden = true;
                if (downloadButton) downloadButton.hidden = true;
            });
        }

        if (snapshotButton) {
            snapshotButton.addEventListener('click', async () => {
                await SnapshotGenerator.generate();
                if (snapshotCanvas) snapshotCanvas.hidden = false;
                if (snapshotMessage) {
                    snapshotMessage.className = 'status-msg ok';
                    snapshotMessage.textContent = t('pr_snap_ready');
                    snapshotMessage.hidden = false;
                }
                if (downloadButton) downloadButton.hidden = false;
            });
        }

        if (downloadButton && snapshotCanvas) {
            downloadButton.addEventListener('click', () => {
                try {
                    const link = document.createElement('a');
                    link.download = `assimilate-pro-progress-${Date.now()}.png`;
                    link.href = snapshotCanvas.toDataURL('image/png');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    if (snapshotMessage) snapshotMessage.textContent = t('pr_snap_saved');
                } catch (_) {
                    if (snapshotMessage) {
                        snapshotMessage.className = 'status-msg bad';
                        snapshotMessage.textContent = t('pr_snap_error');
                    }
                }
            });
        }

        renderLists();
    });
})();
