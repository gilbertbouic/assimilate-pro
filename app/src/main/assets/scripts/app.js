/**
 * Assimilate Pro - app shell: country choice, text size, service worker.
 */
(function () {
    'use strict';

    let currentRegion = null;

    const REGION_FLAGS = {
        united_states: '🇺🇸',
        united_kingdom: '🇬🇧',
        central_europe: '🇩🇪',
        scandinavia: '🇸🇪',
        finland: '🇫🇮',
        baltics: '🇪🇪',
        balkans: '🇭🇷',
        greece: '🇬🇷',
        mediterranean: '🇮🇹'
    };

    // The Android app loads the pages from file:///android_asset/
    const IN_APP = window.location.protocol === 'file:';

    const t = (key, vars) => (window.CAM_I18N ? window.CAM_I18N.t(key, vars) : key);
    const regionName = (key) => t('r_' + key);

    document.addEventListener('DOMContentLoaded', () => {
        if (IN_APP) document.documentElement.classList.add('in-app');
        initTextSize();
        initializeRegionSelector();
        if (!IN_APP) registerServiceWorker();

        let savedRegion = null;
        try {
            savedRegion = localStorage.getItem('selectedRegion');
        } catch (_) {}
        if (savedRegion && window.CAM_DATA && window.CAM_DATA.regions[savedRegion]) {
            selectRegion(savedRegion, { quiet: true });
        } else {
            updateWhere();
        }

        document.addEventListener('mkweli-langchange', () => {
            updateWhere();
            if (currentRegion) {
                const name = document.getElementById('current-region-name');
                if (name) name.textContent = regionName(currentRegion);
            }
        });
    });

    function initTextSize() {
        const btn = document.getElementById('text-size');
        if (!btn) return;
        const apply = (on) => {
            document.documentElement.classList.toggle('text-large', on);
            btn.setAttribute('aria-pressed', String(on));
        };
        let on = false;
        try {
            on = localStorage.getItem('textLarge') === '1';
        } catch (_) {}
        apply(on);
        btn.addEventListener('click', () => {
            on = !on;
            apply(on);
            try {
                localStorage.setItem('textLarge', on ? '1' : '0');
            } catch (_) {}
        });
    }

    function registerServiceWorker() {
        if (!('serviceWorker' in navigator)) return;
        const swUrl = new URL('sw.js', window.location.href).pathname;
        navigator.serviceWorker.register(swUrl).catch(() => {
            /* offline support is optional */
        });
    }

    function initializeRegionSelector() {
        document.querySelectorAll('.region-btn').forEach((btn) => {
            btn.addEventListener('click', () => selectRegion(btn.getAttribute('data-region')));
        });
        const changeRegionBtn = document.getElementById('change-region');
        if (changeRegionBtn) {
            changeRegionBtn.addEventListener('click', showRegionSelector);
        }
    }

    function updateWhere() {
        const flag = document.getElementById('where-flag');
        const name = document.getElementById('where-name');
        const change = document.querySelector('#where-btn .where-change');
        if (!flag || !name) return;
        if (currentRegion) {
            flag.textContent = REGION_FLAGS[currentRegion] || '🌍';
            name.textContent = regionName(currentRegion);
            name.removeAttribute('data-i18n');
            if (change) change.hidden = false;
        } else {
            flag.textContent = '🌍';
            name.textContent = t('where_none');
            name.setAttribute('data-i18n', 'where_none');
            if (change) change.hidden = true;
        }
    }

    function selectRegion(regionKey, opts) {
        currentRegion = regionKey;
        try {
            localStorage.setItem('selectedRegion', regionKey);
        } catch (_) {}

        document.querySelectorAll('.region-btn').forEach((btn) => {
            const on = btn.getAttribute('data-region') === regionKey;
            btn.classList.toggle('active', on);
            btn.setAttribute('aria-pressed', String(on));
        });

        const currentRegionDisplay = document.getElementById('current-region-display');
        const currentRegionName = document.getElementById('current-region-name');
        const regionSelector = document.getElementById('region-selector');

        if (currentRegionDisplay && currentRegionName) {
            currentRegionName.textContent = regionName(regionKey);
            currentRegionDisplay.hidden = false;
            if (regionSelector) regionSelector.hidden = true;
        }

        updateWhere();
        renderRegionGuide(regionKey);
        window.dispatchEvent(new CustomEvent('regionSelected', { detail: { region: regionKey } }));

        if (!(opts && opts.quiet) && currentRegionName) {
            currentRegionName.setAttribute('tabindex', '-1');
            currentRegionName.focus({ preventScroll: true });
        }
    }

    function renderRegionGuide(regionKey) {
        const host = document.getElementById('region-guide');
        if (!host) return;
        host.innerHTML = '';

        const data = window.CAM_DATA && window.CAM_DATA.getRegionData
            ? window.CAM_DATA.getRegionData(regionKey)
            : null;
        if (!data || !data.countries) return;

        Object.keys(data.countries).forEach((key) => {
            const country = data.countries[key];
            const block = document.createElement('div');
            block.className = 'country-block';
            const title = document.createElement('h3');
            title.textContent = `${country.emoji || ''} ${country.name}`.trim();
            block.appendChild(title);

            (country.sections || []).forEach((section) => {
                const h = document.createElement('h4');
                h.textContent = section.title;
                block.appendChild(h);
                const ul = document.createElement('ul');
                (section.items || []).forEach((item) => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ul.appendChild(li);
                });
                block.appendChild(ul);
            });
            host.appendChild(block);
        });
    }

    function showRegionSelector() {
        const regionSelector = document.getElementById('region-selector');
        if (regionSelector) regionSelector.hidden = false;
        const first = regionSelector && regionSelector.querySelector('.region-btn.active, .region-btn');
        if (first) first.focus();
    }

    window.CAM_APP = {
        getCurrentRegion: () => currentRegion,
        selectRegion,
        showRegionSelector,
        regionName,
        inApp: IN_APP
    };
})();
