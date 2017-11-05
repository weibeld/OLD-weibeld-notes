---
title:  Pixel, Resolution, Pixel Density
author: Daniel Weibel
date:   10 October 2017
last_updated: 10 October 2017
---

Explaining three very fundamental concepts of the digital representation of visual content: the pixel, the resolution, and the pixel density.

# Pixel {#pixel}

Smallest discernible element of an image or screen.

In the case of an **image**, it's an individual cell of the matrix of colour values that constitutes the image.

In the case of a **screen**, it is an individual "light bulb" of the matrix of light bulbs that constitutes the screen.

Note that in the case of a screen, a pixel has a physical size (for example, a pixel measures 0.1 x 0.1 mm). Thus, the size of a pixel of a screen directly determine's the screen's [pixel density (PPI)](#pixel-density).


# Resolution {#resolution}

The number of [pixels](#pixel) that an image or screen consists of.

Usually indicated as **width x height**, for example, 1080 x 1920 pixels.

In the case of an **image**, it is the amount of detail that the image can represent. The values of all the pixels together is the "information" that the image contains.

In the case of a **screen**, it is simply the number of "light bulbs" of a screen that it can use to screen content. The more light bulbs, the more details the screen is capable of screening.


# Pixel Density {#pixel-density}

The relation of the [resolution](#resolution) of an image or screen to the **physical size** of the image or screen.

The most common unit for pixel density is **PPI**, which stands for **pixels per inch**.

In the case of an **image**, PPI can be seen as a directive for printing the image:

- If a **200 x 200 pixels** image is printed with **100 PPI**, its printed physical size will be **2 x 2 in**
- If the same image is printed with **400 PPI**, its printed physical size will be **0.5 x 0.5 in**
- If the same image is printed with **2 PPI**, its printed physical size will be **100 x 100 in**

In each case, however, it is the *same* image, with the *same* resolution, representing the *same* information.

In the case of **screens** with similar sizes (for example phones), the pixel density can be used as an indicator of the screen's resolution. If a screen has a higher PPI value than another screen of the same size, then it has a higher resolution, that is, more "light bulbs" (pixels).

### What About DPI?

The term DPI stands for *dots per inch*, and it applies strictly only to the **technicalities of printers** (inkjet and laser). It has to do with how printers blend their four base colours (magenta, cyan, yellow, and black) to mimic the required colour of an individual pixel of the image being printed. In short, printers print each pixel of an image as a number of dots in the base colours (e.g. print each pixel as a 4 x 4 matrix of dots) so that, looked from afar, the pixel seems to have the right colour and hue.

Wit respect to screens and digital images, the term DPI is completely meaningless. Unless you are a printing professional (printing digital images on paper) there is **no need to ever use this term**.

PPI is a property of a digital image (or screen), whereas DPI is a property of a printer.

# References

- [PPI vs. DPI: what's the difference?](https://en.99designs.ch/blog/tips/ppi-vs-dpi-whats-the-difference/)

