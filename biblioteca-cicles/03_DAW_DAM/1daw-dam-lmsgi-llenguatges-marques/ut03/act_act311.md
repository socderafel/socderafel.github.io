---
layout: default
title: "Actividad Práctica ACT311 — Ejercicio 311 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act310.html"
prev_label: "⬅️ ✏️ ACT310 Ejercicio 310"
next_url: "./act_act312.html"
next_label: "✏️ ACT312 Ejercicio 312 ➡️"
---

# Ejercicio 311

Crea una **página web** que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT311.png)

> **📌 Probar en el navegador**
> 

> [Página web](https://1swspb.csb.app/)

Consideraciones:

- Cuando se tiene el foco en algún campo del formulario, se debe mostrar un borde negro.

- Debemos utilizar el elemento `<fieldset>` para agrupar campos de formulario. En total debemos tener cuatro:

  - *Nombre y apellidos*

  - *Dirección*

  - *Email*

  - *Teléfono*

- Cuando se pasa el cursor por encima de algunha de las cuatro secciones en las cuales se divide el formulario, el fondo se debe volver amarillo.

<details markdown="1">

<summary>💡 Solució</summary>

<details markdown="1">

<summary>💡 HTML</summary>

ç

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario de registro</title>
    <link rel="stylesheet" href="estilos.css" />
</head>
<body>
    <div id="contenedor">
    <h1>Formulario de registro</h1>

    <form method="post" action="#">
        <fieldset>
        <legend>Nombre y apellidos</legend>

        <div class="inputs">
            <div class="w100">
            <input id="nombre" name="nombre" value="" />
            <label for="nombre">Nombre</label>
            </div>

            <div class="w100">
            <input id="apellido1" name="apellido1" value="" />
            <label for="apellido1">Primer apellido</label>
            </div>

            <div class="w100">
            <input id="apellido2" name="apellido2" value="" />
            <label for="apellido2">Segundo apellido</label>
            </div>
        </div>
        </fieldset>

        <fieldset>
        <legend>Dirección</legend>

        <div class="inputs">
            <div class="w100">
            <input id="direccion" name="direccion" value="" />
            <label for="direccion">Calle, número, piso, puerta</label>
            </div>

            <div class="w50">
            <input id="codigopostal" name="codigopostal" value="" />
            <label for="codigopostal">Código postal</label>
            </div>

            <div class="w50">
            <input id="municipio" name="municipio" value="" />
            <label for="municipio">Municipio</label>
            </div>

            <div class="w50">
            <select id="provincia" name="provincia">
                <option value=""></option>
                <option value="co">A Coruña</option>
                <option value="lu">Lugo</option>
                <option value="ou">Ourense</option>
                <option value="po">Pontevedra</option>
            </select>
            <label for="provincia">Provincia</label>
            </div>

            <div class="w50">
            <select id="pais" name="pais">
                <option value=""></option>
                <option value="es">España</option>
                <option value="pt">Portugal</option>
                <option value="fr">Francia</option>
            </select>
            <label for="pais">País</label>
            </div>
        </div>
        </fieldset>

        <fieldset>
        <legend>Email</legend>
        <div class="inputs">
            <div class="w100">
            <input id="email" name="email" value="" />
            </div>
        </div>
        </fieldset>

        <fieldset>
        <legend>Teléfono</legend>

        <div class="inputs">
            <div class="w50">
            <input id="telefonofijo" name="telefonofijo" value="" />
            <label for="telefonofijo">Fijo</label>
            </div>

            <div class="w50">
            <input id="telefonomovil" name="telefonomovil" value="" />
            <label for="telefonomovil">Móvil</label>
            </div>
        </div>
        </fieldset>

        <div class="envio">
        <input id="alta" type="submit" value="Registrarse" />
        </div>
    </form>
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

body {
font-size: 14px;
font-family: Arial, sans-serif;
background: #aaa;
padding: 2em 1em;
}

#contenedor {
background: #fff;
padding: 1em;
width: 100%;
}

fieldset {
border: 0;
margin: 1em 0;
display: flex;
padding: 2em;
}

fieldset:hover {
background-color: #ff9;
}

legend {
font-weight: bold;
width: 180px;
float: left;
text-align: right;
padding-right: 10px;
}

fieldset input,
fieldset select {
border: 2px solid transparent;
border-bottom: 2px solid black;
}

label {
display: block;
font-size: 12px;
color: #333;
margin-bottom: 1em;
}

.inputs {
width: 100%;
display: flex;
flex-wrap: wrap;
}

.w100 {
width: 100%;
}

.w50 {
width: 50%;
}

input#apellido1,
input#apellido2,
input#direccion,
input#email {
width: 260px;
}

input#codigopostal {
width: 80px;
}

select#provincia {
width: 90px;
}

select#pais {
width: 150px;
}

input#telefonofijo,
input#telefonomovil {
width: 135px;
}

.envio {
text-align: right;
}

#alta {
font-size: 18px;
}
```

</details>

</details>
