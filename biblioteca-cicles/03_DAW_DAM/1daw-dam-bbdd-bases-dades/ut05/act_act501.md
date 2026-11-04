---
layout: default
title: "Actividad Práctica ACT501 — 501 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT05"
prev_url: "./ut0505.html"
prev_label: "⬅️ 5.5 Transacciones (TCL)"
next_url: "./act_act502.html"
next_label: "✏️ ACT502 502 ➡️"
---

# **Actividad 501**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script `actualiza.sql` que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `501_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta utilización de las sentencias `INSERT`, `UPDATE` y `DELETE`.

> - La correcta utilización de las **subconsultas**.

> - La correcta utilización de las **transacciones**.

> - El uso de `ALTER TABLE` para modificar la estructura de las tablas.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA4: Modifica la información almacenada en la base de datos utilizando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CE4. a) Se han identificado las herramientas y sentencias para modificar el contenido de la base de datos. (5%)

>   - CE4. b) Se han insertado, borrado y actualizado datos en las tablas. (5%)

>   - CE4. c) Se ha incluido en una tabla la información resultante de la ejecución de una consulta. (5%)

>   - CE4. d) Se han diseñado guiones de sentencias para llevar a cabo tareas complejas. (5%)

## **Gestión de datos - Jardinería**

Con la BBDD **jardinería** facilitada (jardineria.sql), crea y ejecuta un script **`actualiza.sql`** que realice las siguientes acciones.

### **1. Inserciones y transacción**

**a.** Incluye una oficina con sede en **Fuenlabrada**. Los datos deberán ser:

| Campo | Valor |
| --- | --- |
| codigo_oficina | FUE-EST |
| ciudad | Fuenlabrada |
| pais | España |
| region | Madrid |
| codigo_postal | 28941 |
| telefono | 918837627 |
| linea_direccion1 | c/ Las suertes, 27 |
| linea_direccion2 | Bajo A |

**b.** Incluye un empleado para la oficina de Fuenlabrada que sea **representante de ventas**:

| Campo | Valor |
| --- | --- |
| Codigoempleado | 400 |
| nombre | Luis |
| apellido1 | Sanchez |
| extension | 0021 |
| email | luis@hotmail.com |
| puesto | Rep. Ventas |

**c.** Crea un cliente y relacionalo con el representante de ventas creado en el punto anterior. El Codigocliente deberá ser **290**:

| Campo | Valor |
| --- | --- |
| Codigocliente | 290 |
| Nombrecliente | Riesgos Perez |
| Telefono | 918827373 |
| Fax | 918827374 |
| LineaDireccion1 | Calle sin número |
| Ciudad | Madrid |

**d.** Incluye un pedido (pedido) del cliente anterior (con su detalle) de al menos **dos productos**, dentro de una **transacción**.

**e.** Actualiza el código del cliente insertado y consulta si hay cambios en las tablas relacionadas (CodigoCliente actual 290, CodigoCliente después 288).

### **2. Borrado, actualización y subconsultas**

Realiza las siguientes acciones:

**a.** Borrar los clientes que no tienen pedidos.
**b.** Decrementar en un 20% el precio de los productos que no tengan pedidos.
**c.** Borra los pagos del cliente con menor límite de crédito.
**d.** Establecer a 0 el límite de crédito del cliente que menos unidades pedidas tenga del producto `OR-179`.

### **3. Modificación de la estructura y transacciones**

**a.** Modifica la tabla `DetallePedidos` para insertar un campo numérico llamado **IVA**. Mediante una **transacción**, establece el valor de ese campo a **18** para aquellos registros cuyo pedido tenga fecha a partir de Julio de 2010. A continuación actualiza el resto de los pedidos estableciendo al **16** el IVA.

**b.** Modifica la tabla `DetallePedidos` para incorporar un campo numérico llamado **TotalLinea** y actualiza todos sus registros para calcular su valor con la fórmula:

```sql
TotalLinea = PrecioUnidad * Cantidad * IVA / 100
```

**c.** Borra el cliente que menor límite de crédito tenga. ¿Es posible borrarlo solo con una consulta? Razona tu respuesta.
