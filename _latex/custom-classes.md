---
title:  Custom LaTeX Classes
author: Daniel Weibel
date:   7 May 2016
last_updated: 7 May 2016
---

Custom LaTeX classes that can be used in place of the default classes `article`, `report`, etc.

# How To Use Custom LaTeX Classes

Copy `myclass.cls` to same directory as `.tex` file. Then, in the `.tex` file, reference the class in the following way:

~~~latex
\documentclass{myclass}
~~~

# note.cls

A LaTeX class designed for simple notes (like those on this website).

An example document using this class can be found [here](assets/example-doc-note-cls.pdf), the corresponding LaTeX source [here](assets/example-doc-note-cls.tex).

{% gist 9a531a02045a79700f82c58871ddfa30 %}
