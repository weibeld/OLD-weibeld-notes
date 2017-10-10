---
layout: default
---

<!--<h1 class="categories-title">Categories</h1>-->

<div id="test">&nbsp;</div>


<div>
  {% for coll in site.collections %}
    {% if coll.title %}
        {% assign category_url = "/categories/" | append: coll.label %}
          <a class="collection-box-link" href="{{ category_url | relative_url }}">
        <div class="collection-box">
            <div class="collection-box-title">
              <img src="{{ coll.image | relative_url }}" height="50px">
              <h1>{{ coll.title}}</h1>
            </div>
            <p>{{ coll.description }}</p>
        </div>
          </a>
    {% endif %}
  {% endfor %}
</div>
