---
layout: default
title: Chat Lifecycle
parent: Tracking Events
grand_parent: Chat Configuration
nav_order: 1
# permalink: /docs/chat-configuration/tracking-events/chat-lifecycle
---

# Chat Lifecycle 
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview
Through chat progress, it can be in various states, each has it's own meaning. The hosting app can react to chat states and control it's flow, by listening to chat states changes.   
{: .overview}

To get lifecycle events firstly register to `ChatControllerDelegate` under `ChatController` then, implement `didUpdateState` method.

>ChatStateEvent: To get `ChatStateEvent` options open `ChatStateEvent.h` file.

```swift
    func didUpdateState(_ event: ChatStateEvent!) {
        switch event.state {
        case .preparing:
            print("ChatPreparing")
            break
        case .started:
            print("ChatStarted")
            break
        case .accepted:
            print("ChatAccepted")
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
            print("didChangeLanguage")
            break
        @unknown default:
            break
        }
    }
```

---

## Lifecycle Events

| Name            | Description                                                                                                                        |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------|
| ChatPreparing   | Initial state, once the chat creation has started.                                                                                 |
| ChatStarted     | When the chat was successfully started (not yet accepted by agent). At this point the User can start posting messages on the chat. |
| ChatPending     | User chat was assigned to an agent, and waiting for an agent acceptance.                                                           |
| ChatInQueue     | User chat is in the waiting queue, and waiting to be assigned to an agent. In this event the position in the queue is passed.      |
| ChatAccepted    | Agent accepted & Live chat started.                                                                                                |
| ChatEnding      | Live Chat ending.                                                                                                                  |
| ChatEnded       | Live Chat ended.                                                                                                                   |
| ChatUnavailable | Live Chat unavailable.                                                                                                             |
| ChangeLanguage  | Chat Change Language.                                                                                                              |

---

### Unavailable Case

>Note: For `unavailable` state you will get `ChatStateUnavailableEvent`

On this case you should use casting to get from `ChatStateEvent` the `ChatStateUnavailableEvent`.

## Lifecycle Methods

### End Chat

To end the current chat you can call the `endChat` method under `ChatController`.

>Note: `endChat` will end current chat only, means, if you started with bot and then moved to live agent when calling `endChat` only the chat with live agent will be ended.

>swift

```swift
self.chatController.endChat()
```

### Terminate Chat

To terminate the chat you can call the `terminate` method under `ChatController`.

>Note: `terminate` will terminate whole chat controller.

>swift

```swift
self.chatController.terminate()
```