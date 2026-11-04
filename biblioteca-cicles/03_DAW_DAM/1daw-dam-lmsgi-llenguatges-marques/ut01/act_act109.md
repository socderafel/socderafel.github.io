---
layout: default
title: "Actividad Práctica ACT109 — 109 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT01"
prev_url: "./act_act108.html"
prev_label: "⬅️ ✏️ ACT108 108"
next_url: "../ut02/index.html"
next_label: "UD2 ➡️"
---

# Actividad 109

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `109_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA1: Reconoce las características de lenguajes de marcas analizando e interpretando fragmentos de código.

>   - CA1. i) Se han identificado las ventajas que aportan los espacios de nombres. (10%)

## **Ejercicio 1**

Supongamos dos documentos que organizan la información sobre los profesores y los alumnos del Ciclo Formativo.

> **📌 XML de alumnos**
> 

```html
<?xml version="1.0" encoding="iso-8859-1" standalone="yes"?>
<!DOCTYPE alumnos>
<alumnos>
    <nombre>Fernando Fernández González</nombre>
    <nombre>Isabel González Fernández</nombre>
    <nombre>Ricardo Martínez López</nombre>
</alumnos>
```

> **📌 XML de profesores**
> 

```html
<?xml version="1.0" encoding="iso-8859-1" standalone="yes" ?>
<!DOCTYPE profesores>
<profesores>
    <nombre>Pilar Ruiz Pérez</nombre>
    <nombre>Tomás Rodríguez Hernández</nombre>
</profesores>
```

Si uniéramos los dos documentos en uno único, sin usar espacios de nombres, no se distinguirían los profesores de los alumnos ya que en los dos casos la etiqueta  se llama igual.
Para resolverlo necesitamos definir un espacio de nombres para cada contexto.

## **Ejercicio 2**

El siguiente documento XML presenta conflictos en la nomenclatura de sus elementos. Haciendo uso de los espacios de nombres, soluciona dichos conflictos.

> **📌 Xml**
> 

```html
<?xml version="1.0" encoding="iso-8859-1" standalone="yes" ?>
<!DOCTYPE registros>
<registro>
    <persona>
        <nombre>Juan Pérez</nombre>
        <edad>30</edad>
        <direccion>
            <calle>Calle Falsa 123</calle>
            <ciudad>Madrid</ciudad>
        </direccion>
    </persona>
    <producto>
        <nombre>Ordenador Portátil</nombre>
        <precio>1200</precio>
        <caracteristicas>
            <procesador>Intel Core i7</procesador>
            <ram>16GB</ram>
        </caracteristicas>
    </producto>
</registro>
```
