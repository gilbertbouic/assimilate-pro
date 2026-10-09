(function () {
    'use strict';
    const data = {
        social: {
            id: 'scenario_fi_social',
            title: 'Comfortable Quiet',
            region: 'finland',
            category: 'social',
            roles: ['professional', 'student', 'spouse'],
            steps: [
                {
                    title: 'Elevator and lunch',
                    description: 'Coworkers are friendly but not chatty.',
                    dos: [
                        'Accept silence without taking offense.',
                        'Be reliable - trust compounds slowly.',
                        'Join optional activities (sports, hobby clubs) for deeper ties.'
                    ],
                    donts: [
                        'Don’t force continuous small talk.',
                        'Don’t stand too close.',
                        'Don’t treat reserved culture as rudeness.'
                    ]
                }
            ]
        }
    };
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('finland', data);
    }
})();
