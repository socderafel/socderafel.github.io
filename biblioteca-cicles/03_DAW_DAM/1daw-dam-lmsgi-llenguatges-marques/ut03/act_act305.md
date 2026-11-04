---
layout: default
title: "Actividad Práctica ACT305 — Ejercicio 305 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act304.html"
prev_label: "⬅️ ✏️ ACT304 Ejercicio 304"
next_url: "./act_act306.html"
next_label: "✏️ ACT306 Ejercicio 306 ➡️"
---

# Ejercicio 305

A partir del documento HTML proporcionado, escribe las reglas CSS necesarias para lograr una página web que tenga el siguiente funcionamiento:

- En su estado normal, un enlace se muestra de color rojo y sin subrayado (propiedad `text-decoration`).

- Cuando el usuario o usuaria sitúa el cursor del ratón sobre un enlace, se invierten los colores (el texto del enlace se muestra con color blanco sobre un fondo rojo) y se muestra el subrayado.

- Cuando un enlace está activo, se muestra de color naranja y sin subrayado.

- Cuando un enlace ha sido visitado, se muestra de color verde oscuro y sin subrayado.

- Cuando un enlace tiene el foco del teclado, se muestra de color azul y en negrita.

<details markdown="1">

<summary>💡 Document HTML Base</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejercicio de selectores</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <ul>
      <li><a href="presentacion.html">Presentación</a></li>
      <li><a href="estudios.html">Estudios</a></li>
      <li><a href="alumnos.html">Alumnos</a></li>
      <li><a href="deportes.html">Deportes</a></li>
      <li><a href="servicios.html">Servicios</a></li>
    </ul>
  </body>
</html>
```

</details>

> **📌 NOTA**
> 

> El orden de escritura de las reglas influye en el resultado final, ya que un enlace puede estar en varios estados al mismo tiempo.

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 CSS</summary>

```html
a {
  color: #f00;
  text-decoration: none;
}

a:visited {
  color: #0a0;
}

a:hover {
  color: #fff;
  background-color: #f00;
  text-decoration: underline;
}

a:focus {
  color: #00f;
  font-weight: bold;
}

a:active {
  color: #f60;
  background-color: #fff;
  text-decoration: none;
}
```

</details>

</details>
