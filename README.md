# Assimilate Pro

**Cultural guide for newcomers to the West — 2026 edition**

Practical survival guide for newcomers to Western Europe, the UK, the United States, and related regions. Built for present-day realities: digital-first bureaucracy, housing pressure, work-rights checks, scam patterns, language/status pathways, and everyday cultural norms.

| | |
|---|---|
| **Website** | https://gilbertbouic.github.io/assimilate-pro/ |
| **Repository** | https://github.com/gilbertbouic/assimilate-pro |
| **Android APK** | [Releases](https://github.com/gilbertbouic/assimilate-pro/releases) |

## Why this name

**Assimilate Pro** is short, memorable, and action-oriented: learn the unwritten rules *and* the systems that gatekeep daily life—so you can settle with confidence, not guesswork.

## What’s inside

| Area | Focus |
|------|--------|
| **Today in the West** | Cross-cutting 2025–2026 essentials (portals, housing, scams, money, waiting on papers) |
| **9 regions** | US, UK, Central Europe, Scandinavia, Finland, Baltics, Balkans, Greece, Mediterranean |
| **Quizzes** | Scenario-style multiple choice with explanations |
| **Scenarios** | Do / Don’t flip cards (work, housing, bureaucracy, health, social) |
| **Roles** | Student, professional, remote, partner, entrepreneur, retiree, awaiting documentation |
| **Privacy** | Local progress only — no signup |

## Not legal advice

Rules change. Always verify status, work rights, and benefits on **official government sites** or with a **licensed adviser / recognized NGO**.

## Website (GitHub Pages)

Static site at the repository root (`index.html`).  
**Pages:** branch `main` → folder `/` (root).

Live: https://gilbertbouic.github.io/assimilate-pro/

## Android app

WebView shell packaging the same assets.

```bash
# local.properties → sdk.dir=...
# keystore.properties for signed release
./gradlew assembleRelease
```

```bash
./scripts/sync-web-to-android.sh   # website → app assets
```

## License

See [LICENSE](LICENSE).
