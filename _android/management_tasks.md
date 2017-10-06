---
title:  Android Management Tasks
author: Daniel Weibel
date:   15 December 2015
---

This document contains step-by-step instructions for some common Android management tasks.

All the instructions have been tested with a Google Nexus 6 phone running Android 6.0/MRA58N and 6.0.1/MMB29K.


The basic prerequisites for all tasks are:

  - On computer: Android SDK installed, and `android-sdk/platform-tools` in `PATH`
  - On phone: USB debugging enabled (*Settings > Developer Options*)


Boot Into Bootloader Mode
=========================

**Notes:**

  - Bootloader mode is a graphical menu provided by the bootloader
  - A.k.a **fastboot mode** (because possible to run `fastboot` commands from computer)

**Variant 1:**

  1. USB-connect phone to computer
  2. On computer: `adb reboot bootloader`

**Variant 2:**

  1. Turn off phone
  2. Press and hold *power* + *volume-down*


Boot Into Recovery Mode
=======================

**Note:**

  - This is the recovery program, either the default one, or an alternative one (e.g. TWRP)

**Variant 1:**

  1. Boot into bootloader mode (see above)
  2. In the bootloader menu on the phone, select *RECOVERY MODE*

**Variant 2:**

  1. On computer: `adb reboot recovery`


Unlock Bootloader
=================

**Note:**

  - This will **factory reset** the phone

**Steps:**

  1. In *Settings > Developer Options*, enable *OEM unlocking*
  2. USB-connect phone to computer
  3. Boot phone into bootloader mode (don't select any menu item)
  4. On computer: `fastboot oem unlock` (on newer devices `fastboot flashing unlock`)
  5. Follow instructions on phone screen
  6. Reboot (the now factory-reset) Android


Install a Custom Recovery (TWRP)
================================

**Prerequisite:**

  - Unlocked bootloader

**Note:**

  - There are two main alternative recoveries, TWRP (TeamWin Recovery Project) and CWM (ClockworkMod ROM Manager), but TWRP is the simpler one

**Steps:**

  1. Download the device-specific TWRP image (file `twrp*.img`) from <https://twrp.me/Devices/>
  2. USB-connect phone to computer
  3. Boot phone into bootloader mode (don't select any menu item)
  4. On computer: `fastboot flash recovery <twrp*.img>`
  5. In bootloader menu on phone, select *RECOVERY MODE*
      - This boots the newly installed TWRP
      - It is important to boot TWRP a first time before rebooting Android. Because on the first boot, TWRP will patch the stock ROM to not automatically replace TWRP with the stock recovery.
  6. Reboot Android

On the first boot of TWRP, there might a dialog asking "Keep the system partition read-only?". Selecting "Keep read-only" prevents TWRP from modifying the system partition `/system`. This has some advantages regarding automatic Android updates. However, it prevents TWRP from being sticky, because in this case, TWRP cannot prevent the operating system from overwriting TWRP with the stock recovery on the next boot. The "Keep read-only" option can also be found in the *Mount* menu item of TWRP.


Install a Custom Kernel
=======================

**Prerequisite:**

  - Custom recovery installed (we assume TWRP for the below instructions)

**Steps:**

  1. Copy the ZIP file of the desired kernel to the external storage of the phone
  2. Boot into recovery mode (TWRP)
  3. In TWRP, select *Install*, locate kernel ZIP file, and confirm installation
  4. Reboot Android


Install SuperSU
===============

**Prerequisites:**

  - Custom recovery installed
  - Possibly, custom kernel installed (e.g. for Nexus 6 with Android 6.0 MRA58N)

**Note:**

  - This "roots" the phone, i.e. installs the `su` command (in `/system/xbin`)

**Steps:**

  1. Copy the ZIP file of the desired version of SuperSU to the external storage of the phone
  2. Boot into recovery mode (TWRP)
  3. In TWRP, select *Install*, locate SudoSU ZIP file, and confirm installation
  4. Reboot Android

The step of installing a custom kernel before installing SuperSU (or installing both at the same time) might be very important. Without a custom kernel, SuperSU might cause a "Device corrupt" boot error on the next boot of Android, which can only be remedied by flashing a factory image onto the phone.


Flash Factory Image
===================

**Prerequisite:**

  - Unlocked bootloader

**Notes:**

  - This replaces the entire content of the hard disk with an "out-of-factory" image
  - Lets the bootloader unlocked
  - Removes the custom recovery
  - Factory images for specific phones are provided by the phone manufacturers
  - For Google Nexus phones see <https://developers.google.com/android/nexus/images>

**Steps:**

  1. Download the desired factory image and unzip it
  2. USB-connect phone to computer
  3. Boot into bootloader mode
  4. On computer: in the unzipped factory image directory execute `flash-all.sh`
  5. That's it. When done, the phone will reboot automatically
