# Chat Engagement
The SDK exposes API to inject messages into the chat.

## How to inject messages:

1. Implement `onChatStateChanged` under `ChatControllerDelegate`.
2. On chat state `accepted` under `onChatStateChanged` Create ProactiveChatElement.
>To read about `onChatStateChanged` open (Chat Lifecycle)[https://developer.bold360.com/help/EN/Bold360API/Bold360API/ChatLifecycleIOS.html]
3. `ProactiveChatElement` creation.

```swift
let element = ProactiveChatElement(text: "{YOUR-TEXT}", type: ChatElementType.{CHAT-ELEMENT-TYPE})

/* {CHAT-ELEMENT-TYPE}
OutgoingElement, IncomingBotElement, IncomingLiveElement, SystemMessageElement
*/
```

4. Decide if should be posted.

Under `ProactiveChatElement` set boolean

```swift
element.withPost = {SHOULD-BE_POSTED}
```

>withPost, 
>if `true` will present and send the element and get response.
>if `false` will only present the element.

5. Message injection.

Call `post` under `chatController.proactiveChatElementHandler`

```swift
self.chatController.proactiveChatElementHandler.post(element)
```

5. Final code.

```swift
extension BotDemoViewController: ChatControllerDelegate {
    func didUpdateState(_ event: ChatStateEvent!) {
        switch event.state {
        case .preparing:
            print("ChatPreparing")
            break
        case .started:
            print("ChatStarted")
        case .accepted:
            print("ChatAccepted")
             let element = ProactiveChatElement(text:"{YOUR-Text}", type: ChatElementType.{TYPE}) 
             element.withPost = {SHOULD-BE_POSTED}          
             self.chatController.proactiveChatElementHandler.post(element)
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
        @unknown default:
            break
        }
    }
}
```
