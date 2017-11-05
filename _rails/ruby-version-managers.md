---
title: Ruby Version Managers
author: Daniel Weibel
date: 12 June 2017
last_updated: 12 June 2017
---

# Why A Version Manager?

In Ruby it's often necessary to use a very specific version of the Ruby interpreter. Otherwise, there might be problems, because certain gems work only correctly with certain versions of the Ruby interpreter, etc.

Typically, each Ruby project requires a very specific version of the Ruby interpreter, and thus it is necessary to have all these Ruby interpreters installed on your system, and you have to use the correct version for each project.

Ruby version managers like `rvm`, `rbenv`, and `chruby` make this task of installing and switching between Ruby interpreter versions easier.

Only one Ruby version manager should be installed at a time on a system. Otherwise, the different version managers would interfer with each other.

# Using chruby

`chruby` seems to be a more lightweight and nicer alternative to `rvm` and `rbenv`.

To use it, first of all, uninstall everything related to `rvm` and `rbenv`

Then install `chruby` and `ruby-install`:

~~~bash
brew install chruby
brew install ruby-install
~~~

- `ruby-install` is for the installation of Ruby interpreter versions
- `chruby` is for switching between Ruby interpreter versions
