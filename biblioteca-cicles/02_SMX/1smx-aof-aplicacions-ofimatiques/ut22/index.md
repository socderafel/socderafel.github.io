---
layout: default
title: "UD13 — GIMP · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT22 Completa"
prev_url: "../ut19/ut1902.html"
prev_label: "⬅️ 12.2 Abrir Form sin Abrir Access"
next_url: "../ut22/ut2201.html"
next_label: "13.1 Tema 1: Imatge Digital ➡️"
---

# 📘 UD13 — GIMP (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**13.1 Tema 1: Imatge Digital**](./ut2201.md)
- [**13.2 Tema 2. Imatge vectorial (Inkscape)**](./ut2202.md)

---

# 13.1 Tema 1: Imatge Digital

> **📌 🏷️ Apunt de la Unitat**
> **Imatge digital. GIMP**

> **🔗 Recurs Web: Gimp**
> [**🌐 Obrir recurs extern (https://docs.gimp.org/2.10/es/become-a-gimp-wizard.html) ↗️**](https://docs.gimp.org/2.10/es/become-a-gimp-wizard.html)

> **🔗 Recurs Web: Pràctiques guiades**
> [**🌐 Obrir recurs extern (https://www.tuinstitutoonline.com/aula/course/view.php?id=13) ↗️**](https://www.tuinstitutoonline.com/aula/course/view.php?id=13)

> **🔗 Recurs Web: Crear logo**
> [**🌐 Obrir recurs extern (https://daviesmediadesign.com/es/create-logo-gimp-2-9-8-text-version/) ↗️**](https://daviesmediadesign.com/es/create-logo-gimp-2-9-8-text-version/)

> **📌 🏷️ Apunt de la Unitat**
> **Imatge Vectorial. INKSCAPE**

---

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE IMAGEN DIGITAL La imagen se ha convertido en un concepto fundamental en informática como lo representa la mayoría de páginas web que nos encontramos en Internet. En los últimos años la digitalización de imágenes se ha convertido en un fenómeno cada vez más extendido y que lo puede utilizar la inmensa mayoría de personas (cámara digital, escáner, móvil con cámara) En esta unidad se pretende adquirir los conceptos que intervienen en la imagen digital.

1.- TIPOS DE IMÁGENES Existen dos tipo básicos de imágenes en dos dimensiones (2D) generadas por un ordenador: • Imágenes de mapa de bits (bitmap) • Imágenes vectoriales Una imagen bitmap o mapa de bits, está compuesta por pequeños puntos o píxeles con unos valores de color propios. El conjunto de esos píxeles componen la imagen total (por ejemplo, si queremos reproducir una fotografía de un paisaje en el ordenador, lo que hacemos es cuadricular la fotografía y asignar un único color para cada cuadrado) Las imágenes del tipo vectorial se representan con trazos geométricos, controlados por cálculos y fórmulas matemáticas, que toman algunos puntos de la imagen como referencia para construir el resto.

Imagen almacenado como bitmap La misma imagen en formato vectorial Las imágenes bitmap se almacenan como un conjunto de puntos (pixel), dispuestos en filas y columnas que pueden tener un nivel de gris o un color. Las imágenes vectoriales se almacenan como una descripción matemática de las rectas, curvas, rellenos, etc. que definen cada elemento de la imagen. Todo lo expresado anteriormente está orientado a la edición de la ilustración en un adecuado sistema de impresión, puesto que la representación de cualquier imagen, ya sea vectorial o mapa de bits, en una pantalla de ordenador siempre se muestra como pixels.

2.- IMÁGENES BITMAP Trataremos aquí los elementos de una imagen de mapa de bits: © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL ASPECTOS TEÓRICOS Página: 1/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ■ El Píxel Píxel es la abreviatura de la expresión inglesa Picture Element (Elemento de Imagen), y es la unidad más pequeña que encontraremos en las imágenes compuestas por mapa de bits. Es la unidad mínima en que se divide la retícula de la pantalla del monitor y cada uno de ellos tiene diferente color. Su tono de color se consigue combinando los tres colores básicos (rojo, verde y azul) en distintas proporciones. Un pixel tiene tres características distinguibles: a) forma cuadrada, b) posición relativa al resto de píxeles de un mapa de bits y

- profundidad de color (capacidad para

almacenar color), que se expresa en bits. ■ Tamaño El tamaño de una imagen bitmap es la cantidad de píxeles que tiene. Viene expresado como producto de dos números, el primer número indica el número de píxeles que tiene a lo ancho y el segundo número es la cantidad de píxeles que tiene a lo alto (las dos dimensiones de la imagen). Ejemplos 800x600 = 480000 píxeles.

■ Resolución de la imagen La resolución de una imagen es la cantidad de pixels que la describen. Suele medirse en términos de "pixels por pulgada1" (ppi o ppp) y de ella depende tanto la calidad de la representación como el tamaño que ocupa en memoria el archivo gráfico generado.

Por ejemplo, si una imagen digitalizada posee una resolución de 72 ppi, una resolución normal de las imágenes que nos encontramos en Internet, significa que contiene 5.184 pixels en una pulgada cuadrada (72 pixels de ancho x 72 pixels de alto). La resolución es uno de los parámetros fundamentales para definir la calidad de reproducción de una determinada imagen. En líneas generales, si queremos que mantenga el mismo nivel de calidad: hay que mantener la cantidad de información que posee la imagen (número de bits que ocupa) cuando modificamos sus dimensiones.

Uno de los conceptos que más se prestan a confusiones entre los aficionados, principalmente por creer que resolución es lo mismo que calidad. Ejemplo: Una pulgada es una medida de longitud británica que equivale a 2,54 cm. © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL ASPECTOS TEÓRICOS Página: 2/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE Vemos que tenemos la misma matriz de píxeles. El aspecto que varía es la cantidad de ellos por pulgada. Es decir, si utilizamos una resolución de 72 dpi la imagen será mucho mayor que si utilizamos 200 ppp.

La resolución no es una medida de la calidad de una imagen digital, aunque muy a menudo se utilice para ello; es una medida de nitidez o definición, de forma que cuanto más alta sea, mayor definición y viceversa. La calidad es la conjunción de dos factores: la resolución y el tamaño, y si ambas son elevadas, la calidad también lo será.

¿qué hacer cuándo cuándo aumento la resolución a una imagen? Observa que al cambiar la resolución, el tamaño de la imagen disminuye drásticamente. No confundamos con la anchura y altura en píxeles que quedaría constante. © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL ASPECTOS TEÓRICOS Página: 3/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ¿Cómo aumentar la resolución y el tamaño al mismo tiempo? Esto se le denomina remuestrear la imagen. Debemos realizar una escala con interpolación cúbica. Primero modificamos la resolución (1) y, posteriormente, el tamaño utilizando medidas de tamaño (pulgadas o milímetros) (2). Antes de modificar la resolución toma nota del tamaño original.

aplica una interpolación cúbica (3) y procede a realizar la escala (4). Existen dos tipos de cambios de resolución: remuestreo a la baja y remuestreo al alza, que reducen o aumentan, respectivamente, la resolución de la imagen. Este proceso, en los programas de tratamiento de imagen, se suele conocer como interpolación.En el primer caso se elimina parte de la información de la imagen y, normalmente, resulta deteriorada. En el segundo caso (al alza), el programa crea nuevos píxeles y se produce un emborronamiento de la imagen.

Aquí tenemos la resolución empleada por diferentes medios de representación de imágenes: Medio Resolución Pantalla

del ordenador (Internet) 72 ppp (píxeles por pulgadas o ppi) PRENSA DIARIA 90 ppp (píxeles por pulgada) 300 ppp, en impresión offset IMPRESORAS Conviene comprobar su calidad máxima de impresión. Es inútil trabajar con mayor resolución de lo que permita la impresora que se va a utilizar. Utilizan diferentes resoluciones, generalmente entre 300 ppp y 600 ppp (impresoras laser) FILMACIÓN FOTOGRÁFICA Suele emplear imágenes de 800-1500 ppp y mayores IMPRENTA 1200 ppp las fotocomponedoras para impresión © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL ASPECTOS TEÓRICOS Página: 4/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ■ Profundidad de color La profundidad de color, denominada profundidad del píxel o profundidad de bits, de una imagen se refiere al número de colores diferentes que puede contener cada uno de los puntos, o píxeles, que conforman un archivo gráfico. En otras palabras, la profundidad de color depende de la cantidad de información que puede almacenar un píxel (esto es, del número de bits -o cantidad máxima de datos- que definen al mismo). Cuanto mayor sea la profundidad de bit en una imagen (esto es, más bits de información por píxel), más colores habrá disponibles y más exacta será la representación del color en la imagen digital.

Un dibujo en blanco y negro tiene profundidad de 1 bit ya que con un bit es suficiente para saber si el punto es blanco o negro. Las imágenes en escala de grises y en paleta de color tienen profundidades de 4 bits (16 colores o escalas de grises) u 8 bits (256 colores o escalas de grises). Las imágenes en color real tienen una profundidad de 24 bits, ya que cada punto se necesita saber su componente roja, verde y azul, utilizándose 8 bits para cada una.

Pofundidad de color Tonos (colores) posibles Comentario 1 bit por pixel 2 tonos (21) Para arte lineal en blanco y negro 4 bits por pixel 16 tonos (24) Para imágenes en escala de grises 8 bits por pixel 256 tonos (28) Para escalas de grises. Modo color indexado. Es la cantidad de colores que admite el formato GIF así como muchas aplicaciones multimedia 16 bits por pixel 65536 tonos (216) 24 bits por pixel 16777216 tonos (224) Color real (relacionado con que el ojo humano puede distinguir un máximo de 16 millones de colores).

Modo de 8 bits para cada color básico (Rojo, Verde y Azul) 32 bits por pixel 4294967296 tonos (232) Modo CMYK para el color (Cyan, magenta, amarillo y negro) © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL ASPECTOS TEÓRICOS Página: 5/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ■ Formatos de Bitmap Formato Características Extensión BMP Formato de calidad. Los archivos tienen gran peso, por lo que suelen usarse en aplicaciones en CDROM. *.bmp TIFF Se utiliza para imágenes de alta calidad que van a ser impresas.

*.tif XCF Formato nativo de GIMP. Permite almacenar las imágenes con capas y modificarlas posteriormente. *.xcf PICT Es el formato característico de la plataforma MAC. Permite ser comprimido sin perder calidad de imagen. *.pic JPG Es el formato más utilizado en Internet para la reproducción de fotografías. Permite comprimir las imágenes pero produce pérdidas de calidad *.jpeg, *.jpg GIF Este formato también se utiliza en Internet, pudiendo comprimir las imágenes sin pérdidas. Utiliza el modo de color indexado para las imágenes que no tienen muchas tonalidades de color. Permite gráficos animados y transparencia *.gif PNG Tiene las ventajas de los formatos GIF y JPG. Comienza a ser muy utilizado en Internet por su gran capacidad de compresión, sin pérdida y con posibilidades de trasnparencia.

*.png

### 3. IMAGEN VECTORIAL

Las imágenes vectoriales son representaciones de entidades geométricas tales como círculos, rectángulos o segmentos. Están representadas por fórmulas matemáticas (un rectángulo está definido por dos puntos; un círculo, por un centro y un radio; una curva, por varios puntos y una ecuación). El procesador "traducirá" estas formas en información que la tarjeta gráfica pueda interpretar.

La mayoría de los sistemas gráficos sofisticados (CADD y software de animación) utilizan gráficos por vector. Las fuentes son representadas como vectores llamadas fuentes orientadas a objetos o fuentes de vectores. La mayoría de los dispositivos de salida (impresoras, monitores, demás) están basados en imágenes por puntos, esto significa que todos los gráficos vectoriales deben ser convertidos a un mapa de bits antes de su salida.

Gracias a la tecnología desarrollada por Macromedia y su software Macromedia Flash, o SVG ("complemento"), actualmente se puede utilizar el formato vectorial en Internet. © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL ASPECTOS TEÓRICOS Página: 6/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE

### 4. Formatos de imágenes vectoriales y sus Aplicaciones

Algunos de los formatos gráficos que aceptan vectores son AI (de Illustrator), CDR (de Corel Draw), DXF (formato de intercambio de AutoCad), .FH9, .FH10, .FH11... (de FreeHand), IGES, PostScript, SVG, SWF (de Flash), WMF (Windows MetaFiles), entre otras. Observa que la gran mayoría son formatos de software privativo.

Inkscape es un editor de gráficos vectoriales de código abierto, con capacidades similares a Illustrator, Freehand, CorelDraw o Xara X, usando el estándar de la W3C: el formato de archivo Scalable Vector Graphics (SVG). Las características soportadas incluyen: formas, trazos, texto, marcadores, clones, mezclas de canales alfa, transformaciones, gradientes, patrones y agrupamientos. Inkscape también soporta meta- datos Creative Commons, edición de nodos, capas, operaciones complejas con trazos, vectorización de archivos gráficos, texto en trazos, alineación de textos, edición de XML directo y mucho más. Puede importar formatos como Postscript, EPS, JPEG, PNG, y TIFF y exporta PNG asi como muchos formatos basados en vectores2.

### 5. Diferencias entre Mapa de bits y vectorial

Dado que una imagen vectorial está compuesta solamente por entidades matemáticas, se le pueden aplicar fácilmente transformaciones geométricas a la misma (ampliación, expansión, etc.), mientras que una imagen de mapa de bits, compuesta por píxeles, no podrá ser sometida a dichas transformaciones sin sufrir una pérdida de información llamada distorsión. La apariencia de los píxeles en una imagen después de una transformación geométrica (en particular cuando se la amplía) se denomina pixelación (también conocida como efecto escalonado). Además, las imágenes vectoriales (denominadas clipart en el caso de un objeto vectorial) permiten definir una imagen con muy poca información, por lo que los archivos son bastante pequeños3.

http://inkscape.org/

http://es.kioskea.net/video/vector.php3

© Jo.R.C.A. TEMA 2: IMAGEN DIGITAL ASPECTOS TEÓRICOS Página: 7/7

---

# 13.2 Tema 2. Imatge vectorial (Inkscape)

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE INKSCAPE (dibujo vectorial)1 Inkscape es un programa libre para realizar gráficos vectoriales. Estos gráficos están compuestos por formas elementales, tales como líneas y curvas (obtenidas a partir de cálculos matemáticos), definidas por parámetros como sus coordenadas.

1.- VENTANA DE INKSCAPE (versión 0.45) Iconos de la Barra de comandos que permiten acceder a varias opciones que aparecen en los menús

- Crear un nuevo documento
- Abrir un documento
- Guardar un documento
- Imprimir el documento

•Importar bitmap •Exportar a bitmap •Deshacer última acción •Anular la última acción •Copiar selección al portapapeles •Cortar selección al portapapeles •Pegar del portapapeles al puntero del ratón •Ajustar selección a la ventana •Ajustar dibujo a la ventana •Ajustar página a la ventana •Duplica el objeto seleccionado •Clona el objeto seleccionado •Corta la conexión entre el clon y el objeto original •Agrupa los objetos seleccionados •Desagrupa los objetos de un grupo seleccionado •Muestra el cuadro de diálogo para colores, rellenos y formato de bordes •Muestra el diálogo para texto •Muestra el diálogo para alinear objetos entre sí •Cuadro de preferencias globales de Inkscape •Cuadro que muestra las opciones del documento Acciones básicas

Seleccionar un objeto: Debe tener marcado el botón (F1) y hacer un clic sobre el objeto. Seleccionar varios objetos: Una vez seleccionado el primer objeto, para seleccionar otro objeto debe pulsar la tecla Shift (Mayúsculas) y, manteniéndola pulsada, hacer un clic sobre el siguiente objeto.

Zoom: para acercarse o alejarse al documento utilice las teclas + y – o el botón Teoría desarrollado por José M. Moreno del IES Salvador Gadea - Aldaia © Jo.R.C.A. Teoria Básica sobre Inkscape Aspectos Básicos de Edición de Imágenes – Video Multimedia_2_2_1 Página: 1/7 Barra de menú Barra de comandos Controles de herramientas Caja de herramientas Reglas (horizontal y vertical) Barras de desplazamiento (vertical y horizontal) Barra de estado

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE Escalar o rotar un objeto: Una vez marcado el botón de selección (F1 o el botón flecha), el primer clic sobre un objeto muestra los tiradores para modificar la escala del objeto (aumentar o disminuir el ancho o alto). El segundo clic muestra los tiradores para rotar el objeto Tiradores para la escala del objeto Tiradores para rotar el objeto Los controles de herramientas cuando tenemos seleccionado un objeto o grupo de objetos es

que permiten definir las coordenadas (X,Y) del vértice inferior izquierdo del rectángulo imaginario en el que está incluido el objeto (la coordenada (0,0) es el vértice inferior izquierdo de la hoja). W y H son lo ancho y alto de dicho de dicho rectángulo en las unidades seleccionados en el último botón despegable. Los cuatro primeros iconos realizan las transformaciones de giro de 90º a izquierda y derecha (alrededor del centro del rectángulo imaginario) y las reflexiones en vertical y horizontal (manteniendo el mismo rectángulo imaginario) 2.-HERRAMIENTAS DE TRAZADO 2.1.- Rectángulo (F4 o botón de la caja de herramientas ) Pulsar para definir una esquina y, sin soltar el botón, arrastrar para definir la diagonal del rectángulo. Si se mantiene pulsada la tecla Crtl se crean cuadrados o rectángulos con dimensiones 2:1 o 1:2 Pulsando la tecla Shift se crea el rectángulo o cuadrado desde el centro, es decir, el primer clic corresponde al centro del rectángulo y el segundo clic un vértice.

Una vez creado el rectángulo aparecen marcados 3 vértices. Para mostrarlos en un rectángulo ya creado, basta seleccionar el rectángulo y pulsar F4 o el icono de rectángulo o F2. Los vértices superior izquierdo e inferior izquierdo sirven para modificar el tamaño del rectángulo (arrastrar uno de esos puntos a una nueva posición). El vértice superior derecho sirve para redondear las esquinas.

En todos estos casos, los controles de herramientas cambian a las opciones de rectángulo: que permite modificar los radios del redondeo de las esquinas, las unidades de los radios o eliminar el redondeo. © Jo.R.C.A. Teoria Básica sobre Inkscape Aspectos Básicos de Edición de Imágenes – Video Multimedia_2_2_1 Página: 2/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE 2.2.- círculos, elipses y arcos (F5 o botón ) Pulsar para definir una esquina y, sin soltar el botón, arrastrar para definir la diagonal del rectángulo imaginario que contendría a la elipse, soltar el botón para crear la elipse. Permite crear círculos si se mantiene pulsada la tecla Crtl. Pulsando la tecla Shift se crea la elipse o círculo desde el centro.

Una vez creada la elipse aparecen marcados 3 puntos (para mostrarlos en una elipse ya creada, basta seleccionarla y pulsar F5 o el icono de círculos o F2). Los puntos superior e izquierdo sirven para modificar el tamaño de la elipse en altura y anchura. El vértice derecho sirve para formas arcos (si lo arrastramos por dentro de la elipse) o sectores (si lo arrastramos por fuera de la elipse) Controles de herramientas para círculos, elipses y arcos.

Inicio y Fin son el ángulo de comienzo y final del arco o sector (se hace al revés que en matemáticas, contando en el sentido de las agujas del reloj). Arco abierto cambia entre arco y sector. Para volver a mostrar toda la elipse, pulse el botón Completar. Nota: El programa recuerda la forma de la última elipse creada. Si ésta es un sector o arco, la próxima elipse que se cree tendrá la misma forma. Para evitar esto, pulse el botón Completar antes de dibujar la elipse nueva.

2.3.- Estrellas y polígonos (* o el botón ). Permite crear una estrella de cinco puntas (la figura predeterminada) desde su centro hacia el vértice de una de sus puntas. Pulsando Crtl se ajusta la rotación en ángulos de 15º (se puede varias en las preferencias de inkscape).

Una vez creada la estrella aparecen dos vértices marcados (para mostrarlos en una estrella ya creada, basta seleccionarla y pulsar * o el icono de estrellas o F2). El vértice más externo sirve para modificar el tamaño (el radio de la estrella). El vértice más interno cambia el tamaño y disposición del radio interno. Utilizando Crtl o Alt y moviendo estos vértices se pueden crear figuras muy llamativas

Los controles de herramientas para el objeto estrella son: Esquinas me permite crear estrellas de más de 5 puntas o de menos puntas. Polígono crea un polígono y no una estrella. Longitud del radio: puede variar entre 0 y 1, y representa la relación (división entre el radio menor y el radio base). Redondez: puede tomar cualquier valor y permite variar la redondez de las puntas de la estrella. Aleatorio

permite imitar el mundo real al crear la estrella de forma aleatoria. © Jo.R.C.A. Teoria Básica sobre Inkscape Aspectos Básicos de Edición de Imágenes – Video Multimedia_2_2_1 Página: 3/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE 2.4.- Espirales (F9 o botón ) Permite crear una espiral desde su centro. El objeto espiral creado presenta dos puntos que permiten enrollar o desenrollar la espiral desde su centro o desde fuera. Los controles de las espirales son

Vueltas: número de vueltas de la espiral. Divergencia: si es 1 la espiral es uniforme, menor que 1 es más densa en su periferia y si es mayor que 1 es más densa en su centro. Radio interior: varia entre 1 y 0 (si es 1 los dos puntos de la espiral coinciden y si es 0 muestra toda la espiral).

Predeterminados: fija la construcción a realizar en la forma predeterminada (5 vueltas, divergencia 1 y radio interior 0) 2.5.- Líneas a mano alzada (F6 o botón ) Permite crear una curva a mano alzada, basta hacer clic, arrastrar describiendo la forma que nos interese y soltar en el punto final. Con la tecla A podemos añadir tramos a otras curvas realizadas a mano alzada.

2.6.- Curvas Bézier y líneas rectas (Shift+F6 o botón ) Líneas rectas y líneas poligonales: basta ir haciendo clic en cada vértice y soltar, para acabar la línea debemos hacer un doble clic en el último punto o hacer un clic en el primer vértice (línea cerrada) Una curva Bézier es un trazo que pasa por varios puntos de control (llamados también nodos). Dos puntos de control definen una línea recta y dos tiradores (uno por cada nodo) que son los encargados de definir la curvatura de la línea (ver la figura) Para crear una curva Bézier hacer un clic y, sin soltar el botón, hacer otro clic, estos dos clic definen el tirador del nodo que se ha creado con el primer clic. Mover el ratón para ver la curvatura de la línea que queremos y hacer un clic para marcar el segundo nodo (un doble clic para finalizar la curva, un clic sin soltar el botón para marcar el segundo tirador y, así sucesivamente) Puede crear una línea Bézier de dos nodos y después pulsar a para conectar otra línea Bézier a uno de los dos nodos. El nodo central tendrá dos tiradores.

© Jo.R.C.A. Teoria Básica sobre Inkscape Aspectos Básicos de Edición de Imágenes – Video Multimedia_2_2_1 Página: 4/7 punto de control punto de control tirador tirador

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE 2.7.- Líneas caligráficas (Ctrl+F6 o botón ) Permite escribir como si fuera una pluma. Hacer un clic y, sin soltar el botón, mover el ratón como si estuviéramos escribiendo hasta soltar el botón para terminar el trazo.

Los controles correspondientes a las líneas caligráficas son: que permiten definir el ancho del trazo, si aumenta o disminuye el trazo durante la escritura (adelgazar), el ángulo que forma la pluma al escribir, la masa de la pluma (varía de 0 a 1) y la resistencia al escribir (varía de 0 a 1) 2.8.- Objetos de Texto (F8 o botón ) Permite escribir texto a partir del punto donde hacemos un clic. Antes de escribir el texto podemos cambiar el tipo de letra y tamaño con el cuadro de diálogo para texto (una A en la barra de comandos o pulsar Shift+Crtl+T). Una vez creado un texto se puede modificar seleccionando el objeto y pulsando F8 o F2, por ejemplo con Alt+Cursor Arriba o Alt+Cursor Abajo podemos subir o bajar la letra de la derecha.

3.- COLORES, GRADIENTES Y BORDES Podemos cambiar los colores de relleno y de los bordes de un objeto utilizando el cuadro de diálogo de relleno y borde (Shift+Crtl+F , botón o menú Objeto->Relleno y borde ). Este cuadro se compone de tres pestañas: Relleno, Color de trazo y Estilo de trazo. Las opciones de Relleno y Color de trazo son las mismas, pudiendo controlar el color de relleno de una figura y el del borde, respectivamente.

Inkscape lleva implementado tres sistemas de colores: RGB (rojo, verde, azul), HSV (Tono, saturación, luminosidad) y CMYK (Cían, magenta, amarillo y negro). Además de la opción alfa que permite definir la opacidad del relleno. Cada color u opción varia desde 0 a 255 (1 byte) (para los colores, 0 es sin luz y 255 es el máximo de luz, para la opacidad 0 es totalmente translúcido y 255 es totalmente opaco) Inkscape soporta tres tipos de relleno de color: color sólido, gradiente circular, gradiente lineal. Los gradientes se componen de dos colores, uno de partida y otro de llegada con una difusión de los colores que puede ser lineal o circular.

En la pestaña de estilo de trazo podemos definir el ancho del borde o trazo, la forma de las puntas y uniones, si queremos guiones en el trazo y las marcas de inicio y final del trazo. © Jo.R.C.A. Teoria Básica sobre Inkscape Aspectos Básicos de Edición de Imágenes – Video Multimedia_2_2_1 Página: 5/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE 4.- OPERACIONES CON OBJETOS • Agrupar/Desagrupar objetos: permite crear (o deshacer) un grupo con varios objetos seleccionados para que no varíen las distancias relativas entre ellos. Agrupar no supone crear un trazo único entre los objetos. Estas opciones se encuentran en el menú Objeto o bien en los iconos correspondientes de la barra de comandos.

• Combinar/Descombinar objetos: permite crear (o deshacer) un único trazo con los bordes de los objetos seleccionados. Estas opciones se encuentran en el menú Trazo. • Elevar/Bajar/Traer al frente/Bajar al fondo: el último objeto creado siempre se pone encima de los anteriores, mediante estas opciones podemos cambiar la forma de apilar objetos entre si. Estas opciones se encuentran en el menú Objetos o en los controles de herramientas cuando un objeto está seleccionado.

• Operaciones

booleanas

entre

objetos (Unión/Diferencia/Intersección/Exclusión/División/Cortar trazo): Estas opciones nos permite, a partir del solapamiento de dos figuras, obtener una tercera y nueva forma basada en el criterio seleccionado. Estas funciones son de gran utilidad porque permiten crear rápidamente formas que, con otro método, supondrían un gran esfuerzo. Estas opciones se encuentran en el menú Trazo.

• Duplicar/Clonar/Desconectar clon: Duplicar crea una copia del objeto seleccionado encima de él (podemos utilizar los cursores para mover el duplicado en horizontal o vertical). Clonar crea una copia del objeto seleccionado encima de

él,

pero

cualquier modificación que se realice sobre el objeto original también se realizará sobre el clonado. Con la opción desconectar del clon impediremos que el clon sea modificado al cambiar el original. Estas opciones se encuentran en el menú Edición y en los iconos correspondientes de la barra de comandos.

5.- EDICIÓN DE NODOS DE TRAZOS Y TIRADORES (F2) Al seleccionar un objeto y pulsar F2 obtenemos los siguiente barra de controles: Nos permite insertar o suprimir nodos de un trazo. Unir nodos y romper nodos. Convertir segmentos seleccionados en líneas rectas o en curvas Bézier. Convertir un objeto en trazos (como si hubiera sido creado con las opciones de línea a mano alzada o curvas Bézier). Convertir un borde seleccionado en trazo (como si fueran dos líneas).

Estas opciones nos permiten convertir objetos (rectángulos, elipses, elipses, estrellas, texto) en trazos (líneas o curvas Bézier) y modificar aleatoriamente sus nodos y tiradores. © Jo.R.C.A. Teoria Básica sobre Inkscape Aspectos Básicos de Edición de Imágenes – Video Multimedia_2_2_1 Página: 6/7

INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE 6.- OTRAS PRESTACIONES • Rejillas/Guías: la rejilla es una cuadricula en la hoja de trabajo que no se imprimirá, pero que nos puede servir para encajar los objetos en sus líneas y puntos de cortes.

Las guías son rectas horizontales o verticales puestas en posiciones fijas y que serán utilizadas como la rejilla. La rejilla se puede mostrar utilizando la opción correspondiente del menú Ver. En las opciones del documento se puede definir la rejilla y si los objetos creados se ajustarán a ella.

• Unidades utilizadas por el programa: las unidades de las que dispone el programa son puntos (pt), milímetros (mm), centímetros (cm), metros (m), pulgadas (in) y porcentajes de tamaño. • Simplificación de formas: esta opción se base en suavizar las formas seleccionadas creando un trazo con un aspecto mucho más natural. Podemos hacer tantas simplificaciones como queramos pulsando Ctrl+L o la opción correspondiente del menú Trazo.

• Mosaicos (Patrones): esta opción nos permite crear un patrón rectangular a partir de una forma seleccionada. Está opción se encuentra en el menú Edición. Para crear un mosaico con un objeto, primero seleccionamos el objeto, después elegimos la opción objetos a patrón del menú Edición y, por último, aumentamos el rectángulo del objeto seleccionado a un tamaño mayor donde aparecerá el mosaico.

© Jo.R.C.A. Teoria Básica sobre Inkscape Aspectos Básicos de Edición de Imágenes – Video Multimedia_2_2_1 Página: 7/7

---
