(function () {
    'use strict';
    const data = {
        digital: {
            id: 'scenario_scand_digital',
            title: 'Getting BankID / MitID Access',
            region: 'scandinavia',
            category: 'bureaucracy',
            roles: ['professional', 'student', 'spouse', 'remote'],
            steps: [
                {
                    title: 'After personal ID number',
                    description: 'You finally received your personnummer/CPR-related ID path.',
                    dos: [
                        'Follow official bank and agency steps for e-ID.',
                        'Enable strong device security and backups for recovery codes.',
                        'Learn which services require e-ID vs in-person visits.'
                    ],
                    donts: [
                        'Don’t share BankID/MitID approvals for strangers’ logins.',
                        'Don’t buy “shortcut” e-ID from social media.',
                        'Don’t ignore tax agency messages once enrolled.'
                    ]
                }
            ]
        },
        social: {
            id: 'scenario_scand_social',
            title: 'Reserved but Equal',
            region: 'scandinavia',
            category: 'social',
            roles: ['professional', 'student', 'spouse'],
            steps: [
                {
                    title: 'Fika / coffee culture',
                    description: 'Coworkers invite you for coffee break.',
                    dos: [
                        'Join when you can - it is social glue.',
                        'Keep conversation light; listen as much as you talk.',
                        'Respect work-life boundaries after hours.'
                    ],
                    donts: [
                        'Don’t dominate with status stories.',
                        'Don’t skip every social ritual then wonder why you are isolated.',
                        'Don’t pressure people to drink alcohol.'
                    ]
                }
            ]
        }
    };
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('scandinavia', data);
    }
})();
