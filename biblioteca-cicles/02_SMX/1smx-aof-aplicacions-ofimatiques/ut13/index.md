---
layout: default
title: "UT13 — BDA. Model ENTITAT-RELACIÓ (E-R) (Primera part) — Aplicacions Ofimàtiques | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT13 Completa"
prev_url: "../ut12/ut12actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT12"
next_url: "../ut13/ut1301.html"
next_label: "13.1 Exemple_inicial_Classe_ER ➡️"
---

# 📘 UT13 — BDA. Model ENTITAT-RELACIÓ (E-R) (Primera part) (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**13.1 Exemple_inicial_Classe_ER**](#ut1301) (o [obrir en pàgina individual ➡️](./ut1301.md) )
> - [**13.2 Tema 2. Model Entitat-Relació (COMPLET)**](#ut1302) (o [obrir en pàgina individual ➡️](./ut1302.md) )
> - [**13.3 Tema 2. Model Entitat-Relació (RESUMEN)**](#ut1303) (o [obrir en pàgina individual ➡️](./ut1303.md) )
> - [**13.4 Tema 2. Model Entitat-Relació (2 vers)**](#ut1304) (o [obrir en pàgina individual ➡️](./ut1304.md) )
> - [**13.5 B1-EXERCICIS Model Entitat-Relació**](#ut1305) (o [obrir en pàgina individual ➡️](./ut1305.md) )
> - [**13.6 B2-EXERCICIS Model Entitat-Relació**](#ut1306) (o [obrir en pàgina individual ➡️](./ut1306.md) )

---

## 13.1 Exemple_inicial_Classe_ER

> **📌 🏷️ Apunt de la Unitat**
> ##### **Tema 2. Model Entitat-Relació (1ª part)**

> **📌 🏷️ Apunt de la Unitat**
> **TEMA**

> **📌 🏷️ Apunt de la Unitat**
> **EXERCICIS ENTITAT-RELACIÓ**

> **📌 🏷️ Apunt de la Unitat**
> **VIDEOS**

> **🔗 Recurs Web: Video 1. Model Entitat-Relacio**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=MRmmPJId5-k) ↗️**](https://www.youtube.com/watch?v=MRmmPJId5-k)
>
> Video on explica el model Entitat-Relació. Interesant. Mireu-lo.
>
> La notació o representació és diferent a la explicada en els temes, pero son equivalents. Hi han diferents maneres de representar, i aci fan una diferent a la explicada en els temes. Pero podreu seguir-ho igual. Anim

> **🔗 Recurs Web: Video 2. Model Entitat-Relació**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=G--gVr9eEcA) ↗️**](https://www.youtube.com/watch?v=G--gVr9eEcA)
>
> Altre video que vos pot aclarir els conceptes del model entitat-relacio

> **🔗 Recurs Web: Video 3. Exercici Entitat Relació**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=u2bXiPJf9oQ) ↗️**](https://www.youtube.com/watch?v=u2bXiPJf9oQ)
>
> En este video vos expliquen un exercici entitat-relació. Encara que no utiitza la mateixa nomenclatura, vos pot servir per assolir conceptes.

---

Volem crear una base de datos per a guardar informació dels alumnes d’un centre educatiu, i les assignatures de les que están matriculats els alumnes.

Dels alumnes ens interesa saber el seu nia, el seu dni, el seu nom, la seua adreça, la seua població, el telèfon, i la data de naixement. De les assignatures, volem guardar el codi de l’assignatura, el nom i el número d’hores setmanals. També es vol guardar en la base de datos la nota final que ha tret l’alumne en cada una de les assignatures de les que està matriculat.

Volem crear una base de datos per a guardar informació dels alumnes d’un centre educatiu, i les assignatures de les que están matriculats els alumnes.

Dels alumnes ens interesa saber el seu nia, el seu dni, el seu nom, la seua adreça, la seua població, el telèfon, i la data de naixement. De les assignatures, volem guardar el codi de l’assignatura, el nom i el número d’hores setmanals. També es vol guardar en la base de datos la nota final que ha tret l’alumne en cada una de les assignatures de les que està matriculat.

---

## 13.2 Tema 2. Model Entitat-Relació (COMPLET)

Tema del Model Entitat-Relació (amb exemples)

Tema 2

M o d e l o E n t i d a d - R e l a c i ó n ( E - R )

(1 parte – tema completo)

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

El modelo Entidad-Relación es un modelo conceptual de datos orientado a entidades. Se basa en una técnica de representación gráfica que incorpora información relativa a los datos y las relaciones existentes entre ellos, para darnos una visión de mundo real, eliminando los detalles irrelevantes.

Veremos dos modelos

- Modelo Entidad-Relación: es el paso previo, y en él "dibujaremos" la futura base de datos.

2 )Modelo Relacional: una vez tenemos el modelo Entidad-Relación, lo pasaremos (proceso automático), al modelo Relacional, que es el modelo que nos dará las tablas finales de la base de datos.

Siempre, el primer paso, es el Entidad-Relación, y después se pasa al modelo Relacional. En este tema, veremos el Entidad-Relación. En el siguiente, el Relacional.

Características del modelo

Refleja tan solo la existencia de los datos, no lo que se hace con ellos.  · Se incluyen todos los datos relevantes del sistema en estudio.  · No está orientado a aplicaciones específicas.  · Es independiente de los SGBD.  · No tiene en cuenta restricciones de espacio, almacenamiento, ni tiempo de ejecución.  · Está abierto a la evolución del sistema.  · Es el modelo conceptual más utilizado.

Los elementos básicos del modelo E-R original son

 ENTIDAD  ATRIBUTO  RELACION

### 1. ENTIDAD

Una entidad es cualquier objeto (real o abstracto) que existe en la realidad y acerca del cual queremos almacenar información en la BD. Normalmente las entidades son sustantivos.

Las entidades se representan gráficamente mediante rectángulos con su nombre, en mayúsculas, en el interior. En el modelo relacional, se transformarán en TABLAS

> **💡 Apunt Tècnic**
> Ejemplo: Si queremos guardar la información de todas las asignaturas que se imparten en un centro, ASIGNATURA se convierte una entidad. 'Matemáticas', ‘Filosofía’ y 'Física' son ocurrencias (valores que puede tomar) de la entidad ASIGNATURA.

Si queremos guardar toda la información de los alumnos, entonces ALUMNOS se convierte en una entidad llamada ALUMNOS. Y lo representamos mediante un rectángulo, y dentro el nombre de la entidad en mayúsculas

ASIGNATURA ALUMNOS

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

### 2. ATRIBUTO

Los atributos son cada una de las propiedades o características que tiene una entidad. Se representan mediante una elipse u óvalo con el nombre del atributo en el centro (en minúscula), que se unen a la entidad, mediante líneas rectas. En el modelo relacional, se transformarán en columnas de tabla (atributos).

> **💡 Apunt Tècnic**
> Ejemplo: Nos interesa conocer de los alumnos, su nombre, su nia (número de indentificación del alumno), su dirección y su teléfono. En este caso, ALUMNO es la entidad, y nombre, nia, dirección y teléfono son ATRIBUTOS de la entidad ALUMNOS. Se representan mediante una elipse unida a la entidad por líneas rectas.

Tenemos distintos tipos de atributos.

Atributos simples: son atributos que no están formados por otros atributos.

> **💡 Apunt Tècnic**
> Ejemplo: El atributo nia, edad, email, seria información referente a un alumno, y éstos no están formados por otros atributos.

Atributos compuestos: son atributos que están formados por otros atributos que a su vez pueden ser simples y compuestos.

ALUMNOS nombre nia dirección teléfono

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

> **💡 Apunt Tècnic**
> Ejemplo: El ejemplo más claro donde podemos ver un atributo compuesto, es el atributo nombre de un alumno. Podemos considerarlo atributo simple, si en el campo de nombre, ponemos el nombre completo. Pero también lo podemos considerar atributo compuesto, puesto que el nombre completo de un alumno, está compuesto por su nombre y sus apellidos. A su vez, el apellido de un alumno, está compuesto por el primer apellido y el segundo apellido. Asi, el nombre del alumno, también lo podemos considerar como atributo compuesto.

¿Qué opción es mejor, atributo simple, o atributo compuesto? Pues como uno lo considere. Si es atributo simple, éste será un campo de tabla (una columna), y si lo consideramos atributo compuesto, estará formado por tres campos de tabla, un campo para el nombre, otro para apellido 1 y otro para apellido 2. La opción de atributo simple o compuesto, depende del diseñador de la base de datos.

Atributos identificadores: son aquellos que identifican de forma unívoca cada ocurrencia de una entidad. Toda entidad debe tener al menos un atributo identificador. Es lo que posteriormente será la clave principal de una tabla. También lo podremos llamar CLAVE PRIMARIA, aunque en el modelo entidad-relación, lo más correcto es llamarlo Atributo Identificador (pero no hay problema con llamarlo CLAVE PRIMARIA).

Clave primaria, clave principal, identificador único, atributo identificador,... todo es lo mismo, son sinónimos en un modelo u otro, así que lo podemos llamar como queramos. 

Los atributos identificadores simples se representan subrayando el nombre del atributo.     Una entidad puede tener más de un atributo identificador, en este caso elegiremos uno como identificador primario (P), quedando el resto como identificadores alternativos (A).    Ejemplo: El nia de un alumno, es un atributo identificador, porque identifica de manera única a los alumnos, es decir, no existen dos alumnos con el mismo nia, y un nia identifica sólo a un alumno.

También podria ser un atributo identificador el DNI del alumno, pues no hay dos alumnos con el mismo DNI, y un DNI siempre identifica a un único alumno.

Sólo podemos elegir un atributo identificador primario (P), y el otro se convierte como alternativo.

El indentificador primario, lo subrayaremos en la representación del modelo Entidad - Relación y el identificador alternativo no tiene ninguna representación, y se queda como un atributo más.

¿Qué identificador elijo para un alumno, el NIA o el DNI? Pues el resultado es el mismo, pero siempre se suele elegir aquellos que identifican de mejor manera a la entidad, de manera que el nia, siempre identificará mejor a un alumno que el dni, pues nia sólo tienen los alumnos, y dni tienen todas las personas, independientemente de si son alumnos o no.

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

  · Atributos multivaluados: son aquellos que pueden almacenar varios valores simultáneamente para una misma ocurrencia de una entidad. Se representan de la siguiente forma, poniendo una "n" en la línea recta que une el atributo a la entidad. Apenas los utilizaremos.       Ejemplo: Nos puede interesar almacenar el teléfono de un alumno. ALUMNO, como hemos dicho, es la entidad, y teléfono es un atributo de la entidad ALUMNO. Si el alumno tiene varios teléfonos, este atributo es multivaluado, es decir, puede tener varios valores. Su representación es como la de un atributo normal, solo que pondremos una n, en la linea que une el atributo a la entidad

 · Atributos no nulos: aquellos que obligatoriamente deben tener valor, no pueden ser nulos (sin valor).

> **💡 Apunt Tècnic**
> Ejemplo: "Obligamos" al atributo peso, a que siempre tenga un valor, es decir, en la tabla, este campo no puede estar nulo (vacio), siempre tendrá que tener un valor.

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

### 3. RELACIÓN

Una relación es una correspondencia o asociación entre 2 o más entidades. Las relaciones en el modelo tradicional se representan gráficamente mediante rombos con el nombre de la relación debajo, o al lado. Este rombo, se une mediante líneas rectas a las entidades que relaciona.

Normalmente son verbos o formas verbales. En el modelo relacional, las relaciones serán quienes unan las tablas, de manera que en una base de datos, todas las tablas quedarán unidas a través de las relaciones (mediante el concepto de clave ajena, que veremos mas adelante).

> **💡 Apunt Tècnic**
> Ejemplo: En el ejemplo anterior, tenemos una entidad llamada ALUMNOS, pero también podemos tener una entidad llamada ASIGNATURAS.

La entidad ALUMNOS guardará toda la información de todos los alumnos que tengamos. Y la entidad ASIGNATURAS guardará toda la información de todas las asignaturas del centro.

¿Existe una relación entre las dos entidades? Pues sí, porque los alumnos se matriculan de las asignaturas. Por lo tanto existe una relación de MATRICULA entre la entidad ALUMNOS y la entidad ASIGNATURAS. La relación se representa utilizando un rombo y se une a las entidades con lineas rectas. Debajo de la relación se pone el nombre de la relación (normalmente en mayúsculas, o minúsculas con la primer letra en mayúscula), que identifique de manera clara que relación tienen las entidades. Normalmente las relaciones son verbos (o tiempos verbales), y las entidades son sustantivos.

Tipos de relaciones (cardinalidad)

1:1 REPRESENTACIÓN (da igual una representación u otra) Un rombo, y encima 1:1 Un rombo sin pintar, indica relación 1:1 1:1

1:N TIPOS DE REPRESENTACIÓN (da igual una representación u otra) Un rombo, y encima 1:N Un rombo, dividido por la mitad, y pintada la parte donde se encuentra la parte de la N 1:N

COMPRA ALUMNO ASIGNATURA MATRICULA N:M

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

N:1

TIPOS DE REPRESENTACIÓN (da igual una representación u otra) Un rombo, y encima N:1 Un rombo, dividido por la mitad, y pintada la parte donde se encuentra la parte de la N N:1

N:N

TIPOS DE REPRESENTACIÓN (da igual una representación u otra) Un rombo, y encima N:M Un rombo, dividido por la mitad, y pintadas las dos mitades, ya que se pinta la parte de la N y la M N:M

Pintamos la parte que está la N y la M

Consideraciones

- La N, puede ser también la letrea M, y se lee MUCHOS (relación 1:N es lo mismo que relación

1:M y es una relación "uno a muchos")

- La relación 1:N es la misma que la N:1, pero en otro sentido.
- Podemos pintar las relaciones en la parte del "muchos", ó no pintar el rombo, y poner encima el

tipo de relación.

Lo vemos con más detalle...

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

#### 3.1. CARDINALIDAD

La cardinalidad de una relación es el número de ocurrencias de una entidad asociadas a una ocurrencia de la otra entidad.

Existen tres tipos de correspondencias

Uno a uno (1:1). A cada ocurrencia de la entidad A le corresponde una ocurrencia de la entidad B, y viceversa.

> **💡 Apunt Tècnic**
> Ejemplo: En un matrimonio, una mujer está casada con un hombre, y un hombre está casado con una mujer (sin contar particularidades). La lectura para poder saber la cardinalidad de la relación es la siguiente.

- Siempre se lee de izquierda a derecha, y después de derecha a izquierda. SIEMPRE

en los dos sentidos!!!!!

- De izquierda a derecha: Siempre empezaremos con la frase

UNA (ocurrencia) de la entidad de la izquierda, con cuántas ocurrencias de la entidad de la derecha se relaciona?

En el ejemplo: UNA mujer se relaciona, mediante la relación CASADO/A CON, con UN hombre.

- De derecha a izquierda: Siempre empezaremos con la frase

UNA (ocurrencia) de la entidad de la derecha, con cuántas ocurrencias de la entidad de la izquierda se relaciona?

En el ejemplo: UN hombre se relaciona, mediante la relación CASADO/A CON, con UNA mujer.

Casado_con

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

Uno a muchos (1:N), ó Muchos a uno (N:1): A cada ocurrencia de la entidad A le pueden corresponder varias ocurrencias de la entidad B, pero a cada ocurrencia de la entidad B sólo le corresponde una ocurrencia de la entidad A.

La relación se lee una relación "uno a muchos", y se pinta la mitad del rombo de la relación que queda a la parte de la entidad del "muchos". También, si no queremos pintar la relación, lo podemos indicar poniendo las letras 1:N, ó N:1 encima de la relación (Las letras "N" ó "M" indican "MUCHO"), poniendo la N en el lado de la relación que tiene cardinalidad "muchos". Pero es más gráfico si pintamos las relación, ya que a nivel visual, es más fácil identificar la cardinalidad de las relaciones

> **💡 Apunt Tècnic**
> Ejemplo: En un país, nacen muchas personas, y una persona nace en un único país. La lectura para poder saber la cardinalidad de la relación es la siguiente.

Siempre se lee de izquierda a derecha, y después de derecha a izquierda. SIEMPRE TENDREMOS QUE REALIZAR LA LECTURA EN LOS DOS SENTIDOS. SIEMPRE. PARA SABER LAS CARDINALIDADES EN UN SENTIDO U OTRO.

- De izquierda a derecha: Siempre empezaremos con la frase

UNA (ocurrencia) de la entidad de la izquierda, con cuántas ocurrencias de la entidad de la derecha se relaciona?

En el ejemplo: En UN pais nacen MUCHAS personas

(UN pais, se relaciona, mediante la relación NACIDO_EN con MUCHAS ocurrencias de la entidad PERSONA)

En este caso, partimos el símbolo de la relación (es decir, el rombo), en dos partes, y pintamos la parte que está en el MUCHOS, es decir, pintamos la parte de la relación que está en PERSONA. También podremos indicarlo mediante el teto 1:N, poniendo la N en la parte del muchos, es decir en la parte de la entidad PERSONA.

- De derecha a izquierda: Siempre empezaremos con la frase

UNA (ocurrencia) de la entidad de la derecha, con cuántas ocurrencias de la entidad de la izquierda se relaciona?

En el ejemplo: UNA persona nace en UN sólo PAIS

(UNA persona se relaciona, mediante la relación NACIDO_EN con UNA única ocurrencia de la entidad PAIS)

En este caso, y una vez partido el rombo de la relación, la parte de la relación que queda al lado de la entidad PAIS, no se pinta, ya que es una relación "a uno" (solo pintamos la parte de la relación que es a "muchos")

Nacido_en

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

Muchos a muchos (N:N). A cada ocurrencia de la entidad A le pueden corresponder varias ocurrencias de la entidad B. Y a cada ocurrencia de la entidad B le pueden corresponder varias ocurrencias de la entidad A.

La relación se lee una relación "muchos a muchos", y se pintan las dos mitades del rombo de la relación, ya que SIEMPRE pintamos la parte del "muchos", al ser esta "muchos a muchos", pintamos las dos partes, y el rombo queda todo pintado.

También, si no queremos pintar la relación, lo podemos indicar poniendo las letras N:M encima de la relación (Las letras "N" ó "M" indican "MUCHO"). Pero es más gráfico si pintamos las relación, ya que a nivel visual, es más fácil identificar la cardinalidad de las relaciones.

> **💡 Apunt Tècnic**
> Ejemplo: Un profesor IMPARTE muchas asignaturas, y UNA asignatura puede ser impartida por muchos profesores. Para hacer la lectura de la CARDINALIDAD

Siempre se lee de izquierda a derecha, y después de derecha a izquierda.

- De izquierda a derecha: Siempre empezaremos con la frase

UNA (ocurrencia) de la entidad de la izquierda, con cuántas ocurrencias de la entidad de la derecha se relaciona?

En el ejemplo: UN profesor IMPARTE MUCHAS asignturas

(UN profesor, se relaciona, mediante la relación IMPARTIR con MUCHAS ocurrencias de la entidad asignautra)

En este caso, partimos el símbolo de la relación, es decir, el rombo, en dos partes, y pintamos la parte que está en el MUCHOS, es decir, pintamos la parte de la relación que está en ASIGNATURA. También podremos indicarlo mediante el teto 1:N, poniendo la N en la parte del muchos, es decir en la parte de la entidad ASGINATURA.

- De derecha a izquierda: Siempre empezaremos con la frase

UNA (ocurrencia) de la entidad de la derecha, con cuántas ocurrencias de la entidad de la izquierda se relaciona?

En el ejemplo: UNA asignatura puede ser impartida por MUCHOS profesores

(UNA asignatura ser relaciona, mediante la relación IMPARTIR con MUCHAS ocurrencias de la entidad PROFESOR)

En este caso, y una vez partido el rombo de la relación, la parte de la relación que queda al lado de la entidad PROFESOR, se pinta también, ya que es una relación "a muchos" , y por lo tanto, la relación muchos a muchos, se pinta todo el rombo. Imparte ASIGNATURA

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

#### 3.2. GRADO DE UNA RELACIÓN

Es el número de entidades que participan en la relación. Las relaciones pueden ser Reflexivas, Binarias, Ternarias,… según su grado

.

Reflexivas (grado 1): son aquellas en las que la entidad se relaciona consigo misma. SOLO VEREMOS DOS EJEMPLOS. EL RESTO DE RELACIONES REFLEXIVAS O UNARIOS, NO LAS VEREMOS.

> **💡 Apunt Tècnic**
> Ejemplo: Es una relación que se relaciona con ella misma. En el ejemplo, la relación EMPLEADOS ser relaciona con la entidad EMPLEADO mediante la relación ES_SUPERVISOR (ó ES_JEFE). Es una relación 1:N ("uno a muchos"), és decir, UN EMPLEADO ES JEFE de MUCHOS EMPLEADOS. Y UN EMPLEADO tiene UN UNICO JEFE ó SUPERVISOR (asumimos que un empleado sólo tiene un JEFE directamente superior).

La otra relación reflexiva que veremos, es la relación DELEGADO de una clase. Supongamos una clase con varios alumnos. La clase tiene un único DELEGAGO, y el ALUMNO de la clase que es delegago, ES_DELEGADO de muchos alumnos. Por qué es reflexiva? porque el Delegado de la clase, al mismo tiempo, es un alumno, por lo tanto la entidad que se relaciona és ALUMNO, y la relación és ES_DELEGAGO. La lectura es

"Un ALUMNOS ES_DELEGADO de muchos ALUMNOS Muchos ALUMNOS tienen UN único delegago."

Son un poco liosas, pero solo vamos a ver estas dos relaciones reflexivas, y las dos son relaciones reflexivas UNO a MUCHOS (1:N).

es_supervisado supervisa es_supervisor

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

Binarias (grado 2): son relaciones en las que participan 2 entidades. SON LAS MÁS COMUNES, Y SON LAS QUE VEREMOS EN TODOS LOS EJERCICIOS.

Ternarias (grado 3): son relaciones donde participan tres entidades. NO LAS VEREMOS.

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

#### 3.3. ATRIBUTOS EN RELACIONES

Es posible que haya atributos que cuelguen de las relaciones. Se representan como los atributos de las entidades, mediante una elipse y con el nombre del atributo dentro. Se unen a la relación mediante una linea recta.

Vamos a ver un ejemplo

> **💡 Apunt Tècnic**
> Ejemplo: En esta relación tenemos dos entidades, CLIENTE y PRODUCTO, y se relacionan a través de la relación COMPRA, mediante una relación "muchos a muchos" (N:M).

¿Qué significa? Un cliente, compra muchos productos, y un producto es comprado por muchos clientes.

Pero en este caso si quisiéramos saber qué cantidad de producto ha comprado cada cliente solo podríamos ponerlo en la relación, mediante un atributo, de manera que cuanto un cliente compre un producto, sabremos el número de unidades que compra.

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

DE MOMENTO, ESTE APARTADO NO VAMOS A VERLO....

#### 3.4. GENERALIZACIÓN

Proceso según el cual se crea una nueva entidad a p artir de los datos que comparten ciertos atributos. Dicho de otro modo, cuando a partir de 2 o más entidades que tienen atributos comunes se crea una nueva entidad general con esos atributos.

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (COMPLETO)

La generalización puede tener distintas propiedades de cobertura. Por un lado pueden ser

Totales o Parciales. Una generalización será total cuando no haya una ocurrencia de la entidad general que no pertenezca a ninguno de los subtipos, en otro caso será parcial.    · Disjunta o Solapada. Una generalización será disjunta cuando una ocurrencia del tipo general no puede aparecer en varios subtipos a la vez. En otro caso será solapada.

En este caso las personas solo pueden ser hombres o mujeres por lo que será Total (T). Además una persona o es hombre o es mujer, por eso es disjunta (D).

En este caso un vehículo puede ser otra cosa a parte de coche o moto, por eso es parcial (P). Además o es coche o es moto, no puede ser ambas a la vez, por eso es disjunta (D).

Imaginemos que como empleados solo hay profesores o jefes de estudio, en este caso sería total. Pero un jefe de estudios también es profesor, por eso es solapada.

---

## 13.3 Tema 2. Model Entitat-Relació (RESUMEN)

Tema del Model Entitat-Relació. RESUMEN

Tema 2

M o d e l o E n t i d a d - R e l a c i ó n ( E - R )

(1 parte – resumen)

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (RESUMEN)

El modelo Entidad-Relación es un modelo conceptual de datos orientado a entidades. Se basa en una técnica de representación gráfica que incorpora información relativa a los datos y las relaciones existentes entre ellos, para darnos una visión de mundo real, eliminando los detalles irrelevantes.

Características del modelo

Refleja tan solo la existencia de los datos, no lo que se hace con ellos.  · Se incluyen todos los datos relevantes del sistema en estudio.  · No está orientado a aplicaciones específicas.  · Es independiente de los SGBD.  · No tiene en cuenta restricciones de espacio, almacenamiento, ni tiempo de ejecución.  · Está abierto a la evolución del sistema.  · Es el modelo conceptual más utilizado.

Los elementos básicos del modelo E-R original son

 ENTIDAD  ATRIBUTO  RELACION

Una entidad es cualquier objeto (real o abstracto) que existe en la realidad y acerca del cual queremos almacenar información en la BD.

Las entidades se representan gráficamente mediante rectángulos con su nombre en el interior.

> **💡 Apunt Tècnic**
> Ejemplo: ASIGNATURA es una entidad. 'Matemáticas', ‘Filosofía’ y 'Física' son ocurrencias de la entidad ASIGNATURA.

Los atributos son cada una de las propiedades o características que tiene una entidad. Se representan mediante un óvalo con el nombre del atributo en el centro

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (RESUMEN)

Tenemos distintos tipos de atributos.

Atributos simples: son atributos que no están formados por otros atr ibutos.

Atributos compuestos: son atributos que están formados por otros atribut os que a su vez pueden ser simples y compuestos.

Atributos identificadores: son aquellos que identifican de forma unívoca cada ocurrencia de una entidad. Toda entidad debe tener al menos un atributo identificador.   

Los atributos identificadores simples se representan subrayando el nombre del atributo.   Una entidad puede tener más de un atributo identificador, en este caso elegiremos uno como identificador primario (P), quedando el resto como identificadores alternativos (A).   · Atributos multivaluados: son aquellos que pueden almacenar varios valores simultáneamente para una misma ocurrencia de una en tidad. Se representan de la siguiente forma:       · Atributos no nulos: aquellos que obligatoriamente deben tener valor, no pueden ser nulos (sin valor).

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (RESUMEN)

Una relación es una correspondencia o asociación entre 2 o más entidades. Las relaciones en el modelo tradicional se representan gráficamente mediante rombos con el nombre de la

relación al lado. Normalmente son verbos o formas verbales.

La cardinalidad de una relación es el número de ocurrencias de una entidad asociadas a una ocurrencia de la otra entidad.

Existen tres tipos de correspondencias

Uno a uno (1:1). A cada ocurrencia de la entidad A le corresponde una ocurrencia de la entidad B, y viceversa.

Uno a muchos (1:N). A cada ocurrencia de la entidad A le pueden corresponder varias ocurrencias de la entidad B, pero a cada ocurrencia de la entidad B sólo le corresponde una ocurrencia de la entidad A.

Muchos a muchos (N:N). A cada ocurrencia de la entidad A le pueden corresponder varias ocurrencias de la entidad B. Y a cada ocurrencia de la entidad B le pueden corresponder varias ocurrencias de la entidad A. Casado_con Nacido_en Imparte

Aplicaciones Ofimáticas Base de Datos Tema 02. Entidad Relación (RESUMEN)

3.2.GRADO DE UNA RELACIÓN

Es el número de entidades que participan en la rela ción. Las relaciones pueden ser Reflexivas, Binarias, Ternarias,… según su grado y Fuertes-Débiles según su dependencia.

Reflexivas (grado 1): son aquellas en las que la entidad se relaciona consigo misma.

Binarias (grado 2): son relaciones en las que participan 2 entidades.

Ternarias (grado 3): son relaciones donde participan tres entidades.

3.3. ATRIBUTOS EN RELACIONES

Es posible que haya atributos que cuelguen de las relaciones. Vamos a ver un ejemplo

---

## 13.4 Tema 2. Model Entitat-Relació (2 vers)

Tema 2

M o d e l o E n t i d a d - R e l a c i ó n ( E - R )

(2 parte)

Aplicaciones ofimáti Base de da Tema 02. Modelo Entidad-Relación (2 pa

El modelo entidad-interrelación

El modelo de datos entidad-interrelación (E-R), también llamado entidad-relación, fue propuesto por Peter Chen en 1976 para representación conceptual de los problemas del mundo real. En 1988, el ANSI lo seleccionó como modelo estándar para los sistema diccionarios de recursos de información. Es un modelo muy extendido y potente para la representación de los datos. Se simbo haciendo uso de grafos y de tablas. Propone el uso de tablas bidimensionales para la representación de los datos y sus relaciones.

Conceptos básicos

Entidad. Es un objeto del mundo real, que tiene interés para la empresa. Por ejemplo, los ALUMNOS de un centro escolar o CLIENTES de un banco. Se representa utilizando rectángulos.

Conjunto de entidades. Es un grupo de entidades del mismo tipo, por ejemplo, el con- junto de entidades cliente. Los conjuntos entidades no necesitan ser disjuntos, se puede definir los conjuntos de entidades de empleados y clientes de un banco, pudiendo exi una persona en ambas o ninguna de las dos cosas.

Entidad fuerte. Es aquella que no depende de otra entidad para su existencia. Por ejem- plo, la entidad ALUMNO es fuerte pues depende de otra para existir, en cambio, la entidad NOTAS es una entidad débil pues necesita a la entidad ALUMNO para existir. entidades débiles se relacionan con la entidad fuerte con una relación uno a varios. Se representan con un rectángulo con un bo doble.

Atributos o campos. Son las unidades de información que describen propiedades de las entidades. Por ejemplo, la entidad ALUM posee los atributos: número de matrícula, nombre, dirección, población y teléfono. Los atributos toman valores, por ejemplo atributo población puede ser ALCALÁ, GUADALAJARA, etcétera. Se representan mediante una elipse con el nombre en su interior.

Dominio. Es el conjunto de valores permitido para cada atributo. Por ejemplo el dominio del atributo nombre puede ser el conjunto cadenas de texto de una longitud determinada.

Identificador o superclave. Es el conjunto de atributos que identifican de forma única a cada entidad. Por ejemplo, la entidad EMPLEA con los atributos Número de la Segu- ridad Social, DNI, Nombre, Dirección, Fecha nacimiento y Tlf, podrían ser identificado- re superclaves los conjuntos Nombre, Dirección, Fecha nacimiento y Tlf, o también DNI, Nombre y Dirección, o también Num Seg Soc Nombre, Dirección y Tlf, o solos el DNI y el Número de la Seguridad Social.

Clave candidata. Es cada una de las superclaves formadas por el mínimo número de cam- pos posibles. En el ejemplo anterior, son el DN el Número de la Seguridad Social.

Clave primaria o principal (primary key): Es la clave candidata seleccionada por el dise- ñador de la BD. Una clave candidata no pue contener valores nulos, ha de ser sencilla de crear y no ha de variar con el tiempo. El atributo o los atributos que forman esta clave representan subrayados.

Clave ajena o foránea (foreign key): Es el atributo o conjunto de atributos de una entidad que forman la clave primaria en otra entidad. Las cla ajenas van a representar las relaciones entre tablas. Por ejemplo, si tenemos por un lado, las entidades ARTÍCULOS, con los atributos código artículo (clave primaria), denominación, stock. Y, por otro lado, VENTAS, con los atri- butos Código de venta (clave primaria), fecha de venta, cód de artículo, unidades vendidas, el código de artículo es clave ajena pues está como clave primaria en la entidad ARTÍCULOS.

icas atos arte) a la as de oliza los de stir no Las rde MNO o, el o de DO, es o cial, NI y ede e se aves o de digo

1º SMX

Tema 02. Modelo Entidad-Relación

A. Relaciones y conjuntos de relaciones

Definimos una relación como la asociación entre diferentes entidades. Tienen nombre de verbo, que la identifica de las otras relaciones y se representa mediante un rombo. Nor- malmente las relaciones no tienen atributos. Cuando surge una relación con atributos sig- nifica que debajo hay una entidad que aún no se ha definido. A esa entidad se la llama entidad asociada. Esta entidad dará origen a una tabla que contendrá esos atributos. Esto se hace en el modelo relacional a la hora de representar los datos. Lo veremos más adelante.

Un conjunto de relaciones es un conjunto de relaciones del mismo tipo, por ejemplo entre ARTÍCULOS y VENTAS todas las asociaciones existentes entre los artículos y las ven- tas que tengan estos, forman un conjunto de relaciones.

La mayoría de los conjuntos de relaciones en un sistema de BD son binarias (dos entida- des) aunque puede haber conjuntos de relaciones que implican más de dos conjuntos de entidades, por ejemplo, una relación como la relación entre cliente, cuenta y sucursal. Siempre es posible sustituir un conjunto de relaciones no binario por varios conjuntos de relaciones binarias distintos. Así, conceptualmente, podemos restringir el modelo E-R para incluir sólo conjuntos binarios de relaciones, aunque no siempre es posible.

La función que desempeña una entidad en una relación se llama papel, y normalmente es implícito y no se suele especificar. Sin embargo, son útiles cuando el significado de una relación necesita ser clarificado.

Una relación también puede tener atributos descriptivos, por ejemplo, la FECHA_OPERA- CIÓN en el conjunto de relaciones CLIENTE_CUENTA, que especifica la última fecha en la que el cliente tuvo acceso a su cuenta (ver Figura 1.3).

Figura 1.3. Relación con atributos descriptivos.

Diagramas de estructuras de datos en el modelo E-R

Los diagramas Entidad-Relación representan la estructura lógica de una BD de manera gráfica. Los símbolos utilizados son los siguientes

Rectángulos para representar a las entidades.

Elipses para los atributos. El atributo que forma parte de la clave primaria va subrayado.

Rombos para representar las relaciones.

Las líneas, que unen atributos a entidades y a relaciones, y entidades a relaciones. Si la flecha tiene punta, en ese sentido está el uno, y si no la tiene, en ese sitio está el muchos. La orientación señala cardinalidad.

Si la relación tiene atributos asociados, se le unen a la relación.

Aplicaciones ofimáti Base de da Tema 02. Modelo Entidad-Relación (2 pa

Cada componente se etiqueta con el nombre de lo que representa.

En la Figura 1.4 se muestra un diagrama E-R correspondiente a PROVEEDORES-ARTÍCULOS. Un PROVEEDOR SUMINISTRA muc ARTÍCULOS.

Figura 1.4. Diagrama E-R, un proveedor suminista muchos artículos.

Grado y cardinalidad de las relaciones

Grado

Se define grado de una relación como el número de conjuntos de entidades que parti- cipan en el conjunto de relaciones, o lo que e mismo, el número de entidades que participan en una relación. Las relaciones en las que participan dos entidades son bina- rias o grado dos. Si participan tres serán ternarias o de grado 3. Los conjuntos de rela- ciones pueden tener cualquier grado, lo ideal es te relaciones binarias.

Las relaciones en las que sólo participa una entidad se llaman anillo o de grado uno; rela- ciona una entidad consigo misma, se las lla relaciones reflexivas. Por ejemplo, la enti- dad EMPLEADO puede tener una relación JEFE DE consigo misma: un empleado es JEFE muchos empleados y, a la vez, el jefe es un empleado.

Otro ejemplo puede ser la relación DELEGADO DE los alumnos de un curso: el delegado es alumno también del curso. Ver Figura 1.5

Figura 1.5. Relaciones de grado 1. icas atos arte) hos s lo o de ener ama E DE 5.

1º SMX

Tema 02. Modelo Entidad-Relación

En la Figura 1.6 se muestra una relación de grado dos, que representa un proveedor que suministra artículos, y otra de grado tres, que representa un cliente de un banco que tiene varias cuentas, y cada una en una sucursal

Figura 1.6. Relaciones de grados 2 y 3.

En el modelo E-R se representan ciertas restricciones a las que deben ajustarse los datos contenidos en una BD. Éstas son las restricciones de las cardinalidades de asignación, que expresan el número de entidades a las que puede asociarse otra entidad mediante un conjunto de relación.

Cardinalidad

Las cardinalidades de asignación se describen para conjuntos binarios de relaciones. Son las siguientes

- 1:1, uno a uno. A cada elemento de la primera entidad le corresponde sólo uno de la segunda entidad, y a la inversa. Por ejemplo, un

cliente de un hotel ocupa una habitación, o un curso de alumnos pertenece a un aula, y a esa aula sólo asiste ese grupo de alumnos. Ver Figura 1.7

Figura 1.7. Representación de relaciones uno a uno.

1º SMX

Tema 02. Modelo Entidad-Relación

- 1:N, uno a muchos. A cada elemento de la primera entidad le corresponde uno o más elementos de la segunda entidad, y a cada

elemento de la segunda entidad le corresponde uno sólo de la primera entidad. Por ejemplo, un proveedor suministra muchos artículos (ver Figura 1.8).

Figura 1.8. Representación de relaciones uno a muchos.

- N:1, muchos a uno. Es el mismo caso que el anterior pero al revés; a cada ele- mento de la primera entidad le corresponde un

elemento de la segunda, y a cada elemento de la segunda entidad, le corresponden varios de la primera.

- M:N, muchos a muchos. A cada elemento de la primera entidad le corresponde uno o más elementos de la segunda entidad, y a cada

elemento de la segunda entidad le corresponde uno o más elementos de la primera entidad. Por ejemplo, un vendedor vende muchos artículos, y un artículo es vendido por muchos vendedores (ver Figura 1.9).

Figura 1.9. Representación de relaciones muchos a muchos.

La cardinalidad de una entidad sirve para conocer su grado de participación en la rela- ción, es decir, el número de correspondencias en las que cada elemento de la entidad interviene. Mide la obligatoriedad de correspondencia entre dos entidades.

La representamos entre paréntesis indicando los valores máximo y mínimo: (máximo, mínimo). Los valores para la cardinalidad son: (0,1), (1,1), (0,N), (1,N) y (M,N). El valor 0 se pone cuando la participación de la entidad es opcional.

En la Figura 1.10, que se muestra a continuación, se representa el diagrama E-R en el que contamos con las siguientes entidades

- EMPLEADO está formada por los atributos Nº. Emple, Apellido, Salario y Comisión, siendo el atributo Nº. Emple la clave principal

(representado por el subrayado).

- DEPARTAMENTO está formada por los atributos Nº. Depart, Nombre y Localidad, siendo el atributo Nº. Depart la clave principal.

1º SMX

Tema 02. Modelo Entidad-Relación

Caso práctico

- Se han definido dos relaciones

La relación «PERTENECE» entre las entidades EMPLEADOS y DEPARTAMENTO, cuyo tipo de correspondencia es 1:N, es decir, a un departamento le pertenecen cero o más empleados (0,N). Un empleado pertenece a un departamento y sólo a uno (1,1).

La relación «JEFE», que asocia la entidad EMPLEADO consigo misma. Su tipo de correspondencia es 1:N, es decir, un empleado es jefe de cero o más empleados (0,N). Un empleado tiene un jefe y sólo uno (1,1). Ver Figura 1.10

Figura 1.10. Diagrama E-R de las relaciones entre departamentos y empleados.

EJEMPLO

1 Vamos a realizar el diagrama de estructuras de datos en el modelo E-R. Supongamos que en un centro escolar se impar- ten muchos cursos. Cada curso está formado por un grupo de alumnos, de los cuales uno de ellos es el delegado del grupo. Los alumnos cursan asignaturas, y una asignatura puede o no ser cursada por los alumnos.

Para su resolución, primero identificaremos las entidades, luego las relaciones y las cardinalidades y, por último, los atribu- tos de las entidades y de las interrelaciones, si las hubiera.

- Identificación de entidades: una entidad es un objeto del mundo real, algo que tiene interés para la empresa. Se hace un análisis del

enunciado, de donde sacaremos los candidatos a entidades: CENTROS, CURSOS, ALUMNOS, ASIGNATURAS, DELEGADOS. Si analizamos esta última veremos que los delegados son alumnos, por lo tanto, los tenemos recogidos en ALUMNOS. Esta posible entidad la eliminaremos. También eliminaremos la posible entidad CENTROS pues se trata de un único centro, si se tratara de una gestión de centros tendría más sentido incluirla.

- Identificar las relaciones: construimos una matriz de entidades en la que las filas y las columnas son los nombres de enti- dades y cada

celda puede contener o no la relación, las relaciones aparecen explícitamente en el enunciado. En este ejemplo, las relaciones no tienen atributos. Del enunciado sacamos lo siguiente

Un curso está formado por muchos alumnos. La relación entre estas dos entidades la llamamos PERTENECE, pues a un curso pertenecen muchos alumnos, relación 1:M. Consideramos que es obligatorio que existan alumnos en un curso. Para calcular los máximos y mínimos hacemos la pregunta: a un CURSO, ¿cuántos ALUMNOS pertenecen, como mínimo y como máximo? Y se ponen los valores en la entidad

1º SMX

Tema 02. Modelo Entidad-Relación

CURSOS ALUMNOS ASIGNATURAS ALUMNOS, en este caso (1,M). Para el sentido contrario, hace- mos lo mismo: un ALUMNO, ¿a cuántos CURSOS va a pertenecer? Como mínimo a 1, y como máximo a 1, en este caso pondremos (1,1) en la entidad CURSOS.

De los alumnos que pertenecen a un grupo, uno de ellos es DELEGADO. Hay una relación de grado 1 entre la entidad ALUMNO que la podemos llamar ES DELEGADO. La relación es 1:M, un alumno es delegado de muchos alumnos. Para calcular los valores máximos y mínimos preguntamos: ¿un ALUMNO de cuántos alumnos ES DELEGADO? Como mínimo es 0, pues puede que no sea delegado, y como máximo es M, pues si es delegado lo será de muchos; pondremos en el extremo (0,M). Y en el otro extremo pondremos (1,1), pues obligatoriamente el delegado es un alumno.

Entre ALUMNOS y ASIGNATURAS surge una relación N:M, pues un alumno cursa muchas asignaturas y una asignatura es cursada por muchos alumnos. La relación se llamará CURSA. Consideramos que puede haber asignaturas sin alum- nos. Las cardinalidades serán (1:M) entre ALUMNO-ASIGNATURA, pues un alumno, como mínimo, cursa una asigna- tura, y, como máximo, muchas. La cardinalidad entre ASIGNATURA-ALUMNO será (0,N), pues una ASIGNATURA puede ser cursada por 0 alumnos o por muchos.

En la Tabla 1.2 se muestra la matriz de entidades y relaciones entre ellas

Tabla 1.2. Matriz de entidades y relaciones entre ellas.

Las celdas que aparecen con una x indican que las relaciones están ya identificadas. Las que aparecen con guiones indi- can que no existe relación. En la siguiente figura se muestra el diagrama de las relaciones y las cardinalidades.

- Identificar los atributos, como el enunciado no explicita ningún tipo de característica de las entidades nos imaginamos los atributos,

que pueden ser los siguientes

CURSOS - COD_CURSO (clave primaria), DESCRIPCIÓN, NIVEL, TURNO y ETAPA

ALUMNOS - NUM-MATRÍCULA (clave primaria), NOMBRE, DIRECCIÓN, POBLACIÓN, TLF y NUM_HERMANOS

ASIGNATURAS - COD-ASIGNATURA (clave primaria), DENOMINACIÓN y TIPO

CURSA(N:M) --------------- PERTENECE (1:M) ES DELEGADO(1:M) x --------------- x --------------- CURSOS ALUMNOS ASIGNATURAS

1º S Tema 02. Modelo Entidad-Relac

Generalización y jerarquías de generalización

Las generalizaciones proporcionan un mecanismo de abstracción que permite especiali- zar una entidad (que se denominará superti en subtipos, o lo que es lo mismo gene- ralizar los subtipos en el supertipo.

Una generalización se identifica si encontramos una serie de atributos comunes a un con- junto de entidades, y unos atribu específicos que identificarán unas características.

Los atributos comunes describirán el supertipo y los particulares los subtipos. Una de las características más importantes de jerarquías es la herencia, por la que los atributos de un supertipo son heredados por sus subtipos. Si el supertipo participa en una re ción los subtipos también participarán.

Por ejemplo, en una empresa de construcción podremos identificar las siguientes entidades

- EMPLEADO, con los atributos N_EMPLE (clave primaria,) NOMBRE, DIRECCIÓN, FECHA_NAC, SALARIO y PUESTO.

- ARQUITECTO, con los atributos de empleado más los atributos específicos: COMI- SIONES, y NUM_PROYECTOS.

- ADMINISTRATIVO, con los atributos de empleado más los atributos específicos: PUL- SACIONES y NIVEL.

- INGENIERO, con los atributos de empleado más los atributos específicos: ESPECIA- LIDAD y AÑOS_EXPERIENCIA.

En la Figura 1.12 se representa este ejemplo de generalización.

La generalización es total si no hay ocurrencias en el supertipo que no pertenezcan a ninguno de los subtipos, es decir, que los empleados o arquitectos, o son administrativos, o son apa- rejadores, no pueden ser varias cosas a la vez. En este caso, la generalización sería también exclu- siv un empleado puede ser varias cosas a la vez la generalización es solapada o superpuesta.

La generalización es parcial si existen empleados que no son ni ingenieros, ni adminis- trativos, ni arquitectos. También puede exclusiva o solapada. Las cardinalidades en estas relaciones son siempre (1,1) en el supertipo y (0,1) en los subtipos, para las exc sivas. (0,1) o (1,1) en los subtipos para las solapadas o superpuestas.

SMX

ción ipo) utos las ela- son va. Si ser clu

1º SMX

Tema 02. Modelo Entidad-Relación

Figura 1.12. Representación de una generalización.

Así pues, habrá jerarquía solapada y parcial (que es la que no tiene ninguna restricción) solapada y total, exclusiva y parcial, y exclusiva y total. En la Figura 1.13 se muestran cómo se representan.

Figura 1.13. Tipos y representación de jerarquías.

1º S Tema 02. Modelo Entidad-Relac

Agregación

Una limitación del modelo E-R es que no es posible expresar relaciones entre relacio- nes. En estos casos se realiza una agregaci que es una abstracción a través de la cual las relaciones se tratan como entidades de nivel más alto. Por ejemplo, conside- ramos relación entre EMPLEADOS y PROYECTOS, un empleado trabaja en varios pro- yectos durante unas horas determinadas y en trabajo utiliza unas herramientas determinadas. La representación del diagrama de estructuras se muestra en la Figura 1.14 siguiente

Figura 1.14. Diagrama E-R de una relación entre otra relación.

Si consideramos la agregación, tenemos que la relación TRABAJO con las entidades EMPLEADO y PROYECTO se pueden represen como un conjunto de entidades llamadas TRABAJO, que se relacionan con la entidad HERRAMIENTAS mediante la relación USA. Ver Fig 1.15

Figura 1.15. Conjunto de entidades y relaciones para representar una relación entre una relación.

SMX

ción ión, una ese ntar ura

---

## 13.5 B1-EXERCICIS Model Entitat-Relació

Operaciones con bases de datos

EJERCICIOS T2

Tema 2

EJERCICIOS

Modelo Entidad-Relación

1 parte: Editorial Paraninfo

Aplicaciones Ofimáticas Base de Datos Tema 02. EJERCICIOS Base de Datos Relacionales. E-R (B1)

EJERCICIOS PROPUESTOS

2.1. Define los dos elementos más importantes del modelo E-R.

#### 2.2. Se desea realizar el diagrama de estructuras de datos en el modelo E-R

correspondiente al siguiente enunciado: “supongamos el bibliobús que llega a un pueblo que proporciona un servicio de préstamos de libros a los socios del pueblo. Los libros están clasificados por temas. Un tema puede contener varios libros. Un libro es prestado a muchos socios, y un socio puede coger varios libros. En el préstamo de libros es importante saber la Fecha de préstamo y la Fecha de devolución. De los libros nos interesa saber el título, el autor y el número de ejemplares”.

2.3. Se desea realizar el diagrama de estructuras de datos en el modelo E-R correspondiente al siguiente enunciado

“Supongamos una empresa de transportes que distribuye paquetes por toda España. Existen los transportistas que son los encargados de llevar los paquetes a las distintas provincias. Un transportista distribuye muchos paquetes, y un paquete sólo puede ser distribuido por un transportista. Los paquetes van destinados a provincias, a una provincia pueden llegar varios paquetes, sin embargo un paquete sólo va a una provincia. La empresa cuenta con una serie de camiones que son conducidos por los transportistas, un transportista conduce muchos camiones, y un camión es conducido por muchos transportistas, en fechas diferentes.

De los transportistas nos interesa saber el código de transportista, el teléfono, la dirección, el salario y la población. De los paquetes el código de paquete, la descripción, el destinatario, dirección del destinatario y otros datos. De las provincias el código y el nombre. De los camiones la matrícula, los kilómetros acumulados, modelo, tipo y potencia, entre otros. En la conducción de los camiones es importante saber la fecha del viaje y los días del viaje”.

---

## 13.6 B2-EXERCICIS Model Entitat-Relació

Aci teniu una col·lecció d'exercicis Entitat-Relació, que anirem fent poc a poc....

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
