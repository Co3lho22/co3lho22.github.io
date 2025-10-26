# Website Context & Structure - co3lho22.com

## Overview
Personal cybersecurity portfolio website for Diogo Coelho (aka co3lho22), a 22-year-old security enthusiast from Porto, Portugal. Master's student in Cybersecurity at Universidade do Porto, specializing in binary exploitation, reverse engineering, and CTF competitions as part of xSTF team.

## Tech Stack
- **Static Site Generator:** Jekyll
- **Hosting:** Cloudflare Pages (private GitHub repo)
- **Domain:** co3lho22.com (via Namecheap, DNS managed by Cloudflare)
- **Theme:** Custom minimalist design with dark mode default
- **Deployment:** GitHub → Cloudflare Pages (automatic)

## Site Structure

### Collections (Jekyll)
```yaml
collections:
  blog:      /blog/:title/
  writeups:  /writeups/:title/
  projects:  /projects/:title/
```

### Main Sections
1. **Home** (`/`) - Hero section with Livraria Lello background image, navigation cards
2. **Blog** (`/blog/`) - Security thoughts, tutorials, data protection (_blog/ folder)
3. **Writeups** (`/writeups/`) - CTF writeups from competitions (_writeups/ folder)
4. **Projects** (`/projects/`) - Security research, tools, labs (_projects/ folder)
5. **About** (`/about/`) - Bio, education, interests, contact info

### Layouts
- `default.html` - Base layout with header, theme toggle, scripts
- `post.html` - Blog post layout (back to /blog/)
- `writeup.html` - CTF writeup layout (back to /writeups/)
- `project.html` - Project layout (back to /projects/)

### Key Features

#### Design
- **Hero Section:** Livraria Lello (Porto library) as full-width hero background at top of homepage
- **Your Name Display:**
  - "Diogo Coelho" (large, bold, white gradient)
  - "aka co3lho22" (smaller, monospace font, gray)
  - "Cybersecurity Researcher" (medium size)
- **Dark Mode:** Default theme (changed from light mode default)
- **Navigation Cards:** Blog, Writeups, Projects, About
- **Tag Filtering:** Available on blog, writeups, and projects listing pages

#### Content Styling
- **Lists:** Properly aligned with `padding-left: var(--spacing-xl)`
- **Code Blocks:**
  - More internal padding for readability
  - Syntax highlighting (Rouge)
  - Copy button functionality (JavaScript - note: has duplicate button issue to fix later)
- **Images:** Hover effects, responsive

#### Colors & Typography
- **Fonts:** Inter (sans-serif), JetBrains Mono (code)
- **Dark Mode Colors:** Dark backgrounds, light text, blue accents
- **Professional minimalist aesthetic**

### Assets
```
assets/
  css/
    main.css - Main styles, layout, components
    syntax.css - Code syntax highlighting
  js/
    theme.js - Dark/light mode toggle (default: dark)
    filters.js - Tag filtering functionality
    copy-code.js - Copy button for code blocks (has duplicate issue)
  images/ - Hero images, content images
  resume.pdf - Downloadable CV
```

### DNS Configuration (Cloudflare)

**Nameservers:**
- kianchau.ns.cloudflare.com
- tara.ns.cloudflare.com

**Public Records:**
```
co3lho22.com (@ A record) → Cloudflare Pages
www.co3lho22.com (CNAME) → co3lho22.com
```

**Private Subdomains (Tailscale IPs - DNS only, gray cloud):**
```
proxmox.co3lho22.com → 100.64.1.X
docs.co3lho22.com → 100.64.1.X
writeups.co3lho22.com → 100.64.1.X
research.co3lho22.com → 100.64.1.X
```

## Content Examples

### Blog Posts (_blog/)
- Building first security lab
- Essential red team tools
- How to stay anonymous online
- Focus: Casual educational content about security, privacy, data protection

### CTF Writeups (_writeups/)
- RSA weak keys (picoCTF 2024)
- SQL injection challenge
- Stack overflow challenge
- Focus: Competition solutions, methodologies, only proud writeups

### Projects (_projects/)
- Custom fuzzer development
- Home security lab setup
- Focus: Research topics, grouped content, malware analysis, tools

### About Page
- **Who I Am:** Security enthusiast, finishing Master's, spends free time on binary exploitation, RE, system tinkering
- **What I Do:** xSTF member, CTF competitor (pwn/rev focus), working on applying CTF knowledge to real-world scenarios (reversing actual malware, firmware exploitation)
- **What I'm Into:** Binary exploitation, reverse engineering, red teaming, systems & networking, security research
- **Education:** Master's Cybersecurity (2024-2026), Bachelor's CS (2020-2024) at Universidade do Porto
- **Tone:** Authentic, no corporate BS, "real talk" about security work

## Configuration (_config.yml)

```yaml
title: Diogo Coelho
description: aka co3lho22 | Cybersecurity Researcher
permalink: /:title/

collections:
  blog:
    output: true
    permalink: /blog/:title/
  writeups:
    output: true
    permalink: /writeups/:title/
  projects:
    output: true
    permalink: /projects/:title/

# Update with actual handles:
github_username: yourusername
twitter_username: yourusername
linkedin_username: yourname
email: your.email@example.com
```

## Known Issues
1. **Copy button appears twice** in code blocks - JavaScript initialization issue, needs fix
2. **Placeholder content** in _config.yml (GitHub, Twitter, LinkedIn, email need real values)

## Deployment Process
1. Push to private GitHub repo
2. Cloudflare Pages auto-builds Jekyll site
3. Deploys to co3lho22.com
4. Private repo stays hidden, only built site visible

## Design Philosophy
- **Minimalist & professional** - Clean, focused, no distractions
- **Security-focused aesthetic** - Dark mode default, monospace fonts for code/hacker alias
- **Porto pride** - Livraria Lello hero image represents Portuguese roots
- **Authentic voice** - No corporate speak, real talk about security work
- **Practical focus** - Content helps others learn, shows real skills

## Future Considerations
- Add actual social media handles and email to _config.yml
- Fix duplicate copy button issue
- Add more blog posts, writeups, projects as content grows
- Consider adding more private subdomains for internal services
- Set up Tailscale for private subdomain access
- Potentially add RSS feed for blog
- Consider analytics (privacy-respecting option)

## Key Differences from Standard Jekyll Sites
- Uses **collections instead of _posts** for blog (better organization, consistent URLs)
- **Dark mode by default** (not light)
- **Custom hero section** with Portuguese library background
- **Tag filtering system** built with JavaScript
- **Three content types** (blog, writeups, projects) with separate collections
- **Private repo deployment** via Cloudflare Pages (not public GitHub Pages)
- **Split DNS** - public website + private Tailscale services on subdomains
