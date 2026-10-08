/**
 * Baltics
 */
(function () {
    'use strict';

    const balticsData = {
    "id": "quiz_baltics",
    "title": "Baltics",
    "region": "baltics",
    "category": "general",
    "questions": [
        {
            "question": "Estonia is known for what?",
            "options": {
                "a": "No websites.",
                "b": "Government on the phone, after you have an ID.",
                "c": "No online bank."
            },
            "correct": "b",
            "explanation": "Get the ID first. Then the websites open."
        },
        {
            "question": "A first meeting feels quiet. What does that mean?",
            "options": {
                "a": "They hate you.",
                "b": "Be on time. Trust grows.",
                "c": "They are angry."
            },
            "correct": "b",
            "explanation": "Be on time. Keep your word."
        },
        {
            "question": "Someone talks about history. What do you do?",
            "options": {
                "a": "History never comes up.",
                "b": "Listen.",
                "c": "Only tourists talk."
            },
            "correct": "b",
            "explanation": "Listen more than you talk."
        },
        {
            "question": "Winter days are dark. What do you do?",
            "options": {
                "a": "Ignore it.",
                "b": "Use a bright lamp. See people.",
                "c": "Shops close for six months."
            },
            "correct": "b",
            "explanation": "Light and friends help in the dark months."
        },
        {
            "question": "What number do you call for help?",
            "options": {
                "a": "911",
                "b": "112",
                "c": "999"
            },
            "correct": "b",
            "explanation": "Call 112."
        }
    ],
    "countries": {
        "estonia": {
            "name": "Estonia",
            "emoji": "🇪🇪",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "The ID opens the websites.",
                        "English is common in tech jobs. Estonian helps you belong.",
                        "Be on time. Speak plain.",
                        "Stay on the path in nature."
                    ]
                }
            ]
        },
        "latvia": {
            "name": "Latvia",
            "emoji": "🇱🇻",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Riga is the big city. Register your address.",
                        "Trust grows when you keep your word.",
                        "Learn the bus ticket and trash rules.",
                        "Speak kindly about language."
                    ]
                }
            ]
        },
        "lithuania": {
            "name": "Lithuania",
            "emoji": "🇱🇹",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Family is important.",
                        "Cities have tech jobs and service jobs.",
                        "Use a polite hello with older people.",
                        "Register your address and get health cover."
                    ]
                }
            ]
        }
    }
};

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('baltics', balticsData);
    }
})();
