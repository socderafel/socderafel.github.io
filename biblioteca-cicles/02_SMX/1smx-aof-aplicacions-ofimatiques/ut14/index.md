---
layout: default
title: "UT14 — BDA. Model RELACIONAL (Segona part) — Aplicacions Ofimàtiques | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT14 Completa"
prev_url: "../ut13/ut1306.html"
prev_label: "⬅️ 13.6 B2-EXERCICIS Model Entitat-Relació"
next_url: "../ut14/ut1401.html"
next_label: "14.1 Tema 2. Model Relacional (2ª part) ➡️"
---

# 📘 UT14 — BDA. Model RELACIONAL (Segona part) (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**14.1 Tema 2. Model Relacional (2ª part)**](#ut1401) (o [obrir en pàgina individual ➡️](./ut1401.md) )
> - [**14.2 B1-EXERCICIS Model Relacional**](#ut1402) (o [obrir en pàgina individual ➡️](./ut1402.md) )
> - [**14.3 B2-EXERCICIS Model Relacional**](#ut1403) (o [obrir en pàgina individual ➡️](./ut1403.md) )

---

## 14.1 Tema 2. Model Relacional (2ª part)

> **📌 🏷️ Apunt de la Unitat**
> En esta segona part del tema 2, vorem el model RELACIONAL.

> **📌 🏷️ Apunt de la Unitat**
> ##### **Tema 2. Model Relacional**

> **📌 🏷️ Apunt de la Unitat**
> **TEMA**

> **📌 🏷️ Apunt de la Unitat**
> **EXERCICIS MODEL RELACIONAL**

---

Aci teniu la segona part del tema 2. Es el model relacional. Com passar del Model Entitat-Relació (vist en la primera part) a taules (model relacional)

Transformación del Modelo Entidad-Relación al Modelo Relacional

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación del ModeloEntidad-Relación (E-R) al ModeloRelacional Lugares Departamento Código Nombre Cliente RIF Nombre Servicio presta Código Nombre Fecha N M Empleado Cédula Teléfono Nombre pertenece N Departamento (Código, Nombre) Cliente (RIF, Nombre) Servicio (Código, Nombre) Empleado (Cédula, Nombre, Teléfono, CodDpto) Presta (CódDpto, CodServ, RIF, Fecha) Base de Datos Relacional Modelo Entidad-Relación Modelo RELACIONAL

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL ¿Porquées Necesaria laTransformación? ● ● ● ● El modelo E-R es un modelo de datos conceptual de alto nivel. Facilita las tareas de diseño conceptual de bases de datos. Es necesario traducirlo a un esquema que sea compatible con un SGBD (programa).

El Modelo Relacional es utilizado por la mayoría de los SGBD existentes en el mercado.

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación del ModeloE-R al ModeloRelacional ●Modelo Entidad Relación-Transformación al modelo Relacional de: – Entidades – Atributos – Relaciones 1:N – Relaciones 1:1 – Relaciones M:N Definir los pasos, para pasar al modelo Relacional (de donde saldrán las TABLAS de la base de datos)

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de Entidades • Toda ENTIDAD (del modelo E-R), se transforma en una TABLA (modelo RELACIONAL) • Todo ATRIBUTO (del modelo E-R) de la entidad, se transforma en una COLUMNA de la tabla (modelo RELACIONAL) • El identificador único de la entidad (modelo E-R), se transforma en la CLAVE PRINCIPAL o PRIMARIA de la tabla (modelo RELACIONAL) • RELACIONES: dependiendo del tipo de relación que tengamos (1:1, 1:N. N:1, N:M) se procederá de una manera u otra.

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de Entidades: Representación Se representa: • Nombre de la tabla en mayúsculas • Y entre paréntesis, y separados por comas, los nombres de los campos (atributos) de la tabla. • La clave principal, la subrayaremos, para indicar que es la clave principal Ejemplo

ALUMNOS(num_exp, nombre, apellidos, direccion, telefono)

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de Entidades: Ejemplo EMPLEADO (CEDULA, PrimNombre, PrimApellido, SegApellido, Teléfono) CP Atributo compuesto Nombre Empleado CEDULA Teléfono Nombre PrimNombre PrimApellido SegApellido

#### 1) E-R

#### 2) RELACIONAL

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de Entidades: Ejemplo En caso de que más de un atributo sea parte de la clave primaria: Proyecto (Número_Proyecto, Nombre_Proyecto, Descripción_Proyecto) CP Compuesta Proyecto Numero_Proyecto Descripción_Proyecto Nombre_Proyecto

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES 1:N • Toda RELACION 1:N (modelo E-R), en el modelo RELACIONAL, se propaga la clave, es decir, el identificador único de la entidad que está en la parte del 1, se pasa a la tabla generada que está en la parte del N, y se convierte en CLAVE AJENA.

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES1:N Ejemplo EMPLEADO(Cédula, PrimNombre, PrimApellido, SegApellido, Teléfono, Numero_Dpto) pertenece_a DEPARTAMENTO(Número_Dpto, Nombre_Dpto) N Empleado Cédula Teléfono PrimApellido PrimNombre SegApellido Nombre Departamento Numero_Dpto Nombre_Dpto Entidad-Relación RELACIONAL

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES1:N Ejemplo EMPLEADO(Cédula, PrimNombre, PrimApellido, SegApellido, Teléfono, Numero_Dpto) DEPARTAMENTO(Número_Dpto, Nombre_Dpto) Entidad-Relación RELACIONAL En el ejemplo anterior, tenemos DOS ENTIDADES, que se transforman en DOS TABLAS, la tabla EMPLEADOS, y la tabla DEPARTAMENTO.

La CLAVE PRINCIPAL de cada una de las tablas, es el identificador único en el diagrama Entidad- Relación, y en el modelo relacional, la subrayamos (en el ejemplo, la clave principal de EMPLEADO es cédula, y en la tabla DEPARTAMENTO, es numero_dpto. LA relación es una relación 1:N, asi que propagamos la clave principal de la entidad que esta en la parte del 1 (DEPARTAMENTO) a la tabla que está en la parte del N (EMPLEADO), y se transforma en una CLAVE AJENA. No se subraya, porque sólo se subraya la clave principal.

Esta clave ajena, nos va a indicar, por cada empleado a QUÉ departamento pertenece, pues en cada registro de empleado, tenemos el campo numero_dpto que indica el departamento del empleado.

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES1:N (Ejemplo) Empleado (Cédula, PrimNombre, PrimApellido, SegApellido, Teléfono, Numero_Dpto) Departamento (Número_Dpto, Nombre_Dpto)

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES 1:1 • Toda RELACION 1:1 (modelo E-R), en el modelo RELACIONAL, se propaga cualquier clave, es decir, el identificador único de cualquier entidad, se pasa a la tabla generada en la otra tabla, y se convierte en CLAVE AJENA.

• Funciona de la misma manera que en las relaciones 1:N, solo que aquí elegimos la clave que queremos pasar.

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES1:1 Ejemplo tiene_jefe Empleado Cédula Teléfono Nombre PrimApellido PrimNombre SegApellido Departamento Numero_Dpto Nombre_Dpto DEPARTAMENTO(Número_Dpto, Nombre_Dpto, Cédula_Jefe) EMPLEADO(Cédula, PrimNombre, PrimApellido, SegApellido, Teléfono) Entidad-Relación RELACIONAL

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES1:1 Ejemplo Entidad-Relación En el ejemplo anterior, tenemos DOS ENTIDADES, que se transforman en DOS TABLAS, la tabla EMPLEADOS, y la tabla DEPARTAMENTO. La CLAVE PRINCIPAL de cada una de las tablas, es el identificador único en el diagrama Entidad- Relación, y en el modelo relacional, la subrayamos (en el ejemplo, la clave principal de EMPLEADO es cédula, y en la tabla DEPARTAMENTO, es numero_dpto.

La relación es una relación 1:1, asi que propagamos la clave principal de una de las entidades que esta en la parte del 1 (EMPLEADO) a la tabla que está en la otra parte del 1 (DEPARTAMENTO), y se transforma en una CLAVE AJENA. No se subraya, porque sólo se subraya la clave principal.

Esta clave ajena, nos va a indicar, por cada DEPARTAMENTO QUÉ empleado es el JEFE También podríamos propagar la clave de DEPARTAMENTO a EMPLEADOS, pero en este caso, estariamos indicando en la tabla EMPELADO el DEPARTAMENTO del que es jefe. Qué opción elegir? La que tenga más sentido siempre.

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES1:1 (Ejemplo) Departamento (Número_Dpto, Nombre_Dpto, Cédula_Jefe) Empleado (Cédula, PrimNombre, PrimApellido, SegApellido, Teléfono)

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES N:M • Toda RELACION N:M (modelo E-R), se transforma en una nueva TABLA (modelo RELACIONAL), que tendrá como clave principal o primaria, la concatenación (unión) de las claves o identificadores únicos de las entidades asociadas a la relación.

• La CLAVE PRINCIPAL, es la unión de las dos claves, que a su vez, también son CLAVES AJENAS a cada una de las tablas. • Si la relación tiene atributos, se añaden como campos en la tabla generada.

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL TRABAJA_EN(Cédula, Número_Proyecto, Horas) EMPLEADO (Cédula, PrimNombre, PrimApellido, SegApellido, Teléfono) PROYECTO (Número_Proyecto, Nombre_Proyecto) Transformación de RELACIONESM:N Ejemplo trabaja_en N M Empleado Cédula Teléfono PrimApellido PrimNombre SegApellido Nombre Proyecto Numero_Proyecto Nombre_Proyecto Horas RELACIONAL RELACIONAL

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONES N:M Ejemplo En el ejemplo anterior, tenemos dos entidades y una relación N:M. Veamos como transformalo a tablas (modelo relacional): • Cada entidad, será una tabla. En este caso, tenemos dos tablas que hacen referencia a las entidades: EMPLEADO y PROYECTOS.

• La clave principal de estas dos tablas, es el identificador único de cada una de las entidades, y esta clave, la subrayamos (cedula en EMPLEADO, y num_proyecto en PROYECTOS). A su vez, son claves ajenas también. • La relación N:M la transformamos a una nueva TABLA, cuyo nombre es el nombre de la relación, TRABAJA_EN, y la clave principal de esta nueva tabla, será la concatenación (unión) de las dos claves principales de las entidades que forman parte de la relación (cedula y num_proyecto), por lo tanto, subrayamos los dos campos. Si la relación tiene atributos, se añaden como campos a esta nueva tabla, pero sin subrayar, ya que no formarian parte de la clave principal.

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONESM:N (Ejemplo) Empleado (Cédula, PrimNombre, PrimApellido, SegApellido, Teléfono) Trabaja_en (Cédula, Número_Proyecto, Horas) Proyecto (Número_Proyecto, Nombre_Proyecto)

Aplicaciones Ofimáticas Base de Datos Tema 02. Modelo RELACIONAL Transformación de RELACIONESM:N Ejemplo estacionado_en N M Avion Siglas Peso_Max Num_Motores Hangar Código Ubicación Fecha_Ent Fecha_Sal AVION (siglas, num_motores,peso_max) ESTACIONADO_EN (siglas, código, fecha_ent, fecha_sal) HANGAR(código, ubicación)

---

## 14.2 B1-EXERCICIS Model Relacional

Aci teniu uns exercicis del Model Relacional

Tema 2

EJERCICIOS

Modelo Relacional

1 parte: Editorial Paraninfo

Aplicaciones Ofimáticas Base de Datos Tema 02. EJERCICIOS Base de Datos Relacionales. Modelo Relacional (B1)

EJERCICIOS PROPUESTOS

2.1. Define los elementos que constituyen el modelo relacional.

2.2. Cita las restricciones semánticas del modelo relacional.

#### 2.3. Dado el siguiente diagrama E-R que se muestra en la figura, pasarlo al

modelo de datos relacional.

Aplicaciones Ofimáticas Base de Datos Tema 02. EJERCICIOS Base de Datos Relacionales. Modelo Relacional (B1)

#### 2.4. Dado el siguiente diagrama E-R que se muestra en la figura, pasarlo al

modelo de datos relacional.

---

## 14.3 B2-EXERCICIS Model Relacional

Exercicis del model relacional. Exercicis del 7 al 12 (es tracta de fer el model relacional, dels exercicis entitat-relacional fets del 1 al 6)

Tema 2

EJERCICIOS

Modelo Entidad-Relación y Modelo Relacional (completo)

2 parte (B2)

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

EJERCICIO 1

A partir del siguiente enunciado se desea realiza el modelo entidad-relación.

“Una empresa vende productos a varios clientes. Se necesita conocer los datos personales de los clientes (nombre, apellidos, dni, dirección y fecha de nacimiento). Cada producto tiene un nombre y un código, así como un precio unitario. Un cliente puede comprar varios productos a la empresa, y un mismo producto puede ser comprado por varios clientes.

Los productos son suministrados por diferentes proveedores. Se debe tener en cuenta que un producto sólo puede ser suministrado por un proveedor, y que un proveedor puede suministrar diferentes productos. De cada proveedor se desea conocer el NIF, nombre y dirección”.

EJERCICIO 2

A partir del siguiente enunciado se desea realizar el modelo entidad-relación.

“Se desea informatizar la gestión de una empresa de transportes que reparte paquetes por toda España. Los encargados de llevar los paquetes son los camioneros, de los que se quiere guardar el dni, nombre, teléfono, dirección, salario y población en la que vive.

De los paquetes transportados interesa conocer el código de paquete, descripción, destinatario y dirección del destinatario. Un camionero distribuye muchos paquetes, y un paquete sólo puede ser distribuido por un camionero. De las provincias a las que llegan los paquetes interesa guardar el código de provincia y el nombre. Un paquete sólo puede llegar a una provincia. Sin embargo, a una provincia pueden llegar varios paquetes.

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

De los camiones que llevan los camioneros, interesa conocer la matrícula, modelo, tipo y potencia. Un camionero puede conducir diferentes camiones en fechas diferentes, y un camión puede ser conducido por varios camioneros”.

EJERCICIO 3

A partir del siguiente enunciado diseñar el modelo entidad-relación.

“Se desea diseñar la base de datos de un Instituto. En la base de datos se desea guardar los datos de los profesores del Instituto (DNI, nombre, dirección y teléfono). Los profesores imparten módulos, y cada módulo tiene un código y un nombre. Cada alumno está matriculado en uno o varios módulos. De cada alumno se desea guardar el nº de expediente, nombre, apellidos y fecha de nacimiento. Los profesores pueden impartir varios módulos, pero un módulo sólo puede ser impartido por un profesor. Cada curso tiene un grupo de alumnos, uno de los cuales es el delegado del grupo”.

EJERCICIO 4

A partir del siguiente supuesto diseñar el modelo entidad-relación

“Se desea diseñar una base de datos para almacenar y gestionar la información empleada por una empresa dedicada a la venta de automóviles, teniendo en cuenta los siguientes aspectos

La empresa dispone de una serie de coches para su venta. Se necesita conocer la matrícula, marca y modelo, el color y el precio de venta de cada coche.

Los datos que interesa conocer de cada cliente son el NIF, nombre, dirección, ciudad y número de teléfono: además, los clientes se diferencian por un código

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

interno de la empresa que se incrementa automáticamente cuando un cliente se da de alta en ella. Un cliente puede comprar tantos coches como desee a la empresa. Un coche determinado solo puede ser comprado por un único cliente. El concesionario también se encarga de llevar a cabo las revisiones que se realizan a cada coche. Cada revisión tiene asociado un código que se incrementa automáticamente por cada revisión que se haga. De cada revisión se desea saber si se ha hecho cambio de filtro, si se ha hecho cambio de aceite, si se ha hecho cambio de frenos u otros. Los coches pueden pasar varias revisiones en el concesionario”.

EJERCICIO 5

A partir del siguiente supuesto diseñar el modelo entidad-relación

“La clínica “SAN PATRÁS” necesita llevar un control informatizado de su gestión de pacientes y médicos.

De cada paciente se desea guardar el código, nombre, apellidos, dirección, población, provincia, código postal, teléfono y fecha de nacimiento. De cada médico se desea guardar el código, nombre, apellidos, teléfono y especialidad.

Se desea llevar el control de cada uno de los ingresos que el paciente hace en el hospital. Cada ingreso que realiza el paciente queda registrado en la base de datos. De cada ingreso se guarda el código de ingreso (que se incrementará automáticamente cada vez que el paciente realice un ingreso), el número de habitación y cama en la que el paciente realiza el ingreso y la fecha de ingreso.

Un médico puede atender varios ingresos, pero el ingreso de un paciente solo puede ser atendido por un único médico. Un paciente puede realizar varios ingresos en el hospital”.

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

EJERCICIO 6

Se desea informatizar la gestión de una tienda informática. La tienda dispone de una serie de productos que se pueden vender a los clientes.

“De cada producto informático se desea guardar el código, descripción, precio y número de existencias. De cada cliente se desea guardar el código, nombre, apellidos, dirección y número de teléfono.

Un cliente puede comprar varios productos en la tienda y un mismo producto puede ser comprado por varios clientes. Cada vez que se compre un artículo quedará registrada la compra en la base de datos junto con la fecha en la que se ha comprado el artículo.

La tienda tiene contactos con varios proveedores que son los que suministran los productos. Un mismo producto puede ser suministrado por varios proveedores. De cada proveedor se desea guardar el código, nombre, apellidos, dirección, provincia y número de teléfono”.

EJERCICIO 7

Pasa el modelo entidad-relación del ejercicio 1 al modelo relacional. Diseña las tablas en Access, realiza las relaciones que consideres oportunas e inserta cinco registros en cada una de las tablas.

EJERCICIO 8

Pasa el modelo entidad-relación del ejercicio 2 al modelo relacional. Diseña las tablas en Access, realiza las relaciones que consideres oportunas e inserta cinco registros en cada una de las tablas.

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

EJERCICIO 9

Pasa el modelo entidad-relación del ejercicio 3 al modelo relacional. Diseña las tablas en Access, realiza las relaciones que consideres oportunas e inserta cinco registros en cada una de las tablas.

¿Cómo quedaría el modelo relacional suponiendo que cada profesor sólo imparte un módulo y cada módulo es impartido por sólo un profesor?

EJERCICIO 10

Transforma el modelo entidad-relación del ejercicio 4 al modelo relacional. Diseña las tablas en Access, realiza las relaciones que consideres oportunas e inserta cinco registros en cada una de las tablas.

Si un cliente sólo puede comprar un coche en el concesionario, y un coche sólo puede ser comprado por un cliente, ¿cómo quedaría el modelo relacional?

EJERCICIO 11

Transforma el modelo entidad-relación del ejercicio 5 a modelo relacional. Diseña las tablas en Access, realiza las relaciones que consideres oportunas e inserta cinco registros en cada una de las tablas.

EJERCICIO 12

Transforma el modelo entidad-relación del ejercicio 6 al modelo relacional. Diseña las tablas en Access, realiza las relaciones que consideres oportunas e inserta cinco registros en cada una de las tablas.

EJERCICIO 13

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

Considera la siguiente relación PERSONA-TIENE HIJOS-PERSONA. Una persona puede tener muchos hijos/as o ninguno. Una persona siempre es hijo/a de otra persona. Los atributos de la persona son dni, nombre, dirección y teléfono. Transformarlo al modelo relacional.

EJERCICIO 14

A partir del siguiente enunciado, diseñar el modelo entidad-relación.

“En la biblioteca del centro se manejan fichas de autores y libros. En la ficha de cada autor se tiene el código de autor y el nombre. De cada libro se guarda el código, título, ISBN, editorial y número de página. Un autor puede escribir varios libros, y un libro puede ser escrito por varios autores. Un libro está formado por ejemplares. Cada ejemplar tiene un código y una localización. Un libro tiene muchos ejemplares y un ejemplar pertenece sólo a un libro.

Los usuarios de la biblioteca del centro también disponen de ficha en la biblioteca y sacan ejemplares de ella. De cada usuario se guarda el código, nombre, dirección y teléfono.

Los ejemplares son prestados a los usuarios. Un usuario puede tomar prestados varios ejemplares, y un ejemplar puede ser prestado a varios usuarios. De cada préstamos interesa guardar la fecha de préstamo y la fecha de devolución”.

Pasar el modelo entidad-relación resultante al modelo relacional. Diseñar las tablas en Access, realizar las relaciones oportunas entre tablas e insertar cinco registros en cada una de las tablas.

EJERCICIO 15

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

A partir del siguiente supuesto realizar el modelo entidad-relación y pasarlo a modelo relacional.

“A un concesionario de coches llegan clientes para comprar automóviles. De cada coche interesa saber la matrícula, modelo, marca y color. Un cliente puede comprar varios coches en el concesionario. Cuando un cliente compra un coche, se le hace una ficha en el concesionario con la siguiente información

dni, nombre, apellidos, dirección y teléfono.

Los coches que el concesionario vende pueden ser nuevos o usados (de segunda mano).

De los coches nuevos interesa saber el número de unidades que hay en el concesionario.

De los coches viejos interesa el número de kilómetros que lleva recorridos.

El concesionario también dispone de un taller en el que los mecánicos reparan los coches que llevan los clientes. Un mecánico repara varios coches a lo largo del día, y un coche puede ser reparado por varios mecánicos. Los mecánicos tienen un dni, nombre, apellidos, fecha de contratación y salario. Se desea guardar también la fecha en la que se repara cada vehículo y el número de horas que se tardado en arreglar cada automóvil”.

Pasar el modelo entidad-relación resultante al modelo relacional. Diseñar las tablas en Access, realizar las relaciones oportunas entre tablas e insertar cinco registros en cada una de las tablas.

EJERCICIO 16

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

La liga de fútbol profesional, presidida por Don Javier Tebas, ha decidido informatizar sus instalaciones creando una base de datos para guardar la información de los partidos que se juegan en la liga.

Se desea guardar en primer lugar los datos de los jugadores. De cada jugador se quiere guardar el nombre, fecha de nacimiento y posición en la que juega (portero, defensa, centrocampista...). Cada jugador tiene un código de jugador que lo identifica de manera única.

De cada uno de los equipos de la liga es necesario registrar el nombre del equipo, nombre del estadio en el que juega, el aforo que tiene, el año de fundación del equipo y la ciudad de la que es el equipo. Cada equipo también tiene un código que lo identifica de manera única. Un jugador solo puede pertenecer a un único equipo.

De cada partido que los equipos de la liga juegan hay que registrar la fecha en la que se juega el partido, los goles que ha metido el equipo de casa y los goles que ha metido el equipo de fuera. Cada partido tendrá un código numérico para identificar el partido.

También se quiere llevar un recuento de los goles que hay en cada partido. Se quiere almacenar el minuto en el que se realizar el gol y la descripción del gol. Un partido tiene varios goles y un jugador puede meter varios goles en un partido.

Por último se quiere almacenar, en la base de datos, los datos de los presidentes de los equipos de fútbol (dni, nombre, apellidos, fecha de nacimiento, equipo del que es presidente y año en el que fue elegido presidente). Un equipo de fútbol tan sólo puede tener un presidente, y una persona sólo puede ser presidente de un equipo de la liga.

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

Pasar el modelo entidad-relación resultante al modelo relacional. Diseñar las tablas en Access, realizar las relaciones oportunas entre tablas e insertar cinco registros en cada una de las tablas.

EJERCICIO 17

A partir del siguiente supuesto diseñar el modelo entidad-relación.

“Se desea informatizar la gestión de un centro de enseñanza para llevar el control de los alumnos matriculados y los profesores que imparten clases en ese centro. De cada profesor y cada alumno se desea recoger el nombre, apellidos, dirección, población, dni, fecha de nacimiento, código postal y teléfono.

Los alumnos se matriculan en una o más asignaturas, y de ellas se desea almacenar el código de asignatura, nombre y número de horas que se imparten a la semana. Un profesor del centro puede impartir varias asignaturas, pero una asignatura sólo es impartida por un único profesor. De cada una de las asignaturas se desea almacenar también la nota que saca el alumno y las incidencias que puedan darse con él.

Además, se desea llevar un control de los cursos que se imparten en el centro de enseñanza. De cada curso se guardará el código y el nombre. En un curso se imparten varias asignaturas, y una asignatura sólo puede ser impartida en un único curso.

Las asignaturas se imparten en diferentes aulas del centro. De cada aula se quiere almacenar el código, piso del centro en el que se encuentra y número de pupitres de que dispone. Una asignatura se puede dar en diferentes aulas, y en un aula se pueden impartir varias asignaturas. Se desea llevar un registro

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

de las asignaturas que se imparten en cada aula. Para ello se anotará el mes, día y hora en el que se imparten cada una de las asignaturas en las distintas aulas.

La dirección del centro también designa a varios profesores como tutores en cada uno de los cursos. Un profesor es tutor tan sólo de un curso. Un curso tiene un único tutor. Se habrá de tener en cuenta que puede que haya profesores que no sean tutores de ningún curso”.

Una vez construido el modelo E-R pasarlo al modelo relacional. Diseñar las tablas en Access, hacer las relaciones oportunas e insertar 5 registros en cada una de las tablas.

EJERCICIO 18

“Una empresa necesita organizar la siguiente información referente a su organización interna.

La empresa está organizada en una serie de departamentos. Cada departamento tiene un código, nombre y presupuesto anual. Cada departamento está ubicado en un centro de trabajo. La información que se desea guardar del centro de trabajo es el código de centro, nombre, población y dirección del centro.

La empresa tiene una serie de empleados. Cada empleado tiene un teléfono, fecha de alta en la empresa, NIF y nombre. De cada empleado también interesa saber el número de hijos que tiene y el salario de cada empleado. A esta empresa también le interesa tener guardada información sobre los hijos de los empleados. Cada hijo de un empleado tendrá un código, nombre y fecha de nacimiento.

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

Se desea mantener también información sobre las habilidades de los empleados (por ejemplo, mercadotecnia, trato con el cliente, fresador, operador de telefonía, etc…). Cada habilidad tendrá una descripción y un código”.

Sobre este supuesto diseñar el modelo E/R y el modelo relacional teniendo en cuenta los siguientes aspectos.

- Un empleado está asignado a un único departamento. Un departamento

estará compuesto por uno o más empleados.

- Cada departamento se ubica en un único centro de trabajo. Estos se

componen de uno o más departamentos.

- Un empleado puede tener varios hijos.
- Un empleado puede tener varias habilidades, y una misma habilidad puede

ser poseída por empleados diferentes.

- Un centro de trabajo es dirigido por un empleado. Un mismo empleado

puede dirigir centros de trabajo distintos.

Realizar el diseño de la base de datos en Access e introducir cinco registros en cada una de las tablas.

EJERCICIO 19

Se trata de realizar el diseño de la base de datos en el modelo E/R para una cadena de hoteles.

“Cada hotel (del que interesa almacenar su nombre, dirección, teléfono, año de construcción, etc.) se encuentra clasificado obligatoriamente en una categoría (por ejemplo, tres estrellas) pudiendo bajar o aumentar de categoría.

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

Cada categoría tiene asociada diversas informaciones, como, por ejemplo, el tipo de IVA que le corresponde y la descripción.

Los hoteles tiene diferentes clases de habitaciones (suites, dobles, individuales, etc.), que se numeran de forma que se pueda identificar fácilmente la planta en la que se encuentran. Así pues, de cada habitación se desea guardar el código y el tipo de habitación.

Los particulares pueden realizar reservas de las habitaciones de los hoteles. En la reserva de los particulares figurarán el nombre, la dirección y el teléfono.

Las agencias de viaje también pueden realizar reservas de las habitaciones. En caso de que la reserva la realiza una agencia de viajes, se necesitarán los mismos datos que para los particulares, además del nombre de la persona para quien la agencia de viajes está realizando la reserva.

En los dos casos anteriores también se debe almacenar el precio de la reserva, la fecha de inicio y la fecha de fin de la reserva”.

EJERCICIO 20

Imagina que una agencia de seguros de tu municipio te ha solicitado una base de datos mediante la cual llevar un control de los accidentes y las multas. Tras una serie de entrevistas, has tomado las siguientes notas

“Se desean registrar todas las personas que tienen un vehículo. Es necesario guardar los datos personales de cada persona (nombre, apellidos, dirección, población, teléfono y DNI). De cada vehículo se desea almacenar la matrícula, la marca y el modelo. Una persona puede tener varios vehículos, y puede darse el caso de un vehículo pertenezca a varias personas a la vez.

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

También se desea incorporar la información destinada a gestionar los accidentes del municipio. Cada accidente posee un número de referencia correlativo según orden de entrada a la base de datos. Se desea conocer la fecha, lugar y hora en que ha tenido lugar cada accidente. Se debe tener en cuenta que un accidente puede involucrar a varias personas y varios vehículos.

Se desea llevar también un registro de las multas que se aplican. Cada multa tendrá asignado un número de referencia correlativo. Además, deberá registrarse la fecha, hora, lugar de infracción e importe de la misma. Una multa solo se aplicará a un conductor e involucra a un solo vehículo.”

Realiza el modelo E-R y pásalo al modelo relacional. Diseña después las tablas en Access, realiza las relaciones oportunas entre ellas e inserta cinco registros en cada una de las tablas.

EJERCICIO 21

Una agencia de viajes desea informatizar toda la gestión de los viajeros que acuden a la agencia y los viajes que estos realizan. Tras ponernos en contacto con la agencia, ésta nos proporciona la siguiente información.

“La agencia desea guardar la siguiente información de los viajeros: dni, nombre, dirección y teléfono.

De cada uno de los viajes que maneja la agencia interesa guardar el código de viaje, número de plazas, fecha en la que se realiza el viaje y otros datos. Un viajero puede realizar tantos viajes como desee con la agencia. Un viaje determinado sólo puede ser cubierto por un viajero.

Cada viaje realizado tiene un destino y un lugar de origen. De cada uno de ellos se quiere almacenar el código, nombre y otros datos que puedan ser de interés. Un viaje tiene un único lugar de destino y un único lugar de origen”.

Aplicaciones Ofimáticas. Base de datos. U.D. 2: Base de Datos RELACIONALES Modelo Entidad-Relación y Modelo Relacional (B2)

Realizar el modelo E-R y pasarlo al modelo de datos relacional. Diseñar las tablas en Access, realizar las oportunas relaciones entre tablas e introducir cinco registros en cada una de las tablas.

EJERCICIO 22

Una empresa desea diseñar una base de datos para almacenar en ella toda la información generada en cada uno de los proyectos que ésta realiza.

“De cada uno de los proyectos realizados interesa almacenar el código, descripción, cuantía del proyecto, fecha de inicio y fecha de fin. Los proyectos son realizados por clientes de los que se desea guardar el código, teléfono, domicilio y razón social. Un cliente puede realizar varios proyectos, pero un solo proyecto es realizado por un único cliente.

En los proyectos participan colaboradores de los que se dispone la siguiente información: nif, nombre, domicilio, teléfono, banco y número de cuenta. Un colaborador puede participar en varios proyectos. Los proyectos son realizados por uno o más colaboradores.

Los colaboradores de los proyectos reciben pagos. De los pagos realizados se quiere guardar el número de pago, concepto, cantidad y fecha de pago. También interesa almacenar los diferentes tipos de pagos que puede realizar la empresa. De cada uno de los tipos de pagos se desea guardar el código y descripción. Un tipo de pago puede pertenecer a varios pagos”.
