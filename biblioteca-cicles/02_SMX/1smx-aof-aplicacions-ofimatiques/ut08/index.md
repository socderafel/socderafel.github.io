---
layout: default
title: "UD8 — BDA. Base de Datos. TAULES · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD8 — BDA. Base de Datos. TAULES"
prev_url: "../ut07/ut0701.html"
prev_label: "⬅️ 7.1 Tema 2. Model Relacional (2ª part)"
next_url: "../ut08/ut0801.html"
next_label: "8.1 Tema 3. TAULES ACCESS ➡️"
---

# 📘 UD8 — BDA. Base de Datos. TAULES (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 🗄️ Disseny Físic de Taules, Tipus de Dades i Integritat

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura de Taules Relacionals: Tipus de Dades, Validació i Relacions</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Parametrització de camps, màscares d'entrada, regles de validació i integritat referencial amb actualització/esborrat en cascada</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU8TipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU8PropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU8ValGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU8IntGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ec4899" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#be185d" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Tipus de Dades -->
    <rect x="20" y="20" width="190" height="255" rx="8" fill="url(#aofU8TipGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">💾 TIPUS DE DADES</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Motors Access / Base</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Text Curt (VARCHAR):</tspan></text>
    <text x="42" y="93" fill="#cbd5e1" font-size="8">- Fins a 255 caràcters</text>
    <text x="32" y="110" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Numèric (INTEGER/DECIMAL):</tspan></text>
    <text x="42" y="123" fill="#cbd5e1" font-size="8">- Byte (0-255) / Enter (16-bit)</text>
    <text x="42" y="135" fill="#cbd5e1" font-size="8">- Enter Llarg (32-bit per a FK)</text>
    <text x="32" y="152" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Autonumèric (IDENTITY):</tspan></text>
    <text x="42" y="165" fill="#cbd5e1" font-size="8">- Generador seqüencial de PK</text>
    <text x="32" y="182" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Data/Hora i Moneda:</tspan></text>
    <text x="42" y="195" fill="#cbd5e1" font-size="8">- Precisió de 8 bytes / 4 decimals</text>
    <rect x="35" y="210" width="160" height="26" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="115" y="227" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">Sí/No: Booleà (1 bit)</text>
    <text x="115" y="258" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Eficiència en Disc</text>

    <!-- Bloc 2: Propietats de Camp -->
    <rect x="230" y="20" width="190" height="255" rx="8" fill="url(#aofU8PropGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="325" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">⚙️ PROPIETATS DE CAMP</text>
    <text x="325" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Control de Domini</text>
    <line x1="240" y1="63" x2="410" y2="63" stroke="#334155"/>
    <text x="242" y="80" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Mida del Camp:</tspan></text>
    <text x="252" y="93" fill="#cbd5e1" font-size="8">- Ajustar caràcters (Ex: DNI = 9)</text>
    <text x="242" y="110" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Requerit (NOT NULL):</tspan></text>
    <text x="252" y="123" fill="#cbd5e1" font-size="8">- Prohibeix valors buits</text>
    <text x="242" y="140" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Permetre Longitud Zero:</tspan></text>
    <text x="252" y="153" fill="#cbd5e1" font-size="8">- Distingir cadena buida de nul</text>
    <text x="242" y="170" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Indexat:</tspan></text>
    <text x="252" y="183" fill="#cbd5e1" font-size="8">- Sí (Sense duplicats = UNIQUE)</text>
    <text x="252" y="195" fill="#cbd5e1" font-size="8">- Sí (Amb duplicats = B-Tree)</text>
    <rect x="245" y="210" width="160" height="26" rx="4" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="325" y="227" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">Valor Predeterminat (DEFAULT)</text>
    <text x="325" y="258" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Optimització de Consultes</text>

    <!-- Bloc 3: Màscares i Regles -->
    <rect x="440" y="20" width="190" height="255" rx="8" fill="url(#aofU8ValGrad)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="535" y="42" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">🛡️ MÀSCARES I REGLES</text>
    <text x="535" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Filtres d'Entrada</text>
    <line x1="450" y1="63" x2="620" y2="63" stroke="#334155"/>
    <text x="452" y="80" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Màscara d'Entrada:</tspan></text>
    <text x="462" y="93" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">0</tspan>: Dígit obligatori (0-9)</text>
    <text x="462" y="105" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">9</tspan>: Dígit opcional</text>
    <text x="462" y="117" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">L</tspan>: Lletra obligatòria (A-Z)</text>
    <text x="462" y="129" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">&gt;</tspan>: Converteix a MAJÚSCULES</text>
    <text x="462" y="141" fill="#cbd5e1" font-size="8">- DNI: <tspan fill="#fbbf24">00000000-&gt;L</tspan></text>
    <text x="452" y="158" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Regla de Validació:</tspan></text>
    <text x="462" y="171" fill="#cbd5e1" font-size="8">- Condició lògica booleana</text>
    <text x="462" y="183" fill="#cbd5e1" font-size="8">- Preu: <tspan fill="#fbbf24">&gt; 0 I &lt;= 3000</tspan></text>
    <text x="462" y="195" fill="#cbd5e1" font-size="8">- Data: <tspan fill="#fbbf24">&lt;= Data()</tspan></text>
    <rect x="455" y="210" width="160" height="26" rx="4" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="535" y="227" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">Text de Validació d'Error</text>
    <text x="535" y="258" fill="#fbbf24" font-size="8.5" text-anchor="middle" font-weight="bold">Qualitat i Fiabilitat</text>

    <!-- Bloc 4: Integritat Referencial -->
    <rect x="650" y="20" width="190" height="255" rx="8" fill="url(#aofU8IntGrad)" stroke="#f472b6" stroke-width="1.5"/>
    <text x="745" y="42" fill="#f472b6" font-size="10.5" font-weight="bold" text-anchor="middle">🔒 INTEGRITAT REFERENCIAL</text>
    <text x="745" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Protecció de Relacions</text>
    <line x1="660" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="662" y="80" fill="#f472b6" font-size="8.5">• <tspan font-weight="bold">Exigir Integritat:</tspan></text>
    <text x="672" y="93" fill="#cbd5e1" font-size="8">- Impedeix registres orfes a la FK</text>
    <text x="672" y="105" fill="#cbd5e1" font-size="8">- Mateix tipus de dades a PK i FK</text>
    <text x="662" y="122" fill="#f472b6" font-size="8.5">• <tspan font-weight="bold">Actualització en Cascada:</tspan></text>
    <text x="672" y="135" fill="#cbd5e1" font-size="8">- Si canvia la PK, s'actualitzen</text>
    <text x="672" y="147" fill="#cbd5e1" font-size="8">  automàticament totes les FKs.</text>
    <text x="662" y="164" fill="#f472b6" font-size="8.5">• <tspan font-weight="bold">Eliminació en Cascada:</tspan></text>
    <text x="672" y="177" fill="#cbd5e1" font-size="8">- Si s'esborra la fila pare,</text>
    <text x="672" y="189" fill="#f87171" font-size="8">  s'esborren els fills vinculats.</text>
    <rect x="665" y="210" width="160" height="26" rx="4" fill="#0f172a" stroke="#f472b6" stroke-width="1"/>
    <text x="745" y="227" fill="#f472b6" font-size="8" font-weight="bold" text-anchor="middle">Finestra de Relacions</text>
    <text x="745" y="258" fill="#f472b6" font-size="8.5" text-anchor="middle" font-weight="bold">Consistència Relacional</text>
  </svg>
</div>

### 📋 Taula de Propietats, Màscares i Regles de Validació en SGBD d'Escriptori

| Categoria | Propietat / Paràmetre | Valors / Caràcters Clau | Comportament Tècnic | Exemple Microinformàtic |
| :--- | :--- | :--- | :--- | :--- |
| **Tipus Numèrics** | Mida del Camp Numèric | Byte (1 B), Enter (2 B), Enter Llarg (4 B), Simple, Doble | Determina el rang i la compatibilitat amb claus autonumèriques. | `id_client_fk` en taula filla ha de ser **Enter Llarg** (4 bytes). |
| **Màscara de Dades** | Caràcters de Màscara | `0` (dígit obligat.), `9` (dígit opc.), `L` (lletra oblig.), `?` (lletra opc.), `>` (majúsc.) | Força un patró de tecleig estricte en temps real durant l'entrada de dades. | `>LL-0000-LL` (Matrícula antiga) o `00000000->L` (DNI). |
| **Regla de Validació** | Condició Lògica de Camp | Operadors `<`, `>`, `<=`, `>=`, `<>`, `ENTRE ... I ...`, `EN(...)` | Expressió booleana avaluada en guardar el camp; rebutja l'entrada si és falsa. | `>0 I <= 1000` (Preu de mà d'obra) o `>= Data()` (Termini d'entrega). |
| **Integritat Referencial** | Restriccions de Clau Forana | Exigir Integritat, Actualitzar en Cascada, Eliminar en Cascada | Garanteix que no existeixin fills sense pare i propaga canvis d'identificador. | Esborrar una factura elimina en cascada les seues línies de detall associades. |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**8.1 Disseny de Taules i Propietats de Camp en SGBD**](./ut0801.md)
- [**8.2 Integritat Referencial i Finestra de Relacions**](./ut0802.md)
- [**8.3 Màscares d'Entrada i Formats de Camp**](./ut0803.md)
- [**8.4 Regles de Validació i Missatges d'Error**](./ut0804.md)

---

# 8.1 Disseny de Taules i Propietats de Camp en SGBD

> **📺 Recursos Audiovisuals de Referència**
> - [**Creació i Disseny de Taules en SGBD Relacionals ↗️**](https://www.youtube.com/watch?v=TyV3S4Y4yWU): Vista Disseny, definició de tipus de dades i assignació de Clau Primària.
> - [**Format de Camps i Màscares d'Entrada ↗️**](https://www.aulaclic.es/access-2016/secuencias/p05_formato_mascara_yt.htm): Configuració de filtres per a NIF, telèfons i codis postals.
> - [**Regles de Validació i Integritat de Domini ↗️**](https://www.youtube.com/watch?v=z9Oe-eJL5hY): Expressions booleanes per a impedir entrades errònies.
> - [**Integritat Referencial i Relacions entre Taules ↗️**](https://www.aulaclic.es/access-2016/secuencias/p06_relaciones_yt.htm): Vincular taules 1:N i activar actualització/eliminació en cascada.


---

Tema 3

M i c r o s o f t A C C E S S

T A B L A S

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Índice

#### CAPÍTULO 1: ELEMENTOS BÁSICOS DE ACCESS 20104

ARRANCAR Y CERRAR ACCESS 2010

LA PANTALLA INICIAL

CONCEPTOS BÁSICOS DE BASES DE DATOS

#### CAPÍTULO 2: CREAR, ABRIR Y CERRAR UNA BASE DE DATOS

CREAR UNA BASE DE DATOS

CERRAR LA BASE DE DATOS

ABRIR UNA BASE DE DATOS

#### CAPÍTULO 3: TABLAS DE DATOS

CREAR TABLAS DE DATOS

TIPOS DE DATOS

LA CLAVE PRINCIPAL

CERRAR UNA TABLA

#### CAPÍTULO 4: MODIFICAR TABLAS DE DATOS

MODIFICAR EL DISEÑO DE UNA TABLA

AÑADIR UN NUEVO CAMPO

ELIMINAR UN CAMPO

INTRODUCIR Y MODIFICAR DATOS EN UNA TABLA

DESPLAZARSE DENTRO DE UNA TABLA

#### CAPÍTULO 5: PROPIEDADES DE LOS CAMPOS

TAMAÑO DEL CAMPO

FORMATO DEL CAMPO

LUGARES DECIMALES

MÁSCARA DE ENTRADA

TÍTULO

VALOR PREDETERMINADO

REGLA DE VALIDACIÓN

TEXTO DE VALIDACIÓN

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

REQUERIDO

PERMITIR LONGITUD CERO

INDEXADO

#### CAPÍTULO 6: LAS RELACIONES

CONCEPTOS BÁSICOS SOBRE RELACIONES

CREAR LA PRIMERA RELACIÓN

INTEGRIDAD REFERENCIAL

AÑADIR TABLAS A LA VENTANA RELACIONES

QUITAR TABLAS DE LA VENTANA RELACIONEs

MODIFICAR RELACIONES

ELIMINAR RELACIONES

LIMPIAR LA VENTANA RELACIONES

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Capítulo 1: Elementos Básicos de Access 2010

Arrancar y cerrar Access 2010

Veamos las dos formas básicas de iniciar Access 2010.

 Desde el botón Inicio situado, normalmente, en la esquina inferior izquierda de la pantalla. Colocar el cursor y hacer clic sobre el botón Inicio se despliega un menú; al colocar el cursor sobre Todos los Programas, aparece otra lista con los programas que hay instalados en tu ordenador buscar Microsoft Office y luego Microsoft Access, hacer clic sobre él, y se iniciará el programa.

 Desde el icono de Access 2010 del escritorio.

Para cerrar Access 2010, puedes utilizar cualquiera de las siguientes operaciones

 Hacer clic en el botón cerrar

 Pulsar la combinación de teclas ALT+F4.  Hacer clic sobre el Botón de Office y pulsar el botón Salir de Access.

La Pantalla inicial

Al iniciar Access aparece una pantalla inicial como ésta. La pantalla que se muestra a continuación puede no coincidir exactamente con la que ves en tu ordenador, ya que cada usuario puede decidir qué elementos quiere que se vean en cada momento.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Barra de Título

La barra de título contiene el nombre del programa y del archivo con el que estamos trabajando en el momento actual. En el extremo de la derecha están los botones para minimizar, maximizar/restaurar y cerrar.

Barra de Acceso Rápido

La barra de acceso rápido contiene las operaciones más habituales de Access como Guardar, Imprimir o Deshacer.

Cinta de opciones

La banda de opciones contiene todas las opciones del programa agrupadas en pestañas. Al hacer clic en Crear, por ejemplo, veremos las operaciones relacionadas con la creación de los diferentes elementos que se pueden crear en Access.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Todas las operaciones se pueden hacer a partir de estos menús.

En algunos momentos algunas opciones no estarán disponibles, las reconocerás porque tienen un color atenuado.

Las pestañas que forman la banda pueden ir cambiando según el momento en que te encuentres cuando trabajes con Access. Está diseñada para mostrar solamente aquellas opciones que te serán útiles en cada pantalla.

Si haces doble clic sobre cualquiera de las pestañas, la barra se minimizará para ocupar menos espacio.

De esta forma sólo muestra el nombre de las pestañas y las opciones quedarán ocultas.

Las opciones volverán a mostrarse en el momento en el que vuelvas a hacer clic en cualquier pestaña.

La barra de estado

La barra de estado se encuentra en la parte inferior de la pantalla y contiene indicaciones sobre el estado de la aplicación, proporciona distinta información según la pantalla en la que estemos en cada momento.

Conceptos Básicos de Bases de Datos

Base de datos

Una base de datos es un conjunto de datos que están organizados para un uso determinado y el conjunto de los programas que permiten gestionar estos datos es lo que se denomina Sistema Gestor de Bases de Datos.

Las bases de datos de Access 2010 tienen la extensión .ACCDB para que el ordenador las reconozca como tal.

Casi todos los sistemas de gestión de base de datos modernos almacenan y tratan la información utilizando el modelo de gestión de bases de datos relacional.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

En un sistema de base de datos relacional, los datos se organizan en Tablas.

Las tablas almacenan información sobre un tema como pueden ser los clientes de una empresa, o los pedidos realizados por cada uno de ellos; las tablas se relacionan de forma que a partir de los datos de la tabla de clientes podamos obtener información sobre los pedidos de éstos.

Tablas de datos

Una tabla de datos es un objeto que se define y utiliza para almacenar los datos. Una tabla contiene información sobre un tema o asunto particular, como pueden ser como hemos visto antes, clientes o pedidos.

Las tablas contienen campos que almacenan los diferentes datos como el código del cliente, nombre del cliente, dirección,...

Y al conjunto de campos para un mismo objeto de la tabla se le denomina registro o fila, así todos los campos de un cliente forman un registro, todos los datos de otro cliente forman otro registro,...

Consultas

Una consulta es un objeto que proporciona una visión personal de los datos almacenados en las tablas ya creadas.

Existen varios tipos de consultas para seleccionar, actualizar, borrar datos,..., pero en principio se utilizan para extraer de las tablas los datos que cumplen ciertas condiciones.

Formularios

Un formulario es el objeto de Access 2010 diseñado para la introducción, visualización y modificación de los datos de las tablas.

Informes

Un informe es el objeto de Access 2010 diseñado para dar formato, calcular, imprimir y resumir datos seleccionados de una tabla. Generalmente se utiliza para presentar los datos de forma impresa.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Macros

Una macro es el objeto de Access 2010 que define de forma estructurada las acciones que el usuario desea que Access realice en respuesta a un evento determinado.

Por ejemplo, podríamos crear una macro para que abra un informe en respuesta a la elección de un elemento de un formulario.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Capítulo 2: Crear, abrir y cerrar una Base de Datos

Crear una base de datos

Para crear una nueva base de datos debemos

Hacer clic sobre la opción Nuevo del Menú Archivo que aparece a la derecha de la pantalla. Selecciona la opción Base de datos en blanco.

A continuación aparecerá en un panel a la derecha de la pantalla el siguiente cuadro

Aquí deberás indicar el Nombre de archivo de la base de datos.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Para seleccionar la carpeta donde guardar el archivo puedes hacer clic en el botón Buscar ubicación .

Se abrirá el siguiente cuadro de diálogo donde indicaremos el nombre de la base de datos que estamos creando y el lugar donde se guardará.

Hacer doble clic sobre la carpeta donde guardaremos el archivo.

En el cuadro Nombre de archivo: escribir el nombre que queremos poner a la base de datos. Hacer clic sobre el botón Aceptar.

Se cerrará el cuadro de diálogo y volverás a la pantalla de Introducción a Microsoft Office Access.

En el cuadro de texto Nombre de archivo aparecerá la ruta y el nombre que escogiste. Pulsar el botón Crear para crear la base de datos.

Automáticamente se creará nuestra nueva base de datos a la cual Access asignará la extensión .ACCDB.

Por defecto, Access abrirá una nueva tabla para que puedas empezar a rellenar sus datos.

Una tabla es el elemento principal de cualquier base de datos ya que todos los demás objetos se crean a partir de éstas.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Si observas esta ventana, a la izquierda aparece el Panel de Exploración, desde donde podremos seleccionar todos los objetos que sean creados dentro de la base de datos.

En principio sólo encontraremos el de Tabla1 pues es el que Access creará por defecto. Puedes ocultarlo haciendo clic en el botón Ocultar .

Desplegando la cabecera del panel puedes seleccionar qué objetos mostrar y de qué forma.

Cerrar la base de datos.

Se puede cerrar una base de datos de varias formas

Cerrando Access: Ir al Menú Archivo y pulsar el botón Salir . O bien hacer clic sobre el botón Cerrar de la ventana Base de datos.

Sin cerrar Access: En el Menú Archivo, elegir la opción Cerrar base de datos .

Abrir una base de datos.

Podemos abrir una base de datos ya existente desde sitios distintos

 Desde el Menú Archivo: Ir al Menú ArchivoElegir la opción Abrir...

 Desde los documentos recientes del Menú Archivo: Despliega el Botón de Office donde aparecen las últimas bases de datos que se abrieron bajo el título de Documentos recientes. Haz clic en la que quieras abrir.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Capítulo 3: Tablas de datos

Crear tablas de datos

Para crear una tabla de datos tenemos que hacer clic en la pestaña Crear para visualizar sus opciones. En el marco Tablas podremos seleccionar estas opciones

 El botón Tabla abre la Vista Hoja de datos, consiste en introducir directamente los datos en la tabla y según el valor que introduzcamos en la columna determinará el tipo de datos que tiene la columna.  Vista diseño es el método que detallaremos en esta unidad didáctica.

 Listas de SharePoint consiste en crear un objeto compatible con un sitio SharePoint desde el que podrás compartir los datos almacenados en la lista o tabla con otras personas con acceso al mismo sitio.

A continuación se presenta la forma de crear una tabla en vista diseño. Este método consiste en definir la estructura de la tabla, es decir, definir las distintas columnas que esta tendrá y otras consideraciones como claves, etc...

Otra forma rápida de llegar a la vista Diseño es seleccionando la vista desde la pestaña Hoja de datos, o haciendo clic en el botón de Vista de Diseño en la barra de estado: DiseñoVer

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Aparecerá la vista de Diseño de la tabla

En la pestaña tenemos el nombre de la tabla (como todavía no hemos asignado un nombre a la tabla, Access le ha asignado un nombre por defecto Tabla1).

A continuación tenemos la rejilla donde definiremos las columnas que componen la tabla, se utiliza una línea para cada columna, así en la primera línea (fila) de la rejilla definiremos la primera columna de la tabla y así sucesivamente.

En la parte inferior tenemos a la izquierda dos pestañas (General y Búsqueda) para definir propiedades del campo es decir características adicionales de la columna que estamos definiendo.

Y a la derecha tenemos un recuadro con un texto que nos da algún tipo de ayuda sobre lo que tenemos que hacer, por ejemplo en este momento el cursor se encuentra en la primera fila de la rejilla en la columna Nombre del campo y en el recuadro inferior derecho Access nos indica que el nombre de un campo puede tener hasta 64 caracteres.

> **💡 Apunt Tècnic**
> Ejemplo

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

En la primera fila escribir el nombre del primer campo, al pulsar la tecla INTRO pasamos al tipo de datos, por defecto nos pone Texto como tipo de dato. Si queremos cambiar de tipo de datos, hacer clic sobre la flecha de la lista desplegable de la derecha y elegir otro tipo.

Observa como una vez tengamos algún tipo de dato en la segunda columna, la parte inferior de la ventana, la correspondiente a Propiedades del campo se activa para poder indicar más características del campo, características que veremos con detalle en la unidad temática siguiente.

A continuación pulsar la tecla INTRO para ir a la tercera columna de la rejilla.

Esta tercera columna no es obligatorio utilizarla ya que únicamente sirve para introducir un comentario, normalmente una descripción del campo de forma que la persona que tenga que introducir datos en la tabla sepa qué debe escribir ya que este cometario aparecerá en la barra de estado de la hoja de datos.

Repetir el proceso hasta completar la definición de todos los campos (columnas) de la tabla.

Tipos de Datos

Los diferentes tipos de datos de Access 2010 son

 Texto: permite almacenar cualquier tipo de texto, tanto caracteres como dígitos y caracteres especiales. Tiene una longitud por defecto de 50 caracteres, siendo su longitud máxima de 255 caracteres. Normalmente se utiliza para almacenar datos como nombres, direcciones o cualquier número que no se utilice en cálculos, como números de teléfono o códigos postales.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

 Memo: se utiliza para textos de más de 255 caracteres como comentarios o explicaciones. Tiene una longitud máxima de 65.536 caracteres. Access recomienda para almacenar texto con formato o documentos largos, crear un campo Objeto OLE en lugar de un campo Memo. En Access 2010 se puede ordenar o agrupar por un campo Memo, pero Access sólo utiliza los 255 primeros caracteres cuando se ordena o agrupa en un campo Memo.

 Número: para datos numéricos utilizados en cálculos matemáticos. Dentro del tipo número la propiedad tamaño del campo nos permite concretar más. En resumen los tipos Byte, Entero y Entero largo permiten almacenar números sin decimales; los tipos Simple, Doble y Decimal permiten decimales; el tipo Id. de réplica se utiliza para claves autonuméricas en bases réplicas.

 Fecha/Hora: para la introducción de fechas y horas desde el año 100 al año 9999.

 Moneda: para valores de dinero y datos numéricos utilizados en cálculos matemáticos en los que estén implicados datos que contengan entre uno y cuatro decimales. La precisión es de hasta 15 dígitos a la izquierda del separador decimal y hasta 4 dígitos a la derecha del mismo.

Access recomienda utilizar el tipo Moneda para impedir el redondeo de cifras en los cálculos. Un campo Moneda tiene una precisión de hasta 15 dígitos a la izquierda de la coma decimal y 4 dígitos a la derecha. Un campo Moneda ocupa 8 bytes de espacio en disco.

 Autonumérico: número secuencial (incrementado de uno a uno) único, o número aleatorio que Microsoft Access asigna cada vez que se agrega un nuevo registro a una tabla. Los campos Autonumérico no se pueden actualizar.

 Sí/No: valores Sí y No (Sí/No, Verdadero/Falso o Activado/desactivado).

 Objeto OLE: objeto como por ejemplo una hoja de cálculo de Microsoft Excel, un documento de Microsoft Word, gráficos, imágenes, sonidos u otros datos binarios.

 Hipervínculo: texto o combinación de texto y números almacenada como texto y utilizada como dirección de hipervínculo. Una dirección de hipervínculo puede tener hasta tres partes: Texto: el texto que aparece en el campo o control. Dirección: ruta de acceso de un archivo o página. Subdirección

posición dentro del archivo o página. Sugerencia: el texto que aparece como información sobre herramientas.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

La clave principal

Antes de guardar la tabla tendremos que asignar una clave principal.

La clave principal proporciona un valor único para cada fila de la tabla y nos sirve de identificador de registros de forma que con esta clave podamos saber sin ningún tipo de equivocación el registro al cual identifica. No podemos definir más de una clave principal, pero podemos tener una clave principal compuesta por más de un campo.

Para asignar una clave principal a un campo, seguir los siguientes pasos: Hacer clic sobre el nombre del campo que será clave principal.

Hacer clic sobre el botón Clave principal en el marco Herramientas de la pestaña Diseño.

A la izquierda del nombre del campo aparecerá una llave indicándonos que dicho campo es la clave principal de la tabla.

Guardar una tabla

Para guardar una tabla, podemos

 Ir al Menú Archivo y elegir la opción Guardar.  O bien hacer clic sobre el botón Guardar de la barra de Acceso Rápido.

Como nuestra tabla aún no tiene nombre asignado, aparecerá el siguiente cuadro de diálogo

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Escribir el nombre de la tabla.Hacer clic sobre el botón Aceptar.

> **⚠️ Nota: Si no hemos asignado clave principal antes de gua...**
> Nota: Si no hemos asignado clave principal antes de guardar la tabla, nos aparece un cuadro de diálogo avisándonos de ello, y preguntándonos si queremos que Access cree una, si le decimos que Sí nos añade un campo de tipo autonumérico y lo define como clave principal. Si le decimos que No se guarda la tabla sin clave principal ya que una clave principal en una tabla es conveniente pero no obligatorio.

Cerrar una tabla

Para cerrar una tabla, seguir los siguientes pasos:  Hacer clic derecho sobre la pestaña con el nombre de la tabla y seleccionar Cerrar en el menú emergente.

 O bien hacer clic sobre el botón Cerrar que se encuentra en la parte derecha al mismo nivel que la pestaña.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Capítulo 4: Modificar Tablas de datos

Modificar el diseño de una tabla

Si una vez creada una tabla, queremos cambiar algo de su definición (por ejemplo, añadir una nueva columna, ampliar una columna que ya existe, borrar una columna, etc...) tendremos que realizar una modificación en su diseño

Abrir la base de datos donde se encuentra la tabla a modificar, en el caso de que no lo estuviera.

 Hacer clic derecho sobre la tabla que queremos modificar, seleccionar Vista Diseño en el menú contextual

Aparecerá la ventana de diseño de tablas estudiada en la unidad temática anterior. Para modificar la definición de un campo, posicionar el cursor sobre el campo a modificar y realizar las sustituciones necesarias.

Añadir un nuevo campo  Ir al final de la tabla y escribir la definición del nuevo campo,  Situarse en uno de los campos ya creados y hacer clic en el botón de la pestaña Diseño, en este último caso el nuevo campo se insertará delante del que estamos posicionados.

Eliminar un campo  Posicionarse en el campo y hacer clic en el botón de la pestaña Diseño.  Seleccionar toda la fila correspondiente al campo haciendo clic en su extremo izquierdo y cuando esté remarcada pulsar la tecla Supr o Del. Se borrará el campo de la definición de la tabla y los datos almacenados en el campo también desaparecerán.

Por último, guardar la tabla.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Introducir y modificar datos en una tabla

Para introducir datos en una tabla, podemos elegir entre

 Hacer doble clic sobre el nombre de la tabla en el Panel de Exploración.  Desde el Panel de Exploración hacer clic derecho sobre la tabla a rellenar y seleccionar la opción en el menú contextual.  Si estamos en la vista de Diseño de tabla, hacer clic sobre el botón Vistas de objeto y elegir Vista Hoja de datos en la pestaña Inicio o diseño.

En los tres casos aparecerá la ventana Hoja de datos

Cada fila nos sirve para introducir un registro. Escribir el valor del primer campo del registro. Pulsar INTRO para ir al segundo campo del registro.

Cuando terminamos de introducir todos los campos del primer registro, pulsar INTRO para introducir los datos del segundo registro.

En el momento en que cambiamos de registro, el registro que estábamos introduciendo se almacenará, no es necesario guardar los registros de la tabla.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Hacer clic sobre el botón Cerrar para terminar con dicha tabla.

Si lo que queremos es borrar un registro entero

Seleccionar el registro a eliminar haciendo clic sobre el cuadro de la izquierda del registro. El registro quedará seleccionado.

Pulsar la tecla SUPR del teclado o haz clic en el botón Eliminar que se encuentra en el panel Registros de la pestaña Inicio.

Si lo que queremos es modificar algún valor introducido no tenemos más que situarnos sobre el valor a modificar y volverlo a escribir.

Si queremos cambiar algo de la estructura de la tabla, tenemos que pasar a la Vista Diseño haciendo clic sobre el botón de Vista de objeto de la pestaña Inicio.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Desplazarse dentro de una tabla

Para desplazarse por los diferentes registros de una tabla vamos a utilizar la barra de desplazamiento

La barra nos indica en qué registro estamos situados y el número total de registros de la tabla.

El recuadro en blanco nos está diciendo el registro actual.

Al final donde pone de 3 nos indica el número total de registros que en nuestro caso es tres. Haciendo clic sobre los diferentes botones realizaremos las operaciones indicadas a continuación

Para ir al primer registro de la tabla. Para ir al registro anterior en la tabla. Para ir al registro siguiente en la tabla. Para ir al último registro de la tabla.

Para crear un nuevo registro que se situará automáticamente al final de la tabla.

Podemos ir también directamente a un registro determinado de la siguiente forma: Hacer doble clic sobre el cuadro en blanco donde pone el número del registro actual. Escribir el número del registro al cual queremos ir.

Pulsar INTRO.

También podemos desplazarnos por los diferentes campos y registros pulsando las teclas FLECHA ABAJO, FLECHA ARRIBA, FLECHA IZQUIERDA y FLECHA DERECHA del teclado.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Capítulo 5: Propiedades de los campos

Cada campo de una tabla dispone de una serie de características que proporcionan un control adicional sobre la forma de funcionar del campo.

Las propiedades aparecen en la parte inferior izquierda de la vista Diseño de tabla cuando tenemos un campo seleccionado.

Las propiedades se agrupan en dos pestañas, la pestaña General donde indicamos las características generales del campo y la pestaña Búsqueda en la que podemos definir una lista de valores válidos para el campo, esta última pestaña está explicada en el tema 3 junto con el asistente de búsqueda.

Las propiedades de la pestaña General pueden cambiar para un tipo de dato u otro mientras que las propiedades de la pestaña Búsqueda cambian según el tipo de control asociado al campo.

Hay que tener en cuenta que si se modifican las propiedades de un campo después de haber introducido datos en él se pueden perder estos datos introducidos.

A continuación explicaremos las propiedades de que disponemos según los diferentes tipos de datos.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Tamaño del campo

Para los campos Texto, esta propiedad determina el número máximo de caracteres que se pueden introducir en el campo. Siendo por defecto de 50 caracteres y valor máximo de 255.

Para los campos Numérico, las opciones son:  Byte (equivalente a un carácter) para almacenar valores enteros entre 0 y 255.  Entero para valores enteros comprendidos entre -32.768 y 32.767.  Entero largo para valores enteros comprendidos entre -2.147.483.648 y 2.147.483.647.

 Simple para la introducción de valores comprendidos entre -3,402823E38 y - 1,401298E-45 para valores negativos, y entre 1,401298E-45 y 3,402823E38 para valores positivos.  Doble para valores comprendidos entre -1,79769313486231E308 y - 4,94065645841247E-324 para valores negativos, y entre 1,79769313486231E308 y 4,94065645841247E-324 para valores positivos.

 Id. de réplica se utiliza para claves autonuméricas en bases réplicas.  Decimal para almacenar valores comprendidos entre -10^38-1 y 10^38-1 (si estamos en una base de datos .adp) y números entre -10^28-1 y 10^28-1 (si estamos en una base de datos .accdb)  Los campos Autonumérico son Entero largo.

A los demás tipos de datos no se les puede especificar tamaño.

Formato del campo

Esta propiedad se utiliza para personalizar la forma de presentar los datos en pantalla o en un informe. Se puede establecer para todos los tipos de datos excepto el Objeto OLE y Autonumérico.

Para los campos Numérico y Moneda, las opciones son:  Número general: presenta los números tal como fueron introducidos.  Moneda: presenta los valores introducidos con el separador de millares y el símbolo monetario asignado en Windows como puede ser €.  Euro: utiliza el formato de moneda, con el símbolo del euro.

 Fijo: presenta los valores sin separador de millares.  Estándar: presenta los valores con separador de millares.  Porcentaje: multiplica el valor por 100 y añade el signo de porcentaje (%).  Científico: presenta el número con notación científica.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Los campos Fecha/Hora tienen los siguientes formatos:  Fecha general: si el valor es sólo una fecha, no se muestra ninguna hora; si el valor es sólo una hora, no se muestra ninguna fecha. Este valor es una combinación de los valores de Fecha corta y Hora larga. Ejemplos: 3/4/93, 05:34:00 PM y 3/4/93 05:34:00 PM.

 Fecha larga: se visualiza la fecha con el día de la semana y el mes completo. Ejemplo: Lunes 21 de agosto de 2000.  Fecha mediana: presenta el mes con los tres primeros caracteres. Ejemplo: 21- Ago-2000.  Fecha corta: se presenta la fecha con dos dígitos para el día, mes y año. Ejemplo: 01/08/00.

 El formato Fecha corta asume que las fechas comprendidas entre el 1/1/00 y el 31/12/29 son fechas comprendidas entre los años 2000 y el 2029 y las fechas comprendidas entre el 1/1/30 y el 31/12/99 pertenecen al intervalo de años entre 1930 y 1999.  Hora larga: presenta la hora con el formato normal. Ejemplo: 17:35:20.

 Hora mediana: presenta la hora con formato PM o AM. Ejemplo: 5:35 PM.  Hora corta presenta la hora sin los segundos. Ejemplo: 17:35.

Los campos Sí/No disponen de los formatos predefinidos Sí/No, Verdadero/Falso y Activado/Desactivado.

Lugares decimales

Esta propiedad nos permite indicar el número de decimales que queremos asignar a un tipo de dato Número o Moneda.

Máscara de entrada

Se utiliza la máscara de entrada para facilitar la entrada de datos y para controlar los valores que los usuarios pueden introducir. Por ejemplo, puedes crear una máscara de entrada para un campo Número de teléfono que muestre exactamente cómo debe introducirse un número nuevo: ( )

.

Access dispone de un Asistente para máscaras de entradas que nos facilita el establecer esta propiedad, y al cual accederemos al hacer clic sobre el botón que aparece a la derecha de la propiedad a modificar una vez activada dicha propiedad.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Título

Se utiliza esta propiedad para indicar cómo queremos que se visualice la cabecera del campo. Por ejemplo, si un campo se llama Fnac e indicamos Fecha de nacimiento como valor en la propiedad Título, en la cabecera del campo Fnac veremos Fecha de nacimiento.

Valor predeterminado

El valor predeterminado es el valor que se almacenará automáticamente en el campo si no introducimos ningún valor. Se suele emplear cuando se sabe que un determinado campo va a tener la mayoría de las veces el mismo valor, se utiliza esta propiedad para indicar o especificar cuál va a ser ese valor y así que se introduzca automáticamente en el campo a la hora de introducir los datos de la tabla.

Por ejemplo si tenemos la tabla Clientes con el campo Provincia y la mayoría de clientes son de la provincia Valencia, se puede introducir ese valor en la propiedad Valor predeterminado del campo Provincia y así a la hora de introducir los diferentes clientes, automáticamente aparecerá el valor Valencia y no lo tendremos que teclear.

Se puede utilizar esta propiedad para todos los tipos de datos excepto el Objeto OLE y el Autonumérico.

Regla de validación

Esta propiedad nos permite controlar la entrada de datos según el criterio que se especifique. Hay que escribir el criterio que debe cumplir el valor introducido en el campo para que sea introducido correctamente.

Por ejemplo si queremos que un valor introducido esté comprendido entre 100 y 2000, se puede especificar en esta propiedad >=100 Y <=2000.

Para formar la condición puedes utilizar el generador de expresiones como te explicamos en la secuencia animada.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Se puede utilizar esta propiedad para todos los tipos de datos excepto el Objeto OLE y el Autonumérico.

Para ayudarnos a escribir la regla de validación tenemos el generador de expresiones que se abre al hacer clic sobre el botón que aparece a la derecha de la propiedad cuando hacemos clic en ella. Para conocer un poco más sobre él visita nuestro avanzado.

Texto de validación

En esta propiedad escribiremos el texto que queremos nos aparezca en pantalla si introducimos en un campo un valor que no cumple la regla de validación especificada en la propiedad anterior.

Debe ser un mensaje para que la persona que se equivoque a la hora de introducir los datos, sepa el porqué de su error y pueda solucionarlo.

Se puede utilizar esta propiedad para todos los tipos de datos excepto el Objeto OLE y el Autonumérico.

Requerido

Si queremos que un campo se rellene obligatoriamente tendremos que asignar a esta propiedad el valor Sí, en caso contrario el valor será el de No. Se puede utilizar esta propiedad para todos los tipos de datos excepto el Objeto OLE y el Autonumérico.

Permitir longitud cero

Los campos Memo y Texto cuentan con esta propiedad para controlar que no se puedan introducir valores de cadena que no contengan caracteres o estén vacíos.

Indexado

Se utiliza esta propiedad para establecer un índice de un solo campo. Los índices hacen que las consultas basadas en los campos indexados sean más rápidas, y también aceleran las operaciones de ordenación y agrupación.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Por ejemplo, si buscas empleados basándose en un campo llamado Apellidos, puedes crear un índice sobre este campo para hacer más rápida la búsqueda.

Esta propiedad dispone de tres valores

No: Sin índice. Sí (con duplicados): Cuando se asigna un índice al campo y además admite valores duplicados (dos filas con el mismo valor en el campo). Sí (sin duplicados): Cuando se asigna un índice pero sin admitir valores duplicados.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Capítulo 6: Las Relaciones

Conceptos básicos sobre relaciones.

Bases de datos relacionales Una base de datos relacional permite la utilización simultánea de datos procedentes de más de una tabla.

Al hacer uso de las relaciones, se evita la duplicidad de datos, ahorrando memoria y espacio en el disco, aumentando la velocidad de ejecución y facilitando al usuario/a el trabajo con tablas. Para conseguir una correcta base de datos relacional es imprescindible realizar un estudio previo del diseño de la base de datos.

Para poder relacionar tablas entre sí se deberá especificar un campo en común que contenga el mismo valor en las dos tablas y dicho campo será clave principal en una de ellas. Las tablas se relacionan de dos a dos, donde una de ellas será la tabla principal (de la que parte relación) y la otra será la tabla secundaria (destino de la relación).

Tipos de relaciones. Se pueden distinguir tres tipos de relaciones

 Relación Uno a Uno: Cuando un registro de una tabla sólo puede estar relacionado con un único registro de la otra tabla y viceversa. Por ejemplo: tenemos dos tablas una con los datos de diferentes poblaciones y otra con una lista de Alcaldes, una población sólo puede tener un alcalde, y un alcalde lo será únicamente de una población.

 Relación Uno a Varios: Cuando un registro de una tabla (tabla secundaria) sólo puede estar relacionado con un único registro de la otra tabla (tabla principal) y un registro de la otra tabla (tabla principal) puede tener más de un registro relacionado en la primera tabla (tabla secundaria).

Por ejemplo: tenemos dos tablas una con los datos de diferentes poblaciones y otra con los habitantes, una población puede tener más de un habitante, pero un habitante pertenecerá (estará empadronado) en una única población.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

 Relación Varios a Varios: Cuando un registro de una tabla puede estar relacionado con más de un registro de la otra tabla y viceversa. Por ejemplo: tenemos dos tablas una con los datos de clientes y otra con los artículos que se venden en la empresa, un cliente podrá realizar un pedido con varios artículos, y un artículo podrá ser vendido a más de un cliente.

Las relaciones varios a varios se suelen representar definiendo una tabla intermedia entre las dos tablas. Siguiendo el ejemplo anterior sería definir una tabla líneas de pedido relacionada con clientes y con artículos.

Crear la primera relación

Para crear relaciones en Access 2010 primero deberemos acceder a la ventana Relaciones deberemos hacer clic en el botón Relaciones que se encuentra en la pestaña Herramientas de base de datos.

Aparecerá el cuadro de diálogo Mostrar tabla de la derecha esperando indicarle las tablas que formarán parte de la relación a crear.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Seleccionar una de las tablas que pertenecen a la relación haciendo clic sobre ella, aparecerá dicha tabla remarcada.

Hacer clic sobre el botón Agregar.

Repetir los dos pasos anteriores hasta añadir todas las tablas de las relaciones a crear. Hacer clic sobre el botón Cerrar.

Ahora aparecerá la ventana Relaciones con las tablas añadidas en el paso anterior.

Para crear la relación

Ir sobre el campo de relación de la tabla principal (en este caso ejemplo_codigo).

Pulsar el botón izquierdo del ratón y manteniéndolo pulsado arrastrar hasta el campo código de la tabla secundaria (Código). Soltar el botón del ratón.

Aparecerá el siguiente cuadro de diálogo Modificar relaciones

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

En la parte superior deben estar los nombres de las dos tablas relacionadas (Datos y Extras) y debajo de éstos el nombre de los campos de relación (ejemplo_codigo y código). Ojo! siempre deben ser campos que contengan el mismo tipo de información y por lo tanto del mismo tipo.

Observa en la parte inferior el Tipo de relación que se asignará dependiendo de las características de los campos de relación (en nuestro caso uno a varios).

Activar el recuadro Exigir integridad referencial haciendo clic sobre éste.

Si se desea, se puede activar las casillas Actualizar en cascada los campos relacionados y Eliminar en cascada los registros relacionados.

Para terminar, hacer clic sobre el botón Crear.

Se creará la relación y ésta aparecerá en la ventana Relaciones.

Integridad referencial

La integridad referencial es un sistema de reglas que utiliza Access 2010 para asegurarse que las relaciones entre registros de tablas relacionadas son válidas y que no se borren o cambien datos relacionados de forma accidental. Al exigir integridad referencial en una relación le estamos diciendo a Access 2010 que no nos deje introducir datos en la tabla secundaria si previamente no se ha introducido el registro relacionado en la tabla principal.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Por ejemplo: Tenemos una tabla de habitantes y una tabla de poblaciones, en la tabla Habitantes tengo un campo Población que me indica en qué población vive el habitante, las dos tablas deberían estar relacionadas por el campo Población, en esta relación de tipo uno a varios la tabla Poblaciones es la tabla principal y la tabla Habitantes la secundaria (una población tiene varios habitantes). Si marcamos la casilla Integridad Referencial, no nos dejará asignar a un habitante una población que no exista en la tabla Poblaciones.

La integridad referencial dispone de dos acciones asociadas:  Actualizar en cascada los campos relacionados: Hace que cuando se cambie el valor del campo de la tabla principal, automáticamente cambiarán los valores de sus registros relacionados en la tabla secundaria.

Por ejemplo: Si cambiamos el nombre de la población Onteniente por Ontinyent en la tabla Poblaciones, automáticamente en la tabla Habitantes, todos los habitantes de Onteniente se cambiarán a Ontinyent.

 Eliminar en cascada los registros relacionados: Cuando se elimina un registro de la tabla principal se borrarán también los registros relacionados en la tabla secundaria. Por ejemplo: Si borramos la población Onteniente en la tabla Poblaciones, automáticamente todos los habitantes de Onteniente se borrarán de la tabla de Habitantes.

Si no marcamos ninguna de las opciones no nos dejará ni cambiar el nombre de una población ni eliminar una población si ésta tiene habitantes asignados.

Añadir tablas a la ventana Relaciones

Si ya hemos creado una relación y queremos crear otra pero no se dispone de la tabla en la ventana Relaciones debemos añadir la tabla a la ventana

Primero nos situamos en la ventana Relaciones haciendo clic en el botón Relaciones en la pestaña Herramientas de base de datos.

Para añadir la tabla hacer clic sobre el botón Mostrar tabla en la pestaña Diseño.

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

Aparecerá el cuadro de diálogo Mostrar tablas estudiado en el apartado anterior. Añadir las tablas necesarias.

Cerrar el cuadro de diálogo.

Quitar tablas de la ventana Relaciones

Si queremos eliminar una tabla de la ventana Relaciones: Primero nos situamos en la ventana Relaciones haciendo clic en el botón Relaciones en la pestaña Herramientas de base de datos.

Después podemos elegir entre:  Hacer clic con el botón derecho sobre la tabla y elegir la opción Ocultar tabla del menú contextual que aparecerá,  Hacer clic sobre la tabla para seleccionarla y hacer clic en el botón Ocultar tabla en la pestaña Diseño.

Modificar relaciones

Para modificar relaciones ya creadas: Posicionarse en la ventana Relaciones y elegir entre estas dos formas

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

 Hacer clic con el botón derecho sobre la relación a modificar y elegir la opción Modificar relación... del menú contextual que aparecerá,

 Hacer clic sobre la relación a modificar y hacer clic en el botón Modificar relaciones que encontrarás en la pestaña Diseño de la banda de opciones.

Se abrirá el cuadro de diálogo Modificar relaciones estudiado anteriormente. Realizar los cambios deseados.

Hacer clic sobre el botón Aceptar.

Eliminar Relaciones

Si lo que queremos es borrar la relación podemos:  Hacer clic con el botón derecho sobre la relación a borrar y elegir la opción Eliminar del menú contextual,

Aplicaciones Ofimáticas Base de Datos Tema 03.MS-Access. TABLAS

 Hacer clic con el botón izquierdo sobre la relación, la relación quedará seleccionada, y a continuación pulsar la tecla DEL o SUPR.

La relación queda eliminada de la ventana y de la base de datos.

Limpiar la ventana relaciones

Cuando nuestra base de datos contiene muchas tablas y muchas relaciones, la ventana Relaciones puede llegar a ser tan compleja que sea difícil interpretarla. Podemos salvar esta dificultad limpiando la ventana y visualizando en ella únicamente las tablas que nos interesen y sus relaciones. Para ello utilizaremos la opción Borrar diseño y Mostrar relaciones directas que describiremos a continuación.

Para limpiar la ventana Relaciones haz clic en el botón Borrar diseño en la pestaña Diseño

Desaparecerán todas las tablas y todas las relaciones de la ventana Relaciones. Desaparecen las relaciones de la ventana pero siguen existiendo en la base de datos, únicamente hemos limpiado la ventana.

---

# 8.2 Tema 3. Integridad Referencial

Integridad Referencial

¿Qué es la integridad referencial? Con Microsoft Access La integridad referencial es un sistema de reglas que utiliza Microsoft Access para garantizar que las relaciones entre los registros de tablas relacionadas son válidas y que no se eliminan ni modifican accidentalmente datos relacionados.

Puede establecer la integridad referencial cuando se cumplen todas las condiciones siguientes

### 1. El campo coincidente de la tabla principal es una clave principal o tiene un índice

único.

- Los campos relacionados tienen el mismo tipo de datos.

Existen dos excepciones: - un campo Autonumérico puede estar relacionado con un campo Numérico con la propiedad Tamaño del campo establecida a Entero largo, y - un campo Autonumérico con la propiedad Tamaño del campo establecida a Id. de réplica puede estar relacionado con un campo Numérico con la propiedad Tamaño del campo establecida a Id. de réplica.

- Ambas tablas pertenecen a la misma base de datos de Microsoft Access.

Cuando se exige la integridad referencial, deben observarse las reglas siguientes:  No puede introducir un valor en el campo de clave externa de la tabla relacionada que no exista en la clave principal de la tabla principal.  No puede eliminar un registro de una tabla principal si existen registros coincidentes en una tabla relacionada.

 No puede cambiar un valor de clave principal en la tabla principal si ese registro tiene registros relacionados.

Integridad Referencial

Si desea que Microsoft Access exija esas reglas para una relación, seleccione la casilla de verificación Exigir integridad referencial al crear la relación. Si se exige la integridad referencial e infringe una de las reglas con las tablas relacionadas, Microsoft Access muestra un mensaje y no permite el cambio.

Puede anular las restricciones sobre la eliminación o la modificación de registros relacionados y aún así conservar la integridad referencial mediante la activación de las casillas de verificación Actualizar en cascada los campos relacionados y Eliminar en cascada los registros relacionados.

Cuando la casilla de verificación Actualizar en cascada los campos relacionados está activada, el cambio de un valor de clave principal en la tabla principal actualiza automáticamente el valor coincidente en todos los registros relacionados. - Cuando la casilla de verificación Eliminar en cascada los registros relacionados está activada, la eliminación de un registro en la tabla principal elimina todos los registros relacionados en la tabla relacionada.

---

# 8.3 DEFINICION Mascara entrada_Regla validación

Una máscara de entrada es una cadena de caracteres que define el formato de los valores de entrada válidos. Se pueden usar en campos de tabla o de consulta y en controles de formulario o de informe. Las máscaras de entrada se almacenan como una propiedad de objeto.

Una regla de validación es una forma de limitar la información que se escribe en un campo de tabla o en un control (como un cuadro de texto) de un formulario. Con el texto de validación se puede incluir un mensaje que sirva de ayuda a los usuarios que escriben datos no válidos.

---

# 8.4 Ejemplos reglas de validación

Ejemplos de validación de datos Regla de validación Descripción <100 Debe ser inferior a 100. <= 100 Debe ser menor o igual a 100. Entre 1 y 10 Debe estar entre 1 y 10. 0 0 No debe ser igual a 0. <1/1/95 Debe ser una fecha anterior al 1/1/95. > = Fecha () Debe ser la fecha de hoy o más tarde.

<= Fecha () Debe ser la fecha de hoy o antes. “Negocio” o “placer” u “otro” Debe ser “Negocios” o “Placer” u “Otro”. Me gusta “??” Debe tener dos personajes. Me gusta “####” Debe tener cuatro números.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 🎯 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Activitat 1: Càlcul de Petjada d'Emmagatzematge per Fila i Dimensionament de Taules
En el disseny físic d'una base de dades per a un centre de distribució tecnològica, un tècnic novell ha definit tots els camps de text amb la mida per defecte de 255 caràcters i tots els valors numèrics com a nombres de coma flotant de doble precisió (Doble, 8 bytes).
Analitzeu l'impacte d'aquesta decisió sobre la taula `ARTICLES_INFORMATICA`, dissenyada amb les següents especificacions reals:
- `Codi_Article`: Text de 10 caràcters alfanumèrics (PK).
- `Nom_Article`: Text de 45 caràcters.
- `Familia`: Text de 20 caràcters.
- `Estoc_Unitats`: Enter que mai supera les 30.000 unitats (Enter curt, 2 bytes vs Doble, 8 bytes).
- `Estoc_Minim`: Enter (2 bytes vs Doble, 8 bytes).
- `Preu_Cost`: Moneda / Decimal precisió fixa (4 bytes vs Doble, 8 bytes).
- `Preu_Venda`: Moneda / Decimal precisió fixa (4 bytes vs Doble, 8 bytes).
- `Descatalogat`: Sí/No (Booleà, 1 bit / 1 byte físic vs Text de 255 caràcters).

La base de dades conté $N = 150.000\text{ articles}$.

1. **Càlcul de mida per registre sense optimitzar:** Si cada camp de text s'emmagatzema reservant l'espai màxim assignat o la capçalera de pàgina assigna per defecte la mida teòrica:
   - Text per defecte (4 camps $\times 255\text{ bytes} = 1.020\text{ bytes}$).
   - Nombres en doble precisió (4 camps $\times 8\text{ bytes} = 32\text{ bytes}$).
   - Descatalogat com a text (255 bytes).
   - Mida total per registre sense optimitzar: $S_{\text{brut}} = 1.020 + 32 + 255 = 1.307\text{ bytes}$.
   - Calculeu el volum total de la taula:
   $$V_{\text{brut}} = N \times S_{\text{brut}}$$
2. **Càlcul de mida per registre optimitzat:** Calculeu la mida exacta ajustant les propietats dels camps:
   - $S_{\text{opt}} = 10 + 45 + 20 + 2 + 2 + 4 + 4 + 1 = 88\text{ bytes}$.
   - Calculeu el volum total de la taula optimitzada:
   $$V_{\text{opt}} = N \times S_{\text{opt}}$$
3. **Anàlisi d'Eficiència en Memòria RAM i Disc:** Calculeu l'estalvi d'espai en megabytes ($1\text{ MB} = 1.024\text{ KB} = 1.048.576\text{ bytes}$) i justifiqueu per què reduir la mida de fila multiplica la velocitat de les consultes en augmentar el nombre de registres per pàgina de memòria cau (*Buffer Pool*).

#### Activitat 2: Enginyeria de Màscares d'Entrada per a Formats Específics
Dissenyeu les cadenes formals de màscara d'entrada per a SGBD (Access i LibreOffice Base) per als següents camps d'un sistema tècnic, utilitzant els caràcters de control estàndard (`0`: dígit obligatori, `9`: dígit opcional, `L`: lletra majúscula/minúscula obligatòria, `?`: lletra opcional, `>`: converteix a majúscules, `<`: converteix a minúscules, `\`: caràcter d'escapament):
1. **NIF/DNI espanyol:** 8 dígits obligatoris, guió separador literal i lletra final obligatòria convertida automàticament a majúscula.
2. **Número de telèfon mòbil nacional:** Format amb prefix opcional de país entre parèntesis `(+34)` seguit d'un espai, 3 dígits inicials, un guió i 6 dígits separats de dos en dos.
3. **Codi Postal d'Espanya:** Exactament 5 dígits obligatoris (restringint que no puguin ser lletres).
4. **Matrícula de vehicle (Format Europeu vigent):** 4 dígits obligatoris seguits d'un espai i 3 lletres en majúscula obligatòries.
5. **Adreça MAC de targeta de xarxa:** 12 caràcters hexadecimals agrupats de dos en dos separats per dos punts, forçats a majúscules.

#### Activitat 3: Formulació de Regles de Validació Complexes i Textos d'Error
En una taula de reparacions microinformàtiques anomenada `REPARACIONS_TALLER`, escriviu la sintaxi exacta de la **Regla de Validació** i el corresponent **Text de Validació** per als següents camps:
1. **Camp `Hores_Facturades`:** El valor ha de ser estrictament superior a 0 i no pot superar un màxim de 40 hores per a una mateixa actuació.
   - *Regla de validació:* `> 0 I <= 40`
   - *Text de validació d'error:* *"El nombre d'hores de feina ha d'estar comprés entre 0,5 i 40 hores."*
2. **Camp `Estat_Reparacio`:** Només s'admeten els valors: `'Pendent'`, `'Diagnòstic'`, `'Peces'`, `'Reparat'` o `'Entregat'`.
3. **Camp `Descompte_Percentual`:** El percentatge aplicat ha d'estar entre el 0% i el 25% (valors numèrics decimals entre `0` i `0.25`).
4. **Regla a nivell de registre (comparativa de dates):** La `Data_Lliurament` ha de ser igual o posterior a la `Data_Entrada` (`>= [Data_Entrada]`). Què passaria si intentàrem posar aquesta expressió a la regla de validació d'un sol camp en lloc de la regla de la taula completa?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Creació Guiada de Taules amb Tipus Ajustats i Màscares en LibreOffice Base / Access
1. Obriu el vostre programari de base de dades (LibreOffice Base o Microsoft Access).
2. Creeu una nova taula en **Vista Disseny** anomenada `CLIENTS_TALLER` amb els següents camps:
   - `id_client`: Autonumèric / Enter, Clau Primària.
   - `nif`: Text, Mida: 9, Requerit: Sí, Indexat: Sí (Sense duplicats), Màscara d'entrada: `00000000->L;;_`.
   - `nom`: Text, Mida: 35, Requerit: Sí.
   - `cognoms`: Text, Mida: 45, Requerit: Sí.
   - `telefon`: Text, Mida: 15, Màscara d'entrada: `\+34\ 000\ 000\ 000;;_`.
   - `data_registre`: Data/Hora, Valor per defecte: `=Data()` o `CURRENT_DATE`.
3. Creeu una segona taula anomenada `EQUIPS_CLIENT`:
   - `num_serie`: Text, Mida: 30, Clau Primària.
   - `id_client_fk`: Numèric (Enter llarg en Access o INTEGER en Base), Requerit: Sí.
   - `marca`: Text, Mida: 25.
   - `model`: Text, Mida: 35.
   - `cost_pressupost`: Moneda / Decimal(7,2), Regla de validació: `>= 0`.
4. Guardeu ambdues taules i passeu a la vista de full de dades per comprovar el comportament de les màscares en introduir un nou registre.

#### Repte 2: Configuració de la Finestra de Relacions i Integritat Referencial
1. Aneu al menú **Eines > Relacions** (LibreOffice Base) o pestanya **Eines de base de dades > Relacions** (Access).
2. Afegiu les dues taules creades: `CLIENTS_TALLER` i `EQUIPS_CLIENT`.
3. Arrossegueu el camp `id_client` (PK) de `CLIENTS_TALLER` damunt del camp `id_client_fk` (FK) de `EQUIPS_CLIENT`.
4. A la finestra emergent de configuració de relació:
   - Activeu la casella **Exigir integritat referencial**.
   - Activeu **Actualitzar en cascada els camps relacionats**.
   - Activeu **Eliminar en cascada els registres relacionats**.
5. Observeu com s'afegeixen els símbols `1` i `∞` (infinit) als dos extrems de la línia de relació, certificant que és una relació $1:N$ forçada per integritat referencial.

#### Repte 3: Bateria de Proves de Caixa Negra i Verificació de Restriccions
1. **Prova de Màscara d'Entrada:**
   - Intenteu escriure lletres en els primers 8 caràcters del camp NIF. Comproveu que el cursor no avança i impedeix l'escriptura.
   - Introduïu la lletra final en minúscula `a`. Comproveu que el sistema la converteix automàticament a `A`.
2. **Prova de Regla de Validació:**
   - En el camp `cost_pressupost`, introduïu el valor `-25`.
   - Premeu la tecla de tabulació per intentar canviar de camp.
   - Verifiqueu que apareix la finestra emergent amb el text de validació d'error personalitzat i s'impedeix guardar el registre.
3. **Prova d'Integritat Referencial:**
   - Inseriu un client amb `id_client = 1`.
   - Inseriu dos equips assignats al client 1.
   - Esborreu el client 1 de la taula `CLIENTS_TALLER`.
   - Aneu a la taula `EQUIPS_CLIENT` i comproveu com els dos equips han sigut eliminats automàticament pel mecanisme d'eliminació en cascada.

---

### 📋 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Dimensionament Físic i Tipus de Dades** | Calcula amb precisió matemàtica la mida de les taules i tria els tipus numèrics i de text més òptims per a reduir l'ús de memòria i disc. | Tria els tipus de dades adequats i calcula el volum de dades amb xicotetes desviacions en unitats o capçaleres. | Defineix tipus correctes per a cada camp però abusa de tipus per defecte (text de 255) sense optimitzar la mida. | Assigna tipus de dades incoherents (per exemple, text per a dates o dobles per a claus autonumèriques). |
| **Màscares d'Entrada i Regles de Validació** | Construeix màscares d'entrada complexes amb caràcters de control i regles de validació lògiques impecables amb missatges d'error clars. | Dissenya màscares i regles funcionals per a la majoria de patrons, amb xicotets detalls en caràcters opcionals o d'escapament. | Configura màscares senzilles però té dificultats amb la sintaxi booleana de les regles de validació. | Incapaç de crear una màscara d'entrada o escriure una expressió lògica de validació. |
| **Finestra de Relacions i Integritat Referencial** | Configura relacions 1:N a la interfície gràfica verificant el tipus de dades de la FK, activant la integritat referencial i demostrant la cascada. | Estableix relacions amb integritat referencial correctament amb ajuda mínima en la coincidència de tipus de camp. | Estableix la relació entre taules però comet l'errada de tipus discordant entre PK i FK (per exemple, autonumèric vs text). | No sap utilitzar la finestra de relacions ni activar les restriccions d'integritat referencial. |
