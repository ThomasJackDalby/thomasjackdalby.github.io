---
layout: page
title: Archive
permalink: /archive/
---

{% for post in site.posts %}
  <div>
    <h3 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>
    <span class="post-date">{{ post.date | date_to_string }}</span>
  </div>
{% endfor %}
