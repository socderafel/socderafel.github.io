---
layout: default
title: "Actividad Práctica ACT304 — 304 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT03"
prev_url: "./act_act303.html"
prev_label: "⬅️ ✏️ ACT303 303"
next_url: "./act_act305.html"
next_label: "✏️ ACT305 305 ➡️"
---

# **Actividad 304**

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `304_NombreApellidos.pdf`.

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

> Dadas las siguientes tablas, realiza la **normalización** de las bases de datos aplicando las **3 Formas Normales** vistas en clase:

> 1. **1FN**: atributos atómicos y filas únicas.

> 1. **2FN**: dependencia funcional completa de la clave primaria.

> 1. **3FN**: sin dependencias transitivas.

## **Actividad 01**

**Series**

Tenemos la siguiente tabla. Aplica las **tres formas normales** vistas en clase.

| CodSerie | Título | Genero | AñoLanzamiento | Plataforma |
| --- | --- | --- | --- | --- |
| 0123 | The Last of Us | Suspense, Drama | 2023 | HBO |
| 0219 | The Mandalorian | Ciencia ficción, Accion, Fantasia | 12-11-2019 | Disney+ |
| 0318 | Succession | Comedia negra, tragicomedia | 03-Junio-2018 | HBO |
| 0419 | The Boys | Superheroes | 2019 | PrimeVideo |
| 0519 | Sex Education | Drama, Comedia | 11/1/2019 | Netflix |
| 0619 | The Umbrella Academy | Drama, Superhéroes | 2019 | Netflix |
| 0720 | Ted Lasso | Comedia | 2020 | Apple TV |

## **Actividad 02**

**Ordenes**

Tenemos la siguiente tabla relacionada con una **compra**. Realiza las tres formas normales de la tabla.

| Id_Orden | Fecha | Id_cliente | Nom_client | Id_art | Nom_art | Cant | Precio |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2301 | 23/febrero /24 | 101 | José Perez | 3786 | Red | 3 | 3500 céntimos |
| 2301 | 23/febrero /24 | 101 | José Perez | 4011 | Raqueta | 6 | 65 € |
| 2301 | 23/febrero /24 | 101 | José Perez | 9132 | 3 Pelotas | 8 | 4,75 € |
| 2302 | 25/02/24 | 107 | Fernando Hernandez | 5794 | 6 Pelotas | 4 | 500 céntimos |
| 2303 | 27/2/24 | 110 | Pedro Fernandez | 4011 | Raqueta | 2 | 65 € |
| 2303 | 27/2/24 | 110 | Pedro Fernandez | 3141 | Funda | 2 | 10 € |
