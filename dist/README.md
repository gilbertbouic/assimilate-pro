# Cultural Assimilation Manual — Release APK

| Field | Value |
|--------|--------|
| File | `Cultural-Assimilation-Manual-v1.1.0-release.apk` |
| Version | **1.1.0** (versionCode **2**) |
| Package | `com.culturalassimilation.manual` |
| Min Android | 7.0 (API 24) |
| Target Android | 14 (API 34) |
| Size | ~2.6 MB |
| Signing | APK Signature Scheme v2 (release keystore) |
| Optimization | R8 full mode + resource shrinking |

## Install (sideload)

```bash
adb install -r Cultural-Assimilation-Manual-v1.1.0-release.apk
```

Or copy the APK to the device and open it (allow install from unknown sources if prompted).

## What’s in this release

- Offline WebView shell with packaged cultural content (regions, quizzes, scenarios)
- Release minify (R8) and resource shrinking
- Brand-colored launcher / splash theme
- Secure defaults: cleartext blocked, safe browsing on, external URL loads blocked
- Progress bar while assets load; proper back-stack and WebView lifecycle

## Rebuild

From the repo root (with Android SDK + JDK 17+):

```bash
# Ensure local.properties has sdk.dir=...
# Ensure keystore.properties points at keystore/cam-release.jks
./gradlew assembleRelease
```

Output: `app/build/outputs/apk/release/app-release.apk`

## Important: signing key

Updates to the same app ID on a device (or Play Store) must use the **same** keystore (`keystore/cam-release.jks`). Keep `keystore.properties` and the `.jks` file private and backed up.
