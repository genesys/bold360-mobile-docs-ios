# Account Provider

This article will help you to pass account data when escalating from bot chat to bold chat.

## Register to protocol

1. implement `AccountProvider` 

```swift
class ClassName: AccountProvider
```

2. Set `AccountProvider`:

```swift
chatController.accountProvider = self
```

## To add account information

3. Create `AccountExtraData`:

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

_For the `setExtraParams()` method:
Existing keys values are being overrided and new keys are created with the custom_ prefix. The default keys are listed in https://developer.bold360.com/help/EN/Bold360API/Bold360API/c_bc_sdk_ios_core_integration_chat_session.html
```swift
extension ClassName: AccountProvider {
    var accountExtraData: AccountExtraData {
        
        let liveAccount = LiveAccountExtraData()
        liveAccount.setExtraParams(["first_name":"{FIRST_NAME}","last_name":"{Last_Name}"])        
        return liveAccount
    }
}
```
