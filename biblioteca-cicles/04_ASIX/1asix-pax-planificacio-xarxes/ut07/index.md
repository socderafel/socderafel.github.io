---
layout: default
title: "UT7 — U6 - Nivell d'enllaç — Planificació i Administració de Xarxes | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r ASIX · Grau Superior · UT7 Completa"
prev_url: "../ut06/ut06actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT6"
next_url: "../ut07/ut0701.html"
next_label: "7.1 U6 - Nivell d'enllaç ➡️"
---

# 📘 UT7 — U6 - Nivell d'enllaç (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**7.1 U6 - Nivell d'enllaç**](#ut0701) (o [obrir en pàgina individual ➡️](./ut0701.md) )
> - [**7.2 Trama PPP**](#ut0702) (o [obrir en pàgina individual ➡️](./ut0702.md) )
> - [**✍️ Activitats pràctiques UT7**](#ut07actividades) (o [obrir en pàgina individual ➡️](./ut07actividades.md) )

---

## 7.1 U6 - Nivell d'enllaç

---

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. 4.3 Protocolos de enlace de datos

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Propósito de la capa de enlace de datos Capa de enlace de datos

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Propósito de la capa de enlace de datos Capa de enlace de datos (continuación) Direcciones de enlace de datos de Capa 2

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Propósito de la capa de enlace de datos Subcapas de enlace de datos § La capa de enlace de datos se divide en dos subcapas: • Control de enlace lógico (LLC) • Se comunica con la capa de red.

• Identifica qué protocolo de capa de red se utiliza para el marco. • Permite que varios protocolos de capa 3, como IPv4 e IPv6, utilicen la misma interfaz y los mismos medios de red. • Control de acceso a medios (MAC) • Define los procesos de acceso al medio que realiza el hardware.

• Proporciona direccionamiento de la capa de enlace de datos y acceso a varias tecnologías de red. • Se comunica con Ethernet para enviar y recibir marcos a través de cables de cobre o fibra óptica. • Se comunica con tecnologías inalámbricas como Bluetooth y Wi-Fi.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Propósito de la capa de enlace de datos Control de acceso al medio § A medida que los paquetes se transfieren del host de origen al host de destino, deben atravesar diferentes redes físicas.

§ Las redes físicas pueden constar de diferentes tipos de medios físicos, como cables de cobre, fibra óptica y tecnología inalámbrica compuesta por señales electromagnéticas, frecuencias de radio y microondas, y enlaces satelitales.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Propósito de la capa de enlace de datos Provisión de acceso a los medios § En cada salto a lo largo de la ruta, los routers realizan lo siguiente: • Aceptan una trama proveniente de un medio.

• Desencapsulan la trama. • Vuelven a encapsular el paquete en una trama nueva. • Reenvían la nueva trama adecuada al medio de ese segmento.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Propósito de la capa de enlace de datos Estándares de la capa de enlace de datos § Las organizaciones de ingeniería que definen estándares y protocolos abiertos que se aplican a la capa de enlace de datos incluyen

- Instituto de Ingenieros Eléctricos y

Electrónicos (IEEE)

- Unión Internacional de

Telecomunicaciones (ITU)

- Organización Internacional para la

Estandarización (ISO)

- Instituto Nacional Estadounidense de

Estándares (ANSI)

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. 4.4 Control de acceso al medio

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías Control de acceso a los medios § El control de acceso a los medios es el equivalente a las reglas de tráfico que regulan la entrada de vehículos a una autopista.

§ La ausencia de un control de acceso a los medios sería el equivalente a vehículos que ignoran el resto del tráfico e ingresan al camino sin tener en cuenta a los otros vehículos. § Sin embargo, no todos los caminos y entradas son iguales. El tráfico puede ingresar a un camino confluyendo, esperando su turno en una señal de parada o respetando el semáforo. Un conductor sigue un conjunto de reglas diferente para cada tipo de entrada.

Uso compartido de medios

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías Topologías física y lógica § Topología física: se refiere a las conexiones físicas e identifica cómo se interconectan los terminales y dispositivos de infraestructura, como los routers, los switches y los puntos de acceso inalámbrico.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías Topologías física y lógica (continuación) § Topología lógica: se refiere a la forma en que una red transfiere tramas de un nodo al siguiente. Los protocolos de capa de enlace de datos definen estas rutas de señales lógicas.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías de redes WAN Topologías WAN físicas comunes § Punto a punto: enlace permanente entre dos terminales. § Hub and Spoke (en estrella): un sitio central interconecta sitios de sucursal mediante enlaces punto a punto.

§ Malla: proporciona alta disponibilidad, pero requiere que cada sistema final esté interconectado con todos los demás sistemas. Los costos administrativos y físicos pueden ser altos.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías de redes WAN Topología física punto a punto § El nodo en un extremo coloca los marcos en los medios y el nodo en el otro extremo los saca de los medios del circuito punto a punto.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías de redes WAN Topología lógica punto a punto

- Los nodos de los extremos que se comunican en una red punto a punto pueden

estar conectados físicamente a través de una cantidad de dispositivos intermediarios.

- Sin embargo, el uso de dispositivos físicos en la red no afecta la topología lógica.
- La conexión lógica entre nodos forma lo que se llama un circuito virtual.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías de redes WAN Topología lógica punto a punto (continuación)

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías de redes LAN Métodos de control de acceso a medios § Acceso basado en la contención

- Los nodos funcionan en

modo semidúplex.

- Compiten por el uso del

medio.

- Solo puede enviar un

dispositivo a la vez.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías de redes LAN Métodos de control de acceso a medios (continuación) § Acceso controlado

- Cada nodo tiene su

propio tiempo para utilizar el medio.

- Las LAN de Token Ring

antiguo son un ejemplo.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías de redes LAN Acceso basado en la contención: CSMA/CD § En las redes LAN Ethernet de modo semidúplex, se utiliza el proceso de acceso múltiple con detección de portadora/detección de colisión (CSMA/CD).

• Si dos dispositivos transmiten al mismo tiempo, se produce una colisión. • Ambos dispositivos detectarán la colisión en la red. • Los datos enviados por ambos dispositivos se dañarán y deberán enviarse nuevamente.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Topologías de redes LAN Acceso basado en la contención: CSMA/CA § CSMA/CA

- Utiliza un método para detectar

si el medio está libre.

- No detecta colisiones pero

intenta evitarlas ya que aguarda antes de transmitir. § Nota: Las redes LAN Ethernet con switches no utilizan sistemas por contención porque el switch y la NIC de host operan en el modo de dúplex completo.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Trama del enlace de datos La trama § Cada tipo de trama tiene tres partes básicas

- Encabezado
- Datos
- Tráiler

§ La estructura de la trama y los campos contenidos en el encabezado y tráiler varían de acuerdo con el protocolo de capa 3.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Trama del enlace de datos Campos de trama § Indicadores de arranque y detención de trama: identifican los límites de comienzo y finalización de la trama. § Direccionamiento: indica los nodos de origen y de destino.

§ Tipo: identifica el protocolo de capa 3 en el campo de datos. § Control: identifica los servicios especiales de control de flujo, como QoS. § Datos: incluye el contenido de la trama (es decir, el encabezado del paquete, el encabezado del segmento y los datos).

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Trama del enlace de datos Direcciones de capa 2 Cada trama de enlace de datos contiene la dirección de origen de enlace de datos de la tarjeta NIC que envía la trama y la dirección de destino de enlace de datos de la tarjeta NIC que recibe la trama.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § El tamaño mínimo de trama de Ethernet de la dirección MAC de destino a FCS es de 64 bytes, y el máximo es de 1518 bytes. Trama de Ethernet Campos de la trama de Ethernet § Las tramas de menos de 64 bytes se consideran fragmentos de colisión o tramas cortas, y se descartan automáticamente por las estaciones receptoras. Las tramas de más de 1500 bytes de datos se consideran “jumbos” o tramas bebés gigantes.

§ Si el tamaño de una trama transmitida es menor que el mínimo o mayor que el máximo, el dispositivo receptor descarta la trama.

Trama de Ethernet MAC 48 bits Hexadecimal CSMA/CD Servicio Sin Conexión Medio Compartido IEEE 802.3 Ethernet 1000 Mbps

Trama PPP Negociación Autenticación, Compresión y Multienlace Encapsula Otros protocolos PPP Protocolo WAN

Trama Inalámbrica 802.11 Servicios Autenticación, Asociación y Privacidad CSMA/CA Medio Compartido IEEE 802.11 Wifi Actividad Interactiva •Campos de trama

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § La subcapa MAC de tiene dos responsabilidades principales: • Encapsulamiento de datos • Control de acceso al medio § El encapsulamiento de datos proporciona tres funciones principales

• Delimitación de tramas • Direccionamiento • Detección de errores Trama de Ethernet Subcapa MAC § El control de acceso al medio es responsable de colocar las tramas en los medios y de quitarlas de ellos. Esta subcapa se comunica directamente con la capa física.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Las direcciones MAC se crearon para identificar el origen y el destino reales. • Las reglas de la dirección MAC se establecen según IEEE. • El IEEE asigna al proveedor un código de 3 bytes (24 bits), llamado “identificador único de organización (OUI)”.

Direcciones MAC de Ethernet Direcciones MAC: Identidad de Ethernet § El IEEE obliga a los proveedores a respetar dos normas simples: • Todas las direcciones MAC asignadas a una NIC o a otro dispositivo Ethernet deben utilizar el OUI que se le asignó a dicho proveedor como los tres primeros bytes.

• Todas las direcciones MAC con el mismo OUI deben tener asignado un valor único en los tres últimos bytes.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § En general, la dirección MAC se denomina dirección grabada (BIA); es decir, la dirección está codificada en el chip de la ROM permanentemente. Cuando la computadora arranca, lo primero que hace la NIC es copiar la dirección MAC de la ROM a la RAM.

Direcciones MAC de Ethernet Procesamiento de tramas § Cuando un dispositivo reenvía un mensaje a una red Ethernet, adjunta la información del encabezado a la trama. § La información del encabezado contiene las direcciones MAC de origen y de destino.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § En un host de Windows, utilice el comando ipconfig /all para identificar la dirección MAC de un adaptador Ethernet. En un host Mac o Linux, se utiliza el comando ipconfig.

§ Según el dispositivo y el sistema operativo, puede ver varias representaciones de direcciones MAC. Direcciones MAC de Ethernet Representaciones de direcciones MAC

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Una dirección MAC de unidifusión es la dirección única utilizada cuando se envía una trama desde un único dispositivo transmisor hacia un único dispositivo receptor. § Para que un paquete de unidifusión se envíe y se reciba, la dirección IP de destino debe estar incluida en el encabezado del paquete IP. Además, el encabezado de la trama de Ethernet también debe contar con la dirección MAC de destino correspondiente.

Direcciones MAC de Ethernet Dirección MAC unidifusión

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Muchos protocolos de red, como DHCP y ARP, utilizan la difusión. § Los paquetes de difusión tienen una dirección IPv4 de destino que contiene solo números uno (1) en la porción de host, lo que significa que todos los hosts de esa red local recibirán y procesarán el paquete.

§ Cuando el paquete de difusión IPv4 se encapsula en la trama de Ethernet, la dirección MAC de destino es la dirección MAC de difusión FF-FF-FF-FF-FF-FF en hexadecimal (48 números uno en binario). Direcciones MAC de Ethernet Dirección MAC de difusión

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Las direcciones de multidifusión le permiten a un dispositivo de origen enviar un paquete a un grupo de dispositivos. • Una dirección IP de grupo de multidifusión se asigna a los dispositivos que pertenecen a un grupo de multidifusión, en el rango de 224.0.0.0 a 239.255.255.255 (las direcciones de multidifusión IPv6 comienzan con FF00::/8).

• La dirección IP de multidifusión requiere una dirección MAC de multidifusión correspondiente que comience con 01-00-5E en formato hexadecimal. Direcciones MAC de Ethernet Dirección MAC de multidifusión

---

## 7.2 Trama PPP

> **📄 Document Escanejat / Visual (trama_PPP.pdf)**
> Aquest document PDF (2 pàgines) està compost principalment per esquemes o imatges escanejades.

---

## ✍️ Activitats pràctiques UT7

> **✍️ Activitat Pràctica 7.1 — U6 A1**
> Unitat 6 – Nivell d’enllaç U6 – A1
>
> Instruccions
>
> - Recorda copiar tant l’enunciat com les respostes.
> - Entrega el document en format .pdf.
>
> - Utilitzant Packet Tracer construeix una xarxa com la de la següent figura.
>
> Envia un ping des del PC al portàtil en mode simulació. Analitza les trames indicant a qui correspon cada direcció MAC.
>
> ### 2. Representa mitjançant un diagrama de flux (pots utilitzar la ferramenta
>
> DIA instal·lada al teu PC o bé la web draw.io), les passes que dona una estació quan té que transmetre utilitzant el mètode d’accés CSMA/CD.
>
> - Explica per què CSMA / CD resulta inadequat per xarxes inalàmbriques.

> **✍️ Activitat Pràctica 7.2 — U6 P1**
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet Topología
>
> Objetivos Parte 1: Examinar los campos de encabezado de una trama de Ethernet II Parte 2: Utilizar Wireshark para capturar y analizar tramas de Ethernet Aspectos básicos/situación Cuando los protocolos de capa superior se comunican entre sí, los datos fluyen por las capas de interconexión de sistemas abiertos (OSI) y se encapsulan en una trama de capa 2. La composición de la trama depende del tipo de acceso al medio. Por ejemplo, si los protocolos de capa superior son TCP e IP, y el acceso a los medios es Ethernet, el encapsulamiento de tramas de capa 2 es Ethernet II. Esto es típico para un entorno LAN.
>
> Al aprender sobre los conceptos de la capa 2, es útil analizar la información del encabezado de la trama. En la primera parte de esta práctica de laboratorio, revisará los campos que contiene una trama de Ethernet II. En la parte 2, utilizará Wireshark para capturar y analizar campos de encabezado de tramas de Ethernet II de tráfico local y remoto.
>
> Recursos necesarios • 1 PC (Windows 7, 8 o 10 con acceso a Internet y Wireshark instalado) Parte 1: Examinar los campos de encabezado de una trama de Ethernet II En la parte 1, examinará los campos de encabezado y el contenido de una trama de Ethernet II. Se utilizará una captura de Wireshark para examinar el contenido de esos campos.
>
> Paso 1: Revisar las descripciones y longitudes de los campos de encabezado de Ethernet II Preámbulo Dirección de destino Dirección de origen Tipo de trama Datos FCS 8 bytes 6 bytes 6 bytes 2 bytes 46 a 1500 bytes 4 bytes
>
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet
>
> Paso 2: Examinar la configuración de red de la PC La dirección IP de este equipo host es 192.168.1.147, y el gateway predeterminado tiene la dirección IP 192.168.1.1.
>
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet
>
> Paso 3: Examinar las tramas de Ethernet en una captura de Wireshark En la siguiente captura de Wireshark, se muestran los paquetes generados por un ping que se hace de un equipo host a su gateway predeterminado. Se le aplicó un filtro a Wireshark para ver solamente el protocolo de resolución de direcciones (ARP) y el protocolo de mensajes de control de Internet (ICMP). La sesión comienza con una consulta ARP para obtener la dirección MAC del router del gateway seguida de cuatro solicitudes y respuestas de ping.
>
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet
>
> Paso 4: Examinar el contenido del encabezado de Ethernet II de una solicitud de ARP En la siguiente tabla, se toma la primera trama de la captura de Wireshark y se muestran los datos de los campos de encabezado de Ethernet II. Campo Valor Descripción Preámbulo No se muestra en la captura.
>
> Este campo contiene bits de sincronización, procesados por el hardware de la NIC. Dirección de destino Broadcast (ff:ff:ff:ff:ff:ff) (Difusión [ff:ff:ff:ff:ff:ff]) Direcciones de capa 2 para la trama. Cada dirección tiene una longitud de 48 bits, o 6 octetos, expresada como 12 dígitos hexadecimales (0-9, A-F).
>
> Un formato común es 12:34:56:78:9A:BC. Los primeros seis números hexadecimales indican el fabricante de la tarjeta de interfaz de red (NIC), y los últimos seis números son el número de serie de la NIC. La dirección de destino puede ser de difusión, que contiene todos números uno, o de unidifusión. La dirección de origen siempre es de unidifusión.
>
> Dirección de origen BelkinIn_9f:6b:8c (14:91:82:9f:6b:8c) Tipo de trama 0x0806 Para las tramas de Ethernet II, este campo contiene un valor hexadecimal que se utiliza para indicar el tipo de protocolo de capa superior del campo de datos. Ethernet II admite varios protocolos de capa superior. Dos tipos comunes de trama son los siguientes
>
> Valor Descripción 0x0800 Protocolo IPv4 0x0806 Protocolo de resolución de direcciones (ARP) Datos ARP Contiene el protocolo de nivel superior encapsulado. El campo de datos tiene entre 46 y 1500 bytes. FCS No se muestra en la captura. Secuencia de verificación de trama, utilizada por la NIC para identificar errores durante la transmisión. El equipo emisor calcula el valor abarcando las direcciones de trama, campo de datos y tipo. El receptor lo verifica.
>
> ¿Qué característica significativa tiene el contenido del campo de dirección de destino? _______________________________________________________________________________________ _______________________________________________________________________________________ ¿Por qué envía la PC un ARP de difusión antes de enviar la primera solicitud de ping?
>
> _______________________________________________________________________________________ _______________________________________________________________________________________ _______________________________________________________________________________________ ¿Cuál es la dirección MAC del origen en la primera trama? _______________________ ¿Cuál es el identificador de proveedor (OUI) de la NIC del origen? __________________________ ¿Qué porción de la dirección MAC corresponde al OUI?
>
> _______________________________________________________________________________________ ¿Cuál es el número de serie de la NIC del origen? _________________________________
>
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet
>
> Parte 2: Utilizar Wireshark para capturar y analizar tramas de Ethernet En la parte 2, utilizará Wireshark para capturar tramas de Ethernet locales y remotas. Luego, examinará la información que contienen los campos de encabezado de las tramas. Paso 1: Determinar la dirección IP del gateway predeterminado de la PC Abra una ventana del símbolo del sistema y emita el comando ipconfig.
>
> ¿Cuál es la dirección IP del gateway predeterminado de la PC? ________________________ Paso 2: Comenzar a capturar el tráfico de la NIC de la PC
>
> - Cierre Wireshark. No es necesario guardar los datos capturados.
>
> - Abra Wireshark e inicie la captura de datos.
>
> - Observe el tráfico que aparece en la ventana Packet List (Lista de paquetes).
>
> Paso 3: Filtrar Wireshark para que solamente se muestre el tráfico ICMP Puede usar el filtro de Wireshark para bloquear la visibilidad del tráfico no deseado. El filtro no bloquea la captura de datos no deseados, sino lo que se muestra en pantalla. Por el momento, solo se debe visualizar el tráfico ICMP.
>
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet
>
> En el cuadro Filter (Filtro) de Wireshark, escriba icmp. Si escribió el filtro correctamente, el cuadro debe volverse de color verde. Si el cuadro está de color verde, haga clic en Apply (Aplicar) (la flecha hacia la derecha) para que se aplique el filtro.
>
> Paso 4: En la ventana del símbolo del sistema, hacer un ping al gateway predeterminado de la PC En la ventana del símbolo del sistema, haga un ping al gateway predeterminado con la dirección IP registrada en el paso 1. Paso 5: Dejar de capturar el tráfico de la NIC Haga clic en el ícono Stop Capture (Detener captura) para dejar de capturar el tráfico.
>
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet
>
> Paso 6: Examinar la primera solicitud de eco (ping) en Wireshark La ventana principal de Wireshark se divide en tres secciones: el panel Packet List (Lista de paquetes) en la parte superior, el panel Packet Details (Detalles del paquete) en el centro y el panel Packet Bytes (Bytes del paquete) en la parte inferior. Si seleccionó la interfaz correcta para la captura de paquetes en el paso 3, Wireshark debería mostrar la información de ICMP en el panel Packet List (Lista de paquetes), de manera similar a la del siguiente ejemplo.
>
> - En el panel Packet List (Lista de paquetes) de la parte superior, haga clic en la primera trama de la lista.
>
> Debería ver el texto Echo (ping) request (Solicitud de eco [ping]) debajo del encabezado Info (Información). Con esta acción, se debe resaltar la línea con color azul.
>
> - Examine la primera línea del panel Packet Details (Detalles del paquete) de la parte central. En esta
>
> línea, se muestra la longitud de la trama (en el ejemplo, 74 bytes).
>
> - En la segunda línea del panel Packet Details (Detalles del paquete), se muestra que es una trama de
>
> Ethernet II. También se muestran las direcciones MAC de origen y de destino. ¿Cuál es la dirección MAC de la NIC de la PC? ________________________ ¿Cuál es la dirección MAC del gateway predeterminado? ______________________
>
> - Puede hacer clic en el signo más (+) al principio de la segunda línea para obtener más información sobre
>
> la trama de Ethernet II. Observe que el signo más se transforma en un signo menos (-). ¿Qué tipo de trama se muestra? ________________________________
>
> - En las últimas dos líneas de la parte central, se proporciona información sobre el campo de datos de la
>
> trama. Observe que los datos contienen información sobre las direcciones IPv4 de origen y de destino. ¿Cuál es la dirección IP de origen? _________________________________ ¿Cuál es la dirección IP de destino? ______________________________
>
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet
>
> f. Puede hacer clic en cualquier línea de la parte central para resaltar esa parte de la trama (hexadecimal y ASCII) en el panel Packet Bytes (Bytes del paquete) de la parte inferior. Haga clic en la línea Internet Control Message Protocol (Protocolo de mensajes de control de Internet) de la parte central y examine lo que se resalta en el panel Packet Bytes (Bytes de paquete).
>
> ¿Qué texto muestran los últimos dos octetos resaltados? ______
>
> - Haga clic en la siguiente trama de la parte superior y examine una trama de respuesta de eco. Observe
>
> que las direcciones MAC de origen y de destino se invirtieron porque esta trama se envió desde el router del gateway predeterminado como respuesta al primer ping. ¿Qué dispositivo y qué dirección MAC se muestran como dirección de destino? ___________________________________________ Paso 7: Reiniciar la captura de paquetes en Wireshark Haga clic en el ícono Iniciar captura para iniciar una nueva captura de Wireshark. Se muestra una ventana emergente que le pregunta si desea guardar los anteriores paquetes capturados en un archivo antes de iniciar la nueva captura. Haga clic en Continue without Saving (Continuar sin guardar).
>
> Paso 8: En la ventana del símbolo del sistema, hacer ping a www.cisco.com Paso 9: Dejar de capturar paquetes Paso 10: Examinar los nuevos datos del panel de Packet List (Lista de paquetes) de Wireshark En la primera trama de solicitud de eco (ping), ¿cuáles son las direcciones MAC de origen y de destino?
>
> Origen: _________________________________ Destino: ______________________________
>
> Práctica de laboratorio: Uso de Wireshark para examinar las tramas de Ethernet
>
> ¿Cuáles son las direcciones IP de origen y de destino que contiene el campo de datos de la trama? Origen: _________________________________ Destino: ______________________________ Compare estas direcciones con las direcciones que recibió en el paso 6. La única dirección que cambió es la dirección IP de destino. ¿Por qué cambió la dirección IP de destino mientras que la dirección MAC permaneció igual?
>
> _______________________________________________________________________________________ _______________________________________________________________________________________ _______________________________________________________________________________________ _______________________________________________________________________________________ Reflexión En Wireshark, no se muestra el campo de preámbulo de un encabezado de trama. ¿Qué contiene el preámbulo?
>
> _______________________________________________________________________________________ _______________________________________________________________________________________ _______________________________________________________________________________________
