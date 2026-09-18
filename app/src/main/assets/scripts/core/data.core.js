/**
 * Cultural Assimilation Manual - Core data registry
 * Regions, scenarios, and shared present-day guidance attach here.
 */
(function () {
    'use strict';

    if (!window.CAM_DATA) {
        window.CAM_DATA = {
            regions: {},
            culturalData: { quizzes: {} },
            version: '2.0.0',
            edition: '2026-West'
        };
    }

    if (!window.CAM_SCENARIOS) {
        window.CAM_SCENARIOS = {
            regions: {},
            scenarios: {}
        };
    }

    if (!window.CAM_GUIDES) {
        window.CAM_GUIDES = {
            essentials: null
        };
    }

    window.CAM_DATA.registerRegion = function (regionKey, data) {
        this.regions[regionKey] = data;
        this.culturalData.quizzes[regionKey] = data;
    };

    window.CAM_SCENARIOS.registerRegion = function (regionKey, scenarios) {
        this.regions[regionKey] = scenarios;
        this.scenarios[regionKey] = scenarios;
    };

    window.CAM_GUIDES.registerEssentials = function (guide) {
        this.essentials = guide;
    };

    window.CAM_DATA.getAvailableRegions = function () {
        return Object.keys(this.regions);
    };

    window.CAM_DATA.getRegionData = function (regionKey) {
        return this.regions[regionKey] || null;
    };

    window.CAM_SCENARIOS.getRegionScenarios = function (regionKey) {
        return this.regions[regionKey] || null;
    };

    window.culturalData = window.CAM_DATA.culturalData;
    window.scenarios = window.CAM_SCENARIOS.scenarios;
})();
