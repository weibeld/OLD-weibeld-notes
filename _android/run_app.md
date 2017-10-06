---
title:  Run Android App on Physical Device
author: Daniel Weibel
date:   3 October 2016
---


From Android Studio, one can hit the *Run* button, and the app gets installed and started on the connected Android device. This process actually consists of two parts:

1. Compile the source code and pack everything in an `apk` file
    - This is done by **Gradle** 
2. Copy the `apk` file to the device, install the app, and start it
    - This is done by **adb**


Command Line
============

The above process can also be done manually from the command line in the following way (assume current working directory in the Android project root directory):

~~~bash
./gradlew assembleDebug
adb install -r app/build/outputs/apk/app-debug.apk
adb shell am start -n <package_name/main_activity_name>
~~~

Notes:

- `./gradlew assembleDebug` generates `app/build/outputs/apk/app-debug.apk`
- `adb shell am start -n <...>` executes the command `am start -n <...>` in a shell on the device
- `am` stands for *Activity Manager*


Android Studio
==============

If using the *Run* button of Android Studio, one can observe the above steps in the following *tool windows*:

1. **Gradle Console:** displays the output of *Gradle* (this is roughly the same as the output of `./gradlew` if executed from command line)
2. **Run:** displays the *adb* commands that are executed in order to install and start the app

Note: all the tool windows are listed in *View > Tool Windows*


References
==========

- <https://classroom.udacity.com/courses/ud853/lessons/1395568821/concepts/16438585710923>
