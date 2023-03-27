# scanzy-barcodescanner-sample-ionic-capacitor
Ionic capacitor sample to use cordova-plugin-scanzy-barcodescanner

## Plugins

The following plugins are included:

- [cordova-plugin-scanzy-barcodescanner](https://www.npmjs.com/package/cordova-plugin-scanzy-barcodescanner)
To learn how to install cordova-plugin-scanzy-barcodescanner and use the scan feature, check our [official documentation](https://scanzy.com/ionic)

## Development Setup 💻

### Prerequisites

- Install [Node.js v14](https://nodejs.org) or higher, with [Node Package Manager](https://www.npmjs.com/get-npm) v7.24 or higher
- Android development: Install [Android Studio](https://developer.android.com/studio)
- iOS development: Install [XCode](https://apps.apple.com/de/app/xcode/id497799835?mt=12)
- This project uses [Ionic](https://ionicframework.com/) as an app development platform and the [Ionic CLI](https://ionicframework.com/docs/cli).

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

Copy the web directory to the native app:

```
ionic capacitor sync ios
ionic capacitor sync android
```

#### For an IOS project, run the app using Xcode:
* Open the workspace file ScanzyBarcodeScannerSDKSampleReactNative.xcworkspace (not .xcodeproj) from the ios directory in Xcode.
* Adjust Provisioning and Signing settings.
* In order to get camera permission, please add the below configs to the Info.plist of the Project Targets.
 ```xml
<key>NSCameraUsageDescription</key>
<string>camera description.</string>
```
* If you experience the below error when running 'ionic capacitor add ios', add `use_frameworks! :linkage => :static` to the Podfile in the /ios/App folder, and then run `pod install`.
```
[!] The 'Pods-App' target has transitive dependencies that include statically linked binaries: (/Users/xxx/xxx/scanzy-barcodescanner-sample-ionic-capacitor/ios/App/Pods/ScanzyBarcodeScannerSDK/ScanzyBarcodeScannerSDK.xcframework)
```
* Choose one simulator or local device to run the app.

#### For an Android project, run the app using Android Studio:
* Open the project located in platforms/android using Android Studio.
* Select File --> Sync Project with Gradle Files.
* If you experience an sdk version error, you can edit the Android SDK version in the variables.gradle.
* If you experience the below error, add `android:exported="true"` to the scanzy activity in AndroidManifest.xml.
```
Manifest merger failed : Apps targeting Android 12 and higher are required to specify an explicit value for `android:exported` when the corresponding component has an intent filter defined.
```

#### How do I customize Splash Screens and Icons?
First, place one icon and one splash screen file in a top-level resources folder within your project, like so:
```
resources/
├── icon.png
└── splash.png
```
Next, run the following to generate all images, then copy them into the native projects:
```
npm install -g cordova-res
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```
