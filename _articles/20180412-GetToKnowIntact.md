---
layout: newsroomArticle
title: Eight Important Automated Testing Scenarios Where INTACT Excels
colorTitle: Eight Important Automated Testing Scenarios Where <span class="orange">IN</span>TACT<sup>®</sup> Excels
subtitle: Get To Know INTACT
subtitleNewsroom: Get To Know INTACT
overview: Topics
img_url: assets/images/newsroom/articles/GetToKnowIntact/GetToKnowIntact.jpg
category: article
group: visible
manualLink: 'https://docs.qitasc.com/'
link: 20180412-GetToKnowIntact
date: 12.04.2018
ReadMore: Read More
subtext: Depending on the behaviours you're testing and whether they represent ongoing activities or single points in time, you might use INTACT in many different ways. Here we cover eight of the most common automation use cases, including core network testing, Internet of Things and charging conformity.
text: We've listened to your feedback, so this year we're shifting our documentation focus away from our extensive manual and more towards learning and letting users get a head start on using INTACT's features. Starting with Apptest, we'll be publishing additional tutorials over the next several weeks. As part of creating useful, trouble-free material, members of our documentation team try the tutorials out themselves using the same hardware and software that a customer would. This helps us write tutorials from the end user's point of view and ensures that we don't leave any steps out.
anchors: ["core", "ifrs", "IoT", "charging", "endtoend", "acceptance", "migration", "conclusion"]
anchorsNames: ["Core Network Testing", "IFRS Testing", "Internet of Things", "Charging Conformity & Tariff Verification", "End to End Testing", "Acceptance Testing", "Migration Testing", "Conclusion"]

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


# Eight Important Automated Testing Scenarios Where INTACT Excels

INTACT is well suited for automating a variety of projects, including core network testing, Internet of Things and even complex migration projects. In this article, we'll cover eight of the most popular use cases that our customers use INTACT for:
* Core network testing
* IFRS testing
* Internet of Things
* Charging conformity & Tariff verification
* End-to-end testing
* Acceptance testing
* Migration testing

## Core Network Testing <a name="core"></a>
![alt text](..assets/images/newsroom/articles/GetToKnowIntact/CoreNetwork.png)

Core network testing involves checking that the fundamental components of a network are behaving the way that they should over the course of a system life cycle. This includes many regression tests for patches, updates, upgrades and network element replacement projects. The core network features INTACT tests include:
* Making and receiving different types of phones calls using:
  * Mobile phones (2G, 3G, 4G, WiFi, VoLTE)
  * VoIP phones
  * ISDN phones
  * POT phones
* Sending and receiving SMS
* Managing data connections and uploading/downloading content
* Roaming
* Verifying the speech channel of a call
* Verifying protocol messages of a call flow

Network operators follow system life cycles, involving regular system updates that, in turn, require system verification. INTACT significantly shortens the test cycle by automating virtually possible core network functionality with its **built-in steps**. Our custom languages also enable the easy creation of unique steps for complicated or uncommon scenarios to ensure testing that reflects real-world scenarios. Generally, real phones are used to ensure that calls are established. However, [Virtual Phones](http://www.qitasc.com/articles/VirtualPhones) may also be used when switching between testing environments.


## IFRS Testing  <a name="ifrs"></a>
![alt text](..assets/images/newsroom/articles/GetToKnowIntact/IFRS.png)
The International Financial Reporting Standards (IFRS) involve widely adopted, standard language used for accounting and for harmonizing financial statements, such as IFRS-9 and IFRS-15. These international standards are increasingly important as organizations establish business activities in multiple countries. Ensuring compliance to these standards is complicated and painstaking: Data centers typically require an interface that modifies their contents into IFRS-compliant structures.

INTACT has dedicated built-in features, as well as a sophisticated rule engine, which are suitable for checking that data has been modified properly and conforms to IFRS specifications. The software architecture enables verifying huge XML files in just a few minutes. By automating these tests, massive data structures can be checked against specifications quickly and reliably, which greatly reduces the time and resources dedicated to accounting activities.  

## Internet of Things <a name="IoT"></a>
![alt text](..assets/images/newsroom/articles/GetToKnowIntact/IOT.png)
QiTASC has created a test environment based on 3D prints to hold and manipulate IoT devices, actors and sensors controlled by INTACT. These can then adjust, configure and detect actions on IoT devices. INTACT then automates and tests characteristics of interconnected devices that are used for **smart home automation**. For example, our customers have used INTACT to test apps that:
* Control a room's thermostat over the Internet
* Have an alarm system that notifies the user about events
* Verify that a smoke alarm detects particle density changes
* Control both optical and magnetic door/window contacts

INTACT verifies the **End-to-End** behavior of these scenarios: Actions are automatically triggered via actors, then sensors notify INTACT of the changes. At the same time, INTACT checks if the expected result is displayed on the customer's app. IoT projects make use of INTACT's **Webtest** language, which constructs test cases out of the **XPaths** found in an application being automated. You can learn more in our [Apptest Tutorial](http://www.qitasc.com/articles/IntactTutorials).


## Charging Conformity <a name="charging"></a>
![alt text](..assets/images/newsroom/articles/GetToKnowIntact/ChargingConformity.png)

Our INTACT Verification is able to verify several hundred parameters that affect charging within a few seconds. These parameters include:
* Phone & Subscriber details (e.g. phone type, phone number, service provider)
* Call & event details (e.g. calling parties, lengths of time, passed/failed steps)
* Internal infrastructure
* Legal requirements
* Financial characteristics

First, INTACT fetches call detail records (CDRs), event data records (EDRs) and logs from relevant systems. Then it checks all data against expected conditions configured for that project. When verification fails, a report provides details about which parameters didn't match to help you determine where the source of the problem is.

INTACT is also used to verify all charging records that are generated by the network elements for a dedicated use case. There are more than 800 basic charging use cases according to the INTACT Verification "rules" we have developed. The most complex scenarios have up to 20 different CDRs with more than 3000 parameters. We verify the correct number of CDRs, the correlation of values within and across the CDRs as well as every single parameter by content and format.

## Tariff Verification

![alt text](..assets/images/newsroom/articles/GetToKnowIntact/Tariff.png)

When verifying tariffs, INTACT instantaneously checks subscriber details to ensure subscriber's accounts are treated correctly in different environments, such as convergent charging systems (CCS) and online charging systems (OCS). Our **INTACT Rater** enables the easy creation and maintenance of tariffs. After importing or creating the tariffs, INTACT can then calculate, convert and check them against any scenario and immediately provide results.


## End-to-End Testing <a name="endtoend"></a>
![alt text](..assets/images/newsroom/articles/GetToKnowIntact/E2E.png)

End-to-end testing involves testing real-world scenarios from start to end. This is done to ensure, for example, that the network behaves exactly the same as it would when triggered by a customer's smartphone. These tests use real devices, meaning there is no need for injections to trigger core functionality. The advantage over using a simulated input is that you can be confident in the validity of the device behavior and test outcomes.


## Acceptance Testing <a name="acceptance"></a>
![alt text](..assets/images/newsroom/articles/GetToKnowIntact/AcceptanceTesting.png)

Acceptance testing, which is comprised of **factory acceptance** and **field acceptance** test phases, is used to ensure that a system behaves correctly: It involves testing the software itself from an end user's perspective. This type of testing is ongoing and may include:
* Checking release versions of external software implementations such as webdrivers
* Ensuring that newly-incorporated or updated code works
* Diagnosing and correcting defects

At QiTASC, we have seen just how powerful acceptance testing is ourselves: We use INTACT for our own acceptance tests and consider it a critical part of QA for software development. By parallelizing executions, acceptance tests can be completed in shorter and shorter times, which allows INTACT users to meet tight deadlines between releases while ensuring high quality products.

## Migration Testing <a name="migration"></a>
![alt text](..assets/images/newsroom/articles/GetToKnowIntact/Migration.png)
There is often a very small window of time to test the migration of subscribers from an existing system to a new environment.
When done manually, only a handful of test cases can be executed before a decision must be made about whether to use the new system or return to the old one. By automating these tests with INTACT, it's possible to continually execute several hundred test cases in a few hours. This results in a higher test coverage and data, which allow for better decisions whether or not to proceed with the migration or revert to the old state.

## Conclusion <a name="conclusion"></a>

We developed INTACT to be suitable for diverse testing scenarios that are applicable for different stages of the development cycle. Determining the correct type of test approach depends on multiple factors, such as the types of behaviors to check and whether the tests are continuous or represent single points in time. Additionally, many of these use cases can overlap with each other, for example, a project that tests core network functionality may also include tariff verification. Although the eight use cases we've covered are the most popular, there are many other applications for INTACT's automated testing capabilities.

*Did we miss a specific topic that you're interested in?* Contact us at **office@qitasc.com** and we can talk about how to incorporate INTACT into your testing.
