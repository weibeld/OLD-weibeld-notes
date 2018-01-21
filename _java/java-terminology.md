---
title: Java Terminology
author: Daniel Weibel
date:   September 2017
---

# Classes

A class may contain the following members:

- **Fields** (static and non-static)
- **Methods** (static and non-static)
- **Constructors** (non-static)
- **Nested classes** (static and non-static)


# Variables

There are several types of variables:

- **Fields**
    - Variables declared at the class-level (static and non-static)
- **Local variables**
    - Variables declared in a method or block (non-static)
- **Parameters**
    - Variables declared in a method declaration (non-static)


# Parameters vs. Arguments

**Parameters** refer to the variables declared in a **method declaration**.

**Arguments** refer to the actual values that are passed to the parameters in a **method invocation**.


# Names for Static and Non-Static Members

**Fields:**

- Static fields are also known as **class variables**, or **class fields**
- Non-static fields are also known as **instance variables**, **instance fields**, or just **fields**

**Methods:**

- Static methods are also known as **class methods**
- Non-static methods are also known as **instance methods**

**Nested classes:**

- Static nested classes are also known as **static nested classes**
- Non-static nested classes are also known as **inner classes**


# Access Modifiers

## Top-Level

A class itself may have the following access modifiers:

- *package-private* (no explicit modifier): the class is only visible to classes in the same package
- `public`: the class is visible to any other class

## Member-Level

Members of a class (i.e. fields, methods, constructors, and nested classes) may have the following access modifiers:

- `private`: can be accessed only from within the class
- *package-private* (no explicit modifier): can be accessed only from classes in the same package
- `protected`: can be accessed from classes in the same package, and from subclasses in other packages
- `public`: can be accessed from any class


# Nested Classes

A nested class is a class defined as a member of another class. A nested class can be static or non-static:

- Static: **static nested classes**
- Non-static: **inner class**

## Static Nested Classes

A static nested class is similar to a top-level class (it could as well be defined in its own file).

An instance of a static nested class *cannot* directly access non-static fields and methods of its enclosing class.

## Inner Classes

An inner class is associated with an instance of its enclosing class. An instance of an inner class can only exist within an instance of the enclosing class.

An instance of an inner class can directly access member fields and methods of its enclosing class.

An inner class *cannot* contain static members.

## How To Reference

Both, static nested classes and inner classes, are referenced as follows:

~~~java
OuterClass.NestedClass
~~~


# Foreach Loop

When is it possible to use the foreach loop?

~~~java
for (Item item : foo) {
  ...
}
~~~

*Answer:* when `foo` is an **array**, or implements [`Iterable<Item>`](https://developer.android.com/reference/java/lang/Iterable.html).

# References

- <http://docs.oracle.com/javase/tutorial/java/javaOO/index.html>
