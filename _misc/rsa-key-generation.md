---
title:  RSA Encryption
author: Daniel Weibel
date:   1 September 2013
last_updated: 1 September 2013
---

Mathematical foundation of the RSA asymmetrical cryptosystem.

# Key Generation

1. Choose two prime numbers $p$ and $q$
2. Compute $n=p q$
2. Choose $a$ such that $\textrm{gcd}(a,\,\varphi(n))=1$
3. Compute $b$ such that $\textrm{mod}(a b,\,\varphi(n)) = 1$
4. **Public key:** $(n,\,a)$
5. **Private key:** $(p,\,q,\,b)$


# Encryption With Public Key

Let $(n,\,a)$ be the public key, $x$ the plain text and $y$ the ciphertext:

$$y = \textrm{mod}\left(x^a,\, n\right)$$


# Decryption With Private Key

Let $(p,\,q,\,b)$ be the private key, $y$ the ciphertext, and $x$ the plain text:

$$
x = \text{mod}\left(y^b,\,n\right)
$$

# Decryption With Public Key (Cracking RSA)

Let $(n,\,a)$ be the public key, $y$ the ciphertext and $x$ the plain text:

$$
\begin{align}
x & = \text{mod}\left(y^b,\,n\right) \\
 &  = \text{mod}\left(y^{ab},\,n\right) \\
 &  = \text{mod}\left(y^{1+k\varphi(n)}\right)
\end{align}
$$

Calculating the plain text $x$ requires to calculate $\varphi(n)$, which is equivalent to calculating the prime factors $p$ and $q$ of $n$, which is an NP problem (that is, not doable for large $n$).
