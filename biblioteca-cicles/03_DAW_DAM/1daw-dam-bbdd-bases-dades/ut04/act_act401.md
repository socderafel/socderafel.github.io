---
layout: default
title: "Actividad Práctica ACT401 — 401 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT04"
prev_url: "./ut0405.html"
prev_label: "⬅️ 4.5 DCL (Data Control Language)"
next_url: "./act_act402.html"
next_label: "✏️ ACT402 402 ➡️"
---

# **Actividad 401**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script completo de la actividad y una **captura de pantalla** donde se compruebe que se ha ejecutado correctamente.

> - El nombre del fichero debe ser `401_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad y el orden del código.

> - La correcta selección de los tipos de datos.

> - La correcta definición de las claves primarias y ajenas.

> - La correcta implantación de las restricciones.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA2: Crea bases de datos definiendo su estructura y las características de sus elementos según el modelo relacional.

>   - CE2. a) Se ha analizado el formato de almacenamiento de la información. (5%)

>   - CE2. b) Se han creado las tablas y las relaciones entre ellas. (5%)

>   - CE2. c) Se han seleccionado los tipos de datos adecuados. (5%)

>   - CE2. d) Se han definido los campos clave en las tablas. (5%)

>   - CE2. e) Se han implantado las restricciones reflejadas en el diseño lógico. (5%)

> **📌 Objetivo**
> 

> Esta actividad es un **ejemplo guiado y completo** del diseño físico de una base de datos: partiendo del enunciado obtendremos el modelo entidad/relación, el modelo físico y, finalmente, el script SQL para MySQL.

## **Enunciado: Gestión de ventas**

Tenemos una fábrica donde queremos controlar los pedidos que realizan los clientes por medio del comercial.

Para definir a un **cliente** necesitaremos guardarnos su **nombre y apellidos**, su **ciudad** y su **categoría**.

Para definir un **comercial** necesitaremos guardarnos su **nombre y apellidos**, **ciudad** y su **comisión**.

Para cada **pedido** se necesita saber la **fecha** y la **cantidad**.

## **Modelo entidad/relación**

El modelo entidad/relación de la base de datos es el siguiente:

- **cliente** (1) ── realiza ── (N) **pedido**

- **comercial** (1) ── gestiona ── (N) **pedido**

## **Modelo físico**

Del modelo entidad/relación obtenemos el siguiente modelo relacional:

| Tabla | Campos | Clave primaria | Claves ajenas |
| --- | --- | --- | --- |
| **cliente** | id, nombre, apellido1, apellido2, ciudad, categoría | id |  |
| **comercial** | id, nombre, apellido1, apellido2, ciudad, comisión | id |  |
| **pedido** | id, total, fecha, id_cliente, id_comercial | id | id_cliente → cliente(id), id_comercial → comercial(id) |

## **Base de datos para MySQL**

> **📌 CREATE DATABASE ventas**
> 

```sql
DROP DATABASE IF EXISTS ventas;
CREATE DATABASE ventas CHARACTER SET utf8mb4;
USE ventas;
```

> **📌 CREATE TABLE cliente**
> 

```sql
CREATE TABLE cliente (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  ciudad VARCHAR(100),
  categoría INT UNSIGNED
);
```

> **📌 CREATE TABLE comercial**
> 

```sql
CREATE TABLE comercial (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  comisión FLOAT
);
```

> **📌 CREATE TABLE pedido**
> 

```sql
CREATE TABLE pedido (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  total DOUBLE NOT NULL,
  fecha DATE,
  id_cliente INT UNSIGNED NOT NULL,
  id_comercial INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id),
  FOREIGN KEY (id_comercial) REFERENCES comercial(id)
);
```

## **Insertar los datos**

El script completo, con las instrucciones `INSERT` de los datos de ejemplo, se encuentra en el fichero ventas.sql.

## **Se pide**

1. Ejecuta el script completo ventas.sql en tu MySQL y comprueba que las tablas se crean correctamente (`SHOW TABLES;` y `DESCRIBE pedido;`).

1. Explica con tus palabras qué representa cada campo de la tabla `pedido`.

1. ¿Qué tipo de datos se ha utilizado para `categoría`? ¿Y para `comisión`? ¿Por qué crees que se ha elegido ese tipo?

1. ¿Qué ocurre si intentas insertar un `pedido` con un `id_cliente` que no existe? Pruébalo y justifica la respuesta.

1. Entrega el fichero `401_NombreApellidos.sql` con el script ejecutado.
