---
layout: default
title: "Actividad Práctica ACT108 — 108 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT01"
prev_url: "./act_act107.html"
prev_label: "⬅️ ✏️ ACT107 107"
next_url: "./act_act109.html"
next_label: "✏️ ACT109 109 ➡️"
---

# Actividad 108

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `108_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA1: Reconoce los elementos de las bases de datos analizando sus funciones y valorando la utilidad de los sistemas gestores.

>   - CE1. h)  Se han analizado las políticas de fragmentación de la información. (5%)

## **Ejercicio 1**

Revisa los conceptos clave de **fragmentación de bases de datos**:

- Fragmentación horizontal.

- Fragmentación vertical.

- Fragmentación mixta.

Asegúrate de comprender:

- Cuándo se utiliza cada tipo.

- Qué ventajas aporta.

- En qué situaciones resulta más adecuada.

**Caso práctico**

Imagina que eres el administrador de bases de datos de una empresa de comercio electrónico internacional.

La empresa gestiona grandes volúmenes de información relacionados con:

- Clientes: Nombre, Dirección, Localidad, Teléfono, id_prod. (Información de los clientes)

- Productos: ID_producto, nombre, categoría, etc. (Detalles de los productos que ofrece la tienda)

- Pedidos: ID_pedido, cliente, productos_comprados, fecha, total de la compra, etc. (Datos de las transacciones de los clientes)

- Sucursales: pais, direccion,etc. (Información sobre las diferentes sucursales físicas de la empresa en distintos países)

Debido al crecimiento de la empresa, es necesario distribuir la base de datos entre varios servidores ubicados en diferentes zonas geográficas.

Realiza el siguiente ejercicio en tablas. Puedes utilizar las tablas del propio documento de textos. Invéntate al menos dos registros (dos filas) de cada tabla. Puedes añadir tu nombre en la de clientes y la de tu compañero que tengas a tu derecha o izquierda (o inventártelo).

### **Paso 1. Fragmentación horizontal**

La tabla **Clientes** contiene los siguientes campos: ID_Cliente, Nombre, Dirección, País, Teléfono, Email, cod_prod.

Aplica una **fragmentación horizontal** dividiendo la información según la localidad.

Debes crear tres fragmentos:

- Clientes de **Catadau**.

- Clientes de **Llombai**.

- Clientes de **Alfarp**.

**Tabla de clientes**

| ID_Cliente | Nombre | Dirección | Localidad | Teléfono | Email | cod_prod |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Carlos Martínez | C/ Valencia, 12 | Catadau | 612345678 | carlos.martinez@email.com | 101 |
| 2 | Laura Gómez | Av. del País Valencià, 8 | Catadau | 623456789 | laura.gomez@email.com | 102 |
| 3 | Luis Andrés | C/ Nou d’Octubre, 15 | Llombai | 634567890 | luis.andres@email.com | 103 |
| 4 | Andrea Ruiz | C/ Sant Roc, 21 | Llombai | 645678901 | andrea.ruiz@email.com | 104 |
| 5 | Pablo Navarro | C/ Major, 5 | Alfarp | 656789012 | pablo.navarro@email.com | 105 |
| 6 | Marta Ferrer | C/ Jaume I, 17 | Alfarp | 667890123 | marta.ferrer@email.com | 106 |

### **Paso 2. Fragmentación vertical**

La tabla **Productos** contiene: ID_Producto, Nombre, Descripción, Precio, Categoría, Stock.

Aplica una **fragmentación vertical** creando dos fragmentos.

**Fragmento 1**

Debe contener:

- ID_Producto

- Nombre

- Precio

**Fragmento 2**

Debe contener:

- ID_Producto

- Descripción

- Categoría

- Stock

**Tabla de productos**

| ID_Producto | Nombre | Descripción | Precio | Categoría | Stock |
| --- | --- | --- | --- | --- | --- |
| 101 | Portátil Lenovo IdeaPad | Ordenador portátil de 15,6 pulgadas, 16 GB de RAM y 512 GB SSD | 699,99 € | Informática | 25 |
| 102 | Monitor LG UltraGear | Monitor de 27 pulgadas con resolución Full HD y frecuencia de 144 Hz | 219,90 € | Informática | 40 |
| 103 | Teclado Logitech K120 | Teclado USB con distribución española | 14,95 € | Periféricos | 120 |
| 104 | Ratón inalámbrico HP | Ratón óptico inalámbrico con receptor USB | 19,99 € | Periféricos | 85 |
| 105 | Disco SSD Samsung | Unidad SSD de 1 TB con interfaz SATA III | 89,50 € | Almacenamiento | 60 |
| 106 | Impresora Epson EcoTank | Impresora multifunción de inyección de tinta con depósito recargable | 249,00 € | Impresión | 18 |

### **Paso 3. Fragmentación mixta**

La tabla **Pedidos** contiene: ID_Pedido, ID_Cliente, Fecha, Total, Método de Pago, Productos.

Aplica una **fragmentación mixta**.

1. Fragmenta horizontalmente según el **año del pedido**.

1. 

Dentro de cada fragmento aplica una **fragmentación vertical**, separando:

1. 

Datos de pago.

1. Productos comprados.

**Tabla de pedidos**

| ID_Pedido | ID_Cliente | Fecha | Total | Método de pago | Productos |
| --- | --- | --- | --- | --- | --- |
| 1001 | 1 | 2023-03-14 | 719,98 € | Tarjeta | Portátil Lenovo IdeaPad, Ratón inalámbrico HP |
| 1002 | 3 | 2023-11-23 | 249,00 € | Transferencia | Impresora Epson EcoTank |
| 1003 | 2 | 2024-02-08 | 234,85 € | PayPal | Monitor LG UltraGear, Teclado Logitech K120 |
| 1004 | 5 | 2024-05-12 | 109,49 € | Tarjeta | Disco SSD Samsung, Ratón inalámbrico HP |
| 1005 | 4 | 2024-09-19 | 949,99 € | Transferencia | Portátil Lenovo IdeaPad, Impresora Epson EcoTank |
| 1006 | 6 | 2025-01-17 | 124,44 € | Bizum | Disco SSD Samsung, Teclado Logitech K120, Ratón inalámbrico HP |
