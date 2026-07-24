# West Newcomer Manual

**Cultural Assimilation Guide — 2026 edition**

Practical survival guide for newcomers to Western Europe, the UK, the United States, and related regions. Updated for present-day realities: digital-first bureaucracy, housing pressure, work-rights checks, scam patterns, language/status pathways, and everyday cultural norms.

🌐 **Website:** https://gilbertbouic.github.io/west-newcomer-manual/  
📱 **Android APK:** see [Releases](https://github.com/gilbertbouic/west-newcomer-manual/releases)

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

Static site at repo root (`index.html`). Enable Pages: **Settings → Pages → Deploy from branch `main` / root**.

## Android app

WebView shell packaging the same assets.

```bash
# local.properties → sdk.dir=...
# keystore.properties for signed release
./gradlew assembleRelease
```

APK output: `app/build/outputs/apk/release/app-release.apk`

## Sync web → Android assets

```bash
./scripts/sync-web-to-android.sh
```

## License

See [LICENSE](LICENSE).
