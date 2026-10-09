---
layout: default
title: "✍️ Activitats pràctiques UT10 — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT10 — U9 - Nivell de xarxa. El router"
prev_url: "../ut10/ut1001.html"
prev_label: "⬅️ 10.1 U9 Nivell de xarxa. El Router"
next_url: "../ut11/index.html"
next_label: "📘 UT11 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT10

> **✍️ Activitat Pràctica 10.1 — U9A1**
> Unitat 9 – Nivell de xarxa. El router U9 – A1
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
>
> ### 1. Investiga i explica que conté cadascun dels camps de la capçalera de IPv4 i
>
> de la capçalera de IPv6.

> **✍️ Activitat Pràctica 10.2 — U9P1**
> Packet Tracer: Revisión de la tabla ARP Topología
>
> Tabla de direccionamiento Dispositivo Interfaz Dirección MAC Interfaz del switch Router0 Gg0/0 0001.6458.2501 G0/1 S0/0/0 N/D N/D Router1 G0/0 00E0.F7B1.8901 G0/1 S0/0/0 N/D N/D 10.10.10.2 Inalámbrica 0060.2F84.4AB6 F0/2 10.10.10.3 Inalámbrica 0060.4706.572B F0/2 172.16.31.2 F0 000C.85CC.1DA7 F0/1 172.16.31.3 F0 0060.7036.2849 F0/2 172.16.31.4 G0 0002.1640.8D75 F0/3 Objetivos Parte 1: Examinar una solicitud de ARP Parte 2: Examinar una tabla de direcciones MAC del switch Parte 3: Examinar el proceso ARP en comunicaciones remotas Aspectos básicos Esta actividad está optimizada para la visualización de PDU. Los dispositivos ya están configurados. Reunirá información de PDU en el modo de simulación y responderá una serie de preguntas sobre los datos que obtenga.
>
> Packet Tracer: Revisión de la tabla ARP
>
> Parte 1: Examinar una solicitud de ARP Paso 1: Generar solicitudes de ARP haciendo ping a 172.16.31.3 en 172.16.31.2.
>
> - Haga clic en 172.16.31.2 y abra el símbolo del sistema.
> - Introduzca el comando arp -d para borrar la tabla ARP.
> - Ingrese al modo Simulation (Simulación) e introduzca el comando ping 172.16.31.3. Se generan dos
>
> PDU. El comando ping no puede completar el paquete ICMP sin conocer la dirección MAC del destino. Por lo tanto, la PC envía una trama de difusión de ARP para encontrar la dirección MAC del destino.
>
> - Haga clic en Capture/Forward (Capturar/Adelantar) una vez. La PDU ARP mueve el Switch1, mientras
>
> que la PDU ICMP desaparece y espera la respuesta de ARP. Abra la PDU y registre la dirección MAC de destino. ¿Esta dirección se indica en la tabla anterior? _______________________________________
>
> - Haga clic en Capture/Forward (Capturar/Adelantar) para mover la PDU al siguiente dispositivo.
>
> ¿Cuántas copias de la PDU realizó el Switch1? ____________________________________________ f. ¿Cuál es la dirección IP del dispositivo que aceptó la PDU? ___________________________________
>
> - Abra la PDU y examine la capa 2. ¿Qué sucedió con las direcciones MAC de origen y destino?
>
> ____________________________________________________________________________________
>
> - Haga clic en Capture/Forward (Capturar/Adelantar) hasta que la PDU regrese a 172.16.31.2. ¿Cuántas
>
> copias de la PDU realizó el switch durante la respuesta de ARP? _______________________________ Paso 2: Examinar la tabla ARP.
>
> - Observe que vuelve a aparecer el paquete ICMP. Abra la PDU y examine las direcciones MAC. ¿Las
>
> direcciones MAC de origen y destino coinciden con sus direcciones IP? _________________________
>
> - Vuelva a cambiar al modo Realtime (Tiempo real); el ping se completa.
> - Haga clic en 172.16.31.2 e introduzca el comando arp -a. ¿A qué dirección IP corresponde la entrada de
>
> la dirección MAC? ____________________________________________________________________
>
> - En general, ¿cuándo emite una terminal una solicitud de ARP?
>
> ____________________________________________________________________________________ Parte 2: Examinar una tabla de direcciones MAC del switch Paso 1: Generar tráfico adicional para completar la tabla de direcciones MAC del switch.
>
> - En 172.16.31.2, introduzca el comando ping 172.16.31.4.
> - Haga clic en 10.10.10.2 y abra el símbolo del sistema.
> - Introduzca el comando ping 10.10.10.3. ¿Cuántas respuestas se enviaron y se recibieron? __________
>
> Paso 2: Examinar la tabla de direcciones MAC en los switches.
>
> - Haga clic en Switch1 y, a continuación, en la ficha CLI. Introduzca el comando show mac-address
>
> table. ¿Las entradas corresponden a las de la tabla de arriba? ________________________________
>
> - Haga clic en Switch0 y, a continuación, en la ficha CLI. Introduzca el comando show mac-address
>
> table. ¿Las entradas corresponden a las de la tabla de arriba? ________________________________
>
> - ¿Por qué hay dos direcciones MAC asociadas a un puerto?
>
> ____________________________________________________________________________________
>
> Packet Tracer: Revisión de la tabla ARP
>
> Parte 3: Examinar el proceso ARP en comunicaciones remotas Paso 1: Generar tráfico para producir tráfico ARP.
>
> - Haga clic en 172.16.31.2 y abra el símbolo del sistema.
> - Introduzca el comando ping 10.10.10.1.
> - Escriba arp -a. ¿Cuál es la dirección IP de la nueva entrada de la tabla ARP? ____________________
> - Escriba arp -d para borrar la tabla ARP y cambiar al modo Simulation (Simulación).
> - Repita el ping a 10.10.10.1. ¿Cuántas PDU aparecen? _______________________________________
>
> f. Haga clic en Capture/Forward (Capturar/Adelantar). Haga clic en la PDU que ahora se encuentra en el Switch1. ¿Cuál es la dirección IP de destino objetivo de la solicitud de ARP? _____________________
>
> - La dirección IP de destino no es 10.10.10.1. ¿Por qué?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ Paso 2: Examinar la tabla ARP en el Router1.
>
> - Cambie al modo Realtime. Haga clic en Router1 y, a continuación, en la ficha CLI.
> - Ingrese al modo EXEC privilegiado y, a continuación, introduzca el comando show mac-address-table.
>
> ¿Cuántas direcciones MAC figuran en la tabla? ¿Por qué? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Introduzca el comando show arp. ¿Existe una entrada para 172.16.31.2? _______________________
> - ¿Qué sucede con el primer ping en una situación en la que el router responde a la solicitud de ARP?
>
> ____________________________________________________________________________________

> **✍️ Activitat Pràctica 10.3 — U9P2**
> Page 1 of 4 Packet Tracer - Configure Initial Router Settings Topology
>
> Objectives Part 1: Verify the Default Router Configuration Part 2: Configure and Verify the Initial Router Configuration Part 3: Save the Running Configuration File Background In this activity, you will perform basic router configurations. You will secure access to the CLI and console port using encrypted and plain text passwords. You will also configure messages for users logging into the router.
>
> These banners also warn unauthorized users that access is prohibited. Finally, you will verify and save your running configuration. Part 1: Verify the Default Router Configuration Step 1: Establish a console connection to R1.
>
> - Choose a Console cable from the available connections.
> - Click PCA and select RS 232.
> - Click R1 and select Console.
> - Click PCA > Desktop tab > Terminal.
> - Click OK and press ENTER. You are now able to configure R1.
>
> Step 2: Enter privileged mode and examine the current configuration. You can access all the router commands from privileged EXEC mode. However, because many of the privileged commands configure operating parameters, privileged access should be password-protected to prevent unauthorized use.
>
> - Enter privileged EXEC mode by entering the enable command.
>
> ```bash
> Router> enable
> Router#
> ```
>
> Notice that the prompt changed in the configuration to reflect privileged EXEC mode.
>
> - Enter the show running-config command
>
> ```bash
> Router# show running-config
> ```
>
> - Answer the following questions
>
> What is the router’s hostname? _________________________________________________________ How many Fast Ethernet interfaces does the Router have? ___________________________________ How many Gigabit Ethernet interfaces does the Router have? _________________________________
>
> Packet Tracer - Configure Initial Router Settings
>
> Page 2 of 4 How many Serial interfaces does the router have? __________________________________________ What is the range of values shown for the vty lines? _________________________________________
>
> - Display the current contents of NVRAM.
>
> ```bash
> Router# show startup-config
> ```
>
> startup-config is not present Why does the router respond with the startup-config is not present message? ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ Part 2: Configure and Verify the Initial Router Configuration To configure parameters on a router, you may be required to move between various configuration modes.
>
> Notice how the prompt changes as you navigate through the router. Step 1: Configure the initial settings on R1. Note: If you have difficulty remembering the commands, refer to the content for this topic. The commands are the same as you configured on a switch.
>
> - R1 as the hostname.
> - Use the following passwords
>
> #### 1) Console: letmein
>
> #### 2) Privileged EXEC, unencrypted: cisco
>
> #### 3) Privileged EXEC, encrypted: itsasecret
>
> - Encrypt all plain text passwords.
> - Message of the day text: Unauthorized access is strictly prohibited.
>
> Step 2: Verify the initial settings on R1.
>
> - Verify the initial settings by viewing the configuration for R1. What command do you use?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Exit the current console session until you see the following message
>
> R1 con0 is now available
>
> Press RETURN to get started.
>
> - Press ENTER; you should see the following message
>
> Unauthorized access is strictly prohibited.
>
> User Access Verification
>
> Password
>
> Packet Tracer - Configure Initial Router Settings
>
> Page 3 of 4 Why should every router have a message-of-the-day (MOTD) banner? ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ If you are not prompted for a password, what console line command did you forget to configure?
>
> ____________________________________________________________________________________
>
> - Enter the passwords necessary to return to privileged EXEC mode.
>
> Why would the enable secret password allow access to the privileged EXEC mode and the enable password no longer be valid? ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ If you configure any more passwords on the router, are they displayed in the configuration file as plain text or in encrypted form? Explain.
>
> ____________________________________________________________________________________ ____________________________________________________________________________________ Part 3: Save the Running Configuration File Step 1: Save the configuration file to NVRAM.
>
> - You have configured the initial settings for R1. Now back up the running configuration file to NVRAM to
>
> ensure that the changes made are not lost if the system is rebooted or loses power. What command did you enter to save the configuration to NVRAM? ____________________________________________________________________________________ What is the shortest, unambiguous version of this command? __________________________________ Which command displays the contents of the NVRAM?
>
> ____________________________________________________________________________________
>
> - Verify that all of the parameters configured are recorded. If not, analyze the output and determine which
>
> commands were not done or were entered incorrectly. You can also click Check Results in the instruction window. Step 2: Optional bonus: Save the startup configuration file to flash. Although you will be learning more about managing the flash storage in a router in later chapters, you may be interested to know now that —, as an added backup procedure —, you can save your startup configuration file to flash. By default, the router still loads the startup configuration from NVRAM, but if NVRAM becomes corrupt, you can restore the startup configuration by copying it over from flash.
>
> Complete the following steps to save the startup configuration to flash.
>
> - Examine the contents of flash using the show flash command
>
> R1# show flash How many files are currently stored in flash? _______________________________________________ Which of these files would you guess is the IOS image? ______________________________________
>
> Packet Tracer - Configure Initial Router Settings
>
> Page 4 of 4 Why do you think this file is the IOS image? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Save the startup configuration file to flash using the following commands
>
> R1# copy startup-config flash Destination filename [startup-config] The router prompts to store the file in flash using the name in brackets. If the answer is yes, then press ENTER; if not, type an appropriate name and press ENTER.
>
> - Use the show flash command to verify the startup configuration file is now stored in flash.

> **✍️ Activitat Pràctica 10.4 — U9P3**
> Page 1 of 4 Packet Tracer - Connect a Router to a LAN Topology
>
> Addressing Table Device Interface
>
> ```bash
> IP Address
> ```
>
> Subnet Mask Default Gateway R1 G0/0 192.168.10.1 255.255.255.0 N/A G0/1 192.168.11.1 255.255.255.0 N/A S0/0/0 (DCE) 209.165.200.225 255.255.255.252 N/A R2 G0/0 10.1.1.1 255.255.255.0 N/A G0/1 10.1.2.1 255.255.255.0 N/A S0/0/0 209.165.200.226 255.255.255.252 N/A PC1 NIC 192.168.10.10 255.255.255.0 192.168.10.1 PC2 NIC 192.168.11.10 255.255.255.0 192.168.11.1 PC3 NIC 10.1.1.10 255.255.255.0 10.1.1.1 PC4 NIC 10.1.2.10 255.255.255.0 10.1.2.1 Objectives Part 1: Display Router Information Part 2: Configure Router Interfaces Part 3: Verify the Configuration
>
> Packet Tracer - Connect a Router to a LAN
>
> Page 2 of 4 Background In this activity, you will use various show commands to display the current state of the router. You will then use the Addressing Table to configure router Ethernet interfaces. Finally, you will use commands to verify and test your configurations.
>
> Note: The routers in this activity are partially configured. Some of the configurations are not covered in this course, but are provided to assist you in using verification commands. Part 1: Display Router Information Step 1: Display interface information on R1. Note: Click a device and then click the CLI tab to access the command line directly. The console password is cisco. The privileged EXEC password is class.
>
> - Which command displays the statistics for all interfaces configured on a router? ___________________
> - Which command displays the information about the Serial 0/0/0 interface only? ____________________
> - Enter the command to display the statistics for the Serial 0/0/0 interface on R1 and answer the following
>
> questions
>
> - What is the IP address configured on R1? ______________________________________________
> - What is the bandwidth on the Serial 0/0/0 interface? ______________________________________
> - Enter the command to display the statistics for the GigabitEthernet 0/0 interface and answer the following
>
> questions
>
> #### 1) What is the IP address on R1?
>
> - What is the MAC address of the GigabitEthernet 0/0 interface? _____________________________
> - What is the bandwidth on the GigabitEthernet 0/0 interface? _______________________________
>
> Step 2: Display a summary list of the interfaces on R1.
>
> - Which command displays a brief summary of the current interfaces, statuses, and IP addresses assigned
>
> to them? ____________________________________________________________________________________
>
> - Enter the command on each router and answer the following questions
> - How many serial interfaces are there on R1 and R2? _____________________________________
>
> #### 2) How many Ethernet interfaces are there on R1 and R2?
>
> ________________________________________________________________________________
>
> - Are all the Ethernet interfaces on R1 the same? If no, explain the difference(s).
>
> ________________________________________________________________________________ ________________________________________________________________________________ ________________________________________________________________________________ Step 3: Display the routing table on R1.
>
> - What command displays the content of the routing table? _____________________________________
> - Enter the command on R1 and answer the following questions
> - How many connected routes are there (uses the C code)? _________________________________
>
> Packet Tracer - Connect a Router to a LAN
>
> Page 3 of 4 Which route is listed? ______________________________________________________________
>
> - How does a router handle a packet destined for a network that is not listed in the routing table?
>
> ________________________________________________________________________________ ________________________________________________________________________________ ________________________________________________________________________________ Part 2: Configure Router Interfaces Step 1: Configure the GigabitEthernet 0/0 interface on R1.
>
> - Enter the following commands to address and activate the GigabitEthernet 0/0 interface on R1
>
> R1(config)# interface gigabitethernet 0/0 R1(config-if)# ip address 192.168.10.1 255.255.255.0 R1(config-if)# no shutdown %LINK-5-CHANGED: Interface GigabitEthernet0/0, changed state to up %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0, changed state to up
>
> - It is good practice to configure a description for each interface to help document the network information.
>
> Configure an interface description indicating to which device it is connected. R1(config-if)# description LAN connection to S1
>
> - R1 should now be able to ping PC1.
>
> R1(config-if)# end %SYS-5-CONFIG_I: Configured from console by console R1# ping 192.168.10.10
>
> Type escape sequence to abort. Sending 5, 100-byte ICMP Echos to 192.168.10.10, timeout is 2 seconds: .!!!! Success rate is 80 percent (4/5), round-trip min/avg/max = 0/2/8 ms Step 2: Configure the remaining Gigabit Ethernet Interfaces on R1 and R2.
>
> - Use the information in the Addressing Table to finish the interface configurations for R1 and R2. For each
>
> interface, do the following
>
> - Enter the IP address and activate the interface.
> - Configure an appropriate description.
> - Verify interface configurations.
>
> Step 3: Back up the configurations to NVRAM. Save the configuration files on both routers to NVRAM. What command did you use? _______________________________________________________________________________________
>
> Packet Tracer - Connect a Router to a LAN
>
> Page 4 of 4 Part 3: Verify the Configuration Step 1: Use verification commands to check your interface configurations.
>
> - Use the show ip interface brief command on both R1 and R2 to quickly verify that the interfaces are
>
> configured with the correct IP address and active. How many interfaces on R1 and R2 are configured with IP addresses and in the “up” and “up” state? ____________________________________________________________________________________ What part of the interface configuration is NOT displayed in the command output? _________________ What commands can you use to verify this part of the configuration?
>
> ____________________________________________________________________________________
>
> - Use the show ip route command on both R1 and R2 to view the current routing tables and answer the
>
> following questions
>
> - How many connected routes (uses the C code) do you see on each router? ___________________
> - How many EIGRP routes (uses the D code) do you see on each router? ______________________
> - If the router knows all the routes in the network, then the number of connected routes and
>
> dynamically learned routes (EIGRP) should equal the total number of LANs and WANs. How many LANs and WANs are in the topology? _________________________________________________
>
> - Does this number match the number of C and D routes shown in the routing table? _____________
>
> Note: If your answer is “no”, then you are missing a required configuration. Review the steps in Part 2. Step 2: Test end-to-end connectivity across the network. You should now be able to ping from any PC to any other PC on the network. In addition, you should be able to ping the active interfaces on the routers. For example, the following should tests should be successful
>
> • From the command line on PC1, ping PC4. • From the command line on R2, ping PC2. Note: For simplicity in this activity, the switches are not configured; you will not be able to ping them.
