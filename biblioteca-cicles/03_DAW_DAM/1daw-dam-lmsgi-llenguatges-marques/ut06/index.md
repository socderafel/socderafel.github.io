---
layout: default
title: "UD6: Validación de Documentos XML y JSON — DTD y XML Schema (XSD) — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT06"
prev_url: "../ut05/index.html"
prev_label: "⬅️ UD5"
next_url: "../ut07/index.html"
next_label: "UD7 ➡️"
---

# UD6: Validación de Documentos XML y JSON — DTD y XML Schema (XSD)

Bienvenido/a a la **UD6: Validación de Documentos XML y JSON — DTD y XML Schema (XSD)** del módulo profesional de **Lenguajes de Marcas y Sistemas de Gestión de Información** (1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI)).

En esta unidad encontrarás los contenidos teóricos, ejemplos prácticos, ejercicios resueltos y actividades de evaluación curricular desarrollados por el profesor **Manuel Alonso Argente**.

---

### 📑 Índice de Apartados y Actividades de la Unidad

- [**📋 6.0 Propuesta Didáctica: Validación de documentos**](./ut0600.html)
- [**6.1 Descripción de la información y sus reglas**](./ut0601.html)
- [**6.2 Tecnologías para definir documentos**](./ut0602.html)
- [**6.3 Estructura y Sintaxis de las descripciones**](./ut0603.html)
- [**6.4 Creación de descripciones de documentos**](./ut0604.html)
- [**6.5 Uso de descripciones para validar documentos**](./ut0605.html)
- [**6.6 Herramientas específicas para la validación**](./ut0606.html)

**Actividades Prácticas y Fichas de Trabajo:**

- [**✏️ ACT601 Ejercicios Validación de documentos**](./act_act601.html)

---

# 📖 Vista Completa de la Unidad

## 6.0 Propuesta Didáctica — Validación de documentos

# **Validación de documentos**

## **Propuesta didáctica**

En esta UP continuamos trabajando con el **RA4**: Establece mecanismos de validación de documentos para el intercambio de información utilizando métodos para definir su sintaxis y estructura.

## **Criterios de evaluación**

### **Respecto al RA4:**

| Código | Descripción | Peso (%) | Herramientas Evaluación |
| --- | --- | --- | --- |
| **CE4a** | Se han establecido la necesidad de describir la información transmitida en los documentos y sus reglas. | 10% | EXA601 |
| **CE4b** | Se han identificado las tecnologías relacionadas con la definición de documentos. | 10% | EXA601 |
| **CE4c** | Se han analizado la estructura y sintaxis específica utilizada en la descripción. | 15% | ACT601 (5%) -- EXA601 (95%) |
| **CE4d** | Se han creado descripciones de documentos. | 25% | ACT601 (10%) -- EXA601 (90%) |
| **CE4e** | Se han utilizado descripciones en la elaboración y validación de documentos. | 20% | ACT601 (10%) -- EXA601 (90%) |
| **CE4f** | Se han asociado las descripciones con los documentos. | 10% | EXA601 |
| **CE4g** | Se han utilizado herramientas específicas. | 10% | EXA601 |

## **Contenidos**

### **Validación de documentos:**

- Descripción de la información y sus reglas. (CE4.a, CE4.b)

- Tecnologías para definir documentos. (CE4.b, CE4.c)

- Estructura y sintaxis de las descripciones. (CE4.c)

- Creación de descripciones de documentos. (CE4.d, CE4.e)

- Uso de descripciones para validar documentos. (CE4.e, CE4.f)

- Herramientas específicas para la validación. (CE4.f, CE4.g)

**Cuestionario inicial**

1. ¿Qué diferencia existe entre un documento XML bien formado y un documento válido?

1. ¿Qué tecnologías conoces para definir la estructura y las reglas de un documento?

1. ¿Qué es un DTD y cuáles son sus principales limitaciones?

1. ¿Qué es un XML Schema (XSD) y en qué se diferencia de un DTD?

1. ¿Qué es JSON Schema y para qué se utiliza?

1. ¿Cómo se asocia un esquema (DTD, XSD) a un documento XML?

1. ¿Qué herramientas o validadores de documentos conoces?

## **Programación de Aula (6h)**

Esta unidad se imparte en la segunda evaluación, a continuación de la UP05 (DOM). La unidad tiene una duración estimada de 6 horas lectivas repartidas en 6 sesiones de una hora, durante los días que se indican en el calendario (los días de clase son lunes, con una hora, y jueves, con dos horas). La sesión de evaluación del lunes 22 de febrero se cuenta dentro de esta unidad.

### **Calendario**

#### **Febrero 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | **6 🛑** | **7 🛑** |
| 8 | 9 | 10 | **11 📚** | 12 | **13 🛑** | **14 🛑** |
| **15 📚** | 16 | 17 | **18 📚** | 19 | **20 🛑** | **21 🛑** |
| **22 📚** | 23 | 24 | 25 | 26 | **27 🛑** | **28 🛑** |

### **Sesiones**

| Sesión | Contenidos | Actividades | Criterios trabajados |
| --- | --- | --- | --- |
| 1 | 6.1 Descripción de la información | -- | CE4.a - CE4.b |
| 2 | 6.2 Tecnologías para definir documentos | -- | CE4.b - CE4.c |
| 3 | 6.3 Estructura y sintaxis de las descripciones | ACT601 | CE4.c |
| 4 | 6.4 Creación de descripciones de documentos | ACT601 | CE4.c - CE4.d - CE4.e |
| 5 | 6.5 Uso de descripciones para validar documentos -- 6.6 Herramientas específicas | ACT601 | CE4.e - CE4.f - CE4.g |
| 6 | Evaluación de la unidad | EXA601 | CE4.a - CE4.b - CE4.c - CE4.d - CE4.e - CE4.f - CE4.g |

---

## 6.1 Descripción de la información y sus reglas

# **Descripción de la información y sus reglas**

En los sistemas informáticos actuales, los datos no se transmiten de forma aislada, sino como documentos estructurados que deben ser interpretados correctamente por diferentes aplicaciones, servicios y lenguajes de programación.
Un lenguaje de marcas (como XML o JSON) proporciona una sintaxis común para representar información, pero no define por sí solo el significado ni las reglas del contenido.
Por este motivo, es necesario describir explícitamente la estructura y las reglas que deben cumplir los documentos, de forma que todos los sistemas implicados compartan el mismo modelo de datos.
Esta descripción se conoce como contrato de datos y se materializa mediante tecnologías como:

- **DTD** y **XSD** en XML

- **JSON Schema** en JSON

- **OpenAPI** para APIs web

## **Documento Bien formado vs Documento válido**

En cualquier lenguaje de marcas (XML, JSON, YAML…), un documento puede evaluarse en dos niveles distintos de corrección:

### **Documento bien formado**

Un documento bien formado cumple únicamente las reglas sintácticas básicas del lenguaje en el que está escrito.

Estas reglas garantizan que el documento puede ser leído y procesado por un parser, pero no garantizan que los datos tengan sentido.

Ejemplos:

#### **En XML**

- Todas las etiquetas están correctamente abiertas y cerradas.

- Las etiquetas están bien anidadas.

- Los atributos van entre comillas.

- Existe un único elemento raíz.

#### **En JSON**

- Uso correcto de llaves {} y corchetes [].

- Comas bien colocadas.

- Claves entre comillas.

- Tipos válidos (string, number, boolean, array, object).

Un documento bien formado no produce errores de sintaxis, pero puede contener información incorrecta o incompleta desde el punto de vista del sistema.

### **Documento válido**

Un documento válido es un documento bien formado que, además, cumple una descripción formal previamente definida, es decir, una gramática o esquema.
Estas gramáticas pueden ser:

- DTD o XSD para XML

<details markdown="1">

<summary>💡 **Exemple XML** bé format vs vàlid</summary>

En este caso vemos que el documento XML está bien formado, no tiene errores de sintaxis.

> **📌 XML**
> 

```html
<usuario>
    <nombre>Ana</nombre>
    <edad>veinticinco</edad>
</usuario>
```

Para saber si es válido tenemos que validarlo contra una definición. Supongamos la definición de este XSD

> **📌 XSD**
> 

```html
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
<xs:element name="usuario">
    <xs:complexType>
    <xs:sequence>
        <xs:element name="nombre" type="xs:string"/>
        <xs:element name="edad" type="xs:integer"/>
    </xs:sequence>
    </xs:complexType>
</xs:element>
</xs:schema>
```

Podemos observar que el documento XML está bien formado pero no es válido, el elemento edad deberá ser integer y en nuestro ejemplo es string.

</details>

- JSON Schema para JSON

<details markdown="1">

<summary>💡 **Exemple JSON** bé format vs vàlid</summary>

En este caso vemos que el documento JSON está bien formado, no tiene errores de sintaxis.

> **📌 JSON**
> 

```html
{
"precio": "100",
"stock": -5
}
```

Para saber si es válido tenemos que validarlo contra una definición. Supongamos la definición de este JSON Schema

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "precio": { "type": "number" },
    "stock": { "type": "integer", "minimum": 0 }
},
"required": ["precio", "stock"]
}
```

Podemos observar que el documento JSON está bien formado pero no es válido, el elemento stock no puede ser menor a 0 y en nuestro ejemplo es -5.

</details>

Un documento válido garantiza que:

- Los campos esperados existen.

- Los tipos de datos son correctos (número, string, fecha, email, etc.).

- Se respetan restricciones (longitudes, rangos, patrones).

- Se cumple la semántica del modelo de datos, no solo la sintaxis.

Un documento puede ser bien formado pero no válido, pero nunca puede ser válido si no es bien formado.

## **¿Por qué necesitamos describir y validar documentos?**

En los sistemas modernos (APIs, microservicios, aplicaciones web), los datos circulan constantemente entre componentes independientes, a menudo desarrollados por equipos distintos o incluso por empresas distintas.

Sin un contrato de datos riguroso, aparecen problemas como:

- Inconsistencias entre servicios.

- Fallos silenciosos difíciles de detectar.

- Corrupción de datos en bases de datos.

- Rotura de integraciones con terceros.

- Errores que aparecen lejos del origen del problema.

- Bugs complejos y costosos de depurar.

Por este motivo, las buenas prácticas actuales recomiendan validar los datos lo antes posible y tantas veces como sea necesario.

## **Aplicación real en el desarrollo web**

Ejemplos reales de problemas por falta de validación

- Una API que recibe un JSON sin email
    → El sistema falla más adelante al intentar enviar notificaciones.

- Un microservicio que consume mensajes sin validar
    → Datos incorrectos se propagan a otros servicios (efecto cascada).

- Una tienda online que recibe precios como strings
    → Errores en cálculos, totales incorrectos, facturación errónea.

Por eso los lenguajes de marcas van unidos a descriptores semánticos: DTD, XSD, JSON Schema, OpenAPI.

---

## 6.2 Tecnologías para definir documentos

# **Tecnologías para definir documentos**

En este apartado tenemos como objetivo ser capaces de identificar, comprender y seleccionar las tecnologías adecuadas para definir la estructura y las reglas de los documentos que intercambian las aplicaciones.

Definir documentos no consiste únicamente en elegir un formato (XML, JSON…), sino en especificar formalmente:

- qué datos se esperan,

- cómo se organizan,

- qué tipos deben tener,

- qué restricciones deben cumplir,

- cómo pueden validarse automáticamente.

En el contexto tecnológico actual, estas definiciones se apoyan en estándares consolidados y tecnologías ampliamente utilizadas en el desarrollo web profesional.

## **Tecnologías para XML**

XML fue el primer gran estándar para el intercambio estructurado de información. Aunque su uso ha disminuido en el desarrollo web moderno frente a JSON, sigue siendo clave a nivel formativo y en sectores concretos, por lo que es imprescindible conocer sus mecanismos de validación.

### **DTD**

DTD (Document Type Definition) es la primera tecnología creada para definir la estructura de documentos XML. Permite describir qué elementos pueden aparecer en un documento y cómo se relacionan entre sí.

> **📌 Ejemplo DTD**
> 

```html
<!ELEMENT pedido (cliente, total)>
<!ELEMENT cliente (#PCDATA)>
<!ELEMENT total (#PCDATA)>
```

#### **Características principales**

Define estructura jerárquica de los elementos.
Permite indicar:

- elementos obligatorios u opcionales,

- repetición de elementos,

- atributos básicos.

Utiliza una sintaxis propia, independiente de XML.

#### **Limitaciones**

DTD presenta importantes restricciones técnicas:

- No permite definir tipos de datos (todo es texto).

- No soporta namespaces.

- No permite validaciones complejas ni reglas semánticas.

- Escasa extensibilidad.

#### **Uso actual**

Se utiliza principalmente:

- con fines educativos, para comprender la base teórica de las gramáticas,

- en sistemas heredados que aún intercambian XML antiguos.

Es fundamental para entender la evolución hacia tecnologías más potentes como XSD.

### **XSD**

XSD (XML Schema Definition) es la evolución natural de DTD y el estándar oficial del W3C para definir documentos XML.
La versión 1.1 es la más completa y la que sigue estando vigente y mantenida.

> **📌 Ejemplo XSD**
> 

```html
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

<xs:element name="pedido">
    <xs:complexType>
    <xs:sequence>
        <xs:element name="cliente" type="xs:string"/>
        <xs:element name="total" type="xs:decimal"/>
    </xs:sequence>
    </xs:complexType>
</xs:element>

</xs:schema>
```

#### **Capacidades principales**

XSD permite:

- **Definir tipos de datos**:

  - simples (string, integer, date, boolean…),

  - complejos (estructuras con varios elementos).

- **Establecer restricciones avanzadas**:

  - rangos numéricos,

  - longitudes mínimas y máximas,

  - expresiones regulares (patterns).

- **Trabajar con namespaces**.

- **Crear estructuras reutilizables**.

- **Expresar reglas semánticas complejas (especialmente en XSD 1.1)**.

#### **Ventajas frente a DTD**

| DTD | XSD |
| --- | --- |
| Sintaxis propia | Sintaxis XML |
| Sin tipos de datos | Tipado fuerte |
| Sin namespaces | Soporte completo |
| Validación básica | Validación avanzada |

#### **Uso en la industria**

XSD sigue siendo ampliamente utilizado en:

- administración pública.

- facturación electrónica.

- sector financiero.

- editoriales y documentación técnica.

- intercambio de datos entre sistemas corporativos.

Aunque XML no sea dominante en DAW, XSD es esencial para entender validación estructurada y tipada.

## **Tecnologías para JSON**

Con el auge del desarrollo web y de las APIs REST, JSON se ha convertido en el formato dominante para el intercambio de datos entre aplicaciones.
A diferencia de XML, JSON no incorpora mecanismos de validación propios, por lo que es imprescindible usar tecnologías externas para definir su estructura y reglas.

### **JSON Schema**

JSON Schema (Draft 2020‑12) es el estándar para describir y validar documentos JSON.
La versión Draft 2020‑12 es la más soportada y recomendada en 2026, ya que está integrada en la mayoría de validadores y herramientas modernas.

> **📌 Ejemplo JSON Schema**
> 

```html
{
"$schema": "https://json-schema.org/draft/2020-12/schema",
"type": "object",
"properties": {
    "usuario": { "type": "string" },
    "edad": { "type": "integer", "minimum": 0 },
    "email": { "type": "string", "format": "email" }
},
"required": ["usuario", "edad", "email"]
}
```

#### **Qué permite JSON Schema**

- Definir la estructura exacta de un JSON.

- Especificar:

  - tipos de datos,

  - propiedades obligatorias,

  - formatos (email, date, uri…),

  - restricciones (rangos, longitudes, patrones).

- Reutilizar esquemas mediante referencias ($ref).

- Modularizar definiciones.

#### **Mejoras clave introducidas**

- Sistema de vocabularies, que permite extensiones controladas.

- Referencias dinámicas ($dynamicRef).

- Mayor compatibilidad entre herramientas.

#### **Uso real**

JSON Schema se utiliza en:

- APIs REST,

- validación de datos en backend,

- bases de datos NoSQL,

- formularios dinámicos,

- pipelines de CI/CD,

- documentación automática.

En DAW, JSON Schema es imprescindible para trabajar con APIs modernas.

### **JSON Schema 2.0**

JSON Schema 2.0 (2025) representa la evolución más importante del estándar desde 2020‑12, introduciendo mejoras orientadas a la expresividad y al desarrollo profesional.

> **📌 Ejemplo JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "tipoUsuario": { "enum": ["normal", "admin"] },
    "email": { "type": "string", "format": "email" },
    "permisos": {
    "type": "array",
    "items": { "type": "string" }
    }
},
"required": ["tipoUsuario", "email"],
"if": {
    "properties": { "tipoUsuario": { "const": "admin" } }
},
"then": {
    "required": ["permisos"]
}
}
```

#### **Novedades destacadas**

- Validación condicional avanzada. Permite definir reglas del tipo: si ocurre esto → entonces debe cumplirse esto otro.

- Vocabularies más flexibles. Facilitan la extensión del estándar sin romper compatibilidad.

- Tipos personalizados. A través de patrones y combinaciones.

- Mensajes de error más claros. Facilitan el debugging y la experiencia del desarrollador.

#### **Impacto en el desarrollo**

Las mejoras introducidas en JSON Schema 2.0 hacen que el estándar sea:

- Más expresivo, al permitir modelar reglas complejas del dominio.

- Más mantenible, gracias a la reutilización, modularidad y condicionales.

- Más escalable, adecuado para proyectos grandes y equipos numerosos.

- Más alineado con arquitecturas distribuidas, donde la validación debe ser clara, consistente y automatizable.

---

## 6.3 Estructura y Sintaxis de las descripciones

# **Estructura y Sintaxis de las descripciones**

Cuando hablamos de la sintaxis de una descripción de documentos, nos referimos a **la forma concreta en la que se escriben las reglas** que determinan si un documento es válido o no. Cada tecnología utiliza una sintaxis distinta, pero todas comparten una idea común:
**expresar reglas de forma declarativa**, no mediante código.

Comprender la sintaxis no significa memorizar palabras clave, sino **aprender a leer y escribir gramáticas**, interpretando qué estructura y qué restricciones está imponiendo cada línea.

En este apartado se responden dos preguntas fundamentales:

- ¿Cómo se escribe una gramática o descripción de un documento?

- ¿Qué elementos y reglas forman parte de cada tecnología de validación?

Comprender la estructura y la sintaxis de estas descripciones es clave para poder:

- diseñar contratos de datos coherentes,

- interpretar esquemas existentes,

- detectar errores de validación,

- seleccionar la tecnología adecuada en cada contexto.

Cada tecnología (DTD, XSD, JSON Schema) utiliza una sintaxis diferente, pero todas persiguen el mismo objetivo:
* definir formalmente cómo debe ser un documento válido.

## **DTD**

Para definir un elemento se usa la sintaxis:

```html
<!ELEMENT nombre_elemento contenido>
```

La expresión del contenido puede ser:

**ANY**

Representa cualquier contenido. Por tanto, deja libertad absoluta, lo cual significa en realidad no definir nada. En consecuencia, en la versión definitiva de un DTD no debería aparecer nunca, pero puede ser útil en versiones preliminares en las que aún no hemos definido toda la gramática:

```html
<!ELEMENT profesor ANY>
```

**EMPTY**

Representa un elemento vacío, esto es, un elemento sin contenido (aunque puede tener atributos):

```html
<!ELEMENT hr EMPTY>
```

**(#PCDATA)**

El nodo contiene texto:

```html
<!ELEMENT apodo (#PCDATA)>
```

**(elemento_hijo)**

El nodo contiene dentro de sí un nodo hijo:

```html
<!ELEMENT claustro (profesor)>
```

Ahora bien, por lo general los elementos no contienen únicamente un único hijo, sino varios lo que lleva a definir dos conceptos:

### **Secuencia**

que representa cómo se suceden los nodos hijos dentro del padre. DTD define dos secuencias:

Un elemento seguido a continuación por otro, mediante la coma:

```html
<!ELEMENT profesor (apodo, nombre, apellidos, departamento)>
```

O un elemento y otro elemento, mediante la tubería:

```html
<!ELEMENT claustro (profesor|lector)>
```

En este caso, estamos afirmando que un claustro está compuesto por o un profesor o por un lector, pero no por ambos. Sí, es algo estúpido, pero aún no sabemos cardinalidad.

Por supuesto, podemos hacer composiciones de ambos tipos de secuencias e, incluso, usar paréntesis para agruparlas. Suponiendo dos nodos hijos llamados a y b:

```html
(a,b)
(a|b)
(a,(b|c))
((a,b)|c)
(a,(b|c),d)
(a,((b,c)|d))
```

### **Cardinalidad**

que representa la posible repetición de un elemento y que DTD la significa añadiendo tras el elemento un modificador. El modificador permite expresar:

- **Una y sólo una aparición**, si no se añade modificador, que es lo que hemos hecho en las expresiones del contenido incluidas en la explicación sobre la secuencia.

- **Una o ninguna aparición**, que se expresa con una interrogación. Por ejemplo:

```html
<!ELEMENT profesor (apodo?, nombre, apellidos, departamento?)>
```

En esta definición, cada profesor obligatoriamente tendrá un nombre y unos apellidos, pero podrá no tener apodo o no pertenecer a un departamento. Por tanto, este nodo es válido:

```html
<profesor id="p9" sexo="mujer">
   <nombre>María Isabel</nombre>
   <apellidos>Peinado Sanjuán</apellidos>
</profesor>
```

Una o más apariciones, que se expresa con el signo de la suma:

```html
<!ELEMENT claustro (profesor)+>
```

Por tanto, un claustro está constituido por profesores, pero al menos debe haber uno.

Ninguna, una o más apariciones, que se expresa con el asterisco:

```html
<!ELEMENT claustro (profesor)*>
```

Con esta definición, el claustro podría estar vacío.

## **Sintaxis y estructura de DTD**

DTD (Document Type Definition) es la forma más antigua de definir gramáticas para XML. Su importancia hoy en día es principalmente formativa, ya que permite comprender los fundamentos teóricos de los lenguajes de marcas.

La sintaxis de DTD es concisa y simbólica, heredera de las primeras gramáticas formales. Su objetivo es describir estructuras, no significados. DTD describe qué elementos pueden aparecer en un documento XML y cómo se relacionan entre sí, pero no entra en el detalle semántico de los datos.

DTD no utiliza XML como sintaxis, sino un lenguaje propio, lo que refuerza su carácter teórico.

### **Elementos con <!ELEMENT>**

Define un elemento y qué contenido puede tener. Permite indicar:

- qué hijos puede contener un elemento.

- el orden de esos hijos.

- si pueden repetirse u omitirse.

> **📌 <!ELEMENT>**
> 

> Sintaxis General:

```html
<!ELEMENT nombre_del_elemento contenido>
```

Donde el contenido describe **qué puede contener ese elemento**.

```html
<!ELEMENT pedido (cliente, producto+, total)>
```

Esta ejemplo indica que el elemento pedido contiene, en este orden, un elemento cliente, uno o más elementos producto y un elemento total.

La sintaxis entre paréntesis define una expresión de contenido, muy similar a una gramática formal

Este DTD validaría un XML como este:

```html
<!DOCTYPE pedido SYSTEM "pedido.dtd">
<pedido>
    <cliente>Juan</cliente>
    <producto>Teclado</producto>
    <producto>Ratón</producto>
    <total>cuarenta y cinco</total>
</pedido>
```

#### **Operadores**

Los operadores permiten definir la cardinalidad y relación entre elementos:

- "?" → el elemento es opcional (cero o una vez).

- "*" → el elemento puede aparecer cero o más veces.

- "+" → el elemento debe aparecer una o más veces.

- "|" → elección entre varios elementos.

- "," → secuencia, indica orden obligatorio.

Estos operadores son la base de la gramática estructural en DTD.

### **Atributos con <!ATTLIST>**

Define los atributos de un elemento, indicando:

- su nombre.

- su tipo (muy básico).

- si son obligatorios u opcionales.

> **📌 <!ATTLIST>**
> 

> Sintaxis General:

```html
<!ATTLIST elemento atributo tipo modificador>
```

Ejemplo:

```html
<!ATTLIST pedido id CDATA #REQUIRED>
```

En este ejemplo se indica que el elemento pedido tiene un atributo llamado id, de tipo texto y que es obligatorio.

Los valores que se pueden especificar son:

- 

# REQUIRED → obligatorio

- 

# IMPLIED → opcional

- "valor" → valor por defecto

- 

# FIXED "valor" → valor fijo (no puede cambiar)

DTD permite pocos tipos de atributos y pocas reglas, lo que refuerza su enfoque estructural.

### **Limitaciones estructurales**

DTD presenta importantes limitaciones técnicas:

- No permite definir tipos de datos: todo el contenido es texto.

- No soporta namespaces, lo que dificulta combinar vocabularios.

- No permite validaciones complejas ni reglas semánticas.

- Tiene una sintaxis propia, distinta de XML.

Por estas razones, DTD es insuficiente para sistemas modernos, pero sigue siendo muy útil para entender el concepto de gramática.

> **📌 DTD**
> 

> 

```html
<!ELEMENT pedido (cliente, producto+, total)>

<!ELEMENT cliente (#PCDATA)>
<!ATTLIST cliente id CDATA #REQUIRED>

<!ELEMENT producto (#PCDATA)>

<!ELEMENT total (#PCDATA)>
```

El XML que se valida

```html
<!DOCTYPE pedido SYSTEM "pedido.dtd">
<pedido>
    <cliente id="12">Juan</cliente>
    <producto>Teclado</producto>
    <producto>Ratón</producto>
    <total>cuarenta y cinco</total>
</pedido>
```

## **Sintaxis y estructura de XSD**

XSD (XML Schema Definition) es la evolución natural de DTD y el estándar oficial del W3C para definir documentos XML.
La versión 1.1 es la más completa y la que sigue vigente actualmente.

A diferencia de DTD, XSD permite una descripción precisa, tipada y extensible de los documentos XML.

### **Tipos simples**

Los tipos simples definen valores atómicos, es decir, datos sin estructura interna.
Ejemplos habituales:

- xs:string

- xs:integer

- xs:decimal

- xs:boolean

- xs:date

- xs:dateTime

Sobre estos tipos se pueden aplicar restricciones, como:

- valores mínimos y máximos (minInclusive, maxInclusive),

- longitudes (length, minLength, maxLength),

- patrones mediante expresiones regulares (pattern).

Esto permite validar no solo la estructura, sino también el contenido.

### **Tipos complejos**

Los tipos complejos permiten definir estructuras formadas por varios elementos y atributos.
Se utilizan para:

- agrupar datos relacionados,

- definir jerarquías,

- modelar entidades completas.

Dentro de los tipos complejos se usan construcciones como:

- xs:sequence → los elementos deben aparecer en un orden concreto.

- xs:choice → se permite elegir entre varias opciones.

- xs:all → los elementos pueden aparecer en cualquier orden (con limitaciones).

### **Namespaces**

Los namespaces permiten identificar de forma única los elementos de un vocabulario XML.
Son fundamentales cuando:

- se combinan distintos esquemas,

- se integran sistemas diferentes,

- se reutilizan definiciones.

XSD soporta namespaces de forma completa, a diferencia de DTD.

### **Herencia de tipos**

XSD permite reutilizar y extender definiciones mediante:

- xs:extension → ampliar un tipo existente.

- xs:restriction → limitar un tipo existente.

Este mecanismo facilita:

- la reutilización,

- el mantenimiento,

- la evolución de los esquemas.

### **Reglas avanzadas**

XSD 1.1 introduce capacidades adicionales muy potentes:

- xs:assert → permite definir reglas lógicas usando expresiones XPath.

- Validaciones que dependen de varios elementos a la vez.

- Mayor flexibilidad para expresar restricciones semánticas complejas.

Esto convierte a XSD 1.1 en una herramienta muy potente para validaciones estructurales avanzadas en XML.

> **📌 XSD**
> 

> 

```html
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

<xs:element name="usuario" type="usuarioType"/>

<xs:complexType name="usuarioType">
    <xs:sequence>
        <xs:element name="nombre" type="xs:string"/>
        <xs:element name="edad" type="xs:integer"/>
    </xs:sequence>
</xs:complexType>

</xs:schema>
```

El XML que se valida

```html
<usuario xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="usuario.xsd">
<nombre>Ana</nombre>
<edad>25</edad>
</usuario>
```

## **Sintaxis de JSON Schema**

JSON Schema es el estándar para describir y validar documentos JSON.
La versión Draft 2020‑12 es la más extendida y recomendada en entornos profesionales actuales, y sirve de base para la evolución hacia JSON Schema 2.0.

### **Elementos fundamentales**

Los componentes básicos de un schema son:

- $schema: Indica qué versión del estándar se está utilizando. En entornos modernos es obligatorio para evitar ambigüedades.

- $id: Identificador único del schema, normalmente una URL.

- type: Define el tipo de dato esperado: string, object, array, number, integer, boolean.

- properties: Define las propiedades de un objeto y su tipo.

- required: Lista de campos obligatorios.

- additionalProperties: Permite controlar si se aceptan propiedades no definidas.

- $ref: Permite reutilizar otros schemas, favoreciendo la modularidad.

### **Novedades introducidas**

La versión 2.0 amplía las capacidades del estándar con:

- Validación condicional mediante if, then, else, que permite expresar reglas dependientes del contexto.

- Vocabularios modulares, que facilitan extensiones controladas del estándar.

- Tipos más expresivos, combinando reglas y restricciones.

- Mensajes de error más claros, orientados a mejorar la experiencia del desarrollador.

Estas mejoras permiten que JSON Schema se acerque más al modelo conceptual real del dominio, sin sustituir la lógica de negocio.

> **📌 JSON Schema**
> 

> 

```html
{
"$schema": "https://json-schema.org/draft/2020-12/schema",
"$id": "https://example.com/usuario.schema.json",
"type": "object",
"properties": {
    "nombre": { "type": "string" },
    "edad": { "type": "integer" }
},
"required": ["nombre", "edad"]
}
```

El JSON que valida

```html
{
"nombre": "Ana",
"edad": 25
}
```

Ahora JSON Schema con condicionales como if y else

```html
{
"type": "object",
"properties": {
    "tipo": { "enum": ["normal", "admin"] },
    "email": { "type": "string", "format": "email" },
    "permisos": {
    "type": "array",
    "items": { "type": "string" }
    }
},
"required": ["tipo", "email"],
"if": {
    "properties": { "tipo": { "const": "admin" } }
},
"then": {
    "required": ["permisos"]
}
}
```

---

## 6.4 Creación de descripciones de documentos

# **Creación de descripciones de documentos**

Crear una descripción de documentos no consiste simplemente en escribir un fichero DTD, XSD o JSON Schema. En realidad, implica **diseñar un contrato de datos formal**, que permita que distintos sistemas informáticos intercambien información de manera clara, coherente y sin ambigüedades.
Este proceso es conceptualmente muy similar a otras tareas habituales en el desarrollo de software, como:

- diseñar un **modelo de datos** para una base de datos.

- definir una **interfaz pública** entre componentes.

- establecer un **contrato de comunicación** entre servicios distribuidos.

En todos estos casos, el objetivo es el mismo: que todas las partes implicadas compartan una **misma interpretación de los datos**.
Una descripción de documentos bien diseñada debe permitir, entre otras cosas:

- **validar automáticamente** los documentos intercambiados.

- **detectar errores lo antes posible**, preferiblemente en el punto de entrada del sistema.

- **garantizar la coherencia** entre diferentes aplicaciones, módulos o servicios.

- facilitar la **evolución del sistema** sin romper compatibilidad.

Cuando estas descripciones están mal diseñadas o son incompletas, los problemas aparecen incluso aunque la tecnología utilizada sea correcta.

## **Principios generales antes de crear una descripción**

Antes de escribir cualquier gramática o esquema, es imprescindible realizar un **análisis del dominio del problema**.
Este análisis es independiente de la tecnología concreta que se vaya a utilizar y constituye la base de una buena definición.
Algunas preguntas clave que deben responderse en esta fase son:

- ¿Qué tipo de información se intercambia entre los sistemas?

- ¿Qué entidades principales existen en el dominio?

- ¿Qué campos son obligatorios y cuáles opcionales?

- ¿Qué tipo de datos debe tener cada campo?

- ¿Existen reglas que dependan de otros campos?

- ¿Estos datos se reutilizarán en otros documentos o APIs?

- ¿Será necesario extender esta definición en el futuro?

Responder a estas preguntas permite **anticipar problemas** y diseñar una descripción más robusta.
Una descripción mal planteada genera errores estructurales, incoherencias semánticas y dificultades de mantenimiento, incluso aunque el validador esté correctamente implementado.

## **Crear un DTD**

DTD es la forma más básica de describir documentos XML. Su objetivo principal no es validar tipos de datos ni expresar reglas complejas, sino **definir la estructura general del documento**.
Por este motivo, DTD resulta especialmente útil en una fase inicial de aprendizaje, ya que obliga a pensar en términos de **jerarquía, orden y cardinalidad**.

Para poder seguir los pasos vamos a tomar el siguiente XML como ejemplo:

> **📌 XML**
> 

```html
<!DOCTYPE pedido SYSTEM "pedido.dtd">
    <pedido id="P001">
        <cliente>Ana</cliente>
        <producto>Teclado</producto>
        <producto>Ratón</producto>
        <total>45</total>
    </pedido>
```

### **Identificar las entidades del dominio**

El primer paso consiste en identificar los conceptos principales que aparecen en el documento.
Cada uno de estos conceptos suele convertirse en un elemento XML.
Por ejemplo, en un sistema de pedidos, es habitual encontrar entidades como:

- pedido

- cliente

- producto

- total

Este proceso no depende de DTD, sino del análisis del dominio del problema.

### **Modelar la jerarquía de elementos**

Una vez identificadas las entidades, hay que decidir cómo se relacionan entre sí:

- cuál será el elemento raíz del documento.

- qué elementos contienen a otros.

- en qué orden deben aparecer.

DTD obliga a definir de forma explícita esta jerarquía, lo que ayuda a detectar inconsistencias desde el principio.

Ejemplo: Un pedido contiene un cliente, varios producto y un total.

> **📌 DTD**
> 

```html
<!ELEMENT pedido (cliente, producto+, total)>
```

### **Definir atributos**

Además del contenido principal de los elementos, muchos documentos necesitan atributos, por ejemplo para identificar un pedido o asignar un código.

En DTD, los atributos se usan principalmente para:

- identificadores.

- metadatos.

- información auxiliar que no forma parte del contenido principal del elemento.

Aunque su tipado es muy limitado, permiten enriquecer la estructura básica del documento.

Ejemplo: id de un pedido.

> **📌 DTD**
> 

```html
<!ATTLIST pedido id CDATA #REQUIRED>
```

### **Especificar cardinalidades**

Se usan los operadores de DTD para indicar:

- elementos obligatorios.

- elementos repetidos.

- elementos opcionales.

Este paso es clave, ya que determina qué documentos serán considerados válidos desde el punto de vista estructural.

DTD utiliza operadores para indicar cardinalidad:

- "+" → una o más veces,

- "*" → cero o más veces,

- "?" → cero o una vez,

- sin operador → exactamente una vez.

> **📌 DTD**
> 

> 

```html
<!ELEMENT pedido (cliente, producto+, total)>
```

Aquí se ve claramente:

- cliente → obligatorio (una vez),

- producto+ → uno o más,

- total → obligatorio (una vez).

### **Limitaciones y documentación externa**

DTD no puede expresar reglas semánticas ni validar el contenido de los datos.
Por este motivo, es habitual que ciertas reglas deban documentarse externamente, por ejemplo:

“El campo total representa un importe numérico expresado en euros.”

Esta necesidad pone de manifiesto las limitaciones de DTD y justifica la evolución hacia tecnologías más potentes.

### **Ejemplo**

<details markdown="1">

<summary>💡 Exemple Complet</summary>

> **📌 DTD**
> 

```html
<!ELEMENT pedido (cliente, producto+, total)>
<!ATTLIST pedido id CDATA #REQUIRED>

<!ELEMENT cliente (#PCDATA)>
<!ELEMENT producto (#PCDATA)>
<!ELEMENT total (#PCDATA)>
```

> **📌 XML**
> 

```html
<!DOCTYPE pedido SYSTEM "pedido.dtd">
<pedido id="P001">
    <cliente>Ana</cliente>
    <producto>Teclado</producto>
    <producto>Ratón</producto>
    <total>45</total>
</pedido>
```

- 

El DTD valida:

  - la estructura.

  - el orden.

  - la existencia de los elementos.

- 

No puede validar:

  - que total sea numérico.

  - que tenga un valor coherente.

</details>

## **Crear un XSD**

XSD (XML Schema Definition) es la tecnología estándar definida por el W3C para describir documentos XML de forma **formal, tipada y extensible**.
Está pensada para su uso en **entornos profesionales**, donde no basta con comprobar que un documento tiene una estructura correcta, sino que también es necesario validar que **los datos tienen sentido** y cumplen las reglas del dominio.

Mientras que DTD se centra exclusivamente en la estructura jerárquica del documento (qué elementos existen, en qué orden aparecen y cuántas veces pueden repetirse), XSD da un paso más y permite validar aspectos mucho más ricos del contenido, como:

- el **tipo de dato** de cada elemento o atributo.

- los **rangos de valores** permitidos.

- los **formatos de texto** (fechas, identificadores, códigos).

- las **relaciones entre distintos elementos** del documento.

Gracias a estas capacidades, XSD se convierte en una herramienta clave para garantizar la **integridad de los datos** intercambiados entre sistemas.

### **Identificar el elemento raíz**

Al igual que en DTD, el primer paso al crear un XSD consiste en identificar el **elemento raíz** del documento XML.
Este elemento representa la **entidad principal del dominio** y actúa como punto de entrada para el proceso de validación.
Definir correctamente el elemento raíz es fundamental, ya que:

- determina qué documentos pueden ser validados con el esquema.

- establece el contexto general del documento.

- organiza el resto de elementos que dependen de él.

Por ejemplo, en un sistema de pedidos, el elemento raíz suele ser "", mientras que en un sistema de usuarios sería "" o "". A partir de este elemento raíz se construye toda la estructura del documento.

> **📌 XSD**
> 

```html
<xs:element name="pedido"/>
```

### **Crear tipos complejos**

Una de las principales aportaciones de XSD frente a DTD es la posibilidad de definir **tipos complejos**.
Un tipo complejo permite agrupar varios elementos relacionados y modelar entidades completas del mundo real, como un usuario, un pedido o una reserva.
Gracias a los tipos complejos, es posible:

- combinar múltiples elementos y atributos.

- definir estructuras jerárquicas internas.

- reutilizar definiciones en distintos puntos del esquema.

Este enfoque favorece la **modularidad** y hace que los esquemas sean más legibles y mantenibles, especialmente en documentos grandes o en sistemas que evolucionan con el tiempo. En lugar de redefinir la misma estructura una y otra vez, se puede definir un tipo complejo una sola vez y reutilizarlo allí donde sea necesario.

Los tipos complejos agrupan varios elementos relacionados.

> **📌 XSD**
> 

```html
<xs:complexType name="pedidoType">
    <xs:sequence>
        <xs:element name="cliente" type="xs:string"/>
        <xs:element name="total" type="xs:decimal"/>
    </xs:sequence>
</xs:complexType>
```

### **Aplicar restricciones a los tipos**

Otra ventaja clave de XSD es la posibilidad de aplicar **restricciones** sobre los tipos de datos.
XSD no solo permite indicar que un dato es un número o una cadena de texto, sino que también puede limitar **qué valores concretos son válidos**.

Entre las restricciones más habituales se encuentran:

- valores mínimos y máximos para números.

- longitudes mínimas y máximas para cadenas.

- patrones mediante expresiones regulares para validar formatos concretos.

- valores permitidos dentro de un conjunto cerrado.

Gracias a estas restricciones, errores comunes como números negativos inesperados, cadenas vacías o formatos incorrectos pueden detectarse **antes de que los datos lleguen al código de la aplicación**.

Este tipo de validación temprana reduce la complejidad del software y evita errores difíciles de depurar en fases posteriores.

XSD permite validar contenido, no solo estructura.

> **📌 XSD**
> 

```html
<xs:element name="total">
    <xs:simpleType>
        <xs:restriction base="xs:decimal">
        <xs:minInclusive value="0"/>
        </xs:restriction>
    </xs:simpleType>
</xs:element>
```

### **Definir atributos tipados y reglas**

En XSD, los atributos dejan de ser simples valores de texto sin significado, como ocurre en DTD, y pasan a formar parte real del **modelo de datos**.

Los atributos en XSD:

- están correctamente tipados.

- pueden ser obligatorios u opcionales.

- pueden tener restricciones de valores.

- participan activamente en la validación del documento.

Esto permite diseñar documentos XML más precisos y coherentes, en los que tanto los elementos como los atributos siguen reglas claras y bien definidas.

> **📌 XSD**
> 

```html
<xs:attribute name="id" type="xs:string" use="required"/>
```

Los atributos ahora están tipados y bien definidos.

### **Modularizar schemas**

En proyectos reales, los esquemas XSD rara vez se concentran en un único archivo.
Lo más habitual es dividir la definición en varios esquemas especializados, por ejemplo:

- esquemas con tipos comunes reutilizables.

- esquemas específicos para cada entidad principal.

- esquemas compartidos entre distintos documentos o sistemas.

Esta modularización facilita:

- el mantenimiento del proyecto.

- la reutilización de definiciones.

- la evolución del sistema sin romper compatibilidad.

Gracias a los mecanismos de importación y referencia, XSD permite construir **sistemas de esquemas complejos pero bien organizados**, algo imprescindible en entornos empresariales.

### **Reglas avanzadas**

La versión 1.1 de XSD introduce una mejora muy importante: la posibilidad de definir **reglas lógicas avanzadas** que relacionan distintos valores del documento.
Estas reglas permiten validar la **coherencia global** del documento, no solo elementos individuales. Por ejemplo, es posible expresar condiciones como:

- una fecha de inicio debe ser anterior a una fecha de fin.

- un importe total debe ser mayor que cero.

- ciertos campos solo son válidos si otros tienen un valor determinado.

Aunque XSD no sustituye la lógica de negocio completa, estas reglas permiten trasladar parte de la validación al propio esquema, mejorando la fiabilidad y reduciendo la complejidad del código de la aplicación.

> **📌 XSD**
> 

```html
<xs:assert test="total &gt; 0"/>
```

Esto permite validar coherencia global del documento.

### **Ejemplo**

<details markdown="1">

<summary>💡 Exemple Complet</summary>

Un documento XML válido debería tener una forma similar a esta:

> **📌 XML**
> 

```html
<pedido id="P001">
    <cliente>Ana</cliente>
    <producto>Teclado</producto>
    <producto>Ratón</producto>
    <total>45.50</total>
</pedido>
```

Nuestro objetivo es crear un XSD que acepte documentos como este y rechace los incorrectos.

> **📌 XSD**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
        elementFormDefault="qualified"
        version="1.1">

    <!-- Tipo simple reutilizable -->
    <xs:simpleType name="importePositivo">
        <xs:restriction base="xs:decimal">
            <xs:minInclusive value="0"/>
        </xs:restriction>
    </xs:simpleType>

    <!-- Tipo complejo del pedido -->
    <xs:complexType name="pedidoType">
        <xs:sequence>
            <xs:element name="cliente" type="xs:string"/>
            <xs:element name="producto" type="xs:string" minOccurs="1" maxOccurs="unbounded"/>
            <xs:element name="total" type="importePositivo"/>
        </xs:sequence>

        <xs:attribute name="id" type="xs:string" use="required"/>

        <!-- Regla avanzada XSD 1.1 -->
        <xs:assert test="total &gt; 0"/>
    </xs:complexType>

    <!-- Elemento raíz -->
    <xs:element name="pedido" type="pedidoType"/>

</xs:schema>
```

</details>

## **Crear un JSON Schema**

JSON Schema es la tecnología clave para **describir, validar y documentar documentos JSON** en sistemas modernos. Es especialmente importante en el desarrollo de **APIs, backends y arquitecturas distribuidas**, donde los datos deben intercambiarse de forma clara y sin ambigüedades.

Crear un JSON Schema profesional no consiste únicamente en indicar qué propiedades tiene un JSON, sino en definir **un contrato de datos completo**, que describa:

- la estructura del documento.

- los tipos de datos esperados.

- qué campos son obligatorios.

- qué restricciones deben cumplirse.

- qué reglas dependen del contexto.

Este proceso se realiza de forma progresiva, siguiendo una serie de pasos que ayudan a construir schemas claros, mantenibles y reutilizables.

### **Declarar el draft**

El primer paso al crear un JSON Schema es indicar **qué versión del estándar se está utilizando**. Esto se hace mediante la propiedad $schema.

> **📌 JSON Schema**
> 

```html
"$schema": "https://json-schema.org/draft/2020-12/schema"
```

Esta declaración es fundamental porque evita interpretaciones ambiguas del schema.
Los validadores y herramientas necesitan saber **qué reglas deben aplicar**, ya que distintas versiones del estándar pueden comportarse de forma diferente.

En entornos profesionales actuales, declarar el draft **no es opcional**, sino una buena práctica imprescindible para garantizar compatibilidad entre herramientas.

### **Añadir un identificador**

Un JSON Schema profesional debe tener un **identificador único**, definido mediante la propiedad $id.

> **📌 JSON Schema**
> 

```html
"$id": "https://example.com/schemas/pedido.json"
```

Este identificador cumple varias funciones importantes:

- Permite **referenciar el schema desde otros schemas**.

- Facilita la organización de los esquemas en proyectos grandes.

- Permite que APIs y validadores identifiquen de forma inequívoca el esquema.

En sistemas reales, este identificador suele ser una URL, incluso aunque el schema no esté publicado públicamente.

### **Especificar el tipo principal**

Una vez identificada la versión y el schema, hay que indicar **qué tipo de dato describe el documento**.

> **📌 JSON Schema**
> 

```html
"type": "object"
```

La mayoría de documentos JSON utilizados en APIs describen **objetos**, es decir, conjuntos de propiedades con claves y valores.

Definir el tipo principal permite detectar errores estructurales muy básicos, por ejemplo si se recibe un array cuando se esperaba un objeto o viceversa.

### **Definir las propiedades del documento**

El siguiente paso consiste en describir **qué propiedades puede tener el objeto** y qué tipo tiene cada una.

> **📌 JSON Schema**
> 

```html
"properties": {
    "cliente": {
        "type": "string"
    },
    "total": {
        "type": "number",
        "minimum": 0
    }
}
```

Aquí se está definiendo que:

- cliente debe ser una cadena de texto.

- total debe ser un número y, además, no puede ser negativo.

Este paso es esencial porque traduce el **modelo conceptual del dominio** (pedido, usuario, producto…) a reglas formales que el sistema puede validar automáticamente.

### **Establecer los campos obligatorios**

Definir propiedades no implica que todas sean obligatorias.

Para indicar qué campos deben existir siempre en el documento se utiliza la propiedad required.

> **📌 JSON Schema**
> 

```html
"required": ["cliente", "total"]
```

Esta definición evita documentos incompletos, por ejemplo pedidos sin cliente o sin importe total.

Desde el punto de vista del desarrollo, esta validación temprana evita tener que comprobar manualmente en código si los datos existen, reduciendo errores y simplificando la lógica del backend.

### **Añadir validación condicional**

En muchos sistemas reales, las reglas no son siempre iguales: dependen del contexto o de otros campos.
JSON Schema 2.0 permite modelar estas situaciones mediante **validación condicional**.

> **📌 JSON Schema**
> 

```html
"if": {
    "properties": {
        "tipo": {
            "const": "premium"
        }
    }
},
"then": {  "required": ["descuento"]}
```

Esta definición expresa una regla del dominio de forma clara: Si el tipo de cliente es “premium”, entonces el campo descuento debe existir.

Gracias a esta funcionalidad:

- se evita duplicar schemas.

- se modelan variantes del mismo documento.

- el schema se acerca más a la realidad del negocio.

Este tipo de validación es uno de los grandes avances de JSON Schema en versiones modernas.

### **Separar schemas y usar referencias**

En proyectos reales, los schemas no suelen escribirse en un único archivo grande.
Lo más habitual es **separar las definiciones** y reutilizarlas mediante referencias.

> **📌 JSON Schema**
> 

```html
"$ref": "./cliente.schema.json"
```

Este enfoque permite:

- reutilizar definiciones comunes (cliente, dirección, producto…).

- mantener los schemas más simples y legibles.

- facilitar el mantenimiento y la evolución del sistema.

La modularización convierte a JSON Schema en una herramienta verdaderamente escalable, adecuada para proyectos medianos y grandes.

### **Ejemplo**

<details markdown="1">

<summary>💡 Exemple Complet</summary>

Para validar este JSON, con un pedido premium y otro que no lo es:

> **📌 JSON**
> 

```html
{
    "cliente": "Ana",
    "tipo": "premium",
    "total": 120.50,
    "descuento": 10
}

{
    "cliente": "Luis",
    "tipo": "normal",
    "total": 45
}
```

crearemos el JSON Schema para validarlo

> **📌 JSON Schema**
> 

```html
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/schemas/pedido.schema.json",

    "type": "object",

    "properties": {
        "cliente": {
            "type": "string",
            "minLength": 1
        },
        "tipo": {
            "type": "string",
            "enum": ["normal", "premium"]
        },
        "total": {
            "type": "number",
            "minimum": 0
        },
        "descuento": {
            "type": "number",
            "minimum": 0
        }
},

"required": ["cliente", "tipo", "total"],

"if": {
    "properties": {
    "tipo": { "const": "premium" }
    }
},
"then": {
    "required": ["descuento"]
},

"additionalProperties": false
}
```

</details>

---

## 6.5 Uso de descripciones para validar documentos

# **Uso de descripciones para validar documentos**

Validar documentos es un pilar del RA4.
Las mejores prácticas actuales indican validar en todos los puntos del flujo de datos.

## **Validación XML**

Herramientas:

- `xmllint --schema fichero.xsd documento.xml`

- Oxygen XML Editor (GUI)

- Herramientas W3C online

## **Validación JSON**

Herramientas:

- AJV (Node.js)

- JSON Schema CLI

- JSONLint (solo comprueba bien formado, no validez)

Importante: habilitar el modo estricto en AJV para evitar esquemas ambiguos.

# **Asociación de descripciones con documentos**

Asociar la descripción con el documento significa indicar qué esquema o definición debe utilizarse para validarlo.

## **En XML**

Con **DTD**, la asociación se realiza mediante la declaración `<!DOCTYPE>`:

```html
<!DOCTYPE libro SYSTEM "libro.dtd">
```

Con **XSD**, se usa el atributo `xsi:noNamespaceSchemaLocation`:

```html
<libro xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:noNamespaceSchemaLocation="libro.xsd">
```

Esto indica al validador dónde encontrar la gramática.

## **En JSON**

En JSON no suele hacerse la asociación dentro del documento del mismo modo que en XML.
Normalmente la asociación se realiza desde:

- la aplicación,

- la documentación de la API,

- la herramienta de validación,

- el entorno de desarrollo.

Ejemplo conceptual:

- archivo `persona.json`

- archivo `persona.schema.json`

La aplicación sabe que debe validar `persona.json` con `persona.schema.json`.

---

## 6.6 Herramientas específicas para la validación

# **Herramientas específicas para la validación**

## **Herramientas para XML**

- `xmllint` (línea de comandos, estándar Linux)

- Oxygen XML (editor profesional)

- W3C XML Validator (web)

## **Herramientas para JSON Schema**

- AJV: el validador más completo y actualizado; soporta Draft 2020‑12 y funciones modernas.

- JSON Schema Store: repositorio oficial con schemas de cientos de herramientas.

- Validación JSON Schema integrada en VSCode.

---

## ✏️ Actividades y Prácticas de la Unidad


---

### Actividad Práctica ACT601 — Ejercicios Validación de documentos

# **Ejercicios Validación de documentos**

## **DTD**

### **Ejercicio 1 - DTD**

> **📌 Enunciado**
> 

> A partir del XML sobre recetas, que tenemos a continuación, hay que crear un DTD que valide si es correcto.

<details markdown="1">

<summary>💡 XML</summary>

```html
<?xml version="1.0" encoding="UTF-8"?>
    <recetas>
        <!-- El tiempo está en minutos -->
        <receta id="r01" nombre="ensalada" preparacion="5">
            <ingrediente nombre="tomate" unidad="pieza" cantidad="2" />
            <ingrediente nombre="cebolla" unidad="pieza" cantidad=".25" />
            <ingrediente nombre="lechuga" unidad="gramo" cantidad="150" />
            <ingrediente nombre="sal" unidad="gramo" cantidad="2" />
            <ingrediente nombre="vinagre" unidad="cc" cantidad="3" />
            <ingrediente nombre="aceite" unidad="cc" cantidad="6" />
        </receta>

        <receta id="r02" nombre="bocadillo de anchoas" preparacion="4">
            <ingrediente nombre="pan" unidad="pieza" cantidad="1" />
            <ingrediente nombre="anchoa" unidad="pieza" cantidad="3" />
        </receta>

        <!-- Más recetas -->
    </recetas>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ELEMENT recetas (receta+)>

<!ELEMENT receta (ingrediente+)>
<!ATTLIST receta id              ID                #REQUIRED
                nombre          CDATA             #REQUIRED
                preparacion     CDATA             #IMPLIED>

<!ELEMENT ingrediente EMPTY>
<!ATTLIST ingrediente nombre     CDATA             #REQUIRED
                    unidad     (pieza|gramo|cc)  #REQUIRED
                    cantidad   NMTOKEN           #REQUIRED>
```

</details>

### **Ejercicio 2 - DTD**

> **📌 Enunciado**
> 

> A partir del XML sobre recetas, que tenemos a continuación, hay que crear un DTD que valide si es correcto.

<details markdown="1">

<summary>💡 XML</summary>

```html
<?xml version="1.0" encoding="UTF-8"?>
<cadena nombre="Burriquín">

<recetas>
    <!-- El tiempo está en minutos -->
    <receta id="r01" nombre="ensalada" preparacion="5">
        <ingrediente nombre="tomate" unidad="pieza" cantidad="2" />
        <ingrediente nombre="cebolla" unidad="pieza" cantidad=".25" />
        <ingrediente nombre="lechuga" unidad="gramo" cantidad="350" />
        <ingrediente nombre="sal" unidad="gramo" cantidad="2" />
        <ingrediente nombre="vinagre" unidad="cc" cantidad="3" />
        <ingrediente nombre="aceite" unidad="cc" cantidad="6" />
    </receta>

    <receta id="r02" nombre="bocadillo de anchoas" preparacion="4">
        <ingrediente nombre="pan" unidad="pieza" cantidad="1" />
        <ingrediente nombre="anchoa" unidad="pieza" cantidad="lata" />
    </receta>

    <!-- Más recetas -->
</recetas>

<restaurante id="re01" nombre="El tragón feliz">
    <domicilio>
        <direccion>c/ Callo, nº 25. Bajo.</direccion>
        <municipio>Vallecito frondoso</municipio>
        <cp>12345</cp>
    </domicilio>
    <carta>
        <!-- Este plato se sirve como ración o como media o como tapa -->
        <plato ref="r01">
            <tipo>racion</tipo>
            <tipo>media</tipo>
            <tipo>tapa</tipo>
        </plato>
        <plato ref="r02">
            <tipo>media</tipo>
        </plato>
        <!-- Más platos -->
    </carta>
</restaurante>
<!-- Más restaurantes de la cadena -->
</cadena>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ENTITY % recetas SYSTEM "recetas.dtd">
%recetas;

<!ELEMENT cadena (recetas, restaurante+)>
<!ATTLIST cadena nombre       CDATA          #REQUIRED>

<!ELEMENT restaurante (domicilio, carta)>
<!ATTLIST restaurante id      ID             #REQUIRED
                    nombre  CDATA          #IMPLIED>

<!ELEMENT domicilio (direccion, municipio, cp)>

<!ELEMENT direccion (#PCDATA)>
<!ELEMENT municipio (#PCDATA)>
<!ELEMENT cp        (#PCDATA)>

<!ELEMENT carta (plato+)>

<!ELEMENT plato EMPTY>
<!ATTLIST plato ref           IDREF          #REQUIRED
                tipo          NMTOKENS       #REQUIRED>
```

</details>

### **Ejercicio 3 - DTD**

> **📌 Enunciado**
> 

> 1. Diseña un DTD que valide:

>   - un elemento raíz usuarios.

>   - uno o más elementos usuario.

>   - cada usuario debe tener nombre y correo.

> 1. Asocia el DTD al documento XML.

<details markdown="1">

<summary>💡 XML</summary>

```html
<usuarios>
<usuario>
    <nombre>Ana</nombre>
    <correo>ana@email.com</correo>
</usuario>
<usuario>
    <nombre>Carlos</nombre>
    <correo>carlos@email.com</correo>
</usuario>
</usuarios>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ELEMENT usuarios (usuario+)>
<!ELEMENT usuario (nombre, correo)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT correo (#PCDATA)>
```

</details>

### **Ejercicio 4 - DTD**

> **📌 Enunciado**
> 

> 1. Crear un DTD que:

>   - obligue al atributo isbn

>   - valide que libro contenga titulo y autor

> 1. Indicar si el orden de los elementos es obligatorio..

<details markdown="1">

<summary>💡 XML</summary>

```html
<biblioteca>
<libro isbn="1234">
    <titulo>Java Básico</titulo>
    <autor>Juan Pérez</autor>
</libro>
</biblioteca>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ELEMENT biblioteca (libro+)>
<!ELEMENT libro (titulo, autor)>
<!ATTLIST libro isbn CDATA #REQUIRED>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
```

</details>

### **Ejercicio 5 - DTD**

> **📌 Enunciado**
> 

> Crear un DTD y comprobar si el siguiente XML sería válido:

<details markdown="1">

<summary>💡 XML</summary>

```html
<curso>
    <horas>120</horas>
    <nombre>Lenguajes de Marcas</nombre>
</curso>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 DTD**
> 

```html
<!ELEMENT curso (nombre, horas)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT horas (#PCDATA)>
```

</details>

## **XSD**

### **Ejercicio 1 - XSD**

> **📌 Enunciado**
> 

> A partir del XML sobre recetas, que tenemos a continuación, hay que crear un XSD que valide si es correcto.

<details markdown="1">

<summary>💡 XML</summary>

```html
<?xml version="1.0" encoding="UTF-8"?>
    <recetas>
        <!-- El tiempo está en minutos -->
        <receta id="r01" nombre="ensalada" preparacion="5">
            <ingrediente nombre="tomate" unidad="pieza" cantidad="2" />
            <ingrediente nombre="cebolla" unidad="pieza" cantidad=".25" />
            <ingrediente nombre="lechuga" unidad="gramo" cantidad="150" />
            <ingrediente nombre="sal" unidad="gramo" cantidad="2" />
            <ingrediente nombre="vinagre" unidad="cc" cantidad="3" />
            <ingrediente nombre="aceite" unidad="cc" cantidad="6" />
        </receta>

        <receta id="r02" nombre="bocadillo de anchoas" preparacion="4">
            <ingrediente nombre="pan" unidad="pieza" cantidad="1" />
            <ingrediente nombre="anchoa" unidad="pieza" cantidad="3" />
        </receta>

        <!-- Más recetas -->
    </recetas>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:element name="recetas">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="receta" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="ingrediente" maxOccurs="unbounded">
                                <xs:complexType>
                                    <xs:attribute name="nombre" type="xs:string" use="required"/>
                                    <xs:attribute name="unidad" type="xs:string" use="required"/>
                                    <xs:attribute name="cantidad" type="xs:decimal" use="required"/>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                        <xs:attribute name="id" type="xs:string" use="required"/>
                        <xs:attribute name="nombre" type="xs:string" use="required"/>
                        <xs:attribute name="preparacion" type="xs:integer" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

</details>

### **Ejercicio 2 - XSD**

> **📌 Enunciado**
> 

> A partir del XML sobre un restaurante, que tenemos a continuación, hay que crear un XSD que valide si es correcto.

<details markdown="1">

<summary>💡 XML</summary>

```html
<?xml version="1.0" encoding="UTF-8"?>
<cadena nombre="Burriquín">

<recetas>
    <!-- El tiempo está en minutos -->
    <receta id="r01" nombre="ensalada" preparacion="5">
        <ingrediente nombre="tomate" unidad="pieza" cantidad="2" />
        <ingrediente nombre="cebolla" unidad="pieza" cantidad=".25" />
        <ingrediente nombre="lechuga" unidad="gramo" cantidad="350" />
        <ingrediente nombre="sal" unidad="gramo" cantidad="2" />
        <ingrediente nombre="vinagre" unidad="cc" cantidad="3" />
        <ingrediente nombre="aceite" unidad="cc" cantidad="6" />
    </receta>

    <receta id="r02" nombre="bocadillo de anchoas" preparacion="4">
        <ingrediente nombre="pan" unidad="pieza" cantidad="1" />
        <ingrediente nombre="anchoa" unidad="lata" cantidad="1" />
    </receta>

    <!-- Más recetas -->
</recetas>

<restaurante id="re01" nombre="El tragón feliz">
    <domicilio>
        <direccion>c/ Callo, nº 25. Bajo.</direccion>
        <municipio>Vallecito frondoso</municipio>
        <cp>12345</cp>
    </domicilio>
    <carta>
        <!-- Este plato se sirve como ración o como media o como tapa -->
        <plato ref="r01">
            <tipo>racion</tipo>
            <tipo>media</tipo>
            <tipo>tapa</tipo>
        </plato>
        <plato ref="r02">
            <tipo>media</tipo>
        </plato>
        <!-- Más platos -->
    </carta>
</restaurante>
<!-- Más restaurantes de la cadena -->
</cadena>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <!-- Tipos simples -->

    <xs:simpleType name="tipoIdReceta">
        <xs:restriction base="xs:string">
            <xs:pattern value="r[0-9]{2}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoIdRestaurante">
        <xs:restriction base="xs:string">
            <xs:pattern value="re[0-9]{2}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoUnidad">
        <xs:restriction base="xs:string">
            <xs:enumeration value="pieza"/>
            <xs:enumeration value="gramo"/>
            <xs:enumeration value="cc"/>
            <xs:enumeration value="lata"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoCantidad">
        <xs:restriction base="xs:decimal">
            <xs:minExclusive value="0"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoPreparacion">
        <xs:restriction base="xs:positiveInteger"/>
    </xs:simpleType>

    <xs:simpleType name="tipoCP">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{5}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="tipoServicio">
        <xs:restriction base="xs:string">
            <xs:enumeration value="racion"/>
            <xs:enumeration value="media"/>
            <xs:enumeration value="tapa"/>
            <xs:enumeration value="racion media tapa"/>
            <xs:enumeration value="racion media"/>
            <xs:enumeration value="racion tapa"/>
            <xs:enumeration value="media tapa"/>
        </xs:restriction>
    </xs:simpleType>

    <!-- Elemento raíz -->

    <xs:element name="cadena">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="recetas">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="receta" maxOccurs="unbounded">
                                <xs:complexType>
                                    <xs:sequence>
                                        <xs:element name="ingrediente" maxOccurs="unbounded">
                                            <xs:complexType>
                                                <xs:attribute name="nombre" type="xs:string" use="required"/>
                                                <xs:attribute name="unidad" type="tipoUnidad" use="required"/>
                                                <xs:attribute name="cantidad" type="tipoCantidad" use="required"/>
                                            </xs:complexType>
                                        </xs:element>
                                    </xs:sequence>
                                    <xs:attribute name="id" type="tipoIdReceta" use="required"/>
                                    <xs:attribute name="nombre" type="xs:string" use="required"/>
                                    <xs:attribute name="preparacion" type="tipoPreparacion" use="required"/>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>

                <xs:element name="restaurante" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="domicilio">
                                <xs:complexType>
                                    <xs:sequence>
                                        <xs:element name="direccion" type="xs:string"/>
                                        <xs:element name="municipio" type="xs:string"/>
                                        <xs:element name="cp" type="tipoCP"/>
                                    </xs:sequence>
                                </xs:complexType>
                            </xs:element>

                            <xs:element name="carta">
                                <xs:complexType>
                                    <xs:sequence>
                                        <xs:element name="plato" maxOccurs="unbounded">
                                            <xs:complexType>
                                                <xs:attribute name="ref" type="tipoIdReceta" use="required"/>
                                                <xs:attribute name="tipo" type="tipoServicio" use="required"/>
                                            </xs:complexType>
                                        </xs:element>
                                    </xs:sequence>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                        <xs:attribute name="id" type="tipoIdRestaurante" use="required"/>
                        <xs:attribute name="nombre" type="xs:string" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>

            <xs:attribute name="nombre" type="xs:string" use="required"/>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

</details>

### **Ejercicio 3 - XSD**

> **📌 Enunciado**
> 

> 1. Crear un XSD que:

>   - obligue a que la edad sea ≥ 18

>   - defina tipos de datos adecuados

<details markdown="1">

<summary>💡 XML</summary>

```html
<empleado>
    <nombre>María</nombre>
    <edad>30</edad>
</empleado>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
<xs:element name="empleado">
    <xs:complexType>
    <xs:sequence>
        <xs:element name="nombre" type="xs:string"/>
        <xs:element name="edad">
        <xs:simpleType>
            <xs:restriction base="xs:integer">
            <xs:minInclusive value="18"/>
            </xs:restriction>
        </xs:simpleType>
        </xs:element>
    </xs:sequence>
    </xs:complexType>
</xs:element>
</xs:schema>
```

</details>

### **Ejercicio 4 - XSD**

> **📌 Enunciado**
> 

> 1. Precio decimal positivo

> 1. Stock entero ≥ 0

<details markdown="1">

<summary>💡 XML</summary>

```html
<producto>
    <nombre>Monitor</nombre>
    <precio>199.99</precio>
    <stock>10</stock>
</producto>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
<xs:element name="producto">
    <xs:complexType>
    <xs:sequence>
        <xs:element name="nombre" type="xs:string"/>
        <xs:element name="precio" type="xs:decimal"/>
        <xs:element name="stock">
        <xs:simpleType>
            <xs:restriction base="xs:integer">
            <xs:minInclusive value="0"/>
            </xs:restriction>
        </xs:simpleType>
        </xs:element>
    </xs:sequence>
    </xs:complexType>
</xs:element>
</xs:schema>
```

</details>

### **Ejercicio 5 - XSD**

> **📌 Enunciado**
> 

> 1. Definir tipos complejos

> 1. Permitir uno o más empleados

<details markdown="1">

<summary>💡 XML</summary>

```html
<empresa>
    <nombre>Tech S.L.</nombre>
    <empleados>
        <empleado>Ana</empleado>
        <empleado>Carlos</empleado>
    </empleados>
</empresa>
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 XSD**
> 

```html
<xs:element name="empresa">
<xs:complexType>
    <xs:sequence>
    <xs:element name="nombre" type="xs:string"/>
    <xs:element name="empleados">
        <xs:complexType>
        <xs:sequence>
            <xs:element name="empleado" type="xs:string" minOccurs="1" maxOccurs="unbounded"/>
        </xs:sequence>
        </xs:complexType>
    </xs:element>
    </xs:sequence>
</xs:complexType>
</xs:element>
```

</details>

## **JSON Schema**

### **Ejercicio 1 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Edad ≥ 18.

> 1. Ambos campos obligatorios.

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"nombre": "Ana",
"edad": 25
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"$schema": "https://json-schema.org/draft/2020-12/schema",
"type": "object",
"properties": {
    "nombre": { "type": "string" },
    "edad": { "type": "integer", "minimum": 18 }
},
"required": ["nombre", "edad"]
}
```

</details>

### **Ejercicio 2 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Precio positivo.

> 1. No permitir propiedades extra.

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"nombre": "Teclado",
"precio": 49.9,
"disponible": true
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "nombre": { "type": "string" },
    "precio": { "type": "number", "exclusiveMinimum": 0 },
    "disponible": { "type": "boolean" }
},
"required": ["nombre", "precio"],
"additionalProperties": false
}
```

</details>

### **Ejercicio 3 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Validar tipos.

> 1. Total > 0.

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"id": 1001,
"total": 250.5
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "id": { "type": "integer" },
    "total": { "type": "number", "exclusiveMinimum": 0 }
},
"required": ["id", "total"]
}
```

</details>

### **Ejercicio 4 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Validar formato email.

> 1. Password mínimo 6 caracteres.

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"email": "usuario@email.com",
"password": "abc123"
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "email": { "type": "string", "format": "email" },
    "password": { "type": "string", "minLength": 6 }
},
"required": ["email", "password"]
}
```

</details>

### **Ejercicio 5 - JSON-Schema**

> **📌 Enunciado**
> 

> 1. Crear JSON Schema.

> 1. Si rol = admin → permisos obligatorios

> 1. Si rol ≠ admin → permisos opcionales

<details markdown="1">

<summary>💡 JSON</summary>

```html
{
"rol": "admin",
"email": "admin@email.com",
"permisos": ["crear", "editar"]
}
```

</details>

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JSON Schema**
> 

```html
{
"type": "object",
"properties": {
    "rol": { "enum": ["admin", "usuario"] },
    "email": { "type": "string", "format": "email" },
    "permisos": {
    "type": "array",
    "items": { "type": "string" }
    }
},
"required": ["rol", "email"],
"if": {
    "properties": {
    "rol": { "const": "admin" }
    }
},
"then": {
    "required": ["permisos"]
}
}
```

</details>
