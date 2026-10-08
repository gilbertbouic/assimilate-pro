/**
 * Public-site chrome i18n (header, hero, download, footer, skip/nav).
 * Region and scenario datasets stay English.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'mkweli-assimilate-lang';

    var I18N = {
        en: {
            skip: 'Skip to content',
            brand_tag: 'A picture guide · 2026',
            nav_main: 'Main',
            nav_today: 'Today',
            nav_regions: 'Regions',
            nav_role: 'Role',
            nav_work: 'Work',
            nav_quizzes: 'Quizzes',
            nav_scenarios: 'Scenarios',
            nav_progress: 'Progress',
            nav_app: 'App',
            menu_toggle: 'Toggle navigation',
            lang_group: 'Language',
            hero_badge: 'For a new home',
            hero_h1: 'Look at the picture. Then choose.',
            hero_lead:
                'A picture guide for a new home. Short lines. Your score stays on this phone.',
            hero_cta_today: 'Start here',
            hero_cta_region: 'Pick a place',
            hero_cta_app: 'Get the phone app',
            guide_en_note: '',
            stat_regions: 'places',
            stat_accounts: 'accounts',
            stat_progress: 'score stays on this phone',
            stat_edition: 'short lines and pictures',
            dl_h2: 'Assimilate Pro on your phone',
            dl_p: 'The same pages, saved in the app, so it works with no internet.',
            dl_apk: 'Download the app',
            dl_source: 'See the code',
            footer_meta:
                '<a href="PRIVACY.md">Privacy</a> · Your score stays on this phone',
            footer_tag: 'Assimilate Pro · A picture guide for a new home',
            mkweli_product: 'A Mkweli product'
        },
        fr: {
            skip: 'Aller au contenu',
            brand_tag: 'Un guide en images · 2026',
            nav_main: 'Principal',
            nav_today: "Aujourd'hui",
            nav_regions: 'Régions',
            nav_role: 'Situation',
            nav_work: 'Travail',
            nav_quizzes: 'Quiz',
            nav_scenarios: 'Scénarios',
            nav_progress: 'Progression',
            nav_app: 'Appli',
            menu_toggle: 'Ouvrir le menu',
            lang_group: 'Langue',
            hero_badge: 'Pour une nouvelle maison',
            hero_h1: 'Regarde l’image. Puis choisis.',
            hero_lead:
                "Un guide en images pour une nouvelle maison. Des phrases courtes. Le score reste sur ce téléphone.",
            hero_cta_today: "Commencer ici",
            hero_cta_region: 'Choisir un lieu',
            hero_cta_app: "Obtenir l’appli",
            guide_en_note: 'Les pages des lieux sont en anglais.',
            stat_regions: "lieux",
            stat_accounts: 'compte',
            stat_progress: "le score reste sur ce téléphone",
            stat_edition: 'images et phrases courtes',
            dl_h2: 'Assimilate Pro sur le téléphone',
            dl_p: 'Les mêmes pages, dans l’appli, sans internet.',
            dl_apk: 'Télécharger l’appli',
            dl_source: 'Voir le code',
            footer_meta:
                '<a href="PRIVACY.md">Confidentialité</a> · Le score reste sur ce téléphone',
            footer_tag: 'Assimilate Pro · Un guide en images',
            mkweli_product: 'Un produit Mkweli'
        }
    };

    function applyLang(lang) {
        var pack = I18N[lang] || I18N.en;
        lang = I18N[lang] ? lang : 'en';
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (pack[key] != null) el.textContent = pack[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (pack[key] != null) el.innerHTML = pack[key];
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-aria');
            if (pack[key] != null) el.setAttribute('aria-label', pack[key]);
        });

        document.querySelectorAll('.lang-switch button').forEach(function (btn) {
            btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
        });

        var note = document.querySelector('.hero-lang-note');
        if (note) note.hidden = !pack.guide_en_note;

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (_) {}

        document.dispatchEvent(new CustomEvent('mkweli-langchange', { detail: { lang: lang } }));
    }

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyLang(btn.getAttribute('data-lang'));
        });
    });

    var saved = null;
    try {
        saved = localStorage.getItem(STORAGE_KEY);
    } catch (_) {}
    if (saved && I18N[saved]) applyLang(saved);
})();
