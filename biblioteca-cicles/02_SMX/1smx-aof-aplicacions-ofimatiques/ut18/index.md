---
layout: default
title: "UD11 — BDA. Base de Datos. INFORMES · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT18 Completa"
prev_url: "../ut17/ut1701.html"
prev_label: "⬅️ 10.1 Tema 5. FORMULARIS"
next_url: "../ut18/ut1801.html"
next_label: "11.1 Tema 6. INFORMES ➡️"
---

# 📘 UD11 — BDA. Base de Datos. INFORMES (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**11.1 Tema 6. INFORMES**](./ut1801.md)

---

# 11.1 Tema 6. INFORMES

> **📌 🏷️ Apunt de la Unitat**
> **TEMA 6. INFORMES**

> **📌 🏷️ Apunt de la Unitat**
> **TEMA**

> **📌 🏷️ Apunt de la Unitat**
> **EXERCICIS INFORMES**

> **📌 🏷️ Apunt de la Unitat**
> **VIDEOS**

> **🔗 Recurs Web: Video 12.1. Crear informes**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=v-96yHvlu-c) ↗️**](https://www.youtube.com/watch?v=v-96yHvlu-c)

> **🔗 Recurs Web: Video 12.2. Agrupar dades en formularis**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=e3O4F42Bq_g) ↗️**](https://www.youtube.com/watch?v=e3O4F42Bq_g)

> **🔗 Recurs Web: Video 13.1. Controls de formularis**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=C4d1ECkDsBY) ↗️**](https://www.youtube.com/watch?v=C4d1ECkDsBY)

> **🔗 Recurs Web: Video 13.2. Controls de formularis (2 part)**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=ug4efae60AA) ↗️**](https://www.youtube.com/watch?v=ug4efae60AA)

---

Tema 6

M i c r o s o f t A C C E S S

I N F O R M E S

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Índice

#### CAPÍTULO 10: LOS INFORMES

INTRODUCCIÓN

CREAR UN INFORME

EL ASISTENTE PARA INFORMES

LA VISTA DISEÑO DE INFORME

LA PESTAÑA DISEÑO DE INFORME

EL GRUPO CONTROLES

AGRUPAR Y ORDENAR

IMPRIMIR UN INFORME

LA VENTANA VISTA PRELIMINAR

#### CAPÍTULO 11: LOS CONTROLES DE FORMULARIO E INFORME

11.1 PROPIEDADES GENERALES DE LOS CONTROLES

#### 11.2. ETIQUETAS Y CUADROS DE TEXTO

CUADRO COMBINADO Y CUADRO DE LISTA

GRUPO DE OPCIONES

CONTROL DE PESTAÑA

IMÁGENES

DATOS ADJUNTOS Y MARCOS DE OBJETOS5

EL BOTÓN

CONTROLES ACTIVEX

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Capítulo 10: Los informes

Introducción

Los informes sirven para presentar los datos de una tabla o consulta, generalmente para imprimirlos. La diferencia básica con los formularios es que los datos que aparecen en el informe sólo se pueden visualizar o imprimir (no se pueden modificar) y en los informes se puede agrupar más facilmente la información y sacar totales por grupos.

En esta unidad veremos cómo crear un informe utilizando el asistente y cómo cambiar su diseño una vez creado.

Crear un informe

Para crear un informe podemos utilizar las opciones del grupo Informes, en la pestaña Crear

 Informe consiste en crear automáticamente un nuevo informe que contiene todos los datos de la tabla o consulta seleccionada en el Panel de Navegación.  ・ Diseño de informe abre un informe en blanco en la vista diseño y tenemos que ir incorporando los distintos objetos que queremos aparezcan en él. Este método no se suele utilizar ya que en la mayoría de los casos es más cómodo y rápido crear un autoinforme o utilizar el asistente y después sobre el resultado modificar el diseño para ajustar el informe a nuestras necesidades.

 Informe en blanco abre un informe en blanco en vista Presentación.   Asistente para informes utiliza un asistente que nos va guiando paso por paso en la creación del informe. Lo veremos en detalle en el siguiente apartado.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

 El asistente para informes

En la pestaña Crear, grupo Informes, iniciaremos el asistente pulsando el botón .

Esta es la primera ventana que veremos 

En esta ventana nos pide introducir los campos a incluir en el informe.

Primero seleccionamos la tabla o consulta de donde cogerá los datos del cuadro Tablas/Consultas este será el origen del informe. Si queremos sacar datos de varias tablas lo mejor será crear una consulta para obtener esos datos y luego elegir como origen del informe esa consulta.

A continuación seleccionamos los campos haciendo clic sobre el campo para seleccionarlo y clic sobre el botón o simplemente doble clic sobre el campo.

Si nos hemos equivocado de campo pulsamos el botón y el campo se quita de la lista de campos seleccionados.

Podemos seleccionar todos los campos a la vez haciendo clic sobre el botón o deseleccionar todos los campos a la vez haciendo clic sobre el botón .

Luego, pulsamos el botón Siguiente > y aparece la siguiente ventana

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

En esta pantalla elegimos los niveles de agrupamiento dentro del informe. Podemos agrupar los registros que aparecen en el informe por varios conceptos y para cada concepto añadir una cabecera y pie de grupo, en el pie de grupo normalmente se visualizarán totales de ese grupo.

Para añadir un nivel de agrupamiento, en la lista de la izquierda, hacer clic sobre el campo por el cual queremos agrupar y hacer clic sobre el botón (o directamente hacer doble clic sobre el campo).

En la parte de la derecha aparece un dibujo que nos indica la estructura que tendrá nuestro informe, en la zona central aparecen los campos que se visualizarán para cada registro, en nuestro ejemplo, encima aparece un grupo por código de curso.

Para quitar un nivel de agrupamiento, hacer clic sobre la cabecera correspondiente al grupo para seleccionarlo y pulsar el botón . Si queremos cambiar el orden de los grupos definidos utilizamos los botones , la flecha hacia arriba sube el grupo seleccionado un nivel, la flecha hacia abajo baja el grupo un nivel.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Con el botón podemos refinar el agrupamiento. Haciendo clic en ese botón aparecerá el siguiente cuadro de diálogo

Para cada campo por el que se va a agrupar la información del informe podremos elegir su intervalo de agrupamiento. En el desplegable debemos indicar que utilice un intervalo en función de determinados valores, que utilice las iniciales, etc. Las opciones de intervalo variarán en función del tipo de datos y los valores que contenga. Después de pulsar el botón Aceptar volvemos a la ventana anterior.

Una vez tenemos los niveles de agrupamiento definidos hacemos clic en el botón Siguiente > y pasamos a la siguiente ventana que verás en la siguiente página...

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

En esta pantalla podemos elegir cómo ordenar los registros. Seleccionamos el campo por el que queremos ordenar los registros que saldrán en el informe, y elegimos si queremos una ordenación ascendente o descendente. Por defecto indica Ascendente, pero para cambiarlo sólo deberemos pulsar el botón y cambiará a Descendente. Como máximo podremos ordenar por 4 criterios (campos) distintos.

Para seguir con el asistente, pulsamos el botón Siguiente > y aparece la siguiente ventana

En esta pantalla elegimos la distribución de los datos dentro del informe. Seleccionando una distribución aparece en el dibujo de la izquierda el aspecto que tendrá el informe con esa distribución.

En el cuadro Orientación podemos elegir entre impresión Vertical u Horizontal (apaisado).

Con la opción Ajustar el ancho del campo de forma que quepan todos los campos en una página, se supone que el asistente generará los campos tal como lo dice la opción.

A continuación pulsamos el botón Siguiente > y aparece la última ventana

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

En esta ventana el asistente nos pregunta el título del informe, este título también será el nombre asignado al informe.

Antes de pulsar el botón Finalizar podemos elegir entre

 Vista previa del informe en este caso veremos el resultado del informe preparado para la impresión  Modificar el diseño del informe, si seleccionamos esta opción aparecerá la ventana Diseño de informe donde podremos modificar el aspecto del informe.

La vista diseño de informe

La vista diseño es la que nos permite definir el informe, en ella le indicamos a Access cómo debe presentar los datos del origen del informe, para ello nos servimos de los controles que veremos más adelante de la misma forma que definimos un formulario.

Para abrir un informe en la vista diseño debemos seleccionarlo en el Panel de navegación y pulsar en su menú contextual o en la Vista de la pestaña Inicio.

Nos aparece la ventana diseño

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

El área de diseño consta normalmente de cinco secciones

 El Encabezado del informe contendrá la información que se ha de indicar únicamente al principio del informe, como su título.   El Encabezado de página contendrá la información que se repetirá al principio de cada página, como los encabezados de los registros, el logo, etc.   Detalle contiene los registros. Deberemos organizar los controles para un único registro, y el informe será el que se encargue de crear una fila para cada uno de los registros.   El Pie de página contendrá la información que se repetirá al final de cada página, como la fecha del informe, el número de página, etc.   El Pie de informe contendrá la información que únicamente aparecerá al final del informe, como el nombre o firma de quien lo ha generado.  Podemos eliminar los encabezados y pies con las opciones encabezado o pie de página y encabezado o pie de página del informe que encontrarás en el menú contextual del informe. Al hacerlo, se eliminarán todos los controles definidos en ellas. Para recuperarlos se ha de seguir el mismo proceso que para eliminarlos.

Si no quieres eliminar los controles, pero quieres que en una determinada impresión del informe no aparezca una de las zonas, puedes ocultar la sección. Para hacerlo deberás acceder a la Hoja de propiedades, desde su botón en la pestaña Diseño > grupo Herramientas. Luego, en el desplegable, elige la sección (Encabezado, Detalle, o la que quieras) y cambia su propiedad Visible a

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Sí o a No según te convenga. Los cambios no se observarán directamente en la vista diseño, sino en la Vista preliminar de la impresión o en la Vista informes.

Alrededor del área de diseño tenemos las reglas que nos permiten medir las distancias y los controles, también disponemos de una cuadrícula que nos ayuda a colocar los controles dentro del área de diseño.

Podemos ver u ocultar las reglas o cuadrícula desde el menú contextual del informe.

La pestaña Diseño de informe

Si has entrado en diseño de informe podrás ver la pestaña de Diseño que muestra las siguientes opciones

Esta barra la recuerdas seguro, es muy parecida a la que estudiamos en los formularios. A continuación describiremos los distintos botones que pertenecen a esta barra.

El botón Ver del grupo Vistas nos permite pasar de una vista a otra, si lo desplegamos podemos elegir entre Vista Diseño la que estamos describiendo ahora, la Vista Presentación que muestra una mezlca de la vista Informes y Diseño y finalmente la Vista Informes que muestra el informe en pantalla.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

La Vista Preliminar nos permite ver cómo quedará la impresión antes de mandar el informe a impresora.

 En el grupo Temas encontrarás herramientas para dar un estilo homogéneo al informe. No entraremos en detalle, porque funciona igual que los temas de los formularios.  ・ El botón Agrupar y ordenar del grupo Agrupación y totales permite modificar los niveles de agrupamiento como veremos más adelante.

・ En la parte central puedes ver el grupo Controles en el que aparecen todos los tipos de controles para que sea más cómodo añadirlos en el área de diseño como veremos más adelante. También encontramos algunos elementos que podemos incluir en el encabezado y pie de página.

 En el grupo Herramientas podrás encontrar el botón Agregar campos existentes entre otros, que hace aparecer y desaparecer el cuadro Lista de campos en el que aparecen todos los campos del origen de datos para que sea más cómodo añadirlos en el área de diseño como veremos más adelante.  Todo informe tiene asociada una página de código en la que podemos programar ciertas acciones utilizando el lenguaje VBA (Visual Basic para Aplicaciones), se accede a esa página de código haciendo clic sobre el botón .

Con el botón hacemos aparecer y desaparecer el cuadro Propiedades del control seleccionado. Las propiedades del informe son parecidas a las de un formulario. Recuerda que siempre podemos acceder a la ayuda de Access haciendo clic en el botón .

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

El grupo Controles

Para definir qué información debe aparecer en el informe y con qué formato, se pueden utilizar los mismos controles que en los formularios aunque algunos son más apropiados para formularios como por ejemplo los botones de comando.

En la pestaña Diseño encontrarás los mismo controles que vimos en el tema anterior

Cuando queremos crear varios controles del mismo tipo podemos bloquear el control haciendo clic con el botón secundario del ratón sobre él. En el menú contextualelegiremos Colocar varios controles.

A partir de ese momento se podrán crear todos los controles que queramos de este tipo sin necesidad de hacer clic sobre el botón correspondiente cada vez. Para quitar el bloqueo hacemos clic sobre el botón o volvemos a seleccionar la opción del menú contextual para desactivarla.

El botón activará o desactivará la Ayuda a los controles. Si lo tenemos activado (como en la imagen) al crear determinados controles se abrirá un asistente para guiarnos.

Ahora vamos a ver uno por uno los tipos de controles disponibles

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Icono Control Descripción

Seleccionar Vuelve a dar al cursor la funcionalidad de selección, anulando cualquier otro control que hubiese seleccionado.

Cuadro de texto Se utiliza principalmente para presentar un dato almacenado en un campo del origen del informe. Puede ser de dos tipos: dependiente o independiente.

El cuadro de texto dependiente depende de los datos de un campo y si modificamos el contenido del cuadro en la vista Informes estaremos cambiando el dato en el origen. Su propiedad Origen del control suele ser el nombre del campo a la que está asociado. - El cuadro de texto independiente permite por ejemplo presentar los resultados de un cálculo o aceptar la entrada de datos. Modificar el dato de este campo no modifica su tabla origen. Su propiedad Origen del control será la fórmula que calculará el valor a mostrar, que siempre irá precedida por el signo =.

Etiqueta Sirve para visualizar un texto literal, que escribiremos directamente en el control o en su propiedad Título.

Hipervínculo Para incluir un enlace a una página web, un correo electrónico o un programa.

Insertar salto de línea No tiene efecto en la Vista Formulario pero sí en la Vista Preliminar y a la hora de imprimir.

Gráfico Representación gráfica de datos que ayuda a su interpretación de forma visual.

Línea Permite dibujar líneas en el formulario, para ayudar a organizar la información.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Botón de alternar Se suele utilizar para añadir una nueva opción a un grupo de opciones ya creado. También se puede utilizar para presentar un campo de tipo Sí/No, si el campo contiene el valor Sí, el botón aparecerá presionado.

Rectángulo Permite dibujar rectángulos en el formulario, paraayudar a organizar la información.

Casilla de verificación Se suele utilizar para añadir una nueva opción a un grupo de opciones ya creado, o para presentar un campo de tipo Sí/No. Si el campo contiene el valor Sí, la casilla tendrá este aspecto , sino este otro .

Marco de objeto independiente Para insertar archivos como un documento Word, una hoja de cálculo, etc. No varian cuando cambiamos de registro (independientes), y no están en ninguna tabla de la base.

Datos adjuntos Esta es la forma más moderna y óptima de incluir archivos en un formulario. Equivale a los marcos de objeto, solo que Datos adjuntos está disponible para las nuevas bases hechas en Access 2007 o versiones superiores (.accdb) y los marcos pertenecen a las versiones anteriores (.mdb).

Botón de opción Se suele utilizar para añadir una nueva opción a un grupo de opciones ya creado, o para presentar un campo de tipo Sí/No. Si el campo contiene el valor Sí, el botón tendrá este aspecto , sino, este otro .

Subformulario/ Subinforme Para incluir un subformulario o subinforme dentro del formulario. Un asistente te permitirá elegirlo.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Marco de objeto dependiente Para insertar archivos como un documento Word, una hoja de cálculo, etc. Varian cuando cambiamos de registro (dependientes), porque se encuentran en una tabla de la base. Ejemplos: La foto o el currículum de una persona, las ventas de un empleado, etc.

Imagen Permite insertar imágenes en el formulario, que no dependerán de ningún registro. Por ejemplo, el logo de la empresa en la zona superior.

También incluye los siguientes controles, aunque no se suelen utilizar en informes, sino más bien en formularios

Icono Control

Botón

Control de pestaña

Grupo de opciones

Cuadro combinado

Cuadro de lista

Puedes ver su descripción en el tema de Formularios.

Por último podemos añadir más controles, más complejos con el botón .

Puesto que el manejo de los controles en informes es idéntico al de los controles de un formulario, si tienes alguna duda sobre cómo añadir un control, cómo moverlo de sitio, copiarlo, cambiar su tamaño, cómo ajustar el tamaño o la alineación de varios controles, repasa la unidad anterior.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Agrupar y ordenar

Cuando ya hemos visto con el asistente, en un informe se pueden definir niveles de agrupamiento lo que permite agrupar los registros del informe y sacar por cada grupo una cabecera especial o una línea de totales. También podemos definir una determinada ordenación para los registros que aparecerán en el informe.

Para definir la ordenación de los registros, crear un nuevo nivel de agrupamiento o modificar los niveles que ya tenemos definidos en un informe que ya tenemos definido

Abrir el informe en Vista Diseño. En la pestaña Diseño > grupo Agrupación y totales > pulsar Agrupar y ordenar . Se abrirá un panel en la zona inferior, bajo el informe, llamado Agrupación, orden y total

Puedes añadir un grupo de ordenación haciendo clic en Agregar un grupo. Del mismo modo, haciendo clic en Agregar un orden establaceremos un orden dentro de ese grupo.

Utiliza las flechas desplegables para seleccionar diferentes modos de ordenación dentro de un grupo. Puedes hacer clic en el vínculo Más para ver más opciones de ordenación y agrupación. Con las flechas puedes mover las agrupaciones arriba y abajo.

Imprimir un informe

Para imprimir un informe, lo podemos hacer de varias formas y desde distintos puntos dentro de Access.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Imprimir directamente

- Hacer clic sobre el nombre del informe que queremos imprimir en el Panel de Navegación para

seleccionarlo.

- Despliega la pestaña Archivo y pulsa Imprimir. A la derecha aparecerán más opciones, escoger

Impresión Rápida.

Si es la primera vez que imprimes el informe, no es conveniente que utilices esta opción. Sería recomendable ejecutar las opciones Imprimir y Vista preliminar, para asegurarnos de que el aspecto del informe es el esperado y que se va a imprimir por la impresora y con la configuración adecuadas.

Abrir el cuadro de diálogo Imprimir

- Hacer clic sobre el nombre del informe que queremos imprimir para seleccionarlo.

- Despliega la pestaña Archivo y pulsa Imprimir. A la derecha aparecerán más opciones, escoger

Imprimir.

- Se abrirá el cuadro de diálogo Imprimir en el que podrás cambiar algunos parámetros de impresión

como te explicaremos a continuación

Si tenemos varias impresoras conectadas al ordenador, suele ocurrir cuando están instaladas en red, desplegando el cuadro combinado Nombre: podemos elegir la impresora a la que queremos enviar la impresión.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

En el recuadro Intervalo de impresión, podemos especificar si queremos imprimir Todo el informe o bien sólo algunas páginas.

 Si queremos imprimir unas páginas, en el recuadro desde especificar la página inicial del intervalo a imprimir y en el recuadro hasta especificar la página final.   Si tenemos registros seleccionados cuando abrimos el cuadro de diálogo, podremos activar la opción Registros seleccionados para imprimir únicamente esos registros.  En el recuadro Copias, podemos especificar el número de copias a imprimir. Si la opción Intercalar no está activada, imprime una copia entera y después otra copia, mientras que si activamos Intercalarimprime todas las copias de cada página juntas.

La opción Imprimir a archivo permite enviar el resultado de la impresión a un archivo del disco en vez de mandarlo a la impresora.

Con el botón Propiedades accedemos a la ventana Propiedades de la impresora, esta ventana cambiará según el modelo de nuestra impresora pero nos permite definir el tipo de impresión por ejemplo en negro o en color, en alta calidad o en borrador, el tipo de papel que utilizamos, etc.

Con el botón Configurar... podemos configurar la página, cambiar los márgenes, impresión a varias columnas, etc.

Por último pulsamos el botón Aceptar y se inicia la impresión. Si cerramos la ventana sin aceptar o pulsamos Cancelar no se imprime nada.

Abrir el informe en Vista preliminar

Para comprobar que la impresión va a salir bien es conveniente abrir una vista preliminar del informe en pantalla para luego si nos parece bien ordenar la impresión definitiva. Hay varias formas de abrir la Vista Preliminar

 Con el objeto Informe seleccionado, desplegar la pestaña Archivo, pulsar Imprimir y seleccionar Vista previa. 

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

 También puedes hacer clic derecho sobre el Informe en el Panel de Navegación y seleccionar la opción en el menú contextual.    O, si ya lo tienes abierto, pulsar Ver > Vista preliminar en el grupo Vistas de la pestaña Diseño o Inicio.

La ventana Vista preliminar

En esta ventana vemos el informe tal como saldrá en la impresora. Observa cómo se distingue la agrupación por código de curso.

Para pasar por las distintas páginas tenemos en la parte inferior izquierda una barra de desplazamiento por los registros con los botones que ya conocemos para ir a la primera página, a la página anterior, a una página concreta, a la página siguiente o a la última página.

En la parte superior tenemos una nueva y única pestaña, la pestaña Vista preliminar, con iconos que nos ayudarán a ejecutar algunas acciones

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Es posible que veas los botones de forma distinta, ya que cambian de tamaño dependiendo del tamaño de que disponga la ventana de Access.

 Los botones del grupo Zoom permiten, tanto aproximar y alejar el informe, como elegir cuántas páginas quieres ver a la vez: Una página, Dos páginas , una junta a la otra; o Más páginas , pudiendo elegir entre las opciones 4, 8 o 12. Cuantas más páginas visualices, más pequeñas se verán, pero te ayudará a hacerte una idea del resultado final.   El grupo Diseño de página permite cambiar la orientación del papel para la impresión y acceder a la configuración de la página.    Las opciones de Datos las veremos más adelante. Permiten la exportación de datos a otros formatos como Excel, PDF o XPS.  Ya sólo nos queda elegir si queremos Imprimir o si queremos Cerrar la vista preliminar para continuar editando el informe.

Recuerda que la Vista preliminar es muy importante. No debes comprobar únicamente la primera página, sino también las siguientes. Esto cobra especial importancia en caso de que nuestro informe sea demasiado ancho, ya que el resultado podría ser similar al que se muestra en la imagen

Si un registro es demasiado ancho, nuestro informe requerirá el doble de folios y será menos legible. En esos casos, deberemos valorar si es necesario utilizar una orientación Horizontal de la hoja o si es más conveniente estrechar la superfície del informe o sus controles.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Cuando, como en la imagen, nuestros registros realmente no ocupen mucho y lo que se vaya de madre sea uno de los controles que introduce Access automáticamente (como el contador de páginas), lo más sencillo es mover o reducir el control. También será conveniente estrechar controles cuando veamos que realmente se les ha asignado un espacio que no utilizarán nunca (por ejemplo si el código de cliente está limitado a 5 caracteres y se le dedica un espacio en que caben 30).

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Capítulo 11: Los controles de formulario e informe

Propiedades generales de los controles

En temas anteriores vimos cómo crear formularios e informes utilizando el asistente, también hemos aprendido a manejar los controles para copiarlos, moverlos, ajustarlos, alinearlos, etc. En este tema vamos a repasar los diferentes tipos de controles y estudiar sus propiedades para conseguir formularios e informes más completos.

Empezaremos por estudiar las propiedades comunes a muchos de ellos

 Nombre: Aquí indicaremos el nombre del control. Puedes darle el nombre que tú quieras, pero asegúrate de que es lo suficientemente descriptivo como para poder reconocerlo más tarde. Un buen método sería asignarle el nombre del control más una coletilla indicando de qué control se trata. Por ejemplo, imagina que tenemos dos controles para el campo Curso, una etiqueta y un cuadro de texto. Podríamos llamar a la etiqueta curso_eti y al campo de texto curso_txt. De este modo facilitamos el nombre de dos controles que referencian a un mismo campo.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

 Visible: Si la propiedad se establece a No el control será invisible en el formulario. Por el contrario, si lo establecemos a Sí el control sí que será visible.

Su uso parece obvio, pero nos puede ser muy útil para cargar información en el formulario que no sea visible para el usuario pero sin embargo sí sea accesible desde el diseño. También podemos utilizar esta propiedad para ocultar controles, para mostrarlos pulsando, por ejemplo, un botón.

 Mostrar cuando: Utilizaremos esta propiedad para establecer cuándo un control debe mostrarse.

De este modo podemos hacer que se muestre únicamente cuando se muestre en pantalla y esconderlo a la hora de imprimir (muy útil por ejemplo para los botones de un formulario que no queremos que aparezcan en el formulario impreso).

 Izquierda y Superior: Estas dos propiedades de los controles hacen referencia a su posición. Respectivamente a la distancia del borde izquierdo del formulario o informe y de su borde superior. Normalmente sus unidades deberán ser introducidas en centímetros. Si utilizas otras unidades de medida, como el píxel, Access tomará ese valor y lo convertirá en centímetros.

 Ancho y Alto: Establecen el tamaño del control indicando su anchura y altura. De nuevo la unidad de medida utilizada es el centímetro.

 Color del fondo: Puedes indicar el color de fondo del control para resaltarlo más sobre el resto del formulario. Para cambiar el color, teclea el número del color si lo conoces o bien coloca el cursor en el recuadro de la propiedad y pulsa el botón que aparecerá a la izquierda.

Entonces se abrirá el cuadro de diálogo que ya conoces desde donde podrás seleccionar el color que prefieras.

 Estilo de los bordes: Cambia el estilo en el que los bordes del control se muestran.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

 Color y Ancho de los bordes: Establece el color del borde del control y su ancho en puntos.

 Efecto especial: Esta propiedad modifica la apariencia del control y le hace tomar una forma predefinida por Access.

Al modificar esta propiedad algunos de los valores introducidos en las propiedades Color del fondo, Estilo de los bordes, Color de los bordes o Ancho de los bordes se verán invalidadas debido a que el efecto elegido necesitará unos valores concretos para estas propiedades.

Del mismo modo si modificamos alguna de las propiedades citadas anteriormente el Efecto especial dejará de aplicarse para tomarse el nuevo valor introducido en la propiedad indicada.

 Nombre y Tamaño de la fuente: Establece el tipo de fuente que se utilizará en el control y su tamaño en puntos.

 Espesor de la fuente, Fuente en Cursiva y Fuente subrayada: Estas propiedades actúan sobre el aspecto de la fuente modificando, respectivamente, su espesor (de delgado a grueso), si debe mostrarse en cursiva o si se le añadirá un subrayado.

 Texto de Ayuda del control: Aquí podremos indicar el texto que queremos que se muestre como ayuda contextual a un control.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

 Texto de la barra de estado: Aquí podremos indicar el texto que queremos que se muestre en la barra de estado cuando el usuario se encuentre sobre el control.

Un ejemplo muy claro de su uso sería que cuando el usuario se encontrase sobre el campo Nombre en la barra de estado se pudiera leer Introduzca aquí su nombre.

 Índice de tabulación: Una de las propiedades más interesantes de los controles. Te permite establecer en qué orden saltará el cursor por los controles del formulario/informe cuando pulses la tecla TAB. El primer elemento deberá establecerse a 0, luego el salto se producirá al control que tenga un valor inmediatamente superior.

Aparecerá el siguiente cuadro de diálogo

En él aparecen todos los controles ordenados por su orden de tabulación. Puedes arrastrar y colocar los controles en el orden que prefieras, de esta forma, las propiedades Índice de tabulación de los controles se configurarán de forma automática.

También accedemos a este cuadro pulsando el icono en el grupo Herramientas de la pestaña Organizar.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Etiquetas y Cuadros de Texto

Ya hemos visto cómo insertar un campo en el origen de datos, este campo, la mayoría de las veces estará representado por un cuadro de texto y una etiqueta asociada.

Las etiquetas se utilizan para representar valores fijos como los encabezados de los campos y los títulos, mientras que el cuadro de texto se utiliza para representar un valor que va cambiando, normalmente será el contenido de un campo del origen de datos.

 La propiedad que indica el contenido de la etiqueta es la propiedad Título.  La propiedad que le indica a Access qué valor tiene que aparecer en el cuadro de texto, es la propiedad Origen del control.

Si en esta propiedad tenemos el nombre de un campo del origen de datos, cuando el usuario escriba un valor en el control, estará modificando el valor almacenado en la tabla, en el campo correspondiente del registro activo.

Cuando queremos utilizar el control para que el usuario introduzca un valor que luego utilizaremos, entonces no pondremos nada en el origen del control y el cuadro de texto se convertirá en independiente.

También podemos utilizar un cuadro de texto para presentar campos calculados, en este caso debemos escribir en la propiedad Origen del control la expresión que permitirá a Access calcular el valor a visualizar, precedida del signo igual =.

Por ejemplo para calcular el importe si dentro de la tabla sólo tenemos precio unitario y cantidad.

En el ejemplo anterior hemos creado un campo calculado utilizando valores que extraíamos de otros campos (en el ejemplo los campos precio y cantidad). También es posible realizar cálculos con constantes, por lo que nuestro origen de datos podría ser =[precio]*0.1 para calcular el 10% de un campo o incluso escribir =2+2 para que se muestre en el campo el resultado de la operación.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Cuadro combinado y Cuadro de lista Estos controles sirven para mostrar una lista de valores en la cual el usuario puede elegir uno o varios de los valores.

El cuadro de lista permanece fijo y desplegado mientras que el cuadro combinado aparece como un cuadro de texto con un triángulo a la derecha que permite desplegar el conjunto de los valores de la lista.

Una de las formas más sencillas para crear un control de este tipo es utilizando el Asistente para controles. Su uso es muy sencillo, sólo tendrás que activar el asistente antes de crear el control sobre el formulario o informe haciendo clic en su icono en la pestaña Diseño.

Una vez activado el Asistente, cuando intentes crear un control de Cuadro de lista o Cuadro combinado se lanzará un generador automático del control que, siguiendo unos cuantos pasos sencillos, cumplimentará las propiedades del control para que muestre los datos que desees.

En el tema de creación de tablas ya tuvimos nuestro primer contacto con los cuadros combinados y de lista (con el asistente para búsquedas). Veamos sus propiedades más importantes.

 Tipo de origen de la fila: En esta propiedad indicaremos de qué tipo será la fuente de donde sacaremos los datos de la lista.

Podemos seleccionar Tabla/Consulta si los datos se van a extraer de una tabla o de una consulta. Si seleccionamos Lista de valores el control mostrará un listado de unos valores fijos que nosotros habremos introducido. La opción Lista de campos permite que los valores de la lista sean los nombres de los campos pertenecientes a una tabla o consulta.

En cualquier caso se deberán indicar qué campos o valores serán mostrados con la siguiente

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

propiedad

 Origen de la fila: En esta propiedad estableceremos los datos que se van a mostrar en el control. Si en la propiedad Tipo de origen de la fila seleccionamos Tabla/Consulta deberemos indicar el nombre de una tabla o consulta o también podremos escribir una sentencia SQL que permita obtener los valores de la lista.

Si en la propiedad Tipo de origen de la fila seleccionamos Lista de campos deberemos indicar el nombre de una tabla o consulta.

Si, por el contrario, habíamos elegido Lista de valores, deberemos introducir todos los valores que queremos que aparezcan en el control entre comillas y separados por puntos y comas:"valor1";"valor2";"valor3";"valor4"...

 Columna dependiente: Podemos definir la lista como una lista con varias columnas, en este caso la columna dependiente nos indica qué columna se utiliza para rellenar el campo. Lo que indicamos es el número de orden de la columna.

 Encabezados de columna: Indica si en la lista desplegable debe aparecer una primera línea con encabezados de columna. Si cambiamos esta propiedad a Sí, cogerá la primera fila de valores como fila de encabezados.

 Ancho de columnas: Permite definir el ancho que tendrá cada columna en la lista. Si hay varias columnas se separan los anchos de las diferentes columnas por un punto y coma.

 Ancho de la lista: Indica el ancho total de la lista.

 Limitar a lista: Si cambiamos esta propiedad a No podremos introducir en el campo un valor que no se encuentra en la lista, mientras que si seleccionamos Sí obligamos a que el valor sea uno de los de la lista. Si el usuario intenta introducir un valor que no está en la lista, Access devuelve un mensaje de error y no deja almacenar este valor.

 Filas en lista: Indica cuántas filas queremos que se visualicen cuando se despliega la lista. Esta propiedad sólo se muestra para el control Cuadro combinado.

 Selección múltiple: Esta propiedad puede tomar tres valores, Ninguna, Simple y Extendida.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Si seleccionamos Ninguna el modo de selección de la lista será único, es decir sólo podremos seleccionar un valor.

Si seleccionamos Simple permitiremos la selección múltiple y todos los elementos sobre los que hagas clic se seleccionarán. Para deseleccionar un elemento vuelve a hacer clic sobre él.

Seleccionando Extendida permitiremos la selección múltiple, pero para seleccionar más de un elemento deberemos mantener pulsada la tecla CTRL. Si seleccionamos un elemento, pulsamos la tecla MAYUS y dejándola pulsada seleccionamos otro elemento, todos los elementos entre ellos serán seleccionados.

Esta propiedad sólo se muestra para el control Cuadro de lista.

Una vez incluido el control sobre el formulario o informe podremos alternar entre estos dos tipos haciendo clic derecho sobre él y seleccionando la opción Cambiar a...

Este es un modo de transformar un control de un tipo de una clase a otra manteniendo prácticamente todas sus propiedades intactas, sobre todo aquellas relativas a los orígenes de datos.

Esta opción también está disponible en el menú contextual de los cuadros de texto.

Grupo de Opciones

El Grupo de opciones permite agrupar controles de opción por Botones de opción, Casillas de verificación o Botones de alternar. Esto es útil para facilitar al usuario la elección, distinguiendo cada uno de los conjuntos limitado de alternativas.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

La mayor ventaja del grupo de opciones es que hace fácil seleccionar un valor, ya que el usuario sólo tiene que hacer clic en el valor que desee y sólo puede elegir una opción cada vez de entre el grupo de opciones.

En este control deberemos de tratar el Origen del control de una forma especial.

El control Grupo de opciones deberemos vincularlo en su propiedad Origen del control al campo que queremos que se encuentre vinculado en la tabla.

Los controles de opción que se encuentren dentro del grupo tienen una propiedad llamada Valor de la opción, que será el valor que se almacene en la tabla al seleccionarlos.

Por tanto, deberás establecer la propiedad Valor de la opción para cada uno de los controles de opción de forma que al seleccionarlos su valor sea el que se vaya a almacenar en el campo que indiquemos en el Origen del control del control Grupo de opciones.

La propiedad Valor de la opción sólo admite un número, no podrás introducir texto por lo que este tipo de controles unicamente se utilizan para asociarlos con campos numéricos.

En un formulario o infirme, un grupo de opciones puede ser declarado como independiente y por lo tanto no estar sujeto a ningún campo.

Por ejemplo, se puede utilizar un grupo de opciones independiente en un cuadro de diálogo personalizado para aceptar la entrada de datos del usuario y llevar a cabo a continuación alguna acción basada en esa entrada.

La propiedad Valor de la opción sólo está disponible cuando el control se coloca dentro de un control de grupo de opciones. Cuando una casilla de verificación, un botón de alternar o un botón de opción no está en un grupo de opciones, el control no tiene la propiedad Valor de la opción. En su lugar, el control tiene la propiedad Origen del control y deberá establecerse para un campo de tipo Sí/No, modificando el registro dependiendo de si el control es activado o desactivado por el usuario.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Del mismo modo que vimos con los controles de lista, es aconsejable crear estos controles con la opción de Asistente para controles activada.

Así, al intentar introducir un Grupo de opciones en el formulario o informe se lanzará el generador y con un par de pasos podrás generar un grupo de controles de forma fácil y rápida.

Si no quieres utilizar el asistente, primero crea el grupo de opciones arrastrándolo sobre el área de diseño, a continuación arrastra sobre él los controles de opción, y finalmente tendrás que rellenar la propiedadValor de la opción de cada control de opción y la propiedad Origen del control del grupo de opciones.

Control de Pestaña

Cuando tenemos una gran cantidad de información que presentar, se suele organizar esa información en varias pestañas para no recargar demasiado las pantallas. Para ello utilizaremos el control Pestaña

Un control Pestaña es un contenedor que contiene una colección de objetos Página. De esta forma cuando el usuario elige una página, ésta se vuelve Activa y los controles que contiene susceptibles de cambios.

Al tratarse de elementos independientes deberemos tratar cada página individualmente.

Una vez insertado el control Pestaña deberemos hacer clic sobre el título de una de las Páginas para

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

modificar sus propiedades. El título de la página se podrá modificar a través de la propiedad Nombre.

 Para insertar elementos dentro de una página deberemos crearlo dentro de ella. Una vez hayas seleccionado en el Cuadro de herramientas el control que quieres insertar, solamente deberás colocar el cursor sobre la página hasta que quede sombreada y entonces dibujar el control

Cuando termines sólo tendrás que cambiar de página haciendo clic sobre su título y rellenarla del mismo modo.

Es posible añadir nuevas Páginas o eliminarlas, para ello sólo tienes que hacer clic derecho sobre el control Pestaña y seleccionar Insertar página para añadir una nueva página o hacer clic en Eliminar página para eliminar la página activa.

Si tienes más de una página incluida en el control Pestaña deberás utilizar la opción Orden de las páginas... en el menú contextual para cambiar su disposición. Aparecerá el siguiente cuadro de diálogo

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Utiliza los botones Subir y Hacia abajo para cambiar el orden y disposición de la página seleccionada de modo que la que se encuentra en la parte superior de la lista estará situada más a la izquierda y, al contrario, la que se encuentre en la parte inferior estará situada más hacia la derecha.

Cuando hayas terminado pulsa el botón Aceptar y podrás ver el control Pestaña con las Páginas ordenadas.

Las herramientas de dibujo

Nuestro siguiente paso será echarle un vistazo a dos de los controles que nos ayudarán a mejorar el diseño de los formularios o informes que creemos: las Líneas y los Rectángulos.

En ambos casos su creación es la misma (e igual también para el resto de los controles). Basta con seleccionar el control o y luego dibujarlo en el formulario o informe. Para ello sólo tienes que hacer clic en el punto en el que quieras que empiece el control, y sin soltar el botón del ratón, desplazamos el cursor hasta que el control alcance el tamaño deseado.

En el caso del control Línea la tecla MAYUS nos será de mucha utilidad. Si mantenemos esta tecla de nuestro teclado pulsada mientras realizamos las acciones anteriores podremos crear líneas sin inclinación, es decir, completamente horizontales o verticales.

Estos controles deberán ser utilizados sobre todo para separar elementos y marcar secciones en nuestros documentos. De esta forma alcanzaremos diseños más limpios y organizados, lo cual, además de causar que el usuario se sienta más cómodo trabajando con el formulario o informe, hará que realice su trabajo de una forma más rápida y óptima.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Las propiedades de estos controles son practicamente todas las que vimos en el primer punto de este tema y que son comunes a todos los controles.

Lo único que añadiremos es que si bien su uso es muy aconsejado para lo mencionado anteriormente, un diseño cargado con demasiados controles Línea y Rectángulo al final resultan difíciles de trabajar tanto desde el punto de vista del usuario como de la persona que está realizando el diseño, tú.

Imágenes

El control Imagen permite mostrar imágenes en un formulario o informe de Access. Para utilizarlo sólo tendrás que seleccionarlo y hacer clic donde quieras situarlo. Se abrirá un cuadro de diálogo donde tendrás que seleccionar la imagen

Al Aceptar, verás que aparece enmarcada en el cuadro del control y ya podremos acceder a sus propiedades. Veámoslas

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

 Imagen indicará la ruta de la imagen en nuestro disco duro.

 Modo de cambiar el tamaño: En esta propiedad podremos escoger entre tres opciones, Recortar, Extender y Zoom.

 Si seleccionamos la opción Recortar sólo se mostrará un trozo de la imagen que estará limitado por el tamaño del control Imagen. Si hacemos más grande el control se mostrará más parte de la imagen.

 Seleccionando la opción Extender hará que la imagen se muestre completa dentro del espacio delimitado por el control. Esta opción deforma la imagen para que tome exactamente las dimensiones del control.

 Con la opción Zoom podremos visualizar la imagen completa y con sus proporciones originales. El tamaño de la imagen se verá reducido o aumentado para que quepa dentro del control.

Distribución de la imagen: Esta propiedad nos permitirá escoger la alineación de la imagen dentro del control.

Puede tomar los valores Esquina superior izquierda, Esquina superior derecha, Centro, Esquina inferior izquierda o Esquina inferior derecha. Esta opción es más útil cuando mostramos la imagen en modo Recortar.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Mosaico de imágenes: Puede tomar los valores Sí y No. En el modo Zoom utilizaremos esta opción para que se rellenen los espacios vacíos que se crean al ajustar la imagen con copias de esta.

Dirección de hipervínculo: Puedes incluir una dirección a un archivo o página web para que se abra al hacer clic sobre el control.

Por último hablaremos de la propiedad más interesante del control Imagen: Tipo de imagen. Puede ser de dos tipos, incrustado y vinculado

Insertado: Se hace una copia de la imagen en la base de datos, de forma que si realizamos cambios sobre ella no se modificará el original. Hay que tener en cuenta que el espacio que ocupará la base de datos será mayor si se incrustan muchas imágenes en ella y eso puede hacer que vaya más lenta.

Compartidas: Al igual que Insertado, la imagen se guarda en la propia base de datos. Esta opción se ha introducido como novedad en Access 2010, precisamente para evitar el problema de espacio. Al definir una imagen como compartida, ésta estará disponible para todos los objetos de la base de datos, que la referenciarán y de esa forma no será necesario guardar una copia por cada instancia utilizada. Por ejemplo, si quieres que todos tus formularios e informes incluyan un membrete y un logotipo, sólo será necesario que la base lo guarde una vez. Si un día cambiáramos el logotipo de la empresa, tan solo con modificar la imagen compartida se modificaría en todos los objetos.

Vinculadas: La imagen no está en la propia base, simplemente apunta a un archivo externo. Al modificar la imagen desde fuera de la base de datos, la de la base se verá afectada, y viceversa. Hay que tener en cuenta que, si cambias la imagen de carpeta, la base no la encontrará y dejará de mostrarse, exactamente igual que si tratas de cambiar la base a otro ordenador en que no tienes copiados los recursos externos. Su principal ventaja es que mantiene las imágenes actualizadas, de modo que es adecuado para fotografías que vayamos a ir renovando.

Elegir el tipo depende de las necesidades del proyecto y la aplicación práctica de cada caso.

Datos adjuntos y Marcos de objetos

Al igual que Access permite incluir imágenes en sus formularios o informes, también permite la visualización e inclusión de documentos que se han generado en otros programas (como archivos de Excel, Word, PowerPoint, PDF's, etc.).

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Existen dos formas de incluirlos

1. Independiente a los datos de los registros, para incluir objetos de caracter general, como un documento de ayuda sobre cómo utilizar el formulario o informe. Para ello se utiliza el Marco de objeto independiente.

Aquí se nos presentan dos opciones. Podemos crear un archivo nuevo (en blanco) y modificarlo desde cero, o seleccionar la opción Crear desde archivo y se nos dará la opción de seleccionar un archivo ya existente. En cualquier caso desde el listado podremos elegir el tipo de objeto que queremos insertar, de los que Access admite.

Si activamos la casilla Mostrar como icono, el objeto se mostrará como el icono de la aplicación que lo abre, por ejemplo si el objeto es un archivo de Word, se mostrará con el icono del programa Microsoft Word. Aunque siempre podremos pulsar Cambiar icono... si queremos asignarle una imagen distinta a la que se muestra por defecto.

Si dejamos la casilla desmarcada, el objeto se mostrará con una pequeña previsualización que podremos tratar como hacemos con el control Imagen.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

2. Dependiente a los datos de los registros, para incluir documentos que están vinculados a un registro en concreto, como el currículum de un determinado candidato a empleado, la foto de un cliente o de un producto, etc. Para ello se puede utilizar el control Datos adjuntos o bien el Marco de objeto dependiente. Vamos a ver las características de ambos.

Característica Datos adjuntos Marco de objeto dependiente Versiones Access que lo soportan Desde 2007, en bases .accdb Todas, incluidas las bases .mdb El campo de origen debeser de tipo... Datos adjuntos Objeto OLE El control más adecuado es Datos adjuntos, porque el tipo de datos datos adjuntos es más flexible (permite introducir y gestionar varios adjuntos en el mismo campo) y está más optimizado (los objetos OLE están obsoletos porque funcionan de forma poco eficaz).

Entonces, ¿cuándo deberíamos utilizar un Marco de objeto dependiente? Principalmente cuando utilicemos una base que haya sido creada con versiones anteriores, utilizando el tipo de datos objeto OLE en los campos de sus tablas.

La principal propiedad de ambos (datos adjuntos y marco dependiente) es el Origen del control, en que se especifica en qué campo de qué tabla se encuentran los objetos. Por lo demás, el marco dependiente comparte la mayoría de propiedades con el marco independiente. Veamos cuáles son

 Tipo de presentación: Escoge entre Contenido para previsualizar parte del archivo, o Icono para que se muestre el icono de la aplicación encargada de abrir el archivo.

 Activación automática: Aquí podremos seleccionar el modo en el que queremos que se abra el archivo contenido en el marco. Podemos elegir entre Doble clic, Manual y Recibir enfoque.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Normalmente las dos últimas opciones requerirán de un trabajo de programación adicional, pero al encontrarse fuera del ámbito de este curso pasaremos a ver directamente la primera opción.

Si seleccionamos la opción Doble clic podremos abrir el archivo haciendo doble clic sobre el control o, con este seleccionado, pulsando la combinación de teclas CTRL+ENTER.

 Activado: Selecciona Sí o No. Esta propiedad permite que el control pueda abrirse o no.

 Bloqueado: Si cambiamos esta propiedad a Sí, el objeto se abrirá en modo de sólo lectura. Podrá ser modificado, pero sus cambios no serán guardados.

Esta función es muy útil para mostrar información que sólo queremos que sea leída. Nosotros como administradores de la base de datos tendremos la posibilidad de acceder al objeto y actualizarlo a nuestro gusto.

 Por último la propiedad Tipo OLE nos indica si el archivo está siendo tratado como un archivo vinculado o incrustado. Esta propiedad es de sólo lectura y se nos muestra a título informativo, no podremos modificarla.

En un principio los archivos insertados mediante un Marco se incrustan directamente en la base de datos para mayor comodidad. Sólo existe un modo de que, al insertar el objeto, éste quede vinculado y es insertando un archivo ya existente y activando la casilla Vincular.

El Botón

En este apartado hablaremos de los Botones, que son controles capaces de ejecutar comandos cuando son pulsados.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Los usuarios avanzados de Access son capaces de concentrar muchísimas acciones en un solo botón gracias a la integración de este programa con el lenguaje de programación Visual Basic y al uso de macros. Pero nosotros nos centraremos en el uso de este control a través del Asistente para controles .

Cuando, teniendo el asistente activado, intentamos crear un Botón nos aparece una cuadro de diálogo. Veremos paso a paso cómo deberemos seguirlo para conseguir nuestro objetivo.

En la primera pantalla podremos elegir entre diferentes acciones a realizar cuando se pulse el botón. Como puedes ver en la imagen estas acciones se encuentran agrupadas en Categorías.

 Navegación de registros te permite crear botones para moverte de forma rápida por todos los datos del formulario, buscando registros o desplazándote directamente a alguno en particular.

 Operaciones con registros te permite añadir funciones como añadir nuevos, duplicarlos, eliminarlos, guardarlos o imprimirlos.

 También podrás añadir un botón para abrir, cerrar o imprimir informes, formularios y consultas, etc.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Selecciona la Categoría que creas que se ajusta más a lo que quieres realizar y luego selecciona la Acción en la lista de la derecha.

Pulsa Siguiente para continuar.

Ahora podrás modificar el aspecto del botón. Puedes elegir entre mostrar un Texto en el botón, o mostrar una Imagen.

En el caso de escoger Imagen, podrás seleccionar una entre las que Access te ofrece. Marca la casilla Mostrar todas las imágenes para ver todas las imágenes que Access tiene disponible para los botones.

También podrías hacer clic en el botón Examinar para buscar una imagen en tu disco duro.

Cuando hayas terminado pulsa Siguiente para continuar. Verás una última ventana en que podrás escoger el nombre del botón y Finalizar.

Aplicaciones Ofimáticas Base de Datos Tema 06.MS-Access. INFORMES

Controles ActiveX

Access también nos ofrece la posibilidad de añadir un sinfín de controles que podrás encontrar haciendo clic en el botón Controles ActiveX en la pestaña Diseño.

Debido a que existen muchísimos de estos controles, y a que sus propiedades son prácticamente únicas en cada caso, simplemente comentaremos que puedes acceder a ellas igual que con el resto de controles, desde la hoja de propiedades.

Si habías trabajado con versiones anteriores de Access, es posible que utilizaras el control de calendario alguna vez, presente en el listado de controles ActiveX. En Access 2010 ya no existe el control calendario, puesto que los campos de tipo fecha lo muestran automáticamente junto a la caja de texto, al hacer clic sobre ella para introducir un valor.

En caso de que no aparezca, asegúrate de que hay suficiente espacio junto a la caja de texto para que se visualice correctamente y de que la propiedad Mostrar el selector de fecha del control se encuentra establecido como Para fechas.

---
