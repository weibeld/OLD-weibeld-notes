---
title: Trees
author: Daniel Weibel
date: September 2017
last_updated: 9 November 2017
---

$$
\newcommand{\Log}{\text{log}\,}
\newcommand{\LFloor}{\left\lfloor}
\newcommand{\RFloor}{\left\rfloor}
$$

# First of All...

A tree is just a special type of [graph](graphs.html), namely a **connected acyclic graph**.

# Terminology

![Tree Terminology](assets/tree-terminology.svg){:width="100%"}

## Height of a Node

- Number of edges on the *longest* path from this node to a leaf
- Leaves have height 0

## Height of a Tree

- Height of the root

## Depth of a Node

- Number of edges on the path from this node to the root
- Root has depth 0

## Levels of a Tree

- A tree has Height + 1 levels
- Root is at level 1

# Binary Trees

TODO: draw example binary tree with e.g. 10 nodes

- Height of a binary tree with $n$ nodes: $\lfloor\Log n\rfloor$
- Maximum number of nodes in a binary tree with $n$ levels: $2^n-1$

# Binary Search Trees (BST)

# Binary Heaps
