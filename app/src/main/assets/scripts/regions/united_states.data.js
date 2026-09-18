/**
 * United States - cultural quizzes & guidance (2026 edition)
 */
(function () {
    'use strict';

    const unitedStatesData = {
        id: 'quiz_united_states',
        title: 'United States Cultural Quiz',
        region: 'united_states',
        category: 'general',
        questions: [
            {
                question:
                    'You meet your new US manager, Jordan Lee, on day one. What is usually the safest greeting?',
                options: {
                    a: 'Good morning, Mr./Ms. Lee. It is a pleasure to make your acquaintance.',
                    b: 'Hey Jordan, what\'s up?',
                    c: 'Hi Jordan - great to meet you.'
                },
                correct: 'c',
                explanation:
                    'US workplaces are often first-name and friendly-but-professional. Overly stiff formality can feel distant; extreme slang on day one can feel unprofessional.'
            },
            {
                question:
                    'A colleague says “I\'ll be honest with you…” before feedback. What does this usually signal?',
                options: {
                    a: 'They are about to insult you.',
                    b: 'They are about to be direct and want the message to land clearly.',
                    c: 'They have been lying until now.'
                },
                correct: 'b',
                explanation:
                    'Directness is valued. The phrase softens blunt feedback; it is usually meant to help, not to attack.'
            },
            {
                question: 'At a full-service US restaurant, what tipping practice is still expected in 2026?',
                options: {
                    a: 'No tip - wages already cover service.',
                    b: 'About 15-20% for standard good service (more for excellent; adjust if a service fee is already added).',
                    c: 'Only tip if the server asks.'
                },
                correct: 'b',
                explanation:
                    'Tipping remains structural in much of US hospitality. Check the bill for automatic gratuity, then tip accordingly.'
            },
            {
                question:
                    'You need a state ID or driver license after arriving. What is a realistic expectation?',
                options: {
                    a: 'Any foreign ID is enough forever for banking and work.',
                    b: 'Requirements vary by state; gather immigration documents, proof of address, and book ahead - waits can be long.',
                    c: 'Only citizens can get any ID.'
                },
                correct: 'b',
                explanation:
                    'DMV/ID rules are state-based. Appointments and document lists matter; start early for banking and work onboarding.'
            },
            {
                question:
                    'Your work authorization or visa has an end date. What is the professional approach?',
                options: {
                    a: 'Ignore it until HR emails you.',
                    b: 'Track expiry yourself, keep copies of all status documents, and start renewal/change-of-status early with qualified help.',
                    c: 'Switch to cash work if it expires.'
                },
                correct: 'b',
                explanation:
                    'Status maintenance is your responsibility. Early action beats emergency filings; unlawful work harms future options.'
            },
            {
                question:
                    'A landlord asks for first month, deposit, and proof of income. Is that normal?',
                options: {
                    a: 'No - any document request is discrimination.',
                    b: 'Often yes in competitive markets; still verify the listing is real and never wire money to a stranger you have not vetted.',
                    c: 'Only pay in cryptocurrency for safety.'
                },
                correct: 'b',
                explanation:
                    'Screening is common. Scams are also common - visit the unit, confirm ownership/management, and use traceable legitimate payments.'
            },
            {
                question:
                    'In many US workplaces, what is expected if you will miss a deadline?',
                options: {
                    a: 'Stay silent and hope no one notices.',
                    b: 'Flag the risk early, propose a plan, and ask for priorities.',
                    c: 'Blame another team in a group email.'
                },
                correct: 'b',
                explanation:
                    'Proactive communication is respected. Surprises damage trust more than asking for help early.'
            },
            {
                question: 'Emergency medical situation in the US - what number do you call?',
                options: {
                    a: '112 only',
                    b: '911',
                    c: 'Your embassy first'
                },
                correct: 'b',
                explanation:
                    'Call 911 for police, fire, or medical emergencies. Insurance and costs matter after you are safe - do not delay life-threatening care.'
            }
        ],
        countries: {
            united_states: {
                name: 'United States',
                emoji: '🇺🇸',
                sections: [
                    {
                        title: 'Big ideas - life in the US (now)',
                        items: [
                            'Systems are fragmented: federal immigration rules + state/city services differ widely.',
                            'Self-advocacy is expected - bring documents, ask questions, follow up in writing.',
                            'Credit history, SSN/ITIN, and local ID unlock housing, phones, and utilities.',
                            'Public debate on immigration can be loud; focus on legal status, community, and practical networks.'
                        ]
                    },
                    {
                        title: 'Papers & digital bureaucracy',
                        items: [
                            'Keep digital and paper copies of passport, visa/I-94, EAD, I-20/DS-2019, green card notices, etc.',
                            'USCIS and many courts use online accounts - monitor them and your email spam folder.',
                            'Address changes often must be reported to multiple agencies on deadlines.',
                            'Use licensed attorneys or DOJ-accredited representatives for complex cases - not random “notarios” promising guarantees.'
                        ]
                    },
                    {
                        title: 'Work',
                        items: [
                            'I-9 employment verification is standard; only work if authorized for that employer/role.',
                            'At-will employment is common: professionalism and documentation still protect you.',
                            'Healthcare is often employer-tied - understand open enrollment and COBRA-like gaps if you leave a job.',
                            'Tips, overtime, and contractor vs employee status have legal definitions - learn yours.'
                        ]
                    },
                    {
                        title: 'Housing',
                        items: [
                            'Rental markets in major metros are competitive; prepare pay stubs, references, and deposits.',
                            'Watch for listing scams on social media and listing sites.',
                            'Tenant rights vary by city/state (deposits, eviction process, habitability).',
                            'Roommates agreements prevent conflict over bills and guests.'
                        ]
                    },
                    {
                        title: 'Health & emergencies',
                        items: [
                            '911 for emergencies. For non-emergencies, urgent care or a primary doctor is usually better than the ER.',
                            'Emergency rooms must stabilize emergency conditions regardless of insurance - bills can still follow.',
                            'Community clinics and sliding-scale care exist for eligible people - ask local NGOs.',
                            'Mental health: many employers offer EAP counseling; crisis lines are available 24/7.'
                        ]
                    }
                ]
            }
        }
    };

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('united_states', unitedStatesData);
    }
})();
