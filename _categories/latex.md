---
layout: default
---

{% assign collection = site.collections | where: "label", "latex" | first %}

{% include doc-list.html collection=collection %}
