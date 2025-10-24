---
layout: project
title: "Home Security Lab Setup"
status: completed
tags: [networking, virtualization, security-lab]
excerpt: "Building a complete home security lab with virtual machines, network segmentation, and vulnerable applications for security research."
---

## Project Overview

Created a comprehensive home security lab environment for practicing penetration testing, malware analysis, and security research in a safe, isolated environment.

## Motivation

As a security researcher, I needed:
- Safe environment to analyze malware
- Infrastructure to practice exploitation techniques
- Network to test security tools
- Isolated environment that doesn't affect my main network

## Architecture

### Network Design

```
Internet
   |
   ├── Router (pfSense)
   │   ├── Management VLAN (10.0.1.0/24)
   │   ├── Testing VLAN (10.0.2.0/24)
   │   └── Malware Analysis VLAN (10.0.3.0/24) - Fully isolated
   │
   ├── ESXi Host Server
   │   ├── Kali Linux (Attack box)
   │   ├── Windows 10 (Victim)
   │   ├── Ubuntu Server (Vulnerable apps)
   │   ├── Windows Server (AD environment)
   │   └── REMnux (Malware analysis)
   │
   └── Physical Security Devices
       ├── Raspberry Pi (Monitoring)
       └── Managed Switch
```

## Hardware Setup

### Server Specifications
- **CPU:** Intel i7-9700K (8 cores)
- **RAM:** 64GB DDR4
- **Storage:** 2TB NVMe SSD + 4TB HDD
- **Network:** Dual 1Gbps NICs
- **Hypervisor:** VMware ESXi 7.0

### Network Equipment
- pfSense firewall (repurposed desktop)
- Managed switch with VLAN support
- Raspberry Pi 4 for monitoring
- Dedicated access point for lab network

## Virtual Machines

### Attack Infrastructure
**Kali Linux**
- Penetration testing tools
- Custom scripts and exploits
- Network scanning utilities

**Parrot Security OS**
- Alternative toolset
- Privacy-focused tools

### Victim Machines
**Vulnerable by Design:**
- Metasploitable 2 & 3
- DVWA (Damn Vulnerable Web App)
- WebGoat
- VulnHub machines

**Realistic Targets:**
- Windows 10 with outdated software
- Ubuntu with misconfigured services
- Windows Server with Active Directory

### Analysis Environment
**REMnux**
- Malware analysis toolkit
- Network traffic analysis
- Reverse engineering tools

## Key Features

### 1. Network Segmentation
```bash
# pfSense firewall rules
# Management VLAN - Full access
pass in on $mgmt_if from $mgmt_net to any

# Testing VLAN - Internet access, no management
pass in on $test_if from $test_net to !$mgmt_net

# Malware VLAN - Fully isolated, no internet
block in on $malware_if from $malware_net to any
pass in on $malware_if from $malware_net to $malware_net
```

### 2. Snapshot System
All VMs have snapshots before testing:
- Clean baseline state
- Pre-infected states for malware analysis
- Quick rollback after experiments

### 3. Monitoring & Logging
**Security Onion** deployment:
- Full packet capture
- IDS/IPS with Suricata
- Log aggregation with Elasticsearch
- Visualization with Kibana

### 4. Automation Scripts

**Quick VM Deployment:**
```bash
#!/bin/bash
# deploy-lab.sh - Automated lab setup

# Deploy vulnerable web app
docker-compose up -d dvwa

# Start victim machines
vim-cmd vmsvc/power.on 10  # Windows 10
vim-cmd vmsvc/power.on 12  # Ubuntu Server

# Configure network isolation
ssh pfsense@10.0.1.1 'pfctl -d && pfctl -e'

echo "Lab ready for testing!"
```

## Use Cases

### Penetration Testing Practice
- Practice exploits in safe environment
- Test custom tools before real engagements
- Learn new techniques

### Malware Analysis
- Analyze suspicious files safely
- Study malware behavior
- Reverse engineer samples

### CTF Preparation
- Host CTF challenges locally
- Practice on archived competitions
- Develop solving strategies

### Tool Development
- Test security tools
- Debug exploits
- Develop custom utilities

## Challenges Overcome

### Resource Management
**Problem:** 64GB RAM not enough for all VMs simultaneously
**Solution:** Created VM groups based on scenarios, only run what's needed

### Network Complexity
**Problem:** Complex VLAN configuration
**Solution:** Documented everything, created network diagrams, automated configuration

### Malware Containment
**Problem:** Ensuring malware can't escape
**Solution:** Multiple layers - VM isolation, VLAN isolation, no internet for malware VLAN

## Cost Breakdown

- Server hardware: €800
- pfSense box: €150 (repurposed old PC)
- Managed switch: €120
- Raspberry Pi: €75
- Storage upgrades: €200
- **Total:** ~€1,345

## Lessons Learned

1. **Plan network topology first** - Changed it 3 times before getting it right
2. **Document everything** - Future me appreciates it
3. **Snapshots are essential** - Saved countless hours
4. **Resource planning matters** - Know your workloads
5. **Security in layers** - Multiple safeguards prevent accidents

## Future Improvements

- [ ] Add cloud integration (AWS/Azure lab)
- [ ] Implement automated CTF infrastructure
- [ ] Add more monitoring capabilities
- [ ] Create disaster recovery procedures
- [ ] Build red team vs blue team scenarios

## Resources

- [Building a Home Lab for Offensive Security](https://www.offensive-security.com/offsec/home-lab/)
- [Network Segmentation Best Practices](https://www.cisco.com/c/en/us/solutions/enterprise/design-zone-security/landing_segmentation.html)
- [r/homelab subreddit](https://reddit.com/r/homelab)

## Conclusion

This lab has been invaluable for my learning journey in cybersecurity. It provides a safe, flexible environment for experimentation while teaching important concepts like network design, virtualization, and security architecture.

**Total investment:** ~€1,345 and ~40 hours setup time
**Value gained:** Immeasurable hands-on experience

---

*Have questions about setting up your own lab? Feel free to reach out!*

