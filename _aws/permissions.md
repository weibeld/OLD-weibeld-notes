---
title:  Amazon S3 Permissions
author: Daniel Weibel
date:   5 December 2013
last_updated: 5 December 2013
---

Every file, folder, and bucket on S3 has a so called **Access Control List (ACL)**.

An ACL has the form:

~~~
User       Full Control	  Read   Write   Read_ACP   Write_ACP
--------------------------------------------------------------
Owner          [ ]        [ ]     [ ]      [ ]         [ ]
Everyone       [ ]        [ ]     [ ]      [ ]         [ ]
...
~~~


It can be set for every file, folder, and bucket independently.

In my case, [Cyberduck](https://cyberduck.io/), when uploading a file or creating a folder, set by default "Full Control" to the "Owner" and "Read" to "Everyone".

Thus, all my files could be downloaded by any Internet user having the file's URL.

This behaviour of Cyberduck can be changed in *Preferences > Transfers > Permissions > Upload > Change permissions > to these permissions*, and then set *Read*, *Write*, and *Execute* for the owner and nothing for the others.

This way, when uploading a file, Cyberduck sets in the ACL for the file "Full Control" for "Owner" and nothing else.

-------------

However, the existing files still had "Read" for "Everyone" in their ACL.

ACLs of files can be edited one-by-one in Cyberduck or in the S3 Management Console.

Changing the ACLs of a bulk of files at once can be done with Bucket Explorer:

*Select folder or bucket > click Batch Operation > select Update ACL > set the desired ACL for ALL files and folders within that folder or bucket (recursively) > Update ACL*.
