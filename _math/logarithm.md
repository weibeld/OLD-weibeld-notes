---
title:  Get a Grip on the Logarithm
author: Daniel Weibel
date:   28 August 2017
last_updated: 20 January 2018
layout: page-dollarmath
---

This note explains how the logarithm works, and is supposed to serve as a memory aid for remembering how the logarithm works.

# Introduction 

The logarithm to the base $b$ of a number $n$ is defined as follows:

$$
\newcommand{\Log}{\mathrm{log}}
\newcommand{\Cl}[1]{\textcolor{red}{#1}}
\newcommand{\Cll}[1]{\textcolor{blue}{#1}}
\newcommand{\Clll}[1]{\textcolor{green}{#1}}
\newcommand{\lrm}{\: \longleftrightarrow \:}
\newcommand{\lr}{$\lrm$}
\newcommand{\mr}[1]{\mathrm{#1}}
\Log_b n = x \lrm b^x = n
$$

If we need to know the logarithm $\Log_b$ of $n$, we can say:

- The base $b$ to the power of *what* ($x$) equals $n$?

Or in other words:

- The logarithm $\Log_b$ of $n$ is the exponent $x$ to which the base $b$ must be raised in order to result in $n$.

# Examples

$$\Log_2 32 = 5 \lrm 2^5 = 32$$

$$\Log_{10} 1000 = 3 \lrm 10^3 = 1000$$

$$\Log_e 70 = \mathrm{ln} 70 = 4.248495 \lrm e^{4.248495} = 70$$

Last example: $e$ is [Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)) $e = 2.71828$

# Logarithm vs. Exponentiation

The logarithm is the **inverse operation** of exponentiation.

## Exponentiation

- **Input:** a *base* and an *exponent*
- **Output:** a *number*

**Examples:**

$\mr{base} = 2$ and $\mr{exponent}=5$

- $2^5 = 32$

$\mr{base} = 10$ and $\mr{exponent}=3$

- $10^3 = 1000$
    
## Logarithm

- **Input:** a *base* and a *number*
- **Output:** an *exponent*

**Examples:**

$\mr{base} = 2$ and $\mr{number}=32$

- $\Log_2 32 = 5$

$\mr{base} = 10$ and $\mr{number}=1000$

- $\Log_{10} 1000 = 3$


# Convert Between Different Bases

Suppose we know the logarithm $\Log_{b_1}$ of $n$:

$$\Log_{b_1} n = x_1$$

Now we want to know the logarithm $\Log_{b_2}$ of $n$. That is, the logarithm of the same number, but to a different base:

$$\Log_{b_2} n = x_2$$

We can calculate $x_2$ as follows:

$$\Log_{b_2} n  = \frac{\Log_{b_1} n}{\Log_{b_1} b_2} = x_2$$

That is:

- The logarithm $\Log_{b_1} n$, that we already know, divided by the logarithm of the new base $b_2$ to the original base $b_1$

## Examples

- Convert $\Log_2 128 = 7$ from base $2$ to base $10$:

  $$\Log_{10} 128 = \frac{\Log_2 128}{\Log_2 10} = \frac{7}{3.321928} = 2.10721$$

- Convert $\Log_e 512 = 6.238325$ from base $e$ to base 2:

  $$\Log_{2} 512 = \frac{\Log_e 512}{\Log_e 2} = \frac{6.238325}{0.6931472} = 9$$

- Convert $\Log_e 1000 = 6.907755$ from base $e$ to base 10:

  $$\Log_{10} 1000 = \frac{\Log_e 1000}{\Log_e 10} = \frac{6.907755}{2.302585} = 3$$

## Note Regarding Big-O Notation

Since $\Log_{b_2} n  = \frac{\Log_{b_1} n}{\Log_{b_1} b_2}$, the logarithms of different bases differ by the following factor:

$$\frac{1}{\Log_{b_1} b_2}$$

This is a constant factor, because it does not contain the input number $n$, which means that it can be drop from the Big-O term.

This is the reason that the bases of logarithms don't matter in the Big-O notation.
