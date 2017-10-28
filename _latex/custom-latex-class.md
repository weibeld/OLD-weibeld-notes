---
title:  "Custom LaTeX Class: note.cls"
author: Daniel Weibel
date:   May 2016
last_updated: May 2016
---

A custom LaTeX class designed for simple notes (like those on this website). The style is inspired by the LaTeX template of [R Markdown](http://rmarkdown.rstudio.com/).

# Usage

Copy `note.cls` to same directory as `.tex` file, and include the class in the `.tex` file with:

~~~latex
\documentclass{note}
~~~

# note.cls

~~~latex
% LaTeX class for simple short (or long) notes.
%
% Usage: place .cls file in same directory as .tex file and reference class 
% in .tex file with: \documentclass{note}
%
% Daniel Weibel <danielmweibel@gmail.gom> May 2016
%------------------------------------------------------------------------------%

\LoadClass[a4paper]{article}

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{note}[2016/05/07 My custom class for short notes]

\RequirePackage[margin=1in]{geometry}
\RequirePackage[dvipsnames]{xcolor}
\RequirePackage[colorlinks=true,allcolors=blue]{hyperref}
\RequirePackage{titling}
\RequirePackage{enumitem}
\RequirePackage{parskip}
\RequirePackage{graphicx}

\setlist{nosep}
\urlstyle{same}
\renewcommand{\familydefault}{\sfdefault}

% Title formating (affected by package "parskip")
\setlength{\droptitle}{-50pt}
\pretitle{\begin{center}\huge}
\posttitle{\par\end{center}}
\preauthor{\begin{center}\vspace{0pt}\large\it}
\postauthor{\par\end{center}}
\predate{\begin{center}\vspace{-5pt}\large\it}
\postdate{\par\end{center}}
~~~
