---
layout: default
---

{% assign collection = site.collections | where: "label", "latex" | first %}

{% include set-page-title.html %}

{% include doc-list.html collection=collection %}
