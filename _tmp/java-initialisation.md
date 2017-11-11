---
title: Java Initialisation
author: Daniel Weibel
date:   September 2017
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

Arrays can be initialised in the same statement in which they are declared. This works for both, fields and local variables.

## Default Values

~~~java
int[] a = new int[n];
~~~

Creates an `int` array of size `n` with all elements initialised to the appropriate default values (see [Variable Default Values](#variable-default-values)), in this case 0.

## Custom Values

~~~java
int[] a = {1, 1, 2, 3, 5, 8};
~~~

Creates an `int` array of size 6 with the elements initialised to the provided integer literals.

