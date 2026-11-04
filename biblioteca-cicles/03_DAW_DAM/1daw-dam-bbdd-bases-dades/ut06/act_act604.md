---
layout: default
title: "Actividad Práctica ACT604 — 604 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT06"
prev_url: "./act_act603.html"
prev_label: "⬅️ ✏️ ACT603 603"
next_url: "./act_act605.html"
next_label: "✏️ ACT605 605 ➡️"
---

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
