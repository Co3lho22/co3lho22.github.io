---
layout: default
title: Certifications
permalink: /certifications/
---

<div class="container">
  <div class="page-header">
    <h1 class="page-title">Certifications</h1>
    <p class="page-description">My cybersecurity certification journey</p>
  </div>

  <div class="certs-timeline">
    <div class="cert-item completed">
      <div class="cert-badge">✓</div>
      <div class="cert-content">
        <h3>OSCP - Offensive Security Certified Professional</h3>
        <p class="cert-date">Completed: March 2024</p>
        <p>Hands-on penetration testing certification covering manual exploitation techniques.</p>
      </div>
    </div>

    <div class="cert-item in-progress">
      <div class="cert-badge">🎯</div>
      <div class="cert-content">
        <h3>CRTO - Certified Red Team Operator</h3>
        <p class="cert-date">In Progress</p>
        <p>Advanced red team operations and adversary simulation techniques.</p>
      </div>
    </div>

    <div class="cert-item planned">
      <div class="cert-badge">📅</div>
      <div class="cert-content">
        <h3>CRTM - Certified Red Team Master</h3>
        <p class="cert-date">Planned: 2025</p>
        <p>Master-level red team certification focusing on advanced techniques.</p>
      </div>
    </div>
  </div>
</div>

<style>
.certs-timeline {
  max-width: 600px;
  margin: 0 auto;
}

.cert-item {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-lg);
  background-color: var(--color-bg-secondary);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
}

.cert-item.completed {
  border-color: #22c55e;
}

.cert-item.in-progress {
  border-color: #f59e0b;
}

.cert-item.planned {
  border-color: #3b82f6;
}

.cert-badge {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-bg);
  flex-shrink: 0;
}

.cert-content h3 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.cert-date {
  font-size: 0.875rem;
  color: var(--color-accent);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}
</style>
