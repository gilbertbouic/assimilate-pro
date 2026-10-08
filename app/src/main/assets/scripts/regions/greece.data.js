/**
 * Greece
 */
(function () {
    'use strict';

    const greeceData = {
    "id": "quiz_greece",
    "title": "Greece",
    "region": "greece",
    "category": "general",
    "questions": [
        {
            "question": "What is a normal day like?",
            "options": {
                "a": "Every shop closes at 16:00 forever.",
                "b": "Evenings are late. Family meals matter.",
                "c": "No one goes out on a weekday."
            },
            "correct": "b",
            "explanation": "Dinner is late. Plan for it."
        },
        {
            "question": "What are AFM and AMKA?",
            "options": {
                "a": "Stickers.",
                "b": "Numbers you need for tax, health, and work.",
                "c": "Only for boat owners."
            },
            "correct": "b",
            "explanation": "Get the numbers. Bring your papers."
        },
        {
            "question": "How do people talk?",
            "options": {
                "a": "They never speak.",
                "b": "They are warm. Still ask before you touch.",
                "c": "Only by letter."
            },
            "correct": "b",
            "explanation": "Be warm. Ask first."
        },
        {
            "question": "Summer is hot and full of visitors. What do you do?",
            "options": {
                "a": "Skip water.",
                "b": "Drink water. Find a home early.",
                "c": "Buses never change."
            },
            "correct": "b",
            "explanation": "Water, shade, and an early home search."
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
        "greece": {
            "name": "Greece",
            "emoji": "🇬🇷",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Family and neighbors help.",
                        "Some steps are on a website. Some are at the office.",
                        "Seasonal jobs still need a job paper.",
                        "Be quiet and kind in a church and a small town."
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
