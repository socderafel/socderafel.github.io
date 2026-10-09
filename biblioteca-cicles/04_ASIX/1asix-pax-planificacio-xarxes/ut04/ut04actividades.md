---
layout: default
title: "✍️ Activitats pràctiques UT4 — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT4 — U3 - Xarxes d'àrea local"
prev_url: "../ut04/ut0401.html"
prev_label: "⬅️ 4.1 U3 Xarxes àrea local"
next_url: "../ut05/index.html"
next_label: "📘 UT5 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT4

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
