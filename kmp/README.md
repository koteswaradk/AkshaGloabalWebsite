# Aksha Globals - Kotlin Multiplatform (KMP) Application

This is the Kotlin Multiplatform (Compose Multiplatform) implementation of the **Aksha Globals** ecosystem, sharing 100% of business logic, models, state, and UI across Android, iOS, Desktop (macOS, Windows, Linux), and WebAssembly.

---

## 📱 Project Structure

```
kmp/
├── gradle/
│   └── libs.versions.toml             # Modern version catalog (Kotlin 2.0.20, Compose 1.6.11)
├── settings.gradle.kts
├── build.gradle.kts
└── composeApp/
    ├── build.gradle.kts
    └── src/
        ├── commonMain/kotlin/com/akshaglobals/app/
        │   ├── App.kt                 # Adaptive Scaffold, navigation & all screens
        │   ├── data/
        │   │   ├── Models.kt          # Product, Course, BlogPost, StudioVideo
        │   │   └── AkshaRepository.kt # Shared repository with production data
        │   └── theme/
        │       ├── Color.kt           # M3 Color palette (Primary #006874, Container #97F0FF)
        │       └── Theme.kt           # Material 3 light/dark theme providers
        ├── androidMain/               # Native Android integration & Activity
        ├── iosMain/                   # iOS ComposeUIViewController export
        └── desktopMain/               # Desktop standalone JVM application runner
```

---

## 🚀 How to Run

### 1. Android
```bash
./gradlew :composeApp:assembleDebug
# Or open in Android Studio and click Run on an emulator or physical device.
```

### 2. Desktop (macOS, Linux, Windows)
```bash
./gradlew :composeApp:run
```

### 3. iOS
Open `iosApp` in Xcode or run via Android Studio with the KMP plugin:
```bash
./gradlew :composeApp:linkDebugFrameworkIosSimulatorArm64
```

---

## 🛠️ Tech Stack
- **Kotlin**: 2.0.20
- **Compose Multiplatform**: 1.6.11
- **Design System**: Material 3 Expressive Dark & Light themes
- **Networking & Serialization**: Ktor 2.3 & kotlinx.serialization
- **Architecture**: Single-codebase Multiplatform UI with reactive state flow
