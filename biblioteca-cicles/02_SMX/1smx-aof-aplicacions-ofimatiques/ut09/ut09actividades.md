---
layout: default
title: "✍️ Activitats pràctiques UT9 — Aplicacions Ofimàtiques | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT9 — Calc Mòdul 4 (IV)"
prev_url: "../ut09/ut0902.html"
prev_label: "⬅️ 9.2 RECURSOS pràctiques MÒDUL 4"
next_url: "../ut10/index.html"
next_label: "📘 UT10 Completa ➡️"
---

# ✍️ Activitats pràctiques UT9

> **✍️ 📋 Exercici / Qüestionari 9.1 — M4-Pràctica 1: Funcions de búsqueda**
> Módulo 4 . Práctica 1: Funciones de BUSQUEDA
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos • Concepto de funciones de búsqueda de valores. • Utilizar funciones de búsqueda en rangos de datos.
>
> Contenidos
>
> ### 1. Funciones de búsqueda. BUSCARV
>
> Calc dispone de funciones de búsqueda de elementos dentro de un rango. Estas funciones son BUSCARV y BUSCARH. La única diferencia es cómo se distribuye el rango de búsqueda, aunque ambas funcionan de la misma forma. La misión de BUSCARV es intentar localizar un determinado valor, en un rango de valores que creará el usuario, de forma que cuando se localiza el valor en cuestión, se devuelve otro valor asociado.
>
> Sintaxis de la función BUSCARV(criterio de búsqueda; matriz; índice; ordenación) • Criterio de búsqueda. Es el valor que queremos encontrar en un rango de valores que el usuario creará. • Matriz. Rango de valores que el usuario crea y donde la función buscará. Este rango puede estar compuesto de varias columnas, pero es la primera de ellas donde la función buscará el valor.
>
> • Índice. Dentro del rango a buscar, que puede estar compuesto por varias columnas, este parámetro indica en qué columna está el valor a devolver por la función. • Ordenación. Este es un parámetro opcional para indicar si el rango de búsqueda está o no ordenado. Por defecto, si omitimos el valor, Calc interpreta que es 1 (VERDADERO), lo que significa que la lista de búsqueda estará ordenada
>
> Ordenación = 1 (VERDADERO) → valor por defecto. Si la función BUSCARV no encuentra el valor a buscar, devolverá el mayor valor que sea menor o igual al valor buscado, es decir, el inmediatamente anterior. Ordenación = 0 (FALSO) → la función BUSCARV buscará en TODOS los elementos del rango de búsqueda. Si no encuentra el valor a buscar, devolverá el error #N/D.
>
> Módulo 4 . Práctica 1: Funciones de BUSQUEDA
>
> Fuente: www.tuinstitutoonline.com
>
> Ejercicio 1 La tienda de electrónica El Chispas quiere automatizar sus facturas en una hoja de cálculo. Crear nueva hoja • Crea un nuevo documento de hoja de cálculo y llamalo Modulo4.ods • A partir de este momento, todos los ejercicios del Módulo 4, lo realizaremos en este mismo documento (a no ser que se indique lo contrario).
>
> • Crea una nueva hoja de cálculo y llamala M4P1-Productos y pulsa la tecla Intro. Introducción de datos. Hoja 1 • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rectángulo con el texto “Catálogo”.
>
> • Pon formato Moneda con 2 decimales para el precio de los artículos. • Por ejemplo
>
> Módulo 4 . Práctica 1: Funciones de BUSQUEDA
>
> Fuente: www.tuinstitutoonline.com
>
> Introducción de datos. Hoja 2 • Renombra la segunda hoja del documento, y llamala M4P1-Electrónica y pulsa la tecla Intro. • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rótulo artístico con el texto “Electrónica El Chispas”.
>
> • Descarga de la carpeta RECURSOS la imagen de los cables (01Imagen). • Inserta la imagen descargada. Menú Insertar → Imagen → A partir de archivo. • Por ejemplo
>
> Buscar descripción del artículo Vamos a obtener la descripción del artículo buscando por la columna código (C9). Introduce la función, de manera que utilizando el autocompletar, consigas de manera correcta, la descripción de todos los productos. Buscar precio del artículo Vamos a obtener el precio del artículo buscando por la columna código (D9). Introduce la función, de manera que utilizando el autocompletar, consigas de manera correcta, el precio de todos los productos. Pon formato Moneda con 2 decimales para la columna del precio.
>
> Módulo 4 . Práctica 1: Funciones de BUSQUEDA
>
> Fuente: www.tuinstitutoonline.com
>
> Totales por línea • Calcula el importe para cada artículo. • Rellena el resto de la columna utilizando la función autocompletar. • Pon formato Moneda con 2 decimales para la columna del importe. Definir nombres Vamos a definir un nombre para la celda del porcentaje de IVA. Celda C26. Llámala "IVA".
>
> Totales • Base imponible. Utiliza la función Autosuma. • Importe del IVA. Haz referencia al nombre de la celda que has nombrado anteriormente • Total a pagar. • Pon formato Moneda con 2 decimales para las celdas de base imponible, importe IVA y total a pagar. • Comprueba los resultados finales
>
> Módulo 4 . Práctica 1: Funciones de BUSQUEDA
>
> Fuente: www.tuinstitutoonline.com
>
> • Guarda los cambios.
>
> A partir de aquí, y siempre y cuando no se indique lo contrario, todos los ejercicios del módulo 4, los realizaremos en este documento Modulo4.ods. Cada ejercicio, lo haremos en una hoja nueva, tal y como se indicará en los ejercicios.

> **✍️ 📋 Exercici / Qüestionari 9.2 — M4-Pràctica 2: Pràctica**
> Módulo 4 . Práctica 2: HOJA BAR
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos • Utilizar funciones de búsqueda en rangos de datos. • Uso del formato condicional. • Uso de la función SI para control de errores.
>
> Contenidos
>
> Vamos a repasar el funcionamiento de la función BUSCARV, revisando otros conceptos vistos en niveles anteriores. En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> El Bar Covelero quiere automatizar sus comandas en una hoja de cálculo.
>
> Crear nueva hoja • Crea una nueva hoja de cálculo y llamala M4P2-Carta. Introducción de datos. Hoja 1 • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rectángulo con el texto “Carta”.
>
> • Pon formato Moneda con 2 decimales para el precio de los productos de la carta. • Por ejemplo
>
> Módulo 4 . Práctica 2: HOJA BAR
>
> Fuente: www.tuinstitutoonline.com
>
> Introducción de datos. Hoja 2 • Añade una nueva hoja de cálculo y llamala M4P2-Bar. • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rótulo artístico con el texto “Bar Covelero”. • Descarga de la carpeta RECURSOS la imagen del barco (02Imagen).
>
> • Inserta la imagen descargada. Menú Insertar → Imagen → A partir de archivo. • Por ejemplo
>
> Módulo 4 . Práctica 2: HOJA BAR
>
> Fuente: www.tuinstitutoonline.com
>
> Buscar descripción y precio del artículo Vamos a obtener la descripción del artículo buscando por la columna código. • Ve a la celda A4. Escribe “A01”. • Ve a la celda B4. Utiliza la función adecuada, para sacar la descripción del código introducido en la celda A4 • Ve a la celda C4. Obtén el precio del artículo buscando por la columna código.
>
> • Pon formato Moneda a la columna precio.
>
> Módulo 4 . Práctica 2: HOJA BAR
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 2. Control de errores. Función SI
>
> La función lógica SI nos va a permitir, mediante una condición, comprobar valores no deseados, de forma que podamos no mostrarlos en nuestra hoja de cálculo. Ejercicio 2 • Rellena el resto de la columna Descripción con la función Autocompletar. • Rellena el resto de la columna Precio con la función Autocompletar.
>
> ¿Qué ocurre? Como puede comprobarse, Calc nos devuelve un error, ya que sólo disponemos del código de artículo para la fila 4. En el resto, la función BUSCARV no encuentra el código y devuelve un error. ¿Cómo podemos solucionar este problema? Para solucionar este error vamos a utilizar 2 funciones: ESBLANCO y el condicional SI. La primera nos servirá para comprobar si una celda está vacía o tiene datos. Mediante el condicional SI evaluaremos la condición de celda vacía. Si está vacía no devolveremos nada y si no, devolveremos el resultado de BUSCARV.
>
> Módulo 4 . Práctica 2: HOJA BAR
>
> Fuente: www.tuinstitutoonline.com
>
> • Columna descripción. Ve a la celda B4. Modifica la fórmula y utilizando la combinación de funciones SI y ESBLANCO, controla el error: si la celda de código está en blanco, en la descripción debe aparecer el blanco, y si en la celda código hay algun código, entonces que busque la descripción • Rellena el resto de la columna utilizando la función autocompletar.
>
> • Columna precio. Controla el error, de la misma manera que la columna descripción (codigo en blanco), utilizando la combinación de funciones SI y ESBLANCO • Rellena el resto de la columna utilizando la función autocompletar. Ahora, primero comprobamos si la celda está vacía. En caso afirmativo, la fórmula devuelve la cadena vacía dobles comillas (nada), por lo que la celda continuará vacía. Si contiene datos, es decir, si hay escrito un código, el resultado será el de la función BUSCARV.
>
> Contenidos
>
> ### 3. Referencias absolutas
>
> Cuando utilicemos las funciones de búsqueda (BUSCARV, BUSCARH), debemos asegurarnos que siempre buscamos en el mismo rango de datos. Ejercicio 3 • Introduce los códigos que se muestran a continuación. • Rellena el resto de la columna Descripción y Precio con la función Autocompletar.
>
> Módulo 4 . Práctica 2: HOJA BAR
>
> Fuente: www.tuinstitutoonline.com
>
> Total por línea • Rellena la columna cantidad con los datos que se muestran debajo. • Calcula el importe de cada línea • Rellena el resto de la columna utilizando la función autocompletar. • Pon formato Moneda a la columna importe.
>
> Totales • Calcula la base imponible. Utiliza la función de Autosuma. • Calcula el importe IVA. • Calcula el total a pagar. • Introduce el valor 370 en la casilla de entrega E22. • Calcula el cambio a devolver. • Pon formato Moneda a las celdas de importe total, importe IVA, total a pagar, entrega y cambio.
>
> • Comprueba los resultados finales
>
> Módulo 4 . Práctica 2: HOJA BAR
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 4. Formato condicional
>
> Vamos a crear un formato condicional para que si el valor de entrega es menor que el total a pagar, se visualice el texto en color blanco negrita con fondo rojo
>
> Ejercicio 4 • Crea un nuevo estilo de nombre "Rojo" en el menú Formato → Estilos y formato. Define la letra en color blanco negrita y fondo rojo. • Crea un formato condicional para la celda Entrega. Añade la condición para que si el valor de entrega es menor que el total a pagar, se visualice el texto con el nuevo estilo (en color blanco negrita con fondo rojo).
>
> • Prueba a introducir un valor menor que el total a pagar (por ejemplo 350) y comprueba el resultado
>
> Módulo 4 . Práctica 2: HOJA BAR
>
> Fuente: www.tuinstitutoonline.com

> **✍️ 📋 Exercici / Qüestionari 9.3 — Pràctica NIF**
> Práctica NIF
>
> PRACTICA NIF
>
> Crea una hoja de cálculo que sirva para obtener el NIF, Nombra la hoja con el nombre P0-NIF
>
> 1.- En la celda B1 el usuario introducirá el DNI 2.- Automáticamente, después de introducir el DNI, en la celda B2 aparecerá el NIF (DNI + LETRA), tal y como aparece a continuación
>
> A B DNI 20365985 NIF 20365985G
>
> 3.- Hay que tener en cuenta que el procedimiento a seguir para obtener la letra del DNI es el siguiente
>
> Paso 1: dividir el nº del DNI por 23 (nº de letras del alfabeto) y redondear el resultado al nº entero inferior (esto se consigue con la función ENTERO)
>
> Paso 2: multiplicar el resultado anterior por 23.
>
> Paso 3: restar al nº del DNI el resultado del paso 2
>
> Paso 4: buscar la letra que corresponde al nº obtenido en el paso 3 en la siguiente tabla de correspondencias: NÚMERO LETRA T R W A G M Y F P D X B N J Z S Q V H L C K E T
>
> Paso 5: unir el DNI y la letra obtenida. Para ello tendrás que utilizar el operador &, que sirve para unir el contenido de celdas con texto (p.ej, =B3&B7)
>
> 4.- Para este cálculo el usuario deberá copiar esta tabla y buscar la letra correspondiente al DNI introducido.
>
> 5.- Las distintas operaciones que se realizan en los pasos, las puedes hacer en una misma celda ó utilizando las que quieras, pero ten en cuenta que en la celda B2 sólo debe aparecer el NIF, una vez se haya introducido el DNI

> **✍️ 📋 Exercici / Qüestionari 9.4 — Pràctica PREMIOS**
> Práctica PREMIOS
>
> PRÁCTICA PREMIOS
>
> Parte 1: Función BUSCARV
>
> Nuestra empresa, dedicada la distribución y venta de bebidas refrescantes, ha decidido (como método de promoción y vía de investigación de mercado) premiar a aquellos consumidores que envíen las etiquetas de los refrescos de dos litros a un determinado apartado de correos.
>
> 1.- La tabla de correspondencia de premios, es la siguiente
>
> Nº de puntos Premio CAMISETA 1000 AURICULARES 2000 EQUIPO MUSICA 4000 PORTATIL
>
> Al cabo de un mes se elabora la lista de los primeros ganadores, incluyendo los puntos obtenidos por cada uno y el premio que les corresponde. Esta lista, antes de introducir los premios conseguidos por los ganadores, presenta la siguiente apariencia
>
> Ganador Nº de puntos Premio Antonio Buesa Fernández
>
> Catalina Lago Herrera 1200
>
> Roberto Suárez Vega
>
> Luis Ferrer Mas 2100
>
> Ana Sánchez Torres
>
> José Alonso Parra Oliver 4050
>
> 2.- Se trata de confeccionar dicha lista, de modo que el premio conseguido por cada ganador aparezca automáti- camente en la tercera columna sólo con introducir el nº de puntos obtenido.
>
> 3.- El aspecto será el siguiente (si se quiere realizar en solo una hoja, llama a la hoja P0-Premios1)
>
> A B C Ganador Nº de puntos Premio Antonio Buesa Fernández
>
> Catalina Lago Herrera 1200
>
> Roberto Suárez Vega
>
> Luis Ferrer Mas 2100
>
> Ana Sánchez Torres
>
> José Alonso Parra Oliver 4050
>
> Nº de puntos Premio
>
> CAMISETA
>
> 1000 AURICULARES
>
> 2000 EQUIPO MUSICA
>
> 4000 PORTATIL
>
> 4.- En las celdas C2:C7, deberás introducir una fórmula de manera que te calcule, a partir del número de puntos del concursante (columna B), el premio correspondiente de la Tabla de Regalos (A9:B:13)
>
> 5.- Guarda el ejercicio.
>
> Práctica PREMIOS
>
> Parte 2: Función BUSCARV
>
> Estas funciones son necesarias en aquellos casos en que la matriz en la que realizamos la búsqueda tiene más de 2 columnas (o filas). En tales casos, se ha de indicar en qué columna (BUSCARV) o fila (BUSCARH) se ha de buscar la correspondencia que queremos
>
> Supongamos que en el ejercicio anterior, en la tabla de correspondencias se incluyen los datos relativos a tres promociones diferentes. COPIA esta tabla, en una nueva hoja
>
> Nº de puntos Premios prom. 1 Premios prom. 2 Premios prom. 3 CAMISETA ENTRADA CINE SUSCRIPCIÓN A REVISTA 12 MESES 1000 AURICULARES ENTRADA TEATRO SUSCRIPCIÓN REVISTA 24 MESES 2000 EQUIPO MUSICA ENTRADA FUTBOL SUSCRIPCIÓN REVISTA 36 MESES 4000 PORTATIL ENTRADA TEATRO Y OPERA SUSCRIPCIÓN REVISTA 48 MESES
>
> Aprovechando los nombres de antes y el nº de puntos, supondremos que, en lugar de participar en la promoción 1 lo han hecho en la promoción 2.
>
> El aspecto será aproximadamente el siguiente (Llama a la hoja con el nombre P0-Premios2)
>
> A B C D E Ganador Nº de puntos Premio Prom. 1 Premio Prom. 2 Premio Prom. 3 Antonio Buesa Fernán- dez
>
> Catalina Lago Herrera 1200
>
> Roberto Suárez Vega
>
> Luis Ferrer Mas 2100
>
> Ana Sánchez Torres
>
> José Alonso Parra Oli- ver 4050
>
> Nº de puntos Premios prom. 1 Premios prom. 2 Premios prom. 3
>
> CAMISETA ENTRADA CINE SUSCRIPCIÓN A REVISTA 12 ME- SES
>
> 1000 AURICULARES ENTRADA TEATRO SUSCRIPCIÓN REVISTA 24 ME- SES
>
> 2000 EQUIPO MUSICA ENTRADA FUTBOL SUSCRIPCIÓN REVISTA 36 ME- SES
>
> 4000 PORTATIL ENTRADA TEATRO Y OPERA SUSCRIPCIÓN REVISTA 48 ME- SES
>
> 4.- Calcula el premio de cada uno de los concursantes en cada una de las promociones (en la tabla de los con- cursantes con los puntos, aparecerá una columna para cada promoción)
>
> 5.- Guarda los cambios en el ejercicio
>
> Práctica PREMIOS
>
> Parte 3: Función BUSCARH
>
> Funciona del mismo modo y en los mismos casos que BUSCARV. La diferencia radica en que BUSCARH se utiliza cuando los datos de la matriz están dispuestos de forma horizontal.
>
> Copia la tabla de correspondencias, de forma que los datos se dispongan en horizontal y no en vertical.
>
> Realiza el mismo ejercicio, pero teniendo los datos de manera horizontal, y no vertical. (Llama a la hoja con el nombre P0-Premios3)
>
> Práctica PREMIOS
>
> Parte 4: Formulario
>
> Crea en una nueva hoja, el siguiente modelo de pedido (Llama a la hoja con el nombre P0-Pedido)
>
> HERMANOS LÓPEZ
>
> C/ Romero, 90 41042 SEVILLA
>
> PEDIDO Nº
>
> FECHA
>
> Cód. destinata- rio
>
> Destinatario
>
> CONDICIONES Forma envío
>
> Plazo entrega
>
> Forma pago
>
> Lugar entrega
>
> Cantidad Artículo Precio unit. Importe total
>
> En la misma hoja, más abajo, crea la siguiente tabla de correspondencias
>
> Código des- tinatario Destinatario Forma envío Forma pago Plazo entre- ga Lugar entre- ga T32 Talleres Ra- mírez Aéreo Al contado 24 hs. Fábrica AK7 Mayoristas Centrales Camión Aplazado (30 d./vta.) 3 días Almacén N12 El dedal, SL Tren Al contado 2 días Almacén
>
> A continuación, en las celdas del modelo de pedido correspondientes a los datos de: - Destinatario, - Forma envío, - Forma pago, - Plazo entrega y - Lugar entrega
>
> introduce funciones BUSCARV de forma que al escribir el código del destinatario aparezcan automáticamente los datos correspondientes a dicho código.
>
> Funcionamiento: El usuario introducirá un valor en la celda de CODIGO DESTINATARIO, y automáticamente deberán aparecer los valores de DESTINATARIO, FORMA ENVIO, FORMA PAGO, PLAZO ENTREGA, LUGAR ENTREGA.

> **✍️ 📋 Exercici / Qüestionari 9.5 — Pràctica COCHES**
> Práctica COCHES
>
> PRACTICA COCHES S
>
> La empresa concesionaria de automóviles Andalucía Motor, S.L. desea diseñar un libro de trabajo en Excel, denominado AMOTOR.XLS, para llevar en él un registro diario de las ventas de automóviles que permita, introduciendo sólo el código correspondiente a cada modelo vendido, obtener automáticamente tanto el nombre del modelo como todos los datos que permitan calcular el precio de venta; es decir, los extras (aire acondicionado, ABS, dirección asistida, pintura metalizada, llantas de aleación ligera) y el precio base. También se incluirá, lógicamente, en el registro (como última columna) el precio final del modelo.
>
> 1.- Para ello, en la Hoja1 (que llamarás “P0-NFORMACION”) se incluirá la información relativa tanto a los precios de los diferentes extras como el precio base para cada modelo de coche (celdas A1:H7)
>
> 2.- A continuación, en una nueva hoja, a la que llamaras “P0-Registro Ventas”, crearas la siguiente tabla en el rango de celdas A1:J8
>
> 3.- En esta hoja nueva incluirás los datos de venta, de manera que al introducir la FECHA DE VENTA y EL CÓDIGO del coche, automáticamente se calcule el precio de venta (todas las casillas se rellenan automáticamente una vez el usuario ha introducido la fecha de venta y el código del coche)
>
> Las ventas a registrar son las siguientes: 25 de abril: un modelo E y uno C 26 de abril: un modelo A, otro D y otro F 27 de abril: un modelo E y uno B
>
> Funcionamiento: el usuario introducirá en cada fila, la fecha de venta y el código del coche, y automáticamente aparecerán los valores de los extras del coche seleccionado, además del Precio de venta que será la suma del precio base y todos los extras. Si no hay fecha de venta, no hay código, y por lo tanto, el resto de celdas de la fila, también aparecerán en blanco.
>
> Práctica COCHES
>
> PARTE 2 DE LA PRÁCTICA COCHES
>
> La misma empresa de antes desea diseñar un libro de trabajo en Calc, que facilite la elaboración de presupuestos de ventas.
>
> En la hoja3 (hoja nueva) , llamada P0-PRESUPUESTO, se realizará la elaboración del presupuesto tal como aparece a continuación
>
> 1.- En la celda B1 se introduce el código del vehículo y en C1 deberá aparecer automáticamente el nombre del modelo.
>
> 2.- En la celda B2 se tecleará “SI” en el caso de que se desee el extra del aire acondicionado y “NO” en caso contrario. En la celda C2 deberá aparecer el precio del extra si se hubiera elegido y 0€. en el supuesto de que se hubiera optado por no incluirlo.
>
> 3.- En las celdas del rango C3:C6, las fórmulas son similares a la creada para C2, pero ahora para el resto de extras.
>
> 4.- En la celda C7 se calcula la suma de los precios de los extras.
>
> 5.- En C8 se calcula el precio total del vehículo.
>
> 6.- Guarda el ejercicio
>
> Práctica COCHES
>
> Variantes del ejercicio
>
> ### 1. Realizar el ejercicio, suponiendo que en la columna B, sólo introducimos los valores
>
> SI y NO en mayúsculas. No controlar ningún otro caso.
>
> ### 2. Realizar el ejercicio, controlando las posibles combinaciones de mayúsculas de SI y
>
> NO, es decir, cualquier posible combinación de mayúsculas en las palabras SI y NO (SI, NO, si, no, Si, No, sI, nO) será válida.
>
> ### 3. Controlar el caso de que si no se introduce ningún código de Coche, el resto de
>
> celdas en la columna C, estarán todas en blanco, hasta que se introduzco un código de coche.
>
> ### 4. Controlar el caso de que si se introduce código de coche, pero en las opciones de SI ó
>
> NO de los extras no se introduce nada, el precio del extra donde no hay valor en SI ó NO, deberá aparecer también en blanco
>
> ### 5. Controlar el caso de que si no se introduce un código de coche válido, deberá
>
> aparecer en la descripción del coche, la palabra ERROR. En consecuencia, los precios de los extras, tampoco se podrán calcular, y también aparecerá ERROR
>
> ### 6. Controlar el caso de que en las celdas donde introducimos SI ó NO, si escribimos
>
> cualquier otra cosa, en la celda donde deberá aparecer el precio del extra o cero, en este caso aparecerá el texto ERROR
>
> - En el caso de que en algunas de las celdas del precio de los extras o en la descripción
>
> del modelo de coche, aparezca el texto ERROR, tanto la suma de los extras, como el precio final, no se podrá calcular, por lo tanto también aparecerá el texto ERROR

> **✍️ 📋 Exercici / Qüestionari 9.6 — Pràctica PRIMAS**
> Práctica PRIMAS
>
> EJERCICIO Crea una hoja nueva, llamada P0-PRIMAS y calcula utilizando la siguiente tabla las primas que se les da a los empleados según el número de hijos que posean.

> **✍️ 📋 Exercici / Qüestionari 9.7 — M4-Pràctica 3: Funcions booleanes**
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos • Utilizar funciones booleanas. • Utilizar funciones estadísticas. • Uso del formato condicional.
>
> Contenidos
>
> ### 1. Funciones booleanas
>
> Las funciones booleanas son aquellas que sólo pueden devolver 2 resultados: verdadero o falso, o lo que es lo mismo, 1 ó 0 en valores binarios. Son funciones que se utilizan para evaluar si se cumple una determinada condición (verdadero) o, por el contrario, no se cumple (falso). Es decir, se utilizan en la toma de decisiones y en base al resultado de una función, decidiremos si ejecutar o no una acción.
>
> #### 1.1. Función O (OR en inglés)
>
> Devuelve el valor VERDADERO si alguno de sus argumentos es VERDADERO. Devuelve FALSO si todos los argumentos son FALSO. Sintaxis: O(valor_lógico1;valor_lógico2; ...) donde Valor_lógico1; valor_lógico2; ... representan entre 1 y 30 condiciones que se desean comprobar y que pueden ser VERDADERO o FALSO.
>
> La tabla de verdad de la función para 2 argumentos es la siguiente: Arg 1 Arg 2 O (arg 1, arg 2) V V V V F V F V V F F F Ejemplos: • O(VERDADERO;FALSO) es igual a VERDADERO • O(1+1=7;3+3=8) es igual a FALSO • Si el rango A1:A3 contiene los valores VERDADERO, FALSO y VERDADERO, entonces
>
> O(A1:A3) es igual a VERDADERO
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> #### 1.2. Función Y (AND en inglés)
>
> Devuelve VERDADERO si todos los argumentos son VERDADERO. Devuelve FALSO si uno o más argumentos son FALSO. Sintaxis: Y(valor_lógico1;valor_lógico2; ...) donde Valor_lógico1;valor_lógico2; ... representan entre 1 y 30 condiciones que se desean comprobar y que pueden ser VERDADERO o FALSO.
>
> La tabla de verdad de la función para 2 argumentos es la siguiente: Arg 1 Arg 2 Y (arg 1, arg 2) V V V V F F F V F F F F Ejemplos: • Y(VERDADERO; VERDADERO) es igual a VERDADERO • Y(VERDADERO; FALSO) es igual a FALSO • Y(2+3=5;1+1=2) es igual a VERDADERO • Si B1:B3 contiene los valores VERDADERO, FALSO y VERDADERO, entonces: Y(B1:B3) es igual a FALSO • Si B4 contiene un número entre 1 y 100, entonces: Y(1<B4; B4<100) es igual a VERDADERO.
>
> #### 1.3. Función NO (NOT en inglés)
>
> Invierte el valor lógico del argumento, es decir, cambia FALSO por VERDADERO y VERDADERO por FALSO. Usaremos NO cuando deseemos asegurarnos de que un valor no sea igual a otro valor específico. Sintaxis: NO(valor_lógico) donde Valor_lógico es un valor o expresión que se puede evaluar como VERDADERO o FALSO. Si valor_lógico es FALSO, NO devuelve VERDADERO; si valor_lógico es VERDADERO, NO devuelve FALSO.
>
> La tabla de verdad de la función para 1 argumento es la siguiente: Arg 1 NO (arg 1) V F F V Ejemplos: • NO(FALSO) es igual a VERDADERO • NO(2+2=4) es igual a FALSO
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> El profesor de informática desea llevar un registro automatizado de las notas de sus alumnos. Descargar la hoja • Descarga de la carpeta RECURSOS la hoja de cálculo para el ejercicio 03calificaciones.ods • Copia el contenido de la hoja, en tu documento de trabajo Modulo4.ods, en una nueva hoja que llamaras M4P3-calificaciones.
>
> Introducción de datos • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rótulo artístico con el texto “IES San Aprobado Mártir”. • Descarga de la carpeta RECURSOS la imagen del birrete (03Imagen).
>
> • Inserta la imagen descargada. • Por ejemplo
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Nota de examen Vamos a calcular la nota media de los 2 exámenes. • Ve a la celda G6. La nota del examen será la media aritmética (función PROMEDIO) entre el examen 1 y el examen 2. Sin embargo, si el alumno no se ha presentado a alguno de los exámenes (NP), el resultado será el valor NP. Dado que necesitamos una fórmula más compleja, vamos a actuar por partes.
>
> Para comprobar si un alumno no se ha presentado a alguno de los exámenes, usaremos la función O mediante el asistente de funciones. ¿Qué función es?
>
> • A continuación, utilizaremos la función SI teniendo en cuenta el resultado anterior. Si la función O devuelve VERDADERO (el alumno no se ha presentado a algún examen), entonces devolveremos el valor NP. Si la función O es FALSO, devolveremos la media aritmética de la nota de los 2 exámenes. Por ejemplo, para el primer alumno tendremos
>
> =SI(O(E6="NP";F6="NP");"NP";PROMEDIO(E6:F6))
>
> si VERDADERO, devuelve NP.
>
> si FALSO, calcula la media aritmética • Rellena el resto de la columna utilizando la función autocompletar. • Pon formato Cantidad para la nota.
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Media final Vamos a calcular la media final según el siguiente criterio: Media final = 50% de la nota de prácticas + 40% de la nota de examen + 10% de la nota de actitud teniendo en cuenta que si en la nota de examen aparece el valor NP, lo consideraremos como cero (valor 0).
>
> • Ve a la celda I6. Escribe la formula de la media final • Rellena el resto de la columna utilizando la función autocompletar. Como habrán notas en las que aparecerá NP, si calculamos la media ponderada con porcentajes, nos saldrá un error. Tendremos que utilizar la función SI para comprobar si un alumno no se ha presentado a algún examen y, entonces, devolver el valor numérico 0 (para esa nota de examen).
>
> • Ve a la celda I6. Modifica la fórmula añadiendo las referencias absolutas y la función SI. Para el primer alumno, tendremos la fórmula: =D6*$D$3+SI(G6="NP";0;G6*$G$3)+H6*$H$3 → si la nota de examen es NP, se devuelve
>
> - En caso contrario, se calcula el 40% de la nota.
>
> • Rellena el resto de la columna utilizando la función autocompletar.
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 2. Función REDONDEAR
>
> La función matemática REDONDEAR devuelve un número redondeado hasta una cantidad determinada de decimales. Sintaxis: REDONDEAR(Número; Contar) Devuelve el Número redondeado a Contar posiciones decimales. Si Contar se omite o es cero, la función redondea al entero más cercano. El redondeo se calcula mediante el siguiente criterio
>
> Si el primer decimal es >= 5, el número se redondea por exceso. (Por ejemplo, 4,6 se redondeará a 5) Si el primer decimal es < 5, el número se redondea por defecto. (Por ejemplo, 7,2 se redondeará a 7)
>
> Ejercicio 2 Nota del boletín Vamos a calcular la nota que mostraremos en el boletín oficial. Para ello, vamos a redondear la media final al entero más cercano con el siguiente criterio: Si un alumno tiene NP en la nota de examen, NO aprueba. Por tanto, se calculará el mínimo entre el redondeo y 4. Si el alumno no tiene NP, entonces se redondea su media final. Dado que necesitamos una fórmula más compleja, vamos a actuar por partes.
>
> • Ve a la celda J6. Para el primer alumno, tendremos la fórmula: =REDONDEAR(I6) • Ahora bien, debemos comprobar si el alumno tiene un no presentado en su nota de examen. Entonces, calcularemos el mínimo resultado entre el redondeo y 4. Si un alumno tiene aprobadas las prácticas y la actitud, pero tiene NP en el examen, entonces no aprueba. Por ejemplo, para el primer alumno tendremos
>
> =SI(G6="NP";MÍN(REDONDEAR(I6);4);REDONDEAR(I6)) → si tiene NP, se calcula el mínimo entre los valores de redondeo y 4. Si tiene nota de examen, se redondea directamente • Rellena el resto de la columna utilizando la función autocompletar.
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 3. Formato condicional
>
> Vamos a crear formatos condicionales para resaltar diferentes aspectos de las notas.
>
> Ejercicio 3
>
> No presentados • Crea un nuevo estilo de nombre "No_presentado" en el menú Formato → Estilos y formato. Define la letra en color blanco negrita y fondo rojo. • Crea un formato condicional para la columna nota (examen). Añade la condición para que si la nota de examen es NP, se visualice el texto con el nuevo estilo (en color blanco negrita con fondo rojo).
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Suspendidos • Crea un nuevo estilo de nombre "Suspendido" en el menú Formato → Estilos y formato. Define la letra en negrita color rojo y fondo gris. • Crea un formato condicional para la columna boletín. Añade la condición para que si la nota del boletín es menor que 5, se visualice el texto con el nuevo estilo (en negrita color rojo y fondo gris).
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 4. Totales y gráficos
>
> Vamos a calcular las fórmulas para los totales y a obtener gráficos. Ejercicio 4
>
> Nota media Vamos a calcular la nota media de las prácticas, los exámenes, la actitud, la media final y la nota del boletín. • Ve a la celda D24. Utiliza la función PROMEDIO. • Rellena el resto de la fila utilizando la función autocompletar.
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Número de alumnos • Calcula el número total de alumnos. Ve a la celda M8. Utiliza la función CONTARA y el rango de datos A6:A23. Aprobados En primer lugar, vamos a definir un nombre para el rango de datos de las notas del boletín. • Selecciona el rango J6:J23. Ve al menú Insertar → Nombres → Definir. En el campo Nombre escribe el texto "Notas". Haz clic en Añadir.
>
> Ahora usaremos el nombre definido en las fórmulas siguientes. • Calcula el total de alumnos aprobados. Ve a la celda M9. Utiliza la función CONTAR.SI. Se considera aprobado, cualquier nota mayor o igual que 5. Por tanto, tenemos que sumar las notas que sean 5, 6, 7, 8, 9 y 10, pertenecientes al intervalo de "Notas". La fórmula empezaría como =CONTAR.SI(Notas;5)+ ...
>
> Suspendidos Antes de nada, vamos a definir un nombre para el total de alumnos y otro para los aprobados. • Ve a la celda M8. Ve al menú Insertar → Nombres → Definir. En el campo Nombre escribe el texto "Num_alumnos". Haz clic en Añadir. • Ve a la celda M9. Repite el mismo proceso y define el nombre "Aprobados".
>
> Ahora usaremos los nombres creados en las fórmulas siguientes. • Calcula el total de alumnos suspendidos. Suspendidos = Num_alumnos - Aprobados
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> No presentados • Calcula el total de alumnos no presentados. Utiliza la función CONTAR.SI y el rango de datos G6:G23 correspondiente a la nota de examen. Se considera no presentado cuando aparece el valor NP. • Comprueba los resultados
>
> Detalle de calificaciones Vamos a obtener el número de sobresalientes, notables, bienes, suficientes e insuficientes de las notas del boletín. • Calcula el total de sobresalientes. Ve a la celda M14. Utiliza la función CONTAR.SI. Se considera sobresaliente, cualquier nota que sea 9 ó 10. Por tanto, tenemos que sumar las notas que sean 9 y 10, pertenecientes al intervalo de "Notas".
>
> • Calcula el total de notables. Ve a la celda M15. Utiliza la función CONTAR.SI. Se considera notable, cualquier nota que sea 7 u 8. Por tanto, tenemos que sumar las notas que sean 7 y 8, pertenecientes al intervalo de "Notas". • Calcula el total de bienes. Ve a la celda M16. Utiliza la función CONTAR.SI. Se considera bien, cualquier nota que sea 6. Por tanto, tenemos que sumar las notas que sean 6, pertenecientes al intervalo de "Notas".
>
> • Calcula el total de suficientes. Ve a la celda M17. Utiliza la función CONTAR.SI. Se considera suficiente, cualquier nota que sea 5. Por tanto, tenemos que sumar las notas que sean 5, pertenecientes al intervalo de "Notas". • Calcula el total de insuficientes. Ve a la celda M18. Insuficientes = Num_alumnos - Sobresalientes - Notables - Bienes - Suficientes Ahora calculamos los porcentajes de cada nota.
>
> • Ve a la celda N14. % Sobresalientes = Sobresalientes / Num_alumnos • Rellena el resto de la columna utilizando la función autocompletar. • Pon formato Porcentaje con 2 decimales para la columna.
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Gráficos Vamos a representar los porcentajes del detalle de calificaciones mediante un gráfico circular. • Selecciona el rango de datos L14:M18. • Crea un gráfico de tipo Círculo.
>
> o Título: DESGLOSE DE RESULTADOS. • Personaliza el gráfico con color de fondo. Cambia el color y fondo del título. • Haz doble clic sobre la superficie del gráfico. Haz clic sobre el círculo. Con el botón derecho del ratón elige la opción Insertar etiquetas de datos.
>
> • Haz clic sobre el círculo. Con el botón derecho del ratón elige la opción Formato de etiquetas de datos. Desmarca la opción "Mostrar valores como números". Marca la opción "Mostrar valores como porcentaje".
>
> • Por ejemplo
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Módulo 4 . Práctica 3: Funciones booleanas
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 5. Función Y
>
> Vamos a finalizar utilizando la función Y para determinar la idoneidad de las calificaciones obtenidas Ejercicio 5 Objetivos Vamos a determinar si hemos cumplido los objetivos propuestos. El profesor de informática ha establecido que si el número de aprobados es mayor del 50% y la suma de sobresalientes y notables es mayor o igual al 40%, entonces se han cumplido las expectativas y los resultados son excelentes. En caso contrario, los resultados serán aceptables.
>
> • Ve a la celda L2. Utiliza la función SI y la función Y. • Usa la función Y para determinar las condiciones de aprobados > 50% y sobresalientes+notables >= 40% • Usa la función SI. Si se cumple la condición anterior, entonces se mostrará el texto "OBJETIVO CONSEGUIDO". En caso contrario, se mostrará el texto "RESULTADOS ACEPTABLES".
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.8 — M4-Pràctica 4: Pràctica PAU**
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos • Utilizar funciones booleanas, funciones de búsqueda y funciones estadísticas. • Uso del formato condicional. En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> Los alumnos del IES San Aprobado Mártir se han presentado a las pruebas de selectividad (reválida). Se quiere calcular las estadísticas correspondientes para ver los resultados obtenidos. Descargar la hoja • Descarga de la carpeta RECURSOS, la hoja de calculo 04pau.ods, y copia el contenido de la hoja, en una nueva hoja que crearás en el documento de trabajo Modulo4.ods. Llama a la nueva hoja, M4P4-PAU Introducción de datos • Puede utilizarse los efectos y colores que se desee.
>
> • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un cuadro con el texto “Pruebas de Acceso a la Universidad”. • Descarga de la carpeta RECURSOS la imagen del gráfico circulo (04Imagen). • Inserta la imagen descargada. • Pon los textos en vertical con la opción Formato de celdas → Alineación.
>
> • Por ejemplo
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Media exámenes Vamos a calcular la nota media de cada una de las partes del selectivo. • Media parte 1. Ve a la celda F3. La nota será la media aritmética (función PROMEDIO) entre las 4 primeras asignaturas de Valenciano, Castellano, Inglés e Historia. • Rellena el resto de la columna utilizando la función autocompletar.
>
> • Media parte 2. Ve a la celda K3. La nota se calcula teniendo en cuenta los siguientes porcentajes: 30% para matemáticas, 30% para física, 20% para química y 20% para dibujo. Media parte 2 = 0,3*Matemáticas+ 0,3*Física + 0,2*Química + 0,2*Dibujo • Rellena el resto de la columna utilizando la función autocompletar.
>
> • Media PAU. Ve a la celda L3. La nota será la media aritmética (función PROMEDIO) entre la parte 1 y la parte 2. • Rellena el resto de la columna utilizando la función autocompletar. • Comprueba los resultados
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Totales Vamos a calcular la nota media de cada una de las partes del selectivo. • Media. Ve a la celda B22. La nota será la media aritmética (función PROMEDIO) de todos los alumnos. • Rellena el resto de la fila utilizando la función autocompletar. • Suspensos. Ve a la celda B23. Cuenta todos los suspensos de los alumnos cuya nota sea menor que 5. Utiliza la función CONTAR.SI.
>
> • Rellena el resto de la fila utilizando la función autocompletar. • Comprueba los resultados
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Nota final numérica La nota final se obtiene del siguiente modo
>
> - Si la nota de la prueba es mayor o igual que 4, se hace la media ponderada entre ésta y la
>
> nota del expediente, teniendo en cuenta los porcentajes: 0,4 * Nota de la prueba + 0,6 * Nota del expediente (un 40% de la prueba + un 60% del expediente).
>
> ### 2. Si la nota de la prueba es inferior a 4, se considera que el alumno ha suspendido y
>
> escribiremos un guión "-". • Ve a la celda N3. A continuación, utilizaremos la función SI teniendo en cuenta cómo se calcula la nota final. Si la nota de la prueba es menor que 4, escribimos un guión "-" y, en caso contrario, efectuamos la media ponderada. • Pon formato Cantidad para la nota.
>
> • Rellena el resto de la columna utilizando la función autocompletar. • Comprueba los resultados
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Nota final alfanumérica Ahora vamos a poner la nota correspondiente pero en texto. Para ello vamos a crear una tabla de conversión de número a texto. • Inserta una nueva hoja. Renombra la hoja como M4P4-Calificaciones. • Puede utilizarse los efectos y colores que se desee.
>
> • Introduce los datos en la hoja tal y como se muestran a continuación. • Por ejemplo
>
> • Ve a la hoja que ya tienes creada M4P4-PAU. • Ve a la celda O3. Como la fórmula es un poco compleja, iremos por partes. Primero utiliza la función de búsqueda BUSCARV , teniendo en cuenta poner referencias absolutas en el rango de búsqueda. Como dato a devolver, elige la columna 3. A continuación debes usar la función condicional SI. En este caso, si la nota es un guión "-", devolvemos el texto "Insuficiente". En caso contrario, devolvemos la función BUSCARV que hemos utilizado anteriormente. Para el primer alumno tenemos
>
> =SI(N3="-";"Insuficiente";BUSCARV(N3;M4P4-Calificaciones.$B$3:$D$7;3))
>
> Función BUSCARV: en el campo "ordenación" usamos el valor por defecto. Si la función BUSCARV no encuentra el valor a buscar, devolverá el mayor valor que sea menor o igual al valor buscado, es decir, el inmediatamente anterior.
>
> • Rellena el resto de la columna utilizando la función autocompletar. • Comprueba los resultados
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Calificaciones Vamos a determinar si un alumno ha aprobado la selectividad o no. La calificación final se obtendrá de la forma siguiente: si en la celda correspondiente a la nota final (columna N) hay un guión "-" o la nota final es inferior a 5, escribiremos "NO APTO"; en caso contrario escribiremos "APTO".
>
> • Ve a la celda P3. Vamos por partes, ya que necesitamos SI condicional y una función lógica O para realizar las comprobaciones: SI(O(condición 1;condición 2 );acción 1;acción 2). Para comprobar si la nota final es un guión "-" o inferior a 5, usaremos la función O mediante el asistente de funciones. De este modo, para el primer alumno tendremos la fórmula: =O(N3="- ";N3<5) Lógicamente, el resultado será FALSO, ya que ambas condiciones son falsas; es decir, tiene nota final y es superior a 5.
>
> • A continuación, utilizaremos la función SI teniendo en cuenta el resultado anterior. Si la función O devuelve VERDADERO (el alumno ha suspendido), entonces devolveremos el valor "NO APTO". Si la función O es FALSO, devolveremos el valor "APTO". Por ejemplo, para el primer alumno tendremos
>
> =SI(O(N3="-";N3<5);"NO APTO";"APTO") → si VERDADERO, devuelve "NO APTO". Si FALSO, devuelve "APTO" • Rellena el resto de la columna utilizando la función autocompletar. • Comprueba los resultados
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Formato condicional • Crea un nuevo estilo de nombre "No_apto" en el menú Formato → Estilos y formato. Define la letra en color rojo negrita. • Crea un formato condicional para la columna calificación. Añade la condición para que si la nota es NO APTO, se visualice el texto con el nuevo estilo (en color rojo negrita).
>
> • Comprueba los resultados
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Estadísticas • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Por ejemplo
>
> Vamos a obtener el número de sobresalientes, notables, bienes, suficientes e insuficientes de las notas del boletín. En primer lugar, vamos a definir un nombre para el rango de datos de las notas de las PAU. • Selecciona el rango O3:O20. Ve al menú Insertar → Nombres → Definir. En el campo Nombre escribe el texto "Notas". Haz clic en Añadir.
>
> Ahora usaremos el nombre definido en las fórmulas siguientes. • Calcula el total de insuficientes. Ve a la celda O27. Utiliza la función CONTAR.SI. Tenemos que contar las notas que sean "Insuficiente", pertenecientes al intervalo de "Notas". • Repite el mismo proceso pero para suficiente, bien, notable y sobresaliente.
>
> • Calcula el total de notas o, lo que es lo mismo, de alumnos. Total = Insuficientes + Suficientes + Bienes + Notables + Sobresalientes. • Calcula los porcentajes. Ve a la celda P27. Porcentaje = Insuficientes / Total → pon referencias absolutas para el total • Rellena el resto de la columna utilizando la función autocompletar.
>
> • Pon formato Porcentaje con 2 decimales para la columna. • Calcula el porcentaje total como la suma de los distintos porcentajes de las notas. • Comprueba los resultados
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> Gráfico. Circular Vamos a representar los porcentajes del detalle de calificaciones mediante un gráfico circular. • Selecciona el rango de datos N27:O31. • Crea un gráfico de tipo Círculo, vista 3D.
>
> o Título: DETALLE CALIFICACIONES. • Personaliza el gráfico con color de fondo. Cambia el color y fondo del título. • Haz doble clic sobre la superficie del gráfico. Haz clic sobre el círculo. Con el botón derecho del ratón elige la opción Insertar etiquetas de datos.
>
> • Haz clic sobre el círculo. Con el botón derecho del ratón elige la opción Formato de etiquetas de datos. Desmarca la opción "Mostrar valores como números". Marca la opción "Mostrar valores como porcentaje". • Haz clic en el botón Formato de porcentaje. Desmarca la casilla "Formato de origen". Pon formato con 2 decimales.
>
> • Por ejemplo
>
> Módulo 4 . Práctica 4: HOJA PAU
>
> Fuente: www.tuinstitutoonline.com
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.9 — Pràctica NOTES**
> Práctica NOTAS
>
> PRáCTICA NOTAS 1
>
> 1.- Se desea realizar una hoja de cálculo que permita conocer las notas de junio de los alumnos del curso. Nom- bra una nueva hoja con el nombre NOTAS FINALES-1
>
> 2.- Será necesario introducir las notas de las distintas partes del examen final, sabiendo que hay tres preguntas de teoría, y, además, dos ejercicios prácticos de Excel y Access.
>
> IMPORTANTE: Un alumno se presenta a todas las pruebas, y no a la teoría si y a la práctica no.
>
> A) En el caso que se presente a TODAS las pruebas
>
> 3.- En la columna G, nota TEORIA, deberá aparecer el 40% de la media de las tres notas de teoría, indepen- dientemente de la nota media resultante(columnas B, C y D). En la columna H, nota PRACTICA, deberá aparecer el 60% de la media de las notas prácticas de Excel y Access, independientemente de la nota media resultante (columnas E y H)
>
> 4.- Para calcular la nota de JUNIO haremos una media ponderada de ambas notas, sabiendo que la teoría vale un 40% de la nota y la práctica el 60% restante (punto 3). Así la nota de JUNIO la calcularemos sumando las co- lumnas G y H (teoría un 40% y práctica un 60%), pero siguiendo una serie de restricciones
>
> - Para calcular la nota de Junio será necesario que la media de teoría y la media de práctica sean, al me
>
> nos, un 3 (OJO!!! Nota media y no el % asignado en las columnas G y H).
>
> - Si alguna de las medias (teoría y/o práctica) es inferior a 3, en la celda de la nota de Junio, deberá apa
>
> recer el texto “MEDIA INFERIOR A 3”
>
> 5- Para calcular la columna APROBADO (columna J), se considera que el alumno estará aprobado si se obtiene una nota final de Junio de al menos un 5. Por lo tanto en esta celda podrán aparecer 2 posibles valores
>
> - SI: si el alumno está aprobado (nota Junio >= 5)
>
> - NO: si el alumno tiene una nota de Junio inferior a 5 (también entrarán aquí los alumnos a los que no se
>
> les ha podido calcular la nota de Junio por tener una media inferior a 3 en alguna de las dos partes)
>
> Práctica NOTAS
>
> B) En el caso que NO se presente a las pruebas (no tiene nota en ninguna prueba)
>
> En caso de que el alumno no se haya presentado a las pruebas, aparecerá las notas de las preguntas de teoría, de los ejercicios prácticos , columna Teoria, columna Práctica, columna nota de Junio, y columna Apro- bado, en blanco.
>
> 6.- A continuación, deberemos conocer cuántos alumnos se han presentado, y el nº de aprobados y suspensos.
>
> - El número de presentados serán aquellos que tengan nota en Junio, independientemente que hayan apro
>
> bado ó no.
>
> - El número de aprobados serán aquellos que al menos en la nota de Junio tengan un 5
> - El número de suspensos serán aquellos que tengan en la nota de Junio un valor inferior a 5, o aparezca
>
> en la celda de Junio el texto “MEDIA INFERIOR A 3”
>
> 7.- El diseño de la hoja de cálculo Alumnos que seguiremos para resolver el caso se muestra en la tabla siguien- te
>
> E
>
> Práctica NOTAS
>
> Ejemplo 1 de resultados: todos los alumnos se presentan al examen
>
> Ejemplo 2 de resultados: algún alumno no se presenta (se tiene en cuenta, que cuando un alumno no se presenta a una parte, no se presenta a ninguna, por eso todas las notas le aparecen en blanco)
>
> Práctica NOTAS
>
> PRACTICA NOTAS 2
>
> En esta segunda parte, podremos tener notas en blanco, en cualquier nota de teoría, y en cualquier nota de práctica. Copia la hoja anterior, en una nueva hoja y llámala NOTAS FINALES-2 Procederemos de la si- guiente manera
>
> A) En el caso que se presente a TODAS las pruebas
>
> Procedemos como la práctica anterior (se calcula igual)
>
> B) En el caso que NO se prensente a NINGUNA de las pruebas
>
> En caso de que el alumno no se haya presentado a las pruebas, aparecerá las notas de las preguntas de teoría, de los ejercicios prácticos en blanco (no se ha presentado, pero las columnas Teoria, columna Práctica, columna nota de Junio, y columna Aprobado, aparecerá el texto NP.
>
> C) En el caso que se presente como mínimo a una prueba
>
> En caso que exista alguna nota en blanco (como mínimo se ha presentado a una nota), en la columna de la me- dia correspondiente (columna TEORIA y/o PRACTICA), aparecerá el valor 0 (por ejemplo, si aparece T3 en blanco, pero si hay valor en T1 y en T2, en la media de TEORIA aparecerá el valor 0; si Excel aparece en blanco, pero tiene nota en Access, en media de PRACTICA, aparecerá 0). Y por lo tanto, en la columna de JUNIO, apa- recerá el texto MEDIA INFERIOR A TRES.
>
> Se considera que el alumno estará aprobado (columna J, APROBADO) si se obtiene una nota final de Junio de al menos un 5. Se considera que estará suspendido, si la nota es inferior a 3, ó tiene en Junio MEDIA INFERIOR A TRES. En este caso, en la columna Aprobado aparecerá el texto SI ó NO.
>
> El número de presentados serán aquellos que tengan nota en Junio diferente a NP
>
> El número de aprobados serán aquellos que al menos en la nota de Junio tengan un 5
>
> El número de suspensos serán aquellos que tengan en la nota de Junio un valor inferior a 5, o aparezca en la celda de Junio el texto “MEDIA INFERIOR A 3”
>
> Práctica NOTAS
>
> Ejemplo 3 de resultados. En este ejemplo puedes ver todos los posibles casos que se pueden dar.
>
> Práctica NOTAS
>
> PRACTICA NOTAS 3
>
> Copia la hoja anterior, en una nueva hoja y llámala NOTAS FINALES-3. Se procede exactamente co- mo la parte anterior, pero en este caso, indicaremos en la columna de JUNIO, qué nota media es inferior a 3, existiendo tres posibles mensajes de error
>
> MEDIA TEORIA INFERIOR A TRES
>
> MEDIA PRACTICA INFERIOR A TRES
>
> LAS DOS MEDIAS INFERIOR A TRES
>
> (En cualquier de estos tres casos, el alumno se considerará suspendido)
>
> Se considera que el alumno estará aprobado (columna J, APROBADO) si se obtiene una nota final de Junio de al menos un 5. Se considera que estará suspendido, si la nota es inferior a 3, ó tiene en Junio MEDIA TEORIA IN- FERIOR A TRES, MEDIA PRACTICA INFERIOR A TRES, LAS DOS MEDIAS INFERIOR A TRES. Si el alumno no se ha presentado, aparecera el valor NP.
>
> El número de presentados serán aquellos que tengan nota en Junio diferente a NP
>
> El número de aprobados serán aquellos que al menos en la nota de Junio tengan un 5
>
> El número de suspensos serán aquellos que tengan en la nota de Junio un valor inferior a 5, o aparezca en la cel- da de Junio el texto MEDIA TEORIA INFERIOR A TRES, MEDIA PRACTICA INFERIOR A TRES, LAS DOS MEDIAS INFERIOR A TRES
>
> Práctica NOTAS
>
> Ejemplo 4 de resultados

> **✍️ 📋 Exercici / Qüestionari 9.10 — Exercici notes SOLUCIO**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 9.11 — M4-Pràctica 5: Funció PAGO**
> Módulo 4 . Práctica 5: Funcion PAGO
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos
>
> • Utilizar funciones financieras. • Comprender el concepto de préstamo bancario.
>
> Contenidos
>
> ### 1. Función PAGO
>
> Calc dispone de multitud de funciones financieras. Una de las más comunes y utilizadas es la función PAGO, que sirve para calcular los pagos regulares (anualidades) de una inversión con un tipo de interés constante. Sintaxis: PAGO (Tasa; NPer; Pago; VA; VF; Tipo) • Tasa. Define el tipo de interés periódico.
>
> • NPer. Es el número de períodos en los cuales la anualidad es pagada. • VA. Es el valor actual (valor en efectivo) en una secuencia de pagos. • VF (opcional). Define el valor futuro, una vez finalizados los períodos de pago. • Tipo. Es la fecha de vencimiento de los pagos periódicos. Cuando el Tipo es 1 indica que el pago es al principio del período, y cuando Tipo es 0 indica que el pago vence al final de cada período.
>
> En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> Después de evaluar diferentes alternativas, se ha decidido la adquisición de un nuevo portátil cuyo valor es de 1.399 €. Como no disponemos de tal cantidad en efectivo, hemos optado por pagar a plazos el ordenador con la propia financiera de la tienda.
>
> Módulo 4 . Práctica 5: Funcion PAGO
>
> Fuente: www.tuinstitutoonline.com
>
> Las condiciones que nos ofrecen son las siguientes: • Capital prestado: 1399 € • Interés anual (T.A.E.): 8 % • Periodo: 1 año (12 meses) • Comienzo: enero 2015 • Fin: diciembre 2015 Crear nueva hoja • Crea una nueva hoja de cálculo y llamala M4P5-Préstamo. Introducción de datos • Puede utilizarse los efectos y colores que se desee.
>
> • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea una autoforma con el texto “Sistemas informáticos Santa Tecla”. • Descarga de la carpeta RECURSOS la imagen del portátil (05Imagen). • Inserta la imagen descargada. • Pon formato Moneda con 2 decimales para la casilla de capital, cuota mensual y total a pagar.
>
> • Pon formato Porcentaje con 2 decimales para la casilla de interés (TAE). • Por ejemplo
>
> Módulo 4 . Práctica 5: Funcion PAGO
>
> Fuente: www.tuinstitutoonline.com
>
> Definir nombres Vamos a definir nombres para clarificar las fórmulas. • Ve a la celda H7. Define el nombre "Capital". • Ve a la celda H8. Define el nombre "Interes". • Ve a la celda H9. Define el nombre "Meses". • Ve a la celda H10. Define el nombre "Cuota_mensual". Cuota mensual • Calcula la cuota mensual mediante la función PAGO.
>
> o Tasa. La financiera nos ofrece un interés anual T.A.E. del 8%. Eso significa que para obtener el interés mensual debemos dividir el valor anual entre 12 meses. → Tasa = Interes/12 o Nper. El préstamo tenemos que pagarlo en un año, es decir, 12 meses. → NPER = Meses o VA. El capital prestado y que debemos pagar es de 1.399 € → VA = -Capital Ponemos el capital prestado con signo negativo para que la función PAGO nos devuelva una cuota mensual positiva. Si no ponemos el signo negativo, al resultado deberíamos aplicarle la función valor absoluto ABS, para poner el resultado en positivo.
>
> Módulo 4 . Práctica 5: Funcion PAGO
>
> Fuente: www.tuinstitutoonline.com
>
> Periodos de pago • Ve a la celda A5. Escribe el texto "01/01/2015". • Ve a la celda A6. Escribe el texto "01/02/2015". • Pon formato Fecha con código de formato MM/AA (tipo 12/99), para que se muestre sólo el mes y el año. • Selecciona las casillas A5:A6. • Rellena el resto de la columna utilizando la función autocompletar.
>
> Plan de amortización Vamos a calcular el plan de amortización del préstamo, es decir, vamos a detallar lo que vamos a pagar cada mes y en qué conceptos. • Calcula la columna de intereses a pagar: Intereses = Saldo pendiente mes anterior * (Interés/12) Por ejemplo, para la celda B5 tenemos = E4*(Interes/12) • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente.
>
> • Calcula la columna de amortización del capital: Amortización = Cuota mensual – Intereses Por ejemplo, para la celda C5 tenemos = Cuota_mensual – B5 • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente.
>
> • Calcula la columna de cuota mes: Cuota mes = Intereses + Amortización • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente. • Calcula la columna de saldo pendiente del préstamo: Saldo pendiente = Saldo pendiente mes anterior – Amortización Por ejemplo, para la celda E5 tenemos = E4 – C5 • Rellena el resto de la columna utilizando la función autocompletar. Ahora se ve todo correctamente.
>
> Módulo 4 . Práctica 5: Funcion PAGO
>
> Fuente: www.tuinstitutoonline.com
>
> • Comprueba los resultados
>
> Totales • Calcula los totales para las columnas de interés, amortización y cuota mes. Utiliza la función Autosuma. • Pon formato Moneda con 2 decimales para los totales.
>
> Módulo 4 . Práctica 5: Funcion PAGO
>
> Fuente: www.tuinstitutoonline.com
>
> Total a pagar • Calcula el total a pagar. Se puede obtener de 2 maneras diferentes: o Método 1: Total a pagar = Cuota_mensual * Meses o Método 2: Total a pagar = Total interés + Capital
>
> Si nos fijamos, podemos comprobar que: • Hemos pedido un préstamo de 1.399 € • Hemos pagado unos intereses de 61,36 € (que es lo que gana el banco) • Por tanto, en total nos toca devolver 1.460,36 € • La cuota mensual es constante, es decir, siempre es la misma. Sin embargo, cada mes que pasa pagamos más capital y menos intereses
>
> Módulo 4 . Práctica 5: Funcion PAGO
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 2. Comisión de apertura
>
> Hasta el momento hemos supuesto que el banco no nos cobra comisión de apertura, pero la realidad es que se suele cobrar, normalmente entre un 0,5% y un 1% del capital prestado.
>
> Ejercicio 2 Comisión de apertura Vamos a calcular el plan de amortización del préstamo suponiendo una comisión de apertura del 1%. • Vamos a copiar la hoja en la que hemos trabajado el ejercicico 1. Situate en la pestaña M4P4-Préstamo, haz clic con el botón derecho del ratón y elige Mover/copiar hoja. Elige la opción "Copiar" y escribe como nombre nuevo M4P4-Préstamo_com. Pulsa la tecla Intro.
>
> • Introduce los datos de la comisión de apertura tal y como se muestran a continuación. • Pon formato Porcentaje con 2 decimales para la comisión de apertura.
>
> • Calcula el total de comisión de apertura. Total = Com. Apertura * Capital
>
> • Define el nombre "Comision" para la celda del total de comisión. • Modifica la fórmula del total a pagar para añadir la comisión: Total a pagar = Cuota_mensual * Meses + Comision • En la primera fila del préstamo, la cuota del mes será la comisión. • Comprueba los resultados finales
>
> Módulo 4 . Práctica 5: Funcion PAGO
>
> Fuente: www.tuinstitutoonline.com
>
> Gráfico. Barras Vamos a representar los importes de intereses y amortización de capital mediante un gráfico de barras. • Selecciona el rango de datos A3:C16. • Crea un gráfico de tipo Barra.
>
> o Título: PLAN DE AMORTIZACIÓN o Eje X: Meses o Eje Y: Cuota mensual • Personaliza el gráfico con color de fondo. Cambia el color y fondo del título. • Por ejemplo
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.12 — M4-Pràctica 6: Pràctica prèstec**
> Módulo 4 . Práctica 6: HOJA PRESTAMOS
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos
>
> • Utilizar funciones financieras. • Conocer y utilizar la opción de fijar paneles.
>
> Contenidos
>
> ### 1. Funciones financieras
>
> Vamos a repasar los conceptos vistos anteriormente, pero con un préstamo de mayor cuantía monetaria y de mayor duración. En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> Tras examinar distintas alternativas, se ha decidido la adquisición de un nuevo vehículo cuyo valor es de 15.000 €. Como no disponemos de tal cantidad en efectivo, se ha optado por pedir un préstamo personal con el concesionario Quatre Rodes S.L. Las condiciones que nos ofrecen son las siguientes
>
> • Capital prestado: 15.000 € • Interés anual (T.A.E.): 11 % • Comisión apertura: 1 % • Periodo: 4 años (48 meses) • Comienzo: enero 2015 • Fin: diciembre 2018 Crear nueva hoja • Crea una nueva hoja de cálculo y llamala M4P6-Concesionario.
>
> Módulo 4 . Práctica 6: HOJA PRESTAMOS
>
> Fuente: www.tuinstitutoonline.com
>
> Introducción de datos • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea una autoforma con el texto “Concesionario Quatre Rodes”. • Descarga de la carpeta RECUROS la imagen del coche (06Imagen).
>
> • Inserta la imagen descargada. • Pon formato Moneda con 2 decimales para la casilla de capital. • Pon formato Porcentaje sin decimales para la casilla de interés (TAE). • Pon formato Cantidad con 2 decimales para la columna de intereses, amortización, cuota mes y saldo pendiente.
>
> • Por ejemplo
>
> Definir nombres Vamos a definir nombres para clarificar las fórmulas. • Ve a la celda H7. Define el nombre "Capital". • Ve a la celda H8. Define el nombre "Interes". • Ve a la celda H9. Define el nombre "Meses". • Ve a la celda H10. Define el nombre "Cuota_mensual". • Ve a la celda H11. Define el nombre "Comision".
>
> Módulo 4 . Práctica 6: HOJA PRESTAMOS
>
> Fuente: www.tuinstitutoonline.com
>
> Cuota mensual • Calcula la cuota mensual mediante la función PAGO. o Tasa. La financiera nos ofrece un interés anual T.A.E. del 11%. Eso significa que para obtener el interés mensual debemos dividir el valor anual entre 12 meses. → Tasa = Interes/12 o Nper. El préstamo tenemos que pagarlo en 4 años, es decir, 48 meses. → NPER = Meses o VA. El capital prestado y que debemos pagar es de 15.000 € → VA = -Capital
>
> Ponemos el capital prestado con signo negativo para que la función PAGO nos devuelva una cuota mensual positiva. Si no ponemos el signo negativo, al resultado deberíamos aplicarle la función valor absoluto ABS, para poner el resultado en positivo.
>
> Comisión de apertura • Calcula el importe de la comisión de apertura. Com. Apertura = Porcentaje de comisión * Capital • En la primera fila del préstamo, la cuota del mes será la comisión. • Comprueba los resultados
>
> Periodos de pago • Ve a la celda A5. Escribe el texto "01/01/2015". • Ve a la celda A6. Escribe el texto "01/02/2015". • Pon formato Fecha con código de formato MM/AA (tipo 12/99), para que se muestre sólo el mes y el año. • Selecciona las casillas A5:A6. • Rellena el resto de la columna utilizando la función autocompletar.
>
> Módulo 4 . Práctica 6: HOJA PRESTAMOS
>
> Fuente: www.tuinstitutoonline.com
>
> Plan de amortización Vamos a calcular el plan de amortización del préstamo, es decir, vamos a detallar lo que vamos a pagar cada mes y en qué conceptos. • Calcula la columna de intereses a pagar: Intereses = Saldo pendiente mes anterior * (Interés/12) Por ejemplo, para la celda B5 tenemos = E4*(Interes/12) • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente.
>
> • Calcula la columna de amortización del capital: Amortización = Cuota mensual – Intereses Por ejemplo, para la celda C5 tenemos = Cuota_mensual – B5 • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente.
>
> • Calcula la columna de cuota mes: Cuota mes = Intereses + Amortización • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente. • Calcula la columna de saldo pendiente del préstamo: Saldo pendiente = Saldo pendiente mes anterior – Amortización Por ejemplo, para la celda E5 tenemos = E4 – C5 • Rellena el resto de la columna utilizando la función autocompletar. Ahora se ve todo correctamente.
>
> • Comprueba los resultados
>
> Módulo 4 . Práctica 6: HOJA PRESTAMOS
>
> Fuente: www.tuinstitutoonline.com
>
> Totales • Calcula los totales para las columnas de interés, amortización y cuota mes. Utiliza la función Autosuma. • Pon formato Moneda con 2 decimales para los totales.
>
> Total a pagar • Calcula el total a pagar. Se puede obtener de 2 maneras diferentes: o Método 1: Total a pagar = Cuota_mensual * Meses + Comision o Método 2: Total a pagar = Total interés + Capital + Comision
>
> Módulo 4 . Práctica 6: HOJA PRESTAMOS
>
> Fuente: www.tuinstitutoonline.com
>
> Si nos fijamos, podemos comprobar que: • Hemos pedido un préstamo de 15.000 € • Hemos pagado unos intereses de 3.608,78 € (que es lo que gana el banco) • Por tanto, en total nos toca devolver 18.758,78 € (que incluye el importe de la comisión de apertura) • La cuota mensual es constante, es decir, siempre es la misma. Sin embargo, cada mes que pasa pagamos más capital y menos intereses
>
> Gráfico. Columnas Vamos a representar los importes de intereses y amortización de capital mediante un gráfico de columnas. • Selecciona el rango de datos A3:C52. • Crea un gráfico de Columna tipo "En pilas". o Título: AMORTIZACIÓN PRÉSTAMO o Eje X: Meses o Eje Y: Detalle cuota • Personaliza el gráfico con color de fondo. Cambia el color y fondo del título.
>
> • Por ejemplo
>
> Módulo 4 . Práctica 6: HOJA PRESTAMOS
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 2. Fijar paneles
>
> Si nos fijamos, tenemos una hoja de cálculo con muchas filas que ocupa varias páginas, por lo que debemos movernos con las teclas correspondientes y/o barra de desplazamiento. Calc, al igual que otras hojas de cálculo, dispone de una sencilla utilidad para controlar en todo momento qué información estamos viendo. Esta utilidad es lo que se conoce como "fijación o inmovilización de paneles", y consiste en dejar fija una parte de la hoja de cálculo, de tal forma que se desplazan los datos pero siempre tenemos visible los títulos de la cabecera.
>
> Ejercicio 2
>
> Vamos a dejar fijos los títulos de la cabecera. • Ve a la celda A4. Ve al menú Ventana → Inmovilizar. Podemos comprobar que entre la fila 3 y 4 se crea una línea continua que nos indica el límite del área que hemos fijado.
>
> Si nos desplazamos con el teclado o el ratón hacia abajo, comprobamos que los títulos de las 3 primeras filas permanecen visibles en todo momento, desplazándose sólo los datos que se encuentran a partir de la fila 4. • Muévete al final del plan de amortización. Las cabeceras de los títulos de las columnas permanecen visibles y sólo se desplazan los datos del préstamo
>
> Módulo 4 . Práctica 6: HOJA PRESTAMOS
>
> Fuente: www.tuinstitutoonline.com
>
> Para quitar las partes que hemos fijado, iremos a la celda donde hemos inmovilizado el panel y mediante el menú Ventana → Inmovilizar se quita la fijación, dejando nuevamente movibles todos los datos.
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.13 — M4-Pràctica 7: Escenaris, búsqueda d'objectiu i destí**
> Módulo 4 . Práctica 7: Escenarios. Buscar Destino
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos • Utilizar la opción de búsqueda del valor destino. • Aplicar esta búsqueda a casos reales.
>
> Contenidos
>
> ### 1. Buscar objetivo
>
> Calc dispone de una técnica de aproximación llamada "Buscar valor destino", que se emplea para cuando tenemos que buscar un valor de entrada del que depende una fórmula. Básicamente, es como resolver una ecuación con una variable. Para utilizar la búsqueda del objetivo iremos al Menú Herramientas → Búsqueda del valor destino.
>
> Aparece un cuadro de diálogo con 3 campos: • Celda de fórmula: celda que contiene la fórmula. • Valor destino: se escribe el valor deseado. • Celda variable: se pone la celda que contiene el valor que queremos averiguar. En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1 El club de natación "Minaya Swimmers" ha decidido la remodelación del recinto y de la piscina de verano, con un presupuesto de 20.000 €. La dirección del club pretende solicitar un crédito por dicha cantidad para sufragar las obras de remodelación. Las condiciones que nos ofrece el banco son las siguientes
>
> • Capital prestado: 20.000 € • Interés anual (T.A.E.): 12 % • Periodo: 5 años (60 meses) Crear nueva hoja • Crea una nueva hoja de cálculo y llamala M4P7-Piscina.
>
> Módulo 4 . Práctica 7: Escenarios. Buscar Destino
>
> Fuente: www.tuinstitutoonline.com
>
> Introducción de datos • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rótulo artístico con el texto “Club Minaya Swimmers”. • Descarga de la carpeta RECURSOS la imagen de la piscina (07Imagen).
>
> • Inserta la imagen descargada. Pon borde de línea. • Pon formato Moneda con 2 decimales para la casilla de capital, la cuota mensual y el total a pagar. • Pon formato Porcentaje sin decimales para la casilla de interés (TAE). • Por ejemplo
>
> Cuota mensual • Calcula la cuota mensual mediante la función PAGO. o Tasa. La entidad bancaria nos ofrece un interés anual T.A.E. del 12%. Eso significa que para obtener el interés mensual debemos dividir el valor anual entre 12 meses. → Tasa = Interés/12 o Nper. El préstamo tenemos que pagarlo en 5 años, es decir, 60 meses. → NPER = Años*12 o VA. El capital prestado y que debemos pagar es de 20.000 € → VA = -Capital • Calcula el total a pagar. Total a pagar = Cuota mensual * Años * 12 • Comprueba los resultados
>
> Módulo 4 . Práctica 7: Escenarios. Buscar Destino
>
> Fuente: www.tuinstitutoonline.com
>
> Si nos fijamos, podemos comprobar que: • Pedimos un préstamo de 20.000 € • Pagaríamos unos intereses de 6.693,34 € (que es lo que gana el banco) • Por tanto, en total nos tocaría devolver 26.693,34 Buscar valor destino Tras calcular la simulación del préstamo, la junta directiva considera que la letra mensual a pagar es un poco elevada para las posibilidades del club de natación. Si se devuelve en 5 años, deberá abonarse una cuota mensual de 444,89 €. Por ello, la directiva quiere saber en cuántos años podría devolverse el crédito si sólo se pagara una cantidad de 250 € euros cada mes.
>
> • Ve a la celda B10. Introduce la cantidad de 250 € que se quiere pagar. • Ve a la celda B12. Calcula la diferencia entre la cuota mensual y el presupuesto (incluye la función de valor absoluto para asegurar que la cantidad es positiva). = ABS(Cuota mensual- presupuesto) • Pon formato Moneda para el presupuesto y la diferencia.
>
> Módulo 4 . Práctica 7: Escenarios. Buscar Destino
>
> Fuente: www.tuinstitutoonline.com
>
> • Ve a la celda B7. Ve al menú Herramientas → Búsqueda del valor destino. En el cuadro de diálogo: o Celda de fórmula: debe aparecer la celda seleccionada previamente y que contiene la fórmula (B7). o Valor destino: escribimos el valor que deseamos pagar cada mes (250 €).
>
> o Celda variable: ponemos la celda B5, que es la que contendrá la solución del problema.
>
> • Pulsa Aceptar. • Aparece una ventana informativa con la solución encontrada.
>
> • Pulsa Sí. Observa la solución en la celda B5 (aprox. 13 años y medio). Estos son los años necesarios para devolver el crédito a un 12 % de interés anual y pagando una cuota mensual de 250 €.
>
> Módulo 4 . Práctica 7: Escenarios. Buscar Destino
>
> Fuente: www.tuinstitutoonline.com
>
> Compra corchos. Introducción de datos Aprovechando la funcionalidad de Calc, se pretende buscar otro valor destino. El club dispone de un presupuesto total de 200 € para la compra de corchos de natación a un precio por corcho de 7,99 €. El problema es, ¿qué cantidad de corchos podemos comprar?
>
> • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Pon formato Moneda con 2 decimales para la casilla de precio y total a pagar. Por ejemplo
>
> Módulo 4 . Práctica 7: Escenarios. Buscar Destino
>
> Fuente: www.tuinstitutoonline.com
>
> Compra corchos. Buscar valor destino • Ve a la celda B19. Introduce la fórmula correspondiente al total: Total a pagar = Precio * Cantidad. De momento dará 0, ya que la cantidad por defecto es 0, puesto que es el valor a buscar. • Ve al menú Herramientas → Búsqueda del valor destino. En el cuadro de diálogo
>
> o Celda de fórmula: debe aparecer la celda seleccionada previamente y que contiene la fórmula (B19). o Valor destino: escribimos el valor que tenemos de presupuesto (200 €). o Celda variable: ponemos la celda B17, que es la que contendrá la solución del problema.
>
> • Pulsa Sí. Observa la solución en la celda B17. Con 200 € de presupuesto, podemos comprar 25 corchos de natación, a un precio de 7,99 € cada uno
>
> Contenidos
>
> ### 2. Administrador de escenarios
>
> Los escenarios constituyen una herramienta para contestar a preguntas del tipo "¿qué ocurriría si...?". Básicamente, están formados por un conjunto de celdas y permiten guardar con nombres distintos los cambios de valores hechos en una hoja. De este modo, podemos desplazarnos por los diferentes escenarios y ver qué valores se ven afectados por los cambios.
>
> Ejercicio 2 Como cada año, el club de natación celebra una fiesta de aniversario con gymkanas y diversas competiciones acuáticas, cobrando una pequeña entrada para sufragar los gastos del propio evento y destinar el resto a obras sociales. En años anteriores, se ha estimado el precio de la entrada al evento de forma más o menos artesanal. Sin embargo, la directiva quiere aprovechar
>
> Módulo 4 . Práctica 7: Escenarios. Buscar Destino
>
> Fuente: www.tuinstitutoonline.com
>
> las posibilidades que ofrece Calc para fijar un precio que cumpla 2 criterios: que sea asequible al público y, al mismo tiempo, que deje un margen de beneficios para poder destinar una parte a obras sociales. Introducción de datos • Añade los siguientes datos en la misma hoja M4P7-Piscina.
>
> • Ve a la celda A22. • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Pon formato Moneda con 2 decimales para la casilla de precio coste y precio final. • Pon formato Porcentaje sin decimales para la casilla del margen de beneficio.
>
> Fórmulas • Ve a la celda B26. Introduce la fórmula del precio final: Precio final = Precio coste + (Precio coste * Margen beneficio) • Comprueba los resultados
>
> Crear escenarios personalizados Ahora crearemos tres escenarios llamado Mínimo, Medio y Máximo, que cambiarán el margen de beneficio con los valores 10%, 20% y 30%. • Vamos a seleccionar las celdas que contienen los valores que cambiarán entre escenarios. Selecciona el rango de celdas A23:B26.
>
> • Ve al menú Herramientas → Escenarios. Nombre Escenario: "Mínimo". Comentario: escribe tu nombre. Activa la casilla “Copiar la hoja completa”. • Pulsa Aceptar.
>
> Módulo 4 . Práctica 7: Escenarios. Buscar Destino
>
> Fuente: www.tuinstitutoonline.com
>
> • Se ha creado un hoja nueva llamada "Mínimo", activándose automáticamente el escenario.
>
> • A continuación repetimos el proceso para crear otros dos escenarios llamados "Medio" y "Máximo". Selección y modificación de escenarios • Pulsa sobre el botón Navegador en la barra de herramientas estándar. En el Navegador podemos ver los escenarios definidos y los comentarios insertados al crearlos.
>
> • Pulsa en el icono Escenarios . Haz doble clic sobre el escenario "Mínimo" para aplicarlo a la hoja actual. • Se abre la hoja nueva Mínimo. Ve a la celda B24 y escribe 10%. • Abre el escenario "Medio". Ve a la celda B24 y escribe 20%. • Abre el escenario "Máximo". Ve a la celda B24 y escribe 30%.
>
> • Vuelve a la hoja "Piscina". • Prueba los tres escenarios creados mediante la lista desplegable que se muestra
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.14 — M4-Pràctica 8: Operacions múltiples**
> Módulo 4 . Práctica 8: Operaciones múltiples
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos • Emplear las operaciones múltiples en la hoja de cálculo. • Aplicar estas operaciones para funciones financieras.
>
> Contenidos
>
> ### 1. Operaciones múltiples
>
> La utilidad de Operaciones múltiples proporciona una herramienta de planificación para preguntas hipotéticas del tipo "¿qué ocurriría si...?". Aunque son similares a los escenarios, se diferencian de éstos en que los cambios se reflejan en la misma hoja de cálculo y permiten verificar cómo influyen esos cambios para una o dos variables. Es decir, a partir de una fórmula y un rango de datos, Calc nos mostrará qué cambios se producen en el resultado, teniendo en cuenta una o dos variables. De este modo, podemos comprobar, a simple vista, cómo influye en la hoja el cambio de algún valor.
>
> Para utilizar operaciones múltiples iremos al Menú Datos → Operaciones múltiples. Aparece un cuadro de diálogo con 3 campos: • Fórmulas: celda que contiene la fórmula que se aplicará al intervalo de datos. • Fila / Columna: celda que contiene el dato que va a cambiar. Podemos usar sólo un campo (1 variable) o los dos (2 variables).
>
> En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> La familia de Jacinto y Eulalia, tras unos años de trabajo y esfuerzo, ha conseguido ahorrar para comprarse la casa de sus sueños. Como no disponen de todo el dinero necesario, van a solicitar un préstamo bancario para cubrir la diferencia. Las condiciones que les ofrece el banco "Nikito Nipongo" son las siguientes
>
> • Capital prestado: 80.000 € • Interés anual (T.A.E.): 4,25 % • Periodo: 15 años (180 meses)
>
> Módulo 4 . Práctica 8: Operaciones múltiples
>
> Fuente: www.tuinstitutoonline.com
>
> Crear nueva hoja • Crea una nueva hoja de cálculo y llamala M4P8-Casa. Introducción de datos • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea una figura con el texto “La casa de los sueños”.
>
> • Descarga de la carpeta RECURSOS la imagen de la casa (08Imagen). • Inserta la imagen descargada. Pon borde de línea. • Pon formato Moneda con 2 decimales para la casilla de capital, la cuota mensual y el total a pagar. • Pon formato Porcentaje con 2 decimales para la casilla de interés (TAE).
>
> • Por ejemplo
>
> Cuota mensual • Calcula la cuota mensual mediante la función PAGO. o Tasa. La entidad bancaria nos ofrece un interés anual T.A.E. del 4,25%. Eso significa que para obtener el interés mensual debemos dividir el valor anual entre 12 meses. → Tasa = Interés/12 o Nper. El préstamo tenemos que pagarlo en 15 años, es decir, 180 meses. → NPER = Años*12 o VA. El capital prestado y que debemos pagar es de 80.000 € → VA = -Capital • Calcula el total a pagar. Total a pagar = Cuota mensual * Años * 12 • Comprueba los resultados
>
> Módulo 4 . Práctica 8: Operaciones múltiples
>
> Fuente: www.tuinstitutoonline.com
>
> Tabla de 1 variable Tras calcular la simulación del préstamo, Jacinto y Eulalia quieren considerar distintas posibilidades teniendo en cuenta que el tipo de interés puede oscilar según la situación económica del mercado, o lo que es lo mismo, puede subir o bajar. Para ello, van a calcular qué cuota tendrían que pagar teniendo en cuenta distintos tipos de interés, tanto por encima como por debajo del interés que les ha ofrecido el banco.
>
> • Introduce los datos que se indican a continuación
>
> • Selecciona el rango de celdas A12:B18. • Ve al menú Datos → Operaciones múltiples. En el cuadro de diálogo: o Fórmulas: selecciona la celda que contiene la fórmula que se aplicará al intervalo de datos (cuota mensual, B7). o Columna: selecciona la celda que contiene el dato que va a cambiar (tipo de interés, B4).
>
> Módulo 4 . Práctica 8: Operaciones múltiples
>
> Fuente: www.tuinstitutoonline.com
>
> • Pulsa Aceptar. En la columna vacía, nos han aparecido los pagos mensuales que habría que abonar en el caso de que cambiaran los intereses. • Pon formato Moneda con 2 decimales a la columna de Cuota. • Comprueba los resultados
>
> Módulo 4 . Práctica 8: Operaciones múltiples
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 2. Operaciones múltiples con 2 variables
>
> A continuación vamos a utilizar el mismo supuesto anterior pero usando 2 variables: el tipo de interés y los años.
>
> Ejercicio 2
>
> Analizando la situación, Jacinto y Eulalia contemplan el peor de los supuestos: que el tipo de interés suba excesivamente y la cuota mensual a pagar sea inasumible para su presupuesto. De este modo, quieren contemplar también la variable de los años, ya que en ese caso podrían renegociar el periodo de tiempo con el banco o subrogar el préstamo con otra entidad bancaria.
>
> Tabla de 2 variables Vamos a fijar la primera fila para que siempre esté visible. • Haz clic en la pestaña M4P8-Casa. Con el botón derecho del ratón elige la opción Mover/copiar hoja. Duplica la hoja y renombra la copia como M4P8-Casa2. • Ve a la nueva hoja M4P8-Casa2.
>
> • Modifica la tabla de 1 variable para añadir la variable de los años. Introduce los datos que se muestran a continuación: •
>
> Módulo 4 . Práctica 8: Operaciones múltiples
>
> Fuente: www.tuinstitutoonline.com
>
> • Selecciona el rango de celdas A11:F18. • Ve al menú Datos → Operaciones múltiples. En el cuadro de diálogo: o Fórmulas: selecciona la cuota mensual (celda B7). o Fila: selecciona los años (celda B5), que son los datos variables que hemos puesto en fila. o Columna: selecciona el tipo de interés (celda B4), que son los datos variables que hemos puesto en columna.
>
> • Pulsa Aceptar. • Pon formato Moneda con 2 decimales al rango de datos de las cuotas. • Ahora tenemos las distintas cuotas mensuales teniendo en cuenta tanto los cambios del tipo de interés como los años a pagar. Comprueba los resultados
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.15 — M4-Pràctica 9: Validació i protecció de dades**
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos • Validar datos en la introducción de información. • Proteger celdas que no deben modificarse. Contenidos
>
> ### 1. Validación de datos
>
> La validación de datos permite establecer restricciones a los valores que se pueden introducir en una celda. Por ejemplo, podemos limitar el contenido sólo para valores numéricos, limitar el número máximo de caracteres de texto, limitar a una lista de valores, etc.
>
> Para validar datos, iremos al Menú Datos → Validez. Aparece un cuadro de diálogo con 3 pestañas: • Criterios: especifica las condiciones de los valores nuevos que se insertan en las celdas. o Permitir. Establece la condición de entrada de datos, es decir, qué información está permitida para la celda o conjunto de celdas. Por ejemplo: números enteros, decimales, fecha, hora, etc.
>
> o Datos. Permite restringir la entrada para una lista de valores determinados. Si los datos no están dentro de los valores posibles, no se permite introducir el valor en la celda. • Ayuda sobre la entrada. Sirve para crear una ventana de mensaje de ayuda al usuario, para indicarle qué valores están permitidos en una celda. Al seleccionar la celda, se mostrará el título y el texto de la Ayuda emergente.
>
> • Mensaje de error. Sirve para crear una ventana de mensaje error al usuario y aplicar la acción correspondiente en caso de error. Acciones: o Detener. No se aceptan las entradas incorrectas y se conserva el contenido anterior de las celdas. o Aviso o Información. Permiten ver en pantalla un diálogo en el que podemos aceptar o cancelar la entrada del valor.
>
> #### 1.1. Limitación a valores numéricos
>
> Este criterio de validación limita la entrada de datos a valores numéricos, por lo que no se permite texto. La regla de validez se activa al especificar un valor nuevo. Si en la celda ya se ha insertado un valor incorrecto, o si se inserta un valor con los métodos de arrastrar y soltar o copiar y pegar, la regla de validez no tiene efecto alguno.
>
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods. Ejercicio 1
>
> Vamos a modificar algunas hojas de cálculo de ejercicios anteriores para añadir la funcionalidad de la validación de datos. Libro de trabajo "Electrónica" • Ve a la hoja del ejercicio M4P1-Electronica creado en ejercicios anteriores, y copia sus datos a una nueva hoja llamada M4P9-vpelectronica. Ten cuidado, porque esta hoja utiliza la funcion BUSCARV, y como hace referencia a otra hoja con los datos (M4P1-Productos), al copiarla, te dará error en el resultado de la función BUSCARV. Modifica para que las referencias sean absolutas, y no falle.
>
> Validación de datos. Cantidad Vamos a validar la entrada de datos, de forma que sólo se permitan valores enteros. En caso de no introducir cantidades enteras, mostraremos un mensaje de error e impediremos que se introduzca el número. • Selecciona el rango de celdas E9:E23.
>
> • Ve al menú Datos → Validez. En el cuadro de diálogo: o Criterios. En el campo Permitir, selecciona el valor "Números enteros". Deja marcada la casilla de "Permitir celdas en blanco". En el campo Datos, selecciona "mayor que" y teclea el valor mínimo 0 (no tiene sentido una cantidad 0).
>
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> o Ayuda sobre la entrada. En el campo Título teclea "Cantidad". En el campo Ayuda de entrada escribe "Introducir sólo números enteros".
>
> o Mensaje de error. En el campo Acción selecciona la opción "Detener". En el campo Título teclea "Código". En el campo Mensaje de error escribe "El código de artículo no existe en la hoja de Productos".
>
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> • Ve a la celda E9 y desplázate por el resto de la columna "Cantidad". Ahora se muestra un mensaje de ayuda al usuario
>
> • Ve a la fila 21. Introduce el artículo "B04". En la columna cantidad, escribe 3,4. Ahora se muestra un mensaje de error y no se permite introducir números decimales
>
> • Vuelve a la columna cantidad, pero esta vez escribe 3. Ahora no se muestra el mensaje de error, ya que el valor 3 es entero y está permitido. • Calcula el importe mediante la función Autocompletar. • Comprueba los resultados
>
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> #### 1.2. Limitación a lista de valores
>
> Este criterio de validación limita la entrada de datos válidos a una lista de valores. La lista de valores válidos se corresponde con un rango de datos donde se encuentra la información correspondiente. Cuando se selecciona una de las celdas con esta validación, aparece una lista desplegable. Al hacer clic en la flecha, aparecerá la lista de valores válidos. De esta forma, sólo tenemos que hacer clic en el valor que se desee introducir.
>
> Ejercicio 2
>
> Validación de datos. Código Vamos a validar la entrada de datos, de forma que sólo se permitan los valores contenidos en el catálogo de productos de la tienda. En caso de introducir un código inexistente, mostraremos un mensaje de error e impediremos que se introduzca ese código.
>
> • Selecciona el rango de celdas B9:B23. • Ve al menú Datos → Validez. En el cuadro de diálogo: o Criterios. En el campo Permitir, selecciona el valor "Intervalo de celdas". En el campo Origen, selecciona el rango de celdas que contiene los diferentes artículos en la hoja "Productos".
>
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> • Mensaje de error. En el campo Acción selecciona la opción "Detener". En el campo Título teclea "Código". En el campo Mensaje de error escribe "Sólo se permiten valores enteros".
>
> • Ve a la celda B22 y teclea un código de artículo inexistente. Comprueba que se muestra el mensaje de error y que se impide introducir el valor
>
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 2. Protección de celdas
>
> Las propiedades de protección sirven para prevenir cambios accidentales no deseados. En Calc podemos proteger un libro de trabajo completo y cada una de las hojas que contiene, pudiendo elegir qué celdas en concreto han de estar protegidas contra modificaciones. Además, Calc permite definir niveles adicionales de protección: si las fórmulas pueden ser vistas desde el propio programa, qué celdas serán visibles y cuáles podrán ser impresas.
>
> La protección de celdas sólo será efectiva cuando se proteja toda la hoja. Primero establecemos las celdas que estarán protegidas y después debemos proteger toda la hoja y guardar el documento, para que estas restricciones tengan efecto. Pasos para proteger celdas
>
> - Seleccionar las celdas que se quiere proteger.
> - Ir al Menú Formato → Celda o con el botón derecho del ratón elegir la opción Formato de
>
> celdas. Hacer clic en la pestaña Protección de celda.
>
> ### 3. Seleccionar las opciones de protección que se desean (sólo se aplicarán estas opciones
>
> después de proteger la hoja desde el menú Herramientas). Opciones: o Protegida. Impide que se realicen cambios en el contenido y el formato de una celda. o Ocultar fórmulas. Oculta y protege las fórmulas contra cambios. o Ocultar para la impresión. Oculta las celdas protegidas en el documento impreso.
>
> Las celdas no se ocultan en pantalla.
>
> - Hacer clic en Aceptar.
> - Aplicar las opciones de protección. Para proteger las celdas de cambios, visualización o
>
> impresión según los valores establecidos, ir al menú Herramientas → Proteger documento → Hoja. o Contraseña (Opcional). Escribir una contraseña. Si olvidamos la contraseña, no podremos desactivar la protección. Si únicamente deseamos proteger las celdas de los cambios involuntarios, estableceremos la protección de hojas pero sin contraseña.
>
> - Hacer clic en Aceptar.
>
> La protección de celdas no proporciona protección de seguridad, ya que son 2 cosas distintas. Por ejemplo, las propiedades de protección pueden saltarse exportando la hoja de cálculo a otro formato. Sin embargo, si establecemos una contraseña para nuestro libro de trabajo (fichero), dicho archivo sólo puede ser abierto con esa contraseña. Esto es lo que se conoce como protección de seguridad.
>
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> Ejercicio 3
>
> En la hoja de factura hay información que se obtiene mediante fórmulas. Estos datos no deben modificarse, puesto que sería incoherente que, por ejemplo, tuviéramos una descripción de artículo que no corresponde con su código. De este modo, existirán celdas que deben estar protegidas y otras que son las que necesitamos para introducir la información.
>
> Protección de celdas Vamos a proteger todas las celdas de la factura, excepto la columna del código y la cantidad, puesto que estos datos deben ser introducidos por el vendedor. Por defecto, Calc tiene marcadas todas las celdas como protegidas, así que debemos desmarcar la columna del código y la cantidad.
>
> • Columna código. Selecciona el rango de celdas A9:A23. • Ve al Menú Formato → Celda o con el botón derecho del ratón elige la opción Formato de celdas. Haz clic en la pestaña Protección de celda. • Desmarca la casilla Protegida. • Haz clic en Aceptar. • Repite los mismos pasos pero para la columna de cantidad (rango E9:E23).
>
> Una vez desprotegidas las celdas que pueden ser modificadas por el usuario, vamos a activar las opciones de protección. • Ve al menú Herramientas → Proteger documento → Hoja. • Teclea la contraseña "eureka". En el campo Confirmar, vuelve a teclear la misma contraseña.
>
> • Haz clic en Aceptar.
>
> Recuerda que no debes olvidar la contraseña, puesto que de lo contrario, no podrás desproteger las celdas para realizar modificaciones.
>
> Módulo 4 . Práctica 9: Validacion datos. Proteccion de celdas
>
> Fuente: www.tuinstitutoonline.com
>
> Haz clic en la celda C22. Comprueba que se muestra el mensaje de error que impide modificar el valor de la celda
>
> • Prueba en otras celdas. Comprueba que sólo puedes escribir en la columna del código y la cantidad. • Guarda los cambios.
>
> Ejercicio 4
>
> Ahora vamos a repetir lo visto anteriormente pero en otra hoja de cálculo. Libro de trabajo "Bar Covelero" • Situate en la hoja M4P2-Bar, y copia otra vez su contenido, a una nueva hoja que crearás y que llamarás M4P9-BarCoverlero. Ten en cuenta que esta hoja utiliza la función BUSCARV y hace referencia a los datos de la hoja M4P2-Carta. Por lo tanto, para que no te dé error, haz que las referencias sean absolutas en esta nueva hoja creada.
>
> Validación de datos. Cantidad y código • Cantidad. Valida la entrada de datos, de forma que sólo se permitan valores enteros. En caso de no introducir cantidades enteras, mostraremos un mensaje de error e impediremos que se introduzca el número. • Código. Valida la entrada de datos, de forma que sólo se permitan los valores contenidos en el catálogo de productos del bar. En caso de introducir un código inexistente, mostraremos un mensaje de error e impediremos que se introduzca ese código.
>
> • Comprueba la validación de datos. Protección de celdas Vamos a proteger todas las celdas de la factura, excepto la columna del código y la cantidad, puesto que estos datos deben ser introducidos por el camarero. • Cantidad. Deprotege la columna. • Código. Desprotege la columna.
>
> • Activa la protección de celdas. Ve al menú Herramientas → Proteger documento → Hoja. Deja la contraseña en blanco. • Comprueba la protección de celdas. • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.16 — M4-Pràctica 10: Consolidar (VOLUNTARIA)**
> Módulo 4 . Práctica 10: Consolidar
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos
>
> • Emplear la consolidación de datos con distintas hojas de cálculo.
>
> Contenidos
>
> ### 1. Consolidar
>
> La utilidad Consolidar permite seleccionar bloques de datos de distintos libros, hojas o rangos, y combinar sus valores en un sólo resumen de datos. Mediante esta técnica ahorramos tiempo y es mucho más fácil que cortar datos de diferentes hojas y pegarlos en una sólo.
>
> Para utilizar la consolidación iremos al Menú Datos → Consolidar. Aparece un cuadro de diálogo: • Función: para seleccionar la operación que se hará con la consolidación: suma, promedio, etc. • Intervalos de consolidación: muestra los rangos de celdas que se desea consolidar.
>
> • Intervalos del origen de datos: especifica el área de datos que se desea consolidar. • Copiar los resultados en: muestra la primera celda del área en la que aparecerán los resultados de la consolidación. • Opciones: o Enlazar a los datos de origen: actualiza los datos del área de consolidación de forma automática cuando cambian los datos en cualquiera de las áreas de origen.
>
> o Etiquetas de fila: la primera fila se usará para nombres. o Etiquetas de columna: la primera columna se usará para nombres. En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> El silo de Minaya (Albacete) es el más grande de la provincia y uno de los más grandes de España, con capacidad para 25 millones de kilos de mercancía. Está integrado en lo que se denomina Red Básica de Almacenamiento y, por tanto, se usa como almacén de cereales.
>
> La gestora quiere saber qué tipo de cereales y cantidades se almacenan cada trimestre para llevar un control automático anual. El silo dispone de 4 depósitos principales, cada uno de ellos con sus compartimentos separados para cada tipo de cereal.
>
> Módulo 4 . Práctica 10: Consolidar
>
> Fuente: www.tuinstitutoonline.com
>
> Descargar la hoja • Descarga de la carpeta RECURSOS la hoja de cálculo 10consolidar.ods para el ejercicio, y copia los datos de la hoja, a una nueva hoja de tu documento de trabajo Modulo4.ods, y que llamaras M4P10-consolidacion. Introducción de datos. Trimestres • Puede utilizarse los efectos y colores que se desee.
>
> • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea una nueva hoja para cada trimestre. Renombra las hojas como "M4P10-TRIM1", "M4P10-TRIM2", "M4P10-TRIM3" y "M4P10-TRIM4".
>
> • Copia y pega cada uno de los datos de cada trimestre en su hoja correspondiente. • En cada hoja, crea un cuadro con el texto “PRIMER TRIMESTRE", etc. • Pon formato Cantidad sin decimales y con separador de miles para las cantidades de cereales. Totales. Trimestres • Calcula el total de cada depósito. Total depósito = suma de las cantidades de la columna • Pon formato Cantidad sin decimales y con separador de miles.
>
> • Rellena el resto de la fila utilizando la función autocompletar. • Calcula el total de cada cereal. Total cereal = suma de las cantidades de la fila • Pon formato Cantidad sin decimales y con separador de miles. • Rellena el resto de la columna utilizando la función autocompletar.
>
> • Comprueba los resultados
>
> Módulo 4 . Práctica 10: Consolidar
>
> Fuente: www.tuinstitutoonline.com
>
> Módulo 4 . Práctica 10: Consolidar
>
> Fuente: www.tuinstitutoonline.com
>
> Consolidación de datos Vamos a crear una hoja donde consolidaremos los datos para el total anual, de modo que obtengamos la media aritmética de kilos de cada cereal por depósito. • Crea una nueva hoja para el total anual. Renombra la nueva hoja como M4P10-TOTAL. • Ve a la celda A3. A partir de esta celda vamos a consolidar los datos.
>
> • Ve al menú Datos → Consolidar. Aparece el cuadro de diálogo: • En el campo Función elige Promedio. • Intervalos del origen de datos. Haz clic en el icono de la derecha.
>
> • Ve a la hoja "M4P10-TRIM1". Selecciona el rango de datos A3:E9. Vuelve a hacer clic en el icono de la derecha.
>
> • Haz clic en el botón Añadir. Ahora hemos añadido el área de datos del primer trimestre. • Intervalos del origen de datos. Haz clic en el icono de la derecha.
>
> • Repite el proceso para el resto de hojas del segundo, tercer y cuarto trimestre. • Despliega el cuadro de Opciones. Marca la casilla "Etiquetas de filas" y "Enlazar a los datos de origen". • Por último, pulsa Aceptar.
>
> • Comprueba los resultados en la hoja "M4P10-TOTAL"
>
> Módulo 4 . Práctica 10: Consolidar
>
> Fuente: www.tuinstitutoonline.com
>
> Como podemos ver, a la izquierda de las filas de datos aparecen varios iconos "+". Si pinchamos en cualquiera de ellos, Calc nos muestra el desglose de los datos consolidados. Dichos datos están sincronizados con las distintas hojas de trimestres, de modo que cualquier cambio que realicemos en una hoja, se reflejará en el total anual.
>
> Por ejemplo, tenemos el detalle de trigo
>
> Además, arriba a la izquierda de la primera fila, aparecen dos pequeños botones con los números 1 y 2 . Si hacemos clic en el botón 2, todos los datos se muestran desglosados, mientras que si hacemos clic en el botón 1, se muestran resumidos. Introducción de datos. Media anual A continuación vamos a introducir los datos que faltan y a poner el formato correspondiente en las celdas, para que quede presentable.
>
> • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Descarga de la carpeta RECURSOS la imagen del silo. • Inserta la imagen descargada. Pon borde de línea. • Crea un cuadro con el texto “MEDIA ANUAL".
>
> • Pon formato Cantidad sin decimales y con separador de miles para las cantidades de cereales. • Comprueba los resultados
>
> Módulo 4 . Práctica 10: Consolidar
>
> Fuente: www.tuinstitutoonline.com
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.17 — M4-Pràctica 11: Esquemes**
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos
>
> • Organizar la información. • Crear esquemas automáticos a partir de datos estructurados.
>
> Contenidos
>
> ### 1. Esquemas
>
> Los esquemas se utilizan para hacer agrupaciones de datos. A diferencia de la consolidación de datos, los esquemas se refieren a la misma hoja de cálculo y no realizan ningún cálculo de consolidación. Un esquema representa un resumen preciso y organizado que genera información perfectamente esquematizada. Como ejemplos de esquemas, podemos tener el detalle de ventas por regiones, el índice de un libro, etc.
>
> #### 1.1. Creación de esquemas automáticos
>
> Calc permite la creación manual y automática de esquemas. La mejor opción es crear esquemas automáticos, puesto que es más rápido que realizarlo manualmente. Sin embargo, debemos cumplir unos requisitos previos para ello: • Los datos deben ser los adecuados para crear un esquema, es decir, deben tener una clasificación lógica o jerarquía.
>
> • Una hoja sólo puede contener un esquema. Si queremos disponer de más esquemas sobre la información de la hoja, debemos copiar los datos en una nueva hoja. • Las filas de resumen deben estar en la parte superior o inferior de los datos, sin mezclarse con éstos. Dichas filas deben contener fórmulas o referencias.
>
> • Las columnas de resumen deben estar a la izquierda o derecha de los datos, sin mezclarse con éstos. Dichas columnas deben contener fórmulas o referencias. En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> La empresa "Cebollas Nollores" ha exportado los datos de sus ventas del último año a un fichero de hoja de cálculo. Sin embargo, el formato exportado contiene los datos sin clasificar, por lo que será necesario esquematizar la información y proceder a su tratamiento estadístico, ya que la empresa quiere saber el detalle de ventas a distribuidores.
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Descargar la hoja • Descarga de la carpeta RECURSOS, la hoja 11esquemas.ods, y copia el contenido de la hoja, en tu libro de trabajo Modulo4.ods, en una nueva hoja llamada M4P11-Cebollas. Inserción de filas. Trimestres • Modifica los datos en la hoja tal y como se muestran a continuación.
>
> • Inserta una fila antes de cada trimestre. La fila 1 la utilizaremos después para poner el título principal. El resto nos servirá para calcular los totales por trimestre y realizar la agrupación y el esquema. • Por ejemplo
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Introducción de datos A continuación vamos a introducir los datos que faltan y a poner el formato correspondiente en las celdas, para que la presentación quede profesional. • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación.
>
> • Descarga de la carpeta RECURSOS la imagen del campo de cebollas (11Imagen). • Inserta la imagen descargada. Pon borde de línea. • Crea un cuadro con el texto “Cebollas Nollores". • Pon formato Cantidad sin decimales y con separador de miles para las cantidades de cebollas.
>
> • Por ejemplo
>
> Totales. Trimestres • Calcula el total de cada trimestre. Total trimestre = suma de las cantidades de la columna del trimestre • Pon formato Cantidad sin decimales y con separador de miles. • Rellena el resto de la fila utilizando la función autocompletar. • Comprueba los resultados
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Creación de esquema automático (filas) Vamos a crear un esquema automático con toda la información disponible. Tenemos los datos estructurados y las fórmulas correspondientes. • Selecciona el rango de celdas A2:E33. • Ve al menú Datos → Grupo y esquema → Agrupar. • En el cuadro de diálogo que aparece elige la opción Filas.
>
> • Haz clic en Aceptar.
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Acabamos de agrupar los datos por filas (comprueba que a la izquierda de las filas aparece el icono de agrupación y arriba a la izquierda de la primera fila, los niveles de agrupación)
>
> Ahora debemos ejecutar el segundo paso, que consiste en crear el esquema a partir de esta agrupación.
>
> Calc crea automáticamente un esquema con la selección, sólo si el rango de celdas seleccionado contiene fórmulas o referencias.
>
> • Ve al menú Datos → Grupo y esquema → Esquema automático. • Comprueba los resultados
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Para comprimir y/o expandir una parte del esquema, haremos clic en los iconos - y + de cada nivel. Para comprimir y/o expandir el esquema completo, haremos clic en los botones de niveles 1 y 2. • Haz clic en el botón 1 (primer nivel de agrupación). Comprueba cómo se contraen los datos y se muestra sólo el resumen
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> #### 1.2. Agrupación en columnas
>
> En el ejercicio anterior hemos realizado una agrupación por filas y generado el esquema correspondiente. A continuación, sobre la misma hoja, realizaremos una agrupación adicional por columnas.
>
> Ejercicio 2 Vamos a añadir una nueva columna con los totales por distribuidor para cada trimestre. Después, crearemos otro esquema adicional pero agrupado por columnas. Introducción de datos. Total por distribuidor • Puede utilizarse los efectos y colores que se desee.
>
> • Añade una nueva columna a la derecha de los datos tal y como se muestran a continuación. • Por ejemplo
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Totales. Distribuidores • Calcula el total de cada distribuidor. Total distribuidor = suma de las cantidades de la fila del distribuidor • Pon formato Cantidad sin decimales y con separador de miles. • Rellena el resto de la columna utilizando la función autocompletar.
>
> • Comprueba los resultados
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Creación de esquema automático (columnas) • Selecciona el rango de celdas A2:F33. • Ve al menú Datos → Grupo y esquema → Agrupar. • En el cuadro de diálogo que aparece elige la opción Columnas. • Haz clic en Aceptar. • Ve al menú Datos → Grupo y esquema → Esquema automático.
>
> • Comprueba los resultados
>
> Ahora tenemos un esquema tanto en vertical (filas) como en horizontal (columnas). Podemos contraer y/o expandir el esquema por filas o columnas, mediante los iconos - y + y los botones 1 y 2.
>
> Mádulo 4 . Práctica 11: Esquemas
>
> Fuente: www.tuinstitutoonline.com
>
> Gráfico. Columnas apiladas 3D Vamos a representar los totales por trimestre mediante un gráfico de columnas apiladas. • Muestra sólo los totales por trimestre. Haz clic en el botón 1 de las filas.
>
> • Selecciona el rango de datos A2:E33. Al realizar gráficos de un esquema debemos tener cuidado con los niveles. Calc confecciona el gráfico según la agrupación de filas y columnas que hayamos seleccionado. En este caso, hemos contraído las filas y se muestra los totales correspondientes.
>
> • Crea un gráfico de Columna tipo "Porcentaje apilado", vista 3D. o Título: TOTALES POR TRIMESTRE o Eje X: Trimestres o Eje Y: % Tipo de cebollas • Personaliza el gráfico con color de fondo. Cambia el color y fondo del título. Gira los títulos del eje X en vertical. • Por ejemplo
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.18 — M4-Pràctica 12: Pràctica final. Fulla cooperativa**
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Objetivos
>
> • Repasar y aplicar los conceptos vistos anteriormente: búsqueda de datos, funciones booleanas, funciones financieras, buscar valor destino, escenarios, consolidación de datos y esquemas.
>
> Contenidos
>
> - Funciones de búsqueda y booleanas: BUSCARV, SI, O, Y.
>
> La cooperativa vinícola "Santiago El Mayor" ubicada en Minaya (Albacete), pretende automatizar algunos de sus procesos diarios mediante una hoja de cálculo. Lo más prioritario consiste en automatizar las ventas directas en tienda, ya que hasta ahora era un proceso semi-manual.
>
> En las prácticas siguientes vamos a trabajar sobre el mismo fichero Modulo4.ods.
>
> Ejercicio 1
>
> Descargar la hoja • Descarga de la carpeta RECURSOS, el documento 12cooperativa.ods, y trabaja esta practica en ese documento • Copia el contenido de esta hoja, en una nueva hoja que llamarás M4P12-cooperativa. Introducción de datos. Hoja productos • Puede utilizarse los efectos y colores que se desee.
>
> • Da formato a los datos en la hoja tal y como se muestran a continuación. • Crea un rectángulo con el texto “Catálogo de vinos”. • Descarga de la carpeta RECURSOS la imagen de los toneles. • Inserta la imagen descargada. Pon borde de línea. • Pon formato Moneda con 2 decimales para el precio de los artículos.
>
> • Inserta el comentario "Precio por litro" en las 4 celdas del precio de los productos a granel. • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Introducción de datos. Hoja descuentos • Puede utilizarse los efectos y colores que se desee. • Renombra "Hoja2" como M4P12-Descuentos. • Da formato a los datos en la hoja tal y como se muestran a continuación. • Crea un rectángulo con el texto “Descuentos”. • Descarga de la carpeta RECURSOS la imagen del gráfico (12Imagen).
>
> • Inserta la imagen descargada. • Pon formato Porcentaje sin decimales para el descuento. • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Introducción de datos. Hoja ventas • Añade una nueva hoja de cálculo. • Renombra la nueva hoja como M4P12-Ventas_TPV. • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un cuadro con el texto “Ventas directas TPV”.
>
> • Descarga de la carpeta RECURSOS la imagen de la cooperativa (12cooperativa). • Inserta la imagen descargada. • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Validación de datos. Cantidad y código • Cantidad. Valida la entrada de datos, de forma que sólo se permitan valores enteros. En caso de no introducir cantidades enteras, mostraremos un mensaje de error e impediremos que se introduzca el número. • Código. Valida la entrada de datos, de forma que sólo se permitan los valores contenidos en el catálogo de productos de la cooperativa. En caso de introducir un código inexistente, mostraremos un mensaje de error e impediremos que se introduzca ese código.
>
> • Comprueba la validación de datos. Buscar descripción del artículo Vamos a obtener la descripción del artículo buscando por la columna código. • Ve a la celda B4. Haz clic en el asistente para funciones. • Elige la función BUSCARV dentro del apartado Hoja de cálculo.
>
> o Criterio de búsqueda. Haz clic en A4. o Matriz. Selecciona el área de todos los productos en la hoja "Productos". o Índice. Selecciona la columna 2, que es la que contiene la descripción. o Ordenación. Escribe el valor 0 (FALSO), ya que la lista de productos no está ordenada. De este modo, forzamos a Calc a buscar en toda la lista de valores.
>
> Recuerda poner referencias absolutas para la matriz de búsqueda.
>
> • Rellena el resto de la columna utilizando la función autocompletar.
>
> ¿Qué ocurre? Como el código de artículo está vacío, se devuelve el error #N/D. Vamos a proceder a solucionar el problema del mismo modo que hicimos en prácticas anteriores. • Soluciona el problema anterior usando la función SI. Si el código está vacío, entonces devuelve la cadena vacía "". En caso contrario, utiliza la función BUSCARV.
>
> Buscar precio del artículo • Ve a la celda C4. Repite el mismo proceso anterior (función BUSCARV) pero para buscar el precio del artículo. • Recuerda poner referencias absolutas para la matriz de búsqueda. Escribe el valor 0 (FALSO) para el campo Ordenación. • Utiliza la función SI para evitar el error cuando la columna código está vacía.
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> #### 1.1. BUSCARV. Columnas ordenadas
>
> ¿Qué ocurre con la cantidad? La cantidad de la hoja de ventas no tiene porqué coincidir con la cantidad fija de los descuentos. Es decir, se puede comprar 11 estuches y dicho número no se encuentra en la tabla de descuentos. En nuestro caso, tenemos la ventaja de que la tabla de descuentos se encuentra ordenada de manera ascendente. Las columnas ordenadas se pueden buscar más deprisa y la función BUSCARV siempre devuelve un valor, incluso si el valor de búsqueda no coincide exactamente, si se encuentra entre el valor más alto y más bajo de la lista ordenada.
>
> Así pues, si compramos 11 estuches, la función BUSCARV devolverá el valor más cercano, aunque no coincida. En este caso será 10, que equivale a un descuento del 10%.
>
> Ejercicio 2
>
> Obtener porcentaje de descuento Para calcular el porcentaje de descuento que corresponde, necesitamos una fórmula más compleja, por lo que abordaremos el problema por partes. • Obtener el descuento. Ve a la celda E4. Utiliza la función BUSCARV para buscar el porcentaje de descuento que corresponde a la cantidad. Ahora debes buscar en la hoja "Descuentos".
>
> • Recuerda poner referencias absolutas para la matriz de búsqueda. Deja el campo Ordenación en blanco. • Utiliza la función SI para evitar el error cuando la columna código está vacía. ¿Y si el producto que se compra es vino a granel? Recordemos que la compra a granel no tiene descuento. Por lo tanto, en nuestra fórmula deberemos añadir la condición que compruebe si el artículo es a granel. En ese caso, el descuento debe ser del 0%. En caso contrario, la fórmula será la que teníamos anteriormente.
>
> • Modifica la fórmula. Utiliza la función BUSCARV para devolver el tipo de envase. Recuerda poner referencias absolutas para la matriz de búsqueda. Escribe el valor 0 (FALSO) para el campo Ordenación. • Ahora añade una función SI para comprobar si el envase es a granel. En ese caso, se devolverá el valor 0. En caso contrario, la fórmula que has elaborado anteriormente. En resumen
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Si BUSCARV envase = "Granel" → descuento = 0 Si no → BUSCARV descuento correspondiente Importe de línea • Calcula el importe por línea. Importe línea = (Precio - (Precio*Descuento)) * Cantidad • Soluciona el error #N/D. Utiliza funciones booleanas para controlar que si el precio o la cantidad están vacíos, devolver cadena vacía. En caso contrario, se calcula el importe de línea según la fórmula anterior.
>
> • Pon formato Moneda con 2 decimales y con separador de miles para el importe de línea. Introducción de datos. Hoja ventas • Introduce los códigos que se muestran a continuación. • Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Formato condicional • Crea un nuevo estilo de nombre "Descuento" en el menú Formato → Estilos y formato. Define la letra en color rojo negrita. • Crea un formato condicional para la columna descuento. Añade la condición para que si el descuento es mayor del 10%, se visualice el texto con el nuevo estilo (en color rojo negrita). Recuerda que como el descuento es un porcentaje, la condición debe ser que el número sea mayor de 0,1.
>
> • Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 2. Definir nombres y totales de ventas
>
> Vamos a definir nombres para realizar los cálculos de los totales de manera que las fórmulas queden más claras y simplificadas.
>
> Ejercicio 3
>
> Definir nombres • Define los siguientes nombres con alcance para la hoja M4P12-Ventas_TPV: o "Importes_tpv" para el rango de ventas F4:F18. o "Base_imponible" para la celda F20 de la base imponible. o "IVA" para la celda F21 del porcentaje de IVA. o "Importe_IVA" para la celda F22 del importe del IVA de la factura.
>
> • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Totales de ventas • Calcula la base imponible. Base imponible = suma (Importes_tpv) • Calcula el importe de IVA. Importe IVA = Base_imponible * IVA • Calcula el total a pagar. Total a pagar = Base_imponible + Importe_IVA • Pon formato Moneda con 2 decimales y con separador de miles para la base imponible, el importe de IVA y el total a pagar.
>
> • Rellena el resto de la columna utilizando la función autocompletar. • Comprueba los resultados
>
> Protección de celdas Vamos a proteger todas las celdas de la factura de ventas, excepto la columna del código y la cantidad, puesto que estos datos deben ser introducidos por el vendedor. • Cantidad. Deprotege la columna. • Código. Desprotege la columna. • Activa la protección de celdas. Ve al menú Herramientas → Proteger documento → Hoja.
>
> Deja la contraseña en blanco. • Comprueba la protección de celdas. • Guarda los cambios.
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 3. Funciones financieras: PAGO. Gráficos
>
> La cooperativa ha decidido la compra de una máquina de envasado con más capacidad que la actual, puesto que los pedidos se han incrementado bastante en los últimos años y se necesita envasar y etiquetar en menos tiempo. Después de analizar varios presupuestos, se ha optado por la máquina QUICKBOTTLE, con un presupuesto de 108.000 €.
>
> La entidad financiera con la que trabaja la cooperativa, les ha ofrecido unas buenas condiciones de pago: • Capital prestado: 108.000 € • Interés anual (T.A.E.): 10 % • Periodo: 8 años (96 meses) • Comienzo: enero 2015 • Fin: diciembre 2022
>
> Ejercicio 4
>
> Introducción de datos. Hoja envasadora • Puede utilizarse los efectos y colores que se desee. • Crea una nueva hoja. • Renombra la nueva hoja como M4P12-Envasadora. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rectángulo con el texto “Simulación préstamo”.
>
> • Descarga de la carpeta RECURSOS la imagen de la envasadora. • Inserta la imagen descargada. • Pon formato Moneda con 2 decimales para la casilla de capital. • Pon formato Porcentaje sin decimales para la casilla de interés (TAE). • Pon formato Cantidad con 2 decimales para la columna de intereses, amortización, cuota mes y saldo pendiente.
>
> • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Cuota mensual • Calcula la cuota mensual mediante la función PAGO. o Tasa. La financiera nos ofrece un interés anual T.A.E. del 10%. Eso significa que para obtener el interés mensual debemos dividir el valor anual entre 12 meses. → Tasa = Interes/12 o Nper. El préstamo tenemos que pagarlo en 8 años, es decir, 96 meses. → NPER = Meses o VA. El capital prestado y que debemos pagar es de 108.000 € → VA = -Capital Comisión de apertura • Calcula el importe de la comisión de apertura. Com. Apertura = Porcentaje de comisión * Capital • En la primera fila del préstamo, la cuota del mes será la comisión.
>
> • Comprueba los resultados
>
> Periodos de pago • Ve a la celda A4. Escribe el texto "01/01/2015". • Ve a la celda A5. Escribe el texto "01/02/2015". • Pon formato Fecha con código de formato MM/AA (tipo 12/99), para que se muestre sólo el mes y el año. • Selecciona las casillas A4:A5. • Rellena el resto de la columna utilizando la función autocompletar.
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Plan de amortización Vamos a calcular el plan de amortización del préstamo, es decir, vamos a detallar lo que vamos a pagar cada mes y en qué conceptos. • Calcula la columna de intereses a pagar: Intereses = Saldo pendiente mes anterior * (Interés/12) • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente.
>
> • Calcula la columna de amortización del capital: Amortización = Cuota mensual – Intereses • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente. • Calcula la columna de cuota mes: Cuota mes = Intereses + Amortización • Rellena el resto de la columna utilizando la función autocompletar. Cuando finalices el resto de columnas, se verá todo correctamente.
>
> • Calcula la columna de saldo pendiente del préstamo: Saldo pendiente = Saldo pendiente mes anterior – Amortización • Rellena el resto de la columna utilizando la función autocompletar. Ahora se ve todo correctamente. • Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Totales • Calcula los totales para las columnas de interés, amortización y cuota mes. Utiliza la función Autosuma. • Pon formato Moneda con 2 decimales para los totales. • Comprueba los resultados
>
> Total a pagar • Calcula el total a pagar. Total a pagar = Cuota_mensual * Meses + Comision • Comprueba los resultados
>
> Gráfico. Columnas porcentaje apilado Vamos a representar los importes de intereses y amortización de capital mediante un gráfico de columnas. • Selecciona el rango de datos A2:C99. • Crea un gráfico de Columna tipo "Porcentaje apilado". o Título: AMORTIZACIÓN PRÉSTAMO o Eje X: Meses o Eje Y: Detalle cuota • Personaliza el gráfico con color de fondo. Cambia el color y fondo del título. Inclina los títulos del eje X para que sean visibles todos los intervalos de tiempo.
>
> • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Fijar paneles • Ve a la celda A3. Ve al menú Ventana → Inmovilizar. Ahora podemos desplazarnos por todo el plan de amortización del préstamo, manteniendo siempre visibles los títulos de cada columna.
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 4. Operaciones múltiples
>
> El director de la sucursal bancaria, ha comentado a la cooperativa que también puede contemplarse la opción de un préstamo a interés variable para la compra de la nueva envasadora. Lógicamente, el interés puede variar con subidas o bajadas, aunque permaneciendo dentro de un intervalo garantizado por contrato. Además, en este caso se podría renegociar el periodo de pago.
>
> La cooperativa quiere realizar un estudio para analizar la viabilidad de esta propuesta. El banco ofrece las siguientes condiciones: • Capital prestado: 108.000 € • Interés anual (T.A.E.): 10 % → según contrato, puede oscilar entre el 7% y el 14% • Periodo: 8 años (96 meses) → negociable si sube o baja el interés • Comienzo: enero 2015
>
> Ejercicio 5
>
> Introducción de datos. Hoja opmenvasadora Vamos a simular esta opción de préstamo teniendo en cuenta una tabla con 2 variables: el tipo de interés y el número de años para pagar. • Puede utilizarse los efectos y colores que se desee. • Crea una nueva hoja. • Renombra la nueva hoja como M4P12-OpmEnvasadora.
>
> • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rectángulo con el texto “Estudio préstamo variable”. • Descarga de la carpeta RECURSOS la imagen de la calculadora (12calculadora). • Inserta la imagen descargada. • Pon formato Moneda con 2 decimales para la casilla de capital.
>
> • Pon formato Porcentaje sin decimales para la casilla de interés (TAE) y los tipos de interés. • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> • Selecciona el rango de celdas A8:F15. • Ve al menú Datos → Operaciones múltiples. En el cuadro de diálogo: o Fórmulas: selecciona la cuota mensual (celda B5). o Fila: selecciona los años (celda B4), que son los datos variables que hemos puesto en fila. o Columna: selecciona el tipo de interés (celda B3), que son los datos variables que hemos puesto en columna.
>
> • Pulsa Aceptar. • Pon formato Moneda con 2 decimales al rango de datos de las cuotas. • Ahora tenemos las distintas cuotas mensuales teniendo en cuenta tanto los cambios del tipo de interés como los años a pagar. Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 5. Buscar valor destino
>
> En las bodas del pueblo es tradición regalar botellas de vino con la foto de los novios. Por este motivo, es frecuente que se acerquen parejas a solicitar presupuesto. Aprovechando la funcionalidad de Calc, la cooperativa pretende utilizar la técnica del valor destino para detallar los presupuestos con el máximo rigor.
>
> Ejercicio 6
>
> Introducción de datos. Hoja etiquetas Jesús y Antonia disponen de un presupuesto total de 1000 € para la compra de botellas de vino personalizadas con su foto. La cooperativa les ha pasado un presupuesto de 2,99 € por botella. La pareja quiere saber qué cantidad de botellas pueden comprar, ya que necesitan ajustarse lo más posible a la lista de invitados.
>
> • Puede utilizarse los efectos y colores que se desee. • Crea una nueva hoja. • Renombra la nueva hoja como M4P12-Etiquetas. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rectángulo con el texto “Presup. Etiquetas”. • Descarga de la carpeta RECURSOS la imagen de las botellas (12etiquetas).
>
> • Inserta la imagen descargada. • Pon formato Moneda con 2 decimales para la casilla de precio y total a pagar. • Pon formato Cantidad sin decimales para la cantidad. El número de botellas debe ser un número entero. • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Buscar valor destino • Ve a la celda B6. Introduce la fórmula correspondiente al total: Total a pagar = Precio * Cantidad. De momento dará 0, ya que la cantidad por defecto es 0, puesto que es el valor a buscar. • Ve al menú Herramientas → Búsqueda del valor destino. En el cuadro de diálogo
>
> o Celda de fórmula: debe aparecer la celda seleccionada previamente y que contiene la fórmula (B6). o Valor destino: escribimos el valor que tenemos de presupuesto (1000 €). o Celda variable: ponemos la celda B4, que es la que contendrá la solución del problema. • Pulsa Sí. Con 1000 € de presupuesto, podemos confeccionar 334 botellas con etiquetas personalizadas, a un precio de 2,99 € cada una.
>
> • Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 6. Escenarios
>
> Dispuestos a dar el mejor servicio a los socios cooperativistas, la directiva ha instalado 2 surtidores de gasóleo, uno agrícola y otro normal. Se pretende aprovechar las posibilidades que ofrece Calc para fijar un precio de gasóleo que cumpla 2 criterios: que sea asequible al público y, al mismo tiempo, que deje un margen de beneficios. El acuerdo al que ha llegado la cooperativa con el distribuidor es de 1,13 €/litro de gasóleo.
>
> Ejercicio 7 Introducción de datos. Hoja surtidor • Puede utilizarse los efectos y colores que se desee. • Crea una nueva hoja. • Renombra la nueva hoja como M4P12-Surtidor. • Introduce los datos en la hoja tal y como se muestran a continuación. • Crea un rectángulo con el texto “Precio gasóleo”.
>
> • Descarga de la carpeta RECURSOS la imagen de las tuberías (12tuberias). • Inserta la imagen descargada. • Pon formato Moneda con 2 decimales para la casilla de precio coste y precio final. • Pon formato Porcentaje sin decimales para la casilla del margen de beneficio.
>
> Fórmulas • Ve a la celda B6. Introduce la fórmula del precio final: Precio final = Precio coste + (Precio coste * Margen beneficio) • Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Crear escenarios personalizados Ahora crearemos tres escenarios llamado Mínimo, Medio y Máximo, que cambiarán el margen de beneficio con los valores 8%, 12% y 15%. • Vamos a seleccionar las celdas que contienen los valores que cambiarán entre escenarios. Selecciona el rango de celdas A3:B6.
>
> • Ve al menú Herramientas → Escenarios. Nombre Escenario: "Mínimo". Comentario: escribe tu nombre. Activa la casilla “Copiar la hoja completa”. • Pulsa Aceptar. • Se ha creado un hoja nueva llamada "Mínimo", activándose automáticamente el escenario. • A continuación repetimos el proceso para crear otros dos escenarios llamados "Medio" y "Máximo".
>
> Selección y modificación de escenarios • Ve a la hoja "Mínimo". Ve a la celda B4 y escribe 8%. • Abre el escenario "Medio". Ve a la celda B4 y escribe 12%. • Abre el escenario "Máximo". Ve a la celda B4 y escribe 15%. • Vuelve a la hoja "Surtidor". • Prueba los tres escenarios creados mediante la lista desplegable que se muestra
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 7. Consolidar
>
> La cooperativa "Santiago El Mayor" dispone de 4 depósitos para almacenar los diferentes tipos de vino: sauvignon blanc, ayren, rosado y tinto. El departamento de administración quiere saber qué tipo de vino y qué cantidades se almacenan cada trimestre para llevar un control automático anual. Para ello vamos a realizar una consolidación de datos.
>
> Ejercicio 8
>
> Introducción de datos. Trimestres Vamos a maquetar los datos de cada hoja de trimestre. • Puede utilizarse los efectos y colores que se desee. • Crea una nueva hoja llamada M4P12-VinoTR1. • Modifica los datos en la hoja tal y como se muestran a continuación. • Crea un cuadro con el texto “PRIMER TRIMESTRE".
>
> • Pon formato Cantidad sin decimales y con separador de miles para las cantidades de vino. • Repite el proceso anterior para el resto de trimestres (hojas M4P12-VinoTR2, M4P12- VinoTR3, M4P12-VinoTR4). Totales. Trimestres • Calcula el total de cada depósito. Total depósito = suma de las cantidades de la columna • Pon formato Cantidad sin decimales y con separador de miles.
>
> • Rellena el resto de la fila utilizando la función autocompletar. • Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Consolidación de datos Vamos a crear una hoja donde consolidaremos los datos para el total anual, de modo que obtengamos la media aritmética de litros de cada tipo de vino por depósito. • Crea una nueva hoja para la media anual. Renombra la nueva hoja como M4P12-VinoTotal.
>
> • Ve a la celda A3. A partir de esta celda vamos a consolidar los datos. • Ve al menú Datos → Consolidar. Aparece el cuadro de diálogo: • En el campo Función elige Promedio. • Intervalos del origen de datos. Hoja "VinoTR1". Selecciona el rango de datos A3:E7. Haz clic en el botón Añadir.
>
> • Repite el proceso para el resto de hojas del segundo, tercer y cuarto trimestre. • Desplega el cuadro de Opciones. Marca la casilla "Etiquetas de filas" y "Enlazar a los datos de origen". • Por último, pulsa Aceptar.
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Introducción de datos. Media anual A continuación vamos a introducir los datos que faltan y a poner el formato correspondiente en las celdas, para que quede presentable. • Puede utilizarse los efectos y colores que se desee. • Introduce los datos en la hoja tal y como se muestran a continuación.
>
> • Descarga de la carpeta RECURSOS la imagen de los depósitos. • Inserta la imagen descargada. Pon borde de línea. • Crea un cuadro con el texto “MEDIA ANUAL". • Pon formato Cantidad sin decimales y con separador de miles para las cantidades de vino. • Comprueba los resultados en la hoja "VinoTotal"
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Contenidos
>
> ### 8. Esquemas
>
> El enólogo de la cooperativa ha ido recogiendo muestras durante las semanas previas a la vendimia de los distintos tipos de uva, de forma que en cada muestra se ha medido la graduación de alcohol. Después, ha introducido los datos en el programa de gestión, que ha exportado la información a un fichero de hoja de cálculo. Sin embargo, el formato exportado contiene los datos sin clasificar, por lo que será necesario esquematizar la información y proceder a su tratamiento estadístico.
>
> Ejercicio 9
>
> Introducción de datos. Hoja grados A continuación vamos a introducir los datos que faltan y a poner el formato correspondiente en las celdas, para que la presentación quede profesional. • Puede utilizarse los efectos y colores que se desee. • Renombra la hoja "Hoja7" como M4P12-Grados.
>
> • Ve a la hoja "Grados". • Introduce los datos en la hoja tal y como se muestran a continuación. • Descarga de la carpeta RECURSOS la imagen de los viñedos (12vinedos). • Inserta la imagen descargada. Pon borde de línea. • Crea un cuadro con el texto “Graduación vinos".
>
> • Pon formato Cantidad con 2 decimales para las muestras de alcohol. Media. Meses • Calcula la media de cada mes. Media = promedio de las cantidades de la columna del mes • Pon formato Cantidad con 2 decimales para la media. • Rellena el resto de la fila utilizando la función autocompletar.
>
> • Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Creación de esquema automático (filas) Vamos a crear un esquema automático con toda la información disponible. Tenemos los datos estructurados y las fórmulas correspondientes. • Selecciona el rango de celdas A2:E13. • Ve al menú Datos → Grupo y esquema → Agrupar. • En el cuadro de diálogo que aparece elige la opción Filas.
>
> • Haz clic en Aceptar. Acabamos de agrupar los datos por filas (comprueba que a la izquierda de las filas aparece el icono de agrupación y arriba a la izquierda de la primera fila, los niveles de agrupación). Ahora debemos ejecutar el segundo paso, que consiste en crear el esquema a partir de esta agrupación.
>
> • Ve al menú Datos → Grupo y esquema → Esquema automático. • Comprueba los resultados
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> • Haz clic en el botón 1 (primer nivel de agrupación). Comprueba cómo se contraen los datos y se muestra sólo el resumen
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> Gráfico. Líneas Vamos a representar la evolución de la graduación alcohólica para los distintos tipos de uva. • Expande el esquema (botón 2). • Selecciona el rango de datos A3:E6. Con la tecla Ctrl pulsada, selecciona ahora el rango A9:E12. • Crea un gráfico de Línea tipo "Puntos y líneas".
>
> • En el paso 3 Series de datos, selecciona el título para cada columna. Ve al campo Intervalo para nombre y elige la celda correspondiente. Por ejemplo, para la columna B, el intervalo sería la casilla B2 (Sauvignon Blanc)
>
> • Escribe los títulos: o Título: EVOLUCIÓN GRADUACIÓN ALCOHÓLICA o Eje X: MESES o Eje Y: Grados alcohol • Personaliza el gráfico con color de fondo. Cambia el color y fondo del título. Gira los títulos del eje X en vertical. • Por ejemplo
>
> Módulo 4 . Práctica 12: HOJA COOPERATIVA
>
> Fuente: www.tuinstitutoonline.com
>
> • Guarda los cambios.

> **✍️ 📋 Exercici / Qüestionari 9.19 — Exercici Notes per a classe**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
