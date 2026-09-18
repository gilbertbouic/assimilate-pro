/**
 * Baltics - Estonia, Latvia, Lithuania (2026 edition)
 */
(function () {
    'use strict';

    const balticsData = {
        id: 'quiz_baltics',
        title: 'Baltic States Cultural Quiz',
        region: 'baltics',
        category: 'general',
        questions: [
            {
                question: 'Estonia is especially known for…',
                options: {
                    a: 'Avoiding all digital services',
                    b: 'Highly digital public services (e-Residency, e-government) once you are set up',
                    c: 'Banning online banking'
                },
                correct: 'b',
                explanation:
                    'Estonia’s digital state is a model - but you still need correct IDs and registrations to access it.'
            },
            {
                question: 'First meetings with locals may feel…',
                options: {
                    a: 'Instantly intimate like old friends',
                    b: 'Reserved at first, warmer with time and reliability',
                    c: 'Hostile by default'
                },
                correct: 'b',
                explanation:
                    'Trust builds through consistency. Showing up on time and keeping promises matters.'
            },
            {
                question: 'Historical sensitivity in the region means…',
                options: {
                    a: 'History never comes up',
                    b: 'Be respectful; avoid simplistic lectures about the region’s past and present security context',
                    c: 'Only tourists may discuss politics'
                },
                correct: 'b',
                explanation:
                    'The Baltics have deep historical and security sensitivities. Listen more than you lecture.'
            },
            {
                question: 'Winter and daylight…',
                options: {
                    a: 'Do not affect mood or planning',
                    b: 'Plan for dark winters: lighting, vitamin D advice from doctors, indoor social habits',
                    c: 'Shops close for six months'
                },
                correct: 'b',
                explanation:
                    'Seasonal darkness is real. Practical routines and social contact help.'
            },
            {
                question: 'Emergency number?',
                options: {
                    a: '911',
                    b: '112',
                    c: '999'
                },
                correct: 'b',
                explanation: '112 is the emergency number.'
            }
        ],
        countries: {
            estonia: {
                name: 'Estonia',
                emoji: '🇪🇪',
                sections: [
                    {
                        title: 'Essentials',
                        items: [
                            'Digital services are a superpower after ID setup.',
                            'English is common in tech; Estonian helps integration.',
                            'Punctual, low-drama communication works well.',
                            'Nature is close to cities - respect trails and private land.'
                        ]
                    }
                ]
            },
            latvia: {
                name: 'Latvia',
                emoji: '🇱🇻',
                sections: [
                    {
                        title: 'Essentials',
                        items: [
                            'Riga is the hub; learn local admin steps for registration.',
                            'Reserved social style; reliability builds trust.',
                            'Learn waste rules and public transport tickets.',
                            'Russian and Latvian language politics are sensitive - be respectful.'
                        ]
                    }
                ]
            },
            lithuania: {
                name: 'Lithuania',
                emoji: '🇱🇹',
                sections: [
                    {
                        title: 'Essentials',
                        items: [
                            'Family and Catholic cultural heritage influence many communities.',
                            'Growing tech and service sectors in cities.',
                            'Formality with older people is appreciated.',
                            'Follow residence registration and health insurance rules carefully.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('baltics', balticsData);
    }
})();
