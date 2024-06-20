---
layout: default
title: Projects
---

<div class="projects-header">
  <h1>Projects</h1>
</div>

<div class="filters">
  <input type="text" id="searchBar" placeholder="Search for title...">
  <div class="tags">
    <span class="tag" onclick="filterProjects('Security')">Security</span>
    <span class="tag" onclick="filterProjects('Rust')">Rust</span>
    <span class="tag" onclick="filterProjects('Critical Systems')">Critical Systems</span>
    <span class="tag" onclick="filterProjects('Topic2')">Topic2</span>
    <span class="tag" onclick="filterProjects('Topic3')">Topic3</span>
    <span class="tag" onclick="filterProjects('Topic4')">Topic4</span>
  </div>
</div>

<div class="projects-list">
  {% for project in site.projects %}
  <div class="project-item" data-tags="{{ project.tags | join: ' ' }}">
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.description }}</p>
    <div class="tags">
      {% for tag in project.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

<script>
  function filterProjects(tag) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
      if (project.getAttribute('data-tags').includes(tag)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  }

  document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
      const title = project.querySelector('h2').textContent.toLowerCase();
      if (title.includes(query)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
</script>

<style>
  .projects-header {
    text-align: center;
    padding: 2rem 0;
    background: #1e1e1e;
  }
  .projects-header h1 {
    font-size: 3rem;
    color: #E2A0A8; /* Muted Rose */
  }
  .filters {
    text-align: center;
    margin: 1rem 0;
  }
  #searchBar {
    padding: 0.5rem;
    font-size: 1rem;
  }
  .tags {
    margin: 1rem 0;
  }
  .tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #2A273F;
    color: #E0DEF4;
    border-radius: 5px;
    margin: 0.2rem;
    cursor: pointer;
  }
  .tag:hover {
    background: #3C3B58;
  }
  .projects-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .project-item {
    width: 80%;
    background: #2A273F;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .project-item h2 {
    margin: 0;
    color: #E2A0A8;
  }
  .project-item p {
    color: #E0DEF4;
  }
  .project-item .tags {
    margin-top: 0.5rem;
  }
</style>

