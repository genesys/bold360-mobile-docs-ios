# Account Provider
 This article will help you to pass account data when escalating from botChat to liveAgent.
## Register to protocol
Firstly register to `AccountProvider` 
```swift
class BotDemoViewController: UIViewController, AccountProvider
var accountExtraData: AccountExtraData!
```
Then create AccountExtraData():
```swift
// for example create live account.
chatController = ChatController(account: createAccount())
accountExtraData = AccountExtraData()
```
## To add account information
1. Add data:
```swift
accountExtraData.initialQuestion = "{INITIAL_QUESTION}"
or
accountExtraData.setExtraParams(["first_name":"{FIRST_NAME}","address":"{ADDRESS}"])
```
**Tip**

_For the setExtraParams() method:
Existing keys values are being overided and new keys are created with the custom_ prefix
 The default keys are listed in https://developer.bold360.com/help/EN/Bold360API/Bold360API/c_bc_sdk_ios_core_integration_chat_session.html_

2. Set AccountProvider:
```swift
chatController.accountProvider = self
```
