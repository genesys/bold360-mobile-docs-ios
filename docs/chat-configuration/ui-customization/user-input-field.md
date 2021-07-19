---
layout: default
title: User Input Field
parent: UI Customization
grand_parent: Chat Configuration 

# permalink: /docs/chat-configuration/ui-customization/user-input-field

nav_order: 2
---

# User Input Field

{: .no_toc }

## Table of contents

{: .no_toc .text-delta }

- TOC
{:toc .mb-0}

---

## Overview

Usually appears at the bottom of the chat screen. Contains the users typed/recorded message, until it was sent.   
The behavior and functionality of the input field is defined by the active chat type.   
{: .overview}

> e.g., The **upload icon** will appear only on live chats and only if was enabled by configuration.

## Available features

* Typing and sending messages 
* [Autocomplete](../../../../docs/advanced-topics/autocomplete/in-chat)
* [Voice recording and readout control](../../../../docs/advanced-topics/voice)
* [File upload](../../../../docs/advanced-topics/file-upload) on live chats

---

## UI customization

### Configuration   

  The SDK provides a configurable _user input field_ implementation.
  The default configuration can be changed via `ChatController.viewConfiguration.searchViewConfig`

  
  

``` swift
  let searchViewConfig = chatController.viewConfiguration.searchViewConfig
  searchViewConfig.backgroundColor = UIColor.yellow
  searchViewConfig.textColor = UIColor.blue
  searchViewConfig.customFont = CustomFont(font: UIFont.italicSystemFont(ofSize: 15))
  searchViewConfig.sendIcon = UIImage(systemName: "restore")
  /* File upload */
  searchViewConfig.uploadIcon = UIImage(systemName: "shuffle")
  /* Voice support */
  searchViewConfig.voiceEnabled = true
  searchViewConfig.speechOnIcon = UIImage(systemName: "wind")
  searchViewConfig.speechOffIcon = UIImage(systemName: "moon")
  searchViewConfig.readoutIcon = UIImage(systemName: "cloud")
  /* Specifies the BCP-47 language tag representing the language for voice recognition.
    Examples: en-US (U.S. English), fr-CA (French Canadian) */
  searchViewConfig.languageCode = "en-US"
  /* Border configuration */
  self.chatConfig.searchViewConfig.border.color = UIColor.red
  self.chatConfig.searchViewConfig.border.width = 3.0
  self.chatConfig.searchViewConfig.border.cornerRadius = 10.0
  
  let autoCompleteConfiguration = AutoCompleteConfiguration()
  autoCompleteConfiguration.isEnabled = true
  autoCompleteConfiguration.backgroundColor = UIColor.blue
  autoCompleteConfiguration.textColor = UIColor.red
  autoCompleteConfiguration.customFont = CustomFont(font: UIFont.italicSystemFont(ofSize: 15))
  searchViewConfig.autoCompleteConfiguration = autoCompleteConfiguration
  ```

---

### Hint configuration

* Hint configuration for AI chats is done on the [bold360ai console]({{'/assets/images/ai-hint-config.png' | relative_url}}).

  > Escalated chats will not effect the AI configured hint.

* Hint configuration for Live chats is done on the [bold admin console]({{'/assets/images/live-hint-config.png' | relative_url}}). 

* Hint configurations should be set by ChatController. ChatConfiguration. SearchViewConfiguration. PlaceholderConfiguration

  This resource will be used, if none of the above was provided, to the current active chat.

#### Setting The PlaceholderConfiguration s

``` swift
  let placeholderConfiguration = PlaceholderConfiguration()
  placeholderConfiguration.readoutext = "Reading out"
  placeholderConfiguration.recordText = "Recording now.."
  placeholderConfiguration.text = "Write Here.."
  placeholderConfiguration.backgroundColor = UIColor.systemYellow
  placeholderConfiguration.textColor = UIColor.purple
  placeholderConfiguration.customFont = CustomFont(font: UIFont.italicSystemFont(ofSize: 15))
  searchViewConfig.placeholderConfiguration = placeholderConfiguration
  ```

---

### Before & After

| Before                                                                                           | After                                                                                           |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| <img src="../../../../assets/images/searchbar_before.png"  alt="1" width = 200px height = 350px> | <img src="../../../../assets/images/searchbar_after.png"  alt="1" width = 200px height = 350px> |
| <img src="../../../../assets/images/upload_before.png"  alt="1" width = 200px height = 350px>   | <img src="../../../../assets/images/upload_after.png"  alt="1" width = 200px height = 350px>   |
| <img src="../../../../assets/images/record_before.png"  alt="1" width = 200px height = 350px>    | <img src="../../../../assets/images/record_after.png"  alt="1" width = 200px height = 350px>    |
| <img src="../../../../assets/images/readout_before.png"  alt="1" width = 200px height = 350px>   | <img src="../../../../assets/images/readout_after.png"  alt="1" width = 200px height = 350px>   |


  

  
