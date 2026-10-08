(function () {
    'use strict';
    const data = {
    "social": {
        "id": "scenario_med_social",
        "title": "A late dinner",
        "region": "mediterranean",
        "category": "social",
        "roles": [
            "professional",
            "student",
            "spouse",
            "retiree"
        ],
        "steps": [
            {
                "title": "You are invited",
                "description": "A family asks you to a late dinner.",
                "dos": [
                    "Arrive near the time.",
                    "Bring a small gift.",
                    "Praise the food and stay to talk."
                ],
                "donts": [
                    "Do not stay on your phone.",
                    "Eat the food they serve.",
                    "Do not start a political fight."
                ]
            }
        ]
    },
    "housing": {
        "id": "scenario_med_housing",
        "title": "A city rental",
        "region": "mediterranean",
        "category": "housing",
        "roles": [
            "professional",
            "student",
            "remote",
            "spouse"
        ],
        "steps": [
            {
                "title": "Many people want the home",
                "description": "The city has more people than homes.",
                "dos": [
                    "Bring your ID and income paper.",
                    "Read the room list before you sign.",
                    "Ask for a written contract."
                ],
                "donts": [
                    "Do not pay a stranger abroad.",
                    "Do not skip town registration.",
                    "Do not live in a tourist flat with no contract."
                ]
            }
        ]
    },
    "bureaucracy": {
        "id": "scenario_med_bureaucracy",
        "title": "The office morning",
        "region": "mediterranean",
        "category": "bureaucracy",
        "roles": [
            "professional",
            "student",
            "spouse",
            "undocumented"
        ],
        "steps": [
            {
                "title": "You have a slot",
                "description": "You waited a long time for this visit.",
                "dos": [
                    "Bring originals and copies.",
                    "Arrive early.",
                    "Get a receipt before you leave."
                ],
                "donts": [
                    "Do not buy a slot in the hallway.",
                    "Do not shout. Ask for the list in writing.",
                    "Do not leave without the next date."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('mediterranean', data);
    }
})();
