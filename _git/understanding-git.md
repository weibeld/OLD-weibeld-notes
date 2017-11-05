---
title: Understanding Git Internals
author: Daniel Weibel
date: 20 May 2017
last_updated: 20 May 2017
---

In order to use Git effectively, it is necessary to understand how it works internally.

# What Is A Git Repository?

The main things to remember are:

- A Git repository is a **directed acyclic graph** (DAG) of **commit objects**.
- **Branches** are **pointers** to individual commit objects

Some more details are:

- A commit object contains pointers to all the files in the repository
- A new commit object can be created on the base of one ore more other commit objects
- The commit object on which another commit object is based is its **parents**
- Each commit object knows its immediate parents
- At any time, one commit object is **checked out**, that is, its files are physically present in the file system

## Pointers

- Branches, remote branches, tags, are just pointers to individual commit objects
- `HEAD` is a special pointer that points to a specific branch (and the branch points to a commit object)
- These pointers serve to "nail down" certain commit objects, so that these commit objects can be easily located and checked out

# Types of Git objects

There are three types of Git objects:

- **blob**: single piece of data (e.g. of a single file); all your files in a repository are presented internally as blob objects
- **tree**: contains one or more pointers to blobs or other trees
- **commit**: wrapper around a tree object, including information like author, date, commit message, and parent commit object(s)

