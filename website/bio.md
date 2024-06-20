---
layout: default
title: Bio
---

<div class="bio-header">
  <h1>Bio</h1>
</div>

<div class="bio-container">
  <div class="bio-content">
    <h2>Something....</h2>
    <h2>Education</h2>
    <h2>Skills and Interests</h2>
    <a href="files/papers/cv.pdf" class="button" target="_blank">Download CV</a>
  </div>
  <div class="bio-image-container">
    <img src="images/me2.png" alt="Profile Picture" class="bio-image">
  </div>
</div>

<style>
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
  }
  .bio-header {
    text-align: center;
    padding: 2rem 0;
    background: #1e1e1e;
  }
  .bio-header h1 {
    font-size: 3rem;
    color: #E2A0A8; /* Muted Rose */
  }
  .bio-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 1200px;
    background: #2A273F; /* Slightly lighter midnight */
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .bio-content {
    flex: 2;
    padding: 1rem;
  }
  .bio-content h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .bio-image-container {
    flex: 1;
    text-align: center;
    padding: 1rem;
  }
  .bio-image {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
  }
  .button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #00e676;
    color: #121212;
    text-decoration: none;
    border-radius: 5px;
  }
  .button:hover {
    background-color: #00c853;
  }
  @media (max-width: 768px) {
    .bio-container {
      flex-direction: column;
      text-align: center;
    }
    .bio-content, .bio-image-container {
      flex: none;
    }
    .bio-content h2 {
      text-align: center;
    }
  }
</style>

