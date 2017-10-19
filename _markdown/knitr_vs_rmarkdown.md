---
title:  knitr vs. R Markdown
author: Daniel Weibel
date:   24 July 2016
last_updated: 24 July 2016
---

knitr
=====

knitr is an R package (`knitr`). It converts one of the following input file formats

- .Rnw: LaTeX file with integrated R code chunks
- .Rhtml: HTML file with integrated R code chunks
- .Rmd: Markdown file with integrated R code chunks

to a .tex, .html, or .md output file, respectively (other input and output formats and combinations of input to output formats are possible).

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

R Markdown is an R package (`rmarkdown`). It combines knitr and Pandoc. In particular, it restricts the input format to .Rmd (Markdown with integrated R code chunks), uses knitr to produce an .md file, and finally uses Pandoc to convert the .md file to a .pdf, .tex, or .html file (other output formats are possible).

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