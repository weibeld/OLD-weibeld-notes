---
title:  Configure the Keyboard Layout
author: Daniel Weibel
date:   8 June 2016
last_updated: 8 June 2016
---

For configuring the keyboard on Linux the tool `setxkbmap` can be used. Files with information about this tool can be found in `/usr/share/X11/xkb`.

All keyboard layouts and options are listed in `/usr/share/X11/xkb/rules/base.lst`.


Change Keyboard Layout
======================

For example, change layout to Swiss German.

~~~bash
setxkbmap 'ch(de)'
~~~


Set Multiple Keyboard Layouts
=======================================================

For example, Swiss German and German.

~~~bash
setxkbmap 'ch(de),de'
~~~

The first layout in the list will be activated by default.


Define Shortcut For Switching Between Keyboard Layouts
====================================================

For example, *Alt-Shift*.

~~~bash
setxkbmap -option 'grp:lalt_lshift_toggle'
~~~


Swap "Caps Lock" and "Ctrl" Keys
================================

~~~bash
setxkbmap -option 'ctrl:swapcaps'
~~~

Note: the light on the *Caps-Lock* key might still be activated by the old *Caps-Lock* key (which now has the *Ctrl* function).


Notes
=====

- The settings made by `setxkbmap` don't persists across logins.
- Putting the `setxkbmap` commands in the `~/.bashrc` or `~/.bash_profile` to make the settings persistent might cause an X error (*cannot open display "default display"*)
- Another option to make the settings persistent would be to put the commands in `~/.xinitrc`, or in another syntax in `/etc/X11/xorg.conf.d/00-keyboard.conf`. However, this doesn't work in a consistent and reliable way, because different desktop environments (e.g. Xfce, KDE, GNOME) read these files in different ways on startup.
- A workaround is to put the `setxkbmap` in a function in `~/.bashrc` and to call this function manually.


References
==========

- <http://betabug.ch/blogs/ch-athens/1242>
- <https://wiki.archlinux.org/index.php/Keyboard_configuration_in_Xorg>
