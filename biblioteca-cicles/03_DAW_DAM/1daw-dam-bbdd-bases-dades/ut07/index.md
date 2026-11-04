---
layout: default
title: "UD7: Programación de Bases de Datos — Procedimientos, Funciones, Triggers y Cursores — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "../ut06/index.html"
prev_label: "⬅️ UD6"
next_url: "../ut08/index.html"
next_label: "UD8 ➡️"
---

# UD7: Programación de Bases de Datos — Procedimientos, Funciones, Triggers y Cursores

Bienvenido/a a la **UD7: Programación de Bases de Datos — Procedimientos, Funciones, Triggers y Cursores** del módulo profesional de **Bases de Datos** (1º DAW / DAM / ASIX · Bases de Datos).

En esta unidad encontrarás los contenidos teóricos, ejemplos prácticos, ejercicios resueltos y actividades de evaluación curricular desarrollados por el profesor **Manuel Alonso Argente**.

---

### 📑 Índice de Apartados y Actividades de la Unidad

- [**📋 7.0 Propuesta Didáctica: Programación de BBDD**](./ut0700.html)
- [**7.1 Guiones**](./ut0701.html)
- [**7.2 Variables**](./ut0702.html)
- [**7.3 Procedimientos almacenados**](./ut0703.html)
- [**7.4 Sentencias Prepared**](./ut0704.html)
- [**7.5 Control de Flujos**](./ut0705.html)
- [**7.6 Eventos**](./ut0706.html)
- [**7.7 Triggers**](./ut0707.html)
- [**7.8 Cursores**](./ut0708.html)
- [**7.9 Funciones**](./ut0709.html)
- [**7.10 Gestión de excepciones**](./ut0710.html)

**Actividades Prácticas y Fichas de Trabajo:**

- [**✏️ ACT701 701**](./act_act701.html)
- [**✏️ ACT702 702**](./act_act702.html)
- [**✏️ ACT703 703**](./act_act703.html)
- [**✏️ ACT704 704**](./act_act704.html)
- [**✏️ ACT705 705**](./act_act705.html)
- [**✏️ ACT706 706**](./act_act706.html)
- [**✏️ ACT707 707**](./act_act707.html)
- [**✏️ ACT708 708**](./act_act708.html)
- [**✏️ ACT709 709**](./act_act709.html)

---

# 📖 Vista Completa de la Unidad

## 7.0 Propuesta Didáctica — Programación de BBDD

# **Programación de BBDD**

## **Propuesta didáctica**

En esta unidad vamos a trabajar el RA5:
**"Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos"**.

## **Criterios de evaluación**

### **Respecto al RA5**:

| Código | Descripción | Peso (%) | Herramientas Evaluación |
| --- | --- | --- | --- |
| **CA5a** | Se han identificado las diversas maneras de automatizar tareas. | 5% | ACT701 (10%) -- ACT702 (10%) -- ACT703 (10%) -- ACT704 (10%) -- EXA0701 (60%) |
| **CA5b** | Se han reconocido los métodos de ejecución de guiones. | 5% | ACT701 (10%) -- ACT702 (10%) -- ACT703 (10%) -- ACT704 (10%) -- EXA0701 (60%) |
| **CA5c** | Se han identificado las herramientas disponibles para editar guiones. | 5% | ACT701 (10%) -- ACT702 (10%) -- ACT703 (10%) -- ACT704 (10%) -- EXA0701 (60%) |
| **CA5d** | Se han definido y utilizado guiones para automatizar tareas. | 10% | ACT701 (10%) -- ACT702 (10%) -- ACT703 (10%) -- ACT704 (10%) -- EXA0701 (60%) |
| **CA5e** | Se ha hecho uso de las funciones proporcionadas por el sistema gestor. | 10% | ACT701 (10%) -- ACT702 (10%) -- ACT703 (10%) -- ACT704 (10%) -- EXA0701 (60%) |
| **CA5f** | Se han definido procedimientos y funciones de usuario. | 15% | ACT701 (10%) -- ACT702 (10%) -- ACT703 (10%) -- ACT704 (10%) -- ACT708 (10%) -- EXA0701 (50%) |
| **CA5g** | Se han utilizado estructuras de control de flujo. | 15% | ACT704 (40%) -- EXA0701 (60%) |
| **CA5h** | Se han definido acontecimientos y disparadores. | 15% | ACT705 (20%) -- ACT706 (20%) -- EXA0701 (60%) |
| **CA5i** | Se han utilizado cursores. | 10% | ACT707 (40%) -- EXA0701 (60%) |
| **CA5j** | Se han utilizado excepciones. | 10% | ACT709 (40%) -- EXA0701 (60%) |

## **Contenidos**

### **Programación de BBDD**:

- Guiones. Variables de sesión y variables locales.

- Procedimientos almacenados. Parámetros `IN`, `OUT` e `INOUT`.

- Sentencias preparadas (`PREPARE`, `EXECUTE`, `DEALLOCATE`).

- Estructuras de control de flujo: `IF`, `CASE`, `WHILE`, `LOOP`, `REPEAT`.

- Acontecimientos (eventos).

- Disparadores (triggers). Tablas `OLD` y `NEW`.

- Cursores.

- Funciones de usuario.

- Gestión de excepciones.

> **📌 Cuestionario inicial**
> 

> 1. ¿Qué es un guión SQL? ¿Para qué sirve?

> 1. ¿Qué diferencia hay entre una variable de sesión y una variable local?

> 1. ¿Qué es un procedimiento almacenado? ¿Qué ventajas tiene?

> 1. ¿Qué tipos de parámetros puede tener un procedimiento (`IN`, `OUT`, `INOUT`)?

> 1. ¿Qué es una sentencia preparada? ¿Para qué sirve?

> 1. ¿Qué estructuras de control de flujo conoces de otros lenguajes de programación?

> 1. ¿Qué es un acontecimiento (evento) en MySQL?

> 1. ¿Qué es un disparador (trigger)? ¿Qué diferencia hay entre `BEFORE` y `AFTER`?

> 1. ¿Qué es un cursor? ¿Cuándo es necesario utilizarlo?

> 1. ¿Qué es una excepción? ¿Cómo se puede lanzar una excepción personalizada en MySQL?

## **Programación de Aula (22 sesiones)**

Esta unidad es la séptima y se imparte a lo largo de febrero y marzo de 2027, con una duración estimada de 22 sesiones lectivas:

### **Febrero 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | **2** | **3** | **4** | **5** | **6 🛑** | **7 🛑** |
| **8** | **9** | **10** | **11** | **12** | **13 🛑** | **14 🛑** |
| **15** | **16 📚** | **17 📚** | **18** | **19 📚** | **20 🛑** | **21 🛑** |
| **22** | **23 📚** | **24 📚** | **25** | **26 📚** | **27 🛑** | **28 🛑** |

### **Marzo 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | **2 📚** | **3 📚** | **4** | **5 📚** | **6 🛑** | **7 🛑** |
| **8** | **9 📚** | **10 📚** | **11** | **12 📚** | **13 🛑** | **14 🛑** |
| **15** | **16 📚** | **17 🛑** | **18 🛑** | **19 🛑** | **20 🛑** | **21 🛑** |
| **22** | **23** | **24** | **25** | **26** | **27 🛑** | **28 🛑** |
| **29** | **30** | **31** |  |  |  |  |

| Sesión | Contenidos | Actividades | Criterios trabajados |
| --- | --- | --- | --- |
| 1 | Guiones -- Variables de sesión y locales |  | CA5a, CA5b, CA5c, CA5d |
| 2 | Procedimientos |  | CA5d, CA5e, CA5f |
| 3 | Actividades | ACT701 | CA5a, CA5b, CA5c, CA5d, CA5e, CA5f |
| 4 | Sentencias preparadas -- ACT703 |  | CA5d, CA5e, CA5f |
| 5 | Actividades | ACT702 | CA5d, CA5e, CA5f |
| 6 | Control de flujos |  | CA5g |
| 7 | Actividades | ACT704 | CA5d, CA5e, CA5f, CA5g |
| 8 | Acontecimientos (Eventos) |  | CA5h |
| 9 | Actividades | ACT705 | CA5h |
| 10 | Disparadores (Triggers) |  | CA5h |
| 11 | Actividades | ACT706 | CA5h |
| 12 | Cursores |  | CA5i |
| 13 | Actividades | ACT707 | CA5i |
| 14 | Funciones de usuario |  | CA5f |
| 15 | Actividades | ACT708 | CA5f |
| 16 | Gestión de excepciones |  | CA5j |
| 17 | Actividades | ACT709 | CA5j |
| 18 | Actividades | ACT701 -- ACT702 -- ACT703 -- ACT704 -- ACT705 -- ACT706 -- ACT707 -- ACT708 -- ACT709 | CA5a, CA5b, CA5c, CA5d, CA5e, CA5f, CA5g, CA5h, CA5i, CA5j |
| 19 | Actividades | ACT701 -- ACT702 -- ACT703 -- ACT704 -- ACT705 -- ACT706 -- ACT707 -- ACT708 -- ACT709 | CA5a, CA5b, CA5c, CA5d, CA5e, CA5f, CA5g, CA5h, CA5i, CA5j |
| 20 | Examen | EXA0701 | CA5a, CA5b, CA5c, CA5d, CA5e, CA5f, CA5g, CA5h, CA5i, CA5j |
| 21 | Examen | EXA0701 | CA5a, CA5b, CA5c, CA5d, CA5e, CA5f, CA5g, CA5h, CA5i, CA5j |
| 22 | Examen | EXA0701 | CA5a, CA5b, CA5c, CA5d, CA5e, CA5f, CA5g, CA5h, CA5i, CA5j |

---

## 7.1 Guiones

# **Guiones**

Los **guiones** (*scripts*) son un conjunto de instrucciones empleando el lenguaje de programación que incorpora el gestor relacional y que tiene como principal diferencia respecto a otros lenguajes que **podremos hacer uso de órdenes SQL como parte de su código**.

> **📌 Contenido de un guión**
> 

> Un guión puede contener, entre otras instrucciones:

> - **Consultas**.

> - **Procedimientos**.

> - **Funciones**.

> - Operaciones de **manipulación de datos** (`INSERT`, `UPDATE`, `DELETE`).

> - Órdenes SQL asociadas a los **permisos y seguridad**.

> - Conjuntos de instrucciones SQL que pueden incorporar alguna de las anteriores.

## **Lenguajes de programación según el gestor**

Cada gestor de bases de datos relacional dispone de su propio lenguaje de programación:

| Gestor | Lenguaje |
| --- | --- |
| **Oracle** | **PL-SQL** (*Procedural Language – Structured Query Language*) |
| **SQL Server** | **T-SQL** (*Transact-SQL*) |
| **PostgreSQL** | **PgSQL** (*Postgres SQL*) |
| **MySQL** | Conjunto de instrucciones propias |

> **📌 Resumen**
> 

> - Un **guión** es un conjunto de instrucciones del lenguaje del gestor que puede mezclar sentencias SQL.

> - Se utilizan para **automatizar tareas** repetitivas en la base de datos.

> - Cada gestor tiene su propio lenguaje: PL-SQL (Oracle), T-SQL (SQL Server), PgSQL (PostgreSQL) e instrucciones propias (MySQL).

---

## 7.2 Variables

# **Variables**

Como en cualquier otro lenguaje de programación, tendremos la posibilidad de hacer uso de las **variables**. La diferencia con respecto a los *lenguajes tradicionales* es que podemos utilizar estas variables para **guardar resultados de consultas SQL** o utilizarlas como **datos a enviar a órdenes SQL** como `INSERT`, `UPDATE`, ...

En **MySQL** debemos considerar dos casos cuando utilizamos variables:

- Las utilizamos con un conjunto de instrucciones que guardaremos en un **archivo con extensión `.sql`**.

- Las utilizamos dentro de un **procedimiento almacenado, función o trigger**.

## **Variables en un fichero de código SQL (variables de usuario)**

Este tipo de variables son referenciadas por MySQL como **Variables de usuario** (*User-Defined Variables*).

Sus características principales:

- **No es necesario declararlas** y las podemos utilizar directamente.

- Comienzan con el símbolo **`@`**.

- Para asignarles un valor empleamos la orden **`SET`** o **`INTO`**.

- A estas variables se les denomina **variables de sesión**.

> **📌 Ejemplo. Asignar valor a una variable de sesión**
> 

```sql
SET @nombre = 'Joan';
SELECT @nombre;                  -- Mostrará el valor de la variable Joan

SELECT anhos
INTO @anhos
FROM animales
WHERE nombre = 'Caiman';
SELECT @anhos;                  -- Mostrará el valor de la variable 1
```

### **Asignar valor a múltiples variables**

También podemos dar valor a múltiples variables:

> **📌 Ejemplo. Múltiples variables**
> 

```sql
SELECT anhos, peso
INTO @anhos, @peso
FROM animales
WHERE nombre = 'Caiman';
SELECT @anhos, @peso;          -- Mostrará el valor de la variable 1 y 71
```

Podemos hacer uso de las **funciones integradas** en el gestor para realizar cualquier modificación a los datos de las variables y después hacer uso en otras instrucciones:

> **📌 Ejemplo. Usar funciones con variables**
> 

```sql
SELECT nombre, apellidos
INTO @nombre, @apellidos
FROM artistas
WHERE nif = '11111111A';

SET @nombre_completo = CONCAT(@apellidos, ',', @nombre);
SELECT @nombre_completo;      -- Mostrará Lopez,Juan
```

### **Uso de variables en consultas e INSERTS**

Se puede hacer uso de **filtros** y de las variables en los `INSERT` o `UPDATE`:

> **📌 Ejemplo. Variables como filtro y en un INSERT**
> 

```sql
SELECT AVG(peso)
INTO @peso_medio
FROM animales;

SELECT *
FROM animales
WHERE peso > @peso_medio;

SELECT nombre
INTO @nombreAnimalSinArtista
FROM animales
WHERE nombre NOT IN (SELECT nombre_animal
                     FROM animales_artistas);

INSERT INTO animales_artistas
VALUES (@nombreAnimalSinArtista, '11111111A');
```

### **Características de las variables de sesión**

Las variables de sesión tienen que cumplir las siguientes características:

- Empezar su nombre con el símbolo **`@`**, por ejemplo: `@nom`.

- Pueden incluir cualquier **carácter alfanumérico**.

- Pueden incluir los símbolos: **`.`**, **`_`**, **`$`**.

- Pueden incluir otro tipo de símbolos (incluido el espacio en blanco) a condición de que se escriba el nombre de la variable entre comillas: `@'my var'`, `@'my-var'`, `@"my-var"`.

- **No se distinguen mayúsculas de minúsculas**.

- Longitud máxima: **64 caracteres**.

## **Variables locales en procedimientos, funciones o triggers**

Las **variables locales** son las que utilizaremos dentro de las estructuras de procedimientos, funciones o triggers. A diferencia de las variables de sesión, **solo están disponibles dentro de las estructuras**.

Para definirlas haremos uso del `DECLARE`:

```sql
DECLARE nombreVar tipoDato [DEFAULT valor_por_defecto];
```

A diferencia de las variables de usuario:

- El nombre de las variables **no empieza por `@`**.

- Se debe declarar un **tipo asociado** a la variable.

- Si no se inicializan, el valor de estas variables **por defecto es nulo**.

> **📌 Ejemplo. Declaración de una variable local**
> 

```sql
DECLARE numDepts INT DEFAULT 0;
```

> **📌 Resumen**
> 

> - En un fichero `.sql` se usan **variables de sesión** (`@variable`), que no necesitan declaración.

> - Para asignar valor se emplean las órdenes `SET` o `SELECT ... INTO`.

> - Dentro de procedimientos, funciones o triggers se usan **variables locales** declaradas con `DECLARE` y con un tipo de dato asociado.

---

## 7.3 Procedimientos almacenados

# **Procedimientos almacenados**

Un **procedimiento almacenado** es un recurso que incorporan todos los gestores relacionales y que permite **asociar un nombre** (el nombre del procedimiento) a un **conjunto de instrucciones SQL**.

Cada vez que se **llame al procedimiento**, se ejecutan todas las instrucciones.

A diferencia de un método en programación orientada a objetos, podremos emplear **instrucciones SQL** que serán ejecutadas directamente en el gestor.

> **📌 ¿Por qué usar procedimientos?**
> 

> El uso de procedimientos almacenados nos proporcionará:

> - **Más rapidez**: la ejecución se realiza en la capa de BBDD, sin transformaciones de cliente a servidor.

> - **Más simplicidad en la seguridad**: podemos especificar quién tiene permiso para ejecutar el procedimiento.

> - **Más seguridad**: el uso de procedimientos con parámetros evita acciones que comprometan la seguridad, como la **inyección de código** en formularios.

> - **Estándar**: existe un único lugar centralizado (el gestor de base de datos) donde se encuentran todos los procedimientos, evitando duplicidades de código.

> - **Velocidad**: como el código ya está en el servidor, los clientes solo envían los datos que necesitan los procedimientos.

## **Crear un procedimiento**

> **📌 Sintaxis**
> 

```sql
CREATE
[DEFINER = user]
PROCEDURE [IF NOT EXISTS] sp_name ([proc_parameter[,...]])
[characteristic ...] routine_body

proc_parameter:
    [ IN | OUT | INOUT ] param_name type

type:
    Any valid MySQL data type

characteristic: {
    COMMENT 'string'
    | LANGUAGE SQL
    | [NOT] DETERMINISTIC
    | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
    | SQL SECURITY { DEFINER | INVOKER }
}

routine_body:
    Valid SQL routine statement
```

- Como mínimo debemos indicar un **nombre** para el procedimiento y un conjunto de órdenes SQL entre las palabras clave `BEGIN` y `END`.

- Un procedimiento se crea dentro de una **base de datos concreta**.

- Entre las cláusulas que podemos emplear dentro del `CREATE PROCEDURE` estaría **`COMMENT`**, que nos sirve para documentar cuál es el objeto del procedimiento.

> **📌 Estructura básica**
> 

```sql
USE BD;
DELIMITER $$
CREATE PROCEDURE nombreProc()
COMMENT 'Objetivo del procedimiento'
BEGIN
    -- Instrucciones SQL a ejecutar dentro del procedimiento
END$$
DELIMITER ;
```

### **El DELIMITER**

La primera instrucción de un procedimiento almacenado en MySQL es la orden SQL **`DELIMITER`**:

> **📌 Ejemplo. Primer procedimiento**
> 

```sql
USE CIRCO;
DELIMITER $$
CREATE PROCEDURE animales_getList()
BEGIN
    SELECT nombre
    FROM ANIMALES
    ORDER BY nombre;
END$$
DELIMITER ;
```

MySQL usa como **delimitador de sentencias SQL el punto y coma** por defecto. Quiere decir que cada vez que encuentra un punto y coma intenta ejecutar la orden SQL. El procedimiento almacenado se ve como un **todo**, como si fuera una única instrucción que MySQL ejecute entera, por eso cambiamos temporalmente el delimitador a `$$`.

## **Otras operaciones**

| Operación | Orden SQL |
| --- | --- |
| Llamar a un procedimiento | `CALL CIRCO.animales_getList();` |
| Listar procedimientos | `SHOW PROCEDURE STATUS WHERE Db = 'CIRCO';` |
| Visualizar el código de un procedimiento | `SHOW CREATE PROCEDURE animales_getList;` |
| Modificar un procedimiento | `ALTER PROCEDURE animales_getList COMMENT 'Obtiene un listado de todos los animales';` |
| Borrar un procedimiento | `DROP PROCEDURE IF EXISTS nombre_proc;` |

## **Ejercicios resueltos**

### **Ejercicio 1**

Crea un procedimiento de nombre `artistas_getList()` que devuelva el nombre y apellidos de los artistas separados por coma con el formato: `apellidos,nombre` ordenados de manera descendente.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS artistas_getList;
DELIMITER $$
CREATE PROCEDURE artistas_getList()
COMMENT 'Devuelve el nombre completo de todos los artistas ordenado descendentemente'
BEGIN
    SELECT CONCAT(apellidos, ',', nombre) AS nombreCompleto
    FROM ARTISTAS
    ORDER BY nombreCompleto DESC;
END$$
DELIMITER ;
```

### **Ejercicio 2**

Crea un procedimiento de nombre `artistas_getListAnimales()` que devuelva los nombres de los artistas junto con su nif así como el nombre y peso de los animales que están atendidos por los artistas, ordenados por nif del artista y nombre del animal.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS artistas_getListAnimales;
DELIMITER $$
CREATE PROCEDURE artistas_getListAnimales()
COMMENT 'Devuelve el nombre, apellidos y nif de los artistas junto con el nombre y peso de los animales que atienden'
BEGIN
    SELECT nif, apellidos, ARTISTAS.nombre AS nombreArtista, ANIMALES.nombre AS nombreAnimal, peso
    FROM ARTISTAS
    INNER JOIN ANIMALES_ARTISTAS ON (ANIMALES_ARTISTAS.nif_artista = ARTISTAS.nif)
    INNER JOIN ANIMALES ON (ANIMALES_ARTISTAS.nombre_animal = ANIMALES.nombre)
    ORDER BY nif, nombreAnimal;
END$$
DELIMITER ;
```

### **Ejercicio 3**

Crea un procedimiento de nombre `atraccions_getListConAntiguedad5()` que devuelva los datos de las atracciones que hayan comenzado hace 5 años respecto a la fecha actual. Tendrás que hacer uso de alguna de las **funciones Time**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_getListConAntiguedad5;
DELIMITER $$
CREATE PROCEDURE atracciones_getListConAntiguedad5()
COMMENT 'Devuelve todos los datos de las atracciones que comenzaron hace 5 años con respecto a la fecha actual'
BEGIN
    SELECT *
    FROM ATRACCIONES
    WHERE fecha_inicio BETWEEN DATE_SUB(curdate(), INTERVAL 5 YEAR) AND curdate()
    ORDER BY nombre;
END$$
DELIMITER ;
```

### **Ejercicio 4**

Crea un procedimiento de nombre `animals_Leo_getPista()` que muestre los datos de la pista donde trabaja el animal de nombre `'Leo'`. Hacerlo empleando una **variable local** que guarde el nombre de la pista y después consultar los datos de la pista utilizando esta variable local.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_Leo_getPista;
DELIMITER $$
CREATE PROCEDURE animales_Leo_getPista()
COMMENT 'Devuelve los datos de la pista donde trabaja el animal de nombre Leo'
BEGIN
    DECLARE v_nombrePista VARCHAR(50) DEFAULT ''; -- El tipo y tamaño debe de coincidir con el declarado en la tabla.

    SELECT nombre_pista INTO v_nombrePista
    FROM ANIMALES WHERE nombre = 'Leo';

    SELECT * -- Devuelve una única fila. No hace falta order by
    FROM PISTAS
    WHERE nombre = v_nombrePista;
END$$
DELIMITER ;
```

### **Ejercicio 5**

Crea un procedimiento de nombre `atraccions_getUltima()` que obtenga los datos de la última atracción celebrada (tabla `ATRACCION_DIA`), empleando variables locales. Ten en cuenta limitar con `LIMIT` el número de filas que devuelva una consulta si no sabes con certeza que vaya a devolver una única fila y guardarás los datos en una variable.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_getUltima;
DELIMITER $$
CREATE PROCEDURE atracciones_getUltima()
COMMENT 'Devuelve los datos de la última atracción celebrada'
BEGIN
    DECLARE v_nombreAtraccion VARCHAR(50) DEFAULT '';

    SELECT nombre_atraccion INTO v_nombreAtraccion
    FROM ATRACCION_DIA
    ORDER BY fecha DESC LIMIT 1;

    SELECT *
    FROM ATRACCIONES
    WHERE nombre = v_nombreAtraccion;
END$$
DELIMITER ;
```

### **Ejercicio 6**

Crea un procedimiento de nombre `atraccions_getArtistaUltima()` que obtenga los datos de la atracción y del artista que trabaja en esta atracción, cuya fecha de inicio ha comenzado más tarde. Emplea **dos variables**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_getArtistaUltima;
DELIMITER $$
CREATE PROCEDURE atracciones_getArtistaUltima()
COMMENT 'Devuelve los datos de la atracción y del artista que trabaja en dicha atracción, cuya fecha de inicio es más tardía'
BEGIN
    DECLARE v_nombreAtraccion VARCHAR(50) DEFAULT '';
    DECLARE v_nifArtista CHAR(9);

    SELECT nombre_atraccion, nif_artista INTO v_nombreAtraccion, v_nifArtista
    FROM ATRACCIONES_ARTISTAS
    ORDER BY fecha_inicio DESC LIMIT 1;

    SELECT *
    FROM ATRACCIONES, ARTISTAS
    WHERE ATRACCIONES.nombre = v_nombreAtraccion
      AND ARTISTAS.nif = v_nifArtista;
END$$
DELIMITER ;
```

## **Parámetros**

Cada uno de los datos que enviamos o nos devuelve un procedimiento almacenado se denomina **parámetro**:

- **Parámetros de entrada (`IN`)**: variables cuyo valor se utiliza dentro del procedimiento. Es el tipo por defecto.

- **Parámetros de salida (`OUT`)**: parámetros utilizados por el procedimiento para *informar* a quien llama, asignándoles un valor dentro del procedimiento que será utilizado posteriormente por quien realizó el llamamiento.

- **Parámetros de entrada/salida (`INOUT`)**: pueden llevar información al procedimiento, ser modificados dentro de él y ser utilizados por quien realizó la llamada.

### **Definición e invocación**

> **📌 Sintaxis e invocación**
> 

```sql
DELIMITER $$
CREATE PROCEDURE nombre_proc (IN nombre_parametro tipo_dato)
BEGIN
END $$
DELIMITER ;

-- Invocación con un valor literal
CALL nombre_proc(100);

-- Invocación con una variable de sesión
SET @dato = 100;
CALL nombre_proc(@dato);
```

> **📌 Tipos de datos de los parámetros**
> 

> Los parámetros deben tener el **mismo tipo de dato y tamaño** que el definido a nivel de columnas en las tablas. No hace falta poner un `int`, podemos usar `tinyint`, `smallint`, `char(9)`, `varchar(50)`, ...

### **Ejercicios resueltos con parámetros**

#### **Ejercicio 1**

Crea un procedimiento de nombre `artistas_getAnimalesPorNif` que devuelva a los animales que cuida un artista. Llevará como parámetro el **nif de artista**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS artistas_getAnimalesPorNif;
DELIMITER $$
CREATE PROCEDURE artistas_getAnimalesPorNif(p_nif CHAR(9))
COMMENT 'Devuelve los animales que cuida un artista. Llevará como parámetro el nif de artista.'
BEGIN
    SELECT DISTINCT ANIMALES.*
    FROM ANIMALES
    INNER JOIN ANIMALES_ARTISTAS ON (ANIMALES.nombre = ANIMALES_ARTISTAS.nombre_animal)
    WHERE ANIMALES_ARTISTAS.nif_artista = p_nif
    ORDER BY nombre;
END$$
DELIMITER ;

CALL artistas_getAnimalesPorNif('11111111A');
CALL artistas_getAnimalesPorNif('22222222B');
SET @nifBuscar = '44444444D';
CALL artistas_getAnimalesPorNif(@nifBuscar);
```

#### **Ejercicio 2**

Crea un procedimiento de nombre `artistas_getAnimalesPorNombreApel` que devuelva a los animales que cuida un artista. Llevará como parámetro el **nombre y apellidos** del artista. Supongamos que el nombre y apellidos conforman una clave alternativa.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS artistas_getAnimalesPorNombreApel;
DELIMITER $$
CREATE PROCEDURE artistas_getAnimalesPorNombreApel(p_nombre VARCHAR(45), p_apellidos VARCHAR(100))
COMMENT 'Devuelve los animales que cuida un artista. Llevará como parámetro el nombre y apellidos del artista'
BEGIN
    DECLARE v_nifArtista CHAR(9); -- Si no ponemos valor por defecto vale NULL

    SELECT nif INTO v_nifArtista
    FROM ARTISTAS
    WHERE apellidos = p_apellidos
      AND nombre = p_nombre; -- LIMIT 1: habría que ponerlo para poder emplear INTO en el caso de que hubiera varias personas con el mismo nombre y apellidos

    SELECT DISTINCT ANIMALES.*
    FROM ANIMALES INNER JOIN ANIMALES_ARTISTAS ON (ANIMALES.nombre = ANIMALES_ARTISTAS.nombre_animal)
    WHERE ANIMALES_ARTISTAS.nif_artista = v_nifArtista
    ORDER BY nombre;
END$$
DELIMITER ;

CALL artistas_getAnimalesPorNombreApel('Luis', 'Sanchez');
```

#### **Ejercicio 3**

Crea un procedimiento de nombre `atraccions_getListConAntiguedad` que devuelva los datos de las atracciones que hayan comenzado hace un **número de años** respecto a la fecha actual.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_getListConAntiguedad;
DELIMITER $$
CREATE PROCEDURE atracciones_getListConAntiguedad(p_antiguedad TINYINT) -- Fijarse en el tipo. No hace falta poner un int.
COMMENT 'Devuelve los datos de las atracciones que hayan comenzado hace un número de años con respecto a la fecha actual.'
BEGIN
    SELECT *
    FROM ATRACCIONES
    WHERE fecha_inicio BETWEEN DATE_SUB(curdate(), INTERVAL p_antiguedad YEAR) AND curdate()
    ORDER BY nombre;
END$$
DELIMITER ;

CALL atracciones_getListConAntiguedad(4);
CALL atracciones_getListConAntiguedad(20);
```

#### **Ejercicio 4**

Crea un procedimiento de nombre `artistas_getListMasAnimalesCuida` que devuelva los datos del/los artista/s que cuidan a **más animales de los indicados** (parámetro que se le envía).

> **📌 Pista**
> 

> Como la consulta puede devolver más de un artista **no podremos hacer uso de `INTO`**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS artistas_getListMasAnimalesCuida;
DELIMITER $$
CREATE PROCEDURE artistas_getListMasAnimalesCuida(p_numAnimales TINYINT)
COMMENT 'Devuelve los datos del/os artista/s que cuidan a más animales de los indicados.'
BEGIN
    SELECT *
    FROM ARTISTAS
    WHERE nif IN (SELECT nif_artista
                  FROM ANIMALES_ARTISTAS
                  GROUP BY nif_artista
                  HAVING COUNT(*) > p_numAnimales)
    ORDER BY nif;
END$$
DELIMITER ;

CALL artistas_getListMasAnimalesCuida(2);
```

#### **Ejercicio 5**

Crea un procedimiento de nombre `atraccions_getListPorFecha` que devuelva los datos de las atracciones que han comenzado **a partir de la fecha indicada**.

> **📌 Pista**
> 

> Recordar que las **fechas son tratadas como cadenas**, y tener en cuenta el formato (`aaaa-mm-dd`).

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_getListPorFecha;
DELIMITER $$
CREATE PROCEDURE atracciones_getListPorFecha(p_fecha CHAR(10)) -- Formato aaaa-mm-dd
COMMENT 'Devuelve los datos de las atracciones que han comenzado a partir de la fecha indicada.'
BEGIN
    SELECT *
    FROM ATRACCIONES
    WHERE fecha_inicio > p_fecha
    ORDER BY nombre;
END$$
DELIMITER ;

CALL atracciones_getListPorFecha('2020-01-03');
```

#### **Ejercicio 6**

Crea un procedimiento de nombre `pistas_add` que añada una nueva pista.

> **📌 Pistas**
> 

> - Todavía no hemos visto la validación de datos que debería darse en el paso de parámetros (podríamos tener condiciones `IF` en el que se compruebe si el aforo es mayor que cero).

> - Se puede hacer uso de la función `ROW_COUNT()` para saber cuántas filas fueron añadidas, borradas o modificadas.

> - **Importante**: los parámetros deben tener el **mismo tipo de dato y tamaño** que el definido a nivel de columnas en la tabla `PISTAS`.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS pistas_add;
DELIMITER $$
CREATE PROCEDURE pistas_add(p_nombre VARCHAR(50), p_aforo SMALLINT)
COMMENT 'Añade una nueva pista'
BEGIN
    INSERT INTO PISTAS (nombre, aforo) -- Mejor poner las columnas, ya que si modificamos la estructura de la tabla, la orden sigue funcionando
    VALUES (p_nombre, p_aforo);
    SELECT ROW_COUNT();
END$$
DELIMITER ;

CALL pistas_add('El gran misil', 134);
```

#### **Ejercicio 7**

Crea un procedimiento de nombre `atraccions_update` que permita modificar los datos de una atracción (no se permite actualizar su clave primaria).

> **📌 Pistas**
> 

> - Deberás guardar las **ganancias y la fecha de inicio** que tiene para poder enviar estos datos al procedimiento.

> - Comprueba cómo al llamar al método con una atracción que no existe, `ROW_COUNT()` devolverá 0.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_update;
DELIMITER $$
CREATE PROCEDURE atracciones_update(p_nombre VARCHAR(50), p_fecha DATE, p_ganancias DECIMAL(8,2))
COMMENT 'Modifica una atracción'
BEGIN
    UPDATE ATRACCIONES SET fecha_inicio = p_fecha, ganancias = p_ganancias
    WHERE nombre = p_nombre;
    SELECT ROW_COUNT();
END$$
DELIMITER ;

SELECT ganancias, fecha_inicio INTO @ganancias, @fecha_inicio
FROM ATRACCIONES
WHERE nombre = 'El gran felino';

CALL atracciones_update('El gran felino', DATE_ADD(@fecha_inicio, INTERVAL 1 DAY), @ganancias);
CALL atracciones_update('El gran felino_no_existe', '1890-01-03', 1000.34);
```

#### **Ejercicio 8**

Crea un procedimiento de nombre `pistas_delete` que borre una pista por su nombre. Haz que borre sobre la base del patrón `nombre%` (empleando el `LIKE`).

> **📌 Pista**
> 

> Emplea la función **`CONCAT`** para el `LIKE`.

> **📌 Solución**
> 

```sql
DELIMITER $$
CREATE PROCEDURE pistas_delete(IN nombre_inicio VARCHAR(100))
COMMENT 'Elimina la pista'
BEGIN
    DELETE FROM pistas
    WHERE nombre LIKE CONCAT(nombre_inicio, '%');
END $$
DELIMITER ;

CALL pistas_delete('El gran misil');
```

> **📌 Resumen**
> 

> - Un **procedimiento almacenado** asocia un nombre a un conjunto de instrucciones SQL que se ejecuta con `CALL`.

> - Se crea con `CREATE PROCEDURE` y, si tiene varias instrucciones, estas van entre `BEGIN` y `END` (cambiando el delimitador a `$$`).

> - Puede tener **parámetros** de entrada (`IN`), salida (`OUT`) o entrada/salida (`INOUT`).

> - Los parámetros deben coincidir en **tipo y tamaño** con las columnas de las tablas.

> - La función `ROW_COUNT()` informa de cuántas filas se vieron afectadas por la última operación.

---

## 7.4 Sentencias Prepared

# **Sentencias Prepared**

Este tipo de sentencias se basan en el concepto de que cuando un programa cliente realizará una operación SQL (`SELECT`, `INSERT`, ...) normalmente siempre ejecutará la **misma sentencia cambiando los datos** que se le envían al servidor.

Imaginemos que damos de alta a 10 empleados: deberíamos enviar 10 sentencias `INSERT` con los datos de cada uno, y el gestor debería analizar la sentencia por cada empleado. Con las sentencias *prepared*, **enviamos al servidor la sentencia SQL sin datos, con parámetros**. El gestor la analiza una sola vez para comprobar que no tiene problemas sintácticos y, una vez hecho, el cliente sólo debe enviar los datos que serán ejecutados por la sentencia.

Las ventajas son:

- Una **mayor velocidad de ejecución** porque las sentencias están pre-compiladas.

- Una **mayor seguridad**, ya que impide la inyección de código.

- La posibilidad de crear **sentencias SQL dinámicas**, es decir, construir la sentencia como si fuera una cadena a la que vamos añadiendo partes hasta tenerla completa y ejecutarla.

## **Proceso de uso**

El proceso para poder utilizar este tipo de sentencias es el siguiente, tanto si lo hacemos desde el cliente (php, java, ...) como desde un procedimiento almacenado:

1. **`PREPARE`**: definimos la sentencia SQL con parámetros que queremos ejecutar (por ejemplo, una sentencia `INSERT` lleva como parámetros los valores a añadir, o una sentencia `SELECT` lleva parámetros en la parte `WHERE`).

1. **`EXECUTE`**: para ejecutar la sentencia.

1. **Paso de datos** a los parámetros que están definidos en la sentencia anterior.

1. **`DEALLOCATE PREPARE`**: para liberar la memoria del servidor de la sentencia preparada.

## **Ejemplo I**

> **📌 Ejemplo básico**
> 

```sql
DELIMITER$$
SET @sentencia = 'SELECT * FROM TABLA WHERE col1=? AND col2=?';
PREPARE stPrepared FROM @sentencia; -- Preparamos la sentencia. El nombre stPrepared lo elegimos nosotros.

SET @valorParam1 = 2;      -- Usamos una variable para establecer el valor del parámetro 1
SET @valorParam2 = 'Angel';-- Usamos una variable para establecer el valor del parámetro 2

EXECUTE stPrepared USING @valorParam1, @valorParam2;

DEALLOCATE PREPARE stPrepared; -- Liberamos la memoria
END$$
DELIMITER ;
```

> **📌 Importante**
> 

> - En la sentencia `PREPARE` **sólo podemos emplear variables de sesión o literales**. No podemos emplear variables locales si estamos dentro de un procedimiento.

> - En la sentencia `EXECUTE ... USING` **sólo podremos utilizar variables de sesión**.

> - La sentencia `PREPARE` es **visible a nivel de sesión**: si no hacemos un `DEALLOCATE`, podríamos utilizarla en cualquier pestaña SQL de la conexión activa.

## **Ejemplo II. Sentencia SQL dinámica**

> **📌 Procedimiento con PREPARE**
> 

```sql
USE CIRCO;
DELIMITER $$
CREATE PROCEDURE animales_getListPorFiltro (p_nombreColum VARCHAR(20), p_operacion CHAR(2), p_valorParam VARCHAR(10))
COMMENT 'Devuelve todos los animales que cumplan la condición que se le va a pasar como parámetro.'
BEGIN
    SET @v_consulta = CONCAT('SELECT * FROM ANIMALES WHERE ', p_nombreColum, p_operacion, '?');
    SET @v_valor = p_valorParam;

    PREPARE prepConsulta FROM @v_consulta;
    EXECUTE prepConsulta USING @v_valor;
    DEALLOCATE PREPARE prepConsulta;
END $$
DELIMITER ;

CALL animales_getListPorFiltro('tipo', '=', 'Jirafa');
CALL animales_getListPorFiltro('anhos', '>=', '3');
```

## **Ejercicios resueltos**

### **Ejercicio 1**

Crea un procedimiento de nombre `animals_getListFiltroNumeroColum` que devuelva el número de animales indicado por el parámetro (utilizar `LIMIT`). También se le pasará en otro parámetro **las columnas** que debe mostrar de la forma `'col1, col3, col5'`.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_getListFiltroNumeroColum;
DELIMITER $$
CREATE PROCEDURE animales_getListFiltroNumeroColum (p_columnas VARCHAR(100), p_numero INT)
COMMENT 'Devuelve el número de animales indicado por el parámetro y las columnas indicadas.'
BEGIN
    SET @v_consulta = CONCAT('SELECT ', p_columnas, ' FROM ANIMALES LIMIT ?'); -- Añadir espacios en blanco después del SELECT y antes del FROM

    SET @v_numero = p_numero;

    PREPARE prepConsulta_animales_getListFiltroNumeroColum FROM @v_consulta;
    EXECUTE prepConsulta_animales_getListFiltroNumeroColum USING @v_numero;
    DEALLOCATE PREPARE prepConsulta_animales_getListFiltroNumeroColum;
END $$
DELIMITER ;

CALL animales_getListFiltroNumeroColum('nombre,anhos', 2);
CALL animales_getListFiltroNumeroColum('nombre,tipo,peso', 4);
```

### **Ejercicio 2**

Crea un procedimiento de nombre `animals_getListFiltroPista` que devuelva la lista de animales que trabajan en la pista que se envía como parámetro. En caso de que **no se envíe dato (valor null) debe mostrar todos los animales**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_getListFiltroPista;
DELIMITER $$
CREATE PROCEDURE animales_getListFiltroPista (p_pistas VARCHAR(100))
COMMENT 'Devuelve la lista de animales que trabajan en las pistas enviadas como parámetro en formato pista1,pista2,... En caso de null, todos los animales'
BEGIN
    IF (p_pistas IS NOT NULL) THEN
        SET @v_consulta = CONCAT('SELECT * FROM ANIMALES WHERE nombre_pista IN (', p_pistas, ')');
        -- select @v_consulta; => Comentado para saber si la consulta está bien
        -- SET @v_consulta = 'SELECT * FROM ANIMALES WHERE nombre_pista IN (?)'; => No se puede así,
        -- ya que cambiaríamos la ? por una cadena 'valor1,valor2,...'

        PREPARE prepConsulta_animales_getListFiltroPista FROM @v_consulta;
        EXECUTE prepConsulta_animales_getListFiltroPista;
        DEALLOCATE PREPARE prepConsulta_animales_getListFiltroPista;
    ELSE
        SELECT * FROM ANIMALES ORDER BY nombre;
    END IF;
END $$
DELIMITER ;

CALL animales_getListFiltroPista('\'LATERAL1\'');
CALL animales_getListFiltroPista('\'LATERAL2\',\'SUPER\'');
```

### **Ejercicio 3**

Crea un procedimiento de nombre `animals_getByAnoPeso` al que se le pasen dos parámetros (**peso y año**) y en función de si llevan valor o no, haz que devuelva los animales que cumplan los criterios de búsqueda.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_getByAnoPeso;
DELIMITER $$
CREATE PROCEDURE animales_getByAnoPeso(p_ano SMALLINT, p_peso FLOAT)
BEGIN
    SET @consulta = 'SELECT * FROM animales WHERE 1=1';

    IF (p_peso IS NOT NULL) THEN
        SET @consulta = CONCAT(@consulta, ' AND peso = ', p_peso);
    END IF;

    IF (p_ano IS NOT NULL) THEN
        SET @consulta = CONCAT(@consulta, ' AND anhos = ', p_ano);
    END IF;

    PREPARE prepareConsulta FROM @consulta;
    EXECUTE prepareConsulta;
    DEALLOCATE PREPARE prepareConsulta;
END $$
DELIMITER ;

CALL animales_getByAnoPeso(2, NULL);
CALL animales_getByAnoPeso(NULL, 2.3);
CALL animales_getByAnoPeso(4, 1);
```

> **📌 Resumen**
> 

> - Las sentencias **`PREPARE`** pre-compilan una sentencia SQL con parámetros (`?`), que se ejecuta con `EXECUTE ... USING`.

> - Permiten construir **sentencias SQL dinámicas** concatenando cadenas con `CONCAT`.

> - Sólo se pueden emplear **variables de sesión** (`@variable`) en `PREPARE` y `EXECUTE ... USING`.

> - Se libera la memoria con `DEALLOCATE PREPARE`.

---

## 7.5 Control de Flujos

# **Control de Flujos**

En este apartado vamos a estudiar las **instrucciones de control de flujo**, instrucciones que tienen un comportamiento igual o muy parecido al de otros lenguajes de programación.

Vamos a ver los **condicionales** como el `IF-ELSE` o el `CASE` y las instrucciones **repetitivas** como `REPEAT`, `WHILE` o `LOOP`.

## **IF-ELSE**

> **📌 Sintaxis**
> 

```sql
IF search_condition THEN statement_list
    [ELSEIF search_condition THEN statement_list] ...
    [ELSE statement_list]
END IF;
```

> **📌 Importante**
> 

> Si después de `END IF` hay otra instrucción, ésta deberá llevar un **punto y coma** para finalizar la instrucción de control.

> **📌 Ejemplo. Comprobar si un artista existe**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS artistas_getByNif;
DELIMITER $$
CREATE PROCEDURE artistas_getByNif(IN p_nif CHAR(9))
BEGIN
    DECLARE v_nifArt CHAR(9);

    SELECT A.nif INTO v_nifArt
    FROM ARTISTAS as A LEFT OUTER JOIN ARTISTAS as J ON (A.nif_jefe = J.nif)
    WHERE A.nif = p_nif;

    IF (v_nifArt IS NULL) THEN -- No hay un artista con ese NIF
        SELECT 'NO ENCONTRADO';
    ELSE
        SELECT 'ENCONTRADO';
    END IF;
END$$
DELIMITER ;
```

### **Ejercicio I**

Crea un procedimiento de nombre `pistas_getListAnimales` que devuelva a los animales (nombre, peso y anhos) que trabajen en la pista indicada. En caso de que no haya animales deberá devolver `SIN ANIMALES` y en el caso de que no exista la pista, `ESTA PISTA NO EXISTE`.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS pistas_getListAnimales;
DELIMITER $$
CREATE PROCEDURE pistas_getListAnimales(p_nombrePista VARCHAR(50))
COMMENT 'Devuelve los animales (nombre, peso y edad) que trabajen en la pista indicada.'
BEGIN
    DECLARE v_temp INT;

    SELECT COUNT(*) INTO v_temp  -- La función FOUND_ROWS() está deprecated.
    FROM PISTAS WHERE nombre = p_nombrePista;

    IF (v_temp = 0) THEN SELECT 'ESA PISTA NO EXISTE';
    ELSE
        SELECT COUNT(*) INTO v_temp
        FROM ANIMALES WHERE nombre_pista = p_nombrePista;

        IF (v_temp = 0) THEN SELECT 'SIN ANIMALES';
        ELSE
            SELECT nombre, peso, anhos
            FROM ANIMALES WHERE nombre_pista = p_nombrePista ORDER BY nombre;
        END IF;
    END IF;
END$$
DELIMITER ;
```

### **Ejercicio II**

Crea un procedimiento de nombre `atraccions_getNumeroPorFecha` que devuelva el número de atracciones que se celebraron en la fecha indicada. En caso de que no hubiera atracciones este día debe devolver el número **-1**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_getNumeroPorFecha;
DELIMITER $$
CREATE PROCEDURE atracciones_getNumeroPorFecha(p_fecha DATE)
COMMENT 'Devuelve el número de atracciones que se celebraron en la fecha indicada. Si no hubiera, devuelve -1.'
BEGIN
    DECLARE v_temp INT;

    SELECT COUNT(*) INTO v_temp
    FROM ATRACCION_DIA
    WHERE fecha = p_fecha;

    IF (v_temp = 0) THEN SELECT -1;
    ELSE SELECT v_temp;
    END IF;
END$$
DELIMITER ;
```

## **CASE**

La instrucción `CASE` viene a ser como un `IF-ELSEIF-ELSEIF-ELSEIF...` pero de una forma mucho más **legible**.

> **📌 Ejemplo. Día de la semana**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS utilidades_getDia;
DELIMITER $$
CREATE PROCEDURE utilidades_getDia(p_numDia TINYINT, OUT p_nombreDia VARCHAR(9))
COMMENT 'Devuelve en p_nombreDia el nombre del día de la semana asociado al número indicado en p_numDia siendo el 1 Lunes'
BEGIN
    CASE p_numDia
        WHEN 1 THEN SET p_nombreDia = 'LUNES';
        WHEN 2 THEN SET p_nombreDia = 'MARTES';
        WHEN 3 THEN SET p_nombreDia = 'MIERCOLES';
        WHEN 4 THEN SET p_nombreDia = 'JUEVES';
        WHEN 5 THEN SET p_nombreDia = 'VIERNES';
        WHEN 6 THEN SET p_nombreDia = 'SABADO';
        WHEN 7 THEN SET p_nombreDia = 'DOMINGO';
        ELSE SET p_nombreDia = NULL;
    END CASE;
END$$
DELIMITER ;

CALL utilidades_getDia(3, @nombreDia);  -- Devuelve MIERCOLES
SELECT @nombreDia;
CALL utilidades_getDia(20, @nombreDia); -- Devuelve NULL
SELECT @nombreDia;
```

## **REPEAT**

El uso es el mismo que en la programación estructurada. Repetimos un conjunto de instrucciones entre `REPEAT` y `END REPEAT` **hasta que se cumpla** la condición indicada en `UNTIL`.

> **📌 Ejemplo. Suma de números entre un rango**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS utilidades_getSumEntreNumeros;
DELIMITER $$
CREATE PROCEDURE utilidades_getSumEntreNumeros(p_numInferior INT, p_numSuperior INT, OUT p_sumaNumeros BIGINT)
COMMENT 'Suma los números entre un rango indicado por dos parámetros y devuelve la suma.'
BEGIN
    SET p_sumaNumeros = 0;

    IF (p_numSuperior < p_numInferior) THEN SET p_sumaNumeros = -1;
        SELECT 'EL PRIMER NUMERO TIENE QUE SER INFERIOR AL SEGUNDO';
    ELSE
        REPEAT
            SET p_sumaNumeros = p_sumaNumeros + p_numInferior;
            SET p_numInferior = p_numInferior + 1;
        UNTIL p_numInferior > p_numSuperior
        END REPEAT;
    END IF;
END$$
DELIMITER ;

CALL utilidades_getSumEntreNumeros(8, 13000, @suma);
SELECT @suma;
```

## **WHILE**

El uso es el mismo que en la programación estructurada. Repetimos un conjunto de instrucciones **mientras** se cumpla la condición indicada en el `WHILE`.

### **Ejercicio. atraccions_getNumPorMes**

Crea un procedimiento de nombre `atraccions_getNumPorMes` al que se le pase dos datos: un **mes en letra** (`ENERO`, `FEBRERO`, ...) y un **año en número**. Deberá calcular la suma de todas las atracciones celebradas en el mes y año indicado y devolver el dato en un parámetro de salida.

> **📌 Pistas**
> 

> - En el caso de que el año indicado sea nulo, tomar el **año actual**.

> - Crea un bucle que recorra **todos los días del mes** del año indicado y vaya sumando las atracciones.

> - Si el mes no existe tiene que devolver **-1** en el parámetro de salida.

> - Para *construir* la fecha utilizar la función **`CONCAT`**.

> - Hay meses en los que no hay 31 días. En lugar de establecer condiciones por meses, emplear la función **`DATE`** para comprobar si la fecha es válida.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_getNumPorMes;
DELIMITER $$
CREATE PROCEDURE atracciones_getNumPorMes(p_mes VARCHAR(10), p_ano SMALLINT, OUT p_numAtracciones INT)
COMMENT 'Calcula la suma de todas las atracciones celebradas en el mes y año indicado.'
label_proc: BEGIN
    DECLARE v_mesEnNumero TINYINT DEFAULT 0;
    DECLARE v_dia TINYINT DEFAULT 1;          -- Día del mes. Usado para hacer el bucle hasta el día 31
    DECLARE v_numAtraccPorDia INT;

    SET p_numAtracciones = 0; -- Por defecto vale NULL y no podríamos usarla para sumar las atracciones diarias

    CASE p_mes
        WHEN 'ENERO' THEN SET v_mesEnNumero = 1;
        WHEN 'FEBRERO' THEN SET v_mesEnNumero = 2;
        WHEN 'MARZO' THEN SET v_mesEnNumero = 3;
        WHEN 'ABRIL' THEN SET v_mesEnNumero = 4;
        WHEN 'MAYO' THEN SET v_mesEnNumero = 5;
        WHEN 'JUNIO' THEN SET v_mesEnNumero = 6;
        WHEN 'JULIO' THEN SET v_mesEnNumero = 7;
        WHEN 'AGOSTO' THEN SET v_mesEnNumero = 8;
        WHEN 'SEPTIEMBRE' THEN SET v_mesEnNumero = 9;
        WHEN 'OCTUBRE' THEN SET v_mesEnNumero = 10;
        WHEN 'NOVIEMBRE' THEN SET v_mesEnNumero = 11;
        WHEN 'DICIEMBRE' THEN SET v_mesEnNumero = 12;
        ELSE SET p_numAtracciones = -1; LEAVE label_proc; -- Sale del procedimiento
    END CASE;

    IF (p_ano IS NULL) THEN
        SET p_ano = YEAR(curdate());
    END IF;

    bucle_dia: WHILE (v_dia <= 31) DO
        IF (DATE(CONCAT(p_ano,'-',v_mesEnNumero,'-',v_dia)) IS NULL) THEN -- No es una fecha válida.
            LEAVE bucle_dia;
        END IF;

        SELECT COUNT(*) INTO v_numAtraccPorDia FROM ATRACCION_DIA
        WHERE fecha = CONCAT(p_ano,'-',v_mesEnNumero,'-',v_dia);

        SET v_dia = v_dia + 1;
        SET p_numAtracciones = p_numAtracciones + v_numAtraccPorDia;
    END WHILE bucle_dia;
END $$
DELIMITER ;
```

## **LOOP**

El uso es el mismo que en la programación estructurada. Repetimos un conjunto de instrucciones (viene a ser equivalente a `WHILE(true)`). En este tipo de bucle es necesario emplear la orden **`LEAVE`** para poder salir del mismo. Al igual que en REPEAT, podemos hacer uso de **etiquetas** para emplear con las instrucciones `LEAVE` e `ITERATE`.

### **Ejercicio. utilitats_cambiarFormato**

Crea un procedimiento de nombre `utilitats_cambiarFormato` al que se le pase un dato en forma de cadena y devuelva en el **mismo parámetro** la cadena enviada cambiando las letras por números y separados por un guión. Para pasar de letra a número emplea la función **`ORD`**.

> **📌 Pistas**
> 

> - Para recorrer la cadena carácter a carácter puedes hacer uso de las funciones `LEFT` y `RIGHT` o de la función `SUBSTRING` además de la función `CHAR_LENGTH`.

> - Ir con cuidado: la función `SUBSTRING`, el parámetro pos, la **primera posición de la cadena empieza en 1**, no en 0.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS utilidades_cambiarFormato;
DELIMITER $$
CREATE PROCEDURE utilidades_cambiarFormato(INOUT p_cadena VARCHAR(1000))
COMMENT 'Devuelve en el mismo parámetro la cadena enviada cambiando las letras por números y separados por un guión.'
BEGIN
    DECLARE v_indice SMALLINT DEFAULT 1; -- Empleado para recorrer la cadena carácter a carácter
    DECLARE v_caracter CHAR(1);          -- Guarda el carácter de la cadena
    DECLARE v_cadena VARCHAR(1000) DEFAULT ''; -- Cadena a devolver. Poner un default para poder concatenar

    bucle_loop: LOOP
        SET v_caracter = SUBSTRING(p_cadena, v_indice, 1);
        SET v_cadena = CONCAT(v_cadena, ORD(v_caracter), '-');
        SET v_indice = v_indice + 1;

        IF (v_indice > CHAR_LENGTH(p_cadena)) THEN
            LEAVE bucle_loop;
        END IF;
    END LOOP bucle_loop;

    SET p_cadena = v_cadena;
END $$
DELIMITER ;

SET @dato = 'ANGEL';
CALL utilidades_cambiarFormato(@dato);
SELECT @dato;
```

## **Ejercicios de repaso resueltos**

### **Ejercicio I. pistes_getSumAforo**

Crea un procedimiento de nombre `pistas_getSumAforo` que devuelva en forma de **parámetro de salida** la suma de los aforos de las pistas enviadas como parámetro. El formato de la lista de pistas es una única cadena: `'pista1,pista2,pista3,...'`.

> **📌 Pistas**
> 

> - Deberás, empleando `SUBSTRING` y `LOCATE`, **descomponer el dato** en cada una de las pistas y buscar el aforo de cada una de ellas.

> - En caso de que alguna pista no exista, deberás mostrar la cadena `'La pista ZZZZZZ no existe'` por cada pista que no exista.

> - Debemos controlar que al menos siempre se envíe una pista. En caso contrario debe enviarse **-1** en el parámetro de salida (emplea `CHAR_LENGTH`).

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_getSumAforo;
DELIMITER $$
CREATE PROCEDURE animales_getSumAforo (p_pistas VARCHAR(100), OUT p_sumaAforo INT)
COMMENT 'Devuelve la suma de los aforos de las pistas enviadas pista1,pista2,...'
label_getSumAforo: BEGIN
    DECLARE v_index, v_pos SMALLINT DEFAULT 1;
    DECLARE v_aforo SMALLINT;       -- El tipo coincide con el declarado en la tabla
    DECLARE v_nombrePista VARCHAR(50); -- El tipo coincide con el declarado en la tabla

    SET p_sumaAforo = 0; -- Inicializamos a 0 para poder sumar, con null no podríamos sumar.

    IF (CHAR_LENGTH(p_pistas) = 0) THEN
        SET p_sumaAforo = -1;
        LEAVE label_getSumAforo;
    END IF;

    WHILE (v_pos <> 0) DO -- LOCATE devuelve 0 si no encuentra la cadena a buscar.
        SELECT LOCATE(',', p_pistas, v_index) INTO v_pos;

        IF (v_pos <> 0) THEN -- Encuentra una coma
            SELECT SUBSTRING(p_pistas, v_index, v_pos - v_index) INTO v_nombrePista;
            SET v_index = v_pos + 1;
        ELSE -- Falta la última pista por contar ya que no lleva coma al final
            SELECT SUBSTRING(p_pistas, v_index) INTO v_nombrePista;
        END IF;

        SET v_aforo = NULL;
        SELECT aforo INTO v_aforo FROM PISTAS WHERE nombre = v_nombrePista;

        IF (v_aforo IS NULL) THEN -- Pista no encontrada
            SELECT CONCAT('La pista ', v_nombrePista, ' no existe');
        ELSE SET p_sumaAforo = p_sumaAforo + v_aforo;
        END IF;
    END WHILE;
END $$
DELIMITER ;

CALL animales_getSumAforo('LATERAL1,LATERAL2,NO EXISTE', @aforo);
SELECT @aforo;
```

### **Ejercicio II. atraccions_getGananciasSupuestas**

Crea un procedimiento de nombre `atraccions_getGananciasSupuestas` en el que se le pase como datos el nombre de una atracción y 2 números. Deberá mostrar los días en que se celebró la atracción junto con su número de espectadores y ganancia así como las **ganancias que tendríamos si la entrada costara diferentes precios** (con una diferencia de 5 euros entre ellos).

> **📌 Pistas**
> 

> - Debes controlar que los números enviados sean **múltiplos de 5** y que el segundo es mayor que el primero.

> - En caso de que la atracción no exista o que no haya tenido representaciones, también debe informar del error.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_getGananciasSupuestas;
DELIMITER $$
CREATE PROCEDURE atracciones_getGananciasSupuestas (p_nombreAtraccion VARCHAR(50), p_precioInferior TINYINT, p_precioSuperior TINYINT)
COMMENT 'Muestra las ganancias que tendríamos si la entrada costara diferentes precios.'
label_getGananciasSupuestas: BEGIN
    DECLARE v_precio TINYINT DEFAULT 0;

    IF ((SELECT COUNT(*) FROM ATRACCIONES WHERE nombre = p_nombreAtraccion) = 0) THEN
        SELECT 'La atracción no existe';
        LEAVE label_getGananciasSupuestas;
    END IF;

    IF ((SELECT COUNT(*) FROM ATRACCION_DIA WHERE nombre_atraccion = p_nombreAtraccion) = 0) THEN
        SELECT 'La atracción no ha celebrado ninguna actuación';
        LEAVE label_getGananciasSupuestas;
    END IF;

    IF (p_precioInferior > p_precioSuperior) THEN
        SELECT 'El precio inferior no puede ser superior al segundo número';
        LEAVE label_getGananciasSupuestas;
    END IF;

    IF ((p_precioInferior % 5) <> 0 OR (p_precioSuperior % 5) <> 0) THEN
        SELECT 'Los dos números deben ser múltiplos de 5';
        LEAVE label_getGananciasSupuestas;
    END IF;

    SET v_precio = p_precioInferior;

    REPEAT
        SELECT nombre_atraccion, num_espectadores, ganancias, num_espectadores * v_precio AS gananciaSimulada
        FROM ATRACCION_DIA WHERE nombre_atraccion = p_nombreAtraccion;

        SET v_precio = v_precio + 5;
    UNTIL v_precio > p_precioSuperior
    END REPEAT;
END $$
DELIMITER ;

CALL atracciones_getGananciasSupuestas('El orangután', 12, 20);
CALL atracciones_getGananciasSupuestas('El orangután', 10, 20);
CALL atracciones_getGananciasSupuestas('El gran felino', 10, 20);
```

### **Ejercicio III. utilitats_getNumImpares**

Crea un procedimiento de nombre `utilitats_getNumImpares` al que se le pasen tres números y devuelva en forma de parámetro de salida **cuántos números hay entre los dos primeros que son divisibles por el tercero**. Se deben incluir los dos primeros números a la hora de contar. No importa el orden en el que se envíen los dos primeros números.

> **📌 Ejemplo**
> 

> `5,1,2` => Busca los números múltiples de 2 entre 1 y 5 (*incluidos*) => **2**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS utilidades_getNumImpares;
DELIMITER $$
CREATE PROCEDURE utilidades_getNumImpares (p_numero1 INT, p_numero2 INT, p_multiplo INT, OUT p_numMultiplos INT)
COMMENT 'Muestra cuántos números múltiplos del tercer número hay entre los dos primeros (incluidos).'
BEGIN
    DECLARE v_temporal INT DEFAULT 0;

    IF (p_numero1 > p_numero2) THEN -- Intercambiamos los números si el segundo es inferior al primero
        SET v_temporal = p_numero2;
        SET p_numero2 = p_numero1;
        SET p_numero1 = v_temporal;
    END IF;

    SET p_numMultiplos = 0;

    etiqueta_bucle: LOOP -- Probamos con LOOP. Valdría WHILE o REPEAT
        IF (p_numero1 % p_multiplo = 0) THEN
            SET p_numMultiplos = p_numMultiplos + 1;
        END IF;

        SET p_numero1 = p_numero1 + 1;

        IF (p_numero1 > p_numero2) THEN
            LEAVE etiqueta_bucle;
        END IF;
    END LOOP;
END $$
DELIMITER ;

CALL utilidades_getNumImpares(5, 1, 3, @numMultiplos); -- Busca múltiplos de 3
SELECT @numMultiplos;
CALL utilidades_getNumImpares(25, 2, 2, @numMultiplos); -- Busca múltiplos de 2
SELECT @numMultiplos;
```

> **📌 Resumen**
> 

> - **`IF-ELSE`**: ejecuta un bloque según una condición (`END IF;` con punto y coma si hay más instrucciones).

> - **`CASE`**: alternativa legible a varios `IF-ELSEIF` para comparar un valor.

> - **`REPEAT ... UNTIL condicion END REPEAT`**: repite hasta que se cumple la condición.

> - **`WHILE condicion DO ... END WHILE`**: repite mientras se cumple la condición.

> - **`LOOP ... END LOOP`**: bucle infinito que se sale con `LEAVE etiqueta`.

> - Se pueden usar **etiquetas** (`label: BEGIN/END`, `bucle: WHILE ... END WHILE`) con `LEAVE` e `ITERATE`.

---

## 7.6 Eventos

# **Eventos**

Un **evento** es una tarea programada que se ejecuta de forma automática en momentos específicos o de manera periódica. Funciona de forma similar a un *cron job* en sistemas Linux, permitiendo definir **instrucciones SQL que se ejecutarán sin intervención manual**, dentro del propio motor de base de datos.

Se utilizan para realizar acciones planificadas, como la actualización de datos, la eliminación de registros obsoletos o la generación de informes en momentos predeterminados. Además, facilitan la automatización del mantenimiento y la administración de la base de datos, ya que centralizan tareas repetitivas en un único punto. Pueden configurarse para ejecutarse **una sola vez o en intervalos regulares**.

> **📌 Programador de eventos**
> 

> Para su funcionamiento, es **obligatorio** que el programador de eventos esté habilitado:

```sql
-- Verificar estado actual
SHOW VARIABLES LIKE 'event_scheduler';

-- Habilitar el programador de eventos (método 1 - sesión actual)
SET GLOBAL event_scheduler = ON;
```

## **Crear eventos**

Para crear un evento usaremos la sentencia **`CREATE EVENT`**, con la siguiente sintaxis:

```sql
CREATE
[DEFINER = user]
EVENT
[IF NOT EXISTS]
event_name
ON SCHEDULE schedule
[ON COMPLETION [NOT] PRESERVE]
[ENABLE | DISABLE | DISABLE ON {REPLICA | SLAVE}]
[COMMENT 'string']
DO event_body;

schedule: {
    AT timestamp [+ INTERVAL interval] ...
    | EVERY interval
      [STARTS timestamp [+ INTERVAL interval] ...]
      [ENDS timestamp [+ INTERVAL interval] ...]
}

interval:
    quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |
              WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |
              DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}
```

donde:

- **`SCHEDULE`**: define cuándo y con qué frecuencia se ejecuta, pudiendo ser en una fecha concreta (`AT`) o de forma repetida (`EVERY`), definiendo un inicio (`STARTS`) y/o un fin (`ENDS`).

- **`ON COMPLETION`**: determina si el evento se conserva después de su ejecución.

- **`ENABLE`/`DISABLE`**: estado inicial del evento.

- **`DO`**: indica el bloque de código SQL a ejecutar.

## **Eventos sencillos**

Para probar los eventos, vamos a crear una tabla histórico que admita una fecha y una cadena:

> **📌 Tabla de prueba**
> 

```sql
USE CIRCO;
CREATE TABLE historico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME NOT NULL,
    descripcion VARCHAR(255) NOT NULL
);
```

Podemos crear eventos que se ejecutan **una sola vez**, configurando un horario concreto, ya sea un timestamp determinado con `AT TIMESTAMP`, o un instante temporal calculado (`CURRENT_TIMESTAMP + INTERVAL ...`).

> **📌 Evento único y evento único calculado**
> 

```sql
CREATE EVENT evento_5min
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 5 MINUTE
DO
    INSERT INTO historico(fecha, descripcion) VALUES
    (NOW(), 'Evento ejecutado dentro de 5 minutos');

CREATE EVENT evento_unico
ON SCHEDULE AT TIMESTAMP '2025-02-27 06:55:00'
DO
    INSERT INTO historico(fecha, descripcion) VALUES
    (NOW(), 'Evento único ejecutado');
```

## **Eventos recurrentes**

La potencia de los eventos es que se ejecuten de forma **periódica**. Para ello, en el schedule usaremos la cláusula `EVERY` para indicar el intervalo de la repetición:

> **📌 Evento recurrente**
> 

```sql
CREATE EVENT evento_recurrente
ON SCHEDULE EVERY 1 DAY
STARTS '2025-03-01 00:00:00' ENDS '2025-03-31 23:59:59'
DO
    DELETE FROM historico WHERE fecha < DATE_SUB(NOW(), INTERVAL 30 DAY);
```

Además del intervalo de repetición, también podemos indicar una fecha de **inicio** para comenzar el evento periódico mediante `STARTS`, una fecha de **finalización** para que termine mediante `ENDS` o utilizar ambos para indicar un periodo determinado:

> **📌 Eventos con inicio/fin**
> 

```sql
CREATE EVENT evento_recurrente_con_fin
ON SCHEDULE EVERY 1 WEEK ENDS '2025-12-31 23:59:59'
DO
    CALL actualizar_inventario();

CREATE EVENT evento_recurrente_con_inicio
ON SCHEDULE EVERY 12 HOUR STARTS '2025-03-01 00:00:00'
DO
    CALL actualizar_inventario();

CREATE EVENT evento_recurrente_con_inicio_fin
ON SCHEDULE EVERY 1 DAY + INTERVAL 12 HOUR
STARTS '2025-03-01 00:00:00' ENDS '2025-12-31 23:59:59'
DO
    CALL actualizar_inventario();
```

> **📌 Buena práctica**
> 

> Una buena práctica es **encapsular la lógica de los eventos dentro de procedimientos almacenados**, para poder probarlos sin necesidad de provocar que se dispare el evento, además de poder reutilizar la lógica entre eventos con periodicidades distintas.

## **Ejercicios resueltos**

### **Ejercicio I. Registrar usuarios conectados**

Queremos registrar, cada 1 minuto en el día de hoy y durante unos 10 minutos desde el momento de creación del evento, **qué usuarios están accediendo a la base de datos** `employees`. Estos usuarios (sus nombres y equipos) deberán quedar registrados en una tabla de nombre `historico_usuarios_hora`.

Crea dos usuarios y conéctate a la base de datos. Después haz que uno de ellos se desconecte.

> **📌 1. Tablas de trabajo**
> 

```sql
SELECT USER, HOST, NOW()
FROM information_schema.PROCESSLIST;

DROP TABLE IF EXISTS historico_usuarios_hora;
CREATE TABLE historico_usuarios_hora (
    usuario VARCHAR(100),
    host VARCHAR(100),
    fecha DATETIME
);
```

> **📌 2. Crear tabla y evento que registre conexiones**
> 

```sql
DROP TABLE IF EXISTS historico_usuarios_hora;
CREATE TABLE historico_usuarios_hora (
    usuario VARCHAR(100),
    host VARCHAR(100),
    fecha DATETIME
);

DELIMITER $$
CREATE EVENT registrar_usuarios_evento
ON SCHEDULE EVERY 1 MINUTE
STARTS CURRENT_TIMESTAMP
ENDS CURRENT_TIMESTAMP + INTERVAL 10 MINUTE
DO
BEGIN
    INSERT INTO historico_usuarios_hora (usuario, host, fecha)
    SELECT USER, HOST, NOW()
    FROM information_schema.PROCESSLIST;
END $$
DELIMITER ;
```

> **📌 3. Crear dos usuarios, conectar y desconectar uno**
> 

```sql
-- Crear usuarios
CREATE USER 'usuario1'@'localhost' IDENTIFIED BY '1234';
CREATE USER 'usuario2'@'localhost' IDENTIFIED BY '1234';

-- Dar acceso a base de datos employees
GRANT ALL PRIVILEGES ON employees.* TO 'usuario1'@'localhost';
GRANT ALL PRIVILEGES ON employees.* TO 'usuario2'@'localhost';
FLUSH PRIVILEGES;
```

> **📌 4. Modificar el evento para que NO se elimine automáticamente**
> 

```sql
ALTER EVENT registrar_usuarios_evento
ON COMPLETION PRESERVE;
```

> **📌 5. Modificar para que se ejecute en el próximo minuto**
> 

```sql
ALTER EVENT registrar_usuarios_evento
ON SCHEDULE EVERY 1 MINUTE
STARTS CURRENT_TIMESTAMP + INTERVAL 1 MINUTE
ENDS CURRENT_TIMESTAMP + INTERVAL 11 MINUTE;
```

### **Ejercicio II. Copia de departamentos**

Haz que el día **15 de Mayo del 2025 a las 23:15** se guarde una copia de los datos de la tabla `departments` en una tabla creada por ti previamente de nombre `dept_copia_temp`.

> **📌 Solución**
> 

```sql
DROP TABLE IF EXISTS dept_copia_temp;
CREATE TABLE dept_copia_temp AS
SELECT * FROM departments WHERE 1=0;

DELIMITER $$
CREATE EVENT copia_departamentos
ON SCHEDULE AT '2018-04-30 23:15:00'
DO
BEGIN
    INSERT INTO dept_copia_temp
    SELECT * FROM departments;
END $$
DELIMITER ;
```

### **Ejercicio III. Número de empleados**

Crea una tabla de nombre `empleados_numero_mensual` que guarde el **número de empleados** que tiene la empresa. Haz que se ejecute **una vez 4 días después** de que se cree el evento. Ejecuta la orden que muestre el momento en que se va a ejecutar. Modifica el evento para que se ejecute **desde el día de hoy hasta dentro de un año** y que lo haga **cada mes**.

> **📌 Solución**
> 

```sql
DROP TABLE IF EXISTS empleados_numero_mensual;
CREATE TABLE empleados_numero_mensual (
    fecha DATE,
    total_empleados INT
);

-- Evento que se ejecuta 4 días después de su creación
DELIMITER $$
CREATE EVENT contar_empleados_una_vez
ON SCHEDULE AT CURRENT_DATE + INTERVAL 4 DAY
DO
BEGIN
    INSERT INTO empleados_numero_mensual (fecha, total_empleados)
    SELECT CURRENT_DATE, COUNT(*) FROM employees;
END $$
DELIMITER ;

-- Consultar cuándo se ejecutará
SELECT * FROM information_schema.EVENTS WHERE EVENT_NAME = 'contar_empleados_una_vez';

-- Modificar el evento para que se ejecute cada mes durante un año
ALTER EVENT contar_empleados_una_vez
ON SCHEDULE EVERY 1 MONTH
STARTS CURRENT_DATE
ENDS CURRENT_DATE + INTERVAL 1 YEAR;
```

### **Ejercicio IV. Aumento salarial de managers**

Haz que el día **1 de Enero de cada año** se actualicen los salarios de los manager de cada departamento un **10%** (que estén trabajando actualmente en la empresa). Esta actualización se debe producir **durante 5 años** a partir del actual.

> **📌 Solución**
> 

```sql
DELIMITER $$
CREATE EVENT aumento_salario_managers
ON SCHEDULE EVERY 1 YEAR
STARTS '2026-01-01 00:00:00'
ENDS '2031-01-01 00:00:00'
DO
BEGIN
    UPDATE employees
    SET salary = salary * 1.10
    WHERE emp_no IN (
        SELECT emp_no FROM dept_manager
    );
END $$
DELIMITER ;
```

### **Ejercicio V. Consultar y borrar eventos**

Muestra todos los eventos creados, todos los eventos creados por el usuario root y borra uno de los eventos.

> **📌 Solución**
> 

```sql
-- Muestra todos los eventos creados
SELECT * FROM information_schema.EVENTS;

-- Muestra todos los eventos creados por el usuario root
SELECT * FROM information_schema.EVENTS WHERE DEFINER LIKE 'root@%';

-- Borra un evento, asegurándonos de que exista
DROP EVENT IF EXISTS registrar_usuarios_evento;
```

> **📌 Resumen**
> 

> - Un **evento** es una tarea programada que se ejecuta automáticamente (`cron` de MySQL).

> - Se crea con `CREATE EVENT ... ON SCHEDULE ... DO ...`.

> - Puede ejecutarse una sola vez (`AT`) o periódicamente (`EVERY`), con `STARTS`/`ENDS`.

> - `ON COMPLETION PRESERVE` evita que el evento desaparezca al terminar.

> - Se consultan en `information_schema.EVENTS` y se borran con `DROP EVENT`.

---

## 7.7 Triggers

# **Triggers**

Un **trigger** viene a ser como un **procedimiento almacenado que se ejecuta automáticamente** cuando sobre una tabla se realiza alguna operación que implique **modificar sus datos** (`DELETE`, `INSERT`, `UPDATE`). Por lo tanto un trigger estará *asociado* a una tabla y a un *conjunto de operaciones* sobre la tabla.

El trigger puede ejecutar el conjunto de instrucciones **después (AFTER)** o **antes (BEFORE)** de que se ejecute esta orden.

> **📌 Usos de los triggers**
> 

> - **Monitorear y registrar** operaciones sobre las tablas (podemos guardar información sobre quién y cuándo se realizó alguna modificación).

> - **Verificar que los datos sean correctos** antes de añadirlos o usarlos para una modificación.

> - **Copias de seguridad** de los datos antes de que sean modificados o borrados.

> **📌 Triggers y operaciones en cascada**
> 

> Un trigger **no se ejecutará** en caso de una operación en cascada debido a las restricciones de integridad referencial (clave primaria-clave foránea).

## **Crear un trigger**

Es necesario tener el permiso **`TRIGGER`** otorgado para poder crear un trigger. Este permiso se encuentra en el nivel de seguridad de tabla, por lo que es necesario indicar sobre qué tabla tendrá permiso.

Para crear un trigger se necesita determinar:

- **En qué tabla** se aplicará el trigger.

- **Qué operación** se aplicará (`INSERT` / `DELETE` / `UPDATE`).

- **El momento** en el que se ejecute el trigger, antes o después de que se realice la operación sobre la tabla (`BEFORE`, `AFTER`).

> **📌 Sintaxis básica**
> 

```sql
DELIMITER $$
CREATE TRIGGER nombre_trigger
BEFORE | AFTER INSERT | UPDATE | DELETE ON tabla
FOR EACH ROW
BEGIN
    -- Instrucciones del trigger
END$$
DELIMITER ;
```

## **Acceso a valores: OLD y NEW**

Dentro del trigger se puede acceder a los valores de la fila de la tabla **anterior y posterior** a la ejecución de la orden SQL. Al realizar una operación de `UPDATE` sobre una columna, esta columna tendrá un valor antes de la ejecución de la orden SQL y otro después.

- **`OLD`**: tabla que posee los datos de cada columna con los **valores antiguos**.

- **`NEW`**: tabla que posee los datos de cada columna con los **valores nuevos**.

| Operación | NEW | OLD |
| --- | --- | --- |
| **UPDATE** | Valores nuevos | Valores antiguos |
| **INSERT** | Valores nuevos | **NO EXISTE** |
| **DELETE** | **NO EXISTE** | Valores antiguos |

## **Otras operaciones**

| Operación | Orden SQL |
| --- | --- |
| Visualizar triggers | `SHOW TRIGGERS;` — o consultar `information_schema.triggers` |
| Modificar triggers | **NO es posible**: es necesario borrar y volver a crear el trigger |
| Borrar triggers | `DROP TRIGGER [IF EXISTS] nombre_trigger;` |

## **Ejercicios resueltos**

### **Ejercicio 1**

Haz que no se pueda añadir un nuevo animal si el tipo es `'León'` y el número de años es mayor que 20. En caso de no cumplirse la condición lanzará una excepción.

> **📌 Solución**
> 

```sql
DELIMITER $$
CREATE TRIGGER before_insert_animal_check_leon
BEFORE INSERT ON animales
FOR EACH ROW
BEGIN
    IF NEW.tipo = 'León' AND NEW.anhos > 20 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El tipo león no puede tener más de 20 años';
    END IF;
END$$
DELIMITER ;
```

### **Ejercicio 2**

Cuando incorpore un nuevo animal, hacer que este animal esté cuidado por el **artista que cuida a menos animales**. Deberás tener en cuenta el caso en el que no haya ningún artista cuidando animales: en ese caso debes coger al primer artista que no sea jefe. Si no hay ningún artista tendrás que lanzar una excepción.

> **📌 Solución**
> 

```sql
DELIMITER $$
CREATE TRIGGER trg_asignar_artista
AFTER INSERT ON ANIMALES
FOR EACH ROW
BEGIN
    DECLARE v_nif_artista CHAR(9);

    -- Buscar el artista con menos animales
    SELECT A.NIF
    INTO v_nif_artista
    FROM ARTISTAS A
    LEFT JOIN (
        SELECT NIF_ARTISTA, COUNT(*) AS total_animales
        FROM ANIMALES_ARTISTAS
        GROUP BY NIF_ARTISTA
    ) CA ON A.NIF = CA.NIF_ARTISTA
    ORDER BY IFNULL(CA.total_animales, 0) ASC
    LIMIT 1;

    -- Si no se encontró artista, lanzar excepción
    IF v_nif_artista IS NULL THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'No hay artistas para cuidar a animales';
    ELSE
        -- Asignar el nuevo animal al artista con menos animales
        INSERT INTO ANIMALES_ARTISTAS (NOMBRE_ANIMAL, NIF_ARTISTA)
        VALUES (NEW.NOMBRE, v_nif_artista);
    END IF;
END$$
DELIMITER ;
```

> **📌 Transacciones**
> 

> Este trigger añade dos filas (una a `ANIMALES` y otra a `ANIMALES_ARTISTAS`). Si queremos que ambas operaciones se hagan juntas, debería ir dentro de una **transacción**, y el `ROLLBACK` no se puede hacer dentro del trigger: habría que empezar la transacción en el código donde se realiza la orden `INSERT` (programa cliente o procedimiento almacenado).

### **Ejercicio 3**

Haz todo lo necesario para que el campo de la tabla `ATRACCIONES` se actualice cuando se añadan, borren o modifiquen datos en la tabla `ATRACCION_DIA`. Si al añadir una celebración nueva (`ATRACCION_DIA`) la `fecha_inicio` en `ATRACCIONES` es `NULL`, debe actualizarse con la **fecha actual**.

> **📌 Nota**
> 

> Tanto la fecha como las ganancias pueden tener valores nulos. Hacer uso de la función **`IFNULL`** para dar un valor a estas columnas cuando sean `NULL` (`null + valor = null`).

> **📌 Solución**
> 

```sql
DELIMITER $$
CREATE TRIGGER trg_insert_atraccion_dia
AFTER INSERT ON ATRACCION_DIA
FOR EACH ROW
BEGIN
    -- Actualizar fecha_inicio si es NULL
    UPDATE ATRACCIONES
    SET FECHA_INICIO = IFNULL(FECHA_INICIO, CURDATE()),
        GANANCIAS = IFNULL(GANANCIAS, 0) + IFNULL(NEW.GANANCIAS, 0)
    WHERE NOMBRE = NEW.NOMBRE_ATRACCION;
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER trg_update_atraccion_dia
AFTER UPDATE ON ATRACCION_DIA
FOR EACH ROW
BEGIN
    DECLARE suma_total DOUBLE;

    -- Recalcular suma total de ganancias de toda la atracción
    SELECT SUM(IFNULL(GANANCIAS, 0))
    INTO suma_total
    FROM ATRACCION_DIA
    WHERE NOMBRE_ATRACCION = NEW.NOMBRE_ATRACCION;

    UPDATE ATRACCIONES
    SET GANANCIAS = IFNULL(suma_total, 0)
    WHERE NOMBRE = NEW.NOMBRE_ATRACCION;
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER trg_delete_atraccion_dia
AFTER DELETE ON ATRACCION_DIA
FOR EACH ROW
BEGIN
    DECLARE suma_total DOUBLE;

    -- Recalcular suma total de ganancias tras borrado
    SELECT SUM(IFNULL(GANANCIAS, 0))
    INTO suma_total
    FROM ATRACCION_DIA
    WHERE NOMBRE_ATRACCION = OLD.NOMBRE_ATRACCION;

    UPDATE ATRACCIONES
    SET GANANCIAS = IFNULL(suma_total, 0)
    WHERE NOMBRE = OLD.NOMBRE_ATRACCION;
END$$
DELIMITER ;
```

### **Ejercicio 4**

Modifica la tabla `ATRACCIONES` y añade una nueva columna de nombre **`contador`**, de tipo numérico y valor por defecto de cero, que lleve cuenta de cuántas veces se ha celebrado la atracción y que se actualice con cualquier operación.

> **📌 Nota**
> 

> Los datos ya añadidos tendrán como valor `NULL`. Realiza una operación de `UPDATE` para ponerlos a su valor correcto.

> **📌 Solución**
> 

```sql
-- Modificar la tabla
ALTER TABLE ATRACCIONES ADD CONTADOR INT DEFAULT 0;

-- Triggers para actualizar el contador automáticamente
DELIMITER $$
CREATE TRIGGER trg_incrementa_contador
AFTER INSERT ON ATRACCION_DIA
FOR EACH ROW
BEGIN
    UPDATE ATRACCIONES
    SET CONTADOR = IFNULL(CONTADOR, 0) + 1
    WHERE NOMBRE = NEW.NOMBRE_ATRACCION;
END$$
CREATE TRIGGER trg_decrementa_contador
AFTER DELETE ON ATRACCION_DIA
FOR EACH ROW
BEGIN
    UPDATE ATRACCIONES
    SET CONTADOR = IFNULL(CONTADOR, 1) - 1
    WHERE NOMBRE = OLD.NOMBRE_ATRACCION;
END$$
DELIMITER ;

-- Inicializar los datos ya existentes
UPDATE ATRACCIONES A
SET CONTADOR = (
    SELECT COUNT(*)
    FROM ATRACCION_DIA D
    WHERE D.NOMBRE_ATRACCION = A.NOMBRE
);
```

> **📌 Resumen**
> 

> - Un **trigger** se ejecuta automáticamente ante operaciones `INSERT`/`UPDATE`/`DELETE` sobre una tabla.

> - Se ejecuta **antes (`BEFORE`)** o **después (`AFTER`)** de la operación.

> - Con **`OLD`** y **`NEW`** accedemos a los valores antiguos y nuevos de la fila.

> - Para lanzar una excepción se usa `SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '...'`.

> - Los triggers **no se pueden modificar**: hay que borrarlos y volver a crearlos.

---

## 7.8 Cursores

# **Cursores**

Un **cursor** es un recurso de programación que nos ofrecen casi todos los gestores de bases de datos relacionales y que consiste en la posibilidad de **recorrer fila a fila** un conjunto de resultados provenientes de una sentencia `SELECT`. La ventaja que tiene el uso de cursores es que podremos **guardar en variables locales cada fila** de resultados y manejar esta información como queramos.

Un cursor tiene las siguientes características:

- **Son de solo lectura**: sólo sirven para leer datos. Sólo podremos declarar un cursor para leer los datos que provienen de una consulta `SELECT` y nunca podremos modificar los datos de la tabla a través del cursor.

- **De acceso secuencial**: la información que procesará el cursor es secuencial. Recorreremos fila a fila desde la primera a la última, una detrás de otra, y no podremos saltar a una fila cualquiera de manera directa.

- **Pueden crearse dentro de un procedimiento, función o trigger**.

## **Manejo de cursores**

Para un cursor se realizan las siguientes operaciones:

1. **Declaración del cursor**: definimos el nombre del cursor y la consulta SQL `SELECT` que devolverá el conjunto de resultados.

1. **Apertura del cursor**: para poder procesar la información que viene en el `SELECT`.

1. **Lectura del cursor**: se realiza con el orden `FETCH`, que permite guardar la información de una fila en variables locales y pasa a la siguiente fila del conjunto de resultados. La lectura va en un **bucle** que se ejecuta hasta que se acaban de leer todas las filas.

1. **Cierre del cursor**: para liberar de la memoria el cursor creado.

### **Declaración**

```sql
DECLARE nombre_cursor CURSOR FOR sentencia_SELECT;
```

> **📌 Consideraciones**
> 

> - Para salir del bucle capturaremos una excepción de *no hay más datos* (`NOT FOUND`). La definición de esta captura debe ir **después del `DECLARE`** de variables y antes de las operaciones.

> - La declaración del cursor debe ir **tras la declaración de las variables y condiciones**.

> - En la sentencia `SELECT` seleccionaremos las columnas que queremos guardar *por cada fila* al recorrer el cursor.

> - Dentro de un procedimiento, trigger o función podemos tener varios cursores, pero todos ellos deben tener un **nombre diferente**.

> **📌 Ejemplo de declaración**
> 

```sql
DECLARE v_noHayMasDatos INT DEFAULT FALSE;
DECLARE c_artistas CURSOR FOR SELECT apellidos, nombre FROM ARTISTAS WHERE nif_jefe IS NULL;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_noHayMasDatos = TRUE;
```

### **Apertura**

```sql
OPEN nombre_cursor;
```

### **Lectura**

```sql
FETCH nombre_cursor INTO variable1[, variable2, ...];
```

> **📌 Consideraciones**
> 

> - En la parte `INTO` deben ir **tantas variables como columnas** tengamos en la sentencia `SELECT`.

> - Cada variable guardará el dato de la columna que venga en el `SELECT`: la primera variable, el dato de la primera columna; la segunda, el de la segunda, y así sucesivamente.

> - Cada variable debe estar definida con el **mismo tipo de dato** que la columna a la que está asociada.

> **📌 Ejemplo completo de lectura con bucle**
> 

```sql
DECLARE v_noHayMasDatos INT DEFAULT FALSE;
DECLARE v_apellidos VARCHAR(100);
DECLARE v_nombre VARCHAR(45);

DECLARE c_artistas CURSOR FOR
    SELECT apellidos, nombre FROM ARTISTAS WHERE nif_jefe IS NULL;

DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_noHayMasDatos = TRUE;

OPEN c_artistas;

read_loop: LOOP
    FETCH c_artistas INTO v_apellidos, v_nombre;

    IF v_noHayMasDatos THEN
        LEAVE read_loop;
    END IF;

    -- Por cada fila disponemos del apellido y nombre.
END LOOP;
```

### **Cierre**

```sql
CLOSE nombre_cursor;
```

> **📌 Ejemplo completo con cierre**
> 

```sql
DECLARE v_noHayMasDatos INT DEFAULT FALSE;
DECLARE v_apellidos VARCHAR(100);
DECLARE v_nombre VARCHAR(45);

DECLARE c_artistas CURSOR FOR
    SELECT apellidos, nombre FROM ARTISTAS WHERE nif_jefe IS NULL;

DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_noHayMasDatos = TRUE;

OPEN c_artistas;

read_loop: LOOP
    FETCH c_artistas INTO v_apellidos, v_nombre;

    IF v_noHayMasDatos THEN
        LEAVE read_loop;
    END IF;

    -- Por cada fila disponemos del apellido y nombre.
END LOOP;

CLOSE c_artistas;
```

> **📌 Tablas temporales**
> 

> Para mostrar el resultado de un recorrido de cursor como **una única consulta** (no valen varios `SELECT`), haremos uso de una **tabla temporal** que vaya guardando los datos y posteriormente haremos un `SELECT` de esta tabla:

```sql
CREATE TEMPORARY TABLE T_TEMPORAL (...);
-- ...
SELECT * FROM T_TEMPORAL;
DROP TEMPORARY TABLE T_TEMPORAL;
```

Esta orden debe ir **después del `DECLARE CONTINUE HANDLER`** del cursor. Recuerda borrar la tabla temporal al salir del procedimiento con `DROP TEMPORARY TABLE`.

## **Ejercicios resueltos**

### **Ejercicio 1**

Crea un procedimiento de nombre `atraccions_checkGanancias` en el que queremos comprobar si las ganancias totales de cada atracción coinciden con la suma de las ganancias de los días en que se celebró. El procedimiento debe devolver una cadena con el formato:

- `atraccion1:gananciatotal:gananciasumada`

- `atraccion2:gananciatotal:gananciasumada`

con las atracciones que no cumplen que la suma sea igual.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS atracciones_checkGanancias;
DELIMITER $$
CREATE PROCEDURE atracciones_checkGanancias()
COMMENT 'Devuelve las atracciones cuya suma total de ganancias no coincide con la suma de las ganancias diarias.'
BEGIN
    -- Declaración de variables
    DECLARE v_final INTEGER DEFAULT 0;
    DECLARE v_atraccion VARCHAR(50);
    DECLARE v_ganTotales INT;
    DECLARE v_ganTotalesPorDia INT;
    DECLARE v_cadenaSalida VARCHAR(1000) DEFAULT ''; -- Cuidado con el valor (null) por defecto para concatenar.

    -- Declaración del cursor
    DECLARE c_checkGanancias CURSOR FOR
        SELECT nombre, ganancias
        FROM ATRACCIONES;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_final = TRUE;

    OPEN c_checkGanancias;

    read_loop: LOOP
        FETCH c_checkGanancias INTO v_atraccion, v_ganTotales;

        IF v_final THEN
            LEAVE read_loop;
        END IF;

        SELECT SUM(ganancias)
        INTO v_ganTotalesPorDia
        FROM ATRACCION_DIA
        WHERE nombre_atraccion = v_atraccion;

        IF (v_ganTotalesPorDia <> v_ganTotales) THEN
            SET v_cadenaSalida = IF (v_cadenaSalida <> '', CONCAT(v_cadenaSalida, ', '), ''); -- Para separar una atracción de otra
            SET v_cadenaSalida = CONCAT(v_cadenaSalida, v_atraccion, ':', v_ganTotales, ':', v_ganTotalesPorDia);
        END IF;
    END LOOP;

    CLOSE c_checkGanancias;

    SELECT v_cadenaSalida AS listaatracciones;
END$$
DELIMITER ;
```

### **Ejercicio 2**

Crea un procedimiento de nombre `artistas_addSuplementoPorCuidados`, que compruebe a cuántos animales cuida cada uno de los artistas. Aquellos artistas que cuidan **más de un número de animales** indicados por un parámetro se les dará un plus en su nómina igual al número de animales que cuida **multiplicado por 100 euros**. Muestra el nombre y complemento de cada artista así como la suma de todos los complementos.

> **📌 Notas**
> 

> - El resultado debe aparecer como **una única consulta** (no valen varios `SELECT`). Para ello haremos uso de una **tabla temporal**.

> - Recuerda borrar la tabla temporal al salir del procedimiento con `DROP TEMPORARY TABLE`.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS artistas_addSuplementoPorCuidados;
DELIMITER $$
CREATE PROCEDURE artistas_addSuplementoPorCuidados(p_numAnimales TINYINT)
COMMENT 'Muestra un suplemento para aquellos artistas que cuidan a más animales de lo indicado así como la suma de los complementos.'
BEGIN
    -- Declaración de variables
    DECLARE v_final INTEGER DEFAULT 0;
    DECLARE v_nif CHAR(9);
    DECLARE v_numAnimales TINYINT DEFAULT 0;
    DECLARE v_complementoTotal INT DEFAULT 0;
    DECLARE v_apellidos VARCHAR(100);
    DECLARE v_nombre VARCHAR(45);

    -- Declaración del cursor
    DECLARE c_complemento CURSOR FOR
        SELECT nif_artista, COUNT(*)
        FROM ANIMALES_ARTISTAS
        GROUP BY nif_artista
        HAVING COUNT(*) > p_numAnimales;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_final = TRUE;

    CREATE TEMPORARY TABLE T_TEMPORAL (nombre_completo VARCHAR(150), suplemento DECIMAL(6,2));

    OPEN c_complemento;

    read_loop: LOOP
        FETCH c_complemento INTO v_nif, v_numAnimales;

        IF v_final THEN
            LEAVE read_loop;
        END IF;

        IF (v_numAnimales > p_numAnimales) THEN
            SELECT apellidos, nombre
            INTO v_apellidos, v_nombre
            FROM ARTISTAS
            WHERE nif = v_nif;

            INSERT INTO T_TEMPORAL
            VALUES (CONCAT(v_apellidos, ', ', v_nombre), v_numAnimales * 100);

            SET v_complementoTotal = v_complementoTotal + v_numAnimales * 100;
        END IF;
    END LOOP;

    INSERT INTO T_TEMPORAL
    VALUES ('Suplemento total', v_complementoTotal);

    SELECT nombre_completo, suplemento
    FROM T_TEMPORAL;

    CLOSE c_complemento;

    DROP TEMPORARY TABLE T_TEMPORAL;
END$$
DELIMITER ;
```

### **Ejercicio 3**

Crea un procedimiento de nombre `animals_addAforoPorTipo` al que se le pase un **tipo de animal** y el **incremento de aforo** y, por cada pista en la que trabaje el animal de este tipo, se llame al procedimiento `pistas_addAforo` (ya implementado en la sección de procedimientos). No hay que llamar varias veces a la misma pista.

> **📌 Notas**
> 

> - Debe mostrar en **una única consulta** la lista de pistas y nuevo aforo a partir de la información que devuelve el procedimiento `pistas_addAforo`. Las pistas no pueden aparecer repetidas.

> - Para ello haremos uso de una **tabla temporal**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_addAforoPorTipo;
DELIMITER $$
CREATE PROCEDURE animales_addAforoPorTipo(p_tipo VARCHAR(9), p_incAforo SMALLINT)
COMMENT 'Hace uso del método animales_addAforo para incrementar el aforo de las pistas donde trabajan los animales del tipo indicado.'
BEGIN
    -- Declaración de variables
    DECLARE v_final INTEGER DEFAULT 0;
    DECLARE v_nombrePista VARCHAR(50);
    DECLARE v_nuevoAforo SMALLINT;

    -- Declaración del cursor
    DECLARE c_pistas CURSOR FOR
        SELECT DISTINCT nombre_pista
        FROM ANIMALES
        WHERE tipo = p_tipo;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_final = TRUE;

    CREATE TEMPORARY TABLE T_TEMPORAL (nombrePista VARCHAR(50), nuevoAforo SMALLINT);

    OPEN c_pistas;

    read_loop: LOOP
        FETCH c_pistas INTO v_nombrePista;

        IF v_final THEN
            LEAVE read_loop;
        END IF;

        SET v_nuevoAforo = p_incAforo;
        CALL pistas_addAforo(v_nombrePista, v_nuevoAforo); -- En v_nuevoAforo está el aforo incrementado

        INSERT INTO T_TEMPORAL (nombrePista, nuevoAforo)
        VALUES (v_nombrePista, v_nuevoAforo);
    END LOOP;

    SELECT nombrePista, nuevoAforo
    FROM T_TEMPORAL
    ORDER BY nombrePista;

    CLOSE c_pistas;

    DROP TEMPORARY TABLE T_TEMPORAL;
END$$
DELIMITER ;
```

> **📌 Resumen**
> 

> - Un **cursor** permite recorrer fila a fila el resultado de un `SELECT`.

> - Operaciones: **DECLARE** → **OPEN** → **FETCH** (en un bucle) → **CLOSE**.

> - Para salir del bucle se usa `DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;` junto con `LEAVE`.

> - Con **`FETCH ... INTO`** se guarda cada fila en variables locales.

> - Para mostrar el resultado en **una única consulta** se usa una **tabla temporal** (`CREATE TEMPORARY TABLE`) que se borra al final con `DROP TEMPORARY TABLE`.

---

## 7.9 Funciones

# **Funciones**

Una **función** lo conforman un bloque de instrucciones que se ejecutan y que **devuelven un dato** el cual es *recogido* por el que realiza la llamada a la función.

> **📌 Función vs. procedimiento**
> 

> Podríamos ver una función como un **procedimiento con un parámetro de tipo `OUT`**. Con respecto a los procedimientos, la función se diferencia (a mayores del hecho de devolver un valor) en que se puede usar **dentro de instrucciones SQL**, como por ejemplo:

```sql
SELECT funcion(), col1 FROM Tabla;
SELECT * FROM Tabla WHERE col = funcion();
```

En estos casos, la función se va a **llamar por cada fila** de la tabla que cumpla los criterios de selección indicados en la consulta `SELECT`.

- El conjunto de instrucciones van en el *routine_body*. Si lo forman varias (lo normal) deben ir entre las etiquetas `BEGIN` y `END`. Fijarse que el `END` debe llevar **punto y coma** si a continuación le siguen nuevas instrucciones.

- Los tipos de datos que va a poder devolver una función son: **STRING, INTEGER, REAL o DECIMAL**.

- Si la función devuelve un número de tipo `DECIMAL`, es como si devolviera un `String`.

## **Crear una función**

> **📌 Sintaxis**
> 

```sql
CREATE
[DEFINER = user]
FUNCTION [IF NOT EXISTS] sp_name ([func_parameter[,...]])
RETURNS type
[characteristic ...] routine_body

func_parameter:
    param_name type
```

> **📌 Ejemplo**
> 

```sql
DELIMITER $$
CREATE FUNCTION ejemploFuncion() RETURNS VARCHAR(20)
BEGIN
    RETURN 'Ejemplo';
END $$
DELIMITER ;

-- Ejemplos de llamada
SELECT ejemploFuncion();   -- Mostrará la cadena 'Ejemplo'
SET @valorDevuelto = ejemploFuncion();
```

- En la definición de la función indicamos el **tipo de dato que va a devolver** (STRING | INTEGER | REAL | DECIMAL).

- En cualquier parte de la función hacemos uso de la instrucción **`RETURN`** pasando un dato que debe ser del mismo tipo que el indicado en la definición.

### **Uso dentro de consultas SQL**

Una de las ventajas que tienen las funciones con respecto a los procedimientos es la posibilidad de **emplearlas dentro de consultas SQL** y emplear columnas de la consulta como parámetros de entrada para la función.

Por ejemplo, si tengo definida una función que devuelve el nombre de un empleado en base a su id, de la forma `employees_getName(id INTEGER)`, puedo llamarla de la forma:

```sql
SELECT employees_getName(emp_no)
FROM salaries;
```

La función tiene como parámetro un `id` el cual se obtiene de **cada fila** de la consulta `SELECT`: por cada fila de dicha consulta, se ejecutará la función enviando como parámetro el `id` de la fila.

## **Características de las funciones**

Después de la definición del tipo de dato que devolverá la función con la palabra reservada `RETURNS`, tenemos que indicar las **características de la función**. Las opciones disponibles son las siguientes:

| Característica | Descripción |
| --- | --- |
| **`DETERMINISTIC`** | La función siempre devuelve el mismo resultado cuando se utilizan los mismos parámetros de entrada. |
| **`NOT DETERMINISTIC`** | La función no siempre devuelve el mismo resultado aunque se utilicen los mismos parámetros. Opción por defecto. |
| **`CONTAINS SQL`** | La función contiene sentencias SQL, pero no contiene sentencias de manipulación de datos (Ej: `SET @x = 1`, `SELECT NOW()`). |
| **`NO SQL`** | La función no contiene sentencias SQL. |
| **`READS SQL DATA`** | La función no modifica los datos y contiene sentencias de lectura, como `SELECT`. |
| **`MODIFIES SQL DATA`** | La función sí modifica los datos y contiene sentencias como `INSERT`, `UPDATE` o `DELETE`. |

> **📌 Restricción de creación**
> 

> Para poder crear una función en MySQL es necesario indicar **al menos una** de estas tres características:

> - `DETERMINISTIC`

> - `NO SQL`

> - `READS SQL DATA`

> Si no se indica al menos una de estas características obtendremos el siguiente mensaje de error:

```sql
ERROR 1418 (HY000): This function has none of DETERMINISTIC, NO SQL, or
READS SQL DATA in its declaration and binary logging is enabled (you *might*
want to use the less safe log_bin_trust_function_creators variable)
```

Es posible configurar la variable global `log_bin_trust_function_creators` a `1` para eliminar la restricción (requiere privilegio `SUPER`):

```sql
SET GLOBAL log_bin_trust_function_creators = 1;
```

## **Ejercicios resueltos**

### **Ejercicio 1**

Crea una función de nombre `utilidades_getMesEnLetra` a la que se le pase un **número** y devuelva el **nombre del mes**. En caso de que el número no se corresponda con ningún mes, debe devolver `NULL`.

> **📌 Notas**
> 

> - Fijarse que esta función es **determinista**.

> - MySQL ya dispone de una función similar: `MONTHNAME()`, que recibe una fecha y devuelve el mes en forma de cadena.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP FUNCTION IF EXISTS utilidades_getMesEnLetra;
DELIMITER $$
CREATE FUNCTION utilidades_getMesEnLetra (p_mes TINYINT) RETURNS VARCHAR(10) DETERMINISTIC NO SQL
COMMENT 'Devuelve el mes en letra que se corresponde con el número de mes.'
BEGIN
    DECLARE v_mesEnLetra VARCHAR(10); -- Valor por defecto NULL

    CASE p_mes
        WHEN 1 THEN SET v_mesEnLetra = 'ENERO';
        WHEN 2 THEN SET v_mesEnLetra = 'FEBRERO';
        WHEN 3 THEN SET v_mesEnLetra = 'MARZO';
        WHEN 4 THEN SET v_mesEnLetra = 'ABRIL';
        WHEN 5 THEN SET v_mesEnLetra = 'MAYO';
        WHEN 6 THEN SET v_mesEnLetra = 'JUNIO';
        WHEN 7 THEN SET v_mesEnLetra = 'JULIO';
        WHEN 8 THEN SET v_mesEnLetra = 'AGOSTO';
        WHEN 9 THEN SET v_mesEnLetra = 'SEPTIEMBRE';
        WHEN 10 THEN SET v_mesEnLetra = 'OCTUBRE';
        WHEN 11 THEN SET v_mesEnLetra = 'NOVIEMBRE';
        WHEN 12 THEN SET v_mesEnLetra = 'DICIEMBRE';
        ELSE SET v_mesEnLetra = NULL;
    END CASE;

    RETURN v_mesEnLetra;
END $$
DELIMITER ;
```

Ejemplos de uso:

> **📌 Ejemplos de uso**
> 

```sql
-- Llama a la función directamente y guarda el resultado en una variable de sesión.
SET @mes = utilidades_getMesEnLetra(10);
SELECT @mes;

-- Muestra los meses en letra en los que se celebró la atracción 'El gran felino'.
SELECT DISTINCT MONTH(fecha) AS mesNumero, utilidades_getMesEnLetra(MONTH(fecha)) AS mesCadena
FROM ATRACCION_DIA
WHERE nombre_atraccion = 'El gran felino'
ORDER BY mesNumero;

-- Muestra las atracciones que se celebraron en ABRIL (busca por la cadena ABRIL).
SELECT *
FROM ATRACCION_DIA
WHERE utilidades_getMesEnLetra(MONTH(fecha)) = 'ABRIL' COLLATE 'utf8mb4_spanish2_ci'
ORDER BY nombre_atraccion, fecha;
```

### **Ejercicio 2**

Modifica el ejercicio en el que creamos el procedimiento de nombre `atracciones_getNumPorMes` y crea una **función** de nombre `utilidades_getMesEnNumero` a la que se le pase el **nombre de un mes** y devuelva el **número** que se corresponde con ese nombre. Si el mes no existe debe devolver **-1**. Modifica el procedimiento para que haga uso de la función.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP FUNCTION IF EXISTS utilidades_getMesEnNumero;
DELIMITER $$
CREATE FUNCTION utilidades_getMesEnNumero (p_mes VARCHAR(10)) RETURNS INTEGER DETERMINISTIC NO SQL
COMMENT 'Devuelve el número de mes que se corresponde con el nombre del mes.'
BEGIN
    DECLARE v_mesEnNumero INT DEFAULT -1; -- Valor por defecto de -1 para el caso de enviar un mes que no exista

    CASE p_mes
        WHEN 'ENERO' THEN SET v_mesEnNumero = 1;
        WHEN 'FEBRERO' THEN SET v_mesEnNumero = 2;
        WHEN 'MARZO' THEN SET v_mesEnNumero = 3;
        WHEN 'ABRIL' THEN SET v_mesEnNumero = 4;
        WHEN 'MAYO' THEN SET v_mesEnNumero = 5;
        WHEN 'JUNIO' THEN SET v_mesEnNumero = 6;
        WHEN 'JULIO' THEN SET v_mesEnNumero = 7;
        WHEN 'AGOSTO' THEN SET v_mesEnNumero = 8;
        WHEN 'SEPTIEMBRE' THEN SET v_mesEnNumero = 9;
        WHEN 'OCTUBRE' THEN SET v_mesEnNumero = 10;
        WHEN 'NOVIEMBRE' THEN SET v_mesEnNumero = 11;
        WHEN 'DICIEMBRE' THEN SET v_mesEnNumero = 12;
    END CASE;

    RETURN v_mesEnNumero;
END $$
DELIMITER ;
```

### **Ejercicio 3**

Crea una función de nombre `animales_getEstadoPorAnhos` que devuelva la cadena:

- Si `tipo = León`:

  - `anhos < 2`: `'JOVEN'`

  - `anhos >= 2` y `<= 5`: `'MADURO'`

  - `anhos > 5`: `'VIEJO'`

- Cualquier otro tipo:

  - `anhos < 1`: `'JOVEN'`

  - `anhos >= 1` y `<= 3`: `'MADURO'`

  - `anhos > 3`: `'VIEJO'`

Llama a la función para mostrar el estado por años de cada uno de los animales del CIRCO.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP FUNCTION IF EXISTS animales_getEstadoPorAnhos;
DELIMITER $$
CREATE FUNCTION animales_getEstadoPorAnhos (p_tipo VARCHAR(9), p_anhos TINYINT) -- El tipo se corresponde con el de la tabla
RETURNS CHAR(6) DETERMINISTIC NO SQL
COMMENT 'Devuelve una cadena indicativa de la edad en función de la edad y tipo de animal.'
BEGIN
    DECLARE v_cadena CHAR(6) DEFAULT '';

    IF (p_tipo = 'León') THEN
        CASE
            WHEN p_anhos < 2 THEN SET v_cadena = 'JOVEN';
            WHEN p_anhos >= 2 AND p_anhos <= 5 THEN SET v_cadena = 'MADURO';
            WHEN p_anhos > 5 THEN SET v_cadena = 'VIEJO';
        END CASE;
    ELSE
        CASE
            WHEN p_anhos < 1 THEN SET v_cadena = 'JOVEN';
            WHEN p_anhos >= 1 AND p_anhos <= 3 THEN SET v_cadena = 'MADURO';
            WHEN p_anhos > 3 THEN SET v_cadena = 'VIEJO';
        END CASE;
    END IF;

    RETURN v_cadena;
END $$
DELIMITER ;

-- Ejemplos de uso
SELECT *, animales_getEstadoPorAnhos(tipo, anhos) AS estado
FROM ANIMALES
ORDER BY nombre;
```

### **Ejercicio 4**

Crea una función de nombre `pistas_getDiferenciaAforo` a la que se le pase el **nuevo aforo** de una pista y devuelva la diferencia entre el aforo nuevo y el aforo anterior.

- Si la diferencia `< 100`: devolver `'PEQUEÑA menor que 100'`.

- Si la diferencia está entre 100 y 500: devolver `'REGULAR entre 100 y 500'`.

- Si la diferencia `> 500`: devolver `'ABISMAL mayor que 500'`.

- Si la pista no existe: devolver `NULL`.

> **📌 Pistas**
> 

> - Por ejemplo: `PISTA1, 150` => Si la pista tiene actualmente un aforo de 100, debe devolver `150 - 100 = 50` => `PEQUEÑA menor que 100`.

> - Acordaos de añadir los **modificadores adecuados** a la creación de la función.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP FUNCTION IF EXISTS pistas_getDiferenciaAforo;
DELIMITER $$
CREATE FUNCTION pistas_getDiferenciaAforo (p_nombrePista VARCHAR(50), p_nuevoAforo INT)
RETURNS VARCHAR(30) READS SQL DATA
COMMENT 'Devuelve una cadena con la diferencia entre el aforo nuevo y el aforo actual de la pista.'
BEGIN
    DECLARE v_aforoAnterior INT;
    DECLARE v_diferencia INT;

    SELECT aforo INTO v_aforoAnterior
    FROM PISTAS
    WHERE nombre = p_nombrePista;

    IF v_aforoAnterior IS NULL THEN
        RETURN NULL;
    END IF;

    SET v_diferencia = p_nuevoAforo - v_aforoAnterior;

    IF v_diferencia < 100 THEN
        RETURN 'PEQUEÑA menor que 100';
    ELSEIF v_diferencia BETWEEN 100 AND 500 THEN
        RETURN 'REGULAR entre 100 y 500';
    ELSE
        RETURN 'ABISMAL mayor que 500';
    END IF;
END $$
DELIMITER ;

-- Muestra los datos de todas las pistas junto con la diferencia del aforo (aforo propuesto 600).
SELECT nombre, pistas_getDiferenciaAforo(nombre, 600) AS diferencia_aforo
FROM PISTAS;

-- Muestra las pistas que tengan una diferencia ABISMAL (aforo propuesto 1000).
SELECT nombre
FROM PISTAS
WHERE INSTR(pistas_getDiferenciaAforo(nombre, 1000), 'ABISMAL') > 0;
```

> **📌 Resumen**
> 

> - Una **función** devuelve un valor (`RETURN`) y puede usarse **dentro de consultas SQL**.

> - Se declara con `CREATE FUNCTION ... RETURNS tipo`.

> - Hay que indicar una característica (`DETERMINISTIC`, `NO SQL` o `READS SQL DATA`).

> - Se puede invocar directamente o como parte de un `SELECT`, ejecutándose por cada fila.

---

## 7.10 Gestión de excepciones

# **Gestión de excepciones**

La **captura de los errores** es necesaria para que el programa o script que se ejecute pueda continuar.

A la hora de programar desde el punto de vista del gestor, por medio de procedimientos/funciones, podemos realizar **dos aproximaciones** diferentes a la gestión de errores:

- **Capturar las excepciones** que se puedan dar y mandar un mensaje al programa cliente (por medio de un parámetro de salida o un valor concreto devuelto con un `SELECT`). En este caso, el tratamiento del error lo gestionaremos **dentro del procedimiento/función** del gestor.

- **No capturar excepciones** y que sea el programa cliente el que gestione las mismas. En este caso, incluso, podemos ser nosotros mismos los que **provoquemos una excepción** dentro del código del procedimiento/función.

Podría darse una combinación de las dos aproximaciones.

> **📌 Trabajar directamente contra MySQL**
> 

> Si trabajamos directamente contra el gestor MySQL **sin hacer uso de un programa cliente**, llamaremos directamente a los procedimientos/funciones, por lo que lo normal sería **intentar capturar nosotros las excepciones** para que la ejecución de los scripts no se parase si se produjera algún error.

## **Declaración de excepciones**

Cuando capturamos excepciones, podremos capturar:

- **Errores y excepciones definidas por el SGBD** (por ejemplo, `DUPLICATE ENTRY FOR KEY`, que se produce cuando intentamos añadir dos filas con la misma clave primaria).

- **Excepciones creadas por el usuario** (por ejemplo, lanzar una excepción cuando se intente añadir un animal con una altura negativa).

En cualquiera de los dos casos, cada excepción va a estar asociada a un **número ya predefinido por el gestor**. Para hacer más legible el manejo de excepciones, podemos asociar dicho número a un **nombre de excepción** y después controlar la captura por dicho nombre y no por el número asociado.

Por ejemplo, el código de error al intentar borrar una tabla que no existe es el **1051**. Dentro de un procedimiento podremos capturar esta excepción y declarar `no_existe_tabla` cuando se produzca el error 1051:

```sql
DECLARE no_existe_tabla CONDITION FOR 1051;
```

### **Error Code y SQLState Code**

En la lista de mensajes de error aparecen dos tipos de errores asociados a cada mensaje:

- **Error Code**: son números específicos de MySQL que no valen para otros gestores.

- **SQLState Code**: cadena de 5 dígitos basado en ANSI SQL y ODBC y por lo tanto sus códigos son *estandarizados*.

Emplear uno u otro va a depender de nuestro programa cliente. En el caso de querer dar un nombre a la excepción empleando el **SQLState**, la sintaxis cambia:

```sql
DECLARE no_existe_tabla CONDITION FOR SQLSTATE '42S02';
```

Algunos códigos de error de MySQL:

| Error Number | Symbol | SQLSTATE | Message |
| --- | --- | --- | --- |
| 1006 | ER_CANT_CREATE_DB | HY000 | Can't create database '%s' (errno: %d - %s) |
| 1007 | ER_DB_CREATE_EXISTS | HY000 | Can't create database '%s'; database exists |
| 1022 | ER_DUP_KEY | 23000 | Can't write; duplicate key in table '%s' |
| 1049 | ER_BAD_DB_ERROR | 42000 | Unknown database '%s' |
| 1050 | ER_TABLE_EXISTS_ERROR | 42S01 | Table '%s' already exists |
| 1051 | ER_BAD_TABLE_ERROR | 42S02 | Unknown table '%s' |
| 1052 | ER_NON_UNIQ_ERROR | 23000 | Column '%s' in %s is ambiguous |

## **Lanzando excepciones: SIGNAL**

Con **`SIGNAL`** podremos lanzar excepciones personalizadas, de este modo podremos realizar **validaciones de negocio**, como por ejemplo *el peso de los animales debe ser mayor a 0*. Siendo la siguiente sintaxis:

```sql
SIGNAL condition_value
[SET signal_information_item [, signal_information_item] ...]
```

- **`condition_value`**: puede ser un valor de `SQLSTATE` (una cadena literal de 5 caracteres) o un `condition_name` que hace referencia a una condición previamente definida con `DECLARE ... CONDITION`.

- **`signal_information_item`**: elementos de información de la condición que se pueden establecer, como `MESSAGE_TEXT`, `MYSQL_ERRNO`, entre otros.

- El valor de SQLSTATE **no debe comenzar con `'00'`**, ya que estos indican éxito y no son válidos para un error. Para señalar un valor genérico de SQLSTATE se utiliza **`'45000'`**, que significa *excepción definida por el usuario no manejada*.

- La cláusula `SET` es opcional y permite establecer múltiples elementos de información de la condición:

  - **`MESSAGE_TEXT`**: mensaje que se mostrará al usuario.

  - **`MYSQL_ERRNO`**: número de error específico de MySQL.

  - Otros elementos como `SCHEMA_NAME`, `TABLE_NAME`, `COLUMN_NAME`, etc., para proporcionar más contexto.

> **📌 Ejemplo 1. SIGNAL directo**
> 

```sql
DELIMITER $$
CREATE PROCEDURE ejemplo (valor INT)
BEGIN
    IF valor < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El valor no puede ser negativo',
            MYSQL_ERRNO = 1001;
    END IF;
END$$
DELIMITER ;
```

> **📌 Ejemplo 2. Condición con nombre**
> 

```sql
DELIMITER $$
CREATE PROCEDURE ejemplo (valor INT)
BEGIN
    DECLARE condicion_negativa CONDITION FOR SQLSTATE '45000';

    IF valor < 0 THEN
        SIGNAL condicion_negativa
        SET MESSAGE_TEXT = 'El valor no puede ser negativo';
    END IF;
END$$
DELIMITER ;
```

## **Manejando excepciones: DECLARE HANDLER**

Para añadirle un comportamiento a la gestión de errores, necesitamos declarar un **manejador de errores** en nuestro código, mediante `DECLARE HANDLER`, sentencia que tiene la siguiente sintaxis:

```sql
DECLARE handler_action HANDLER
FOR condition_value [, condition_value] ...
statement
```

- **`handler_action`**: qué hacer cuando ocurre la condición.

  - **`CONTINUE`**: continúa la ejecución con la siguiente instrucción.

  - **`EXIT`**: sale del bloque `BEGIN ... END` donde está el manejador.

  - **`UNDO`**: (no implementado en MySQL, se acepta pero no tiene efecto).

- **`condition_value`**: la condición a manejar.

  - Códigos `SQLSTATE` como `'02000'` (sin resultados).

  - Códigos de error específicos de MySQL.

  - Palabras clave como:

    - **`SQLEXCEPTION`**: cualquier error.

    - **`SQLWARNING`**: advertencias (como truncamiento).

    - **`NOT FOUND`**: sin resultados (por ejemplo, en un `SELECT ... INTO` que no encuentra nada).

  - Condiciones nombradas con `DECLARE ... CONDITION`.

- **`statement`**: la instrucción a ejecutar cuando ocurre la condición.

Los manejadores se asocian mediante `FOR` a códigos de error, estados de SQL (los cuales son cadenas y por tanto van entre comillas) y las condiciones predefinidas:

> **📌 Ejemplos de manejadores**
> 

```sql
-- Manejar un error genérico: evita que el procedimiento se detenga por completo si ocurre un error.
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
SET @error = 'Ocurrió un error';

-- Manejar un resultado no encontrado. Común en bucles LOOP que leen datos fila a fila con cursores.
DECLARE CONTINUE HANDLER FOR NOT FOUND
SET done = TRUE;

-- Con SQLSTATE
DECLARE EXIT HANDLER FOR SQLSTATE '23000'
SET @error = 'Violación de restricción UNIQUE';
```

### **Ejemplo sobre la BBDD CIRCO**

Controlar si se produce un error al insertar un animal con pista o atracción inexistente:

> **📌 Procedimiento con manejador**
> 

```sql
DELIMITER $$
CREATE PROCEDURE insertarAnimal_Handler(
    IN nom VARCHAR(50),
    IN tipo VARCHAR(9),
    IN anhos INT,
    IN peso FLOAT,
    IN estatura FLOAT,
    IN atraccion VARCHAR(50),
    IN pista VARCHAR(50)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    SELECT 'Error al insertar el animal: posiblemente una clave foránea no existe' AS mensaje;

    INSERT INTO ANIMALES (NOMBRE, TIPO, ANHOS, PESO, ESTATURA, NOMBRE_ATRACCION, NOMBRE_PISTA)
    VALUES (nom, tipo, anhos, peso, estatura, atraccion, pista);

    SELECT 'Animal insertado correctamente' AS mensaje;
END $$
DELIMITER ;

CALL insertarAnimal_Handler('León Rojo', 'felino', 5, 200, 1.5, 'Atracción Falsa', 'Pista 1');
```

## **Ejercicios resueltos**

### **Ejercicio 1**

Crea un procedimiento de nombre `animales_Delete` que dado el nombre de un animal, lo borre. Antes tendrá que borrar todas las tablas relacionadas. En el caso de que el animal tenga **menos de 2 años** no estará permitido borrarlo y lanzará una excepción (el código de error para excepciones definidas por el usuario es el **45000**) con el texto: *No es posible dar de baja a animales con menos de dos años*. En el caso de que el animal **no exista**, deberá lanzar una excepción con el texto *'Ese animal no existe'* y un **ErrorCode 1643**.

> **📌 Nota**
> 

> Este procedimiento borra los datos de varias tablas, por lo que necesitaríamos hacer uso de una **transacción**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_delete;
DELIMITER $$
CREATE PROCEDURE animales_delete(p_nombreAnimal VARCHAR(50))
COMMENT 'Da de baja un animal siempre que su edad sea superior a 2 años'
bloque_proc:BEGIN
    DECLARE v_anos TINYINT DEFAULT -1;

    SELECT anhos
    INTO v_anos
    FROM ANIMALES
    WHERE nombre = p_nombreAnimal;

    CASE
        WHEN v_anos = -1 THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Ese animal no existe',
                MYSQL_ERRNO = 1643;
            -- LEAVE bloque_proc; NO HACE FALTA YA QUE SIGNAL HACE SALIR DEL PROCEDIMIENTO
        WHEN v_anos < 2 THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'No se puede dar de baja a animales con menos de dos años';
            -- LEAVE bloque_proc; NO HACE FALTA YA QUE SIGNAL HACE SALIR DEL PROCEDIMIENTO
        ELSE BEGIN END;
    END CASE;

    -- BORRAMOS LOS ANIMALES. Necesitaríamos una transacción.
    DELETE FROM ANIMALES_ARTISTAS
    WHERE nombre_animal = p_nombreAnimal;

    DELETE FROM ANIMALES
    WHERE nombre = p_nombreAnimal;
END$$
DELIMITER ;

CALL animales_delete('no_existe');   -- Devuelve el código 1643
CALL animales_delete('Berni');       -- No cumple que la edad sea superior a 2 años.
CALL animales_delete('Princesa2');   -- Lo da de baja de todas las tablas
```

### **Ejercicio 2**

Crea un procedimiento de nombre `animales_addArtista` al que se le pase el **nombre de un animal** y el **nif de un artista** y asigne el cuidador al animal. Deberá comprobar que el animal y el artista existen. En caso de que no, deberá lanzar una excepción con el **ErrorCode 1643** y texto *'El animal no existe'* o *'El artista no existe'*.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_addArtista;
DELIMITER $$
CREATE PROCEDURE animales_addArtista(p_nombreAnimal VARCHAR(50), p_nif CHAR(9))
COMMENT 'Asigna un nuevo artista a un animal.'
bloque_proc:BEGIN
    IF (SELECT COUNT(*) FROM ANIMALES WHERE nombre = p_nombreAnimal) = 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Ese animal no existe',
            MYSQL_ERRNO = 1643;
        -- LEAVE bloque_proc; NO HACE FALTA YA QUE SIGNAL HACE SALIR DEL PROCEDIMIENTO
    END IF;

    IF (SELECT COUNT(*) FROM ARTISTAS WHERE nif = p_nif) = 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Ese artista no existe',
            MYSQL_ERRNO = 1643;
        -- LEAVE bloque_proc; NO HACE FALTA YA QUE SIGNAL HACE SALIR DEL PROCEDIMIENTO
    END IF;

    INSERT INTO ANIMALES_ARTISTAS (nombre_animal, nif_artista)
    VALUES (p_nombreAnimal, p_nif);
END$$
DELIMITER ;

CALL animales_addArtista('no_existe', '11111111A');
CALL animales_addArtista('Princesa1', 'no_existe');
CALL animales_addArtista('Leo', '33333333C'); -- Si lanzamos dos veces esta orden, MySQL lanzará una excepción de clave duplicada.
```

### **Ejercicio 3**

Crea un procedimiento de nombre `animales_add` que añade un nuevo animal. En caso de intentar dar de alta un animal con el **mismo nombre**, captura la excepción y haz que el procedimiento devuelva (con un select) **-1**. En caso de que el alta sea correcta, que devuelva **0**. En el caso de que el nombre de la pista o de la atracción **no exista**, captura la excepción y devuelve el valor **-2**.

> **📌 Pistas**
> 

> - Trabaja con **nombres de excepciones** en vez de con los números asociados: `ex_claveDuplicada`, `ex_pista_atracc_no_existe`.

> - Para saber el número de excepción que tienes que capturar, **provoca el fallo y anota el número**.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS animales_add;
DELIMITER $$
CREATE PROCEDURE animales_add(p_nombreAnimal VARCHAR(50), p_tipo VARCHAR(9), p_anos TINYINT,
                              p_peso FLOAT, p_estatura FLOAT, p_atraccion VARCHAR(50), p_pista VARCHAR(50))
COMMENT 'Añade un nuevo animal.'
BEGIN
    DECLARE ex_claveDuplicada CONDITION FOR 1062;
    DECLARE ex_pista_atracc_no_existe CONDITION FOR 1452;

    DECLARE EXIT HANDLER FOR ex_claveDuplicada
    BEGIN
        SELECT -1;
    END;

    DECLARE EXIT HANDLER FOR ex_pista_atracc_no_existe
    BEGIN
        SELECT -2;
    END;

    INSERT INTO ANIMALES (nombre, tipo, anhos, peso, estatura, nombre_atraccion, nombre_pista)
    VALUES (p_nombreAnimal, p_tipo, p_anos, p_peso, p_estatura, p_atraccion, p_pista);

    SELECT 0;
END$$
DELIMITER ;

CALL animales_add('Leo', 'León', 3, 230, 1.34, NULL, NULL);                    -- Clave duplicada
CALL animales_add('Leo2', 'León', 3, 230, 1.34, 'NO EXISTE', NULL);            -- Atracción que no existe
CALL animales_add('Leo2', 'León', 3, 230, 1.34, 'El gran felino', 'SUPER');    -- Todo correcto
```

> **📌 Nota**
> 

> Como el procedimiento sólo va a tener una orden `INSERT`, no hace falta hacer que salga del mismo al producirse la excepción. Fijarse que **no se produce una excepción** en la llamada al procedimiento, por lo que la ejecución con órdenes posteriores seguiría.

### **Ejercicio 4**

Crea un procedimiento de nombre `artistas_add` que añade un nuevo artista. Se debe comprobar si el **nif existe**. Esta comprobación se hará **capturando la excepción correspondiente**. En caso de error, se mandará en un **parámetro de salida** el valor **-1**. Si todo está correcto se mandará el valor **0**.

> **📌 Pistas**
> 

> - Crea un nombre de excepción: `ex_artista_duplicado`.

> - Junto a los datos del artista se debe enviar el **nombre de un animal** (debe estar previamente dado de alta) que va a cuidar el artista.

> - Se debe llamar al método `animales_addArtista` (creado previamente) y **capturar la posible excepción** que lance dicho método empleando el SQLSTATE. Si el animal no existe debe enviar en el parámetro de salida el valor **-2**.

> - Crea un nombre de excepción: `ex_animal_no_existe`. Cualquier excepción que se produzca debe hacer que se salga del procedimiento.

> **📌 Solución**
> 

```sql
USE CIRCO;
DROP PROCEDURE IF EXISTS artistas_add;
DELIMITER $$
CREATE PROCEDURE artistas_add(p_nif CHAR(9), p_apellidos VARCHAR(100), p_nombre VARCHAR(50),
                              p_nifJefe CHAR(9), p_nombreAnimal VARCHAR(50), OUT p_resultado TINYINT)
COMMENT 'Añade un nuevo artista.'
BEGIN
    DECLARE ex_artista_duplicado CONDITION FOR 1062;
    DECLARE ex_animal_no_existe CONDITION FOR SQLSTATE '45000';

    DECLARE EXIT HANDLER FOR ex_artista_duplicado
        SET p_resultado = -1;

    DECLARE EXIT HANDLER FOR ex_animal_no_existe
        SET p_resultado = -2;

    INSERT INTO ARTISTAS (nif, apellidos, nombre, nif_jefe)
    VALUES (p_nif, p_apellidos, p_nombre, p_nifJefe);

    CALL animales_addArtista(p_nombreAnimal, p_nif);

    SET p_resultado = 0;
END$$
DELIMITER ;

CALL artistas_add('11111111A', 'Orten Sanlat', 'Cristina', NULL, 'Leo', @resultado); -- Devuelve -1 => Clave primaria duplicada
SELECT @resultado;

CALL artistas_add('11111122F', 'Orten Sanlat', 'Cristina', '92828822A', 'Leo', @resultado); -- Devuelve 0 => Nif jefe no existe pero el trigger lo cambia por NULL
SELECT @resultado;

CALL artistas_add('11111144F', 'Jiménez Royal', 'Lucas', NULL, 'Leo_NO_EXISTE', @resultado); -- Devuelve -2 => Animal no existe PERO al no estar en una transacción, el artista se ha añadido
SELECT @resultado;
```

> **📌 Transacciones**
> 

> Este método es un candidato para realizar una **transacción** ya que va a afectar a dos tablas (va a añadir dos filas).

> **📌 Resumen**
> 

> - Podemos **capturar excepciones** (enviando un código al cliente) o **dejarlas que las gestione el programa cliente**.

> - `DECLARE ... CONDITION FOR` asigna un **nombre** a un código de error (`Error Code`) o `SQLSTATE`.

> - **`SIGNAL`** lanza excepciones personalizadas (`SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '...'`).

> - **`DECLARE ... HANDLER`** define qué hacer ante una condición: `CONTINUE` o `EXIT`.

> - Condiciones predefinidas: `SQLEXCEPTION`, `SQLWARNING` y `NOT FOUND`.

> - El código 45000 es la *excepción definida por el usuario*.

---

## ✏️ Actividades y Prácticas de la Unidad


---

### Actividad Práctica ACT701 — 701

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

---

### Actividad Práctica ACT702 — 702

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

---

### Actividad Práctica ACT703 — 703

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

---

### Actividad Práctica ACT704 — 704

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

---

### Actividad Práctica ACT705 — 705

# **Actividad 705**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `705_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **eventos** (`CREATE EVENT`).

> - La correcta configuración del **calendario de ejecución** (`AT`, `EVERY`, `STARTS`, `ENDS`, `ON COMPLETION`).

> - El correcto uso de **`ALTER EVENT`** y **`DROP EVENT`**.

> - La consulta de los eventos creados (`SHOW EVENTS`, `information_schema.EVENTS`).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. h) Se han definido acontecimientos y disparadores.

> **📌 Aviso**
> 

> Para que los eventos se ejecuten es necesario que el **planificador de eventos** esté activado: `SET GLOBAL event_scheduler = ON;`

## **Eventos**

Trabajaremos con la base de datos **`employees`** (datos de una empresa) que ya deberías tener importada en tu servidor MySQL, y sobre la base de datos **`CIRCO`**.

**Ejercicio 1.** Queremos registrar, **cada 1 minuto en el día de hoy y durante unos 10 minutos** desde el momento de creación del evento, qué usuarios están accediendo a la base de datos `employees`. Estos usuarios (sus nombres y equipos) deberán quedar registrados en una tabla de nombre `'historico_usuarios_hora'` en la que se guardará el nombre del usuario así como el día-hora-minuto en el que se produjo el registro de actividad.

- Crea **dos usuarios** y conéctate a la base de datos. Después haz que uno de ellos se desconecte de la base de datos.

- **Modifica el evento** y haz que el evento **no desaparezca** cuando termine el intervalo de ejecución.

- Modifica el evento para que se vuelva a ejecutar **en el minuto siguiente al actual** y comprueba que registra nuevamente a uno de los usuarios anteriores (que se vuelva a conectar).

> **📌 Pistas**
> 

> - Para saber qué usuarios están conectados: `SELECT DISTINCT user, host FROM information_schema.PROCESSLIST;`

> - El campo fecha-hora se puede guardar con `NOW()` o `SYSDATE()`.

**Ejercicio 2.** Haz que el **día 15 de Mayo del 2025 a las 23:15** se guarde una copia de los datos de la tabla `departments` en una tabla creada por ti previamente de nombre `dept_copia_temp`.

> **📌 Pista**
> 

> `AT '2025-05-15 23:15:00'`.

**Ejercicio 3.** Crea una tabla de nombre `empleados_numero_mensual` que guarde el número de empleados que tiene la empresa. Haz que se ejecute **una vez 4 días después** de que se cree el evento.

- Ejecuta la orden que muestre el **momento en que se va a ejecutar**.

- Modifica el evento para que se ejecute **desde el día de hoy hasta dentro de un año** y que lo haga **cada mes**.

- Ejecuta la orden que muestre el momento en que se va a ejecutar.

> **📌 Pista**
> 

> El *next execution* se puede consultar con `SELECT * FROM information_schema.EVENTS WHERE event_name = '...'\G` o con `SHOW EVENTS`.

**Ejercicio 4.** Haz que el **día 1 de Enero de cada año** se actualicen los salarios de los manager de cada departamento un **10%** (trabajan mucho :) que estén trabajando actualmente en la empresa. Esta actualización se debe producir **durante 5 años a partir del actual**.

- Cambia la hora del sistema para comprobar que se ejecuta el evento.

> **📌 Pistas**
> 

> - `EVERY 1 YEAR STARTS '2025-01-01 00:00:00' ENDS '2029-01-01 00:00:00'` (los años del ejemplo se deben adaptar al curso actual).

> - Los managers actuales de cada departamento están en la tabla `dept_manager` (empleados cuyo `to_date` es una fecha futura, por ejemplo `'9999-01-01'`).

**Ejercicio 5.** Realiza las siguientes consultas:

- Muestra **todos los eventos** creados.

- Muestra todos los eventos creados por el usuario **`root`**.

- **Borra uno de los eventos**, asegurándote de que exista.

---

### Actividad Práctica ACT706 — 706

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

---

### Actividad Práctica ACT707 — 707

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

---

### Actividad Práctica ACT708 — 708

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

---

### Actividad Práctica ACT709 — 709

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
