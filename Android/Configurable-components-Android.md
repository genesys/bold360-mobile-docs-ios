## Chat components 
#### Bold360ai SDK enables developers to configure SDK provided components UI or override components and using custom implementations.   

## Incoming chat component

### Readmore indication design
Readmore indication is configurable only.   
Available configurations are defined in `ReadmoreAdapter`.   
Readmore configurations can be changed by setting a configure method to `readmoreUIProvider` defined in `IncomingElementUIProvider`.
```java
IncomingElementUIProvider incomingUIProvider = uiProvider.getChatElementsUIProvider().getIncomingUIProvider();
        incomingUIProvider.getReadmoreUIProvider().setConfigure(new Function1<ReadmoreAdapter, ReadmoreAdapter>() {
    @Override
    public ReadmoreAdapter invoke(ReadmoreAdapter readmoreAdapter) {
         readmoreAdapter.alignReadmore(UiConfigurations.Alignment.AlignCenterHorizontal);
         readmoreAdapter.setReadmoreStyle(new StyleConfig(20, Color.RED, Typeface.DEFAULT_BOLD));
         return readmoreAdapter;
    }
});
```
> In order to change the "readmore" indication written text, override string resource with id "R.string.read_more"
   