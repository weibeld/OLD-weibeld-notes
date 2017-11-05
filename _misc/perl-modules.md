---
title:  Perl Modules
author: Daniel Weibel
date: 13 April 2017
last_updated: 13 April 2017
---

Some information about Perl modules.

# How To Make A Module "Importable" To Another Module

The second argument of a `use` statement, e.g. `use File::Basename qw(dirname);` is the argument for the automatically called `import` function of the referenced module

- For example, `use File::Basename qw(dirname);` results in calling `import(qw(dirname))` of the `File::Basename` module
- Hence, every module must provide an `import` function
- When writing an own module, the easiest way to do this is to import such an `import` function: `use Exporter qw(import);`
- This import function looks at the `@EXPORT_OK` array o the module and allows the called of the module to import all the functions listed therein

# Package vs. Module

- Module:
    - A `.pm` file under one of the directories in `@INC`
    - Used in the `use` statement
    - Example: `use File::Basename;` looks for a file `Basename.pm` in directory `File` in one of the directories in `@INC`
- Package:
    - A package declaration within a module (`.pm` file)
    - There may be several package declarations in a module file
    - The package names in a module may be different from the module name
- Example:
    - File `lib/Foo/Bar/Baz.pm` (assume `lib/` is in `@INC`)
    - The file may have a package declaration like `package Hello::World;`
    - To import this module: `use Foo::Bar::Baz;`
    - To call subroutines of this module: `Hello::World::some_subroutine();`;
- However, in practice often the package name (declared with `package ...;`) is the same as the module name. In this case, the subroutines of the package can be called without the package prefix.

# Notes

In a Perl script, `__FILE__` is equivalent to `$0`. However, in a module, `__FILE__` is the file name of the module and `$0` is the name of the script that called the module
