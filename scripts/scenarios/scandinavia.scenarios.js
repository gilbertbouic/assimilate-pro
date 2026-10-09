(function () {
    'use strict';
    const data = {
    "digital": {
        "id": "scenario_scand_digital",
        "title": "Get BankID",
        "region": "scandinavia",
        "category": "bureaucracy",
        "roles": [
            "professional",
            "student",
            "spouse",
            "remote"
        ],
        "steps": [
            {
                "title": "You have an ID number",
                "description": "The number arrived.",
                "dos": [
                    "Follow the bank steps for the e-ID.",
                    "Save the recovery codes.",
                    "Learn which visit still needs you in person."
                ],
                "donts": [
                    "Do not approve a login for a stranger.",
                    "Do not buy an e-ID on social media.",
                    "Do not ignore tax messages."
                ]
            }
        ]
    },
    "social": {
        "id": "scenario_scand_social",
        "title": "Coffee break",
        "region": "scandinavia",
        "category": "social",
        "roles": [
            "professional",
            "student",
            "spouse"
        ],
        "steps": [
            {
                "title": "Fika",
                "description": "Coworkers invite you for coffee.",
                "dos": [
                    "Join when you can.",
                    "Listen as much as you talk.",
                    "Respect time after work."
                ],
                "donts": [
                    "Do not boast.",
                    "Do not skip every coffee.",
                    "Do not push alcohol."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('scandinavia', data);
    }
})();
