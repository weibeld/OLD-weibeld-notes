---
title:  Useful Math
author: Daniel Weibel
date:   4 September 2017
last_updated: 8 November 2017
layout: page-dollarmath
---

Some simple but useful math reminders and tricks.

# Contents

- TOC
{:toc .toc-depth-1 .toc-skip-first}

# Divison Terminology

How are they called again? 🤔

$$\frac{\text{dividend}}{\text{divisor}} = \frac{\text{numerator}}{\text{denominator}}$$

# Sum of Integers 1 to N

Approach: pair and add up corresponding high and low elements (first + last, second-first + second-last, etc.).

## If N is even

Great, we can make $\frac{N}{2}$ pairs:

$$1 + 2 + 3 + 4 + \ldots + (N-3) + (N-2) + (N-1) + N$$

- $1 + N = N + 1$
- $2 + (N-1) = N + 1$
- $3 + (N-2) = N + 1$
- $4 + (N-3) = N + 1$
- $\ldots$

$\frac{N}{2}$ sums of value $N+1$:

$$\frac{N}{2} \, (N+1) = \frac{N\,(N+1)}{2}$$

## If N is odd

Prepend a 0 to make the number of summands even:

$$0 + 1 + 2 + 3 + \ldots + (N-3) + (N-2) + (N-1) + N$$

- $0 + N = N$
- $1 + (N-1) = N$
- $2 + (N-2) = N$
- $3 + (N-3) = N$
- $\ldots$

$\frac{N+1}{2}$ sums of value $N$:

$$\frac{N+1}{2} \, N = \frac{N\,(N+1)}{2}$$

## Conclusion

In all cases, the sum of integers 1 to $N$ is:

$$\frac{N\,(N+1)}{2}$$


# Sum of Integers 1 to N-1

Analogous to the sum of integers 1 to $N$.

## If N is even (i.e. N-1 is odd)

$$0 + 1 + 2 + 3 + \ldots + (N-4) + (N-3) + (N-2) + (N-1)$$

- $0 + (N-1) = N - 1$
- $1 + (N-2) = N - 1$
- $2 + (N-3) = N - 1$
- $3 + (N-4) = N - 1$
- $\ldots$

$\frac{N}{2}$ sums of value $N-1$:

$$\frac{N}{2} \, (N-1) = \frac{N\,(N-1)}{2}$$

## If N is odd (i.e. N-1 is even)

$$1 + 2 + 3 + 4 + \ldots + (N-4) + (N-3) + (N-2) + (N-1)$$

- $1 + (N-1) = N$
- $2 + (N-2) = N$
- $3 + (N-3) = N$
- $4 + (N-4) = N$
- $\ldots$

$\frac{N-1}{2}$ sums of value $N$:

$$\frac{N-1}{2} \, N = \frac{N\,(N-1)}{2}$$

## Conclusion

In all cases, the sum of integers 1 to $N-1$ is:

$$\frac{N\,(N-1)}{2}$$


# Sum of Powers of 2

What is the sum of the following?

$$2^0 + 2^1 + 2^2 + 2^3 + \ldots + 2^N$$

## Example N = 4

The solution can be easily seen by taking an example and writing the terms in binary notation:

$$
\newcommand{\B}{\mathrm{b}}
\begin{align*}
2^0 + 2^1 + 2^2 + 2^3 + 2^4 &= 1 + 2 + 4 + 8 + 16\\
                            &= 1_\B + 10_\B + 100_\B + 1000_\B + 10000_\B \\
                            &= 11111_\B \\
                            &= 2^5 - 1
\end{align*}
$$

## Conclusion

The sum of the powers of 2 from 0 up to $N$ ($2^0 + 2^1 + \ldots + 2^N$), is:

$$2^{N+1} - 1$$


# Floor and Ceiling

## Floor function

$$\mathrm{floor}(x) = \left\lfloor{x}\right\rfloor$$

Go **down** to the nearest integer.

## Ceiling function

$$\mathrm{ceiling}(x) = \left\lceil{x}\right\rceil$$

Go **up** to the nearest integer.
