---
title:  Android Activity Lifecycle
author: Daniel Weibel
date:   14 October 2016
---

- `onCreate` > `onStart` > `onResume` > `onPause` > `onStop` > `onDestroy`
- `onRestart`: after `onStop`, before `onStart`, when user navigates back to activity
- Fragments have similar lifecycle callback methods, except `onRestart`
- Active lifetime (activity get partially obscurred by e.g. a dialog)
    1. [Active] > `onPause` > [Paused]
    2. [Paused] > `onResume` > [Active]
- Visible Lifetime (user navigates to another activity)
    1. [Active] > `onPause` > `onStop` > [Stopped]
    2. [Stopped] > `onRestart` > `onStart` > `onResume` > [Active]
- <https://developer.android.com/training/basics/activity-lifecycle/index.html>
