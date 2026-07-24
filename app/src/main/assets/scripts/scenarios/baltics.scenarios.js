(function () {
    'use strict';
    const data = {
        digital: {
            id: 'scenario_baltic_digital',
            title: 'E-Services First',
            region: 'baltics',
            category: 'bureaucracy',
            roles: ['professional', 'student', 'remote', 'entrepreneur'],
            steps: [
                {
                    title: 'Government portal',
                    description: 'You need to file a residence or tax-related form.',
                    dos: [
                        'Use official state portals and bank links only.',
                        'Keep PDF confirmations.',
                        'Learn which steps still need an in-person visit.'
                    ],
                    donts: [
                        'Don’t use look-alike phishing sites from ads.',
                        'Don’t share ID-card PINs.',
                        'Don’t ignore bilingual official notices.'
                    ]
                }
            ]
        }
    };
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('baltics', data);
    }
})();
