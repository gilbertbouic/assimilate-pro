(function () {
    'use strict';
    const data = {
    "digital": {
        "id": "scenario_baltic_digital",
        "title": "The real website",
        "region": "baltics",
        "category": "bureaucracy",
        "roles": [
            "professional",
            "student",
            "remote",
            "entrepreneur"
        ],
        "steps": [
            {
                "title": "Send a form",
                "description": "You need to file a form.",
                "dos": [
                    "Use the state website.",
                    "Save the PDF.",
                    "Go to the office on the list."
                ],
                "donts": [
                    "Do not use a look-alike site.",
                    "Do not share your PIN.",
                    "Do not ignore a letter."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('baltics', data);
    }
})();
