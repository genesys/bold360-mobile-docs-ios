---
layout: default
title: Chat Transcript
parent: Advanced Topics
nav_order: 2
# permalink: /docs/advanced-topics/history
---

# Chat Transcript
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview
> ##### Transcript management is out of the SDKs scope.  

The SDK enables the host App to provide its own implementation to store, and maintain an updated chat transcript, by listening to triggered events whenever chat elements changes.

The `ChatElementDelegate` enables you to handle the different messages (incomming message, outgoing message...).
The application can then take these messages and perform the desired action.
The delegate mentioned above is only an enabler for app developers to use to implement any desired action on the messages, for example: print to the screen or download.

![alt text](https://logmein-bold-mobile.github.io/bold360-mobile-docs-ios/assets/images/transcript.png)

In the example provided below, the chat messages are collected and then the application can take the file and download it.

**You can checkout an implementation example [here](https://github.com/bold360ai/bold360-mobile-samples-ios/tree/master/TranscriptFetchSample).**

{: .overview}

## How is it done
The hosting App provides a `ChatElementDelegate` implementation, on `ChatController` creation.
The hosting App interacts with this delegate in order to be notified when message was attached to the chat.

- Notifies of an addition of chat element to the chat.  
Calling `ChatEleChatElementDelegatementListener.didReceive`

## Basic Implementation

* **`ChatController`** - Use this class to set `ChatElementDelegate`.

### Register To Delegate
```swift
override func viewDidLoad() {
    controller.chatElementDelegate = self
}
```

### Implement ChatElementDelegate
```swift
extension TranscriptDemoViewController: ChatElementDelegate {
    func didReceive(_ item: StorableChatElement!) {
        print("receive")
    }
}
```























