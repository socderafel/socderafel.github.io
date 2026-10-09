---
layout: default
title: "UD6 — Diagramas de comportamiento · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT5 Completa"
prev_url: "../ut04/ut0401.html"
prev_label: "⬅️ 5.1 Diagramas de clase"
next_url: "../ut05/ut0501.html"
next_label: "6.1 Diagramas de casos de uso ➡️"
---

# 📘 UD6 — Diagramas de comportamiento (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**6.1 Diagramas de casos de uso**](./ut0501.md)
- [**6.2 Diagramas de estado**](./ut0502.md)

---

# 6.1 Diagramas de casos de uso

📎 **Material de laboratori (Ejemplo caso de uso 1):** `Captura de pantalla-22 a las 17.20.59.png`

📎 **Material de laboratori (Ejemplo caso de uso 2):** `Captura de pantalla-22 a las 17.58.01.png`

📎 **Material de laboratori (Diagrama de actividades - Compra producto):** `Diagrama de actividades.png`

---

DIAGRAMAS EN UML Use Case Diagrams Use Case Diagrams Diagramas de Casos de Uso Scenario Diagrams Scenario Diagrams Diagramas de Colaboración State Diagrams State Diagrams Diagramas de Componentes Component Diagrams Component Diagrams Diagramas de Distribución State Diagrams State Diagrams Diagramas de Objetos Scenario Diagrams Scenario Diagrams Diagramas de Estados Use Case Diagrams Use Case Diagrams Diagramas de Secuencia State Diagrams State Diagrams Diagramas de Clases Diagramas de Actividad UML

CASOS DE USO

- Para poder dibujar un diagrama de casos de

uso utilizando la notación UML es preciso que entendamos conceptualmente lo que vamos a representar con iconos UML.

- Los casos de uso están íntimamente

relacionados con los requisitos funcionales del sistema.

- Los casos de uso se extraen del documento de

requisitos del sistema.

CASOS DE USO

- En el diagrama de casos de uso no hay que

describir el funcionamiento interno del sistema. Ejemplo Caso de uso: Registrar Venta No hay que describir

- El sistema escribe la venta en un BBDD…

- El sistema genera una sentencia insert…

CASOS DE USO ELEMENTOS Ahora que ya conocemos conceptualmente lo que tenemos que dibujar en el diagrama de casos de uso, veamos los iconos que los representan

- Actor
- Caso de Uso
- Relaciones entre casos de uso

Extiende (extend) – Usa (include)

CASOS DE USO

CASOS DE USO Actores Los actores se representan con el icono de estereotipo estándar para casos de uso (el “stick man” o monigote) con el nombre del actor al pie de la figura. Los nombres de los actores suelen empezar por mayúscula. Actores: – Principales: el objetivo del caso de uso es esencial – Secundarios: interactúan con el caso de uso, pero el objetivo no es esencial.

CASOS DE USO Actores § El actor suele ser una persona, pero se diferencia de un usuario. Ahora vemos cómo… § Un actor representa un cierto papel que distintos usuarios pueden jugar. § El actor sería la clase y el usuario una instancia de la clase..

CASOS DE USO Casos de uso Los casos de uso se representan por una elipse y un nombre, que puede ir dentro o debajo de la elipse. Los casos de uso describen en forma de acciones el comportamiento del sistema, estudiado desde el punto de vista del usuario. Un escenario es una instancia de un caso de uso.

CASOS DE USO Ejemplo Consideremos como sistema un criadero de caballos. La compra de un caballo por parte de un cliente constituye un caso de uso. El comprador del caballo es el actor primario. El actor que registra el certificado de venta es un actor secundario. La compra del caballo Jorgelina constituye un ejemplo de escenario del caso de uso compra de un caballo.

CASOS DE USO

CASOS DE USO § UML define cuatro tipos de relación en los Diagramas de Casos de Uso: – Comunicación: La relación que vincula a un actor con un caso de uso se denomina relación de comunicación. Actor C aso de U so

CASOS DE USO

- Inclusión: Cuando decimos que un caso de uso incluye

a otro indicamos que siempre lo necesita. El usuario puede comprar Un billete de avión Y el usuario puede entrar Al sistema e identificarse Pero no puede terminar La compra sin identificarse

CASOS DE USO

- Extensión: Cuando decimos que un caso de uso extiende

a otro indicamos que opcionalmente lo necesita. Se utiliza cuando se quiere reflejar el comportamiento opcional de un caso de uso. A la hora de adquirir un caballo, el comprador puede examinar su pelaje. Por lo tanto, el caso de uso compra de un caballo puede extenderse con esa verificación.

CASOS DE USO

- Herencia

Es posible especializar un caso de uso en otro. El subcaso hereda las relaciones de comunicación, inclusión y extensión del supercaso de uso. En el diagrama de los casos de uso, la relación de especialización se representa mediante una flecha de especialización idéntica a la que une las subclases con las superclases.

CASOS DE USO

- Ejemplo

El caso de uso compra de un caballo se especializa en dos subcasos: la compra de una yegua o la compra de un semental. La relación de comunicación que existe entre el caso de uso de compra del caballo y el Comprador se hereda en los dos subcasos de uso.

CASOS DE USO

CASOS DE USO

---

# 6.2 Diagramas de estado

U6.2 - Diagrama de estados 1º DAW

Introducción

- Muestra los estados por los que pasa un objeto durante el transcurso

del tiempo.

Introducción

- Los objetos o entidades que involucradas en el proceso de desarrollo

pueden modificar sus estados como respuesta a la ejecución de una acción o evento.

- El diagrama de estados de UML es quien captura cada uno de los

estados de los objetos.

Introducción

Introducción

- Un diagrama de estados captura los cambios de un UN solo objeto.
- Si tenemos varios objetos, necesitamos varios diagramas.
- Uno por objeto.

Introducción

- El diagrama de estado empieza por un círculo relleno inicial y termina

con un círculo doble que denota el estado final

¿Qué necesito?

- Para realizar el diagrama de estados es necesario saber todo el flujo

de datos del programa.

- Diagrama de actividades

Elementos de un diagrama de estados

Elaboración de diagramas de estado

- 1. Identificar los objetos de nuestra aplicación.
- 2. Recordar que se realiza un diagrama por cada objeto.
- 3. Para cada uno de los objetos.
- 3.1. Identificar los estados por los que puede pasar el objeto
- Compra - Registrada, Pendiente de Envío, Enviada, En Camino, Entregada, No_Entregada

Elaboración de diagramas de estado

---
