---
title:  Create an Android Project with Gradle as the Build System
author: Daniel Weibel
date:   10 November 2015
last_updated: 10 November 2015
---


The Android SDK version of November 2015 requires some manual tweaks in order to be able to use Gradle as the build system for an Android project.


Install Gradle
==============

~~~bash
brew install gradle
~~~

Note: requires setting of the `JAVA_HOME` environment variable. Find out Java Home by executing `/usr/libexec/java_home`.


Create Android Project
=======================

~~~bash
android create project \
  -p my/root/dir    \
  -n MyProjectName  \
  -a MyActivity     \
  -k my.package     \
  -t 1              \
  -g                \
  -v 1.3.1
~~~

`-t`: ID of target Android platform (list available target platforms with `android list target`)

`-g`: use Gradle

`-v`: version of desired *Android Plugin for Gradle*. Find out existing versions of on <http://developer.android.com/tools/revisions/gradle-plugin.html>.

Help: `android -h create project`


Change Gradle Version for Android Project
=========================================

In `gradle/wrapper/gradle-wrapper.properties` change

~~~
distributionUrl=http\://services.gradle.org/distributions/gradle-1.12-all.zip
~~~

to

~~~
distributionUrl=http\://services.gradle.org/distributions/gradle-2.8-all.zip
~~~

or any newer Gradle version that is required for the selected version of the Android Plugin for Gradle.


Adapt Gradle Build File
=======================

In `build.gradle` change

~~~
runProguard false
~~~

to

~~~
minifyEnabled false
~~~


Build (now it should work)
==========================

~~~bash
./gradlew assembleDebug
~~~

