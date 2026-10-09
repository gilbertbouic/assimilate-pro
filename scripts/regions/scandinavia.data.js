/**
 * Scandinavia
 */
(function () {
    'use strict';

    const scandinaviaData = {
    "id": "quiz_scandinavia",
    "title": "Scandinavia",
    "region": "scandinavia",
    "category": "general",
    "questions": [
        {
            "question": "A pause in the talk. What does it mean?",
            "options": {
                "a": "They dislike you.",
                "b": "A pause is normal.",
                "c": "You must talk every second."
            },
            "correct": "b",
            "explanation": "A quiet pause is normal."
        },
        {
            "question": "What is the Jante idea?",
            "options": {
                "a": "A tax form.",
                "b": "Do not boast. Show your work with facts.",
                "c": "A winter tire."
            },
            "correct": "b",
            "explanation": "Speak about your work with facts, not boasts."
        },
        {
            "question": "Why do you need BankID or MitID?",
            "options": {
                "a": "For games.",
                "b": "It opens the bank, the doctor, and the tax site.",
                "c": "Paper stamps replaced it."
            },
            "correct": "b",
            "explanation": "Get the e-ID. It opens daily life."
        },
        {
            "question": "What do people wear in winter?",
            "options": {
                "a": "Fashion shoes.",
                "b": "Warm layers and good shoes.",
                "c": "Only tourists wear coats."
            },
            "correct": "b",
            "explanation": "Dress for the weather."
        },
        {
            "question": "What do you do with bottles and trash?",
            "options": {
                "a": "Leave them.",
                "b": "Sort the trash. Return bottles for the deposit.",
                "c": "Foreigners skip it."
            },
            "correct": "b",
            "explanation": "Sort the trash. Return the bottles."
        },
        {
            "question": "How do meetings work?",
            "options": {
                "a": "Stay silent.",
                "b": "Use first names. Share an idea. Do the work.",
                "c": "Only the boss speaks."
            },
            "correct": "b",
            "explanation": "Use first names. Do the work."
        },
        {
            "question": "What number do you call for help?",
            "options": {
                "a": "911",
                "b": "112",
                "c": "999 only"
            },
            "correct": "b",
            "explanation": "Call 112."
        }
    ],
    "countries": {
        "sweden": {
            "name": "Sweden",
            "emoji": "🇸🇪",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "The person number opens housing and the bank.",
                        "BankID is how you pay and sign.",
                        "Speak with facts, not boasts.",
                        "City home queues are long. See the home before you pay."
                    ]
                }
            ]
        },
        "norway": {
            "name": "Norway",
            "emoji": "🇳🇴",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Life costs a lot. Outdoor time is normal.",
                        "The ID number opens services.",
                        "Be direct and on time.",
                        "Read your job paper."
                    ]
                }
            ]
        },
        "denmark": {
            "name": "Denmark",
            "emoji": "🇩🇰",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "The CPR number and MitID come first.",
                        "Learn the bike lights and the bike lane.",
                        "People use first names.",
                        "Follow the shared rules."
                    ]
                }
            ]
        }
    }
};

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('scandinavia', scandinaviaData);
    }
})();
