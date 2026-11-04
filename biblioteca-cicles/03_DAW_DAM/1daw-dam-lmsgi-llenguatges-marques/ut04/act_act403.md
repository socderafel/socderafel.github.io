---
layout: default
title: "Actividad Práctica ACT403 — es 11-15 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT04"
prev_url: "./act_act402.html"
prev_label: "⬅️ ✏️ ACT402 es 06-10"
next_url: "./act_act404.html"
next_label: "✏️ ACT404 es 16-20 ➡️"
---

# Actividades 11-15

## **Actividad 11**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac11.html
Realiza un script que imprimiera 14 resultados aleatorios de una quiniela 1 X 2. ejercicio de resultado:

> - Resultado 1: 1

> - Resultado 2: X

> - Resultado 3: 2

> - ...

> - Resultado 14: 2

> **📌 Solución**
> 

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practica 11</title>
        <script src="prac11.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>random()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function random() {
    texto = ""
    for (let index = 0; index < 14; index++) {
        numero = Math.floor(Math.random() * 3+1);
        if (numero == 3) {
            texto += "<br>Resultado " + (index+1) + " : X </br>";
        }else{
            texto += "<br>Resultado " + (index+1) + " : " + numero + " </br>";
        }
    }
    document.getElementById("texto").innerHTML = texto;
}

/* otra posible solución
function mostrarQuiniela() {
    const opciones = ["1", "X", "2"];
    let quiniela = [];

    for (let i = 0; i < 15; i++) {
        quiniela.push(opciones[Math.floor(Math.random() * 3)]);
    }

    document.getElementById("resultado").innerText =
        quiniela.join(" - ");
}*/
```

</details>

## **Actividad 12**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac12.html
Realiza el script anterior pero con la probabilidad de que se produzca el 1 del 60%, la de la X del 30% y la del 2 del 10%.

> **📌 Solución**
> 

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practica 12</title>
        <script src="prac12.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>random()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function random() {
    texto = ""
    for (let index = 0; index < 15; index++) {
        numero = Math.random();
            if (numero < 0.6) {
                texto += "<br>Resultado " + (index+1) + " : 1 </br>";
            }else if (numero<0.9){
                texto += "<br>Resultado " + (index+1) + " : X </br>";
            }else{
                texto += "<br>Resultado " + (index+1) + " : 2 </br>";
            }
    }
    document.getElementById("texto").innerHTML = texto;
}

/* otra posible solución
function random() {
    texto = ""
    for (let index = 0; index < 14; index++) {
        numero = Math.floor(Math.random() * 10+1);
        if (numero <= 6) {
            texto += "<br>Resultat " + (index+1) + " : 1 </br>";
        }else if (numero <=9) {
            texto += "<br>Resultat " + (index+1) + " : X </br>"
        } else if(numero ==10){
            texto += "<br>Resultat " + (index+1) + " : 2 </br>"
        }
    }
    document.getElementById("texto").innerHTML = texto;
}
*/
```

</details>

## **Actividad 13**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac13.html

> Realiza un script que pida un texto y lo muestre en la página con mayúsculas.

> **📌 Solución**
> 

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practica 13</title>
        <script src="prac13.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>mayus()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function mayus() {
    texto = prompt("Introduzca el texto");

    document.getElementById("texto").innerHTML = texto.toUpperCase();
}
```

</details>

## **Actividad 14**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac14.html

> Realiza un script que pida una cadena de texto y la muestre poniendo el signo * entre cada carácter sin utilizar el método reemplazar.
Y, además, reemplace el espacio " " también a un *.

> Por ejemplo, si teclee "hola qué tal", deberá ser 'h*o*l*a**q*u*e**t*a*l'.

> **📌 Solución**
> 

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practica 14</title>
        <script src="prac14.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>modificar()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function modificar() {
    texto = prompt("Introduzca el texto");
    array = texto.split("");
    final = "";
    for (let index = 0; index < array.length; index++) {
        if (array[index] === " ") {
            final+="*";
        } else {
            final+=array[index];
        }
        if (index < array.length-1) {
            final+="*";
        }
    }
    document.getElementById("texto").innerHTML = final;
}
```

</details>

## **Actividad 15**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac15.html

> Realiza un script que cuenta el número de vocales que tiene un texto.

> **📌 Solución**
> 

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practica 15</title>
        <script src="prac15.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>cuenta()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function cuenta() {
    const vocales = "aeiou";
    let texto = prompt("Introduce un texto");

    let contador = 0;
    for (let index = 0; index < texto.length; index++) {
        // si el carácter se encuentra en vocales aumentamos contador
        if (vocales.includes(texto[index])) {
        contador++;
        }
    }

    document.getElementById("texto").innerHTML = "El texto tiene " + contador + " vocales.";
}
```

</details>
