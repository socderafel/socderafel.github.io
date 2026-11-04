---
layout: default
title: "Actividad Práctica ACT708 — 708 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./act_act707.html"
prev_label: "⬅️ ✏️ ACT707 707"
next_url: "./act_act709.html"
next_label: "✏️ ACT709 709 ➡️"
---

# **Actividad 708**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `708_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **funciones de usuario** (`CREATE FUNCTION ... RETURNS`).

> - El correcto uso de la instrucción **`RETURN`**.

> - La inclusión de las **características** de la función (`DETERMINISTIC`, `NO SQL`, `READS SQL DATA`).

> - La correcta **llamada** a la función, tanto directa como dentro de consultas SQL.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. f) Se han definido procedimientos y funciones de usuario.

## **Funciones de usuario - CIRCO**

Con la BBDD **CIRCO** facilitada (CIRCO.sql), crea y ejecuta un script `.sql` que realice las siguientes funciones.

**Ejercicio 1.** Crea una función de nombre `utilidades_getMesEnLetra` a la que se le pase un **número** y devuelva el **nombre del mes**. En caso de que el número no se corresponda con ningún mes, debe devolver `NULL`.

> **📌 Notas**
> 

> - Fíjate que esta función es **determinista**.

> - MySQL ya dispone de una función similar: `MONTHNAME()`, que recibe una fecha y devuelve el mes en forma de cadena.

Realiza las siguientes llamadas:

- Llama a la función directamente y **guarda el resultado en una variable de sesión**.

- Llama a la función para que muestre los **meses en letra** en los que se celebró la atracción `'El gran felino'`.

- Llama a la función para que muestre las atracciones que se celebraron en **ABRIL** (busca por la cadena `ABRIL`) (recuerda hacer uso de `COLLATE`).

**Ejercicio 2.** Modifica un ejercicio anterior en el que creamos el procedimiento de nombre `atracciones_getNumPorMes` y crea una **función** de nombre `utilidades_getMesEnNumero` a la que se le pase el **nombre de un mes** y devuelva el **número** que se corresponde con ese nombre. Si el mes no existe debe devolver **-1**. **Modifica el procedimiento** para que haga uso de la función.

> **📌 Pista**
> 

> La función devolverá un `INTEGER` y será determinista (`DETERMINISTIC NO SQL`).

**Ejercicio 3.** Crea una función de nombre `animales_getEstadoPorAnhos` que devuelva la cadena:

- Si `tipo = León`:

  - `anhos < 2`: `'JOVEN'`

  - `anhos >= 2` y `<= 5`: `'MADURO'`

  - `anhos > 5`: `'VIEJO'`

- Cualquier otro tipo:

  - `anhos < 1`: `'JOVEN'`

  - `anhos >= 1` y `<= 3`: `'MADURO'`

  - `anhos > 3`: `'VIEJO'`

Llama a la función para mostrar el **estado por años de cada uno de los animales** del CIRCO.

**Ejercicio 4.** Crea una función de nombre `pistas_getDiferenciaAforo` a la que se le pase el **nuevo aforo** de una pista y devuelva la diferencia entre el aforo nuevo y el aforo anterior.

- Si la diferencia `< 100`: devolver la cadena `'PEQUEÑA menor que 100'`.

- Si la diferencia está entre 100 y 500: devolver la cadena `'REGULAR entre 100 y 500'`.

- Si la diferencia `> 500`: devolver la cadena `'ABISMAL mayor que 500'`.

- Si la pista no existe: devolver `NULL`.

> **📌 Ejemplo**
> 

> `PISTA1, 150` → Si la pista tiene actualmente un aforo de 100, debe devolver `150 - 100 = 50` → `PEQUEÑA menor que 100`.

> **📌 Notas**
> 

> - Acordaos de añadir los **modificadores adecuados** a la creación de la función.

> - Muestra los datos de **todas las pistas** junto con la diferencia del aforo empleando la función anterior y enviando un aforo de **600**.

> - Muestra las pistas que tengan una diferencia **ABISMAL** (busca la cadena con la función `INSTR`) con un aforo propuesto de **1000**.
