---
layout: default
title: Standalone
parent: Autocomplete
grand_parent: Advanced Topics
nav_order: 2
# permalink: /docs/advanced-topics/autocomplete/standalone
---

# Standalone autocomplete component
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
The SDK provides a standalone AI autocomplete component, called `SearchViewController`.   
This UI component can connect to a bot AI source, for autocomplete suggestions fetching.
{: .overview }

**You can checkout an implementation example [here](https://github.com/bold360ai/bold360-mobile-samples-ios/blob/master/BasicSample/BasicSample/ChatViewControllers/AutoCompleteViewController.swift).**

---

## Setup

1. Override `prepare` to get the controller of type `SearchViewController`.
```swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
    // Get the new view controller using segue.destination.
    // Pass the selected object to the new view controller.
    guard let controller = segue.destination as? SearchViewController else {
        return
    }
}
```

2. Set the controller account.
```swift
controller.account = self.createAccount()
// Set relevant account params
func createAccount() -> Account {
        let account = BotAccount()
        account.account = ""
        account.knowledgeBase = ""
        return account
}
```

## UI configurations

### Controller UI Configuration

#### Component display  

Update suggestions open direction by setting `autoCompleteOnTop`.
```swift
 controller.autoCompleteOnTop = true
```
#### Component UI  

```swift
controller.view.layer.borderColor = UIColor.red.cgColor
controller.view.layer.borderWidth = 2.0
```
### Suggestions UI Configuration

The suggestions UI configurations are defined by `AutoCompleteConfiguration`.
In order to change the default UI look, create instance of `AutoCompleteConfiguration`, configure its properties as needed and set it to `SearchViewController.SearchViewConfiguration.autoCompleteConfiguration` propety.

```swift
let config = SearchViewConfiguration()
let autoCompleteConfig = AutoCompleteConfiguration()
autoCompleteConfig.textColor = UIColor.red
config.autoCompleteConfiguration = autoCompleteConfig
controller.configuration = config
```

### Listening to events
{: mt-10}   
Optional, set delegates to the events you would like to be notified of.

1. Register to controller's delegate `AutoCompletePickDelegate`.
```swift
controller.articlePickDelegate = self
```
2. Implement `AutoCompletePickDelegate`.
```swift
extension AutoCompleteViewController: AutoCompletePickDelegate {
   func didSelectSuggestion(_ articleId: String, query: String) {     
   }
   func didFetchArticle(_ article: NRConversationalResponse) {     
   }
   func didFailToFetchAnArticleWithError(_ error: Error) {
   }
}
```

> Note: at the end `prepare` method should look like below:
```swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
    // Get the new view controller using segue.destination.
    // Pass the selected object to the new view controller.
    guard let controller = segue.destination as? SearchViewController else {
        return
    }
    if segue.identifier == "Top" {
        controller.autoCompleteOnTop = true
    }
    controller.articlePickDelegate = self
    controller.account = self.account
    controller.view.layer.borderColor = UIColor.red.cgColor
    controller.view.layer.borderWidth = 2.0
}
```

---