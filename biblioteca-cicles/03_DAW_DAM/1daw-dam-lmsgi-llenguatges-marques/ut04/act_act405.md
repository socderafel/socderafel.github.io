---
layout: default
title: "Actividad Práctica ACT405 — es 21-25 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT04"
prev_url: "./act_act404.html"
prev_label: "⬅️ ✏️ ACT404 es 16-20"
next_url: "./act_act406.html"
next_label: "✏️ ACT406 Ejercicios de Arrays y Array Functions en JavaScript ➡️"
---

# Actividades 21-25

## **Actividad 21**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac21.html
Realiza un script para generar una pirámide con los números del 1 hasta el número que indicas (no mayor de 50):

> - 1

> - 12

> - 123

> - 1234

> - 12345

> - 123456

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
        <title>Practica 21</title>
        <script src="prac21.js"></script>
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
    do {
        numero = parseInt(prompt("Introduzca un numero entre 1 y 50: "));
    } while (numero<=0 || numero>50);

    for (let index = 1; index <= numero; index++) {
        texto+="<br>";
        for (let j=1;j<=index;j++){
            texto+=j + " ";
        }
        texto+="</br>";
    }

    document.getElementById("texto").innerHTML = texto;
}
```

</details>

## **Actividad 22**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac22.html
Realiza un script que escriba los números del 1 hasta el 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas se muestre una línea horizontal.
Por ejemplo:

> - 1

> - 2

> - 3

> - 4 (Múltiplo de 4)

> - 5

> - ————————————————————-

> - 6

> - 7

> - 8 (Múltiplo de 4)

> - 9 (Múltiplo de 9)

> - 10

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
        <title>Practica 22</title>
        <script src="prac22.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>multiplo()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function multiplo() {
    texto = "";

    for (let index = 1; index <= 500; index++) {
        texto+="<br>";
        texto+=String(index);
        if(index%4==0){
            texto+=" (Múltiplo de 4)";
        }
        if(index%9==0){
            texto+=" (Múltiplo de 9)";
        }
        texto+="</br>";
        if (index%5==0) {
            texto+="<hr>";
        }
    }

    document.getElementById("texto").innerHTML = texto;
}
```

</details>

## **Actividad 23**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac23.html
Realiza un script que pida un número de filas y un número de columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo con orden descendente.
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 hasta el 1.

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
        <title>Practica 23</title>
        <script src="prac23.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>tabla()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function tabla() {
    numFilas = parseInt(prompt("Introduzca el numero de filas: "));

    numColumnas = parseInt(prompt("Introduzca el numero de columnas: "));

    texto = "<table>";

    contador = 1;

    for (i = 1; i <= numFilas; i++) {
        texto += "<tr>";
        for (j = 1; j <= numColumnas; j++) {
            texto+= "<td>" + contador + "</td>";
            contador++;
        }
        texto +="</tr>"
    }

    texto += "</table>"

    document.getElementById("texto").innerHTML = texto;
}
```

</details>

## **Actividad 24**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac24.html
Realiza un script que pida el nombre y apellidos del usuario y que muestre por página un correo electrónico con esta nomenclatura:

> - primeralletradelnom.primercognomsegoncognom@prova.es

> Por ejemplo: si el nombre es Carmen y los apellidos Martínez Sala el correo electrónico será
c.martinezsala@prova.es
Con cuidado cuando se ponen mayúsculas y minúsculas y los acentos.

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
        <title>Practica 24</title>
        <script src="prac24.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>mail()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function mail() {
    nombre = prompt("Introduzca su nombre: ").toLowerCase().charAt(0);

    apellidos = prompt("Introduzca sus apellidos: ").toLowerCase().replace(" ", "");

    texto = nombre + "." + apellidos + "@prova.es";

    texto = texto.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize();

    document.getElementById("texto").innerHTML = texto;
}
```

</details>

## **Actividad 25**

> **📌 A realizar**
> 

> Debes crear un fichero html de nombre prac25.html
Realiza un script que rellene un array de 10 números aleatorios que estén entre un número mínimo y un número máximo (que tendrás que pedir por pantalla). Muéstralo por la consola.
También, después, que pida por pantalla tres números y los inserte en la cuarta posición (¡recuerda que los arrays empiezan por cero!). Muestra este nuevo array por consola.

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
        <title>Practica 25</title>
        <script src="prac25.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>ejerArray()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function ejerArray() {
    numMin = parseInt(prompt("Introduzca el numero minimo: "));

    numMax = parseInt(prompt("Introduzca el numero maximo: "));

    v = [];

    for (let index = 0; index < 5; index++) {
        v.push(Math.floor((Math.random()*((numMax+1)-numMin))+numMin));
    }

    console.table(v);

    for (let index = 1; index <= 3; index++) {
        aux = [];
        num = parseInt(prompt("Introduzca el numero " + index + ": "));
        aux = aux.concat(v.splice(3, v.length-3));
        v.push(num);
        v = v.concat(aux);
    }

    console.table(v);
}
```

</details>
