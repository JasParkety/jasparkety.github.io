---
layout: useCases
title: Protocol Testing
img_main_url: Path of the Image which is seen in the article right after the Title and subtext
category: useCases
group: visible
link: protocol
subtext: Protocol testing checks that data is transmitted between devices and over networks according to protocol specification.
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
## Protocol Testing <a name="protocol"></a>
Protocol testing checks that data is transmitted between devices (such as routers, switches, and computers) over networks according to protocol specification. These protocol specifications define the rules that devices must follow when they communicate with each other over networks. Depending on the types of network and data, protocols used may include:
* Session Initiation Protocol (SIP) - For example, when testing mobile phone calls over VoLTE or instant messaging
* Transaction Capabilities Application Part (TCAP) - For example, when testing mobile calls
* Diameter - For example, when testing data sessions such as downloading or uploading

These tests often involve capturing network packets of an application on an interface and comparing them against a published standard of the protocol. For example, during a phone a call, a test may start a trace file by executing a script on a phone or Internet of Things (IoT) device. After the call ends, the SSH script is stopped and the trace file is downloaded and compared to see if it conforms to protocol. Because of the variety of formats and types, protocol testing often also requires decoding messages before they can be checked.  


## QiTASC Products for Protocol Testing <a name="products"></a>

### intaQt Server
The **intaQt Server** enables the creation of custom functions and models that automate the communication between devices and over networks. Additionally, our extensive collection of Built-ins provide out-of-the-box functionality for many protocol layers including many protocol layers such as secure shell (SSH), secure copy protocol (SCP), Internet protocol (for example, IPv4, IPv6), LDAP and HTTP/REST. These Built-ins contain predefined functions that address the most important and common events and actions that arise when testing protocols.  

Predefined Built-in functions apply to diverse protocol use cases and allow users to develop automated test cases without the need for additional software. Additionally, functions and models may be reused across projects, eliminating the need to rewrite functions for each test cases. This combination of reusability and predefined functions ensures robust, accurate protocol tests that reflect real-life behavior.

#### HTTP/REST
The HTTP Built-ins enable the communication with external systems and support Request Builder functions (`get`, `post`, `put`, `delete`, `head` or `options`), as well as HTTP cookies & cookie stores, HTTP clients & client contexts and HTTP RequestConfigBuilder.

#### SSH and SCP
The Secure Shell (SSH) Built-ins facilitate starting SSH actions, such as batch processing, to accomplish multiple tasks in a single session. Additionally, the Secure Copy Protocol (SCP) Built-in can perform activities such as fetching log files for future analysis.

#### LDAP
The Lightweight Directory Access Protocol (LDAP) Built-ins provide full LDAP functionality within test cases. Available functions include creating new participants in a telecommunications network, debugging and executing queries.

#### JSON and XML
The **intaQt Server** efficiently processes responses JSON and XML, and provices encoding and decoding functions. These Built-ins support the most important data formats for protocol testing, allowing for seamless automation. Additionally, XML Built-ins enable processing XML strings. Their two main functionalities involve decoding XML into a map and evaluating XPath to string.

#### RawSocket
RawSocket Built-ins open a Raw Socket Connection to any host on any port, as well as send and receive messages to and from the service.

#### Executor
Executor Built-ins execute any process available via the command line: Any process that can be invoked from the command line can be incorporated into an Executor Built-in function. Predefined functions include `wait for`, `output`, `error`, `input`, `is alive`, `exit value` and `kill`.

### Files
File Built-ins provide methods for file system access. In Protocol testing, File Built-in functions are frequently used for locally processing traces before comparing them with each other.


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
**intaQt Verification** can be used to instantly test acceptance test output as an additional quality check. Verification tests may be executed *online*, as an **intaQt Server** test case is being executed, or *offline*, for example, if tickets are only collected at the end of each day. In both cases, the following features are included with **intaQt Verification**:

* Verification Selectors - These tell **intaQt Verification** which tickets to choose (for example, if only voice call tickets should be used.
* Verification Rules - Rules define the type of "checks" that will be performed against the selected tickets (for example, checking the difference between two properties such as the difference in time between the beginning of a voice call and its end, or the difference in a customer's account balance).
* Special functions for calculating properties and values within a test case.

[intaQt Verification Product Page](linkNotYetExisting.html)

### conQlude Reporting
Collect, manage and export **intaQt** test case project data as well as bug and error tracking without any manual effort. conQlude Reporting automatically uploads all test reports, logs, media attachments and metadata to a centrally-accessible, secure web interface. This powerful but user-friendly interface ensures that all test execution details are 100% correct, up-to-date and in compliance with formats recognized by external project management systems.

[ConQlude Product Page](linkNotYetExisting.html)
