---
layout: default
title: "Actividad Práctica ACT703 — 703 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./act_act702.html"
prev_label: "⬅️ ✏️ ACT702 702"
next_url: "./act_act704.html"
next_label: "✏️ ACT704 704 ➡️"
---

# **Actividad 703**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `703_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **procedimientos almacenados** (`CREATE PROCEDURE`).

> - El correcto uso de las **sentencias preparadas** (`PREPARE`, `EXECUTE`, `DEALLOCATE PREPARE`).

> - La correcta construcción de sentencias SQL dinámicas con `CONCAT`.

> - La correcta utilización de los **marcadores de parámetros** (`?`) y `EXECUTE ... USING`.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. a) Se han identificado las diversas maneras de automatizar tareas.

>   - CA5. b) Se han reconocido los métodos de ejecución de guiones.

>   - CA5. c) Se han identificado las herramientas disponibles para editar guiones.

>   - CA5. d) Se han definido y utilizado guiones para automatizar tareas.

>   - CA5. e) Se ha hecho uso de las funciones proporcionadas por el sistema gestor.

>   - CA5. f) Se han definido procedimientos y funciones de usuario.

## **Sentencias Prepared - CIRCO**

Con la BBDD **CIRCO** facilitada (CIRCO.sql), crea y ejecuta un script `.sql` que realice los siguientes procedimientos.

**Ejercicio 1.** Crea un procedimiento de nombre `animals_getListFiltroNumeroColum` que devuelva el número de animales indicado por el parámetro (utilizar `LIMIT`). También se le pasará en otro parámetro las **columnas** que debe mostrar de la forma `'col1, col3, col5'`.

**Ejercicio 2.** Crea un procedimiento de nombre `animals_getListFiltroPista` que devuelva la lista de animales que trabajan en la pista que se envía como parámetro. En caso de que **no se envíe dato** (valor `NULL`) debe mostrar todos los animales.

> **📌 Pista**
> 

> Haz uso de un marcador de parámetro (`?`) en la sentencia preparada y de `EXECUTE ... USING`.

**Ejercicio 3.** Crea un procedimiento de nombre `animals_getByAnoPeso` al que se le pasen **dos parámetros** (peso y año) y en función de si llevan valor o no, haz que devuelva los animales que cumplan los criterios de búsqueda.
