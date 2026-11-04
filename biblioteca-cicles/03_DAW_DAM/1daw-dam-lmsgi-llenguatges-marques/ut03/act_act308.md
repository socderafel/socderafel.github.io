---
layout: default
title: "Actividad Práctica ACT308 — Ejercicio 308 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act307.html"
prev_label: "⬅️ ✏️ ACT307 Ejercicio 307"
next_url: "./act_act309.html"
next_label: "✏️ ACT309 Ejercicio 309 ➡️"
---

# Ejercicio 308

A partir del documento HTML proporcionado, escribe las reglas CSS necesarias para lograr una página web que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT308.png)

Los bordes a definir son:

- Encabezado nivel 1: borde inferior con una anchura de `2px`, sólido y de color azul (`#00F`).

- Encabezado nivel 2: borde completo con una anchura de `2px`, sólido y de color gris (`#AAA`).

- Lista con los datos del libro: borde superior e inferior con una anchura de `4px`, punteado y de color rojo (`#F00`).

- Lista con el contenido del libro: borde completo con una anchura de `2px`, con guiones y de color verde (`#0F0`).

Puedes modificar el código HTML proporcionado para añadir los identificadores y clases que necesites.

<details markdown="1">

<summary>💡 Document HTML Base</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML &amp; CSS: Curso práctico</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <h1>HTML &amp; CSS: Curso práctico avanzado</h1>

    <h2>Datos del libro</h2>

    <ul>
      <li>Título: CSS Web Design For Dummies</li>
      <li>Autor: Richard Mansfield</li>
      <li>Editorial: Wiley</li>
      <li>Año de publicación: 2005</li>
      <li>ISBN: 9780764597541</li>
    </ul>

    <h2>Descripción del libro</h2>

    <ul>
      <li>
        Cascading Style Sheets (CSS) is a Web markup standard that allows Web
        designers to define the appearance and position of a Web page using
        special dynamic effects.
      </li>
      <li>
        This book is the perfect beginner reference, showing those new to CSS
        how to design Web pages and implement numerous useful CSS effects
        available.
      </li>
      <li>
        Seasoned For Dummies author Richard Mansfield explains how CSS can
        streamline and speed up Web development.
      </li>
      <li>
        Explains how to take control of the many elements in a Web page,
        integrate CSS into new or existing sites, choose the best coding
        techniques, and execute advanced visual effects such as transitions
      </li>
      <li>
        Features a special discussion on browser incompatibility issues
        involving CSS and how to solve potential problems.
      </li>
    </ul>

    <h2>Contenido del libro</h2>

    <p>
      El contenido de este libro se estructura en tres apartados bien
      diferenciados:
    </p>

    <ul>
      <li>
        En la primera parte del libro se trabajan conceptos generales que son
        necesarios para poder desarrollar páginas web; se explican conceptos de
        estructura física y estructura lógica (o estructura de navegación) de un
        sitio web. Se detalla cómo influye la estructura física en las URL o
        direcciones que se emplean a la hora de crear los enlaces de un sitio
        web. Pasando por el concepto de "estándar web", un término general que
        se emplea para refererirse a los estándares que define su funcionamiento
        como HTML y CSS, empleados para el desarrollo de las páginas web en el
        lado del cliente.
      </li>

      <li>
        En la segunda parte se trabaja HTML. Partiendo de la estructura básica
        de una página web, se explican las etiquetas de HTML que se utilizan
        para definir el texto, los enlaces, las listas, las tablas, los
        formularios y los elementos multimedia.
      </li>
    </ul>
  </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 CSS</summary>

```html
h1 {
  border-bottom: 2px solid #00f;
}

h2 {
  border: 2px solid #aaa;
}

#datos {
  border-top: 4px dotted #f00;
  border-bottom: 4px dotted #f00;
}

#contenido {
  border: 2px dashed #0f0;
}
```

</details>

</details>
