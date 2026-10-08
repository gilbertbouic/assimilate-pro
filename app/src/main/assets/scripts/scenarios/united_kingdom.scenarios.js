(function () {
    'use strict';
    const unitedKingdomScenarios = {
    "workplace": {
        "id": "scenario_uk_workplace",
        "title": "The kitchen",
        "region": "united_kingdom",
        "category": "workplace",
        "roles": [
            "professional",
            "remote",
            "student"
        ],
        "steps": [
            {
                "title": "Small talk",
                "description": "People talk about the weather.",
                "dos": [
                    "Join for a minute.",
                    "Wait for the kettle. Wash your mug.",
                    "Hear \"not bad\" as \"good.\""
                ],
                "donts": [
                    "Do not ask about salary.",
                    "Do not skip the line.",
                    "Do not expect a best friend on day one."
                ]
            }
        ]
    },
    "housing": {
        "id": "scenario_uk_housing",
        "title": "The viewing",
        "region": "united_kingdom",
        "category": "housing",
        "roles": [
            "professional",
            "student",
            "spouse",
            "remote",
            "undocumented"
        ],
        "steps": [
            {
                "title": "They ask for a share code",
                "description": "You show your status on a phone.",
                "dos": [
                    "Make a share code in your UKVI account.",
                    "Ask where the deposit is protected.",
                    "Read the holding-deposit rules."
                ],
                "donts": [
                    "Do not use a fake status PDF.",
                    "Do not pay a big cash deposit with no receipt.",
                    "Read every line. Then sign."
                ]
            }
        ]
    },
    "health": {
        "id": "scenario_uk_health",
        "title": "A fever",
        "region": "united_kingdom",
        "category": "health",
        "roles": [
            "professional",
            "student",
            "spouse",
            "retiree",
            "undocumented"
        ],
        "steps": [
            {
                "title": "A small fever",
                "description": "You have a fever.",
                "dos": [
                    "Register with a GP.",
                    "Call your GP.",
                    "Call 999 for an emergency."
                ],
                "donts": [
                    "Do not use the emergency room as a family doctor.",
                    "Do not share old antibiotics.",
                    "Do not hide a low mood. Ask the GP."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('united_kingdom', unitedKingdomScenarios);
    }
})();
