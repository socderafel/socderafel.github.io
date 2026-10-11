---
layout: default
title: "Desenvolupament Web en Entorn Client — UD6 UP 06 - DOM avanzado, Pinia y VUE Router"
course_root: ".."
badge: "2n DAW · Grau Superior · UD6"
---

# UD6 — UP 06 - DOM avanzado, Pinia y VUE Router



---

## 📌 6.1 UP06 - Contenidos y RA-CE

UP 06 DOM avanzado, Pinia y VUE Router:

- RA6.a Reconocimiento del DOM

- RA6.b Propiedades y métodos

- RA6.c Acceso al documento desde código

- RA6.d Modificación del documento desde código

- RA6.e Programación de eventos

- RA6.f Compatibilidad - Store Pattern y Pinia

- RA6.g Separacion en capas - VUE Router

---

## 📌 6.2 UP 06 - DOM avanzado, Pinia y VUE Router

Continguts i activitats didàctiques de **UP 06 - DOM avanzado, Pinia y VUE Router**.

---

## 📌 6.3 Actividades repaso:

Actividades Repaso:

---

## 📌 6.4 Actividad repaso Store Pattern: Carrito Compra

A partir de la apliación desarrollada en la UP anterior, adaptala al uso de Store Pattern sin utilizar props ni emits para el paso de la unformación.

Como resumen, aquí estan los componentes que debía tener la aplicación:

App.vue

→ componente padre que mantiene el carrito

ProductList.vue

→ muestra productos y permite añadir al carrito

Cart.vue

→ consulta el carrito del store y muestra sus elementos, permitiendo eliminar items

---

## 📌 6.5 Actividad repaso Pinia: Registro usuario

Transformar la aplicación creada en la unidad anterior para registro de usuario a Pinia. La aplicación tiene tres componentes:

App.vue

→ padre

UserForm.vue

→ formulario con validación

ErrorList.vue

→ consulta los errores y los muestra en pantalla

---

## 📌 6.6 Evaluación:

Evaluación:

---

## 📌 6.7 Ejercicio evaluable Router VUE

Se desea crear una pequeña aplicación web con varias páginas informativas.

La navegación se realizará mediante enlaces y cada página se cargará dinámicamente usando Vue Router.

Requisitos

1. Instalación y configuración del router

Instala

vue-router

Crea el fichero

src/router/index.js

Configura Vue Router con

3 rutas

:

/

→ Home

/about

→ About

/contact

→ Contact

Usa

createWebHistory(import.meta.env.BASE_URL)

2. Integración en la aplicación

Importa el router en

main.js

Usa el router en la creación de la app Vue

3. Componente principal (

App.vue

)

Debe contener un

menú de navegación

El menú tendrá enlaces a:

Inicio

Sobre nosotros

Contacto

Usa

<router-link>

para los enlaces

Usa

<router-view>

para mostrar las vistas

4. Vistas

Crea los siguientes componentes dentro de

views/

:

Home.vue

Debe mostrar un título

<h1>

con el texto:

P

ágina de inicio

About.vue

Debe mostrar un título

<h1>

con el texto:

Sobre

nosotros

Contact.vue

Debe mostrar un título

<h1>

con el texto:

Contacto

Todos los componentes deben usar

<script setup>

.

Criterios de evaluación

| Criterio | Puntos |

| --- | --- |

| Instalación y configuración del router | 3 |

| Definición correcta de rutas | 2 |

| Uso de router-link | 2 |

| Uso de router-view | 2 |

| Estructura del proyecto | 1 |

| TOTAL | 10 |

---

## 📌 6.8 Evaluación RA6.abc

1. Accés i lectura del DOM - RA6.abc

Donada la següent estructura HTML:

<div id="formulari">

<label for="nom">Nom:</label>

<input type="text" id="nom" value="David">

<p class="info">Paràgraf 1</p>

<p class="info">Paràgraf 2</p>

<ul id="llista">

<li class="important">Item 1</li>

<li>Item 2</li>

<li class="important">Item 3</li>

</ul>

</div>

:Es demana

Obtenir

de dues formes diferents

:

l’element amb id

nom

Mostrar per consola:

el valor escrit en l’

<input>

Obtenir:

tots els paràgrafs amb classe

info

Obtenir:

només els

<li>

amb classe

important

2. – Modificació del DOM RA6.d

A partir de l’HTML de l’exercici anterior, escriu el codi JavaScript necessari per a:

Afegir un

nou paràgraf

al final del

<div id="formulari">

amb el text:

Nou

paràgraf afegit amb JavaScript

Afegir un

nou element a la llista

, amb el text:

Item

nou

Aquest element haurà d’afegir-se

com a primer element

de la llista.

Eliminar:

l’últim element

<li>

de la llista

No està permés reconstruir el contingut amb

innerHTML += ...

.

S’ha d’usar

createElement, appendChild, insertBefore o removeChild

.

3. Esdeveniments i delegació - RA6.e

Donada la següent estructura HTML:

<div id="contenidor">

<section>

<h3>Bloc A</h3>

<div>

<p>Element 1</p>

<p>Element 2</p>

</div>

</section>

<section>

<h3>Bloc B</h3>

<div>

<p>Element 3</p>

</div>

</section>

</div>

Es demana implementar la funcionalitat següent:

Quan la pàgina es carregue (

load

):

es mostrarà per consola el missatge:

P

àgina carregada correctament

Quan es faça

doble clic

sobre qualsevol

<p>

:

l’element es mourà automàticament al

bloc contrari

Aquesta funcionalitat ha de funcionar:

de forma indefinida

tant per als elements inicials com per als que es moguen

Obligatori

:

Utilitzar

delegació d’esdeveniments

No afegir listeners individualment a cada

<p>

---

## 📌 6.9 Evaluació RA6.d

1. Accés i lectura del DOM - RA6.abc

Donada la següent estructura HTML:

<div id="formulari">

<label for="nom">Nom:</label>

<input type="text" id="nom" value="David">

<p class="info">Paràgraf 1</p>

<p class="info">Paràgraf 2</p>

<ul id="llista">

<li class="important">Item 1</li>

<li>Item 2</li>

<li class="important">Item 3</li>

</ul>

</div>

:Es demana

Obtenir

de dues formes diferents

:

l’element amb id

nom

Mostrar per consola:

el valor escrit en l’

<input>

Obtenir:

tots els paràgrafs amb classe

info

Obtenir:

només els

<li>

amb classe

important

2. – Modificació del DOM RA6.d

A partir de l’HTML de l’exercici anterior, escriu el codi JavaScript necessari per a:

Afegir un

nou paràgraf

al final del

<div id="formulari">

amb el text:

Nou

paràgraf afegit amb JavaScript

Afegir un

nou element a la llista

, amb el text:

Item

nou

Aquest element haurà d’afegir-se

com a primer element

de la llista.

Eliminar:

l’últim element

<li>

de la llista

No està permés reconstruir el contingut amb

innerHTML += ...

.

S’ha d’usar

createElement, appendChild, insertBefore o removeChild

.

3. Esdeveniments i delegació - RA6.e

Donada la següent estructura HTML:

<div id="contenidor">

<section>

<h3>Bloc A</h3>

<div>

<p>Element 1</p>

<p>Element 2</p>

</div>

</section>

<section>

<h3>Bloc B</h3>

<div>

<p>Element 3</p>

</div>

</section>

</div>

Es demana implementar la funcionalitat següent:

Quan la pàgina es carregue (

load

):

es mostrarà per consola el missatge:

P

àgina carregada correctament

Quan es faça

doble clic

sobre qualsevol

<p>

:

l’element es mourà automàticament al

bloc contrari

Aquesta funcionalitat ha de funcionar:

de forma indefinida

tant per als elements inicials com per als que es moguen

Obligatori

:

Utilitzar

delegació d’esdeveniments

No afegir listeners individualment a cada

<p>

---

## 📌 6.10 Evaluació RA6.e

1. Accés i lectura del DOM - RA6.abc

Donada la següent estructura HTML:

<div id="formulari">

<label for="nom">Nom:</label>

<input type="text" id="nom" value="David">

<p class="info">Paràgraf 1</p>

<p class="info">Paràgraf 2</p>

<ul id="llista">

<li class="important">Item 1</li>

<li>Item 2</li>

<li class="important">Item 3</li>

</ul>

</div>

:Es demana

Obtenir

de dues formes diferents

:

l’element amb id

nom

Mostrar per consola:

el valor escrit en l’

<input>

Obtenir:

tots els paràgrafs amb classe

info

Obtenir:

només els

<li>

amb classe

important

2. – Modificació del DOM RA6.d

A partir de l’HTML de l’exercici anterior, escriu el codi JavaScript necessari per a:

Afegir un

nou paràgraf

al final del

<div id="formulari">

amb el text:

Nou

paràgraf afegit amb JavaScript

Afegir un

nou element a la llista

, amb el text:

Item

nou

Aquest element haurà d’afegir-se

com a primer element

de la llista.

Eliminar:

l’últim element

<li>

de la llista

No està permés reconstruir el contingut amb

innerHTML += ...

.

S’ha d’usar

createElement, appendChild, insertBefore o removeChild

.

3. Esdeveniments i delegació - RA6.e

Donada la següent estructura HTML:

<div id="contenidor">

<section>

<h3>Bloc A</h3>

<div>

<p>Element 1</p>

<p>Element 2</p>

</div>

</section>

<section>

<h3>Bloc B</h3>

<div>

<p>Element 3</p>

</div>

</section>

</div>

Es demana implementar la funcionalitat següent:

Quan la pàgina es carregue (

load

):

es mostrarà per consola el missatge:

P

àgina carregada correctament

Quan es faça

doble clic

sobre qualsevol

<p>

:

l’element es mourà automàticament al

bloc contrari

Aquesta funcionalitat ha de funcionar:

de forma indefinida

tant per als elements inicials com per als que es moguen

Obligatori

:

Utilitzar

delegació d’esdeveniments

No afegir listeners individualment a cada

<p>

---

## 📌 6.11 Evaluación RA6.abcde - Olivia

1. Accés i lectura del DOM - RA6.abc

Donada la següent estructura HTML:

<div id="formulari">

<label for="nom">Nom:</label>

<input type="text" id="nom" value="David">

<p class="info">Paràgraf 1</p>

<p class="info">Paràgraf 2</p>

<ul id="llista">

<li class="important">Item 1</li>

<li>Item 2</li>

<li class="important">Item 3</li>

</ul>

</div>

:Es demana

Obtenir

de dues formes diferents

:

l’element amb id

llista

Mostrar per consola:

el valor escrit en l’

<input>

Obtenir:

tots els li amb classe

important

Obtenir:

només els

<p>

amb classe

info

2. – Modificació del DOM RA6.d

A partir de l’HTML de l’exercici anterior, escriu el codi JavaScript necessari per a:

Afegir un

nou paràgraf

al final del

<div id="formulari">

amb el text:

Nou

paràgraf afegit amb JavaScript

Afegir una

nova llista

, amb dades paregudes a l'anterior i a continuació de la mateixa.

Eliminar:

l’últim element

<li>

de la nova llista creada

No està permés reconstruir el contingut amb

innerHTML += ...

.

S’ha d’usar

createElement, appendChild, insertBefore o removeChild

.

3. Esdeveniments i delegació - RA6.e

Donada la següent estructura HTML:

<div id="contenidor">

<section>

<h3>Paràgraf 1</h3>

<div>

<p>Element 1</p>

<p>Element 2</p>

</div>

</section>

<section>

<h3>Paràgraf 2</h3>

<div>

<p>Element 3</p>

</div>

</section>

</div>

Es demana implementar la funcionalitat següent:

Quan la pàgina es carregue (

load

):

es dispararà un alert indicant que la pàgina s'ha creat.

Quan es faça

doble clic

sobre qualsevol

<p>

:

l’element es mourà automàticament al paràgraf

contrari

Aquesta funcionalitat ha de funcionar:

de forma indefinida

tant per als elements inicials com per als que es moguen

Obligatori

:

Utilitzar

delegació d’esdeveniments

No afegir listeners individualment a cada

<p>

---

## 📌 6.12 Evaluació RA6.f

1 – Store Pattern

Es vol crear una aplicació senzilla que gestione un

missatge compartit

entre components utilitzant el

Store Pattern manual

, sense Pinia.

Crea el fitxer

store.js

que continga:

Un estat reactiu amb:

message

(string)

Dues accions:

setMessage(newValue)

clearMessage()

MessageViewer.vue

Mostra el valor actual del missatge compartit

Si el missatge està buit, mostrar:

No hi ha

cap

missatge

MessageControls.vue

Conté:

un

<input>

per escriure un missatge

un botó

“Guardar missatge”

un botó

“Borrar missatge”

Els botons han d’utilitzar les

accions del store

2 – Pinia

Es vol crear una aplicació que gestione un

comptador global

utilitzant

Pinia

.

Crea el store

counter.js

amb:

State

count

(number, inicialment 0)

Actions

increment()

decrement()

reset()

Getter

status

retorna:

"Negatiu"

si

count < 0

"Zero"

si

count === 0

"Positiu"

si

count > 0

CounterDisplay.vue

Mostra:

el valor del comptador

el valor del getter

status

CounterButtons.vue

Conté tres botons:

+

–

Reset

Cada botó ha de cridar una

acció del store

---

## 📌 6.13 Evaluación RA6.f - Sergio

1. Store Pattern

Es vol crear una miniaplicació que gestione un

tema global (clar/fosc)

compartit entre components, utilitzant un store manual.

storeTheme.js

Crea

storeTheme.js

amb:

Estat reactiu:

theme

(string) → valors possibles:

"light"

o

"dark"

(inicialment

"light"

)

Accions:

toggleTheme()

→ alterna entre

"light"

i

"dark"

setTheme(value)

→ estableix el tema si

value

és

"light"

o

"dark"

(si no, no fa res)

ThemeIndicator.vue

Component que:

Mostra el tema actual amb el text:

Tema actual: LIGHT

o

Tema actual: DARK

Mostra una pista extra segons el tema:

Si és

"light"

:

“Mode lectura”

Si és

"dark"

:

“Mode nocturn”

(Tot el text ha de vindre de l’estat del store.)

ThemeToolbar.vue

Component que conté:

Un botó

“Canviar tema”

→ crida

toggleTheme()

Dos botons:

“Light”

i

“Dark”

→ criden

setTheme("light")

i

setTheme("dark")

El botó del tema actiu ha d’aparéixer

deshabilitat

(disabled)

El component

App.vue

ha d’aplicar una classe al contenidor principal:

class="app light"

si el tema és

"light"

class="app dark"

si el tema és

"dark"

2. Pinia

Converteix el projecte anterior a Pinia

---

## 📌 6.14 Evaluació RA6.g

Muntar una mini web SPA amb Vue Router. No cal crear components: ja estan preparats.

Crear i configurar el router

Crea el fitxer: src/router/index.js

Configura aquestes rutes:

/home

/menu

/events

/user/:id (utilizants props)

/:pathMatch(.*)* (NotFound)

2. Configura App.vue d'aquesta forma:

Crea un layout simple amb:

un header amb títol (pots posar “Mini web”)

un menú amb router-link a: Inici (/),  Menú (/menu), Esdeveniments (/events), Usuari 1 (/user/1), Usuari 2 (/user/2)

un <router-view /> per mostrar les vistes
