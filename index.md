---
layout: default
---

<!--<h1 class="categories-title">Categories</h1>-->

<!--<div id="test1">500 px</div>
<div id="test2">1 in</div>
<div id="test3">1 cm</div>-->

{% include search-box.html %}


<div>
  {% for coll in site.collections %}
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
