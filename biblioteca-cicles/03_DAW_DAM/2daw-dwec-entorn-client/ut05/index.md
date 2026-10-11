---
layout: default
title: "Desenvolupament Web en Entorn Client — UD5 UP 05 - Eventos y validaciones"
course_root: ".."
badge: "2n DAW · Grau Superior · UD5"
---

# UD5 — UP 05 - Eventos y validaciones



---

## 📌 5.1 UP05 - Contenidos y RA-CE

UP 05 Eventos y validaciones:

- RA5.a – Tipos de eventos

- RA5.b – Captura de eventos

- RA5.c – Propagación

- RA5.d – Prevención de acciones

- RA5.e – Formularios

- RA5.f – Validaciones

- RA5.g – Expresiones regulares

- RA5.h – Pruebas y documentación

---

## 📌 5.2 UP 05 - Eventos y validaciones

Continguts i activitats didàctiques de **UP 05 - Eventos y validaciones**.

---

## 📌 5.3 Actividades repaso:

Actividades Repaso:

---

## 📌 5.4 Actividades repaso Componentes II: Reloj

Convierte este reloj digital hecho con JavaScript puro en una aplicación Vue con

2 componentes

:

App.vue

→ componente principal

Clock.vue

→ componente que muestra la hora y se actualiza cada segundo

Transformar este código en:

App.vue

Simplement muestra

<Clock />

Clock.vue

Tendra una variable reactiva

hora

Actualitzará la hora cada segundo con

setInterval

Mostrará la hora en formato

HH:MM:SS

No utilizará computed, solo una función normal

formatearHora()

HTML - JS

<h1>Reloj digital</h1>

<p id="hora"></p>

<script>

function actualizar() {

const ahora = new Date();

const h = ahora.getHours().toString().padStart(2, '0');

const m = ahora.getMinutes().toString().padStart(2, '0');

const s = ahora.getSeconds().toString().padStart(2, '0');

document.getElementById('hora').textContent = `${h}:${m}:${s}`;

}

setInterval(actualizar, 1000);

actualizar();

</script>

---

## 📌 5.5 Actividad repaso Emits - Props I: Carrito Compra

Crear una aplicación en Vue 3 que simule un

carrito de compra

básico.. Estará formada por

tres componentes

que se comuniquen entre sí:

App.vue

→ componente padre que mantiene el carrito

ProductList.vue

→ muestra productos y

emite un evento

cuando se añade uno al carrito

Cart.vue

→ recibe el carrito vía

props

y muestra sus elementos, permitiendo eliminar items mediante un emit

La aplicación tendrá los siguientes requisitos:

App.vue

Mantendrá un array reactivo

cart

Pasará una lista fija de productos a

<ProductList/>

como prop

Escuchará el evento

add-to-cart

emitido por

<ProductList/>

Pasará el carrito a

<Cart/>

como prop

Escuchará el evento

remove-from-cart

emitido desde

<Cart/>

ProductList.vue

Recibirá mediante

props

un array

products

(nombre + precio)

Mostrará cada producto en una tarjeta o

<li>

Cada producto tendrá un botón

"Añadir al carrito"

Al pulsarlo, debe emitir el evento: emit('add-to-cart', producto)

Cart.vue

Recibirá mediante

props

:

un array

cart

Mostrará los productos añadidos al carrito

Cada producto tendrá un botón ❌

Al pulsarlo, emitirá: emit('remove-from-cart', index)

---

## 📌 5.6 Actividad repaso Emits - Props II: Registro usuario

Crear una aplicación Vue que permita registrar un usuario mediante un formulario validado.

Intervienen tres componentes:

App.vue

→ padre, recoge los datos correctamente validados

UserForm.vue

→ formulario con validación y evento

submit-user

ErrorList.vue

→ recibe errores mediante

props

y los muestra en pantalla

El formulario deberá validar los campos y, si todo es correcto, enviará los datos al componente padre mediante un evento personalizado.

La aplicación tendrá los siguientes requisitos:

App.vue

Contendrá una variable reactiva

registeredUsers

Mostrará el componente

<UserForm/>

Recibirá el evento

submit-user

desde

<UserForm/>

Guardará los datos recibidos en

registeredUsers

Debajo del formulario, mostrará la lista de usuarios registrados

UserForm.vue

Debe contener un formulario con estos campos:

Nombre

(mínimo 3 caracteres)

Email

(debe cumplir una expresión regular simple)

Edad

(número ≥ 18)

El formulario debe:

Validar los tres campos

Generar una lista de errores

Emitir el evento

submit-user

enviando un objeto:

{ name, email, age }

Si hay errores:

no emitir nada

enviar la lista de errores al componente hijo

<ErrorList/>

ErrorList.vue

Recibirá una

prop

llamada

errors

(array de strings)

Mostrará cada error como un

<li>

Solo aparecerá si hay al menos un error (usar

v-if="errors.length > 0"

)

---

## 📌 5.7 Evaluación:

Evaluación:

---

## 📌 5.8 Evaluació RA5.defgh

Desarrollar una aplicación Vue que permita

reservar una cita

en un centro de atención.

La aplicación debe tener

tres componentes

:

App.vue

→ Padre que controla las citas registradas

ReservationForm.vue

→ Formulario con validación que emite la cita al padre

Summary.vue

→ Recibe citas como

props

y muestra un resumen

ErrorList.vue

→ Muestra si hay errores de validación

App.vue

Debe contener un array reactivo

appointments

Debe mostrar el componente

<ReservationForm />

Debe escuchar el evento personalizado: @send-appointment="addAppointment"

El método

addAppointment()

añadirá la cita al array

Debajo debe aparecer el componente

<Summary />

, recibiendo la lista de citas como

prop

ReservationForm.vue

Debe contener un formulario con los campos:

Nombre mínimo 3 caracteres

Email debe cumplir un regex

Fecha de la cita no puede ser anterior a hoy

Si hay errores → NO se emitirá ningún evento

Se mostrará un componente <ErrorList /> con la lista de errores

Si todo es correcto → se emitirá: emit("send-appointment", appointmentObject)

El objeto enviado debe tener esta forma:

{

name: "...",

email: "...",

date: "...",

}

Después de emitir la cita correcta:

El formulario debe reiniciarse

La lista de errores debe vaciarse

Summary.vue

Recibirá mediante props un array appointments

Mostrará una tabla o lista con todas las citas registradas

Si no hay citas, mostrará:

No hay citas registradas todavía.

---

## 📌 5.9 Evaluació Alan

Se desea crear una pequeña aplicación Vue para

registrar incidencias técnicas

en un centro educativo.

Cada incidencia tendrá:

Título

Aula

Prioridad

Descripción

La aplicación estará dividida en

componentes

y usará

props, emits y validación

.

App.vue

components/

├── IncidentForm.vue

├── IncidentList.vue

App.vue

Debe:

Mantener un array reactivo

incidents

Mostrar el componente

<IncidentForm />

Escuchar el evento personalizado:

@add

-incident

=

"addIncident"

Añadir la incidencia recibida al array

Pasar el array de incidencias al componente

<IncidentList />

mediante

props

IncidentForm.vue

Debe contener un

formulario con validación

.

| Campo | Validación |

| --- | --- |

| Título | mínimo 5 caracteres |

| Aula | obligatorio |

| Prioridad | obligatoria (baja, media, alta) |

| Descripción | mínimo 10 caracteres |

Validar los campos

en JavaScript

Si hay errores:

NO emitir ningún evento

Si todo es correcto:

Emitir el evento:

emit

('add-incident', incidentObject)

Limpiar el formulario

IncidentList.vue

Debe:

Recibir por

props

el array

incidents

Mostrar cada incidencia en una lista
