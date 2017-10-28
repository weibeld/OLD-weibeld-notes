---
title:  Vim Color Schemes
author: Daniel Weibel
date:   April 2017
---

# Installing a Color Scheme

Simply copy the `.vim` file containing the color scheme into `~/.vim/colors`.

# Enabling a Color Scheme

~~~
:colorscheme molokai
~~~

Or shorter;

~~~
:colo molokai
~~~

# Finding Out Current Color Scheme

~~~
:colo
~~~

# Vim Default Color Schemes

Look for a `colors` folder under the Vim installation directory.

For example:

~~~
/usr/share/vim/vim73/colors
~~~

Or, if Vim has been installed with Homebrew:

~~~
/usr/local/Cellar/vim/8.0.0430/share/vim/vim80/colors
~~~

This folder contains all the default color schemes that can be set with `:colo`, for example, `:colo slate`.
