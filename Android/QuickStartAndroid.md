# Using Android SDK

## Starting a Chat  

### 1. Create an Account.

  > **<U>To start chat with Bot create `BotAccount`:</U>**   
    
```java
Account account = new BotAccount(API_KEY, ACCOUNT_NAME,
                        KNOWLEDGE_BASE, SERVER, CONTEXT_MAP);
```  
>##### Use Context

```java
HashMap nrContext = new HashMap<String, String>();
nrContext.put("ContextKey", "ContextValue");
```

###### <sup> Where: API_KEY (mandatory), ACCOUNT_NAME(mandatory), KNOWLEDGE_BASE(mandatory), SERVER(madatory), CONTEXT_MAP(optional)</sup>
   
> **<U>To start chat with Bold create `BoldAccount`:</U>**

```java
Account account = new BoldAccount(API_KEY);
```

---

### 2. Create `ChatController`
###### ChatController handles the creation of the chat and is used for interactions with the chat SDK.

```java
ChatController chatController = new ChatController.Builder(getContext())
                                                          .build(account, ...);
```

---

### 3. Add chat fragment to the application.

###### In order to receive and add the chat fragment, we need to implement the ChatLoadedListener interface and pass it in the `ChatController.Builder` build method.

```java
new ChatController.Builder(getContext()).build(account, new ChatLoadedListener() {
        @Override
        public void onComplete(ChatLoadResponse result) {
            if (result.getError() != null) {
                // in case something went wrong with chat load
            } else {
              // Chat fragment (result.getFragment()) is now available on the result and be added to the applications activity.
            }
        }
    });
```

---

[see bold360ai samples](https://github.com/bold360ai/bold360ai-mobile-samples)