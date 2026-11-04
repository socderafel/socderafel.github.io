---
layout: default
title: "Actividad Práctica ACT302 — Ejercicio 302 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act301.html"
prev_label: "⬅️ ✏️ ACT301 Ejercicio 301"
next_url: "./act_act303.html"
next_label: "✏️ ACT303 Ejercicio 303 ➡️"
---

# Ejercicio 302

A partir del documento HTML proporcionado, escribe los **estilos CSS** necesarios para que la web tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT302.png)

Emplea el **elemento `<link>`** para aplicar los estilos CSS a los diferentes elementos.

> **📌 Modificación del documento HTML**
> 

> Solo se podrá añadir un elemento `<link>` en el documento HTML y no se podrá modificar el resto.

Además, tienes que tener en cuenta los siguientes **requisitos**:

- El texto principal:

  - El color del texto es `#0096c7`.

  - El color de fondo es `#caf0f8`.

  - El tipo de letra es `Georgia, Cambria, serif`.

  - El tamaño del texto: `16px`.

- El encabezado de nivel 1:

  - El color del texto es `#023e8a`.

  - El tipo de letra es `Verdana, Calibri, sans-serif`.

  - El tamaño del texto: `32px`.

- El encabezado de nivel 2:

  - El color del texto es `#0077b6`.

  - El tipo de letra es `Verdana, Calibri, sans-serif`.

  - El tamaño del texto: `24px`.

- El color de los campos de los datos del libro es `#03045e`.

- El texto `Internet` y `Web` (cuando actúan como sustantivos):

  - El tamaño del texto: `20px`.

  - Texto en negrita.

- El texto `Hypertext Markup Language`, `Cascading Style Sheets` y los acrónimos `HTML` y `CSS`:

  - El color del texto es `#90e0ef`.

  - El color de fondo del texto es `#023e8a`.

  - Texto en cursiva.

<details markdown="1">

<summary>💡 Document HTML Base</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML &amp; CSS: Curso práctico avanzado</title>
  </head>
  <body>
    <h1>HTML &amp; CSS: Curso práctico avanzado</h1>

    <h2>Datos del libro</h2>

    <ul>
      <li><span>Título:</span> HTML &amp; CSS: Curso práctico avanzado</li>
      <li><span>Autor:</span> Sergio Luján Mora</li>
      <li><span>Editorial:</span> Publicaciones Altaria</li>
      <li><span>Año de publicación:</span> 2015</li>
      <li><span>ISBN:</span> 978-84-944049-4-8</li>
    </ul>

    <h2>Descripción del libro</h2>

    <p>
      Aunque los inicios de <strong>Internet</strong> se remontan a los años
      sesenta, no ha sido hasta los años noventa cuando, gracias a la
      <strong>Web</strong>, se ha extendido su uso por todo el mundo. En pocos
      años, la <strong>Web</strong> ha evolucionado enormemente: se ha pasado de
      páginas sencillas, con pocas imágenes y contenidos estáticos que eran
      visitadas por unos pocos usuarios a páginas complejas, con contenidos
      dinámicos que provienen de bases de datos y que son visitadas por miles de
      usuarios al mismo tiempo.
    </p>

    <p>
      Todas las páginas están internamente construidas con la misma tecnología,
      con el Lenguaje de marcas de hipertexto (<em>Hypertext Markup Language, HTML</em>)
      y con las Hojas de estilo en cascada (<em>Cascading Style Sheets, CSS</em>).
    </p>

    <p>
      Este libro es adecuado para cualquiera que tenga interés en aprender a
      desarrollar sus propias páginas web. No son necesarios conocimientos
      previos para aprender con este libro, lo único que es necesario es saber
      utilizar un ordenador y saber navegar por la <strong>Web</strong>.
    </p>

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
        sitio web. Se detalla cómo influye la estructura física en las
        <em>URL</em> o direcciones que se emplean a la hora de crear los enlaces
        de un sitio web. Pasando por el concepto de "estándar web", un término
        general que se emplea para refererirse a los estándares que define su
        funcionamiento como <em>HTML</em> y <em>CSS</em>, empleados para el
        desarrollo de las páginas web en el lado del cliente.
      </li>

      <li>
        En la segunda parte se trabaja <em>HTML</em>. Partiendo de la estructura
        básica de una página web, se explican las etiquetas de <em>HTML</em> que
        se utilizan para definir el texto, los enlaces, las listas, las tablas,
        los formularios y los elementos multimedia.
      </li>

      <li>
        En la tercera y última parte se explica <em>CSS</em>, el lenguaje que se
        emplea para definir el formato y la presentación de una página web. Se
        explica cómo utilizar el color, cómo definir la presentación del texto,
        de las tablas y de los formularios; cómo realizar transformaciones y
        transiciones con el fin de diseñar una página web.
      </li>
    </ul>
  </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML &amp; CSS: Curso práctico avanzado</title>
    <link href="estilos.css" rel="stylesheet" />
  </head>
  <body>
    <h1>HTML &amp; CSS: Curso práctico avanzado</h1>
    <h2>Datos del libro</h2>
    <ul>
      <li><span>Título:</span> HTML &amp; CSS: Curso práctico avanzado</li>
      <li><span>Autor:</span> Sergio Luján Mora</li>
      <li><span>Editorial:</span> Publicaciones Altaria</li>
      <li><span>Año de publicación:</span> 2015</li>
      <li><span>ISBN:</span> 978-84-944049-4-8</li>
    </ul>
    <h2>Descripción del libro</h2>
    <p>
      Aunque los inicios de <strong>Internet</strong> se remontan a los años
      sesenta, no ha sido hasta los años noventa cuando, gracias a la
      <strong>Web</strong>, se ha extendido su uso por todo el mundo. En pocos
      años, la <strong>Web</strong> ha evolucionado enormemente: se ha pasado de
      páginas sencillas, con pocas imágenes y contenidos estáticos que eran
      visitadas por unos pocos usuarios a páginas complejas, con contenidos
      dinámicos que provienen de bases de datos y que son visitadas por miles de
      usuarios al mismo tiempo.
    </p>
    <p>
      Todas las páginas están internamente construidas con la misma tecnología,
      con el Lenguaje de marcas de hipertexto (<em>Hypertext Markup Language, HTML</em>) y con las Hojas de estilo en cascada (<em>Cascading Style Sheets, CSS</em>).
    </p>
    <p>
      Este libro es adecuado para cualquiera que tenga interés en aprender a
      desarrollar sus propias páginas web. No son necesarios conocimientos
      previos para aprender con este libro, lo único que es necesario es saber
      utilizar un ordenador y saber navegar por la <strong>Web</strong>.
    </p>
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
        sitio web. Se detalla cómo influye la estructura física en las
        <em>URL</em> o direcciones que se emplean a la hora de crear los enlaces
        de un sitio web. Pasando por el concepto de "estándar web", un término
        general que se emplea para refererirse a los estándares que define su
        funcionamiento como <em>HTML</em> y <em>CSS</em>, empleados para el
        desarrollo de las páginas web en el lado del cliente.
      </li>
      <li>
        En la segunda parte se trabaja <em>HTML</em>. Partiendo de la estructura
        básica de una página web, se explican las etiquetas de <em>HTML</em> que
        se utilizan para definir el texto, los enlaces, las listas, las tablas,
        los formularios y los elementos multimedia.
      </li>
      <li>
        En la tercera y última parte se explica <em>CSS</em>, el lenguaje que se
        emplea para definir el formato y la presentación de una página web. Se
        explica cómo utilizar el color, cómo definir la presentación del texto,
        de las tablas y de los formularios; cómo realizar transformaciones y
        transiciones con el fin de diseñar una página web.
      </li>
    </ul>
  </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
body {
  color: #0096c7;
  background-color: #caf0f8;
  font-family: Georgia, Cambria, serif;
  font-size: 16px;
}
h1 {
  color: #023e8a;
  font-family: Verdana, Calibri, sans-serif;
  font-size: 32px;
}
h2 {
  color: #0077b6;
  font-family: Verdana, Calibri, sans-serif;
  font-size: 24px;
}
span {
  color: #03045e;
}
strong {
  font-size: 20px;
}
em {
  color: #023e8a;
  background-color: #90e0ef;
}
```

</details>

</details>
