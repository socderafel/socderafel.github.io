---
layout: default
title: "Actividad Práctica ACT404 — es 16-20 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT04"
prev_url: "./act_act403.html"
prev_label: "⬅️ ✏️ ACT403 es 11-15"
next_url: "./act_act405.html"
next_label: "✏️ ACT405 es 21-25 ➡️"
---

# Actividades 16-20

## **Actividad 16**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac16.html

> Realiza un script que pida una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis.

> Ejemplo: Si escribimos el texto "Hola (que) tal" se mostrará "que". Si no existe el signo "(" mostrará una cadena vacía y si existe el signo "("pero no el signo ")" mostrará desde el primer paréntesis hasta el final.

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
        <title>Practica 16</title>
        <script src="prac16.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>parentesi()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function parentesi() {
    texto = prompt("Introduce el texto: ")

    primerParentesi = texto.indexOf("(")
    ultimoParentesi = texto.indexOf(")")

    resultado = "";

    if (primerParentesi == -1) {
        resultado = "El texto no continen paréntesis";
    }else if (primerParentesi != -1 && ultimoParentesi == -1) {
        resultado = texto.substring(primerParentesi+1, texto.lenght);
    } else if (primerParentesi != -1 && ultimoParentesi != -1) {
        resultado = texto.substring(primerParentesi+1, ultimoParentesi);
    }
    document.getElementById("texto").innerHTML = resultado;
}
```

</details>

## **Actividad 17**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac17.html
Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si teclee "hola que tal" deberá mostrar "lat euq aloh".

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
        <title>Practica 17</title>
        <script src="prac17.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>reverse()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function reverse() {
    texto = prompt("Introduce el texto: ")

    array = texto.split("");

    array.reverse();

    reverse = "";

    for (let index = 0; index < array.length; index++) {
        reverse += array[index];
    }

    document.getElementById("texto").innerHTML = reverse;
}
```

</details>

## **Actividad 18**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac18.html
Realiza un script que pida un texto e indique si es un palíndromo. Ejemplo de palíndromo: "Dábale arroz a la zorra el abad".

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
        <title>Practica 18</title>
        <script src="prac18.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>palindromo()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function palindromo() {
    texto = prompt("Introduce el texto: ")
    texto = texto.toLowerCase();
    texto = texto.replace(" ", "");
    array = texto.split("");
    array.reverse();
    reverse = "";
    for (let index = 0; index < array.length; index++) {
        reverse += array[index];
    }

    respuesta = "";

    if (texto==reverse) {
        respuesta = "Es palindromo.";
    } else {
        respuesta = "No es palindromo.";
    }

    document.getElementById("texto").innerHTML = respuesta;
}
```

</details>

## **Actividad 19**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac19.html
Realiza un script que escriba una pirámide del 1 hasta el 30 de la siguiente forma:

> - 1

> - 22

> - 333

> - 4444

> - 55555

> - 666666

> - …

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
        <title>Practica 19</title>
        <script src="prac19.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>piramide()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function piramide() {
    texto = "";

    for (let index = 1; index <= 30; index++) {
        texto+="<br>";
        texto+=String(index).repeat(index) + " ";
        texto+="</br>";
    }

    document.getElementById("texto").innerHTML = texto;
}
```

</details>

## **Actividad 20**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac20.html
Realiza un script que escriba una pirámide inversa de los números del 1 hasta el número que indique el usuario de la siguiente forma (suponiendo que indicas 30):

> - 303030303030303030303030303030303030303030303030303030303030

> - 2929292929292929292929292929292929292929292929292929292929

> - 28282828282828282828282828282828282828282828282828282828

> - …

> - 333

> - 22

> - 1

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
        <title>Practica 20</title>
        <script src="prac20.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>piramide()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function piramide() {
    texto = "";

    for (let index = 30; index >= 1; index--) {
        texto+="<br>";
        texto+=String(index).repeat(index) + " ";
        texto+="</br>";
    }

    document.getElementById("texto").innerHTML = texto;
}
```

</details>
