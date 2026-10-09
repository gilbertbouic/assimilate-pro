(function () {
    'use strict';
    const data = {
    "social": {
        "id": "scenario_fi_social",
        "title": "Quiet is normal",
        "region": "finland",
        "category": "social",
        "roles": [
            "professional",
            "student",
            "spouse"
        ],
        "steps": [
            {
                "title": "Lunch is quiet",
                "description": "Coworkers are kind and quiet.",
                "dos": [
                    "Let the quiet be.",
                    "Be on time.",
                    "Join a club if you want friends."
                ],
                "donts": [
                    "Do not force small talk.",
                    "Do not stand too close.",
                    "Do not call quiet rude."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('finland', data);
    }
})();
