---
title:  Matlab Cheatsheet
author: Daniel Weibel
date:   23 July 2016
last_updated: 27 July 2016
---

# Table of Contents

1. TOC
{:toc}

Version
=======

Display the verion of Matlab and the installed toolboxes.

~~~matlab
ver
~~~


Exit Matlab
===========

~~~matlab
exit
~~~


Directory tree navigation
=========================

~~~matlab
pwd
cd <path>
ls
delete <file>
mkdir <dir>
rmdir <dir>
~~~

Search path
===========

The search path is a set of directories which are searched for script and function files to run.

Display path:

~~~matlab
path
~~~

Add a new entry to beginning or end of the search path (this does not persist across Matlab sessions):

~~~matlab
path('/new/path/entry', path)
path(path, '/new/path/entry')
~~~


Files
=====

Matlab has two types of files that can be executed:

- Script files
- Function files

Script files simply contain a series of Matlab commands. Function files contain a single function.

Both files have the extension `.m`.


Run script file
===============

Assume script file `/Users/dw/test.m`, and directory `/Users/dw` is in path (note that the file extension `.m` *must* be omitted):

~~~matlab
test
~~~

If the directory containing the script file (`/Users/dw`) is not in the path, then the script can be executed with `run` (the file extension `.m` is optional):

~~~matlab
run /Users/dw/test
run /Users/dw/test.m
~~~


Run function file
=================

- Each function file can contain only a single accessible function
- The function name should match the filename (however, it's the filename that counts)

Assume file `test.m` containing function `y = test(x)`, and being in the search path:

~~~matlab
test(4)
~~~

A function file must be in the search path in order to be executable.

Note that the name specified on the command line for executing a function is actually the filename. Matlab then executes the first function found in this file, even if the function has a different name. For example, if the function contained in `test.m` is called `foo`, then calling `foo(4)` does not work, but calling `test(4)` executes the function `foo`.


Help
====

Display a help message about a function or script extracted from the comments of the corresponding file (works also with operators and toolboxes):

~~~matlab
help <name>
~~~

Wha `help` displays is:

- For function files: the first block of contiguous comments before or after the `function` statement
- For script files: the first block of contiguous comments in the file


Documentation
=============

Open the documentation of a function or class in an external help browser. The documentation in the help browser is identical to the Web documentation on <http://www.mathworks.com/help/>. It is usually more comprehensive than the corresponding `help` texts.

~~~matlab
doc <name>
~~~


Get locations of files
======================

Find out the absolute paths of function and script files.

~~~matlab
which <name>
~~~


Open file in a text editor
==========================

Open a file in a text editor.

~~~matlab
edit <name>
~~~

The text editor to use can be defined in *MATLAB > Preferences > Editor/Debugger > Editor*.


Install a new toolbox
=====================

1. Get the Matlab Installer
    - <https://www.mathworks.com/downloads/>
    - Log in with MathWorks account
    - Download either the "latest release" (e.g R2016a) or another release that matches the currently installed Matlab version. Note that this downloads only the installer, not the actual Matlab program.
2. Start the installer, log in, and click through until the window with the list of available Matlab products
3. Select desired toolboxes and install


Install a new Matlab version
============================

Same procedure as intalling a new toolbox, just select *MATLAB* as the product to install.

If the new version belongs to a new release (e.g. R2016a instead of R2015b), then a new `MATLAB_R2016a.app` is created in `/Applications`. The old installed Matlab release (e.g. `/Applications/MATLAB_R2015b.app`) is not affected.

All the Matlab releases in `/Applications` can be used independently from each other. Similarly, the toolboxes are installed independently to any of these releases.

Note: the executable for starting Matlab is `/Applications/MATLAB_R2016a.app/bin/matlab`.
