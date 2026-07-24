(function () {
    'use strict';
    const data = {
        bureaucracy: {
            id: 'scenario_gr_bureaucracy',
            title: 'AFM / AMKA Pathway',
            region: 'greece',
            category: 'bureaucracy',
            roles: ['professional', 'student', 'spouse', 'retiree', 'undocumented'],
            steps: [
                {
                    title: 'Document day',
                    description: 'You need tax and health numbers to work legally.',
                    dos: [
                        'Check current official requirements before you go.',
                        'Bring passport, residence proof, and copies.',
                        'Keep every receipt and protocol number.'
                    ],
                    donts: [
                        'Don’t pay unofficial “facilitators” without credentials.',
                        'Don’t work full cash jobs that block future permits.',
                        'Don’t miss appointment windows in peak tourist season.'
                    ]
                }
            ]
        }
    };
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('greece', data);
    }
})();
