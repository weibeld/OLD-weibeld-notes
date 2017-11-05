---
title: LTE Internals
author: Daniel Weibel
date: 14 July 2016
last_updated: 5 August 2016
---

Internal workings of LTE, with special focus on Layer 1 (PHY) and Layer 2 (MAC).

For a list of acronyms, see [Acronyms](#acronyms).

# Protocol Architecture

The layers of the LTE protocol:

![Protocol Architecture 1](assets/lte_protocol_architecture_1.png){:width="100%"}

A more detailed view:

![Protocol Architecture 2](assets/lte_protocol_architecture_2.png){:width="100%"}

# Channels

A channel can be seen like a "category" of a piece of data that is passed between protocol layers (and exchanged between network entities).

## Downlink

Channels used by the eNodeB:

![Downlink Channels](assets/lte_channels_downlink.png){:width="100%"}

## Uplink

Channels used by the UE:

![Uplink Channels](assets/lte_channels_uplink.png){:width="60%"}{:.center-image}

# Downlink Data Flow

Flow of data packages that an eNodeB sends to an UE:

![Downlink Data Flow](assets/lte_data_flow.png){:width="100%"}


# DL-SCH Processing in the PHY Layer

This shows what happens when the MAC layer on the eNodeB passes some data to the PHY layer on the DL-SCH channel:

![DL-SCH Processing 2](assets/lte_dlsch_processing_2.png){:width="100%"}

The following shows the same as the above figure, but illustrated differently:

![DL-SCH Processing 1](assets/lte_dlsch_processing_1.png){:width="100%"}


# Transmission Modes

![Transmission Modes](assets/lte_transmission_modes.png){:width="100%"}


# Acronyms

| |
|:-|:-
| LTE | Long-Term Evolution
| UE  | User Equipment
| MME | Mobility Management Entity
| NAS | Non-Access-Stratum
| RRC | Radio Resource Control
| PDCP | Packet Data Convergence Protocol
| RLC | Radio Link Control
| MAC | Medium Access Control
| PHY | Physical
| CRC | Cyclic Redundancy Check
| HARQ | Hybrid Automatic Repeat Request
| OFDM | Orthogonal Frequency-Division Multiplexing
{:.acronyms}

The acronyms of the channels are resolved directly in the figures of the [downlink](#downlink) and [uplink](#uplink) channels.

# References

- [Understanding LTE with Matlab](https://www.mathworks.com/support/books/book90221.html) (source of most figures)
