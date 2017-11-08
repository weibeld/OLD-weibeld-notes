---
layout: default
---

<!-- Create a comma-separated string of all the sizes of the collections -->
{% assign sizes = "" %}
{% for coll in site.collections %} 
    {% if coll.title %}
      {% assign str = "" %}
      {% if coll.docs.size < 10 %}
        {% assign str = coll.docs.size | prepend: "00" %}
      {% elsif coll.docs.size < 100 %}
        {% assign str = coll.docs.size | prepend: "0" %}
      {% else %}
        {% assign str = coll.docs.size %}
      {% endif %}
      {% assign sizes = sizes | append: str | append: "," %}
    {% endif %}
{% endfor %}

<!-- Remove last comma of string -->
{% assign length = sizes | size | minus: 1 %}
{% assign sizes = sizes | slice: 0, length %}

<!-- Split string into array, sort DESC, and remove duplicate elements -->
{% assign sizes = sizes | split: "," | sort | reverse | uniq %}
<div>
  <!-- For each size, print all the collections with this size -->
  {% for s in sizes %}
    {% for coll in site.collections %}
      {% if coll.title and coll.label != "misc" and coll.label != "trash" and coll.label != "experiences" %}
        {% assign t = s | plus: 0 %}
        {% if coll.docs.size == t %}

          {% include collection-box.html collection=coll %}
          
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}

  {% assign c = site.collections | where: "label", "experiences" | first %}
  {% include collection-box.html collection=c %}
  {% assign c = site.collections | where: "label", "misc" | first %}
  {% include collection-box.html collection=c %}
  {% assign c = site.collections | where: "label", "trash" | first %}
  {% include collection-box.html collection=c %}
</div>



<!-- {% assign sorted = site.collections | sort: 'label' %}
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
            <div class="number-of-docs">{{ coll.docs.size }} documents</div>
            <p>{{ coll.description }}</p>
        </div>
          </a>
    {% endif %}
  {% endfor %}
</div> -->
