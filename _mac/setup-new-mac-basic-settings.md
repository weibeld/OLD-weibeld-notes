---
title:  "Setting Up a New Mac: Basic Settings"
author: Daniel Weibel
date:   December 2013
last_updated: 27 December 2023
---

This is a checklist for setting up and personalising a new Mac.

See [Setting Up a New Mac: Tools and Apps](setup-new-mac-tools-and-apps.html) for apps and tools to install on a new Mac.

> Last used for macOS Sonoma 14.2.1 on a MacBook Air M1 (2020).

# Install updates

1. Go to _**System Settings > General > Software Update**_ and install any system udpates
1. Go to _**App Store > Updates**_ and selecting _**Update All**_ and install any app updates

# Install Xcode Command Line Tools

Run the following command in a terminal and follow the dialog:

```bash
xcode-select --install
```

# Disable iCloud Drive

Go to _**System Settings > Apple ID**_ and under _**Apps Using iCloud**_, set _**iCloud Drive**_ to _**Off**_.

> This disables any confusing file dialogs and Finder entries.

# Customise gestures

1. Go to _**System Preferences > Trackpad**_
1. Under _**Point & Click**_, enable _**Tap to click**_
1. Under _**More Gestures**_, disable _**Notification Centre**_
1. Enable three-finger dragging of windows as follows:
  1. Go to _**System Preferences > Accessibility > Pointer Control > Trackpad Options...**_
  1. Enable _**Use trackpad for dragging**_
  1. Set _**Dragging style**_ to _**Three-Finger Drag**_

> **Note:** the Notification Centre can always be opened by clicking on the time and date in the menu bar.

# Customise menu bar

1. Go to _**System Preferences > Control Centre**_
1. Select which items to display in the menu bar
1. Enable displaying of battery percentage in menu bar by enabling _**Battery > Show Percentage**_
1. Rearrange items in the menu bar by holding _Command_ and dragging the items in the menu bar

# Customise Dock

1. Go to _**System Preferences > Desktop & Dock**_
1. Enable _**Automatically hide and show the Dock**_
1. Disable _**Show suggested and recent apps in Dock**_
1. Select which items to include in the Dock by dragging unwanted items to the Bin and dragging wanted apps and directories into the dock

# Disable unnecessary sounds

1. Disable the startup sound by going to _**System Settings > Sound**_ and disabling _**Play sound on startup**_.
1. Disable the power chime by executing the following:
   ```bash
   defaults write com.apple.PowerChime ChimeOnNoHardware -bool true
   ```
   > The power chime is a short sound that plays by default when connecting a charging cable.
1. Log out of macOS and log in again
   > This is necessary for the disabling of the power chime to take effect.

# Disable unnecessary automatic settings

1. Go to _**System Preferences**_
1. Under _**Desktop & Dock**_, disable _**Automatically rearrange Spaces based on most recent use**_
1. Under _**Displays**_, disable _**Automatically adjust brightness**_

# Enable snap-to-grid for Desktop icons

Right-click anywhere on the Desktop, click on _**Show View Options**_ and select _**Sort By > Snap to Grid**_.

# Disable floating screenshot thumbnails

1. Press _**Command-Shift-5**_
1. In the appearing user interface, click on _**Options**_ and disable _**Show Floating Thumbnail**_

> This ensures that screenshots are immediately saved to disk instead of being presented as a floating thumbnail for a few seconds.

# Customise Finder

1. Go to _**Finder > Settings...**_
1. Under _**Sidebar**_, select which items to display in the sidebar
1. Under _**General**_, set _**New Finder windows show:**_ to _**Desktop**_
1. Under _**Advanced**_, do the following:
   1. Enable _**Show all filename extensions**_
   1. Disable _**Show warning before changing an extension**_
   1. Set _**When performing a search:**_ to _**Search the Current Folder**_
1. Go to _**Finder > View**_ and enable _**Show Status Bar**_ and _**Show Path Bar**_
1. Include the `$HOME/Library` directory in Finder by executing the following:
   ```bash
   chflags nohidden ~/Library
   ```

# Customise TextEdit

1. Go to _**TextEdit > Settings...**_
1. Under the _**New Document**_ tab, do the following:
   1. Under _**Format**_, select _**Plain text**_
   1. Under _**Window Size_, set _**Width**_ to _**80**_
   1. Under _**Font**_, set _**Plain text font**_ to _**Menlo Regular 12**_
   1. Under _**Options**_, uncheck _all_ the check boxes
1. Under the _**Open and Save**_ tab, do the following:
   1. Under _**When Opening a File**_, do the following:
      1. Enable _**Display HTML files as HTMl code instead of formatted text**_
      1. Enable _**Display RTF files as RTF code instead of formatted text**_
   1. Under _**When Saving a File**_, disable _**Add ".txt" extension to plain text files**_


# Customise keyboard

1. Install the Logitech Swiss German keyboard layout by following the instructions [here (GitHub)](https://github.com/weibeld-personalisation/logitech-swiss-german-keyboard-layout).
1. Go to _**System Preferences > Keyboard > Keyboard Shortcuts... > Modifier Keys...**_, and do the following:
   1. Set _**Caps Lock**_ to _**Control**_
   1. Set _**Control**_ to _**Caps Lock**_
   1. Set _**Option**_ to _**Command**_
   1. Set _**Command**_ to _**Option**_
   > This swaps the functions of the _**Caps Lock**_ and _**Control**_, and _**Option**_ and _**Command**_ keys, respectively.
1. Go to _**System Preferences > Keyboard**_, and set _**Press 🌐 key to**_ to _**Do Nothing**_
   > This disables the globe functionality and makes the globe (🌐) key act like a normal _**fn**_ key, which is necessary for [Fluor](https://github.com/Pyroh/Fluor) (will be installed later). The input source can always be changed with _Control-Space_, even without the globe key.


# Install Homebrew and default Homebrew formulas

1. Install Homebrew by executing the following command (may also be copied from <https://brew.sh>):
   ```bash
   bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
1. Install the default Homebrew formulas from [weibeld-personalisation/brewfile](https://github.com/weibeld-personalisation/brewfile) by executing the following commands:
   ```bash
   curl https://raw.githubusercontent.com/weibeld-personalisation/brewfile/main/Brewfile >Brewfile
   /opt/homebrew/bin/brew bundle install --file Brewfile
   ```

> **Note:** on Macs with Intel chips, the path of the `brew` executable is `/usr/local/bin` instead of `/opt/homebrew/bin` (see [documentation](https://docs.brew.sh/FAQ#why-should-i-install-homebrew-in-the-default-location)).


# Set Bash as the default shell

To set the version of Bash installed by Homebrew as the default shell instead of the native Zsh, do the following (see more information in [Upgrading Bash on macOS](https://itnext.io/upgrading-bash-on-macos-7138bd1066ba)):

1. Execute the following commands:
   ```bash
   echo /opt/homebrew/bin/bash | sudo tee -a /etc/shells >/dev/null
   chsh -s /opt/homebrew/bin/bash
   sudo chsh -s /opt/homebrew/bin/bash
   ```
1. Close and reopen the terminal application and verify that the version of Bash installed by Homebrew is running:
   ```bash
   echo $SHELL
   ```

> **Note:** on Macs with Intel chips, the Homebrew base directory is `/usr/local` instead of `/opt/homebrew` (see [documentation](https://docs.brew.sh/FAQ#why-should-i-install-homebrew-in-the-default-location)), that is, the path to the Bash binary in that case is `/usr/local/bin/bash` instead of `/opt/homebrew/bin/bash`.


# Install custom dotfiles

```bash
curl -Lks http://bit.ly/get-my-dotfiles | bash
```

The [weibeld/dotfiles](https://github.com/weibeld/dotfiles) repository hosts a set of dotfiles (`~/.bashrc`, `~/.bash_profile`, etc.) with customisations for various tools. The above command downloads and installs these dotfiles. Detailed instructions can be found in [this gist](https://gist.github.com/weibeld/869f723063811e5088708a9386bf52bf).

# Customise iTerm2
> TODO: use Git Credential Manager (GCM): https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git?platform=mac
1. Go to _iTerm2 > Settings...> General > Preferences_
1. Check _Load preferences from a custom folder or URL_
1. Enter the following URL into the text field:
    ```
    https://raw.githubusercontent.com/weibeld/iterm2-settings/main/com.googlecode.iterm2.plist
    ```
1. Quit iTerm2 and restart it to apply the customised settings

The [weibeld/iterm2-settings](https://github.com/weibeld/iterm2-settings) repository hosts a complete customised iTerm2 configuration description.

# Set Up GitHub Credentials

> TODO: use Git Credential Manager (GCM): https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git?platform=mac

1. On GitHub, create a new personal access token
  - _Settings > Developer settings > Personal access tokens > Tokens (classic)_
1. Push a commit to any GitHub repository
  - In the appearing prompt, enter your username and the personal access token created above

After this initial authentication, the [`git-credential-osxkeychain`](https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain) helper saves the credentials in Keychain Access and automatically retrieves them whenever they are needed. 

# Configure Fluor

Start [Fluor](https://github.com/Pyroh/Fluor), click its icon in the menu bar, and set _Trigger_ to the rightmost option (key). This allows switching mode by simply pressing the _fn_ key.

If you have a globe (🌐) key hosted together with the _fn_ key, make sure to disable the globe key functionality, as explained in [Setting Up a New Mac: Basic Settings](setup-new-mac-basic-settings.html). Otherwise, the globe functionality may interfer with Fluor.

# Set Up Google Drive to Mirror Files

1. Click on _Google Drive_ in the menu bar, then _Preferences > Google Drive > Mirror files_
1. Create and select a folder in which to mirror the Google Drive files
  - This folder will directly contain the content of Google Drive, i.e. no additional top-level folder will be created
  - For example, create and select the folder `~/Desktop/Google Drive`

The above settings make sure that the entire content of Google Drive is downloaded to the local machine (in the specified folder) and kept in sync with the server side of Google Drive. By default, Google Drive uses the Streaming mode where files are only downloaded on demand, e.g. when they are opened on the local machine.

# Install AdBlock in Chrome

Go to <https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom>

# Set Chrome Download Location to Desktop

_Chrome > Settings > Downloads > Location > Change_





# Set Up eduroam

See instructions on Zoolz (TODO: move instructions here).
