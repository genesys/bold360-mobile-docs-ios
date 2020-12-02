> Note: From v3.8.7 and above follow below steps.

# Steps to get latest version

1. Your Xcpode project have to support iOS10 and above.
2. Inside Podfile before running `pod update` make sure you have

```ruby
platform :ios, "10.0" # make sure it's 10.0 and above.
```

3. After running pod update validate inside terminal that the latest version was installed succesfully.
