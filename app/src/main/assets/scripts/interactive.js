/**
 * Cultural Assimilation Manual - Interactive Module
 * Handles all interactive features: quizzes, scenarios, progress tracking, and snapshot generation.
 * Refactored to use modular architecture with clear separation of concerns.
 */
(function() {
    'use strict';

       // PROGRESS STORE MODULE
    // Responsible for loading, saving, and resetting user progress in localStorage
   
    /**
     * ProgressStore - Manages user progress persistence in localStorage
     * @namespace
     */
    const ProgressStore = {
        STORAGE_KEY: 'progress',
        ROLE_KEY: 'userRole',

        /**
         * Load progress from localStorage
         * @returns {Object} Progress object with quizzes and scenarios
         */
        load: function() {
            try {
                const stored = localStorage.getItem(this.STORAGE_KEY);
                return stored ? JSON.parse(stored) : { quizzes: {}, scenarios: [] };
            } catch (e) {
                console.error('Error loading progress:', e);
                return { quizzes: {}, scenarios: [] };
            }
        },

        /**
         * Save progress to localStorage
         * @param {Object} progress - Progress object to save
         */
        save: function(progress) {
            try {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
            } catch (e) {
                console.error('Error saving progress:', e);
            }
        },

        /**
         * Reset all progress data
         */
        reset: function() {
            try {
                localStorage.removeItem(this.STORAGE_KEY);
                localStorage.removeItem(this.ROLE_KEY);
            } catch (e) {
                console.error('Error resetting progress:', e);
            }
        },

        /**
         * Get saved user role
         * @returns {string|null} User role or null
         */
        getUserRole: function() {
            return localStorage.getItem(this.ROLE_KEY);
        },

        /**
         * Save user role
         * @param {string} role - User role to save
         */
        setUserRole: function(role) {
            localStorage.setItem(this.ROLE_KEY, role);
        }
    };

    // ============================================================================
    // DATA LOADER MODULE
    // Abstracts data access to prepare for future JSON-based content loading
    // ============================================================================
    
    /**
     * DataLoader - Provides unified interface for accessing quiz and scenario data
     * Currently loads from global JS variables, but can be extended to fetch from JSON
     * @namespace
     */
    const DataLoader = {
        /**
         * Get all quizzes from the data source
         * @returns {Object} Object containing all quiz data keyed by region
         */
        getAllQuizzes: function() {
            // Use CAM_DATA namespace, fallback to global for backward compatibility
            const culturalData = window.CAM_DATA ? window.CAM_DATA.culturalData : window.culturalData;
            return culturalData && culturalData.quizzes ? culturalData.quizzes : {};
        },

        /**
         * Get a specific quiz by region code
         * @param {string} regionCode - Region code (e.g., "uk", "us", "ce")
         * @returns {Object|null} Quiz object or null if not found
         */
        getQuizByRegion: function(regionCode) {
            const quizzes = this.getAllQuizzes();
            return quizzes[regionCode] || null;
        },

        /**
         * Get all scenarios from the data source
         * @returns {Object} Object containing all scenario data keyed by region
         */
        getAllScenarios: function() {
            // Use CAM_SCENARIOS namespace, fallback to global for backward compatibility
            const scenarios = window.CAM_SCENARIOS ? window.CAM_SCENARIOS.scenarios : window.scenarios;
            return scenarios || {};
        },

        /**
         * Get scenarios for a specific region
         * @param {string} regionCode - Region code (e.g., "uk", "us", "ce")
         * @returns {Object} Object containing scenarios for the region keyed by category
         */
        getScenariosByRegion: function(regionCode) {
            const scenarios = this.getAllScenarios();
            return scenarios[regionCode] || {};
        },

        /**
         * Get a specific scenario by region and category
         * @param {string} regionCode - Region code (e.g., "uk", "us", "ce")
         * @param {string} category - Category (e.g., "workplace", "social")
         * @returns {Object|null} Scenario object or null if not found
         */
        getScenario: function(regionCode, category) {
            const regionScenarios = this.getScenariosByRegion(regionCode);
            return regionScenarios[category] || null;
        }
    };

    // ============================================================================
    // QUIZ RENDERER MODULE
    // Responsible for rendering quizzes, handling answer selection, and updating quiz progress
    
    /**
     * QuizRenderer - Handles quiz display and interaction
     * @namespace
     */
    const QuizRenderer = {
        /**
         * Initialize quiz renderer with required data and callbacks
         * @param {Object} options - Configuration options
         * @param {HTMLElement} options.container - Container element for quizzes
         * @param {Object} options.progress - Progress object
         * @param {Function} options.onProgressUpdate - Callback when progress updates
         */
        init: function(options) {
            this.container = options.container;
            this.progress = options.progress;
            this.onProgressUpdate = options.onProgressUpdate;
        },

        /**
         * Render all quizzes from cultural data
         */
        renderAll: function() {
            if (!this.container) return;
            
            this.container.innerHTML = '<h2>📝 Interactive Quizzes</h2>';
            
            // Use DataLoader to get quiz data
            const quizzes = DataLoader.getAllQuizzes();
            
            for (const key in quizzes) {
                this.displayQuiz(quizzes[key]);
            }
        },

        /**
         * Display a single quiz
         * @param {Object} quiz - Quiz object with title and questions
         */
        displayQuiz: function(quiz) {
            if (!quiz || !quiz.questions || !quiz.questions.length) {
                return;
            }

            const quizTitle = document.createElement('h3');
            quizTitle.innerText = quiz.title;
            this.container.appendChild(quizTitle);

            // Initialize progress for this quiz if not exists
            if (!this.progress.quizzes[quiz.title]) {
                this.progress.quizzes[quiz.title] = { score: 0, total: quiz.questions.length };
            }

            quiz.questions.forEach((question, index) => {
                const questionElement = this.createQuestionElement(question, index, quiz);
                this.container.appendChild(questionElement);
            });
        },

        /**
         * Create a question element with options and feedback
         * @param {Object} question - Question object
         * @param {number} index - Question index
         * @param {Object} quiz - Parent quiz object
         * @returns {HTMLElement} Question element
         */
        createQuestionElement: function(question, index, quiz) {
            // Use fieldset for better accessibility
            const questionElement = document.createElement('fieldset');
            questionElement.classList.add('quiz-question');
            
            // Use legend for the question text
            const legend = document.createElement('legend');
            legend.innerText = `${index + 1}. ${question.question}`;
            questionElement.appendChild(legend);

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('quiz-options');
            optionsContainer.setAttribute('role', 'radiogroup');
            optionsContainer.setAttribute('aria-labelledby', `question-${quiz.id}-${index}-legend`);
            legend.id = `question-${quiz.id}-${index}-legend`;

            const questionName = `question-${index}-${quiz.id}`;

            // Create option inputs with explicit labels
            let optionIndex = 0;
            for (const key in question.options) {
                const optionId = `${questionName}-option-${key}`;
                
                const optionInput = document.createElement('input');
                optionInput.type = 'radio';
                optionInput.name = questionName;
                optionInput.value = key;
                optionInput.id = optionId;
                optionInput.classList.add('quiz-radio-input');
                
                const optionLabel = document.createElement('label');
                optionLabel.setAttribute('for', optionId);
                optionLabel.classList.add('quiz-option-label');
                optionLabel.innerText = question.options[key];
                
                const optionWrapper = document.createElement('div');
                optionWrapper.classList.add('quiz-option');
                optionWrapper.appendChild(optionInput);
                optionWrapper.appendChild(optionLabel);
                
                optionsContainer.appendChild(optionWrapper);
                optionIndex++;
            }

            questionElement.appendChild(optionsContainer);

            // Feedback element with ARIA live region
            const feedbackElement = document.createElement('div');
            feedbackElement.classList.add('quiz-feedback');
            feedbackElement.setAttribute('role', 'status');
            feedbackElement.setAttribute('aria-live', 'polite');
            feedbackElement.setAttribute('aria-atomic', 'true');
            questionElement.appendChild(feedbackElement);

            // Answer change handler
            const self = this;
            optionsContainer.addEventListener('change', (event) => {
                self.handleAnswerSelection(event, question, quiz, feedbackElement);
            });

            return questionElement;
        },

        /**
         * Handle answer selection and update feedback
         * @param {Event} event - Change event
         * @param {Object} question - Question object
         * @param {Object} quiz - Quiz object
         * @param {HTMLElement} feedbackElement - Feedback display element
         */
        handleAnswerSelection: function(event, question, quiz, feedbackElement) {
            const selectedOption = event.target.value;
            const previouslyCorrect = event.target.dataset.answeredCorrectly === 'true';

            // Remove previous feedback classes
            feedbackElement.classList.remove('correct', 'incorrect');

            if (selectedOption === question.correct) {
                // Add text-based cue and class for styling
                feedbackElement.innerHTML = '<strong>✓ Correct!</strong> ' + question.explanation;
                feedbackElement.classList.add('correct');
                
                if (!this.progress.quizzes[quiz.title]) {
                    this.progress.quizzes[quiz.title] = { score: 0, total: 0 };
                }
                
                if (!previouslyCorrect) {
                    this.progress.quizzes[quiz.title].score++;
                    event.target.dataset.answeredCorrectly = 'true';
                }
            } else {
                // Add text-based cue and class for styling
                feedbackElement.innerHTML = `<strong>✗ Incorrect.</strong> The correct answer is ${question.correct.toUpperCase()}. ${question.explanation}`;
                feedbackElement.classList.add('incorrect');
                
                if (previouslyCorrect) {
                    this.progress.quizzes[quiz.title].score--;
                    event.target.dataset.answeredCorrectly = 'false';
                }
            }
            
            ProgressStore.save(this.progress);
            if (this.onProgressUpdate) {
                this.onProgressUpdate();
            }
        }
    };

    // SCENARIO RENDERER MODULE
    // Responsible for rendering scenarios with flip cards and updating scenario completion
    
  /**
     * ScenarioRenderer - Handles scenario display and interaction
     * @namespace
     */
    const ScenarioRenderer = {
        /**
         * Initialize scenario renderer
         * @param {Object} options - Configuration options
         * @param {HTMLElement} options.container - Container element for scenarios
         * @param {Object} options.progress - Progress object
         * @param {Function} options.onProgressUpdate - Callback when progress updates
         */
        init: function(options) {
            this.container = options.container;
            this.progress = options.progress;
            this.onProgressUpdate = options.onProgressUpdate;
        },

        /**
         * Render all scenarios based on user role
         */
        renderAll: function() {
            if (!this.container) return;
            
            this.container.innerHTML = '<h2>🎯 Scenario-Based Learning</h2>';
            const userRole = ProgressStore.getUserRole();

            // Use DataLoader to get scenario data
            const scenarios = DataLoader.getAllScenarios();

            if (scenarios) {
                for (const countryCode in scenarios) {
                    const countryScenarios = scenarios[countryCode];
                    for (const scenarioKey in countryScenarios) {
                        const scenario = countryScenarios[scenarioKey];
                        // Filter by role if set
                        if (userRole && scenario.roles && !scenario.roles.includes(userRole)) {
                            continue;
                        }
                        this.displayScenario(scenario);
                    }
                }
            }
        },

        /**
         * Display a single scenario
         * @param {Object} scenario - Scenario object with title and steps
         */
        displayScenario: function(scenario) {
            // Track scenario completion
            if (!this.progress.scenarios.includes(scenario.title)) {
                this.progress.scenarios.push(scenario.title);
                ProgressStore.save(this.progress);
                if (this.onProgressUpdate) {
                    this.onProgressUpdate();
                }
            }

            const scenarioTitle = document.createElement('h3');
            scenarioTitle.innerText = scenario.title;
            this.container.appendChild(scenarioTitle);

            scenario.steps.forEach(step => {
                const stepElement = this.createStepElement(step);
                this.container.appendChild(stepElement);
            });
        },

        /**
         * Create a step element with flip cards
         * @param {Object} step - Step object with title, description, dos, and donts
         * @returns {HTMLElement} Step element
         */
        createStepElement: function(step) {
            const stepElement = document.createElement('div');
            stepElement.classList.add('scenario-step');

            const stepTitle = document.createElement('h4');
            stepTitle.innerText = step.title;
            stepElement.appendChild(stepTitle);

            const stepDescription = document.createElement('p');
            stepDescription.innerText = step.description;
            stepElement.appendChild(stepDescription);

            const cardsContainer = document.createElement('div');
            cardsContainer.classList.add('scenario-cards');

            const dosCard = this.createFlipCard('Do\'s', step.dos);
            const dontsCard = this.createFlipCard('Don\'ts', step.donts);

            cardsContainer.appendChild(dosCard);
            cardsContainer.appendChild(dontsCard);
            stepElement.appendChild(cardsContainer);

            return stepElement;
        },

        /**
         * Create a flip card element
         * @param {string} title - Card title
         * @param {Array<string>} items - List of items to display
         * @returns {HTMLElement} Flip card element
         */
        createFlipCard: function(title, items) {
            const card = document.createElement('div');
            card.classList.add('flip-card');
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `Flip card: ${title}. Press Enter or Space to flip.`);

            const cardInner = document.createElement('div');
            cardInner.classList.add('flip-card-inner');

            const cardFront = document.createElement('div');
            cardFront.classList.add('flip-card-front');
            const frontTitle = document.createElement('h5');
            frontTitle.innerText = title;
            cardFront.appendChild(frontTitle);

            const cardBack = document.createElement('div');
            cardBack.classList.add('flip-card-back');
            cardBack.setAttribute('aria-hidden', 'true');
            const backList = document.createElement('ul');
            items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerText = item;
                backList.appendChild(listItem);
            });
            cardBack.appendChild(backList);

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);

            // Add click and keyboard support for flipping
            const toggleFlip = () => {
                const isFlipped = card.classList.toggle('flipped');
                cardBack.setAttribute('aria-hidden', !isFlipped);
                card.setAttribute('aria-expanded', isFlipped);
            };

            card.addEventListener('click', toggleFlip);
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleFlip();
                }
            });

            return card;
        }
    };

    // ============================================================================
    // SNAPSHOT GENERATOR MODULE
    // Responsible for rendering progress snapshot to canvas
    // ============================================================================

    /**
     * SnapshotGenerator - Generates visual progress snapshots
     * @namespace
     */
    const SnapshotGenerator = {
        /**
         * Initialize snapshot generator
         * @param {Object} options - Configuration options
         * @param {HTMLCanvasElement} options.canvas - Canvas element
         * @param {Object} options.progress - Progress object
         * @param {Function} options.calculateProgress - Function to calculate overall progress
         */
        init: function(options) {
            this.canvas = options.canvas;
            this.progress = options.progress;
            this.calculateProgress = options.calculateProgress;
        },

        /**
         * Generate and render snapshot to canvas
         */
        generate: function() {
            if (!this.canvas) return;
            
            const ctx = this.canvas.getContext('2d');
            
            // Background gradient
            const gradient = ctx.createLinearGradient(0, 0, 800, 400);
            gradient.addColorStop(0, '#4A90E2');
            gradient.addColorStop(1, '#50E3C2');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 800, 400);
            
            // Title
            ctx.fillStyle = 'white';
            ctx.font = 'bold 40px Poppins';
            ctx.textAlign = 'center';
            ctx.fillText('My Cultural Snapshot', 400, 60);

            // Overall progress
            const overallProgress = this.calculateProgress();
            ctx.font = '60px Poppins';
            ctx.fillText(`${Math.round(overallProgress)}%`, 400, 150);
            ctx.font = '20px Poppins';
            ctx.fillText('Overall Progress', 400, 180);

            // Cultural title based on progress
            const culturalTitle = this.getCulturalTitle(overallProgress);
            ctx.font = 'bold 30px Poppins';
            ctx.fillText(culturalTitle, 400, 250);

            // Badges
            let badgeText = '';
            if (this.progress.badges && this.progress.badges.length > 0) {
                badgeText = this.progress.badges.join(' ');
            }
            ctx.font = '20px Poppins';
            ctx.fillText(badgeText, 400, 300);

            // Footer
            ctx.font = '16px Poppins';
            ctx.fillText('Generated by the Cultural Assimilation Manual', 400, 370);
        },

        /**
         * Get cultural title based on progress percentage
         * @param {number} progress - Progress percentage (0-100)
         * @returns {string} Cultural title
         */
        getCulturalTitle: function(progress) {
            if (progress > 90) return 'Cultural Guru';
            if (progress > 70) return 'Cultural Expert';
            if (progress > 50) return 'Cultural Adept';
            if (progress > 20) return 'Cultural Explorer';
            return 'Cultural Novice';
        }
    };

    // ============================================================================
    // PROGRESS RENDERER
    // Responsible for rendering progress bars and badges
    // ============================================================================

    /**
     * ProgressRenderer - Handles progress display
     * @namespace
     */
    const ProgressRenderer = {
        /**
         * Initialize progress renderer
         * @param {Object} options - Configuration options
         * @param {HTMLElement} options.container - Container element
         * @param {Object} options.progress - Progress object
         */
        init: function(options) {
            this.container = options.container;
            this.progress = options.progress;
        },

        /**
         * Render all progress information
         */
        render: function() {
            if (!this.container) return;
            
            this.container.innerHTML = '';

            const overallProgress = this.calculateOverallProgress();
            this.renderOverallProgress(overallProgress);
            this.renderQuizProgress();
            this.renderScenarioProgress();
            this.renderBadges();
        },

        /**
         * Calculate overall progress percentage
         * @returns {number} Progress percentage (0-100)
         */
        calculateOverallProgress: function() {
            let totalScore = 0;
            let totalPossible = 0;

            // Use DataLoader to get quiz data
            const quizzes = DataLoader.getAllQuizzes();
            
            for (const key in quizzes) {
                const quizTitle = quizzes[key].title;
                if (this.progress.quizzes[quizTitle]) {
                    totalScore += this.progress.quizzes[quizTitle].score;
                    totalPossible += this.progress.quizzes[quizTitle].total;
                }
            }

            // Use DataLoader to get scenario data
            const scenarios = DataLoader.getAllScenarios();
            
            if (scenarios) {
                let scenarioCount = 0;
                for (const countryCode in scenarios) {
                    scenarioCount += Object.keys(scenarios[countryCode]).length;
                }
                totalScore += this.progress.scenarios.length;
                totalPossible += scenarioCount;
            }

            return totalPossible > 0 ? (totalScore / totalPossible) * 100 : 0;
        },

        /**
         * Render overall progress bar
         * @param {number} progress - Progress percentage
         */
        renderOverallProgress: function(progress) {
            const container = document.createElement('div');
            container.classList.add('progress-bar-container');
            const bar = document.createElement('div');
            bar.classList.add('progress-bar');
            bar.style.width = `${progress}%`;
            bar.innerText = `${Math.round(progress)}%`;
            container.appendChild(bar);
            this.container.appendChild(container);
        },

        /**
         * Render quiz progress section
         */
        renderQuizProgress: function() {
            const quizProgress = document.createElement('div');
            quizProgress.innerHTML = '<h4>Quiz Scores</h4>';
            
            if (Object.keys(this.progress.quizzes).length > 0) {
                for (const quizTitle in this.progress.quizzes) {
                    const quiz = this.progress.quizzes[quizTitle];
                    const percentage = (quiz.score / quiz.total) * 100;
                    const progressBarContainer = document.createElement('div');
                    progressBarContainer.classList.add('progress-bar-container');
                    const progressBar = document.createElement('div');
                    progressBar.classList.add('progress-bar');
                    progressBar.style.width = `${percentage}%`;
                    progressBar.innerText = `${Math.round(percentage)}%`;
                    quizProgress.appendChild(document.createTextNode(quizTitle));
                    progressBarContainer.appendChild(progressBar);
                    quizProgress.appendChild(progressBarContainer);
                }
            } else {
                quizProgress.innerHTML += '<p>No quizzes attempted yet.</p>';
            }

            this.container.appendChild(quizProgress);
        },

        /**
         * Render completed scenarios section
         */
        renderScenarioProgress: function() {
            const scenarioProgress = document.createElement('div');
            scenarioProgress.innerHTML = '<h4>Completed Scenarios</h4>';
            
            if (this.progress.scenarios.length > 0) {
                const list = document.createElement('ul');
                this.progress.scenarios.forEach(scenarioTitle => {
                    const listItem = document.createElement('li');
                    listItem.innerText = scenarioTitle;
                    list.appendChild(listItem);
                });
                scenarioProgress.appendChild(list);
            } else {
                scenarioProgress.innerHTML += '<p>No scenarios completed yet.</p>';
            }

            this.container.appendChild(scenarioProgress);
        },

        /**
         * Render badges section
         */
        renderBadges: function() {
            const badgesContainer = document.createElement('div');
            badgesContainer.innerHTML = '<h4>Badges</h4>';

            let allQuizzesCompleted = true;
            // Use DataLoader to get quiz data
            const quizzes = DataLoader.getAllQuizzes();
            
            for (const key in quizzes) {
                const quizTitle = quizzes[key].title;
                if (!this.progress.quizzes[quizTitle] || 
                    this.progress.quizzes[quizTitle].score < this.progress.quizzes[quizTitle].total) {
                    allQuizzesCompleted = false;
                    break;
                }
            }

            let allScenariosCompleted = true;
            // Use DataLoader to get scenario data
            const scenarios = DataLoader.getAllScenarios();
            
            if (scenarios) {
                let scenarioCount = 0;
                for (const countryCode in scenarios) {
                    scenarioCount += Object.keys(scenarios[countryCode]).length;
                }
                if (this.progress.scenarios.length < scenarioCount) {
                    allScenariosCompleted = false;
                }
            }

            if (allQuizzesCompleted) {
                const quizBadge = document.createElement('span');
                quizBadge.innerText = '🏆 Quiz Master';
                badgesContainer.appendChild(quizBadge);
            }

            if (allScenariosCompleted) {
                const scenarioBadge = document.createElement('span');
                scenarioBadge.innerText = '🥇 Scenario Expert';
                badgesContainer.appendChild(scenarioBadge);
            }

            if (!allQuizzesCompleted && !allScenariosCompleted) {
                badgesContainer.innerHTML += '<p>No badges earned yet.</p>';
            }

            this.container.appendChild(badgesContainer);
        }
    };

    // ============================================================================
    // MAIN INITIALIZATION
    // Ties everything together when DOM is ready
    // Implements lazy rendering for improved performance
    // ============================================================================

    document.addEventListener('DOMContentLoaded', () => {
        // Get DOM elements
        const quizContainer = document.querySelector('#quizzes');
        const scenariosContainer = document.querySelector('#scenarios');
        const roleSelectionContainer = document.querySelector('#role-selection');
        const progressContainer = document.querySelector('#progress-container');
        const resetButton = document.querySelector('#reset-progress');
        const generateSnapshotButton = document.querySelector('#generate-snapshot');
        const snapshotCanvas = document.querySelector('#snapshot-canvas');
        const snapshotMessage = document.querySelector('#snapshot-message');
        const downloadSnapshotButton = document.querySelector('#download-snapshot');

        // Load initial progress
        let progress = ProgressStore.load();

        // Track whether sections have been initialized
        let quizzesInitialized = false;
        let scenariosInitialized = false;

        // Initialize all modules
        QuizRenderer.init({
            container: quizContainer,
            progress: progress,
            onProgressUpdate: () => ProgressRenderer.render()
        });

        ScenarioRenderer.init({
            container: scenariosContainer,
            progress: progress,
            onProgressUpdate: () => ProgressRenderer.render()
        });

        ProgressRenderer.init({
            container: progressContainer,
            progress: progress
        });

        SnapshotGenerator.init({
            canvas: snapshotCanvas,
            progress: progress,
            calculateProgress: () => ProgressRenderer.calculateOverallProgress()
        });

        // Lazy rendering: Initialize quizzes on first interaction
        const initializeQuizzes = () => {
            if (!quizzesInitialized && quizContainer) {
                QuizRenderer.renderAll();
                quizzesInitialized = true;
            }
        };

        // Lazy rendering: Initialize scenarios on first interaction
        const initializeScenarios = () => {
            if (!scenariosInitialized && scenariosContainer) {
                ScenarioRenderer.renderAll();
                scenariosInitialized = true;
            }
        };

        // Set up intersection observer for lazy loading sections
        if ('IntersectionObserver' in window) {
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'quizzes') {
                            initializeQuizzes();
                            sectionObserver.unobserve(entry.target);
                        } else if (entry.target.id === 'scenarios') {
                            initializeScenarios();
                            sectionObserver.unobserve(entry.target);
                        }
                    }
                });
            }, { rootMargin: '50px' });

            if (quizContainer) sectionObserver.observe(quizContainer);
            if (scenariosContainer) sectionObserver.observe(scenariosContainer);
        } else {
            // Fallback for browsers without IntersectionObserver
            initializeQuizzes();
            initializeScenarios();
        }

        // Event handlers
        if (roleSelectionContainer) {
            roleSelectionContainer.addEventListener('change', (event) => {
                const selectedRole = event.target.value;
                ProgressStore.setUserRole(selectedRole);
                initializeScenarios(); // Ensure scenarios are loaded before re-rendering
                ScenarioRenderer.renderAll();
            });
        }

        if (resetButton) {
            resetButton.addEventListener('click', () => {
                ProgressStore.reset();
                progress = { quizzes: {}, scenarios: [] };
                
                // Update all modules with fresh progress
                QuizRenderer.progress = progress;
                ScenarioRenderer.progress = progress;
                ProgressRenderer.progress = progress;
                SnapshotGenerator.progress = progress;
                
                // Clear role selection
                const checkedRadio = document.querySelector('input[name="role"]:checked');
                if (checkedRadio) {
                    checkedRadio.checked = false;
                }
                
                // Re-render everything
                initializeQuizzes();
                initializeScenarios();
                ProgressRenderer.render();
                
                // Hide snapshot and message
                if (snapshotCanvas) snapshotCanvas.style.display = 'none';
                if (snapshotMessage) snapshotMessage.style.display = 'none';
                if (downloadSnapshotButton) downloadSnapshotButton.style.display = 'none';
            });
        }

        if (generateSnapshotButton) {
            generateSnapshotButton.addEventListener('click', () => {
                SnapshotGenerator.generate();
                
                // Show canvas and success message
                if (snapshotCanvas) {
                    snapshotCanvas.style.display = 'block';
                }
                
                if (snapshotMessage) {
                    snapshotMessage.textContent = '✓ Snapshot generated! Right-click or long-press the image to save, or use the Download button below.';
                    snapshotMessage.style.display = 'block';
                }
                
                if (downloadSnapshotButton) {
                    downloadSnapshotButton.style.display = 'inline-block';
                }
            });
        }

        if (downloadSnapshotButton && snapshotCanvas) {
            downloadSnapshotButton.addEventListener('click', () => {
                try {
                    // Convert canvas to data URL
                    const dataURL = snapshotCanvas.toDataURL('image/png');
                    
                    // Create a temporary link element
                    const link = document.createElement('a');
                    link.download = `cultural-snapshot-${Date.now()}.png`;
                    link.href = dataURL;
                    
                    // Trigger download
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    // Update message
                    if (snapshotMessage) {
                        snapshotMessage.textContent = '✓ Snapshot downloaded successfully!';
                    }
                } catch (error) {
                    console.error('Error downloading snapshot:', error);
                    if (snapshotMessage) {
                        snapshotMessage.textContent = '✗ Error downloading snapshot. Please try right-clicking to save.';
                        snapshotMessage.style.color = '#e74c3c';
                    }
                }
            });
        }

        /**
         * Load and restore saved user role
         */
        function loadUserRole() {
        const savedRole = ProgressStore.getUserRole();
        if (savedRole) {
        const radioToCheck = document.querySelector(`input[name='role'][value='${savedRole}']`);
                if (radioToCheck) {
                    radioToCheck.checked = true;
                }
            }
        }

        // Initial setup
        loadUserRole();
        ProgressRenderer.render();
        
        // Don't render quizzes and scenarios immediately - wait for lazy loading
        // This improves initial page load performance
    });
})();
