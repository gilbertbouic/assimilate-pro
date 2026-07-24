(function () {
    'use strict';
    const data = {
        social: {
            id: 'scenario_balkans_social',
            title: 'Hospitality & Respect',
            region: 'balkans',
            category: 'social',
            roles: ['professional', 'student', 'spouse', 'retiree'],
            steps: [
                {
                    title: 'Invited for coffee',
                    description: 'A neighbor insists you come in for coffee and sweets.',
                    dos: [
                        'Accept if you can; bring a small treat next time.',
                        'Show interest in family without prying.',
                        'Thank the host warmly.'
                    ],
                    donts: [
                        'Don’t mock traditions.',
                        'Don’t start sensitive historical arguments uninvited.',
                        'Don’t refuse every gesture — it can read as cold.'
                    ]
                }
            ]
        }
    };
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('balkans', data);
    }
})();
