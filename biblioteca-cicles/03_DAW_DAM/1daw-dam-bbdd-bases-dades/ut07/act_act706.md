---
layout: default
title: "Actividad Práctica ACT706 — 706 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./act_act705.html"
prev_label: "⬅️ ✏️ ACT705 705"
next_url: "./act_act707.html"
next_label: "✏️ ACT707 707 ➡️"
---

# **Actividad 706**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `706_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **triggers** (`CREATE TRIGGER`).

> - La correcta elección del **momento** de ejecución (`BEFORE`/`AFTER`) y de la **operación** (`INSERT`/`UPDATE`/`DELETE`).

> - El correcto uso de las tablas **`OLD`** y **`NEW`**.

> - El uso de **`SIGNAL`** para impedir operaciones que no cumplen las condiciones.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. h) Se han definido acontecimientos y disparadores.

## **Triggers - CIRCO**

Con la BBDD **CIRCO** facilitada (CIRCO.sql), crea y ejecuta un script `.sql` que realice los siguientes triggers.

**Ejercicio 1.** Haz que **no se pueda añadir un nuevo animal** si el tipo es `'León'` y el número de años es mayor que **20**. En caso de no cumplirse la condición lanzará una excepción:

```sql
SIGNAL SQLSTATE '45000' SET message_text='El tipo león no puede tener más de 20 años';
```

> **📌 Pista**
> 

> Como queremos **impedir** que se añada la fila si no se cumple la condición, el trigger debe ser `BEFORE INSERT` y hacer uso de la tabla `NEW`.

**Ejercicio 2.** Cuando se incorpore un **nuevo animal**, hacer que este animal esté cuidado por el **artista que cuida a menos animales**.

> **📌 Pistas**
> 

> - Deberás tener en cuenta el caso en el que **no haya ningún artista cuidando animales**. En este caso debes coger al primer artista que no sea jefe.

> - Si **no hay ningún artista** tendrás que lanzar una excepción con el texto `No se puede añadir el animal. No hay artistas disponibles` (`SIGNAL SQLSTATE '45000' SET message_text='No hay artistas para cuidar a animales';`).

> - Este trigger supone añadir una fila a la tabla `ANIMALES_ARTISTAS`, por lo que el animal tiene que estar ya añadido: el trigger será `AFTER INSERT`.

**Ejercicio 3.** Haz todo lo necesario para que el campo **`GANANCIAS`** de la tabla `ATRACCIONES` se actualice cuando se añadan, borren o modifiquen datos en la tabla `ATRACCION_DIA`.

Si al añadir una celebración nueva (`ATRACCION_DIA`) la `FECHA_INICIO` en `ATRACCIONES` es `NULL`, debe actualizarse **con la fecha actual**.

> **📌 Nota**
> 

> Debemos tener en cuenta que tanto la fecha como las ganancias pueden tener **valores nulos**. Hacer uso de la función `IFNULL` para dar un valor a estas columnas cuando sean `NULL` (`NULL + valor = NULL`).

**Ejercicio 4.** Modifica la tabla `ATRACCIONES` y añade una nueva columna de nombre **`contador`**, de tipo numérico y **valor por defecto de cero**, que lleve cuenta de **cuántas veces se ha celebrado la atracción** y que se actualice con cualquier operación.

> **📌 Nota**
> 

> Los datos ya añadidos tendrán como valor `NULL`. Realiza una operación de `UPDATE` para ponerlos a su valor correcto.
