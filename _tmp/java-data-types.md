---
title: Java Data Types
author: Daniel Weibel
date: 10 November 2017
last_updated: 10 November 2017
---

# Set

- [Set Implementations](https://docs.oracle.com/javase/tutorial/collections/implementations/set.html) on Oracle Tutorials

Three general-purpose implementations of the [`Set`](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html) interface:

- [`HashSet`](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html)
- [`TreeSet`](https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html)
- [`LinkedHashSet`](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html)

Use `HashSet` unless you need the elements to be in a certain fixed order.


# List

- [`List`](https://docs.oracle.com/javase/8/docs/api/java/util/List.html) interface

[Tutorial](https://docs.oracle.com/javase/tutorial/collections/implementations/list.html) on `List` implementations.

General-purpose `List` implementations:

- [`ArrayList`](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)
- [`LinkedList`](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html)


# Map

- [`Map`](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html) interface

[Tutorial](https://docs.oracle.com/javase/tutorial/collections/implementations/map.html) on `Map` implementations

General-purpose `Map` implementations:

- [`HashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)
- [`TreeMap`](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html)
- [`LinkedHashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashMap.html)

## `HashMap` vs. `Hashtable`

[`HashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) is a member of the [Java Collections Framework](#java-collections-framework).

[`Hashtable`](https://docs.oracle.com/javase/8/docs/api/java/util/Hashtable.html) is an older legacy class that has been retrofitted to fit in the Java Collections Framework.

The differences between `HashMap` and `Hashtable` are:

- `HashMap` permits a `null` key and `null` values, whereas `Hashtable` permits only non-`null` keys and values.
- `HashMap` is **not** syncrhonised, whereas `Hashtable` is synchronised (that is, thread-safe).

`Hashtable` can be regarded as **obsolete**. If you need a synchronised `HashMap`, it's better to use [`ConcurrentHashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html) than `Hashtable` (see [here](https://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable)).


# Queue

[`Queue`](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html) interface.

General-purpose [implementations](https://docs.oracle.com/javase/tutorial/collections/implementations/queue.html) of `Queue`:

- [`PriorityQueue`](https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html)
- [`LinkedList`](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html)

# Deque

Stands for *double-ended queue*.

[`Deque`](https://docs.oracle.com/javase/8/docs/api/java/util/Deque.html) interface.

General-purpose [implementations](https://docs.oracle.com/javase/tutorial/collections/implementations/deque.html):

- [`ArrayDeque`](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html)
- [`LinkedList`](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html)

# The Java Collections Framework

- [Guide](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/index.html) on Oracle
- All the interfaces and classes that are part of the Collections Framework are listed [here](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/reference.html)


<table summary="General-purpose-implementations" border="2">
<caption id="General-purpose-implementations"><strong>General-purpose Implementations</strong></caption>
<tr>
<th width="15%">Interfaces</th>
<th>Hash table Implementations</th>
<th>Resizable array Implementations</th>
<th>Tree Implementations</th>
<th>Linked list Implementations</th>
<th>Hash table + Linked list Implementations</th>
</tr>
<tr>
<td><code>Set</code></td>
<td><code>HashSet</code></td>
<td>&nbsp;</td>
<td><code>TreeSet</code></td>
<td>&nbsp;</td>
<td><code>LinkedHashSet</code></td>
</tr>
<tr>
<td><code>List</code></td>
<td>&nbsp;</td>
<td><code>ArrayList</code></td>
<td>&nbsp;</td>
<td><code>LinkedList</code></td>
<td>&nbsp;</td>
</tr>
<tr>
<td><code>Queue</code></td>
<td>&nbsp;</td>
<td><code>PriorityQueue</code></td>
<td>&nbsp;</td>
<td><code>LinkedList</code></td>
<td>&nbsp;</td>
</tr>
<tr>
<td><code>Deque</code></td>
<td>&nbsp;</td>
<td><code>ArrayDeque</code></td>
<td>&nbsp;</td>
<td><code>LinkedList</code></td>
<td>&nbsp;</td>
</tr>
<tr>
<td><code>Map</code></td>
<td><code>HashMap</code></td>
<td>&nbsp;</td>
<td><code>TreeMap</code></td>
<td>&nbsp;</td>
<td><code>LinkedHashMap</code></td>
</tr>
</table>

All the above interfaces (except `Map`) implement the [`Collection`](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html) interface.

The [`Collections`](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html) class contains static methods that operate on objects implementing the above interfaces.
