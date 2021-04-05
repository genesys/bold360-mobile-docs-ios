---
layout: default
title: Chat Configuration
has_children: true
permalink: /docs/chat-configuration
nav_order: 3
---

# Chat Configuration
{: .no_toc }

---

## Overview
Chat features are configured by the various consoles available for every chat type, and by the SDKs pre defined available options.  
Chat configurations can be controlled by the embbeding App, by using the `ChatConfiguration` object called as `viewConfiguration` on the `ChatController`.
{: .overview}

```swift
var chatConfig = Bold360AI.ChatConfiguration()
/* do some custom change */
chatController.viewConfiguration = chatConfig
```