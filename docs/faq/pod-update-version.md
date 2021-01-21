---
layout: default
title: Update SDK to Latest Version
parent: FAQ
nav_order: 2
# permalink: /docs/faq/pod-update-version
---

# Update SDK to Latest Version
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Steps to successful update:

* Clear pods from you project.

```ruby
cd PROJECT_FILE
pod deintegrate
```

* Make sure under `Podfile` deployment target set to `10.0` and above.

```ruby
platform :ios, '10.0'
```

* Validate that relevant `source` is mantioned on Podfile.

```ruby
source 'https://github.com/nanorepsdk/NRSDK-specs.git'
```

* Validate the SDK name is written properly.

```ruby
pod 'Bold360AI'
```

* Run the `update` command.

```ruby
pod update # not pod install
```

## Right `Podfile` Example

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
