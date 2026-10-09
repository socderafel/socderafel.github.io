---
layout: default
title: "✍️ Activitats pràctiques UT3 — Xarxes Locals | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT3 — Unitat Didàctica 3"
prev_url: "../ut03/ut0301.html"
prev_label: "⬅️ 3.1 Recursos: Ejercicios de Direccionamiento IP"
next_url: "../ut04/index.html"
next_label: "📘 UT4 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — 03 - Actividad 01: Direccionamiento IP *****
> Realiza un dossier con la resolución de los ejercicios sobre direccionamiento IP planteados en el PDF de referencia y preséntalos al profesor para su corrección.

> **✍️ Activitat Pràctica 3.2 — 03 - Actividad 02: Asignación de Direcciones IP *****
> Realiza el ejercico sobre asignación de direcciones IP

> **✍️ Activitat Pràctica 3.3 — 03 - Actividad 03: Subnetting *****
> Realiza el ejercicio sobre Subnetting

> **✍️ Activitat Pràctica 3.4 — 03 - Actividad 04: Routing *****
> Realiza la actividad propuesta sobre Routing

> **✍️ Activitat Pràctica 3.5 — Examen I Pràctic IP**
> Examen Pràctic IP

> **✍️ 📋 Exercici / Qüestionari 3.6 — Examen I Práctico IP**
> Examen I Práctico IP
>
> Direccionament IP - 1er SMX
>
> Unitat 3
>
> Nom: ____________________________________________________________ Indicar la classe, màscara per defecte en format decimal punt i amb CIDR , direcció de xarxa, direcció de broadcast i número d'equips màxims en potències de 2 que podem assignar a les xarxes a les que pertanyen les següents direccions IP (2'5 punts)
>
> 25.25.25.25 192.168.22.125 192.168.0.2/8 193.225.193. 129/10 125.125.125.125 172.31.152.132 192.168.0.2/16 193.225.193. 129/17 175.175.175.175 10.2.35.250 192.168.0.2/24 193.225.193. 129/18 210.210.210.210 127.0.0.1 172.16.128.5/17 192.225.193. 129/25 251.200.50.1 255.255.255.255 12.168.64.10/9 193.225.193.129/26
>
> Subnetting (2'5 punts) Especifica les direccions IP significatives (equips, xarxa i broadcast) amb la corresponent màscara en format CIDR partint de la IP 100.200.0.0/16 per aconseguir 8 subxarxes amb almenys 1000 ordinadors per subxarxa.
>
> Assignació de direccions IP (2'5 punts)
>
> - Identifica quantes xarxes apareixen al dibuix i especifica si són públiques o privades.
> - Assigna a les xarxes una direcció de xarxa IP vàlida de classe A amb màscara de classe C i indica
>
> també la direcció de Broadcast de cada xarxa. Justifica l'elecció que has fet.
>
> - Assigna direccions vàlides d'equip a tots els dispositius que la necessiten. Quantes direccions queden
>
> lliures en cada xarxa?
>
> Routing (2'5 punts)
>
> - Assigna adequadament totes les IPs necessàries per a les NIC dels routers mostrats al diagrama
>
> indicant la màscara en format CIDR. Especifica la porta d'enllaç de cada xarxa.
>
> - Construeix la taula d'encaminament de tots els routers per aconseguir comunicació total.
> - Fes el diagrama en forma de graf que representa la comunicació total.
> - Quina ruta de quin router hauries de modificar per fer que la Xarxa no puga accedir a la Xarxa de
>
> Biblioteca? Quines conseqüències comporta el canvi?
>
> - Quina ruta de quin router hauries de modificar per fer que la Xarxa Aula 56 no puga accedir a la
>
> Xarxa Professors? Quines conseqüències comporta el canvi?
>
> Direccionament IP - 1er SMX
>
> Unitat 3
>
> Router 1 Router 4 Xarxa destinació IP següent Interfície Distància Xarxa destinació IP següent Interfície Distància
>
> Router 2 Router 5 Xarxa destinació IP següent Interfície Distància Xarxa destinació IP següent Interfície Distància
>
> Router 3 Router Xarxa destinació IP següent Interfície Distància Xarxa destinació IP següent Interfície Distància

> **✍️ Activitat Pràctica 3.7 — 03 - Actividad 05: Utilidades TCP/IP *****
> Justifica en un documento de texto la utilidad de los siguientes comandos de terminal que proporciona TCP/IP aportando capturas de pantalla explicativas de su uso extendido: ipconfig, ping, arp, netstat, traceroute y nslookup.

> **✍️ Activitat Pràctica 3.8 — 03 - Actividad 06: Gestión de Direccionamiento IP**
> Realizad la actividad 12 del libro de texto relativa al uso de diferentes máscaras de red (página 87), mostrando los resultados en un documento de texto con las capturas de pantalla necesarias. Utiliza para ello una máquina virtual Windows con otra con Linux.
>
> 12. Se propone el siguiente ejercicio para practicar la gestión del direccionamiento IP. Primero hay que contar con varios ordenadores en red sobre los que se tengan derechos de administración para poder modificar sus direcciones de red. A continuación, deben seguirse los siguientes pasos:
>
> > a) Elegir una máscara 255.255.255.0 (clase C) y una dirección 192.168.100.x, donde x será el número que identifique cada PC (si hubiera cinco PC, x valdría 1 en el primer PC, 2 en el segundo, etc.). Después de asignar estas direcciones y máscaras a cada PC, comprobar que todos pueden comunicarse entre sí utilizando la orden «ping destino», donde destino es cualquier PC en red.
> >
> > b) Seguidamente modificar las máscaras de los PC por 255.255.0.0 (clase B). ¿Pierdes la comunicación? ¿Por qué?
> >
> > c) Vuelve a la máscara 255.255.255.0 y modifica las direcciones IP de un subgrupo de PC para que sean 192.168.50.x. Comprueba ahora qué PC pueden comunicar con qué otros. Ahora observarás que tienes dos subredes conviviendo en la misma red física, con la misma máscara pero con diferentes direcciones IP: la red 192.168.100 y la 192.168.50.
> >
> > d) Por último, vuelve a establecer la máscara de todos los PC como 255.255.0.0. En ese momento, has vuelto a tener una única subred (la 192.168) por integración de las dos subredes en una superior. Comprueba que al estar de nuevo todos los PC en una única subred, todos vuelven a tener comunicación entre sí.

> **✍️ Activitat Pràctica 3.9 — 03 - Actividad 07: Identificación de parámetros de red**
> Realiza un documento de texto con las imágenes pertinentes adicionales que refleje el resultado de la actividad 14 de la página 87 de tu libro de texto referente al uso del comando ping y arp.
>
> 14. Se propone el siguiente ejercicio para practicar la identificación de parámetros de red. Hemos de partir de un conjunto de PC en red con direcciones IP compatibles de modo que todos puedan responder a la orden ping.
>
> > a) Elige un PC diana contra el que vas a hacer las pruebas y otro PC cliente desde el que ejecutarás los comandos y en el que operarás tú mismo. Comprueba que la red de ambos PC está operativa.
> > b) Haz ping desde el PC cliente contra el PC diana. Comprueba que tienes comunicación porque la orden ping obtiene eco del destino.
> >
> > c) ¿Cuál es la dirección física del PC destino? Con la orden arp –a obtendrás el listado de todas las direcciones físicas con las que el PC cliente se ha comunicado en los últimos minutos. Una de ellas será la dirección física del PC diana: la que corresponda a su dirección IP.
> >
> > d) Deja pasar algunos minutos sin actividad de red entre el PC cliente y el PC diana y vuelve a ejecutar la orden arp –a. Observarás que la dirección física del PC diana ha desaparecido puesto que la tabla de direcciones arp es dinámica y se reconstruye cada cierto tiempo.

> **✍️ Activitat Pràctica 3.10 — 03 - Actividad 08: Escaner de puertos**
> Utiliza una herramienta de libre distribución o online que permita el análisis de los puertos (sockets) que tiene abiertos un servidor, así como los servicios asociados a ellos, para realizar un listado de diferentes servicios de la red disponibles y restringidos. Esta actividad corresponde con la 13 de la página 87 del libro de texto.
>
> 13. Busca en Internet una herramienta de escáner de puertos de libre distribución. Podrás encontrarlas en los buscadores por la voz de búsqueda “escáner de puertos” o “port scanner”. Instálala en una estación de la red y ejecútala para analizar los puertos (sockets) que tiene abiertos un servidor, así como los servicios asociados a ellos.
>
> Si realizas esta operación contra todos los servidores de la red, podrás realizar un mapa de servicios de red.

> **✍️ Activitat Pràctica 3.11 — 03 - Actividad 09: Utilidades Protocolo IPv6**
> Muestra la configuración local en doble pila IPv4 y IPv6 mostrando las diferencias entre ellas. Utiliza el comando ping -6 para comprobar la conexión IPv6 en tu máquina. Prueba el test online para comprobar si tu proveedor tiene disponibles los protocolos de compatibilidad sobre IPv6:
>
> [http://test-ipv6.com/](http://test-ipv6.com/)

> **✍️ Activitat Pràctica 3.12 — 03 - Activitat: Glossari (Llibreta) *****
> Realitza un glossari de termes tècnics relatius als continguts estudiats a la unitat on oferisques una definició curta dels mateixos: Adreçament físic, Adreçament lògic, Nivell LLC, Nivell MAC, Token, FCFS, Col·lisió, FCS, Segment de xarxa, IP, ICMP, TTL, ARP, BOOTP, DHCP, RARP, Datagrama, Multicast, CIDR, Subnetting, SAP, Internetwork, Control de flux, ACK, Socket, DNS, DDNS, Zeroconf, Proxy.

> **✍️ Activitat Pràctica 3.13 — 03 - Activitat: Revisió de Continguts (Llibreta) *****
> 1.- Explica els procediments bàsics IPv4: binaria a decimal, decimal a binari, obtenir direcció de xarxa i de broadcast.
> 2.- Comenta els principals serveis de la capa d'enllaç.
> 3.- Exposa els principis de funcionament dels protocols MAC deterministes.
> 4.- Exposa els principis de funcionament dels protocols MAC no deterministes i classifica-los.
> 5.- Exposa breument el funcionament i característiques del estàndard Ethernet 802.3 i el CSMA/CD.
> 6.- Exposa breument el funcionament i característiques del estàndard 802.5.
> 7.- Diferencia entre col·lisió local, remota i endarrerida.
> 8.- Diferencia entre domini de col·lisió i de difusió.
> 9.- Exposa les principals funcions dels protocols de xarxa.
> 10.- Explica el funcionament de ARP.
> 11.- Diferencia entre assignacions IP estàtiques i dinàmiques.
> 12.- Realitza un diagrama del procés d'assignació dinàmica d'adreces IP.
> 13.- Explica el funcionament de RARP.
> 14.- Comenta els principals camps de l'encapçalament IPv4.
> 15.- Explica com es classifiquen les Ips en classes i com es trau el número d'equips i xarxes de cada classe.
> 16.- Comenta les principals adreces reservades i la seva funció.
> 17.- Comenta la utilitat de les tècniques NAT i PAT.
> Exposa les principals característiques de IPv6 i en què es diferencia de IPv4.
> 18.- Comenta la fragmmentació com a funció de la capa de transport.
> 19.- Comenta SAP com a funció de la capa de transport.
> 20.- Comenta els mecanismes que tenen a vore amb la fiabilitat com a funció de la capa de transport.
> 21.- Comenta els mecanismes de control de flux com a funció de la capa de transport.
> 22.- Comenta la multiplexaxió com a funció de la capa de transport.
> 23.- Fes un diagrama aclaridor del procediment de connexió en Serveis Orientats a la Connexió.
> 24.- Comenta les diferencies més importants entre TCP i UDP.
> 25.- Explica el mecanisme de BOOTP.
> 26.- Explica el funcionament de DHCP i mostra en un diagrama els missatges que utilitza.
> 27.- Explica el funcionament i jerarquia de DNS.
> 28.- Exposa els principals protocols que es fan servir a nivell d'aplicació.
> 29.- Exposa les funcions d'un servidor intermediari.
> 30.- Exposa la utilitat i exemplifica els principals comandament TCP/IP: ping, traceroute, ifconfig, netstat, arp i nslookup.
> 31.- Comenta com es conforma una direcció Netbios i com es pot gastar per compartir documents de forma pública o oculta.
> 32.- Diferencia DNS de WINS.

> **✍️ Activitat Pràctica 3.14 — 03 - Activitat: Casos Pràctics (Llibreta) *****
> 1. Las siguientes afirmaciones ¿son verdaderas o falsas?
>
>  a) TCP es un protocolo del nivel de transporte.
>  b) ARP es un protocolo que sirve para resolver asociaciones de direcciones físicas en direcciones IP.
>  c) IP es un protocolo que se puede situar en la capa 2 de OSI.
>  d) Una máscara de red son cuatro números enteros cualesquiera de ocho bits cada uno separados por puntos.
>  e) Todos los bits puestos a «1» de una máscara de red deben estar contiguos y al principio de la máscara.
>  f) Dos hosts con idéntica máscara pertenecen a la misma subred.
>  g) Dos hosts que tienen igual la parte de dirección IP correspondiente a la secuencia de «1» de sus máscaras pertenecen a la misma subred.
>  h) Dos direcciones IP iguales no pueden convivir en la misma red.
>
> 2. Identifica qué protocolos de la lista siguiente son específicos de la tecnología TCP/IP:
>
>  a. SNMP.
>  b. IP.
>  c. MAPI.
>  d. IMAP.
>  e. POP.
>  f. HDLC.
>  g. ARP.
>  h. X.25
>
> 3. ¿Pueden convivir los protocolos NetBeui y TCP/IP sobre la misma red? ¿Por qué? ¿Pueden convivir los protocolos NetBeui y TCP/IP sobre la misma tarjeta de red? ¿Depende de la tarjeta de red o del sistema operativo?
>
> 4. Analiza si son verdaderas o falsas las siguientes afirmaciones:
>
>  a. Las direcciones IP son series numéricas binarias de 32 bits.
>  b. Todos los ceros y unos de una dirección IP deben estar contiguos.
>  c. Todos los ceros y unos de una máscara de red deben estar contiguos.
>  d. Los ceros siempre van antes que los unos en una máscara de red.
>  e. Hay tres clases de subredes IP.
>  f. Un CIDR de /24 es lo mismo que una clase C.
>  g. Un CIDR de /24 admite más nodos que un CIDR de /16. 
>
> 5.- Confirma la veracidad de las siguientes afirmaciones:
>
>  Los servicios de discos de red pueden compartir carpetas de red, pero no ficheros individuales.
>  Es recomendable que a los servicios de disco compartidos en la red se acceda anónimamente.
>  iSCSI es una tecnología para la conexión de grandes volúmenes de discos a los servidores utilizando una red IP como medio de transporte.
>  En una red de área local no se puede imprimir con tecnología IPP.
>  El nombre de un recurso de impresora de red sigue el formato \\SERVIDOR\IMPRESORA.
>  El nombre de un recurso de disco compartido en red sigue el formato: \\NOMBRE-SERVIDOR\DIRECCION-IP
>
> 6.- Comprueba si son ciertos o falsos los siguientes enunciados:
>
>  WINS es un servicio de los servidores Windows que asocia direcciones IP a nombres DNS.
>  DNS es un servicio exclusivo de servidores Linux.
>  La asociación entre nombres de equipos y direcciones IP se lleva a cabo en los servidores DNS.
>  Los servidores DHCP pueden conceder una dirección IP al equipo que lo solicita, pero nunca una máscara de red.
>  La dirección IP del servidor DHCP debe coincidir con la puerta por defecto del nodo que solicita la dirección.
>
> 7.-Comprueba si son ciertos o falsos los siguientes enunciados:
>
>  Una intranet es una red local que utiliza tecnología Internet para brindar sus servicios de red.
>  Una intranet y un extranet sólo se diferencian en el tamaño de la red.
>  Los servidores de correo electrónico utilizan los protocolos http y ftp para el intercambio de mensajes de correo.
>  MIME es un protocolo utilizado en la codificación de mensajes electrónicos.
>  El puerto estándar habitual para el intercambio de mensajes entre servidores de correo electrónico es el 125.
>
> 8.- Un servidor comparte una impresora a la red. El administrador del sistema ha limitado el uso de la impresora a algunos usuarios concretos, denegándoselo al resto. Un cliente de red intenta conectarse a la impresora de red compartida por el servidor y al realizar la conexión, el servidor le presenta una ventana para que se autentifique con un nombre e usuario y contraseña válidos. El cliente tiene localmente un conjunto de cuentas de usuario con sus contraseñas. El servidor tiene por su parte los suyos.
>
>  El permiso de imprimir de la impresora en el servidor ¿debe hacerse sobre un usuario del servidor o del cliente?
>  Si la cuenta utilizada en el cliente coincide con una cuenta en el servidor y las contraseñas son idénticas ¿podrá imprimir el cliente?
>  ¿Qué pasaría si coinciden en el cliente y en el servidor el nombre de usuario, pero no sus contraseñas?
>
> 9. Una red tiene desplegados varios servicios de infraestructura IP para la asignación de direcciones IP y resolución de nombres. Un cliente de red tiene configurada su red de modo que sus parámetros básicos de red deben ser solicitados a un servidor DHCP.
>
>  ¿Qué debe hacerse en el cliente para que tome sus parámetros correctos del servidor DHCP?
>  ¿Qué debe hacerse en el servidor para que admita clientes DHCP?
>  ¿Puede el servidor DHCP asignar al cliente DCHP las direcciones de sus revolvedores de nombres DNS y WINS?
>  ¿Cuándo utilizarías DNS y cuándo WINS?
>
> 10.Una red de área local alberga entre otros servicios un servidor de correo electrónico que ofrece mensajería electrónica a los buzones de los usuarios identificados por un dominio de correo que coincide con su zona DNS. Supongamos que el nombre de esta zona fuera “oficina.lab” y que, por tanto, los usuarios de la red tuvieran direcciones electrónicas del estilo usuario@oficina.lab.
>
>  ¿Pueden estas direcciones de correo utilizarse fuera de la red de área local? ¿Por qué?
>  Si la empresa tiene contratado el dominio oficina.es, ¿podrían ahora utilizarse las direcciones usuario@oficina.es en Internet?
>  ¿Hay que configurar algún parámetro especial en la tarjeta de red de los clientes para que estos puedan enviar correo electrónico? ¿Y en el programa cliente de correo electrónico, por ejemplo, en Outlook?
>  ¿Cómo sabría el servidor de correo electrónico de nuestro buzón a qué servidor debe enviar un correo para que alcance su destino?
>
> 11.-En la siguiente tabla encontrarás tres columnas. Las dos primeras expresan servicios, elementos de configuración o, en general, ámbitos de relación. En la tercera deberás escribir tú cuál es el elemento que relaciona la primera columna con la segunda. Por ejemplo, en la primera fila, que se toma como modelo, se expresa lo que relaciona los nombres DNS con las direcciones IP es el servicio DNS.
>
>  Lo que relaciona - Con - Es
>  Nombres DNS - Direcciones IP - Servidor DNS
>  Nombres NetBIOS - Direcciones IP - ...
>  Registro MX - DNS - ...
>  Servidor DHCP - Cliente DHCP - ...
>  Samba - Linux - ...
>  IPP - Internet - ...
>  Ámbito de red - IP y máscara de red - ...
>  iSCSI - Discos - ...
>  Puerto 25 - Correo electrónico - ...
>
> 12.- Explica cuáles podrían ser las causas de error y por dónde empezarías a investigar en las siguientes situaciones en las que se produce un mal funcionamiento de la red:
>
>  Cuando un cliente de la red arranca no obtiene la dirección IP esperada.
>  El cliente tiene una dirección IP correcta, pero no puede hacer ping a otra máquina local por su nombre NetBIOS.
>  El cliente puede hacer ping a otra máquina local utilizando el nombre NetBIOS, pero no su nombre DNS.
>  Se puede hacer un ping mediante nombre DNS a otra máquina local, pero no a una máquina en Internet, sin embargo, sí funciona un ping a una máquina externa mediante su dirección IP de Internet.
>  Igual que en el caso anterior, pero tampoco funciona el ping a máquina externa con dirección IP de Internet.
>  Arrancamos dos clientes de red que obtienen su dirección mediante DHCP y el primero obtiene una dirección en la red 192.168.1, mientras que el segundo la obtiene en la red 192.168.2. Como la máscara asignada es 255.255.255.0 no tienen comunicación entre ellos y pierden la comunicación entre sí.
>  Encendemos una máquina y nos dice que su dirección IP ya existe en la red (está duplicada).
>  Un cliente tiene por nombre CLIENTE, su nombre de dominio es laboratorio.lab y su dirección IP es 192.168.1.1; sin embargo, cuando otro cliente de la red hace ping contra CLIENTE.laboratorio.lab, el nombre se resuelve como 192.168.1.12 y como esta dirección no existe en la red el ping falla, sin embargo ping contra 192.168.1.1 funciona correctamente.

> **✍️ Activitat Pràctica 3.15 — 03 - Examen II Pràctic IP**
> 03 - Examen II Pràctic IP

> **✍️ Activitat Pràctica 3.16 — 03 - Examen Unitat**
> 03 - Examen Unitat

> **✍️ Activitat Pràctica 3.17 — 03 - Actividad 15: Visita al CPD *****
> Destaca en un breve documento los aspectos más relevantes en relación a la infraestructura de red y las principales tecnologías utilizadas. Intenta recoger información gráfica específica sobre topologías, esquemas de red, cableado y organización del CPD visitado. Asímismo, investiga sobre los servicios ofrecidos a la comunidad universitaria destacando sus pretaciones y rendimientos, prestando especial atención a aquellos trabajados en el módulo de redes locales. (Extensión aproximada: 1-2 páginas) Si no has acudido a la visita: Documenta y analiza los aspectos más relevantes en relación a la infraestructura de red y las principales tecnologías utilizadas en CPDs de empresas grandes. Aporta en el trabajo información gráfica específica sobre topologías, esquemas de red, cableado y organización del CPD. (Extensión aproximada de 5-10 páginas)

> **✍️ Activitat Pràctica 3.18 — 03 - Actividad 10: Usuarios, grupos y permisos *****
> Ensaya los procedimientos de gestión de usuarios creando cinco usuarios (prueba1, prueba2, prueba3, prueba4, prueba5) en un sistema Windows XP a los que proporciones propiedades diferentes. Prueba que estas cuentas han sido correctamente creadas iniciando una sesión en el equipo con cada cuenta recién creada. Ahora establece dos grupos de usuarios (grupoprueba1, grupoprueba2) y asigna las cuentas anteriores a los grupos creados (usuarios 1-2-3 a grupo1 y 4-5 al grupo2). Justifica en un documento el proceso realizado incluyendo las capturas de pantalla pertinentes que demuestren la realización de la tarea.
> Crea tres carpetas (compartida1, compartida2, compartida3) en el directorio raiz de la unidad c: en el disco duro de la estación de trabajo. Coloca un fichero de texto en cada una de ellas con contenido "Este fichero pertenece a la carpeta X". Ahora, realiza una asignación de permisos sobre estas carpetas a los usuarios y grupos del apartado anterior. Compartida1 - Lectura (grupoprueba1) y Escritura (grupoprueba2) Compartida2 - Lectura (prueba1, prueba2) y Escritura (prueba3, prueba4) Compartida3 - Lectura (grupoprueba2) y Escritura (prueba5) Comprueba que la asignación de permisos es correcta, es decir, que si a un usuario o grupo se le ha asignado solo el permiso de lectura, no podré escribir sobre ella, pero podrá leer la información contenida en ella. Justifica en un documento el proceso realizado incluyendo las capturas de pantalla pertinentes que demuestren la realización de la tarea.

> **✍️ Activitat Pràctica 3.19 — 03 - Actividad 11: DNS y fichero Hosts *****
> Documenta y explica el orden que se sigue para determinar la IP de un dominio concreto. Seguidamente modifica el fichero hosts de tu equipo para dirigir un dominio determinado a una IP determinada mostrando los cambios realizados y sus efectos. Por ejemplo, puedes redirigir www.tuenti.com a la IP de www.google.es

> **✍️ Activitat Pràctica 3.20 — 03 - Actividad 12: Servidor Web Apache *****
> utiliza la herramienta XAMPP para levantar Apache y transformar tu equipo en un servidor de páginas web. Muestra su funcionamiento creando un documento HTML sencillo y accediendo a través del browser.

> **✍️ Activitat Pràctica 3.21 — 03 - Actividad 13: Servidor de Correo Mercury Mail *****
> Utiliza el servidor Mercury incluido en el paquete XAMPP para la creación de cuentas de correo locales. Muestra con capturas de pantalla ilustrativas el proceso realizado y comenta las opciones de configuración necesarias que has utilizado. Configura un cliente de correo con los parámetros necesarios para acceder a las cuentas de correo locales creadas en la actividad anterior. Justifica la realización de esta actividad con capturas ilustrativas que muestren las diferentes opciones de configuración de protocolos de correo electrónico. Comenta las diferencias entre POP y IMAP.

> **✍️ Activitat Pràctica 3.22 — 03 - Actividad 14: Servidor FTP con Filezilla *****
> Muestra el funcionamiento de un servidor de FTP y el acceso de un usuario a través de un cliente situado en otra máquina. Puedes usar para facilitarte la gestión un cliente y servidor de FTP con entorno gráfico como:
>
> [http://filezilla-project.org/](http://filezilla-project.org/)

> **✍️ Activitat Pràctica 3.23 — 03 - Extra: Planificación de Copias de Seguridad**
> Utiliza el ntbackup de Windows para programar una copia de seguridad de la carpeta "Mis Documentos" explicando y mostrando en imágenes los pasos realizados y justificando las opciones escogidas para realizarla.

> **✍️ Activitat Pràctica 3.24 — 03 - Examen III Práctico**
> Examen Práctico UD3
