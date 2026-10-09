/**
 * United States
 */
(function () {
    'use strict';

    const unitedStatesData = {
    "id": "quiz_united_states",
    "title": "United States",
    "region": "united_states",
    "category": "general",
    "questions": [
        {
            "question": "You meet your manager, Jordan Lee. What do you say?",
            "options": {
                "a": "Good morning, Mr. Lee. It is a pleasure.",
                "b": "Hi Jordan. Great to meet you.",
                "c": "Hey Jordan, what's up?"
            },
            "correct": "b",
            "explanation": "Say hi and use the first name."
        },
        {
            "question": "A colleague says \"I will be honest.\" What comes next?",
            "options": {
                "a": "An insult.",
                "b": "A clear note about the work.",
                "c": "A lie."
            },
            "correct": "b",
            "explanation": "They want you to hear a clear note."
        },
        {
            "question": "You eat at a sit-down restaurant. What tip is normal?",
            "options": {
                "a": "No tip.",
                "b": "15 to 20 percent, unless the bill already adds it.",
                "c": "Tip only if they ask."
            },
            "correct": "b",
            "explanation": "Look at the bill. Then leave 15 to 20 percent."
        },
        {
            "question": "You need a state ID. What do you do?",
            "options": {
                "a": "A foreign ID is enough forever.",
                "b": "Bring your papers and proof of address. Book the visit.",
                "c": "Only citizens get an ID."
            },
            "correct": "b",
            "explanation": "Book the visit. Bring the papers on the list."
        },
        {
            "question": "Your visa end date is near. What do you do?",
            "options": {
                "a": "Wait for HR.",
                "b": "Watch the date. Start the renewal early.",
                "c": "Switch to cash work."
            },
            "correct": "b",
            "explanation": "Watch the date. Start early."
        },
        {
            "question": "A landlord wants the first month, a deposit, and proof of income. What is that?",
            "options": {
                "a": "Always unfair.",
                "b": "Normal. Still see the home before you pay.",
                "c": "Pay in crypto."
            },
            "correct": "b",
            "explanation": "See the home. Then pay in a way you can trace."
        },
        {
            "question": "You will miss a deadline. What do you do?",
            "options": {
                "a": "Stay quiet.",
                "b": "Say so early and offer a plan.",
                "c": "Blame the team in a group email."
            },
            "correct": "b",
            "explanation": "Say so early. Offer a plan."
        },
        {
            "question": "It is a medical emergency. What number do you call?",
            "options": {
                "a": "112 only",
                "b": "911",
                "c": "The embassy first"
            },
            "correct": "b",
            "explanation": "Call 911."
        }
    ],
    "countries": {
        "united_states": {
            "name": "United States",
            "emoji": "🇺🇸",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Rules change by state and by city.",
                        "Bring your papers. Ask questions. Write the answer down.",
                        "A credit file, a tax number, and a local ID open a home and a phone.",
                        "Call 911 for an emergency."
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
