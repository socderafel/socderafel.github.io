---
layout: default
title: "Actividad Práctica ACT107 — 107 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT01"
prev_url: "./act_act106.html"
prev_label: "⬅️ ✏️ ACT106 106"
next_url: "./act_act108.html"
next_label: "✏️ ACT108 108 ➡️"
---

# Actividad 107

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `107_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA1: Reconoce las características de lenguajes de marcas analizando e interpretando fragmentos de código.

>   - CA1. g) Se han identificado la estructura de un documento y sus reglas sintácticas. (5%)

## **Ejercicio 1**

A continuación se muestra un documento XML completo. Identifica en él todas las **partes de su estructura** que puedas encontrar y responde a las preguntas.

> **📌 Documento XML**
> 

```html
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE peliculas>
<!-- Documento con las películas del festival -->
<peliculas>
    <pelicula id="F-01" genero="ciencia ficción">
        <titulo>Origen</titulo>
        <director>Christopher Nolan</director>
        <precio divisa="EUR">14.95</precio>
    </pelicula>
    <pelicula id="F-02">
        <titulo>El viaje de Chihiro</titulo>
        <director>Hayao Miyazaki</director>
        <director>Joe Hisaishi</director>
        <precio divisa="EUR">10.50</precio>
    </pelicula>
</peliculas>
```

1. Escribe las líneas que forman el **prólogo** e indica qué información aporta cada una de ellas.

1. ¿Cuál es el **elemento raíz** o ejemplar? ¿Por qué un documento XML solo puede admitir uno?

1. Señala un ejemplo de cada uno de los siguientes componentes en el documento: **etiqueta de apertura**, **etiqueta de cierre**, **elemento vacío** (si existe), **atributo** y **comentario**.

1. ¿Cómo se denomina la relación entre el elemento `<peliculas>` y el elemento `<pelicula>`? ¿Y entre `<pelicula>` y `<titulo>`?

## **Ejercicio 2**

Los siguientes documentos XML **no cumplen alguna de las reglas sintácticas** del lenguaje. Para cada uno de ellos:

- Marca el error o errores que encuentres.

- Indica **qué regla sintáctica** se está incumpliendo.

- Reescribe el documento corregido.

> **📌 Documento 1**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<club>
    <socio>Laura García</socio>
    <socio>Mario Ruiz</socio>
</club>
<club>
    <socio>Elena Díaz</socio>
</club>
```

> **📌 Documento 2**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <libro Titulo="La isla del tesoro"
    <autor>Robert L. Stevenson</autor>
    <paginas>220</paginas>
</biblioteca>
```

> **📌 Documento 3**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<clase>
    <alumno>
        <nombre>Ana</nombre>
        <apellido>Martín</apellido>
</clase>
    </alumno>
```

> **📌 Documento 4**
> 

```html
<Ejemplo>
    <Contenido>Un mensaje</contenido>
</Ejemplo>
```

## **Ejercicio 3**

El siguiente documento XML contiene **varias reglas sintácticas** respetadas a la vez. Léelo con atención y responde.

> **📌 Documento XML**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<conciertos>
    <concierto fecha="2026-12-05">
        <grupo>Vetusta Morla</grupo>
        <ciudad>Valencia</ciudad>
        <precio>35</precio>
    </concierto>
    <concierto>
        <grupo>Carolina Durante</grupo>
        <ciudad>Madrid</ciudad>
    </concierto>
</conciertos>
```

1. Indica la **regla sintáctica** que está bien aplicada en el elemento `<concierto fecha="2026-12-05">` y explica por qué su valor va entre comillas.

1. Explica por qué el segundo `<concierto>` está bien formado aunque le falte el elemento `<precio>`.

1. ¿Qué regla sintáctica permite afirmar que los dos elementos `<concierto>` son hermanos y que ambos descienden del elemento raíz?

1. Escribe este mismo documento reemplazando cada elemento y atributo por otros equivalentes de tu elección, sin cambiar la estructura, de modo que siga cumpliendo todas las reglas sintácticas.
