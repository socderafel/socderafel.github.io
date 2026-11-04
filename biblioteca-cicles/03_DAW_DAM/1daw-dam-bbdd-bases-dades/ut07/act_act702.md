---
layout: default
title: "Actividad Práctica ACT702 — 702 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./act_act701.html"
prev_label: "⬅️ ✏️ ACT701 701"
next_url: "./act_act703.html"
next_label: "✏️ ACT703 703 ➡️"
---

# **Actividad 702**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `702_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **procedimientos almacenados con parámetros** (`CREATE PROCEDURE`).

> - El uso correcto de los **parámetros de entrada `IN`**.

> - La correcta utilización de las **funciones** proporcionadas por el sistema gestor (`DATE_SUB`, `TIMESTAMPDIFF`, `DATE_ADD`, `CURDATE`, `ROW_COUNT`, `CONCAT`, ...).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. a) Se han identificado las diversas maneras de automatizar tareas.

>   - CA5. b) Se han reconocido los métodos de ejecución de guiones.

>   - CA5. c) Se han identificado las herramientas disponibles para editar guiones.

>   - CA5. d) Se han definido y utilizado guiones para automatizar tareas.

>   - CA5. e) Se ha hecho uso de las funciones proporcionadas por el sistema gestor.

>   - CA5. f) Se han definido procedimientos y funciones de usuario.

## **Procedimientos con parámetros - CIRCO**

Con la BBDD **CIRCO** facilitada (CIRCO.sql), crea y ejecuta un script `.sql` que realice los siguientes procedimientos.

**Ejercicio 1.** Crea un procedimiento de nombre `artistes_getAnimalesPorNif` que devuelva a los animales que cuida un artista. Llevará como parámetro el **nif de artista**.

**Ejercicio 2.** Crea un procedimiento de nombre `artistes_getAnimalesPorNombreApel` que devuelva a los animales que cuida un artista. Llevará como parámetro el **nombre y apellidos** del artista. Supongamos que el nombre y apellidos conforman una clave alternativa.

**Ejercicio 3.** Crea un procedimiento de nombre `atraccions_getListConAntiguedad` que devuelva los datos de las atracciones que hayan comenzado hace **un número de años** respecto a la fecha actual. Tendrás que hacer uso de alguna de las funciones de tiempo. Intenta averiguar cómo.

**Ejercicio 4.** Crea un procedimiento de nombre `artistes_getListMasAnimalesCuida` que devuelva los datos del/los artista/s que cuidan a **más animales de los indicados** (parámetro que se le envía).

> **📌 Pista**
> 

> Como la consulta puede devolver más de un artista no podremos hacer uso de `INTO...`.

**Ejercicio 5.** Crea un procedimiento de nombre `atraccions_getListPorFecha` que devuelva los datos de las atracciones que han comenzado **a partir de la fecha indicada**.

> **📌 Pista**
> 

> Recordar que las fechas son tratadas como cadenas, y tener en cuenta el formato.

Añade una **nueva atracción** con la fecha de inicio actual. Realiza el llamamiento al procedimiento empleando la **fecha actual menos 3 días** (haz uso de la función `DATE_SUB` y `CURDATE`).

**Ejercicio 6.** Crea un procedimiento de nombre `pistes_add` que **añada una nueva pista**.

> **📌 Nota**
> 

> Todavía no vimos la validación de datos que debería darse en el paso de parámetros. En este caso podríamos tener condiciones `IF` en el que se comprueba si el aforo es mayor que cero...
Se puede hacer uso de la función `ROW_COUNT()` para saber cuántas filas fueron añadidas, borradas o modificadas.

> **📌 Importante**
> 

> Los parámetros deben tener el **mismo tipo de dato y tamaño** que el que está definido a nivel de columnas en la tabla `PISTAS`.

**Ejercicio 7.** Crea un procedimiento de nombre `atraccions_update` que permita **modificar los datos de una atracción** (no se permite actualizar su clave primaria).

Modifica la fecha de inicio de la atracción `'El gran felino'` y ponla **un día después** de la que tiene ahora mismo.

> **📌 Pista**
> 

> Deberás guardar las ganancias y la fecha de inicio que tiene para poder enviar este dato al procedimiento. Comprueba cómo al llamar al método con una atracción que no existe, `ROW_COUNT()` devolverá 0.

**Ejercicio 8.** Crea un procedimiento de nombre `pistas_delete` que **borre una pista** por su nombre. Haz que borre sobre la base del patrón `nombre%` (empleando el `LIKE`). Borra la atracción que hayas añadido en el ejercicio 6 mandando las primeras letras (ves con cuidado que no haya otra atracción con estas letras al comienzo).

> **📌 Pista**
> 

> Emplea la función `CONCAT` para el `LIKE`.
