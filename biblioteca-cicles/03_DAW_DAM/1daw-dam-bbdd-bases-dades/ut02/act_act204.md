---
layout: default
title: "Actividad Práctica ACT204 — 204 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT02"
prev_url: "./act_act203.html"
prev_label: "⬅️ ✏️ ACT203 203"
next_url: "./act_act205.html"
next_label: "✏️ ACT205 205 ➡️"
---

# **Actividad 204**

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `205_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA6: Diseña modelos relacionales normalizados interpretando diagramas entidad/relación.

>   - CE6. d) Se han analizado las relaciones entre las tablas del diseño lógico. (1%)

## **Ejercicio 1**

**Gestión de vehículos de una empresa**

Una empresa dispone de una flota de vehículos. Cada vehículo puede:

- ser asignado a un empleado para uso habitual;

- o bien ser alquilado temporalmente a un cliente externo.

Un vehículo nunca podrá estar asignado a un empleado y alquilado al mismo tiempo. Se pide

- Identificar las entidades.

- Identificar las relaciones.

- Representar el modelo E/R indicando la restricción correspondiente.

## **Ejercicio 2**

**Hospital**

En un hospital existen médicos y pacientes. Entre ellos pueden existir dos relaciones:

- Atiende

- Supervisa

Un médico puede atender a muchos pacientes y supervisar a otros muchos. Sin embargo, un mismo médico no puede atender y supervisar simultáneamente al mismo paciente.
Se pide representar el modelo E/R completo.

## **Ejercicio 3**

**Universidad**

Los alumnos pueden:

- matricularse en asignaturas;

- solicitar una beca.

La universidad establece que cualquier alumno que solicite una beca debe estar matriculado. Puede haber alumnos matriculados que no soliciten ninguna beca. Se pide representar el modelo E/R.

## **Ejercicio 4**

**Tienda online**

Los clientes pueden:

- comprar productos;

- devolver productos.

La tienda únicamente acepta devoluciones de productos que previamente hayan sido comprados por ese mismo cliente. Se pide realizar el modelo E/R indicando la restricción correspondiente.

## **Ejercicio 5**

**Biblioteca**

Los usuarios pueden:

- reservar libros;

- prestar libros.

Un libro reservado por un usuario debe ser posteriormente prestado a ese mismo usuario antes de que pueda retirarlo. Diseña el modelo E/R indicando la restricción existente.

## **Ejercicio 6**

**Recursos Humanos**

Un empleado puede participar en dos relaciones:

- Responsable de un proyecto.

- Miembro del proyecto.

Si un empleado es responsable de un proyecto, no puede aparecer también como miembro de ese mismo proyecto. Realiza el modelo E/R.

## **Ejercicio 7**

**Aeropuerto**

Los pilotos pueden:

- Pilotar vuelos comerciales.

- Pilotar vuelos de entrenamiento.

Un piloto sólo podrá pertenecer a uno de esos grupos. Además, un piloto únicamente podrá impartir formación a otro piloto si ambos participan previamente en un vuelo de entrenamiento. Representa todas las restricciones necesarias.

## **Ejercicio 8**

**Infotech**

Una empresa informática dispone de:

- Técnicos.

- Equipos.

Los técnicos pueden:

- Reparar equipos.

- Revisar equipos.

Un mismo técnico no puede reparar y revisar simultáneamente el mismo equipo. Además, un técnico únicamente puede revisar un equipo si previamente está autorizado para trabajar sobre él. Realiza el modelo E/R indicando todas las restricciones.
