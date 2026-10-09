---
layout: default
title: "UT4 — U3 - Xarxes d'àrea local — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT4 Completa"
prev_url: "../ut03/ut03actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT3"
next_url: "../ut04/ut0401.html"
next_label: "4.1 U3 Xarxes àrea local ➡️"
---

# 📘 UT4 — U3 - Xarxes d'àrea local (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**4.1 U3 Xarxes àrea local**](#ut0401) (o [obrir en pàgina individual ➡️](./ut0401.md) )
> - [**✍️ Activitats pràctiques UT4**](#ut04actividades) (o [obrir en pàgina individual ➡️](./ut04actividades.md) )

---

## 4.1 U3 Xarxes àrea local

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

## ✍️ Activitats pràctiques UT4

> **✍️ Activitat Pràctica 4.1 — U3 A1**
> Unitat 3 – Xarxes d’àrea local
>
> U3 – A1
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
> - Envia el document i el fitxer de PT a través de la tasca creada en
>
> Aules.
>
> ### 1. Què és Ethernet? Quins nivell/subnivells ocupa? Escriu les avantatges
>
> sobre la resta de les LAN.
>
> ### 2. Ompli la següent taula sobre les xarxes d’àrea local
>
> Topologia Mètode d’accés al medi Breu descripció Ethernet
>
> Token Ring
>
> Token Bus
>
> FDDI
>
> WLAN
>
> ### 3. Buscar quins son els tipus de seguretat que existeixen a les xarxes de
>
> tipus WLAN en l’actualitat i comenta-les breument.
>
> ### 4. Busca en Internet quins tipus de xarxes inalàmbriques existeixen segons
>
> l’àrea geogràfica que ocupen
>
> ### 5. Construeix la xarxa que apareix en la imatge amb el Packet Tracer i
>
> comprova la connectivitat entre equips. Adjunta una captura i no oblides enviar també el fitxer del Packet Tracer.

> **✍️ Activitat Pràctica 4.2 — U3 P1**
> Page 1 of 4 Packet Tracer - Connecting a Wired and Wireless LAN Topology
>
> Packet Tracer - Connecting a Wired and Wireless LAN
>
> Page 2 of 4 Addressing Table Device Interface
>
> ```bash
> IP Address
> ```
>
> Connects To Cloud Eth6 N/A F0/0 Coax7 N/A Port0 Cable Modem Port0 N/A Coax7 Port1 N/A Internet Router0 Console N/A RS232 F0/0 192.168.2.1/24 Eth6 F0/1 10.0.0.1/24 F0 Ser0/0/0 172.31.0.1/24 Ser0/0 Router1 Ser0/0 172.31.0.2/24 Ser0/0/0 F1/0 172.16.0.1/24 F0/1 WirelessRouter Internet 192.168.2.2/24 Port 1 Eth1 192.168.1.1 F0 Family PC F0 192.168.1.102 Eth1 Switch F0/1 172.16.0.2 F1/0 Netacad.pka F0 10.0.0.254 F0/1 Configuration Terminal RS232 N/A Console Objectives Part 1: Connect to the Cloud Part 2: Connect Router0 Part 3: Connect Remaining Devices Part 4: Verify Connections Part 5: Examine the Physical Topology Background When working in Packet Tracer (a lab environment or a corporate setting), you should know how to select the appropriate cable and how to properly connect devices. This activity will examine device configurations in Packet Tracer, selecting the proper cable based on the configuration, and connecting the devices. This activity will also explore the physical view of the network in Packet Tracer.
>
> Part 1: Connect to the Cloud Step 1: Connect the cloud to Router0.
>
> - At the bottom left, click the orange lightning icon to open the available Connections.
>
> Packet Tracer - Connecting a Wired and Wireless LAN
>
> Page 3 of 4
>
> - Choose the correct cable to connect Router0 F0/0 to Cloud Eth6. Cloud is a type of switch, so use a
>
> Copper Straight-Through connection. If you attached the correct cable, the link lights on the cable turn green. Step 2: Connect the cloud to Cable Modem. Choose the correct cable to connect Cloud Coax7 to Modem Port0. If you attached the correct cable, the link lights on the cable turn green.
>
> Part 2: Connect Router0 Step 1: Connect Router0 to Router1. Choose the correct cable to connect Router0 Ser0/0/0 to Router1 Ser0/0. Use one of the available Serial cables. If you attached the correct cable, the link lights on the cable turn green. Step 2: Connect Router0 to netacad.pka.
>
> Choose the correct cable to connect Router0 F0/1 to netacad.pka F0. Routers and computers traditionally use the same wires to transmit (1 and 2) and receive (3 and 6). The correct cable to choose consists of these crossed wires. Although many NICs can now autosense which pair is used to transmit and receive, Router0 and netacad.pka do not have autosensing NICs.
>
> If you attached the correct cable, the link lights on the cable turn green. Step 3: Connect Router0 to the Configuration Terminal. Choose the correct cable to connect Router0 Console to Configuration Terminal RS232. This cable does not provide network access to Configuration Terminal, but allows you to configure Router0 through its terminal.
>
> If you attached the correct cable, the link lights on the cable turn black. Part 3: Connect Remaining Devices Step 1: Connect Router1 to Switch. Choose the correct cable to connect Router1 F1/0 to Switch F0/1. If you attached the correct cable, the link lights on the cable turn green. Allow a few seconds for the light to transition from amber to green.
>
> Step 2: Connect Cable Modem to Wireless Router. Choose the correct cable to connect Modem Port1 to Wireless Router Internet port. If you attached the correct cable, the link lights on the cable will turn green. Step 3: Connect Wireless Router to Family PC. Choose the correct cable to connect Wireless Router Ethernet 1 to Family PC.
>
> If you attached the correct cable, the link lights on the cable turn green.
>
> Packet Tracer - Connecting a Wired and Wireless LAN
>
> Page 4 of 4 Part 4: Verify Connections Step 1: Test the connection from Family PC to netacad.pka.
>
> - Open the Family PC command prompt and ping netacad.pka.
> - Open the Web Browser and the web address http://netacad.pka.
>
> Step 2: Ping the Switch from Home PC. Open the Home PC command prompt and ping the Switch IP address of to verify the connection. Step 3: Open Router0 from Configuration Terminal.
>
> - Open the Terminal of Configuration Terminal and accept the default settings.
> - Press Enter to view the Router0 command prompt.
> - Type show ip interface brief to view interface statuses.
>
> Part 5: Examine the Physical Topology Step 1: Examine the Cloud.
>
> - Click the Physical Workspace tab or press Shift+P and Shift+L to toggle between the logical and
>
> physical workspaces.
>
> - Click the Home City icon.
> - Click the Cloud icon. How many wires are connected to the switch in the blue rack? 2
> - Click Back to return to Home City.
>
> Step 2: Examine the Primary Network.
>
> - Click the Primary Network icon. Hold the mouse pointer over the various cables. What is located on the
>
> table to the right of the blue rack? ____________________________________________________________________________________
>
> - Click Back to return to Home City.
>
> Step 3: Examine the Secondary Network.
>
> - Click the Secondary Network icon. Hold the mouse pointer over the various cables. Why are there two
>
> orange cables connected to each device? ____________________________________________________________________________________
>
> - Click Back to return to Home City.
>
> Step 4: Examine the Home Network.
>
> - Why is there an oval mesh covering the home network?
>
> ____________________________________________________________________________________
>
> - Click the Home Network icon. Why is there no rack to hold the equipment?
>
> ____________________________________________________________________________________
>
> - Click the Logical Workspace tab to return to the logical topology.
