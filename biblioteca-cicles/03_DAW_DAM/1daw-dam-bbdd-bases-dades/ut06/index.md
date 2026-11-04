---
layout: default
title: "UD6: Consultas sobre Bases de Datos — SQL DQL (SELECT) — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT06"
prev_url: "../ut05/index.html"
prev_label: "⬅️ UD5"
next_url: "../ut07/index.html"
next_label: "UD7 ➡️"
---

# UD6: Consultas sobre Bases de Datos — SQL DQL (SELECT)

Bienvenido/a a la **UD6: Consultas sobre Bases de Datos — SQL DQL (SELECT)** del módulo profesional de **Bases de Datos** (1º DAW / DAM / ASIX · Bases de Datos).

En esta unidad encontrarás los contenidos teóricos, ejemplos prácticos, ejercicios resueltos y actividades de evaluación curricular desarrollados por el profesor **Manuel Alonso Argente**.

---

### 📑 Índice de Apartados y Actividades de la Unidad

- [**📋 6.0 Propuesta Didáctica: Consultas BBDD. (DQL)**](./ut0600.html)
- [**6.1 Introducción. El lenguaje SQL**](./ut0601.html)
- [**6.2 Consultas Simples. SELECT**](./ut0602.html)
- [**6.3 Consultas Simples. Tipos de operadores**](./ut0603.html)
- [**6.4 Consultas Simples. Campos calculados, ordenadas y cabecera**](./ut0604.html)
- [**6.5 Consultas complejas. Resumen o agregado**](./ut0605.html)
- [**6.6 Consultas complejas. Subconsultas**](./ut0606.html)
- [**6.7 Consultas complejas. Múltiples selecciones**](./ut0607.html)
- [**6.8 Consultas complejas. Consultas multitabla**](./ut0608.html)
- [**6.9 Optimización de consultas**](./ut0609.html)
- [**6.10 Vistas**](./ut0610.html)

**Actividades Prácticas y Fichas de Trabajo:**

- [**✏️ ACT601 601**](./act_act601.html)
- [**✏️ ACT602 602**](./act_act602.html)
- [**✏️ ACT603 603**](./act_act603.html)
- [**✏️ ACT604 604**](./act_act604.html)
- [**✏️ ACT605 605**](./act_act605.html)

---

# 📖 Vista Completa de la Unidad

## 6.0 Propuesta Didáctica — Consultas BBDD. (DQL)

# **Consultas BBDD. (DQL)**

## **Propuesta didáctica**

En esta unidad vamos a trabajar el RA2: **"Crea bases de datos definiendo su estructura y las características de sus elementos según el modelo relacional"** y el RA3: **"Consulta la información almacenada en una base de datos empleando asistentes, herramientas gráficas y el lenguaje de manipulación de datos"**.

## **Criterios de evaluación**

### **Respecto al RA2 y al RA3**:

| Código | Descripción | Peso (%) | Herramientas Evaluación |
| --- | --- | --- | --- |
| **CA2.f** | Se han creado vistas. | 10% | ACT604 (5%) -- EXA0601 (95%) |
| **CA3.a** | Se han identificado las herramientas y sentencias para realizar consultas. | 10% | ACT601 (5%) -- ACT602 (5%) -- ACT603 (5%) -- EXA0601 (85%) |
| **CA3.b** | Se han realizado consultas simples sobre una tabla. | 15% | ACT601 (5%) -- ACT602 (5%) -- ACT603 (5%) -- EXA0601 (85%) |
| **CA3.c** | Se han realizado consultas sobre el contenido de varias tablas mediante composiciones internas. | 15% | ACT601 (5%) -- ACT602 (5%) -- ACT603 (5%) -- EXA0601 (85%) |
| **CA3.d** | Se han realizado consultas sobre el contenido de varias tablas mediante composiciones externas. | 15% | ACT601 (5%) -- ACT602 (5%) -- ACT603 (5%) -- EXA0601 (85%) |
| **CA3.e** | Se han realizado consultas resumen. | 10% | ACT601 (5%) -- ACT602 (5%) -- ACT603 (5%) -- EXA0601 (85%) |
| **CA3.f** | Se han realizado consultas con subconsultas. | 10% | ACT601 (5%) -- ACT602 (5%) -- ACT603 (5%) -- EXA0601 (85%) |
| **CA3.g** | Se han realizado consultas que implican múltiples selecciones. | 15% | ACT601 (5%) -- ACT602 (5%) -- ACT603 (5%) -- EXA0601 (85%) |
| **CA3.h** | Se han aplicado criterios de optimización de consultas. | 10% | ACT605 (5%) -- EXA0601 (95%) |

## **Contenidos**

### **Consultas BBDD (DQL)**:

- Introducción al lenguaje SQL. Subgrupos de sentencias (DDL, DML, DCL, TCL y DQL).

- Consultas simples sobre una tabla. Cláusula `SELECT`. `LIMIT` y `DISTINCT`.

- Tipos de operadores: aritméticos, de comparación, lógicos y de conjuntos.

- Campos calculados, ordenación (`ORDER BY`) y alias (`AS`).

- Consultas resumen: funciones de agregado, `GROUP BY` y `HAVING`.

- Subconsultas con operadores básicos, `ALL`, `ANY`, `IN` y `EXISTS`.

- Múltiples selecciones: `UNION`, `UNION ALL`, `INTERSECT` y `EXCEPT`.

- Consultas multitabla: composiciones internas (`INNER JOIN`) y externas (`LEFT`, `RIGHT` y `FULL OUTER JOIN`).

- Optimización de consultas: plan de ejecución (`EXPLAIN`) e índices.

- Vistas.

> **📌 Cuestionario inicial**
> 

> 1. ¿Qué es el lenguaje SQL? ¿Qué subgrupos de sentencias existen?

> 1. ¿Qué es una consulta? ¿Qué cláusulas puede tener una sentencia `SELECT`?

> 1. ¿Qué operadores de comparación conoces? ¿Qué es `LIKE` y para qué sirven los comodines `%` y `_`?

> 1. ¿Qué es un campo calculado? ¿Qué es un alias?

> 1. ¿Qué funciones de agregado conoces? ¿Para qué sirve `GROUP BY`? ¿Y `HAVING`?

> 1. ¿Qué es una subconsulta? ¿En qué cláusulas puede aparecer?

> 1. ¿Qué operadores de conjuntos conoces?

> 1. ¿Qué diferencia hay entre una composición interna y una composición externa?

> 1. ¿Qué es un índice? ¿Qué es el plan de ejecución de una consulta?

> 1. ¿Qué es una vista? ¿Qué ventajas tiene?

## **Programación de Aula (20 sesiones)**

Esta unidad es la sexta y se imparte a lo largo de enero y febrero de 2027, con una duración estimada de 20 sesiones lectivas:

### **Enero 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | **1 🛑** | **2 🛑** | **3 🛑** |
| **4 🛑** | **5 🛑** | **6 🛑** | **7** | **8** | **9 🛑** | **10 🛑** |
| **11** | **12** | **13** | **14** | **15** | **16 🛑** | **17 🛑** |
| **18** | **19 📚** | **20 📚** | **21** | **22 📚** | **23 🛑** | **24 🛑** |
| **25** | **26 📚** | **27 📚** | **28** | **29 📚** | **30 🛑** | **31 🛑** |

### **Febrero 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | **2 📚** | **3 📚** | **4** | **5 📚** | **6 🛑** | **7 🛑** |
| **8** | **9 📚** | **10 📚** | **11** | **12 📚** | **13 🛑** | **14 🛑** |
| **15** | **16** | **17** | **18** | **19** | **20 🛑** | **21 🛑** |
| **22** | **23** | **24** | **25** | **26** | **27 🛑** | **28 🛑** |

| Sesión | Contenidos | Actividades | Criterios trabajados |
| --- | --- | --- | --- |
| 1 | Introducción al SQL |  | CA3a, CA3b |
| 1 | Consultas simples |  | CA3a, CA3b |
| 2 | Tipos de operadores |  | CA3b |
| 3 | Campos calculados, ordenación y alias |  | CA3b |
| 4 | Consultas resumen y agrupaciones |  | CA3e |
| 5 | Actividades | ACT601 | CA3a, CA3b, CA3c, CA3d, CA3e, CA3f, CA3g |
| 6 | Subconsultas |  | CA3f |
| 7 | Múltiples selecciones |  | CA3g |
| 8 | Consultas multitabla |  | CA3c, CA3d |
| 9 | Actividades | ACT602 | CA3a -- CA3g |
| 10 | Actividades | ACT603 | CA3a -- CA3g |
| 11 | Vistas |  | CA2f |
| 12 | Actividades | ACT604 | CA2f |
| 13 | Optimización de consultas |  | CA3h |
| 14 | Actividades | ACT605 | CA3h |
| 15 | Actividades | ACT601 -- ACT602 -- ACT603 -- ACT604 -- ACT605 | CA2f, CA3a, CA3b, CA3c, CA3d, CA3e, CA3f, CA3g |
| 16 | Actividades | ACT601 -- ACT602 -- ACT603 -- ACT604 -- ACT605 | CA2f, CA3a, CA3b, CA3c, CA3d, CA3e, CA3f, CA3g |
| 17 | Actividades | ACT601 -- ACT602 -- ACT603 -- ACT604 -- ACT605 | CA2f, CA3a, CA3b, CA3c, CA3d, CA3e, CA3f, CA3g |
| 18 | Actividades | ACT601 -- ACT602 -- ACT603 -- ACT604 -- ACT605 | CA2f, CA3a, CA3b, CA3c, CA3d, CA3e, CA3f, CA3g |
| 19 | Actividades | EXA0601 | CA2f, CA3a, CA3b, CA3c, CA3d, CA3e, CA3f, CA3g |
| 20 | Actividades | EXA0601 | CA2f, CA3a, CA3b, CA3c, CA3d, CA3e, CA3f, CA3g |

---

## 6.1 Introducción. El lenguaje SQL

# **Introducción. El lenguaje SQL**

El **SQL** (*Structured Query Language*, Lenguaje de Consulta Estructurado) es un **lenguaje específico de dominio** (DSL, *Domain-Specific Language*) que se utiliza para gestionar las bases de datos relacionales y realizar operaciones sobre los datos que contienen.

## **Categorías de las instrucciones SQL**

Las instrucciones SQL se agrupan en **5 categorías** según la funcionalidad que desempeñan:

| Categoría | Siglas | Sentencias |
| --- | --- | --- |
| Lenguaje de Definición de Datos | **DDL** | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| Lenguaje de Manipulación de Datos | **DML** | `INSERT`, `UPDATE`, `DELETE` |
| Lenguaje de Control de Datos | **DCL** | `GRANT`, `REVOKE` |
| Lenguaje de Control de Transacciones | **TCL** | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |
| Lenguaje de Consulta de Datos | **DQL** | `SELECT` |

> **📌 DQL**
> 

> El **DQL** (*Data Query Language*) agrupa las instrucciones **`SELECT`** en diferentes niveles. En esta unidad trabajaremos desde las consultas más **simples** hasta las **complejas**, para finalmente aplicar criterios de **optimización** y crear **vistas**.

## **Consultas**

Una **consulta** es una instrucción que nos permite **recuperar información** almacenada en la base de datos. Las consultas más sencillas eligen **qué campos de la tabla** mostraremos en el resultado, aunque podemos abreviar y mostrarlos todos utilizando el comodín del asterisco `*`.

> **📌 Resumen**
> 

> - El **SQL** es un lenguaje específico de dominio para trabajar con bases de datos relacionales.

> - Las instrucciones se agrupan en **DDL**, **DML**, **DCL**, **TCL** y **DQL**.

> - El **DQL** agrupa las instrucciones `SELECT`, que recuperan información de las tablas.

> - El comodín `*` selecciona **todos los campos** de una tabla.

---

## 6.2 Consultas Simples. SELECT

# **Consultas Simples. SELECT**

La instrucción **`SELECT`** nos permite **seleccionar los campos** de la tabla que indiquemos en la cláusula **`FROM`**. Si utilizamos el comodín `*`, seleccionará todos los campos. Si queremos **filtrar el resultado** por el valor de algún campo concreto, lo pondremos después de la cláusula **`WHERE`**.

> **📌 Sintaxis**
> 

```sql
SELECT [ {ALL | DISTINCT | DISTINCTROW } ]
<nombre_campo> [ , <nombre_campo> [ , ... ] ]
FROM <nombre_tabla> [ , {<nombre_tabla>} [ , ...] ]
[WHERE <condición> [ {AND | OR} <condición> [ , ...] ]]
[ORDER BY <condición> [ {AND | OR} <condición> [ , ...] ]]
[DESC]
[LIMIT [<posición_inicial>], <número_registros>]
```

> **📌 Ejemplo**
> 

```sql
-- Mostrará todos los campos de la tabla del director
SELECT * FROM Director;

-- Sólo mostrará los registros que cumplen los filtros
SELECT nombreDirector, edadDirector
FROM Director
WHERE salarioDirector > 10000 AND nacionalidadDirector = 1;
```

## **LIMIT**

La cláusula **`LIMIT [<posición_inicial>], <número_registros>`** es muy interesante para hacer aplicaciones de escritorio o web. Permite ir **recuperando los registros** de la consulta en bloques con el número de registros indicado.

- Si se omite la posición inicial, comenzará por el registro inicial o cero.

- En las siguientes muestras de datos ya **no podremos omitir** el valor de la posición inicial.

De esta manera podemos realizar consultas con muchos registros (centenares, miles o millones) e ir recuperando la información a intervalos del tamaño que queramos.

> **📌 Ejemplo**
> 

```sql
SELECT count(*) FROM jardineria.cliente;
SELECT * FROM jardineria.cliente LIMIT 0,10;
SELECT * FROM jardineria.cliente LIMIT 11,10;
SELECT * FROM jardineria.cliente LIMIT 21,10;
SELECT * FROM jardineria.cliente LIMIT 31,6;
```

## **Duplicados. DISTINCT**

Puede que los resultados estén **repetidos** en la consulta. Por ejemplo, si queremos mostrar la población de los alumnos del centro, este campo se repetirá. Si usamos la sentencia **`DISTINCT`** evitaremos los duplicados:

> **📌 Ejemplo**
> 

```sql
SELECT población FROM centro.alumno;
SELECT DISTINCT población FROM centro.alumno;
```

| Población (con duplicados) | Población (DISTINCT) |
| --- | --- |
| Alfarb | Alfarb |
| Catadau | Catadau |
| Llombai | Llombai |
| Llombai | Carlet |
| Catadau |  |
| Alfarb |  |
| Carlet |  |

> **📌 Resumen**
> 

> - `SELECT` elige los campos a mostrar y `FROM` la tabla o tablas de donde se extraen.

> - `WHERE` filtra los registros según una condición.

> - `LIMIT` recupera los registros en bloques, indicando posición inicial y número de registros.

> - `DISTINCT` elimina los resultados duplicados.

---

## 6.3 Consultas Simples. Tipos de operadores

# **Consultas Simples. Tipos de operadores**

## **Operadores aritméticos**

Estos operadores sólo trabajan con números. Supongamos que `operador1` vale `23` y `operador2` vale `11`:

| Operador | Descripción | Ejemplo |
| --- | --- | --- |
| Sumar `+` | Suma los valores de los dos operadores. | `operador1 + operador2 = 34` |
| Resta `-` | Resta el valor de la derecha del valor de la izquierda. | `operador1 - operador2 = 12` |
| Multiplicar `*` | Multiplica los valores de los dos operadores. | `operador1 * operador2 = 253` |
| Dividir `/` | Divide el operador de la izquierda por el de la derecha. | `operador1 / operador2 = 2` |
| Resto `%` | Divide y devuelve el resto. | `operador1 % operador2 = 1` |

> **📌 Ejemplo**
> 

```sql
SELECT precio_venta + precio_proveedor FROM jardineria.producto;
SELECT precio_venta - precio_proveedor FROM jardineria.producto;
SELECT precio_venta * precio_proveedor FROM jardineria.producto;
SELECT precio_venta / precio_proveedor FROM jardineria.producto;
SELECT precio_venta % precio_proveedor FROM jardineria.producto;
```

## **Operadores de comparación**

Sirven para comparar valores y saber si el resultado es **verdadero o falso**. Supongamos que `op1 = 33` y `op2 = 11`:

| Operador | Descripción | Ejemplo |
| --- | --- | --- |
| Menor `<` | Comprueba si el valor de `op1` es menor que el de `op2`. | `(op1 < op2)` es falso |
| Menor o igual `<=` | Comprueba si `op1` es menor o igual que `op2`. | `(op1 <= op2)` es falso |
| Mayor `>` | Comprueba si `op1` es mayor que `op2`. | `(op1 > op2)` es cierto |
| Mayor o igual `>=` | Comprueba si `op1` es mayor o igual que `op2`. | `(op1 >= op2)` es cierto |
| Igual `=` | Comprueba si `op1` es igual que `op2`. | `(op1 = op2)` es falso |
| Distinto `<>` | Comprueba si `op1` es distinto de `op2`. | `(op1 <> op2)` es cierto |

> **📌 Negación**
> 

> También existen estos operadores combinando el de negación: `!=`.

> **📌 Ejemplo**
> 

```sql
SELECT precio_venta < precio_proveedor FROM jardineria.producto;
SELECT precio_venta <= precio_proveedor FROM jardineria.producto;
SELECT precio_venta > precio_proveedor FROM jardineria.producto;
SELECT precio_venta >= precio_proveedor FROM jardineria.producto;
SELECT precio_venta = precio_proveedor FROM jardineria.producto;
SELECT precio_venta <> precio_proveedor FROM jardineria.producto;
SELECT precio_venta != precio_proveedor FROM jardineria.producto;

SELECT * FROM jardineria.producto WHERE precio_venta >= 50;
SELECT * FROM jardineria.producto WHERE precio_venta <= 50;
SELECT * FROM jardineria.producto WHERE precio_venta = 50;
```

## **Otros operadores de búsqueda**

| Operador | Descripción |
| --- | --- |
| `BETWEEN` | Para buscar valores entre dos rangos. |
| `EXISTS` | Para buscar la existencia de una fila que cumpla una condición. |
| `DISTINCT` | Para buscar si no existen duplicados. |
| `ALL` | Para comparar un valor con todos los valores de un conjunto. |
| `ANY` | Para comparar un valor con cualquier otro según la condición. |
| `IN` | Para comparar un valor con una lista de valores dados. |
| `IS NULL` | Para comparar un valor con un valor `NULL`. |
| `LIKE` | Para comparar un valor con valores similares utilizando operadores comodín. |

> **📌 Ejemplo**
> 

```sql
SELECT *
FROM jardineria.cliente
WHERE nombre_cliente BETWEEN "DaraDistribuciones" AND "Madrileña de riesgos";

SELECT *
FROM jardineria.producto
WHERE EXISTS (SELECT count(*) FROM jardineria.pedido HAVING count(*)>114);

SELECT DISTINCT nombre
FROM jardineria.producto;

SELECT *
FROM jardineria.producto
WHERE producto.codigo_producto IN (SELECT codigo_producto FROM jardineria.detalle_pedido);

SELECT *
FROM jardineria.empleado
WHERE empleado.codigo_jefe IS NULL;
```

## **Operadores comodín (LIKE)**

Cuando queremos buscar datos filtrándolos por la cláusula `WHERE` dentro de un rango de valores alfanuméricos, podemos utilizar los operadores comodín `%` y `_`:

| Operador | Descripción |
| --- | --- |
| Símbolo del porcentaje `%` | Puede coincidir con uno o más caracteres. |
| Símbolo del guion bajo `_` | Sólo puede coincidir con un carácter. |

> **📌 Ejemplo**
> 

```sql
SELECT * FROM jardineria.producto WHERE nombre LIKE "Rast%";
SELECT * FROM jardineria.producto WHERE nombre LIKE "%ast%";
SELECT * FROM jardineria.producto WHERE nombre LIKE "_ast%";
SELECT * FROM jardineria.producto WHERE nombre LIKE "_astrillo de Jardí_";
```

## **Operadores de expresiones regulares (REGEXP)**

La cláusula o predicado **`REGEXP`** es más potente que `LIKE` porque la cadena es un **patrón** basado en el uso de expresiones regulares. Una expresión regular es un patrón que describe un conjunto de cadenas posibles y está formada por caracteres literales y otros caracteres especiales.

| Carácter | Significado | Ejemplo |
| --- | --- | --- |
| `^` | Principio de cadena | `REGEXP '^A'` (nombres que comienzan por A) |
| `$` | Final de la cadena | `REGEXP 'A$'` (nombres que terminan por A) |
| `.` | Cualquier carácter (uno) | `REGEXP '....'` (nombres de 4 caracteres) |
| `?` | Alternativa | `REGEXP '^A?B'` (nombres que comienzan por A o B) |
| `*` | Coincide con 0 o más caracteres | `REGEXP 'w*'` (que contenga cero o más w) |
| `+` | Coincide con 1 o más caracteres | `REGEXP 'w+'` (que contenga una o más w) |
| `\\|` | Varias secuencias posibles | `REGEXP '(San\\|Ju)'` (nombres que empiecen por San o por Ju) |
| `( )` | Secuencia | `REGEXP '(www)+'` (que contenga una o más de tres w) |
| `{n}, {n,m}` | Número de ocurrencias | `REGEXP 'w{1,3}'` (que contenga entre 1 y tres w) |
| `[a-z], [^a-z]` | Cualquier carácter que esté o no esté en el rango | `REGEXP '[^aeiou]'` (que no contengan vocales) |

> **📌 Ejemplo**
> 

```sql
SELECT * FROM jardineria.Clientes WHERE clientes.NombreCliente REGEXP '^A';
SELECT * FROM jardineria.Clientes WHERE clientes.NombreCliente REGEXP 'A$';
SELECT * FROM jardineria.Clientes WHERE clientes.NombreCliente REGEXP '^A|B';
SELECT * FROM jardineria.Clientes WHERE clientes.NombreCliente REGEXP 'e*';
SELECT * FROM jardineria.Clientes WHERE clientes.NombreCliente REGEXP 'e+';
SELECT * FROM jardineria.Clientes WHERE clientes.NombreCliente REGEXP 'golf';
SELECT * FROM jardineria.Clientes WHERE clientes.NombreCliente REGEXP 'a{1,3}';
SELECT * FROM jardineria.Clientes WHERE clientes.NombreCliente REGEXP '^[eln]';
```

## **Operadores lógicos**

En SQL disponemos de los operadores lógicos tradicionales **`AND`**, **`OR`** y **`NOT`**:

| Operador | Descripción |
| --- | --- |
| `AND` | Sirve para poder poner múltiples condiciones en la cláusula `WHERE`. |
| `OR` | Sirve para poder poner múltiples condiciones en la cláusula `WHERE`. |
| `NOT` | Sirve para invertir el valor del operador lógico con el que se aplique. |

> **📌 Ejemplo**
> 

```sql
SELECT *
FROM jardineria.pedido
WHERE pedido.fecha_pedido > "2008-09-01"
  AND pedido.fecha_entrega IS NOT NULL;

SELECT *
FROM jardineria.pedido
WHERE pedido.fecha_pedido > "2008-09-01"
   OR pedido.fecha_entrega IS NOT NULL;
```

## **Funciones de fechas**

En SQL es interesante utilizar funciones específicas para trabajar con fechas y realizar operaciones con ellas. Veremos algunas de ellas:

| Función | Descripción |
| --- | --- |
| `NOW()` | Sirve para obtener la fecha de hoy en formato `'2024-03-04 19:21'`. |
| `DATEDIFF()` | Sirve para averiguar la diferencia entre dos fechas. |
| `DATE_FORMAT()` | Sirve para formatear la fecha como nos pueda interesar. |
| `ADDDATE()` | Agrega un intervalo de tiempo especificado a la fecha indicada. |

> **📌 Ejemplo**
> 

```sql
SELECT DATE_FORMAT('2009-10-04 22:23:00', '%W %M %Y');
SELECT DATE_FORMAT('2007-10-04 22:23:00', '%H:%i:%s');
SELECT DATE_FORMAT('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');
SELECT DATE_FORMAT('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');
SELECT DATE_FORMAT('2025-01-01', '%X %V');
SELECT DATE_FORMAT('2006-06-01', '%d');
SELECT NOW();

SELECT DATEDIFF(fecha_pedido, fecha_entrega)
FROM jardineria.pedido
WHERE fecha_entrega IS NOT NULL;
```

> **📌 Resumen**
> 

> - Los **operadores aritméticos** (`+`, `-`, `*`, `/`, `%`) trabajan con números.

> - Los **operadores de comparación** (`<`, `<=`, `>`, `>=`, `=`, `<>`, `!=`) comparan valores.

> - Los **operadores de búsqueda** (`BETWEEN`, `IN`, `LIKE`, `IS NULL`, `EXISTS`, ...) filtran los resultados.

> - Los **comodines** `%` y `_` junto a `LIKE` permiten búsquedas parciales; `REGEXP` amplía las posibilidades.

> - Los **operadores lógicos** (`AND`, `OR`, `NOT`) combinan condiciones.

> - Las **funciones de fecha** (`NOW()`, `DATEDIFF()`, `DATE_FORMAT()`, `ADDDATE()`) facilitan el trabajo con fechas.

---

## 6.4 Consultas Simples. Campos calculados, ordenadas y cabecera

# **Consultas Simples. Campos calculados, ordenadas y cabecera**

## **Campos calculados**

En SQL podemos **calcular campos** en la sentencia del `SELECT` para obtener el resultado que buscamos. También podemos utilizar estos campos calculados para **filtrar los resultados** en el `WHERE`.

> **📌 Ejemplo**
> 

```sql
SELECT precioventa, PrecioProveedor + PrecioProveedor*0.091
FROM jardineria.Productos
WHERE PrecioProveedor < PrecioProveedor + PrecioProveedor*0.091;

SELECT precioventa, PrecioProveedor + PrecioProveedor*0.091
FROM jardineria.Productos;
```

## **Consultas ordenadas**

Para **ordenar el resultado** de las consultas haremos uso de la cláusula **`ORDER BY`**. Además podemos indicar el sentido del orden: **`ASC`** (ascendente) o **`DESC`** (descendente). Si no indicamos nada, por defecto será `ASC`.

> **📌 Ejemplo**
> 

```sql
SELECT * FROM jardineria.Clientes ORDER BY NombreCliente ASC;
SELECT * FROM jardineria.Clientes ORDER BY NombreCliente DESC;
SELECT * FROM jardineria.Clientes ORDER BY NombreCliente;
```

## **Consultas con cabecera (alias)**

Si los resultados de nuestras consultas van a mostrarse a otras personas, puede interesarnos **cambiar los nombres de los campos** para que se entienda mejor el informe obtenido. Para conseguirlo crearemos un **alias** con la opción **`AS`** junto con el nuevo título de la columna, normalmente entre comillas simples.

> **📌 Ejemplo**
> 

```sql
SELECT precioventa AS PPV,
       PrecioProveedor + PrecioProveedor*0.091 AS 'Precio IVA'
FROM jardineria.Productos
WHERE PrecioProveedor < PrecioProveedor + PrecioProveedor*0.091;
```

> **📌 Resumen**
> 

> - Los **campos calculados** se realizan en el `SELECT` operando con los campos de las tablas.

> - `ORDER BY` ordena el resultado, con `ASC` o `DESC` (por defecto `ASC`).

> - El **alias** con `AS` permite renombrar las columnas de la cabecera del resultado.

---

## 6.5 Consultas complejas. Resumen o agregado

# **Consultas complejas. Resumen o agregado**

Las **consultas resumen o de agregado** permiten obtener **un solo valor** como resultado de aplicar una determinada operación a los valores contenidos en una columna. Son consultas que resumen cierta información, extrayendo información calculada de un conjunto de registros.

| Función | Descripción |
| --- | --- |
| `AVG` | Retorna la **media** de los valores de la colección. |
| `MAX` | Retorna el valor **máximo** de la colección. |
| `MIN` | Retorna el valor **mínimo** de la colección. |
| `SUM` | Retorna la **suma** de los valores. |
| `COUNT` | Retorna el **número** de registros. |

> **📌 Ejemplo**
> 

```sql
SELECT COUNT(CodigoEmpleado) FROM jardineria.Empleados;
SELECT MAX(precioventa), MIN(precioventa) FROM productos;
SELECT AVG(cantidad) AS promedio FROM jardineria.pagos;
```

## **Agrupaciones o de totales (GROUP BY)**

Para poder **agrupar** por un campo o varios campos deberemos añadir la cláusula **`GROUP BY`**. También contamos con la cláusula **`HAVING`** para poder **filtrar los grupos** según la condición que le indiquemos.

> **📌 WHERE vs HAVING**
> 

> - `WHERE` filtra las **filas** antes de agrupar.

> - `HAVING` filtra los **grupos** después de agrupar.

> **📌 Ejemplo**
> 

```sql
SELECT estado, count(*)
FROM jardineria.pedidos
GROUP BY estado;

SELECT estado, count(*)
FROM jardineria.pedidos
GROUP BY estado
HAVING count(*)>25;

SELECT estado, count(*)
FROM jardineria.pedidos
WHERE pedidos.comentarios IS NOT NULL
GROUP BY estado
HAVING count(*)>25;
```

> **📌 Resumen**
> 

> - Las **funciones de agregado** (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) devuelven un único valor resumen.

> - `GROUP BY` agrupa los registros por uno o varios campos para calcular totales por grupo.

> - `HAVING` filtra los grupos resultantes después de la agregación.

---

## 6.6 Consultas complejas. Subconsultas

# **Consultas complejas. Subconsultas**

Las **subconsultas** son tipos de consultas que usamos para obtener unos **valores necesarios para la consulta principal**. Tendremos un `SELECT` principal que de alguna manera estará filtrado por el resultado de la consulta `SELECT` secundaria, subordinada o anidada a la principal.

> **📌 Ejemplo**
> 

```sql
SELECT *
FROM jardineria.pedidos
WHERE pedidos.codigocliente IN (
    SELECT clientes.codigocliente
    FROM jardineria.clientes
    WHERE clientes.ciudad LIKE '%uenlabr%'
);
```

Contamos con **tres grupos** de subconsultas:

- **Escalonadas**: devuelven un **único valor**.

- **De lista**: devuelven una **lista o conjunto** de resultados.

- **Correlacionadas**: tanto la consulta principal como sus subordinadas extraen los valores de estas tablas.

## **Subconsultas escalonadas**

En este tipo de subconsultas haremos uso de los **operadores de comparación** tradicionales (`<`, `<=`, `>`, `>=`, `<>`, `=`). Este tipo de subconsultas **sólo devuelve un valor**.

> **📌 Ejemplo**
> 

```sql
SELECT *
FROM jardineria.Productos
WHERE CodigoProducto = (
    SELECT CodigoProducto
    FROM jardineria.DetallePedidos
    WHERE PrecioUnidad = (
        SELECT MAX(PrecioUnidad)
        FROM jardineria.DetallePedidos
    )
    LIMIT 1
);
```

## **Subconsultas de lista**

En este tipo de subconsulta la `SELECT` secundaria puede retornar **más de un valor**, es decir, un conjunto de valores. Para compararlos utilizaremos los operadores de búsqueda literales (**`ALL`**, **`ANY`**, **`EXISTS`**) o de comparación literales (**`IN`**).

### **Operador ALL**

Podemos traducirlo por **TODOS** los valores que nos devuelva la subconsulta. Principalmente se utiliza con operadores de comparación tradicionales.

> **📌 Ejemplo**
> 

```sql
-- ¿Hay un Herramienta más cara que todos los Frutales?
SELECT *
FROM jardineria.productos
WHERE gama = "Herramientas"
  AND precioventa > ALL (
    SELECT precioventa
    FROM jardineria.productos
    WHERE gama = "Frutales"
);
```

### **Operador ANY**

Podemos traducirlo por **ALGUNO** de los valores que nos devuelva la subconsulta. Principalmente se utiliza con operadores de comparación tradicionales.

> **📌 Ejemplo**
> 

```sql
-- ¿Hay un Herramienta más cara que algún Frutal?
SELECT *
FROM jardineria.productos
WHERE gama = "Herramientas"
  AND precioventa > ANY (
    SELECT precioventa
    FROM jardineria.productos
    WHERE gama = "Frutales"
);
```

### **Operador EXISTS**

La sentencia `EXISTS` se utiliza para filtrar por todas las filas que cumplan esa condición.

> **📌 Ejemplo**
> 

```sql
-- Obtener todos los "pedidos" si se despiden clientes de Madrid
SELECT *
FROM jardineria.pedidos
WHERE EXISTS (
    SELECT *
    FROM jardineria.clientes
    WHERE clientes.codigocliente = pedidos.codigocliente
      AND clientes.ciudad LIKE "Madrid"
);
```

### **Operador IN**

En este caso lo que queremos obtener es que el valor comparado **esté dentro de un listado**.

> **📌 Ejemplo**
> 

```sql
-- Obtener todos los "pedidos" de clientes de Madrid
SELECT *
FROM jardineria.pedidos
WHERE pedidos.codigocliente IN (
    SELECT codigocliente
    FROM jardineria.clientes
    WHERE ciudad LIKE "Madrid"
);
```

## **Subconsultas como fuente de datos**

### **DDL: crear una tabla a partir de una consulta**

Podemos crear tablas a partir del resultado de una consulta mediante **`CREATE TABLE ... AS SELECT`**, almacenando en estático los datos obtenidos, con la misma estructura y tipos de datos de las tablas de origen.

> **📌 Ejemplo**
> 

```sql
CREATE OR REPLACE TABLE directivo AS
SELECT e.CodEmp, e.NomEmp, d.CodDep, d.NomDep, d.TiDir
FROM empleado e JOIN departamento d ON d.CodEmpDir = e.CodEmp
WHERE d.TiDir = "P";
```

### **DML: insertar datos a partir de una consulta**

Si queremos insertar datos a partir de una consulta usaremos la sentencia **`INSERT tabla SELECT ...`**.

> **📌 Ejemplo**
> 

```sql
INSERT directivo
SELECT e.CodEmp, e.NomEmp, d.CodDep, d.NomDep, d.TiDir
FROM empleado e JOIN departamento d ON d.CodEmpDir = e.CodEmp
WHERE d.TiDir = "F";
```

> **📌 Resumen**
> 

> - Una **subconsulta** es un `SELECT` anidado dentro de otro `SELECT` que aporta valores a la consulta principal.

> - Las subconsultas pueden ser **escalonadas** (un valor), **de lista** (un conjunto) o **correlacionadas**.

> - Los operadores de comparación se usan con subconsultas de un único valor; `IN`, `ALL`, `ANY` y `EXISTS` con subconsultas de lista.

> - `CREATE TABLE ... AS SELECT` e `INSERT ... SELECT` permiten usar el resultado de una consulta para crear o poblar tablas.

---

## 6.7 Consultas complejas. Múltiples selecciones

# **Consultas complejas. Múltiples selecciones**

Los **operadores de conjuntos** no operan sobre tipos de datos simples, sino sobre los **resultados de dos o más consultas**, las cuales deben tener la **misma estructura**: la cantidad de columnas y los tipos de datos deben ser los mismos.

Los operadores de conjuntos son:

| Operador | Descripción |
| --- | --- |
| `UNION` | Devuelve el conjunto de filas resultante de la unión de las dos consultas, **sin duplicados**. |
| `UNION ALL` | Devuelve el conjunto de filas resultante de la unión de las dos consultas, **incluyendo los duplicados**. |
| `INTERSECT` | Devuelve la **intersección** entre los dos conjuntos de filas. |
| `EXCEPT` | Devuelve todas aquellas filas de la **primera consulta que no estén en la segunda**. |

## **UNION**

Unión del resultado de dos consultas. Para que funcione, las dos consultas deben tener el **mismo número de elementos** y los **dominios deben ser compatibles**. El resultado devuelve los valores que **no se repiten**.

> **📌 Ejemplo**
> 

```sql
SELECT "Cliente" AS tipo, c.nombrecliente AS Nombre, c.apellidocontacto AS apellido
FROM jardineria.clientes c
UNION
SELECT "Empleado" AS tipo, e.nombre AS Nombre, e.apellido1 AS apellido
FROM jardineria.empleados e;
```

Al operador `UNION` se le puede incluir **`ALL`** para incluir los elementos repetidos:

> **📌 Ejemplo**
> 

```sql
SELECT "Cliente" AS tipo, c.nombrecliente AS Nombre, c.apellidocontacto AS apellido
FROM jardineria.clientes c
UNION ALL
SELECT "Empleado" AS tipo, e.nombre AS Nombre, e.apellido1 AS apellido
FROM jardineria.empleados e;
```

## **INTERSECT**

Mostrará los registros que **coincidan** en cada una de las consultas.

> **📌 Ejemplo**
> 

```sql
SELECT "Cliente" AS tipo, c.nombrecliente AS Nombre, c.apellidocontacto AS apellido
FROM jardineria.clientes c
INTERSECT
SELECT "Empleado" AS tipo, e.nombre AS Nombre, e.apellido1 AS apellido
FROM jardineria.empleados e;
```

## **EXCEPT**

Mostrará los registros que **no coincidan** de un lado de la unión.

> **📌 Ejemplo**
> 

```sql
SELECT "Cliente" AS tipo, c.nombrecliente AS Nombre, c.apellidocontacto AS apellido
FROM jardineria.clientes c
EXCEPT
SELECT "Empleado" AS tipo, e.nombre AS Nombre, e.apellido1 AS apellido
FROM jardineria.empleados e;
```

> **📌 Soporte en MySQL**
> 

> `INTERSECT` y `EXCEPT` están soportados en el estándar SQL y en otros gestores (Oracle, PostgreSQL, SQL Server). En MySQL clásico (anterior a las versiones recientes) no están implementados y se pueden simular con `JOIN` o con `NOT IN`.

> **📌 Resumen**
> 

> - Los **operadores de conjuntos** (`UNION`, `UNION ALL`, `INTERSECT`, `EXCEPT`) combinan los resultados de dos o más consultas.

> - Todas las consultas combinadas deben tener la **misma estructura** (mismo número y tipo de columnas).

> - `UNION` elimina duplicados; `UNION ALL` los conserva.

> - `INTERSECT` devuelve los registros comunes y `EXCEPT` los de la primera consulta que no están en la segunda.

---

## 6.8 Consultas complejas. Consultas multitabla

# **Consultas complejas. Consultas multitabla**

Para unir varias tablas (realizar un *join*) tenemos diferentes formas de hacerlo:

- **`CROSS JOIN`**: producto cartesiano entre dos tablas.

- **`INNER JOIN`**: une dos tablas por campos que coinciden en valor.

- **`NATURAL JOIN`**: une dos tablas por campos que se llaman igual.

- **`OUTER JOIN`**: une dos tablas, recuperando todos los elementos que están en una de ellas y de la segunda los que coinciden en valor. Dentro de esta categoría distinguimos `LEFT JOIN` y `RIGHT JOIN` según qué tabla es la que aporta todos los elementos.

## **Producto cartesiano (CROSS JOIN)**

El **producto cartesiano** de dos tablas son todas las **combinaciones de las filas** de una tabla unidas a las filas de la otra tabla. Es decir, cada fila de A se cruza con todas las de B. Si la tabla `oficinas` tiene X filas y la tabla `empleados` tiene Y, el resultado tendrá X * Y filas.

> **📌 Ejemplo**
> 

```sql
SELECT *
FROM oficinas CROSS JOIN empleados;
```

## **Composición interna (INNER JOIN)**

La operación **[INNER] JOIN** combina registros de dos tablas siempre que existan **valores coincidentes en un campo común** (clave ajena con clave primaria). Para ello se indica una tabla seguida (opcionalmente con el prefijo `INNER`) de `JOIN` con la segunda tabla, y tras `ON`, igualamos la clave ajena con la primaria.

> **📌 Ejemplo**
> 

```sql
SELECT o.CodigoOficina, e.Nombre
FROM oficinas o INNER JOIN empleados e
ON o.CodigoOficina = e.CodigoOficina;
```

### **NATURAL JOIN**

Forma parte del estándar SQL desde **SQL:1999** y es una **especialización de INNER JOIN**, ya que simplifica la unión al basarse automáticamente en las **columnas con nombres coincidentes** en ambas tablas.

> **📌 Ejemplo**
> 

```sql
SELECT o.CodigoOficina, e.Nombre
FROM oficinas o NATURAL JOIN empleados e;
```

### **INNER JOIN de varias tablas**

Cuando necesitamos información que está en **diferentes tablas**, o necesitamos que los datos obtenidos dependan de las relaciones en las que participan, deberemos emparejar los campos que han de tener valores iguales (FK con PK). Algunos aspectos a tener en cuenta:

- Pueden combinarse **tantas tablas como se desee**.

- El criterio de combinación puede estar formado por **más de una pareja de columnas**.

- En la cláusula `SELECT` pueden citarse columnas de ambas tablas, coincidan o no con la combinación.

- Si hay columnas con el mismo nombre en las distintas tablas, deben identificarse especificando la **tabla de procedencia** o utilizando un **alias de tabla**.

> **📌 Ejemplo**
> 

```sql
SELECT o.CodigoOficina, e.Nombre AS empleado, c.NombreCliente AS cliente
FROM oficinas o
JOIN empleados e ON o.CodigoOficina = e.CodigoOficina
JOIN clientes c ON c.CodigoEmpleadoRepVentas = e.CodigoEmpleado;
```

### **Composición reflexiva**

Cuando tenemos una **relación reflexiva** de una tabla consigo misma, para obtener los datos hemos de realizar un *join* de la tabla con **otra instancia de sí misma**.

> **📌 Ejemplo**
> 

```sql
SELECT emp.CodigoEmpleado AS CODEMPLE, emp.Nombre AS NOMEMPLE,
       jef.CodigoEmpleado AS CODJEFE, jef.Nombre AS NOMJEFE
FROM empleados emp INNER JOIN empleados jef
ON emp.CodigoJefe = jef.CodigoEmpleado;
```

## **Composición externa (OUTER JOIN)**

Cuando efectuamos una combinación interna, los registros que **se quedan sin emparejar** en la otra tabla **no aparecen** en el resultado. En ocasiones no queremos únicamente los registros que están conectados, sino que nos interesa **recuperarlos todos** (conectados y no conectados). Para ello necesitamos hacer uso de las **composiciones externas**.

Mediante una combinación externa aparecerán los datos emparejados más los que no están relacionados, ya sea por la:

- **Izquierda**: `LEFT [OUTER] JOIN` – Todos los de la tabla de la izquierda, y de la derecha los relacionados.

- **Derecha**: `RIGHT [OUTER] JOIN` – Los de la izquierda los relacionados, y de la derecha todos los datos.

### **LEFT OUTER JOIN**

Devuelve **todos los registros de la tabla de la izquierda** y de la derecha los relacionados. Los registros sin correspondencia muestran `NULL` en las columnas de la derecha.

> **📌 Ejemplo**
> 

```sql
SELECT p.CodigoProducto, p.Nombre, d.CodigoPedido, d.CodigoProducto
FROM productos p LEFT JOIN detallepedidos d
ON p.CodigoProducto = d.CodigoProducto;

-- Sólo los productos que no aparecen en ningún detalle de pedido
SELECT p.CodigoProducto, p.Nombre, d.CodigoPedido, d.CodigoProducto
FROM productos p LEFT JOIN detallepedidos d
ON p.CodigoProducto = d.CodigoProducto
WHERE d.CodigoProducto IS NULL;
```

### **RIGHT OUTER JOIN**

Devuelve **todos los registros de la tabla de la derecha** y de la izquierda los relacionados. Los registros sin correspondencia muestran `NULL` en las columnas de la izquierda.

> **📌 Ejemplo**
> 

```sql
SELECT *
FROM clientes c RIGHT JOIN empleados e
ON c.codigoempleadorepventas = e.codigoempleado;

-- Sólo los empleados que no tienen ningún cliente asignado
SELECT *
FROM clientes c RIGHT JOIN empleados e
ON c.codigoempleadorepventas = e.codigoempleado
WHERE c.CodigoEmpleadoRepVentas IS NULL;
```

### **FULL OUTER JOIN**

Aunque **no está soportado por MySQL**, conviene conocer la combinación externa completa, aunque su uso es muy limitado (por la propia restricción de integridad referencial). Su resultado presenta los resultados de la tabla de la izquierda y de la tabla de la derecha **aunque no tengan correspondencia** en la otra tabla. Puede simularse en MySQL con una `UNION` de un `LEFT JOIN` y un `RIGHT JOIN`.

> **📌 Ejemplo**
> 

```sql
SELECT * FROM clientes c LEFT JOIN empleados e
ON c.codigoempleadorepventas = e.codigoempleado
UNION
SELECT * FROM clientes c RIGHT JOIN empleados e
ON c.codigoempleadorepventas = e.codigoempleado;

-- Sólo los registros sin correspondencia en ambas tablas
SELECT * FROM clientes c LEFT JOIN empleados e
ON c.codigoempleadorepventas = e.codigoempleado
WHERE e.CodigoEmpleado IS NULL
UNION
SELECT * FROM clientes c RIGHT JOIN empleados e
ON c.codigoempleadorepventas = e.codigoempleado
WHERE c.CodigoEmpleadoRepVentas IS NULL;
```

> **📌 Resumen**
> 

> - El **producto cartesiano** (`CROSS JOIN`) combina cada fila de una tabla con todas las de la otra.

> - **`INNER JOIN`** devuelve sólo los registros que coinciden en ambas tablas; `NATURAL JOIN` une por columnas con el mismo nombre.

> - Las **composiciones reflexivas** unen una tabla consigo misma mediante dos alias.

> - **`LEFT JOIN`** y **`RIGHT JOIN`** (composiciones externas) devuelven también los registros sin correspondencia.

> - **`FULL OUTER JOIN`** no está soportado en MySQL y se simula con `UNION` de `LEFT` y `RIGHT JOIN`.

---

## 6.9 Optimización de consultas

# **Optimización de consultas**

La **optimización de consultas** es un aspecto clave en las bases de datos relacionales que permite **mejorar el rendimiento** de las operaciones y **reducir los tiempos de ejecución**.

La optimización consiste en encontrar la **forma más eficiente de ejecutar una consulta SQL**, minimizando el tiempo y los recursos utilizados.

## **Proceso de optimización**

- **Reescritura de la consulta**: el sistema traduce la consulta en diferentes formas equivalentes y elige la más eficiente.

- **Generación del plan de ejecución**: se analizan posibles estrategias para ejecutar la consulta.

- **Coste estimado**: el SGBD calcula el coste de cada plan basándose en factores como el tamaño de las tablas, la **selectividad de los índices** y la **cardinalidad de las columnas**.

## **Factores que afectan a la optimización**

- **Selección de índices**: un **índice** es una estructura asociada a una o varias columnas que facilita la búsqueda de un determinado valor, acelerando el acceso a los datos, de forma similar al índice de un libro. Un uso adecuado de los índices puede acelerar enormemente las búsquedas y las combinaciones de tablas.

- **Orden de los joins**: elegir qué tabla unir primero puede reducir significativamente el número de filas procesadas.

- **Filtrado anticipado**: aplicar condiciones `WHERE` lo antes posible evita procesar datos innecesarios.

> **📌 Índices por defecto**
> 

> Por defecto, los SGBD crean un **índice por cada clave primaria** de las tablas que definimos, así como para las **claves ajenas**, tanto para optimizar el acceso a un elemento concreto, como para optimizar el *join* de las tablas.

## **Plan de ejecución (EXPLAIN)**

El **plan de ejecución** es un mapa que muestra **cómo el SGBD ejecutará una consulta**. Incluye detalles como los **operadores utilizados** (escaneos, uniones, filtros) y su orden, así como cuándo un índice se usa o no y si se usa correctamente, lo que permite averiguar si las consultas se ejecutan de forma óptima.

Mediante **`EXPLAIN consulta`** obtendremos el plan de ejecución de la consulta.

> **📌 Ejemplo**
> 

```sql
EXPLAIN
SELECT *
FROM clientes c JOIN empleados e
ON c.codigoempleadorepventas = e.codigoempleado
WHERE e.CodigoEmpleado = 5;
```

| id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | SIMPLE | e |  | const | PRIMARY | PRIMARY | 4 | const | 1 | 100 |  |
| 1 | SIMPLE | c |  | ref | clientes_empleadosFK | clientes_empleadosFK | 5 | const | 5 | 100 |  |

### **Campos más destacables**

- **Identificador de la consulta (`id`)**: si comparten valor, forman parte de la misma consulta.

- **Tipo de consulta (`select_type`)**: el valor `SIMPLE` indica que es una consulta sencilla, sin subconsultas o uniones complicadas.

- **Tipo de acceso (`type`)**, cuyos valores pueden ser:

  - **`ALL`** (*full scan*): a evitar, lee todos los registros.

  - **`INDEX`** (*full index scan*): aunque es mejor que un escaneo completo, si es posible debemos evitarlo, ya que recorre un índice completo, no la tabla entera.

  - **`ref`**: utiliza un índice con referencia a otra tabla para filtrar datos (específicamente útil en *joins*).

- **Claves (`possible_keys`) y (`key`)**: muestra los índices o claves candidatas, y el índice efectivamente utilizado.

- **Cantidad de filas a procesar (`rows`)**: en nuestro ejemplo, 5 filas en la tabla `c` y 1 fila en la tabla `e`.

## **Buenas prácticas**

Algunos consejos que debes tener en cuenta a la hora de hacer consultas:

- **Filtra antes con `WHERE`**: como la cláusula `WHERE` se ejecuta antes que `GROUP BY` y `JOIN`, aplicar los filtros antes reduce el número de filas procesadas por las cláusulas posteriores, lo que mejora el rendimiento de la consulta.

- **Preagrega datos antes de unirlos**: sabiendo que `FROM` y `JOIN` son las primeras cláusulas que se ejecutan, preagrupar los datos mediante **subconsultas** o **expresiones comunes de tabla (CTE)** te permite reducir el conjunto de datos antes del proceso de unión.

- **Optimiza `ORDER BY` con índices**: puesto que la cláusula `ORDER BY` es uno de los últimos pasos ejecutados, asegurarse de que las columnas ordenadas están indexadas acelerará el rendimiento de la consulta.

- **Evita `SELECT *` en las consultas de producción**: la cláusula `SELECT` se ejecuta después de filtrar, agrupar y agregar, por lo que especificar sólo las columnas necesarias minimiza la cantidad de datos recuperados.

> **📌 Más consejos de optimización**
> 

> - **Evita funciones sobre columnas indexables**: `WHERE YEAR(fecha) = 2009` impide aprovechar un índice sobre `fecha`; es mejor `WHERE fecha BETWEEN '2009-01-01' AND '2009-12-31'`.

> - **`EXISTS` frente a `COUNT(*)`**: `EXISTS` puede detenerse al encontrar la primera coincidencia; `COUNT(*)` obliga a contar todas.

> - **`LIKE` bien planteado**: `LIKE 'Naranjo%'` puede aprovechar un índice; `LIKE '%Naranjo%'` normalmente revisa muchas más filas.

> - **Índices compuestos**: si filtras siempre por varias columnas a la vez, conviene pensar en un **índice compuesto** alineado con el filtro.

> **📌 Resumen**
> 

> - La **optimización** busca la forma más eficiente de ejecutar una consulta SQL.

> - Los **índices** aceleran búsquedas y *joins*; las claves primarias y ajenas ya se indexan por defecto.

> - **`EXPLAIN`** muestra el plan de ejecución: `type`, `key`, `rows`, `possible_keys`, ...

> - Buenas prácticas: filtrar antes, preagregar, indexar el `ORDER BY`, evitar `SELECT *` y las funciones sobre columnas indexables.

---

## 6.10 Vistas

# **Vistas**

Una **vista** es un **objeto que se define con una consulta** y que se comporta como una **tabla virtual**. Cuando un usuario accede a una vista, aparentemente piensa que está accediendo a una tabla.

> **📌 Sintaxis**
> 

```sql
CREATE
[OR REPLACE]
[ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]
[DEFINER = user]
[SQL SECURITY { DEFINER | INVOKER }]
VIEW view_name [(column_list)]
AS select_statement
[WITH [CASCADED | LOCAL] CHECK OPTION]
```

## **Ventajas**

- Al ser **consultas precompiladas**, su rendimiento es algo mejor que hacer las consultas directamente.

- Permiten **restringir el acceso a ciertas columnas** (sólo nombre, apellidos y teléfono de los clientes), incluso a nivel de fila (sólo los clientes de Alicante), de manera que podemos restringir que un cierto usuario sólo pueda acceder a una vista, ajustando aún más su **esquema externo**.

- Facilitan **procesos de normalización/denormalización**.

## **Restricciones**

- No se puede modificar el contenido cuando ésta utiliza `HAVING`, `GROUP BY`, `DISTINCT`, `UNION`, `UNION ALL` o funciones agregadas (`MAX`, `MIN`, `SUM`, `COUNT`, ...).

- Todos los campos de la vista deben contener los campos **no nulos de las tablas base** que no tienen valores por defecto.

- Los campos de la vista son **campos simples**, sin derivados (cálculos, `LOWERCASE`, ...).

## **Ejemplo**

> **📌 Empleados que no representan a ningún cliente**
> 

```sql
CREATE OR REPLACE VIEW empleados_noRepresentantes AS
SELECT e.*
FROM empleados e LEFT JOIN clientes c
ON c.codigoempleadorepventas = e.codigoempleado
WHERE c.CodigoEmpleadoRepVentas IS NULL;
```

> **📌 Consultar una vista**
> 

```sql
SELECT * FROM empleados_noRepresentantes;
```

## **Operaciones sobre vistas**

| Operación | Orden SQL |
| --- | --- |
| Crear o reemplazar una vista | `CREATE OR REPLACE VIEW nombre_vista AS SELECT ...;` |
| Listar las vistas de la BBDD | `SHOW FULL TABLES WHERE Table_type = 'VIEW';` |
| Ver la definición de una vista | `SHOW CREATE VIEW nombre_vista;` |
| Eliminar una vista | `DROP VIEW IF EXISTS nombre_vista;` |

> **📌 Resumen**
> 

> - Una **vista** es una **tabla virtual** definida por una consulta.

> - Mejora el **rendimiento** (consultas precompiladas) y permite **restringir el acceso** a columnas y filas.

> - Tiene restricciones: no se puede modificar si utiliza agregados, `GROUP BY`, `DISTINCT` o `UNION`.

> - Se gestiona con `CREATE OR REPLACE VIEW`, `SHOW`, `ALTER` y `DROP VIEW`.

---

## ✏️ Actividades y Prácticas de la Unidad


---

### Actividad Práctica ACT601 — 601

# **Actividad 601**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `601_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta identificación de las **herramientas y sentencias** para realizar consultas.

> - La realización de **consultas simples** sobre una tabla.

> - El uso correcto de **composiciones internas y externas** entre tablas.

> - El uso correcto de **consultas resumen** (funciones de agregado y `GROUP BY`).

> - La correcta utilización de **subconsultas**.

> - El uso de **múltiples selecciones** (operadores de conjuntos).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA3: Consulta la información almacenada en una base de datos empleando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CA3. a) Se han identificado las herramientas y sentencias para realizar consultas.

>   - CA3. b) Se han realizado consultas simples sobre una tabla.

>   - CA3. c) Se han realizado consultas sobre el contenido de varias tablas mediante composiciones internas.

>   - CA3. d) Se han realizado consultas sobre el contenido de varias tablas mediante composiciones externas.

>   - CA3. e) Se han realizado consultas resumen.

>   - CA3. f) Se han realizado consultas con subconsultas.

>   - CA3. g) Se han realizado consultas que implican múltiples selecciones.

<details markdown="1">

<summary>💡 **Enunciats Consultes a Jardineria**</summary>

Con la BBDD **jardineria** facilitada (jardineria.sql){: target=blank}, crea y ejecuta un script `.sql` que realice las siguientes consultas.

### **1. Consultas simples**

**Ejercicio 1.** Mostrar el código de oficina y la ciudad donde hay oficinas.

**Ejercicio 2.** Mostrar cuántos empleados hay en la compañía.

**Ejercicio 3.** Sacar cuántos clientes tiene cada país.

**Ejercicio 4.** Sacar cuál fue el pago medio en 2008.

**Ejercicio 5.** Sacar cuántos pedidos están en cada estado ordenado descendentemente por el número de pedidos.

**Ejercicio 6.** Sacar el precio del producto más caro y del más barato.

**Ejercicio 7.** Obtener el nombre del cliente con mayor límite de crédito.

**Ejercicio 13.** Sacar la ciudad y el teléfono de las oficinas de Estados Unidos.

**Ejercicio 15.** Sacar el cargo, nombre, apellidos y email del jefe de la empresa.

**Ejercicio 16.** Sacar el nombre, apellidos y cargo de aquellos que no sean representantes de ventas.

**Ejercicio 17.** Sacar el número de clientes que tiene la empresa.

**Ejercicio 18.** Sacar el nombre de los clientes españoles.

**Ejercicio 19.** Sacar cuántos clientes tiene cada país.

**Ejercicio 20.** Sacar cuántos clientes tiene la ciudad de Madrid.

**Ejercicio 21.** Sacar cuántos clientes tienen las ciudades que empiezan por M.

**Ejercicio 22.** Sacar el código de empleado y el número de clientes al que atiende cada representante de ventas.

**Ejercicio 23.** Mostrar el número de clientes que no tiene asignado representante de ventas.

**Ejercicio 24.** Sacar cuál fue el primer y último pago que hizo algún cliente.

### **2. Consultas resumen**

**Ejercicio 25.** Sacar el código de cliente de aquellos clientes que hicieron pagos en 2008.

**Ejercicio 26.** Sacar los distintos estados por los que puede pasar un pedido.

**Ejercicio 27.** Sacar el número de pedido, código de cliente, fecha requerida y fecha de entrega de los pedidos que no han sido entregados a tiempo.

**Ejercicio 28.** Sacar cuántos productos existen en cada línea de pedido.

**Ejercicio 29.** Sacar un listado de los 20 códigos de productos más pedidos ordenado por cantidad pedida (usar el filtro `LIMIT`).

**Ejercicio 30.** Sacar el número de pedido, código de cliente, fecha requerida y fecha de entrega de los pedidos, cuya fecha de entrega ha sido al menos dos días antes de la fecha requerida (usar `ADDDATE`).

**Ejercicio 31.** Sacar la facturación que ha tenido la empresa en toda la historia, indicando la base imponible, el IVA y el total facturado. La B.I. se calcula sumando el coste del producto por el número de unidades vendidas. El IVA es del 18% de la B.I. y el Total la suma de los campos anteriores.

**Ejercicio 32.** Sacar la misma información del ejercicio anterior, pero agrupada por el código de producto filtrada por los códigos que empiecen por `FR`.

**Ejercicio 33.** Obtener el nombre del producto más caro.

**Ejercicio 50.** Sacar la media de unidades en stock de los productos agrupados por gama.

**Ejercicio 55.** Sacar un listado con el precio total de cada pedido.

**Ejercicio 57.** Sacar cuántos pedidos tiene cada cliente en cada estado.

### **3. Subconsultas**

**Ejercicio 7.** Obtener el nombre del cliente con mayor límite de crédito.

**Ejercicio 8.** Obtener el nombre, apellido1 y cargo de los empleados que no representen a ningún cliente.

**Ejercicio 14.** Sacar el nombre, los apellidos y el email de los empleados a cargo de Alberto Soria.

**Ejercicio 33.** Obtener el nombre del producto más caro.

**Ejercicio 34.** Obtener el nombre del producto del que más unidades se hayan vendido en un mismo pedido.

**Ejercicio 35.** Obtener los clientes cuya línea de crédito sea mayor que los pagos que haya realizado.

**Ejercicio 36.** Sacar el producto que más unidades tiene en stock y el que menos unidades tiene en stock.

### **4. Consultas multitabla. Composición interna**

**Ejercicio 9.** Sacar un listado con el nombre de cada cliente y el nombre y apellidos de su representante de ventas.

**Ejercicio 10.** Listar las ventas totales de los productos que hayan facturado más de 3000 euros. Se mostrará el nombre, unidades vendidas, total facturado y total facturado con impuestos (18% IVA).

**Ejercicio 11.** Listar la dirección de las oficinas que tengan clientes en Fuenlabrada.

**Ejercicio 12.** Sacar el cliente que hizo el pedido de mayor cuantía.

**Ejercicio 14.** Sacar el nombre, los apellidos y el email de los empleados a cargo de Alberto Soria.

**Ejercicio 37.** Sacar el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

**Ejercicio 39.** Obtener un listado con los nombres de los empleados junto con el nombre de sus jefes.

**Ejercicio 41.** Sacar un listado de clientes indicando el nombre del cliente y cuántos pedidos ha realizado.

**Ejercicio 42.** Sacar un listado con los nombres de los clientes y el total pagado por cada uno de ellos.

**Ejercicio 43.** Sacar el nombre de los clientes que hayan hecho pedidos en 2008.

**Ejercicio 45.** Sacar un listado de clientes donde aparezca el nombre de su comercial y la ciudad donde está su oficina.

**Ejercicio 47.** Sacar cuántos empleados tiene cada oficina, mostrando el nombre de la ciudad donde está la oficina.

**Ejercicio 48.** Sacar un listado con el nombre de los empleados y el nombre de sus respectivos jefes.

### **5. Consultas multitabla. Composición externa**

**Ejercicio 38.** Se pide lo mismo que la pregunta 37 pero sólo de los clientes que no hayan hecho pagos.

**Ejercicio 40.** Obtener el nombre de los clientes a los que no se les ha entregado a tiempo un pedido (fecha entrega - fecha esperada).

**Ejercicio 44.** Listar el nombre del cliente y el nombre y apellido de sus representantes de aquellos clientes que no hayan realizado pagos.

**Ejercicio 46.** Sacar el nombre, apellidos, oficina y cargo de aquellos que no sean representantes de ventas.

**Ejercicio 49.** Sacar el nombre, apellidos, oficina (ciudad) y cargo del empleado que no represente a ningún cliente.

**Ejercicio 51.** Sacar los clientes que residan en la misma ciudad donde hay una oficina, indicando dónde está la oficina.

**Ejercicio 52.** Sacar los clientes que residan en ciudades donde no hay oficinas ordenado por la ciudad donde residen.

**Ejercicio 53.** Sacar el número de clientes que tiene asignado cada representante de ventas.

**Ejercicio 54.** Sacar cuál fue el cliente que hizo el pago con mayor cuantía y el que hizo el pago con menor cuantía.

**Ejercicio 56.** Sacar los clientes que hayan hecho pedidos en el 2008 por una cuantía superior a 2000 euros.

**Ejercicio 58.** Sacar los clientes que han pedido más de 200 unidades en total, indistintatmente del producto.

</details>

ENC1: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

> **📌 Cómo usar el playground**
> 

> 1. Selecciona un **ejercicio** del desplegable (agrupados por dificultad).

> 1. Lee la descripción del ejercicio que aparece abajo del selector.

> 1. Escribe tu consulta SQL en el editor.

> 1. Pulsa **▶ Ejecutar** para ver los resultados.

> 1. Pulsa **📐 Comparar resultado** para comparar tu resultado con el esperado.

> 1. Si hay diferencias, corrige tu consulta y vuelve a comparar.

> **📌 Corregir el fichero completo de golpe**
> 

> Cuando tengas la actividad terminada en tu fichero `.sql` (el que vas a entregar en Aules), puedes **subirlo** con el botón **📂 Corregir fichero .sql** y el playground te corregirá **todos los ejercicios a la vez**, marcando los que estén bien y explicando el error en los que no.

> Formato del fichero: **cada consulta precedida de una línea** `-- EJERCICIO <código>`, usando el código que aparece en el desplegable (p. ej. `2`, `S7`, `I9`, `E38`):

```sql
-- EJERCICIO 2
SELECT COUNT(*) FROM Empleados;

-- EJERCICIO S7
SELECT NombreCliente FROM Clientes
WHERE LimiteCredito = (SELECT MAX(LimiteCredito) FROM Clientes);
```

Al final se genera un **reporte con ✅/❌ por ejercicio** que puedes **descargar en Markdown**.

> **📌 Sentencias MySQL ignoradas**
> 

> El playground usa SQLite. Las sentencias `DROP DATABASE`, `CREATE DATABASE` y `USE` se ignoran. Las funciones MySQL `YEAR()`, `MONTH()`, `DAY()`, `DATE_FORMAT()`, `DATEDIFF()`, `ADDDATE()`, `CURDATE()`, `NOW()` e `IFNULL()` están disponibles. No uses `DATE_SUB(... INTERVAL ...)`, usa `ADDDATE(fecha, n)` en su lugar.

---

### Actividad Práctica ACT602 — 602

# **Actividad 602**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `602_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta identificación de las **herramientas y sentencias** para realizar consultas.

> - La realización de **consultas simples** sobre una tabla.

> - El uso correcto de **composiciones internas y externas** entre tablas.

> - El uso correcto de **consultas resumen** (funciones de agregado y `GROUP BY`).

> - La correcta utilización de **subconsultas**.

> - El uso de **múltiples selecciones** (operadores de conjuntos).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA3: Consulta la información almacenada en una base de datos empleando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CA3. a) Se han identificado las herramientas y sentencias para realizar consultas.

>   - CA3. b) Se han realizado consultas simples sobre una tabla.

>   - CA3. c) Se han realizado consultas sobre el contenido de varias tablas mediante composiciones internas.

>   - CA3. d) Se han realizado consultas sobre el contenido de varias tablas mediante composiciones externas.

>   - CA3. e) Se han realizado consultas resumen.

>   - CA3. f) Se han realizado consultas con subconsultas.

>   - CA3. g) Se han realizado consultas que implican múltiples selecciones.

<details markdown="1">

<summary>💡 **Enunciats Consultes a NBA**</summary>

Con la BBDD **nba** facilitada (nba.sql){: target=blank}, resuelve las consultas de los apartados 1 al 38 usando el playground de ejercicios de abajo. El playground carga automáticamente la base de datos desde `nba.sql`, así que puedes probar tus consultas sin instalar nada.

### **1. Consultas simples**

**Ejercicio 2.** Muestra el nombre de los equipos cuyo nombre empiece por 'H' y termine en 'S' (tabla equipos).

**Ejercicio 4.** Muestra el nombre de los equipos de la conferencia 'West' (tabla equipos).

**Ejercicio 5.** Jugadores cuyo procedencia diga Arizona, que pesen más de 220 libras (más de 100 kg) y midan más de 6 pies (más de 1.82 m). Muestra Nombre, Altura y Peso.

**Ejercicio 7.** Jugadores cuya tercera letra de su nombre sea la 'v'. Muestra la columna Nombre.

**Ejercicio 26.** Listado de jugadores con el formato 'Nombre (Equipo)' en una sola columna con alias **`AS Jugador`**. Usa la función `CONCAT()`.

**Ejercicio 28.** Primeros 10 jugadores por orden alfabético. Muestra la columna Nombre y usa `LIMIT`.

**Ejercicio 32.** Nombre de las divisiones de la conferencia Este, sin repetir. Muestra la columna Division.

**Ejercicio 35.** ¿Cuántas letras tiene el nombre de cada jugador de los 'Grizzlies'? Muestra Nombre y la columna **`AS Letras`** (usa `LENGTH()`).

**Ejercicio 36.** ¿Cuántas letras tiene el equipo con el nombre más largo (ciudad + nombre)? Muestra Ciudad, Nombre y la columna **`AS Letras`**. Usa `CONCAT()` y `LENGTH()`, ordénalo y quédate con 1 fila.

### **2. Consultas resumen**

**Ejercicio 8.** Número de jugadores de cada equipo de la conferencia 'West'. Muestra **`AS Equipo`** y **`AS Jugadores`** (agrupa por equipo).

**Ejercicio 9.** Número de jugadores argentinos en la NBA. Muestra el total en la columna **`AS Numero`**.

**Ejercicio 10.** Máxima media de puntos de 'LeBron James' en su carrera. Muestra la columna **`AS Maxima`**.

**Ejercicio 13.** Número de jugadores de cada equipo de la conferencia 'East'. Muestra **`AS Equipo`** y **`AS Jugadores`** (agrupa por equipo).

**Ejercicio 15.** Media de rebotes por partido de todos los jugadores de la conferencia Este. Muestra la columna **`AS Media`**.

**Ejercicio 17.** Número de jugadores de cada equipo de la división 'NorthWest'. Muestra **`AS Equipo`** y **`AS Jugadores`**.

**Ejercicio 18.** Número de jugadores de España ('Spain') y Francia ('France'). Muestra el total en **`AS Numero`**.

**Ejercicio 19.** Número de pívots (Posicion = 'C') que tiene cada equipo. Muestra **`AS Equipo`** y **`AS Numero`**.

**Ejercicio 20.** ¿Cuánto mide el pívot más alto de la NBA? Muestra la columna **`AS Altura`** (formato '6-9').

**Ejercicio 22.** Número de jugadores cuyo nombre empiece por 'Y'. Muestra el total en **`AS Numero`**.

**Ejercicio 24.** Número total de jugadores de cada división. Muestra Division y **`AS Jugadores`**.

**Ejercicio 25.** Peso medio en kilos y libras de los jugadores de los 'Raptors'. Muestra **`AS Kilos`** y **`AS Libras`** (el campo Peso está en libras).

**Ejercicio 27.** Puntuación más baja de un partido de la NBA (ten en cuenta puntos_local y puntos_visitante). Muestra la columna **`AS Minima`**.

**Ejercicio 30.** Número de bases (Posicion = 'G') que tiene cada equipo de la conferencia Este. Muestra **`AS Equipo`** y **`AS Bases`**.

**Ejercicio 31.** Número de equipos que tiene cada conferencia. Muestra Conferencia y **`AS Equipos`**.

### **3. Composiciones internas**

**Ejercicio 1.** Muestra los jugadores con su equipo y la ciudad del equipo (jugadores JOIN equipos). Muestra **`AS Jugador`**, **`AS Equipo`** y **`AS Ciudad`**.

**Ejercicio 3.** Puntos por partido de 'Pau Gasol' en toda su carrera (jugadores JOIN estadisticas). Muestra Temporada y Puntos_por_partido.

**Ejercicio 6.** Puntos por partido de los jugadores de los 'Cavaliers'. Muestra **`AS Jugador`**, Temporada y Puntos_por_partido.

**Ejercicio 11.** Asistencias por partido de 'Jose Calderon' en la temporada 07/08. Muestra la columna **`AS Asistencias_por_partido`**.

**Ejercicio 12.** Puntos por partido de 'Chris Paul' en las temporadas del 03/04 al 05/06. Muestra Temporada y Puntos_por_partido (usa `BETWEEN`).

**Ejercicio 14.** Tapones por partido de los jugadores de los 'Trail Blazers'. Muestra **`AS Jugador`**, Temporada y Tapones_por_partido.

**Ejercicio 16.** Rebotes por partido de los jugadores de los equipos de ciudad 'Los Angeles' (Lakers y Clippers). Muestra **`AS Jugador`**, Temporada y Rebotes_por_partido.

**Ejercicio 29.** Temporada con más puntos por partido de 'Kobe Bryant'. Muestra la columna Temporada. Sugerencia: ordena por Puntos_por_partido DESC y usa `LIMIT 1`.

### **4. Composiciones externas**

**Ejercicio 23.** Jugadores que no metieron ningún punto en alguna temporada (no tienen ninguna temporada con Puntos_por_partido > 0). Usa `LEFT JOIN`. Muestra la columna Nombre.

**Ejercicio 38.** Media de partidos ganados por los equipos de la conferencia 'West'. Muestra la columna **`AS Media`**. Sugerencia: cuenta las victorias por equipo (como local y como visitante) con un `LEFT JOIN` y luego calcula la media.

### **5. Subconsultas**

**Ejercicio 21.** ¿Cuánto pesa (en libras y kilos) el pívot más alto de la NBA? Muestra Nombre, Altura, Peso y **`AS Kilos`**. Sugerencia: subconsulta con `MAX(Altura)`.

**Ejercicio 33.** Máximo reboteador de los 'Suns'. Muestra Nombre y **`AS Rebotes`**. Sugerencia: subconsulta con `MAX(Rebotes_por_partido)` limitada a los Suns.

**Ejercicio 34.** Máximo anotador de toda la base de datos en una temporada. Muestra **`AS Temporada`**, **`AS Jugador`** y **`AS Puntos`**. Sugerencia: subconsulta con `MAX(Puntos_por_partido)`.

### **6. Múltiples selecciones**

**Ejercicio 37.** Número de partidos ganados por cada equipo de la NBA. Muestra **`AS Equipo`** y **`AS Victorias`**. Sugerencia: une con `UNION ALL` las victorias como local y como visitante y después cuenta.

</details>

ENC1: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

> **📌 Cómo usar el playground**
> 

> 1. Selecciona un **ejercicio** del desplegable (agrupados por dificultad).

> 1. Lee la descripción del ejercicio que aparece abajo del selector.

> 1. Escribe tu consulta SQL en el editor.

> 1. Pulsa **▶ Ejecutar** para ver los resultados.

> 1. Pulsa **📐 Comparar resultado** para comparar tu resultado con el esperado.

> 1. Si hay diferencias, corrige tu consulta y vuelve a comparar.

> **📌 Comparación con el resultado esperado**
> 

> La comparación exige que tu consulta devuelva **las mismas columnas (con el mismo orden y los mismos nombres de alias)** y **las mismas filas** que la respuesta esperada. Fíjate bien en los alias que se piden en cada ejercicio (por ejemplo `AS Jugador`, `AS Numero`, `AS Equipo`...). El orden de las filas no importa.

> **📌 Sentencias MySQL ignoradas**
> 

> El playground usa SQLite. Al cargar `nba.sql` se ignoran `DROP DATABASE`, `CREATE DATABASE` y `USE`, y se elimina `ENGINE=innodb`. La función MySQL `CONCAT()` y los operadores y funciones habituales (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`, `LENGTH`, `substr`, `LIKE`, `BETWEEN`, `UNION`) funcionan igual.

---

### Actividad Práctica ACT603 — 603

# **Actividad 603**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `603_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta identificación de las **herramientas y sentencias** para realizar consultas.

> - La realización de **consultas simples** sobre una tabla.

> - El uso correcto de **composiciones internas y externas** entre tablas.

> - El uso correcto de **consultas resumen** (funciones de agregado y `GROUP BY`).

> - La correcta utilización de **subconsultas** con los distintos operadores (`=`/`ALL`/`ANY`/`IN`/`EXISTS`).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA3: Consulta la información almacenada en una base de datos empleando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CA3. a) Se han identificado las herramientas y sentencias para realizar consultas.

>   - CA3. b) Se han realizado consultas simples sobre una tabla.

>   - CA3. c) Se han realizado consultas sobre el contenido de varias tablas mediante composiciones internas.

>   - CA3. d) Se han realizado consultas sobre el contenido de varias tablas mediante composiciones externas.

>   - CA3. e) Se han realizado consultas resumen.

>   - CA3. f) Se han realizado consultas con subconsultas.

>   - CA3. g) Se han realizado consultas que implican múltiples selecciones.

## **Consultas a Jardinería 2**

Con la BBDD **jardineria** facilitada (jardineria_new.sql), crea y ejecuta un script `.sql` que realice las siguientes consultas.

### **1. Consultas sobre una tabla**

1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

1. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.

1. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

1. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

1. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

1. Devuelve un listado con el nombre de todos los clientes españoles.

1. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

1. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Ten en cuenta que deberás eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelve la consulta:

  - Utilizando la función `YEAR` de MySQL.

  - Utilizando la función `DATE_FORMAT` de MySQL.

  - Sin utilizar ninguna de las funciones anteriores.

1. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

1. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

  - Utilizando la función `ADDDATE` de MySQL.

  - Utilizando la función `DATEDIFF` de MySQL.

  - ¿Sería posible resolver esta consulta utilizando el operador de suma `+` o resta `-`?

1. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

1. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

1. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordena el resultado de mayor a menor.

1. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Ten en cuenta que no deben aparecer formas de pago repetidas.

1. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

1. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30.

### **2. Consultas multitabla (Composición interna)**

1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

1. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

1. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.

1. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

1. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

1. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.

1. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

1. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

1. Devuelve un listado que muestre el nombre de cada empleado, el nombre de su jefe y el nombre del jefe de su jefe.

1. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

1. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

### **3. Consultas multitabla (Composición externa)**

1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.

1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.

1. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.

1. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.

1. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.

1. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.

1. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.

1. Devuelve un listado de los productos que nunca han aparecido en un pedido.

1. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.

1. Devuelve las oficinas donde no trabajan ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama `Frutales`.

1. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.

1. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.

### **4. Consultas resumen**

1. ¿Cuántos empleados hay en la compañía?

1. ¿Cuántos clientes tiene cada país?

1. ¿Cuál fue el pago medio en 2009?

1. ¿Cuántos pedidos hay en cada estado? Ordena el resultado de forma descendente por el número de pedidos.

1. Calcula el precio de venta del producto más caro y más barato en una misma consulta.

1. Calcula el número de clientes que tiene la empresa.

1. ¿Cuántos clientes existen con domicilio en la ciudad de Madrid?

1. ¿Calcula cuántos clientes tiene cada una de las ciudades que empiezan por M?

1. Devuelve el nombre de los representantes de ventas y el número de clientes al que atiende cada uno.

1. Calcula el número de clientes que no tiene asignado representante de ventas.

1. Calcula la fecha del primer y último pago realizado por cada uno de los clientes. El listado deberá mostrar el nombre y los apellidos de cada cliente.

1. Calcula el número de productos diferentes que hay en cada uno de los pedidos.

1. Calcula la suma de la cantidad total de todos los productos que aparecen en cada uno de los pedidos.

1. Devuelve un listado de los 20 productos más vendidos y el número total de unidades que se han vendido de cada uno. El listado deberá estar ordenado por el número total de unidades vendidas.

1. La facturación que ha tenido la empresa en toda la historia, indicando la base imponible, el IVA y el total facturado. La base imponible se calcula sumando el coste del producto por el número de unidades vendidas de la tabla `detalle_pedido`. El IVA es el 21 % de la base imponible, y el total la suma de los dos campos anteriores.

1. La misma información que en la pregunta anterior, pero agrupada por código de producto.

1. La misma información que en la pregunta anterior, pero agrupada por código de producto filtrada por los códigos que empiecen por `OR`.

1. Lista las ventas totales de los productos que hayan facturado más de 3000 euros. Se mostrará el nombre, unidades vendidas, total facturado y total facturado con impuestos (21% IVA).

1. Muestra la suma total de todos los pagos que se realizaron para cada uno de los años que aparecen en la tabla `pagos`.

### **5. Subconsultas**

#### **5.1. Con operadores básicos de comparación**

1. Devuelve el nombre del cliente con mayor límite de crédito.

1. Devuelve el nombre del producto que tenga el precio de venta más caro.

1. Devuelve el nombre del producto del que se han vendido más unidades. (Ten en cuenta que tendrás que calcular cuál es el número total de unidades que se han vendido de cada producto a partir de los datos de la tabla `detalle_pedido`).

1. Los clientes cuyo límite de crédito sea mayor que los pagos que haya realizado. (Sin utilizar `INNER JOIN`).

1. Devuelve el producto que más unidades tiene en stock.

1. Devuelve el producto que menos unidades tiene en stock.

1. Devuelve el nombre, los apellidos y el email de los empleados que están a cargo de Alberto Soria.

#### **5.2. Subconsultas con ALL y ANY**

1. Devuelve el nombre del cliente con mayor límite de crédito.

1. Devuelve el nombre del producto que tenga el precio de venta más caro.

1. Devuelve el producto que menos unidades tiene en stock.

#### **5.3. Subconsultas con IN y NOT IN**

1. Devuelve el nombre, apellido1 y cargo de los empleados que no representen a ningún cliente.

1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.

1. Devuelve un listado que muestre solamente los clientes que sí han realizado algún pago.

1. Devuelve un listado de los productos que nunca han aparecido en un pedido.

1. Devuelve el nombre, apellidos, puesto y teléfono de la oficina de aquellos empleados que no sean representante de ventas de ningún cliente.

1. Devuelve las oficinas donde no trabajan ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama `Frutales`.

1. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.

#### **5.4. Subconsultas con EXISTS y NOT EXISTS**

1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.

1. Devuelve un listado que muestre solamente los clientes que sí han realizado algún pago.

1. Devuelve un listado de los productos que nunca han aparecido en un pedido.

1. Devuelve un listado de los productos que han aparecido en un pedido alguna vez.

### **6. Consultas variadas**

1. Devuelve el listado de clientes indicando el nombre del cliente y cuántos pedidos ha realizado. Ten en cuenta que pueden existir clientes que no han realizado ningún pedido.

1. Devuelve un listado con los nombres de los clientes y el total pagado por cada uno de ellos. Ten en cuenta que pueden existir clientes que no han realizado ningún pago.

1. Devuelve el nombre de los clientes que hayan hecho pedidos en 2008 ordenados alfabéticamente de menor a mayor.

1. Devuelve el nombre del cliente, el nombre y primer apellido de su representante de ventas y el número de teléfono de la oficina del representante de ventas, de aquellos clientes que no hayan realizado ningún pago.

1. Devuelve el listado de clientes donde aparezca el nombre del cliente, el nombre y primer apellido de su representante de ventas y la ciudad donde está su oficina.

1. Devuelve el nombre, apellidos, puesto y teléfono de la oficina de aquellos empleados que no sean representante de ventas de ningún cliente.

1. Devuelve un listado indicando todas las ciudades donde hay oficinas y el número de empleados que tiene.

ENC1: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

> **📌 Prueba tus consultas**
> 

> Selecciona la base de datos **jardineria** arriba y escribe tus consultas SQL en el editor. Esta actividad tiene 86 ejercicios — usa el playground para verificar cada una de tus respuestas. Cuando termines, sube tu fichero `.sql` con el botón **📂 Corregir fichero .sql** para corregirlos todos de golpe. Cada consulta debe ir precedida de la línea `-- EJERCICIO <código>` (p. ej. `-- EJERCICIO 5`, `-- EJERCICIO I23`).

---

### Actividad Práctica ACT604 — 604

# **Actividad 604**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `604_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta **creación de vistas** con `CREATE OR REPLACE VIEW`.

> - El uso correcto de **composiciones internas y externas** dentro de las vistas.

> - La correcta utilización de las vistas para realizar **consultas**.

> - La **modificación y eliminación** de vistas.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA2: Crea bases de datos definiendo su estructura y las características de sus elementos según el modelo relacional.

>   - CA2. f) Se han creado vistas.

## **1. Base de datos: Empresa**

Sobre la base de datos **empresa** facilitada (06bd-empresa.sql) se pide crear las siguientes vistas (para los campos nuevos, se indica el nombre que debe tener):

**a. `empleado_anyos`**: Para cada empleado, mostrar, además de su código y nombre, su edad (`EdadEmp`) y los años de antigüedad en la empresa (`AntEmp`).

**b. `centro_presupuesto`**: Para cada centro, además de su código y nombre, mostrar su presupuesto anual (`CenPreAnu`), y el código (`CodDir`) y el nombre (`NomDir`) de su director.

**c. `empleado_habilidades_total`**: Para cada empleado, además de su código y nombre, el código y nombre de su departamento, y una columna con el total de habilidades de dicho empleado (`NumHab`). Si no tiene habilidades, debe aparecer el empleado, pero con dicho valor a 0.

**d. `departamento_jerarquia`**: Para cada departamento, además del código y el nombre, muestre el código (`CodDepSup`) y el nombre (`NomDepSup`) de su departamento superior si lo tienen. Deben aparecer todos los departamentos.

Utilizando las vistas creadas, se pide crear las siguientes consultas:

**e.** Muestra para cada centro, además del presupuesto, el nombre de su director, edad y años en la empresa.

**f.** Muestra para cada empleado, su código, nombre, cuántas habilidades tiene, el nombre del departamento en el que trabaja y el nombre de su departamento superior.

**g.** Muestra para cada empleado, su código, nombre, cuántas habilidades tiene y una columna `nivel` que sea `A` si tiene 2 o más habilidades, `B` si tiene una habilidad y `C` si no tiene ninguna.

## **2. Base de datos: Jardinería**

Sobre la base de datos **jardineria** facilitada (jardineria.sql) se pide:

1. Escribe una vista que se llame `listado_pagos_clientes` que muestre un listado donde aparezcan todos los clientes y los pagos que ha realizado cada uno de ellos. La vista deberá tener las siguientes columnas: nombre y apellidos del cliente concatenados, teléfono, ciudad, país, fecha_pago, total del pago, id de la transacción.

1. Escribe una vista que se llame `listado_pedidos_clientes` que muestre un listado donde aparezcan todos los clientes y los pedidos que ha realizado cada uno de ellos. La vista deberá tener las siguientes columnas: código del cliente, nombre y apellidos del cliente concatenados, teléfono, ciudad, país, código del pedido, fecha del pedido, fecha esperada, fecha de entrega y la cantidad total del pedido, que será la suma del producto de todas las cantidades por el precio de cada unidad, que aparecen en cada línea de pedido.

1. Utiliza las vistas que has creado en los pasos anteriores para devolver un listado de los clientes de la ciudad de Madrid que han realizado pagos.

1. Utiliza las vistas que has creado en los pasos anteriores para devolver un listado de los clientes que todavía no han recibido su pedido.

1. Utiliza las vistas que has creado en los pasos anteriores para calcular el número de pedidos que ha realizado cada uno de los clientes.

1. Utiliza las vistas que has creado en los pasos anteriores para calcular el valor del pedido máximo y mínimo que ha realizado cada cliente.

1. Modifica el nombre de la vista `listado_pagos_clientes` y asígnale el nombre `listado_de_pagos`. Una vez que hayas modificado el nombre de la vista, ejecuta una consulta utilizando el nuevo nombre de la vista para comprobar que sigue funcionando correctamente.

---

### Actividad Práctica ACT605 — 605

# **Actividad 605**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `605_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta **identificación de los índices** existentes en las tablas.

> - El **análisis del plan de ejecución** (`EXPLAIN`) de las consultas.

> - La **creación de índices** adecuados para optimizar las consultas.

> - La **comparación** del plan de ejecución antes y después de crear los índices.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA3: Consulta la información almacenada en una base de datos empleando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CA3. h) Se han aplicado criterios de optimización de consultas.

## **Optimización de consultas**

Con la BBDD **retail** facilitada (06bd-retail.sql), realiza los siguientes pasos.

### **Paso 1: Averigua qué índices existen**

Averigua qué índices existen en las diferentes tablas mediante la sentencia:

```sql
SHOW INDEX FROM nombreTabla;
```

### **Paso 2: Ejecuta las siguientes consultas analizando su plan de ejecución**

**a. Productos de pedidos completados**

```sql
SELECT p.product_name, p.product_price
FROM products p JOIN order_items oi
ON p.product_id = oi.order_item_product_id
JOIN orders o ON oi.order_item_order_id = o.order_id
WHERE o.order_status = "COMPLETE";
```

Mediante el plan de ejecución, averigua si utilizan índices, cuáles son y cuántos documentos recorren. A continuación, crea un índice sobre la columna `order_status`. Vuelve a ejecutar la consulta y compara el resultado.

**b. Productos de pedidos cancelados de clientes que viven en Caguas**

```sql
SELECT p.product_name, p.product_price
FROM products p JOIN order_items oi
ON p.product_id = oi.order_item_product_id
JOIN orders o ON oi.order_item_order_id = o.order_id
JOIN customers c ON o.order_customer_id = c.customer_id
WHERE o.order_status = "CANCELED" AND c.customer_city = "Caguas";
```

Averigua si utilizan índices, cuáles son y cuántos documentos recorren. A continuación, crea un índice sobre la columna `customer_city`. Vuelve a ejecutar la consulta y compara el resultado.

**c. Categoría y cantidad económica de los productos de pedidos pendientes de clientes que viven en el estado de California (CA)**

```sql
SELECT ca.category_name, SUM(p.product_price)
FROM categories ca JOIN products p
ON ca.category_department_id = p.product_category_id
JOIN order_items oi ON p.product_id = oi.order_item_product_id
JOIN orders o ON oi.order_item_order_id = o.order_id
JOIN customers c ON o.order_customer_id = c.customer_id
WHERE o.order_status = "PENDING" AND c.customer_state = "CA"
GROUP BY ca.category_name;
```

Analiza el plan de ejecución y compáralo con la consulta anterior. A continuación, crea los índices que consideres oportunos para mejorar la consulta todo lo que se pueda. Vuelve a ejecutar la consulta y compara el resultado.
