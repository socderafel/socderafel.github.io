---
layout: default
title: "Actividad Práctica ACT303 — Ejercicio 303 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act302.html"
prev_label: "⬅️ ✏️ ACT302 Ejercicio 302"
next_url: "./act_act304.html"
next_label: "✏️ ACT304 Ejercicio 304 ➡️"
---

# Ejercicio 303

A partir de los documentos HTML y CSS proporcionados, modifica el **fichero CSS** para que la web tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT303.png)

<details markdown="1">

<summary>💡 Document HTML Base</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio de selectores</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>

  <body>
    <div id="primero">
      <h1>HTML &amp; CSS: Curso práctico avanzado</h1>

      <p>
        Aunque los inicios de
        <a href="https://es.wikipedia.org/wiki/Internet">Internet</a> se
        remontan a los años sesenta, no ha sido hasta los años noventa cuando,
        gracias a la Web, se ha extendido su uso por todo el mundo. En pocos
        años, la Web ha evolucionado enormemente: se ha pasado de páginas
        sencillas, con pocas imágenes y contenidos estáticos que eran visitadas
        por unos pocos usuarios a
        <em
          >páginas complejas, con contenidos dinámicos que provienen de bases de
          datos y que son visitadas por miles de usuarios al mismo tiempo</em
        >.
      </p>
    </div>

    <div id="segundo" class="normal">
      <p>
        Todas las páginas están internamente construidas con la misma
        tecnología, con el
        <em class="especial">Lenguaje de marcas de hipertexto</em> (<span
          >Hypertext Markup Language</span
        >, <a href="https://es.wikipedia.org/wiki/HTML">HTML</a>) y con las
        <em class="especial">Hojas de estilo en cascada</em> (<span
          >Cascading Style Sheets</span
        >, <a href="https://es.wikipedia.org/wiki/CSS">CSS</a>).
      </p>

      <p>
        Este libro es
        <em
          >adecuado para cualquiera que tenga interés en aprender a desarrollar
          sus propias páginas web</em
        >. No son necesarios conocimientos previos para aprender con este libro,
        lo único que es necesario es saber utilizar un ordenador y saber navegar
        por la Web.
      </p>
    </div>
  </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 Document CSS Base</summary>

```html
/* Todos los elementos de la pagina */
{
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

/* Todos los parrafos de la pagina */
{
  color: #555;
}

/* Todos los párrafos contenidos en #primero */
{
  color: #369;
}

/* Todos los enlaces la pagina */
{
  color: #c30;
}

/* Los elementos <em> contenidos en #primero */
{
  color: #0000bb;
  background-color: #ffffcc;
}

/* Todos los elementos <em> con la clase "especial" en toda la pagina */
{
  color: #ffff00;
  background: #000000;
}

/* Todos los elementos <span> contenidos en la clase "normal" */
{
  font-weight: bold;
}
```

Cada regla CSS incluye un comentario en el que se explica los elementos a los que debe aplicarse.

</details>

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 CSS</summary>

```html
/* Todos los elementos de la pagina */
* {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

/* Todos los parrafos de la pagina */
p {
  color: #555;
}

/* Todos los párrafos contenidos en #primero */
#primero p {
  color: #369;
}

/* Todos los enlaces la pagina */
a {
  color: #c30;
}

/* Los elementos <em> contenidos en #primero */
#primero em {
  color: #0000bb;
  background-color: #ffffcc;
}

/* Todos los elementos <em> con la clase "especial" en toda la pagina */
em.especial {
  color: #ffff00;
  background: #000000;
}

/* Todos los elementos <span> contenidos en la clase "normal" */
.normal span {
  font-weight: bold;
}
```

</details>

</details>
