---
layout: default
title: Writeups
permalink: /writeups/
---

<div class="container">
  <div class="page-header">
    <h1 class="page-title">Writeups</h1>
    <p class="page-description">CTF challenges and pentesting lab solutions</p>
  </div>

  <div class="posts-grid">
    {% for writeup in site.writeups %}
    <article class="post-card">
      <header>
        <h3><a href="{{ writeup.url | relative_url }}">{{ writeup.title }}</a></h3>
        <div class="post-meta">
          <time datetime="{{ writeup.date | date_to_xmlschema }}">{{ writeup.date | date: "%B %d, %Y" }}</time>
          {% if writeup.platform %} • {{ writeup.platform | capitalize }}{% endif %}
          {% if writeup.difficulty %} • <span class="difficulty difficulty-{{ writeup.difficulty }}">{{ writeup.difficulty | capitalize }}</span>{% endif %}
        </div>
      </header>
      {% if writeup.excerpt %}
      <div class="post-excerpt">
        {{ writeup.excerpt | strip_html | truncatewords: 30 }}
      </div>
      {% endif %}
      {% if writeup.tags %}
      <div class="post-tags">
        {% for tag in writeup.tags %}
        <a href="{{ '/tags/' | relative_url }}#{{ tag | slugify }}" class="tag">{{ tag }}</a>
        {% endfor %}
      </div>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>

