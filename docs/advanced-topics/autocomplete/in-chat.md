---
layout: default
title: In chat
parent: Autocomplete
grand_parent: Advanced Topics
nav_order: 1
# permalink: /docs/advanced-topics/autocomplete/in-chat
---

# Autocomplete in AI chat
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc .nb-0}
- [UI configurations]({{'/docs/chat-configuration/ui-customization/user-input-field#ui-configurations' | relative_url}})

---

## Overview
Autocomplete is supported for AI chats only.   
While the user is typing a query, he will be presented with a list of relevant suggested queries, according to the typed content.  Selection of an autocomplete suggestion, will automaticaly send the selection as user query.  
{: .overview}
 
![]({{'/assets/images/chat-autocomplete.png' | relative_url}})   
{: .image-40}

---

## Availability configuration
{: .mb-4}
- ### [Admin console configuration]({{'/docs/advanced-topics/autocomplete#control-availability' | relative_url}})
{: mb-10}

- ### Chat Configuration   
Feature availability can be configured by the hosting App using the `AutoCompleteConfiguration` provided through the `ChatController`. (Default value is true)
```swift
chatController.viewConfiguration.searchViewConfig.autoCompleteConfiguration?.isEnabled = false         
``` 
{: .mb-8}


> **Generally, client side settings will override console settings.**     
    Except for the case were autocomplete was enabled on the App side, but disabled on the admin console, on the account settings, though the autocomplete is enabled and passes requests, no suggestions will be received by the BE nor displayed in the chat.   
{: .mb-10}

## UI Configuration
Autocomplete configurations should be set by `ChatController.ChatConfiguration.SearchViewConfiguration.AutoCompleteConfiguration`

To customize follow: [User Input Field UI Customization]({{'/docs/chat-configuration/ui-customization/user-input-field/#ui-customization' | relative_url}})
