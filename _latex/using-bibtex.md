---
title:  Using BibTeX
author: Daniel Weibel
date:   4 July 2012
last_updated: 29 October 2017
---

# What is BibTeX?

BibTeX is an alternative to the following method of creating the bibliography of a document:

~~~latex
\begin{thebibliography}
  \bibitem{cite-key-1} Anritsu. \newblock Whitepaper: Understanding 5G, February 2016.
  \bibitem{cite-key-2} ...
\end{thebibliography}
~~~

## In Short

- With BibTeX, all references used in a document are stored in a separate file with the `.bib` extension, the BibTeX bibliography file.
- Each reference in this file has a cite key.
- The `.bib` file is linked to the LaTeX document.
- In the LaTeX document, citations are made as usual with `\cite{cite_key}`.
- By default, BibTeX includes only those items of the `.bib` file in the bibliography that were actually cited in the document.
- BibTeX support comes with standard LaTeX.

# How to Create a BibTeX Bibliography File

The bibliography items in a `.bib` file must be expressed in a certain syntax. However, the best way to create and maintain a `.bib` file is to use a BibTeX front-end application like [BibDesk](http://bibdesk.sourceforge.net/). In this way, there's no need to bother with the `.bib` file syntax.

# How to Use BibTeX

To create the bibliography of a document, add the following two lines at the position where the bibliography should be created:

~~~latex
\bibliographystyle{examplestyle}
\bibliography{examplebib}
~~~

The first line specifies the bibliography style file containig the styles for the individual bibliography items. This is a file with the extension `.bst`. In the above example, there must be a file called `examplestyle.bst` in the same directory as the `.tex` file (except the referenced style is one of the default styles that ships with the LaTeX distribution).

The second line specifies the `.bib` file containing the bibliography items, and creates the bibliography. In the above example, there must be a file named `examplebib.bib` in the same directory as the `.tex` file.

## Compiling a LaTeX document with a BibTeX bibliography

For creating the entire document properly, now the following sequence of runs is necessary:

~~~bash
pdflatex document
bibtex document
pdflatex document
pdflatex document
~~~

# How to Create a Custom BibTeX Style

There are a range of default style files like `plain.bst`. These styles can be used without the `.bst` file being in the same directory, just use e.g. `\bibliographystyle{plain}`.

To create a custom `.bst` file, there exists the utility `makebst`. To start it type:

~~~bash
latex makebst
~~~

This creates a `.dbj` file (or directly the `.bst` file if the appropriate option is selected). To create the `.bst` file from the `.dbj` file, type:

~~~bash
latex examplestyle.dbj
~~~

Some custom BibTeX styles that I created can be found [here](custom-bibtex-styles.html).
