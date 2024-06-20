---
layout: default
title: {{ page.title }}
---

<div class="project-details">
  <h1>{{ page.title }}</h1>
  <div class="project-description">
    <h2>Description:</h2>
    <p>{{ page.description }}</p>
  </div>
  <div class="project-technologies">
    <h2>Technologies Used:</h2>
    <p>{{ page.technologies }}</p>
  </div>
  <div class="project-link">
    <h2>GitHub Repository:</h2>
    <p><a href="{{ page.github_url }}">{{ page.github_url }}</a></p>
  </div>
</div>

<style>
  .project-details {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: #2A273F;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .project-details h1 {
    font-size: 2.5rem;
    color: #E2A0A8;
    text-align: center;
  }
  .project-details h2 {
    font-size: 1.5rem;
    color: #E2A0A8;
    margin-top: 1.5rem;
  }
  .project-details p {
    color: #E0DEF4;
    font-size: 1.2rem;
    line-height: 1.6;
  }
  .project-link a {
    color: #00e676;
    text-decoration: none;
  }
  .project-link a:hover {
    color: #00c853;
  }
</style>

