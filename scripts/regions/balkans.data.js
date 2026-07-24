/**
 * Balkans (2026 edition)
 */
(function () {
    'use strict';

    const balkansData = {
        id: 'quiz_balkans',
        title: 'Balkans Cultural Quiz',
        region: 'balkans',
        category: 'general',
        questions: [
            {
                question: 'Hospitality in much of the Balkans often means…',
                options: {
                    a: 'Guests are ignored',
                    b: 'Guests are treated generously — bring a small gift and show appreciation',
                    c: 'You must refuse all food permanently'
                },
                correct: 'b',
                explanation:
                    'Warm hospitality is a point of pride. Accepting coffee/food politely builds rapport; still respect your boundaries.'
            },
            {
                question: 'Bureaucracy may require…',
                options: {
                    a: 'Zero documents',
                    b: 'Patience, complete paperwork, and sometimes in-person visits — keep copies of everything',
                    c: 'Only English forms'
                },
                correct: 'b',
                explanation:
                    'Processes can be slower and more office-based than Nordic e-gov. Persistence and organized files help.'
            },
            {
                question: 'Family and community ties…',
                options: {
                    a: 'Are irrelevant',
                    b: 'Often central — introductions and trust networks matter for housing and work',
                    c: 'Replace all laws'
                },
                correct: 'b',
                explanation:
                    'Personal networks matter, but always stay within legal work and housing rules.'
            },
            {
                question: 'Political and historical topics with new acquaintances?',
                options: {
                    a: 'Debate aggressively on day one',
                    b: 'Tread carefully; listen; avoid triumphalist takes on sensitive conflicts',
                    c: 'Only discuss football forever'
                },
                correct: 'b',
                explanation:
                    'History is lived memory. Curiosity is fine; arrogance is not.'
            },
            {
                question: 'Emergency number in EU Balkan states?',
                options: {
                    a: '911',
                    b: '112',
                    c: '000'
                },
                correct: 'b',
                explanation: '112 is standard in EU countries of the region.'
            }
        ],
        countries: {
            balkans: {
                name: 'Balkans',
                emoji: '🌍',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'Warm social culture + formal admin offices can coexist.',
                            'EU members (e.g. Croatia, Slovenia, Romania, Bulgaria) differ from non-EU neighbors — know which system you are in.',
                            'Cash may still be common in places, but cards and e-gov are expanding.',
                            'Learn local quiet hours, garbage rules, and building norms in cities.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('balkans', balkansData);
    }
})();
