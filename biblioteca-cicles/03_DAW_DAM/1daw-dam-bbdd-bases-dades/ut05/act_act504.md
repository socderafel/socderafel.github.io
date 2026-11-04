---
layout: default
title: "Actividad Práctica ACT504 — 504 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT05"
prev_url: "./act_act503.html"
prev_label: "⬅️ ✏️ ACT503 503"
next_url: "./act_act505.html"
next_label: "✏️ ACT505 505 ➡️"
---

# **Actividad 504**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con las respuestas comentadas de todos los apartados de la actividad.

> - El nombre del fichero debe ser `504_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta comprensión del funcionamiento de las **transacciones**.

> - La correcta comprensión del **autocommit**.

> - La correcta comprensión de los **SAVEPOINT**.

> - El razonamiento de las respuestas.

> Esta actividad servirá para calificar:

> - RA4: Modifica la información almacenada en la base de datos utilizando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CE4. d) Se han diseñado guiones de sentencias para llevar a cabo tareas complejas. (5%)

>   - CE4. e) Se ha reconocido el funcionamiento de las transacciones. (5%)

>   - CE4. f) Se han anulado parcial o totalmente los cambios producidos por una transacción. (5%)

>   - CE4. g) Se han identificado los efectos de las diferentes políticas de bloqueo de registros. (5%)

## **Transacciones**

En esta actividad trabajaremos los conceptos de **transacciones**, **autocommit** y **SAVEPOINT**. Para ello ejecutaremos paso a paso cada uno de los bloques SQL y contestaremos las preguntas que aparecen en los comentarios.

### **1. Transacciones y autocommit**

Ejecuta el siguiente SQL y contesta las preguntas que aparecen en los comentarios:

> **📌 Ejercicio 1**
> 

```sql
DROP DATABASE IF EXISTS test;
CREATE DATABASE test CHARACTER SET utf8mb4;
USE test;

CREATE TABLE cliente (
    id INT UNSIGNED PRIMARY KEY,
    nombre CHAR (20)
);

START TRANSACTION;
INSERT INTO cliente VALUES (1, 'Pepe');
COMMIT;

-- 1. ¿Qué devolverá esta consulta?
SELECT * FROM cliente;

SET AUTOCOMMIT=0;
INSERT INTO cliente VALUES (2, 'Maria');
INSERT INTO cliente VALUES (20, 'Juan');
DELETE FROM cliente WHERE nombre = 'Pepe';

-- 2. ¿Qué devolverá esta consulta?
SELECT * FROM cliente;

ROLLBACK;

-- 3. ¿Qué devolverá esta consulta?
SELECT * FROM cliente;
```

### **2. Transferencia bancaria**

Ejecuta el siguiente SQL y contesta las preguntas que aparecen en los comentarios:

> **📌 Ejercicio 2**
> 

```sql
DROP DATABASE IF EXISTS test;
CREATE DATABASE test CHARACTER SET utf8mb4;
USE test;

CREATE TABLE cuentas (
    id INTEGER UNSIGNED PRIMARY KEY,
    saldo DECIMAL(11,2) CHECK (saldo >= 0)
);

INSERT INTO cuentas VALUES (1, 1000);
INSERT INTO cuentas VALUES (2, 2000);
INSERT INTO cuentas VALUES (3, 0);

-- 1. Consultamos el estado actual de las cuentas
SELECT * FROM cuentas;

-- 2. Suponga que queremos realizar una transferencia de dinero entre dos
--    cuentas bancarias con la siguiente transacción:
START TRANSACTION;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;

-- 3. ¿Qué devolverá esta consulta?
SELECT * FROM cuentas;

-- 4. Suponga que queremos realizar una transferencia de dinero entre dos
--    cuentas bancarias con la siguiente transacción y una de las dos cuentas
--    no existe:
START TRANSACTION;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 9999;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;

-- 5. ¿Qué devolverá esta consulta?
SELECT * FROM cuentas;

-- 6. Suponga que queremos realizar una transferencia de dinero entre dos
--    cuentas bancarias con la siguiente transacción y la cuenta origen no
--    tiene saldo:
START TRANSACTION;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 3;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;

-- 7. ¿Qué devolverá esta consulta?
SELECT * FROM cuentas;
```

> **📌 CHECK**
> 

> El `CHECK (saldo >= 0)` impide que el saldo de una cuenta sea negativo. Cuando se viola una restricción `CHECK`, la sentencia falla pero la transacción continúa, por lo que habría que anularla con `ROLLBACK` para evitar un saldo inconsistente.

### **3. Pérdida de conexión**

Ejecuta las siguientes instrucciones y resuelve las cuestiones que se plantean en cada paso:

> **📌 Ejercicio 3**
> 

```sql
SET AUTOCOMMIT = 0;
SELECT @@AUTOCOMMIT;

DROP DATABASE IF EXISTS test;
CREATE DATABASE test CHARACTER SET utf8mb4;
USE test;

CREATE TABLE producto (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DOUBLE
);

INSERT INTO producto (id, nombre) VALUES (1, 'Primero');
INSERT INTO producto (id, nombre) VALUES (2, 'Segundo');
INSERT INTO producto (id, nombre) VALUES (3, 'Tercero');

-- 1. Comprueba que las filas se han insertado en la tabla de forma correcta.
SELECT * FROM producto;
```

Ahora vamos a **simular que perdemos la conexión con el servidor** antes de que la transacción sea completada (observa que hemos ejecutado `SET AUTOCOMMIT = 0`).

Para simular que perdemos la conexión desde MySQL Workbench hay que **cerrar la pestaña de conexión** con el servidor. Si estás conectado al servidor desde la consola de MySQL sólo tienes que ejecutar el comando `EXIT`.

Volvemos a conectar con el servidor y ejecutamos las siguientes instrucciones:

> **📌 Reconexión**
> 

```sql
USE test;

-- ¿Qué devolverá esta consulta?
SELECT * FROM producto;
```

### **4. ROLLBACK y autocommit**

Ejecuta las siguientes instrucciones y resuelve las cuestiones que se plantean en cada paso:

> **📌 Ejercicio 4**
> 

```sql
SET AUTOCOMMIT = 1;
SELECT @@AUTOCOMMIT;

DROP DATABASE IF EXISTS test;
CREATE DATABASE test CHARACTER SET utf8mb4;
USE test;

CREATE TABLE producto (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DOUBLE
);

INSERT INTO producto (id, nombre) VALUES (1, 'Primero');
INSERT INTO producto (id, nombre) VALUES (2, 'Segundo');
INSERT INTO producto (id, nombre) VALUES (3, 'Tercero');

-- 1. ¿Qué devolverá esta consulta?
SELECT * FROM producto;

-- 2. Vamos a intentar deshacer la transacción actual
ROLLBACK;

-- 3. ¿Qué devolverá esta consulta? Justifique su respuesta.
SELECT * FROM producto;

-- 4. Ejecutamos la siguiente transacción
START TRANSACTION;
INSERT INTO producto (id, nombre) VALUES (4, 'Cuarto');
SELECT * FROM producto;
ROLLBACK;

-- 5. ¿Qué devolverá esta consulta? Justifique su respuesta.
SELECT * FROM producto;

-- 6. Ejecutamos la siguiente transacción
INSERT INTO producto (id, nombre) VALUES (5, 'Quinto');
ROLLBACK;

-- 7. ¿Qué devolverá esta consulta? Justifique su respuesta.
SELECT * FROM producto;

-- 8. Desactivamos el modo AUTOCOMMIT y borramos el contenido de la tabla
SET AUTOCOMMIT = 0;
SELECT @@AUTOCOMMIT;

DELETE FROM producto WHERE id > 0;

-- 9. Comprobamos que la tabla esta vacia
SELECT * FROM producto;

-- 10. Insertamos dos filas nuevas
INSERT INTO producto (id, nombre) VALUES (6, 'Sexto');
INSERT INTO producto (id, nombre) VALUES (7, 'Séptimo');
SELECT * FROM producto;

-- 11. Hacemos un ROLLBACK
ROLLBACK;

-- 12. ¿Qué devolverá esta consulta? Justifique su respuesta.
SELECT * FROM producto;

-- 13. Ejecutamos la siguiente transacción
SET AUTOCOMMIT = 0;
START TRANSACTION;
CREATE TABLE fabricante (id INT UNSIGNED);
INSERT INTO fabricante (id) VALUES (1);
SELECT * FROM fabricante;
ROLLBACK;

-- 14. ¿Se puede hacer ROLLBACK de instrucciones de tipo DDL (CREATE, ALTER,
--     DROP, RENAME y TRUNCATE)?
```

### **5. SAVEPOINT**

A partir del siguiente fragmento de código que realiza transacciones, contesta a las preguntas que aparecen como comentarios dentro del código:

> **📌 Ejercicio 5**
> 

```sql
DROP DATABASE IF EXISTS test;
CREATE DATABASE test CHARACTER SET utf8mb4;
USE test;

CREATE TABLE producto (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DOUBLE
);

INSERT INTO producto (id, nombre) VALUES (1, 'Primero');
INSERT INTO producto (id, nombre) VALUES (2, 'Segundo');
INSERT INTO producto (id, nombre) VALUES (3, 'Tercero');

-- 1. Comprobamos las filas que existen en la tabla
SELECT * FROM producto;

-- 2. Ejecutamos una transacción que incluye un SAVEPOINT
START TRANSACTION;
INSERT INTO producto (id, nombre) VALUES (4, 'Cuarto');
SAVEPOINT sp1;
INSERT INTO producto (id, nombre) VALUES (5, 'Cinco');
INSERT INTO producto (id, nombre) VALUES (6, 'Seis');
ROLLBACK TO sp1;

-- 3. ¿Qué devolverá esta consulta?
SELECT * FROM producto;
```
