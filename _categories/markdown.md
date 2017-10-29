---
layout: default
---

{% assign collection = site.collections | where: "label", "markdown" | first %}

{% include set-page-title.html %}

{% include doc-list.html collection=collection %}
