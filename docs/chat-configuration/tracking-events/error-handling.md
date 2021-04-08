---
layout: default
title: Error Handling
parent: Tracking Events
grand_parent: Chat Configuration
nav_order: 4
# permalink: /docs/chat-configuration/tracking-events/error-handling
---

# Error Handling 
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview

To get error event firstly register to `ChatControllerDelegate` then implement `didFailWithError` method.

>BLDChatErrorType: To get `BLDChatErrorType` options open `BLDError.h` file.

```swift
func didFailWithError(_ error: BLDError!) {
    switch error.type {
    case GeneralErrorType:
        print("GeneralErrorType")
    case BLDChatErrorTypeFailedToStart:
        print("BLDChatErrorTypeFailedToStart")
    case BLDChatErrorTypeFailedToFinish:
        print("BLDChatErrorTypeFailedToFinish")
    case BLDChatErrorTypeFailedToSubmitForm:
        print("BLDChatErrorTypeFailedToSubmitForm")
    default:
        break
    }
}
```

>Note: `BLDError` contains `NSError` object that reflects the relevant error data.
