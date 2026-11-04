---
layout: default
title: "Actividad Práctica ACT306 — Ejercicio 306 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act305.html"
prev_label: "⬅️ ✏️ ACT305 Ejercicio 305"
next_url: "./act_act307.html"
next_label: "✏️ ACT307 Ejercicio 307 ➡️"
---

# Ejercicio 306

A partir del documento HTML proporcionado, escribe las reglas CSS necesarias para lograr una página web que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT306.png)

<details markdown="1">

<summary>💡 Document HTML Base</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo de listas</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <p>Lista sin elemento gráfico:</p>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>

    <p>Lista con círculos:</p>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>

    <p>Lista con cuadrados:</p>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>

    <p>Lista con números romanos:</p>
    <ol>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ol>

    <p>Lista con letras griegas:</p>
    <ol>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ol>
  </body>
</html>
```

</details>

Se puede modificar el código HTML proporcionado para añadir los identificadores y clases que se necesiten.

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Ejemplo de listas</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <p>Lista sin elemento gráfico:</p>
    <ul class="lista-sin">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>

    <p>Lista con círculos:</p>
    <ul class="lista-circulos">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>

    <p>Lista con cuadrados:</p>
    <ul class="lista-cuadrados">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>

    <p>Lista con números romanos:</p>
    <ol class="lista-romanos">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ol>

    <p>Lista con letras griegas:</p>
    <ol class="lista-griegos">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ol>
  </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
.lista-sin {
  list-style-type: none;
}

.lista-circulos {
  list-style-type: circle;
}

.lista-cuadrados {
  list-style-type: square;
}

.lista-romanos {
  list-style-type: lower-roman;
}

.lista-griegos {
  list-style-type: lower-greek;
}
```

</details>

</details>
