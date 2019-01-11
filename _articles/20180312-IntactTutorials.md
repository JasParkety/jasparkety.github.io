---
layout: newsroomArticle
title: INTACT Apptest Tutorial
colorTitle: <span class="orange">IN</span>TACT<sup>®</sup> Apptest Tutorial
subtitle: The Tutorial Experience
subtitleNewsroom: How-To Guides & Learning
overview: Topics
img_url: img/newsroom/ApptestTutorial.png
category: article
group: visible
manualLink: 'https://docs.qitasc.com/'
link: 20180312-IntactTutorials
date: 12.03.2018
ReadMore: Read More
subtext: QiTASC's documentation team is creating new tutorials to help users get comfortable using INTACT's features.
text: We've listened to your feedback, so this year we're shifting our documentation focus away from our extensive manual and more towards learning and letting users get a head start on using INTACT's features. Starting with Apptest, we'll be publishing additional tutorials over the next several weeks. As part of creating useful, trouble-free material, members of our documentation team try the tutorials out themselves using the same hardware and software that a customer would. This helps us write tutorials from the end user's point of view and ensures that we don't leave any steps out.
anchors: ["Introduction", "createProject", "Appium", "xpath", "CreateTestCase", "Conclusion", "Appendix"]
anchorsNames: ["Apptest Introduction", "Create an INTACT Project", "Configure Appium", "XPaths", "Create the Test Case", "Conclusion", "Appendix"]
experience: 1

########## README
########## Article defines as a page of an article, e.g. www.qitasc.com/articles/20180320-VirtualPhones
########## Newsroom defines as the www.qitasc.com/Newsroom/ page which contains the articles

########## SYNTAX

# layout: newsroomArticle this builds the page according to layouts/newsroomArticle.html
# title: Main Title (Visible in Browser Tabs)
# colorTitle: Coloured Main title used in the Descriptions
# subtitle: selfexplaining
# subtitleNewsroom: Category visible in the Newsroom
# img_url: Path of the Image which is visible in the Newsroom only! If '/' is at beginning of path it is the global like baseurl/path
# img_main_url: Path of the Image which is seen in the article right after the Title and subtext
# videoImg_url: If that field exists it will define the article as a Video and takes the image as a preview in the newsroom
# video_ref: The Youtube's Video Reference Tag
# category: Needed to loop over article files in the folder
# group: visible is needed to show the article, if not set or omitted it will not appear
# manualLink: Link to the docs center
# link: Link of the Article on qitasc.com/articles/<link>
# date: the date of the article, if in the future article will not be visible
# ReadMore: Can be changed, e.g. Videos will have the Tag Watch
# subtext: Description visible in the Newsroom
# text: optional text if needed, e.g. The Tutorial experience on the field experience takes the text message.
# anchors: Identifiers of each anchors
# anchorNames: Those Names will be visible in the Table Of Content on the Article View
# experience: optional, if 1 it will add The Tutorial Experience Text on top of the article -> More infos are in the layout
---

# Apptest Tutorial - Introduction <a name="Introduction"></a>
This tutorial will teach you how to run an **Apptest** with INTACT Studio.
Please read below for software requirements and install all of the specified QiTASC products along with the Appium Desktop App.

For reference material, please refer to the Intact Manual's [Webtest Language, Webtests and Apptest](https://docs.qitasc.com/intactsteps/webtestintro/) chapter.

## Required QiTASC Products
The following products must be installed using the QiTASC Cockpit in order to execute Apptests:

* INTACT Server (with Android SDK)
* INTACT Studio
* adm
* appium

For installation instructions, please refer to the Manual's [INTACT Installation](https://docs.qitasc.com/installation/installation) section.

Additionally, **Java and Android environment variables** must be set for the Appium Desktop app to work. If you have not already configured these, you can find instructions in our Manual's section, [Set Environment Variables](https://docs.qitasc.com/articles/environmentvariables/).

## Appium Desktop App Installation
The Appium Desktop app lets you find an app's **UI elements**, including XPaths, which you can then use to automate tests in INTACT Studio. Download the most current version [here](https://github.com/appium/appium-desktop/). After installing the software, you will find this icon on your desktop:

![alt text](/img/articles/apptest/01-AppiumDesktopAppIcon.png)

## Phone & App Setup
The following section provides information about setting up your phone and installing an application to test on it.

### Connect Your Phone
Connect an Android phone via USB port to your PC. The phone must allow **USB Debugging**, which can be enabled in the **Developer Options** menu. Your phone may show a dialog asking if you trust the computer it is connected to as a debugger. Check the box to "remember" your choice and confirm **Yes**.

### Download an App to Test
This tutorial will demonstrate how to test an app using the **Selendroid Test App** as an example. Download it [here](https://github.com/selendroid/demoproject-selendroid/blob/master/src/main/resources/selendroid-test-app-0.10.0.apk).

If you want to try out other apps, the [Appendix](#Appendix) contains additional information about how to get an app's **APK** onto the PC for testing with Appium.


### Install the App on Your Phone
If the Selendroid Test App is not yet on your phone, you can install it with `adb install <path-to-apk>`. For example:

```bash
## Windows users
adb install selendroid-test-app-0.10.0.apk

## Linux / Mac OS X users
adb install Users/yourUserName/selendroid-test-app-0.10.0.apk

```

Now that you have installed the required applications and connected an Android phone to your PC, we'll create a project and directory structure in INTACT Studio.

# Create an INTACT Project <a name="createProject"></a>

To execute an Apptest, you first need to run the following products:

* adm
* INTACT Server -- with adm
* INTACT Studio

The easiest way to do this is to open a Command Line/Terminal session and navigate to the QiTASC directory.

The enter the following:

**Windows Users**
```bash
qitasc start adm
qitasc start intact-server -a
qitasc start intact-studio
```

**Linux and Mac OSX Users**
```bash
./qitasc start adm.exe
./qitasc start intact-server -a
./qitasc start intact-studio
```

The `-a` that follows `start intact-server` **must** be added so that the phones to communicate properly with **adm**.

## Run INTACT Studio
After launching the three products, INTACT Studio will start. First, select `Create New Project`.
![alt text](/img/articles/apptest/02-StartIntact.png)

The following view will appear. Select `INTACT` and click the `Next` button.
![alt text](/img/articles/apptest/02b-NewProject.png)

Next, name your project `FirstAppTest` and click `Finish`.

![alt text](/img/articles/apptest/02c-NameProject.png)

An empty INTACT Studio will appear -- a `Connected` icon should be visible in the bottom right corner:

![alt text](/img/articles/apptest/03-IntactConnected.png)

## Create Resources Directory
Create a directory to store your APK file in. Although this is not necessary, we recommend this type of structure to help keep your Apptest projects organized.

First, right-click on the project name `FirstAppTest` on the left side of the window. Select `New`, then `Directory`. Name the new directory `resources`. Then, create a subdirectory by right-clicking on the `resources` folder and again selecting `New` and `Directory`. Name this one `apks`.


![alt text](/img/articles/apptest/04-CreateResourcesDirectory.png)

### Add APKs to the Resources Directory

Drag and drop the Selendroid Test App apk into the newly-created `apks` folder in INTACT Studio:

![alt text](/img/articles/apptest/05-DragAndDropApkFile.png)

Now that you have created a new INTACT project and imported your app's APK file, we'll move on to using Appium Desktop to get the UI elements you need to test.

# Configure Appium to Recognize the App <a name="Appium"></a>

Addressing an app's **UI element** is crucial to Apptest. We'll use the Appium Desktop App to get this information. Open Appium : If this is your first time using it, the application may take some time to load. Once the following window appears, click the `Start Server` button.

![alt text](/img/articles/apptest/06-StartServer.png)

A new window will appear. Click the magnifying glass in the upper right corner of the top bar to start your session:

![alt text](/img/articles/apptest/07-StartSession.png)

The window is for configuring your phone and the Selendroid app for the Appium Session. Click on the `+` button to add each new field:

![alt text](/img/articles/apptest/08b-emptyappium.png)

Add the following configurations:

|Name|Value|
|--|--|
|platformName| `Android`|
|deviceName| `AndroidPhone`|
|automationName| `uiautomator2`|
|app|`<APK filepath> (see below)`|
|appWaitActivity| `<foreground activity after startup (see below>`)

Find the `app` value:
* Return to INTACT Studio and right-click the APK file that you previously imported into the `resources/apks` folder.
* Select `Copy Path`.
* Paste the path into the `app` value field.

![alt text](/img/articles/apptest/08-CopyPath.png)

Find the `appWaitActivity` value:
* Start the Selendroid Test app.
* Open up a Command Prompt/Terminal session and enter the following command:

```bash
adb shell dumpsys window
```

Now, let's use the Command Prompt/Terminal search function to find `mCurrentFocus`:

![alt text](/img/articles/apptest/09-ForegroundActivity.png)

The entire string is:
```bash
mCurrentFocus=Window{eb0d905 u0 io.selendroid.testapp/io.selendroid.testapp.HomeScreenActivity}
```

However, we are only interested in the **activity** described. Copy the following from the Command Prompt/Terminal:

```bash
io.selendroid.testapp.HomeScreenActivity
```

Return to Appium and paste the string into the `appWaitActivity` value field. When you're finished, your Appium configuration window should look like this:

![alt text](/img/articles/apptest/10-SessionConfigured.png)

**Save** the configuration so that you can use it later:  

![alt text](/img/articles/apptest/11-SaveConfiguration.png)

Next, click the `Start Session` button:

![alt text](/img/articles/apptest/12-StartSession.png)

The session may take a couple of minutes to start, but subsequent starts will be faster. If you encounter an error, such as an incorrect path or name, a message will pop up on the configuration page. The **Server log window**, in the background window, will contain more details.

Once the session has fully started, a window showing the Selendroid Test App will appear:

![alt text](/img/articles/apptest/15-AppStartedInAppiumDesktop.png)

Next we will use Appium Desktop to find the XPaths that we need to build our INTACT Studio test case.

# Find the XPaths <a name="xpath"></a>

After configuring your Appium session, you can start using it to find the addresses of UI elements in the Selendroid app.

## Determine the Element's XPath
The app that we're using contains a **UI element** that allows the user to enter text. Let's assume that we want to use INTACT to automate this action. First, we need to address the input field.

Using Appium Desktop, move your mouse over the Selendroid Test App text field and click it. Some XML will appear in Appium's middle section, and the right-hand section contains a table of attributes as well as three `Find By` criteria, which can be used to address the element.

![alt text](/img/articles/apptest/16-FindTextField.png)

We'll use the element's XPath: `//android.widget.EditText[@content-desc="my_text_fieldCD"]`.

## Verify the XPath

Alternately, you can use the  **search function** to find which element an XPath belongs to. Click the magnifier glass at the top of the Appium Desktop window and select `XPath` from the `Locator Strategy` drop-down menu:

![alt text](/img/articles/apptest/17-VerifyXPath-1.png)

Enter the XPath from above and click `Search`.

![alt text](/img/articles/apptest/18-VerifyXPath-2.png)


Appium Desktop returns one element for this search term. The element will also appear highlighted on the left-hand side of the window.

![alt text](/img/articles/apptest/19-VerifyXPath-3.png)

Searching for a less-specific XPath may result in a list of matching elements XPath. For example, the Selendroid Test App uses six buttons -- if we write an XPath expression like `//android.widget.Button` without specifying any other attribute, Appium will give us the following result:

![alt text](/img/articles/apptest/20-VerifyXPathList.png)

Now that you've gained some insight into using Appium Desktop to find UI elements, we'll go back to INTACT Studio and put together our test case.

We can also use an **index** if we want to select a specific Element from the list without expression a specific condition about it. For example, `//android.widget.Button[2]`. This will allow us in INTACT to iterate through a list of elements on the screen - but this is an advanced topic.


# Create the Test Case <a name="CreateTestCase"></a>
So far we have downloaded the required application, created a project in INTACT Studio and configured the Appium Desktop app to find XPaths from the Selendroid Test App.

Now that we're back in INTACT Studio, we need a simple Appium **configuration file**. Right click on your project's name, which is on the left side of the window. Select `New` and then `File`. Name the file `Appium.conf` and enter the configuration properties, which are the same that we used when configuring the Appium Desktop app:

```go
Appium {
    isActive = true
    apps = [
        {
            name="io.selendroid.testapp",
            path="resources/apks/selendroid-test-app-0.10.0.apk",
            	capabilities	{
            	appWaitActivity	=	"io.selendroid.testapp.HomeScreenActivity"
            	automationName	=	"uiautomator2"
            }
        }
    ]
}
```

<span style="color:orange;">**Note**</span>: The `isActive` parameter must be set to `true` in order to enable tests running Appium. This tells INTACT to start the Appium Server when running the test case.


## Create the Feature File
Create a directory called `Features` by again right-clicking on the project name and selecting `Directory`. Then right-click on the `Features` directory, select `New` and then `Feature`. Name the file `entertext` and the **scenario** `Enter text and press 2nd button`. A Feature file template will appear:

![alt text](/img/articles/apptest/EmptyFeature.png)

### Write the Test - Get a Phone  

First, we'll write a step under the `# Prerequisites` section that tells INTACT we need a phone:

```go
Given an Android phone as A
```

### Write the Test - Open the App  
Next, we need to open the app on the phone. On a second line, write the following step:

```go
And open app io.selendroid.testapp on A
```

<span style="color:orange;">**Note**</span>: The app name `io.selendroid.testapp` must match the string that we defined for the `name` configuration in the `Appium.conf` file (see above).

### Write the Test - Enter Text into the Input Field
Under the `# Execution` section write a step that tells INTACT to type text into the app:

```go
Then on A, enter "some text" into the input field
```

This tells INTACT that we want to interact with `phone A`. You will notice that the text is red: this is because it isn't recognized by INTACT. In that case, we need to create a custom step -- a **stepdef** -- for it.

### Write the Test - Create a Stepdef
Custom steps are stored in separate files. Create another directory called `stepdefs`. Right-click on the folder, select `New` and then `Webtest`. Enter `testapp_stepdefs` as the name. This will create a file called `testapp_stepdefs.webtest`, which tells INTACT that it is a file that uses the Webtest language.

The following stepdef template will appear:

![alt text](/img/articles/apptest/EmptyStepdef.png)


Edit the stepdef's first line so that it matches the step we've used in the **Feature file**:
```go
stepdef "enter {} into the input field" / text /
end
```

The stepdef takes one **parameter** called `text`. This will allow us to specify any text that we want in the **Feature file**.

Go back to the Feature file where you have already used the step. You will notice, that although we have now a definition for this step, it will still be highlighted red. We need one last configuration to solve this. Create a **new empty file** in the project root directory called `Glue.conf` and paste the following in it:

```go
Glue {
    path = ["stepdefs"]
}
```

This configuration tells INTACT to look in the `stepdefs` directory to find our custom step defs. If you return to the **Feature file**, you will see that the step is now white.

### Write the Test - Create the View

We will now write a **View** to select the Selendroid Test App's input field. Underneath your stepdef, write the following:

```go
view InputFieldView
	elem inputField := "//*[@resource-id='io.selendroid.testapp:id/my_text_field']"
end
```

This **View** contains the following:
* We have named the View `InputFieldView`
* `InputFieldView` contains a UI element indicated by the keyword `elem` and assigned the name `inputField`.
* A `:=` is written next to `inputField`, followed by its **XPath** address, which we found [using the Appium Desktop App](#xpaths).

<span style="color:orange;">**Note**</span>: A **best practice** is to make a screenshot of the phone's screen showing the screen with the elements you've described in the View:
*  Save this screenshot in a file that has the same name as the View (here it would be `InputFiledView.png`).
* It is easy to understand the code later if you have an image of how the phone's screen looks that you can compare against the XPaths described in your `.webtest` files.
* The screenshot can be taken directly from the Appium Desktop App window. Crop it to the phone's screen.

<span style="color:red;">Important!</span> The **double quotes within the XPath** must be replaced with **single quotes** as shown above, while the entire XPath is enclosed in double quotes.

### Write the Test - Use the Stepdef to Address the View

Next we'll add a line that lets our stepdef **wait** for the View to appear:
```go
stepdef "enter {} into the input field" / text /
	await InputFieldView
end
```

This only makes the stepdef wait for the View, but it does not yet interact with it. The next step is to add a **View action** that works with our element, `inputField`.
Add a line to `InputFieldView` and expand the View to the following:

```go
view InputFieldView
	elem inputField := "//*[@resource-id='io.selendroid.testapp:id/my_text_field']"
	action (inputField) enterText := type
end
```

This new line defines an **action** towards the `inputField`:
* **Actions** are indicated by an `action` keyword.
* Next to the `action` keyword, specify the element that we want to address within brackets: `(inputField)`. This tells INTACT that the action we define will interact with that element.
* We have named the action `enterText`.
* A `:=` is written next to `enterText` followed by `type`, which is one of the built-in actions that you can use in Webtests.

<span style="color:orange;">**Note**</span>: To see a list of supported **actions**, suggestions for action types, type `CTRL-SPACE`.

### Write the Test - Modify the Stepdef
Revise your stepdef to the following:  

```go
stepdef "enter {} into the input field" / text /
    v := await InputFieldView
    v.enterText(text)
end
```

Now we are assigning the View to a variable, `v`:
* The View found by the `await` statement will be written into this variable.
* On the next line, we perform the **action** we defined, `enterText` on the View.
* This action takes a single parameter, `(text)`, which we specified in the first row of the stepdef.

### Close Appium Desktop App
<span style="color:red;">Important!</span> Before proceeding to the next step, make sure that you have **closed** the **Appium Desktop App**. Otherwise, you will have two Appium Servers running at the same time (in the Desktop App and by INTACT Studio), which can interfere with test case execution.

End the Appium Desktop session, then click the `||` sign in the black log output window's upper right corner. Next, click the `X` and close everything until you see the `Start Server` button that appears after launching Appium Desktop.

### Run the Feature File
After closing the Appium Desktop app, return to your **Feature file** in INTACT Studio. Click the green `Run` button located on the top right side of the window:

![alt text](/img/articles/apptest/RunButton.png)

Alternately, right click on the Feature file and select `Run 'entertext.feature'`. Your Feature file and directory structure should look like the example below, and there should be no red text or warnings, such as for typos or undefined steps:

![alt text](/img/articles/apptest/TestCaseReady.png)

As the text is executing, you will see the Selendroid Test App launch on your phone and `"some text"` will be entered into the field.

To finish off this tutorial, we'll add one additional step that pushes a button after entering the text.  

### Write the Feature File - Add the "Press Button" Step

This final step adds a button-pressing action as well as a `wait` statement. Update your **Feature file** so that it contains the new steps:

```go
Feature: entertext

  Scenario: Enter Text and press 2nd button

      # Prerequisites
    Given an Android phone as A
    And open app io.selendroid.testapp on A

    # Execution
    Then on A, enter "some text" into the input field
    And on A, press the second button

      # Verification
    And wait for 5 seconds
```

Next you will need to do two additional tasks:
* Update the **View** so that it contains the additional **element** (the second button in the Selendroid App) and the **action** performed on it (a **click**).
* Create a new stepdef that defines the `press the second button` step from the **Feature file** and links it to the View.

You will need to return to the Appium Desktop app to find the button's XPath. Remember to **close Appium** before executing your updated test case.

If you have trouble finding the correct XPath or run into any errors, compare your test case with our stepdef below.


**Example Stepdef**
```go
stepdef "enter {} into the input field" / text /
    v := await InputFieldView
    v.enterText(text)
end

stepdef "press the second button"
    v := await InputFieldView
    v.pressButton()
end

view InputFieldView
    elem inputField := "//*[@resource-id='io.selendroid.testapp:id/my_text_field']"
    elem button := "//android.widget.Button[2]"
    action (inputField) enterText := type
    action (button) pressButton := click
end
```

## Conclusion <a name="Conclusion"></a>
This tutorial has introduced you to INTACT's Apptest, where we created a test case that first enters text into the **Selendroid Test App** and then presses a button.

First we showed how to set up a project with a recommended directory structure. Next we demonstrated the Appium Desktop app's features that help you locate an application's XPaths. We then used these XPaths to construct our test cases in INTACT Studio using the **Webtest** language to describe the Views and by writing a **Feature file** to execute the steps.

If you would like to create an Apptest using a different app, this tutorial's [Appendix](#Appendix) explains how to download other apps and get their APK onto your computer. Additional, the INTACT Manual's [Webtest Language, Webtest and Apptest](https://docs.qitasc.com/intactsteps/webtestintro/) chapter contains further reference material to help construct Views.

# Appendix: Find an APK and Install the App <a name="Appendix"></a>

If you would like to execute Apptests using a different app the following instructions show you how to find the APK for this app. For example, an app that you download from the **Play store** or one that is already on your phone. Once again, we'll use the **Selendroid Test App** as an example.

### Find the APK
Once you have installed the app, get its **apk** file (also called a "package"). To do so, use the `adb` tool, which comes with the Android SDK. Open a Command Line/Terminal session and enter the following:

```bash
adb shell pm list packages
```

The output displays a long list of packages installed on your phone. Search for `io.selendroid.testapp`, which is the app we will be using: `selendroid` is the name of the provider and `testapp` is the app's name. When searching for other packages, they follow a similar provider/app name format.

<span style="color:orange;">**Note**</span>: If the `adb` commands do not work, it may be because you did not Set the Environment Variables. Information on this topic can be obtained in our online [Manual](https://docs.qitasc.com/tutorials/environmentvariables/).

### Get APK onto Your PC
Once you have the app's name, find its location on the phone by entering the following command into the Command Line/Terminal:

```bash
adb shell pm path io.selendroid.testapp
```

Copy the returned path and enter the following, replacing `<path-to-apk>` with the copied path.

```bash
adb pull <path-to-apk>
```

This will create a file named "base.apk" in the directory where you have issued the command from. It is wise to rename the file to the package name and include also some version information in the name as you might test a newer version of it later in your project.
