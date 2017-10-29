---
title:  Writing a Letter With LaTeX
author: Daniel Weibel
date:   5 August 2014
last_updated: 29 October 2017
---

There exist several LaTeX classes for writing formal letters. I found [newlfm](https://ctan.org/pkg/newlfm) to be the best one.

Here is an example letter using the newlfm class.

{% gist 7ebfdbe1d436906ebb12ee59ebb026dc letter.tex %}

And here is how it looks like:

{% gist 7ebfdbe1d436906ebb12ee59ebb026dc output.pdf %}

To generate the PDF output, simply execute:

~~~bash
pdflatex letter.tex
~~~

