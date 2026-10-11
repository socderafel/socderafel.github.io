---
layout: default
title: "Desenvolupament Web en Entorn Client — UD3 UP 03 Objetos nativos, DOM básico e introducción a Vue.JS"
course_root: ".."
badge: "2n DAW · Grau Superior · UD3"
---

# UD3 — UP 03 Objetos nativos, DOM básico e introducción a Vue.JS



---

## 📌 3.1 UP03 - Contenidos y RA-CA

UP 03 Objetos nativos, DOM básico e introducción a Vue.JS:

- RA3.a Objetos nativos e introducción a Vue.JS

- RA3.b Propiedades y métodos. Directivas básicas en Vue

- RA3.c Cambio de aspecto del documento

- RA3.d Creación de elementos

- RA3.e Interacción con el usuario

- RA3.f Múltiples ventanas

- RA3.g Almacenamiento

- RA3.h Depuración

---

## 📌 3.2 UP 03 - Objetos nativos, DOM básico e introducción a Vue.JS

Continguts i activitats didàctiques de **UP 03 - Objetos nativos, DOM básico e introducción a Vue.JS**.

---

## 📌 3.3 Píldora Teórica UP 03

https://youtu.be/rqXABVvekhU

https://youtu.be/zePK0YSZUYA

---

## 📌 3.4 Actividades repaso:

Actividades Repaso:

---

## 📌 3.5 Ejercicio básico VUE.Js

Crea un

archivo HTML

y vincula Vue 3 mediante CDN.

Dentro del

<body>

crea un

div con id="app"

, que contendrá:

Un

párrafo

que muestre el valor de una variable

message

usando

{{ message }}

.

Un

input

que permita modificar

message

usando

v-model

.

Un

botón

que muestre u oculte un saludo.

El saludo debe ser un

párrafo

que solo se vea si una variable booleana

visible

es

true

(usa

v-if

o

v-show

).

El texto del botón debe cambiar según el estado de la variable (

Mostrar saludo

/

Ocultar saludo

) usando

{{ }}

.

Un

span

con un

title

dinámico que muestre un tooltip, controlado por una variable

tooltip

usando

v-bind:title

.

Crea un

archivo JS

donde inicialices la app con Vue 3 (

createApp

) usando el

API Composition

:

Define las variables reactivas necesarias (

message

,

visible

,

tooltip

).

Crea una función

toggleVisible

que cambie el valor de

visible

al hacer clic en el botón.

Funcionalidad extra

Añadir un

checkbox

que controle el saludo con

v-show

.

Añadir un

input de color

que cambie el color del saludo dinámicamente usando

v-bind:style

.

Añadir otro botón que cambie el texto del tooltip.

---

## 📌 3.6 Actividades repaso DOM básico

Bloque 1: Manipulación del DOM

1. Cambiar el contenido de un elemento

Crea un botón con el texto

“Cambiar título”

.

Cuando el usuario haga clic, el texto del elemento

<h1>

de la página debe cambiar por “Título actualizado con JavaScript”.

2. Añadir y eliminar elementos dinámicamente

Haz que al pulsar un botón

“Añadir elemento”

, se cree un nuevo

<li>

dentro de una lista

<ul>

.

Añade otro botón

“Borrar último”

que elimine el último elemento de la lista.

3. Manipulación de la ventana

Crea una página web que muestre información sobre la ventana del navegador utilizando propiedades del objeto

window

.

Al hacer clic en un botón, se deben mostrar en pantalla (dentro de un

<div>

) los siguientes datos:

Ancho y alto interior de la ventana (

innerWidth

,

innerHeight

).

URL actual (

location.href

).

Si las cookies están habilitadas (

navigator.cookieEnabled

).

El nombre y versión del navegador (

navigator.userAgent

).

4. Mostrar/Ocultar elementos

Crea un párrafo de texto y un botón que diga

“Mostrar/Ocultar”

.

Cuando el usuario haga clic, el párrafo debe alternar entre visible e invisible.

Bloque 2: Comunicación entre ventanas

5. Abrir una ventana y enviarle datos

Desde la ventana principal, crea un botón que abra una nueva ventana (

window.open()

) y le envíe un mensaje con

window.postMessage()

.

La ventana secundaria debe mostrar ese mensaje dentro de un

<div>

.

6. Comunicación inversa (ventana hija → ventana padre)

En la ventana hija, crea un formulario con un campo de texto y un botón

“Enviar al padre”

.

Al pulsarlo, se debe enviar el valor al

window.opener

para que se muestre en el documento de la ventana principal.

7. Validación entre ventanas

La ventana principal abre una ventana secundaria donde se introduce un nombre de usuario.

Cuando se pulse “Aceptar”, la ventana secundaria envía el nombre al padre, que lo muestra en pantalla.

Si el campo está vacío, la hija debe mostrar un aviso sin cerrar la ventana.

Bloque 3: Almacenamiento con LocalStorage

8. Guardar un contador de visitas

Crea una página que use

localStorage

para contar cuántas veces se ha visitado.

Cada vez que el usuario recargue, debe aumentar el contador y mostrarse en pantalla.

9. Guardar y recuperar el tema (modo claro/oscuro)

Haz una página con un botón que permita cambiar entre

modo claro

y

modo oscuro

.

Guarda la preferencia del usuario en

localStorage

y aplícala automáticamente al recargar la página.

10. Lista persistente de tareas

Crea una pequeña lista de tareas con un campo de texto y un botón

“Añadir”

.

Las tareas deben guardarse en

localStorage

, de modo que permanezcan al cerrar y volver a abrir la página.

---

## 📌 3.7 Evaluación:

Evaluación:

---

## 📌 3.8 Prueba de Aula - RA3.a - RA3.b

Continguts i activitats didàctiques de **Prueba de Aula - RA3.a - RA3.b**.

---

## 📌 3.9 Evaluación Examen RA3.cde

Continguts i activitats didàctiques de **Evaluación Examen RA3.cde**.

---

## 📌 3.10 Evaluación Examen RA3.f

Continguts i activitats didàctiques de **Evaluación Examen RA3.f**.

---

## 📌 3.11 Evaluación Examen RA3.gh

Continguts i activitats didàctiques de **Evaluación Examen RA3.gh**.
