---
layout: articleSection
title: Example Apptest Configuration and Webtest File
colorTitle: Example Apptest Configuration and Webtest File
subtitle: Apptest
subtitleNewsroom: Get to Know INTACT
overview: Topics
group: invisible
manualLink: 'https://docs.qitasc.com/'
link: WebtestFile

---

If you would like to run the same test case that we automated in our [Remote Apptest](../RemoteApptest/RemoteApptest.html) article, please add the following `Appium` and `AppTest` configuration blocks in your `Server.conf`. Next, create a `.webtest` file in INTACT Studio and use the Stepdefs and Views that are listed beneath the configuration.


**Appium Configuration**
To use Apptests, you must have Appium installed on the machine that will be executing INTACT test cases. The following configuration block tells the INTACT Server that Appium is active and accessible.

```go
Appium {
    isActive = true
}
```

**AppTest Configuration**
The AppTest Configuration below tells the INTACT Server what app is being automated by specifying its name and its APK:

```go
AppTest {
    apps = [
        {
            name = "sms-messaging"
            path = "resources/apks/sms-messaging-aosp-1-4-multi-android.apk"
            capabilities {
                appWaitActivity = "com.android.mms.ui.ConversationList"
                automationName = "uiautomator2"
            }
        }
    ]
}
```

**Glue Path**
The Glue path tells INTACT where to find its custom step definitions. We've saved them in a directory called `Webtest` and defined its relative path:

```go
Glue {
   path = ["Webtest"]
}
```
**Apptest Webtest File**
The Webtest file below includes the stepdefs needed to construct a test case where two phones message each other via a messaging app. These stepdefs call on the **Views**, which define the apps elements and the actions we want to perform on those elements:

```go
stepdef "send message {} to {}" / message, phone /
    goHomeView := find GoHomeButtonView
    if (goHomeView != null) then
        goHomeView.goHome()
    end

    mainView := await MessageListView
    mainView.newMessage()

    conversationView := await ConversationView
    conversationView.setRecipient(phone.number)
    conversationView.writeMessage(message)
    conversationView.send()
end

stepdef "confirm message {} reception from {}" / message, phone/
    goHomeView := find GoHomeButtonView
    if (goHomeView != null) then
        goHomeView.goHome()
    end

    mainView := await MessageListWithItemView(phone.woNdc)
    mainView.goToConversation()

    messageView := await ConversationWithMessageView(message)
    receivedMessage := messageView.getMessage()

    println(receivedMessage)
end

view MessageListView
    elem newMessageButton := "//*[@content-desc='New message']"

    action (newMessageButton) newMessage := click
end

view MessageListWithItemView(phoneNumber)
    elem conversationField := "//*[@resource-id='fr.slvn.mms:id/from' and contains(@text,'@{phoneNumber}')]"

    action (conversationField) goToConversation := click
end

view ConversationView
    elem toField := "//*[@resource-id='fr.slvn.mms:id/recipients_editor']" [dynamic]
    elem textField := "//*[@resource-id='fr.slvn.mms:id/embedded_text_editor']"
    elem sendMessageButton := "//*[@resource-id='fr.slvn.mms:id/send_button_sms']"

    action (toField) setRecipient := type
    action (textField) writeMessage := type
    action (sendMessageButton) send := click
end

view ConversationWithMessageView(message)
    elem messageText := "//*[@resource-id='fr.slvn.mms:id/msg_list_item_recv']//*[@resource-id='fr.slvn.mms:id/text_view' and contains(@text, '@{message}')]"

    action (messageText) getMessage := content
end

view GoHomeButtonView
    elem homeButton := "//*[@resource-id='android:id/home']"

    action (homeButton) goHome := click
end
```
