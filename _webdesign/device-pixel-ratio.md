---
title:  Device Pixel Ratio (DRAFT)
author: Daniel Weibel
date:   11 October 2017
last_updated: 11 October 2017
---

This is an explanation of the CSS `px` unit which is called the "CSS pixel". It is the "magic unit" of CSS.


# History

Until the [CSS2 specification](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#length-units) of 2008, a `px` was a *relative* unit. It had not a fixed ratio to the absolute units like `in`, `cm`, `mm`, etc.

Since the [CSS2.1 specification](https://www.w3.org/TR/2011/PR-CSS2-20110412/syndata.html#length-units) of 2011, a `px` is an *absolute* unit and it has a fixed ratio to the other absolute units, which is 96 `px` = 1 `in` (see [here](https://www.w3.org/TR/2011/PR-CSS2-20110412/syndata.html#length-units)).


# The Old Way

Until CSS2 the absolute units (which were `in`, `cm`, `mm`, `pt`, `pc`) were tied to their physical measurements. That is, web browsers were implemented so that 1 `in` in CSS measured always 1 inch on the screen, if measured with a ruler.

The `px` was a *relative* unit and its size was defined by the concept of **reference pixel**. The reference pixel is a purely theoretical concept. It is an ideal pixel size in millimetres based on the distance of the viewer to the screen and the screen pixel denxity. It should not be too big, so that an individual pixel cannot be easily discerned by the eye, and it should not be smaller than necessary. Thus, the value of the reference pixel is unique to each device. It could be, for example, 0.26 mm for one device, or 1.4 mm for another device.

The size of the `px` was then chosen to "most closely match the reference pixel" (see [here](https://www.w3.org/TR/css-values-3/#absolute-lengths)). Probably this was done in multiples of the size of a physical pixel, so that a `px` maps to an integer number of physical pixels. But this seems not to be specified by CSS2.

Most importantly, the ratio between `px` and `in` was not fixed. Thus, if two lines of 96 `px` and 1 `in`, respectively, had the same physical length on one device (e.g. a 96 PPI monitor), they could have diverging lengths on another device.

Note that 96 PPI was the most common pixel density of computer screen at some time (quasi standard).

This behaviour, and the assumption of developers that 96 `px` always equals 1 `in` (if they tested their design on a 96 PPI monitor), were apparently the main reason that the CSS Working Group decided to introduce a new definitio of the `px` in CSS2.1:

> This change was made because too much existing content relies on the assumption of 96dpi, and breaking that assumption broke the content.

See green note [here](https://www.w3.org/TR/css-values-3/#absolute-lengths).


# The New Way

Since CSS2.1 (2011), the `px` is an *absolute* unit with a fixed ratio to the other absolute units, in particular 96 `px` = 1 `in`.

There are now actually two ways in which the physical sizes of the absolute values can be defined (of which only the second one is relevant for web developers):

1. All the absolute units correspond to their *physical sizes*
2. The size of the `px` is defined based on the *reference pixel*, and from `px`, the physical sizes of all the other absolute units are derived

See [here](https://www.w3.org/TR/css-values-3/#absolute-lengths).

**Option 1** applies basically **only to print** (and very high resolution devices) and is not relevant for web design. In this case, 1 `in` is always rendered as 1 inch long, and 1 `px` is rendered as 1/96 `px` long.

**Option 2** applies to all devices targeted by web design, such as desktop monitors, laptops, and phones. In this case, the absolute units, such as `in` and `cm`, do *not* necessarily equal their real sizes if measured with a ruler on the screen. Thus, a line that is defined as 1 `in` long is not necessarily 1 inch on the screen, it can be shorter or longer.

The physical size of these absolute units is determined by the physical sze of `px`, and the physical size of `px` is determined based on the size of the  *reference pixel*. The [specification](https://www.w3.org/TR/css-values-3/#absolute-lengths) states how this should be done:

> ...it is recommended that the pixel unit refer to the whole number of device pixels that best approximates the reference pixel.

In other words: a physical device pixel has a physical length *A*, and the reference pixel for this specific device has a physical length *B*. The length of a `px` is set to the multiple of *A* that best approximates *B*.

## Examples of calculating physical length of px

For example, the size of a physical device pixel may be 0.12 mm (220 PPI as in MacBook Pro 15" 2017), and the reference pixel for this type of device may be 0.26 mm. The multiple of 0.12 mm that best approximates 0.26 mm is 2 * 0.12 mm = 0.24 mm. Thus, the physical length of a `px` is 0.24 mm. The physical length of 1 `in` (which is equivalent to 96 `px`) on this screen will thus be 96 * 0.24 mm = 23.04 mm, that is, somewhat shorter than the real length of an inch of 25.4 mm.

The thing to remember here is the *device pixel ratio* of 2 (sometimes called *CSS pixel ratio*). A content that is *x* `px` wide is displayed on the screen by 2 * *x* physical pixels in its width dimension. For example, a horizontal line that is defined wtih a length of 100 `px` has a length of 200 physical pixels on the screen. This applies to the width as well as the height dimension. So, a square with a width of 1 `px` and a height of 1 `px` is displayed as a 2x2 block of physical pixels on the screen.

Note that the device pixel ratio on a MacBook Pro 15" happens to be 2 in reality. See [here](http://www.canbike.org/CSSpixels/).

Another example: the 2015 MacBook Air 11" has a pixel density of 135 PPI, and thus a device pixel width of 0.188 mm. Let's assume, for the sake of this example, a CSS reference pixel size of 0.26 mm for this device. The multiple of 0.188 mm that is closes to 0.26 mm is 0.188 mm itself, thus we get a device pixel ratio of 1. In this case now, a line of length 1 `in` will measure 96 * 0.188 mm = 18.05 mm on the screen.

The device pixel ratio used on the MacBook Air 11" seems indeed to be 1. This can be seen when drawing a 1 `in` line in the browser and measuring it with a ruler on the screen. It will be 18 mm long.

Yet another example: the [Huawei P10](https://www.gsmarena.com/huawei_p10-8514.php) smartphone has a 432 PPI display, which means a physical device pixel size of 0.0588 mm. Let's assume that the reference pixel size for this device is 0.15 mm (this is just an ignorant guess, I didn't calculate it; but it must be smaller than for a laptop, because the viewing distance is smaller). The multiple of 0.0588 mm that is closest to 0.15 mm is 3 * 0.0588 mm = 0.1764 mm. Thus, the size of `px` on the Huawei P10 is 0.1764 mm. A 1 `in` line on this device measures thus 96 * 0.1764 mm = 16.93 mm. 

Again, this can be verified by measuring a 1 `in` line  with a ruler on the screen of the Huawei P10. The important thing is to know that the device pixel ratio of the Huawei P10 in this case is 3.

Note that in the mobile phone case, there is a slight complication. The device pixel ratio of 3, and the derived physical length of 16.93 mm of a 1 `in` line, applies only if the *viewport* of the browser is set to the so-called *device width*, which is the width of the device in logical CSS pixels based on the device pixel ratio of 3. In the case of the Huawei P10, the width of the screen is 1080 physical pixels, and thus 1080/3 = 360 CSS pixels. Only if the viewport is set to this value, will 1 `px` equal exactly 3 physical pixels and the 1 `in` line measures 16.93 mm on the screen. But more on this later.

## Summary to calculate the physical length of px

1. Find out the *pixel density* (PPI) of the target device
    - Device specifications
    - Calculate it on [dpilove](http://dpi.lv/)
2. Find out the *device pixel ratio* of the target device
    - [devicepixelratio.com](http://devicepixelratio.com/)
    - [mydevice.io](https://mydevice.io/devices/)
    - [CANbike CSS Pixel Widths](http://www.canbike.org/CSSpixels/)
3. Calculate physical size of a device pixel
    - Divide 1 by the pixel density; this is the physical size of a device pixel in inches
4. Calculate physical size of a `px` (CSS pixel)
    - Multiply device pixel size with device pixel ratio


# Device Pixel Ratio

The device pixel ratio, as described above, is the ratio of physical pixels (device pixels) to logical pixels. In the case of websites, this is the number of physical pixels that equals the size of a CSS pixel (`px`).

It seems that device manufacturers define a device pixel ratio for each device. This device pixel ratio can then be taken into account by the various applications of the device, for example, websites and native apps. However, it is not really clear, whether the device pixel ratio is defined authoritatively by the manufacturer, or if applications (like web browsers) make up something.

## Purpose

The purpose of the device pixel ratio is basically to "lie" about a display's resolution. For example, an iPhone 4 has a 640 x 960 pixels resolution, but a device pixel ratio of 2, which makes it appear like a 320 x 480 pixels resolution. This is the same as the physical resolution of the iPhone 3G. This egalisation of abstract resolutions of iPhone 3G and iPhone 4 was the reason for the introduction of the device pixel ratio, see [History](#device-pixel-ratio-history).

As another example, the Huawei P10 has a resolution of 1080 x 1920 pixels, and a device pixel ratio of 3. So, this makes the screen appear to have a 360 x 640 pixels resolution to content renderers that take into account the device pixel ratio, like web browsers.

The MacBook Pro 15.4" has a resolution of 2880 x 1800 pixels, and a device pixel ratio of 2 (like all MacBooks with Retina displays), which makes the display appear to have a 1440 x 900 pixels resolution.

The device pixel ratio does not need to be an integer. Various devices define a real number ratio. For example, the Motorola Nexus 6 reports a device pixel ratio of 3.5. This phone has a resolution of 1440 x 2560, which, with the device pixel ratio applied, results in an 432 x 732 pixels logical resolution.

## Reason

The reason for the device pixel ratio is simply to avoid the need for a magnifying glass for viewing a website or other content on a device with a very high pixel density. 

Take for example the Motorola Nexus 6. It has a horizontal resolution of 1440 pixels. This is more than the MacBook Air 11.6", which has a horizontal resolution of 1366 pixels. Without a device pixel ratio, a website that is viewed full-width on the MacBook Air, would appear in the same full-width form on the Nexus 6. It would appear like a shrunk down copy of the website on the MacBook Air. While this may look cute, it makes reading hard, due to the small physical size, and it requires the user to zoom in.

With the device pixel ratio, on the other hand, the Nexus 6 "pretends" to the HTML renderer that this is actually a 432 x 732 pixels device. The website, in this case, will look the same as when resizing the browser window on the MacBook Air to 432 x 732 pixels. That is, text and other content is larger relative to the display size. For example, a 400 pixels wide image would fill most of the screen on the Nexus 6, whereas without the device pixel ratio, it would occupy less than a third of the display width and might be not easily visible without zomming.

In short, the device pixel ratio achieves a "cropping" effect, like cropping a portion of the phone screen's dimensions from the website as displayed on a larger screen. Text and content stays sufficiently big and readable. This is opposed to a "shrinking" effect that would take place without the device pixel ratio, namely shrinking down a website as displayed on a larger screen until it fits in the phone's screen.

Note that with the early smartphones this shrinking down of content was not an issue, as these devices had much lower pixel densities. For example, the iPhone 3G had a physical resolution of 320 x 480 pixels, which is already a "suitable" resolutions for displays of this size, so no application of a device pixel ratio was necessary. Only when pixel densities continually increased on smartphones this became an issue, and the device pixel ratio had to be introduced.

## Find out device pixel ratio of a device

There exist several compilations of device pixel ratios of popular devices:

- [devicepixelratio.com](http://devicepixelratio.com/)
- [mydevice.io](https://mydevice.io/devices/)
- [CANbike CSS Pixel Widths](http://www.canbike.org/CSSpixels/)
- [bjango](https://bjango.com/articles/min-device-pixel-ratio/)

For example, the device pixel ratios for some interesting devices are:

| Device                      | Device Pixel Ratio |
|:----------------------------|-------------------:|
| iPhone <= 3G                | 1                  |
| iPhone 4--7                 | 2                  |
| iPhone 6 Plus and 7 Plus    | 3                  |
| iPad >= 3                   | 2                  |
| MacBook < 2012              | 1                  |
| MacBook >= 2012             | 2                  |
| Huawei P10                  | 3                  |
| Motorola Nexus 6            | 3.5                |
{:.table-normal}

## History {#device-pixel-ratio-history}

The device pixel ratio story really started in 2012 when Apple introduced the Retina display for iPhone 4. According to Apple, a Retina display is a display on which the naked eye cannot discern the individual pixels at a normal viewing distance.

The iPhone 3G had a resolution of 320 x 480 pixels and a pixel density of 165 PPI. The iPhone 4 had a resolution of 640 x 960 pixels with the same display size as the iPhone 3G, and thus a doubled pixel density of 330 PPI (this means the width and height of a pixel was halved). This was Apple's magic step into high-resolution (Retina) displays.

![Screen of iPhone 3G](assets/iphone3g-320-width.jpg){:.center-image}{:width="60%"}

![Screen of iPhone 4](assets/iphone4-640-width.jpg){:.center-image}{:width="60%"}

But now a user-interface widget defined in pixels would be half the physical width and height on the iPhone 4 with respect to the iPhone 3GS. Apple wanted the same user-interface definititons to display in the same physical size on both devices, and therefore introduced the device pixel ratio of 2 for the iPhone 4. This device pixel ratio basically introduced an abstraction layer between the physical device pixels and abstract logical pixels that are used for the layout of content. In this way, the iPhone 4 basically "lies" to the legacy iPhone 3G content displayed on it that it is a 320 x 480 pixels phone (like the iPhone 3GS), whereas in reality it is a 640 x 960 pixels phone. The mapping from logical pixels to the physical device pixels is then done under the hood.

In this way, a 50 x 50 pixels content is displayed on the iPhone 3GS as a square of 50 x 50 physical pixels, whereas on the iPhone 4 it is displayed as a square of 100 x 100 physical pixels, however, on both phones the square has the same physical size (if measured with a ruler on the screen).

It seems that the device pixel ratio, once introduced, was then also used as the basis for the ratio of a CSS pixel to physical pixels in the web. As we have seen, the CSS specification recommends the reference pixel (which has been introduced earlier than the device pixel ratio) to be used for determining the ratio of a CSS pixel to physical pixels. However, this is just a recommendation, and the device pixel ratio, as introduced by Apple, serves effectively the same purpose as the reference pixel. 

## The Window.devicePixelRatio property




# Viewport and Mobile Browsers



In the early days, websites were displayed mainly on desktop monitors, and the typical pixel density of a monitor was 96 PPI. Thus, a row of 96 pixels on these monitors measures exactly 1 inch.

This was so common that CSS "hardcoded" it. It defined the relation of the units `px` and `in` as 96 `px` = 1 `in`. 

Thus, on a 96 PPI monitor, the size of 1 `px` equals exactly the size of 1 physical pixel of the monitor, namely 1/96 inch (0.265 mm).

A line that is defined as 96 `px` long and 1 `px` thick in CSS, appears on a 96 PPI monitor exactly 1 inch long, if measured with a ruler on the screen. Furthermore, this line consists of a row of exactly 96 physical pixels.

Note that from the physical size of 1 `px` and the relation 96 `px` = 1 `in`, the physical sizes of the other [absolute units](https://www.w3.org/TR/css-values-3/#absolute-lengths) `mm`, `cm`, `pc`, `pt` (if measured with a ruler on the screen) naturally follows.

# What if the pixel density of the monitor is not 96 PPI?

As we have seen, on a 96 PPI screen, one `px` maps to 1 pixel.

What if the monitor has, for example, 135 PPI (like the 2015 MacBook Air 11")? Should 1 `px` now map to 1.406 physical pixels (135/96), so that a line of 96 `px` still measures 1 inch when measured with a ruler on the screen? Or should 1 `px` map to 1 physical pixel, and consequently a 96 `px` line will be only 0.711 inch long when measured with a ruler on teh screen?

The answer is given the CSS **reference pixel**. 





# References

- [W3C CSS Tips & Tricks: em, px, pt, cm, in...](https://www.w3.org/Style/Examples/007/units.en.html)
- [CSS 3 Specification: Values and Units Module](https://www.w3.org/TR/css-values-3/#absolute-lengths)
- [Quirksmode: devicePixelRatio](https://www.quirksmode.org/blog/archives/2012/06/devicepixelrati.html)
- [Quirksmode: More about devicePixelRatio](https://www.quirksmode.org/blog/archives/2012/07/more_about_devi.html)
- [Udacity: Device pixel ratio](https://www.youtube.com/watch?v=u0rfDeaxehc)

