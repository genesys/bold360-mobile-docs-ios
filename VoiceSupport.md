- # Voice Support
    This article will help you manage voice configurations for Speech-To-Text and Text-To-Speech.

    - # SpeechToText  (collapsable)
    The following section will help you manage Speech-To-Text configurations.<br/>
    If Speech-To-Text is enabled (**Default value is enabled**) - voice dictation will be enabled.

    ## To Dissable Speech To Text
    
    ```swift
    chatController.viewConfiguration.searchViewConfig.voiceEnabled = false
    ```

    ## To configure fine adjustments
    ### languageCode
    Specifies the BCP-47 language tag that represents the user's language.<br/>
    *Examples: en-US (U.S. English), fr-CA (French Canadian)*<br/>
    *The default language is the kbLanguage or "en-US" incase kbLanguage is not set.* <br/>
    ```swift
    chatController.viewConfiguration.searchViewConfig.languageCode = "fr-CA"
    ```

    - # TextToSpeech  (collapsable)
    The following section will help you manage Text-To-Speech configurations.<br/>
    If TextToSpeech is enabled (**Default value is disabled**) - messages that were initiated by a voice dictation will be sent automatically and will be read up.

    ## To Enable Text To Speech
    Configure the type of voice to voice usage the user should experience:
    1. default - Whether or not to automaticly send a recorded message and readout the message recived from the server.
    2. handsFreeMode - Whether or not to automaticly send a recorded message, readout the message recived from the server and then start recording again. 
    ```swift
    chatController.viewConfiguration.voiceToVoiceConfiguration.type = VoiceToVoiceType.default
    ```

    ## To configure fine adjustments

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

    ## Altering the text for the readout
    Once a response is received, if the VoiceToVoice is enabled, that response will be parsed to a textual presentation for the read out. In case there's a need to alternate some of the text before it is read to the user, you need to register and conform to the ReadoutHandler.

    ### Register to protocol

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