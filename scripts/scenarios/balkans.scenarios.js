(function () {
    'use strict';
    const data = {
    "social": {
        "id": "scenario_balkans_social",
        "title": "Coffee at the neighbor",
        "region": "balkans",
        "category": "social",
        "roles": [
            "professional",
            "student",
            "spouse",
            "retiree"
        ],
        "steps": [
            {
                "title": "Coffee and sweets",
                "description": "A neighbor asks you in for coffee.",
                "dos": [
                    "Go in if you can.",
                    "Say thank you.",
                    "Bring a small treat next time."
                ],
                "donts": [
                    "Do not mock the home.",
                    "Do not start a fight about history.",
                    "Do not refuse every kindness."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('balkans', data);
    }
})();
