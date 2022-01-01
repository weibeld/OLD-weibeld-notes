---
title:  Setting Up a New Mac
author: Daniel Weibel
date:   December 2013
last_updated: 1 January 2022
---

Settings, tweaks, and software that I find useful on a Mac. This can be used as a checklist when setting up a machine with a fresh macOS.

Last used for setting up Mac OS X El Capitan 10.11.1 on MacBook Air Model A1465.

# Check For macOS Updates

*App Store > Updates*

# Enable Tap To Click

*System Preferences > Trackpad > Tap to click*

# Enable Three-Finger Dragging Of Windows

*System Preferences > Accessibility > Mouse & Trackpad > Trackpad Options... > Enable dragging > three finger drag*

# Swap Alt/Cmd and Ctrl/Caps Lock keys

*System Preferences > Keyboard > Modifier Keys...*

# Hide Dock And Fixate Menu Bar

*Right-click on Dock > Turn Hiding On*

# Disable Auto Adjustment Of Screen Brightness

*System Preferences > Displays > Uncheck "Automatically adjust brightness"*

# Disable Automatic Rearrangement of Spaces (Desktops)

*System Preferences > Mission Control > Uncheck "Automatically rearrange Spaces based on most recent use"*

# Enable "Snap-To-Grid" For Desktop Icons

*Finder > View > Show View Options > Sort by > Snap to Grid*

# Allow Apps From Unidentified Developers

*System Preferences > Security & Privacy > General > Allow apps downloaded from: > 
Anywhere*

# Prevent Startup Sound

This mutes the volume just before logout, and restores the previous volume just after login. In this way, the startup chime is never played:

~~~bash
sudo defaults write com.apple.loginwindow LogoutHook "osascript -e 'set volume with output muted'"
sudo defaults write com.apple.loginwindow LoginHook "osascript -e 'set volume without output muted'"
~~~

Very recommended if you work in a library 🙉

# Customise Finder

## Preferences

In *Finder > Preferences...*, make the following changes:

- *General > New Finder windows show > Desktop*
- *Sidebar > Select the desired items*
- *Advanced > Check "Show all filename extensions"*
- *Advanced > Uncheck "Show warning before changing an extension"*
- *Advanced > When performing a search > Search the Current Folder*

## Show Status Bar and Path Bar:

- *View > Show Status Bar*
- *View > Show Path Bar*


## Show the `~/Library` Folder:

~~~bash
chflags nohidden ~/Library
~~~

# Customise TextEdit

In *TextEdit > Preferences...* make the following changes:

- *Format > Plain Text*
- *Width > 80 Characters*
- *Plain text font > Menlo Regular 12*
- *Options > Uncheck all!*


# Install Logitech Swiss German Keyboard Layout

See instructions [here](custom-keyboard-layout.html).


# Install Xcode Command Line Tools

Execute

~~~bash
gcc
~~~

In Order To Trigger A Dialog Prompting You To Install The *Xcode Command Line Tools*.

Verify installation with:

~~~bash
xcode-select p
~~~

If the output is

~~~
/Library/Developer/CommandLineTools
~~~

then the installation was successful.


# Install Homebrew

~~~bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
~~~

## Make Sure Homebrew is Fine

Run

~~~bash
brew doctor
~~~

and follow the instructions to remove all the warnings.


# Install Software with Homebrew

Save the following content as a file named `Brewfile` in any directory:

~~~
tap 'caskroom/cask'

brew 'git'
brew 'tmux'
brew 'r'
brew 'pandoc'
brew 'pandoc-citeproc'
brew 'imagemagick'
brew 'chruby'
brew 'ruby-install'

cask 'mactex'
cask 'java'
cask 'google-chrome'
cask 'firefox'
cask 'opera'
cask 'gimp'
cask 'vlc'
cask 'iterm2'
cask 'omnigraffle'
cask 'cyberduck'
~~~

Now, in the directory where the `Brewfile` is located, run:

~~~bash
brew bundle install
~~~

This installs all the applications listed in the `Brewfile` with Homebrew.

# Install an "Open Terminal Here" Tool for Finder

[*cd to*](https://github.com/jbtule/cdto) is a plugin for the Finder toolbar which allows to open a terminal window in the current directory.

- Download the latest release of *cd to* from [here](https://github.com/jbtule/cdto) (ZIP file).
- Unzip the file
- Copy the `cd to.app` file of the directory named after the desired terminal to the `/Applications` folder
    - For example, if you want to use **iTerm2**, use the file `iterm/cd to.app`
- From the `/Applications` folder, hold *Alt-Cmd* and drag the `cd to.app` file onto the toolbar of any Finder window

Now the plugin is installed.

# Last But Not Least: Install Your Dotfiles

This is probably where most of your customisations are.

My dotfiles are backed up here: <https://github.com/weibeld/dotfiles>
