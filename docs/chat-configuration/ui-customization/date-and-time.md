---
layout: default
title: Date and Time
parent: UI Customization
grand_parent: Chat Configuration 
# permalink: /docs/chat-configuration/ui-customization/date-and-time
nav_order: 9
---

# Date and Time 
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
In the chat there are 2 main time related elements:

- **The dates notifications in the chat** - grouping elements of the same date messages 
- **The messages timestamp** - usually appears arround the message bubble

| The dates notifications in the chat                                                              | The messages timestamp                                                                          |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| <img src="../../../../assets/images/generaldate_before.png"  alt="1" width = 300px height = 450px> | <img src="../../../../assets/images/datestamp_before.png"  alt="1" width = 300px height = 450px> |

---

## Datestamp display
In order to change default datestamp display use `ChatViewConfiguration`

```swift
    lazy var chatConfig = { () -> Bold360AI.ChatConfiguration in
        var config = Bold360AI.ChatConfiguration()
        return config
    }()

    let dateStamp = DateStampConfiguration()
        dateStamp.formatter = DateFormatter()
        dateStamp.formatter.dateFormat = "MMM dd,yyyy"
        dateStamp.customFont = CustomFont(font: UIFont.boldSystemFont(ofSize: 12))
        dateStamp.textColor = UIColor.black
    
    self.chatConfig.chatViewConfig.dateStamp = dateStamp
```

## Timestamp display
In order to change default datestamp display use `ChatViewConfiguration`

```swift
    lazy var chatConfig = { () -> Bold360AI.ChatConfiguration in
        var config = Bold360AI.ChatConfiguration()
        return config
    }()

    let timeStamp = DateStampConfiguration()
        timeStamp.formatter = DateFormatter()
        timeStamp.formatter.dateFormat = "HH:mm"
        timeStamp.customFont = CustomFont(font: UIFont.boldSystemFont(ofSize: 8))
        timeStamp.textColor = self.colorType.dateStampColor
    
    self.chatConfig.chatViewConfig.timeStamp = timeStamp
```

