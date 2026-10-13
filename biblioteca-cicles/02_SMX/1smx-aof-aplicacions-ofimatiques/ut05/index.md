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

## 🗄️ Arquitectura dels Sistemes Gestors de Bases de Dades (SGBD)

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Fonaments de SGBD: Arquitectura ANSI-SPARC, Independència i Llenguatges</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Transició de fitxers plans a bases de dades relacionals, nivells d'abstracció i motor de persistència</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU5FitxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU5AnsiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU5IndepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU5MotorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Fitxers Plans vs SGBD -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#aofU5FitxGrad)" stroke="#f87171" stroke-width="1.5"/>
    <text x="115" y="42" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">📁 FITXERS VS SGBD</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Limitacions Històriques</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#f87171" font-size="8.5">• <tspan font-weight="bold">Fitxers Tradicionals:</tspan></text>
    <text x="42" y="93" fill="#cbd5e1" font-size="8">- Redundància massiva de dades</text>
    <text x="42" y="105" fill="#cbd5e1" font-size="8">- Inconsistència de registres</text>
    <text x="42" y="117" fill="#cbd5e1" font-size="8">- Dependència codi-fitxer</text>
    <text x="42" y="129" fill="#cbd5e1" font-size="8">- Dificultat d'accés concurrent</text>
    <text x="32" y="148" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Model SGBD Modern:</tspan></text>
    <text x="42" y="161" fill="#cbd5e1" font-size="8">- Dades compartides úniques</text>
    <text x="42" y="173" fill="#cbd5e1" font-size="8">- Integritat i seguretat central</text>
    <text x="42" y="185" fill="#cbd5e1" font-size="8">- Control transaccional ACID</text>
    <text x="115" y="218" fill="#f87171" font-size="8.5" text-anchor="middle" font-weight="bold">Ruptura del Model Pla</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Arquitectura ANSI-SPARC -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#aofU5AnsiGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="335" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">🏛️ NIVELLS ANSI-SPARC</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">3 Nivells d'Abstracció</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Nivell Extern (Vistes):</tspan></text>
    <text x="262" y="93" fill="#94a3b8" font-size="8">Percepció de cada usuari/app</text>
    <text x="252" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Nivell Conceptual:</tspan></text>
    <text x="262" y="125" fill="#94a3b8" font-size="8">Esquema global lògic de la BD</text>
    <text x="262" y="137" fill="#94a3b8" font-size="8">Entitats, relacions, restriccions</text>
    <text x="252" y="156" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Nivell Intern (Físic):</tspan></text>
    <text x="262" y="169" fill="#94a3b8" font-size="8">Estructures d'emmagatzematge</text>
    <text x="262" y="181" fill="#94a3b8" font-size="8">Fitxers a disc, índexs B-Tree</text>
    <text x="335" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Separació d'Esquemes</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 3: Independència de Dades -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#aofU5IndepGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="555" y="42" fill="#c084fc" font-size="10.5" font-weight="bold" text-anchor="middle">🔓 INDEPENDÈNCIA</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Aïllament de Modificacions</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Independència Lògica:</tspan></text>
    <text x="482" y="93" fill="#94a3b8" font-size="8">Capacitat de modificar l'esquema</text>
    <text x="482" y="105" fill="#94a3b8" font-size="8">conceptual (afegir taules/camps)</text>
    <text x="482" y="117" fill="#34d399" font-size="8">sense alterar les vistes externes</text>
    <text x="472" y="138" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Independència Física:</tspan></text>
    <text x="482" y="151" fill="#94a3b8" font-size="8">Capacitat de canviar el maquinari,</text>
    <text x="482" y="163" fill="#94a3b8" font-size="8">organització de fitxers o índexs</text>
    <text x="482" y="175" fill="#34d399" font-size="8">sense canviar l'esquema lògic</text>
    <text x="555" y="218" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Desacoblament Total</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 4: Components i Llenguatges -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#aofU5MotorGrad)" stroke="#10b981" stroke-width="1.5"/>
    <text x="760" y="42" fill="#10b981" font-size="10.5" font-weight="bold" text-anchor="middle">⚙️ MOTOR &amp; LLENGUATGES</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Eines del SGBD</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">DDL (Definició):</tspan></text>
    <text x="700" y="93" fill="#94a3b8" font-size="8">CREATE, ALTER, DROP</text>
    <text x="692" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">DML (Manipulació):</tspan></text>
    <text x="700" y="125" fill="#94a3b8" font-size="8">SELECT, INSERT, UPDATE</text>
    <text x="692" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Diccionari de dades:</tspan></text>
    <text x="700" y="157" fill="#94a3b8" font-size="8">Metadades de la BD</text>
    <text x="692" y="176" fill="#cbd5e1" font-size="8.5">• Motor de consultes SQL</text>
    <text x="692" y="194" fill="#cbd5e1" font-size="8.5">• Gestor de seguretat i rols</text>
    <text x="760" y="218" fill="#10b981" font-size="8.5" text-anchor="middle" font-weight="bold">Control i Persistència</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or dels SGBD: <tspan fill="#34d399" font-weight="bold">La independència de dades separa la lògica del negoci de l'emmagatzematge físic en disc.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Permet que els administradors optimitzen índexs o amplien taules sense haver de reescriure el codi ni els formularis de les aplicacions d'usuari.</text>
  </svg>
</div>

---

## 📊 Fitxers Tradicionals enfront de Sistemes Gestors de Bases de Dades (SGBD)

| Característica | Sistema Basat en Fitxers Tradicionals | Sistema Gestor de Bases de Dades (SGBD) | Avantatge Professional del SGBD |
| :--- | :--- | :--- | :--- |
| **Redundància de Dades** | Elevada; les dades es repeteixen en múltiples fitxers de cada departament. | **Controlada i mínima**; les dades s'emmagatzemen en un únic repositori central. | Estalvi d'espai a disc i eliminació d'inconsistències per actualitzacions parcials. |
| **Independència de Dades**| Inexistent; si canvia el format del fitxer, cal reprogramar l'aplicació. | **Doble independència:** Lògica (esquema conceptual) i Física (estructures de disc). | Els canvis de maquinari o noves columnes no trenquen els programes existents. |
| **Seguretat i Accés** | Bàsica (permisos de fitxer del sistema operatiu). | **Control granular per usuaris, rols i vistes** mitjançant permisos SQL (GRANT/REVOKE). | Protecció estricta de dades confidencials segons el perfil de l'usuari. |
| **Concurrència i Transaccions**| Bloqueig de fitxer complet; risc de sobreescriptura de canvis simultanis. | **Control de concurrència avançat** amb bloqueig a nivell de fila i propietats ACID. | Múltiples usuaris poden llegir i escriure alhora sense pèrdua d'informació. |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**5.1 Tema 0. Introducció a les base de dades.**](./ut0501.md)
- [**5.2 Tema 1. Sistemas Gestores de Base de Datos (vers**](./ut0502.md)

---

# 5.1 Tema 0. Introducció a les base de dades.

En aquest tema analitzarem els fonaments dels sistemes de bases de dades, dividit en dos blocs: una introducció als conceptes bàsics d'informació estructurada i un estudi aprofundit de l'arquitectura dels SGBD.

> **🔗 Recurs Web: Vídeo 1. Introducció a les Bases de Dades**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=yoeV4Ex8C8U) ↗️**](https://www.youtube.com/watch?v=yoeV4Ex8C8U)
>
> Recurs audiovisual explicatiu sobre la definició i avantatges dels sistemes de bases de dades enfront dels fitxers plans.

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

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 🎯 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Activitat 1: Càlcul de Redundància i Sobrecost d'Emmagatzematge en Fitxers Plans vs Model Relacional
En un departament d'assistència tècnica informàtica s'utilitza històricament un fitxer pla CSV per a registrar les reparacions d'ordinadors. Cada línia conté tota la informació del client, l'equip i l'actuació tècnica:
- `DNI_Client` (9 B), `Nom_Client` (40 B), `Telefon` (12 B), `Adreca` (60 B), `Poblacio` (30 B).
- `Num_Serie_PC` (20 B), `Marca_Model` (35 B), `Data_Entrada` (10 B), `Avaria` (120 B), `Hores_Treball` (4 B), `Preu_Hora` (4 B).
- Longitud total per registre pla: $S_{\text{pla}} = 9 + 40 + 12 + 60 + 30 + 20 + 35 + 10 + 120 + 4 + 4 = 344\text{ bytes}$.

El servei compta amb $N_{\text{cli}} = 800\text{ clients}$ diferents. Al cap d'un any s'han registrat $N_{\text{rep}} = 4.800\text{ reparacions}$ en total (una mitjana de 6 reparacions per client).

1. **Càlcul de volum en fitxer pla:** Calculeu la mida total del fitxer pla en kilobytes ($1\text{ KB} = 1.024\text{ bytes}$):
   $$V_{\text{pla}} = N_{\text{rep}} \times S_{\text{pla}}$$
2. **Càlcul de volum en model relacional normalitzat:** Si dividim les dades en dues taules relacionades per `DNI_Client` (Clau Forana):
   - Taula `CLIENTS`: `DNI_Client` (9 B), `Nom_Client` (40 B), `Telefon` (12 B), `Adreca` (60 B), `Poblacio` (30 B) $\rightarrow S_{\text{cli}} = 151\text{ bytes}$. ($800\text{ registres}$).
   - Taula `REPARACIONS`: `ID_Reparacio` (4 B clau primària), `DNI_Client` (9 B FK), `Num_Serie_PC` (20 B), `Marca_Model` (35 B), `Data_Entrada` (10 B), `Avaria` (120 B), `Hores_Treball` (4 B), `Preu_Hora` (4 B) $\rightarrow S_{\text{rep}} = 206\text{ bytes}$. ($4.800\text{ registres}$).
   - Calculeu el volum total de dades en el model relacional:
   $$V_{\text{rel}} = (N_{\text{cli}} \times S_{\text{cli}}) + (N_{\text{rep}} \times S_{\text{rep}})$$
3. **Estalvi i Anomalies:** Determineu el percentatge d'estalvi d'espai obtingut amb la normalització i descriviu quants canvis de línies caldria fer en el fitxer pla si un client que ha vingut 15 vegades canvia de número de telèfon (anomalia de modificació), enfront d'una única modificació en la taula `CLIENTS`.

#### Activitat 2: Arquitectura ANSI-SPARC i Aïllament dels Tres Nivells d'Abstracció
Analitzeu l'arquitectura de 3 nivells ANSI-SPARC (Extern, Conceptual i Intern) davant dels següents escenaris de canvi en una empresa de serveis microinformàtics:
1. **Canvi 1:** L'administrador de sistemes decideix moure les dades d'un disc dur HDD mecànic a una cabina SAN de discos NVMe d'alta velocitat i canvia l'índex clau de taula d'un arbre B-Tree a una taula de Hash a nivell físic. Quin nivell es veu afectat? Afecta aquesta modificació el codi de les aplicacions d'ofimàtica que consulten les dades? Quin principi d'independència es compleix?
2. **Canvi 2:** S'afegeix un camp nou `Correu_Electronic` a la taula `CLIENTS`. El formulari que empra el departament de comptabilitat (nivell extern) no necessita aquest camp i continua funcionant sense canvis. Quin principi d'independència de dades es manifesta aquí?
3. **Canvi 3:** Dibuixeu un esquema esquemàtic mostrant com dues vistes externes diferents (Vista Tècnic de Taller vs Vista Facturació) comparteixen el mateix model conceptual però oculten camps sensibles (com dades de pagament o diagnòstics interns de garantia).

#### Activitat 3: Classificació de Sentències en Subllenguatges SQL i Garanties ACID
Els sistemes gestors de bases de dades relacionals garanteixen la consistència mitjançant el motor transaccional.
1. **Classificació de sentències:** Classifiqueu cadascuna de les següents instruccions SQL en el seu subconjunt corresponent (DDL - *Data Definition Language*, DML - *Data Manipulation Language*, DCL - *Data Control Language*, o TCL - *Transaction Control Language*):
   - `CREATE TABLE Ordinadors (id_pc INT PRIMARY KEY, marca VARCHAR(30));`
   - `SELECT nom, telefon FROM Clients WHERE ciutat = 'València';`
   - `GRANT SELECT, UPDATE ON Reparacions TO tecnic_junior;`
   - `UPDATE Ordinadors SET estat = 'Reparat' WHERE id_pc = 104;`
   - `COMMIT;`
   - `ALTER TABLE Reparacions ADD COLUMN cost_peces DECIMAL(8,2);`
   - `ROLLBACK;`
2. **Garantia ACID en una reparació amb cobrament:** Una botiga processa una transacció que implica dues operacions: (a) Descomptar 1 placa base de l'estoc de magatzem i (b) Registrar el cobrament de 120 € en caixa. Si es produeix un tall de subministrament elèctric just després de l'operació (a) però abans de l'operació (b), quin mecanisme del SGBD s'activa? Com intervé la propietat d'**Atomicitat** i el fitxer de registre de transaccions (*journal/transaction log*) per evitar que la placa base desaparega sense haver estat cobrada?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Creació d'una Base de Dades Relacional en LibreOffice Base i Anàlisi del Motor HSQLDB/Firebird
1. Obriu **LibreOffice Base**.
2. En l'assistent de bases de dades, seleccioneu l'opció **Crear una nova base de dades** utilitzant el motor predeterminat (Firebird incrustat o HSQLDB incrustat). Guardeu el fitxer amb el nom `taller_microinformatica.odb`.
3. Creeu mitjançant la vista de disseny una taula anomenada `TECNICS` amb els camps:
   - `ID_Tecnic`: Enter (INTEGER), Clau Primària, Autonumèric.
   - `Nom`: Text [VARCHAR], mida 50 caràcters, Entrada requerida: Sí.
   - `Especialitat`: Text [VARCHAR], mida 40 caràcters.
   - `Data_Incorporacio`: Data [DATE].
4. Introduïu almenys 4 registres manuals a la taula.
5. Comproveu la mida del fitxer `.odb` generat al vostre explorador d'arxius. Descomprimiu el fitxer `.odb` (canviant l'extensió a `.zip`) i identifiqueu a l'interior l'estructura de fitxers XML de definició i el directori `database` on es guarden les dades binàries.

#### Repte 2: Exploració del Diccionari de Dades mitjançant Comandes SQL Directes
1. A LibreOffice Base, aneu al menú **Eines > SQL...** per obrir la finestra d'execució directa de consultes al motor.
2. Si esteu utilitzant el motor HSQLDB o Firebird, executeu una consulta de metadades per a inspeccionar el catàleg del sistema:
   ```sql
   -- Consulta de taules d'usuari existents en el sistema
   SELECT TABLE_NAME, TABLE_TYPE 
   FROM INFORMATION_SCHEMA.SYSTEM_TABLES 
   WHERE TABLE_TYPE = 'TABLE';
   ```
3. Executeu una sentència DDL directa per crear una segona taula associada:
   ```sql
   CREATE TABLE DISPOSITIUS (
       id_disp INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
       num_serie VARCHAR(30) NOT NULL,
       marca VARCHAR(25) NOT NULL,
       id_tecnic_assignat INT
   );
   ```
4. Aneu al menú **Visualitza > Refresca les taules** de LibreOffice Base i comproveu com la nova taula creada mitjançant DDL apareix automàticament a la interfície d'usuari.

#### Repte 3: Comparativa Pràctica d'Accés per Fitxer Pla CSV vs Taula Indexada
1. Creeu un fitxer de text pla anomenat `components.csv` amb un editor de text o PowerShell:
   ```powershell
   # Creació de registres simulats en fitxer pla mitjançant PowerShell
   1..1000 | ForEach-Object {
       "$($_),Component_$_,$((Get-Random -Minimum 10 -Maximum 500)),$((Get-Random -Minimum 1 -Maximum 50))"
   } | Out-File -Encoding utf8 components.csv
   ```
2. Obriu el fitxer `components.csv` amb Calc i cerqueu el registre amb ID `782` observant el comportament del cercador lineal.
3. Importeu les dades a LibreOffice Base mitjançant l'assistent de còpia i definició de clau primària sobre la columna ID.
4. Executeu una cerca per Clau Primària:
   ```sql
   SELECT * FROM COMPONENTS WHERE ID = 782;
   ```
5. Redacteu un breu informe comparatiu explicant per què l'índex basat en clau primària proporciona una cerca en temps logarítmic $O(\log n)$ enfront del recorregut seqüencial $O(n)$ del fitxer de text pla.

---

### 📋 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitectura ANSI-SPARC i Normalització** | Resol amb precisió matemàtica el càlcul de redundància i justifica amb solidesa la independència física i lògica dels 3 nivells d'abstracció. | Calcula el volum de dades i diferencia correctament la independència lògica i física, amb xicotets desajustos numèrics o justificacions breus. | Identifica la diferència entre fitxer pla i SGBD, però té dificultats en calcular l'estalvi d'espai o diferenciar independència lògica i física. | No comprèn els nivells de l'arquitectura ANSI-SPARC ni sap calcular el volum d'emmagatzematge. |
| **Llenguatges SGBD (DDL, DML, DCL, TCL)** | Classifica sense cap errada totes les sentències SQL i explica amb precisió el funcionament del registre de transaccions i les garanties ACID. | Classifica correctament la gran majoria de sentències i descriu les propietats bàsiques de les transaccions sense aprofundir en el journal. | Confon algunes sentències DDL i DML i comprèn de forma parcial la necessitat del control transaccional ACID. | Incapaç de distingir entre sentències de creació d'estructures (DDL) i de consulta/modificació de dades (DML). |
| **Destresa en Laboratori amb LibreOffice Base** | Crea i configura taules relacionals, clau primària autonumèrica i executa consultes DDL directes verificant el diccionari de dades sense assistència. | Crea les taules i la clau primària amb solvència a la interfície gràfica i executa consultes SQL bàsiques amb guia puntual. | Crea la base de dades i defineix camps bàsics, però comet errades en la definició de tipus de dades o claus primàries. | No aconsegueix crear la base de dades funcional ni configurar la clau primària al motor relacional. |
