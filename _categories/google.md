---
layout: default
---

{% assign collection = site.collections | where: "label", "google" | first %}

{% include doc-list.html collection=collection %}
