/**
 * Central Europe scenarios — 2026 edition
 */
(function () {
    'use strict';

    const centralEuropeScenarios = {
        workplace: {
            id: 'scenario_ce_workplace',
            title: 'German-speaking Office Norms',
            region: 'central_europe',
            category: 'workplace',
            roles: ['professional', 'remote', 'entrepreneur'],
            steps: [
                {
                    title: 'Meeting culture',
                    description: 'A planning meeting starts at 9:00.',
                    dos: [
                        'Arrive a few minutes early with notes.',
                        'Use formal address until invited to switch.',
                        'Be precise: facts over long stories.'
                    ],
                    donts: [
                        'Don’t improvise “fashionably late.”',
                        'Don’t interrupt constantly.',
                        'Don’t ignore written follow-ups — email trails matter.'
                    ]
                }
            ]
        },
        bureaucracy: {
            id: 'scenario_ce_bureaucracy',
            title: 'Anmeldung & Authority Letters',
            region: 'central_europe',
            category: 'bureaucracy',
            roles: ['professional', 'student', 'spouse', 'undocumented', 'remote'],
            steps: [
                {
                    title: 'You receive a yellow letter',
                    description: 'An official envelope arrives while you are at work.',
                    dos: [
                        'Open it the same day; note any deadline.',
                        'Scan/photo the full letter including date.',
                        'Ask a migration counsellor if you do not understand.'
                    ],
                    donts: [
                        'Don’t leave letters unopened for weeks.',
                        'Don’t miss Widerspruch/appeal windows.',
                        'Don’t pay random “agents” who demand cash for “guaranteed stamps.”'
                    ]
                }
            ]
        },
        housing: {
            id: 'scenario_ce_housing',
            title: 'Flat Hunt & House Rules',
            region: 'central_europe',
            category: 'housing',
            roles: ['professional', 'student', 'spouse', 'remote'],
            steps: [
                {
                    title: 'WG interview',
                    description: 'Shared flat roommates ask about quiet hours and cleaning.',
                    dos: [
                        'Be honest about work shifts and guests.',
                        'Learn recycling and hallway rules.',
                        'Get the landlord’s permission requirements in writing when needed.'
                    ],
                    donts: [
                        'Don’t host loud parties on Sunday night.',
                        'Don’t ignore Hausordnung.',
                        'Don’t sublet illegally.'
                    ]
                }
            ]
        }
    };

    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('central_europe', centralEuropeScenarios);
    }
})();
