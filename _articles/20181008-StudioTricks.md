---
layout: newsroomArticle
title: INTACT Studio Tips and Tricks
colorTitle: <span class="orange">IN</span>TACT<sup>®</sup> Studio Tips and Tricks
subtitle: StudioTricks
subtitleNewsroom: Get to Know INTACT
overview: Topics
img_url: img/articles/StudioTricks/tipsTeaser.png
img_main_url: /img/newsroom/tipsArticle.png
category: article
group: visible
manualLink: 'https://docs.qitasc.com/'
link: 20181008-StudioTricks
date: 08.10.2018
ReadMore: Read More
subtext: We've collected some of the most commonly-used INTACT Studio shortcuts that customers use in their projects. These shortcuts support finding files and steps, refactoring and edit test cases, inspecting errors as well as creating documentation and notes that help you understand your projects better. Take a look through these shortcuts and try them out for yourself!
anchors: ["goto", "commentout", "documenting", "todoLists", "findSteps", "autocomplete", "errorInspect", "copyPaste", "resolve", "reformat", "highlight", "modify", "multipleCursor", "liveTemplates", "splitTabs"]
anchorsNames: ["Go to File", "Comment Out Files", "Document Stepdefs", "Create To-do Lists", "Find Steps", "Auto-Complete", "Error Inspections", "Copy, Paste and Duplicate Lines", "Resolve References", "Reformat Code", "Highlight References", "Modify Text - Search and Replace", "Modify Text - Rename Refactoring", "Multiple Cursor", "Live Templates", "Split Tabs"]
---


# INTACT Studio Tips & Tricks

## Go to File <a name="goto"></a>
When working in large projects with multiple directories, use the `Find` shortcut to search for a file by name. This is often easier than manually searching through a project.

* Linux/Windows: `CTRL `+` SHIFT `+` N` and start typing the file name.
* Mac OS: `COMMAND `+` SHIFT `+` N` and start typing the file name.

Auto-Complete helps find the file.
![alt text](../../img/newsroom/goToFile.png)

After you find the file, press `Enter` to go to that file:

![alt text](../../img/newsroom/foundFile.png)

## Comment Out Files <a name="commentout"></a>
If you don't want certain steps to be available, comment them out by selecting the text and entering the following:
* Linux/Windows: `CTRL `+` /`
* Mac OS: `COMMAND `+` /`

In feature files, `#` will appear before each commented-out line:
![alt text](../../img/newsroom/commentOut.png)

In other files, including configurations, Webtest and Soaptest files, `//` will appear before each commented out line:

![alt text](../../img/newsroom/commentOut2.png)

### Document Stepdefs <a name="documenting"></a>
INTACT Studio interprets comments written above stepdefs (those marked with `//`) as documentation.

![alt text](../../img/newsroom/documentedStepdef.png)

To access the documentation from a Feature File:

* Windows/Linux: Hover over the step and type `CTRL` + `Q`.
* Mac OS: Hover over the step and type `CTRL` + `J` + `,`

![alt text](../../img/newsroom/documentedStepdef2.png)

## Create To-do Lists <a name="todoLists"></a>
Sometimes we leave a `To-do` note in our codes. For example, if there is something that needs to be fixed or done in a better way at a later time. We an leave `To-do` lists by placing `TODO` after a comment indicator in a Feature File or Stepdef:

![alt text](../../img/newsroom/todo.png)

![alt text](../../img/newsroom/todo2.png)

INTACT Studio shows To-dos at the bottom of the application. Click on `TODO` to see the list of files with To-dos, and click on the triangle icon to expand them:

![alt text](../../img/newsroom/todo3.png)

## Find Steps <a name="findSteps"></a>
With big projects, we don't always know which stepdefs we have at our disposal, and need help searching through the project. One option is to search throughout the full project:

* Linux/Windows/Mac OS: `CTRL `+` SHIFT `+` F` and start typing parts of the stepdef.

![alt text](../../img/newsroom/findInPath.png)

For example, if we know we have a `read temperature` step, we can start typing `read temp` and INTACT Studio will list all files in the project that contain those terms.

To search specifically for a stepdef, the *fuzzy search* shortcut is useful if you know what parts of the steps you want to use:

* Linux/Windows: `CTRL `+` .`
* Mac OS: `COMMAND `+` .`

![alt text](../../img/newsroom/fuzzySearch.png)

INTACT Studio will search through all matches and find the best possible match.

*Note*: Many INTACT users prefer to use auto-completion features instead of the search feature.

## Auto-Complete <a name="autocomplete"></a>
INTACT Studio provides auto-completion functionality to help you find different elements from your test case.

If you start typing the `Given` keyword and then `read temperature from`, a list pops up that shows all the steps. The `{}` symbols refer to arguments that need to be filled in:

![alt text](../../img/newsroom/autoComplete_1.png)

Press `Enter` to confirm the search. Next, fill in the arguments, which are indicated in the Feature File with `...` and press `TAB` to proceed to the next argument:

![alt text](../../img/newsroom/autoComplete_2.png)

## Error Inspections <a name="errorInspect"></a>
If you mistype a step definition that doesn’t exist, INTACT Studio will mark it as "unresolvable" in red. Additionally, INTACT Studio displays a red warning icon on the right side of the editor and a red `__` to indicate what line the error is on:

![alt text](../../img/newsroom/unresolvable.png)


Fix the error: When a green check appears, this means there are no errors:

![alt text](../../img/newsroom/resolved.png)

## Copy, Paste and Duplicate Lines <a name="copyPaste"></a>
[Scenario Outlines](https://docs.qitasc.com/intactbasics/featurefiles/#scenariooutline) are useful for when you want to execute multiple versions of a test case with different parameters. For example, our `TemperatureReading` test checks for different expected temperatures by iterating through different variables.

Scenario Outlines contain `Examples` tables, which are populated by the variables that INTACT will iterate over. Because most Scenario Outlines contain multiple variables, copying rows and changing the variables saves quite a bit of time.

### Simple Copy and Paste

* Place your cursor on the line(s) to copy and type `CTRL `+` C` for Windows/Linux or `COMMAND `+` C` for Mac OS.
* `Shift `+` Enter` to jump to the next line.
* `CTRL `+` V` for Windows/Linux or `COMMAND + C` for Mac OS to paste.

### Duplicate Lines
Select the line(s) you want to copy, then type:

* Windows/Linux: `CTRL `+` D`
 * `CTRL` + `Y` deletes the selected lines.
* Mac OS: `COMMAND `+` D`
 * `COMMAND `+` Y` deletes the selected lines.

![alt text](../../img/newsroom/duplicate.png)

![alt text](../../img/newsroom/duplicate2.png)

## Move Lines Up/Down
Imagine that we want to execute the second `Example` of our Scenario Outline first. Highlight the line, and then use `SHIFT `+` ALT `+` up/down arrow`:

![alt text](../../img/newsroom/shiftUp.png)

![alt text](../../img/newsroom/shiftUp2.png)

## Resolve References <a name="resolve"></a>
One of the most important INTACT Studio features is that it *resolves* references to step definitions. For example, the `read temperature` step in our Feature File is a custom step definition. You can easily find its step definition:

* Windows/Linux: Place cursor over the step + `CTRL` + `B`.
* Mac OS: Place cursor over the step + `CTRL` + `B`.

This takes us to the stepdef:

![alt text](../../img/newsroom/declaration.png)

Alternately, hovering over stepdef and using the `CTRL` + `B`/`COMMAND` + `B` shortcut will bring you to the step in its Feature File.

## Reformat Code <a name="reformat"></a>
We're going to switch to a Webtest file for the rest of this article to demonstrate some additional functionality, including Webtest-specific functionality.

As you can see, the one of the stepdefs is badly formatted:

![alt text](../../img/newsroom/badFormatting2.png)

We can easily reformat it:
* Windows/Linux: `CTRL` + `ALT` + `L`
* Mac OS: `COMMAND` + `ALT` + `L`

Now our stepdefs are properly formatted:

![alt text](../../img/newsroom/formatted.png)


## Highlight References <a name="highlight"></a>
Earlier we mentioned step definition references. These also work inside of Soaptest and Webtest files. Highlighted references belong together. This is useful to find different parts of your code that are linked together, especially in large files:

![alt text](../../img/newsroom/highlightReference.png)

In the example above, highlighting the `SearchFormView` reference in the Stepdef starting at **line 5** also highlights the View called `SearchFormView` on **line 16**.

Using `CTRL` + `B` on Windows/Linux or `COMMAND` + `B` on Mac OS toggles between the references.

### Error Inspection in Webtests
Previously we showed an **unresolved reference** in a Feature File that was marked with red text and a warning icon. Webtest also recognizes unknown Views:

![alt text](../../img/newsroom/unknownView.png)

## Modify Text - Search and Replace <a name="modify"></a>
Usually when we have big projects in there, we need to modify content. For example, giving something a better, more accurate name. One option is to use the search and replace function by typing `CTRL` + `SHIFT` + `R`:

![alt text](../../img/newsroom/searchAndReplace.png)

This approach is quite error prone, which is why we recommend **rename refactoring**.

## Modify Text - Rename Refactoring <a name="rename"></a>
INTACT Studio supports rename refactoring, which searches *all* references and usages and renames them accordingly. This also works with local parameters. Highlight what you want to rename across a project and type `SHIFT` + `F6`:

![alt text](../../img/newsroom/renameRefactor.png)

In the example above, we renamed `SearchFormView` to `MyView`:

![alt text](../../img/newsroom/renameRefactor2.png)

Rename refactoring also works with local parameters. For example, we can rename the parameter `query` to `query2`:

![alt text](../../img/newsroom/renameRefactor3.png)

![alt text](../../img/newsroom/renameRefactor4.png)

## Multiple Cursor <a name="multipleCursor"></a>
Another frequent use case involves modifying multiple lines at the same time.

Let's assume we want to have four Actions in our Webtest View. They are all marked as error with a red underline, because we can't have multiple Actions with the same name:

![alt text](../../img/newsroom/multipleActions.png)

To fix this, we'll use the **multiple cursor** so that we can modify all of the Actions by using `SHIFT` + `ALT` + `CLICK` an selecting each line that you want to apply the cursor to.


![alt text](../../img/newsroom/multipleCursor.png)

Now we can modify all of the lines at the same time and change `content` to `type`:

![alt text](../../img/newsroom/multipleCursor2.png)

## Live Templates <a name="liveTemplates"></a>
In addition to auto-completion, INTACT Studio provides built-in live templates as well as the ability to create your own templates. For example, if you start typing `mod` in your Webtest file, INTACT Studio will offer you a suggestion:

![alt text](../../img/newsroom/liveTemplate.png)

Press the `TAB` key, and the model template appears:

![alt text](../../img/newsroom/liveTemplate2.png)

### Create Live Templates
If you want to edit or create your own live templates, you can easily do this within INTACT Studio:
* Windows/Linux: `File` -> `Settings` -> `Live Templates` -> `INTACT Legacy Languages`.
* Mac OS: `IntelliJ Idea` -> `Preferences...` -> `Editor` -> `Live Templates` -> `INTACT Legacy Languages`.

To edit an existing template, click on that template. It displays the template's syntax as well as what file types it's compatible with. You can also edit the abbreviation or description as well as the template's variables:

![alt text](../../img/newsroom/liveTemplate3.png)

To create your own template, click the `+` icon on the right side of the window and define your template's abbreviation, description and variables:

![alt text](../../img/newsroom/liveTemplate4.png)

## Split Tabs
Finally, some people like to work in parallel -- between Feature Files, Webtest and Soaptest files. Right-click one of your project tabs and select `Split vertically` or `Split horizontally` depending on your preference:

![alt text](../../img/newsroom/splitView.png)

![alt text](../../img/newsroom/splitView2.png)

## Conclusion
INTACT Studio is full of shortcuts that save you time editing, finding files and steps, looking for errors as well as managing your projects. Follow one of our [INTACT Tutorials](https://docs.qitasc.com/tutorials/) and try out these shortcuts as you go through the tutorial steps, or use them in your own project. You can also create your own shortcuts via:
* Windows and Linux: `Edit` -> `Settings`
* Mac OS: `Preferences` -> `Appearance and Behaviour` -> `Keymap` -> `Editor Actions`

*Want to learn more about the basics of INTACT Studio?* [Check out our tutorial video on **Handling INTACT Studio**](https://www.youtube.com/watch?v=wHkylhnLntI)!
