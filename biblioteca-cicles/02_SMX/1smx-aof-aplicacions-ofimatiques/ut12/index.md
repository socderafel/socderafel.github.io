---
layout: default
title: "UD12 — BDA. Base de Datos. MACROS · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD12 — BDA. Base de Datos. MACROS"
prev_url: "../ut11/ut1101.html"
prev_label: "⬅️ 11.1 Tema 6. INFORMES"
next_url: "../ut12/ut1201.html"
next_label: "12.1 Tema 7. MACROS ➡️"
---

# 📘 UD12 — BDA. Base de Datos. MACROS (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## ⚡ Automatització, Esdeveniments i Macros

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura d'Esdeveniments i Automatització mitjançant Macros</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Disparadors en temps d'execució, control de flux condicional, accions de navegació i arrencada amb AutoExec</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU12EvtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU12ActGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU12CndGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU12SecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ec4899" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#be185d" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Model d'Esdeveniments -->
    <rect x="20" y="20" width="190" height="255" rx="8" fill="url(#aofU12EvtGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">⚡ ESDEVENIMENTS (TRIGGERS)</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Disparadors d'Interfície</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Al fer clic (OnClick):</tspan></text>
    <text x="42" y="93" fill="#cbd5e1" font-size="8">- Botons de comandament</text>
    <text x="32" y="110" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Abans d'actualitzar (BeforeUpdate):</tspan></text>
    <text x="42" y="123" fill="#cbd5e1" font-size="8">- Validació abans de gravar</text>
    <text x="42" y="135" fill="#f87171" font-size="8">- Admet cancel·lació (Cancel = True)</text>
    <text x="32" y="152" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Al carregar (OnLoad):</tspan></text>
    <text x="42" y="165" fill="#cbd5e1" font-size="8">- Inicialització del formulari</text>
    <text x="32" y="182" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Al tancar (OnClose / Unload):</tspan></text>
    <text x="42" y="195" fill="#cbd5e1" font-size="8">- Confirmació de sortida</text>
    <rect x="35" y="210" width="160" height="26" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="115" y="227" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">Programació per Esdeveniments</text>
    <text x="115" y="258" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Fil d'Execució Reactiu</text>

    <!-- Bloc 2: Accions de Macro -->
    <rect x="230" y="20" width="190" height="255" rx="8" fill="url(#aofU12ActGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="325" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">🛠️ ACCIONS PRINCIPALS</text>
    <text x="325" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ordres Predefinides</text>
    <line x1="240" y1="63" x2="410" y2="63" stroke="#334155"/>
    <text x="242" y="80" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">ObrirFormulari / Informe:</tspan></text>
    <text x="252" y="93" fill="#cbd5e1" font-size="8">- Obre objectes en mode diàleg</text>
    <text x="242" y="110" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">ExecutarConsulta:</tspan></text>
    <text x="252" y="123" fill="#cbd5e1" font-size="8">- Llança consultes d'acció</text>
    <text x="242" y="140" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">AplicarFiltre (ApplyFilter):</tspan></text>
    <text x="252" y="153" fill="#cbd5e1" font-size="8">- Filtra dades en pantalla</text>
    <text x="242" y="170" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">QuadreDeMissatge (MsgBox):</tspan></text>
    <text x="252" y="183" fill="#cbd5e1" font-size="8">- Alertes i confirmacions</text>
    <rect x="245" y="205" width="160" height="32" rx="4" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="325" y="220" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">AnarARegistre (GoToRecord)</text>
    <text x="325" y="258" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Sense Escriure Codi</text>

    <!-- Bloc 3: Lògica Condicional -->
    <rect x="440" y="20" width="190" height="255" rx="8" fill="url(#aofU12CndGrad)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="535" y="42" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">🔀 CONTROL DE FLUX</text>
    <text x="535" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Blocs Condicionals</text>
    <line x1="450" y1="63" x2="620" y2="63" stroke="#334155"/>
    <text x="452" y="80" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Estructura Si...Llavors:</tspan></text>
    <text x="462" y="93" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">Si</tspan> [Preu] &lt;= 0 <tspan font-weight="bold">Llavors</tspan></text>
    <text x="462" y="105" fill="#f87171" font-size="8">  • QuadreDeMissatge "Preu invàlid"</text>
    <text x="462" y="117" fill="#f87171" font-size="8">  • Cancel·larEsdeveniment</text>
    <text x="452" y="134" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Sino (Else):</tspan></text>
    <text x="462" y="147" fill="#cbd5e1" font-size="8">- Camí alternatiu d'execució</text>
    <text x="452" y="164" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">AturarMacro (StopMacro):</tspan></text>
    <text x="462" y="177" fill="#cbd5e1" font-size="8">- Interromp la seqüència</text>
    <rect x="455" y="205" width="160" height="32" rx="4" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="535" y="220" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">Submacros Agrupades</text>
    <text x="535" y="258" fill="#fbbf24" font-size="8.5" text-anchor="middle" font-weight="bold">Bifurcació Lògica</text>

    <!-- Bloc 4: AutoExec i Seguretat -->
    <rect x="650" y="20" width="190" height="255" rx="8" fill="url(#aofU12SecGrad)" stroke="#f472b6" stroke-width="1.5"/>
    <text x="745" y="42" fill="#f472b6" font-size="10.5" font-weight="bold" text-anchor="middle">🔒 AUTOEXEC I SEGURETAT</text>
    <text x="745" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Arrencada de l'App</text>
    <line x1="660" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="662" y="80" fill="#f472b6" font-size="8.5">• <tspan font-weight="bold">Macro AutoExec:</tspan></text>
    <text x="672" y="93" fill="#cbd5e1" font-size="8">- S'executa en obrir el fitxer .accdb</text>
    <text x="672" y="105" fill="#34d399" font-size="8">  Obre el Panell de Control Principal</text>
    <text x="662" y="122" fill="#f472b6" font-size="8.5">• <tspan font-weight="bold">Centre de Confiança:</tspan></text>
    <text x="672" y="135" fill="#cbd5e1" font-size="8">- Ubicacions de confiança</text>
    <text x="672" y="147" fill="#cbd5e1" font-size="8">- Bloqueig per ciberseguretat</text>
    <text x="662" y="164" fill="#f472b6" font-size="8.5">• <tspan font-weight="bold">Mode Autònom:</tspan></text>
    <text x="672" y="177" fill="#cbd5e1" font-size="8">- Ocultació de cintes d'opcions</text>
    <rect x="665" y="205" width="160" height="32" rx="4" fill="#0f172a" stroke="#f472b6" stroke-width="1"/>
    <text x="745" y="220" fill="#f472b6" font-size="8" font-weight="bold" text-anchor="middle">Interfície d'Usuari Final</text>
    <text x="745" y="258" fill="#f472b6" font-size="8.5" text-anchor="middle" font-weight="bold">Desplegament Professional</text>
  </svg>
</div>

### 📋 Taula de Disparadors d'Esdeveniments, Accions de Macro i Equivalència en Codi

| Esdeveniment / Disparador | Moment d'Activació | Acció de Macro Típica | Objectiu Operatiu | Equivalència VBA |
| :--- | :--- | :--- | :--- | :--- |
| **Al fer clic (`OnClick`)** | L'usuari prem un botó amb el ratolí | `ObrirFormulari` / `ObrirInforme` | Navegar a un altre mòdul o obrir diàleg de cerca. | `DoCmd.OpenForm "NomForm"` |
| **Abans d'actualitzar (`BeforeUpdate`)** | Abans que el registre modificat es guarde al disc | `Si [Total] <= 0 Llavors Cancel·larEsdeveniment` | Impedeix gravar dades incoherents o negatives. | `Cancel = True` |
| **Al carregar (`OnLoad`)** | Quan el formulari s'ha creat a la memòria | `MaximitzarFinestra` / `AplicarFiltre` | Prepara la interfície amb les dimensions i filtres requerits. | `DoCmd.Maximize` |
| **Macro `AutoExec`** | A l'obertura del fitxer de base de dades | `ObrirFormulari "Menú Principal"` | Carrega l'aplicació corporativa i oculta eines de disseny. | Procediment `Sub Main()` |
| **Al canviar de registre (`OnCurrent`)** | En moure el cursor d'un registre a un altre | `Reconsultar (Requery)` | Actualitza subformularis o sincronitza totals en pantalla. | `Me.Requery` |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**12.1 Automatització amb Macros i Control d'Esdeveniments**](./ut1201.md)
- [**12.2 Desplegament de Formularis en Mode Independent**](./ut1202.md)

---

# 12.1 Automatització amb Macros i Control d'Esdeveniments

> **📺 Recursos Audiovisuals de Referència**
> - [**Creació de Macros Bàsiques en SGBD ↗️**](https://www.youtube.com/watch?v=2j3eNgV_t-Y): Dissenyador d'accions i catàleg d'ordres.
> - [**Macros Condicionals i Validació ↗️**](https://www.youtube.com/watch?v=XL4UCkKIWB8): Blocs `Si...Llavors` per a regles de negoci.
> - [**Panell de Control i Menú Principal ↗️**](https://www.youtube.com/watch?v=vRuR1OMhJG0): Creació de quadres de comandament corporatius.
> - [**Opcions d'Inici i Seguretat de Macros ↗️**](https://www.youtube.com/watch?v=JwuCGzR_rXg): Macro AutoExec i protecció contra contingut no segur.


---

Tema 7

M i c r o s o f t A C C E S S

M A C R O S

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

INDICE

Las Macros, aspectos generales

Introducción

Concepto

La macro especial Autoexec

Crear una Macro Ejecutar una macro, relacionar las macros con los eventos

Consideraciones previas

Los Eventos Acciones mas utilizadas en las macros

Abrir Tabla, Consulta, Formulario o Informe

Descripción

Argumentos

Buscar Registro

Descripción

Argumentos

Cerrar Ventana

Descripción

Argumentos

Cuadro De Mensaje

Descripción

Argumentos

Eco

Descripción

Argumentos

EjecutarComandoDeMenú EstablecerValor

Descripción

Argumentos IrARegistro

Descripción

Argumentos SalirDeAccess Bibliografía

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

1 Las Macros, aspectos generales

Introducción

Concepto Las Macros son un método sencillo para llevar a cabo una o varias tareas básicas como abrir y cerrar formularios, mostrar u ocultar barras de herramientas, ejecutar informes, etc. También sirven para crear métodos abreviados de teclado y para que se ejecuten tareas automáticamente cada vez que se inicie la base de datos.

La configuración por defecto de Access, nos impedirá ejecutar ciertas acciones de macro si la base de datos no se encuentra en una ubicación de confianza, para evitar acciones malintencionadas. Para ejecutar correctamente las macros de bases de datos que consideremos fiables, podemos añadir la ubicación en el Centro de confianza.

La macro especial Autoexec Si guardamos la Macro con el nombre de AutoExec, cada vez que se inicie la base de datos, se ejecutará automáticamente. Esto es debido a que Access al arrancar busca una macro con ese nombre, si la encuentra será el primer objeto que se ejecute antes de lanzar cualquier otro.

Crear una Macro Para definir una macro, indicaremos una acción o conjunto de acciones que automatizarán un proceso. Cuando ejecutemos una Macro, el proceso se realizará automáticamente sin necesidad, en principio, de interacción por nuestra parte. Por ejemplo, podríamos definir una Macro que abra un formulario cuando el usuario haga clic en un botón, o una Macro que abra una consulta para subir un diez por cien el precio de nuestros productos.

Crear una Macro es relativamente fácil, sólo tenemos que hacer clic el botón Macro de la pestaña Crear y se abrirá la ventana con la nueva macro, así como sus correspondientes Herramientas de macros, englobadas en la pestaña Diseño. La ventana principal consta de una lista desplegable permite elegir la Acción para la macro. En el panel de la izquierda encontraremos estas mismas acciones agrupadas por categorías según su tipo y con un útil buscador en la zona superior, de forma que sea más sencillo localizar la que se desee aplicar (Ver Ilustración 1).

Podemos añadir tantas acciones como queramos, ya que al elegir una opción en el desplegable aparecerá otro inmediatamente debajo del primero, y así consecutivamente. Simplemente deberemos tener presente que se ejecutarán en el orden en que se encuentren. Es una cuestión de lógica, se ejecuta de forma lineal, de forma que no tendría sentido tratar de Cerrar ventana si aún no la hemos abierto, por ejemplo.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Para cambiar el orden en el que se encuentren las acciones puedes arrastrarlas con el ratón hasta la posición correcta o bien utilizar los botones de la acción, que aparecerán al pasar el cursor sobre ella. Con ellos podrás subir o bajar un nivel la acción por cada pulsación.

Obviamente estos botones sólo están disponibles si hay más de una acción. La última sólo podrá ascender, la primera sólo podrá descender y si sólo hay una acción únicamente dispondrá del botón Eliminar situado a la derecha.

En función de la acción que seleccionemos aparecerá un panel con un aspecto u otro, en el que podremos especificar los detalles necesarios.

Por ejemplo, para la acción Abrir una tabla, necesitaríamos saber su nombre, en qué vista queremos que se muestre y si los datos se podrán modificar o no una vez abierta.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

No siempre será obligatorio rellenar todos los campos, únicamente los que indique que son Requeridos. El resto puede que tengan un valor por defecto (como en este caso Vista: Hoja de datos) o que simplemente sean opcionales. Cuando tengamos muchas acciones en una macro, es posible que interese ocultar los detalles para ver la lista de acciones una bajo otra. En ese caso, podremos expandir y contraer la información desde el botón de la esquina superior izquierda. Cuando se ocultan los detalles, la información relevante se muestra toda en una fila, como observamos en la siguiente imagen.

Otra forma de contraer y expandir es desde su correspondiente grupo en la pestaña Diseño.

Cuando la Macro está terminada, puede guardarse , ejecutarse y cerrarse. Más tarde podremos llamarla desde un control Botón, o ejecutarla directamente desde la ventana de la base de datos haciendo clic en Ejecutar o bien haciendo doble clic directamente sobre ella.

2 Ejecutar una macro, relacionar las macros con los eventos

Consideraciones previas Aunque aún no hayamos aprendido mucho sobre ellas, es importante que tengamos claro para qué sirven exactamente las macros y cuándo se ejecutan. Desde luego, siempre podemos abrir el diseño de la macro y pulsar el botón Ejecutar en la cinta de opciones, para ejecutarla de forma manual. También podríamos hacer doble clic sobre ella en el Panel de navegación. Pero estas no son las prácticas más utilizadas.

La mayoría de veces, las macros serán acciones que se ejecutan por detrás, sin la plena consciencia del usuario de la base de datos. El usuario que se encarga de actualizar el inventario o dar de alta pacientes no tiene por qué saber cómo se llaman las tablas y qué acciones concretas ejecuta cada macro. Normalmente, el usuario en realidad trabaja con formularios amigables, con botones y otros controles, que utiliza de forma intuitiva.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Somos nosotros, quienes creamos la base de datos, los encargados de asignar a cada control la macro conveniente. Por lo tanto, lo que debemos hacer es asignar una macro que programe qué acción se ejecutará al interactuar con un determinado control u objeto. Y para ello trabajaremos con sus Eventos

Los Eventos

Un evento es una acción que el usuario realiza, normalmente de forma activa. Por ejemplo hacer clic o doble clic sobre un botón, cambiar de un registro a otro en un formulario, modificar un determinado campo de un registro, cerrar la base de datos, etc. Deberemos reflexionar sobre en qué momento nos interesa que se ejecute la macro, para aprender a elegir qué evento y qué control la desencadenarán.

Para asociar la macro a un control: En la vista diseño de formulario, seleccionamos un control o el propio formulario.

Luego abrimos la Hoja de propiedades, si no está ya abierta, y nos situamos en la pestaña Eventos

Entre los posibles eventos, elegimos el que nos conviene que ejecute la macro. Al hacer clic en él aparecerán dos botones

 El primero nos permitirá desplegar la lista de macros que tengamos en la base de datos. Ahí es donde deberemos indicar qué macro ejecutar.  El segundo botón nos permite elegir el tipo de generador entre los generadores de macros, expresiones y código. No vamos a entrar en detalle en él.

En el ejemplo de la imagen hemos asignado al evento Al hacer clic en un Botón de comando na macro que se encarga de mostrar la nómina del empleado actual. De forma que si el usuario está viendo los registros de empleados en un formulario y pulsa el botón, se abrirá una ventana con el formulario que contiene los datos de su última nómina

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

3 Acciones mas utilizadas en las macros En este apartado veremos las acciones más utilizadas en las Macros. Siempre puedes recurrir a la ayuda de Access para obtener información sobre acciones que aquí no tratemos.

- Algunas de estas acciones no se muestran si no está pulsado el icono Mostrar todas las

acciones, en la pestaña Diseño.

Abrir Tabla, Consulta, Formulario o Informe

Descripción Esta acción abre una tabla, consulta, formulario o informe escogida entre las existentes en la base de datos.

Argumentos

Para el caso de abrir una consulta tenemos los siguientes argumentos

Debemos indicar

el nombre de la consulta a abrir,

la Vista en la que quieras que se abra (Hoja de Datos, Diseño, Vista Preliminar, TablaDinámica, GráficoDinámico),

Modo de datos de la consulta. Si seleccionamos Agregar, la consulta sólo permitirá añadir nuevos registros a los existentes y no se tendrá acceso a los datos ya almacenados. Seleccionando Modificar permites la edición total de los datos de la consulta. Seleccionando Sólo lectura se abrirá la consulta mostrando todos sus datos pero sin ser editables, no se podrán modificar.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Para el caso de abrir un formulario tenemos los siguientes argumentos

Destaca

En el argumento Vista especificaremos el modo en el que queremos que se abra el formulario: en vista Formulario, Diseño, Vista Preliminar, Hoja de Datos, TablaDinámica o GráficoDinámico.

En Nombre del filtro podremos indicar el nombre de una consulta que hayamos creado previamente. Al abrirse el formulario solamente mostrará los registros que contengan los resultados de la consulta indicada.

En el argumento Condición WHERE podemos introducir, mediante el generador de expresiones, o tecleándola directamente, una condición que determinará los registros que se muestren en el formulario. Un ejemplo sería [Alumnado]![Código Postal] = 46183, para que mostrase solamente aquellos registros de la tabla Alumnado cuyo campo código postal fuese igual a 46183.

En Modo de datos podrás seleccionar los mismos parámetros que en la acción anterior: Agregar, Modificar o Sólo lectura.

El argumento Modo de la ventana decidirá si la ventana del formulario se deberá abrir en modo Normal, Oculta, como Icono o como Diálogo. Si abres un formulario en modo Oculto no podrá ser visto por el usuario, pero sí referenciado desde otros lugares para extraer datos o modificarlos. El modo Diálogo permite que el formulario se posicione encima de los demás formulario abiertos y sea imposible operar con el resto de la aplicación hasta que no se haya cerrado (como pasa con todos los cuadros de diálogo).

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Para el caso de abrir un informe tenemos los siguientes argumentos

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Destaca: - Las Vistas que ofrece esta acción son: Imprimir, Diseño, Vista preliminar, Informe y Distribución.

Igual que con los formularios puedes establecer un Nombre de filtro basado en una consulta o una Condición WHERE a través del Generador de expresiones. - En Modo de la ventana tenemos los mismo modos que para los formularios: Normal, Oculta, Icono y Diálogo.

Para el caso de abrir una tabla tenemos los siguientes argumentos

Como Vista podrás elegir los valores Hoja de Datos, Diseño, Vista Preliminar, TablaDinámica o GráficoDinámico.

Selecciona una opción de Modo de datos entre Agregar, Modificar y Sólo lectura igual que en la acción AbrirConsulta.

Buscar Registro

Descripción Utilizaremos esta acción para buscar registros. Esta acción busca el primer registro que cumpla los criterios especificados. Puedes utilizar esta acción para avanzar en las búsquedas que realices.

Argumentos

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

En el argumento Buscar introduciremos el valor a buscar en forma de texto, número, fecha o expresión. Podemos elegir en qué lugar del campo debe coincidir el cadena introducida, puedes elegir entre Cualquier parte del campo, Hacer coincidir todo el campo o al Comienzo del campo.

También puedes diferenciar entre hacer Coincidir mayúsculas y minúsculas o no. Se supone que la Búsqueda se realiza cuando estamos visualizando un registro determinado, de aquí el porqué de las siguientes opciones. Esta acción se para en el primer registro que cumpla las condiciones, por lo que en el argumento Buscar en podremos decidir el sentido en la que Access recorrerá los registros, selecciona Arriba para empezar a buscar hacia atrás. Selecciona Abajo para buscar hacia adelante. En ambos casos la búsqueda parará al llegar al final (o principio) del conjunto de registros. Selecciona Todo para buscar hacia adelante hasta el final, y después desde el principio hasta el registro actual.

En el argumento Buscar con formato decidiremos si se tiene en cuenta el formato que tienen los datos entre los que buscamos o no. Por ejemplo, si buscamos la cadena 1.234 y hacemos que busque con formato seleccionando Sí, en los campos con formato Access intentará hacer coincidir el formato de la cadena introducida con el dato almacenado con formato, por lo tanto no encontraría un campo que almacenase un valor de 1234. Si seleccionamos No, deberemos escribir 1234 para encontrar un campo con formato que contenga el dato 1.234, porque Access comparará 1234 con el valor del campo sin formato.

La opción Sólo el campo activo buscará en todos los registros, pero solamente en el campo activo en ese momento sino buscará en todos los campos. El argumento Buscar primero fuerza a que la búsqueda se realice desde el primer registro en vez de buscar a partir del registro actual.

Cerrar Ventana

Descripción Con esta acción podrás cerrar cualquier objeto que se encuentre abierto.

Argumentos

Selecciona en Tipo de objeto: Tabla, Formulario, Consulta, Informe, etc. , y en Nombre del objeto escribe el nombre de éste. Puedes configurar si se guardará el objeto antes de cerrarlo seleccionando Sí o No. Con Preguntar dejarás que esto quede a decisión del usuario

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Cuadro De Mensaje

Descripción Con las Macros incluso podremos mostrar mensajes para interactuar con el usuario. Esto nos lo permitirá la acción CuadroDeMensaje.

Argumentos

Sus argumentos son muy sencillos, en Mensaje deberemos escribir el mensaje que queremos que aparezca en el cuadro de mensaje. Utiliza la combinación de teclas MAYÚS+INTRO para crear saltos de línea.

También puedes utilizar el símbolo @ para rellenar el mensaje por secciones (o párrafos). Si utilizas esta alternativa deberás introducir 3 secciones. Aunque podrías dejar alguna en blanco. En el mensaje que ves a continuación, el contenido del argumento Mensaje era: Se ha producido un error guardando el registro.@Se perderán todos los cambios.@. Como puedes ver la tercera sección se ha dejado en blanco deliberadamente y el resultado sería este

En Bip podremos decidir si junto al mensaje suena una alarma auditiva para alertar al usuario.

Selecciona el Tipo de mensaje eligiendo entre: Ninguno, Crítico, Aviso: !, Aviso: ? e Información.

También puedes modificar el Título del cuadro de mensaje y escribir lo que prefieras.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

Eco

Descripción Esta acción es muy útil para ocultar al usuario las operaciones que se están realizando con una Macro. Permite la activación o desactivación de la visualización de las acciones en pantalla. Si no está pulsado el icono Mostrar todas las acciones, en la pestaña Diseño, no podrás elegir esta acción.

Argumentos

Si quieres utilizarla es conveniente que la coloques al principio de la Macro para desactivar la visualización. Luego vuelve a utilizarla al final de la Macro para volverla a activar la visualización.

Activa o desactiva la visualización utilizando el argumento Eco activo. En Texto de la barra de estado podrás escribir un texto que se mostrará en la barra de estado mientras la Macro esté ejecutándose y el Eco se encuentre desactivado.

Las acciones DetenerMacro y DetenerTodasMacros activan el Eco automáticamente.

EjecutarComandoDeMenú Utiliza esta acción para lanzar comandos que puedas encontrar en cualquier barra de herramientas. Solo deberás seleccionar la acción que prefieras en el argumento Comando y se ejecutará.

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

EstablecerValor

Descripción Una acción muy útil que te permitirá modificar los valores de los campos. Si no está pulsado el icono Mostrar todas las acciones, en la pestaña Diseño, no podrás elegir esta acción.

Argumentos

En Elemento introduce el nombre del campo sobre el que quieras establecer un valor. Podrás acceder al generador de expresiones para ello.

En el argumento Expresión introduciremos el valor que queremos que tome el campo. Recuerda que si es una cadena de texto deberá ir entre comillas.

IrARegistro

Descripción Te permitirá saltar a un registro en particular dentro de un objeto.

Argumentos

Para ello sólo tienes que indicar el Tipo de objeto (Tabla, Informe, Formulario...) y su Nombre.

Luego en Registro indicaremos a qué registro queremos ir. Podemos elegir entre Primero, Último o Nuevo. También es posible seleccionar las opciones Anterior, Siguiente o Ir a. En estos últimos casos deberemos rellenar también el argumento Desplazamiento para indicar el número del registro al que queremos ir (para Ir a), o cuántos registros queremos que se desplace hacia atrás o hacia delante (para Anterior y Siguiente).

Aplicaciones Ofimáticas Base de Datos Tema 07. MS-Access. MACROS

SalirDeAccess Esta acción hace que Access se cierre.

Puedes elegir entre Guardar Todo, Preguntar o Salir directamente sin guardar los cambios.

4 Bibliografía

http://www.aulaclic.es/access-2010/t_14_1.htm

---

# 12.2 Desplegament de Formularis en Mode Independent i Ocultació d'Entorn

En solucions corporatives microinformàtiques per a usuaris finals, és habitual voler presentar l'aplicació de gestió (per exemple, el menú del Taller SAT) com si fos una aplicació d'escriptori nativa independent, ocultant la finestra mare de Microsoft Access o LibreOffice.

Per aconseguir aquest comportament avançat mitjançant crides a la API de Windows (Win32), s'utilitzen procediments vinculats als esdeveniments d'obertura (`Form_Open`) i descàrrega (`Form_Unload`):

```vba
' Declaració de crida a la llibreria d'interfície de Windows
Option Explicit

#If VBA7 Then
    Private Declare PtrSafe Function ShowWindow Lib "user32" (ByVal hwnd As LongPtr, ByVal nCmdShow As Long) As Long
#Else
    Private Declare Function ShowWindow Lib "user32" (ByVal hwnd As Long, ByVal nCmdShow As Long) As Long
#EndIf

Const SW_HIDE = 0
Const SW_MAXIMIZED = 3

' Esdeveniment al carregar el menú principal: oculta la finestra mare d'Access
Private Sub Form_Open(Cancel As Integer)
    Call ShowWindow(hWndAccessApp, SW_HIDE)
    DoCmd.OpenForm "MENU_PRINCIPAL", WindowMode:=acDialog
End Sub

' Esdeveniment al tancar el menú: restaura la finestra del sistema abans de sortir
Private Sub Form_Unload(Cancel As Integer)
    Call ShowWindow(hWndAccessApp, SW_MAXIMIZED)
End Sub
```

> **🔒 Nota de Seguretat:** Per mantenir la base de dades administrable, és imprescindible tindre sempre una drecera o combinació de tecles (com prémer la tecla `Shift` en arrencar) que impedisca l'execució automàtica de la macro `AutoExec`, permetent accedir a la vista de disseny de taules i consultes.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 🎯 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Activitat 1: Cicle de Vida dels Esdeveniments i Validació d'Integritat
En la captura de dades d'una reparació, el tècnic pot cometre errades greus (com no introduir el client o assignar un pressupost negatiu):
1. **Diferència Crítica: `BeforeUpdate` vs `AfterUpdate`:**
   - Expliqueu per què qualsevol validació de dades s'ha d'executar obligatòriament a l'esdeveniment **Abans d'actualitzar (*BeforeUpdate*)** i mai a **Després d'actualitzar (*AfterUpdate*)**.
   - Com s'utilitza l'argument `Cancel·larEsdeveniment` (*Cancel = True*) per a mantindre el cursor al camp erroni i impedir que el registre s'escriga al disc?
2. **Ordre Cronològic d'Esdeveniments:** Ordeneu cronològicament la seqüència d'esdeveniments que es disparen quan un usuari obri un formulari, fa clic en un quadre de text, escriu un número i tanca la finestra:
   - `Al carregar (OnLoad)`
   - `Al tancar (OnClose)`
   - `Al rebre l'enfocament (OnGotFocus)`
   - `Abans d'actualitzar (BeforeUpdate)`
   - `Després d'actualitzar (AfterUpdate)`
   - `Al fer clic (OnClick)`
3. **Esdeveniment `OnCurrent`:** Per què l'esdeveniment `Al canviar de registre` (*OnCurrent*) és el lloc idoni per habilitar o inhabilitar un botó d'impressió si la reparació encara no està finalitzada?

#### Activitat 2: Arquitectura de Seguretat i Ciberseguretat en Macros
Les macros i el codi incrustat han estat històricament un vector d'atac de programari maliciós (*malware*):
1. **Centre de Confiança (*Trust Center*):** Quina diferència hi ha entre:
   - *Deshabilitar totes les macros sense notificació.*
   - *Deshabilitar totes les macros amb notificació.*
   - *Habilitar totes les macros (no recomanat per motius de seguretat).*
2. **Ubicacions de Confiança:** Com es configura un directori de la xarxa corporativa (`C:\GestioTaller\` o recurs SMB) com a "Ubicació de confiança" per a permetre que les macros s'executin sense advertències de seguretat grogues?
3. **Protecció contra Bloqueig (*Lockout*):** Si configurem una macro que inhabilita totes les barres d'eines i tanca l'aplicació en prémer la tecla Escape, com pot un administrador recuperar l'accés complet de disseny prement la tecla `Shift` en obrir el fitxer?

#### Activitat 3: Control de Flux Condicional amb Macros
Dissenyeu en pseudocodi la seqüència lògica d'una macro anomenada `mcr_Finalitzar_Ordre`:
1. Comprova si el camp `Diagnòstic_Tecnic` és buit (`ÉsNul([Diagnòstic_Tecnic])`).
   - Si és buit: Mostra un missatge d'avís (`QuadreDeMissatge`), situa el cursor al camp (`AnarAControl`) i atura la macro (`AturarMacro`).
2. Comprova si el `Cost_Total` és igual a 0.
   - Si és igual a 0: Demana confirmació a l'usuari amb un diàleg: *"L'import és 0 €. Voleu tancar l'ordre com a intervenció en garantia?"*.
3. Si l'usuari accepta: Canvia l'estat a `'Tancat'` i obre l'informe d'entrega (`ObrirInforme "R_Albara_Garantia"`).

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Creació d'un Panell de Control i Macro d'Inici `AutoExec`
1. Creeu un formulari anomenat `F_Menu_Principal` amb disseny net:
   - Capçalera: Nom de l'empresa ("Servei Tècnic Informàtic - Gestió Global").
   - Cos del formulari: 4 botons grans d'ordre:
     - Botó 1: Obre el formulari `F_Clients_i_Equips`.
     - Botó 2: Obre el formulari `F_Nova_Ordre_Reparacio`.
     - Botó 3: Obre la vista prèvia de l'informe `R_Facturacio_Per_Tecnic`.
     - Botó 4: Surt de l'aplicació (`SortirDeAccess`).
2. Aneu a la pestanya **Crea > Macro**.
3. Afegiu l'acció:
   - Acció: `ObrirFormulari`
   - Nom del formulari: `F_Menu_Principal`
   - Mode de la finestra: `Normal` o `Diàleg`
4. Deseu la macro amb el nom exacte **`AutoExec`**.
5. Tanqueu la base de dades completament i torneu-la a obrir des de l'explorador de fitxers comprovant com el menú principal es carrega automàticament sense intervenció de l'usuari.

#### Repte 2: Macro Condicional de Validació de Dates
1. Obriu el formulari `F_Nova_Ordre_Reparacio` en Vista Disseny.
2. Seleccioneu el camp `data_entrada` i aneu a la pestanya **Esdeveniments** de la finestra de propietats.
3. A la propietat **Abans d'actualitzar**, feu clic al botó dels punts suspensius (...) i trieu **Generador de macros**.
4. Construïu el bloc condicional:
   ```text
   Si [data_entrada] > Data() Llavors
       QuadreDeMissatge
           Missatge: "La data d'entrada no pot ser posterior a la data d'avui!"
           Tipus: Advertència
           Títol: "Error de Data"
       Cancel·larEsdeveniment
   Fi Si
   ```
5. Deseu la macro incrustada i comproveu el comportament en introduir una data futura.

#### Repte 3: Script de Còpia de Seguretat Automàtica en PowerShell
Per a complir els procediments d'administració de sistemes de l'SMX, automatitzeu la còpia de seguretat periòdica del fitxer de base de dades del taller:
1. Creeu un script de PowerShell anomenat `backup_basedades.ps1`:
   ```powershell
   # Script de còpia de seguretat amb segell temporal
   $Origen = "C:\GestioTaller\taller_microinformatica.accdb"
   $DestiDir = "C:\Backups\BaseDades"
   $Data = Get-Date -Format "yyyyMMdd_HHmmss"
   $DestiFitxer = "$DestiDir\taller_backup_$Data.accdb"

   if (-not (Test-Path $DestiDir)) {
       New-Item -ItemType Directory -Path $DestiDir | Out-Null
   }

   # Verificació que el fitxer no estiga bloquejat per un usuari (.laccdb)
   $LockFile = "C:\GestioTaller\taller_microinformatica.laccdb"
   if (Test-Path $LockFile) {
       Write-Warning "La base de dades està oberta per un usuari. S'efectua còpia en calent."
   }

   Copy-Item -Path $Origen -Destination $DestiFitxer
   Write-Host "Còpia de seguretat completada amb èxit a: $DestiFitxer" -ForegroundColor Green
   ```
2. Executeu l'script i verifiqueu que la còpia amb marca de temps es genera al directori de seguretat.

---

### 📋 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Model d'Esdeveniments i Validació** | Domina la diferència entre `BeforeUpdate` i `AfterUpdate`, cancel·lant esdeveniments i protegint la integritat de la informació. | Configura esdeveniments de forma correcta per a la majoria d'accions amb xicotets dubtes en el flux de cancel·lació. | Entén que una macro s'activa amb un botó però no comprèn els esdeveniments de camp abans de gravar. | No distingeix entre un esdeveniment de ratolí i un esdeveniment de dades del motor. |
| **Macros Condicionals i AutoExec** | Construeix macros amb lògica Si...Llavors complexes, gestionant aturades, missatges informatius i arrencada corporativa amb AutoExec. | Implementa la macro AutoExec i condicions senzilles amb supervisió mínima en la sintaxi de paràmetres. | Crea la macro AutoExec bàsica per obrir un formulari però no sap implementar condicions lògiques. | Incapaç de crear una macro ni configurar l'inici automàtic de l'aplicació. |
| **Seguretat i Còpia de Seguretat de Dades** | Justifica les polítiques de ciberseguretat del Centre de Confiança i implementa procediments automatitzats de còpia de seguretat. | Configura ubicacions de confiança i executa procediments de suport amb èxit seguint la guia tècnica. | Coneix l'existència del Centre de Confiança però no sap com desbloquejar l'execució de macros de forma segura. | Ignora els riscos de ciberseguretat associats a les macros o com efectuar una còpia de seguretat. |

