---
layout: default
title: "UD5 — GESTIÓ DE LA INFORMACIÓ · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD5 — GESTIÓ DE LA INFORMACIÓ"
prev_url: "../ut04/ut0402.html"
prev_label: "⬅️ 4.2 TEORIA SUBNETTING"
next_url: "../ut05/ut0501.html"
next_label: "5.1 GUIA DE LA UNITAT 5 ➡️"
---

# 📘 UD5 — GESTIÓ DE LA INFORMACIÓ (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**5.1 GUIA DE LA UNITAT 5**](./ut0501.md)
- [**5.2 TEORIA UNITAT 5 PART 1**](./ut0502.md)
- [**5.3 TEORIA UNITAT 5 PART 2**](./ut0503.md)
- [**5.4 TEORIA UNITAT 5 PART 3**](./ut0504.md)
- [**5.5 TEORIA UNITAT 5 PART 4**](./ut0505.md)
- [**5.6 TEORIA UNITAT 5 PART 5**](./ut0506.md)
- [**5.7 TEORIA UNITAT 5 PART 6**](./ut0507.md)
- [**5.8 TEORIA UNITAT 5 PART 7**](./ut0508.md)

---

# 5.1 GUIA DE LA UNITAT 5

> **🔗 Recurs Web: IMESI.NET: UEFI, GPT I MBR**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=I8jFHTE9OkA) ↗️**](https://www.youtube.com/watch?v=I8jFHTE9OkA)

> **🔗 Recurs Web: COMPARTICIÓ DE RECURSOS EN XARXA EN SAMBA**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=xzx0lR8g2kc) ↗️**](https://www.youtube.com/watch?v=xzx0lR8g2kc)

> **🔗 Recurs Web: NATE GENTILE: UNIDADES SSD, M.2 Y NVME**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=ANVvxlv6DV4) ↗️**](https://www.youtube.com/watch?v=ANVvxlv6DV4)

---

En este document aniré posant els continguts que anem donant durant la unitat, destacant els aspectes que considere més importants.

CONTENIDOS

Conceptuales

Entender el concepto de unidad física y lógica de un dispositivo de almacenamiento.

Conocer la tarea del sistema operativo de administrar el sistema de archivos.

Conocer como particiona un disco el modelo de particionado MBR.

Conocer como particiona un disco el modelo de particionado GPT.

Conocer los 3 sistemas de archivos: de disco, de red y de propósito especial.

Sistema de archivos NTFS.

Procedimentales

Instalar W10 en modo UEFI usando Oracle VM VirtualBox.

Manejar particiones desde la utilidad de Windows 10: Crear y formatear particiones del disco duro.

Manejar particiones desde la utilidad de Windows 10: Diskpart.

Actitudinales

| UD5: GESTIÓN DE LA INFORMACIÓN |
| --- |

---

# 5.2 TEORIA UNITAT 5 PART 1

Unidad 5: Gestión de la información

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 1. Introducción • Los almacenamiento secundarios, discos duros magnéticos, unidades SSD, USBs, nos permiten almacenar información que los dispositivos de memoria principales no nos permitirían hacerlo, al ser memorias volátiles(RAM).

• Los sistemas operativos, como ya hemos visto, una de sus principales características es la administración del sistema de archivos, permitiendo mostrar al usuario los bytes de almacenamiento en una estructura de archivos lógica organizada en archivos y carpetas. • ¿Qué es entonces un archivo? Un conjunto de bits asociados a un nombre que lo identifica unívocamente.

• ¿Y un directorio? es un contenedor con un nombre asociado que puede almacenar archivos u otros directorios. • Todos los sistemas operativos (SO) se caracterizan por tener una estructura jerárquica de almacenamiento de la información, organizándose en una estructura de árbol.

• Cuando hablamos de unidades físicas, hablamos de HW: un disco duro, una unidad SSD, un USB. • Cuando hablamos de unidades lógicas nos indica como se representan en el SO estas unidades físicas. En Windows sabemos que se representan las unidades lógicas como A:, B:, C:, etc.

• Siguiendo la estructura de árbol, a cada unidad lógica les seguirán directorios y ficheros para almacenar toda la información que contiene un ordenador. Y así será como lo veremos representado.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 2. Particionado del disco

• Un aspecto importante en la instalación de un SO es el particionado del disco duro. • Durante el proceso de instalación, nuestro disco duro se va a particionar en varias unidades lógicas, comportándose como si tuviera varios discos duros. • Estas unidades lógicas son las particiones.

• En muchas ocasiones esas particiones serán visibles por los usuarios como si unidades físicas distintas se trataran y en otras ocasiones estas particiones van a ser invisibles e inaccesibles para los usuarios ,siendo utilizadas por el propio SO para el correcto funcionamiento del equipo.

• Al particionar un disco duro se obtienen una serie de ventajas

- elegir al usuario desde que partición queremos arrancar el SO que esté instalado. Una vez arrancado, el SO

verá las distintas particiones como unidades lógicas distintas. Pero, será reconocida o no dependiendo del sistema de ficheros con que se hayan formateado las particiones(FAT32, NTFS, EXT4,…)

- reinstalar el SO de una de las particiones sin afectar al resto de particiones.

• Durante la instalación de los sistemas operativos se suele ejecutar una aplicación para crear, eliminar o expandir particiones en el disco. • Además de las utilidades que incorporan los sistemas operativos, hay multitud de aplicaciones en el mercado con licencias privativas y libres capaces de crear, redimensionar o eliminar particiones en el disco.

• Antes de ver los distintos tipos y formatos de las particiones, debemos primero entender el esquema o modelo de discos que nos podemos encontrar según como tengan definida la tabla de particiones: MBR o GPT. • Podríamos decir que MBR y GPT realizan un primer particionado del disco para que después mediante el formateo de las particiones (FAT32, NTFS, EXT4,etc) ya se adecue cada partición al SO correspondiente.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 3. MBR y GPT

• El ordenador antes de que se cargue y ejecute el SO usa unos programas elementales llamados BIOS grabados en un chip de la placa base (PB) llamado ROM BIOS que realizan una comprobación del HW, reconoce el hardware que contiene, testea que funciona bien, carga el SO, drivers y le transfiere el control a este.

• BIOS con el tiempo se ha quedado obsoleto y pequeño en cuanto a capacidades: solo 4 particiones primarias y cada disco duro no puede ser mayor de 2TiB.(Gran limitación!!!) • Apareció UEFI en 2005, y actualmente todas las PB nuevas vienen con este estándar UEFI incorporado.

• La antigua BIOS gestionaba los discos y las particiones mediante un esquema denominado MBR(Master Boot Record o registro maestro de arranque). UEFI utiliza un nuevo esquema de particiones denominado GPT (GUID Partition table), mucho más potente. • UEFI también soporta MBR, así que es posible tener un equipo nuevo con UEFI y particionados los discos duros de ese equipo con el esquema MBR.

• Enlace a un vídeo que muestra la limitación de 2TiB de un disco en MBR: https://www.youtube.com/watch?v=4eFEeMyusx0

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.1 MBR • MBR maneja 3 tipos de particiones

- Primaria: particiones donde se instala un SO porque es arrancable. Cada partición primaria puede tener

DATOS + SECTOR DE ARRANQUE. Pueden haber 4 particiones primarias como máximo en un disco.

- Extendida: se usa para contener unidades o particiones lógicas en su interior. Actúa como una primaria sin

serlo. Solo puede haber 1 de este tipo y se creó para romper la limitación de las 4 particiones primarias.

- Lógica: ocupa un trozo de partición extendida o la totalidad. Puede haber muchas de ellas. Se formatea en un

tipo de formato de sistema de archivos y se le asigna una unidad. SOLO PUEDE TENER DATOS. • El sector de arranque se llama MBR, de ahí su nombre y se localiza en sector 0 del disco y realiza dos funciones

- Contiene un pequeño programa que se ejecuta cuando se arranca el ordenador y permite cargar el SO en

memoria. Se llama GESTOR DE ARRANQUE y dispone de las tabla de particiones en la que se almacena toda la información básica sobre las particiones: si es arrancable, si no lo es, el formato, el tamaño y el sector de inicio.

- Contiene una tabla de información relativa al disco: número de caras, pistas por cara, sectores por pista,

tamaño del sector, etiqueta del disco, número de serie -> TABLA BPB (BIOS PARAMETER BLOCK). • IMPORTANTE: Si creamos más particiones primarias, se incluye en cada una un sector de arranque!!!

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.1 MBR • En resumen

- El sector de arranque puede estar en cualquier partición primaria y puede elegir que partición primaria puede arrancar

con el SO que contenga, usando el gestor de arranque que contiene.

- Si necesitas 4 particiones o menos, recomiendo que sean las 4 primarias. Si tienes 4 SO, tendrás 1 sector de arranque en

cada partición y podrás elegir que partición primaria eliges para arrancar el SO que te interese.

- Si necesitamos más de 4, haces una extendida de las 4, y ya añades las unidades lógicas que necesites.
- Sí que se puede instalar el sector de arranque en una primaria, y el SO en una lógica y funcionaría! Pero tienes el riesgo

de poderte cargar la partición primaria sin querer y ya no tendría sector de arranque para cargar el SO desde la lógica.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.1 MBR • Hay que tener en cuenta que cuando instalamos Windows 10 en un disco MBR, crea automáticamente particiones en el disco y no solamente la partición que contiene el Windows 10. • En concreto crea una partición de 500 MB que contiene lo siguiente

Un código del gestor de arranque y la base de datos del arranque (BCD). Sirve para cargar la unidad desde donde arrancará el SO. - Espacio para los archivos de inicio que necesita las características de cifrado de unidad Bitlocker. - Una imagen de Windows RE (Entorno de recuperación, MRE) que permite recuperar causas comunes por los que un SO no puede arrancar. Se puede acceder mediante arranque alternativo desde el disco de instalación con la opción: “Reparar el sistema”.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.1 MBR • Como vemos a continuación • Además de estas dos particiones mencionadas, es posible encontrarnos también con una partición de recovery (recuperación) en la que el fabricante OEM(fabricante de equipo original) guarda una imagen del disco con la configuración de fábrica y que permite reinstalar el SO junto con los drivers y algunos programas preinstalados sin usar ningún DVD de instalación ni SW adicional. Suelen ser particiones primarias que están al final del disco. Esta partición de recovery la hace el fabricante pero la podemos crear nosotros manualmente.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.1 MBR • Linux no crea tantas particiones, aunque también crea una partición de sistema llamada swapping necesaria para intercambiar páginas de memoria con el disco duro, cuando estas no caben en la RAM (memoria virtual). El tamaño de esta partición se fija en el proceso de instalación dependiendo de la memoria que tenga el ordenador y del tamaño del disco duro.

• Como vimos previamente, MBR aloja en el primer sector del disco (sector 0) una tabla de particiones en la que se almacena toda la información básica sobre las particiones: si es arrancable, si no lo es, el formato, el tamaño y el sector de inicio. A cada partición se le asigna un código que identifica qué tipo de partición es.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.1 MBR • Además de este código, cada partición tiene un número con el que el SO lo identifica. Windows y Linux tienen diferente manera de numerar las particiones. • Windows (primero las primarias) (después el resto) • Linux

(Primarias: 1-4) (Lógicas: a partir de la 5)

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.2 GPT (Identificador Único Global) • Permite particionar el disco hasta 128 particiones primarias, por lo que no es necesario utilizar particiones extendidas y lógicas como en MBR y pueden ser los discos de un tamaño de hasta 8 ZiB.(8000 millones de TB) • El inconveniente que no se pueden arrancar estando en GPT un disco duro si la BIOS están en modo Legacy. Tiene que estar en modo UEFI. (Por ejemplo los M.2 no podrían ser usados en Bios Legacy) • Su principal característica es que trabaja con LBA (direccionamiento de bloque lógico), un método para especificar la localización de los bloques de datos en el disco, numerándose como LBA 0, LBA 1, LBA 2, el cual sustituye al antiguo CHS(cilindro-cabeza-sector).

• Al igual que MBR, GPT dispone de un GUID para identificar a cada tipo de partición, en función de si es Windows, Linux, Mac OS X.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.2 GPT (Identificador Único Global) • En cuanto a las particiones de sistema, en GPT se crean las siguientes

- Particiones de arranque EFI: se instalan todos los módulos de arranque o imágenes de kernel de todos los SO

que hayan en las distintas particiones. Lleva un sistema de archivos FAT32 y aparece en todos los discos GPT. Además, dispone de la característica Secure Boot que ayuda a proteger al equipo de SW malicioso del tipo bootkit. (Se habilita en la UEFI) Se firma digitalmente la partición y si el arranque no coincide con la partición pues no arranca el SO.

- Las particiones MSR (Microsoft System Reserved), se usa como partición de respaldo con la etiqueta GUID

e3c9e316-0b5c-4db8-817d-f92df00215ae. No recibe unidad y no almacena datos, y ocupa 16MB en Windows10. Tiene formato NTFS y debe estar entre la EFI y la primaria del sistema. Almacena información para el cifrado de unidades bitlocker.

- Partición primaria: pueden haber 128 por limitación de Windows. Contiene datos de usuario, programas y

Windows instalado.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 3.2 GPT (Identificador Único Global) • También podemos encontrarnos las siguientes particiones

- Una partición de recuperación MRE con GUID DE94BBA4-06D1-4D40-A16ABFD50179D6AC. El tamaño puede

variar pero puede ser de 450MB. En esta partición se almacena el programa de recuperación de Windows RE.

- Algunos fabricantes tienen sus propios GUIDs para particiones análogas a las EFI pero que contienen

cargadores de arranque para lanzar herramientas de recuperación específicas. Por ejemplo

- Partición de recuperación OEM. El fabricante del equipo guarda la imagen de recuperación con los datos,

sistema operativo y software preinstalado de fábrica.

---

# 5.3 TEORIA UNITAT 5 PART 2

Unidad 5: Gestión de la información

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 4. Sistema de archivos

• El sistema de archivos (FS, File System) es la parte del sistema operativo que se encarga de estructurar la información guardada en una unidad de almacenamiento ( discos duros, CDs, DVDs, Unidades flash, USBs). • Cada SO utiliza su propio sistema de archivos, aunque hay sistemas de archivos que son compatibles en diferentes versiones.

• La parte del SO relativo a la gestión del sistema de archivos, es el responsable de organizar el disco en sectores para que en ellos se puedan guardar archivos y directorios, manteniendo un registro de qué sectores pertenecen a qué archivos, cuáles no han sido utilizados o qué sectores se quedan inutilizados debido a que se han estropeado.

• También el componente del SO relativo a la gestión del sistema de archivos proporciona métodos para crear, mover, renombrar y eliminar tanto archivos como directorios, control de acceso(ACL, permisos), así como un conjunto de operaciones que permiten mantener la información almacenada y organizada de forma segura y adecuada. También almacena metadatos, tales como tamaño, fecha de creación, propietario, que ayudan a la gestión de la información.

• Los sistema de archivos se clasifican en tres grupos

- De disco
- De red
- De propósito especial

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW 4.1 Sistema de archivos de disco • Son los que nos encontramos en los discos duros • Los más conocidos son

- UNIX/Linux: ext2, ext3, ext4, ReiserFS
- Windows: FAT (FAT16, FAT32), NTFS, ReFS
- Apple: HFS, HFS+
- IBM: HPFS (en OS/2), IFS (en OS/400)
- Sun Microsystems: ZFS (Soportado entre otros por Linux, o Mac OS X)

VMware: VMFS (para servidores de virtualización) 4.2 Sistema de archivos de red • Es un sistema de archivo que actúa como un cliente de un protocolo de acceso a archivos remotos, proporcionando acceso a los archivos en un servidor a través de la red. • Dentro de los sistemas de archivos en red pueden ser distribuidos o paralelos.

• Distribuidos: los archivos residen en equipos remotos a los cuales acceden los clientes vía red.

- Windows tiene SMB(conocido después por CIFS) que es el que permite compartir archivos e impresoras en

red.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Existe una variante libre para Linux llamada SAMBA, que permite crear archivos y carpetas compartidas entre

Windows y Linux.

- En los servidores de Windows, Microsoft incorpora el sistema de archivos DFS (Distributed File System) que es

un componente de red del servidor que facilita la forma de encontrar y manejar datos en la red, agrupando ficheros que están en diferentes ordenadores en un espacio de nombres único.

- DFS facilita la construcción de una única vista jerárquica de múltiples servidores de archivos.
- El sistema de archivos de red utilizado en Linux es el NFS (network file system) que viene por defecto en los

SO Unix y en alguna distribuciones de Linux.

- Ejemplos de sistemas de archivos distribuidos son SMB (ICFS), DFS, NFS, AFS, NSS y NCP (de Novell) , AFP

(Apple). • Paralelos: se permite almacenar un archivo de forma segmentada en diferentes máquinas. Se usan en sistemas de alto rendimiento y clústeres. Formatos conocidos son PVFS, PVFS2, FhGFS. 4.3 De propósito especial Se utilizan en CDs (CDFS), DVDs(UDF), particiones especiales de disco, o sistemas de disco cifrados (EFS, Encrypted File System), virtuales (VFS, Virtual File System). Dentro de este grupo se engloban también los FS de tipo swap, usado en UNIX para la gestión de la memoria virtual y zona de intercambio de disco.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 5. El sistema de ficheros de Windows NTFS

• Evolución de FAT32. • FAT significa File Allocation Table, y como su nombre indica, tiene una tabla de localización de ficheros. • FAT funciona como el índice de un libro, pues se almacena en una tabla donde empiezan los archivos y lo que ocupa. • En NTFS la tabla FAT se llama MFT (Maste File Table) y NTFS organiza la información en archivos que se organizan en volúmenes.

• En NTFS, tenemos 3 volúmenes: Sector de arranque, MFT, Área de contenido de ficheros que engloba: Directorio Raíz y Datos. • El sector de arranque (boot) es el primer sector del disco (sector 0). Contiene un pequeño programa que se ejecuta cuando se enciende el ordenador y también con información relativa al disco (nº de caras, pistas por cara, sectores por pistas, tamaño del sector, cilindros, …).

SECTOR DE ARRANQUE BOOT MFT DIRECTORIO RAÍZ + ÁREA DE DATOS

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

• Tabla de localización de archivos (MFT, Master File Table). Se encarga de organizar la información en forma de ficheros dentro de la zona de datos. Indica qué sectores están libres. Normalmente se trabaja con clústeres que son agrupaciones de sectores. En esta tabla se indica si un clúster está defectuoso, si tiene el final de un archivo (EOF), qué clúster almacena el siguiente trozo de archivo. Si se borra un archivo, queda constancia de ello. Si se utiliza un archivo, también queda anotado. Por ello, se usa mucho en ANÁLISIS FORENSE.

• Bloque Directorio Raíz(sistema), que contiene información referente a la zona de datos de sistema, nombre de los archivos, extensión, tamaño, fecha y hora de creación, atributos • Bloque área de datos del usuario, que es la zona de mayor tamaño del disco que está dividida en sectores pero se gestiona en clústeres. Se almacena la información de los archivos y subdirectorios.

---

# 5.4 TEORIA UNITAT 5 PART 3

Unidad 5: Gestión de la información

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 6. Nomenclatura de ficheros y directorios

• Un fichero es un mecanismo de abstracción que sirve como unidad lógica de almacenamiento de información. • Un fichero agrupa una colección de informaciones relacionadas entre sí y definidas por el “creador del fichero”. • Un fichero le corresponde un nombre único que lo distingue del resto de archivos.

• Los ficheros se organizan en directorios (también llamados carpetas) para facilitar su uso. Estos directorios son ficheros que contienen información sobre otros ficheros: no son más que contenedores de secuencias de registros, cada uno de los cuales posee información acerca de otros ficheros.

• Hay muchos tipos diferentes de información que puede almacenarse en un fichero: programas fuente, programas ejecutables, datos numéricos, textos, música, fotografías, videos, etc. • Un fichero tiene una cierta estructura, definida según el uso que se vaya a hacer de él. Por ejemplo, un fichero de texto es una secuencia de caracteres organizados en líneas (y posiblemente en páginas); un fichero fuente es una secuencia de subrutinas y funciones, un fichero gráfico es una secuencia que permite dibujar pixeles en pantalla, etc.

• Aunque el SO no conozca internamente la estructura de los ficheros, sí es capaz de manejarlos eficientemente gracias al uso de las extensiones. • Habitualmente los archivos están formados por dos partes: nombre que se le asigna al archivo y extensión, que sirve para identificar el archivo o fichero.

• Los directorios no suelen requerir extensión, aunque en sistemas operativos Linux no es extraño encontrarse con directorios con extensión.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW • En Windows, los nombres de archivos y directorios pueden tener hasta 260 caracteres en total. • Estos 260 caracteres incluyen el camino completo para llegar al archivo.(ejemplo:C:\Windows\System32\calc.exe) • Los nombres de archivos y directorios no pueden incluir los siguientes caracteres

- Barra invertida: \
- Barra: /
- Interrogante: ?
- Dos puntos
- Asterisco: *
- Comillas dobles: "
- Mayor: >
- Menor: <
- Barra vertical: |

• Como recomendación, evitar puntos, evitar acentos e intentar separar los nombres con barras bajas o guiones en vez de espacios. • Windows no es case sensitive como sí lo es Linux.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 7. Estructura de directorio en Windows

• Todos los sistemas operativos disponen de una organización para que los archivos que añaden al sistema se encuentren en la ubicación diseñada a tal efecto. Estas decisiones las toma Microsoft en Windows. En Linux se sigue un estándar conocido como FHS. • La estructura de directorios de Windows es

• Program Files: se instalan los programas. En Windows 64 bits en Program Files(x86) se instalan los programas de 32 bits. • Program Data: directorio oculto que contiene datos de los programas que vamos instalando en el equipo. • Perflogs: se almacenan los logs de los distintos programas del sistema de monitorización y rendimiento.

• Users: información de cada uno de los usuarios con su propia carpeta del sistema. Antiguamente, Documents and Settings. Dentro de cada carpeta de usuario. • AppData: directorio oculto. Información sobre la configuración de Windows y los programas que usa el usuario.

• Contacts: lo usan aplicaciones de correo para guardar los contactos. • Desktop: permite trabajar con el contenido que tiene el escritorio. • Documents: almacén de documentos. • Downloads: carpeta descargas. • Favourites: se depositan marcadores que se han añadido a los navegadores de Internet.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW • Users: • Links: favoritos de Windows que hemos definido en los navegadores de Internet. • Music: almacén de música. • Pictures: para almacenar imágenes. • Saved Games: guarda las partidas en juego para los juegos que tienen programado hacer uso de este directorio.

• Searches: almacena búsquedas recientes, para que se puedan volver a usar. • Videos: almacén de videos. • Public: poder compartir recursos con el resto de usuarios del sistema. • Windows: contiene los archivos del sistema operativo, junto con los binarios imprescindibles para que funcione. No se debe manipular si no se conoce lo que se hace.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 8. Rutas

• El sistema de ficheros de Windows tiene una estructura arbórea. • Cada unidad lógica de almacenamiento se representa por una letra seguida del carácter dos puntos (:). • A la unidad principal de disco duro se representa por C: • Si hubiera otra partición en el mismo disco, u otro disco duro, el sistema le asigna la siguiente letra del abecedario, D

• Para el DVD o CD se asigna la E: • Los dispositivos externos como discos duros extraíbles se usan las letras F: G: • Cada letra que representa a una unidad tiene un árbol de directorios separado, , con una raíz representada por la barra invertida o contrabarra (\).

• El árbol es de raíz única, de modo que cada fichero tiene un único nombre de ruta de acceso. • Un directorio (o subdirectorio) contiene a su vez ficheros y/o subdirectorios, y todos los directorios poseen el mismo formato interno. • Se define directorio padre de un fichero o subdirectorio como el directorio en el que se encuentra su entrada de referencia. Se referencia como punto punto (..)

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW • Se define directorio hijo de un directorio como el directorio que tiene por padre al primero. Un directorio puede contener múltiples directorios hijos, y cada directorio (a excepción del raíz) es hijo de algún otro.

• Se define directorio actual como aquel en el que trabaja el usuario por defecto. Suele ser referenciado por los sistemas operativos con un punto (.). • Se utilizan rutas cuando se hace referencia a los archivos o directorios de un sistema informático. Un camino es la especificación de la localización de un fichero o directorio. Hay dos maneras de hacer esta especificación

- Ruta absoluta: Cuando esta especificación se hace respecto la raíz del sistema (o del volumen donde se

encuentra este). Ej: C:\Windows\notepad.exe. Si nos encontramos ubicados en C:, una ruta absoluta sería \Windows\notepad.exe

- Cuando se hace respecto del directorio actual de trabajo (en el que estamos situados), se trata de una ruta

relativa. Ej. Para separar estos directorios se utiliza un carácter delimitador, que es \ en Windows y / en Linux.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW C:\ Program Files Users Windows Apuntes Tema 1.pdf Ejercicios.doc Notepad.exe Tema 2.pdf Juan Vicente Documents Desktop Images Documents Desktop Images Firefox.lnk Estando en ese directorio vamos a ver cómo se nombran algunos ficheros utilizando rutas absolutas y relativas

• Tema 1.pdf utilizando una Ruta Absoluta (al llevar un espacio en el nombre lo ponemos entre comillas): \Users\Juan\Documents\Apuntes\“Tema 1.pdf” ** • Tema 1.pdf utilizando una Ruta Relativa: Documents\Apuntes\“Tema 1.pdf” • Firefox.lnk utilizando una Ruta Absoluta: \Users\Vicente\Desktop\Firefox.lnk • Firefox.lnk utilizando una Ruta Relativa

..\Vicente\Desktop\Firefox.lnk • Notepad.exe utilizando una Ruta Absoluta: \Windows\Notepad.exe • Notepad.exe utilizando una Ruta Relativa: ..\..\Windows\Notepad.exe **prescindimos de la letra de unidad (si nos encontramos situados en ella, podemos omitirla)

---

# 5.5 TEORIA UNITAT 5 PART 4

### 9. Escritorio, ventanas, menú Inicio, barra de herramientas

La interfaz gráfica de Windows 10 se compone, en su pantalla principal, de un escritorio con iconos, un menú de inicio con los programas y la barra de tareas, siguiendo el diseño que se iniciara con Windows 95. La versión Windows 10 vuelve a incorporar el menú de inicio clásico tras el fiasco que supuso quitarlo en Windows 8.

Todas las versiones de Windows incorporan el explorador de archivos. Es un elemento fundamental que nos permite gestionar los ficheros y carpetas del sistema.

En el Escritorio nos encontramos varios iconos que pueden ser ficheros o carpetas almacenados en la carpeta del escritorio del usuario (C:\Users\Usuario\Desktop), accesos directos a ficheros o programas, o iconos de acceso al Equipo, la Red o la carpeta de usuario.

Es importante destacar la diferencia entre un fichero y un acceso directo a un fichero. En el segundo caso lo que tenemos es un enlace a la ubicación del fichero que se encontrará (normalmente) en una ruta distinta a donde aparece. La eliminación de un acceso directo no implica la eliminación del archivo (ni la desinstalación de un programa). Los accesos directos pueden ser a carpetas, ficheros o aplicaciones y son equivalentes a los enlaces blandos en Linux.

Pulsando el botón secundario del ratón sobre el escritorio las opciones Personalizar y Configuración Pantalla, te permiten configurar e indicar la apariencia, resolución, tamaños y los iconos que deseamos que nos muestre.

Es importante seleccionar los iconos que deseamos ver en nuestro escritorio sin necesidad de hacer accesos directos.

Respecto al menú de inicio, lo más importante es saber que podemos configurar tanto su apariencia como configurar los elementos que contiene.

Podemos diseñar el menú Inicio a nuestro gusto, añadiendo aplicaciones al menú y agrupándolas. Basta con arrástralas desde el menú donde se encuentran al lugar del menú Inicio donde queremos que esté, o bien con el botón secundario del ratón le decimos Anclar al menú Inicio.

También se puede configurar la apariencia de la Barra de tareas. Con el botón secundario del ratón hacemos clic sobre la barra y aparece un menú contextual en el que podemos elegir varias opciones y configurar las Propiedades de la barra de tareas.

Una de las grandes novedades de Windows 10 y el menú Inicio es el útil menú contextual que aparece al pulsar con el botón secundario del ratón sobre el menú Inicio.

Desde este menú podemos acceder a muchas de las opciones de administración que se encuentran en el panel de control, así como al propio panel de configuración, al símbolo del sistema (PowerShell), a la ventana de ejecutar comandos o a la ventana del explorador de archivos.

También podemos apagar el equipo o cerrar la sesión de usuario o mostrar y ocultar todas las ventanas abiertas y mostrar solo el escritorio.

Otra utilidad de Windows 10 es la Vista de Tareas. Tiene su propio icono en la barra de tareas. Además de proporcionarnos una vista de todas las aplicaciones abiertas para poder alternar entre ellas, nos posibilita la creación de escritorios virtuales, una característica demandada por los usuarios de Windows que ya incorporaban otros sistemas operativos.

### 10. Gestión de la información con el explorador de Windows

Una de las herramientas de la interfaz gráfica más importantes que incorpora el sistema operativo es el Explorador de Windows.

El Explorador de Windows nos va a permitir trabajar con todos los ficheros y carpetas del sistema para poder gestionarlos, copiarlos, moverlos, borrarlos, …

Dependiendo de la carpeta con la que estemos trabajando tenemos la posibilidad de personalizar la Vista de la misma en el Explorador. Aun así hay unos elementos que son constantes en toda la ventana del explorador, como son el Panel de Navegación, Barra de Direcciones, Barra de Herramientas, Cuadro de Búsqueda, Panel de Contenidos. Los paneles de Navegación, Detalles y de Vista Previa son opcionales.

Dependiendo de la opción seleccionada en el menú, la barra de herramientas cambia. En el ejemplo siguiente corresponde a la opción Vista del menú.

Pulsando la tecla Alt (Alternativa) del teclado nos aparecen los atajos de teclado en el menú de opciones.

Desde el menú o desde la barra de herramientas podemos cambiar la Vista de la carpeta, así como hacer aparecer o desaparecer el Panel de Vista Previa. Dependiendo de la vista que elijamos y del tipo de carpeta que nos encontremos, nos aparecerán más o menos detalles del fichero. También se pueden añadir o quitar campos desde el menú o con el botón secundario sobre la cabecera de las columnas del panel de contenidos o desde la opción Ver del Menú.

Todos estos detalles los podemos ver desde la opción Propiedades del menú contextual sobre un archivo o carpeta.

También aparecen detalles (metadatos) del fichero seleccionado en el Panel de Detalles. Dependiendo del tipo de fichero nos aparecerán más o menos metadatos en el panel de detalles y podremos por tanto agregar más o menos columnas al panel de contenidos. Barra de Direcciones Importante. En la Barra de Direcciones aparece un formato que facilita la navegación entre las carpetas del disco, pero puede llevar a confusión con los nombres reales de las carpetas y ficheros. Se muestra el nombre de éstos traducido al idioma de instalación, pero ya sabemos que no es su nombre real. Haciendo clic sobre la propia Barra de Direcciones podemos ver el nombre correcto, así como toda su ruta absoluta.

Hacemos clic sobre la Barra de Direcciones

Opciones de carpeta Para configurar el Explorador de Windows hay que acceder a la opción Vista y seleccionar Opciones.

Aparece una ventana con 3 pestañas. En ellas se puede configurar distintas opciones. Nos interesa la pestaña de Ver.

En la pestaña de Ver tenemos la configuración avanzada. En ella hay muchas opciones que podemos ir seleccionando y deseleccionando para ir probando. Algunas de las más interesantes (y recomendable cambiar) son las siguientes: • Mostrar archivos, carpetas y unidades ocultos. Nos permite ver aquellos ficheros que tienen el atributo oculto dentro de las propiedades.

• Ocultar archivos protegidos del sistema. Existen una serie de archivos del sistema que no se muestran. Si deseamos verlos hay que activar esta opción (junto la de mostrar archivos ocultos).

• Ocultar las extensiones de archivo para tipos de archivo conocidos. Aunque aparezca Recomendado lo correcto es desactivarla y que muestre siempre las extensiones. Se pierde información del archivo si no nos muestra la extensión. Mi recomendación es desactivar esta casilla y que muestre siempre las extensiones.

• Usar el asistente para compartir. Lo veremos en el siguiente tema. Mi recomendación es también desactivar esta casilla.

Versiones de archivos Por último, relacionado con el explorador de archivos, una característica interesante que incorporó Windows 7 es la de restaurar Versiones anteriores de archivos y carpetas.

Esta característica funciona como una máquina del tiempo que permite volver a una versión anterior de un archivo. Esta versión anterior está guardada automáticamente por el sistema junto con los puntos de restauración. No son copias de seguridad propiamente dichas, sino instantáneas que se guardan junto a los puntos de restauración. Es posible que no nos permita volver a una versión que nosotros deseemos, sino a la que se guardó junto con el punto de restauración, pero en algunos casos nos puede salvar la papeleta…

Para comprobar qué versiones anteriores de un archivo o carpeta hay disponibles en el sistema, hacemos clic con el botón secundario sobre el archivo o carpeta y seleccionamos la opción Restaurar Versiones Anteriores. También podemos acceder mediante la opción Propiedades del elemento y pinchar en la pestaña Versiones Anteriores.

En el cuadro de diálogo seleccionamos la versión y pulsamos Restaurar o Copiar, dependiendo de si queremos conservar la versión actual.

---

# 5.6 TEORIA UNITAT 5 PART 5

Unidad 5: Gestión de la información

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Vamos a trabajar en esta sección con la shell de Windows. • El shell permite al usuario una comunicación directa con el sistema operativo. • El shell proporciona acceso a aplicaciones y utilidades basadas en caracteres, mostrando el resultado en pantalla. • El shell de comandos de los sistemas operativos Windows ha sido cmd.exe durante mucho años, pero Microsoft lanzó PowerShell, que dispone de muchísimos más comandos que cmd.exe.

• Actualmente PowerShell ya ha sustituido a cmd.exe y presenta potentes opciones de scripting (creación de procesos por lotes). • Nosotros vamos a trabajar con cmd.exe, sirviéndonos para aprender a manejar los comandos que nos permitan manejar la información de nuestro Windows 10.

• Los comandos que lanzaremos en cmd.exe, se pueden lanzar desde PowerShell, pero para esta unidad, vemos más adecuado trabajar desde cmd.exe.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Comandos más habituales

- Ayuda

EJEMPLOS: > dir C:\Users > dir C:\Users\ /A –H -S

- Limpiar pantalla msdos: > cls

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Comandos más habituales

- Usar varios comandos juntos

Ejemplo 1: > dir F: || dir D: (se ejecuta dir F y si falla, dir D:) Ejemplo II: > dir F: && dir D: (se ejecuta dir F: y si se ejecuta correctamente, después dir D:)

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Comandos más habituales

- Uso de comodines: los comodines, que se representan por el asterisco (*) o la interrogación (?) se

pueden utilizar para representar uno o más caracteres reales al buscar archivos o carpetas. ejemplo1: > dir rim* (buscará todos los directorios que empiecen por rim, sin límite de longitud y con cualquier extensión) ejemplo 2: > dir rim*.doc (en este caso el fichero buscará ficheros de cualquier longitud pero solamente con extensión .doc) ejemplo 3: > dir rim? (en esta caso solo acepta un solo carácter más seguido de la extensión)

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Comandos más habituales: Comando Descripción Ejemplo VER Muestra la versión del sistema operativo. VER Unidad: Cambia la unidad activa C: D: E: A: HELP Muestra una pequeña ayuda sobre los comandos HELP HELP comando DIR Visualiza el contenido de un directorio DIR C:\WINDOWS\ ECHO Muestra mensajes de texto ECHO HOLA MUNDO FORMAT Formatea una unidad (cuidado, no probar) FORMAT G

CHKDSK Comprueba el estado de un disco CHKDSK C: LABEL Cambia la etiqueta de un disco LABEL D: VOL Muestra la etiqueta de un disco VOL C: CLS Limpia la pantalla CLS TIME Muestra y permite cambiar la hora TIME

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Comandos más habituales: DATE Muestra y permite cambiar la fecha DATE ATTRIB Muestra o cambia los atributos de un archivo ATTRIB FOTO1.JPG COPY Permite copiar ficheros COPY C:\BOOT.INI E:\ MOVE Mueve ficheros MOVE C:\BOOT.INI E:\ DEL Borra ficheros DEL E:\WINDOWS\*.JPG REN Renombra ficheros REN E:\BOOT.INI E:\BT.INI TYPE Muestra el contenido de un fichero TYPE FICHERO.EXT

```bash
MKDIR (MD)
```

Crea un directorio MD E:\APUNTES RMDIR (RD) Borra directorios RD E:\APUNTES CHDIR (CD) Cambia de directorio actual

```bash
CD E:\APUNTES
```

TREE Muestra la estructura de directorios TREE CACLS Muestra/modifica las listas de control de acceso CACLS FOTO1.JPG EXIT Sale del símbolo de comandos (si es posible) EXIT XCOPY Copy extendido. Dispone de modificadores exclusivos XCOPY E:\ D:\ /E SUBST Le da un nombre de volumen a un directorio SUBST J: E:\UTILES FIND Busca una cadena de caracteres en un fichero FIND “CADENA” FICHERO.EXT SORT Recibe un fichero y lo devuelve ordenado SORT NOMBRES.TXT

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Comandos más habituales

- > dir -> visualiza el contenido tanto de archivos como de carpetas, tamaño expresado en

bytes, fecha de ultima edición.

- > dir /p -> con pausa, y así poder ver el contenido.
- > dir /w -> listado a lo ancho
- > dir /w /p -> combinación de los dos anteriores
- > dir /s -> nos muestra los subdirectorios de todas las carpetas incluidas en este directorio
- > cd .. -> permite subir un nivel, al directorio padre
- > cd C:\Windows o del mismo modo > cd :\Windows
- > cd \ -> se accede a C:\
- > mkdir ruta_directorio-> crea directorio a partir de rutas absolutas o relativas
- > md ruta_directorio -> crea directorio

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Comandos más habituales

- > md \directorio -> crea un directorio en C
- > rename \Users\Usuario\gato.txt bola.txt
- > rename practicas laboratorio
- > copy bola.txt armario.txt
- > copy *.txt practicas
- > copy *.jpg practicas (se copian todos los *.jpg al directorio practicas que están en este mismo

directorio)

- > xcopy practicas c:\practicas
- > move origen destino (tanto archivos como directorios)
- > move document.odt Documents

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Comandos más habituales

- > move \Users\User\abc.pdf \Users\User\Documents
- > move practicas Documents\practicas (mover un directorio completo)
- > del archivo (permite borrar archivos) -> del *.txt
- > rd o rmdir (borrar directorios) -> rd practicas , se borra si está vacío
- > rd practicas /s (borra el directorio aunque tenga otros ficheros y carpetas)
- > type fichero (permite ver el contenido de un fichero)
- > COPY CON fichero (crea un fichero y si es de texto, puedes añadir contenido dentro. Ctrl Z para finalizar)
- > TYPE CON > fichero.txt (igual que el punto anterior pero con otro comando)

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Redirecciones y tuberías 1. Cualquier software que ejecutemos en nuestro sistema informático, va a procesar una información que le llega desde una ENTRADA(STDIN) y va a enviar el resultado del proceso a una SALIDA(STDOUT). 2. Normalmente STDIN se refiere al teclado y STDOUT al monitor.

3. Además tenemos otra SALIDA, se llama STDERROR, donde salen los mensajes de error al ejecutar comandos erróneos. 4. Usando las redirecciones y tuberías, podemos alterar las STDIN, STDOUT, y STDERROR

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Gestión de la información. Comandos Windows.

• Redirecciones y tuberías EJEMPLOS: STDOUT

- > echo “Hola Mundo” > FICHERO1
- > echo “ESTO ES UN EJEMPLO” >> FICHERO1

STDIN

- > primero preparamos un archivo de texto: > NOTEPAD HORA.TXT
- > TIME < HORA.TXT

STDERROR

- > MKDIR UNO DOS TRES DOS > SALIDA.TXT 2> ERRORES.TXT
- Si hacemos un type de errores.txt podremos ver los errores que han aparecido

al ejecutar la instrucción

- Si hacemos un type de salida.txt podremos ver si contiene información correcta.

TUBERÍA -> con la tubería mandamos la salida del primer comando al segundo comando echo 14:30:00 | TIME COMANDOS PARA TRABAJAR CON TUBERÍAS: SORT/FIND/MORE 1ª línea: 15:00:00 2ª línea: Pulsar tecla enter NOTEPAD.TXT

---

# 5.7 TEORIA UNITAT 5 PART 6

Unidad 5: Gestión de la información

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Administración de discos.

Ahora vamos a conocer técnicas de tolerancias a fallos en discos. - Antiguamente ante un error hardware de nuestro disco -> recurrir a una copia de seguridad para restaurar. - Actualmente con la tecnología RAID es posible solventar fallos de hardware. - RAID (Redundant Array of Independent Disks, conjunto redundante de discos independientes)-> sistema de almacenamiento que usa múltiples discos duros para almacenar los datos.

RAID se organiza en niveles: con soluciones distintas para mantener la integridad, la tolerancia a fallos o incluso la rapidez en el acceso a la información. - Cada nivel tiene sus ventajas/desventajas. - Los discos están conectados a través de una controladora HW, que lo que permite es llevar una gestión de la información del RAID y permite poder recuperar la información usando diferentes técnicas que dispone. Accediendo al programa de la controladora te permite su gestión.

También se puede acceder a ese control de la información del disco, via software, mediante aplicaciones específicas.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Administración de discos.

Tipos de RAID - Las configuraciones de RAID más conocidas son RAID0, RAID1 y RAID5.

### 1. RAID 0

No tenemos redundancia ni usa técnicas de paridad. - La función es distribuir la información entre los discos disponibles. - Proporciona buena velocidad de acceso, ya que la información está equitativamente repartida para tener acceso simultáneo a mayor cantidad de datos con sus discos funcionando en paralelo.

Si se rompe una de las unidades de almacenamiento, perdemos todos los datos. - Es necesario tener una copia de seguridad. - Se aprovecha todo el tamaño de los discos.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Administración de discos.

Tipos de RAID

### 1. RAID 1 (espejo o mirroring)

Tenemos redundancia. - La función es distribuir la información del mismo modo en los discos. - Cuando almacenamos datos, se replica en su espejo. - Es caro porque se pierde la mitad de espacio a costa de replicar la información. - Dispone de buena velocidad de lectura de datos, ya que permite leer de forma simultánea de las dos unidades en espejo.

No dispone de técnicas de paridad.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Administración de discos.

Tipos de RAID

### 1. RAID 5 (espejo o mirroring)

Se integran códigos de detección de error mediante paridad, en donde los datos y la paridad se distribuyen por los discos. - Se necesitan pues 3 discos, en dos de ellos se guarda la información y en otro, la paridad. - En un RAID-5 montado sobre 3 discos se aprovecha el 66’6% del tamaño total del volumen. También se puede montar sobre más discos. Con 4 discos se aprovecha el 75% del tamaño total.

% aprovechado= 𝑵º 𝒅𝒆𝒅𝒊𝒔𝒄𝒐𝒔−𝟏𝒙(𝒕𝒂𝒎𝒂ñ𝒐𝒅𝒆𝒅𝒊𝒔𝒄𝒐𝒎á𝒔𝒑𝒆𝒒𝒖𝒆ñ𝒐) 𝑻𝒐𝒕𝒂𝒍𝒅𝒆𝒍𝒕𝒂𝒎𝒂ñ𝒐𝒅𝒆𝒍𝒐𝒔𝒅𝒊𝒔𝒄𝒐𝒔 x 100 - Calcular la paridad de dos bits: operación XOR Bit 1 Bit 2 Paridad Si lo extrapolamos a que queremos almacenar dos bytes, 1 byte a disco 1, otro byte a disco 2 y en el disco 3 la paridad.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Administración de discos.

Tipos de RAID

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 13. Discos, volúmenes y particiones

Disco es la palabra utilizada para referirse a los dispositivos de almacenamiento físico. Los discos contienen volúmenes, pudiendo contener varios volúmenes de diferentes tamaños. Un disco es como el contenedor principal para todas las divisiones lógicas de almacenamiento que podrían estar debajo de él. Los principales tipos de discos de almacenamiento son los discos duros, las unidades de estado sólido, los DVD y los CD - En un nivel más bajo, hay dos tipos básicos de almacenamiento: volumen y partición. Los dos términos a menudo se usan indistintamente pero sí existen diferencias.

Una partición es una parte lógica de un volumen de almacenamiento físico. Puede estar formateado o no pudiendo tener o no tener un sistema de archivos. Es sólo una parte del disco con un tamaño asignado que se establece en la creación. - Los usuarios generalmente crean múltiples particiones en el mismo disco duro para alojar diferentes sistemas operativos sin que se interrumpan entre sí.

Un volumen es un contenedor de almacenamiento en un sistema de archivos particular que su computadora puede usar y reconocer. Incluso se le puede asignar un nombre junto con su tamaño. - En conclusión, si un volumen está formateado a un sistema de archivos y una partición puedo o no estarlo.

Nosotros, comúnmente le llamamos a un volumen partición, pero es importante entender la diferencia.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Discos básicos y dinámicos.

Ya conocemos el modelado de particiones que se pueden crear con MBR y GPT. - MBR solo puede crear 4 particiones primarias, o 3 primarias y una extendida, siendo las primarias las que tienen el gestor de arranque para poder instalar sistemas operativos. Las extendidas tienen particiones lógicas que no tienen gestor de arranque. Almacenan datos.

GPT ya no tiene limitación de particiones. Hasta 128 primarias. - Windows 2003 introdujo una nueva manera de dividir el disco haciendo particiones, implementando discos dinámicos. - Los discos básicos es un disco físico que contiene particiones primarias o extendidas, si manejamos MBR. Las particiones y las unidades lógicas, que se crean dentro de una partición extendida, se conocen como volúmenes básicos. Se podrá asignar más espacio a un volumen básico si tiene espacio contiguo que asignarle.

Un disco dinámico contiene volúmenes dinámicos y tienen una funcionalidad diferente, la cual consiste en poder crear volúmenes repartidos entre varios discos (volúmenes distribuidos y seccionados) y de crear volúmenes tolerantes a errores (volúmenes reflejados y RAID5).

Así, los volúmenes dinámicos son los equivalentes a las particiones en los discos básicos, pero con más ventajas y flexibilidad que éstas.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Discos básicos y dinámicos.
- Hay cinco tipos de volúmenes dinámicos: simples, distribuidos, seccionados, reflejados y RAID-5.

1. Simples: Un volumen simple es un volumen creado en un disco dinámico que funciona como una unidad independiente. Como hemos visto es equivalente a una partición en un disco básico.

### 2. Distribuidos

Se forma con la unión de dos o más áreas de espacio no asignado (sin formatear) que están en dos o más discos duros. Tiene la ventaja de poder usar pequeños trozos de espacio libre para formar un volumen con mayores dimensiones, pero tiene el inconveniente de que si se estropea cualquier parte del disco, se pierden todos los datos.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Discos básicos y dinámicos.

### 3. Seccionados (RAID-0)

Es un volumen dinámico en el que los datos se almacenan en secciones repartidas en dos o más discos físicos. Los datos de un volumen seccionado se asignan de forma alternativa y equitativa (en bandas) en los discos, ocupando la primera fila de bandas de cada disco duro antes de pasar a la segunda.

Esta organización en bandas permite que el acceso sea más rápido ya que se elimina parte del tiempo que tarda el cabezal en buscar los sectores y pistas donde se encuentra el archivo, pero si se estropea un disco duro, se pierde toda la información. Es equivalente a RAID-0.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

- Discos básicos y dinámicos.

### 4. Reflejados (RAID-1)

Es equivalente a RAID-1.

- RAID-5.

Con 3 o más discos dinámicos se puede crear un volumen RAID-5 que permite que en caso de fallo de uno de los discos el sistema funcione de manera normal.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 15. Utilidades de Windows para la administración de discos

Se accede desde el botón Inicio y y tecleando “disco” aparece: “Crear y formatear particiones del disco duro”. - En esa pantalla nos aparece en la parte superior las distintas unidades lógicas que tenemos. Pueden ser volúmenes, particiones o discos. A cada una de ellas que Windows reconozca su sistema de archivos (las particiones de Linux no las reconoce) le asigna una letra de unidad. Nótese que les denomina a todos volúmenes.

PARTE SUPERIOR PARTE INFERIOR

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

En la pantalla se indica el tipo de volumen, el sistema de ficheros con el que está formateado (Windows 10 utiliza NTFS, si es un CD será CDFS) e información diversa como el estado, el tipo de partición, capacidad, espacio disponible, etc. - En el ejemplo mostrado en la imagen hay una partición primaria de 931GB, de arranque, que contiene el archivo de paginación (C:\pagefile.sys) y cuya letra de unidad es C

El archivo pagefile.sys es utilizado por el sistema para poder almacenar de forma temporal parte de los datos que se encuentran almacenados en la memoria RAM física de nuestro equipo. Si el equipo dispone de suficiente RAM, puede estar deshabilitado. - Además, en el mismo disco, hay una partición primaria de 500MB. Ya sabemos cuál es. Esta partición es la que se crea de manera automática al instalar Windows 10. Está marcada como partición activa, es del sistema y no le asigna ninguna letra de unidad.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

En otro disco hay una única partición primaria, de 48 GB asignada a la letra E:. Esto es lo que se conoce como una partición de datos, aunque en este caso está en otro disco distinto. - En el caso concreto del ejemplo, este disco de 48GB es un disco duro virtual. Windows 10 incorpora como novedad la conexión de discos duros virtuales (archivos con extensión .vhd o .vhdx) que funcionan como si de unidades físicas se trataran. Estos archivos son compatibles con las máquinas virtuales, pudiendo ser conectados a una máquina virtual o a la máquina host indistintamente (pero no al mismo tiempo).

En la parte inferior de la pantalla aparecen las unidades de disco (incluidas las de CD/DVD) instaladas en el equipo. Por cada disco se nos muestra el tipo de disco (Básico o Dinámico) y el tamaño total del mismo. La representación gráfica se realiza con una escala logarítmica (se puede cambiar), para que se muestren también las particiones más pequeñas. Los tipos de discos básicos y dinámicos los estudiaremos a fondo en la segunda evaluación.

Se utiliza un sistema de representación de colores para indicar los distintos tipos de particiones de cada disco básico: primarias, extendidas, lógicas…

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

Así como el tipo de volumen en el caso de los discos dinámicos

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

Desde el administrador de discos, con el menú contextual, se pueden realizar muchas operaciones sobre los discos y sobre las particiones. Las más importantes: • Discos: o Conectar o desconectar los discos. o Inicializar los discos (cuando se ha instalado uno nuevo, por ejemplo). o Convertir discos básicos en dinámicos y viceversa. o Convertir el disco MBR en GPT. o Crear particiones o volúmenes.

o En el caso de los dinámicos se pueden crear volúmenes reflejados, distribuidos, RAID-5, … • Particiones y volúmenes: o Extender una partición. Hacerla más grande (si hay espacio sin asignar en el disco, sin formatear). o Reducir una partición. Hacerla más pequeña. Si el disco no está fragmentado y hay espacio disponible en dicha partición.

o Formatear la partición. o Cambiar la letra asignada a una unidad. o Marcar una partición como activa. o Eliminar la partición. - Todo esto se puede hacer como hemos visto desde la utilidad de disco de Windows Diskpart como mediante utilidades de fabricantes externos a Microsoft

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 16. Desfragmentar el disco

Cuando se formatea un disco, este se divide en sectores, cada uno de 512 bytes. - El sistema de archivos combina grupos de sectores en clústeres, que son las unidades más pequeñas de almacenamiento, con un tamaño de 4KB. - Si hay un fichero que queremos almacenar de 200MB, Windows lo divide en 50.000 partes, correspondiente cada parte a un clúster y almacena el fichero en clústeres contiguos.

Esto es una situación perfecta, porque los cabezales del disco se mueven rápidamente al estar físicamente contiguos. - El problema viene cuando se van borrando, creando ficheros y van quedando pocos clústeres libres en el disco y ya no ocupan los ficheros clústeres contiguos por lo que se pierde eficacia en las lecturas y escrituras.

Al desfragmentar el disco, se reorganiza el disco consiguiendo organizar mejor los clústeres para que hayan los mayores números de clústeres contiguos y vacíos para hacer más rápidas estas tareas de lectura y escritura. - Para acceder a la herramienta hay que ir al menú Inicio - Herramientas Administrativas - Desfragmentar y optimizar unidades.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

Con esta herramienta se puede analizar el disco, para que nos indique el grado de fragmentación.

### 17. Liberar espacio

- Limpia el sistema de archivos innecesarios que están ocupando espacio en el disco: archivos temporales que no

han sido eliminados, archivos de Internet descargados, la papelera de reciclaje que no se ha vaciado, … Estos archivos pueden llegar a ocupar varios GBs y en la mayoría de los casos son prescindibles. Se accede al Liberador de espacio en disco desde el menú Inicio Herramientas Administrativas.

---

# 5.8 TEORIA UNITAT 5 PART 7

Unidad 5: Gestión de la información

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 18. Permisos

Tipos de cuentas en Windows 10 1. Cuenta con permisos estándar. • Cambios determinados pero no cambiar el registro o instalar programas. • Tareas: escribir documentos, jugar, ver vídeos, etc. 2. Cuenta de administrador • Puede realizar todo tipo de cambios en el sistema.

• Puede realizar cambios sobre otros usuarios. 3. Cuenta de invitado • Uso puntual del ordenador. Cambiar permisos • Si compartimos ordenador con alguien y queremos proteger archivos importantes de trabajo. Así evitaremos que se eliminen por error, que se pierdan o se modifiquen sin permiso. Podemos bloquear el acceso para que solo algunos usuarios puedan acceder.

• Se cambian permisos: ir a la carpeta o archivo en cuestión y hacer clic sobre él con el botón derecho del ratón para acceder a sus propiedades. En la ventana que se nos abre seleccionamos la pestaña Seguridad y ahí encontraremos un listado con el nombre de los grupos o usuarios del sistema, así como los permisos de cada uno de ellos sobre esa carpeta o archivo.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 18. Permisos y herencia

Cambiar permisos en local • Si compartimos ordenador con alguien y queremos proteger archivos importantes de trabajo. Así evitaremos que se eliminen por error, que se pierdan o se modifiquen sin permiso. Podemos bloquear el acceso para que solo algunos usuarios puedan acceder.

• Se cambian permisos: ir a la carpeta o archivo en cuestión y hacer clic sobre él con el botón derecho del ratón para acceder a sus propiedades. En la ventana que se nos abre seleccionamos la pestaña Seguridad y ahí encontraremos un listado con el nombre de los grupos o usuarios del sistema, así como los permisos de cada uno de ellos sobre esa carpeta o archivo.

• Activar/desactivar permisos de herencia en Windows 10: los y carpetas archivos pueden heredar permisos de su carpeta principal. Se puede habilitar o deshabilitar esta opción.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW Cambiar permisos en carpetas compartidas en red • Se pueden dar permisos a recursos compartidos en red. • Lo primero de todo es localizar la carpeta o archivo en red sobre los que queramos modificar los permisos.

• Cuando estemos sobre ella, pulsamos con el botón derecho del ratón y accedemos a la opción Propiedades dentro del menú contextual que se nos abre. • Una vez dentro de la ventana, en la zona superior hay varias pestañas disponibles. Nosotros pinchamos en Compartir.

• En el primer apartado de Uso compartido y archivos en red, elegimos de nuevo el botón Compartir. • Aparecerá entonces una nueva ventana llamada Acceso a la red. Aquí, tendremos que accionar el desplegable y seleccionar Crear un nuevo usuario.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 19. Gestión de procesos

• Cuando pulsas a la vez las teclas Control + Alt + Suprimir en el ordenador, irás a una pantalla de Windows en la que tienes varias opciones, entre ellas la de acceder al administrador de tareas. • También lo puedes encontrar haciendo click derecho en la barra de tareas de Windows o escribiendo taskmgr en el menú de inicio para que sea tu primer resultado de búsqueda.

• ¿Qué puedes hacer en el administrador de tareas? • Informarte sobre procesos activos. • Los datos que te ofrece sobre cada aplicación y proceso son: • Nombre: El nombre de la aplicación o proceso en ejecución. • Estado: Cuando un proceso o aplicación esté en modo de ahorro de energía, te aparecerá.

• CPU: El porcentaje de potencia de procesador que está utilizando. Cuanto más alto sea, más exigente será el funcionamiento de la aplicación o el proceso. • Memoria: La cantidad de memoria RAM que esté consumiendo cada uno de los procesos o aplicaciones que tengas en ejecución.

• Disco: Si un proceso o aplicación están escribiendo en el disco duro de tu ordenador, aquí verás la velocidad de escritura de cada uno.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW • Red: Si una aplicación o proceso están accediendo a Internet, aquí verás la velocidad de descarga que cada uno está empleando. • GPU: Cuando un proceso o aplicación está utilizando la tarjeta gráfica, aquí vas a poder verlo y saber el porcentaje de uso.

• Motor de GPU: Si no te vale con saber que se está usando tu gráfica, aquí podrás ver qué característica está usando. Por ejemplo, puede ser procesando vídeo, o gráficos en 3D. • Consumo de energía: Podrás saber el consumo de energía total de cada uno de los procesos en tiempo real, indicándote su impacto en la CPU, GPU y el disco duro.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 20. Instalación de programas y gestión de servicios

• Accediendo a Panel de Control – Programas y características -> nos permite acceder y activar o desactivar ciertas funciones que puede realizar nuestro sistema operativo Windows 10.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW • Desde la siguiente ventana se visualizan las características activas y las que se pueden no están activas y se pueden activar. • En función de lo que necesitemos tener activado, se deberá proceder.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 21. Planificación de tareas

• En el cuadro de búsqueda de Windows 10 escribe «programador de tareas» y haz clic para entrar. • Dentro del programador, verás un panel con las tareas que tienes programadas. Podrás empezar a crear tus tareas simplemente haciendo «crear tarea«. • En la pestaña de General, podrás indicar un nombre, descripción y ubicación, entre otros datos.

• En la pestaña Desencadenar podrás elegir los días que quieres que se lance. • En Acción podrás elegir la ejecución de «algo». Aquí podrás decidir si quieres que se envíe un email (por ejemplo). • En Condiciones podrás añadir condiciones para la ejecución automática de la tarea.

• Es ideal para programar a determinadas horas del día determinadas tareas/programas que quieres que se ejecuten.

Unidad 5: Gestión de la información Sistemes Informàtics: 1er DAW

### 22. Crear punto de restauración del sistema

• Los puntos de restauración son una especie de copia de seguridad de elementos importante de Windows, de modo que puedas restaurar el sistema en caso de que algo vaya mal tras apagar, reiniciar o hacer un apagado automático. • Windows crea puntos de restauración por sí mismo de forma periódica o antes de instalar actualizaciones, pero también puedes ordenarle tú que cree un punto de restauración.

---
