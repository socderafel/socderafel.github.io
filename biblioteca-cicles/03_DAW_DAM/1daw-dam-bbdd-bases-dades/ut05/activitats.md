---
title: "Cuaderno Completo de Actividades — UD5 — Bases de Datos"
layout: "default"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT05"
prev_url: "act505.html"
prev_label: "⬅️ ⚡ Activitat 505: Activitat de classe: "
next_url: "../ut06/index.html"
next_label: "Següent Unitat (UD6) ➡️"
module: "BBDD"
---

# Cuaderno Práctico de Actividades — UD5: Manipulació de Dades i Transaccions — SQL DML i TCL

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progreso de esta sección:</strong> <span class="tracker-count">0 de 4 superados (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 puntos</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

En esta sección tienes acceso directo a todas las actividades prácticas, fichas de trabajo y retos evaluables de esta unidad didáctica. Puedes acceder a cada actividad individualmente o consultar la recopilación completa a continuación:

## 🗂️ Índice de Actividades de la Unidad

- **[⚡ Activitat 501: Gestió de dades - Jardineria](act501.html)**
- **[⚡ Activitat 502: Hospitals](act502.html)**
- **[⚡ Activitat 503: Botiga](act503.html)**
- **[⚡ Activitat 504: Transaccions](act504.html)**
- **[⚡ Activitat 505: Activitat de classe: botiga](act505.html)**

---

## Actividad 501: Gestió de dades - Jardineria

👉 *[Obrir aquesta activitat en pàgina individual](act501.html)*

# **Actividad 501**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script `actualiza.sql` que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `501_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta utilització de les sentències `INSERT`, `UPDATE` i `DELETE`.

> - La correcta utilització de les **subconsultes**.

> - La correcta utilització de les **transaccions**.

> - L'ús de `ALTER TABLE` per a modificar l'estructura de les taules.

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA4: Modifica la informació emmagatzemada en la base de dades utilitzant assistents, eines gràfiques i el llenguatge de manipulació de dades.

>   - CE4. a) S'han identificat les eines i sentències per a modificar el contingut de la base de dades. (5%)

>   - CE4. b) Es han inserit, esborrat i actualitzat dades en les taules. (5%)

>   - CE4. c) Es ha inclòs en una taula la informació resultant de l'ejecució d'una consulta. (5%)

>   - CE4. d) Es han dissenyat guions de sentències per a dur a terme tasques complexes. (5%)

## **Gestió de dades - Jardineria**

Amb la BBDD **jardineria** facilitada (jardineria.sql), crea i executa un script **`actualiza.sql`** que realitze les següents accions.

### **1. Insercions i transacció**

**a.** Inclou una oficina amb sede en **Fuenlabrada**. Les dades hauran de ser:

| Camp | Valor |
| --- | --- |
| codigo_oficina | VA SER-EST |
| ciutat | Fuenlabrada |
| pais | Espanya |
| region | Madrid |
| codigo_postal | 28941 |
| telefono | 918837627 |
| linea_direccion1 | c/ Les suertes, 27 |
| linea_direccion2 | Sota A |

**b.** Inclou un empleat per a l'oficina de Fuenlabrada que siga **representant de vendes**:

| Camp | Valor |
| --- | --- |
| Codigoempleado | 400 |
| nom | Luis |
| apellido1 | Sanchez |
| extension | 0021 |
| email | luis@hotmail.com |
| posat | Rep. Vendes |

**c.** Crea un client i relacionalo amb el representant de vendes creat en el punt anterior. El Codigocliente haurà de ser **290**:

| Camp | Valor |
| --- | --- |
| Codigocliente | 290 |
| Nombrecliente | Riscos Perez |
| Telefono | 918827373 |
| Fax | 918827374 |
| LineaDireccion1 | Carrer sense número |
| Ciutat | Madrid |

**d.** Inclou una comanda (comanda) del client anterior (amb el seu detall) d'almenys **dos productes**, dins d'una **transacció**.

**e.** Actualitza el codi del client inserit i consulta si hi ha canvis en les taules relacionades (CodigoCliente actual 290, CodigoCliente després 288).

### **2. Esborrat, actualització i subconsultes**

Realitza les següents accions:

**a.** Esborrar els clients que no tenen comandes.
**b.** Decrementar en un 20% el preu dels productes que no tinguen comandes.
**c.** Esborra els pagaments del client amb menor límit de crèdit.
**d.** Establir a 0 el límit de crèdit del client que menys unitats pedides tinga del producte `OR-179`.

### **3. Modificació de l'estructura i transaccions**

**a.** Modifica la taula `DetallePedidos` per a inserir un camp numèric anomenat **IVA**. Mitjançant una **transacció**, estableix el valor d'eixe camp a **18** per a aquells registres del qual comanda tinga data a partir de Juliol de 2010. A continuació actualitza el resta dels comandes establint al **16** el IVA.

**b.** Modifica la taula `DetallePedidos` per a incorporar un camp numèric anomenat **TotalLinea** i actualitza tots els seus registres per a calcular el seu valor amb la fórmula:

```sql
TotalLinea = PrecioUnidad * Cantidad * IVA / 100
```

**c.** Esborra el client que menor límit de crèdit tinga. És possible borrar-lo només amb una consulta? Raona la teua resposta.

---

## Actividad 502: Hospitals

👉 *[Obrir aquesta activitat en pàgina individual](act502.html)*

# **Actividad 502**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `502_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta utilització de les sentències `INSERT`, `UPDATE` i `DELETE`.

> - La correcta utilització de les **subconsultes**.

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA4: Modifica la informació emmagatzemada en la base de dades utilitzant assistents, eines gràfiques i el llenguatge de manipulació de dades.

>   - CE4. a) S'han identificat les eines i sentències per a modificar el contingut de la base de dades. (5%)

>   - CE4. b) Es han inserit, esborrat i actualitzat dades en les taules. (5%)

>   - CE4. c) Es ha inclòs en una taula la informació resultant de l'ejecució d'una consulta. (5%)

>   - CE4. d) Es han dissenyat guions de sentències per a dur a terme tasques complexes. (5%)

## **Hospitals**

Executa el DDL que es adjunta a l'activitat (hospitals.sql) i realitza les següents activitats.

### **Es demana**

**1.** Inserir en la taula `Plantilla` a l'enfermero **Garcia J.** amb un sueldo de **3.000 €**, i número d'empleat **1234**. Treballa en l'hospital **22**, sala **2**, turno **matutino**.

**2.** Canviar al pacient número **74835** l'adreça a **MADRID 411**.

**3.** Actualitzar l'adreça del pacient **22335** a `NULL`.

**4.** Igualar l'adreça del pacient número **10995** al valor corresponent en la columna emmagatzemada per al pacient número **14024**.

**5.** En tots els hospitals del país es ha rebut un aumento del pressupost, per la qual cosa es incrementará el número de **camas disponibles en un 10%**.

---

## Actividad 503: Botiga

👉 *[Obrir aquesta activitat en pàgina individual](act503.html)*

# **Actividad 503**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb el script que resol tots els apartats de l'activitat.

> - El nombre del fichero debe ser `503_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta utilització de les sentències `INSERT`, `UPDATE` i `DELETE`.

> - La correcta utilització de la sentència `INSERT ... SELECT`.

> - La correcta utilització de `CREATE TABLE ... AS` per a crear la taula.

> - El razonament de les respostes sobre integritat referencial.

> Esta actividad servirá para calificar:

> - RA4: Modifica la informació emmagatzemada en la base de dades utilitzant assistents, eines gràfiques i el llenguatge de manipulació de dades.

>   - CE4. a) S'han identificat les eines i sentències per a modificar el contingut de la base de dades. (5%)

>   - CE4. b) Es han inserit, esborrat i actualitzat dades en les taules. (5%)

>   - CE4. c) Es ha inclòs en una taula la informació resultant de l'ejecució d'una consulta. (5%)

>   - CE4. d) Es han dissenyat guions de sentències per a dur a terme tasques complexes. (5%)

## **Botiga**

Executa el DDL que es adjunta a l'activitat (botiga.sql) i realitza les següents activitats sobre la base de dades `tienda`.

### **Es demana**

**1.** Insereix un nou fabricant indicant el seu codi (**10**) i el seu nom (**Logitech**).

**2.** Insereix un nou fabricant indicant solament el seu nom (**Ati**).

**3.** Insereix un nou producte associat a un dels nous fabricants. La sentència d'inserció ha d'incloure:

- **Codi:** `AUTO_INCREMENT`

- **Nom:** Ratolí mx master 3s

- **Preu:** 78,39

- **Código_fabricante:** 10

**4.** Insereix un nou producte associat a un dels nous fabricants. La sentència d'inserció ha d'incloure **NOMÉS**:

- **Nom:** Ratolí mx master 2s

- **Preu:** 85,90

- **Código_fabricante:** 10

**5.** Crea una nova taula amb el nom `fabricante_productos` que tinga les següents columnes: `nombre_fabricante` (`varchar(100)`) i no nul, `nombre_producto` (`varchar(100)`) i no nul i `precio` (`double`) i no nul. Una vegada creada la taula insereix **tots els registres** de la base de dades `tienda` en aquesta taula fent ús de **una única operació d'inserció**.

**6.** Elimina el fabricant **Asus**. És possible eliminar-lo? Si no fóra possible, què canvis hauria de realitzar perquè fóra possible borrar-lo?

**7.** Elimina el fabricant **Xiaomi**. És possible eliminar-lo? Si no fóra possible, què canvis hauria de realitzar perquè fóra possible borrar-lo?

**8.** Actualitza el codi del fabricant **Lenovo** i asígnale el valor **20**. És possible actualitzar-lo? Si no fóra possible, què canvis hauria de realitzar perquè fóra possible actualitzar-lo?

**9.** Actualitza el codi del fabricant **Huawei** i asígnale el valor **30**. És possible actualitzar-lo? Si no fóra possible, què canvis hauria de realitzar perquè fóra possible actualitzar-lo?

**10.** Actualitza el preu de tots els productes sumándole **5 €** al preu actual.

**11.** Elimina **totes les impresoras** que tenen un preu menor de **200 €**.

---

## Actividad 504: Transaccions

👉 *[Obrir aquesta activitat en pàgina individual](act504.html)*

# **Actividad 504**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb les respostes comentades de tots els apartats de l'activitat.

> - El nombre del fichero debe ser `504_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta comprensió del funcionament de les **transaccions**.

> - La correcta comprensió del **autocommit**.

> - La correcta comprensió dels **SAVEPOINT**.

> - El razonament de les respostes.

> Esta actividad servirá para calificar:

> - RA4: Modifica la informació emmagatzemada en la base de dades utilitzant assistents, eines gràfiques i el llenguatge de manipulació de dades.

>   - CE4. d) Es han dissenyat guions de sentències per a dur a terme tasques complexes. (5%)

>   - CE4. e) Es ha reconegut el funcionament de les transaccions. (5%)

>   - CE4. f) Es han anulado parcial o totalment els canvis producits per una transacció. (5%)

>   - CE4. g) S'han identificat els efectes de les diferents polítiques de bloqueig de registres. (5%)

## **Transaccions**

En aquesta activitat treballarem els conceptes de **transaccions**, **autocommit** i **SAVEPOINT**. Per a això executarem pas a pas cada un dels blocs SQL i contestarem les preguntes que apareixen en els comentaris.

### **1. Transaccions i autocommit**

Executa el següent SQL i contesta les preguntes que apareixen en els comentaris:

> **📌 Exercici 1**
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

### **2. Transferència bancaria**

Executa el següent SQL i contesta les preguntes que apareixen en els comentaris:

> **📌 Exercici 2**
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

> El `CHECK (saldo >= 0)` impedeix que el saldo d'una compta siga negatiu. Quan es viola una restricció `CHECK`, la sentència falla però la transacció continua, per la qual cosa hi hauria que anular-l'amb `ROLLBACK` per a evitar un saldo inconsistente.

### **3. Pèrdua de connexió**

Executa les següents instruccions i resol les qüestions que es plantean en cada pas:

> **📌 Exercici 3**
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

Ara anem a **simular que perdemos la connexió amb el servidor** abans de que la transacció siga completada (observa que hem executat `SET AUTOCOMMIT = 0`).

Per a simular que perdemos la connexió des de MySQL Workbench cal **tancar la pestanya de connexió** amb el servidor. Si estàs connectat al servidor des de la consola de MySQL només has d'executar el comanda `EXIT`.

Tornem a connectar amb el servidor i executem les següents instruccions:

> **📌 Reconexión**
> 

```sql
USE test;

-- ¿Qué devolverá esta consulta?
SELECT * FROM producto;
```

### **4. ROLLBACK i autocommit**

Executa les següents instruccions i resol les qüestions que es plantean en cada pas:

> **📌 Exercici 4**
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

A partir del següent fragment de codi que realitza transaccions, contesta a les preguntes que apareixen com comentaris dins del codi:

> **📌 Exercici 5**
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

---

## Actividad 505: Activitat de classe: botiga

👉 *[Obrir aquesta activitat en pàgina individual](act505.html)*

# **Actividad 505**

> **📌 Entrega**
> 

> - El lliurament serà un **fitxer `.sql`** amb la resolució dels exercicis de l'activitat de classe.

> - El nombre del fichero debe ser `505_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará:**
> 

> Es valorarà:

> - La correcta utilització de les sentències `INSERT`, `UPDATE` i `DELETE`.

> - La correcta utilització de `INSERT ... SELECT`.

> - La correcta utilització d'una **transacció** amb `COMMIT`.

> - El tractament correcte de la **integritat referencial**.

> - El resultat obtingut a l'executar el script.

> Esta actividad servirá para calificar:

> - RA4: Modifica la informació emmagatzemada en la base de dades utilitzant assistents, eines gràfiques i el llenguatge de manipulació de dades.

>   - CE4. a) S'han identificat les eines i sentències per a modificar el contingut de la base de dades. (5%)

>   - CE4. b) Es han inserit, esborrat i actualitzat dades en les taules. (5%)

>   - CE4. c) Es ha inclòs en una taula la informació resultant de l'ejecució d'una consulta. (5%)

>   - CE4. d) Es han dissenyat guions de sentències per a dur a terme tasques complexes. (5%)

## **Activitat de classe: botiga**

Executa el DDL que es adjunta a l'activitat (tienda_estructura.sql) i resol els següents exercicis sobre la base de dades `tienda`.

La base de dades `tienda` té el següent esquema:

- **clients** (id_cliente, nom, email, fecha_alta)

- **productes** (id_producto, nom, preu, stock, activo)

- **comandes** (id_pedido, id_cliente, data, estat)

- **pedido_lineas** (id_pedido, num_linea, id_producto, quantitat, precio_unitario)

### **1) Inserts**

**1.** Insereix un nou client: **Lucía Mora**, email `lucia@demo.com`, fecha_alta **2025-10-01**.

**2.** Insereix un producte: **Alfombrilla XXL**, preu **15.00**, stock **30**, activo **1**.

**3.** Crea una comanda **PENDIENTE** per al client Lucía Mora amb data `NOW()`.

**4.** Afegeix **2 línies** a eixe comanda:

- 2 unitats de **USB 64GB** al preu actual del producte.

- 1 unitat de **Ratolí gaming** al preu actual del producte.

### **2) Updates**

**5.** Puja el preu del **USB 64GB** un **10%**.

**6.** Marca com inactivo (`activo=0`) el producte **Monitor 24"**.

**7.** Canvia l'email de **Pablo Sanz** a `pablo.sanz@demo.com`.

### **3) Deletes**

**8.** Esborra el client **Ana Ruiz**.
Si dóna error per clau forana, ajusta el necessari (sense perdre integritat) i repeteix.

**9.** Elimina el producte **Alfombrilla XXL**.

### **4) Transacció**

**10.** Simula el pagament d'una comanda amb una transacció:

- Tria una comanda existent (per exemple, el de Lucía).

- Canvia la seua estat a **PAGAT**.

- Si tot va bé, `COMMIT`.

Comprova al final el contingut de les taules amb:

> **📌 Comprovació final**
> 

```sql
SELECT * FROM clientes;
SELECT * FROM productos;
SELECT * FROM pedidos ORDER BY id_pedido DESC;
SELECT * FROM pedido_lineas ORDER BY id_pedido DESC, num_linea;
```

---


---

## 🎮 Retos Interactivos de Autoevaluación (+100 XP)

Comprueba tu dominio sobre **Cuaderno Completo de Actividades — UD5** superando estos 4 retos gamificados (+25 puntos cada uno):

<div class="interactive-mcq" data-answer="B" data-hint="Sense la clàusula WHERE, l'operació DML afecta tots els registres de la taula!">
  <div class="mcq-question">🎯 <strong>Reto 1 (+25 pts):</strong> Què passa si executem una sentència <code>UPDATE</code> o <code>DELETE</code> en SQL sense incloure la clàusula <code>WHERE</code>?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El servidor SQL mostra un error de sintaxi i no fa res.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) S'actualitzen o s'esborren TOTES les files de la taula afectada.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Només es modifica la primera fila de la taula.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Es crea automàticament una còpia de seguretat al núvol.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="ROLLBACK reverteix les operacions pendents de la transacció actual.">
  <div class="mcq-question">🎯 <strong>Reto 2 (+25 pts):</strong> En el control de transaccions (TCL), quina instrucció desfà tots els canvis realitzats des de l'inici de la transacció o fins a un punt de salvat (<code>SAVEPOINT</code>)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) COMMIT</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) ROLLBACK</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) TRUNCATE</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) REVOKE</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="ACID garanteix que les transaccions siguen fiables i segures davant fallades o accessos concurrents.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Les propietats ACID d'una transacció fan referència a Atomicitat, Consistència, Aïllament (Isolation) i Durabilitat.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="commit|commit;" data-hint="És la sentència COMMIT.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina sentència SQL TCL confirma de manera definitiva i permanent els canvis realitzats durant una transacció?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Cuaderno Completo de Actividades — UD5**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 puntos XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 puntos · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="BBDD" data-unit="UD05" data-activity="activitats">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
