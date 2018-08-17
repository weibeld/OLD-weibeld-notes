---
title: Spring
author: Daniel Weibel
date: 17 August 2018
last_updated: 17 August 2018
---

# What is Spring?

[Spring](https://spring.io/) is a massive framework for making the development of Java enterprise applications more efficient. It includes facilities for many different principles and technologies:

- Dependency injection
- Data binding
- Validation
- Testing
- Data access objects
- MVC web applications
- Reactive web applications
- AMQP messaging

And many more (see [here](https://spring.io/projects/spring-framework)).

These concepts are implemented in different components withing the Spring framework, which are in turn part of different [Spring projects](https://spring.io/projects).

For example, the MVC web application framework is implemented in the [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html) component, and the reactive web application framework is implemented in the [Spring WebFlux](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html) component. Some concepts like dependency injection are at the very heart of the Spring framework and are implemented as a [core technology](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html).

Summarising, Spring does not just one thing, but it provides means to do many different things. The motto of Spring is to provide tools that take care of the *plumbing* of different types of enterprise applications, so that developers can focus on the *business logic* of these applications. 

# Using Spring

For using Spring, you basically include a set of relevant Spring JAR files in the classpath of your application. If you use Gradle, you can do this by declaring the relevant dependencies in your `build.gradle` file, for example, like this:

~~~gradle
dependencies {
    compile("org.springframework.boot:spring-boot-starter-web")
    compile("org.springframework.boot:spring-boot-starter-thymeleaf")
    compile("org.springframework.boot:spring-boot-devtools")
}
~~~

Note that the group ID of most Spring dependencies starts with `org.springframework`.

You can then use the Spring classes and annotations in your application.

What you do now, is basically building your application according to the Spring framework by using the relevant Spring classes and annotations. Throughout all this, your end-goal is to achieve efficient dependency injection, MVC web request processing, unit testing, or whatever you want to achieve with the Spring framework.

You are free to use only those parts of the Spring framework that you want, and ignore others. You can solve certain tasks with the Spring framework, and solve others in a traditional way without Spring. 

In the end, the application is typically started with a Spring application runner that is invoked in the main method of your application. This application runner, which is part of the Spring framework, does all the necessary initialisations and configurations, as defined in your code, and then starts your actual application.

By the means of the [Spring Boot Gradle Plugin](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/html/), you can also create an executable "fat-JAR" file of your application, that is, a JAR file that contains your application and all its dependencies as a single executable file.

# Spring Boot

[Spring Boot](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/html/) is a Spring [project](https://spring.io/projects) that aims at reducing the manual configuration of Spring applications. It provides sensible default configurations so that you don't have to define them yourself.

It does so by providing, among others, so-called "starter" dependencies, that bundle sets of other dependencies that are often used together. For example, the `build.gradle` example above uses Spring Boot dependencies:

~~~gradle
org.springframework.boot:spring-boot-starter-web
org.springframework.boot:spring-boot-starter-thymeleaf
org.springframework.boot:spring-boot-devtools
~~~

The [Spring Boot Gradle Plugin](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/html/), mentioned above, is also part of the Spring Boot project.

There are Spring Boot starter dependencies for most types of applications that can be built with Spring.

I think Spring Boot is an excellent way to get quickly started with application development and not loose too much time with initial configurations. However, according to the [documentation](https://docs.spring.io/spring-boot/docs/2.0.4.RELEASE/reference/htmlsingle/), once the requirements of your application diverge from the defaults provided by Spring Boot, Spring Boot gets out of your way quickly, and lets you define the required configurations.
