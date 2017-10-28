---
layout: default
---

{% assign collection = site.collections | where: "label", "aws" | first %}

{% include doc-list.html collection=collection %}
