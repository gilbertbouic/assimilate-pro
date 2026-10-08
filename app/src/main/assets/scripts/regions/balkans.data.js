/**
 * Balkans
 */
(function () {
    'use strict';

    const balkansData = {
    "id": "quiz_balkans",
    "title": "Balkans",
    "region": "balkans",
    "category": "general",
    "questions": [
        {
            "question": "A neighbor asks you in for coffee. What do you do?",
            "options": {
                "a": "Stay outside.",
                "b": "Go in. Say thank you. Bring a small gift next time.",
                "c": "Say no to every drink."
            },
            "correct": "b",
            "explanation": "A warm hello builds trust."
        },
        {
            "question": "The office asks for many papers. What do you do?",
            "options": {
                "a": "Bring nothing.",
                "b": "Bring every paper. Keep a copy.",
                "c": "Bring only English forms."
            },
            "correct": "b",
            "explanation": "A full folder makes the visit short."
        },
        {
            "question": "Who helps you find a home and a job?",
            "options": {
                "a": "Nobody.",
                "b": "Family and neighbors help you find a home and a job.",
                "c": "Friends replace the law."
            },
            "correct": "b",
            "explanation": "People help you. Follow the house rules and the job paper."
        },
        {
            "question": "A new friend talks about old wars. What do you do?",
            "options": {
                "a": "Argue on day one.",
                "b": "Listen. Stay kind.",
                "c": "Talk only about football."
            },
            "correct": "b",
            "explanation": "Listen first. Kind words keep the peace."
        },
        {
            "question": "What number do you call for help in the EU Balkans?",
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
        "balkans": {
            "name": "Balkans",
            "emoji": "🌍",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "People are warm. Offices want papers.",
                        "Croatia, Slovenia, Romania, and Bulgaria are in the EU. Neighbors have other rules.",
                        "People pay with cash and with cards.",
                        "Learn quiet hours and trash day."
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
