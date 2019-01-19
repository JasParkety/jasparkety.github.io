---
layout: useCases
title: IFRS Testing
img_main_url: Path of the Image which is seen in the article right after the Title and subtext
category: useCases
group: visible
link: ifrs
subtext: Ensuring compliance to IFRS standards can be complicated and painstaking: Data centers typically require an interface that modifies their contents into IFRS-compliant structures.

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
# IFRS Testing

![alt text](../Website/IFRS.png)

The International Financial Reporting Standards (IFRS) involve widely adopted, standard language used for accounting and harmonizing financial statements, such as IFRS-9 and IFRS-15. These international standards are increasingly important as organizations establish business activities in multiple countries. Ensuring compliance to these standards is complicated and painstaking: Data centers typically require an interface that modifies their contents into IFRS-compliant structures.

IFRS verification occurs offline, as opposed to in a live environment while transactions take place. This is because IFRS data is typically collected for analysis and verification after a certain amount of time has passed. By creating automated test cases, massive data structures can be checked against specifications quickly and reliably, which greatly reduces the time and resources dedicated to accounting activities.

## QiTASC Products for IFRS Testing <a name="products"></a>

### intaQt Verification
**intaQt Verification** contains a sophisticated "Rules"-based engine, which has been developed to check that data has been modified properly and confirms to IFRS specifications. This includes checking that fields match, such as billing amounts, service name and service price.

The following functionality is included with **intaQt Verification**:

* CDR Selectors - These tell **intaQt Verification** which CDRs to choose. For example, if only voice call tickets should be used.
* Verification Rules - Rules define the type of "checks" that will be performed against the selected CDRs. For example, checking the difference between two properties such as the difference in time between the beginning of a voice call and its end, or the difference in a customer's account balance.
* Special functions for calculating properties and values within a test case

**Example Verification Rules File**
```go
CHECK_Service {
   check "service_name" matches "^.{1,40}$";
   check "service_price" matches "^\\d{0,23}(\\.\\d{1,2})?$";
   check "Billing/amount" matches "^-?\\d{0,23}(\\.\\d{1,2})?$";
   check "service_type" is one of "01", "02", "03", "04", "05", "06";
   check "reference_id" is one of $[ctx.reference_IDs] if present;
}
```

The example above checks that:
* `service_name` should have at least 1 and a maximum of 40 characters
* `service_price` should have a maximum of 23 digits, as well as 2 digits after the decimal point
  * The amount may be positive or negative.
* `amount`, which is a sub-path of `Billing`, should have a maximum of 23 digits, as well as 2 digits after the decimal point
  * The amount may be positive or negative
* `service_type` is *one of* the given values
* `reference_id` is *one of* a dedicated list, which has been defined within the **intaQt** configuration file


#### The intaQt Verifier UI
The Verifier UI is a graphical user interface (GUI) specifically developed for executing Offline Verification tests. All Rules files, Selectors and configurations for Offline Verification are created in the Verifier UI. Additionally, short test cases that tell the UI to execute Verification steps are created and run within the application. Next, the test case is executed and a report containing the results for all parameters tested becomes available immediately.


### intaQt Server
The **intaQt Server** supports testing XML files containing massive data structures, which makes it especially suited for IFRS verification. This is made possible through an extensive collection of built-in steps as well as special Built-ins, which facilitate integration into the different environments and interfaces that accompany IFRS metadata. Key **intaQt Server** features that support IFRS testing include:

* XML Built-ins - The software architecture enables verifying huge XML files in just a few minutes.
* Matching Built-ins verify large XML files (e.g. > 1Gb). They stream files to prevent memory issues on standard hardware, rather than building a model of the structure in memory. Matching built-ins use Matchers, which are objects that hold callbacks, to verify a document.
* Create Feature Files consisting of scenarios that define the steps needed to execute the test case
* Develop custom models and functions to customize behaviors
* **intaQt Server** custom language for scripting functions.
* Flexible configurations to integrate external interfaces with intaQt.

### intaQt Studio
QiTASC's integrated development environment provides features that improve your productivity and the quality of your tests:
* Auto-completion, go-to declarations and rename refactoring help you write, find and edit your tests with ease.
* Error inspections, line markers and notifications help you identify problems with your code as you write it.
* Create templates, in-code documentation, and more!

## Additional Product Add-ons

### intaQt Client
Our command line tool, which is included with all **intaQt Server** licenses, is capable of executing entire IFRS Verification projects in continuous integration (CI) environments such as Jenkins and Team City to maximize levels of automation. **intaQt Client** also enables the execution of complex test suites via XML configuration, which provides added efficiency to testing IFRS data structures.

[intaQt Client Product Page](linkNotYetExisting.html)

### ConQlude Reporting
Collect, manage and export **intaQt Verification** test case project data as well as bug and error tracking without any manual effort. ConQlude Reporting automatically uploads all test reports, logs, media attachments and metadata to a centrally-accessible, secure web interface. This powerful but user-friendly interface ensures that users can remain confident that all test execution details are 100% correct, up-to-date and conform to formats recognized by external project management systems.

[ConQlude Product Page](linkNotYetExisting.html)
