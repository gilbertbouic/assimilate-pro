/**
 * Mediterranean - Spain, France, Italy, Portugal & nearby (2026 edition)
 */
(function () {
    'use strict';

    const mediterraneanData = {
        id: 'quiz_mediterranean',
        title: 'Mediterranean Cultural Quiz',
        region: 'mediterranean',
        category: 'general',
        questions: [
            {
                question: 'In Spain, dinner in many urban areas is often…',
                options: {
                    a: '17:00 sharp',
                    b: 'Around 21:00-23:00',
                    c: 'Replaced by breakfast only'
                },
                correct: 'b',
                explanation:
                    'Spain’s daily rhythm runs later. Social meals are central to belonging.'
            },
            {
                question: 'French laïcité primarily refers to…',
                options: {
                    a: 'Wine regions',
                    b: 'Secularism - religion is private; public institutions stay neutral',
                    c: 'A sports league'
                },
                correct: 'b',
                explanation:
                    'Secular public space is a core French principle. Personal belief remains free within the law.'
            },
            {
                question: 'Italian social life often prioritizes…',
                options: {
                    a: 'Eating alone at your desk forever',
                    b: 'Family and shared meals as social glue',
                    c: 'Avoiding all conversation'
                },
                correct: 'b',
                explanation:
                    'Food and family time structure relationships. Accepting invitations builds trust.'
            },
            {
                question: 'Housing in popular Mediterranean cities in 2026?',
                options: {
                    a: 'Always cheap and easy same-day',
                    b: 'Often competitive with short-term rental pressure - start early, verify contracts, watch scams',
                    c: 'No deposits ever'
                },
                correct: 'b',
                explanation:
                    'Tourism and remote workers tightened housing. Use legal contracts and local tenant advice.'
            },
            {
                question: 'Tipping in Italy/France restaurants?',
                options: {
                    a: 'Mandatory 25% always',
                    b: 'Service often included; small rounding or a few euros for good service is common',
                    c: 'Tipping is illegal'
                },
                correct: 'b',
                explanation:
                    'Unlike the US, service is frequently included. Local rounding customs still show appreciation.'
            },
            {
                question: 'Physical punishment of children across these countries?',
                options: {
                    a: 'Encouraged',
                    b: 'Socially rejected and can trigger legal/social-service consequences',
                    c: 'Only banned for teenagers'
                },
                correct: 'b',
                explanation:
                    'Child protection standards are strict. Violence against children is illegal.'
            },
            {
                question: 'Consent in dating and nightlife?',
                options: {
                    a: 'Optional if you paid for dinner',
                    b: 'Required always - unwanted contact can be a crime',
                    c: 'Only needed for marriage'
                },
                correct: 'b',
                explanation:
                    'Consent and personal boundaries are legal and social requirements everywhere you should live.'
            },
            {
                question: 'Emergency number in EU Mediterranean countries?',
                options: {
                    a: '911',
                    b: '112',
                    c: '000'
                },
                correct: 'b',
                explanation: '112 is the EU emergency number.'
            }
        ],
        countries: {
            spain: {
                name: 'Spain',
                emoji: '🇪🇸',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'NIE/TIE and empadronamiento (local registration) unlock services.',
                            'Regional differences (Catalonia, Basque Country, Andalusia…) affect language and admin.',
                            'Night life and family outings run late; siesta stereotypes are exaggerated in big cities.',
                            'Rental deposits and agency fees - read contracts; use official complaint routes for fraud.'
                        ]
                    }
                ]
            },
            france: {
                name: 'France',
                emoji: '🇫🇷',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'Prefecture appointments and CAF/CPAM processes can be slow - document everything.',
                            'Formal written French helps with admin; tutoiement comes when invited.',
                            'Laïcité shapes schools and public institutions.',
                            'Strikes and protests occur - plan travel; they are part of civic culture.'
                        ]
                    }
                ]
            },
            italy: {
                name: 'Italy',
                emoji: '🇮🇹',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'Permesso di soggiorno and codice fiscale are core IDs.',
                            'North/South and city/town cultures differ; learn local office hours.',
                            'Cash still appears, but POS cards are widespread legally.',
                            'Family networks help - still insist on legal contracts for work and rent.'
                        ]
                    }
                ]
            },
            portugal: {
                name: 'Portugal',
                emoji: '🇵🇹',
                sections: [
                    {
                        title: 'Essentials (now)',
                        items: [
                            'Housing pressure in Lisbon/Porto is intense after years of inflows.',
                            'NIF and SEF/AIMA processes (or successors) - follow current official sites.',
                            'Warm politeness; learn basic Portuguese for admin and belonging.',
                            'Watch golden-promise migration scams and fake rental listings.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('mediterranean', mediterraneanData);
    }
})();
