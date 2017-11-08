---
layout: default
---

<!-- Goal: sort collections by the number of documents they contain (except -->
<!-- some special collections, like "misc", "trash", etc.). -->

<!-- Create a comma-separated string of all the sizes of the collections -->
{% for coll in site.collections %} 
    {% if coll.title %}
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
        {% assign i = s | plus: 0 %}
        {% if coll.docs.size == i %}

          {% include collection-box.html collection=coll %}
          
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}

  <!-- Print special collections at the end -->
  {% assign c = site.collections | where: "label", "experiences" | first %}
  {% include collection-box.html collection=c %}
  {% assign c = site.collections | where: "label", "misc" | first %}
  {% include collection-box.html collection=c %}
  {% assign c = site.collections | where: "label", "trash" | first %}
  {% include collection-box.html collection=c %}
</div>
