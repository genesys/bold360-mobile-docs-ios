---
layout: default
title: Chat History
parent: Advanced Topics
nav_order: 1
# permalink: /docs/advanced-topics/history
---

# Chat History
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview
> ##### History management is out of the SDKs scope.  

The SDK enables the Host app to provide its own implementation, and maintain an updated chat history, by listening to triggered events whenever chat elements changes.

**You can checkout an implementation example [here](https://github.com/bold360ai/bold360-mobile-samples-ios/blob/master/BasicSample/BasicSample/ChatViewControllers/HistoryDemoViewController.swift).**

{: .overview}

## How is it done
The hosting App provides a `ChatElementDelegate` implementation, on ChatController creation. This delegate should be fully implemented in order to be notified of all chat changes.   
The SDK interacts with this delegate in order to fetch chat history on chat load, and to update history records, when chat elements were changed.


![]({{'assets/images/history_SD.png' | relative_url}})

### ChatElementDelegate overview
The `ChatElementDelegate` will be used for the following operations.
- Fetch chat elements from stored history on chat load.   
Calling `ChatElementDelegate.fetch`

- Notifies of an addition of chat element to the chat.  
Calling `ChatEleChatElementDelegatementListener.didReceive`

- Notifies of removal of stored element from the chat.   
Calling `ChatElementDelegate.didRemoveChatElement`

- Notifies of an update on chat element data.  
Calling `ChatElementDelegate.didUpdateChatElement`

- Notifies of an update on chat element feedabck.  
Calling `ChatElementDelegate.didUpdateFeedback`

## Basic Implementation
The following classes/interfaces are the public API for history managment:

* **`ChatController`** - Use this class to set `ChatElementDelegate`.
*  Implement **`StorableChatElement`** to have your own storable chat element. (**optional**) 

### Register To Delegate
```swift
override func viewDidLoad() {
    controller.chatElementDelegate = self
}
```

### Implement ChatElementDelegate
```swift
extension HistoryDemoViewController: ChatControllerDelegate {
    func fetch(_ from: Int, handler: (([Any]?) -> Void)!) {
        print("fetch")
    }

    func didReceive(_ item: StorableChatElement!) {
        print("receive")
    }

    func didRemoveChatElement(_ timestampId: TimeInterval) {
        print("remove")
    }

    func didUpdateChatElement(_ timestampId: TimeInterval, newTimestamp: TimeInterval, status: StatementStatus) {
        print("update")
    }

    func didUpdateFeedback(_ articleId: String!, feedbackState: FeedbackStatus) {
        print("feedback")
    }
}
```























