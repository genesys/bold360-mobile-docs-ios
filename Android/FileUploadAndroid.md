<sup>[Live chat]</sup>
> This article will help you to configure your disired file upload mechanism.

## Add File Upload support:
##### The SDK provides an upload mechanism, but enables you to use your own mechanism.

### 1.  Define your file upload trigger. 
- **Use SDK trigger.**  
The SDK provides an upload trigger which will be positioned inside the input field. Trigger icon can be changed via ui provider configuration. 
    ```java
    chatUIProvider.getUserInputUIProvider().setUploadImage(...)
    ```
- **Use your own trigger.**   
To do that, disable the display of the SDK trriger. <sub>(By default set to `true`)</sub>
    ```java
    chatUIProvider.getUserInputUIProvider().showUpload(false)
    ```

### 2. Define your file upload mechanisem 
- **Use SDKs file uploader**
When user selects the file to upload use `chatController.uploadFile` method, to upload the file via SDK uploader. Upload indication will be added to the chat automatically.
```kotlin
//... user selected the file to upload

chatController.uploadFile(fileUri){ uploadResults ->
    //.... recieve the UploadResults and do whatever 
} 
```

- **Use your own file uploader**
When user selects the file to upload use your uploader to upload the selected file. In order to have the upload indication in the chat, after upload completed you should pass event to the `chatController` with the upload results as UploadResults object.
```kotlin
//... user selected the file to upload

MyUploader.uploadFile(fileUri){
    //.... do upload stuff

    // pass results to the SDK 
    val uploadResults = UploadResults(uploadedUri, error)
    chatController.handleEvent(Upload, new UploadEvent(uploadResult));
}
```

### Checking Upload feature availability:

In order to check if the file upload feature is available for the current scope, use `chatController.isEnable(ChatFeatures)` method.

```kotlin
chatController.isEnabled(ChatFeatures.FileUploadFtr);
```