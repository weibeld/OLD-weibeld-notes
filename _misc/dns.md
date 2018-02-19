---
title:  How DNS Works
author: Daniel Weibel
date:   18 February 2018
last_updated: 18 February 2018
---

An overview of how the Domain Name System (DNS) works. It includes a step-by-step explanation of DNS lookups, and a section on domain registration and DNS configuration.

# Illustration

[![DNS Overview](assets/dns.png){:width="100%"}](assets/dns.png){:.image-link}

# DNS Lookup

The DNS translates hostnames, like `quantumsense.ai` to IP addresses. Here is how a translation of the hostname `quantumsense.ai` to an IP address of a webserver works (this corresponds ot the left part of above illustration):

## 1. Web Browser

The **web browser** asks the operating system for the IP address of `quantumsense.ai`.

## 2. Operating System
The **operating system** checks its cache. If it has no cached entry for `quantumsense.ai`, it asks a pre-configured resolving name server for the IP address of `quantumsense.ai`.

## 3. Resolving Name Server

The **resolving name server** that the operating system contacts is typically operated by the Internet Service Provider (ISP) or organisation (company, university) of the network that the machine is connected to. Find out which resolving name servers are configured in your operating system with:

~~~bash
scutil --dns | grep 'nameserver\[[0-9]*\]'
~~~

The resolving name servers knows one thing: an address of a root name server. So, the resolving name server checks its cache for an entry of `quantumsense.ai`. If it has none, it asks a root name server for the IP address of `quantumsense.ai`.

## 4. Root Name Server

The **root servers** are a network of hundreds of servers around the world that is supervised by the Internet Assigned Numbers Authority ([IANA](https://www.iana.org/)). IANA is a department of the Internet Corporation for Assigned Names and Numbers ([ICANN](https://www.icann.org/)).

The root servers are operated by different organisations, such as research institutions, companies, governments, universities, and ICANN itself. Here is some information from IANA about the [root servers](https://www.iana.org/domains/root/servers). And here is a [map](http://www.root-servers.org/) showing where all the root servers are located and who operates them.

A root server has to know one thing: an address of a top-level domain (TLD) name server for each TLD.

There exist two main types of TLDs: generic TLDs (gTLD) and country-code TLDs (ccTLDs). Country-code TLDs consist of two letters, and generic TLDs consist of three or more letters.

Here, IANA lists all existing [TLDs](https://www.iana.org/domains/root/db) along with the TLD registry who manages this TLD.

The root server doesn't know the IP address of `quantumsense.ai`, but it knows the IP address of an `ai` TLD name server, and it returns this address to the resolving name server. This allows the resolving name server to ask this `ai` TLD name server for the IP address of `quantumsense.ai`.

## 5. TLD Name Server

The **TLD name servers** are operated by the TLD registry of each TLD (which are listed in the [list](https://www.iana.org/domains/root/db) already linked to above). 

A TLD registry manages all the domain name registrations under its TLD. The TLD registry determines the prices and conditions for a domain registration. For example, if you want to register the domain `example.com`, you have to do this with the TLD registry for `com`, which is [VeriSign](https://www.verisign.com/). Or if you want to register the domain `example.ca`, you have to go to the TLD registry of `ca`, which is the Canadian Internet Registration Authority ([CIRA](https://cira.ca/)).

Note that actually you don't have to go to the TLD registry directly, because there are middlemen companies that can handle the interaction with the official TLD registry for you. These middlemen company are called domain name registrars, and examples are [Namecheap](https://www.namecheap.com/), [GoDaddy](https://godaddy.com), or [Marcaria](https://www.marcaria.com).

So, in the case of `quantumsense.ai`, a peek on the IANA [TLD list](https://www.marcaria.com) reveals that the registry for the `ai` TLD is the [Government of Anguilla](http://www.gov.ai/) (because `ai` is the country-code TLD of Anguilla). This means that the IP address that the resolving name server received from the root name server is the address of a TLD name server operated by the Government of Anguilla (actually, the servers don't have to be operated by the registry itself, but the registry is responsible for their operation).

A TLD server doesn't know the IP address of any domain using its TLD. That is, the Government of Anguilla TLD server does not know the IP address of `quantumsense.ai`. However, what the TLD name server know is the IP address of yet another name server that knows the desired IP address. This latter name server is called the authoritative name server of `quantumsense.ai`.

So, the TLD server returns the IP address of an authoritative name server for `quantumsense.ai` to the resolving name server. This will finally allow the resolving name server to get the IP address of `quantumsense.ai`.

## 6. Authoritative Name Server

**Authoritative name servers** are name servers that know the IP address of a sub-TLD domain name, such as `quantumsense.ai`.

This type of name severs can be operated by anyone. You can run one yourself for your domain. The only condition is that it runs on a machine that is connected to the Internet. This can be a machine in your home, or a rented computing instance in the cloud (e.g. on Amazon Web Services). Here is an example of how to [run your own DNS server](https://zwischenzugs.com/2018/01/26/how-and-why-i-run-my-own-dns-servers/).

Most of the time, however, authoritative name servers are operated by DNS hosting providers. Examples are [ns1](https://ns1.com/), [FreeDNS](https://freedns.afraid.org/), or [Google Cloud DNS](https://cloud.google.com/dns/). Note that also domain name registrars, such as [Namecheap](https://www.namecheap.com/), and some TLD registries, such as [CIRA](https://cira.ca/), run authoritative name severs, and if you register your domain with them, they usually propose to use their name servers for your domain as a default option. However, you can choose any name server you want for your domain.

Wherever the authoritative name server, whose IP address was returned by the TLD name server, runs, and whoever manages it, this name server now finally returns the IP address of `quantumsense.ai` to the resolving name server.

## 7. Back to the Web Browser

So, the resolving name server just found out the IP address of `quantumsense.ai`. It passes this IP address to the operating system on the local machine (answering its previous request), and the operating system passes the IP address to the web browser (answering its previous request as well).

And now finally the web browser is able to establish a connection to the `quantumsense.ai` webserver in order to load the website that is hosted there.


# Domain Registration and DNS Configuration

Reading through the above process, everything seems to make sense, except two points:

1. How does the TLD name server know the IP address of an authoritative name server of a given domain name?
    - For example, how does the `ai` TLD name server know the authoritative name server for `quantumsense.ai`?
2. How does an authoritative name server know the IP address that belongs to a given domain name?
    - For example, how does the authoritative name server of `quantumsense.ai` know the IP address belonging to this domain?

The following two subsections answer these question (not that this section corresponds to the right part of the illustration at the beginning).

## Configure TLD Name Server

The answer to question 1 above is as follows: when you register a domain name (either with a TLD registry, such as [CIRA](https://cira.ca/) or a domain name registrar, such as [Namecheap](https://www.namecheap.com/)), you are required to provide the names of two name servers that are authoritative for your domain (the number of two is to provide redundancy, in case one of the name server crashes). 

If you use a registrar like Namecheap, they propagate this information to the TLD registry. The TLD registry then pushes this information to its TLD name servers. That is, it adds an entry to all its TLD name servers consisting of your domain (e.g. `quantumsense.ai`) and the IP addresses of the authoritative name servers that you provided.

In this way, whenever an `ai` TLD server receives a request for `quantumsense.ai`, it knows the IP address of a name server that knows the IP address of this domain. This answers question 1.

## Configure Authoritative Name Server

The answer to question 2 above is as follows: well, you directly configure the authoritative name server with your domain and an IP address.

DNS servers are configured by adding so-called **DNS records**. These are simple key-value pairs where the key is a domain name. Here is a list of the most common [DNS records](https://support.marcaria.com/hc/en-us/articles/215527983-What-are-DNS-records-). Wikipedia also has a full list of [all DNS records](https://en.wikipedia.org/wiki/List_of_DNS_record_types).

For simply tying an IP address to a domain name, you have to add an **A record** that has the domain name as its key, and the desired IP address as its value.

For example, if you have a GitHub Pages website that you want to be accessible under your custom domain, you have to add an A record with your domain and an IP address provided by GitHub Pages to to the DNS server that you provided to your TLD registry when you registered the domain. As mentioned, this name server may be either run by your TLD registry itself (like CIRA), by your registrar (like Namecheap), by a DNS hosting provider (like ns1), or even by yourself. The important thing is that you are able to configure this DNS server.

And this is how the authoritative name server of your domain knows the IP address belonging to this domain, which answers question 2.


# Notes

An important observation about DNS is that it's **hierarchical.** On each level, the name servers know just the address of another name server that is responsible for the next-deeper level of the domain name, except on the level that corresponds to the "depth" of the domain name, which knows the concrete IP address of this domain name.

For example, for the IP address of a domain like `quantumsense.ai`, the requests have to go through three level, because this domain has a "depth" of three (root level, TLD level, and sub-TLD level).

However, the number of levels in DNS is unrestricted. For example, if you own the domain `quantumsense.ai`, you could in turn issue sub-domains, such as `a.quantumsense.ai`, `b.quantumsense.ai`, and so on. And then your name server on level 3 would act just as an intermediary name server for these domains. That is, your name server on level 3 would not be authoritative for `a.quantumsense.ai`, but it would in turn have to know another name server that is authoritative for this domain and return its IP address to the requester.

DNS is designed to work in this fashion on and on, down to any depth of nestings.
