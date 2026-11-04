---
layout: default
title: "Actividad Práctica ACT314 — Ejercicio 314 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act313.html"
prev_label: "⬅️ ✏️ ACT313 Ejercicio 313"
next_url: "./act_act315.html"
next_label: "✏️ ACT315 Ejercicio 315 ➡️"
---

# Ejercicio 314

> **📌 Nota**
> 

> Este ejercicio tiene una **dificultad alta**. En él se combinan muchas de las características de CSS, aunque en la solución se tratan algunas que no se recogen en los contenidos:

> - Propiedad [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

> - Función [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

Crea una **página web** que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT314.png)

> **📌 Probar en el navegador**
> 

> [Página web](https://1dkdwy.csb.app/)

Consideraciones:

- Se debe utilizar **flexbox** para realizar la maquetación.

- No es necesario ser estricto **semánticamente** para estructurar el contenido.

- No se debe implementar ningún tipo de interactividad.

- Los **colores** utilizados son:

  - Fondo de la tarjeta: `#ffffff`

  - Bordes: `#d1d1d1`

  - Texto de los títulos: `#94a3b8`

  - Borde inferior de los títulos: `#cbd5e1`

  - Texto: `#0f172a`

  - Paleta de colores primarios: `#eff6ff`, `#dbeafe`, `#bfdbfe`, `#93c5fd`, `#60a5fa`, `#3b82f6`, `#2563eb`, `#1d4ed8`, `#1e40af`, `#1e3a8a`

  - Paleta de colores secundarios: `#f8fafc`, `#f1f5f9`, `#e2e8f0`, `#cbd5e1`, `#94a3b8`, `#64748b`, `#475569`, `#334155`, `#1e293b`, `#0f172a`

- La **fuente** utilizada es [Ubuntu](https://fonts.google.com/specimen/Ubuntu) (normal y negrita).

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
    <title>Palette</title>
    <link rel="stylesheet" href="estilos.css" />
    <link rel="stylesheet" href="bg-primary.css" />
    <link rel="stylesheet" href="bg-secondary.css" />
    <link rel="stylesheet" href="estilos.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
</head>
<body>
    <div class="palette">
    <div class="font-info">
        <div class="font-card">
        <div class="font-card-title">
            <h2>font-display</h2>
            <p>Inter</p>
        </div>
        <p class="font-display-sample">AaBbCc</p>
        </div>
        <div class="font-card">
        <div class="font-card-title">
            <h2>font-body</h2>
            <p>14 pt</p>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
            nulla porttitor massa id neque aliquam vestibulum.
        </p>
        </div>
    </div>
    <div class="bg-info">
        <div class="bg-card">
        <div class="bg-card-title">
            <h2>bg-primary</h2>
            <p>50-900</p>
        </div>
        <ul class="bg-card-palette">
            <li class="primary-1"></li>
            <li class="primary-2"></li>
            <li class="primary-3"></li>
            <li class="primary-4"></li>
            <li class="primary-5"></li>
            <li class="primary-6"></li>
            <li class="primary-7"></li>
            <li class="primary-8"></li>
            <li class="primary-9"></li>
            <li class="primary-10"></li>
        </ul>
        </div>
        <div class="bg-card">
        <div class="bg-card-title">
            <h2>bg-secondary</h2>
            <p>50-900</p>
        </div>
        <ul class="bg-card-palette">
            <li class="secondary-1"></li>
            <li class="secondary-2"></li>
            <li class="secondary-3"></li>
            <li class="secondary-4"></li>
            <li class="secondary-5"></li>
            <li class="secondary-6"></li>
            <li class="secondary-7"></li>
            <li class="secondary-8"></li>
            <li class="secondary-9"></li>
            <li class="secondary-10"></li>
        </ul>
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
font-family: "Ubuntu", sans-serif;
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
.palette {
background-color: #ffffff;
width: 600px;
display: flex;
border: 1px solid #d1d1d1;
border-radius: 10px;
overflow: hidden;
padding: 30px 20px;
}
.font-info {
flex-grow: 1;
padding: 0 20px;
height: 270px;
display: flex;
flex-direction: column;
justify-content: space-between;
}
.bg-info {
flex: 1 0 250px;
padding: 0 20px;
height: 270px;
display: flex;
flex-direction: column;
justify-content: space-between;
}
.font-card-title {
border-bottom: 1px solid #cbd5e1;
display: flex;
justify-content: space-between;
margin-bottom: 16px;
}
h2,
p {
margin: 0;
color: #0f172a;
}
.font-card-title h2,
.font-card-title p,
.bg-card-title h2,
.bg-card-title p {
font-family: "Source Code Pro", monospace;
padding-bottom: 8px;
font-size: 12px;
color: #94a3b8;
font-weight: normal;
}
.font-display-sample {
font-size: 40px;
font-weight: bold;
margin: 0;
}
.bg-card {
border: 1px solid #d1d1d1;
border-radius: 6px;
padding: 10px;
}
.bg-card-title {
display: flex;
justify-content: space-between;
padding-bottom: 4px;
}
.bg-card-palette {
margin: 0;
padding: 0;
height: 78px;
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}
.bg-card-palette li {
width: 32px;
height: 32px;
border: 1px solid #d1d1d1;
border-radius: 4px;
}
```

</details>

</details>
