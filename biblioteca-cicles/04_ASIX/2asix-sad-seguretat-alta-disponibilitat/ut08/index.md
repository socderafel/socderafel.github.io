---
layout: default
title: "UT8 — Setmanes (13-14) Del 11 al 22 de Desembre — Seguretat i Alta Disponibilitat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT8 Completa"
prev_url: "../ut07/ut07actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT7"
next_url: "../ut08/ut0801.html"
next_label: "8.1 Segurertat en xarxes corporatives ➡️"
---

# 📘 UT8 — Setmanes (13-14) Del 11 al 22 de Desembre (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**8.1 Segurertat en xarxes corporatives**](#ut0801) (o [obrir en pàgina individual ➡️](./ut0801.md) )
> - [**8.2 Seguretat en xarxes sense fil**](#ut0802) (o [obrir en pàgina individual ➡️](./ut0802.md) )
> - [**8.3 VPN**](#ut0803) (o [obrir en pàgina individual ➡️](./ut0803.md) )
> - [**✍️ Activitats pràctiques UT8**](#ut08actividades) (o [obrir en pàgina individual ➡️](./ut08actividades.md) )

---

## 8.1 Segurertat en xarxes corporatives

> **📌 🏷️ Apunt de la Unitat**
> #### UD 6 Accés remot

---

SEGURETAT EN XARXES CORPORATIVES

Amenaces i atacs a la xarxa corporativa Tipus d’atacs

➔Interrupció: Integra els que produeix una falta de disponibilitat. Pot provocar que un objecte del sistema es perda, quede no utilitzable no disponible Exemples: Destrucció del maquinari, Esborrat de programes, dades, Fallades en el sistema operatiu, DoS, DDoS

Amenaces i atacs a la xarxa corporativa

➔Interceptació: Atac contra la confidencialitat d'un sistema a través del que un programa, procés o usuari aconsegueix accedir a recursos per als quals no té autorització. És l'incident més difícil de detectar, ja que, no produeix una alteració en el sistema. Exemples: sniffing

Amenaces i atacs a la xarxa corporativa

➔Fabricació o suplantació: Atac contra l'autenticitat mitjançant el qual un atacant inserida objectes falsificats en el sistema. (adreça IP, adreça web, correu electrònic) Exemples: spoofing (suplantar la identitat) Amenaces i atacs a la xarxa corporativa

➔Modificació: Atac contra la integritat d'un sistema a través del qual es manipula. Aquests atacs solen ser els més nocius, ja que pot eliminar part de la informació, deixar alguns dispositius inutilitzables, alterar els programes perquè funcionin de manera diferent..

Exemples: pharming (redirigir a atre domini de forma fraudulenta)

Amenaces i atacs a la xarxa corporativa

Vulnerabilitats TCP/IP (Nivells 1 y 2 de OSI) ➔El primer nivell de vulnerabilitats és l'accés físic a la cambra de telecomunicacions, cablejat físic o els equips que intervenen en la comunicació ➔Problemes: disponibilitat, confidencialitat i control d'accés ➔Exemples. Bucle físic, desconnexió de dispositius, desbordament taula CAM en switch Mesures de seguretat ➔Fortificar accés a cambra de comunicacions ➔Activar STP ➔Link aggregation (bond) entre switch, o entre servidors i switch ➔Crear VLANS, Vlan d'administració.

➔Activar i configurar Seguretat de ports en switch

Vulnerabilitats TCP/IP (Nivell 3 OSI) ➔El principal problema és l'escolta de paquets no autoritzats de paquets IP ➔El segon problema és el de la suplantació d'adreces IP ➔Un tercer atac és l'enverinament de les taules d’ARP , que permet la suplantació de les adreces MAC Mesures de seguretat ➔Utilitzar protocols segurs (ssh) ➔Deshabilitar / impedir protocols insegurs ( telnet) ➔Monitorar trànsit arp. Arpwatch

Vulnerabilitats TCP/IP (Nivell 4 OSI) ➔Els principals problemes s'associen amb la intercepció dels ports UDP i TCP ➔L'obertura de ports indiscriminada o la seva falta de protecció mitjançant tallafocs pot donar lloc a l'exposició pública de serveis que poden ser atacats mitjançant força bruta ➔La cerca de ports oberts sol fer-se mitjançant utilitats d'escaneig de xarxa

Vulnerabilitats TCP/IP (Nivells 5 a 7 OSI) ➔Presenta problemes associats als serveis de xarxa i a l'autenticació de les dades ➔Problemes més comuns: ◆Enverinament de les caus DNS ◆Suplantació del servidor DNS ◆Inseguretat de protocols no xifratges que transporten contrasenyes com ftp ◆Vulnerabilitats específiques del protocol *htttp associades a la construcció d'URL’s per exemple la injecció de codi Mesures de seguretat ➔Utilitzar contrasenyes fortes ➔Mantenir equips actualitzats ( firmware encaminadors ) ➔Configurar opcions de seguretat en els encaminadors i APs

Exemples d’atacs a xarxes TCP/IP Email extractor Eina que permet obtenir les adreces d’email d'un lloc web ( informació pública !) ● Descarrega el executable de https://emailextractorpro.com/ ● Comprova quants emails estan disponibles en el lloc gva.es ● Comprova quants emails estan disponibles www.mujerhoy.com ● Comprova quants emails estan disponibles marca.com

WireShark Eina que permet obtenir els paquets que circulen per la xarxa. ● Descarrega el executable de https://www.wireshark.org/ ● Comprova com pots llegir els paquets que circulen por la xarxa ● Comprova com pots llegir una contrasenya introduïda en una pàgina http Nota: El Wireshark té mòduls per a escoltar en xarxes WiFi , GSM, o Radiofreqüència Exemples d’atacs a xarxes TCP/IP Compte amb la segmentació del switch !!

Arp poisoning ARP (Address Resolution Protocol) En les xarxes broadcast tots els dispositius llancen peticions arp de broadcast per a trobar les direccions MAC de xarxa. El funcionament ARP és: ◆Quan una màquina necessita comunicar amb una altra mira en la seva taula ARP ◆Si no està llança una petició ARP_request a la xarxa ◆Totes les màquines comparen amb la seva IP ◆Si la IP coincideix respon al ARP_request amb la seva IP i la seva MAC ◆La màquina que llança la petició guarda el parell IP i l'adreça MAC en la seva taula Exemples d’atacs a xarxes TCP/IP

Arp poisoning Un ARP Spoofing és un atac en el qual un atacant envia missatges falsificats ARP (Address Resolution Protocol) a una LAN. Com a resultat, l'atacant vincula la seva adreça MAC amb l'adreça IP d'un equip legítim (o servidor) en la xarxa Si l'atacant va aconseguir vincular la seva adreça MAC a una adreça IP autèntica, començarà a rebre qualsevol dada que es pot accedir mitjançant l'adreça IP.

Sol ser una fase de l’atac MitM Exemples d’atacs a xarxes TCP/IP

MitM (Man -in -the -Middle) L'atacant crea una connexió entre les víctimes i controlant la comunicació. Les víctimes creuen que es comuniquen entre elles ¿Qué es DNS poisoning? Exemples d’atacs a xarxes TCP/IP

El ataque de denegació de servei DoS (Denial of Service) L'objectiu principal és impedir l'ús legítim del sistema atacat per part d'usuaris no autoritzats. Sol produir-se perquè l'atacant provoca un excessiu consum de recursos del servidor La defensa es realitza bloquejant l’adreça IP de l’atacant Exemples d’atacs a xarxes TCP/IP

DDoS (Distributed Denial of Service) Quan l'atacant s'amaga darrere de tota una xarxa d'atacants (xarxa de zombis o xarxa zombi) composta per sistemes infectats amb troians Exemples d’atacs a xarxes TCP/IP

Exemples d’atacs a xarxes TCP/IP Tipus d’atacs DDoS ➔Net Flood: S'organitzen atacs massius des de diferents punts de la xarxa mitjançant zombis. Amb la tecnologia actual, contra aquest atac es pot fer poc. ➔Connection flood:Tots els serveis orientats a connexió suporten un nombre de connexions simultànies L'atacant intenta esgotar amb connexions il·legítimes. En la connexions TCP/IP es pot conèixer la IP de l'atacant indicant al tallafocs que la bloquegi ➔Syn Flood: Es tracta d'esgotar els recursos del sistema atacat mitjançant connexions semiobertes. Es pot evitar mantenint el sistema actualitzat ➔Atac Smurf i atac Fraggle ➔Atac teardrop Com fer un atac DDoS? (2)

Exemples d’atacs a xarxes TCP/IP

Exemples d’atacs a xarxes mòbils Atac d’estació base falsa ➔Milions de subscriptors en el món continuen fent ús de GSM cada dia i la pràctica totalitat dels terminals mòbils 3G són compatibles amb 2G. GSM és molt feble en qüestió de seguretat ➔Atac ‘IMSI catcher’ ➔Atac: localització geogràfica ➔Atac: denegació de servei ➔Atac: «Downgrade selectiu» . Obliga a utilitzar 2G ➔Atac: SIM Swaping

Exemples d’atacs a xarxes Bluetooth Atac a Bluetooth ➔Atac: BIAS ➔Atac: BLESA ➔Atac: KNOB ➔Atac: BLURtooth ➔Bluejacking ➔Bluedebugging ➔Bluesnarfing

Amenaces internes i externes Les amenaces de seguretat causades per intrusos en xarxes corporatives o privades d'una organització, poden originar-se tant de manera interna com externa: Amenaça externa o d’accés remot: ➔Són atacants externs a la xarxa privada o interna de l'organització. Es introdueixen des de xarxes públiques.

➔Els objectius d'atacs són servidors i encaminadors accessibles des de l'exterior, i que serveixen de passarel·la d'accés a la xarxa corporativa. ➔La protecció d'aquesta mena d'amenaces es veurà en una altra unitat: Seguretat perimetral.

Amenaça interna o corporativa: ➔Els atacants pertanyen a la xarxa privada de l'organització o han aconseguit accés a ella. ➔Poden comprometre la seguretat i sobretot la informació i serveis de l'organització. Insiders Exfiltracions Amenaces internes i externes

Elements bàsics de seguretat perimetral Perímetre de xarxa: és el límit entre la xarxa interna segura d'una organització i Internet, o qualsevol altra xarxa externa no controlada. El perímetre de la xarxa és el límit del que una organització controla. Encaminador/Router de frontera: dispositius situats entre la xarxa interna i les xarxes d'altres proveïdors que intercanvien el trànsit amb nosaltres DMZ: és una subxarxa d'àrea local (LAN) situada entre la xarxa privada d'una organització i la xarxa externa, normalment Internet.

Bastió: Sistema que actua com a intermediari entre els usuaris de la xarxa interna d'una organització amb una altra mena de xarxes. Aquesta màquina ha d'estar especialment assegurada, però en principi és vulnerable a atacs per estar oberta a Internet, generalment proveeix un sol servei (com per exemple un servidor proxy)

Encaminador de frontera L'encaminador de frontera és l'encaminador que s'instal·la en la part més externa de la xarxa corporativa, s'encarrega de comprovacions de seguretat en el trànsit d'entrada i eixida de la xarxa, una espècie de policia de trànsit entrant i sortint.

Bastió Històricament, se'n deia bastions a les altes parts fortificades dels castells medievals; punts que cobrien àrees crítiques de defensa en cas d'invasió, usualment tenint muralles molt fortificades, sales per a allotjar tropes, i armes d'atac a curta distància com a olles d'oli bullent per a allunyar als invasors quan ja estaven per penetrar al castell També s’anomena Dual-Homed Host

Firewall i DMZ Configuracions típiques d’una DMZ ARQUITECTURA FEBLE DE SUBXARXA PROTEGIDA ARQUITECTURA FORTA DE SUBXARXA PROTEGIDA

DMZ TI i DMZ TO DMZ TI - Tecnologies de la Informació. Sistemes informàtics ●El servidor proxy pel qual es realitzaria la navegació a Internet. ●El servidor de correu corporatiu. ●El servidor web de la companyia. ●Honeypots DMZ TO - Tecnologies de la operació. Sistemes industrials ●Servidor de pegats ●Màquina de salt ●Historiador ●Servidor d'autenticació

Sistemes de detecció d’intrusos ⇒ IDS Un IDS és una eina de seguretat la funció de la qual és la de detectar o monitorar els esdeveniments ocorreguts en un sistema informàtic amb la intenció de trobar intents de comprometre la seguretat. Els IDS busquen patrons prèviament definits. Aquests patrons impliquen una activitat sospitosa sobre la xarxa o equip.

Gràcies a aquests patrons s'intenta dotar a la seguretat d'una capacitat de prevenció i alerta anticipada. Els IDS no estan dissenyats per a detenir els atacs sobre el Sistema informàtic

Els IDS s'encarreguen de: ➔Vigilar el trànsit de la xarxa. ➔Examinar els paquets a la recerca de dades sospitoses. ➔Detectar les primeres fases d'una atac: ➔Anàlisi de la xarxa. ➔Escombratge de ports. Sistemes de detecció d’intrusos ⇒ IDS

Sistemes de Prevenció d’Intrusos ⇒ IDS => IPS L’operació d’un IPS té quatre fases

### 1. Identificació de l'atac

### 2. Registre d'esdeveniments

### 3. Bloqueig de l'atac

### 4. Reporti als administradors i personal de seguretat

Sistemes de detecció d’intrusos ⇒ IDS Hi ha dos tipus d’ IDS: HIDS (Host IDS) Aquests IDS protegeixen un únic equip en la xarxa que pot ser un servidor o un equip normal. Monitoren una gran quantitat d'esdeveniments i activitats amb una gran precisió. Determinen quins processos i usuaris s'involucren en una determinada acció.

Recapten informació del sistema com a fitxers, logs, recursos… per a la seva posterior anàlisi. Pràctica IDS: Instal·lar “Comodo Firewall” en Windows (HIPS)

Sistemes de detecció d’intrusos ⇒ IDS NIDS (Net IDS) Protegeixen un sistema informàtic basat en xarxa. Actuen sobre la xarxa capturant i analitzant paquets de xarxa, són com sniffers connectats a la xarxa. Després analitzen els paquets capturats buscant patrons que suposin algun tipus d'atacs. Actuen mitjançant la utilització d'un dispositiu de xarxa configurat en manera promíscua (analitzen en temps real tots els paquets que circulen per la xarxa encara que no vagin dirigits a aquest determinat dispositiu).

Compte amb els switch !!

Sistemes de detecció d’intrusos ⇒ IDS L’arquitectura d’un IDS està formada per: ➔Font de recollida de dades: pot ser un log, un dispositiu de xarxa o el propi sistema en un HIDS. ➔Regles i filtres: s'apliquen sobre les dades per a detectar anomalies. ➔Dispositiu generador d'informes i alarmes: en alguns casos són capaços d'enviar alertes per mail o SMS.

Sistemes de Detecció d’Intrusos distribuïts DIDS El servei IDS Distribuït recull totes les dades dels IDS, analitza i correlaciona tots els esdeveniments produïts en la xarxa avaluant de manera global el que ocorre en la xarxa a cada moment

Consells finals Protegir la xarxa. STP, Link Aggregation, Port Security, VLAN, ... Instal·lar i configurar tallafocs. Fer un bon disseny perimetral. Activar comunicacions xifrades sempre que es puga (https, sftp, ssh, etc..) Tancar ports (serveis) no utilitzats Instal·lar un IDS Configurar ACL’s en Encaminadors i Seguretat de ports en Switch Actualitzar microprogramari (firmware) dels equips de xarxa Utilitzar eines de detecció de bootnets (OSI) Davant un incident -> CERT

---

## 8.2 Seguretat en xarxes sense fil

XARXES SENSE FIL

Introducció 1999

,

,

En diverses empreses entre elles Com i Nokia es van unir per a crear

. un mecanisme que permetera la connexió sense fil entre diferents dispositius (

- ).

aliança Wi Fi

. Aquests dispositius no havien de ser del mateix fabricant 2000

802.11

L'any segons la norma IEEE b se certifica

. la interoperabilitat de dispositius

La família d'estàndards 802.11

ha crescut des de

llavors adaptant se a les necessitats de

. velocitat i seguretat entre altres

Estàndards 802.11

Estàndards 802.11

Estàndards 802.11

La freqüència 2,4

. GHz també la utilitzen altres tecnologies

. Pot haver interferències entre aquestes tecnologies

1.2

Bluetooth en la seua versió es va actualitzar per a evitar aquestes . interferències

802.11

Amb l'estàndard ac es va optar per la freqüència GHz perquè cap

. altra tecnologia la utilitza

5 *

10%

Amb la banda GHz es perd un d'abast respecte a 2,4 . GHz

Risc i limitacions ➔Utilitzen rangs de freqüència (RF) sense costos de llicència,

són

,

,

. rangs d'ús públic estan saturats i els senyals interfereixen entre si ➔La seguretat,

qualsevol equip amb targeta WiFi pot interceptar els senyals ●

,

Utilitzant aplicacions de captura i anàlisi de transit com per exemple Wireshark ➔

Per a solucionar els problemes de seguretat s'usen les següents : tècniques ➔Encriptació. ➔Autenticació.

Sistemes de seguretat en WLAN Open System (Sistema obert) ➔

. No existeix autenticació ➔

’

’ . El control d accés el realitza el punt d accés ➔

. No existeix xifrat entre les comunicacions Perquè és perillós connectar-se a Wifis públiques qué fer per a protegir-te

Sistemes de seguretat en WLAN WEP - W

ired E

quivalent Privacy ➔Encriptació

de missatges amb claus de longitud 64 bits → + 24 ’ clau vector d inicialització 128 bits → 104 + 24 256 bits → 232 + 24 ➔Autenticació ◆Open System

. els clients no s'identifiquen

Després d'autenticar se i associar se a la xarxa es

. necessita la clau WEP correcta ◆Pre-Shared Keys (PSK)

la mateixa clau WEP

. s'usa per a autenticar i realitzar el control d'accés

Sistemes de seguretat en WLAN WEP - W

ired E

quivalent Privacy

,

. Encara que pot semblar que usar PSK és més segur no és així

Per a realitzar l'autenticació mitjançant PSK se segueixen quatre passos ●

( ). Client envia petició al punt d'accés PA ●

. El PA envia un text model com a resposta ●

. El client xifra el text amb la clau WEP i l'envia al PA ●

. El PA desxifra el text i el compara i s'envia confirmació o denegació

Capturant aquests quatre paquets la clau WEP

. es desxifra directament

Sistemes de seguretat en WLAN WPA - W - i Fi P

rotected Access

. Creat per a esmenar les deficiències del xifratge previ

Es van publicar dues versions temporals de WPA (

). solucions intermèdies

Finalment es va publicar la versió definitiva WPA2,

sota l'estàndard 802.11i.

Sistemes de seguretat en WLAN WPA - W - i Fi P

rotected Access

Disposa de dues solucions segons el seu àmbit d'aplicació ➔WPA Personal

. L'autenticació es realitza amb una clau precompartida

. És el sistema usat habitualment en xarxes xicotetes ➔WPA Enterprise

L'autenticació es realitza mitjançant les credencials

de cada usuari utilitzant un servidor RADIUS.

És el sistema usat habitualment en xarxes

corporatives en les quals els usuaris disposen

. de credencials per a utilitzar els equips

Sistemes de seguretat en WLAN

2. En els últims mesos s'ha descobert una fallada en el protocol WPA

Les empreses de l'aliança Wi-Fi

van llançar el nou protocol WPA durant 2018. l'any

3

Arriba el nou WIFI WAP Com funciona i per a que serveix 

(

) Xifratge de bits en comptes de bits 

Mecanisme anti atacs de força bruta 

(* * ) Configuració senzilla amb un altre dispositiu Easy Connect

WPS W - i Fi P

rotected Setup

WPS defineix els mecanismes per a connectar se a una xarxa WPA

(

minimitzant la intervenció dels usuaris generalment prement únicament un ). botó

,

Mitjançant aquests mecanismes els dispositius obtenen les credencials tant el

. SSID com la PSK

No és un sistema de seguretat i la seua feble implementació el converteixen

. en una de les majors vulnerabilitats en les xarxes WLAN

WPS Atac a xarxa amb WPS ➔

Es poden utilitzar mètodes

de força bruta ➔

Reaver WPS programa per

a obtindre la clau Solució ➔

Desactivar el WPS Qué és WPS Pin i perquè deus desactivar-lo

Auditories wireless

Realitzar auditories wireless per a mesurar el nivell de seguretat de les

.

nostres xarxes sense fils és essencial Existeixen multitud d'aplicacions que

( permeten monitorar i recuperar contrasenyes de xarxes sense fils airodump aircarck )

( etc i distribucions live backtrack, wifiway, wifislax…) Pràctica: Comprovar les vulnerabilitats de les claus WEP ● ’

Configurar l acces point modificant la xarxa per defecte el SSID i les

claus wep ●

( ) Configurar la targeta wifi i comprovar l'accés al Acces Point AP ●

Obtindre la contrasenya d'accés a la xarxa wifi utilitzant wifislax .

WiFiSlax El Tutorial definitivo

,

Com s'ha pogut comprovar les xarxes WLAN ofereixen molts avantatges

. però estan molt lluny de ser completament segures

Tant pels errors d'implementació dels estàndards com per la facilitat d'accedir

, . al mitjà de transmissió utilitzat l'aire

,

Encara així les xarxes WLAN s'utilitzen i es continuaran utilitzant per la gran

. escalabilitat i connectivitat que ofereixen

Per això caldrà tindre en compte una sèrie de recomanacions per a evitar

. intrusions en la mesura que siga possible Recomanacions de seguretat

➔

( )

Assegurar l'administració del Punt d'Accés AP ja que és un punt crític

. de la xarxa ➔

, , . Establir una contrasenya d'accés a la xarxa complexa llarga i única (

) Només s'haurà d'introduir una vegada ➔

,

Actualitzar el microprogramari dels encaminadors dispositius AP i clients

. per a evitar vulnerabilitats i afegir noves funcions ➔

Usar sempre la major versió del protocol de seguretat WPA o servidor . RADIUS ➔

. Desactivar el protocol WPS ➔

. Desconnectar l'AP quan no s'use ➔

(

) Limitar la potència del senyal evitar que isca fora ➔

Aïllar la xarxa de convidats Recomanacions de seguretat

➔

. Canviar el SSID per defecte i periòdicament ➔

Tria un nom per a la xarxa que no siga obvi ni fàcil d'endevinar ➔

. Ocultar la difusió del SSID

D'aquesta manera els intrusos hauran de conéixer ho prèviament

. per a poder realitza atacs

Això complica una mica l'administració de la xarxa ja que els

clients també hauran de conéixer per endavant el SSID i

. introduir ho a l'hora de connectar se per primera vegada Recomanacions de seguretat

Recomanacions de seguretat ➔

Desactivar el servidor DHCP i assignar les adreces IP de manera manual

. o mitjançant reserva amb l'adreça MAC ➔

’ ’ ( )

(

) Canviar la contrasenya d accés a l aparell AP per defecte de fàbrica ➔

( ). Canviar les IP per defecte del punt d'accés AP ➔

. Canviar el rang d'IP per defecte ➔

. Activar el filtrat MAC ➔

Analitzar periòdicament els clients connectats per a comprovar que estan

. entre els equips autoritzats ➔

. Establir un nombre màxim de clients en l'AP misconfiguration

---

## 8.3 VPN

XARXES PRIVADES VIRTUALS

Caracterització d’una VPN Amb una arquitectura VPN el client utilitzarà Internet, però establirà un canal xifrat per a connectar-se a un servidor VPN que traspassarà tot el trànsit, una vegada desxifrat, per la xarxa interna segura al servidor. Com la connexió per la xarxa pública està xifrada, el seu contingut queda protegit

Caracterització d’una VPN

Caracterització d’una VPN

Tipus de VPN segons la seua funció ●VPN d'accés anònim ●VPN d'accés remot o Roadwarrior ●VPN punt a punt,lloc a lloc o site-to-site ●VPN over LAN

VPN d’accés anònim

L'usuari es connecta a internet a través d'un servidor VPN aconseguint anonimat i deslocalització

VPN d’accés remot o roadwarrior

Consisteix en el fet que un usuari es connecta amb el lloc remot utilitzant Internet

,

com a xarxa d'accés de manera que s'estableix un túnel entre el sistema de l'usuari i

el servidor de VPN remot que li proporciona l'accés a una xarxa local

L'usuari s'autentica en el

.

servidor remot Només els

usuaris amb permís podran

establir el túnel

VPN punt a punt,lloc a lloc o site-to-site

El túnel s'estableix entre dues xarxes locals pel que cada xarxa local ha de tindre el

seu propi servidor VPN

VPN over LAN

.

El túnel s'estableix entre equips dins d'un xarxa local Serveix per a aïllar zones i serveis de la

.

xarxa interna Aquesta capacitat ho fa molt convenient per a millorar les prestacions de seguretat

,

de les xarxes sense fils i per a accessos a servidors amb informació sensible com per exemples . nòmines Activitat : ¿Qué és VPN sobre LAN? Dibuixa un esquema

Arquitectures bàsiques de VPN

La tècnica de tunelització consisteix a encapsular un protocol de xarxa sobre un altre (

)

protocol de xarxa encapsulador creant un túnel dins d'una xarxa d'ordinadors

Es tracta d'encapsular el paquet origen dins d'un altre en el qual afegim tres : capçaleres ➔Camp PPP,

que porta el control d'autenticació i xifratge propi del protocol PPP (

). Point to Point Protocol ➔Camp GRE,

. que porta informació sobre el túnel que estableix PPTP ➔ Camp IP,

que especifica les adreces IP de tot el paquet complet en la xarxa de

. trànsit segons les especificacions de PPTP Arquitectures bàsiques de VPN

Nivells de seguretat en una connexió de xarxa

Una connexió de xarxa es pot assegurar en un d'aquests tres nivells funcionals de

/ : l'arquitectura TCP IP ➔Seguretat en el nivell d’enllaç

Un exemple de protocol de seguretat en este

nivell és L2TP, PPTP, PPPoE ➔Seguretat en el nivell de xarxa

Este és el tipus de seguretat que ’

s aconsegueix amb IPsec.

Per a que una aplicació puga assegurar les seues

connexions deurà encapsular les dades a enviar en paquets IP que seran

assegurats mitjantsant IPsec ➔Seguretat en el nivel d’aplicació

En este cas es tracta de sustituir el

protocol insegur per altre més segur però funcionalment equivalent SSL, SSH, https, ftps, .. Las xarxes privades virtuals utilitzen majoritàriament tècniques de seguretat propies del nivel d’enllaç i del nivel de xarxa

Implantació d’una VPN

Par establir una VPN són necessaris al menys dos requisits bàsics ➔Una connexió a Internet o a la xarxa de trànsit que suporta el túnel (

’

),

en el cas d una VPN sobre LAN seria una xarxa local que fa la funció de xarxa

. de transport ➔Dos adreces IP, una per a cada extrem del túnel,

de manera que els

encaminadors puguen discriminar quin paquet ha d'anar a quina seu de .

l'organització En les xarxes locals dels extrems del túnel seran els encaminadors

.

els encarregats d'introduir els paquets en el túnel Si la xarxa de trànsit és ,

. Internet les dues adreces IP hauran de ser públiques .

.

El protocol estàndard més utilitzat és Ipsec Les solucions

. VPN es poden implementar per maquinari o per programari

Les de maquinari tenen major rendiment i són més fàcils de ,

,

configurar no obstant això tenen menys flexibilitat que les

de programari

Protocols VPN PPPoE (PPP over Ethernet)

(

És l'estàndard per a connectar estacions utilitzant PPP sobre una xarxa Ethernet en

)

comptes d'una línia serie És l'estàndard utilitzat per a connectar se a un ISP a través

.

,

de DSL o cable mòdem En la creació de túnels PPP se sol utilitzar juntament amb

un protocol de tunelització denominat GRE,

però també pot tunelitzar se amb L2TP.

Protocols VPN PPTP (Point-to-Point Tunneling Protocol)

És un protocol desenvolupat per Microsoft que expandeix les característiques de PPP

que li encapsula perquè qualsevol tipus de dades PPP puguen travessar Internet com

.

,

una transmissió IP habitual Suporta encriptació autenticació i serveis d'accés

(

).

mitjançant RRAS Routing and remalnom Access Server Actualment es troba obsolet i

. ha sigut reemplaçat per altres protocols mes avançats

Protocols VPN L2TP (Layer 2 Tunneling Protocol)

Està desenvolupat per Cisco

i estandarditzat per la IETF

com a hereu de PPTP i L2F (

).

,

de Cisco Encapsula dades com a PPP però a diferència d'ell està acceptat per

.

, multitud de fabricants PPTP i L TP no sols s'utilitzen en la creació de túnels VPN

sinó que també són utilitzats en les xarxes per les seues capacitats d'encriptació de . 2

.25,

dades L TP pot funcionar sobre X FrameRelay i ATM

Protoclos VPN IPsec ( Internet Protocol security)

. És una extensió del protocol IP que permeten assegurar les comunicacions sobre IP ,

,

. autenticant i si es desitja xifrant els paquets IP d'una comunicació

IPsec treballa en la capa de xarxa i per això pot ser utilitzat per qualsevol aplicació

. sense necessitat de realitzar cap modificació en la configuració d'aquesta

, IPsec consta de tres protocols ➔ Authentication Header (AH)

,

Proporciona integritat autenticació i no repudi

,

. de tot el paquet enviat incloent hi la capçalera IP ➔ Encapsulating Security Payload (ESP)

Afig a l'anterior el xifratge de tota

,

la informació que s'envia però no inclou en els seus càlculs les dades de la capçalera ➔Internet key exchange (IKE)

Empra un intercanvi secret de claus

. de tipus Diffie Hellman per a establir el secret compartit de la sessió

. Se solen usar sistemes de Criptografia de clau pública o clau pre compartida

Protocols d’autenticació en la xarxa

Un protocol d'autenticació és un protocol que permet verificar la identitat de la

.

persona o servei que desitja accedir a un recurs de la xarxa Constitueixen el primer

. passe a donar en tot procés segur

Els protocols més utilitzats ➔PAP (Password Authentication Protocol)

Protocol d'autenticació de .

,

contrasenya En PAP les credencials de l'usuari representades pel nom d'usuari i

,

la seua contrasenya s'envien per la xarxa

sense xifrar,

per la qual cosa és un

.

mètode d'autenticació insegur Una captura de la trama PPP permetria un examen

. lliure de la contrasenya ➔CHAP (Challenge Handshake Authentication Protocol)

.

protocol d'autenticació per desafiament mutu En CHAP el

client envia una petició d'accés amb un hash

de la (

,

). contrasenya no la contrasenya que mai viatja per la xarxa

Protocols d’autenticació en la xarxa ➔EAP (Extensible Authentication Protocol)

Protocol d'autenticació .

.

extensible EAP admet diverses maneres d'autenticació És més una arquitectura

.

que un únic protocol Pot utilitzar tant certificats digitals com tokens i fins i tot

/

parelles usuari contrasenya És molt utilitzat en l'autenticació sobre xarxes sense fils

. i connexions punt a punt ➔EAP-TLS (EAP Transport Layer Security).

És una extensió de EAP que

permet que EAP interaccione amb un servidor RADIUS que proporciona

l'autenticació de credencials i les claus de xifratge fent de EAP un dels protocols

.

més segurs i molt habitual en dispositius sense fils corporatius També admet la

. gestió del xifratge i autenticació mitjançant certificació digital

Protocols d’autenticació en la xarxa Kerberos.

Creat pel MIT (

)

Institut Tecnològic de Massachusetts i estandarditzat en la RFC 4120.

.

( 3962). Client i servidor s'autentiquen recíprocament Utilitza xifrat AES RFC

,

Cada servidor usuari o servei disposa d'una clau que es registra en una base de

.

dades unificada en el servidor Kerberos Client i servidor confien en el servidor ,

Kerberos qui els proporciona tiquets de sessió que posteriorment seran utilitzats

.

per a autenticar se enfront dels serveis de xarxa Tant els sistemes Windows com

/

. els GNU Linux poden usar Kerberos

Proveïdors (de VPN d’accés anònim) ● Ciberghost ● TunnelBear (gratuito) ● HotSpot Shield ●

```bash
Private Tunnel
```

● Etc…. Altres proveïdors…. ●Opera VPN (free) ●Google ●Mozilla ●Avira ●NordVPN ●….. Extensió de navegador

Software de servidors i clients de VPN Arquitectures: Client a Servidor Router a Router Firewall a Firewall ● Servidor VPN – OpenVPN – FreeLan ● Client VPN – Configura Windows – Configura Linux – Configura MAC – Configura Android – Configura iOS punt a punt router a router

Software per implementar Roadwarrior ● LogMeIn Hamachi ● Radmin VPN ● SoftEher VPN és un programari gratuït de codi obert, multiplataforma, client VPN i servidor VPN multiprotocol ● NetOverNet ● ZeroTier ● GameRanger ● Wippien (P2P VPN) https://vpn.net/

---

## ✍️ Activitats pràctiques UT8

> **✍️ Activitat Pràctica 8.1 — (SAD) Descobreix xarxes amb nmap**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: nmap Nmap és un dels millors escàners de ports que podem trobar en la xarxa, des de la seua primera versió ha sabut madurar i mantindre's, convertint- se en una eina imprescindible per a un administrador de xarxa o un auditor de seguretat.
>
> Aquesta és la pàgina oficial de l'eina: https://nmap.org/ Podem instal·lar-la en Windows, per a Mac OS, i per a Linux. En Ubuntu, des de apt-get, o baixant el paquet rpm per a distribucions basades en Red Hat, SUSE o Fedora. També podem utilitzar una distribució de linux que la tinga instal·lada i configurada, com la distribució Kali Linux. <== Utilitzarem esta En aquesta activitat practicarem.
>
> Descobriment d'equips “vius” en una xarxa. Descobriment de ports oberts (serveis actius ) Descobriment de sistema operatiu remot Descobriment de vulnerabilitats en equip remot Preparació: En la màquina Kali, comprova ( xarxa en Adaptador pont ) Arranca la màquina. Tasques
>
> Esbrina la ip de la teua màquina Cerca informació sobre aquesta eina. Cerca manuals, pàgines amb instruccions, etc.... Practica amb les següents tasques senzilles Descobriment d'equips “vius” en la nostra xarxa. Comenta els resultats !
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Descobriment de ports oberts ( serveis actius ) Comenta els resultats ! Descobriment de Sistema Operatiu. Comenta els resultats ! Que altres opcions de nmap et resulten interessants ?
>
> Detectar vulnerabilitats. Per a realitzar aquest apartat, necessitarem una màquina amb alguna vulnerabilitat que puga ser detectada. Per a això utilitzarem una màquina metasploitable . La baixem de : https://sourceforge.net/projects/metasploitable/ La importem i posem la xarxa en adaptador pont.
>
> Arranquem la màquina metasploitable. Utilitzant nmap: Descobreix que màquina de la xarxa és metasploitable (la seua ip) Descobreix que Sistema operatiu és i que versió Descobreix que ports té oberts Descobreix que vulnerabilitats té Comenta els resultats ! Documentar tot el procés en un document. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada. Entregar el document en format PDF. Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de Aules “Com fer un treball”
