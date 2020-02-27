# Text To Speech

This article will help you to manage Text-To-Speech configurations.
If TextToSpeech is enabled (**Default value is enabled**) - messages that were initiated by a voice dictation will be read up.

## To Dissable Text To Speech
 
```swift
chatController.viewConfiguration.synthesizerConfiguration.isEnabled = false;
```

## To configure fine adjustments

```swift
//  Specifies the BCP-47 language tag that represents the voice.
/// Examples: en-US (U.S. English), fr-CA (French Canadian)
// // The default language is the kbLanguage or en-US incase kbLanguage is not set. 
chatController.viewConfiguration.synthesizerConfiguration.currentLanguageCode = "fr-CA"
// The baseline pitch at which the utterance will be spoken.
// Allowed values are in the range from 0.5 (for lower pitch) to 2.0 (for higher pitch).
// The default pitch is 1.0. 
chatController.viewConfiguration.synthesizerConfiguration.pitchMultiplier = 0.5
// The amount of time a speech synthesizer will wait before actually speaking
// The default amount is 0.0. 
chatController.viewConfiguration.synthesizerConfiguration.preUtteranceDelay = 2.0
// The volume used when speaking the utterance.
// Allowed values are in the range from 0.0 (silent) to 1.0 (loudest). 
// The default volume is 1.0.
chatController.viewConfiguration.synthesizerConfiguration.volume = 0.7
// The rate at which the utterance will be spoken.
// Range between AVSpeechUtteranceMinimumSpeechRate and AVSpeechUtteranceMaximumSpeechRate.
// Lower values correspond to slower speech, and vice versa.
// The default value is AVSpeechUtteranceDefaultSpeechRate.
chatController.viewConfiguration.synthesizerConfiguration.rate = AVSpeechUtteranceMaximumSpeechRate
```
