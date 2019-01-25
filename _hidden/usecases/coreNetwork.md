---
layout: useCases
title: Core Network Testing
img_main_url: Path of the Image which is seen in the article right after the Title and subtext
category: useCases
group: visible
link: coreNetwork
subtext: Core network testing involves checking that the fundamental components of a network are behaving correctly over the course of a system life cycle. This includes regression tests for patches, updates, upgrades and network element replacement projects. Network operators follow system life cycles, involving regular system updates that, in turn, require system verification.



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

# Core Network Testing
![alt text](../NewWebsite/CoreNetwork.png)

Core network testing involves checking that the fundamental components of a network are behaving correctly over the course of a system life cycle. This includes regression tests for patches, updates, upgrades and network element replacement projects. Network operators follow system life cycles, involving regular system updates that, in turn, require system verification.

Examples of core network functionality that requiring testing include:
* Making and receiving different types of phones calls using:
  * Mobile phones (2G, 3G, 4G, WiFi, VoLTE)
  * VoIP phones
  * ISDN phones
  * POT phones
* Sending and receiving SMS
* Managing data connections and uploading/downloading content
* Roaming scenarios
* Verifying the speech channel of a call
* Verifying protocol messages of a call flow
* Verifying audio announcements

## QiTASC Products for Core Network Testing <a name="products"></a>

### intaQt Server
The **intaQt Server** significantly shortens the test cycle by automating virtually all possible core network functionality with its Built-in Telephony Steps. Our custom languages and Built-ins further support the creation of unique steps for complicated or uncommon scenarios. This ensures that testing reflects real-world scenarios and interdependencies within a live network.

One of the greatest advantages of using the **intaQt Server** for core network testing is its collection of Compound Steps: These are parameterized steps, which perform the entirety of a voice call, SMS transfer or data download/upload. These parameters may be explicitly specified. For example, if a call duration should be declared. When parameters are not specified, **intaQt** uses default values.

**Example Feature File with Compound Steps**
```go
Feature: callCompoundStep
  Scenario: callCompoundStepScenario

    Given a phone as A:
      * of type Android
      * where operator == "3 AT"
      * with profile Vienna

    And a phone as B:
      * of type Android

    And A starts a call to B as MYCALL:
      * detect incoming call within 10 seconds
      * call duration is 7 seconds
      * caller ends the call
      * caller connects within 5 seconds
      * callee connects within 5 seconds
      * caller dials nat format
      * callee expects signaled number in any format
      * ringing duration is 8 seconds

     And expect the call MYCALL to start ringing
     And expect the call MYCALL to connect
     And expect the call MYCALL to disconnect
```

The **intaQt Server** also provides the following key functionality for core network testing:
* **intaQt** Telephony Steps - Whether placing a call, sending an SMS or downloading data, **intaQt** supports you in creating test cases that reflect real-life behaviors.
* Configure tariffs in the **intaQt** Rater, to ensure that calls, SMS or data events are charged accurately.
* Flexible configurations for defining subscribers, local/remote phones and devices, context objects, network interfaces, reporting services and much more.
* Switch between virtual phones and real phones as you integrate components into your test environment.
* Access intaQt's suite of Built-ins, which provide functionality for database connections, utility functions, protocol testing as well as accessing and manipulating different file types.
* The **intaQt** Audio Service enables testing audio-related characteristics, such as speech channel quality and checking that the correct voice announcements are triggered under different circumstances.

### intaQt Studio
QiTASC's integrated development environment provides features that improve your productivity and the quality of your tests:
* Auto-completion, go-to declarations and rename refactoring help you write, find and edit your tests with ease.
* Error inspections, line markers and notifications help you identify problems with your code as you write it.
* Create templates, in-code documentation, and more!

## Additional Product Add-ons

### intaQt Verification
**intaQt Verificationo** (Optional) - **intaQt Verificationo** is often included as an add-on for core network testing, and used to check charging conformity and tariffs based on call detail records (CDRs). **intaQt Verificationo** may be executed *online*, as an **intaQt Server** test case is being executed, or *offline*, for example, if CDRs are only collected at the end of each day. In both cases, the following functionality is included with **intaQt Verificationo**:

* CDR Selectors - These tell **intaQt Verificationo** which CDRs to choose. For example, if only voice call tickets should be used.
* Verification Rules - Rules define the type of "checks" that will be performed against the selected CDRs. For example, checking the difference between two properties such as the difference in time between the beginning of a voice call and its end, or the difference in a customer's account balance.
* Special functions for calculating properties and values within a test case.

[intaQt Verification Product Page](linkNotYetExisting.html)

### intaQt Client
Our command line tool, which is included with all **intaQt** Server licenses, is capable of executing entire **intaQt** projects in continuous integration (CI) environments such as Jenkins and Team City to maximize levels of automation! **intaQt Client** also enables the execution of complex test suites via XML configuration.

[intaQt Client Product Page](linkNotYetExisting.html)

### ConQlude Reporting
Collect, manage and export **intaQt** test case project data as well as bug and error tracking without any manual effort. ConQlude Reporting automatically uploads all test reports, logs, media attachments and metadata to a centrally-accessible, secure web interface. This powerful but user-friendly interface ensures that users can remain confident that all test execution details are 100% correct, up-to-date and conform to formats recognized by external project management systems.

[ConQlude Product Page](linkNotYetExisting.html)
