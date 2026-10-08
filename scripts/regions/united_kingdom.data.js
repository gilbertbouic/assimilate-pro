/**
 * United Kingdom
 */
(function () {
    'use strict';

    const unitedKingdomData = {
    "id": "quiz_united_kingdom",
    "title": "United Kingdom",
    "region": "united_kingdom",
    "category": "general",
    "questions": [
        {
            "question": "People wait in a line. What do you do?",
            "options": {
                "a": "Push to the front.",
                "b": "Wait in the line.",
                "c": "Shout for service."
            },
            "correct": "b",
            "explanation": "Wait your turn."
        },
        {
            "question": "A colleague says the plan is \"not bad.\" What do they mean?",
            "options": {
                "a": "It is terrible.",
                "b": "It is good.",
                "c": "Cancel it."
            },
            "correct": "b",
            "explanation": "\"Not bad\" means good."
        },
        {
            "question": "A landlord or boss asks for your right to rent or work. What do you show?",
            "options": {
                "a": "A spoken promise.",
                "b": "A share code from your UKVI account.",
                "c": "Only a British passport works."
            },
            "correct": "b",
            "explanation": "Make a share code in your UKVI account."
        },
        {
            "question": "You need a doctor. What do you do?",
            "options": {
                "a": "Walk into the hospital for a small problem.",
                "b": "Register with a GP. Call 999 for an emergency.",
                "c": "Pay cash at every desk."
            },
            "correct": "b",
            "explanation": "Register with a GP. Call 999 for an emergency."
        },
        {
            "question": "Someone insults you in the street. What do you do first?",
            "options": {
                "a": "Start a fight.",
                "b": "Leave. Then report it.",
                "c": "Post their photo everywhere."
            },
            "correct": "b",
            "explanation": "Get to safety. Then report it."
        },
        {
            "question": "You move in. What about council tax and bills?",
            "options": {
                "a": "Skip them for two years.",
                "b": "Set them up in the first days.",
                "c": "Only owners pay."
            },
            "correct": "b",
            "explanation": "Set up the bills when you move in."
        },
        {
            "question": "What is easy small talk?",
            "options": {
                "a": "Ask their salary and visa.",
                "b": "Talk about weather, the bus, or the weekend.",
                "c": "Start a political fight."
            },
            "correct": "b",
            "explanation": "Weather and the weekend are easy topics."
        },
        {
            "question": "What number is for police, fire, or an ambulance?",
            "options": {
                "a": "911",
                "b": "999 or 112",
                "c": "111 only"
            },
            "correct": "b",
            "explanation": "Call 999."
        }
    ],
    "countries": {
        "united_kingdom": {
            "name": "United Kingdom",
            "emoji": "🇬🇧",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Wait in line. Speak kindly.",
                        "Work and rent checks use a share code.",
                        "Homes in big cities cost a lot. See the home before you pay.",
                        "Use the NHS app and GOV.UK."
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
