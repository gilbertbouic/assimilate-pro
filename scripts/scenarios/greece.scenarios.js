(function () {
    'use strict';
    const data = {
    "bureaucracy": {
        "id": "scenario_gr_bureaucracy",
        "title": "Tax and health numbers",
        "region": "greece",
        "category": "bureaucracy",
        "roles": [
            "professional",
            "student",
            "spouse",
            "retiree",
            "undocumented"
        ],
        "steps": [
            {
                "title": "Paper day",
                "description": "You need numbers for tax and health.",
                "dos": [
                    "Read the list before you go.",
                    "Bring your passport and copies.",
                    "Keep every receipt."
                ],
                "donts": [
                    "Do not pay a stranger in the hall.",
                    "Do not take a cash job with no paper.",
                    "Do not miss the appointment."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('greece', data);
    }
})();
