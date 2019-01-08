---
layout: articleSection
title: QiTASC Resource Center
colorTitle: Introducing the QiTASC Resource Center
subtitleNewsroom: Get to Know INTACT
overview: Topics
img_url: img/articles/Documentation/DocuNewsroom.png
img_main_url: ../img/newsroom/Tutorial.jpg
category: article
group: visible
manualLink: 'https://docs.qitasc.com/'
link: 20180418-Documentation
date: 18.04.2018
ReadMore: Read More
subtext: Do you prefer to learn with step-by-step instructions, or do you enjoy figuring things out on your own? This year we launched the QiTASC Resource Center, which contains all our manuals, tutorials and other helpful documents.
anchors: ["intro", "whytutorials", "whymanuals", "future", "conclusion"]
anchorsNames: ["Manual or Tutorial?", "Why Use Tutorials?", "Why Use Manuals?", "Future Tutorials", "Conclusion"]

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



# Manual or Tutorial? Which QiTASC Resource Should You Use? <A name="intro"></a>

Longtime INTACT users have probably noticed quite a big change to our documentation over the past year.
The first change is that we've migrated all of our INTACT manuals to the [QiTASC Resource Center](http://docs.qitasc.com), making them much easier to access and search. PDF versions can still be downloaded and updated using the Cockpit, but we recommend using our online manuals.

The second change is that we're focusing on publishing straightforward **web and video tutorials** to help users quickly and incrementally become familiar with our most popular features.

Currently, the following **web tutorials** are available:
* [Setting up a New Phone for Use with INTACT](https://docs.qitasc.com/tutorials/PhoneSetup/phonesetup/)
* [Apptest](https://docs.qitasc.com/tutorials/AppTest/apptestintro/)
* [Using Custom Stepdefs and Virtual Phones](https://docs.qitasc.com/tutorials/AppTest/apptestintro/)
* [HTTP Built-ins and Custom Step Definitions](https://docs.qitasc.com/tutorials/HTTPBuiltins/httpintro/)
* [INTACT Client](https://docs.qitasc.com/tutorials/HTTPBuiltins/httpintro/)
* [QiTASC ConQlude Reporting Service](https://docs.qitasc.com/tutorials/Conqlude/conqludeintro/)
* [**Video Tutorial**: Introduction to INTACT Studio](https://www.youtube.com/watch?v=pSRzmsQjeIs)


## Why Use Tutorials? <a name="whytutorials"></a>
Tutorials are the best way to quickly get a feel for how a certain product or feature works. Although reference manuals are quite useful for looking up a specific piece of information, like the syntax for a specific function. Our tutorials first tell you all the components you need, such as QiTASC products and configurations and leave out the need to consult any additional sources. Our goal is for our tutorials to help you become comfortable with INTACT's features, while our reference manuals can serve as additional sources of information for you to look up when you need extra help with a certain topic.

If you're the kind of user who prefers to be explicitly shown how to us something from beginning to end, then we think you'll enjoy how easy our tutorials are to use. While our reference manuals cover all INTACT functionality, this type of documentation is limited in its ability to link multiple features or use cases together.

## Why Use Manuals? <a name="whymanuals"></a>
If you're already INTACT power user, or you're pretty comfortable with abstract concepts, then you might prefer to quickly skim through a manual to see how to write a particular feature or browse through our list of [INTACT Built-ins](https://docs.qitasc.com/builtins/introduction/).

Each of our product-specific reference manuals contain a comprehensive collection of **all available features**: If the feature exists, it's in the manual. To see all available manuals, visit the [QiTASC Resource Center](http://docs.qitasc.com)

**Note**: On *rare occasions*, new, experimental features may not be immediately documented in the Manual.

## Future Tutorials <a name="future"></a>
In addition to our existing tutorials, these are a few of the topics that we're creating for our web and video tutorials over the few months:
* **New Products and Features**:
  * INTACT Audio Plugin
  * Interactive Webtest
  * Remote Apptest
  * INTACT Phone plugin
  * Running INTACT in *bot mode* with QiTASC TYCHE
* **INTACT Basics**:
  * Core network testing with *compound steps*
  * INTACT Studio tips & tricks
  * INTACT Studio platform features
  * How to troubleshoot common problems
  * File and Matching Built-ins
* **INTACT Client**
  * Continuous integration (CI) with INTACT Client
  * Using Headless Chrome in a CI environment

# Conclusion <A name="conclusion"></a>
This year has seen our documentation team improve and expand on the resources that we offer to users. With the launch of the QiTASC Resource Center, all manuals, tutorials and other reference material is now available via our website. Our first set of tutorials has already been published and covers several different areas of INTACT's functionality. In the next few months, we'll be adding many more interactive resources, so be sure to check back for updates.

*Did we miss a specific tutorial topic that you're interested in?* Contact us at **office@qitasc.com** or speak to your QiTASC support contact and let us know what tutorial topics you'd like to see.
