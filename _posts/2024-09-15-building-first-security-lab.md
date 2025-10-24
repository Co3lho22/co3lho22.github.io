---
layout: post
title: "Building Your First Security Lab on a Budget"
date: 2024-09-15
tags: [security-lab, learning, beginner-guide]
excerpt: "A practical guide to setting up a home security lab for under €200, perfect for students and aspiring security researchers."
---

Starting your cybersecurity journey doesn't require expensive equipment. Here's how I built my first security lab with minimal investment.

## Why You Need a Lab

A home security lab provides:
- **Safe environment** for testing exploits
- **Hands-on practice** with real tools
- **Portfolio projects** to showcase skills
- **Isolated network** that won't break your production setup

## The Budget Setup (€200 Total)

### Option 1: Used Laptop Method (€150)

**Hardware:**
- Used business laptop (€100-150)
  - Look for Dell Latitude, HP EliteBook, or Lenovo ThinkPad
  - Minimum: 8GB RAM, i5 processor
  - Check eBay, local classified ads

**Software (Free):**
- VirtualBox (free)
- Kali Linux (free)
- Metasploitable 2 (free)
- Windows 10 evaluation (free for 90 days)

### Option 2: Raspberry Pi Cluster (€200)

**Hardware:**
- 2x Raspberry Pi 4 (4GB) - €120
- SD cards (64GB x2) - €20
- Power supplies - €20
- Network switch - €15
- Cables - €10
- Case - €15

This gives you multiple machines to create realistic networks.

## Essential Free Resources

### Vulnerable Machines
1. **Metasploitable 2 & 3** - Intentionally vulnerable Linux
2. **DVWA** - Damn Vulnerable Web Application
3. **VulnHub** - Hundreds of vulnerable VMs
4. **HackTheBox** retired machines - Download after completing

### Learning Platforms (Free Tier)
- **TryHackMe** - Guided learning paths
- **HackTheBox** - Practice boxes
- **OverTheWire** - Linux basics
- **PentesterLab** - Some free exercises

## My First Lab Setup

### Initial Configuration

```bash
# Host machine: Ubuntu/Windows with VirtualBox
# VM 1: Kali Linux (Attacker)
# VM 2: Metasploitable 2 (Target)
# VM 3: Windows 10 (Victim)

# Network setup
# NAT Network for internet access
# Internal Network for isolation
```

### Network Architecture

```
Internet
    ↓
Host OS
    ↓
VirtualBox NAT Network (10.0.2.0/24)
    ├── Kali Linux (10.0.2.15)
    ├── Metasploitable (10.0.2.16)
    └── Windows 10 (10.0.2.17)
```

## First Projects to Try

### 1. Network Scanning
```bash
# From Kali Linux
nmap -sV 10.0.2.16
# Learn to identify services
```

### 2. Web Application Testing
```bash
# Setup DVWA on Metasploitable
# Practice SQL injection
# Try XSS attacks
```

### 3. Exploit Practice
```bash
# Use Metasploit against Metasploitable
msfconsole
search vsftpd
use exploit/unix/ftp/vsftpd_234_backdoor
set RHOST 10.0.2.16
exploit
```

## Cost Breakdown

**Minimal Setup:**
- Used laptop: €100-150
- Everything else: FREE (open source)
- **Total: €100-150**

**Ideal Setup:**
- Used laptop: €150
- External monitor: €50 (optional)
- Keyboard/Mouse: €20 (optional)
- **Total: €150-220**

## Common Mistakes I Made

### 1. Not Taking Snapshots
**Problem:** Broke my VMs constantly
**Solution:** Snapshot before every major change

### 2. Poor Resource Allocation
**Problem:** Gave one VM all the RAM
**Solution:**
- Kali: 4GB RAM
- Targets: 2GB each
- Leave some for host

### 3. Ignoring Network Configuration
**Problem:** VMs couldn't talk to each other
**Solution:** Learned about NAT vs Host-Only vs Internal networks

### 4. No Documentation
**Problem:** Forgot what I learned
**Solution:** Started a learning journal (markdown files)

## Free Learning Path

### Month 1: Foundations
- Linux basics (OverTheWire Bandit)
- Networking fundamentals
- Setting up your lab
- Basic Nmap usage

### Month 2: Web Security
- DVWA challenges
- OWASP Top 10
- Burp Suite basics
- Basic web exploitation

### Month 3: System Exploitation
- Metasploit framework
- Buffer overflows (easy ones)
- Privilege escalation
- Linux exploitation

### Month 4: Active Practice
- TryHackMe rooms
- HackTheBox easy machines
- VulnHub challenges
- Document everything

## Upgrade Path

As you progress:
1. **€50 more:** Add used enterprise switch with VLAN support
2. **€100 more:** Second laptop for realistic network
3. **€200 more:** Dedicated server (used workstation)
4. **€500+ later:** Professional setup with ESXi

## Tips for Students

### Free Resources
- GitHub Student Pack - Tons of free tools
- Microsoft Imagine - Free Windows licenses for students
- University resources - Many have lab access
- Student discounts - Check before buying anything

### Community
- Join local CTF teams (like xSTF!)
- Discord servers for help
- Reddit: r/homelab, r/netsec
- Twitter security community

## My Current Setup (After 2 Years)

Started with €150 laptop, now have:
- Dedicated server (€800 - bought gradually)
- Managed network equipment
- Multiple VLANs
- Cloud integration
- Proper monitoring

**But I learned the most on that €150 laptop.**

## Conclusion

You don't need expensive equipment to start in cybersecurity. A used laptop and free software are enough to:
- Learn fundamental concepts
- Practice real exploits
- Build a portfolio
- Get CTF experience
- Land your first security role

**Start small, learn constantly, upgrade gradually.**

## Resources

- [VirtualBox Download](https://www.virtualbox.org/)
- [Kali Linux](https://www.kali.org/)
- [VulnHub](https://www.vulnhub.com/)
- [TryHackMe](https://tryhackme.com/)
- [My full lab setup guide](/projects/home-security-lab)

---

**Questions? Reach out! I'm always happy to help fellow learners get started.** 🚀

