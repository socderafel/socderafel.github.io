---
layout: default
title: "Actividad Práctica ACT317 — 317 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT03"
prev_url: "./act_act316.html"
prev_label: "⬅️ ✏️ ACT316 Ejercicio 316"
next_url: "./act_act318.html"
next_label: "✏️ ACT318 318 ➡️"
---

# Práctica 317

> **📌 Entrega**
> 

> - La entrega será un **fichero ZIP** que contenga los ficheros necesarios para visualizar la página web (HTML, CSS e imágenes).

> - El nombre del fichero debe ser `317.zip`.

> **📌 Se valorará**
> 

> Para la valoración de este ejercicio, se tendrán en cuenta los siguientes aspectos:

> - Utilizar la notación adecuada.

> - Definir y utilizar los elementos adecuados.

> - Usar adecuadamente las hojas de estilo.

> - Realizar una distribución coherente de los elementos y uso de formatos.

**Diseña** una **página web** para la presentación de las recetas de cocina de un restaurante y aplicarlo a receta de cocina presentada a continuación. Añade algunas imágenes apropiadas.

> **📌 Propuesta**
> 

> Puedes guiarte por esta imagen:

![text alternatiu](../img/images_UP03-ACT317.png)

> Y obtener de **aquí** las imágenes.

***Sopa de cebolla (4 personas)***

Ingredientes:

- 1 kg de cebollas.

- 2 l de caldo de carne.

- 100 g mantequilla.

- 1 cucharada de harina.

- 100 g de queso emmental suizo o gruyére rallado.

- Pan tostado en rebanadas.

- Tomillo.

- 1 hoja de laurel.

- Pimienta.

Proceso:

- Pelar y partir las cebollas en rodajas finas.

- Rehogarlas con la mantequilla, sal y pimienta a fuego lento hasta que estén transparentes sin dorarse.

- Añadir la harina sin dejar de remover.

- Ponerlo en una cazuela con el caldo, el tomillo y el laurel.

- Dejar cocer a fuego lento durante unos 15 minutos.

- Poner las rebanadas de pan encima, espolvorear el queso y gratinar al horno.

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
    <title>201</title>
    <link rel="stylesheet" href="estilos.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap"
    rel="stylesheet"
    />
</head>
<body>
    <main>
    <h1>Sopa de cebolla</h1>
    <p class="comensales">4 personas</p>

    <div class="portada">
        <img src="img/onion.webp" alt="Cebollas" />
    </div>

    <div class="ingredientes">
        <h2>Ingredientes</h2>
        <ul>
        <li><span class="cantidad">1 kg</span> de cebollas.</li>
        <li><span class="cantidad">2 l</span> de caldo de carne.</li>
        <li><span class="cantidad">100 g</span> mantequilla.</li>
        <li><span class="cantidad">1 cucharada</span> de harina.</li>
        <li>
            <span class="cantidad">100 g</span> de queso emmental suizo o
            gruyére rallado.
        </li>
        <li>Pan tostado en rebanadas.</li>
        <li>Tomillo.</li>
        <li><span class="cantidad">1 hoja</span> de laurel.</li>
        <li>Pimienta.</li>
        </ul>
    </div>

    <div class="pasos">
        <h2>Proceso</h2>
        <ol>
        <li>Pelar y partir las cebollas en rodajas finas.</li>
        <li>
            Rehogarlas con la mantequilla, sal y pimienta a fuego lento hasta
            que estén transparentes sin dorarse.
        </li>
        <li>Añadir la harina sin dejar de remover.</li>
        <li>Ponerlo en una cazuela con el caldo, el tomillo y el laurel.</li>
        <li>Dejar cocer a fuego lento durante unos 15 minutos.</li>
        <li>
            Poner las rebanadas de pan encima, espolvorear el queso y gratinar
            al horno.
        </li>
        </ol>
    </div>
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
min-height: 100%;
}
body {
margin: 0;
background-image: url("img/bg.webp");
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
font-family: "Gochi Hand", cursive;
}
main {
background-color: #ebebeb;
padding: 30px 50px;
margin: 30px;
border-radius: 30px;
max-width: 600px;
display: flex;
flex-wrap: wrap;
}
h1 {
flex: 1 0 100%;
margin: 0;
text-align: center;
text-transform: uppercase;
color: #2b2b2b;
font-size: 50px;
}
.comensales {
margin: 0;
padding: 10px 0 20px 0;
font-size: 20px;
flex: 1 0 100%;
text-align: center;
color: #c55c32;
}
h2 {
text-align: center;
text-decoration: underline;
}
.portada {
flex: 0 0 100%;
overflow: hidden;
display: flex;
justify-content: center;
padding-bottom: 20px;
}
.portada img {
height: 180px;
overflow: hidden;
border-radius: 50%;
}
.ingredientes,
.pasos {
flex: 1 0 50%;
}
.cantidad {
font-weight: bold;
color: #c55c32;
}
```

</details>

</details>
