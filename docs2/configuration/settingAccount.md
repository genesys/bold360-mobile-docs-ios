---
layout: default
title: Setting Account
parent: Chat Configuration
nav_order: 1
---


# Setting Account
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Bot Account
{: .d-inline-block }

``` swift
func createAccount() -> BotAccount {
        let account = BotAccount()
        account.account = "ACCOUNT"
        account.knowledgeBase = "KNOWLEDGE_BASE"
        account.apiKey = "API_KEY"
        
        return account;
    }
```

## Live Account

``` swift
func createAccount() -> BotAccount {
        let account = LiveAccount()
        account.apiKey = {API_KEY}

        return account;
    }
```