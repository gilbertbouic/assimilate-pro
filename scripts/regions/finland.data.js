/**
 * Finland (2026 edition)
 */
(function () {
    'use strict';

    const finlandData = {
        id: 'quiz_finland',
        title: 'Finland Cultural Quiz',
        region: 'finland',
        category: 'general',
        questions: [
            {
                question: 'Personal space and quietness in Finland often mean…',
                options: {
                    a: 'People are angry with you',
                    b: 'Respect for privacy — small talk is optional, not mandatory',
                    c: 'You should stand closer when speaking'
                },
                correct: 'b',
                explanation:
                    'Finns value privacy and calm. Reserved behavior is normal politeness, not hostility.'
            },
            {
                question: 'Sauna culture — what is true?',
                options: {
                    a: 'Always mixed nude with coworkers on day one',
                    b: 'Common and social, but norms vary; follow host cues and consent; many public saunas have clear rules',
                    c: 'Only for athletes'
                },
                correct: 'b',
                explanation:
                    'Sauna is cultural, not a test. Hygiene, consent, and posted rules matter; you can decline politely.'
            },
            {
                question: 'Digital public services in Finland?',
                options: {
                    a: 'Rarely used',
                    b: 'Very advanced — Suomi.fi, online banking IDs, and e-services are central after you get IDs',
                    c: 'Only paper forms exist'
                },
                correct: 'b',
                explanation:
                    'Once you have the right identifiers, most life admin is online. Learn the official portals.'
            },
            {
                question: 'Nature access (everyman’s rights / jokamiehenoikeudet) means…',
                options: {
                    a: 'You may camp anywhere including private gardens',
                    b: 'Responsible access to nature with limits — no damage, no disturbance, respect local rules',
                    c: 'Foreigners may not enter forests'
                },
                correct: 'b',
                explanation:
                    'Freedom to roam comes with duties: leave no trace, respect homes, and check local restrictions.'
            },
            {
                question: 'Emergency number in Finland?',
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
            finland: {
                name: 'Finland',
                emoji: '🇫🇮',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'Quiet competence is valued over loud networking.',
                            'Winter readiness (clothing, lighting, mental health) is practical survival.',
                            'Strong trust in institutions — follow rules and deadlines.',
                            'Language: English works in cities; Finnish/Swedish help long-term work and belonging.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('finland', finlandData);
    }
})();
