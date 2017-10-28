---
title:  Installing LaTeX Classes and Packages
author: Daniel Weibel
date:   5 August 2014
last_updated: 5 August 2014
---

1. Download the package from CTAN
2. If there is a `.sty` (package) or `.cls` (class) file, go to Step 4
3. If there is no `.sty` or `.cls` file, but a `.dtx` and `.ins` file, run:

    ~~~bash
    latex file.ins
    ~~~

    This creates the `.sty` or `.cls` file.

    For creating the documentation in PDF format, run:

    ~~~bash
    pdflatex file.dtx
    ~~~

4. Locate the local installation directory tree in your TeX directory structure
    - On Mac, this might be one of the following:

        ~~~
        /usr/local/texlive/texmf-local
        /Users/username/Library/texmf
        ~~~

5. Install the package or class
    - If installing a class, move the `.cls` file to the following directory under the local TeX installation tree (create folder `base` if it doesn't exist):

        ~~~
        tex/latex/base
        ~~~

    - If installing a package, move the `.sty` file to the following directory under the local TeX installation tree (the folder `package_name` has to be created and named equal to the package):

        ~~~
        tex/latex/package_name
        ~~~

    - In any case make sure to install the files under the local installation dir tree, where the user-added packages are, and not under the distribution installation dir tree, where the pre-installed packages of the distribution are. In this way, the new packages don't overwrite existing ones, and if the TeX distribution is updated, the new packages persist.

6. Run:

    ~~~bash
    sudo texhash
    ~~~
