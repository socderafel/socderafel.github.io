---
layout: default
title: "Actividad Práctica ACT202 — 202 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT02"
prev_url: "./act_act201.html"
prev_label: "⬅️ ✏️ ACT201 201"
next_url: "./act_act203.html"
next_label: "✏️ ACT203 203 ➡️"
---

# **Actividad 202**

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `202_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA6: Diseña modelos relacionales normalizados interpretando diagramas entidad/relación.

>   - CE6. b) Se han identificado las entidades del diseño lógico. (1%)

>   - CE6. c) Se han identificado los campos que forman parte de las tablas del diseño lógico. (1%)

>   - CE6. d) Se han analizado las relaciones entre las tablas del diseño lógico. (1%)

>   - CE6. e) Se han identificado los campos clave. (1%)

## **Entidades**

### **Ejercicio 1**

**Crear entidades**

Diseña las siguientes entidades indicando:

- Un atributo identificador.

- Tres atributos simples.

**Entidades:**

- Empleado

- Departamento

- Proyecto

### **Ejercicio 2**

**Entidades fuertes y débiles**

Indica cuáles de las siguientes entidades serían **fuertes** y cuáles **débiles**, justificando la respuesta.

- Cliente

- Factura

- Línea de factura

- País

- Pedido

- Detalle de pedido

- Habitación de un hotel

- Reserva

### **Actividad 3**

**Identifica la entidad débil**

Indica cuál es la **entidad fuerte** y cuál es la **entidad débil**.

| Situación | Entidad fuerte | Entidad débil |
| --- | --- | --- |
| Pedido - LíneaPedido |  |  |
| Hotel - Habitación |  |  |
| Cliente - Cuenta bancaria |  |  |
| Universidad - Facultad |  |  |
| Factura - DetalleFactura |  |  |

## **Atributos**

### **Ejercicio 4**

**Identificar tipos de atributos**

Indica el tipo de cada atributo.

| Atributo | Tipo |
| --- | --- |
| DNI |  |
| Edad |  |
| Dirección (calle, número, ciudad) |  |
| Teléfonos |  |
| FechaNacimiento |  |
| Nombre |  |
| Código Postal |  |
| Antigüedad (calculada) |  |

### **Ejercicio 5**

**Diseñar atributos**

Diseña los atributos para las siguientes entidades.

**Vehículo**

Debe tener:

- Un identificador principal.

- Un identificador alternativo.

- Dos atributos simples.

- Un atributo compuesto.

- Un atributo multievaluado.

- Un atributo derivado.

**Persona**
Debe tener los mismos tipos de atributos.

## **Relciones**

### **Ejercicio 6**

**Crear relaciones**

Dibuja el modelo E/R para los siguientes casos.

- Un profesor imparte asignaturas.

- Un cliente realiza pedidos.

- Un médico atiende pacientes.

Añade un verbo adecuado para nombrar cada relación.

### **Ejercicio 7**

**Completar el modelo**

Dispones de las siguientes entidades:

- Alumno

- Curso

- Profesor

Crea las relaciones necesarias para representar que:

- Un alumno se matricula en un curso.

- Un profesor imparte un curso.

## **Componentes**

### **Ejercicio 8**

**Identificar los componentes**

Indica cuáles son las **entidades**, las **relaciones** y algunos **atributos** del siguiente caso:

- Una biblioteca almacena información de sus libros. Los usuarios pueden tomar prestados los libros durante un periodo de tiempo.

**Responde indicando:**

- Entidades:

- Relaciones:

- Atributos de cada entidad:

### **Ejercicio 9**

**Distinguir entidades y atributos**

Clasifica los siguientes conceptos en **Entidad**, **Relación** o **Atributo**.

| Concepto | Clasificación |
| --- | --- |
| Alumno |  |
| Nombre |  |
| Matrícula |  |
| ASISTE |  |
| Profesor |  |
| Fecha de nacimiento |  |
| IMPARTE |  |
| Asignatura |  |
| Aula |  |
| DNI |  |
