---
title:  Extend BibDesk With AppleSripts
author: Daniel Weibel
date:   23 October 2015
last_updated: 29 October 2017
---

[BibDesk](http://bibdesk.sourceforge.net/) is a Mac tool for creating and maintaing BibTeX bibliography files (`.bib` files).

BibDesk can be extended with AppleScripts, which is particularly useful for tasks such as capitalising titles of bibliography items, or protecting certain substrings in titles (so that their capitalisation is never changed when rendering the bibliography).

I found a couple of useful BibDesk scripts [here](http://www.physics.rutgers.edu/~hofman/applescript) on Christiaan Hofman's website.

There are two general-purpose AppleScript libraries, and a bunch of BibDesk specific AppleScripts. The BibDesk scripts depend on these libraries.

# Install Libraries

Copy the following library files

- [Capitalize.scpt](assets/apple-scripts/Capitalize.scpt)
- [Error Reporting.scpt](assets/apple-scripts/Error Reporting.scpt)

to the following directory (create this directory if it doesn't exist):

~~~
~/Library/ScriptingAdditions
~~~

# Install BibDesk Scripts

Of the BibDesk scripts available on Christiaan Hofman's [website](http://www.physics.rutgers.edu/~hofman/applescript), I find the following ones useful:

- [Add Protect Strings.scpt](assets/apple-scripts/Add Protect Strings.scpt)
- [Capitalize Titles.scpt](assets/apple-scripts/Capitalize Titles.scpt)
- [Capitalize and Protect Titles.scpt](assets/apple-scripts/Capitalize and Protect Titles.scpt)
- [Downcase Titles.scpt](assets/apple-scripts/Downcase Titles.scpt)
- [Protect Titles.scpt](assets/apple-scripts/Protect Titles.scpt)

To install these scripts to BibDesk, copy these files to the following directory:

~~~
~/Library/Application\ Support/BibDesk/Scripts
~~~

Restart BibDesk, and now these scripts should be listed in the *Scripts Menu* of BibDesk.
