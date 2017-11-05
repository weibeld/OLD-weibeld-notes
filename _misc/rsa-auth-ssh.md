---
title: Set Up RSA Authentication for SSH
author: Daniel Weibel
date: 6 May 2013
last_updated: 5 May 2013
---

The default authentication method when logging in with SSH to a remote machine is by password. That means, you have to enter the password of the remote machine each time that you connect to this remote machine.

A more convenient method is RSA authentication, which authenticates you by a private RSA key that is kept on your machine. In this way you don't need to enter the password anymore when logging in to the remote machine.

Note that once set up, the RSA authentication also works for SCP (which is based on SSH).

# Set Up RSA Authentication

## Generate RSA Keys

Generate a new RSA public/private key pair on the local machine by the following command:

~~~bash
ssh-keygen -t rsa
~~~

If the command is prompting you for a passphrase, just leave it empty.


## Install the Public Key on the Remote Machine

The public key of the just generated RSA keys has been saved in the following file:

~~~
~/.ssh/id_rsa.pub
~~~

Copy this file to the remote machine:

~~~bash
scp ~/.ssh/id_rsa.pub user@host:~
~~~

Then, append the content of this file to the `~/.ssh/authorized_keys` file on the remote machine:

~~~bash
ssh user@host "cat ~/id_rsa.pub >> ~/.ssh/authorized_keys && rm ~/id_rsa.pub"
~~~

That's it! When you log in the next time to the remote machine with SSH or SCP, you are authenticated with the private key on your local machine that matches the public key on the remote machine, and you don't need to enter the password of the remote machine anymore.
