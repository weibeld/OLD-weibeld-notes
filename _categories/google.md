---
layout: default
---


<h1 class="page-heading">Google Services</h1>

<ul>
  {% for note in site.google %}
      <li>
        <a href="{{ note.url | relative_url }}">
          {{ note.title}}
        </a>
      </li>
  {% endfor %}
</ul>
