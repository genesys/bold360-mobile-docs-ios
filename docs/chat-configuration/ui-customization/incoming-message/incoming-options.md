---
layout: default
title: Incoming options
np_toc: true
nav_exclude: true
---

# Incoming message options
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Persistent options
Incoming bot response can have persistent options. Those options will not dissappear after user selection.   

### How to customize
This kind of incoming element can be customized by overriding default implementation of the `MultipleSelectionConfiguration`.

This component contains:
* titleConfiguration - `IncomingBotTitleConfiguration`
* persistentOptionConfiguration - `PersistentOptionConfiguration`

While configuring make sure you update both if needed.


  ```swift
    func updateMultiLine() {
        self.chatConfig.multipleSelectionConfiguration.titleConfiguration.textColor = self.colorType.bgColor
        self.chatConfig.multipleSelectionConfiguration.borderRadius = BorderRadius(top: Corners(left: 0, right: 0 ), bottom: Corners(left: 0, right: 0 ))
        self.chatConfig.multipleSelectionConfiguration.titleConfiguration.backgroundColor = UIColor.green
        self.updateMultilineItem()
    }

    func updateMultilineItem() {
        self.chatConfig.multipleSelectionConfiguration.persistentOptionConfiguration.backgroundColor = UIColor.yellow
        self.chatConfig.multipleSelectionConfiguration.persistentOptionConfiguration.textColor = self.colorType.textColor
        self.chatConfig.multipleSelectionConfiguration.persistentOptionConfiguration.customFont = CustomFont(font: UIFont(name: "Times New Roman", size: 9.0)!)
    }
  ```

### Default (instead of before) and Customized (instead of after)

| Default                                                                                           | Customized                                                                                           |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| <img src="../../../../../assets/images/multiline_before.png"  alt="1" width = 300px height = 450px> | <img src="../../../../../assets/images/multiline_after.png"  alt="1" width = 300px height = 450px> |

## QuickOptions
Incoming bot response can have several options to the user to choose from. Those options are not constant and will disappear after user action.

### How to customize

This kind of incoming element can be customized by overriding default implementation of the `QuickOptionConfiguration`.

```swift
func updateQuickOption() {
        self.chatConfig.incomingBotConfig.quickOptionConfig.backgroundColor = UIColor.red
}
```

### Default (instead of before) and Customized (instead of after)

| Default                                                                                           | Customized                                                                                           |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| <img src="../../../../../assets/images/quickoptions_before.png"  alt="1" width = 300px height = 450px> | <img src="../../../../../assets/images/quickoptions_after.png"  alt="1" width = 300px height = 450px> |


## Channels
- Channels are a sub type of QuickOptions. Channels are used for user escalation actions.   
- Channels may appear as response options or on article page.  
- Channels can be created on the [Bold360ai console](https://support.bold360.com/ai).

### <U>Customizing channels icons</U>
- #### By setting the icons via the Bold360ai console:
  
    <img src="../../../../../assets/images/console-channeling-icons.png"  alt="1" width = 1200px height = 1400px> 
