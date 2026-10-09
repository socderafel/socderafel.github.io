---
layout: default
title: "UT22 — GIMP — Aplicacions Ofimàtiques | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT22 Completa"
prev_url: "../ut20/ut2001.html"
prev_label: "⬅️ 20.1 Treball Final Base de dades"
next_url: "../ut22/ut2201.html"
next_label: "22.1 Tema 1: Imatge Digital ➡️"
---

# 📘 UT22 — GIMP (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**22.1 Tema 1: Imatge Digital**](#ut2201) (o [obrir en pàgina individual ➡️](./ut2201.md) )
> - [**22.2 Tema 2. Imatge vectorial (Inkscape)**](#ut2202) (o [obrir en pàgina individual ➡️](./ut2202.md) )
> - [**22.3 Tema 2. Recursos per a pràctiques**](#ut2203) (o [obrir en pàgina individual ➡️](./ut2203.md) )
> - [**✍️ Activitats pràctiques UT22**](#ut22actividades) (o [obrir en pàgina individual ➡️](./ut22actividades.md) )

---

## 22.1 Tema 1: Imatge Digital

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

## 22.2 Tema 2. Imatge vectorial (Inkscape)

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

## 22.3 Tema 2. Recursos per a pràctiques

> **💡 📦 Contingut del paquet comprimit (recursos_imagen_inkscape.zip)**
> - `recursos/IES101.JPG`
> - `recursos/Mural_dia_Paz.gif`
> - `recursos/doc-matematicas.jpg`
> - `recursos/icono_personal.ico`
> - `recursos/icono_personal.png`
> - `recursos/icono_personal.svg`
> - `recursos/ies.png`
> - `recursos/inkscape.gif`
> - `recursos/instituto3.gif`
> - `recursos/instituto_portada.jpg`
> - `recursos/jr.svg`
> - `recursos/juandegaray.svg`
> - `recursos/linux-tux-large.jpg`
> - `recursos/linux4.jpg`
> - `recursos/logo_sg.jpg`
> - `recursos/matematicas.gif`
> - `recursos/mates.svg`
> - `recursos/onu.JPG`
> - `recursos/rect17200.png`
> - `recursos/selloministerio.jpg`
> - `recursos/wiregulls.png`

---

## ✍️ Activitats pràctiques UT22

> **✍️ 📋 Exercici / Qüestionari 22.1 — Tema 2. Pràctica 1 Inkscape**
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE INKSCAPE – USO DE HERRAMIENTAS
>
> ### 1. Crea una forma de Rectángulo. Cambia el color del relleno
>
> (147,160,0,245), el color (observa imagen de la derecha RGBA d9aea7ff) y estilo del trazo (Ancho: 9,40, unión cuadrada, inglete 0, guiones tamaño 10 y forma ­ ­ ­ y una opacidad del 72).
>
> ### 2. Crea un círculo y cambia el color de relleno y el trazo. Trata de que ambos se
>
> encuentren en el vértice inferior derecho del rectángulo. Utilizando el botón de selección (F1) selecciona ambos objetos. En la Barra de Menú / Trazo aplica las diversas opciones que te mostramos en la imagen: unión, diferencia, intersección, exclusión, etc. En la imagen de la izquierda podrás observar el resultado de exclusión.
>
> - Procede a deshacer todo lo realizado y vuelve el dibujo al punto 2. Observarás que puedes
>
> movilizar cada objeto por separado. Seleeciona, nuevamente, ambos objetos y en Objeto / agrupar te convierte ambos en uno sólo. Utiliza Objeto / Desagrupar para dividir ambos objetos.
>
> ### 4. Haz clic dos veces en el cuadrado observa que te aparecen unas flechas
>
> en forma redondeada. Esto permite, en cualquiera de ellos, bien deformar la imagen, bien rotarla. Si haces un solo clic te permite ampliarla a lo ancho y en lo alto. Comprueba su utilidad. El resto de las propiedades las encuentras en la barra de herramientas (rotar, mirror, enviar al fondo, a delante, etc).
>
> - Genera una estrella con las características de la imagen: 6 esquinas, radio:0,33. Modifica la
>
> redondez y el aleatorio y te encontrarás con verdaderas figuras. Igualmente, baja la longitud © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL Práctica 2-B-1 Uso de Herramientas del Inkscape Página: 1/6
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE de radio (0,01) y aumenta las esquinas(32). Observa posibles figuras.
>
> ### 6. Escribe un texto. Modifica el tipo de letra por Domestic Manners,
>
> tamaño 72
>
> ### 1. Utiliza un degradado en el color y un trazo
>
> degradado, igualmente, y con un ancho de 2 mm. Observa la calidad del texto.
>
> ### 7. Selecciona dicho texto. Edición / clonar
>
> 2.Haz clic en el texto y muévelo. Observa que tienes dos. Selecciona el original. Cambia el color o el degradado. Qué ocurre con el segundo texto? Todos los cambios que hagas en el original ocurren en el clonado. 7.1.Puedes seleccionar el texto original y edición / desconectar clon. Aplica cambios al original. Observarás que ya son dos objetos independientes.
>
> #### 7.2. Selecciona un objeto cualquiera (ejemplo la
>
> estrella de muchas puntas) y Edición / clones en mosaico. Modifica aspectos de las diferentes pestaña
>
> - simetría: P1, Desplazamiento: 4 filas y 4
>
> columnas, en escalar reduce porcentualmente los valores (10 a 15%), rotación y opacidad a tu gusto. Observa el resultado.
>
> - Crea una imagen nueva de tamaño A4. Importemos una imagen de nuestra
>
> carpeta personal. Utiliza en botón oscuro de tu barra de herramientas. Selecciona la imagen y acepta. Tienes una imagen en tu página Recursos Didácticos. Selecciona el tipo de letra y aplicar para que surja efecto Puedes utilizar el botón respectivo de la barra de herramientas © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL Práctica 2-B-1 Uso de Herramientas del Inkscape Página: 2/6
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE
>
> #### 8.1. Abre la imagen linux4.jpg
>
> ### 3. Muestra la rejilla
>
> 4 y utilizaremos las guías para una mayor precisión en nuestros dibujos. Observa las zonas marcadas en rojo para arrastrar las guías. Puedes arrastrar cuantas requieras.
>
> ### 9. Selecciona la imagen y utiliza Trazo / vectorizar un map
>
> a de bits. Vectorizar no es reproducir un duplicado exacto de la imágen original; la idea es interpreta mapas de bits blanco y negro y producir un set de curvas. El usuario observará las tres opciones de filtro disponibles: Luminosidad de la imágen, Detección de bordes óptima y reducción. Las últimas versiones se ayudan de otro apartado que son las pasadas múltiples.
>
> La encontrarás en Recursos Didácticos Ver / Rejilla. Para usar las guías pincha en la zona superior e izquierda de tu zona de diseño y arrastra las mismas hasta la posición que desees. © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL Práctica 2-B-1 Uso de Herramientas del Inkscape Página: 3/6
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE
>
> #### 9.1. Luminosidad de imagen
>
> 5: Esta usa realmente la suma del rojo, verde y azul (o escala de grises) de un pixel como un indicador de si este puede ser considerado blanco o negro. La luminosidad
>
> puede
>
> ser configurada desde 0.0 (blanco) a 1.0 (negro). a)Aplica una luminosidad de 0,5. Dale a vista preliminar y aceptar. Utiliza la herramienta de seleccionar para mover el nuevo dibujo vectorizado hacia un lado. Prueba con otras luminosidades. Observa el resultado en la imagen de la derecha.
>
> #### 9.2. Detección de bordes óptima: Este filtro
>
> usa el algoritmo de detección de bordes desarrollado por J. Canny y se basa en la búsqueda rápida de contrastes similares. Observa el resultado de los diversos niveles.
>
> #### 9.3. Reducción de colores: esta buscará los
>
> bordes donde los colores cambian, uniformemente igual a brillo y contraste. Las opciones de configuración aquí son: Número de colores (2 a 64), decide cuantos colores de salida pueden haber, si el mapa de bits intermedio era de color. Este entonces decide blanco/negro según si el color ha sido uniforme o posee un indice raro.
>
> a)Si usas la reducción a 2 colores (mínimo) verás todo blanco, mientras que si usas 64 colores (máximo) veras una imagen casi difuminada tal como te mostramos en la imagen.
>
> #### 9.4. Pasadas múltiples: Dispone de tres
>
> opciones, Luminosidad, color y monocromo. Las pasadas van desde 2 hasta 64. Si utilizas el color con un suavizado, apilado, 64 pasadas, obtendrás una figura con un aspecto difuminado. Si utilizas la luminosidad con las mismas características http://www.inkscape.org/doc/tracing/tutorial­tracing.es.html
>
> © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL Práctica 2-B-1 Uso de Herramientas del Inkscape Página: 4/6
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE
>
> ### 10. Selecciona varios objetos que hayas realizado. Archivo / exportar
>
> mapa de bits / Selecciona la carpeta en la que guardar la imagen y su nombre (1) y exportar (2). Tienes un fichero png en tu carpeta con la imagen vectorial generada en inkscape. Puedes modificar los dpi 6 de la imagen.
>
> ### 11. Otros aspectos a utilizar: Crear espirales, dibujar a mano alzada,
>
> dibujar curvas Bézier y líneas rectas y Líneas caligráficas. 11.1. Crea una espiral de 5,50 vueltas con una divergencia de 0,5 y un radio interior de 0. a)Repite el proceso anterior pero con una divergencia de 1,5. Qué diferencia encuentras? Observa la espiral derecha con los valores por defecto.
>
> b)Selecciona una de tus espirales y Objeto / Relleno y borde y aplica un color o degradado a la misma. Aplica, igualmente, un color de trazo y de ancho 3mm.
>
> - Aplica un degradado a tu espiral
>
> 8. 11.2.Utiliza el botón de dibujar a mano alzada y dibuja curvas y rectas con las Bézier. Selecciona dichos objetos y aplica cambios como estilo y colores del trazado, tamaños, etc. a)Utilizando tu imaginación genera curvas bezier 9.
>
> #### 11.3. Uno de los botones que le puedes sacar mucho partido son las líneas caligráficas
>
> simulan la escritura a pluma. dot per inch (píxeles por pulgada) La divergencia hace que la esperial sea uniforme con 1. Selecciona un color, aplica un degradado y aplica que el degradadado sea reflejado Si deseas generar curvas has de hacer clic al dibujar el trazo y sin soltar hacer otro clic © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL Práctica 2-B-1 Uso de Herramientas del Inkscape Página: 5/6
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE
>
> - Escribe tu nombre con los siguientes valores en los controles de las líneas caligráficas
>
> • ancho (0,25), adelgazar (0,20), ángulo (25), fijación (0,80), Masa (0,10) y resistencia (0,50) b)Modifica la resistencia a un valor inferior. Seguro que te resulta más complicado escribir. Y aplicando una cercana al 1? simula un marcador de punta gruesa difícil de llevar en la escritura.
>
> - Modifica la masa. Pon un valor cercano a uno y otro cercano a cero e intenta escribir el
>
> mismo texto. Adelgazar puede tomar valores entre ­1 y 1. Prueba con las diversas opciones.
>
> #### 11.4. Para utilizar el seleccionador de colores y aplicar un color a un objeto debes
>
> realizar los siguientes pasos: a)Selecciona el objeto a cambiar el color
>
> - Haz clic en El botón de la izquierda y haz clic en el color que desees. Observa que el
>
> objeto seleccionado cambia de color.
>
> #### 11.5. Selecciona un objeto, pulsa F2 y te permite realizar múltiples
>
> operaciones con los tiradores. Ejemplo: Realiza un cuadrado. Selecciona el mismo. F2 y aplica el último trazo. Selecciona el vértice derecho y tira hacia el centro. Observa el efecto.
>
> #### 11.6. Mayor información sobre las diversas opciones del Inkscape en http://inkscape.org/doc/
>
> 10 Parámetro adelgazar puede tomar valores entre ­1 y 1; cero significa que el ancho es independiente a la velocidad, valores positivos hacen los trazos rápidos más delgados, valores negativos hacen los trazos rápidos más amplios © Jo.R.C.A. TEMA 2: IMAGEN DIGITAL Práctica 2-B-1 Uso de Herramientas del Inkscape Página: 6/6

> **✍️ 📋 Exercici / Qüestionari 22.2 — Tema 2. Pràctica 2 Inkscape**
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE CARTEL PUBLICITARIO La idea de esta práctica es utilizar este programa para generar un cartel o lámina anunciando un concurso matemático en nuestro centro. Las imágenes utilizadas para el mismo las puedes encontrar en el apartado de Recursos Didácticos de este apartado.
>
> ### 1. Conociendo el Entorno
>
> En el manual de http://joaclintistgud.files.wordpress.com//logo_a_logo.pdf econtrarás la definición de cada uno de los apartados. 2. Fase Inicial. Definiendo los aspectos generales. ● Abrimos el programa. ● Indicamos que nuestro cartel lo vamos a diseñar apaisado. Utilizaremos los milímetros y el tamaño será un A4. Debemos ir a Archivo / Propiedades del documento.
>
> © Jo.R.C.A. Práctica 2-B-2 CREAR CARTEL PUBLICITARIO Aspectos Básicos de Edición Vectorial Página: 1/8
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ○ En la pestaña página modificamos en (A) las unidades con las que vamos a trabajar (mm). ○ En formato (B) indicamos el A4 y en orientación del papel (C) indicamos horizontal. ○ En la pestaña Rejillas/Guías le indicamos que queremos mostrar la rejilla. Las unidades de medida indicamos, igualmente, que son mm.
>
> El resto de los aspectos los dejamos para esta práctica los que tiene por defecto. ● En este cartel utilizaremos dos capas. Esto nos permitirá en siguiente curso sólo modificar aquellos objetos que cambien. Para ello definiremos una capa fondo y una capa annual. ● Por defecto existe la capa 1 (ver zona inferior izquierda de nuestro documento activo).
>
> ● Modificamos el nombre de la capa por fondo. Capa / Renombrar capa. © Jo.R.C.A. Práctica 2-B-2 CREAR CARTEL PUBLICITARIO Aspectos Básicos de Edición Vectorial Página: 2/8
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ● Crearemos una nueva capa. Capa / Añadir capa. Por defecto la posición es encima de la actual. ● Activamos la capa fondo. La capa que tenga el punto a la izquierda es la capa activa.
>
> - Iniciando el Cartel.
>
> Vamos a detallar en el cartel todos los elementos que son comunes de un curso a otro: Concurso Matemático, El nombre del Instituto, el mes de noviembre, El lugar de exposición de trabajos y las imágenes comunes (instituto). ● Seleccionamos el botón crear y editar textos de la caja de herramientas del lateral izquierdo de nuestro documento. Haz clic en la zona superior derecha (no importa el tamaño ni el tipo de letra) y escribe “Concurso Matemático” ● Utilizando la herramienta seleccionar objetos podremos desplazar nuestro objeto texto hacia el lugar adecuado.
>
> ● Utilizando la tecla seleccionar tipos de texto (icono de la barra de comandos zona superior) modificamos las propiedades del mismo. Elige la pestaña tipografía, Modifica la letra por URW Chancery L, el estilo (B) Bold, el tamaño (C) 56 y aplica (D). Con la mano desplaza el texto hacia la zona superior derecha del borde de nuestro documento.
>
> ● Agregaremos una imagen. Archivo / importar y selecciona la imagen a importar. © Jo.R.C.A. Práctica 2-B-2 CREAR CARTEL PUBLICITARIO Aspectos Básicos de Edición Vectorial Página: 3/8
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ● Podemos escalar la imagen de varias maneras: ○ Utilizando los tiradores de las esquinas (poco recomendable) ○ Selecciona la imagen, Botón derecho / Propiedades de la Imagen. Modifica el ancho y alto de los píxeles de la imagen (400 x 300 en nuestro caso) ○ Si nuestra imagen opaca demasiado nuestro cartel podemos disminuir su opacidad. Selecciona la imagen. Haz clic en la barra de comandos en la herramienta de editar estilo de objeto o en la barra de menú Objeto / Propiedades del Objeto.
>
> Disminuye la opacidad al 86%. Ubica dicha imagen en la esquina inferior derecha de la imagen. ● Importaremos una imagen para poner como fondo. ○ Archivo / importar / matémáticas.gif ○ Ubica la imagen en la zona del cartel que indicamos. Cambia sus propiedades a una opacidad del 40%.
>
> Utilizando los tiradores deja el resultado como mostramos
>
> a
>
> tu derecha. ○ Para que no moleste a futuros objetos que ubiquemos en nuestro cartel en el menú Objeto / bajar al fondo. ● Activamos la Capa annual. ○ Utilizando herramienta de caligrafía realizamos el dibujo de 4 (en números romanos IV). © Jo.R.C.A. Práctica 2-B-2 CREAR CARTEL PUBLICITARIO Aspectos Básicos de Edición Vectorial Página: 4/8
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ○ Seleccionemos, con la herramienta respectiva, todos los elementos que componen el número y los agruparemos como un sólo elemento. Ve a Objeto / agrupar. ○ Cambia el color de la letra. Selecciona el nuevo objeto (IV) y, en la paleta, de la zona inferior, elige un color diferente. Observa el resultado.
>
> ● Para asegurarte que trabajas con la capa adecuada, pasa a invisible la capa no utilizada, en este caso fondo. Sólo debes hacer clic en el ojo en la barra de estado. Otra forma de realizarlo es utilizar el candado. Si bloqueas el candado de una capa no permite trabajar sobre ella, pero si permite ver lo que hay en la otra capa.
>
> ● Vamos a utilizar relleno y bordes. ○ Utilizando la herramienta de texto, teclea Salvador Gadea. elige el tipo de letra que desees. Estira, con los tiradores, de tal forma que sea del mismo tamaño que lo que hayas realizado con la Estilográfica (IES). Observa la Imagen.
>
> ○ Ahora vamos a aplicar un degradado a la parte de relleno de las letras. Selecciona el texto, selecciona en la barra de herramientas la de relleno y bordes. ○ Selecciona (A) el relleno, si deseamos degrado lienal (B), para modificar el degradado (c) editar y desenfocamos (d) algo el objeto texto.
>
> © Jo.R.C.A. Práctica 2-B-2 CREAR CARTEL PUBLICITARIO Aspectos Básicos de Edición Vectorial Página: 5/8
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ○ Al Editar (C) nos aparece otra pantalla. Para crear un degradado propio. Vamos seleccionando un color en la rueda (E), añadimos parada (F) y así hasta finalizar (G). Puede que no se vean bien las letras. Lo vamos a solucionar.
>
> ○ Color del trazo. En la imagen anterior habíamos elegido el relleno, ahora usaremos la pestaña de color de trazo. Esto es el color o aureola que sobresale externamente al objeto. en el caso que te mostramos hemos elegido un color azul sin degradado.
>
> ○ Estilo del trazo. Las líneas que llevan las letras en su exterior. Es decir, aquello que remarca las mismas. En (1) indicas el ancho. Utiliza las flechas para subir y bajar y observa el resultado. En (2) el estilo de las uniones, en (5) el tipo de línea. Haz una prueba probando cada una de las opciones y elige la que te guste.
>
> ● Rellena con textos y, utilizando, el resto de herramientas de tu panel realiza la composición. Cambia tipos de letra y rellenos. Inserta alguna imagen más. © Jo.R.C.A. Práctica 2-B-2 CREAR CARTEL PUBLICITARIO Aspectos Básicos de Edición Vectorial Página: 6/8
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE
>
> - Contenidos de las Capas.
>
> Según hemos realizado el ejercicio la capa fondo contiene La capa annual contiene lo siguiente: Es decir, esta capa contiene todos los elementos que pueden cambiar de un ejercicio a otro. La base siempre la tendremos en fondo.
>
> - Exportar nuestro Cartel Publicitario.
>
> En muchas ocasiones nuestros carteles se llevan a una litográfica para que, utilizando máquinas adecuadas, nos realicen el trabajo de impresión. Igualmente, podemos colocar el cartel como imagen en nuestra web del centro. ● Primero, guardamos nuestro cartel, con su formato nativo (extensión svg), antes de realizar procesos de exportación. De esta forma podemos recuperar nuestras capas originales.
>
> © Jo.R.C.A. Práctica 2-B-2 CREAR CARTEL PUBLICITARIO Aspectos Básicos de Edición Vectorial Página: 7/8
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE ● Exportar a mapa de bits: Archivo / Exportar mapa de bits. Por defecto tiene el formato png. Cambia el nombre y la extensión en nombre de archivo. Desde el Gimp podemos abrirlo y exportarlo con cualesquiera de otros formatos (ejemplo: jpg) ○Nota: Como no hemos puesto ningún color de fondo la imagen, donde no tenemos objetos, es totalmente transparente.
>
> ● Exportar
>
> en Formato
>
> PDF. Archivo / Guardar como e indicar nombre del fichero (A), y en (B) el tipo de fichero (PDF). Nota: Si tienes alguna capa invisible en el resultado final no aparecerá el contenido de la misma. © Jo.R.C.A. Práctica 2-B-2 CREAR CARTEL PUBLICITARIO Aspectos Básicos de Edición Vectorial Página: 8/8

> **✍️ 📋 Exercici / Qüestionari 22.3 — Tema 2. Pràctica 3 Inkscape**
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE CREAR ICONOS Muchas veces requerimos diseñar iconos, bien para la web 2.0, como para personalizar nuestras carpetas en nuestro Sistema Operativo. Hay infinidad de programas que permite realizar esta tarea. En esta práctica vamos a descubrir una de ellas y muy sencilla.
>
> ### 1. Abrimos nuestro programa Inkscape
>
> (Aplicaciones / Gráficos / Inkscape1).
>
> ### 2. Por defecto siempre tendremos un
>
> tamañoA4. Selecciona en Archivo / nuevo / icon_64x64. Con ello tenemos un formato de icono.
>
> - Ya tenemos nuestra zona de trabajo habilitada para crear nuestro icono.
>
> ### 4. Nuestro icono no queremos
>
> que sea transparente. Utilizando la
>
> herramienta
>
> cuadrado, rellenamos la zona de trabajo con un color (amarillo). Utiliza , en la parte superior, la Barra de comandos el editar estilo de objeto / relleno / color uniforme / selecciona un color en la rueda. Deja la opacidad al 100%
>
> - Vamos a pintar una estrella “especial”.
>
> Dibuja la estrella en el centro de la zona de trabajo. Pon un color azul a la estrella utilizando la paleta en la zona inferior (barra de estado). Este programa existe en multiplataforma, por consiguiente lo podrías utilizar en Windows © Jo.R.C.A. Práctica 2-B-3 CREAR ICONOS Aspectos Básicos de Edición Vectorial – Página: 1/4
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE
>
> ### 6. Modifica los valores en la zona superior por las que mostramos en la imagen
>
> Esquinas 5, longitud del radio 0,50, redondez 1,50 y aleatorio 0,07. Observa el resultado de nuestra estrella.
>
> ### 7. En Edición / Clonar / Crear clon. Con ello creamos una copia
>
> clonada de nuestra estrella. Utilizando la flecha de seleccionar desplaza hacia zonas opuestas ambas estrellas.
>
> ### 8. Selecciona la estrella superior. En trazo / Objeto a trazo y
>
> convertimos nuestra estrella en puntos de rectificación o nodos.
>
> ### 9. Utilizando nuestro editor de nodos, modifica a tu
>
> gusto, estirando los puntos o nodos. Observa, como teníamos un clon, lo que hacemos con la estrella original se reproduce en la inferior. © Jo.R.C.A. Práctica 2-B-3 CREAR ICONOS Aspectos Básicos de Edición Vectorial – Página: 2/4
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE
>
> ### 10. Aplica un degradado a tu gusto. Haz
>
> clic en la herramienta de Editar Estilo del Objeto. Selecciona (A) el degradado lineal. Edita (B) y elige colores (C) con la opacidad que desees (D) y ve añadiendo paradas (E) (diferentes colores en el degradado).
>
> ### 11. Crea un texto en la zona central Aplica el
>
> color y la letra que gustes. En mi caso Castle Dracusteín, color negro.
>
> ### 12. Utiliza la herramienta crear y editar gradientes. En la zona superior elige el
>
> gradiente y edita para el color del gradiente. Estira la herramienta editar gradiente en el texto y el efecto puede ser como este.
>
> - Utilizando dibujar líneas a mano alzada, dibuja una línea.
>
> Convierte el objeto a trazo. Aplica un degradado. El resultado podría ser.
>
> ### 14. Eso podría ser nuestro icono. Guarda, antes de proceder
>
> a exportar, tu imagen vectorial como icono_personal.svg (formato propio del inkscape): Archivo / guardar como. © Jo.R.C.A. Práctica 2-B-3 CREAR ICONOS Aspectos Básicos de Edición Vectorial – Página: 3/4
>
> INTRODUCCIÓ A LA CREACIÓ DE MATERIALS DIDÀCTICS MULTIMÈDIA AMB SOFTWARE LLIURE
>
> ### 15. Exportar nuestro icono a mapa de bits (png). Archivo /
>
> Exportar mapa de bits. Indica la carpeta y el nombre del fichero. El fichero que hemos exportado es de formato png.
>
> ### 16. Abre con el gimp dicho fichero (png). Ve Archivo /
>
> Guardar como e indicar como fichero extensión ico. El sistema te solicita información detallada del icono. Elige las características que desees y ya tienes el icono listo para su utilización © Jo.R.C.A. Práctica 2-B-3 CREAR ICONOS Aspectos Básicos de Edición Vectorial – Página: 4/4
