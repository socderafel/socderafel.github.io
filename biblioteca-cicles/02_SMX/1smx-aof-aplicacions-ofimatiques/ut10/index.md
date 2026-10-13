---
layout: default
title: "UD10 — BDA. Base de Datos. FORMULARIS · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD10 — BDA. Base de Datos. FORMULARIS"
prev_url: "../ut09/ut0902.html"
prev_label: "⬅️ 9.2 RESUMEN CONSULTES"
next_url: "../ut10/ut1001.html"
next_label: "10.1 Tema 5. FORMULARIS ➡️"
---

# 📘 UD10 — BDA. Base de Datos. FORMULARIS (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 🖥️ Disseny d'Interfícies d'Usuari: Formularis i Subformularis

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura de Formularis: Seccions, Controls i Vinculació Mestre-Detall</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Estructuració visual, orígens de control, sincronització 1:N en subformularis i botons d'ordre operatius</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU10SecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU10CtrlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU10SubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#a855f7" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU10ActGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Seccions del Formulari -->
    <rect x="20" y="20" width="190" height="255" rx="8" fill="url(#aofU10SecGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">📑 SECCIONS ESTRUCTURALS</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Anatomia de Pantalla</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Capçalera de Formulari:</tspan></text>
    <text x="42" y="93" fill="#cbd5e1" font-size="8">- Títol, logotip de taller, data</text>
    <text x="42" y="105" fill="#cbd5e1" font-size="8">- Fixa a la part superior</text>
    <text x="32" y="122" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Secció Detall:</tspan></text>
    <text x="42" y="135" fill="#cbd5e1" font-size="8">- Camps del registre actual</text>
    <text x="42" y="147" fill="#cbd5e1" font-size="8">- Es refresca a cada navegació</text>
    <text x="32" y="164" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Peu de Formulari:</tspan></text>
    <text x="42" y="177" fill="#cbd5e1" font-size="8">- Botons de comandament globals</text>
    <text x="42" y="189" fill="#cbd5e1" font-size="8">- Totals acumulats de sessió</text>
    <rect x="35" y="202" width="160" height="35" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="115" y="217" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">Vistes: Formulari / Disseny</text>
    <text x="115" y="229" fill="#94a3b8" font-size="7.5" text-anchor="middle">Vista Presentació (Layout)</text>
    <text x="115" y="258" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Ergonomia Visual</text>

    <!-- Bloc 2: Tipus de Controls -->
    <rect x="230" y="20" width="190" height="255" rx="8" fill="url(#aofU10CtrlGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="325" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">🎛️ CONTROLS I ENLLAÇ</text>
    <text x="325" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Elements Interactius</text>
    <line x1="240" y1="63" x2="410" y2="63" stroke="#334155"/>
    <text x="242" y="80" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Quadre de Text (TextBox):</tspan></text>
    <text x="252" y="93" fill="#cbd5e1" font-size="8">- Enllaçat directament a la taula</text>
    <text x="242" y="110" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Etiqueta (Label):</tspan></text>
    <text x="252" y="123" fill="#cbd5e1" font-size="8">- Text estàtic no modificable</text>
    <text x="242" y="140" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Quadre Combinat (ComboBox):</tspan></text>
    <text x="252" y="153" fill="#cbd5e1" font-size="8">- Desplegable per a triar FK</text>
    <text x="252" y="165" fill="#34d399" font-size="8">  Ex: Llista de Tècnics disponibles</text>
    <text x="242" y="182" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Casella de Verificació (CheckBox):</tspan></text>
    <text x="252" y="195" fill="#cbd5e1" font-size="8">- Camps booleans (Sí/No)</text>
    <rect x="245" y="210" width="160" height="26" rx="4" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="325" y="227" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">Origen del Control (ControlSource)</text>
    <text x="325" y="258" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Entrada Validada</text>

    <!-- Bloc 3: Subformularis -->
    <rect x="440" y="20" width="190" height="255" rx="8" fill="url(#aofU10SubGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="535" y="42" fill="#c084fc" font-size="10.5" font-weight="bold" text-anchor="middle">📦 SUBFORMULARIS 1:N</text>
    <text x="535" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Mestre - Detall</text>
    <line x1="450" y1="63" x2="620" y2="63" stroke="#334155"/>
    <text x="452" y="80" fill="#c084fc" font-size="8.5">• <tspan font-weight="bold">Arquitectura Mestre-Detall:</tspan></text>
    <text x="462" y="93" fill="#cbd5e1" font-size="8">- Formulari pare: <tspan fill="#38bdf8" font-weight="bold">CLIENTS (1)</tspan></text>
    <text x="462" y="105" fill="#cbd5e1" font-size="8">- Subformulari: <tspan fill="#c084fc" font-weight="bold">EQUIPS (N)</tspan></text>
    <text x="452" y="122" fill="#c084fc" font-size="8.5">• <tspan font-weight="bold">Propietats de Sincronització:</tspan></text>
    <text x="462" y="135" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">LinkMasterFields:</tspan> id_client</text>
    <text x="462" y="147" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">LinkChildFields:</tspan> id_client_fk</text>
    <text x="452" y="164" fill="#c084fc" font-size="8.5">• <tspan font-weight="bold">Comportament Dinàmic:</tspan></text>
    <text x="462" y="177" fill="#cbd5e1" font-size="8">- En avançar de client,</text>
    <text x="462" y="189" fill="#cbd5e1" font-size="8">  els equips es filtren a l'instant.</text>
    <rect x="455" y="205" width="160" height="35" rx="4" fill="#0f172a" stroke="#c084fc" stroke-width="1"/>
    <text x="535" y="220" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">Format Full de Dades</text>
    <text x="535" y="232" fill="#cbd5e1" font-size="7.5" text-anchor="middle">o Formularis Continús</text>
    <text x="535" y="258" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Sincronització Automàtica</text>

    <!-- Bloc 4: Botons i Automatització -->
    <rect x="650" y="20" width="190" height="255" rx="8" fill="url(#aofU10ActGrad)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="745" y="42" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">🔘 BOTONS I NAVEGACIÓ</text>
    <text x="745" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Assistents i Macros</text>
    <line x1="660" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="662" y="80" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Navegació de Registres:</tspan></text>
    <text x="672" y="93" fill="#cbd5e1" font-size="8">- Primer | Anterior | Següent | Últim</text>
    <text x="672" y="105" fill="#cbd5e1" font-size="8">- Cercar registre</text>
    <text x="662" y="122" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Operacions amb Registres:</tspan></text>
    <text x="672" y="135" fill="#cbd5e1" font-size="8">- Afegir nou registre (*)</text>
    <text x="672" y="147" fill="#cbd5e1" font-size="8">- Guardar registre</text>
    <text x="672" y="159" fill="#f87171" font-size="8">- Eliminar registre</text>
    <text x="662" y="176" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Operacions de Formulari:</tspan></text>
    <text x="672" y="189" fill="#cbd5e1" font-size="8">- Imprimir formulari o informe</text>
    <text x="672" y="201" fill="#cbd5e1" font-size="8">- Tancar formulari</text>
    <rect x="665" y="215" width="160" height="22" rx="4" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="745" y="230" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">Ordre de Tabulació (TabIndex)</text>
    <text x="745" y="258" fill="#fbbf24" font-size="8.5" text-anchor="middle" font-weight="bold">Flux de Treball Fluid</text>
  </svg>
</div>

### 📋 Classificació de Controls i Propietats en Formularis SGBD

| Tipus de Control | Origen de les Dades | Propietat Clau | Funció Tècnica | Exemple en Taller Microinformàtic |
| :--- | :--- | :--- | :--- | :--- |
| **Quadre de Text Enllaçat** | Camp de taula o consulta | `ControlSource = "nom"` | Lligam bidireccional; les edicions es guarden al disc. | Edició del número de sèrie de l'equip o DNI del client. |
| **Quadre de Text Calculat** | Expressió formulada | `ControlSource = "=[Hores]*[Preu]"` | Càlcul automàtic en memòria que s'actualitza en temps real. | Totalitzador del cost de mà d'obra i recanvis. |
| **Quadre Combinat (ComboBox)** | Consulta o taula externa | `RowSource = "SELECT id, nom FROM TECNICS"` | Facilita la tria de claus foranes mostrant text comprensible. | Assignar el tècnic responsable sense recordar el seu ID numèric. |
| **Subformulari Mestre-Detall** | Taula filla o consulta 1:N | `LinkMasterFields` / `LinkChildFields` | Incrusta una llista interactiva vinculada al registre pare actual. | Llista de peces o actuacions vinculades a una ordre de reparació. |
| **Botó de Comandament** | Esdeveniment / Macro | `OnClick = [Macro d'Acció]` | Executa ordres automatitzades guiades per l'assistent. | Botó per imprimir l'albarà o tancar la fitxa tècnica. |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**10.1 Disseny de Formularis i Controls Interactius**](./ut1001.md)

---

# 10.1 Disseny de Formularis i Controls Interactius

> **📺 Recursos Audiovisuals de Referència**
> - [**Creació de Formularis i Assistent Guiat ↗️**](https://www.youtube.com/watch?v=MB48IM9f9mI): Disseny ràpid de formularis monoregistre i tabulars.
> - [**Gestió de Controls i Propietats en Formularis ↗️**](https://www.youtube.com/watch?v=YeNYibwUZzo): Ajust de quadres de text, etiquetes i desplegables.


---

Tema 5

M i c r o s o f t A C C E S S

F O R M U L A R I O S

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Índice

#### CAPÍTULO 9: LOS FORMULARIOS

CREAR FORMULARIOS

EL ASISTENTE PARA FORMULARIOS

EDITAR DATOS DE UN FORMULARIO

LA VISTA DISEÑO DE FORMULARIO

LA PESTAÑA DISEÑO DE FORMULARIO

TEMAS

EL GRUPO CONTROLES

SUBFORMULARIOS

TRABAJAR CON CONTROLES

ORGANIZAR Y AJUSTAR CONTROLES

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Capítulo 9: Los formularios

Los formularios sirven para definir pantallas generalmente para editar los registros de una tabla o consulta.

En esta unidad veremos cómo crear un formulario, manejarlo para la edición de registros y cambiar su diseño.

Crear formularios

Para crear un formulario tenemos varias opciones. Podemos acceder a todas ellas desde la pestaña Crear

 Formulario consiste en crear automáticamente un nuevo formulario que contiene todos los datos de la tabla, consulta o informe seleccionado en el Panel de Navegación.

 Diseño del formulario abre un formulario en blanco en la Vista Diseño y tenemos que ir incorporando los distintos objetos que queremos aparezcan en él. Este método no se suele utilizar ya que en la mayoría de los casos es más cómodo y rápido crear un autoformulario o utilizar el asistente y después sobre el formulario creado modificar el diseño para ajustar el formulario a nuestras necesidades. En esta unidad veremos más adelante cómo modificar el diseño de un formulario.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

 Formulario en blanco consiste en crear un nuevo formulario sin contenido, pero en vez de abrirse en Vista Diseño como la anterior opción, se abrirá en Vista Presentación. Esta vista ofrece ventajas, como poder incorporar datos simplemente arrastrando el objeto (consulta, informe, tabla...) desde el Panel de Navegación.

 Asistente para formularios utiliza un asistente que nos va guiando paso por paso en la creación del formulario.

 Navegación te permite crear un formulario dedicado a la navegación, que simula la estructura típica de menús de una página web. Podrás elegir entre seis diseños distintos.

 Más formularios despliega un menú con otros tipos de formularios disponibles, como gráfico dinámico, tabla dinámica, hoja de datos o el formulario dividido.

El asistente para formularios

Esta es la modalidad más sencilla y dirigida de creación de formularios.

El asistente se inicia desde la pestaña Crear > grupo Formularios > botón Asistente para formulario. Esta es la primera ventana

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

En ella elegimos en qué tabla o consulta se basará el formulario y los campos que queremos incluir en él.

Para elegir el origen (tabla o consulta), lo seleccionamos del desplegable superior. Si queremos sacar datos de más de una tabla lo mejor es crear una consulta previamente que convine los datos y luego crear el formulario sobre ella.

A continuación seleccionamos los campos a incluir en el formulario haciendo clic sobre el campo y pulsando el botón o simplemente haciendo doble clic sobre el campo.

Si nos hemos equivocado de campo pulsamos el botón y el campo se quita de la lista de campos seleccionados.

Podemos seleccionar todos los campos a la vez haciendo clic sobre el botón o deseleccionar todos los campos a la vez haciendo clic sobre el botón .

Una vez seleccionada la distribución que nos interesa pulsamos el botón Siguiente y aparece la siguiente pantalla

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

En esta pantalla elegimos la distribución de los datos dentro del formulario. Al seleccionar una opción de formato aparecerá a su izquierda el aspecto que tendrá el formulario con esa distribución. A continuación pulsamos el botón Siguiente> y aparece la ventana que puedes ver a continuación...

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

En esta ventana el asistente nos pregunta el título del formulario, este título también será el nombre asignado al formulario.

En anteriores versiones disponíamos de un paso previo que nos permitía incorporar cierto estilo utilizando las distintas opciones de diseño disponibles. En Office 2010 se opta por eliminar este aspecto estético en la propia creación del formulario. Será más adelante cuando lo manipularemos para incorporar estilos, utilizando los temas disponibles.

Antes de pulsar el botón Finalizar podremos elegir entre

 Abrir el formulario para ver o introducir información en este caso veremos el resultado del formulario preparado para la edición de registros.

 o bien, Modificar el diseño del formulario, si seleccionamos esta opción aparecerá la vista Diseño de formulario donde podremos modificar el aspecto del formulario.

Editar datos de un formulario

Para editar datos de una tabla utilizando un formulario, debemos abrirlo haciendo doble clic en él, desde el Panel de navegación. También lo puedes abrir con el botón derecho del ratón, Seleccionando en el menú contextual.

El formulario que has creado mostrará sus datos en la Vista Formulario.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Podemos a continuación buscar datos, reemplazar valores, modificarlos como si estuviéramos en la vista Hoja de datos de una tabla, desplazarnos a lo largo de la tabla utilizando la barra de desplazamiento por los registros que ya conocemos, lo único que cambia es el aspecto de la pantalla.

La Vista Diseño de formulario

La vista diseño es la que nos permite definir el formulario, en ella le indicamos a Access cómo debe presentar los datos del origen del formulario, para ello nos servimos de los controles que veremos más adelante.

Para entrar en la vista diseño debemos buscar el formulario en el Panel de Navegación y hacer clic derecho sobre él para seleccionar la opción en el menú contextual. O bien abrirlo y luego cambiar la vista desde el botón que ya conocemos de la pestaña Inicio.

Nos aparece la ventana Diseño de formulario

El área de diseño consta de tres secciones

 La sección Encabezado de formulario, en ella ponemos lo que queremos que aparezca al principio del formulario.

 La sección Detalle, en ella aparecerán los registros del origen del formulario, o varios registros o uno

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

sólo por pantalla según el tipo de formulario. Aunque se visualicen varios registros en una pantalla, debemos indicar en la sección Detalle el diseño correspondiente a un sólo registro.

 La sección Pie de formulario, en ella ponemos lo que queremos aparezca al final del formulario.

Podemos mostrar u ocultar el encabezado o el pie desde la opción Encabezado o Pie del formulario del menú contextual de los mismos.

Alrededor del área de diseño tenemos unas reglas que nos permiten medir las distancias y los controles, también disponemos de una cuadrícula que nos ayuda a colocar los controles dentro del área de diseño.

Para ver u ocultar las reglas o la cuadrícula tenemos las opciones Regla y Cuadrícula respectivamente, que también puedes ver en la imagen anterior del menú contextual del formulario.

La pestaña Diseño de formulario

En este apartado veremos las opciones más interesantes de la pestaña de Diseño que aparece cuando entramos en la Vista Diseño del formulario.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

 El primer botón que vemos está localizado en el grupo Vistas, y nos permite pasar de una vista a otra. Lo utilizaremos mucho.

Si lo desplegamos podemos elegir entre Vista Diseño (la que estamos describiendo ahora) y laVista Formulario que nos presenta los datos del origen del formulario tal como lo tenemos definido en la vista diseño.

Además disponemos de la Vista Presentación que nos permite trabajar casi del mismo modo en que lo hacemos con la Vista Diseño pero con las ventajas de la Vista Formulario, pues nos muestra a tiempo real los datos del formulario para que nos hagamos una idea aproximada de cómo será su aspecto final.

También podremos acceder a las vistas Tabla dinámica, Hoja de datos y Gráfico dinámico, que ya hemos comentado.

 En el grupo Temas encontrarás herramientas para dar un estilo homogéneo al formulario. Lo veremos más adelante.

 En la parte central puedes ver el grupo Controles en el que aparecen todos los tipos de controles para que sea más cómodo añadirlos en el área de diseño como veremos más adelante. También encontramos algunos elementos que podemos incluir en el encabezado y pie de página.

 En el grupo Herramientas podrás encontrar el botón Agregar campos existentes entre otros, que hace aparecer y desaparecer el cuadro Lista de campos en el que aparecen todos los campos del origen de datos para que sea más cómodo añadirlos en el área de diseño como veremos más adelante.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Todo formulario tiene asociada una página de código en la que podemos programar ciertas acciones utilizando el lenguaje VBA (Visual Basic para Aplicaciones), se accede a esta página de código haciendo clic sobre el botón

Temas

Un tema es un conjunto de formatos que conforman el estilo general que presenta un formulario. Engloba los colores, la fuente y los distintos efectos que utilizará por defecto. Si cambias el tema, no lo cambiarás únicamente al formulario en cuestión, sino a todos ellos. Ésto no implica que no se pueda personalizar alguno de sus elementos de forma independiente, de hecho podemos hacerlo con las herramientas de la pestaña Formato.

Para cambiar el tema nos situaremos en la pestaña Diseño de lasHerramientas de diseño de formulario, en el grupo Temas.

Desde el botón Temas, podremos seleccionar de una amplia lista el que más nos guste.

En anteriores versiones no existían los temas, sino que en el momento de la creación del formulario se utilizaban unas plantillas con un estilo determinado. El concepto es similar, con la ventaja de que los temas son más flexibles.

Si habilitamos las actualizaciones de contenido de Office.com, Access se conectará con la página web de Microsoft para adquirir más temas cuando éstos estén disponibles.

Podemos crear nuestro propio tema. Si establecemos los estilos con los colores de nuestra empresa, por ejemplo, podemos pulsar Guardar tema actual... para conservarlo y utilizarlo en otros formularios. Para recuperar un tema personalizado y aplicarlo a nuestro libro, haremos clic en Buscar temas... y lo buscaremos entre las carpetas de nuestro equipo, allá donde lo hayamos guardado.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Si hay un tema que se aproxima a lo que buscas, pero no es exactamente lo que desearías, puedes cambiar alguno de sus aspectos mediante los botones Colores y Fuentes.

El grupo Controles

Para definir qué información debe aparecer en el formulario y con qué formato, se utilizan lo que llamamos controles. Un control no es más que un objeto que muestra datos, realiza acciones o se utiliza como decoración. Por ejemplo, podemos utilizar un cuadro de texto para mostrar datos, un botón de comando para abrir otro formulario o informe, o una línea o un rectángulo para separar y agrupar controles con el fin de hacerlos más legibles.

En el grupo Controles de la pestaña Diseño tenemos un botón por cada tipo de controles que se pueden añadir al formulario. Puedes verlos todos pulsando la flecha inferior derecha del recuadro que los contiene

Cuando queremos crear varios controles del mismo tipo podemos bloquear el control haciendo clic con el botón secundario del ratón sobre él. En el menú contextual elegiremos Colocar varios controles.

A partir de ese momento se podrán crear todos los controles que queramos de este tipo sin necesidad de hacer clic sobre el botón correspondiente cada vez. Para quitar el bloqueo hacemos clic sobre el botón o volvemos a seleccionar la opción del menú contextual para desactivarla.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

El botón activará o desactivará la Ayuda a los controles. Si lo tenemos activado (como en la imagen) al crear determinados controles se abrirá un asistente para guiarnos.

Tipos de controles

Icono Control Descripción

Seleccionar Vuelve a dar al cursor la funcionalidad de selección, anulando cualquier otro control que hubiese seleccionado.

Cuadro de texto Se utiliza principalmente para presentar un dato almacenado en un campo del origen del formulario. Puede ser de dos tipos: dependiente o independiente.

El cuadro de texto dependiente depende de los datos de un campo y si modificamos el contenido del cuadro en la vista Formulario estaremos cambiando el dato en el origen. Su propiedadOrigen del control suele ser el nombre del campo a la que está asociado. - El cuadro de texto independiente permite por ejemplo presentar los resultados de un cálculo o aceptar la entrada de datos. Modificar el dato de este campo no modifica su tabla origen. Su propiedad Origen del control será la fórmula que calculará el valor a mostrar, que siempre irá precedida por el signo =.

Etiqueta Sirve para visualizar un texto literal, que escribiremos directamente en el control o en su propiedadTítulo.

Botón Al pulsarlo se ejecutará la acción que se le indique,tanto acciones personalizadas como acciones predefinidas de entre las más de 30 disponibles en su asistente.

Control depestaña Permite organizar la información a mostrar enpestañas distintas.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Hipervínculo Para incluir un enlace a una página web, un correo electrónico o un programa.

Control de explorador web Permite incrustar una página web en el formulario, indicando su dirección.

Control de navegación Inserta en el formulario un objeto que facilita la navegación por él. Tiene el mismo efecto que crear directamente un formulario de tipo Navegación.

Grupo de opciones Permite delimitar una serie de opciones disponiblesque guardan una relación entre sí. Por ejemplo el grupo Género que podría englobar las opciones Hombre y Mujer. Se recomienda utilizarlo cuando no haya muchas opciones. Si son más es preferible ahorrar espacio con cuadros de lista o combinados.

Se definen sus opciones mediante un asistente.

Insertar salto de línea No tiene efecto en la Vista Formulario pero sí en la Vista Preliminar y a la hora de imprimir.

Cuadro combinado Es una lista de posibilidades entre las que el usuario puede escoger si la despliega. Se definen sus opciones mediante un asistente.

Gráfico Representación gráfica de datos que ayuda a su interpretación de forma visual.

Línea Permite dibujar líneas en el formulario, para ayudar a organizar la información.

Botón de alternar Se suele utilizar para añadir una nueva opción a un grupo de opciones ya creado. También se puede utilizar para presentar un campo de tipo Sí/No, si el campo contiene el valor Sí, el botón aparecerá presionado.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Cuadro de lista A diferencia del cuadro combinado, la lista de valores aparece desplegada en todo momento. Esto favorece la posibilidad de seleccionar más de una opción a la vez. Al igual que los cuadros combinados un cuadro de lista puede tener una o más columnas, que pueden aparecer con o sin encabezados. Se define mediante un asistente.

Rectángulo Permite dibujar rectángulos en el formulario, paraayudar a organizar la información.

Casilla de verificación Se suele utilizar para añadir una nueva opción a un grupo de opciones ya creado, o para presentar un campo de tipo Sí/No. Si el campo contiene el valor Sí, la casilla tendrá este aspecto , sino este otro .

Marco de objeto independiente Para insertar archivos como un documento Word, una hoja de cálculo, etc. No varian cuando cambiamos de registro (independientes), y no están en ninguna tabla de la base.

Datos adjuntos Esta es la forma más moderna y óptima de incluir archivos en un formulario. Equivale a los marcos de objeto, solo que Datos adjuntos está disponible para las nuevas bases hechas en Access 2007 o versiones superiores (.accdb) y los marcos pertenecen a las versiones anteriores (.mdb).

Botón de opción Se suele utilizar para añadir una nueva opción a un grupo de opciones ya creado, o para presentar un campo de tipo Sí/No. Si el campo contiene el valor Sí, el botón tendrá este aspecto , sino, este otro .

Subformulario/ Subinforme Para incluir un subformulario o subinforme dentro del formulario. Un asistente te permitirá elegirlo. En versiones anteriores un formulario no podía incluir un subinforme, en este aspecto se ha mejorado.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Marco de objeto dependiente Para insertar archivos como un documento Word, una hoja de cálculo, etc. Varian cuando cambiamos de registro (dependientes), porque se encuentran en una tabla de la base. Ejemplos: La foto o el currículum de una persona, las ventas de un empleado, etc.

Imagen Permite insertar imágenes en el formulario, que no dependerán de ningún registro. Por ejemplo, el logo de la empresa en la zona superior.

Por último podemos añadir más controles, controles más complejos con el botón

Subformularios

Como hemos visto, existe un control para insertar un subformulario dentro del formulario principal . Una combinación formulario/subformulario se llama a menudo formulario jerárquico, formulario principal/detalle o formulario principal/secundario.

Los subformularios son muy eficaces cuando se desea mostrar datos de tablas o consultas con una relación uno a varios. Por ejemplo, podemos crear un formulario para mostrar los datos de la tabla Cursos con un subformulario para mostrar los alumnos matriculados en cada curso.

El formulario principal y subformulario de este tipo de formularios están vinculados para que el subformulario presente sólo los registros que están relacionados con el registro actual del formulario principal (que el subformulario presente sólo los alumnos matriculados en el curso activo).

Trabajar con controles

Seleccionar controles Para seleccionar un control basta hacer clic sobre él. Cuando un control está seleccionado aparece rodeado de cuadrados que llamaremos controladores de movimiento (los más grandes) y controladores de tamaño (los más pequeños) como vemos en la siguiente imagen

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

A veces puede resultar un poco complicado seleccionar controles porque, o bien son demasiado pequeños o finos (como en el caso de las líneas), o porque se encuentran solapados. En estos casos es muy útil utilizar la lista desplegable de selección de controlesque se encuentra en la parte superior de la Hoja de Propiedades que puedes mostrar haciendo clic en el botón Hoja de Propiedades en la pestaña Diseño.

Seleccionar un control de esta forma es muy sencillo, solo tienes que desplegar la lista y seleccionar el control que te interesa.

Para seleccionar varios controles, mantener pulsada la tecla CTRL y hacer clic en cada uno de los controles a seleccionar sobre el formulario.

Si queremos seleccionar varios controles contiguos hay una forma más rápida: pulsar el botón izquierdo del ratón sobre el fondo del área de diseño y sin soltarlo arrastrarlo, vemos que aparece dibujado en el área de diseño un cuadrado, cuando soltemos el botón del ratón, todos los controles que entren en ese cuadrado quedarán seleccionados (no hace falta que el control se encuentre completamente dentro del cuadrado).

Añadir controles Para añadir al formulario un nuevo campo del origen, deberás abrir la Lista de campos haciendo clic en el botón Agregar campos existentes en la pestaña Diseño.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

En esta ventana aparecen todos los campos del origen del formulario. A continuación hacer clic sobre el campo a añadir y sin soltar el botón del ratón arrastrar el campo en el área del formulario hasta el lugar donde queremos que aparezca el campo. Access creará automáticamente una etiqueta con el nombre del campo, y un cuadro de texto asociado al campo.

También podremos añadir campos de otras tablas distintas a la de origen.

Si queremos añadir otro tipo de control, como por ejemplo una imagen, utiliza la sección Controles y campos que hemos visto en el apartado anterior, lo encontrarás en la pestaña Diseño. Haz clic sobre el tipo de control que queremos añadir, verás que el cursor ha tomado otra forma, ahora nos posicionamos en el área del formulario donde queremos definir el control, apretamos el botón izquierdo del ratón y manteniéndolo apretado arrastramos el ratón hasta dejar el control del tamaño deseado.

Copiar controles

Copiar controles es muy rápido y útil si deseas introducir varios contorles de un mismo tipo. Sólo tienes que seleccionar el control a duplicar y hacer clic en el botón Copiar de la pestaña Inicio (también puedes utilizar la combinación de teclas Ctrl+C). Luegopégalos en el formulario utilizando el botón Pegar de la pesaña Inicio o la combinación de teclas Ctrl+V.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Este método te ayudará a crear rápidamente varios controles de un mismo tipo. Es especialmente útil si ya le has dado un tamaño personalizado al control y quieres que el resto sean idénticos.

Ten en cuenta que cuando un control es duplicado, su copia aparece con un nombre diferente. Puedes modificar este nombre desde sus Propiedades, si tienes abierto el panel o desde su menú contextual.

Mover un control Para mover un control de sitio, haz clic sobre él para seleccionarlo y arrástralo. Deberás hacerlo cuando el cursor tenga la siguiente forma: . De esa forma moverás tanto el propio control como su etiqueta asociada. Si lo que quieres hacer es mover únicamente un elemento (bien la etiqueta, bien el control que representa el dato) deberás hacer lo mismo pero situándote justo sobre el cuadro gris de la esquina superior izquierda.Así, lo moverás de forma independiente.

Para mover varios controles a la vez, seleccionarlos y mover uno de ellos: se moverán todos.

Cambiar el tamaño de los controles. Para cambiar el tamaño de un control hay que seleccionarlo para que aparezcan los controladores de tamaño. A continuación mover el ratón encima de uno de los controladores de tamaño, cuando el puntero toma la forma de una flecha doble pulsar el botón izquierdo del ratón y sin soltarlo arrastrarlo hasta que el control tome el tamaño deseado.

Para cambiar el tamaño de varios controles a la vez, seleccionarlos y cambiar el tamaño de uno de ellos, se cambiarán todos.

Organizar y ajustar controles

Hemos visto cómo cambiar el tamaño y mover los controles de forma manual, pero existen otras formas de hacerlo.

Vamos a ver las opciones disponibles en la pestaña Organizar.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

Elegir la distribución de los datos

Desde el grupo Tabla, podemos elegir si queremos que el formulario organice sus controles de forma apilada o tabular. Para poder utilizar los botones, deberás seleccionar previamente los controles a los que quieras aplicar la distribución. Normalmente serán todos ellos.

 Apilado coloca un campo bajo el otro, con la etiqueta a la izquierda y el dato a la derecha. Por lo tanto, cada registro estará en una página independiente y tendremos que ir utilizando los botones para ir atrás y adelante en los registros.

 Tabular, en cambio, coloca las etiquetas en la zona superior y bajo ella todos los campos organizados por columnas, de forma que cada fila es un registro distinto.

Al utilizar estas distribuciones, los controles quedan bloqueados. No podrás moverlos a placer o cambiar su tamaño de forma individualizada. Estas restricciones nos aseguran que no romperemos el esquema perfectamente alineado que Access crea. Si quieres ser libre de modificarlo, deberás pulsar el botón Quitar diseño.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

 Para alinear varios controles, podemos moverlos uno a uno guiándonos por la cuadrícula, pero tenemos una opción que nos permite realizar de forma más cómoda esta tarea

Seleccionamos los controles a alinear y, en el grupo Tamaño y orden, pulsamos sobre Alinear. Se desplegará un menú con distintas opciones

 A la cuadrícula alineará los controles seleccionados en el formulario guiándose por la cuadrícula. Es decir, podremos alinear un único control o varios a la vez.

Izquierda, derecha, arriba y abajo, alineará los controles de forma relativa. Es decir, si seleccionamos por ejemplo dos controles situados a distinta altura y pulsamos Arriba, ambos se situarán a la misma altura que el más alto de ellos. Por ello, no se pueden utilizar estas opciones si hay un único control seleccionado.

Desde los botones Traer al frente y Enviar al fondo podemos controlar la situación del control en términos de profundidad. Por ejemplo, si incluimos un control de imagen, podríamos situarla detrás de (al fondo) otros controles, como un botón o una etiqueta.

Utiliza las opciones del grupo Tamaño y orden para ajustar el tamaño y espaciado de los controles.

Se procede de la misma forma que para alinear controles, seleccionamos los controles que queremos ajustar y pulsamos Tamaño y espacio. Luego, hay que elegir la opción que más nos interesa

Con respecto al Tamaño de cada uno de los controles

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

 Ajustar, hace el control lo suficientemente grande para que quepa todo su contenido.  A la cuadrícula: ajusta a la cuadrícula.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

 Ajustar al más alto, al más corto, al más ancho y al más estrecho: todos los controles toman la altura del más o menos alto, o la anchura del más o menos ancho, respectivamente. Con respecto al Espaciado que existe entre un control y otro

 Igualar horizontal e Igualar vertical: mantiene la misma separación, ya sea horizontal o vertical, entre los controles. Para que esto tenga sentido, deberá haber seleccionados como mínimo tres controles, de modo que si A y B tienen un espaciado determinado, B y C tengan el mismo.

 Aumentar horizontal, Disminuir horizontal y sus homólogos para el vertical, lo que hacen es ir haciendo mayor o menor el espaciado de todos los controles seleccionados. Cuando queremos alinear y dejarlos del mismo tamaño es preferible primero ajustar el tamaño y después alinearlos porque a veces al cambiar la anchura se pierde la alineación.

En el grupo Posición se puede ajustar el margen de los controles que seleccionamos.

Desde la opción Márgenes de control, podremos elegir entre unos márgenes predefinidos: Ninguno, Estrecha, Medio, Ancha.

Utiliza la opción Delimitación para enlazar dos controles diferentes, de modo que si modificas uno el otro se actualice para cuadrar con el primero.

Además de todas estas opciones, tenemos que tener en cuenta que Access 2010 incorpora una plantilla que facilita la colocación de los controles. Al arrastrar un control, éste tenderá a autoajustarse. Ésto significa que mantendrá la separación entre controles, posición, tamaño y espaciado adecuados al formulario.

Si movemos el control de una columna a otra, se coloreará el espacio que va a ocupar

Y si tratamos de intercalar el control entre otros controles ya existentes, una línea mostrará su nueva localización y al soltar se ajustará la estructura.

Aplicaciones Ofimáticas Base de Datos Tema 05.MS-Access. FORMULARIOS

> **⚠️ Nota: Hemos ocultado la cuadrícula para que el ejemplo ...**
> Nota: Hemos ocultado la cuadrícula para que el ejemplo sea más claro, pero evidentemente estamos en la Vista Diseño.

En ocasiones no te interesará que se coloque donde Access elige, en tal caso elige Quitar diseño y colócalo a tu gusto, a mano o con las opciones vistas anteriormente.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 🎯 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Activitat 1: Tipologia de Controls i Gestió de l'Estat del Registre
En el disseny d'una interfície gràfica de base de dades per a la gestió d'entrades de taller microinformàtic, es diferencien tres categories essencials de controls:
1. **Classificació Conceptual:** Definiu la diferència operativa entre:
   - **Control Enllaçat (*Bound Control*):** Té com a propietat `Origen del Control` (*ControlSource*) un camp d'una taula física o consulta.
   - **Control Independent (*Unbound Control*):** No està associat a cap camp de la base de dades i s'utilitza per a emmagatzemar variables temporals de sessió o criteris de cerca.
   - **Control Calculat (*Calculated Control*):** Conté una fórmula que comença pel signe igual (`=`) i referencia altres controls del formulari.
2. **Impacte en Disc:** Donat un formulari amb 15 controls:
   - 10 controls enllaçats a columnes de la taula `EQUIPS`.
   - 2 controls independents (filtre de data d'inici i data de fi de cerca).
   - 3 controls calculats (Total hores, Import IVA i Import Total amb IVA).
   - Quins d'aquests controls ocupen espai addicional físic al fitxer de base de dades quan es fa clic al botó de guardar? Quins s'alliberen de memòria en tancar la finestra?
3. **Bloqueig i Protecció d'Integritat:** Per què els camps calculats s'han de configurar obligatòriament amb les propietats `Bloquejat = Sí` (*Locked*) i `Activat = No` (*Enabled = False*) per a impedir que l'usuari manipule les xifres fiscals manualment?

#### Activitat 2: Sincronització de Subformularis Mestre-Detall (1:N)
En una empresa d'assistència tècnica es construeix un formulari mestre basat en la taula `ORDRES_REPARACIO` (1) que incrusta un subformulari basat en la taula `ORDRES_PECES` (N):
1. **Mecanisme de Vinculació:** Expliqueu com funcionen les propietats de sincronització:
   - `Enllaçar camps primaris` (*LinkMasterFields*): Camp clau del formulari pare (`id_ordre`).
   - `Enllaçar camps secundaris` (*LinkChildFields*): Camp clau estrangera del subformulari (`id_ordre_fk`).
2. **Traducció a SQL Intern:** Cada vegada que el tècnic prem el botó "Següent Registre" al formulari pare i es visualitza l'ordre amb `id_ordre = 42`, quina sentència `SELECT` executa internament el motor de formularis per omplir les files del subformulari?
3. **Inserció Automàtica de Claus:** Si el tècnic afegeix una fila nova directament al subformulari escrivint un codi de peça i una quantitat, quin valor assigna automàticament el SGBD al camp `id_ordre_fk` sense necessitat que el tècnic l'escriga a mà?

#### Activitat 3: Usabilitat, Ergonomia i Ordre de Tabulació (*TabIndex*)
Un operari del servei tècnic ha d'introduir fins a 80 fitxes d'equips diàriament i es queixa que en prémer la tecla `Tab` el cursor fa salts desordenats per la pantalla:
1. **Ordre de Tabulació:** Com s'ordenen les propietats d'índex de tabulació (`Índex de tabulació` / `TabIndex` començant des de 0) per garantir que el cursor seguisca una seqüència lògica de dalt a baix i d'esquerra a dreta?
2. **Omissió de Tabulació:** Si tenim un camp autonumèric (`id_equip`) que es genera de forma automàtica pel sistema, quina propietat de tabulació cal activar (`Parada de tabulació = No`) perquè el cursor salte directament al camp de número de sèrie sense aturar-se a la clau primària?
3. **Disseny d'un Quadre Combinat (*ComboBox*) amb Columna Oculta:** Per assignar el tècnic responsable, volem que l'usuari veja un desplegable amb el `Nom del Tècnic`, però que el formulari guarde l'`id_tecnic` (enter). Com es configuren les propietats:
   - `Número de columnes`: `2`
   - `Amplades de columna`: `0cm; 5cm`
   - `Columna vinculada`: `1`

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Creació d'un Formulari Mestre de Clients amb Subformulari d'Equips
1. Obriu **LibreOffice Base** o **Microsoft Access** amb la base de dades del taller.
2. Utilitzeu l'**Assistent per a Formularis**:
   - Taula principal: `CLIENTS_TALLER` (Afegiu tots els camps: `id_client`, `nif`, `nom`, `cognoms`, `telefon`).
   - Activeu la casella per afegir **Subformulari basat en una relació existent**.
   - Taula secundària: `EQUIPS_CLIENT` (Afegiu `num_serie`, `marca`, `model`, `cost_pressupost`).
   - Format visual del subformulari: **Full de dades** o **Taula**.
3. Guardeu el formulari amb el nom `F_Clients_i_Equips`.
4. Passeu a la **Vista Formulari** i navegueu entre els registres de client comprovant com el subformulari inferior mostra exclusivament els ordinadors propietat del client actiu.

#### Repte 2: Configuració de Quadre Combinat (*ComboBox*) per a Selecció de Tècnic
1. Creeu un formulari en **Vista Disseny** anomenat `F_Nova_Ordre_Reparacio` basat en la taula `ORDRES`.
2. Afegiu els camps bàsics d'ordre (`id_ordre`, `num_serie_fk`, `data_entrada`, `estat`).
3. Per al camp `id_tecnic_fk`, elimineu el quadre de text simple i afegiu un **Quadre Combinat**:
   - A l'assistent del quadre combinat, seleccioneu: *"Vull que el quadre combinat busque els valors en una altra taula"*.
   - Taula d'origen: `TECNICS`.
   - Camps a mostrar: `id_tecnic` i `nom`.
   - Ordeneu la llista alfabèticament pel camp `nom`.
   - Oculteu la columna de clau primària (`0 cm`).
   - Seleccioneu l'opció *"Emmagatzemar el valor al camp: id_tecnic_fk"*.
4. Proveu el formulari seleccionant diferents tècnics des del menú desplegable i comproveu que a la taula subjacent s'emmagatzema el valor numèric correcte.

#### Repte 3: Inserció de Botons d'Ordre i Automatització de Pantalla
1. En el formulari `F_Nova_Ordre_Reparacio`, aneu a la secció **Peu de Formulari**.
2. Afegiu 4 botons d'ordre utilitzant l'assistent:
   - Botó 1 (Navegació): Categoria *Navegació de registres*, Acció *Anar al registre següent*.
   - Botó 2 (Operacions amb registres): Categoria *Operacions amb registres*, Acció *Afegir un nou registre*.
   - Botó 3 (Operacions amb registres): Categoria *Operacions amb registres*, Acció *Guardar el registre*.
   - Botó 4 (Operacions amb formularis): Categoria *Operacions amb formularis*, Acció *Tancar el formulari*.
3. Apliqueu icones gràfiques o text clar a cadascun dels botons.
4. Ajusteu l'alineació i l'espaiat dels botons amb les eines d'alineació de la barra d'eines.
5. Proveu el flux complet: obriu el formulari, feu clic al botó d'afegir nou registre, ompliu les dades, guardeu el registre i tanqueu la finestra amb el botó dedicat.

---

### 📋 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitectura de Controls i Orígens de Dades** | Distingeix amb precisió controls enllaçats, independents i calculats, protegint els càlculs i optimitzant l'ordre de tabulació. | Utilitza correctament els diferents tipus de controls amb xicotets oblits en la protecció de camps calculats. | Utilitza quadres de text bàsics però té dificultats per a configurar controls calculats o ajustar el `TabIndex`. | No sap com connectar un control visual amb una columna de la base de dades. |
| **Sincronització de Subformularis 1:N** | Configura subformularis Mestre-Detall amb enllaç de camps impecable, verificant la concordança de claus foranes i el filtratge dinàmic. | Crea el subformulari correctament mitjançant assistent amb supervisió mínima en l'ajust de camps vinculats. | Aconsegueix incrustar el subformulari però oblida vincular els camps primaris i secundaris (mostrant tots els registres desconnectats). | Incapaç de crear o configurar un subformulari relacionat. |
| **Quadres Combinats i Botons d'Acció** | Construeix desplegables amb columnes ocultes vinculades a FKs i incorpora botons d'ordre funcionals que faciliten el flux de treball. | Implementa el quadre combinat i els botons operatius amb xicotets desajustos estètics o d'alineació. | Afegeix botons amb l'assistent però no aconsegueix configurar el desplegable amb columna de clau oculta. | No sap utilitzar assistents de controls ni afegir botons de comandament al formulari. |
