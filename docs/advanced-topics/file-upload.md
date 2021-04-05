---
layout: default
title: File Upload
parent: Advanced Topics
nav_order: 9
# permalink: /docs/advanced-topics/file-upload
---

# File Upload {{site.data.vars.need-work}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

---

## Overview
This article will help you to support file upload.

**You can checkout an implementation example [here](https://github.com/bold360ai/bold360-mobile-samples-ios/tree/master/BasicSample/BasicSample/ChatViewControllers/FileUpload).**
## Enable file transfer in the admin console.

1. Open [https://admin.bold360.com/](https://admin.bold360.com/) and log in.
2. Go to CHANNELS -> Chat -> Chat Windows -> Choose relevant window -> File Transfer section.
3. Check `Enable` and choose: `Agent to customer` , `Customer to agent`.

<img src="../../../assets/images/file_upload_console.png"  alt="1" width = 600px height = 900px>

<!-- ### Customize File Upload Icon
Related UI configurations are available in: [User Input Field](../../../docs/chat-configuration/ui-customization/user-input-field) -->

## Using Default File Upload Button
### Register To Delegate
```swift
override func viewDidLoad() {
    chatController.delegate = self
}
```

### Implement Delegate Upload Trigger Event
In order to be notified when the user triggered the upload, you need to implement `didClickUploadFile` in `ChatControllerDelegate`.
```swift
extension FileUploadDemoViewController: ChatControllerDelegate {
    func didClickUploadFile() {
        // present file picker
    } 
}
```

### Creating Upload Request
Once the file was picked create an upload request.

```swift
let request = UploadRequest()
request.fileName = (resources.first!).originalFilename
request.fileType = .picture
request.fileData = data
```

### Uploading Files

```swift
///  Once upload request created start upload file process.
self.chatController.uploadFile(request, progress: { (progress) in
    /// You can get progress values, to show upload progress bar.
    print("application file upload progress -> %.5f", progress)
}) { (info: FileUploadInfo!) in
    /// Call handle function on ChatController with upload file information.
    // self.uploadBtn.removeFromSuperview() uncomment for custom file upload
    self.chatController.handle(BoldEvent.fileUploaded(info))
}
```

## Using Custom File Upload Button 
To implement your own File Upload button:
Listen to the relevant chat state (.pending) by implementing `didUpdateState` in `ChatControllerDelegate`.

```swift
extension FileUploadDemoViewController: ChatControllerDelegate {
    func didUpdateState(_ event: ChatStateEvent!) {
        switch event.state {
        ///a. Listen to relevant chat state
        case .pending:
            /// b. Validate file transfer enabled on bold admin console.
            if(self.chatController.isFileTransferEnabled) {
                /// c. Add custom button.
                DispatchQueue.main.async {
                    self.uploadBtn.backgroundColor = .blue
                    self.uploadBtn.setTitle("Upload File", for: .normal)
                    self.uploadBtn.frame.size = CGSize(width: 150, height: 70)
                    self.uploadBtn.center = (self.navigationController?.visibleViewController?.view.center)!
                    self.uploadBtn.addTarget(self, action: #selector(self.uploadFile), for: .touchUpInside)
                    self.navigationController?.visibleViewController?.view.addSubview(self.uploadBtn)
                }
            }
            break
        default:
            break
        }
    }
}
```
>Note: File upload must be enabled in the admin console.
