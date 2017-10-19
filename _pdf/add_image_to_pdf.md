---
title:  Add an Image to a PDF File
author: Daniel Weibel
date:   25 November 2016
last_updated: 25 November 2016
---

Convert the image to PDF with ImageMagick:

~~~bash
convert image.png image.pdf
~~~

Place the image to the desired position in a PDF file (e.g. A4 sheet):

**Note:** this produces **image-pdfjam.pdf**.

~~~bash
pdfjam --paper a4paper --scale 0.9 --offset '0cm -5cm' image.pdf
~~~

Add image PDF to base PDF with pdftk:

~~~bash
pdftk base.pdf stamp image-pdfjam.pdf output out.pdf
~~~

Source: <http://stackoverflow.com/questions/20531079/adding-an-image-to-a-pdf-with-pdftk>