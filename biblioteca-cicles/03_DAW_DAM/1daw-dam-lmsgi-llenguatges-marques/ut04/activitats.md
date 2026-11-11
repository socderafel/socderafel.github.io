---
layout: default
title: "Cuaderno Completo de Actividades — UD4 — Lenguajes de Marcas i Sistemes de Gestió d'Informació"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UD4"
prev_url: "act406.html"
prev_label: "⬅️ ⚡ Activitat 406: 1. Creació d'arrays i"
next_url: "../ut05/index.html"
next_label: "Següent Unitat (UD5) ➡️"
---

# Cuaderno Práctico de Actividades — UD4: Programació amb JavaScript — Sintaxi, Arrays, Funcions i Objectes

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progreso de esta sección:</strong> <span class="tracker-count">0 de 4 superados (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 puntos</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

En esta sección tienes acceso directo a todas las actividades prácticas, fichas de trabajo y retos evaluables de esta unidad didáctica. Puedes acceder a cada actividad individualmente o consultar la recopilación completa a continuación:

## 🗂️ Índice de Actividades de la Unidad

- **[⚡ Activitat 400: Instruccions](act400.html)**
- **[⚡ Activitat 401: Activitat 01 - El meu primer programa](act401.html)**
- **[⚡ Activitat 402: Activitat 06 - suma total](act402.html)**
- **[⚡ Activitat 403: Activitat 11](act403.html)**
- **[⚡ Activitat 404: Activitat 16](act404.html)**
- **[⚡ Activitat 405: Activitat 21](act405.html)**
- **[⚡ Activitat 406: 1. Creació d'arrays i accés a elements](act406.html)**

---

## Actividad 400: Instruccions

👉 *[Obrir aquesta activitat en pàgina individual](act400.html)*

# **Introducció a Javascript**

## **Instruccions**

Tenim 3 formes d'introduir codi javascript en la meua pàgina web.

### **Dins de l'etiqueta head**

> **📌 HTML**
> 

```html
<head>
<!-- ... -->
    <script>
        function holaMundo(){
            alert("Hola mundo");
        }
        holaMundo();
    </script>
</head>
```

### **Dins de l'etiqueta body**

Podem veure que el codi s'executa de forma seqüencial.

> **📌 HTML**
> 

```html
<body>
    <h1>Benvingut al tema de Javascript</h1>
    <script>
        function holaMundo(){
            alert("Hola mundo");
        }
        holaMundo();
    </script>
    <h1>fins després!!</h1>
</body>
```

### **Dins d'un fichero_externo.js i fent referència a ell en el fitxer .html**

**Recomanable aquesta opció perquè**:

- Separamos, d'una banda, el codi html i, d'altra banda, el codi javascript; fa més fàcil llegir i mantindre.

- Si el nostre navegador emmagatzema els fitxers javascript en caché no serà necessari que torne a buscar-los en el servidor web perquè ja els té en local.

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Primer programa Java Script</title>
        <script src="prac01.js"></script>
    </head>
    <body>
        <script>intro();</script>
        <script>holaMundo();</script>
        <script>fin();</script>
    </body>
</html>
```

---

## Actividad 401: Activitat 01 - El meu primer programa

👉 *[Obrir aquesta activitat en pàgina individual](act401.html)*

# Activitats 01-05

## **Activitat 01 - El meu primer programa**

> **📌 A realitzar**
> 

> Per a realitzar la primera pràctica has de crear un fitxer html de nom **prac01.html** i un fitxer .js de nom **prac01.js** en el que:

> 1. 

> mostres en la pàgina web un missatge (amb un títol): **Introducció a Javascript**.

> 1. 

> mostres un missatge amb una finestra emergente: **Hola, sóc l'alumne XXXXXX**.

> 1. 

> mostres un altre missatge en la pàgina web (amb un títol): **Fins a pronto!**.

> Intenta utilitzar totes les instruccions d'eixida explicades en el següent apartat.

> **📌 A tindre en compte**
> 

> - Posar el missatge emergente en una funció de nom holaTUNOMRE en el fitxer prac01.js.

> - Fer referència des de prac01.html a la funció holaTUNOMRE.

> **📌 Solució**
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

### **Amb la funció `alert();`**

Forma part d'un objecte en javascript anomenat window.

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

### **Les funcions per a escriure dins del fitxer html**

#### **Amb la funció `documento.write();`**

> **📌 Important**
> 

> Aquesta funció NOMÉS RECOMANABLE PER A REALITZAR PRUEBAS.

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

Podem escriure sentències pròpies de l'html:

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

#### **Amb la funció `documento.getElementById()` amb innerHTML**

- comprovar i fer referència a un element html en el que l'id és el mateix que el que nosaltres posem entre parèntesis.

- 

compta amb innerHTML perquè sobreescribe el text.

- 

ací podem escriure sentències pròpies de l'html:

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

#### **Amb la funció `console.log();`**

Serveix per a escriure en la consola del navegador. Així, podem posar missatges que no volem que interfieren en el fitxer html però que, com desenvolupadors, els considerem interesantes.

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

> **📌 Important**
> 

> A més, a aquestes instruccions d'eixida, podem escriure instruccions que continguen una avaluació:

> - alert(4+5);

> - document.getElementById(“elem1”).innerHTML = 5/7;

> - console.log(3-5);

</details>

## **Activitat 02 - Instruccions d'eixida**

> **📌 A realitzar**
> 

> Per a realitzar la segona pràctica has de crear un fitxer html de nom prac02.html en el que:

> 1. 

> mostres en la pàgina web un missatge (amb un títol): Introducció a Javascript.

> 1. 

> posa un missatge en la pròpia web (després del primer títol) i amb javascript que ponga, amb l'etiqueta títol 3: Hola, ací comencem amb Javascript.

> 1. 

> mostres un missatge amb una finestra emergente: Bienvenido a la segona pràctica.

> 1. 

> modifica el segon missatge (Hola, ací comencem amb Javascript) amb Javascript per:
Sóc TUNOMBRE i estic modificant aquest missatge.

> 1. 

> Mostrar per consola el teu nom.

> 1. 

> Mostrar per consola la data en la que has realitzat aquesta pràctica.

> 1. 

> mostres un altre missatge en la pàgina web (amb un títol): Fins a pronto!.

> **📌 A tindre en compte**
> 

> - en el pas 2 utilitza document.write().

> - en el pas 3 utilitza alert().

> - en el pas 4 utilitza document.getElementById() amb innerHTML.

> - en el pas 5 i el pas 6 utilitza console.log().

> **📌 Solució**
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

## **Instruccions d'entrada**

### **Amb la `función pronta();`**

I guardamos el resultat en una variable.

### **Amb la funció `confirm();`**

Podem traure un valor true o false.

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

## **Activitat 03 - Major d'edat**

> **📌 A realitzar**
> 

> Demana l'edat i, si és major de 18 anys, indica que ja pot conducir.
Per a realitzar la tercera pràctica has de crear un fitxer html de nom prac03.html en el que:

> 1. 

> mostres en la pàgina web un missatge per finestra: Introdueix la teua edat.

> 1. 

> el resultat del missatge anterior el guardas en una variable cadena.

> 1. 

> compruebas si el número que es introdueix és major de 18.

> 1. 

> si és cert el punt anterior, mostra pel document (recorda: amb la funció document.write()) que: pots conducir.

> 1. què pasaría si no introducimos un número enter vàlid?

> **📌 A tindre en compte**
> 

> 1. el punt 5º el podríem comprovar amb: Number(variable)=variable

> **📌 Solució**
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

## **Activitat 04 - Notes**

> **📌 A realitzar**
> 

> Per a realitzar la quarta pràctica has de crear un fitxer html de nom prac04.html

> Demana una nota (número). Mostra la qualificació segons la nota:

> 1. 0-3: Molt deficiente

> 1. 3-5: Insuficiente

> 1. 5-6: Suficient

> 1. 6-7: Bé

> 1. 7-9: Notable

> 1. 9-10: Excel·lent

> **📌 Solució**
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

## **Activitat 05 - Concatenar**

> **📌 A realitzar**
> 

> Per a realitzar la pràctica has de crear un fitxer html de nom prac05.html.

> Realitza un script que demane cadenes de text fins a que es pulse "cancelar". Al semblar amb "cancelar" han de mostrar-se totes les cadenes concatenades amb un guió -.

> **📌 Solució**
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

---

## Actividad 402: Activitat 06 - suma total

👉 *[Obrir aquesta activitat en pàgina individual](act402.html)*

# Activitats 06-10

## **Activitat 06 - suma total**

> **📌 A realitzar**
> 

> Per a realitzar la pràctica has de crear un fitxer html de nom prac06.html

> Realitza un script que demane números fins a que es pulse "cancelar". Si no és un número haurà d'indicar-se amb un «alert» i seguir pident. Al semblar amb "cancelar" haurà d'indicar-se la suma total dels números introduïts.

> **📌 Solució**
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

## **Activitat 07 - dni i lletra**

> **📌 A realitzar**
> 

> Per a realitzar la pràctica has de crear un fitxer html de nom prac07.html

> Realitzar una pàgina amb un script que calcule el valor de la lletra d'un número de DNI (Document nacional d'identitat).

> L'algoritmo per a calcular la lletra del dni és el següent :

> 1. El número ha de ser entre 0 i 99999999

> 1. Hem de calcular el resta de la divisió entera entre el número i el número 23.

> 1. Segons el resultat, de 0 a 22, li corresponderá una lletra de les següents: (T, R, W, A, G, M, I, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)

> 1. Si l'introduït no és un número haurà d'indicar-se amb un alerta i tornar a preguntar.

> 1. Haurà de repetir-se el procés fins a que l'usuari prema «cancelar».

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac08.html

> Realitza un script que demane per teclat 3 edades i 3 noms i indique en la pàgina el nom del de major edat.

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac09.html

> Realitza un script que genere un número aleatorio entre 1 i 99 i l'indique en la pàgina.

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac10.html

> Genera 3 números aleatorios entre 1 i 99 però que no es repeteix cap d'ells.

> **📌 Solució**
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

---

## Actividad 403: Activitat 11

👉 *[Obrir aquesta activitat en pàgina individual](act403.html)*

# Activitats 11-15

## **Actividad 11**

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac11.html
Realitza un script que imprimiera 14 resultats aleatorios d'una quiniela 1 X 2. exercici de resultat:

> - Resultat 1: 1

> - Resultat 2: X

> - Resultat 3: 2

> - ...

> - Resultat 14: 2

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac12.html
Realitza el script anterior però amb la probabilitat de que es produïsca el 1 del 60%, la de la X del 30% i la del 2 del 10%.

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac13.html

> Realitza un script que demane un text i el mostre en la pàgina amb majúscules.

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac14.html

> Realitza un script que demane una cadena de text i la mostre posant el signe * entre cada caràcter sense utilitzar el mètode reemplaçar.
I, a més, reemplace l'espai " " també a un *.

> Per exemple, si teclee "hola què tal", haurà de ser 'h*o*l*a**q*u*e**t*a*l'.

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac15.html

> Realitza un script que compta el número de vocals que té un text.

> **📌 Solució**
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

---

## Actividad 404: Activitat 16

👉 *[Obrir aquesta activitat en pàgina individual](act404.html)*

# Activitats 16-20

## **Actividad 16**

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac16.html

> Realitza un script que demane una cadena de text que sabem que pot contindre parèntesis. Realitza un script que extraiga la cadena que es troba entre els parèntesis.

> Exemple: Si escrivim el text "Hola (que) tal" es mostrarà "que". Si no existeix el signe "(" mostrarà una cadena buida i si existeix el signe "("però no el signe ")" mostrarà des del primer parèntesis fins al final.

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac17.html
Realitza un script que demane una cadena de text i la retorne al revés. És a dir, si teclee "hola que tal" haurà de mostrar "lat euq aloh".

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac18.html
Realitza un script que demane un text i indique si és un palíndromo. Exemple de palíndromo: "Dábale arroz a la zorra l'abad".

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac19.html
Realitza un script que escriga una piràmide del 1 fins al 30 de la següent forma:

> - 1

> - 22

> - 333

> - 4444

> - 55555

> - 666666

> - …

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac20.html
Realitza un script que escriga una piràmide inversa dels números del 1 fins al número que indique l'usuari de la següent forma (suponent que indiques 30):

> - 303030303030303030303030303030303030303030303030303030303030

> - 2929292929292929292929292929292929292929292929292929292929

> - 28282828282828282828282828282828282828282828282828282828

> - …

> - 333

> - 22

> - 1

> **📌 Solució**
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

---

## Actividad 405: Activitat 21

👉 *[Obrir aquesta activitat en pàgina individual](act405.html)*

# Activitats 21-25

## **Actividad 21**

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac21.html
Realitza un script per a generar una piràmide amb els números del 1 fins al número que indiques (no major de 50):

> - 1

> - 12

> - 123

> - 1234

> - 12345

> - 123456

> - …

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac22.html
Realitza un script que escriga els números del 1 fins al 500, que indique quins són múltiplos de 4 i de 9 i que cada 5 línies es mostre una línia horitzontal.
Per exemple:

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

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac23.html
Realitza un script que demane un número de files i un número de columnes i escriga una taula. Dins de cada una de les cel·les haurà d'escriure's un número consecutivo amb ordre descendent.
Si, per exemple, la taula és de 7×5 els números aniran del 35 fins al 1.

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac24.html
Realitza un script que demane el nom i cognoms de l'usuari i que mostre per pàgina un correu electrònic amb aquesta nomenclatura:

> - primeralletradelnom.primercognomsegoncognom@prova.és

> Per exemple: si el nom és Carmen i els cognoms Martínez Sala el correu electrònic serà
c.martinezsala@prova.és
Amb cura quan es posen majúscules i minúscules i els acentos.

> **📌 Solució**
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

> **📌 A realitzar**
> 

> Has de crear un fitxer html de nom prac25.html
Realitza un script que rellene un array de 10 números aleatorios que estiguen entre un número mínim i un número màxim (que hauràs de demanar per pantalla). Muéstralo per la consola.
També, després, que demane per pantalla tres números i els inserte en la quarta posició (recorda que els arrays comencen per zero!). Mostra aquest nou array per consola.

> **📌 Solució**
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

---

## Actividad 406: 1. Creació d'arrays i accés a elements

👉 *[Obrir aquesta activitat en pàgina individual](act406.html)*

# **Exercicis de Arrays i Array Functions en JavaScript**

## **1. Creació d'arrays i accés a elements**

### **Ejercicio 1**

> **📌 Enunciat**
> 

> Crea un array anomenat frutas amb aquests elements:

> - `"manzana"`

> - `"pera"`

> - `"plátano"`

> - `"naranja"`

> Després:

> 1. Mostra l'array complet.

> 1. Mostra quants elements té.

> 1. Mostra el primer element.

> 1. Mostra l'últim element usant la seua posició.

> 1. Intenta mostrar una posició que no existisca.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const frutas = [“manzana”, “pera”, “plátano”, “naranja”];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[frutas.length - 1]);
console.log(frutas[10]);
```

</details>

### **Ejercicio 2**

> **📌 Enunciat**
> 

> Crea un array buit anomenat números.

> 1. Afegeix manualment els valors `10`, `20` i `30` usant l'operador `[]`.

> 1. Mostra el resultat final.

> 1. Canvia el valor de la posició 1 per `99`.

> 1. Mostra l'array actualitzat.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [];

numeros[0] = 10;
numeros[1] = 20;
numeros[2] = 30;

console.log(numeros);

numeros[1] = 99;
console.log(numeros);
```

</details>

### **Ejercicio 3**

> **📌 Enunciat**
> 

> Crea aquests arrays:

```html
const a = new Array(3);
const b = [3];
```

1. Mostra tots dos arrays.

1. Indica quants elements té cada un.

1. Explica la diferència entre tots dos.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const a = new Array(3);
const b = [3];

console.log(a);
console.log(b);
console.log(a.length);
console.log(b.length);
```

</details>

> **📌 Explicació**
> 

> new Array(3) crea un array de longitud 3 sense valors definits. [3] crea un array amb un únic element, el número 3.

## **2. Afegir i eliminar elements**

### **Ejercicio 4**

> **📌 Enunciat**
> 

> Donat l'array:

```html
const letras = ["a", "b", "c"];
```

Realitza aquestes operacions una a una:

1. Afegeix `"d"` al final.

1. Elimina l'últim element.

1. Afegeix `"z"` al principi.

1. Elimina el primer element.

Mostra l'array després de cada operació.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const letras = [“a”, “b”, “c”];

letras.push("d");
console.log(letras);

letras.pop();
console.log(letras);

letras.unshift("z");
console.log(letras);

letras.shift();
console.log(letras);
```

</details>

### **Ejercicio 5**

> **📌 Enunciat**
> 

> Crea un programa que:

> 1. Comence amb aquest array: `["lunes", "martes"]`

> 1. Afegisca `"miércoles"` i `"jueves"` al final.

> 1. Afegisca `"domingo"` al principi.

> 1. Elimine el primer element.

> 1. Mostre el resultat final.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const dias = [“lunes”, “martes”];

dias.push("miércoles", "jueves");
dias.unshift("domingo");
dias.shift();

console.log(dias);
```

</details>

> **📌 Explicació**
> 

javascript ["dilluns", "dimarts", "dimecres", "dijous"]

## **3. Conversió i creació d'arrays**

### **Ejercicio 6**

> **📌 Enunciat**
> 

> Converteix el string:

```html
const texto = "javascript";
```

en un array de lletres de dos formes:

1. Amb `Array.from()`

1. Amb spread `...`

Mostra tots dos resultats.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const texto = “javascript”;

const array1 = Array.from(texto);
const array2 = [...texto];

console.log(array1);
console.log(array2);
```

</details>

### **Ejercicio 7**

> **📌 Enunciat**
> 

> Crea un array de longitud 5 usant:

```html
Array.from({ length: 5 })
```

Després, crea un altre array de longitud 5 on cada posició continga el número del seu índex.

Resultat esperat:

```html
[0, 1, 2, 3, 4]
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const vacio = Array.from({ length: 5 });
const indices = Array.from({ length: 5 }, function(_, i) {
return i;
});

console.log(vacio);
console.log(indices);
```

</details>

### **Ejercicio 8**

> **📌 Enunciat**
> 

> Donat:

```html
const array1 = ["a", "b"];
const array2 = ["c", "d"];
```

1. Uneix tots dos arrays usant `concat()`.

1. Uneix els elements del resultat en un string separat per `"-"`.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const array1 = [“a”, “b”];
const array2 = [“c”, “d”];

const unido = array1.concat(array2);
const texto = unido.join("-");

console.log(unido);
console.log(texto);
```

</details>

## **4. Cerca i comprovació**

### **Ejercicio 9**

> **📌 Enunciat**
> 

> Donat l'array:

```html
const numeros = [5, 10, 15, 20, 25];
```

Indica què retornen aquestes expressions:

1. `numeros.includes(10)`

1. `numeros.includes(30)`

1. `numeros.indexOf(15)`

1. `numeros.indexOf(50)`

1. `numeros.lastIndexOf(25)`

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [5, 10, 15, 20, 25];

console.log(numeros.includes(10));
console.log(numeros.includes(30));
console.log(numeros.indexOf(15));
console.log(numeros.indexOf(50));
console.log(numeros.lastIndexOf(25));
```

!!! note “Resultats”
javascript true false 2 -1 4

</details>

### **Ejercicio 10**

> **📌 Enunciat**
> 

> Crea una funció anomenada existeElemento(array, element) que retorne true si l'element està dins de l'array i false si no l'està.

> Pruébala amb:

```html
["rojo", "azul", "verde"]
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
function existeElemento(array, elemento) {
return array.includes(elemento);
}

console.log(existeElemento(["rojo", "azul", "verde"], "azul"));
console.log(existeElemento(["rojo", "azul", "verde"], "negro"));
```

</details>

### **Ejercicio 11**

> **📌 Enunciat**
> 

> Donat aquest array:

```html
const notas = [4, 7, 5, 7, 9, 7];
```

1. Cerca la primera posició del número `7`.

1. Cerca la última posició del número `7`.

1. Cerca la posició del número `10`.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const notas = [4, 7, 5, 7, 9, 7];

console.log(notas.indexOf(7));
console.log(notas.lastIndexOf(7));
console.log(notas.indexOf(10));
```

</details>

## **5. Subarrays i fragments**

### **Ejercicio 12**

> **📌 Enunciat**
> 

> Donat:

```html
const letras = ["a", "b", "c", "d", "e", "f"];
```

Obtingues amb `slice()`:

1. Els 3 primers elements.

1. Els 2 últims elements.

1. Els elements des de la posició 2 fins a la 4 sense incloure la 4.

1. Una còpia completa de l'array.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const letras = [“a”, “b”, “c”, “d”, “e”, “f”];

console.log(letras.slice(0, 3));
console.log(letras.slice(-2));
console.log(letras.slice(2, 4));
console.log(letras.slice());
```

</details>

### **Ejercicio 13**

> **📌 Enunciat**
> 

> Donat:

```html
const animales = ["perro", "gato", "conejo", "tortuga"];
```

Usa `splice()` per a:

1. Eliminar `"gato"`.

1. Inserir `"loro"` en el seu lloc.

1. Mostrar com queda l'array final.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const animales = [“perro”, “gato”, “conejo”, “tortuga”];

animales.splice(1, 1, "loro");
console.log(animales);
```

</details>

> **📌 Resultat**
> 

> javascript ["perro", "loro", "conejo", "tortuga"]

### **Ejercicio 14**

> **📌 Enunciat**
> 

> Repeteix l'exercici anterior, però amb toSpliced() perquè no es modifique l'array original.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const animales = [“perro”, “gato”, “conejo”, “tortuga”];
const nuevo = animales.toSpliced(1, 1, “loro”);

console.log(animales);
console.log(nuevo);
```

</details>

## **6. Modificar arrays**

### **Ejercicio 15**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [1, 2, 3, 4, 5];
```

1. Usa `fill(0, 1, 4)` i observa el resultat.

1. Explica què posicions es han modificat.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [1, 2, 3, 4, 5];

numeros.fill(0, 1, 4);
console.log(numeros);
```

</details>

### **Ejercicio 16**

> **📌 Enunciat**
> 

> Donat:

```html
const letras = ["a", "b", "c", "d", "e"];
```

Usa `copyWithin()` per a copiar els dos primers elements a partir de la posició 3.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const letras = [“a”, “b”, “c”, “d”, “e”];

letras.copyWithin(3, 0, 2);
console.log(letras);
```

</details>

> **📌 Resultat**
> 

> javascript ["a", "b", "c", "a", "b"]

### **Ejercicio 17**

> **📌 Enunciat**
> 

> Donat:

```html
const colores = ["rojo", "verde", "azul"];
```

Usa `with()` per a crear una còpia on `"verde"` es sustituya per `"amarillo"`.

1. Mostra l'array original.

1. Mostra el nou array.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const colores = [“rojo”, “verde”, “azul”];
const nuevo = colores.with(1, “amarillo”);

console.log(colores);
console.log(nuevo);
```

</details>

## **7. Ordenació i inversió**

### **Ejercicio 18**

> **📌 Enunciat**
> 

> Donat:

```html
const letras = ["d", "a", "c", "b"];
```

1. Ordénalo amb `sort()`.

1. Mostra l'array original després d'ordenar.

1. Explica si ha mutado o no.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const letras = [“d”, “a”, “c”, “b”];

letras.sort();
console.log(letras);
```

</details>

### **Ejercicio 19**

> **📌 Enunciat**
> 

> Fes lomismo que en l'exercici anterior, però amb toSorted().

<details markdown="1">

<summary>💡 Solució</summary>

```html
const letras = [“d”, “a”, “c”, “b”];
const ordenadas = letras.toSorted();

console.log(letras);
console.log(ordenadas);
```

</details>

### **Ejercicio 20**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [1, 2, 3, 4, 5];
```

1. Invierte l'array amb `reverse()`.

1. Crea un altre exemple usant `toReversed()`.

1. Explica la diferència.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [1, 2, 3, 4, 5];

numeros1.reverse();
const invertido = numeros2.toReversed();

console.log(numeros1);
console.log(numeros2);
console.log(invertido);
```

</details>

## **8. forEach()**

### **Ejercicio 21**

> **📌 Enunciat**
> 

> Donat:

```html
const nombres = ["Ana", "Luis", "Elena", "Mario"];
```

Usa `forEach()` per a mostrar cada nom per consola.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const nombres = [“Ana”, “Luis”, “Elena”, “Mario”];

nombres.forEach(function(nombre) {
console.log(nombre);
});
```

</details>

### **Ejercicio 22**

> **📌 Enunciat**
> 

> Amb el mateix array, usa forEach() per a mostrar:

```html
Posición 0: Ana
Posición 1: Luis
...
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const nombres = [“Ana”, “Luis”, “Elena”, “Mario”];

nombres.forEach(function(nombre, indice) {
console.log("Posición " + indice + ": " + nombre);
});
```

</details>

### **Ejercicio 23**

> **📌 Enunciat**
> 

> Crea un array de números i usa forEach() per a mostrar el doble de cada número.

> Exemple:

```html
[2, 4, 6]
```

hauria de mostrar:

```html
4
8
12
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [2, 4, 6];

numeros.forEach(function(numero) {
console.log(numero * 2);
});
```

</details>

## **9. every() i some()**

### **Ejercicio 24**

> **📌 Enunciat**
> 

> Donat:

```html
const palabras = ["sol", "mar", "pan", "luz"];
```

Comprova amb `every()` si totes les paraules tenen longitud 3.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const palabras = [“sol”, “mar”, “pan”, “luz”];

const resultado = palabras.every(function(palabra) {
return palabra.length === 3;
});

console.log(resultado);
```

</details>

### **Ejercicio 25**

> **📌 Enunciat**
> 

> Donat:

```html
const palabras = ["sol", "montaña", "pan", "luz"];
```

Comprova amb `some()` si existeix alguna paraula amb més de 5 lletres.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const palabras = [“sol”, “montaña”, “pan”, “luz”];

const resultado = palabras.some(function(palabra) {
return palabra.length > 5;
});

console.log(resultado);
```

</details>

### **Ejercicio 26**

> **📌 Enunciat**
> 

> Crea una funció que reba un array de números i retorne:

> - `true` si tots són positivos

> - `false` si algun no l'és

> Hazlo amb `every()`.

<details markdown="1">

<summary>💡 Solució</summary>

```html
function todosPositivos(numeros) {
return numeros.every(function(numero) {
return numero > 0;
});
}

console.log(todosPositivos([1, 2, 3]));
console.log(todosPositivos([1, -2, 3]));
```

</details>

### **Ejercicio 27**

> **📌 Enunciat**
> 

> Crea una funció que reba un array de números i retorne:

> - `true` si algun és parell

> - `false` si cap l'és

> Hazlo amb `some()`.

<details markdown="1">

<summary>💡 Solució</summary>

```html
function hayPar(numeros) {
return numeros.some(function(numero) {
return numero % 2 === 0;
});
}

console.log(hayPar([1, 3, 5]));
console.log(hayPar([1, 4, 5]));
```

</details>

## **10. map()**

### **Ejercicio 28**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [1, 2, 3, 4, 5];
```

Crea un nou array amb els seus cuadrats usant `map()`.

Resultat esperat:

```html
[1, 4, 9, 16, 25]
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map(function(numero) {
return numero * numero;
});

console.log(cuadrados);
```

</details>

### **Ejercicio 29**

> **📌 Enunciat**
> 

> Donat:

```html
const nombres = ["Ana", "Pablo", "Pedro"];
```

Crea un nou array amb la longitud de cada nom.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const nombres = [“Ana”, “Pablo”, “Pedro”];

const longitudes = nombres.map(function(nombre) {
return nombre.length;
});

console.log(longitudes);
```

</details>

### **Ejercicio 30**

> **📌 Enunciat**
> 

> Donat:

```html
const precios = [10, 20, 30];
```

Crea un nou array amb el IVA aplicat al 21%.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const precios = [10, 20, 30];

const conIva = precios.map(function(precio) {
return precio * 1.21;
});

console.log(conIva);
```

</details>

### **Ejercicio 31**

> **📌 Enunciat**
> 

> Donat aquest array d'objectes:

```html
const personas = [
{ nombre: "Ana", edad: 20 },
{ nombre: "Luis", edad: 25 },
{ nombre: "Marta", edad: 19 }
];
```

Usa `map()` per a crear un array només amb els noms.

Resultat esperat:

```html
["Ana", "Luis", "Marta"]
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const personas = [
{ nombre: “Ana”, edad: 20 },
{ nombre: “Luis”, edad: 25 },
{ nombre: “Marta”, edad: 19 }
];

const nombres = personas.map(function(persona) {
return persona.nombre;
});

console.log(nombres);
```

</details>

## **11. filter()**

### **Ejercicio 32**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [1, 2, 3, 4, 5, 6];
```

Filtra només els números parells.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(function(numero) {
return numero % 2 === 0;
});

console.log(pares);
```

</details>

### **Ejercicio 33**

> **📌 Enunciat**
> 

Donat:

```html
const nombres = ["Ana", "Pablo", "Pedro", "Luis", "Paula"];
```

Filtra els noms que comencen per `"P"`.

<details markdown="1">

<summary>💡 Solució</summary>

</details>

```html
const nombres = [“Ana”, “Pablo”, “Pedro”, “Luis”, “Paula”];

const filtrados = nombres.filter(function(nombre) {
  return nombre.startsWith("P");
});

console.log(filtrados);
```

### **Ejercicio 34**

> **📌 Enunciat**
> 

Donat aquest array d'objectes:

```html
const alumnos = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 7 },
  { nombre: "Carlos", nota: 3 }
];
```

Filtra només els alumnes aprovats.

<details markdown="1">

<summary>💡 Solució</summary>

</details>

```html
const alumnos = [
{ nombre: “Ana”, nota: 8 },
{ nombre: “Luis”, nota: 4 },
{ nombre: “Marta”, nota: 7 },
{ nombre: “Carlos”, nota: 3 }
];

const aprobados = alumnos.filter(function(alumno) {
  return alumno.nota >= 5;
});

console.log(aprobados);
```

## **12. flat() i flatMap()**

### **Ejercicio 35**

> **📌 Enunciat**
> 

> Donat:

```html
const datos = [1, 2, [3, 4], 5];
```

Usa `flat()` per a obtindre:

```html
[1, 2, 3, 4, 5]
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const datos = [1, 2, [3, 4], 5];

console.log(datos.flat());
```

</details>

### **Ejercicio 36**

> **📌 Enunciat**
> 

> Donat:

```html
const datos = [1, [2, [3, 4]], 5];
```

1. Usa `flat(1)`

1. Usa `flat(2)`

Explica la diferència.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const datos = [1, [2, [3, 4]], 5];

console.log(datos.flat(1));
console.log(datos.flat(2));
```

</details>

### **Ejercicio 37**

> **📌 Enunciat**
> 

> Donat:

```html
const valores = ["a", ["b", "c"], "d", ["e", "f", "g"]];
```

Usa `flatMap()` per a retornar:

- `1` si l'element no és un array

- la longitud si sí és un array

Resultat esperat:

```html
[1, 2, 1, 3]
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const valores = [“a”, [“b”, “c”], “d”, [“e”, “f”, “g”]];

const resultado = valores.flatMap(function(elemento) {
return Array.isArray(elemento) ? elemento.length : 1;
});

console.log(resultado);
```

</details>

### **Ejercicio 38**

> **📌 Enunciat**
> 

> Donat:

```html
const frases = ["hola mundo", "adios", "javascript arrays"];
```

Usa `flatMap()` per a separar totes les paraules en un únic array.

Resultat esperat:

```html
["hola", "mundo", "adios", "javascript", "arrays"]
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const frases = [“hola mundo”, “adios”, “javascript arrays”];

const palabras = frases.flatMap(function(frase) {
return frase.split(" ");
});

console.log(palabras);
```

</details>

## **13. find(), findIndex(), findLast() i findLastIndex()**

### **Ejercicio 39**

> **📌 Enunciat**
> 

> Donat:

```html
const nombres = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
```

Cerca amb `find()` el primer nom que tinga 5 lletres.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const nombres = [“Ana”, “Pablo”, “Pedro”, “Pancracio”, “Heriberto”];

const encontrado = nombres.find(function(nombre) {
return nombre.length === 5;
});

console.log(encontrado);
```

</details>

### **Ejercicio 40**

> **📌 Enunciat**
> 

> Amb el mateix array, usa findIndex() per a obtindre la posició del primer nom de 5 lletres.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const nombres = [“Ana”, “Pablo”, “Pedro”, “Pancracio”, “Heriberto”];

const posicion = nombres.findIndex(function(nombre) {
return nombre.length === 5;
});

console.log(posicion);
```

</details>

### **Ejercicio 41**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [2, 4, 6, 7, 8, 10, 7];
```

1. Usa `find()` per a trobar el primer número impar.

1. Usa `findLast()` per a trobar l'últim número impar.

1. Usa `findIndex()` per a la primera posició de l'impar.

1. Usa `findLastIndex()` per a la última posició de l'impar.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [2, 4, 6, 7, 8, 10, 7];

console.log(numeros.find(function(numero) {
return numero % 2 !== 0;
}));

console.log(numeros.findLast(function(numero) {
return numero % 2 !== 0;
}));

console.log(numeros.findIndex(function(numero) {
return numero % 2 !== 0;
}));

console.log(numeros.findLastIndex(function(numero) {
return numero % 2 !== 0;
}));
```

</details>

### **Ejercicio 42**

> **📌 Enunciat**
> 

> Donat aquest array d'objectes:

```html
const personas = [
{ nombre: "Ana", edad: 20 },
{ nombre: "Luis", edad: 25 },
{ nombre: "Marta", edad: 19 },
{ nombre: "Carlos", edad: 25 }
];
```

1. Cerca la primera persona amb edat 25.

1. Cerca la posició de la primera persona amb edat 25.

1. Cerca la última persona amb edat 25.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const personas = [
{ nombre: “Ana”, edad: 20 },
{ nombre: “Luis”, edad: 25 },
{ nombre: “Marta”, edad: 19 },
{ nombre: “Carlos”, edad: 25 }
];

console.log(personas.find(function(persona) {
return persona.edad === 25;
}));

console.log(personas.findIndex(function(persona) {
return persona.edad === 25;
}));

console.log(personas.findLast(function(persona) {
return persona.edad === 25;
}));
```

</details>

## **14. redueix()**

### **Ejercicio 43**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [10, 20, 30, 40];
```

Usa `reduce()` per a sumar tots els números.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [10, 20, 30, 40];

const suma = numeros.reduce(function(acumulador, numero) {
return acumulador + numero;
}, 0);

console.log(suma);
```

</details>

### **Ejercicio 44**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [2, 3, 4];
```

Usa `reduce()` per a multiplicar-los tots.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [2, 3, 4];

const producto = numeros.reduce(function(acumulador, numero) {
return acumulador * numero;
}, 1);

console.log(producto);
```

</details>

### **Ejercicio 45**

> **📌 Enunciat**
> 

> Donat:

```html
const palabras = ["Hola", " ", "mundo", "!"];
```

Usa `reduce()` per a formar una sola cadena:

```html
"Hola mundo!"
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const palabras = [“Hola”, “ “, “mundo”, “!”];

const texto = palabras.reduce(function(acumulador, palabra) {
return acumulador + palabra;
}, "");

console.log(texto);
```

</details>

### **Ejercicio 46**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [5, 12, 8, 20, 3];
```

Usa `reduce()` per a obtindre el número major.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [5, 12, 8, 20, 3];

const mayor = numeros.reduce(function(acumulador, numero) {
return numero > acumulador ? numero : acumulador;
});

console.log(mayor);
```

</details>

### **Ejercicio 47**

> **📌 Enunciat**
> 

> Donat aquest array d'objectes:

```html
const carrito = [
{ producto: "Ratón", precio: 15 },
{ producto: "Teclado", precio: 25 },
{ producto: "Pantalla", precio: 120 }
];
```

Usa `reduce()` per a calcular el preu total del carrito.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const carrito = [
{ producto: “Ratón”, precio: 15 },
{ producto: “Teclado”, precio: 25 },
{ producto: “Pantalla”, precio: 120 }
];

const total = carrito.reduce(function(acumulador, item) {
return acumulador + item.precio;
}, 0);

console.log(total);
```

</details>

### **Ejercicio 48**

> **📌 Enunciat**
> 

> Donat:

```html
const palabras = ["a", "b", "a", "c", "b", "a"];
```

Usa `reduce()` per a comptar quantes vegades apareix cada lletra.

Resultat esperat:

```html
{ a: 3, b: 2, c: 1 }
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const palabras = [“a”, “b”, “a”, “c”, “b”, “a”];

const conteo = palabras.reduce(function(acumulador, letra) {
if (acumulador[letra]) {
    acumulador[letra]++;
} else {
    acumulador[letra] = 1;
}
return acumulador;
}, {});

console.log(conteo);
```

</details>

## **15. reduceRight()**

### **Ejercicio 49**

> **📌 Enunciat**
> 

> Donat:

```html
const palabras = ["uno", "dos", "tres"];
```

Usa `reduceRight()` per a unirlas de dreta a esquerra.

Resultat esperat:

```html
"tresdosuno"
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
const palabras = [“uno”, “dos”, “tres”];

const resultado = palabras.reduceRight(function(acumulador, palabra) {
return acumulador + palabra;
}, "");

console.log(resultado);
```

</details>

### **Ejercicio 50**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [1, 2, 3, 4];
```

Usa `reduceRight()` per a mostrar l'ordre en el que es recorren els elements.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [1, 2, 3, 4];

numeros.reduceRight(function(acumulador, numero) {
console.log(numero);
return acumulador;
}, 0);
```

</details>

## 16. Exercicis mixtos

### **Ejercicio 51**

> **📌 Enunciat**
> 

> Donat aquest array:

```html
const alumnos = [
{ nombre: "Ana", nota: 8 },
{ nombre: "Luis", nota: 4 },
{ nombre: "Marta", nota: 7 },
{ nombre: "Carlos", nota: 3 },
{ nombre: "Pablo", nota: 9 }
];
```

Fes el següent:

1. Obtingues un array només amb els noms.

1. Obtingues un array només amb els aprovats.

1. Comprova si tots estan aprovats.

1. Comprova si algun ha sacado un 10.

1. Calcula la nota mitjana.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const alumnos = [
{ nombre: “Ana”, nota: 8 },
{ nombre: “Luis”, nota: 4 },
{ nombre: “Marta”, nota: 7 },
{ nombre: “Carlos”, nota: 3 },
{ nombre: “Pablo”, nota: 9 }
];

const nombres = alumnos.map(function(alumno) {
return alumno.nombre;
});

const aprobados = alumnos.filter(function(alumno) {
return alumno.nota >= 5;
});

const todosAprobados = alumnos.every(function(alumno) {
return alumno.nota >= 5;
});

const hayDiez = alumnos.some(function(alumno) {
return alumno.nota === 10;
});

const media = alumnos.reduce(function(acumulador, alumno) {
return acumulador + alumno.nota;
}, 0) / alumnos.length;

console.log(nombres);
console.log(aprobados);
console.log(todosAprobados);
console.log(hayDiez);
console.log(media);
```

</details>

### **Ejercicio 52**

> **📌 Enunciat**
> 

> Donat:

```html
const productos = [
{ nombre: "Portátil", precio: 800, stock: 3 },
{ nombre: "Ratón", precio: 20, stock: 10 },
{ nombre: "Teclado", precio: 50, stock: 0 },
{ nombre: "Monitor", precio: 200, stock: 5 }
];
```

Resol:

1. Filtra els productes amb stock.

1. Obtingues un array amb només els noms.

1. Cerca el primer producte que cueste més de 100.

1. Comprova si algun no té stock.

1. Calcula el valor total del magatzem (`precio * stock`).

<details markdown="1">

<summary>💡 Solució</summary>

```html
const productos = [
{ nombre: “Portátil”, precio: 800, stock: 3 },
{ nombre: “Ratón”, precio: 20, stock: 10 },
{ nombre: “Teclado”, precio: 50, stock: 0 },
{ nombre: “Monitor”, precio: 200, stock: 5 }
];

const conStock = productos.filter(function(producto) {
return producto.stock > 0;
});

const nombres = productos.map(function(producto) {
return producto.nombre;
});

const caro = productos.find(function(producto) {
return producto.precio > 100;
});

const haySinStock = productos.some(function(producto) {
return producto.stock === 0;
});

const valorTotal = productos.reduce(function(acumulador, producto) {
return acumulador + producto.precio * producto.stock;
}, 0);

console.log(conStock);
console.log(nombres);
console.log(caro);
console.log(haySinStock);
console.log(valorTotal);
```

</details>

### **Ejercicio 53**

> **📌 Enunciat**
> 

> Donat:

```html
const frases = ["hola", "que tal", "adios mundo"];
```

1. Converteix l'array en un amb el número de paraules de cada frase.

1. Comprova si alguna frase té més d'una paraula.

1. Uneix totes les paraules en un únic array amb `flatMap()`.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const frases = [“hola”, “que tal”, “adios mundo”];

const numPalabras = frases.map(function(frase) {
return frase.split(" ").length;
});

const algunaVarias = frases.some(function(frase) {
return frase.split(" ").length > 1;
});

const todasLasPalabras = frases.flatMap(function(frase) {
return frase.split(" ");
});

console.log(numPalabras);
console.log(algunaVarias);
console.log(todasLasPalabras);
```

</details>

### **Ejercicio 54**

> **📌 Enunciat**
> 

> Donat:

```html
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

1. Filtra els parells.

1. Multiplica per 2 cada un d'ells.

1. Suma el resultat final amb `reduce()`.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros
.filter(function(numero) {
    return numero % 2 === 0;
})
.map(function(numero) {
    return numero * 2;
})
.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(resultado);
```

</details>

---


---

## 🎮 Retos Interactivos de Autoevaluación (+100 XP)

Comprueba tu dominio sobre **Cuaderno Completo de Actividades — UD4** superando estos 4 retos gamificados (+25 puntos cada uno):

<div class="interactive-mcq" data-answer="B" data-hint="const defineix una referència constant amb àmbit de bloc; let permet reassignar el valor.">
  <div class="mcq-question">🎯 <strong>Reto 1 (+25 pts):</strong> En JavaScript modern (ES6+), quina diferència hi ha entre declarar una variable amb <code>let</code> i declarar-la amb <code>const</code>?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) <code>let</code> té àmbit global obligatori i <code>const</code> no existeix en navegadors.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Ambdues tenen àmbit de bloc (<code>{}</code>), però <code>const</code> impedeix reassignar la referència de la variable després de la seua inicialització.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) <code>const</code> només admet nombres enters i <code>let</code> només cadenes de text.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) No hi ha cap diferència.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="filter() retorna un nou array amb els elements que superen el predicat booleà.">
  <div class="mcq-question">🎯 <strong>Reto 2 (+25 pts):</strong> Quin mètode funcional dels Arrays en JavaScript crea i retorna un NOU array amb tots els elements que compleixen la condició d'una funció callback?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) forEach()</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) filter()</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) push()</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) pop()</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Per exemple, 5 === '5' és false, mentre que 5 == '5' és true.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En JavaScript, l'operador d'igualtat estricta (<code>===</code>) compara tant el valor com el tipus de dades sense fer conversió implícita.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="array|vector|llista" data-hint="S'anomena Array.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Com s'anomena l'estructura de dades en JavaScript que emmagatzema una col·lecció ordenada de valors entre claudàtors <code>[10, 20, 30]</code>?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Cuaderno Completo de Actividades — UD4**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 puntos XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 puntos · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="LMSGI" data-unit="UD04" data-activity="activitats">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
