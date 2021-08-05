---
layout: default
title: UI Customization
parent: Chat Configuration
has_children: true
permalink: /docs/chat-configuration/ui-customization
nav_order: 3
---

# UI Customization

This article will help you customize initial chat view UI, and show you how to change UI on runtime according to live data.

In order to change and override provided SDK implementations and customizations, one need to provide his own changed `ChatConfiguration` instance on `ChatController.viewConfiguration`. 

## Supported Configurations


| Configuration Class Name     | Configuration Options                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `ChatViewConfiguration`      | backgroundColor, dateStamp, timeStamp, hyperlinkColor, avatarSize                                                                        |
| `IncomingBotConfiguration`   | backgroundColor, backgroundImage, textColor, customFont,avatar, avatarPosition, borderRadius                                                                                                |
| `MultipleSelectionConfiguration`   | titleConfiguration, persistentOptionConfiguration                                                                                           |
| `IncomingLiveConfiguration`  | backgroundColor, backgroundImage, textColor, customFont,avatar, avatarPosition, borderRadius                                             |
| `OutgoingConfiguration`      | backgroundColor, backgroundImage, textColor, customFont,avatar, avatarPosition, borderRadius, sentSuccessfullyIcon, sentFailureIcon, pendingIcon |
| `CarouselConfiguration`      | backgroundColor, backgroundImage, customFont, avatar, textColor                                                     |
| `SystemMessageConfiguration` | backgroundColor, backgroundImage, textColor, customFont, borderRadius        
| `ChatBarConfiguration` | backgroundColor, font, textColor, image, agentName, endChatBtnTitle, endChatBtnTextColor, enabled, userTranscriptBtnImage
| `BoldFormConfiguration` | titleConfig |
| `BoldFormElementConfiguration` | backgroundColor, font, textColor |


### How To Set Configuration

In following sample we will customize chat view.

```swift
self.chatController.viewConfiguration.chatViewConfig.hyperlinkColor = UIColor.blue
self.chatController.viewConfiguration.chatViewConfig.dateStamp.textColor = UIColor.red
self.chatController.viewConfiguration.chatViewConfig.dateStamp.customFont = CustomFont(font: UIFont.systemFont(ofSize: 20))
self.chatController.viewConfiguration.chatViewConfig.timeStamp.textColor = UIColor.yellow
self.chatController.viewConfiguration.chatViewConfig.timeStamp.customFont = CustomFont(font: UIFont.systemFont(ofSize: 30))
self.chatController.viewConfiguration.chatViewConfig.avatarSize = CGSize(width: 50, height: 50)
```

----

## Avatar Image 

Should use images in the size to be displayed for the client.

To update the image:

### Default
Same image will be shown for different appearances (Dark/ Light).
```swift
self.chatController.viewConfiguration.incomingBotConfig.avatar = UIImage(named: "robot")
```
Or
### Support Different Appearances
```swift
self.chatController.viewConfiguration.incomingBotConfig.avatrImageName = "robot"
```
>Note: To support different appearances make sure image exist in [Application Bundle](https://developer.apple.com/documentation/uikit/uiimage/providing_images_for_different_appearances).


## Avatar Positioning 

`ChatElementConfiguration` has a property `avatarPosition` of type `AvatarPosition` the default value for outgoing element is `AvatarPositionBottomLeft` and for incoming element is `AvatarPositionBottomRight` for changing the position:
>Note: The shape of the bubble corners adjacent to the `avatarPosition`, will be square shaped.

```swift
self.chatController.viewConfiguration.incomingBotConfig.avatarPosition = .topLeft
```

### Avatar Position Options

``` Objective C
typedef NS_ENUM(NSInteger, AvatarPosition) {
    AvatarPositionTopLeft,
    AvatarPositionBottomLeft,
    AvatarPositionTopRight,
    AvatarPositionBottomRight
};
```

## Corner Radius
`ChatElementConfiguration` has a property `borderRadius` which is used for setting separately the border corner radius for the message bubble edges for incoming, multipleSelection, outgoing and system messages.

```swift
self.chatController.viewConfiguration.incomingBotConfig.quickOptionConfig.borderRadius = BorderRadius(top: Corners(left: 40, right: 40 ), bottom: Corners(left: 40, right: 40 ))
self.chatController.viewConfiguration.multipleSelectionConfiguration.borderRadius = BorderRadius(top: Corners(left: 40, right: 40 ), bottom: Corners(left: 40, right: 40 ))
```



## Known Issues

1. Background image is not supported on system message.
2. Carousel is not configurable.
3. Background image is not supported on chat view.
4. Background image is not supported on read more channels.
5. Background image is not supported on quick options.
6. "Read More+" button is not configurable.

