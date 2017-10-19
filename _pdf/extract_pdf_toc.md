---
title:  Extract Table of Contents from a PDF File
author: Daniel Weibel
date:   29 June 2016
last_updated: 29 June 2016
---


Variant 1: With PDFMiner
========================

This Python-based variant extracts the table of contents in a (pseudo) XML format.

Requires Python $\geq$ 2.6, but < 3.0.

Install PDFMiner
----------------

- Download source code from <https://pypi.python.org/pypi/pdfminer/>
    - The project is also on GitHub <https://github.com/euske/pdfminer/>
- Compile and install:

    ~~~bash
    tar xzf pdfminer-20140328.tar.gz && cd pdfminer-20140328
    python setup.py install
    ~~~

Now there should be the executables `/usr/local/bin/pdf2txt.py` and `/usr/local/bin/dumppdf.py`.

Extract table of contents as (pseudo) XML
-----------------------------------------

~~~bash
dumppdf.py -T myfile.pdf
~~~


Variant 2: With MuPDF
=====================

This variant extracts the table of contents in plain text format.

Install MuPDF
-------------

- Download source code from <http://mupdf.com/downloads/>
- Compile and install:

    ~~~bash
    tar xzf mupdf-1.9a-source.tar.gz && cd mupdf-1.9a-source
    export XCFLAGS=-I/opt/X11/include/X11
    make prefix=/usr/local HAVE_GLFW=no install
    ~~~

    Notes: *(1)* Line 2 indicates to `make` that the X11 header files are in `/opt/X11/include/X11` rather than the default `/usr/local/include/X11`, this is necessary on Mac OS X, *(2)* The `HAVE_GLFW=no` option prevents building the OpenGL version of MuPDF (`mupdf-gl`), only the X11 version (`mupdf-x11`) is built. This is to prevent further installation problems.

Now, there should be the executables `/usr/local/bin/mupdf-x11` (PDF viewer) and `/usr/local/bin/mutool`.

Extract table of contents as plain text
---------------------------------------

~~~bash
mutool show myfile.pdf outline
~~~

Note: subsections are indented by tabs, and page numbers are separated by tabs as well.
