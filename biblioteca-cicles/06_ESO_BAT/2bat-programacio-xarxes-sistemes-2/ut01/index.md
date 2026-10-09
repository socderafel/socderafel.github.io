---
layout: default
title: "UT1 — Xarxes Locals — Programació, Xarxes i Sistemes Informàtics II | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n Batxillerat · UT1 Completa"
prev_url: "../ut00/ut00actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT0"
next_url: "../ut01/ut0101.html"
next_label: "1.1 Introducción a las redes locales ➡️"
---

# 📘 UT1 — Xarxes Locals (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**1.1 Introducción a las redes locales**](#ut0101) (o [obrir en pàgina individual ➡️](./ut0101.md) )
> - [**1.2 Mapa físico y lógico**](#ut0102) (o [obrir en pàgina individual ➡️](./ut0102.md) )
> - [**1.3 Arquitecturas de red**](#ut0103) (o [obrir en pàgina individual ➡️](./ut0103.md) )
> - [**1.4 MODELO OSI**](#ut0104) (o [obrir en pàgina individual ➡️](./ut0104.md) )
> - [**1.5 MODELO TCP/IP**](#ut0105) (o [obrir en pàgina individual ➡️](./ut0105.md) )
> - [**1.6 Tipos de cableado**](#ut0106) (o [obrir en pàgina individual ➡️](./ut0106.md) )
> - [**✍️ Activitats pràctiques UT1**](#ut01actividades) (o [obrir en pàgina individual ➡️](./ut01actividades.md) )

---

## 1.1 Introducción a las redes locales

> **📌 🏷️ Apunt de la Unitat**
> ### **Redes Locales**

> **📌 🏷️ Apunt de la Unitat**
> ### **Arquitecturas de Red**

> **🔗 Recurs Web: Video explicativo - Capas Modelo TCP/IPURL**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=1pB2kan_AFk) ↗️**](https://www.youtube.com/watch?v=1pB2kan_AFk)

> **📌 🏷️ Apunt de la Unitat**
> ### **Montaje de Redes**

> **📌 🏷️ Apunt de la Unitat**
> ### **Packet Tracer**

---

Redes Locales Redes Locales 1º CFGM 1º CFGM Sistemas Microinformáticos y Redes Sistemas Microinformáticos y Redes Tema 1 – Introducción a Tema 1 – Introducción a las redes locales las redes locales 1.3 Redes Locales 1.3 Redes Locales

1.3 Redes Locales

- Concepto de red local. Ventajas e inconvenientes.
- Elementos de una red local.
- Modelos de explotación de Sistemas Informáticos.

1)Monopuesto. 2)Red entre iguales. 3)Modelo cliente/servidor. 4)Tipos de servidores más frecuentes. 5)Intranet.

- Redes. Topologías, tipos, medios y modos de transmisión.

- Concepto de red local.

Ventajas e inconvenientes.

### 1. Concepto de red local

Conjunto de ordenadores y/o dispositivos conectados por enlaces de un medio físico (medios guiados) o inalámbricos (medios no guiados) y que comparten información (archivos), recursos (escáner, impresoras, etc.) y servicios (e- mail, chat, juegos...). Para que esto ocurra, se requiere que exista transmisión (emisión/recepción) de la información.

### 1. Ventajas de una red local

Compartir recursos (impresoras, conexión a Internet...). Esto hace que se reduzca el número de dispositivos periféricos no teniendo que comprar uno para cada ordenador y por lo tanto suponga un ahorro de espacio y un ahorro económico.

Compartir información entre los dispositivos. Se puede acceder a ella desde otro ordenador mediante carpetas compartidas, con servidores de datos o en el servidor web si se utiliza una Intranet.

Mejorar la fiabilidad del sistema informático (backups, réplicas...) Si las máquinas están en red no sería necesario hacer copias de seguridad de cada ordenador, sino que mediante el uso de servidores de datos sería mucho más sencillo realizar copias de seguridad. También se pueden mantener réplicas en tiempo real de los servidores más importantes para reemplazarlos inmediatamente si fallan Las actualizaciones de seguridad de los programas serían más fáciles al poder hacerse a través de la red.

Incrementar el rendimiento de los ordenadores mediante el uso de clusters. Un cluster es un conjunto de ordenadores que realizan una misma tarea colaborando entre ellos. Como ejemplo podríamos poner Google o WoW, con clusters que contienen miles de ordenadores.

Servir de medio de comunicación interno (email, chat, videoconferencias...) entre los distintos miembros de la empresa.

- Elementos de una red local.

### 2. Elementos de una red local

Servidores: Ordenador que, formando parte de una red, provee servicios a otras computadoras denominadas clientes.

Clientes: Equipos con más o menos prestaciones que solicitan servicios a los Servidores.

Otros dispositivos: Impresora, escáner de Alta Definición, Plotter ...

Tarjetas de red: Puede ser integrada en la placa base, conectarse a un slot de la misma, a un puerto USB, etc...

Cables y conectores

Canaletas, paneles

Elementos de interconexión: Un concentrador o hub es un dispositivo que permite centralizar el cableado de una red y poder ampliarla. Esto significa que dicho dispositivo recibe una señal y repite esta señal emitiéndola por sus diferentes puertos. Un conmutador o switch es un dispositivo cuya función es interconectar elementos de red, de manera similar a los hubs, pero pasa los datos de un elemento a otro de acuerdo con la dirección MAC de destino indicada en la trama. Ha sustituido a los “hubs” debido a su abaratamiento.

Router: Un router es el elemento capaz de conectar nuestra red local con otra red diferente. Por ejemplo, si un router trabajara en Correos sería la persona encargada de decidir hacia dónde va una carta ya que es capaz de leer la dirección y dirigirla al lugar de destino.

Punto de acceso: Un punto de acceso inalámbrico (WAP o AP por sus siglas en inglés: Wireless Access Point) es un dispositivo que conecta dispositivos de comunicación inalámbrica para formar una red inalámbrica. Los puntos de acceso normalmente van conectados físicamente a otro elemento de red, normalmente a un switch o directamente a la línea telefónica si es una conexión doméstica. En este último caso, el AP estará haciendo también el papel de Router. Son los llamados Wireless Routers.

Armarios y cuadros eléctricos

### 3. Modelos de explotación de

Sistemas Informáticos

### 3. Modelo de explotación de sistemas

Monopuesto: Las máquinas están aisladas entre sí. No comparten recursos ni información. Cada una tiene lo que necesita su usuario correspondiente.

Redes entre iguales: Todos los ordenadores pueden poner a disposición de los demás equipos los recursos de que disponen. Además, todos los ordenadores tienen iguales o similares funciones, esto es, trabajan “al mismo nivel”.

Redes entre iguales. Inconvenientes: Información desorganizada y difícil de encontrar: Al poder compartir carpetas cualquier usuario, la información está muy repartida por toda la red. Es difícil localizarla y puede estar repetida o no actualizada. Dificultad para realizar copias de seguridad: Tendríamos que realizar backups de todas las máquinas de la red.

Problemas de accesibilidad a la información: Si una máquina no está encendida, sus recursos no son accesibles.

Modelo cliente / servidor: Los equipos configurados como servidores proporcionan determinados servicios al resto de los equipos de la red. En este tipo de redes los roles están bien definidos y no se intercambian: los clientes en ningún momento pueden tener el rol de servidores y viceversa.

Modelo cliente / servidor. Tipos de servidores:  Servidor Web: El servidor alberga en su interior los contenidos de páginas web.  Servidor de correo electrónico: Gestiona envíos y recepciones de mensajes de correo electrónico.  Servidor proxy: Permite compartir una conexión a Internet y acelerar la velocidad de navegación. Puede restringir el acceso a páginas mediante listas blancas o negras.

 Servidor FTP: Servidor de ficheros utilizando el protocolo FTP.  Servidor Base de Datos: Almacena datos en forma estructurada y permite consultar y modificar los datos.  Servidor de Archivos: Los archivos se almacenan de forma remota en el servidor.  Servidor de impresión: Gestiona la cola de impresión de varias impresoras de forma centralizada.

 Servidor de aplicaciones: El cliente ejecuta las aplicaciones en el servidor, sin consumir sus propios recursos.

Modelo cliente / servidor. Tipos de servidores. Se pueden mantener varios servidores ejecutándose en una misma máquina física. De todas formas, es muy recomendable la utilización de máquinas virtuales para independizar en lo posible los distintos servicios ofrecidos.

Intranet: Una intranet es una red local de equipos informáticos normalmente privada o interna, que utiliza tecnología Web para compartir dentro de una organización la información y las aplicaciones que la manejan. Sustituye o complementa a servidores de datos y de aplicaciones.

Ventajas Intranet:  Posibilidad de tener disponible toda la información que necesitan los empleados de forma mas sencilla, ya que están acostumbrados a usar las herramientas de la web (navegadores, programas de correo, etc...).  Aplicaciones Web compartidas. (Programas que se ejecutan desde la página web, accediendo al servidor de BD de la empresa). La Intranet funciona como un servidor de aplicaciones, así que no es necesario instalar programas en las máquinas de los empleados. Esto reduce el tiempo necesario para actualizar las versiones de los programas usados en la empresa, pues no hay que hacerlo en cada PC.

 Comunicaciones más potentes (foros, tablones de noticias, chats... ) Cuando se permite el acceso a la Intranet desde fuera de la red local de la empresa, como si fuera una página web normal, se habla de Extranet.

Inconvenientes Intranet:  Aunque los empleados tienen que introducir usuario y contraseña para acceder a la Extranet con un determinado nivel de privilegios, esto crea un riesgo para la seguridad de la información de la empresa.  Los costes de implantar una Intranet son altos (elaboración de las aplicaciones web en lugar de las tradicionales, formación de los empleados para su utilización, etc..)  Los empleados pueden mostrar cierta resistencia a cambiar su forma habitual de trabajar.

Intranet. Infraestructura.  Una Intranet como mínimo tiene que disponer de un Servidor Web y un Servidor de Bases de Datos, en la misma máquina o en máquinas distintas.

### 4. Clasificación de las redes

Los criterios utilizados para clasificar las redes son:  Según extensión geográfica. (LAN, MAN, WAN)  Según medios de transmisión. (Guiados, no guiados, mixtas)  Según titularidad. (Dedicadas, Compartidas)  Según topología. (Bus, Anillo, Estrella, Combinación)  Según tecnología de transmisión. (Difusión, Punto a Punto)  Según modo de transmisión. (Simplex, Half Duplex, Full Duplex)

- Clasificación de las redes. Extensión geográfica.

LAN (Local Area Network) (Red de Área Local) Utilización: Oficina, empresas, edificio, campus, … (distancia máxima 1 km.) Velocidades muy altas (hasta 1 Gbps).

- Clasificación de las redes. Extensión geográfica.

MAN (Metropolitan Area Network) (Red de Área Metropolitana) Utilización: grandes empresas, ayuntamientos, … (abarca un pueblo, ciudad o área metropolitana) Velocidades muy altas (hasta 10 Gbps).  Puede integrar varios servicios: Vídeo, voz y datos.

- Clasificación de las redes. Extensión geográfica.

WAN (Wide Area Network) (Red de Área Extensa) Utilización: grandes empresas, gobiernos, … (abarca un país, continente o todo el mundo)  Ejemplo: Rediris (España), Internet.

- Clasificación de las redes. Medio de transmisión.

Medio de transmisión: Soporte físico por el que se transmiten los datos. Puede ser:  GUIADO: Utilizan un medio sólido para la transmisión (un cable). Cable coaxial Par paralelo Par trenzado Fibra óptica  NO GUIADO: Utilizan el aire para transportar los datos (medio inalámbrico).

Ondas de radio Microondas Infrarrojos Ondas de luz

- Clasificación de las redes. Medio de transmisión.

Las redes se clasifican según el medio de transmisión en:  Redes de medios guiados. Redes de medios no guiados. Redes mixtas.

- Clasificación de las redes. Titularidad.

Las redes se clasifican según su titularidad en:  Redes dedicadas: Uso exclusivo por parte de una organización (por ejemplo una empresa).  Redes compartidas: Soportan información de diversos usarios y/u organizaciones (ejemplo: red de telefonía fija, red de telefonía móvil...).

- Clasificación de las redes. Topología.

La topología es la forma en que se conectan las máquinas entre ellas. Las redes se clasifican según su topología en:  Redes en bus.  Redes en anillo.  Redes en estrella.  Combinaciones de las anteriores (por ejemplo: anillo de estrellas).

- Clasificación de las redes. Topología. Estrella.

Es la topología más empleada actualmente en redes locales. Los errores sólo afectan a la conexión de una de las máquinas y son, por tanto, fáciles de localizar. Los inconvenientes son la necesidad de emplear un elemento central de interconexión (hub o switch) y la gran cantidad de metros de cable que hay que montar para su instalación.

- Clasificación de las redes. Topología. Bus.

La topología de bus se encuentra en desuso, pero fue muy popular en su día asociada al cable coaxial. Su ventaja principal es que se necesitan muy pocos metros de cable para unir los ordenadores en bus y no necesita ningún elemento dónde se conecten todos los ordenadores (no hay hubs ni switches).

Cayó en desgracia porque cuando se estropeaba cualquier trozo del cable, dejaba de funcionar la red entera y era muy difícil encontrar el fallo.

- Clasificación de las redes. Topología. Bus.

- Clasificación de las redes. Topología. Anillo.

La topología de anillo se utiliza con mucha frecuencia para unir distintos edificios con enlaces de fibra óptica. Como es muy difícil localizar fallos, se emplea una estructura de doble anillo para dar mayor fiabilidad al sistema. En caso de fallar un anillo, se emplea el otro hasta que se repara.

Anillo simple Anillo doble

- Clasificación de las redes. Tecnología transmisión.

Las redes se pueden clasificar según la tecnología de transmisión en:  Redes de difusión (broadcast).  Redes punto a punto.  Conmutación de circuitos.  Conmutación de paquetes.

- Clasificación de las redes. Tecnología transmisión.

Redes de difusión. En las redes de difusión, un elemento de la red transmite paquetes de información al resto de los elementos de dicha red. Existe un sólo canal o medio de comunicación compartido por todos los elementos de la red. Ejemplos de redes de difusión: TV, Radio, Megafonía...

En las redes de difusión todos reciben el mensaje, pero no todos los destinatarios lo atienden. Veamos un ejemplo: Se ruega al propietario del coche cuya matricula es XXX123, retire el vehículo de la puerta principal. (Todos los presentes recibimos el mensaje, pero filtramos)

- Clasificación de las redes. Tecnología transmisión.

Redes punto a punto. En las redes Punto a Punto un elemento de la red transmite la información únicamente a otro elemento de la red. Es necesario emplear alguna técnica de conmutación para establecer una forma de comunicar los datos del emisor al receptor: Conmutación de circuitos

Antes de empezar la comunicación se realiza un establecimiento de conexión y se reserva un camino para enviar toda la información, siendo liberado al final de la misma. Conmutación de paquetes: La información se parte en trozos y cada uno se envía por un camino que no tiene porque ser el mismo siempre. Los paquetes han de ser ordenados en el destinatario.

- Clasificación de las redes. Tecnología transmisión.

Modo de transmisión. El modo de transmisión es la capacidad que tienen los medios de mantener una comunicación unidireccional o bidireccional de forma simultánea.  Símplex: Unidireccional  Semi-dúplex o half-duplex: Bidireccional pero NO simultánea.  Full-duplex: Bidireccional y simultánea.

---

## 1.2 Mapa físico y lógico

Redes Locales Redes Locales 1º CFGM 1º CFGM Sistemas Microinformáticos y Redes Sistemas Microinformáticos y Redes Tema 1 – Introducción a Tema 1 – Introducción a las redes locales las redes locales 1.5 Mapa físico y lógico 1.5 Mapa físico y lógico

1.4 Direccionamiento Básico

- Mapa físico.
- Mapa lógico.

### 1. Mapa físico

Un mapa físico es la ubicación física real de los cables, los equipos y otros dispositivos. En una red conectada por cables el mapa físico debe de incluir el armario o rack y el cableado para las estaciones individuales. Es conveniente realizar el mapa físico sobre un plano físico real del edificio o sala.

Debe de incluir la tipología del cableado, así como los nombre de los equipos y dispositivos de red.

Ejemplo 1

Ejemplo 2

Ejemplo 3

Ejemplo 4

### 2. Mapa lógico

Un mapa lógico documenta la ruta que toman los datos a través de la red y la ubicación donde tienen lugar las funciones de red, como el enrutamiento. Debe incluir denominación y direccionamiento lógico de las estaciones finales así como de la subred. No importa la situación física del host sino su función lógica en la red.

Ejemplo 1

Ejemplo 2

Ejemplo 3

Ejemplo 4

---

## 1.3 Arquitecturas de red

Redes Locales Redes Locales 1º CFGM 1º CFGM Sistemas Microinformáticos y Redes Sistemas Microinformáticos y Redes Tema 1 – Introducción a Tema 1 – Introducción a las redes locales las redes locales 1.7 Arquitectura de redes 1.7 Arquitectura de redes

1.7 Arquitectura de redes

#### 1) Introducción

#### 2) Modelo de referencia OSI

#### 3) Arquitectura TCP/IP

### 1. Introducción a la arquitectura de redes

La arquitectura de una red viene definida por 3 características fundamentales

- Topología: es la organización de su cableado, ya

que define la configuración básica de la interconexión de estaciones.

- Método de acceso a la red: Todas las redes que

poseen un medio compartido para transmitir la información necesitan ponerse de acuerdo a la hora de enviar información.

- Protocolos de comunicaciones: Son las reglas y

procedimientos utilizados en una red para realizar la comunicación. Esas reglas tienen en cuenta el método utilizado para corregir errores, establecer una comunicación, etc.

Problemas en el diseño de una arquitectura de red

- Encaminamiento: cuando existen diferentes rutas

posibles entre el origen y el destino, se debe elegir una de ellas (normalmente, la más corta o la que tenga un tráfico menor).

- Direccionamiento: Puesto que una red

normalmente tiene muchos ordenadores conectados, algunos de los cuales tienen múltiples procesos (programas), se requiere un mecanismo para que un proceso en una máquina especifique con quién quiere comunicarse. Como consecuencia de tener varios destinos, se necesita alguna forma de direccionamiento que permita determinar un destino específico.

Problemas en el diseño de una arquitectura de red

- Acceso al medio: En las redes donde existe un

medio de comunicación de difusión, debe existir algún mecanismo que controle el orden de transmisión de los interlocutores, ya que compartir el medio producirá una colisión, choque de paquetes en la red.

- Saturación del receptor: Un emisor rápido pueda

saturar a un receptor lento y, por tanto, será posible que se pierdan datos.

- Mantenimiento del orden: Algunas redes de

transmisión de datos desordenan los paquetes que envían. Para solucionar esto, el protocolo debe incorporar un mecanismo que le permita volver a ordenar los paquetes en el destino.

Problemas en el diseño de una arquitectura de red

- Control de errores: Todas las redes de

comunicación de datos transmiten la información con una pequeña tasa de error. Esto se debe a que los medios de transmisión son imperfectos.

- Multiplexación: En determinadas condiciones, la red

puede tener tramos en los que existe un único medio de transmisión que, por cuestiones económicas, debe ser compartida por diferentes comunicaciones.

- Introducción a la arquitectura de redes.

Arquitectura por niveles.

- Introducción a la arquitectura de redes.

Arquitectura por niveles El diseño de un sistema de comunicación requiere de la resolución de muchos y complejos problemas. Por este motivo, las redes se organizan en capas o niveles para reducir la complejidad de su diseño. Cada una de estas capas o subniveles se construye sobre su predecesor de tal forma que utiliza los servicios o funciones diseñados en él y cada nivel es responsable de ofrecer servicios a niveles superiores.

Dentro de cada nivel de la arquitectura coexisten diferentes servicios. Así, los servicios de los niveles superiores pueden elegir cualquiera de los ofrecidos por las capas inferiores, dependiendo de la función que se quiera realizar.

- Introducción a la arquitectura de redes.

Arquitectura por niveles En una arquitectura por capas se siguen las siguientes reglas

- Cada nivel dispone de un conjunto de servicios.
- Los servicios están definidos mediante protocolos.
- Cada nivel se comunica solamente con el nivel

inmediato superior y con el inmediato inferior.

- Cada uno de los niveles inferiores proporciona

servicios a su nivel superior. En general, el nivel n de una máquina se comunica de forma indirecta con el nivel n homónimo de la otra máquina. Al grupo formado por procesos en máquinas diferentes que están al mismo nivel se le llama entidades pares o procesos pares y son los que se comunican entre sí.

- Introducción a la arquitectura de redes.

Arquitectura por niveles

- Introducción a la arquitectura de redes.

Arquitectura por niveles El modelo de arquitectura por niveles necesita información adicional para que los procesos pares puedan comunicarse a un determinado nivel. A ese añadido se le llama cabecera o información de control y suele ir al principio y/o al final del mensaje.

La última capa no suele añadir información adicional ya que se encarga de enviar los dígitos binarios.

- Introducción a la arquitectura de redes.

Arquitectura por niveles

- Introducción a la arquitectura de redes.

Arquitectura por niveles

### 2. Modelo de referencia OSI

Se ocupa de la conexión de sistemas abiertos, esto es, sistemas que están preparados para la comunicación con sistemas diferentes. OSI emplea una arquitectura de siete niveles a fin de dividir los problemas de interconexión en partes manejables.

Los principios teóricos en los que se basa OSI son

- Cada capa de la arquitectura está pensada para realizar una función

bien definida.

- Debe crearse una nueva capa siempre que se necesite realizar una

función bien diferenciada del resto.

- Permitir que las modificaciones de funciones o protocolos que se

realicen en una capa no afecten a los niveles contiguos.

- Cada nivel debe interactuar únicamente con los niveles contiguos a

él (es decir, el superior y el inferior). OSI está definido como modelo, y no como arquitectura. La razón es que la ISO definió solamente la función general que debe realizar cada capa, pero no mencionó en absoluto los servicios y protocolos que se deben usar en cada una de ellas.

### 3. Arquitectura TCP/IP

Es la arquitectura más utilizada del mundo, ya que es la base de comunicación de Internet. En 1973, el Departamento de defensa de EE.UU (DoD) inició un programa de investigación cuyo objetivo fundamental era desarrollar una red de comunicación que cumpliera las siguientes características

- Interconexión de redes diferentes. Es decir que la red

puede estar formada por tramos que usan tecnología de transmisión diferente.

- Tolerancia a fallos. El DoD deseaba una red que capaz

de soportar ataques terroristas o incluso alguna guerra nuclear sin perderse datos y manteniendo las comunicaciones establecidas.

- Soporte para uso de aplicaciones diferentes

Transferencias de archivos, comunicación en tiempo real,...

Estos objetivos implicaron el diseño de una red de topología irregular donde la información se fragmenta para seguir rutas diferentes hacia su destino. Surgieron las redes ARPANET (investigación) y MILNET (militar). El DoD permitió a varias universidades que colaboraran en el proyecto, y ARPANET se expandió gracias a la interconexión de esas universidades e instalaciones del Gobierno.

En 1983 nació la red global internet que utiliza esta arquitectura de comunicación.

Algunos de los motivos de la popularidad alcanzada son

- Es independiente de los fabricantes y las marcas

comerciales.

- Soporta múltiples tecnologías de redes.
- Es capaz de interconectar redes de diferentes tecnologías

y fabricantes.

- Puede funcionar en máquinas de cualquier tamaño.
- Se ha convertido en estándar de comunicación en EEUU

desde 1983.

Capa de subred: Solamente se especifica que debe existir algún protocolo que conecte la estación con la red. Como TCP/IP se diseñó para su funcionamiento sobre redes diferentes, esta capa depende de la tecnología utilizada y no se especifica de antemano.

Capa de Interred: Es la más importante. Permite que las estaciones envíen información (paquetes) a la red y los hagan viajar de forma independiente hacia su destino. Durante ese viaje, los paquetes pueden atravesar redes diferentes y llegar desordenados.

Capa de Interred: El principal protocolo de la capa de red en Internet es IP. El nivel de red también define dos protocolos auxiliares que ayudan a IP a realizar sus funciones: ARP, que mantiene la correspondencia entre direcciones lógicas con físicas, e ICMP (protocolo de control de mensajes y errores).

Capa de transporte: Establecer una conversación entre el origen y el destino, igual que la capa de transporte en OSI. No se responsabilizan del control de errores ni de la ordenación de los mensajes. Se han definido varios protocolos, entre los que destacan TCP orientado a la conexión y fiable y UDP no orientado a la conexión y no fiable.

Capa de aplicación: El nivel de aplicación es el que entra en contacto con los usuarios fina- les. Tiene la particularidad de que incluye cualquier función o servicio que se utilice en la red y que no se suministre en los niveles anteriores. Esta capa contiene todos los protocolos de alto nivel que utilizan los programas para comunicarse.

Aquí se encuentra el protocolo de terminal virtual (TELNET), el de transferencia de archivos (FTP), el protocolo http, etc

### 3. Resumen

---

## 1.4 MODELO OSI

### 📊 1. MODELO OSI

### 📊 2. 1. El modelo de referencia OSI

- El modelo OSI no existe de manera física, se trata de un modelo que se ha propuesto para que los fabricantes y toda persona que quiera poner en funcionamiento una red sepa cómo hacerlo.
- Modelo OSI es un modelo de referencia y se utiliza en los sistemas abiertos.
- Modelo OSI está compuesto por un conjunto de capas, y cada una de ellas contiene una serie de Servicios. Tenemos todas las funciones del modelo organizadas de modo que las funciones que son parecidas están todas en una misma capa.

### 📊 3. Ventajas de dividir en capas

- Divide la comunicación en partes más pequeñas y sencillas.
- Facilita la normalización de los componentes de la red, con lo cual permite el desarrollo y el apoyo de diferentes fabricantes.
- Permite que diferentes tipos de hardware (hardware) y software (software) se comuniquen entre ellos.
- Impide que los cambios en una capa afecten las otras, cosa que permite un desarrollo más acelerado.
- Divide la comunicación de la red en partes más pequeñas y hace más fácil la comprensión.

### 📊 4. 2. Las capas del modelo OSI

- Modelo OSI viene definido por siete capas o niveles, que se encuentran ordenadas. Las capas más bajas son las que están más relacionadas con los elementos físicos. Y las capas más altas son las que están más relacionadas con las aplicaciones o los procesos que realizan los usuarios.

### 📊 5. Capa 1: Nivel Físico

- Esta capa se ocupa de los aspectos físicos y mecánicos de los dispositivos.
- Define para qué sirven cada uno de los pines que tienen los conectores, cómo se representan los bits que hay que mandar para que se puedan comunicar los equipos, la velocidad de transmisión de los bits, las funciones de los circuitos de la interfaz física, los eventos que se llevan a cabo cuando se intercambian los bits, etc.
- En esta capa se realiza la transformación de los bits de un paquete de datos en una señal física que podemos enviar a través de un medio de transmisión, como puede ser un hilo de cobre, fibra óptica o el aire.

### 📊 6. Capa 2: Enlace de datos

- La función de esta capa es la de asegurarse que en el medio de transmisión no se produzcan errores; en el caso de que haya tramas erróneas, eliminarlas del medio; regular la comunicación, en el caso de que tengamos un emisor muy rápido y un receptor lento, o viceversa.
- En esta capa se realiza el direccionamiento físico (MAC).
- Esta capa se divide a su vez en dos capas
- MAC (control de acceso al medio): en esta capa se mira si el canal de transmisión está libre para poder transmitir la información.
- LLC (control lógico del enlace): esta capa se ocupa del control de errores, del con-trol de la velocidad en el envío y recepción de paquetes, etc.

### 📊 7. Capa 3: Nivel de red

- Se encarga de buscar el mejor camino para enviar un paquete de datos. Para ello utilizará algún tipo de red de comunicaciones.
- En esta capa se realiza el direccionamiento lógico (direcciones IP).

### 📊 8. Capa 4: Nivel de transporte

- La función de esta capa es la del transporte del mensaje desde el origen hasta el destino.
- Esta capa hace de vínculo entre la capa de red y la capa de sesión.
- También puede ayudar a la optimización del uso de los servicios de red proporcionar la calidad de servicio solicitada, por ejemplo, estableciendo un retardo máximo, la prioridad o solicitando una tasa de error determinada.

### 📊 9. Capa 5: Nivel de sesión

- La encargada de establecer una sesión entre los dos participantes de la comunicación, es como si estableciésemos un canal virtual para mandar la información. Por ejemplo, si cuando estamos transmitiendo se cortase la transmisión, esta capa se encargaría de continuar la transmisión por el punto donde se hubiese quedado.
- También se encarga de cómo se va a realizar el diálogo: si va a ser en los dos sentidos a la vez, o primero en un sentido y luego en el otro. Podemos decir que esta capa se encarga tanto del establecimiento de la sesión, como del mantenimiento y de la interrupción de la sesión.

### 📊 10. Capa 6: Nivel de presentación

- Esta capa se encarga de la sintaxis o forma de los datos; es como si dijéramos que esta capa se encarga de poner los datos en un formato estándar.
- Dos equipos no podrán comunicarse si están hablando en diferentes formatos, por ejemplo, en un equipo se utilizan seis bits para transmitir paquetes de información y en otro se utilizan ocho bits. Estos dos ordenadores no podrían entenderse.
- Esta capa se encarga de adecuar los datos para que se puedan comunicar.
- También se encarga de comprimir la información si es demasiado extensa.
- Y de codificar la información para que, en el caso de ser interceptada por otro equipo, que este equipo no sea capaz de leerla información.

### 📊 11. Capa 7: Nivel de aplicación

- Es la que está más en contacto con el usuario. Se encarga de utilizar los protocolos necesarios para que las aplicaciones puedan comunicarse.
- En esta capa es donde realmente se produce la entrada y salida de datos.

### 📊 12. 3. Transmisión de datos

### 📊 13. 4. PDU (unidad de datos de protocolo)

---

## 1.5 MODELO TCP/IP

### 📊 1. MODELO TCP/IP

### 📊 2. 1. El modelo TCP/IP

- Es la arquitectura más utilizada del mundo, ya que es la base de comunicación de Internet.
- En 1973, el Departamento de defensa de EE.UU (DoD) inició un programa de investigación cuyo objetivo fundamental era desarrollar una red de comunicación que cumpliera las siguientes características
- Interconexión de redes diferentes. Es decir que la red puede estar formada por tramos que usan tecnología de transmisión diferente.
- Tolerancia a fallos. El DoD deseaba una red que capaz de soportar ataques terroristas o incluso alguna guerra nuclear sin perderse datos y manteniendo las comunicaciones establecidas.
- Soporte para uso de aplicaciones diferentes: Transferencias de archivos, comunicación en tiempo real,...

### 📊 3. Motivos de su popularidad

- Es independiente de los fabricantes y las marcas comerciales.
- Soporta múltiples tecnologías de redes.
- Es capaz de interconectar redes de diferentes tecnologías y fabricantes.
- Puede funcionar en máquinas de cualquier tamaño.
- Se ha convertido en estándar de comunicación en EEUU desde 1983.

### 📊 4. 2. Comparativa modelo OSI y TCP/IP

### 📊 5. Capa 4: Nivel de aplicación

- Corresponde con las capas de aplicación, presentación y sesión del modelo OSI
- Es la capa que los programas utilizan para comunicarse a través de la red con otros programas.
- Algunos programas que proporcionan servicios y trabajan directamente con las aplicaciones de los usuarios y sus respectivos protocolos de la capa de aplicación son
- HTTP
- FTP
- SMTP
- SSH

### 📊 6. Capa 3: Nivel de transporte

- Corresponde con la capa de transporte del modelo OSI.
- Los protocolos de dicha capa soluciona problemas como la fiabilidad y la seguridad de que los datos lleguen al destino y lo hagan en el orden correcto.
- Hay dos protocolos básicos en la capa de transporte
- TCP
- UDP

### 📊 7. Capa 2: Capa de Red

- La capa de Internet del modelo TCP/IP es equivalente a la capa de red del modelo OSI.
- La función principal es hacer que los nodos implicados en la comunicación envíen los paquetes por cualquier red i los hagan viajar hacia su destino.
- Los paquetes pueden llegar incluso por caminos diferentes, incluso en orden diferente de como salieron del emisor.
- La capa de Internet define el protocolo IP.

### 📊 8. Capa 1: Capa de Enlace de datos

- Equivalente a las capas física y de enlace del modelo OSI.
- En el modelo TCP/IP solo se indica que el nodo ha de conectarse a la red haciendo uso de los protocolos que hay en la red física en cuestión, de manera que se puedan enviar paquetes IP.
- Capa Física
- El principal propósito es transportar una corriente de bits de una máquina a otra.
- Hay diferentes tipos de medios físicos para realizar este transporte.

### 📊 9. 3. Transmisión de datos

### 📊 10. 4. PDU (unidad de datos de protocolo)

### 📊 11. 5. Protocolos

- Los protocolos son conjuntos de normas y procedimientos utilizados para hacer una comunicación. Rigen la manera en que los dispositivos de una red intercambian información.
- Existen diferentes tipos de protocolos.

### 📊 12. 5.1. Tipos de protocolos

### 📊 13. 5.2. Funciones de los protocolos

### 📊 14. 5.2. Funciones de los protocolos

---

## 1.6 Tipos de cableado

Redes Locales Redes Locales 1º CFGM 1º CFGM Sistemas Microinformáticos y Redes Sistemas Microinformáticos y Redes Tema 3 Tema 3 Medios de transmisión Medios de transmisión 3.2 3.2 Tipos de cableado Tipos de cableado Miguel Á. Ferrer Miguel Á. Ferrer

Medios de transmisión

#### 1) Tipos de cableado

1)Par sin trenzar 2)Par trenzado 3)Cable coaxial 4)Fibra óptica 5)Medios inalámbricos

### 1. Tipos de cableado

Distinguimos 2 TIPOS DE MEDIOS: Guiados: Conducen las ondas a través de un soporte físico. No guiados: proporcionan un soporte para que las ondas se transmitan pero no las dirigen. En ambos casos la transmisión se realiza por medio de ondas electromagnéticas.

Cuando hablamos de medios guiados es el medio el que determina las limitaciones de la transmisión a realizar. Cada uno de los medios cumplen una determinada característica en cuanto a: Velocidad de transmisión de datos Ancho de banda que puede soportar Espacio entre repetidores Fiabilidad en la transmisión Coste Facilidad de instalación

1.1 Par sin trenzar (paralelo)

1.1 Par sin trenzar (paralelo) Este medio de transmisión está formado por dos hilos de cobre paralelos recubiertos de un material aislante (plástico). Este tipo de cableado ofrece muy poca protección frente a interferencias. Normalmente se utiliza como cable telefónico para transmitir voz analógica y las conexiones se realizan mediante un conector denominado RJ-11.

Es un medio semidúplex ya que la información circula en los dos sentidos por el mismo cable pero no se realiza al mismo tiempo.

1.1 Par sin trenzar (paralelo) Se utiliza para transmisión de datos a corta distancia, ya que las interferencias afectan mucho a este tipo de transmisiones.

1.2 Par trenzado

1.2 Par trenzado El par trenzado consiste en dos cables de cobre aislados, normalmente de 1 mm de espesor, enlazados de dos en dos de forma helicoidal, semejante a la estructura del ADN.

1.2 Par trenzado PROBLEMA: Dos cables paralelos constituyen una antena simple por lo que se generan radiaciones innecesarias. SOLUCIÓN: Cuando se trenzan los cables las ondas se cancelan y la radiación del cable generada como recibida es menos efectiva. Así se reduce la interferencia eléctrica tanto exterior como de pares cercanos.

1.2 Par trenzado Ventajas del par trenzado: Bajo coste Fácil instalación Buen rendimiento Se solucionan fácilmente los problemas de instalación Velocidad de transmisión de varios Mbps

1.2 Par trenzado Desventajas del par trenzado: Ancho de banda limitado Altas tasas de error a altas velocidades Baja inmunidad al ruido Baja inmunidad al crosstalk Distancia limitada (En Ethernet 100 m.)

1.2 Par trenzado TIPOS de cable de par trenzado para DATOS: UTP : Pares trenzados no apantallados STP : Pares trenzados apantallados individualmente FTP : Pares trenzados totalmente apantallados SFTP / SSTP : Pares trenzados apantallados individualmente con malla global

1.2 Par trenzado UTP – Unshielded Twisted Pair – Par trenzado no apantallado El más simple y económico Sin pantalla protectora Muy flexibles Sensibles a interferencias

1.2 Par trenzado STP – Shielded Twisted Pair – Par trenzado apantallado Cada par va rodeado de una malla conductora Gran inmunidad al ruido La malla protectora debe de estar conectada a las tomas de tierra de los equipos.

1.2 Par trenzado FTP – Foiled Twisted Pair – Par trenzado con pantalla global Posee una malla conductora global Gran inmunidad al ruido exterior De coste inferior a los cables STP La malla protectora debe de estar conectada a las tomas de tierra de los equipos.

1.2 Par trenzado SFTP – Shielded Foiled Twisted Pair o Super Foiled Twisted Pair – Par trenzado apantallado con pantalla global Cada par va rodeado de una malla conductora y además posee una pantalla global Son los que poseen mayor inmunidad al ruido Es el cable que tiene mayor coste La malla protectora debe de estar conectada a las tomas de tierra de los equipos.

1.2 Par trenzado ¿Qué es esto?

1.2 Par trenzado SEPARADOR plástico en forma de cruz: Permite mantener ordenados los pares internos del cable con el objetivo de reducir el CROSSTALK.

1.2 Par trenzado ¿Qué es esto?

1.2 Par trenzado RIP CORD : Pequeño hilo de nailon o poliéster pensado para quitar de forma fácil el protector plástico del cable. Se utiliza estirando y presionando al mismo tiempo sobre el cable para conseguir cortar la cubierta protectora.

1.2 Par trenzado La mayoría de los cables UTP están recubiertos con PVC (Policloruro de vinilo) de color gris. Ventajas del PVC: Resiste bien altas temperaturas. Buen aislante eléctrico. Flexible. Es barato. Inconvenientes: Material potencialmente contaminante. Genera mucho humo y emite partículas al quemarse Vídeo comparativo en youtube

1.2 Par trenzado LSZH : Low Smoke Zero Halogen Low Smoke → Emiten poco humo al quemarse Zero halogen → No contienen halógenos que producen las partículas tóxicas al quemarse (Polipropileno). En edificios con mucho cableado es conveniente utilizar cableado LSZH por sus características. El inconveniente es que el mismo cable con cubierta LSZH respecto a uno de PVC es mucho más caro.

1.3 Cable coaxial

1.3 Cable coaxial 1 : Conductor central o vivo. Alambre de cobre duro. 2 : Aislante (dieléctrico de espuma) 3 : Malla, blindaje o trenza 4 : Cubierta aislante o Chaqueta exterior

1.3 Cable coaxial Utilizado para transportar señales eléctricas de alta frecuencia. Excelente inmunidad contra el ruido. La velocidad de transmisión depende de la longitud del cable. Por ejemplo: En cables de de 1 km. se pueden obtener velocidad de 1 y 2 Gbps. Se ha ido sustituyendo poco a poco por la fibra óptica debido al mejor ancho de banda de ésta.

1.3 Cable coaxial Utilizado en antiguas redes Ethernet thinnet. Grosor de 0,64 cm Capacidad para transportar una señal hasta 185 m. Flexible y de fácil instalación

1.3 Cable coaxial En la actualidad se sigue utilizando en: Televisión por cable Señales de antena (Wifi, TDT, …) Redes urbanas de Internet Líneas de distribución de vídeo Redes telefónicas Interurbanas Cables submarinos ...

1.4 Fibra óptica

1.4 Fibra óptica La fibra óptica está basada en la utilización de las ondas de luz para transmitir información binaria. La fibra óptica siempre transmite de FORMA DIGITAL. Los pulsos de luz representan los datos a transmitir.

1.4 Fibra óptica Un sistema de transmisión óptica tiene tres componentes: La fuente de luz: convierte una señal digital eléctrica (0s y 1s) en una señal óptica. Típicamente se utiliza un pulso de luz para representar un "1" y la ausencia de luz para representar un "0". La fuente de luz puede ser un láser o un LED.

El medio de transmisión: es una fibra de vidrio o material plástico ultradelgado que transporta la luz. El detector: se encarga de generar un pulso eléctrico en el momento en el que la luz incide sobre él.

1.4 Fibra óptica La transmisión en un cable de fibra óptica siempre es SIMPLEX. Se trata de un cilindro de pequeña sección flexible (diámetro del orden de 2 a 125 micras) por el que se transmite la luz. A continuación viene una cubierta plástica delgada para proteger el revestimiento e impedir que cualquier rayo de luz del exterior penetre en la fibra. Finalmente, varias fibras suelen agruparse en haces protegidos por una funda exterior.

El micrómetro o micra equivale a una millonésima parte de metro.

1.4 Fibra óptica Para que nos hagamos una idea del grosor del cable de fibra óptica, el grosor del cabello humano es de alrededor de 50 micrones.

1.4 Fibra óptica Básicamente existen 2 tipos diferentes de fibras ópticas: Monomodo: El diámetro del núcleo de la fibra es muy pequeño y sólo permite la propagación de un único modo o rayo (fundamental), el cual se propaga directamente sin reflexión. Este efecto causa que su ancho de banda sea muy elevado, por lo que su utilización se suele reservar a grandes distancias, superiores a 10 Km, junto con dispositivos de elevado coste (LÁSER).

Multimodo: Indica que pueden ser guiados muchos modos o rayos luminosos, cada uno de los cuales sigue un camino diferente dentro de la fibra óptica. Este efecto hace que su ancho de banda sea inferior al de las fibras monomodo. Por el contrario los dispositivos utilizados con las multimodo tienen un coste inferior (LED). Este tipo de fibras son las preferidas para comunicaciones en pequeñas distancias, hasta 10 Km.

1.4 Fibra óptica < Ancho de banda < Coste < 10 Km. LED > Ancho de banda > Coste > 10 Km. LÁSER

1.4 Fibra óptica ¡ RÉCORD VELOCIDAD ¡ En febrero de 2013 investigadores del Departamento de Física Aplicada de la Universidad de Santiago de Compostela consiguieron batir el récord mundial de transmisión de datos a través de fibra óptica: 1,05 Pbps = 1050 Tbps = 1050000 Gbps 1,05 Pbps = 1050 Tbps = 1050000 Gbps ¡ 250 discos Bluray de de doble capa en 1 segundo !

1.4 Fibra óptica Respecto a la velocidad de transmisión el límite práctico se encuentra cerca de 10 Gbps y es debido a la incapacidad que los dispositivos tienen para convertir con mayor rapidez las señales eléctricas a ópticas y al revés (tanto los emisores como los detectores).

La fibra óptica permite instalar cables de longitudes muy elevadas (de hasta 30 km), aunque esto se puede ver limitado por una baja calidad en la fabricación de la fibra. Con fibras monomodo se han alcanzado distancias de hasta 400 km. utilizando un láser de alta intensidad.

1.4 Fibra óptica El inconveniente principal es su gran coste. No tiene tanto que ver con el precio por metro de fibra, sino que más bien está relacionado con el montaje. El cable de fibra óptica no se puede doblar demasiado y las conexiones son muy costosas y complicadas.

Muchas veces sale más rentable desechar varios kilómetros de fibra antes que hacer una unión de varios tramos. Una unión mal hecha en un cable de fibra óptica puede generar atenuaciones y reflexiones.

1.4 Fibra óptica Ventajas de la fibra óptica: Anchos de banda mayores que el cobre. Baja atenuación (sólo se necesitan repetidores cada 30 km.) No es interferido por ondas electromagnéticas. Es delgada y ligera comparado con cable de cobre de igual capacidad de transmisión.

Gran seguridad: Se detecta fácilmente la intrusión en un cable de fibra óptica por debilitamiento. No produce interferencias.

1.5 Medios inalámbricos

1.5 Medios inalámbricos Las comunicaciones inalámbricas consisten en el envío y recepción de electrones (o fotones) que circulan por el espacio libre (el aire). Estas partículas viajan en forma de ondas electromagnéticas que se propagan del mismo modo que las ondas del agua en un estanque.

Dependiendo de la frecuencia de la señal, existen diferentes tipos de enlaces inalámbricos: Ondas de radio Microondas Ondas infrarrojas Ondas de luz

1.5 Medios inalámbricos Las ONDAS DE RADIO son fáciles de generar, pueden recorrer largas distancias, penetran en los edificios sin problemas y viajan en todas direcciones desde la fuente emisora. Cuando estas redes cubren largas distancias, es necesario realizar un control estricto por parte de los gobiernos para que las diferentes transmisiones no se interfieran entre sí.

Sin embargo, en señales de radio que cubren distancias más cortas, no es necesario solicitar permisos especiales y varias redes cercanas pueden utilizar frecuencias diferentes.

1.5 Medios inalámbricos Además de su aplicación en hornos, las MICROONDAS permiten transmisiones tanto terrestres como con satélites. Posibilitan velocidades de transmisión aceptables, del orden de 10 Mbps. A diferencia de las ondas de radio, las microondas no atraviesan bien los obstáculos, de forma que es necesario situar antenas repetidoras cuando queremos realizar comunicaciones a largas distancias.

1.5 Medios inalámbricos Las ONDAS INFRARROJAS se utilizan mucho para la comunicación de corto alcance, en controles remotos de aparatos electrónicos, comunicación de ordenadores son sus periféricos, etc. Tienen un inconveniente importante: no atraviesan los objetos sólidos.

La comunicación infrarroja no puede usarse en exteriores porque el Sol también emite gran cantidad de radiaciones infrarrojas que perturban la señal enviada.

1.5 Medios inalámbricos Las ONDAS DE LUZ permiten la comunicación de diferentes zonas, siempre que exista una visión directa entre ellas, ya que se transmiten en línea recta y no atraviesan los objetos. Una de las señales más utilizadas es el láser, ya que el haz de luz se mantiene enfocado en un punto muy estrecho a lo largo de su trayecto. La señalización óptica mediante láser es unidireccional, de modo que cada edificio necesita un emisor láser y un receptor.

Este esquema ofrece un coste muy bajo, es fácil de instalar y posee una elevada velocidad de transmisión. Sin embargo, es difícil colocar correctamente los emisores y los receptores y el rayo láser es fácilmente interferido por los agentes climáticos.

---

## ✍️ Activitats pràctiques UT1

> **✍️ Activitat Pràctica 1.1 — AE1_UD3_IntroducciónARedea**
> AE1_UD3– Introducció a les xarxes
>
> Explica con tus palabras que entiendes por red local.
>
> ¿Cuál es laprincipal razónpor la que existen las redes de área local?
>
> Enumera las diferentes ventajas que tiene el uso de una redlocal.
>
> Enumera los elementos más importantes que componen laelectrónica de redde una LAN y explica con tus palabras qué función cumple cada uno.
>
> ¿A qué llamamos puntodeacceso inalámbrico de una red local?
>
> Explica con tus palabras cuál es la principal diferencia entre un cliente y un servidor.
>
> ¿Cuál es la principal diferencia entre un hub, un switch y un router?
>
> Estoy en el sofa de mi casa y he decidido ver una pelicula que tengo en mi ordenador enviando la señal a mi televisor via wifi. Al entrar en elportatil en mi señal de wifi hay este icono
>
> Connected. No internet
>
> ¿Podré ver la pelicula? ¿Por qué?
>
> Supongamos que consigo conectar mi ordenador a la televisión… ¿qué modelo de red estoy usando: peer to peer o cliente-servidor? ¿Por qué?
>
> Explica contus palabras la diferencia entre una Intranet y una Extranet y pon un ejemplo de cada una de ellas.

> **✍️ Activitat Pràctica 1.2 — AE2_UD3_ClasificaciónRedes**
> AE2_UD3– Clasificación Redes
>
> Realiza un esquema de la clasificación de las redes según los diferentes siguientes criterios: extensión geográfica, medios de transmisión, titularidad, topología, tecnología detransmisión, modo de transmisión.
>
> Completa la siguiente tabla con las características de las redes LAN, MAN, WAN y PAN. Utiliza los valores indicados para cada característica.
>
> PAN
>
> LAN
>
> MAN
>
> WAN
>
> Velocidad
>
> muy baja, baja, media, alta, muy alta
>
> Extensión geográfica
>
> muy poca, poca, media, alta
>
> Tasa de error
>
> muy baja, baja, media, alta, muy alta
>
> Ámbito
>
> privado, público
>
> Medio de transmisión
>
> cable, ondas, satélite, fibra óptica
>
> Busca y enumera 5 serviciosinformáticos que suelen estar presentes en losservidoresde una empresa cualquiera de los cuales hagan uso los empleados en su trabajo utilizando un cliente PC.Ej. Correo electrónico
>
> Pon un ejemploconcretode cada una de estasredes
>
> PAN
>
> LAN
>
> MAN
>
> WAN
>
> ¿Cuáles son las pricipales ventajas e inconvenientes de una red WIFI? Indica al menos tres de cada una de ellas.
>
> Ventajas
>
> Inconvenientes

> **✍️ Activitat Pràctica 1.3 — AE3_UD2-TopologíasDeRedTarea**
> AE3_UD3– Topologías Redes
>
> ¿Cuáles son las tres topologías más habituales en una red? Busca un diagrama en Internet de cada una de ellas y pega la imagen.
>
> Topología
>
> Imagen
>
> ¿Qué característicafundamental distingue una topología de red de otra?
>
> Averigua si son verdaderas o falsas las siguientes afirmaciones (contesta V o F, en mayúsculas)
>
> A
>
> La topología es una palabra que empieza por T
>
> V
>
> B
>
> Una red en anillo es más rápida que una reden bus
>
> C
>
> Una red en bus es más rápida que una red en anillo
>
> D
>
> La rotura del anillo de una red impide totalmente la comunicación en toda la red
>
> E
>
> La rotura de un segmento de red en una red en estrella impide la comunicación en toda la red
>
> F
>
> Unared en bus es muy sensible a la congestión provocada por exceso de tráfico
>
> G
>
> Una red en bus se adapta mejor a la estructura de cableado de un edificio
>
> H
>
> En una red en estrella no existe nunca colision si usamos hubs
>
> I
>
> En lasinstalaciones de red se suelen mezclar varias topologías
>
> J
>
> En una red en estrella en el cable que une el terminal con el switch solo pasa información que le atañe al propio terminal
>
> K
>
> En la topología en anillo, existe un nodo especialmente privilegiadoque ocupa la posición central de la red
>
> M
>
> Una red en anillo no presenta problemas de congestión de tráfico
>
> ¿Cuál es el medio de transmisión más utilizado en cada una de las topologías que has contestado en la pregunta 1)?
>
> Topología
>
> Medio detransmisión
>
> En una red con topología en bus, ¿qué ocurre con los extremos? ¿Qué hay que hacer en ellos?
>
> ¿Por qué es importante proteger los cables de datos en una topología en bus/anillo?

> **✍️ Activitat Pràctica 1.4 — AExtra UD3-Mapa de red**
> CFGM SMX. Xarxes Locals.
>
> ### UD 1: Teoria i Arquitectura de Xarxes
>
> AExtra_UD1 – Mapa de xarxa
>
> El mapa de red es la representación gráfica de la topología de la red. Para hacer este mapa, podemos utilizar un plano del edificio o de la sala donde esté instalada la red.
>
> Primero crearemos el mapa de la red que están en nuestro aula, en concreto, el mapa de red físico, el cual especifica el cableado de la red y las disposiciones de los nodos.
>
> Para hacer el mapa de red físico se pueden utilizar programas específicos, como Microsoft Visio (incluido en el paquete Office), DIA, Draw o draw.io.
>
> Realiza el mapa de red físico del aula. Es importante que
>
> Situéis todos los equipos, switches… - Dibujar por donde va el cable conectado - Identificar la IP de cada equipo (se puede averiguar desde la terminal ejecutando la orden
>
> ```python
> ifconfig)
> ```
>
> Enlaces interantes
>
> http://erikacecyte.blogspot.com/ - https://www.cyberprimo.com/

> **✍️ 📋 Exercici / Qüestionari 1.5 — Práctica 1 Conector RJ45**
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> > **✍️ Práctica: Creación de un cable RJ45**
> > Práctica: Creación de un cable RJ45
>
> ### 1. Introducción
>
> En esta práctica vamos a ver cómo crear un cable de Ethernet directo, aunque con los conocimientos aquí vistos, también se podrá crear un cable cruzado.
>
> ### 2. Preparación
>
> Para esta práctica vamos a necesitar: • Cable de red de categoría 5 o superior (recomendable 5e o 6)
>
> • Un par de conectores RJ45
>
> • Una crimpadora.
>
> • Un tester.
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> ### 3. Desarrollo
>
> #### 3.1. Normas
>
> Ya se ha estudiado en clase que los cables de Ethernet llevan en su interior 8 cables tren- zados dos a dos para intentar anular los campos electromagnéticos producidos por cada ca- ble. Además, cada cable lleva un color para poder distinguirlo del resto. Cuando se construye un cable directo, es necesario que ambos extremos tengan los cables ordenados siguiendo el mismo patrón o norma. El orden especificado en cada norma no obe- dece a un criterio arbitrario. La idea es que, al eliminar el trenzado, los cables se interfieran lo menos posible los unos con otros.
>
> A día de hoy existen dos normas: T568A y T568B.
>
> Para construir un cable directo, es necesario utilizar la misma norma en ambos ex- tremos del cable. En cambio, para construir un cable cruzado, es necesario utilizar una norma en un extremo del cable y la otra norma en el extremo opuesto.
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> #### 3.2. Cables directos y cruzados
>
> Los cables directos se han utilizado tradicionalmente para conectar dispositivos que realizan distintas funciones (como un PC a un switch, o un switch a un router). En cambio, los cables cruzados se venían utilizando para conectar dos dispositivos que realizan la misma función (de un PC a otro PC, de un switch a otro switch o de un router a otro router).
>
> Afortunadamente, la mayoría de los dispositivos de red modernos (switches y routers) y algunas tarjetas de red (NIC), llevan ya incorporada la función Auto- MDI/MDIX. Gracias a ella, el puerto detecta qué dispositivo está conectado al otro ex- tremo y decide si debe “cruzar” o no de forma automática los pines del conector (se hace por software, obviamente).
>
> Gracias a esta funcionalidad, el uso de cables cruzados ha caído en desuso utilizán- dose solamente cuando se realiza la conexión entre dispositivos antiguos sin la funcio- nalidad Auto-MDI/MDIX.
>
> #### 3.3. Construcción del cable directo
>
> El primer paso es quitar un trozo de cubierta del cable para dejar los pares al aire. Para quitar la cubierta se pueden utilizar unas simples tijeras o la función pela-cables incluida dentro de la crimpadora. Se suele recomendar quitar entre 3-5 cm de cubierta.
>
> Si utilizamos las tijeras, para no dañar los pares del interior, es mejor simplemente debilitar la cubierta con las tijeras e ir forzando la cubierta hasta que salga
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> Una vez quitada la cubierta, dejamos los pares al aire: El siguiente paso es desenrollar los cables, separarlos y dejarlos rectos estirándolos un poco con los dedos
>
> Lo siguiente es ordenar los cables siguiendo una de las dos normas vistas. En las imá- genes que aquí se muestran, se hace uso de la norma T568B, pero podéis utilizar la norma T568A indistintamente (eso sí, utilizad la misma norma en ambos cables). Vamos a cortar ahora el exceso de cable, pero antes debemos calcular cómo de largos de- ben de quedar los cables.
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> Todos los cables tienen que llegar al fondo del conector. Para ello es necesario que ten- gan una longitud mínima de 11mm (mirad la regla). Por precaución, dejaremos un poco más (unos 14mm). Ahora ya podemos cortar.
>
> Ahora introducimos los cables dentro del conector tal y como se muestra en la foto (con el rabillo hacia abajo y los conectores metálicos hacia arriba). Es importante que cada cable se quede en su carril y mantengan el orden.
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> Es de vital importancia empujar fuerte para que TODOS los cables lleguen hasta el final. Si alguno de los cables no llega hasta el final hay riesgo que, tras el crimpado, el co- nector no “muerda” el cable y por tanto no haya conectividad, con lo que será necesario cortar el conector en este extremo y volver a empezar. Si vemos que no todos llegan al final porque hay un cable más largo que el resto, sacamos todos los cables, igualamos (cortando el cable sobrante) y volvemos introducirlos. También es importante comprobar que la cu- bierta entra un poco en el conector y es presionada por una pequeña muesca de plástico (primera flecha por la izquierda en la figura).
>
> Una vez que todos los cables están en el orden que toca, llegan al fondo y comproba- mos que la cubierta entra a presión, entonces estamos preparados para crimpar. Para ello introducimos el conector en la crimpadora y apretamos fuertemente.
>
> Una vez que ya tenemos el cable crimpado, repetimos el proceso en el otro extremo (misma norma en ambos extremos).
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> Para comprobar el correcto funcionamiento del cable es necesario utilizar un tester. El tester es un aparato que comprueba la conectividad pin a pin en cada uno de los ex- tremos del cable. El funcionamiento es muy simple, conectamos ambos extremos, encen- demos el tester y verificamos que cuando se enciende el pin 1 en un extremo también se en- ciende el pin 1 en el otro. Lo mismo con el pin 2, pin 3, etc. Si se sigue la misma secuencia en ambos extremos, entonces el cable está bien construido.
>
> En caso contrario, algo ha ido mal. Veamos los posibles errores
>
> ### 1. Si se enciende un pin en un extremo y se enciende otro pin distinto en el extremo
>
> opuesto es porque ese cable no ocupa la misma posición en ambos extremos del cable. Solución: Mirar qué extremo está mal, cortarlo y rehacer ese extremo.
>
> ### 2. Si un pin no se enciende, es porque en uno de los dos extremos (o en los dos) el
>
> cable no ha llegado al final y el conector no ha “mordido” el cable. Solución: Tratar de averiguar en qué extremo el cable no llega al final. Hay veces que es muy difícil de ver. En estos casos la única solución es cortar un extremo, reha- cerlo y probar la conectividad en el tester. Si sigue sin encenderse el pin, toca cortar el otro extremo y rehacerlo.
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> #### 3.4. Construir un cable cruzado
>
> El proceso de construcción de un cable cruzado es idéntico al de un cable directo con la salvedad que se utiliza una norma en un extremo y la otra norma en el extremo opuesto. A la hora de comprobar el cable con el tester, dependiendo del modelo que tengamos, la comprobación será más sencilla o más complicada. En cualquier caso, siempre pode- mos comprobar si la secuencia es correcta.
>
> En un cable directo, cuando se enciende el pin 1 también debe encenderse el pin 1 en el otro extremo. Cuando se encienda el pin 2, debe encenderse el pin 2 en el otro extremo. Así sucesivamente. En cambio, cuando el cable es cruzado, la secuencia varía. Basta con que nos fijemos en ambos conectores
>
> Extremo Pin Color Cable Extremo Pin A Blanco-Verde B A Verde B A Blanco-Naranja B A Azul B A Blanco-Azul B A Naranja B A Blanco-Marrón B A Marrón B
>
> EIA/TIA568A EIA/TIA568B Nota: No es necesario que el extremo A sea el de la norma T568A. La secuencia es la misma tanto si el extremo A es el de la norma T568A como si es el de la norma T568B.
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> En el caso de disponer de un multímetro digital, también podríamos comprobar la conti- nuidad pin a pin entre ambos cables siguiendo la tabla anterior.
>
> #### 3.5. Ejemplos de cables mal construidos
>
> Un cable puede superar la prueba del tester y no por ello estar bien construido. Por ejemplo, en la imagen que viene a continuación, el cable puede que sea funcional, pero acabará dejando de serlo en poco tiempo ya que la cubierta no está dentro del conector y por tanto no protege los cables debidamente, pudiendo partirse el cable justo por el área no protegida. Hay que tener en cuenta que los cables de cobre se parten con facilidad se los doblamos varias veces por el mismo punto.
>
> En este otro ejemplo está claro que el cable no va a ser funcional ya al menos un cable no llega al fondo. Es muy importante cortar todos los cables a la misma medida y a una longitud suficiente para que lleguen al fondo y, a su vez, entre la cubierta un trozo dentro del conector.
>
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> El siguiente ejemplo corresponde a un cable bien construido donde la cubierta entra hasta donde debe y los cables llegan

> **✍️ 📋 Exercici / Qüestionari 1.6 — Práctica 2 Roseta**
> CFGM SMX. Xarxes d’Àrea Local UD2 – Montaje de redes
>
> > **✍️ Práctica: Conexión de cable UTP con roseta**
> > Práctica: Conexión de cable UTP con roseta
>
> El cable UTP también se puede conexional a una roseta en un extremo y a un patch panel en el otro, formando así el enlace permanente (permanent link) que no puede superar los 90 metros en el cableado estructurado.
>
> Siguiendo con la norma T568B construye ahora un enlace permanente conexionando el cable UTP por partes. Los primeros pasos son iguales que para conexionar el RJ45 (abrir el cable y separar los pares).
>
> 1.1 Conexión del cable UTP a la roseta hembra En el lateral de la roseta tenéis el código de colores que se debe usar para conectar los ca- bles según usemos una norma u otra. Nosotros seguiremos la norma T568B.
>
> Una vez desplegados los cables pasamos a insertar cada uno en el hueco correspondiente haciendo ligera presión con el dedo y completando la inserción con la herramienta poncha- dora

> **✍️ Activitat Pràctica 1.7 — Packet Tracer 1**
> © 2021 – 2021 Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Packet Tracer - Exploración de Modo Lógico y Físico Objetivos Parte 1: Investigar la Barra de Herramientas Inferior Parte 2: Investigar Dispositivos en un Armario de Cableado Parte 3: Conectar Dispositivos Finales a Dispositivos de Red Parte 4: Instalar un Router de Respaldo Parte 5: Configurar un Nombre de Host Parte 6: Explora el resto de la Red Aspectos básicos/Situación El modelo de red de esta actividad Packet Tracer Physical Mode (PTPM) incorpora muchas de las tecnologías que puede dominar en los cursos de Cisco Networking Academy. Y representa una versión simplificada de la forma en que podría verse una red de pequeña o mediana empresa.
>
> La mayoría de los dispositivos de la sucursal de Seward y del Centro de Datos de Warrenton ya están implementados y configurados. Usted acaba de ser contratado para revisar los dispositivos y redes implementados. No es importante que comprenda todo lo que vea y haga en esta actividad. Siéntase libre de explorar la red por usted mismo. Si desea hacerlo de manera más sistemática, siga estos pasos. Responda las preguntas lo mejor que pueda.
>
> > **⚠️ Nota: Esta actividad se abre y se centra en el modo Fís...**
> > Nota: Esta actividad se abre y se centra en el modo Físico . Muchas de las actividades de Packet Tracer que encuentre en los cursos de Cisco Networking Academy utilizarán el modo Lógico . Puede cambiar entre estos modos en cualquier momento para comparar las diferencias haciendo clic en los botones Lógico (Shift+L) y Físico (Shift+P). Sin embargo, en otras actividades de este curso puede estar bloqueado de un modo u otro.
>
> Instrucciones Parte 1: Investigar la Barra de Herramientas Inferior La barra de herramientas de iconos en la esquina inferior izquierda tiene varias categorías de componentes de red. Debería ver categorías que corresponden a Dispositivos de Red, Dispositivos Finales, y Componentes. La cuarta categoría (con el icono del rayo) es Conexiones y representa los medios de red compatibles con Packet Tracer. Las dos últimas categorías son Miscelánea y Conexión multiusuario.
>
> ¿Cuáles son las subcategorías de Dispositivos de Red? Escriba sus respuestas aquí.
>
> Parte 2: Investigar Dispositivos en un Armario de Cableado
>
> - Si fuiste a explorar, vuelve a modo Físico e Intercity ahora. En la barra azul superior, haga clic en
>
> Físico y, a continuación, utilice los botones Panel de Navegación o Nivel Atrás para desplazarse a Intercity.
>
> - Haga clic en Seward y, a continuación, haga clic en la Sucursal.
> - Haga clic en el Armario de Cableado de la Sucursal. Observe que el armario de cableado tiene un
>
> Rack, un Tablero de Cables, una Mesa y un Estante.
>
> Packet Tracer - Exploración de Modo Lógico y Físico © 2021 – 2021 Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com El Rack contiene dispositivos que se pueden montar en rack. Si amplía el rack (herramienta de zoom o Ctrl+rueda de desplazamiento), puede ver que los dispositivos están atornillados (montados) en el rack. Debajo del dispositivo de distribución de energía, encontrará un router. Los routers conectan redes diferentes.
>
> - Debajo del router hay dos switches. Estos switches proporcionan conexiones por cable para conectarse
>
> a otros dispositivos. Observe que los dispositivos tienen un nombre asignado por el administrador de red. ¿Qué dispositivos utilizan una conexión por cable para conectarse al switch ALS2? Escriba sus respuestas aquí.
>
> - Debajo de los switches del Rack se encuentra un punto de acceso inalámbrico denominado
>
> Access_Point. Los puntos de acceso inalámbricos utilizan una conexión inalámbrica para conectarse a otros dispositivos. Cambie al modo Lógico. ¿Qué dispositivo está conectado a Access_Point? Escriba sus respuestas aquí.
>
> f. Cambie al modo Físico. Deberías estar de vuelta en el Armario de Cableado de la Sucursal. ¿Dónde se encuentra físicamente el dispositivo conectado a Access_Point? Escriba sus respuestas aquí. Parte 3: Conectar Dispositivos Finales a Dispositivos de Red Los dispositivos se pueden conectar de varias maneras. Para la conectividad de red, los dispositivos normalmente se conectan mediante un cable directo de cobre o de forma inalámbrica. Para la conectividad de administración, los dispositivos normalmente se conectan mediante un cable de consola o un cable USB.
>
> > **⚠️ Nota: Packet Tracer calificará el resto de esta activid...**
> > Nota: Packet Tracer calificará el resto de esta actividad. En cualquier momento, puede hacer clic en Comprobar resultados en la parte inferior de la ventana Tareas. A continuación, haga clic en Elementos de evaluación para ver qué elementos aún no ha completado.
>
> - Investigue el Tablero de Cables. Incluye dos cables de Consola, diez cables directos de cobre, cuatro
>
> cables de Fibra, dos cables Coaxiales y dos cables USB. Observe que las representaciones de cable en modo Físico son más representativas de sus homólogos del mundo real. Cambie al modo Lógico. Observe que las representaciones de cable son diferentes en este modo.
>
> - Cambie al modo Físico. Haga clic en un cable directo de cobre del Tablero de Cables.
> - Mueva el ratón sobre los puertos de PC_1 hasta que vea la ventana emergente FastEthernet0. El otro
>
> puerto RS232 es para conectar cables de Consola.
>
> - Con el cable directo de cobre todavía seleccionado, haga clic en el puerto FastEthernet0 para conectar
>
> el cable. Ahora el puerto debe estar resaltado en verde.
>
> - Conecte el otro extremo del cable al switch ALS2 haciendo clic en un puerto Fast Ethernet vacío. El
>
> cable ahora debería colgar entre la PC_1 y el puerto de ALS2. f. Las PCs y los portátiles también se pueden conectar a dispositivos de red mediante un cable de consola o un cable USB. Esta conexión proporciona acceso de administración. Haga clic en un cable de Consola del Tablero de Cables.
>
> - Haga clic en el puerto RS232 en PC_1. Ahora el puerto debe estar resaltado en verde.
> - Pase el ratón sobre el Edge_Router y busque el puerto de Consola. Puede hacer clic con el botón
>
> derecho en > Inspeccionar Frente para ampliar y facilitar la búsqueda del puerto. i. Haga clic en el puerto de consola en Edge_Router para conectar el cable de Consola. El cable ahora debería colgar entre PC_1 y el puerto de Consola en el Edge_Router.
>
> Packet Tracer - Exploración de Modo Lógico y Físico © 2021 – 2021 Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Parte 4: Instalar un Router de Respaldo A los modelos más nuevos de dispositivos de red se puede acceder a través de un puerto USB para la configuración de la administración. Esto es necesario porque los portátiles y los PC más recientes normalmente no incluyen un puerto RS232 para las conexiones de cables de consola.
>
> - Investigue el Estante. Esto incluye un inventario de dispositivos de la Sucursal de Seward que no están
>
> instalados actualmente.
>
> - Haga clic y arrastre Backup_Router a un lugar vacío en el Rack.
> - Algunos dispositivos no se encienden automáticamente cuando se instalan en el Rack. Haga clic en
>
> Backup_Router > Inspeccionar parte trasera. Busque el botón de encendido y encienda el router.
>
> - En el Tablero de Cables, elija un cable USB. Vuelva a la vista trasera de Backup_Router y encuentre el
>
> puerto deconsola USB en el extremo izquierdo. Haga clic en el puerto para conectar el cable USB. Ahora el puerto debe estar resaltado en verde.
>
> - Conecte el otro extremo del cable USB a cualquiera de los puertos USB de la Laptop_1. El cable no
>
> colgará como lo hicieron los cables para las conexiones a PC_1. Parte 5: Configuración de un Nombre de Host Los administradores de red suelen asignar un nombre a los dispositivos de red. Para hacer esto, utilizará la conexión de consola al Backup_Router.
>
> - Haga clic enLaptop_1 > pestaña deDesktop > Terminal.
> - La configuración de la Terminal ya está definida con la configuración de puerto necesaria. Haga clic en
>
> Aceptar.
>
> - Ahora está en la línea de comandos para Backup_Router y debería ver lo siguiente.
>
> <output omitted> cisco ISR4331/K9 (1RU) processor with 1795999K/6147K bytes of memory. Processor board ID FLM232010G0 3 Gigabit Ethernet interfaces 2 Serial interfaces 32768K bytes of non-volatile configuration memory. 4194304K bytes of physical memory. 3207167K bytes of flash memory at bootflash:.
>
> 0K bytes of WebUI ODM Files at webui:.
>
> System Configuration Dialog
>
> Would you like to enter the initial configuration dialog? [yes/no]: no
>
> - Responda no a la pregunta y luego presione ENTRAR para obtener el símbolo del sistema Router.
>
> Press RETURN to get started!
>
> <ENTER>
>
> ```python
> Router>
> ```
>
> - Introduzca los siguientes comandos para nombrar al router Edge_Router_Backup.
>
> ```python
> Router> enable
> ```
>
> Packet Tracer - Exploración de Modo Lógico y Físico © 2021 – 2021 Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com
>
> ```python
> Router#configure terminal
> ```
>
> Enter configuration commands, one per line. End with CNTL/Z. Router (config) # hostname Edge_Router_Backup Edge_Router_Backup (config) # end Edge_Router_Backup# Observe que el nombre de host cambió de Router a Edge_Router_Backup. f. Cierre la ventana de Laptop_1 y vuelva al Armario de Cableado de la Sucursal.
>
> - Observe que el nombre para mostrar de Backup_Router no ha cambiado. Haga clic en Backup_Router
>
> > pestaña Config. En Configuración global, observe que Packet Tracer mantiene dos nombres para el dispositivo: un nombre para mostrar y un nombre de host. Parte 6: Explora el resto de la Red Tómese un tiempo para explorar el resto de la red. Familiarícese con las representaciones de red en los modos Lógico y Físico. En el modo Físico, vaya a otras áreas, como el Centro de Datos de Wellington y el hogar de Teleworker. Las tecnologías utilizadas en estos lugares se analizan con mayor detalle en los cursos de Cisco Networking Academy. Por ahora, vea lo que puede descubrir por su cuenta. No se preocupe por romper nada. Siempre puede cerrar Packet Tracer y abrir una copia nueva para empezar a explorar de nuevo.
>
> Escriba sus respuestas aquí. Fin del documento

> **✍️ Activitat Pràctica 1.8 — Packet Tracer 2**
>  2013 - aa Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Packet Tracer: Representación de la red
>
> Objetivos El modelo de red en esta actividad incluye muchas de las tecnologías que llegará a dominar en sus estudios en CCNA y representa una versión simplificada de la forma en que podría verse una red de pequeña o mediana empresa. Siéntase libre de explorar la red por usted mismo. Cuando esté listo, siga estos pasos y responda las preguntas.
>
> > **⚠️ Nota: No es importante que comprenda todo lo que vea y ...**
> > Nota: No es importante que comprenda todo lo que vea y haga en esta actividad. Siéntase libre de explorar la red por usted mismo. Si desea hacerlo de manera más sistemática, siga estos pasos. Responda las preguntas lo mejor que pueda. Instrucciones Paso 1: Identifique los componentes comunes de una red según se los representa en Packet Tracer.
>
> La barra de herramientas de íconos en la esquina inferior izquierda tiene diferentes categorías de componentes de red. Debería ver las categorías que corresponden a los dispositivos intermediarios, los terminales y los medios. La categoría Conexiones (su ícono es un rayo) representa los medios de red que admite Packet Tracer. También hay una categoría llamada Terminales y dos categorías específicas de Packet Tracer: Dispositivos personalizados y Conexión multiusuario.
>
> Preguntas: Enumere las categorías de los dispositivos intermediarios. Escriba su
>
> s respuestas aquí. Sin ingresar en la nube de Internet o de intranet, ¿cuántos íconos de la topología representan dispositivos de terminales (solo una conexión conduce a ellos)? Escriba sus respuestas aquí.
>
> Sin contar las dos nubes, ¿cuántos íconos de la topología representan dispositivos intermediarios (varias conexiones conducen a ellos)? Escriba sus respuestas aquí.
>
> ¿Cuántos terminales no son PC de escritorio? Escriba sus respuestas aquí.
>
> ¿Cuántos tipos diferentes de conexiones de medios se utilizan en esta topología de red? Escriba sus respuestas aquí.
>
> Packet Tracer: Representación de la red  2013 - aa Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Paso 2: Explique la finalidad de los dispositivos. Preguntas
>
> - En Packet Tracer, solo el dispositivo Server-PT puede funcionar como servidor. Las PC de escritorio o
>
> portátiles no pueden funcionar como servidores. Según lo que estudió hasta ahora, explique el modelo cliente-servidor. Escriba s
>
> us respuestas aquí.
>
> - Enumere, al menos, dos funciones de los dispositivos intermediarios.
>
> E
>
> scriba sus respuestas aquí.
>
> - Enumere, al menos, dos criterios para elegir un tipo de medio de red.
>
> Escriba sus respuestas aquí.
>
> Paso 3: Compare las redes LAN y WAN. Preguntas
>
> - Explique la diferencia entre una LAN y una WAN, y dé ejemplos de cada una.
>
> Escriba sus respuestas
>
> aquí.
>
> - ¿Cuántas WAN ve en la red de Packet Tracer?
>
> Escriba sus respuestas aquí.
>
> - ¿Cuántas LAN ve?
>
> Escriba sus respuestas aquí.
>
> - En esta red de Packet Tracer, Internet está simplificada en gran medida y no representa ni la estructura
>
> ni la forma de Internet propiamente dicha. Describa Internet brevemente. Escriba sus respuestas aquí.
>
> Packet Tracer: Representación de la red  2013 - aa Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com
>
> - ¿Cuáles son algunas de las formas más comunes que utiliza un usuario doméstico para conectarse a
>
> Internet? Escriba sus respuestas
>
> aquí. f. ¿Cuáles son algunos de los métodos más comunes que utilizan las empresas para conectarse a Internet en su área? Escriba sus r espuestas aquí. Pregunta de desafío Ahora que tuvo la oportunidad de explorar la red representada en esta actividad de Packet Tracer, es posible que haya adquirido algunas habilidades que quiera poner en práctica o tal vez desee tener la oportunidad de analizar esta red en mayor detalle. Teniendo en cuenta que la mayor parte de lo que ve y experimenta en Packet Tracer supera su nivel de habilidad en este momento, los siguientes son algunos desafíos que tal vez quiera probar. No se preocupe si no puede completarlos todos. Muy pronto se convertirá en un usuario y diseñador de redes experto en Packet Tracer.
>
> • Agregue un dispositivo final a la topología y conéctelo a una de las LAN con una conexión de medios. ¿Qué otra cosa necesita este dispositivo para enviar datos a otros usuarios finales? ¿Puede proporcionar la información? ¿Hay alguna manera de verificar que conectó correctamente el dispositivo?
>
> • Agregue un nuevo dispositivo intermediario a una de las redes y conéctelo a uno de las LAN o WAN con una conexión de medios. ¿Qué otra cosa necesita este dispositivo para funcionar como intermediario de otros dispositivos en la red? • Abra una nueva instancia de Packet Tracer. Cree una nueva red con, al menos, dos redes LAN conectadas mediante una WAN. Conecte todos los dispositivos. Investigue la actividad de Packet Tracer original para ver qué más necesita hacer para que la nueva red esté en condiciones de funcionamiento.
>
> Registre sus comentarios y guarde el archivo de Packet Tracer. Tal vez desee volver a acceder a la red cuando domine algunas habilidades más. Fin del documento

> **✍️ Activitat Pràctica 1.9 — Packet Tracer 3**
>  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Packet Tracer - Navega por el IOS
>
> Objetivos Parte 1: Establecimiento de conexiones básicas, acceso a la CLI y exploración de ayuda Parte 2: Exploración de los modos EXEC Parte 3: Configuración del reloj Antecedentes/Escenario En esta actividad, practicará las habilidades necesarias para navegar dentro de Cisco IOS, como los distintos modos de acceso de usuario, diversos modos de configuración y comandos comunes que utiliza habitualmente. También practicará el acceso a la ayuda contextual mediante la configuración del comando clock.
>
> Instrucciones Parte 1: Establecimiento de conexiones básicas, acceso a la CLI y exploración de ayuda Paso 1: Conecte la PC1 a S1 mediante un cable de consola. • Haga clic en el ícono Connections, similar a un rayo, en la esquina inferior izquierda de la ventana de Packet Tracer.
>
> • Haga clic en el cable de consola celeste para seleccionarlo. El puntero del mouse cambia a lo que parece ser un conector con un cable que cuelga de él. • Haga clic en PC1. Aparece una ventana que muestra una opción para una conexión RS-232. Conecte el cable al puerto RS-232.
>
> • Arrastre el otro extremo de la conexión de consola al switch S1 y haga clic en el switch para acceder a la lista de conexiones. • Seleccione el puerto Console para completar la conexión. Paso 2: Establezca una sesión de terminal con el S1. • Haga clic en PC1 y luego en la pestaña Desktop.
>
> • Haga clic en el ícono de la aplicación Terminal. Verifique que los parámetros predeterminados de la configuración de puertos sean correctos. Pregunta: ¿Cuál es el parámetro de bits por segundo? Escriba sus respuestas aquí.
>
> • Haga clic en OK. • La pantalla que aparece puede mostrar varios mensajes. En alguna parte de la pantalla tiene que haber un mensaje que diga Press RETURN to get started! Presione ENTER. Pregunta: ¿Cuál es la petición de entrada que aparece en la pantalla? Escriba sus respuestas aquí.
>
> Packet Tracer - Navega por el IOS  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com
>
> Paso 3: Examine la ayuda de IOS. El IOS puede proporcionar ayuda para los comandos según el nivel al que se accede. La petición de entrada que se muestra actualmente se denomina Modo EXEC del usuario y el dispositivo está esperando un comando. La forma más básica de solicitar ayuda es escribir un signo de interrogación (?) en la petición de entrada para mostrar una lista de comandos.
>
> Abra la ventana de configuración S1> ? Pregunta: ¿Qué comando comienza con la letra “C”? Escriba sus respuestas aquí.
>
> En la petición de entrada, escriba t, seguido de un signo de interrogación (?). S1> t? Pregunta: ¿Qué comandos se muestran? Escriba sus respuestas aquí.
>
> En la petición de entrada, escriba te, seguido de un signo de interrogación (?). S1> te? Pregunta: ¿Qué comandos se muestran?
>
> Este tipo de ayuda se conoce como ayuda sensible al contexto. Proporciona más información a medida que se expanden los comandos. Parte 2: Explore de los modos EXEC En la Parte 2 de esta actividad, cambiará al modo EXEC privilegiado y emitirá comandos adicionales Paso 1: Ingrese al modo EXEC con privilegios.
>
> En la petición de entrada, escriba el signo de interrogación (?). S1> ? Pregunta: ¿Qué información se muestra para el comando enable?
>
> Type en y presione la tecla Tab. S1> en<Tab> Pregunta: ¿Qué se muestra después de presionar la tecla Tabulación? Escriba sus respuestas aq uí.
>
> Esto se llama finalización de comando (o finalización de tabulación). Cuando se escribe parte de un comando, la tecla Tab se puede utilizar para completar el comando parcial. Si los caracteres que se
>
> Packet Tracer - Navega por el IOS  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com escriben son suficientes para formar un comando único, como en el caso del comando enable, se muestra la parte restante. Pregunta: ¿Qué ocurriría si escribiera te<Tab> en la petición de entrada? Escriba sus respuestas aquí.
>
> Introduzca el comando enable y presione ENTER. Pregunta: ¿Cómo cambia la petición de entrada?
>
> Escriba sus respuestas aquí.
>
> Cuando se le solicite, escriba el signo de interrogación (?). S1# ? Antes había un comando que comenzaba con la letra “C” en el modo EXEC del usuario. Pregunta: ¿Cuántos comandos se muestran ahora que está activo el modo EXEC privilegiado? (Ayuda: puede escribir c? para que aparezcan solo los comandos que comienzan con la letra “C”)
>
> Escriba sus respuestas aquí.
>
> Paso 2: Ingrese al modo de configuración global Cuando se encuentra en el modo EXEC privilegiado, uno de los comandos que comienza con la letra “C” es configure. Escribe el comando completo o una parte suficiente como para que sea único. Presione la tecla <Tabulación> para emitir el comando y presione la tecla ENTER.
>
> S1# configure Pregunta: ¿Cuál es el mensaje que se muestra?
>
> Escriba sus respuestas aquí.
>
> Presione Enter para aceptar el parámetro predeterminado que se encuentra entre corchetes [terminal]. Pregunta: ¿Cómo cambia la petición de entrada? Escriba sus respuestas aquí.
>
> Esto se denomina modo de configuración global. Este modo se analizará en más detalle en las próximas actividades y prácticas de laboratorio. Por el momento, escriba end, exit o Ctrl-Z para volver al modo EXEC privilegiado. S1(config)# exit S1#
>
> Packet Tracer - Navega por el IOS  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Parte 3: Configuración del reloj Paso 3: Utilice el comando clock. Utilice el comando clock para explorar en más detalle la ayuda y la sintaxis de comandos. Escriba show clock en la solicitud privilegiada de EXEC. S1# show clock Pregunta: ¿Qué información aparece en pantalla? ¿Cuál es el año que se muestra?
>
> Escriba sus respuestas aquí.
>
> Use la ayuda contextual y el comando clock para configurar la hora del interruptor a la hora actual. Introduzca el comando clock y presione la tecla Intro. S1# clock<ENTER> Pregunta ¿Qué información aparece en pantalla?
>
> Escriba sus respuestas aquí.
>
> El mensaje “% Incomplete command” se regresa a IOS. Esto significa que el comando clock necesita más parámetros. Cuando se necesita más información, se puede proporcionar ayuda escribiendo un espacio después del comando y el signo de interrogación (?). S1# clock ?
>
> Pregunta: ¿Qué información aparece en pantalla? Escriba sus respuestas aquí.
>
> Configure el reloj con el comando clock set. Proceda por el comando un paso a la vez. S1# clock set ? Preguntas: ¿Qué información se solicita? Escriba sus respuestas aquí.
>
> ¿Qué información se habría mostrado si solo se hubiera ingresado el comando clock set y no se hubiera solicitado ayuda con el signo de interrogación? Escriba sus respuestas aquí.
>
> En función de la información solicitada por la emisión del comando clock set, introduzca las 3:00 p.m. como hora utilizando el formato de 24 horas, esto será 15:00:00. Revise si se necesitan otros parámetros. S1# clock set 15:00:00 ?
>
> Packet Tracer - Navega por el IOS  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com
>
> El resultado devuelve la solicitud de más información: <1-31> Day of the month MONTH Month of the year
>
> Intente establecer la fecha al 31/01/2035 con el formato solicitado. Puede ser necesario solicitar ayuda adicional utilizando ayuda sensible al contexto para completar el proceso. Cuando termine, emita el comando show clock para mostrar la configuración del reloj. El resultado del comando debe mostrar lo siguiente
>
> S1# show clock *15:0:4.869 UTC Tue Jan 31 2035 Si no pudo lograrlo, pruebe con el siguiente comando para obtener el resultado anterior: S1# clock set 15:00:00 31 Jan 2035 Paso 2: Explore los mensajes adicionales del comando. El IOS proporciona diversos resultados para los comandos incorrectos o incompletos. Continúe utilizando el comando clock para explorar los mensajes adicionales con los que se puede encontrar mientras aprende a utilizar el IOS.
>
> Emita los siguientes comandos y grabe los mensajes: <tab>S1# cl Preguntas: ¿Qué información se devolvió? Escriba sus respuestas aquí.
>
> S1# clock Pregunta: ¿Qué información se devolvió? Escriba sus respuestas aquí.
>
> S1# clock set 25:00:00 Pregunta: ¿Qué información se devolvió? Escriba sus respuestas aquí.
>
> S1# clock set 15:00:00 32 Pregunta: ¿Qué información se devolvió? Escriba sus respuestas aquí.
>
> Cierre la ventana de configuración Fin del documento

> **✍️ Activitat Pràctica 1.10 — Packet Tracer 4**
>  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Packet Tracer - Configure ajustes iniciales del interruptor . Objetivos Parte 1: Verifique la configuración predeterminada del switch Parte 2: Establezca una configuración básica del switch Parte 3: Configure un aviso de MOTD Parte 4: Guarde los archivos de configuración en la NVRAM Parte 5: Configure el S2 Antecedentes/Escenario En esta actividad, realizará tareas básicas de configuración del conmutador. Protegerá el acceso a la interfaz de línea de comandos (CLI) y a los puertos de la consola mediante contraseñas cifradas y contraseñas de texto no cifrado. También aprenderá cómo configurar mensajes para los usuarios que inician sesión en el switch. Estos banners de mensajes también se utilizan para advertir a los usuarios no autorizados que el acceso está prohibido.
>
> > **⚠️ Nota: En Packet Tracer, el switch Catalyst 2960 utiliza...**
> > Nota: En Packet Tracer, el switch Catalyst 2960 utiliza la versión 12.2 de IOS de forma predeterminada. Si es necesario, la versión IOS se puede actualizar desde un servidor de archivos en la topología Packet Tracer. El switch puede configurarse para arrancar a IOS versión 15.0, si esa versión es necesaria.
>
> Instrucciones Parte 1: Verifique la configuración predeterminada del switch Paso 1: Ingrese al modo EXEC privilegiado. Puede acceder a todos los comandos del switch en el modo EXEC privilegiado. Sin embargo, debido a que muchos de los comandos privilegiados configuran parámetros operativos, el acceso privilegiado se debe proteger con una contraseña para evitar el uso no autorizado.
>
> El conjunto de comandos EXEC privilegiado incluye los comandos disponibles en el modo EXEC del usuario, muchos comandos adicionales y el comando configure a través del cual se obtiene acceso a los modos de configuración.
>
> - Haga clic en S1 y luego en la pestaña CLI. Presione Enter.
> - Ingrese al modo EXEC privilegiado introduciendo el comando enable
>
> Abra la ventana de configuración para S1
>
> ```python
> Switch> enable
> Switch#
> ```
>
> Observe que la solicitud cambió para reflejar el modo EXEC privilegiado. Paso 2: Examine la configuración actual del switch. Ingrese el comando show running-config.
>
> ```python
> Switch# show running-config
> ```
>
> Responda las siguientes preguntas
>
> Packet Tracer - Configure ajustes iniciales del interruptor  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com ¿Cuántas interfaces Fast Ethernet tiene el switch? Escriba sus respuestas aquí.
>
> ¿Cuántas interfaces Gigabit Ethernet tiene el switch? Escriba sus respuestas aquí.
>
> ¿Cuál es el rango de valores que se muestra para las líneas vty? Escriba sus respuestas aquí.
>
> ¿Qué comando muestra el contenido actual de la memoria de acceso aleatorio no volátil (NVRAM)? Escriba sus respuestas aquí.
>
> ¿Por qué el conmutador responde con "startup-config no está presente"?
>
> Escriba sus respuestas aquí. Parte 2: Cree una configuración básica del switch Paso 1: Asigne un nombre a un switch. Para configurar los parámetros de un switch, quizá deba pasar por diversos modos de configuración. Observe cómo cambia la petición de entrada mientras navega por el switch.
>
> ```python
> Switch# configure terminal
> Switch(config)# hostname S1
> ```
>
> S1(config)# exit S1# Paso 2: Proporcione acceso seguro a la línea de consola. Para proporcionar un acceso seguro a la línea de la consola, acceda al modo config-line y establezca la contraseña de consola en letmein. S1# configure terminal Introduzca los comandos de configuración, uno por línea. End with CNTL/Z.
>
> S1(config)# line console 0 S1(config-line)# password letmein S1(config-line)# login S1(config-line)# exit S1(config)# exit %SYS-5-CONFIG_I: Configured from console by console S1# Pregunta: ¿Por qué se requiere el comando login? Escriba sus respuestas aquí.
>
> Packet Tracer - Configure ajustes iniciales del interruptor  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Paso 3: Verifique que el acceso a la consola sea seguro. Salga del modo privilegiado para verificar que la contraseña del puerto de consola esté vigente. S1# exit Switch con0 is now available Press RETURN to get started.
>
> Verificación de acceso del usuario Contraseña: S1> Nota:Si el switch no le solicitó una contraseña, no configuró el parámetrologin en el Paso 2. Paso 4: Proporcione un acceso seguro al modo privilegiado. Establezca la contraseña de enable en c1$c0. Esta contraseña protege el acceso al modo privilegiado.
>
> > **⚠️ Nota: El 0 en c1$c0 es un cero, no una O mayúscula. Est...**
> > Nota: El 0 en c1$c0 es un cero, no una O mayúscula. Esta contraseña no se calificará como correcta hasta después de que la cifre en el Paso 8. S1> enable S1# configure terminal S1(config)# enable password c1$c0 S1(config)# exit %SYS-5-CONFIG_I: Configured from console by console S1# Paso 5: Verifique que el acceso al modo privilegiado sea seguro.
>
> - Introduzca el comando exit nuevamente para cerrar la sesión del switch.
> - Presione <Enter>; a continuación, se le pedirá que introduzca una contraseña
>
> Verificación de acceso del usuario Password
>
> - La primera contraseña es la contraseña de consola que configuró para line con 0. Introduzca esta
>
> contraseña para volver al modo EXEC del usuario.
>
> - Introduzca el comando para acceder al modo privilegiado.
> - Introduzca la segunda contraseña que configuró para proteger el modo EXEC privilegiado.
>
> f. Verifique su configuración examinando el contenido del archivo de configuración en ejecución: S1# show running-config Tenga en cuenta que la consola y las contraseñas de activación están en texto plano. Esto podría suponer un riesgo para la seguridad si alguien está mirando por encima de su hombro u obtiene acceso a los archivos de configuración almacenados en una ubicación de copia de seguridad.
>
> Paso 6: Configure una contraseña encriptada para proporcionar un acceso seguro al modo privilegiado. La contraseña de enable se debe reemplazar por una nueva contraseña secreta encriptada mediante el comando enable secret. Configure la contraseña de enable secret como itsasecret.
>
> S1# config t S1(config)# enable secret itsasecret S1(config)# exit S1#
>
> Packet Tracer - Configure ajustes iniciales del interruptor  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Nota: La contraseña deenable secret sobrescribe la contraseña de enable password. Si ambos están configurados en el conmutador, debe ingresar la contraseña enable secret para ingresar al modo EXEC privilegiado. Paso 7: Verifique si la contraseña de enable secret se agregó al archivo de configuración.
>
> Introduzca el comando show running-config nuevamente para verificar si la nueva contraseña de enable secret está configurada. Nota: Puede abreviar show running-config como S1# show run Preguntas: ¿Qué se muestra como contraseña de enable secret? Escriba sus respuestas aquí.
>
> ¿Por qué la contraseña de enable secret se ve diferente de lo que se configuró?
>
> Paso 8: Encripte las contraseñas de consola y de enable. Como notó en el Paso 7, la contraseña enable secretestaba encriptada, pero las contraseñasenable y console todavía estaban en texto plano. Ahora encriptaremos estas contraseñas de texto no cifrado con el comando service password-encryption.
>
> S1# config t S1(config)# service password-encryption S1(config)# exit Pregunta: Si configura más contraseñas en el switch, ¿se mostrarán como texto no cifrado o en forma cifrada en el archivo de configuración? Explique. Escriba sus r espuestas aquí.
>
> Parte 3: Configure un aviso de MOTD Paso 1: Configure un aviso de mensaje del día (MOTD). El conjunto de comandos de Cisco IOS incluye una característica que permite configurar los mensajes que cualquier persona puede ver cuando inicia sesión en el switch. Estos mensajes se denominan “mensajes del día” o “avisos de MOTD”. Coloque el texto del mensaje en citas o utilizando un delimitador diferente a cualquier carácter que aparece en la cadena de MOTD.
>
> S1# config t S1(config)# banner motd "This is a secure system. Authorized Access Only! S1(config)# exit %SYS-5-CONFIG_I: Configured from console by console S1# Preguntas: ¿Cuándo se muestra este aviso? Escriba sus respuestas aquí.
>
> Packet Tracer - Configure ajustes iniciales del interruptor  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com
>
> ¿Por qué todos los switches deben tener un aviso de MOTD? Escriba sus respuestas aquí.
>
> Parte 4: Guarde y verifique archivos de configuración en NVRAM Paso 1: Verifique que la configuración sea precisa mediante el comando show run. Guarde el archivo de configuración. Usted ha completado la configuración básica del switch. Ahora haga una copia de seguridad del archivo de configuración en ejecución a NVRAM para garantizar que los cambios que se han realizado no se pierdan si el sistema se reinicia o se apaga.
>
> S1# copy running-config startup-config Destination filename [startup-config]?[Enter] Building configuration... [OK] Cierre la ventana de configuración para S1 Preguntas: ¿Cuál es la versión abreviada más corta del comando copy running-config startup-config? Escriba sus respuestas aquí.
>
> Examine el archivo de configuración de inicio. ¿Qué comando muestra el contenido de la NVRAM? Escriba sus respuestas aquí.
>
> ¿Todos los cambios realizados están grabados en el archivo? Escriba sus respuestas aquí.
>
> Parte 5: Configurar S2 Ha completado la configuración en S1. Ahora configurará el S2. Si no recuerda los comandos, consulte las partes 1 a 4 para obtener ayuda. Configure el S2 con los siguientes parámetros: Abra la ventana de configuración para S2
>
> - Device name: S2
> - Proteja el acceso a la consola con la contraseña letmein.
> - Configure enable password comoc1$c0 y una contraseña enable secret como itsasecret.
> - Configure un mensaje apropiado para aquellos que inician sesión en el switch.
> - Encripte todas las contraseñas de texto no cifrado.
>
> f. Asegúrese de que la configuración sea correcta.
>
> - Guarde el archivo de configuración para evitar perderlo si el switch se apaga.
> - Cierre la ventana de configuración para S2
>
> Fin del documento

> **✍️ Activitat Pràctica 1.11 — Packet Tracer 5**
>  2013 - aa Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Packet Tracer: Implementación de conectividad básica
>
> Tabla de asignación de direcciones Dispositivo Interfaz Dirección IP Máscara de subred S1 VLAN 1 192.168.1.253 255.255.255.0 S2 VLAN 1 192.168.1.254 255.255.255.0 PC1 NIC 192.168.1.1 255.255.255.0 PC2 NIC 192.168.1.2 255.255.255.0 Objetivos Parte 1: Realizar una configuración básica en S1 y S2 Paso 2: Configurar las PC Parte 3: Configurar la interfaz de administración de switches Aspectos básicos En esta actividad, primero creará una configuración básica de conmutador. A continuación, implementará conectividad básica mediante la configuración de la asignación de direcciones IP en switches y PC. Cuando se complete la configuración de direccionamiento IP, usará varios comandos show para verificar la configuración y usará el comando pingpara verificar la conectividad básica entre dispositivos.
>
> Instrucciones Parte 1: Realizar una configuración básica en el S1 y el S2 Complete los siguientes pasos en el S1 y el S2. Paso 1: Configure un nombre de host en el S1.
>
> - Haga clic en S1 y luego en la ficha CLI.
> - Introduzca el comando correcto para configurar el nombre de host S1.
>
> Paso 2: Configure la consola y las contraseñas cifradas de modo EXEC privilegiado.
>
> - Use cisco como la contraseña de la consola.
> - Use class para la contraseña del modo EXEC privilegiado.
>
> Paso 3: Verifique la configuración de contraseñas para el S1. Pregunta: ¿Cómo puede verificar que ambas contraseñas se hayan configurado correctamente? Escriba sus respuestas aquí.
>
> Packet Tracer: Implementación de conectividad básica  2013 - aa Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Paso 4: Configure un aviso de MOTD. Utilice un texto de aviso adecuado para advertir contra el acceso no autorizado. El siguiente texto es un ejemplo: Acceso autorizado únicamente. Los infractores se procesarán en la medida en que lo permita la ley. Paso 5: Guarde el archivo de configuración en la NVRAM.
>
> Pregunta: ¿Qué comando emite para realizar este paso? Escriba sus respuestas aquí.
>
> Paso 6: Repita los pasos 1 a 5 para el S2. Parte 2: Configurar las PC Configure la PC1 y la PC2 con direcciones IP. Paso 1: Configure ambas PC con direcciones IP.
>
> - Haga clic en PC1 y luego en la ficha Escritorio.
> - Haga clic en Configuración de IP. En la tabla de direccionamiento anterior, puede ver que la dirección IP
>
> para la PC1 es 192.168.1.1 y la máscara de subred es 255.255.255.0. Introduzca esta información para la PC1 en la ventana Configuración de IP.
>
> - Repita los pasos 1a y 1b para la PC2.
>
> Paso 2: Pruebe la conectividad a los switches.
>
> - Haga clic en PC1. Cierre la ventana Configuración de IP si todavía está abierta. En la ficha Escritorio,
>
> haga clic en Símbolo del sistema.
>
> - Escriba el comando ping y la dirección IP para S1 y presione Enter.
>
> Packet Tracer PC Línea de comandos 1.0 PC> ping 192.168.1.253 Pregunta: ¿Tuvo éxito? Explique. Escriba sus respuestas aquí.
>
> Parte 3: Configurar la interfaz de administración de switches Configure el S1 y el S2 con una dirección IP. Paso 1: Configure el S1 con una dirección IP. Los switches pueden usarse como dispositivos plug-and-play. Esto significa que no necesitan configurarse para que funcionen. Los switches reenvían información desde un puerto hacia otro sobre la base de direcciones de control de acceso al medio (MAC).
>
> Pregunta: Si este es el caso, ¿por qué lo configuraríamos con una dirección IP? Escriba sus respuestas aquí.
>
> Packet Tracer: Implementación de conectividad básica  2013 - aa Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Use los siguientes comandos para configurar el S1 con una dirección IP. S1# configure terminal Enter configuration commands, one per line. Finalice con CNTL/Z. S1(config)# interface vlan 1 S1(config-if)# ip address 192.168.1.253 255.255.255.0 S1(config-if)# no shutdown %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up S1(config-if)# S1(config-if)# exit S1# Pregunta
>
> ¿Por qué debe introducir el comando no shutdown? Escriba sus respuestas aquí.
>
> Paso 2: Configure el S2 con una dirección IP. Use la información de la tabla de direccionamiento para configurar el S2 con una dirección IP. Paso 3: Verifique la configuración de direcciones IP en el S1 y el S2. Use el comando show ip interface brief para ver la dirección IP y el estado de todos los puertos y las interfaces del switch. También puede utilizar el comando show running-config.
>
> Paso 4: Guarde la configuración para el S1 y el S2 en la NVRAM. Pregunta: ¿Qué comando se utiliza para guardar en la NVRAM el archivo de configuración que se encuentra en la RAM?
>
> Escriba sus respuestas aquí. Paso 5: Verifique la conectividad de la red. Puede verificarse la conectividad de la red mediante el comando ping. Es muy importante que haya conectividad en toda la red. Se deben tomar medidas correctivas si se produce una falla. Desde la PC1 y la PC2, haga ping al S1 y S2.
>
> - Haga clic en PC1 y luego en la ficha Escritorio.
> - Haga clic en Símbolo del sistema.
> - Haga ping a la dirección IP de la PC2.
> - Haga ping a la dirección IP del S1.
> - Haga ping a la dirección IP del S2.
>
> > **⚠️ Nota: You can also use the ping en la CLI del switch y ...**
> > Nota: You can also use the ping en la CLI del switch y en la PC2. Todos los ping deben tener éxito. Si el resultado del primer ping es 80%, inténtelo otra vez. Ahora debería ser 100%. Más adelante, aprenderá por qué es posible que un ping falle la primera vez. Si no puede hacer
>
> ```python
> ping a ninguno de los dispositivos, vuelva a revisar la configuración para detectar errores.
> ```
>
> Fin del documento

> **✍️ Activitat Pràctica 1.12 — Packet Tracer 6**
>  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com Packet Tracer — Configuración básica del switch y del dispositivo final
>
> Tabla de asignación de direcciones Dispositivo Interfaz Dirección IP Máscara de subred [[S1Name]] VLAN 1 [[S1Add]] 255.255.255.0 [[S2Name]] VLAN 1 [[S2Add]] 255.255.255.0 [[PC1Name]] NIC [[PC1Add]] 255.255.255.0 [[PC2Name]] NIC [[PC2Add]] 255.255.255.0 Objetivos • Configure los nombres de host y las direcciones IP en dos switches con sistema operativo Internetwork (IOS) de Cisco mediante la interfaz de línea de comandos (CLI).
>
> • Utilice comandos de Cisco IOS para especificar o limitar el acceso a las configuraciones de dispositivos. • Utilice comandos de IOS para guardar la configuración en ejecución. • Configure dos dispositivos host con direcciones IP. • Verifique la conectividad entre dos terminales PC.
>
> Escenario Como técnico de LAN contratado recientemente, el administrador de red le solicitó que demuestre su habilidad para configurar una LAN pequeña. Sus tareas incluyen la configuración de parámetros iniciales en dos switches mediante Cisco IOS y la configuración de parámetros de dirección IP en dispositivos host para proporcionar conectividad completa. Debe utilizar dos switches y dos hosts/PC en una red conectada por cable y con alimentación.
>
> Instrucciones Configure los dispositivos para que cumplan los requisitos que se indican a continuación. Requisitos • Utilice una conexión de consola para acceder a cada switch. • Nombre los switches [[S1Name]] y [[S2Name]]. • Utilice la contraseña [[LinePW]] para todas las líneas.
>
> • Utilice la contraseña secreta [[SecretPW]]. • Encripte todas las contraseñas de texto no cifrado. • Configure un aviso apropiado para el mensaje del día (MOTD). • Configure el direccionamiento para todos los dispositivos de acuerdo con la tabla de direccionamiento. • Guarde las configuraciones.
>
> Packet Tracer — Configuración básica del switch y del dispositivo final  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com • Verifique la conectividad entre todos los dispositivos. Nota: Hag clic en Check Results para ver su progreso. Haga clic en Reset Activity para generar un nuevo conjunto de requisitos. Si hace clic en esto antes de completar la actividad, se perderán todas las configuraciones.
>
> ID: [[indexNames]][[indexPWs]][[indexAdds]][[indexTopos]] Fin del documento
>
> Dispositivo Interfaz Dirección Máscara de subred
>
> Dispositivo Interfaz Dirección Máscara de subred
>
> Dispositivo Interfaz Dirección Máscara de subred
>
> Packet Tracer — Configuración básica del switch y del dispositivo final  Cisco y/o sus filiales. Todos los derechos reservados. Información pública de Cisco
>
> www.netacad.com
