---
title:  Installing Vim Plugins
author: Daniel Weibel
date:   20 January 2014
last_updated: 28 October 2017
---

# A Plugin To Make Installing Plugins Easy

Before making any attempt to install a vim plugin, install the [pathogen.vim](https://github.com/tpope/vim-pathogen) plugin according to the following instructions:

~~~bash
mkdir -p ~/.vim/autoload ~/.vim/bundle
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
~~~

Then, add the following to your `~/.vimrc`:

~~~vim
execute pathogen#infect()
~~~

Now *pathogen.vim* is installed and set up.

# Install Any Plugin

Installing any vim plugin is now as easy as in this example:

~~~bash
cd ~/.vim/bundle
git clone https://github.com/tpope/vim-sensible.git
~~~

That is, simply copy the plugin files to the `~/.vim/bundle` directory.

Most vim plugins are hosted on GitHub, so they can be installed with the above method with `git clone`. For installing plugins from other sources, for example, the [vim website](http://www.vim.org/scripts/), simply download the plugin files (unzip if necessary), and copy them to `~/.vim/bundle`.

