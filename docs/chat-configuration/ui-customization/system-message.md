---
layout: default
title: System Message
parent: UI Customization
grand_parent: Chat Configuration 
# permalink: /docs/chat-configuration/ui-customization/system-message
nav_order: 5
---

# System Messages
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview 
System originated messages, used for indicating chat state,notify of errors, providing the user with instructions, etc.   
There are fixed messages and removable messages.
### Fixed messages
Appears in the chat and will stay there, Those messages are also passed on the `ChatElementDelegate` for history preservation.

### Removable messages
Messages that are displyed in the chat for a period of time, until a fulfillment of some condition is met, usually during specific chat state), than automatically are removed. Those messages are not passed to the `ChatElementDelegate` and will not appear when chat gets restored from history.      
> e.g., The `Wait` message that appears to the user while he waits for his live chat to accepted by an agent. 

## Injecting System messages
The hosting app can inject system messages after the chat was created, using [Message Injection](../../../../docs/advanced-topics/messages-injection)

## Customization
### Configuration   
The SDK provides a configurable _system message_ implementation.
The default configuration can be changed via `ChatController.viewConfiguration.systemMessageConfig`

``` swift
  let systemMessageConfig = chatController.viewConfiguration.systemMessageConfig!
  systemMessageConfig.backgroundColor = UIColor.yellow
  systemMessageConfig.textColor = UIColor.blue
  systemMessageConfig.customFont = CustomFont(font: UIFont.italicSystemFont(ofSize: 30))
  systemMessageConfig.borderRadius = BorderRadius(top: Corners(left: 0, right: 0 ), bottom: Corners(left: 0, right: 0 ))
  ```

  ---

### Before & After

| Before                                                                                           | After                                                                                           |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| <img src="../../../../assets/images/system_message_before.png"  alt="1" width = 200px height = 350px> | <img src="../../../../assets/images/system_message_after.png"  alt="1" width = 200px height = 350px> |

  ---


## Known Issues

1. The ability to change the background image for the systemMessage exists but does nothing:

``` swift
chatController.viewConfiguration.systemMessageConfig.backgroundImage = UIImage(systemName: "search")
```

