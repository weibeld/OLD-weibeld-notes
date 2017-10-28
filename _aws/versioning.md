---
title:  Amazon S3 Versioning
author: Daniel Weibel
date:   8 January 2014
last_updated: 8 January 2014
---

The versioning feature of Amazon S3 is very well described [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html).

It is quite intuitive and the analogy of regarding every object as a stack of versions seen from above works very well:

- Every version of an object is the complete object (not only a diff).
- Overwriting an object corresponds to pushing a new version on the stack.
- Deleting an object corresponds to pushing a special invisible item (delete marker) on the stack that makes the whole stack invisible.
- An administrator can delete every version on a stack separately by the means of its version ID.
- A previous version can be restored by making it the new top of the stack.

Once versioning is turned on, it can be suspended. This means first of all that **none** of the existing versions on the stacks will be modified or deleted. The effect is that newly added items are handled on top of the existing stacks (if any) as if versioning would be disabled, i.e. overwriting and deleting of these new stack items are permanent. When versioning is re-enabled, all the version stacks are still there.

# Amazon S3 Versioning With Cyberduck

Enable versioning for a bucket:
- `Cmd-I` (*File > Info*) on any file in the bucket
- Tab "S3"
- Tick "Bucket Versioning"
- Unticking this suspends versioning

Manage versions of an object:
- *View > Show Hidden Files* shows the (invisible) versions of an object in gray.
- Each version can be read, deleted, etc. like a normal file.
- Every version can be restored by *Right-click > Revert*. This puts a copy of this version on the top of the stack.
- The delete marker is shown as a special version with size 0 B
- **Caution:** if versioning is suspended, "Show Hidden Files" doesn't display the version, however, they are still there.

> Note: I enabled versioning on bucket weibeld on 08.01.2014.
