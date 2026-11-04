---
layout: default
title: "Actividad Práctica ACT402 — es 06-10 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT04"
prev_url: "./act_act401.html"
prev_label: "⬅️ ✏️ ACT401 es 01-05"
next_url: "./act_act403.html"
next_label: "✏️ ACT403 es 11-15 ➡️"
---

# Actividades 06-10

## **Actividad 06 - suma total**

> **📌 A realizar**
> 

> Para realizar la práctica debes crear un fichero html de nombre prac06.html

> Realiza un script que pida números hasta que se pulse "cancelar". Si no es un número tendrá que indicarse con un «alert» y seguir pidiendo. Al parecer con "cancelar" deberá indicarse la suma total de los números introducidos.

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
        <title>Practica 06 - Suma</title>
        <script src="prac06.js"></script>
    </head>
    <body>
        <h1 id="texto"></h1>
        <script>sumar()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function sumar() {
    let total = 0;

    do {
        entrada = prompt("Dame un número");

        if (isNaN(entrada)) {
            alert("No has introducido un número");
        }
        else {
            numero = parseInt(entrada);
            if (!isNaN(numero)) {
                total += numero;
            }
        }
    } while (entrada !== null)
    document.getElementById("texto").innerHTML = "Total de la suma: " + total;
}
```

</details>

## **Actividad 07 - dni y letra**

> **📌 A realizar**
> 

> Para realizar la práctica debes crear un fichero html de nombre prac07.html

> Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

> El algoritmo para calcular la letra del dni es el siguiente :

> 1. El número debe ser entre 0 y 99999999

> 1. Debemos calcular el resto de la división entera entre el número y el número 23.

> 1. Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, I, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)

> 1. Si lo introducido no es un número deberá indicarse con un alerta y volver a preguntar.

> 1. Deberá repetirse el proceso hasta que el usuario prema «cancelar».

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
        <title>Practica 07 - DNI</title>
        <script src="prac07.js"></script>
    </head>
    <body>
        <h1 id="texto"></h1>
        <script>letraDni()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function letraDni() {
    do {
        entrada = prompt("Introduce los números de tu DNI");

        if (isNaN(entrada)) {
            alert("Valor introducido invalido");
        } else {
            dni = parseInt(entrada);
            if (dni < 0 || dni > 99999999) {
                alert("El número debe estar entre 0 y 99999999.");
            } else if (!isNaN(dni)) {
                caracteres = "TRWAGMYFPDXBNJZSQVHLCKE";
                resto = parseInt(dni) % 23;
                dni += caracteres.charAt(resto);
                alert(dni);
            }
        }
    } while (entrada !== null);

    document.getElementById("texto").innerHTML = "Fín";
}
```

</details>

## **Actividad 08**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac08.html

> Realiza un script que pida por teclado 3 edades y 3 nombres e indique en la página el nombre del de mayor edad.

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
        <title>Practica 08</title>
        <script src="prac08.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>mayor()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function mayor() {
    nombreMayor = "";
    edadMayor = 0;

    for (let index = 0; index < 3; index++) {
        nombre = prompt("Introduzca el nombre de la persona "+(index+1));
        do{
            edad = parseInt(prompt("Introduzca la edad de la persona "+(index+1)));
        }while(isNaN(edad))

        if (edad>edadMayor) {
            nombreMayor = nombre;
            edadMayor = edad;
        }
    }

    document.getElementById("texto").innerHTML = nombreMayor + " " + edadMayor;
}
```

</details>

## **Actividad 09**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac09.html

> Realiza un script que genere un número aleatorio entre 1 y 99 y lo indique en la página.

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
        <title>Practica 09</title>
        <script src="prac09.js"></script>
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
    numero = Math.floor(Math.random() * 99+1);

    document.getElementById("texto").innerHTML = numero;
}
```

</details>

## **Actividad 10**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac10.html

> Genera 3 números aleatorios entre 1 y 99 pero que no se repite ninguno de ellos.

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
        <title>Practica 10</title>
        <link rel="stylesheet" href="estilos.css">
        <script src="prac10.js"></script>
    </head>
    <body>
        <table>
            <tr>
                <th>Num1</th>
                <th>Num2</th>
                <th>Num3</th>
            </tr>
            <tr>
                <td id="num1"></td>
                <td id="num2"></td>
                <td id="num3"></td>
            </tr>
        </table>
        <script>random()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function random() {
    numero1 = Math.floor(Math.random() * 99 + 1);

    do {
        numero2 = Math.floor(Math.random() * 99 + 1);
    } while (numero1 == numero2);

    do {
        numero3 = Math.floor(Math.random() * 99 + 1);
    } while (numero1 == numero3 || numero2 == numero3);

    document.getElementById("num1").innerHTML = numero1;
    document.getElementById("num2").innerHTML = numero2;
    document.getElementById("num3").innerHTML = numero3;

}
```

</details>

<details markdown="1">

<summary>💡 CSS</summary>

```html
table {
    width: 100%;
    border-collapse: collapse; /* Perquè les línies no siguin dobles */
}
th, td {
    border: 1px solid #dddddd;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #f2f2f2; /* Color gris per a les files parells */
}
th {
    background-color: #4CAF50;
    color: white;
    text-align: center;
}
td{
    text-align: right;
}
```

</details>
