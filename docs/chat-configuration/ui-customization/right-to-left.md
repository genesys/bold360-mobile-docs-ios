---
layout: default
title: Right To Left
parent: UI Customization
grand_parent: Chat Configuration 
# permalink: /docs/chat-configuration/ui-customization/right-to-left
nav_order: 13
---

# Right to Left Support 

### How to apply RTL
In order to apply right-to-left to your chat, you can define the ` UISemanticContentAttribute` to `forceRightToLeft` on `UIView` inside `AppDelegate` `didFinishLaunchingWithOptions`.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    UIView.appearance().semanticContentAttribute = .forceRightToLeft
    return true
}
```
>Note: To support other UIComponentes (e.g. `UITableView`) apply the same `SemanticContentAttribute`

| Before                                                                                          | After                                                                                          |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| <img src="../../../../assets/images/right_to_left_before.png"  alt="1" width = 300px height = 450px> | <img src="../../../../assets/images/right_to_left_after.png"  alt="1" width = 300px height = 450px> |