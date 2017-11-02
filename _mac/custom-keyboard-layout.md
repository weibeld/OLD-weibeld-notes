---
title:  Install a Custom Keyboard Layout
author: Daniel Weibel
date:   28 December 2015
last_updated: 2 November 2017
---

This document explains how to add a custom keyboard layout to macOS (that is, a keyboard layout that doesn't come preinstalled with the operating system).

The preinstalled keyboard layouts on macOS can be found in 

~~~
System Preferences > Keyboard > Input Sources > +
~~~

# What Is A Keyboard Layout?

A keyboard layout for macOS is an XML-based `.keylayout` file, which defines a value for every key on the keyboard.


# Where To Find .keylayout Files?

A good source for `.keylayout` files is [Ukelele](http://scripts.sil.org/ukelele), a keyboard layout editor for macOS. 

You don't even need to install Ukelele, just download the `.dmg` file from [here](http://scripts.sil.org/ukelele), double-click the `.dmg` file, and then open the folder `Resources` contained in it. There, in `Resources/Standard Keyboards` are many ready-to-use `.keylayout` files.


# How To Install A .keylayout File?

Simply copy the `.keylayout` file to:

~~~
/Library/Keyboard\ Layouts
~~~

The Ukelele `Resources/Standard Keyboards` folder also contains an `.icns` file for every `.keylayout` file. It contains the icon that will be shown in the input menu of the menu bar when the keyboard layout is activated. You can copy the `.icns` file also to the `/Library/Keyboard Layouts` directory.

Once the `.keylayout` and `.icns` files are installed, go to

~~~
System Preferences > Keyboard > Input Sources > + > Others
~~~

and the just added keyboard layout should now be listed there. 


# How To Create A Custom .keylayout File?

If you want to edit an existing `.keylayout` file, or create one from scratch, this can be done with [Ukelele](http://scripts.sil.org/ukelele). There is an **Ukelele Tutorial** in the `Resources` folder of the `.dmg` file.

Since `.keylayout` files are pure XML files, it is also possible to create/edit a `.keylayout` file by hand with any text editor.


# Notes

Here are direct links to the Logitech Swiss German keyboard layout files that I personally use:

- [LogitechSwissGerman.keylayout](assets/LogitechSwissGerman.keylayout)
- [LogitechSwissGerman.icns](assets/LogitechSwissGerman.icns)
