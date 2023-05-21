---
title:  "Setting Up a New Mac: Basic Settings"
author: Daniel Weibel
date:   December 2013
last_updated: 19 May 2023
---

This is a checklist for initial actions and setting on a new Mac.

See [Setting Up a New Mac: Apps and Tools](setup-new-mac-apps-and-tools.html) for apps and tools to install on a new Mac.

> Last used for setting up macOS Ventura 13.4 on MacBook Pro (model A2779).

# Install System Updates

_Apple > System Settings..._

# Install App Updates

_Apple > App Store..._

# Install Logitech Swiss German Keyboard Layout

See instructions [here](custom-keyboard-layout.html).

# Enable Tap To Click

_System Preferences > Trackpad > Tap to click_

# Enable Three-Finger Dragging Of Windows

_System Preferences > Accessibility > Pointer Control > Trackpad Options... > Enable dragging > three finger drag_

# Swap Alt/Cmd and Ctrl/Caps Lock keys

_System Preferences > Keyboard > Keyboard Shortcuts... > Modifier Keys..._

# Disable Globe Key Functionality

_System Preferences > Keyboard > Press 🌐 key to > Do Nothing_

The globe (🌐) key is hosted together with the _fn_ key on newer models of macOS machines. The above setting disables the globe functionality and makes the key behave like a normal _fn_ key.

# Show/Hide Icons in Menu Bar

_System Preferences > Control Centre_

# Show Percentage for Battery Icon in Menu Bar

_System Preferences > Control Centre > Battery > Show Percentage_

# Enable Hiding of Dock

_Right-click on Dock > Turn Hiding On_

# Add Applications Folder to Dock

Drag the `/Applications` folder from Finder into the Dock.

# Disable Auto Adjustment Of Screen Brightness

_System Preferences > Displays > Automatically adjust brightness_

# Disable Automatic Rearrangement of Desktops

_System Preferences > Desktop & Dock > Mission Control > Automatically rearrange Spaces based on most recent use_

# Enable "Snap-To-Grid" For Desktop Icons

_Right-Click on Desktop > Show View Options > Sort By > Snap to Grid_

# Disable Startup Sound

For macOS BigSur 11 and later:

_System Settings > Sound > Play sound on startup_

For older versions of macOS:

```bash
sudo defaults write com.apple.loginwindow LogoutHook "osascript -e 'set volume with output muted'"
sudo defaults write com.apple.loginwindow LoginHook "osascript -e 'set volume without output muted'"
```

The above mutes the system volume at logout, and restores the previous volume at login. In this way, the startup sound is never played.

# Set Up eduroam

See instructions on Zoolz (TODO: move instructions here).

# Set Sane Defaults for Finder

## Customise Sidebar Items

_Finder > Settings... > Sidebar_

## Open Desktop in New Finder Windows

_Finder > Settings... > General > New Finder windows show > Desktop_

## Show All Filename Extensions

_Finder > Settings... > Advanced > Show all filename extensions_

## Disable Warnings When Changing Filename Extensions

_Finder > Settings... > Advanced > Show warning before changing an extension_

## Restrict Search on Current Folder

_Finder > Settings... > Advanced > When performing a search > Search the Current Folder_

## Show Status Bar and Path Bar:

_Finder > View > Show Status Bar\Show Path Bar_

## Show the `~/Library` Folder:

```bash
chflags nohidden ~/Library
```

# Set Sane Defaults for TextEdit

## Use Plain Text Mode

_TextEdit > Settings... > Format > Plain Text_

## Set Width to 80 Characters

_TextEdit > Settings... > Width > 80 Characters_

## Set Font to Menlo 12pt

_TextEdit > Settings... > Plain text font > Menlo Regular 12_

## Disable All Options

_TextEdit > Settings... > Options_

# Install the Command Line Developer Tools

Trigger a dialog prompting you install the command line developer tools by running a command that relies on them, for example:

```bash
gcc
```

Verify the installation with:

```bash
xcode-select -p
```
