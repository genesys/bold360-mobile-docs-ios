# Speech To Text

This article will help you to manage Speech-To-Text configurations.
If Speech-To-Text is enabled (**Default value is enabled**) - voice dictation will be enabled.

## To Dissable Speech To Text
 
```swift
chatController.viewConfiguration.searchViewConfig.voiceEnabled = false
```

## To configure fine adjustments

```swift
//  Specifies the BCP-47 language tag that represents the user's language.
/// Examples: en-US (U.S. English), fr-CA (French Canadian)
// // The default language is en-US.
chatController.viewConfiguration.searchViewConfig.languageCode = "fr-CA"
```
