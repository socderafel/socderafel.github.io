---
layout: default
title: "Actividad Práctica ACT205 — 205 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT02"
prev_url: "./act_act204.html"
prev_label: "⬅️ ✏️ ACT204 204"
next_url: "./act_act206.html"
next_label: "✏️ ACT206 206 ➡️"
---

# **Actividad 205**

> **📌 Entrega**
> 

> - La entrega será un **fichero PDF** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `206_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta identificación de los elementos del modelo EER.

> - El uso adecuado de la generalización, especialización y agregación.

> - La claridad de los diagramas realizados.

> - La correcta justificación de las respuestas.

> Esta actividad servirá para calificar:

> - **RA6:** Diseña modelos relacionales normalizados interpretando diagramas entidad/relación.

>   - CE6. d) Se han analizado las relaciones entre las tablas del diseño lógico. (1%)

## **Generalización y Especialización**

### **Ejercicio 1**

**Generalización o Especialización**

Indica si en cada caso es más adecuado utilizar una **generalización** o una **especialización**.

| Caso | Respuesta |
| --- | --- |
| Existen las entidades COCHE, MOTO y CAMIÓN con muchos atributos comunes. |  |
| La entidad EMPLEADO tiene algunos trabajadores que cobran comisión y otros que no. |  |
| Existen TARJETA_DÉBITO y TARJETA_CRÉDITO con atributos comunes. |  |
| Una PERSONA puede ser ALUMNO o PROFESOR. |  |
| Existen GATO, PERRO y AVE con características comunes. |  |

### **Ejercicio 2**

**Descubre el supertipo**

Indica cuál sería el **supertipo**.

- Bicicleta, Patinete y Motocicleta.

- Círculo, Rectángulo y Triángulo.

- Profesor, Alumno y Personal Administrativo.

- Cuenta Corriente, Cuenta Ahorro y Cuenta Empresa.

### **Ejercicio 3**

**Descubre los subtipos**

Propón **tres subtipos** para cada uno de los siguientes supertipos.

- Vehículo

- Animal

- Empleado

- Producto

- Usuario

### **Ejercicio 4**

**Herencia de atributos**

Se dispone de la entidad **EMPLEADO** con los siguientes atributos:

- DNI

- Nombre

- Dirección

- Teléfono

- FechaContratación

Además existen los siguientes subtipos:

**Directivo**

- Despacho

- Complemento

**Comercial**

- Comisión

- ZonaVentas

**Técnico**

- Especialidad

- Certificación

Se pide:

- Dibujar el modelo EER.

- Indicar los atributos del supertipo.

- Indicar los atributos propios de cada subtipo.

- Explicar qué atributos hereda cada subtipo.

### **Ejercicio 5**

**Total o Parcial**

Indica el tipo de especialización.

| Caso | Tipo |
| --- | --- |
| Todo vehículo es coche, moto o camión. |  |
| Existen empleados que no pertenecen a ninguna categoría. |  |
| Todos los animales pertenecen a una especie. |  |

### **Ejercicio 6**

**Disjunta o Solapada**

Indica el tipo de especialización.

| Caso | Tipo |
| --- | --- |
| Un estudiante sólo pertenece a un grupo. |  |
| Un profesor puede ser investigador. |  |
| Un empleado puede ser jefe y responsable de calidad. |  |
| Un vehículo sólo puede ser coche o motocicleta. |  |

### **Ejercicio 7**

**Clasifica la jerarquía**

Indica para cada caso si la especialización es:

- Total o Parcial.

- Disjunta o Solapada.

**Caso 1**

Todo empleado pertenece a:

- Directivo

- Comercial

- Técnico

Ninguno puede pertenecer a dos categorías.

**Caso 2**

Un profesor puede ser:

- Tutor

- Coordinador

- Jefe de Departamento

Puede desempeñar varios cargos y algunos profesores no desempeñan ninguno.

### **Ejercicio 8**

**Diseño de una especialización**

Diseña un modelo EER para una universidad.

Debe contener:

- Supertipo PERSONA.

- Subtipos ALUMNO y PROFESOR.

- Cuatro atributos comunes.

- Dos atributos específicos para cada subtipo.

Indica además:

- Si es Total o Parcial.

- Si es Disjunta o Solapada.

## **Agregación**

### **Ejercicio 9**

**¿Cuándo utilizar agregación?**

Indica en qué casos utilizarías una agregación.

- Un profesor imparte una asignatura y un aula donde se imparte.

- Un cliente compra un producto y posteriormente una empresa de transporte realiza el envío de esa compra.

- Un médico atiende pacientes.

- Un jugador pertenece a un equipo.

### **Ejercicio 10**

**Diseño con agregación**

Una biblioteca registra:

- Usuarios

- Libros

Ambos participan en la relación **PRÉSTAMO**.

Posteriormente un empleado supervisa cada préstamo.

Se pide:

- Diseñar el modelo EER utilizando una agregación.

- Identificar las entidades.

- Identificar las relaciones.

## **Ejercicio Completo**

### **Ejercicio 11**

**Modelado completo**

Diseña el modelo EER para una empresa de alquiler de vehículos.

Debe contener:

- Una jerarquía de especialización.

- Un supertipo.

- Tres subtipos.

- Una especialización Total.

- Una especialización Disjunta.

- Una agregación.

- Al menos diez atributos.

- Dos relaciones adicionales.
