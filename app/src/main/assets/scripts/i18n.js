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
            brand_tag: 'Cultural guide for newcomers · 2026',
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
            hero_badge: 'Updated for 2025-2026 immigration realities',
            hero_h1: 'Assimilate with clarity - not guesswork',
            hero_lead:
                'A practical survival guide for newcomers to the West: digital government, tight housing markets, work rights, paperwork, health systems, and everyday cultural norms - offline-friendly and privacy-first.',
            hero_cta_today: "Start with today's essentials",
            hero_cta_region: 'Choose your region',
            hero_cta_app: 'Get the Android app',
            guide_en_note: '',
            stat_regions: 'regions + shared essentials',
            stat_accounts: 'accounts required',
            stat_progress: 'progress stored on-device',
            stat_edition: 'edition focus: systems that matter now',
            dl_h2: 'Assimilate Pro for Android',
            dl_p: 'Same content offline in a signed release APK - ideal when data is expensive or portals are flaky.',
            dl_apk: 'Download latest APK',
            dl_source: 'View source',
            footer_meta:
                '<a href="PRIVACY.md">Privacy</a> · Open source · Progress stored locally',
            footer_tag: 'Assimilate Pro · Cultural guide for newcomers to the West · 2026',
            mkweli_product: 'A Mkweli product'
        },
        fr: {
            skip: 'Aller au contenu',
            brand_tag: 'Guide culturel pour les nouveaux arrivants · 2026',
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
            hero_badge: 'Actualisé pour les réalités migratoires 2025-2026',
            hero_h1: "S'assimiler en toute clarté - pas au hasard",
            hero_lead:
                "Un guide pratique de survie pour les nouveaux arrivants en Occident: administration numérique, marchés du logement tendus, droits du travail, paperasse, systèmes de santé et normes culturelles du quotidien - utilisable hors ligne et respectueux de la vie privée.",
            hero_cta_today: "Commencer par l'essentiel du jour",
            hero_cta_region: 'Choisir votre région',
            hero_cta_app: "Télécharger l'appli Android",
            guide_en_note: 'Le guide régional est en anglais pour le moment.',
            stat_regions: "régions + l'essentiel commun",
            stat_accounts: 'compte requis',
            stat_progress: "progression stockée sur l'appareil",
            stat_edition: 'édition: les systèmes qui comptent maintenant',
            dl_h2: 'Assimilate Pro pour Android',
            dl_p: 'Le même contenu hors ligne dans un APK signé - utile quand les données sont chères ou les portails instables.',
            dl_apk: 'Télécharger le dernier APK',
            dl_source: 'Voir le code source',
            footer_meta:
                '<a href="PRIVACY.md">Confidentialité</a> · Open source · Progression stockée localement',
            footer_tag: 'Assimilate Pro · Guide culturel pour les nouveaux arrivants en Occident · 2026',
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
