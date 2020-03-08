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
    *The default language is en-US.*<br/>
    ```swift
    chatController.viewConfiguration.searchViewConfig.languageCode = "fr-CA"
    ```

    - # TextToSpeech  (collapsable)
    The following section will help you manage Text-To-Speech configurations.<br/>
    If TextToSpeech is enabled (**Default value is enabled**) - messages that were initiated by a voice dictation will be read up.

    ## To Dissable Text To Speech
    
    ```swift
    chatController.viewConfiguration.synthesizerConfiguration.isEnabled = false;
    ```

    ## To configure fine adjustments

    ### currentLanguageCode
    Specifies the BCP-47 language tag that represents the voice.<br/>
    *Examples: en-US (U.S. English), fr-CA (French Canadian)*<br/>
    *The default language is the kbLanguage or en-US incase kbLanguage is not set.* <br/>
    ```swift
    chatController.viewConfiguration.synthesizerConfiguration.currentLanguageCode = "fr-CA"
    ```
    ### pitchMultiplier
    The baseline pitch at which the utterance will be spoken.<br/>
    Allowed values are in the range from 0.5 (for lower pitch) to 2.0 (for higher pitch).<br/>
    *The default pitch is 1.0.* <br/>
    ```swift
    chatController.viewConfiguration.synthesizerConfiguration.pitchMultiplier = 0.5
    ```
    ### preUtteranceDelay
    The amount of time a speech synthesizer will wait before actually speaking.<br/>
    Allowed values are in the range from 0.5 (for lower pitch) to 2.0 (for higher pitch).<br/>
    *The default amount is 0.0.* <br/>
    ```swift
    chatController.viewConfiguration.synthesizerConfiguration.preUtteranceDelay = 2.0
    ```
    ### volume
    The volume used when speaking the utterance.<br/>
    Allowed values are in the range from 0.0 (silent) to 1.0 (loudest).<br/>
    *The default volume is 1.0.* <br/>
    ```swift
    chatController.viewConfiguration.synthesizerConfiguration.volume = 0.7
    ```
    ### rate
    The rate at which the utterance will be spoken.<br/>
    Range between AVSpeechUtteranceMinimumSpeechRate and AVSpeechUtteranceMaximumSpeechRate.<br/>
    Lower values correspond to slower speech, and vice versa.<br/>
    *The default value is AVSpeechUtteranceDefaultSpeechRate.*<br/>
    ```swift
    chatController.viewConfiguration.synthesizerConfiguration.rate = AVSpeechUtteranceMaximumSpeechRate
    ```

