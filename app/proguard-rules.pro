# Cultural Assimilation Manual — release ProGuard / R8 rules

# Preserve line numbers for crash reports
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# Kotlin / AndroidX essentials
-dontwarn kotlin.**
-dontwarn kotlinx.**

# WebView: keep MainActivity and any JS bridges if added later
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

-keep class com.culturalassimilation.manual.MainActivity { *; }

# Material / AppCompat reflection used at runtime
-keep class com.google.android.material.** { *; }
-dontwarn com.google.android.material.**
