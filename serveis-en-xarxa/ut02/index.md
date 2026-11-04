---
layout: default
title: "UD 2 — Arquitectura TCP/IP y Direccionamiento — Servicios en Red"
course_root: ".."
badge: "2n SMX · Servicios en Red · UT02"
prev_url: "../ut01/index.html"
prev_label: "⬅️ UT01"
next_url: "../ut03/index.html"
next_label: "UT03 ➡️"
---

# UD 2 — Arquitectura TCP/IP y Direccionamiento

Bienvenido/a a la **UD 2 — Arquitectura TCP/IP y Direccionamiento** del módulo profesional de **Servicios en Red** (2º curso de Técnico en Sistemas Microinformáticos y Redes).

Este temario contiene el desarrollo curricular completo, diagramas de arquitectura, capturas de pantalla de laboratorios reales y guías paso a paso desarrolladas por el profesor **Javier Egea Blasco** y el profesor **Pepe Cuenca**.

---

### 📑 Índice de Apartados de la Unidad

- [**1 - Introducción**](./ut0201.html)
- [**2 - Protocolo de Internet (IP)**](./ut0202.html)
- [**3 - Protocolo TCP**](./ut0203.html)

---

# 📖 Temario Completo de la Unidad (Lectura Continua)

## 1 - Introducción

1. **Internet es una red pública y global** de ordenadores que están interconectados mediante el protocolo de Internet (Internet Protocol) y que se comunican mediante la conmutación de paquetes.  

1. La denominación TCP/IP hace referencia a sus **dos protocolos más importantes**:

    - **Protocolo de Internet (IP)**.  
    Conjunto de reglas que asigna direcciones únicas a los dispositivos y permite enviar (enrutar) paquetes de datos a través de las redes y llegar al destino correcto.
    - **Protocolo de Control de Transmisión (TCP)**.
    Es un estándar de comunicación de la capa de transporte que garantiza el envío seguro, ordenado y sin errores de paquetes de datos entre dispositivos conectados a una red.

!!! question "Citar otros protocolos de comunicación de redes"



## 2 - Protocolo de Internet (IP)

### 2.1 Introducción

- La versión más utilizada actualmente del protocolo IP es **IPv4**, definida en el RFC 791 de 1981. Permite **un total teórico de 2³² direcciones**, aunque algunas están reservadas para usos especiales. Esto limita el número de direcciones IP disponibles, lo que ha provocado que se agoten en muchas regiones del mundo.

- Hoy en día ya dispone de un sucesor, **IPv6**, cuyo uso se está extendiendo progresivamente. Ofrece un espacio de direcciones mucho más amplio de **2¹²⁸ direcciones** y otras mejoras, como la simplificación del encabezado y la eliminación de la necesidad de **traducción de direcciones de red (NAT)**.

!!! question "¿Qué es la traducción de direcciones de red (NAT)?"



- Todas las versiones del protocolo IP permiten el envío de paquetes entre equipos sin establecer **ningún tipo de conexión** (*connectionless*).

- Esto significa que el equipo de origen envía datos al destinatario sin esperar ninguna confirmación de que la información se haya recibido correctamente.

- Aunque para **enviar datos entre dos hosts basta con el protocolo IP**, este no ofrece ninguna garantía de que se envíen correctamente ni de que lleguen a su destino. Tampoco garantiza que los datos lleguen intactos, ya que el control de errores solo se realiza sobre las cabeceras y no sobre la carga útil (los datos transmitidos). Por ello, las aplicaciones que requieren fiabilidad recurren al **protocolo TCP** en la capa de transporte.

### 2.2 Configuración de un nodo IP

En primer lugar, es necesario **configurar los protocolos TCP/IP locales**, incluidos por defecto en el núcleo de cualquier sistema operativo moderno. Para configurar un equipo se requiere la siguiente información:

- La dirección IP (ya sea IPv4 o IPv6).
- La máscara de subred, que sirve para identificar la red o subred a la que pertenece.

Si la comunicación se realiza con equipos de otras subredes o con Internet, se necesitará además:

- La dirección IP de la puerta de enlace predeterminada (*default gateway*), que corresponde al router a través del cual se redirige el tráfico hacia otras redes.
- Las direcciones IP de los servidores DNS.

> 💡 **Características principales del protocolo IP**
>
>     - **Enrutamiento:** seleccionar la ruta más adecuada para el envío de paquetes.
>     - **Servicio de entrega *Best-Effort* (mejor esfuerzo):**
>     - **No orientado a conexión:** cada paquete puede follow una ruta distinta, por lo que pueden llegar desordenados.
>     - **No fiable:** los paquetes se pueden perder, dañar o sufrir retardos.
>     - **Direccionamiento lógico:** proporciona un esquema de direccionamiento lógico mediante direcciones IP.
#### 2.2.1 Estructura de una dirección IP (IPv4)

![Descripción de la imagen](../img_2/img_2_22.png)

Una dirección IPv4 es un número de 32 bits que identifica a cada uno de los dispositivos conectados a una red IP, así como a la propia red.

Se divide en dos partes:

- Una parte identifica la red (*Network ID*).
- La parte restante identifica al dispositivo (*Host ID*).

Para separar el identificador de red del identificador de dispositivo se aplica la máscara de red. Al realizar la operación lógica AND entre la dirección IP y la máscara de red, se obtiene la dirección de red.

#### 2.2.2 Estructura de una dirección IP (IPv6)

- **IPv6 (Internet Protocol version 6)** es la versión más reciente del protocolo IP y fue desarrollada para solucionar principalmente el problema de agotamiento de las direcciones IPv4.

- Mientras que IPv4 utiliza direcciones de 32 bits, **IPv6 utiliza 128 bits**, lo que proporciona una cantidad enorme de direcciones disponibles.

- Una dirección IPv6 se representa mediante ocho grupos de cuatro dígitos hexadecimales, separados por dos puntos.
Para simplificar su escritura se pueden eliminar ceros y utilizar :: para representar uno o varios grupos consecutivos de ceros:
![Dirección IPv6](../img_2/img_2_25.svg)

#### 2.2.3 Direcciones IPv6 versus IPv4

![IPv4IPv6](../img_2/img_2_24.webp)

Las principales diferencias entre IPv4 y IPv6 son:

- 128 bits de direccionamiento, frente a los 32 bits de IPv4.
- Un espacio de direcciones enormemente mayor.
- Autoconfiguración de las direcciones, facilitando la configuración de los dispositivos.
- Incorporación de mecanismos como Neighbor Discovery, que sustituye y amplía algunas funciones que en IPv4 realizaban ARP.
- No utiliza broadcast de la misma forma que IPv4; utiliza principalmente multicast y anycast.
- Incluye soporte para IPsec como parte de las especificaciones del protocolo, aunque su uso no implica que todas las comunicaciones IPv6 estén cifradas.

> ℹ️ **Identificación de direcciones IP**
>
>     1. Tenéis un serie de direcciones IP, identificar cuales son IPv4 y cuales IPv6.
>     1. Identificar las IPv6 que estan en formato reducido y escribirlas en formato no reducido.
> 
>     **Direcciones IP**
> 
>     - 192.168.1.1
>     - 2001:db8::8a2e:370:7334
>     - 8.8.8.8
>     - 127.0.0.1
>     - ff02::1
>     - 2001:4860:4860::8888
>     - 142.250.184.206
>     - 2607:f8b0:4004:809::200e


#### 2.2.4 Clases de direcciones IPv4 (RFC 791)

Históricamente, las direcciones se dividían en tres clases principales según los octetos destinados a la red:

- **Clase A:** el primer octeto identifica la red.
- **Clase B:** los dos primeros octetos identifican la red.
- **Clase C:** los tres primeros octetos identifican la red.

Además, existen dos clases especiales:

- **Clase D:** reservada para multidifusión (*multicast*).
- **Clase E:** reservada para investigación y uso futuro.

**Tabla resumen de las clases de direcciones IPv4**  

| Clase | Rango campo de red (bits de red) | Rango campo de direcciones (bits de hosts) | Máscara por defecto | Dirección de difusión (broadcast) |
||||||
| A | 1 - 126 (8) | 0.0.0 - 255.255.255 (24) | 255.0.0.0 | x.255.255.255 |
| B | 128.0 - 191.255 (16) | 0.0 - 255.255 (16) | x.x.255.255 | x.255.255.255 |
| C | 192.0.0 - 223.255.255 (24) | 0 - 255 (8) | 255.255.255.0 | x.x.x.255 |
| D | 224.0.0 - 239.255.255 | No aplica |
| E | 240.0.0.0 – 247.255.255.255 | No aplica |

> ℹ️ **Identificación de direcciones IP**
>
>     Con la ayuda de la tabla anterior responder a las siguientes preguntas.  
> 
>     1. Calcular el rango de direcciones IP de cada clase.  
>     1. Calcular la cantidad de subredes disponibles para cada clase.  
>     1. Calcular la cantidad de IP's (hosts) disponibles para cada clase.  


#### 2.2.5 Direcciones reservadas y especiales

1. **Dirección de red:** identifica a la red en su conjunto, no a un host concreto. Se obtiene cuando todos los bits del identificador de host son 0 (ej.: 10.0.0.0).
1. **Dirección de difusión (broadcast):** permite enviar un paquete a todos los hosts de una red simultáneamente. Se obtiene cuando todos los bits del identificador de host son 1 (ej.: 10.255.255.255).
1. **Dirección no especificada:** representa la ausencia de una dirección IP asignada. Es 0.0.0.0, usada por un host que todavía no tiene una dirección IP (por ejemplo, durante el proceso de solicitud DHCP).
1. **Ruta por defecto:** entrada genérica en una tabla de enrutamiento que representa "cualquier red posible". Se escribe como 0.0.0.0 **no es la dirección de un host** y es la ruta que utiliza un router cuando no encuentra una coincidencia más específica para un paquete.
1. **Dirección de bucle de retorno (loopback):** permite a un equipo comunicarse consigo mismo con fines de prueba. La red 127.0.0.0 está reservada para ello; los paquetes no salen a la red física (127.0.0.1 hace referencia al localhost).
1. **Direcciones de enlace local (Link-Local / APIPA):** se autoasignan cuando un dispositivo no puede contactar con un servidor DHCP. El rango 169.254.0.0/16 se usa con este propósito y no es enrutable en Internet.
1. **Direcciones privadas:** rangos reservados para uso interno en redes locales, no enrutables en Internet:

#### 2.2.6 Ejercicios de redes (RFC 791)

> ℹ️ **Ejercicio 1**
>
>     Definir la clase de red de las sigientes IP's.
> 
>     |Dirección IP|Clase|
>     ||:-:|
>     |10.250.1.1|A|
>     |150.10.15.0|B|
>     |192.14.2.0||
>     |148.17.9.1||
>     |193.42.1.1||
>     |126.8.156.0||
>     |220.200.23.1||
>     |230.230.45.58||
>     |177.100.18.4||
>     |119.18.45.0||
>     |249.240.80.78||
>     |199.155.77.56||
>     |117.89.56.45||
>     |215.45.45.0||
>     |199.200.15.0||
>     |95.0.21.90||
>     |33.0.0.0||
>     |158.98.80.0||
>     |219.21.56.0||


> ℹ️ **Ejercicio 2**
>
>     Escribe la máscara de subred por defecto correspondiente a cada una de estas direcciones IP's.
>     !!! tip "Identificar primero la clase de red a la que pertenece la IP"
>     |Dirección IP|Clase|Máscara|
>     ||:-:||
>     |177.100.18.4|B|255.255.0.0|
>     |119.18.45.0|A|255.0.0.0|
>     |191.249.234.191|||
>     |223.23.223.109|||
>     |10.10.250.1|||
>     |126.123.23.1|||
>     |223.69.230.250|||
>     |192.12.35.105|||
>     |77.251.200.51|||
>     |189.210.50.1|||
>     |88.45.65.35|||
>     |128.212.250.254|||
>     |193.100.77.83|||
>     |125.125.250.1|||
>     |1.1.10.50|||
>     |220.90.130.45|||
>     |134.125.34.9|||
>     |95.250.91.99|||


> ℹ️ **Ejercicio 3**
>
>     Con la ayuda de las definiciones de los apartados anteriores, responder a las siguientes preguntas.  
> 
>     1. Proponer una IP de una red de clase C.
>     1. Calcular la dirección de red.  
>     1. Calcular la dirección de broadcast.
>     1. ¿Cuántos hosts admite esa red?
>     1. ¿Qué ocurre si, desde cualquier IP de la red, envío un paquete a la dirección de broadcast?
>     1. ¿Pueden, teorícamente, ser enrutados hacia internet los paquetes emitidos por la IP de tipo 127.0.0.80?


#### 2.2.7 Direccionamiento sin clase CIDR (RFC 1519)

- Con el rápido crecimiento de Internet, el direccionamiento basado en clases quedó obsoleto. En 1993 se introdujo CIDR (*Classless Inter-Domain Routing*), un sistema que elimina la rigidez de las clases y optimiza la forma en que se interpretan y enrutan las direcciones IP.

- En lugar de clases, se utiliza **una notación con prefijo** para indicar el número de bits a 1 en la máscara de red. Las antiguas clases A, B y C equivalen a máscaras /8, /16 y /24, respectivamente. Por ejemplo, la notación 192.168.0.0/16 indica que los primeros 16 bits corresponden a la red.

- Para utilizar CIDR, los routers deben ser capaces de procesar direcciones IP independientemente de las clases convencionales.

**Ejemplos**  

- 10.0.0.0/8: permite direcciones desde 10.0.0.1 hasta 10.255.255.254.  
- 192.168.0.0/16: permite direcciones desde 192.168.0.1 hasta 192.168.1.253.

> ℹ️ **Redes CIDR**
>
> 
>     1. Calcular la máscara de la red 10.0.0.0/8.
>     1. Calcular la máscara de la red 192.168.0.0/16.
>     1. Calcular la máscara de la red 172.16.0.0/12.
>     1. Calcular el rango de direcciones de la red: 172.16.0.0/12.
>     1. Calcular la IP de broadcast de la red 172.16.0.0/12.
>     1. ¿Cuantos hosts quedarían en las redes anteriores si la red tiene acceso a internet?
>     1. ¿Como se llama la IP reservada para salir de la red?


#### 2.2.8 Métodos de transmisión

En una red IP, un paquete puede enviarse siguiendo distintos métodos de transmisión según cuántos destinatarios deban recibirlo. La elección del método influye directamente en el uso del ancho de banda y en el diseño de aplicaciones como streaming, videoconferencias o descubrimiento de dispositivos.

- **Unidifusión (Unicast):**  
La información se envía desde un único origen a un único destinatario. Es el método más común y el que se usa en la inmensa mayoría del tráfico de Internet (navegación web, correo electrónico, transferencias de archivos, etc.).
- **Multidifusión (Multicast):**  
La información se envía desde un origen a un grupo específico de dispositivos suscritos.  
**Utiliza direcciones reservadas de la Clase D** (rango 224.0.0.0 – 239.255.255.255). Los dispositivos se suscriben o abandonan un grupo multicast mediante **el protocolo IGMP** (Internet Group Management Protocol), y **los routers usan protocolos como PIM** (Protocol Independent Multicast) para reenviar el tráfico únicamente hacia las ramas de red donde existen receptores interesados.  
- **Difusión (Broadcast):**  
La información se envía a todos los dispositivos de la subred. Como se explicó en un apartado anterior, esto se logra utilizando la dirección de broadcast de la red (ej.: 10.255.255.255). A nivel de enlace, la trama Ethernet usa la MAC de destino FF:FF:FF:FF:FF:FF, lo que obliga al switch a reenviarla (flood) por todos sus puertos.  

    > 💡 **Ejemplos de uso del broadcast**
>
>         - Solicitudes **DHCP (el cliente no conoce aún la IP del servidor)**, resolución de direcciones con ARP (para averiguar qué MAC corresponde a una IP).
>         - Desventaja: genera tráfico innecesario en dispositivos que no están interesados en el paquete, y en redes grandes puede provocar problemas de rendimiento (broadcast storms).
#### 2.2.9 Subnetting

- El subnetting es un proceso fundamental en la administración de redes que permite dividir una red grande en varias subredes más pequeñas.

- Este proceso optimiza el uso de direcciones IP, mejora la seguridad y facilita la gestión de redes complejas.

- Se logra "prestando" bits de la parte de host para aumentar el número de subredes disponibles.  

> 💡 **Conceptos Clave del Subnetting**
>
>     - **Notación CIDR:**  
>     Usa un sufijo (como /24) para mostrar de forma rápida cuántos bits forman la red.
>     - **Máscara de subred:**  
>     Indica qué parte de la dirección IP identifica a la red y qué parte identifica a los equipos o hosts.
>     - **IP de red y de broadcast:**  
>     Las direcciones primera y última de cada subred se reservan para identificar la red y para enviar mensajes generales, por lo que no se pueden dar a los equipos.
> 💡 **Ventajas de dividir una red**
>
>     - **Menos tráfico:**  
>     Al haber menos equipos por sección, los datos viajan más rápido y sin choques de información.
>     - **Más seguridad:**  
>     Permite separar departamentos (como administración o ventas) y limitar el acceso entre ellos.- **Ahorro de IP:** ayuda a aprovechar mejor los recursos de direcciones disponibles.
[**Calculadora IP**](https://www.aprendaredes.com/cgi-bin/ipcalc/ipcalc_cgi1)

#### 2.2.9 Ejercicios de redes y de subnetting

> ℹ️ **Ejercicio 1**
>
>     1. Disponemos de la dirección de red: `172.16.0.0/16`
>     1. Determinar:
>         - Máscara de subred por defecto:
>         - Nº total de direcciones de host:
>         - Nº de direcciones útiles:
> ℹ️ **Ejercicio 2**
>
>     1. Disponemos de la dirección de red: `172.16.0.0/16`
>     1. Se desea montar 2 subredes útiles sobre esa red.
>     1. Se desea saber:
>         1. Máscara de subred por defecto:
>         1. Máscara de subred adaptada:
>         1. Nº total de subredes:
>         1. Nº total de direcciones de host:
>         1. Nº de direcciones útiles  
>         1. Nº de subred de la 2ª subred útil  


> ℹ️ **Ejercicio 3**
>
>     1. Disponemos de la dirección de red: `116.0.0.0/8`
>     1. Se desea montar 126 subredes útiles sobre esa red.
>     1. Se desea saber:
>         1. Máscara de subred por defecto:
>         1. Nº de bits cogidos:  
>         1. Nº total de subredes:
>         1. Máscara de subred adaptada a las 126 subredes:
>         1. Nº total de direcciones de host:
>         1. Nº de direcciones útiles  
>         1. ¿Nº de subred de la 2ª subred útil?  
>         1. ¿Cuál es el 3º rango de subred útil?


> ℹ️ **Ejercicio 4**
>
>     1. Disponemos de la dirección de red: `199.95.30.0/24`
>     1. Se desea montar 62 subredes útiles sobre esa red.
>     1. Se desea saber:
>         1. Máscara de subred por defecto:
>         1. Nº de bits cogidos:  
>         1. Nº total de subredes:
>         1. Máscara de subred adaptada a las 126 subredes:
>         1. Nº total de direcciones de host:
>         1. Nº de direcciones útiles  
>         1. ¿Nº de subred de la 2ª subred útil?  
>         1. ¿Cuál es el 3º rango de subred útil?


## 3 - Protocolo TCP

- El protocolo TCP (Transmission Control Protocol o Protocolo de Control de Transmisión) es uno de los pilares fundamentales de las redes informáticas e internet. Junto con IP, forma la base de la suite de protocolos TCP/IP sobre la que funciona la comunicación en internet.

- TCP es el mecanismo que controla las transmisiones de datos y se asegura de que los paquetes enviados entre dispositivos lleguen completos, en orden y sin cambios. A diferencia de otros protocolos de transporte como UDP, TCP prioriza la fiabilidad sobre la velocidad.

### 3.1 Modelo cliente-servidor en TCP

- En este modelo la comunicación se establece entre un cliente y un servidor. El cliente es quien inicia la comunicación solicitando un servicio o recurso, mientras que el servidor es quien responde a esas solicitudes proporcionando los datos o servicios requeridos.

- Este modelo es el más habitual en internet: por ejemplo, cuando un navegador (cliente) solicita una página web a un servidor web.

### 3.2 Modelo P2P en TCP

- En este modelo, todos los nodos de la red actúan como iguales, es decir, cada nodo puede funcionar tanto como cliente como servidor. Esto permite que los nodos compartan recursos directamente entre sí sin necesidad de un servidor centralizado.

- Este modelo se utiliza, por ejemplo, en redes de intercambio de archivos, donde cada usuario puede tanto descargar como distribuir fragmentos del mismo archivo.

### 3.3 Segmentación y reensamblaje de datos

- Entre otros mecanismos, TCP se encarga de **dividir** las transmisiones en pequeños fragmentos llamados segmentos (comúnmente denominados también paquetes, aunque técnicamente el segmento es la unidad de TCP y el paquete la de IP), para que puedan ser transferidos de manera eficiente por la red.

- Cada segmento incluye un número de secuencia que permite identificar su posición dentro del flujo original de datos. Gracias a esta numeración, TCP puede reensamblar los segmentos en el orden correcto en el destino, incluso si llegan desordenados por la red.

### 3.4 Establecimiento de la conexión (three-way handshake)

1. El three-way handshake es un proceso que actúa como saludo inicial entre el cliente y el servidor.
1. Consiste en el intercambio de tres mensajes que permiten a ambas partes confirmar que están preparadas para realizar una transmisión fiable.

    - **SYN:** el cliente envía un mensaje de sincronización al servidor para comprobar que está disponible y solicitar el inicio de la conexión.
    - **SYN-ACK:** el servidor responde confirmando que está listo para recibir datos y que ha recibido la solicitud del cliente.
    - **ACK:** el cliente confirma la recepción de la respuesta del servidor, y a partir de este momento ambos pueden comenzar a intercambiar datos.

### 3.5 Control de flujo y gestión de errores en TCP

Una vez iniciada la comunicación, TCP se encarga de controlar el flujo de datos entre cliente y servidor mediante mecanismos como:

- **Control de flujo:** regula la cantidad de datos que se envían para evitar saturar al receptor, utilizando un sistema de ventana deslizante (sliding window).
- **Detección de errores:** cada segmento incluye una suma de verificación (checksum) que permite comprobar si los datos han llegado dañados.
- **Retransmisión:** si un segmento se pierde o llega dañado, TCP solicita su reenvío automáticamente, garantizando la integridad de la transmisión.
- **Acuses de recibo (ACK):** el receptor confirma la recepción de cada segmento, lo que permite al emisor saber qué datos han llegado correctamente.

### 3.6 Finalización de la conexión TCP

- Cuando la transferencia de datos ha finalizado, el protocolo todavía debe cerrar la conexión de forma ordenada.
- En este proceso, tanto cliente como servidor intercambian mensajes de FIN (finalización) y ACK (confirmación), en un proceso que suele denominarse four-way handshake, ya que cada extremo debe cerrar su propio flujo de datos de manera independiente.
- Esto garantiza que ambas partes hayan terminado de enviar y recibir información antes de cerrar la comunicación por completo.

### 3.7 Principales características del protocolo TCP

1. **Confiabilidad en la transmisión de datos**  
TCP garantiza que los datos lleguen sin errores y en el orden correcto, resolviendo los posibles fallos que puedan surgir por el camino. Si un paquete se pierde y no llega al destino, TCP se encarga de reenviarlo automáticamente.
1. **Orientación a conexión**  
TCP gestiona todo el proceso de conexión entre los integrantes de la transmisión. Es decir, antes de transferir datos, TCP establece una conexión formal (mediante el three-way handshake) que se mantiene activa durante todo el intercambio.
1. **Control de congestión en la red**  
Las redes pueden llegar a congestionarse. En esos casos, TCP es capaz de ajustar la velocidad de transmisión según las condiciones de la red, evitando fallos debidos a saturaciones y adaptándose dinámicamente mediante algoritmos como el slow start o el congestion avoidance.
1. **Garantía de entrega de datos en el orden correcto**  
Otro aspecto que asegura el protocolo es que los datos lleguen en el orden en que fueron enviados. Gracias a ello, es posible recomponerlos correctamente una vez llegan al cliente, incluso si los segmentos han tomado rutas distintas por la red.
1. **Compatibilidad con otros protocolos de la capa de transporte**  
TCP es un protocolo robusto y flexible, capaz de servir de base a muchos otros protocolos más specializados. TCP se encarga del transporte de las comunicaciones de protocolos tan conocidos como HTTP, FTP, SMTP, SSH y muchos otros.
1. **Casos de uso del protocolo TCP**  

    - **Protocolo de mensajes de control de Internet (ICMP)**
    El rol de ICMP es enviar mensajes de error e información operativa cada vez que ocurre un problema.
    - **Protocolo de gestión de grupos de Internet (IGMP)**  
    IGMP permite la multidifusión, es decir, enviar los mismos datos a múltiples dispositivos al mismo tiempo.
    - **Protocolo de resolución de direcciones (ARP)**
    Como protocolo de comunicación, ARP ayuda a conectar la dirección de la capa de Internet a la dirección de la capa de enlace.
    - **Protocolo de transferencia de archivos (FTP)**
    FTP permite transferir archivos de un cliente a un servidor. Por ejemplo, este protocolo es lo que nos permite acceder a los datos almacenados en la nube, lee más sobre «lo que es un iPaaS» para obtener más información.
    - **Protocolo de transferencia de hipertexto (HTTP/HTTPS)**  
    Comúnmente conocido como el ancestro de HTTPS, sólo que con menos seguridad de datos, HTTP es lo que hace posible la interacción entre el cliente y el servidor web. A menudo se le considera como la base para la comunicación de datos.
    - **Protocolo simple de transferencia de correo (SMTP, IMAP y POP3)**  
    Los SMTP permiten que los ordenadores y los servidores intercambien datos para que los usuarios puedan enviar y recibir correo electrónico.  
    Los IMAP permiten que los usuarios accedan a sus correos electrónicos desde múltiples dispositivos, manteniendo los mensajes sincronizados en todos ellos. Por otro lado, los POP3 permiten que los usuarios descarguen sus correos electrónicos desde el servidor a su dispositivo local, eliminando los mensajes del servidor después de la descarga.  
    Los POP3 son más simples y ligeros, pero no permiten la sincronización entre dispositivos, mientras que los IMAP ofrecen una experiencia más completa y flexible para la gestión del correo electrónico.
    - **Aplicaciones de streaming que requieren fiabilidad en la entrega**  
    Los servicios de streaming, como la transmisión de video o audio en tiempo real, requieren que los datos lleguen de manera confiable y en el orden correcto. TCP garantiza que los paquetes de datos se entreguen sin errores, lo que es crucial para mantener la calidad del contenido transmitido.
    - **Conexiones seguras en redes empresariales (SSH, VPN)**  
    SSH (Secure Shell) y las VPN (Virtual Private Network) utilizan TCP para establecer conexiones seguras y cifradas entre dispositivos. Esto es esencial para proteger la información sensible durante la transmisión a través de redes públicas o no confiables.
    - **Acceso remoto y administración de sistemas**  
    TCP es fundamental para el acceso remoto a sistemas y la administración de servidores. Herramientas como RDP (Remote Desktop Protocol) y VNC (Virtual Network Computing) dependen de TCP para garantizar que los comandos y datos enviados desde el cliente lleguen correctamente al servidor, permitiendo una gestión eficiente y segura de los recursos informáticos.

### 3.8 Puertos en TCP

1. Un equipo conectado a una red TCP/IP ejecuta múltiples procesos a la vez.
1. Esto implica que cada uno de ellos genere datos que se envían a través de un protocolo (TCP o UDP) de la capa de transporte que los pasa al protocolo IP (capa de internet) para su transmisión a través de la dirección IP de la interfaz de red.
1. Para saber a qué proceso pertenece cada envío es necesaria una dirección adicional que lo identifique dentro de una dirección IP concreta.
1. En el protocolo TCP/IP, esa dirección se llama puerto.
1. Los puertos son números que identifican de manera única a cada servicio o aplicación que se ejecuta en un equipo. Tanto TCP como UDP utilizan estos puertos, junto con la dirección IP, para dirigir los datos al proceso correcto dentro del sistema operativo (esta combinación de IP y puerto se conoce como socket).
1. Los puertos se dividen en tres rangos principales:

    - **Puertos bien conocidos (Well-known ports):** del 0 al 1023. Son utilizados por servicios y aplicaciones estándar, como HTTP (puerto 80), HTTPS (puerto 443), FTP (puertos 20 y 21) y SMTP (puerto 25).
    - **Puertos registrados (Registered ports):** del 1024 al 49151. Son asignados a aplicaciones y servicios específicos por la IANA (Internet Assigned Numbers Authority).
    - **Puertos dinámicos o privados (Dynamic or Private ports):** del 49152 al 65535. Son utilizados por aplicaciones y servicios temporales o personalizados, y no están asignados oficialmente; suelen emplearse como puertos de origen en conexiones salientes de los clientes.

### 3.9 Ejercicios sobre puertos del protocolo TCP/IP

> ℹ️ **Ejercicio 1**
>
>     - Rellenar la tabla siguiente.
> 
>     | Puerto | Protocolo/Servicio | TCP/UDP/Ambos | Función principal | Rango |
>     |--------|--------------------|---------------|--------------------|-------|
>     | 20/21  |||||
>     | 22     |||||
>     | 23     |||||
>     | 25     |||||
>     | 53     |||||
>     | 67/68  |||||
>     | 80     |||||
>     | 110    |||||
>     | 143    |||||
>     | 161    |||||
>     | 443    |||||
>     | 3306   |||||
>     | 3389   |||||
> ℹ️ **Ejercicio 2**
>
>     - ¿Por qué DNS o DHCP usan UDP en lugar de TCP?


> ℹ️ **Ejercicio 3**
>
>     - ¿Diferencias entre el protocolo del puerto 80 y del 443?


> ℹ️ **Ejercicio 4**
>
>     - ¿Por qué Telnet (23) es inseguro frente a SSH (22)?


> ℹ️ **Ejercicio 5**
>
>     - Dar un ejemplo de puerto registrado y el servicio asociado.
>     - ¿Diferencia entre puerto registrado y puerto conocido?


> ℹ️ **Ejercicio 6**
>
>     - ¿Cuáles son los riesgos de tener puertos abiertos innecesariamente?
