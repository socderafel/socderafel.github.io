---
layout: default
title: "UD7 — SEGURETAT, RENDIMENT I RECURSOS · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD7 — SEGURETAT, RENDIMENT I RECURSOS"
prev_url: "../ut06/ut0603.html"
prev_label: "⬅️ 6.3 TEORIA UNITAT 6 PART 3"
next_url: "../ut07/ut0701.html"
next_label: "7.1 TEORIA UNITAT 7 PART1 ➡️"
---

# 📘 UD7 — SEGURETAT, RENDIMENT I RECURSOS (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**7.1 TEORIA UNITAT 7 PART1**](./ut0701.md)
- [**7.2 TEORIA UNITAT 7 PART 2**](./ut0702.md)
- [**7.3 TEORIA UNITAT 7 PART 3**](./ut0703.md)

---

# 7.1 TEORIA UNITAT 7 PART1

---

Unidad 7: Seguridad, rendimiento y recursos

Índice de la unidad 1ª Parte

- Aseguramiento de la información.

1.1 Asociación de discos. Volúmenes distribuidos: Windows(RAID), LVM (Linux).

- Tolerancia a fallos.
- Clusterización.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 1. Aseguramiento de la información

• Cada vez más, la seguridad y la fiabilidad son un aspecto más importante en la administración de un sistema informático. • Un administrador de sistemas se enfrenta a

- Pérdida de datos: por incendios, inundaciones, averías, errores humanos, borrado accidental o deliberado.
- Perdida de disponibilidad: interrupción o degradación del servicio.
- Intrusiones: pasivas que se utilizan para recoger datos y espionaje o ataques con afectación de datos y de servicio.

• El concepto disponibilidad está relacionado con la continuidad operacional de un sistema a lo largo de un periodo determinado. Se acostumbra a expresar como un porcentaje. Ejemplo: un 99% de disponibilidad significa que solo está parado 54 minutos al año. • Cuando hablamos de asegurar la información nos referimos a evitar la perdida y mantener el servicio teniendo en cuenta estos 3 principios

• Prevención de fallos: Trabajar para evitar y prevenir errores con medidas proactivas. ejemplos: usar hw y sw bien diseñado y probado, usar herramientas de comprobación de memoria, integridad de los sistemas de archivos. • Enmascaramiento de los fallos: conseguir que cuando se produzca un fallo, no se convierta en fallo de sistema.(IP-> CRC) • Tolerancia a los fallos: se basa en la redundancia , tanto de hardware (clustering de servidores, líneas de comunicación, etc) como de datos(RAID).

• Copias de seguridad: copiar íntegramente la información fuera del sistema de explotación habitual. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

1.1 Asociación de discos • El disco duro(HDD), discos SSD son elementos delicados de un sistema informático y deben de usarse técnicas que garanticen la recuperación de esta en caso de errores o fallos en el sistema. • Para ello, existen los volúmenes distribuidos, que ya los vimos en la unidad anterior, y permiten redistribuir y aprovechar espacios libres de otros sistemas para aumentar la fiabilidad y la tolerancia a errores.

• Tenemos dos técnicas para manejar volúmenes distribuidos: • Gestor de discos de Windows: permite hacer RAID0, RAID 1 y RAID 5 (ya visto en el curso!!). • Gestor LVM (Logical Volume Manager) de Linux: usa volúmenes físicos que pueden ser discos enteros o particiones que gestiona en fragmentos denominados extensiones físicas (PE, physical extents). Un conjunto de estos fragmentos constituye un volumen lógico que se puede hacer servir para montar un sistema de archivos o una partición de intercambio (swap).

LVM (Logical Volume Manager) • LVM es una capa de software que nos permite generar volúmenes lógicos y poderlos administrar. Estos volúmenes se pueden organizar para montar un sistema de fichero de Linux o para montar una partición swap, etc. • LVM nos permite hacer movimientos “en caliente”, sin tener que apagar el equipo, sobre los volúmenes lógicos pudiendo

• Incrementar el tamaño. • Añadir un disco físico a un volumen. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

• LVM se divide en 3 capas principales: Physical Volume (PV), Volume Group(VG) y Logical Volume (LV). Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW Le decimos a un disco o a una partición que va a formar parte de un LVM y se va a convertir en un “physical volumen PV”. En este caso el PV se llama sda2.

El PV se va a dividir en pequeños bloques llamados Physical Extend (PE). Generamos un grupo, en este caso se llama, vg_datos, y le vamos a asociar el PV sda2. . Uniendo los PE generaremos los volúmenes lógicos (LV). En este caso creamos dos, uno para los datos de usuario (/home) y otro para el directorio raíz (donde tenemos el Sistema operativo).

• Supongamos que nos quedamos con poco espacio en el directorio raíz /. ¿Debemos de volver a reinstalar el SO y volver a crear otro disco mayor? No hace falta. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW Crearemos un nuevo PV. En este caso el PV se llama sdb1.

Asociaremos el nuevo PV sdb1 a vg_datos. . Ampliaremos el LV_root con más PE para dotarlo de mayor tamaño.

• Pero también podríamos tener un servidor web , y querer tener los datos del servicio web separados de lo que es el sistema operativo. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW Crearemos un nuevo PV. En este caso el PV se llama sdb1.

Asociaremos el nuevo PV sdb1 a un nuevo VG, vg_web. Como dato negativo, indicar que no se puede usar espacio del vg_web, para aumentar el tamaño del lv_root, por lo que se podría no estar usando eficientemente el espacio. Generaríamos un nuevo LV, llamado Lv_web separado de los dos LV anteriores.

• Aquí podemos ver las 3 capas que conforman LVM y sus comandos: • Esto se obtiene de realizar una instalación en Ubuntu usando LVM. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW Tenemos un PV, /dev/sda5. Tenemos 1 VG llamado vgubuntu.

Tenemos dos volúmenes lógicos: root y swap_1.

2 Tolerancia a fallos • La tolerancia a fallos de un SI es la característica que determina la capacidad del sistema a continuar funcionando cuando se ha producido un fallo. • Pueden producirse a nivel HW o SW. • La tolerancia a fallos se define en 3 niveles: • Tolerancia completa: el sistema continua funcionando, si no por poco tiempo, sin perder funcionalidad ni prestaciones.

• Degradación aceptable: el sistema continua funcionando con una pérdida parcial de funcionalidades y prestaciones hasta que se soluciona la incidencia. • Parada segura: el sistema se para de manera ordenada para asegurar el entorno y los datos hasta que se resuelve la incidencia.

• Si nos centramos en los fallos de HW, los fallos de disco son los más comunes y críticos, ya que suelen comportar pérdidas de datos. Por eso, que se utilicen diferentes soluciones ya vistos en este curso como la tecnología RAID o la tecnología que vamos a ver a continuación llamada CLUSTERIZACIÓN.

Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

3 Clusterización • La clusterización es una asociación de ordenadores interconectados con conexiones de alta velocidad i baja latencia para realizar un procesamiento en paralelo y de modo distribuido i así, conseguir mejorar en rendimiento, distribución de cargas, escalabilidad y alta disponibilidad.

• Con estas características los clústeres dan soporte a aplicaciones que van desde la supercomputación hasta aplicaciones críticas, aplicaciones web, comercio electrónico, bases de datos de alto rendimiento, etc, ofreciendo un servicio de manera ininterrumpida, fundamental en muchos servicios como pueden ser: servicios médicos en hospitales, banca, finanzas, etc.

Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

• Las aplicaciones principales de los clústeres se pueden clasificar como: • Alto rendimiento: sistemas con gran capacidad de procesamiento y cálculo (científicas, criptografía,etc). • Balanceo de carga: los ordenadores del clúster se reparten la carga de trabajo y el tránsito de los clientes.

• Alta disponibilidad: la redundancia de servidores permite la alta disponibilidad, ya que al trabajar en paralelo y con redundancia pueden asumir los fallos de algunos de estos equipos. Los nodos saben cuando falla un equipo y se reparten la carga que no puede manejar el equipo que falla.

• Algunas ventajas que presentan los sistemas en clúster: • Facilidad de administración: se administra desde un único punto central, en local o en remoto. • Escalabilidad: es fácil de ampliar ya que solamente hace falta añadir nuevo nodos. • Según la característica de HW y SW, los clústeres se pueden clasificar en

• Clusters homogéneos: misma configuración de HW y SW. Los programas se pueden ejecutar en cualquier equipo. • Clústers semihomogeneos: Configuración similar en cuanto a SW, pero con HW diferente. • Clusters heterogéneos: configuración de HW y SW diferente. • En cuanto a las estrategias para responder a la caída de un nodo • Activo-pasivo: hay nodos activos que ejecutan aplicaciones, y otros pasivos que están pendientes de que no fallen los activos.

• Activo-activo: todos los nodos activos y ejecutando aplicaciones. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

---

# 7.2 TEORIA UNITAT 7 PART 2

Unidad 7: Seguridad, rendimiento y recursos

Índice de la unidad 1ª Parte

- Aseguramiento de la información.

1.1 Asociación de discos. Volúmenes distribuidos: Windows(RAID), LVM (Linux).

- Tolerancia a fallos.
- Clusterización.

2ª Parte

- Copias de seguridad.
- Planes y programaciones de copias de seguridad.
- Utilidades y programas para realizar copias de seguridad.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 4. Copias de seguridad

• Como administradores se pueden optimizar las condiciones de trabajo del sistema informático y minimizar los fallos de disco. • Cuando un disco se estropea, se pierde la información que contiene almacenada. • La única manera para recuperarla es tenerla almacenada en otro sitio.

• Un backup o copia de seguridad es la copia y almacenamiento de los datos en un soporte diferente, de modo que, en caso de fallo del medio o soporte original, permite recuperar la información del sistema informático. • Los datos que se deben de guardar pueden ser datos como programas o archivos clave del sistema operativo.

• En cuanto a los tipos o niveles de las copias de seguridad tenemos: • Nivel 0: copia total. Periódicamente, se hace una copia completa de todos los datos que se deben de guardar. • Nivel 1: copia diferencial. Es una copia parcial de los datos que han cambiado respecto a la última copia de nivel 0. Por tanto, hace falta tanto un copia actual como la copia total.

• Nivel 2: copia incremental. Es una copia parcial de los datos que han cambiado a la ultima copia de cualquier nivel. Las copias son más rápidas, y el volumen almacenado es inferior Ejemplo de políticas de seguridad • Un ejemplo de políticas de copias de seguridad podría ser una empresa que hace copias de nivel 0 (totales) el primer lunes de cada mes, copias de nivel 1 (diferenciales) los otros lunes del mes y copias incrementales el resto de días.

• Un ejemplo: ¿Si se produce una avería el jueves de la segunda semana, que copias de seguridad haría falta recuperar? Respuesta: La copia total del primer lunes + la copia diferencial del segundo lunes + las copias incrementales de martes y miércoles de la segunda semana Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

Planes y programaciones de copias de seguridad • Las decisiones en el diseño o políticas de copias de seguridad se basan en un compromiso entre el coste que implica efectuarlas (tiempo, coste de dispositivos y soporte de datos, dedicación del administrador, interrupciones del servicio, etc.) y el coste que comportaría la pérdida de estos datos en caso de avería.

• Por tanto, para comenzar el diseño de un plan de copias de seguridad tenemos que analizar algunas características propias de los datos y responder a las siguientes preguntas: • ¿De que datos hacemos copias? Los responsables, no los administradores, deciden. • ¿Con que frecuencia haremos las copias de seguridad? Muy importante la periodicidad.

• ¿Cuándo programamos las copias? Las copias se deben de hacer cuando el sistema esté inactivo. • ¿Qué dispositivos utilizaremos? Factores a tener en cuenta: velocidad, capacidad, coste, discos duros externos, memoria flash USB, dispositivos Cloud , etc. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

Utilidades y programas para realizar copias de seguridad • El claro ejemplo de este tipo de copia sería la que se hace en Windows 10 – Copias de seguridad y restauración • Por defecto, guarda información en el escritorio, carpetas predeterminadas de Windows que incluye AppData, descargas, contactos, preferidos, etc.

• Si la unidad de destino es NTFS y tiene espacio: imagen del Sistema con los controladores y opciones de configuración del Registro. • En Sistemas Linux: orden Tar, rsync. • Ejemplo 1: tar –cvf Copia_etc.tar /etc -> crea copia con archivo tar del directorio /etc. • Ejemplo 2: tar –cvzf Copia_home.tgz /home -> copia los directorios de /home y comprímelos(formato tgz) Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

---

# 7.3 TEORIA UNITAT 7 PART 3

Unidad 7: Seguridad, rendimiento y recursos

Índice de la unidad 1ª Parte

- Aseguramiento de la información.

1.1 Asociación de discos. Volúmenes distribuidos: Windows(RAID), LVM (Linux).

- Tolerancia a fallos.
- Clusterización.

2ª Parte

- Copias de seguridad.
- Planes y programaciones de copias de seguridad.
- Utilidades y programas para realizar copias de seguridad.

3ª Parte

- Recuperación en caso de fallo del sistema.
- Puntos de restauración.
- Copias de seguridad del sistema.
- Opciones de arranque avanzadas.
- Discos de arranque y de recuperación.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 5. Recuperación en caso de fallo del sistema

• Ya hemos comentado, que por mucha prevención y tolerancia a fallos que tengamos, siempre puede producirse una averia, un ataque o un conjunto de circunstancias que afecten a la disponibilidad del sistema. • El objeto pues es, reducir el tiempo de recuperación del sistema y que vuelva a estar operativo lo antes posible.

• ¿De qué técnicas, herramientas disponemos para poder recuperar un sistema con la mayor premura posible?

- Puntos de restauración

• A veces, debido a instalar mál algún controlador o se ha realizado una instalación defectuosa, el sistema se queda inestable. • En este caso, es interesante poder realizar una “restauración” a un punto anterior del sistema. • El punto de restauración es la representación del estado de los archivos del sistema del equipo en un momento dado.

• Es una especie de fotografía del estado de la base de datos del sistema • Aparte de utilizarlo en Windows, también se usa por ejemplo en Oracle VM VirtualBox, con las instantáneas. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

- Copias de seguridad del sistema

• Una copia de seguridad del sistema es una imagen exacta de la unidad o partición que incluye el sistema operativo, su configuración y los programas y archivos instalados. • La restauración de una imagen del sistema no permite recuperar archivos individuales, así que se recomienda hacer copias de seguridad normales de archivos personales si se quiere tener la posibilidad de restaurar un archivo o archivos concretos.

• Herramientas de pago como Ghost o Acronis , como algunas de código libre como Clonezilla, permiten crear y restaurar imágenes de unidades enteras y de particiones de discos duros. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

- Opciones de recuperación avanzadas

• Las opciones de arranque avanzadas consisten en un menú de texto que ofrecen herramientas y opciones que permiten iniciar el sistema con un número mínimo de controladores de dispositivos y de servicios. • Se usa cuando el sistema no funciona correctamente. • Se accede pulsando la tecla SHIFT + Reiniciar.

• Al elegir Solucionar Problemas accedemos a la imagen de la derecha: Este video es muy interesante: https://www.youtube.com/watch?v=x7uyH3oWqYU Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

• Si elegimos Restablecer este equipo aparecen: • En la opción Mantener mis archivos te mantendría los archivos propios del usuario (Documentos, aplicaciones, etc) y reinstalaría el SO en sí. • En la opción Quitar todo, lo formatea y lo reinstala todo. Este video es muy interesante: https://www.youtube.com/watch?v=x7uyH3oWqYU Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

• Si elegimos Opciones avanzadas aparecen: • La opción “Recuperación de imagen del sistema” nos permitiría usar una imagen del sistema concreta que tengamos guardada. En esta unidad hemos visto como hacerlas. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

- Discos de arranque y de recuperación

• En caso de que nuestro equipo no pueda arrancar ni con las Opciones Avanzadas habrá que usar un CD, DVD o USB para acceder al entorno de recuperación del sistema. • Una vez iniciado el proceso de instalación, nos ofrece la posibilidad de recuperar el equipo, como vemos en la siguiente imagen.

Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

• Tras darle la opción “Reparar equipo”, ya nos aparecerá la siguiente pantalla. • Y al seleccionar la opción “Solucionar problemas”, ya vamos a la siguiente imagen. Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

• La opción Restablecer este Equipo no aparece si inicias las opciones de recuperación desde un medio externo como en este caso. • Sólo aparece esa opción si accedes desde el propio sistema, en el supuesto que puedas arrancarlo. • Te permite otras opciones como Restaurar sistema a un punto anterior, reparar los archivos de inicio, recuperar desde una imagen del sistema, o utilizar las configuraciones de inicio seguro.

Unidad 7: Seguridad, rendimiento y recursos Sistemes Informàtics: 1er DAW

---
