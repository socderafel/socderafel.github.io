---
layout: default
title: "UT10 — 3rd Quarter — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT10 Completa"
prev_url: "../ut09/ut09actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT9"
next_url: "../ut10/ut1001.html"
next_label: "10.1 Welcome 2nd attempt ➡️"
---

# 📘 UT10 — 3rd Quarter (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**10.1 Welcome 2nd attempt**](#ut1001) (o [obrir en pàgina individual ➡️](./ut1001.md) )
> - [**10.2 3rd quarter exercises**](#ut1002) (o [obrir en pàgina individual ➡️](./ut1002.md) )
> - [**10.3 Laravel ex U6**](#ut1003) (o [obrir en pàgina individual ➡️](./ut1003.md) )

---

## 10.1 Welcome 2nd attempt

DWES - Server-side web development 2nd DAW 2nd attempt 2024

Methodology

- 2 sessions per week.
- Monday 19:25-21:15
- No mandadory activities
- No project
- One exam
- 100% of the mark is the exam

Methodology

- Exam will be on the week of the 3rd of June (day to be confirmed)
- 9 classes until then (total of 18 sessions)
- Equivalent to less than two weeks of regular classes
- Objective of classes is not to re-explain all units (impossible)

Methodology

- Every week a set of topics will be marked and you’ll have to work

them at home and bring doubts to class.

- Class will be used to solve problems encountered when working at

home.

- Available also through email.

Questions

- DWEC + DWES
- Are you sure?
- People with programming problems-> Python course @ SVF
- PFC
- If you are not going to FCT now, you can not present the PFC in June.
- You have NOW (Mar-Jun) a tutor for the PFC
- In Sept-Dec you won’t have a tutor for the PFC.
- In Mar-Jun 25 you’ll have a tutor again.
- Decide yourself.

Questions?

---

## 10.2 3rd quarter exercises

## **1.** Crear un formulario de registro de usuarios básico y sin BD. Los datos ingresados por el usuario se almacenarán en un array asociativo y se mostrarán en una página web diferente mediante una tabla.

El formulario tendrá los campos nombre, correo, contraseña y confirmación de contraseña.

Tras rellenar el formulario, se llamara a otro fichero php que validará los datos y si están OK creará un array asociativo con los datos enviados. Tras crear el array, se recorrerá y se mostrarán estos datos en una tabla.

Recuerda añadir enlaces para volver al volver al formulario original.

Se recomienda utilizar funciones.

**2.**Crear una calculadora de impuestos en PHP que permita a los usuarios ingresar su salario anual y calcule el impuesto sobre la renta según las tasas impositivas vigentes.

Para ello, diseña un formulario con un campo de entrada donde los usuarios puedan ingresar su salario anual.

Tras enviar los datos a otra página, es necesario validar que el valor sea numérico >0 y aplicar las siguientes tasas según el salario

- Hasta 20,000 euros: 10%
- De 20,001 a 50,000 euros: 20%
- Más de 50,000 euros: 30%

Una vez calculado, muestra el resultado por pantalla con un mensaje personalizado.

3.  Crea una clase llamada Producto con los siguientes atributos: id, nombre, precio y stock disponible.
En la clase, implementa un método que se llame actualizarStock donde se le pasa la cantidad vendida y si hay suficiente stock actualiza el stock con el restante y lo indica por pantalla. Si no hay suficiente stock, lanza una excepción por pantalla.
Para probarlo, crea un objeto e intenta actualizar el stock varias veces. Recuerda controlar la excepción.

4. Vamos a automatizar un sistema de gestión de vehículos. Para ello las clases involucradas son: 
- Vehículo: tiene como información el número de ruedas y la marca.
- Automóvil: subtipo de vehículo que además contiene información sobre el número de puertas.
- Moto: subtipo de vehículo que además contiene información sobre el tipo de motor.

Es necesario implementar un método para imprimir toda la información sobre cada tipo de vehículo.
Crea varios tipos de vehículos, inclúyelos en un array y imprime su información mediante un foreach.

5. Create a form for sending your name, a radio button selecting the gender and a set of checkboxes with the favorite meals (pizza, burger, kebab).

The name must have more than 3 chars. If it's correct, show a welcome message with everything and if not, show again the form with the previous value and showing the corresponding error. Only a webpage has to be used.

6. Añade un campo para poder subir una imagen. Si todo está ok, la imagen tiene que ser mostrada en la misma página.

7. Añade un campo de tipo select para poder decidir si mostramos la imagen arriba, abajo, a la izquierda o a la derecha. Este campo debe ser obligatorio y debe funcionar correctamente.

8. Crea un formulario con usuario, contraseña y repetir contraseña. Todos los campos han de ser obligatorios. Además, has de controlar que las contraseñas coinciden, que tienen un largo mayor a 4 y que contienen letras y numeros.

*9. Create
a class named Menu_Item with the following attributes: id, name, color and link. This
class will represent each element of the webpage menu.*

*Create as many
objects as items you need in the menu (home, create, modify) and put them into an associative array
where the key is the id and the value is the whole object. Show them dynamically
in the menu of the webpage.*

*10. Do the exercise Programming in turns (individual).*
$@ASSIGNVIEWBYID*5304615@$

---

## 10.3 Laravel ex U6

DWES – U6

U

Unit 6 Task

Using the LaravelJunio project already created.

- Create a new database named Svf.

### 2. Create a new table from phpMyAdmin with the following attributes: id,

nombreProfesor, departamento. Populate the table with some data.

### 3. Run the migrations

### 4. Add username and usertype to users table and set the project to work

with it.

### 5. Add user registration + authentication to the webpage. Users not

authenticated only have access to the main webpage.

### 6. Create a Model + migration named alumno with the following fields: id,

nombre, apellidos, edad, provincial, curso, caracteristicas

### 7. Using the existing form in the webpage, store data of “alumnos” in the

database.

### 8. In the “alumnos” section, show all the alumnos from the alumnos

database. Add a link at the right of the each alumno which will allow the user to edit the alumno in a new webpage.

### 9. The form to edit the “alumno” will be populated by default and will

validate the data. If everything is OK, it will be updated.

### 10. Create a new section in the webpage to delete an alumno. This webpage

will have a “select” with the names of all the “alumnos” and a button to confirm the deletion.
