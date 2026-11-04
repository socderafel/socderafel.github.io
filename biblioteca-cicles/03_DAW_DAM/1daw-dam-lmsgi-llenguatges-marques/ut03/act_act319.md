---
layout: default
title: "Actividad Práctica ACT319 — 319 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act318.html"
prev_label: "⬅️ ✏️ ACT318 318"
next_url: "./act_practclase.html"
next_label: "✏️ PRACTCLASE Clase ➡️"
---

# Actividad 319

> **📌 Entrega**
> 

> - La entrega será un **fichero ZIP** que contenga los ficheros necesarios para visualizar la página web (HTML, CSS e imágenes).

> - El nombre del fichero debe ser `319.zip`.

> **📌 Se valorará**
> 

> Para la valoración de este ejercicio, se tendrán en cuenta los siguientes aspectos:

> - Utilizar la notación adecuada.

> - Definir y utilizar los elementos adecuados.

> - Usar adecuadamente las hojas de estilo.

> - Utilizar flexbox y media queries.

> - Realizar una distribución coherente de los elementos y uso de formatos.

**Diseña** una **página web** que tenga el siguiente aspecto:

![text alternatiu](../img/images_UP03-ACT319.webp)

En pantallas de dispositivos móviles, se debe ver de la siguiente forma:

Utiliza flexbox y media queries durante la codificación de CSS.

Recursos

Debes descargar el siguiente **fichero ZIP** con las imágenes necesarias para realizar la actividad.

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
    <title>203</title>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <div class="panel">
    <div class="search">
        <div class="search-icon">
        <img src="img/search.svg" />
        </div>
        <input type="text" name="search" placeholder="Search..." value="se" />
    </div>
    <div class="recent">
        <ul>
        <li>
            <img src="img/emily.webp" />
            <span class="name">Emily Selman</span>
        </li>
        <li class="hover">
            <img src="img/emma.webp" />
            <span class="name">Emma Dorsey</span>
            <img class="arrow" src="img/arrow.svg" />
        </li>
        <li>
            <img src="img/benjamin.webp" />
            <span class="name">Benjamin Russel</span>
        </li>
        <li>
            <img src="img/chelsea.webp" />
            <span class="name">Chelsea Hagon</span>
        </li>
        </ul>
    </div>
    <div class="card">
        <div class="card-head">
        <img src="img/emma.webp" />
        <h2>Emma Dorsey</h2>
        <p>Senior Front-end Developer</p>
        </div>
        <div class="card-data">
        <dl>
            <dt>Phone</dt>
            <dd>(861) 305-6606</dd>
            <dt>URL</dt>
            <dd><a href="#">https://example.com</a></dd>
            <dt>Email</dt>
            <dd><a href="#">emmadorsey@example.com</a></dd>
        </dl>
        <a class="button" href="#">Send message</a>
        </div>
    </div>
    </div>
</body>
</html>
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
* {
box-sizing: border-box;
font-family: system-ui, Arial, sans-serif;
}
html,
body {
width: 100%;
height: 100%;
}
body {
margin: 0;
background-image: url("../img/bg.webp");
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
}
.panel {
background-color: #ffffff;
width: 770px;
border-radius: 12px;
margin: 0 20px;
overflow: hidden;
display: flex;
flex-wrap: wrap;
}

.search {
width: 100%;
height: 48px;
display: flex;
border-bottom: 1px solid #f5f5f5;
}
.search-icon {
width: 36px;
display: flex;
align-items: center;
justify-content: flex-end;
}
.search-icon img {
width: 20px;
height: 20px;
}
.search input {
flex-grow: 1;
padding: 8px 16px 8px 10px;
border: none;
outline: none;
}

.recent {
width: 50%;
padding: 18px 14px;
color: #1f2937;
}
@media (max-width: 640px) {
.recent {
    width: 100%;
}
}
.recent h2 {
font-size: 12px;
font-weight: 600;
}
.recent ul {
margin: 0;
padding: 0;
list-style: none;
font-size: 14px;
}
.recent li {
margin: 0;
padding: 8px 12px;
border-radius: 6px;
display: flex;
align-items: center;
cursor: pointer;
}
.recent li.hover {
background-color: #eeeef0;
}
.recent img {
width: 24px;
height: 24px;
border-radius: 50%;
}
.recent .name {
margin-left: 12px;
flex-grow: 1;
}

.card {
width: 50%;
color: #6b7280;
}
@media (max-width: 640px) {
.card {
    display: none;
}
}
.card-head {
text-align: center;
padding: 24px;
}
.card-head img {
width: 64px;
height: 64px;
border-radius: 50%;
margin-bottom: 12px;
}
.card-head h2 {
font-size: 16px;
margin: 0;
padding: 0;
color: #383838;
}
.card-head p {
margin: 0;
padding: 0;
font-size: 14px;
}
.card-data {
font-size: 14px;
padding: 24px;
}
.card-data dl {
display: flex;
flex-wrap: wrap;
padding-bottom: 24px;
}
.card-data dt {
width: 30%;
font-weight: bold;
color: #383838;
padding: 8px 0;
}
.card-data dd {
width: 70%;
margin: 0;
padding: 8px 0;
}
.card-data a {
color: #4e46e6;
}
.card-data .button {
background-color: #5044e3;
width: 100%;
display: block;
color: #ffffff;
text-decoration: none;
border-radius: 6px;
text-align: center;
font-size: 14px;
font-weight: 500;
padding: 8px 16px;
}
```

</details>

</details>
