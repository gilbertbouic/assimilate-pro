/**
 * United Kingdom - cultural quizzes & guidance (2026 edition)
 */
(function () {
    'use strict';

    const unitedKingdomData = {
        id: 'quiz_united_kingdom',
        title: 'United Kingdom Cultural Quiz',
        region: 'united_kingdom',
        category: 'general',
        questions: [
            {
                question: 'In a UK office, how do people often queue and wait?',
                options: {
                    a: 'Push to the front if you are busy.',
                    b: 'Form an orderly queue; jumping the line is strongly disliked.',
                    c: 'Call loudly until served.'
                },
                correct: 'b',
                explanation:
                    'Queuing is a strong social norm. Patience and fairness signal that you understand local manners.'
            },
            {
                question: 'Your colleague says a plan is “not bad.” What might they mean?',
                options: {
                    a: 'It is terrible.',
                    b: 'It is actually quite good (British understatement).',
                    c: 'They want you to cancel it.'
                },
                correct: 'b',
                explanation:
                    'British English often understates praise and criticism. “Not bad,” “quite good,” and careful politeness are common.'
            },
            {
                question:
                    'You need to prove your right to rent or work in England. What is realistic in 2026?',
                options: {
                    a: 'A verbal promise is enough.',
                    b: 'Landlords and employers run digital right-to-rent / right-to-work checks using your share code or documents.',
                    c: 'Only British passports work.'
                },
                correct: 'b',
                explanation:
                    'Digital status checks are standard. Keep your UKVI account accessible and generate share codes when asked.'
            },
            {
                question: 'NHS care - what should newcomers understand?',
                options: {
                    a: 'Walk into any hospital for routine issues; it is always free for everyone the same way.',
                    b: 'Register with a GP when eligible; A&E is for emergencies; some services depend on immigration status and residence rules.',
                    c: 'You must pay cash at reception for every visit forever.'
                },
                correct: 'b',
                explanation:
                    'The NHS is structured around GP registration and triage. Eligibility and charges can depend on status - check official guidance.'
            },
            {
                question: 'Someone insults your background in public. What is a wise first response?',
                options: {
                    a: 'Escalate to a fight.',
                    b: 'Prioritize safety; leave if needed; report hate crime/incidents to police when appropriate; use support organizations.',
                    c: 'Post their photo everywhere online immediately.'
                },
                correct: 'b',
                explanation:
                    'Safety first. The UK has hate-crime reporting routes and community support; street retaliation can make things worse legally and personally.'
            },
            {
                question: 'Council tax and utility setup - why do they matter quickly?',
                options: {
                    a: 'They are optional for the first two years.',
                    b: 'Unpaid council tax and bills create debt and enforcement; set up accounts when you move in.',
                    c: 'Only homeowners pay any bills.'
                },
                correct: 'b',
                explanation:
                    'Household bills and council tax are serious. Ask your landlord or council which band/account applies to you.'
            },
            {
                question: 'Small talk at a bus stop or kitchen - what topics are usually safe?',
                options: {
                    a: 'Immediate questions about salary and visa details.',
                    b: 'Weather, commute, TV, sports, weekend plans - light and optional.',
                    c: 'Detailed political arguments with strangers.'
                },
                correct: 'b',
                explanation:
                    'Light small talk builds rapport; personal finance, immigration status, and heated politics are usually private.'
            },
            {
                question: 'UK emergency number for police/fire/ambulance?',
                options: {
                    a: '911',
                    b: '999 (also 112)',
                    c: '111 only'
                },
                correct: 'b',
                explanation:
                    '999 (and 112) for emergencies. 111 is for non-emergency medical advice in many areas.'
            }
        ],
        countries: {
            united_kingdom: {
                name: 'United Kingdom',
                emoji: '🇬🇧',
                sections: [
                    {
                        title: 'Big ideas - life in the UK (now)',
                        items: [
                            'Politeness, queuing, and understatement oil daily life.',
                            'Immigration status is checked digitally for work and often rent.',
                            'Housing costs in big cities are high; scams and bidding wars happen.',
                            'Public services use online accounts (Universal Credit, NHS App, GOV.UK One Login where rolled out).'
                        ]
                    },
                    {
                        title: 'Papers & bureaucracy',
                        items: [
                            'Use your UKVI account; keep BRP/eVisa details and share codes ready.',
                            'Report changes (address, details) within required timelines.',
                            'Citizens Advice and regulated advisers beat unregulated “visa agents.”',
                            'Watch phishing emails pretending to be HMRC, the Home Office, or delivery firms.'
                        ]
                    },
                    {
                        title: 'Work & housing',
                        items: [
                            'Right to work checks are routine; do not work outside your conditions.',
                            'Zero-hours and agency work exist - understand holiday pay and hours.',
                            'Right to rent checks apply in England; know what documents or share codes you need.',
                            'Deposits should go into protection schemes for many assured shorthold tenancies.'
                        ]
                    },
                    {
                        title: 'Health & emergencies',
                        items: [
                            'Register with a GP; use 111 for non-emergency medical advice where available.',
                            '999/112 for emergencies.',
                            'Dentists and some services may have long waits - ask about urgent slots.',
                            'Mental health: NHS routes and charities (e.g. crisis lines) exist; ask a GP for referral options.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('united_kingdom', unitedKingdomData);
    }
})();
