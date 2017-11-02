---
title:  Compiling and Running Java Programs Manually
author: Daniel Weibel
date:   5 September 2017
last_updated: 5 September 2017
---

How to compile and run Java programs manually from the command line.

# Without Package Declaration

If the Java file does *not* declare a package.

For example, `Test.java` in directory `MyProject`:

~~~java
public class Test {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
~~~

## Compiling

### From `MyProject` directory

~~~bash
javac Test.java
~~~

Creates `Test.class` in `MyProject`.


### From another directory

~~~bash
javac path/MyProject/Test.java
~~~

Creates `Test.class` in `MyProject` (same directory as Java file, not current working directory).

## Running

### From `MyProject` directory

~~~bash
java Test
~~~

### From another directory

Necessary to set classpath.

~~~bash
java -cp path/MyProject Test
~~~


# With Package Declaration

If the Java file does declare a package.

For example, `Test.java` in directory `MyProject`:

~~~java
package com.example.test;

public class Test {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
~~~

## Compiling

Must use the `javac -d` option to set the `BASE` directory of the **directory structure** for the class files.

Note: class files using a package declaration **must** be located in a directory structure reflecting their package name. Otherwise, these class files cannot be executed. Source files (Java files), on the other hand, can be located in any directory.

~~~bash
javac -d BASE Test.java
~~~

`BASE` must be an existing directory.

Creates the directory structure `BASE/com/example/test/` containing `Test.class`.

## Running

If the Java file declares a package name, then the class **must** be referenced with the **fully qualified class name**, that is, including the package name.

Without stating the package name on the command line, the class file cannot be executed in any case.

### From the `BASE` directory

~~~bash
java com.example.test.Test
~~~

### From another directory

Necessary to set the classpath to the `BASE` directory.

~~~bash
java -cp path/BASE com.example.test.Test
~~~

