---
layout: default
---

{% assign collection = site.collections | where: "label", "google" | first %}
<ul class="breadcrumbs">
  <li><a href="{{ "/" | relative_url }}">Categories</a></li>
  <li>{{ collection.title }}</li>
</ul>

<h1 class="categories-title">{{ collection.title }}</h1>

<div class="doc-list">
  {% for note in site.google %}
        <a class="doc-list-link" href="{{ note.url | relative_url }}">
          {{ note.title}}
        </a>
  {% endfor %}
</div>
