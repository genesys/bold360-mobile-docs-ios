---
layout: default
title: Chat Bar
parent: UI Customization
grand_parent: Chat Configuration 
# permalink: /docs/chat-configuration/ui-customization/chat-bar
nav_order: 6
---

# Chat Bar {{site.data.vars.need-work}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
A UI component, which appears over the chat screen, while a live chat is in progress. 
The Chatbar displays the following:
 1. Active agent details - name and avatar.
 2. `End Chat` clickable view to end current live chat.
{: .overview}

![]({{'/assets/images/chatbar.png' | relative_url}})
{: .image-40}

## How it works
The UI component data is being updated on chat acceptance and on every operator change indication.
## UI customization
- The UI component can be configured by overriding the `ChatBarConfiguration` object.

    ```swift
    let chatBarConfig = chatController.viewConfiguration.chatBarConfiguration!
    chatBarConfig.enabled = ... // Remove "ChatBar" view display
    chatBarConfig.endChatButtonEnabled = ... // Remove "End Chat Button" view display
    chatBarConfig.endChatBtnTextColor = ...
    chatBarConfig.backgroundColor = ...
    chatBarConfig.textColor = ... // Changes the agentName text color
    chatBarConfig.font = ... // Changes the font for the agentName and EndChatButton
    ```
---

## Known Issues
1. Currently the ability to change the agentName, agentAvatarImage and endChatBtnTitle are visible but are shown for only a few moments until the agent accepts the chat.
2. The UI configuration for the different chat elements inside the `ChatBar` will be seperated.
3. The ChatBar is displayed for a moment before the preChatForm is displayed and not only after.



