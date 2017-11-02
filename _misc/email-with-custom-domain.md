---
title:  Set Up a Custom Domain E-Mail Address FOR FREE
author: Daniel Weibel
date:   4 April 2017
last_updated: 4 April 2017
---

Everybody can register a domain name (e.g. *weibeld.net*) with a domain name registrar like Namecheap, and use this domain name for a website. But what about an e-mail address with this domain? Is it also possible to send and receive e-mails from e.g. *info@weibeld.net*?

The answer is, yes, it is possible, but services that allow this are usually paid. For example, it can be done with Google's [G Suite](https://gsuite.google.com/products/gmail/), but it costs at least \$5 per month. 

Here is a way to achieve the same for completely **free**. It works by combining the two free services [Gmail](https://mail.google.com/) and [Mailgun](https://www.mailgun.com/).

These instructions assume that you have a Gmail account. If you don't have one, just create one.

# Goal

- Receive emails to an address with a custom domain (e.g. *info@weibeld.net*) to Gmail
- Send emails with this domain from Gmail

# Procedure

1. Register domain with [Namecheap](https://www.namecheap.com/) (or another registrar, but it's easy with Namecheap)
2. Add domain to [Mailgun](https://www.mailgun.com/)
3. Set up DNS records on Namecheap according to instructions of Mailgun
4. In Mailgun, forward incoming emails to Gmail (create a *Route*)
5. In Mailgun, create SMTP credentials for the domain (for sending emails)
6. In Gmail, *"add another email address you own"* and set up with Mailgun SMTP credentials

# Notes

- Do not create a subdomain for Mailgun (e.g. *mailgun.weibeld.net*) as recommended by Mailgun. This is only necessary if emails to *weibeld.net* are to be received to multiple providers (i.e. Mailgun and some other email provider).
- For the DNS entries in Namecheap:
    - Omit the top and 2nd-level domain names (e.g. omit `weibeld.net`)
    - Use `@` to specify the top and 2nd-level domain names (e.g. `@` means `weibeld.net`)

# References

- [Hacking Gmail to use custom domains for free](https://simplyian.com/2015/01/07/Hacking-GMail-to-use-custom-domains-for-free/)
