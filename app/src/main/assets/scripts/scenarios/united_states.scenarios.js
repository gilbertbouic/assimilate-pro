/**
 * United States scenarios - 2026 edition
 */
(function () {
    'use strict';

    const unitedStatesScenarios = {
        workplace: {
            id: 'scenario_us_workplace',
            title: 'First Week in a US Workplace',
            region: 'united_states',
            category: 'workplace',
            roles: ['professional', 'remote', 'entrepreneur', 'student'],
            steps: [
                {
                    title: 'Day-one introductions',
                    description: 'Your manager greets you and walks you past the team.',
                    dos: [
                        'Use first names unless told otherwise.',
                        'Offer a clear handshake or follow the other person’s lead on contact.',
                        'Write down names and roles after meetings.'
                    ],
                    donts: [
                        'Don’t stay silent all week hoping someone mind-reads your blockers.',
                        'Don’t overshare visa stress in the first hour.',
                        'Don’t refuse all small talk - brief friendliness builds allies.'
                    ]
                },
                {
                    title: 'Flagging a delay',
                    description: 'A task will miss the Friday deadline.',
                    dos: [
                        'Message early with status, risk, and options.',
                        'Ask which priority to drop if everything is “urgent.”',
                        'Document agreements in the thread or ticket.'
                    ],
                    donts: [
                        'Don’t disappear until Friday night.',
                        'Don’t blame teammates publicly without facts.',
                        'Don’t promise miracles you cannot deliver.'
                    ]
                }
            ]
        },
        housing: {
            id: 'scenario_us_housing',
            title: 'Renting in a Competitive US City',
            region: 'united_states',
            category: 'housing',
            roles: ['professional', 'student', 'spouse', 'undocumented', 'remote'],
            steps: [
                {
                    title: 'Online listing',
                    description: 'A great apartment is “below market” and the owner is “abroad.”',
                    dos: [
                        'Verify the address on maps and public records when possible.',
                        'Visit in person or via a trusted local contact.',
                        'Use traceable payments only after a real lease.'
                    ],
                    donts: [
                        'Don’t wire a deposit to hold a unit you have never verified.',
                        'Don’t send passport photos to random accounts.',
                        'Don’t ignore missing licenses on “agents.”'
                    ]
                }
            ]
        },
        bureaucracy: {
            id: 'scenario_us_bureaucracy',
            title: 'Keeping Your Status Healthy',
            region: 'united_states',
            category: 'bureaucracy',
            roles: ['professional', 'student', 'spouse', 'undocumented', 'remote', 'entrepreneur'],
            steps: [
                {
                    title: 'Portal + mail',
                    description: 'USCIS or your school portal shows a request for evidence.',
                    dos: [
                        'Download every notice the day you see it.',
                        'Track deadlines on a calendar with reminders.',
                        'Use qualified legal help for complex replies.'
                    ],
                    donts: [
                        'Don’t ignore “spam-looking” government email without checking the portal.',
                        'Don’t pay gift-card scammers who claim to be officers.',
                        'Don’t work outside your authorization to “fix money stress.”'
                    ]
                }
            ]
        }
    };

    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('united_states', unitedStatesScenarios);
    }
})();
