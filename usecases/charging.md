---
layout: useCases
title: Tariff Verification and Charging Conformity
img_main_url: Path of the Image which is seen in the article right after the Title and subtext
category: useCases
group: visible
link: charging
subtext: Tariff verification and charging conformity tests are critical for ensuring that convergent charging systems (CCS), online charging systems (OCS) and customer accounts are behaving correctly.


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
# Tariff Verification and Charging Conformity Testing <a name="charging"></a>

![alt text](../Website/UseCases/ChargingConformity.png)

Tariff verification and charging conformity tests are critical for ensuring that convergent charging systems (CCS), online charging systems (OCS) and customer accounts are behaving correctly. These tests typically require accessing large amounts of metadata created by events such as phone calls or SMS transfers that affect charging, and involve verifying:
* Phone & subscriber details, such as phone type, phone number, service provider
* Call & event details, such as calling parties, lengths of time, passed/failed steps
* Internal infrastructure
* Legal requirements
* Financial characteristics
* Tariff configurations

## QiTASC Products for Tariff Verification and Charging Conformity <a name="products"></a>

### intaQt Verification
**intaQt Verification** checks subscriber details to assess how their accounts are treated in different environments. Metadata collected from call detail records (CDRs), event data records (EDRs) and logs created from test executions is instantly compared against a matrix of requirements ("Verification Rules") to check that charging conforms to all a projects's requirements. When verification fails, a report provides details about which parameters didn't match to determine where the source of the problem is.

To date, **intaQt Verification** has automated more than 800 basic charging use cases according the Verification Rules developed at QiTASC, which underlies its precision as a testing tool. The most complex scenarios have up to 20 different CDRs with more than 3000 parameters. Within a matter of minutes, **intaQt Verification** checks the number of CDRs/EDRs, the correlation between values within and across the CDRs as well as every single parameter according to expected content and format.

[intaQt Verification Product Page](linkNotYetExisting.html)

#### Online and Offline Verification
**intaQt Verification** may be executed *online*, as an **intaQt Server** test case is being executed, or *offline*, for example, if CDRs are only collected at the end of each day. In both cases, the following functionality is included with **intaQt Verification**:

* CDR Selectors - These tell **intaQt Verification** which CDRs to choose. For example, if only voice call tickets should be used.
* Verification Rules - Rules define the type of "checks" that will be performed against the selected CDRs. For example, checking the difference between two properties such as the difference in time between the beginning of a voice call and its end, or the difference in a customer's account balance.
* Special functions for calculating properties and values within a test case.

**Rules Example**
```go
CHECK_Service {
  CDR_MOC {
        verify any of {
        check "sequenceId" equals 1;

        check "accountClosingBalance" all "198";
        check "accountClosingBalance" not all "1984";
        check "accountClosingBalance" not all "19";

        check "bearerType" begins with "Voi";


        check "chargeAmount" between 30000 and 40000;
        check "answerTimestamp" between property "sessionCreationTimestamp" and property "ticketCreationTimestamp";
        check "transactionId" equals "1";
        check "sequenceId" equals 1;

        check "success" equals ${true};

        check "chargedDuration" within 100 from 60050;
        check "chargedDuration" within 5 from 60 scaled by 1000;
        check "callDuration" within 60000 from property "chargedDuration";
}
}
}
```

### intaQt Server
The **intaQt Server** provides features that help create, maintain and check tariffs and charging conformity within **intaQt** test cases. This includes:
* The **intaQt** Rater, which is used to create, edit and update tariffs according to project needs. Tariffs may be specified for voice calls, SMS and data usage based on criteria such as call length, the amount of SMS sent or volume of data used.
  * After creating tariffs, **intaQt** is able to calculate, convert and check the tariffs in any test scenario and immediately provide results concerning charging.
* **intaQt** Telephony Steps: Combine intaQt's Built-in Telephony steps with the Rater and you are read to automate the customer's experience using your network *and* ensuring the tariffs are applied correctly. Whether placing a call, sending an SMS or downloading data, **intaQt** supports the creation of test cases that reflect real-life behaviors.
* Switch between virtual phones and real phones as you integrate components into your test environment. In both cases, tariffs are calculated as though a real phone was being used in the network.
* Access intaQt's suite of Built-ins, which provide functionality for database connections, utility functions, protocol testing as well as accessing and manipulating different file types.

[intaQt Server Product Page](linkNotYetExisting.html)

#### intaQt Server (Online Verification)
Online Verification occurs when you perform Verification tests within a normal **intaQt** test case, such as a voice call or an SMS. The example below shows an **intaQt** test case, where lines `14`-`16` contain three Verification steps that collect CDRs, extract metadata and then run the check against the project's Rules.

**Example**
```go
1 Feature: callCompoundStep
2  Scenario: callCompoundStepScenario
3    Given a phone as A:
4      * of type Android
5      * where operator == "3 AT"
6      * with profile Vienna
7
8    Given a phone as B:
9      * of type Android
10      * where IMEI: "351554019631511"
11
12    And A starts a call to B as MYCALL:
13      * detect incoming call within 10 seconds
14    And copy cdrs matching variables "MMOVariables" from "cdrLocation" as "myCdrs"
15    And extract Account_ID from cdr myCdrs matching mom as accountIDValue
16    And run verification with cdrs "result" and rules "voice".oneCall
```

When using Online Verification, all **intaQt Server** functionality is available to combine with your tests.

### intaQt Studio (Online Verification)
QiTASC's integrated development environment provides features that improve your productivity and the quality of your tests:
* Auto-completion, go-to declarations and rename refactoring help you write, find and edit your tests with ease.
* Error inspections, line markers and notifications help you identify problems with your code as you write it.
* Create templates, in-code documentation, and more!

[intaQt Studio Product Page](linkNotYetExisting.html)

### The intaQt Verifier UI (Offline Verification)
The Verifier UI is a graphical user interface (GUI) specifically developed for executing Offline Verification tests. All Rules files, Selectors and configurations for Offline Verification are created in the Verifier UI. Additionally, short test cases that tell the UI to execute Verification steps are created and run within the application.

[intaQt Verification Product Page](linkNotYetExisting.html)

## Additional Product Add-ons

### intaQt Client
Our command line tool, which is included with all **intaQt Server** licenses, is capable of executing entire **intaQt** projects in continuous integration (CI) environments such as Jenkins and Team City to maximise levels of automation! **intaQt Client** also enables the execution of complex test suites via XML configuration.

[intaQt Client Product Page](linkNotYetExisting.html)

### ConQlude Reporting
Collect, manage and export **intaQt** test case project data as well as bug and error tracking without any manual effort. ConQlude Reporting automatically uploads all test reports, logs, media attachments and metadata to a centrally-accessible, secure web interface. This powerful but user-friendly interface ensures that users can remain confident that all test execution details are 100% correct, up-to-date and conform to formats recognized by external project management systems.

[ConQlude Product Page](linkNotYetExisting.html)
