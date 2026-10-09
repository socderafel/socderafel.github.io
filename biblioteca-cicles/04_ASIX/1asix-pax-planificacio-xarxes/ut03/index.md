---
layout: default
title: "UD2 — Arquitectura de xarxa · Temari Complet"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT3 Completa"
prev_url: "../ut02/ut0201.html"
prev_label: "⬅️ 1.1 Caracterització de les xarxes"
next_url: "../ut03/ut0301.html"
next_label: "2.1 U2 Arquitectura de xarxa ➡️"
---

# 📘 UD2 — Arquitectura de xarxa (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 U2 Arquitectura de xarxa**](./ut0301.md)
- [**2.2 1 IPs**](./ut0302.md)

---

# 2.1 U2 Arquitectura de xarxa

📎 **Material de laboratori (U2 P1 Fitxer PT):** `2.1 Packet Tracer - Investigating the TCP-IP and OSI Models in Action.pka`

---

PAX - U2 – Arquitectura de xarxa 1er ASIX

1 ASIX - PAX Arquitectura de xarxa

- Conjunt de protocols organitzats per nivells, que treballen de forma

conjunta per a la transferència de dades i per oferir serveis de forma segura i fiable.

- Característiques
- Tolerància a fallades
- Escalabilitat
- QoS
- Seguretat

1 ASIX - PAX Disseny

- S’organitza en capes o nivells per reduir la complexitat del seu disseny.
- Cada capa proporciona serveis a la capa immediatament superior.
- El nivell n de la màquina es comunica de forma indirecta amb el nivell n homònim de l’altra màquina.

1 ASIX - PAX Disseny

1 ASIX - PAX Disseny: Problemes a abordar

- Accés al medi: Equips comparteixen medi. Cal regular ordre per evitar

col·lisió.

- Saturació del receptor: receptor avisa quan està preparat per rebre.
- Adreçament: Especificar a qui va el missatge.
- Encaminament: Definir ruta a seguir.
- Fragmentació: Al dividir missatge, cal reconstruir després.
- Control d’errors: Mecanismes per solucionar-ho.
- Multiplexació: Diferents tipus de connexions en mateix medi.

1 ASIX - PAX Disseny: Problemes a abordar

- Accés al medi: Equips comparteixen medi. Cal regular ordre per evitar

col·lisió.

- Saturació del receptor: receptor avisa quan està preparat per rebre.
- Adreçament: Especificar a qui va el missatge.
- Encaminament: Definir ruta a seguir.
- Fragmentació: Al dividir missatge, cal reconstruir després.
- Control d’errors: Mecanismes per solucionar-ho.
- Multiplexació: Diferents tipus de connexions en mateix medi.

1 ASIX - PAX Funcionament

- En una màquina
- Cada nivell utilitza servicis del nivell inferior.
- En l’emissor la informació viatja cap avall i cada nivell

afegeix informació (encapsulament).

- En el receptor la informació viatja cap amunt i cada

nivell extrau la informació que li correspon i entrega la resta al nivell superior.

1 ASIX - PAX Disseny: Problemes a abordar

- Entre màquines diferents
- El nivell n de una màquina es comunica amb el nivell n de altra mitjançant un

protocol.

- Els protocols regulen el format de comunicació.

1 ASIX - PAX El model OSI

- Open Systems Interconnection.
- ISO va desarrollar a 1983 un estàndar per a tractar de unificar els

diferents criteris.

- És el més important hui en dia.

1 ASIX - PAX El model OSI

- Model teòric (no implementat).
- No estableix protocols concrets, sinó que separa les funcions i els servicis

en capes.

- Útil per a explicar el funcionament d’una xarxa.
- Ha sigut, i és, la base a partir de la que han creat diferents arquitectures de

xarxa com TCP/IP.

1 ASIX - PAX El model OSI

- Redueix la complexitat de la xarxa
- Estandarditza interfícies
- Facilita disseny modular
- Assegura interoperabilitat de la tecnologia

1 ASIX - PAX Capes del model OSI

- 7 capes.

1 ASIX - PAX Capes del model OSI

1 ASIX - PAX Nivell físic

- Transmisión binaria a través del medio físico (cable o aire)

1 ASIX - PAX Nivell d’enllaç de dades

- Detectar i corregir errors que es produeixen en la línia de

comunicació.

- La unitat mínima que transfereix se li diu trama.

1 ASIX - PAX Nivell de xarxa

- Determina quina és la millor ruta per la que enviar la informació.
- La unitat mínima que transfereix se li diu paquet.

1 ASIX - PAX Nivell de transport

- Nivell intermig independent del tipus de xarxa. A
- Agafa dades de sessió i els passa a la capa de xarxa assegurant que

apleguen correctament al nivell de sessió de l’altre extrem.

- Nivell de xarxa envia paquets solts i i este els reuneix.
- Unitat transferida es diu segment

1 ASIX - PAX Nivell de sessió

- S’estableixen sessions (connexions) de comunicació entre dos extrem

per al transport ordinari de dades.

1 ASIX - PAX Nivell de presentació

- Prepara la informació (format, estructura, etc) per a que siga

“entenible”.

1 ASIX - PAX Nivell d’aplicació

- Contacte directe amb els programes. Permet a l’usuari accedir a la

xarxa a través de servicis, etc.

1 ASIX - PAX Comunicació en OSI

1 ASIX - PAX Arquitectura TCP/IP

- Finals d’anys 60 es crea ARPANET.
- Molts errors, força a crear protocols.
- TCP/IP anys 70.
- Aplicacions independents dels dispositius.

1 ASIX - PAX Arquitectura TCP/IP

- Permet connectar xarxes de tipus diferents (LAN, WAN, ATM, etc)
- Tolerant a errades.
- No orientat a connexió. Cada paquet d’informació pot viatjar per

camins diferents per evitar saturació o si hem perdut algun node.

- Gran estàndard de comunicacions hui en dia. Estàndard de facto.

1 ASIX - PAX Arquitectura TCP/IP

1 ASIX - PAX Arquitectura TCP/IP

- Accés a la xarxa: El model dona poca informació sobre esta capa. Sols

indica que deu existir algun protocol per a connectar amb la xarxa. Els més conegut és Ethernet.

- Internet o interred: Capa més important de l’arquitectura. Permet

enviar paquets per camins independents. El protocol més important de la capa es el protocol IP.

1 ASIX - PAX Arquitectura TCP/IP

- Transport: S’encarrega de la segmentació de les dades en l'origen, de

l’ordenació de paquets en destí i del control d’errors extrem-extrem. Protocols TCP i UDP.

- TCP: orientat a la connexió. Segur i més lent. Grans capçaleres.
- UDP: no orientat a la connexió. Insegur i més ràpid.
- Aplicació: Interfícia amb l’usuari i protocols d’alt nivell. HTTP, SMTP,

etc.

1 ASIX - PAX OSI VS TCP/IP

1 ASIX - PAX OSI VS TCP/IP: Similituds

- Es divideixen en capes
- Tenen capa d’aplicació, amb servicis diferents
- Tenen capa de transport i xarxa molt similars.
- Els dos tenen que ser estudiats per professionals de les xarxes.
- Ambdós commuten paquets. Cada paquet agafa diferent ruta per

aplegar a mateix destí. Xarxes commutades per circuit, totes van per la mateixa ruta

1 ASIX - PAX OSI VS TCP/IP: Diferències

- TCP/IP combina funcions de presentació i sessió en la capa d’aplicació.
- TCP/IP combina enllaç de dades i la capa física del model OSI en la

capa d’accés a xarxa.

- TCP/IP pareix ser més simple al tindre menys capes.
- Els protocols de TCP/IP son els estàndards a partir del qual es va

desarrollar internet. TCP/IP especifica protocols mentre que OSI no especifica protocols, és model teòric.

1 ASIX - PAX Encapsulament TCP/IP

- En cada nivell s’afegeix una capçalera a les dades.

1 ASIX - PAX Encapsulament TCP/IP

1 ASIX - PAX Encapsulament OSI

1 ASIX - PAX OSI VS TCP/IP: Diferències

- TCP/IP combina funcions de presentació i sessió en la capa d’aplicació.
- TCP/IP combina enllaç de dades i la capa física del model OSI en la

capa d’accés a xarxa.

- TCP/IP pareix ser més simple al tindre menys capes.
- Els protocols de TCP/IP son els estàndards a partir del qual es va

desarrollar internet. TCP/IP especifica protocols mentre que OSI no especifica protocols, és model teòric.

1 ASIX - PAX Components d’una xarxa

- En detall quan estudiem cadascuna de les capes.
- El símbol del núvol es gasta per fer referència a altra xarxa, per

exemple, Internet.

- Dispositius host: Es conecten directament a una de les capes. No

pertanyen a cap capa i pertanyen a totes.

1 ASIX - PAX Components d’una xarxa

- Dispositius intermedis

1 ASIX - PAX Components d’una xarxa

- Repetidor: Funciona a nivell 1. La seua tasca és principalment regenerar i

repetir la senyal.

- Hub: Mateixa funcionalitat que el repetidor però amb ports.
- Switch: Capa 2. Paregut al hub però amb capacitat de dirigir el tràfic

basant-se en una taula amb associacions MAC-IP.

- Router: Capa 3. Pren decisions basant-se en direccions IP i estat de la xarxa.

Decideix el camí que seguiran les dades.

1 ASIX - PAX Dubtes?

---

# 2.2 1 IPs

PAX - U2.1 – IP’s 1er ASIX

1 ASIX - PAX Què és una direcció IP?

- Número que identifica una interfície de xarxa dins d’una xarxa.
- Un equip pot tindre varies interfície de xarxa.
- Identifica no sols l’equip, sinó també la xarxa.
- Símil amb nombre de telèfon amb el prefixe.
- IPv4 i IPv6

1 ASIX - PAX Característiques

- Número de 32 bits. (2^32 direccions disponibles).
- Identifica de forma única la xarxa i el número de l’equip dins de eixa

xarxa.

- Número de bits per identificar la xarxa és variable i el número de bits

per identificar el host també és variable.

1 ASIX - PAX Característiques

- S’expressa utilitzant la notació decimal puntejada.
- 176.12.255.7
- 10110000.00001100.11111111.00000111
- No es gasten totes, sols les que comencen per 0, 10 i 110. (A, B i C).
- Entre la 0.0.0.0 i la 223.255.255.255

1 ASIX - PAX Màscara de xarxa

- Formalment màscara de subxarxa.
- Indica els números de la direcció IP que corresponen a la part utilitzada per

a identificar la xarxa.

- 255.255.255.0 per a la 192.168.1.1
- 11111111.11111111.11111111.00000000
- Primers 24 bits identifiquen a la xarxa
- Bits restants per al host dins de la xarxa
- També es pot gastar la notació CIDR
- 192.168.1.1/24

1 ASIX - PAX Configuració en Windows

1 ASIX - PAX Configuració en Windows

1 ASIX - PAX Configuració en Windows

1 ASIX - PAX Configuració en Windows

1 ASIX - PAX Configuració en Windows

- Per revisar la configuració de IP’s des de terminal.
- ipconfig
- Per comprovar connectivitat amb altre host o a internet
- ping direccióIP/web
- ping 192.168.1.10
- ping www.google.es

1 ASIX - PAX Configuració en Linux

- Modificant un fitxer de configuració
- Mitjançant interfície gràfica.
- Realment modifica internament el mateix fitxer de configuració.

1 ASIX - PAX Configuració en Linux

- Des de terminal

1 ASIX - PAX Configuració en Linux

- Des de terminal

1 ASIX - PAX Configuració en Linux

- Des de terminal

1 ASIX - PAX Configuració en Linux

- Des de terminal

1 ASIX - PAX Configuració en Linux

- Des de Interfície gràfica

1 ASIX - PAX Configuració en Linux

- Des de Interfície gràfica

1 ASIX - PAX Configuració en Linux

- Per vore la configuració gastarem
- ip a
- Per comprovar connectivitat amb altre host o a internet
- ping direccióIP/web
- ping 192.168.1.10
- ping www.google.es

1 ASIX - PAX Dubtes?

---
