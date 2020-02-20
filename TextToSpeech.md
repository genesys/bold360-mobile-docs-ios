# Text To Speech

This article will help you to manage Text-To-Speech configurations.
If TextToSpeech is enabled - ALL messages should be read up that were initiated by a voice dictation (**Default value is enabled**).

## To Dissable Text To Speech
 
```swift
chatController.viewConfiguration.synthesizerConfiguration.isEnabled = false;
```