---
title:  Networking Devices Glossary
author: Daniel Weibel
date:   24 June 2016
last_updated: 24 June 2016
---


Hub
===

Operates at layer 1.

A hub has serveral input/output ports. An incoming signal at any port is forwarded to all the other ports, except the original incoming port (i.e. an incoming message is flooded all over the network).

Also known as: Ethernet hub, active hub, network hub, repeater hub, multiport repeater.



Switch
======

Operates at layer 2.

A switch is similar to a hub, except that an incoming signal is not forwarded to all output ports, but only to the port(s) that are connected to the destination device(s). This port selection is done based on rules on the destination MAC addresses of incoming packets.

Also known as: switching hub, bridging hub, MAC bridge.



Router
======

Operates at layer 3.

A router forwards layer 3 (e.g. IP) packets to another router and eventually to the destination device(s). A router is always connected to at least two data lines from different networks. If a packet comes in on any data line, the router decides, based on the destination IP address, to which output line (i.e. to which other router or destination device) to forward the packet. These forwarding rules are defined in the router's routing tables.



Multi-layer switch
==================

Operates at layers 3--7.

Switches operating at higher layers than layer 2. An example are layer 3 switches which perform basically the same function as routers.
