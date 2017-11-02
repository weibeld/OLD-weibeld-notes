---
title: Reading Large CSV Files Into R
author: Daniel Weibel
date: 4 March 2015
last_updated: 4 March 2015
---

Experiment with an [OpenCellID](https://opencellid.org/) file of 330 MB.

|--------------------------------------+-----------------------------------+---------------------|
|                                      |                                   |                     | 
|:------------------------------------ |:----------------------------------|--------------------:|
|Plain read                            | read.csv(file)                    |      3 min. 24 sec. |
|With colClasses (1)                   | read.csv(file, colClasses)        |             57 sec. | 
|With colClasses (1) and nrows         | read.csv(file, colClasses, nrows) |             55 sec. |
|With colClasses (2) and nrows         | read.csv(file, colClasses, nrows) |             55 sec. |
|With colClasses (3) and nrows         | read.csv(file, colClasses, nrows) |             60 sec. |
+--------------------------------------+-----------------------------------+---------------------|

Plain read
----------

~~~r
read.csv(file)
~~~

3 min. 24 sec

Adding colClasses argument
-------------------------

colclasses: 'radio' as factor, 'lat, 'lon', 'cid' numeric, all others integer

~~~r
read.csv(file, colClasses)
~~~

57 sec.


Adding nrows argument
---------------------

colclasses: 'radio' as factor, 'lat, 'lon', 'cid' numeric, all others integer

~~~r
read.csv(file, colClasses, nrows)
~~~

55 sec.


colClasses variations: numeric instead of integer
-------------------------------------------------

colclasses: 'radio' as factor, all others as numeric

~~~r
read.csv(file, colClasses, nrows)
~~~

55 sec.


colClasses variations: factors instead of integer
-------------------------------------------------

colclasses: 'lat', 'lon', 'cid' as numeric, all others as factors

~~~r
read.csv(file, colClasses, nrows)
~~~

60 sec.

Conclusion
----------

* Setting colClasses brings a huge performance gain
* Setting addtionally nrows further improves it a little bit
* For speed, it doesn't matter much if a column has class integer or numeric
  * However, with integer, if a value is greater than $2^{31}$, there's an error
  * For space, there might be a difference, as integer uses 32 bits and numeric probably 64 bit (numeric is the same as double)
* Making a column with integers class factor slows the execution time down
