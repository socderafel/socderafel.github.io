---
layout: default
title: "Simulacro práctico UT5 — Programació (1r DAW)"
course_root: ".."
badge: "2a / 3a Avaluació · RA7 · Herència, Classes Abstractes, Interfícies i Polimorfisme"
prev_url: "../ut05/ut05retos.html"
prev_label: "⬅️ Retos de programación UT5"
next_url: "../ut05/ut05pi.html"
next_label: "Proyecto Intermodular UT5 ➡️"
---

# UT5 - Simulacro examen

### **Sistema de Personajes Pixar/Disney**

1. Crear una clase abstracta `PersonajeDisney` que represente cualquier personaje del universo Disney.
  - Sus atributos son: `nombre` , `edad` , `pelicula` .
  - Los métodos:
    - `void mostrar()` → muestra por pantalla todos los datos del personaje.
    - `void cumplirAnios()` → incrementa la edad en 1.
    - `abstract void hablar()`
2. Implementa una interfaz `Aventurero` , que contendrá el método `void explorar()` .

---

**Clases que heredan de `PersonajeDisney`:**

1. Crea la clase `Woody` con:
  - Atributos: si es o no Lider en la película.
  - Métodos:
    - `void hablar()` → Imprime el texto *'¡Al infinito y más allá… bueno, casi!'* .
    - `void mostrar()` → Incluye los nuevos atributos de la clase. Además muestra el resultado del método `hablar()` .
2. Crea la clase `Nemo` con:
  - Atributos: si tiene o no una aleta pequeña.
  - Métodos:
    - `void hablar()` → Imprime el texto *'Papá'* .
    - `void mostrar()` → Incluye los nuevos atributos de la clase. Además muestra el resultado del método `hablar()` .

---

**Clases que heredan de `PersonajeDisney` e implementan `Aventurero`:**

1. Crea la clase `BuzzLightyear` con:
  - Atributos: si contiene o no el modo espacial.
  - Métodos:
    - `void hablar()` → Imprime el texto *'¡Soy Buzz Lightyear, guardián espacial!'* .
    - `void explorar()` → Imprime el texto *'Buzz explora el espacio en su nave.'* .
    - `void mostrar()` → Incluye los nuevos atributos de la clase. Además muestra los resultados de los métodos `hablar()` y `explorar()` .
2. Crea la clase `Dory` con:
  - Atributos: si tiene o no memoria.
  - Métodos:
    - `void hablar()` → Imprime el texto *'Sigue nadando, sigue nadando…'* .
    - `void explorar()` → Imprime el texto *'Dory explora el océano buscando respuestas.'* .
    - `void mostrar()` → Incluye los nuevos atributos de la clase. Además muestra los resultados de los métodos `hablar()` y `explorar()` .

---

**Clase `Test`**

1. Crear un ArrayList de personajes de Disney y añadir un objeto de cada tipo.
2. Recorrer la lista y llamar al método `mostrar()` de cada objeto.

---

**El diagrama UML sería:**

![Diagrama Marvel](../img/ut05/simulacro.svg)

> **⚠️ OJO!**
> No olvides crear los constructores, getters y setters necesarios en cada clase.
