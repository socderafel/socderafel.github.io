---
layout: default
title: "Actividad Práctica ACT309 — Ejercicio 309 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act308.html"
prev_label: "⬅️ ✏️ ACT308 Ejercicio 308"
next_url: "./act_act310.html"
next_label: "✏️ ACT310 Ejercicio 310 ➡️"
---

# Ejercicio 309

A partir del documento HTML proporcionado, escribe las reglas CSS necesarias para lograr una página web que tenga el mismo aspecto que la siguiente imagen:

<details markdown="1">

<summary>💡 Document HTML base:</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Box model</title>
  </head>
  <body>
    <div>
      <p>I am a paragraph. A short one.</p>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ul>
      <p>
        I am another paragraph. Some of the words have been wrapped in a span element.
      </p>
    </div>
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
    <meta charset="UTF-8" />
    <title>Box model</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <div>
      <p>I am a paragraph. A short one.</p>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ul>
      <p>
        I am another paragraph. Some of the
        <span class="block">words</span> have been wrapped in a span element.
      </p>
    </div>
  </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
div {
  border: 1px solid black;
  padding: 1em;
}

p,
ul {
  border: 2px solid rebeccapurple;
  padding: 0.5em;
}

.block,
li {
  border: 2px solid blue;
  padding: 0.5em;
}

ul {
  display: flex;
  list-style: none;
}

.block {
  display: block;
}
```

</details>

</details>
