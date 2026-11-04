---
layout: default
title: "Actividad Práctica ACT03 — 803 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT08"
prev_url: "./act_act02.html"
prev_label: "⬅️ ✏️ ACT02 802"
---

# **Actividad 803**

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `803_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA7: Gestiona la información almacenada en bases de datos no relacionales, evaluando y utilizando las posibilidades que proporciona el sistema gestor.

>   - CE7. d) Se han identificado distintas formas de gestión de la información según el tipo de base de datos no relacionales. (100%)

>   - CE7. e) Se han utilizado las herramientas del sistema gestor para la gestión de la información almacenada. (100%)

## **Ejercicio 1**

**Base de datos y colecciones.**
Diseñar y gestionar una base de datos NoSQL con MongoDB que represente una plataforma de cursos online. La base de datos se llamará “formacion”.
La base de datos contará con el siguiente listado de colecciones.

| Colección | Descripción |
| --- | --- |
| cursos | Contiene información sobre cada curso ofertado |
| alumnos | Datos de los estudiantes |
| matriculas | Vincula a los alumnos con los cursos |
| docentes | Datos del profesorado |
| evaluaciones | Resultados de los alumnos en cada curso |

## **Ejercicio 2**

**Crear los documentos para las colecciones**

1. Colección: **cursos**

  - Doc1: nombre: "HTML y CSS", horas: 50, nivel: "básico", modalidad: "online", finalizado: false

  - Doc2: nombre: "JavaScript", horas: 80, nivel: "intermedio", modalidad: "online", finalizado: false

  - Doc3:     nombre: "Python", horas: 90, nivel: "intermedio", modalidad: "presencial", finalizado: false

  - Doc4:     nombre: "Bases de Datos NoSQL", horas: 60, nivel: "intermedio", modalidad: "online", finalizado: true

  - Doc5:     nombre: " Desarrollo Full Stack", horas: 120, nivel: "avanzado", modalidad: "presencial", finalizado: false

1. Colección: **alumnos**

  - Doc1:     nombre: "Lucía", email: "lucia@mail.com", ciudad: "València"

  - Doc2:     nombre: "Mario", email: "mario@mail.com", ciudad: "Alacant"

  - Doc3:     nombre: "Eva", email: "eva@mail.com", ciudad: "Castelló"

  - Doc4:     nombre: "Raúl", email: "raúl@mail.com", ciudad: "Elx"

  - Doc5:     nombre: "Claudia", email: "claudia@mail.com", ciudad: "València"

1. Colección: **docentes**. Cada docente hace referencia a uno o varios cursos.

  - Doc1:     nombre: "Laura", especialidad: "Frontend", cursos: ["HTML y CSS", "JavaScript"]

  - Doc2:     nombre: "Carlos", especialidad: "Backend", cursos: ["Python"]

  - Doc3:     nombre: " Sofía ", especialidad: " Bases de datos", cursos: ["Bases de Datos NoSQL"]

  - Doc4:     nombre: " Manuel ", especialidad: " Full Stack ", cursos: ["Desarrollo Full Stack"]

1. Colección: **matriculas**. Cada matrícula referencia un curso y un alumno por su nombre.

  - Doc1:     alumno: "Lucía", curso: "HTML y CSS", fecha: "2025-03-01"

  - Doc2:     alumno: "Mario", curso: "JavaScript", fecha: "2025-03-15"

  - Doc3:     alumno: "Eva", curso: "Python", fecha: "2025-03-20"

  - Doc4:     alumno: " Raúl", curso: " Bases de Datos NoSQL", fecha: "2025-04-15"

  - Doc5:     alumno: "Claudia", curso: "JavaScript", fecha: "2025-04-20"

1. Colección: evaluaciones

  - Doc1:     alumno: "Lucía", curso: "HTML y CSS", nota: 8.5

  - Doc2:     alumno: "Mario", curso: "JavaScript", nota: 7.0

  - Doc3:     alumno: "Eva", curso: "Python", nota: 9.2

  - Doc4:     alumno: " Raúl", curso: " Bases de Datos NoSQL", nota: 8.8

  - Doc5:     alumno: "Claudia", curso: "JavaScript", nota: 9.5

## **Ejercicio 3**

**Modificar la información de la base de datos**

1. Cambiar modalidad del curso "JavaScript" a "semipresencial".

1. Añadir una nueva alumna.

1. Matricular a Nuria en el curso de "HTML y CSS".

1. Evaluar a Nuria.

1. Incrementar el número de horas de todos los cursos de nivel "intermedio" en 10 horas.

1. Cambiar la ciudad de los alumnos que vivan en "Valencia" a "València".

1. Añadir un campo nuevo teléfono a todos los alumnos que no lo tienen.

1. Reemplazar por completo los datos de un curso (excepto el _id).

1. Eliminar todas las matrículas de un alumno dado su nombre.

1. Añadir un campo comentario en la evaluación de “Claudia” en “JavaScript”.

1. Eliminar la especialidad de los docentes que solo tengan un curso asignado.

1. Añadir una fecha de finalización a los cursos que estén finalizados.

1. Cambiar todos los campos modalidad: "online" a "a distancia".

## **Ejercicio 4**

**Consultas**

Básicas

1. Listar todos los cursos.

1. Mostrar alumnos de València.

1. Mostrar docentes de Backend.

1. Mostrar solo los nombres y niveles de los cursos.

1. Listar los nombres y emails de todos los alumnos.

1. Buscar docentes cuya especialidad sea “Frontend”.

1. Mostrar todos los cursos finalizados.

1. Mostrar los alumnos que no vivan en “València”.

Avanzadas

1. Buscar cursos con más de 60 horas.

1. Media de notas por curso.

1. Número de matriculaciones por curso.

1. Buscar cursos que sean de nivel “intermedio” y modalidad “presencial”.

1. Mostrar los cursos ordenados alfabéticamente (A-Z).

1. Mostrar las 2 últimas matrículas registradas.

1. Calcular el número de cursos por modalidad

## **Ejercicio 5**

**Índices**

1. Crea un índice en nombre para cursos.

1. Crea un índice en ciudad para alumnos.

1. Crea un índice con ordenación descendente en fecha para matrícula.

1. Crea un índice compuesto con ordenación ascendente en ciudad y nombre para alumno.

1. Crea un índice único para que no se repitan los emails de los alumnos.

1. Muestra todos los índices de la colección alumnos.

1. Crea un índice en nombre para docentes y que este índice se llame “idx_nom_docente”.
