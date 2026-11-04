---
layout: default
title: "Actividad Práctica ACT307 — Ejercicio 307 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act306.html"
prev_label: "⬅️ ✏️ ACT306 Ejercicio 306"
next_url: "./act_act308.html"
next_label: "✏️ ACT308 Ejercicio 308 ➡️"
---

# Ejercicio 307

Crea una página web que tenga el mismo aspecto que la siguiente imagen:

Se debe mostrar un borde sólido de color rojo cuando el cursor del ratón se sitúe encima de un elemento de la lista o cuando un elemento de la lista reciba el foco del teclado. En la siguiente imagen se muestra el resultado del efecto:

Probar en el navegador

[Página web](https://qhqshf.csb.app/)

<details markdown="1">

<summary>💡 Document HTML Base</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Página web con menú</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <ul>
      <li><a href="#">Presentación</a></li>
      <li><a href="#">Estudios</a></li>
      <li><a href="#">Alumnos</a></li>
      <li><a href="#">Deportes</a></li>
      <li><a href="#">Servicios</a></li>
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
ul {
  list-style-type: none;
  text-align: center;
  /* Suficiente anchura para que quepa "Presentación" */
  width: 120px;
  padding: 0;
}

li {
  background-color: #00f;
  color: #fff;
  /* El borde blanco separa los elementos */
  border: 2px solid #fff;
}

li a {
  color: #fff;
  text-decoration: none;
  /* Necesario para que el enlace ocupe todo el ancho del elemento  de la lista */
  display: block;
  width: 100%;
}

/* Efecto cuando se situa el ratón encima de un elemento de la lista o cuando recibe el foco del teclado */
li a:hover,
li a:focus {
  /* ¿Qué pasa si se utiliza la propiedad border? */
  outline: 2px solid #f00;
}
```

</details>

</details>
