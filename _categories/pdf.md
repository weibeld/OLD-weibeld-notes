---
layout: default
---

{% assign collection = site.collections | where: "label", "pdf" | first %}

{% include doc-list.html collection=collection %}
