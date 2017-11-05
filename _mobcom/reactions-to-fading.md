---
title: Reactions to Channel Fading
author: Daniel Weibel
date: 10 June 2016
last_updated: 10 June 2016
---

The channel quality between a base station and a user may vary due to fading.

A channel can fade along:

-   Time
-   Frequency
-   Position

In the following are different responses to compensate the effects of channel fading.

Link adaptation
---------------

Set transmission parameters, based on current channel condition:

-   **Transmission power control:** adjust Tx power according to channel
    quality (high quality $\rightarrow$ low Tx power vs. low quality
    $\rightarrow$ high Tx power). Ensure constant data rate at receiver.

-   **Transmission rate control:** adjust transmission data rate
    according to channel quality (high quality $\rightarrow$ high data
    rate vs. low quality $\rightarrow$ low data rate). The data rate is
    adjusted by the choice of the modulation scheme and the coding rate.
    Another name for transmission rate control is **Adaptive Modulation
    and Coding (AMC)**.

Scheduling
----------

Share radio resources (time, frequency, code, space, Tx power) among
users. More commonly, decide to/from which user to transmit at a given
time and/or frequency.

-   Maximum C/I scheduling (maximum rate scheduling)

-   Round-robin scheduling

-   Proportional-fair scheduling

Packet retransmission
---------------------

-   **Automatic Repeat Request (ARQ):** receiver checks incoming packets
    for errors. If no errors, receiver confirms reception to transmitter
    with ACK. If the packet contains an error, the receiver discards the
    packet and requests retransmission of the packet from the
    transmitter by sending a NACK (negative ACK).

-   **Hybrid ARQ (HARQ):** combination of Forward Error Correction (FEC)
    with ARQ. Receiver first corrects correctable errors with FEC. If an
    error cannot be corrected with FEC, the receiver discards the packet
    and requests retransmission of the packet.

-   **HARQ with soft combining:** same as HARQ with the difference that
    the receiver stores packets with uncorrectable errors before
    requesting a retransmission, and, if the retransmission still
    contains an error, combines the stored erroneous packet with the
    retransmitted erroneous packet before applying FEC.
