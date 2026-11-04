---
layout: default
title: "Actividad Práctica ACT707 — 707 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./act_act706.html"
prev_label: "⬅️ ✏️ ACT706 706"
next_url: "./act_act708.html"
next_label: "✏️ ACT708 708 ➡️"
---

# **Actividad 707**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `707_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **cursores** (`DECLARE CURSOR`, `OPEN`, `FETCH`, `CLOSE`).

> - El correcto uso del **manejador** `DECLARE CONTINUE HANDLER FOR NOT FOUND`.

> - La correcta implementación del **bucle de lectura** (`LOOP` + `LEAVE`).

> - El uso de **tablas temporales** (`CREATE TEMPORARY TABLE`, `DROP TEMPORARY TABLE`).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. i) Se han utilizado cursores.

## **Cursores - CIRCO**

Con la BBDD **CIRCO** facilitada (CIRCO.sql), crea y ejecuta un script `.sql` que realice los siguientes procedimientos.

**Ejercicio 1.** Crea un procedimiento de nombre `atraccions_checkGanancias` en el que queremos comprobar si las **ganancias totales** de cada atracción coinciden con la **suma de las ganancias** de los días en que se celebró. El procedimiento debe devolver una cadena con el formato:

```sql
atraccion1:gananciatotal:gananciasumada, atraccion2:gananciatotal:gananciasumada
```

con las atracciones que **no cumplen** que la suma sea igual.

**Ejercicio 2.** Crea un procedimiento de nombre `artistes_addSuplementoPorCuidados`, que compruebe a **cuántos animales cuida** cada uno de los artistas. Aquellos artistas que cuidan **más de un número de animales** indicados por un parámetro se les dará un plus en su nómina igual al **número de animales que cuida multiplicado por 100 euros**. Muestra el nombre y complemento de cada artista así como la **suma de todos los complementos**.

> **📌 Pistas**
> 

> - El resultado debe aparecer como **una única consulta** (no valen varios `SELECT`). Para ello haz uso de una **tabla temporal** que vaya guardando los datos (el nombre completo y el suplemento de la ganancia) y posteriormente haz un `SELECT` de esta tabla.

> - Para crear una tabla temporal haz uso de la sentencia `CREATE TEMPORARY TABLE`. Esta orden debe ir **después** de la orden `DECLARE CONTINUE HANDLER` del cursor.

> - Recuerda **borrar la tabla temporal** al salir del procedimiento con la orden `DROP TEMPORARY TABLE`.

**Ejercicio 3.** Crea un procedimiento de nombre `animals_addAforoPorTipo` al que se le pase un **tipo de animal** y el **incremento de aforo** y por cada pista en la que trabaje el animal de este tipo, se llame al procedimiento `pistes_addAforo` ya implementado en la sección de procedimientos. **No hay que llamar varias veces a la misma pista**.

Debe mostrar en **una única consulta** la lista de pistas y nuevo aforo a partir de la información que devuelve el procedimiento `pistes_addAforo`. Las pistas **no pueden aparecer repetidas**.

> **📌 Pistas**
> 

> - Para ello haz uso de una **tabla temporal** que vaya guardando los datos (el nombre de la pista y el nuevo aforo) y posteriormente haz un `SELECT` de esta tabla.

> - Para crear una tabla temporal haz uso de la sentencia `CREATE TEMPORARY TABLE`. Esta orden debe ir **después** de la orden `DECLARE CONTINUE HANDLER` del cursor.

> - Recuerda **borrar la tabla temporal** al salir del procedimiento con la orden `DROP TEMPORARY TABLE`.

> - Para evitar llamadas repetidas a una misma pista, usa `SELECT DISTINCT nombre_pista` en el cursor.

> **📌 Aviso**
> 

> En la tabla `PISTAS` existe un trigger (`pistas_checkAforo_UPDATE`) que comprueba que el aforo esté entre 10 y 1000. Si la pista `SUPER` tiene un aforo de 1000, el incremento dará un error. Para probar, recuerda bajar el valor del aforo de la pista `SUPER` para que no supere el límite (o prepara el código para capturar la excepción).
