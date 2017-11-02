---
title:  R Graphics
author: Daniel Weibel
date:   6 December 2014
last_updated: 6 December 2014
---

Graphics functions
------------------

Graphics functions write graphical information to the current graphics device driver. There are high-level and low-level graphics functions. High-level graphics function create entire plots (including axes, labels, etc., which are not part of a plot). If there is already a plot on the current graphics device, it is overwritten. Low-level graphics functions add elements to an existing plot (such as points, lines, text, etc.).

Graphics device drivers
-----------------------

Graphics device drivers translate graphical information from R to a format understood by the device they correspond to (e.g. translate the R description of a plot to PDF format). A new device driver is started with its function, e.g. pdf(), and the current device driver is terminated with dev.off(). All the currently running device drivers can be listed with dev.list() (only one is the "current").

Graphics parameters
-------------------

Each graphics device driver has its own copy of a list of graphics parameters. The current values for all of them can be listed with par(). The values of these parameters affect how the output of the graphics functions looks like. The graphics parameters can be set either permanently with par(...) (all graphics functions invoked in the future will be affected), or for individual graphics functions only, by passing them e.g. cex=0.5 as argument.

Graphics device output dimensions
---------------------------------

The default width and height of the PDF graphics device is 7x7 inches. That's the size of the PDF that will be created. It can be changed with the width and height parameters to the graphics device driver functions. E.g. pdf(width=4,height=4).

Device region, margin, plotting region
--------------------------------------

The entire output file is the "device region" of a graphics. Each graphics has a "margin" expanding from the four edges of the device region inwards. In the remaining space in the middle of the graphics is the "plotting region". The plotting region contains only the plot. Usually, the axes are at the border of the plotting region, but they, as well as ticks, axes labels, plot title, etc. are not part of the plot. The plotting region can either take up all the remaining space in the middle (graphics parameter pty="m"), be a square as big as possible (pty="s") or its size can be explicitly defined in inches (pin=c(w,h)). pty="m" is maybe the most straightforward variant, because the plotting region is clearly defined by the output file dimensions minus the margins. As axes labels, titles, etc. are outside the plotting region, the margins must be big enough to accommodate them.

Line height
-----------

R measures margins and tick lengths in terms of so-called "line heights". The line height is the graphical parameter csi, which defaults to 0.2, thus the default line height is 0.2 inches. If a margin is set to 4 (mar), it means its absolute value is 0.8 inches. If a tick length is set to 0.5 (tcl), it means its length is 0.1 inches. However, these values are further multiplied with mex, which defaults to 1. So, the real value for a margin is mar * csi * mex, and for a tick length tcl * csi * mex. This also applies to the margins of axis elements to the plot border (mgp). mex allows thus to alter the line height yardstick for these margins and tick lengths without affecting anything else. csi cannot be directly set. However it is altered by cex, in particular, csi (new) = csi (current) * cex. Thus modifying cex (for increasing or decreasing text size) modifies the line height yardstick (note: the change of csi is only shown in the output of par() after a call to a graphics function). However, modifying ps (for setting a text size in points, e.g. 10, 12) does not modify the line height. Text size and margins may thus be out of proportion. On the other hand, pointsize, an argument to the device driver for setting the size of text in points, modifies csi. The default pointsize of pdf() is 12, and there's the relation csi = csi (default) * pointsize/12 (csi on RHS always 0.2). Text size and margins stay thus in the same proportions. Another difference between ps and pointsize is that ps does not alter the size of symbols like points (e.g. dots in a scatterplot). pointsize on the other hand scales these symbols together with the text. Both, ps and pointsize, however, do not alter the line width (of boxes, axes, symbols, etc.). If the text is made smaller, the line width may thus be large in proportion to the text. This can be changed with lwd.

How to properly set dimensions of output graphics
-------------------------------------------------

Regarding the above characteristics, the best way to set the dimensions of the output graphics may be the following.
- Set width and height of output graphics in graphics device driver function
  --> pdf(width=4,height=3)
- Set pointsize in graphics device driver function
  --> pdf(...,pointsize=6)
Now, the graphics is in fact properly scaled with margins being proportional to text, etc. However, what's out of proportions is the line width which has still the default value of 1
- Set line width
  --> par(lwd=0.5)
Now, all lines have the specified line width except, unfortunately, the axes. They are still drawn with the default line width. One way to fix this is by setting lwd in a high-level graphics function. E.g.
  --> stripchart(...,lwd=0.5)
However, this does not always work. In some graphics functions (e.g. plot, boxplot), setting lwd has no effect. In this case, the plot must be drawn without axes, and then the axis have to be manually added with the desired line width.
  --> plot(...,axes=FALSE)
      axis(1,lwd=0.5)
      axis(2,lwd=0.5)
