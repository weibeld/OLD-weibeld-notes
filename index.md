---
layout: default
---

<!--<h1 class="categories-title">Categories</h1>-->

<div>
  {% for coll in site.collections %}
    {% if coll.title %}
        {% assign category_url = "/categories/" | append: coll.label %}
          <a class="collection-box-link" href="{{ category_url | relative_url }}">
        <div class="collection-box">
            <h1>{{ coll.title}}</h1>
            <p>{{ coll.description }}</p>
        </div>
          </a>
    {% endif %}
  {% endfor %}
</div>
