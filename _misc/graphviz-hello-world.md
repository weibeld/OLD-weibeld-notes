---
title:  Graphviz Hello World
author: Daniel Weibel
date:   14 March 2014
last_updated: 14 March 2014
---

A small [Graphviz](http://www.graphviz.org/) file demonstrating the basic Graphviz syntax and compilation workflow.

Graphviz is a collection of command line tools for automatically laying out and rendering graphs specified in the [DOT language](http://www.graphviz.org/content/dot-language).

{% gist 1b8d88256c4f204c1a11fcdf4c5e5286 graphviz.dot %}

Compiling the above `.dot` file with

~~~bash
dot -Tpdf graphviz.dot >graphviz.pdf
~~~

produces the following PDF file:

{% gist 1b8d88256c4f204c1a11fcdf4c5e5286 graphviz.pdf %}
