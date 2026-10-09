---
layout: default
title: "UD11 — Explotación de vulnerabilidades · Temari Complet"
course_root: ".."
badge: "CE Ciberseguretat (CETI) · UT12 Completa"
prev_url: "../ut11/ut1101.html"
prev_label: "⬅️ 10.1 Ingenieria social"
next_url: "../ut12/ut1201.html"
next_label: "11.1 Introducción ➡️"
---

# 📘 UD11 — Explotación de vulnerabilidades (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**11.1 Introducción**](./ut1201.md)

---

# 11.1 Introducción

Tema 7. Auditoria de seguretat: Explotació de vulnerabilitats. Hacking ètic (HE) 1r CIBER Alicia Ferrando

Hacking ètic 1r CIBER La informació continguda en aquesta presentació només és per a fins educatius. EL PROFESSORAT DEL CURS D'ESPECIALITZACIÓ EN CIBERSEGURETAT EN ENTORNS DE LES TECNOLOGIES DE LA INFORMACIÓ I EL CENTRE EDUCATIU NO ES FAN RESPONSABLES DE L'ÚS INDEGUT D'AQUESTA INFORMACIÓ.

ÍNDEX Hacking ètic 1r CIBER ➤AUDITORIA DE SEGURETAT. ○ INTRODUCCIÓ. ○ FASES DEL PROCÉS. ➤EXPLOTACIÓ DE VULNERABILITATS. ○ CICLE DE VIDA D’UN CIBERATAC A UN SISTEMA. ○ INTRODUCCIÓ. ○ DEFINICIÓ. ○ CARACTERÍSTIQUES. ○ BENEFICIS. ○ RISCOS. ○ OBJECTIUS A EXPLOTAR.

○ TIPUS DE VULNERABILITATS. ○ TIPUS D’EXPLOTACIÓ. ○ EXPLOIT. ○ PAYLOAD. ○ FERRAMENTES.

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

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS CICLE DE VIDA D’UN CIBERATAC A UN SISTEMA

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS INTRODUCCIÓ ● Una vegada hem obtingut tota la informació possible de la víctima, gràcies a les fases anteriors de l’auditoria, passem a explotar les vulnerabilitats del sistema per intentar fer-nos amb el control de la màquina i els privilegis d'administrador.

● Recordem les anteriors etapes: ○ Footprinting: Búsqueda d’informació pública de l’organització objectiu ⇨ Google, Bing, Anubis, Shodan (IoT) i Maltego. ○ Fingerprinting: Búsqueda d’objectius concrets de l’organització ⇨Nmap i Hping3 com a ferramentes actives i Wireshark com a passiva.

○ Anàlisi de vulnerabilitats: Descobriment d’aplicacions o serveis de l’objectiu amb vulnerabilitats ⇨Nessus i OpenVAS.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS DEFINICIÓ ● L'explotació de vulnerabilitats és la fase d’atac, on l’auditor o intrús informàtic ha de buscar aprofitar-se d'alguna de les vulnerabilitats identificades en fases anteriors, per aconseguir la intrusió en el sistema objectiu.

○ Escalada de privilegis. ○ Explotació de vulnerabilitats. ○ Denegació de serveis. ○ Manteniment de l’accés.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS DEFINICIÓ ● L'explotació de vulnerabilitats és una etapa altament important, ja que és ací on l’auditor de seguretat li demostra al client que les vulnerabilitats identificades i reportades en les fases anteriors de l’auditoria de seguretat poden afectar la integritat, confidencialitat i disponibilitat dels sistemes d’informació empresarials.

● Quan s’execute un procés d’explotació (sempre executat amb el permís de l’organització auditada), el client entendrà que les vulnerabilitats no sols es reporten en un informe tècnic, sinó que també es poden explotar, aconseguint un atac real, però controlat, en els sistemes informàtics de l’organització auditada.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS CARACTERÍSTIQUES ● La fase d’explotació de vulnerabilitats es caracteritza per: ○ És un procés d'atac pur contra l’objectiu auditat. ○ Hi ha un alt risc que el sistema víctima perda els seus nivells d'Integritat, Disponibilitat i Confidencialitat.

○ L’èxit de l'explotació dependrà de la informació trobada i les ferramentes executades en les anteriors fases de l'auditoria. ○ Un procés d'explotació pot causar una denegació de serveis. ○ És la fase més perillosa.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS BENEFICIS ● La fase d’explotació de vulnerabilitats té els beneficis següents: ○ No queden dubtes respecte a les vulnerabilitats reportades, ja que aquestes deixen de ser supostos i registres en informes, per convertir- se en un risc i amenaça real.

○ Posa a prova l'eficàcia dels sistemes de control i protecció actuals. ○ Registra un estat real de la seguretat de la informació en una empresa o organització, la qual no se suporta en supostos, sinó en evidències reals.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS RISCOS ● La fase d’explotació de vulnerabilitats té els riscos següents, que han de ser estimats i analitzats per l’equip d’auditors de seguretat: ○ Caigudes de serveis. ○ Caigudes del sistema.

○ Denegació de serveis. ○ Pèrdues de confidencialitat de les dades. ○ Pèrdues de disponibilitat. ○ Exposició d’informació confidencial. ○ Impactes en l’estabilitat del sistema avaluat. ● Els riscos s'han de registrar de manera clara en el contrat definit entre el client i l'auditor abans de realitzar les proves de seguretat.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS OBJECTIUS A EXPLOTAR ● De forma similar a la fase d’anàlisi de vulnerabilitats, es pot realitzar una explotació als elements següents: ○ Servidors. ○ Estacions de treball. ○ Switches i routers.

○ Llocs web. ○ Serveis de xarxa. ○ Dispositius mòbils. ○ Bases de dades. ○ Altres.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS TIPUS DE VULNERABILITATS ● A continuació es descriuen alguns tipus de vulnerabilitats d’aplicacions, com poden ser servidors FTP, servidors web, servidors ssh o aplicacions d’escriptori

○ Desbordament de buffer. ○ Race condition. ○ Integer overflow. ○ String format. ○ Altres vulnerabilitats.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS TIPUS DE VULNERABILITATS: DESBORDAMENT DE BUFFER ● Aquesta és potser la vulnerabilitat més clàssica i històrica de totes. ● El desbordament de buffer és un error que es produeix quan s'intenta copiar una quantitat de dades més gran que la zona de dades que tenim reservada per emmagatzemar.

● És a dir, imagina que es té un buffer de 60 bytes per emmagatzemar informació i intentem emmagatzemar bytes. Si això no es controla, els bytes, sobreescriuran els 60 bytes del buffer destí i els 20 bytes restants s'escriuran en posicions contigües de memòria al buffer destí.

● Les conseqüències d'escriure a una zona de memòria imprevista poden ser impredictibles.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS TIPUS DE VULNERABILITATS: DESBORDAMENT DE BUFFER ● Aquests tipus de vulnerabilitats poden provocar la parada d'un servei (denegació de servei) o, fins i tot, l'execució de codi arbitrari, és a dir, poder agafar el control de la màquina.

● La millor manera d'evitar els desbordaments de buffer és mitjançant una programació segura, tenint molta cura sempre que s'escriga en un buffer, per no sobrepassar-lo. ● Els programadors que usen C han d'evitar utilitzar funcions que no comproven els límits, com poden ser: strcpy(), strcat(), sprintf(), scanf(), sscanf(), fscanf(), vfscanf(), vsprintf, vscanf(), vsscanf (), streadd(), strecpy(), strtrns().

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS TIPUS DE VULNERABILITATS: RACE CONDITION ● Race Condition és una vulnerabilitat que ocorre quan un sistema que realitza tasques en una seqüència específica és forçat a realitzar dues o més operacions simultàniament.

● Això permet que els atacants prenguen avantatge de l'interval de temps que es dóna entre l'inici d'un servei i el moment en què un control de seguretat fa efecte. ● Amb les Race Condition, els atacants poden accedir a recursos compartits com a bases de dades, arxius i objectes en codi per modificar- los simultàniament i/o afectar la integritat del recurs.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS TIPUS DE VULNERABILITATS: INTEGER OVERFLOW ● Els errors per ‘Integer Overflow’ generalment succeeixen a l’intentar emmagatzemar un valor massa gran a la variable associada generant un resultat inesperat (valors negatius, valors inferiors...).

● Aquest tipus d'error pot tenir conseqüències greus quan el valor que genera l'integer overflow és resultat d'alguna entrada d'usuari (és a dir, que el pot controlar) i quan, d'aquest valor, es prenen decisions de seguretat.

EXPLOTACIÓ DE VULNERABILITATS TIPUS DE VULNERABILITATS: STRING FORMAT ● String Format és una vulnerabilitat que es produeix quan l'aplicació avalua les dades enviades a una cadena com una ordre i no es valida bé l'entrada. ●

```bash
Per exemple: printf (argv[1]);
```

Si l'atacant passa com a primer argument, una cadena que continga “%x”, podria arribar a llegir dades de la pila.

EXPLOTACIÓ DE VULNERABILITATS TIPUS DE VULNERABILITATS: ALTRES VULNERABILITATS Existeixen llistes que ens classifiquen aquestes vulnerabilitats: ● MITRE Top 25: Vulnerabilitats relacionades amb errors de programació. MITRE Top 25 ● OWASP Top 10: Vulnerabilitats de seguretat més crítiques en aplicacions web.

OWASP Top 10 ● SANS Top 20: Vulnerabilitats que requereixen solució immediata, com poden ser forats de seguretat en SO, antivirus i programes per a backups, a més de vulnerabilitats en components importants, com routers i switches. SANS TOP 20

EXPLOTACIÓ DE VULNERABILITATS TIPUS D’EXPLOTACIÓ ● L'explotació de sistemes pot ser altament complexa, però hi ha frameworks que simplifiquen la tasca. És el cas de Metasploit framework, que és una de les ferramentes d'auditoria més utilitzada, potent i versàtil. ● A continuació s'enumeren els diferents tipus d’explotació, entre altres

○ Explotació remota amb connectivitat directa entre màquines. ○ Explotació local de vulnerabilitats, generalment per aconseguir elevar privilegis a la màquina. ○ Explotació a través d'atacs al lloc del client: Client-Side Attacks. Hacking ètic 1r CIBER

EXPLOTACIÓ DE VULNERABILITATS TIPUS D’EXPLOTACIÓ: REMOTA AMB CONNECTIVITAT DIRECTA En una explotació remota amb connectivitat directa, l'escenari és el següent: ● La màquina A és la de l'atacant i té connectivitat amb la màquina B, que és la màquina d'una organització que té un servidor FTP, web o SSH, per exemple.

● El software FTP, Web o SSH de la màquina B és vulnerable a alguna vulnerabilitat coneguda, i simplement per tenir connectivitat l'atacant de la màquina A podria llançar un exploit contra la màquina B i agafar el control d'aquesta màquina. Hacking ètic 1r CIBER

EXPLOTACIÓ DE VULNERABILITATS TIPUS D’EXPLOTACIÓ: LOCAL ● L’explotació local de vulnerabilitats permet a un usuari sense privilegi o amb privilegis reduïts poder saltar els mecanismes de seguretat d'un sistema operatiu amb l'objectiu de poder executar accions privilegiades.

● ⇩Com es realitza? ⇩ ● Una vegada es dispose d'una sessió remota, es pot executar un exploit local a través d'aquesta sessió. ● És un tipus d’explotació molt potent, ja que amb l'anterior pot ser que aconseguim només el privilegi de l'usuari “normal”, però amb aquest tipus de vulnerabilitats s'aconsegueix obtenir el màxim privilegi, per exemple “System” a Windows o “root” a Linux.

Hacking ètic 1r CIBER

EXPLOTACIÓ DE VULNERABILITATS TIPUS D’EXPLOTACIÓ: CLIENT-SIDE ATTACKS ● Els Client-Side Attacks són atacs que són duts a terme al lloc del client, és a dir, és un usuari el que ha de fer una petició a un servidor controlat per un atacant perquè aquest li torni una resposta maliciosa. Per exemple, un exploit.

Hacking ètic 1r CIBER

EXPLOTACIÓ DE VULNERABILITATS TIPUS D’EXPLOTACIÓ: CLIENT-SIDE ATTACKS ● L'exemple bàsic seria el següent

- L'usuari normal navega per Internet tranquil·lament.
- Accedeix a un fòrum i llegeix un missatge que crida l'atenció.

### 3. En aquest missatge s'anuncia un producte que us interessa i hi ha un link per accedir

a més informació.

- Quan l'usuari punxa sobre el link, el navegador es dirigeix a una altra ubicació.

### 5. El lloc web al qual s'accedeix pot ser legítim, però suposem que algú de manera

malintencionada ha col·locat un codi HTML en aquest lloc que obliga el navegador de l'usuari a fer una petició a un altre domini. Hacking ètic 1r CIBER

EXPLOTACIÓ DE VULNERABILITATS TIPUS D’EXPLOTACIÓ: CLIENT-SIDE ATTACKS ● L'exemple bàsic seria el següent

- El domini en qüestió és maliciós i el gestiona l'atacant.

### 7. En rebre la petició, la qual s'ha fet de formar transparent, s'envia un HTML

maliciós, que conté un exploit per a una versió concreta del navegador de la víctima.

### 8. Quan el navegador executa el fitxer HTML es troba que l'exploit aprofita la

vulnerabilitat i s'aconsegueix executar codi arbitrari de manera remota. Hacking ètic 1r CIBER

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS EXPLOIT ● Els exploits són programes maliciosos (malware) que contenen dades o codis executables, que s'aprofiten de les vulnerabilitats del software. ● És un codi especialment preparat per explotar una vulnerabilitat per a la qual

○ Hi pot haver un parxe que soluciona la vulnerabilitat. ○ No hi ha un parxe per solucionar la vulnerabilitat, cas denominat 0-day. ● Normalment, són petits programes en què l'atacant només ha d'especificar: ○ IP destí. ○ Port destí. ○ Altres paràmetres propis de la vulnerabilitat.

○ Payload.

Hacking ètic 1r CIBER EXPLOTACIÓ DE VULNERABILITATS EXPLOIT: TIPUS ● Els exploits poden ser de dos tipus: ○ Actius: Són els exploits que exploten una màquina objectiu, mitjançant força bruta, fins injectar el payload o trobar un error. ○ Passius: Són els exploits que esperen a que una màquina víctima es connecte a la màquina host per a explotar-los (sol ser a través dels navegadors o clients FTP).

EXPLOTACIÓ DE VULNERABILITATS PAYLOAD ● Mentre que amb l'exploit s'explota una vulnerabilitat del programa, amb el payload s'executa una acció profitosa per a l'atacant. ● El payload és un altre fragment de codi que va sempre associat a l'exploit. ● Un exemple d’explotació podria ser

○ Executem un exploit en un sistema vulnerable. ○ A aquest exploit li associem un payload que crearà un usuari administrador al sistema amb credencials conegudes.

EXPLOTACIÓ DE VULNERABILITATS FERRAMENTES ● Metasploit Framework: Permet l'explotació de vulnerabilitats a diferents sistemes operatius i facilita l'execució d'exploits aprofitant vulnerabilitats conegudes. Compta amb una gran comunitat donant suport. ● Cobalt Strike: Producte de proves de penetració, de pagament, que permet a un atacant desplegar un agent anomenat "Beacon", que té una gran quantitat de funcionalitats per a l'atacant: execució d'ordres, registre de claus, transferència de fitxers, escalada de privilegis, exploració de ports, moviment lateral, etc.

● Pupy Rat: Aplicació per crear portes traseres, realitzar accions per connectar-se a sistemes remots, realitzar exploits per recollir dades, augmentar els privilegis de descarregar i carregar fitxers, capturar la pantalla o pulsacions de tecles, etc.

---
