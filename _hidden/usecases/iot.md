---
layout: useCases
title: Internet of Things Testing
img_main_url: Path of the Image which is seen in the article right after the Title and subtext
category: useCases
group: visible
link: iot
subtext: The goal of IoT testing is to ensure that smart devices are both communicating correctly with their app and working properly.


########## README

########## SYNTAX

# layout: articleSection this builds the page according to layouts/*********.html
# title: Main Title (Visible in Browser Tabs)
# subtitle: selfexplaining
# videoImg_url: If that field exists it will define the article as a Video and takes the image as a preview in the newsroom
# category: Needed to loop over article files in the folder
# group: visible is needed to show the use case, if not set or omitted it will not appear
# link: Link of the Use Case on qitasc.com/usecases/<link>
# subtext: Description visible in the Newsroom (?)
---
# Internet of Things Testing <a name="IoT"></a>

![alt text](../NewWebsite/IOT.svg)

The Internet of Things (IoT) involves connecting devices to the internet and controlled via applications. Currently, IoT is most commonly associated with Smart Home devices, such as smart thermostats or alarm systems, where customers can access and control these devices using an app on their mobile device. The goal of IoT testing is to ensure that smart devices are both communicating correctly with their app and working properly. Examples of Smart Home functionality include:
* Control a room's thermostat over the Internet
* Have an alarm system that notifies the user about events
* Verify that a smoke alarm detects particle density changes
* Control both optical and magnetic door/window contacts

Because many of these devices involve physical movement, such as a camera turning on/off or a window opening/closing, automated IoT testing can be challenging to achieve.

## QiTASC Products for Internet of Things Testing <a name="products"></a>

### intaQt Server
QiTASC has created a test environment based on 3D prints to hold and manipulate IoT devices, actors and sensors controlled by the **intaQt Server**. These can then adjust, configure and detect actions on IoT devices. **intaQt** then automates and tests characteristics of interconnected devices that are used for Smart Home automation. The **intaQt Server** verifies the End-to-End behavior of these scenarios: Actions are automatically triggered via actors, then sensors notify **intaQt** of the changes. At the same time, **intaQt** checks if the expected result is displayed on the customer's app.

The **intaQt Server** includes the following functionality that enables test case creation:
* Use **intaQt Server**'s Webtest language to write "Views", which define app elements and the actions to perform on them
* Create Feature Files consisting of scenarios that define the steps needed to execute the test case
* Develop custom models and functions to customize behaviors
* Configure local and remote devices, network interfaces, reporting services, context objects and more

#### intaQt Server - Webtest
IoT projects make use of the **intaQt Server**'s Webtest language, which constructs test cases out of the Selectors found in the application being automated, such as its XPaths. Webtest complements intaQt's core functionality by enabling the following activities:
* Construct "Views", which define app elements, such as buttons, text fields and images
  * For example, pressing a button or swiping upwards
* Assign Webtest actions that should be performed on the elements
* Perform additional activities, such as taking screenshots, toggling between views and refreshing

**Webtest View Example**
On the backend, a Webtest might be constructed like this:
```go
stepdef "enter {} into the input field" / text /
    await InputFieldView
end

view InputFieldView
    elem inputField := "//*[@resource-id='io.selendroid.testapp:id/my_text_field']"
    action (inputField) enterText := type
end
```

**Feature File Example**
On the front end, the **intaQt** Feature File defines the steps to execute the test.

```go
Feature: entertext

  Scenario: Enter Text and press 2nd button

    Given an Android phone as A
    And open app io.selendroid.testapp on A

    Then on A, enter "some text" into the input field
    And on A, press the second button

    And wait for 5 seconds
```

### intaQt Studio
QiTASC's integrated development environment provides features that improve your productivity and the quality of your tests:
* Auto-completion, go-to declarations and rename refactoring help you write, find and edit your tests with ease.
* Error inspections, line markers and notifications help you identify problems with your code as you write it.
* Create templates, in-code documentation, and more!

## Additional Product Add-ons

### intaQt Client
Our command line tool, which is included with all **intaQt Server** licenses, is capable of executing entire **intaQt** projects in continuous integration (CI) environments such as Jenkins and Team City to maximize levels of automation! **intaQt Server** also enables the execution of complex test suites via XML configuration.

[intaQt Client Product Page](linkNotYetExisting.html)

### ConQlude Reporting
Collect, manage and export **intaQt** test case project data as well as bug and error tracking without any manual effort. ConQlude Reporting automatically uploads all test reports, logs, media attachments and metadata to a centrally-accessible, secure web interface. This powerful but user-friendly interface ensures that users can remain confident that all test execution details are 100% correct, up-to-date and conform to formats recognized by external project management systems.

[ConQlude Product Page](linkNotYetExisting.html)
