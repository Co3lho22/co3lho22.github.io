---
layout: default
title: Writings
permalink: /writings/
---

<div class="container">
  <div class="page-header">
    <h1 class="page-title">Writings</h1>
    <p class="page-description">Technical research and security insights</p>
  </div>

  <div class="posts-grid">
    {% for post in site.posts %}
    <article class="post-card">
      <header>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
          {% if post.category %} • {{ post.category | capitalize }}{% endif %}
        </div>
      </header>
      {% if post.excerpt %}
      <div class="post-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 30 }}
      </div>
      {% endif %}
      {% if post.tags %}
      <div class="post-tags">
        {% for tag in post.tags %}
        <a href="{{ '/tags/' | relative_url }}#{{ tag | slugify }}" class="tag">{{ tag }}</a>
        {% endfor %}
      </div>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>

