---
layout: default
---

{% assign collection = site.collections | where: "label", "google" | first %}
<ul class="breadcrumbs">
  <li><a href="{{ "/" | relative_url }}">Categories</a></li>
  <li>{{ collection.title }}</li>
</ul>

<h1 class="categories-title">{{ collection.title }}</h1>

<ul>
  {% for note in site.google %}
      <li>
        <a class="exposed-link" href="{{ note.url | relative_url }}">
          {{ note.title}}
        </a>
      </li>
  {% endfor %}
</ul>
