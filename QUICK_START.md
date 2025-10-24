# Quick Start Guide

## 🚀 Get Your Site Running in 5 Minutes

### Step 1: Update Your Information

Edit `_config.yml`:

```yaml
title: João Silva  # Your name
email: joao@example.com
description: >-
  Cybersecurity researcher specializing in red team operations and binary exploitation.
  Master's student, xSTF team member.

# Add your social media handles
github_username: yourhandle
twitter_username: yourhandle
linkedin_username: yourname
```

### Step 2: Update the About Page

Edit `about/index.html`:
- Replace placeholder text with your actual background
- Update education section
- Add your email and social links

### Step 3: Add Your Resume

Place your resume PDF in `assets/` folder as `resume.pdf`

### Step 4: Test Locally

```bash
# Install dependencies (first time only)
bundle install

# Run the site
bundle exec jekyll serve

# Visit: http://localhost:4000
```

### Step 5: Create Your First Content

**Blog Post** (`_posts/2024-10-24-my-first-post.md`):
```markdown
---
layout: post
title: "My Journey into Cybersecurity"
date: 2024-10-24
tags: [learning, career]
---

Your content here...
```

**CTF Writeup** (`_writeups/2024-10-24-challenge-name.md`):
```markdown
---
layout: writeup
title: "Challenge Name"
competition: "CTF Name 2024"
category: "Binary Exploitation"
date: 2024-10-24
---

Your writeup here...
```

**Project** (`_projects/my-project.md`):
```markdown
---
layout: project
title: "My Security Tool"
status: ongoing
tags: [python, security]
---

Your project details...
```

## 📝 Content Writing Tips

### For Blog Posts (Casual)
- Write naturally, like you're explaining to a friend
- Focus on practical advice and personal experiences
- Keep it accessible but informative
- Examples: "How I stay anonymous online", "Tools every red teamer should know"

### For CTF Writeups (Technical)
- Clear challenge description
- Step-by-step vulnerability discovery
- Exploitation methodology
- Code snippets with explanations
- Lessons learned section

### For Projects (Detailed)
- Project overview and motivation
- Architecture and design decisions
- Implementation details with code
- Current progress and roadmap
- Resources and references

## 🎨 Customization

### Change Colors

Edit `assets/css/main.css` - lines 2-16 for light mode, lines 18-28 for dark mode:

```css
:root {
  --accent: #2563eb;  /* Change to your preferred color */
}
```

### Modify Layout

- Home page: `index.html`
- Blog list: `blog/index.html`
- Writeups list: `writeups/index.html`
- Projects list: `projects/index.html`

### Add Sections

1. Create new collection in `_config.yml`
2. Create new layout in `_layouts/`
3. Add listing page
4. Update home page navigation

## 🚢 Deploy to GitHub Pages

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo: username.github.io on GitHub

# Push
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

Your site will be live at: `https://username.github.io`

## ✅ Pre-Launch Checklist

- [ ] Updated `_config.yml` with your info
- [ ] Edited About page with your background
- [ ] Added your resume PDF
- [ ] Created at least 1-2 blog posts
- [ ] Added 1-2 CTF writeups (if available)
- [ ] Added 1 project
- [ ] Tested locally - everything looks good?
- [ ] Checked on mobile view
- [ ] Removed example content (or kept it as reference)
- [ ] Updated README with your repo URL

## 🆘 Need Help?

**Site not building:**
```bash
bundle update
bundle install
bundle exec jekyll serve --trace
```

**CSS not loading:**
Clear browser cache or use incognito mode

**Dark mode not working:**
Check browser console for JavaScript errors

**Want to add a feature:**
Jekyll has tons of plugins - check [jekyllrb.com/docs/plugins/](https://jekyllrb.com/docs/plugins/)

---

**Ready?** Run `bundle exec jekyll serve` and start building your security portfolio! 🎯
