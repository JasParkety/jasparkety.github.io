---
layout: articleSection
title: INTACT Audio Plugin
colorTitle: The <span class="orange">IN</span>TACT<sup>®</sup> Audio Plugin
subtitleNewsroom: New Feature
overview: Topics
img_url: img/newsroom/audioPluginArticlePic.png
img_main_url: /img/newsroom/AudioPlugin.jpg
category: article
group: visible
manualLink: 'https://docs.qitasc.com/'
link: 20180326-AudioPlugin
date: 26.03.2018
ReadMore: Read More
subtext: At QiTASC we've created an Audio Plugin that is currently used for monitoring speech channel quality as well as recording and comparing audio files (Audio Fingerprinting) within INTACT test cases. Read on to find out how these new features work.
anchors: ["Introduction", "big", "recordings", "monitor", "fingerprint", "conclusion"]
anchorsNames: ["Introduction", "The Big Picture", "How to Create Recordings", "Speech Channel Monitoring", "Audio Fingerprinting", "Conclusion"]

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


# New Feature: The INTACT Audio Plugin  <a name="Introduction"></a>

The **INTACT Audio Plugin** fulfils three purposes:

* Making phone call recordings
* Monitoring a speech channel
* Detecting and comparing announcements (Audio Fingerprinting)

All of the steps and configurations described in this article are available in a dedicated **INTACT Manual** [Audio and Speech Channel Steps and Compound Steps](https://docs.qitasc.com/intactsteps/audiointro/).


Using the **INTACT Audio Plugin** requires the following setup:
* A Raspberry Pi for each phone that is used for audio recording.
* The Raspberry Pi running a service called `Audio Service`.
* Each Raspberry Pi is connected through a USB sound card to a given phone using a special audio cable.
* A phone's unique mapping to the Raspberry Pi configured via **INTACT** to link the phone's serial number to the Raspberry's IP address.

![alt text](/img/articles/audioPlugin/Audio01_Setup.jpg)

## The Big Picture <a name="big"></a>
Whenever a recording is required on a given phone, **INTACT** looks up the IP address of the Raspberry Pi that it is configured to. **INTACT** connects to the `Audio Service` on a configured URL to **start**, **stop**, and eventually **retrieve** the recording. The recording is a `*.wav` file that is attached to the test report.

The `Audio Service` is an HTTP (REST) service that is located on a Raspberry Pi. It permits:

* Starting a recording
* Stopping a recording
* Starting a playback of a recording
* Stopping a playback of a recording
* Retrieving a recording
* Resetting the `Audio Service`

## How to Create Recordings <a name="recordings"></a>

A **Recording Step** is written in a test case, which records audio from a device. The recording is attached to the test report as a single channel (mono), 8-bit unsigned `wav` file with 8 kHz sample rate. This is an uncompressed, low-quality audio format that is sufficient for speech channel recordings.


## Speech Channel Monitoring <a name="monitor"></a>
Speech channel monitoring involves two phones (let's call them `A` and `B`) that are under **INTACT's** control. Whenever a call is established between the phones, **INTACT's** Speech Channel Monitoring steps can be used to assess speech channel quality.

The speech channel consists of two independent directions: `A => B` and `B => A`. When a speech channel monitoring step is used, phone `A` plays a given reference audio file using the `Audio Service`. At the same time, phone `B` records the call established between the phones. In parallel, the speech channel's **reverse direction** is covered by playing the reference audio file on `B` and recording it on `A`. The recordings on `A` and `B` are attached to the test report.

After creating the recordings, they are analyzed to judge the speech channel's quality as described below.

### How Speech Channel Monitoring Works

The reference audio files are fixed audio files that are located on the Raspberry Pi's `Audio Service`. They consists of beeps with a duration of **300ms** and a frequency of **800Hz** and **1100Hz**: One phone will play the 800Hz file and the other phone will play the 1100Hz file. The pauses between the beeps last **300ms**. Monitoring a speech channel's quality in a given direction (e.g. `A => B` or `B => A`) consists of playing back the reference file on `A` and recording it on `B`. The recording and analysis for both `A => B` and `B => A` are done once and in parallel.

When the recording on `B` has finished, the recorder audio file is analyzed to detect the locations and durations of beeps and pauses.

![alt text](/img/articles/audioPlugin/Audio02_Beeps.jpg)

The recording's analysis uses:

* **Total number of beeps**: If the total number of beeps does not meet or exceed the minimum threshold of expected beeps, the monitoring is considered failed.

* **Predominant frequency**: The recording's predominant frequency **must match** the beeps' nominal frequency (800 Hz or 1100Hz). If the call channel is broken, a white noise recording would fail the frequency check.

* **Pause position and duration**: If a pause is too long, one or more beeps are missing from the recording.


## Audio Fingerprinting <a name="fingerprint"></a>
**Audio Fingerprinting's** purpose is to match a given recording against a database of reference announcements.

A given audio recording is compared to a set of reference recordings by using the **INTACT** `Audio Matcher`. The `Audio Matcher` reads the audio recording and uses an algorithm to compute a collection of **Audio Fingerprints**. This collection of fingerprints is characteristic of the recording. The fingerprints of the recording to be assessed is then **compared to a collection of fingerprints** that is calculated from reference recordings. Every comparison yields a **similarity score** between `0` and `100`. A higher number indicates a stronger similarity to the reference recording.

**Hint:** Audio fingerprints can be visualized as a cloud of points in a spectrogram. This point cloud is characteristic of the audio signal.

![alt text](/img/articles/audioPlugin/Audio04_Fingerprint.jpg)


### Using the Audio Fingerprinting

**Audio Fingerprinting Stepdefs** are used to match reference files against recordings. The **INTACT log** then shows the scores for matching the given recording with the reference database.

**INTACT** matches a recording against a set of recordings announcements by:

* Calculating the recording's fingerprints.
* Comparing the recording's fingerprints with all reference announcements' fingerprints. Every comparison yields a similarity score.
* The best match is the match with the highest number of equal fingerprints.

When **INTACT** starts, all the `*.wav` files in the `referenceDirectory` are fingerprinted to build up a reference database. This is done for each profile and the reference database file name contains the profile identifier. **INTACT** detects changes in the reference `*.wav` files such that those changes are properly propagated to the reference database without re-indexing all the files.

If, for the best match, the number of equal fingerprints is below a configured **minimum confidence level**, the match is considered to be **failed**. The integer number of equal fingerprints is then converted to a percentage based on the total number of the recording's fingerprints. If this percentage is **lower than the minimum score** as given by the step, the match is a **low-quality match**.

The the match is only considered good if the similarity percentage is above the limit set by the stepdef

![alt text](/img/articles/audioPlugin/Audio05_Scores.jpg)


## Conclusion <a name="conclusion"></a>

The INTACT **Audio Plugin** expands the scope of testing by adding **speech channel monitoring** and the **Audio Fingerprinting** to its suite of features. The setup involves minimal hardware: A phone only needs a Raspberry Pi connected through a USB sound card to use these features. Both speech channel monitoring and Audio Fingerprinting provide **scores** to help determine if the **audio quality or content** matches your test's requirements.

If you would like to create test cases using the Audio Plugin, the INTACT Manual's [Audio and Speech Channel](https://docs.qitasc.com/intactsteps/audiointro/) chapter contains reference material about INTACT's built-in steps and and examples.
