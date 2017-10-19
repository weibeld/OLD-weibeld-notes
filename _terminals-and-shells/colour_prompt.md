---
title:  Set Coloured Prompt in Bash
author: Daniel Weibel
date:   16 October 2015
last_updated: April 2017
---

Use in `~/.bashrc` (sourced by each non-login shell):

~~~bash
red='\e[1;31m'
green='\e[1;32m'
yellow='\e[1;33m'
blue='\e[1;34m'
purple='\e[1;35m'
cyan='\e[1;36m'
white='\e[1;37m'

reset='\e[0m'

PS1=${green}${PS1}${reset}
~~~

Test if terminal supports italic text:

~~~bash
echo -e "\e[3m foo \e[23m"
~~~
