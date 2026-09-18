/**
 * Greece (2026 edition)
 */
(function () {
    'use strict';

    const greeceData = {
        id: 'quiz_greece',
        title: 'Greece Cultural Quiz',
        region: 'greece',
        category: 'general',
        questions: [
            {
                question: 'Daily rhythm in Greece often includes…',
                options: {
                    a: 'Everything closing at 16:00 forever',
                    b: 'Later evenings, strong café culture, and family meal time - especially outside tourist rush hours',
                    c: 'No social life on weekdays'
                },
                correct: 'b',
                explanation:
                    'Social life runs later than in northern Europe. Adjust expectations for dinner and opening hours.'
            },
            {
                question: 'AFM, AMKA, and residence documents…',
                options: {
                    a: 'Are optional decorations',
                    b: 'Are foundational for tax, health, and legal work - organize appointments and papers early',
                    c: 'Only matter for yacht owners'
                },
                correct: 'b',
                explanation:
                    'Greek admin codes unlock banking, work, and healthcare. Expect in-person steps and keep copies.'
            },
            {
                question: 'Communication style is often…',
                options: {
                    a: 'Silent and minimal always',
                    b: 'Expressive and warm - still respect personal boundaries and consent',
                    c: 'Only written letters'
                },
                correct: 'b',
                explanation:
                    'Warm expressiveness is common; professionalism and consent still apply at work and in dating.'
            },
            {
                question: 'Summer heat and island/city tourism pressure mean…',
                options: {
                    a: 'No need for water or shade',
                    b: 'Plan hydration, sun protection, and housing early in tourist areas',
                    c: 'Public transport never changes'
                },
                correct: 'b',
                explanation:
                    'Heat and tourism affect prices, crowds, and health. Practical planning prevents crises.'
            },
            {
                question: 'Emergency number?',
                options: {
                    a: '911',
                    b: '112',
                    c: '999'
                },
                correct: 'b',
                explanation: '112 is the EU emergency number in Greece.'
            }
        ],
        countries: {
            greece: {
                name: 'Greece',
                emoji: '🇬🇷',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'Family networks and neighborhood ties remain strong.',
                            'Admin can mix digital systems with in-person offices - patience helps.',
                            'Tourism economies: seasonal work rules and contracts still matter legally.',
                            'Respect churches and local customs in smaller communities.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('greece', greeceData);
    }
})();
