---
title:  Setting Up a New Mac
author: Daniel Weibel
date:   December 2013
last_updated: 28 December 2015
---

A checklist of things to do after factory-resetting a Mac (or setting up a new Mac).

Last used for setting up Mac OS X El Capitan 10.11.1 on MacBook Air Model A1465.


# Enable tap to click

*System Preferences > Trackpad > Tap to click*


# Enable three-finger dragging of windows

*System Preferences > Accessibility > Mouse & Trackpad (list on left) > Trackpad Options... > Check "Enable dragging" > Choose "three finger drag"*


# Switch Alt/Cmd and Ctrl/Caps Lock keys

*System Preferences > Keyboard > Modifier Keys...*


# Hide dock and fixate menu bar

*Right click on dock > Turn Hiding On*


# Disable auto adjustment of screen brightness

*System Preferences > Displays > Uncheck "Automatically adjust brightness"*


# Enable "snap-to-grid" for desktop icons

*Finder > View > Show View Options > Sort by > Select "Snap to Grid"*

# Install Logitech Swiss German keyboard layout

See instructions [here](custom-keyboard-layout.html).

# Customise Finder

- Finder preferences:
  - General:  New Finder windows show: Desktop
  - Sidebar:  Select desired items
  - Advanced:
      - Check "Show all filename extensions"
      - Uncheck "Show warning before changing an extension"
      - When performing a search: Search the Current Folder
- View > Show Status Bar


# Customise TextEdit

- TextEdit Preferences:
  - Format:  Plain Text
  - Width:   80
  - Font:    Menlo Regular 12
  - Options: Uncheck all


# Customise Terminal

- Terminal Preferences:
    - Profiles
        - Text
            - Background: black
            - Font: Menlo Regular 14 pt.
            - Text:
                - Text:      white
                - Bold Text: white
                - Selection: tab with colour names > "Crayons" > set "Nickel"
            - Cursor: Vertical Bar, white
        - Advanced
            - Uncheck "Audible bell"
- Alternatively, import file Basic.terminal, stored on Amazon S3


# Install OS X updates

App Store > Updates


# Install previously purchased apps

App Store > Purchased


# Allow apps from unidentified developers

System Preferences > Security & Privacy > General > Allow apps downloaded from:
Anywhere


# Install Xcode Command Line Tools

- Execute "$ gcc"
- In the dialog that appears, click "Install"
- Verify installation of the Command Line Tools with "$ xcode-select -p"
    - If output is /Library/Developer/CommandLineTools, then OK


# Install and set up Homebrew

- Find command for installing on http://brew.sh/
- Install
- Run "$ brew doctor", and follow instructions to remove all the warnings


# Install Git

- $ brew install git


# Install dotfiles

- $ git clone https://github.com/weibeld/dotfiles.git
- Create links to dotfiles in repository by sourcing the "_link" files in the
  different directories of the repository


# Install tmux and tmuxinator

- $ brew install tmux
- $ sudo gem install tmuxinator


# Prevent startup sound

- Make sure scripts "mute_on" and "mute_off" are in /Users/dw/bin
- $ sudo defaults write com.apple.loginwindow LogoutHook /Users/dw/bin/mute_on
- $ sudo defaults write com.apple.loginwindow LoginHook  /Users/dw/bin/mute_off


# Install R

Download and install from http://stat.ethz.ch/CRAN/


# Install Pandoc and pandoc-citeproc

$ brew install pandoc
$ brew install pandoc-citeproc


# Install MacTeX

Download and install from https://tug.org/mactex/


# Install and set up BibDesk

- Download and install from http://bibdesk.sourceforge.net/
- Deploy scripts in scripts.zip on Amazon S3 according to instructions


# Install VPN client from UNIFR

- Find by googling "unifr vpn"
- Server: vpn.unifr.ch


# Set up Logitech R700 presenter for Preview

1. Download and install KeyRemap4MacBook from https://pqrs.org/macosx/keyremap4macbook/
2. Open the application
3. Go to tab 'Misc & Uninstall'
4. Click 'Open private.xml'
5. Replace the content of private.xml with the following:
<?xml version="1.0"?>
<root>
	<appdef>
		<appname>PREVIEW</appname>
	<equal>com.apple.iWork.Preview</equal>
	</appdef>
	<devicevendordef>
		<vendorname>LOGITECH</vendorname>
		<vendorid>0x046d</vendorid>
	</devicevendordef>
	<deviceproductdef>
		<productname>Rx00</productname>
		<productid>0xc52d</productid>
	</deviceproductdef>
	<item>
		<name>Logitech Presenter with Preview</name>
		<identifier>private.app_preview_logitech_presenter</identifier>
		<only>PREVIEW</only>
		<device_only>DeviceVendor::LOGITECH, DeviceProduct::Rx00</device_only>
		<autogen>
			--KeyToKey-- KeyCode::PAGEDOWN, KeyCode::CURSOR_RIGHT
		</autogen>
		<autogen>
			--KeyToKey-- KeyCode::PAGEUP, KeyCode::CURSOR_LEFT
		</autogen>
		<autogen>
			--KeyToKey-- KeyCode::F5, KeyCode::F, ModifierFlag::COMMAND_L | ModifierFlag::SHIFT_L
		</autogen>
	</item>
</root>
6. Go to tab 'Change Key'
7. Click 'Reload XML'
8. Add a tick in the newly appearing 'Logitech Presenter with Preview'
9. Close KeyRemap4MacBook
10. Plug in the Logitech R700 stick
11. Close a probably appearing Keyboard Setup Assistant dialog
12. Now, the R700 works for controlling Preview slideshows
This modified the functions of the R700 buttons so that they work with Preview:
R700 button	Default function	New function
----------------------------------------------------
Next		Page down		Cursor right
Previous	Page up			Cursor left
Start		F5			Cmd+Shift+F
http://prezentation.ch/2012/08/logitech-presenter-r400-und-r800-mit-keynote/


# Futher software to install (directly from the respective websites)

- VLC player
- uTorrent
- LibreOffice
- Java SDK
- Printer driver
- Sublime Text
- Caffeine
- Android File Transfer
- Dropbox
- Skype (skype name: dw.unige)


# Make a Time Machine backup of the freshly customised Mac

- Connect an external HD
- Erase it: Applications > Utilities > Disk Utility > select second, indented line of HD > Erase > Format: Mac OS Extended (Case-sensitive, Journaled) or Mac OS Extended (Case-sensitive)
- System Preferences > Time Machine > Select Disk...
- The backup will now be made automatically on the HD

