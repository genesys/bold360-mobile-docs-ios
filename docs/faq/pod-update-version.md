---
layout: default
title: "pod update" doesn't update to latest version
parent: FAQ
nav_order: 1
# permalink: /docs/faq/pod-update-version
---

# Update SDK to Latest Version.
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Steps to successful update:

1. Clear pods from you project.

```ruby
cd PROJECT_FILE
pod deintegrate
```

2. Make sure under `Podfile` deployment target set to `10.0` and above.

```ruby
platform :ios, '10.0'
```

3. Validate that relevant `source` is mantioned on Podfile.

```ruby
source 'https://github.com/nanorepsdk/NRSDK-specs.git'
```

4. Validate the SDK name is written properly.

```ruby
pod 'Bold360AI'
```

5. Run the `update` command.

```ruby
pod update # not pod install
```

## How the `Podfile` should look at the end?

```ruby
platform :ios, "10.0"
use_frameworks!

install! 'cocoapods',
         :deterministic_uuids => false

source 'https://github.com/nanorepsdk/NRSDK-specs.git'
source 'https://github.com/CocoaPods/Specs'

target 'PROJECT_NAME' do
     pod 'Bold360AI'
end
```
