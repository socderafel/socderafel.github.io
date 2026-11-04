---
layout: default
title: "Actividad Práctica ACT310 — Ejercicio 310 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act309.html"
prev_label: "⬅️ ✏️ ACT309 Ejercicio 309"
next_url: "./act_act311.html"
next_label: "✏️ ACT311 Ejercicio 311 ➡️"
---

# Ejercicio 310

Crea una **página web** que tenga el mismo aspecto que la siguiente imagen:

![text alternatiu](../img/images_UP03-ACT310.png)

> **📌 Chrome**
> 

> [Página web](https://cz60q9.csb.app/)

Consideraciones:

- El tipo de letra del documento es la secuencia: `Arial, Helvetica, sans-serif`.

- El tipo de letra de la cabecera de nivel 1 es la secuencia: `Georgia, serif`.

- En el documento HTML, el texto de los elementos `<legend>` se debe escribir en minúsculas y se debe convertir a mayúsculas mediante CSS.

Además, cuando se coloca el cursor encima de un campo, se debe poner de color rojo:

Y si el elemento tiene el foco, se debe poner de color amarillo:

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
    <link rel="stylesheet" href="estilos.css" />
    <title>Formulario de registro</title>
</head>
<body>
    <header>
    <h1>Formulario de registro</h1>
    </header>

    <form action="" method="post">
    <fieldset>
        <legend>Datos personales</legend>
        <p>
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />
        </p>

        <p>
        <label for="apellidos">Apellidos</label>
        <input type="text" name="apellidos" id="apellidos" />
        </p>

        <p>
        <label for="nombre">Correo electrónico</label>
        <input type="text" name="correo" id="correo" />
        </p>

        <p>
        <label for="dia">Fecha de nacimiento</label>
        <select name="dia" id="dia">
            <option>Día</option>
        </select>

        <select name="mes" id="mes">
            <option>Mes</option>
        </select>

        <select name="ano" id="ano">
            <option>Año</option>
        </select>
        </p>
    </fieldset>

    <fieldset>
        <legend>Dirección postal</legend>
        <p>
        <label for="ciudad">Ciudad</label>
        <input type="text" name="ciudad" id="ciudad" />
        </p>

        <p>
        <label for="cp">Código postal</label>
        <input type="text" name="cp" id="cp" />
        </p>

        <p>
        <label for="pais">País</label>
        <select name="pais" id="pais">
            <option>País</option>
        </select>
        </p>
    </fieldset>

    <fieldset>
        <legend>Datos de usuario</legend>
        <p>
        <label for="user">Nombre de usuario</label>
        <input type="text" name="user" id="user" />
        </p>

        <p>
        <label for="pass">Contraseña</label>
        <input type="password" name="pass" id="pass" />
        </p>

        <p>
        <label for="pass-repeat">Vuelve a escribir la contraseña</label>
        <input type="password" name="pass-repeat" id="pass-repeat" />
        </p>
    </fieldset>

    <fieldset>
        <legend>Condiciones de registro</legend>
        <p>
        <label>Deseo recibir ofertas</label>
        <input type="radio" name="ofertas" id="ofertas1" value="1" />
        <label for="ofertas1" class="inline">Una vez al día</label>
        <input type="radio" name="ofertas" id="ofertas2" value="2" />
        <label for="ofertas2" class="inline">Una vez a la semana</label>
        <input type="radio" name="ofertas" id="ofertas3" value="3" />
        <label for="ofertas3" class="inline">Una vez al mes</label>
        </p>

        <p>
        <input type="checkbox" name="acepto" id="acepto" />
        <label for="acepto" class="inline"
            >Acepto las condiciones del servicio y la política de
            privacidad.</label
        >
        </p>
    </fieldset>

    <p class="centrado">
        <input type="submit" value="Crear cuenta" id="boton-crear" />
    </p>
    </form>
</body>
</html>
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
body {
font-family: Arial, Helvetica, sans-serif;
width: 90%;
margin: 0 auto;
}

header {
text-align: center;
}

h1 {
font-family: Georgia, serif;
font-size: 3em;
}

fieldset {
margin: 1em auto;
}

legend {
font-size: 1.2em;
font-weight: bold;
text-transform: uppercase;
}

label {
font-weight: bold;
display: block;
}

input:focus,
select:focus {
background-color: yellow;
}

input:hover,
select:hover {
background-color: red;
}

#boton-crear {
font-size: 2em;
padding: 0.5em;
}

.inline {
display: inline;
}

.centrado {
text-align: center;
}
```

</details>

</details>
