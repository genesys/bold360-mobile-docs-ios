---
layout: default
title: Chat Bar
parent: UI Customization
grand_parent: Chat Configuration 
# permalink: /docs/chat-configuration/ui-customization/chat-bar
nav_order: 6
---

# Chat Bar
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

## How it works
The UI component data is being updated on chat acceptance and on every operator change indication.
## UI customization
- The UI component can be configured by the `ChatBarConfiguration` object.

    ```swift
    let chatBarConfig = chatController.viewConfiguration.chatBarConfiguration!
    chatBarConfig.endChatButtonEnabled = true /* Remove "End Chat Button" view display */
    chatBarConfig.enabled = true /* Remove "ChatBar" view display */
    chatBarConfig.endChatBtnTextColor = UIColor.purple
    chatBarConfig.userTranscriptBtnImage = UIImage(systemName: "sunrise")
    chatBarConfig.backgroundColor = UIColor.yellow
    chatBarConfig.textColor = UIColor.red /* Changes the agentName text color */
    chatBarConfig.font = UIFont.italicSystemFont(ofSize: 15) /* Changes the font for the agentName and EndChatButton */
    ```
---

### Before & After

| Before                                                                                         | After                                                                                         |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| <img src="../../../../assets/images/chatbar_before.png"  alt="1" width = 200px height = 350px> | <img src="../../../../assets/images/chatbar_after.png"  alt="1" width = 200px height = 350px> |

---

## Known Issues
1. Currently the ability to change the agentName, agentAvatarImage and endChatBtnTitle are visible but are shown for only a few moments until the agent accepts the chat.
2. The UI configuration for the different chat elements inside the `ChatBar` will be seperated.


