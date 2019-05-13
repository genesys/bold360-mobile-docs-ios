> This article will help you to upload file with your own implementation.

### Custom File Upload Implementation

1. Implement `didClickUploadFile` optional delegate function.

>`FileUploadInfo` - The info of uploaded file, should be provided by app.

>`completionHandler` - File upload completion handler. 

```swift
extension FileUploadDemoViewController: ChatControllerDelegate {
    func didClickUploadFile(completionHandler: ((FileUploadInfo?) -> Void)!) {
        // Save the handler until file upload process ends
        self.uploadCompletionHandler = completionHandler;
        // Upload file
        // Your own upload implementation.
        self.uploadFile("someFile")
    }
}
```

2. Once file upload process was end call the handler with relevant information.

```swift
let infoFile = FileUploadInfo()
// if file upload was successful
infoFile.fileDescription = "file was uploaded, http://link.to.file"
// else if you had a failure 
let error = NSError(domain: "", code: 0, userInfo: [NSLocalizedDescriptionKey:"file failed to upload"])
infoFile.error = error
// send the info file result by handler.
self.uploadCompletionHandler(infoFile)
```