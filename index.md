---
layout: default
---

<header role="banner">
    <h1><a href="{{ "/" | relative_url }}">{{ site.title | escape }}</a></h1>
</header>

  <h1 class="page-heading">{{ site.android.title }}</h1>

  <ul>
    {% for coll in site.collections %}
      {% if coll.title %}
        <li>
          <a href="/mynotes/categories/{{ coll.label}}">
            {{ coll.title}}
          </a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
