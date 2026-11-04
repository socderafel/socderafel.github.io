---
layout: default
title: "Actividad Práctica ACT605 — 605 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT06"
prev_url: "./act_act604.html"
prev_label: "⬅️ ✏️ ACT604 604"
next_url: "../ut07/index.html"
next_label: "UD7 ➡️"
---

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
