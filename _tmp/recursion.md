---
title: Recursion and Dynamic Programming
author: Daniel Weibel
date: 9 November 2017
last_updated: 9 November 2017
---


# Recursion

An algorithm that contains a function that calls itself.

# Dynamic Programming

Dividing a problem into subproblems, solving the subproblems, and and caching ther results. When the result of a subproblem that has already been solved is needed again, it is read from the cache (instead of solved again).

# Recursion vs. Iteration

Every recursive algorithm can be implemented iteratively.

## Advantages and Disadvantages of Recursion

- **Advantages**
    - Often the implementation is simple and elegant compared to an iterative implementation
- **Disadvantages**
    - Space-inefficient: every recursive call adds a layer to the function call stack. If the input is too large, this results in a *stack overflow* (e.g. `StackOverflowError`in Java ). 

## Advantages and Disadvantages of Iteration

- **Advantages**
    - Space-efficient: only a constant number of variables is needed to iterte through the input
- **Disadvantages**
    - Often more verbose and complex to implement.


# Dynamic Programming vs. Recursion

Often a recursive algorithm with an exponential time complexity can be reduced to linear time complexity by the means of dynamic programming.

The reason is that recursive algorithms often calculate the same subproblems again and again.

Dynamic programming cuts off these unnecesary calculations by caching the results of all subproblems, so that each subproblem is calculated only once.

# Example

## Fibonacci Iterative

## Fibonacci Recursive

## Fibonacci with Top-Down Dynamic Programming (Memoisation)

## Fibonacci with Bottom-Up Dynamic Programming


# Dividing a Problem Into Subproblems

## Bottom-Up Approach

- Start at the base cases
- From each known case, construct the subsequent case

## Top-Down Approach

