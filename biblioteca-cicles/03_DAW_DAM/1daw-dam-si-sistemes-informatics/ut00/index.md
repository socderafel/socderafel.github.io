---
layout: default
title: "UD1 — INTRODUCCIÓ AL PROGRAMARI BASE I A LA VIRTUALITZACIÓ · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT0 Completa"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut00/ut0001.html"
next_label: "1.1 TRANSPARÈNCIES UNITAT 1 ➡️"
---

# 📘 UD1 — INTRODUCCIÓ AL PROGRAMARI BASE I A LA VIRTUALITZACIÓ (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**1.1 TRANSPARÈNCIES UNITAT 1**](./ut0001.md)
- [**1.2 SI: ENLLAÇ RENDIMENT CPU**](./ut0003.md)
- [**1.3 DIASPOSITIVES UD1 PART 1**](./ut0004.md)
- [**1.4 SI: TAULA DE TOPOLOGIES LAN**](./ut0005.md)
- [**1.5 SI: TEORIA XARXES UD1**](./ut0006.md)

---

# 1.1 TRANSPARÈNCIES UNITAT 1

> **🔗 Recurs Web: SI: GENERACIÓ DE PROCESSADORS INTEL**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=UWgdTdUOn_A) ↗️**](https://www.youtube.com/watch?v=UWgdTdUOn_A)

> **🔗 Recurs Web: SI: GENERACIÓ DE PROCESSADORS AMD**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=P7P53PKMc7Y) ↗️**](https://www.youtube.com/watch?v=P7P53PKMc7Y)

> **🔗 Recurs Web: VÍDEO: SERVICIOS NECESARIOS PARA QUE FUNCIONE INTERNET**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=rw41W8crZ_Y) ↗️**](https://www.youtube.com/watch?v=rw41W8crZ_Y)

> **🔗 Recurs Web: VÍDEO: INTRODUCCIÓN A LOS CONTROLADORES DE DOMINIO**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=TW6I4Ad6sZI&t=601s) ↗️**](https://www.youtube.com/watch?v=TW6I4Ad6sZI&t=601s)

---

Unitat 1. Introducció al programari de base i a la virtualització SISTEMES INFORMÀTICS 1er Grau Superior Desenvolupament d’Aplicacions Web

### 1. Introducció al programari base

- Actualment es genera molta informació, i s’ha de saber manipular.
- Els sistemes informàtics saben com automatitzar-la i simplificar-la.

1.1 Estructura i components d’un sistema informàtic Tres parts son fonamentals: màquines, programes i recursos humans “Com millor funcione la interrelació entre els 3 elements, millor serà el tractament que podrem fer de les dades que componen la informació que volem tractar”

1.1.1 La informació Elements de la informació La informació està formada per dades: són tot allò que forma part de la informació

1.1.1 La informació

- Representació de la informació
- Per a un ordinador totes les dades són nombres: xifres, lletres,

qualsevol símbol, i fins i tot les instruccions i ho representa en forma de zeros i uns.

- Per este motiu utilitza el sistema binari
- Mesura de la informació

1.1.1 La informació Actualment s’utilitzen prefixos del SI o bé prefixos binaris (IEC 60027-2) Mesura de velocitats (SI) A mida que augmenten els prefixos (Gibi, Tebi, ... ) també s’incrementa la diferència entre els dos sistemes. PER TANT CAL PARAR ATENCIÓ a la utilització correcta de les unitats.

1.1.1 La informació

- Codificació de la informació

¿Què entenem per codificació? Codificació es una manera de convertir les dades que es volen emmagatzemar (exemple , del 0 al 9, sistema de codificació aràbic o índic aràbic) -> els Hispano àrabs de Al-Àndalus ho van introduir a Europa, encara que ho varen inventar a la Índia.

1.1.1 La informació Per a la representació de nombres és habitual la utilització de codis numèrics.

1.1.1 La informació Altres codificacions, definides per l’ISO (ISO 8859-1 en Europa) i per Microsoft usades en el sistema operatiu: codificació Windows-1250 per als sistemes llatins. Al Sistema Linux, ens demana quina CODIFICACiÓ en la instal·lació-> ISO 8859-1 o ISO 8859-15 Per a la representació de caràcters alfabètics o alfanumèrics s’utilitza

1.1.1 La informació

- Tractament de la informació

3 OPERACIONS: Entrada Procés aritmètic o lògic Eixida NEIX EL TERME INFORMÀTICA

---

# 1.2 SI: ENLLAÇ RENDIMENT CPU

Mireu este enllaç

https://territoriointel.xataka.com/que-relacion-cpu-ram-almacenamiento-decide-rendimiento/

---

# 1.3 DIASPOSITIVES UD1 PART 1

VON NEUMANN, MICROPROCESSADOR, PLACA BASE, COMPONENTS

SISTEMAS INFORMÁTICOS

### UNIDAD 1

EXPLOTACIÓN DE SISTEMAS MICROINFORMÁTICOS

Índice 1.1 La arquitectura de los ordenadores 1.1.1 La máquina de Turing 1.1.2 La arquitectura Harvard 1.1.3 La arquitectura Von Neumann 1.2 El sistema informático 1.3 Los componentes físicos de un sistema informático 1.3.1 Componentes de la placa base 1.3.2 El microprocesador 1.3.3 La memoria RAM 1.3.4 Memoria gráfica o de vídeo 1.3.5 Buses y ranuras de expansión 1.3.6 Puertos y conectores 1.3.7 Unidades de almacenamiento secundario 1.3.8 Tarjetas de expansión 1.3.9 Dispositivos externos de entrada/salida. Periféricos

1.1 LA ARQUITECTURA DE LOS ORDENADORES 1.1.1 LA MÁQUINA DE TURING Alan Mathison Turing desarrolló un modelo computacional que permitía resolver cualquier problema matemático siempre y cuando se redujera a un algoritmo. Este modelo se considera el precursor de la computación digital morderna. Según Turing, se demuestra que un problema es computable si se puede construir una máquina de Turing capaz de llevar a cabo el procedimiento para resolverlo.

1.1.1 LA MÁQUINA DE TURING. COMPONENTES Una máquina de Turing consiste, básicamente, en una cinta infinita (memoria), dividida en casillas. Sobre esta cinta hay un dispositivo capaz de desplazarse a lo largo de ella a razón de una casilla cada vez. Este dispositivo cuenta con un cabezal capaz de leer un símbolo escrito en la cinta, o de borrar el existente e imprimir uno nuevo en su lugar. Por último, contiene además un registro (procesador) capaz de almacenar un estado cualquiera, el cual viene definido por un símbolo.

Ver ejemplo

1.1 LA ARQUITECTURA DE LOS ORDENADORES 1.1.2 LA ARQUITECTURA HARVARD Tiene la memoria de datos separada de la memoria de instrucciones para mejorar el rendimiento. El inconveniente es que tiene que dividir la caché entre las dos memorias. Funciona mejor cuando la frecuencia de lectura de istrucciones y datos es más o menos la misma.

Se utiliza en procesadores de señal digital, usados en productos para procesamiento de audio y vídeo.

1.1 LA ARQUITECTURA DE LOS ORDENADORES 1.1.3 LA ARQUITECTURA VON NEUMANN En 1944, John von Neumann describió un computador que almacenaba los programas y los datos en una misma memoria. Según esta arquitectura, un ordenador está formado por:  ALU (Unidad Aritmético-Lógica): realiza cálculos, comparaciones y toma decisiones lógicas.

 UC (Unidad de Control): interpreta las instrucciones del programa.  Memoria: formada por elementos que permiten almacenar y recuperar la información y registros que almacenan temporalmente la información.  Sistemas de Entrada/Salida: permiten la comunicación con los dispositivos periféricos  Bus de datos: proporcionan un medio de transporte entre las distintas partes.

Arquitectura de Von Neumann

1.2 EL SISTEMA INFORMÁTICO Conjunto de partes interrelacionadas (HW, SW y componentes humanos) que permiten almacenar y procesar infomación

1.3 COMPONENTES FÍSICOS DE UN SISTEMA INFORMÁTICO Torre, caja o carcasa Fuente de alimentación: transforma la corriente alterna en contínua. Sistema de refrigeración Placa base: elemento importante del ordenador. A ella se conectan el resto de componentes. Microprocesador: circuito integrado compuesto por millones de transistores. Encargado de realizar las operaciones aritmético-lógicas, de control y comunicación con el resto de componentes. Es el cerebro del ordenador.

 Circuito impreso (PCB): conectar eléctricamente componentes electrónicos.  Socket o zócalo del procesador.  Zócalos de memoria: ranuras donde se colocan los módulos de memoria.  Zócalos de expansión (de buses): ranuras para agregar características y aumentar el rendimiento del ordenador.

 Chipset: conjunto de circuitos electrónicos que realiza la gestión de la trasnferencia de datos entre los distintos componentes del ordenador 1.3.1 COMPONENTES DE LA PLACA BASE

1.3.1 COMPONENTES DE LA PLACA BASE (II)  El chipset se divide en:  Northbridge, que une los componentes más rápidos (microprocesador, mem. RAM y unidad de procesamiento gráfico.  SouthBridge, que se encarga de unir los perifericos y dispositivos de almacenamiento (disco duro, ratón, teclado, puertos,...)  BIOS: programa registrado en una memoria no volátil (antes ROM, ahora flash). Identifica los componentes pricipales del ordenador y proporciona acceso y control a todos ellos.

1.3.1 COMPONENTES DE LA PLACA BASE (III)  Pila o batería: proporciona la electricidad necesaria para almacenar cierta información cuando el ordenador no está encendido.  Conector de alimentación: es donde se conecta la fuente de alimentación.  Jumpers: permiten interconectar dos terminales de manera temporal. Una de sus aplicaciones más habituales es en las unidades IDE (discos duros y uds. discos ópticos) donde se usan para distinguir entre el dispositivo “maestro” y el “esclavo”.

 Pines: se conectan pares trenzados de cables que van al botón de encendido, reset, altavoz, led actividad disco duro,...  Puertos externos o controladores: se usan para conectar los periféricos al ordenador (teclado, ratón (PS2), USB, impresora (paralelo),etc.)

1.3.2 EL MICROPROCESADOR Una CPU puede estar soportada por varios microprocesadores. Es lo que se llama procesador multinúcleo y combina 2 o más procesadores independientes en un solo circuito integrado. El rendimiento del procesador se puede medir de varias formas

 Frecuencia de reloj: indica la velocidad a la que un ordenador realiza las operaciones básicas. Se mide en ciclos por segundo (Hercios). Ultimamente se ha estabilizado entre los 2- 4Ghz, pues no se requiere frecuencias más altas para aumentar la capacidad e proceso.

 Velocidad del bus  Memoria Caché: más rápida que la RAM. Almacena los datos que se prevée que se van a usar. Los microprocesadores deben tener un sistema de disipación de calor para refrigerarse.

1.3.3 LA MEMORIA RAM Memoria de acceso aleatorio: es donde se guardan los datos que se están utilizando en el momento actual. Es una memoria volátil: el almacenamiento es temporal. Los datos y programas permanecen mientras el ordenador está encendido. Hay distintos modelos de memoria RAM: enlos ordenadores antiguos se usa memorias DIMM.

Actualmente se usan memorias DDR, DDR2 y DDR3, que funcionan al doble de velocidad que las primeras. Parámetros:  Tiempo de acceso: cuanto menor tiempo de acceso, más rápida.  Velocidad de reloj  Voltaje: normalmente cuanto más alto, mayor consumo y temperatura.  Tecnologías soportadas: Single Memory Chanel(1 canal intercambio información) y Dual Memory Channel (2 canales simultáneos)

1.3.4 MEMORIA DE VÍDEO O GRÁFICA Utilizada por el controlador de la tarjeta gráfica para manejar toda la información visual 1.3.5 BUSES Y RANURAS DE EXPANSIÓN Interconectan los distintos componentes del ordenador  PCI: se utilizan para conectar tarjetas de propósito general (red, sintonizadorea TV, sonido...). Son de color blanco.

 PCI Express: evolución de PCI, más rápido. Se usa para tarjetas gráficas.  AGP: se usa para conectar la tarjeta gráfica. Es de color marrón.

1.3.6 PUERTOS Y CONECTORES Son conectores externos que podemos encontrar en los ordenadores para conectar periféricos.  Puertos serie: sólo pueden transferir un bit a la vez. En muchos periféricos se está remplazando por USB.  Puertos paralelos: pueden transferir varios bits a la vez, por lo que son más rápidos que los serie.

 Puertos USB: permiten conectar/desconectar dispositivos con el ordenador encendido (Plug and Play).  Conector RJ-45, de la tarjeta de red.  Conector VGA (V ideo Graphic Adapter): para monitores y proyectores  DVI (Digital Visual Interface): monitores. Transmite en formato digital.

 HDMI (High-Definition Multimedia Interface): norma de audio y vídeo digital para ser sustituto del euroconector.

 IDE, Serial ATA: conectan dispositivos de almacenamiento masivo de datos (discos duros, discos ópticos).  Puertos Jack (conectores de audio): para conectar altavoces, micrófono,...  Puertos PS/2: para conectar teclados y ratones.

1.3.7 UNIDADES DE ALMACENAMIENTO SECUNDARIO Debido a que la información de la memoria RAM desaparece al apagar el ordenador se necesitan dispositivos para almacenarla permanentemente. Existen varias tecnologias:  Almacenamiento magnético: dispositivos formados por una pieza metálica o de plástico con una capa de material magnético que permite almacenar información binaria.

 DISCO DURO: formado por varios discos rígidos apilados, unidos por un eje. Cada dos discos hay espacio para que puedan moverse las cabezas de lectura/escritura.Partes:  Plato: cada uno de los discos existentes.  Cara: cada uno de los lados de un plato.  Cabeza: número de cabezales.

 Pista: cada uno de los anillos concéntricos en que se dividen las caras.  Cilndro: conjunto de varias pistas que están alineadas verticalmente (una de cada cara)  Sector: cada una de las divisiones de una pista

 Tipos de conexión de los discos duros:  IDE  SCSI  SATA  SAS  Estructura lógica

- Sector de arramque (Master Boot Record). Es el primer sector

del disco duro. En él se almacena la tabla de particiones y un pequeño programa master de inicialización, llamado también Master Boot. Es el encargado de leer la tabla de particiones y ceder el control al sector de arranque de la partición activa.

- Tabla de particiones y particiones. Diferentes divisiones de

una unidad física. Existen de 3 tipos:  Primarias (sólo puede haber 4)  Extendidas (1 por disco). Contiene part. lógicas.  Lógicas (hasta 23). Ocupa toda o parte de 1 part. Ext. Formatos FAT, NTFS, EXT2, EXT3, EXT4, FAT32,...

Almacenamiento óptico: los discos ópticos utilizan un soporte de alumninio y policarbonato. Utilizan la luz de un láser para leer o grabar información. LA unidad de CD está constituida por un motor que hace girar el disco y un rayo láser que recorre el disco. La luz láser rebota en la superfici del disco o se dispersa si hay una hendidura, interpretando unos y ceros. Existe otro láser de más intensidad que permite modificar las hendiduras consiguiendo grabar o borrar el disco.

CD-ROM (700 MB) CD-R CD-RW DVD (4,7GB – 9GB) Blu-Ray (25 - 50GB)

Almacenamiento electrónico: este tipo de memorias usan chips. Existen distintos tipos de memorias electrónicas, como pendrives y tarjetas de memoria, que para conectarlas al ordenadores necesitas un lector de tarjetas. Existen varios formatos de tarjetas de memoria

 CompactFlash  Memory Stick  SmartMedia  SD  MiniSD  MicroSD

1.3.8 TARJETAS DE EXPANSIÓN TARJETA GRÁFICA Se encarga de procesar los datos que vienen de la CPU y transformarlos en información comprensible y representable en un dispositivo de salida (monitor, proyector) Puede aparecer como una tarjeta de expansión o integrada en la placa base.

A veces puede ser necesario un procesador que se encarge de las tareas de los gráficos y libere un poco a la CPU.

1.3.9 DISPOSITIVOS EXTERNOS DE E/S. PERIFÉRICOS Componentes del ordenador que amplian su funcionalidad básica. Se pueden clasificar en: Dispositivos de entrada: permiten introducir datos en el ordenador(teclado, ratón, escáner, …) Dispositivos de salida: son utilizados para mostrar información generada o contenida en el ordenador (impresora, monitor, altavoz, …) Dispositivos de E/S o comunicación: permiten la entrada y salida de información (pantalla táctil, impresora multifunción, módem, router, switch, etc.) Dispositivos de almacenamiento: para guardar datos de forma permanente o leer los datos almacenados (disco duro, pendrive, ...)

---

# 1.4 SI: TAULA DE TOPOLOGIES LAN

TABLA ON ES MOSTREN LES TOPOLOGIES DE XARXA MÉS IMPORTANTS

| UD1: INTRODUCCIÓ AL PROGRAMARI DE BASE I A LA VIRTUALITZACIÓ |
| --- |

---

# 1.5 SI: TEORIA XARXES UD1

ATENCIÓ: D'ESTE DOCUMENT PDF NOMÉS VEUREM EN ESTA UNITAT FINS ON POSA "SUBREDES IP". ÉS A DIR, ESTUDIEU ESTE DOCUMENT PERÒ NOMÉS FINS ON POSA "SUBREDES IP". A PARTIR DE AHÍ JA NO HO VOREM EN ESTA UNITAT.

Direccionamiento IP Dirección IP La dirección IP es el número que identifica a un ordenador en la red. Está formado por 32 bits (4 bytes). Se escribe como 4 números, de 0 a 255, separados por puntos. Cada uno de los números sería 1 byte de la dirección IP. Ejemplo: 192.168.0.5 10.0.2.168 1.2.3.4 Para conocer nuestra dirección IP debemos abrir una ventana de interfaz de comandos (Ejecutar>cmd) y escribir ipconfig.

En linux deberemos abrir un terminal y escribir ifconfig. Clases de direcciones IP Según los primeros bits de la dirección IP, se diferencian los siguientes tipos o clases

CLASE A • El primer bit de la parte de la red es siempre un 0. • Los posibles valores de la parte de la red van de 0 a 127, si bien los extremos, 0 y 127, están reservados. • Se utilizan en redes muy grandes, con muchísimos hosts (hasta 224 = 16 millones). Los últimos 24 bits (o los correspondientes 3 últimos números decimales) identifican el host.

CLASE B • Los dos primeros bits de la parte de la red son 10. • Los posibles valores de la parte de la red van de 128.0 a 191.255 (214 = 16.384 redes). • Se utilizan en redes grandes con muchos hosts (hasta 216 = 65.536 hosts). CLASE C • Los posibles valores de la parte de la red van de 192.0.0 a 223.255.255 (221 = 2.097.152 redes).

• Se utiliza en redes pequeñas, con pocos hosts (hasta 28 = 256 hosts) CLASE D • Son direcciones especiales utilizadas para enviar un datagrama IP a un grupo de hosts. • Los posibles valores van de 224.0.0.0 a 239.255.255.255 Cabe decir que, las direcciones de clase E (aunque su utilización será futura) comprenden el rango desde 240.0.0.0 hasta el 247.255.255.255.

Direcciones con significado especial Cuando en una dirección IP, la parte de la red o la parte del host están compuestas por todo ceros o

por todo unos, esa dirección se interpreta de una manera especial. La utilización de todo ceros para la red sólo está permitida durante el procedimiento de iniciación de la máquina. Permite que una máquina se comunique temporalmente. Una vez que la máquina “aprende” su red y dirección IP correctas, no debe utilizar la red 0.

Las direcciones 127.x.y.z están reservadas para “loopback testing” (para testear comunicaciones entre procesos dentro de la misma máquina). Los paquetes direccionados 127.x.y.z no se envían realmente, sino que son procesados localmente y tratados como paquetes entrantes.

Por otra parte, existen una serie de direcciones IP reservadas para definir redes TCP/IP aisladas, es decir, no conectadas a Internet. Por último, hay que saber que, por convención, no se asigna a ninguna máquina una dirección IP con número de host 0. Máscara de subred Los ordenadores forman redes. Todos los ordenadores que están dentro de una red comparten parte de la dirección IP. Lo más habitual es que los tres primeros números de la dirección sean iguales y varíe el último, pero no siempre es así. Para saber la parte fija se utiliza la máscara de subred.

La máscara de subred es un número de 32 bits, como la dirección IP, con la particularidad de que todos los 1s están juntos a la izquierda y los 0s a la derecha. Los 1s nos indican la parte fija de la dirección IP. Es decir, si una máscara tiene 18 unos y 14 ceros, las direcciones IP de esa red tendrán los primeros 18 números obligatoriamente iguales, mientras que el resto podrán ser distintos.

La máscara de subred se escribe, igual que la dirección IP, como 4 números separados por punto, aunque sólo son válidos algunos números (los que en binario cumplan la condición de unos y ceros anteriormente explicada). Según la clase de la red, tendremos las siguientes máscaras

• Clase A: 255.0.0.0 /8 • Clase B: 255.255.0.0 /16

• Clase C: 255.255.255.0 /24 Por ejemplo, una máscara de subred podría ser 255.255.255.0, que en binario se escribe (11111111 11111111 11111111 00000000); o por ejemplo 255.240.0.0 (11111111 11110000 00000000 00000000). Sin embargo no sería válida esta máscara 255.255.244.0 (1111111 1111111 11110100

- ya que hay un 1 intercalado entre ceros.

Para saber si un ordenador está en nuestra red, tenemos que pasar a binario nuestra dirección, nuestra máscara de subred, y la dirección IP que queremos comparar. Una vez en binario, debemos comprobar si la parte de la máscara con unos es igual en ambas direcciones o no. Si es igual, estrará en nuestra red.

Para conocer nuestra máscara de subred se debe utilizar el mismo comando que se usa para saber cuál es nuestra dirección IP (Ejecutar>cmd y luego escribir ipconfig). Ejemplo: mi IP: 192.168.12.10; mi máscara 255.255.254.0; la dirección IP que quiero saber si está en mi red 192.168.13.5. Debemos pasar los 3 números a binario, comprobar que la máscara de subred sea válida, y comparar.

192.168.12.10 → 11000000 10101000 00001100 00001010 255.255.254.0 → 11111111 11111111 11111110 00000000 → Es válida 192.168.13.5 → 11000000 10101000 00001101 00000101 Vemos que la parte de la máscara con unos (los primeros 23 bits) es común en ambas direcciones, por lo que los ordenadores estarán en la misma subred.

> **✍️ Ejercicio: comprueba en cada caso si los ordenadores pertenecen a**
> Ejercicio: comprueba en cada caso si los ordenadores pertenecen a la misma subred o no. (Ayuda: cuando las máscaras son todo 255 ó 0 no hace falta pasar a binario porque se pueden comparar directamente los números de la dirección IP. Es decir, sólo habría que pasar a binario el octeto de la IP y máscara que no tenga ese valor).

Mi IP: 158.42.4.23 Mi máscara: 255.255.0.0 IP1: 158.42.4.22 IP2: 158.43.41.19 IP3: 159.42.4.23 Mi IP: 10.2.65.1 Mi máscara: 255.255.248.0 IP1: 10.2.66.23 IP2: 10.2.64.12 IP3: 10.2.71.248 Dirección de red y de broadcast Dentro de las direcciones posibles de una red hay 2 que son especiales: la primera y la última. Estas direcciones no se pueden utilizar en ningún ordenador o máquina de la red.

La primera dirección es la dirección de red. Identifica a toda la red, no a un ordenador en particular. La dirección de nuestra red tendrá los primeros bits iguales a la nuestra (los que coincidan con los unos de la máscara) y los últimos iguales a cero. Ejemplo: Mi IP: 10.10.15.16 → 00001010 00001010 00001111 00010000 Mi máscara: 255.255.255.192 → 11111111 11111111 11111111 11000000 La dirección de la red será → 00001010 00001010 00001111 00000000 → 10.10.15.0 (Fijaos que los bytes de máscara con 255 se quedan igual, y si hubiera alguno con 0 se pondría 0 directamente en la dirección de red).

La dirección de broadcast (o difusión) es la última dirección de la red. Se utiliza para enviar información a todos los ordenadores a la vez. Como en el caso anterior, la dirección de broadcast red tendrá los primeros bits iguales a la nuestra (los que coincidan con los unos de la máscara), pero ahora los últimos iguales a uno.

> **💡 Apunt Tècnic**
> Ejemplo: Mi IP: 10.10.15.16 → 00001010 00001010 00001111 00010000 Mi máscara: 255.255.255.192 → 11111111 11111111 11111111 11000000 La dirección de la red será → 00001010 00001010 00001111 001111111 → 10.10.15.31 (Fijaos que ahora los bytes de máscara con 255 se quedan igual, y si hubiera alguno con 0 se pondría 255 directamente en la dirección de broadcast).

> **✍️ Ejercicio: escribe la dirección de red y de broadcast de las sigu**
> Ejercicio: escribe la dirección de red y de broadcast de las siguientes combinaciones de IP y máscara. IP: 54.65.158.3 Máscara: 255.255.0.0 IP: 154.198.26.123 Máscara: 255.255.248.0 IP: 9.87.54.16 Máscara: 255.254.0.0 Direcciones públicas y privadas Las direcciones IP, como identifican a un ordenador, no se pueden repetir. Así que una dirección de un servidor web no podrá ser igual a la de ningún otro ordenador de Internet. Para conseguirlo hay una organización (ICANN) que reparte las direcciones entre las empresas u organismos a los que les hace falta.

Sin embargo, sería absurdo que si queremos hacer una red en nuestra casa tuviéramos que pedir una dirección para que nadie más la pueda utilizar. Para ello se han reservado algunas direcciones IP, que se han llamado direcciones privadas (el resto se llaman direcciones públicas), para que cualquiera pueda utilizarlas dentro de su casa o empresa, con la condición que no se usen en a Internet (al salir de nuestra red, el router la cambia par una dirección pública). Esto también sirve para ahorrar direcciones IP (por ejemplo todos los ordenadores de nuestra casa tienen la misma dirección después de pasar por el router cuando nos conectamos a Internet).

Los rangos de direcciones IP privadas son

Clase Direcciones de red reservadas A 10.0.0.0 B 172.16.0.0 a 172.31.255.255 C 192.168.0.0 a 192.168.255.255 Ejercicio: escribe la primera y última dirección IP de los rangos privados Ejercicio 2: indica cuál de las siguientes direcciones IP se podría utilizar en Internet (es pública) 1.2.3.4 192.168.2.36 172.28.15.16 10.22.3.65 172.35.62.119 192.169.13.32 Subredes IP Al principio las direcciones IP se asignaban a las organizaciones según se pedían sin tener en cuenta las necesidades reales.

La máscara de subred fue pensada como la solución para aprovechar mejor las direcciones de clase A y B. La máscara de subred parte una única red clase A, B o C en trozos más pequeños. A través de la manipulación de las máscaras de subred, podemos personalizar el espacio de direcciones para configurar la red de acuerdo con nuestras necesidades.

Los hosts utilizan las máscaras de subred para determinar la parte de una dirección IP que se considera como el ID de red. Las direcciones de clase A, B y C utilizan máscaras de subred que cubren los primeros 8, 16 y 24 bits, respectivamente, de direcciones de 32 bits. La red lógica que se define a través de una máscara de subred se conoce como una subred.

Las máscaras de subred predeterminadas se utilizan en redes que no necesitan ser subdivididas. Por ejemplo, en una red formada por 100 ordenadores conectados exclusivamente a través de tarjetas Gigabit Ethernet, cables y conmutadores, los hosts se podrán comunicar unos con otros a través de la red local. No se necesita un enrutador para proteger la red de excesivos mensajes de difusión o para conectar hosts situados en segmentos físicos separados. Para estos sencillos requerimientos, un ID de red de clase C, como la mostrada en la imagen siguente, es suficiente.

Dividir en subredes una red es la práctica de subdividir de forma lógica el espacio de direcciones de una red, extendiendo la cadena de bits iguales a 1, utilizada en la máscara de subred de una red. Esta extensión permite crear múltiples subredes dentro del espacio de direcciones de la red original.

Veamos un ejemplo donde dividiremos una red de clase B, cuya máscara de subred predeterminada es 255.255.0.0. Extenderemos la máscara de subred a 255.255.255.0. Mientras que el espacio de direcciones de clase B está formado por una única subred formada por 65.534 hosts, con la nueva máscara de subred configurada se subdivide el espacio original en 256 subredes, con un máximo de 254 hosts permitidos en cada una de ellas.

> **💡 Apunt Tècnic**
> EJEMPLO: Imaginemos una red, 130.252.0.0,(10000010.11111100.00000000.00000000 por el valor de su primer número (130), podemos deducir que se trata de una red de Clase B. Los dos últimos octetos están dedicados a numerar los host conectados a la red, hasta 65534 host, ya que el 1º y el último octeto no se utilizan, que serían los dos últimos octetos a 0 y a 1 respectivamente.

Por lo tanto la mascara de entrada será 255.255.0.0 (11111111.11111111.00000000.00000000) Si nos interesa de forma lógica dividir esta única red en subredes para mejor aprovechamiento, podemos hacerlo dedicando a nombrar subredes parte de los octetos dedicados a nombrar host. Por ejemplo utilizamos el tercer octeto para nombrar subredes y nos quedará el último octeto para nombrar host. De esta manera podremos tener 28 -2 host (254) y el 256 redes.

Para diferenciar esta situación de la inicial, lo que hacemos es modificar la máscara de entrada 255.255.0.0 que es la máscara para redes de clase B, por la 255.255.255.0 ya que ponemos a 1 todos los bits que dedicamos tanto a nombrar redes como a nombrar subredes, los 3 primeros octetos.

De esta manera algunas de las primeras subredes válidas serían: 10000010.11111100.00000000.00000000 130.152.0.0

10000010.11111100.00000001.00000000 130.152.1.0 10000010.11111100.00000010.00000000 130.152.2.0 Y así sucesivamente. Algunos host válidos para algunas de estas redes serían: 10000010.11111100.00000000.00000001 Host 130.252.0.1 Pertenece a 130.252.0.0 10000010.11111100.00000001.00000001 Host 130.252.1.1 Pertenece a 130. 252.1.0 Y así sucesivamente Cuando la máscara de subred predeterminada 255.255.0.0 se utiliza para los host de una red de clase B, como por ejemplo, 129.12.0.0, las direcciones IP 129.12.10.1 y 129.12.11.1 se encuentran dentro de la misma subred, y estos hosts se comunican entre ellos utilizando mensajes de difusión.

Sin embargo, si extendemos la máscara de subred a 255.255.255.0, las direcciones 129.12.10.1 y 129.12.11.1 pertenecen a distintas subredes. Para comunicar un host con otro, los hosts con direcciones 129.12.10.1 y 129.12.11.1 deben enviar paquetes IP a la puerta de enlace predeterminada, la cual es responsable de enrutar el datagrama hacia la subred de destino. Los hosts externos a la red continúan usando la máscara de subred predeterminada para comunicarse con los hosts pertenecientes a la red.

Las siguientes imágenes muestran las dos versiones de esta red. En las imágenes se puede diferenciar 192.12.0.0/16, donde /16 indica que se utilizan 16 bits para nombrar redes y 192.12.10.0/24 donde se utilizan 24 bits para nombrar redes.

Número de hosts en una red Para una dirección de red específica, podemos determinar la cantidad de direcciones de hosts disponibles dentro de la red elevando 2 a la potencia del número de bits existentes en el ID de hosts y restando 2. Por ejemplo, la dirección de red 192.168.0.0/24 reserva 8 bits para el ID de host. Por tanto, puede determinar el número de hosts calculando 28 – 2 que es igual a 254.

El valor 2 elevado a x nos da el número total de posibles combinaciones de bits para un número binario formado por x bits, incluyendo la combinación de todo 0 y todo 1. Ahora bien, todas las combinaciones no pueden ser asignadas a los hosts debido a que algunas direcciones están reservadas

- El ID de host igual a 0 se utiliza para especificar una red y no un host dentro de la red.
- El ID de host con todos los bits a 1 se utiliza para difundir un mensaje (broadcast) a todos los host

de la red. Por este motivo, a la hora de calcular la capacidad de hosts de una red, debemos restar dos a 2x.

Número de subredes en un espacio de direcciones Cuando extendemos la máscara de subred con una cadena de bits igual a 1 para crear varias subredes dentro de un espacio de direcciones, determinaremos el número de subredes disponibles, simplemente calculando 2y, donde y es igual al número de bits existentes en el ID de subred.

Por ejemplo, cuando el espacio de direcciones de la red 129.12.10.0/16 se divide en /24, se reservan 8 bits para el ID de subred. Por tanto, el número de subredes disponibles es igual a 28, ó 256. En este caso no es necesario restar 2 a esta cantidad debido a que los enrutadores modernos (entre los que incluimos el servicio de Enrutamiento y acceso remoto de Windows 2000 Server y Windows Server 2003) aceptan un ID de subred con todos los bits asignados a 0 ó a 1.

Normalmente, cuando estemos configurado un espacio de direcciones y una máscara de subred para satisfacer las necesidades de nuestra red, sabremos cuantas subredes necesitaremos crear y deberemos averiguar el número de bits suficiente para el ID de subred de manera que pueda incluir todas las subredes.

Hosts por subredes EL cálculo del número posible de ID de host por subred es el mismo que el que se utiliza para calcular el número de ID de host por red. Cuando se ha dividido en subredes el espacio de direcciones de la red, el valor 2x – 2 (donde x es igual al número de bits presentes en el ID de host) nos da el número de hosts, por subred.

Por ejemplo, debido a que el espacio de direcciones 129.12.10.0/24 reserva 8 bits para el ID de host, el número de hosts disponibles por subred es igual a 28 – 2 ó 254. Para calcular el número de hosts disponibles en toda la red, simplemente multiplicamos este valor por el número de subredes disponibles. Siguiendo con el ejemplo, el espacio de direcciones 129.12.0.0/24 nos da 254 x 256, ó 65.024 hosts en total.

Ejemplos de subredes En el ejemplo anterior, el espacio de direcciones original 129.12.0.0/16 fue dividido extendiendo la máscara de subred a 255.255.255.0. En la práctica, la cadena de bits iguales a 1 dentro de una máscara de subred puede ser extendida en cualquier número de bits, no solamente en un número equivalente a un octeto.

Dependiendo del número de subredes requeridas, el administrador extenderá la máscara de subred. La siguiente tabla muestra las posibles subredes de una red de clase B. Número de subredes requeridas Número bits extendidos Máscara de Subred Número de host por subred 1-2 255.255.128.0 ó /17 32.766 3-4 255.255.192.0 ó /18 16.382 5-8 255.255.224.0 ó /19 8.190 9-16 255.255.240.0 ó /20 4.094 17-32 255.255.248.0 ó /21 2.046 33-64 255.255.252.0 ó /22 1.022

65-128 255.255.254.0 ó /23 129-256 255.255.255.0 ó /24 257-512 255.255.255.128 ó /25 513-1.024 255.255.255.192 ó /26 1.025-2.048 255.255.255.224 ó /27 2.049-4.096 255.255.255.240 ó /28 4.097-8.192 255.255.255.248 ó /29 8.193-16.384 255.255.255.252 ó /30 En la tabla anterior, se muestra como una red de clase B junto con la máscara de subred personalizada 255.255.248.0 ó /21, resultado de extender la máscara de subred predeterminada en 5 bits, nos permite configurar hasta 32 subredes con hasta 2.046 host cada una.

Supongamos que nuestro proveedor de acceso a Internet (ISP) nos ha asignado la dirección de red 210.25.2.0 (Clase C). Si expresamos nuestra dirección de red en binario tendremos: 210.25.2.0 = 11010010.00011001.00000010.00000000 Con lo que tenemos 24 bits para identificar la red (en rojo) y 8 bits para identificar los host (en azul).

La máscara de red será

- en binario : 11111111.11111111.11111111.00000000
- en decimal: 255.255.255.0
- en notación prefijo de red: /24

Para crear subredes a partir de una dirección IP de red padre, la idea es "robar" bits a los host, pasándolos a los de identificación de red. ¿Cuántos? Bueno, depende de las subredes que queramos obtener, teniendo en cuenta que cuántos más bits robemos, más subredes obtendremos, pero con menos host cada una. Por lo tanto, el número de bits a robar dependerá de las necesidades de funcionamiento de la red final.

Supongamos que necesitamos 6 subredes. Necesitaremos pasar 3 bits de los hosts a la identificación de la red. 11010010.00011001.00000010.rrr00000 (red en rojo, hosts en azul) Ahora la máscara de red será

- en binario : 11111111.11111111.11111111.11100000
- en decimal: 255.255.255.224
- en notación prefijo de red: /27

podremos tener hasta 8 subredes (23) y hasta 30 hosts por subred (25 – 2) Subred Rango IPs hosts Broadcast 210.25.2.0 210.25.2.1 - 210.25.2.30 210.25.2.31 210.25.2.32 210.25.2.33 - 210.25.2.62 210.25.2.63 210.25.2.64 210.25.2.65 - 210.25.2.94 210.25.2.95 210.25.2.96 210.25.2.97 - 210.25.2.126 210.25.2.127

210.25.2.128 210.25.2.129 - 210.25.2.158 210.25.2.159 210.25.2.160 210.25.2.161 - 210.25.2.190 210.25.2.191 210.25.2.192 210.25.2.193 - 210.25.2.222 210.25.2.223 210.25.2.224 210.25.2.225 - 210.25.2.254 210.25.2.255

---
