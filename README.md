# Personal Portfolio Website

A clean, professional Jekyll-based portfolio site for cybersecurity research, CTF writeups, and project showcases.

## Features

- 🎨 **Clean, minimal design** inspired by professional portfolios
- 🌓 **Dark mode support** with smooth transitions
- 📱 **Fully responsive** - works on all devices
- 🎯 **Four main sections**:
  - Blog (casual posts about security, privacy, learning)
  - CTF Writeups (competition solutions)
  - Projects & Research (in-depth technical projects)
  - About/Resume (professional background)
- 💻 **Syntax highlighting** for code blocks
- 🏷️ **Tags and categorization** for easy navigation
- ⚡ **Static site** - fast, secure, easy to host

## Prerequisites

- Ruby (version 2.7 or higher)
- Jekyll
- Git

## Local Development Setup

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd my-portfolio-site
```

2. **Install dependencies:**
```bash
bundle install
```

3. **Customize the site:**
   - Edit `_config.yml` with your information:
     - Update `title`, `email`, `description`
     - Add your GitHub, Twitter, LinkedIn usernames
     - Customize navigation if needed

4. **Run locally:**
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site.

5. **Enable live reload (optional):**
```bash
bundle exec jekyll serve --livereload
```

## Content Structure

### Writing Blog Posts

Create new files in `_posts/` with the format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-10-20
tags: [tag1, tag2]
excerpt: "Brief description of your post"
---

Your content here...
```

### Writing CTF Writeups

Create new files in `_writeups/` with the format: `YYYY-MM-DD-title.md`

```markdown
---
layout: writeup
title: "Challenge Name"
competition: "CTF Name"
category: "Pwn/Crypto/Web/etc"
date: 2024-09-15
excerpt: "Brief description"
---

Your writeup here...
```

### Adding Projects

Create new files in `_projects/` with any name: `project-name.md`

```markdown
---
layout: project
title: "Project Name"
status: ongoing/completed/archived
tags: [tag1, tag2]
excerpt: "Brief description"
---

Your project details...
```

## Customization

### Colors and Theme

Edit `assets/css/main.css` to customize colors. Key variables are at the top:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --accent: #2563eb;
  /* ... */
}
```

### Navigation

Edit the `navigation` section in `_config.yml` to add/remove menu items.

### About Page

Edit `about/index.html` to update your background, education, and contact info.

## Deployment

### GitHub Pages (Recommended)

1. **Create a new repository** named `username.github.io`

2. **Push your site:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main
   - Your site will be live at `https://username.github.io`

### Custom Domain (Optional)

1. Add a `CNAME` file to the root with your domain:
```
yourdomain.com
```

2. Configure DNS:
   - Add an A record pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `username.github.io`

3. Enable HTTPS in GitHub Pages settings

### Other Hosting Options

- **Netlify**: Connect your repo and deploy automatically
- **Vercel**: Similar to Netlify, with CDN
- **Self-hosted**: Build with `bundle exec jekyll build` and serve the `_site` folder

## Adding Your Resume

Place your resume PDF in `assets/` as `resume.pdf`. The About page already links to it.

## Tips

1. **Use draft posts**: Create files in `_drafts/` for unpublished content
2. **Test locally**: Always run `bundle exec jekyll serve` before deploying
3. **Optimize images**: Compress images before adding to `assets/images/`
4. **Use meaningful commit messages**: Makes tracking changes easier
5. **Regular backups**: Keep your content backed up

## Troubleshooting

**Jekyll won't start:**
```bash
bundle update
bundle exec jekyll serve
```

**Syntax highlighting not working:**
Make sure Rouge is installed:
```bash
gem install rouge
```

**Theme toggle not working:**
Check browser console for JavaScript errors. Clear cache and reload.

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Design inspired by [dhavalkapil.com](https://dhavalkapil.com/) with custom styling and features.

---

**Need help?** Open an issue or check the [Jekyll documentation](https://jekyllrb.com/docs/).
