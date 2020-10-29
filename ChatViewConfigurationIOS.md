# Customizing UI components 
This article will help you customize initial chat view UI, and show you how to change UI on runtime according to live data.

In order to change and override provided SDK implementations and customizations, one need to provide his own changed `ChatConfiguration` instance on `ChatController.viewConfiguration`. 

## Supported Configurations


| Configuration Class Name     | Configuration Options                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `ChatViewConfiguration`      | backgroundColor, backgroundImage, dateStampColor, customFont                                                                        |
| `IncomingBotConfiguration`   | quickOptionConfig, persistentOptionConfig                                                                                           |
| `MultipleSelectionConfiguration`   | titleConfiguration, persistentOptionConfiguration                                                                                           |
| `IncomingLiveConfiguration`  | backgroundColor, backgroundImage, dateStampColor, customFont, avatar, textColor                                                     |
| `OutgoingConfiguration`      | backgroundColor, backgroundImage, dateStampColor, customFont, avatar, textColor, sentSuccessfullyIcon, sentFailureIcon, pendingIcon |
| `CarouselConfiguration`      | backgroundColor, backgroundImage, dateStampColor, customFont, avatar, textColor                                                     |
| `SystemMessageConfiguration` | backgroundColor, backgroundImage, dateStampColor, customFont, avatar, textColor 
| `ChatBarConfiguration` | backgroundColor, font, textColor, image, agentName, endChatBtnTitle, endChatBtnTextColor, enabled
| `BoldFormConfiguration` - title | backgroundColor, font, textColor


### How To Set Configuration

In following sample we will customize chat view.

```swift
self.chatController.viewConfiguration.chatViewConfig.backgroundImage = UIImage(named: "ww_back_light")
self.chatController.viewConfiguration.chatViewConfig.dateStampColor = UIColor.black
```

----

### Chat Element Date/ Time Format

To update chat element Date/ Time please choose chat element and update configuration.

>Note: Below sample changes only `incomingBotConfig` chat element.

1. Configure Chat Date Format

```swift
let dateFormatter = DateFormatter(),dateFormatter.dateFormat = "yyyy-MM-dd"
chatController.viewConfiguration.incomingBotConfig.dateFormatter = dateFormatter
```
<img src="images/iOS/date-format.jpeg" width="300" height="600">

2. Configure Chat Element Time Format

```swift
let timeFormatter = DateFormatter()
timeFormatter.dateFormat = "HH:mm:ss"
chatController.viewConfiguration.incomingBotConfig.timeFormatter = timeFormatter
```
<img src="images/iOS/time-format.jpeg" width="300" height="600">

----

### Set Custom Font

To set custom font first make sure to add the relevant file to project, then:

```swift
// For example our custom font is: `{CUSTOM_FONT_NAME}.ttf`
let font = CustomFont()
font.fontFileName = "{CUSTOM_FONT_NAME}.ttf"
font.font = UIFont(name: "{CUSTOM_FONT_NAME}", size: 15)
let font1 = CustomFont()
font1.fontFileName = "{CUSTOM_FONT_NAME}.otf"
font1.font = UIFont(name: "{CUSTOM_FONT_NAME}", size: 20)
self.chatController.viewConfiguration.outgoingConfig.customFont = font
self.chatController.viewConfiguration.incomingBotConfig.customFont = font1
self.chatController.viewConfiguration.incomingLiveConfig.customFont = font

```

### Limit Chat Element Length

```swift
self.chatController.viewConfiguration.chatViewConfig.maxLength = {YOUR_VALUE}
```

## Avatar Image 

Should use images in the size to be displayed for the client.
To update the image:

```swift
self.chatController.viewConfiguration.incomingBotConfig.avatar = UIImage(named: "{IMAGE_NAME}")
```

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
`ChatElementConfiguration` has a property `borderRadius` which is used for setting separately the border corner radius for the message bubble edges for incoming, outgoing and system messages.

```swift
config.incomingBotConfig.quickOptionConfig.borderRadius = BorderRadius(top: Corners(left: 40, right: 40 ), bottom: Corners(left: 40, right: 40 ))
self.chatController.viewConfiguration.multipleSelectionConfiguration.borderRadius = BorderRadius(top: Corners(left: 40, right: 40 ), bottom: Corners(left: 40, right: 40 ))
```

### Set BoldForm title configuration

To update BoldForm title UI configuration:

```swift
chatController.viewConfiguration.formConfiguration.titleConfig.backgroundColor = UIColor.yellow
chatController.viewConfiguration.formConfiguration.titleConfig.textColor = UIColor.red
chatController.viewConfiguration.formConfiguration.titleConfig.font = UIFont(name: "Times New Roman", size: 29.0)!
```