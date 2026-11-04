---
layout: default
title: "Actividad Práctica ACT503 — 503 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT05"
prev_url: "./act_act502.html"
prev_label: "⬅️ ✏️ ACT502 502"
next_url: "./act_act504.html"
next_label: "✏️ ACT504 504 ➡️"
---

# **Actividad 503**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `503_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta utilización de las sentencias `INSERT`, `UPDATE` y `DELETE`.

> - La correcta utilización de la sentencia `INSERT ... SELECT`.

> - La correcta utilización de `CREATE TABLE ... AS` para crear la tabla.

> - El razonamiento de las respuestas sobre integridad referencial.

> Esta actividad servirá para calificar:

> - RA4: Modifica la información almacenada en la base de datos utilizando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CE4. a) Se han identificado las herramientas y sentencias para modificar el contenido de la base de datos. (5%)

>   - CE4. b) Se han insertado, borrado y actualizado datos en las tablas. (5%)

>   - CE4. c) Se ha incluido en una tabla la información resultante de la ejecución de una consulta. (5%)

>   - CE4. d) Se han diseñado guiones de sentencias para llevar a cabo tareas complejas. (5%)

## **Tienda**

Ejecuta el DDL que se adjunta a la actividad (tienda.sql) y realiza las siguientes actividades sobre la base de datos `tienda`.

### **Se pide**

**1.** Inserta un nuevo fabricante indicando su código (**10**) y su nombre (**Logitech**).

**2.** Inserta un nuevo fabricante indicando solamente su nombre (**Ati**).

**3.** Inserta un nuevo producto asociado a uno de los nuevos fabricantes. La sentencia de inserción debe incluir:

- **Código:** `AUTO_INCREMENT`

- **Nombre:** Ratón mx master 3s

- **Precio:** 78,39

- **Código_fabricante:** 10

**4.** Inserta un nuevo producto asociado a uno de los nuevos fabricantes. La sentencia de inserción debe incluir **SOLO**:

- **Nombre:** Ratón mx master 2s

- **Precio:** 85,90

- **Código_fabricante:** 10

**5.** Crea una nueva tabla con el nombre `fabricante_productos` que tenga las siguientes columnas: `nombre_fabricante` (`varchar(100)`) y no nulo, `nombre_producto` (`varchar(100)`) y no nulo y `precio` (`double`) y no nulo. Una vez creada la tabla inserta **todos los registros** de la base de datos `tienda` en esta tabla haciendo uso de **una única operación de inserción**.

**6.** Elimina el fabricante **Asus**. ¿Es posible eliminarlo? Si no fuese posible, ¿qué cambios debería realizar para que fuese posible borrarlo?

**7.** Elimina el fabricante **Xiaomi**. ¿Es posible eliminarlo? Si no fuese posible, ¿qué cambios debería realizar para que fuese posible borrarlo?

**8.** Actualiza el código del fabricante **Lenovo** y asígnale el valor **20**. ¿Es posible actualizarlo? Si no fuese posible, ¿qué cambios debería realizar para que fuese posible actualizarlo?

**9.** Actualiza el código del fabricante **Huawei** y asígnale el valor **30**. ¿Es posible actualizarlo? Si no fuese posible, ¿qué cambios debería realizar para que fuese posible actualizarlo?

**10.** Actualiza el precio de todos los productos sumándole **5 €** al precio actual.

**11.** Elimina **todas las impresoras** que tienen un precio menor de **200 €**.
