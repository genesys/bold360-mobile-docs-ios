---
layout: default
title: Chat Forms
parent: Chat Configuration
nav_order: 5
# permalink: /docs/chat-configuration/tracking-events/forms
---

# Live chat forms
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
The SDK provides un-configurable implementation of the following forms:   
- **PreChat** - Lets the user set some configurations to the up coming chat session, and provide some user details that will be available to the agent once the chat will start.

- **PostChat** - Uses for email setting for chat transcript delivery and as a survey form to give the user the ability to rate and give feedback about the ending chat conduction.

- **Unavailable** - In case the chat can't be performed at the moment, the user can provide his email, to be contacted later.

- **Email** - Uses for submitting an email address, mid-chat, for the chat transcript delivery when the chat ends.
{: .overview}

**You can checkout an implementation example [here](https://github.com/bold360ai/bold360-mobile-samples-ios/blob/master/BasicSample/BasicSample/ChatViewControllers/BoldFormViewController.swift).**

Each form construct of dynamic list of fields according to admin console configurations set for the account's chat window.  
Each field has properties which defines its type and behavior, among them: field type, isRequired, and if available, its current value.

![]({{'/assets/images/console-chat-forms.png' | relative_url}})
{: .image-70}

---

## How to Customize
`ChatConfiguration` exposes the formConfiguration object which can be used to customize the UI for the SDK default forms.

### Set BoldForm title configuration
To update BoldForm title UI configuration:

```swift
chatController.viewConfiguration.formConfiguration.titleConfig.backgroundColor = UIColor.yellow
chatController.viewConfiguration.formConfiguration.titleConfig.textColor = UIColor.red
chatController.viewConfiguration.formConfiguration.titleConfig.font = UIFont(name: "Times New Roman", size: 29.0)!
```

## How to override
The SDK provides a way for the hosting App to use self customed form implementations, and display them when needed.

Follow the next steps to use your implementation for some / All available forms.

### Custom Form Implementation

### 1. Implement `ChatControllerDelegate`.

```swift
// Declare delegate
ViewController: ChatControllerDelegate
// Set controller delegate
self.chatController.delegate = self
```

### 2. Implement `shouldPresent` delegate method.

>`BrandedForm` - Contains all the data needed to present the form: fields, branding map, etc...

>`completionHandler` - The form completion block. 

```swift
func shouldPresent(_ form: BrandedForm!, handler completionHandler: (((UIViewController & BoldForm)?) -> Void)!) {
    if (completionHandler != nil) {
        if form.form?.type == BCFormTypePostChat {
            let postVC = self.storyboard?.instantiateViewController(withIdentifier: "postChat") as! PostChatViewController
            postVC.form = form
            completionHandler(postVC)
        } else if (form.form?.type == BCFormTypeUnavailable) {
            let unavailableVC = self.storyboard?.instantiateViewController(withIdentifier: "unavailable") as! UnavailableViewController
            unavailableVC.form = form
            completionHandler(unavailableVC)
        } else {
            completionHandler(nil)
        }
    }
}
```

### Form Lifecycle

To dismiss form, end user should submit form or tap on back button.

>Note: bold360ai SDK must be notified about the dismiss reason.

### Implement `BoldForm`.

```swift
// Declare delegate
FormName: BoldForm
// Implement property
var delegate: BoldFormDelegate! {
    get {
        return formDelegate
    }
    set(delegate) {
        formDelegate = delegate
    }
}
```

>Form Submission 

*Please Notify When Form Submit Button Was Tapped*

```swift
self.delegate.submitForm(brandedForm)
```

>Form Cancelation

*Please Notify When Back Button Was Tapped.* 

```swift
self.delegate.didDismissForm(nil)
```

## How to skip Prechat Form

In order to skip the prechat, add the following implementation:

```swift
let account = LiveAccount()
account.apiKey = "{YOUR_API_KEY}"
account.shouldDisablePreChat = skipPrechat.isOn
```

### Adding extra data

When skipping prechat is used, you can provide some details regarding the account by using the accounts `extraData`

```swift
account.extraData.name = "{NAME}"
account.extraData.department = "{DEPARTMENT_ID}"

or

account.extraData.setExtraParams(["department":"{DEPARTMENT_ID}","name": "{NAME}", "address": "{ADDRESS}"])
```

[see available fields here](https://developer.bold360.com/help/EN/Bold360API/Bold360API/c_bc_sdk_ios_core_integration_chat_session.html)

## Known Issues

1. The default SDK forms UI customization enables editing only the title's UI.
2. The `BoldFormConfiguration` object on the `ChatConfiguration` exposes the `multiSelectElementConfig` property which does nothing.
