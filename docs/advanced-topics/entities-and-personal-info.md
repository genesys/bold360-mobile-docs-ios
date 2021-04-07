---
layout: default
title: Chat Entities and Personal information
parent: Advanced Topics
nav_order: 9
# permalink: /docs/advanced-topics/entities-and-personal-info
---

# Chat Entities and Personal information {{site.data.vars.need-work}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc .mb-0}

---

## Overview
The SDK provides the bridge to pass user specific information to the BOT on chat start and while processing responses to user queries, which demands more details from the user, during the chat.
{: .overview}

There are 2 types of personal information

<a id="initentities"/>
## Initialization entities

Predefined data values that can be provided for the whole chat session and are not being changed dynamically (exp: ids, keys, etc).

### How To use

``` swift
// Creating Initialization Entities:
botAccount.initializationEntities = ["someKey1": "someValue1", "someKey1": "someValue2"]
`````

## Missing entites and Personal information

Dynamically required details. Depends on user query and the article the Bot responses with.
articles of this sort are configured with a Bold360ai provider which formats the response to contain the entities tag pattern, that are being recognized by the SDK as the needed information (please contect out support for farther information about the [Bold360AI provider](https://support.bold360.com/bold360/help/how-do-i-create-a-csv-provider)).