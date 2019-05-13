> This article will help you subscribe and receive notifications from the chat controller.
## Subscribing to notifications
ChatController provides a notifications service. You can subscribe to this service by indicating on what notifications you want to be notified of.
```java
chatController.subscribeNotifications(NotifiableImpl, notification, notification,...)
```
**Currently we support the following notifications:**
- ChatNotifications.PostChatFormSubmissionResults
- ChatNotifications.UnavailabilityFormSubmissionResults
- TrackingEvent.OperatorTyping

In order to subscribe to notifications you need to implement the `Notifiable` interface, and pass it on the subscription request.
```java
// Implementing the Notifiable interface:
class NotificationsReceiver implements Notifiable {
    @Override
    public void onNotify(@NotNull Notification notification, @NotNull DispatchContinuation dispatcher) {
        switch (notification.getNotification()) {
            case ChatNotifications.PostChatFormSubmissionResults:
            case ChatNotifications.UnavailabilityFormSubmissionResults:
                FormResults results = (FormResults) notification.getData();
                if(results != null) {
                    Log.i(My_TAG, "Got notified for form results for form: " +
                            results.getData() +
                            (results.getError() != null ? (", with error: " + results.getError()):""));
                } else {
                   Log.w(My_TAG, "Got notified for form results but results are null");
                }
                break;
        }
    }
}

// declaring notifications handler as a member: 
private Notifiable notificationsReceiver = new NotificationsReceiver();

// subscribing to notifications:
chatController.subscribeNotifications(notificationsReceiver, ChatNotifications.PostChatFormSubmissionResults,
                ChatNotifications.UnavailabilityFormSubmissionResults);
```
Once the notification are no longer needed or you want to release services, call to unsubscribe.
```java
chatController.unsubscribeNotifications(notificationsReceiver);
```