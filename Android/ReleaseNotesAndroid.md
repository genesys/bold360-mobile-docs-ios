### Version: 3.2.3

**In this version:**

1. Bold Chat - Support "Skip prechat" and extra data configurations provided by app side.
   https://github.com/bold360ai/GlobalDocs/wiki/Skip-Prechat-Form

2. Bold Chat - Support queue position indication display Queue position UI is both configurable and overridable.
   https://github.com/bold360ai/GlobalDocs/wiki/Bold-chat-queue-position-Android

3. LifeCycle events - There were added 2 new state events.
   - InQueue - raised when chat enters the queue
   - Pending - raised when chat was assigned to an agent but not yet accepted.

4. Base design implementation for "readmore" indication over the bubbles. 
   Support configurations change of the readmore indication.
   - Full article screen redesign, channels redesign.

```gradle
implementation "com.nanorep.core:sdkcore:3.2.3"
implementation "com.nanorep.conversation:engine:3.2.3"
implementation "com.nanorep.conversation:chatintegration:3.2.3"
implementation "com.nanorep.conversation:ui:3.2.3"
implementation "com.nanorep.core:accessibility:3.2.2"
```

---

### Version 3.2.2
Release date March 13, 2019
   
**In this version:**
1. SDK default UI configurations and customisations upgrade.   

2. Typing indication when bold live agent starts typing.   

3. File upload enabling support. You can now integrate your existing file upload mechanism with 
the Bold360ai SDK.   

4. Upgrade to Bot V2 API.   

5. Bugs fixes - among them:
   - big images in responses, handling, prevents crashes and reduces memory usage. 
   - Bot timed feedback not stopping when live chat starts
   - outgoing message status indication updates to "ok" only if was passed successfully to an agent.
   - Adding chat disconnected message when a chat with live agent was disconnected, and can't be reconnected.


```gradle
implementation "com.nanorep.core:sdkcore:3.2.2"
implementation "com.nanorep.conversation:engine:3.2.2"
implementation "com.nanorep.conversation:chatintegration:3.2.2"
implementation "com.nanorep.conversation:ui:3.2.2"
implementation "com.nanorep.core:accessibility:3.2.2"
```

---

### Version 3.2.1

Release date: February 21, 2019

In this version:

1. we have some improvements - requests dispatching mechanism was upgraded and improved.

2. Bugs fixes: app crashes, carousel sizing, some regressions fixes.

3. We've upgraded kotlin coroutines version which is now `1.1.1`

4. We're now using the new gradle import methods,`api` and `implementation`

```gradle
implementation "com.nanorep.core:sdkcore:3.2.1"
implementation "com.nanorep.conversation:engine:3.2.1"
implementation "com.nanorep.conversation:chatintegration:3.2.1"
implementation "com.nanorep.conversation:ui:3.2.1"
implementation "com.nanorep.core:accessibility:3.2.1"
```
---


### Version 3.2.0

Release date: January 31, 2019

This release contains the following Bold360 Android SDK Features:

* Bold live chat with agent:
  - Identify customers and continuation of chats
  - Chat forms display. SDK provides default implementation for the preChat form. SDK enables forms override
    and display by app side. 
  - Localization

* lifecycle state events and notifications subscription.

* Bot chat support:
  - Feedback & Escalation on bot responses.
  - Responses types - Carousel, Options, Channels, videos, etc.

>**Notice.** Current limitations   
Imports are needed to all of listed below:
```gradle
implementation "com.nanorep.conversation:ui:3.2.0"

implementation "com.nanorep.conversation:chatintegration:3.2.0"
implementation "com.nanorep.conversation:engine:3.2.0"
implementation "com.nanorep.core:sdkcore:3.2.0"
implementation "com.nanorep.core:accessibility:3.2.0"
implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.3.20"
implementation "org.jetbrains.anko:anko-commons:0.10.8"

implementation "com.android.support:appcompat-v7:28.0.0"
implementation "com.android.support:design:28.0.0"
implementation "com.android.support.constraint:constraint-layout:1.1.3"
implementation "com.makeramen:roundedimageview:2.3.0"
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:0.27.0-eap13"
implementation "com.google.code.gson:gson:2.8.2"
implementation "android.arch.lifecycle:extensions:1.1.1"
```

 