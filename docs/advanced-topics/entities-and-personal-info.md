---
layout: default
title: Chat Entities and Personal information
parent: Advanced Topics
nav_order: 9
# permalink: /docs/advanced-topics/entities-and-personal-info
---

# Chat Entities and Personal information {{site.data.vars.need-work}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc .mb-0}

---

## Overview
The SDK provides the bridge to pass user specific information to the BOT on chat start and while processing responses to user queries, which demands more details from the user, during the chat.
{: .overview}

There are 2 types of personal information

<a id="initentities"/>
## Initialization entities

Predefined data values that can be provided for the whole chat session and are not being changed dynamically (exp: ids, keys, etc).

### How To use

``` swift
// Creating Initialization Entities:
botAccount.initializationEntities = ["someKey1": "someValue1", "someKey1": "someValue2"]
`````

## Missing entities for personalized responses

These entities are use to dynamically retrieve details from the user, for personalizing the response to the user query.
Articles that are configured with entities, contains entities tags within the response which are recognized by the SDK as the missing information needed to properly display the article as intended. 
> Refer to [How to use Data Entities](https://support.bold360.com/bold360/help/how-to-use-data-entities) for more information.

- **Missing entites**:    
  Details that the user is asked to provide before the requested data can be supplied.   
  The provider which assigned to the article identifies which extra details are needed in order to get a response to a user query. According to the entities that were set to the account, the App is asked to provide thoes details by calling the `NRChatEngineDelegate.shouldHandleMissingEntities`.   
  ##### Missing entities can be, names, account numbers, etc.

- **Personal information**:   
  Extra user personal info, that may be requested from the App by the SDK regarding a specific entity, in order to provide a response.
  Needed once the BE provides a response which contains, info needed place holders. The App provided personal info is then used to replace those placeholders.
  ##### Personal information can be, account balance, passport number, etc.

--- 

  ![provide missing entites / personal info]({{'/assets/diagrams/personalInfo.png' | relative_url}})
  {: .image-70}

---

### How To use

1. Create the missing entities array

    ```swift
    account.entities = ["EntityKey1", "EntityKey2"]
    ```


2. Set the delegate in the ChatController

``` swift
class ViewController: UIViewController {
  override func viewDidLoad() {
        super.viewDidLoad()
        account.entities = ["EntityKey1", "EntityKey2"]
        chatController = ChatController(account: account)
        // continuityProvider should be disabled
        // chatController.continuityProvider = self
        NanoRep.shared()?.chatDelegate = self
        chatController.delegate = self
    }
}
`````

2. Implement `NRChatEngineDelegate`.
``` swift
extension ViewController: NRChatEngineDelegate {
    func shouldHandleMissingEntities(_ response: NRConversationalResponse, missingEntitiesHandler handler: @escaping (NRConversationMissingEntity) -> Void) {
        if let answer = NRConversationMissingEntity(statement: response.statement) {
            response.missingEntities?.forEach({ (missingEntity) in
                switch missingEntity {
                case "EntityKey1":
                    let entity = NREntity()
                    entity.lifecycle = EntityLifecyclePersistent
                    entity.type = EntityTypeNumber
                    entity.value = "3"
                    entity.confidence = 1
                    entity.kind = "EntityKey1"
                    answer.add(entity)
                    for i in 0...2 {
                        let property = Property(kind: "CREDIT_CARD", type: EntityTypeText, value: "112233\(i)", name: "112233\(i)")
                        property?.add(Property(kind: "TYPE", type: EntityTypeText, value: "Test", name: "112233\(i)"))
                        property?.add(Property(kind: "ID", type: EntityTypeText, value: "112233\(i)", name: "112233\(i)"))
                        property?.add(Property(kind: "CURRENCY", type: EntityTypeText, value: "$", name: "$"))
                        entity.add(property)
                    }
                    break
                case "EntityKey2":
                    let entity = NREntity()
                    entity.lifecycle = EntityLifecyclePersistent
                    entity.type = EntityTypeNumber
                    entity.value = "3"
                    entity.confidence = 1
                    entity.kind = "EntityKey2"
                    answer.add(entity)
                    for i in 0...2 {
                        let property = Property(kind: "ACCOUNT", type: EntityTypeText, value: "112233\(i)", name: "112233\(i)")
                        property?.add(Property(kind: "ID", type: EntityTypeText, value: "112233\(i)", name: nil))
                        property?.add(Property(kind: "TYPE", type: EntityTypeText, value: "PRIVATE", name: nil))
                        property?.add(Property(kind: "CURRENCY", type: EntityTypeText, value: "$", name: nil))
                        entity.add(property)
                    }
                    break
                default:
                    break
                }
            })
            handler(answer)
        }
    }
    
    
    func didFetchConvesationId(_ conversationId: String) {
        
    }
 
    func shouldHandlePersonalInformation(_ personalInfo: NRPersonalInfo) {
        print(personalInfo.methodArgs ?? "")
        personalInfo.personalInfoCallback?("10,000$", nil)
    }
}
`````