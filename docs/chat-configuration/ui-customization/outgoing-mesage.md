---
layout: default
title: Outgoing message
parent: UI Customization
grand_parent: Chat Configuration 
nav_order: 4
has_toc: false
---

# Outgoing message 
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc .mb-0}
- [Message Injection]({{ '/docs/advanced-topics/messages-injection/#how-to-inject-messages' | relative_url }})

---

## Overview
The display of user side messages.  
Displays textual content only.  
> Html formed message will be displayed with all HTML tags. 
The message content can be, a typed user input, autocomplete suggestion selection, selected option or channel.
The outgoing message component also supports the display of avatar image(not by default), message send status.
The message has no length limitation.
{: .overview}

{: .table-trans}

---

## How to customize

The outgoing message component supports many customizatins.
> To see all supported configuration open `OutgoingConfiguration`.

```swift
lazy var chatConfig = { () -> Bold360AI.ChatConfiguration in
        var config = Bold360AI.ChatConfiguration()
        return config
    }()

    func updateOutgoingConfig() {
        self.chatConfig.outgoingConfig.backgroundColor = UIColor.red
        self.chatConfig.outgoingConfig.textColor = UIColor.yellow
    }
```

### Before & After

| Before                                                                                          | After                                                                                          |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| <img src="../../../../assets/images/outgoing_before.png"  alt="1" width = 300px height = 450px> | <img src="../../../../assets/images/outgoing_after.png"  alt="1" width = 300px height = 450px> |

---

## Message delivery status
When the user sends a message, the message goes through a cycle of states.

* pending
* sentSuccess
* sentFailure

### Customize message Status icons
The message status icons are configurable. 
Icons configuration can be done as follows:

```swift
self.chatConfig.outgoingConfig.pendingIcon = UIImage(systemName: "search")
self.chatConfig.outgoingConfig.sentFailureIcon = UIImage(systemName: "search")
self.chatConfig.outgoingConfig.sentSuccessfullyIcon = UIImage(named:"search")
```

>Note: Hiding the status icons can be done by setting them to nil