---
layout: default
title: "Actividad Práctica ACT203 — 203 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT02"
prev_url: "./act_act202.html"
prev_label: "⬅️ ✏️ ACT202 202"
next_url: "./act_act204.html"
next_label: "✏️ ACT204 204 ➡️"
---

# **Actividad 203**

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `203_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA6: Diseña modelos relacionales normalizados interpretando diagramas entidad/relación.

>   - CE6. d) Se han analizado las relaciones entre las tablas del diseño lógico. (1%)

## **Grado y Correspondencia**

### **Actividad 1**

**Identificar el grado de una relación**

Identifica el **grado** de cada una de las siguientes relaciones indicando si se trata de una relación **unitaria**, **binaria** o **ternaria**.

| Relación | Grado |
| --- | --- |
| Un empleado supervisa a otro empleado. |  |
| Un alumno se matricula en un curso. |  |
| Un médico prescribe un medicamento a un paciente. |  |
| Un producto pertenece a una categoría. |  |
| Una persona está casada con otra persona. |  |
| Un profesor imparte una asignatura en un aula. |  |
| Un departamento controla otro departamento. |  |
| Un conductor conduce un vehículo. |  |

### **Actividad 2**

**Tipo de correspondencia**

Indica el **tipo de correspondencia** que representa cada una de las siguientes relaciones.

Selecciona una de las siguientes opciones:

- **1:1**

- **1:N**

- **N:N**

Indica la correspondencia en estos casos:

1. 

Un país tiene muchas provincias y una provincia pertenece únicamente a un país.

1. 

Un alumno puede matricularse en varias asignaturas y una asignatura puede tener muchos alumnos.

1. 

Un trabajador tiene un único número de la Seguridad Social y cada número pertenece únicamente a un trabajador.

1. 

Un cliente realiza muchos pedidos y cada pedido pertenece únicamente a un cliente.

1. 

Un actor participa en muchas películas y una película tiene muchos actores.

1. 

Un ordenador tiene un único número de serie y dicho número identifica únicamente a ese ordenador.

### **Actividad 3**

**Relaciones ternarias**

Indica cuáles de los siguientes ejemplos requieren realmente una **relación ternaria**.

1. Un profesor pertenece a un departamento.

1. Un médico prescribe un medicamento a un paciente.

1. Un cliente compra productos.

1. Un profesor imparte una asignatura en un aula.

1. Un jugador pertenece a un equipo.

1. Un proveedor suministra un producto a un almacén.

### **Actividad 4**

**¿Qué tipo de relación es?**

Para cada situación indica:

- Grado de la relación.

- Tipo de correspondencia (1:1, 1:N o N:N).

| Situación | Grado | Correspondencia |
| --- | --- | --- |
| Un profesor tutoriza a varios alumnos. |  |  |
| Un empleado sustituye temporalmente a otro empleado. |  |  |
| Un cliente reserva una habitación en un hotel. |  |  |
| Un médico realiza una intervención a un paciente en un quirófano. |  |  |
| Un actor interpreta un personaje en una película. |  |  |
| Un departamento depende de otro departamento. |  |  |

### **Actividad 5**

**Diseña una relación**

Para cada enunciado identifica:

- Las entidades.

- El nombre de la relación.

- El grado.

- El tipo de correspondencia.

**Ejercicio A**: Una empresa asigna vehículos a sus empleados.

**Ejercicio B**: Un alumno realiza un examen de una asignatura.

**Ejercicio C**: Un profesor coordina otro profesor.

**Ejercicio D**: Una empresa vende un producto a un cliente.

**Ejercicio E**: Un entrenador dirige un equipo.

> **📌 Recuerda**
> 

> Para determinar el **grado** de una relación debes contar el número de **entidades diferentes** que participan en ella:

> - **1 entidad → Relación unitaria**

> - **2 entidades → Relación binaria**

> - **3 o más entidades → Relación ternaria o superior**

## **Cardinalidades**

### **Actividad 6**

**Cardinalidades mínimas y máximas**
Completa las **cardinalidades mínimas y máximas** de las siguientes relaciones.

**Caso 1. Cliente - Pedido**

Un cliente puede no realizar ningún pedido, aunque puede realizar muchos.

Cada pedido pertenece obligatoriamente a un único cliente.

```sql
CLIENTE -------- REALIZA -------- PEDIDO
```

Completa:

- Cliente (**,**)

- Pedido (**,**)

<details markdown="1">

<summary>💡 Solució</summary>

Cliente **(0,n)**

Pedido **(1,1)**

</details>

**Caso 2. Empleado - Departamento**

Cada empleado trabaja obligatoriamente en un departamento.

Un departamento puede no tener empleados.

```sql
EMPLEADO ------- TRABAJA ------- DEPARTAMENTO
```

Completa:

- Empleado (**,**)

- Departamento (**,**)

<details markdown="1">

<summary>💡 Solució</summary>

Empleado **(1,1)**

Departamento **(0,n)**

</details>

**Caso 3. Médico - Paciente**

Un médico puede atender muchos pacientes.

Cada paciente tiene asignado exactamente un médico.

Completa las cardinalidades.

<details markdown="1">

<summary>💡 Solució</summary>

Médico **(0,n)**

Paciente **(1,1)**

</details>

**Caso 4. Profesor - Asignatura**

Un profesor puede impartir varias asignaturas.

Cada asignatura debe ser impartida por un profesor.

Completa las cardinalidades.

<details markdown="1">

<summary>💡 Solució</summary>

Profesor **(0,n)**

Asignatura **(1,1)**

</details>

**Caso 5. Libro - Editorial**

Cada libro pertenece a una editorial.

Una editorial publica muchos libros.

### **Actividad 7**

**Interpreta las cardinalidades**

Explica con tus propias palabras qué significan las siguientes cardinalidades.

| Cardinalidad | Significado |
| --- | --- |
| (0,1) |  |
| (1,1) |  |
| (0,n) |  |
| (1,n) |  |

### **Actividad 8**

**Completa la cardinalidad correcta**

Indica qué cardinalidad corresponde a la entidad resaltada.

**Ejercicio 1**

Cada matrícula pertenece a un único alumno.

Un alumno puede tener varias matrículas.

**Alumno:** (**,**)

**Ejercicio 2**

Cada empleado tiene un despacho.

Cada despacho pertenece únicamente a un empleado.

**Empleado:** (**,**)

**Ejercicio 3**

Un cliente puede alquilar varios vehículos.

Cada vehículo puede ser alquilado muchas veces a lo largo de su vida.

**Cliente:** (**,**)

**Vehículo:** (**,**)

**Ejercicio 4**

Cada ordenador pertenece a un aula.

Un aula contiene muchos ordenadores.

**Aula:** (**,**)

## **Dependencia de existencia e identificación**

### **Actividad 9**

**¿Existe dependencia?**

Indica si existe:

- Dependencia de existencia.

- Dependencia de identificación.

- Ninguna de las anteriores.

**Caso A**

Un pedido no puede existir sin el cliente que lo realizó.

Sin embargo, el pedido posee un identificador propio.

**Caso B**

Las líneas de un pedido únicamente existen dentro del pedido y se identifican mediante:

```sql
NúmeroPedido + NúmeroLínea
```

**Caso C**

Las habitaciones de un hotel se identifican mediante:

```sql
CódigoHotel + NúmeroHabitación
```

**Caso D**

Un libro pertenece a una editorial.

El ISBN identifica al libro de forma única.

**Caso E**

Un empleado pertenece a un departamento.

El empleado tiene un código único dentro de toda la empresa.
