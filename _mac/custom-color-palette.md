---
title:  Install a Custom Color Palette in the Apple Color Window
author: Daniel Weibel
date:   30 November 2016
last_updated: 2 November 2017
---

This document explains how to add a custom color palette to the Apple Color Window. This allows to easily use the colors of this palette in various applications on macOS.

Apple Color Window
==================

The Apple Color Window is the following window:

![Apple Color Window](assets/colors-window.png){:width="40%"}{:.center-image}

It is a window provided by the operating system, and used by many applications as their interface for choosing a color (for example, OmniGraffle).

The Apple Color Window provides various *color pickers* for choosing a color (shown as tabs at the top of the window):

- Color Wheel
- Color Sliders
- Color Palettes
- Image Palettes
- Pencils
- Pattern Palette

The instructions in this document allow to add a custom palette to the **Color Palettes** picker.

## By The Way: Color Swatches

Individual colors can be persistently saved in the *Color Well*, which is a matrix of *color swatches* (small squares holding a color) at the bottom of the window. The current Color Well is saved in the following file (this file may not exist if Color Well is currently empty):

~~~bash
~/Library/Colors/NSColorPanelSwatches.plist
~~~


Solarized Color Scheme
=========

Solarized is a popular color scheme created by Ethan Schoonover. It is presented [here](http://ethanschoonover.com/solarized), and it is also available on [GitHub](https://github.com/altercation/solarized) in many formats.


Adding the Solarized Color Scheme to the Apple Color Window
============================================================

- Download the Solarized color scheme from [here](http://ethanschoonover.com/solarized/files/solarized.zip)
- Unzip `solarized.zip`
- Copy the file
    ~~~
    solarized/apple-colorpalette-solarized/Solarized.clr
    ~~~
    to the following directory:
    ~~~
    ~/Library/Colors
    ~~~

That's it. When the Apple Color Window is used the next time, the Solarized color scheme will be available under the *Color Palettes* tab of the Apple Color Window.

Note that this process works with any color palette, as long as this palette provides a `.clr` file.
