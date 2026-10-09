---
layout: default
title: "UT1 — Unit 1 - DHCP — Serveis de Xarxa i Internet | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT1 Completa"
prev_url: "../ut00/ut00actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT0"
next_url: "../ut01/ut0101.html"
next_label: "1.1 U1 DHCP ➡️"
---

# 📘 UT1 — Unit 1 - DHCP (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**1.1 U1 DHCP**](#ut0101) (o [obrir en pàgina individual ➡️](./ut0101.md) )
> - [**1.2 U1 P1**](#ut0102) (o [obrir en pàgina individual ➡️](./ut0102.md) )
> - [**1.3 U1 P2**](#ut0103) (o [obrir en pàgina individual ➡️](./ut0103.md) )
> - [**✍️ Activitats pràctiques UT1**](#ut01actividades) (o [obrir en pàgina individual ➡️](./ut01actividades.md) )

---

## 1.1 U1 DHCP

> **📌 🏷️ Apunt de la Unitat**
> #### **Resources**

> **📌 🏷️ Apunt de la Unitat**
> #### **Tasks**

> **📌 🏷️ Apunt de la Unitat**
> #### **Practices**

---

SXI / NSI - UNIT 1 - DHCP 2nd ASIX

2 ASIX - SXI Why do we need DHCP?

- What do we need to configure the network in a machine?
- IP
- Mask
- Gateway
- DNS

2 ASIX - SXI Why do we need DHCP?

- And how do we configure these parameters?
- Imagine this scenario
- You have been hired in a big company and they need to configure all the

network.

- There are more tan 200 computers and devices.
- You have to configure ALL of them.

2 ASIX - SXI Why do we need DHCP?

- You have 2 options.
- Option number 1
- In each computer

2 ASIX - SXI Why do we need DHCP?

- But most likely, after 150 devices configured, you’d be like

2 ASIX - SXI Why do we need DHCP?

- Option 2

2 ASIX - SXI What is DHCP?

- Is a service.
- Is a TCP/IP standard protocol.
- Application level.
- Client-Server model.
- Allows us to configure in the server the network parameters (IP’s,

mask, etc) and will be given to each client automatically and dinamically.

2 ASIX - SXI What is DHCP?

- When a configuration is given, this will remain a certain time.
- This is called a consession.
- Concession is for a delimited time. Afterwards has to be renewed (or

it will expire)

- Concessions avoid problems like IP’s expiry.
- Concession expiry time can be adjusted to the needs.

2 ASIX - SXI DHCP advantages

- Avoid IP conflicts
- Avoid network problems
- Centralized management.
- Time savings.
- Simplified management
- Dynamic

2 ASIX - SXI Fixed or dynamic configuration

- Is it always DHCP better than fixed?
- When do we need a fixed configuration?
- Can we set a fixed IP in a Dynamic environment?
- Can we set the range of IP’s to be assigned dynamically?

2 ASIX - SXI IP assignment types in DHCP

- Is it always DHCP better than fixed?
- When do we need a fixed configuration?
- Can we set a fixed IP in a Dynamic environment?
- Can we set the range of IP’s to be assigned dynamically?

2 ASIX - SXI IP assignment types in DHCP

- Automatic and ilimited
- Automatic and limited
- Manual or static

2 ASIX - SXI How DHCP works

- Protocol is described in RFC (Request For Comments).
- Through port 68, client sends messages trying to reach an active

DHCP server, which will response through port 67.

- Transport level UDP.

2 ASIX - SXI How DHCP works

- 1- Every time a client starts, this asks for an IP to DHCP Server.
- 2- This selects an IP from the range and offers it to the client.
- 3- If the client accepts the offer, the IP will be assigned during a

specific period of time. (previously accepted by both parts)

2 ASIX - SXI How DHCP works

2 ASIX - SXI How DHCP works

2 ASIX - SXI How DHCP works

- Lease process has 4 steps, so 4 DHCP different packets are used.
- DHCPDISCOVER: broadcast message.
- DHCPOFFER: offer IP from range
- DHCPREQUEST: client confirm IP to the selected server via broadcast

message. No selected will free the ip’s offered (in case +1 server).

- DHCPACK: Server confirms IP to client or deny it (DHCKNACK).

2 ASIX - SXI How DHCP works D ISCOVER O R A FFER EQUEST CKNOWLEDGE

2 ASIX - SXI How DHCP works

2 ASIX - SXI Renew leasing time

- When 50% of the leasing is due, clients try to renew the IP to keep it.
- DHCPREQUEST and DHCPACK.
- If not available, client will continue until 87,5% of time then, it will create a new

request (DORA).

- We can force it through commands in both, Windows and Linux.
- We can also relase it through commands.

2 ASIX - SXI Scopes

- A scope is a range of valid addresses available to be assigned to the

DHCP clients.

- We can group the clients in scopes to define the options they are

gonna get.

- Ip’s range
- Subnet Mark
- Leasing time

2 ASIX - SXI Is it secure?

2 ASIX - SXI Is it secure?

- DHCP spoofing.
- Service denial
- Man in the middle.
- DDoS attack

2 ASIX - SXI Questions?

---

## 1.2 U1 P1

DHCP Services Practices Installing and Configuring the DHCP Service (Windows) Observations: For the accomplishment of this practice two virtual machines are needed: – On both machines the network option will be configured as "Internal Network" – The client machine can work with any Windows version or Ubuntu.

The server machine will be configured with Windows 2016 Server Server Installation. (Windows 2016)

### 1. Assign the IP address of the server statically. (10.10.1.100 and 255.255.0.0)

### 2. Read the “Installing and Configuring a DHCP on Windows Server 2016” manual

Notes: • As the practice only deals with the assignment of IP addresses, the fields Domain name, primary DNS server and secondary DNS server can be left empty • Create a scope with the following information: • Complete the fields with the following data: You can choose between wired network access or wireless access to the network.

Choose depending on your network connection. Pág. 1 de 5

DHCP Services Practices DHCP service Configuration

#### 1) To access the server configuration go to the "Start" menu → "Administrative Tools" →

"DHCP". From this window you can

- Start / Stop Service: When a change is made, it is necessary to restart. Located on the

DHCP server click on "All tasks -> Restart"

- Make changes to the initial configuration.
- Configure IP address reservations

Exercises

- Change the IP grant time. To do this, right-click on the scope to modify and select the

"Properties" option. Make the necessary changes so that the IP is granted for a maximum of 10 days. (instead of 8 days) To check it from the client, use renew, to get another IP address. With ipconfig / all check the days. You can verify that the IP assignment has actually been made.

#### 2) Make a DHCP reservation for the computer of your partner, assigning the IP 10.10.1.200

#### 3) To get the MAC of your partner's computer, ping his/her IP address. Or he/she can run

ipconfig / all. Parameters to configure to make a new reservation: ◦Name of the reservation ◦IP Address we want to reserve ◦MAC address of the computer for which the reservation is made. Pág. 2 de 5

DHCP Services Practices ◦Description: optional ◦Compatibles types. Protocol used to do the assignment. On the client computer, use the ipconfig / release command to release the previous assignment. Check that you don't have IP address. Use ipconfig / renew command to request another IP.

Check that the assigned IP is the IP address reserved for the client. Pág. 3 de 5

---

## 1.3 U1 P2

DHCP Services Practices DHCP Server configuration in Ubuntu (16.04) Objectives Install and configure a DHCP server in linux and check its correct operation. Understand all the parameters that are used to configure a DHCP server Note: First we must configure an IP manually for the DHCP server. You can use IP 10.10.0.128, mask 255.255.0.0 and gateway 10.10.0.254.

Install a DHCP server

```bash
# sudo apt-get install isc-dhcp-server
```

Server Configuration Now assign the correct network card: In the INTERFACES line, you must assign the ethX (where X is the one that have the adapter for the manual IP), otherwise, assign it by the command

```bash
sudo nano /etc/default/isc-dhcp-server
```

Por example: INTERFACES=”eth1” Before changing the dhcp service configuration make a backup of the original file.

```bash
sudo cp /etc/dhcp/dhcpd.conf  /etc/dhcp/dhcpd.conf.copia
```

To configure the server options edit the file /etc/dhcp/dhcpd.conf Note that most of this file is commented on (# symbol). In english this symbol is called hash or hashtag At the end of the file type the following options. Subnet 10.10.0.0 netmask 255.255.0.0{ range initial_address final_address; (note_1) option broadcast-address ip_broadcast; option domain-name-servers ip_dns_servr; option netbios-name-servers ip_wins_server; option routers ip_gateway; default-lease-time 604800; (note_2) max-lease-time 604800 ; (note_2) } note_1 initial_address: 10.10.0.100 final_address: 10.10.0.110 Note_2 : The default-lease-time parameter is used to indicate the grant time of an IP in seconds.

The max-lease-time parameter is used to indicate the maximum IP lease time. Pág. 4 de 5

DHCP Services Practices To start the server execute: sudo service isc-dhcp-server start NOTE: Any change made to the configuration file require the service to be restarted.

```bash
sudo service isc-dhcp-server restart
```

Client Configuration Configure one virtual machine with Ubuntu, to be assigned the IP addresses via DHCP. Go to the command console and check the assignment obtained Address Reservation Go to the end of the DHCP configuration file, dhcpd.conf Write the following lines

host name_pc { hardware ethernet MAC_address; (your partner's mac address) fixed-address ip_to_reserve; } With ifconfig you can obtain the MAC_address ip_to_reserve reserve IP 10.10.0.130 To check it you must do the practice with your partner. Renew the previous grant

o To renew in Ubuntu: sudo dhclient -v Check the assigned IP Verify on the server this assignment. o To check it in Ubuntu server, you can check the file: /var/lib/dhcp/dhcpd.leases o To check it in Ubuntu client, you can check the file: /var/lib/dhcp/dhclient.leases Pág. 5 de 5

---

## ✍️ Activitats pràctiques UT1

> **✍️ Activitat Pràctica 1.1 — U1 A0**
> Unit 0 – Refresh
>
> U0 – A1
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Explain with your own word what is an IP and list classes and versions of
>
> it.
>
> ### 2. Convert this IP to binary -> 192.168.1.2
>
> ### 3. Why is important the subnet mask?
>
> ### 4. What’s the default subnet mask for a Class C IP?
>
> ### 5. How do we calculate the broadcast address of a subnet?
>
> ### 6. How do we calculate the network address of a subnet?
>
> ### 7. Can these 2 computers see each other? Why?
>
> PC A: 129.32.8.9/20 PC B: 129.32.0.2/20
>
> - How do you divide this network into 4 subnets? Don’t use VLSM.
>
> 192.168.1.0
>
> - Now do the same using VLSM.
>
> ### 10. What’s the command in Linux to know the network configuration?

> **✍️ Activitat Pràctica 1.2 — U1 A1**
> Unit 1 – DHCP
>
> U1 – A1
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. What is APIPA? Explain with your own words how it works and when it’s
>
> useful.
>
> ### 2. How can we configurate a client machine in Windows to get automatically
>
> the network configuration (use DHCP)? Add some screenshots of your own virtual machine.
>
> ### 3. How can we configurate a client machine in Linux to get automatically the
>
> network configuration (use DHCP)? Add some screenshots of your own virtual machine.
>
> ### 4. Explain with your own words (and add some screenshots to clarify) what
>
> happen in Windows when two Windows clients have the same network configuration.
>
> ### 5. Explain with your own words (and add some screenshots to clarify) what
>
> happen in Linux when two Linux clients have the same network configuration.
>
> ### 6. Explain with your own words (and add some screenshots to clarify) what
>
> happen in Windows when two clients (one Linux and one Windows) have the same network configuration.

> **✍️ Activitat Pràctica 1.3 — U1 A2**
> Unit 1 – DHCP
>
> U1 – A2
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Through the following links, you will be able to “configure” a domestic
>
> router online. There are router emulators so all the changes you make, won’t be saved.
>
> Configurate in each one the DHCP to enable it and set different ranges and different times of leasing. Add screenshots of your work.
>
> TP-LINK https://emulator.tp-link.com/EMULATOR_wr740nv7_eu/userRpm/Index.htm
>
> LINKSYS https://ui.linksys.com/ADSL2MUE/4.12/Setup-Nertwork.htm
>
> NETGEAR https://highspeed.tips/files/emulators/netgear_genie/start.html

> **✍️ Activitat Pràctica 1.4 — U1 A3**
> Unit 1 – DHCP
>
> U1 – A3
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Create the following architecture in Packet Tracer and configure the DHCP
>
> in WRS1 with the range from 192.168.1.100 to 192.168.1.200. Add a screenshot of your Packet Tracer screen adding a note with your name and surname like this
>
> ### 2. Check if DHCP leasing has worked by checking in the terminal (CLI) of
>
> each client the network configuration. Add screenshots of every terminal. Nombre Apellido
