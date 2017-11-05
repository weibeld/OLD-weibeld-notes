---
title:  Installing The ns-3 Network Simulator on Mac
author: Daniel Weibel
date:   16 May 2016
last_updated: 16 May 2016
---

[ns-3](https://www.nsnam.org/) is a discrete-event network simulator.

The following installation instructions have been tested on macOS 10.11.1

Prerequisites
=============

- Xcode Command Line Tools installed (`gcc` and `clang`)
- Python installed

Installation
============

- Download desired version of ns-3 from [here](https://www.nsnam.org/release/)
- Build it with the following command:
    ~~~bash
    ./build.py --enable-examples --enable-tests
    ~~~
- `cd` to the ns-3 root directory (for example, `ns-3.25`)
- Validate installation with the following command
    ~~~bash
    ./test.py -c core
    ~~~

Hello World
===========

Run the following for a "hello world" simulation:

~~~bash
./waf --run hello-simulator
~~~

References
====

- [ns-3 installation guide](https://www.nsnam.org/wiki/Installation)
