/**
 * Finland
 */
(function () {
    'use strict';

    const finlandData = {
    "id": "quiz_finland",
    "title": "Finland",
    "region": "finland",
    "category": "general",
    "questions": [
        {
            "question": "People are quiet. What does that mean?",
            "options": {
                "a": "They are angry.",
                "b": "Quiet is polite. Small talk is a choice.",
                "c": "Stand closer."
            },
            "correct": "b",
            "explanation": "Quiet is normal. It is not anger."
        },
        {
            "question": "You are invited to sauna. What do you do?",
            "options": {
                "a": "You must go nude with coworkers on day one.",
                "b": "Follow the host and the posted rules. You can say no.",
                "c": "Sauna is only for athletes."
            },
            "correct": "b",
            "explanation": "Follow the rules. A polite no is fine."
        },
        {
            "question": "How do public services work?",
            "options": {
                "a": "Only on paper.",
                "b": "On the phone, after you have an ID.",
                "c": "There is no website."
            },
            "correct": "b",
            "explanation": "Get the ID. Then use the real website."
        },
        {
            "question": "You walk in the forest. What is the rule?",
            "options": {
                "a": "Camp in any garden.",
                "b": "Walk kindly. Leave no trash. Stay off home yards.",
                "c": "Forests are closed."
            },
            "correct": "b",
            "explanation": "Enjoy the forest. Leave it clean."
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
        "finland": {
            "name": "Finland",
            "emoji": "🇫🇮",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Calm and on time is respected.",
                        "Dress warm. Use a bright lamp in winter.",
                        "Follow the deadline.",
                        "English works in cities. Finnish helps you belong."
                    ]
                }
            ]
        }
    }
};

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('finland', finlandData);
    }
})();
