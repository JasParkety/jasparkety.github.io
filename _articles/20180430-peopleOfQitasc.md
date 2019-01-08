---
layout: articleSection
title: The People of QiTASC
colorTitle: The People of QiTASC
subtitleNewsroom: Get to Know QiTASC
overview: Topics
img_url: img/articles/peopleOfQitasc/ScientificBackgroundNewsroom.png
img_main_url: /img/newsroom/Spotlight.png
category: article
group: visible
manualLink: 'https://docs.qitasc.com/'
link: 20180430-peopleOfQitasc
date: 30.04.2018
ReadMore: Read More
subtext: Developing complex automation testing solutions requires expertise that covers different fields of knowledge. Here at QiTASC, our international team consists of people with diverse technical backgrounds that allow us to work across disciplines to create powerful INTACT features.
anchors: ["introduction", "whereFrom", "whatQitasc", "disciplines", "audio", "homeAutomation", "innovation", "conclusion"]
anchorsNames: ["The People of QiTASC", "Where We Come From", "What QiTASC does", "Our Diverse Disciplines", "Case Study - Audio Plugin", "Case Study - Home Automation", "Every Day Innovation", "Conclusion"]

########## README
########## Article defines as a page of an article, e.g. www.qitasc.com/articles/20180320-VirtualPhones
########## Newsroom defines as the www.qitasc.com/Newsroom/ page which contains the articles

########## SYNTAX

# layout: articleSection this builds the page according to layouts/articleSection.html
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


# The People of QiTASC <a name="introduction"></a>
Who is behind the software at QiTASC? Our team is made up of about 50 people between our Vienna and Düsseldorf locations. Despite being a small Austrian company, our employees come from nearly 20 different countries and have diverse technical backgrounds. This allows us to match the right specialists to our own projects *and* to support our customers.

## Where We Come From <a name="whereFrom"></a>
![alt text](../img/articles/peopleOfQitasc/Map.png)

About half of our employees come from Austria or Germany, with another 40% coming from other European countries and the rest coming from North America, Asia and Australia. Many of our foreign employees came to QiTASC during or after completing a university degree in Austria. With so many different nationalities, English and German are the most commonly used languages in our offices. At our Vienna location, beginner and intermediate German courses are offered to employees who want to improve their fluency.

## What QiTASC Does <a name="whatQitasc"></a>
![alt text](../img/articles/peopleOfQitasc/Circle.png)

QiTASC is largely made up of developers and test engineers along with several small 2-3 person teams in areas including IT, management and marketing. It's not uncommon to see developers working with the test team to get feedback on new features, or to see the technical writers liaising between testers and development to create documentation that is both technically accurate and helpful. Working across and within departments ensures knowledge transfer and lets us learn from each other.  

## Our Diverse Disciplines <a name="disciplines"></a>
![alt text](../img/articles/peopleOfQitasc/ScientificBackground.png)

Although many of our employees previously studied computer sciences, IT or software engineering, some of the other backgrounds QiTASC's employees come from include:
* Chemistry
* Economics
* Engineering (e.g. electronic, electrical and bioresource)
* Finance
* Literature
* Math
* Music
* Physics
* Telecommunications

Having such a diverse group of people allows us to work in cross-disciplinary teams to tackle unique development and customer-specific problems that benefit from being looked at through multiple perspectives.

## Case Study: Audio Plugin <a name="audio"></a>
![alt text](../../img/newsroom/AudioPlugin.jpg)
A big challenge in automated mobile testing is executing tests that verify **voice announcements** are played in certain scenarios -- and that the *correct* announcements are played. Often, announcements must still be manually played back and checked, which can add a lot of unnecessary  additional time to testing. The QiTASC [Audio Plugin](http://www.qitasc.com/articles/20180326-AudioPlugin) was developed as a solution to this problem: Its **Audio Fingerprinting** functionality compares audio recordings against a database of reference announcements and provides a *similarity score*.

Developing the Audio Plugin could not have been possible without a multidisciplinary approach that drew on physics, computer sciences and sound engineering. One developer, with a background in theoretical physics, used his expertise to adapt existing audio comparison algorithms to our specific use cases. At the same time, a second developer who is currently studying media informatics used his knowledge of audio technology and sound synthesis to refine the Audio Plugin's features. A third developer, whose experience is firmly rooted in computer engineering, focused on developing all INTACT-side aspects of the Audio Plugin and integrating its functionality into our software.

## Case Study: Home Automation <a name="homeAutomation"></a>
![alt text](../img/about/collaboration/Prozess_Analyse.png)

During a recent project, a customer used INTACT to control a home automation app that tested devices such as alarm systems, smoke detectors and thermostats. Because the customer's app interacts with different devices, the customer's test environments needed to include certain physical events and moving objects that could behave in ways that accurately reflect a real-life scenario. Luckily, one of our senior developers, who studied both telecommunications engineering and software engineering, had a lot of experience with building devices and integrating them into specialized computer programs. This allowed him to create several prototypes.

After a few experiments and some expert advice about INTACT's Apptest from our test engineers, we designed custom hardware that successfully behaved as an intermediary between INTACT and the devices being used by the customer's home automation app. This enabled the efficient use of Apptest to test the customer's home automation product.

### Every Day Innovation <a name="innovation"></a>
The recent home automation project and our new audio plugin are some of the project-level examples of our interdisciplinary approaches to technical problems. However, during project days, hack days and regular company-wide workshops, QiTASC employees also have the opportunity to collaborate, get creative and experience cross-learning. A few other new and soon-to-be released features that resulted from these events include:
* QiTASC TYCHE, resource aware scheduler that schedules tests on bots.
* The online [QiTASC Resource Center](http://docs.qitasc.com) and the [QiTASC Newsroom](http://www.qitasc.com/Newsroom/)
* Interactive Webtest & Interactive Apptest
* Internal data analysis tools
* Researching ways to reduce or avoid the need to write test cases

## Conclusion <a name="conclusion"></a>
At QiTASC, our talented team of developers and test engineers -- along with our technical writers, sales & marketing, IT, management and back office -- have a variety of backgrounds both in terms of academic and professional experience as well as their countries of origin. This diversity means when a complicated technical challenge arises, we can draw on multiple areas of expertise to design sound solutions while sharing new knowledge with each other.

Are you interested in joining the QiTASC team? Check out our [Jobs](http://www.qitasc.com/about/jobs) page for open positions at both our Vienna and Düsseldorf locations!
