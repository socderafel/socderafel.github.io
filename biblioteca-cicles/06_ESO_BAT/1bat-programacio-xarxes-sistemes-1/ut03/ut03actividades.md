---
layout: default
title: "✍️ Activitats pràctiques UT3 — Programació, Xarxes i Sistemes Informàtics I | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r Batxillerat · UT3 — Xarxes"
prev_url: "../ut03/ut0303.html"
prev_label: "⬅️ 3.3 Maquinari"
next_url: "../ut04/index.html"
next_label: "📘 UT4 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT3

> **✍️ 📋 Exercici / Qüestionari 3.1 — Ejemplo ejercicio redes**
> Calcula la IP de red y de broadcast sabiendo: • IP de host: 129.160.26.109 • Máscara de red: 255.255.240.0
>
> ### 1. Pasamos a decimal la IP de host y la máscara de red
>
> ### 2. La parte de 0 de la máscara indica la cantidad de 0 de la dirección de red
>
> ### 3. Pasamos la IP de red a binario
>
> ### 4. IP de broadcast: reemplazamos los 0 del final por 1 en la IP de red (en binario)
>
> ### 5. Pasamos la IP de broadcast a binario
>
> Decimal Binario IP de host 129.160.26.109 1100 0000. 1010 0000. 0001 1010. 0110 1101 Máscara de red 255.255.240.0 1111 1111. 1111 1111. 1111 0000. 0000 0000 IP de red 129.160.16.0 1100 0000. 1010 0000. 0001 0000. 0000 0000 IP de broadcast 129.160.31.255 1100 0000. 1010 0000. 0001 1111. 1111 1111 ¿Número de hosts? 2 número de 0 – 2 (IP de red, IP de broadcast) 212-2 = 4094 hosts Ejemplo de IP de host IP comprendida entre IP de red e IP de broadcast (129.160.16.0 - 129.160.31.255) Por ejemplo: 129.160.20.3 Nota
>
> Otra forma de dar los datos 129.160.26.109 / 20
>
> Tipos de direcciones:  Pública (Internet)  Proporcionada por el ISP (Internet Service Provider. Ej: Movistar, Vodafone…)  Puede ser: o Dinámica: por defecto. o Estática: más cara. Ej: servidores como Google  Tipos: o A: 1.0.0.0 – 126.255.255.255 o B: 128.0.0.0 – 191.255.255.255 o C: 192.0.0.0 – 223.255.255.255 o D: 224.0.0.0 – 239.255.255.255  Privada (Red interna)  Pueden ser
>
> o Dinámica: por defecto o Estática: configuración manual  Tipos: o A: 10.0.0.0 – 10.255.255.255 o B: 172.16.0.0 – 172.31.255.255 o C: 192.168.0.0 – 192.168.255.255 A: Grandes redes (multinacionales) Máscara: 255.000.000.000 B: Redes medianas (pymes, colegios…) Máscara: 255.255.000.000 C: Red doméstica (hogar) Máscara: 255.255.255.000 D: Redes multicast (Movistar, Netflix)

> **✍️ Activitat Pràctica 3.2 — Tasca1_RedDHCP**
> ### Practica 1
>
> ### Red DHCP
>
> - Arrastrem un PC i un portàtil a l’espai de treball.
>
> - Arrastrem un Router i un Switch a l’espai de treball.
>
> - Configurem el portàtil i l’ordinador amb el protocol DHCP i marquem també el check d’usar l’IP com a nom.
>
> - Configurem el router per a el protocol DHCP funcione correctament. Fem click al router. Després, al botó “DHCP server set up”
>
> - Posem el rang d’IPs que fara ús el router i “activem DHCP”.
>
> - Per últim, fem les connexions corresponents.
>
> - Fem clic en el botó “PLAY”. En este punt podem observar com es comuniquen els dispositius de la xarxa creada mitjançant el color verd del cable. També podem accelerar el procés amb la barra de velocitat.
>
> - Observa com s’han assignat a ambdós dispositius les IPs corresponents per funcionar en LAN.
>
> Preguntes
>
> - Per què cada ordinador s’assigna amb una IP distinta?
>
> - Què ocorreria si tots els ordinadors tingueren la mateixa IP?
>
> - Fes una captura de pantalla d’un ping d’un ordinador a un altre. Què ocorre?
>
> - Què és el DHCP?
>
> - Quina funció pa en este cas el router amb les IPs?
>
> Entregable
>
> - Puja a aules un Word amb una captura de pantalla de la teua simulació.
>
> - També, al mateixa Word, contestaràs les preguntes que ací tens.
>
> - Puja també a aules l’arxiu creat amb Filius.

> **✍️ Activitat Pràctica 3.3 — Tasca2_2subxarxes**
> ### Pràctica 2
>
> ### Creació de 2 subxarxes amb Filius
>
> Crea la següent xarxa amb el programa “Filius”.
>
> - Fixa’t que cada ordinador te una IP distinta.
>
> - La màscara será 255.255.255.0
>
> Preguntes
>
> - Com se que dos ordinadors están en xarxes distintes. Explica-ho amb les teues paraules.
>
> - Quants ordinadors hi ha a cada xarxa? Per què?
>
> - Que ocorre quan faig ping entre 2 ordinadors de la mateixa xarxa? Quins són? Posa una captura del ping entre els dos ordinadors
>
> - I quan faig ping entre 2 ordinadors de xarxes distintes? Quins has usat? Posa una captura del ping entre els dos ordinadors.
>
> Entregable
>
> - Puja a aules un Word amb una captura de pantalla de la teua simulació.
>
> - També, al mateixa Word, contestaràs les preguntes que ací tens.
>
> - Puja també a aules l’arxiu creat amb Filius.

> **✍️ Activitat Pràctica 3.4 — Tasca3_2SubxarxesRouter**
> ### Pràctica 3
>
> ### 2 Xarxes connectades per 1 Router
>
> Dissenya la següent xarxa amb Filius.
>
> - Fixa’t amb les IPs
>
> - La mascara de xarxa és 255.255.255.0
>
> - Gateway del router: 192.168.0.1 / 192.168.1.1
>
> - Recorda que els PCs han de tindre el gateway de la seua xarxa.
>
> Preguntes
>
> - Què diferència principal veus amb la pràctica anterior?
>
> - Què ocorre quan fas ping entre dos ordinadors de la mateixa xarxa? Fes una captura i explica`t.
>
> - Que ocorre quan fas ping entre dos ordinadors de xarxes distintes? Fes una captura i explica`t.
>
> - Quina funció té el router en esta pràctica?
>
> Entregable
>
> - Puja a aules un Word amb una captura de pantalla de la teua simulació.
>
> - També, al mateixa Word, contestaràs les preguntes que ací tens.
>
> - Puja també a aules l’arxiu creat amb Filius.

> **✍️ 📋 Exercici / Qüestionari 3.5 — Qüestionari Xarxes**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
