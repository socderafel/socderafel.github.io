---
layout: default
title: "UT19 — BDA. Base de Datos. MACROS — Aplicacions Ofimàtiques | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT19 Completa"
prev_url: "../ut18/ut1804.html"
prev_label: "⬅️ 18.4 B2-BDA per a exercicis de INFORMES"
next_url: "../ut19/ut1901.html"
next_label: "19.1 Tema 7. MACROS ➡️"
---

# 📘 UT19 — BDA. Base de Datos. MACROS (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**19.1 Tema 7. MACROS**](#ut1901) (o [obrir en pàgina individual ➡️](./ut1901.md) )
> - [**19.2 Abrir Form sin Abrir Access**](#ut1902) (o [obrir en pàgina individual ➡️](./ut1902.md) )
> - [**19.3 B1-EXERCICIS BDA-MACROS**](#ut1903) (o [obrir en pàgina individual ➡️](./ut1903.md) )
> - [**19.4 B2-EXERCICIS BDA MACROS**](#ut1904) (o [obrir en pàgina individual ➡️](./ut1904.md) )

---

## 19.1 Tema 7. MACROS

> **📌 🏷️ Apunt de la Unitat**
> **TEMA 7. MACROS**

> **📌 🏷️ Apunt de la Unitat**
> **TEMA**

> **📌 🏷️ Apunt de la Unitat**
> **EXERCICIS MACROS**

📎 **Material de laboratori (BDA ALUMNOS PER A MACROS (CLASSE)):** `ALUMNOS.mdb`

> **📌 🏷️ Apunt de la Unitat**
> **VIDEOS**

> **🔗 Recurs Web: Video 14.1. Crear una macro**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=2j3eNgV_t-Y) ↗️**](https://www.youtube.com/watch?v=2j3eNgV_t-Y)

> **🔗 Recurs Web: Video 14.2. Macros condicionals**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=XL4UCkKIWB8) ↗️**](https://www.youtube.com/watch?v=XL4UCkKIWB8)

> **🔗 Recurs Web: Video 15.1. Personalitzar barra d'acces ràpid**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=ALD6QP6olgM) ↗️**](https://www.youtube.com/watch?v=ALD6QP6olgM)

> **🔗 Recurs Web: Video 15.2. Opcions de la base de datos**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=JwuCGzR_rXg) ↗️**](https://www.youtube.com/watch?v=JwuCGzR_rXg)

> **🔗 Recurs Web: Video 15.3. El panel de control**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=vRuR1OMhJG0) ↗️**](https://www.youtube.com/watch?v=vRuR1OMhJG0)

> **🔗 Recurs Web: Video 16. Analitzar taules**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=cXvIMW4eGbM) ↗️**](https://www.youtube.com/watch?v=cXvIMW4eGbM)

> **🔗 Recurs Web: Video 17. Importar dades**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=3YwTd8VkUmY) ↗️**](https://www.youtube.com/watch?v=3YwTd8VkUmY)

---

Tema 7

M i c r o s o f t A C C E S S

M A C R O S

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

INDICE

Las Macros, aspectos generales

Introducción

Concepto

La macro especial Autoexec

Crear una Macro Ejecutar una macro, relacionar las macros con los eventos

Consideraciones previas

Los Eventos Acciones mas utilizadas en las macros

Abrir Tabla, Consulta, Formulario o Informe

Descripción

Argumentos

Buscar Registro

Descripción

Argumentos

Cerrar Ventana

Descripción

Argumentos

Cuadro De Mensaje

Descripción

Argumentos

Eco

Descripción

Argumentos

EjecutarComandoDeMenú EstablecerValor

Descripción

Argumentos IrARegistro

Descripción

Argumentos SalirDeAccess Bibliografía

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

1 Las Macros, aspectos generales

Introducción

Concepto Las Macros son un método sencillo para llevar a cabo una o varias tareas básicas como abrir y cerrar formularios, mostrar u ocultar barras de herramientas, ejecutar informes, etc. También sirven para crear métodos abreviados de teclado y para que se ejecuten tareas automáticamente cada vez que se inicie la base de datos.

La configuración por defecto de Access, nos impedirá ejecutar ciertas acciones de macro si la base de datos no se encuentra en una ubicación de confianza, para evitar acciones malintencionadas. Para ejecutar correctamente las macros de bases de datos que consideremos fiables, podemos añadir la ubicación en el Centro de confianza.

La macro especial Autoexec Si guardamos la Macro con el nombre de AutoExec, cada vez que se inicie la base de datos, se ejecutará automáticamente. Esto es debido a que Access al arrancar busca una macro con ese nombre, si la encuentra será el primer objeto que se ejecute antes de lanzar cualquier otro.

Crear una Macro Para definir una macro, indicaremos una acción o conjunto de acciones que automatizarán un proceso. Cuando ejecutemos una Macro, el proceso se realizará automáticamente sin necesidad, en principio, de interacción por nuestra parte. Por ejemplo, podríamos definir una Macro que abra un formulario cuando el usuario haga clic en un botón, o una Macro que abra una consulta para subir un diez por cien el precio de nuestros productos.

Crear una Macro es relativamente fácil, sólo tenemos que hacer clic el botón Macro de la pestaña Crear y se abrirá la ventana con la nueva macro, así como sus correspondientes Herramientas de macros, englobadas en la pestaña Diseño. La ventana principal consta de una lista desplegable permite elegir la Acción para la macro. En el panel de la izquierda encontraremos estas mismas acciones agrupadas por categorías según su tipo y con un útil buscador en la zona superior, de forma que sea más sencillo localizar la que se desee aplicar (Ver Ilustración 1).

Podemos añadir tantas acciones como queramos, ya que al elegir una opción en el desplegable aparecerá otro inmediatamente debajo del primero, y así consecutivamente. Simplemente deberemos tener presente que se ejecutarán en el orden en que se encuentren. Es una cuestión de lógica, se ejecuta de forma lineal, de forma que no tendría sentido tratar de Cerrar ventana si aún no la hemos abierto, por ejemplo.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Para cambiar el orden en el que se encuentren las acciones puedes arrastrarlas con el ratón hasta la posición correcta o bien utilizar los botones de la acción, que aparecerán al pasar el cursor sobre ella. Con ellos podrás subir o bajar un nivel la acción por cada pulsación.

Obviamente estos botones sólo están disponibles si hay más de una acción. La última sólo podrá ascender, la primera sólo podrá descender y si sólo hay una acción únicamente dispondrá del botón Eliminar situado a la derecha.

En función de la acción que seleccionemos aparecerá un panel con un aspecto u otro, en el que podremos especificar los detalles necesarios.

Por ejemplo, para la acción Abrir una tabla, necesitaríamos saber su nombre, en qué vista queremos que se muestre y si los datos se podrán modificar o no una vez abierta.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

No siempre será obligatorio rellenar todos los campos, únicamente los que indique que son Requeridos. El resto puede que tengan un valor por defecto (como en este caso Vista: Hoja de datos) o que simplemente sean opcionales. Cuando tengamos muchas acciones en una macro, es posible que interese ocultar los detalles para ver la lista de acciones una bajo otra. En ese caso, podremos expandir y contraer la información desde el botón de la esquina superior izquierda. Cuando se ocultan los detalles, la información relevante se muestra toda en una fila, como observamos en la siguiente imagen.

Otra forma de contraer y expandir es desde su correspondiente grupo en la pestaña Diseño.

Cuando la Macro está terminada, puede guardarse , ejecutarse y cerrarse. Más tarde podremos llamarla desde un control Botón, o ejecutarla directamente desde la ventana de la base de datos haciendo clic en Ejecutar o bien haciendo doble clic directamente sobre ella.

2 Ejecutar una macro, relacionar las macros con los eventos

Consideraciones previas Aunque aún no hayamos aprendido mucho sobre ellas, es importante que tengamos claro para qué sirven exactamente las macros y cuándo se ejecutan. Desde luego, siempre podemos abrir el diseño de la macro y pulsar el botón Ejecutar en la cinta de opciones, para ejecutarla de forma manual. También podríamos hacer doble clic sobre ella en el Panel de navegación. Pero estas no son las prácticas más utilizadas.

La mayoría de veces, las macros serán acciones que se ejecutan por detrás, sin la plena consciencia del usuario de la base de datos. El usuario que se encarga de actualizar el inventario o dar de alta pacientes no tiene por qué saber cómo se llaman las tablas y qué acciones concretas ejecuta cada macro. Normalmente, el usuario en realidad trabaja con formularios amigables, con botones y otros controles, que utiliza de forma intuitiva.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Somos nosotros, quienes creamos la base de datos, los encargados de asignar a cada control la macro conveniente. Por lo tanto, lo que debemos hacer es asignar una macro que programe qué acción se ejecutará al interactuar con un determinado control u objeto. Y para ello trabajaremos con sus Eventos

Los Eventos

Un evento es una acción que el usuario realiza, normalmente de forma activa. Por ejemplo hacer clic o doble clic sobre un botón, cambiar de un registro a otro en un formulario, modificar un determinado campo de un registro, cerrar la base de datos, etc. Deberemos reflexionar sobre en qué momento nos interesa que se ejecute la macro, para aprender a elegir qué evento y qué control la desencadenarán.

Para asociar la macro a un control: En la vista diseño de formulario, seleccionamos un control o el propio formulario.

Luego abrimos la Hoja de propiedades, si no está ya abierta, y nos situamos en la pestaña Eventos

Entre los posibles eventos, elegimos el que nos conviene que ejecute la macro. Al hacer clic en él aparecerán dos botones

 El primero nos permitirá desplegar la lista de macros que tengamos en la base de datos. Ahí es donde deberemos indicar qué macro ejecutar.  El segundo botón nos permite elegir el tipo de generador entre los generadores de macros, expresiones y código. No vamos a entrar en detalle en él.

En el ejemplo de la imagen hemos asignado al evento Al hacer clic en un Botón de comando na macro que se encarga de mostrar la nómina del empleado actual. De forma que si el usuario está viendo los registros de empleados en un formulario y pulsa el botón, se abrirá una ventana con el formulario que contiene los datos de su última nómina

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

3 Acciones mas utilizadas en las macros En este apartado veremos las acciones más utilizadas en las Macros. Siempre puedes recurrir a la ayuda de Access para obtener información sobre acciones que aquí no tratemos.

- Algunas de estas acciones no se muestran si no está pulsado el icono Mostrar todas las

acciones, en la pestaña Diseño.

Abrir Tabla, Consulta, Formulario o Informe

Descripción Esta acción abre una tabla, consulta, formulario o informe escogida entre las existentes en la base de datos.

Argumentos

Para el caso de abrir una consulta tenemos los siguientes argumentos

Debemos indicar

el nombre de la consulta a abrir,

la Vista en la que quieras que se abra (Hoja de Datos, Diseño, Vista Preliminar, TablaDinámica, GráficoDinámico),

Modo de datos de la consulta. Si seleccionamos Agregar, la consulta sólo permitirá añadir nuevos registros a los existentes y no se tendrá acceso a los datos ya almacenados. Seleccionando Modificar permites la edición total de los datos de la consulta. Seleccionando Sólo lectura se abrirá la consulta mostrando todos sus datos pero sin ser editables, no se podrán modificar.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Para el caso de abrir un formulario tenemos los siguientes argumentos

Destaca

En el argumento Vista especificaremos el modo en el que queremos que se abra el formulario: en vista Formulario, Diseño, Vista Preliminar, Hoja de Datos, TablaDinámica o GráficoDinámico.

En Nombre del filtro podremos indicar el nombre de una consulta que hayamos creado previamente. Al abrirse el formulario solamente mostrará los registros que contengan los resultados de la consulta indicada.

En el argumento Condición WHERE podemos introducir, mediante el generador de expresiones, o tecleándola directamente, una condición que determinará los registros que se muestren en el formulario. Un ejemplo sería [Alumnado]![Código Postal] = 46183, para que mostrase solamente aquellos registros de la tabla Alumnado cuyo campo código postal fuese igual a 46183.

En Modo de datos podrás seleccionar los mismos parámetros que en la acción anterior: Agregar, Modificar o Sólo lectura.

El argumento Modo de la ventana decidirá si la ventana del formulario se deberá abrir en modo Normal, Oculta, como Icono o como Diálogo. Si abres un formulario en modo Oculto no podrá ser visto por el usuario, pero sí referenciado desde otros lugares para extraer datos o modificarlos. El modo Diálogo permite que el formulario se posicione encima de los demás formulario abiertos y sea imposible operar con el resto de la aplicación hasta que no se haya cerrado (como pasa con todos los cuadros de diálogo).

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Para el caso de abrir un informe tenemos los siguientes argumentos

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Destaca: - Las Vistas que ofrece esta acción son: Imprimir, Diseño, Vista preliminar, Informe y Distribución.

Igual que con los formularios puedes establecer un Nombre de filtro basado en una consulta o una Condición WHERE a través del Generador de expresiones. - En Modo de la ventana tenemos los mismo modos que para los formularios: Normal, Oculta, Icono y Diálogo.

Para el caso de abrir una tabla tenemos los siguientes argumentos

Como Vista podrás elegir los valores Hoja de Datos, Diseño, Vista Preliminar, TablaDinámica o GráficoDinámico.

Selecciona una opción de Modo de datos entre Agregar, Modificar y Sólo lectura igual que en la acción AbrirConsulta.

Buscar Registro

Descripción Utilizaremos esta acción para buscar registros. Esta acción busca el primer registro que cumpla los criterios especificados. Puedes utilizar esta acción para avanzar en las búsquedas que realices.

Argumentos

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

En el argumento Buscar introduciremos el valor a buscar en forma de texto, número, fecha o expresión. Podemos elegir en qué lugar del campo debe coincidir el cadena introducida, puedes elegir entre Cualquier parte del campo, Hacer coincidir todo el campo o al Comienzo del campo.

También puedes diferenciar entre hacer Coincidir mayúsculas y minúsculas o no. Se supone que la Búsqueda se realiza cuando estamos visualizando un registro determinado, de aquí el porqué de las siguientes opciones. Esta acción se para en el primer registro que cumpla las condiciones, por lo que en el argumento Buscar en podremos decidir el sentido en la que Access recorrerá los registros, selecciona Arriba para empezar a buscar hacia atrás. Selecciona Abajo para buscar hacia adelante. En ambos casos la búsqueda parará al llegar al final (o principio) del conjunto de registros. Selecciona Todo para buscar hacia adelante hasta el final, y después desde el principio hasta el registro actual.

En el argumento Buscar con formato decidiremos si se tiene en cuenta el formato que tienen los datos entre los que buscamos o no. Por ejemplo, si buscamos la cadena 1.234 y hacemos que busque con formato seleccionando Sí, en los campos con formato Access intentará hacer coincidir el formato de la cadena introducida con el dato almacenado con formato, por lo tanto no encontraría un campo que almacenase un valor de 1234. Si seleccionamos No, deberemos escribir 1234 para encontrar un campo con formato que contenga el dato 1.234, porque Access comparará 1234 con el valor del campo sin formato.

La opción Sólo el campo activo buscará en todos los registros, pero solamente en el campo activo en ese momento sino buscará en todos los campos. El argumento Buscar primero fuerza a que la búsqueda se realice desde el primer registro en vez de buscar a partir del registro actual.

Cerrar Ventana

Descripción Con esta acción podrás cerrar cualquier objeto que se encuentre abierto.

Argumentos

Selecciona en Tipo de objeto: Tabla, Formulario, Consulta, Informe, etc. , y en Nombre del objeto escribe el nombre de éste. Puedes configurar si se guardará el objeto antes de cerrarlo seleccionando Sí o No. Con Preguntar dejarás que esto quede a decisión del usuario

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Cuadro De Mensaje

Descripción Con las Macros incluso podremos mostrar mensajes para interactuar con el usuario. Esto nos lo permitirá la acción CuadroDeMensaje.

Argumentos

Sus argumentos son muy sencillos, en Mensaje deberemos escribir el mensaje que queremos que aparezca en el cuadro de mensaje. Utiliza la combinación de teclas MAYÚS+INTRO para crear saltos de línea.

También puedes utilizar el símbolo @ para rellenar el mensaje por secciones (o párrafos). Si utilizas esta alternativa deberás introducir 3 secciones. Aunque podrías dejar alguna en blanco. En el mensaje que ves a continuación, el contenido del argumento Mensaje era: Se ha producido un error guardando el registro.@Se perderán todos los cambios.@. Como puedes ver la tercera sección se ha dejado en blanco deliberadamente y el resultado sería este

En Bip podremos decidir si junto al mensaje suena una alarma auditiva para alertar al usuario.

Selecciona el Tipo de mensaje eligiendo entre: Ninguno, Crítico, Aviso: !, Aviso: ? e Información.

También puedes modificar el Título del cuadro de mensaje y escribir lo que prefieras.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Eco

Descripción Esta acción es muy útil para ocultar al usuario las operaciones que se están realizando con una Macro. Permite la activación o desactivación de la visualización de las acciones en pantalla. Si no está pulsado el icono Mostrar todas las acciones, en la pestaña Diseño, no podrás elegir esta acción.

Argumentos

Si quieres utilizarla es conveniente que la coloques al principio de la Macro para desactivar la visualización. Luego vuelve a utilizarla al final de la Macro para volverla a activar la visualización.

Activa o desactiva la visualización utilizando el argumento Eco activo. En Texto de la barra de estado podrás escribir un texto que se mostrará en la barra de estado mientras la Macro esté ejecutándose y el Eco se encuentre desactivado.

Las acciones DetenerMacro y DetenerTodasMacros activan el Eco automáticamente.

EjecutarComandoDeMenú Utiliza esta acción para lanzar comandos que puedas encontrar en cualquier barra de herramientas. Solo deberás seleccionar la acción que prefieras en el argumento Comando y se ejecutará.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

EstablecerValor

Descripción Una acción muy útil que te permitirá modificar los valores de los campos. Si no está pulsado el icono Mostrar todas las acciones, en la pestaña Diseño, no podrás elegir esta acción.

Argumentos

En Elemento introduce el nombre del campo sobre el que quieras establecer un valor. Podrás acceder al generador de expresiones para ello.

En el argumento Expresión introduciremos el valor que queremos que tome el campo. Recuerda que si es una cadena de texto deberá ir entre comillas.

IrARegistro

Descripción Te permitirá saltar a un registro en particular dentro de un objeto.

Argumentos

Para ello sólo tienes que indicar el Tipo de objeto (Tabla, Informe, Formulario...) y su Nombre.

Luego en Registro indicaremos a qué registro queremos ir. Podemos elegir entre Primero, Último o Nuevo. También es posible seleccionar las opciones Anterior, Siguiente o Ir a. En estos últimos casos deberemos rellenar también el argumento Desplazamiento para indicar el número del registro al que queremos ir (para Ir a), o cuántos registros queremos que se desplace hacia atrás o hacia delante (para Anterior y Siguiente).

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

SalirDeAccess Esta acción hace que Access se cierre.

Puedes elegir entre Guardar Todo, Preguntar o Salir directamente sin guardar los cambios.

4 Bibliografía

http://www.aulaclic.es/access-2010/t_14_1.htm

---

## 19.2 Abrir Form sin Abrir Access

FORM-UNLOAD

Option Explicit Const SW_HIDE = 0 Const SW_NORMAL = 1 Const SW_MINIMIZED = 2 Const SW_MAXIMIZED = 3

```bash
Private Declare Function ShowWindow Lib "user32" _
```

(ByVal hwnd As Long, ByVal nCmdShow As Long) As Long

```bash
Private Sub Form_Open(cancel As Integer)
```

Call ShowWindow(hWndAccessApp, SW_HIDE) DoCmd.OpenForm "MENU", windowmode:=acDialog End Sub

```bash
Private Sub form_Unload(cancel As Integer)
```

Dim IngRetCode As Long IngRetCode = ShowWindow(hWnAccessApp, SW_MAXIMIZED)

End Sub

---

## 19.3 B1-EXERCICIS BDA-MACROS

Tema 7

EJERCICIOS

BDA RELACIONALES . MACROS

1 parte: Editorial Paraninfo

Aplicaciones Ofimáticas Base de Datos Tema 07. EJERCICIOS. Base de datos relacionales. MACROS (B1)

ACTIVIDADES

> **✍️ Actividad 7.1.**
> Actividad 7.1.

Utilizando la BD LIBROS, crear una macro que muestre sobre un informe, que hay que crear previamente, los registros de la tabla Libros, aquellos con fecha de compra del año 99. Mostrar los datos: REF, TITULO, AUTOR, EDITORIAL y TEMA.

> **✍️ Actividad 7.2.**
> Actividad 7.2.

Utilizando la BD ALUMNOS, crear el formulario que se muestra en la figura, en el que hay que elegir un determinado curso del cuadro combinado y al pulsar el botón que aparece debajo visualice sobre un informe, que hay que crear previamente, los datos NOMBRE, POBLACIÓN y DIRECCIÓN de la tabla ALUMNOS, aquellos cuyo curso coincida con el mostrado en el cuadro combinado.

Formulario Actividad 2.

> **✍️ Actividad 7.3.**
> Actividad 7.3.

Crear una macro que automáticamente (al abrir la base de datos) abra un formulario llamado Inicio, que hay que crear, que presente utilizando botones de comando, las opciones para ejecutar los formularios e informes que se han realizado en la unidad, además de un botón para salir de la aplicación, el diseño se muestra en la siguiente figura.

Formulario de la Actividad 3.

Aplicaciones Ofimáticas Base de Datos Tema 07. EJERCICIOS. Base de datos relacionales. MACROS (B1)

EJERCICIOS PROPUESTOS

#### 7.1. Utilizando la BD EMPLEADOS, crear una macro que muestre sobre un

informe, que hay que crear previamente, los datos: APELLIDO, SALARIO, COMISION y NOMBRE DE DEPARTAMENTO de aquellos con comisión entre 100 y 200.

#### 7.2. Utilizando la BD VENTAS, crear una macro que muestre sobre un informe,

que hay que crear previamente, los productos cuya suma de unidades vendidas sea superior o igual a una cantidad tecleada, esa cantidad debe ser mayor de 0, validarla utilizando macros. Los datos a mostrar serán el nombre de producto y la suma de unidades. Crear el formulario que se muestra en la figura. El botón ejecutará la macro.

Formulario del ejercicio.

#### 7.3. Utilizando la BD ALUMNOS, crear una macro que muestre sobre un

informe, que hay que crear previamente, los alumnos cuya nota media sea mayor o igual a una nota tecleada, y un curso seleccionado. Los datos a mostrar serán el nombre del alumno y nota media. Crear el formulario que se muestra en la figura. El botón ejecutará la macro. La nota tecleada se tiene que validar y debe estar comprendida entre 0 y 10, validarla utilizando macros.

Formulario del ejercicio.

Aplicaciones Ofimáticas Base de Datos Tema 07. EJERCICIOS. Base de datos relacionales. MACROS (B1)

#### 7.4. Crear un formulario para la entrada de datos a la tabla CURSOS de la BD

ALUMNOS. El formulario estará asociado a la tabla CURSOS, y debe tener 5 botones, el primer botón para ver el registro anterior, el segundo para ver el siguiente, el tercero para guardar el registro, el cuarto para insertar y el quinto ejecutará una macro que abrirá un informe que liste los distintos cursos. Hay que crear el informe. En la entrada de datos se pide que se validen utilizando macros los datos de TURNO, cuyos valores deben estar entre DIURNO, NOCTURNO y VESPERTINO; y ETAPA cuyos valores deben ser: PRIMER CICLO, SEGUNDO CICLO, BACHILLERATO y FP.

---

## 19.4 B2-EXERCICIS BDA MACROS

Tema 7

EJERCICIOS

BDA-Relacionales. MACROS (completo)

2 parte (B2)

Ejercicios de macros en Access. Pág. 2

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 2 EJERCICIO 3 EJERCICIO 4

Crea un formulario en Vista de Diseño con una etiqueta en la que ponga tu nombre.

Crea a continuación una macro llamada Saludo que muestre el mensaje “Bienvenido a mi formulario”. El tipo del mensaje será de información y el título será “Hola!!!”. Abrir las propiedades del formulario creado y cambiarlas para que al iniciar el formulario se muestre el mensaje que se ha construido con la macro.

Guarda la base de datos creada con el nombre ejer1-3.mdb.

Crear una macro llamada Despedida que muestre el mensaje “Hasta la próxima!!!”. Dicho mensaje se va a visualizar al cerrar el formulario creado en el ejercicio anterior. Guardar los cambios realizados.

Crear una nueva macro cuya acción sea maximizar y otra macro cuya acción sea minimizar. Los nombres de las macros serán Maximizar y Minimizar respectivamente. Añadir al formulario del ejercicio 1 dos botones de comando y asociarles las macros creadas.

Abre la base de datos zoo.mdb y ve a la ventana de la base de datos para crear una nueva macro, como puede observarse en la siguiente imagen

Observa que se ha pulsado el botón de la barra de herramientas para hacer visible la columna Condición . Guarda la macro con el nombre Condicional. EJERCICIO 1

Ejercicios de macros en Access. Pág. 3

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 5 EJERCICIO 6

Ahora crea de forma automática un formulario para la tabla Cuidadores y, desde la vista Diseño, añade un botón para Ejecutar macro (Categoría­>Otras Acción­>Ejecutar macro). En el siguiente paso del asistente, selecciona la macro creada, Condicional. Después, deja la imagen para el frontal del botón que propone el asistente antes de finalizar. Prueba el funcionamiento de la macro pulsando el botón desde diferentes registros, si el salario es 1000 saldrá un mensaje y, en caso contrario, otro.

Crear una tabla llamada ejercicio3 con los campos dni, nombre y edad. Construir sobre esa tabla un formulario con el asistente y añadir un botón con la etiqueta “Comprobar edad” mostrará el mensaje “La persona tiene 18 años” en el caso de que se haya introducido 18 en el campo edad. Guardar el ejercicio con el nombre ejer5-7.mdb

Añade 2 condiciones más a la macro creada en el ejercicio anterior.

Si la edad es mayor que 18 se mostrará el mensaje “La persona es mayor de edad”. - Si la edad es menor que 18 se mostrará el mensaje “La persona tiene menos de 18 años”.

Ejercicios de macros en Access. Pág. 4

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 8 EJERCICIO 9

Construir un nuevo formulario sobre la tabla creada en el ejercicio 6. Quitar del formulario los botones de desplazamiento (los que sirven para moverse por los registros del formulario). Añadir al formulario un botón con la etiqueta “Guardar datos” que realizará lo siguiente.

Mostrará el mensaje “Se van a guardar los datos de un nuevo socio” cuando se pulse sobre él y hará las siguientes comprobaciones.

Si el nombre dni está vacío se mostrará el mensaje de error “Se debe introducir el DNI”. - Si el nombre está vacío se mostrará el mensaje de error “Se debe introducir el nombre”. - Si la edad no se ha introducido también se mostará un mensaje de error con el texto “Se debe introducir la edad”.

La macro creada se guardará con el nombre ComprNulos

Abre la base de datos zoo.mdb y crea automáticamente un nuevo formulario sobre la tabla ANIMALES llamado ANIMALES. En el formulario creado, el número de patas no puede ser superior a 8 ni inferior a 0. En ese caso se mostrará un mensaje de error y no se procederá a la actualización del registro.

Guarda el ejercicio con el nombre ejer8.mdb

En una base de datos en blanco, crea un formulario en vista Diseño y agrega los dos controles de la imagen.

Programa a continuación las siguientes macros: EJERCICIO 7

Ejercicios de macros en Access. Pág. 5

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

Evento Objeto Nombre macro Efecto Al abrir Formulario Saludo Mensaje “Bienvenido” D e s p u é s d e actualizar T e x t o “Nombre” Hola Mensaje “Hola” Después de actualizar Texto “Edad” MayorDeEdad Si ha cumplido 18 años el mensaje será “Puede acceder a la base de datos”, en otro caso se mostrará el mensaje “Debe esperar a cumplir los 18 años para poder ver contenidos”.

Guarda la base de datos con el nombre ejer9.mdb

A partir de una base de datos en blanco crea un formulario como el que se muestra a continuación.

Añade en primer lugar un grupo de opciones . Las etiquetas del grupo de opciones serán las que ves en el formulario de arriba. Los valores que devolverán ese grupo de opciones serán 1, 2, 3 y 4 respectivamente. Selecciona todo el grupo de opciones y asígnale el nombre “Opciones”.

Construye ahora una macro y asigna las siguientes condiciones y acciones.

EJERCICIO 10

Ejercicios de macros en Access. Pág. 6

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 11 EJERCICIO 13 Ahora tan solo tienes que añadir un botón de comando al formulario que creaste y asociarle la macro.

Guarda la base de datos con el nombre ejer10-11.mbd

Realiza una modificación al ejercicio anterior para que se ejecuten las acciones que elijas nada más elegir una opción del grupo de opciones, sin tener que pulsar sobre el botón “Ejecutar acción”. (Tendrás que seleccionar el grupo de opciones y asignarle al evento “Después de actualizar” la macro creada en el ejercicio anterior).

A partir de la base de datos zoo.mdb crear un informe a partir de la tabla Cuidadores y otro a partir de la tabla Animale.s

Crear a continuación un formulario como el que se indica a continuación.

Dependiendo de la opción que se elija se abrirá un informe u otro. Guarda la base de datos con el nombre ejer12.mdb.

EJERCICIO 12

Ejercicios de macros en Access. Pág. 7

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

Crear un formulario como el siguiente

En este formulario deberás realizar la suma dos números que se encuentran en dos campos (operando1 y operando2). El resultado de la suma se visualizará en el campo Resultado cuando se pulse sobre el botón “Realizar suma”. Guardar el ejercicio con el nombre ejer13.mdb.

> **⚠️ Nota: El formato de cada campo de texto debe ser Número...**
> Nota: El formato de cada campo de texto debe ser Número general.

Añadir al ejercicio anterior las siguientes comprobaciones al pulsar sobre el botón realizar suma.   Si el primer campo está vacío (operando1) se debe mostrar el mensaje “Debe introducirse el primer operando” y se detendrá la macro.   Si no se ha puesto ningún valor en el segundo campo (operando2) se debe mostrar el mensaje “Debe introducirse el segundo operando” y se detendrá la macro.

Guardar el ejercicio con el nombre ejer14.mdb

EJERCICIO 14

Ejercicios de macros en Access. Pág. 8

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 15 EJERCICIO 16

Utilizando la base de datos empleados.mdb, construir un formulario como el siguiente. En dicho formulario se introducirá un salario, y al pulsar sobre el botón “Ver informe” se mostrará un informe con los empleados que tienen un salario mayor que la cantidad introducida en el cuadro de texto del formulario.

Guarda el ejercicio con el nombre ejer15.mdb

Realizar una modificación en la macro del ejercicio anterior para que en el caso de que se introduzca una cantidad negativa en el salario, se muestre un cuadro de mensaje con el texto “El salario introducido no puede ser negativo”.

Guarda el ejercicio con el nombre ejer16.mdb

Ejercicios de macros en Access. Pág. 9

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 18

Sobre la base de datos ventas.mdb, crear una consulta que muestre el nombre de los productos y la suma de unidades vendidas de cada producto. Sobre esa consulta, crear un informe cuyos campos sean el nombre del producto y la suma de unidades.

A continuación crear un formulario como el siguiente. En él se introducirá una cantidad, y al pulsar sobre el botón “Mostrar informe” se visualizará un informe con los datos de los productos cuya suma de unidades vendidas sea superior a la cantidad introducida. La cantidad introducida debe ser mayor que 0. En caso contrario se mostrará un mensaje de error con el texto “La cantidad de unidades no puede ser negativa”.

A partir de la base de datos mundo.mdb, crear un formulario como el que se muestra a continuación. En dicho formulario aparecen dos cuadros combinados y un botón de comando. El primer cuadro combinado mostrará una lista de todos los continentes de la tabla PAÍSES. Cuando se elija un continente de la lista, se visualizará un informe con los datos de los países del continente elegido. El segundo cuadro combinado mostrará una lista de todas las lenguas de la tabla PAÍSES. Al elegir un valor de la lista, se mostrará un informe con los datos de los países en los que se habla la lengua elegida. El botón de comando mostrará un informe con los datos de los países del continente y lengua elegidos en los dos cuadros combinados.

Guarda el ejercicio con el nombre ejer18.mdb

EJERCICIO 17

Ejercicios de macros en Access. Pág. 10

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 19 EJERCICIO 20 EJERCICIO 21

Utilizando la base de datos alumnos.mdb, crear una macro que muestre sobre un informe, que hay que crear previamente, los alumnos cuya nota media sea mayor o igual que una nota tecleada, y un curso seleccionado. Los datos a mostrar serán el nombre de alumno y la nota media. Crear el formulario que aparece a continuación. El botón ejecutará la macro. La nota tecleada tiene que estar comprendida entre 0 y 10. En caso contrario se mostrará un mensaje de error y no se mostrará el informe.

Guarda el ejercicio con el nombre ejer19.mdb

A partir de la base de datos hospitales.mdb, crear un formulario con los campos de la tabla PLANTILLA. En el cuadro de texto “Turno”, los únicos valores posibles son ʻMʼ (Mañana) o ʻTʼ (Tarde). En caso de que se introduzcan valores distintos, se mostrará un mensaje de error y no se actualizará el registro.

Guarda el ejercicio con el nombre ejer20.mdb

En el siguiente formulario introduciremos una edad y el precio de entrada a un acontecimiento. El iva aplicable al precio de la entrada variará dependiendo de la edad introducida

Si la edad es menor de 18 el iva aplicable es del 16%. Si la edad está entre 18 y 65 el iva aplicable es del 20%. Si la edad introducida es mayor de 65 el iva aplicable será del 25%.

Ejercicios de macros en Access. Pág. 11

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 22

En este ejercicio vamos a construir un convertidor de euros a pesetas.

Añade un campo de texto con el nombre pesetas y otro campo de texto con el nombre euros.

A continuación agrega un campo de opciones . Las etiquetas del grupo de opciones serán “Euros a pesetas” y “Pesetas a euros”. Los valores que devolverán las opciones serán 1 y 2 respectivamente.

Por último selecciona todo el grupo de opciones y ponle el nombre “Opciones”.

Ahora tan solo queda construir la macro y asignarle las acciones apropiadas. Guarda el ejercicio con el nombre ejer22.mdb.

Ejercicios de macros en Access. Pág. 12

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 23 EJERCICIO 24

Supongamos que tenemos un formulario para introducir características de clientes. La empresa ofrece descuentos especiales a clientes según la edad que tengan, según el siguiente criterio

Edad Descuento <10 5% >=10 Y <25 10% >=25 y <50 15% >=50 25%

La tabla que almacena esta información consta de los siguientes campos (el Descuento, aunque se puede calcular a partir de los otros campos, se almacena en la tabla por razones de eficiencia)

Campo Comentarios Apellidos, Nombre, DNI Texto. Edad Numérico. Descuento Numérico entre 0 y 100.

Tenemos un formulario con un control para cada campo, con el mismo nombre que el campo. El formulario deberá tener además un botón de comando que calcule automáticamente el descuento a partir de la edad del cliente. Si el campo edades nulo, se deberá mostrar un mensaje indicando que se debe rellenar ese campo para calcular el descuento.

Guarda el ejercicio con el nombre ejer23.mdb

Ejercicios de macros en Access. Pág. 13

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 26

Diseñar un formulario con un solo botón con la etiqueta “Salir del formulario”. Al pulsar sobre este botón se mostrará el mensaje que aparece a continuación, y dependiendo del botón que se pulse en este mensaje se cerrará el formulario o no.

Guardar la base de datos creada con el nombre ejer26.mdb.

Realizar las siguientes modificaciones sobre el ejercicio anterior.   El cuadro de mensaje debe mostrar los botones Sí, No y Cancelar (sin ningún icono).   El cuadro de mensaje debe mostrar los botones Aceptar y Cancelar (sin ningún icono).   El cuadro de mensaje debe mostrar los botones Aceptar y Cancelar y debe llevar el icono de pregunta.

  El cuadro de mensaje debe mostrar los botones Sí, No y Cancelar y debe llevar el icono de información.

En una base de datos en blanco, crea un formulario como el de la imagen con el siguiente comportamiento

Si la fecha de llegada es posterior a la fecha del sistema, dará un cuadro de mensaje titulado ERROR DE FECHA con el texto “Fecha incorrecta”. (La función que devuelve la fecha actual es la función Ahora()).

Si la fecha de salida es anterior o igual a la fecha de llegada, dará un cuadro de mensaje titulado ERROR DE FECHA con el texto “La salida no puede ser anterior a la llegada”.

> **⚠️ NOTA: Asegúrate que los dos cuadros de texto tienen el ...**
> NOTA: Asegúrate que los dos cuadros de texto tienen el formato Fecha corta. Se tienen que crear dos macros. Una para comprobar que la fecha de llegada es posterior a la fecha del sistema y otra para comprobar que la fecha de llegada es mayor que la fecha de salida.

EJERCICIO 25

Ejercicios de macros en Access. Pág. 14

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 27

Cuando se cierre el formulario se debe mostrar un mensaje con los botones Sí y No y con el texto “Desea cerrar el formular.ioE?l m” ensaje debe también mostrar un icono de interrogante. Si se pulsa sobre el botónSí se cerrará el formulario.

Guardar la base de datos creada con el nombre ejer26.mdb

Crear un formulario desde cero que contenga tres controles de tipo Cuadro de textollamados C1, C2 y C3, que se supone que van a contener números, y un botón de comando con el texto “Ejecutar”. Deben funcionar así:   Siempre los valores introducidos deben ser C1 < C2 < C3. Si se intenta infringir esta regla, se debe abortar la modificación (utilizar el evento Antes de modific)a. r   Si se modifica el valor de C1 o C3, C2 debe calcularse automáticamente C2 como C1+C2.

  Si se pulsa sobre el botón Ejecutar y C1 está vacío debe llenarse a 0. Si se pulsa sobre el botón Ejecutar y C2 está vacío debe llenarse a C1+1, y si C3 queda vacío debe llenarse a C2+1.

Guardar el ejercicio con el nombre ejer27.mdb.

Ejercicios de macros en Access. Pág. 15

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

Crea en Access la siguiente calculadora.

Cuando se pulse sobre un botón de operación (+, ­, * ó /), debe aparecer en el campo resultado la operación seleccionada. Si se pulsa el botón + debe aparecer en operación el texto “Suma”, si se pulsa el botón – debe aparecer “Resta”, si se pulsa el botón * debe aparecer el texto “Multiplicación” y si se pulsa sobre el botón / debe aparecer el texto “División”.

Cuando se pulse un botón que contenga un número (1, 2 ó 3) debe ocurrir lo siguiente. Si el campo operando1 está vacío debe aparecer en este campo el valor del botón pulsado. Si se pulsa el botón de un número y el campo operando1 no está vacío debe aparecer en operando2 el valor del botón pulsado y el campo operando1 debe permanecer igual.

Cuando se pulse sobre el botón “Ejecutar operación” debe aparecer en el campo resultado el resultado de la operación seleccionada. En caso de que se pulse este botón y no haya un valor en el campo operando1 u operando2, se debe mostrar un mensaje indicando que no se ha introducido ningún número en estos campos y no se realizará ninguna operación.

> **⚠️ Nota: En el formulario no debe aparecer ningún botón de...**
> Nota: En el formulario no debe aparecer ningún botón de desplazamiento. Guardar el ejercicio con el nombre ejer31.mdb

EJERCICIO 28

Ejercicios de macros en Access. Pág. 16

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

EJERCICIO 29

En una base de datos nueva, crea un formulario como el de la imagen que permita jugar a adivinar un número secreto entre 1 y 100.

Al abrir el formulario, se ha de calcular un número aleatorio entre 1 y 100 y se escribirá en el controlSecreto. En otro cuadro de texto, se pedirá al usuario que introduzca un número y, al pulsar un botón de comando, se le indicará si el número secreto es mayor o menor, con el siguiente comportamiento

- Si el número introducido es mayor que 100 o menor que 1, se mostrará

un mensaje de error avisando al usuario que el número es excesivo o, por el contrario, demasiado bajo.

- Si el valor es igual al número secreto, se mostrará un mensaje titulado

“NÚMERO ACERTADO” con el texto “Enhorabuena, éste es el número secreto”.

- Si el valor introducido es menor que el número secreto, se mostrará un

mensaje titulado “NÚMERO BAJO” con el texto “El número introducido es menor que el número secreto”.

- Si el valor introducido es mayor que el número secreto, se mostrará un

mensaje titulado “NÚMERO ALTO” con el texto “El número introducido es mayor que el número secreto”.

> **⚠️ NOTA: Para calcular el número aleatorio, introduce la s...**
> NOTA: Para calcular el número aleatorio, introduce la siguiente expresión en el cuadro de texto Secreto

=Ent(100*NúmAleat(100)+1)

Esta expresión tomará la parte entera del resultado de multiplicar 100 por un número generado al azar entre 0 y 1, más una unidad.

Para ocultar el cuadro de texto Secreto, pon la propiedad Visiblede este campo con el valor No (Propiedades del cuadro de texto ­> Formato ­> Visible).

Ejercicios de macros en Access. Pág. 17

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

Supongamos que tenemos una formulario par introducir características de clientes. Nuestra empresa ofrece descuentos especiales a clientes menores de 25 años, a minusválidos y a poseedores de un carnet de socios según el siguiente criterio

Tipo Descuento Menores de 25 años 5% Minusválidos 10% Socios 20% Socios minusválidos 25% Minusválidos menores de 25 10% Socios menores de 25 años NO PERMITIDOS

La tabla que almacena esta información consta de los siguientes campos (el Descuento, aunque se puede calcular a partir de los otros campos, se almacena en la tabla por razones de eficiencia)

Campo Comentarios Apellidos, Nombre, DNI Texto. Edad Numérico. Minusválido Texto de longitud 1, con dos únicas posibilidades: "S" o "N" NumSocio Numérico. Nulo si no es socio. Descuento Numérico entre 0 y 100.

Tenemos un formulario con un control para cada campo, con el mismo nombre que el campo. El formulario debe establecer de forma automática el descuento a partir de las características del cliente. Además debe detectar las situaciones prohibidas, como un cliente menor de 25 años.

EJERCICIO 30

Ejercicios de macros en Access. Pág. 18

Aplicaciones Ofimáticas Base de datos

Tema 07: Base de Datos RELACIONALES. MACROS (B2)

Veamos las macros necesarias para el formulario, así como los eventos asociados a cada macro. Suponemos que el formulario se llama "Clientes" y que existen reglas de validación para verificar que el contenido del campo minusválido es "S" o "N" y que el descuento está comprendido entre 0 y 100.

Necesitaremos las siguientes macros

Nombre de macro Descripción Eventos a los que asocia Calcular descuento Calcula el descuento a partir de los datos del cliente, siempre y cuando el descuento esté en blanco Evento “Después de actualizar” del control Edad Evento “Después de actualizar” del control Minusválido Evento “Después de actualizar” del control NumSocio Comprobar validez Comprueba que no haya situaciones prohibidas como socios menores de 25 años Evento “Antes de actualizar” del control Edad Evento “Antes de actualizar” del control NumSocio

Guarda el ejercicio con el nombre ejer30.mdb
