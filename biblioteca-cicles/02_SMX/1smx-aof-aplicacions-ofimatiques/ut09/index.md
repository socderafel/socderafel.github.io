---
layout: default
title: "UD9 — BDA. Base de Datos. CONSULTES · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD9 — BDA. Base de Datos. CONSULTES"
prev_url: "../ut08/ut0804.html"
prev_label: "⬅️ 8.4 Ejemplos reglas de validación"
next_url: "../ut09/ut0901.html"
next_label: "9.1 Tema 4. CONSULTES ➡️"
---

# 📘 UD9 — BDA. Base de Datos. CONSULTES (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 🔍 Disseny de Consultes, Càlculs i Llenguatge SQL (QBE)

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura de Consultes en SGBD: De la Quadrícula QBE a SQL ANSI</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Selecció, filtres booleans, camps calculats, agrupaments estadístics i consultes d'acció modificadores de dades</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU9SelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU9CalcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU9GrpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU9ActGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Consultes de Selecció -->
    <rect x="20" y="20" width="190" height="255" rx="8" fill="url(#aofU9SelGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">🎯 CONSULTES DE SELECCIÓ</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Filtratge i Projecció</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Criteris de Comparació:</tspan></text>
    <text x="42" y="93" fill="#cbd5e1" font-size="8">- &gt;, &lt;, &gt;=, &lt;=, &lt;&gt; (Diferent)</text>
    <text x="42" y="105" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">ENTRE</tspan> 50 <tspan font-weight="bold">I</tspan> 200 (Interval tancat)</text>
    <text x="42" y="117" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">EN</tspan> ('València', 'Alacant')</text>
    <text x="32" y="134" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Comodins de Text (LIKE):</tspan></text>
    <text x="42" y="147" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">*</tspan> o <tspan font-weight="bold">%</tspan>: Cadena de caràcters</text>
    <text x="42" y="159" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">?</tspan> o <tspan font-weight="bold">_</tspan>: Caràcter individual</text>
    <text x="42" y="171" fill="#cbd5e1" font-size="8">- <tspan fill="#fbbf24">COM "V*"</tspan> / <tspan fill="#fbbf24">LIKE 'V%'</tspan></text>
    <rect x="35" y="190" width="160" height="40" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="115" y="206" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">ÉsNul / És No Nul</text>
    <text x="115" y="220" fill="#cbd5e1" font-size="7.5" text-anchor="middle">IS NULL / IS NOT NULL</text>
    <text x="115" y="258" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Àlgebra: σ (Selecció) i π (Projecció)</text>

    <!-- Bloc 2: Camps Calculats -->
    <rect x="230" y="20" width="190" height="255" rx="8" fill="url(#aofU9CalcGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="325" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">⚡ CAMPS CALCULATS</text>
    <text x="325" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Expressions i Funcions</text>
    <line x1="240" y1="63" x2="410" y2="63" stroke="#334155"/>
    <text x="242" y="80" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Sintaxi de Columna:</tspan></text>
    <text x="252" y="93" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">Àlies:</tspan> [Camp1] * [Camp2]</text>
    <text x="252" y="105" fill="#34d399" font-size="8">Total: [Preu] * [Unitats] * 1.21</text>
    <text x="242" y="122" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Funcions Integrades:</tspan></text>
    <text x="252" y="135" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">Data():</tspan> Data actual del sistema</text>
    <text x="252" y="147" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">Any([Data]):</tspan> Extracció de l'any</text>
    <text x="252" y="159" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">Majúsc([Text]):</tspan> UPPER() en SQL</text>
    <rect x="245" y="175" width="160" height="55" rx="4" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="325" y="193" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">Consultes amb Paràmetres</text>
    <text x="325" y="207" fill="#34d399" font-size="7.5" text-anchor="middle">[Introdueix la ciutat a cercar:]</text>
    <text x="325" y="221" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Genera diàleg emergent</text>
    <text x="325" y="258" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">No Ocupen Espai al Disc</text>

    <!-- Bloc 3: Consultes de Resum -->
    <rect x="440" y="20" width="190" height="255" rx="8" fill="url(#aofU9GrpGrad)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="535" y="42" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">📊 RESUM I TOTALS</text>
    <text x="535" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Agrupament de Dades</text>
    <line x1="450" y1="63" x2="620" y2="63" stroke="#334155"/>
    <text x="452" y="80" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Clàusula GROUP BY:</tspan></text>
    <text x="462" y="93" fill="#cbd5e1" font-size="8">- Agrupa files per categories</text>
    <text x="452" y="110" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Funcions d'Agregació:</tspan></text>
    <text x="462" y="123" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">SUMA():</tspan> Total monetari acumulat</text>
    <text x="462" y="135" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">PROMEDIO():</tspan> AVG() mitjana</text>
    <text x="462" y="147" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">COMPTE():</tspan> COUNT() nombre files</text>
    <text x="462" y="159" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">MÀX / MÍN:</tspan> Valors extrems</text>
    <rect x="455" y="175" width="160" height="55" rx="4" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="535" y="193" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">Filtre HAVING vs WHERE</text>
    <text x="535" y="207" fill="#f8fafc" font-size="7.5" text-anchor="middle">WHERE filtra abans d'agrupar</text>
    <text x="535" y="221" fill="#cbd5e1" font-size="7.5" text-anchor="middle">HAVING filtra sobre la funció agregada</text>
    <text x="535" y="258" fill="#fbbf24" font-size="8.5" text-anchor="middle" font-weight="bold">Analítica Empresarial</text>

    <!-- Bloc 4: Consultes d'Acció -->
    <rect x="650" y="20" width="190" height="255" rx="8" fill="url(#aofU9ActGrad)" stroke="#f87171" stroke-width="1.5"/>
    <text x="745" y="42" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">⚠️ CONSULTES D'ACCIÓ</text>
    <text x="745" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Mutació de Registres</text>
    <line x1="660" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="662" y="80" fill="#f87171" font-size="8.5">• <tspan font-weight="bold">Actualització (UPDATE):</tspan></text>
    <text x="672" y="93" fill="#cbd5e1" font-size="8">- Modifica valors en massa</text>
    <text x="672" y="105" fill="#f87171" font-size="8">  Ex: Pujar preus un 5%</text>
    <text x="662" y="122" fill="#f87171" font-size="8.5">• <tspan font-weight="bold">Eliminació (DELETE):</tspan></text>
    <text x="672" y="135" fill="#cbd5e1" font-size="8">- Esborra files segons criteri</text>
    <text x="662" y="152" fill="#f87171" font-size="8.5">• <tspan font-weight="bold">Dades Annexades (INSERT):</tspan></text>
    <text x="672" y="165" fill="#cbd5e1" font-size="8">- Afegeix registres a una taula</text>
    <text x="662" y="182" fill="#f87171" font-size="8.5">• <tspan font-weight="bold">Creació de Taula:</tspan></text>
    <text x="672" y="195" fill="#cbd5e1" font-size="8">- SELECT INTO taula nova</text>
    <rect x="665" y="210" width="160" height="26" rx="4" fill="#0f172a" stroke="#f87171" stroke-width="1"/>
    <text x="745" y="227" fill="#f87171" font-size="8" font-weight="bold" text-anchor="middle">Operacions No Reversibles</text>
    <text x="745" y="258" fill="#f87171" font-size="8.5" text-anchor="middle" font-weight="bold">Requereixen Confirmació</text>
  </svg>
</div>

### 📋 Comparativa entre Llenguatge QBE Gràfic i Sintaxi SQL Estàndard

| Concepte / Tipus de Consulta | Element en Disseny Gràfic (QBE) | Clàusula SQL ANSI Equivalent | Comportament Tècnic |
| :--- | :--- | :--- | :--- |
| **Projecció de Columnes** | Casella de verificació "Mostrar" marcada | `SELECT columna1, columna2` | Determina quins camps viatgen al conjunt de resultats (*Recordset*). |
| **Filtratge de Files** | Fila "Criteris" (Ex: `>100 I <500`) | `WHERE preu > 100 AND preu < 500` | Avalua cada tupla en el disc abans d'incorporar-la al resultat. |
| **Camps Calculats** | Nova columna: `Subtotal: [Preu]*[Quant]` | `SELECT (preu * quantitat) AS subtotal` | Es computa en temps d'execució en memòria RAM sense ocupar disc físic. |
| **Connexió Multitaula** | Línia d'unió entre taules a la finestra | `INNER JOIN Taula2 ON Taula1.id = Taula2.id_fk` | Combina registres coincidents en el valor de clau d'ambdues taules. |
| **Agrupament Estadístic** | Fila "Totals": Agrupar per / Suma / Compte | `GROUP BY camp HAVING SUM(preu) > 1000` | Condensa múltiples tuples en un únic registre resum per clau d'agrupació. |
| **Consulta d'Actualització** | Fila "Actualitzar a" amb expressió de canvi | `UPDATE Taula SET preu = preu * 1.05 WHERE estat = 1` | Modifica físicament i de forma permanent els registres que acompleixen el filtre. |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**9.1 Disseny de Consultes de Selecció, Càlculs i QBE**](./ut0901.md)
- [**9.2 Guia Ràpida de Sintaxi i Criteris de Consulta**](./ut0902.md)

---

# 9.1 Disseny de Consultes de Selecció, Càlculs i QBE

> **📺 Recursos Audiovisuals de Referència**
> - [**Creació de Consultes de Selecció en QBE ↗️**](https://www.youtube.com/watch?v=cl5_kYw2EjE): Vista Disseny de consultes, selecció de camps i ordenació.
> - [**Filtres Booleans i Criteris Avançats ↗️**](https://www.youtube.com/watch?v=Od1TqvibVqM): Ús d'operadors lògics (I, O), comodins i intervals.
> - [**Consultes Multitaula i Combinacions (JOIN) ↗️**](https://www.youtube.com/watch?v=OHrcy9X5JsY): Extracció de dades relacionades de múltiples taules.
> - [**Consultes de Resum i Funcions d'Agregació ↗️**](https://www.aulaclic.es/access-2016/secuencias/p08_consulta_resumen_yt.htm): Agrupaments amb SUM, AVG i COUNT.
> - [**Consultes d'Acció (Actualització, Annexió i Eliminació) ↗️**](https://www.youtube.com/watch?v=lKsi_HD9j4A): Modificacions massives de registres sota criteris de seguretat.


---

Tema 4

M i c r o s o f t A C C E S S

C O N S U L T A S

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Índice

#### CAPÍTULO 7: LAS CONSULTAS

TIPOS DE CONSULTAS

CREAR UNA CONSULTA

LA VISTA DISEÑO

AÑADIR CAMPOS

DEFINIR CAMPOS CALCULADOS

FORMAR EXPRESIONES

ENCABEZADOS DE COLUMNA

CAMBIAR EL ORDEN DE LOS CAMPOS

GUARDAR LA CONSULTA

EJECUTAR LA CONSULTA

MODIFICAR EL DISEÑO DE UNA CONSULTA

ORDENAR LAS FILAS

SELECCIONAR FILAS

CONSULTAS CON PARÁMETROS

#### CAPÍTULO 8: LAS CONSULTAS DE RESUMEN

DEFINICIÓN

LAS FUNCIONES DE AGREGADO

AGRUPAR REGISTROS

INCLUIR EXPRESIONES

INCLUIR CRITERIOS DE BÚSQUEDA

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Capítulo 7: Las Consultas

Tipos de consultas.

Las consultas son los objetos de una base de datos que permiten recuperar datos de una tabla, modificarlos e incluso almacenar el resultado en otra tabla. Existen varios tipos de consultas

 Consultas de selección. Son las consultas que extraen o nos muestran datos. Muestran aquellos datos de una tabla que cumplen los criterios especificados. Una vez obtenido el resultado podremos consultar los datos para modificarlos (esto se podrá hacer o no según la consulta). Una consulta de selección genera una tabla lógica (se llama lógica porque no está físicamente en el disco duro sino en la memoria del ordenador y cada vez que se abre se vuelve a calcular).

 Consultas de acción. Son consultas que realizan cambios a los registros. Existen varios tipos de consultas de acción, de eliminación, de actualización, de datos anexados y de creación de tablas.

Crear una consulta.

Para crear una consulta, seguir los siguientes pasos: Abrir la base de datos donde se encuentra la consulta a crear. Hacer clic en el botón Diseño de Consulta en la pestaña Crear

También tenemos la posibilidad de utilizar el Asistente para consultas que puedes ver en la imagen anterior para crear consultas con un poco de ayuda.

Si haces clic en el botón Asistente para consultas aparecerá el siguiente cuadro de diálogo

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

El Asistente para consultas sencillas crea una consulta de selección sencilla como definimos en el apartado anterior.

Los otros asistentes nos permiten generar tipos especiales de consulta que veremos más adelante. Nosotros explicaremos detenidamente la opción Diseño de consulta que te permitirá crear cualquiera de las anteriores por ti mismo.

Al entrar en la Vista Diseño de consulta nos pide primero las tablas de las que la consulta sacará los datos con un cuadro de diálogo parecido al siguiente

Seleccionar la tabla de la que queremos sacar datos y hacer clic sobre el botón Agregar. Si queremos sacar datos de varias tablas agregar de la misma forma las demás tablas. Finalmente hacer clic sobre el botón Cerrar.

Aparecerá la ventana Vista Diseño de consultas.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

La vista Diseño.

Si observas la pantalla, en la parte superior tenemos la zona de tablas donde aparecen las tablas añadidas con sus correspondientes campos, y en la parte inferior denominada cuadrícula QBE definimos la consulta.

Cada columna de la cuadrícula QBE corresponde a un campo.

Cada fila tiene un propósito que detallamos brevemente a continuación, más adelante iremos profundizando en la explicación

Campo: ahí ponemos el campo a utilizar que en la mayoría de los casos será el campo a visualizar, puede ser el nombre de un campo de la tabla y también puede ser un campo calculado.

Tabla: nombre de la tabla de la que sacamos el campo. Nos será útil cuando definamos consultas basadas en varias tablas.

Orden: sirve para ordenar las filas del resultado.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Mostrar: si la casilla de verificación aparece desactivada la columna no aparecerá en el resultado, se suele desactivar cuando queremos utilizar el campo para definir la consulta pero no queremos que aparezca en el resultado. Por ejemplo si queremos que la consulta nos saque todos los alumnos de Valencia, necesitamos el campo Población para seleccionar los alumnos pero no queremos que aparezca la población en el resultado ya que todos son de la misma población.

Criterios: sirve para especificar un criterio de búsqueda. Un criterio de búsqueda es una condición que deben cumplir los registros que aparecerán en el resultado de la consulta. Por lo tanto está formado por una condición o varias condiciones unidas por los operadores Y (AND) y O (OR).

O: esta fila y las siguientes se utilizan para combinar condiciones.

Añadir campos

Para añadir campos a la cuadrícula podemos:  Hacer doble clic sobre el nombre del campo que aparece en la zona de tablas, este se colocará en la primera columna libre de la cuadrícula.

 Hacer clic sobre el nombre del campo que aparece en la zona de tablas y sin soltar el botón del ratón arrastrar el campo sobre la cuadrícula, soltar el botón cuando estemos sobre la columna delante de la cual queremos dejar el campo que estamos añadiendo.

 Hacer clic sobre la fila Campo: de una columna vacía de la rejilla, aparecerá a la derecha la flecha para desplegar la lista de todos los campos de todas las tablas que aparecen en la zona de tablas. Si tenemos muchos campos y varias tablas podemos reducir la lista seleccionando primero una tabla en la fila Tabla: así en la lista desplegable sólo aparecerán campos de la tabla seleccionada.

 También podemos teclear directamente el nombre del campo en la fila Campo: de una columna vacía de la cuadrícula.

 Si queremos que todos los campos de la tabla aparezcan en el resultado de la consulta podemos utilizar el asterisco * (sinónimo de 'todos los campos').

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Definir campos calculados

Al igual que podemos definir en una tabla un campo cuyo tipo de datos sea Calculado también podemos incluir campos calculados en las consultas.

¿Cuándo incluir la expresión en una tabla y cuándo en una consulta? La respuesta dependerá de cada caso concreto. Si el resultado de la expresión se va a utilizar frecuentemente en consultas, listados o estadísticas, puede ser más interesante guardar el dato en la propia tabla. Si en cambio se trata de un cálculo más específico puede ser preferible no utilizar espacio en el disco para conservar estos valores, definiendo un campo calculado en la consulta.

Para definir un campo como calculado, simplemente deberemos escribir una expresión en el espacio reservado para indicar el campo. La sintaxis será

Nombre del campo: expresión

Por ejemplo, si disponemos de un campo Precio, podríamos realizar la siguiente expresión: Precio con IVA: Precio * 1,18

Al pulsar INTRO se guardará la expresión y se aplicarán ciertos cambios, como encerrar entre corchetes los campos referenciados o eliminar espacios innecesarios, etc.: Precio con IVA: [Precio]*1,18

Formar expresiones

Los campos calculados son campos obtenidos del resultado de una expresión.

Una expresión se forma combinando un operador con uno o generalmente dos operandos. La mayoría de las veces un operando será un campo de la tabla y el otro un valor concreto u otro campo.

Operadores operador +, se utiliza para sumar dos números. operador -, se utiliza para hallar la diferencia entre dos números.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

operador *, se utiliza para multiplicar dos números. operador ^, se utiliza para elevar un número a la potencia del exponente ( número ^ exponente ) operador / , se utiliza para dividir dos números y obtener un resultado de signo flotante. operador \, se utiliza para dividir dos números y obtener un resultado entero.

operadorMod, divide dos números y devuelve sólo el resto. El operador &, se utiliza para concatenar dos expresiones de tipo texto.

También se puede utilizar el operador de suma + cuando los dos operandos son de tipo texto, para concatenarlos. Un consejo es utilizar el operador & para la concatenación y así evitar errores o confusiones.

Un operando puede ser un nombre de columna, una expresión, un valor concreto o una función predefinida.

Valores concretos Los valores concretos se deben escribir siguiendo las siguientes reglas

Los valores numéricos se indican poniendo el número sin más. Se tiene que utilizar para separar la parte entera de los decimales el símbolo definido en nuestra configuración de Windows; además los valores numéricos no se pueden escribir formateados, no podemos escribirlos con separadores de miles.

Por ejemplo en una expresión correcta no puedo escribir (ventas + 1.000.000) ni tampoco (ventas + 1,000,000), tengo que escribir (ventas +1000000)

> **💡 Apunt Tècnic**
> Ejemplo

Los valores de tipo texto deben ir siempre entre comillas simples ' o dobles ". Ejemplo: ', ' ó ",", 'VALENCIA'

Los literales de fecha se escriben entre # y deben estar en el formato de EE.UU., incluso si no estamos utilizando la versión norteamericana del motor de base de datos Microsoft Jet. Por ejemplo, el 10 de mayo de 1996, se escribe 10/5/96 en España y Latinoamérica, y 5/10/96 en Estados Unidos de América. Para indicar la fecha 10 de mayo de 1996 en cualquier base de datos sea española, latinoamericana o de EE.UU., debemos escribirla #5/10/96#; con el formato #mes/dia/año#

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

También se puede utilizar la función DateValue, que reconoce las configuraciones internacionales establecidas por Microsoft Windows. Por ejemplo, DateValue('10/5/96') es equivalente a #05/10/96# si nuestra configuración de Windows define las fechas con el formato dia/mes/año.

Funciones predefinidas Access 2010 tiene muchas funciones predefinidas que se pueden utilizar, enumerarlas y explicarlas sería demasiado largo. Lo mejor es saber que tenemos a nuestra disposición muchas funciones y cuando queramos obtener algo diferente consultar la ayuda de access para ver si existe ya una función para lo que queremos hacer.

A título de ejemplo tenemos unas que se utilizan más a menudo: DATE() o fecha() devuelve el día en que estamos

NOW() o Hoy() devuelve el día y la hora actual YEAR(fecha) o Año() devuelve el año de la fecha MONTH(fecha) o Mes() devuelve el mes de la fecha DATEVALUE(literal) o ValorFecha() convierte el literal en un valor de fecha.

Nombres de campos los nombres de los campos se indican entre corchetes [ ], cuando un nombre de campo está formado por una sola palabre se pueden omitir corchetes pero si el nombre contiene varias palabras separadas por espacios en blanco es oblogatorio ponerlo entre corchetes [ ].

por ejemplo para hacer referencia al campo Poblacion puedo escribir Poblacion o [Poblacion], pero el campo Fecha de nacimiento siempre se escribirá [Fecha de nacimiento]

Uso del paréntesis Cuando combinamos varias expresiones podemos utilizar los paréntesis para delimitar cada expresión. Siempre se tiene que utilizar un paréntesis de apertura ( y uno de cierre ).

> **💡 Apunt Tècnic**
> Ejemplo: ventas + (ventas * 0.1)

El uso del paréntesis sirve para que la expresión quede más clara sobre todo cuando combinamos muchas expresiones, y para que los operadores actuen en el orden que nosotros queramos para así olvidarnos de la prioridad de los operadores.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Encabezados de columna

Podemos cambiar el encabezado de las columnas del resultado de la consulta.

Normalmente aparece en el encabezado de la columna el nombre de la columna, si queremos cambiar ese encabezado lo indicamos en la fila Campo: escribiéndolo delante del nombre del campo y seguido de dos puntos ( : ). Se suele utilizar sobre todo para los campos calculados.

Así, los encabezados de la tabla se mostrarán así

Cambiar el orden de los campos

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Si hemos incluido campos en la cuadrícula y queremos cambiar el orden de estos campos podemos mover una columna (o varias) arrastrándola o bien cortando y pegando.

 Para mover una columna arrastrándola: Posicionar el cursor sobre el extremo superior de la columna y cuando aparece la flecha hacer clic, la columna aparecerá resaltada (está seleccionada). Mover un poco el cursor para que aparezca la flecha . Pulsar el botón del ratón y sin soltarlo arrastrar la columna hasta la posición deseada.

 Para mover una columna cortándola: Seleccionar la columna (posicionar el cursor sobre el extremo superior de la columna y cuando aparece la flecha hacer clic).

Hacer clic sobre el icono en la pestaña Inicio (o bien teclear Ctrl+X), desaparecerá la columna.

A continuación crear una columna en blanco en el lugar donde queremos mover la columna que hemos cortado con la opción Insertar Columnas de la pestaña Diseño.

Seleccionar esa columna y hacer clic sobre el icono Pegar la pestaña Inicio (o bien teclear Ctrl+V).

Podemos seleccionar varias columnas consecutivas seleccionando la primera y manteniendo la tecla MAYÚS pulsada, seleccionar la última columna a seleccionar, se seleccionarán las dos columnas y todas la columnas que se encuentren entre las dos.

Guardar la consulta

Podemos Guardar la consulta

 Haciendo clic sobre el botón de la barra de Acceso Rápido,

 O bien, seleccionando la opción Guardar dela pestaña Archivo. Si es la primera vez que guardamos la consulta aparecerá el cuadro de diálogo para darle un nombre. Se puede poner cualquier nombre excepto el de una tabla ya creada. A continuación hacer clic

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

sobre el botón Aceptar.

Para cerrar la consulta hacer clic sobre su botón .

Ejecutar la consulta

Podemos ejecutar una consulta desde la ventana Diseño de consulta o bien desde el Panel de navegación.  Desde el Panel de navegación, haciendo doble clic sobre su nombre.  Desde la vista diseño de la consulta, haciendo clic sobre el botón Ejecutar de la pestaña Diseño

Cuando estamos visualizando el resultado de una consulta, lo que vemos realmente es la parte de la tabla que cumple los criterios especificados, por lo tanto si modificamos algún dato de los que aparecen en la consulta estaremos modificando el dato en la tabla (excepto algunas consultas que no permiten esas modificaciones).

Modificar el diseño de una consulta

Si lo que queremos es modificar el diseño de una consulta

Situarse en el Panel de Navegación y hacer clic derecho sobre el nombre de la consulta.

En el menú contextual seleccionar .

Ordenar las filas

Para ordenar las filas del resultado de la consulta

Hacer clic sobre la fila Orden: del campo por el cual queremos ordenar las filas, hacer clic sobre la flecha que aparecerá para desplegar la lista y elegir el tipo de ordenación.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Puede ser Ascendente en este caso se ordenarán de menor a mayor si el campo es numérico, por orden alfabético si el campo es de tipo texto, de anterior a posterior si el campo es de tipo fecha/hora, etc., o bien puede ser Descendente en orden inverso.

Podemos ordenar también por varios campos para ello rellenar la fila Orden: de todas las columnas por las que queremos ordenar. En este caso se ordenan las filas por la primera columna de ordenación, para un mismo valor de la primera columna, se ordenan por la segunda columna, y así sucesivamente.

El orden de las columnas de ordenación es el que aparece en la cuadrícula, es decir si queremos ordenar por ejemplo por provincia y dentro de la misma provincia por localidad tenemos que tener en la cuadrícula primero la columna provincia y después la columna localidad.

El tipo de ordenación es independiente por lo que se puede utilizar una ordenación distinta para cada columna. Por ejemplo, ascendente por la primera columna y dentro de la primera columna, descendente por la segunda columna.

Seleccionar filas

Para seleccionar filas tenemos que indicar un criterio de búsqueda, un criterio de búsqueda es una condición que deberán cumplir todas las filas que aparezcan en el resultado de la consulta.

Normalmente la condición estará basada en un campo de la tabla por ejemplo para seleccionar los alumnos de Valencia la condición sería población = "Valencia". Para escribir esta condición en la cuadrícula tenemos que tener en una de las columnas de la cuadrícula el campo poblacion y en esa columna ponemos en la fila Criterios: el resto de la condición o sea ="Valencia".

Cuando la condición es una igualdad no es necesario poner el signo =, podemos poner directamente el valor Valencia en la filaCriterios: ya que si no ponemos operador asume por defecto el =.

Tampoco es necesario poner las comillas, las añadirá él por defecto. Siempre que se encuentra un texto lo encierra entre comillas.

Si en la fila Criterios: queremos poner un nombre de campo en vez de un valor (para comparar dos

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

campos entre sí) tenemos que encerrar el nombre del campo entre corchetes [ ]. Por ejemplo queremos poner la condición precio = coste en la que precio y coste son dos campos, tenemos que poner en la fila criterios: [coste], si no ponemos los corchetes añadirá las comillas y entenderá Precio = "coste", precio igual al valor Coste no al contenido del campo Coste.

Para indicar varias condiciones se emplean los operadores Y y O.

En un criterio de búsqueda en el que las condiciones están unidas por el operador Y, para que el registro aparezca se deben cumplir todas las condiciones. Por ejemplo precio > 100 y precio < 1200, aparecen los registros cuyo precio está comprendido entre 101 y 1199.

En un criterio de búsqueda en el que las condiciones están unidas por el operador O, el registro aparecerá en el resultado de la consulta si cumple al menos una de las condiciones.

Todas las condiciones establecidas en la misma fila de la cuadrícula quedan unidas por el operador Y.

En el ejemplo siguiente serían alumnos de Valencia Y cuya fecha de nacimiento esté comprendida entre el 1/1/60 y el 31/12/69.

Del mismo modo pasa con cada una de las filas o: Si queremos que las condiciones queden unidas por el operador O tenemos que colocarlas en filas distintas (utilizando las filas O: y siguientes).

Por ejemplo, si en la cuadrícula QBE tenemos especificado los siguientes criterios

Visualizaremos de la tabla Alumnado los campos Apellidos, Nombre, Población y Fecha nacimiento,

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

los alumnos aparecerán ordenados por Apellidos pero únicamente aparecerán aquellos que sean de Valencia y hayan nacido entre el 1/1/60 y el 31/12/69, o bien aquellos de Alicante sea cual sea su fecha de nacimiento. ¡Ojo! El criterio de la fecha de nacimiento únicamente afecta a la población Valencia por encontrarse en la misma fila Access no diferencia entre mayúsculas y minúsculas a la hora de realizar la búsqueda de registros.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Operador Significado = igual que <> distinto de < menor que <= menor o igual > mayor que >= mayor o igual

Los operadores de comparación Estos operadores comparan el valor de una expresión con el valor de otra. Independientemente del operador si uno de los valores es nulo, el resultado de la comparación será nulo (ni verdadero ni falso). los operadores de comparación que podemos utilizar son

El operador Entre

Tiene la siguiente sintaxis

Expresión Entre valor1 Y valor2

Examina si el valor de la expresión está comprendido entre los dos valores definidos por valor1 y valor2. Normalmente la expresión será un nombre de campo. Ejemplo

[fecha de nacimiento] entre #01/01/60# y 04/06/62#, en la cuadrícula QBE se pondría

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

El operador In Tiene la siguiente sintaxis

Expresión In (valor1, valor2, ...)

Examina si el valor de la expresión es uno de los valores incluidos en la lista de valores escritos entre paréntesis.

Por ejemplo, para seleccionar los alumnos de Alicante, Elche, Elda y Onda podríamos poner la condición Población In ('Alicante'; 'Elche'; 'Elda'; 'Onda')

El operador Es nulo

Cuando una columna que interviene en una condición contiene el valor nulo, el resultado de la condición no es verdadero ni falso, sino nulo, sea cual sea el test que se haya utilizado. Por eso si queremos listar las filas que no tienen valor en una determinada columna, no podemos utilizar la condición columna = nulo debemos utilizar un operador especial, el operador Es nulo.

Tiene la siguiente sintaxis

Expresión Es nulo, donde expresión normalmente será un nombre de columna.

Por ejemplo queremos saber los alumnos que no tienen población, la condición sería población Es Nulo

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

El operador Como

Se utiliza cuando queremos utilizar caracteres comodines para formar el valor con el que comparar. Por ejemplo queremos visualizar los alumnos cuyo nombre acabe en 'o'. En este caso hay que utilizar el comodín * y utilizar el operadorComo para que Access reconozca el * como un comodín y no como el carácter asterisco. La condición sería nombre como '*o'.

El valor que contiene los comodines se conoce como patrón y tiene que ir encerrado entre comillas (simples o dobles).

La sintaxis es la siguiente

Expresión Como 'patrón'

En la siguiente tabla te indicamos los caracteres comodines que se pueden poner en un patrón y su significado.

Caracteres en patrón Significado ? Un carácter cualquiera * Cero o más caracteres # Un dígito cualquiera (0-9) [ListaCaracteres] Un carácter cualquiera de listacaracteres [!ListaCaracteres] Un carácter cualquiera no incluido en listacaracteres

ListaCaracteres representa una lista de caracteres y puede incluir casi cualquier carácter, incluyendo dígitos, los caracteres se escriben uno detrás de otro sin espacios en blanco ni comas. Por ejemplo para sacar los nombres que empiezan por a,g,r o v el patrón sería: '[agrv]*'

Los caracteres especiales corchete de apertura [, interrogación ?, almohadilla # y asterisco * dejan de ser considerados comodinescuando van entre corchetes. Por ejemplo para buscar los nombres

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

que contienen un asterisco, el patrón sería: '*[*]*' en este caso el segundo * dentro del patrón no actúa como comodín sino como un carácter cualquiera porque va dentro de los corchetes.

Si no se encierra entre corchetes, la exclamación ! representa el carácter exclamación.

El corchete de cierre ] se puede utilizar fuera de una listacaracteres como carácter independiente pero no se puede utilizar en una listacaracteres. Por ejemplo, el patrón 'a]*' permite encontrar nombres que empiecen por una a seguida de un corchete de cierre.

La secuencia de caracteres [] se considera una cadena de caracteres de longitud cero ("").

Se puede especificar un intervalo de caracteres en ListaCaracteres colocando un guión - para separar los límites inferior y superiordel intervalo.

Por ejemplo, la secuencia [A-Z ] en patrón representa cualquier carácter comprendido en el intervalo de la A a la Z.

Cuando se especifica un intervalo de caracteres, éstos deben aparecer en orden ascendente (de menor a mayor).[A-Z] es un intervalo válido, pero [Z-A] no lo es.

Se pueden incluir múltiples intervalos entre corchetes, sin necesidad de delimitadores.

El guión - define un intervalo únicamente cuando aparece dentro de los corchetes entre dos caracteres, en cualquier otro caso representa el carácter guión.

Por ejemplo queremos saber los alumnos de la provincia de Valencia (son los que tienen un código postal que empieza por 46 seguido de tres dígitos cualesquiera, la condición podría ser [código postal] como '46###'

Consultas con parámetros

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

A menudo, en una consulta necesitamos utilizar un valor que no es conocido en ese momento sino que queremos que lo introduzca el usuario cuando se ejecute la consulta. Por ejemplo, queremos hacer una consulta para obtener los alumnos de una determinada Población, la población la introducirá el usuario cuando Access se lo pida.

En este caso necesitamos utilizar en nuestra consulta un parámetro.

Un parámetro funciona de forma parecida a un campo de tabla, pero el valor que almacena lo introduce el usuario cuando se ejecuta la consulta.

En una consulta cuando utilizamos un nombre de campo que no está en el origen de datos, Access considera este campo como un parámetro y cuando se ejecuta la consulta nos pide Introducir el valor del parámetro mediante un cuadro de diálogo como este

En el ejemplo anterior, en la consulta tendríamos que añadir una condición de búsqueda que especifique que la Población es igual alValor a introducir, de esta manera

¡Ojo! cuando pongamos el nombre del parámetro es importante escribirlo entre corchetes, de lo contrario Access le añadirá comillas y no lo considerará como un nombre de parámetro sino como un valor.

Otra forma de utilizar un parámetro en una consulta es definiéndolo mediante el botón Parámetros de la pestaña Diseño.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

En este caso, después de elegir la opción, se abre el cuadro de diálogo Parámetros de la consulta donde podemos indicar el nombre del parámetro y el tipo de dato.

La diferencia entre escribir directamente un nombre de parámetro y definirlo con el botón Parámetros es que, si le hemos asignado un tipo de dato, Access comprueba automáticamente el tipo del valor introducido por el usuario.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Capítulo 8: Las consultas de resumen

Definición

En Access podemos definir un tipo de consultas cuyas filas resultantes son un resumen de las filas del origen de la consulta , por eso las denominamos consultas de resumen, también se conocen como consultas sumarias.

Es importante entender que las filas del resultado de una consulta de resumen tienen una naturaleza distinta a las filas de las demás tablas resultantes de consultas, ya que corresponden a varias filas de la tabla origen.

Para simplificar, veamos el caso de una consulta basada en una sola tabla, una fila de una consulta 'no resumen' corresponde a una fila de la tabla origen, contiene datos que se encuentran en una sola fila del origen, mientras que una fila de una consulta de resumen corresponde a un resumen de varias filas de la tabla origen, esta diferencia es lo que va a originar una serie de restricciones que sufren las consultas de resumen y que veremos a lo largo del tema. Por ejemplo este tipo de consulta no permite modificar los datos del origen.

En el ejemplo que viene a continuación tienes un ejemplo de consulta normal en la que se visualizan las filas de una tabla de oficinas ordenadas por región, en este caso cada fila del resultado se corresponde con una sola fila de la tabla oficinas, mientras que la segunda consulta es una consulta resumen, cada fila del resultado se corresponde con una o varias filas de la tabla oficinas.

Una consulta de resumen se define haciendo clic sobre el botón Totales en la pestaña de Diseño.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

En cualquiera de los dos casos se añade una fila a la cuadrícula QBE, la fila Total

Todas las columnas que incluyamos en la cuadrícula deberán tener un valor en esa fila, ese valor le indicará a Access qué hacer con los valores contenidos en el campo escrito en la fila Campo

Los valores que podemos indicar en la fila Total: son los que aparecen al desplegar la lista asociada a la celda como puedes ver en la imagen

Las funciones de agregado

Las funciones de agregado son funciones que permiten obtener un resultado basado en los valores contenidos en una columna de una tabla, son funciones que sólo se pueden utilizar en una consulta de resumen ya que obtienen un 'resumen' de los valores contenidos en las filas de la

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

tabla. Para utilizar estas funciones podemos escribirlas directamente en la fila Campo: de la cuadrícula como veremos más adelante pero podemos utilizar una forma más cómoda que es seleccionando en la fila Total: de la cuadrícula la opción correspondiente a la función.

A continuación describiremos esas opciones.

 La opción Suma calcula la suma de los valores indicados en el campo. Los datos que se suman deben ser de tipo numérico (entero, decimal, coma flotante o monetario...). El resultado será del mismo tipo aunque puede tener una precisión mayor.

 La opción Promedio calcula el promedio (la media aritmética) de los valores contenidos en el campo, también se aplica a datos numéricos, y en este caso el tipo de dato del resultado puede cambiar según las necesidades del sistema para representar el valor del resultado.

 La opción DesvEst calcula la desviación estándar de los valores contenidos en la columna indicada en el argumento. Si la consulta base (el origen) tiene menos de dos registros, el resultado es nulo.

 La opción Var calcula la varianza de los valores contenidos en la columna indicada en el argumento. Si la consulta base (el origen) tiene menos de dos registros, el resultado es nulo.

Es interesante destacar que el valor nulo no equivale al valor 0, las funciones de resumen no consideran los valores nulos mientras que consideran el valor 0 como un valor, por lo tanto en el promedio y la desviación estándar los resultados no serán los mismos con valores 0 que con valores nulos.

 Las opciones Mín y Max determinan los valores menores y mayores respectivamente de la columna. Los valores de la columna pueden ser de tipo numérico, texto o fecha. El resultado de la función tendrá el mismo tipo de dato que la columna. Si la columna es de tipo numérico Mín devuelve el valor menor contenido en la columna, si la columna es de tipo texto Mín devuelve el primer valor en orden alfabético, y si la columna es de tipo fecha, Mín devuelve la fecha más antigua y Max la fecha más posterior.

 Las opciones Primero y Último se utilizan para obtener el primer y último registro del grupo sobre el

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

que se realizan los cálculos. El orden lo determina el orden cronológico en el que se escribieron los registros. Ordenar los registros no tiene ningún efecto sobre estas opciones.

 La opción Cuenta cuenta el número de valores que hay en la columna, los datos de la columna pueden ser de cualquier tipo, y la función siempre devuelve un número entero. Si la columna contienevalores nulos esos valores no se cuentan, si en la columna aparece un valor repetido, lo cuenta varias veces.

Para que cuente en número de registros hay que utilizar la función Cuenta(*) devuelve el número de filas por lo tanto contará también los valores nulos. En este caso tenemos que seleccionar la opción Expresión y escribirlo así

Agrupar registros

Hasta ahora las consultas de resumen que hemos visto utilizan todas las filas de la tabla y producen una única fila resultado.

La opción Agrupar Por permite definir columnas de agrupación. Una consulta de resumen sin columnas de agrupación obtiene una única fila resultado y los cálculos se realizan sobre todos los registros del origen.

Cuando se incluye una columna de agrupación Access forma grupos con todos los registros que tienen el mismo valor en la columna de agrupación y cada grupo así formado genera una fila en el resultado de la consulta y además todos los cálculos definidos se realizan sobre los registros de cada grupo. De esta forma se pueden obtener subtotales.

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Por ejemplo queremos saber cuántos alumnos tenemos en cada población. Tenemos que indicar que queremos contar los registros de la tabla Alumnado pero antes agrupándolos por el campo Poblacion. De esta manera la función cuenta() la calculará sobre cada grupo de registros (los alumnos de la misma población). La consulta quedaría así

Los campos de tipo memo u OLE no se pueden definir como columnas de agrupación.

 Se pueden agrupar las filas por varias columnas, en este caso se agrupan los registros que contienen el mismo valor en cada una de las columnas de agrupación.

 Todas las filas que tienen valor nulo en la columna de agrupación, pasan a formar un único grupo.

Incluir expresiones

La opción Expresión permite poner en la fila Campo: una expresión en vez de un nombre de columna.

Esta expresión tiene ciertas limitaciones. Sólo puede contener operandos que sean funciones de agregado (las funciones que acabamos de ver (suma( ), Promedio(), DesvEst( ), Mín( ), Max( )...) valores fijos o nombres de columna que aparezcan con la opción AgruparPor.

En una expresión se pueden combinar varias funciones de agregado pero no se pueden anidar funciones de agregado, por ejemplo en una expresión puedo poner Max(nºhoras)-Mín(nºhoras) pero noMax(suma(nºhoras)).

Aplicaciones Ofimáticas Base de Datos Tema 04.MS-Access. CONSULTAS

Incluir criterios de búsqueda

La opción Dónde permite poner un criterio de búsqueda que se aplicará a las filas del origen de la consulta antes de realizar los cálculos. Por ejemplo queremos saber cuántos alumnos tenemos de Valencia, para ello tenemos que contar los registros de la tabla alumnado pero seleccionando previamente los de Valencia, esto se definiría de la siguiente forma

También podemos incluir un criterio de búsqueda en una columna que no tenga la opción Dónde, en este caso la condición se aplicará a las filas resultantes de la consulta. Para la condición de selección se pueden utilizar los mismos operadores de condición que en una consulta normal, también se pueden escribir condiciones compuestas (unidas por los operadores OR, AND,NOT), existe una limitación, en la fila Criterios: no se podrá poner un nombre de columna si esta columna no es una columna de agrupación.

---

# 9.2 RESUMEN CONSULTES

Las consultas, nos van a mostrar los datos que cumplan los criterios especificados en su diseño. Se pueden establecer, dos categorias de consultas

- Consultas de SELECCION: muestran unos datos, a partir de unos filtros o condiciones que especificamos.

- Consultas de ACCION: en este tipo de consultas, se realizan dos operaciones : primero una consulta de

selección para seleccionar los datos que cumplan unas condiciones, y luego, sobre el resultado de la consulta, se realizan cambios a los registros. Tipos

- Consulta de eliminacion: elimina de una tabla, los registros que cumplen ciertos criterios
- Consulta de actualización: modifica los registros que cumplen unos parámetros establecidos.
- Consulta de datos anexados: copia unos registros de una tabla a otra
- Consulta de creación de tablas: crea una tabla nueva a partir de los registros de otra, que cumplen ciertas

condiciones.

CONSULTA DE SELECCION

A) Seleccionar intérvalos de valores de un campo (por ejemplo salario de un empleado)

Criterio Resultado >1000 Y < 2000 Mayor que 1000 y menor que 2000 Entre 1000 y 2000 Entre 1000 y 2000, ambos incluidos >= 2000 Mayor o igual a 2000 > 2000 Mayor que 2000

Si se trata de comparar fechas: Criterio Resultado > #01/01/2015# Fecha mayor que 01/01/2015 Entre #01/01/2015# y #01/12/2015# Fecha entre 01/01/2015 y 01/12/2015 incluidos <= #01/01/2015# Fecha menor 01/12/2015

B) Usar carácteres comodines.

- Signo interrogación (?): para sustituir un caracter por cualquiera, en esa posición
- El asterisco ( * ): para representar cualquier numero de caracteres, situados en la misma posición que el

asterisco.

Imaginemos que se hacen consultas sobre el campo LOCALIDAD

Criterio Resultado Como "M*" Localidad que empieza por M Como "M????D" Localidad empieza po M, seguido de 4 letras cualesquiera, y termina en D (por ej MADRID) Como "?A*" Localidad empieza por cualquier letra, le sigue una A y luego, cualquier número de caracteres Como "B*O" Localidad empieza por B y termina en O Como "*O" Localidad termina en O Como "*A*" Localidad que contenga una A

C) Seleccionar registros que no coinciden con un valor

Utilizaremos el operador NEGADO, ó NO. NoES (NoES como)

Criterio Resultado Negado M* NoES como “M*” Localidad no empieza por M Negado "*O" NoEs como "*O" Localidad no termina en O Negado "*A*" NoEs como "*A*" Localidad no contiene una A

D) Especificar varios criterios Podemos especificar varios criterios sobre un campo, utilizando los operadores lógicos Y y O

E) Seleccionar registros que continene valores o no Utilizaremos la expresión NULO, para buscar los campos con valores nulos y NEGADO NULO para buscar campos que continen valores distintos de nulo

F) Creacion de campos calculados En una consulta se pueden crear campos calculados d ela siguiente manera: en una nueva columns, escribimos el nombre del nuevo campo, dos puntos, y el calculo; si el calculo intervienen otros campos de la tabla, lo incluiremos estre corchetes [ ]

G) Consulta de parámetros Una consulta de parámetros muestra uno o más cuadros de diálogo predefinidos que solicitan el valor del parámetro (criterio) para realizar la selección de los datos.

Ejemplos de consultas . Sobre la base de datos EMPLEADOS.

- Se desea obtener una consulta que muestre los datos nombre de empleado, salario y numero de

departamento, de aquellos empleados, con salario entre 1000 y 2000€, incluidos 2.Mostrar los datos numero de departamento, nombre y localidad de los departamentos cuyas localidades empiecen por M. 3.Mostrar los datos numero de departamento, nombre y localidad de los departamentos cuyo nombre contiene una "e", y cuya localidad no empieza por M 4.Ver los departamentos cuya localidad sea MADRID o BARCELONA.

5.Se desea crear una consulta con un campo calculado llamado NUEVO_SALARIO, que será la suma del salario mas la comisión.

- Se desea crear una consulta de parámetros, que pida teclear el numero de departamento para visualizar los

departamentos que coincidan con los datos escritos.

- Obtener la suma de salario y comisión por departamento. Se desea que muestre también el nombre del

departameto. 8.Obtener el salario medio por departamento. 9.Obtener el salario máximo por departamento. 10.Obtener el numero de empleados por departamento. 12.Se desea borrar los empleados del departamento que se encuentra en GUADALAJARA.

- Se desea subir el sueldo y la comisión de los empleados del departamento numero 20, ambos en 100€
- Se desea añadir registros nuevos a la tabla EMPLEADOS. Estos registros se encuentran en la tabla

EMPLEADOS_NUEVOS.

- Se desea crear una nueva tabla, llamada EMPLE_DEPAR, con los datos de empleados APELLIDOS, SALARIO,

NOMBRE_DEPARTAMENTO, LOCALIDAD.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 🎯 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Activitat 1: Àlgebra Relacional, Composició Booleana i Traducció QBE a SQL ANSI
En un sistema de gestió d'un taller microinformàtic disposem de les taules relacionades:
- `CLIENTS` ($\underline{\text{id\_client}}$, nom, ciutat, telefon)
- `EQUIPS` ($\underline{\text{num\_serie}}$, marca, model, id\_client\_fk)
- `ORDRES` ($\underline{\text{id\_ordre}}$, num\_serie\_fk, data\_entrada, cost\_total, estat)

1. **Traducció d'Operacions d'Àlgebra Relacional:** Expresseu les següents operacions en termes d'àlgebra relacional teòrica (mitjançant els operadors $\sigma$ per a selecció, $\pi$ per a projecció i $\bowtie$ per a reunió natural / *join*):
   - Seleccionar els clients que resideixen a la ciutat de 'València' o 'Gandia'.
   - Mostrar el nom del client, la marca de l'equip i el cost total de les ordres amb estat 'Reparat'.
2. **Equivalència SQL ANSI:** Escriviu la consulta SQL equivalent exacta per a cadascuna de les operacions anteriors:
   ```sql
   -- Consulta 1: Selecció de clients per ciutat
   SELECT nom, ciutat, telefon 
   FROM CLIENTS 
   WHERE ciutat = 'València' OR ciutat = 'Gandia';

   -- Consulta 2: Multitaula amb INNER JOIN
   SELECT C.nom, E.marca, E.model, O.cost_total
   FROM CLIENTS C
   INNER JOIN EQUIPS E ON C.id_client = E.id_client_fk
   INNER JOIN ORDRES O ON E.num_serie = O.num_serie_fk
   WHERE O.estat = 'Reparat';
   ```
3. **Anàlisi de Predicats Booleans i Comodins:** Analitzeu el comportament dels següents criteris escrits a la fila "Criteris" d'una quadrícula QBE:
   - Camp `ciutat`: `COM "V*"` vs `COM "*a"` vs `COM "*castell*"`
   - Camp `cost_total`: `ENTRE 150 I 450`
   - Camp `data_entrada`: `< #01/01/2026# I (estat = 'Pendent' O estat = 'En diagnòstic')`

#### Activitat 2: Agrupaments Estadístics i Diferenciació Crítica: WHERE vs HAVING
Analitzeu la necessitat d'extreure mètriques de rendiment econòmic del taller:
1. **Diferència entre WHERE i HAVING:** Expliqueu per què la següent consulta SQL provoca un error fatal de compilació en el motor de base de dades i corregiu-la adequadament:
   ```sql
   -- Consulta Erronia:
   SELECT ciutat, AVG(cost_total) AS cost_mig
   FROM CLIENTS C
   INNER JOIN EQUIPS E ON C.id_client = E.id_client_fk
   INNER JOIN ORDRES O ON E.num_serie = O.num_serie_fk
   WHERE AVG(cost_total) > 200
   GROUP BY ciutat;
   ```
2. **Càlcul d'Agregats:** Donada una taula amb 12 ordres de reparació distribuïdes entre 3 tècnics:
   - Tècnic 1: 5 ordres (costos: 50 €, 120 €, 80 €, 200 €, 150 €).
   - Tècnic 2: 4 ordres (costos: 300 €, 450 €, 150 €, 100 €).
   - Tècnic 3: 3 ordres (costos: 40 €, 60 €, 80 €).
   - Calculeu manualment el resultat de les funcions `COUNT(*)`, `SUM(cost_total)`, `AVG(cost_total)` i `MAX(cost_total)` per a cadascun dels tècnics.
3. **Filtre de Grup:** Quins tècnics apareixeran si afegim el criteri `HAVING SUM(cost_total) >= 1000`?

#### Activitat 3: Camps Calculats Financers amb Lògica Condicional
En la facturació de serveis es requereix generar les dades fiscals en temps d'execució sense guardar redundància al disc:
1. **Fórmules de Camp:** Escriviu les expressions per a la quadrícula QBE (i SQL) que defineixin les següents columnes derivades:
   - `Base_Imposable: [Hores_Treball]*[Preu_Hora] + [Cost_Materials]`
   - `Descompte_Comercial: IIf([Base_Imposable] > 300; [Base_Imposable] * 0.05; 0)`
   - `Base_Liquidada: [Base_Imposable] - [Descompte_Comercial]`
   - `Import_IVA: [Base_Liquidada] * 0.21`
   - `Total_Factura: [Base_Liquidada] + [Import_IVA]`
2. **Justificació d'Eficiència:** Per què és una bona pràctica d'enginyeria de bases de dades no crear columnes físiques per a `Base_Liquidada` ni `Total_Factura` a les taules i calcular-les mitjançant consultes?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Creació Guiada d'una Consulta Multitaula a la Quadrícula QBE
1. Obriu **LibreOffice Base** o **Microsoft Access** sobre la base de dades de taller creada en les unitats anteriors.
2. Creeu una nova consulta en **Vista Disseny (QBE)**.
3. Afegiu les taules `CLIENTS`, `EQUIPS` i `ORDRES`. Comproveu que les línies de relació 1:N apareixen automàticament entre les claus.
4. Afegiu a la quadrícula els camps:
   - `CLIENTS.nom` (Ordenació: Ascendent)
   - `CLIENTS.telefon`
   - `EQUIPS.marca`
   - `EQUIPS.model`
   - `ORDRES.data_entrada`
   - `ORDRES.cost_total` (Criteri: `> 100`)
   - `ORDRES.estat` (Criteri: `'Reparat'`)
5. Executeu la consulta fent clic a **Executa la consulta (F5)** o el botó d'exclamació (!).
6. Canvieu a la **Vista SQL** i examineu la sentència `SELECT ... INNER JOIN ... WHERE` generada pel motor gràfic.

#### Repte 2: Consulta Paramètrica per a Filtratge Interactiu
1. En una consulta de selecció nova sobre la taula `ORDRES`, volem que l'usuari puga buscar feines pendents segons la data d'entrada sense haver de modificar el disseny de la consulta.
2. Al camp `data_entrada`, escriviu a la fila de Criteris:
   ```text
   >= [Introdueix la data mínima (DD/MM/AAAA):] I <= [Introdueix la data màxima:]
   ```
3. Al camp `estat`, escriviu:
   ```text
   [Introdueix l'estat a filtrar (Pendent / Reparat / Tots):]
   ```
4. Guardeu la consulta amb el nom `Cerca_Ordres_Per_Data_i_Estat`.
5. Feu doble clic per obrir-la, responeu als quadres de diàleg emergents i comproveu que la consulta filtra exactament els registres que coincideixen amb els paràmetres introduïts per teclat.

#### Repte 3: Creació i Execució Segura d'una Consulta d'Actualització i Archivament
1. **Consulta de Creació de Taula / Archivament:** Creeu una consulta per a copiar a una taula històrica totes les reparacions finalitzades fa més d'un any:
   ```sql
   -- Sintaxi en SQL per crear taula d'arxiu
   CREATE TABLE HISTORIC_ORDRES AS
   SELECT * FROM ORDRES
   WHERE estat = 'Lliurat' AND data_entrada < '2025-01-01';
   ```
2. **Consulta d'Actualització en Massa (UPDATE):** Suposem que a causa d'un increment de l'IPC cal incrementar el preu/hora de mà d'obra un 4,5% per a tots els tècnics de la categoria 'Sènior':
   ```sql
   UPDATE TECNICS
   SET preu_hora = preu_hora * 1.045
   WHERE categoria = 'Sènior';
   ```
3. A la interfície de consultes d'acció, observeu el missatge d'avís de confirmació abans de mutar les dades físiques i verifiqueu a la taula que els nous preus s'han gravat correctament.

---

### 📋 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Domini de Criteris i Àlgebra Relacional** | Construeix criteris booleans complexos amb comodins, intervals i tradueix amb exactitud entre quadrícula QBE i SQL ANSI. | Aplica correctament la majoria de criteris i operadors lògics, amb xicotets dubtes en comodins de text o delimitadors de dates (#). | Configura filtres senzills (igualtats i comparacions bàsiques) però es bloqueja amb expressions booleanes compostes (I/O). | No sap com afegir criteris a una consulta ni interpretar el funcionament d'un filtre. |
| **Camps Calculats i Funcions d'Agregació** | Formula camps calculats financers amb condicions lògiques i distingeix amb claredat absoluta l'ús de `WHERE` i `HAVING`. | Construeix camps calculats funcionals i consultes de resum amb `GROUP BY`, amb dubtes menors en la sintaxi de funcions condicionals. | Aconsegueix fer càlculs senzills (suma o multiplicació de dos camps) però confon filtres individuals amb filtres de grup. | Incapaç de crear un camp calculat o utilitzar funcions d'agrupament com SUM o COUNT. |
| **Consultes Multitaula i Consultes d'Acció** | Enllaça múltiples taules amb combinacions correctes i executa consultes d'acció (actualització/arxiu) amb verificació prèvia de seguretat. | Crea consultes multitaula funcionals i executa consultes d'actualització amb supervisió mínima. | Enllaça taules a la quadrícula però obté productes cartesians si les relacions no estan ben definides prèviament. | No comprèn el funcionament de les consultes d'unió multitaula ni les consultes d'acció. |
