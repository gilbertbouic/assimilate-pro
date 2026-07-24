/**
 * United Kingdom scenarios — 2026 edition
 */
(function () {
    'use strict';

    const unitedKingdomScenarios = {
        workplace: {
            id: 'scenario_uk_workplace',
            title: 'Settling into a UK Team',
            region: 'united_kingdom',
            category: 'workplace',
            roles: ['professional', 'remote', 'student'],
            steps: [
                {
                    title: 'Kitchen small talk',
                    description: 'Colleagues chat about the weather and weekend plans.',
                    dos: [
                        'Join lightly — weather and TV are safe.',
                        'Queue for the kettle; clean your mug.',
                        'Accept understatement: “not bad” can mean “good.”'
                    ],
                    donts: [
                        'Don’t interrogate people about salary or visas.',
                        'Don’t skip the queue.',
                        'Don’t mistake politeness for close friendship overnight.'
                    ]
                }
            ]
        },
        housing: {
            id: 'scenario_uk_housing',
            title: 'Right to Rent & Viewings',
            region: 'united_kingdom',
            category: 'housing',
            roles: ['professional', 'student', 'spouse', 'remote', 'undocumented'],
            steps: [
                {
                    title: 'Agent requests a share code',
                    description: 'You need to prove digital immigration status.',
                    dos: [
                        'Generate a share code from your official UKVI account.',
                        'Ask what deposit protection scheme is used.',
                        'Read holding-deposit rules before paying.'
                    ],
                    donts: [
                        'Don’t use unofficial “status PDF makers.”',
                        'Don’t pay large cash deposits without receipts and agreements.',
                        'Don’t sign if you do not understand break clauses — get advice.'
                    ]
                }
            ]
        },
        health: {
            id: 'scenario_uk_health',
            title: 'Using the NHS Wisely',
            region: 'united_kingdom',
            category: 'health',
            roles: ['professional', 'student', 'spouse', 'retiree', 'undocumented'],
            steps: [
                {
                    title: 'Non-emergency illness',
                    description: 'You have a fever but can walk and drink water.',
                    dos: [
                        'Register with a GP when eligible.',
                        'Use 111 for advice when unsure.',
                        'Call 999 if symptoms become severe or life-threatening.'
                    ],
                    donts: [
                        'Don’t use A&E as a default GP replacement.',
                        'Don’t share prescription antibiotics “from home” casually — ask a pharmacist/doctor.',
                        'Don’t ignore mental health — ask GP about support routes.'
                    ]
                }
            ]
        }
    };

    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('united_kingdom', unitedKingdomScenarios);
    }
})();
