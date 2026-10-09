---
layout: default
title: "UT9 — Arquitectura web. — Desplegament d'Aplicacions Web | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT9 Completa"
prev_url: "../ut08/ut08actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT8"
next_url: "../ut09/ut0901.html"
next_label: "9.1 UT 3.4 Arquitectures web ➡️"
---

# 📘 UT9 — Arquitectura web. (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**9.1 UT 3.4 Arquitectures web**](#ut0901) (o [obrir en pàgina individual ➡️](./ut0901.md) )
> - [**9.2 UT 3.3 Arquitectures web**](#ut0902) (o [obrir en pàgina individual ➡️](./ut0902.md) )
> - [**9.3 UT 3.2 Arquitectures web**](#ut0903) (o [obrir en pàgina individual ➡️](./ut0903.md) )
> - [**9.4 UT 3.1 Arquitectures web**](#ut0904) (o [obrir en pàgina individual ➡️](./ut0904.md) )
> - [**✍️ Activitats pràctiques UT9**](#ut09actividades) (o [obrir en pàgina individual ➡️](./ut09actividades.md) )

---

## 9.1 UT 3.4 Arquitectures web

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 8/1/24 al 19/1/24

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 4/11/23 al 17/11/23

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 23/10/23 al 3/11/23

---

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 3.4 Implantació d’arquitectures

web. Creació d’Aplicacions Web Java amb l’IDE Eclipse. Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- Integració de l’Eclipse amb Tomcat......................................................................................................3
- Creació d’un projecte Web....................................................................................................................6
- Creació de l’arxiu.war.........................................................................................................................10

2 / 10

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

A continuació, s'indica com integrar Eclipse amb Tomcat, de manera que puguem provar els nostres desenvolupaments directament. Requisit previs, cal tindre instal·lat

- Última versió de l’IDE Eclipse.
- Última versió del JRE (Java Runtime Environment).
- Última versió del JDK (Java Development Kit).

### 2. INTEGRACIÓ DE L’ECLIPSE AMB TOMCAT

Iniciar Eclipsi i en cas que no estiga configurada la perspectiva Java EE, podem seleccionar-la mitjançant l'opció de menú Window → Perspective → Open Perspective → Other i triant Java EE. 3 / 10

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Si a la part de baix no apareix la pestanya Servers, triar l'opció de menú Window → Show View → Servers. A la part inferior de la pantalla veurem una vista en la qual configurarem el servidor.

Prémer «Click this link to create new server». Seleccionar la versió del servidor que tenim intal·lat. Si no en tenim cap seleccionem l’última versió i instal·lem la versió que ens propon l’Eclipse. (en aquest cas la 10.0.23). 4 / 10

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Confirmem i automàticament, esta elecció apareixerà reflectida a la pestanya Servers. Amb «click dret» podrem arrencar o aturar el servidor (entre d’altres opcions). 5 / 10

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 3. CREACIÓ D’UN PROJECTE WEB

Creem un projecte web dinàmic mitjançant l'opció del menú File indicada a continuació. A la finestra que apareix, introduïm el nom del projecte (ProyectoAppWeb1), seleccionen la ubicació per a guardar el projecte el «Target runtime» i mantenim la resta d'opcions amb els valors per defecte.

A la pestanya «Projecto explorar, apareixerà el nostre projecte. 6 / 10

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Seguidament, crearem un fitxer index.HTML en el nostre projecte. A la pestanya Project Explorer, fem «click dret» sobre la carpeta webapp i seleccionem les opcions indicades a la imatge següent.

Indiquem el nom del fitxer (index.HTML). Tot seguit es crea l’esquelet de fitxer HTML, en el qual inserim un text en el cos del missatge, per exemple «Página web de ZZZ». 7 / 10

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Per a executar l'aplicació sobre el servidor Tomcat, seleccionem el projecte a la finestra de Project Explorer, fem click dret i seleccionem Run on server. Seleccionem el servidor sobre el qual volen executar l’aplicació

8 / 10

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Li donem a next i passem el nou contingut (si cal). En cas que el servidor haja sigut arrancat prèviament, l'aplicació no funcionarà fins que detinguem el servidor (això també és vàlid si fem qualsevol modificació al projecte).

Si l’Eclipse no atura i arrenca de nou el servidor, a la part inferior de la pantalla principal, fem «click dret» sobre el nom del servidor, i al menú contextual seleccionem l’opció de detindre el servidor i l’arranquem de nou. Ara, des de qualsevol navegador podem veure l'execució de l'aplicació web. Si no apareix automàticament el lloc web que hem creat, hem d’introduir a la barra de navegació http://localhost:8080/ProyectoAppWeb1/, en la qual ProyectoAppWeb1 és en nom de la nostra aplicació.

9 / 10

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 4. CREACIÓ DE L’ARXIU.WAR

A continuació crearem un arxiu xxx.war que podrem utilitzar per a desplegar l'aplicació en el servidor Tomcat. En Project Explorer seleccionem el projecte i «click dret» i seleccionem l'opció WAR file. Posteriorment, indiquem el nom de l'arxiu .war, així com la ubicació en la qual volem que es guarde. Aquest arxiu es pot utilitzar per a desplegar l'aplicació en el servidor Tomcat, a través del seu panell d'administració (també podem copiar l’arxiu a la carpeta CATALINA_HOME\webapps).

10 / 10

---

## 9.2 UT 3.3 Arquitectures web

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 3.3 Implantació d’ arquitectures

web. Securització del Tomcat. Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- Seguretat i autenticació.........................................................................................................................3

2.1. Seguretat........................................................................................................................................3 2.2. Autenticació...................................................................................................................................3 2.3. Configuració SSL sobre Tomcat....................................................................................................4 2.3.1. Creació del magatzem de claus..............................................................................................4 2.3.2. Habilitar l’SSL sobre Tomcat................................................................................................5 2 / 5

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

Una vegada que s'ha desplegat una aplicació web, no es pot oblidar protegir-la i també protegir el servidor d'aplicacions d'accessos malintencionats. D'altra banda, també caldrà assegurar-se que persones alienes a l'aplicació no puguen interceptar informació valuosa.

### 2. SEGURETAT I AUTENTICACIÓ

Davant les anteriors amenaces caldrà implementar un sistema de seguretat basat en tres conceptes clau

- Autenticació: procés per a identificar qui entra a l'aplicació és qui diu ser puga

accedir als recursos.

- Confidencialitat: solament els extrems de la comunicació coneixen la informació

que s'intercanvia.

- Integritat: la informació que es transmet d'extrem a extrem no és modificada per

agents externs. 2.1. Seguretat. Per a assegurar la seguretat, el servidor d'aplicacions ha de controlar les comunicacions entre els diferents elements que intercanvien informació al llarg del flux de l'aplicació. En els servidors d'aplicacions web Java, el descriptor d'implementació, web.xml, assegura eixa funció.

D'altra banda, també es pot controlar la seguretat mitjançant la programació de servlet i fitxers jsp. 2.2. Autenticació. En relació amb l'autenticació, es disposa de diferents mòduls que es poden implementar en una aplicació web.

- Autenticació bàsic: es basa a sol·licitar dades a l'usuari (nom i contrasenya).

Aquesta informació no va codificada, per la qual cosa és perillós usar aquest tipus d'autenticació.

- Autenticació digest: és una variant de bàsic. El password es transmet encriptat.
- Autenticació basada en formularis: es basa en sol·licitar dades a l'usuari

mitjançant un formulari. Igual que l'autenticació bàsic, la seguretat és feble i es pot interceptar fàcilment. 3 / 5

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- Certificats digitals i SSL: És l'ideal. Usa el protocol HTTPS i permet la

confidencialitat i la integritat de la informació i l'autenticació. aquest mètode és el que implementarem a continuació. 2.3. Configuració SSL sobre Tomcat. 2.3.1. Creació del magatzem de claus. Per a usar transaccions SSL és necessari crear un magatzem de claus. Per a això, usarem el programa de generació de claus de Java «keytool» (inclòs normalment en el JDK).

Ens situem en el directori opt/tomcat/conf i executem el següent comando. keytool -genkey keysize 2048 -keyalg RSA -alias tomcat -keystore tomcat.jks Introduïm la informació que ens demana per a crear el magatzem de claus. Nota

- L'opció àlies permet identificar el fitxer (en aquest cas amb el nom tomcat).
- L'algorisme d'encriptat és RSA.
- El magatzem de claus és tomcat.jks.
- La clau està codificada sota 2048 bits.
- Si cal podem afegir un període de validesa de la keystore amb el paràmetre

validity 365 on 365 són els dies de validesa.

Verifiquem que la keystore (tomcat.jks) s’ha creat correctament. 4 / 5

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.3.2. Habilitar l’SSL sobre Tomcat. Ens situem en el directori opt/tomcat/apache/conf i editem l’arxiu server.xml per a habilitar l’SSL. Busquem el connector de l’SSL i llevem els comentaris per a habilitar l’SSL.

Per a establir el connector que permet l'ús d'HTTPS, afegim el següent codi (on en els atributs keystoreFile i keystorePass indiquen els valors que es corresponen amb el fitxer .jks: Parem el servidor i l’arranquem de nou per a aplicar els canvis. Com és habitual al connectar-nos per primera vegada al servidor, sortirà un messatge d'advertència ja que, el certificat proporcionat pel servidor no està autentificat per cap entitat certificadora.

Acceptem les advertències i continuem. Després ja podrem accedir al nostre lloc web amb connexió segura.

5 / 5

---

## 9.3 UT 3.2 Arquitectures web

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web UT 3.2 Arquitectura web. Desplegament d’una aplicació web sobre Tomcat. Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Estructura i recursos que componen una aplicació web........................................................................3

1.1. Arxius WAR...................................................................................................................................4 1.2. Generació d’arxius WAR...............................................................................................................5 1.3. Descriptor de desplegament..........................................................................................................5

- Desplegament d'aplicacions amb Tomcat.............................................................................................7

2.1. Arquitectura de Tomcat.................................................................................................................7 2.2. Sistema de directoris de Tomcat....................................................................................................8 2.3. Variables d’entorn........................................................................................................................11

- Desplegament d’un arxiu WAR sobre Tomcat....................................................................................13
- Desplegament d’una carpeta sobre Tomcat.........................................................................................14

2 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- ESTRUCTURA I RECURSOS QUE COMPONEN UNA APLICACIÓ WEB.

Una aplicació web està composta d'una sèrie de components com ara

- Servlets: mòduls escrits a Java utilitzats en un servidor per a potenciar les seues

capacitats de resposta i que s'executa sobre el protocol HTTP.

- Pàgines jsp: tecnologia de programació que permet crear pàgines web dinàmiques

usant HTML i XML.

- PHP: llenguatge de propòsit general usat en el backend.
- Perl: llenguatge de programació que generalment s'executa en el servidor.
- Ruby: llenguatge interpretat de propòsit general, dinàmic i flexible.
- ASP: llenguatge de scripting del costat del servidor creat per Microsoft.
- ASP.NET: llenguatge dissenyat per a treballar amb IIS i escrit per a suportar el .net

Framework.

- Python: llenguatge interpretat d'alt nivell.
- Fitxers HTML: llenguatge de marques per a mostrar informació sobre el navegador.

Un servlet és una aplicació java encarregada de realitzar un servei específic dins d'un servidor web. L'especificació Servlet 2.2 defineix l'estructura de directoris per als fitxers d'una aplicació web. El directori arrel hauria de tindre el nom de l'aplicació i defineix l'arrel de documents per a l'aplicació web. Tots els fitxers davall d'esta arrel poden servir-se al client excepte aquells fitxers que estan sota els directoris especials META-INF i WEB-INF en el directori arrel.

Tots els fitxers privats, igual que els fitxers class dels servlets, haurien d'emmagatzemar-se sota el directori WEB-INF. Durant l'etapa de desenvolupament d'una aplicació web s'empra l'estructura de directoris, a pesar que després en l'etapa de producció, tota l'estructura de l'aplicació s'empaqueta en un arxiu .war.

El codi necessari per a executar correctament una aplicació web es troba distribuït en una estructura de directoris, agrupant-se fitxers segons la seua funcionalitat. 3 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Un exemple de l'estructura de carpetes d'una aplicació web pot ser el següent: /index.jsp /WebContent/jsp/welcome.jsp /WebContent/css/estilo.css /WebContent/js/utils.js /WebContent/img/welcome.jpg /WEB-INF/web.xml /WEB-INF/struts-config.xml /WEB-INF/lib/struts.jar /WEB-INF/src/com/empresa/proyecto/action/welcomeAction.java /WEB-INF/classes/com/empresa/proyecto/action/welcomeAction.class Estructura per defecte en Tomcat 1.1. Arxius WAR.

El seu nom procedeix de Web Application Arxive (Arxiu d'Aplicació Web) i permeten empaquetar en una sola unitat aplicacions web de Java completes. Aporten com a avantatge, la simplificació del desplegament d'aplicacions web, pel fet que la seua instal·lació és senzilla i solament és necessari un fitxer per a cada servidor en un clúster, a més d'incrementar la seguretat ja que no permet l'accés entre aplicacions web diferents.

La seua estructura és la següent: En la carpeta arrel del projecte s'emmagatzemen elements emprats en els llocs web, tipus documents HTML, CSS i els elements JSP (*.HTML, *.jsp, *.css). /WEB-INF/: Ací es troben els elements de configuració de l'arxiu .WAR com poden ser

la pàgina d'inici, la ubicació dels servlets, paràmetres addicionals per a altres components. El més important d'estos és l'arxiu web.xml. /WEB-INF/classes/: Conté les classes Java emprades en l'arxiu .WAR i, normalment, en esta carpeta es troben els servlets. 4 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web /WEB-INF/lib/: Conté els arxius JAR utilitzats per l'aplicació i que normalment són les classes emprades per a connectar-se amb la base de dades o les empleades per llibreries de JSP. 1.2. Generació d’arxius WAR.

Per a generar arxius .WAR es poden emprar diverses eines des d'entorn IDE (NetBeans i Eclipsi, Jbuilder de Borland, Jdeveloper d’Oracle). Un altre mode de construir arxius war és mitjançant Ant. Es tracta d'una eina Open- Source que facilita la construcció d'aplicacions Java. No és considerat un IDE però per als quals coneixen l'entorn Linux, és considerat el «make» de Java.

1.3. Descriptor de desplegament. Un Descriptor de Desplegament és un document XML que descriu les característiques de desplegament d'una aplicació, un mòdul o un component. Per això, la informació del descriptor de desplegament és declarativa, i esta pot ser canviada sense la necessitat de modificar el codi font.

Qualsevol aplicació web ha d'aportar un descriptor de desplegament situat en /opt/tomcat/webapps/host-manager/WEB-INF/web.xml. En el cas concret de Tomcat el descriptor /opt/tomcat/conf/web.xml és un descriptor per defecte que s'executa sempre abans del descriptor de l'aplicació i, solament, hauria de contindre informació general i no específica de l'aplicació.

5 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Si obrim l’arxiu /opt/tomcat/conf/web.xml podem veure que entre les etiquetes <web- app> i /<web-app> estan els descriptors de desplegament de servlets entre les etiquetes <servlet>...</servlet>, els quals han de contindre les següents etiquetes en el següent ordre

Per a provar el servlet, una vegada arrancat el servidor Tomcat, obrim un navegador web, en el qual introduïm: http://addressaDelServidor:port/nomDelServlet 6 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 2. DESPLEGAMENT D'APLICACIONS AMB TOMCAT

2.1. Arquitectura de Tomcat. A continuació es mostra l'estructura del servidor d'aplicacions Tomcat per a comprendre el funcionament a grans trets de l'aplicació. L'arquitectura permet de manera lògica connectar els seus diferents components i que cadascun realitze una funció determinada.

Els components que posseeix el servidor Tomcat són els següents

- Server: representa tot el contenidor al complet i dins d'ell s'executen els altres

components. Tomcat proporciona una implementació predeterminada de la interfície del servidor, que generalment no requereix que els usuaris la implementen ells mateixos. El contenidor del servidor pot contindre un o més components de servei.

- Service: és un component intermedi que es troba dins del component server i uneix

un o més components del connector a un només motor engine. En el servidor, pot incloure un o més components de servei. Els usuaris rares vegades personalitzen el Servei. Tomcat proporciona una implementació predeterminada de la interfície del Servei, que és simple i pot satisfer les aplicacions.

- Engine: en Tomcat, cada Servei només pot contindre un Servlet Engine. És el servei

que permet processar les peticions que provenen des de l'exterior i respondre a tals sol·licituds. El motor representa la canalització de processament de sol·licituds per a un Servei en particular. Com a servei, pot haver-hi diversos connectors: el motor rep i processa totes les sol·licituds del connector, retorna la resposta al connector apropiat i la transmet a l'usuari a través del connector. Els usuaris poden proporcionar motors personalitzats mitjançant la implementació de la interfície del motor, però això generalment no és necessari.

7 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- Host: representa un host virtual, i un motor pot contindre múltiples hosts. Els usuaris

generalment no necessiten crear un *Host personalitzat, perquè la implementació de la interfície de Host proporcionada per Tomcat (classe StandardHost) proporciona una funcionalitat addicional important. És un nom de xarxa que pot posseir diversos host o àlies, com www.daw.com

- Connector: maneja la comunicació amb el client i és responsable de rebre la

sol·licitud del client i retornar el resultat de la resposta al client. En Tomcat, hi ha diversos connectors disponibles com AJP Connector o HTTP Connector.

- Context: representa una aplicació web que s'executa en un host virtual específic. Un

host pot contindre múltiples contextos (que representen una aplicació web), i cada context té una ruta única. Els usuaris generalment no necessiten crear contextos personalitzats, perquè la implementació de la interfície de context (classe StandardContext) donada per Tomcat proporciona una funcionalitat addicional important.

2.2. Sistema de directoris de Tomcat. Quan arranquem el servidor Tomcat per primera vegada, simplement arranca amb les aplicacions que venen incloses per defecte (mes les que nosaltres desitgem desplegar). Disposem d'un «manager» que permet un desplegament senzill de les aplicacions així com un esborrament o recàrrega d'elles. Veurem com configurar-ho.

No obstant, el primer que hem de fer és veure l'estructura de carpetes que Tomcat té (tot i ja haver-la vist durant instal·lació de l’aplicació).

- bin: La carpeta bin emmagatzema els fitxers binaris que permeten

arrancar o parar Tomcat com són els fitxers startup i shutdown. •

- Conf: És la carpeta en la qual disposem de tots els fitxers de

configuració. 8 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➢catalina.policy: la política de seguretat de Tomcat, relacionada amb Java, es realitza a partir d'este fitxer. ➢catalina.properties: fitxer en el qual es relacionen els fitxers .jar de Java per a la classe Catalina. Esta informació està relacionada amb els paquets de seguretat i les rutes de les classes carregades. A més conté configuracions relacionades amb la caixet.

➢context.xml: fitxer xml que conté la informació de context comú a totes les aplicacions web que s'executen en Tomcat. A més permet localitzar l'arxiu web.xml de cada aplicació. ➢jaspic-providers.xml: (Java Authentication Service Provider Interface for Containers). Permet definir un mòdul d'autenticació.

➢jaspic-providers.xsd: esquema xsd que defineix si és vàlid el fitxer anterior. ➢logging.properties: permet configurar les opcions de logging de totes les aplicacions i de l'activitat del servidor. Útil per a solucionar errors en cas de fallada del servidor o d'una aplicació.

➢server.xml: conté la definició estructural del servidor: Nom del host, serveis, connectors, etc. Els components del fitxer server.xml es reflecteixen en la següent taula: Etiqueta Explicació Exemple <server> </server> Defineix l'element de configuració bàsic del fitxer server.xml.

És únic i conté un o més serveis ("Service"). L'atribut "port" indica el port destinat a l'escolta del comando de tancament, indicat per "shutdown" o tancament. <Server port="8005" shutdown="SHUTDOWN"> <Listener/> (Únic) Permeten definir les classes JMX(className), (“Java Management Extensions”) que permetrà escoltar Tomcat.

<Listener className="org.apache.catalin a.mbeans.ServerLifecycleListe ner" /> <GlobalNamingResources> </GlobalNamingResources> Permet definir elements JNDI per a ser utilitzats globalment. L'etiqueta Resource especifica la localització. 9 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Etiqueta Explicació Exemple <Service> </Service> Estes etiquetes permeten agrupar un o més connectors de manera que compartisquen un únic contenidor d'aplicacions. Posseeixen un únic atribut, "name", que fixa els identificadors individuals. Si "name" es fixa com "Catalina" o "Tomcat-Standalone", s'habilitarà a Tomcat com a servidor web independent.

<Service name="Tomcat- Standalone"> </Service> <Connector /> (dins de "Service") Connecta un contenidor de dades amb l'exterior, definint l'element final a través del qual es realitzaran les peticions d'usuari i s'enviaran les respostes. Entre els seus paràmetres de configuració estan el port d'escolta, "port", la classe encarregada de la seua definició, "className" i el nombre màxim de connexions simultànies permeses, "acceptCount".

<Connector className="org.apache.coyot e.tomcat4.CoyoteConnector" port="8080" minProcessors="5" maxProcessors="75" enableLookups="true" acceptCount="100" connectionTimeout="20000" useURIValidationHack="false" disableUploadTimeout="true" /> <Engine> (dins de "Service") </Engine> Punt on es processen les peticions que arriben als "Connector" que posseïsquen en la capçalera el valor de "defaultHost" com a destí.

<Engine name="Standalone" defaultHost="localhost"> <Logger/> (dins de "Service" o de Host)

Permet establir el nom del fitxer de logs. Com a paràmetres té la classe encarregada de la seua definició, "className", el format nomene de l'arxiu, com la unió d'un prefix, "preffix", i un sufix, "suffix". <Logger className="org.apache.catalin a.logger .FileLogger" prefix="catalina_log." suffix=".txt" timestamp="true"/> <Host> </Host> Amb estes etiquetes podem definir un o més elements Host virtuals per a atendre les peticions.

<Host name="localhost" debug="0" appBase="webapps" unpackWARs="true" autoDeploy="true"> <Context> (dins de Host) </Context> S'utilitza per a indicar la ruta ("docBase") a partir de la qual es troben les aplicacions a ser executades en Tomcat (a partir de "%CATALINA_HOME%webapps" i el path url ("path") a partir del qual accedir als serveis.

10 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➢tomcat-users.xml: fitxer xml que conté els usuaris, contrasenyes i rols usats per a accedir al servidor Tomcat. ➢tomcat-users.xsd: esquema xsd que defineix si és vàlid el fitxer anterior.

➢web-xml: fitxer estàndard per a les aplicacions web, comuna a totes les aplicacions web, ja que posseeix la configuració global a totes elles.

- lib: La carpeta que emmagatzema llibreries a nivell de Tomcat i són

compartides per les aplicacions

- logs: La carpeta que emmagatzema els fitxers de log.
- temp: Directori per a emmagatzemar els fitxers temporals de Tomcat.
- webapps: La carpeta en la qual es despleguen les diferents aplicacions

web.

- work: Carpeta de JSP compilats

2.3. Variables d’entorn. Aquestes són les principals variables d'entorn que utilitza Tomcat

- CATALINA_HOME: indica el directori arrel de la instal·lació del servidor Tomcat.
- CATALINA_BASE: directori que representa la configuració d'una instància de

Tomcat. Normalment coincideix amb CATALINA_HOME. Solament es diferencia quan existisquen diverses instàncies en la mateixa màquina.

- CATALINA_TMPDIR: directori temporal de Tomcat on s'emmagatzemen fitxers de

compilació, intermedis, etc.

- JRE_HOME: indica la ruta on es troben els executables de Java usats per Tomcat.
- CLASSPATH: conjunt de rutes que usa Tomcat , especialment els fitxers .jar.

11 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- DESPLEGAMENT D’UN ARXIU WAR SOBRE TOMCAT.

El desplegament d’un arxiu war és força simple, simplement cal seleccionar l’arxiu (en aquest cas SamplWebApp.war) y després desplegar-lo.

Després del desplegament l’arxiu apareixerà en aplicacions. Al directori el desplegament es veurà de la següent manera. L’estructura de l’arxiu després del desplegament és com aquesta. 12 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Si introduïm la direcció del servidor Tomcat amb el nom de la sub carpeta podrem accedir als continguts de l’aplicació web.

- DESPLEGAMENT D’UNA CARPETA SOBRE TOMCAT.

En aquest cas copiar i apegar la carpeta dins del directori ../webapps. L’accés al contingut és farà de la mateixa manera que per al arxiu *.war. 13 / 13

---

## 9.4 UT 3.1 Arquitectures web

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web UT 3.1 Arquitectura web. Implantació i administració de servidors web. Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- Evolució de la tecnologia web..............................................................................................................4
- Protocol HTTPS....................................................................................................................................5
- Tecnologies usades en aplicacions web.................................................................................................6

4.1. Llenguatges del costat servidor:....................................................................................................6 4.2. Llenguatges del costat client:........................................................................................................7 4.3. Exemples de pàgines web i el llenguatges de programació emprat:.............................................7 4.4. Frameworks per a desenvolupament web......................................................................................8 4.5. Servidors web................................................................................................................................9

- Instal·lació d’apache Tomcat...............................................................................................................10

5.1. Instal·lació de Java......................................................................................................................10 5.2. Descarregar Tomcat.....................................................................................................................11 5.3. Canviem de directori a /tmp i comprovem si l'arxiu existeix......................................................11 5.4. Extraure l'arxiu dins del directori /opt/tomcat.............................................................................12 5.5. Llancem el servidor.....................................................................................................................12 5.6. Configurem el firewall de la màquina.........................................................................................12 5.7. Comprovació del funcionament del servidor...............................................................................13 5.8. Primeres proves...........................................................................................................................14 5.9. Permetre accés a pàgina d'exemples............................................................................................14 5.10. Configurar l'accés remot............................................................................................................15 5.11. Configurar l'usuari per a l'accés remot......................................................................................16 5.12. Comprovem que tenim accés remot (quasi) total al servidor web............................................17 2 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

L'arquitectura web és la que defineix com es jerarquitzarà la informació dins d'un lloc web. Per a definir una arquitectura web, existeixen diverses tecnologies (*frameworks). La seua elecció dependrà de la dimensió i el cost del projecte. Independentment del framework emprat, l'arquitectura generalment emprada en aplicacions a desplegar en un servidor d'aplicacions és el model MVC (Model-Vista- Controlador).

Este model ha sigut àmpliament adaptat com a arquitectura per a dissenyar i implementar aplicacions web, este patró, com el seu nom l'indica, utilitza tres components, model, vista, i controlador. El que fa este patró és separar les dades i la lògica de negoci de la presentació i el mòdul encarregat de gestionar els esdeveniments i les comunicacions.

- Model: este component representa la informació amb la qual el sistema opera, per

tant gestiona totes les dades, tant consultes com actualitzacions, implementant també les regles del negoci.

- Vista: en este component solament està les interfícies d'usuari, ja siga formularis o

arxius HTML. La vista s'encarrega de presentar la informació del model, és a dir, mostrar les dades que se sol·licita al model, en un format adequat, per a després mostrar-lo en pantalla, a este component se'l coneix com a eixida.

- Controlador: com el seu nom indica, s'encarrega de controlar (rebre les entrades),

usualment esdeveniments que codifiquen els moviments o pulsacions de les tecles o botons del *mouse, és a dir, controla les accions de l'usuari, per tant, rep les ordres de l'usuari i s'encarrega de sol·licitar informació al model i de comunicar-li'ls a la vista. D'altra banda, perquè una aplicació web funcione correctament necessita dels següents elements.

- Servidor web: Escolta les peticions HTTP des del navegador de l'usuari i realitza les

consultes a la base de dades per a respondre a les peticions.

- Base de dades: Conjunt de dades organitzades jeràrquicament.
- Client web: Mitjançant un navegador, realitza les peticions al servidor web.

3 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- EVOLUCIÓ DE LA TECNOLOGIA WEB.

Amb l'evolució tecnològica i l'accés lliure a Internet, un dels principals al·licients ha sigut la publicació de pàgines web. Als seus principis, el contingut de la web era estàtic i no existien protocols de seguretat per a les connexions. Els desenvolupadors van començar a investigar sobre la possibilitat d'ampliar esta primera pàgina web i incloure més funcionalitats.

Amb la Web 2.0 o web social, es va passar a la interacció total amb l'usuari. Alguns dels ítems importants van ser

- Fulles d'estil *CSS que donen vistositat a les webs.
- Ús de JSON.
- Desenvolupament a Ajax.
- Suport per als blogs.
- Començament de les xarxes socials.
- Control total dels usuaris en el maneig d'informació.

La Web 3.0 o data web, també anomenada web semàntica va suposar un avanç tecnològic cap a la intel·ligència artificial. Alguns dels grans avanços són els següents

- Control total dels usuaris en el maneig d'informació.
- Disseny reponsive.
- Web multimèdia.
- Aplicacions intel·ligents.
- Web semàntica + intel·ligència artificial.
- Impuls a la Web 3D.
- Participació més activa en la xarxa.
- CCS3.

4 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Finalment, després dels avanços de la tecnologia 3D, ja es pot realitzar animacions 3D en CCS3. HTML5 igualment, comença a incorporar importants avanços en este sentit.

- PROTOCOL HTTPS.

Perquè la connexió client servidor siga possible és necessari que el navegador web del client use el protocol de comunicació http i més particularment la seua versió segura https. https (protocol de transferència de hiper text segur) és un protocol de la capa d'aplicació que escolta pel port 443, segons en el model client-servidor en mode segur.

Basat en TCP, és orientat a connexió i encripta les dades per a assegurar una transmissió segura entre els dos extrems. Per a realitzar esta encriptació necessita de certificats vàlids. Qualsevol servidor web, posseeix l'acció d'emetre certificats. En este entorn, la part fonamental són els navegadors, ja que han de validar aquests certificats a partir d'entitats certificadores.

El protocol HTTPS usa l'encriptació SSL (Secure Socket Layer) que encripta dades

```html
sensibles (TLS). Un certificat SSL o TLS s'instal·la en el servidor;
```

A continuació s'explica com funciona el protocol HTTPS

- L'usuari tecleja una adreça web en el navegador https://www.miservidorweb.es/.
- La IP Es tradueix al domini DNS corresponent.
- Es busca en el servidor web la IP de la pàgina sol·licitada pel port TCP 443.
- Abans de transferir la informació al navegador del client, es negocia mitjançant TLS,

(enviament del certificat a la dent i acceptació del mateix). Una vegada acceptat, s'usarà un canal xifrat amb la informació.

- Es realitza la petició HTTP i s'envia la resposta a la dent.

5 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 4. TECNOLOGIES USADES EN APLICACIONS WEB

Actualment, la majoria de les pàgines web tenen contingut dinàmic. Normalment, quan existeix contingut dinàmic s'executa codi tant en el client com en el servidor.

#### 4.1. Llenguatges del costat servidor

Els llenguatges del costat servidor són aquells reconeguts, carregats i interpretats pel propi servidor i que s'envien al client en un format comprensible per a ell, de manera que puguen ser entesos directament pel navegador. Entre eixos llenguatges trobem

- Perl: És un llenguatge de programació interpretat. És molt dinàmic, ja que des

de Perl es pot cridar a altres programes escrits en altres llenguatges.

- Asp.net: desenvolupat per Microsoft, escriu en la pròpia web utilitzant el

llenguatge Visual Basic Script o Jscript.

- PHP. Llenguatge gratuït i independent de la plataforma utilitzada és ràpid i

disposa d'una llibreria de funcions enorme i amb molta documentació.

- JSP. És una tecnologia orientada a crear pàgines web amb programació en

Java.

- Java. Llenguatge de programació open source i multiplataforma. Gràcies a la

seua versatilitat, és adequat per a, pràcticament qualsevol projecte.

- JavaScript. És un llenguatge de scripts dinàmic i orientat a objectes que no

guarda relació amb Java (malgrat el seu nom).

- Python. Llenguatge de programació general d'alt nivell basat en un codi

compacte i una sintaxi fàcil d'entendre.

- Ruby. Llenguatge de programació d'alt nivell i orientat a objectes.
- C#. Específicament dissenyat per Microsoft per a .NET Framework.
- Node.js. És un entorn de temps d'execució de JavaScript. És open source i

multiplataforma. 6 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

#### 4.2. Llenguatges del costat client

Del costat client, trobem

- HTML. Llenguatge que es basa en etiquetes que li indiquen al navegador on

col·locar cada text, imatge, vídeo,…

- JavaScript.
- Java Miniaplicacions. És un programa que es pot incrustar en un document

HTML.

- VBScript. Desenvolupat per Microsoft este programa de *scripts només és

compatible amb els navegadors de la marca.

- CSS. Permet crear estils que generalitzen el comportament de la pàgina web.
- Dhtml. No és un llenguatge de programació a l'ús, sinó una capacitat dels

navegadors per a ampliar el control sobre la pàgina. dHtml es basa en capes. Els navegadors actuals visualitzen les webs per capes, amb el que es podrien mostrar i ocultar elements en la pàgina, modificar la seua posició, dimensions, color,… Per a realitzar estes accions continuem necessitant un llenguatge (JavaScript o VBScript).

- XML. És una tecnologia molt senzilla, que es complementa amb unes altres.

Consisteix a permetre compartir les dades a tots els nivells, per totes les aplicacions i en tots els suports.

#### 4.3. Exemples de pàgines web i el llenguatges de programació emprat

7 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.4. Frameworks per a desenvolupament web. L'ús de frameworks és una de les tècniques més usades per al desenvolupament web. Brinda una infinitat de facilitats al programador per a centrar-se en la lògica del funcionament d'un lloc web a més d'imposar el model MVC que permet la reutilització de codi, facilita el treball en equip i simplifica el manteniment de les aplicacions.

Frameworks més populars (2023)

- Laravel.
- Django.
- Flask.
- ExpressJS.
- Rails.
- Spring.
- NestJS.
- Meteor.
- Strapi.
- Koa.
- Beego.
- Symfony.
- Iris
- CodeIgniter.
- NET Core.

8 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.5. Servidors web. Els servidors web més populars són els següents (per ordre d'importància)

- Nginx. La seua principal funció és servir contingut web estàtic i dinàmic. El

disseny modular converteix a Nginx en una eina bàsica per a molts administradors de sistemes i desenvolupadors web.

- Apatxe és un dels servidors web de codi obert més populars. S'estima que un

40% dels llocs web del món usen Apatxe.

- Microsoft IIS. (Internet Information Services), desenvolupat per Microsoft per a

sistemes operatius Windows. El seu propòsit és allotjar llocs i aplicacions web usant tecnologies de Microsoft com ASP.NET, ASP i PHP.

- Google Web Server GWS és un servidor web dissenyat per Google com a

servidor de contingut web a través dels seus múltiples serveis integrats al cercador Google i Google Maps. GWS és un servidor privat que no està disponible públicament fora de l'entorn Google.

- LiteSpeed Web Server és una de les millors alternatives a servidors web com a

Apatxe i Nginx. pot suportar diferents llenguatges de programació i múltiples aplicacions web com PHP, Ruby i Python.

- Caddy és un servidor web Open Source. És ideal per a principiants en tindre

una gran capacitat per a simplificar la configuració del servidor web.

- Tomcat. És un servidor web Open Source amb un contenidor de servlets de

Java utilitzat per a allotjar i executar aplicacions web basades en tecnologia Java. És compatible amb Apatxe i Nginx i integrable en una multitud d'entorns de servidors web.

- Node.js és un programari Open Source basat en el JavaScript V8 de Google per

a la creació d'aplicacions de servidor en llenguatge JavaScript. És usat majorment per a crear aplicacions web d'alta velocitat i escalables.

- Cherokee servidor web de codi obert modular, escalable i personalitzable. Té

una gran facilitat d'ús, i a més és compatible amb una àmplia gamma de tecnologies web, sistemes operatius i plataformes.

- Lighttpd Té una gran capacitat per a adaptar-se a diferents llenguatges i

plataformes de programació com PHP, Ruby i Python. A més, és altament compatible amb Linux, Windows i MacOS X.

- Sun Java System Web Server. És un dels servidors web més utilitzats per a

l'allotjament i gestió de llocs i aplicacions web. Suporta molt bé una àmplia gamma de tecnologies web com JavaServer Pages (JSP), Servlets, PHP, Perl i altres llenguatges de programació. 9 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INSTAL·LACIÓ D’APACHE TOMCAT.

Per a la pràctica instal·larem el servidor Apatxe Tomcat (Tomcat) sobre un màquina amb SO Ubuntu Server 22.04.03 LTS. Tomcat és un servidor d'aplicacions open source implementant Java Servlet, Java Servlet Pages (JSP), Java Expression Language i Java webSocket Technologies. Els anteriors mòduls són desenvolupats per Java Community Process.

Apatxe-Tomcat és un contenidor de Servlets que es pot usar per a compilar i executar aplicacions realitzades a Java. Inclou el compilador Jasper, que compila JSPs convertint-les en servlets. El motor de servlets de Tomcat sovint es presenta en combinació amb el servidor web Apatxe.

Un contenidor de servlets funciona del següent mode

- El navegador del client sol·licita una pàgina al servidor HTTP.
- El contenidor de servlets processa la petició i li assigna el servlet apropiat.
- El servlet triat és l'encarregat de generar el text de la pàgina web i entregar-la al

contenidor de servlets.

- El contenidor retorna la pàgina web al navegador del client.

Java *Server Pages (JSP) és un programari que permet generar pàgines web dinàmiques, així com un altre tipus de documents (com xml). Estos arxius .jsp es compilen i es transformen en un servlet. Més endavant podrem veure els exemples de servlet i JSP que porta amb si el servidor Tomcat.

5.1. Instal·lació de Java. Passem a su per a evitar problemes d'instal·lació. Comprovem i actualitzem la màquina. 10 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Abans d'instal·lar Apatxe Tomcat, és necessari instal·lar JAVA. Instal·lem el paquet OpenJDK, requisit per a la instal·lació de Tomcat. Comprovem els paquets que hem instal·lat. 5.2. Descarregar Tomcat.

Per a descarregar l'arxiu usem el comando wget i la url de l'última versió del Tomcat. Url= https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.15/ wget https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.15/bin/apache-tomcat- 10.1.15.tar.gz -P /tmp 5.3. Canviem de directori a /tmp i comprovem si l'arxiu existeix.

11 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

#### 5.4. Extraure l'arxiu dins del directori /opt/tomcat

Per a evitar problemes d'escriptura canviem els permisos del directori /opt Després creem el directori /tomcat Tornem a /tmp i extraiem l'arxiu dins de /opt/tomcat 5.5. Llancem el servidor. 5.6. Configurem el firewall de la màquina. Primerament comprovarem si el firewall del servidor està actiu.

Si no ho és l’activem. 12 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Finalment permetem el trànsit web pel port 8080 amb connexió TCP. 5.7. Comprovació del funcionament del servidor. Si estem usant una maquina virtual per a realitzar la instal·lació del servidor Tomcat, ens assegurarem de tindre els paràmetres de xarxa com segueix

En iniciar la màquina apuntem la IP per a connectar-nos al servidor Tomcat. Obrim un navegador d'internet l iniciar la màquina apuntem la IP per a connectar-nos al servidor Tomcat. 13 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 5.8. Primeres proves. Si cliquem sobre Examples des del navegador ens eixirà un http 403 amb la següent explicació: “By default the Manager is only accessible from a browser running on the same machine as Tomcat. If you wish to modify this restriction, you'*ll need to edit the Manager's context.xml file”.

5.9. Permetre accés a pàgina d'exemples. ➢Realitzem còpia de seguretat i editem el fitxer context.xml de la ruta: ➢Comentar la línia Valve className. ➢Reiniciem el tomcat. 14 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➢Comprovem que ja tenim accés. 5.10. Configurar l'accés remot. Després de realitzar una instal·lació de tomcat, és un requisit poder administrar-lo de manera remota. Per a realitzar la configuració d'accés remot, és necessari modificar l'arxiu context.xml situat en el directori /opt/tomcat/webapps/manager/META-INF.

➢Obrir l'arxiu context.xml de la següent ruta i guardar una còpia de l'arxiu original. Comentar la línia Valve className. ➢Obrir l'arxiu context.xml de la següent ruta i guardar una còpia de l'arxiu original. Comentar la línia Valve className. 15 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➢Reiniciem el tomcat. ➢Comprovem que no es generen errors recarregant la pàgina d'inici de tomcat. 5.11. Configurar l'usuari per a l'accés remot. ➢Fem un còpia de seguretat de l'arxiu conf/tomcat-users.xml i ho editem.

➢Afegim al final de l'arxiu: 16 / 17

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➢Reiniciem el tomcat. 5.12. Comprovem que tenim accés remot (quasi) total al servidor web. En cas de trobar-se de nou amb un error 403 Access denied (sobretot en els enllaços d'accés a la documentació), seguir les instruccions, accedir a l'arxiu context.xml de cada aplicació i comentar les restriccions d'accés a usuari local.

17 / 17

---

## ✍️ Activitats pràctiques UT9

> **✍️ Activitat Pràctica 9.1 — Tasca 3 UT3**
> ##### Data de venciment : 17/11/23
>
> DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web TASCA 3 UT 3. Arquitectura web. Implantació i administració de servidors web Instal·lació d’un servidor web amb Tomcat Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.
>
> DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Servidor web Tomcat Activitat Instal·lar, configurar i utilitzar un servidor web amb Tomcat. Pots utilitzar un servidor virtualitzat en la teua màquina. Si estàs en cloud, obri els ports necessaris en la infraestructura cloud i en la màquina servidor (firewall).
>
> Entrega de la tasca Tot el procés s’ha de documentar amb un processador de text i entregar en format PDF. 2 / 2
