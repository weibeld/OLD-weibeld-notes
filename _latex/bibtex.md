---
title:  BibTeX
author: Daniel Weibel
date:   4 July 2012
last_updated: 28 October 2017
---

# What is BibTeX?

BibTeX is an alternative to the following method of creating the bibliography of a document:

~~~latex
\begin{thebibliography}
  \bibitem
  \bibitem
\end{thebibliography}
~~~

## Summary

- With BibTeX, all references used in a document are stored in a separated file with the `.bib` extension.
- Each reference in this file has a cite key.
- The `.bib` file is linked to the LaTeX document.
- In the LaTeX document, citations are made as usual with `\cite{cite_key}`.
- BibTeX creates the bibliography exclusively from those references of the `.bib` file that were cited in the document.
- BibTeX comes with standard LaTeX.


# How to Use BibTeX

To create the bibliography of a document, add the following two lines at the position where the bibliography should be created:

~~~latex
\bibliographystyle{examplestyle}
\bibliography{examplebib}
~~~

The first line specifies the bibliography style file containig the styles for the individual bibliography items. This is a file with the extension `.bst`. In the above example, there must be a file called `examplestyle.bst` in the same directory as the LaTeX document file.

The second line specifies the `.bib` file containing the bibliography items, and creates the bibliography. In the above example, there must be a file named `examplebib.bib` in the same directory as the LaTeX document.

## Bibliography Styles

There are a range of default style files like `plain.bst`. These can be used without being in the same directory.

To create a custom `.bst` file, there exists the utility `makebst`. To start it type:

~~~bash
latex makebst
~~~

This creates a `.dbj` file (or directly the `.bst` file if the appropriate option is selected). To create the `.bst` file from the `.dbj` file, type:

~~~bash
latex examplestyle.dbj
~~~

## Compiling LaTeX with BibTeX

For creating the entire document properly, now the following sequence of runs is necessary:

~~~bash
pdflatex document
bibtex document
pdflatex document
pdflatex document
~~~
