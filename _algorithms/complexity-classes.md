---
title:  Complexity Classes
author: Daniel Weibel
date:   4 September 2017
last_updated: 4 September 2017
---

An overview of the most important complexity classes of algorithms.

Here is a visual depiction:

![Complexity classes](assets/complexity-classes.png){:.center-image}

# P

Can be *solved* by a *deterministic* Turing machine in polynomial time

# NP

- Can be *solved* by a *non-deterministic* Turing machine in polynomial time
- Can be *verified* by a *deterministic* Turing machine in polynomial time

# NP-hard

- A problem to which every NP problem can be reduced to in polynomial time
- A problem to which at least one NP-complete problem can be reduced to in polynomial time
- **Is not necessarily in NP**

# NP-complete

- Subset of NP-hard
- Those NP-hard problems that are in NP
- **Is in NP**
