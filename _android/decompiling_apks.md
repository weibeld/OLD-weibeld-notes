---
title: Decompiling APKs
author: Daniel Weibel
date: 15 April 2017
last_updated: 15 April 2017
---

Explanation of the different ways to decompile an APK. Decompiling an APK means to recover the Java code (or another intelligible code) from an APK file.

This can be useful to analyse third-party apps, or to modify them (by compiling the decompiled code to an APK again).

# What Is An APK?

APK stands for an **Application Package**, and it is the file format in which an app can be installed on an Android device.

An APK file is a ZIP file that contains a file called `classes.dex`.

The `classes.dex` file contains the entire code of an app in DEX bytecode.

DEX stands for **Dalvik Executable**, and DEX bytecode is the machine code of the Dalvik Virtual Machine running on Android devices.

# How To Get The APK Of An App?

The Google Play Store does not provide the APKs of the apps that are distributed there.

In order to nevertheless get the APK of an app, you can use one of the following ways:

- [APKMirror](http://www.apkmirror.com/): a website providing the APKs of many common apps
- [Apk Extractor](https://play.google.com/store/apps/details?id=com.ext.ui): an app that allows to extract the APK of any app installed on your device


# How To Decompile An APK?

There are two ways to decompile an APK.

## 1. d2j-dex2jar

The [`d2j-dex2jar`](https://github.com/pxb1988/dex2jar) tool allows to *view* the decompiled Java code, but not to edit the Java code, or recompile the app.

### Usage

1. Change extension of APK from `.apk` to `.zip` and unzip the file
2. Find `classes.dex` in the unzipped folder
3. Decompile `classes.dex` to `classes.jar` with the following command:
    ~~~bash
    d2j-dex2jar -f -o classes.jar classes.dex
    ~~~
4. Now you can browse the Java code in `classes.jar` with the [JD-GUI](http://jd.benow.ca/) tool

# Apktool

[`Apktool`](https://ibotpeaches.github.io/Apktool/) allows to decompile everything of the app (including Manifest and resources), to edit the decompiled code, and to recompile the app.

However the target language of the decompilation is not to Java but [smali](https://github.com/JesusFreke/smali).

### Usage

1. Decompile the APK with the following command:
    ~~~bash
    apktool d app.apk -o out/ -f
    ~~~
2. Now you can view and edit the smali code with any text editor
3. For recompiling the app, use the following command:
    ~~~bash
    apktool b out/
    ~~~

# Code Obfuscation

There is a caveat to APK decompilation: code obfuscation.

Code obfuscation replaces all the identifers chosen by the developer (class names, method names, variable names, etc.) with short meaningless strings.

With both of the above decompilation methods, if the app has been obfuscated (for example with [ProGuard](https://developer.android.com/studio/build/shrink-code.html)), then the decompiled code contains only these obfuscated identifiers, and not the original ones.

This makes it much more difficult make sense of the decompiled code (however, not impossible).

On the other hand, if the app hasn't been obsucated, then both of the above decompilation method can recover the original identifiers.

## Levels of Obfuscation

Obfuscation can occur either on the **Java-level** or on the **DEX-level**.

Java-level means that the identifiers of the Java code are obfuscated before it is compiled to Java bytecode (and then to DEX bytecode).

DEX-level means that the obfuscation occurs on the DEX bytecode (that is, after the *Java* $\rightarrow$ *Java bytecode* $\rightarrow$ *DEX bytecode* compilation steps)

The common tools for Android code obfuscation are [ProGuard](https://www.guardsquare.com/en/proguard) for Java-level obfuscation and [DexGuard](https://www.guardsquare.com/en/dexguard) for DEX-level obfuscation.

# Notes

Supporting tools for editing and understanding smali code:

- [Xposed](http://repo.xposed.info/module/de.robv.android.xposed.installer): framework for modules that modify an existing app by decompiling its APK and recompiling it; to use these modules, a **rooted** device is necessary
- [BurpSuite](https://portswigger.net/burp/) - intercept HTTPS requests
- [SmaliEx](https://github.com/testwhat/SmaliEx) - recombine multi-dexed files to a single DEX file
- [Frida](https://www.frida.re/) - for quick prototyping
- [AndroidEagleEye](https://github.com/MindMac/AndroidEagleEye) - based on Xposed
- [IDA](https://www.hex-rays.com/products/ida/) - Interactive Disassembler
- [smalidea](https://github.com/JesusFreke/smali/wiki/smalidea) - smali plugin for IntelliJ

Xposed [modules](http://repo.xposed.info/):

- [RootCloak](http://repo.xposed.info/module/com.devadvance.rootcloak2) - hide to an app that the current user is root (Xposed module)
- [YouTube Background Playback](http://repo.xposed.info/module/com.pyler.youtubebackgroundplayback) - enable running YouTube video in backgrond
- [YouTube AdAway](http://repo.xposed.info/module/ma.wanam.youtubeadaway) - remove ads from YouTube app


