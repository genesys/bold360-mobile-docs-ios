---
layout: default
title: Setting Custom Font
parent: UI Customization
grand_parent: Chat Configuration 

# permalink: /docs/chat-configuration/ui-customization/user-input-field

nav_order: 12
---

# User Input Field

{: .no_toc }

## Table of contents

{: .no_toc .text-delta }

- TOC
{:toc .mb-0}

---

## Overview

Add a custom font to your app and use it for chat UI under bold360 SDK.


## Set Custom Font

To set custom font first make sure to add the relevant file to project, then:

```swift
// For example our custom font is: `{CUSTOM_FONT_NAME}.ttf`
let font = CustomFont()
font.fontFileName = "{CUSTOM_FONT_NAME}.ttf"
font.font = UIFont(name: "{CUSTOM_FONT_NAME}", size: 15)
let font1 = CustomFont()
font1.fontFileName = "{CUSTOM_FONT_NAME}.otf"
font1.font = UIFont(name: "{CUSTOM_FONT_NAME}", size: 20)
self.chatController.viewConfiguration.outgoingConfig.customFont = font
self.chatController.viewConfiguration.incomingBotConfig.customFont = font1
self.chatController.viewConfiguration.incomingLiveConfig.customFont = font
```

>Note: Currently there is a known limitation for setting the customFont for the chatController.viewConfiguration.multipleSelectionConfiguration .persistentOptionConfiguration and .titleConfiguration
A possible workaround is to use chatController.viewConfiguration.incomingBotConfig .persistentOptionConfig and .titleConfig

>Note: apple documentation for adding a custom font to a project: https://developer.apple.com/documentation/uikit/text_display_and_fonts/adding_a_custom_font_to_your_app


  

  
