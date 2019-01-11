---
layout: newsroomArticle
title: INTACT Virtual Phones Tutorial
colorTitle: <span class="orange">IN</span>TACT<sup>®</sup> Virtual Phones Tutorial
subtitle: The Tutorial Experience
subtitleNewsroom: How-To Guides & Learning
overview: Topics
img_url: img/articles/virtualPhones/newSoaptest.png
category: article
group: visible
manualLink: 'https://docs.qitasc.com/'
link: 20180320-VirtualPhones
date: 20.03.2018
ReadMore: Read More
subtext: With the flick of a configuration switch, INTACT allows you to change between using virtual phones and real phones in your testing environment. This tutorial walks you through setting up a project and creating your own custom steps to automate virtual phones.
anchors: ["Introduction", "CreateProject", "CreateTestCase", "PhoneAllocation", "MockCallStep", "UsingListParameters"]
anchorsNames: ["Virtual Phones Introduction", "Create Project", "Create Test Case", "Custom Phone Allocation", "Mock Call Step", "List Parameters"]

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


# Using Custom Stepdefs and Virtual Phones <a name="Introduction"></a>

This tutorial demonstrates how to replace existing **built-in telephony steps** with **custom step definitions**. This is useful if you want to run Feature Files in a simulation environment without using real phones.

In this tutorial we are going to set up a simple telephony scenario using two phones, `A` and `B`. `A` calls `B` and after a given call time, `B` ends the call.

Additionally, we will show how to use five types of **stepdef parameters**: `{}`, `{ident}`, `{phoneTags}`, `{phoneTag}`, and `{list}`.

For reference material, please refer to the Intact Manual's [Custom Compound Steps](https://docs.qitasc.com/intactsteps/customcompoundsteps) section.

## Why Use Custom Stepdefs?

Why would you like to replace existing stepdefs with your own definitions? There are two types of stepdefs in INTACT:

* **Internal stepdefs** (or **built-in stepdefs**) are implemented as part of the INTACT software. They can be used throughout your `.feature` files as is.
* **Custom stepdefs** are implemented by the INTACT user employing the `webtest` and/or `soaptest` language. These stepdefs make use of INTACT's Soaptest and Webtest built-in helper functions to provide custom functionality that is not covered by the internal stepdefs.

If you want to develop your `.feature` files using a **simulation environment**, the built-in telephony steps can no longer be used, because they trigger real phones. **Deactivating** the built-in telephony steps allows the provision of your own custom telephony steps implementation. These custom steps can trigger your simulation environment instead of using real phones.

Using this method, you can develop your `.feature` files using a simulation environment and switch to the real phones when appropriate. By just flicking a configuration switch you change from one environment to another.

# Create Project <a name="CreateProject"></a>

To execute the test cases from this tutorial, you first need to run the following products:

* INTACT Server
* INTACT Studio

The easiest way to do this is to open a Command Line/Terminal session and navigate to the QiTASC directory.

The enter the following:

**Windows Users**
```bash
qitasc start intact-server
qitasc start intact-studio
```

**Linux and Mac OSX Users**
```bash
./qitasc start intact-server
./qitasc start intact-studio
```

## Run INTACT Studio
After launching the products, INTACT Studio will start. First, select `Create New Project`. Alternately, you can select `New` -> `Project...` from the File menu.
![alt text](/img/articles/apptest/02-StartIntact.png)

The following view will appear. Select `INTACT` and click the `Next` button.
![alt text](/img/articles/apptest/02b-NewProject.png)

Assign your project the name `VirtualPhones`.

## Create the Directories
Create two directories: one to store your **stepdefs** and one to store your **feature files**. First, right-click on the project name `VirtualPhones` on the left-hand side of the window. Select `New`, then `Directory`. Name the directory `lang`. This is the folder where you store your **stepdefs**.

![alt text](/img/articles/virtualPhones/CreateDirectory.png)

Create a second directory and name it `features`. This is where you will store your **feature files**. Your project structure should now look like this:

![alt text](/img/articles/virtualPhones/projectStructure.png)

# Create the Test Case <a name="CreateTestCase"></a>

Right-click on the `features` directory -> `New` -> `Feature`:

![alt text](/img/articles/virtualPhones/newFeature.png)

Name the Feature file `phoneConnection` and the **Scenario** `Phone connection`. INTACT Studio will append the `.feature` extension to the file.


## Write the Feature File
The scenario below is implemented as a standard scenario using two real phones. It can be run with INTACT's internal stepdefs:
```go
Feature: A phone can dial another phone and connect within 30 seconds

    Scenario: Phone connection
        Given phones as A and B:
            * of type Android
        And A starts a call to B as A2B:
            * call duration is 1 seconds

        Then within 30 seconds, expect the call A2B to connect
        Then within 10 seconds, expect the call A2B to disconnect

```

## Deactivate the Internal Telephony Steps and Try to Run the Scenario
To deactivate the internal telephony built-in steps, add a **configuration file** to the project. Create a **new empty file** in the project root directory called `project.conf`. Your project structure should now look like this:

![alt text](/img/articles/virtualPhones/projectStructure2.png)

Paste the following into the `project.conf`:

```json
Glue = {
    	path : [],
    	builtinTelephonySteps : "deactivated"
}
```

* *path* is a list of strings that denote all directories containing custom `soaptest`/`webtest` stepdef implementations. We will see how this is used shortly.
* *builtinTelephonySteps* is a field that defines if the built-in telephony steps should be **activated** or **deactivated**. For this test case, the built-in telephony stepdefs are `"deactivated"`.

Note that after applying this change, INTACT studio shows the telephony steps as **unknown** (they are automatically highlighted in red):

![alt text](/img/articles/virtualPhones/redText.png)

The steps marked in red are unknown by INTACT because they were **removed** by setting `builtinTelephonySteps` to `”deactivated”`. If you try to run this Feature file, the test will terminate with errors:

![alt text](/img/articles/virtualPhones/terminated.png)


## Implement Custom Step Definitions
Next we will implement the missing steps that are marked in red. These step implementations are created using INTACT’s `soaptest` language. In order to tell INTACT where to find our new implementations, let’s edit our `Glue` configuration to tell it where our `*.soapatest` files are located.

Adapt the `project.conf` configuration file to reflect this new `.soaptest` location:

```json
Glue = {
    	path : ["lang"],
    	builtinTelephonySteps : "deactivated"
}

```

This points to `lang` directory that we created earlier, which is where we will store the custom stepdef implementations.

<span style="color:orange;">**Note**</span>: When switching back to built-in telephony stepdefs (`builtinTelephonySteps = "activated"`), the Glue path entry `"lang"` must be removed. Otherwise INTACT will find duplicate, conflicting step definitions for the telephony steps. This will result in an error being reported.


# Custom Phone Allocation Stepdef <a name="PhoneAllocation"></a>

Now that we have configured our Glue path and deactivated the built-in telephony stepdefs, we will implement the **custom step** `Given phones as A and B:`.

Create a Soaptest file by right-clicking on the `lang` directory -> `New` -> `Soaptest`:

![alt text](/img/articles/virtualPhones/newSoaptest.png)

Name the Soaptest file `CustomTelephonyStepdefs`. INTACT Studio will append the `.soaptest` extension to the file. Replace the template text with the code below:

```go
stepdef "a? ?phones? as {phoneTags}:" / ids, details /

end
```

The stepdef keyword needs a **regular expression** (or **regex**) and a **list of parameters**.

## Regular Expression  
* The regular expression defines the text that this stepdef uses.
* The question marks (`?`) indicate optional characters. In this case, all the phrases below would match the regular expression:
	* `a phone as A`
	* `phones as A and B`
	* `phone as B`

Note that the leading `Given`, `When`, and `Then` **must not be part of the regular expression definition**.

## Parameters
 This stepdef is special, because it ends with a colon (`:`). I.e.,it is a **compound step** that has **detail clauses**: lines starting with asterisks (`*`). Those details clauses are mapped to the last parameter `details` that does *NOT* correspond to a pair of curly braces in the regex.

The stepdef takes two parameters, called `ids` and `details`:
*  The position of the parameters in the text phrase are indicated by the curly braces (`{}`).
* The first parameter, `ids` holds the phone identifiers (characters such as `A` or `B`).
* The `phoneTags` keyword enclosed by the curly braces has a special meaning: it implicitly creates the given phones as `VirtualPhones`.


## Revise the Stepdef and Feature File
To understand what how these parameters really work, let’s remove the `phoneTags` keyword form the braces and change our stepdef. Now it only holds the **phone allocation** step:   

```go
stepdef "a? ?phones? as {}:" / ids, details /
	println("ids=" + ids)
	println("details=" + details)
end
```

Next, change the Feature file:

```
Feature: A phone can dial another phone and connect within 30 seconds

  Scenario: Phone connection

    Given phones as A and B:
      * of type Android
```


This step does not do anything useful aside from taking the two parameters `ids` and `details` and printing them. If you right-click and
and try to run the Feature file, INTACT shows the error below:

```go
12:54:23.581 [INFO]: Step started: phones as A and B:
      * of type Android
12:54:23.75 [INFO]: Step ended with status: failed
12:54:23.751 [INFO]: [Error: unresolvable property or identifier: A]
[Near : {... A and B ....}]
         	^
[Line: 1, Column: 1]
```

The elements `A` and `B` are not defined, i.e. they are not part of the scenario execution context.

<span style="color:red;">Important!</span> An empty pair of curly braces `{}` in the stepdef **regex** tries to evaluate the corresponding expression against the scenario execution context before passing it on to the stepdef. Since `A` and `B` are not there, the evaluation fails and the test will not run.

## Fix the Stepdef

In order to fix the problem shown above, add the `phoneTags` keyword to the custom stepdef like this:

```go
stepdef "a? ?phones? as {phoneTags}:" / ids, details /
	println("ids=" + ids)
	println("details=" + details)
end

```

Run the test case again. At the bottom of the INTACT Studio window, you will see a list of executed steps, step details and their statuses. Click on the step `phones A and B:`

![alt text](/img/articles/virtualPhones/testOutput.png)

The output from `ids` shows a list of two **elements**: `[A, B]`. By using the `phoneTags` keyword, `A` and `B` are implicitly created as **Virtual Phones**. Now we can make use of these phones by adapting our stepdef.

## Access the Phone
Revise your stepdef to the following:

```go
stepdef "a? ?phones? as {phoneTags}:" / ids, details /
	println("ids= " + ids)
	println("details= " + details)
	for phone in ids
    	p := getContextObject(phone)
    	println("p is " + p)
	end
end
```

After printing the parameters, a `for` loop runs through the elements in `ids` and prints them out. Accessing the scenario execution context is done using `getContextObject(phone)`. Here that `phone` is the **loop variable**. Also note that `A` and `B` are part of the **context** since they were implicitly created when the stepdef started. This is why we can retrieve them and print them.

In the next section, we'll create a virtual phone call. Meanwhile, you can read below for further details about `phoneTags`.

### Additional Notes

The following examples provide some extra information about working with parameters.

#### Using the phoneTags Keyword: Single Phone
When using the `phoneTags` keyword for a stepdef parameter, the phones are **always passed as a list**. It is possible to use this for a single phone like this:

```
Given phones as A:
    * of type Android
```

In this case, the parameter is still passed as a list of `VirtualPhones`, but with a single element.


#### Using the phoneTags Keyword: Multiple Phones

When specifying multiple phones, the list can use commas `,` and the word `and` as separators. For example:

```
	Given phones as A and B, C and D:
          * of type Android
```

If you need a single VirtualPhone element, the `phoneTag` keyword may be used. The parameter is passed as a single phone (as opposed to a single element list). Details can be found in [INTACT Manual](https://docs.qitasc.com/intact/chapters/).


# Implement the Mock Call Step <a name="MockCallStep"></a>

Now we'll finish our test case by initiating the **mock call** with our virtual phones. But first, let's revert the Feature file back to how we first wrote it:
```
Feature: phoneConnection

  Scenario: Phone connection
    Given phones as A and B:
      * of type Android
    And A starts a call to B as A2B:
      * call duration is 1 seconds

    Then within 30 seconds, expect the call A2B to connect
    Then within 10 seconds, expect the call A2B to disconnect
```

## Create the Second Stepdef
Copy and paste the following stepdef under the first stepdef in the `CustomTelephonyStepdefs.soaptest` file:

```go
stepdef "{} starts a call to {} as {ident}" / firstPhone, secondPhone, callName, details /
    println(firstPhone)
    phoneCallMap := Telephony.parseCallDetails(firstPhone.id, secondPhone.id, details)

    println("CallDetails:")
    for k,v in phoneCallMap
        println(k + " : " + v)
    end

    firstPhone.props["customProperty"] := "hello"

    setContextObject(callName, phoneCallMap)
end

```

Note that here both `{}` and `{ident}` are both used as parameter placeholders. The difference is important, and relates to how the variables are taken from the feature file:
*  In the first case, `{}`, the feature file passes the value of the expression that is defined. For example, if `A` is passed from the feature file, the variable `A` is passed. This is a **VirtualPhone**, which has an **id**, and a **map of properties**.
* With `{ident}`, whatever is written in the feature file is passed **without evaluation**. In this case, if `A` is passed, the string `”A”` will be passed through to the stepdef.

This means that for the `{} starts call to {}...` stepdef, both "flavours" of placeholder are used. It is possible to use `A` and `B` with `{}`, as prior to this step, both `A` and `B` have been set up in the environment. However, there is no variable called `A2B`, therefore this must be passed as a **string**.

## Execute the Test And Review the Results
Return to `phoneConnection.feature` and execute it by right-clicking and selecting `Run phoneConnection.feature...` The call details passed to the step are **parsed**. The result of this is simply a **map**. The map (printed out when the stepdef is executed) contains properties of the call. Click on the step `And A starts a call to B as A2B:` to see the maps' contents. It will look something like this:

```
13:17:49.401 [DEBUG]: Observing step 0.0: A starts a call to B as A2B:
13:17:49.404 [INFO]: Step started: A starts a call to B as A2B:
            * call duration is 1 seconds
13:17:49.405 [INFO]: com.tryge.autotest.server.utils.VirtualPhoneImpl@dbae786
13:17:49.422 [INFO]: CallDetails:
13:17:49.425 [INFO]: detectCallWithinSeconds : 30
13:17:49.426 [INFO]: callDuration : 1
13:17:49.429 [INFO]: callDurationUnit : seconds
13:17:49.434 [INFO]: hangupBy : CALLER
13:17:49.435 [INFO]: callerConnectsWithinSeconds : -1
13:17:49.437 [INFO]: calleeConnectsWithinSeconds : -1
13:17:49.438 [INFO]: callerId : A
13:17:49.438 [INFO]: callerDestination : CallDestination:Phone:A
13:17:49.44 [INFO]: calleeId : B
13:17:49.441 [INFO]: calleeDestination : CallDestination:Phone:B
13:17:49.442 [INFO]: dialFormat : int
13:17:49.443 [INFO]: detectFormat : any
13:17:49.443 [INFO]: ringDuration : 3
13:17:49.444 [INFO]: callForward : {}
13:17:49.444 [INFO]: speechChannelMonitor : null
13:17:49.445 [INFO]: notDetectCallWithinSeconds : -1
13:17:49.446 [INFO]: callRelayTo :
13:17:49.446 [INFO]: signaledNumber : null
13:17:49.449 [INFO]: callerAbandonsTheCall : false
13:17:49.45 [INFO]: calleeRejectsTheCall : false
13:17:49.451 [INFO]: calleeDoesNotAnswer : false
13:17:49.451 [INFO]: networkRejectsTheCallWithinSeconds : -1
13:17:49.452 [INFO]: Step ended with status: passed
13:17:49.452 [DEBUG]: Finished observing step.
```

In addition, a **property** is set here in the VirtualPhone. The `props` map acts as a data container that may be used to pass data around between steps.

## Add Assertion Steps
Finally, we will supply a mock implementation for the `assertion` steps. Copy and paste the following stepdef into your `CustomTelephonyStepdefs.soaptest` file. You should now have **three** distinct stepdefs:

```go
stepdef "within {} seconds, expect the call {ident} to {ident}" / seconds, callId, actionType /
    simulatedActionSeconds := 3
    delay(simulatedActionSeconds) // simulate waiting for the phones to connect
    assert seconds > simulatedActionSeconds // will fail if we waited too long
end

```

Here we simulate a call action happening after 4 seconds, after which we check that we did not have to wait too long (in this case the test will be failed due to the assertion).

With this timeout setting, the test passes. If we change the **feature file** to have a shorter timeout, for example using `Then within 2 seconds, expect the call A2B to connect`, then the test will fail. For example:

```go
13:37:32.94 [DEBUG]: Observing step 0.1: within 2 seconds, expect the call A2B to connect
13:37:32.94 [INFO]: Step started: within 2 seconds, expect the call A2B to connect
13:37:32.941 [INFO]: DELAY REQUEST: 3 seconds
13:37:35.945 [INFO]: Step ended with status: failed
13:37:35.945 [INFO]: java.lang.RuntimeException:
    At qitasc/projects/demo/libs/tutorial/customPhoneSteps.soaptest:23,11 Expression 'seconds>simulatedActionSeconds' evaluates to false.
    At qitasc/projects/demo/libs/tutorial/customPhoneSteps.soaptest
	at at.inaut.lang.common.CompiledModuleImpl.invoke(CompiledModuleImpl.java:131)
	at at.inaut.lang.common.CommonStepDefinition.invoke(CommonStepDefinition.java:31)
	at ✽.Then within 2 seconds, expect the call A2B to connect
```


# Using List Parameters <a name="UsingListParameters"></a>

So far we have shown how to use the following stepdef parameter types `{}`, `{ident}`, `{phoneTags}`, and `{phoneTag}`. There is one more stepdef parameter type, `{list}`:

This parameter type yields a **list of objects** that is passed as a single parameter (a list) to the stepdef. Before being passed on, the list is evaluated, so it can consist of arbitrary expressions referring to the scenario execution context. Note that the list elements can be separated by commas (`,`) or the keyword `and` as described above . If you want to use `and` as a **boolean operator**, the corresponding element expression must be enclosed in parentheses (`()`) to avoid confusing separators and boolean operators.

**Stepdef Example**
```go
stepdef "create the list {list}" / param /
   for el in param
       println("" + el)
   end
end
```

**Feature File Example**
```
And create the list 1,  (true and false), "abc" and 23 +3, 22
```

This creates a list `[1, false, "abc", 26, 22]` and passes it with the name `param` to the stepdef. If the parentheses around the boolean expression are removed like below:

```
And create the list 1,  true and false, "abc" and 23 +3, 22
```

The `and` between `true` and `false` is interpreted as a list element delimiter, so `param` is then `[1, true, false, "abc", 26, 22]`.

## Conclusion
This tutorial has shown you how to replace INTACT's built-in telephony stepdefs with your own custom implementations, which allowed us to use **virtual phones** in place of real phones. We also showed how to use all five **parameter** types within your stepdefs.

First we showed how to set up a project with a recommended directory structure. Next we demonstrated how to change your INTACT configuration so that INTACT will recognize your custom stepdefs and not use built-in telephony stepdefs. We then showed how to create stepdefs that simulate phone activity on a **virtual phone**.

If you would like to create more test cases using either virtual phones or regular phones, the online INTACT Manual's [INTACT Basics](https://docs.qitasc.com/intactbasics/README/) chapter provides reference material about different test case components including **stepdefs**, **feature files** and INTACT's languages. The INTACT Manual's [Steps and Compound Steps](https://docs.qitasc.com/intactsteps/introduction) chapter details available built-in steps for use cases including **telephony**, **SMS**, **data** and **interactive phone steps**.
