---
layout: articleSection
title: How to Customize your INTACT Test Case Execution Experience
colorTitle: How to Customize your <span class="orange">IN</span>TACT<sup>®</sup> Test Case Execution Experience
subtitle: Test Case Execution
subtitleNewsroom: Get to Know INTACT
overview: Topics
img_url: img/articles/IntactExecution/ExecutionSmall.png
img_main_url: ../img/newsroom/IntactExecution.png
category: article
group: visible
manualLink: 'https://docs.qitasc.com/'
link: 20181101-IntactExecution
date: 01.11.2018
ReadMore: Read More
subtext: When executing several tests within the same project, it's often necessary to adapt them to changes that arise so that all tests are compatible with each other. INTACT Studio allows you to configure individual scenarios to prioritize test cases, ignore unwanted Scenarios and add custom Context Objects to make sure your tests run smoothly.
anchors: ["featureFiles", "multipleFeatures", "runConfiguration", "annotations", "contextObjects", "conclusion"]
anchorsNames: ["INTACT Feature Files ", "Executing Multiple Feature Files", "Editing the Run Configuration", "Using Annotations", "Creating Context Objects", "Conclusion"]
---

To illustrate how you can customize your INTACT test cases executions, we'll use two Feature Files from a small project, which you might recognize from [INTACT Studio Tips and Tricks](http://www.qitasc.com/articles/20181008-StudioTricks):
![alt text](/img/articles/IntactExecution/testProject.png)

## INTACT Feature Files <a name="featureFiles"></a>
The first Feature File is a Webtest that performs a simple Google search and checks that the first search result matches a text that we want:
![alt text](/img/articles/IntactExecution/googleFeatureFile.png)

The second Feature File tests a Smart Home interface, which reads the temperature from a thermostat display and compares against an expected value:
![alt text](/img/articles/IntactExecution/thermostatFeatureFile.png)

This Feature File includes two **Examples** we read the values from. We check the values from `display1.jpg` and check that it is 20 degrees Celsius. Then and we check that `display2.jpg` shows a temperature of 10.5 degrees Celsius.

![alt text](/img/articles/IntactExecution/thermoDisplays.png)

We'll execute the Temperature Feature File by right-clicking inside the INTACT Studio editor window and choosing the `Run` feature:

![alt text](/img/articles/IntactExecution/runTemperature.png)

We see all tests have passed, but we also want to see which scenarios and steps were executed. Therefore, we'll click the Show Passed Test button:

![alt text](/img/articles/IntactExecution/testsPassed.png)

As expected, the two scenarios showing the different thermostat display values that were defined for our test case. We can further expand these by clicking on the arrow buttons to reveal the results from each Step executed by INTACT:

![alt text](/img/articles/IntactExecution/testsPassed2.png)

## Executing Multiple Feature Files <a name="multipleFeatures"></a>
INTACT can also execute *multiple* Feature Files. We can do this by choosing the directory in which we wish to execute the Feature Files, then right-click the directory it and then we can run all Feature Files inside the directory. This will execute three Scenarios -- one Scenario from our Webtest, and the two temperature reading Scenarios:
![alt text](/img/articles/IntactExecution/runFeatures.png)

 As you can see, the Webtest Scenario failed on the `on browser, search for query` Step. When a Step fails, all subsequent steps are skipped:

![alt text](/img/articles/IntactExecution/runFeaturesResult.png)

## Editing the Run Configuration <a name="runConfiguration"></a>
When executing multiple test cases in this manner, that INTACT Studio creates a default Run Configuration. In *most* cases, the default Run Configuration is sufficient, but under some circumstances, we might want to customize the test run according to our needs.

We can do this by going to the Run Configurations menu and selecting `Edit Configurations...`, which will bring up a new window:

![alt text](/img/articles/IntactExecution/editConfigurations.png)

We had two test runs and for each of those INTACT Studio created default Run Configurations, that look something like this. We'll go through each item within the configurations and explain how they work:

![alt text](/img/articles/IntactExecution/defaultRunConfigurations.png)

* The **Run Configuration `Name`** can be chosen freely, but it must be unique, otherwise it may conflict with other configurations.
* The **Feature file or directory** is the relative path starting from the project root that points to the Feature File or to the directory that we want INTACT to execute.
* The **hostname and port** for the INTACT Server that we want our tests to run on. If you have a custom INTACT installation, you may choose a different hostname and the port.
* The **Tags** configuration is **very important**. By default, you will see `~ignored`, which means INTACT will always execute tests that are *not tagged with* the `@ignored` annotations.

## Using Annotations <a name="annotations"></a>

Let's see how these annotations work by returning to our Google search Feature File. We might choose to ignore a Feature because it always fails. We can annotate it with `@ignored` and next time we run our entire `features` directory, we see that this scenario is no longer executed:

![alt text](/img/articles/IntactExecution/runIgnored.png)

On the other hand, we might want to execute a test based on annotations. For example, we might have a scenario where we want to execute all the ignored files inside our project. We'll select `Edit Configurations...` again, and delete the tilde (`~`) before `ignored`, and then save the configuration:

![alt text](/img/articles/IntactExecution/removeTilde.png)

When we run the project again, now it *only* runs the annotated test as we expected. Of course, this test fails but it’s interesting for us to see *why* it fails:

![alt text](/img/articles/IntactExecution/runIgnored2.png)

## Creating Context Objects <a name="contextObjects"></a>
The Google Feature File has two **arguments**: the `search for query`, and the `expectedFirstResultName`. We expected both arguments be references inside of **Context Objects** for our test run. By clicking on failed step, we can see an excerpt of the INTACT log, which contains an error message:

![alt text](/img/articles/IntactExecution/unresolved.png)

The problem, as you can see above, is that `query` and the `‘expectedFirstResultName’` are not yet defined inside our project. That’s why we cannot resolve those properties. One approach to fixing this problem is to define `query` and `expectedFirstResultName` as Context Objects inside our project configuration (`project.conf`):

![alt text](/img/articles/IntactExecution/editProjectConf.png)

In our project configuration file, we'll define two Context Objects:
* For `query`, we specify `"qitasc"`.
* For `expectedFirstResultName`, we expect the first search result to be the QiTASC website, which has the title `"QiTASC - the magic of testing"`.

When we run the Google Webtest again, we'll see a browser window open and the word `qitasc` are typed into the Google search bar. The first search result was what we wanted:
![alt text](/img/articles/IntactExecution/webtestChrome.png)

## Conclusion <a name="conclusion"></a>
This article showed a few of the many ways that you can customize your test case execution experience with INTACT. This includes editing Run Configurations so that they ignore (or don't ignore) certain files, creating Context Objects and executing multiple feature files. For more ideas about managing your test cases, check out [INTACT Studio Tips and Tricks](http://www.qitasc.com/articles/20181008-StudioTricks):
![alt text](/img/articles/IntactExecution/testProject.png).

*Would you like more instructions about creating and executing test cases?* Visit [INTACT Tutorials](https://docs.qitasc.com/tutorials/) on the QiTASC Resource Center for out-of-the box test case examples!
