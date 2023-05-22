---
title:  "Setting Up a New Mac: Tools and Apps"
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

See [Homebrew homepage](https://brew.sh/). Also add the `brew` command to the `PATH` as explained in the output of above command.

# Install Tools and Apps from Brewfile

```bash
curl https://raw.githubusercontent.com/weibeld/brewfile/main/Brewfile >Brewfile
brew bundle install --file Brewfile
```

The [weibeld/brewfile](https://github.com/weibeld/brewfile) repository hosts a [Brewfile](https://thoughtbot.com/blog/brewfile-a-gemfile-but-for-homebrew) with a foundational set of tools and apps to be installed on a new Mac. The above command retrieves this Brewfile and installs its content.

# Set Bash as the Default Shell

The following sets the Homebrew Bash version as the default shell:

```bash
sudo sh -c "echo $(brew --prefix)/bin/bash >>/etc/shells"
chsh -s $(brew --prefix)/bin/bash
sudo chsh -s $(brew --prefix)/bin/bash
```

The first command above adds the shell to the list of shells that may be used as login shells. The second and third commands set the shell as the default shell for the current user and root, respectively. Further details can be found in the [Upgrading Bash on macOS](https://itnext.io/upgrading-bash-on-macos-7138bd1066ba#a9cc) article on Medium.

Note that the Homebrew base directory varies depending on whether macOS runs on Intel or Apple chips (see [here](https://docs.brew.sh/FAQ#why-should-i-install-homebrew-in-the-default-location)):

- Intel chips: `/usr/local`
- Apple chips: `/opt/homebrew`

The Homebrew base directory can always be queried with `brew --prefix`.

After doing all of the above, close the current terminal window and open a new one in order to use Bash as the default shell.

# Install Dotfiles

```bash
curl -Lks http://bit.ly/get-my-dotfiles | bash
```

The [weibeld/dotfiles](https://github.com/weibeld/dotfiles) repository hosts a set of dotfiles (`~/.bashrc`, `~/.bash_profile`, etc.) with customisations for various tools. The above command downloads and installs these dotfiles. Detailed instructions can be found in [this gist](https://gist.github.com/weibeld/869f723063811e5088708a9386bf52bf).

# Customise iTerm2

1. Go to _iTerm2 > Settings...> General > Preferences_
1. Check _Load preferences from a custom folder or URL_
1. Enter the following URL into the text field:
    ```
    https://raw.githubusercontent.com/weibeld/iterm2-settings/main/com.googlecode.iterm2.plist
    ```
1. Quit iTerm2 and restart it to apply the customised settings

The [weibeld/iterm2-settings](https://github.com/weibeld/iterm2-settings) repository hosts a complete customised iTerm2 configuration description.

# Set Up GitHub Credentials

1. On GitHub, create a new personal access token
  - _Settings > Developer settings > Personal access tokens > Tokens (classic)_
1. Push a commit to any GitHub repository
  - In the appearing prompt, enter your username and the personal access token created above

After this initial authentication, the [`git-credential-osxkeychain`](https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain) helper saves the credentials in Keychain Access and automatically retrieves them whenever they are needed. 

# Configure Google Drive to Use Mirroring Instead of Streaming

1. Click on _Google Drive_ in the menu bar, then _Preferences > Google Drive > Mirror files_
1. Create and select a folder in which to mirror the Google Drive files
  - This folder will directly contain the content of Google Drive, i.e. no additional top-level folder will be created
  - For example, create and select the folder `~/Desktop/Google Drive`

The above settings make sure that the entire content of Google Drive is downloaded to the local machine (in the specified folder) and kept in sync with the server side of Google Drive. By default, Google Drive uses the Streaming mode where files are only downloaded on demand, e.g. when they are opened on the local machine.

# Configure Fluor

Start [Fluor](https://github.com/Pyroh/Fluor), click its icon in the menu bar, and set _Trigger_ to the rightmost option (key). This allows switching mode by simply pressing the _fn_ key.

If you have a globe (🌐) key hosted together with the _fn_ key, make sure to disable the globe key functionality, as explained in [Setting Up a New Mac: Basic Settings](setup-new-mac-basic-settings.html). Otherwise, the globe functionality may interfer with Fluor.
