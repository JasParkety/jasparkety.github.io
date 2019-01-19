---
layout: useCases
title: Acceptance Testing
img_main_url: Path of the Image which is seen in the article right after the Title and subtext
category: useCases
group: visible
link: acceptance
subtext: Acceptance testing is comprised of Factory Acceptance and Field Acceptance test phases. This type of testing is done is used to ensure that a system behaves correctly, and involves testing the software itself from an end user's perspective.


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
## Acceptance Testing <a name="acceptance"></a>
![alt text](../NewWebsite/AcceptanceTesting.png)

Acceptance testing is comprised of Factory Acceptance and Field Acceptance test phases. This type of testing is done is used to ensure that a system behaves correctly: It involves *testing the software itself* from an end user's perspective. Acceptance testing is ongoing and may include:
* Checking release versions of external software implementations such as webdrivers
* Ensuring that newly-incorporated or updated code works
* Diagnosing and correcting defects

At QiTASC, we have seen just how powerful acceptance testing is ourselves: We use **intaQt** for our own acceptance tests and consider it a critical part of QA for software development.

## QiTASC Products for Acceptance Testing <a name="products"></a>


### intaQt Server
The **intaQt** Server (**intaQt**) comes with an extension collection of built-in steps and allows parallel execution. Together, this creates a powerful, efficient and realiable acceptance test environment. **intaQt** features that optimize acceptance testing (and that we use when testing **intaQt** ourselves) include:

* Parallel execution capabilities: Parallelizing executions using multiple **intaQt Server** profiles on a single PC means that acceptance tests can be completed in shorter and shorter times. This allows **intaQt** users to meet tight deadlines between releases while ensuring high-quality products.
* **intaQt** Telephony Steps: Whether placing a call, sending an SMS or downloading data, **intaQt** supports you in creating test cases that reflect real-life behaviours
* intaQt's Built-ins test that your software is communicating correctly with different protocols and interfaces, and that file output is in the correct format or structure.
* Use virtual phones or real phones as you integrate components into your test environment.

### intaQt Client
**intaQt Client** is used to execute entire **intaQt** test projects from the command line, and can be integrated into continuous integration (CI) environments like Jenkins and TeamCity. Combined with the **intaQt Server**'s parallel execution functionality, acceptance test suites can be run and re-run between even very short development cycles. **intaQt Client** also provides configurable features that allow users to:
* Specify how often to retry failed tests.
* Pass parameters to specify ports, configurations or hosts for different projects.
* Upload local project changes to the server before execution.
* Create XML configuration files to create complex test suites with tags.

### intaQt Studio
QiTASC's integrated development environment provides features that improve your productivity and the quality of your tests:
* Auto-completion, go-to declarations and rename refactoring help you write, find and edit your tests with ease.
* Error inspections, line markers and notifications help you identify problems with your code as you write it.
* Create templates, in-code documentation, and more!


## Additional Product Add-ons

### intaQt Verification
**intaQt Verification** - **intaQt Verification** can be used to instantly test acceptance test output as an additional quality check. **intaQt Verification** may be executed *online*, as an **intaQt Server** test case is being executed, or *offline*, for example, if CDRs are only collected at the end of each day. In both cases, the following functionality is included with **intaQt Verification**:

* CDR Selectors - These tell **intaQt Verification** which CDRs to choose. For example, if only voice call tickets should be used.
* Verification Rules - Rules define the type of "checks" that will be performed against the selected CDRs. For example, checking the difference between two properties such as the difference in time between the beginning of a voice call and its end, or the difference in a customer's account balance.
* Special functions for calculating properties and values within a test case

[intaQt Verification Product Page](linkNotYetExisting.html)

### ConQlude Reporting
Collect, manage and export **intaQt** test case project data as well as bug and error tracking without any manual effort. ConQlude Reporting automatically uploads all test reports, logs, media attachments and metadata to a centrally-accessible, secure web interface. This powerful but user-friendly interface ensures that users can remain confident that all test execution details are 100% correct, up-to-date and conform to formats recognized by external project management systems.

[ConQlude Product Page](linkNotYetExisting.html)
