---
layout: default
title: Accessibility
parent: FAQ
nav_order: 5
# permalink: /docs/faq/accessibility
---

# Accessibility

The Bold360 iOS SDK offers support of [native accessibility offered by Apple](https://developer.apple.com/accessibility/)

In addition, the SDK supports VoiceOver customization on **Messages sent** & **Message received** events.

```swift
chatController.viewConfiguration.voiceOverConfiguration.messageReceivedText = "custom voiceOver message"
chatController.viewConfiguration.voiceOverConfiguration.messageSentText = "custom voiceOver message"
```

Bold360 iOS SDK 

------
⚜️ The SDK’s accessibility support and behavior varies according to device API level and the accessibility configurations set by the user.

-----