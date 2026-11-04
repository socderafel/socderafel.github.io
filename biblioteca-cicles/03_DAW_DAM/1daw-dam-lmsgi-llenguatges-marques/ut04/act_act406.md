---
layout: default
title: "Actividad Práctica ACT406 — Ejercicios de Arrays y Array Functions en JavaScript — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT04"
prev_url: "./act_act405.html"
prev_label: "⬅️ ✏️ ACT405 es 21-25"
next_url: "../ut05/index.html"
next_label: "UD5 ➡️"
---

# **Ejercicios de Arrays y Array Functions en JavaScript**

## **1. Creación de arrays y acceso a elementos**

### **Ejercicio 1**

> **📌 Enunciado**
> 

> Crea un array llamado frutas con estos elementos:

> - `"manzana"`

> - `"pera"`

> - `"plátano"`

> - `"naranja"`

> Después:

> 1. Muestra el array completo.

> 1. Muestra cuántos elementos tiene.

> 1. Muestra el primer elemento.

> 1. Muestra el último elemento usando su posición.

> 1. Intenta mostrar una posición que no exista.

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

> **📌 Enunciado**
> 

> Crea un array vacío llamado números.

> 1. Añade manualmente los valores `10`, `20` y `30` usando el operador `[]`.

> 1. Muestra el resultado final.

> 1. Cambia el valor de la posición 1 por `99`.

> 1. Muestra el array actualizado.

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

> **📌 Enunciado**
> 

> Crea estos arrays:

```html
const a = new Array(3);
const b = [3];
```

1. Muestra ambos arrays.

1. Indica cuántos elementos tiene cada uno.

1. Explica la diferencia entre ambos.

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

> **📌 Explicación**
> 

> new Array(3) crea un array de longitud 3 sin valores definidos. [3] crea un array con un único elemento, el número 3.

## **2. Añadir y eliminar elementos**

### **Ejercicio 4**

> **📌 Enunciado**
> 

> Dado el array:

```html
const letras = ["a", "b", "c"];
```

Realiza estas operaciones una a una:

1. Añade `"d"` al final.

1. Elimina el último elemento.

1. Añade `"z"` al principio.

1. Elimina el primer elemento.

Muestra el array después de cada operación.

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

> **📌 Enunciado**
> 

> Crea un programa que:

> 1. Empiece con este array: `["lunes", "martes"]`

> 1. Añada `"miércoles"` y `"jueves"` al final.

> 1. Añada `"domingo"` al principio.

> 1. Elimine el primer elemento.

> 1. Muestre el resultado final.

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

> **📌 Explicación**
> 

javascript ["lunes", "martes", "miércoles", "jueves"]

## **3. Conversión y creación de arrays**

### **Ejercicio 6**

> **📌 Enunciado**
> 

> Convierte el string:

```html
const texto = "javascript";
```

en un array de letras de dos formas:

1. Con `Array.from()`

1. Con spread `...`

Muestra ambos resultados.

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

> **📌 Enunciado**
> 

> Crea un array de longitud 5 usando:

```html
Array.from({ length: 5 })
```

Después, crea otro array de longitud 5 donde cada posición contenga el número de su índice.

Resultado esperado:

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

> **📌 Enunciado**
> 

> Dado:

```html
const array1 = ["a", "b"];
const array2 = ["c", "d"];
```

1. Une ambos arrays usando `concat()`.

1. Une los elementos del resultado en un string separado por `"-"`.

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

## **4. Búsqueda y comprobación**

### **Ejercicio 9**

> **📌 Enunciado**
> 

> Dado el array:

```html
const numeros = [5, 10, 15, 20, 25];
```

Indica qué devuelven estas expresiones:

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

!!! note “Resultados”
javascript true false 2 -1 4

</details>

### **Ejercicio 10**

> **📌 Enunciado**
> 

> Crea una función llamada existeElemento(array, elemento) que devuelva true si el elemento está dentro del array y false si no lo está.

> Pruébala con:

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

> **📌 Enunciado**
> 

> Dado este array:

```html
const notas = [4, 7, 5, 7, 9, 7];
```

1. Busca la primera posición del número `7`.

1. Busca la última posición del número `7`.

1. Busca la posición del número `10`.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const notas = [4, 7, 5, 7, 9, 7];

console.log(notas.indexOf(7));
console.log(notas.lastIndexOf(7));
console.log(notas.indexOf(10));
```

</details>

## **5. Subarrays y fragmentos**

### **Ejercicio 12**

> **📌 Enunciado**
> 

> Dado:

```html
const letras = ["a", "b", "c", "d", "e", "f"];
```

Obtén con `slice()`:

1. Los 3 primeros elementos.

1. Los 2 últimos elementos.

1. Los elementos desde la posición 2 hasta la 4 sin incluir la 4.

1. Una copia completa del array.

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

> **📌 Enunciado**
> 

> Dado:

```html
const animales = ["perro", "gato", "conejo", "tortuga"];
```

Usa `splice()` para:

1. Eliminar `"gato"`.

1. Insertar `"loro"` en su lugar.

1. Mostrar cómo queda el array final.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const animales = [“perro”, “gato”, “conejo”, “tortuga”];

animales.splice(1, 1, "loro");
console.log(animales);
```

</details>

> **📌 Resultado**
> 

> javascript ["perro", "loro", "conejo", "tortuga"]

### **Ejercicio 14**

> **📌 Enunciado**
> 

> Repite el ejercicio anterior, pero con toSpliced() para que no se modifique el array original.

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [1, 2, 3, 4, 5];
```

1. Usa `fill(0, 1, 4)` y observa el resultado.

1. Explica qué posiciones se han modificado.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const numeros = [1, 2, 3, 4, 5];

numeros.fill(0, 1, 4);
console.log(numeros);
```

</details>

### **Ejercicio 16**

> **📌 Enunciado**
> 

> Dado:

```html
const letras = ["a", "b", "c", "d", "e"];
```

Usa `copyWithin()` para copiar los dos primeros elementos a partir de la posición 3.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const letras = [“a”, “b”, “c”, “d”, “e”];

letras.copyWithin(3, 0, 2);
console.log(letras);
```

</details>

> **📌 Resultado**
> 

> javascript ["a", "b", "c", "a", "b"]

### **Ejercicio 17**

> **📌 Enunciado**
> 

> Dado:

```html
const colores = ["rojo", "verde", "azul"];
```

Usa `with()` para crear una copia donde `"verde"` se sustituya por `"amarillo"`.

1. Muestra el array original.

1. Muestra el nuevo array.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const colores = [“rojo”, “verde”, “azul”];
const nuevo = colores.with(1, “amarillo”);

console.log(colores);
console.log(nuevo);
```

</details>

## **7. Ordenación e inversión**

### **Ejercicio 18**

> **📌 Enunciado**
> 

> Dado:

```html
const letras = ["d", "a", "c", "b"];
```

1. Ordénalo con `sort()`.

1. Muestra el array original después de ordenar.

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

> **📌 Enunciado**
> 

> Haz lomismo que en el ejercicio anterior, pero con toSorted().

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [1, 2, 3, 4, 5];
```

1. Invierte el array con `reverse()`.

1. Crea otro ejemplo usando `toReversed()`.

1. Explica la diferencia.

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

> **📌 Enunciado**
> 

> Dado:

```html
const nombres = ["Ana", "Luis", "Elena", "Mario"];
```

Usa `forEach()` para mostrar cada nombre por consola.

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

> **📌 Enunciado**
> 

> Con el mismo array, usa forEach() para mostrar:

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

> **📌 Enunciado**
> 

> Crea un array de números y usa forEach() para mostrar el doble de cada número.

> Ejemplo:

```html
[2, 4, 6]
```

debería mostrar:

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

## **9. every() y some()**

### **Ejercicio 24**

> **📌 Enunciado**
> 

> Dado:

```html
const palabras = ["sol", "mar", "pan", "luz"];
```

Comprueba con `every()` si todas las palabras tienen longitud 3.

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

> **📌 Enunciado**
> 

> Dado:

```html
const palabras = ["sol", "montaña", "pan", "luz"];
```

Comprueba con `some()` si existe alguna palabra con más de 5 letras.

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

> **📌 Enunciado**
> 

> Crea una función que reciba un array de números y devuelva:

> - `true` si todos son positivos

> - `false` si alguno no lo es

> Hazlo con `every()`.

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

> **📌 Enunciado**
> 

> Crea una función que reciba un array de números y devuelva:

> - `true` si alguno es par

> - `false` si ninguno lo es

> Hazlo con `some()`.

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [1, 2, 3, 4, 5];
```

Crea un nuevo array con sus cuadrados usando `map()`.

Resultado esperado:

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

> **📌 Enunciado**
> 

> Dado:

```html
const nombres = ["Ana", "Pablo", "Pedro"];
```

Crea un nuevo array con la longitud de cada nombre.

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

> **📌 Enunciado**
> 

> Dado:

```html
const precios = [10, 20, 30];
```

Crea un nuevo array con el IVA aplicado al 21%.

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

> **📌 Enunciado**
> 

> Dado este array de objetos:

```html
const personas = [
{ nombre: "Ana", edad: 20 },
{ nombre: "Luis", edad: 25 },
{ nombre: "Marta", edad: 19 }
];
```

Usa `map()` para crear un array solo con los nombres.

Resultado esperado:

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [1, 2, 3, 4, 5, 6];
```

Filtra solo los números pares.

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

> **📌 Enunciado**
> 

Dado:

```html
const nombres = ["Ana", "Pablo", "Pedro", "Luis", "Paula"];
```

Filtra los nombres que empiecen por `"P"`.

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

> **📌 Enunciado**
> 

Dado este array de objetos:

```html
const alumnos = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 7 },
  { nombre: "Carlos", nota: 3 }
];
```

Filtra solo los alumnos aprobados.

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

## **12. flat() y flatMap()**

### **Ejercicio 35**

> **📌 Enunciado**
> 

> Dado:

```html
const datos = [1, 2, [3, 4], 5];
```

Usa `flat()` para obtener:

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

> **📌 Enunciado**
> 

> Dado:

```html
const datos = [1, [2, [3, 4]], 5];
```

1. Usa `flat(1)`

1. Usa `flat(2)`

Explica la diferencia.

<details markdown="1">

<summary>💡 Solució</summary>

```html
const datos = [1, [2, [3, 4]], 5];

console.log(datos.flat(1));
console.log(datos.flat(2));
```

</details>

### **Ejercicio 37**

> **📌 Enunciado**
> 

> Dado:

```html
const valores = ["a", ["b", "c"], "d", ["e", "f", "g"]];
```

Usa `flatMap()` para devolver:

- `1` si el elemento no es un array

- la longitud si sí es un array

Resultado esperado:

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

> **📌 Enunciado**
> 

> Dado:

```html
const frases = ["hola mundo", "adios", "javascript arrays"];
```

Usa `flatMap()` para separar todas las palabras en un único array.

Resultado esperado:

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

## **13. find(), findIndex(), findLast() y findLastIndex()**

### **Ejercicio 39**

> **📌 Enunciado**
> 

> Dado:

```html
const nombres = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
```

Busca con `find()` el primer nombre que tenga 5 letras.

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

> **📌 Enunciado**
> 

> Con el mismo array, usa findIndex() para obtener la posición del primer nombre de 5 letras.

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [2, 4, 6, 7, 8, 10, 7];
```

1. Usa `find()` para encontrar el primer número impar.

1. Usa `findLast()` para encontrar el último número impar.

1. Usa `findIndex()` para la primera posición del impar.

1. Usa `findLastIndex()` para la última posición del impar.

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

> **📌 Enunciado**
> 

> Dado este array de objetos:

```html
const personas = [
{ nombre: "Ana", edad: 20 },
{ nombre: "Luis", edad: 25 },
{ nombre: "Marta", edad: 19 },
{ nombre: "Carlos", edad: 25 }
];
```

1. Busca la primera persona con edad 25.

1. Busca la posición de la primera persona con edad 25.

1. Busca la última persona con edad 25.

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

## **14. reduce()**

### **Ejercicio 43**

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [10, 20, 30, 40];
```

Usa `reduce()` para sumar todos los números.

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [2, 3, 4];
```

Usa `reduce()` para multiplicarlos todos.

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

> **📌 Enunciado**
> 

> Dado:

```html
const palabras = ["Hola", " ", "mundo", "!"];
```

Usa `reduce()` para formar una sola cadena:

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [5, 12, 8, 20, 3];
```

Usa `reduce()` para obtener el número mayor.

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

> **📌 Enunciado**
> 

> Dado este array de objetos:

```html
const carrito = [
{ producto: "Ratón", precio: 15 },
{ producto: "Teclado", precio: 25 },
{ producto: "Pantalla", precio: 120 }
];
```

Usa `reduce()` para calcular el precio total del carrito.

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

> **📌 Enunciado**
> 

> Dado:

```html
const palabras = ["a", "b", "a", "c", "b", "a"];
```

Usa `reduce()` para contar cuántas veces aparece cada letra.

Resultado esperado:

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

> **📌 Enunciado**
> 

> Dado:

```html
const palabras = ["uno", "dos", "tres"];
```

Usa `reduceRight()` para unirlas de derecha a izquierda.

Resultado esperado:

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [1, 2, 3, 4];
```

Usa `reduceRight()` para mostrar el orden en el que se recorren los elementos.

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

## 16. Ejercicios mixtos

### **Ejercicio 51**

> **📌 Enunciado**
> 

> Dado este array:

```html
const alumnos = [
{ nombre: "Ana", nota: 8 },
{ nombre: "Luis", nota: 4 },
{ nombre: "Marta", nota: 7 },
{ nombre: "Carlos", nota: 3 },
{ nombre: "Pablo", nota: 9 }
];
```

Haz lo siguiente:

1. Obtén un array solo con los nombres.

1. Obtén un array solo con los aprobados.

1. Comprueba si todos están aprobados.

1. Comprueba si alguno ha sacado un 10.

1. Calcula la nota media.

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

> **📌 Enunciado**
> 

> Dado:

```html
const productos = [
{ nombre: "Portátil", precio: 800, stock: 3 },
{ nombre: "Ratón", precio: 20, stock: 10 },
{ nombre: "Teclado", precio: 50, stock: 0 },
{ nombre: "Monitor", precio: 200, stock: 5 }
];
```

Resuelve:

1. Filtra los productos con stock.

1. Obtén un array con solo los nombres.

1. Busca el primer producto que cueste más de 100.

1. Comprueba si alguno no tiene stock.

1. Calcula el valor total del almacén (`precio * stock`).

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

> **📌 Enunciado**
> 

> Dado:

```html
const frases = ["hola", "que tal", "adios mundo"];
```

1. Convierte el array en uno con el número de palabras de cada frase.

1. Comprueba si alguna frase tiene más de una palabra.

1. Une todas las palabras en un único array con `flatMap()`.

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

> **📌 Enunciado**
> 

> Dado:

```html
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

1. Filtra los pares.

1. Multiplica por 2 cada uno de ellos.

1. Suma el resultado final con `reduce()`.

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
