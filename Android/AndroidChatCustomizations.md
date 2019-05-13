> This article will help you customize initial chat view UI, and instruct you how to change UI on runtime according to live data.   

## Customizing UI components 
ChatController expects to have an instance of `ChatUIProvider`. This class defines the chat UI components; Creates and customize the views used by the SDK.   
In order to change and override provided SDK implementations and customizations, one need to provide his own changed `ChatUIProvider` instance on `ChatController.Builder`. 
```java
    // creating the provider instance:
    ChatUIProvider uiProvider = new ChatUIProvider(this);
    // change the chat screen background:
    uiProvider.setChatBackground(getResources().getDrawable(R.drawable.bkg_bots));
    // ... apply more changes 

    new ChatController.Builder(getContext())
                        .chatUIProvider(appChatUIProvider)
                        ...
                        .build(...) 
```
All UI providers extends `UIProvider` abstract class. This class dictates the
3 available ways to influence the display of UI components:   
- #### Configure -   
  Enables to set values to the configuration adapter. Those values will be used on View creation for all views of 
  the specific type. In order to change provided SDK configurations, change the `configure` method implementation.
  ```kotlin
  // method signature:
  open var configure: ((Adapter) -> Adapter)

  // applying custom implementation
  chatUIProvider.chatElementsUIProvider.incomingUIProvider.configure = { adapter ->
      adapter.setAvatar(Context.resources.getDrawable(R.drawable.my_avatar))
  }
  ```
- #### Customize -   
  Set values to the customizations adapter on runtime according to the live data that should be displayed by this 
  view. Those changes will be applied to views on data bind. (Views will be created as `Configured` and will be 
  changed as `Customized` if customizations should be applied.) 
  ```kotlin
  // method signature:
  open var customize: ((Adapter, DataElement?) -> Adapter)?

  // applying custom implementation
  chatUIProvider.chatElementsUIProvider.incomingUIProvider.customize = { adapter, element ->
      element?.takeIf { it.elemScope.isLive() }?.run {
          adapter.setAvatar(Context.resources.getDrawable(R.drawable.agent_avatar))
      }
  }
  ```
- #### Override -   
    Enable developer to provide his own implementation of views.   
    Overriding is enabled in 2 main ways:
    1. By providing custom views that implement a specific interface.    
        > sample: Provide a new implementation for the feedback view by implementing the `FeedbackUIAdapter` interface.
        ```kotlin
        class MyFeedbackFactory : FeedbackUIProvider.FeedbackFactory{
            override fun create(context: Context, feedbackDisplayType: Int): FeedbackUIAdapter {
                return new FeedbackViewDummy(context);
            }
        }

        chatUIProvider.chatElementsUIProvider.incomingUIProvider.feedbackUIProvider.overrideFactory = MyFeedbackFactory()
        ```

    2. By providing a different layout resource file, in the form of `ViewInfo` object.   
        ```kotlin
        class MyUserInputProvider : ChatUIProvider.ChatUIFactory{
            override fun userInputInfo(): ViewInfo {
                return ViewInfo(R.layout.layout_name, R.id.custom_input_container)
            }
        }

        chatUIProvider.overrideFactory = MyUserInputProvider();
        ```

> The main providers that available are: IncomingElementUIProvider and OutgoingElementUIProvider 
    there's also providers for the carousel, feedback, options elements and more.   

#### Customizing your views code sample:

```java
private ChatUIProvider customiseChatUI() {
    
    final Context context = getContext();
    
    if(context == null) return null;

    ChatUIProvider uiProvider = new ChatUIProvider(context);

    uiProvider.setChatBackground(context.getResources().getDrawable(R.drawable.bkg_bots));

    IncomingElementUIProvider incomingUIProvider = uiProvider.getChatElementsUIProvider().getIncomingUIProvider();

    incomingUIProvider
            .setConfigure(new Function1<BubbleContentAdapter, BubbleContentAdapter>() {
                @Override
                public BubbleContentAdapter invoke(BubbleContentAdapter adapter) {
                    adapter.setAvatar(context.getResources().getDrawable(R.drawable.mr_chatbot));

                    return adapter;
                }
            });

    incomingUIProvider
            .setCustomize(new Function2<BubbleContentAdapter, IncomingElementModel, BubbleContentAdapter>() {
                @Override
                public BubbleContentAdapter invoke(BubbleContentAdapter adapter, IncomingElementModel element) {
                    if (element != null) {
                        StatementScope scope = element.getElemScope();
                        if (isLive(scope)) {
                            adapter.setAvatar(context.getResources().getDrawable(R.drawable.chat_channel));
                            adapter.setTextStyle(new StyleConfig(16, Color.RED));
                            adapter.setBackground(context.getResources().getDrawable(R.drawable.stars_back));
                        }
                    }
                    return adapter;
                }
            });

    incomingUIProvider.getCarouselUIProvider().setConfigure(new Function1<CarouselItemsAdapter, CarouselItemsAdapter>() {
        @Override
        public CarouselItemsAdapter invoke(CarouselItemsAdapter adapter) {
            adapter.setCardStyle(0F, 3F);
            adapter.setOptionsTextStyle(new StyleConfig(null, Color.BLUE));
            return adapter;
        }
    });

    
    incomingUIProvider.getFeedbackUIProvider().setOverrideFactory(new MyFeedbackFactory());


    OutgoingElementUIProvider outgoingUIProvider = uiProvider.getChatElementsUIProvider().getOutgoingUIProvider();

    outgoingUIProvider.setConfigure(new Function1<BubbleContentAdapter, BubbleContentAdapter>() {
        @Override
        public BubbleContentAdapter invoke(BubbleContentAdapter adapter) {
            adapter.setTextStyle(new StyleConfig(18, Color.DKGRAY, Typeface.SANS_SERIF));
            return adapter;
        }
    });

    outgoingUIProvider.setCustomize(new Function2<BubbleContentAdapter, OutgoingElementModel, BubbleContentAdapter>() {
        @Override
        public BubbleContentAdapter invoke(BubbleContentAdapter adapter, OutgoingElementModel element) {
            if (element != null) {
                StatementScope scope = element.getElemScope();
                if (isLive(scope)) {
                    adapter.setAvatar(context.getResources().getDrawable(R.drawable.avatar_foot));
                    adapter.setTextStyle(new StyleConfig(16, Color.BLUE));
                    adapter.setBackground(context.getResources().getDrawable(R.drawable.stars_back));
                }
            }
            return adapter;
        }
    });
    

    return uiProvider;
}
```

