---
title:  "Setting Up a New Mac: Apps and Tools"
author: Daniel Weibel
date:   19 May 2023
last_updated: 19 May 2023
---

This is a checklist for basic apps and tools to install on a new Mac.

See [Setting Up a New Mac: Basic Settings](setup-new-mac-basic-settings.html) for initial actions and settings on a new Mac.

> Last used for setting up macOS Ventura 13.4 on MacBook Pro (model A2779).

# Install Homebrew

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> See [Homebrew homepage](https://brew.sh/).

# Install Tools and Apps from Brewfile

```bash
wget https://raw.githubusercontent.com/weibeld/brewfile/main/Brewfile
brew bundle install --file Brewfile
```

> The [weibeld/brewfile](https://github.com/weibeld/brewfile) repository hosts a [Brewfile](https://thoughtbot.com/blog/brewfile-a-gemfile-but-for-homebrew) with a foundational set of tools and apps to be installed on a new Mac. The above command retrieves this Brewfile and installs its content.

# Install Dotfiles

```bash
curl -Lks http://bit.ly/get-my-dotfiles | bash
```

> The [weibeld/dotfiles](https://github.com/weibeld/dotfiles) repository hosts a set of dotfiles (including `~/.bashrc`, `~/.bash_profile`, etc.) with customisations for various tools. The above command downloads and installs these dotfiles. Detailed instructions can be found in [this gist](https://gist.github.com/weibeld/869f723063811e5088708a9386bf52bf).

# Set iTerm2 to Sane Defaults

1. Go to _iTerm2 > Preferences...> General > Preferences_
1. Check _Load preferences from a custom folder or URL_
1. Enter the following URL into the text field:
    ```
    https://raw.githubusercontent.com/weibeld/iterm2-settings/main/com.googlecode.iterm2.plist
    ```

# Set Bash as the Default Shell

See https://medium.com/itnext/upgrading-bash-on-macos-7138bd1066ba

# Set Chrome as the Default Browser

# Configure Fluor

Can be installed with Homebrew. See:

- https://github.com/Pyroh/Fluor
- https://medium.com/p/31d102feac4b#56d6



# Optional: Install an "Open Terminal Here" Tool for Finder

[*cd to*](https://github.com/jbtule/cdto) is a plugin for the Finder toolbar which allows to open a terminal window in the current directory.

- Download the latest release of *cd to* from [here](https://github.com/jbtule/cdto) (ZIP file).
- Unzip the file
- Copy the `cd to.app` file of the directory named after the desired terminal to the `/Applications` folder
    - For example, if you want to use **iTerm2**, use the file `iterm/cd to.app`
- From the `/Applications` folder, hold *Alt-Cmd* and drag the `cd to.app` file onto the toolbar of any Finder window

Now the plugin is installed.
