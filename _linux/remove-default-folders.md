---
title:  Remove Default Folders in Home Directory
author: Daniel Weibel
date:   2 June 2016
last_updated: 2 June 2016
---

Most Linux distributions have a set of default folders, such as `Downloads`, `Documents`, `Music`, `Pictures`, etc., in the home directory.

If you just delete them, they will automatically reappear. Here is how to remove the permanently.

# 1. Edit `user-dirs` File

In the following file

~~~
~/.config/user-dirs.dirs
~~~

outcomment all the lines corresponding to the unwanted folders.

# 2. Update `user-dirs`

Execute:

~~~bash
xdg-user-dirs-udpdate
~~~

# 3. Delete the Folders

Delete the unwanted folders and all their content:

~~~bash
rm -rf ~/Documents ~/Downloads ~/Music  # etc.
~~~

Now they should never reappear again.

# References

- [Ubuntu Forums Thread](http://ubuntuforums.org/showthread.php?t=1851832&p=11295941#post11295941)
