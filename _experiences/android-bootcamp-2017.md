---
title:  Android Bootcamp Vietnam
author: Daniel Weibel
date:   14 February 2017
last_updated: 6 April 2017
---

These are notes of an eight-week [CoderSchool](http://www.coderschool.vn/) Android development bootcamp that I attended from February to April 2017 in Ho Chi Minh City (a.k.a. Saigon), Vietnam.

The main focus of these notes is on the new concepts that I learned every week, and on the things that proved to be challenging. 

Organisation
============

- 8 weeks
- Every week:
    - Theoretical lecture of 2 hours
    - Practical labe of 2 hours
    - Assignment to complete at home
- Final group project
- First Lecture: 14 Februrary 2017
- Last Lecture: 6 April 2017

Week 0
======

- **Prework:** [My Todo](https://github.com/weibeld/Prework_Todo_App)

Learned Concepts
----------------

- **[Cupboard](https://bitbucket.org/littlerobots/cupboard)** (SQLite database wrapper)
- **Contextual Action Mode** (multi-selection in ListView)
- Publish an app on **Google Play**

Difficulties
------------

- **Swipe ListView items** left and right: requires [AndroidSwipeLayout](https://github.com/daimajia/AndroidSwipeLayout) or without a 3rd party library [here](http://nemanjakovacevic.net/blog/english/2016/01/12/recyclerview-swipe-to-delete-no-3rd-party-lib-necessary/) and [here](https://www.learn2crack.com/2016/02/custom-swipe-recyclerview.html)
- **RecyclerView:** learn how to use it from the ground up

Things to Check Out
-------------------

- **[Android Niceties](http://androidniceties.tumblr.com/):** collection of screenshots of well-designed Android apps



Week 1
======

- **Lecture:** App Fundamentals, Views, Layouts
- **Lab:** [Facebook Login Page](https://github.com/weibeld/android-lab1-tuandaniel)
- **Assginment:** [Flicks](https://github.com/weibeld/Flicks)

Learned Concepts
----------------

- **[Retrofit 2](https://square.github.io/retrofit/):** full-blown client for accessing RESTful HTTP APIs
- **[Gson](https://github.com/google/gson):** convert between JSON objects and Java objects (used by Retrofit)
- **[OkHttp 3](http://square.github.io/okhttp/):** HTTP client for Androd and Java (used by Retrofit)
- **ViewHolder pattern:** reduce `findViewById()` in `getView()` of an adapter for a ListView
- **Data Binding Library:** eliminate `findViewById()` altogether

Difficulties
------------

- Cannot have a **ListView inside a ScrollView**, but possible to work around with using a LinearLayout and adding child views programmatically with `addView()`
- **YouTubePlayerFragments** dynamically added to a LinearLayout: cannot have multiple fragments with the same ID in an activity
- **YouTubePlayerViews** dynamically added to a LinearLayout: videos don't load correctly (only last YouTubePlayerView gets its video loaded)


Week 2
======

- **Lecture:** User Interaction and Navigation Flows (Intents)
- **Lab:** [Book List](https://github.com/weibeld/android-lab2-du-daniel) (Open Library API)
- **Assignment:** [News Explore](https://github.com/weibeld/NYT_Explore)

Learned Concepts
----------------

- **[Stetho](http://facebook.github.io/stetho/):** Chrome-based debugging tool for Android
    - Use Stetho for monitoring HTTP requests made by Retrofit and Glide: add a StethoInterceptor to the OkHttp client used by Retrofit, set up Glide to use OkHttp by a GlideModule and also add a StethoInterceptor to this OkHttp client
- **RecyclerView:** how to use it (including patches for "onItemClick" and endless scrolling)
- **ProgressDialog/ProgressBar** for displaying e.g. a "loading" state
- Incorporate a **ShareActionProvider** into the app bar for sharing content
- Automatic generation of **Java model classes** for Retrofit from a JSON string with [jsonschema2pojo](http://www.jsonschema2pojo.org/)
- **[Retrolambda](https://github.com/evant/gradle-retrolambda):** enable lambda expressions and method references for Java < 8 (lambda expressions and method references are a feature of Java 8, which currently can be used for Android with the new [Jack toolchain](https://developer.android.com/guide/platform/j8-jack.html); however the Jack toolchain is experimental and has some issues, for example, it [cannot be used together witht he Data Binding Library](https://code.google.com/p/android/issues/detail?id=210615))	

Difficulties
------------

- Finetuning of **endless scrolling** in RecyclerView: hard to achieve a fluent experience with a "staggered grid layout"
- Many NYTimes Article Search **API calls fail** for different reasons: not sure if it's an API or network connection issue or a general one
- Finetuning of **Glide:** more images than necessary are fetched from the server rather than from the cache
- **Architecture:** how to best organise complex UI code like for the filter dialog?



Week 3
======

- **Lecture:** Networking and Data Persistence
- **Lab:** [Chat Client](https://github.com/weibeld/android-lab3-daniel-hung-ke) with Firebase Real-Time Database
- **Assignment:** [Simple Tweets](https://github.com/weibeld/Simple-Tweets)

Learned Concepts
----------------

- **[OAuth](https://oauth.net/2/):** users authorise an app to access their information on a service (e.g. Twitter) without giving their username and password of this service to the app: the users *authenticate* directly with the service, and the service *authorises* the app to access the users' information. This works only with services that provide an OAuth API (see a list [here](https://github.com/scribejava/scribejava#supports-all-major-10a-and-20-oauth-apis-out-of-the-box)).
- **[DBFlow](https://github.com/Raizlabs/DBFlow):** an ORM (object-relational mapper), alternative to ActiveAndroid, Cupboard, ORMLite, etc.
- **[Firebase](https://firebase.google.com/):** a collection of backend services (real-time database, authentication, cloud messaging, storage, test lab, notifications, remote config, AdMob, and more). Use it whenever your app needs an independently running "server".
- Use the **Data Binding Library** to load Java objects into XML layouts (including the definition of new XML attributes with the `@BindingAdapter` annotation). This is especially useful for ListViews/RecyclerViews by passing the current data object directly into the "item XML layout" in the adapter.

Difficulties
------------

- Next time when working with an OAuth API, use **[ScribeJava](https://github.com/scribejava/scribejava)** directly (instead of the [Codepath OAuth Handler](https://github.com/codepath/android-oauth-handler) which wraps around ScribeJava)
- **Legal matters** with publishing an app on **Google Play:** app store listing (including screenshots) must not contain:
    - Image of movie, music album, etc.
    - Title of a movie, music album, etc.
    - Image of a popular person
    - Logo of a company, organisation, etc.
    - App name must not contain name of a company/organisation that makes the app look like having an official relationship with this company/organisation (e.g. NYT Explore is not allowed as an app name)	
- Create an **abstract RecyclerView adapter** for data binding that can be reused (see a guide [here](https://medium.com/google-developers/android-data-binding-recyclerview-db7c40d9f0e4#.ocqza2i7x)).

Things to Check Out
-------------------

- **[Realm](https://realm.io/):** mobile database (non-SQL and non-ORM)



Week 4
======

- **Lecture:** Advanced Views and Fragments
- **Lab:** [Navigation Drawer](https://github.com/weibeld/android-lab4-du-daniel-lab4)
- **Assignment:** [Simple Tweets](https://github.com/weibeld/Simple-Tweets) (extended with Fragments)


Learned Concepts
----------------

- **[Listener pattern](http://guides.codepath.com/android/Creating-Custom-Listeners):** passing information from an inner object (e.g. fragment) to an outer parent (e.g. activity) without hard-wiring the innner object to the outer parent or the application in general (keep the inner object stand-alone).
- **[EventBus](https://github.com/greenrobot/EventBus):** simplify communication between activities, fragments, etc.
- Use of **managers** to pull out business logic from the low-level implementation


Difficulties
------------

- How to handle the **attachment of fragments to activities** in a robust way
- How to best **organise** complex code in general



Things to Check Out
-------------------

- **[Fabric Twitter Kit](https://fabric.io/kits/android/twitterkit):** embed Twitter content in an app
- **[Product Hunt](https://www.producthunt.com/):** promote your new "product"
- **[Android Clean Architecture](https://github.com/android10/Android-CleanArchitecture):** structure complex Android code into layers with one-way dependencies



Week 5
======

- **Lecture:** Content Providers
- **Lab:** [Google Maps API](https://github.com/weibeld/android-lab5-tuandaniel-2)
- **Interview Prep:** Strings and Arrays
- **Project:** Deals Sprint 1

Learned Concepts
----------------

- **Deep link:** a URL that opens a specific activity in an Android app (e.g. clicking on a Wikipedia article link in the Chrome web browser opens the article in the Wikipedia app)
- **[Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)** by Vincent Driessen
- **Milestones and issues** on GitHub
- **[Square's Java code style](https://github.com/square/java-code-styles):** can be installed in Android Studio and then selected in *Preferences > Code Style*
- **[EditorConfig](http://editorconfig.org/):** enforce coding styles on compatible IDEs by a simple external `.editorconfig` file (supported by Android Studio out-of-the-box)
- **[Exercism](http://exercism.io/):** small programming exercises in different languages to prepare for interview exercises

Project
-------

- Learning how to use Firebase by the [Google Firebase Android Codelab](https://codelabs.developers.google.com/codelabs/firebase-android/#0)



Week 6
======

- **Lecture:** Drawables, Styles, and Themes
- **Lab:** [Theme Switcher](https://github.com/weibeld/android-lab6-phong-daniel)
- **Interview Prep:** Big-O Notation and Hashtables
- **Project:** Deals Sprint 2

Learned Concepts
----------------

- Different types of Android **Drawables**: shape drawable, state-list drawable, layer-list drawable
- **Style:** collection of view attributes that can be applied to *individual* views
- **Theme:** collection of styles that are automatically applied to *all* views of an app or activity that support them
- Implementation of the **hashtable** data structure: keys mapped to hash value mapped to array indices, and values stored in array

Difficulties
------------

- How to use the `attrs.xml` file and `?attr` and `?android:attr` attributes for defining and using themes
- How to use the Firebase Real-Time Databa

Things to Check Out
-------------------

- **[git-flow](https://github.com/nvie/gitflow):** a command line tool to simplify the usage of the Git branching model by Vincent Driessen
    - See usage overview [here](https://github.com/nvie/gitflow)
- **[InterviewBit](https://www.interviewbit.com):** theory and exercises about important topics for interviews
- **[InterviewCake](https://www.interviewcake.com/):** programming interview questions
- **[HackerRank](https://www.hackerrank.com):** large collection of programming exercises to be solved online
- Java **Features and Promises** to prevent callback hell
- **[RxJava](https://github.com/ReactiveX/RxJava)** to prevent callback hell

Project
-------

### Learned

- **Firebase data retrieval model:** a "query" is a set of listeners that listens on objects in the database matching certain constraints (like `WHERE`, `ORDER BY` in SQL). However, unlike a SQL query, a Firebase query does not retrieve this data just a single time (as a snapshot of the data at a specific point in time), but persistently "listens" on this data and triggers the listener callbacks whenever the data matched by the query changes (e.g. an object "entering" or "leaving" the query due to updating the properties of an object, insertion of a new object or deletion of an existing object from the database, etc.).
- **Firebase authentication** by email/password, Google (OAuth), and anonymously

### Difficulties

- How to **organise Firebase database code** (e.g. queried data is returned in a listener callback, at which point we can query more data which is in turn returned in another listener callback, and so on) $\longrightarrow$ [Callback Hell](http://callbackhell.com/) (pyramid of anonymous class and callback definitions)
- How to best handle **static data in the Firebase Database**, i.e. data which needs to be queried only once and does not need to be updated in real time (e.g. user information). Does it make sense to store it in the Fireabase Real-Time Database, or is it better to store it in a non-real-time database?



Week 7
======

- **Lecture:** Animations and Gestures
- **Lab:** [Snackbar, Palette, and Shared Element Activity Transitions](https://github.com/weibeld/android-lab7-phong-daniel-lab7)
- **Project:** Deals Sprint 3

Learned Concepts
----------------

- **Tween animations:** animations with a starting and ending point (different from animations used in games)
- Any view can be animated with `ObjectAnimator` and `AnimatorSet`
- Animations can be defined in XML under `res/animator`
- A special type of animations are **activity transitions:** every activity has an enter and exit transition

Things to Check Out
-------------------

- **[Amazon DynamoDB](https://aws.amazon.com/dynamodb/):** cloud-based NoSQL database for document and key-value data (use it for storing independent data that can be retrieved with a key, like in a hashtable)
- **[Google Megastore](https://research.google.com/pubs/pub36971.html):** cloud-based NoSQL database, similar to Amazon DnyamoDB
- **[AWS Lambda (Amazon)](https://aws.amazon.com/lambda/):** computing-as-a-service platform to run arbitrary code



Week 8
======

- **Lecture:** Dependency Injection and ReactiveX
- **Project:** Internal Demo Day on Thursday, 6 April

Learned Concepts
----------------

- **Dependency injection:** passing of concrete *service objects* implementing certain *interfaces* to *clients* by an *injector*
    - 4 components:
        1. *Client:* any object that is in need of other objects (dependencies)
        2. *Service objects:* the objects on which a client depends on (dependencies)
        3. *Injector:* the module that creates service objects and passes them to the clients
        4. *Interfaces:* defining the functionality of the service objects passed from the injector to the client
    - Goal: move the decision of which objects (configurations) to use from the low-level code to a centralised high-level module. This facilitates managing and changing configurations, as everything can be managed in one place rather than in many (probably deeply nested) spread-out objects.
        - Eliminate object creations in client objects (e.g. by `new`)
    - The service objects can be injected to the client through the client constructor, setter methods, or fields (done in Android by Dagger)
- **Reactive Programming:** programming paradigm centered around transforming one or more data input streams to a data output stream (think of a logic gate in computer architecture). The output stream is adapted constantly according to the input streams.
    - [ReactiveX](http://reactivex.io/): reactive programming specification based on the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) with implementations for many programming languages and platforms (e.g. RxJava for Java, RxAndroid for Android)



Things to Check out
-------------------

- [Guice](https://github.com/google/guice): dependency injection framework for Java
- [Dagger](https://google.github.io/dagger/): dependency injection framework for Android
- [RxJava](https://github.com/ReactiveX/RxJava): ReactiveX framework for Java
- [RxAndroid](https://github.com/ReactiveX/RxAndroid): ReactiveX framework for Android


