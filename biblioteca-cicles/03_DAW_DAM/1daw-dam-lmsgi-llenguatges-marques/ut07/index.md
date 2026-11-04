---
layout: default
title: "UD7: Conversión y Adaptación de Documentos — XPath, JSONPath, XSLT y RSS/Atom — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT07"
prev_url: "../ut06/index.html"
prev_label: "⬅️ UD6"
next_url: "../ut08/index.html"
next_label: "UD8 ➡️"
---

# UD7: Conversión y Adaptación de Documentos — XPath, JSONPath, XSLT y RSS/Atom

Bienvenido/a a la **UD7: Conversión y Adaptación de Documentos — XPath, JSONPath, XSLT y RSS/Atom** del módulo profesional de **Lenguajes de Marcas y Sistemas de Gestión de Información** (1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI)).

En esta unidad encontrarás los contenidos teóricos, ejemplos prácticos, ejercicios resueltos y actividades de evaluación curricular desarrollados por el profesor **Manuel Alonso Argente**.

---

### 📑 Índice de Apartados y Actividades de la Unidad

- [**📋 7.0 Propuesta Didáctica: Conversión de documentos**](./ut0700.html)
- [**7.1 Introducción a la conversión de documentos**](./ut0701.html)
- [**7.2 Tecnologías de procesamiento de documentos**](./ut0702.html)
- [**7.3 Sintaxis de localización de datos: XPath y JSONPath**](./ut0703.html)
- [**7.4 Sintaxis y reglas de las especificaciones de conversión**](./ut0704.html)
- [**7.5 Creación de especificaciones de conversión**](./ut0705.html)
- [**7.6 Herramientas y casos prácticos de conversión**](./ut0706.html)

**Actividades Prácticas y Fichas de Trabajo:**

- [**✏️ ACT701 Ejercicios Conversión de documentos**](./act_act701.html)

---

# 📖 Vista Completa de la Unidad

## 7.0 Propuesta Didáctica — Conversión de documentos

# **Conversión de documentos**

## **Propuesta didáctica**

En esta UP trabajamos con el **RA5**: Realiza conversiones sobre documentos para el intercambio de información utilizando técnicas, lenguajes y herramientas de procesamiento.

## **Criterios de evaluación**

### **Respecto al RA5:**

| Código | Descripción | Peso (%) | Herramientas Evaluación |
| --- | --- | --- | --- |
| **CE5a** | Se ha identificado la necesidad de la conversión de documentos para el intercambio de la información. | 10% | EXA501 |
| **CE5b** | Se han establecido ámbitos de aplicación. | 10% | EXA501 |
| **CE5c** | Se han analizado las tecnologías implicadas y su modo de funcionamiento. | 10% | ACT701 (5%) -- EXA501 (95%) |
| **CE5d** | Se ha descrito la sintaxis específica utilizada en la conversión y adaptación de documentos para el intercambio de información. | 15% | ACT701 (10%) -- EXA501 (90%) |
| **CE5e** | Se han creado especificaciones de conversión. | 20% | ACT701 (10%) -- EXA501 (90%) |
| **CE5f** | Se han identificado y caracterizado herramientas específicas relacionadas con la conversión de documentos para el intercambio de información. | 10% | ACT701 (5%) -- EXA501 (95%) |
| **CE5g** | Se han realizado conversiones sobre documentos para el intercambio de información. | 25% | ACT701 (10%) -- EXA501 (90%) |

## **Contenidos**

### **Conversión de documentos:**

- Necesidad de la conversión de información. (CE5.a, CE5.b)

- Ámbitos de aplicación de la transformación de datos. (CE5.a, CE5.b)

- Tecnologías de procesamiento de documentos (XSLT, jq, scripts). (CE5.c, CE5.f)

- Sintaxis de localización de datos (XPath, JSONPath). (CE5.d)

- Sintaxis y reglas de las especificaciones de conversión. (CE5.d, CE5.e)

- Creación de especificaciones de conversión. (CE5.e)

- Herramientas de procesamiento y desarrollo. (CE5.f)

- Casos prácticos de conversión (estructural, de presentación web y exportación plana). (CE5.g)

**Cuestionario inicial**

1. ¿Qué es la conversión de documentos y para qué sirve?

1. ¿Por qué los sistemas actuales necesitan convertir datos entre distintos formatos?

1. ¿Qué es XSLT y para qué se utiliza?

1. ¿Qué es XPath y qué es JSONPath?

1. ¿Qué es una especificación de conversión?

1. ¿Qué herramienta de terminal conoces para procesar documentos JSON?

1. ¿Qué diferencias existen entre XML y JSON a la hora de procesarlos?

## **Programación de Aula (6h)**

Esta unidad se imparte en la tercera evaluación, a continuación de la UP06 (Validación de documentos). La unidad tiene una duración estimada de 6 horas lectivas repartidas en 6 sesiones de una hora, durante los días que se indican en el calendario (los días de clase son lunes, con una hora, y jueves, con dos horas). La sesión de evaluación del lunes 8 de marzo se cuenta dentro de esta unidad.

### **Calendario**

#### **Febrero 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | **6 🛑** | **7 🛑** |
| 8 | 9 | 10 | 11 | 12 | **13 🛑** | **14 🛑** |
| 15 | 16 | 17 | 18 | 19 | **20 🛑** | **21 🛑** |
| 22 | 23 | 24 | **25 📚** | 26 | **27 🛑** | **28 🛑** |

#### **Marzo 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| **1 📚** | 2 | 3 | **4 📚** | 5 | **6 🛑** | **7 🛑** |
| **8 📚** | 9 | 10 | 11 | 12 | **13 🛑** | **14 🛑** |
| 15 | 16 | **17 🛑** | **18 🛑** | **19 🛑** | **20 🛑** | **21 🛑** |
| 22 | 23 | 24 | **25 🛑** | **26 🛑** | **27 🛑** | **28 🛑** |
| **29 🛑** | **30 🛑** | **31 🛑** |  |  |  |  |

### **Sesiones**

| Sesión | Contenidos | Actividades | Criterios trabajados |
| --- | --- | --- | --- |
| 1 | 7.1 Introducción a la conversión de documentos | -- | CE5.a - CE5.b |
| 2 | 7.2 Tecnologías de procesamiento de documentos | ACT701 | CE5.c - CE5.f |
| 3 | 7.3 Sintaxis de localización de datos: XPath y JSONPath | ACT701 | CE5.d |
| 4 | 7.4 Sintaxis y reglas de las especificaciones de conversión | ACT701 | CE5.d - CE5.e |
| 5 | 7.5 Creación de especificaciones de conversión -- 7.6 Herramientas y casos prácticos | ACT701 | CE5.e - CE5.f - CE5.g |
| 6 | Evaluación de la unidad | EXA501 | CE5.a - CE5.b - CE5.c - CE5.d - CE5.e - CE5.f - CE5.g |

---

## 7.1 Introducción a la conversión de documentos

# **Introducción a la conversión de documentos**

En el desarrollo de software y la administración de sistemas modernos, la información rara vez permanece estática en un único lugar. Los datos fluyen constantemente entre servidores, bases de datos, aplicaciones móviles y navegadores web. Sin embargo, no todos estos sistemas "hablan" el mismo idioma estructural. Aquí es donde entra en juego la **conversión de documentos**.

## **El problema de la heterogeneidad de sistemas**

La **heterogeneidad** se refiere a la diversidad de tecnologías, lenguajes de programación, sistemas operativos y arquitecturas que conviven en el ecosistema informático actual.

Es extremadamente raro que una empresa utilice una única tecnología para todo. Lo habitual es encontrar:
- Sistemas *Legacy* (heredados), como un antiguo servidor bancario escrito en Java o COBOL que exporta datos estrictamente en **XML**.
- Aplicaciones modernas, como un *frontend* desarrollado en React o Vue.js que espera consumir datos ligeros en **JSON**.
- Bases de datos relacionales (SQL) conviviendo con bases de datos documentales (NoSQL como MongoDB).

**Ejemplo del problema:**
Imagina que el sistema de inventario de una tienda de ropa es antiguo y genera un catálogo diario en formato XML. Sin embargo, la nueva App móvil de la tienda está programada en React Native y requiere que los datos del catálogo lleguen en formato JSON para que la carga sea rápida. Si enviamos el XML directamente a la App móvil, esta no sabrá cómo interpretarlo nativamente de forma eficiente o el proceso será muy costoso en recursos para el teléfono. Existe una barrera de comunicación.

## **Ventajas y casos de uso comunes de la transformación de datos**

La conversión o transformación de datos actúa como un "traductor universal" en medio de esta heterogeneidad. Consiste en tomar un documento de origen, procesarlo aplicando una serie de reglas, y generar un documento de destino con un formato o estructura diferente.

**Ventajas principales:**
1. **Desacoplamiento:** Los sistemas no necesitan conocer cómo funciona el otro internamente; solo acuerdan un formato de intercambio.
2. **Seguridad y filtrado:** Permite eliminar datos sensibles. Podemos transformar un documento completo y generar uno nuevo que omita contraseñas o datos personales antes de enviarlo al cliente.
3. **Optimización:** Reducción del tamaño (peso) de los datos al eliminar etiquetas innecesarias o cambiar a formatos más ligeros.

**Casos de uso comunes:**
- **Microservicios:** Pequeñas aplicaciones independientes que se comunican entre sí. Un microservicio de pagos puede requerir datos en un formato específico distinto al microservicio de envíos.
- **Migraciones:** Al cambiar de un software a otro (por ejemplo, cambiar de un ERP antiguo a SAP), es necesario exportar toda la base de datos antigua y transformarla para que el nuevo sistema pueda importarla.

## **Ámbitos de aplicación**

La conversión de documentos es una tarea diaria en múltiples escenarios del sector IT:

### A. Integración B2B (Business-to-Business)

Cuando dos empresas diferentes necesitan intercambiar datos automáticamente.
* **Ejemplo:** Un proveedor de piezas de coche (Empresa A) envía diariamente su catálogo de productos. Su sistema lo exporta en XML. El taller mecánico (Empresa B) tiene un software de gestión moderno que solo admite importaciones en formato JSON o CSV. Se requiere un proceso intermedio (un *script* o una herramienta de integración) que convierta automáticamente el XML del proveedor al JSON que entiende el taller.

### B. Consumo de APIs REST

Las APIs son las puertas de acceso a los datos de servicios de terceros (como Google Maps, servicios del clima, pasarelas de pago).
* **Ejemplo:** Una aplicación hace una petición a la API de la AEMET para obtener el clima. La API devuelve un documento JSON complejo y enorme. La aplicación transforma ese JSON inmenso, extrayendo únicamente la temperatura actual y la probabilidad de lluvia, creando un documento JSON mucho más pequeño que se enviará al *smartwatch* del usuario.

### C. Presentación web de datos

A menudo, la información se almacena como "datos puros" sin ningún tipo de estilo visual.
* **Ejemplo clásico (XSLT a HTML):** Tenemos un archivo `factura.xml` que solo contiene datos (números, conceptos, totales). Utilizando una tecnología llamada XSLT (que aprenderemos en esta unidad), transformamos esos datos puros en un archivo `factura.html` que contiene tablas, negritas, colores y el logotipo de la empresa, listo para ser visualizado en un navegador web e impreso por el cliente.

### D. Publicación multicanal

El principio de "escribir una vez, publicar en todas partes".
* **Ejemplo:** Un periódico digital redacta sus artículos en un formato XML neutro. A partir de ese único archivo de origen, realizan conversiones simultáneas:
    - Una transformación genera el HTML para la página web.
    - Otra transformación genera el JSON para la App móvil.
    - Otra transformación extrae solo el título y el resumen para enviarlo automáticamente a redes sociales.

## **Evolución de los formatos de intercambio**

Históricamente, la forma en la que los sistemas intercambian información ha evolucionado buscando siempre mayor eficiencia y facilidad de uso para los desarrolladores.

### La era de la prevalencia de XML

A principios de los 2000, **XML (eXtensible Markup Language)** era el rey absoluto indiscutible. Protocolos como SOAP dependían exclusivamente de él.
* **Pros:** Altamente estructurado, estricto, permite validación exhaustiva mediante esquemas (XSD), ideal para sistemas empresariales complejos e institucionales.
* **Contras:** Muy verboso (repite las etiquetas de apertura y cierre constantemente), lo que genera archivos muy pesados. Difícil de leer nativamente en lenguajes como JavaScript.

### El predominio actual de JSON

Con el auge de la Web 2.0, las aplicaciones de página única (SPA) y el desarrollo en JavaScript, nació **JSON (JavaScript Object Notation)**. Hoy en día es el estándar de facto para la mayoría de las APIs web (REST).
* **Pros:** Muy ligero, elimina la redundancia de las etiquetas, es extremadamente fácil de leer para humanos y su sintaxis es código JavaScript nativo (lo que hace que los navegadores lo procesen de forma casi instantánea).
* **Contras:** Menos herramientas de validación estricta nativa en comparación con XML, no soporta atributos de forma natural como XML.

### 💡 Ejemplo comparativo: El mismo dato en XML y JSON

Imagina que queremos transmitir la información de un empleado. Observa la diferencia de sintaxis y verbosidad:

**En formato XML:**

```html
<empleados>
    <empleado id="104">
        <nombre>Laura</nombre>
        <apellidos>García Pérez</apellidos>
        <departamento>Informática</departamento>
        <habilidades>
            <habilidad>Python</habilidad>
            <habilidad>React</habilidad>
        </habilidades>
    </empleado>
</empleados>
```

**En formato JSON equivalente:**

```html
{
  "empleados": [
    {
      "id": 104,
      "nombre": "Laura",
      "apellidos": "García Pérez",
      "departamento": "Informática",
      "habilidades": ["Python", "React"]
    }
  ]
}
```

Como se puede observar, JSON prescinde de las etiquetas de cierre (`</nombre>`), utilizando en su lugar una estructura basada en llaves `{}` para objetos y corchetes `[]` para listas (arrays). Esto explica por qué en la actualidad, cuando el tamaño del mensaje y la velocidad de procesamiento en la web son críticos, la conversión **de sistemas antiguos (XML) a sistemas modernos (JSON)** es una de las tareas más demandadas.

---

## 7.2 Tecnologías de procesamiento de documentos

# **Tecnologías de procesamiento de documentos**

Para convertir documentos entre formatos es necesario disponer de tecnologías capaces de **leer un documento de origen, aplicar unas reglas de transformación y generar el documento de destino**. En este apartado vamos a identificar y comparar las principales tecnologías implicadas en el procesamiento de datos:

- **XSLT**, para transformaciones de XML.

- **jq**, para el procesamiento de JSON desde la terminal.

- **Scripts** (Python, Node.js…) como alternativa generalista.

## **XSLT (XML Stylesheet Language Transformations)**

XSLT es un lenguaje de transformación basado en XML que permite convertir un documento XML en otro documento (XML, HTML, texto plano…). Fue diseñado por el W3C y es el estándar histórico para la conversión de documentos XML.

Funciona mediante **plantillas** (templates): cada regla indica qué elementos del documento de origen procesar y cómo transformarlos.

> **📌 Ejemplo: convertir un catálogo XML en HTML**
> 

> Documento de origen `catalogo.xml`:

> **📌 XML**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<catalogo>
    <producto id="p1">
        <nombre>Teclado</nombre>
        <precio>25.50</precio>
    </producto>
    <producto id="p2">
        <nombre>Ratón</nombre>
        <precio>12.00</precio>
    </producto>
</catalogo>
```

Hoja de estilos `catalogo.xsl`:

> **📌 XSLT**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8"/>

    <xsl:template match="/">
        <html>
            <body>
                <table border="1">
                    <tr><th>Nombre</th><th>Precio</th></tr>
                    <xsl:for-each select="catalogo/producto">
                        <tr>
                            <td><xsl:value-of select="nombre"/></td>
                            <td><xsl:value-of select="precio"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
```

El resultado es un documento HTML con una tabla con los productos del catálogo.

### **Elementos principales de XSLT**

- `<xsl:stylesheet>` → elemento raíz de la hoja de estilos.

- `<xsl:output>` → define el formato de salida (xml, html, text).

- `<xsl:template match="...">` → define una regla de transformación.

- `<xsl:apply-templates>` → procesa los elementos hijos que coincidan con otras plantillas.

- `<xsl:value-of select="...">` → inserta el valor de un elemento o atributo.

- `<xsl:for-each select="...">` → itera sobre un conjunto de nodos.

- `<xsl:if test="...">` → ejecuta un bloque si se cumple una condición.

- `<xsl:choose>` / `<xsl:when>` / `<xsl:otherwise>` → condicional múltiple.

### **Versiones**

- **XSLT 1.0 (1999):** la más extendida y compatible; soportada por todos los procesadores.

- **XSLT 2.0 (2007):** añade tipos, agrupaciones y más funciones (XPath 2.0).

- **XSLT 3.0 (2017):** incorpora transformaciones en streaming, mapas y JSON.

## **jq (JSON Query)**

jq es una herramienta de línea de comandos, ligera y de código abierto, diseñada específicamente para **filtrar, transformar y procesar documentos JSON**. Es el equivalente práctico de XSLT para el ecosistema JSON y es imprescindible en el trabajo con APIs REST.

> **📌 Ejemplo: filtrar datos de un JSON**
> 

> Documento `empleados.json`:

> **📌 JSON**
> 

```html
{
  "empleados": [
    { "nombre": "Ana",   "departamento": "Informática", "salario": 3000 },
    { "nombre": "Luis",  "departamento": "Ventas",      "salario": 2000 },
    { "nombre": "Elena", "departamento": "Informática", "salario": 3500 }
  ]
}
```

Comandos:

```html
# Mostrar todos los nombres
jq '.empleados[].nombre' empleados.json

# Filtrar los de Informática
jq '.empleados[] | select(.departamento == "Informática")' empleados.json

# Generar un resumen (nombre y salario)
jq '.empleados[] | {nombre, salario}' empleados.json

# Calcular el salario medio
jq '[.empleados[].salario] | add / length' empleados.json
```

### **Características de jq**

- Filtros encadenados con el operador pipe `|`.

- Selección condicional mediante `select(condición)`.

- Construcción de nuevos objetos con `{...}` y arrays con `[...]`.

- Operaciones numéricas y de agregación (`add`, `length`, `map`…).

- Lectura de datos desde archivos o desde la entrada estándar (`cat datos.json | jq ...`).

## **Scripts de procesamiento**

Para conversiones más complejas o que requieren lógica de negocio, se suelen utilizar **lenguajes de programación** con bibliotecas específicas:

- **Python:** `xml.etree.ElementTree`, `lxml`, `json` y `csv`.

- **Node.js:** módulos nativos `fs`, `xml2js`, `csv-parser`.

Estos scripts permiten combinar lectura, transformación y escritura de documentos con toda la potencia de un lenguaje de propósito general.

## **Comparativa de tecnologías**

|  | XSLT | jq | Scripts (Python/Node) |
| --- | --- | --- | --- |
| Formato de origen | XML | JSON | Cualquiera |
| Sintaxis | XML (declarativa) | Filtros de terminal | Código de programación |
| Curva de aprendizaje | Media | Baja | Alta |
| Uso típico | XML → XML/HTML | JSON → JSON/CSV | Procesos complejos |
| Idoneidad en DAW | Formativa / legados | APIs y terminal | Proyectos reales |

---

## 7.3 Sintaxis de localización de datos: XPath y JSONPath

# **Sintaxis de localización de datos: XPath y JSONPath**

Para transformar documentos es imprescindible poder **localizar y seleccionar partes concretas** de los datos de origen. Cada ecosistema dispone de su propio lenguaje de localización:

- **XPath** para XML (utilizado también dentro de XSLT).

- **JSONPath** para JSON.

Ambos lenguajes comparten una idea común: describir la **ruta** que hay que seguir dentro de la estructura del documento para llegar a los nodos o valores deseados.

## **XPath**

XPath es un lenguaje de consulta del W3C que permite navegar por los elementos y atributos de un documento XML. Es el mecanismo de selección que utiliza XSLT.

### **Rutas de localización**

Una expresión XPath describe la ruta desde un nodo hasta otro. Los elementos se separan con `/` y los atributos se indican con `@`.

Partiendo de este documento:

> **📌 XML**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<catalogo>
    <producto id="p1" categoria="perifericos">
        <nombre>Teclado</nombre>
        <precio>25.50</precio>
    </producto>
    <producto id="p2" categoria="perifericos">
        <nombre>Ratón</nombre>
        <precio>12.00</precio>
    </producto>
    <producto id="p3" categoria="monitores">
        <nombre>Monitor 24"</nombre>
        <precio>199.90</precio>
    </producto>
</catalogo>
```

Algunas expresiones XPath útiles:

| Expresión | Resultado |
| --- | --- |
| `/catalogo/producto` | Todos los elementos `producto`. |
| `/catalogo/producto[1]` | El primer producto. |
| `/catalogo/producto[@id='p2']` | El producto con `id="p2"`. |
| `/catalogo/producto[@categoria='monitores']` | Los productos de la categoría `monitores`. |
| `/catalogo/producto/precio` | Todos los elementos `precio`. |
| `/catalogo/producto/precio/text()` | Los valores de texto de los precios. |
| `/catalogo/producto/@id` | Todos los atributos `id`. |
| `//producto` | Todos los productos en cualquier nivel. |
| `/catalogo/producto[precio > 100]` | Los productos con precio superior a 100. |

### **Operadores y funciones habituales**

- **Comparación:** `=`, `!=`, `<`, `>`, `<=`, `>=`.

- **Lógicos:** `and`, `or`, `not()`.

- **Funciones:** `count()`, `concat()`, `contains()`, `string()`, `number()`.

## **JSONPath**

JSONPath es el lenguaje equivalente para documentos JSON. Fue inspirado por XPath y sigue unas convenciones similares, pero adaptadas a la sintaxis de JSON (objetos `{}` y arrays `[]`).

Partiendo de este documento:

> **📌 JSON**
> 

```html
{
  "catalogo": {
    "producto": [
      { "id": "p1", "categoria": "perifericos", "nombre": "Teclado", "precio": 25.50 },
      { "id": "p2", "categoria": "perifericos", "nombre": "Ratón", "precio": 12.00 },
      { "id": "p3", "categoria": "monitores", "nombre": "Monitor 24", "precio": 199.90 }
    ]
  }
}
```

Algunas expresiones JSONPath útiles:

| Expresión | Resultado |
| --- | --- |
| `$.catalogo.producto` | El array de productos. |
| `$.catalogo.producto[0]` | El primer producto. |
| `$.catalogo.producto[*].nombre` | Todos los nombres. |
| `$..nombre` | Todos los `nombre` en cualquier nivel. |
| `$.catalogo.producto[?(@.precio > 100)]` | Los productos con precio superior a 100. |
| `$.catalogo.producto[?(@.categoria == 'monitores')]` | Los productos de la categoría `monitores`. |
| `$.catalogo.producto.length` | El número de productos. |

### **Sintaxis de los filtros**

Los filtros de JSONPath se escriben entre corchetes y comienzan con `?`:

- `[?(@.campo == valor)]` → igualdad.

- `[?(@.campo != valor)]` → desigualdad.

- `[?(@.campo > valor)]` → comparación numérica.

- `[?(@.campo =~ /regex/)]` → expresión regular.

### **jq como alternativa a JSONPath**

En la práctica, la herramienta `jq` ofrece una sintaxis muy similar a JSONPath pero más potente. Por ejemplo, el filtro equivalente con jq sería:

```html
jq '.catalogo.producto[] | select(.precio > 100)' catalogo.json
```

## **XPath frente a JSONPath**

| Concepto | XPath | JSONPath |
| --- | --- | --- |
| Formato | XML | JSON |
| Separador de niveles | `/` | `.` |
| Acceso a arrays | `[1]` | `[1]` |
| Filtros | `[condición]` | `[?(condición)]` |
| Comodín | `*` | `*` o `[*]` |
| "En cualquier nivel" | `//` | `..` |
| Atributos | `@nombre` | no existen (solo JSON) |

---

## 7.4 Sintaxis y reglas de las especificaciones de conversión

# **Sintaxis y reglas de las especificaciones de conversión**

Una **especificación de conversión** es el conjunto de reglas que determina cómo se transforma un documento de origen en un documento de destino. En XML, la especificación es la **hoja de estilos XSLT**; en JSON, la especificación se expresa mediante **filtros jq** o scripts.

Toda especificación de conversión responde a tres preguntas:

- **¿Qué se selecciona?** → localización de los datos de origen (XPath / JSONPath).

- **¿Cómo se transforma?** → reglas que generan la estructura de destino.

- **¿Qué se obtiene?** → el documento de salida.

## **Estructura de una especificación XSLT**

Una hoja de estilos XSLT es, a su vez, un documento XML. Su estructura básica es:

```html
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml"/>

    <xsl:template match="/">
        <!-- contenido de salida -->
    </xsl:template>

</xsl:stylesheet>
```

### **Reglas principales**

#### **1. Selección de nodos con `match`**

Cada plantilla indica qué nodos del documento de origen va a procesar:

```html
<xsl:template match="/">       <!-- el documento completo -->
<xsl:template match="producto"> <!-- todos los elementos producto -->
<xsl:template match="precio">   <!-- todos los elementos precio -->
```

#### **2. Generación de salida con `apply-templates` y `value-of`**

- `<xsl:apply-templates select="...">` delega el procesamiento de los hijos en sus plantillas correspondientes.

- `<xsl:value-of select="...">` inserta el valor de texto de un nodo o atributo.

```html
<xsl:template match="producto">
    <tr>
        <td><xsl:value-of select="nombre"/></td>
        <td><xsl:value-of select="@id"/></td>
    </tr>
</xsl:template>
```

#### **3. Iteración con `for-each`**

Permite repetir un bloque de salida por cada nodo seleccionado:

```html
<xsl:for-each select="catalogo/producto">
    <p><xsl:value-of select="nombre"/> -- <xsl:value-of select="precio"/> €</p>
</xsl:for-each>
```

#### **4. Condicionales con `if` y `choose`**

```html
<xsl:if test="precio > 100">
    <td class="caro"><xsl:value-of select="precio"/></td>
</xsl:if>
```

```html
<xsl:choose>
    <xsl:when test="precio > 100">premium</xsl:when>
    <xsl:otherwise>estandar</xsl:otherwise>
</xsl:choose>
```

## **Reglas de una transformación jq**

En jq, la especificación es una **cadena de filtros** encadenados con el operador pipe `|`. Cada filtro recibe la salida del anterior:

```html
jq '.catalogo.producto[] 
    | select(.precio > 50) 
    | {nombre, precio}' catalogo.json
```

Las construcciones básicas que actúan como reglas de conversión son:

- **`select(condición)`** → filtra los objetos que cumplen la condición.

- **`{campo: .origen}`** → construye un nuevo objeto (especificación de salida).

- **`map(filtro)`** → aplica un filtro a todos los elementos de un array.

- **`if condición then ... else ... end`** → condicional.

- **`. | length`, `. | add`** → funciones de agregación.

## **Reglas generales de buena especificación**

Independientemente de la tecnología, una especificación de conversión debe:

- **Ser declarativa**: describir *qué* se quiere obtener, no *cómo* paso a paso.

- **Cubrir todos los casos del documento de origen**: pensar en elementos opcionales, vacíos o repetidos.

- **Definir el formato de salida** de forma explícita (xml, html, text, json, csv).

- **Ser probada contra datos reales**: la validación previa del documento de origen (UP06) reduce errores de conversión.

- **Mantenerse documentada**: una especificación sin comentarios es difícil de evolucionar.

---

## 7.5 Creación de especificaciones de conversión

# **Creación de especificaciones de conversión**

Crear una especificación de conversión es un proceso **metódico** que sigue varios pasos. No consiste en escribir reglas al azar, sino en diseñar primero la transformación y después implementarla con la tecnología elegida.

## **Pasos para crear una especificación**

### **1. Analizar el documento de origen**

Identificar la estructura real del documento que se quiere transformar: elementos, atributos, repeticiones y opcionalidades.

### **2. Definir el documento de destino**

Decidir el formato de salida (XML, HTML, JSON, CSV…) y su estructura esperada: qué campos, en qué orden y con qué transformaciones.

### **3. Establecer las reglas de transformación**

Conectar origen y destino: qué elemento de origen produce cada parte de la salida, qué valores se filtran y qué condiciones se aplican.

### **4. Implementar y probar**

Escribir la especificación (XSLT o jq) y probarla contra ejemplos reales, corrigiendo los errores que aparezcan.

## **Ejemplo guiado: de XML a HTML**

Partimos de un catálogo de productos en XML y queremos generar una página HTML con una tabla ordenada.

### **Origen: `catalogo.xml`**

> **📌 XML**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<catalogo>
    <producto id="p1" categoria="perifericos">
        <nombre>Teclado</nombre>
        <precio>25.50</precio>
    </producto>
    <producto id="p2" categoria="perifericos">
        <nombre>Ratón</nombre>
        <precio>12.00</precio>
    </producto>
    <producto id="p3" categoria="monitores">
        <nombre>Monitor 24"</nombre>
        <precio>199.90</precio>
    </producto>
</catalogo>
```

### **Especificación: `catalogo.xsl`**

La especificación crea un HTML con una cabecera y una tabla. Cada `producto` genera una fila, y se aplica un estilo distinto a los productos con precio superior a 100 €.

> **📌 XSLT**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8"/>

    <xsl:template match="/">
        <html>
            <head><title>Catálogo</title></head>
            <body>
                <h1>Catálogo de productos</h1>
                <table border="1">
                    <tr><th>ID</th><th>Nombre</th><th>Categoría</th><th>Precio</th></tr>
                    <xsl:for-each select="catalogo/producto">
                        <tr>
                            <td><xsl:value-of select="@id"/></td>
                            <td><xsl:value-of select="nombre"/></td>
                            <td><xsl:value-of select="@categoria"/></td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="precio &gt; 100">
                                        <b><xsl:value-of select="precio"/> €</b>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="precio"/> €
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
```

Nota: en XSLT el carácter `>` debe escribirse como `&gt;` dentro de los atributos `test`.

### **Conversión**

Con el procesador Saxon (o `xsltproc` en Linux):

```html
xsltproc catalogo.xsl catalogo.xml > catalogo.html
```

El resultado es un HTML completo, listo para abrir en el navegador.

## **Ejemplo guiado: de XML a JSON**

### **Origen: `empleados.xml`**

> **📌 XML**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<empleados>
    <empleado id="104">
        <nombre>Laura</nombre>
        <apellidos>García Pérez</apellidos>
        <departamento>Informática</departamento>
    </empleado>
    <empleado id="105">
        <nombre>Carlos</nombre>
        <apellidos>Ruiz López</apellidos>
        <departamento>Ventas</departamento>
    </empleado>
</empleados>
```

### **Especificación: `empleados.xsl`**

La especificación genera un documento JSON equivalente, transformando cada `empleado` en un objeto del array `empleados`.

> **📌 XSLT**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"/>

    <xsl:template match="/">
        <xsl:text>{"empleados": [</xsl:text>
        <xsl:for-each select="empleados/empleado">
            <xsl:text>{"id": "</xsl:text>
            <xsl:value-of select="@id"/>
            <xsl:text>", "nombre": "</xsl:text>
            <xsl:value-of select="concat(nombre, ' ', apellidos)"/>
            <xsl:text>", "departamento": "</xsl:text>
            <xsl:value-of select="departamento"/>
            <xsl:text>"}</xsl:text>
            <xsl:if test="position() != last()"><xsl:text>, </xsl:text></xsl:if>
        </xsl:for-each>
        <xsl:text>]}</xsl:text>
    </xsl:template>

</xsl:stylesheet>
```

### **Resultado**

```html
{"empleados": [{"id": "104", "nombre": "Laura García Pérez", "departamento": "Informática"}, {"id": "105", "nombre": "Carlos Ruiz López", "departamento": "Ventas"}]}
```

## **Ejemplo guiado: de JSON a CSV con jq**

### **Origen: `ventas.json`**

> **📌 JSON**
> 

```html
{
  "ventas": [
    { "producto": "Teclado", "unidades": 5, "precio": 25.50 },
    { "producto": "Ratón", "unidades": 10, "precio": 12.00 },
    { "producto": "Monitor 24", "unidades": 2, "precio": 199.90 }
  ]
}
```

### **Especificación con jq**

La especificación selecciona cada venta, calcula el importe total y genera una línea CSV (separada por comas) con encabezado.

```html
jq -r '
  ["producto", "unidades", "precio", "total"],
  (.ventas[] | [.producto, .unidades, .precio, (.unidades * .precio)])
  | @csv
' ventas.json > ventas.csv
```

### **Resultado**

```html
"producto","unidades","precio","total"
"Teclado",5,25.5,127.5
"Ratón",10,12,120
"Monitor 24",2,199.9,399.8
```

La opción `-r` de jq genera una salida en texto sin comillas y `@csv` formatea cada fila como CSV.

---

## 7.6 Herramientas y casos prácticos de conversión

# **Herramientas y casos prácticos de conversión**

## **Herramientas de procesamiento**

### **Para XML / XSLT**

- **Saxon:** el procesador XSLT más completo; soporta XSLT 1.0, 2.0 y 3.0.

- **xsltproc:** procesador XSLT 1.0 de línea de comandos, estándar en Linux/macOS.

- **xmllint:** utilidad para validar y procesar documentos XML desde la terminal.

- **Oxygen XML Editor:** editor profesional con procesamiento XSLT integrado.

- **Herramientas W3C online** para validación y transformaciones sencillas.

### **Para JSON**

- **jq:** herramienta de terminal para filtrar y transformar JSON.

- **jqPlay / JSONPath Online:** validadores y probadores de expresiones en el navegador.

- **AJV:** validador de JSON Schema (visto en la UP06).

- **Validación JSON Schema integrada en VSCode.**

### **Para scripts generales**

- **Python:** bibliotecas `xml.etree.ElementTree`, `lxml`, `json` y `csv`.

- **Node.js:** módulos `fs`, `xml2js`, `csv-parser`.

## **Casos prácticos**

### **Caso 1: Conversión estructural (XML → XML)**

Adaptar la estructura de un documento XML a otro esquema distinto. Ejemplo: renombrar elementos y reorganizar su orden mediante plantillas XSLT.

```html
<xsl:template match="cliente">
    <customer>
        <name><xsl:value-of select="nombre"/></name>
        <id><xsl:value-of select="@codigo"/></id>
    </customer>
</xsl:template>
```

### **Caso 2: Conversión de presentación web (XML → HTML)**

Transformar datos puros en una página web con formato (tablas, listas, estilos). Es el caso clásico de XSLT a HTML visto en el apartado 7.5.

```html
xsltproc catalogo.xsl catalogo.xml > catalogo.html
```

### **Caso 3: Interoperabilidad XML → JSON**

Hacer que sistemas antiguos (XML) y aplicaciones modernas (JSON) compartan información. Se consigue con una hoja XSLT de salida de texto o con scripts de Python/Node.

```html
xsltproc empleados.xsl empleados.xml > empleados.json
```

### **Caso 4: Exportación plana (JSON → CSV)**

Generar ficheros tabulares a partir de datos JSON para su importación en hojas de cálculo o bases de datos.

```html
jq -r '["producto","total"], (.ventas[] | [.producto, (.unidades * .precio)]) | @csv' ventas.json > ventas.csv
```

## **Flujo de trabajo recomendado**

1. **Validar** el documento de origen (DTD/XSD/JSON Schema, UP06).

1. **Analizar** la estructura real del origen.

1. **Diseñar** el documento de destino.

1. **Escribir** la especificación de conversión.

1. **Probar** con datos reales y comprobar la salida.

1. **Automatizar** el proceso (scripts, cron, CI/CD) para conversiones periódicas.

---

## ✏️ Actividades y Prácticas de la Unidad


---

### Actividad Práctica ACT701 — Ejercicios Conversión de documentos

# **Ejercicios Conversión de documentos**

## **Actividad 1 - Análisis de casos de uso**

> **📌 Enunciado**
> 

> 1. Lee el apartado 7.1 Introducción a la conversión de documentos.

> 1. Identifica en cada caso de uso (integración B2B, consumo de APIs REST, presentación web, publicación multicanal) el **formato de origen**, el **formato de destino** y la **tecnología de conversión** que usarías.    3. Escribe dos ejemplos reales más (de tu entorno o de noticias de actualidad) en los que sea necesaria una conversión de documentos.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

- **B2B:** origen XML (catálogo del proveedor) → destino JSON/CSV (software del taller) → script o herramienta de integración.

- **APIs REST:** origen JSON (respuesta de la API) → destino JSON reducido → jq o script.

- **Presentación web:** origen XML (factura) → destino HTML → XSLT.

- **Publicación multicanal:** origen XML neutro → destinos HTML, JSON y texto → XSLT + scripts.

</details>

## **Actividad 2 - Primera conversión con XSLT y jq**

> **📌 Enunciado**
> 

> 1. Instala el procesador `xsltproc` (o Saxon) y la herramienta `jq` en tu equipo.

> 1. Crea el archivo `catalogo.xml` con dos productos.

> 1. Crea una hoja de estilos `catalogo.xsl` que genere un HTML con una lista.

> 1. Ejecuta la conversión y abre el resultado en el navegador.

> 1. Con jq, muestra los nombres de los productos del JSON del apartado 7.2 y guarda la salida en un archivo.

<details markdown="1">

<summary>💡 Solució</summary>

```html
xsltproc catalogo.xsl catalogo.xml > catalogo.html
jq '.empleados[].nombre' empleados.json > nombres.txt
```

</details>

## **Actividad 3 - Comparativa de tecnologías**

> **📌 Enunciado**
> 

> Realiza una comparativa razonada entre **XSLT** y **jq** respondiendo a las siguientes cuestiones:

> 1. ¿Qué formato de origen procesa cada una?

> 1. ¿Cuál es más adecuado para transformar un XML en HTML?

> 1. ¿Cuál es más adecuado para procesar la respuesta de una API REST?

> 1. ¿En qué situaciones usarías un script de Python o Node.js en lugar de ambos?

> Justifica cada respuesta con un argumento.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

- XSLT procesa XML; jq procesa JSON.

- XSLT es el adecuado para XML → HTML (es su caso clásico).

- jq es el adecuado para las respuestas JSON de una API REST.

- Un script es útil cuando la conversión requiere lógica de negocio, múltiples fuentes o pasos que no son expresables de forma declarativa.

</details>

## **Actividad 4 - Gymkhana XPath y JSONPath**

> **📌 Enunciado**
> 

> Dado el catálogo del apartado 7.3, escribe las expresiones que permitan:

> 1. Seleccionar todos los productos con XPath.

> 1. Seleccionar el precio del segundo producto con XPath.

> 1. Seleccionar los productos de la categoría `perifericos` con XPath.

> 1. Seleccionar todos los nombres de los productos con JSONPath.

> 1. Seleccionar los productos con precio superior a 15 con JSONPath.

> 1. Seleccionar el producto con `id` igual a `p2` con JSONPath.

<details markdown="1">

<summary>💡 Solució</summary>

```html
1. /catalogo/producto
2. /catalogo/producto[2]/precio
3. /catalogo/producto[@categoria='perifericos']
4. $.catalogo.producto[*].nombre
5. $.catalogo.producto[?(@.precio > 15)]
6. $.catalogo.producto[?(@.id == 'p2')]
```

</details>

## **Actividad 5 - Especificación con condicionales e iteraciones**

> **📌 Enunciado**
> 

> A partir del catálogo de productos, crea una especificación XSLT que genere un documento HTML con las siguientes condiciones:

> 1. Una tabla con una fila por producto (iteración con `for-each`).

> 1. El precio se muestra en negrita si es superior a 100 € (`choose`/`when`).

> 1. Los productos de la categoría `monitores` llevan la celda de categoría con un color de fondo distinto (`if`).

> Crea el XML de prueba con al menos tres productos que cubran todos los casos.

<details markdown="1">

<summary>💡 Solució</summary>

```html
<xsl:for-each select="catalogo/producto">
    <tr>
        <td><xsl:value-of select="@id"/></td>
        <td><xsl:value-of select="nombre"/></td>
        <td>
            <xsl:if test="@categoria = 'monitores'">
                <xsl:attribute name="style">background-color: #ffe0b2;</xsl:attribute>
            </xsl:if>
            <xsl:value-of select="@categoria"/>
        </td>
        <td>
            <xsl:choose>
                <xsl:when test="precio &gt; 100">
                    <b><xsl:value-of select="precio"/> €</b>
                </xsl:when>
                <xsl:otherwise><xsl:value-of select="precio"/> €</xsl:otherwise>
            </xsl:choose>
        </td>
    </tr>
</xsl:for-each>
```

</details>

## **Actividad 6 - XML masivo a HTML**

> **📌 Enunciado**
> 

> 1. Genera un archivo `factura.xml` con al menos **diez líneas** de factura (cada una con concepto, cantidad y precio).

> 1. Crea la hoja XSLT que genere una página HTML con:

>   - la cabecera de la factura (número, fecha, cliente),

>   - una tabla con las líneas,

>   - el total de la factura calculado (puedes usar `sum` o un script externo).

> 1. Ejecuta la conversión con `xsltproc` y valida que el HTML se visualiza correctamente.

<details markdown="1">

<summary>💡 Solució</summary>

```html
xsltproc factura.xsl factura.xml > factura.html
open factura.html
```

Con XSLT 1.0 el total puede calcularse mediante la función `sum()` sobre una variable:

```html
<xsl:variable name="total" select="sum(factura/linea/precio * factura/linea/cantidad)"/>
```

</details>

## **Actividad 7 - JSON a CSV**

> **📌 Enunciado**
> 

> Dado el archivo `ventas.json` con al menos cinco ventas (producto, unidades, precio):

> 1. Escribe un filtro jq que genere un CSV con las columnas `producto`, `unidades`, `precio` y `total`.

> 1. Añade un segundo filtro que solo incluya las ventas cuyo total sea mayor que 50 €.

> 1. Guarda el resultado en `ventas_filtradas.csv` y comprueba el contenido.

<details markdown="1">

<summary>💡 Solució</summary>

```html
jq -r '
  ["producto", "unidades", "precio", "total"],
  (.ventas[] | select((.unidades * .precio) > 50)
             | [.producto, .unidades, .precio, (.unidades * .precio)])
  | @csv
' ventas.json > ventas_filtradas.csv
```

</details>

## **Actividad 8 - Práctica final: múltiples conversiones**

> **📌 Enunciado**
> 

> Partiendo de un **mismo documento de origen** (`catalogo.xml` con al menos cinco productos), diseña y ejecuta **tres conversiones distintas**:

> 1. **XML → HTML:** página web con la tabla de productos (presentación).

> 1. **XML → JSON:** documento JSON equivalente para consumir desde una App (interoperabilidad).

> 1. **XML → CSV:** fichero plano con los campos principales para importar en una hoja de cálculo (exportación plana).

> Documenta en un pequeño informe cada especificación creada, el comando utilizado y la salida obtenida.

<details markdown="1">

<summary>💡 Solució</summary>

```html
# 1. XML → HTML
xsltproc catalogo_html.xsl catalogo.xml > catalogo.html

# 2. XML → JSON
xsltproc catalogo_json.xsl catalogo.xml > catalogo.json

# 3. XML → CSV (mediante XSLT de salida de texto o con Python)
python3 convertir_csv.py catalogo.xml catalogo.csv
```

</details>
