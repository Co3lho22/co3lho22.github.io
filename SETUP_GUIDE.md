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

## Test Locally (2 min)

```bash
cd my-portfolio-site
bundle install
bundle exec jekyll serve
```

Visit: http://localhost:4000

## 🚀 Deployment Options

Custom domain + cloudflare pages

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
