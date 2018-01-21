---
title: Java Initialisation
author: Daniel Weibel
date:   September 2017
last_updated: 13 November 2017
---

# Variable Default Values

Fields (i.e. variables declared at the class level) are automatically initialised to a default value:

- 0 for numeric types
- `false` for `boolean`
- `\u0000` for `char`
- `null` for reference types (e.g. `String` or any other object)

Thus, fields may be used without ever explicitely assigning a value to them. This applies to static as well as non-static fields.

## Local variables

Local variables (i.e. variables declared within a method or block) are **not** automatically initialised.

Local variables **must** be assigned a value before using them. Otherwise the following compiler error occurs:

~~~
error: variable <X> might not have been initialized
~~~


# Array Initialisation


Declare and initialise an array in a single statement.

Note that for initialising an array, you **must** provide its size. You cannot just initialise an array, leaving its size undetermined, and then add any number of elements, like you can do with a `List`.

## Initialise With Default Values

~~~java
int[] a = new int[n];
~~~

Creates an array of size *n*. All array elements are set to the default values of the array's type (see [Variable Default Values](#variable-default-values)).

## Initialise With Custom Values

~~~java
int[] a = {1, 1, 2, 3, 5, 8};
~~~

Creates an array of size 6. The array elements are set to the provided values.

# List Initialisation

Declare and initialise a `List` in a single statement with [`Arrays.asList`](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#asList-T...-):

~~~java
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
~~~

# Array of Lists

It's possible to create an array of [`List`](https://docs.oracle.com/javase/9/docs/api/java/util/List.html)s (or of any other [`Collection`](https://docs.oracle.com/javase/9/docs/api/java/util/Collection.html)) in the following way:

~~~java
List<Integer>[] array = new ArrayList[10];
~~~

This compiles, but results in the following "unchecked" warning, if compiling with `Xlint:unckecked`:

~~~
Foo.java:9: warning: [unchecked] unchecked conversion
                List<Integer>[] array = new ArrayList[10];
                                        ^
  required: List<Integer>[]
  found:    ArrayList[]
~~~

In general, it is not recommended to use an array of [`Collection`](https://docs.oracle.com/javase/9/docs/api/java/util/Collection.html) objects (see [here](https://stackoverflow.com/questions/8559092/create-an-array-of-arraylists)).

It's probably better to use a **list of lists**:

~~~java
List<List<Integer>> list = new ArrayList<>();
~~~

# List of Arrays

It's possible to create a list (or any other [`Collection`](https://docs.oracle.com/javase/9/docs/api/java/util/Collection.html)) of arrays like this:

~~~java
List<int[]> list = new ArrayList<>();
~~~
