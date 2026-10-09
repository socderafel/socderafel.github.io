---
layout: default
title: "UT3 — U2 - Arquitectura de xarxa — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT3 Completa"
prev_url: "../ut02/ut02actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT2"
next_url: "../ut03/ut0301.html"
next_label: "3.1 U2 Arquitectura de xarxa ➡️"
---

# 📘 UT3 — U2 - Arquitectura de xarxa (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**3.1 U2 Arquitectura de xarxa**](#ut0301) (o [obrir en pàgina individual ➡️](./ut0301.md) )
> - [**3.2 U2.1 IPs**](#ut0302) (o [obrir en pàgina individual ➡️](./ut0302.md) )
> - [**3.3 U2 P1 ES**](#ut0303) (o [obrir en pàgina individual ➡️](./ut0303.md) )
> - [**3.4 U2 P1 EN**](#ut0304) (o [obrir en pàgina individual ➡️](./ut0304.md) )
> - [**3.5 U2 E1**](#ut0305) (o [obrir en pàgina individual ➡️](./ut0305.md) )
> - [**✍️ Activitats pràctiques UT3**](#ut03actividades) (o [obrir en pàgina individual ➡️](./ut03actividades.md) )

---

## 3.1 U2 Arquitectura de xarxa

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

## 3.2 U2.1 IPs

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

## 3.3 U2 P1 ES

Packet Tracer: Investigación de los modelos TCP/IP y OSI en acción Topología

Objetivos Parte 1: Examinar el tráfico web HTTP Parte 2: Mostrar elementos de la suite de protocolos TCP/IP Aspectos básicos Esta actividad de simulación tiene como objetivo proporcionar una base para comprender la suite de protocolos TCP/IP y la relación con el modelo OSI. El modo de simulación le permite ver el contenido de los datos que se envían a través de la red en cada capa.

A medida que los datos se desplazan por la red, se dividen en partes más pequeñas y se identifican de modo que las piezas se puedan volver a unir cuando lleguen al destino. A cada pieza se le asigna un nombre específico (unidad de datos del protocolo [PDU]) y se la asocia a una capa específica de los modelos TCP/IP y OSI. El modo de simulación de Packet Tracer le permite ver cada una de las capas y la PDU asociada. Los siguientes pasos guían al usuario a través del proceso de solicitud de una página web desde un servidor web mediante la aplicación de navegador web disponible en una PC cliente.

Aunque gran parte de la información mostrada se analizará en mayor detalle más adelante, esta es una oportunidad de explorar la funcionalidad de Packet Tracer y de ver el proceso de encapsulamiento. Parte 1: Examinar el tráfico web HTTP En la parte 1 de esta actividad, utilizará el modo de simulación de Packet Tracer (PT) para generar tráfico web y examinar HTTP.

Paso 1: Cambie del modo de tiempo real al modo de simulación. En la esquina inferior derecha de la interfaz de Packet Tracer, hay fichas que permiten alternar entre el modo Tiempo real y Simulación. El Packet Tracer siempre comienza en modo en tiempo real, donde los protocolos de red operan con temporizaciones realistas. Sin embargo, una función eficaz de Packet Tracer permite al usuario “detener el tiempo” conmutando al modo de simulación. En el modo de simulación, los paquetes se muestran como sobres animados, el tiempo es desencadenado por eventos y el usuario puede revisar los eventos de red.

- Haga clic en el ícono del modo de Simulación para cambiar del modo de Tiempo real al modo de

Simulación.

- Seleccione HTTP en Filtros de lista de eventos.
- Es posible que HTTP ya sea el único evento visible. Haga clic en Editar filtros para mostrar los

eventos visibles disponibles. Alterne la casilla de verificación Mostrar todo/ninguno y observe cómo las casillas de verificación se desactivan y se activan, o viceversa, según el estado actual.

Packet Tracer: Investigación de los modelos TCP/IP y OSI en acción

- Haga clic en la casilla de verificación Mostrar todo/ninguno hasta que se desactiven todas las

casillas y luego seleccione HTTP. Haga clic en cualquier lugar fuera del cuadro Editar filtros para ocultarlo. Los eventos visibles ahora deben mostrar solo HTTP. Paso 2: Genere tráfico web (HTTP). Actualmente, el panel de simulación está vacío. En la parte superior de Lista de eventos dentro del panel de simulación, se indican seis columnas. A medida que se genera y se revisa el tráfico, aparecen los eventos en la lista. La columna Información se utiliza para inspeccionar los contenidos de un evento determinado.

> **⚠️ Nota: el servidor web y el cliente web se muestran en e...**
> Nota: el servidor web y el cliente web se muestran en el panel de la izquierda. Se puede ajustar el tamaño de los paneles manteniendo el mouse junto a la barra de desplazamiento y arrastrando a la izquierda o a la derecha cuando aparece la flecha de dos puntas.

- Haga clic en Cliente web en el panel del extremo izquierdo.
- Haga clic en la ficha Escritorio y luego en el ícono Navegador web para abrirlo.
- En el campo de dirección URL, introduzca www.osi.local y haga clic en Ir.

Debido a que el tiempo en el modo de simulación se desencadena por eventos, debe usar el botón Capturar/avanzar para mostrar los eventos de red.

- Haga clic en Capturar/Avanzar cuatro veces. Debería haber cuatro eventos en la Lista de eventos.

Observe la página del navegador web del cliente web. ¿Cambió algo? ____________________________________________________________________________________ ____________________________________________________________________________________ Paso 3: Explore el contenido del paquete HTTP.

- Haga clic en el primer cuadro coloreado debajo de la columna Lista de eventos > Información. Quizá

sea necesario expandir el panel de simulación o usar la barra de desplazamiento que se encuentra directamente debajo de la lista de eventos. Se muestra la ventana Información de PDU en dispositivo: cliente web. En esta ventana, solo hay dos fichas, (Modelo OSI y Detalles de PDU saliente), debido a que este es el inicio de la transmisión. A medida que se analizan más eventos, se muestran tres fichas, ya que se agrega la ficha Detalles de PDU entrante. Cuando un evento es el último evento de la transmisión de tráfico, solo se muestran las fichas Modelo OSI y Detalles de PDU entrante.

- Asegúrese de que esté seleccionada la ficha Modelo OSI. En la columna Capas de salida, asegúrese

de que el cuadro Capa 7 esté resaltado. ¿Cuál es el texto que se muestra junto a la etiqueta Capa 7? __________________________________ ¿Qué información se indica en los pasos numerados directamente debajo de los cuadros Capas de entrada y Capas de salida? ____________________________________________________________________________________ ____________________________________________________________________________________

- Haga clic en Capa siguiente. La capa 4 debe estar resaltada. ¿Cuál es el valor de Puerto de dest.?

____________________________________________________________________________________

- Haga clic en Capa siguiente. La capa 3 debe estar resaltada. ¿Cuál es valor de IP de dest.?

____________________________________________________________________________________

- Haga clic en Capa siguiente. ¿Qué información se muestra en esta capa?

____________________________________________________________________________________

Packet Tracer: Investigación de los modelos TCP/IP y OSI en acción

f. Haga clic en la ficha de Detalles de la PDU saliente. La información que se indica debajo de Detalles de PDU refleja las capas dentro del modelo TCP/IP. Nota: La información que se indica en la sección Ethernet II proporciona información aún más detallada que la que se indica en capa 2 en la ficha Modelo OSI. Los Detalles de la PDU saliente proporcionan información más descriptiva y detallada. Los valores de MAC DE DEST. y de MAC DE ORIGEN en la sección Ethernet II de Detalles de PDU aparecen en la ficha Modelo OSI, en capa 2, pero no se los identifica como tales.

¿Cuál es la información frecuente que se indica en la sección IP de Detalles de PDU comparada con la información que se indica en la ficha Modelo OSI? ¿Con qué capa se relaciona? ____________________________________________________________________________________ ¿Cuál es la información frecuente que se indica en la sección TCP de Detalles de PDU comparada con la información que se indica en la ficha Modelo OSI? Con qué capa se relaciona?

____________________________________________________________________________________ ¿Cuál es el host que se indica en la sección HTTP de Detalles de PDU? ¿Con qué capa se relacionaría esta información en la ficha Modelo OSI? ____________________________________________________________________________________

- Haga clic en el siguiente cuadro coloreado debajo de la columna Lista de eventos > Información. Solo

la capa 1 está activa (sin atenuar). El dispositivo mueve la trama desde el búfer y la coloca en la red.

- Avance al siguiente cuadro Información de HTTP dentro de la lista de eventos y haga clic en el cuadro

coloreado. Esta ventana contiene las columnas Capas de entrada y Capas de salida. Observe la dirección de la flecha que está directamente debajo de la columna Capas de entrada; esta apunta hacia arriba, lo que indica la dirección en la que se transfiere la información. Desplácese por estas capas y tome nota de los elementos vistos anteriormente. En la parte superior de la columna, la flecha apunta hacia la derecha. Esto indica que el servidor ahora envía la información de regreso al cliente.

Compare la información que se muestra en la columna Capas de entrada con la de la columna Capas de salida: ¿cuáles son las diferencias principales? ____________________________________________________________________________________ ____________________________________________________________________________________ i.

Haga clic en la ficha de detalles de la PDU saliente. Desplácese hasta la sección HTTP. ¿Cuál es la primera línea del mensaje HTTP que se muestra? ____________________________________________________________________________________ ____________________________________________________________________________________ j.

Haga clic en el último cuadro coloreado de la columna Información. ¿Cuántas fichas se muestran con este evento y por qué? ____________________________________________________________________________________ ____________________________________________________________________________________

Packet Tracer: Investigación de los modelos TCP/IP y OSI en acción

Parte 2: Mostrar elementos de la suite de protocolos TCP/IP En la parte 2 de esta actividad, utilizará el modo de simulación de Packet Tracer para ver y examinar algunos de los otros protocolos que componen la suite TCP/IP. Paso 1: Ver eventos adicionales

- Cierre todas las ventanas de información de PDU abiertas.
- En la sección Filtros de lista de eventos > Eventos visibles, haga clic en Mostrar todo.

¿Qué tipos de eventos adicionales se muestran? ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ Estas entradas adicionales cumplen diversas funciones dentro de la suite TCP/IP. Si el protocolo de resolución de direcciones (ARP) está incluido, busca direcciones MAC. El protocolo DNS es responsable de convertir un nombre (por ejemplo, www.osi.local) a una dirección IP. Los eventos de TCP adicionales son responsables de la conexión, del acuerdo de los parámetros de comunicación y de la desconexión de las sesiones de comunicación entre los dispositivos. Estos protocolos se mencionaron anteriormente y se analizarán en más detalle a medida que avance el curso. Actualmente, hay más de 35 protocolos (tipos de evento) posibles para capturar en Packet Tracer.

- Haga clic en el primer evento de DNS en la columna Información. Examine las fichas Modelo OSI y

Detalles de PDU, y observe el proceso de encapsulamiento. Al observar la ficha Modelo OSI con el cuadro capa 7 resaltado, se incluye una descripción de lo que ocurre, inmediatamente debajo de las Capas de entrada y las Capas de salida: (“1. The DNS client sends a DNS query to the DNS server.” [“El cliente DNS envía una consulta DNS al servidor DNS”]). Esta información es muy útil para ayudarlo a comprender qué ocurre durante el proceso de comunicación.

- Haga clic en la ficha de Detalles de la PDU saliente. ¿Qué información se indica en NOMBRE: en la

sección CONSULTA DNS? ____________________________________________________________________________________

- Haga clic en el último cuadro coloreado Información de DNS en la lista de eventos. ¿Qué dispositivo se

muestra? ____________________________________________________________________________________ ¿Cuál es el valor que se indica junto a DIRECCIÓN: en la sección RESPUESTA DE DNS de Detalles de la PDU entrante? ____________________________________________________________________________________ ____________________________________________________________________________________ f.

Busque el primer evento de HTTP en la lista y haga clic en el cuadro coloreado del evento de TCP que le sigue inmediatamente a este evento. Resalte capa 4 en la ficha Modelo OSI. En la lista numerada que está directamente debajo de Capas de entrada y Capas de salida, ¿cuál es la información que se muestra en los elementos 4 y 5?

____________________________________________________________________________________ ____________________________________________________________________________________ El protocolo TCP administra la conexión y la desconexión del canal de comunicaciones, además de tener otras responsabilidades. Este evento específico muestra que SE ESTABLECIÓ el canal de comunicaciones.

Packet Tracer: Investigación de los modelos TCP/IP y OSI en acción

- Haga clic en el último evento de TCP. Resalte capa 4 en la ficha Modelo OSI. Examine los pasos que se

indican directamente a continuación de Capas de entrada y Capas de salida. ¿Cuál es el propósito de este evento, según la información proporcionada en el último elemento de la lista (debe ser el elemento 4)? ________________________________________________________________________________ Desafío En esta simulación, se proporcionó un ejemplo de una sesión web entre un cliente y un servidor en una red de área local (LAN). El cliente realiza solicitudes de servicios específicos que se ejecutan en el servidor. Se debe configurar el servidor para que escuche puertos específicos y detecte una solicitud de cliente.

(Sugerencia: observe la capa 4 en la ficha Modelo OSI para obtener información del puerto). Sobre la base de la información que se analizó durante la captura de Packet Tracer, ¿qué número de puerto escucha el servidor web para detectar la solicitud web? ____________________________________________________________________________________ ____________________________________________________________________________________ ¿Qué puerto escucha el servidor web para detectar una solicitud de DNS?

____________________________________________________________________________________ ____________________________________________________________________________________

---

## 3.4 U2 P1 EN

Packet Tracer - Investigating the TCP/IP and OSI Models in Action Topology Objectives Part 1: Examine HTTP Web Traffic Part 2: Display Elements of the TCP/IP Protocol Suite Background This simulation activity is intended to provide a foundation for understanding the TCP/IP protocol suite and the relationship to the OSI model. Simulation mode allows you to view the data contents being sent across the network at each layer.

As data moves through the network, it is broken down into smaller pieces and identified so that the pieces can be put back together when they arrive at the destination. Each piece is assigned a specific name (protocol data unit [PDU]) and associated with a specific layer of the TCP/IP and OSI models. Packet Tracer simulation mode enables you to view each of the layers and the associated PDU. The following steps lead the user through the process of requesting a web page from a web server by using the web browser application available on a client PC.

Even though much of the information displayed will be discussed in more detail later, this is an opportunity to explore the functionality of Packet Tracer and be able to visualize the encapsulation process. Examine HTTP Web Traffic In Part 1 of this activity, you will use Packet Tracer (PT) Simulation mode to generate web traffic and examine HTTP.

1.1 Switch from Realtime to Simulation mode. In the lower right corner of the Packet Tracer interface are tabs to toggle between Realtime and Simulation mode. PT always starts in Realtime mode, in which networking protocols operate with realistic timings. However, a powerful feature of Packet Tracer allows the user to “stop time” by switching to Simulation mode.

In Simulation mode, packets are displayed as animated envelopes, time is event driven, and the user can step through networking events. 1.a Click the Simulation mode icon to switch from Realtime mode to Simulation mode. 1.b Select HTTP from the Event List Filters.

b.1 HTTP may already be the only visible event. Click Edit Filters to display the available visible events. Toggle the Show All/None check box and notice how the check boxes switch from unchecked to checked or checked to unchecked, depending on the current state.

b.2 Click the Show All/None check box until all boxes are cleared and then select HTTP. Click anywhere outside of the Edit Filters box to hide it. The Visible Events should now only display HTTP. Page 1 of 4

Packet Tracer - Investigating the TCP/IP and OSI Models in Action 1.2 Generate web (HTTP) traffic. Currently the Simulation Panel is empty. There are six columns listed across the top of the Event List within the Simulation Panel. As traffic is generated and stepped through, events appear in the list. The Info column is used to inspect the contents of a particular event.

Note: The Web Server and Web Client are displayed in the left pane. The panels can be adjusted in size by hovering next to the scroll bar and dragging left or right when the double-headed arrow appears. 2.a Click Web Client in the far left pane. 2.b Click the Desktop tab and click the Web Browser icon to open it.

2.c In the URL field, enter www.osi.local and click Go. Because time in Simulation mode is event-driven, you must use the Capture/Forward button to display network events. 2.d Click Capture/Forward four times. There should be four events in the Event List. Look at the Web Client web browser page. Did anything change?

____________________________________________________________________________________ ____________________________________________________________________________________ 1.3 Explore the contents of the HTTP packet. 3.a Click the first colored square box under the Event List > Info column. It may be necessary to expand the Simulation Panel or use the scrollbar directly below the Event List.

The PDU Information at Device: Web Client window displays. In this window, there are only two tabs (OSI Model and Outbound PDU Details) because this is the start of the transmission. As more events are examined, there will be three tabs displayed, adding a tab for Inbound PDU Details. When an event is the last event in the stream of traffic, only the OSI Model and Inbound PDU Details tabs are displayed.

3.b Ensure that the OSI Model tab is selected. Under the Out Layers column, ensure that the Layer 7 box is highlighted. What is the text displayed next to the Layer 7 label? __________________________________________ What information is listed in the numbered steps directly below the In Layers and Out Layers boxes?

____________________________________________________________________________________ ____________________________________________________________________________________ 3.c Click Next Layer. Layer 4 should be highlighted. What is the Dst Port value? ______________________ 3.d Click Next Layer. Layer 3 should be highlighted. What is the Dest. IP value? _______________________ 3.e Click Next Layer. What information is displayed at this layer?

____________________________________________________________________________________ ____________________________________________________________________________________ 3.f Click the Outbound PDU Details tab. Information listed under the PDU Details is reflective of the layers within the TCP/IP model.

Note: The information listed under the Ethernet II section provides even more detailed information than is listed under Layer 2 on the OSI Model tab. The Outbound PDU Details provides more descriptive and detailed information. The values under DEST MAC and SRC MAC within the Ethernet II section of the PDU Details appear on the OSI Model tab under Layer 2, but are not identified as such.

Page 2 of 4

Packet Tracer - Investigating the TCP/IP and OSI Models in Action What is the common information listed under the IP section of PDU Details as compared to the information listed under the OSI Model tab? With which layer is it associated? ____________________________________________________________________________________ What is the common information listed under the TCP section of PDU Details, as compared to the information listed under the OSI Model tab, and with which layer is it associated?

____________________________________________________________________________________ What is the Host listed under the HTTP section of the PDU Details? What layer would this information be associated with under the OSI Model tab? ____________________________________________________________________________________ 3.g Click the next colored square box under the Event List > Info column. Only Layer 1 is active (not grayed out). The device is moving the frame from the buffer and placing it on to the network.

3.h Advance to the next HTTP Info box within the Event List and click the colored square box. This window contains both In Layers and Out Layers. Notice the direction of the arrow directly under the In Layers column; it is pointing upward, indicating the direction the information is travelling. Scroll through these layers making note of the items previously viewed. At the top of the column the arrow points to the right.

This denotes that the server is now sending the information back to the client. Comparing the information displayed in the In Layers column with that of the Out Layers column, what are the major differences? ____________________________________________________________________________________ ____________________________________________________________________________________ 3.i Click the Outbound PDU Details tab. Scroll down to the HTTP section.

What is the first line in the HTTP message that displays? ____________________________________________________________________________________ ____________________________________________________________________________________ 3.j Click the last colored square box under the Info column. How many tabs are displayed with this event and why?

____________________________________________________________________________________ ____________________________________________________________________________________ Display Elements of the TCP/IP Protocol Suite In Part 2 of this activity, you will use the Packet Tracer Simulation mode to view and examine some of the other protocols comprising of the TCP/IP suite.

2.1 View Additional Events 1.a Close any open PDU information windows. 1.b In the Event List Filters > Visible Events section, click Show All. What additional Event Types are displayed? ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ ____________________________________________________________________________________ Page 3 of 4

Packet Tracer - Investigating the TCP/IP and OSI Models in Action These extra entries play various roles within the TCP/IP suite. If the Address Resolution Protocol (ARP) is listed, it searches MAC addresses. DNS is responsible for converting a name (for example, www.osi.local) to an IP address. The additional TCP events are responsible for connecting, agreeing on communication parameters, and disconnecting the communications sessions between the devices. These protocols have been mentioned previously and will be further discussed as the course progresses.

Currently there are over 35 possible protocols (event types) available for capture within Packet Tracer. 1.c Click the first DNS event in the Info column. Explore the OSI Model and PDU Detail tabs and note the encapsulation process. As you look at the OSI Model tab with Layer 7 highlighted, a description of what is occurring is listed directly below the In Layers and Out Layers (“1. The DNS client sends a DNS query to the DNS server.”). This is very useful information to help understand what is occurring during the communication process.

1.d Click the Outbound PDU Details tab. What information is listed in the NAME: in the DNS QUERY section? ____________________________________________________________________________________ 1.e Click the last DNS Info colored square box in the event list. Which device is displayed?

____________________________________________________________________________________ What is the value listed next to ADDRESS: in the DNS ANSWER section of the Inbound PDU Details? ____________________________________________________________________________________ ____________________________________________________________________________________ 1.f Find the first HTTP event in the list and click the colored square box of the TCP event immediately following this event. Highlight Layer 4 in the OSI Model tab. In the numbered list directly below the In Layers and Out Layers, what is the information displayed under items 4 and 5?

____________________________________________________________________________________ ____________________________________________________________________________________ TCP manages the connecting and disconnecting of the communications channel along with other responsibilities. This particular event shows that the communication channel has been ESTABLISHED.

1.g Click the last TCP event. Highlight Layer 4 in the OSI Model tab. Examine the steps listed directly below In Layers and Out Layers. What is the purpose of this event, based on the information provided in the last item in the list (should be item 4)? _____________________________________________________ Challenge This simulation provided an example of a web session between a client and a server on a local area network (LAN). The client makes requests to specific services running on the server. The server must be set up to listen on specific ports for a client request. (Hint: Look at Layer 4 in the OSI Model tab for port information.) Based on the information that was inspected during the Packet Tracer capture, what port number is the Web Server listening on for the web request?

____________________________________________________________________________________ ____________________________________________________________________________________ What port is the Web Server listening on for a DNS request? ____________________________________________________________________________________ ____________________________________________________________________________________ Page 4 of 4

---

## 3.5 U2 E1

> **📄 Document Escanejat / Visual (U2E1.pdf)**
> Aquest document PDF (5 pàgines) està compost principalment per esquemes o imatges escanejades.

---

## ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — U2 A1**
> Unitat 2 – Arquitectura de xarxa
>
> U2 – A1
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
> - Envia el document a través de la tasca creada en Aules.
>
> ### 1. Descriu quins problemes ens trobaríem en un model de xarxa que no
>
> estiguera dividit en capes.
>
> ### 2. Com es realitza la comunicació entre dos ordinadors en una arquitectura
>
> de 5 capes? En el cas que la capa 5 (més alta) vullga transmetre informació, amb qui ho fa i a través de quin protocol?
>
> ### 3. Dibuixa i explica com es realitza el procés d’encapsulament i
>
> desencapsulament de dades i capçaleres en en un model de 4 capes.
>
> ### 4. Com s’interpreta la següent imatge?
>
> Unitat 2 – Arquitectura de xarxa
>
> ### 5. Quins dispositius de xarxa treballen en la capa 1 (física)?
>
> ### 6. Quins dispositius de xarxa treballen en la capa 2 (enllaç)?
>
> ### 7. Quins dispositius de xarxa treballen en la capa 3 (xarxa)?

> **✍️ Activitat Pràctica 3.2 — U2 A2**
> Unitat 2 – Arquitectura de xarxa
>
> U2 – A2
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
> - Envia el document a través de la tasca creada en Aules.
>
> - Realitza un esquema comparatiu entre les capes OSI i TCP/IP.
>
> ### 2. Per què el model OSI no es considera ni es gasta com una arquitectura i
>
> el TCP/IP sí?
>
> ### 3. En quina capa treballa la NIC en el model OSI? I en TCP/IP?
>
> ### 4. Descriu en les teues pròpies paraules els següents conceptes
>
> - Capa
> - Servici
> - Arquitectura de xarxa
> - Interfície
> - Protocol
> - Pila de protocols
> - Model de referència OSI
>
> ### 5. Indica per a cadascun dels següents servicis, quina capa del model OSI
>
> ho porta a terme
>
> - Control de la congestió
> - Generació de senyals elèctriques a partir de informació binaria
> - Mesures a pendre en cas d’error a l’enviament de dades entre els
>
> extrems de la comunicació.
>
> - Control de fluxe
> - Selecció del següent node on enviar la informació de xarxa.
> - Establiment i alliberament d’una connexió.
> - Recepció d’un missatge de correu electrònic.

> **✍️ Activitat Pràctica 3.3 — U2 P1**
> Unitat 2 – Arquitectura de xarxa
>
> U2 – A2
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
> - Envia el document a través de la tasca creada en Aules.
>
> - Realitza un esquema comparatiu entre les capes OSI i TCP/IP.
>
> el TCP/IP sí?
>
> - Capa
> - Servici
> - Arquitectura de xarxa
> - Interfície
> - Protocol
> - Pila de protocols
> - Model de referència OSI
>
> ho porta a terme
>
> - Control de la congestió
> - Generació de senyals elèctriques a partir de informació binaria
> - Mesures a pendre en cas d’error a l’enviament de dades entre els
>
> extrems de la comunicació.
>
> - Control de fluxe
> - Selecció del següent node on enviar la informació de xarxa.
> - Establiment i alliberament d’una connexió.
> - Recepció d’un missatge de correu electrònic.

> **✍️ Activitat Pràctica 3.4 — U2 P2**
> Lab - Using Wireshark to View Network Traffic Topology Objectives Part 1: Capture and Analyze Local ICMP Data in Wireshark Part 2: Capture and Analyze Remote ICMP Data in Wireshark Capture and Analyze Local ICMP Data in Wireshark In Part 1 of this lab, you will ping another PC on the LAN and capture ICMP requests and replies in Wireshark. You will also look inside the frames captured for specific information. This analysis should help to clarify how packet headers are used to transport data to their destination.
>
> 1.1 Retrieve your PC interface addresses. For this lab, you will need to retrieve your PC IP address and its network interface card (NIC) physical address, also called the MAC address. 1.a Open a command window, type ipconfig /all, and then press Enter. Page 1 of 15
>
> Lab - Using Wireshark to View Network Traffic 1.b Note the IP address of your PC interface, its description, and its MAC (physical) address. 1.c Ask a team member or team members for their PC IP address and provide your PC IP address to them. Do not provide them with your MAC address at this time.
>
> 1.2 Start Wireshark and begin capturing data. 2.a On your PC, click the Windows Start button to see Wireshark listed as one of the programs on the pop-up menu. Double-click Wireshark. 2.b After Wireshark starts, click the capture interface to be used. Because we are using the wired Ethernet connection on the PC, make sure the Ethernet option is on the top of the list.
>
> You can manage the capture interface by clicking Capture and Options: Page 2 of 15
>
> Lab - Using Wireshark to View Network Traffic 2.c A list of interfaces will display. Make sure the capture interface is checked under Promiscuous. Page 3 of 15
>
> Lab - Using Wireshark to View Network Traffic Note: We can further manage the interfaces on the PC by clicking Manage Interfaces. Verify that the description matches what you noted in Step 1b. Close the Manage Interfaces window after verifying the correct interface.
>
> 2.d After you have checked the correct interface, click Start to start the data capture. Note: You can also start the data capture by clicking the Wireshark icon in the main interface. Page 4 of 15
>
> Lab - Using Wireshark to View Network Traffic Information will start scrolling down the top section in Wireshark. The data lines will appear in different colors based on protocol. 2.e This information can scroll by very quickly depending on what communication is taking place between your PC and the LAN. We can apply a filter to make it easier to view and work with the data that is being captured by Wireshark. For this lab, we are only interested in displaying ICMP (ping) PDUs. Type icmp in the Filter box at the top of Wireshark and press Enter or click on the Apply button (arrow sign) to view only ICMP (ping) PDUs.
>
> Page 5 of 15
>
> Lab - Using Wireshark to View Network Traffic 2.f This filter causes all data in the top window to disappear, but you are still capturing the traffic on the interface. Bring up the command prompt window that you opened earlier and ping the IP address that you received from your team member.
>
> Notice that you start seeing data appear in the top window of Wireshark again. Page 6 of 15
>
> Lab - Using Wireshark to View Network Traffic Note: If the PC of your team member does not reply to your pings, this may be because the PC firewall of the team member is blocking these requests. Please see Appendix A: Allowing ICMP Traffic Through a Firewall for information on how to allow ICMP traffic through the firewall using Windows 7.
>
> 2.g Stop capturing data by clicking the Stop Capture icon. 1.3 Examine the captured data. In Step 3, examine the data that was generated by the ping requests of your team member PC. Wireshark data is displayed in three sections: 1) The top section displays the list of PDU frames captured with a summary of the IP packet information listed; 2) the middle section lists PDU information for the frame selected in the top part of the screen and separates a captured PDU frame by its protocol layers; and 3) the bottom section displays the raw data of each layer. The raw data is displayed in both hexadecimal and decimal form.
>
> 3.a Click the first ICMP request PDU frames in the top section of Wireshark. Notice that the Source column has your PC IP address, and the Destination column contains the IP address of the teammate PC that you pinged. Page 7 of 15
>
> Lab - Using Wireshark to View Network Traffic 3.b With this PDU frame still selected in the top section, navigate to the middle section. Click the plus sign to the left of the Ethernet II row to view the destination and source MAC addresses. Does the source MAC address match your PC interface (shown in Step 1.b)? ______ Does the destination MAC address in Wireshark match your team member MAC address? _____ How is the MAC address of the pinged PC obtained by your PC?
>
> ___________________________________________________________________________________ Note: In the preceding example of a captured ICMP request, ICMP data is encapsulated inside an IPv4 packet PDU (IPv4 header) which is then encapsulated in an Ethernet II frame PDU (Ethernet II header) for transmission on the LAN.
>
> Capture and Analyze Remote ICMP Data in Wireshark In Part 2, you will ping remote hosts (hosts not on the LAN) and examine the generated data from those pings. You will then determine what is different about this data from the data examined in Part 1. Page 8 of 15
>
> Lab - Using Wireshark to View Network Traffic 2.1 Start capturing data on the interface. 1.a Start the data capture again. 1.b A window prompts you to save the previously captured data before starting another capture. It is not necessary to save this data. Click Continue without Saving.
>
> 1.c With the capture active, ping the following three website URLs: c.1 www.yahoo.com c.2 www.cisco.com Page 9 of 15
>
> Lab - Using Wireshark to View Network Traffic c.3 www.google.com Note: When you ping the URLs listed, notice that the Domain Name Server (DNS) translates the URL to an IP address. Note the IP address received for each URL. 1.d You can stop capturing data by clicking the Stop Capture icon.
>
> Page 10 of 15
>
> Lab - Using Wireshark to View Network Traffic 2.2 Examining and analyzing the data from the remote hosts. 2.a Review the captured data in Wireshark and examine the IP and MAC addresses of the three locations that you pinged. List the destination IP and MAC addresses for all three locations in the space provided.
>
> 1st Location: IP: _____._____._____._____ MAC: ____:____:____:____:____:____ 2nd Location: IP: _____._____._____._____ MAC: ____:____:____:____:____:____ 3rd Location: IP: _____._____._____._____ MAC: ____:____:____:____:____:____ 2.b What is significant about this information?
>
> ____________________________________________________________________________________ 2.c How does this information differ from the local ping information you received in Part 1? ____________________________________________________________________________________ ____________________________________________________________________________________ Reflection Why does Wireshark show the actual MAC address of the local hosts, but not the actual MAC address for the remote hosts?
>
> _______________________________________________________________________________________ _______________________________________________________________________________________ Appendix A: Allowing ICMP Traffic Through a Firewall If the members of your team are unable to ping your PC, the firewall may be blocking those requests. This appendix describes how to create a rule in the firewall to allow ping requests. It also describes how to disable the new ICMP rule after you have completed the lab.
>
> 2.3 Create a new inbound rule allowing ICMP traffic through the firewall. 3.a From the Control Panel, click the System and Security option. Page 11 of 15
>
> Lab - Using Wireshark to View Network Traffic 3.b From the System and Security window, click Windows Firewall. 3.c In the left pane of the Windows Firewall window, click Advanced settings. 3.d On the Advanced Security window, choose the Inbound Rules option on the left sidebar and then click New Rule… on the right sidebar.
>
> Page 12 of 15
>
> Lab - Using Wireshark to View Network Traffic 3.e This launches the New Inbound Rule wizard. On the Rule Type screen, click the Custom radio button and click Next 3.f In the left pane, click the Protocol and Ports option and using the Protocol Type drop-down menu, select ICMPv4, and then click Next.
>
> Page 13 of 15
>
> Lab - Using Wireshark to View Network Traffic 3.g In the left pane, click the Name option and in the Name field, type Allow ICMP Requests. Click Finish.
>
> This new rule should allow your team members to receive ping replies from your PC. 2.4 Disabling or deleting the new ICMP rule. After the lab is complete, you may want to disable or even delete the new rule you created in Step 1. Using the Disable Rule option allows you to enable the rule again at a later date. Deleting the rule permanently deletes it from the list of inbound rules.
>
> 4.a On the Advanced Security window, click Inbound Rules in the left pane and then locate the rule you created in Step 1. Page 14 of 15
>
> Lab - Using Wireshark to View Network Traffic 4.b To disable the rule, click the Disable Rule option. When you choose this option, you will see this option change to Enable Rule. You can toggle back and forth between Disable Rule and Enable Rule; the status of the rule also shows in the Enabled column of the Inbound Rules list.
>
> 4.c To permanently delete the ICMP rule, click Delete. If you choose this option, you must re-create the rule again to allow ICMP replies. Page 15 of 15
