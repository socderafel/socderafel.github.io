---
layout: default
title: "UT5 — Diagramas de comportamiento — Entorns de Desenvolupament | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT5 Completa"
prev_url: "../ut04/ut04actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT4"
next_url: "../ut05/ut0501.html"
next_label: "5.1 Diagramas de casos de uso ➡️"
---

# 📘 UT5 — Diagramas de comportamiento (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**5.1 Diagramas de casos de uso**](#ut0501) (o [obrir en pàgina individual ➡️](./ut0501.md) )
> - [**5.2 U6.2 - Diagramas de estado**](#ut0502) (o [obrir en pàgina individual ➡️](./ut0502.md) )
> - [**5.3 Actividades de clase**](#ut0503) (o [obrir en pàgina individual ➡️](./ut0503.md) )
> - [**✍️ Activitats pràctiques UT5**](#ut05actividades) (o [obrir en pàgina individual ➡️](./ut05actividades.md) )

---

## 5.1 Diagramas de casos de uso

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

## 5.2 U6.2 - Diagramas de estado

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

## 5.3 Actividades de clase

1. Sobre el ejemplo de casos de uso 1 obtén

a) La función del sistema.

b) Los actores primarios y secundarios que intervienen.

c) Los casos de uso que intervienen.

d) Las relaciones entre ambos.

2. Realiza lo mismo sobre el ejemplo de casos de uso 2.

---

## ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — U6 A1**
> Unidad 4 – Testing y debugging
>
> U6 – A1
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - Puedes hacerlo a mano o con alguna herramienta.
>
> ### 1. Se pretende realizar un sistema que gestione una biblioteca, de manera que
>
> el usuario de la biblioteca pueda reservar libros, devolverlos, y realizar préstamos (que pueden ser libros o revistas). Siempre que se quiera reservar un libro o realizar un préstamo cualquiera será necesario que el usuario se identifique. Cuando un usuario realiza el préstamo de un libro puede, si lo desea, consultar el ISBN, y cuando realiza el préstamo de una revista, consultar la fecha de publicación.
>
> El encargado de la biblioteca será el encargado de dar de alta y de baja a los usuarios, y también de actualizar el catálogo de libros. Realice el diagrama de Casos de Uso correspondiente.

> **✍️ Activitat Pràctica 5.2 — U6 A2**
> Unidad 4 – Testing y debugging
>
> U6 – A2
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - Puedes hacerlo a mano o con alguna herramienta.
>
> ### 1. Se quiere llevar a cabo la gestión de una inmobiliaria mediante un sistema,
>
> para ello deberemos conocer la siguiente información. El comprador debe poder consultar los inmuebles que están disponibles, y si lo desea, consultar el número de referencia de los mismos, así como la ubicación y el precio. También el usuario debe tener la posibilidad de realizar la reserva de un inmueble. Los inmuebles pueden ser de cuatro tipos: local comercial, piso de finca, casa de campo o apartamento en la playa. Tenga en cuenta que, para poder reservar un inmueble deberá registrarse en el sistema. Por otra parte, el usuario puede, si lo considera, realizar el seguimiento de la reserva.
>
> El gestor de la inmobiliaria, por su parte, es el encargado de dar de alta y dar de baja a los usuarios. Debe también actualizar el catálogo de inmuebles, y por último debe proporcionar información sobre la reserva. Realice el diagrama de Casos de Uso correspondiente.

> **✍️ Activitat Pràctica 5.3 — U6 A3**
> Unidad 6 – Casos de uso
>
> U6 – A3
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - Puedes hacerlo a mano o con alguna herramienta.
>
> ### 1. Un hipódromo ofrece a sus clientes la posibilidad de asistir a las carreras y de
>
> realizar apuestas. Teniendo en cuenta que los intervinientes en estos servicios son los clientes que pueden ser espectadores o apostadores. Se debe considerar que la carrera puede ser de dos tipos, de trote o de obstáculos, y para que un cliente pueda asistir a una carrera es necesario comprar el tique, y si lo desea, puede pedir factura.
>
> Por otra parte, los que quieran apostar deben tener la posibilidad de hacerlo, pero están obligados a firmar los papeles de la apuesta. Construye el diagrama de Casos de Uso correspondiente.
>
> ### 2. Se quiere desarrollar un software de procesamiento de compra de productos
>
> online de una farmacia. Los clientes compran los productos, que pueden ser de farmacia o de parafarmacia, y siempre deben identificarse, y realizar el pago correspondiente. Es indispensable, por otra parte, que el usuario seleccione la cantidad de productos que quiere comprar. Si lo desea, tiene la posibilidad de consultar la descripción del producto y de emitir una valoración sobre el producto.
>
> El farmacéutico es el encargado de publicar el catálogo y procesar la orden de compra, y será obligatorio enviar los productos a los clientes a través de una empresa de mensajería externa. Realice el diagrama de Casos de Uso correspondiente.

> **✍️ Activitat Pràctica 5.4 — U6 A4**
> Unidad 6 – Casos de uso
>
> U6 – A4
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - Puedes hacerlo a mano o con alguna herramienta.
>
> ### 1. Se desea llevar a cabo la gestión de una protectora. La información que se
>
> nos brinda para diseñar el Diagrama de Casos de Uso la describimos a continuación. El usuario de la protectora podrá consultar los perros que están disponibles para ser adoptados. El usuario también tendrá la posibilidad de solicitar la adopción de un perro, y si es de su interés, en la solicitud podrá consultar la edad, la raza y el sexo, pero será obligatorio que compruebe las vacunas y los cuidados especiales (si los tuviere).
>
> La solicitud de la adopción de un perro puede ser de dos tipos: de cachorro o de adulto. Si solicita la adopción de un cachorro será indispensable que el usuario dé información acerca del domicilio donde residirá el mismo. Por otra parte, el usuario puede solicitar la acogida de un perro por parte de la protectora, en este caso será necesario proporcionar la información correspondiente sobre la edad, la raza, el sexo y las vacunas.
>
> El responsable de la protectora se encargará de proporcionar información sobre los perros, tramitar las solicitudes de adopción y las solicitudes de acogida, y también de actualizar el listado de perros disponibles para su adopción.
>
> Unidad 6 – Casos de uso
>
> ### 2. Interpreta el siguiente diagrama de casos de uso
