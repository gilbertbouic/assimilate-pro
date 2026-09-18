(function () {
    'use strict';
    const data = {
        social: {
            id: 'scenario_med_social',
            title: 'Meals, Time & Warmth',
            region: 'mediterranean',
            category: 'social',
            roles: ['professional', 'student', 'spouse', 'retiree'],
            steps: [
                {
                    title: 'Dinner invitation',
                    description: 'A family invites you for a late dinner.',
                    dos: [
                        'Arrive near the agreed time (slight flexibility varies by country/city).',
                        'Bring a small gift (dessert, wine, flowers - check local norms).',
                        'Compliment the food; stay for conversation.'
                    ],
                    donts: [
                        'Don’t check your phone all evening.',
                        'Don’t refuse everything without trying a polite taste (dietary needs excepted - explain kindly).',
                        'Don’t bring up heated political fights at the first meal.'
                    ]
                }
            ]
        },
        housing: {
            id: 'scenario_med_housing',
            title: 'City Rentals under Tourism Pressure',
            region: 'mediterranean',
            category: 'housing',
            roles: ['professional', 'student', 'remote', 'spouse'],
            steps: [
                {
                    title: 'Agency visit',
                    description: 'Lisbon/Barcelona/Milan-style market: many applicants.',
                    dos: [
                        'Prepare NIE/codice fiscale/NIF-style docs and income proof early.',
                        'Read inventory (estado del lugar) before signing.',
                        'Prefer written contracts over handshake deals.'
                    ],
                    donts: [
                        'Don’t pay reservation fees to unverified private sellers abroad.',
                        'Don’t ignore registration requirements after moving.',
                        'Don’t assume short-term tourist flats are legal long-term homes.'
                    ]
                }
            ]
        },
        bureaucracy: {
            id: 'scenario_med_bureaucracy',
            title: 'Prefecture / Foreigners Office Day',
            region: 'mediterranean',
            category: 'bureaucracy',
            roles: ['professional', 'student', 'spouse', 'undocumented'],
            steps: [
                {
                    title: 'Appointment morning',
                    description: 'You have a hard-won slot for residence paperwork.',
                    dos: [
                        'Bring originals + copies + PDFs on a stick/phone.',
                        'Arrive early with translations if required.',
                        'Get a receipt/stamp/proof of submission.'
                    ],
                    donts: [
                        'Don’t trust hallway touts selling “instant appointments.”',
                        'Don’t argue loudly with clerks - ask for written requirements.',
                        'Don’t leave without knowing the next deadline.'
                    ]
                }
            ]
        }
    };
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('mediterranean', data);
    }
})();
