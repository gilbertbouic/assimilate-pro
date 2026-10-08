/**
 * Shared steps for a new home.
 */
(function () {
    'use strict';

    const essentials = {
    "id": "today_essentials_2026",
    "title": "Life here now",
    "updated": "2026-10",
    "intro": "This guide shows the next right step. Look at the picture. Read the short lines. Then choose.",
    "pillars": [
        {
            "id": "digital_state",
            "icon": "💻",
            "title": "Use the real website",
            "points": [
                "Book the visit on the real government website.",
                "Read your email every day. Open every letter the same day.",
                "Save the real site. Do not tap links in ads.",
                "Keep your phone safe. The bank sends a code to it."
            ]
        },
        {
            "id": "housing",
            "icon": "🏠",
            "title": "See the home first",
            "points": [
                "Many people want the same home.",
                "See the home. Read the paper. Then pay.",
                "A shared home is a good first home. Ask about noise and cleaning.",
                "Tell the town your new address. You need this for a bank and for school."
            ]
        },
        {
            "id": "work_rights",
            "icon": "🛠️",
            "title": "Work with a paper",
            "points": [
                "Read your papers before you take a job.",
                "Ask for a job paper and a pay slip.",
                "Learn the language and one short skill while you wait.",
                "Phone apps for jobs also check your papers and your bank."
            ]
        },
        {
            "id": "language_status",
            "icon": "🗣️",
            "title": "Learn the local words",
            "points": [
                "A long stay asks for a language test. Start now.",
                "Free classes are at the library and the town hall.",
                "Clear words are enough. Ask them to say it again."
            ]
        },
        {
            "id": "scams_safety",
            "icon": "🛡️",
            "title": "Keep your money",
            "points": [
                "A stranger who wants money first is a trick.",
                "The government does not ask for gift cards.",
                "Walk away from a fight. Call for help.",
                "Save 112 in Europe. Save 911 in the US. Save 999 in the UK."
            ]
        },
        {
            "id": "money_health",
            "icon": "💳",
            "title": "Bank and doctor",
            "points": [
                "The bank wants your ID and your home address.",
                "Keep rent papers and pay slips. Pay bills on time.",
                "See a family doctor first. Go to the hospital for a big emergency.",
                "Sleep. See your friends."
            ]
        },
        {
            "id": "awaiting_docs",
            "icon": "📋",
            "title": "While you wait for papers",
            "points": [
                "Learn what your paper lets you do.",
                "Keep every letter. Take a photo of each one.",
                "Use the wait to learn the language.",
                "Pay the office. Keep the receipt."
            ]
        }
    ],
    "quiz": {
        "id": "quiz_today_west",
        "title": "Life here now",
        "region": "today",
        "category": "essentials",
        "questions": [
            {
                "question": "A stranger wants money for a home before you see it. What do you do?",
                "options": {
                    "a": "Pay now. Good homes go fast.",
                    "b": "Do not pay. See the home and the paper first.",
                    "c": "Send half the money."
                },
                "correct": "b",
                "explanation": "See the home. Read the paper. Then pay."
            },
            {
                "question": "The website says send your papers by Friday. You open it once a month. What happens?",
                "options": {
                    "a": "Nothing. A letter always comes first.",
                    "b": "You miss the day. Your case waits.",
                    "c": "The website does not matter."
                },
                "correct": "b",
                "explanation": "Open the website and your email every day."
            },
            {
                "question": "A café pays cash and gives no job paper. What do you do?",
                "options": {
                    "a": "Take the cash. Everyone does.",
                    "b": "Ask for a job paper and a pay slip.",
                    "c": "Work only for cash."
                },
                "correct": "b",
                "explanation": "A job paper protects your pay and your stay."
            },
            {
                "question": "A caller says they are immigration and wants gift cards. What do you do?",
                "options": {
                    "a": "Buy the cards.",
                    "b": "Hang up. Call the number on the real website.",
                    "c": "Give your passport number."
                },
                "correct": "b",
                "explanation": "The government does not ask for gift cards."
            },
            {
                "question": "People at work speak English with you. Do you learn the local language?",
                "options": {
                    "a": "No. It is only a hobby.",
                    "b": "Yes. Start classes now.",
                    "c": "English is enough forever."
                },
                "correct": "b",
                "explanation": "The local language helps at the doctor, at home, and for a long stay."
            },
            {
                "question": "You feel sick. You walk. Where do you go?",
                "options": {
                    "a": "Go to the hospital.",
                    "b": "Call the family doctor.",
                    "c": "Wait until you go back home."
                },
                "correct": "b",
                "explanation": "Call the family doctor. Call 112 or 911 for an emergency."
            }
        ]
    }
};

    if (window.CAM_GUIDES && window.CAM_GUIDES.registerEssentials) {
        window.CAM_GUIDES.registerEssentials(essentials);
    }

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('today', essentials.quiz);
    }
})();
