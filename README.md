# scanzy-barcodescanner-sample-ionic-capacitor
ionic capacitor sample to use cordova-plugin-scanzy-barcodescanner

## Plugins

The following plugins are included:

- [cordova-plugin-scanzy-barcodescanner](https://github.com/ScanzyLLC/cordova-plugin-scanzy-barcodescanner)
To learn how to install cordova-plugin-scanzy-barcodescanner and use the scan feature, check the above link.

## Development Setup 💻

### Prerequisites

- Install [Node.js](https://nodejs.org) which includes [Node Package Manager](https://www.npmjs.com/get-npm), version 14 or higher
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