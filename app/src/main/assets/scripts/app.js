/**
 * Assimilate Pro — app shell: region selection, today essentials, SW.
 */
(function () {
    'use strict';

    let currentRegion = null;

    const REGION_NAMES = {
        united_states: 'United States',
        united_kingdom: 'United Kingdom',
        central_europe: 'Central Europe',
        scandinavia: 'Scandinavia',
        finland: 'Finland',
        baltics: 'Baltics',
        balkans: 'Balkans',
        greece: 'Greece',
        mediterranean: 'Mediterranean',
        today: 'Today in the West'
    };

    document.addEventListener('DOMContentLoaded', () => {
        initializeRegionSelector();
        renderTodayEssentials();
        registerServiceWorker();
        initDownloadCounter();

        const savedRegion = localStorage.getItem('selectedRegion');
        if (savedRegion && window.CAM_DATA && window.CAM_DATA.regions[savedRegion]) {
            selectRegion(savedRegion);
        }
    });

    function initDownloadCounter() {
        const counter = document.querySelector('[data-dl-counter]');
        if (!counter) return;

        const product = counter.getAttribute('data-dl-product') || 'assimilate';
        const seed = Number(counter.getAttribute('data-dl-seed')) || 0;
        const endpoint = `https://api.counterapi.dev/v1/mkweli-tech/apk-${product}`;
        let isLocked = false;

        const formatDownloads = (remoteCount) =>
            `${(seed + Math.max(0, remoteCount)).toLocaleString('en-US')} downloads`;

        const render = (remoteCount) => {
            counter.textContent = formatDownloads(remoteCount);
        };

        const readCount = (payload) => {
            if (payload && typeof payload.count === 'number') return payload.count;
            if (payload && payload.data && typeof payload.data.count === 'number') return payload.data.count;
            if (payload && typeof payload.value === 'number') return payload.value;
            return null;
        };

        const fetchCount = async (url) => {
            const response = await fetch(url, { cache: 'no-store' });
            if (!response.ok) throw new Error(`Counter request failed: ${response.status}`);
            const count = readCount(await response.json());
            if (typeof count !== 'number' || Number.isNaN(count)) throw new Error('Invalid counter payload');
            return count;
        };

        fetchCount(endpoint).then(render).catch(() => render(0));

        const isApkHref = (h) => /\.apk($|[?#])/i.test(h || '');
        // Prefer a real APK file URL so the Download CTA is countable
        const apkCta = document.getElementById('apk-link');
        if (apkCta && !isApkHref(apkCta.getAttribute('href') || '')) {
            apkCta.setAttribute(
                'href',
                'https://github.com/gilbertbouic/assimilate-pro/releases/latest/download/Assimilate-Pro-v2.1.2-release.apk'
            );
        }
        // Count only real APK file downloads (not release pages / source links)
        document.querySelectorAll('a[href]').forEach((link) => {
            const href = link.getAttribute('href') || '';
            if (!isApkHref(href)) {
                link.removeAttribute('data-dl-link');
                return;
            }
            link.setAttribute('data-dl-link', '');
            link.addEventListener('click', () => {
                if (isLocked) return;
                isLocked = true;
                setTimeout(() => {
                    isLocked = false;
                }, 2000);

                fetchCount(`${endpoint}/up`).then(render).catch(() => {
                    /* keep current value */
                });
            });
        });
    }

    function registerServiceWorker() {
        if (!('serviceWorker' in navigator)) return;
        // Relative path works on GitHub Pages project sites and file/WebView hosts
        const swUrl = new URL('sw.js', window.location.href).pathname;
        navigator.serviceWorker.register(swUrl).catch(() => {
            /* offline SW optional */
        });
    }

    function renderTodayEssentials() {
        const intro = document.getElementById('today-intro');
        const host = document.getElementById('today-pillars');
        if (!host) return;

        const guide = window.CAM_GUIDES && window.CAM_GUIDES.essentials;
        if (!guide) {
            // Scripts may still be loading; retry shortly
            setTimeout(renderTodayEssentials, 50);
            return;
        }

        if (intro) intro.textContent = guide.intro;
        host.innerHTML = '';
        guide.pillars.forEach((p) => {
            const el = document.createElement('article');
            el.className = 'pillar';
            el.innerHTML = `<h3><span>${p.icon}</span> ${escapeHtml(p.title)}</h3>`;
            const ul = document.createElement('ul');
            p.points.forEach((point) => {
                const li = document.createElement('li');
                li.textContent = point;
                ul.appendChild(li);
            });
            el.appendChild(ul);
            host.appendChild(el);
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

    function selectRegion(regionKey) {
        currentRegion = regionKey;
        localStorage.setItem('selectedRegion', regionKey);

        document.querySelectorAll('.region-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-region') === regionKey);
        });

        const currentRegionDisplay = document.getElementById('current-region-display');
        const currentRegionName = document.getElementById('current-region-name');
        const regionSelector = document.getElementById('region-selector');

        if (currentRegionDisplay && currentRegionName) {
            currentRegionName.textContent = REGION_NAMES[regionKey] || regionKey;
            currentRegionDisplay.style.display = 'block';
            if (regionSelector) regionSelector.style.display = 'none';
        }

        renderRegionGuide(regionKey);
        window.dispatchEvent(new CustomEvent('regionSelected', { detail: { region: regionKey } }));
    }

    function renderRegionGuide(regionKey) {
        const host = document.getElementById('region-guide');
        if (!host) return;
        host.innerHTML = '';

        const data = window.CAM_DATA && window.CAM_DATA.getRegionData
            ? window.CAM_DATA.getRegionData(regionKey)
            : null;
        if (!data || !data.countries) {
            host.innerHTML =
                '<p class="muted">Quizzes for this region are available below. Open the Quizzes section after answering a few questions.</p>';
            return;
        }

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
        if (regionSelector) regionSelector.style.display = 'grid';
        const section = document.getElementById('region-select');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&')
            .replace(/</g, '<')
            .replace(/>/g, '>')
            .replace(/"/g, '"');
    }

    window.CAM_APP = {
        getCurrentRegion: () => currentRegion,
        selectRegion,
        showRegionSelector,
        regionNames: REGION_NAMES
    };
})();
