/**
 * Central Europe - Germany, Austria, Switzerland & neighbors (2026 edition)
 */
(function () {
    'use strict';

    const centralEuropeData = {
        id: 'quiz_central_europe',
        title: 'Central Europe Cultural Quiz',
        region: 'central_europe',
        category: 'general',
        questions: [
            {
                question: 'Business meeting in Germany at 10:00. Best arrival time?',
                options: {
                    a: '10:15 - fashionably late',
                    b: 'Exactly 10:00 only if the tram is late',
                    c: 'About 9:55 - a few minutes early'
                },
                correct: 'c',
                explanation:
                    'Pünktlichkeit is a core professional value. Early is polite; late needs a message and a reason.'
            },
            {
                question: 'First email to Dr. Anna Schmidt in a German office. Safest opening?',
                options: {
                    a: 'Hey Anna,',
                    b: 'Dear Anna Schmidt,',
                    c: 'Sehr geehrte Frau Dr. Schmidt,'
                },
                correct: 'c',
                explanation:
                    'Start formal (Sie + titles). People may invite first names later; do not assume.'
            },
            {
                question: 'You move into a German flat. What must you often do quickly?',
                options: {
                    a: 'Nothing until you find a job',
                    b: 'Register your address (Anmeldung) and sort recycling/house rules',
                    c: 'Only tell your friends'
                },
                correct: 'b',
                explanation:
                    'Anmeldung unlocks tax ID, banking, and many services. Hausordnung and trash sorting avoid neighbor conflict and fines.'
            },
            {
                question: 'Sunday in many German/Austrian residential areas - what is expected?',
                options: {
                    a: 'Loud DIY and parties are normal',
                    b: 'Quiet day: avoid loud drilling, mowing, and hallway noise',
                    c: 'Only tourists must be quiet'
                },
                correct: 'b',
                explanation:
                    'Ruhezeiten (quiet hours), especially Sundays and nights, are socially and often legally enforced.'
            },
            {
                question: 'Online appointment systems for Ausländerbehörde / city offices are full. Best approach?',
                options: {
                    a: 'Give up and overstay silently',
                    b: 'Keep checking official portals, use waitlists/hotlines where offered, document attempts, seek NGO/legal advice early',
                    c: 'Pay a stranger on Telegram for a “guaranteed” slot'
                },
                correct: 'b',
                explanation:
                    'Appointment scarcity is real. Document your efforts; avoid illegal brokers; get recognized help for deadlines.'
            },
            {
                question: 'Cash-in-hand job with no contract while on a restricted permit?',
                options: {
                    a: 'Fine if the boss is nice',
                    b: 'Risky: can violate residence conditions and leave you unprotected',
                    c: 'Required to prove integration'
                },
                correct: 'b',
                explanation:
                    'Work rights are status-specific. Illegal employment can damage future permits and insurance coverage.'
            },
            {
                question: 'Health insurance in Germany/Austria/Switzerland - general truth?',
                options: {
                    a: 'Optional if you are young',
                    b: 'Usually mandatory; register and carry your card/app proof',
                    c: 'Only for citizens'
                },
                correct: 'b',
                explanation:
                    'Mandatory health coverage is central. Uninsured gaps create debt and legal problems.'
            },
            {
                question: 'Emergency number across the EU including this region?',
                options: {
                    a: '911',
                    b: '112',
                    c: '999 only'
                },
                correct: 'b',
                explanation: '112 is the EU emergency number (police/fire/medical routing).'
            }
        ],
        countries: {
            germany: {
                name: 'Germany',
                emoji: '🇩🇪',
                sections: [
                    {
                        title: 'Big ideas - Germany now',
                        items: [
                            'Rules, appointments, and written decisions structure daily life.',
                            'Integration courses and language levels often matter for long-term stay.',
                            'Housing in large cities is scarce; Anmeldung requires a real address.',
                            'Digital services expand, but letters (Bescheide) still carry legal force - open them.'
                        ]
                    },
                    {
                        title: 'Papers & bureaucracy',
                        items: [
                            'Anmeldung, tax ID (Steuer-ID), health insurance, and residence title are foundational.',
                            'Keep every Bescheid; deadlines for Widerspruch (appeal) are short.',
                            'Ausländerbehörde appointments are scarce - prepare complete PDF sets.',
                            'Use Caritas, AWO, refugee councils, or licensed lawyers - not cash “fixers.”'
                        ]
                    },
                    {
                        title: 'Neighbours & daily life',
                        items: [
                            'Quiet hours and recycling rules are not optional niceties.',
                            'Greet in shared spaces; keep hallways clear.',
                            'Separate waste correctly (Papier, Gelber Sack/Tonne, Restmüll, Glas).',
                            'Bikes, laundry rooms, and basements have building-specific rules.'
                        ]
                    },
                    {
                        title: 'Work & health',
                        items: [
                            'Written contracts and payslips (Gehaltsabrechnung) matter for extensions.',
                            'Be punctual; ask clarifying questions - precision is respected.',
                            'Hausarzt for normal care; 112 for emergencies; 116 117 for medical on-call in many areas.',
                            'Physical punishment of children is illegal; schools expect attendance.'
                        ]
                    }
                ]
            },
            austria: {
                name: 'Austria',
                emoji: '🇦🇹',
                sections: [
                    {
                        title: 'Essentials',
                        items: [
                            'Formality and titles remain more common than in Anglo cultures.',
                            'Meldezettel (registration) after moving is critical.',
                            'Public transport is excellent in cities; validate tickets correctly.',
                            'Quiet hours and house rules resemble German norms.'
                        ]
                    }
                ]
            },
            switzerland: {
                name: 'Switzerland',
                emoji: '🇨🇭',
                sections: [
                    {
                        title: 'Essentials',
                        items: [
                            'High cost of living; health insurance is mandatory and private-based.',
                            'Punctuality and recycling are strict; neighbors notice noise.',
                            'Permits (B/C etc.) define work and mobility - know your category.',
                            'Local commune (Gemeinde) offices handle much of daily admin.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('central_europe', centralEuropeData);
    }
})();
