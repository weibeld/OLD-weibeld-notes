---
title:  Android Terms
author: Daniel Weibel
date:   December 2017
last_updated: December 2017
---

#### Kernel
The Linux kernel used by Android (which is modified, in order to work with phones and tablets, with respect to the original Linux kernel). Different phone models use different Linux kernels (as a part of the official Android version for a given phone). There are many unofficial alternative Linux kernels that can be used with different Android versions and phones.

#### ROM
The complete Android system, including the Linux kernel and the Android application framework. While there is one official ROM of a given Android version for a given phone (created by the phone manufacturer), there might be alternative ROMs of a given Android version for a given phone (both the Linux kernel and the Android framework are open-source). Example custom ROM: *CyanogenMod*. Installing a custom ROM requires a custom recovery (but no root access).

#### Firmware
Same as ROM

#### Bootloader
Program running on power-on, loading one of the available operating systems into memory, and starting its execution. By default, the bootloader on Android devices is locked, which means that it can't load manually installed operating systems (custom ROMs, custom recoveries). However, some phone manufacturers (e.g. Motorola) provide an expclicit option for unlocking the bootloader. Unlocking the booloader can be done by `fastboot`. Unlocking the bootloader will **erase all data from the phone**.

#### Recovery
Special-purpose mini operating system, which can be loaded by the bootloader instead of the real operating system. The recovery allows to do some few specific tasks, such as reinstalling the ROM, installing another ROM version, backup data, etc. Every Android system includes a built-in stock recovery, but there are alternative recoveries, such as *TWRP* (TeamWin Recovery Project) or *CWM* (ClockWork Mod). These custom recoveries provide more functions, such as e.g. installing custom ROMs. Installing a custom recovery (replacing the stock recovery) can be done with `fastboot`. It requires an unlocked bootloader (but no root access). For booting into recovery mode, turn off phone, then press *<power> + <volume-down>* simultaneously (for some phone models, e.g. Nexs 6).

#### `fastboot`
Tool, residing in `android-sdk/platform-tools`, for doing management tasks when phone is in fastboot mode (bootloader mode). For example, installing custom recoveries and ROMs.
