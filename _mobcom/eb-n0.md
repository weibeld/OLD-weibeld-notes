---
title:  Energy per Bit to Noise Power Spectral Density Ratio
author: Daniel Weibel
date:   17 June 2016
last_updated:   17 June 2016
layout: page-dollarmath
---

The *energy per bit to noise power spectral density ratio* $E_b/N_0$ can be seen as a signal-to-noise ratio (SNR) per individual bit.

$E_b$
=====

**Energy per bit.**

Unit: J (Joule), Ws (Watt-second)

Calculated as *received signal power* (in Watts) divided by *bit rate* (in $\frac{1}{\text{s}}$):

$$E_b = \frac{\text{W}}{\frac{1}{\text{s}}} = \text{W}\, \frac{\text{s}}{1} = \text{Ws} = \text{J}$$

Remember: Energy/Work (J, Ws, kWh) vs. Power, i.e. *energy/work per time* (W)


$N_0$
=====

**Noise power spectral density.**

Unit: $\frac{\text{W}}{\text{Hz}}$

$$N_0 = \frac{\text{W}}{\text{Hz}} = \frac{\text{W}}{\frac{1}{\text{s}}} = \text{W}\, \frac{\text{s}}{1} = \text{Ws} = \text{J}$$

**Important:** the noise power spectral density $N_0$ is assumed to be constant. That is, white noise, in particular additive white Gaussian noise (AWGN), is assumed. For frequency-selective noise, the $E_b/N_0$ formula does not work.


$E_b/N_0$
=========

**Energy per bit to noise power spectral density ratio.**

Unit: dimensionless (often expressed in dB)

$$\frac{E_b}{N_0} = \frac{\text{J}}{\text{J}} = \cdot$$

$E_b/N_0$ can be seen as a "normalised SNR", in particular a "SNR per bit". This is because the traditional SNR is always relative to a certain bandwidth.
