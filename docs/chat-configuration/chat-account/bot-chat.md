---
layout: default
title: AI Chat
parent: Chat Account
grand_parent: Chat Configuration
nav_order: 1
---

# Chat with AI <sup>chatbot</sup>
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
The SDKs chat with AI bridges your APP with the conversational platform of Bold360 ai. Provides a messaging-based user experience in which the Bold360 AI engine gathers information from the customer in a way similar to what a human agent would do in a regular conversation. Based on customer input and the engine's search capabilities, the Conversational Bot provides the customer relevant information.
{: .overview}

The main key for creating a chat is the account.

## BotAccount
Use this account to create chat sessions with AI.

With the account you can configure the chatbot that will be created, provide extra details when needed and define other configurations for the chat session.

### Creating account

```swift
extension ViewController {
    @IBAction func setupBotChat(_ sender: Any) {
        let account = self.createAccount()
        self.chatController = ChatController(account: account)
    }
    
    func createAccount() -> BotAccount {
        let account = BotAccount()
        account.apiKey = "API_KEY"
        account.account = "ACCOUNT_NAME"
        account.knowledgeBase = "KNOWLEDGE_BASE"
        return account;
    }
}
``` 

- API_KEY - As was configured to your account.
- ACCOUNT_NAME <sub>[mandatory]</sub> - As was configured to your account.
- KNOWLEDGE_BASE <sub>[mandatory]</sub> - The knowledge base that should be used for this chat.
- SERVER <sub>[mandatory]</sub> - As was configured to your account.

### Configure Contexts
If your account supports context based answers, you may want to configure those on your account to be used during the chat.

Context is a key-value parameter, so when you create the `BotAccount` object you can set NSDictionary which contains the related context.

```swift
botAccount.context = ["someKey": "someValue"]
```
#### Configure Welcome Message Id
When you create the `BotAccount` object you can set welcome message id.

```swift
botAccount.welcomeMessageId = "{WELCOME_MESSAGE_ID}"
```

>To Disable Welcome Message 

```swift
botAccount.welcomeMessageId = WelcomeMsgIdNone
```

#### Configure Initialization Entities
Entities is a feature of Bold360 that enables querying data from external sources in a conversational format.
If a piece of info is missing from a bot query - the bot asks for the missing data to be able to answer.
The application can populate the entity input values that are available - not to let the bot ask for input params that are "obviously available."

``` swift
// Creating Initialization Entities:
botAccount.initializationEntities = ["someKey1": "someValue1", "someKey1": "someValue2"]
```

## AI Chat continuity
Chatbot continuity has no special meaning as in live chat. 
Previous conversationId can be provided, for the initiated chat session, and if valid will be used, otherwise a new chat session will be created.

This section describes the different operations you can perform with the continuity service.

* **Update** - updates continuity item 
* **Fetch** - fetches parameters stored in update method.
  > For Example: on start chat can store chatID.

### Known Limitations

* Continuity persistent storage is currently not provided by the SDK, <br />
  it should be done by the using app. 

### Overview
When implementing the `ContinuityProvider`, on chat start the `fetchContinuity` method will be called.
Using `updateContinuityInfo` method can be used to store or expose data of each chat. e.g. Retrieving the `chatID` of the previews chat.
 
#### Simple Flow  

### Usage  

#### General API Notes  

The following classes/interfaces are the public API for continuity management:

* **`ChatController`** - Use this class to set `ContinuityProvider`.

#### Basic Implementation

1 . Create conversation view (via `ChatController`)

2 . Conform to & Set `ContinuityProvider`
 
```swift
controller.continuityProvider = self
```

3 . Implement `ContinuityProvider` Functions

```swift
func updateContinuityInfo(_ params: [String : String]!) {
       // Permanent storage for the values
        params.forEach { (key, value) in
            if (key == "ChatID" || key == "VisitorID" || key == "UserID") {
                // store the value if you want to continue with the same session
            }
           UserDefaults.standard.set(value, forKey: key)
        }
        UserDefaults.standard.synchronize()
}
    
func fetchContinuity(forKey key: String!, handler: ((String?) -> Void)!) {   
     // Extract the values from the permanent storage
     handler(UserDefaults.standard.value(forKey: key) as? String)
}
``` 
4 . Present Chat viewController.

