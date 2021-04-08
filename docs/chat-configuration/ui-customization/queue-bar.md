---
layout: default
title: Queue Bar
parent: UI Customization
grand_parent: Chat Configuration 
# permalink: /docs/chat-configuration/ui-customization/queue-bar
nav_order: 7
---

# Queue Bar 
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
On live chat creation, if all available agents are occupied to their capacity, the chat will be added to a waiting queue.
The chat will be promoted in the queue, until position 0, indicating that the chat is no longer in the queue and is waiting for an agent acceptance.
{: .overview}

While in [queue state]({{'/docs/chat-configuration/tracking-events/chat-lifecycle#inqueue' | relative_url}}), the user can choose to cancel the chat.   
Chat canceling is handled as unavailable, and the user will be presented with unavailability form or message, according to the chat window configurations. 

![]({{'/assets/images/console-unavailability.png' | relative_url}})   
{: .image-70}

---

## Admin configurations
The following should be enabled, in order to have chats queue support, and to be notified of chat position in queue.

1. Automatic distribution  
   {: .light-title}
   ![]({{'/assets/images/ADC-console.png' | relative_url}})
   {: .image-70}

2. Show queue position
  {: .light-title}
  Check this option in order to be notified of user position in queue.

---

<img src="../../../../assets/images/queue_before.png"  alt="1" width = 300px height = 450px> 

## Known Limitation

This view is not configurable.