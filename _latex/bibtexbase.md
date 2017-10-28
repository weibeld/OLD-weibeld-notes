---
title:  "Project Idea: BibTeXBase"
author: Daniel Weibel
date:   1 February 2014
---

**BibTeXBase:** a BibTeX front-end in Python for Mac

# Features

- Recursive groups
- Easy drag and drop of items between groups
- Drag groups in a certain order
- Creation of meaningful cite keys
- Fixing Springer's bug of missing cite key
- Automatic title capitalisation (python package 'titlecase')
- Incremental search in BibTeX file
- Copy cite commands as `\cite{A,B,C}` or `\cite{A}, \cite{B}, \cite{C}`
- Annotations: add as blocks; date automatically printed at beginning of block; blocks can be added, modified, and deleted
- Tracking of attached files so that these files can be moved on disk but the reference in BibBase still holds (how to do this?)
- Create copy of BibTeX file (1) as is; ((2) as is but without annotations); (3) as pure BibTeX file
- Addition of item: (1) drag and drop; (2) copy paste of BibTeX entry; (3) entry form; (4) automatic reading of .txt and .bib files from a specified folder and linking them with similarly-named .pdf files.

# Info

- Bridge from python to the Objective C Cocoa GUI framework: pyobjc
- Building standalone Mac application at the end: py2app
