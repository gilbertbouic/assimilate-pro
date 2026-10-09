(function () {
    'use strict';
    const unitedStatesScenarios = {
    "workplace": {
        "id": "scenario_us_workplace",
        "title": "First week",
        "region": "united_states",
        "category": "workplace",
        "roles": [
            "professional",
            "remote",
            "entrepreneur",
            "student"
        ],
        "steps": [
            {
                "title": "Day one",
                "description": "Your manager walks you past the team.",
                "dos": [
                    "Use first names.",
                    "Follow their lead on a handshake.",
                    "Write names down after."
                ],
                "donts": [
                    "Do not stay silent all week.",
                    "Do not dump visa stress in minute one.",
                    "Do not skip every hello."
                ]
            },
            {
                "title": "You will be late",
                "description": "The Friday task will miss the day.",
                "dos": [
                    "Write early. Say the risk and a plan.",
                    "Ask what to drop.",
                    "Keep the note in the thread."
                ],
                "donts": [
                    "Do not vanish until Friday night.",
                    "Do not blame people with no facts.",
                    "Do not promise what you cannot do."
                ]
            }
        ]
    },
    "housing": {
        "id": "scenario_us_housing",
        "title": "A cheap listing",
        "region": "united_states",
        "category": "housing",
        "roles": [
            "professional",
            "student",
            "spouse",
            "undocumented",
            "remote"
        ],
        "steps": [
            {
                "title": "The owner is abroad",
                "description": "The price is \"below market.\"",
                "dos": [
                    "Check the address on a map.",
                    "See the home.",
                    "Pay only after a real lease."
                ],
                "donts": [
                    "Do not wire money for a home you have not seen.",
                    "Do not send your passport to a random account.",
                    "Do not ignore a missing agent license."
                ]
            }
        ]
    },
    "bureaucracy": {
        "id": "scenario_us_bureaucracy",
        "title": "A notice in the portal",
        "region": "united_states",
        "category": "bureaucracy",
        "roles": [
            "professional",
            "student",
            "spouse",
            "undocumented",
            "remote",
            "entrepreneur"
        ],
        "steps": [
            {
                "title": "They ask for more papers",
                "description": "The portal shows a request.",
                "dos": [
                    "Download it the same day.",
                    "Put the date on a calendar.",
                    "Ask a qualified helper for a hard reply."
                ],
                "donts": [
                    "Do not ignore a government email. Check the portal.",
                    "Do not pay gift cards.",
                    "Do not work outside your papers."
                ]
            }
        ]
    }
};
    if (window.CAM_SCENARIOS && window.CAM_SCENARIOS.registerRegion) {
        window.CAM_SCENARIOS.registerRegion('united_states', unitedStatesScenarios);
    }
})();
