---
layout: default
title: Release Notes
nav_order: 5
toc_float: true
  
---

# Release Notes
{: .no_toc }

---

{: .det}
<details open markdown="block">

<summary> Version 3.13.0 </summary>

# Version 3.13.0
Release date: September 12, 2021
{: .overview}

- Context attachment on every request.
  
### Fixes

- Read more fix.
- Fixing issue when the element is not found in the ChatRecorder.
- Support extra data while starting live chat.
- Increasing the default title size for the read more articles.
- Upload icon configurable.
- Fix placeholder hint for the input field was not displayed after the message was auto-corrected.
- Minor bug fixes.

---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det}
<details close markdown="block">

<summary> Version 3.12.3 </summary>

# Version 3.12.3
Release date: August 4, 2021
{: .overview}

### Fixes

- Adding Right-to-Left Support.
- Handle Encoding issue for iOS version <= iOS 13.5.

---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det}
<details close markdown="block">

<summary> Version 3.12.2 </summary>

# Version 3.12.2
Release date: July 13, 2021
{: .overview}

### Fixes

- Passing context on channeling request.

---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det}
<details close markdown="block">

<summary> Version 3.12.1 </summary>

# Version 3.12.1
Release date: July 8, 2021
{: .overview}

### Fixes

- Handle positive feedback when there are no channels.

---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det}
<details close markdown="block">

<summary> Version 3.12.0 </summary>

# Version 3.12.0
Release date: July 7, 2021
{: .overview}
  
- Adding the ability for the end user to update his email for the transcript while in chat with an agent.
- Adding the ability to remove the checkmarks from the bottom of bot and agent answers.
- Adding auto messages support.
 
### Fixes

- Images and videos don't fit screen size.
- Chat bar appears before Pre Chat.

---

To get latest version run:

```ruby
pod update 
```
</details>


{: .det}
<details close markdown="block">

<summary> Version 3.11.1 </summary>

# Version 3.11.1
Release date: June 24, 2021
{: .overview}
  
### Fixes

- Instant feedback shows all feedback options.
 
---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.11.0 </summary>

# Version 3.11.0
Release date: June 2, 2021
{: .overview}

- Optimization of podspec's dependencies by mentioning pods version number.
  
---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.10.0 </summary>

# Version 3.10.0
Release date: May 12, 2021
{: .overview}

- [Changed Pod Specs fetching from Bintray to S3](https://logmein-bold-mobile.github.io/bold360-mobile-docs-ios/docs/faq/JCenter-deprecation/).
- [Avatar variant for Dark Mode can be configured](https://logmein-bold-mobile.github.io/bold360-mobile-docs-ios/docs/chat-configuration/ui-customization/dark-mode/#avatar-dynamic-image-suuport).
- Improved `ReadMore` content Loading.

### Fixes

- Embedded Youtube videos can be played.
- Live chat forms displayed with a unified font across the entire form.
  
---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.9.1 </summary>

# Version 3.9.1
Release date: March 16, 2021
{: .overview}

- Passing API key as parameter on extra data request.

### Fixes

- Post chat form row heights.
  
---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.9.0 </summary>

# Version 3.9.0
Release date: March 4, 2021
{: .overview}

- Improve the configuration objects hierarchy.
- Support hyperlink colors.
- Support background images for chat elements (incoming, outgoing).
- Support disabling live chat bar via `chatBarConfiguration`.
- Add borders configuration on `searchViewConfig`.
- Support avatar image size.
- Added border configuration to the search bar.
- Full support for dark mode.


### Fixes

- Fix maximum length.
- Fix custom font assigment.
- Fix displaying of correct avatar size.


#### Breaking Changes

- We made few significant cahnges in the `Configuration` structure so recommended to follow the updated documentation: [UI Customization](https://github.com/Logmein-Bold-Mobile/bold360-mobile-docs-ios/blob/master/ChatViewConfigurationIOS.md) 

---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.12 </summary>

# Version 3.8.12
Release date: January 20, 2021
{: .overview}

### Fixes 

- Fix phone keyboard is hiding the text bar.

---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.11 </summary>

# Version 3.8.11
Release date: January 11, 2021
{: .overview}

- Attached Pre-chat language selection to take effect.

### Fixes

- Fix crash on swiping back in support center.
- Fix back on controllers which are not support center.


---

To get latest version run:

```ruby
pod update 
```
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.10 </summary>

# Version 3.8.10

* [BLD-42332] Fix chat header configuration issue.

#### Explanation for MultipleSelectionConfiguration 

> As mentioned on v3.8.7

`MultipleSelectionConfiguration` was added to `ChatConfiguration`  and replaced direct access to 
`IncomingBotConfiguration.PersistentOptionConfiguration` and `IncomingBotConfiguration.IncomingBotTitleConfiguration`.

To change properties of the persistent options messages now we use:


``` swift

chatController.viewConfiguration.multipleSelectionConfiguration.avatar = UIImage(named: <IMAGE_NAME>)

chatController.viewConfiguration.multipleSelectionConfiguration.persistentOptionConfiguration.backgroundColor = UIColor.purple

chatController.viewConfiguration.multipleSelectionConfiguration.titleConfiguration.backgroundColor = UIColor.yellow

```

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.9 </summary>


# Version 3.8.9

## [BLD-41686] Fix live chat forms override issue.

#### Breaking Changes

To dimiss live custom form.

Before: 

```swift
self.delegate.didDismissForm(self)
```

After: 

```swift
self.delegate.submitForm(nil)
```

> Smaple

https://github.com/bold360ai/bold360-mobile-samples-ios/commit/19e5783f1f3f675da70b01305bf60bd30b5c7390#diff-bdfadc172ed44c581cba3dd99591944896dea03b1c303fd87a9ac1210c597cc3R61

## [BLD-41751] Support custom font on read more view controller.

* To set custom font use following documantion: https://developer.bold360.com/help/EN/Bold360API/Bold360API/ChatViewConfigurationIOS.html

* apple documentation for adding a custom font to a project: https://developer.apple.com/documentation/uikit/text_display_and_fonts/adding_a_custom_font_to_your_app

#### Breaking Changes

Before:

```swift
config.readMoreViewConfig.font = {}
```

After:

```swift
config.readMoreViewConfig.customFont = {}
// To set UIFont use
config.readMoreViewConfig.customFont.font = {}
```

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.8 </summary>

# Version 3.8.8

* [BLD-41504] Fix Uploading to Appstore issue - update SDK version number to three non-negative integers.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.7 </summary>

# Version 3.8.7

* [BLD-40506] Support Xcode12.
* [BLD-40456] Support read more screen configuration.
* [BLD-40396] Adding the ability to set the corner radius of the message bubble edges.
* [BLD-41093] FIX channel cell constraint issue.
* [BLD-41093] FIX forms contraints.

### Breaking Changes

`MultipleSelectionConfiguration` was added to `ChatConfiguration`  and replaced direct access to 
`IncomingBotConfiguration.PersistentOptionConfiguration` and `IncomingBotConfiguration.IncomingBotTitleConfiguration`.

To change properties of the persistent options messages now we use:


``` swift

chatController.viewConfiguration.multipleSelectionConfiguration.avatar = UIImage(named: <IMAGE_NAME>)

chatController.viewConfiguration.multipleSelectionConfiguration.persistentOptionConfiguration.backgroundColor = UIColor.purple

chatController.viewConfiguration.multipleSelectionConfiguration.titleConfiguration.backgroundColor = UIColor.yellow

```

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.6 </summary>

# Version 3.8.6

* [BLD-39079] Fixed crash on slow connection.
* [BLD-39394] remove import warnings (no warnings on SDK).

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.5 </summary>

# Version 3.8.5

* [BLD-40398] Fixed bottom constraint when chat view controller is in tab bar controller.
* [BLD-40398] Fixed height of search view after submitting multiline query.
* [BLD-40136] Adding persistenOption font to html + supporting bubble background color and text color.
* [BLD-40398] Fixed bottom constraints - connected vertically 2 major views.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.4 </summary>

# Version 3.8.4

* [BLD-37924] Fixed method's signature and category name.
* [BLD-40137] Enabling the change of the sendButton color.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.3 </summary>

# Version 3.8.3

* [BLD-39342] Fixing issue with changing searchView background color
* [BLD-39421] Fixed bug with postback text presented instead of the text
* [BLD-38006] Changing avatar image size
* [BLD-38006] Changing avatar position for IncomingBotConfiguration to buttom left
* [BLD-14733] relocate autoMessage indicator to remote chat element - part1 (part2 not ready yet)
* [BLD-39500] fix read more articles text color
* [BLD-39343] Adding datestamp font to ChatViewConfiguration
* [BLD-39500] quick options font separation

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.2 </summary>

# Version 3.8.2

* Fix - Conversation won't work on production environment.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.1 </summary>

# Version 3.8.1

* Dark Mode + chat configuration optimizations.
* Welcome message optimizations.
* Bug fixes including leaks handling.
* Warnings resolve.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.8.0 </summary>

# Version 3.8.0

* Instant Feedback support, includes history.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.7.0 </summary>

# Version 3.7.0

* Voice-to-voice experience. The SDK has an option to read out Bot answers if the question was asked though dictation by voice.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.16 </summary>

# Version 3.6.16

* [BLD-36658] Added support for linked article with context.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.15 </summary>

# Version 3.6.15

* Broken UI Arrangement Constraints on the default pre-chat form [BLD-35341] -> another fix
* File upload is not working in the EU accounts [BLD-35473] -> another fix for minor bug

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.14 </summary>

# Version 3.6.14

* Set initialized entities [BLD-25819]
* Broken UI Arrangement Constraints on the default pre-chat form [BLD-35341]
* Remove remaining references of UIWebView from iOS harmony SDK [BLD-35340]
* File upload is not working in the EU accounts [BLD-35473]

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.13 </summary>

# Version 3.6.13

* Replace UIWebView with WKWebView in the iOS Harmony SDK [BLD-33735]
* Agent messages are not presented in full length [BLD-34008]
* Mobile SDK - Welcome message increase engagement but not interactions [BLD-34730]

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.11 </summary>

# Version 3.6.11

> **New**
* Added the ability to presented Initial question in the chat for the end user [BLD-28324].
* Added the ability to configure multi line elemnt [BLD-33529].
* Added the ability to configure carousel [BLD-33529].

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.10 </summary>

# Version 3.6.10

> **New**
* Added the ability to customize the UI for chat forms title.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.9 </summary>

# Version 3.6.9

> **New**
* Enabled multi line text on post chat form title.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.8 </summary>

# Version 3.6.8

> **New**
* Enabled multi line text for “Drop Down” custom field in post chat.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.7 </summary>

# Version 3.6.7

> **New**
* Autosizing labels - “End Chat” button
* Quick buttons in welcome article are presented if FAQ's are presented as well.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.6 </summary>

# Version 3.6.6

> **New**
* On presenting post chat options getting "(Not Available)"
* Mobile SDK should not send html code

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.5 </summary>

# Version 3.6.5

> **New**
* Fix open custom URL in channeling is not working
* Adding 1.5 seconds before escalating on highValuePushChat
* Fixed ReadMore crash when fetching json in NRReadMoreViewController
* Fixing Overriding BrandedForm by changing the delegate from ChatController to ChatViewController
* Remove the feedback buttons from the bottom of expanded articles

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.4 </summary>

# Version 3.6.4

> **New**
- Fixed an issue that prevented presenting custom made pre-and post-chat forms. This was caused by the inability to override the BrandedForm type variables. You can find more information on how to override the default pre- and post chat forms look and feel in https://developer.bold360.com/help/EN/Bold360API/Bold360API/PresentFormsIOS.html

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.2 </summary>

# Version 3.6.2

> **New**
- Fixed JSON parsing with special characters.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.1 </summary>

# Version 3.6.1

> **New**
- Support Chat Engagement (Chat element injection).
- Support Create Initialization Entities.
- Fixed a bug with multi line fields on forms.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.6.0 </summary>

# Version 3.6.0

> **New**
- HandOver improvment and base implementation.
- Supporting default forms (Prechat, Postchat, Unavailable).
- Support end chat enable property.
- Fixed continuity provider.
- Fixed a bug with context when using support center on search sdk.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.5.5 </summary>

# Version 3.5.5

> **New**
- Chat bar attachment (Agent information & End chat button).
- Amplitude event tracking enabled.
- Added Placeholder hint for input field.
- Minor file upload bug fixes.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.5.4 </summary>

# Version 3.5.4

> **New**
- Passing account data when escalating from botChat to liveAgent.
- Predefined pre chat form with extra data.
- Minor bug fixes.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.5.2 </summary>

# Version 3.5.2

This release contains the following bold360ai iOS SDK Features/ Fixes:

```diff
! Breaking Changes

Passing `LiveAccount` data is done using `account.extraData` instead of `account.info`
```

> **New**
- Support iOS 13.
- Standalone autocomplete feature. 

> **Bot Chat related**
- Autocomplete is supported.

> **Live Chat related:**
- Bot conversation transcript is sent to live console.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.4.8 </summary>

# Version 3.4.8

This release contains the following bold360ai iOS SDK Features/ Fixes:

```diff
! Breaking Changes

`HistoryProvider` was deprecated and should not be used. 
Use full implementation of `ChatElementDelegate` instead.
```
> **Bot Chat related**
- Welcome message customization support by integrating app.

> **Live Chat related:**
- Chat availability check support.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.4.7 </summary>

# Version 3.4.7

This release contains the following bold360ai iOS SDK Features/ Fixes:

* Support File Upload - Live Chat.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.4.0 </summary>

# Version 3.4.0

Release date: April 28, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:
 
* Support History
* Support restore chat

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.3.9 </summary>

# Version 3.3.9

Release date: April 17, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:
 
* Support all chat view controller attachments (modal, navigation, child vc...).
* Framework stabilization.
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.3.2 </summary>

# Version 3.3.2

Release date: April 14, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:

* Icon Positioning

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.3.1 </summary>

# Version 3.3.1

Release date: March 31, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:

* Support skip `prechat` including extra params.
* Support queue position component on live chat with agent.

>Note: This version contains **breaking changes**

* Class name `AccountParams` was replaced by `BotAccount`.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.3.0 </summary>

# Version 3.3.0

Release date: March 14, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:

* File upload API.
* Fixed article view presentation bug.
* Native typing indication by design.
* New default bot/ agent icons.

</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.2.1 </summary>

# Version 3.2.1

Release date: February 14, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:

* Error Handling Support.
* Typing indication Support.
* Minor search view input fixes.
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.2.0 </summary>

# Version 3.2.0

Release date: January 30, 2019

This release contains the following bold360ai iOS SDK Features:

* Lifecycle State Events.
* Chat forms display. 
     - SDK enables forms override and display by app side.
     - SDK provides default implementation only for the `preChat` form.
* Chat UI Customizations.
* Start Directly with Live Agent (No Bot first).
</details>

{: .det .mt-2}
<details close markdown="block">

<summary> Version 3.0.0 </summary>

# Version 3.0.0

Release date: December 5, 2018

This release contains the following Bold360 iOS SDK Features:

* Request and submit answers to pre-chat
* Identify customers
* Send and receive chat messages
* Bot Support
* Feedback & Escalation 

 
