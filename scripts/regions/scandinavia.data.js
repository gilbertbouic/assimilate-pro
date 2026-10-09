/**
 * Scandinavia - Sweden, Norway, Denmark (2026 edition)
 */
(function () {
    'use strict';

    const scandinaviaData = {
        id: 'quiz_scandinavia',
        title: 'Scandinavia Cultural Quiz',
        region: 'scandinavia',
        category: 'general',
        questions: [
            {
                question: 'In Sweden/Norway/Denmark, silence in conversation often means…',
                options: {
                    a: 'They dislike you',
                    b: 'Comfortable pause - not necessarily awkwardness',
                    c: 'You must fill every second with talk'
                },
                correct: 'b',
                explanation:
                    'Reserved communication is normal. Silence can mean thinking or simply comfort, not rejection.'
            },
            {
                question: 'What is “Jantelagen / Janteloven” often used to describe?',
                options: {
                    a: 'A tax form',
                    b: 'A cultural norm against showing off or claiming superiority',
                    c: 'A type of winter tire'
                },
                correct: 'b',
                explanation:
                    'Modesty norms discourage boasting. Competence still matters - just present it factually.'
            },
            {
                question: 'BankID / MitID / similar e-IDs are important because…',
                options: {
                    a: 'They are only for gamers',
                    b: 'They unlock banking, healthcare portals, tax, and many government services',
                    c: 'Paper stamps replaced them completely'
                },
                correct: 'b',
                explanation:
                    'Nordic life is highly digital. Getting official e-ID after personnummer/CPR/D-number setup is a top priority.'
            },
            {
                question: 'Outdoor clothing culture in winter cities?',
                options: {
                    a: 'Fashion heels matter more than weather',
                    b: 'Practical layers, good shoes, and weather-ready clothes are respected',
                    c: 'Only tourists wear coats'
                },
                correct: 'b',
                explanation:
                    'Practicality beats display. Being weather-prepared is adult competence, not weakness.'
            },
            {
                question: 'Recycling and bottle returns (pant)?',
                options: {
                    a: 'Optional decoration',
                    b: 'Strong norm - sort waste and return bottles/cans for deposit',
                    c: 'Illegal for foreigners'
                },
                correct: 'b',
                explanation:
                    'Environmental rules and deposit systems are everyday practice. Learn the local bins.'
            },
            {
                question: 'Equality in the workplace often means…',
                options: {
                    a: 'Never speak in meetings',
                    b: 'Flat hierarchy: use first names, contribute ideas, but still deliver',
                    c: 'Only managers may suggest improvements'
                },
                correct: 'b',
                explanation:
                    'Hierarchies are flatter; respectful disagreement is possible. Still meet deadlines and quality bars.'
            },
            {
                question: 'Emergency number?',
                options: {
                    a: '911',
                    b: '112',
                    c: '999 only'
                },
                correct: 'b',
                explanation: '112 is the emergency number across Scandinavia.'
            }
        ],
        countries: {
            sweden: {
                name: 'Sweden',
                emoji: '🇸🇪',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'Personnummer unlocks almost everything - housing and bank depend on it.',
                            'BankID is daily life for payments and government.',
                            'Lagom and equality shape social tone; avoid aggressive self-promotion.',
                            'Housing queues (bostadskö) in cities can be long; watch for rental scams.'
                        ]
                    }
                ]
            },
            norway: {
                name: 'Norway',
                emoji: '🇳🇴',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'High costs; outdoor life (friluftsliv) is mainstream.',
                            'D-number/national ID processes gate services.',
                            'Direct but polite communication; punctuality matters.',
                            'Strong labor rules - know your contract and union options.'
                        ]
                    }
                ]
            },
            denmark: {
                name: 'Denmark',
                emoji: '🇩🇰',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'CPR number and MitID are critical.',
                            'Cycling infrastructure is real - learn lights and bike lane rules.',
                            'Informal tone (first names) with clear boundaries.',
                            'Trust-based society: freeriding on rules damages your reputation fast.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('scandinavia', scandinaviaData);
    }
})();
