---
layout: default
title: Chat Availability
parent: Tracking Events
grand_parent: Chat Configuration
nav_order: 2
# permalink: /docs/chat-configuration/tracking-events/chat-availability
---

# Chat Availability
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
Chat considered available, when the chat can be answered by a live agent.
The availability of the chat can be checked any time, without creating `ChatController` instance.

## Check chat availability

### 1. Create `Account`.

```swift
// for example create live account.
let liveAccount = LiveAccount()
```

>Note: To check availability for specific **department id** do as below on `LiveAccount`:
 
```swift
liveAccount.extraData?.departmentId = "{DEPARTMENT_ID}"
```

### 2. Call `checkAvailability` under `ChatController`.
```swift
ChatController.checkAvailability(self.createAccount()) { (availabilityResult) in
   // Validate no error on result.error
   // Check isAvailable with result.isAvailable
   // If not available check result.reason
}
```

{: .mt-5}
> ❗ In order to get availability status of the different departments in your organization, [make sure your api access key is not configured]({{'/assets/images/bold-console-apikey.png' | relative_url}}) to work with a specific department.

---

### Available departments

>Chat Departments Fetch
The departments list can be fetched any time, without creating `ChatController` instance.

## Fetch Departments

### 1. Create `Account`.

```swift
// for example create live account.
let liveAccount = LiveAccount()
```

### 2. Call `fetchDepartments` under `ChatController`.
```swift
ChatController.fetchDepartments(self.createAccount()) { result in
    if let departments = result?.departments {
        self.departments = departments
    }
}
```