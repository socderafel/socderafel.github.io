---
layout: default
title: "UD9 — Fase de análisis · Temari Complet"
course_root: ".."
badge: "CE Ciberseguretat (CETI) · UD9 — Fase de análisis"
prev_url: "../ut08/ut0801.html"
prev_label: "⬅️ 8.1 Creación de contratos"
next_url: "../ut09/ut0901.html"
next_label: "9.1 analisi ➡️"
---

# 📘 UD9 — Fase de análisis (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**9.1 analisi**](./ut0901.md)
- [**9.2 Nessus**](./ut0902.md)

---

# 9.1 analisi

Hacking Ético 23AI32CF016 Raúl Fuentes Ferrer

ÍNDICE Auditoría de Seguridad: Vulnerabilidades y Exploiting

- Footprint
- Fingerprint
- Análisis y explotación de vulnerabilidades
- Informe

HACKING ÉTICO Disclaimer: La información contenida en esta presentación sólo es para fines educativos por lo cual no me hago responsable por el uso indebido de ella.

Análisis de vulnerabilidades En la Fase de Fingerprint se ha visto como averiguar información sobre los objetivos, como el sistema operativo, aplicaciones utilizadas y sus versiones, etc. Ahora llega el momento de buscar si todos ellos padecen alguna vulnerabilidad.

Para aprovecharnos de las vulnerabilidades recurriremos posteriormente a los exploits. AUDITORÍA DE SEGURIDAD

Exploit Citando a la Wikipedia: “Un exploit puede definirse como un fragmento de software, fragmento de datos o secuencia de comandos y/o acciones, utilizada con el fin de aprovechar una vulnerabilidad de seguridad de un sistema de información para conseguir un comportamiento no deseado del mismo.” AUDITORÍA DE SEGURIDAD

Escáneres de vulnerabilidades a nivel de sistemas Análisis de servicios y vulnerabilidades AUDITORÍA DE SEGURIDAD Nessus https://www.tenable.com/products/nessus-vulnerability-scanner https://es-la.tenable.com/tenable-for-education/nessus-essentials MBSA – Microsoft Baseline Security Analyzer https://www.microsoft.com/en-us/download/details.aspx?id=55319 CLARA - Herramienta para analizar las características de seguridad técnicas https://www.ccn-cert.cni.es/soluciones-seguridad/clara.html SUMo (Software Update Monitor) http://www.kcsoftwares.com/?sumo

Escáneres de vulnerabilidades web Es posible que durante la auditoría interna localicemos algún servidor web En casos como este, aunque nuestro objetivo no sea auditar el sitio web del organismo, puede ser interesante explotar una vulnerabilidad de una intranet, de un panel de control o incluso de un repositorio web, para hacernos con el control de una máquina de la red y seguir escalando privilegios

Vega Acunetix Wikto/Nikto OpenVAS OWASP Zed Attack Proxy (ZAP) W3af AUDITORÍA DE SEGURIDAD

Herramientas más utilizadas en Auditoría de Seguridad Web Plataformas de entrenamiento Web Security Dojo: Se trata de una plataforma de entrenamiento con un conjunto bastante completo de aplicaciones con distintos niveles de vulnerabilidades, además de contar con herramientas para intentar encontrar y aprovechar dichas vulnerabilidades. Su contenido es enteramente destinado al pentesting de aplicaciones web.

Las aplicaciones web vulnerables que se incluyen en esta plataforma son: Damn Vulnerable Web App Gruyere Hacme Casino Insecure Web App W3AF Tests Application OWASP Webgoat AUDITORÍA DE SEGURIDAD http://www.vulnweb.com/ https://securitytrails.com/blog/vulnerable-websites-for-penetration-testing

Herramientas más utilizadas en Auditoría de Seguridad Web Estudio sobre detección de vulnerabilidades contra Badstore. Aplicación Vulnerabilidades identificadas Vulnerabilidades de Inyección SQL Acunetix AppScan W3af Vega Websecurity Scanner Wikto Webcruiser AUDITORÍA DE SEGURIDAD https://www.vulnhub.com/

ÍNDICE Auditoría de Seguridad: Vulnerabilidades y Exploiting

- Footprint
- Fingerprint
- Análisis y explotación de vulnerabilidades
- Informe

HACKING ÉTICO Disclaimer: La información contenida en esta presentación sólo es para fines educativos por lo cual no me hago responsable por el uso indebido de ella.

Generación de Informes Durante la auditoría (en todas sus fases) es interesante utilizar una herramienta como Dradis Framework, para recopilar en un único lugar toda la información recuperada durante el proceso. Una vez finalizada la auditoría queda pendiente la labor más importante, el informe.

Un buen informe es aquel que muestra al cliente de manera clara y concisa los hallazgos localizados. Se realizarán dos tipos de informes: Ejecutivo y Técnico AUDITORÍA DE SEGURIDAD https://dradisframework.com/ce/

El Informe Ejecutivo El informe ejecutivo será leído por Directivos principalmente. Es decir, personal sin grandes conocimientos técnicos, cuyo interés será ver de una manera visual y rápida el estado de la seguridad de su organización. Este informe se centrará en mostrar mediante gráficas de barra y de queso, las vulnerabilidades localizadas durante la auditoría AUDITORÍA DE SEGURIDAD https://github.com/juliocesarfort/public-pentesting-reports https://www.offensive-security.com/reports/sample-penetration-testing-report.pdf

El Informe Técnico El informe Técnico va dirigido a Jefes de Proyectos, Analistas y demás personal técnico cuya responsabilidad será solventar las vulnerabilidades localizadas durante la auditoría. Por ello, este informe debe detallar las vulnerabilidades encontradas.

Además, deberá contener recomendaciones para solventar las vulnerabilidades localizadas. AUDITORÍA DE SEGURIDAD http://cybersecology.com/sampleReports/ScanReport_0142_hackazon.pdf

Ejemplo de informe 1. Control de cambios 2. Índice del informe 3. Aspectos clave a) Nombre cliente b) Objetivos de la auditoría c) Tipo de auditoría d) Alcance de la auditoría (rango de IPs, etc.) e) Direcciones IP desde las que se realizará la auditoría f) Credenciales utilizadas (Caja blanca/gris) 4.

Introducción 5. Pruebas realizada

### 6. Resumen ejecutivo de las vulnerabilidades localizadas

a) Solamente indicar con gráficas el estado a nivel global b) % de pruebas que han resultado fallidas c) % de vulnerabilidades identificadas por categoría d) Tabla con listado de vulnerabilidades graves y pequeño texto explicando las consecuencias que pueden acarrear

### 7. Informe técnico

a) Metodología utilizada b) Tabla con el listado de pruebas realizadas, marcando si han sido fallidas c) Apartados más completos explicando cada prueba, su éxito, la vulnerabilidad localizada, consejos para solventarla y evidencias. AUDITORÍA DE SEGURIDAD

---

# 9.2 Nessus

Tema 6.1. Auditoria de seguretat: Anàlisi de vulnerabilitats mitjançant Nessus. Hacking ètic (HE) 1r CIBER

Hacking ètic 1r CIBER La informació continguda en aquesta presentació només és per a fins educatius. EL PROFESSORAT DEL CURS D'ESPECIALITZACIÓ EN CIBERSEGURETAT EN ENTORNS DE LES TECNOLOGIES DE LA INFORMACIÓ I EL CENTRE EDUCATIU NO ES FAN RESPONSABLES DE L'ÚS INDEGUT D'AQUESTA INFORMACIÓ.

ÍNDEX Hacking ètic 1r CIBER ➤ AUDITORIA DE SEGURETAT. ○ INTRODUCCIÓ. ○ FASES DEL PROCÉS. ➤ NESSUS. ○ INTRODUCCIÓ. ○ DEFINICIÓ. ○ LLICÈNCIES. ○ DESCÀRREGA I INSTAL·LACIÓ. ○ FUNCIONAMENT. ■ INICIAR UN ESCANEIG. ■ PLANTILLES D’ESCANEIG. ■ POLÍTICA D’ESCANEIG: SETTINGS, CREDENTIALS I PLUGINS.

○ UTILITZACIÓ. ■ ESCANEIG DE XARXA BÀSIC. ■ DESCOBRIR HOSTS. ■ ESCANEIG DE MALWARE. ○ API DISABLED. ○ INFORMACIÓ ADDICIONAL.

● Una auditoria es una revisió pràctica que es realitza sobre els recursos informàtics que disposa una entitat amb la finalitat d'emetre un informe o dictamen sobre la situació en què es desenvolupen i s'utilitzen. ● Un procés d'auditoria recorre certes pràctiques enfocades a les diferents proves que s'hauran de realitzar per satisfer la demanda de client, utilitzant el Hacking Ètic en algunes de les fases d’aquest procés.

Hacking ètic 1r CIBER AUDITORIA DE SEGURETAT INTRODUCCIÓ

### 1. Footprint: Recollida d'informació pública o “information gathering” (menys

important en un procés d'auditoria interna).

- Fingerprint: Anàlisi de serveis localitzats en la fase de Footprint.

### 3. Anàlisi de Vulnerabilitats sobre els serveis operatius que s’han analitzat en la

fase de Fingerprint.

- Explotació de Vulnerabilitats localitzades en la fase d'Anàlisi de Vulnerabilitats.

### 5. Generació d'informes amb les vulnerabilitats localitzades i les possibles

solucions. Hacking ètic 1r CIBER AUDITORIA DE SEGURETAT FASES DEL PROCÉS

Hacking ètic 1r CIBER NESSUS INTRODUCCIÓ ● Un administrador de xarxes ha de ser conscient dels perills als que s'exposen constantment les xarxes mantingudes. ● Per això, cal analitzar constantment el trànsit de la xarxa, amb la finalitat d’identificar vulnerabilitats que puguen existir dins de l'organització.

● És necessari comptar amb polítiques de seguretat, que ajuden a millorar la seguretat en qualsevol ambient.

Hacking ètic 1r CIBER NESSUS INTRODUCCIÓ ● Fiquem-nos en la situació de que un grup de hackers, una empresa d’auditories de seguretat o un investigador descobreix una bretxa de seguretat. ● El descobriment pot ser accidental o degut a una investigació prèvia, és a dir, la combinació de footprinting + fingerprinting.

● Nessus és una ferramenta dissenyada per ajudar a identificar i resoldre aquests problemes coneguts, abans que un cracker aprofite i explote la vulnerabilitat.

Hacking ètic 1r CIBER NESSUS DEFINICIÓ ● Nessus és un escàner de vulnerabilitats que permet ser gestionat des d’un portal web, que realitza escanejos a diversos sistemes operatius i genera una alerta si descobreix qualsevol tipus de vulnerabilitat.

● Nessus consisteix en un dimoni, “nessusd”, que realitza l'escaneig al sistema objectiu, i “nessus”, el client (basat en consola o gràfic) que mostra l'avanç i informa sobre l'estat dels escanejats. ● Està desenvolupada i mantinguda per Tenable.

Hacking ètic 1r CIBER NESSUS DEFINICIÓ ● En operació normal, Nessus comença escanejant els ports amb Nmap, o amb el seu propi escanejador de ports, per buscar ports oberts i després intentar diversos exploits per atacar-ho. ● Té un motor per escanejar els objectius que es basa en plugins, xicotets programes escrits en un llenguatge de scripting anomenat Nessus Attack Scripting Language (NASL) que indiquen al motor que és el que ha d'avaluar en l'objectiu, per tal de determinar les falles.

● Actualment, Nessus té Més de 67 mil CVE, més de 166.000 Plugins i més de 100 nous plugins s’introdueixen setmanalment.

Hacking ètic 1r CIBER NESSUS DEFINICIÓ ● Els resultats de l'escaneig poden ser exportats com a informes en diversos formats, com ara text pla, XML o HTML. ● Els resultats també poden ser guardats en una base de coneixement per a referència en futurs escanejats de vulnerabilitats.

● Algunes de les proves de vulnerabilitats de Nessus poden causar que els serveis o sistemes operatius es corrompen i caiguen. ● L'usuari pot evitar-ho desactivant l’opció “unsafe test” abans d'escanejar.

Hacking ètic 1r CIBER NESSUS LLICÈNCIES ● La ferramenta Nessus té 3 tipus diferents de llicències: ○ Nessus Essentials: Una versió que pot realitzar escanejats fins a 16 adreces IP, pensada per a educadors i estudiants de ciberseguretat.

○ Nessus Professional: Una versió comercial que permet realitzar escanejats a host il·limitats, enfocada a consultors i professionals de seguretat. ○ Tenable.io: Aquesta versió està més enfocada a la gestió de vulnerabilitats a organitzacions empresarials, xicotetes i mitjanes.

Hacking ètic 1r CIBER NESSUS DESCÀRREGA I INSTAL·LACIÓ ● Per descarregar la ferramenta Nessus, heu d’entrar a l’enllaç següent: Descarrega Nessus Essentials | Tenable® ● Heu d’introduir el vostre nom, cognom i correu electrònic. ● Després, heu de descarregar la següent versió (o superior)

● Recordeu verificar el correu, ja que ahí vos enviarà el codi d'activació requerit per poder activar el producte.

Hacking ètic 1r CIBER NESSUS DESCÀRREGA I INSTAL·LACIÓ ● Una vegada completada la descàrrega, heu d’executar les següents instruccions al vostre terminal de Kali Linux: ● Quan es complete la instal·lació, vos apareixerà la següent informació

Hacking ètic 1r CIBER NESSUS DESCÀRREGA I INSTAL·LACIÓ ● La primera vegada que s’executa la ferramenta Nessus, s’ha de seguir una sèrie de passos per poder configurar-la correctament

- Accedir a l’enllaç https://kali:8834/, utilitzant el navegador Mozilla Firefox.
- Seleccionar el producte Nessus Essentials.
- Introduir el codi d’activació que tindreu en el vostre correu electrònic.
- Crear-vos el vostre propi compte.
- Deixar que es descarreguen els plugins (tingueu paciència).

Hacking ètic 1r CIBER NESSUS DESCÀRREGA I INSTAL·LACIÓ ● Quan es completen tots els passos, ens apareixerà automàticament la finestra següent, que és la interfície gràfica de Nessus

Hacking ètic 1r CIBER NESSUS DESCÀRREGA I INSTAL·LACIÓ ● Una vegada s’ha instal·lat Nessus, per a executar aquesta ferramenta, hem de seguir 2 passos

### 1. Des de terminal, escriure la instrucció següent i introduir la contrasenya

/bin/systemctl start nessusd.service

- Accedir a l’enllaç https://kali:8834/.

NESSUS FUNCIONAMENT: INICIAR UN ESCANEIG ● A la barra del menú esquerre superior, fem click sobre l’apartat “My Scans”. ● Cal seleccionar i fer click sobre el botó “Create a new scan”, amb l'objectiu d'afegir un nou escaneig amb Nessus.

Hacking ètic 1r CIBER NESSUS FUNCIONAMENT: PLANTILLES D’ESCANEIG ● A continuació, es presenten una sèrie de plantilles, gratuïtes i de pagament. ● Cada plantilla té una finalitat i executa una sèrie d’instruccions diferents.

NESSUS FUNCIONAMENT: POLÍTICA D’ESCANEIG ● Es pot inclús programar l'escaneig en una data concreta, però potser el més important és la política d'escaneig (opció “Policies”). ● En cas que l'auditor vullga configurar la seva pròpia política d'escaneig i no utilitzar una de les que venen predefinides, pot fer click a “Policies”.

● En accedir a aquesta vista, l'auditor trobarà les polítiques creades al sistema. ● A la part dreta de la pàgina hi ha el botó “New Policy”, el qual haurà de ser activat si es vol afegir una nova política d'escaneig. ● Cal recordar que allò que es busca amb la creació d'una nova política és poder triar el tipus de proves o plugins es vol utilitzar a l’escaneig.

Hacking ètic 1r CIBER

NESSUS FUNCIONAMENT: POLÍTICA D’ESCANEIG ● La primera vegada que entrem a aquest apartat, no visualitzarem cap política, perquè encara no hi ha cap definida. ● Per a crear una política, s’ha de fer click a “New Policy” o “Create a new policy”. Hacking ètic 1r CIBER

NESSUS FUNCIONAMENT: POLÍTICA D’ESCANEIG ● Una vegada iniciem una nova política i un tipus d’escaneig, ens apareixerà un formulari per a introduir diferents configuracions. ● El formulari per crear una política nova presenta 3 elements importants: ○ Settings. ○ Credentials.

○ Plugins. Hacking ètic 1r CIBER

NESSUS FUNCIONAMENT: POLÍTICA D’ESCANEIG ⇨SETTINGS ● A Settings, es troben diferents opcions generals de configuració de la política. ● Podem trobar opcions relatives als mètodes per a realitzar ping a la màquina remota, configurar la precisió, utilitzar força bruta, escanejar aplicacions web, escanejar malware, opcions per al report final, etc.

Hacking ètic 1r CIBER

NESSUS FUNCIONAMENT: POLÍTICA D’ESCANEIG ⇨CREDENTIALS ● A Credentials, s'indica la possibilitat d'utilitzar les credencials conegudes en el procés d'escaneig. La seua aplicació ideal es una auditoria de caixa blanca, on l'auditor en una podria tenir accés a un servei o un sistema i comprovar-ne la configuració o polítiques aplicades.

Hacking ètic 1r CIBER

NESSUS FUNCIONAMENT: POLÍTICA D’ESCANEIG ⇨PLUGINS ● A la pestanya de Plugins es poden seleccionar quins, concretament, es volen tenir disponibles a la política. ● D'aquesta manera, quan l'auditor cree un nou escaneig i seleccione la nova política d'escaneig, els connectors seleccionats ací seran els llançats en el procés.

● El més adequat seria disposar de polítiques d'escaneig diferents, en funció de l'àmbit del treball que s'està realitzant. Hacking ètic 1r CIBER

NESSUS FUNCIONAMENT: POLÍTICA D’ESCANEIG ⇨PLUGINS Hacking ètic 1r CIBER

NESSUS FUNCIONAMENT: POLÍTICA D’ESCANEIG ● Una vegada s’ha configurat la política d’escaneig, s’emmagatzemarà en la pestanya de Policies, on podrem importar-la, eliminar-la, copiar-la… ● Per poder executar la política creada, hem de crear un nou escaneig i anar a la pestanya de User Defined, dins de les plantilles d’escaneig. Allí el trobarem.

Hacking ètic 1r CIBER

Hacking ètic 1r CIBER NESSUS UTILITZACIÓ ● Ara, es van a indicar alguns exemples d'utilització de la ferramenta Nessus: ○ Escaneig de xarxa bàsic. ○ Descobrir hosts. ○ Escaneig de malware.

NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● Hem de fer click sobre el botó “Create a new scan”, amb l'objectiu d'iniciar l’escaneig. Si ja tenim alguns escanejos realitzats, fem click al botó “New Scan”.

Hacking ètic 1r CIBER NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● De les diferents plantilles predefinides que existeixen a Nessus, anem a seleccionar la plantilla d’escaneig de xarxa bàsic

Hacking ètic 1r CIBER NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● Anem a realitzar un escaneig bàsic a l’objectiu amb IP 172.20.10.7

Hacking ètic 1r CIBER NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● Després de configurar l’escaneig, ens apareixerà en l’apartat “My Scans”: ● Si fem click al botó de Play, començarà l’escaneig sobre l’objectiu especificat. ● El podem pausar o parar als botons remarcats en roig

Hacking ètic 1r CIBER NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● Deixem que Nessus execute el seu escaneig de xarxa bàsic. Una vegada ha finalitzat, ens torna el següent anàlisi sobre l’objectiu

NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● A més, també ens indica informació sobre les vulnerabilitats trobades

NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● Si fem click sobre una vulnerabilitat, ens mostra informació més detallada

NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● Una volta realitzat l’escaneig, podem generar un report en HTML, PDF o CSV.

NESSUS UTILITZACIÓ: ESCANEIG DE XARXA BÀSIC ● Per exemple, podem generar un informe de les vulnerabilitats del host en HTML

NESSUS UTILITZACIÓ: DESCOBRIR HOSTS ● Amb la utilitat de descobrir hosts, podem veure què hosts i ports obert podem localitzar a la nostra xarxa: Hacking ètic 1r CIBER

NESSUS UTILITZACIÓ: DESCOBRIR HOSTS ● Es va a completar un escaneig de ports a l’objectiu amb la IP 172.20.10.7: ● També podem utilitzar un rang d’IPs o un domini com a objectius. Hacking ètic 1r CIBER

NESSUS UTILITZACIÓ: DESCOBRIR HOSTS ● Una vegada completat l’anàlisi, ens mostra un llistat dels ports oberts que ha trobat a la màquina objectiu: Hacking ètic 1r CIBER

NESSUS UTILITZACIÓ: DESCOBRIR HOSTS ● També es poden veure les vulnerabilitats trobades que estan relacionades amb aquesta utilitat. Hacking ètic 1r CIBER

NESSUS UTILITZACIÓ: ESCANEIG DE MALWARE ● Amb la utilitat d’escaneig de malware, es pot realitzar un anàlisi, per tal de trobar malware que haja pogut infectar a la màquina: Hacking ètic 1r CIBER

NESSUS UTILITZACIÓ: ESCANEIG DE MALWARE Hacking ètic 1r CIBER ● Anem a realitzar un escaneig de malware a l’objectiu amb IP 172.20.10.7

NESSUS UTILITZACIÓ: ESCANEIG DE MALWARE Hacking ètic 1r CIBER ● En aquest tipus d’escaneig, s’han de configurar també les credencials. ● Anem a realitzar un escaneig de la màquina de Windows 10 amb IP 172.20.10.7, per tant, es selecciona l’apartat Windows i s’introdueixen obligatòriament les dades d’usuari i contrasenya

NESSUS UTILITZACIÓ: ESCANEIG DE MALWARE Hacking ètic 1r CIBER ● Ara ja es pot dur a terme l’anàlisi, que ens mostra 3 vulnerabilitats informatives. ● Aparentment, no s’ha detectat malware a la màquina objectiu.

NESSUS API DISABLED Hacking ètic 1r CIBER ● La finestra emergent de la captura següent, només pretén alertar els clients que algunes funcionalitats de l'API de Nessus han quedat obsoletes. ● Els usuaris haurien de poder navegar més enllà de l'alerta sense problemes.

● Si l'alerta restringeix l'accés de l'usuari a la interfície d'usuari de Nessus, heu d’eliminar la memòria catxé del navegador i tancar el propi navegador. ● Una vegada es torna a obrir el navegador, s’ha resolt el problema.

NESSUS INFORMACIÓ ADDICIONAL Hacking ètic 1r CIBER ● Si necessiteu més informació relacionada amb els procediments d’anàlisi de vulnerabilitats utilitzats a Nessus i la seua utilitat, així com exemples, podeu visitar l’apartat de “Community”, de la pàgina web oficial de Tenable, amb l’enllaç que vos indique a continuació

Welcome to the Tenable Community

---
