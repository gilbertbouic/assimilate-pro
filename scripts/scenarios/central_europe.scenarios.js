(function () {
    'use strict';
    const centralEuropeScenarios = {
    "workplace": {
        "id": "scenario_ce_workplace",
        "title": "The 9:00 meeting",
        "region": "central_europe",
        "category": "workplace",
        "roles": [
            "professional",
            "remote",
            "entrepreneur"
        ],
        "steps": [
            {
                "title": "Be early",
                "description": "The meeting starts at 9:00.",
                "dos": [
                    "Arrive a few minutes early.",
                    "Use the formal name.",
                    "Speak with facts."
                ],
                "donts": [
                    "Do not arrive late.",
                    "Do not talk over people.",
                    "Do not skip the follow-up email."
                ]
            }
        ]
    },
    "bureaucracy": {
        "id": "scenario_ce_bureaucracy",
        "title": "The official letter",
        "region": "central_europe",
        "category": "bureaucracy",
        "roles": [
            "professional",
            "student",
            "spouse",
            "undocumented",
            "remote"
        ],
        "steps": [
            {
                "title": "A yellow envelope",
                "description": "An official letter arrives while you are at work.",
                "dos": [
                    "Open it today.",
                    "Photo the whole letter.",
                    "Read it with a dictionary."
                ],
                "donts": [
                    "Do not leave it closed.",
                    "Do not miss the reply date.",
                    "Do not pay a stranger for a stamp."
                ]
            }
        ]
    },
    "housing": {
        "id": "scenario_ce_housing",
        "title": "The shared home",
        "region": "central_europe",
        "category": "housing",
        "roles": [
            "professional",
            "student",
            "spouse",
            "remote"
        ],
        "steps": [
            {
                "title": "Meet the roommates",
                "description": "They ask about noise and cleaning.",
                "dos": [
                    "Say your work hours.",
                    "Learn the trash rules.",
                    "Get permission in writing."
                ],
                "donts": [
                    "Do not party on Sunday night.",
                    "Do not ignore the house rules.",
                    "Do not rent the room out in secret."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('central_europe', centralEuropeScenarios);
    }
})();
