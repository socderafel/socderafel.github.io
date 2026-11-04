---
layout: default
title: "Actividad Práctica ACT318 — 318 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act317.html"
prev_label: "⬅️ ✏️ ACT317 317"
next_url: "./act_act319.html"
next_label: "✏️ ACT319 319 ➡️"
---

# Actividad 318

> **📌 Entrega**
> 

> - La entrega será un **fichero ZIP** que contenga los ficheros necesarios para visualizar la página web (HTML y CSS).

> - El nombre del fichero debe ser `318.zip`.

> **📌 Se valorará**
> 

> Para la valoración de este ejercicio, se tendrán en cuenta los siguientes aspectos:

> - Utilizar la notación adecuada.

> - Definir y utilizar los elementos adecuados.

> - Usar adecuadamente las hojas de estilo.

> - Realizar una distribución coherente de los elementos y uso de formatos.

**Diseña** una **página web** que contenga un **formulario** que realice una petición de reserva de un hotel con las siguientes características:

- Un campo para introducir cada uno de los siguientes datos:

  - Nombre

  - Apellidos

  - Teléfono de contacto

  - Correo electrónico

  - Número de noches

- Tres menús desplegables para recoger la fecha de entrada (uno para el día, otro para el mes y otro para año).

- Un botón de radio para elegir el tipo de habitación: simple, doble o matrimonio.

- Un campo de selección (*checkbox*) que permita al usuario indicar si desea cama supletoria.

- Un campo de selección múltiple (*checkbox*) que permita al usuario indicar si desea desayuno, comida y/o cena.

- Una caja de texto donde se puedan dejar comentarios.

- Un botón para limpiar el formulario y otro para enviarlo.

> **📌 Propuesta**
> 

> Puedes guiarte por esta imagen:

![text alternatiu](../img/images_UP03-ACT318.webp)

> Y obtener de **aquí** las imágenes.

Aplica **estilos** al formulario.

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>202</title>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
    rel="stylesheet"
    />
</head>
<body>
    <main>
    <h1>Reserva</h1>
    <form class="formulario" action="#" method="POST">
        <fieldset class="personal">
        <legend>Datos personales</legend>
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
            <label for="apelldios">Apellidos</label>
            <input type="text" id="nombre" name="apellidos" />
        </div>
        <div>
            <label for="telefono">Teléfono de contacto</label>
            <input type="text" id="telefono" name="telefono" />
        </div>
        <div>
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" name="email" />
        </div>
        </fieldset>

        <fieldset class="reserva">
        <legend>Reserva</legend>
        <label for="">Número de noches</label>
        <input type="number" min="1" step="1" name="numero-noches" />

        <fieldset class="fecha-entrada">
            <legend>Fecha de entrada</legend>
            <label for="dia">Día</label>
            <select id="dia" name="dia">
            <option disabled selected>Día</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            </select>
            <label for="mes">Mes</label>
            <select id="mes" name="mes">
            <option disabled selected>Mes</option>
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
            </select>
            <label for="ano">Año</label>
            <select id="ano" name="ano">
            <option disabled selected>Año</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            </select>
        </fieldset>

        <fieldset class="habitacion">
            <legend>Habitación</legend>

            <div class="lista-opciones">
            <div class="opcion">
                <input type="radio" name="tipo-habitacion" id="" />
                <label for="">
                <img src="img/simple.svg" alt="" />
                <span>Simple</span>
                </label>
            </div>
            <div class="opcion">
                <input type="radio" name="tipo-habitacion" id="" />
                <label for="">
                <img src="img/simple.svg" alt="" />
                <img src="img/simple.svg" alt="" />
                <span>Doble</span>
                </label>
            </div>
            <div class="opcion">
                <input type="radio" name="tipo-habitacion" id="" />
                <label for="">
                <img src="img/matrimonio.svg" alt="" />
                <span>Matrimonio</span>
                </label>
            </div>
            </div>

            <div class="cama-supletoria">
            <input type="checkbox" name="" id="" />
            <label for="">Cama supletoria</label>
            </div>
        </fieldset>

        <fieldset class="comidas">
            <legend>Comidas</legend>

            <div class="lista-opciones">
            <div class="opcion">
                <input type="checkbox" name="" id="" />
                <label for="">
                <img src="img/desayuno.svg" alt="" />
                <span>Desayuno</span>
                </label>
            </div>
            <div class="opcion">
                <input type="checkbox" name="" id="" />
                <label for="">
                <img src="img/comida.svg" alt="" />
                <span>Comida</span>
                </label>
            </div>
            <div class="opcion">
                <input type="checkbox" name="" id="" />
                <label for="">
                <img src="img/cena.svg" alt="" />
                <span>Cena</span>
                </label>
            </div>
            </div>
        </fieldset>

        <label for="">Comentarios</label>
        <textarea
            class="comentarios"
            name=""
            id=""
            cols="30"
            rows="10"
        ></textarea>
        </fieldset>

        <input class="boton-primario" type="submit" value="Reservar" />
        <input
        class="boton-secundario"
        type="reset"
        value="Vaciar formulario"
        />
    </form>
    </main>
</body>
</html>
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
* {
font-family: "Montserrat", sans-serif;
box-sizing: border-box;
}
body {
margin: 0;
display: flex;
justify-content: center;
background-color: #b6ad90;
}
main {
flex: 0 0 640px;
}
h1 {
color: #582f0e;
font-size: 40px;
font-weight: 300;
text-align: center;
text-transform: uppercase;
letter-spacing: 26px;
padding-left: 26px;
}

.formulario {
background-color: #fefefe;
padding: 300px 20px 20px 20px;
border-radius: 4px;
background-image: url("../img/cover.webp");
background-repeat: no-repeat;
background-size: contain;
display: flex;
flex-wrap: wrap;
}
.formulario > fieldset {
border: none;
padding: 10px;
margin: 0;
}
.formulario > fieldset > legend {
display: none;
}
.boton-primario {
order: 2;
width: 300px;
font-size: 16px;
font-weight: bold;
color: #ffffff;
background-color: #7f4f24;
padding: 10px 18px;
border: none;
border-radius: 8px;
cursor: pointer;
margin-right: 10px;
}
.boton-primario:hover {
background-color: #936639;
}
.boton-secundario {
order: 1;
border: none;
background: transparent;
color: #ce4257;
cursor: pointer;
flex-grow: 1;
text-align: left;
}
.boton-secundario:hover {
text-decoration: underline;
}

.personal {
flex: 0 0 280px;
}
.personal input {
width: 100%;
padding: 6px 8px;
margin-bottom: 10px;
}
.personal label {
display: block;
font-weight: bold;
padding: 0 0 4px 0;
}

.reserva {
flex: 0 0 320px;
}
.reserva > label,
.reserva > div > label {
font-weight: bold;
padding: 0 0 4px 0;
display: block;
}
.reserva > input,
.reserva > div > input {
width: 100%;
padding: 6px 8px;
margin-bottom: 10px;
}
.reserva textarea {
width: 100%;
padding: 6px 8px;
}
.fecha-entrada {
border: none;
padding: 0;
margin: 0 0 10px 0;
display: flex;
}
.fecha-entrada legend {
font-weight: bold;
padding: 0 0 4px 0;
}
.fecha-entrada select {
padding: 6px 8px;
flex-grow: 1;
}
.fecha-entrada label {
display: none;
}
.habitacion {
border: none;
padding: 0;
margin: 0;
margin: 0 0 10px 0;
}
.habitacion legend {
font-weight: bold;
padding: 0 0 4px 0;
}
.cama-supletoria {
border: 1px solid #343a40;
padding: 10px;
border-radius: 3px;
margin: 10px 0 0 0;
}
.comidas {
border: none;
padding: 0;
margin: 0;
margin: 0 0 10px 0;
}
.comidas legend {
font-weight: bold;
padding: 0 0 4px 0;
}
#comentarios {
height: 100px;
}

.lista-opciones {
display: flex;
justify-content: space-between;
}
.opcion {
color: #212529;
font-weight: bold;
font-size: 10px;
text-transform: uppercase;
border: 1px solid #343a40;
border-radius: 3px;
padding: 10px;
flex: 0 0 30%;
display: flex;
flex-direction: column;
text-align: center;
}
.opcion img {
order: 1;
height: 20px;
}
.opcion span {
order: 2;
display: block;
}
.opcion input {
order: 3;
}
```

</details>

</details>
