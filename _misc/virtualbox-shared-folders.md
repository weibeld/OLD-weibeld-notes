---
title:  VirtualBox Shared Folders
author: Daniel Weibel
date:   26 August 2014
last_updated: 26 August 2014
---

How to create a shared folder between the host operating system and the guest operating system.

# Mac OS X Host

First, create the folder to be shared on the host OS, for example, `/Users/dw/virtualbox-share`.

## Debian Guest

1. Start Debian in VirtualBox
2. VirtualBox menu: *Devices > Shared Folder Settings...*
3. Add the folder created on Mac, select *Make permanent*
4. Create a folder on Debian, e.g. `/home/dw/Desktop/host`
5. Append the following to `/etc/fstab` on Debian (get the values for `gid` and `uid` from the `id` command):
    ~~~
    debian  /home/dw/Desktop/host vboxsf umask=0022,gid=1000,uid=1000
    ~~~
6. Restart Debian


## Windows Guest

1. Start Windows in VirtualBox
2. VirtualBox menu: *Devices > Shared Folder Settings...*
3. Add the folder created on Mac, select *Auto mount*, select *Make permanent*
4. In the Windows Explorer, go to *Network > VBOXSVR > \\VBOXSVR\windows*
5. Right-click on *\\VBOXSVR\windows* and select *Map network drive...*
6. Choose a drive letter and add a shortcut on the desktop

