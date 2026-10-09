---
layout: default
title: "✍️ Activitats pràctiques UT9 — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT9 — U8 - VLAN"
prev_url: "../ut09/ut0906.html"
prev_label: "⬅️ 9.6 Colisió i difusió"
next_url: "../ut10/index.html"
next_label: "📘 UT10 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT9

> **✍️ Activitat Pràctica 9.1 — U8A1**
> U8A1 1/2
>
> Ejercicio en clase Dado el escenario
>
> U8A1 2/2
>
> - Asignar para todos los PC´s una misma subred clase B/19 de forma que “presuntamente” se vean entre sí.
>
> o Clase B -> 128.X.X.X - 191.X.X.X o /19 -> 255.255.224.0 à 11111111.11111111.11100000.00000000 • Es decir, los 19 primeros bits han de ser iguales para que se vean entre sí.
>
> - Configurar los switches (en modo consola) para que los PC´s estén
>
> o PC0, PC1 y PC2 en la misma red virtual VLAN10 o PC3, PC4 Y PC5 en la misma red virtual VLAN11 o PC6, PC7 Y PC8 en la misma red virtual VLAN21 o PC9, PC10 Y PC11 en la misma red virtual VLAN22
>
> - Guardar el escenario, asignándole un nombre que se pueda recordar
>
> - De momento, no hacer nada más con los switches

> **✍️ Activitat Pràctica 9.2 — U8A2**
> U8A2 1/3
>
> Ejercicio en clase
>
> Dado el escenario
>
> U8A2 2/3
>
> Se necesita que todos los PC¨s estén en la mima subred. Las IP´s de esos PC´s son
>
> PC0: 201.177.94.161/27 PC1: 201.177.94.162/27 PC2: 201.177.94.163/27 …
>
> PC16: 201.177.94.177/27 PC17: 201.177.94.178/27
>
> Sin embargo, es también necesario crear 2 redes virtuales VLAN10 y VLAN20
>
> - En la VLAN10 estarán los PC´s: PC0, PC1, PC2, PC6, PC7, PC8, PC12, PC13 y PC14.
>
> - En la VLAN20 estarán los PC´s: PC3, PC4, PC5, PC9, PC10, PC11, PC15, PC16 y PC17.
>
> Así, todos los PC´s de la VLAN10 se verán entre sí pero no verán a los de la VLAN20. Del mismo modo, todos los PC´s de la VLAN20 se verán entre sí pero no verán a los de la VLAN10.
>
> Se pide
>
> - Construir el escenario PACKET TRACER con las IP´s propuestas.
> - Realizar la configuración en modo consola de los 3 switches para conseguir tener esas 2 redes virtuales
>
> U8A2 3/3
>
> Consejos
>
> - Primero construir el escenario con los 3 switches y todos los PC´s conectados a cada uno de los switches. Asignar IP´s,
>
> máscaras de red, velocidad de conexión (100 mbps) y full dúplex en todos los PC´s. Conectar los PC´s a los switches (6 PC´s por cada switch) con el cable correspondiente
>
> - A continuación, comprobar que todos los PC´s de switch0 se ven entre sí, todos los PC´s del switch1 se ven entre sí y todos los
>
> PC´s del switch2 se ven entre sí. Si eso no funciona, de nada sirve continuar
>
> - Cuando todo está comprobado, guardar el escenario y empezar la configuración de los switches
>
> Ayuda inestimable: Se puede hacer que el switch2 sea el switch central. De esta manera, del switch0 irán 2 cables al switch2 y del switch1 irán otros 2 cables al switch2. Pero no habrá cables del switch0 al switch1. Así, en el switch0 y el switch1 habrá que definir 2 switchport trunk native pero en el switch2 habrá que definir 4 de esos switchport trunk native (2 para el switch0 y otros 2 para el switch1)

> **✍️ Activitat Pràctica 9.3 — U8P1**
> Packet Tracer: ¿quién escucha la difusión? Objetivos Parte 1: observar el tráfico de difusión en una implementación de VLAN Parte 2: completar las preguntas de repaso Situación En esta actividad, se ocupa la totalidad de un switch Catalyst 2960 de 24 puertos. Se utilizan todos los puertos. Observará el tráfico de difusión en una implementación de VLAN y responderá algunas preguntas de reflexión.
>
> Instrucciones Paso 1: Utilizar ping para generar tráfico.
>
> - Haga clic en PC0 y, a continuación, haga clic en la ficha Desktop > Command Prompt (Escritorio >
>
> Símbolo del sistema).
>
> - Introduzca el comando ping 192.168.1.8. El ping debe ser correcto.
>
> A diferencia de las LAN, las VLAN son dominios de difusión creados por switches. Utilice el modo Simulation (Simulación) de Packet Tracer para hacer ping a las terminales dentro de su propia VLAN. Responda las preguntas del paso 2 de acuerdo con lo observado. Paso 2: Genere y examine el tráfico de difusión en una implementación de VLAN.
>
> - Cambie a modo de simulación.
> - En el panel de simulación, haga clic en Edit Filters (Editar filtros). Desmarque la casilla de verificación
>
> Show All/None (Mostrar todos/ninguno). Active la casilla de verificación ICMP.
>
> - Haga clic en la herramienta Add Complex PDU, el ícono de sobre abierto en la barra de herramientas
>
> derecha.
>
> - Pase el mouse sobre la topología; el puntero se transforma a un sobre con un signo más (+).
> - Haga clic en PC0 para que sirva como fuente para este mensaje de prueba y se abrirá la ventana de
>
> diálogo Crear PDU compleja. Introduzca los siguientes valores: o Dirección IP de destino: 255.255.255.255 (dirección de difusión) o Sequence Number (Número de secuencia): 1 o Tiempo de intento único: 0 En los parámetros de PDU, el valor predeterminado para Select Application (Seleccionar aplicación) es PING.
>
> Pregunta: Mencione, al menos, tres otras aplicaciones que estén disponibles para utilizar. Escriba sus respuestas aquí.
>
> f. Haga clic en Create PDU (Crear PDU). Este paquete de difusión de prueba ahora aparece en Simulation Panel Event List (Lista de eventos del panel de simulación). El paquete también aparece en la ventana de la lista de PDU. Es la primera PDU de la Situación 0.
>
> - Haga clic en Capture/Forward (Capturar/Adelantar) dos veces.
>
> Pregunta: ¿Qué sucedió con el paquete?
>
> Packet Tracer: ¿quién escucha la difusión?
>
> Escriba sus respuestas aquí.
>
> - Repita este proceso para la PC8 y la PC16.
>
> Preguntas de reflexión
>
> ### 1. Si un equipo en la VLAN 10 envía un mensaje de difusión, ¿qué dispositivos lo reciben?
>
> Escriba sus respuestas aquí.
>
> - Si una computadora en la VLAN 20 envía un mensaje de difusión, ¿qué dispositivos lo reciben?
>
> Escriba sus respuestas aquí.
>
> - Si una computadora en la VLAN 30 envía un mensaje de difusión, ¿qué dispositivos lo reciben?
>
> Escriba sus respuestas aquí.
>
> - ¿Qué le sucede a una trama enviada desde un equipo en la VLAN 10 hacia un equipo en la VLAN 30?
>
> Escriba sus respuestas aquí.
>
> - ¿Qué puertos del switch se encienden si una computadora conectada al puerto 11 envía un mensaje de
>
> unidifusión a una computadora conectada al puerto 13? Escriba sus respuestas aquí.
>
> - ¿Qué puertos del switch se encienden si una computadora conectada al puerto 2 envía un mensaje de
>
> unidifusión a una computadora conectada al puerto 23? Escriba sus respuestas aquí.
>
> - Desde el punto de vista de los puertos, ¿cuáles son los dominios de colisiones en el switch?
>
> Escriba sus respuestas aquí.
>
> - Desde el punto de vista de los puertos, ¿cuáles son los dominios de difusión en el switch?
>
> Escriba sus respuestas aquí. Fin del documento

> **✍️ Activitat Pràctica 9.4 — U8P2**
> Packet Tracer: investigación de la implementación de una VLAN Tabla de asignación de direcciones Dispositivo Interfaz Dirección IP Máscara de subred Gateway predeterminado S1 VLAN 99 172.17.99.31 255.255.255.0 N/D S2 VLAN 99 172.17.99.32 255.255.255.0 N/D S3 VLAN 99 172.17.99.33 255.255.255.0 N/D PC1 NIC 172.17.10.21 255.255.255.0 172.17.10.1 PC2 NIC 172.17.20.22 255.255.255.0 172.17.20.1 PC3 NIC 172.17.30.23 255.255.255.0 172.17.30.1 PC4 NIC 172.17.10.24 255.255.255.0 172.17.10.1 PC5 NIC 172.17.20.25 255.255.255.0 172.17.20.1 PC6 NIC 172.17.30.26 255.255.255.0 172.17.30.1 PC7 NIC 172.17.10.27 255.255.255.0 172.17.10.1 PC8 NIC 172.17.20.28 255.255.255.0 172.17.20.1 PC9 NIC 172.17.30.29 255.255.255.0 172.17.30.1 Objetivos Parte 1: observar el tráfico de difusión en una implementación de VLAN Parte 2: observar el tráfico de difusión sin VLAN Aspectos básicos En esta actividad, observará el modo en que los switches reenvían el tráfico de difusión cuando se configuran las VLAN y cuando no se configuran las VLAN.
>
> Instrucciones Parte 1: Observar el tráfico de broadcast en la implementación de una VLAN Paso 1: Haga ping de PC1 a PC6.
>
> - Espere que todas las luces de enlace se pongan en verde. Para acelerar este proceso, haga clic en la
>
> opción Fast Forward Time ubicado en la barra de herramientas inferior.
>
> - Haga clic en la pestaña Simulation y utilice la herramienta Add Simple PDU. Haga clic en PC1y, a
>
> continuación, haga clic en PC6.
>
> - Haga clic en el botón Capture/Forward para avanzar por el proceso. Observe las peticiones ARP a
>
> medida que atraviesan la red. Cuando aparezca la ventana Buffer Full (Búfer lleno), haga clic en el botón View Previous Events (Ver eventos anteriores). Preguntas: ¿Fueron correctos los pings? Explique.
>
> Packet Tracer: investigación de la implementación de una VLAN
>
> Escriba sus respuestas aquí.
>
> Examine el panel de simulación, ¿dónde envió el paquete el S3 después de recibirlo? Escriba sus respuestas aquí.
>
> En funcionamiento normal, cuando un switch recibe una trama de broadcast en uno de sus puertos, envía la trama a todos los demás puertos. Observe que el S2 solo envía la solicitud de ARP al S1por Fa0/1. También observe que el S3 solo envía la solicitud de ARP a la PC4 por F0/11. Tanto la PC1 como la PC4 pertenecen a la VLAN 10. La PC6 pertenece a la VLAN 30. Dado que el tráfico de difusión está dentro de la VLAN, la PC6 nunca recibe la solicitud de ARP de la PC1. Debido a que la PC4 no es el destino, descarta la solicitud de ARP. El ping de la PC1 falla debido a que la PC1 nunca recibe una respuesta de ARP.
>
> Paso 2: hacer ping de la PC1 a la PC4.
>
> - Haga clic en el botón New (Nuevo) en la ficha desplegable Scenario 0 (Situación 0). Ahora, haga clic en
>
> el ícono Add Simple PDU (Agregar PDU simple) ubicado en el lado derecho de Packet Tracer y haga
>
> ```bash
> ping de la PC1 a la PC4.
> ```
>
> - Haga clic en el botón Capture/Forward para avanzar por el proceso. Observe las peticiones ARP a
>
> medida que atraviesan la red. Cuando aparezca la ventana Buffer Full (Búfer lleno), haga clic en el botón View Previous Events (Ver eventos anteriores). Pregunta: ¿Fueron correctos los pings? Explique. Escriba sus respuestas aquí.
>
> - Examine el panel de simulación.
>
> Pregunta: Cuando el paquete llegó al S1, ¿por qué también se reenvió a la PC7?
>
> Parte 2: Observar el tráfico de broadcast sin las VLAN Paso 1: borrar las configuraciones en los tres switches y eliminar la base de datos de VLAN.
>
> - Vuelva al modo Realtime.
>
> Abrir la ventana de configuración
>
> - Elimine la configuración de inicio en los tres switches.
>
> Preguntas: ¿Qué comando se utiliza para eliminar la configuración de inicio de los switches? Escriba sus respuestas aquí.
>
> ¿Dónde se almacena el archivo VLAN en los switches? Escriba sus respuestas aquí.
>
> Packet Tracer: investigación de la implementación de una VLAN
>
> - Elimine el archivo VLAN en los tres switches.
>
> Pregunta: ¿Qué comando elimina el archivo VLAN almacenado en los switches? Escriba sus respuestas aquí.
>
> Paso 2: volver a cargar los switches. Utilice el comando reload en el modo EXEC privilegiado para reiniciar todos los switches. Espere a que todo el enlace se torne verde. Para acelerar este proceso, haga clic en la opción Fast Forward Time (Adelantar el tiempo), ubicada en la barra de herramientas inferior amarilla.
>
> Cerrar la ventana de configuración Paso 3: Haga clic en Capture/Forward para enviar las solicitudes de ARP y los pings.
>
> - Luego de que los switches se vuelven a cargar y las luces de enlace vuelven a ponerse en verde, la red
>
> está lista para enviar su tráfico ARP y ping.
>
> - Seleccione Scenario 0 en la ficha desplegable para volver a la situación 0.
> - En el modo Simulation haga clic en Capture/Forward para continuar con el proceso. Observe que los
>
> switches ahora envían las solicitudes ARP a todos los puertos, excepto al puerto en el que se recibió la petición ARP. Esta acción predeterminada de los switches es la razón por la que las VLAN pueden mejorar el rendimiento de la red. El tráfico de broadcast se encuentra dentro de cada VLAN. Cuando aparezca la ventana Buffer Full, haga clic en el botón View Previous Events.
>
> Preguntas de reflexión
>
> Escriba sus respuestas aquí.
>
> - Si una computadora en la VLAN 20 envía un mensaje de difusión, ¿qué dispositivos lo reciben?
>
> Escriba sus respuestas aquí.
>
> - Si una computadora en la VLAN 30 envía un mensaje de difusión, ¿qué dispositivos lo reciben?
>
> Escriba sus respuestas aquí.
>
> - ¿Qué le sucede a una trama enviada desde un equipo en la VLAN 10 hacia un equipo en la VLAN 30?
>
> Escriba sus respuestas aquí.
>
> - Desde el punto de vista de los puertos, ¿cuáles son los dominios de colisiones en el switch?
>
> Escriba sus respuestas aquí.
>
> - Desde el punto de vista de los puertos, ¿cuáles son los dominios de difusión en el switch?
>
> Escriba sus respuestas aquí. Fin del documento

> **✍️ Activitat Pràctica 9.5 — U8P3**
> Packet Tracer: Configuración de redes VLAN Tabla de asignación de direcciones Dispositivo Interfaz Dirección IP Máscara de subred VLAN PC1 NIC 172.17.10.21 255.255.255.0 PC2 NIC 172.17.20.22 255.255.255.0 PC3 NIC 172.17.30.23 255.255.255.0 PC4 NIC 172.17.10.24 255.255.255.0 PC5 NIC 172.17.20.25 255.255.255.0 PC6 NIC 172.17.30.26 255.255.255.0 Objetivos Parte 1: Verificar la configuración de VLAN predeterminada Parte 2: Configurar las VLAN Parte 3: Asignar las VLAN a los puertos Aspectos básicos Las VLAN son útiles para la administración de grupos lógicos y permiten mover, cambiar o agregar fácilmente a los miembros de un grupo. Esta actividad se centra en la creación y la denominación de redes VLAN, así como en la asignación de puertos de acceso a VLAN específicas.
>
> Parte 1: Visualizar la configuración de VLAN predeterminada Paso 1: Mostrar las VLAN actuales En el S1, emita el comando que muestra todas las VLAN configuradas. Todas las interfaces están asignadas a la VLAN 1 de forma predeterminada. Paso 2: Verificar la conectividad entre dos computadoras en la misma red Observe que cada computadora puede hacer ping a otra que comparta la misma red.
>
> • PC1 puede hacer ping a PC4 • PC2 puede hacer ping a PC5 • PC3 puede hacer ping a PC6 Los pings a las PC de otras redes fallan. Pregunta: ¿Qué beneficios pueden proporcionar las VLAN a la red? Escriba sus respuestas aquí.
>
> Packet Tracer: Configuración de redes VLAN
>
> Parte 2: Configurar las VLAN Paso 1: Crear y nombrar las VLAN en el S1
>
> - Cree las siguientes VLAN. Los nombres distinguen entre mayúsculas y minúsculas y deben coincidir
>
> exactamente con el requisito: • VLAN 10: Faculty/Staff Abrir la ventana de configuración S1#(config)# vlan 10 S1#(config-vlan)# name Faculty/Staff
>
> - Crea los VLAN restantes.
>
> • VLAN 20: Students • VLAN 30: Guest(Default) • VLAN 99: Management&Native • VLAN 150: VOICE
>
> Paso 2: Verificar la configuración de la VLAN Pregunta: ¿Con qué comando se muestran solamente el nombre y el estado de la VLAN y los puertos asociados en un switch?
>
> Paso 3: Crear las VLAN en el S2 y el S3 Con los mismos comandos del paso 1, cree y nombre las mismas VLAN en el S2 y el S3. Paso 4: Verificar la configuración de la VLAN Cerrar la ventana de configuración Parte 3: Asignar VLAN a los puertos Paso 1: Asignar las VLAN a los puertos activos en el S2
>
> - Configure las interfaces como puertos de acceso y asigne las VLAN de la siguiente manera
>
> • VLAN 10: FastEthernet 0/11 Abrir la ventana de configuración S2(config)# interface f0/11 S2(config-if)# switchport mode access S2(config-if)# switchport access vlan 10
>
> - Asigne los puertos restantes a la VLAN adecuada.
>
> • VLAN 20: FastEthernet 0/18 • VLAN 30: FastEthernet 0/6
>
> Packet Tracer: Configuración de redes VLAN
>
> Paso 2: Asignar VLAN a los puertos activos en S3 El S3 utiliza las mismas asignaciones de puertos de acceso de VLAN que el S2. Configure las interfaces como puertos de acceso y asigne las VLAN de la siguiente manera: • VLAN 10: FastEthernet 0/11 • VLAN 20: FastEthernet 0/18 • VLAN 30: FastEthernet 0/6
>
> Paso 3: Asignar la red VLAN de voz a FastEthernet 0/11 en el S3 Como se muestra en la topología, la interfaz FastEthernet 0/11 del S3 se conecta a un teléfono IP de Cisco y PC4. El teléfono IP contiene un switch integrado 10/100 de tres puertos. Un puerto en el teléfono está etiquetado como switch y se conecta a F0/4. Otro puerto en el teléfono está etiquetado como PC y se conecta a la PC4. El teléfono IP también tiene un puerto interno que se conecta con las funciones del teléfono IP.
>
> La interfaz F0/11 del S3 debe estar configurada para admitir tráfico del usuario a la PC4 con VLAN 10 y tráfico de voz al teléfono IP con VLAN 150. La interfaz también debe habilitar QoS y confiar en los valores de clase de servicio (CoS) asignados por el teléfono IP. El tráfico de voz IP requiere una cantidad mínima de rendimiento para admitir una calidad de comunicación de voz aceptable. Este comando ayuda al switchport a proporcionar esta cantidad mínima de rendimiento.
>
> S3(config)# interface f0/11 S3(config-if)# mls qos trust cos S3(config-if)# switchport voice vlan 150 Paso 4: Verificar la pérdida de conectividad Anteriormente, las PC que compartían la misma red podían hacer ping entre sí con éxito. Estudie la salida de desde el siguiente comando en S2 y responda las siguientes preguntas basándose en su conocimiento de la comunicación entre VLAN. Preste mucha atención a la asignación del puerto Gig0/1.
>
> S2# show vlan brief VLAN Name Status Ports ---- -------------------------------- --------- ------------------------------- 1 default active Fa0/1, Fa0/2, Fa0/3, Fa0/4 Fa0/5, Fa0/7, Fa0/8, Fa0/9 Fa0/10, Fa0/12, Fa0/13, Fa0/14 Fa0/15, Fa0/16, Fa0/17, Fa0/19 Fa0/20, Fa0/21, Fa0/22, Fa0/23 Fa0/24, Gig0/1, Gig0/2 10 Faculty/Staff active Fa0/11
>
> Packet Tracer: Configuración de redes VLAN
>
> 20 Students active Fa0/18 30 Guest(Default) active Fa0/6 99 Management&Native active 150 VOICE active Intente hacer ping entre PC1 y PC4. Preguntas: Si bien los puertos de acceso están asignados a las VLAN adecuadas, ¿los pings se realizaron correctamente? Explique. Escriba sus respuestas aquí.
>
> ¿Qué podría hacerse para resolver este problema? Escriba sus respuestas aquí. Cerrar la ventana de configuración Fin del documento

> **✍️ Activitat Pràctica 9.6 — U8P4**
> Packet Tracer: Configuración de enlaces troncales
>
> Tabla de asignación de direcciones Dispositivo Interfaz Dirección IP Máscara de subred Puerto del switch VLAN PC1 NIC 172.17.10.21 255.255.255.0 S2 F0/11 PC2 NIC 172.17.20.22 255.255.255.0 S2 F0/18 PC3 NIC 172.17.30.23 255.255.255.0 S2 F0/6 PC4 NIC 172.17.10.24 255.255.255.0 S3 F0/11 PC5 NIC 172.17.20.25 255.255.255.0 S3 F0/18 PC6 NIC 172.17.30.26 255.255.255.0 S3 F0/6 Objetivos Parte 1: verificar las VLAN Parte 2: configurar enlaces troncales Aspectos básicos Se requieren enlaces troncales para transmitir información de VLAN entre switches. Un puerto de un switch es un puerto de acceso o un puerto de enlace troncal. Los puertos de acceso transportan el tráfico de una VLAN específica asignada al puerto. De forma predeterminada, un puerto troncal es miembro de todas las VLAN. Por lo tanto, transporta tráfico para todas las VLAN. Esta actividad se centra en la creación de puertos de enlace troncal y en la asignación a una VLAN nativa distinta a la VLAN predeterminada.
>
> Instrucciones Parte 1: verificar las VLAN Paso 1: mostrar las VLAN actuales. Abrir la ventana de configuración
>
> - En el S1, emita el comando que muestra todas las VLAN configuradas. Debería haber diez VLAN en
>
> total. Observe cómo los 26 puertos de acceso del switch se asignan a la VLAN 1.
>
> - En S2 y S3, visualice y verifique que todas las VLAN estén configuradas y asignadas a los puertos de
>
> switch correctos según la tabla de direcciones. Cerrar la ventana de configuración Paso 2: verificar la pérdida de conectividad entre dos computadoras en la misma red. Hacer ping entre hosts en la misma VLAN en los diferentes switches. Aunque la PC1 y la PC4 estén en la misma red, no pueden hacer ping entre sí. Esto es porque los puertos que conectan los switches se asignaron a la VLAN 1 de manera predeterminada. Para proporcionar conectividad entre las computadoras en la misma red y VLAN, se deben configurar enlaces troncales.
>
> Parte 2: configurar los enlaces troncales Paso 1: configurar el enlace troncal en el S1 y utilizar la VLAN 99 como VLAN nativa. Abrir la ventana de configuración
>
> Packet Tracer: Configuración de enlaces troncales
>
> - Configure las interfaces de G0/1 y G0/2 en S1 para los enlaces troncales.
>
> S1(config)# interface range g0/1 - 2 S1(config-if)# switchport mode trunk
>
> - Configure VLAN 99 como la VLAN nativa para las interfaces de G0/1 y G0/2 en S1.
>
> S1(config-if)# switchport trunk native vlan 99 El puerto de enlace troncal tarda alrededor de un minuto en volverse activo debido al árbol de expansión. Haga clic en Fast Forward Time (Adelantar el tiempo) para acelerar el proceso. Una vez que los puertos se activan, recibirá de forma periódica los siguientes mensajes de syslog
>
> %CDP-4-NATIVE_VLAN_MISMATCH: Native VLAN mismatch discovered on GigabitEthernet0/2 (99), with S3 GigabitEthernet0/2 (1). %CDP-4-NATIVE_VLAN_MISMATCH: Native VLAN mismatch discovered on GigabitEthernet0/0 (99), with S2 GigabitEthernet1/1 (1). Configuró la VLAN 99 como VLAN nativa en el S1. Sin embargo, S2 y S3 están usando VLAN 1 como la VLAN nativa predeterminada, según lo indica el mensaje de syslog.
>
> Pregunta: Si bien hay una incompatibilidad de VLAN nativa, los pings entre las computadoras de la misma VLAN ahora se realizan de forma correcta. Explique. Escriba sus respuestas aquí.
>
> Paso 2: verificar que el enlace troncal esté habilitado en el S2 y el S3. En el S2 y el S3, emita el comando show interface trunk para confirmar que el DTP haya negociado de forma correcta el enlace troncal con el S1 en el S2 y el S3. El resultado también muestra información sobre las interfaces troncales en el S2 y el S3. Más adelante en el curso aprenderá más sobre DTP.
>
> Pregunta: ¿Qué VLAN activas tienen permitido cruzar el enlace troncal? Escriba sus respuestas aquí.
>
> Paso 3: corregir la incompatibilidad de VLAN nativa en el S2 y el S3.
>
> - Configure la VLAN 99 como VLAN nativa para las interfaces apropiadas en el S2 y el S3.
> - Emita el comando show interface trunk para verificar que la configuración de la VLAN sea correcta.
>
> Paso 4: verificar las configuraciones del S2 y el S3.
>
> - Emita el comando show interface interfaz switchport para verificar que la VLAN nativa ahora sea 99.
> - Emita el comando show vlan para mostrar información acerca de las VLAN configuradas.
>
> Pregunta: ¿Por qué el puerto G0/1 en S2 dejó de estar asignado a VLAN 1? Escriba sus respuestas aquí.

> **✍️ Activitat Pràctica 9.7 — U8P5**
> Packet Tracer: Configuración de DTP Tabla de asignación de direcciones Dispositivo Interfaz Dirección IP Máscara de subred PC1 NIC 192.168.10.1 255.255.255.0 PC2 NIC 192.168.20.1 255.255.255.0 PC3 NIC 192.168.30.1 255.255.255.0 PC4 NIC 192.168.30.2 255.255.255.0 PC5 NIC 192.168.20.2 255.255.255.0 PC6 NIC 192.168.10.2 255.255.255.0 S1 VLAN 99 192.168.99.1 255.255.255.0 S2 VLAN 99 192.168.99.2 255.255.255.0 S3 VLAN 99 192.168.99.3 255.255.255.0 Objetivos • Configurar la conexión troncal estática • Configurar y comprobar DTP Aspectos básicos/situación A medida que aumenta la cantidad de switches en una red, la administración necesaria para gestionar las redes VLAN y los enlaces troncales puede resultar un desafío. Para facilitar algunas de las configuraciones de VLAN y enlace troncal, la negociación de enlaces troncales entre dispositivos de red se gestiona mediante el Protocolo de enlace dinámico (DTP) y se habilita automáticamente en los switches Catalyst 2960 y Catalyst 3650.
>
> Durante esta actividad, deberá configurar enlaces troncales entre los switches. Asignará puertos a las VLAN y verificará la conectividad de extremo a extremo entre los hosts en la misma VLAN. Configurará enlaces troncales entre los switches y configurará VLAN 999 como la VLAN nativa.
>
> Instrucciones Parte 1: Compruebe la configuración de VLAN. Compruebe las VLAN configuradas en los switches.
>
> - En S1, vaya al modo EXEC privilegiado y escriba el comando show vlan brief para verificar las VLAN
>
> presentes. Abrir la ventana de configuración S1# show vlan brief
>
> VLAN Name Status Ports ---- -------------------------------- --------- ------------------------------- 1 default active Fa0/1, Fa0/2, Fa0/3, Fa0/4 Fa0/5, Fa0/6, Fa0/7, Fa0/8 Fa0/9, Fa0/10, Fa0/11, Fa0/12 Fa0/13, Fa0/14, Fa0/15, Fa0/16 Fa0/17, Fa0/18, Fa0/19, Fa0/20
>
> Packet Tracer: Configuración de DTP
>
> Fa0/21, Fa0/22, Fa0/23, Fa0/24 Gig0/1, Gig0/2 99 Management active 999 Native active 1002 fddi-default active 1003 token-ring-default active 1004 fddinet-default active 1005 trnet-default active
>
> - Repita el paso 1a en S2 y S3.
>
> Pregunta: ¿Qué redes VLAN están configuradas en los switches? Escriba sus respuestas aquí.
>
> Parte 2: Cree VLAN adicionales en S2 y S3.
>
> - En S2, cree la VLAN 10 y asígnele el nombre Rojo.
>
> S2(config)# vlan 10 S2(config-vlan)# name Red
>
> - Cree la VLAN 20 y la VLAN 30 de acuerdo con la siguiente tabla.
>
> Número de VLAN Nombre de la VLAN Red Blue Yellow
>
> - Compruebe la incorporación de las VLAN nuevas. Introduzca show vlan brief en el modo EXEC
>
> privilegiado. Pregunta: Además de las VLAN predeterminadas, ¿qué VLAN están configuradas en S2? Escriba sus respuestas aq uí. Repita los pasos anteriores para crear las VLAN adicionales en S3. Parte 3: Asignar VLAN a los puertos Use el comando switchport mode access para establecer el modo de acceso de los enlaces de acceso.
>
> Utilice el comando switchport access vlan vlan-id para asignar una VLAN a un puerto de acceso. Puertos Asignaciones Red S2 F0/1 – 8 S3 F0/1 – 8 VLAN 10 (Red) 192.168.10.0 /24 S2 F0/9 – 16 S3 F0/9 – 16 VLAN 20 (Blue) 192.168.20.0 /24 S2 F0/17 – 24 S3 F0/17 – 24 VLAN 30 (Yellow) 192.168.30.0 /24
>
> - Asigne VLAN a los puertos de S2 usando asignaciones de la tabla anterior.
>
> S2(config-if)# interface range f0/1 - 8
>
> Packet Tracer: Configuración de DTP
>
> S2(config-if-range)# switchport mode access S2(config-if-range)# switchport access vlan 10 S2(config-if-range)# interface range f0/9 -16 S2(config-if-range)# switchport mode access S2(config-if-range)# switchport access vlan 20 S2(config-if-range)# interface range f0/17 - 24 S2(config-if-range)# switchport mode access S2(config-if-range)# switchport access vlan 30
>
> - Asigne VLAN a los puertos en S3 utilizando las asignaciones de la tabla anterior.
>
> Ahora que tiene los puertos asignados a las VLAN, intente hacer ping desde PC1 a PC6 . Pregunta: ¿El ping se realizó correctamente? Explique. Escriba sus res puestas aquí. Parte 4: Configure enlaces troncales en S1, S2 y S3. El protocolo DTP (Dynamic Trunking Protocol, protocolo de enlace troncal dinámico) administra los enlaces troncales entre switches de Cisco. Actualmente, todos los puertos de conmutación están en el modo de enlace predeterminado, que es dinámico automático. En este paso, deberá cambiar el modo de enlace troncal a dinámico conveniente (dynamic desirable) para el enlace entre los switches S1 y S2. En el switch S1, configure el enlace troncal a dinámico desechable en la interfaz GigabitEthernet 0/1. Use la red VLAN 999 como VLAN nativa en esta topología.
>
> - En el switch S1, configure el enlace troncal a dinámico deseable en la interfaz GigabitEthernet 0/1. La
>
> configuración de S1 se muestra a continuación. S1(config)# interface g0/1 S1(config-if)# switchport mode dynamic desirable Pregunta: ¿Cuál será el resultado de la negociación troncal entre S1 y S2? Escriba sus respuestas aquí.
>
> - En el switch S2, compruebe que el troncal se ha negociado introduciendo el comando show interfaces
>
> trunk . Interfaz GigabitEthernet 0/1 debería aparecer en la salida. Pregunta: ¿Cuál es el modo y el estado de este puerto? Escriba sus respuestas aquí.
>
> - Para el enlace troncal entre el S1 y el S3, configure un enlace troncal estático en la interfaz
>
> GigabitEthernet 0/2. Además, deshabilite la negociación DTP en la interfaz G0/2 en S1. S1(config)# interface g0/2 S1(config-if)# switchport mode trunk S1(config-if)# switchport nonegotiate
>
> - Utilice el comando show dtp para verificar el estado de DTP.
>
> S1# show dtp
>
> Packet Tracer: Configuración de DTP
>
> Global DTP information Sending DTP Hello packets every 30 seconds Dynamic Trunk timeout is 300 seconds 1 interfaces using DTP
>
> - Compruebe que los enlaces troncales estén habilitados en todos los switches mediante el comando
>
> show interfaces trunk. S1# show interfaces trunk Port Mode Encapsulation Status Native vlan Gig0/1 desirable n-802.1q trunking 1 Gig0/2 on 802.1q trunking 1
>
> Port Vlans allowed on trunk Gig0/1 1-1005 Gig0/2 1-1005
>
> Port Vlans allowed and active in management domain Gig0/1 1,99,999 Gig0/2 1,99,999
>
> Port Vlans in spanning tree forwarding state and not pruned Gig0/1 1,99,999 Gig0/2 1,99,999 Pregunta: ¿Cuál es, actualmente, la VLAN nativa para estos enlaces troncales? Escriba sus respuestas aquí. f. Configure la VLAN 999 como VLAN nativa para los enlaces troncales en S1.
>
> S1(config)# interface range g0/1 - 2 S1(config-if-range)# switchport trunk native vlan 999 Pregunta: ¿Qué mensajes recibió en el S1? ¿Cómo corregiría el problema? Escriba sus respuestas aquí.
>
> - Configure la VLAN 999 como VLAN nativa en S2 y S3.
> - Compruebe que los enlaces troncales se hayan configurado correctamente en todos los switches. Debe
>
> poder hacer ping en un switch desde otro switch en la topología mediante el uso de las direcciones IP configuradas en la SVI. i. Intente hacer ping desde la PC1 a la PC6. Pregunta: ¿Por qué fallaron los pings? (Sugerencia: Mire la salida 'show vlan brief' de los tres switches. Compare las salidas del 'show interface trunk' en todos los switches.) Escriba sus respue stas aquí.
>
> j. Corrija la configuración según sea necesario.
>
> Packet Tracer: Configuración de DTP
>
> Parte 5: Vuelva a configurar el trunk en S3.
>
> - Ejecute el comando ‘show interface trunk’ en S3.
>
> Pregunta: ¿Cuál es el modo y la encapsulación en G0/2? Escriba su s respuestas aquí.
>
> - Configure G0/2 para que coincida con G0/2 en S1 .
>
> Pregunta: ¿Cuál es el modo y la encapsulación en G0/2 después del cambio? Escriba sus respuestas aquí.
>
> - Ejecute el comando 'show interface G0/2 switchport' en el switch S3.
>
> Pregunta: ¿Cuál es el estado «Negociación del enlace troncal» que se muestra? Escriba sus respuestas aquí. Cerrar la ventana de configuración Parte 6: Verifique la conectividad completa.
>
> - De PC1 ping PC6.
> - De PC2 ping PC5.
> - De PC3 ping PC4.
>
> Fin del documento

> **✍️ Activitat Pràctica 9.8 — U8P6**
> © 2013 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Packet Tracer: Solución de problemas de implementación de VLAN, situación 1 Topología
>
> Tabla de asignación de direcciones Dispositivo Interfaz Dirección IPv4 Máscara de subred Puerto del switch VLAN PC1 NIC 172.17.10.21 255.255.255.0 S2 F0/11 PC2 NIC 172.17.20.22 255.255.255.0 S2 F0/18 PC3 NIC 172.17.30.23 255.255.255.0 S2 F0/6 PC4 NIC 172.17.10.24 255.255.255.0 S3 F0/11 PC5 NIC 172.17.20.25 255.255.255.0 S3 F0/18 PC6 NIC 172.17.30.26 255.255.255.0 S3 F0/6 Objetivos Parte 1: Probar la conectividad entre las computadoras en la misma VLAN Parte 2: Investigar los problemas de conectividad por medio de la recopilación de datos Parte 3: Implementar la solución y probar la conectividad Situación En esta actividad, se efectúa la solución de problemas de conectividad entre las PC de la misma VLAN. La actividad finaliza cuando las computadoras en la misma VLAN pueden hacer ping entre sí. Cualquier solución que implemente debe cumplir con la tabla de direccionamiento.
>
> Packet Tracer: Solución de problemas de implementación de VLAN, situación 1 © 2013 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Parte 1: Probar la conectividad entre las PC de la misma VLAN En el símbolo del sistema de cada computadora, haga ping entre las computadoras en la misma VLAN.
>
> - ¿Puede PC1 hacer ping a PC4? ____________
> - ¿Puede PC2 hacer ping a PC5? ____________
> - ¿Puede PC3 hacer ping a PC6? ____________
>
> Parte 2: Investigar los problemas de conectividad por medio de la recopilación de datos Paso 1: Verificar la configuración en las computadoras Verifique si las siguientes configuraciones para cada computadora son correctas. •
>
> ```bash
> IP Address (Dirección IP)
> ```
>
> • Máscara de subred Paso 2: Verificar la configuración en los switches Verifique si las siguientes configuraciones en los switches son correctas. • Los puertos están asignados a las VLAN correctas. • Los puertos se configuraron para el modo correcto. • Los puertos están conectados a los dispositivos correctos.
>
> Paso 3: Registrar el problema y las soluciones Enumere los problemas y las soluciones que permitirán que estas computadoras hagan ping entre sí. Recuerde que podría haber más de un problema o más de una solución. PC1 a PC4
>
> - Explique los problemas de conectividad entre la PC1 y la PC4.
>
> ____________________________________________________________________________________
>
> - Registre las acciones necesarias para corregir los problemas.
>
> ____________________________________________________________________________________ ____________________________________________________________________________________ PC2 a PC5
>
> - Explique los problemas de conectividad entre la PC2 y la PC5.
>
> ____________________________________________________________________________________
>
> - Registre las acciones necesarias para corregir los problemas.
>
> ____________________________________________________________________________________ ____________________________________________________________________________________ PC3 a PC6
>
> - ¿Cuáles son las razones por las que la conectividad falló entre las PC?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________
>
> Packet Tracer: Solución de problemas de implementación de VLAN, situación 1 © 2013 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. f. Registre las acciones necesarias para corregir los problemas. ____________________________________________________________________________________ ____________________________________________________________________________________ Parte 3
>
> Implementar la solución y probar la conectividad Verifique que las computadoras en la misma VLAN ahora puedan hacer ping entre sí. De lo contrario, continúe con el proceso de solución de problemas. Tabla de puntuación sugerida La actividad Packet Tracer vale 70 puntos. El registro realizado en el paso 2 de la parte 3 vale 30 puntos.

> **✍️ Activitat Pràctica 9.9 — U8P7**
> ã 2019 - aa Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Packet Tracer - Implementar VLAN y Trunking Tabla de asignación de direcciones Dispositivo Interfaz Dirección IP Máscara de subred Switchport VLAN PC1 NIC 192.168.10.10 255.255.255.0 SWB F0/1 VLAN 10 PC2 NIC 192.168.20.20 255.255.255.0 SWB F0/2 VLAN 20 PC3 NIC 192.168.30.30 255.255.255.0 SWB F0/3 VLAN 30 PC4 NIC 192.168.10.11 255.255.255.0 SWC F0/1 VLAN 10 PC5 NIC 192.168.20.21 255.255.255.0 SWC F0/2 VLAN 20 PC6 NIC 192.168.30.31 255.255.255.0 SWC F0/3 VLAN 30 PC7 NIC 192.168.10.12 255.255.255.0 SWC F0/4 VLAN 10 VLAN 40 (Voz) SWA SVI 192.168.99.252 255.255.255.0 N/D VLAN 99 SWB SVI 192.168.99.253 255.255.255.0 N/D VLAN 99 SWC SVI 192.168.99.254 255.255.255.0 N/D VLAN 99 Objetivos Parte 1. Configurar las VLAN Parte 2: Asignar las VLAN a los puertos Parte 3: Configurar troncales estáticos Parte 4: Configurar enlace troncal dinámico Aspectos básicos Está trabajando en una empresa que se está preparando para implementar un conjunto de switches 2960 nuevos en una sucursal. Está trabajando en el laboratorio para probar las configuraciones de VLAN y trunking planificadas. Configurar y verificar las VLAN y los enlaces troncales Instrucciones Parte 1: Configurar las redes VLAN Configure las VLAN en los tres switches. Consulte la tabla de VLAN. Tenga en cuenta que los nombres de VLAN deben coincidir exactamente con los valores de la tabla.
>
> Tabla de VLAN Número de VLAN Nombre de la VLAN Admin Accounts HR
>
> Packet Tracer - Implementar VLAN y Trunking
>
> Número de VLAN Nombre de la VLAN Voice Management Native Parte 2: Asignar puertos a las VLAN Paso 1: Asignar puertos de acceso a las VLAN En SWB y SWC, asigne puertos a las VLAN. Consulte la tabla de direcciones. Paso 2: Configurar el puerto VLAN de voz Configure el puerto apropiado en el switch SWC para la funcionalidad de VLAN de voz.
>
> Paso 3: Configurar las interfaces de gestión virtual.
>
> - Cree las interfaces de administración virtual en los tres switches.
> - Dirija las interfaces de administración virtual de acuerdo con la Tabla de direcciones.
> - Los switches no deberían poder hacer ping entre sí.
>
> Parte 3: Configurar troncales estáticos
>
> - Configure el enlace entre SWA y SWB como una troncal estática. Deshabilite el enlace dinámico en este
>
> puerto.
>
> - Desactive DTP en el puerto del switch en ambos extremos del enlace troncal.
> - Configure el troncal con la VLAN native y elimine los conflictos de VLAN native en su caso.
>
> Parte 4: Configurar troncales dinamicos.
>
> - Suponga que el puerto troncal en SWC está configurado en el modo DTP predeterminado para los
>
> switches 2960. Configure G0/2 en SWA para que negocie correctamente el enlace troncal con SWC.
>
> - Configure el troncal con la VLAN nativa y elimine los conflictos de VLAN nativa en su caso.
>
> Fin del documento

> **✍️ Activitat Pràctica 9.10 — U8P8**
> © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Packet Tracer: configuración de VLAN, VTP y DTP Topología
>
> Tabla de asignación de direcciones Dispositivo Interfaz Dirección IP Máscara de subred PC0 NIC 192.168.10.1 255.255.255.0 PC1 NIC 192.168.20.1 255.255.255.0 PC2 NIC 192.168.30.1 255.255.255.0 PC3 NIC 192.168.30.2 255.255.255.0 PC4 NIC 192.168.20.2 255.255.255.0 PC5 NIC 192.168.10.2 255.255.255.0 S1 VLAN 99 192.168.99.1 255.255.255.0 S2 VLAN 99 192.168.99.2 255.255.255.0 S3 VLAN 99 192.168.99.3 255.255.255.0 Objetivos Parte 1. Configurar y comprobar el DTP Parte 2. Configurar y comprobar el protocolo VTP Aspectos básicos/situación A medida que aumenta la cantidad de switches en una red, la administración necesaria para gestionar las redes VLAN y los enlaces troncales puede resultar un desafío. Para facilitar algunas de las configuraciones de la red VLAN y los enlaces troncales, el protocolo VTP (VLAN trunking protocol, protocolo de enlace troncal de red VLAN) le permite al administrador de redes automatizar la gestión de redes VLAN. La negociación de enlaces troncales entre los dispositivos de red se administra mediante el protocolo DTP (Dynamic Trunking Protocol, protocolo de enlace troncal dinámico) y se activa automáticamente en switches Catalyst 2960 y 3560.
>
> Packet Tracer: configuración de VLAN, VTP y DTP © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Durante esta actividad, deberá configurar enlaces troncales entre los switches. Deberá configurar un servidor de VTP y clientes de VTP en el mismo dominio del VTP. También deberá observar el comportamiento del VTP cuando un switch se encuentre en modo de VTP transparente. Asignará puertos a las VLAN y comprobará la conectividad completa con la misma VLAN.
>
> Parte 1: Configurar y comprobar DTP En la parte 1, configurará enlaces troncales entre los switches y establecerá la VLAN 999 como VLAN nativa. Paso 1: Compruebe la configuración de VLAN. Compruebe las VLAN configuradas en los switches.
>
> - En S1, haga clic en CLI. En el símbolo del sistema, introduzca enable y el comando show vlan brief
>
> para comprobar las VLAN configuradas en S1. S1# show vlan brief
>
> VLAN Name Status Ports ---- -------------------------------- --------- ------------------------------- 1 default active Fa0/1, Fa0/2, Fa0/3, Fa0/4 Fa0/5, Fa0/6, Fa0/7, Fa0/8 Fa0/9, Fa0/10, Fa0/11, Fa0/12 Fa0/13, Fa0/14, Fa0/15, Fa0/16 Fa0/17, Fa0/18, Fa0/19, Fa0/20 Fa0/21, Fa0/22, Fa0/23, Fa0/24 Gig0/1, Gig0/2 99 Management active 999 VLAN0999 active 1002 fddi-default active 1003 token-ring-default active 1004 fddinet-default active 1005 trnet-default active
>
> - Repita el paso A en los switches S2 y S3. ¿Qué VLAN están configuradas en los switches?
>
> ____________________________________________________________________________________ Paso 2: Configure enlaces troncales en S1, S2 y S3. El protocolo DTP (Dynamic Trunking Protocol, protocolo de enlace troncal dinámico) administra los enlaces troncales entre switches de Cisco. Actualmente, todos los puertos de switch se encuentran en el modo predeterminado de enlace troncal, que es dinámico automático (dynamic auto). En este paso, deberá cambiar el modo de enlace troncal a dinámico conveniente (dynamic desirable) para el enlace entre los switches S1 y S2. El enlace entre los switches S1 y S3 se definirá como enlace estático. Use la red VLAN 999 como VLAN nativa en esta topología.
>
> - En el switch S1 y el switch S2, configure el enlace troncal en el modo dynamic desirable en la interfaz
>
> GigabitEthernet 0/1. La configuración de S1 se muestra a continuación. S1(config)# interface g0/1 S1(config-if)# switchport mode dynamic desirable
>
> - Para el enlace troncal entre el S1 y el S3, configure un enlace troncal estático en la interfaz
>
> GigabitEthernet 0/2. S1(config)# interface g0/2 S1(config-if)# switchport mode trunk
>
> Packet Tracer: configuración de VLAN, VTP y DTP © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. S3(config)# interface g0/2 S3(config-if)# switchport mode trunk
>
> - Compruebe que los enlaces troncales estén habilitados en todos los switches mediante el comando
>
> show interfaces trunk. S1# show interfaces trunk Port Mode Encapsulation Status Native vlan Gig0/1 desirable n-802.1q trunking 1 Gig0/2 on 802.1q trunking 1
>
> Port Vlans allowed on trunk Gig0/1 1-1005 Gig0/2 1-1005
>
> Port Vlans allowed and active in management domain Gig0/1 1,99,999 Gig0/2 1,99,999
>
> Port Vlans in spanning tree forwarding state and not pruned Gig0/1 none Gig0/2 none ¿Cuál es, en este momento, la VLAN nativa para estos enlaces troncales? _______________________
>
> - Configure la VLAN 999 como VLAN nativa para los enlaces troncales en S1.
>
> S1(config)# interface range g0/1 - 2 S1(config-if-range)# switchport trunk native vlan 999 ¿Qué mensajes recibió en el S1? ¿Cómo lo corregiría? ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Configure la VLAN 999 como VLAN nativa en S2 y S3.
>
> f. Compruebe que los enlaces troncales se hayan configurado correctamente en todos los switches. Debe poder hacer ping en un switch desde otro switch en la topología mediante el uso de las direcciones IP configuradas en la SVI. Parte 2: Configurar y comprobar el protocolo VTP El S1 se configurará como servidor del VTP y el S2 se configurará como cliente del VTP. Todos los switches deberán configurarse para estar en el dominio CCNA del VTP y usar la contraseña cisco.
>
> Las VLAN pueden crearse en el servidor del VTP y distribuirse a otros switches en el dominio del VTP. En esta parte, deberá crear 3 redes VLAN nuevas en el servidor del VTP S1. Estas redes VLAN se distribuirán al S2 usando el VTP. Observe cómo funciona el modo de VTP transparente.
>
> Paso 1: Configure S1 como servidor VTP. Configure S1 como servidor VTP en el dominio CCNA con la contraseña cisco.
>
> - Configure S1 como servidor VTP.
>
> S1(config)# vtp mode server Setting device to VTP SERVER mode.
>
> Packet Tracer: configuración de VLAN, VTP y DTP © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco.
>
> - Configure CCNA como el nombre de dominio VTP.
>
> S1(config)# vtp domain CCNA Changing VTP domain name from NULL to CCNA
>
> - Utilice cisco como contraseña VTP.
>
> S1(config)# vtp password cisco Setting device VLAN database password to cisco Paso 2: Compruebe VTP en S1.
>
> - Utilice el comando show vtp status en los switches para confirmar que el modo y el dominio VTP se
>
> hayan configurado correctamente. S1# show vtp status VTP Version : 2 Configuration Revision : 0 Maximum VLAN supported locally : 255 Number of existing VLANs : 7 VTP Operating Mode : Server VTP Domain Name : CCNA VTP Pruning Mode : Disabled VTP V2 Mode : Disabled VTP Traps Generation : Disabled MD5 digest : 0x8C 0x29 0x40 0xDD 0x7F 0x7A 0x63 0x17 Configuration last modified by 0.0.0.0 at 0-0-00 00:00:00 Local updater ID is 192.168.99.1 on interface Vl99 (lowest numbered VLAN interface found)
>
> - Para verificar la contraseña VTP, utilice el comando show vtp password.
>
> S1# show vtp password VTP Password: cisco Paso 3: Agregue S2 y S3 al dominio VTP. Antes de que el S2 y el S3 puedan aceptar anuncios del VTP del S1, deben pertenecer al mismo dominio del VTP. Configure el S2 como cliente del VTP usando CCNA como nombre de dominio del VTP y cisco como contraseña del VTP. Recuerde que los nombres de los dominios del VTP distinguen mayúsculas de minúsculas.
>
> - Configure S2 como cliente VTP en el dominio VTP CCNA con la contraseña VTP cisco.
>
> S2(config)# vtp mode client Setting device to VTP CLIENT mode. S2(config)# vtp domain CCNA Changing VTP domain name from NULL to CCNA S2(config)# vtp password cisco Setting device VLAN database password to cisco
>
> - Para verificar la contraseña VTP, utilice el comando show vtp password.
>
> S2# show vtp password VTP Password: cisco
>
> Packet Tracer: configuración de VLAN, VTP y DTP © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco.
>
> - Configure el S3 en el dominio CCNA del VTP con la contraseña cisco para el VTP. El switch S3
>
> permanecerá en el modo de VTP transparente. S3(config)# vtp mode Transparent S3(config)# vtp domain CCNA Changing VTP domain name from NULL to CCNA S3(config)# vtp password cisco Setting device VLAN database password to cisco
>
> - Introduzca el comando show vtp status en todos los switches para responder la siguiente pregunta.
>
> Observe que el número de revisión de la configuración es 0 en los tres switches. Explique. ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ Paso 4
>
> Cree más VLAN en S1.
>
> - En S1, cree la VLAN 10 y asígnele el nombre Red.
>
> S1(config)# vlan 10 S1(config-vlan)# name Red
>
> - Cree la VLAN 20 y la VLAN 30 de acuerdo con la siguiente tabla.
>
> Número de VLAN Nombre de la VLAN Red Blue Yellow
>
> - Compruebe la incorporación de las VLAN nuevas. Introduzca show vlan brief en el modo EXEC
>
> privilegiado. ¿Qué VLAN están configuradas en S1? ____________________________________________________________________________________
>
> - Confirme los cambios en la configuración; para ello, utilice el comando show vtp status en los switches
>
> S1 y S2 para corroborar que el modo y el dominio VTP se hayan configurado correctamente. Aquí se muestra el resultado para el S2: S2# show vtp status VTP Version : 2 Configuration Revision : 6 Maximum VLAN supported locally : 255 Number of existing VLANs : 10 VTP Operating Mode : Client VTP Domain Name : CCNA VTP Pruning Mode : Disabled VTP V2 Mode : Disabled VTP Traps Generation : Disabled MD5 digest : 0xE6 0x56 0x05 0xE0 0x7A 0x63 0xFB 0x33 Configuration last modified by 192.168.99.1 at 3-1-93 00:21:07
>
> Packet Tracer: configuración de VLAN, VTP y DTP © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. ¿Cuántas son las redes VLAN configuradas en el S2? ¿Tiene el S2 la misma cantidad de redes VLAN que el S1? Explique.
>
> ____________________________________________________________________________________ ____________________________________________________________________________________ Paso 5: Observe el modo transparente VTP. S3 está configurado actualmente como modo VTP transparente.
>
> - Use el comando show vtp status para responder la siguiente pregunta.
>
> ¿Cuántas VLAN están configuradas actualmente en S3? ¿Cuál es el número de revisión de la configuración? Justifique su respuesta. ____________________________________________________________________________________ ____________________________________________________________________________________ ¿Cómo cambiaría la cantidad de VLAN en S3?
>
> ____________________________________________________________________________________ ____________________________________________________________________________________
>
> - Cambie el modo VTP a cliente en S3.
>
> Utilice los comandos show para comprobar los cambios en modo VTP. ¿Cuántas VLAN existen ahora en S3? ____________________________________________________________________________________ Nota: Las notificaciones VTP se saturan en todo el dominio de administración cada cinco minutos o cada vez que ocurre un cambio en las configuraciones de VLAN. Para acelerar este proceso, puede alternar entre el modo en tiempo real y el modo de simulación hasta la siguiente ronda de actualización. Sin embargo, es posible que deba hacer esto varias veces, ya que este proceso solo adelantará el reloj de Packet Tracer 10 segundos. De forma alternativa, se puede cambiar uno de los switches clientes al modo transparente y luego regresar al modo cliente.
>
> Paso 6: Asignar VLAN a los puertos Use el comando switchport mode access para establecer el modo de acceso de los enlaces de acceso. Utilice el comando switchport access vlan vlan-id para asignar una VLAN a un puerto de acceso. Puertos Asignaciones Red S2 F0/1 – 8 S3 F0/1 – 8 VLAN 10 (Red) 192.168.10.0 /24 S2 F0/9 – 16 S3 F0/9 – 16 VLAN 20 (Blue) 192.168.20.0 /24 S2 F0/17 – 24 S3 F0/17 – 24 VLAN 30 (Yellow) 192.168.30.0 /24
>
> - Asigne VLAN a los puertos de S2 usando asignaciones de la tabla anterior.
>
> S2(config-if)# interface range f0/1 - 8 S2(config-if-range)# switchport mode access S2(config-if-range)# switchport access vlan 10 S2(config-if-range)# interface range f0/9 -16
>
> Packet Tracer: configuración de VLAN, VTP y DTP © 2022 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. S2(config-if-range)# switchport mode access S2(config-if-range)# switchport access vlan 20 S2(config-if-range)# interface range f0/17 - 24 S2(config-if-range)# switchport mode access S2(config-if-range)# switchport access vlan 30
>
> - Asigne VLAN a los puertos de S3 usando asignaciones de la tabla anterior.
>
> Paso 7: Verifique la conectividad completa.
>
> - Desde la PC0 haga ping en la PC5.
> - Desde la PC1 haga ping en la PC4.
> - Desde la PC2 haga ping en la PC3.

> **✍️ Activitat Pràctica 9.11 — U8P9**
> © 2018 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco.
>
> Packet Tracer: configuración del switching de capa 3 y routing entre redes VLAN
>
> Topología
>
> Tabla de asignación de direcciones
>
> Dispositivo Interfaz Dirección IP Máscara de subred
>
> MLS VLAN 10 192.168.10.254 255.255.255.0 VLAN 20 192.168.20.254 255.255.255.0 VLAN 30 192.168.30.254 255.255.255.0 VLAN 99 192.168.99.254 255.255.255.0 G0/2 209.165.200.225 255.255.255.252 PC0 NIC 192.168.10.1 255.255.255.0 PC1 NIC 192.168.20.1 255.255.255.0 PC2 NIC 192.168.30.1 255.255.255.0 PC3 NIC 192.168.10.2 255.255.255.0 PC4 NIC 192.168.20.2 255.255.255.0 PC5 NIC 192.168.30.2 255.255.255.0 S1 VLAN 99 192.168.99.1 255.255.255.0 S2 VLAN 99 192.168.99.2 255.255.255.0 S3 VLAN 99 192.168.99.3 255.255.255.0
>
> Packet Tracer: configuración del switching de capa 3 y routing entre redes VLAN © 2018 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco.
>
> Objetivos Parte 1. Configurar el switching de capa 3 Parte 2. Configurar el routing entre redes VLAN Aspectos básicos/situación Un switch multicapa, como el Cisco Catalyst 3560, es capaz de realizar switching de capa 2 y routing de capa 3. Una de las ventajas de usar un switch multicapa es esta funcionalidad doble. Un beneficio para las empresas pequeñas/medianas es la capacidad de comprar un solo switch multicapa en lugar de dispositivos de red separados para switching y routing. Las capacidades de un switch multicapa incluyen la capacidad de hacer routing de una red VLAN a otra usando varias interfaces virtuales en modo switch (SVI), así como la capacidad de convertir un puerto de switch de capa 2 en una interfaz de capa 3.
>
> Parte 1: Configurar el switching de capa 3 En la parte 1, deberá configurar el puerto GigabitEthernet 0/2 en el switch multicapa (MLS) como puerto de routing y comprobar que pueda hacer ping a otra dirección de capa 3.
>
> - En el MLS, configure G0/2 como un puerto de routing y asigne una dirección IP de acuerdo con la tabla
>
> de direcciones. MLS(config)# interface g0/2 MLS(config-if)# no switchport MLS(config-if)# ip address 209.165.200.225 255.255.255.252
>
> - Compruebe la conectividad a la nube haciendo ping a la dirección 209.165.200.226.
>
> MLS# ping 209.165.200.226
>
> Type escape sequence to abort. Sending 5, 100-byte ICMP Echos to 209.165.200.226, timeout is 2 seconds: !!!!! Success rate is 100 percent (5/5), round-trip min/avg/max = 0/0/0 ms
>
> Parte 2: Configurar routing entre redes VLAN
>
> Paso 1: Agregar redes VLAN. Agregue redes VLAN al MLS según la siguiente tabla.
>
> Número de VLAN Nombre de la VLAN Personal Estudiante Cuerpo docente
>
> Paso 2: Configurar la SVI en el MLS. Configure y active la interfaz SVI para las redes VLAN 10, 20, 30 y 99 según la tabla de direcciones. A continuación, se muestra la configuración de la red VLAN 10. MLS(config)# interface vlan 10 MLS(config-if)# ip address 192.168.10.254 255.255.255.0
>
> Packet Tracer: configuración del switching de capa 3 y routing entre redes VLAN © 2018 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco.
>
> Paso 3: Activar el routing.
>
> - Use el comando show ip route. ¿Hay rutas activas?
>
> - Introduzca el comando ip routing para activar el routing en el modo de configuración global.
>
> MLS(config)# ip routing
>
> - Use el comando show ip route para comprobar que el routing esté activado.
>
> MLS# show ip route Codes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2 E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
>
> - candidate default, U - per-user static route, o - ODR
>
> P - periodic downloaded static route
>
> Gateway of last resort is not set
>
> C 192.168.10.0/24 is directly connected, Vlan10 C 192.168.20.0/24 is directly connected, Vlan20 C 192.168.30.0/24 is directly connected, Vlan30 C 192.168.99.0/24 is directly connected, Vlan99 209.165.200.0/30 is subnetted, 1 subnets C 209.165.200.224 is directly connected, GigabitEthernet0/2
>
> Paso 4: Verificar la conectividad de extremo a extremo
>
> - En la PC0, haga ping a la PC3 o al MLS para comprobar la conectividad con la red VLAN 10.
> - En la PC1, haga ping a la PC4 o al MLS para comprobar la conectividad en la red VLAN 20.
> - En la PC2, haga ping a la PC5 o al MLS para comprobar la conectividad en la red VLAN 30.
> - En el S1, haga ping al S2, S3 o MLS para comprobar la conectividad en la red VLAN 99.
> - Para comprobar el routing entre redes VLAN, haga ping a los dispositivos fuera de la red VLAN del emisor.
>
> f. Desde cualquier dispositivo, haga ping a esta dirección en la nube: 209.165.200.226

> **✍️ Activitat Pràctica 9.12 — Examen U8**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
