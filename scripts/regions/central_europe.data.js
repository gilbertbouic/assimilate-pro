/**
 * Central Europe
 */
(function () {
    'use strict';

    const centralEuropeData = {
    "id": "quiz_central_europe",
    "title": "Central Europe",
    "region": "central_europe",
    "category": "general",
    "questions": [
        {
            "question": "A meeting is at 10:00. When do you arrive?",
            "options": {
                "a": "10:15.",
                "b": "A few minutes early.",
                "c": "Only if the tram is late."
            },
            "correct": "b",
            "explanation": "Arrive a few minutes early."
        },
        {
            "question": "You email Dr. Anna Schmidt in a German office. How do you start?",
            "options": {
                "a": "Hey Anna,",
                "b": "Sehr geehrte Frau Dr. Schmidt,",
                "c": "Dear Anna Schmidt,"
            },
            "correct": "b",
            "explanation": "Start formal. They will invite a first name later."
        },
        {
            "question": "You move into a home in Germany. What do you do first?",
            "options": {
                "a": "Wait for a job.",
                "b": "Register your address and learn the trash rules.",
                "c": "Tell only your friends."
            },
            "correct": "b",
            "explanation": "Register your address. It opens the bank and the tax number."
        },
        {
            "question": "It is Sunday. What do the neighbors expect?",
            "options": {
                "a": "Loud drills and parties.",
                "b": "A quiet day.",
                "c": "Only tourists stay quiet."
            },
            "correct": "b",
            "explanation": "Keep Sunday quiet."
        },
        {
            "question": "The office calendar is full. What do you do?",
            "options": {
                "a": "Stop and hide.",
                "b": "Check the real website again. Write down each try. Ask a helper.",
                "c": "Pay a stranger for a slot."
            },
            "correct": "b",
            "explanation": "Use the real website. Ask a helper. Do not pay a stranger."
        },
        {
            "question": "A job pays cash and gives no paper. Your permit is limited. What do you do?",
            "options": {
                "a": "Take it if the boss is kind.",
                "b": "Ask for a job paper.",
                "c": "Cash work proves you belong."
            },
            "correct": "b",
            "explanation": "A job paper matches your permit."
        },
        {
            "question": "Health insurance in Germany, Austria, and Switzerland. What is true?",
            "options": {
                "a": "Young people skip it.",
                "b": "You need health cover. Carry the card.",
                "c": "Only citizens get it."
            },
            "correct": "b",
            "explanation": "Get health cover. Carry the card."
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
        "germany": {
            "name": "Germany",
            "emoji": "🇩🇪",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Appointments and letters run daily life.",
                        "Language class helps a long stay.",
                        "Homes in big cities are hard to find. You need a real address to register.",
                        "Open every letter the same day."
                    ]
                }
            ]
        },
        "austria": {
            "name": "Austria",
            "emoji": "🇦🇹",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Use titles until they say your first name.",
                        "Register your address after you move.",
                        "Stamp the bus ticket.",
                        "Keep the building quiet."
                    ]
                }
            ]
        },
        "switzerland": {
            "name": "Switzerland",
            "emoji": "🇨🇭",
            "sections": [
                {
                    "title": "Good to know",
                    "items": [
                        "Life costs a lot. Get health insurance.",
                        "Be on time. Sort the trash.",
                        "Read your permit type.",
                        "The town office does the papers."
                    ]
                }
            ]
        }
    }
};

    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('central_europe', centralEuropeData);
    }
})();
