---
layout: default
title: "Actividad Práctica ACT701 — 701 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./ut0710.html"
prev_label: "⬅️ 7.10 Gestión de excepciones"
next_url: "./act_act702.html"
next_label: "✏️ ACT702 702 ➡️"
---

# **Actividad 701**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `701_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **procedimientos almacenados** (`CREATE PROCEDURE`).

> - El uso correcto de **variables locales** (`DECLARE`).

> - La correcta utilización de las **funciones** proporcionadas por el sistema gestor (`DATE_SUB`, `TIMESTAMPDIFF`, ...).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. a) Se han identificado las diversas maneras de automatizar tareas.

>   - CA5. b) Se han reconocido los métodos de ejecución de guiones.

>   - CA5. c) Se han identificado las herramientas disponibles para editar guiones.

>   - CA5. d) Se han definido y utilizado guiones para automatizar tareas.

>   - CA5. e) Se ha hecho uso de las funciones proporcionadas por el sistema gestor.

>   - CA5. f) Se han definido procedimientos y funciones de usuario.

## **Procedimientos - CIRCO**

Con la BBDD **CIRCO** facilitada (CIRCO.sql), crea y ejecuta un script `.sql` que realice los siguientes procedimientos.

### **1. Procedimientos sin parámetros**

**Ejercicio 1.** Crea un procedimiento de nombre `artistes_getList()` que devuelva el nombre y apellidos de los artistas separados por coma con el formato: `apellidos,nombre` ordenados de manera descendente.

**Ejercicio 2.** Crea un procedimiento de nombre `artistes_getListAnimales()` que devuelva los nombres de los artistas junto con su nif así como el nombre y peso de los animales que están atendidos por los artistas, ordenados por nif del artista y nombre del animal.

**Ejercicio 3.** Crea un procedimiento de nombre `atraccions_getListConAntiguedad5()` que devuelva los datos de las atracciones que hayan comenzado hace 5 años respecto a la fecha actual. Tendrás que hacer uso de alguna de las funciones de tiempo. Intenta averiguar cómo.

> **📌 Pista**
> 

> Funciones de tiempo: `DATE_SUB`, `TIMESTAMPDIFF`, `CURDATE`, `INTERVAL`.

### **2. Variables locales**

**Ejercicio 4.** Crea un procedimiento de nombre `animals_Leo_getPista()` que muestre los datos de la pista donde trabaja el animal de nombre `'Leo'`. Hacerlo empleando una **variable local** que guarde el nombre de la pista. Después consultar los datos de la pista utilizando esta variable local.

**Ejercicio 5.** Crea un procedimiento de nombre `atraccions_getUltima()` que obtenga los datos de la última atracción celebrada (tabla `ATRACCION_DIA`), empleando variables locales. Para ello guarda en una variable el nombre de la última atracción celebrada y busca los datos de esta atracción. Ten en cuenta limitar con `LIMIT` el número de filas que devuelva una consulta si no sabes con certeza que vaya a devolver una única fila y guardarás los datos en una variable.

**Ejercicio 6.** Crea un procedimiento de nombre `atraccions_getArtistaUltima()` que obtenga los datos de la atracción y del artista que trabaja en esta atracción, cuya fecha de inicio ha comenzado más tarde. Emplea **dos variables**: una para guardar el *nif del artista* y otra para guardar el *nombre de la atracción*.
