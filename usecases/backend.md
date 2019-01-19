---
layout: useCases
title: Backend Testing
img_main_url: Path of the Image which is seen in the article right after the Title and subtext
category: useCases
group: visible
link: backend
subtext: Backend testing involves testing, checking or verifying functionality on the server side of an application. This is important for confirming that interdependent or tightly-coupled components are communicating correctly and producing and storing data properly.

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
## Backend Testing <a name="backend"></a>
Backend testing involves testing, checking or verifying functionality the server side of an application. This is important for confirming that interdependent or tightly-coupled components are communicating correctly and producing and storing data properly. Performing backend tests is critical for finding and fixing bugs early in a project's development help to ensure a robust infrastructure.

Backend testing typically involves testing and validating at least one of the following:
* APIs
* Databases
* Servers

## QiTASC Products for Backend Testing <a name="products"></a>

### intaQt Server
**intaQt** supports most communication interfaces that exchange data within backend systems through its extension collection of Built-ins. These provide out-of-the-box functionality that cover use cases such as database connections, XML matching, programming language-specific content generation and utility functions. The predefined Built-ins functions apply to many contexts and enable writing complex, custom **intaQt** tests without the need for additional software. As a result, backend testing can be seamlessly integrated into larger **intaQt** projects, which is useful for projects that test both the frontend *and* backend.

#### HTTP/REST
The HTTP Built-ins are primarily used for Request Builder functions (`get`, `post`, `put`, `delete`, `head` or `options`) and the available builder methods, as well as HTTP cookies & cookie stores, HTTP clients & client contexts and HTTP RequestConfigBuilder.

#### SSH and SCP
The Secure Shell (SSH) Built-ins facilitate starting SSH actions, such as batch processing, to accomplish multiple tasks in a single session. Additionally, the Secure Copy Protocol (SCP) Built-in can perform activities such as fetching log files for future analysis.

#### LDAP
The Lightweight Directory Access Protocol (LDAP) Built-ins provide full LDAP functionality within test cases. Available functions include creating new participants in a telecommunications network, debugging and executing queries.

#### CSV, JSON and XML
The **intaQt Server** efficiently processes responses in CSV, JSON and XML. These Built-ins support the most important data formats for backend testing, allowing for seamless automation. Additionally, XML Built-ins enable processing XML strings. Their two main functionalities involve decoding XML into a map and evaluating XPath to string.

#### E-Mail and PDF
The E-mail and PDF Built-ins allow the **intaQt Server** to send reports via E-mail in HTML and PDF format as part of test cases. Additionally, the PDF Built-ins can complete PDF forms before sending them as E-mail attachments.

#### SQL
The SQL Built-in facilitates direct access to databases within a test case. Supported functions include query execution, result retrieval and performing SQL functions.

#### Matching
Matching Built-ins verify large XML files (for example, larger than 1Gb). They stream files rather than building a model of the structure entirely in memory, which prevents memory issues on standard hardware. Matching Built-ins use objects that hold callbacks (called Matchers) to verify a document.

#### Fuzz
Fuzz Built-ins provide functions for generating random values, including number ranges, date ranges and strings. It is also possible to exclusively generate such values near boundaries.

### intaQt Client
**intaQt Client** is used to execute entire **intaQt** test projects from the command line, and can be integrated into continuous integration (CI) environments like Jenkins and TeamCity. Combined with the **intaQt Server**'s parallel execution functionality, acceptance test suites can be run and re-run between very short development cycles. **intaQt Client** also provides configurable features that allow users to:
* Specify how often to retry failed tests.
* Pass parameters to specify ports, configurations or hosts for different projects.
* Upload local project changes to the server before execution.
* Create XML configuration files to create complex test suites with tags.

### intaQt Studio
QiTASC's integrated development environment provides features that improve your productivity and the quality of your tests:
* Auto-completion, go-to declarations and rename refactoring help you write, find and edit your tests with ease.
* Error inspections, line markers and notifications help you identify problems within your code as you write it.
* Create templates, in-code documentation, and more!

## Additional Product Add-ons

### intaQt Verification
**intaQt Verification** can be used to instantly test acceptance test output as an additional quality check. Verification tests may be executed *online*, as an **intaQt Server** test case is being executed, or *offline*, for example, if tickets are only collected at the end of each day. In both cases, the following functionality is included with **intaQt Verification**:

* Verification Selectors - These tell **intaQt Verification** which tickets to choose (for example, if only voice call tickets should be used.
* Verification Rules - Rules define the type of "checks" that will be performed against the selected tickets (for example, checking the difference between two properties such as the difference in time between the beginning of a voice call and its end, or the difference in a customer's account balance).
* Special functions for calculating properties and values within a test case/

[intaQt Verification Product Page](linkNotYetExisting.html)

### ConQlude Reporting
Collect, manage and export **intaQt** test case project data as well as bug and error tracking without any manual effort. ConQlude Reporting automatically uploads all test reports, logs, media attachments and metadata to a centrally-accessible, secure web interface. This powerful but user-friendly interface ensures that all test execution details are 100% correct, up-to-date and in compliance with formats recognized by external project management systems.

[ConQlude Product Page](linkNotYetExisting.html)
