---
layout: default
title: "UT12 — U11 - Encaminament — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT12 Completa"
prev_url: "../ut11/ut11actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT11"
next_url: "../ut12/ut1201.html"
next_label: "12.1 U11 Enrutament ➡️"
---

# 📘 UT12 — U11 - Encaminament (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**12.1 U11 Enrutament**](#ut1201) (o [obrir en pàgina individual ➡️](./ut1201.md) )
> - [**12.2 Exemple Enrutament Estàtic**](#ut1202) (o [obrir en pàgina individual ➡️](./ut1202.md) )
> - [**✍️ Activitats pràctiques UT12**](#ut12actividades) (o [obrir en pàgina individual ➡️](./ut12actividades.md) )

---

## 12.1 U11 Enrutament

📎 **Material de laboratori (U11A2 Act2. Solució):** `Solucio U11 A2-2.png`

---

PAX - U11 – Enrutament 1er ASIX

1 ASIX - PAX Concepte

- En una xarxa és molt important que existeixen diferents rutes per aplegar a

un mateix destí. Amb açò

- Cap equip queda aïllat si es produeix una fallada a l’enllaç.
- Possibilita la selecció de rutes alternatives en cas de saturació de tràfic.
- En una xarxa, es necessari que existisca alguna forma d’establir quina és la

ruta més adequada, que deuen seguir els paquets en cada moment per aplegar al seu destí.

- Aquest mecanisme encarregar de seleccionar la ruta més adequada es

l’anomenat enrutament o encaminament.

1 ASIX - PAX Concepte

- Nivell de xarxa.
- Per a que aquesta tasca es puga dur a terme, es necessari haver

identificat els equips de forma única. És per això que en la unitat anterior s’ha estudiant el direccionalment IP.

- L’enrutament el fan els routers. Quan reben un paquet per un dels

seus ports, examinen la direcció de destí i executen l’algoritme d’enrutament que tenen programar per reenviar el paquet pel port adequat.

1 ASIX - PAX Tipus: Enrutament estàtic

- Depenent de la forma que el router “aprén” la ubicació de les

direccions, es a dir, en quin port li correspon cada direcció, es pot classificar l’enrutament en dos grans tipus. Estàtic i dinàmic.

- Enrutament estàtic
- Requereixen que la tabla d’enrutament siga construïda manualment per

l’administrador de la xarxa.

- Es creen quan sols existein una única ruta cap al destí i aquesta no va a

canviar.

- Alta velocitat de decisió però no auto-aprén si hi ha canvis.

1 ASIX - PAX Tipus: Enrutament dinàmic

- Enrutament dinàmic
- Consisteix en activar algun protocol d’enrutament dinàmic que permeta

l’intercanvi de informació entre els routers per crear dinàmicament la taula d’Enrutament.

- Son capaços d’apendre per ells mateixos la topologia de xarxa sense

intervenció humana. Per tant, més flexibles que estàtics, però menor rendiment.

- És habitual configurar un enrutament dinàmic amb algunes entrades

estàtiques a la taula.

1 ASIX - PAX Tipus: Enrutament dinàmic

- Els principals objectius de l’enrutament dinàmic son
- Millor ruta: objectiu primordial i va a dependre del criteri escollit (distància,

tràfic, capacitat dels enllaços, etc)

- Simplicitat: aquest objectiu pretén que l’algoritme triat no consumisca grans

recursos.

- Robustesa: el protocol d’enrutament deu contindre mecanismes que eviten el

bloqueig davant qualsevol falla.

- Rapidessa d’aprenentatge: quan es produeix un canvi en la xarxa, tots els

routers deuen conèixer quan mes prompte millor i modificar les seus taules.

1 ASIX - PAX Enrutament estàtic

- Cada estació de xarxa, té una direcció IP única en la seua xarxa.
- Cada encaminador, a més, té una direcció única per a cadascuna de

les xarxes que te connectades.

1 ASIX - PAX Enrutament estàtic

- Cada router disposa d’una tabla amb els possibles destinataris(per

xarxa) dels paquets.

- Sol contindre les següents columnes
- Direcció IP de la xarxa destí.
- Màscara de xarxa del destí
- Continua...

1 ASIX - PAX Enrutament estàtic

- Següent bot (next hop). Ací tenim dues possibilitats
- La direcció IP del port del router pel que s’entregarà el paquet, si la xarxa de

destí està directament conectada (a routers cisco posarem la 0.0.0.0)

- La direcció IP del port d’entrada del següent router, si la red de destí NO està

directament conectada.

- Interfície: Nom o direcció IP del router pel que s’entregarà el paquet.
- Mètrica: Nombre de routers intermedis que es necessari travessar o

qualsevol altre paràmetre que especifique el cost del camí.

1 ASIX - PAX Enrutament estàtic

- Coses a tindre en compte amb les taules estàtiques
- Es deuen incloure totes les xarxes de destí existents.
- En una taula d’encaminament pot aparèixer més d’una fila amb la mateixa

xarxa de destí. Açò pot ocórrer quan existeixen diferents rutes per a aplegar a la citada xarxa.

- Si la xarxa té accés a Internet, cal incloure una entrada per fer referència a

Internet i que posarem com xarxa destí 0.0.0.0/0

- Les columnes Xarxa destí i següent bot són columnes obligatòries.

1 ASIX - PAX Enrutament estàtic a PT

- Per configurar l’encaminament a Packet Tracer és molt senzill.
- Entrarem en mode configuració al router i l’ordre per indicar-li una fila

d’encaminament és la següent

- ip route IP_DESTÍ MÀSCARA [SEGÜENT/INTERFÍCIE] [DISTÀNCIA]
- Si la xarxa no està directament connectada
- ip route XARXA_DESTÍ MÁSCARA_DESTÍ IP_SEGÜENT_BOT [DISTÀNCIA]
- Desde Router 4, per configurar la xarxa 192.168.1.0
- ip route 192.168.1.0 255.255.255.0 10.0.0.2

1 ASIX - PAX Enrutament estàtic a PT

- Quan la xarxa de destí està directament connectada al router, l’ordre canvia ja

que canviem el següent bot per el nom de la interfície a la que està connectada.

- ip route IP_DESTÍ MÀSCARA INTERFÍCIE [DISTÀNCIA]
- Per exemple, per configurar la xarxa 10.0.0.0 al Router 4 executaríem
- ip route 10.0.0.0 255.255.255.0 g0/0

1 ASIX - PAX Enrutament estàtic a PT

- Quan es vol configurar una ruta per defecte (default), es gastarà com a IP de destí

i com a màscara la direcció 0.0.0.0.

- S’intentarà especificar sempre que siga possible la distància o mètrica. Si no es

proporciona, PT per defecte agafarà com a valor predeterminat 0 si la xarxa està directament connectada i 1 si no.

- Si es vol configurar l’encaminament amb IPv6 es gastarà la mateixa sintaxi que per a ipv4 amb la

diferència de la paraula clau.

- Ipv6 route IP_DESTÍ/MÀSCARA [SEGÜENT/INTERFÍCIE] [DISTÀNCIA]

1 ASIX - PAX show ip route

- Per a vore la taula d’encaminament del router executarem la següent

instrucció

- show ip route
- Amb aquesta instrucció vorem tant les rutes apreses dinàmicament com les

apreses estàticament.

- L’eixida del comandament dona molta informació útil per als

administradors de la xarxa.

1 ASIX - PAX show ip route

1 ASIX - PAX show ip route Indica que la ruta per defecte no está configurada Indica que la xarxa 172.16.0.0/16 ha estat dividida amb diferents màscares Indica que la xarxa 172.16.40.0 ha estat apresa mitjançant protocol RIP, a la qual s’accedeix pel bot 172.16.20.2 per la interfície Serial10/0/1 i que aquesta Informació ha estat actualitzada fa 18 segons

1 ASIX - PAX show ip route Indica que la xarxa 172.16.30.0/24 está directament conectada per l’interfície GigabitEthernet 0/0 Representa la propia interfície del dispositiu. La màscara 32 així ho indica.

1 ASIX - PAX show ip route

- El propi comandament té variacions
- show ip route 172.16.40.0
- Es mostra solament la informació referida a eixa xarxa en concret
- show ip route static
- Mostra solament les rutes estàtiques de la taula
- show ip route connected
- Mostra solament les rutes directament connectades de la taula
- show ip route osfp 1
- Mostra solament les rutes apreses mitjançant el protocol dinàmic especificat. En aquest cas, l’1

indica el id del procés. Cada protocol té unes característiques especials.

1 ASIX - PAX Enrutament dinàmic

- Per a que siga possible, els routers tenen que mantenir per un costat les

taules d’enrutament i d’altra banda l’enviament d’informació entre ells per a poder modificar les taules i actualitzar-les en base a l’estat actual de la xarxa.

- Per a que eixe intercanvi d’informació siga possible, es necessario definir

quin protocol d’enrutament dinàmic es gastarà.

1 ASIX - PAX Enrutament dinàmic: característiques

- Algunes de les característiques que tenen en compte els protocols

d’enrutament dinàmics i que cal conèixer son

- Mètrica: Pot ser tan senzill com contar el nombre de routers entre origen i destí o es pot complicar fins

a tindre en compte aspectes com la velocitat de transmissió i el grau de congestió.

- Equilibrat de càrrega: Consisteix en que els protocols dinàmics inclous varies entrades en les seues

taules d’encaminament al mateix destí per així tindre varies rutes. • Maximum-paths número

- Bucles d’enrutament: En ocasions, es poden donar bucles a la xarxa i els protocols intenten evitar-los
- Distàncies administratives: Es comú trobar diversos protocols d’enrutament en la mateixa xarxa. No hi

ha cap que siga ideal. Es probable que en un mateix router també treballe amb diferents protocols i per tant cadascun manté les seues taules. Per decidir a qui fer cas, es gasta la distància administrativa, que és el valor de fiabilitat d’un protocol.

1 ASIX - PAX Enrutament dinàmic: característiques

1 ASIX - PAX Protocols d’enrutament

- Depenent de si el protocol funciona dins d’un àmbit “privat” o fora d’ell es

pot classificar en dos tipus

- IGP (Internet Gateway Protocol): Encaminen la informació dins de l’àmbit privat. RIP1, RIP2, IGRP,

EIGRP, OSPF, IS-IS.

- EGP (Exterior Gateway Protocol): Encaminen entre els àmbits privats. BGP.

1 ASIX - PAX Enrutament per vector-distància

- En aquesta aproximació cada router es preocupa solament d’enviar els missatges

als veïns de forma periòdica i no coneix amb detall la topologia de la resta de la xarxa.

- Per a obtenir aquesta informació, cada encaminador necessita rebre solament la

informació d’encaminament dels seus veïns.

- RIP1, RIP2 i IGRP.

1 ASIX - PAX Enrutament basat en l’estat dels enllaços

- Aquests protocols es caracteritzen per ser més complexos al emmagatzemar informació

de tota la xarxa, no sols dels veïns.

- Cada router, a partir de la informació facilitada pels demés, construeix un arbre jeràrquic

amb els possibles destins i routers intermedis.

- A partir d’aquest arbre, determina quines poden ser les millors rutes.
- Acò necessita major capacitat de processament i memòria.
- OSPF

1 ASIX - PAX Enrutament RIP: Característiques

- Un dels protocols d’enrutament dinàmic més utilitzat, sobretot als inicis

d’Internet.

- Protocol de vector distància (sentit + distància) que utilitza el comptatge de salts

per determina la millor ruta al destí.

- El valor màxim d’aquest comptatge és 15.
- 16 indica distancia infinita (destí inassolible)
- No tenen en compte la velocitat de transmissió dels enllaços, pel que pot

determinar la ruta més lenta com la millor.

1 ASIX - PAX Enrutament RIP: Característiques

- Inclou la direcció IP del següent router en l’actualització d’enrutament.
- Un router envia, cada 30 segons, informació d’actualització de les taules als seus

veïns.

- Quan existeixen varies rutes al mateix destí, es triat la de menys salts.
- Si existeixen varies rutes al mateix destí amb el mateix nombre de salts, el

protocol realitza un balanç de càrrega. Açò implica enviar els missatges alternativament entre les diferents rutes.

1 ASIX - PAX Enrutament RIP: Característiques

1 ASIX - PAX Enrutament RIP: Característiques

- Existeixen 2 versions en l’actualitat del protocol RIP. RIPv1 i RIPv2.
- RIPv1 està en desús ja que té algunes deficiències que corregeix RIPv2, entre les

que es troben

- No envia informació sobre la màscara de xarxa, per tant no suporta subxarxes.
- Incrementa el tràfic de xarxa al enviar les actualitzacions per un missatge de difusió.
- No té en compte la seguretat i permet que persones no autoritzades puguen enviar

informació d’enrutament falsa.

- Tots estos problemes són solucionats per RIPv2

1 ASIX - PAX Enrutament RIPv2: Configuració

- Per a configurar l’encaminament dinàmic RIPv2 als routers CISCO (o Packet Tracer) cal

utilitzar la següent sintaxi

- router protocol [opciones]
- On protocol especifica el nom del protocol a gastar, en aquest cas RIP i a continuació cal

especificar de forma explícita que es va a utilitzar la versió 2 de RIP.

- version 2
- També es necessari especificar les interfícies per les que s’envia i es rep la informació per

actualitzar les taules d’enrutament, es a dir, les xarxes conectades directament

- network direcció_de_xarxa

1 ASIX - PAX Enrutament RIPv2: Configuració

1 ASIX - PAX Enrutament RIPv2: Configuració

1 ASIX - PAX Enrutament RIPv2: Configuració

- Es poden definir altres paràmetres relacionats amb el comportament de

l’algoritme.

- update-timer: valor en segons de l’interval d’enviament de taules d’enrutament.
- neighbor: direcció IP del router veí al que es va a enviar la taula d’enrutament.
- passive-interface: interfície de xarxa per la que es van a enviar les actualitzacions de les taules d’enrutament
- Per a obtenir la relació dels protocols d’enrutament que hi ha actius al dispositiu es pot gastar el

comandament

- show ip protocols

1 ASIX - PAX Enrutament EIGRP: Característiques

- Versió millorada de IGRP. Al igual que RIP, suporta subxarxes i millora algoritme.
- Desarrollat per Cisco.
- Protocol de vector distància que utilitza diferents valors de l’estat dels enllaços per

determina la millor ruta al destí com l’ample de banda, retràs, carrega i fiabilitat.

- Inclou la direcció IP del següent router en l’actualització d’enrutament.
- Un router envia, cada 90 segons, informació d’actualització de les taules als seus veïns.

1 ASIX - PAX Enrutament EIGRP: Característiques

- La fórmula que gasta EIGRP per calcular la mètrica de cada ruta és la següent
- V és la velocitat de l’enllaç
- C és el grau de congestió
- R és el retard
- F és la fiabilitat
- Les K’s són valors constants que es poden modificar per definir una mètrica personalitzada. Per defecte

son 1, 0, 1, 0, 0.

1 ASIX - PAX Enrutament EIGRP : Configuració

- La configuració EIGRP és molt semblant a la de RIP
- Per a configurar l’encaminament dinàmic EIGRP als routers CISCO (o Packet Tracer) cal

utilitzar la següent sintaxi

- router protocol [opciones]
- On protocol especifica el nom del protocol a gastar, en aquest cas eigrp i a continuació

cal especificar el nombre del sistema autònom (un valor comprés entre 1 i 65.535. Podem gastar sempre 1)

- També es necessari especificar les interfícies per les que s’envia i es rep la informació per

actualitzar les taules d’enrutament, es a dir, les xarxes conectades directament

- network direcció_de_xarxa

1 ASIX - PAX Enrutament OSPF : Característiques

- L’algoritme està basat en l’enviament d’informació sobre l’estat dels enllaços als routers

veïns (es a dir, aquells que estan connectats directament).

- Com a mètrica gasta la velocitat de transmissió i el cost dels enllaços.
- Quan un router rep la informació per un dels seus ports, afegeix la informació del seus

propis enllaços i reenvia la informació per inundació a la resta (tots els ports menys 1)

- Per a que no es congestione la xarxa amb aquest tipus de tràfic, el protocol assigna als

routers diferents funcions i prioritats.

1 ASIX - PAX Enrutament OSPF : Característiques

- Els routers es divideixen en
- DR (Designated Router) – Son els designats per a rebre la informació de l’estat dels enllaços i difondre-la a la

resta dels routers.

- BDR (Backup Designated Router) – Routers que poden assumir el rol de DR en cas que aquestos fallen.
- Quan tots els routers reben la informació sobre l’estat dels enllaços, aleshores executen

l’algoritme per determina les millors rutes als possibles destins i construir així les seues taules d’encaminament.

- Quan tots els equips tenen les taules amb la informació, es diu que la xarxa aconsegueix el seu

estat de convergència.

- Quan es produeix algun canvi a la xarxa (a nivell d’estat o d’equip que es connecta/desconnecta),

el router directament connectat envia un missatge de difusió per advertir de la situació i es torna a repetir el procés fins que s’aconsegueix l’estat de convergència de nou.

1 ASIX - PAX Enrutament OSPF : Configuració

- El primer que cal fer és assignar una direcció i màscara a la interfície de bucle (loopback) del

router. Aquesta l’utilitza OSPF per establit l’identificador del router.

- interface loopback0
- ip address direccion 255.255.255.255
- Activar l’encaminament OSPF al router.
- router ospf identificador
- Identificador especifica el nombre del procés associat (podem posar qualsevol entre 1 i 65535).
- Al igual que en altres protocols, també hi ha que identificar les xarxes directament conectades
- network direcció wildcard area número
- El wildcard és lo contrari a la direcció de xarxa. 0.0.0.255. els bits que estan a 0 son els que identifiquen la

xarxa.

- El número es l`àrea a la que pertany la interfície del router. Nosaltres sempre la 0 perquè sols configurarem

una àrea.

1 ASIX - PAX Dubtes?

---

## 12.2 Exemple Enrutament Estàtic

> **📄 Document Escanejat / Visual (Exemple_Enrutament_Estàtic.pdf)**
> Aquest document PDF (1 pàgines) està compost principalment per esquemes o imatges escanejades.

---

## ✍️ Activitats pràctiques UT12

> **✍️ Activitat Pràctica 12.1 — U11A1**
> Unitat 11 – Enrutament U11 – A1
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
>
> ### 1. Crea la taula de forwarding (enrutament o encaminament) per a la següent
>
> topologia
>
> Recorda que la taula ha de contindre com a mínim les següent columnes
>
> Xarxa destí Màscara (format puntejat) Next Hop Métrica
>
> Unitat 11 – Enrutament

> **✍️ Activitat Pràctica 12.2 — U11A2**
> 1ºASIX Forwarding A partir de esta tabla de subnetting: Red N.º Hosts (+2) B it s d e H o s t Mascara Direccion de red IP Inicial IP Final Broadca st RA-RB 2+2 2 255.255.255.252 /30 200.0.0.0/30 200.0.0.1 200.0.0.2/30 200.0.0.3/ RA-RF 2+2 2 255.255.255.252 /30 200.0.0.4/30 200.0.0.5/30 200.0.0.6/30 200.0.0.7/ RA-RD 2+2 2 255.255.255.252 /30 200.0.0.8/30 200.0.0.9/30 200.0.0.10/30 200.0.0.1 1/30 RD-RC 2+2 2 255.255.255.252 /30 200.0.0.12/30 200.0.0.13/30 200.0.0.14/30 200.0.0.1 5/30 RD-RE 2+2 2 255.255.255.252 /30 200.0.0.16/30 200.0.0.17/30 200.0.0.18/30 200.0.0.1
>
> 1ºASIX Forwarding 9/30 Malaga 4+2 3 255.255.255.248 /29 200.0.0.24/29 200.0.0.25/29 200.0.0.30/29 200.0.0.3 1/29 Santander 4+2 3 255.255.255.248 /29 200.0.0.32/29 200.0.0.33/29 200.0.0.38/29 200.0.0.3 9/29 Madrid 10+2 4 255.255.255.240 /28 200.0.0.48/28 200.0.0.49/28 200.0.0.62/28 200.0.0.6 3/28 Barcelona 10+2 4 255.255.255.240 /28 200.0.0.64/28 200.0.0.65/28 200.0.0.78/28 200.0.0.7 9/28 VLC Central 25+2 5 255.255.255.224 /27 200.0.0.96/27 200.0.0.97/27 200.0.0.126/27 200.0.0.1 27/27 Fabrica 126+2 7 255.255.255.128 /25 200.0.0.128/25 200.0.0.129/28 200.0.0.254/25 200.0.0.2 55/25
>
> - Construye la tabla de forwarding (tabla de enrutamiento) del router RA indicando
>
> Máscara Dirección de red Siguiente Salto Interfaz Debe especificarse la máscara que hay que aplicar a la dirección IP destino del datagrama para contrastar con la dirección de red almacenada en la tabla. Dirección IP que se contrasta para verificar la salida correspondiente Si se trata de encaminamiento directo se especifica la dirección propia del router en esa red. Si es indirecto se especifica la dirección IP del siguiente router.
>
> Número de interfaz por el que sale el router. Las tablas han de tener el MÍNIMO número de entradas necesarias para alcanzar cualquier destino.
>
> - Indica cual sería el siguiente salto para los paquetes cuyas direcciones IP destino fueran
>
> 200.0.0.70 200.0.0.8 200.0.0.127 200.0.0.40 156.7.1.34 2.- Dada la siguiente distribución de redes de clase C en la que los switches se han obviado
>
> 1ºASIX Forwarding
>
> - Construye la tabla de enrutamiento
>
> a1) Router R1 a2) Router R2 a3) Router R3 ROUTER X Máscara Dirección de red Interfaz de salida Siguiente Salto
>
> - Explica la ruta de un paquete enviado por el ordenador 1 de la subred 150.72.3.0 con destino el
>
> servidor de YouTube (216.58.201.174)

> **✍️ Activitat Pràctica 12.3 — U11 Grupal**
> Unitat 11 – Encaminaments dinàmics
>
> U11 – Grupal
>
> En grups, prepara una presentació sobre un dels següents protocols d’encaminament dinàmics (els triem a classe)
>
> - RIP
> - OSPF
> - EIGRP
>
> Cada grup prepararà una presentació per explicar el protocol. Per fer-ho pot fer servir tantes ferramentes com necessite, sent obligatori una part de configuració del protocol amb Packet Tracer.
>
> La duració de la presentació no deu excedir els 10 minuts aproximadament i tots els membres de l’equip deuen estar un temps equitatiu exposant.
>
> Al finalitzar l’exposició, tant els companys com el professor podran realitzar preguntes a qualsevol membre del grup sobre qualsevol tema de l’exposició (no necessàriament el que ha exposat).
>
> La rubrica que es gastarà per avaluar és la següent
>
> EXCEL·LENT MOLT BÉ SUFICIENT INSUFICIENT
>
> ### 1. Presentació del
>
> projecte El ponent es presenta, planteja el tema del projecte i les parts que desenvoluparà. Resumeix les diferents parts del treball. El ponent es presenta, però no desenvolupa completament la resta d’aspectes. No es presenten el ponent o el projecte, ni es fa un resum de les diferents parts del treball.
>
> Es presenta de manera inadequada. 2.- Veu El volum i l’entonació són els adequats, la veu clara i la vocalització bona. El volum és prou alt bona part bona part del temps, la veu clara i la vocalització bona. Costa entendre alguns fragments, i el nivell és baix en la claredat o vocalització.
>
> El volum és dèbil com per a ser escoltat per tota la classe. Molts fragments no s’entenen.
>
> ### 3. Postura del cos,
>
> gestualitat i contacte visual Té bona postura i els moviments que fa són naturals. Realitza gestos per a facilitar la comprensió del discurs. Estableix contacte visual amb la resta de companys. En general té bona, realitza gestos per a facilitar la comprensió del discurs i estableix contacte visual amb la resta de companys.
>
> En moltes ocasions els moviments que fa no són naturals, no realitza gestos o no en fa amb la finalitat adequada i no estableix contacte visual. Té una postura rígida. No usa gestos adequats. No estableix contacte visual amb la resta de l’alumnat durant la presentació.
>
> Unitat 11 – Encaminaments dinàmics
>
> ### 4. Discurs i
>
> vocabulari El seu discurs és molt clar, sense incorreccions gramaticals, amb un lèxic ric i s’ajusta al tema. Adequa el seu registre a la situació comunicativa. El seu discurs és correcte¡ i té cura de tots els aspectes. Utilitza paraules pròpies sense barbarismes. Parla sense abusar de repeticions i/o tics lingüístics.
>
> Respecta el registre. El seu discurs presenta bastants incorreccions, però en general el llenguatge és clar i usa un lèxic adequat al tema. No respecta en tot moment el registre. Discurs pobre. Ple d’incorreccions. El lèxic no és l’adequat al tema. Usa un registre inapropiat.
>
> ### 5. Temps
>
> La durada de la intervenció és l’adequada al contingut exposat.
>
> La durada de la intervenció és quasi l’adequada al contingut exposat.
>
> La durada de la intervenció és excessivament llarga o ha faltat temps. Ha acabat molt ràpidament o ha utilitzat molt més temps del previst.
>
> ### 6. Atenció i interés
>
> Capta l’atenció en tot moment. Quasi sempre capta l’atenció. Quasi mai capta l’atenció. No capta l’atenció de l’alumnat.
>
> ### 7. Preparació prèvia
>
> S’ho ha preparat molt bé. No necessita llegir el suport material que l’acompanya.
>
> Bastant preparat. Algunes vegades llegeix l’esquema.
>
> En alguns moments no llegeix, es nota que algunes parts les porta més preparades. No és capaç d’exposar sense llegir el paper.
>
> ### 8. Contingut
>
> Entén el que explica. El contingut és ampli.
>
> Quasi sempre entén el que explica. El contingut està treballat.
>
> En moltes ocasions no entén el que explica. Apareixen contingutssobrers i inadequats o en falten. No entén el que explica. El contingut no està treballat
>
> ### 9. Material de suport
>
> El material de suport (pòsters, murals, vídeos, etc.) és creatiu i útil per a la comprensió de l’exposició.
>
> En general el material de suport acompleix els requisits i ajuda a la comprensió de l’exposició.
>
> El material de suport no és creatiu,però ajuda a la comprensió de l’exposició.
>
> Ni la creativitat del material de suport és l’adequada ni aconsegueix l’objectiu d’ajudar en la comprensió de l’exposició.
>
> ### 10. Domini del tema
>
> (i resolució de dubtes) Respon les preguntes que li plantegen després de l’exposició, resol dubtes. Respon quasi totes les preguntes plantejades. Respon alguna pregunta, no domina suficientment el tema. No sap respondre les preguntes plantejades, no té domini del tema.

> **✍️ Activitat Pràctica 12.4 — Auto i Co-Avaluació Grupal**
> ### 📄 Auto_CoAvaluació.pdf
>
> PAX
>
> Auto-Avaluació I Co-Avaluació
>
> Has acabat la feina. Com passa a les grans empreses, alguna gent contribueix més que altra. Ara és el moment d’avaluar-la.
>
> Instruccions
>
> - Tens un nombre màxim de punts que pots distribuir entre tots
>
> els membres de l’equip. Aquest nombre màxim de punts és 25.
>
> - Pots assignar un màxim de 10 punts a cada company.
> - No es obligatori gastar els 25 punts.
> - El comentari és obligatori.
> - Tu també tens que avaluar-te.
>
> NAME MARK COMMENT
>
> ### 📄 Auto_CoAvaluació.docx
>
> Auto-Avaluació I Co-Avaluació
>
> Has acabat la feina. Com passa a les grans empreses, alguna gent contribueix més que altra. Ara és el moment d’avaluar-la.
>
> Instruccions
>
> - Tens un nombre màxim de punts que pots distribuir entre tots els membres de l’equip. Aquest nombre màxim de punts és 25.
>
> - Pots assignar un màxim de 10 punts a cada company.
>
> - No es obligatori gastar els 25 punts.
>
> - El comentari és obligatori.
>
> - Tu també tens que avaluar-te.
>
> | NOM | NOTA | COMENTARI |
> | --- | --- | --- |

> **✍️ Activitat Pràctica 12.5 — U11A3**
> Unitat 11 – Enrutament U11 – A3
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
>
> ### 1. Estableix la configuració d’enrutament amb RIPv2 per als tots els routers
>
> de la següent imatge. Recorda que cal configurar prèviament les direccions IP’s i que no existeixen rutes estàtiques definides.

> **✍️ Activitat Pràctica 12.6 — U11A4**
> Unitat 11 – Enrutament U11 – A4
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
>
> ### 1. Estableix la configuració d’enrutament amb EIGRP per als tots els routers
>
> de la següent imatge. Recorda que cal configurar prèviament les direccions IP’s i que no existeixen rutes estàtiques definides.

> **✍️ Activitat Pràctica 12.7 — U11A5**
> Unitat 11 – Enrutament U11 – A5
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
>
> ### 1. Estableix la configuració d’enrutament amb OSPF per als tots els routers
>
> de la següent imatge. Recorda que cal configurar prèviament les direccions IP’s i que no existeixen rutes estàtiques definides.

> **✍️ Activitat Pràctica 12.8 — U11P1**
> Unitat 11 – Enrutament U11 – P1
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
>
> - Implementa la solució del exercici 2 de l’activitat U11A2 a Packet Tracer.
>
> Cal que tots els routers tinguen configurades correctament les taules d’encaminament i que hagen estat configurades mitjançant la terminal. Entrega el fitxer Packet Tracer i recorda incloure el teu nom amb una etiqueta a la solució.

> **✍️ Activitat Pràctica 12.9 — U11P2**
> © 2014 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Packet Tracer: comparación de la selección de rutas RIP y EIGRP Topología
>
> Objetivos Parte 1: predecir la ruta Parte 2: rastrear la ruta Parte 3: preguntas de reflexión Situación La PCA y la PCB necesitan comunicarse. La ruta que toman los datos entre estas terminales puede recorrer el R1, el R2 y el R3, o bien el R4 y el R5. El proceso por el cual los routers seleccionan la mejor ruta depende del protocolo de routing. Examinaremos el comportamiento de dos protocolos de routing vector distancia: el protocolo de routing de gateway interior mejorado (EIGRP) y el protocolo de información de routing versión 2 (RIPv2).
>
> Parte 1: predecir la ruta Las métricas son factores que se pueden medir. En el diseño de cada protocolo de routing se tienen en cuenta las diferentes métricas en el momento de considerar cuál es la mejor ruta para enviar datos. Estas métricas incluyen el conteo de saltos, el ancho de banda, el retraso, la confiabilidad y el costo de la ruta, entre otros factores.
>
> Parte 1: considerar las métricas de EIGRP.
>
> - El EIGRP puede considerar muchas métricas. Sin embargo, las métricas que utiliza de manera
>
> predeterminada para determinar la selección de la mejor ruta son el ancho de banda y el retraso.
>
> - Sobre la base de las métricas, ¿qué ruta cree que seguirán los datos desde la PCA hasta la PCB?
>
> ____________________________________________________________________________________
>
> Packet Tracer: comparación de la selección de rutas RIP y EIGRP © 2014 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco. Parte 2: considerar las métricas de RIP.
>
> - ¿Qué métricas utiliza el protocolo RIP? __________________
> - Sobre la base de las métricas, ¿qué ruta cree que seguirán los datos desde la PCA hasta la PCB?
>
> ____________________________________________________________________________________ Parte 2: rastrear la ruta Parte 1: examinar la ruta EIGRP.
>
> - En el RA, utilice el comando adecuado para ver la tabla de routing. ¿Qué códigos de protocolo se indican
>
> en la tabla y qué protocolos representan? ________________________________________________
>
> - Rastree la ruta de la PCA a la PCB.
>
> ¿Qué ruta siguen los datos? ___________________________________________________________ ¿A cuántos saltos está el destino? __________________ ¿Cuál es el ancho de banda mínimo en la ruta? __________________ Parte 2: examinar la ruta RIPv2. Es posible que haya advertido que, mientras se configura RIPv2, los routers omiten las rutas que genera, porque prefieren el EIGRP. Los routers Cisco utilizan una escala llamada “distancia administrativa”, y es necesario cambiar ese número para que RIPv2 en el RA haga que el router prefiera el protocolo.
>
> - Para fines de referencia, utilice el comando adecuado para mostrar la tabla de routing del RA. ¿Cuál es
>
> el primer número entre corchetes de cada entrada de ruta EIGRP? __________________
>
> - Establezca la distancia administrativa de RIPv2 con los siguientes comandos. Esto hace que el RA elija
>
> las rutas RIP por sobre las rutas EIGRP. RA(config)# router rip RA(config-router)# distance 89
>
> - Espere un minuto y muestre la tabla de routing nuevamente. ¿Qué códigos de protocolo se indican en la
>
> tabla y qué protocolos representan? ____________________________________
>
> - Rastree la ruta de la PCA a la PCB.
>
> ¿Qué ruta siguen los datos? ___________________________________________________________ ¿A cuántos saltos está el destino? __________________ ¿Cuál es el ancho de banda mínimo en la ruta? __________________
>
> - ¿Cuál es el primer número entre corchetes de cada entrada de ruta RIP? __________________
>
> Parte 3: Preguntas de reflexión
>
> - ¿Qué métricas omite el protocolo de routing RIPv2? ____________________________________________
>
> ¿Cómo podría afectar su rendimiento? _______________________________________________________________________________________
>
> - ¿Qué métricas omite el protocolo de routing EIGRP? __________________
>
> ¿Cómo podría afectar su rendimiento? _______________________________________________________________________________________
>
> Packet Tracer: comparación de la selección de rutas RIP y EIGRP © 2014 Cisco y/o sus filiales. Todos los derechos reservados. Este documento es información pública de Cisco.
>
> - Para acceder a Internet, ¿prefiere menos saltos o más ancho de banda? __________________
> - ¿Es adecuado un solo protocolo de routing para todas las aplicaciones? ¿Por qué?
>
> _______________________________________________________________________________________ _______________________________________________________________________________________ _______________________________________________________________________________________ Tabla de calificación sugerida Sección de la actividad Ubicación de la pregunta Puntos posibles Puntos obtenidos Parte 1: predecir la ruta Paso 1-b
>
> Paso 2-a
>
> Paso 2-b
>
> Total de la parte 1
>
> Parte 2: rastrear la ruta Paso 1-a
>
> Paso 1-b
>
> Paso 2-a
>
> Paso 2-c
>
> Paso 2-d
>
> Paso 2-e
>
> Total de la parte 2
>
> Parte 3: preguntas de reflexión
>
> Total de la parte 3
>
> Puntuación total

> **✍️ Activitat Pràctica 12.10 — U11P3**
> Packet Tracer: Configuración de OSPFv3 básico en un área única Topología
>
> Tabla de direccionamiento Dispositivo Interfaz Dirección/Prefijo IPv6 Gateway predeterminado R1 G0/0 2001:db8:cafe:1::1/64 N/D S0/0/0 2001:db8:cafe:a001::1/64 N/D S0/0/1 2001:db8:cafe:a003::1/64 N/D R2 G0/0 2001:db8:cafe:2::1/64 N/D S0/0/0 2001:db8:cafe:a001::2/64 N/D S0/0/1 2001:db8:cafe:a002::1/64 N/D R3 G0/0 2001:db8:cafe:3::1/64 N/D S0/0/0 2001:db8:cafe:a003::264 N/D S0/0/1 2001:db8:cafe:a002::2/64 N/D PC1 NIC 2001:db8:cafe:1::10/64 fe80::1 PC2 NIC 2001:db8:cafe:2::10/64 fe80::2 PC3 NIC 2001:db8:cafe:3::10/64 fe80::3 Objetivos Parte 1: Configurar el routing OSPFv3 Parte 2: Verificar la conectividad
>
> Packet Tracer: Configuración de OSPFv3 básico en un área única
>
> Aspectos básicos En esta actividad, el direccionamiento IPv6 ya está configurado. Usted es responsable de configurar la topología de tres routers con OSPFv3 básico de área única y, a continuación, de verificar la conectividad entre las terminales. Parte 1: Configurar el routing OSPFv3 Paso 1
>
> Configurar OSPFv3 en R1, R2 y R3. Utilice los siguientes requisitos para configurar el routing OSPF en los tres routers: -Habilitación del routing IPv6 -ID de proceso 10 -ID del router para cada router: R1 = 1.1.1.1; R2 = 2.2.2.2; R3 = 3.3.3.3 -Habilitación de OSPFv3 en cada interfaz Nota: la versión 6.0.1 de Packet Tracer no admite el comando auto-cost reference-bandwidth, por lo que no se ajustan los costos de ancho de banda en esta actividad.
>
> Paso 2: Verificar que el routing OSPF funcione. Verifique que todos los routers hayan establecido adyacencia con los otros dos routers. Verifique que en la tabla de routing haya una ruta a cada red de la topología. Parte 2: Verificar la conectividad Cada computadora debe poder hacer ping a las otras dos computadoras. De lo contrario, revise las configuraciones.
>
> > **⚠️ Nota: esta actividad se califica únicamente con pruebas...**
> > Nota: esta actividad se califica únicamente con pruebas de conectividad. En la ventana de instrucciones no se mostrará su puntuación. Para ver su puntuación, haga clic en Check Results (Verificar resultados) > Assessment Items (Elementos de evaluación). Para ver los resultados de una prueba de conectividad específica, haga clic en Check Results > Connectivity Tests (Pruebas de conectividad).
