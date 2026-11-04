---
layout: default
title: "Actividad Práctica ACT313 — Ejercicio 313 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act312.html"
prev_label: "⬅️ ✏️ ACT312 Ejercicio 312"
next_url: "./act_act314.html"
next_label: "✏️ ACT314 Ejercicio 314 ➡️"
---

# Ejercicio 313

> **📌 Nota**
> 

> Este ejercicio tiene una **dificultad alta**. En él se combinan muchas de las características de CSS, aunque en la solución se tratan algunas que no se recogen en los contenidos:

> - Propiedad [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

> - Función [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

Crea una **página web** que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT313.png)

> **📌 Probar en el navegador**
> 

> [Página web](https://wmoj8f.csb.app/)

Consideraciones:

- Se debe utilizar **flexbox** para realizar la maquetación.

- No es necesario ser estricto **semánticamente** para estructurar el contenido.

- No se debe implementar ningún tipo de interactividad.

- Son necesarias **dos imágenes** para la elaboración del proyecto.

- Los **colores** utilizados son:

  - Negro: `#000000`

  - Gris (texto): `#ffffff`

  - Gris (bordes): `rgb(211, 214, 221)`

  - Blanco: `rgb(107, 114, 128)`

- La **fuente** utilizada es [Montserrat](https://fonts.google.com/specimen/Montserrat) (normal y negrita).

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
    <title>Card</title>
    <link rel="stylesheet" href="estilos.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
    rel="stylesheet"
    />
</head>
<body>
    <div class="card">
    <div class="card-image">

        <img src="img/classic-utility-jacket.webp" alt="Classic Utility Jacket" />

    </div>
    <div class="card-info">
        <div class="header">
        <div class="title">
            <h1>Classic Utility Jacket</h1>
        </div>
        <div class="price">
            $110.00
        </div>
        </div>
        <div class="stock">In stock</div>
        <div class="sizes">
        <ul>
            <li class="selected">XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
        </ul>
        </div>
        <div class="order">
        <a href="#" class="primary">Buy now</a>
        <a href="#">Add to bag</a>
        <a href="#" class="right"><img src="img/like.svg" alt="Like" /></a>
        </div>
        <div class="shipping">
        Free shipping on all continental US orders.
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
}
html,
body {
width: 100%;
height: 100%;
}
body {
margin: 0;
font-family: "Montserrat", sans-serif;
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
.card {
background-color: #ffffff;
width: 600px;
height: 300px;
display: flex;
border-radius: 10px;
overflow: hidden;
}
.card-image {
width: 200px;
background-image: url("./img/classic-utility-jacket.webp");
background-position: center;
background-size: cover;
}
.card-info {
flex: 1 0 400px;
padding: 0 20px;
}
.card-info .header {
height: 50px;
font-weight: 700;
display: flex;
justify-content: space-between;
align-items: flex-end;
}
.card-info .price {
color: rgb(107, 114, 128);
}
.card-info h1 {
font-size: 18px;
margin: 0;
}
.card-info .stock {
padding: 10px 0 20px 0;
font-size: 12px;
font-weight: 700;
color: rgb(107, 114, 128);
}
.card-info .sizes {
padding-bottom: 20px;
}
.card-info .sizes ul {
margin: 0;
padding: 0;
list-style: none;
display: flex;
}
.card-info .sizes ul li {
font-size: 12px;
padding: 8px;
border-radius: 8px;
margin-right: 14px;
}
.card-info .sizes ul li.selected {
background-color: #000000;
color: #ffffff;
font-weight: bold;
}
.card-info .order {
display: flex;
border-top: 1px solid rgb(211, 214, 221);
padding: 20px 0;
}
.card-info .order a {
font-size: 13px;
border: 1px solid rgb(211, 214, 221);
border-radius: 8px;
padding: 10px 16px;
margin-right: 14px;
text-decoration: none;
font-weight: bold;
color: #000000;
}
.card-info .order a.primary {
background-color: #000000;
color: #ffffff;
}
.card-info .order a.right {
margin: 0 0 0 auto;
padding: 0 10px;
display: flex;
justify-content: center;
align-items: center;
}
.card-info .shipping {
font-size: 13px;
color: rgb(107, 114, 128);
}
```

</details>

</details>
