---
title:  Install an SSH Server on Linux
author: Daniel Weibel
date:   22 May 2016
last_updated: 22 May 2016
---

How to install an SSH server on Linux. An SSH server allows SSH clients to log in to this machine remotely.

To install an SSH server, just run the following:

~~~bash
sudo apt-get install openssh-server
~~~

That's all! Now the server is running, and it can be configured through the following file:

~~~
/etc/ssh/sshd_config
~~~

After making changes to this file, the server can be restarted with:

~~~bash
sudo /etc/init.d/ssh restart
~~~

