---
layout: default
title: "Actividad Práctica ACT505 — 505 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT05"
prev_url: "./act_act504.html"
prev_label: "⬅️ ✏️ ACT504 504"
next_url: "../ut06/index.html"
next_label: "UD6 ➡️"
---

# **Actividad 505**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con la resolución de los ejercicios de la actividad de clase.

> - El nombre del fichero debe ser `505_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta utilización de las sentencias `INSERT`, `UPDATE` y `DELETE`.

> - La correcta utilización de `INSERT ... SELECT`.

> - La correcta utilización de una **transacción** con `COMMIT`.

> - El tratamiento correcto de la **integridad referencial**.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA4: Modifica la información almacenada en la base de datos utilizando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CE4. a) Se han identificado las herramientas y sentencias para modificar el contenido de la base de datos. (5%)

>   - CE4. b) Se han insertado, borrado y actualizado datos en las tablas. (5%)

>   - CE4. c) Se ha incluido en una tabla la información resultante de la ejecución de una consulta. (5%)

>   - CE4. d) Se han diseñado guiones de sentencias para llevar a cabo tareas complejas. (5%)

## **Actividad de clase: tienda**

Ejecuta el DDL que se adjunta a la actividad (tienda_estructura.sql) y resuelve los siguientes ejercicios sobre la base de datos `tienda`.

La base de datos `tienda` tiene el siguiente esquema:

- **clientes** (id_cliente, nombre, email, fecha_alta)

- **productos** (id_producto, nombre, precio, stock, activo)

- **pedidos** (id_pedido, id_cliente, fecha, estado)

- **pedido_lineas** (id_pedido, num_linea, id_producto, cantidad, precio_unitario)

### **1) Inserts**

**1.** Inserta un nuevo cliente: **Lucía Mora**, email `lucia@demo.com`, fecha_alta **2025-10-01**.

**2.** Inserta un producto: **Alfombrilla XXL**, precio **15.00**, stock **30**, activo **1**.

**3.** Crea un pedido **PENDIENTE** para el cliente Lucía Mora con fecha `NOW()`.

**4.** Añade **2 líneas** a ese pedido:

- 2 unidades de **USB 64GB** al precio actual del producto.

- 1 unidad de **Ratón gaming** al precio actual del producto.

### **2) Updates**

**5.** Sube el precio del **USB 64GB** un **10%**.

**6.** Marca como inactivo (`activo=0`) el producto **Monitor 24"**.

**7.** Cambia el email de **Pablo Sanz** a `pablo.sanz@demo.com`.

### **3) Deletes**

**8.** Borra el cliente **Ana Ruiz**.
Si da error por clave ajena, ajusta lo necesario (sin perder integridad) y repite.

**9.** Elimina el producto **Alfombrilla XXL**.

### **4) Transacción**

**10.** Simula el pago de un pedido con una transacción:

- Elige un pedido existente (por ejemplo, el de Lucía).

- Cambia su estado a **PAGADO**.

- Si todo va bien, `COMMIT`.

Comprueba al final el contenido de las tablas con:

> **📌 Comprobación final**
> 

```sql
SELECT * FROM clientes;
SELECT * FROM productos;
SELECT * FROM pedidos ORDER BY id_pedido DESC;
SELECT * FROM pedido_lineas ORDER BY id_pedido DESC, num_linea;
```
