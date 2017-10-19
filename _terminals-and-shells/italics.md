---
title:  Enabling Italic Text in iTerm2 and Tmux
author: Daniel Weibel
date:   April 2017
last_updated: April 2017
---

**Note:** [iTerm2](https://www.iterm2.com/) provides support for italic text, whereas Apple's Terminal does not. That's why this solution discusses only iTerm2.

# iTerm 2

## 1. Enable support for italic text

*Preferences > Profiles > Text > Italic text allowed*

## 2. Create TERMINFO entry with italics support

1. Create temporary file `terminfo` with following content:

    ~~~text
    xterm-256color-italic|xterm with 256 colors and italic,
        sitm=\E[3m, ritm=\E[23m,
        use=xterm-256color,
    ~~~

2. Create a new entry in the `TERMINFO` database

    ~~~bash
    tic terminfo
    ~~~

3. Delete the temporary `terminfo` file

## 3. Bind iTerm2 to new TERMINFO entry

*Preferences > Profiles > Terminal > Report Terminal Type: > xterm-256color-italic*

## 4. Test it

Close and reopen iTerm2, then try:

~~~bash
echo `tput sitm`italics`tput ritm`
~~~

If the output is printed in italicised, then iTerm2 is now capable of printing italic text. Furthermore:

~~~bash
echo $TERM
~~~

should now output `xterm-256color-italic`

## Sources

- <https://gist.github.com/sos4nt/3187620>
- <https://alexpearce.me/2014/05/italics-in-iterm2-vim-tmux/>


# Tmux

After italic text is enabled in iTerm2, it works in iTerm2, but not in tmux. This is because tmux uses a different `TERM` than the terminal in which it is running. To enable italic text in tmux as well, do the following.

## 1. Create a new TERMINFO entry

1. Create temporary file `terminfo` with following content:

    ~~~text
    tmux|tmux terminal multiplexer,
        ritm=\E[23m, rmso=\E[27m, sitm=\E[3m, smso=\E[7m, Ms@,
        use=xterm, use=screen,

    tmux-256color|tmux with 256 colors,
        use=xterm-256color, use=tmux,
    ~~~

2. Create new entry in the `TERMINFO` database:

    ~~~bash
    tic -x terminfo
    ~~~

3. Delete the temporary `terminfo` file

## 2. Bind tmux to new TERMINFO entry

Set the following in `~/.tmux.conf`:

~~~bash
set -g default-terminal "tmux-256color"
set -as terminal-overrides ',xterm*:sitm=\E[3m'
~~~

## 3. Test it


Close and reopen tmux, then try:

~~~bash
echo `tput sitm`italics`tput ritm`
~~~

If the output is printed in italicised, then tmux is now capable of printing italic text. Furthermore:

~~~bash
echo $TERM
~~~

should now output `tmux-256color`

## Sources

- <https://www.bountysource.com/issues/36925710-tic-can-t-open-when-trying-to-enable-italics-according-to-faq>
- <http://apple.stackexchange.com/a/249385>


# Caveat

If using `ssh`, then the value of the `TERM` variable is imposed onto the remote system, which many not have it in its database. To fix this problem, we can put the following into `~/.bashrc`:

~~~bash
alias ssh="TERM=xterm-256color ssh"
~~~
