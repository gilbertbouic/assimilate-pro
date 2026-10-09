# Assimilate Pro

**Settling in, stop by stop - a guide for newcomers to the West**

Practical survival guide for newcomers to Western Europe, the UK, the United States, and related regions. Built for present-day realities: digital-first bureaucracy, housing pressure, work-rights checks, scam patterns, language/status pathways, and everyday cultural norms.

| | |
|---|---|
| **Website** | https://gilbertbouic.github.io/assimilate-pro/ |
| **Repository** | https://github.com/gilbertbouic/assimilate-pro |
| **Android APK** | [Releases](https://github.com/gilbertbouic/assimilate-pro/releases) |

## Why this name

**Assimilate Pro** is short, memorable, and action-oriented: learn the unwritten rules *and* the systems that gatekeep daily life-so you can settle with confidence, not guesswork.

## What’s inside

| Area | Focus |
|------|--------|
| **Your route** | Five stops: papers, a home, work and language, doctor and bank, scams. Tick each one when done. |
| **9 regions** | US, UK, Central Europe, Scandinavia, Finland, Baltics, Balkans, Greece, Mediterranean |
| **Quizzes** | Scenario-style multiple choice with explanations |
| **Stories** | "What would you do?" with Do and Don't lists (work, housing, papers, health, social) |
| **Roles** | Student, professional, remote, partner, entrepreneur, retiree, awaiting documentation |
| **Privacy** | Local progress only - no signup |

## Not legal advice

Rules change. Always verify status, work rights, and benefits on **official government sites** or with a **licensed adviser / recognized NGO**.

## Website (GitHub Pages)

Static site at the repository root (`index.html`).  
**Pages:** branch `main` → folder `/` (root).

Live: https://gilbertbouic.github.io/assimilate-pro/

## Look and feel

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) (Route Map style, Lexend font, colour per stop).

## Android app

WebView shell packaging the same assets. Build with JDK 17.

```bash
./scripts/sync-web-to-android.sh   # website → app assets (run after any website change)
# local.properties → sdk.dir=...
./gradlew assembleDebug            # test build
./gradlew assembleRelease          # release build (signed only if keystore.properties exists)
```

## Releasing a new APK

1. Raise `versionCode` and `versionName` in `app/build.gradle.kts`. The code must be higher than the last release, or phones will refuse the update.
2. Put the release key in `keystore/` and fill in `keystore.properties` (copy `keystore.properties.template`). Both are ignored by git. Never commit them.
   Sign with the same key as the last release (2.3.x: certificate `CN=Assimilate Pro, O=Mkweli, C=MU`), or people must uninstall the old app first.
3. Run `./gradlew assembleRelease`, then check: `apksigner verify --print-certs app/build/outputs/apk/release/app-release.apk`.
4. Rename the file to `Assimilate-Pro-<version>.apk`, make `SHA256SUMS.txt`, and publish a GitHub release tagged `v<version>` with both files.

The website's "Download latest APK" button opens https://github.com/gilbertbouic/assimilate-pro/releases/latest, so it always shows the newest release whatever the file is called.

## License

See [LICENSE](LICENSE).
