---
layout: default
title: How it works
parent: UI Customization
grand_parent: Chat Configuration 
# permalink: /docs/chat-configuration/ui-customization/how-it-works
nav_order: 1
---

# Customizing chat UI basics
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
All customizable UI components enable the hosting app to apply some UI changes to the SDKs default implementations or replace them completely by custom components.   
{: .overview}   

**You can checkout an implementation example [here](https://github.com/bold360ai/bold360-mobile-samples-ios/blob/master/BasicSample/BasicSample/ChatViewControllers/Config.swift).**


In order to change and override provided SDK implementations and customizations, one need to provide his own changed `ChatConfiguration` instance on `ChatController.viewConfiguration`.   
{: .overview}

## Configure Different UI Components

Under `ChatController.viewConfiguration` which is the `ChatConfiguration` many different UI components can be accessed and configured.

> To see all supported configurable components open `ChatConfiguration.h`

```swift
let config = Bold360AI.ChatConfiguration()
config.chatViewConfig.backgroundColor = UIColor.gray
config.systemMessageConfig.backgroundColor = UIColor.blue
config.chatViewConfig.hyperlinkColor = UIColor.red
```