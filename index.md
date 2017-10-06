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
          <a href="/categories/{{ coll.label}}">
            {{ coll.title}}
          </a>
        </li>
      {% endif %}
    {% endfor %}
    
    {% for page in site.android %}
      <li>
        <span class="post-meta">
          {% if page.last_updated %}
            Last updated {{ page.last_updated | date: site.date_format }}
          {% else %}
            {{ page.date | date: site.date_format }}
          {% endif %}
        </span>
           
        <h2>
          <a href="{{ page.url | relative_url }}">
            {{ page.title | escape }}
          </a>
        </h2>
      </li>
    {% endfor %}
  </ul>
