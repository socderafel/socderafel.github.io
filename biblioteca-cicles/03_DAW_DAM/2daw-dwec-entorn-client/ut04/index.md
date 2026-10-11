---
layout: default
title: "Desenvolupament Web en Entorn Client — UD4 UP 04 Funciones, arrays, POO y componentes"
course_root: ".."
badge: "2n DAW · Grau Superior · UD4"
---

# UD4 — UP 04 Funciones, arrays, POO y componentes



---

## 📌 4.1 UP04 - Contenidos y RA-CE

UP 04 Funciones, arrays, POO y componentes:

- RA4.a Funciones predefinidas.

- RA4.b Definición de funciones y componentes básicos.

- RA4.c/d Arrays.

- RA4.e Programación funcional.

- RA4.f Características de la POO.

- RA4.g Definición de objetos.

- RA4.h Métodos de objetos.

- RA4.i Uso de objetos y componentes.

- RA4.j Patrones de diseño.

- RA4.k Uso de Vue-cli. Depuración.

---

## 📌 4.2 UP 04 - Funciones, arrays, POO y componentes

Continguts i activitats didàctiques de **UP 04 - Funciones, arrays, POO y componentes**.

---

## 📌 4.3 Píldora Teórica UP 04

https://youtu.be/dJ8DpYqf6ZY

https://youtu.be/dJ8DpYqf6ZY

---

## 📌 4.4 Actividades repaso:

Actividades Repaso:

---

## 📌 4.5 Evaluación:

Evaluación:

---

## 📌 4.6 Evaluación RA4.ijk

Transformar un pequeño programa HTML y JavaScript en una aplicació Vue amb tres components:

App.vue

→ component principal que conté

<Counter />

Counter.vue

→ component que mostra els botons i el número

Message.vue

→ component que mostra el missatge (rep com a

prop

el text del missatge)

Crea un

nou projecte Vue amb Vite

i transforma el següent codi HTML i JS perquè funcione amb components Vue:

HTML original

<!DOCTYPE html>

<html lang="ca">

<head>

<meta charset="UTF-8">

<title>Comptador</title>

<style>

body { font-family: Arial; text-align: center; margin-top: 50px; }

button { font-size: 1.2em; margin: 5px; }

</style>

</head>

<body>

<h1 id="title">Comptador simple</h1>

<p id="message"></p>

<div>

<button id="add">Sumar</button>

<button id="subtract">Restar</button>

</div>

<p id="count">0</p>

<script src="main.js"></script>

</body>

</html>

JS original (

main.js

)

let count = 0

const message = document.getElementById('message')

const countDisplay = document.getElementById('count')

const addBtn = document.getElementById('add')

const subBtn = document.getElementById('subtract')

function updateMessage() {

if (count > 5) message.textContent = "Ja n’hi ha prou!"

else if (count < 0) message.textContent = "Compte, vas per baix de zero!"

else message.textContent = ""

}

addBtn.addEventListener('click', () => {

count++

countDisplay.textContent = count

updateMessage()

})

subBtn.addEventListener('click', () => {

count--

countDisplay.textContent = count

updateMessage()

})
