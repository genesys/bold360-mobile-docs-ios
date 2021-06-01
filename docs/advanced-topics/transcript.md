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

The SDK enables the host App to provide its own implementation, and maintain an updated chat transcript, by listening to triggered events whenever chat elements changes.

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























