---
title:  Droidcon Vietnam 2017
author: Daniel Weibel
date:   15 April 2017
last_updated: 16 April 2017
---

# Part 1: 15 April Morning

## Espresso: Beyond the Basics

**Inaki Villar**

My day rank: 7

- Architecture and usage of Espresso
- Talk did not cover basic usage, but only advanced topics
- Used for [UI tests within an app](https://developer.android.com/training/testing/ui-testing/espresso-testing.html)
- Part of the [Android Testing Support Library](https://developer.android.com/topic/libraries/testing-support-library/index.html)
- Android testing farms
    - TestDroid
    - Genymotion
    - Amazon
    - Firebase

## Exploring Data Binding

**Zarah Dominguez**

My day rank: 3

- Good overview of data binding
- TODO: explore it more, especially anonymous method calls in XML and `@BindingAdapter`
- Issue to add data binding to an XML file automatically in Android Studio: <https://issuetracker.google.com/issues/37136823>

## Reverse Engineering Apps

**Jesse Sum**

My day rank: 1

- Very interesting
- Decompiling an APK in two ways:
    1. [dex2jar](https://github.com/pxb1988/dex2jar) and [JD-GUI](http://jd.benow.ca/)
        - View decompiled Java files (cannot edit and recompile)
    2. [Apktool](https://ibotpeaches.github.io/Apktool/) 
        - Decompile code to [smali](https://github.com/JesusFreke/smali), edit, and recompile to an APK
- Obfuscating code with ProGuard replaces identifiers with short strings, so it's harder to make sense of the decompiled code (but not impossible)
- See *Reverse Engineering* talk on 16 April, afternoon


# Part 2: 15 April Afternoon

## Android Performance

**Enrique Lopez**

My day rank: 6

- Various techniques to make an app more performant
    - SysTrace
    - Traceview
    - DDBMS
    - Don't use enums (use `@IntDef` instead)
    - `WeakReference` (to prevent memory leaks)
    - etc.

## J2ObjC

**Charlie Collins**

My day rank: 5

- Write parts of code once and use them on both Android and iOS (and even Web)
- Most suitable to be shared like this are the *Entities* (see Android Clean Architecture)
- Organising code for reuse leads to a cleaner architecture
- Presentation of the *J2ObjC* tool
- Did not attend the entire talk

## Kotlin

**Kai Koenig**

My day rank: 4

- Introduction to Kotlin (v1.1)
- Slideshare: <https://www.slideshare.net/AgentK>

## Design of Fabulous

**Taylor Ling**

My day rank: 2

- Development story of the [Fabulous](https://play.google.com/store/apps/details?id=co.thefabulous.app) app
- Interesting form a product management perspective
- Learned the term of MVP: minimum viable product

## React Native

**Henry Tao**

My day rank: 8

- Presentation of ReactNative
- Did not attend the entire talk

# Part 3: 16 April Morning

## Reactive Programming on Android

**Soham Mondal**

My day rank: 3

- Good introduction to reactive programming
- Three elements:
    1. Data source (emitting items)
    2. Observer (consuming items)
    3. Composition (compute a function on emitted items and emit a new resulting item)
- The **data source** is implemented as an `Observable<T>`
    - Sub-types of `Observable`s:
        - `Single<T>`: emits a single item and completes
        - `Completable<T>`: does not emit any item, just completes
        - `Maybe<T>`: emits zero or one item and completes
- The **observer** is implemented as an `Observer` or `Subscriber`
- The **compositions** are implemented as functions on items in a functional programming style (output of function depends *only* on input values)
    - Examples: `map`, `zip`
- An `Observer` or `Subscriber` has to override the following methods:
    - `onSubscribe`
    - `onNext`
    - `onComplete`
    - `onError`
- Slides: <http://bit.ly/introduction_reactive_android)

## How to make high-quality Android apps

**Hai Nguyen**

My day rank: 2

- Software architecture and project managemnt that facilitate developing complex apps
    - Testing
    - Architecture
    - Static code analysis
    - Code review
    - Continuous integration
    - Engineering culture
- Automated testing tools:
    - Appium
    - Calabash
    - MonkeyTalk
    - Robotium
    - Selendroid
- [S.O.L.I.D](https://en.wikipedia.org/wiki/SOLID) (object-oriented design)
- Architecture patterns:
    - Redux (Reactive Programming)
    - Riblets (Facebook)
    - MVP (suited for Android)
        - The only component having Android-related code is the View
        - View only displays (dumb)
        - All the logic in Presenter
        - Models are just POJOs
        - Presenter and Model are generic
    - MVVM (suited for iOS, but not so much for Android)
- Static code analysis tools:
    - SonarCube
    - PMD
    - Findbugs
- Code review
    - Check code style: checkstyle
- Continuous integration (CI)
    - Whenever a push to the VCS repository is made, the entire project is built, all the tests are run, and the code is reviewed (static code analysis, code review, code style)
    - Complete builds, tests, and reviews also happen every night and provide a report in the morning
    - Tools (some are paid):
        - Jenkins
        - TeamCity
        - Travis CI
        - Go CD
        - Bamboo
        - Circle CI
        - Codeship

## ConstraintLayout

**Cao Duy Vu**

My day rank: 5

- Interesting introduction to ConstraintLayout
- Each view has a horizontal and vertical constraint which can be relative to any other view
- Allows to flatten view hierarchy (for example horizontal chains without nested LinearLayouts)
- Allows positionings which are not easily possible without ConstraintLayout
- Performance slightly worse than without ConstraintLayout and Android Studio GUI Layout Designer integration is buggy
- Likely to be improved in the future, as it was introduced just in Google I/O 2016

# Part 4: 16 April Afternoon

## Nearby API

**Chad Schultz**

My day rank: 4

- Demonstration of the Google [Nearby API](https://developers.google.com/nearby/)
- How it works: broadcast messages through some nearby communication medium (WiFi, Bluetooth) and other user in the range can receive them
- Not many apps use it, so could be interesting to build an app using it
- Limitations:
    - Can only receive messages if the app is running and in the foreground
    - Can only receive messages of the same app
    - Requires Internet connection
    - Broadcasting a message may take several seconds, not suited for instant messaging
    - No security built in (messages are not encrypted)
- Other similar APIs:
    - [Nearby Connections API](https://developers.google.com/nearby/connections/overview)
        - Works over WiFi router, no Internet connection needed
        - Seems to not work and not being maintained
    - [WiFi Aware](https://developer.android.com/preview/features/wifi-aware.html)
        - Direct connection between WiFi interfaces of devices, no WiFi router needed
        - Standard [devised by WiFi Alliance](http://www.wi-fi.org/discover-wi-fi/wi-fi-aware)
        - New in Android O
    - [AudioBytes](https://developers.google.com/android/reference/com/google/android/gms/nearby/messages/audio/AudioBytes)
        - Transmission by near-ultrasound audio
        - Currently can transmit at most 10 bytes
        - Set [Strategy](https://developers.google.com/android/reference/com/google/android/gms/nearby/messages/Strategy) `DISTANCE_TYPE_EARSHOT`

## Android Reverse Engineering

**Huynh Quang**

My day rank: 1

- Same topic as the *Reverse Engineering* talk from 15 April, morning (Apktool/smali approach)
- Explanation of smali code
- Supporting tools for editing/understanding smali code:
    - [Xposed](http://repo.xposed.info/module/de.robv.android.xposed.installer)
    - [BurpSuite](https://portswigger.net/burp/) - intercept HTPPS requests
    - [SmaliEx](https://github.com/testwhat/SmaliEx) - recombine multi-dexed files to a single DEX file
    - [Frida](https://www.frida.re/) - for quick prototyping
    - [AndroidEagleEye](https://github.com/MindMac/AndroidEagleEye) - based on Xposed
    - [IDA](https://www.hex-rays.com/products/ida/) - Interactive Disassembler
    - [smalidea](https://github.com/JesusFreke/smali/wiki/smalidea) - smali plugin for IntelliJ
- Xposed [modules](http://repo.xposed.info/)
    - [RootCloak](http://repo.xposed.info/module/com.devadvance.rootcloak2) - hide to an app that the current user is root (Xposed module)
    - [YouTube Background Playback](http://repo.xposed.info/module/com.pyler.youtubebackgroundplayback) - enable running YouTube video in backgrond
    - [YouTube AdAway](http://repo.xposed.info/module/ma.wanam.youtubeadaway) - remove ads from YouTube app


## F-Droid

**Peter Seerwylo**

My day rank: --

- Not attended

## Custom Lint Rules for Android

**Hieu Hua**

My day rank: --

- Not attended

---

# Conclusion

Topics presented in the conference, which are...

## Important for Now

- Data Binding: explore in more depth
- Architecture: learn how to apply these patterns
    - MVP
    - MVVC
    - S.O.L.I.D
    - Clean
- Static code analysis
- Espresso
- Manual and automated testing in general
- ConstraintLayout: learn how to use it
- Reactive Programming
- Use a testing farm, like the one of Firebase or Amazon

## Important for the Future

- Techniques to improve performance of apps (talk *Android Performance* on 15 April, afternoon)
- Continous integration

## Interesting But Not So Important

- Reverse engineering apps
- Nearby API and similar APIs
- Kotlin
