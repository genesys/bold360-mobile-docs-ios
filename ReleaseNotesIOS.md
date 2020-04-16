# Version 3.6.8

> **New**
* Enabled multi line text for “Drop Down” custom field in post chat 

# Version 3.6.7

> **New**
* Autosizing labels - “End Chat” button
* Quick buttons in welcome article are presented if FAQ's are presented as well.

# Version 3.6.6

> **New**
* On presenting post chat options getting "(Not Available)"
* Mobile SDK should not send html code

# Version 3.6.5

> **New**
* Fix open custom URL in channeling is not working
* Adding 1.5 seconds before escalating on highValuePushChat
* Fixed ReadMore crash when fetching json in NRReadMoreViewController
* Fixing Overriding BrandedForm by changing the delegate from ChatController to ChatViewController
* Remove the feedback buttons from the bottom of expanded articles

# Version 3.6.4

> **New**
- Fixed an issue that prevented presenting custom made pre-and post-chat forms. This was caused by the inability to override the BrandedForm type variables. You can find more information on how to override the default pre- and post chat forms look and feel in https://developer.bold360.com/help/EN/Bold360API/Bold360API/PresentFormsIOS.html

# Version 3.6.2

> **New**
- Fixed JSON parsing with special characters.

# Version 3.6.1

> **New**
- Support Chat Engagement (Chat element injection).
- Support Create Initialization Entities.
- Fixed a bug with multi line fields on forms.

# Version 3.6.0

> **New**
- HandOver improvment and base implementation.
- Supporting default forms (Prechat, Postchat, Unavailable).
- Support end chat enable property.
- Fixed continuity provider.
- Fixed a bug with context when using support center on search sdk.


# Version 3.5.5

> **New**
- Chat bar attachment (Agent information & End chat button).
- Amplitude event tracking enabled.
- Added Placeholder hint for input field.
- Minor file upload bug fixes.

# Version 3.5.4

> **New**
- Passing account data when escalating from botChat to liveAgent.
- Predefined pre chat form with extra data.
- Minor bug fixes.

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

# Version 3.4.7

This release contains the following bold360ai iOS SDK Features/ Fixes:

* Support File Upload - Live Chat.

# Version 3.4.0

Release date: April 28, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:
 
* Support History
* Support restore chat

# Version 3.3.9

Release date: April 17, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:
 
* Support all chat view controller attachments (modal, navigation, child vc...).
* Framework stabilization.

# Version 3.3.2

Release date: April 14, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:

* Icon Positioning

# Version 3.3.1

Release date: March 31, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:

* Support skip `prechat` including extra params.
* Support queue position component on live chat with agent.

>Note: This version contains **breaking changes**

* Class name `AccountParams` was replaced by `BotAccount`.

# Version 3.3.0

Release date: March 14, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:

* File upload API.
* Fixed article view presentation bug.
* Native typing indication by design.
* New default bot/ agent icons.

# Version 3.2.1

Release date: February 14, 2019

This release contains the following bold360ai iOS SDK Features/ Fixes:

* Error Handling Support.
* Typing indication Support.
* Minor search view input fixes.

# Version 3.2.0

Release date: January 30, 2019

This release contains the following bold360ai iOS SDK Features:

* Lifecycle State Events.
* Chat forms display. 
     - SDK enables forms override and display by app side.
     - SDK provides default implementation only for the `preChat` form.
* Chat UI Customizations.
* Start Directly with Live Agent (No Bot first).

# Version 3.0.0

Release date: December 5, 2018

This release contains the following Bold360 iOS SDK Features:

* Request and submit answers to pre-chat
* Identify customers
* Send and receive chat messages
* Bot Support
* Feedback & Escalation 
