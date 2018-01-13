---
title:  Debugging Java Programs using JDB
author: Nataraju Neeluru
date:   June 2010
last_updated: 12 January 2018
---

Debugging Java programs on the command line with the [JDB](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jdb.html) debugger.

> This is a repost of an article by **Nataraju Neeluru** that has been published at this [original location](https://www.packtpub.com/books/content/debugging-java-programs-using-jdb). I repost this article here because it has been formatted not optimally at its original location. The article itself is extremely good.

***

In this article by **Nataraju Neeluru**, we will learn how to debug a Java program using a simple command-line debugging tool called JDB. JDB is one of the several debuggers available for debugging Java programs. It comes as part of the Sun's JDK. JDB is used by a lot of people for debugging purposes, for the main reason that it is very simple to use, lightweight and being a command-line tool, is very fast. Those who are familiar with debugging C programs with gdb, will be more inclined to use JDB for debugging Java programs.

We will cover most of the commonly used and needed JDB commands for debugging Java programs. Nothing much is assumed to read this article, other than some familiarity with Java programming and general concepts of debugging like breakpoint, stepping through the code, examining variables, etc. Beginners may learn quite a few things here, and experts may revise their knowledge.

# Introduction

JDB is a debugging tool that comes along with the Sun's JDK. The executable exists in `JAVA_HOME/bin` as `jdb` on Linux and `jdb.exe` on Windows (where `JAVA_HOME` is the root directory of the JDK installation). A few notes about the tools and notation used in this article:

- We will use `jdb` on Linux for illustration throughout this article, though the JDB command set is more or less same on all platforms.
- All the tools (like jdb, java) used in this article are of JDK 5, though most of the material presented here holds true and works in other versions also.
- `$` is the command prompt on the Linux machine on which the illustration is carried out.
- We will use `JDB` to denote the tool in general, and `jdb` to denote the particular executable in JDK on Linux.
- JDB commands are explained in a particular sequence. If that sequence is changed, then the output obtained may be different from what is shown in this article.


Throughout this article, we will use the following simple Java program for debugging:

{% gist a00bf08c05620616dc84bb0512d9a19b A.java %}

Let us put this code in a file called `A.java` in the current working directory, compile it using `javac -g A.java` (note the `-g` option that makes the Java compiler generate some extra debugging information in the class file), and even run it once using `java A` to see what the output is. Apparently, there is no bug in this program to debug it, but we will see, using JDB, how the control flows through this program. Recall that, this program being a Java program, runs on a Java Virtual Machine (JVM). Before we actually debug the Java program, we need to see that a connection is established between JDB and the JVM on which the Java program is running. Depending on the way JDB connects to the JVM, there are a few ways in which we can use JDB. No matter how the connection is established, once JDB is connected to the JVM, we can use the same set of commands for debugging. The JVM, on which the Java program to be debugged is running, is called the "debuggee" here.

# Establishing the connection between JDB and the JVM

In this section, we will see a few ways of establishing the connection between JDB and the JVM.

## Option 1: JDB launching the JVM:

In this option, we do not see two separate things as the debugger (JDB) and the debuggee(JVM), but rather we just invoke JDB by giving the initial class (i.e., the class that has the main() method) as an argument, and internally JDB "launches" the JVM.

~~~
$ jdb A
Initializing jdb ...
~~~

At this point, the JVM is not yet started. We need to give `run` command at the JDB prompt for the JVM to be started.

## Option 2: JDB connecting to a running JVM:

In this option, first start the JVM by using a command of the form:

~~~
$ java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,address=6000 A
Listening for transport dt_socket at address: 6000
~~~

It says that the JVM is listening at port 6000 for a connection. Now, start JDB (in another terminal) as:

~~~
$ jdb -attach 6000
Set uncaught java.lang.Throwable
Set deferred uncaught java.lang.Throwable
Initializing jdb ...
>
VM Started: No frames on the current call stack

main[1]
~~~

At this point, JDB is connected to the JVM. It is possible to do remote debugging with JDB. If the JVM is running on machine M1, and we want to run JDB on M2, then we can start JDB on M2 as:

~~~
$ jdb -attach M1:6000
~~~

## Option 3: JDB listening for a JVM to connect:

In this option, JDB is started first, with a command of the form:

~~~
$ jdb -listen 6000
Listening at address: adc2180852:6000
~~~

This makes JDB listen at port 6000 for a connection from the JVM. Now, start the JVM (from another terminal) as:

~~~
$ java -Xdebug -Xrunjdwp:transport=dt_socket,server=n,address=6000 A
~~~

Once the above command is run, we see the following in the JDB terminal:

~~~
Set uncaught java.lang.Throwable
Set deferred uncaught java.lang.Throwable
Initializing jdb ...
>
VM Started: No frames on the current call stack

main[1]
~~~

At this point, JDB has accepted the connection from the JVM. Here also, we can make the JVM running on machine M1 connect to a remote JDB running on machine M2, by starting the JVM as:

~~~
$ java -Xdebug -Xrunjdwp:transport=dt_socket,server=n,address=M2:6000 A
~~~

# Using various JDB commands

This section is the core of this article. Here, we will see how to use various JDB commands, and what those commands do. It serves as a supplement to the JDB `help`. We will use the option of JDB launching the JVM:

~~~
$ jdb A
Initializing jdb ...
~~~

As mentioned earlier, the JVM is not yet started. We need to give `run` command at the JDB prompt for the JVM to be started. If we do that now, we will see that, the JVM gets started, runs the main method of class A to its completion, and then JDB exits. All we see is the output of the main method. But that is just not what we wanted to see. So, before giving the `run` command, we will set a breakpoint in the main method, so that when the program is run, the execution is stopped at the beginning of the main method. We can set the breakpoint using `stop in` or `stop at` commands. `stop in` is used to set the breakpoint at the beginning of a method, whereas `stop at` is used to set the breakpoint at a given line number. Let's use `stop in`. We need to give the class name and the method name along with the type of parameters as follows:

~~~
> stop in A.main(java.lang.String[])
Deferring breakpoint A.main(java.lang.String[]).
It will be set after the class is loaded.
>
~~~

Since the JVM has not yet started and hence the class A is not loaded in the JVM, the breakpoint is not immediately set, but rather it is `deferred` for now, and when the class A is actually loaded, the breakpoint will be set. Note that `stop in` (or `stop at`) is one of the very few commands that are allowed by JDB, when the JVM has not started yet. Many other commands require the JVM be running. Now, let's issue the `run` command.

~~~
> run
run A
Set uncaught java.lang.Throwable
Set deferred uncaught java.lang.Throwable
>
VM Started: Set deferred breakpoint A.main(java.lang.String[])

Breakpoint hit: "thread=main", A.main(), line=14 bci=0
14 System.out.println("Hi, I'm main.. 
 and I'm going to call f1");

main[1]
~~~

We see that when the JVM has started and loaded the initial class A, JDB has set the breakpoint that was deferred earlier. JDB then allowed the JVM to proceed to execute until the main method is invoked. At this point, we've reached the breakpoint set earlier, and we can see the first executable line in the method. This is the line that is about to be executed. We also see that the JDB prompt has now changed from `>` to `main[1]`. It indicates that we are currently debugging the `main` Java thread. Note that there will be other threads that are automatically started by the JVM. We will see a bit more about threads later. For now, let us continue with the main thread.

To see the source around the current location, we can use `list` command:

~~~
main[1] list
10 }
11
12 public static void main(String[] args)
13 {
14 => System.out.println("Hi, I'm main.. and
 I'm going to call f1");
15 f1();
16 f2(3, 4);
17 f3(4, 5);
18 f4();
19 f5();
main[1]
~~~

The line to be executed is shown by `=>`. Also, we see 5 lines of source before and after the current line. (Note that JDB will be able to show the source when `list` command is given, only if the source of the class is in the current working directory (from where JDB is executed). If the source is not in the current working directory, then the path where the source is, should be mentioned by using the `-sourcepath` command line option when JDB is started as: `$ jdb -sourcepath /x/y/z A)`.

Let the current line be executed by using `next` command:

~~~
main[1] next
> Hi, I'm main.. and I'm going to call f1

Step completed: "thread=main", A.main(), line=15 bci=8
15 f1();

main[1]
~~~

The `next` command allows one line in the source to be executed, and then stops the execution. If the line has a function call, that call will be completed too. To enter a function when it is called, we have to use `step` command:

~~~
main[1] step
>
Step completed: "thread=main", A.f1(), line=24 bci=0
24 System.out.println("I'm f1...");
main[1] list
20 }
21
22 public static void f1()
23 {
24 => System.out.println("I'm f1...");
25 System.out.println("I'm still f1...");
26 System.out.println("I'm still f1...");
27 }
28
29 public static int f2(int a, int b)
main[1]
~~~

We have just entered the method `f1()`, and we can step through the code by using `next` command. At any point, if we want to finish the execution of the current function (`f1()` in this case) and go back to the caller (`main()` in this case), we can use `step up` command:

~~~
main[1] step up
> I'm f1...
I'm still f1...
I'm still f1...
Step completed: "thread=main", A.main(), line=16 bci=11
16 f2(3, 4);
~~~

~~~
main[1] list
12 public static void main(String[] args)
13 {
14 System.out.println("Hi, I'm main.. and
 I'm going to call f1");
15 f1();
16 => f2(3, 4);
17 f3(4, 5);
18 f4();
19 f5();
20 }
21
main[1]
~~~

Now, we are back in main. Let us step in to `f2()`.

~~~
main[1] step
>
Step completed: "thread=main", A.f2(), line=31 bci=0
31 return a + b;
~~~

Though there is just one source line here, let us spend some time to learn an interesting command. Recall that, the .class file of a class contains (among many other things) the "byte codes" for each method of that class. We can use another JDK tool called `javap` to see such byte codes of a given .class file. In our example, `javap -c A` command shows that the method `A.f2()` has the following byte codes:

~~~
public static int f2(int, int);
Code:
0: iload_0
1: iload_1
2: iadd
3: ireturn
~~~

One line `return a + b;` in the Java source file corresponds (in the sense, compiled by the Java compiler) to the above set of byte codes in the `.class` file. We have seen that, when we use `next` or `step` command, the control goes to the next "source line" in the same method or in the called method if any, respectively. However, it is also possible that we can go just to the next byte code (rather than the next source line). To do this, we can use `stepi` command. This command provides the finest granularity of stepping through the code.

~~~
main[1] stepi
>
Step completed: "thread=main", A.f2(), line=31 bci=1
31 return a + b;
~~~

~~~
main[1] stepi
>
Step completed: "thread=main", A.f2(), line=31 bci=2
31 return a + b;
~~~

~~~
main[1] stepi
>
Step completed: "thread=main", A.f2(), line=31 bci=3
31 return a + b;

main[1]
~~~

We executed `stepi` command thrice but the control is still in the same source line. However, notice the `bci` value (meant for "byte code index") in the output of each of the `stepi` commands. It has changed from 0 to 1 to 2 to 3. i.e., first, `iload_0` byte code at index 0 got executed, and then `iload_1` byte code at index 1 got executed, and then `iadd` byte code at index 2 got executed, and now the byte code at index 3 is about to be executed.

At any point, to see what the current call stack is, we can use `where` command:

~~~
main[1] where
 [1] A.f2 (A.java:31)
 [2] A.main (A.java:16)
main[1]
~~~

It shows that we are currently in the method A.f2() called by A.main(). To see the byte code positions also in each method, we can use `wherei` command:

~~~
main[1] wherei
 [1] A.f2 (A.java:31), pc = 3
 [2] A.main (A.java:16), pc = 13
main[1]
~~~

Notice the `pc` ("Program Counter") value for each method on the stack.

Let us finish `f2()`, come back to main and then step in to `f3()`:

~~~
main[1] step up
>
Step completed: "thread=main", A.main(), line=16 bci=16
16 f2(3, 4);
~~~

~~~
main[1] next
>
Step completed: "thread=main", A.main(), line=17 bci=17
17 f3(4, 5);
~~~

~~~
main[1] step
>
Step completed: "thread=main", A.f3(), line=36 bci=0
36 A obj = new A(a, b);
~~~

~~~
main[1] next
>
Step completed: "thread=main", A.f3(), line=37 bci=10
37 obj.reset();

main[1]
~~~

At this point, as dictated by the source, an instance of class A is created and a reference to it is held in the variable `obj`. We can examine this instance, by using the `print` command:

~~~
main[1] print obj
obj = A@1feca64
main[1] print obj.x
obj.x = 4
main[1] print obj.y
obj.y = 5
main[1]
~~~

We see that, printing `obj.x` and `obj.y` shows their values, but we don't see them when `obj` itself is printed. To see the full details of an instance, we can use `dump` command:

~~~
main[1] dump obj
obj = {
x: 4
y: 5
}
main[1]
~~~

To see the values of all local variables (including the arguments passed) in a method, we can use `locals` command:

~~~
main[1] locals
Method arguments:
a = 4
b = 5
Local variables:
obj = instance of A(id=325)
main[1]
~~~

Note that if the class was not compiled with `-g` option, we would not be able to see the above outputs.

If we want to see where in the code, a particular field is being accessed or modified, we can use `watch` command:

~~~
main[1] watch A.x
Set watch modification of A.x
main[1]
~~~

Now, we can let the program to continue execution and we will be able to see where, if any, the field A.x is getting modified. But before doing so, let us know another command called `monitor`. This command takes another command as an argument, and executes the latter command whenever the program is stopped. The following are a few points at which execution is stopped:

- when a breakpoint is hit
- when a field access/modification watch point is hit
- when next, step, step up, stepi commands are run
- when a method is entered/exited while tracing of methods is ON.

Let us give `list` command to `monitor`, and continue the program execution by `cont` command:

~~~
main[1] monitor list
main[1] cont
>
Field (A.x) is 4, will be 0: "thread=main", 
 A.reset(), line=58 bci=2
58 x = 0;
54 }
55
56 private void reset()
57 {
58 => x = 0;
59 y = 0;
60 }
61 }
62
main[1] main[1]
~~~

`cont` command lets the program execute until a breakpoint or a watchpoint is hit, or a method is entered or exited while method tracing is on. In this case, we have hit the watchpoint for the field A.x. So, the execution stops just when A.x is about to be modified. And since we had set the `list` command in `monitor`, we see that as soon as the program is stopped because of hitting the watchpoint for A.x, the `list` command is executed automatically, which shows us the source where A.x is being modified (here, x is being set to 0).

If no command is given to `monitor`, then it shows the list of currently set commands under `monitor` along with their `monitor numbers`.

~~~
main[1] monitor
1: list
main[1]
~~~

We can remove a command from the monitor list using `unmonitor` command with the monitor number:

~~~
main[1] unmonitor 1
Unmonitoring 1: list
main[1]
~~~

We can remove a watchpoint by using `unwatch` command:

~~~
main[1] unwatch A.x
Removed: watch modification of A.x
main[1]
~~~

To see all the breakpoints currently set, we can use `clear` command:

~~~
main[1] clear
Breakpoints set:
 breakpoint A.main(java.lang.String[])
main[1]
~~~

And, to remove a break point, we have to give the complete breakpoint description:

~~~
main[1] clear A.main(java.lang.String[])
Removed: breakpoint A.main(java.lang.String[])
main[1]
~~~

# Advanced JDB Commands

So far, we've learnt quite a few most common JDB commands. Now, let us have a look at some advanced commands.

As mentioned earlier, we are currently debugging the `main` Java thread running in the JVM. To see what all thread groups and threads are there in the JVM at the moment, use `threadgroups` and `threads` commands:

~~~
main[1] threadgroups
1. (java.lang.ThreadGroup)0x146 system
2. (java.lang.ThreadGroup)0x147 main
~~~

It shows that there are two thread groups, namely `system` and `main`, with 0x146 and 0x147 as their ids, respectively. To see all the threads in all thread groups, we can use `threads` command:

~~~
main[1] threads
Group system:
(java.lang.ref.Reference$ReferenceHandler)0x112 Reference Handler cond. waiting
(java.lang.ref.Finalizer$FinalizerThread)0x111 Finalizer cond. waiting
(java.lang.Thread)0x110 Signal Dispatcher running
Group main:
(java.lang.Thread)0x1 main running
main[1]
~~~

Here, we see that the thread group `system` has three threads, namely Reference Handler, Finalizer and Signal Dispatcher, and the first two are in waiting state, whereas the Signal Dispatcher is in running state. The thread group `main` has only one thread, namely `main`, which is also in running state, and which is what we've been debugging so far.

We can see what all classes are currently loaded in the JVM by using the `classes` command:

~~~
main[1] classes
** classes list **
A
boolean[]
byte[]
char[]
double[]
float[]
int[]
java.io.BufferedInputStream
java.io.BufferedOutputStream
java.io.BufferedWriter
java.io.Closeable
....
sun.reflect.misc.ReflectUtil
sun.security.action.GetPropertyAction
sun.security.util.Debug
sun.util.PreHashedMap
main[1]
~~~

Right at the top, we see that our example class A is loaded. In addition to it, we see a lot of other classes, most of which are the system classes. The output shown above is truncated, since the list is too long.

To see more details about a particular class, we can use `class` command:

~~~
main[1] class java.lang.String
Class: java.lang.String
extends: java.lang.Object
implements: java.io.Serializable
implements: java.lang.Comparable
implements: java.lang.CharSequence
nested: java.lang.String$CaseInsensitiveComparator
main[1]
~~~

For a given class that is loaded currently, the `class` command shows what is the super class, what all interfaces are implemented, what are the nested classes, etc.

To see more internals of a particular class, we can use `methods` and `fields` commands:

~~~
main[1] methods A
** methods list **
A <init>(int, int)
A main(java.lang.String[])
A f1()
A f2(int, int)
A f3(int, int)
A f4()
A f5()
A reset()
java.lang.Object <init>()
java.lang.Object registerNatives()
java.lang.Object getClass()
java.lang.Object hashCode()
java.lang.Object equals(java.lang.Object)
java.lang.Object clone()
java.lang.Object toString()
java.lang.Object notify()
java.lang.Object notifyAll()
java.lang.Object wait(long)
java.lang.Object wait(long, int)
java.lang.Object wait()
java.lang.Object finalize()
java.lang.Object <clinit>()
main[1]
~~~

~~~
main[1] fields A
** fields list **
int x
int y
main[1]
~~~

We see that the `methods` command lists all the methods of the given class A, along with their signatures, as well as all the methods inherited from the super class java.lang.Object. Note that <init> method is the constructor. And understandably, `fields` command shows the names and types of the fields in the class.

We can trace method entry and exit, by using the `trace methods` command:

~~~
main[1] trace methods
main[1] cont
>
Method exited: A.reset "thread=main", A.reset(), line=60 bci=10
60 }
~~~

~~~
main[1] cont
>
Method exited: A.f3 "thread=main", A.f3(), line=38 bci=15
38 return obj;
~~~

~~~
main[1] cont
>
Method entered: A.f4 "thread=main", A.f4(), line=43 bci=0
43 System.out.println("I'm f4 ");
~~~

~~~
main[1] cont
> I'm f4

Method exited: A.f4 "thread=main", A.f4(), line=44 bci=8
44 }
~~~

~~~
main[1] cont
>
Method entered: A.f5 "thread=main", A.f5(), line=48 bci=0
48 A a = new A(5, 6);
main[1]
~~~

As shown above, the execution stops whenever any method is entered or exited. We can stop tracing the method entry and exit by `untrace methods`:

~~~
main[1] untrace methods
main[1]
~~~

Now, let us continue (by using `next`) in A.f5() until we are in inside the synchronized block as shown below:

~~~
main[1] list
48 A a = new A(5, 6);
49
50 synchronized(a)
51 {
52 => System.out.println("I'm f5, accessing a's fields " +
 a.x + " " + a.y);
53 }
54 }
55
56 private void reset()
57 {
main[1]
~~~

To see the information regarding the monitor associated with an object, we can use `lock` command:

~~~
main[1] lock a
Monitor information for a ("A@6d084b"):
 Owned by: main, entry count: 1
 No waiters
main[1]
~~~

It shows that our current thread (main) has acquired the monitor associated with the instance `a`, and that there are no other threads waiting for this monitor. To see what all monitors are owned by the current thread, and what monitors, if any, it is waiting for, we can use `threadlocks` command:

~~~
main[1] threadlocks
 Monitor information for thread main:
 Owned monitor: instance of A(id=329)
 Not waiting for a monitor
main[1]
~~~

To see the stacks of all threads, use `where all`:

~~~
main[1] where all
Signal Dispatcher:
Finalizer:
 [1] java.lang.Object.wait (native method)
 [2] java.lang.ref.ReferenceQueue.remove (ReferenceQueue.java:120)
 [3] java.lang.ref.ReferenceQueue.remove (ReferenceQueue.java:136)
 [4] java.lang.ref.Finalizer$FinalizerThread.run (Finalizer.java:159)
Reference Handler:
 [1] java.lang.Object.wait (native method)
 [2] java.lang.Object.wait (Object.java:474)
 [3] java.lang.ref.Reference$ReferenceHandler.run (Reference.java:116)
main:
 [1] A.f5 (A.java:52)
 [2] A.main (A.java:19)
main[1]
~~~

And finally, to exit JDB, use `exit` or `quit` command.

# Analogy between JDB and GDB

For those who are familiar with `gdb` debugger for C, the following analogy/equivalence of the commands between JDB and gdb might help:

| JDB command	| gdb command |
|:-:|:-:|
|step	|s|
|next	|n|
|cont	|c|
|stop in/at	|b|
|clear	|info b|
|step up|	finish|
|up/down|	f|
|where	|bt|
|print/dump|	p|
{:.table-normal}

# Debugging in IDEs:

Most of the IDEs available today for the development of Java applications have the debugging functionality built in them. For example, Eclipse has most of the features we have discussed in this article. Jdeveloper has also similar debugging functionality. And then, there is a GUI debugger called Jswat. In all these IDE/GUI based debuggers, there will be appropriate menu items to do things like setting/clearing a breakpoint/watchpoint. And also there will be separate windows for showing the current call stack of the current thread, for showing the local variables of a method, for showing the current source, for accepting any command, etc. Some of such IDE/GUI based debuggers even have some new features that are not available in the command-line debuggers like JDB. For instance, we might be able to set the cursor in the source window at some place, and ask the debugger to continue the execution till the control reaches the cursor. All of this is to simplify the process of debugging, but at the cost of extra processing time. On the other hand, JDB, being a command-line tool, is very fast.

# Summary

In this article, we have seen most of the commonly used and needed JDB commands for debugging Java programs. There are a few advanced commands as well. Such commands are not covered here, since the purpose of this article is not to go through every JDB command, but to learn the most commonly needed functionality of JDB.
