---
layout: default
title: Accessibility
parent: FAQ
nav_order: 5
# permalink: /docs/faq/accessibility
---

# Accessibility

The Bold360 iOS SDK offers support of [native accessibility offered by Apple](https://developer.apple.com/accessibility/)

Additional accessibility capabilities added under the SDK:
### VoiceOver support
-   Message sent event customization
    ```swift
    chatController.viewConfiguration.voiceOverConfiguration.messageSentText = "custom voiceOver message"
    ```
-   Message received event customization
    ```swift
    chatController.viewConfiguration.voiceOverConfiguration.messageReceivedText = "custom voiceOver message"
    ```

------
⚜️ The SDK’s accessibility support and behavior varies according to the device's iOS version, and accessibility configurations.

-----
