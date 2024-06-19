---
layout: default
title: Home
---

<div class="home-header">
  <h1>Diogo Coelho</h1>
  <p>A Computer Science student passionate about cybersecurity, cloud computing, and solving complex problems.</p>
</div>

<div class="profile-container">
  <div class="profile-image-container">
    <img src="images/me1.jpg" alt="Profile Picture" class="profile-image">
  </div>
  <div class="profile-quote-container">
    <h2>Welcome to My Personal Space</h2>
    <blockquote class="profile-quote">
      "It's not a bug; it's an undocumented feature!"<br>
      — Anonymous
    </blockquote>
  </div>
</div>

<style>
  .home-header {
    text-align: center;
    padding: 2rem 0;
    background: #1e1e1e;
  }
  .home-header h1 {
    font-size: 2.5rem;
    color: #00e676;
  }
  .home-header p {
    font-size: 1.2rem;
    color: #e0e0e0;
  }
  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 900px;
    background: #1e1e1e;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .profile-image-container {
    flex: 1;
    text-align: center;
    padding: 1rem;
  }
  .profile-image {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
  }
  .profile-quote-container {
    flex: 2;
    padding: 1rem;
  }
  .profile-quote-container h2 {
    font-size: 1.5rem;
    color: #00e676;
    margin-bottom: 1rem;
  }
  .profile-quote {
    font-size: 1.2rem;
    font-style: italic;
    color: #e0e0e0;
  }
  @media (max-width: 768px) {
    .profile-container {
      flex-direction: column;
      text-align: center;
    }
    .profile-quote {
      text-align: center;
    }
  }
</style>

