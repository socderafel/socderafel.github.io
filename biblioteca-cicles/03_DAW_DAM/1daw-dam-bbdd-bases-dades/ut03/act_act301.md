---
layout: default
title: "Actividad Práctica ACT301 — 301 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT03"
prev_url: "./ut0308.html"
prev_label: "⬅️ 3.8 Otras formas normales: FNBC, 4FN y 5FN"
next_url: "./act_act302.html"
next_label: "✏️ ACT302 302 ➡️"
---

# **Actividad 301**

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `301_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA6: Diseña modelos relacionales normalizados interpretando diagramas entidad/relación.

>   - CE6. b) Se han identificado las tablas del diseño lógico. (5%)

>   - CE6. c) Se han identificado los campos que forman parte de las tablas del diseño lógico. (5%)

>   - CE6. e) Se han identificado los campos clave. (5%)

>   - CE6. f) Se han aplicado reglas de integridad. (5%)

>   - CE6. h) Se han analizado y documentado las restricciones que no pueden plasmarse en el diseño lógico. (5%)

> **📌 Recuerda**
> 

> Debes obtener el **esquema relacional** (tablas con sus atributos) indicando para cada una:

> - **CP**: clave primaria.

> - **CAlt**: claves alternativas, si existen.

> - **CAj**: claves ajenas, indicando la tabla a la que referencian.

> - **VNN**: atributos que no pueden ser nulos.

## **Ejercicio 1**

**ARTÍCULOS Y ENCARGOS**

Una base de datos para una pequeña empresa debe contener información acerca de clientes, artículos y pedidos. Hasta el momento se registran los siguientes datos en documentos varios:

- Para cada **cliente**: Número de cliente (único), Nombre, NIF, Direcciones de envío (varias por cliente), Saldo, Límite de crédito (depende del cliente, pero en ningún caso debe superar los 18.000 €), Descuento.

- Para cada **artículo**: Número de artículo (único), Fábricas que lo distribuyen, Existencias de ese artículo en cada fábrica, Descripción del artículo.

- Para cada **pedido**: Cada pedido tiene una cabecera y el cuerpo del pedido. La cabecera está formada por el número de cliente, dirección de envío y fecha del pedido. El cuerpo del pedido son varias líneas, en cada línea se especifican el número del artículo pedido y la cantidad.

Además, se ha determinado que se debe almacenar la información de las **fábricas**. Sin embargo, dado el uso de distribuidores, se usará: Número de la fábrica (único), Nombre y Teléfono de contacto. Y se desean ver cuántos artículos (en total) provee la fábrica. También, por información estratégica, se podría incluir información de fábricas alternativas respecto de las que ya fabrican artículos para esta empresa.

> **📌 Nota**
> 

> Una dirección se entenderá como **Calle, Número, Puerta, CP y Localidad**. Una fecha incluye **día, mes, año y hora**.

**Se pide:** obtener el modelo relacional de la base de datos.

## **Ejercicio 2**

**CASAS DE COLONIAS**

a) Cada casa de colonias tiene un **nombre** que la identifica. Se desea saber de cada una, aparte del nombre, la **capacidad** (el número de niños que se pueden alojar en cada una como máximo), la **comarca** donde está situada y las **ofertas de actividades** que proporciona. Una casa puede ofrecer actividades como por ejemplo natación, esquí, remo, pintura, fotografía, música, etc.

b) Es necesario tener en cuenta que en una casa de colonias se pueden practicar **varias actividades** (de hecho, cada casa debe ofrecer como mínimo una), y también puede ocurrir que una misma actividad se pueda llevar a cabo en varias casas. Sin embargo, toda actividad que se registre en la base de datos debe ser ofertada como mínimo en una de las casas.

c) Interesa tener una **evaluación de las ofertas de actividades** que proporcionan las casas. Se asigna una calificación numérica que indica el nivel de calidad que tiene cada una de las actividades ofertadas.

d) Las casas de colonias **alojan niños** que se han inscrito para pasar en ellas unas pequeñas vacaciones. Se quiere tener constancia de los niños que se alojan en cada una de las casas en el momento actual. Se debe suponer que hay casas que están vacías (en las que no se aloja ningún niño) durante algunas temporadas.

e) De los niños que se alojan actualmente en alguna de las casas, interesa conocer un **código** que se les asigna para identificarlos, su **nombre**, su **apellido**, el **número de teléfono de sus padres** y su **comarca de residencia**.

f) De las **comarcas** donde hay casas o bien donde residen niños, se quiere tener registrados la **superficie** y el **número de habitantes**. Se debe considerar que puede haber comarcas donde no reside ninguno de los niños que se alojan en un momento determinado en las casas de colonias, y comarcas que no disponen de ninguna casa.

> **📌 Nota**
> 

> Es posible, por ejemplo, que una actividad como el esquí tenga una calificación de 10 en la oferta de la casa Grévol, y que la misma actividad tenga una calificación de 8 en la casa Ardilla.

**Se pide:** obtener el modelo relacional de la base de datos.

## **Ejercicio 3**

**TRANSPORTE**

Se desea mecanizar la gestión de una empresa de transportes que reparte paquetes por toda España. Los encargados de llevar los paquetes son los **camioneros** de los que se quiere guardar el DNI, nombre, teléfono, dirección, salario y localidad donde reside.

De los **paquetes** transportados interesa conocer el código de paquete, descripción, destinatario, y dirección del destinatario. Un camionero distribuye muchos paquetes y un paquete sólo puede ser distribuido por un camionero.

De las **provincias** a las que llegan los paquetes interesa guardar el código de provincia, y el nombre. Un paquete sólo puede llegar a una provincia, sin embargo, a una provincia pueden llegar muchos paquetes.

De los **camiones** que llevan los camioneros interesa conocer la matrícula, modelo, tipo y potencia. Un camionero puede conducir diferentes camiones en fechas diferentes y un camión puede ser conducido por varios camioneros.

**Se pide:** obtener el modelo relacional de la base de datos.

## **Ejercicio 4**

**PARADORES**

La red de Paradores de Turismo quiere mantener un servicio de atención y reservas a través de Internet. Una de las tareas dentro del desarrollo del sistema es la construcción del modelo lógico de datos. La información de partida para la construcción de dicho modelo es la siguiente:

- Los **Paradores** vendrán definidos por un código único, nombre, dirección, teléfono, nivel y número total de habitaciones. Los Paradores disponen de distintos tipos de habitaciones. De cada **habitación** se desea almacenar el número de habitación, la ubicación dentro del Parador, el tipo (normal o suite), una descripción y el precio por noche.

- Los Paradores pueden tener además unas **instalaciones adicionales** (golf, piscina, hípica, etc.). De cada tipo de instalación se desea almacenar el código de instalación, el nombre y la descripción. Hay que tener en cuenta que un mismo tipo de instalación se puede encontrar en distintos Paradores.

- La información referente a los Paradores se completa con la **oferta gastronómica** que tienen. De la gastronomía ofrecida por cada Parador se almacenará un código, nombre y tipo de plato. Aunque un mismo plato puede ser servido por distintos Paradores, puede haber **variaciones de precio** en cada caso. Se desea almacenar la información de esta diferencia.

- Cuando un usuario se conecte al sitio web de los Paradores de Turismo, además de poder consultar la información referente a lo descrito anteriormente, podrá hacer **reservas** de habitaciones. En el caso de realizar reservas, se toman los datos del cliente: NIF, nombre y apellidos. Se almacenará también un código de cliente generado por la aplicación si el cliente fuese nuevo.

- Una vez registrado el cliente, este podrá elegir en qué Parador o Paradores desea alojarse, la fecha de llegada y el número de noches, así como el tipo de la habitación que quiere. El sistema le asignará las habitaciones correspondientes, teniendo en cuenta que **un cliente no puede tener reservadas habitaciones de dos Paradores distintos en la misma fecha**.

- Por último, se desea que un cliente pueda consultar en cualquier momento **qué reservas ha realizado, en qué paradores y para cada fecha**, así como la habitación reservada.

**Se pide:** obtener el modelo relacional de la base de datos, documentando las restricciones que no pueden plasmarse en el diseño lógico.
