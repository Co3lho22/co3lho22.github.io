---
layout: default
title: Certs
---

<div class="certs-header">
  <h1>Certifications</h1>
</div>

<div class="filters">
  <input type="text" id="searchBar" placeholder="Search for title...">
  <div class="tags">
    <span class="tag" onclick="filterCerts('Security')">Security</span>
    <span class="tag" onclick="filterCerts('Cloud')">Cloud</span>
    <span class="tag" onclick="filterCerts('Networking')">Networking</span>
    <span class="tag" onclick="filterCerts('Programming')">Programming</span>
    <span class="tag" onclick="filterCerts('Topic5')">Topic5</span>
  </div>
</div>

<div class="certs-list">
  {% for cert in site.certs %}
  <div class="cert-item" data-tags="{{ cert.tags | join: ' ' }}">
    <h2><a href="{{ cert.url }}">{{ cert.title }}</a></h2>
    <p>{{ cert.description }}</p>
    <div class="tags">
      {% for tag in cert.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

<script>
  function filterCerts(tag) {
    const certs = document.querySelectorAll('.cert-item');
    certs.forEach(cert => {
      if (cert.getAttribute('data-tags').includes(tag)) {
        cert.style.display = 'block';
      } else {
        cert.style.display = 'none';
      }
    });
  }

  document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const certs = document.querySelectorAll('.cert-item');
    certs.forEach(cert => {
      const title = cert.querySelector('h2').textContent.toLowerCase();
      if (title.includes(query)) {
        cert.style.display = 'block';
      } else {
        cert.style.display = 'none';
      }
    });
  });
</script>

<style>
  .certs-header {
    text-align: center;
    padding: 2rem 0;
    background: #1e1e1e;
  }
  .certs-header h1 {
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
  .certs-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cert-item {
    width: 80%;
    background: #2A273F;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .cert-item h2 {
    margin: 0;
    color: #E2A0A8;
  }
  .cert-item p {
    color: #E0DEF4;
  }
  .cert-item .tags {
    margin-top: 0.5rem;
  }
</style>

