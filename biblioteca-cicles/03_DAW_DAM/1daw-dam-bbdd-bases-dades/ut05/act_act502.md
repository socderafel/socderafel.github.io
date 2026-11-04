---
layout: default
title: "Actividad Práctica ACT502 — 502 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT05"
prev_url: "./act_act501.html"
prev_label: "⬅️ ✏️ ACT501 501"
next_url: "./act_act503.html"
next_label: "✏️ ACT503 503 ➡️"
---

# **Actividad 502**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `502_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta utilización de las sentencias `INSERT`, `UPDATE` y `DELETE`.

> - La correcta utilización de las **subconsultas**.

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA4: Modifica la información almacenada en la base de datos utilizando asistentes, herramientas gráficas y el lenguaje de manipulación de datos.

>   - CE4. a) Se han identificado las herramientas y sentencias para modificar el contenido de la base de datos. (5%)

>   - CE4. b) Se han insertado, borrado y actualizado datos en las tablas. (5%)

>   - CE4. c) Se ha incluido en una tabla la información resultante de la ejecución de una consulta. (5%)

>   - CE4. d) Se han diseñado guiones de sentencias para llevar a cabo tareas complejas. (5%)

## **Hospitales**

Ejecuta el DDL que se adjunta a la actividad (hospitales.sql) y realiza las siguientes actividades.

### **Se pide**

**1.** Insertar en la tabla `Plantilla` al enfermero **Garcia J.** con un sueldo de **3.000 €**, y número de empleado **1234**. Trabaja en el hospital **22**, sala **2**, turno **matutino**.

**2.** Cambiar al paciente número **74835** la dirección a **MADRID 411**.

**3.** Actualizar la dirección del paciente **22335** a `NULL`.

**4.** Igualar la dirección del paciente número **10995** al valor correspondiente en la columna almacenada para el paciente número **14024**.

**5.** En todos los hospitales del país se ha recibido un aumento del presupuesto, por lo que se incrementará el número de **camas disponibles en un 10%**.
