---
layout: default
title: Voice
parent: Advanced Topics
nav_order: 6
# permalink: /docs/advanced-topics/voice
---

# Voice
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
 This article will help you manage voice configurations for Speech-To-Text and Text-To-Speech.
    
> Important
- You must include the NSSpeechRecognitionUsageDescription key in your app’s Info.plist file. If this key is not present, your app will crash when it attempts to request authorization or use the APIs of the Speech framework.
- For more details go to [iOS Dev Portal](https://developer.apple.com/documentation/speech/asking_permission_to_use_speech_recognition).

<img src="../../../assets/images/speech_recognition_info_plist.png"  alt="1" width = 500px height = 850px> 

---

## Voice-To-Voice related UI components

Related UI configurations are available in: [User Input Field](../../../docs/chat-configuration/ui-customization/user-input-field)

---

# Speech-To-Text
The following section will help you manage Speech-To-Text configurations.<br/>
If Speech-To-Text is enabled (**Default value is enabled**) - voice dictation will be enabled.

## To Disable Speech To Text

```swift
chatController.viewConfiguration.searchViewConfig.voiceEnabled = false
```

## Language Configuration
### languageCode
Specifies the BCP-47 language tag that represents the user's language.<br/>
*Examples: en-US (U.S. English), fr-CA (French Canadian)*<br/>
*The default language is the kbLanguage or "en-US" incase kbLanguage is not set.* <br/>
```swift
chatController.viewConfiguration.searchViewConfig.languageCode = "fr-CA"
```

---

# Text-To-Speech
The following section will help you manage Text-To-Speech configurations.<br/>
If Text-To-Speech is enabled (**Default value is disabled**) - messages that were initiated by a voice dictation will be sent automatically and will be read out.

## To Enable Text-To-Speech

Configure the type of voice to voice usage the user should experience:
1. default - Whether or not to automaticly send a recorded message and readout the message recived from the server.
2. handsFreeMode - Whether or not to automaticly send a recorded message, readout the message recived from the server and then start recording again. 
```swift
chatController.viewConfiguration.voiceToVoiceConfiguration.type = VoiceToVoiceType.default
```

## Text-To-Speech Properties Configuration

### currentLanguageCode
Specifies the BCP-47 language tag that represents the voice.<br/>
*Examples: en-US (U.S. English), fr-CA (French Canadian)*<br/>
*The default language is the kbLanguage or the system's region and language incase kbLanguage is not set.* <br/>
```swift
chatController.viewConfiguration.voiceToVoiceConfiguration.synthesizerConfiguration.currentLanguageCode = "en-US"
```
### pitchMultiplier
The baseline pitch at which the utterance will be spoken.<br/>
Allowed values are in the range from 0.5 (for lower pitch) to 2.0 (for higher pitch).<br/>
*The default pitch is 1.0.* <br/>
```swift
chatController.viewConfiguration.voiceToVoiceConfiguration.synthesizerConfiguration.pitchMultiplier = 0.5
```
### preUtteranceDelay
The amount of time a speech synthesizer will wait before actually speaking.<br/>
Allowed values are in the range from 0.5 (for lower pitch) to 2.0 (for higher pitch).<br/>
*The default amount is 0.0.* <br/>
```swift
chatController.viewConfiguration.voiceToVoiceConfiguration.synthesizerConfiguration.preUtteranceDelay = 2.0
```
### volume
The volume used when speaking the utterance.<br/>
Allowed values are in the range from 0.0 (silent) to 1.0 (loudest).<br/>
*The default volume is 1.0.* <br/>
```swift
chatController.viewConfiguration.voiceToVoiceConfiguration.synthesizerConfiguration.volume = 0.7
```
### rate
The rate at which the utterance will be spoken.<br/>
Range between AVSpeechUtteranceMinimumSpeechRate and AVSpeechUtteranceMaximumSpeechRate.<br/>
Lower values correspond to slower speech, and vice versa.<br/>
*The default value is AVSpeechUtteranceDefaultSpeechRate.*<br/>
```swift
chatController.viewConfiguration.voiceToVoiceConfiguration.synthesizerConfiguration.rate = AVSpeechUtteranceMaximumSpeechRate
```

---


## Alternative Readout

Provide an alternative text for the read out
When Text-To-Speech is enabled, every voice sourced response will be parsed to a textual format to be read out.   
> * **Voice sourced response** = Response to a query that was fully or partially recorded by the user.

The default readout implementation combines the response body and available options to one readable string.

The SDK enables the embedding App alternate some or all of the response text that will be read to the user, before the actual read.   
An implementation of `ReadoutHandler` should be set on the `ChatController` instance.   
Once a readout response is received the `ReadoutHandler. shouldReplace(_ readoutMessage: ReadoutMessage!)` method will be called.    

The response readout details are provided by `ReadoutMessage`.   

### To Alter The Readout Text  

1. Set `ReadoutHandler`:

    ```swift
    chatController.readoutHandler = self
    ```

2. Implement `ReadoutHandler`:

    ```swift
    extension ClassName: ReadoutHandler {
        func shouldReplace(_ readoutMessage: ReadoutMessage!) -> ReadoutMessage! {
            if let message = readoutMessage.body {
                readoutMessage.body = "Readout message: \(message)"
            }

            if let quickOptions = readoutMessage.quickOptions {
                for index in 0..<quickOptions.count{
                    let quickOption = quickOptions[index] as! ReadoutOption
                    quickOption.body = "Quick Option \(index + 1): \(quickOption.body!)"
                }
            }

            if let persistentOptions = readoutMessage.persistentOptions {
                for index in 0..<persistentOptions.count{
                    let persistentOption = persistentOptions[index] as! ReadoutOption
                    persistentOption.body = "Persistent Option \(index + 1): \(persistentOption.body!)"
                }
            }

            return readoutMessage
        }
    }
    ```
