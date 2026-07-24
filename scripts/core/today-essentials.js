/**
 * Present-day (2025–2026) essentials for newcomers to Western countries.
 * Practical, non-political survival guidance shared across regions.
 */
(function () {
    'use strict';

    const essentials = {
        id: 'today_essentials_2026',
        title: 'Today in the West — What Changed for Newcomers',
        updated: '2026-07',
        intro:
            'Western countries still welcome workers, students, families, and people seeking safety — but systems are more digital, housing is tighter, paperwork is stricter, and scams targeting newcomers are common. This guide focuses on what helps you stay legal, housed, employed, and safe right now.',

        pillars: [
            {
                id: 'digital_state',
                icon: '💻',
                title: 'Digital-first government',
                points: [
                    'Many appointments (immigration, city hall, health, tax) exist only online. Learn to book portals, upload PDFs, and check email daily.',
                    'Official messages often arrive by letter AND online account. Missing a deadline can freeze benefits or status — set calendar reminders.',
                    'Use official domains (.gov, .gov.uk, .gouv.fr, .bund.de, etc.). Bookmark them. Never log in from random ads.',
                    'Two-factor authentication (SMS or authenticator app) is normal for banks, tax, and residency portals. Protect your phone number.'
                ]
            },
            {
                id: 'housing',
                icon: '🏠',
                title: 'Housing pressure',
                points: [
                    'In many cities, demand exceeds supply. Expect competition, viewing queues, and requests for income proof, deposit, and references.',
                    'Never pay a deposit or “reservation fee” before seeing a real contract and verifying the landlord or agency.',
                    'Shared flats (WG / coliving / houseshare) are a common first step. Read house rules: quiet hours, guests, cleaning.',
                    'Registering your address is often legally required soon after moving. Without registration you may not get a bank account, tax ID, or school place.'
                ]
            },
            {
                id: 'work_rights',
                icon: '🛠️',
                title: 'Work, skills & the grey zone',
                points: [
                    'Care, construction, logistics, hospitality, and many tech roles need people — but only within your legal work rights. Check your permit before accepting hours.',
                    'Cash-in-hand offers that skip taxes can cost you future residency, benefits, and pensions. Prefer written contracts and payslips.',
                    'Credential recognition can take months. Meanwhile: language courses, local short certifications, volunteering, and entry roles build proof of local experience.',
                    'Platform/gig apps may require local bank accounts, tax numbers, and right-to-work checks. Read the fine print.'
                ]
            },
            {
                id: 'language_status',
                icon: '🗣️',
                title: 'Language & long-term status',
                points: [
                    'Permanent residence and citizenship pathways increasingly expect language proof and civic knowledge tests. Start early, even if daily life seems manageable in English.',
                    'Free or low-cost language classes, libraries, and conversation cafés exist in most cities — ask the municipality or migrant NGO.',
                    'At work, clear, polite English (or the local language) beats perfect grammar. Asking “Can you confirm I understood correctly?” is professional, not weak.'
                ]
            },
            {
                id: 'scams_safety',
                icon: '🛡️',
                title: 'Scams, misinformation & safety',
                points: [
                    'Common scams: fake landlords, fake “immigration lawyers,” job offers that ask for fees, romance scams, and phishing texts about parcels or taxes.',
                    'No genuine official will demand gift cards, crypto, or secrecy. When unsure, hang up and call the number on the official website.',
                    'Public debate about migration can feel hostile. Know your rights, avoid street arguments, and use verified community and legal aid groups.',
                    'Emergency numbers: 112 in the EU; 911 in the US/Canada; 999/112 in the UK. Save them offline.'
                ]
            },
            {
                id: 'money_health',
                icon: '💳',
                title: 'Money, banking & health',
                points: [
                    'Opening a bank account usually needs ID + proof of address (and sometimes residency status). Without a local account, rent and salary get hard.',
                    'Build a paper trail: lease, payslips, tax filings. Credit history starts at zero; late rent or unpaid fines hurt fast.',
                    'Register with a primary doctor/GP when eligible. Use emergency rooms for emergencies only — many systems push “urgent care” or phone triage first.',
                    'Mental load is real. Sleep, community, and legal clarity matter as much as hustle. Local NGOs and hotlines exist for crisis support.'
                ]
            },
            {
                id: 'awaiting_docs',
                icon: '📋',
                title: 'If you are still waiting on papers',
                points: [
                    'Know exactly what work, study, and travel your current status allows. Rules differ by country and case type — get advice from a licensed adviser or recognized NGO, not social media.',
                    'Keep originals and scans of every form, appointment slip, and letter. Photograph envelopes with postmarks when useful.',
                    'Use waiting time for language, local knowledge, volunteering (where legal), and documenting skills. It is preparation, not wasted time.',
                    'Avoid “fix-track” fixers who promise guaranteed visas for cash. Report exploitation to authorities or migrant help lines when safe.'
                ]
            }
        ],

        quiz: {
            id: 'quiz_today_west',
            title: '2026 Newcomer Reality Check',
            region: 'today',
            category: 'essentials',
            questions: [
                {
                    question:
                        'A stranger messages you on WhatsApp offering a cheap apartment. They ask for a deposit via money transfer before you visit. What should you do?',
                    options: {
                        a: 'Pay quickly — good flats disappear fast.',
                        b: 'Refuse to pay before a verified viewing and written contract; report if it smells like a scam.',
                        c: 'Send half the deposit as a compromise.'
                    },
                    correct: 'b',
                    explanation:
                        'Housing scams targeting newcomers are widespread. Never send money before verifying the property, the landlord/agency, and a real contract.'
                },
                {
                    question:
                        'Your residency portal says you must upload documents by Friday. You only check the portal once a month. What is the risk?',
                    options: {
                        a: 'Nothing — letters always come first.',
                        b: 'Missed deadlines can delay or freeze your case, benefits, or legal status.',
                        c: 'Portals are optional; only police letters matter.'
                    },
                    correct: 'b',
                    explanation:
                        'Digital-first bureaucracy means online deadlines are real. Check email and official accounts often and set reminders.'
                },
                {
                    question:
                        'A café offers cash pay “off the books” with no contract. You need money. What is the safer long-term choice?',
                    options: {
                        a: 'Take any cash work — everyone does it.',
                        b: 'Prefer legal work with a contract and payslips; illegal work can harm future residency and leave you unprotected.',
                        c: 'Only work cash jobs until you get citizenship.'
                    },
                    correct: 'b',
                    explanation:
                        'Informal work can block residency pathways, leave you without insurance or recourse if injured, and create tax problems later.'
                },
                {
                    question:
                        'Someone claiming to be from immigration calls and demands gift cards to “fix a problem on your file.” What do you do?',
                    options: {
                        a: 'Buy the cards — it is cheaper than a lawyer.',
                        b: 'Hang up. Officials do not demand gift cards. Call back using a number from the official website.',
                        c: 'Give your passport number but not payment.'
                    },
                    correct: 'b',
                    explanation:
                        'Impersonation scams are common. Never pay via gift cards or crypto. Verify through official channels.'
                },
                {
                    question:
                        'Why start language classes even if coworkers speak English with you?',
                    options: {
                        a: 'Only for fun hobbies.',
                        b: 'Many permanent residence and citizenship paths require language proof; daily life, health, and rights are easier in the local language.',
                        c: 'English is enough everywhere forever.'
                    },
                    correct: 'b',
                    explanation:
                        'Language is both a legal requirement for many long-term statuses and a practical tool for housing, health, and belonging.'
                },
                {
                    question:
                        'You feel unwell but it is not life-threatening. In many Western systems, what is usually best first?',
                    options: {
                        a: 'Always go straight to the hospital emergency room.',
                        b: 'Contact a GP/primary care clinic, nurse line, or urgent-care pathway unless it is a true emergency (then call emergency services).',
                        c: 'Wait until you return to your home country.'
                    },
                    correct: 'b',
                    explanation:
                        'Emergency rooms are for emergencies. Primary care and triage lines are how most systems expect non-critical care to start.'
                }
            ]
        }
    };

    if (window.CAM_GUIDES && window.CAM_GUIDES.registerEssentials) {
        window.CAM_GUIDES.registerEssentials(essentials);
    }

    // Also register as a quiz region so existing quiz UI can show it
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('today', essentials.quiz);
    }
})();
