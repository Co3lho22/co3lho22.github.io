---
layout: default
title: About
permalink: /about/
---

<div class="container">
  <div class="page-header">
    <h1 class="page-title">About Me</h1>
    <p class="page-description">CTF Player • Penetration Tester • Red Team Enthusiast</p>
  </div>

  <div class="about-content">
    <div class="about-section">
      <h2>Who I Am</h2>
      <p>I'm a cybersecurity professional with a passion for CTFs, penetration testing, and red team operations. This blog serves as my digital notebook where I document my learning journey, share technical research, and publish writeups from various security challenges.</p>

      <p>My interests span across multiple domains of cybersecurity including web application security, network penetration testing, malware development, and adversary simulation.</p>
    </div>

    <div class="about-section">
      <h2>What I Do</h2>
      <div class="activities-grid">
        <div class="activity-card">
          <h3>🚩 CTF Competitions</h3>
          <p>Active participant in Capture The Flag competitions, specializing in web exploitation, reverse engineering, and cryptography challenges.</p>
        </div>

        <div class="activity-card">
          <h3>🔍 Penetration Testing</h3>
          <p>Conducting security assessments on web applications, networks, and infrastructure to identify vulnerabilities and security weaknesses.</p>
        </div>

        <div class="activity-card">
          <h3>🔴 Red Team Operations</h3>
          <p>Developing adversary simulation capabilities, creating custom tools, and implementing advanced persistent threat (APT) tactics, techniques, and procedures.</p>
        </div>

        <div class="activity-card">
          <h3>🛠️ Tool Development</h3>
          <p>Building custom security tools, payloads, and frameworks to support red team operations and penetration testing activities.</p>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>Skills & Expertise</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h4>Programming Languages</h4>
          <ul>
            <li>Python</li>
            <li>Go</li>
            <li>C/C++</li>
            <li>JavaScript</li>
            <li>PowerShell</li>
            <li>Bash</li>
          </ul>
        </div>

        <div class="skill-category">
          <h4>Security Tools</h4>
          <ul>
            <li>Metasploit</li>
            <li>Burp Suite</li>
            <li>Nmap</li>
            <li>Wireshark</li>
            <li>BloodHound</li>
            <li>Cobalt Strike</li>
          </ul>
        </div>

        <div class="skill-category">
          <h4>Platforms</h4>
          <ul>
            <li>HackTheBox</li>
            <li>TryHackMe</li>
            <li>PentesterLab</li>
            <li>VulnHub</li>
            <li>OverTheWire</li>
            <li>PicoCTF</li>
          </ul>
        </div>

        <div class="skill-category">
          <h4>Specializations</h4>
          <ul>
            <li>Web Application Security</li>
            <li>Active Directory</li>
            <li>Post-Exploitation</li>
            <li>Social Engineering</li>
            <li>Malware Development</li>
            <li>OSINT</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>Connect With Me</h2>
      <p>Feel free to reach out if you want to discuss cybersecurity topics, collaborate on projects, or just have a chat about the latest security trends.</p>

      <div class="contact-links">
        {% if site.author.github %}
        <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener" class="contact-link">
          <svg width="20" height="20" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"/>
          </svg>
          GitHub
        </a>
        {% endif %}

        {% if site.author.linkedin %}
        <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener" class="contact-link">
          <svg width="20" height="20" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="currentColor"/>
          </svg>
          LinkedIn
        </a>
        {% endif %}

        {% if site.author.twitter %}
        <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank" rel="noopener" class="contact-link">
          <svg width="20" height="20" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" fill="currentColor"/>
          </svg>
          Twitter
        </a>
        {% endif %}
      </div>
    </div>
  </div>
</div>

<style>
.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-section {
  margin-bottom: var(--spacing-2xl);
}

.about-section h2 {
  color: var(--color-accent);
  margin-bottom: var(--spacing-lg);
  font-size: 1.5rem;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.activity-card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  transition: var(--transition);
}

.activity-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.activity-card h3 {
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.skill-category {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
}

.skill-category h4 {
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: var(--spacing-xs) 0;
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
}

.skill-category li:last-child {
  border-bottom: none;
}

.contact-links {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  text-decoration: none;
  transition: var(--transition);
}

.contact-link:hover {
  border-color: var(--color-accent);
  background-color: var(--color-hover);
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .activities-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .contact-links {
    flex-direction: column;
  }
}
</style>

