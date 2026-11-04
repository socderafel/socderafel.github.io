---
layout: default
title: "Actividad Práctica ACT303 — 303 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT03"
prev_url: "./act_act302.html"
prev_label: "⬅️ ✏️ ACT302 302"
next_url: "./act_act304.html"
next_label: "✏️ ACT304 304 ➡️"
---

# **Actividad 303**

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `303_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA6: Diseña modelos relacionales normalizados interpretando diagramas entidad/relación.

>   - CE6. g) Se han aplicado reglas de normalización. (5%)

> **📌 Recuerda**
> 

| Forma Normal | Requisitos |
| --- | --- |
| **1FN** | Atributos atómicos y filas únicas. |
| **2FN** | 1FN + dependencia funcional completa de la clave primaria. |
| **3FN** | 2FN + sin dependencias transitivas. |
| **FNBC** | 3FN + todo determinante debe ser una superclave. |
| **4FN** | FNBC + sin dependencias multivaluadas. |
| **5FN** | 4FN + sin dependencias de unión (pérdida de datos). |

## **Ejercicio 1: Primera Forma Normal (1FN)**

### **Actividad 01**

La siguiente tabla **no está en 1FN** porque contiene **atributos multivaluados**:

| ID_Cliente | Nombre | Teléfonos | Dirección |
| --- | --- | --- | --- |
| 1 | Ana Pérez | 123456, 789012 | Calle A |
| 2 | Juan López | 345678, 901234 | Calle B |

Transforma la tabla a **1FN**, de manera que no haya atributos multivaluados.

### **Actividad 02**

La tabla contiene **atributos multivaluados y valores repetidos en una misma celda**:

| ID_Pedido | Productos | Cantidad | Cliente |
| --- | --- | --- | --- |
| 1 | Lámpara, Mesa | 2, 1 | Ana Pérez |
| 2 | Silla, Escritorio | 4, 1 | Juan López |

Transforma la tabla para que cumpla **1FN**.

### **Actividad 03**

La tabla contiene **atributos multivaluados y valores repetidos en una misma celda**:

| ID_Cliente | Nombre | Compras |
| --- | --- | --- |
| 1 | Ana Pérez | Lámpara, Escritorio |
| 2 | Juan López | Silla |

Transforma la tabla para que cumpla con **1FN** eliminando los valores multivaluados.

## **Ejercicio 2: Segunda Forma Normal (2FN)**

### **Actividad 01**

La siguiente tabla está en **1FN**, pero no cumple **2FN** debido a **dependencias parciales**:

| ID_Orden | ID_Producto | Producto | Cantidad | Cliente | Dirección |
| --- | --- | --- | --- | --- | --- |
| 1 | 101 | Lámpara | 2 | Ana Pérez | Calle A |
| 1 | 102 | Mesa | 1 | Ana Pérez | Calle A |
| 2 | 103 | Silla | 4 | Juan López | Calle B |

Elimina las dependencias parciales. La clave primaria es `(ID_Orden, ID_Producto)`.

### **Actividad 02**

La siguiente tabla está en **1FN**, pero no cumple **2FN** debido a **dependencias parciales**:

| ID_Producto | ID_Pedido | Nombre_Producto | Cantidad | Cliente |
| --- | --- | --- | --- | --- |
| 1 | 101 | Lámpara | 2 | Ana Pérez |
| 2 | 101 | Escritorio | 1 | Ana Pérez |
| 3 | 102 | Silla | 4 | Juan López |

Descompón la tabla para eliminar las dependencias parciales.

### **Actividad 03**

La siguiente tabla está en **1FN**, pero no cumple **2FN** debido a **dependencias parciales**:

| ID_Pedido | ID_Producto | Nombre_Producto | Cantidad | Cliente | Dirección |
| --- | --- | --- | --- | --- | --- |
| 1 | 101 | Lámpara | 2 | Ana Pérez | Calle A |
| 1 | 102 | Mesa | 1 | Ana Pérez | Calle A |
| 2 | 103 | Silla | 4 | Juan López | Calle B |

Identifica y elimina las dependencias parciales.

## **Ejercicio 3: Tercera Forma Normal (3FN)**

### **Actividad 01**

La siguiente tabla está en **2FN**, pero no cumple **3FN** debido a **dependencias transitivas**:

| ID_Empleado | Nombre_Empleado | Departamento | Jefe_Departamento |
| --- | --- | --- | --- |
| 1 | Luis Gómez | Ventas | Ana Pérez |
| 2 | Marta Ruiz | Marketing | Juan López |

Descompón la tabla para eliminar las dependencias transitivas.

### **Actividad 02**

La siguiente tabla está en **2FN**, pero no cumple **3FN** debido a **dependencias transitivas**:

| ID_Empleado | Nombre | Departamento | Jefe_Departamento | Oficina |
| --- | --- | --- | --- | --- |
| 1 | Luis Gómez | Ventas | Ana Pérez | Oficina A |
| 2 | Marta Ruiz | Marketing | Juan López | Oficina B |

Elimina las dependencias transitivas.

### **Actividad 03**

La siguiente tabla está en **2FN**, pero no cumple **3FN** debido a **dependencias transitivas**:

| ID_Empleado | Nombre | Departamento | Jefe_Departamento | Oficina |
| --- | --- | --- | --- | --- |
| 1 | Luis Gómez | Ventas | Ana Pérez | Oficina A |
| 2 | Marta Ruiz | Marketing | Juan López | Oficina B |

Elimina las dependencias transitivas.

## **Ejercicio 4: Forma Normal de Boyce-Codd (FNBC)**

### **Actividad 01**

Una tabla que no cumple FNBC tiene dependencias funcionales donde **un atributo no clave determina parte de la clave primaria**.

| ID_Proyecto | ID_Empleado | Rol |
| --- | --- | --- |
| 1 | 101 | Diseñador |
| 1 | 102 | Programador |
| 2 | 103 | Diseñador |

Dependencias funcionales:

- **Rol → ID_Empleado** (un rol determina al empleado).

Descompón la tabla para que cumpla **FNBC**.

### **Actividad 02**

Una tabla que no cumple FNBC tiene dependencias funcionales donde **un atributo no clave determina parte de la clave primaria**.

| ID_Curso | ID_Profesor | Nombre_Curso |
| --- | --- | --- |
| 1 | 101 | Matemáticas |
| 2 | 101 | Física |
| 3 | 102 | Química |

Dependencia funcional:

- **ID_Profesor → Nombre_Curso** (un profesor enseña un curso específico).

Elimina las dependencias funcionales problemáticas.

## **Ejercicio 5: Cuarta Forma Normal (4FN)**

### **Actividad 01**

La tabla está en **3FN**. En esta tabla hay una **dependencia multivaluada**, donde un cliente puede tener múltiples **teléfonos** y **correos electrónicos**.

| Cliente | Teléfono | Correo Electrónico |
| --- | --- | --- |
| Ana Pérez | 123456789 | ana@gmail.com |
| Ana Pérez | 987654321 | ana.perez@yahoo.com |
| Juan López | 555666777 | juan@gmail.com |

Elimina la dependencia multivaluada.

### **Actividad 02**

La tabla está en **3FN**. En esta tabla hay una **dependencia multivaluada**, donde un cliente puede tener múltiples **teléfonos** y **compras**.

| Cliente | Teléfono | Producto |
| --- | --- | --- |
| Ana Pérez | 123456789 | Lámpara |
| Ana Pérez | 987654321 | Escritorio |
| Juan López | 555666777 | Silla |

Elimina las dependencias multivaluadas.

## **Ejercicio 6: Quinta Forma Normal (5FN)**

### **Actividad 01**

La tabla está en **4FN**. La tabla representa relaciones entre **clientes**, **productos** y **vendedores**.

| Cliente | Producto | Vendedor |
| --- | --- | --- |
| Ana Pérez | Lámpara | Juan Gómez |
| Ana Pérez | Mesa | Juan Gómez |
| Ana Pérez | Mesa | Marta Ruiz |

Descompón la tabla en relaciones independientes para evitar redundancias.

### **Actividad 02**

La tabla está en **4FN**. La tabla representa relaciones entre **proyectos**, **empleados** y **roles**.

| Proyecto | Empleado | Rol |
| --- | --- | --- |
| Proyecto A | Luis Gómez | Diseñador |
| Proyecto A | Luis Gómez | Programador |
| Proyecto B | Marta Ruiz | Diseñador |

Elimina redundancias distribuyendo los datos en tablas más pequeñas.
