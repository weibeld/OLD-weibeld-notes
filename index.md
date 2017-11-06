---
layout: default
---

{% assign sorted = site.collections | sort: 'label' %}

<div>
  {% for coll in sorted %}
    {% if coll.title %}
        {% assign category_url = "/" | append: coll.label %}
          <a class="collection-box-link" href="{{ category_url | relative_url }}">
        <div class="collection-box">
            <div class="collection-box-heading">
              <img src="{{ coll.image | relative_url }}" height="50px">
              <h1>{{ coll.title}}</h1>
            </div>
            <p>{{ coll.description }}</p>
        </div>
          </a>
    {% endif %}
  {% endfor %}
</div>
