---
title: Genealogy of Vim
author: Daniel Weibel
date: 26 June 2017
last_updated: 26 June 2017
---

**Vim** hasn't just been invented out of nothing, it has a line of ancestors going back to the 1960's, and it is in the same family with editors like **grep**, **sed**, and **awk**.

The following list gives an overview:


- **qed** (UC Berkely, 1966)
    - **ed** (Ken Thompson, 1969): editor for UNIX
        - **ex** (Bill Joy, 1976): reimplementation of ed for video (rather than teletype) terminals
            - **vi** (Bill Joy, 1979): visual mode of ex; originally, vi was a part of ex (enter with ex command `vi` or `visual`), but soon, the visual mode became very popular, and ex became a part of vi (enter "ex mode" from vi or vim with `Q`)
                - **vim** (Bram Moolenaar, 1991): enhanced clone of vi
        - **grep** (Ken Thompson, 1974): standalone tool for ed command `g/re/p`, where `re` stands for any *regular expression*
        - **sed** (Lee McMahon, 1974): generalisation of the `g/re/X` usage of ed resulting in an editor applying commands to a *stream of lines*
            - **awk** (Aho, Weinberger, Kernighan, 1977): stream-oriented editor like sed, but enormously generalised and expanded

