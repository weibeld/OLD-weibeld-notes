---
title:  "R Markdown: How It Works"
author: Daniel Weibel
date:   24 July 2016
last_updated: 31 October 2017
---

R Markdown is an R package that allows to convert `.Rmd` (R Markdown) files to PDF. An `.Rmd` file is a Markdown file with integrated R code chunks. When the `.Rmd` file gets processed by R Markdown, these R code chunks get executed, and their output is incorporated in the output PDF.

In the following, it is explained how R Markdown works internally, including its two main components [knitr](#knitr) and [Pandoc](#r-markdown).

# Overview

[PDF version](assets/how-rmarkdown-works.pdf)

![R Markdown Overview](assets/how-rmarkdown-works.png){:width="100%"}


knitr
=====

[knitr](https://github.com/yihui/knitr) is an R package (`knitr`). It converts one of the following input file formats

- `.Rnw`: LaTeX file with integrated R code chunks
- `.Rhtml`: HTML file with integrated R code chunks
- `.Rmd`: Markdown file with integrated R code chunks (R Markdown file)

to a `.tex`, `.html`, or `.md` output file, respectively (other input and output formats and combinations of input to output formats are possible).

The main function is `knit`.

~~~
             +-----------+
.Rnw         |           |       .tex
.Rhtml ----> |   knitr   | ----> .html
.Rmd         |           |       .md
             +-----------+
~~~

**Example:**

~~~R
knit("foo.Rnw")
~~~

Produces `foo.tex`.



R Markdown
==========

R Markdown is an R package (`rmarkdown`). It combines [knitr](https://yihui.name/knitr/) and [Pandoc](http://pandoc.org/). Pandoc is a general-purpose Markdown converter that allows to convert Markdown to many output formats.

In particular, R Markdown restricts the input format for knitr to `.Rmd` (R Markdown), uses knitr to convert this to an `.md` (Pandoc-flavoured Markdown) file, and finally uses Pandoc to convert this `.md` file to a `.pdf`, `.tex`, or `.html` file (other output formats are possible).

The main function is `render`. 

~~~
           +-----------+                 +------------+
           |           |                 |            |       .pdf
.Rmd ----> |   knitr   | ----> .md ----> |   Pandoc   | ----> .tex
           |           |                 |            |       .html
           +-----------+                 +------------+
~~~

**Example:**

~~~R
render("foo.Rmd")
render("foo.Rmd", "pdf_document")
~~~

Produces `foo.html` and `foo.pdf`, respectively.
