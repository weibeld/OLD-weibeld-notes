---
title:  Pandoc Markdown Code Blocks in LaTeX
author: Daniel Weibel
date:   6 March 2015
last_updated:   6 March 2015
---


How pandoc converts markdown code blocks to LaTeX code. Described here is the behaviour with the default LaTeX template default.latex (`pandoc -D latex`).


Variant 1 (default): code blocks as verbatim or special environment
===================================================================

Example command: `pandoc input.txt -t latex`
--------------------------------------------

Input markdown:

````
```
Code block
```
````

Output LaTeX:

```latex
\begin{verbatim}
Code block
\end{verbatim}
```

***


Input markdown:

````
```bash
Code block
```
````

Output LaTeX:

```latex
\begin{Shaded}
\begin{Highlighting}[]
Code block (annotated with \KeywordTok{}, \NormalTok{}, etc.)
\end{Highlighting}
\end{Shaded}
```

**Note:**
Styles of `\KeywordTok{}`, `\NormalTok{}`, etc. and if there is a box drawn around the code block is defined by the value of pandoc option  `--highlight-style`.

Styles with box: `espresso`, `zenburn`, `tango`

Styles without box: `pygments`, `kate`, `monochrome`, `haddock`


Variant 2: code blocks with the `listings` package
==================================================

Example command: `pandoc input.txt -t latex --listings`
-------------------------------------------------------

Input markdown:

````
```
Code block
```
````

Output LaTeX:

```latex
\begin{lstlisting}
Code block
\end{lstlisting}
```

***

Input markdown:

````
```bash
Code block
```
````

Output LaTeX:

```latex
\begin{lstlisting}[language=bash]
Code block
\end{lstlisting}
```

**Note:**

Appearance of code block depends on setting in `\lstset{}` that can be added to the LaTeX template.
