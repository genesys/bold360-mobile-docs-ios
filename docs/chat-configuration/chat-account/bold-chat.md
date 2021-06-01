---
layout: default
title: Bold Live Chat
parent: Chat Account
grand_parent: Chat Configuration
nav_order: 2
---

# Chat with live agent
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
The SDK provides the tools to create and start a chat which will be answered by a live agent.
Both chat parties should be connected during the chat session.
{: .overview}

---

## BoldAccount
Use this account to create live chat sessions with an agent.

With the account you can configure and set chat and user details, set session parameters, like department, preffered language, etc.

### Creating account

```swift
    @IBAction func setupBoldChat(_ sender: Any) {
        let account = LiveAccount()
        account.apiKey = {API_KEY}
        self.chatController = ChatController(account: account)
    }
}
```  
- API_KEY - As was created on the admin console.

### Configure chat session
Chat session and details can be configured by the account.   
User details can be provided for the chat session, and will be available for the receiving agent to view.   



- **extraData** - Detailes about the user and the current chat session. The `extraData` details will be used to fill the prechat form if enabled, and will provide the agent some details about the user.

```swift
account.extraData.name = "{NAME}"
account.extraData.department = "{DEPARTMENT_ID}"

or

account.extraData.extraParams = ["department":"{DEPARTMENT_ID}","name": "{NAME}", "address": "{ADDRESS}"]
```

[see available fields here](https://developer.bold360.com/help/EN/Bold360API/Bold360API/c_bc_sdk_ios_core_integration_chat_session.html)

### Listening to account updates

#### Register to protocol

1 . implement `AccountProvider` 

```swift
class ClassName: AccountProvider
```

2 . Set `AccountProvider`:

```swift
chatController.accountProvider = self
```

#### To add account information

3 . Create `AccountExtraData`:

>Note: `accountExtraData` getter must be implemented 

3.1. For `LiveAccountExtraData`

```swift
extension ClassName: AccountProvider {
    var accountExtraData: AccountExtraData {
        
        let liveAccount = LiveAccountExtraData()
        liveAccount.firstName = "First Name"
        liveAccount.lastName = "Last Name"
        liveAccount.email = "Test@Test.com"
        liveAccount.phone = "5165165"
        
        return liveAccount
    }
}
```

3.2. For `AsyncAccountExtraData`

```swift
extension ClassName: AccountProvider {
    var accountExtraData: AccountExtraData {
        
        let asyncAccount = AsyncAccountExtraData()
        asyncAccount.firstName = "First Name"
        asyncAccount.lastName = "Last Name"
        asyncAccount.email = "Test@Test.com"
        asyncAccount.phone = "5165165"
        
        return asyncAccount
    }
}
```

**Tip**

For the `extraParams` setter:
Existing keys values are being overrided and new keys are created with the custom_ prefix. The default keys are listed in https://developer.bold360.com/help/EN/Bold360API/Bold360API/c_bc_sdk_ios_core_integration_chat_session.html

```swift
extension ClassName: AccountProvider {
    var accountExtraData: AccountExtraData {
        
        let liveAccount = LiveAccountExtraData()
        liveAccount.extraParams = ["first_name":"{FIRST_NAME}","last_name":"{Last_Name}"]
        return liveAccount
    }
}
```
---

### Escalate to Bold live chat from chat with AI
Chat escalation is done when the user selects a [Chat typed channel](https://support.nanorep.com/API-Integrations/Chat-Integration/1009694282/How-to-integrate-LiveChat-Inc-chat.html) configured on the Bold360ai console, from a bot response options.

> If `AccountProvider` implementation was not provided, the chat will start with the created BoldAccount as is.

--- 

## Live Chat continuity
Live chat continuity means to be able to relate chats to the same user. The agent can then see all the user's chats history.

### How to configure
In order to relate chats to the same user and create some kind of continuity of user chats, you need to pass the `visitorId` value that was created on the first chat, for this user.
This value should be configured on the BoldAccount session details.

> Chats history as it displayed on the agent workspace, is not the same as the history displayed on the mobile chat window. The history which displayed on the chat, depends on the hosting App implementation. 


---

## How to


- Create a chat without displaying the prechat form.   
`account.shouldDisablePreChat = true`   
  > Notice: If the prechat form is being skipped, you can still send user details via extraData.
  
