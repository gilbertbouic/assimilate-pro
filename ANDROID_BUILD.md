# Android Build Instructions

## Overview

This repository contains an Android application that wraps the Cultural Assimilation Manual web app in a WebView. The project is structured as an Android Studio project using Gradle build system.

## Project Structure

```
.
├── app/                          # Android app module
│   ├── build.gradle.kts         # App module Gradle build script
│   ├── src/
│   │   └── main/
│   │       ├── AndroidManifest.xml
│   │       ├── java/com/culturalassimilation/manual/
│   │       │   └── MainActivity.kt    # Main WebView activity
│   │       ├── res/                   # Android resources
│   │       │   ├── layout/
│   │       │   │   └── activity_main.xml
│   │       │   ├── values/
│   │       │   │   ├── strings.xml
│   │       │   │   ├── colors.xml
│   │       │   │   └── themes.xml
│   │       │   ├── drawable/         # Launcher icon drawables
│   │       │   └── mipmap-*/         # Launcher icon bitmaps (density-specific)
│   │       └── assets/               # Web app assets
│   │           ├── index.html        # Main entry point with region selector
│   │           ├── styles/           # CSS files
│   │           │   ├── styles.css
│   │           │   └── interactive-styles.css
│   │           └── scripts/          # JavaScript files
│   │               ├── app.js        # Main app logic
│   │               ├── navigation.js
│   │               ├── interactive.js
│   │               ├── core/
│   │               │   └── data.core.js   # Core data structures
│   │               ├── regions/          # Region-specific data
│   │               │   ├── united_states.data.js
│   │               │   ├── united_kingdom.data.js
│   │               │   ├── central_europe.data.js
│   │               │   ├── scandinavia.data.js
│   │               │   ├── finland.data.js
│   │               │   ├── baltics.data.js
│   │               │   ├── balkans.data.js
│   │               │   ├── greece.data.js
│   │               │   └── mediterranean.data.js
│   │               └── scenarios/        # Region-specific scenarios
│   │                   ├── united_states.scenarios.js
│   │                   ├── united_kingdom.scenarios.js
│   │                   └── central_europe.scenarios.js
├── build.gradle.kts                  # Root project Gradle build script
├── settings.gradle.kts               # Gradle settings
├── gradle.properties                 # Gradle configuration
└── gradlew                          # Gradle wrapper script
```

## Region Organization

The content is organized by region using a modular file structure:

- **United States** - American cultural guidance (data + scenarios)
- **United Kingdom** - British cultural guidance (data + scenarios)  
- **Central Europe** - Germany, Austria, Switzerland, Liechtenstein (data + scenarios)
- **Scandinavia** - Sweden, Norway, Denmark (placeholder)
- **Finland** - Finnish cultural guidance (placeholder)
- **Baltics** - Estonia, Latvia, Lithuania (placeholder)
- **Balkans** - Serbia, Croatia, Bosnia, Montenegro (placeholder)
- **Greece** - Greek cultural guidance (placeholder)
- **Mediterranean** - Italy, France, Spain, Portugal (placeholder)

Each region has:
- A data file in `scripts/regions/` containing quiz questions
- A scenarios file in `scripts/scenarios/` containing situation-based guidance
- Content is loaded dynamically based on user's region selection

## Prerequisites

To build this Android app, you need:

1. **Android Studio** (Arctic Fox or later recommended)
   - Download from: https://developer.android.com/studio

2. **Android SDK** with:
   - Android SDK Platform 34 (or higher)
   - Android SDK Build-Tools 34.0.0 (or higher)
   - Android SDK Platform-Tools

3. **Java Development Kit (JDK) 17** or higher
   - Included with Android Studio, or download from: https://adoptium.net/

## Building with Android Studio

1. **Open the project**:
   - Launch Android Studio
   - Select "Open an Existing Project"
   - Navigate to the repository root directory
   - Click "OK"

2. **Sync Gradle**:
   - Android Studio will automatically sync Gradle dependencies
   - If not, click "Sync Project with Gradle Files" in the toolbar

3. **Build the APK**:
   - Select "Build" → "Build Bundle(s) / APK(s)" → "Build APK(s)"
   - The APK will be created in `app/build/outputs/apk/debug/`

4. **Install on device/emulator**:
   - Connect an Android device via USB (with USB debugging enabled)
   - OR start an Android emulator
   - Click "Run" button (green play icon) in Android Studio
   - Select your device/emulator from the list

## Building from Command Line

If you have Android SDK installed and configured:

```bash
# Make gradlew executable (on Linux/Mac)
chmod +x gradlew

# Build debug APK
./gradlew assembleDebug

# Build release APK (requires signing configuration)
./gradlew assembleRelease

# Install on connected device
./gradlew installDebug
```

The generated APK will be located at:
```
app/build/outputs/apk/debug/app-debug.apk
```

## Setting Up Android SDK Environment Variables

For command-line builds, set these environment variables:

```bash
# Linux/Mac
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Windows
set ANDROID_HOME=%USERPROFILE%\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
```

## App Configuration

### Minimum SDK Version
- **minSdk**: 24 (Android 7.0 Nougat)
- Supports 94%+ of devices as of 2024

### Target SDK Version
- **targetSdk**: 34 (Android 14)
- Uses latest Android features and optimizations

### WebView Configuration
The MainActivity configures the WebView with:
- JavaScript enabled
- DOM storage enabled (for localStorage support)
- File access enabled (to load assets)
- Back button navigation support

## Troubleshooting

### Build fails with "SDK location not found"
- Create a `local.properties` file in the project root
- Add: `sdk.dir=/path/to/your/Android/Sdk`

### WebView shows blank screen
- Check that assets are properly copied to `app/src/main/assets/`
- Verify file paths in HTML (should use `shared/` prefix for CSS/JS)
- Check Android Logcat for JavaScript errors

### Gradle sync fails
- Ensure you have a stable internet connection
- Clear Gradle cache: `./gradlew --stop` then `./gradlew clean`
- Invalidate caches in Android Studio: File → Invalidate Caches / Restart

## Development Workflow

1. **Edit web content**: Modify files in `app/src/main/assets/`
2. **Edit Android code**: Modify `MainActivity.kt` or other Kotlin files
3. **Rebuild**: Click "Run" or use `./gradlew assembleDebug`
4. **Test**: Install on device/emulator and verify changes

## Adding New Regions

To add a new region (e.g., Scandinavia with full content):

1. **Create data file**: `app/src/main/assets/scripts/regions/scandinavia.data.js`
   - Follow the structure of existing region data files
   - Add quiz questions specific to Scandinavia
   - Register the region using `window.CAM_DATA.registerRegion('scandinavia', scandinaviaData)`

2. **Create scenarios file**: `app/src/main/assets/scripts/scenarios/scandinavia.scenarios.js`
   - Follow the structure of existing scenario files
   - Add workplace, social, healthcare scenarios
   - Register scenarios using `window.CAM_SCENARIOS.registerRegion('scandinavia', scandinaviaScenarios)`

3. **Update index.html**: The region button already exists in the region selector
   - Ensure the button's `data-region` attribute matches the region key

4. **Load the files**: Add script tags in `index.html` (already included for placeholders):
   ```html
   <script src="scripts/regions/scandinavia.data.js" defer></script>
   <script src="scripts/scenarios/scandinavia.scenarios.js" defer></script>
   ```

5. **Test**: Verify the region appears in selector and loads content correctly

## Privacy & Permissions

The app requires only `INTERNET` permission (in AndroidManifest.xml) to allow WebView to function properly. However, all data is stored locally using WebView's localStorage - no network requests are made to external servers.

## License

This project maintains the same license as the main Cultural Assimilation Manual project. See LICENSE file for details.
