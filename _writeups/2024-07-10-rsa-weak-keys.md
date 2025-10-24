---
layout: writeup
title: "Cryptography - RSA Weak Keys"
competition: "picoCTF 2024"
category: "Crypto"
date: 2024-07-10
tags: [cryptography, rsa, mathematics]
excerpt: "Breaking RSA encryption by exploiting small public exponents and common modulus attacks."
---

## Challenge Description

We're given an RSA public key with a suspiciously small exponent and multiple ciphertexts encrypted with related keys.

**Files provided:**
- `pubkey1.pem`
- `pubkey2.pem`
- `ciphertext1.txt`
- `ciphertext2.txt`

## Initial Analysis

Examining the public keys:

```python
from Crypto.PublicKey import RSA

key1 = RSA.import_key(open('pubkey1.pem').read())
key2 = RSA.import_key(open('pubkey2.pem').read())

print(f"Key 1: n={key1.n}, e={key1.e}")
print(f"Key 2: n={key2.n}, e={key2.e}")
```

Output:
```
Key 1: n=12345..., e=3
Key 2: n=12345..., e=3
```

**Red flags:**
- Both keys use the same modulus `n`
- Small public exponent `e=3`

## Vulnerability: Common Modulus Attack

When the same modulus is used with different exponents, we can recover the plaintext without factoring `n`.

### Mathematical Background

Given:
- Same modulus `n`
- Same message `m`
- Two encryptions: `c1 = m^e1 mod n` and `c2 = m^e2 mod n`

If `gcd(e1, e2) = 1`, we can use the Extended Euclidean Algorithm to find `a` and `b` such that:
```
a*e1 + b*e2 = 1
```

Then:
```
m = (c1^a * c2^b) mod n
```

## Exploitation

```python
def egcd(a, b):
    if a == 0:
        return (b, 0, 1)
    else:
        g, y, x = egcd(b % a, a)
        return (g, x - (b // a) * y, y)

def common_modulus_attack(c1, c2, e1, e2, n):
    gcd, a, b = egcd(e1, e2)

    if gcd != 1:
        raise ValueError("e1 and e2 must be coprime")

    # Handle negative exponents
    if a < 0:
        c1 = pow(c1, -1, n)
        a = -a
    if b < 0:
        c2 = pow(c2, -1, n)
        b = -b

    m = (pow(c1, a, n) * pow(c2, b, n)) % n
    return m

# Read ciphertexts
c1 = int(open('ciphertext1.txt').read())
c2 = int(open('ciphertext2.txt').read())

# Attack
m = common_modulus_attack(c1, c2, 3, 5, key1.n)

# Convert to bytes
flag = m.to_bytes((m.bit_length() + 7) // 8, 'big')
print(flag.decode())
```

## Flag

```
picoCTF{c0mm0n_m0dulus_4tt4ck_w0rks}
```

## Key Takeaways

- Never reuse RSA modulus for different key pairs
- Small public exponents can be dangerous in certain scenarios
- Understanding the mathematics behind attacks is crucial
- Common modulus attack is a classic cryptographic vulnerability

## References

- [Twenty Years of Attacks on the RSA Cryptosystem](https://crypto.stanford.edu/~dabo/pubs/papers/RSA-survey.pdf)
- [RSA Common Modulus Attack](https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Attacks_against_plain_RSA)

