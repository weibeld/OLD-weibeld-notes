---
title:  Android Threads
author: Daniel Weibel
date:   4 October 2016
---

Main Thread and Worker Threads
==============================

By default, all components of an Android app run in the *main thread*. The main thread is also called *UI thread*, because it is the thread which manipulates the user interface (UI).

Besides the main thread, it is possible to create additional *worker threads*.


Thread Rules
============

There are two important rules for using threads in Android:

1. Do not block the UI thread
2. Do not manipulate the user interface from a worker thread


Problem
=======

Time consuming operations, such as network access, database queries, or image loading, must not be executed from the main thread. Such operations should be delegated to a worker thread (rule 1).

Often the results of such operations should be displayed on the user interface. However, it's the worker thread who has these results, but a worker thread is not allowed to manipulate the user interface (rule 2).

So, how to pass the result from the worker thread back to the UI thread so that the user interface can be manipulated?


Solution: AsyncTask
===================

The solution to the above problem is the class *AsyncTask*. This class encapsulates the process of executing a time-consuming operation in a worker thread, and displaying the result of this operation on the UI thread, without the need to handle threads directly.

To use AsyncTask, one creates a subclass of AsyncTask, with at least the two callback methods:

- `doInBackground`
- `onPostExecute`

The `doInBackground` method is executed automatically on a worker thread and should contain the time-consuming operation. The result of this operation should finally be returned by the `doInBackground` method.

The `onPostExecute` method is executed automatically on the UI thread and should contain the manipulation of the UI based on the result of the time-consuming operation that was executed by a worker thread. The result of this operation is passed to `onPostExecute` as its argument.

*Remember: the return value of `doInBackground` equals the argument of `onPostExecute`.*

The operation is then started by calling `MyAsyncTask.execute` from the UI thread.


Caveat
======

The worker thread that is used by AsyncTask to run the `doInBackground` method is tied to the lifetime of the activity from which the AsyncTask is started. If this activity dies (e.g. when the device is rotated), then this worker thread also dies, and the background task aborts.

For this reason, AsyncTask is only suited for tasks whose lifecycle is tied to the host activity, i.e. tasks that are supposed to die when the host activity dies.

For tasks that should continue when the host activity dies, a *Service* should be used instead of an AsyncTask.


References
==========

- <https://developer.android.com/guide/components/processes-and-threads.html#Threads>

 
