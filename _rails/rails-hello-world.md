---
title: Ruby on Rails Hello World
author: Daniel Weibel
date: 21 April 2014
last_updated: 21 April 2014
---

Steps for installing and setting up Ruby on Rails, generating an example Ruby on Rails app, and putting it in production mode on Heroku. The assumed operating system is Mac OS X (tested on OS X 10.9.1).

Some of the following steps wouldn't be really necessary for such a simple hello world app, however, the aim is to show all the basic important steps for creating and deploying serious apps.

# Check Which Ruby Version To Use

Check the recommended Ruby version for the current Ruby on Rails release.

# Install Required Ruby Version With rbenv

Install rbenv:

~~~bash
brew install rbenv ruby-build
~~~

Add the following to `~/.bash_profile` and restart shell:

~~~bash
if which rbenv >/dev/null; then eval "$(rbenv init -)"; fi
~~~

List available Ruby versions:

~~~bash
rbenv install -l
~~~

Install desired Ruby version and set as global default:

~~~bash
rbenv install 2.2.3
rbenv global 2.2.3
~~~

Note: if the installation aborts with an error "dtrace: failed to compile script probes.d: Preprocessor not found", try to install with:

~~~bash
CONFIGURE_OPTS="--disable-dtrace" rbenv install 2.1.0
~~~

# Install Bundler and Ruby on Rails

~~~bash
gem install bundler
gem install rails
~~~

After this, restart shell.


# Install Ruby on Rails Plugin for Vim

If you use Vim for editing Ruby on Rails source files, this is recommended. The rails.vim plugin is [here](https://github.com/tpope/vim-rails)


# Install PostgreSQL

Note: if the app uses a database, a database must be installed on the local machine for development mode. Typically used databases are SQLite, MySQL, and PostgreSQL. SQLite is the only one that seems to be installed by default on Mac.

Heroku, the production server, uses PostgreSQL by default. It is advisable to use the same database for development and production. Therefore, if the app is to be deployed to Heroku, it's recommended to install PostgreSQL on the local machine and use it as the development database.

~~~bash
brew install postgres
~~~

## PostgreSQL Basics

Start PostgreSQL shell:

~~~bash
psql
~~~

Here are some basic PostgreSQL shell commands:

~~~
db=# select * from pg_roles;  /* Display all PostgreSQL users and their privileges. In database.yml, the user in development mode must be one of these. */
db=# \list                    /* List all databases */
db=# drop database db_name;   /* Delete a specific database (db_name) */
db=# \c db_name	              /* Connect to a specific database (db_name) */
db=# \dt                      /* List all tables in current database */
db=# \q	                      /* Exit PostgreSQL shell */
~~~

Tip: enclose `db_name` or any other name in double quotes, if syntax errors occur.

# Generate a Starter Ruby on Rails App

The [RailsApps](https://github.com/RailsApps) project provides barebones Rails apps that can be used as a starting point for building own apps. The starter apps can be installed and set up interactively with the Rails Composer from the same project. To generate a starter app with Rails Composer, type:

~~~bash
rails new hello-world -m https://raw.github.com/RailsApps/rails-composer/master/composer.rb
~~~

Rails Composer asks a couple of questions. Choose (for example):

~~~
Build a starter application?	Build a RailsApps example application
Starter apps for Rails 4.1.	rails-devise
Web server for development?	Thin
Web server for production?	Thin
Database used in development?	PostgreSQL
Template engine?			ERB
Continuous testing?		None
Front-end framework?		Bootstrap 3.0
Add support for sending email?	Gmail
Devise modules?			Devise with default modules
Use a form builder gem?		SimpleForm
~~~

The following questions are important because we use PostgreSQL as the development database:

~~~
Username for PostgreSQL?(leave blank to use the app name)
	Choose your UNIX username. The reason is that PostgreSQL has by default
	a user with all the needed privileges with that name.
Host for PostgreSQL in database.yml? (leave blank to use default socket conn.)	
	Leave blank
Password for PostgreSQL user dw? 
	Choose what you want
~~~

# Run App in Development Mode

Start server (from within project directory):

~~~bash
rails server
~~~

The app is now served at <http://localhost:3000/>

Stop server with *Ctr-C*

If the starter app includes a login, the existing users and their credentials are in `config/secrets.yml`.

Now the app works in development mode. Let's go over to **production mode**.

# Set Up a Heroku Environment

- First, create an account on the [Heroku website](https://heroku.com).
- Install the Heroku Toolbelt from [here](https://toolbelt.heroku.com/)
- Create SSH keys
    ~~~bash
    ssh-keygen -t rsa
    ~~~
- Add public SSH key to Heroku
    ~~~bash
    heroku keys:add
    ~~~



# Create an App Container on Heroku

~~~bash
heroku create hello-world
~~~

Most of the following information of deploying a RailsApps starter app to Heroku is also described [here](https://guides.railsapps.org/rails-deploy-to-heroku.html)



# Precompile Assets

Note: Rails compresses (compiles) CSS and JavaScript files (assets) before sending them to the browser. The below command makes sure that this is done at the time of deployment and not at the time of every single request.

~~~bash
rake assets:precompile
~~~

-------

# Add the rails_12factor Gem to Production Mode

Note: this seems to be missing from the example app. It makes sure that the assets are rendered correctly by Heroku.

Add the following to the Gemfile:

~~~
gem 'rails_12factor', group: :production
~~~



# Adapt Configuration

All the values in `config/secrets.yml` must evaluate to meaningful strings. They can be pure strings, or they can be of the form `ENV["VARIABLE"]`, in which case they evaluate to the value of the UNIX environment variable `VARIABLE`.

Set environment vars on Heroku:

~~~bash
heroku config:set VAR=value
~~~

Display all Heroku environment vars:

~~~bash
heroku config
~~~



# Add Procfile for Heroku

Note: this sets to use the Thin application server on Heroku instead of the less robust WEBrick.

Create file Procfile in root of project directory with content:

~~~
web: bundle exec rails server thin -p $PORT -e $RACK_ENV
~~~



# Make a Git commit

Note: the Git repository has been created by Rails Composer.



# Push App to Heroku

Note: this pushes the head of the master branch of the Git repository to Heroku. After every local change, a Git commit is necessary before executing below command again.

~~~bash
git push heroku master
~~~



# Set Up Database on Heroku

~~~bash
heroku run rake db:migrate
heroku run rake db:seed
~~~



# Access App in Production Mode

~~~bash
heroku open
~~~

