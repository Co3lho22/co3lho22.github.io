---
layout: default
title: Projects
permalink: /projects/
---

<div class="container">
  <div class="page-header">
    <h1 class="page-title">Projects</h1>
    <p class="page-description">Open source security tools and research projects</p>
  </div>

  <div class="posts-grid">
    {% for project in site.projects %}
    <article class="post-card">
      <header>
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <div class="post-meta">
          {% if project.github %}
          <a href="https://github.com/{{ project.github }}" target="_blank" rel="noopener">GitHub</a>
          {% endif %}
          {% if project.status %} • Status: {{ project.status | capitalize }}{% endif %}
        </div>
      </header>
      {% if project.excerpt %}
      <div class="post-excerpt">
        {{ project.excerpt | strip_html | truncatewords: 30 }}
      </div>
      {% endif %}
      {% if project.tags %}
      <div class="post-tags">
        {% for tag in project.tags %}
        <a href="{{ '/tags/' | relative_url }}#{{ tag | slugify }}" class="tag">{{ tag }}</a>
        {% endfor %}
      </div>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>

