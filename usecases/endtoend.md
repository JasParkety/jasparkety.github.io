---
layout: useCases
title: End-to-End and Migration Testing
img_main_url: Path of the Image which is seen in the article right after the Title and subtext
category: useCases
group: visible
link: e2e
subtext: End-to-end testing involves testing real-world scenarios from start to end. This is done to ensure, for example, that the network behaves exactly the same as it would when triggered by a customer's smartphone.


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


# End-to-End and Testing

![alt text](../UseCases/E2E.png)

End-to-end testing involves testing real-world scenarios from start to end. This is done to ensure, for example, that the network behaves exactly the same as it would when triggered by a customer's smartphone. These tests use real devices, meaning there is no need for injections to trigger core functionality. The advantage over using a simulated input is that you can be confident in the validity of the device behavior and test outcomes.


## End-to-End Migration Testing
![alt text](../UseCases/Migration.png)


When End-to-End tests must be performed during a migration, such as moving subscribes from an existing system to a new environment, time-sensitive challenges arise. Migration tests typically must be performed during a very small timeframe-- for example, overnight or during a brief period of time in which few customers access a network's functionality. In comparison, End-to-End tests of products that have not yet reached the market have more flexible timeframes.

Manually executing End-to-End migration tests means only a tiny subset can be executed before a decision must be made about whether to use the new system or return to the old one. Therefore, automating this type of testing is critical to ensuring a smooth migration.

## QiTASC Products for End-to-End and Migration Testing <a name="products"></a>
By automating End-to-End tests with  QiTASC, it's possible to continually execute several hundred test cases in a few hours. This results in a higher test coverage and data output. In cases of migration testing, this is exceptionally useful for making informed decisions about whether or not to proceed with the migration or revert to the old state.


### intaQt Server
The **intaQt Server** (**intaQt**) comes with an extensive collection of built-in steps that cover all the scenarios that a user in the live network could experience from the simple to the complex, including:

* **intaQt** Telephony Steps: Whether placing a call, sending an SMS or downloading data, **intaQt** supports you in creating test cases that reflect real-life behaviours.
* Configure tariffs in the **intaQt** Rater, to ensure that calls, texts or data events are charged accurately.
* Access **intaQt**'s suite of Built-ins, which provide functionality for database connections, utility functions, protocol testing as well as accessing and manipulating different file types.
* The **intaQt** Audio Service enables testing audio-related characteristics, such as speech channel quality and checking that the correct voice announcements are triggered under different circumstances.

**End-to-End Feature File Example**
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


### intaQt Studio
QiTASC's integrated development environment provides features that improve your productivity and the quality of your tests:
* Auto-completion, go-to declarations and rename refactoring help you write, find and edit your tests with ease.
* Error inspections, line markers and notifications help you identify problems with your code as you write it.
* Create templates, in-code documentation, and more!

## Additional Product Add-ons

### intaQt Verification
**intaQt Verification** (Optional) - **intaQt Verification** is often included as an add-on for End-to-End testing, and used to verify call detail records (CDRs). When CDRs are generated during the test execution, Verification can be performed within the same test execution, saving additional time in migration tests. In less urgent cases, or if CDRs are not created immediately during the test execution, Verification may be performed offline as well.

The following functionality is included with **intaQt Verification**:

* CDR Selectors - These tell **intaQt Verification** which CDRs to choose. For example, if only voice call tickets should be used.
* Verification Rules - Rules define the type of "checks" that will be performed against the selected CDRs. For example, checking the difference between two properties such as the difference in time between the beginning of a voice call and its end, or the difference in a customer's account balance.
* Special functions for calculating properties and values within a test case

[Verification Product Page](linkNotYetExisting.html)

### intaQt Client
Our command line tool, which is included with all **intaQt** Server licenses, is capable of executing entire **intaQt** projects in continuous integration (CI) environments such as Jenkins and Team City to maximize levels of automation! **intaQt Client** also enables the execution of complex test suites via XML configuration. This is especially useful when running regression tests or running an entire project during a migration.

[intaQt Client Product Page](linkNotYetExisting.html)

### ConQlude Reporting
Collect, manage and export **intaQt** test case project data as well as bug and error tracking without any manual effort. ConQlude Reporting automatically uploads all test reports, logs, media attachments and metadata to a centrally-accessible, secure web interface. This powerful but user-friendly interface ensures that users can remain confident that all test execution details are 100% correct, up-to-date and conform to formats recognized by external project management systems.

[ConQlude Product Page](linkNotYetExisting.html)
