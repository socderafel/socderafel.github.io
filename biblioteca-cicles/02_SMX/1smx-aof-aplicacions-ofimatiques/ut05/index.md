---
layout: default
title: "UD5 — BDA. SISTEMES GESTORS BASE DE DADES (SGBD) · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD5 — BDA. SISTEMES GESTORS BASE DE DADES (SGBD)"
prev_url: "../ut04/ut0401.html"
prev_label: "⬅️ 4.1 Manual bàsic CALC"
next_url: "../ut05/ut0501.html"
next_label: "5.1 Tema 0. Introducció a les base de dades. ➡️"
---

# 📘 UD5 — BDA. SISTEMES GESTORS BASE DE DADES (SGBD) (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**5.1 Tema 0. Introducció a les base de dades.**](./ut0501.md)
- [**5.2 Tema 1. Sistemas Gestores de Base de Datos (vers**](./ut0502.md)

---

# 5.1 Tema 0. Introducció a les base de dades.

En este tema, vorem una introducció a les base de dades. Estarà dividit en dos parts. Una primera part, el tema 0, que serà una introducció, i una segona part, el tema 1, on vorem conceptes generals de base de dades.

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

# 5.2 Tema 1. Sistemas Gestores de Base de Datos (vers

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
