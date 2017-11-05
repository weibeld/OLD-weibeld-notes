---
title: Remote Environment Variables for SSH Commands
author: Daniel Weibel
date: 16 July 2013
last_updated: 16 July 2013
---

With SSH it is possible to execute "one-shot" commands on a remote host, in the following way:

~~~bash
ssh user@host some_command
~~~

This causes the SSH client to log in to the remote machine, execute the specified command, and log out again.

The problem is that when the SSH client logs in to the remote machine, it does not source the `~/.bash_profile` and `~/.bashrc` files of the remote machine. This means that any environment variables defined in these files, including customisations to the `PATH` variable, are not available to the command executed by the SSH client.

This might prevent the client from executing certain commands, if, for example, the `PATH` doesn't contain the directory of the command, and the client doesn't know where the command executable is saved on the server.

# Which Environment Variables are Available to the Client?

With the following command you can see the evironment variables that are available to the command executed by the SSH client:

~~~bash
ssh user@host env
~~~

For the `PATH` variable, the value is most likely something like

~~~bash
PATH=/usr/bin:/bin:/usr/sbin:/sbin
~~~

which is the default value of `PATH` on UNIX systems.

# Make Custom Variables Available to the Client

Perform the following actions on the remote machine:

1. In the following file:
    ~~~
    /etc/sshd_config
    ~~~
    change the line
    ~~~
    #PermitUserEnvironment no
    ~~~
    to
    ~~~
    PermitUserEnvironment yes
    ~~~
2. Create the following file:
    ~~~
    ~/.ssh/environment
    ~~~
    And add to this file variable definitions required by the client, for example:
    ~~~bash
    PATH=$PATH:/usr/local/bin
    ~~~

Now, all the variable defined in the `~/.ssh/environment` file should be available to the SSH client when it logs in to the remote machine.

You can test this by executing the following command on the client machine again:

~~~bash
ssh user@host env
~~~

# References

- [StackOverflow](http://stackoverflow.com/questions/10562722/command-not-found-via-ssh-with-single-command-found-after-connecting-to-termina)
- [ServerFault](http://serverfault.com/questions/123274/how-to-use-sshd-config-permituserenvironment-option)

