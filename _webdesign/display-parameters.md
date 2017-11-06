---
title:  Display Parameters of Common Devices (DRAFT)
author: Daniel Weibel
date:   10 October 2017
last_updated: 10 October 2017
---

A listing of screen parameters of common devices, including phones, tablets, and laptops.

The following parameters are listed fore each device:

- Resolution
- Pixel density
- Device pixel ratio
- Screen dimensions

# Phone Screens

The following table lists some smartphones and the size and resolution of their screen, as well as the resulting pixel density:

| Phone           | Size (in)       | Resolution       |  Pixel Density (PPI) |  DPR | Release Year |
|:----------------|----------------:|--------------------------:|---------------------:|-------------------:|-----:|
| iPhone 3G       | 1.94 x 2.91     | 320 x 480                 |  165                 | 1                  | 2008 |
| iPhone 4        | 1.94 x 2.91     | 640 x 960                 |  330                 | 2                  | 2010 |
| iPhone 5        | 1.96 x 3.48     | 640 x 1136                |  326                 | 2                  | 2012 |
| iPhone 6        | 2.30 x 4.09     | 750 x 1334                |  326                 | 2                  | 2014 |
| iPhone 7 Plus   | 2.69 x 4.79     | 1080 x 1920               |  401                 | 3                  | 2016 |
| Huawei P10      | 2.50 x 4.44     | 1080 x 1920               |  432                 | 3                  | 2017 |
| Motorola Nexus 6| 2.92 x 5.19     | 1440 x 2560               |  493                 | 3.5                | 2014 |
{:.table-wide}

*Source: [GSMArena](https://www.gsmarena.com/). Note that screen sizes and pixel densities are approximative.*

Between iPhone 3G and iPhone 4, the screen size stays the same, but the number of pixels in the width and height dimension doubles. On a segment of length 1 inch on iPhone 3G, one can count 320 pixels, whereas on a segment of the same length on iPhone 4, one can count 640 pixels.

This transition from 165 to 330 PPI marks Apple's introduction of its **Retina display**. According to apple, the Retina display is a display with such a high pixel density that the individual pixels are not visible to the naked eye at normal viewing distance.

iPhone 5 marks the introduction of the 16:9 screen aspect ratio. All the earlier iPhones had a 3:2 screen aspect ratio.

In general, we can observe an increase in pixel density on phone screens over the years.

# Higher Pixel Densities, Shrinking Content

If some content is programmed to have a width of exactly 165 physical pixels, then on iPhone 3G it will be 1 inch wide. If the same content is displayed on iPhone 4, it will be only 0.5 inch wide (because in iPhone 4 there are 330 pixels in one inch, thus 165 pixels occupy exactly 0.5 inch). Moreover, the same content on Huawei P10 will be only 0.38 inches wide (165 divided by 432).

To summarise the width of the 165 pixels content on the different phones:

- iPhone 3G: 2.54 cm
- iPhone 4: 1.27 cm
- Huawei P10: 0.97 cm

This physical shrinking of the content may not be a desired behaviour. It can be addressed by increasing the size (in pixels) of the content. For examples, UI widgets on iPhone 4 must have twice as many pixels in the width and height dimension in order to appear with the same physical size as on iPhone 3G.

However, this doesn't apply to mobile web where the same content is displayed on screens with different sizes, resolutions, and pixel densities, as described next.

# Problems of Higher Phone Screen Pixel Densities for Mobile Web

Let's look at the screen sizes and resolutions of some desktop computers:

| Model                 | Size (in)       | Resolution (pixels)       |  Pixel Density (PPI) | Device Pixel Ratio | Year |
|:----------------------|----------------:|--------------------------:|---------------------:|-------------------:|-----:|
| MacBook Air 11.6"     | 10.12 x 5.69    | 1366 x 768                | 135                  | 1                  | 2013 |
| MacBook Air 13.3"     | 11.25 x 7.03    | 1440 x 900                | 128                  | 1                  | 2017 |
| MacBook 12"           | 10.24 x 6.40    | 2304 x 1440               | 225                  | 2                  | 2017 |
| MacBook Pro 13.3"     | 11.28 x 7.05    | 2560 x 1600               | 227                  | 2                  | 2017 |
| MacBook Pro 15.4"     | 13.09 x 8.18    | 2880 x 1800               | 220                  | 2                  | 2017 |
{:.table-wide}

*Source: [Apple](https://www.apple.com/). For calculating pixel density in PPI from resolution and diagonal screen size, use [dpilove](http://dpi.lv/). Note that in above table the screen sizes and pixel densities are approximative.*




- New definition of CSS pixel (px) in CSS 2.1 (2011)
    - Last specificatino where it's not defined liked this [here](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#length-units) (2008)
    - First specification where it's defined like this [here](https://www.w3.org/TR/2011/PR-CSS2-20110412/syndata.html#length-units) (2011)
- CSS pixel (px): multiple of a physical pixel
    - Determined by each browser based on the device properties (screen size, screen resolution, pixel density, expected viewing distance)
- The device pixel ratio (`window.devicePixelRatio`) and the logical resolution of the device, as well as the default viewport width are determined independently by each browser. On Android Huawei P10 (1080 x 1920 physical pixels):
    - Chrome
        - Logical device resolution (`screen.width`, `screen.height`): 360 x 640 logical pixels
        - Device pixel ratio (`window.devicePixelRatio`): 3
        - Default viewport width (logical width of browser window if `<meta viewport>` tag not set): 980 logical pixels
    - Firefox
        - Logical device resolution: 360 x 604 logical pixels
        - Device pixel ratio: 3
        - Default viewport width: 980 logical pixels
    - Opera Mini
        - Logical device resolution: 300 x 396 logical pixels
        - Device pixel ratio: 3.6
        - Default viewport width: 300 logical pixels
    - Samsung Internet
        - Idem Chrome
- Attention: some browsers report in `screen.width` and `screen.height` not the logical resolution (as defined by the device pixel ratio) but the physical resolution (e.g. Dolphin browser).



# Common CSS Screen Width Breakpoints

- Phones: < 768px
- Tablets: >= 768 px, < 1024 px
- Desktops: >= 1024 px
