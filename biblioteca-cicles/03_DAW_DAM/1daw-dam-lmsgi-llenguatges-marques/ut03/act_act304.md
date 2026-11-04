---
layout: default
title: "Actividad Práctica ACT304 — Ejercicio 304 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act303.html"
prev_label: "⬅️ ✏️ ACT303 Ejercicio 303"
next_url: "./act_act305.html"
next_label: "✏️ ACT305 Ejercicio 305 ➡️"
---

# Ejercicio 304

A partir del documento HTML proporcionado, escribe las reglas CSS necesarias para lograr una página web que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT304.png)

<details markdown="1">

<summary>💡 Document HTML Base</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tabla HTML</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <table>
      <tr>
        <td>teal</td>
        <td>teal</td>
        <td>teal</td>
      </tr>
      <tr>
        <td>red</td>
        <td>red</td>
        <td>red</td>
      </tr>
      <tr>
        <td>blue</td>
        <td>blue</td>
        <td>blue</td>
      </tr>
      <tr>
        <td>orange</td>
        <td>orange</td>
        <td>orange</td>
      </tr>
      <tr>
        <td>purple</td>
        <td>purple</td>
        <td>purple</td>
      </tr>
      <tr>
        <td>olive</td>
        <td>olive</td>
        <td>olive</td>
      </tr>
      <tr>
        <td>fuchsia</td>
        <td>fuchsia</td>
        <td>fuchsia</td>
      </tr>
      <tr>
        <td>green</td>
        <td>green</td>
        <td>green</td>
      </tr>
    </table>
  </body>
</html>
```

</details>

Consideraciones:

- Puedes modificar el documento HTML proporcionado para añadir los identificadores y clases necesarias.

- En la tabla se indican los nombres de los colores que debes emplear.

- Utiliza la mínima cantidad posible de reglas y selectores de CSS.

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tabla HTML</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <table>
      <tr id="fila1">
        <td>teal</td>
        <td>teal</td>
        <td>teal</td>
        <td>teal</td>
      </tr>
      <tr id="fila2">
        <td>red</td>
        <td>red</td>
        <td>red</td>
        <td>red</td>
      </tr>
      <tr id="fila3">
        <td>blue</td>
        <td>blue</td>
        <td>blue</td>
        <td>blue</td>
      </tr>
      <tr id="fila4">
        <td>orange</td>
        <td>orange</td>
        <td>orange</td>
        <td>orange</td>
      </tr>
      <tr id="fila5">
        <td>purple</td>
        <td>purple</td>
        <td>purple</td>
        <td>purple</td>
      </tr>
      <tr id="fila6">
        <td>olive</td>
        <td>olive</td>
        <td>olive</td>
        <td>olive</td>
      </tr>
      <tr id="fila7">
        <td>fuchsia</td>
        <td>fuchsia</td>
        <td>fuchsia</td>
        <td>fuchsia</td>
      </tr>
      <tr id="fila8">
        <td>green</td>
        <td>green</td>
        <td>green</td>
        <td>green</td>
      </tr>
    </table>
  </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
/* Borde negro */
table,
td {
  border: solid 1px black;
}

/* También se podría haber hecho con clases */
#fila1 {
  color: teal;
}
#fila2 {
  color: red;
}
#fila3 {
  color: blue;
}
#fila4 {
  color: orange;
}
#fila5 {
  color: purple;
}
#fila6 {
  color: olive;
}
#fila7 {
  color: fuchsia;
}
#fila8 {
  color: green;
}

/* Segunda columna */
td + td {
  background-color: red;
}

/* Tercera columna */
td + td + td {
  background-color: green;
}

/* Cuarta columna */
td + td + td + td {
  background-color: blue;
}
```

</details>

</details>
