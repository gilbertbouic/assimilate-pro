/**
 * Assimilate Pro - the route: five numbered stops on a coloured line.
 * Finished stops get a tick. One Continue button goes to the next stop.
 * Stop text comes from the shared essentials guide (scripts/core/today-essentials.js).
 */
(function () {
    'use strict';

    const DONE_KEY = 'routeDone';

    const STOPS = [
        { id: 'papers', color: 'blue', pillars: ['digital_state', 'awaiting_docs'] },
        { id: 'home', color: 'green', pillars: ['housing'] },
        { id: 'work', color: 'purple', pillars: ['work_rights', 'language_status'] },
        { id: 'health', color: 'orange', pillars: ['money_health'] },
        { id: 'scams', color: 'red', pillars: ['scams_safety'] }
    ];

    const t = (key, vars) => (window.CAM_I18N ? window.CAM_I18N.t(key, vars) : key);

    let done = loadDone();
    let openStop = null;

    function loadDone() {
        try {
            const raw = JSON.parse(localStorage.getItem(DONE_KEY) || '[]');
            return Array.isArray(raw) ? raw.filter((id) => STOPS.some((s) => s.id === id)) : [];
        } catch (_) {
            return [];
        }
    }

    function saveDone() {
        try {
            localStorage.setItem(DONE_KEY, JSON.stringify(done));
        } catch (_) {}
        window.dispatchEvent(new CustomEvent('routeProgress', { detail: { done: done.slice(), total: STOPS.length } }));
    }

    const isDone = (id) => done.includes(id);
    const nextStop = () => STOPS.find((s) => !isDone(s.id)) || null;
    const indexOf = (id) => STOPS.findIndex((s) => s.id === id);

    function pillarsFor(stop) {
        const guide = window.CAM_GUIDES && window.CAM_GUIDES.essentials;
        if (!guide) return [];
        return stop.pillars
            .map((pid) => guide.pillars.find((p) => p.id === pid))
            .filter(Boolean);
    }

    function el(tag, cls, text) {
        const node = document.createElement(tag);
        if (cls) node.className = cls;
        if (text != null) node.textContent = text;
        return node;
    }

    function renderRoute() {
        const list = document.getElementById('route-list');
        if (!list) return;
        list.innerHTML = '';
        const next = nextStop();

        STOPS.forEach((stop, i) => {
            const li = el('li', `stop stop-${stop.color}`);
            const finished = isDone(stop.id);
            if (finished) li.classList.add('is-done');
            if (next && next.id === stop.id) li.classList.add('is-next');
            if (openStop === stop.id) li.classList.add('is-open');

            const btn = el('button', 'stop-btn');
            btn.type = 'button';
            btn.setAttribute('data-stop', stop.id);
            if (openStop === stop.id) btn.setAttribute('aria-current', 'step');

            const dot = el('span', 'dot', finished ? '✓' : String(i + 1));
            dot.setAttribute('aria-hidden', 'true');

            const text = el('span', 'stop-text');
            text.appendChild(el('span', 'stop-title', t('stop_' + stop.id)));
            let sub = t('stop_' + stop.id + '_sub');
            if (finished) sub = t('stop_done') + ' · ' + sub;
            else if (next && next.id === stop.id) sub = t('stop_next') + ' · ' + sub;
            text.appendChild(el('span', 'stop-sub', sub));

            const sr = el('span', 'visually-hidden', `${t('stop_of', { n: i + 1, total: STOPS.length })}${finished ? ', ' + t('stop_done') : ''}. `);
            btn.appendChild(sr);
            btn.appendChild(dot);
            btn.appendChild(text);
            btn.appendChild(el('span', 'stop-arrow', '›'));
            btn.lastChild.setAttribute('aria-hidden', 'true');
            btn.addEventListener('click', () => showStop(stop.id, true));

            li.appendChild(btn);
            list.appendChild(li);
        });

        const count = document.getElementById('route-count');
        if (count) count.textContent = t('count', { done: done.length, total: STOPS.length });

        const go = document.getElementById('continue-btn');
        if (go) {
            if (!next) {
                go.textContent = t('go_all_done');
                go.setAttribute('href', '#quizzes');
                go.dataset.target = '';
            } else {
                const label = t('stop_' + next.id);
                go.textContent = done.length === 0 ? t('go_start', { stop: label }) : t('go_continue', { stop: label });
                go.setAttribute('href', '#stop-view');
                go.dataset.target = next.id;
            }
            go.className = 'btn btn-go' + (next ? ` go-${next.color}` : '');
        }
    }

    function renderStop() {
        const view = document.getElementById('stop-view');
        if (!view) return;
        const id = openStop || (nextStop() || STOPS[0]).id;
        const stop = STOPS[indexOf(id)];
        const i = indexOf(id);
        view.innerHTML = '';
        view.className = `stop-view stop-${stop.color}`;

        const head = el('div', 'stop-head');
        head.appendChild(el('p', 'stop-kicker', t('stop_of', { n: i + 1, total: STOPS.length })));
        const h2 = el('h2', null, t('stop_' + stop.id));
        h2.id = 'stop-title';
        head.appendChild(h2);
        view.appendChild(head);

        const body = el('div', 'stop-body');
        const pillars = pillarsFor(stop);
        pillars.forEach((p) => {
            const block = el('div', 'stop-block');
            const h3 = el('h3');
            const icon = el('span', 'stop-icon', p.icon || '');
            icon.setAttribute('aria-hidden', 'true');
            h3.appendChild(icon);
            h3.appendChild(document.createTextNode(' ' + p.title));
            block.appendChild(h3);
            const ul = el('ul', 'stop-points');
            p.points.forEach((pt) => ul.appendChild(el('li', null, pt)));
            block.appendChild(ul);
            body.appendChild(block);
        });
        if (window.CAM_I18N && window.CAM_I18N.lang() !== 'en') {
            body.appendChild(el('p', 'lang-note', t('guide_en_note')));
        }

        const actions = el('div', 'stop-actions');
        const mark = el('button', 'btn btn-mark', isDone(stop.id) ? t('stop_marked') : t('stop_mark'));
        mark.type = 'button';
        mark.setAttribute('aria-pressed', String(isDone(stop.id)));
        mark.addEventListener('click', () => {
            if (isDone(stop.id)) done = done.filter((d) => d !== stop.id);
            else done.push(stop.id);
            saveDone();
            renderRoute();
            renderStop();
            const again = document.querySelector('#stop-view .btn-mark');
            if (again) again.focus();
        });
        actions.appendChild(mark);

        if (i < STOPS.length - 1) {
            const nextBtn = el('button', 'btn btn-outline', t('stop_next_btn'));
            nextBtn.type = 'button';
            nextBtn.addEventListener('click', () => showStop(STOPS[i + 1].id, true));
            actions.appendChild(nextBtn);
        }

        const back = el('a', 'back-link', t('stop_back'));
        back.href = '#route';
        back.addEventListener('click', (e) => {
            e.preventDefault();
            const btn = document.querySelector(`.stop-btn[data-stop="${stop.id}"]`);
            if (btn) {
                btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                btn.focus({ preventScroll: true });
            }
        });
        actions.appendChild(back);
        body.appendChild(actions);
        view.appendChild(body);
    }

    function showStop(id, focus) {
        openStop = id;
        renderRoute();
        renderStop();
        if (focus) {
            const view = document.getElementById('stop-view');
            if (view) {
                const wide = window.matchMedia('(min-width: 960px)').matches;
                if (!wide) view.scrollIntoView({ behavior: 'smooth', block: 'start' });
                view.focus({ preventScroll: true });
            }
        }
    }

    function init() {
        if (!(window.CAM_GUIDES && window.CAM_GUIDES.essentials)) {
            setTimeout(init, 50);
            return;
        }
        renderRoute();
        renderStop();

        const go = document.getElementById('continue-btn');
        if (go) {
            go.addEventListener('click', (e) => {
                const target = go.dataset.target;
                if (target) {
                    e.preventDefault();
                    showStop(target, true);
                }
            });
        }

        document.addEventListener('mkweli-langchange', () => {
            renderRoute();
            renderStop();
        });
    }

    window.CAM_ROUTE = {
        stops: STOPS,
        getDone: () => done.slice(),
        reset: () => {
            done = [];
            openStop = null;
            saveDone();
            renderRoute();
            renderStop();
        }
    };

    document.addEventListener('DOMContentLoaded', init);
})();
