## System Requirements, Setup, and Installation Dependencies

## System Requirements  

* Java 8 or higher.
* Gradle 4.6 or higher.
* Android API 19 or higher.
* Android Studio.

## Setup

* Load Android Studio and select Check out project from Version ChatController
* Select GitHub from the dropdown list
* Enter your GitHub credentials, then click Login
* Fill out the repository form and click clone
* Once the project is cloned, navigate to App folder and open the project in
  Android Studio

## Installation dependencies

#### build.gradle dependencies:
<sup>_**Notice, due to use of new gradle import mechanism, using `implementation`, the following imports are needed:**_</sup>

```gradle
implementation "com.bold360ai-sdk.conversation:ui:3.2.3"
implementation "com.bold360ai-sdk.conversation:chatintegration:3.2.3"
implementation "com.bold360ai-sdk.conversation:engine:3.2.3"
implementation "com.bold360ai-sdk.core:sdkcore:3.2.3"
implementation "com.bold360ai-sdk.core:accessibility:3.2.2"

implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.3.20"
implementation "com.makeramen:roundedimageview:2.3.0"
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.1.1"
implementation "com.google.code.gson:gson:2.8.2"
implementation "android.arch.lifecycle:extensions:1.1.1"
```

In the strings.xml file, fill in the required values for account_name, knowledge_base, api_key, and server