---
layout: default
title: "Cuaderno Completo de Actividades — UD5 — Lenguajes de Marcas i Sistemes de Gestió d'Informació"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UD5"
prev_url: "act502.html"
prev_label: "⬅️ ⚡ Activitat 502: Bloc 1. Callback"
next_url: "../ut06/index.html"
next_label: "Següent Unitat (UD6) ➡️"
---

# Cuaderno Práctico de Actividades — UD5: JavaScript Avançat — Manipulació del DOM, Esdeveniments, Formularis i Fetch API

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

- **[⚡ Activitat 501: 1 Introducció al DOM](act501.html)**
- **[⚡ Activitat 502: Bloc 1. Callback](act502.html)**

---

## Actividad 501: 1 Introducció al DOM

👉 *[Obrir aquesta activitat en pàgina individual](act501.html)*

# **Exercicis de DOM**

## **1 Introducció al DOM**

### **Exercici 1. Què és el DOM?**

> **📌 Enunciat**
> 

> Explica:

> 1. Què signifiquen les sigles DOM??

> 1. Per què una pàgina HTML es representa com un arbre?

> 1. Què relació hi ha entre HTML i JavaScript a través del DOM?

<details markdown="1">

<summary>💡 Solució</summary>

1. DOM significa **Document Object Model**.

1. Es representa com un arbre perquè les etiquetes HTML estan **imbricades** unes dins d'altres, formant relacions de **pare, fill i germà**.

1. JavaScript utilitza el DOM per a **accedir, llegir, modificar, crear o eliminar elements** d'una pàgina web.

</details>

### **Exercici 2. Pare, fills i germans**

> **📌 Enunciat**
> 

> Observa aquest codi:

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

1. El pare de `<h1>`.

1. Un germà de `<h1>`.

1. El fill de `<body>`.

<details markdown="1">

<summary>💡 Solució</summary>

1. El pare de `<h1>` és `<div id="contenedor">`.

1. El germà de `<h1>` és `<p>Texto</p>`.

1. El fill de `<body>` és `<div id="contenedor">`.

</details>

### **Exercici 3. Dibuixar l'arbre DOM**

> **📌 Enunciat**
> 

> Dibuixa l'arbre DOM d'aquest document:

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

- Node arrel: `html`

- Pare de `section`: `main`

- Fills de `section`: `h2` i `p`

</details>

### **Exercici 4. Tipus de DOM**

> **📌 Enunciat**
> 

> Explica brevement què és:

> 1. DOM real

> 1. Virtual DOM

> 1. Shadow DOM

> 1. Light DOM

<details markdown="1">

<summary>💡 Solució</summary>

1. **DOM real**: estructura real de la pàgina en el navegador.

1. **Virtual DOM**: representació intermèdia usada per alguns frameworks per a optimitzar canvis.

1. **Shadow DOM**: DOM encapsulat dins d'un component.

1. **Light DOM**: DOM normal visible fóra del Shadow DOM.

</details>

## **2 Accés al DOM**

### **Exercici 5. Cercar per id**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<p id="mensaje">Hola clase</p>
```

Escriu el codi JavaScript per a seleccionar el paràgraf i mostrar-lo per consola.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const mensaje = document.getElementById("mensaje");
console.log(mensaje);
```

</details>

### **Exercici 6. Cercar per classe**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<p class="texto">Uno</p>
<p class="texto">Dos</p>
<p class="texto">Tres</p>
```

Obtingues tots els elements amb la classe `texto` i mostra quants hi ha.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const textos = document.getElementsByClassName("texto");
console.log(textos.length);
```

</details>

### **Exercici 7. Cercar per etiqueta**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<li>Manzana</li>
<li>Pera</li>
<li>Plátano</li>
```

Selecciona tots els `li` i mostra el contingut de l'últim.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const elementos = document.getElementsByTagName("li");
console.log(elementos[elementos.length - 1].textContent);
```

</details>

### **Exercici 8. Usar `querySelector()`**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<div class="caja">Contenido inicial</div>
```

Selecciona l'element i canvia el seu text per `Contenido modificado`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const caja = document.querySelector(".caja");
caja.textContent = "Contenido modificado";
```

</details>

### **Exercici 9. Usar `querySelectorAll()`**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<p class="item">A</p>
<p class="item">B</p>
<p class="item">C</p>
```

Selecciona tots els elements amb classe `item` i mostra els seus textos per consola.

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

### Exercici 10. Navegar per elements

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<div id="app">
  <h1>Título</h1>
  <p>Párrafo 1</p>
  <p>Párrafo 2</p>
</div>
```

Obtingues:

1. El número de fills de `#app`

1. El primer fill

1. L'últim fill

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

**Resultat esperat**

1. `3`

1. `<h1>Título</h1>`

1. `<p>Párrafo 2</p>`

</details>

### **Exercici 11. Navegar per nodes**

> **📌 Enunciat**
> 

> Amb el mateix HTML anterior, mostra `childNodes`.

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

### **Exercici 12. Canviar text amb `textContent`**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<p id="saludo">Hola</p>
```

Canvia el text a `Hola alumnado`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const saludo = document.getElementById("saludo");
saludo.textContent = "Hola alumnado";
```

**Resultat esperat en pantalla**

> **📌 HTML**
> 

```html
<p id="saludo">Hola alumnado</p>
```

</details>

### **Exercici 13. Diferència entre `textContent` e `innerHTML`**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<p id="demo">Texto <strong>importante</strong></p>
```

Mostra per consola `textContent` e `innerHTML`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const demo = document.getElementById("demo");

console.log(demo.textContent);
console.log(demo.innerHTML);
```

**Resultat esperat**

> **📌 JS**
> 

```html
Texto importante
Texto <strong>importante</strong>
```

**Conclusió**
- `textContent` retorna només text.
- `innerHTML` retorna el contingut HTML intern.

</details>

### **Exercici 14. Inserir HTML amb `innerHTML`**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<div id="info"></div>
```

Insereix un títol i un paràgraf dins del `div`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const info = document.getElementById("info");
info.innerHTML = "<h2>Bienvenido</h2><p>Contenido nuevo</p>";
```

**Resultat esperat en pantalla**

> **📌 HTML**
> 

```html
<div id="info">
<h2>Bienvenido</h2>
<p>Contenido nuevo</p>
</div>
```

</details>

### **Exercici 15. Modificar contingut des d'un input**

> **📌 Enunciat**
> 

> Crea un input, un botó i un paràgraf. Al polsar el botó, el paràgraf ha de mostrar el text escrit.

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

**Resultat esperat**
- Si l'usuari escriu `Hola DOM`, el paràgraf mostrarà `Hola DOM`.

</details>

### **Exercici 16. Sustituir tot el contingut intern**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<div id="bloque">
<h2>Título</h2>
<p>Descripción</p>
</div>
```

Sustituye el seu contingut per una llista amb tres elements.

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

**Resultat esperat en pantalla**

Una llista amb els elements Un, Dos i Tres.

</details>

### **Exercici 17. Risc de `innerHTML`**

> **📌 Enunciat**
> 

> Explica per què pot ser perillós usar `innerHTML` amb text de l'usuari.

<details markdown="1">

<summary>💡 Solució</summary>

Perquè si l'usuari introdueix codi HTML o JavaScript malicioso, aquest pot ser interpretat pel navegador.
Per això, per a text normal de l'usuari és més segur usar `textContent`.

</details>

## **4 Crear i eliminar en el DOM**

### **Exercici 18. Crear un paràgraf**

> **📌 Enunciat**
> 

> Crea un nou paràgraf amb el text `Nuevo párrafo` i añádelo al final del `body`.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const parrafo = document.createElement("p");
parrafo.textContent = "Nuevo párrafo";
document.body.appendChild(parrafo);
```

**Resultat esperat en pantalla**

Apareix un nou `<p>` al final de la pàgina.

</details>

### **Exercici 19. Crear elements d'una llista**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<ul id="lista"></ul>
```

Crea tres elements `li` des de JavaScript.

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

**Resultat esperat en pantalla**

- Roig

- Verd

- Blau

</details>

### **Exercici 20. Eliminar un element**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<p>Primero</p>
<p id="borrar">Segundo</p>
<p>Tercero</p>
```

Elimina el segon paràgraf.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const borrar = document.getElementById("borrar");
borrar.remove();
```

**Resultat esperat en pantalla**

Només es verán:

- Primer

- Tercer

</details>

### **Exercici 21. Llista de tasques simple**

> **📌 Enunciat**
> 

> Crea una llista de tasques amb un input, un botó i una llista. Cada clic ha d'afegir una tasca nova.

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

**Resultat esperat**
- Cada vegada que es polsa el botó, apareix una nova tasca en la llista.

</details>

### **Exercici 22. No permetre tasques buides**

> **📌 Enunciat**
> 

> Millora l'exercici anterior perquè no afegisca tasques buides.

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

**Resultat esperat**
- Si l'input està buit o només té espais, no es afegeix res.

</details>

### **Exercici 23. Botó per a eliminar cada tasca**

> **📌 Enunciat**
> 

> Fes que cada tasca tinga un botó **Eliminar**.

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

**Resultat esperat**
- Cada tasca apareix amb el seu botó.
- Al pulsar-lo, eixa tasca desaparece.

</details>

### **Exercici 24. Crear amb `createTextNode()`**

> **📌 Enunciat**
> 

> Crea un node de text amb el contingut `Hola desde nodo` i añádelo a un `div`.

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

**Resultat esperat**
- Apareix un `div` amb el text `Hola desde nodo`.

</details>

## **5.5 Modificar CSS del DOM**

### **Exercici 25. Canviar color de text**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<p id="frase">Texto de prueba</p>
<button id="cambiar">Cambiar color</button>
```

Al polsar el botó, el text ha de ponerse blau.

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

**Resultat esperat**
- El text canvia a blau.

</details>

### **Exercici 26. Canviar diversos estils**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<div id="caja">Caja</div>
```

Fes que des de JavaScript es cambien:

- fons

- color

- vora

- mida de lletra

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

**Resultat esperat**
- Caixa amb fons groc, text roig, vora negre i lletra gran.

</details>

### **Exercici 27. Afegir una classe**

> **📌 Enunciat**
> 

> Crea una classe CSS `.activo` i aplícala amb JavaScript a un element.

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

**Resultat esperat**
- El paràgraf pren l'estil definit en `.activo`.

</details>

### Exercici 28. Eliminar una classe

> **📌 Enunciat**
> 

> Donat un element que ja té la classe `activo`, elimínala.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const estado = document.getElementById("estado");
estado.classList.remove("activo");
```

**Resultat esperat**
- L'element perd l'estil de la classe.

</details>

### Exercici 29. Alternar classe amb `toggle`

> **📌 Enunciat**
> 

> Crea un botó que active o desactive una classe `oscuro` en el `body`.

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

**Resultat esperat**
- Un clic activa mode fosc.
- Un altre clic el desactiva.

</details>

### Exercici 30. Variables CSS

> **📌 Enunciat**
> 

> Canvia el valor d'una variable CSS des de JavaScript.

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

**Resultat esperat**
- El fons de `#panel` passa a usar el nou color.

</details>

### **Exercici 31. Llegir estil computado**

> **📌 Enunciat**
> 

> Obtingues el color de fons real d'un element.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const panel = document.getElementById("panel");
const estilo = window.getComputedStyle(panel);

console.log(estilo.backgroundColor);
```

**Resultat esperat**
- En consola apareix el color calculat pel navegador, per exemple:

> **📌 JS**
> 

```html
rgb(240, 128, 128)
```

</details>

## **Exercicis complets**

### **Exercici 32. Canviar títol i estil**

> **📌 Enunciat**
> 

> Donat aquest HTML:

> **📌 HTML**
> 

```html
<h1 id="titulo">Mi página</h1>
<button id="botonTitulo">Cambiar</button>
```

Al polsar el botó:

1. canvia el text a `Página actualizada`

1. canvia el color a verd

1. afegeix una classe `grande`

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

### **Exercici 33. Crear i eliminar targetes**

> **📌 Enunciat**
> 

> Fes un botó que creu una targeta amb títol i un altre botó dins per a eliminar-la.

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

**Resultat esperat**
- Cada clic crea una targeta nova.
- Cada targeta es pot esborrar individualment.

</details>

### **Exercici 34. Mini gestor d'alumnes**

> **📌 Enunciat**
> 

> Fes una aplicació que permeta:

> 1. escriure un nom

> 1. añadir-lo a una llista

> 1. eliminar-lo després

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

**Resultat esperat**
- Es poden afegir alumnes.
- Cada un té el seu botó d'esborrat.

</details>

### **Exercici 35. Projecte final: llista de tasques completa**

> **📌 Enunciat**
> 

> Crea una app que permeta:

> 1. afegir tasques

> 1. marcar-les com completades

> 1. eliminar-les

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

**Resultat esperat**
- Es afegeix una tasca.
- Es pot marcar com completada.
- Es pot eliminar.

</details>

---

## Actividad 502: Bloc 1. Callback

👉 *[Obrir aquesta activitat en pàgina individual](act502.html)*

# **Activitats sobre asincronia i DOM dinàmic**

## **Bloc 1. Callback**

### **Activitat 1. Comprendre l'asincronia amb setTimeout**

> **📌 Enunciat**
> 

> Observa el següent codi i respon:

> **📌 JS**
> 

```html
console.log("Inicio");

setTimeout(() => {
console.log("Mensaje asíncrono");
}, 2000);

console.log("Fin");
```

Indica en què ordre es mostraran els missatges en consola.
Explica per què "Fi" apareix abans que "Missatge asíncron".
Indica què paper desempeña la funció que està dins de setTimeout().

<details markdown="1">

<summary>💡 Solució</summary>

1. Ordre d'eixida
El resultat serà:

```html
Inicio
Fin
Mensaje asíncrono
```

1. Explicació
JavaScript executa primer les instruccions síncronas.
L'anomenada a setTimeout() programa una tasca per a executar-se més tarde, però no bloquea el resta del programa. Per això "Fi" es mostra abans.

1. Paper de la funció
La funció que està dins de setTimeout() és un callback, és a dir, una funció que s'executarà més avant quan es complisca la condició indicada, en aquest cas haver esperat 2 segons.

</details>

### **Activitat 2. Identificar callbacks**

> **📌 Enunciat**
> 

> Llegix el següent codi:

> **📌 JS**
> 

```html
function saludar(nombre) {
console.log("Hola, " + nombre);
}

function procesarUsuario(callback) {
const nombre = "Lucía";
callback(nombre);
}

procesarUsuario(saludar);
```

Respon:
Què funció actua com callback?
Què mostrarà la consola?
Explica amb les teues paraules què és un callback.

<details markdown="1">

<summary>💡 Solució</summary>

1. Funció callback
La funció saludar actua com callback perquè es passa com argument a procesarUsuario() per a executar-se després.

1. Eixida
La consola mostrarà:
Hola, Lucía

1. Explicació
Un callback és una funció que es passa com paràmetre a una altra funció perquè aquesta l'execute més tarde.

</details>

### **Activitat 3. Crear un callback propi**

> **📌 Enunciat**
> 

> Crea una funció anomenada **mostrarResultado** que reba un text i el mostre per consola.

> Després, crea una funció anomenada **realizarTarea** que reba un **callback** i, després de **1 segon**, execute eixe **callback** amb el text "**Tasca completada**".

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
function mostrarResultado(texto) {
console.log(texto);
}

function realizarTarea(callback) {
setTimeout(() => {
    callback("Tarea completada");
}, 1000);
}

realizarTarea(mostrarResultado);
```

Explicació:

- mostrarResultado rep un missatge i el mostra.

- realizarTarea espera 1 segon amb setTimeout.

- quan acaba, executa el callback.

</details>

## **Bloc 2. Promeses i async/await**

### **Activitat 4. Comprendre una promesa**

> **📌 Enunciat**
> 

> **📌 JS**
> 

```html
Analiza este código:
const promesa = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("Datos cargados");
}, 1500);
});

promesa.then(resultado => {
console.log(resultado);
});
```

Respon:

- Què representa la variable promesa?

- Què mètode s'usa quan l'operació ix bé?

- Què es mostrarà en consola?

<details markdown="1">

<summary>💡 Solució</summary>

1. La **promesa** és un objecte de JavaScript que representa una operació asíncrona del qual resultat estarà disponible en el futuro.

1. S'utilitza **then ( )** per a indicar què fer quan la promesa es resol correctament.

1. Després de 1,5 segons, es mostrarà: "Dades cargats".

</details>

### **Activitat 5. Gestionar errors amb catch**

> **📌 Enunciat**
> 

> Completa el següent codi perquè, si la promesa falla, es mostre el missatge d'error:

> **📌 JS**
> 

```html
const promesa = new Promise((resolve, reject) => {
setTimeout(() => {
    reject("No se pudo cargar la información");
}, 1000);
});

promesa
.then(resultado => {
    console.log(resultado);
})
// Completa aquí
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const promesa = new Promise((resolve, reject) => {
setTimeout(() => {
    reject("No se pudo cargar la información");
}, 1000);
});

promesa
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.log(error);
});
```

</details>

### **Activitat 6. Reescribir una promesa amb async/await**

> **📌 Enunciat**
> 

> Observa aquest codi:

> **📌 JS**
> 

```html
function obtenerMensaje() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Operación finalizada");
    }, 1000);
});
}

obtenerMensaje()
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.log(error);
});
```

Reescríbelo usant async/await.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
function obtenerMensaje() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Operación finalizada");
    }, 1000);
});
}

async function mostrarMensaje() {
try {
    const resultado = await obtenerMensaje();
    console.log(resultado);
} catch (error) {
    console.log(error);
}
}

mostrarMensaje();
```

</details>

## **Bloc 3. Ús de fetch**

### **Activitat 7. Primera petició GET**

> **📌 Enunciat**
> 

> Realitza una petició GET a la següent API: https://jsonplaceholder.typicode.com/users

> Has de:

> - usar **fetch ( )**.

> - convertir la resposta a **JSON**.

> - mostrar en consola el **array** complet d'usuaris.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error:", error);
});
```

</details>

### **Activitat 8. Mostrar només noms**

> **📌 Enunciat**
> 

> A partir de la mateixa API: https://jsonplaceholder.typicode.com/users

> Mostra en consola únicament el nom de cada usuari.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(usuario => {
    console.log(usuario.name);
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

</details>

### **Activitat 9. Comprovar errors amb response.ok**

> **📌 Enunciat**
> 

> Realitza una petició a aquesta URL incorrecta: https://jsonplaceholder.typicode.com/userrrr

> Has de:

> - comprovar si la resposta és correcta amb **response.ok**.

> - llançar un error si no l'és.

> - mostrar el missatge en consola amb **.catch ( )**.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/userrrr")
.then(response => {
    if (!response.ok) {
    throw new Error("La URL no es válida o el recurso no existe");
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error:", error.message);
});
```

Explicació
Encara que haja resposta del servidor, pot no ser satisfactoria. Per això cal revisar **response.ok**.

</details>

### **Activitat 10. fetch amb async/await**

> **📌 Enunciat**
> 

> Realitza una petició GET amb async/await a: https://jsonplaceholder.typicode.com/user

> Mostra en consola la propietat results.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
async function cargarPersonajes() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/user");

        if (!response.ok) {
        throw new Error("No se pudieron obtener los personajes");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

cargarPersonajes();
```

</details>

## **Bloc 4. Tractament de dades**

### **Activitat 11. Recórrer arrays d'una API**

> **📌 Enunciat**
> 

> Usa la API de JsonPlaceHolder: https://jsonplaceholder.typicode.com/users

> Recorre l'array d'usuaris i mostra en consola:

> - nom

> - email

> - Format desitjat:

>   - Leanne Graham - Sincere@april.biz

>   - Ervin Howell - Shanna@melissa.tv

>   - ...

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(users => {
    console.log(users.name + " - " + users.email);
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

</details>

### **Activitat 12. Accedir a propietats concretes**

> **📌 Enunciat**
> 

> De cada usuari de la API anterior, mostra:

> - nom

> - username

> - telèfon

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(users => {
    console.log("Nombre:", users.name);
    console.log("UserName:", users.username);
    console.log("Teléfono:", users.phone);
    console.log("-----");
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

</details>

### **Activitat 13. Filtrar resultats**

> **📌 Enunciat**
> 

> Mostra únicament aquells usuaris de la qual ciutat siga **"South Christy"**.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const usuariosFiltrados = data.filter(user => user.address.city === "South Christy");

    usuariosFiltrados.forEach(user => {
    console.log(user.name + " - " + user.address.city);
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

Explicació

- **filter()**

  - Crea un nou array amb els elements que compleixen una condició

  - En aquest cas: usuaris de la qual ciutat és "South Christy"

- **user.address.city**

  - Accedeix a un dada imbricat dins del JSON

- **forEach()**

  - Recorre l'array filtrat per a mostrar els resultats

</details>

### **Activitat 14. Filtrat combinado**

> **📌 Enunciat**
> 

> Mostra només aquells usuaris que complisquen les dos condicions:

> - Que la seua ciutat siga "South Christy"

> - Que la seua empresa siga "Considine-Lockman"

> Format d'eixida:

> - Nom - Empresa - Ciutat

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const filtrados = data.filter(user =>
    user.address.city === "South Christy" &&
    user.company.name === "Considine-Lockman"
    );

    filtrados.forEach(user => {
    console.log(user.name + " - " + user.company.name + " - " + user.address.city);
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

Explicació

- **filter()**

  - Permet aplicar diverses condicions alhora

- **&& (AND lògic)**

  - L'usuari ha de complir totes dues condicions

- **Accés a propietats imbricades:**

  - user.address.city

  - user.company.name

- **forEach()**

  - Recorre el resultat filtrat

</details>

## **Bloc 5. Renderitzat dinàmic en el DOM**

### Actividad 15. Pintar una llista en el DOM

> **📌 Enunciat**
> 

> Crea una pàgina amb un contenidor buit:

```html
<div id="contenedor"></div>
```

Fes una petició a: https://jsonplaceholder.typicode.com/users i mostra en el contenidor una llista amb el nom de cada usuari.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Usuarios</title>
    </head>
    <body>
        <div id="contenedor"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const contenedor = document.getElementById("contenedor");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const ul = document.createElement("ul");

    data.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = usuario.name;
    ul.appendChild(li);
    });

    contenedor.appendChild(ul);
})
.catch(error => {
    contenedor.textContent = "Error al cargar los usuarios";
});
```

</details>

### Actividad 16. Crear targetes dinàmiques

> **📌 Enunciat**
> 

> A partir de la API: https://jsonplaceholder.typicode.com/users

> Crea targetes en el DOM que muestren:

> - Nom

> - Email

> - Ciutat

> Usa aquest contenidor:

```html
<div id="usuarios"></div>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ficha Usuarios</title>
    </head>
    <body>
        <div id="usuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const usuariosDiv = document.getElementById("usuarios");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(user => {
    const tarjeta = document.createElement("div");

    const nombre = document.createElement("h3");
    nombre.textContent = user.name;

    const email = document.createElement("p");
    email.textContent = "Email: " + user.email;

    const ciudad = document.createElement("p");
    ciudad.textContent = "Ciudad: " + user.address.city;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(email);
    tarjeta.appendChild(ciudad);

    usuariosDiv.appendChild(tarjeta);
    });
})
.catch(error => {
    usuariosDiv.textContent = "No se pudieron cargar los usuarios";
});
```

</details>

### Actividad 17. Limpiar i tornar a renderitzar

> **📌 Enunciat**
> 

> Crea una funció anomenada **mostrarUsuarios(llista)** que reba un array d'usuaris i els pinte en el contenidor.

> Abans de pintar els usuaris:

> - Has de vaciar el contingut anterior del contenidor amb innerHTML = ""

> Després:

> - usa eixa funció per a mostrar els usuaris obtinguts des de la API https://jsonplaceholder.typicode.com/users

> Usa aquest contenidor:

```html
<div id="usuarios"></div>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ficha Usuarios</title>
    </head>
    <body>
        <div id="usuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const contenedor = document.getElementById("usuarios");

function mostrarUsuarios(lista) {
// Limpiar contenido anterior
contenedor.innerHTML = "";

lista.forEach(user => {
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Ciudad: ${user.address.city}</p>
    `;

    contenedor.appendChild(tarjeta);
});
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    mostrarUsuarios(data);
})
.catch(error => {
    contenedor.textContent = "Error al cargar los datos";
});
```

Explicació

- Vaciar el contenidor evita que els resultats es acumulen si es torna a executar la funció.

</details>

### Actividad 18. Filtrar i renderitzar

> **📌 Enunciat**
> 

> Modifica l'activitat anterior perquè només es muestren en el DOM els usuaris de la qual ciutat siga "South Christy".

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ficha Usuarios con filtro</title>
    </head>
    <body>
        <div id="usuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const contenedor = document.getElementById("usuarios");

function mostrarUsuarios(lista) {
contenedor.innerHTML = "";

lista.forEach(user => {
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Ciudad: ${user.address.city}</p>
    `;

    contenedor.appendChild(tarjeta);
});
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const filtrados = data.filter(user => user.address.city === "South Christy");

    mostrarUsuarios(filtrados);
})
.catch(error => {
    contenedor.textContent = "Error al cargar los datos";
});
```

</details>

### Actividad 19. Mostrar errors en pantalla

> **📌 Enunciat**
> 

> Realitza una petició a una URL incorrecta i mostra l'error dins del contenidor HTML, no només en consola.
Contenidor:

```html
<div id="resultado"></div>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ficha Usuarios con filtro</title>
    </head>
    <body>
        <div id="usuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const resultado = document.getElementById("resultado");

// URL incorrecta (provoca error 404)
fetch("https://jsonplaceholder.typicode.com/userrrr")
.then(response => {
    if (!response.ok) {
    throw new Error("No se ha encontrado el recurso solicitado");
    }
    return response.json();
})
.then(data => {
    resultado.textContent = "Datos cargados correctamente";
})
.catch(error => {
    resultado.textContent = "Error: " + error.message;
});
```

</details>

### Actividad 20. Taula dinàmica des de API

> **📌 Enunciat**
> 

> Usa aquesta API: https://jsonplaceholder.typicode.com/users
Crea una taula dinàmica que mostre:

> - nom

> - correu electrònic

> - ciutat
La taula ha d'insertar-se dins del contenidor:

```html
<div id="tablaUsuarios"></div>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Tabla de usuarios</title>
    </head>
    <body>
        <div id="tablaUsuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const tablaUsuarios = document.getElementById("tablaUsuarios");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const table = document.createElement("table");
    table.border = "1";

    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Ciudad</th>
    </tr>
    `;

    const tbody = document.createElement("tbody");

    data.forEach(usuario => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>
        <td>${usuario.address.city}</td>
    `;
    tbody.appendChild(fila);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tablaUsuarios.appendChild(table);
})
.catch(error => {
    tablaUsuarios.textContent = "Error al cargar la tabla";
});
```

</details>

---


---

## 🎮 Retos Interactivos de Autoevaluación (+100 XP)

Comprueba tu dominio sobre **Cuaderno Completo de Actividades — UD5** superando estos 4 retos gamificados (+25 puntos cada uno):

<div class="interactive-mcq" data-answer="B" data-hint="document.querySelector('.classe #id') utilitza la sintaxi de selectors CSS.">
  <div class="mcq-question">🎯 <strong>Reto 1 (+25 pts):</strong> Quin mètode de l'objecte <code>document</code> (DOM) permet seleccionar el primer element HTML que coincidisca amb qualsevol selector CSS vàlid?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) document.getElementsByTagName()</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) document.querySelector()</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) window.alert()</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) console.log()</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="response.json() retorna una Promesa que es resol amb l'objecte JavaScript resultant de parsejar el JSON.">
  <div class="mcq-question">🎯 <strong>Reto 2 (+25 pts):</strong> En consumir una API REST amb <code>fetch()</code> en JavaScript utilitzant <code>async / await</code>, per a què serveix <code>await resposta.json()</code>?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Per a tancar la connexió de xarxa sense llegir les dades.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Per a llegir el cos de la resposta HTTP i convertir-lo (parsejar-lo) de text JSON a un objecte o array natiu de JavaScript.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Per a esborrar el DOM de la pàgina.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Per a recarregar la pestanya del navegador.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="addEventListener és la forma estàndard i recomanada de gestionar esdeveniments en el DOM.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> El mètode <code>element.addEventListener('click', funcio)</code> permet associar múltiples manejadors d'esdeveniments a un mateix element del DOM sense sobreescriure'ls.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="dom" data-hint="Són les sigles DOM.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quines són les sigles de la interfície que representa el document HTML com un arbre d'objectes manipulable des de JavaScript (Document Object Model)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Cuaderno Completo de Actividades — UD5**):

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
    <button type="button" class="btn-aules-dl" data-module="LMSGI" data-unit="UD05" data-activity="activitats">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
