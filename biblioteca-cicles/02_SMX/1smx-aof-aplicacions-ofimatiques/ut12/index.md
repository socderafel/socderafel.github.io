---
layout: default
title: "UT12 — BDA. SISTEMES GESTORS BASE DE DADES (SGBD) — Aplicacions Ofimàtiques | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UT12 Completa"
prev_url: "../ut11/ut11actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT11"
next_url: "../ut12/ut1201.html"
next_label: "12.1 Tema 0. Introducció a les base de dades. ➡️"
---

# 📘 UT12 — BDA. SISTEMES GESTORS BASE DE DADES (SGBD) (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**12.1 Tema 0. Introducció a les base de dades.**](#ut1201) (o [obrir en pàgina individual ➡️](./ut1201.md) )
> - [**12.2 Tema 1. Sistemas Gestores de Base de Datos (vers**](#ut1202) (o [obrir en pàgina individual ➡️](./ut1202.md) )
> - [**12.3 Tema 1. Sistemas Gestores de Base de Datos (vers**](#ut1203) (o [obrir en pàgina individual ➡️](./ut1203.md) )
> - [**12.4 Tema 1. EXERCICIS SGBD**](#ut1204) (o [obrir en pàgina individual ➡️](./ut1204.md) )
> - [**✍️ Activitats pràctiques UT12**](#ut12actividades) (o [obrir en pàgina individual ➡️](./ut12actividades.md) )

---

## 12.1 Tema 0. Introducció a les base de dades.

> **📌 Introducció de la Unitat**
> En este tema, vorem una introducció a les base de dades. Estarà dividit en dos parts. Una primera part, el tema 0, que serà una introducció, i una segona part, el tema 1, on vorem conceptes generals de base de dades.

> **📌 🏷️ Apunt de la Unitat**
> ##### **Tema 0. Introducció BDA**

> **📌 🏷️ Apunt de la Unitat**
> ##### **Tema 1. Sistemes Gestors Base Dades (SGBD)**

> **🔗 Recurs Web: Video 1. Introducció a les Base de Dades**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=yoeV4Ex8C8U) ↗️**](https://www.youtube.com/watch?v=yoeV4Ex8C8U)
>
> Vos deixe un vídeo, on explica QUÈ és una Base de Dades, per si és del vostre interés

---

Gestión de Base de Datos

Tema 0

I n t r o d u c c i ó n a l a s B a s e d e D a t o s

Aplicaciones ofimáticas Base de Datos Tema 0. Introducción a las Base de Datos

Índice

- Bases de datos vs. Sistemas de ficheros.
- Objetivos de las bases de datos.
- Arquitectura en niveles de las bases de datos.
- Componentes de las bases de datos.
- Modelos de explotación de las bases de datos.

### 1. Bases de datos vs. Sistemas de Ficheros

Caso Real

Vamos a estudiar un caso real, y vamos a ver como, posiblemente, se ha ido guardando la información que se nos plantea a lo largo de los últimos años.

Queremos guardar los datos de los alumnos de nuestro instituto, así como las asignaturas de las que están matriculados y las notas que han obtenido en cada asignatura.

En los años 60, usando papel y “boli”

En los años 70 y 80, usando ficheros

Se utilizaban ficheros de texto donde se guardaba la información

Fichero: alumnos.txt

DNI NOMBRE

DIRECCIÓN FECHA NACIMIENTO -------------------------------------------------------------------------------------- 28945152X José Jiménez Perez C/ Corredera,34 21-10-90 28924896D Alejandra Gómez Marín C/ Picaso, 23 11-02-91 …

Fichero: asignaturas.txt

DNI NOMBRE

ASIGNATURA NOTA ----------------------------------------------------------------------------------- 2894512X José Jiménez Perez

Matemáticas 2894512X José Jiménez Perez

Lengua 28924896D Alejandra Gómez Marín Matemáticas 28924896D Alejandra Gómez Marín Inglés

…………………..

En los años 90 y posteriores..., usando Bases de Datos

Se utiliza un SGBD donde se guarda la información en las siguientes tablas

Alumnos (DNI, Nombre, Dirección, Fecha nacimiento) 2894512X José Jiménez Perez

C/ Corredera,34 21-10-90 28924896D Alejandra Gómez Marín C/ Picaso, 23 11-02-91 ... Asignaturas (Código, Nombre) 001 Matemáticas 002 Lengua 003 Inglés … Notas(DNI, Código_asignatura, nota) 2894512X 001 5 2894512X 002 8 28924896D 001 7 28924896D 003 3 ….

### 2. Objetivos de los SGBD

Evolución

A la hora de obtener información: consultar

Queremos obtener la siguiente información: Se quiere conocer el número de alumnos de más de veinticinco años y con nota media superior a siete que están matriculados actualmente en la asignatura Bases de datos I.

 S.I. Sin informatizar: Obtener está información puede requerir mucho tiempo y mucho trabajo, además hay que realizando cálculos (media,...) e ir mirando alumno por alumno.  S.I. con ficheros: Podemos crear un programa que vaya obteniendo la información del fichero vaya realizando los cálculos y nos de los resultados.

 S.I. Con base de datos: Esta consulta es trivial usando un lenguaje de consulta de datos.

Flexibilidad a los cambios

Si las necesidades del sistema de información cambian, ¿cómo se comporta cada uno de nuestros tres modelos?. Por ejemplo queremos guardar el nombre del profesor que imparte cada asignatura.  S.I. Sin informatizar: Tenemos que ir escribiendo el nombre de profesor en cada ficha.

 S.I. Con ficheros: tendríamos que cambiar el fichero de notas.txt e ir escribiendo una columna más, mucho trabajo.  S.I. Con bases de datos: simplemente habría que añadir un atributo a la tabla asignaturas, con lo que sólo se escribiría una vez el nombre del profesor de cada asignatura.

Problema de la redundancia y la consistencia

La redundancia es la cantidad de datos repetidos en la información guardada. El objetivo es reducir todo lo posible la redundancia: con ello conseguimos dos cosas, que la información ocupe menos espacio y que sea lo más coherente posible.

La inconsistencia de los datos se produce cuando un dato redundante es diferente en dos o más sitios. Es el gran problema de la redundancia.

¿Cuál de los modelos presentados crees que tiene menos redundancia?

Integridad de la información

La información que guardamos debe ser coherente y veraz. ¿Qué ocurriría en cada uno de los modelos presentados en los siguientes casos?

 Una persona se ha mudado y cambia su dirección.  Nos hemos equivocado a introducir los datos de una persona y tenemos que cambiar el nombre.  Cambiamos el nombre de una asignatura  Desaparece una asignatura del plan de estudio  Las bases de datos aseguran automáticamente la integridad de los datos, sin que el usuario tenga que realizar ninguna operación.

Concurrencia:¿Pueden varios usuarios trabajar a la vez?

Concurrencia de usuarios: Por ejemplo tenemos tres administrativas que están trabajando con la información que tenemos guardada.

 S.I. Sin informatizar: Si por ejemplo nuestra fichas en papel están encuadernadas, es complicado que varias personas puedan trabajar al mismo tiempo con la información.  S.I. Con ficheros: Si tenemos a las tres administrativas con programas que leen y modifican los ficheros de textos, puede ocurrir que en un determinado momento una de ellas este leyendo un dato incorrecto.

 S.I. Con base de datos: Existe el concepto de transacción, por el que se asegura que la información va a ser siempre consistente.

Seguridad

Estamos trabajando con datos sensibles, que no todo el mundo puede tener acceso a ellos. El tema de la seguridad es muy importante en la actualidad. Sólo determinadas personas deben poder acceder a algunas informaciones: datos personales, historial médico, historial policial, etc...

¿Cómo de seguro es cada una de los módelos que hemos estudiado?

### 2. Definición de BASE DE DATOS y SGBD

Una base de datos (BD) es un conjunto de datos relacionados entre sí, organizados y estructurados, con información referente a algo.

Las base de datos son tratadas utilizando los sistemas gestores de base datos o SGBD, llamados también DBMS (DataBAse Management System), que proporcionan un conjunto de programas que acceden y gestionan esos datos.

Un sistema de gestión de bases de datos (SGBD) (en inglés database management system, abreviado DBMS) es una coleccion de datos relacionados entre si estructurados y organizados y un conjunto de programas que acceden y gestionan esos datos.

Objetivos de los SGBD

 Permitir consultas no predefinidas y complejas.  Ofrecer flexibilidad e independencia de datos.  Minimizar redundancia.  Garantizar integridad de los datos y referencial.  Permitir concurrencia de usuarios.  Proporcionar seguridad de la información.

### 4. Componentes de un SGBD

### 3. Arquitectura en niveles de las bases de

datos.

El cómite ANSI/SPARC define en 1975 una arquitectura para los sistemas gestores de bases de datos. Consta de tres niveles

 Nivel externo o de visión: Se compone de las distintas aplicaciones basadas en vistas de la base de datos. Es lo que ven los usuarios finales.  Nivel conceptual: Se compone de las distintas tablas con sus atributos. Es el nivel que conocen los programadores.  Nivel interno o físico: Define qué discos y archivos componen la base de datos y qué hay en cada uno de ellos. Sólo acceden a este nivel los administradores.

Veamos esta arquitectura con una imagen

La ventaja de esta arquitectura en niveles es que proporciona independencia lógica y física de los datos respecto a las aplicaciones:  Independencia lógica: Se pueden realizar cambios en el nivel conceptual (añadir tablas o atributos) sin que sea necesario reescribir todas las aplicaciones.

 Independencia física: Es posible modificar la ubicación de los ficheros que contienen los datos sin que se vean afectadas las aplicaciones.

- Componentes de un SGBD.

Los SGBD se componen de:  Lenguajes.  El diccionario de datos.  Mecanismos de seguridad e integridad.  Factor humano. Veamos con detalle cada uno de ellos.

Lenguajes.

Los lenguajes que tenga un SGBD deben permitir:  Crear la estructura de la base de datos, incluyendo todos los objetos que puede incluir la misma (tablas, vistas, usuarios, procedimientos, funciones, triggers, etc.): DDL  Consultar y manipular la información almacenada en la base de datos

DML  Asignar privilegios a usuarios, confirmar o abortar transacciones, etc: DCL.

 En algunos casos, también incluyen un lenguaje de cuarta generación (4GL) para RAD (desarrollo rápido de aplicaciones). Ej: Asistentes de Access, Oracle Developer Suite

El diccionario de datos.

El diccionario de datos contiene los metadatos (datos acerca de los datos) de la base de datos, esto es:  La definición de todos los objetos existentes en la base de datos: tablas con sus columnas, vistas, procedimientos, triggers, índices, etc...  La ubicación física de los objetos y el espacio asignado a los mismos.

 Los privilegios y roles asignados a los usuarios.  Las restricciones de las tablas.  Información de auditoría.  Estadísticas de uso de la base de datos.  Información del consumo de recursos actual.  Y un larguísimo etcétera...

Mecanismos de seguridad e integridad.

Un SGBD debe proporcionar utilidades que permitan:  La realización de copias de seguridad de los datos y la restauración de las mismas.  Garantizar la protección de los datos ante accesos no autorizados.  Implantar restricciones de integridad de los datos para evitar daños accidentales de los datos.

 Recuperar la base de datos hasta un estado consistente en caso de error del sistema o cualquier otro imprevisto.  Controlar el acceso concurrente de los usuarios para evitar errores de integridad.

### 5. Modelos de explotación de las base de datos

El factor humano.

Un SGBD siempre va a tener distintas categorías de usuarios

 Usuarios finales: Podrán acceder a la información sobre la que le hayan sido concedidos privilegios.  Programadores: Realizan aplicaciones sobre los objetos de la base de datos para facilitar su trabajo a los usuarios finales.  Administradores o DBAs: Garantizan el correcto funcionamiento de la base de datos y gestionan todos sus recursos. Tienen el nivel más alto de privilegios y responsabilidades legales en caso de que los datos tengan algún tipo de protección. Su objetivo es que la base de datos está siempre disponible y con un rendimiento óptimo.

### 5. Modelos de explotación de las bases de

datos.

En nuestro entorno podemos encontrar los SGBD implantados de diferentes formas:  Monopuesto: La base de datos se encuentra en una máquina y es explotada desde la misma máquina. Típico en SGBD de escritorio: Access, OpenBase.  Cliente/Servidor: El SGBD está en una máquina pero se accede a él desde muchas usando, por lo general, distintas aplicaciones.

 Grid de servidores: La base de datos está en distintas máquinas que trabajan colaborativamente para dar servicio a los clientes.  BD distribuida: La información está en distintos servidores, pero no trabajan como una única máquina.  Capas: Cliente → Servidor web → (Servidor de aplicaciones) → Servidor de BD.

---

## 12.2 Tema 1. Sistemas Gestores de Base de Datos (vers

Tema 1

S i s t e m a s G e s t o r e s d e B a s e s d e D a t o s .

F u n c i o n e s .

C o m p o n e n t e s .

A r q u i t e c t u r a d e R e f e r e n c i a y O p e r a c i o n a l e s .

T i p o s d e S i s t e m a s

( 1 p a r t e )

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

- SISTEMAS GESTORES DE BASES DE DATOS. ............................................................... 3

SISTEMAS DE INFORMACIÓN .................................................................................... 3

Concepto. Componentes. Tipos ...................................................................... 3

Sistemas de ficheros. Características. Inconvenientes .................................... 3 BASES DE DATOS ....................................................................................................... 3

Concepto. Características. ............................................................................. 3

Ventajas. Funciones ....................................................................................... 4

Modelos de datos. Esquemas. Diseño de bases de datos. ............................... 4 SISTEMAS GESTORES DE BASES DE DATOS ................................................................ 5

Concepto. Ventajas........................................................................................ 5

Lenguajes de definición y manipulación de datos. Funcionamiento................ 5

- FUNCIONES. .............................................................................................................. 6
- COMPONENTES. ........................................................................................................ 7
- ARQUITECTURA ANSI/SPARC. ................................................................................... 8

NIVELES. FUNCIONES DE TRADUCCIÓN. FASES DE LA ARQUITECTURA ....................... 8 CORRESPONDENCIAS ENTRE NIVELES. INDEPENDENCIA DE DATOS ........................... 9

- ARQUITECTURAS OPERACIONALES. .......................................................................... 9
- TIPOS DE SISTEMAS. ................................................................................................ 10

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

- Sistemas gestores de bases de datos.

Sistemas de información. Concepto. Componentes. Tipos.

 Un sistema de información es un conjunto de elementos que gestiona la información de una determinada organización. Sus componentes son:  Datos. Información relevante que almacena y gestiona el sistema de información.  Hardware. Equipamiento físico que se utiliza para gestionar los datos.

 Software. Aplicaciones que permiten el funcionamiento adecuado del sistema.  Recursos humanos. Personal que maneja el sistema de información.

 Existen dos tipos fundamentales de sistemas de información:  Orientados al proceso. En estos sistemas de información se crean diversas aplicaciones (software) para gestionar diferentes aspectos del sistema. Cada aplicación realiza unas determinadas operaciones, y almacena y utiliza sus propios datos.

 Orientados a los datos. En esos sistemas los datos se almacenan en una única estructura lógica que es utilizable por las aplicaciones. A través de esa estructura se accede a los datos que son comunes a todas las aplicaciones.

Sistemas de ficheros. Características. Inconvenientes.

 Los sistemas de ficheros son sistemas de información orientados al proceso que tienen las siguientes características:  Los ficheros se diseñan para una determinada aplicación.  Los datos se encuentran almacenados en soportes de almacenamiento secundario, mientras su descripción está separada de los mismos, formando parte de los programas.

 No hay control sobre el acceso y la manipulación de los datos más allá de lo impuesto por los programas de aplicación.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

 Los inconvenientes que se plantean son los siguientes:  Hay una ocupación inútil de memoria secundaria.  Suele aparecer un cierto grado de inconsistencia y duplicación en la información.  Falta de flexibilidad del sistema de ficheros para adaptarse a las nuevas necesidades.

 Existe cierta dificultad para compartir información.

Bases de datos. Concepto. Características.

 Una base de datos es un conjunto estructurado de datos relacionados entre sí que reside en soportes de almacenamiento secundario de acceso directo.  Las características que las diferencian de los sistemas de ficheros son las siguientes:  Además de los datos, se almacenan las relaciones entre ellos y sus restricciones semánticas.

 No debe existir redundancia lógica, aunque se admite redundancia física por eficiencia.  Las bases de datos han de atender a múltiples usuarios y diferentes aplicaciones.  Existe independencia tanto física como lógica entre datos y tratamientos.  La definición y la descripción de los datos están integradas con los mismos datos.

 Incorporan procedimientos de actualización y recuperación que mantienen la integridad, seguridad y confidencialidad de los datos.

Ventajas. Funciones.  Las ventajas de las bases de datos son las siguientes:  Reducción de la redundancia de una misma información para uso de distintas aplicaciones.  Mantenimiento de la consistencia de la información, evitando que exista información discrepante sobre un mismo y único hecho.

 Compartir los mismos datos entre distintos usuarios y aplicaciones, gestionando el acceso concurrente de todas ellas a la información.  Distribución de los recursos existentes, en capacidad de almacenamiento y de procesamiento, entre las necesidades de los distintos usuarios y aplicaciones.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

 Las principales funciones que desarrolla una base de datos son las siguientes:  Crear nuevas estructuras de datos que permitan el almacenamiento de nuevos datos, así como de las interrelaciones adecuadas entre los mismos.  Insertar nuevos datos sobre las estructuras ya creadas, al igual que la inserción de interrelaciones entre los datos introducidos en el sistema.

 Extraer selectivamente la información mediante un lenguaje de consulta.  Actualizar o modificar las estructuras de datos y los contenidos de la base de datos.  Eliminar datos existentes en la base de datos manteniendo siempre su integridad.

Modelos de datos. Esquemas. Diseño de bases de datos.

 Un modelo de datos es una colección de conceptos para la descripción de los datos, las relaciones entre ellos y las restricciones que deben cumplir. Un esquema es una descripción de una base de datos mediante un modelo de datos. Los modelos de datos se clasifican en

 Modelos conceptuales. Describen los datos con un alto nivel de abstracción, utilizando entidades (concepto del mundo real), atributos (propiedad de interés de una entidad) y relaciones (interacción entre dos o más entidades). Son independientes de la base de datos a utilizar. Por ejemplo, el modelo entidad/relación y el modelo orientado a objetos.

 Modelos lógicos. Representan los datos valiéndose de estructuras de registros de varios tipos, formados por un número determinado de campos. Son dependientes de la base de datos a utilizar. Por ejemplo, el modelo relacional, el modelo de red y el modelo jerárquico.

 Modelos físicos. Los modelos físicos describen cómo se almacenan los datos en cuanto al formato de los registros, la estructura de los ficheros y los métodos de acceso utilizados.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

 El diseño de bases de datos se estructura en tres pasos:  Diseño conceptual. Recibe como entrada la especificación de requerimientos y su resultado es el esquema conceptual, que es una descripción de alto nivel de la estructura de la base de datos mediante un modelo conceptual, y que es independiente del SGBD que se utilice.

 Diseño lógico. Recibe como entrada el esquema conceptual y da como resultado un esquema lógico, que es una descripción de la estructura de la base de datos mediante un modelo lógico, y que puede ser procesado por el SGBD que se utilice.  Diseño físico. Recibe como entrada el esquema lógico y da como resultado un esquema físico, que es una descripción mediante un modelo físico de las estructuras de almacenamiento y de los métodos usados para tener un acceso efectivo a los datos.

Sistemas gestores de bases de datos. Concepto. Ventajas.  Un sistema gestor de base de datos (SGBD) es un conjunto coordinado de programas, procedimientos y lenguajes que permite describir, recuperar y manipular la información almacenada en la base de datos, manteniendo su integridad, confidencialidad y seguridad.

 Las ventajas de los sistemas gestores de bases de datos son las siguientes:  Independencia de la representación de la información respecto a las aplicaciones que la utilizan. De esta forma, es posible modificar la estructura de almacenamiento de la información sin afectar a las aplicaciones que los utilizan, y que distintas aplicaciones utilicen distintas vistas de los datos.

 Garantizar la seguridad de la información, controlando el acceso y la manipulación de la información por las distintas aplicaciones y usuarios.  Mejorar la integridad de los datos, expresada en restricciones que no pueden violarse. Estas restricciones se pueden aplicar tanto a los datos como a sus relaciones.

 Control de la concurrencia para evitar la pérdida de información o la integridad de los datos.  Mejora en los servicios de copias de seguridad y de recuperación ante fallos.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

Lenguajes de definición y manipulación de datos. Funcionamiento.

 Los sistemas gestores de bases de datos proporcionan un lenguaje para la definición de los datos (DDL), sus relaciones, sus condiciones de acceso e integridad, el control de vistas de usuarios y la especificación de las características físicas de la base de datos.

 También proporcionan un lenguaje para la manipulación de datos (DML) y un soporte para gestionar las peticiones del usuario: consulta, modificación, inserción y borrado de datos.

 La comunicación entre procesos de usuario, SGBD y sistema operativo consta de lo siguiente:  El proceso de usuario llama al SGBD indicando la porción de la base de datos a tratar.  El SGBD traduce la llamada a términos del esquema lógico de la base de datos. Accede al esquema lógico comprobando derechos de acceso y obtiene el esquema físico.

 El SGBD traduce la llamada a los métodos de acceso del sistema operativo.  El sistema operativo accede a los datos tras traducir las órdenes dadas por el SGBD.  Los datos pasan del disco a una memoria intermedia o buffer, en la que se almacenan temporalmente, y de ésta al área de trabajo del usuario del proceso del usuario.

 El SGBD devuelve indicadores al área de comunicaciones del proceso de usuario en los que manifiesta si ha habido errores o advertencias a tener en cuenta. Si las indicaciones son satisfactorias, los datos del área de trabajo serán utilizables por el proceso de usuario.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

- Funciones.

 Acceso a los datos. Proporciona a los usuarios la capacidad de almacenar datos en la base de datos, acceder a ellos y actualizarlos, ocultándoles la estructura física interna (la organización de los ficheros y las estructuras de almacenamiento).

 Diccionario de datos. Mantiene un catálogo accesible por los usuarios en el que se almacenan las descripciones de los datos. Este catálogo es lo que se denomina diccionario de datos y contiene información que describe los datos de la base de datos (metadatos).

 Estados consistentes. Se garantiza que todas las actualizaciones correspondientes a una determinada transacción se realicen, o que no se realice ninguna. Una transacción es una secuencia atómica de acciones en una base de datos ejecutadas por un usuario. Cada transacción que parte de un estado consistente, si se ejecuta completamente, debe dejar la base de datos en otro estado consistente.

 Control de la concurrencia. Proporciona un mecanismo que asegura que la base de datos se actualiza correctamente cuando varios usuarios la están actualizando concurrentemente, eliminando la posibilidad de interferencias o conflictos entre diferentes acciones.

 Control de acceso. Garantiza la seguridad de la información controlando el acceso a la misma únicamente a los usuarios autorizados. La protección debe ser contra accesos no autorizados, tanto intencionados como accidentales.

 Recuperación de fallos. Dispone de un sistema de recuperación de la base de datos en caso de que el sistema falle en medio de una transacción, con el fin de devolverla a un estado consistente. Este fallo puede ser a causa de un error del hardware o del software, o que el usuario detecte un error durante la transacción y la aborte antes de que finalice.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

 Comunicación por red. Debe ser capaz de integrarse con algún software de comunicación, debido a que los usuarios pueden conectarse de forma remota, por lo que la comunicación con la máquina que alberga al sistema gestor de base de datos se debe hacer a través de una red.

 Integridad de la información. Mantiene la integridad de los datos expresada mediante restricciones, que son una serie de reglas que la base de datos no puede violar cuando se realizan operaciones de inserción, modificación o borrado. La integridad de la base de datos requiere la validez y consistencia de los datos almacenados.

 Herramientas de administración. Proporciona una serie de herramientas que permiten administrar la base de datos de modo efectivo, entre las cuales se encuentran las dedicadas a:  La creación y especificación de los datos y de la estructura de la base de datos.  La administración y creación de la estructura física en las unidades de almacenamiento.

 La manipulación de los datos de las bases de datos.  La recuperación en caso de desastre y la creación de copias de seguridad.  La gestión de la comunicación de la base de datos.  La monitorización del uso y del funcionamiento de la base de datos.  El análisis estadístico para examinar las prestaciones o las estadísticas de utilización.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

- Componentes.

 Un sistema gestor de bases de datos se divide en módulos que se encargan de las responsabilidades del sistema. Algunas de estas funciones las proporciona el sistema operativo.

 Los componentes funcionales de un sistema gestor de base de datos se pueden dividir en:  Procesador de consultas. Es el componente principal, transforma las consultas en un conjunto de instrucciones de bajo nivel que se dirigen al gestor de la base de datos:  Compilador de DML (Data Manipulation Language). Traduce las instrucciones de DML a instrucciones de bajo nivel que entiende el motor de evaluación de consultas. Además, intenta transformar las peticiones del usuario en otras equivalentes pero más eficientes, encontrando así una buena estrategia para ejecutar la consulta.

 Precompilador de DML embebido. Convierte las instrucciones de DML embebidas en un programa de aplicación en llamadas a procedimientos normales en el lenguaje anfitrión. Interactúa con el compilador de DML para generar el código apropiado.  Intérprete de DDL (Data Definition Language). Interpreta las instrucciones de DDL y las registra en un conjunto de tablas que contienen metadatos (catálogo).

 Motor de evaluación de consultas. Ejecuta las instrucciones de bajo nivel generadas por el compilador de DML.

 Gestor de la base de datos. Proporciona la interfaz entre los datos de bajo nivel almacenados en la base de datos y los programas de aplicación. Acepta consultas y examina los esquemas externo y conceptual para determinar qué registros se requieren para satisfacer la petición. Entonces realiza una llamada al gestor de ficheros para ejecutar la petición

 Gestor de autorización e integridad. Comprueba que se satisfagan las restricciones de integridad y la autorización de los usuarios para acceder a los datos.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

 Gestor de transacciones. Asegura que la base de datos quede en un estado consistente a pesar de los fallos del sistema, y que las ejecuciones de transacciones concurrentes ocurran sin conflictos.  Gestor de ficheros. Maneja los ficheros en disco en donde se almacena la base de datos utilizando los métodos de acceso del sistema operativo que se encargan de leer o escribir los datos en el buffer del sistema.

Este gestor establece y mantiene la lista de estructuras e índices definidos en el esquema interno.  Gestor de buffers. Es responsable de traer los datos del disco de almacenamiento a memoria principal, y decidir qué datos tratar en la memoria caché.  Gestor del diccionario de datos. Controla los accesos al diccionario de datos y se encarga de mantenerlo.

 Gestor de recuperación. Este módulo garantiza que la base de datos permanece en un estado consistente en caso de que se produzca algún fallo.  Planificador. Este módulo es el responsable de asegurar que las operaciones que se realizan concurrentemente sobre la base de datos tienen lugar sin conflictos.

 Optimizador de consultas. Este módulo determina la estrategia óptima para la ejecución de las consultas.

 Los componentes físicos de un sistema gestor de base de datos son los siguientes:  Ficheros de datos. Almacenan la base de datos en sí.  Diccionario de datos. Almacena metadatos acerca de la estructura de la base de datos.  Índices. Proporcionan acceso rápido a elementos de datos que tienen valores particulares.

 Datos estadísticos. Almacenan información estadística sobre los datos en la base de datos. El procesador de consultas usa esta información para ejecutar una consulta.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

- Arquitectura ANSI/SPARC.

Niveles. Funciones de traducción. Fases de la arquitectura.  En 1975 el comité ANSI/SPARC propuso una arquitectura cuyo objetivo es el de separar los programas de aplicación de la base de datos física. Para ello describe los datos bajo tres niveles de abstracción diferentes

 Esquema externo (estructura lógica de usuario). Es la visión que cada usuario particular tiene de la base de datos. En él deberán encontrarse sólo aquellos datos y relaciones que necesite cada usuario. Habrá tantos esquemas externos como exijan las diferentes aplicaciones, aunque un mismo esquema externo podrá ser utilizado por varias aplicaciones.

 Esquema conceptual (estructura lógica global). Es la visión del administrador y responde al enfoque del conjunto de la realidad representada en la base de datos. Deben incluirse la descripción de entidades, atributos, relaciones, operaciones de los usuarios y restricciones de integridad y confidencialidad, ocultando los detalles de las estructuras de almacenamiento.

 Esquema interno (estructura física). Es la forma en que se organizan los datos en el almacenamiento físico. En este esquema se describen los ficheros y los índices utilizados, así como los métodos de acceso. Se encuentra en el paso anterior a los aspectos físicos como pista o cilindro, y es independiente de los dispositivos de almacenamiento, que son tratados por el gestor de ficheros.

 Entre estos niveles existen unos interfaces que realizan funciones de traducción:  Función de traducción externo/conceptual. Define la correspondencia entre cada una de las vistas externas y la única vista conceptual (diferentes tipos de datos, diferentes nombres de campos, múltiples registros conceptuales fundidos en un único registro externo).

 Función de traducción conceptual/interno. Establece cómo se almacena a nivel interno los registros y campos conceptuales. Si se modifica el almacenamiento de los datos, sólo es necesario modificar la aplicación de correspondencia, y no la vista conceptual.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

 La arquitectura completa está dividida en dos fases:  Definición de datos. La creación de la base de datos comienza con la elaboración del esquema conceptual, que se procesa utilizando una herramienta CASE que lo convierte en los metadatos. Utilizando esta información, se construyen los esquemas interno y externo.

 Manipulación de datos. El usuario puede realizar operaciones sobre la base de datos. Esta petición es transformada por el transformador externo/conceptual que obtiene el esquema correspondiente ayudándose también de los metadatos. El resultado lo convierte otro transformador en el esquema interno usando también la información de los metadatos.

Finalmente del esquema interno se pasa a los datos usando el último transformador que también accede a los metadatos y de ahí se accede a los datos. Para que los datos se devuelvan al usuario en formato adecuado para él se tiene que hacer el proceso contrario.

Correspondencias entre niveles. Independencia de datos.

 En un SGBD basado en esta arquitectura, cada grupo de usuarios hace referencia exclusivamente a su propio nivel externo. Por tanto el SGBD debe transformar cualquier petición en términos de nivel externo a una petición expresada en términos de nivel conceptual, y después a una petición de nivel interno, que se procesará sobre la base de datos almacenada. El proceso de transformar peticiones y resultados de un nivel a otro se denomina correspondencia.

 La independencia de datos es la capacidad para modificar el esquema de un nivel del sistema sin tener que modificar el esquema del nivel inmediato superior. Esto significa:  Independencia física de los datos. Aunque el nivel físico cambie, el nivel conceptual no debe verse afectado. En la práctica esto significa que aunque se añadan o cambien discos u otro hardware, o se modifique el sistema operativo u otros cambios relacionados con la física de la base de datos, el nivel conceptual permanece invariable.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

 Independencia lógica de los datos. Significa que aunque se modifique el esquema conceptual, los esquemas externos y los programas de aplicación no serán afectados.

- Arquitecturas operacionales.

 Estructura cliente-servidor. Estructura clásica, la base de datos y su SGBD están en un servidor al cual acceden los clientes. El cliente posee software que permite al usuario enviar instrucciones al SGBD en el servidor y recibir los resultados de estas instrucciones. Para ello el software cliente y el servidor deben utilizar software de comunicaciones en red.

 Sistemas distribuidos. Ocurre cuando los clientes acceden a datos situados en más de un servidor. También se conoce esta estructura como base de datos distribuida. El cliente no sabe si los datos están en uno o más servidores, ya que el resultado es el mismo independientemente de dónde se almacenan los datos. En esta estructura hay un servidor de aplicaciones que es el que recibe las peticiones, y el encargado de traducirlas a los distintos servidores de datos para obtener los resultados. Los sistemas homogéneos utilizan el mismo SGBD en múltiples sitios. Los sistemas heterogéneos dotan de cierta autonomía local a los SGBD participantes.

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

 Cliente/servidor Web/servidor de datos. El cliente se conecta a un servidor mediante un navegador web y desde las páginas de éste ejecuta las consultas. El servidor web traduce esta consulta al servidor (o servidores) de datos.

- Tipos de sistemas.

 Relacionales. Los datos y las relaciones existentes entre los datos se representan mediante tablas, cada una con un conjunto de columnas y un nombre único. La base de datos es percibida a nivel lógico (externo y conceptual) por el usuario como un conjunto de tablas, ya que a nivel físico pueden estar implementadas mediante distintas estructuras de almacenamiento. Sólo es necesario especificar que datos se han de obtener.

 De red. Los datos se presentan como colecciones de registros y las relaciones entre los datos se representan mediante conjuntos, que son punteros en la implementación física. Los registros se organizan como un grafo: los registros son los nodos y los arcos son los conjuntos. El SGBD de red más popular es el sistema IDMS. Es necesario especificar cómo deben obtenerse los datos.

 Jerárquicos. Son un tipo de modelo de red con algunas restricciones. Los datos se almacenan en estructuras lógicas denominadas segmentos que se relacionan entre sí mediante arcos. Hay una serie de nodos que contendrán atributos y que se relacionarán con nodos hijos, de forma que puede haber más de un hijo para el mismo padre, pero un hijo sólo tiene un padre. Por tanto una base de datos jerárquica puede representarse mediante un árbol. El SGBD jerárquico más importante es el sistema IMS. Es necesario especificar cómo deben obtenerse los datos.

 Orientados a objetos. Define una base de datos en términos de objetos, sus propiedades y sus operaciones. Los objetos con la misma estructura y comportamiento pertenecen a una clase, y las clases se organizan en jerarquías o grafos acíclicos. Las operaciones de cada clase se especifican en términos de procedimientos predefinidos denominados métodos. Su modelo conceptual se

Aplicaciones ofimáticas. Base de datos Tema 01. Sistemas Gestores de Base de Datos (1 parte)

suele diseñar en UML y el lógico actualmente en ODMG (Object Data Management Group).

 Objeto-relacionales. Tratan de ser un híbrido entre el modelo relacional y el orientado a objetos. En las bases de datos objeto-relacionales se intenta conseguir una compatibilidad relacional dando la posibilidad de integrar mejoras de la orientación a objetos. Se basan en el estándar SQL 99, que añade a las bases relacionales la posibilidad de almacenar procedimientos de usuario, triggers, tipos definidos por el usuario, consultas recursivas, etc. Las últimas versiones de la mayoría de las grandes bases de datos relacionales (Oracle, SQL Server, Informix, ...) son objeto-relacionales.

---

## 12.3 Tema 1. Sistemas Gestores de Base de Datos (vers

Tema 1

S i s t e m a s G e s t o r e s d e B a s e s d e D a t o s .

(2 parte)

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

### 1. Introducción

Definimos un Sistema Gestor de Bases de Datos o SGBD, también llamado DBMS (Data Base Management System) como una colección de datos relacionados entre sí, estructurados y organizados, y un conjunto de programas que acceden y gestionan esos datos. La colección de esos datos se denomina Base de Datos o BD, (DB Data Base).

Antes de aparecer los SGBD (década de los setenta), la información se trataba y se gestionaba utilizando los típicos sistemas de gestión de archivos que iban soportados sobre un sistema operativo. Éstos consistían en un conjunto de programas que definían y trabajaban sus propios datos. Los datos se almacenan en archivos y los programas manejan esos archivos para obtener la información. Si la estructura de los datos de los archivos cambia, todos los programas que los manejan se deben modificar; por ejemplo, un programa trabaja con un archivo de datos de alumnos, con una estructura o registro ya definido; si se incorporan elementos o campos a la estructura del archivo, los programas que utilizan ese archivo se tienen que modificar para tratar esos nuevos elementos. En estos sistemas de gestión de archivos, la definición de los datos se encuentra codificada dentro de los programas de aplicación en lugar de almacenarse de forma independiente, y además el control del acceso y la manipulación de los datos viene impuesto por los programas de aplicación.

Esto supone un gran inconveniente a la hora de tratar grandes volúmenes de información. Surge así la idea de separar los datos contenidos en los archivos de los programas que los manipulan, es decir, que se pueda modificar la estructura de los datos de los archivos sin que por ello se tengan que modificar los programas con los que trabajan. Se trata de estructurar y organizar los datos de forma que se pueda acceder a ellos con independencia de los programas que los gestionan.

Inconvenientes de un sistema de gestión de archivos

- Redundancia e inconsistencia de los datos, se produce porque los archivos son creados por distintos

programas y van cambiando a lo largo del tiempo, es decir, pueden tener distintos formatos y los datos pueden estar duplicados en varios sitios. Por ejemplo, el teléfono de un alumno puede aparecer en más de un archivo. La redundancia aumenta los costes de almacenamiento y acceso, y trae consigo la inconsistencia de los datos: las copias de los mismos datos no coinciden por aparecer en varios archivos.

- Dependencia de los datos física-lógica, o lo que es lo mismo, la estructura física de los datos

(definición de archivos y registros) se encuentra codificada en los programas de aplicación. Cualquier cambio en esa estructura implica al programador identificar, modificar y probar todos los programas que manipulan esos archivos.

- Dificultad para tener acceso a los datos, proliferación de programas, es decir, cada vez que se

necesite una consulta que no fue prevista en el inicio implica la necesidad de codificar el programa de aplicación necesario. Lo que se trata de probar es que los entornos convencionales de procesamiento de archivos no permiten recuperar los datos necesarios de una forma conveniente y eficiente.

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

- Separación y aislamiento de los datos, es decir, al estar repartidos en varios archivos, y tener diferentes

formatos, es difícil escribir nuevos programas que aseguren la manipulación de los datos correctos. Antes se deberían sincronizar todos los archi vos para que los datos coincidiesen.

- Dificultad para el acceso concurrente, pues en un sistema de gestión de archivos es complicado que los

usuarios actualicen los datos simultáneamente. Las actualizaciones concurrentes pueden dar por resultado datos inconsistentes, ya que se puede acceder a los datos por medio de diversos programas de aplicación.

- Dependencia de la estructura del archivo con el lenguaje de programación, pues la estructura se define

dentro de los programas. Esto implica que los formatos de los archivos sean incompatibles. La incompatibilidad entre archivos generados por distintos lenguajes hace que los datos sean difíciles de procesar.

- Problemas en la seguridad de los datos. Resulta difícil implantar restricciones de seguridad pues las

aplicaciones se van añadiendo al sistema según se van necesitando.

- Problemas de integridad de datos, es decir, los valores almacenados en los archivos deben cumplir con

restricciones de consistencia. Por ejemplo, no se puede insertar una nota de un alumno en una asignatura si previamente esa asignatura no está creada. Otro ejemplo, las unidades en almacén de un producto determinado no deben ser inferiores a una cantidad. Esto implica añadir gran número de líneas de código en los programas. El problema se complica cuando existen restricciones que implican varios datos en distintos archivos.

Todos estos inconvenientes hacen posible el fomento y desarrollo de SGBD. El objetivo primordial de un gestor es proporcionar eficiencia y seguridad a la hora de extraer o alma cenar información en las BD. Los sistemas gestores de BBDD están diseñados para gestionar grandes bloques de información, que implica tanto la definición de estructuras para el almacenamiento como de mecanismos para la gestión de la información.

Una BD es un gran almacén de datos que se define una sola vez; los datos pueden ser accedidos de forma simultánea por varios usuarios; están relacionados y existe un número mínimo de duplicidad; además en las BBDD se almacenarán las descripciones de esos datos, lo que se llama metadatos en el diccionario de datos, que se verá más adelante.

El SGBD es una aplicación que permite a los usuarios definir, crear y mantener la BD y proporciona un acceso controlado a la misma. Debe prestar los siguientes servicios

- Creación y definición de la BD: especificación de la estructura, el tipo de los datos, las restricciones y

relaciones entre ellos mediante lenguajes de definición de datos. Toda esta información se almacena en el diccionario de datos, el SGBD proporcionará mecanismos para la gestión del diccionario de datos.

- Manipulación de los datos realizando consultas, inserciones y actualizaciones de los mismos utilizando

lenguajes de manipulación de datos.

- Acceso controlado a los datos de la BD mediante mecanismos de seguridad de acceso a los usuarios.

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

Usuarios Nivel externo o de visión Vista 1 Vista 2 Vista n Nivel lógico Nivel conceptual Tabla 1 Tabla 2 Tabla 3 Tabla n Nivel interno o físico Disco 1 Disco 2 Disco 3 Nivel físico

- Mantener la integridad y consistencia de los datos utilizando mecanismos para evitar que los datos

sean perjudicados por cambios no autorizados.

- Acceso compartido a la BD, controlando la interacción entre usuarios concurrentes.

- Mecanismos de respaldo y recuperación para restablecer la información en caso de fallos en el sistema.

### 2. Arquitectura de los sistemas de bases de datos

En 1975, el comité ANSI-SPARC (American National Standard Institute - Standards Planning and Requirements Committee) propuso una arquitectura de tres niveles para los SGBD cuyo objetivo principal era el de separar los programas de aplicación de la BD física. En esta arquitectura el esquema de una BD se define en tres niveles de abstracción distintos

- Nivel interno o físico: el más cercano al almacenamiento físico, es decir, tal y como están almacenados en

el ordenador. Describe la estructura física de la BD mediante un esquema interno. Este esquema se especifica con un modelo físico y describe los detalles de cómo se almacenan físicamente los datos: los archivos que contienen la información, su organización, los métodos de acceso a los registros, los tipos de registros, la longitud, los campos que los componen, etcétera.

- Nivel externo o de visión: es el más cercano a los usuarios, es decir, es donde se describen varios esquemas

externos o vistas de usuarios. Cada esquema describe la parte de la BD que interesa a un grupo de usuarios en este nivel se representa la visión individual de un usuario o de un grupo de usuarios.

- Nivel conceptual: describe la estructura de toda la BD para un grupo de usuarios mediante un

esquema conceptual. Este esquema describe las entidades, atributos, relaciones, operaciones de los usuarios y restricciones, ocultando los detalles de las estructuras físicas de almacenamiento. Representa la información contenida en la BD. En la Figura 1.1 se representan los niveles de abstracción de la arquitectura ANSI.

Figura 1.1. Niveles de abstracción de la arquitectura ANSI.

Esta arquitectura describe los datos a tres niveles de abstracción. En realidad los únicos datos que

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

existen están a nivel físico almacenados en discos u otros dispositivos. Los SGBD basados en esta arquitectura permiten que cada grupo de usuarios haga referencia a su propio esquema externo. El SGBD debe de transformar cualquier petición de usuario (esquema externo) a una petición expresada en términos de esquema conceptual, para finalmente ser una petición expresada en el esquema interno que se procesará sobre la BD almacenada. El proceso de transformar peticiones y resultados de un nivel a otro se denomina correspondencia o transformación, el SGBD es capaz de interpretar una soli citud de datos y realiza los siguientes pasos

- El usuario solicita unos datos y crea una consulta.

- El SGBD verifica y acepta el esquema externo para ese usuario.

- Transforma la solicitud al esquema conceptual.

- Verifica y acepta el esquema conceptual.

- Transforma la solicitud al esquema físico o interno.

- Selecciona la o las tablas implicadas en la consulta y ejecuta la consulta.

- Transforma del esquema interno al conceptual, y del conceptual al externo.

- Finalmente, el usuario ve los datos solicitados.

Para una BD específica sólo hay un esquema interno y uno conceptual, pero puede haber varios esquemas externos definidos para uno o para varios usuarios.

Con la arquitectura a tres niveles se introduce el concepto de independencia de datos, se definen dos tipos de independencia

- Independencia lógica: la capacidad de modificar el esquema conceptual sin tener que alterar los esquemas

externos ni los programas de aplicación. Se podrá modificar el esquema conceptual para ampliar la BD o para reducirla, por ejemplo, si se elimina una entidad, los esquemas externos que no se refieran a ella no se verán afectados.

- Independencia física: la capacidad de modificar el esquema interno sin tener que alterar ni el esquema

conceptual, ni los externos. Por ejemplo, se pueden reorganizar los archivos físicos con el fin de mejorar el rendimiento de las operaciones de consulta o de actualización, o se pueden añadir nuevos archivos de datos porque los que había se han llenado. La independencia física es más fácil de conseguir que la lógica, pues se refiere a la separación entre las aplicaciones y las estructuras físicas de almacenamiento.

En los SGBD basados en arquitecturas de varios niveles se hace necesario ampliar el catálogo o el diccionario de datos para incluir la información sobre cómo establecer las correspondencias entre las peticiones de los usuarios y los datos, entre los diversos niveles. El SGBD utiliza una serie de procedimientos adicionales para realizar estas correspondencias haciendo referencia a la información de correspondencia que se encuentra en el diccionario. La independencia de los datos se consigue

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

porque al modificarse el esquema en algún nivel, el esquema del nivel inmediato superior permanece sin cambios. Sólo se modifica la correspondencia entre los dos niveles. No es preciso modificar los programas de aplicación que hacen referencia al esquema del nivel superior.

Sin embargo, los dos niveles de correspondencia implican un gasto de recursos durante la ejecución de una consulta o de un programa, lo que reduce la eficiencia del SGBD. Por esta razón pocos SGBD han implementado la arquitectura completa.

### 3. Componentes de los SGBD

Los SGBD son paquetes de software muy complejos que deben proporcionar una serie de servicios que van a permitir almacenar y explotar los datos de forma eficiente. Los com ponentes principales son los siguientes

A. Lenguajes de los SGBD

Todos los SGBD ofrecen lenguajes e interfaces apropiadas para cada tipo de usuario: administradores, diseñadores, programadores de aplicaciones y usuarios finales. Los lenguajes van a permitir al administrador de la BD especificar los datos que componen la BD, su estructura, las relaciones que existen entre ellos, las reglas de integridad, los controles de acceso, las características de tipo físico y las vistas externas de los usuarios. Los lenguajes del SGBD se clasifican en

- Lenguaje de definición de datos (LDD o DDL): se utiliza para especificar el esquema de la BD, las vistas

de los usuarios y las estructuras de almacenamiento. Es el que define el esquema conceptual y el esquema interno. Lo utilizan los diseñadores y los administradores de la BD.

- Lenguaje de manipulación de datos (LMD o DML): se utilizan para leer y actualizar los datos de la BD. Es el

utilizado por los usuarios para realizar consultas, inserciones, eliminaciones y modificaciones. Los hay procedurales, en los que el usuario será nor malmente un programador y especifica las operaciones de acceso a los datos llamando a los procedimientos necesarios. Estos lenguajes acceden a un registro y lo procesan. Las sentencias de un LMD procedural están embebidas en un lenguaje de alto nivel llamado anfitrión. Las BD jerárquicas y en red utilizan estos LMD procedurales.

No procedurales son los lenguajes declarativos. En muchos SGBD se pueden introducir interactivamente instrucciones del LMD desde un terminal, también pueden ir embebidas en un lenguaje de programación de alto nivel. Estos lenguajes permiten especificar los datos a obtener en una consulta, o los datos a modificar, mediante sentencias sencillas. Las BD relacionales utilizan lenguajes no procedurales como SQL (Structured Quero Language) o QBE (Query By Example).

- La mayoría de los SGBD comerciales incluyen lenguajes de cuarta generación (4GL) que permiten al usuario

desarrollar aplicaciones de forma fácil y rápida, también se les llama herramientas de desarrollo. Ejemplos de esto son las herramientas del SGBD

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

ORACLE: SQL Forms para la generación de formularios de pantalla y para interactuar con los datos; SQL Reports para generar informes de los datos contenidos en la BD; PL/SQL lenguaje para crear procedimientos que interractuen con los datos de la BD.

B. El diccionario de datos

El diccionario de datos es el lugar donde se deposita información acerca de todos los datos que forman la BD. Es una guía en la que se describe la BD y los objetos que la forman.

El diccionario contiene las características lógicas de los sitios donde se almacenan los datos del sistema, incluyendo nombre, descripción, alias, contenido y organización. Identifica los procesos donde se emplean los datos y los sitios donde se necesita el acceso inmediato a la información.

En una BD relacional, el diccionario de datos proporciona información acerca de

- La estructura lógica y física de la BD.

- Las definiciones de todos los objetos de la BD: tablas, vistas, índices, disparadores, procedimientos,

funciones, etcétera.

- El espacio asignado y utilizado por los objetos.

- Los valores por defecto de las columnas de las tablas.

- Información acerca de las restricciones de integridad.

- Los privilegios y roles otorgados a los usuarios.

- Auditoría de información, como los accesos a los objetos.

Un diccionario de datos debe cumplir las siguientes características

- Debe soportar las descripciones de los modelos conceptual, lógico, interno y externo de la BD.

- Debe estar integrado dentro del SGBD.

- Debe apoyar la transferencia eficiente de información al SGDB. La conexión entre los modelos interno y

externo debe ser realizada en tiempo de ejecución.

- Debe comenzar con la reorganización de versiones de producción de la BD. Además debe reflejar los

cambios en la descripción de la BD. Cualquier cambio a la descrip ción de programas ha de ser reflejado automáticamente en la librería de descripción de programas con la ayuda del diccionario de datos.

- Debe estar almacenado en un medio de almacenamiento con acceso directo para la fácil recuperación

de información.

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

C. Seguridad e integridad de datos

Un SGBD proporciona los siguientes mecanismos para garantizar la seguridad e integridad de los datos

- Debe garantizar la protección de los datos contra accesos no autorizados, tanto intencionados como

accidentales. Debe controlar que sólo los usuarios autorizados accedan a la BD.

- Los SGBD ofrecen mecanismos para implantar restricciones de integridad en la BD. Estas restricciones

van a proteger la BD contra daños accidentales. Los valores de los datos que se almacenan deben satisfacer ciertos tipos de restricciones de consistencia y reglas de integridad, que especificará el administrador de la BD. El SGBD puede determinar si se produce una violación de la restricción.

- Proporciona herramientas y mecanismos para la planificación y realización de copias de seguridad y

restauración.

- Debe ser capaz de recuperar la BD llevándola a un estado consistente en caso de ocurrir algún suceso

que la dañe.

- Debe asegurar el acceso concurrente y ofrecer mecanismos para conservar la consistencia de los datos en el

caso de que varios usuarios actualicen la BD de forma concurrente.

D. El administrador de la BD

En los sistemas de gestión de BBDD actuales existen diferentes categorías de usuarios. Estas categorías se caracterizan porque cada una de ellas tiene una serie de privilegios o permisos sobre los objetos que forman la BD.

En los sistemas Oracle las categorías más importantes son

- Los usuarios de la categoría DBA (Database Administrator), cuya función es precisamente administrar la

base y que tienen, el nivel más alto de privilegios.

- Los usuarios de la categoría RESOURCE, que pueden crear sus propios objetos y tienen acceso a los

objetos para los que se les ha concedido permiso.

- Los usuarios del tipo CONNECT, que solamente pueden utilizar aquellos objetos para los que se les ha

concedido permiso de acceso.

El DBA tiene una gran responsabilidad ya que posee el máximo nivel de privilegios. Será el encargado de crear los usuarios que se conectarán a la BD. En la administración de una BD siempre hay que procurar que haya el menor número de administradores, a ser posible una sola persona.

El objetivo principal de un DBA es garantizar que la BD cumple los fines previstos por la organización, lo que incluye una serie de tareas como

- Instalar SGBD en el sistema informático.

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

- Crear las BBDD que se vayan a gestionar.

- Crear y mantener el esquema de la BD.

- Crear y mantener las cuentas de usuario de la BD.

- Arrancar y parar SGBD, y cargar las BBDD con las que se ha de trabajar.

- Colaborar con el administrador del S.O. en las tareas de ubicación, dimensionado y control de los

archivos y espacios de disco ocupados por el SGBD.

- Colaborar en las tareas de formación de usuarios.

- Establecer estándares de uso, políticas de acceso y protocolos de trabajo diario para los usuarios de la

BD.

- Suministrar la información necesaria sobre la BD a los equipos de análisis y programación de

aplicaciones.

- Efectuar tareas de explotación como

Vigilar el trabajo diario colaborando en la información y resolución de las dudas de los usuarios de la BD.

Controlar en tiempo real los accesos, tasas de uso, cargas en los servidores, ano malías, etcétera.

Llegado el caso, reorganizar la BD.

Efectuar las copias de seguridad periódicas de la BD.

Restaurar la BD después de un incidente material a partir de las copias de seguridad.

Estudiar las auditorías del sistema para detectar anomalías, intentos de violación de la seguridad, etcétera.

Ajustar y optimizar la BD mediante el ajuste de sus parámetros, y con ayuda de las herramientas de monitorización y de las estadísticas del sistema.

En su gestión diaria, el DBA suele utilizar una serie de herramientas de administración de la BD.

Con el paso del tiempo, estas herramientas han adquirido sofisticadas prestaciones y facilitan en gran medida la realización de trabajos que, hasta no hace demasiado, reque rían de arduos esfuerzos por parte de los administradores.

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

### 4. Modelos de datos

Uno de los objetivos más importantes de un SGBD es proporcionar a los usuarios una visión abstracta de los datos, es decir, el usuario va a utilizar esos datos pero no tendrá idea de cómo están almacenados físicamente.

Los modelos de datos son el instrumento principal para ofrecer esa abstracción. Son uti lizados para la representación y el tratamiento de los problemas. Forman el problema a tres niveles de abstracción, relacionados con la arquitectura ANSI-SPARC de tres niveles para los SGBD

- Nivel físico: el nivel más bajo de abstracción; describe cómo se almacenan realmente los datos.

- Nivel lógico o conceptual: describe los datos que se almacenan en la BD y sus relaciones, es decir, los

objetos del mundo real, sus atributos y sus propiedades, y las relaciones entre ellos.

- Nivel externo o de vistas: describe la parte de la BD a la que los usuarios pueden acceder.

Para hacernos una idea de los tres niveles de abstracción, nos imaginamos un archivo de artículos con el siguiente registro

struct ARTICULOS

```bash
{ int Cod;
char Deno[15]; int cant_almacen; int cant_minima ; int uni_vendidas; float PVP;
```

char reponer; struct VENTAS Tventas[12]; };

El nivel físico es el conjunto de bytes que se encuentran almacenados en el archivo en un dispositivo magnético, que puede ser un disco, una pista a un sector determinado.

El nivel lógico comprende la descripción y la relación con otros registros que se hace del registro dentro de un programa, en un lenguaje de programación.

El último nivel de abstracción, el externo, es la visión de estos datos que tiene un usuario cuando ejecuta aplicaciones que operan con ellos, el usuario no sabe el detalle de los datos, unas veces operará con unos y otras con otros, dependiendo de la aplicación.

Si trasladamos el ejemplo a una BD relacional específica habrá, como en el caso anterior, un único nivel interno y un único nivel lógico o conceptual, pero puede haber varios niveles externos, cada uno definido para uno o para varios usuarios. Podría ser el siguiente

Nota Nombre de asignatura Nombre Curso

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

Tabla 1.1. Vista de la BD para un usuario.

- Nivel externo: Visión parcial de las tablas de la BD según el usuario. Por ejemplo, la vista que se muestra

en la Tabla 1.1 obtiene el listado de notas de alumnos con los siguientes datos: Curso, Nombre, Nombre de asignatura y Nota.

- Nivel lógico y conceptual: Definición de todas las tablas, columnas, restricciones, claves y relaciones. En este

ejemplo, disponemos de tres tablas que están relacionadas

Tabla ALUMNOS. Columnas: NMatrícula, Nombre, Curso, Dirección, Población. Clave: NMatrícula. Además tiene una relación con NOTAS, pues un alumno puede tener notas en varias asignaturas.

Tabla ASIGNATURAS. Columnas: Código, Nombre de asignatura. Clave: Código. Está relacionada con NOTAS, pues para una asignatura hay varias notas, tantas como alumnos la cursen.

Tabla NOTAS. Columnas: NMatrícula, Código, Nota. Está relacionada con ALUMNOS y ASIGNATURAS, pues un alumno tiene notas en varias asignaturas, y de una asignatura existen varias notas, tantas como alumnos.

Podemos representar las relaciones de las tablas en el nivel lógico como se muestra en la Figura 1.2

Figura 1.2. Representación de las relaciones entre tablas en el nivel lógico.

- Nivel interno: En una BD las tablas se almacenan en archivos de datos de la BD. Si hay claves, se crean

índices para acceder a los datos, todo esto contenido en el disco duro, en una pista y en un sector, que sólo el SGBD conoce. Ante una petición, sabe a qué pista, a qué sector, a qué archivo de datos y a qué índices acceder.

Para la representación de estos niveles se utilizan los modelos de datos. Se definen como el conjunto de conceptos o herramientas conceptuales que sirven para describir la estructura de una BD: los datos, las Programación en lenguajes estructurados Sistemas informáticos multiusuario y en red Desa. de aplic. en entornos de 4.ª Generación y H. Case Desa. de aplic. en entornos de 4.ª Generación y H. Case Programación en lenguajes estructurados Sistemas informáticos multiusuario y en red Ana Ana Rosa Juan Alicia Alicia

Aplicaciones Ofimáticas. Base de datos. Tema 01. Sistemas Gestores de Base de Datos (2 parte)

relaciones y las restricciones que se deben cumplir sobre los datos. Se denomina esquema de la BD a la descripción de una BD mediante un modelo de datos. Este esquema se especifica durante el diseño de la misma.

Podemos dividir los modelos en tres grupos: modelos lógicos basados en objetos, modelos lógicos basados en registros y modelos físicos de datos. Cada SGBD soporta un modelo lógico.

A. Modelos lógicos basados en objetos

Los modelos lógicos basados en objetos se usan para describir datos en el nivel conceptual y el externo. Se caracterizan porque proporcionan capacidad de estructuración bastante flexible y permiten especificar restricciones de datos. Los modelos más conocidos son el modelo entidad-relación y el orientado a objetos.

Actualmente, el más utilizado es el modelo entidad-relación, aunque el modelo orientado a objetos incluye muchos conceptos del anterior, y poco a poco está ganando mercado. La mayoría de las BBDD relacionales añaden extensiones para poder ser relacionales-orientadas a objetos.

B. Modelos lógicos basados en registros

Los modelos lógicos basados en registros se utilizan para describir los datos en los mode los conceptual y físico. A diferencia de los modelos lógicos basados en objetos, se usan para especificar la estructura lógica global de la BD y para proporcionar una descripción a nivel más alto de la implementación.

Los modelos basados en registros se llaman así porque la BD está estructurada en registros de formato fijo de varios tipos. Cada tipo de registro define un número fijo de campos, o atributos, y cada campo normalmente es de longitud fija. La estructura más rica de estas BBDD a menudo lleva a registros de longitud variable en el nivel físico.

Los modelos basados en registros no incluyen un mecanismo para la representación directa de código de la BD, en cambio, hay lenguajes separados que se asocian con el modelo para expresar consultas y actualizaciones. Los tres modelos de datos más aceptados son los modelos relacional, de red y jerárquico. El modelo relacional ha ganado aceptación por encima de los otros; representa los datos y las relaciones entre los datos mediante una colección de tablas, cuyas columnas tienen nombres únicos, las filas (tuplas) representan a los registros y las columnas representan las características (atri- butos) de cada registro. Este modelo se estudiará en la siguiente Unidad.

C. Modelos físicos de datos

Los modelos físicos de datos se usan para describir cómo se almacenan los datos en el ordenador: formato de registros, estructuras de los archivos, métodos de acceso, etcétera. Hay muy pocos modelos físicos de datos en uso, siendo los más conocidos el modelo unificador y de memoria de elementos.

---

## 12.4 Tema 1. EXERCICIS SGBD

Tema 1

EJERCICIOS

Sistemas Gestores de Bases de Datos.

1 parte: Editorial Paraninfo

Aplicaciones Ofimáticas Base de Datos Tema 01. EJERCICIOS Sistemas Gestores de Base de Datos

EJERCICIOS PROPUESTOS

1.1. Define lo que es un SGBD y los servicios que presta.

1.2. Escribe los componentes de un SGBD y la función de cada uno de ellos.

1.3. Describe con un dibujo los niveles de abstracción de la arquitectura ANSI.

1.4. ¿Qué son y para qué sirven los modelos de datos?

1.5. ¿Qué es un sistema Cliente/Servidor? Cita las distintas configuraciones.

1.6. ¿Qué es la LOPD? ¿Cuál es su misión?

---

## ✍️ Activitats pràctiques UT12

> **✍️ 📋 Exercici / Qüestionari 12.1 — Tema 0. QÜESTIONARI**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
