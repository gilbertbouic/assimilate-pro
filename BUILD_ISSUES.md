# Build Issues and Faults

## Issue #1: Google Maven Repository Access Blocked

### Problem
The Android project cannot build because the build environment blocks access to Google's Maven repository (`dl.google.com`).

### Error Message
```
Could not resolve com.android.tools.build:gradle:8.2.0.
> Could not get resource 'https://dl.google.com/dl/android/maven2/com/android/tools/build/gradle/8.2.0/gradle-8.2.0.pom'.
   > Could not GET 'https://dl.google.com/dl/android/maven2/com/android/tools/build/gradle/8.2.0/gradle-8.2.0.pom'.
      > dl.google.com: No address associated with hostname
```

### Root Cause
DNS resolution for `dl.google.com` is being refused/blocked in the build environment:
- DNS queries to multiple DNS servers (system DNS, Google 8.8.8.8, Cloudflare 1.1.1.1) all return REFUSED status
- This prevents Gradle from downloading the Android Gradle Plugin and other Android dependencies from Google's Maven repository

### Diagnosis Steps Taken
1. ✅ Verified Gradle configuration is correct
2. ✅ Changed from plugins DSL to buildscript block (more reliable syntax)
3. ✅ Confirmed Google Maven repository URL in settings.gradle.kts
4. ✅ Tested DNS resolution - all queries for dl.google.com are REFUSED
5. ✅ Tested alternative DNS servers - all blocked
6. ✅ Confirmed other Maven repositories (Maven Central, Gradle Plugin Portal) are accessible

### Impact
- Android APK cannot be built
- The web application files are unaffected and can still be served statically
- Only Android-specific build tasks are broken

## Potential Solutions

### Option 1: Fix Network/DNS Configuration (Recommended)
**For CI/CD environments:**
1. Configure DNS to allow resolution of `dl.google.com`
2. Ensure network policies allow HTTPS access to Google's Maven repository
3. If using a proxy, configure Gradle to use it:
   ```properties
   # gradle.properties
   systemProp.http.proxyHost=proxy.example.com
   systemProp.http.proxyPort=8080
   systemProp.https.proxyHost=proxy.example.com
   systemProp.https.proxyPort=8080
   ```

### Option 2: Use a Maven Repository Mirror
Configure a mirror for Google's Maven repository:
```kotlin
// settings.gradle.kts
pluginManagement {
    repositories {
        maven {
            url = uri("https://YOUR-MAVEN-MIRROR/android-maven2/")
        }
        mavenCentral()
        gradlePluginPortal()
    }
}
```

### Option 3: Use Pre-downloaded Dependencies
1. Download the required artifacts on a machine with internet access
2. Set up a local Maven repository
3. Configure Gradle to use the local repository

### Option 4: Build on a Different Environment
- Build the Android APK on a local machine or different CI environment with unrestricted internet access
- Use GitHub Actions with standard runners (not the current restricted environment)
- Use Android Studio locally to build the APK

### Option 5: Serve Only the Web Application
Since this is a hybrid web/Android project:
- The core web application (HTML, CSS, JS files) can be served without building the Android app
- Deploy the web assets directly without running Gradle build
- Build the Android APK separately when needed

## Files Changed to Fix Build Configuration

### 1. build.gradle.kts
Changed from plugins DSL to buildscript block for better compatibility:
```kotlin
buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:8.2.0")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.9.20")
    }
}
```

This is the correct syntax and should work once network access is restored.

## Verification Steps

Once network access to `dl.google.com` is restored:

1. Verify DNS resolution:
   ```bash
   nslookup dl.google.com
   ```

2. Test HTTPS access:
   ```bash
   curl -I https://dl.google.com/dl/android/maven2/
   ```

3. Build the project:
   ```bash
   ./gradlew build
   ```

## Additional Notes

- The web application itself is functional and doesn't require the Android build
- This is purely an infrastructure/network issue, not a code issue
- The project configuration is correct for a standard Android build environment
