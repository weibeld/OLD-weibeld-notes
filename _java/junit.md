---
title:  JUnit for Unit Testing
author: Daniel Weibel
date:   14 October 2016
last_updated: 14 October 2016
---

# What Is It?

[JUnit](http://junit.org/junit4/) is a framework for facilitating unit tests in Java.

JUnit provides the following:

- A way to mark certain methods as tests
- A way to execute and manage the results of these tests (test runner)
- Assert functions that allow to declare when a test should fail and when succeed


The entire framework is contained within a **single JAR file**:

- This JAR file is usually called `junit-*.jar` (where `*` is the version number)
- It can be downloaded from [here](https://github.com/junit-team/junit4/wiki/Download-and-Install)
- Tip: to locate the JUnit JAR file on your computer, you can use:
    ~~~bash
    find / -name "junit*.jar" 2>/dev/null
    ~~~

# JUnit 4 vs. JUnit 3

**JUnit 4** (current version):

- Located in package `org.junit`
- To mark a method as a test, add annotation `@Test` to the method

**JUnit 3** (deprecated but still widely used):

- Located in package `junit.framework`
- To mark a method as a test, the containing class must extend `junit.framework.TestCase`, and the name of the method must start with *test*


# How To Run Tests

- From command line (requires the `junit.jar` on the classpath):
    ~~~bash
    java org.junit.runner.JUnitCore <ClassContainingTests>
    ~~~
- Create a custom class with a main method (test runner) and call e.g. `JUnitCore.runClasses`


# Notes

- The assert functions of JUnit 4 (e.g. `assertEquals`) are in the class `org.junit.Assert`
- The JUnit 4 API documentation can be found [here](http://junit.org/junit4/javadoc/latest/index.html)

