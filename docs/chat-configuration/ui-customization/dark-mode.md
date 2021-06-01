---
layout: default
title: Dark Mode
parent: UI Customization
grand_parent: Chat Configuration 
# permalink: /docs/chat-configuration/ui-customization/dark-mode
nav_order: 11
---

# Dark mode Support 

### How to apply Dark mode to your Chat
In order to apply dark theme to your chat, you can define overriding and dark mode resources additions, that will replace the resources used by the SDK.

For more information use [iOS Dev center](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode)

| Before                                                                                          | After                                                                                          |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| <img src="../../../../assets/images/darkcolor_before.png"  alt="1" width = 300px height = 450px> | <img src="../../../../assets/images/darkcolor_after.png"  alt="1" width = 300px height = 450px> |


## Avatar Dynamic Image Suuport

In order to apply dynamic image on avatar

#### 1. Add dynamic image on `Assets.xcassets`.
#### 2. Set the dynamic image name under `{SOME_CHAT_ELEMENT_CONFIG}.avatrImageName`.

```swift
config.incomingBotConfig.avatrImageName = "{IMAGE_NAME}"
```


## Known Limitations

* Only Chat Screen supports fully dark mode.
* Dynamic images (light/ dark mode) are not supported on chat screen (except for the avatar image).
