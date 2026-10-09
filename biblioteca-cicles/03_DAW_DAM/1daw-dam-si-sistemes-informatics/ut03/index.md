---
layout: default
title: "UT3 — ADMINISTRACIÓ DE PROGRAMARI DE BASE PROPIETARI — Sistemes Informàtics | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT3 Completa"
prev_url: "../ut02/ut02actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT2"
next_url: "../ut03/ut0301.html"
next_label: "3.1 TEORIA XARXES ➡️"
---

# 📘 UT3 — ADMINISTRACIÓ DE PROGRAMARI DE BASE PROPIETARI (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**3.1 TEORIA XARXES**](#ut0301) (o [obrir en pàgina individual ➡️](./ut0301.md) )
> - [**3.2 TEORIA SUBNETTING**](#ut0302) (o [obrir en pàgina individual ➡️](./ut0302.md) )
> - [**✍️ Activitats pràctiques UT3**](#ut03actividades) (o [obrir en pàgina individual ➡️](./ut03actividades.md) )

---

## 3.1 TEORIA XARXES

> **🔗 Recurs Web: Conceptos básicos de una estructura de directorio activo**
> [**🌐 Obrir recurs extern (http://somebooks.es/3-2-conceptos-basicos-en-una-estructura-de-directorio-activo/) ↗️**](http://somebooks.es/3-2-conceptos-basicos-en-una-estructura-de-directorio-activo/)
>
> En este enlace de somebooks.es, se detallan con buen acierto los elementos que participan en Active Directory. Estudiadlo con atención.

> **🔗 Recurs Web: Tipos de grupos en Active Directory**
> [**🌐 Obrir recurs extern (https://adicciontecno.com/tipos-de-grupos-del-directorio-activo/) ↗️**](https://adicciontecno.com/tipos-de-grupos-del-directorio-activo/)
>
> En la actividad 4 de esta unidad, os puse unas definiciones de grupos de Active Directory que no me parecieron muy acertadas. Por ello, os remito este enlace donde se clarifican los conceptos abordados sobre grupos de Active Directory.

> **🔗 Recurs Web: GRUPOS Y ÁMBITOS DE GRUPO DE ACTIVE DIRECTORY, GPO**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=OQMKOm7Ut3Y) ↗️**](https://www.youtube.com/watch?v=OQMKOm7Ut3Y)

---

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO

▪ Administración de usuarios i grupos ▪ Usuarios del Windows ▪ Tipos de cuentas de usuario. Gestión de contraseñas. ▪ Modificación de las contraseñas. ▪ Perfiles de usuarios locales y grupos de usuarios ▪ Dominios y grupos de trabajo. ▪ Navegación ▪ Controlador de dominio. ▪ Dominio Active Directory.

▪ Configuración del protocolo de red ▪ Protocolos ▪ Modelo TCP/IP ▪ Proceso de comunicación ▪ Direccionamiento de red ▪ Protocolos de capa 2 de TCP/IP ▪ Direccionamiento y clases IPv4 ▪ Direccionamiento estático o dinámico para dispositivos de usuario final ▪ Desfragmentar el disco duro ▪ Limpiar el disco duro

Introducció a les Xarxes

- A l’any 1833 va aparèixer el telègraf (Samuel Morse).
- La evolució que han patit les xarxes ha estat molt gran.

En primer lloc xarxes telegràfiques. Posteriorment xarxes telefòniques.

Aquest panorama va canviar amb l’aparició de l’ordinador (1940)

Definició de xarxa Una xarxa informàtica és un grup d’ordinadors interconnectats amb la finalitat d’intercanviar dades o compartir recursos. Tipus de xarxes Segons l’abast

- PAN, xarxa d'àrea personal
- LAN, xarxa d’àrea local
- MAN, xarxa d’àrea metropolitana
- WAN, xarxa d’àrea estesa

Segons el mètode de connexió

- Xarxes guiades. El medi físic és el cable.

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

- Xarxes no guiades. El medi físic és el buit.

Tipus de xarxes Segons la funcionalitat

- Client-Servidor.

En informàtica s’anomena arquitectura de xarxa client-servidor la relació que s’estableix entre dos ordinadors, en la qual el servidor ofereix un recurs de qualsevol tipus a l’altre, el client, perquè en traga algun profit o avantatge. Generalment, d’un servidor se’n beneficien diversos o molts clients.

- Igual a Igual.

Les xarxes d’igual a igual defineixen un sistema de comunicació que no té clients ni servidors fixos, sinó una sèrie de màquines que es comporten alhora com a clients i com a servidors de les altres màquines de la xarxa. Em aquest sistema les dades es transmeten per mitjà d’una xarxa dinàmica.

Segons la topologia

- Xarxa en anell
- Xarxa en estrella
- Xarxa en bus
- Xarxa en arbre
- Xarxa en malla

Segons la direccionalitat de les dades

- Simplex (per exemple, audio o vídeo per Internet)
- Half-duplex o semiduplex (per exemple, Walkie-Talkie)
- Full-duplex o duplex (per exemple, videoconferència)

Cablatge i connectors

- Cable
- Parell trenat (cable UTP)
- Cable coaxial
- Fibra òptica
- Sense fil

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

Adreces IP

- Podem trobar la versió 4 del protocol IP. Una adreça IP està formada per 32 bits

(quatre octets).

- Exemple d’adreça IP: 192.33.45.6
- (També existeix IPv6) de 128 bits

Màscara de subxarxa: permet identificar la topologia de la xarxa. Permet identificar si una xarxa està dividida o no en subxarxes.

- Els bits que fan referència a la xarxa són “1”
- Els bits que fan referència als host són “0”

Classes de xarxes

- Classe A: Primer bit de l’adreça IP és “0” (de la 0 a la 127)
- Classe B: Primer bit de l’adreça IP és “1” i el segon bit és “0”(de la 128 a la 191)
- Classe C: Primer bit de l’adreça IP és “1”, el segon bit és “1” i el tercer bit és “0”. (de

la 192 a la 223)

- Classe D: Xarxes multicast
- Classe E: Xarxes experimentals

Adreces privades

- Classe A: 10.0.0.0 a 10.255.255.255 (10.0.0.0 /8)
- Classe B: 172.16.0.0 a 172.31.255.255 (172.16.0.0 /16)
- Classe C: 192.168.0.0 a 192.168.255.255 (192.168.0.0 /24)

Altres adreces d'interès

- 0.0.0.0 Utilitzada pels dispositius quan estan engegant o no tenen adreça IP.
- 127.X.X.X Utilitzada per a proves. Es denomina adreça de bucle o de loopback.
- 169.X.X.X S’activa quan falla el mecanisme normal par assignar IP. Existeix un fallo al

cable de xarxa, dispositiu, etc. Model OSI i TCP/IP Un poc d’història...

- Cap als 70, ISO va dissenyar un model de referència OSI.
- La idea era permetre el desenvolupament de protocols de diferents fabricants.
- OSI divideix en 7 capes.
- El model que segueix Internet és el model TCP/IP.
- TCP/IP va ser desenvolupat abans que OSI.
- OSI i TCP/IP engloben tot allò que té a veure en el funcionament d’una xarxa.

funcionament d’una Xarxa

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

Model OSI Per a reduir la complexitat, les xarxes s’organitzen en capes o nivells, cadascuna construïda sobre la inferior. El propòsit de cada capa es oferir serveis a les capes superiors de manera que no hagen d’ocupar-se de la implementació d’estos serveis. La capa n de una màquina du una conversa amb la capa n d’un altra màquina. Les regles que es segueixen en esta conversació s’anomenen protocols de capa n. Bàsicament un protocol establix com va a procedir la comunicació entre estes dos màquines.

Entre cada parell de capes adjacents, n’hi ha una interfície que definix les operacions i serveis que ofereix la capa inferior a la superior. “Si una interfície està ben definida, es fàcil canviar d’implementació perquè l’únic que s’ha de fer és implementar és oferir els serveis que oferia l’anterior” El conjunt de capes i protocols rep el nom d’arquitectura de xarxa.

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

S’ha d’entendre que quan es produix una comunicació des de la capa d’aplicació fins a la física la capa d’aplicació genera un missatge amb una capçalera i la entrega a la capa inferior, la de presentació, per a la seua transmissió. Esta capa col·loca un altra capçalera al principi del missatge per a identificar-lo i passa el resultat a la següent capa inferior, la de sessió. La capçalera inclou informació de control, números de seqüència, per a que la capa de presentació de la màquina receptora, puga entregar els missatges en l’ordre correcte si les capes inferiors no mantenen la seqüència.

En la màquina receptora, el missatge avança cap a dalt, de capa en capa, perdent les capçaleres conforme va pujant. Així fins que arriba a la capa d’aplicació.

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

Com es pot veure a la imatge anterior, a partir de la capa 4 del modelo OSI les comunicacions son extrem a extrem (d’ordinador a ordinador o de servidor a ordinador) mentre que les comunicacions amb un router des d’un pc serien totes treballant des de la capa 1 (física) fins a la capa 3 (xarxa).

Model TCP/IP

- TCP/IP no és un protocol, són una pila de protocols (una suite de protocols).
- S’implementen tant en el host emissor com en el receptor.
- La capa 1 del model TCP/IP s’implementa en hardware mitjançant la targeta de xarxa,

mentre que la part de software s’aconsegueix mitjançant el drivers o els controladors de la targeta.

- La resta de capes de l’arquitectura TCP/IP s’implementa mitjançant el NOS (network

operating system), que es el software que implementa la pila de protocols i encarregat de que el sistema informàtic puga comunicar-se amb altres equips constituint una xarxa.

TCP/IP (procés complet de comunicació)

- Creació de dades en la capa d’aplicació del dispositiu d’origen.

### 2. Segmentació i encapsulació de dades quan passen per la pila de protocols en el

dispositiu d’origen.

- Generació de les dades sobre el mitjà en la capa d’accés a la Xarxa.

### 4. Transport de les dades per la Xarxa, que està formada pels mitjans i qualsevol

dispositiu intermediari.

- Recuperació de les dades en la capa d’accés a la Xarxa del dispositiu de destinació.
- Desencapsulació i rearmament de les dades en passar per la pila en el dispositiu final.

### 7. Traspàs d’aquestes dades a l’aplicació de destinació corresponent a la capa

d’aplicació del dispositiu de destinació.

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

En cada capa o nivell el tamany i tipus de

- Transport: Segments
- Internet: Paquets
- Access a la xarxa: Trames(capa 2) i bits convertits en

senyals elèctriques)

Adreçament físic

- Correspon al número d’identificació de nivell 2 (OSI) i s’anomena MAC.
- És individual i únic per a cada dispositiu.
- És un identificador de 6 blocs hexadecimals.
- El protocol encarregat d’esbrinar l’adreçament MAC és l’ARP (Adress Resolution

Protocol). Protocol ARP

- Aquest protocol permet que els ordinadors facen difusió d’una petició ARP,

demanant la MAC, la qual correspon a una IP.

- Cada màquina va aprenent les MAC i IP dels veïns.
- Les MAC i IP s’emmagatzemen en la Taula ARP.

Adreçament lògic

- Són les adreces IP. Actualment les més utilitzades són IP versió 4.
- Les adreces IP són adreces de nivell 3 (OSI).

Màscara de xarxa La màscara de xarxa permet distingir els bits que identifiquen la xarxa i els que identifiquen el host o màquina en una adreça IP. Per exemple, una màscara

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

255.0.0.0 indica que el primer octet identifica la xarxa i els altres tres octets identifiquen el host.

Subnetting Creació de subxarxes o subneting

- Consisteix en dividir una xarxa en segments de xarxa o subxarxes. És habitual fer

aquesta divisió en funció de criteris geogràfics.

- Pisos d’un edifici connectats per una LAN
- Diferents edificis connectats per una WAN
- Subxarxes per departaments a una empresa (màrqueting, I+D+I, etc.)

Avantatges de les subxarxes Millora la seguretat i el rendiment global:Les subxarxes s’han de connectar entre si mitjançant encaminadors (routers). Serà més fàcil filtrar els paquets que no van destinats a una xarxa. Simplifica la resolució de problemes:Com la xarxa està segmentada, resulta més fàcil identificar els problemes. Els problemes només afectaran a un segment de la xarxa (a una subxarxa).

La creació de subxarxes permet aïllar el trànsit de cada xarxa

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

Més exemples

- Es vol segmentar una xarxa de tipus C amb la IP 193.25.31.0 en subxarxes que

puguen contenir 80 host cadascuna, quina màscara hem d’utilitzar?.

- Subneting de classe C. Quantes subxarxes es poden produir en una màscara de

subxarxa 255.255.255.240 ?.

- Quantes subxarxes es poden obtenir d’una màscara de subxarxa i de l’adreça de

xarxa?.

- IP: 199.42.78.0, màscara 255.255.255.192.
- Subneting de classe B. En la IP 170.23.55.23 i la màscara 255.255.224.0, esbrina les

dades de les 4 primeres subxarxes i les de l’última subxarxa. Esbrinar a quina xarxa pertany una IP

- Hem de saber una IP i una màscara de subxarxa.
- Passar la IP a binari.
- Posar baix de la IP en binari, la màscara en binari.
- Fer la operació AND (en vertical).

### 4. Ara, per esbrinar la direcció de broadcast, posem la màscara invertida, baix de la IP

de xarxa.

- Fem l’operació OR i ja tenim la ip de broadcast.

CONTINGUTS UD4: ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO Teoria xarxes

Encaminament Definició d’encaminament: L’encaminament IP és una de les funcions fonamentals que els dispositius encaminadors han de fer. Consisteix fonamentalment a determinar quina és la ruta que ha de seguir un paquet de dades d’un host d’origen fins a un host de destinació, basant-se en factors com poden ser els següents

- Nombre de salts de l’origen a la destinació
- Amplada de banda de la línia
- Nombre d’usuaris connectats
- Prioritats

1. Encaminament estàtic Són aquelles rutes que l’administrador introdueix manualment S’ha de conèixer la xarxa.

- Es poden definir rutes concretes per accedir a una destinació.
- Amb show ip route veiem la taula de l’encaminador.
- Amb 0.0.0.0 la ruta podrà ser qualsevol.

2. Encaminament dinàmic Les rutes es generen automàticament quan activem els protocol, per la qual cosa, les taules d’encaminament es configuren automàticament. Si hi ha un canvi de xarxa, les rutes s’auto configuraran automàticament.

- S’ha de tenir en conter que es poden presentar problemes de redundància i es poden

generar bucles d’encaminament.

- Quan tots els encaminadors han generat les seues taules i han actualitzat als

dispositius veïns, es diu que han convergit.

- Utilitzarem d’exemple el PROTOCOL RIP.

Protocol RIP

- És un protocol de vector distància  La millor ruta es determina pel menor número de

salts.

- S’utilitza per a xarxes petites i mitjanes.
- No és un protocol propietari.
- L’encaminador coneix les rutes que té directament connectades.
- Anuncia a totes les xarxes que coneix la seva configuració.
- Escolta les actualitzacions externes i les difon.

---

## 3.2 TEORIA SUBNETTING

Tutorial de Subneteo Clase A, B, C - Ejercicios de Subnetting CCNA 1

La función del Subneteo o Subnetting es dividir una red IP física en subredes lógicas (redes más pequeñas) para que cada una de estas trabajen a nivel envío y recepción de paquetes como una red individual, aunque todas pertenezcan a la misma red física y al mismo dominio.

El Subneteo permite una mejor administración, control del tráfico y seguridad al segmentar la red por función. También, mejora la performance de la red al reducir el tráfico de broadcast de nuestra red. Como desventaja, su implementación desperdicia muchas direcciones, sobre todo en los enlaces seriales.

Dirección IP Clase A, B, C, D y E

Las direcciones IP están compuestas por 32 bits divididos en 4 octetos de 8 bits cada uno. A su vez, un bit o una secuencia de bits determinan la Clase a la que pertenece esa dirección IP. Cada clase de una dirección de red determina una máscara por defecto, un rango IP, cantidad de redes y de hosts por red.

Cada Clase tiene una máscara de red por defecto, la Clase A 255.0.0.0, la Clase B 255.255.0.0 y la Clase C 255.255.255.0. Al direccionamiento que utiliza la máscara de red por defecto, se lo denomina “direccionamiento con clase” (classful addressing).

Siempre que se subnetea se hace a paritr de una dirección de red Clase A, B, o C y está se adapta según los requerimientos de subredes y hosts por subred. Tengan en cuenta que no se puede subnetear una dirección de red sin Clase ya que ésta ya pasó por ese proceso, aclaro esto porque es un error muy común. Al direccionamiento que utiliza la máscara de red adaptada (subneteada), se lo denomina “direccionamiento sin clase” (classless addressing).

En consecuencia, la Clase de una dirección IP es definida por su máscara de red y no por su dirección IP. Si una dirección tiene su máscara por defecto pertenece a una Clase A, B o C, de lo contrario no tiene Clase aunque por su IP pareciese la tuviese. Máscara de Red

La máscara de red se divide en 2 partes: Porción de Red: En el caso que la máscara sea por defecto, una dirección con Clase, la cantidad de bits “1” en la porción de red, indican la dirección de red, es decir, la parte de la dirección IP que va a ser común a todos los hosts de esa red.

En el caso que sea una máscara adaptada, el tema es más complejo. La parte de la máscara de red cuyos octetos sean todos bits “1” indican la dirección de red y va a ser la parte de la dirección IP que va a ser común a todos los hosts de esa red, los bits “1” restantes son los que en la dirección IP se van a modificar para generar las diferentes subredes y van a ser común solo a los hosts que pertenecen a esa subred (asi explicado parece engorroso, así que

más abajo les dejo ejemplos). En ambos caso, con Clase o sin, determina el prefijo que suelen ver después de una dirección IP (ej: /8, /16, /24, /18, etc.) ya que ese número es la suma de la cantidad de bits “1” de la porción de red. Porción de Host: La cantidad de bits "0" en la porción de host de la máscara, indican que parte de la dirección de red se usa para asignar direcciones de host, es decir, la parte de la dirección IP que va a variar según se vayan asignando direcciones a los hosts.

Ejemplos

Si tenemos la dirección IP Clase C 192.168.1.0/24 y la pasamos a binario, los primeros 3 octetos, que coinciden con los bits “1” de la máscara de red (fondo bordó), es la dirección de red, que va a ser común a todos los hosts que sean asignados en el último octeto (fondo gris). Con este mismo criterio, si tenemos una dirección Clase B, los 2 primeros octetos son la dirección de red que va a ser común a todos los hosts que sean asignados en los últimos 2 octetos, y si tenemos una dirección Clase A, el 1 octeto es la dirección de red que va a ser común a todos los hosts que sean asignados en los últimos 3 octetos.

Si en vez de tener una dirección con Clase tenemos una ya subneteada, por ejemplo la 132.18.0.0/22, la cosa es más compleja. En este caso los 2 primeros octetos de la dirección IP, ya que los 2 primeros octetos de la máscara de red tienen todos bits “1” (fondo bordo), es la dirección de red y va a ser común a todas las subredes y hosts. Como el 3º octeto está divido en 2, una parte en la porción de red y otra en la de host, la parte de la dirección IP que corresponde a la porción de red (fondo negro), que tienen en la máscara de red los bits “1”, se va a ir modificando según se vayan asignando las subredes y solo va a ser común a los host que son parte de esa subred. Los 2 bits “0” del 3º octeto en la porción de host (fondo gris) y todo el último octeto de la dirección IP, van a ser utilizados para asignar direcciones de host.

Convertir Bits en Números Decimales

Como sería casi imposible trabajar con direcciones de 32 bits, es necesario convertirlas en números decimales. En el proceso de conversión cada bit de un intervalo (8 bits) de una dirección IP, en caso de ser "1" tiene un valor de "2" elevado a la posición que ocupa ese bit en el octeto y luego se suman los resultados. Explicado parece medio engorroso pero con la tabla y los ejemplos se va a entender mejor.

La combinación de 8 bits permite un total de 256 combinaciones posibles que cubre todo el rango de numeración decimal desde el 0 (00000000) hasta el 255 (11111111). Algunos ejemplos.

Calcular la Cantidad de Subredes y Hosts por Subred

Cantidad de Subredes es igual a: 2N, donde "N" es el número de bits "robados" a la porción de Host.

Cantidad de Hosts x Subred es igual a: 2M -2, donde "M" es el número de bits disponible en la porción de host y "-2" es debido a que toda subred debe tener su propia dirección de red y su propia dirección de broadcast. Aclaración: Originalmente la fórmula para obtener la cantidad de subredes era 2N -2, donde "N" es el número de bits "robados" a la porción de host y "-2" porque la primer subred (subnet zero) y la última subred (subnet broadcast) no eran utilizables ya que contenían la dirección de la red y broadcast respectivamente. Todos los tutoriales que andan dando vueltas en Internet utilizan esa fórmula.

Actualmente para obtener la cantidad de subredes se utiliza y se enseña con la fórmula 2N, que permite utilizar tanto la subred zero como la subnet broadcast para ser asignadas.

Bueno, hasta acá la teoría básica. Una vez que comprendemos esto podemos empezar a subnetear. Como consejo les digo que se aprendan y asimilen la dinámica de este proceso ya que es fundamental, sobre todo para el final práctico y teórico del CCNA 1, y más adelante les va a simplificar el aprendizaje de las VLSM (Máscaras de Subred de Longitud Variable).

Subneteo Manual de una Red Clase A

Dada la dirección IP Clase A 10.0.0.0/8 para una red, se nos pide que mediante subneteo obtengamos 7 subredes. Este es un ejemplo típico que se nos puede pedir, aunque remotamente nos topemos en la vida real.

Lo vamos a realizar en 2 pasos: Adaptar la Máscara de Red por Defecto a Nuestras Subredes (1)

La máscara por defecto para la red 10.0.0.0 es

Mediante la fórmula 2N, donde N es la cantidad de bits que tenemos que robarle a la porción de host, adaptamos la máscara de red por defecto a la subred.

En este caso particular 2N = 7 (o mayor) ya que nos pidieron que hagamos 7 subredes.

Una vez hecho el cálculo nos da que debemos robar 3 bits a la porción de host para hacer 7 subredes o más y que el total de subredes útiles va a ser de 8, es decir que va a quedar 1 para uso futuro.

Tomando la máscara Clase A por defecto, a la parte de red le agregamos los 3 bits que le robamos a la porción de host reemplazándolos por "1" y así obtenemos 255.224.0.0 que es

la mascara de subred que vamos a utilizar para todas nuestras subredes y hosts.

Obtener Rango de Subredes (2)

Para obtener las subredes se trabaja únicamente con la dirección IP de la red, en este caso 10.0.0.0. Para esto vamos a modificar el mismo octeto de bits (el segundo) que modificamos anteriormente en la mascara de red pero esta vez en la dirección IP.

Para obtener el rango hay varias formas, la que me parece más sencilla a mí es la de restarle a 256 el número de la máscara de red adaptada. En este caso sería: 256-224=32, entonces 32 va a ser el rango entre cada subred.

Si queremos calcular cuántos hosts vamos a obtener por subred debemos aplicar la fórmula 2M - 2, donde M es el número de bits "0" disponible en la porción de host de la dirección IP de la red y - 2 es debido a que toda subred debe tener su propia dirección de red y su propia dirección de broadcast.

En este caso particular sería: 221 - 2 = 2.097.150 hosts utilizables por subred.

Subneteo Manual de una Red Clase B

Dada la red Clase B 132.18.0.0/16 se nos pide que mediante subneteo obtengamos un mínimo de 50 subredes y 1000 hosts por subred.

Lo vamos a realizar en 3 pasos: Adaptar la Máscara de Red por Defecto a Nuestras Subredes (1)

La máscara por defecto para la red 132.18.0.0 es

Usando la fórmula 2N, donde N es la cantidad de bits que tenemos que robarle a la porción de host, adaptamos la máscara de red por defecto a la subred.

En este caso particular 2N= 50 (o mayor) ya que necesitamos hacer 50 subredes.

El cálculo nos da que debemos robar 6 bits a la porción de host para hacer 50 subredes o más y que el total de subredes útiles va a ser de 64, es decir que van a quedar 14 para uso futuro. Entonces a la máscara Clase B por defecto le agregamos los 6 bits robados reemplazándolos por "1" y obtenemos la máscara adaptada 255.255.252.0.

Obtener Cantidad de Hosts por Subred (2)

Una vez que adaptamos la máscara de red a nuestras necesidades, ésta no se vuelve a tocar y va a ser la misma para todas las subredes y hosts que componen esta red. De acá en más solo trabajaremos con la dirección IP de la red. En este caso con la porción de host (fondo gris).

El ejercicio nos pedía, además de una cantidad de subredes que ya alcanzamos adaptando la máscara en el primer paso, una cantidad específica de 1000 hosts por subred. Para verificar que sea posible obtenerlos con la nueva máscara, no siempre se puede, utilizamos la fórmula 2M - 2, donde M es el número de bits "0" disponibles en la porción de host y - 2 es debido a que la primer y última dirección IP de la subred no son utilizables por ser la dirección de la subred y broadcast respectivamente.

210 - 2 = 1022 hosts por subred.

Los 10 bits "0" de la porción de host (fondo gris) son los que más adelante modificaremos según vayamos asignando los hosts a las subredes. Obtener Rango de Subredes (3)

Para obtener las subredes se trabaja con la porción de red de la dirección IP de la red, más específicamente con la parte de la porción de red que modificamos en la máscara de red pero esta vez en la dirección IP. Recuerden que a la máscara de red con anterioridad se le agregaron 6 bits en el tercer octeto, entonces van a tener que modificar esos mismos bits pero en la dirección IP de la red (fondo negro).

Los 6 bits "0" de la porción de red (fondo negro) son los que más adelante modificaremos según vayamos asignando las subredes.

Para obtener el rango hay varias formas, la que me parece más sencilla a mí es la de restarle a 256 el número de la máscara de subred adaptada. En este caso sería: 256-252=4, entonces 4 va a ser el rango entre cada subred. En el gráfico solo puse las primeras 10 subredes y las últimas 5 porque iba a quedar muy largo, pero la dinámica es la misma.

Subneteo Manual de una Red Clase C

Nos dan la dirección de red Clase C 192.168.1.0 /24 para realizar mediante subneteo 4 subredes con un mínimo de 50 hosts por subred.

Lo vamos a realizar en 3 pasos: Adaptar la Máscara de Red por Defecto a Nuestras Subredes (1)

La máscara por defecto para la red 192.168.1.0 es

Usando la fórmula 2N, donde N es la cantidad de bits que tenemos que robarle a la porción de host, adaptamos la máscara de red por defecto a la subred.

Se nos solicitaron 4 subredes, es decir que el resultado de 2N tiene que ser mayor o igual a 4.

Como vemos en el gráfico, para hacer 4 subredes debemos robar 2 bits a la porción de host. Agregamos los 2 bits robados reemplazándolos por "1" a la máscara Clase C por defecto y obtenemos la máscara adaptada 255.255.255.192.

Obtener Cantidad de Hosts por Subred (2)

Ya tenemos nuesta máscara de red adaptada que va a ser común a todas las subredes y hosts que componen la red. Ahora queda obtener los hosts. Para esto vamos a trabajar con la dirección IP de red, especificamente con la porción de host (fondo gris).

El ejercicio nos pedía un mínimo de 50 hosts por subred. Para esto utilizamos la fórmula 2M

- 2, donde M es el número de bits "0" disponibles en la porción de host y - 2 porque la

primer y última dirección IP de la subred no se utilizan por ser la dirección de la subred y broadcast respectivamente. 26 - 2 = 62 hosts por subred.

Los 6 bits "0" de la porción de host (fondo gris) son los vamos a utilizar según vayamos asignando los hosts a las subredes. Obtener Rango de Subredes (3)

Para obtener el rango subredes utilizamos la porción de red de la dirección IP que fue modificada al adaptar la máscara de red. A la máscara de red se le agregaron 2 bits en el cuarto octeto, entonces van a tener que modificar esos mismos bits pero en la dirección IP (fondo negro).

Los 2 bits "0" de la porción de red (fondo negro) son los que más adelante modificaremos según vayamos asignando las subredes.

Para obtener el rango la forma más sencilla es restarle a 256 el número de la máscara de subred adaptada. En este caso sería: 256-192=64, entonces 64 va a ser el rango entre cada subred.

---

## ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — ACTIVIDAD 1: USUARIOS Y GRUPOS LOCALES**
> ACTIVIDAD 1 UD4
>
> - ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO
>
> - Administración de usuarios i grupos
>
> - Usuarios del Windows
>
> - Tipos de cuentas de usuario. Gestión de contraseñas.
>
> - Modificación de las contraseñas.
>
> - Perfiles de usuarios locales y grupos de usuarios
>
> - Dominios y grupos de trabajo.
>
> - Navegación
>
> - Controlador de dominio.
>
> - Dominio Active Directory.
>
> - Configuración del protocolo de red
>
> - Protocolos
>
> - Modelo TCP/IP
>
> - Proceso de comunicación
>
> - Direccionamiento de red
>
> - Protocolos de capa 2 de TCP/IP
>
> - Direccionamiento y clases IPv4
>
> - Direccionamiento estático o dinámico para dispositivos de usuario final
>
> - Desfragmentar el disco duro
>
> - Limpiar el disco duro
>
> Lee la UD4 hasta el punto 1.6 y realiza las siguientes actividades
>
> - Responde a las siguientes preguntas
>
> ¿Qué es una cuenta de usuario y para que se utiliza?
>
> ¿Qué tipo de cuentas existen?
>
> ¿Qué es un usuario local?
>
> ¿Qué son los perfiles de usuario local?
>
> Indica que contiene la carpeta Usuarios.
>
> Indica que contiene la carpeta oculta Default i que función realiza.
>
> ¿Qué es un grupo local?
>
> ¿Se puede incorporar un usuario a uno o también a varios grupos?
>
> Define que es el control de cuentas de usuario y que es el modo de aprobación de administrador.
>
> - Realiza las siguientes prácticas de administración de Windows10.
>
> Practica 1
>
> Crea dos usuarios en Windows 10 con las siguientes características
>
> Llámalos usu1 y usu2.
>
> Que pertenezcan al grupo Usuarios.
>
> La contraseña nunca expire.
>
> Indica las carpetas que contiene la carpeta Usuarios y Default.
>
> Practica 2
>
> Indica el procedimiento para cambiar el nombre a los usuarios locales.
>
> Cambia usu1 y que ahora se llame u15.
>
> Práctica 3
>
> Indica el procedimiento para cambiar la contraseña a los usuarios locales.
>
> Cambia la contraseña al usuario usu2.
>
> Práctica 4
>
> Indica el procedimiento para eliminar el usuario u15.
>
> Práctica 5
>
> Indica el procedimiento para cambiar el grupo al que pertenece un usuario.
>
> Cambia al usuario usu2 del grupo usuarios al grupo invitados.
>
> Práctica 6
>
> NOTA: Cuando lleguéis a esta práctica comentadlo al profesor para que os indique información al respecto.
>
> Conoce la ficha perfil del usuario.
>
> Para establecer los datos de la ficha Perfil, sigue los pasos siguientes
>
> - Selecciona Administrar del Equipo.
>
> - Pulsa sobre Usuarios y grupos locales y se desplegará su contenido.
>
> - Pulsa sobre Usuarios y se mostrarán los usuarios que hay dados de alta en el equipo.
>
> - Sitúate sobre el usuario que desees modificar. Pulsa el botón derecho del ratón y elige
>
> Propiedades del menú contextual.
>
> - Pulsa en la pestaña Perfil. En esta pantalla aparecen los siguientes apartados
>
> - El perfil es una herramienta muy potente para configurar el entorno de trabajo de los usuarios en red pudiéndose indicar el aspecto del Escritorio, la barra de tareas, el contenido del menú inicio(incluyendo programas, aplicaciones), etc.
>
> - Ruta de acceso al perfil: indica la ruta de acceso para el perfil móvil u obligatorio de un usuario. Si es un perfil local no hace falta rellenarlo.
>
> - Script de inicio de sesión: se utiliza para indicar el nombre de un archivo donde se guarda el script de inicio de sesión del usuario seleccionado.
>
> - Ruta de acceso local: sirve para indicar el directorio local privado del usuario donde almacenará sus archivos y programas con el formato C:\ nombre subdirectorio\nombre del usuario.
>
> - Conectar: permite conectar una letra de unidad a un directorio de red compartido y conectarse a dicho directorio al inicio de sesión con el formato \\nombre del servidor\nombre compartido subdirectorio privado\nombre usuario.
>
> - Pulsa Aceptar.
>
> Práctica 7: Investiga un poco …
>
> Indica los diferentes modos que dispone Windows 10 para acceder a usuarios y grupos locales. Muéstralo con imágenes.

> **✍️ Activitat Pràctica 3.2 — ACTIVIDAD 2: CREAR UNA RED PRIVADA COMPARTIENDO GRUPO DE TRABAJO**
> ACTIVIDAD 2 UD4
>
> - ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO
>
> - Administración de usuarios i grupos
>
> - Usuarios del Windows
>
> - Tipos de cuentas de usuario. Gestión de contraseñas.
>
> - Modificación de las contraseñas.
>
> - Perfiles de usuarios locales y grupos de usuarios
>
> - Dominios y grupos de trabajo.
>
> - Navegación
>
> - Controlador de dominio.
>
> - Dominio Active Directory.
>
> - Configuración del protocolo de red
>
> - Protocolos
>
> - Modelo TCP/IP
>
> - Proceso de comunicación
>
> - Direccionamiento de red
>
> - Protocolos de capa 2 de TCP/IP
>
> - Direccionamiento y clases IPv4
>
> - Direccionamiento estático o dinámico para dispositivos de usuario final
>
> - Desfragmentar el disco duro
>
> - Limpiar el disco duro
>
> Lee la UD4 apartado 1.6, hasta el punto 1.6.4 y realiza las siguientes actividades.
>
> Recuerda que los grupos domésticos desaparecieron en Windows10 a partir de la versión 1803.
>
> OJO, INSTALA otro SISTEMA OPERATIVO WINDOWS10 para así disponer de 2 equipos Windows10 y poder acometer la práctica.
>
> - Responde a las siguientes preguntas
>
> ¿Qué es un dominio?
>
> Indica que es un grupo de trabajo y las características que lo describen.
>
> - Realiza las siguientes prácticas de administración de Windows10.
>
> Práctica 1
>
> Vamos a crear una red local con un grupo de trabajo entre dos máquinas Windows10 en el entorno virtualizado de Oracle VM Virtual Box.
>
> Las características que debe cumplir esta red deben ser
>
> - Debes configurar los dos equipos para que pertenezcan al mismo grupo de trabajo.
>
> - Debes crear una red privada y aplicar las configuraciones para que se puedan compartir los recursos. (red - cambiar configuración de red de uso compartido avanzado)
>
> - Configura las tarjetas de red de las máquinas virtuales con perfil de Red Interna. De este modo no van a poderse conectar al exterior ni a Internet. Solo entre ellas.
>
> - Configura un direccionamiento de red de manera que puedan conectarse entre ellas. Indica el direccionamiento realizado.
>
> - Comparte una carpeta que configures en el escritorio de una de las máquinas virtuales y con algún fichero dentro de la carpeta, de modo que se pueda compartir con el otro equipo Windows10.
>
> - Indica con pantallazos la actividad realizada.
>
> - Muestra al profesor que te funciona la actividad.
>
> Práctica 2
>
> Realiza una conexión a una unidad de red que te permita estar conectado a una carpeta o recurso compartido de otro equipo.
>
> - Indica con pantallazos la actividad realizada.
>
> - Muestra al profesor que te funciona la actividad.

> **✍️ Activitat Pràctica 3.3 — ACTIVITAT 3 EVALUABLE: CONFIGURAR UNA RED CON ACTIVE DIRECTORY**
> ACTIVIDAD 3 UD4
>
> - ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO
>
> - Administración de usuarios i grupos
>
> - Usuarios del Windows
>
> - Tipos de cuentas de usuario. Gestión de contraseñas.
>
> - Modificación de las contraseñas.
>
> - Perfiles de usuarios locales y grupos de usuarios
>
> - Dominios y grupos de trabajo.
>
> - Navegación
>
> - Controlador de dominio.
>
> - Dominio Active Directory.
>
> - Configuración del protocolo de red
>
> - Protocolos
>
> - Modelo TCP/IP
>
> - Proceso de comunicación
>
> - Direccionamiento de red
>
> - Protocolos de capa 2 de TCP/IP
>
> - Direccionamiento y clases IPv4
>
> - Direccionamiento estático o dinámico para dispositivos de usuario final
>
> - Desfragmentar el disco duro
>
> - Limpiar el disco duro
>
> Lee atentamente la UD4 desde el apartado 1.6.4 hasta el punto 2 y responde “de manera adecuada y precisa” a las siguientes preguntas.
>
> Estas preguntas son importantes ya que pueden salir estos conceptos de teoría en el examen de la evaluación.
>
> - Responde a las siguientes preguntas
>
> ¿Qué es la navegación?
>
> Indica que es un controlador de dominio a través de la información que contiene y las tareas que realiza.
>
> Explica como organiza la seguridad Windows: elementos que utiliza para granular los accesos a los distintos recursos. Describe los 3 elementos fundamentales que participan.
>
> Indica las distintas fases en se produce el proceso de autenticación entre el controlador de dominio y el cliente.
>
> ¿Cuáles son las características que posee el Active Directory?
>
> ¿Qué es una cuenta de usuario?
>
> Indica los tipos de usuario que se pueden crear en Active Directory.
>
> ¿Cómo definirías un perfil de usuario y como distingues un perfil local de uno de red?
>
> ¿Qué diferencia encuentras entre el perfil móvil y el obligatorio?
>
> ¿Qué son las cuentas de grupo?
>
> ¿Se les asignan SID a los grupos de AD?
>
> Indica la diferencia entre un grupo de seguridad y un grupo de distribución.
>
> Ahora, un poco de teoría que incluyo aquí para finalizar esta sección. Lee atentamente y avisa al profesor para comentarlo
>
> - Realiza las siguientes prácticas de administración de Active Directory.
>
> Práctica 1
>
> Instala un servidor Windows Server 2019. Con 2GB de memoria RAM y 50GB de disco duro será suficiente.
>
> Cuando lo configures, le debes de cambiar el nombre al equipo y llamarlo usando tu nombre y apellido del siguiente modo: WS2019NombreApellido.
>
> Apúntate la contraseña que le añades al usuario Administrador.
>
> - Indica con imágenes la actividad realizada.
>
> Práctica 2
>
> Añade al servidor Windows Server 2019 el rol de servicios de AD y después, promociónalo a Controlador de Dominio.
>
> Al dominio deberás de llamarlo de la siguiente manera usando tu nombre y primer apellido: nombreapellido.local
>
> - Indica con imágenes la actividad realizada.
>
> - Anota aquí todos los datos (contraseñas, dominio, nivel funcional) que te requiere realizar esta configuración.
>
> - Indica la dirección ip y la dirección MAC que tiene asignada el servidor WindowsServer2019.
>
> Práctica 3
>
> Crea una cuenta de usuario que pertenezca al dominio creado anteriormente.
>
> - Indica el nombre y apellidos y el grupo al que pertenece.
>
> - Indica con imágenes la actividad realizada.

> **✍️ Activitat Pràctica 3.4 — ACTIVIDAD 4 EVALUABLE: AÑADIR RECURSOS AL DIRECTORIO ACTIVO**
> ACTIVIDAD 4 UD4
>
> - ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO
>
> - Administración de usuarios i grupos
>
> - Usuarios del Windows
>
> - Tipos de cuentas de usuario. Gestión de contraseñas.
>
> - Modificación de las contraseñas.
>
> - Perfiles de usuarios locales y grupos de usuarios
>
> - Dominios y grupos de trabajo.
>
> - Navegación
>
> - Controlador de dominio.
>
> - Dominio Active Directory.
>
> - Configuración del protocolo de red
>
> - Protocolos
>
> - Modelo TCP/IP
>
> - Proceso de comunicación
>
> - Direccionamiento de red
>
> - Protocolos de capa 2 de TCP/IP
>
> - Direccionamiento y clases IPv4
>
> - Direccionamiento estático o dinámico para dispositivos de usuario final
>
> - Desfragmentar el disco duro
>
> - Limpiar el disco duro
>
> Puedes apoyarte para realizar estas prácticas en la url: http://somebooks.es/category/ws-2019/page/4/
>
> - Realiza las siguientes prácticas de administración de Active Directory.
>
> Práctica 1
>
> En esta práctica haremos uso de los dos equipos Windows 10 y el Windows 2019 server que tenemos instalados de la sesión anterior.
>
> En esta práctica deberemos agregar los dos equipos Windows 10 al dominio que creaste en la sesión anterior llamado nombreapellido.local.
>
> - Muéstrale al profesor la configuración realizada y muéstrale viendo el nombre de los equipos Windows10 que ya pertenecen al dominio. También compruébalo en el Controlador de Dominio. (Usuarios y Equipos de AD)
>
> - Indica con imágenes la actividad realizada.
>
> Práctica 2
>
> Una vez los tengamos agregados al dominio, debemos de logarnos desde uno de los dos equipos Windos10 con el usuario del dominio creado en la práctica 3 de la actividad 3.
>
> - Muestra al profesor que has conseguido logarte con dicho usuario.
>
> - Indica con imágenes la actividad realizada.
>
> Práctica 3
>
> Consulta la estructura del dominio nombreapellido.local desde la línea de comandos.
>
> - Indica con imágenes la actividad realizada.

> **✍️ Activitat Pràctica 3.5 — ACTIVIDAD 5 EVALUABLE: CREAR USUARIOS, GRUPOS Y UNIDADES ORGANIZATIVAS**
> ACTIVIDAD 4 UD4
>
> - ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO
>
> - Administración de usuarios i grupos
>
> - Usuarios del Windows
>
> - Tipos de cuentas de usuario. Gestión de contraseñas.
>
> - Modificación de las contraseñas.
>
> - Perfiles de usuarios locales y grupos de usuarios
>
> - Dominios y grupos de trabajo.
>
> - Navegación
>
> - Controlador de dominio.
>
> - Dominio Active Directory.
>
> - Configuración del protocolo de red
>
> - Protocolos
>
> - Modelo TCP/IP
>
> - Proceso de comunicación
>
> - Direccionamiento de red
>
> - Protocolos de capa 2 de TCP/IP
>
> - Direccionamiento y clases IPv4
>
> - Direccionamiento estático o dinámico para dispositivos de usuario final
>
> - Desfragmentar el disco duro
>
> - Limpiar el disco duro
>
> Puedes apoyarte para realizar estas prácticas en la url: https://www.youtube.com/watch?v=bbnYWfJVUAA
>
> Nomenclatura de las unidades organizativas
>
> Podemos referirnos a cada objeto del directorio activo con varios tipos diferentes de nombres que describen la ubicación del objeto. Active Directory crea un nombre completo para cada objeto, un nombre canónico y un nombre completo relativo basado en la información proporcionada cuando se crea o se modifica el objeto.
>
> Del mismo modo, cada objeto de la red posee un nombre de distinción (en inglés, Distinguished name (DN)), así una impresora llamada Imprime en una Unidad Organizativa (OU) llamada Ventas y un dominio foo.org, puede escribirse de las siguientes formas para ser direccionado
>
> DN sería CN=Imprime, OU=Ventas, DC=foo, DC=org, donde
>
> CN es el nombre común (en inglés, Common Name)
>
> DC es clase de objeto de dominio (en inglés, Domain object Class).
>
> En forma canónica sería foo.org/Ventas/Imprime
>
> - Realiza las siguientes prácticas de administración de Active Directory.
>
> Práctica 1
>
> En esta práctica haremos uso del Windows 2019 server que tenemos instalados de las sesiones anteriores.
>
> En esta práctica deberemos configurar una unidad organizativa llamados Administrativos.
>
> Después configuramos en la OU Administrativos dos usuarios.
>
> Después creamos un grupo de ámbito global y añadimos los dos usuarios a dicho grupo global.
>
> - Muestra con imágenes los pasos configurados.
>
> Responde a la siguiente pregunta
>
> ¿Qué define a un grupo global que lo diferencia de un grupo universal o local?
>
> ¿Puedes indicar la forma en que se muestra un usuario que pertenece a la OU Administrativos?

> **✍️ Activitat Pràctica 3.6 — ACTIVIDAD 6 EVALUABLE CREACIÓN DE UNA EMPRESA EN ACTIVE DIRECTORY: GRUPOS, OU Y GPOs**
> ACTIVIDAD 6
>
> - ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO
>
> - Administración de usuarios i grupos
>
> - Usuarios del Windows
>
> - Tipos de cuentas de usuario. Gestión de contraseñas.
>
> - Modificación de las contraseñas.
>
> - Perfiles de usuarios locales y grupos de usuarios
>
> - Dominios y grupos de trabajo.
>
> - Navegación
>
> - Controlador de dominio.
>
> - Dominio Active Directory.
>
> - Configuración del protocolo de red
>
> - Protocolos
>
> - Modelo TCP/IP
>
> - Proceso de comunicación
>
> - Direccionamiento de red
>
> - Protocolos de capa 2 de TCP/IP
>
> - Direccionamiento y clases IPv4
>
> - Direccionamiento estático o dinámico para dispositivos de usuario final
>
> - Desfragmentar el disco duro
>
> - Limpiar el disco duro
>
> Puedes apoyarte para realizar estas prácticas en la url
>
> https://www.youtube.com/watch?v=ZxDNYrwFgT0
>
> https://www.youtube.com/watch?v=nxo98Dyw-2U&list=RDCMUCvQ3z3XjdwaqPNkmGFexr-w&index=2
>
> Supuesto práctico de Active Directory (AD)
>
> Tenemos el siguiente ejemplo que perfectamente podría ser una empresa típica de nuestro entorno empresarial. Se trata de una pequeña o mediana empresa que no dispone de más de 30 o 40 empleados.
>
> Nuestra empresa piloto va a pertenecer al dominio con el que ya hemos trabajado estos días en nuestro entorno de prácticas.
>
> Vuestro dominio es NOMBREAPELLIDO.LOCAL.
>
> En cada departamento tenemos los siguientes trabajadores que a continuación, deberemos de configurar dentro de nuestro dominio
>
> Dirección: Mónica, Jorge
>
> Administrativos: Eva, Fèlix.
>
> Departamento TI: Carles, Miquel.
>
> Contabilidad: Lucas, Lluís.
>
> Técnicos: Felipe, Wanda.
>
> El trabajo que deberéis de configurar como administradores de vuestro dominio, consiste en realizar las siguientes tareas
>
> - Crear todos los usuarios de modo que no les caduque la contraseña ni la tengan que modificar. Es decir, que se quede la configuración establecida por el administrador. (Recordar nunca utilizar tildes en los nombres)
>
> - Crear unidades organizativas para cada uno los departamentos. Además, configura una que sea NOMBREAPELLIDO. (Siempre añadirle el prefijo OU delante. Ejemplo OU_Contabilidad)
>
> - Creas grupos para cada uno de los departamentos. Además, configura un grupo NOMBREAPELLIDO.
>
> - Asigna los usuarios al grupo que le pertenecen y además, nos aseguramos que que el grupo NOMBREAPELLIDO pertenece a todos los grupos.
>
> - Creación de directivas para los usuarios del grupo Administrativos
>
> - Crear un acceso directo en Favoritos del Internet Explorer.
>
> - Crear un acceso directo en el Escritorio.
>
> - Mandar un archivo mediante el ratón “botón derecho” a Favoritos.
>
> - Conectar una unidad de red usando una carpeta que vas a crear en la unidad C: del controlador de dominio.

> **✍️ Activitat Pràctica 3.7 — ACTIVIDAD OPTIMIZACIÓN DEL SISTEMA OPERATIVO WINDOWS 10**
> - ADMINISTRACIÓN DEL SISTEMA OPERATIVO DE BASE PROPIETARIO
>
> - Administración de usuarios i grupos
>
> - Usuarios del Windows
>
> - Tipos de cuentas de usuario. Gestión de contraseñas.
>
> - Modificación de las contraseñas.
>
> - Perfiles de usuarios locales y grupos de usuarios
>
> - Dominios y grupos de trabajo.
>
> - Navegación
>
> - Controlador de dominio.
>
> - Dominio Active Directory.
>
> - Configuración del protocolo de red
>
> - Protocolos
>
> - Modelo TCP/IP
>
> - Proceso de comunicación
>
> - Direccionamiento de red
>
> - Protocolos de capa 2 de TCP/IP
>
> - Direccionamiento y clases IPv4
>
> - Direccionamiento estático o dinámico para dispositivos de usuario final
>
> - Optimización del sistema
>
> - Ahorro energético en Windows 10.
>
> - Eliminar programas que no se utilizan.
>
> - Limitar los programas que se ejecutan al inicio.
>
> - Comprobar si tenemos virus o spyware instalado en nuestro ordenador.
>
> - Desfragmentar el disco duro.
>
> - Limpiar el disco duro mediante el “liberador de espacio”
>
> Optimización del sistema para mejorar el rendimiento
>
> Para estudiar esta sección, podéis utilizar el apartado 3 del libro que usamos de referencia: Optimización del sistema en ordenadores portátiles.
>
> A continuación, vamos a ver con esta actividad cómo podemos mejorar el rendimiento de nuestro equipo con sistema operativo Windows10.
>
> - Ahorro energético en Windows 10.
>
> Investiga cómo puedes mejorar tu sistema informático para que consuma menos energía creando tu plan personalizado. Indica con imágenes cómo lo has configurado.
>
> - Eliminar programas que no se utilizan
>
> - ¿Qué tipos de programas puedes encontrarte cuando compras un ordenador con el sistema operativo ya instalado?
>
> - ¿Por qué crees que útil borrar programas que no utilizas frecuentemente y los instalas solamente cuando te hacen falta?
>
> - Limitar los programas que se ejecutan en el Inicio.
>
> - Explica que ventajas tiene controlar los programas que se ejecutan de inicio al arrancar nuestro sistema operativo Windows 10.
>
> - Muestra con imágenes de que modo podemos controlar que programas se inician al arrancar nuestro Windows 10.
>
> - Comprobar si tenemos en nuestro ordenador virus o spyware.
>
> - ¿Qué software de Windows 10 se utiliza para conocer si tenemos instalado algún virus o software malintencionado?
>
> - Desfragmentar el disc dur.
>
> - ¿Qué ventajas aporta la desfragmentación del disco duro?
>
> - Muestra en imágenes como se pueden realizar esta tarea.
>
> - Limpieza del disco duro mediante el “Liberador de espacio”.
>
> - ¿Qué tipo de ficheros elimina el Liberador de espacio?
>
> - Muestra en imágenes como se pueden realizar esta tarea.
