# Your Jekyll Portfolio - Complete Setup Guide

## 📦 What You Have

A complete, professional Jekyll website with:

### ✨ Features
- **Clean landing page** with 4-card navigation (inspired by dhavalkapil.com)
- **Dark mode toggle** (saves preference)
- **Blog section** for casual security posts
- **CTF Writeups section** for competition solutions
- **Projects section** for research and tool development
- **About/Resume page** for professional background
- **Syntax highlighting** for code snippets
- **Fully responsive** mobile-first design
- **Professional typography** (Inter + JetBrains Mono)
- **SEO-friendly** structure

### 📁 File Structure
```
my-portfolio-site/
├── _config.yml           # Site configuration
├── _layouts/             # Page templates
│   ├── default.html
│   ├── post.html
│   ├── writeup.html
│   └── project.html
├── _posts/               # Blog posts
├── _writeups/            # CTF writeups
├── _projects/            # Research projects
├── assets/
│   ├── css/
│   │   ├── main.css      # Main styles
│   │   └── syntax.css    # Code highlighting
│   └── js/
│       └── theme.js      # Dark mode toggle
├── blog/                 # Blog listing page
├── writeups/             # Writeups listing page
├── projects/             # Projects listing page
├── about/                # About/resume page
├── index.html            # Landing page
├── Gemfile               # Ruby dependencies
├── README.md             # Full documentation
└── QUICK_START.md        # Quick setup guide
```

## 🎯 Your Next Steps

### 1. Personalize Site Settings (5 min)

Edit `_config.yml`:
```yaml
title: [Your Name]
email: [your.email@example.com]
description: >-
  [Your professional description - keep it concise]

github_username: [your-handle]
twitter_username: [your-handle]
linkedin_username: [your-name]
```

### 2. Update About Page (10 min)

Edit `about/index.html`:
- Replace background section with your story
- Update education section
- Add any certifications or achievements
- Ensure contact links match your _config.yml

### 3. Add Your Resume (2 min)

Place your PDF resume in: `assets/resume.pdf`

### 4. Remove or Keep Examples (5 min)

You have 3 example pieces of content:
- `_posts/2024-10-20-how-to-stay-anonymous-online.md`
- `_writeups/2024-09-15-stackoverflow-challenge.md`
- `_projects/custom-fuzzer.md`

**Option A**: Keep them as reference and add your own
**Option B**: Delete them and start fresh

### 5. Test Locally (2 min)

```bash
cd my-portfolio-site
bundle install
bundle exec jekyll serve
```

Visit: http://localhost:4000

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free, Easy) ⭐ RECOMMENDED

1. **Create repository**: `username.github.io` on GitHub
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```
3. **Enable Pages**: Settings → Pages → Source: main branch
4. **Live in ~1 minute**: https://username.github.io

### Option 2: Netlify (Free, Fast)

1. Sign up at netlify.com
2. "New site from Git"
3. Connect your repository
4. Build command: `jekyll build`
5. Publish directory: `_site`
6. Deploy!

### Option 3: Custom Domain

After deploying to GitHub Pages:
1. Add `CNAME` file with your domain: `yourname.com`
2. Configure DNS:
   - A Records → GitHub IPs (see README.md)
   - Or CNAME → username.github.io
3. Enable HTTPS in GitHub settings

## 🎨 Customization Guide

### Change Accent Color

Edit `assets/css/main.css` (lines 10 and 25):
```css
/* Light mode */
--accent: #2563eb;  /* Change this to your color */

/* Dark mode */
--accent: #58a6ff;  /* And this */
```

Color suggestions:
- Blue (current): `#2563eb`
- Red: `#dc2626`
- Purple: `#7c3aed`
- Green: `#059669`
- Orange: `#ea580c`

### Modify Navigation

Edit `_config.yml` navigation section:
```yaml
navigation:
  - title: Home
    url: /
  - title: Blog
    url: /blog/
  # Add more items...
```

### Change Fonts

Edit `_layouts/default.html` (line 12) to use different Google Fonts.

### Remove Emojis from Cards

Edit `index.html` and remove or replace the emoji spans in the nav-cards.

## ✍️ Content Creation Tips

### Blog Posts (Casual, Educational)

**Good topics for you:**
- "How I Prepared for My First CTF"
- "Tools Every Red Teamer Should Know"
- "Setting Up a Home Security Lab"
- "Understanding Buffer Overflows (Beginner-Friendly)"
- "My Journey from Student to Security Researcher"

**Structure:**
1. Hook (why this matters)
2. Main content (practical advice)
3. Examples or demonstrations
4. Conclusion (key takeaways)

### CTF Writeups (Technical, Detailed)

**Structure:**
1. Challenge description
2. Initial analysis (what you found)
3. Vulnerability discovery
4. Exploitation steps
5. Code/exploit
6. Flag capture
7. Lessons learned

**Pro tips:**
- Include relevant code snippets
- Add command outputs
- Explain your thought process
- Note dead ends and what you learned

### Projects (In-Depth)

**Structure:**
1. Overview (what and why)
2. Architecture/design
3. Implementation details
4. Challenges faced
5. Current status
6. Future plans
7. Resources

## 🔧 Common Customizations

### Add Search Functionality

Install jekyll-algolia plugin (see Jekyll docs)

### Add Comments

Use Disqus, utterances, or giscus

### Add Analytics

Add Google Analytics to `_layouts/default.html`

### Add RSS Feed

Already included via jekyll-feed plugin!

### Optimize Images

Use TinyPNG or similar before adding to `assets/images/`

## 🐛 Troubleshooting

**Jekyll won't install:**
```bash
# Update Ruby and bundler
gem update --system
gem install bundler
```

**Site not building:**
```bash
bundle update
bundle exec jekyll serve --trace
```

**CSS changes not showing:**
- Clear browser cache
- Force reload (Cmd+Shift+R or Ctrl+Shift+R)
- Try incognito mode

**Dark mode not saving:**
- Check browser localStorage is enabled
- Check console for JavaScript errors

## 📚 Resources

- **Jekyll docs**: https://jekyllrb.com/docs/
- **Markdown guide**: https://www.markdownguide.org/
- **GitHub Pages**: https://pages.github.com/
- **Color palettes**: https://coolors.co/

## 🎯 Pre-Launch Checklist

- [ ] Customized _config.yml
- [ ] Updated About page
- [ ] Added resume PDF
- [ ] Removed/replaced example content
- [ ] Created 2-3 real posts
- [ ] Tested on mobile
- [ ] Tested dark mode
- [ ] All links work
- [ ] Removed personal info from examples
- [ ] Updated README with your repo URL
- [ ] Ready to deploy!

## 💡 Pro Tips

1. **Consistency**: Post regularly (weekly or bi-weekly)
2. **Quality over quantity**: Better to have 3 great writeups than 10 mediocre ones
3. **Be yourself**: Your personality should show through
4. **Update regularly**: Keep your projects section current
5. **Network**: Share your posts on Twitter with relevant hashtags
6. **SEO**: Use descriptive titles and excerpts
7. **Mobile-first**: Always check on mobile

## 🤝 Need Help?

- Check QUICK_START.md for common questions
- Check README.md for detailed documentation
- Jekyll documentation is excellent
- Security Twitter community is helpful!

---

**You're all set!** Your professional security portfolio is ready to deploy. 

Good luck with your cybersecurity journey! 🚀🔒
