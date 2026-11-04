---
layout: default
title: "Actividad Práctica ACT704 — 704 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./act_act703.html"
prev_label: "⬅️ ✏️ ACT703 703"
next_url: "./act_act705.html"
next_label: "✏️ ACT705 705 ➡️"
---

# **Actividad 704**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `704_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **procedimientos almacenados** (`CREATE PROCEDURE`).

> - El correcto uso de las **estructuras de control de flujo**: `IF`/`ELSEIF`/`ELSE`, `CASE`, `WHILE`, `LOOP`.

> - El correcto uso de **parámetros de salida (`OUT`)** y de entrada-salida (`INOUT`).

> - La correcta utilización de las **funciones** proporcionadas por el sistema gestor (`CONCAT`, `SUBSTRING`, `LOCATE`, `CHAR_LENGTH`, `ORD`, `LAST_DAY`, `LPAD`, `MOD`, ...).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. g) Se han utilizado estructuras de control de flujo.

## **Flujos de Control - CIRCO**

Con la BBDD **CIRCO** facilitada (CIRCO.sql), crea y ejecuta un script `.sql` que realice los siguientes procedimientos.

**Ejercicio 1.** Crea un procedimiento de nombre `pistes_getListAnimales` que devuelva a los animales (nombre, peso y años) que trabajen en la pista indicada. En caso de que **no haya animales** deberá devolver `SIN ANIMALES` y en el caso de que **no exista la pista**, `ESTA PISTA NO EXISTE`.

**Ejercicio 2.** Crea un procedimiento de nombre `atraccions_getNumeroPorFecha` que devuelva el número de atracciones que se celebraron en la fecha indicada. En caso de que **no hubiera atracciones** este día debe devolver el número **-1**.

**Ejercicio 3.** Crea un procedimiento de nombre `atraccions_getNumPorMes` al que se le pase dos datos: un mes en letra (`ENERO`, `FEBRERO`, ...) y un año en número. Deberá calcular la **suma de todas las atracciones** celebradas en el mes y año indicado y devolver el dato en un **parámetro de salida**. En el caso de que el año indicado sea nulo, tomar el año actual. Crea un bucle que recorra **todos los días del mes** del año indicado y vaya sumando las atracciones. Si el mes no existe tiene que devolver **-1** en el parámetro de salida. Para *construir* la fecha utilizar la función `CONCAT`.

> **📌 Pista**
> 

> Debes tener en cuenta que hay meses en los que no hay 31 días. En lugar de establecer condiciones por meses, emplear la función `LAST_DAY` (ya vista antes) para comprobar si la fecha es válida.

**Ejercicio 4.** Crea un procedimiento de nombre `utilitats_cambiarFormato` al que se le pase un dato en forma de cadena y devuelva **en el mismo parámetro** la cadena enviada cambiando las letras por números y separados por un guión. Para pasar de letra a número emplea la función `ORD`.

> **📌 Pista**
> 

> Para recorrer la cadena carácter a carácter puedes hacer uso de las funciones `LEFT` y `RIGHT` o de la función `SUBSTRING` además de la función `CHAR_LENGTH`. Ir con cuidado ya que la función `SUBSTRING`, en el parámetro *pos*, la primera posición de la cadena, empieza en **1**, no en 0.

**Ejercicio 5.** Crea un procedimiento de nombre `pistes_getSumAforo` que devuelva en forma de **parámetro de salida** la suma de los aforos de las pistas enviadas como parámetro. El formato de la lista de pistas es una única cadena: `'pista1,pista2,pista3,...'`.

> **📌 Pistas**
> 

> - Deberás, empleando la función `SUBSTRING` y `LOCATE`, descomponer el dato en cada una de las pistas y buscar el aforo de cada una de ellas, devolviendo la suma de los aforos de todas.

> - En caso de que alguna pista no exista, deberás mostrar la cadena `'La pista ZZZZZZ no existe'` por cada pista que no exista.

> - Debemos controlar que al menos siempre se envíe una pista. En caso contrario debe enviarse **-1** en el parámetro de salida (emplea la función `CHAR_LENGTH`).

**Ejercicio 6.** Crea un procedimiento de nombre `atraccions_getGananciasSupuestas` en el que se le pase como datos el nombre de una atracción y 2 números. Deberá mostrar los días en que se celebró la atracción junto con su número de espectadores y ganancia así como las ganancias que tendríamos si la entrada costara diferentes precios. Los precios deben variar **desde el primer número enviado hasta el segundo**, con una diferencia de **5 euros** entre ellos. Es decir, si envío los datos `'atraccion1',20,30` tendrá que mostrar qué ganancia tenemos con un precio de entrada de 20, 25 y 30 (hay que mostrar cada precio en una nueva consulta: una consulta mostrará `'atraccion1', 100, 3000` (estos serían los datos actuales), `20x100` (con un precio de 20 euros por entrada); la siguiente consulta debe mostrar lo mismo pero con `25x100` y la tercera consulta lo mismo pero `30x100`).

> **📌 Pistas**
> 

> - Debes controlar que los números enviados sean **múltiplos de 5** y que el **segundo es mayor que el primero**. Si no se cumplen las condiciones, debe mostrar un texto aclarando el error.

> - En caso de que la atracción **no exista** o que la atracción exista pero **no ha tenido representaciones**, también debe informar del error.

**Ejercicio 7.** Crea un procedimiento de nombre `utilitats_getNumImpares` al que se le pasen **tres números** y devuelva en forma de **parámetro de salida** cuántos números hay entre los dos primeros números que son divisibles por el tercero. Se deben **incluir los dos primeros números** a la hora de contar. No importa el orden en el que se envíen los dos primeros números.

> **📌 Ejemplo**
> 

> `5,1,2` → Busca los números múltiplos de 2 entre 1 y 5 (*incluidos*) → 2.
