> This article will help you save and display chat history. 
### History service

#### Supported history operations include the following:
- **Fetch** - Fetches previously stored conversation history.
- **Remove** - Remove stored elements from history. (by timestamoId)
- **Store** - Store new elements in history.
- **Update** - Update elements that were stored in history. (by timestampId)

History management is currently not provided by the SDK.   
In order to add history support to the chat, application should provide an implementation of `HistoryProvider` interface. 

``` java

public interface HistoryProvider {
    void fetch(int from, boolean older, HistoryListener listener);

    void store(StorableChatElement element);

    void remove(long timestampId);

    void update(long timestampId, StorableChatElement element);
}

// Implementation of the HistoryProvider interface:
class MyHistoryProvider implements HistoryProvider {

    @Override
    public void fetch(final int from, @FetchDirection final int direction, final HistoryListener listener) {
        final List<? extends StorableChatElement> history = getHistory(from, direction);
        listener.onReady(from, direction, history);
    }

    @Override
    public void store(@NonNull StorableChatElement item) {
        // save history item in storage. item.getTimestamp(), should be the item identification. 
    }

    @Override
    public void remove(long timestampId) {
        // remove history item from storage. Identify by `timestampId`.
    }

    @Override
    public void update(long timestampId, @NotNull StorableChatElement item) {
        // update history item in storage. Identify by `timestampId`.
    }
}

// Pass implementation to the ChatController builder:
new ChatController.Builder(this)
                .historyProvider(MyHistoryProvider)
...
```
## What is stored in history?
Elements that should be stored in history implements the `StorableChatElement` interface.   
**_Notice_** - Storable element contains a `storageKey`, this key should NOT be changed nor deleted, otherwise
history will not be fetched properly.   
When history should be loaded the SDK passes a `fetch` request with the position history should be fetched from. The HistoryProvider implementation defines the amount of data that will be fetched.  
History data is identified by the `StorableChatElement.getTimestamp()` value




























