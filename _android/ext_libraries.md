---
title:  Add Apache Commons to Android Project
author: Daniel Weibel
date:   1 February 2016
---


# Add Support for External Libraries in Gradle Build File

1. Create a directory in the Android project for keeping the external library `.jar` files, e.g. `libs`
2. In `build.gradle`, add

~~~email
android {
    ...
    dependencies {
        compile fileTree(dir: 'libs', include: '*.jar')
    }
    ...
}
~~~

This causes Gradle to include all the `.jar` files in the directory `libs` in the build.


# Add the Apache Commons Library

1. Download the desired Apache Commons library from <http://commons.apache.org/>
2. Place the main `.jar` file of the library in `libs`
3. Build as usual (`./gradlew assembleDebug`)
