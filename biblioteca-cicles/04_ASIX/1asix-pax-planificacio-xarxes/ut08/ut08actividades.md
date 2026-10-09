---
layout: default
title: "✍️ Activitats pràctiques UT8 — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT8 — U7 - El switch"
prev_url: "../ut08/ut0802.html"
prev_label: "⬅️ 8.2 Cisco IOS"
next_url: "../ut09/index.html"
next_label: "📘 UT9 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT8

> **✍️ Activitat Pràctica 8.1 — U7 P1**
> > **📄 Document Escanejat / Visual (U7P1.pdf)**
> > Aquest document PDF (5 pàgines) està compost principalment per esquemes o imatges escanejades.

> **✍️ Activitat Pràctica 8.2 — U7 P2**
> > **📄 Document Escanejat / Visual (U7P2.pdf)**
> > Aquest document PDF (2 pàgines) està compost principalment per esquemes o imatges escanejades.

> **✍️ Activitat Pràctica 8.3 — U7 P3**
> Page 1 of 4 Packet Tracer – Comandos iniciales Topology
>
> Objectives Part 1: Establish Basic Connections, Access the CLI, and Explore Help Part 2: Explore EXEC Modes Part 3: Set the Clock Part 1: Establish Basic Connections, Access the CLI, and Explore Help In Part 1 of this activity, you will connect a PC to a switch using a console connection and explore various command modes and Help features.
>
> Step 1: Connect PC1 to S1 using a console cable.
>
> - Click the Connections icon (the one that looks like a lightning bolt) in the lower left corner of the Packet
>
> Tracer window.
>
> - Select the light blue Console cable by clicking it. The mouse pointer will change to what appears to be a
>
> connector with a cable dangling from it.
>
> - Click PC1. A window displays an option for an RS-232 connection.
> - Drag the other end of the console connection to the S1 switch and click the switch to access the
>
> connection list.
>
> - Select the Console port to complete the connection.
>
> Step 2: Establish a terminal session with S1.
>
> - Click PC1 and then select the Desktop tab.
> - Click the Terminal application icon. Verify that the Port Configuration default settings are correct.
>
> What is the setting for bits per second? ___________________________________________________
>
> - Click OK.
> - The screen that appears may have several messages displayed. Somewhere on the screen there should
>
> be a Press RETURN to get started! message. Press ENTER. What is the prompt displayed on the screen? _______________________________________________
>
> Packet Tracer - Navigating the IOS
>
> Page 2 of 4 Step 3: Explore the IOS Help.
>
> - The IOS can provide help for commands depending on the level accessed. The prompt currently
>
> displayed is called User EXEC, and the device is waiting for a command. The most basic form of help is to type a question mark (?) at the prompt to display a list of commands. S1> ? Which command begins with the letter ‘C’? ________________________________________________
>
> - At the prompt, type t and then a question mark (?).
>
> S1> t? Which commands are displayed? ________________________________________________________
>
> - At the prompt, type te and then a question mark (?).
>
> S1> te? Which commands are displayed? ________________________________________________________ This type of help is known as context-sensitive Help. It provides more information as the commands are expanded. Part 2: Explore EXEC Modes In Part 2 of this activity, you will switch to privileged EXEC mode and issue additional commands.
>
> Step 1: Enter privileged EXEC mode.
>
> - At the prompt, type the question mark (?).
>
> S1> ? What information is displayed that describes the enable command? ____________________________
>
> - Type en and press the Tab key.
>
> S1> en<Tab> What displays after pressing the Tab key? _________________________________________________ This is called command completion (or tab completion). When part of a command is typed, the Tab key can be used to complete the partial command. If the characters typed are enough to make the command unique, as in the case of the enable command, the remaining portion of the command is displayed.
>
> What would happen if you typed te<Tab> at the prompt? ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Enter the enable command and press ENTER. How does the prompt change?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - When prompted, type the question mark (?).
>
> S1# ? One command starts with the letter ‘C’ in user EXEC mode. How many commands are displayed now that privileged EXEC mode is active? (Hint: you could type c? to list just the commands beginning with ‘C’.)
>
> Packet Tracer - Navigating the IOS
>
> Page 3 of 4 ____________________________________________________________________________________ ____________________________________________________________________________________ Step 2: Enter Global Configuration mode.
>
> - When in privileged EXEC mode, one of the commands starting with the letter ‘C’ is configure. Type either
>
> the full command or enough of the command to make it unique. Press the <Tab> key to issue the command and press ENTER. S1# configure What is the message that is displayed? ____________________________________________________________________________________
>
> - Press Enter to accept the default parameter that is enclosed in brackets [terminal].
>
> How does the prompt change? __________________________________________________________
>
> - This is called global configuration mode. This mode will be explored further in upcoming activities and
>
> labs. For now, return to privileged EXEC mode by typing end, exit, or Ctrl-Z. S1(config)# exit S1# Part 3: Set the Clock Step 1: Use the clock command.
>
> - Use the clock command to further explore Help and command syntax. Type show clock at the privileged
>
> EXEC prompt. S1# show clock What information is displayed? What is the year that is displayed? ____________________________________________________________________________________
>
> - Use the context-sensitive Help and the clock command to set the time on the switch to the current time.
>
> Enter the command clock and press ENTER. S1# clock<ENTER> What information is displayed? __________________________________________________________
>
> - The “% Incomplete command” message is returned by the IOS. This indicates that the clock command
>
> needs more parameters. Any time more information is needed, help can be provided by typing a space after the command and the question mark (?). S1# clock ? What information is displayed? __________________________________________________________
>
> - Set the clock using the clock set command. Proceed through the command one step at a time.
>
> S1# clock set ? What information is being requested? ____________________________________________________ What would have been displayed if only the clock set command had been entered, and no request for help was made by using the question mark? _______________________________________________
>
> - Based on the information requested by issuing the clock set ? command, enter a time of 3:00 p.m. by
>
> using the 24-hour format of 15:00:00. Check to see if more parameters are needed.
>
> Packet Tracer - Navigating the IOS
>
> Page 4 of 4 S1# clock set 15:00:00 ? The output returns a request for more information: <1-31> Day of the month MONTH Month of the year f. Attempt to set the date to 01/31/2035 using the format requested. It may be necessary to request additional help using the context-sensitive Help to complete the process. When finished, issue the show clock command to display the clock setting. The resulting command output should display as
>
> S1# show clock *15:0:4.869 UTC Tue Jan 31 2035
>
> - If you were not successful, try the following command to obtain the output above
>
> S1# clock set 15:00:00 31 Jan 2035 Step 2: Explore additional command messages.
>
> - The IOS provides various outputs for incorrect or incomplete commands. Continue to use the clock
>
> command to explore additional messages that may be encountered as you learn to use the IOS.
>
> - Issue the following command and record the messages
>
> S1# cl What information was returned? _________________________________________________________ S1# clock What information was returned? _________________________________________________________ S1# clock set 25:00:00 What information was returned? ____________________________________________________________________________________ ____________________________________________________________________________________ S1# clock set 15:00:00 32 What information was returned?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________

> **✍️ Activitat Pràctica 8.4 — U7 P4**
> © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Packet Tracer: Configuración de los parámetros iniciales del switch Topología
>
> Objetivos Parte 1: Verificar la configuración predeterminada del switch Parte 2: Establecer una configuración básica del switch Parte 3: Configurar un aviso de MOTD Parte 4: Guardar los archivos de configuración en la NVRAM Parte 5: Configurar el S2 Aspectos básicos En esta actividad, se efectuarán las configuraciones básicas del switch. Protegerá el acceso a la interfaz de línea de comandos (CLI) y a los puertos de la consola mediante contraseñas cifradas y contraseñas de texto no cifrado. También aprenderá cómo configurar mensajes para los usuarios que inician sesión en el switch.
>
> Estos avisos también se utilizan para advertir a usuarios no autorizados que el acceso está prohibido. Parte 1: Verificar la configuración predeterminada del switch Paso 1: Ingrese al modo EXEC privilegiado. Puede acceder a todos los comandos del switch en el modo EXEC privilegiado. Sin embargo, debido a que muchos de los comandos privilegiados configuran parámetros operativos, el acceso privilegiado se debe proteger con una contraseña para evitar el uso no autorizado.
>
> El conjunto de comandos EXEC privilegiados incluye aquellos comandos del modo EXEC del usuario, así como también el comando configure a través del cual se obtiene acceso a los modos de comando restantes.
>
> - Haga clic en S1 y luego en la ficha CLI. Pulse Intro.
> - Ingrese al modo EXEC privilegiado introduciendo el comando enable
>
> ```bash
> Switch> enable
> Switch#
> ```
>
> Observe que el indicador cambia en la configuración para reflejar el modo EXEC privilegiado. Paso 2: Examine la configuración actual del switch.
>
> - Ingrese el comando show running-config.
>
> ```bash
> Switch# show running-config
> ```
>
> Packet Tracer: Configuración de los parámetros iniciales del switch © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco.
>
> - Responda las siguientes preguntas
> - ¿Cuántas interfaces FastEthernet tiene el switch? ___
> - ¿Cuántas interfaces Gigabit Ethernet tiene el switch? ____
> - ¿Cuál es el rango de valores que se muestra para las líneas vty? ____
> - ¿Qué comando muestra el contenido actual de la memoria de acceso aleatorio no volátil (NVRAM)?
>
> ____
>
> - ¿Por qué el switch responde con startup-config is not present? ____
>
> Parte 2: Crear una configuración básica del switch Paso 1: Asigne un nombre a un switch. Para configurar los parámetros de un switch, quizá deba pasar por diversos modos de configuración. Observe cómo cambia la petición de entrada mientras navega por el switch.
>
> ```bash
> Switch# configure terminal
> Switch(config)# hostname S1
> ```
>
> S1(config)# exit S1# Paso 2: Proporcione acceso seguro a la línea de consola. Para proporcionar un acceso seguro a la línea de la consola, acceda al modo config-line y establezca la contraseña de consola en letmein. S1# configure terminal Enter configuration commands, one per line. End with CNTL/Z.
>
> S1(config)# line console 0 S1(config-line)# password letmein S1(config-line)# login S1(config-line)# exit S1(config)# exit %SYS-5-CONFIG_I: Configured from console by console S1#
>
> ¿Por qué se requiere el comando login? ____
>
> Paso 3: Verifique que el acceso a la consola sea seguro. Salga del modo privilegiado para verificar que la contraseña del puerto de consola esté vigente. S1# exit Switch con0 is now available Press RETURN to get started.
>
> User Access Verification
>
> Packet Tracer: Configuración de los parámetros iniciales del switch © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Password: S1> Nota: Si el switch no le pidió una contraseña, entonces no se configuró el parámetro login en el paso 2.
>
> Paso 4: Proporcione un acceso seguro al modo privilegiado. Establezca la contraseña de enable en c1$c0. Esta contraseña protege el acceso al modo privilegiado. Nota: El 0 en c1$c0 es el número 0, no la letra O en mayúscula. Esta contraseña no se calificará como correcta hasta después de haberla cifrado en el paso 8.
>
> S1> enable S1# configure terminal S1(config)# enable password c1$c0 S1(config)# exit %SYS-5-CONFIG_I: Configured from console by console S1# Paso 5: Verifique que el acceso al modo privilegiado sea seguro.
>
> - Introduzca el comando exit nuevamente para cerrar la sesión del switch.
> - Presione <Intro>; a continuación, se le pedirá que introduzca una contraseña
>
> User Access Verification Password
>
> - La primera contraseña es la contraseña de consola que configuró para line con 0. Introduzca esta
>
> contraseña para volver al modo EXEC del usuario.
>
> - Introduzca el comando para acceder al modo privilegiado.
> - Introduzca la segunda contraseña que configuró para proteger el modo EXEC privilegiado.
>
> f. Para verificar la configuración, examine el contenido del archivo de configuración en ejecución: S1# show running-config Observe que las contraseñas de consola y de enable son de texto no cifrado. Esto podría presentar un riesgo para la seguridad si alguien está viendo lo que hace.
>
> Paso 6: Configure una contraseña encriptada para proporcionar un acceso seguro al modo privilegiado. La contraseña de enable se debe reemplazar por una nueva contraseña secreta encriptada mediante el comando enable secret. Configure la contraseña de enable secret como itsasecret.
>
> S1# config t S1(config)# enable secret itsasecret S1(config)# exit S1# Nota: La contraseña de enable secret sobrescribe la contraseña de enable. Si ambas están configuradas en el switch, debe introducir la contraseña de enable secret para ingresar al modo EXEC privilegiado.
>
> Paso 7: Verifique si la contraseña de enable secret se agregó al archivo de configuración.
>
> - Introduzca el comando show running-config nuevamente para verificar si la nueva contraseña de
>
> enable secret está configurada.
>
> Packet Tracer: Configuración de los parámetros iniciales del switch © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Nota: Puede abreviar el comando show running-config como S1# show run
>
> - ¿Qué se muestra como contraseña de enable secret? ____
> - ¿Por qué la contraseña de enable secret se ve diferente de lo que se configuró? ____
>
> Paso 8: Encripte las contraseñas de consola y de enable. Como pudo observar en el paso 7, la contraseña de enable secret estaba cifrada, pero las contraseñas de enable y de consola aún estaban en texto no cifrado. Ahora encriptaremos estas contraseñas de texto no cifrado con el comando service password-encryption.
>
> S1# config t S1(config)# service password-encryption S1(config)# exit Si configura más contraseñas en el switch, ¿se mostrarán como texto no cifrado o en forma cifrada en el archivo de configuración? Explicalo. _______ Parte 3: Configurar un aviso de MOTD Paso 1: Configure un aviso de mensaje del día (MOTD).
>
> El conjunto de comandos de Cisco IOS incluye una característica que permite configurar los mensajes que cualquier persona puede ver cuando inicia sesión en el switch. Estos mensajes se denominan “mensajes del día” o “avisos de MOTD”. Coloque el texto del mensaje en citas o utilizando un delimitador diferente a cualquier carácter que aparece en la cadena de MOTD.
>
> S1# config t S1(config)# banner motd "This is a secure system. Authorized Access Only!" S1(config)# exit %SYS-5-CONFIG_I: Configured from console by console S1#
>
> - ¿Cuándo se muestra este aviso? _______
> - ¿Por qué todos los switches deben tener un aviso de MOTD? _______
>
> #### 3) Guardar los archivos de configuración en la NVRAM
>
> Paso 2: Verifique que la configuración sea precisa mediante el comando show run. Paso 3: Guarde el archivo de configuración. Usted ha completado la configuración básica del switch. Ahora haga una copia de seguridad del archivo de configuración en ejecución a NVRAM para garantizar que los cambios que se han realizado no se pierdan si el sistema se reinicia o se apaga.
>
> S1# copy running-config startup-config Destination filename [startup-config]? [Enter] Building configuration... [OK] ¿Cuál es la versión abreviada más corta del comando copy running-config startup-config? _______
>
> Packet Tracer: Configuración de los parámetros iniciales del switch © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Paso 4: Examine el archivo de configuración de inicio. ¿Qué comando muestra el contenido de la NVRAM? _______ ¿Todos los cambios realizados están grabados en el archivo? _______ Parte 4: Configurar S2 Completó la configuración del S1. Ahora configurará el S2. Si no recuerda los comandos, consulte las partes 1 a 4 para obtener ayuda.
>
> Configure el S2 con los siguientes parámetros
>
> - Nombre del dispositivo: S2
> - Proteja el acceso a la consola con la contraseña letmein.
> - Configure c1$c0 como la contraseña de enable y itsasecret como la contraseña de enable secret.
> - Configure el siguiente mensaje para aquellas personas que inician sesión en el switch
>
> Authorized access only. Unauthorized access is prohibited and violators will be prosecuted to the full extent of the law.
>
> - Cifre todas las contraseñas de texto no cifrado.
>
> f. Asegúrese de que la configuración sea correcta.
>
> - Guarde el archivo de configuración para evitar perderlo si el switch se apaga. Escribe las instruccions
>
> utilizadas_______
>
> Packet Tracer: Configuración de los parámetros iniciales del switch © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Tabla de calificación sugerida Sección de la actividad Ubicación de la consulta Posibles puntos Puntos obtenidos Parte 1: Verificar la configuración predeterminada del switch Paso 2b, p1
>
> Paso 2b, p2
>
> Paso 2b, p3
>
> Paso 2b, p4
>
> Paso 2b, p5
>
> Total de la parte 1
>
> Parte 2: Establecer una configuración básica del switch Paso 2
>
> Paso 7b
>
> Paso 7c
>
> Paso 8
>
> Total de la parte 2
>
> Parte 3: Configurar un aviso de MOTD Paso 1, p1
>
> Paso 1, p2
>
> Total de la parte 3
>
> Parte 4: Guardar los archivos de configuración en la NVRAM Paso 2
>
> Paso 3, p1
>
> Paso 3, p2
>
> Total de la parte 4
>
> Puntuación de Packet Tracer
>
> Puntuación total

> **✍️ Activitat Pràctica 8.5 — U7 P5**
> © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Packet Tracer: Implementación de conectividad básica Topología
>
> Tabla de direccionamiento Dispositivo Interfaz Dirección IP Máscara de subred S1 VLAN 1 192.168.1.253 255.255.255.0 S2 VLAN 1 192.168.1.254 255.255.255.0 PC1 NIC 192.168.1.1 255.255.255.0 PC2 NIC 192.168.1.2 255.255.255.0 Objetivos Parte 1: Realizar una configuración básica en S1 y S2 Paso 2: Configurar las PC Parte 3: Configurar la interfaz de administración de switches Aspectos básicos En esta actividad, primero se efectuarán las configuraciones básicas del switch. A continuación, implementará conectividad básica mediante la configuración de la asignación de direcciones IP en switches y PC. Cuando haya finalizado la configuración de la asignación de direcciones IP, utilizará diversos comandos show para verificar las configuraciones y utilizará el comando ping para verificar la conectividad básica entre los dispositivos.
>
> Parte 1: Realizar una configuración básica en el S1 y el S2 Complete los siguientes pasos en el S1 y el S2. Paso 1: Configure un nombre de host en el S1.
>
> - Haga clic en S1 y luego en la ficha CLI.
> - Introduzca el comando correcto para configurar el nombre de host S1.
>
> Paso 2: Configure las contraseñas de consola y del modo EXEC privilegiado.
>
> - Use cisco como la contraseña de la consola.
> - Use clase como la contraseña del modo EXEC privilegiado.
>
> Packet Tracer: Implementación de conectividad básica © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Paso 3: Verifique la configuración de contraseñas para el S1. ¿Cómo puede verificar que ambas contraseñas se hayan configurado correctamente?
>
> __________________ Paso 4: Configure un aviso de MOTD. Utilice un texto de aviso adecuado para advertir contra el acceso no autorizado. El siguiente texto es un ejemplo: Acceso autorizado únicamente. Los infractores se procesarán en la medida en que lo permita la ley.
>
> Paso 5: Guarde el archivo de configuración en la NVRAM. ¿Qué comando/s emite para realizar este paso? __________________ Paso 6: Repita los pasos 1 a 5 para el S2. Parte 2: Configurar las PC Configure la PC1 y la PC2 con direcciones IP. Step 1: Configure ambas PC con direcciones IP.
>
> - Haga clic en PC1 y luego en la ficha Escritorio.
> - Haga clic en Configuración de IP. En la tabla de direccionamiento anterior, puede ver que la dirección
>
> IP para la PC1 es 192.168.1.1 y la máscara de subred es 255.255.255.0. Introduzca esta información para la PC1 en la ventana Configuración de IP.
>
> - Repita los pasos 1a y 1b para la PC2.
>
> Paso 2: Pruebe la conectividad a los switches.
>
> - Haga clic en PC1. Cierre la ventana Configuración de IP si todavía está abierta. En la ficha Escritorio,
>
> haga clic en Símbolo del sistema.
>
> - Escriba el comando ping y la dirección IP para el S1 y presione Intro.
>
> Packet Tracer PC Command Line 1.0 PC> ping 192.168.1.253 ¿Tuvo éxito? Explique por qué. __________________
>
> Parte 3: Configurar la interfaz de administración de switches Configure el S1 y el S2 con una dirección IP. Step 1: Configure el S1 con una dirección IP. Los switches pueden usarse como dispositivos plug-and-play. Esto significa que no necesitan configurarse para que funcionen. Los switches reenvían información desde un puerto hacia otro sobre la base de
>
> Packet Tracer: Implementación de conectividad básica © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. direcciones de control de acceso al medio (MAC). Si este es el caso, ¿por qué lo configuraríamos con una dirección IP?
>
> __________________ Use los siguientes comandos para configurar el S1 con una dirección IP. S1# configure terminal Enter configuration commands, one per line. End with CNTL/Z. S1(config)# interface vlan 1 S1(config-if)# ip address 192.168.1.253 255.255.255.0 S1(config-if)# no shutdown %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up S1(config-if)# S1(config-if)# exit S1# ¿Por qué debe introducir el comando no shutdown?
>
> __________________
>
> Paso 1: Configure el S2 con una dirección IP. Use la información de la tabla de direccionamiento para configurar el S2 con una dirección IP. Paso 2: Verifique la configuración de direcciones IP en el S1 y el S2. Use el comando show ip interface brief para ver la dirección IP y el estado de todos los puertos y las interfaces del switch. También puede utilizar el comando show running-config.
>
> Paso 3: Guarde la configuración para el S1 y el S2 en la NVRAM. ¿Qué comando se utiliza para guardar en la NVRAM el archivo de configuración que se encuentra en la RAM? __________________ Paso 4: Verifique la conectividad de la red. Puede verificarse la conectividad de la red mediante el comando ping. Es muy importante que haya conectividad en toda la red. Se deben tomar medidas correctivas si se produce una falla. Desde la PC1 y la PC2, haga ping al S1 y S2.
>
> - Haga clic en PC1 y luego en la ficha Escritorio.
> - Haga clic en Símbolo del sistema.
> - Haga ping a la dirección IP de la PC2.
> - Haga ping a la dirección IP del S1.
> - Haga ping a la dirección IP del S2.
>
> > **⚠️ Nota: También puede usar el comando ping en la CLI del ...**
> > Nota: También puede usar el comando ping en la CLI del switch y en la PC2. Todos los ping deben tener éxito. Si el resultado del primer ping es 80 %, inténtelo otra vez. Ahora debería ser 100 %. Más adelante, aprenderá por qué es posible que un ping falle la primera vez. Si no puede hacer
>
> ```bash
> ping a ninguno de los dispositivos, vuelva a revisar la configuración para detectar errores.
> ```
>
> Packet Tracer: Implementación de conectividad básica © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Tabla de calificación sugerida Sección de la actividad Ubicación de la consulta Posibles puntos Puntos obtenidos Parte 1: Realizar una configuración básica en S1 y S2 Paso 3
>
> Paso 5
>
> Paso 2: Configurar las PC Paso 2b
>
> Parte 3: Configurar la interfaz de administración de switches Paso 1, p1
>
> Paso 1, p2
>
> Paso 4
>
> Preguntas
>
> Puntuación de Packet Tracer
>
> Puntuación total

> **✍️ Activitat Pràctica 8.6 — U7 P6**
> Packet Tracer: Configuración de SSH Topología
>
> Tabla de direccionamiento El administrador Interfaces Dirección IP Máscara de subred S1 VLAN 1 10.10.10.2 255.255.255.0 PC1 NIC 10.10.10.10 255.255.255.0 Objetivos Parte 1: Proteger las contraseñas Parte 2: Cifrar las comunicaciones Parte 3: Verificar la implementación de SSH Aspectos básicos SSH debe reemplazar a Telnet para las conexiones de administración. Telnet usa comunicaciones inseguras de texto no cifrado. SSH proporciona seguridad para las conexiones remotas mediante el cifrado seguro de todos los datos transmitidos entre los dispositivos. En esta actividad, protegerá un switch remoto con el cifrado de contraseñas y SSH.
>
> Parte 1: Proteger las contraseñas
>
> - Desde el símbolo del sistema en la PC1, acceda al S1 mediante Telnet. La contraseña de los modos
>
> EXEC del usuario y EXEC privilegiado es cisco.
>
> - Guarde la configuración actual, de manera que pueda revertir cualquier error que cometa reiniciando
>
> el S1.
>
> - Muestre la configuración actual y observe que las contraseñas están en texto no cifrado. Introduzca el
>
> comando para cifrar las contraseñas de texto no cifrado. ____________________________________________________________________________________
>
> - Verifique que las contraseñas estén cifradas.
>
> Packet Tracer: Configuración de SSH
>
> Parte 2: Cifrar las comunicaciones Paso 1: Establecer el nombre de dominio IP y generar claves seguras En general no es seguro utilizar Telnet, porque los datos se transfieren como texto no cifrado. Por lo tanto, utilice SSH siempre que esté disponible.
>
> - Configure el nombre de dominio netacad.pka.
>
> ____________________________________________________________________________________ f. Se necesitan claves seguras para cifrar los datos. Genere las claves RSA con la longitud de clave 1024. ____________________________________________________________________________________ Paso 2: Crear un usuario de SSH y reconfigurar las líneas VTY para que solo admitan acceso por SSH
>
> - Cree un usuario administrador con cisco como contraseña secreta.
>
> ____________________________________________________________________________________
>
> - Configure las líneas VTY para que revisen la base de datos local de nombres de usuario en busca de las
>
> credenciales de inicio de sesión y para que solo permitan el acceso remoto mediante SSH. Elimine la contraseña existente de la línea vty. ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ Parte 3: Verificar la implementación de SSH
>
> - Cierre la sesión de Telnet e intente iniciar sesión nuevamente con Telnet. El intento debería fallar.
> - Intente iniciar sesión mediante SSH. Escriba ssh y presione la tecla Enter, sin incluir ningún parámetro
>
> que revele las instrucciones de uso de comandos. Sugerencia: la opción -l representa la letra “L”, no el número 1. i. Cuando inicie sesión de forma correcta, ingrese al modo EXEC privilegiado y guarde la configuración. Si no pudo acceder de forma correcta al S1, reinicie y comience de nuevo en la parte 1.

> **✍️ Activitat Pràctica 8.7 — U7 P7**
> Packet Tracer: Resolución de problemas de seguridad de puertos de switch Topología
>
> Situación El empleado que normalmente usa la PC1 trajo la computadora portátil de su hogar, desconectó la PC1 y conectó la computadora portátil al tomacorriente de telecomunicaciones. Después de recordarle que la política de seguridad no permite dispositivos personales en la red, usted debe volver a conectar la PC1 y volver a habilitar el puerto.
>
> Requisitos • Desconecte la Computadora portátil doméstica y vuelva a conectar la PC1 al puerto correspondiente. Cuándo se volvió a conectar la PC1 al puerto de switch, ¿se modificó el estado del puerto? ______________________________________________________________________________ Introduzca el comando para ver el estado del puerto. ¿Cuál es el estado del puerto?
>
> ______________________________________________________________________________ ¿Qué comandos de seguridad de puertos habilitaron esta característica? ______________________________________________________________________________ • Habilite el puerto con el comando necesario.
>
> • Verifique la conectividad. Ahora, la PC1 debe poder hacer ping a la PC2.

> **✍️ Activitat Pràctica 8.8 — Examen Pràctic U7**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 8.9 — Notes Parcial U5-U6-U7**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
