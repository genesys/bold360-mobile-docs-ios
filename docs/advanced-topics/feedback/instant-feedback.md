---
layout: default
title: Instant Feedback
parent: Feedback
grand_parent: Advanced Topics
nav_order: 1
# permalink: /docs/advanced-topics/feedback/instant-feedback
---

# Instant Feedback<sub>(Feedback Per Article)</sub>
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview  
Response specific feedback, provides the tool to review specific content quality and relevancy.   
When enabled, every AI response will be followed with a feedback UI element, as long as it is valid for feedback submission.
{: .overview }

---

## Instant feedback Configurations
The feedback UI component is configurable, by bold360ai console configurations.

### Admin console configurations
{: .mb-4 }
- **Feature availability**   
    {: .fs-4 .fw-300 }
  Feedback feature can be truned on/off on the admin console per widget specific configurations to your account and knowledge base.

  <details close markdown="block">
  <summary>Feedback status settings</summary>
  ![]({{'/assets/images/instant-feedback-console.png' | relative_url}})
  {: image-70 }
  </details> {: .mb-6 }

- **Feedback display type** 
    {: .fs-4 .fw-300 }
    There are 2 predefined display options for the feedback component, that can be selected on the admin console, textual and iconic.

    <details close markdown="block">
    <summary>Feedback display type settings</summary>
    ![]({{'/assets/images/feedback-display-type.png' | relative_url}})
    {: image-70 }
    </details> {: .mb-4 }

    The Bold SDK provides default implementations for both types.

- **Textual configurations**
  
  On the admin console you can configure the messages content that are presented to the user over feedback flow. 

  ![]({{'/assets/images/feedback-texts.png' | relative_url}})
  {: image-70}
 
---
