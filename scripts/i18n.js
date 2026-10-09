/**
 * Site chrome in English and French (header, route, buttons, footer).
 * The guide text itself (stops, quizzes, stories) stays in English for now.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'mkweli-assimilate-lang';
    var current = 'en';

    var I18N = {
        en: {
            skip: 'Skip to content',
            nav_main: 'Main',
            nav_route: 'Route',
            nav_country: 'Country',
            nav_quiz: 'Quiz',
            nav_scenarios: 'What to do',
            nav_progress: 'Progress',
            nav_app: 'App',
            menu_toggle: 'Menu',
            lang_group: 'Language',
            text_size: 'Bigger text',
            route_kicker: 'Your route',
            route_h1: 'Settling in, stop by stop',
            route_lead: 'Pick your country. Then go stop by stop. Each stop has a few short lines.',
            route_list: 'Your stops',
            where_none: 'Choose your country',
            where_change: 'Change',
            stop_papers: 'Papers and ID',
            stop_papers_sub: 'Visas, letters, real websites',
            stop_home: 'A place to live',
            stop_home_sub: 'Rent safely, register your address',
            stop_work: 'Work and language',
            stop_work_sub: 'Job papers, pay slips, classes',
            stop_health: 'Doctor and bank',
            stop_health_sub: 'Family doctor, bank account, bills',
            stop_scams: 'Scams to avoid',
            stop_scams_sub: 'Fake calls, fake homes, emergency numbers',
            stop_done: 'Done',
            stop_next: 'Next stop',
            stop_of: 'Stop {n} of {total}',
            stop_mark: 'I have done this',
            stop_marked: 'Done ✓ (tap to undo)',
            stop_next_btn: 'Next stop →',
            stop_back: '← Back to the route',
            count: '{done} of {total} stops done',
            go_start: 'Start: {stop} →',
            go_continue: 'Continue: {stop} →',
            go_all_done: 'All stops done. Try the quiz →',
            country_kicker: 'Your country',
            country_h2: 'Where do you live now?',
            country_lead: 'Pick one. The quiz and the stories below will match it.',
            country_current: 'You chose:',
            country_change: 'Pick another country',
            r_united_states: 'United States',
            r_united_kingdom: 'United Kingdom',
            r_central_europe: 'Germany, Austria, Switzerland',
            r_scandinavia: 'Sweden, Norway, Denmark',
            r_finland: 'Finland',
            r_baltics: 'Estonia, Latvia, Lithuania',
            r_balkans: 'The Balkans',
            r_greece: 'Greece',
            r_mediterranean: 'Italy, France, Spain, Portugal',
            roles_kicker: 'About you',
            roles_h2: 'Who are you?',
            roles_lead: 'This is optional. It picks the stories that fit you.',
            role_student: 'Student',
            role_remote: 'Remote worker',
            role_spouse: 'Partner or family',
            role_professional: 'Worker',
            role_entrepreneur: 'Business owner',
            role_retiree: 'Retired',
            role_undocumented: 'Waiting for papers',
            quiz_kicker: 'Check yourself',
            quiz_h2: 'Quiz',
            quiz_lead: 'Pick an answer. The reason shows right away. Your score stays on this device.',
            quiz_pick_country: 'Pick your country above to see its quiz.',
            quiz_right: '✓ Right.',
            quiz_wrong: '✗ Not quite. The right answer is {letter}.',
            sc_kicker: 'Real life',
            sc_h2: 'What would you do?',
            sc_lead: 'Short stories with what to do and what not to do.',
            sc_pick_country: 'Pick your country above to see its stories.',
            sc_none: 'No story fits this choice yet. Try "Who are you?" with another answer.',
            sc_do: 'Do',
            sc_dont: "Don't",
            sc_read: 'I have read this',
            sc_read_done: 'Read ✓',
            pr_kicker: 'Your progress',
            pr_h2: 'How far you have come',
            pr_overall: 'All together',
            pr_stops: 'Route stops',
            pr_quizzes: 'Quiz scores',
            pr_no_quiz: 'No quiz answers yet.',
            pr_scenarios: 'Stories read',
            pr_no_sc: 'No stories read yet.',
            pr_badges: 'Badges',
            pr_no_badges: 'No badges yet.',
            pr_snapshot: 'Make a progress picture',
            pr_download: 'Save the picture',
            pr_reset: 'Start over',
            pr_reset_confirm: 'Start over? This clears your stops, scores, and stories on this device.',
            pr_snap_ready: '✓ Your picture is ready. Press and hold it to save, or use the button below.',
            pr_snap_saved: '✓ Picture saved.',
            pr_snap_error: '✗ The picture did not save. Press and hold the picture to save it.',
            dl_h2: 'Assimilate Pro on your phone',
            dl_p: 'The same guide inside an Android app. It works with no internet.',
            dl_apk: 'Download latest APK',
            dl_source: 'See the code',
            dl_hint: 'On the download page, tap the file that ends in .apk.',
            guide_en_note: '',
            footer_disclaimer: 'This guide is not legal advice. Rules change. Check important steps on the official government website or with a trusted helper.',
            footer_meta: '<a href="PRIVACY.md">Privacy</a> · Your progress stays on this device',
            mkweli_product: 'A Mkweli product'
        },
        fr: {
            skip: 'Aller au contenu',
            nav_main: 'Principal',
            nav_route: 'Parcours',
            nav_country: 'Pays',
            nav_quiz: 'Quiz',
            nav_scenarios: 'Que faire',
            nav_progress: 'Progression',
            nav_app: 'Appli',
            menu_toggle: 'Menu',
            lang_group: 'Langue',
            text_size: 'Texte plus grand',
            route_kicker: 'Votre parcours',
            route_h1: 'S’installer, étape par étape',
            route_lead: 'Choisissez votre pays. Puis avancez étape par étape. Chaque étape tient en quelques lignes.',
            route_list: 'Vos étapes',
            where_none: 'Choisissez votre pays',
            where_change: 'Changer',
            stop_papers: 'Papiers et identité',
            stop_papers_sub: 'Visas, courriers, vrais sites officiels',
            stop_home: 'Un logement',
            stop_home_sub: 'Louer sans risque, déclarer son adresse',
            stop_work: 'Travail et langue',
            stop_work_sub: 'Contrat, fiche de paie, cours',
            stop_health: 'Médecin et banque',
            stop_health_sub: 'Médecin de famille, compte, factures',
            stop_scams: 'Arnaques à éviter',
            stop_scams_sub: 'Faux appels, faux logements, numéros d’urgence',
            stop_done: 'Fait',
            stop_next: 'Prochaine étape',
            stop_of: 'Étape {n} sur {total}',
            stop_mark: 'C’est fait',
            stop_marked: 'Fait ✓ (toucher pour annuler)',
            stop_next_btn: 'Étape suivante →',
            stop_back: '← Retour au parcours',
            count: '{done} étapes faites sur {total}',
            go_start: 'Commencer : {stop} →',
            go_continue: 'Continuer : {stop} →',
            go_all_done: 'Toutes les étapes sont faites. Faites le quiz →',
            country_kicker: 'Votre pays',
            country_h2: 'Où vivez-vous maintenant ?',
            country_lead: 'Choisissez-en un. Le quiz et les histoires suivront ce choix.',
            country_current: 'Votre choix :',
            country_change: 'Choisir un autre pays',
            r_united_states: 'États-Unis',
            r_united_kingdom: 'Royaume-Uni',
            r_central_europe: 'Allemagne, Autriche, Suisse',
            r_scandinavia: 'Suède, Norvège, Danemark',
            r_finland: 'Finlande',
            r_baltics: 'Estonie, Lettonie, Lituanie',
            r_balkans: 'Les Balkans',
            r_greece: 'Grèce',
            r_mediterranean: 'Italie, France, Espagne, Portugal',
            roles_kicker: 'Vous',
            roles_h2: 'Qui êtes-vous ?',
            roles_lead: 'Facultatif. Cela choisit les histoires qui vous concernent.',
            role_student: 'Étudiant',
            role_remote: 'Télétravailleur',
            role_spouse: 'Conjoint ou famille',
            role_professional: 'Salarié',
            role_entrepreneur: 'Chef d’entreprise',
            role_retiree: 'Retraité',
            role_undocumented: 'En attente de papiers',
            quiz_kicker: 'Testez-vous',
            quiz_h2: 'Quiz',
            quiz_lead: 'Choisissez une réponse. L’explication s’affiche tout de suite. Le score reste sur cet appareil.',
            quiz_pick_country: 'Choisissez votre pays plus haut pour voir son quiz.',
            quiz_right: '✓ Bonne réponse.',
            quiz_wrong: '✗ Pas tout à fait. La bonne réponse est {letter}.',
            sc_kicker: 'La vraie vie',
            sc_h2: 'Que feriez-vous ?',
            sc_lead: 'De courtes histoires : ce qu’il faut faire et ne pas faire.',
            sc_pick_country: 'Choisissez votre pays plus haut pour voir ses histoires.',
            sc_none: 'Aucune histoire pour ce choix. Essayez une autre réponse à « Qui êtes-vous ? ».',
            sc_do: 'À faire',
            sc_dont: 'À éviter',
            sc_read: 'J’ai lu',
            sc_read_done: 'Lu ✓',
            pr_kicker: 'Votre progression',
            pr_h2: 'Le chemin parcouru',
            pr_overall: 'Au total',
            pr_stops: 'Étapes du parcours',
            pr_quizzes: 'Scores des quiz',
            pr_no_quiz: 'Pas encore de réponse.',
            pr_scenarios: 'Histoires lues',
            pr_no_sc: 'Pas encore d’histoire lue.',
            pr_badges: 'Badges',
            pr_no_badges: 'Pas encore de badge.',
            pr_snapshot: 'Créer une image de progression',
            pr_download: 'Enregistrer l’image',
            pr_reset: 'Tout recommencer',
            pr_reset_confirm: 'Tout recommencer ? Les étapes, scores et histoires de cet appareil seront effacés.',
            pr_snap_ready: '✓ Votre image est prête. Appuyez longuement pour l’enregistrer, ou utilisez le bouton ci-dessous.',
            pr_snap_saved: '✓ Image enregistrée.',
            pr_snap_error: '✗ L’image n’a pas été enregistrée. Appuyez longuement sur l’image pour l’enregistrer.',
            dl_h2: 'Assimilate Pro sur votre téléphone',
            dl_p: 'Le même guide dans une appli Android. Elle marche sans internet.',
            dl_apk: 'Télécharger le dernier APK',
            dl_source: 'Voir le code',
            dl_hint: 'Sur la page de téléchargement, touchez le fichier qui finit par .apk.',
            guide_en_note: 'Le contenu du guide est en anglais pour le moment.',
            footer_disclaimer: 'Ce guide n’est pas un conseil juridique. Les règles changent. Vérifiez les étapes importantes sur le site officiel du gouvernement ou auprès d’une personne de confiance.',
            footer_meta: '<a href="PRIVACY.md">Confidentialité</a> · Votre progression reste sur cet appareil',
            mkweli_product: 'Un produit Mkweli'
        }
    };

    function t(key, vars) {
        var pack = I18N[current] || I18N.en;
        var s = pack[key] != null ? pack[key] : (I18N.en[key] != null ? I18N.en[key] : key);
        if (vars) {
            Object.keys(vars).forEach(function (k) {
                s = s.split('{' + k + '}').join(vars[k]);
            });
        }
        return s;
    }

    function applyLang(lang) {
        lang = I18N[lang] ? lang : 'en';
        current = lang;
        var pack = I18N[lang];
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
        document.querySelectorAll('.lang-note').forEach(function (note) {
            note.hidden = !pack.guide_en_note;
        });

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (_) {}

        document.dispatchEvent(new CustomEvent('mkweli-langchange', { detail: { lang: lang } }));
    }

    window.CAM_I18N = {
        t: t,
        lang: function () { return current; },
        apply: applyLang
    };

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyLang(btn.getAttribute('data-lang'));
        });
    });

    var saved = null;
    try {
        saved = localStorage.getItem(STORAGE_KEY);
    } catch (_) {}
    applyLang(saved && I18N[saved] ? saved : 'en');
})();
