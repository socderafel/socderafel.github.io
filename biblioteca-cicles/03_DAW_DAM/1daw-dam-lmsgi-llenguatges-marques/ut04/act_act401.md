---
layout: default
title: "Actividad Práctica ACT401 — es 01-05 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT04"
prev_url: "./act_act400.html"
prev_label: "⬅️ ✏️ ACT400 Introducción a Javascript"
next_url: "./act_act402.html"
next_label: "✏️ ACT402 es 06-10 ➡️"
---

# Actividades 01-05

## **Actividad 01 - Mi primer programa**

> **📌 A realizar**
> 

> Para realizar la primera práctica debes crear un fichero html de nombre **prac01.html** y un fichero .js de nombre **prac01.js** en el que:

> 1. 

> muestras en la página web un mensaje (con un título): **Introducción a Javascript**.

> 1. 

> muestras un mensaje con una ventana emergente: **Hola, soy el alumno XXXXXX**.

> 1. 

> muestras otro mensaje en la página web (con un título): **¡Hasta pronto!**.

> Intenta utilizar todas las instrucciones de salida explicadas en el siguiente apartado.

> **📌 A tener en cuenta**
> 

> - Poner el mensaje emergente en una función de nombre holaTUNOMRE en el fichero prac01.js.

> - Hacer referencia desde prac01.html a la función holaTUNOMRE.

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
        <title>Practica 01</title>
        <script src="prac01.js"></script>
    </head>
    <body>
        <script>intro();</script>
        <p id="elem1">parágrafo Introducción</p>
        <script>
            document.getElementById("elem1").innerHTML = "<h1>Introduccion a JavaScript (document.getElementById)</h1>";
        </script>
        <script>holaMundo();</script>
        <script>fin();</script>
        <p id="elem2">parágrafo Despedida</p>
        <script>
            document.getElementById("elem2").innerHTML = "<h1>¡¡¡Hasta pronto!!! (document.getElementById)</h1>";
        </script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function intro(){
    document.write("<h1>Introduccion a JavaScript (document.write)</h1>");
}
function holaMundo(){
    window.alert("Hola, soy el alumno Manuel Alonso");
}
function fin(){
    document.write("<h1>¡¡¡Hasta pronto!!! (document.write)</h1>");
}
```

</details>

<details markdown="1">

<summary>💡 **Instruccions d'eixida**</summary>

### **Con la función `alert();`**

Forma parte de un objeto en javascript llamado window.

> **📌 HTML**
> 

```html
<body>
    <h1>Benvingut al tema de Javascript</h1>
    <script>
        window.alert("hola què tal?");
    </script>
    <h1>fins després!!</h1>
</body>
```

### **Las funciones para escribir dentro del fichero html**

#### **Con la función `documento.write();`**

> **📌 Importante**
> 

> Esta función SOLO RECOMENDABLE PARA REALIZAR PRUEBAS.

> **📌 HTML**
> 

```html
<body>
    <h1>Benvingut al tema de Javascript</h1>
    <script>
        document.write ("hola què tal?");
    </script>
    <h1>fins després!!</h1>
</body>
```

Podemos escribir sentencias propias del html:

> **📌 HTML**
> 

```html
documento.write("<h2>hola qué tal?</h2>");
```

> **📌 HTML**
> 

```html
<body>
    <h1>Benvingut al tema de Javascript</h1>
    <script>
        document.write ("<h2>hola què tal?</h2>");
    </script>
    <h1>fins després!!</h1>
</body>
```

#### **Con la función `documento.getElementById()` con innerHTML**

- comprobar y hacer referencia a un elemento html en el que el id es el mismo que el que nosotros ponemos entre paréntesis.

- 

cuenta con innerHTML porque sobreescribe el texto.

- 

aquí podemos escribir sentencias propias del html:

> **📌 HTML**
> 

```html
<body>
    <h1>Benvingut al tema de Javascript</h1>
    <p id="elem1">paràgraf de prova</p>
    <script>
        document.getElementById("elem1").innerHTML= "<h2>paràgraf canviat!!!!</h2>";
    </script>
    <h1>fins després!!</h1>
</body>
```

#### **Con la función `console.log();`**

Sirve para escribir en la consola del navegador. Así, podemos poner mensajes que no queremos que interfieren en el fichero html pero que, como desarrolladores, los consideramos interesantes.

> **📌 HTML**
> 

```html
<body>
    <h1>Benvingut al tema de Javascript</h1>
    <p id="elem1">paràgraf de prova</p>
    <script>
        console.log("monitorització");
    </script>
    <h1>fins després!!</h1>
</body>
```

> **📌 Importante**
> 

> Además, a estas instrucciones de salida, podemos escribir instrucciones que contengan una evaluación:

> - alert(4+5);

> - document.getElementById(“elem1”).innerHTML = 5/7;

> - console.log(3-5);

</details>

## **Actividad 02 - Instrucciones de salida**

> **📌 A realizar**
> 

> Para realizar la segunda práctica debes crear un fichero html de nombre prac02.html en el que:

> 1. 

> muestras en la página web un mensaje (con un título): Introducción a Javascript.

> 1. 

> pon un mensaje en la propia web (después del primer título) y con javascript que ponga, con la etiqueta título 3: Hola, aquí empezamos con Javascript.

> 1. 

> muestras un mensaje con una ventana emergente: Bienvenido a la segunda práctica.

> 1. 

> modifica el segundo mensaje (Hola, aquí empezamos con Javascript) con Javascript por:
Soy TUNOMBRE y estoy modificando este mensaje.

> 1. 

> Mostrar por consola tu nombre.

> 1. 

> Mostrar por consola la fecha en la que has realizado esta práctica.

> 1. 

> muestras otro mensaje en la página web (con un título): ¡Hasta pronto!.

> **📌 A tener en cuenta**
> 

> - en el paso 2 utiliza documento.write().

> - en el paso 3 utiliza alert().

> - en el paso 4 utiliza documento.getElementById() con innerHTML.

> - en el paso 5 y el paso 6 utiliza console.log().

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
        <title>Practica 02</title>
        <script src="prac02.js"></script>
    </head>
    <body>
        <h1>Introducción a Javascript</h1>
        <script>
            intro();
            alerta();
            modifica();
            consola();
        </script>
        <h1>!!!Hasta pronto!!!</h1>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function intro(){
    document.write("<h3 id=titulo>Hola, aquí empezamos con Javascript</h3>");
}

function alerta() {
    window.alert("Benvingut a la segona pràctica");
}

function modifica() {
document.getElementById("titulo").innerHTML = "Soy Manuel Alonso y estoy modificando este mensaje";
}

function consola() {
console.log("Manuel Alonso");
console.log(new Date());
}
```

</details>

<details markdown="1">

<summary>💡 **Sintaxi en javascript**</summary>

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exemple 03 - sintaxi Javascript</title>
</head>
<body>
    <h1>sintaxis Javascript</h1>
    <ul>
        <li>Valors</li>
        <ul>
            <li>Literals</li>
            <script>
                alert(3.1415);
                alert("hola");
                alert('hola altra vegada');
            </script>
            <li>Variables</li>
            <script>
                var a = 45; alert (a);
            </script>
        </ul>
        <li>Operadors</li>
        <script>
            // operador de asignación var b = 3;
            var c = a * b; alert (c);
        </script>
        <li>Expressions</li>
        <script>
            alert ("hola "+76); //este 76 se convierte en parte de la cadena
        </script>
        <li>Paraules reservades (keywords)</li>
        <li>Comentaris</li>
        <h2>Identificadors</h2>
        <ul>
            <li>Començament: lletra, $, _</li>
            <li>Seguidament: lletra, $, _, número</li>
            <li>Dos paraules: primeraSegona</li>
        </ul>
    </ul>
</body>
</html>
```

</details>

## **Instrucciones de entrada**

### **Con la `función pronta();`**

Y guardamos el resultado en una variable.

### **Con la función `confirm();`**

Podemos sacar un valor true o false.

<details markdown="1">

<summary>💡 HTML</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exemple 04 - instruccions d’entrada</title>
</head>
<body>
    <h1>sintaxis Javascript</h1>
    <script>
        //PIDE POR TECLADO Y GUARDA EN LA VARIABLE nom
        var nom = prompt("Introdueix el teu nom");
        //SACA POR VENTANA SI SE QUIERE CONTINUAR
        //EL VALOR SERÁ VERDADERO O FALSO (true - false)
        if (confirm("Desitges continuar?") alert(nom + " vol continuar.");
    </script>
</body>
</html>
```

</details>

</details>

## **Actividad 03 - Mayor de edad**

> **📌 A realizar**
> 

> Pide la edad y, si es mayor de 18 años, indica que ya puede conducir.
Para realizar la tercera práctica debes crear un fichero html de nombre prac03.html en el que:

> 1. 

> muestras en la página web un mensaje por ventana: Introduce tu edad.

> 1. 

> el resultado del mensaje anterior lo guardas en una variable cadena.

> 1. 

> compruebas si el número que se introduce es mayor de 18.

> 1. 

> si es cierto el punto anterior, muestra por el documento (recuerda: con la función documento.write()) que: puedes conducir.

> 1. ¿qué pasaría si no introducimos un número entero válido?

> **📌 A tener en cuenta**
> 

> 1. el punto 5º lo podríamos comprobar con: Number(variable)=variable

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
        <title>Practica 03 - Mayor de edad</title>
        <script src="prac03.js"></script>
    </head>
    <body>
        <p id="texto"></p>
        <script>mayorEdad()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function mayorEdad() {

edad = prompt("Introduce la edad --> ");
console.log(edad);
if (edad>=18) {
    document.getElementById("texto").innerHTML = "<h1>Eres mayor de edad</h1>"
} else if(edad<18){
    document.getElementById("texto").innerHTML = "<h1>Eres menor de edad</h1>"
}
}

/* Otras posibles soluciones.
function mayorEdad() {

edad = parseInt(prompt("Introduce la edad --> "));
console.log(edad);
if (edad>=18) {
    document.getElementById("texto").innerHTML = "<h1>Eres mayor de edad</h1>"
} else {
    document.getElementById("texto").innerHTML = "<h1>Eres menor de edad</h1>"
}
}

function mayorEdad() {
    do {
        edad = parseInt(prompt("Introduce la edad --> "));
    } while (isNaN(edad));

    if (edad>=18) {
        document.getElementById("texto").innerHTML = "<h1>Eres mayor de edad</h1>"
    } else {
        document.getElementById("texto").innerHTML = "<h1>Eres menor de edad</h1>"
    }
}
*/
```

</details>

## **Actividad 04 - Notas**

> **📌 A realizar**
> 

> Para realizar la cuarta práctica debes crear un fichero html de nombre prac04.html

> Pide una nota (número). Muestra la calificación según la nota:

> 1. 0-3: Muy deficiente

> 1. 3-5: Insuficiente

> 1. 5-6: Suficiente

> 1. 6-7: Bien

> 1. 7-9: Notable

> 1. 9-10: Excel·lent

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
        <title>Practica 04 - Notas</title>
        <script src="prac04.js"></script>
    </head>
    <body>
        <h1 id="texto"></h1>
        <script>notaExamen()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function notaExamen() {
    do {
        nota = parseInt(prompt("Introduzca la nota:"))
    } while (nota<0 || nota>10 || isNaN(nota));
    console.log(nota);

    switch (nota) {
        case 0:
        case 1:
        case 2:
            document.getElementById("texto").innerHTML = "<p>0-3: Muy deficiente</p>";
            break;
        case 3:
        case 4:
            document.getElementById("texto").innerHTML = "3-5: Insuficiente";
            break;
        case 5:
            document.getElementById("texto").innerHTML = "5-6: Suficiente";
            break;
        case 6:
            document.getElementById("texto").innerHTML = "6-7: Bien";
            break;
        case 7:
        case 8:
            document.getElementById("texto").innerHTML = "7-9: Notable";
            break;
        case 9:
        case 10:
            document.getElementById("texto").innerHTML = "9-10: Excelente";
            break;
        default:
            document.getElementById("texto").innerHTML = "No es un número o la nota es mayor de 10";
            break;
    }
}
```

</details>

## **Actividad 05 - Concatenar**

> **📌 A realizar**
> 

> Para realizar la práctica debes crear un fichero html de nombre prac05.html.

> Realiza un script que pida cadenas de texto hasta que se pulse "cancelar". Al parecer con "cancelar" deben mostrarse todas las cadenas concatenadas con un guión -.

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
        <title>Practica 05 - Concatenar</title>
        <script src="prac05.js"></script>
    </head>
    <body>
        <h1 id="texto"></h1>
        <script>concatenar()</script>
    </body>
</html>
```

</details>

<details markdown="1">

<summary>💡 JS</summary>

```html
function concatenar() {
    let concatenado = "";
    do {
        palabra = prompt("Introduzca las palabras()");
        if (palabra != null) {
            concatenado += palabra + " - ";
            console.log(palabra);
            console.log(concatenado);
        }
    } while (palabra != null);

    document.getElementById("texto").innerHTML = concatenado.substring(0,concatenado.length - 3);
}
```

</details>
