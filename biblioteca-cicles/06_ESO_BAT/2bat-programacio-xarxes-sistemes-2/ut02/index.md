---
layout: default
title: "UD2 — Xarxes Locals · Temari Complet"
course_root: ".."
badge: "2n Batxillerat · UD2 — Xarxes Locals"
prev_url: "../ut01/ut0110.html"
prev_label: "⬅️ 1.10 Ficheros"
next_url: "../ut02/ut0201.html"
next_label: "2.1 Introducción a las redes locales ➡️"
---

# 📘 UD2 — Xarxes Locals (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 Introducción a las redes locales**](./ut0201.md)
- [**2.2 Mapa físico y lógico**](./ut0202.md)
- [**2.3 Arquitecturas de red**](./ut0203.md)
- [**2.4 MODELO OSI**](./ut0204.md)
- [**2.5 MODELO TCP/IP**](./ut0205.md)
- [**2.6 Tipos de cableado**](./ut0206.md)

---

# 2.1 Introducción a las redes locales

> **🔗 Recurs Web: Video explicativo - Capas Modelo TCP/IPURL**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=1pB2kan_AFk) ↗️**](https://www.youtube.com/watch?v=1pB2kan_AFk)

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

# 2.2 Mapa físico y lógico

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

# 2.3 Arquitecturas de red

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

# 2.4 MODELO OSI

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

# 2.5 MODELO TCP/IP

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

# 2.6 Tipos de cableado

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
