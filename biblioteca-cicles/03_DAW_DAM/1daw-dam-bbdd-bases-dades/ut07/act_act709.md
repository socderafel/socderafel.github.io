---
layout: default
title: "Actividad Práctica ACT709 — 709 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./act_act708.html"
prev_label: "⬅️ ✏️ ACT708 708"
next_url: "../ut08/index.html"
next_label: "UD8 ➡️"
---

# **Actividad 709**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `709_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - El correcto uso de **`DECLARE ... CONDITION FOR`** para nombrar excepciones (por `Error Code` y por `SQLSTATE`).

> - El correcto uso de **`DECLARE ... HANDLER`** (`CONTINUE`/`EXIT`) para capturar excepciones.

> - El correcto uso de **`SIGNAL SQLSTATE '45000'`** para lanzar excepciones personalizadas (`MESSAGE_TEXT`, `MYSQL_ERRNO`).

> - La captura de excepciones y el envío de códigos al programa cliente (parámetros de salida o `SELECT`).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. j) Se han utilizado excepciones.

## **Excepciones - CIRCO**

Con la BBDD **CIRCO** facilitada (CIRCO.sql), crea y ejecuta un script `.sql` que realice los siguientes procedimientos.

**Ejercicio 1.** Crea un procedimiento de nombre `animales_Delete` que dado el **nombre de un animal**, lo borre. Antes tendrá que borrar todas las tablas relacionadas. En el caso de que el animal tenga **menos de 2 años** no estará permitido borrarlo y lanzará una excepción (recuerda que el código de error para excepciones definidas por el usuario es el **45000**) con el texto: *No es posible dar de baja a animales con menos de dos años*. En el caso de que el animal **no exista**, deberá lanzar una excepción con el texto `'Ese animal no existe'` y un **ErrorCode 1643**.

> **📌 Nota**
> 

> Fíjate que este procedimiento borra los datos de varias tablas, por lo que necesitaríamos hacer uso de una **transacción** (como veremos en la siguiente sección de la Wiki).

> **📌 Pista**
> 

> `SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '...', MYSQL_ERRNO = 1643;`

**Ejercicio 2.** Crea un procedimiento de nombre `animales_addArtista` al que se le pase el **nombre de un animal** y el **nif de un artista** y asigne el cuidador al animal. Deberá comprobar que el **animal y el artista existen**. En caso de que no, deberá lanzar una excepción con el **ErrorCode 1643** y texto `'El animal no existe'` o `'El artista no existe'`.

**Ejercicio 3.** Crea un procedimiento de nombre `animales_add` que **añade un nuevo animal**. En caso de intentar dar de alta un animal con el **mismo nombre**, captura la excepción y haz que el procedimiento devuelva (con un `SELECT`) **-1**. En caso de que el alta sea correcta, que devuelva **0**. En el caso de que el nombre de la **pista o de la atracción no exista**, captura la excepción y devuelve el valor **-2**.

> **📌 Pistas**
> 

> - Trabaja con **nombres de excepciones** en vez de con los números asociados: `ex_claveDuplicada`, `ex_pista_atracc_no_existe`.

> - Para saber el número de excepción que tienes que capturar, **provoca el fallo y anota el número**.

> **📌 Nota**
> 

> Este procedimiento está pensado para llamarlo desde un programa cliente (con Java, C#, ...) que guarde el valor del `SELECT` y, en base a dicho valor, avise al usuario. Si quisiéramos emplearlo como parte de un guión en MySQL necesitaríamos que fuera una **función** para poder guardar el valor de retorno o emplear un **parámetro de salida**.

**Ejercicio 4.** Crea un procedimiento de nombre `artistas_add` que **añade un nuevo artista**. Se debe comprobar si el **nif existe**. Esta comprobación se hará **capturando la excepción correspondiente**. En caso de error, se mandará en un **parámetro de salida** el valor **-1**. Si todo está correcto se mandará el valor **0**.

> **📌 Pistas**
> 

> - Crea un nombre de excepción: `ex_artista_duplicado`.

> - **Atención**: la tabla `ARTISTAS` tiene un trigger (ejercicio 6) para evitar que se añada un jefe que no exista, lo cambia por el valor `NULL`. Como ampliación a este ejercicio podéis borrar y capturar la excepción de que el jefe no exista (clave foránea no válida).

> - Junto a los datos del artista se debe enviar el **nombre de un animal** (debe estar previamente dado de alta) que va a cuidar el artista.

> - Se debe llamar al método `animales_addArtista` (creado previamente) y **capturar la posible excepción** que lance dicho método empleando el `SQLSTATE`. Si el animal no existe debe enviar en el parámetro de salida el valor **-2**.

> - Crea un nombre de excepción: `ex_animal_no_existe`. **Cualquier excepción** que se produzca debe hacer que se **salga del procedimiento**.

> - Llama al método y comprueba el valor del parámetro de salida en cada caso.

> **📌 Nota**
> 

> Fíjate que este método es un candidato para realizar una **transacción** ya que va a afectar a dos tablas (va a añadir dos filas).
