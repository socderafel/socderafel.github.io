---
layout: default
title: "✍️ Activitats pràctiques UT13 — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT13 — U12 - Capa de transport i aplicació"
prev_url: "../ut13/ut1301.html"
prev_label: "⬅️ 13.1 U12 Nivell de Transport i Aplicació"
next_url: "../references.html"
next_label: "📂 Índex de Documents i Recursos ➡️"
---

# ✍️ Activitats pràctiques UT13

> **✍️ Activitat Pràctica 13.1 — U12A1**
> Práctica de laboratorio: Uso de Wireshark para examinar una captura de UDP y DNS Topología
>
> Objetivos Parte 1: Registrar la información de configuración IP de una PC Parte 2: Utilizar Wireshark para capturar consultas y respuestas DNS Parte 3: Analizar los paquetes capturados de DNS o UDP Aspectos básicos/situación Si alguna vez utilizó Internet, utilizó el sistema de nombres de dominio (DNS). DNS es una red distribuida de servidores que traduce nombres de dominio descriptivos como www.google.com a una dirección IP. Cuando se escribe la URL de un sitio web en el navegador, la PC realiza una consulta de DNS a la dirección IP del servidor DNS. La consulta del servidor DNS de su PC y la respuesta del servidor DNS utilizan el protocolo de datagramas de usuario (UDP) como protocolo de capa de transporte. A diferencia de TCP, UDP funciona sin conexión y no requiere una configuración de sesión. Las consultas y respuestas de DNS son muy pequeñas y no requieren la sobrecarga de TCP.
>
> En esta práctica de laboratorio, establecerá comunicación con un servidor DNS enviando una consulta de DNS mediante el protocolo de transporte UDP. Utilizará Wireshark para examinar los intercambios de consulta y respuesta de DNS con el mismo servidor. Recursos necesarios 1 PC (Windows 7, 8 o 10 con acceso a la petición de ingreso de comando, acceso a Internet y Wireshark instalado) Parte 1: Registrar la información de configuración de IP de una PC En la parte 1, utilizará el comando ipconfig /all en su PC local para buscar y registrar las direcciones IP y MAC de la tarjeta de interfaz de red (NIC) de su PC, la dirección IP del gateway predeterminado especificado y la dirección IP del servidor DNS especificado para la PC. Registre esta información en la tabla proporcionada. La información se utilizará en partes de este laboratorio con el análisis de paquetes.
>
> Dirección IP
>
> Dirección MAC
>
> Dirección IP del gateway predeterminado
>
> Dirección IP del servidor DNS
>
> Práctica de laboratorio: Uso de Wireshark para examinar una captura de UDP y DNS
>
> Parte 2: Utilizar Wireshark para capturar consultas y respuestas de DNS En la parte 2, configurará Wireshark para capturar paquetes de consultas y respuestas de DNS a fin de demostrar el uso del protocolo de transporte UDP en la comunicación con un servidor DNS.
>
> - Haga clic en el botón Inicio de Windows y busque el programa Wireshark.
> - Seleccione una interfaz para que Wireshark capture paquetes. Seleccione (resalte) la interfaz de captura
>
> activa.
>
> - Después de seleccionar la interfaz deseada, haga clic en Start (Comenzar) para capturar los paquetes.
> - Abra un navegador web y escriba www.google.com. Presione Enter (Introducir) para continuar.
> - Haga clic en Stop (Detener) para detener la captura de Wireshark cuando vea la página de inicio de Google.
>
> Parte 3: Analizar los paquetes capturados de DNS o UDP En la parte 3, examinará los paquetes de UDP que se generaron al comunicarse con un servidor DNS para las direcciones IP de www.google.com. Paso 1: Filtrar los paquetes de DNS
>
> - En la ventana principal de Wireshark, escriba dns en el área de entrada de la barra de herramientas
>
> Filter (Filtro) y presione Enter (Introducir).
>
> Práctica de laboratorio: Uso de Wireshark para examinar una captura de UDP y DNS
>
> > **⚠️ Nota: Si no ve ningún resultado después de aplicar el f...**
> > Nota: Si no ve ningún resultado después de aplicar el filtro DNS, cierre el navegador web. En la ventana del símbolo del sistema, escriba ipconfig /flushdns para eliminar todos los resultados de DNS anteriores. Reinicie la captura de Wireshark y repita las instrucciones de las partes 2b a 2e. Si esto no resuelve el problema, escriba nslookup www.google.com en la ventana del símbolo del sistema como alternativa para el navegador web.
>
> - En el panel de lista de paquetes (sección superior) de la ventana principal, localice el paquete que
>
> incluye Standard query (Consulta estándar) y A www.google.com. Consulte la trama 15 como ejemplo. Paso 2: Examinar un segmento de UDP utilizando una consulta de DNS Examine el UDP utilizando una consulta de DNS para www.google.com según la captura de Wireshark. En este ejemplo, se seleccionó para el análisis la trama 15 de la captura de Wireshark en el panel de la lista de paquetes. Los protocolos de esta consulta se muestran en el panel de detalles del paquete (sección media) de la ventana principal. Las entradas de protocolo están resaltadas en gris.
>
> - En la primera línea del panel de detalles del paquete, la trama 15 tenía 74 bytes de datos de conexión.
>
> Esta es la cantidad de bytes para enviar una consulta DNS a un servidor de nombres que solicita direcciones IP de www.google.com.
>
> - La línea Ethernet II muestra las direcciones MAC de origen y destino. La dirección MAC de origen
>
> proviene de su PC local porque la PC local originó la consulta de DNS. La dirección MAC de destino proviene del gateway predeterminado porque esta es la última parada antes de que esta consulta salga de la red local.
>
> Práctica de laboratorio: Uso de Wireshark para examinar una captura de UDP y DNS
>
> ¿Es la dirección MAC de origen la misma que la registrada en la parte 1 para la PC local? _________________
>
> - En la línea Internet Protocol Version 4, la captura de Wireshark del paquete IP indica que la dirección IP
>
> de origen de esta consulta de DNS es 192.168.1.146 y la dirección IP de destino es 192.168.1.1. En este ejemplo, la dirección de destino es el gateway predeterminado. El router es el gateway predeterminado en esta red. ¿Puede identificar las direcciones IP y MAC para los dispositivos de origen y de destino?
>
> Dispositivo Dirección IP Dirección MAC PC local
>
> Gateway predeterminado
>
> El paquete IP y el encabezado encapsulan el segmento de UDP. El segmento de UDP contiene la consulta de DNS como datos.
>
> - Un encabezado de UDP solo tiene cuatro campos: puerto de origen, puerto de destino, longitud y
>
> checksum. Cada campo de un encabezado de UDP tiene solo 16 bits, como se muestra a continuación.
>
> Expanda el protocolo de datagramas de usuario en el panel de detalles del paquete haciendo clic en el signo más (+). Observe que solo hay cuatro campos. El número del puerto de origen en este ejemplo es
>
> - La PC local generó de manera aleatoria el puerto de origen utilizando números de puerto que no
>
> están reservados. El puerto de destino es 53. El puerto 53 es un puerto conocido reservado para el uso con DNS. Los servidores DNS esperan en el puerto 53 las consultas de DNS de los clientes.
>
> Práctica de laboratorio: Uso de Wireshark para examinar una captura de UDP y DNS
>
> En este ejemplo, la longitud del segmento de UDP es de 40 bytes. De los 40 bytes, 8 bytes se utilizan como encabezado. Los datos de la consulta de DNS utilizan los otros 32 bytes. Los 32 bytes de los datos de consulta de DNS se resaltan en la siguiente ilustración en el panel de bytes del paquete (sección inferior) de la ventana principal de Wireshark.
>
> La checksum se utiliza para determinar la integridad del paquete después de haber atravesado Internet. El encabezado de UDP tiene poca sobrecarga porque UDP no tiene campos que estén asociados con la negociación en tres pasos en TCP. Cualquier problema de confiabilidad de la transferencia de datos que ocurra debe ser manejado por la capa de aplicaciones.
>
> Registre sus resultados de Wireshark en la tabla siguiente: Tamaño de la trama
>
> Dirección MAC de origen
>
> Dirección MAC de destino
>
> Dirección IP de origen
>
> Dirección IP de destino
>
> Puerto de origen
>
> Puerto de destino
>
> ¿Es la dirección IP de origen la misma que la dirección IP de la PC local que registró en la parte 1? _____________ ¿Es la dirección IP de destino la misma que el gateway predeterminado que observó en la parte 1? _____________ Paso 3: Examinar un segmento de UDP utilizando una respuesta de DNS En este paso, examinará el paquete de respuesta de DNS y comprobará que el paquete de respuesta de DNS también utiliza UDP.
>
> Práctica de laboratorio: Uso de Wireshark para examinar una captura de UDP y DNS
>
> - En este ejemplo, la trama 16 es el paquete de respuesta DNS correspondiente. Observe que la cantidad
>
> de bytes en la conexión es 90. Es un paquete más grande en comparación con el paquete de consulta de DNS.
>
> - En la trama Ethernet II para la respuesta de DNS, ¿qué dispositivo es la dirección MAC de origen y qué
>
> dispositivo es la dirección MAC de destino? ____________________________________________________________________________________
>
> - Observe las direcciones IP de origen y destino en este paquete IP. ¿Cuál es la dirección IP de destino?
>
> ¿Cuál es la dirección IP de origen? Dirección IP de destino: _____________________ Dirección IP de origen: ________________________ ¿Qué sucedió con los roles de origen y destino para el host local y el gateway predeterminado? ____________________________________________________________________________________
>
> - En el segmento de UDP, el rol de los números de puerto también se invirtió. El número del puerto de
>
> destino es 62921. El número de puerto 62921 es el mismo puerto que generó la PC local cuando se envió la consulta de DNS al servidor DNS. La PC local espera una respuesta de DNS en este puerto. El número del puerto de origen es 53. El servidor DNS espera una consulta de DNS en el puerto 53 y luego envía una respuesta de DNS con un número de puerto de origen de 53 al originador de la consulta de DNS.
>
> Práctica de laboratorio: Uso de Wireshark para examinar una captura de UDP y DNS
>
> Al expandirse la respuesta de DNS, observe las direcciones IP resueltas para www.google.com en la sección Answers (Respuestas).

> **✍️ Activitat Pràctica 13.2 — U12A2 - Opcional**
> Page 1 of 5 Lab - Observing DNS Resolution Objectives Part 1: Observe the DNS Conversion of a URL to an IP Address Part 2: Observe DNS Lookup Using the nslookup Command on a Web Site Part 3: Observe DNS Lookup Using the nslookup Command on Mail Servers Background / Scenario The Domain Name System (DNS) is invoked when you type a Uniform Resource Locator (URL), such as http://www.cisco.com, into a web browser. The first part of the URL describes which protocol is used.
>
> Common protocols are Hypertext Transfer Protocol (HTTP), Hypertext Transfer Protocol over Secure Socket Layer (HTTPS), and File Transfer Protocol (FTP). DNS uses the second part of the URL, which in this example is www.cisco.com. DNS translates the domain name (www.cisco.com) to an IP address to allow the source host to reach the destination host. In this lab, you will observe DNS in action and use the nslookup (name server lookup) command to obtain additional DNS information. Work with a partner to complete this lab.
>
> Required Resources 1 PC (Windows 7 or 8 with Internet and command prompt access) Part 1: Observe the DNS Conversion of a URL to an IP Address
>
> - Click the Windows Start button, type cmd into the search field, and press Enter. The command prompt
>
> window appears.
>
> - At the command prompt, ping the URL for the Internet Corporation for Assigned Names and Numbers
>
> (ICANN) at www.icann.org. ICANN coordinates the DNS, IP addresses, top-level domain name system management, and root server system management functions. The computer must translate www.icann.org into an IP address to know where to send the Internet Control Message Protocol (ICMP) packets.
>
> The first line of the output displays www.icann.org converted to an IP address by DNS. You should be able to see the effect of DNS, even if your institution has a firewall that prevents pinging, or if the destination server has prevented you from pinging its web server.
>
> Note: If the domain name is resolved to an IPv6 address, use the command ping -4 www.icann.org to translate into an IPv4 address if desired.
>
> Record the IP address of www.icann.org. __________________________________
>
> Lab - Observing DNS Resolution
>
> Page 2 of 5
>
> - Type the IP address from step b into a web browser, instead of the URL. Click Continue to this website
>
> (not recommended). to proceed.
>
> - Notice that the ICANN home web page is displayed.
>
> Most humans find it easier to remember words, rather than numbers. If you tell someone to go to www.icann.org, they can probably remember that. If you told them to go to 192.0.32.7, they would have a difficult time remembering an IP address. Computers process in numbers. DNS is the process of translating words into numbers. There is a second translation that takes place. Humans think in Base 10 numbers. Computers process in Base 2 numbers. The Base 10 IP address 192.0.32.7 in Base 2 numbers is 11000000.00000000.00100000.00000111. What happens if you cut and paste these Base 2 numbers into a browser?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________
>
> Lab - Observing DNS Resolution
>
> Page 3 of 5
>
> - Now type ping www.cisco.com.
>
> Note: If the domain name is resolved to an IPv6 address, use the command ping -4 www.cisco.com to translate into an IPv4 address if desired.
>
> f. When you ping www.cisco.com, do you get the same IP address as the example? Explain. ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Type the IP address that you obtained when you pinged www.cisco.com into a browser. Does the web
>
> site display? Explain. ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ Part 2: Observe DNS Lookup Using the nslookup Command on a Web Site
>
> - At the command prompt, type the nslookup command.
>
> What is the default DNS server used? _________________________________________ Notice how the command prompt changed to a greater than (>) symbol. This is the nslookup prompt. From this prompt, you can enter commands related to DNS. At the prompt, type ? to see a list of all the available commands that you can use in nslookup mode.
>
> Lab - Observing DNS Resolution
>
> Page 4 of 5 i. At the prompt, type www.cisco.com.
>
> What is the translated IP address? ________________________________________________ Note: The IP address from your location will most likely be different because Cisco uses mirrored servers in various locations around the world. Is it the same as the IP address shown with the ping command? _________________ Under addresses, in addition to the 23.1.144.170 IP address, there are the following numbers
>
> 2600:1408:7:1:9300::90, 2600:1408:7:1:8000::90, 2600:1408:7:1:9800::90. What are these? ____________________________________________________________________________________ j. At the prompt, type the IP address of the Cisco web server that you just found. You can use nslookup to get the domain name of an IP address if you do not know the URL.
>
> You can use the nslookup tool to translate domain names into IP addresses. You can also use it to translate IP addresses into domain names. Using the nslookup tool, record the IP addresses associated with www.google.com. ____________________________________________________________________________________
>
> Lab - Observing DNS Resolution
>
> Page 5 of 5 Part 3: Observe DNS Lookup Using the nslookup Command on Mail Servers
>
> - At the prompt, type set type=mx to use nslookup to identify mail servers.
>
> l. At the prompt, type cisco.com.
>
> A fundamental principle of network design is redundancy (more than one mail server is configured). In this way, if one of the mail servers is unreachable, then the computer making the query tries the second mail server. Email administrators determine which mail server is contacted first by using MX preference (see above image). The mail server with the lowest MX preference is contacted first. Based upon the output above, which mail server will be contacted first when the email is sent to cisco.com?
>
> ____________________________________________________________________________________
>
> - At the nslookup prompt, type exit to return to the regular PC command prompt.
> - At the PC command prompt, type ipconfig /all.
> - Write the IP addresses of all the DNS servers that your school uses.
>
> ____________________________________________________________________________________ Reflection What is the fundamental purpose of DNS? _______________________________________________________________________________________ _______________________________________________________________________________________ _______________________________________________________________________________________

> **✍️ Activitat Pràctica 13.3 — U12P1**
> Simulación Packet Tracer: Comunicaciones de TCP y UDP Topología
>
> Objetivos Parte 1: Generar tráfico de red en el modo de simulación Parte 2: Examinar la funcionalidad de los protocolos TCP y UDP Aspectos básicos Esta actividad de simulación tiene como objetivo proporcionar una base para comprender los protocolos TCP y UDP en detalle. El modo de simulación ofrece la capacidad de ver la funcionalidad de los diferentes protocolos.
>
> A medida que los datos se desplazan por la red, se dividen en partes más pequeñas y se identifican de modo que las piezas puedan volverse a unir. A cada pieza se le asigna un nombre específico (unidad de datos del protocolo [PDU]) y se la asocia a una capa específica. El modo de simulación de Packet Tracer permite al usuario ver cada uno de los protocolos y la PDU asociada. Los pasos que se detallan a continuación guían al usuario a lo largo del proceso de solicitar servicios utilizando varias aplicaciones disponibles en un equipo de cliente.
>
> Esta actividad ofrece una oportunidad para explorar la funcionalidad de los protocolos TCP y UDP, la multiplexión y la función de los números de puerto para determinar qué aplicación local solicitó los datos o está enviando los datos. Parte 1: Generar tráfico de red en modo de simulación Paso 1: Generar tráfico para completar las tablas del protocolo de resolución de direcciones (ARP) Realice las siguientes tareas para reducir la cantidad de tráfico de red que se visualiza en la simulación.
>
> - Haga clic en MultiServer (Multiservidor) y haga clic en la ficha Desktop > Command Prompt
>
> (Escritorio > Símbolo del sistema).
>
> - Introduzca el comando ping 192.168.1.255. Esto tomará unos segundos, ya que todos los dispositivos
>
> de la red responden a MultiServer.
>
> Simulación Packet Tracer: Comunicaciones de TCP y UDP
>
> - Cierre la ventana MultiServer.
>
> Paso 2: Generar tráfico web (HTTP).
>
> - Cambie a modo de simulación.
> - Haga clic en HTTP Client (Cliente HTTP) y haga clic en la ficha Desktop > Web Browser (Escritorio >
>
> Navegador web).
>
> - En el campo URL, introduzca 192.168.1.254 y haga clic en Go (Ir). Los sobres (PDU) aparecerán en la
>
> ventana de simulación.
>
> - Minimice, pero no cierre, la ventana de configuración de HTTP Client.
>
> Paso 3: Generar tráfico FTP.
>
> - Haga clic en FTP Client (Cliente FTP) y haga clic en la ficha Desktop > Command Prompt (Escritorio >
>
> Símbolo del sistema).
>
> - Introduzca el comando ftp 192.168.1.254. Las PDU aparecerán en la ventana de simulación.
> - Minimice, pero no cierre, la ventana de configuración de FTP Client.
>
> Paso 4: Generar tráfico DNS.
>
> - Haga clic en DNS Client (Cliente DNS) y haga clic en la ficha Desktop > Command Prompt
>
> (Escritorio > Símbolo del sistema).
>
> - Introduzca el comando nslookup multiserver.pt.ptu. Aparecerá una PDU en la ventana de simulación.
> - Minimice, pero no cierre, la ventana de configuración de DNS Client.
>
> Paso 5: Generar tráfico de correo electrónico.
>
> - Haga clic en E-Mail Client (Cliente de correo electrónico) y, a continuación, haga clic en la ficha Desktop
>
> y seleccione la herramienta E Mail (Correo electrónico).
>
> - Haga clic en Compose (Redactar) y escriba la siguiente información
> - To (Para): user@multiserver.pt.ptu.
> - Subject (Asunto): Personalice la línea de asunto.
> - E-Mail Body (Cuerpo del correo electrónico): Personalice el correo electrónico.
> - Haga clic en Send (Enviar).
> - Minimice, pero no cierre, la ventana de configuración de E-Mail Client.
>
> Paso 6: Verificar que se haya generado tráfico y que esté preparado para la simulación. Cada equipo cliente debe tener PDU enumeradas en el panel de simulación. Parte 2: Examinar la funcionalidad de los protocolos TCP y UDP Paso 1: Examinar la multiplexión a medida que el tráfico cruza la red.
>
> Ahora utilizará el botón Capture/Forward (Capturar/Avanzar) y el botón Back (Atrás) en el panel de simulación.
>
> - Haga clic una vez en Capture/Forward. Todas las PDU se transfieren al switch.
>
> Simulación Packet Tracer: Comunicaciones de TCP y UDP
>
> - Haga clic nuevamente en Capture/Forward. Algunas de las PDU desaparecen. ¿Qué cree que les
>
> sucedió? ____________________________________________________________________________________
>
> - Haga clic en Capture/Forward seis veces. Todos los clientes deben haber recibido una respuesta.
>
> Observe que solo una PDU puede cruzar un cable en cada dirección en un momento determinado. ¿Cómo se llama esto? ____________________________________________________________________________________
>
> - Aparecen una serie de PDU en la lista de eventos del panel superior derecho de la ventana de
>
> simulación. ¿Por qué hay tantos colores diferentes? ____________________________________________________________________________________
>
> - Haga clic en Back ocho veces. Se debería reiniciar la simulación.
>
> > **⚠️ Nota: No haga clic en Reset Simulation (Restablecer sim...**
> > Nota: No haga clic en Reset Simulation (Restablecer simulación) en ningún momento durante esta actividad; si lo hace, deberá repetir los pasos de la Parte 1. Paso 2: Examinar el tráfico HTTP cuando los clientes se comunican con el servidor.
>
> - Filtre el tráfico que se muestra actualmente para que solo se muestren las PDU de HTTP y TCP. Filtre el
>
> tráfico que se muestra actualmente
>
> - Haga clic en Edit Filters (Editar filtros) y cambie el estado de la casilla de verificación Show
>
> All/None (Mostrar todos/ninguno).
>
> - Seleccione HTTP y TCP. Haga clic en cualquier lugar fuera del cuadro Edit Filters para ocultarlo. En
>
> Visible Events (Eventos visibles) ahora solo se deberían mostrar las PDU de HTTP y TCP.
>
> - Haga clic en Capture/Forward. Coloque el cursor sobre cada PDU hasta encontrar una que se origine
>
> desde HTTP Client. Haga clic en el sobre de PDU para abrirlo.
>
> - Haga clic en la ficha Inbound PDU Details (Detalles de PDU entrante) y desplácese hasta la última
>
> sección. ¿Cómo se rotula la sección? ____________________________________________________________________________________ ¿Se consideran confiables estas comunicaciones? ____________________________________________________________________________________
>
> - Registre los valores de SRC PORT (PUERTO DE ORIGEN), DEST PORT (PUERTO DE DESTINO),
>
> SEQUENCE NUM (NÚMERO DE SECUENCIA) y ACK NUM (NÚMERO DE RECONOCIMIENTO). ¿Qué está escrito en el campo que se encuentra a la izquierda del campo WINDOW (Ventana)? ____________________________________________________________________________________
>
> - Cierre la PDU y haga clic en Capture/Forward hasta que una PDU vuelva a HTTP Client con una marca
>
> de verificación. f. Cierre el sobre de PDU y seleccione Inbound PDU Details. ¿En qué cambiaron los números de puerto y de secuencia? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Hay una segunda PDU de un color diferente, que HTTP Client preparó para enviar a MultiServer. Este
>
> es el comienzo de la comunicación HTTP. Haga clic en este segundo sobre de PDU y seleccione Outbound PDU Details (Detalles de PDU saliente).
>
> Simulación Packet Tracer: Comunicaciones de TCP y UDP
>
> - ¿Qué información aparece ahora en la sección TCP? ¿En qué se diferencian los números de puerto y de
>
> secuencia con respecto a las dos PDU anteriores? ____________________________________________________________________________________ ____________________________________________________________________________________ i. Haga clic en Back hasta que se restablezca la simulación.
>
> Paso 3: Examinar el tráfico FTP cuando los clientes se comunican con el servidor.
>
> - En el panel de simulación, modifique las opciones de Edit Filters para que solo se muestren FTP y TCP.
> - Haga clic en Capture/Forward. Coloque el cursor sobre cada PDU hasta encontrar una que se origine
>
> desde FTP Client. Haga clic en el sobre de PDU para abrirlo.
>
> - Haga clic en la ficha Inbound PDU Details (Detalles de PDU entrante) y desplácese hasta la última
>
> sección. ¿Cómo se rotula la sección? ____________________________________________________________________________________ ¿Se consideran confiables estas comunicaciones? ____________________________________________________________________________________
>
> - Registre los valores de SRC PORT (PUERTO DE ORIGEN), DEST PORT (PUERTO DE DESTINO),
>
> SEQUENCE NUM (NÚMERO DE SECUENCIA) y ACK NUM (NÚMERO DE RECONOCIMIENTO). ¿Qué está escrito en el campo que se encuentra a la izquierda del campo WINDOW (Ventana)? ____________________________________________________________________________________
>
> - Cierre la PDU y haga clic en Capture/Forward hasta que una PDU vuelva a FTP Client con una marca
>
> de verificación. f. Cierre el sobre de PDU y seleccione Inbound PDU Details. ¿En qué cambiaron los números de puerto y de secuencia? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Haga clic en la ficha Outbound PDU Details. ¿En qué se diferencian los números de puerto y de
>
> secuencia con respecto a los dos resultados anteriores? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Cierre la PDU y haga clic en Capture/Forward hasta que una segunda PDU vuelva a FTP Client. La
>
> PDU es de un color diferente. i. Abra la PDU y seleccione Inbound PDU Details. Desplácese hasta después de la sección TCP. ¿Cuál es el mensaje del servidor? ____________________________________________________________________________________ j. Haga clic en Back hasta que se restablezca la simulación.
>
> Paso 4: Examinar el tráfico DNS cuando los clientes se comunican con el servidor.
>
> - En el panel de simulación, modifique las opciones de Edit Filters para que solo se muestren DNS y
>
> UDP.
>
> - Haga clic en el sobre de PDU para abrirlo.
>
> Simulación Packet Tracer: Comunicaciones de TCP y UDP
>
> - Haga clic en la ficha Inbound PDU Details (Detalles de PDU entrante) y desplácese hasta la última
>
> sección. ¿Cómo se rotula la sección? ____________________________________________________________________________________ ¿Se consideran confiables estas comunicaciones? ________________________________ ____________________________________________________________________________________
>
> - Registre los valores de SRC PORT (PUERTO DE ORIGEN) y DEST PORT (PUERTO DE DESTINO).
>
> ¿Por qué no hay números de secuencia ni de reconocimiento? ____________________________________________________________________________________
>
> - Cierre la PDU y haga clic en Capture/Forward hasta que una PDU vuelva a DNS Client con una marca
>
> de verificación. f. Cierre el sobre de PDU y seleccione Inbound PDU Details. ¿En qué cambiaron los números de puerto y de secuencia? ____________________________________________________________________________________
>
> - ¿Cómo se llama la última sección de la PDU?
>
> ____________________________________________________________________________________
>
> - Haga clic en Back hasta que se restablezca la simulación.
>
> Paso 5: Examinar el tráfico de correo electrónico cuando los clientes se comunican con el servidor.
>
> - En el panel de simulación, modifique las opciones de Edit Filters para que solo se muestren POP3,
>
> SMTP y TCP.
>
> - Haga clic en Capture/Forward. Coloque el cursor sobre cada PDU hasta encontrar una que se origine
>
> desde E-mail Client. Haga clic en el sobre de PDU para abrirlo.
>
> - Haga clic en la ficha Inbound PDU Details (Detalles de PDU entrante) y desplácese hasta la última
>
> sección. ¿Qué protocolo de la capa de transporte utiliza el tráfico de correo electrónico? ____________________________________________________________________________________ ¿Se consideran confiables estas comunicaciones? ____________________________________________________________________________________
>
> - Registre los valores de SRC PORT (PUERTO DE ORIGEN), DEST PORT (PUERTO DE DESTINO),
>
> SEQUENCE NUM (NÚMERO DE SECUENCIA) y ACK NUM (NÚMERO DE RECONOCIMIENTO). ¿Qué está escrito en el campo que se encuentra a la izquierda del campo WINDOW (Ventana)? ____________________________________________________________________________________
>
> - Cierre la PDU y haga clic en Capture/Forward hasta que una PDU vuelva a E-Mail Client con una
>
> marca de verificación. f. Cierre el sobre de PDU y seleccione Inbound PDU Details. ¿En qué cambiaron los números de puerto y de secuencia? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Haga clic en la ficha Outbound PDU Details. ¿En qué se diferencian los números de puerto y de
>
> secuencia con respecto a los dos resultados anteriores? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> Simulación Packet Tracer: Comunicaciones de TCP y UDP
>
> - Hay una segunda PDU de un color diferente, que HTTP Client preparó para enviar a MultiServer. Este
>
> es el comienzo de la comunicación de correo electrónico. Haga clic en este segundo sobre de PDU y seleccione Outbound PDU Details (Detalles de PDU saliente). i. ¿En qué se diferencian los números de puerto y de secuencia con respecto a las dos PDU anteriores? ____________________________________________________________________________________ ____________________________________________________________________________________ j.
>
> ¿Qué protocolo de correo electrónico se relaciona con el puerto TCP 25? ¿Qué protocolo se relaciona con el puerto TCP 110? ____________________________________________________________________________________
>
> - Haga clic en Back hasta que se restablezca la simulación.
>
> Paso 6: Examinar el uso de números de puerto del servidor.
>
> - Para ver las sesiones TCP activas, siga estos pasos en una secuencia rápida
> - Cambie nuevamente al modo Realtime (Tiempo real).
> - Haga clic en MultiServer (Multiservidor) y haga clic en la ficha Desktop > Command Prompt
>
> (Escritorio > Símbolo del sistema).
>
> - Introduzca el comando netstat. ¿Qué protocolos se indican en la columna izquierda? ______________
>
> ¿Qué números de puerto utiliza el servidor? ____________________________________________________________________________________
>
> - ¿En qué estados están las sesiones?
>
> ____________________________________________________________________________________
>
> - Repita el comando netstat varias veces hasta que vea solo una sesión con el estado ESTABLISHED.
>
> ¿Para qué servicio aún está abierta la conexión? ___________________________________________ ¿Por qué no se cierra esta sesión como las otras tres? (Sugerencia: revise los clientes minimizados). ____________________________________________________________________________________
