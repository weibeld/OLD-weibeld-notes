---
title:  MySQL Cheatsheet
author: Daniel weibel
date:   November 2015
last_updated: 15 May 2016
---

# Login
~~~bash
$ mysql -u weibel -p           # Log in as 'weibel' with password prompt
$ mysql -u weibel -pdaniel     # Log in as 'weibel' with password 'daniel'
$ mysql -u weibel -pdaniel db  # Log in and select database 'db'
~~~

# Exit MySQL
~~~sql
mysql> exit
~~~

# List users
~~~sql
mysql> select User,Host from mysql.user;
~~~

# Create a new user
~~~sql
mysql> create user 'weibel'@'localhost' identified by 'password';
~~~

# List databases that are accessible for current user
~~~sql
mysql> show databases;
~~~

# Change to a specific database
~~~sql
mysql> use db_name;
~~~

# Show all tables in the current database
~~~sql
mysql> show tables;
~~~

# Select 10 rows
~~~sql
mysql> select * from tbl_name limit 10;
~~~

# Delete all rows from a table
~~~sql
mysql> delete from tbl_name;
~~~

# Show column data types
~~~sql
mysql> show columns from tbl_name;
~~~

# Count number of columns in table
~~~sql
mysql> select count(*)
       from information_schema.columns
       where table_name='tbl_name';
~~~

# Create a new database (login to MySQL as root)
~~~sql
mysql> create database new_db;
~~~

# Create table in new DB with schema of a table in an existing DB
~~~sql
mysql> create table new_db.tbl_name like old_db.tbl_name;
~~~

# Create a table by defining all the columns manually
~~~sql
mysql> create table connected_devices (
         ap_id                 int,
         device_mac            char,
         timestamp             timestamp,
         interface             varchar(255)
       );
~~~

# Grant full DB access to another user
~~~sql
mysql> grant all on new_db.* to 'username'@'host'
~~~

# Load data from a CSV file into a table

~~~bash
$ mysql --local-infile -u weibel -p  # Start MySQL with 'local infile' enabled
~~~

~~~sql
mysql> load data local infile 'file.csv' into table tbl_name
       fields terminated by ',' enclosed by '"';
~~~

