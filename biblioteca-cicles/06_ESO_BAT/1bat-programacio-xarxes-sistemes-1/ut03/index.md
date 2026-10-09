---
layout: default
title: "UT3 — Xarxes — Programació, Xarxes i Sistemes Informàtics I | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r Batxillerat · UT3 Completa"
prev_url: "../ut02/ut02actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT2"
next_url: "../ut03/ut0301.html"
next_label: "3.1 Introducció ➡️"
---

# 📘 UT3 — Xarxes (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**3.1 Introducció**](#ut0301) (o [obrir en pàgina individual ➡️](./ut0301.md) )
> - [**3.2 TCP-IP**](#ut0302) (o [obrir en pàgina individual ➡️](./ut0302.md) )
> - [**3.3 Maquinari**](#ut0303) (o [obrir en pàgina individual ➡️](./ut0303.md) )
> - [**✍️ Activitats pràctiques UT3**](#ut03actividades) (o [obrir en pàgina individual ➡️](./ut03actividades.md) )

---

## 3.1 Introducció

📎 **Material de laboratori (Tasca1):** `RedDHCP.fls`

📎 **Material de laboratori (Tasca2):** `2Subredes.fls`

📎 **Material de laboratori (tasca3):** `2SubredesConRouter.fls`

---

Xarxes “Les xarxes no estan fetes de circuits impresos, sinó de persones...” Cliff Stoll - Astrònom, administrador de sistemes, I escriptor.

Continguts

### 1. Conceptes bàsics

### 2. Protocol TCP/IP

### 3. Maquinari d’una xarxa

### 4. Programari d’una xarxa

### 5. Gestió d’usuaris, recursos i permisos

### 6. Seguretat i privacitat en les xarxes

### 7. Formats estàndard d’intercanvi de dades

### 8. La xarxa Internet

### 9. Comerç electrònic

Conceptes bàsics

Antecedents ◼Els ordinadors, disposen de programes emmagatzemats al seu disc dur. ◼El SO els carrega a la memòria principal per a que puguen ser executats. ◼Les dades, també són carregades a la memòria per a ser tractades. ◼Tot s’executa en un entorn delimitat, la frontera és la carcassa de l’ordinador.

Necessitat de processament remot ◼Què passa si les dades és troben a un altre ordinador que està a un metre de distància? Podríem emprar un dispositiu d’emmagatzemament extern. ◼I si eixe ordinador està a 20 quilòmetres? ◼Eixa necessitat d’accedir a dades remotes impulsà la creació les xarxes.

◼La teleinformàtica o telemàtica és la disciplina que s’encarrega del tractament automàtic de informació de forma remota.

Què es una xarxa? ◼Una xarxa és un conjunt d’ordinadors connectats entre sí. ◼Els ordinadors comparteixen Dades (imatges, documents, etc..) Recursos ◼impressores ◼disc dur ◼connexió amb internet

Què es una xarxa? ◼Pot ser tan senzilla com la formada per un parell d’ordinadors o tan complexa com és la xarxa Internet.

Què és una xarxa?

Classificació de les xarxes I ◼Atenent al seu tamany o a l’àrea de cobertura Xarxes d’àrea local (XAL ó LAN).   Extensió limitada (un edifici, un campus….). Pertanyen a una sola organització, que és la mateixa que l’explota. Velocitats de 10 Mbps a 1Gbps WLAN.  

Classificació de les xarxes I ◼Atenent al seu tamany o a l’àrea de cobertura Xarxes d’àrea metropolitana (MAN). ▪ Extensió d’uns 50km. Cobreix una extensió d’una gran ciutat, o diversos pobles. ▪ Formada per LANs interconectades. ▪ S’empra la fibra òptica per donar conexión.

Classificació de les xarxes I ◼Atenent al seu tamany o a l’àrea de cobertura ❑Xarxes d’àrea extensa (WAN). ▪ Interconnecten equips i xarxes geogràficament dispersos (un ciutat, un país, etc.). ▪ Empren l’infrastructura de tercers. (Operadors de telecomunicacions) ▪ La velocitat depen del mode de conexió entre xarxes.

Classificació de les xarxes I ◼Atenent al seu tamany o a l’àrea de cobertura

Classificació de les xarxes II ◼Atenent al nivell d’accés i privacitat. D’accés públic. Internet ◼Xarxa de xarxes. ◼Permet compartir informació i servicis a nivell mundial. ◼Es d’accés públic.

Classificació de les xarxes II ◼Atenent al nivell d’accés i privacitat. Intranet ▪ Empra ferramentes de internet, dintre de l’entorn d’una LAN. ▪ L’accés sols es permet als empleats de l’organització. ❑Extranet ▪ Una intranet accessible des de fora de l’àmbit de la LAN.

▪ Es pot accedir des de qualsevol lloc mitjançat autentificació. ❑VPN ▪ Red privada que crea una conexión segura y cifrada sobre una menys segura, com pot ser l’Internet.

Tipus d’equips a les xarxes ◼Servidors Oferixen serveis i recursos als usuaris. Web, impressió, correu electrònic. ◼Clients Consumixen serveis i recursos d’un servidor. Relació client-servidor

Tipus d’equips a les xarxes Relació P2P o peer-to-peer: ◼No existeix una jerarquía entre les màquines conectades a la red. ◼Els ordinadors es comporten indistintament com a clients i com a servidors.

Tipus d’equips a les xarxes

Comunicació ◼Procés en el que un emissor envia un missatge a un receptor a través d’un canal. ◼Els ordinadors actuen d’emissor i receptor. ◼El canal és el medi pel que viatja la informació.

Protocols ◼L’emissor i el receptor s’han d’entendre, es a dir, han de parlar el mateix llenguatge (Protocol). ◼Els protocols estableixen un conjunt de normes que especifiquen com es durà a terme la comunicació. ◼Exemples: TCP/IP, NetBios

Avantatges de les xarxes ◼Redueixen costos. Al poder compartir recursos, com una impressora. ◼Augmenten la eficàcia i la productivitat. Les dades, al estar centralitzades, estan disponibles de forma immediata a tots els usuaris. ◼Permeten la col·laboració entre les persones.

Ferramentes com Microsoft Outlook o la missatgeria instantània faciliten la col·laboració entre persones.

Desavantatges ◼Risc de atacs a la seguretat Accés a informació confidencial. Atacs des de l’exterior. Infeccions víriques poden propagar-se ràpidament.

---

## 3.2 TCP-IP

Els protocols TCP/IP

Continguts        Introducció. Origen de TCP/IP. Ús d’Internet a nivell mundial. Adreces IP. Màscares de Xarxa. Noms de domini. DNS (Domain Name System). DHCP (Dynamic Host Configuration Protocol). Porta d’enllaç (Gateway).

Introducció ◼La família de protocols TCP/IP està formada per diversos protocols amb diferents característiques i funcions. ◼Els més importants son: TCP (Transmission Control Protocol). Controla errors i s’assegura de la correcta arribada dels missatges. IP (Internet Protocol). Dirigeix els missatges per la xarxa.

◼TCP i IP són la base d’Internet.

Origen de TCP/IP ◼En 1969, a petició del govern dels EEUU, un grup de científics van desenvolupar la xarxa ARPANET. Amb 2 característiques claus: Devia de seguir funcionant encara que part de la xarxa es trencara. No devia existir cap ordenador “central” que controlar la xarxa.

◼ARPANET va créixer ràpidament connectat un centenar de xarxes universitàries i militars arreu del món.

Origen de TCP/IP ◼Dintre del projecte Internetting es crearen els protocols TCP i IP (1981). ◼L’objectiu del projecte era interconnectar xarxes de tot tipus, independentment de la tecnologia que empraren. ◼En 1990 ARPAnet va ser dissolta, però la seua tecnologia havia engendrat Internet.

◼En 1991 es va crear la Word Wide Web (www).

Com funciona? ❑Els protocols TCP (Transmission Control Protocol) i IP (Internet Protocol) treballen junts per a garantir una comunicació eficaç i fiable a través d'Internet i altres xarxes. ❑Funcionament del Protocol IP (Internet Protocol)

### 1. Adreçament: Cada dispositiu connectat a la xarxa té una adreça IP

única. Aquesta adreça identifica tant l'host (dispositiu final) com la xarxa a la qual pertany.

### 2. Encaminament de Paquets: Quan les dades són enviades, l'IP les

divideix en paquets més petits. Cada paquet conté l'adreça IP d'origen i de destí, així com una part de la informació original.

### 3. Transmissió a través de Xarxes: Els paquets són enviats a través

de diferents xarxes i dispositius intermediaris (com ara routers) fins arribar a la seva destinació. Els routers utilitzen les adreces IP per a determinar la millor ruta per a cada paquet.

Com funciona? ❑Funcionament del Protocol TCP (Transmission Control Protocol)

### 1. Establiment de Connexió: Abans de la transmissió de dades, TCP

estableix una connexió segura i fiable entre l'enviant i el receptor. Això es fa mitjançant un procés anomenat "handshake" (encaixada de mans) de tres passos.

### 2. Segmentació de Dades: TCP divideix les dades en segments més

manejables que són enviats sobre la xarxa.

### 3. Fiabilitat i Control d'Errors: TCP s'encarrega de la verificació de la

integritat de les dades. Si un segment es perd o s'envia amb errors, TCP demana la seva retransmissió.

### 4. Control de Flux: Aquest protocol també gestiona la velocitat

d'enviament de dades per evitar la sobrecàrrega de la xarxa i assegurar que el receptor pugui processar la informació a una velocitat adequada.

Adreces IP Els ordinadors han d’estar identificats per a poder comunicar-se. Actualment tenim dos versions de IP: ◼IP v4: ◼4 números separats per punts. ◼Els números van de 0 a 255 (byte). ◼Per exemple: 192.168.1.6 ◼IP v6: ◼8 grups en hexadecimal ◼Exemple: 2000:13FA:1111:4E21:0200:D044:0000.0000

Adreces IP ◼Cada adreça IP ha de ser única en Internet. ◼No podem assignar a un ordenador una IP qualsevol.

Adreces IP Classificació

### 1. Accesibilitat

Pública: connexió a internet Privada: connexió a una xarxa local.

### 2. Perdurabilitat

Estàtica: adreça fixada manualment, no varia Dinàmica: es assignada per el router (privada) o per el ISP (pública).

Adreces IP

### 3. Classes de IP

Classe Rang de IP públiques Número de Hosts Ús A 1.0.0.0 - 126.255.255.255 16.777.214 B 128.0.0.0 - 191.255.255.255 65.534 C 192.0.0.0 - 223.255.255.255 D 224.0.0.0 - 239.255.255.255 No aplica Utilitzat per a multicast. E 240.0.0.0 - 255.255.255.255 No aplica Reservat per a ús futur i experimentació

Adreces IP Classes de IP per a xarxes privades: Classe ús Rang de IP Privades A Grans empreses 10.0.0.0 - 10.255.255.255 B Pymes 172.16.0.0 - 172.31.255.255 C Domèstic 192.168.0.0 - 192.168.255.255 ◼ IPs reservades: IP de xarxa (IP de red). Xarxa on es connecten tots els hosts (és la primera IP). Exemple: 192.168.1.0 IP de difusión (IP de broadcast). IP que s'utilitza per a enviar missatges a tots els hosts (última IP) Exemple: 192.168.1.255 IP de loopback o localhost: 127.0.0.1 (és la pròpia máquina)

Màscara de xarxa ◼Número amb el mateix format que l’adreça IP. ◼Especifica quina part de l’adreça identifica la xarxa i quina al host. ◼Permet determinar si dos equips estan a la mateixa xarxa. ◼Per exemple: 255.255.255.0 255.255.0.0

Subnetting El "subnetting" o subdivisió de xarxes és una pràctica utilitzada en la gestió de xarxes que implica dividir una xarxa més gran en xarxes més xicotetes, o subxarxes. Aquesta tècnica es realitza típicament amb adreces IP i serveix per a diversos propòsits, incloent la millora de l'eficiència de la xarxa, la seguretat, i la gestió de tràfic.

• Les xarxes de tipus A tenen una màscara per defecte de 255.0.0.0: 8 bits de xarxa i 24 bits d'host. • Les xarxes de tipus B tenen una màscara per defecte de 255.255.0.0: 16 bits de xarxa i 16 bits d'host. • Les xarxes de tipus C tenen una màscara per defecte de 255.255.255.0

24 bits de xarxa i 8 bits d'host.

Subnetting Per a poder dividir una xarxa en diverses subxarxes: traure bits a l'apartat dels hosts, que permeten identificar les subxarxes. Per a planificar la segmentació d'una xarxa, cal considerar: 1.El nombre d'usuaris per xarxa i el nombre de xarxes necessàries →a més usuaris per xarxa menys xarxes i a més xarxes menys usuaris per xarxa.

2.Per cada xarxa creada, es perden 2 IPs: una per a la direcció de broadcast i una altra per a la direcció de xarxa. Fórmules per al càlcul de subxarxes: núm. de bits per núm. d'hosts d'una subxarxa →2^núm. de bits >= núm. d'hosts + 2

Sistema de noms de domini. DNS. ◼Es difícil recordar les adreces IP. ◼Es va crear un sistema per a associar noms i adreces IP. (Sistema de noms de domini). ◼Aquest sistema organitza jeràrquicament els noms de domini de forma que es facilita la seva traducció.

Sistema de noms de domini. DNS. ◼Un nom de domini usualment consisteix en dos o més parts, separats per punts quan s’escriuen forma de text. ◼Per exemple: www.gva.es www.google.com

Sistema de noms de domini. DNS. DOMINI ÚS .COM COMERCIAL .NET XARXA .ORG ORGANITZACIÓ SENSE ÀNIM DE LUCRE .MIL MILITAR (RESTRINGIT USA) .GOV ESTATAL (RESTRINGIT USA) .BIZ NEGOCIS .INFO INFORMACIÓ .NAME PARTICULAR .COOP COOPERATIVA .MUSEUM MUSEU .PRO PROFESSIONAL .AERO AERONÀUTIC Dominis d’alt nivell

Porta d’enllaç. Gateway. ◼Host (dispositiu u ordinador) que interconnecta diferents xarxes. ◼Quan el destinatari d’un missatge no està en la nostra xarxa s’envia cap a la porta d’enllaç. ◼La porta d’enllaç s’encarrega d’enviar-la per on corresponga.

DHCP. Protocol de configuració dinàmica de hosts. ◼Assigna automàticament la configuració IP als hosts que ho sol·liciten. ◼Facilita la tasca de manteniment Els canvis estan centralitzats. Evita duplicitats. ◼En l’actualitat, els ISP l’utilitzen per a l'assignació de IPs dinàmiques.

En resum... ◼Per a connectar un equip a una xarxa basada en TCP/IP necessitarem: Direcció IP Màscara de xarxa Servidors DNS Porta d’enllaç ◼...o disposar d’un servidor DHCP.

---

## 3.3 Maquinari

Maquinari de les xarxes

Classificació ◼Segons el mitjà d’interconnexió podem diferenciar dos grans categories de xarxes Mitjans guiats. Direm que són aquells en el que els dipositius es connecten per enllaços d’un medi físic. Mitjans no guiats. Són aquells en que la connexió és sense fil.

Classificació. Elements Mitjans guiats o xarxes cablejades    Targetes de xarxa Cablejat Switch Mitjans no guiats o xarxes sense fils     WiFi Bluetooth Infrarojos WiMax Connexió a xarxes externes. Internet     Línia telefònica Cable Via satèl·lit Mòbil Xarxes Locals

Mitjans guiats

Targeta de xarxa ◼Targeta de xarxa Dispositiu electrònic que permet a un ordinador accedir a una xarxa. ◼Tipus d’adaptadors Ethernet (amb connector RJ45 és el tipus d’adaptador més comú) ◼MAC Cada targeta de xarxa té un número identificatiu de 48 bits anomenat MAC A l’adreça MAC també s’anomena adreça física.

Cablejat ◼En els medis guiats, és necessari unir els diferents dispositius connectats a la xarxa amb cables.

Cablejat coaxial ◼Cable format per dos conductors concèntrics Conductor central format per un fil de coure. Conductor exterior en forma de tub format per una malla trenada de coure o alumini Entre els dos conductors hi ha una capa aïllant (dielèctric) Tot el conjunt està recobert per una coberta aïllant.

Cablejat parell trenat ◼Tipus de cablejat en el que dos conductors es trenen per evitar interferències electromagnètiques. ◼Connector en els extrems RJ-45

Cablejat fibra òptica ◼La fibra òptica és una guia per la que es pot transportar potència òptica en forma de llum. ◼Avantatges Grans velocitats Immunitat a les interferències ◼Desavantatges Els empalmes entre fibres són difícils Transmissors i receptors cars

Cablejat Velocitat Distància Ús Cable Coaxial Baixa a moderada (fins centenars de Mbps) Mitjana (hasta centenars de metres) Transmissió de TV, internet (limitat), xarxes d'empresa antigues Par Trenat Moderada a alta (hasta 10 Gbps) Curta a mitjana (fins a 100 metres per Ethernet) Xarxes LAN d'oficina, connectivitat domèstica, telecomunicacions Fibra Òptica Molt alta (hasta centenars de Gbps) Llarga (decenes o centenars de quilòmetres) Telecomunicacions a gran escala, xarxes de dades d'alta velocitat, aplicacions mèdiques i industrials

Switch ◼També anomenat Commutador. ◼Dispositiu electrònic d’interconnexió de xarxes d’ordinadors. Interconnecten segments de xarxa. ◼Encaminen els paquets de dades pel port on es troba el destinatari. Coneix on es troba el destinatari i no reenvia per tots els ports.

Milloren el rendiment i seguretat de les LANs.

Mitjans no guiats

WiFi ◼Conjunt d’estàndards per a xarxes inalàmbriques. ◼No requereix visibilitat directa dels dispositius i dona cobertura a uns 200m sense obstacles. ◼La seguretat és un gran problema en estes xarxes Mecanismes de xifrat: WEP, WPA, WPA2

Bluetooth ◼Estàndard de comunicació inalàmbrica que possibilita la transmissió de veu i dades entre equips gràcies a un enllaç per radiofreqüència. ◼Bases: Suport a veu i dades Baix consum d’energia (equips mòbils) Baix cost Interconnectar dispositius molt diversos sense fils

Infrarojos ◼IrDA (Infrared Data Association) Es possible transmetre i rebre informació amb rajos infrarojos (comunicació òptica no guiada). IrDA és un estàndard que defineix una forma d’implementar la tecnologia infraroja pels fabricants.

Infrarojos ◼Avantatges De difícil interceptació no desitjada Baix cost Protocol simple Baix consum energètic ◼Inconvenients Visibilitat directa dels dispositius Distàncies curtes Velocitats baixes (entre 9600 bps i 4 Mbps) Connexions punt a punt

WiMax ◼Interoperabilitat Mundial per a l’Accés per Microones (Worldwide Interoperability for Microwave Access) ◼Estàndard de transmissió inalàmbrica de dades. ◼El funcionament és molt semblant a la WiFi, té algunes millores: Major velocitat de tranferència, 124 Mbps.

Pot donar cobertura a distàncies majors, fins a 70Km.

WiMAX

Connexió a xarxes externes. Internet

Connexió a xarxes externes ◼Introducció ◼Connexions A través de línia telefònica Router Mòbil

Introducció ◼Per connectar-nos a una xarxa externa ja no disposem d’elements com el cablejat que puga unir els ordinadors com en el cas d’una xarxa local. ◼Calen doncs altres formes d’accés per realitzar la connexió.

Línia telefònica ◼Mòdem. Dispositiu que usa la línia telefònica per enviar i rebre dades. El funcionament: ◼Converteix els senyals digitals de l’ordinador a analògics per poder enviar-ho per la línia telefònica. ◼Els senyals analògics rebuts són convertits a digitals.

Velocitat: 56 Kbps

Router ◼O enrutador. Dispositiu per unir xarxes d’ordinadors. Busca el camí per posar en contacte màquines encara que es troben en distintes xarxes. El seu treball consisteix en encaminar cap a la xarxa adequada els paquets que li arriben.

Router

Sistema de telefonia mòbil universal (LTE) ◼Estàndard de comunicació sense fil global de quarta generació, anomenat també 4G. ◼La velocitat màxima es de 1Gbps. ◼En continua evolució (5G).

Altres Cable Satèl·lit Ones radioelèctriques

---

## ✍️ Activitats pràctiques UT3

> **✍️ 📋 Exercici / Qüestionari 3.1 — Ejemplo ejercicio redes**
> Calcula la IP de red y de broadcast sabiendo: • IP de host: 129.160.26.109 • Máscara de red: 255.255.240.0
>
> ### 1. Pasamos a decimal la IP de host y la máscara de red
>
> ### 2. La parte de 0 de la máscara indica la cantidad de 0 de la dirección de red
>
> ### 3. Pasamos la IP de red a binario
>
> ### 4. IP de broadcast: reemplazamos los 0 del final por 1 en la IP de red (en binario)
>
> ### 5. Pasamos la IP de broadcast a binario
>
> Decimal Binario IP de host 129.160.26.109 1100 0000. 1010 0000. 0001 1010. 0110 1101 Máscara de red 255.255.240.0 1111 1111. 1111 1111. 1111 0000. 0000 0000 IP de red 129.160.16.0 1100 0000. 1010 0000. 0001 0000. 0000 0000 IP de broadcast 129.160.31.255 1100 0000. 1010 0000. 0001 1111. 1111 1111 ¿Número de hosts? 2 número de 0 – 2 (IP de red, IP de broadcast) 212-2 = 4094 hosts Ejemplo de IP de host IP comprendida entre IP de red e IP de broadcast (129.160.16.0 - 129.160.31.255) Por ejemplo: 129.160.20.3 Nota
>
> Otra forma de dar los datos 129.160.26.109 / 20
>
> Tipos de direcciones:  Pública (Internet)  Proporcionada por el ISP (Internet Service Provider. Ej: Movistar, Vodafone…)  Puede ser: o Dinámica: por defecto. o Estática: más cara. Ej: servidores como Google  Tipos: o A: 1.0.0.0 – 126.255.255.255 o B: 128.0.0.0 – 191.255.255.255 o C: 192.0.0.0 – 223.255.255.255 o D: 224.0.0.0 – 239.255.255.255  Privada (Red interna)  Pueden ser
>
> o Dinámica: por defecto o Estática: configuración manual  Tipos: o A: 10.0.0.0 – 10.255.255.255 o B: 172.16.0.0 – 172.31.255.255 o C: 192.168.0.0 – 192.168.255.255 A: Grandes redes (multinacionales) Máscara: 255.000.000.000 B: Redes medianas (pymes, colegios…) Máscara: 255.255.000.000 C: Red doméstica (hogar) Máscara: 255.255.255.000 D: Redes multicast (Movistar, Netflix)

> **✍️ Activitat Pràctica 3.2 — Tasca1_RedDHCP**
> ### Practica 1
>
> ### Red DHCP
>
> - Arrastrem un PC i un portàtil a l’espai de treball.
>
> - Arrastrem un Router i un Switch a l’espai de treball.
>
> - Configurem el portàtil i l’ordinador amb el protocol DHCP i marquem també el check d’usar l’IP com a nom.
>
> - Configurem el router per a el protocol DHCP funcione correctament. Fem click al router. Després, al botó “DHCP server set up”
>
> - Posem el rang d’IPs que fara ús el router i “activem DHCP”.
>
> - Per últim, fem les connexions corresponents.
>
> - Fem clic en el botó “PLAY”. En este punt podem observar com es comuniquen els dispositius de la xarxa creada mitjançant el color verd del cable. També podem accelerar el procés amb la barra de velocitat.
>
> - Observa com s’han assignat a ambdós dispositius les IPs corresponents per funcionar en LAN.
>
> Preguntes
>
> - Per què cada ordinador s’assigna amb una IP distinta?
>
> - Què ocorreria si tots els ordinadors tingueren la mateixa IP?
>
> - Fes una captura de pantalla d’un ping d’un ordinador a un altre. Què ocorre?
>
> - Què és el DHCP?
>
> - Quina funció pa en este cas el router amb les IPs?
>
> Entregable
>
> - Puja a aules un Word amb una captura de pantalla de la teua simulació.
>
> - També, al mateixa Word, contestaràs les preguntes que ací tens.
>
> - Puja també a aules l’arxiu creat amb Filius.

> **✍️ Activitat Pràctica 3.3 — Tasca2_2subxarxes**
> ### Pràctica 2
>
> ### Creació de 2 subxarxes amb Filius
>
> Crea la següent xarxa amb el programa “Filius”.
>
> - Fixa’t que cada ordinador te una IP distinta.
>
> - La màscara será 255.255.255.0
>
> Preguntes
>
> - Com se que dos ordinadors están en xarxes distintes. Explica-ho amb les teues paraules.
>
> - Quants ordinadors hi ha a cada xarxa? Per què?
>
> - Que ocorre quan faig ping entre 2 ordinadors de la mateixa xarxa? Quins són? Posa una captura del ping entre els dos ordinadors
>
> - I quan faig ping entre 2 ordinadors de xarxes distintes? Quins has usat? Posa una captura del ping entre els dos ordinadors.
>
> Entregable
>
> - Puja a aules un Word amb una captura de pantalla de la teua simulació.
>
> - També, al mateixa Word, contestaràs les preguntes que ací tens.
>
> - Puja també a aules l’arxiu creat amb Filius.

> **✍️ Activitat Pràctica 3.4 — Tasca3_2SubxarxesRouter**
> ### Pràctica 3
>
> ### 2 Xarxes connectades per 1 Router
>
> Dissenya la següent xarxa amb Filius.
>
> - Fixa’t amb les IPs
>
> - La mascara de xarxa és 255.255.255.0
>
> - Gateway del router: 192.168.0.1 / 192.168.1.1
>
> - Recorda que els PCs han de tindre el gateway de la seua xarxa.
>
> Preguntes
>
> - Què diferència principal veus amb la pràctica anterior?
>
> - Què ocorre quan fas ping entre dos ordinadors de la mateixa xarxa? Fes una captura i explica`t.
>
> - Que ocorre quan fas ping entre dos ordinadors de xarxes distintes? Fes una captura i explica`t.
>
> - Quina funció té el router en esta pràctica?
>
> Entregable
>
> - Puja a aules un Word amb una captura de pantalla de la teua simulació.
>
> - També, al mateixa Word, contestaràs les preguntes que ací tens.
>
> - Puja també a aules l’arxiu creat amb Filius.

> **✍️ 📋 Exercici / Qüestionari 3.5 — Qüestionari Xarxes**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
