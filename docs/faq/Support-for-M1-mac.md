---
layout: default
title: M1 Mac Support
parent: FAQ
nav_order: 4
# permalink: /docs/faq/pod-update-version
---

# M1 Mac Support

The Bold360 iOS SDK supports the new Apple Silicon architecture found on the M1 Mac machines from [v3.10.0](https://logmein-bold-mobile.github.io/bold360-mobile-docs-ios/docs/release-notes/#version-3100).
>You can now use the Xcode simulator on M1 devices.

Please make sure your Podfile is set with the right iOS version.

```swift
platform :ios, "10.0" // must be 10 and above
```

M1 compatible [sample](https://github.com/bold360ai/bold360-mobile-samples-ios/tree/master/m1Sample).

