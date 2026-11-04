---
layout: default
title: "Actividad Práctica ACT301 — Ejercicio 301 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./ut0382.html"
prev_label: "⬅️ 3.8.2 Propiedades Flexbox"
next_url: "./act_act302.html"
next_label: "✏️ ACT302 Ejercicio 302 ➡️"
---

# Ejercicio 301

A partir del documento HTML proporcionado, escribe los **estilos CSS** necesarios para que la web tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT301.png)

Emplea una hoja style.css para definir los estilos CSS a los diferentes elementos. Acuérdate de "linkar" la hoja de estilos con el html.

> **📌 Modificación del documento HTML**
> 

> Cuando empleamos estilos CSS, no debemos modificar el documento HTML.
Si no es necesario porque no existe otra posibilidad de conseguir un estilo determinado,
lo debemos hacer en la menor medida posible.

> En este caso, solo modificaremos el documento HTML para los siguientes casos:

> - Para añadir los atributos `style` que se piden.

> - Añadir elementos `<span>` para aplicar estilos a determinados segmentos del texto.

Además, tienes que tener en cuenta los siguientes **requisitos**:

- El texto principal:

  - El color del texto es azul: `#00F`.

  - El color de fondo del texto es verde claro: `#CFC`.

  - El tipo de letra es la secuencia: `Georgia, Cambria, serif`.

  - El tamaño del texto: `16px`.

- El encabezado de nivel 1:

  - El color del texto es rojo claro: `#F00`.

  - El tipo de letra es la secuencia: `Verdana, Calibri, sans-serif`.

  - El tamaño del texto: `32px`.

- El encabezado de nivel 2:

  - El color del texto es rojo claro: `#A00`.

  - El tipo de letra es la secuencia: `Verdana, Calibri, sans-serif`.

  - El tamaño del texto: `24px`.

- El color de los campos de los datos del libro es verde oscuro: `#060`.

- El texto `Internet` y `Web` (cuando actúan como sustantivos):

  - El tamaño del texto: `20px`.

  - Texto en negrita.

- El texto `Hypertext Markup Language`, `Cascading Style Sheets` y los acrónimos `HTML` y `CSS`:

  - El color del texto es blanco: #FFF.

  - El color de fondo del texto es negro: #000.

  - Texto en cursiva.

<details markdown="1">

<summary>💡 Document HTML Base</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML & CSS: Curso práctico avanzado</title>
  </head>
  <body>
    <h1>HTML & CSS: Curso práctico avanzado</h1>

    <h2>Datos del libro</h2>

    <ul>
      <li>Título: HTML & CSS: Curso práctico avanzado</li>
      <li>Autor: Sergio Luján Mora</li>
      <li>Editorial: Publicaciones Altaria</li>
      <li>Año de publicación: 2015</li>
      <li>ISBN: 978-84-944049-4-8</li>
    </ul>

    <h2>Descripción del libro</h2>

    <p>
      Aunque los inicios de Internet se remontan a los años sesenta, no ha sido
      hasta los años noventa cuando, gracias a la Web, se ha extendido su uso
      por todo el mundo. En pocos años, la Web ha evolucionado enormemente: se
      ha pasado de páginas sencillas, con pocas imágenes y contenidos estáticos
      que eran visitadas por unos pocos usuarios a páginas complejas, con
      contenidos dinámicos que provienen de bases de datos y que son visitadas
      por miles de usuarios al mismo tiempo.
    </p>

    <p>
      Todas las páginas están internamente construidas con la misma tecnología,
      con el Lenguaje de marcas de hipertexto (Hypertext Markup Language, HTML)
      y con las Hojas de estilo en cascada (Cascading Style Sheets, CSS).
    </p>

    <p>
      Este libro es adecuado para cualquiera que tenga interés en aprender a
      desarrollar sus propias páginas web. No son necesarios conocimientos
      previos para aprender con este libro, lo único que es necesario es saber
      utilizar un ordenador y saber navegar por la Web.
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

      <li>
        En la tercera y última parte se explica CSS, el lenguaje que se emplea
        para definir el formato y la presentación de una página web. Se explica
        cómo utilizar el color, cómo definir la presentación del texto, de las
        tablas y de los formularios; cómo realizar transformaciones y
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
      <li>Título: HTML &amp; CSS: Curso práctico avanzado</li>
      <li>Autor: Sergio Luján Mora</li>
      <li>Editorial: Publicaciones Altaria</li>
      <li>Año de publicación: 2015</li>
      <li>ISBN: 978-84-944049-4-8</li>
    </ul>
    <h2>Descripción del libro</h2>
    <p>
      Aunque los inicios de Internet se remontan a los años sesenta, no ha sido
      hasta los años noventa cuando, gracias a la Web, se ha extendido su uso
      por todo el mundo. En pocos años, la Web ha evolucionado enormemente: se
      ha pasado de páginas sencillas, con pocas imágenes y contenidos estáticos
      que eran visitadas por unos pocos usuarios a páginas complejas, con
      contenidos dinámicos que provienen de bases de datos y que son visitadas
      por miles de usuarios al mismo tiempo.
    </p>
    <p>
      Todas las páginas están internamente construidas con la misma tecnología,
      con el Lenguaje de marcas de hipertexto (Hypertext Markup Language, HTML)
      y con las Hojas de estilo en cascada (Cascading Style Sheets, CSS).
    </p>
    <p>
      Este libro es adecuado para cualquiera que tenga interés en aprender a
      desarrollar sus propias páginas web. No son necesarios conocimientos
      previos para aprender con este libro, lo único que es necesario es saber
      utilizar un ordenador y saber navegar por la Web.
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
      <li>
        En la tercera y última parte se explica CSS, el lenguaje que se emplea
        para definir el formato y la presentación de una página web. Se explica
        cómo utilizar el color, cómo definir la presentación del texto, de las
        tablas y de los formularios; cómo realizar transformaciones y
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
color: #00f;
background-color: #cfc;
font-family: Georgia, Cambria, serif;
font-size: 16px;
}
h1 {
  color: #f00;
  font-family: Verdana, Calibri, sans-serif;
  font-size: 32px;
}
h2 {
  color: #a00;
  font-family: Verdana, Calibri, sans-serif;
  font-size: 24px;
}
span {
  color: #060;
}
strong {
  font-size: 20px;
}
em {
  color: #fff;
  background-color: #000;
}
```

</details>

</details>
