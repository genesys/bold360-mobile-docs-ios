This section describes the different operations you can perform with the history service.

## Supported History Features

* **Fetch** - fetches history from DB.
* **Store** - stores history item.
* **Remove** - removes history item. 
* **Update** - updates history item 
  > For Example: on failure history item can be updated to success.

## Known Limitations

* History management is currently not provided by the SDK, <br />
  it should be done by the using app. 

## Overview

### Simple Flow  

![](images/iOS/history_SD.png)
<details>
  <summary>UML internal code</summary>

```
@startuml

== Chat Initialization ==

APP -> ChatController: init(Account)
ChatController --> APP: chatController

== Conform to protocol ==

note over APP, ChatController #aqua
	conform to HistoryProvider
end note

APP -> ChatController: setHistoryProvider(self)

== Load History ==

ChatController -> APP: fetch
APP --> ChatController: array of history elements of type (StorableChatElement)
ChatController -> ChatController: Loading History Elements

== Manage History ==

ChatController -> APP: store
APP -> APP: Add item to DB
ChatController -> APP: update
APP -> APP: Update item on DB

@enduml
```
</details>

## Usage  

### General API Notes  

The following classes/interfaces are the public API for history managment:

* **`ChatController`** - Use this class to set `HistoryProvider`.
*  Implement **`StorableChatElement`** to have your own storable chat element. (**optional**) 

### Basic Implementation

1. Create conversation view (via `ChatController`)

2. Conform to & Set `HistoryProvider`
 
```swift
controller.historyProvider = self
```

3. Implement `HistoryProvider` Functions

```swift
func fetch(_ from: Int, handler: (([Any]?) -> Void)!) {
    print("fetch")
}

func store(_ item: StorableChatElement) {
    print("store")
}

func remove(_ timestampId: TimeInterval) {
    print("remove")
}

func update(_ timestampId: TimeInterval, newTimestamp: TimeInterval, status: StatementStatus) {
    print("update")
}
``` 
4. Present Chat viewController.

