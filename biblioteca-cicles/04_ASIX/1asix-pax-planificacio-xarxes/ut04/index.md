---
layout: default
title: "UD3 — Xarxes d'àrea local · Temari Complet"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT4 Completa"
prev_url: "../ut03/ut0302.html"
prev_label: "⬅️ 2.2 1 IPs"
next_url: "../ut04/ut0401.html"
next_label: "3.1 U3 Xarxes àrea local ➡️"
---

# 📘 UD3 — Xarxes d'àrea local (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**3.1 U3 Xarxes àrea local**](./ut0401.md)

---

# 3.1 U3 Xarxes àrea local

📎 **Material de laboratori (U3 E1):** `Captura de pantalla-01 a las 19.21.05.png`

---

PAX - U3 – Xarxes d’àrea local 1er ASIX

1 ASIX - PAX Característiques

- Operen dins d’un àrea geogràfica limitada. Màxim 4 km, sempre que

el cable no supere els 100m aprox.

- Permet multiaccés a medis amb gran ampli de banda
- Controla la xarxa de forma privada amb administració local
- Titularitat privada

1 ASIX - PAX Característiques

- Baixa tassa d’error
- Topologia física: bus, anell, estrella(més habitual), arbre
- Estàndards: Ethernet, WIFI, etc.

1 ASIX - PAX Avantatges

- Compartir recursos
- Perifèrics, app’s, dades, càlcul, etc.
- Fiabilitat
- Gestió centralitzada, seguretat, etc.
- Eficiència
- Gestió d’usuaris, grups, permisos, directives, etc.
- Flexibilitat
- Canvis en situació física dels equips no afecten

1 ASIX - PAX Inconvenients

- Seguretat i privacitat
- Manteniment
- Limitació de distància
- Si tenim servidor i cau, cau la xarxa.

1 ASIX - PAX Projecte IEEE 802

- Publicat en 1985 per IEEE amb l’objectiu de comunicar equips de

diferents fabricants.

- Cobreix els dos primers nivells del model OSI i part del tercer nivell.
- La segona capa la divideix en 2 subnivells

1 ASIX - PAX Projecte IEEE 802

- Subnivell LLC – 802.2 – És el mateix per a totes les xarxes
- Subnivell MAC - 802.3-802-22 – Conté mòduls diferents per cada

xarxa.

1 ASIX - PAX Projecte IEEE 802

- El projecte IEEE 802 conté molts estàndards: 802.1 fins 802.22
- Corresponen a les LAN
- Ethernet 802.3
- Token Bus 802.4
- Token Ring 802.5
- FDDI 802.8
- WLAN 802.11

1 ASIX - PAX Projecte IEEE 802

1 ASIX - PAX Ethernet - IEEE 802.3

- Tecnologia LAN més utilitzada hui en dia
- Funciona en la capa d’enllaç i en la capa física
- Depén de les dos subcapes de la capa d’enllaç per a funcionar (LLC i

MAC)

1 ASIX - PAX Ethernet - IEEE 802.3

- Subcapa LLC. Control enllaç lògic. Maneja la comunicació entre capes

superiors i inferiors. Se implementa via software (SW) i és completament independent del hardware (HW).

- Subcapa MAC. Control accés al medi. És la subcapa inferior i

s’implementa mitjançant HW, generalment, en la NIC (Network Interface Card) de la computadora.

1 ASIX - PAX Ethernet - IEEE 802.3 - Característiques

- Usa senyals digitals
- Full Duplex
- Un únic canal de dades (no multiplexació)
- Gasta repetidors, hubs i switchs

1 ASIX - PAX Ethernet - IEEE 802.3 - Característiques

- Topologia estrella
- Mètode accés al medi: CSMA/CSD
- Varis usuaris comparteixen mateix medi, perill que envien senyals a la vegada i col·lisione. Cal un

mecanisme per a regular l’enviament.

- Adreçament físic: MAC
- Cada estació de la xarxa ethernet té una targeta de xarxa (NIC), que proporciona una interfície

física única en format de 12 dígits hexadecimals. 00-1F-D0-94-AE-CC

- Per conèixer la direcció física del teu equip, des de terminal executem
- Windows: ipconfig /all
- Linux: ip a s

1 ASIX - PAX Ethernet - IEEE 802.3 - Tecnologies

- Es tracta de les versions d’Ethernet que existeixen.
- Cada implementació es representa per un codi.
- Tassa de transferència (Mbps)
- Tipo de transmissió (Base/Broad)
- Màxima longitud sense degradació de senyal (en hectòmetres) o tipus de cable.

1 ASIX - PAX Ethernet - IEEE 802.3 - Tecnologies

- Ethernet – IEEE 802.3 - 10 Mbps

1 ASIX - PAX Ethernet - IEEE 802.3 - Tecnologies

- Fast Ethernet – IEEE 802.3u - 100 Mbps

1 ASIX - PAX Ethernet - IEEE 802.3 - Tecnologies

- Gigabit Ethernet – IEEE 802.3ab - 1 Gbps

1 ASIX - PAX Ethernet - IEEE 802.3 - Tecnologies

- 10 Gigabit Ethernet – IEEE 802.3ae - 100 Mbps

1 ASIX - PAX Token Bus - IEE 802.4

- LAN amb topologia física en bus i amb organització lògica en anell.

1 ASIX - PAX Token Bus - IEE 802.4

- Els nodes es connecten amb cable coaxial (com el de l’antena de TV)
- Sempre hi ha un token el qual les estacions de xarxa es van passant

segons l’ordre en el que estan connectades. Sols pot transmetre un node i serà el que tinga el token.

- Si no té cap data a transmetre, passa el token al veí.

1 ASIX - PAX Token Ring - IEE 802.5

- Igual que el token bus però es connecten amb topologia en anell.

1 ASIX - PAX FDDI - IEE 802.8

- Fiber Distributed Data Interface. Interfície de dades distribuïda per fibra.
- Estàndard per a la transmissió de dades en xarxes locals (i WAN) sobre fibra

òptica.

- El mètode d’accés es mitjançant token.
- S’implementa com un anell doble.

1 ASIX - PAX FDDI - IEE 802.8

- Primer anell per a la transmissió i el segon de suport.
- Comunicació dúplex i fins un radi de 200 km.

1 ASIX - PAX WLAN - IEE 802.11

- WLAN o WiFi es una xarxa de xarxa sense fil que utilitza ondes de

radio.

- Complementen les LAN per cable.
- Instal·lació fàcil, econòmica, aplega on el cable no pot aplegar.
- Important en portàtils i dispositius mòbils

1 ASIX - PAX WLAN - IEE 802.11

- La velocitat depén de la versió utilitzada

1 ASIX - PAX WLAN - IEE 802.11

- Necessita que els “clients” tinguen interfície inalàmbrica. Poden ser

interns o externs.

- Ad-Hoc o xarxa de infraestructura

1 ASIX - PAX Dubtes?

---
