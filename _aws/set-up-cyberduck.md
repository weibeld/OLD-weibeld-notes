---
title:  Access Amazon S3 With Cyberduck
author: Daniel Weibel
date:   28 December 2015
last_updated: 28 December 2015
---

[Cyberduck](https://cyberduck.io/) is an FTP client that can be used to easily access and manage Amazon S3 buckets. It is an alternative to the [AWS Management Console](https://aws.amazon.com/console/) for managing your files on Amazon S3.

Note that uploads are considerably faster via Cyberduck (or another S3 client) than via the AWS Management Console.

# Setup

- Download and install Cyberduck from [here](http://cyberduck.io)
- In Cyberduck, click *Open Connection*
    - Select *"S3 (Amazon Simple Storage Server)"*
    - For the username, enter your *AWS access key*, and for the password, enter your *AWS secret access key* (you can retrieve these credentials in the [AWS Management Console](https://aws.amazon.com/console/))
- It's practical to set a bookmark for this connection: *Bookmark > New Bookmark*

## Permissions

It is important to set the permissions for the uploaded files correctly. Otherwise, your private files might end up publicly accessible.

- In *Preferences > Transfers > Permissions > Uploads* check *to these permissions*
- Set the permissions for files and folders
    - If the files are private, enable *Read*, *Write*, *Execute* permissions for the *Owner*, and no permissions for *Group* and *Other*
