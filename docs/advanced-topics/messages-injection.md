---
layout: default
title: Messages Injection
parent: Advanced Topics
nav_order: 4
# permalink: /docs/advanced-topics/messages-injection
---

# Messages Injection
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc .mb-0}
- [Welcome message]({{'/docs/chat-configuration/extra/welcome-message' | relative_url}})
- [FAQs message]({{'/docs/chat-configuration/extra/faqs-message' | relative_url}})

---


## Overview
The hosting app has the ability to control and engage with the messages that are being inserted to the chat.  
Messages of vary types can be injected into the chat, while some may be configured to be injected by the SDK.  
{: .overview}

## Injecting chat messages
The SDK exposes an API to enable injection of messages into the chat by the hosting app.  
Messages can be injected to the chat, once the chat was [**Accepted**]({{'/docs/chat-configuration/tracking-events/chat-lifecycle#accepted' | relative_url}}). 

### How to inject messages:

1. Implement `didUpdateState` under `ChatControllerDelegate`.
2. On chat state `accepted` under `didUpdateState` Create ProactiveChatElement.
3. `ProactiveChatElement` creation.

    ```swift
    let element = ProactiveChatElement(text: "{YOUR-TEXT}", type: ChatElementType.{CHAT-ELEMENT-TYPE})

    /* {CHAT-ELEMENT-TYPE}
    OutgoingElement, IncomingBotElement, IncomingLiveElement, SystemMessageElement
    */
    ```

4. Decide if the element should be posted.

    Under `ProactiveChatElement` set boolean

    ```swift
    element.withPost = {SHOULD-BE-POSTED}
    ```

    >withPost:

    >if `false` - Simply present the element.

    >if `true` - Present the element, send it and get the response from the server.

5. Message injection.

    Call `post` under `chatController.proactiveChatElementHandler`

    ```swift
    self.chatController.proactiveChatElementHandler.post(element)
    ```

6. Final code.

```swift
extension BotDemoViewController: ChatControllerDelegate {
    func didUpdateState(_ event: ChatStateEvent!) {
        switch event.state {
        case .preparing:
            print("ChatPreparing")
            break
        case .started:
            print("ChatStarted")
        case .accepted:
            print("ChatAccepted")
             let element = ProactiveChatElement(text:"{YOUR-Text}", type: ChatElementType.{TYPE}) 
             element.withPost = {SHOULD-BE-POSTED}          
             self.chatController.proactiveChatElementHandler.post(element)
            break
        case .ending:
            print("ChatEnding")
            break
        case .ended:
            print("ChatEnded")
            break
        case .unavailable:
            print("ChatUnavailable")
            break
        case .pending:
            print("ChatPending")
            break
        case .inQueue:
            print("ChatInQueue")
            break
        case .didChangeLanguage:
            print("LanguageChanged")
            break
        @unknown default:
            break
        }
    }
}
```