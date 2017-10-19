---
title:  Android Cheatsheet
author: Daniel Weibel
date:   Jan--Feb 2017
---

# Show the soft keyboard on activity startup

In `AndroidManifest.xml`:
    
~~~xml
<activity
    android:windowSoftInputMode="stateVisible"
    ...>
</activity>
~~~

# Ways to set colours in resource XML files

~~~xml
android:background="@android:color/white"
~~~

~~~xml
android:background="#FFF9C4"
~~~

# Disable fullscreen keyboard in landscape orientation for an `EditText` 

~~~xml
<EditText
    android:imeOptions="flagNoExtractUi"
    ... />
~~~

# Set `Toolbar` as the app bar (instead of the default `ActionBar`)

1. In `AndroidManifest.xml` set the application theme to one of the `NoActionBar` themes, e.g.:

    ~~~xml
    <application
        android:theme="@style/Theme.AppCompat.Light.NoActionBar"
        ...>
    ~~~

2. Add a `Toolbar` to the activity's layout:

    ~~~xml
    <LinearLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        android:orientation="vertical"
        ...>
        <android.support.v7.widget.Toolbar
            android:id="@+id/toolbar"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:minHeight="?attr/actionBarSize"
            android:background="?attr/colorPrimary"
            android:elevation="4dp"
            app:theme="@style/ThemeOverlay.AppCompat.Dark.ActionBar" />
        ...
    </LinearLayout>
    ~~~~

3. Set the `Toolbar` as the app bar in the activity's `onCreate` method:

    ~~~java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setSupportActionBar((Toolbar) findViewById(R.id.toolbar));
        ...
    }
    ~~~

# Prevent contextual action bar from pushing down `Toolbar`

By default, the [contextual action bar](https://developer.android.com/guide/topics/ui/menus.html#CAB) pushes the `Toolbar` down rather than overlaying it. This can be changed with the following item in the app style in `res/styles.xml`:

~~~xml
<style name="AppTheme.NoActionBar" parent="Theme.AppCompat.Light.NoActionBar">
    ...
    <item name="windowActionModeOverlay">true</item>
</style>
~~~

# Prevent an activity from being added to the "back stack"

In `AndroidManifest.xml`:

~~~xml
<activity
    ...
    android:noHistory="true">
</activity>
~~~

# Make soft keyboard pushing up views rather than hiding them

In `AndroidManifest.xml`:

~~~xml
<activity
    ...
    android:windowSoftInputMode="adjustResize">
</activity>
~~~

# Enable "back" navigation item in app bar and set custom icon

First, in `AndroidManifest.xml`, define the parent activity of the current activity:

~~~xml
<activity
   ...
   android:parentActivityName="...">
</activity>
~~~

Then, in the activity's `onCreate`:

~~~java
getSupportActionBar().setDisplayHomeAsUpEnabled(true);
getSupportActionBar().setHomeAsUpIndicator(R.drawable.ic_close_white_24dp);
~~~

# When clicking navigation icon in app bar, just restart (`onRestart`) parent activity, rather than recreating it (`onCreate`)

In the child activity:

~~~java
@Override
public boolean onSupportNavigateUp() {
    onBackPressed();
    return true;
}
~~~


# Fix version conflicts of Google Support Library Gradle dependencies

For example, if a pulled project uses `compile 'com.android.support:appcompat-v7:25.2.0'`, but this causes an error when syncing the Gradle file, because only `'com.android.support:appcompat-v7:25.1.0'` is installed.

SDK Manager > Launch Standalone SDK Manager > Extras > **Android Support Repository** $\longleftarrow$ *update it*


# Replace all anonymous classes with lambda expressions

1. Analyze > Run Inspection by Name (Cmd-Alt-Shift-I)
2. Type "Anonymous type can be replaced with lambda"
3. Select *Whole project*
4. In *Inspection* tool window, right-click on "Anonymous type..."
5. Click *Apply fix*

# Creating a launcher icon

The radius of the corners should be **8.33%** of the size of the icon (<http://stackoverflow.com/questions/31255291/android-launcher-icon-rounded-corner-edge-radii>)
