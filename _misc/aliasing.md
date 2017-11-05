---
title:  What is Aliasing?
author: Daniel Weibel
date: 14 April 2017
last_updated: 14 April 2017
---

# Alias-Effekt

Ein Signal mit einer hohen Frequenz wird mit einer niedrigeren Frequenz abgetastet. Dabei wird das Signal mit einer niedrigeren und falschen Frequenz wahrgenommen, als es eigentlich hat (es wird ein "Alias" von diesem Signal wahrgenommen, anstatt das eigentliche Signal selbst).

## Moiré-Effekt

- Alias-Effekt bei digital aufgenommenen Bildern, wenn sich z.B. die feinen Strukturen des aufgenommenen Objekts mit den Pixeln des Fotosensors überschlagen. 
- Bei anologen Bildern, wenn sich z.B. nicht exakt parallele Linien überlagern
- Allgemein kann der Moiré-Effekt als die Entstehung eines neuen groben Rasters durch die Überlagerung mehrerer feiner Raster bezeichnet werden.

## Anti-Aliasing

- Verminderung des Alias-Effekts durch Dämpfung der zu hohen Frequenzen mit einem Low-Pass Filter
- Auch die Verminderung des "Treppeneffekts" bei feinen Linien in Computergrafiken verursacht durch das Pixelraster wird als Anti-Aliasing bezeichnet (Kantenglättung).

# Bemerkung

Dass ein Rad (oder Propeller) bei hoher Drehgeschwindigkeit langsamer oder rückwärts zu drehen scheint, oder den Anschein macht stillzustehen, ist auch ein Alias-Effekt (Temporal Aliasing)
