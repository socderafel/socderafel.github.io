---
layout: default
title: "UT5 — Fingerprint — Hacking Ètic i Auditoria de Seguretat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "CE Ciberseguretat (CETI) · UT5 Completa"
prev_url: "../ut04/ut04actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT4"
next_url: "../ut05/ut0501.html"
next_label: "5.1 Introducción al Fingerprinting ➡️"
---

# 📘 UT5 — Fingerprint (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**5.1 Introducción al Fingerprinting**](#ut0501) (o [obrir en pàgina individual ➡️](./ut0501.md) )
> - [**5.2 Nmap**](#ut0502) (o [obrir en pàgina individual ➡️](./ut0502.md) )
> - [**5.3 Fingerprinting**](#ut0503) (o [obrir en pàgina individual ➡️](./ut0503.md) )
> - [**5.4 Presentación fingerprint**](#ut0504) (o [obrir en pàgina individual ➡️](./ut0504.md) )
> - [**5.5 Enumeración con nmap**](#ut0505) (o [obrir en pàgina individual ➡️](./ut0505.md) )
> - [**5.6 Scripts amb nmap**](#ut0506) (o [obrir en pàgina individual ➡️](./ut0506.md) )
> - [**✍️ Activitats pràctiques UT5**](#ut05actividades) (o [obrir en pàgina individual ➡️](./ut05actividades.md) )

---

## 5.1 Introducción al Fingerprinting

> **🔗 Recurs Web: Scripts amb nmap**
> [**🌐 Obrir recurs extern (https://nmap.org/book/nse-usage.html) ↗️**](https://nmap.org/book/nse-usage.html)

> **🔗 Recurs Web: Lista de opciones de nmap**
> [**🌐 Obrir recurs extern (https://nmap.org/man/es/man-briefoptions.html) ↗️**](https://nmap.org/man/es/man-briefoptions.html)

---

Tema 5. Auditoria de seguretat: Fingerprint. Hacking ètic (HE) CIBER

Hacking ètic 1r CIBER La informació continguda en aquesta presentació només és per a fins educatius. EL PROFESSORAT DEL CURS D'ESPECIALITZACIÓ EN CIBERSEGURETAT EN ENTORNS DE LES TECNOLOGIES DE LA INFORMACIÓ I EL CENTRE EDUCATIU NO ES FAN RESPONSABLES DE L'ÚS INDEGUT D'AQUESTA INFORMACIÓ.

ÍNDEX Hacking ètic 1r CIBER ➤AUDITORIA DE SEGURETAT. ○ INTRODUCCIÓ. ○ FASES DEL PROCÉS. ➤FINGERPRINT. ○ INTRODUCCIÓ. ○ DEFINICIÓ. ○ DIFERÈNCIES ENTRE FINGERPRINT I FOOTPRINT. ○ TÈCNIQUES DE FINGERPRINTING. ○ TIPUS DE FERRAMENTES. ○ FERRAMENTES ACTIVES.

■ DEFINICIÓ. ■ PROBLEMES. ■ FERRAMENTES. ○ FERRAMENTES PASSIVES. ■ DEFINICIÓ. ■ TÈCNIQUES. ■ FERRAMENTES.

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

Hacking ètic 1r CIBER FINGERPRINT INTRODUCCIÓ ● El fingerprinting o empremtes digitals són les petites crestes, espirals i patrons de vall a la punta de cada dit. Es formen per la pressió sobre els dits xicotets i en desenvolupament del bebé a l'úter. Encara no s’ha trobat que 2 persones tinguen les mateixes empremtes digitals, ja que són totalment úniques.

● El fingerprinting és una forma de biometria, una ciència que utilitza les característiques físiques de les persones per identificar-les. ● Les empremtes digitals són una bona opció per a aquesta finalitat, ja que la seva recol·lecció i anàlisi no és costosa, i no es modifiquen mai, encara que les persones es facen molt majors.

Hacking ètic 1r CIBER FINGERPRINT INTRODUCCIÓ ● Moltes persones fan servir els serveis de VPN per amagar la seva adreça IP i ubicació, però hi ha una altra manera d'identificar-la i rastrejar-la: a través de les empremtes digitals del navegador.

● Cada vegada que et connectes, el teu ordinador o dispositiu ofereix als llocs web que visites informació altament específica sobre el teu sistema operatiu, configuracions i, fins i tot, hardware. L'ús d'aquesta informació per identificar-te i rastrejar-te en línia es coneix com petjada digital del dispositiu o del navegador.

● A mesura que els navegadors s'entrellacen amb el sistema operatiu, molts detalls i preferències úniques es poden exposar. Tot açò es pot utilitzar per representar una empremta digital única per a fins de seguiment i identificació.

Hacking ètic 1r CIBER FINGERPRINT DEFINICIÓ ● La fase de fingerprinting se centra en el procés de buscar informació sobre els objectius que han sigut trobats o localitzats durant la fase de footprinting. ● Aquesta tècnica consisteix a recol·lectar informació directament dels sistemes informàtics d'una persona o empresa per aprendre més sobre la seua configuració i comportament.

Hacking ètic 1r CIBER FINGERPRINT DEFINICIÓ La informació que es pot trobar en aquesta fase és: ● Informació sobre el sistema operatiu de les màquines remotes. ● Informació sobre els elements de seguretat, com ara la presència d'un firewall entre l'auditor i les màquines que hi ha a l'entorn.

● Informació sobre els ports oberts de les màquines remotes. ● El descobriment de ports dóna lloc a l’existència de serveis. ● Versions d'aplicacions que es fan després dels ports oberts. Això és important, ja que aquestes aplicacions poden estar desactualitzades.

Hacking ètic 1r CIBER FINGERPRINT DEFINICIÓ ● Les empremtes digitals del navegador són només una altra ferramenta per identificar i rastrejar les persones mentre naveguen per la web. Hi ha moltes entitats diferents, tant corporatives com a governamentals, que monitoritzen l'activitat d'Internet, i totes tenen raons diferents per fer-ho.

● Els anunciants i els comercialitzadors troben útil aquesta tècnica per adquirir més dades sobre els usuaris, ja que genera més ingressos per publicitat. ● Alguns llocs web utilitzen les empremtes digitals del navegador per detectar possibles fraus, com a bancs o llocs web de cites, per tant no sempre és nefast.

Hacking ètic 1r CIBER FINGERPRINT DIFERÈNCIES ENTRE FINGERPRINT I FOOTPRINT ● El Footprinting s'utilitza com una tècnica prèvia que consisteix en un procediment d'exploració amb el qual podem conèixer el nostre objectiu. Perquè aquest procediment siga complet, hem d'acumular tota la informació possible.

Footprinting es considera primera etapa d'un test d'intrusió on es recull informació principalment d'Internet (on hi ha una gran quantitat d'informació). ● El Fingerprinting forma part d'una segona etapa que consisteix a recol·lectar informació directament del sistema l'organització objectiu, per obtenir més informació sobre la configuració i el comportament.

Aquesta etapa és recomanable efectuar-la en una auditoria autoritzada, en què l'atacant té permís per realitzar aquesta acció.

Hacking ètic 1r CIBER FINGERPRINT TÈCNIQUES DE FINGERPRINTING Existeixen diverses tècniques de fingerprinting: ● Scanning: És una tècnica que analitza l’estat dels ports d’una màquina connectada a una xarxa de comunicacions. Detecta si un port està obert, tancat o protegit per un firewall. S'utilitza per detectar quins serveis comuns ofereix la màquina i possibles vulnerabilitats de seguretat segons els ports oberts, inclús per detectar el sistema operatiu que la màquina executa.

● Sniffing: És una tècnica utilitzada per escoltar tot el que passa dins una xarxa. Aquest mètode també es pot utilitzar per detectar empremtes digitals. Els programes sniffer treballen colze a colze amb la targeta de xarxa del nostre equip, per així poder absorbir tot el trànsit que està fluint per la xarxa que estiguem connectats, ja siga per cable o per connexió sense fil.

Hacking ètic 1r CIBER FINGERPRINT TÈCNIQUES DE FINGERPRINTING Existeixen diverses tècniques de fingerprinting: ● Canvas Fingerprint: És una tècnica que permet identificar i rastrejar els visitants de llocs webs que utilitzen l'element d'HTML5, amb el següent funcionament: quan un usuari visita un lloc web, se li indica al seu navegador que “dibuixe” una línia oculta de text o gràfic 3D que després es representa en un sol token digital, un identificador únic per rastrejar cadascun dels usuaris.

● Audio Fingerprint: És el procés de condensació digital d’un senyal d’àudio, que genera una firma digital mitjançant l’extracció de característiques acústiques rellevants d’una peça de contingut d’àudio.

Hacking ètic 1r CIBER FINGERPRINT TIPUS DE FERRAMENTES ● Principalment, a l'etapa de fingerprinting, ens centrarem a analitzar els serveis que es troben escoltant darrere de cada màquina localitzada, els ports oberts. ● L'objectiu és conèixer els sistemes operatius i aplicacions que es troben operant en aquestes màquines.

● Per poder aconseguir aquest objectiu, utilitzarem dos tipus de ferramentes: ○ Actives. ○ Passives.

Hacking ètic 1r CIBER FINGERPRINT FERRAMENTES ACTIVES: DEFINICIÓ ● Les ferramentes actives exploren i escanegen una xarxa per buscar ports oberts, màquines i serveis (scanning), on l'atacant realitza alguna acció que provoca algun tipus de resposta a l’objectiu.

● Això es tradueix en l'enviament de paquets destinats a la màquina objectiu, per comprovar el seu comportament en situacions anòmales o no especificades pels estàndards.

Hacking ètic 1r CIBER FINGERPRINT FERRAMENTES ACTIVES: PROBLEMES Hi ha dos problemes principals amb la tècnica de scanning

### 1. Fa molt de soroll, ja que aquesta tècnica consisteix a anar enviant paquets a

tots els ports dels servidors. Si es fa tot de colp, pot alçar sospites per part de l'administrador de seguretat (si existeix). El millor és sempre fer els escanejats a poc a poc.

Hacking ètic 1r CIBER FINGERPRINT FERRAMENTES ACTIVES: PROBLEMES Hi ha dos problemes principals amb la tècnica de scanning

### 2. Hi ha mecanismes per bloquejar aquests escanejats i sistemes per alertar-los

Els firewall, que poden ser dispositius de hardware o programes software, mitiguen aquests escanejats de ports, filtrant els paquets d'IPs externes o filtrant el tipus de paquets, sobretot els de tipus ICMP, que és un protocol que reporta errors a través de missatges d’error quan hi ha problemes de xarxa, o ping).

Hacking ètic 1r CIBER FINGERPRINT FERRAMENTES ACTIVES: PROBLEMES

FINGERPRINT FERRAMENTES ACTIVES: PROBLEMES Hi ha dos problemes principals amb la tècnica de scanning

Els IDS (Intrusion Detection System) són sistemes d'alarma que es col·loquen dins d’una xarxa (normalment solen ser ordinadors analitzant el trànsit) i que alerten de comportaments anòmals al sistema. Hacking ètic 1r CIBER

FINGERPRINT FERRAMENTES ACTIVES: PROBLEMES Hacking ètic 1r CIBER

Hacking ètic 1r CIBER FINGERPRINT FERRAMENTES ACTIVES: FERRAMENTES Com a exemples de ferramentes actives, tenim les següents: ❖Nmap: És la ferramenta més popular i potent per fer escaneig de ports. ❖Zenmap: És una aplicació amb mode gràfic que implementa les mateixes funcionalitats que Nmap.

❖Scapy: És una ferramenta de manipulació de paquets per a xarxes informàtiques, escrita originalment a Python. ❖Nessus: És un programa d'escaneig de vulnerabilitats. ❖hping3: És una aplicació per a crear i analitzar paquets. ❖Fing: És una aplicació d’Android per a analitzar reds.

Hacking ètic 1r CIBER FINGERPRINT FERRAMENTES PASSIVES: DEFINICIÓ ● Les ferramentes passives es configuren per escoltar en una xarxa i analitzar els paquets per identificar màquines i serveis (sniffing), la qual cosa vol dir que el sistema atacant no genera cap comunicació cap a la destinació per tal de provocar una resposta.

● Les ferramentes passives són indetectables per al receptor.

FINGERPRINT FERRAMENTES PASSIVES: TÈCNIQUES Algunes de les tècniques més utilitzades amb les ferramentes passives són: ● Sniffing: És una tècnica basada a capturar els paquets enviats i rebuts en xarxes locals, ja siga sense fil o per cable. Al capturar paquets, podem intentar accedir a tota la informació que hi viatja, com contrasenyes, usuaris… ● Man-in-the-middle: És una tècnica que consisteix en situar-nos entre el client i el servidor i interceptar tots els missatges que intercanviïn, fent-nos passar per un router o un servidor proxy (intermediari).

Hacking ètic 1r CIBER FINGERPRINT FERRAMENTES PASSIVES: FERRAMENTES Com a exemples de ferramentes passives, tenim les següents: ❖Wireshark: És un analitzador de protocols utilitzat per a solucionar problemes en xarxes de comunicacions, mitjançant l’anàlisi de dades i protocols.

❖Ettercap: És una aplicació gratuïta que pot llançar atacs Man-in-the-Middle. ❖Tcpdump: És una ferramenta per a analitzar el trànsit que circula per la xarxa. ❖P0f: És un programa per a detectar sistemes operatius de les màquines. ❖Network Miner: És un software amb el que es pot detectar sistemes operatius, sessions, noms de host i ports oberts.

---

## 5.2 Nmap

Tema 5.1. Auditoria de seguretat: Fingerprint actiu mitjançant Nmap Hacking ètic (HE) 1r CIBER

Hacking ètic 1r CIBER La informació continguda en aquesta presentació només és per a fins educatius. EL PROFESSORAT DEL CURS D'ESPECIALITZACIÓ EN CIBERSEGURETAT EN ENTORNS DE LES TECNOLOGIES DE LA INFORMACIÓ I EL CENTRE EDUCATIU NO ES FAN RESPONSABLES DE L'ÚS INDEGUT D'AQUESTA INFORMACIÓ.

ÍNDEX Hacking ètic 1r CIBER ➤AUDITORIA DE SEGURETAT. ○INTRODUCCIÓ. ○FASES DEL PROCÉS. ➤NMAP. ○INTRODUCCIÓ. ○DEFINICIÓ. ○ESTAT DELS PORTS. ○ESCANEIG RÀPID DE PORTS. ○ESCANEIG D’UN RANG DE PORTS. ○TIPUS D’ESCANEIG. ○FUNCIONS. ○SCRIPTS.

Hacking ètic 1r CIBER ● Les ferramentes actives exploren i escanegen una xarxa per buscar ports oberts, màquines i serveis (scanning), on l'atacant realitza alguna acció que provoca algun tipus de resposta a l’objectiu. ● Això es tradueix en l'enviament de paquets destinats a la màquina objectiu, per comprovar el seu comportament en situacions anòmales o no especificades pels estàndards.

AUDITORIA DE SEGURETAT FASES DEL PROCÉS: FINGERPRINT ACTIU

● La ferramenta més popular i potent per fer l'escaneig de ports és Nmap. ● Aquesta ferramenta ve per defecte en la distribució Kali Linux i també està disponible per a Windows, Mac OS X i qualsevol altre Linux. ● Nmap és una ferramenta de línia d'ordres, encara que n'hi ha una altra que té les mateixes funcionalitats i té interfície gràfica, aquesta és Zenmap.

Hacking ètic 1r CIBER NMAP INTRODUCCIÓ

● Nmap es basa en l'enviament de paquets de diferents tipus als ports d'un servidor esperant una resposta. Depenent del tipus de paquet que s'enviï serà un tipus d'escaneig diferent, alguns són més sigilosos, altres són més efectius, altres no són només per analitzar ports, sinó també per saber si hi ha algun tipus de firewall o fins i tot per analitzar la seguretat dels certificats que proporciona un servidor web.

Hacking ètic 1r CIBER NMAP DEFINICIÓ

● Open: Una aplicació està activament acceptant connexions TCP o UDP. El port és obert i es pot utilitzar per explotar el sistema. És l'estat per defecte si no tenim cap firewall bloquejant accessos. ● Closed: Un port tancat és accessible perquè respon a Nmap, però no hi ha cap aplicació funcionant en aquest port. De cara a l'administrador del sistema, és recomanable filtrar aquests ports amb el firewall perquè no siguen accessibles.

De cara al hacker, és recomanable deixar aquests ports tancats per analitzar més tard, per si posen algun servei nou. Hacking ètic 1r CIBER NMAP ESTAT DELS PORTS

● Filter: En aquest estat, Nmap no pot determinar si el port està obert, perquè hi ha un firewall filtrant els paquets de Nmap en aquest port. Aquests ports filtrats són els que apareixeran quan tinguem un firewall activat. Nmap intentarà connectar en diverses ocasions, provocant que l'escaneig de ports siga prou lent.

● Open | Filter: Nmap no sap si el port està obert o filtrat. Això passa perquè el port obert no envia cap resposta, i açò podria ser pel firewall. Aquest estat apareix quan usem UDP i IP, i utilitzem escanejats FIN, NULL i XMAS. ● Closeu | Filter: En aquest estat, no es sap si el port està tancat o filtrat. Només es fa servir aquest estat a l'IP Idle Scan.

Hacking ètic 1r CIBER NMAP ESTAT DELS PORTS

● A continuació, es mostren algunes instruccions i exemples d'utilització de Nmap. ● Alguns administradors de xarxes no veuen amb bons ulls la realització d’un sondeig no sol·licitat de les seves xarxes i poden queixar-se. El millor sempre és demanar permís primer o incloure tots els procediments realitzats al contrat.

● En aquesta presentació, s'utilitzen algunes adreces IP i dominis per exemplificar cadascuna de les ordres introduïdes. ● En el seu lloc, per a administrar xarxes o per a fer les auditories, heu de ficar les adreces o noms de la teva xarxa o de l’organització que esteu auditant, respectivament.

Hacking ètic 1r CIBER NMAP SCANME.NMAP.ORG

● En aquesta presentació, anem a sondejar el servidor scanme.nmap.org. ● Aquesta pàgina només inclou sondejos mitjançant Nmap i no ha de ser utilitzada per provar exploits o atacs de denegació de servei. ● Si s'abusa del servei de sondeig, aquest es desconnectarà i Nmap reportarà Failed to resolve given hostname/IP: scanme.nmap.org ("No s'ha pogut resoldre l'adreça IP o nom dades: scanme.nmap.org").

● Aquest permís també s'aplica als servidors analizame2.nmap.org, analizame3.nmap.org, i així successivament. ● Teniu tota la informació ací: https://nmap.org/man/es/man-examples.html Hacking ètic 1r CIBER NMAP SCANME.NMAP.ORG

● Per fer un escaneig ràpid de ports a un determinat host, s’ha d’utilitzar la següent instrucció: nmap [domini] ó nmap [ip] ● Per exemple, si es realitza un escaneig ràpid dels principals ports al host scanme.nmap.org o a la seua adreça IP 45.33.32.156 (podem utilitzar la instrucció ping per obtindre la IP), l'ordre seria la següent

nmap scanme.nmap.org ó nmap 45.33.32.156 Hacking ètic 1r CIBER NMAP ESCANEIG RÀPID DE PORTS

Hacking ètic 1r CIBER NMAP ESCANEIG RÀPID DE PORTS

● En lloc de realitzar un escaneig de tots els ports, es pot establir un rang de ports a comprovar. Per això s’executa la següent instrucció: nmap –p [rang] [domini] ó nmap –p [rang] [ip] ● Si volem fer un escaneig de ports des del 20 TCP fins al 200 TCP al domini scanme.nmap.org o a la seua adreça IP 45.33.32.156, només hem d’executar la següent ordre

nmap –p 20–200 scanme.nmap.org ó nmap –p 20–200 45.33.32.156 Hacking ètic 1r CIBER NMAP ESCANEIG D’UN RANG DE PORTS

Hacking ètic 1r CIBER NMAP ESCANEIG D’UN RANG DE PORTS

● Podem indicar a Nmap que detecte el sistema operatiu. Nmap realitza aquesta detecció enviant paquets i analitzant la manera com els torna, sent en cada sistema totalment diferent. Amb això, realitzarà una exploració de ports i dels serveis a la recerca de vulnerabilitats. Així mateix, l'escaneig tornarà informació útil. Per a poder utilitzar-lo, hem d'executar l’opció –A (habilita la detecció de SO i de versió) i l’opció –v (augmenta el nivell de missatges detallats)

nmap –A –v [domini] ó nmap –A –v [ip] ● Si volem realitzar aquest escaneig al domini scanme.nmap.org o a la seua adreça IP 45.33.32.156, podem executar la següent ordre: nmap –A –v scanme.nmap.org ó nmap –A –v 45.33.32.156 Hacking ètic 1r CIBER NMAP DETECTAR EL SISTEMA OPERATIU I MÉS DADES DEL HOST

Hacking ètic 1r CIBER NMAP DETECTAR EL SISTEMA OPERATIU I MÉS DADES DEL HOST

● Els diferents tipus d’escaneig a Nmap són els següents: Hacking ètic 1r CIBER NMAP TIPUS D’ESCANEIG

- TCP SYN ( -sS ).

Aquest escaneig és el més utilitzat perquè és molt efectiu i silenciós. Es basa en el protocol TCP, que envia un paquet SYN al receptor i si respon SYN+ACK és que el port està obert. L'emissor respon amb RST+ACK per finalitzar la connexió sense que s'establisca.

- UDP ( -sU ).

Aquest escaneig serveix per buscar ports UDP. Envia paquets UDP a tots els ports i si contesta un ICMP (Internet Control Message Protocol, envia missatges d’error) és que el port està tancat; sinó el port estarà obert o filtrat. Hacking ètic 1r CIBER NMAP TIPUS D’ESCANEIG

- TCP ACK ( -sA ).

Aquest escaneig no determina si un port està obert, només indica si un port té un firewall al davant. Enviareu un paquet només amb el flag ACK activat, tant els ports oberts com els tancats contestaran amb el flag RST i només els ports filtrats no contestaran o contestaran algun missatge especial d'error.

- TCP NULL ( -sN ).

Aquest escaneig determina els ports tancats. Enviareu paquets amb tots els flags desactivats, si el port receptor està obert no contestarà res i si el port està tancat respondrà amb un RST+ACK. Hacking ètic 1r CIBER NMAP TIPUS D’ESCANEIG: TCP ACK ( -sA )

- TCP XMAS ( -sX ).

Aquest escaneig envia paquets amb els flags FIN, PSH i URG activats (com si fora un arbre de Nadal). Té la mateixa funció que l'anterior, és a dir, descobrir ports tancats perquè un port obert no contestarà res i un tancat contestarà RST+ACK.

- TCP FIN ( -sF ).

Igual que els dos últims, aquest escaneig descobreix ports tancats. En aquest cas, mana un paquet amb el flag de FIN activat i esperarà la resposta de RST+ACK dels ports tancats. Hacking ètic 1r CIBER NMAP TIPUS D’ESCANEIG: TCP XMAS ( -sX )

- TCP FIN ( -sF ).

● Igual que els dos últims, aquest escaneig descobreix ports tancats. En aquest cas, mana un paquet amb el flag de FIN activat i esperarà la resposta de RST+ACK dels ports tancats. Hacking ètic 1r CIBER NMAP TIPUS D’ESCANEIG: TCP FIN ( -sF )

- TCP IDLE ( -sI ).

● Aquest escaneig és un dels més complexos, ja que requereix una màquina extra, la màquina zombi o intermediària. Per trobar una màquina zombi, l'atacant haurà d'enviar paquets de SYN+ACK per iniciar una connexió amb el possible zombi, comprovant que els ID de resposta que torne siguen successius o predictibles. A més, la màquina zombi no ha de tenir trànsit. Aquestes condicions s'han de complir perquè aquest atac funcione.

● Una vegada tinguem la màquina zombi, l'atacant enviarà paquets SYN a la màquina víctima fent IP Spoofing (suplantació d'IP) fent-se passar per la màquina zombi, per la qual cosa les respostes aniran per a aquesta màquina i no per a l'atacant. Hacking ètic 1r CIBER NMAP TIPUS D’ESCANEIG: TCP IDLE ( -sI )

- TCP IDLE ( -sI ).

● Els paquets enviats tenen el funcionament dels vistos al TCP SYN scan, per la qual cosa la víctima si té el port tancat respondrà amb un paquet RST+ACK a la màquina zombi, que el descartarà; si el port està obert, respondrà amb un SYN+ACK a la màquina zombi i aquesta tornarà un RST, però augmentarà l'ID de resposta. Per això, si l'atacant demana aquest ID i veu que ha augmentat, pot saber que el port de la víctima estava obert. Com es pot veure, aquest escaneig és molt complex, però proporciona a l'atacant la capacitat de seguir ocult.

Hacking ètic 1r CIBER NMAP TIPUS D’ESCANEIG: TCP IDLE ( -sI )

● Hi ha molts més tipus d'escaneig, però els més utilitzats són els que s'han introduït anteriorment. ● A més, Nmap posseeix moltes altres funcions, com a mesures per poder saltar- nos els filtratges firewall, com pot ser: ○ La fragmentació de paquets (opció –f). ○ El reconeixement del sistema operatiu que hi ha darrere d'un dispositiu (opció –O).

○ La generació de scripts, que dóna molt potencial a Nmap. Amb aquests, podem fer un fingerprinting més avançat. Hacking ètic 1r CIBER NMAP FUNCIONS

● Els scripts de Nmap són de diferents tipus: ○ Autenticació. ○ Força bruta. ○ Configuracions per defecte. ○ Descobriment. ○ Denegació de servei. ○ Exploiting. ○ Atacs externs i intrusió. ○ Malware. ○ Detecció de versions i vulnerabilitats. Hacking ètic 1r CIBER NMAP SCRIPTS

● Amb aquests scripts podem analitzar la seguretat que ofereixen els certificats digitals d'un lloc web: quin tipus de protocol SSL suporten, si els algoritmes de signatura i/o xifratge són dèbils… També podrem fer proves d'injecció SQL, força bruta, detecció de vulnerabilitats, etc.

● Tots els scripts i informació sobre ells (funció, paràmetres, requisits…) es poden trobar a la pàgina: http://nmap.org/nsedoc/ ● També podem consultar totes les opcions disponibles teclejant al terminal: nmap --help Hacking ètic 1r CIBER NMAP SCRIPTS

---

## 5.3 Fingerprinting

Material curs conselleria

23AI32CF016 - Hacking Ético Fingerprinting

Fingerprinting La fase de fingerprinting se centra en el proceso de buscar información sobre los objetivos que han sido encontrados o localizados durante la fase de footprinting con el fin de utilizar esa información. El objetivo es claro: buscar vulnerabilidades que padezcan los sistemas en la siguiente fase.

La información que se puede encontrar sería

- Información sobre el sistema operativo de las máquinas remotas.
- Información sobre los elementos de seguridad, como por ejemplo la

presencia de un firewall entre el auditor y las máquinas, que hay en el entorno.

- Información sobre los puertos abiertos de las máquinas remotas.
- El descubrimiento de puertos da lugar a la existencia de servicios.
- Versiones de aplicaciones que se ejecutan tras los puertos abiertos. Esto es

importante, ya que dichas aplicaciones pueden estar desactualizadas. Como se puede ver, se intenta realizar una huella con el máximo de información de las máquinas remotas. El objetivo es facilitar información potencialmente importante a la fase de análisis de vulnerabilidades.

Tipos Principalmente en la etapa de fingerprinting nos centraremos en analizar los servicios que se encuentran escuchando tras cada máquina localizada, es decir, los puertos abiertos. El objetivo es averiguar los sistemas operativos y aplicaciones que se encuentran operando en dichas máquinas. Para ello, se necesita conocer una serie de herramientas de auditoría de seguridad, las cuales se estudian a continuación. En primer lugar, se tratarán en tipos de herramientas

Pasivo. Este tipo de herramientas se configuran para escuchar en una red y analizar los paquetes para identificar máquinas y servicios, lo cual quiere decir que el sistema atacante no genera ningún tipo de comunicación hacia el destino con el fin de provocar una respuesta... Algunos ejemplos serían Satori y Network Minner.

También hay varias herramientas para hacer fingerprinting Pasivo, como P0f que viene instalada en la distribución Kali Linux.

Imagen 1 P0f Activo. Este tipo de herramientas explora una red en busca de máquinas y servicios. El atacante realiza alguna acción que provoque algún tipo de respuesta en la vıctima. Esto se traduce en el envío de paquetes destinados a la máquina víctima, con los que comprobar su comportamiento en situaciones anómalas o no especificadas por los estándares. Como ejemplo se indican Nmap o Fing.

Veamos un ejemplo del fingerprinting que realiza

Imagen 2 Fingerprinting con nmap

Nmap

Imagen 3 Logo NMAP Nmap1 son las siglas de Network Mapper y es una herramienta libre orientada a explorar y a la realización de auditorías de seguridad en una red de datos. Con Nmap el auditor puede poner al descubierto puertos abiertos en los equipos de una red, así como información acerca de los sistemas operativos de dichos equipos. También, implementa algunos escaneos que permiten obtener información sobre elementos de seguridad que tiene la red. La herramienta se encuentra disponible para Windows, Linux u OS X.

Nmap implementa gran cantidad de tipos de escaneos. Cada tipo de escaneo tiene una característica que le hace interesante. Tras cada puerto abierto existirá un servicio y una versión de aplicación. El auditor necesitará conocer los servicios más comunes y los puertos en los que se escuchan, ya que en algunas ocasiones no se puede saber la versión de una aplicación que opera en un puerto concreto.

1 https://nmap.org/man/es/

Imagen 4 Puertos comunes

A continuación, se muestran algunos de los parámetros que se pueden utilizar con la herramienta Nmap para el descubrimiento de servicios. En las descripciones se pueden encontrar algunos ejemplos de uso: Parámetro Descripción y ejemplo -O El escaneo realizará fingerprint del sistema operativo con el objetivo de obtener la versión de éste en la o las máquinas remotas. Ejemplo: nmap –O <dirección IP> -sP Con este parámetro se analiza que equipos se encuentran activos en una red. Ejemplo: nmap –sP 192.168.0.0/24 -sS Se lanza un escaneo sobre varios equipos o una red. Permite obtener un listado de puertos abiertos de éstos. Ejemplo: nmap –sS 192.168.0.0/24 -sN Permite realizar un escaneo de tipo Null Scan. Ejemplo: nmap –sN <dirección IP> -sF Permite realizar un escaneo de tipo FIN Scan. Ejemplo: nmap –sF <dirección IP> -sX Permite realizar un escaneo de tipo XMAS Scan. Ejemplo: nmap –sX <dirección IP> -p Se Indica sobre qué puertos se debe realizar el escaneo. Ejemplo: nmap – p 139,80,3389 <dirección IP>. Para indicar rangos especificamos el puerto de la siguiente manera 80-1500. Se realizará un análisis desde el puerto 80 hasta el 1500 -A Este parámetro habilita la detección del sistema operativo, además de las versiones de servicios y del propio sistema. Ejemplo: nmap –A <dirección IP>

sI Permite realizar un escaneo de tipo idle. Ejemplo: nmap –P0 –p – -sI <dirección zombie> <dirección víctima>. Cabe destacar que la opción –p – permite realizar un escaneo sobre todos los puertos de la máquina, esta acción puede provocar que el escaneo se ralentice en gran medida -sV Obtener las versiones de los productos. Ejemplo: nmap –sV <dirección IP> La herramienta Nmap implementa un motor de scripting, el cual permite que se ejecuten plugins o scripts junto al escáner. El objetivo es añadir funcionalidad al escaneo que Nmap lanza contra las máquinas remotas. NSE, Nmap Scripting Engine, es una de las características más flexibles y potentes que ofrece la herramienta. Los scripts pueden ser escritos por los usuarios de Nmap, y más adelante se indicará una dirección URL dónde obtenerlos. Este motor de scripting es una primera aproximación al análisis de vulnerabilidades, ya que nos pueden permitir detectar vulnerabilidades conocidas y aprovechar la información obtenida en el fingerprinting para, tras analizarlo, encontrar vulnerabilidades.

En la siguiente dirección URL, https://nmap.org/book/nse.html, se puede encontrar diferentes categorías de scripts y que ayudarán a los auditores a ampliar el foco y el punto de mira en el uso de Nmap. Para lanzar scripts con Nmap hay un parámetro denominado –script. A modo de ejemplo se presenta un script creado para detectar en las máquinas remotas la vulnerabilidad de Heartbleed. La vulnerabilidad de Heartbleed tiene como expediente el CVE-2014-0160. Un ejemplo de sintaxis con Nmap sería: nmap –sV –p 443 –script=ssl- heartbleed.nse <dirección IP máquina remota>.

Imagen 5 Nmap con script Heartbleed Cómo se puede visualizar en la imagen anterior se detecta el puerto 443 abierto y se identifica una versión OpenSSL vulnerable a Heartbleed, ya que la versión de OpenSSL se encuentra entre la versión 1.0.1 y 1.0.2-beta1. En la descripción de la vulnerabilidad se indica qué se puede hacer con la explotación de dicha vulnerabilidad.

Este ejemplo de ejecución de script en Nmap es extrapolable a muchos otros casos, e incluso se puede anidar la ejecución de scripts. Tipos escaneos Mediante nmap podemos identifcar multitud de información referente a las máquinas remotas a auditar, entre ellas podemos obtener los servicios en ejecución, escaneo de puertos, comprobación del sistema operativo, versiones de los servicios, además como hemos visto anteriormente con los scripts de nmap podemos dar más

funcionalidad a la herramienta. A continuación, veremos algunos de las funcionalidades básicas de nmap para identificar puertos, servicios, sistemas operativos, …

- Identificación de puertos y servicios

Para realizar una identificación de puertos lanzaremos el comando nmap seguido de la IP o red a escanear. Si no indicamos ningún puerto toma los 1000 primeros conocidos, aunque podemos especificar un rango, un puerto en concreto, etc… con el parámetro –p.

Imagen 6 Nmap - Identificación de puertos

Imagen 7 Nmap - Identificación de rango de puertos

Con este comando nos visualiza que puertos tenemos abiertos y/o filtrados por algún firewall o IDS, junto con el servicio que tienen actualmente. Si quisiéramos conocer más información del servicio utilizaríamos el parámetro –sV

Imagen 8 Nmap - Identificación Servicios

- Escaneos ARP

Podemos escanear la red con arp-scan, el cual envía consultas ARP (Address Resolution Protocol) a IPs o a rangos de IP específicos, es decir, devuelve las direcciones MAC, junto con el fabricante de la MAC.

Imagen 9 Arp-scan También podemos obtener el mismo resultado con nmap. Utilizando el parámetro –sP y la red a escanear. El parámetro –sP realiza un tipo de escaneo en el que utiliza el ping para ver si existe conexión con la máquina remota y ver cuáles están activos.

Imagen 10 Nmap - ARP scan

- Escaneo de sistema operativo

Para la detección del sistema operativo utilizaremos el parámetro –O. Esta detección es aproximada en algunos casos indicando la posibilidad de varios sistemas con sus versiones.

Imagen 11 Nmap - Escaneo Sistema Operativo

Network Minner

Imagen 12 Logo Network Minner La herramienta Network Minner2 es de la rama de análisis forense de red para sistemas Microsoft Windows. Su propósito es recolectar información tras el procesado de las capturas de red. La herramienta filtra todo tipo de información, y es capaz de obtener versiones de aplicaciones, de sistemas operativos, ficheros, conexiones abiertas, credenciales, sesiones, ...

Imagen 13 Network Minner Una de las utilidades interesantes es que permite importar archivos PCAP para su análisis off-line y rehacer archivos transferidos entre otras. También es muy utilizado en el análisis de tráfico de malware, así como la posibilidad de realizar búsquedas en la información analizada en busca de usuario, contraseñas, etc… disponibles en la pestaña Credentials.

2 http://www.netresec.com/?page=NetworkMiner

Sniffing Un sniffer3 es un programa que permite la captura de las tramas de red que ocurre en la comunicación entre varios dispositivos de red, a través del medio de transmisión por el que circule la información. Interceptar la información que se transmite a través de los distintos medios puede ser de gran importancia, ya que pueden utilizarse para fines de lucro o realizar distintos delitos informáticos, por lo que la seguridad en las redes es muy importante.

Al capturar la información se obtiene toda la información que se intercambian entre las dos computadoras, ya sea textos, imágenes, así como información a nivel más bajo como puertos, direcciones ip de origen y destino, …

El uso de un sniffer permite asegurar nuestra red al conocer que información viaja por los distintos medios y así poder limitar dicha información. Pero también permite a un atacante obtener esa información comprometida si está bien asegurada. Los usos más importantes que se le pueden dar a un sniffer son

o Captura de datos sensibles como pueden ser contraseñas sin cifrar y nombres de usuario de la red. o Análisis de fallos que permiten revelar problemas en la red. o Medición de las estadísticas del tráfico con los que es posible descubrir cuellos de botella en algún punto de la red.

o En aplicaciones cliente-servidor permite analizar la información real que se transmite y se comparte por la red. Tipos Podemos encontrar diversos tipos de sniffers entre los que distinguimos aquellos que sólo trabajan con un determinado protocolo o con un número amplio de ellos, así como a nivel más básico. Los más utilizados son

o Wireshark, analizador de protocolos utilizado para el análisis de las comunicaciones y solucionar problemas existentes. Dispone de las características estándar de un analizador de protocolos muy completo. o Ettercap, permite realizar análisis a redes con dispositivos switch.

Soporta direcciones activas y pasivas de varios protocolos, así como la posibilidad de realizar ataques Man-in-the-middle. o Kismet, es un analizador y detector de intrusiones para redes inalámbricas 802.11. o Tcpdump, es un analizar de tráfico a través de línea de comandos.

Permite la captura en tiempo real e ir mostrando los paquetes recibidos y enviados en la red.

3 https://es.wikipedia.org/wiki/Anexo:Tipos_de_packet_sniffers

Wireshark

Imagen 14 Logo Wireshark Wireshark https://www.wireshark.org/ es un software analizador de tráfico que se basa en las librerías pcap. Soporta una gran cantidad de protocolos como ICMP, HTTP, TCP, DNS, … Está disponible para distintas plataformas como Windows, Linux, Mac OS, … Es una de las herramientas que se deben de utilizar en muchas de las auditorías que se pueden llevar a cabo en un proceso de hacking Ético.

Una de las ventajas que tiene Wireshark es que captura los paquetes en tiempo real, y se puede exportar e importar dichas capturas para un posterior análisis.

Se puede descargar gratuitamente desde la web oficial y realizar el proceso de instalación de una forma sencilla. Ejercicios

Con Wireshark se puede elegir la interfaz a través de la cual se va a realizar el proceso de captura de paquetes y análisis del tráfico de red.

Imagen 15 Wireshark - Interfaz en Linux

Imagen 16 Wireshark - Interfaz Windows

Cuando se elija la interfaz por la que analizar el tráfico comenzará a capturar paquetes. Por defecto, en las interfaces inalámbricas se activará el modo promiscuo.

Una vez tengamos suficientes paquetes podemos detener la captura y empezar a analizar el contenido.

Imagen 17 Wireshark - Captura de tráfico de red

Como puede observarse los paquetes vienen identificados por colores, indicando el tipo de paquete y si se ha realizado correctamente la captura. Además, nos muestra información de dicho paquete, como puede ser el numero identificativo, la ip origen y destino, el protocolo, la longitud e información resumida del paquete. Si seleccionamos uno de ellos, en la parte inferior aparece detallado según la capa, además de mostrar en bruto, en hexadecimal la información, el paquete capturado.

Imagen 18 Wireshark - Identificación de los paquetes Podemos en cualquier momento cambiar de interfaz, así como poder importar un archivo almacenado con anterioridad desde el menú File - Open, así como realizar la copia de los datos capturados.

Imagen 19 Wireshark - Selección Interfaz

Wireshark permite filtrar la información obtenida para un mejor manejo de los datos y poder analizar más fácilmente la información, ya que después de un tiempo la información capturar puede ser importante.

Los filtros de tipo Display permiten filtrar los paquetes obtenidos mostrando aquellos que cumplen unas determinadas condiciones. Para utilizarlos se debe indicar, por ejemplo, el protocolo por el cual se quiere filtrar: http, tcp, arp, ip, … La forma más sencilla a la hora de aplicar un filtro es escribir en la parte superior el protocolo junto con los atributos determinados para cada uno de ellos. Si se escribe http se filtrará la información solo de los paquetes http que existan.

Imagen 20 Wireshark - Filtro http Se pueden consultar preestablecidos y crear nuevos filtros desde el menú Analyze – Display Filters.

Imagen 21 Wireshark - Filtros

Con la opción Follow TCP Stream se puede observar la conexión entre dos máquinas y cuál ha sido el flujo de información entre ellos. A través de esta opción se pueden visualizar las comunicaciones y seguirlas, e incluso reconstruir archivos.

Imagen 22 Wireshark - Follow TCP Stream

Imagen 23 Wireshark - Detalle Follow TCP Stream

Al cerrar la ventana, en la zona de filtros muestra el filtro aplicado para conseguir el seguimiento anterior.

Imagen 24 Wireshark - Filtro Follow TCP Stream Al seleccionar un paquete, en la parte inferior permite ver en detalle el contenido de ese paquete a través de las distintas capas. Esta opción es muy interesante ya que nos permite analizar en profundidad la información a nivel más bajo de las comunicaciones.

Imagen 25 Wireshark - Detalle paquete Al seleccionar un paquete podemos crear un filtro de la comunicación que ese paquete ha realizado aplicando un filtro a dicho paquete, y ver los pasos que se han realizado.

Imagen 26 Wireshark - Filtro por IP

Wireshark dispone de varios módulos de estadísticas muy interesantes, capaces de mostrar en tiempo real porcentajes y estadísticas sobre tramas capturadas. En la pestaña Statistics se pueden encontrar distintas opciones, entre las que destacamos Protocol Hierachy que muestra en porcentajes los paquetes capturados de qué tipo son, a qué nivel de red pertenecen, …

Imagen 27 Wireshark - Protocol Hierachy

Otra opción interesante e la que nos permite visualizar la comunicación con el tráfico TCP o general, con la opción Flow Graph.

Imagen 28 Wireshark - Secuencia comunicacion TCP

Wireshark permite de una forma rápida obtener los archivos capturados en la comunicación y poder almacenarlos a través de la opción File – Export Objects – HTTP.

Imagen 29 Wireshark - Exportar archivos

Imagen 30 Wireshark - Archivos en la comunicación

Imagen 31 Wireshark - Imágen obtenida de la comunicación

---

## 5.4 Presentación fingerprint

Material curs conselleria

Hacking Ético 23AI32CF016 Raúl Fuentes Ferrer

ÍNDICE Auditoría de Seguridad: Vulnerabilidades y Exploiting

- Footprint
- Fingerprint
- Análisis y explotación de vulnerabilidades
- Informe

HACKING ÉTICO Disclaimer: La información contenida en esta presentación sólo es para fines educativos por lo cual no me hago responsable por el uso indebido de ella.

Fingerprint Este proceso se centra en buscar información sobre los objetivos que han sido localizados durante la fase de Footprint, con el fin de utilizar esa información para buscar en la próxima fase vulnerabilidades que padezcan los sistemas Principalmente nos centraremos en analizar los servicios que se encuentran escuchando tras cada máquina localizada (puertos abiertos) para averiguar sus sistemas operativos y aplicaciones que se encuentran operando Para ello necesitaremos conocer una serie de herramientas de auditoría de seguridad que veremos a continuación.

AUDITORÍA DE SEGURIDAD

Fingerprint Activo VS Pasivo Tipos: Pasivo: escucha una red y analiza paquetes para identificar máquinas y servicios ◦ Satori ◦ Network Minner Activo: explora una red en busca de máquinas y servicios • Nmap • Fing AUDITORÍA DE SEGURIDAD

SATORI – escáner pasivo de red Satori es una herramienta dedicada específicamente a intentar averiguar el Sistema Operativo de cualquier equipo de la red. Satori tiene en cuenta determinadas variables relacionadas con los diversos tipos de solicitudes/respuesta DHCP. AUDITORÍA DE SEGURIDAD

NETWORKMINER – complemento a Wireshark NetworkMiner es una herramienta forense de análisis de redes para Windows, su propósito es recolectar información. FTP, TFTP, HTTP y SMB, tráfico IEEE 802.11, parámetros enviados por HTTP POST/GET, SQL queries, etc. Proporciona una lista de todas las sesiones establecidas por cada host AUDITORÍA DE SEGURIDAD

Fingerprint Herramientas recomendadas para Fingerprint: Nmap: Siglas de ‘Network Mapper’, es una herramienta libre orientada a explorar y realizar auditorias de seguridad en una red de datos. Pone al descubierto puertos abiertos en los equipos de una red, así como información acerca de sus sistemas operativos.

Otras herramientas:  Advanced IP Scanner  Fing – para dispositivos móviles AUDITORÍA DE SEGURIDAD

Objetivos de Nmap En la fase de «Fingerprint», fase posterior a «Footprint» en las auditorías de seguridad informática, y en la que se deben analizar los servicios que se encuentran operando en un equipo, permite enumerar dichos servicios y recuperar información interesante para evaluar la topología de la red auditada.

Se deben conocer todos los tipos de escáneres para realizar la búsqueda más óptima y recuperar el máximo de información posible, así como los puertos y servicios más relevantes que existen. AUDITORÍA DE SEGURIDAD

Tras cada puerto abierto existirá un servicio operando Necesitaremos conocer los servicios más comunes y los puertos en los que escuchan. A modo de ejemplo a continuación te presentamos algunos de ellos: Servicios y puertos AUDITORÍA DE SEGURIDAD

Puertos más comunes AUDITORÍA DE SEGURIDAD

Puertos más comunes AUDITORÍA DE SEGURIDAD

Nmap: Comandos y parámetros A continuación veremos los parámetros que podremos utilizar en Nmap para el descubrimiento de servicios, con ejemplos sobre su funcionamiento Parámetro Descripción y Ejemplo -O El escaneo realizará fingerprint del sistema operativo con el objetivo de obtener la versión de éste en la o las máquinas remotas. Ejemplo: nmap –O <dirección IP> -sP Con este parámetro se analiza que equipos se encuentran activos en una red. Ejemplo: nmap –sP 192.168.0.0/24 -sS Se lanza un escaneo sobre varios equipos o una red. Permite obtener un listado de puertos abiertos de éstos. Ejemplo: nmap –sS 192.168.0.0/24 AUDITORÍA DE SEGURIDAD

Nmap: Comandos y parámetros Parámetro Descripción y Ejemplo -sN Permite realizar un escaneo de tipo Null Scan. Ejemplo: nmap –sN <dirección IP> -sF Permite realizar un escaneo de tipo FIN Scan. Ejemplo: nmap –sF <dirección IP> -sX Permite realizar un escaneo de tipo XMAS Scan. Ejemplo: nmap –sX <dirección IP> -p Se Indica sobre qué puertos se debe realizar el escaneo. Ejemplo: nmap –p 139,80,3389 <dirección IP>. Para indicar rangos especificamos el puerto de la siguiente manera 80-1500. Se realizará un análisis desde el puerto 80 hasta el 1500 AUDITORÍA DE SEGURIDAD

Nmap: Comandos y parámetros Parámetro Descripción y Ejemplo -A Este parámetro habilita la detección del sistema operativo, además de las versiones de servicios y del propio sistema. Ejemplo: nmap –A <dirección IP> -sI Permite realizar un escaneo de tipo idle. Ejemplo: nmap –P0 –p – -sI <dirección zombie> <dirección víctima>. Cabe destacar que la opción –p – permite realizar un escaneo sobre todos los puertos de la máquina, esta acción puede provocar que el escaneo se ralentice en gran medida -sV Obtener las versiones de los productos. Ejemplo: nmap –sV <dirección IP> AUDITORÍA DE SEGURIDAD

---

## 5.5 Enumeración con nmap

ENUMERACIÓN INTRODUCCIÓN ................................................................................................................................... 2 OBJETIVOS ........................................................................................................................................... 2 DESCUBRIMIENTO DE RED ................................................................................................................... 3 TRAZADO DE RUTAS ................................................................................................................................ 3 BARRIDO DE RED (NETWOORK SWEEP) ........................................................................................................ 4

```bash
PING SWEEP ....................................................................................................................................... 4
```

DESCUBRIMIENTO DE LA RED CON NMAP ............................................................................................... 5 ESCANEO DE PUERTOS ......................................................................................................................... 6 ESCANEO DE EQUIPOS UTILIZANDO SU NOMBRE O DIRECCIÓN IP ............................................................................ 6 REDIRIGIR LA SALIDA A UN ARCHIVO ................................................................................................................. 7 FILTRADO DE ARCHIVOS DE SALIDA ................................................................................................................... 7 ESCANEO DE MÚLTIPLES OBJETOS .................................................................................................................... 8 Escaneos múl4ples especiﬁcando las direcciones IP .......................................................................... 8 Escaneo de múl4ples equipos indicados en un archivo ...................................................................... 8 ESCANEOS CON PUERTOS ESPECÍFICOS .............................................................................................................. 9 Escanear sólo los 100 puertos más populares (-F) ............................................................................. 9 Escanear los n puertos más populares (--top-ports) ........................................................................... 9 Detallar los puertos a escanear (-p) ................................................................................................... 9 Escanear todos los puertos (-p1-65535 o -p-) ..................................................................................... 9 No comprobación de obje4vos (-Pn) .................................................................................................. 9 Mostrar sólo los puertos abiertos (--open) ....................................................................................... 10 Control de velocidad de escaneo ...................................................................................................... 10 Escanear los puertos de forma ascendente (-r) ................................................................................ 11 Rastreo de paquetes (--packet-trace) ............................................................................................... 11 Interacción en 4empo real ............................................................................................................... 11 Tipos de escaneo .............................................................................................................................. 12 IDENTIFICACIÓN DE SERVICIOS Y VERSIONES ...................................................................................... 12 Enumeración del Sistema Opera4vo ................................................................................................ 13 Enumeración de servicios ................................................................................................................. 13

INTRODUCCIÓN En la fase de reconocimiento, o footprin(ng, se obtendrá información relacionada con la organización objeto de la auditoria. Se podrá conocer las tecnologías y las aplicaciones que se u@lizan, el organigrama de la empresa, información acerca de los miembros, direcciones IP y de si@os web y puede que también se haya detectado algunas vulnerabilidades. En el peor de los casos, al menos se conocerá la URL correspondiente al si@o web principal de la empresa.

Esta fase se realizará de forma ac@va y por lo tanto implicará la interacción con el obje@vo para poder aprender más del mismo y encontrar posibles puntos de entrada. OBJETIVOS La salida de cada paso sirve para alimentar la siguiente. Por descontado, la secuencia no es inmutable y es bastante habitual que este proceso sea itera@vo, ya que en muchas ocasiones la información descubierta en un servicio puede ser ú@l para enumerar otros.

Los pasos por seguir son los siguientes

### 1. Descubrimiento de la red à se iden@ﬁcarán los equipos ac@vos de una red i se

hará un mapa. Normalmente se realizará un barrido de la red enviando paquetes de algún @po a un rango de direcciones (Network Sweep). Un ejemplo puede ser un barrido ping (Ping Sweep) a un segmento de red donde se ha iden@ﬁcado un servidor.

### 2. Escaneo de puertos à se buscan puertos abiertos, tanto UDP como TCP. Si se

encuentra un puerto abierto indicará que detrás abra un servicio a la escucha

### 3. Iden(ﬁcación de servicios y versiones à una vez iden@ﬁcados los puertos, se

pueden iden@ﬁcar los servicios que se ejecutan detrás de cada uno de ellos. Generalmente, los servicios Vpicos se ejecutan en los denominados puertos bien conocidos, pero el administrador puede conﬁgurarlos en puertos dis@ntos por razones de seguridad, por lo que en este paso será necesario interactuar con los mismos.

### 4. Iden(ﬁcación del Sistema Opera(vo à (OS Fingerprin@ng) es posible

iden@ﬁcar o presuponer cual es el SO de un equipo en función del comportamiento del mismo en la red. Esto se puede realizar de manera ac@va enviando paquetes, o de manera pasiva escuchando en la red para recibir paquetes procedentes del equipo en estudio.

### 5. Enumeración de servicios y búsqueda de vulnerabilidades à tras iden@ﬁcar

los servicios presentes en el equipo será necesario iden@ﬁcar las vulnerabilidades, que pueden ser vulnerabilidades conocidas de aplicaciones comerciales, errores de código en aplicaciones propias, malas conﬁguraciones o problemas con credenciales, etc.

### 6. Enumeración de usuarios à se debe intentar iden@ﬁcar a los usuarios

existentes en el sistema. Esto nos permi@rá conocer el patrón usado por la organización para generar nombres de usuario a par@r de los nombres de las personas que pertenecen a la organización y generar diccionarios a par@r de los nombres recopilados en esta fase y en la fase anterior (reconocimiento) para poderlos u@lizar en las siguientes fases.

DESCUBRIMIENTO DE RED TRAZADO DE RUTAS Una de las primeras acciones es determinar el perímetro (trazado) de la red, así como la ruta que siguen los paquetes desde que salen del equipo que ejecuta el escaneo hasta que llegan al equipo del obje@vo. De esta forma se pueden determinar los dis@ntos nodos intermedios por los que pasa y sus direcciones IP pueden servir para iden@ﬁcar el propietario de los mismos.

La mayor parte de los sistemas opera@vos incluyen herramientas de la línea de comandos que nos permiten realizar esta técnica de manera sencilla, como pueden ser traceroute (Linux) o tracert (Windows)

BARRIDO DE RED (Netwoork Sweep) Tras iden@ﬁcar una dirección IP correspondiente a un equipo en la red, es posible que existan otros equipos en el mismo rango de direcciones por lo que puede resultar interesante recorrer la red en busca de los mismos. Antes de realizar un barrido de la red es necesario que nos planteemos si es realimente necesario y evaluar los pros y los contra. Puede ser ú@l realizar un barrido en un segmento de la red o centrarse en las direcciones IP que se conocen para comenzar a iden@ﬁcar los equipos, ya que esto ayudará a disminuir la can@dad de paquetes que se transmiten por la red y disminuirá las posibilidades de que las acciones realizadas sean detectadas.

```bash
PING SWEEP
```

Se pueden encontrar equipos que estén ac@vos en la red enviando pe@ciones ICMP a todas las IP de un rango predeterminado. Puede que los equipos no respondan, aunque estén ac@vos por estar conﬁgurados para que no respondan ante un ping. También podemos encontrar disposi@vos, como un router o un cortafuegos que ﬁltren este @po de pe@ciones.

```bash
Ping sweep con ping
```

Podemos u@lizar la orden ping para enviar pe@ciones ping a. todas la direcciones IP de una red, u@lizando un bucle. Ejemplo

```bash
# for i in {1..254}; do(ping -c 1 10.10.10.$i | grep ”bytes from”); done
Ping sweep con fping
```

Fping es una aplicación que permite enviar paquetes ICMP, de manera similar a ping pero que ofrece mejor rendimiento al realizar el descubrimiento de equipos en una red. Fping permite indicar variar direcciones IP, o un rango de IP por lo que permite enumerar una red completa.

> **💡 Apunt Tècnic**
> Ejemplo

Enumerar toda la red indicando que solo hay un intento para cada una

```bash
# fping -g -r 1 10.10.10.0/24
Ping sweep con nmap
```

Nmap (Network Mapper) es una aplicación mul@plataforma y de código abierto que nos ofrece muchas funcionalidades de u@lidad. Se trata fundamentalmente de un escáner de puertos, cuyo propósito fundamental es enviar pe@ciones a uno o varios obje@vos y determinar el estado de los puertos a par@r de la información recibida.

U@liza las siguientes pe@ciones que u@lizan el protocolo ICMP

- PE à envía el paquete ICMP de @po 8 (echo request) a una dirección IP o a un

rango y espera una respuesta procedente de los equipos ac@vos. Este es el comportamiento por defecto del ping

- PP à envía una pe@ción ICMP de @po 13 (@mestamp request) y espera una

respuesta de @po 14 (@mestamp reply) procedente de los equipos ac@vos. Este @po de pe@ciones se suelen u@lizar para sincronización

- PM à envía una pe@ción ICMP de @po 17 (netmask request) y espera que los

equipos ac@vos devuelvan una respuesta de @po 18 (netmask reply). Estas pe@ciones se u@lizan para encontrar la máscara de red. Por defecto nmap intentará encontrar los puertos abiertos en cada uno de los equipos que detecte ac@vos, para evitar dicho comportamiento se u@liza el parámetro -sn Ejemplo

```bash
# nmap -sn -PE 10.10.10.0/24
```

DESCUBRIMIENTO DE LA RED CON NMAP Nmap puede realizar los siguientes escaneos

- ICMP echo
- ICMP @mestamp
- ARP
- TCP SYN al puerto 443
- TCP ACK al puerto 80

Las pe@ciones se deben ejecutar desde el usuario root Se u@lizará el parámetro –send-ip cuando las direcciones se encuentren en la red local ya que automá@camente genera un escaneo ARP y no envía paquetes IP. Es conveniente guardar los barridos en un archivo para su posterior explotación.

Ejemplos

```bash
# nmap -sn 10.10.10.0/24 -oA resultado_nmap
# nmap -sn 10.10.10.0/24 –exclude 10.10.10.4 -oA resultado_nmap
```

ESCANEO DE PUERTOS Una vez ﬁnalizada la fase anterior es el momento de enumerar los equipos de servicios expuestos. Cada nuevo paso aumenta el grado de hos@lidad y el ruido generado en la red, lo que incrementa las posibilidades de que las acciones sean detectadas.

El escaneo de puertos consiste en descubrir que puertos están abiertos como paso previo a averiguar los servicios que se están ejecutando. Esto se puede hacer de manera manual intentando abrir una conexión a los puertos con herramientas como telnet o con nmap. Escaneo de equipos uClizando su nombre o dirección IP Un escaneo por defecto realiza las siguientes acciones

### 1. Si se proporciona el nombre de equipo, u@liza la resolución DNS para iden@ﬁcar

la dirección IP.

### 2. Intenta determinar si es equipo está ac@vo, para lo que envía una pe@ción ICMP

echo y un paquete TCP ACK al puerto 80. Si no recibe respuesta ﬁnaliza la ejecución. Este parámetro se puede omi@r u@lizando el parámetro -Pn

- Se hace una resolución de DNS inversa (de dirección IP a nombre de equipo).

Este paso se puede omi@r con -n

### 4. Escanea los 1000 primeros puertos TCP indicados en el archivo nmap-services

### 5. Muestra los resultados en pantalla, es decir, el número de puerto, el estado del

mismo y el servicio por defecto.

Al analizar los resultados hay que tener en cuenta que puede que el servicio listado puede no coincidir con el instalado y por lo tanto es conveniente profundizar para iden@ﬁcar que servicios están realmente corriendo en la máquina. Ejemplo

```bash
# nmap scanme.nmap.org
# nmap 45.33.32.156
```

Si queremos que muestre más información

```bash
# nmap -v scanme.nmap.org
```

Redirigir la salida a un archivo Redirigir la salida a una archivo permite trabajar con la información mostrada en pantalla posteriormente, por ejemplo

- Es ú@l para su análisis posterior oﬄine.
- Es una forma de tener la información para u@lizarla posteriormente para

realizar informes.

- Los archivos se pueden procesar para extraer, por ejemplo, una lista de

direcciones IP de los equipos ac@vos y de los puertos abiertos en cada uno de ellos. La salida se puede almacenar en diferentes formatos según el parámetro u@lizado

- oN nombre_archivo à la información se almacena con formato parecido al

mostrado por pantalla

- oG nombre_archivo àalmacena la información op@mizada para búsquedas

con el comando grep

- oX nombre_archivo à almacena la información en formato xml
- oA nombre_equipo à se crean tres archivos con los formatos anteriores. Para

diferenciarlos se añaden las extensiones nmap, gnmap y xml Ejemplo

```bash
# nmap scanme.nmap.org -oA escaneo
```

Filtrado de archivos de salida Una vez se han generado los archivos, estos se pueden ﬁltrar para crear otros que contengan únicamente los datos que nos interesan.

Para ello podemos u@lizar por ejemplo el comando cat para ver el contenido del archivo Ejemplo

```bash
# cat escaneo.gnmap
```

Podemos u@lizar los comandos grep y cut para seleccionar únicamente las direcciones IP y redirigir la salida. Ejemplo

```bash
# grep Up escaneo.gnmap | cut -d “ “ -f 2 | sort -u > listaIP
```

Escaneo de múlCples objetos Con nmap se puede escanear más de un equipo en la misma ejecución Escaneos múl2ples especiﬁcando las direcciones IP Se puede indicar una red o subred completa indicando la dirección IP y la máscara de la red. Ejemplo

```bash
# nmap 10.10.10.0/24
```

Cuando se conocen las direcciones IP concretas se pueden especiﬁcar en el escaneo Ejemplo

```bash
# nmap 10.10.10.2 10.10.10.6 10.10.10.17
```

En el caso de que las direcciones IP compartan un octeto Ejemplo

```bash
# nmap 10.10.10.2,6,17
```

Rango de direcciones IP consecu@vas Ejemplo

```bash
# namp 10.10.10.2-5
```

Escaneo de múl2ples equipos indicados en un archivo Para escanear múl@ples equipos indicados en un archivo se u@liza el parámetro -iL Ejemplo

```bash
# nmap -iL listaIP
```

Escaneos con puertos especíﬁcos Nmap por defecto escanea los 1000 puertos más u@lizados, pero este escaneo se puede modiﬁcar con diferentes parámetros, para aumentar o reducir la can@dad de puertos a escanear. Escanear sólo los 100 puertos más populares (-F) De este modo el escaneo será más rápido Ejemplo

```bash
# nmap -F scanme.nmap.org
```

Escanear los n puertos más populares (--top-ports) Escaneará los n primeros puertos que encuentre en el archivo nmap-services Ejemplo

```bash
# nmap –top-ports 50 scanme.nmamp.org
```

Detallar los puertos a escanear (-p) Podemos indicar cuales son los puertos que queremos escanear con el parámetro -p Ejemplo

```bash
# nmap -p21 scanme.nmap.org
```

Este parámetro nos permite introducir una lista de puertos Ejemplos

```bash
# nmap -p21,22,23 scanme.nmap.org
# nmap -p21-25,45,60,80,443 scanme.nmap.org
```

Escanear todos los puertos (-p1-65535 o -p-) En algunas ocasiones necesitamos escanear más de 1000 puertos o todos los puertos de un equipo especiﬁco Ejemplos

```bash
# nmap -p1-65535 10.10.10.2
# nmap -p- 10.10.10.2
```

No comprobación de obje2vos (-Pn) Con este parámetro considera todos los equipos como ac@vos y si uno no responde no ﬁnaliza la ejecución de nmap. Ejemplo

```bash
# nmap -Pn -iL listaIP
```

Mostrar sólo los puertos abiertos (--open) Se puede escanear solo el estado que nos interese en un puerto Ejemplo

```bash
# nmap –open –top-ports 20 scanme.nmap.org
```

Control de velocidad de escaneo Se puede modiﬁcar la velocidad por defecto a la que se envían los paquetes usando el parámetro -T, seguido de un número entre 0 y 5 que indicará la velocidad. ü O (Paranoid) se trata de un escaneo extremadamente lento con el propósito de evitar la detección por parte de los disposi@vos IDS. Funciona sin enviar paquetes en paralelo y envía un paquete cada 5 minutos.

ü 1 (Sneaky) es un escaneo bastante sigiloso, no se transmiten paquetes en paralelo y envía paquetes cada 15 segundos. ü 2 (Polite) no transmite en paralelo, envía paquetes cada 0.4 segundos. Esta velocidad es recomendable si se quiere reducir la carga de la red y disminuir las posibilidades de provocar bloqueos en los servicios escaneados.

ü 3 (Normal) esta es la velocidad por defecto de nmap, se envían múl@ples paquetes al mismo @empo a diferentes puertos, es decir, se envían paquetes en paralelo. Aunque no suele provocar sobrecargas en los servicios escaneados ni en la red, al presentar mayor velocidad aumenta las posibilidades de detección y es posible que se descarten algunos paquetes. En caso de no obtener respuesta del equipo escaneado podría ser conveniente de ejecutar otro escaneo con una menor velocidad.

ü 4 (Aggresive) realiza un escaneo en paralelo y espera la respuesta únicamente 1.25 segundos ü 5 (Insane) realiza un escaneo en paralelo y espera la respuesta únicamente 0.3 segundos para los paquetes que envía. Las dos úl@mas velocidades solo se deben aplicar en redes muy rápidas ya que pueden tener un gran impacto en la red y bloquear los servicios escaneados.

Existen otros parámetros que permiten ajustar de manera más precisa la velocidad de escaneo: ü –host_(meout ü – max_rS_(meout

ü –min_rS_(meout ü –ini(al_rS_(meout @empo de espera de los primeros paquetes ü – max_parallelism ü --min_parallelism ü –scan_delay @empo de espera entre una y otra prueba Existen más parámetros que podemos estudiar en hups://nmap.org/book/man- preformance.html Escanear los puertos de forma ascendente (-r) Por defecto nmap realiza el escaneo de forma aleatoria, con el parámetro -r realizará el escaneo de forma más ordenada, aunque se recomienda no hacerlo.

Rastreo de paquetes (--packet-trace) Nmap ofrece la posibilidad de mostrar la información en @empo real sobre los paquetes que se intercambian en la comunicación. Con el parámetro –packet-trace se puede obtener información sobre las direcciones IP y los puertos de origen y des@no de los paquetes, el protocolo u@lizado, qué bits de control @ene ac@vados y el número de secuencia entre otros.

Interacción en 2empo real Es posible interactuar en @empo real con la herramienta, sin necesidad de tener que reiniciarla. La mayor parte de las teclas sirven para mostrar el estatus del escaneo pero también para modiﬁcar la información que aparecerá en pantalla, mostrando más o menos si se u@lizan en mayúsculas o en minúsculas. Como las siguientes

- ¿

muestra la pantalla de ayuda

- v

aumenta un 1 nivel la can@dad de información proporcionada

- MAYÚSCULAS + v

disminuye en 1 nivel la can@dad de información proporcionada

- p

ac@va el rastreo con –packet-trace

- MAYÚSCULAS + p

desac@va el rastreo

- d

aumenta un nivel el debug

- MAYÚSCULAS + d

disminuye el nivel de debug en 1

Tipos de escaneo Connect scan (-sT) Con este parámetro se realiza un inicio de conexión normal, llevando a cabo el three- way handshake. Si se completa, se marca el puerto como abierto y se cierra la conexión u@lizando el paquete RST. Este @po de escaneo es más lento que otros y puede dejar rastro en los ﬁcheros logs en el caso de que el equipo víc@ma esté registrando conexiones completas.

Ejemplo

```bash
# nmap -Pn -sT scanme.nmap.org
```

Syn scan (-sS) Este es el escaneo que ejecuta nmap por defecto, half-open scan. Con este escaneo se intenta realizar una conexión con el equipo remoto y @ene menos posibilidades de ser detectado por el obje@vo, dado que al no completar la conexión con el servicio no se comunicará la conexión entrante.

Ejemplo

```bash
# nmap -Pn -sS scanme.nmap.org
```

Ack scan (-sA) Este @po de escaneo se u@liza para iden@ﬁcar si se está u@lizando un cortafuegos (ﬁrewall). Ejemplo

```bash
# nmap -Pn -sA 10.10.10.4
```

IDENTIFICACIÓN DE SERVICIOS Y VERSIONES Después de localizar los equipos ac@vos y los puertos abiertos en cada uno de ellos, será necesario iden@ﬁcar los servicios y los sistemas opera@vos. Muchas veces localizados los servicios se tendrá una pista sobre el sistema opera@vo u@lizado.

Una vez que se iden@ﬁquen los servicios, sus versiones y los sistemas opera@vos, se podrá buscar vulnerabilidades en los mismos. Esto se puede conseguir con nmap ejecutando el parámetro -sV Ejemplo

```bash
# nmap -Pn -sV -p22,80,9929,31337 sacnme.namp.org
```

Enumeración del Sistema Opera2vo Puede ser importante determinar los sistemas opera@vos u@lizados para localizar las posibles vulnerabilidades. Mediante el análisis de las cabeceras TCP, se puede determinar el sistema opera@vo u@lizado, ya que el valor del TTL será diferente.

Detección del sistema opera>vo con nmap Para ello u@lizaremos el parámetro -O Ejemplo

```bash
# nmap -O 10.10.0.2
```

Enumeración de servicios Una vez iden@ﬁcados los servicios que se ejecutan en el sistema podremos enumerar u iden@ﬁcar las posibles vulnerabilidades. Dado que no todas las vulnerabilidades están documentadas, habrá que interactuar con los sistemas, para descubrir errores de conﬁguración que puedan ayudar a lograr un acceso no autorizado o localizar archivos con información de u@lidad

---

## 5.6 Scripts amb nmap

ESCANEIG NMAP AMB SCRIPTS CET HE

•Llenguatge de programació Lua •-sC o --script •/usr/share/nmap/scripts Motor de scripting NSE per a NMAP q Descobriment de xarxa: recerca de dades basats en el domini del destí (whois), consulta a RIP (propietari de la ip), permet fer consultes SNMP, accedir a llistes de recursos compartits en SMB (Microsoft) q Detecció de versions més sofisticada: pot reconèixer més serveis que de la forma tradicional q Detecció de vulnerabilitats: gràcies a la Comunitat de Nmap hi ha scripts per a detectar vulnerabilitats només són publicades.

q Detecció de backdoors: aquest tipus de malware i alguns “cucs” deixa portes obertes als atacants i existeixen scrips que els poden localitzat q Explotació de vulnerabilitats: no son tant potents com els marcs d’explotació com per exemple METAEXPLOIT Tasques que pot realitzar amb NSE: (https://nmap.org/book/nse.html)

•Nmap –script telnet-brute •Els scripts dependen de l’estat del port, podent-se executar o no depenent del seu estat -sC (--script) •Default à “-sC” o bé amb “--script default” , executa tots els scripts de a categoria “default” •Auth à Bypass d’autenticació, s’ocupen de les credencials d’autenticació en el host destí, p.e: oracle-users (buscar exemples en internet) •Brute à Atacs de força bruta per esbrinar les credencials de sistemes remots, p.e: http-brute, oracle-brute, snmp-brute, etc.

•Dos à per a provar denegació de serveis en sistemes. •Exploit à Per a explotar una vulnerabilitat coneguda, p.e: http-shellshock •Safe à scripts que es van crear per a no col·lapsar serveis , ni ample de banda o altres recursos o explotar forats de seguretat. •Intrusive à Scripts que no estan en la categoria de segurs. Maliciosos, o consumeixen recursos (ample de banda, temps de CPU, etc.) •Malware à Buscar malware en hosts de destí •Version à Scripts de detecció de versions més sofisticats que el paràmetre –sV (per a utilitzar-los és necessàri indicar el paràmetre de versions -sV) •Vuln à Scripts d’escaneig de vulnerabilitats conegudes i específiques Categoríes à https://nmap.org/nsedoc/ •Execució de diferents scripts posant noms de scripts separats per comes, gategories o directoris, p.e.: --script vuln,default -- script “per defecte y segur”

•Si modifiques els fitxers de la base de dades (carpetes de fitxers de la basede dades de NSE) o modifiques les categories d’algun script cal actualitzar la BBDD •nmap --script-updatedb Actualitzant la base de dades de scripts •# locate * .nse | grep Telnet Buscant scripts •# nmap -sS -p23 10.0.0.1 --script telnet-brute •# nmap -sU -p53 10.0.0.1 --script “dns-*” Executant scripts

local stdnse = require "stdnse“ local strbuf = require "strbuf“ local string = require "string“ local brute = require "brute“ description = [[ Performs brute-force password auditing against telnet servers. ]] --- -- @usage -- nmap -p 23 --script telnet-brute --script-args userdb=myusers.lst,passdb=mypwds.lst,telnet-brute.timeout=8s <target> -- -- @output-- 23/tcp open telnet author = "nnposter“ license = "Same as Nmap--See https://nmap.org/book/man-legal.html“

```bash
categories = {'brute', 'intrusive'}
```

C:\Program Files (x86)\Nmap\scripts>nmap --script-help smb-brute.nse Starting Nmap 7.92 ( https://nmap.org ) at-10 17:07 Hora estßndar romance smb-brute Categories: intrusive brute https://nmap.org/nsedoc/scripts/smb-brute.html Attempts to guess username/password combinations over SMB, storing discovered combinations for use in other scripts. Every attempt will be made to get a valid list of users and to verify each username before actually using them. When a username is discovered, besides being printed, it is also saved in the Nmap registry so other Nmap scripts can use it. That means that if you're going to run <code>smb-brute.nse</code>, you should run other <code>smb</code> scripts you want. This checks passwords in a case-insensitive way, determining case after a password is found, for Windows versions before Vista.

Treballant amb NSE § Busca amb el comandament “locate” tots els fitxers que acaben en “.nse” § Canvia a la carpeta de treball “/usr/share/nmap/script” § Localitza l’arxiu “script.db” amb “ls -l script.db”, es tracta de la base de dades dels scripts de NSE de nmap § Visualitza el contingut del fitxer amb el comandament “less script.db” § Busca la en la base de dades la entrada del fitxer “bitcoin-getaddr.nse” i indica en quines categories de scripts es troba catalogat § Llista tots els scripts que tinguen a vore amb ssh “ls -l | grep ssh” § Analitza el contingut del script “ssh-hostkey.nse” amb el comandament “less” § Busca les categories escrivint /cate i la tecla n per a continuar amb la búsqueda (captura les categories) § Executa en la línia de comandaments “nmap --script-help ssh-hostkey.nse”

§ Executar tots els scripts per defecte a la vostra màquina de kali sobre el port 22/SSH: 1) “Nmap -sS -n -Pn 172.20.0.5 -p22 -sC”

- “Nmap -sS -n -Pn 172.20.0.5 -p22 -sC -vvv”

§ Segons l’ajuda del script, que ens ha tornat el primer i el segon comandament?

§ Els escanejos de scripts es realitzen per als ports per defecte, a menys que s’executen amb l’opció de detecció de versions. § Si no indiquem el port adequat i amb el paràmetre d’identificació de serveis no executarà els scripts que volem per al servei § P.E: nmap --script ssh-* 172.20.0.5 -p443 à en eixe port es troba per defecte el servei https i no ssh i per tant no executarà cap script § P.E: nmap --script ssh-* 172.20.0.5 -p443 -sV à amb aquest comandament identificarà el servei i la versió d’ell i per tant detectarà el servei ssh i si realment es troba escoltant en eixe port, executarà els scripts

§ *-brute.nse à Atacs de diccionari o de força bruta al servei § *-info-nse à Informació sobre el servei § dns-recursión à Comprova si DNS permet la recursió § dns-zone-transferà Comprova si DNS permet la transferència de zones § http-slowloris-check à Comprova si el servidor web és vulnerable per Slowloris sense llençar l’atac Dos § ms-sql-infoà versió de la instancia MSSQL y configuracions § ms-sql-dump-hashesà hashes de contrasenyes del servei MSSQL § nbstat à nom de Netbios y adreça MAC del host de destinació que estan connectats, si augmentem la vervositat trau tots.

§ smb-enum-users à Usuaris del host Windows de destinació, pot ser remot i es pot utilitzar per a fer probes de penetració § smb-enum-shares à Ús compartit del host de Windows de destinació

- ftp-brute
- ftp-anon à FTP anònims
- ms-sql-brute
- mysql-brute
- oracle-sid-brute
- snmp-brute à noms de les comunitats SNMP
- telnet-brute
- vmauthd-brute à VMWARE
- vnc-brute

Alguns scripts útils: *-brute.nse

- A banda dels paràmetres mencionats, NMAP te un paràmetre

molt útil: -A

- Esta opció permet opcions avançades i agressives addicionals.

Actualment permet: 1.Detecció del S.O. 2.L’escaneig de versions (-sV) Escaneig amb el paràmetre -A

---

## ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — exercici de nmap1**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 5.2 — exercici nmap 2**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 5.3 — Scripts amb nmap**
> Vamos a hacer un estudio de los scripts más utilizados.
>
> Estudia la utilidad de cada script y propon un ejemplo de cada caso.
>
> Veamos una serie de scripts que nos permiten escanear la red en busca de vulnerabilidades
>
> - Auth ejecuta todos los scripts disponibles para la autentificación. Con esta herramienta se detectan los usuarios ya sean anónimos (no se requiere usuario y contraseña para entrar al sistema o con permisos de superusuario.
>
> Ejemplo
>
> ```bash
> # sudo nmap -f-sS -SV-Pn --script auth ip
> ```
>
> - Default ejecuta los scripts por defecto de la herramienta
>
> Ejemplo
>
> ```bash
> # sudo nmap -f-sS -SV-Pn --script default ip
> ```
>
> Discovery: recupera información del target o víctima
>
> External: script para utilizar recursos externos
>
> Intrusive: utiliza scripts que son considerados intrusivos para la víctima
>
> Indicios de la presencia de malware: revisa si hay conexiones abiertas por códigos maliciosos o backdoors
>
> Safe: ejecuta scripts que no son intrusivos
>
> Vuln: descubre las vulnerabilidades más conocidas
>
> Ejemplo
>
> ```bash
> # sudo nmap -f --script vuln ip
> ```
>
> All: ejecuta absolutamente todos los scripts con extensión NSE disponibles
