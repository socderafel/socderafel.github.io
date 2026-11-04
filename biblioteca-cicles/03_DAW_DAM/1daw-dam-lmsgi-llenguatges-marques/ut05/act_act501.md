---
layout: default
title: "Actividad Práctica ACT501 — Ejercicios de DOM — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT05"
prev_url: "./ut0565.html"
prev_label: "⬅️ 5.6.5 Uso de fetch"
next_url: "./act_act502.html"
next_label: "✏️ ACT502 es sobre asincronía y DOM dinámico ➡️"
---

# **Ejercicios de DOM**

## **1 Introducción al DOM**

### **Ejercicio 1. ¿Qué es el DOM?**

> **📌 Enunciado**
> 

> Explica:

> 1. ¿Qué significan las siglas DOM??

> 1. ¿Por qué una página HTML se representa como un árbol?

> 1. ¿Qué relación hay entre HTML y JavaScript a través del DOM?

<details markdown="1">

<summary>💡 Solució</summary>

1. DOM significa **Document Object Model**.

1. Se representa como un árbol porque las etiquetas HTML están **anidadas** unas dentro de otras, formando relaciones de **padre, hijo y hermano**.

1. JavaScript utiliza el DOM para **acceder, leer, modificar, crear o eliminar elementos** de una página web.

</details>

### **Ejercicio 2. Padre, hijos y hermanos**

> **📌 Enunciado**
> 

> Observa este código:

> **📌 HTML**
> 

```html
<body>
  <div id="contenedor">
    <h1>Título</h1>
    <p>Texto</p>
  </div>
</body>
```

Indica:

1. El padre de `<h1>`.

1. Un hermano de `<h1>`.

1. El hijo de `<body>`.

<details markdown="1">

<summary>💡 Solució</summary>

1. El padre de `<h1>` es `<div id="contenedor">`.

1. El hermano de `<h1>` es `<p>Texto</p>`.

1. El hijo de `<body>` es `<div id="contenedor">`.

</details>

### **Ejercicio 3. Dibujar el árbol DOM**

> **📌 Enunciado**
> 

> Dibuja el árbol DOM de este documento:

> **📌 HTML**
> 

```html
<html>
  <body>
    <main>
      <section>
        <h2>Noticias</h2>
        <p>Última hora</p>
      </section>
    </main>
  </body>
</html>
```

<details markdown="1">

<summary>💡 Solució</summary>

```html
html
└── body
    └── main
        └── section
            ├── h2
            └── p
```

- Nodo raíz: `html`

- Padre de `section`: `main`

- Hijos de `section`: `h2` y `p`

</details>

### **Ejercicio 4. Tipos de DOM**

> **📌 Enunciado**
> 

> Explica brevemente qué es:

> 1. DOM real

> 1. Virtual DOM

> 1. Shadow DOM

> 1. Light DOM

<details markdown="1">

<summary>💡 Solució</summary>

1. **DOM real**: estructura real de la página en el navegador.

1. **Virtual DOM**: representación intermedia usada por algunos frameworks para optimizar cambios.

1. **Shadow DOM**: DOM encapsulado dentro de un componente.

1. **Light DOM**: DOM normal visible fuera del Shadow DOM.

</details>

## **2 Acceso al DOM**

### **Ejercicio 5. Buscar por id**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<p id="mensaje">Hola clase</p>
```

Escribe el código JavaScript para seleccionar el párrafo y mostrarlo por consola.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const mensaje = document.getElementById("mensaje");
console.log(mensaje);
```

</details>

### **Ejercicio 6. Buscar por clase**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<p class="texto">Uno</p>
<p class="texto">Dos</p>
<p class="texto">Tres</p>
```

Obtén todos los elementos con la clase `texto` y muestra cuántos hay.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const textos = document.getElementsByClassName("texto");
console.log(textos.length);
```

</details>

### **Ejercicio 7. Buscar por etiqueta**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<li>Manzana</li>
<li>Pera</li>
<li>Plátano</li>
```

Selecciona todos los `li` y muestra el contenido del último.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const elementos = document.getElementsByTagName("li");
console.log(elementos[elementos.length - 1].textContent);
```

</details>

### **Ejercicio 8. Usar `querySelector()`**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<div class="caja">Contenido inicial</div>
```

Selecciona el elemento y cambia su texto por `Contenido modificado`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const caja = document.querySelector(".caja");
caja.textContent = "Contenido modificado";
```

</details>

### **Ejercicio 9. Usar `querySelectorAll()`**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<p class="item">A</p>
<p class="item">B</p>
<p class="item">C</p>
```

Selecciona todos los elementos con clase `item` y muestra sus textos por consola.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const items = document.querySelectorAll(".item");

items.forEach(item => {
  console.log(item.textContent);
});
```

</details>

### Ejercicio 10. Navegar por elementos

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<div id="app">
  <h1>Título</h1>
  <p>Párrafo 1</p>
  <p>Párrafo 2</p>
</div>
```

Obtén:

1. El número de hijos de `#app`

1. El primer hijo

1. El último hijo

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const app = document.getElementById("app");

console.log(app.children.length);
console.log(app.firstElementChild);
console.log(app.lastElementChild);
```

**Resultado esperado**

1. `3`

1. `<h1>Título</h1>`

1. `<p>Párrafo 2</p>`

</details>

### **Ejercicio 11. Navegar por nodos**

> **📌 Enunciado**
> 

> Con el mismo HTML anterior, muestra `childNodes`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const app = document.getElementById("app");
console.log(app.childNodes);
```

</details>

## **3 Modificar el DOM**

### **Ejercicio 12. Cambiar texto con `textContent`**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<p id="saludo">Hola</p>
```

Cambia el texto a `Hola alumnado`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const saludo = document.getElementById("saludo");
saludo.textContent = "Hola alumnado";
```

**Resultado esperado en pantalla**

> **📌 HTML**
> 

```html
<p id="saludo">Hola alumnado</p>
```

</details>

### **Ejercicio 13. Diferencia entre `textContent` e `innerHTML`**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<p id="demo">Texto <strong>importante</strong></p>
```

Muestra por consola `textContent` e `innerHTML`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const demo = document.getElementById("demo");

console.log(demo.textContent);
console.log(demo.innerHTML);
```

**Resultado esperado**

> **📌 JS**
> 

```html
Texto importante
Texto <strong>importante</strong>
```

**Conclusión**
- `textContent` devuelve solo texto.
- `innerHTML` devuelve el contenido HTML interno.

</details>

### **Ejercicio 14. Insertar HTML con `innerHTML`**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<div id="info"></div>
```

Inserta un título y un párrafo dentro del `div`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const info = document.getElementById("info");
info.innerHTML = "<h2>Bienvenido</h2><p>Contenido nuevo</p>";
```

**Resultado esperado en pantalla**

> **📌 HTML**
> 

```html
<div id="info">
<h2>Bienvenido</h2>
<p>Contenido nuevo</p>
</div>
```

</details>

### **Ejercicio 15. Modificar contenido desde un input**

> **📌 Enunciado**
> 

> Crea un input, un botón y un párrafo. Al pulsar el botón, el párrafo debe mostrar el texto escrito.

> **📌 HTML**
> 

```html
<input type="text" id="entrada">
<button id="boton">Mostrar</button>
<p id="resultado"></p>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const entrada = document.getElementById("entrada");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
resultado.textContent = entrada.value;
});
```

**Resultado esperado**
- Si el usuario escribe `Hola DOM`, el párrafo mostrará `Hola DOM`.

</details>

### **Ejercicio 16. Sustituir todo el contenido interno**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<div id="bloque">
<h2>Título</h2>
<p>Descripción</p>
</div>
```

Sustituye su contenido por una lista con tres elementos.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const bloque = document.getElementById("bloque");

bloque.innerHTML = `
<ul>
    <li>Uno</li>
    <li>Dos</li>
    <li>Tres</li>
</ul>
`;
```

**Resultado esperado en pantalla**

Una lista con los elementos Uno, Dos y Tres.

</details>

### **Ejercicio 17. Riesgo de `innerHTML`**

> **📌 Enunciado**
> 

> Explica por qué puede ser peligroso usar `innerHTML` con texto del usuario.

<details markdown="1">

<summary>💡 Solució</summary>

Porque si el usuario introduce código HTML o JavaScript malicioso, este puede ser interpretado por el navegador.
Por eso, para texto normal del usuario es más seguro usar `textContent`.

</details>

## **4 Crear y eliminar en el DOM**

### **Ejercicio 18. Crear un párrafo**

> **📌 Enunciado**
> 

> Crea un nuevo párrafo con el texto `Nuevo párrafo` y añádelo al final del `body`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const parrafo = document.createElement("p");
parrafo.textContent = "Nuevo párrafo";
document.body.appendChild(parrafo);
```

**Resultado esperado en pantalla**

Aparece un nuevo `<p>` al final de la página.

</details>

### **Ejercicio 19. Crear elementos de una lista**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<ul id="lista"></ul>
```

Crea tres elementos `li` desde JavaScript.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const lista = document.getElementById("lista");

const li1 = document.createElement("li");
li1.textContent = "Rojo";

const li2 = document.createElement("li");
li2.textContent = "Verde";

const li3 = document.createElement("li");
li3.textContent = "Azul";

lista.appendChild(li1);
lista.appendChild(li2);
lista.appendChild(li3);
```

**Resultado esperado en pantalla**

- Rojo

- Verde

- Azul

</details>

### **Ejercicio 20. Eliminar un elemento**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<p>Primero</p>
<p id="borrar">Segundo</p>
<p>Tercero</p>
```

Elimina el segundo párrafo.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const borrar = document.getElementById("borrar");
borrar.remove();
```

**Resultado esperado en pantalla**

Solo se verán:

- Primero

- Tercero

</details>

### **Ejercicio 21. Lista de tareas simple**

> **📌 Enunciado**
> 

> Crea una lista de tareas con un input, un botón y una lista. Cada clic debe añadir una tarea nueva.

> **📌 HTML**
> 

```html
<input type="text" id="tarea">
<button id="agregar">Añadir</button>
<ul id="listaTareas"></ul>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const listaTareas = document.getElementById("listaTareas");

agregar.addEventListener("click", () => {
const li = document.createElement("li");
li.textContent = tarea.value;
listaTareas.appendChild(li);
tarea.value = "";
});
```

**Resultado esperado**
- Cada vez que se pulsa el botón, aparece una nueva tarea en la lista.

</details>

### **Ejercicio 22. No permitir tareas vacías**

> **📌 Enunciado**
> 

> Mejora el ejercicio anterior para que no añada tareas vacías.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const listaTareas = document.getElementById("listaTareas");

agregar.addEventListener("click", () => {
if (tarea.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = tarea.value;
    listaTareas.appendChild(li);
    tarea.value = "";
}
});
```

**Resultado esperado**
- Si el input está vacío o solo tiene espacios, no se añade nada.

</details>

### **Ejercicio 23. Botón para eliminar cada tarea**

> **📌 Enunciado**
> 

> Haz que cada tarea tenga un botón **Eliminar**.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const listaTareas = document.getElementById("listaTareas");

agregar.addEventListener("click", () => {
if (tarea.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = tarea.value + " ";

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
    li.remove();
    });

    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
    tarea.value = "";
}
});
```

**Resultado esperado**
- Cada tarea aparece con su botón.
- Al pulsarlo, esa tarea desaparece.

</details>

### **Ejercicio 24. Crear con `createTextNode()`**

> **📌 Enunciado**
> 

> Crea un nodo de texto con el contenido `Hola desde nodo` y añádelo a un `div`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const div = document.createElement("div");
const texto = document.createTextNode("Hola desde nodo");

div.appendChild(texto);
document.body.appendChild(div);
```

**Resultado esperado**
- Aparece un `div` con el texto `Hola desde nodo`.

</details>

## **5.5 Modificar CSS del DOM**

### **Ejercicio 25. Cambiar color de texto**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<p id="frase">Texto de prueba</p>
<button id="cambiar">Cambiar color</button>
```

Al pulsar el botón, el texto debe ponerse azul.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const frase = document.getElementById("frase");
const cambiar = document.getElementById("cambiar");

cambiar.addEventListener("click", () => {
frase.style.color = "blue";
});
```

**Resultado esperado**
- El texto cambia a azul.

</details>

### **Ejercicio 26. Cambiar varios estilos**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<div id="caja">Caja</div>
```

Haz que desde JavaScript se cambien:

- fondo

- color

- borde

- tamaño de letra

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const caja = document.getElementById("caja");

caja.style.backgroundColor = "yellow";
caja.style.color = "red";
caja.style.border = "2px solid black";
caja.style.fontSize = "24px";
```

**Resultado esperado**
- Caja con fondo amarillo, texto rojo, borde negro y letra grande.

</details>

### **Ejercicio 27. Añadir una clase**

> **📌 Enunciado**
> 

> Crea una clase CSS `.activo` y aplícala con JavaScript a un elemento.

> **CSS**

```html
.activo {
  background-color: lightgreen;
  font-weight: bold;
}
```

> **📌 HTML**
> 

```html
<p id="estado">Elemento</p>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const estado = document.getElementById("estado");
estado.classList.add("activo");
```

**Resultado esperado**
- El párrafo toma el estilo definido en `.activo`.

</details>

### Ejercicio 28. Eliminar una clase

> **📌 Enunciado**
> 

> Dado un elemento que ya tiene la clase `activo`, elimínala.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const estado = document.getElementById("estado");
estado.classList.remove("activo");
```

**Resultado esperado**
- El elemento pierde el estilo de la clase.

</details>

### Ejercicio 29. Alternar clase con `toggle`

> **📌 Enunciado**
> 

> Crea un botón que active o desactive una clase `oscuro` en el `body`.

> **📌 CSS**
> 

```html
.oscuro {
background-color: black;
color: white;
}
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const boton = document.getElementById("modo");

boton.addEventListener("click", () => {
document.body.classList.toggle("oscuro");
});
```

**Resultado esperado**
- Un clic activa modo oscuro.
- Otro clic lo desactiva.

</details>

### Ejercicio 30. Variables CSS

> **📌 Enunciado**
> 

> Cambia el valor de una variable CSS desde JavaScript.

> **📌 CSS**
> 

```html
:root {
--color-principal: lightblue;
}

#panel {
background-color: var(--color-principal);
}
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
document.documentElement.style.setProperty("--color-principal", "lightcoral");
```

**Resultado esperado**
- El fondo de `#panel` pasa a usar el nuevo color.

</details>

### **Ejercicio 31. Leer estilo computado**

> **📌 Enunciado**
> 

> Obtén el color de fondo real de un elemento.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const panel = document.getElementById("panel");
const estilo = window.getComputedStyle(panel);

console.log(estilo.backgroundColor);
```

**Resultado esperado**
- En consola aparece el color calculado por el navegador, por ejemplo:

> **📌 JS**
> 

```html
rgb(240, 128, 128)
```

</details>

## **Ejercicios completos**

### **Ejercicio 32. Cambiar título y estilo**

> **📌 Enunciado**
> 

> Dado este HTML:

> **📌 HTML**
> 

```html
<h1 id="titulo">Mi página</h1>
<button id="botonTitulo">Cambiar</button>
```

Al pulsar el botón:

1. cambia el texto a `Página actualizada`

1. cambia el color a verde

1. añade una clase `grande`

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const titulo = document.getElementById("titulo");
const botonTitulo = document.getElementById("botonTitulo");

botonTitulo.addEventListener("click", () => {
  titulo.textContent = "Página actualizada";
  titulo.style.color = "green";
  titulo.classList.add("grande");
});
```

</details>

### **Ejercicio 33. Crear y eliminar tarjetas**

> **📌 Enunciado**
> 

> Haz un botón que cree una tarjeta con título y otro botón dentro para eliminarla.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const crear = document.getElementById("crear");
const contenedor = document.getElementById("contenedor");

crear.addEventListener("click", () => {
  const tarjeta = document.createElement("div");
  const titulo = document.createElement("h3");
  const boton = document.createElement("button");

  titulo.textContent = "Nueva tarjeta";
  boton.textContent = "Eliminar";

  boton.addEventListener("click", () => {
    tarjeta.remove();
  });

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(boton);
  contenedor.appendChild(tarjeta);
});
```

**Resultado esperado**
- Cada clic crea una tarjeta nueva.
- Cada tarjeta se puede borrar individualmente.

</details>

### **Ejercicio 34. Mini gestor de alumnos**

> **📌 Enunciado**
> 

> Haz una aplicación que permita:

> 1. escribir un nombre

> 1. añadirlo a una lista

> 1. eliminarlo después

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const nombre = document.getElementById("nombre");
const agregarAlumno = document.getElementById("agregarAlumno");
const listaAlumnos = document.getElementById("listaAlumnos");

agregarAlumno.addEventListener("click", () => {
  if (nombre.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = nombre.value + " ";

    const borrar = document.createElement("button");
    borrar.textContent = "Eliminar";

    borrar.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(borrar);
    listaAlumnos.appendChild(li);
    nombre.value = "";
  }
});
```

**Resultado esperado**
- Se pueden añadir alumnos.
- Cada uno tiene su botón de borrado.

</details>

### **Ejercicio 35. Proyecto final: lista de tareas completa**

> **📌 Enunciado**
> 

> Crea una app que permita:

> 1. añadir tareas

> 1. marcarlas como completadas

> 1. eliminarlas

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const input = document.getElementById("tarea");
const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = input.value;

    const completar = document.createElement("button");
    completar.textContent = "Completar";

    const eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";

    completar.addEventListener("click", () => {
      texto.classList.toggle("completada");
    });

    eliminar.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(texto);
    li.appendChild(completar);
    li.appendChild(eliminar);
    lista.appendChild(li);

    input.value = "";
  }
});
```

**CSS sugerido**

```html
.completada {
  text-decoration: line-through;
  color: gray;
}
```

**Resultado esperado**
- Se añade una tarea.
- Se puede marcar como completada.
- Se puede eliminar.

</details>
