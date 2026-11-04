---
layout: default
title: "Actividad Práctica ACT315 — Ejercicio 315 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act314.html"
prev_label: "⬅️ ✏️ ACT314 Ejercicio 314"
next_url: "./act_act316.html"
next_label: "✏️ ACT316 Ejercicio 316 ➡️"
---

# Ejercicio 315

> **📌 Nota**
> 

> Este ejercicio tiene una **dificultad alta**. En él se combinan muchas de las características de CSS, aunque en la solución se tratan algunas que no se recogen en los contenidos:

> - Propiedad [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

> - Función [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

Crea una **página web** que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT315.png)

> **📌 Probar en el navegador**
> 

> [Página web](https://3rnm04.csb.app/)

Consideraciones:

- Se debe utilizar **flexbox** para realizar la maquetación.

- No es necesario ser estricto **semánticamente** para estructurar el contenido.

- No se debe implementar ningún tipo de interactividad.

- Son necesarias **cuatro imágenes** para la elaboración del proyecto.

- Los **colores** utilizados son:

  - Fondo: `#ffffff`

  - Borde: `#d1d1d1`

  - Fondo botón (primario): `#0da2e8`

  - Fondo botones (secundarios): `#e2e8f0`

  - Texto botones (secundarios): `#64748b`

  - Títulos: `#000000`

  - Texto (año, género, etc.): `#334155`

  - Borde texto clasificación de edad: `#cbd5e1`

  - Texto (actores/actrices) y puntuación numérica: `#64748b`

- La **fuente** utilizada es [Quicksand](https://fonts.google.com/specimen/Quicksand) (400, 600 y 700).

Para obtener el fondo, debemos utilizar el siguiente código CSS:

> **📌 Css**
> 

```html
body {
  background-color: #e5e5f7;
  background-image: linear-gradient(#dbdbdb 2px, transparent 2px),
    linear-gradient(90deg, #dbdbdb 2px, transparent 2px),
    linear-gradient(#dbdbdb 1px, transparent 1px),
    linear-gradient(90deg, #dbdbdb 1px, #e5e5f7 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
}
```

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Movies</title>
    <link rel="stylesheet" href="estilos.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap"
    rel="stylesheet"
    />
</head>
<body>
    <main class="movies">
    <nav class="nav-menu">
        <a href="#" class="button button-primary">New Releases</a>
        <a href="#" class="button">Top Rated</a>
        <a href="#" class="button">Vicent's Pick</a>
    </nav>
    <article class="movie">
        <div class="movie-cover">
        <img
            src="img/prognosis-negative.webp"
            alt="Cover Prognosis Negative"
        />
        </div>
        <div class="movie-info">
        <h2>Prognosis Negative</h2>
        <div class="movie-rating">
            <img src="img/star.svg" alt="Star rating" />
            2.66
        </div>
        <ul class="movie-meta">
            <li class="movie-pegy">PG-13</li>
            <li>2021</li>
            <li>Comedy</li>
            <li>1h 46m</li>
        </ul>
        <div class="movie-actors">Simon Pegg, Zach Galifianakis</div>
        </div>
    </article>
    <article class="movie">
        <div class="movie-cover">
        <img
            src="img/rochelle-rochelle.webp"
            alt="Cover Rochelle, Rochelle"
        />
        </div>
        <div class="movie-info">
        <h2>Rochelle, Rochelle</h2>
        <div class="movie-rating">
            <img src="img/star.svg" alt="Star rating" />
            3.25
        </div>
        <ul class="movie-meta">
            <li class="movie-pegy">R</li>
            <li>2020</li>
            <li>Romance</li>
            <li>1h 56m</li>
        </ul>
        <div class="movie-actors">Emilia Clarke</div>
        </div>
    </article>
    <article class="movie">
        <div class="movie-cover">
        <img src="img/death-blow.webp" alt="Cover Death Blow" />
        </div>
        <div class="movie-info">
        <h2>Death Blow</h2>
        <div class="movie-rating">
            <img src="img/star.svg" alt="Star rating" />
            4.95
        </div>
        <ul class="movie-meta">
            <li class="movie-pegy">18A</li>
            <li>2020</li>
            <li>Action</li>
            <li>2h 5m</li>
        </ul>
        <div class="movie-actors">Idris Elba, John Cena, Thandiwe Newton</div>
        </div>
    </article>
    </main>
</body>
</html>
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
* {
box-sizing: border-box;
}
html,
body {
width: 100%;
height: 100%;
}
body {
margin: 0;
font-family: "Quicksand", sans-serif;
background-color: #e5e5f7;
background-image: linear-gradient(#dbdbdb 2px, transparent 2px),
    linear-gradient(90deg, #dbdbdb 2px, transparent 2px),
    linear-gradient(#dbdbdb 1px, transparent 1px),
    linear-gradient(90deg, #dbdbdb 1px, #e5e5f7 1px);
background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
display: flex;
justify-content: center;
align-items: center;
}
.movies {
background-color: #ffffff;
width: 600px;
display: flex;
flex-direction: column;
border: 1px solid #d1d1d1;
border-radius: 10px;
overflow: hidden;
}
.nav-menu {
display: flex;
align-items: center;
height: 68px;
padding: 16px 24px;
}
.button {
text-decoration: none;
font-weight: bold;
font-size: 12px;
color: #64748b;
background-color: #e2e8f0;
padding: 8px 12px;
border-radius: 6px;
margin-right: 8px;
}
.button-primary {
background-color: #0da2e8;
color: #f8fafc;
}
.movie {
padding: 16px 24px;
display: flex;
}
.movie-info {
display: flex;
flex-wrap: wrap;
align-content: space-between;
padding-left: 24px;
font-size: 13px;
}
.movie-info h2 {
flex: 1 0 auto;
margin: 0;
padding-top: 4px;
font-size: 16px;
}
.movie-rating {
display: flex;
justify-content: flex-end;
align-items: center;
width: 80px;
height: 24px;
font-size: 14px;
color: #64748b;
font-weight: 600;
}
.movie-rating img {
margin-right: 6px;
}
.movie-cover {
flex: 0 0 60px;
}
.movie-cover img {
width: 60px;
border-radius: 6px;
}
.movie-meta {
font-weight: 600;
flex: 1 0 100%;
display: flex;
align-items: center;
margin: 0;
padding: 0;
list-style: none;
color: #334155;
}
.movie-meta li {
padding: 0 6px;
}
.movie-pegy {
border: 1px solid #cbd5e1;
border-radius: 6px;
}
.movie-actors {
color: #64748b;
padding-bottom: 10px;
}
```

</details>

</details>
