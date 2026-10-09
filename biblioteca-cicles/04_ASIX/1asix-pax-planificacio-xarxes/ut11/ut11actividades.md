---
layout: default
title: "✍️ Activitats pràctiques UT11 — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT11 — U10 - Adreçament IP"
prev_url: "../ut11/ut1103.html"
prev_label: "⬅️ 11.3 Taula A2"
next_url: "../ut12/index.html"
next_label: "📘 UT12 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT11

> **✍️ Activitat Pràctica 11.1 — U10A0**
> Dada la siguiente dirección 172.25.0.0/16 aplicar VLSM pata satisfacer las siguientes necesidades
>
> - 2 subredes de 1000 hosts
> - 1 subred de 2000 hosts
> - 1 subred de 5 hosts
> - 1 subred de 60 hosts
> - 1 subred de 70 hosts
> - 15 subredes de 20hosts

> **✍️ Activitat Pràctica 11.2 — U10A1**
> Exercici VLSM Una empresa compta amb la propietat de la xarxa pública 130.0.0.0, i necessita realitzar un pla d’assignació VLSM optimitzat per estructurar l’activitat en diferents subxarxes que donen suport als àmbits de l’empresa. Es determina que s’han de poder direccionar les següents subxarxes
>
> • Una subxarxa amb 7500 dispositius per la xarxa Comercial (CO) • Tres subxarxes amb 1500 dispositius per a les Centrals Logístiques (CL1, CL2 i CL3) • Cinc subxarxes amb 180 dispositius per als Departaments (D1, D2, D3, D4 i D5) Aplica la tècnica de VLSM de forma òptima, assignant subxarxes en el ordre indicat, i mostra el resultat construint una taula amb els valors apropiats
>
> • Nom Xarxa – Subxarxa – CIDR – Rang de IPs (primera i ultima) – Broadcast Nom Xarxa Subxarxa CIDR Rang IP (primera) Rang IP (última) Broadcast CO CL1 CL2 CL3 D1 D2 D3 D4 D5

> **✍️ Activitat Pràctica 11.3 — U10A2**
> Subnetting Ejercicio 1 En una empresa del parque tecnológico de Paterna se ha decidido implantar una solución de red cableada para su red de área local. Mediante cableado estructurado se ha diseñado la electrónica de red que ocupará cada una de las tres plantas del edificio. Aquí podemos ver un dibujo.
>
> Después del despliegue del cableado y de la colocación de los equipos se necesita nombrar a cada equipo con una dirección IP. Para ello nos dan la red 212.35.70.128/25 Asigna las direcciones de cada uno de los elementos (PC´s , impresoras… etc) y cada IP necesaria (red, broadcast, rango de host…) según estos requerimientos
>
> - Ha de haber una red diferente por planta
> - Las IP de los portátiles iran en sentido decreciente desde la dirección más alta posible.
> - Al menos habrá que dejar libre una red de 12 host para usos futuros.
> - El router de la planta 1 ha te tener obligatoriamente la dirección IP 212.35.70.165

> **✍️ Activitat Pràctica 11.4 — U10A3**
> Subnetting Ejercicio 1 Se dispone de la dirección IP de clase C 200.68.30.0, y se desea construir una estructura de subredes que permita disponer de las siguientes redes: • Una red para el departamento de marketing de 15 hosts • Una red para el departamento de administración de 100 host.
>
> • Una red para el departamento de publicidad de 40 host El resto de direcciones IP no serán usadas de momento. Determina
>
> - La máscara de red de cada una de las subredes
> - Número de host que podrá albergar cada subred
> - Rango de direcciones de los host
> - Direccion de red y de broadcast para cada subred
>
> Ejercicio 2 Se dispone de la subred 200.68.30.0/26 a partir de la cual nos dicen que querrian hacer una división en subredes de manera que cada subred fuera lo más pequeña posible para albergar 2 host.
>
> - ¿De cuantas direcciones IP disponemos de inicio?
> - ¿Cual sería la máscara de subred que elegirías para cada subred?
> - ¿Cuantas direcciones IP has perdido al trocear la red?
>
> Ejercicio 3 Indica si las siguientes direcciones IP con su máscara podrían asignares a un host que fuese visible desde Internet. Si no es posible asignar esa dupla IP-Máscara explica el por qué,
>
> Subnetting Dirección IP Máscara de Subred Correcto/Incorrecto 8.8.8.8 255.0.0.0 213.0.87.239 255.255.255.240 190.1.2.3 255.255.255.128 192.168.240.100 255.255.255.224 126.255.254.253 255.0.0.0 244.201.7.99 255.240.0.0 200.1.2.32 255.255.255.224 200.1.2.32 255.255.255.192 131.14.90.7 255.255.252.0 12.84.120.3 255.255.255.254 172.16.0.1 255.255.0.0

> **✍️ Activitat Pràctica 11.5 — U10P1**
> Page 1 of 3 Packet Tracer - Investigate Unicast, Broadcast, and Multicast Traffic Topology
>
> Objectives Part 1: Generate Unicast Traffic Part 2: Generate Broadcast Traffic Part 3: Investigate Multicast Traffic Background / Scenario This activity will examine unicast, broadcast, and multicast behavior. Most traffic in a network is unicast. When a PC sends an ICMP echo request to a remote router, the source address in the IP packet header is the IP address of the sending PC. The destination address in the IP packet header is the IP address of the interface on the remote router. The packet is sent only to the intended destination.
>
> Using the ping command or the Add Complex PDU feature of Packet Tracer, you can directly ping broadcast addresses to view broadcast traffic. For multicast traffic, you will view EIGRP traffic. EIGRP is used by Cisco routers to exchange routing information between routers. Routers using EIGRP send packets to multicast address 224.0.0.10, which represents the group of EIGRP routers. Although these packets are received by other devices, they are dropped at Layer 3 by all devices except EIGRP routers, with no other processing required.
>
> Part 1: Generate Unicast Traffic Step 1: Use ping to generate traffic.
>
> - Click PC1 and click the Desktop tab > Command Prompt.
> - Enter the ping 10.0.3.2 command. The ping should succeed.
>
> Step 2: Enter Simulation mode.
>
> - Click the Simulation tab to enter Simulation mode.
> - Click Edit Filters and verify that only ICMP and EIGRP events are selected.
>
> Packet Tracer - Investigate Unicast, Broadcast, and Multicast Traffic
>
> Page 2 of 3
>
> - Click PC1 and enter the ping 10.0.3.2 command.
>
> Step 3: Examine unicast traffic. The PDU at PC1 is an ICMP echo request intended for the serial interface on Router3.
>
> - Click Capture/Forward repeatedly and watch while the echo request is sent to Router3 and the echo
>
> reply is sent back to PC1. Stop when the first echo reply reaches PC1. Which devices did the packet travel through with the unicast transmission? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - In the Simulation Panel Event List section, the last column contains a colored box that provides access to
>
> detailed information about an event. Click the colored box in the last column for the first event. The PDU Information window opens. What layer does this transmission start at and why? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Examine the Layer 3 information for all of the events. Notice that both the source and destination IP
>
> addresses are unicast addresses that refer to PC1 and the serial interface on Router3. What two changes take place at Layer 3 when the packet arrives at Router3? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Click Reset Simulation.
>
> Part 2: Generate Broadcast Traffic Step 1: Add a complex PDU.
>
> - Click Add Complex PDU. The icon for this is in the right toolbar and shows an open envelope.
> - Float the mouse cursor over the topology and the pointer changes to an envelope with a plus (+) sign.
> - Click PC1 to serve as the source for this test message and the Create Complex PDU dialog window
>
> opens. Enter the following values: • Destination IP Address: 255.255.255.255 (broadcast address) • Sequence Number: 1 • One Shot Time: 0 Within the PDU settings, the default for Select Application: is PING. What are at least 3 other applications available for use? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Click Create PDU. This test broadcast packet now appears in the Simulation Panel Event List. It also
>
> appears in the PDU List window. It is the first PDU for Scenario 0.
>
> - Click Capture/Forward twice. This packet is sent to the switch and then broadcasted to PC2, PC3, and
>
> Router1. Examine the Layer 3 information for all of the events. Notice that the destination IP address is 255.255.255.255, which is the IP broadcast address you configured when you created the complex PDU.
>
> Packet Tracer - Investigate Unicast, Broadcast, and Multicast Traffic
>
> Page 3 of 3 Analyzing the OSI Model information, what changes occur in the Layer 3 information of the Out Layers column at Router1, PC2, and PC3? ____________________________________________________________________________________ ____________________________________________________________________________________ f.
>
> Click Capture/Forward again. Does the broadcast PDU ever forward on to Router2 or Router3? Why? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - After you are done examining the broadcast behavior, delete the test packet by clicking Delete below
>
> Scenario 0. Part 3: Investigate Multicast Traffic Step 1: Examine the traffic generated by routing protocols.
>
> - Click Capture/Forward. EIGRP packets are at Router1 waiting to be multicast out of each interface.
> - Examine the contents of these packets by opening the PDU Information window and click
>
> Capture/Forward again. The packets are sent to the two other routers and the switch. The routers accept and process the packets, because they are part of the multicast group. The switch will forward the packets to the PCs.
>
> - Click Capture/Forward until you see the EIGRP packet arrive at the PCs.
>
> What do the hosts do with the packets? ____________________________________________________________________________________ ____________________________________________________________________________________ Examine the Layer 3 and Layer 4 information for all of the EIGRP events.
>
> What is the destination address of each of the packets? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Click one of the packets delivered to one of the PCs. What happens to those packets?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________ Based on the traffic generated by the three types of IP packets, what are the major differences in delivery?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________

> **✍️ Activitat Pràctica 11.6 — U10P2**
> Page 1 of 4 Packet Tracer - Subnetting Scenario Topology
>
> Addressing Table Device Interface
>
> ```bash
> IP Address
> ```
>
> Subnet Mask Default Gateway R1 G0/0
>
> G0/1
>
> S0/0/0
>
> R2 G0/0
>
> G0/1
>
> S0/0/0
>
> S1 VLAN 1
>
> S2 VLAN 1
>
> S3 VLAN 1
>
> S4 VLAN 1
>
> PC1 NIC
>
> PC2 NIC
>
> PC3 NIC
>
> PC4 NIC
>
> Objectives Part 1: Design an IP Addressing Scheme Part 2: Assign IP Addresses to Network Devices and Verify Connectivity
>
> Packet Tracer - Subnetting Scenario 1
>
> Page 2 of 4 Scenario In this activity, you are given the network address of 192.168.100.0/24 to subnet and provide the IP addressing for the network shown in the topology. Each LAN in the network requires enough space for, at least, 25 addresses for end devices, the switch and the router. The connection between R1 to R2 will require an IP address for each end of the link.
>
> Part 1: Design an IP Addressing Scheme Step 1: Subnet the 192.168.100.0/24 network into the appropriate number of subnets.
>
> - Based on the topology, how many subnets are needed?
>
> - How many bits must be borrowed to support the number of subnets in the topology table?
> - How many subnets does this create?
> - How many usable hosts does this create per subnet?
>
> Note: If your answer is less than the 25 hosts required, then you borrowed too many bits.
>
> - Calculate the binary value for the first five subnets. The first subnet is already shown.
>
> Net 0: 192 . 168 . 100 . 0 0 0 0 0 0 0 0
>
> Net 1: 192 . 168 . 100 . ___ ___ ___ ___ ___ ___ ___ ___
>
> Net 2: 192 . 168 . 100 . ___ ___ ___ ___ ___ ___ ___ ___
>
> Net 3: 192 . 168 . 100 . ___ ___ ___ ___ ___ ___ ___ ___
>
> Net 4: 192 . 168 . 100 . ___ ___ ___ ___ ___ ___ ___ ___ f. Calculate the binary and decimal value of the new subnet mask. 11111111.11111111.11111111. ___ ___ ___ ___ ___ ___ ___ ___
>
> 255 . 255 . 255 . ______
>
> Packet Tracer - Subnetting Scenario 1
>
> Page 3 of 4
>
> - Fill in the Subnet Table, listing the decimal value of all available subnets, the first and last usable host
>
> address, and the broadcast address. Repeat until all addresses are listed. Note: You may not need to use all rows. Subnet Table Subnet Number Subnet Address First Usable Host Address Last Usable Host Address Broadcast Address
>
> Step 2: Assign the subnets to the network shown in the topology.
>
> - Assign Subnet 0 to the LAN connected to the GigabitEthernet 0/0 interface of R1: __________________
> - Assign Subnet 1 to the LAN connected to the GigabitEthernet 0/1 interface of R1: __________________
> - Assign Subnet 2 to the LAN connected to the GigabitEthernet 0/0 interface of R2: __________________
> - Assign Subnet 3 to the LAN connected to the GigabitEthernet 0/1 interface of R2: __________________
> - Assign Subnet 4 to the WAN link between R1 to R2: _________________________________________
>
> Step 3: Document the addressing scheme. Fill in the Addressing Table using the following guidelines
>
> - Assign the first usable IP addresses to R1 for the two LAN links and the WAN link.
> - Assign the first usable IP addresses to R2 for the LANs links. Assign the last usable IP address for the
>
> WAN link.
>
> - Assign the second usable IP addresses to the switches.
> - Assign the last usable IP addresses to the hosts.
>
> Part 2: Assign IP Addresses to Network Devices and Verify Connectivity Most of the IP addressing is already configured on this network. Implement the following steps to complete the addressing configuration.
>
> Packet Tracer - Subnetting Scenario 1
>
> Page 4 of 4 Step 1: Configure IP addressing on R1 LAN interfaces. Step 2: Configure IP addressing on S3, including the default gateway. Step 3: Configure IP addressing on PC4, including the default gateway. Step 4: Verify connectivity. You can only verify connectivity from R1, S3, and PC4. However, you should be able to ping every IP address listed in the Addressing Table.

> **✍️ Activitat Pràctica 11.7 — U10P3**
> Page 1 of 3 Packet Tracer - Designing and Implementing a VLSM Addressing Scheme Topology You will receive one of three possible topologies. Addressing Table Device Interface
>
> ```bash
> IP Address
> ```
>
> Subnet Mask Default Gateway
>
> G0/0
>
> N/A G0/1
>
> N/A S0/0/0
>
> N/A
>
> G0/0
>
> N/A G0/1
>
> N/A S0/0/0
>
> N/A
>
> VLAN 1
>
> VLAN 1
>
> VLAN 1
>
> VLAN 1
>
> NIC
>
> NIC
>
> NIC
>
> NIC
>
> Objectives Part 1: Examine the Network Requirements Part 2: Design the VLSM Addressing Scheme Part 3: Assign IP Addresses to Devices and Verify Connectivity Background In this activity, you are given a /24 network address to use to design a VLSM addressing scheme. Based on a set of requirements, you will assign subnets and addressing, configure devices and verify connectivity.
>
> Part 1: Examine the Network Requirements Step 1: Determine the number of subnets needed. You will subnet the network address _________________________. The network has the following requirements
>
> Packet Tracer - Designing and Implementing a VLSM Addressing Scheme
>
> Page 2 of 3 • _________________________ LAN will require _________________________ host IP addresses • _________________________ LAN will require _________________________ host IP addresses • _________________________ LAN will require _________________________ host IP addresses • _________________________ LAN will require _________________________ host IP addresses How many subnets are needed in the network topology? ____________________________ Step 2: Determine the subnet mask information for each subnet.
>
> - Which subnet mask will accommodate the number of IP addresses required for ___________________?
>
> How many usable host addresses will this subnet support? ___________________
>
> - Which subnet mask will accommodate the number of IP addresses required for ___________________?
>
> How many usable host addresses will this subnet support? ___________________
>
> - Which subnet mask will accommodate the number of IP addresses required for ___________________?
>
> How many usable host addresses will this subnet support? ___________________
>
> - Which subnet mask will accommodate the number of IP addresses required for ___________________?
>
> How many usable host addresses will this subnet support? ___________________
>
> - Which subnet mask will accommodate the number of IP addresses required for the connection between
>
> _________________________ and _________________________? art 2: Design the VLSM Addressing Scheme Step 1: Divide the _____________________ network based on the number of hosts per subnet.
>
> - Use the first subnet to accommodate the largest LAN.
> - Use the second subnet to accommodate the second largest LAN.
> - Use the third subnet to accommodate the third largest LAN.
> - Use the fourth subnet to accommodate the fourth largest LAN.
> - Use the fifth subnet to accommodate the connection between _________________________ and
>
> _________________________. Step 2: Document the VLSM subnets. Complete the Subnet Table, listing the subnet descriptions (e.g. _______________________ LAN), number of hosts needed, then network address for the subnet, the first usable host address, and the broadcast address. Repeat until all addresses are listed.
>
> Packet Tracer - Designing and Implementing a VLSM Addressing Scheme
>
> Page 3 of 3 Subnet Table Subnet Description Number of Hosts Needed Network Address/CIDR First Usable Host Address Broadcast Address
>
> Step 3: Document the addressing scheme.
>
> - Assign the first usable IP addresses to _________________________ for the two LAN links and the
>
> WAN link.
>
> - Assign the first usable IP addresses to _________________________ for the two LANs links. Assign the
>
> last usable IP address for the WAN link.
>
> - Assign the second usable IP addresses to the switches.
> - Assign the last usable IP addresses to the hosts.
>
> art 3: Assign IP Addresses to Devices and Verify Connectivity Most of the IP addressing is already configured on this network. Implement the following steps to complete the addressing configuration. Step 1: Configure IP addressing on _________________________ LAN interfaces.
>
> Step 2: Configure IP addressing on _________________________, including the default gateway. Step 3: Configure IP addressing on _________________________, including the default gateway. Step 4: Verify connectivity. You can only verify connectivity from _________________________, _________________________, and _________________________. However, you should be able to ping every IP address listed in the Addressing Table.

> **✍️ Activitat Pràctica 11.8 — U10P4**
> Page 1 of 3 Packet Tracer - Implementing a Subnetted IPv6 Addressing Scheme Topology
>
> Addressing Table Device Interface IPv6 Address Link-Local R1 G0/0
>
> FE80::1 G0/1
>
> FE80::1 S0/0/0
>
> FE80::1 R2 G0/0
>
> FE80::2 G0/1
>
> FE80::2 S0/0/0
>
> FE80::2 PC1 NIC Auto Config PC2 NIC Auto Config PC3 NIC Auto Config PC4 NIC Auto Config Objectives Part 1: Determine the IPv6 Subnets and Addressing Scheme Part 2: Configure the IPv6 Addressing on Routers and PCs and Verify Connectivity
>
> Packet Tracer - Implementing a Subnetted IPv6 Addressing Scheme
>
> Page 2 of 3 Scenario Your network administrator wants you to assign five /64 IPv6 subnets to the network shown in the topology. Your job is to determine the IPv6 subnets, assign IPv6 addresses to the routers, and set the PCs to automatically receive IPv6 addressing. Your final step is to verify connectivity between IPv6 hosts.
>
> Part 1: Determine the IPv6 Subnets and Addressing Scheme Step 1: Determine the number of subnets needed. Start with the IPv6 subnet 2001:DB8:ACAD:00C8::/64 and assign it to the R1 LAN attached to GigabitEthernet 0/0, as shown in the Subnet Table. For the rest of the IPv6 subnets, increment the 2001:DB8:ACAD:00C8::/64 subnet address by 1 and complete the Subnet Table with the IPv6 subnet addresses.
>
> Subnet Table Subnet Description Subnet Address R1 G0/0 LAN 2001:DB8:ACAD:00C8::0/64 R1 G0/1 LAN
>
> R2 G0/0 LAN
>
> R2 G0/1 LAN
>
> WAN Link
>
> Step 2: Assign IPv6 addressing to the routers.
>
> - Assign the first IPv6 addresses to R1 for the two LAN links and the WAN link.
> - Assign the first IPv6 addresses to R2 for the two LANs. Assign the second IPv6 address for the WAN link.
> - Document the IPv6 addressing scheme in the Addressing Table.
>
> Part 2: Configure the IPv6 Addressing on Routers and PCs and Verify Connectivity Step 1: Configure the routers with IPv6 addressing. Note: This network is already configured with some IPv6 commands that are covered in a later course. At this point in your studies, you only need to know how to configure IPv6 address on an interface.
>
> Configure R1 and R2 with the IPv6 addresses you specified in the Addressing Table and activate the interfaces.
>
> ```bash
> Router(config-if)# ipv6 address ipv6-address/prefix
> Router(config-if)# ipv6 address ipv6-link-local link-local
> ```
>
> Step 2: Configure the PCs to automatically receive IPv6 addressing. Configure the four PCs for autoconfiguration. Each should then automatically receive full IPv6 addresses from the routers.
>
> Packet Tracer - Implementing a Subnetted IPv6 Addressing Scheme
>
> Page 3 of 3 Step 3: Verify connectivity between the PCs. Each PC should be able to ping the other PCs and the routers.
