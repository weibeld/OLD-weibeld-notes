---
layout: default
---

<h1 class="categories-title">Categories</h1>

<ul>
  {% for coll in site.collections %}
    {% if coll.title %}
      <li>
        {% assign category_url = "/categories/" | append: coll.label %}
        <a class="exposed-link" href="{{ category_url | relative_url }}">
          {{ coll.title}}
        </a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
