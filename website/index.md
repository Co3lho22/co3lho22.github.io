---
layout: default
title: Home
---

<div class="home-header">
  <h1>Welcome to My Personal Space</h1>
</div>

<div class="profile-container">
  <div class="profile-image-container">
    <img src="images/me1.jpg" alt="Profile Picture" class="profile-image">
  </div>
  <div class="profile-quote-container">
    <h2>Diogo Coelho<br></h2>
    <h3>Phrase of the day:</h3>
    <blockquote class="profile-quote">
      "It's not a bug; it's an undocumented feature!"<br>
      — Anonymous
    </blockquote>
  </div>
</div>

<style>
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #1F1D2E; /* Deep Midnight */
    color: #E0DEF4; /* Soft White */
    margin: 0;
    padding: 0;
  }
  .home-header {
    text-align: center;
    padding: 2rem 0;
    background: #1F1D2E;
  }
  .home-header h1 {
    font-size: 3rem;
    color: #E2A0A8; /* Muted Rose */
  }
  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 900px;
    background: #2A273F; /* Slightly lighter midnight */
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
    text-align: center;
  }
  .profile-quote-container h2 {
    font-size: 2rem;
    color: #E2A0A8; /* Muted Rose */
    margin-bottom: 1rem;
  }
  .profile-quote {
    font-size: 1.2rem;
    font-style: italic;
    color: #E0DEF4;
  }
  @media (max-width: 768px) {
    .profile-container {
      flex-direction: column;
      text-align: center;
    }
    .profile-image-container, .profile-quote-container {
      flex: none;
    }
    .profile-quote {
      text-align: center;
    }
  }
</style>

