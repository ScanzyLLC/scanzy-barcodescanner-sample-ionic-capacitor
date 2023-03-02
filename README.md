# scanzy-barcodescanner-sample-ionic-capacitor
ionic capacitor sample to use cordova-plugin-scanzy-barcodescanner

## Plugins

The following plugins are included:

- [cordova-plugin-scanzy-barcodescanner](https://www.npmjs.com/package/cordova-plugin-scanzy-barcodescanner)
To learn how to install cordova-plugin-scanzy-barcodescanner and use the scan feature, check our [official documentation](https://developer.scanzy.com)

## Development Setup 💻

### Prerequisites

- Install [Node.js v14](https://nodejs.org) or higher, with [Node Package Manager](https://www.npmjs.com/get-npm) v7.24 or higher
- Android development: Install [Android Studio](https://developer.android.com/studio)
- iOS development: Install [XCode](https://apps.apple.com/de/app/xcode/id497799835?mt=12)
- This project uses [Ionic](https://ionicframework.com/) as app development platform and the [Ionic CLI](https://ionicframework.com/docs/cli).

### Getting Started

Clone this repository:

```
git clone https://github.com/ScanzyLLC/scanzy-barcodescanner-sample-ionic-capacitor.git
```

Change to the root directory of the project:

```
cd scanzy-barcodescanner-sample-ionic-capacitor
```

Install all dependencies:

```
npm i
```

Add native platforms to the project:

```
ionic capacitor add ios
ionic capacitor add android
```

Build the web assets:

```
ionic build
```

Copy the web directory to native app:

```
ionic capacitor sync ios
ionic capacitor sync android
```

Launch the native app:

```
ionic capacitor run ios
ionic capacitor run android
```

For IOS project, in order to get camera permission, please add below configs to the Info.plist of the Project Targets.

```xml
<key>NSCameraUsageDescription</key>
<string>camera description.</string>
```

For Android project, you can edit the Android SDK version in the Variables.gradle under Android folder.
If you meet with error 'Manifest merger failed : Apps targeting Android 12 and higher are required to specify an explicit value for `android:exported` when the corresponding component has an intent filter defined.', please add `android:exported="true"` to the scanzy activity in the AndroidManifest.xml.


Add Splash Screens and Icons:
First, Place one icon and one splash screen file in a top-level resources folder within your project, like so:
```
resources/
├── icon.png
└── splash.png
```
Next, run the following to generate all images then copy them into the native projects:
```
npm install -g cordova-res
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```