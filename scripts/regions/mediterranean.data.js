/**
 * Mediterranean
 */
(function () {
    'use strict';

    const mediterraneanData = {
    "id": "quiz_mediterranean",
    "title": "Mediterranean",
    "region": "mediterranean",
    "category": "general",
    "questions": [
        {
            "question": "In Spain, when is dinner?",
            "options": {
                "a": "17:00.",
                "b": "About 21:00 to 23:00.",
                "c": "There is no dinner."
            },
            "correct": "b",
            "explanation": "Dinner is late."
        },
        {
            "question": "What is French laïcité?",
            "options": {
                "a": "A wine map.",
                "b": "Religion stays personal. Public schools stay neutral.",
                "c": "A sports league."
            },
            "correct": "b",
            "explanation": "Belief is personal. The public school stays neutral."
        },
        {
            "question": "What matters in Italian social life?",
            "options": {
                "a": "Eat alone at your desk.",
                "b": "Family and a shared meal.",
                "c": "No talking."
            },
            "correct": "b",
            "explanation": "Say yes to a meal. Stay and talk."
        },
        {
            "question": "Homes in big cities are hard to find. What do you do?",
            "options": {
                "a": "Get one the same day for cheap.",
                "b": "Start early. Read the paper. See the home.",
                "c": "Never pay a deposit."
            },
            "correct": "b",
            "explanation": "See the home. Read the paper. Then pay."
        },
        {
            "question": "How do you tip in Italy or France?",
            "options": {
                "a": "Always 25%.",
                "b": "Service is in the bill. A small extra is a thank you.",
                "c": "Tipping is banned."
            },
            "correct": "b",
            "explanation": "The bill includes service. A small extra says thank you."
        },
        {
            "question": "A child is hit. What is true?",
            "options": {
                "a": "It is fine.",
                "b": "It is not allowed.",
                "c": "It is fine for small children."
            },
            "correct": "b",
            "explanation": "Do not hit a child."
        },
        {
            "question": "Someone says no to a touch. What do you do?",
            "options": {
                "a": "Keep going. You paid for dinner.",
                "b": "Stop.",
                "c": "Wait until marriage."
            },
            "correct": "b",
            "explanation": "Stop when they say no."
        },
        {
            "question": "What number do you call for help?",
            "options": {
                "a": "911",
                "b": "112",
                "c": "000"
            },
            "correct": "b",
            "explanation": "Call 112."
        }
    ],
    "countries": {
        "spain": {
            "name": "Spain",
            "emoji": "🇪🇸",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Get your NIE and register at the town hall.",
                        "Each region has its own office and language.",
                        "Nights run late.",
                        "Read the rent paper before you pay."
                    ]
                }
            ]
        },
        "france": {
            "name": "France",
            "emoji": "🇫🇷",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "The prefecture is slow. Keep every paper.",
                        "Start letters in formal French.",
                        "Public schools stay neutral about religion.",
                        "Strikes happen. Plan your trip."
                    ]
                }
            ]
        },
        "italy": {
            "name": "Italy",
            "emoji": "🇮🇹",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Get the stay permit and the tax code.",
                        "Office hours change by town.",
                        "Cards work in most shops.",
                        "Ask for a rent paper and a job paper."
                    ]
                }
            ]
        },
        "portugal": {
            "name": "Portugal",
            "emoji": "🇵🇹",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Lisbon and Porto homes are hard to find.",
                        "Get your NIF. Use the real immigration site.",
                        "Learn a little Portuguese.",
                        "See the home before you pay."
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
