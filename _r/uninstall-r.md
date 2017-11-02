---
title:	Uninstall R on Mac
author: Daniel Weibel
date: 	5 March 2015
last_updated: 5 March 2015
---

In order to upgrade R to a new version, it's best to first uninstall the old version of R, and then install the new version.

Here is how to completely uninstall R on Mac, if R has been installed from the [R website](https://www.r-project.org/):

~~~bash
rm -rf /Applications/R.app
sudo rm -rf /Library/Frameworks/R.framework
sudo rm /usr/bin/{R,Rscript}
~~~

Note that user-installed packages from the old version will be lost and have to be reinstalled in the new version.
