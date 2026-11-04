---
layout: default
title: "Actividad Práctica ACT316 — Ejercicio 316 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act315.html"
prev_label: "⬅️ ✏️ ACT315 Ejercicio 315"
next_url: "./act_act317.html"
next_label: "✏️ ACT317 317 ➡️"
---

# Ejercicio 316

> **📌 Nota**
> 

> Este ejercicio tiene una **dificultad alta**. En él se combinan muchas de las características de CSS, aunque en la solución se tratan algunas que no se recogen en los contenidos:

> - Propiedad [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

> - Función [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

Crea una **página web** que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT316.png)

En dispositivos que tienen un ancho entre 401 y 600 píxeles, se debe ver de la siguiente forma:

En dispositivos que tienen un ancho de hasta 400 píxeles, se debe ver de la siguiente forma:

> **📌 Probar en el navegador**
> 

> [Página web](https://gtnspx.csb.app/)

Consideraciones:

- Se debe utilizar **flexbox** y **responsive design** para realizar la maquetación.

- No es necesario ser estricto **semánticamente** para estructurar el contenido.

- No se debe implementar ningún tipo de interactividad.

- Los **colores** utilizados son:

  - Fondo blanco: `#ffffff`

  - Gris de fondo: `f2f3f4`

  - Texto: `#000000`

  - Fondo de botón: `#5043e7`

- La **fuente** utilizada es [Roboto](https://fonts.google.com/specimen/Roboto) (400, 500 y 900).

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
    <title>Calendar</title>
    <link rel="stylesheet" href="estilos.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
    rel="stylesheet"
    />
</head>
<body>
    <div class="calendar">
    <header class="calendar-header">
        <h1>January 2022</h1>
        <a href="#" class="button button-primary">Add event</a>
    </header>
    <section class="month">
        <div class="month-header">
        <div class="header-day">Mon</div>
        <div class="header-day">Tue</div>
        <div class="header-day">Wed</div>
        <div class="header-day">Thu</div>
        <div class="header-day">Fri</div>
        <div class="header-day">Sat</div>
        <div class="header-day">Sun</div>
        </div>
        <div class="month-body">
        <div class="body-day previous-month">27</div>
        <div class="body-day previous-month">28</div>
        <div class="body-day previous-month">29</div>
        <div class="body-day previous-month">30</div>
        <div class="body-day previous-month">31</div>
        <div class="body-day">
            <div class="day">1</div>
        </div>
        <div class="body-day">
            <div class="day">2</div>
        </div>
        <div class="body-day">
            <div class="day">3</div>
            <ul>
            <li>Design review</li>
            <li>Sales meeting</li>
            </ul>
        </div>
        <div class="body-day">
            <div class="day">4</div>
        </div>
        <div class="body-day">
            <div class="day">5</div>
        </div>
        <div class="body-day">
            <div class="day">6</div>
        </div>
        <div class="body-day">
            <div class="day">7</div>
            <ul>
            <li>Date night</li>
            </ul>
        </div>
        <div class="body-day">
            <div class="day">8</div>
        </div>
        <div class="body-day">
            <div class="day">9</div>
        </div>
        <div class="body-day">
            <div class="day">10</div>
        </div>
        <div class="body-day">
            <div class="day">11</div>
        </div>
        <div class="body-day">
            <div class="day today">12</div>
            <ul>
            <li>Sam's birthday</li>
            </ul>
        </div>
        <div class="body-day">
            <div class="day">13</div>
        </div>
        <div class="body-day">
            <div class="day">14</div>
        </div>
        <div class="body-day">
            <div class="day">15</div>
        </div>
        <div class="body-day">
            <div class="day">16</div>
        </div>
        <div class="body-day">
            <div class="day">17</div>
        </div>
        <div class="body-day">
            <div class="day">18</div>
        </div>
        <div class="body-day">
            <div class="day">19</div>
        </div>
        <div class="body-day">
            <div class="day">20</div>
        </div>
        <div class="body-day">
            <div class="day">21</div>
        </div>
        <div class="body-day">
            <div class="day">22</div>
            <ul>
            <li>Museum</li>
            <li>Hockey game</li>
            </ul>
        </div>
        <div class="body-day">
            <div class="day">23</div>
        </div>
        <div class="body-day">
            <div class="day">24</div>
        </div>
        <div class="body-day">
            <div class="day">25</div>
        </div>
        <div class="body-day">
            <div class="day">26</div>
        </div>
        <div class="body-day">
            <div class="day">27</div>
        </div>
        <div class="body-day">
            <div class="day">28</div>
        </div>
        <div class="body-day">
            <div class="day">29</div>
        </div>
        <div class="body-day">
            <div class="day">30</div>
        </div>
        <div class="body-day">
            <div class="day">31</div>
        </div>
        <div class="body-day next-month">
            <div class="day">1</div>
        </div>
        <div class="body-day next-month">
            <div class="day">2</div>
        </div>
        <div class="body-day next-month">
            <div class="day">3</div>
        </div>
        <div class="body-day next-month">
            <div class="day">4</div>
            <ul>
            <li>Cinema with friends</li>
            </ul>
        </div>
        <div class="body-day next-month">
            <div class="day">5</div>
        </div>
        <div class="body-day next-month">
            <div class="day">6</div>
        </div>
        </div>
    </section>
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
font-family: "Roboto", sans-serif;
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
.calendar {
width: 100%;
max-width: 700px;
background-color: #e8e8e8;
margin: 0 20px;
border-radius: 10px;
overflow: hidden;
}
.calendar-header {
display: flex;
align-items: center;
padding: 16px 24px;
background-color: #f2f3f4;
}
.calendar-header h1 {
font-weight: 900;
flex: 1 0 auto;
margin: 0;
font-size: 14px;
}
.button {
background-color: #ffffff;
}
.button-primary {
background-color: #5043e7;
font-weight: 500;
color: #ffffff;
text-decoration: none;
font-size: 12px;
padding: 8px 16px;
border-radius: 4px;
}
.month {
font-size: 10px;
}
.month-header {
display: flex;
font-weight: bold;
margin: 1px 0;
}
.header-day {
flex: 1 0 14%;
text-align: center;
padding: 8px 0;
margin-right: 1px;
background-color: rgb(255, 255, 255);
}
.month-body {
display: flex;
flex-wrap: wrap;
}
.body-day {
flex: 1 0 14%;
height: 70px;
padding: 6px 10px;
margin: 0 1px 1px 0;
background-color: #ffffff;
}
.body-day ul {
padding: 2px 0 0 0;
margin: 0;
list-style: none;
}
.previous-month,
.next-month {
background-color: #f2f3f4;
}
.day {
font-size: 11px;
display: flex;
width: 20px;
height: 20px;
}
.today {
justify-content: center;
align-items: center;
background-color: #5043e7;
border-radius: 50%;
font-weight: bold;
color: #ffffff;
}
@media (min-width: 401px) and (max-width: 600px) {
.body-day ul {
    display: flex;
}
.body-day ul li {
    flex: 0 0 6px;
    width: 6px;
    height: 6px;
    margin-right: 2px;
    overflow: hidden;
    background-color: #5043e7;
    color: #5043e7;
    border-radius: 50%;
}
}
@media (max-width: 400px) {
body {
    display: block;
}
.calendar {
    margin: 0;
}
.month-header {
    display: none;
}
.body-day {
    flex: 1 0 100%;
    height: 70px;
}
.previous-month,
.next-month {
    display: none;
}
}
```

</details>

<details markdown="1">

<summary>💡 Provar en el navegador</summary>

[**navegador**](https://codesandbox.io/p/sandbox/ydc6sh)

</details>

</details>
