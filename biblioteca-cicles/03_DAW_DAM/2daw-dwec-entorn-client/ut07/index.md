---
layout: default
title: "Desenvolupament Web en Entorn Client — UD7 UP 07 Comunicación asíncrona y proyecto final"
course_root: ".."
badge: "2n DAW · Grau Superior · UD7"
---

# UD7 — UP 07 Comunicación asíncrona y proyecto final



---

## 📌 7.1 UP07 - Contenidos y RA-CE

UP 07 Comunicación asíncrona y proyecto final

- RA7.a Ventajas de la comunicación asíncrona.

- RA7.b Mecanismos de comunicación.

- RA7.c Objetos de comumicación.

- RA7.d Modificación dinámica.

- RA7.e Formatos para envío y recepción de información.

- RA7.f AXIOS.

- RA7.g Compatibilidad - CORS.

- RA7.h Otros usos de los frameworks.

- RA7.i SPA - Proyecto final.

---

## 📌 7.2 UP 07 - Comunicación asíncrona y proyecto final

Continguts i activitats didàctiques de **UP 07 - Comunicación asíncrona y proyecto final**.

---

## 📌 7.3 Actividades repaso:

Actividades Repaso:

---

## 📌 7.4 Evaluación:

Evaluación:

---

## 📌 7.5 Evaluación RA7.a

Observa el siguiente código:

```javascript

console.log("Inicio");fetch("datos.json")  .then(response => response.json())  .then(data => {    console.log("Datos recibidos");  });console.log("Fin");

```

a) Indica el

orden real

en el que se mostrarán los mensajes por consola y

explica por qué

ocurre ese orden.

b) Indica

dos ventajas

de la comunicación asíncrona frente a la síncrona en aplicaciones web de usuario.

---

## 📌 7.6 Evaluación RA7.b

A continuación se muestran tres formas de comunicación cliente-servidor:

```javascript

// Alocation.href = "resultado.html";// Bconst xhr = new XMLHttpRequest();// Cfetch("api/usuarios");

```

a) Indica qué mecanismo de comunicación representa cada caso (A, B y C).

b)Explica

una diferencia clave

entre el mecanismo B y el C, indicando cuál es más moderno y por qué.

---

## 📌 7.7 Evaluación RA7.c

Se proporciona el siguiente código incompleto con

XMLHttpRequest

:

```javascript

const xhr = new XMLHttpRequest();xhr.open("GET", "datos.json");// FALTA CÓDIGO AQUÍxhr.send();

```

a) Completa el código para que:

Detecte cuando la respuesta ha terminado correctamente.

Muestre por consola el texto recibido del servidor.

b) Indica

dos limitaciones

de

XMLHttpRequest

frente a

fetch

.

---

## 📌 7.8 Evaluación RA7.d

Dado el siguiente HTML:

```javascript

<div id="resultado"></div><button id="cargar">Cargar datos</button>

```

y el siguiente código JavaScript:

```javascript

document.getElementById("cargar").addEventListener("click", () => {  fetch("mensaje.txt")    .then(r => r.text())    .then(texto => {      // FALTA CÓDIGO    });});

```

a) Completa el código para que el contenido del archivo

mensaje.txt

se muestre dentro del

<div>

sin recargar la página

.

b) Explica brevemente qué relación existe entre la comunicación asíncrona y la modificación dinámica del DOM.

---

## 📌 7.9 Evaluación RA7.e

Observa el siguiente formulario HTML:

<form id="formUsuario">

<input type="text" name="nombre">

<input type="email" name="email">

<button type="submit">Enviar</button>

</form>

y el siguiente código JavaScript:

document.getElementById("formUsuario").addEventListener("submit", (e) => {

e.preventDefault();

const form = e.target;

const datos = new FormData(form);

fetch("altaUsuario.php", {

method: "POST",

body: datos

});

});

a) Explica qué es

FormData

y

qué tipo de información permite enviar

al servidor.

b) Indica

dos ventajas

de usar

FormData

frente al envío manual de datos en formato JSON.

---

## 📌 7.10 Evaluación RA7.f

Se dispone de una API REST con el siguiente endpoint:

GET

https://jsonplaceholder.typicode.com/users

Devuelve un array de usuarios en formato JSON.

El objetivo es crear una pequeña aplicación Vue 3 que:

Obtenga los usuarios usando

Axios

Guarde los datos en un

store de Pinia

Permita mostrar, filtrar y gestionar el estado de carga

Gestione posibles errores

1. CREACIÓN DEL STORE

Se proporciona el siguiente store incompleto:

import { defineStore } from "pinia";

import axios from "axios";

export const useUserStore = defineStore("users", {

state: () => ({

users: [],

loading: false,

error: null

}),

actions: {

async fetchUsers() {

// COMPLETAR

}

}

});

Completa la acción

fetchUsers()

para que:

Active

loading

Realice la petición con Axios

Guarde los datos en

users

Capture errores en

error

Desactive

loading

al finalizar

2. USO DEL STORE EN EL COMPONENTE

Se proporciona el siguiente componente incompleto:

<template>

<div>

<button @click="store.fetchUsers()">Cargar usuarios</button>

<p v-if="store.loading">Cargando...</p>

<p v-if="store.error">Error: {{ store.error }}</p>

<ul>

<!-- COMPLETAR -->

</ul>

</div>

</template>

<script setup>

import { useUserStore } from "@/stores/userStore";

const store = useUserStore();

</script>

Completa el

<ul>

para mostrar:

El nombre de cada usuario

Su email

Usando

v-for

Con una key correcta

3. FILTRADO DINÁMICO EN EL STORE

Modifica el store para añadir:

Un nuevo estado:

search

Un getter llamado

filteredUsers

que devuelva:

Todos los usuarios si

search

está vacío

Solo los usuarios cuyo nombre contenga el texto buscado (sin distinguir mayúsculas/minúsculas)

Escribe únicamente el código del getter.

4. MANEJO AVANZADO DE AXIOS

Añade una mejora a

fetchUsers()

para que:

Si la petición tarda más de 5 segundos, se cancele automáticamente.
