---
layout: default
title: "UD8: Almacenamiento y Consulta de Información — XQuery y SGBD Nativos XML (BaseX) — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT08"
prev_url: "../ut07/index.html"
prev_label: "⬅️ UD7"
next_url: "../ut09/index.html"
next_label: "UD9 ➡️"
---

# UD8: Almacenamiento y Consulta de Información — XQuery y SGBD Nativos XML (BaseX)

Bienvenido/a a la **UD8: Almacenamiento y Consulta de Información — XQuery y SGBD Nativos XML (BaseX)** del módulo profesional de **Lenguajes de Marcas y Sistemas de Gestión de Información** (1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI)).

En esta unidad encontrarás los contenidos teóricos, ejemplos prácticos, ejercicios resueltos y actividades de evaluación curricular desarrollados por el profesor **Manuel Alonso Argente**.

---

### 📑 Índice de Apartados y Actividades de la Unidad

- [**📋 8.0 Propuesta Didáctica: Almacenamiento de información**](./ut0800.html)
- [**8.1 Introducción al almacenamiento de información**](./ut0801.html)
- [**8.2 Métodos de almacenamiento de la información**](./ut0802.html)
- [**8.3 Almacenamiento de XML en bases de datos relacionales**](./ut0803.html)
- [**8.4 Bases de datos nativas XML**](./ut0804.html)
- [**8.5 Lenguajes de consulta**](./ut0805.html)
- [**8.6 Herramientas y casos prácticos**](./ut0806.html)

**Actividades Prácticas y Fichas de Trabajo:**

- [**✏️ ACT801 Ejercicios Almacenamiento de información**](./act_act801.html)

---

# 📖 Vista Completa de la Unidad

## 8.0 Propuesta Didáctica — Almacenamiento de información

# **Almacenamiento de información**

## **Propuesta didáctica**

En esta UP trabajamos con el **RA6**: Gestiona información en formato XML analizando y utilizando tecnologías de almacenamiento y lenguajes de consulta.

## **Criterios de evaluación**

### **Respecto al RA6:**

| Código | Descripción | Peso (%) | Herramientas Evaluación |
| --- | --- | --- | --- |
| **CE6a** | Se han identificado los principales métodos de almacenamiento de la información utilizados en documentos de intercambio de datos. | 5% | EXA601 |
| **CE6b** | Se han identificado las ventajas e inconvenientes de almacenar información en formatos de intercambio de datos. | 5% | EXA601 |
| **CE6c** | Se han establecido tecnologías eficientes de almacenamiento de información en función de sus características. | 5% | EXA601 |
| **CE6d** | Se han identificado lenguajes y herramientas para el tratamiento y almacenamiento de información y su inclusión en documentos de intercambio de datos. | 10% | ACT801 (10%) -- EXA601 (90%) |
| **CE6e** | Se han utilizado lenguajes de consulta y manipulación en documentos de intercambio de datos. | 20% | ACT801 (15%) -- EXA601 (85%) |
| **CE6f** | Se han utilizado sistemas gestores de bases de datos relacionales en el almacenamiento de información en formatos de intercambio de datos. | 20% | ACT801 (15%) -- EXA601 (85%) |
| **CE6g** | Se han utilizado técnicas específicas para crear documentos de intercambio de datos a partir de información almacenada en bases de datos relacionales. | 20% | ACT801 (15%) -- EXA601 (85%) |
| **CE6h** | Se han identificado las características de los sistemas gestores de bases de datos nativas XML. | 5% | EXA601 |
| **CE6i** | Se han utilizado herramientas para gestionar la información almacenada en bases de datos nativas. | 10% | ACT801 (50%) -- EXA601 (50%) |

## **Contenidos**

### **Almacenamiento de información:**

- Métodos de almacenamiento de la información utilizados en documentos de intercambio de datos. (CE6.a)

- Ventajas e inconvenientes de almacenar la información en formatos de intercambio de datos. (CE6.b)

- Tecnologías eficientes de almacenamiento de información en función de sus características. (CE6.c)

- Lenguajes y herramientas para el tratamiento y almacenamiento de información y su inclusión en documentos de intercambio de datos. (CE6.d)

- Lenguajes de consulta y manipulación en documentos de intercambio de datos. (CE6.e)

- Almacenamiento de información en sistemas gestores de bases de datos relacionales. (CE6.f)

- Técnicas específicas para crear documentos de intercambio de datos a partir de información de bases de datos relacionales. (CE6.g)

- Características de los sistemas gestores de bases de datos nativas XML. (CE6.h)

- Herramientas para gestionar la información almacenada en bases de datos nativas. (CE6.i)

**Cuestionario inicial**

1. ¿Qué métodos de almacenamiento de la información XML conoces?

1. ¿Qué ventajas e inconvenientes tiene almacenar la información en formato XML?

1. ¿Qué es una base de datos relacional y cómo se puede almacenar XML en ella?

1. ¿Qué es una base de datos nativa XML?

1. ¿Qué es XQuery y para qué se utiliza?

1. ¿Cómo se crea un documento XML a partir de la información de una base de datos relacional?

1. ¿Qué herramientas de bases de datos y de consulta conoces?

## **Programación de Aula (6h)**

Esta unidad se imparte en la tercera evaluación, a continuación de la UP07 (Conversión de documentos). La unidad tiene una duración estimada de 6 horas lectivas repartidas en 6 sesiones de una hora, durante los días que se indican en el calendario (los días de clase son lunes, con una hora, y jueves, con dos horas). Debido a las vacaciones de Fallas y de Semana Santa, la unidad se desarrolla entre los meses de marzo y abril. La sesión de evaluación del jueves 8 de abril se cuenta dentro de esta unidad.

### **Calendario**

#### **Marzo 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | **6 🛑** | **7 🛑** |
| 8 | 9 | 10 | **11 📚** | 12 | **13 🛑** | **14 🛑** |
| **15 📚** | 16 | **17 🛑** | **18 🛑** | **19 🛑** | **20 🛑** | **21 🛑** |
| **22 📚** | 23 | 24 | **25 🛑** | **26 🛑** | **27 🛑** | **28 🛑** |
| **29 🛑** | **30 🛑** | **31 🛑** |  |  |  |  |

#### **Abril 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| **5 🛑** | 6 | 7 | **8 📚** | 9 | **10 🛑** | **11 🛑** |
| 12 | 13 | 14 | 15 | 16 | **17 🛑** | **18 🛑** |
| 19 | 20 | 21 | 22 | 23 | **24 🛑** | **25 🛑** |
| 26 | 27 | 28 | 29 | 30 |  |  |

### **Sesiones**

| Sesión | Contenidos | Actividades | Criterios trabajados |
| --- | --- | --- | --- |
| 1 | 8.1 Introducción al almacenamiento de información | -- | CE6.a - CE6.b |
| 2 | 8.2 Métodos de almacenamiento de la información | -- | CE6.a - CE6.b - CE6.c |
| 3 | 8.3 Almacenamiento de XML en bases de datos relacionales | ACT801 | CE6.f - CE6.g |
| 4 | 8.4 Bases de datos nativas XML | ACT801 | CE6.h - CE6.i |
| 5 | 8.5 Lenguajes de consulta -- 8.6 Herramientas y casos prácticos | ACT801 | CE6.d - CE6.e |
| 6 | Evaluación de la unidad | EXA601 | CE6.a - CE6.b - CE6.c - CE6.d - CE6.e - CE6.f - CE6.g - CE6.h - CE6.i |

---

## 8.1 Introducción al almacenamiento de información

# **Introducción al almacenamiento de información**

A lo largo de las unidades anteriores hemos aprendido a **estructurar** información con XML, a **validarla** con DTD y XSD y a **transformarla** con XSLT. Pero hay una pregunta que todavía no hemos respondido: **¿dónde se guarda esa información?**

Cuando un sistema genera documentos XML o JSON, esos datos no pueden vivir eternamente en un archivo suelto dentro de una carpeta. En el mundo real las empresas manejan millones de documentos que deben poder **guardarse, buscarse, actualizarse y consultarse** de forma rápida y segura. De eso trata esta unidad: de las distintas **tecnologías de almacenamiento** y de los **lenguajes de consulta** que permiten recuperar la información cuando se necesita.

## **El reto de almacenar documentos XML**

Almacenar información en formato XML es cómodo porque es un formato de texto legible, independiente de la plataforma y estándar. Sin embargo, a medida que el volumen de datos crece, aparecen problemas serios:

- **Búsqueda lenta:** localizar un dato dentro de miles de archivos de texto exige recorrerlos todos.

- **Sin concurrencia:** dos programas no pueden modificar a la vez el mismo archivo sin riesgo de corrupción.

- **Sin integridad:** nada garantiza que un archivo no se quede a medias si el proceso que lo escribía falla.

- **Sin control de acceso:** cualquier usuario del sistema puede abrir, modificar o borrar el archivo.

- **Duplicidad:** la misma información puede repetirse en muchos archivos y perder la coherencia.

La solución a estos problemas pasa por **delegar el almacenamiento en un sistema gestor de bases de datos (SGBD)**, que es un programa especializado en guardar, organizar y recuperar información de forma eficiente y segura.

## **Los métodos de almacenamiento: un primer mapa**

Para guardar documentos XML existen cuatro grandes opciones, y la elección depende de las características de cada proyecto:

| Método | ¿Cómo guarda el XML? | Adecuado cuando... |
| --- | --- | --- |
| **Ficheros planos** | El documento completo se guarda como un archivo de texto en el sistema de archivos. | El volumen es pequeño y no se necesitan consultas complejas. |
| **SGBD relacional** | El XML se almacena en tablas (como texto, como tipo XML o descompuesto en columnas). | Ya existe una base de datos relacional en la organización. |
| **SGBD nativo XML** | El documento XML se guarda como una unidad y se consulta con XQuery. | La información es intrínsecamente documental y jerárquica. |
| **SGBD NoSQL documental** | El documento se guarda en un formato tipo JSON en colecciones. | Se necesita mucha escalabilidad y esquemas flexibles. |

💡 **Ejemplo:** un instituto puede tener un millón de facturas XML. Guardarlas como ficheros planos sería un desastre: tardaríamos horas en encontrar la factura de un cliente. Almacenarlas en un SGBD (relacional o nativo XML) permite responder en milisegundos.

## **Evolución del almacenamiento de datos**

La historia del almacenamiento de información explica por qué hoy existen tantas opciones:

1. **Ficheros planos.** Los primeros programas guardaban los datos en archivos de texto separados por comas o espacios. Baratos, pero muy limitados.

1. **Bases de datos relacionales (1970-1990).** Con SQL se pudo consultar y relacionar datos de forma potente. Dominan hoy el mundo empresarial (Oracle, MySQL, PostgreSQL, SQL Server).

1. **Bases de datos orientadas a XML (2000).** Al popularizarse XML como formato de intercambio, aparecieron SGBD que guardan los documentos XML sin descomponerlos (eXist-db, BaseX).

1. **Bases de datos NoSQL documentales (2008-actualidad).** Con la Web 2.0 y el auge de JSON, herramientas como MongoDB guardan documentos completos en formato JSON con gran escalabilidad.

Cada tecnología no ha "matado" a la anterior: hoy conviven todas porque cada una resuelve un problema distinto.

## **Ámbitos de aplicación: datos frente a documentos**

Los documentos XML y los requisitos de su almacenamiento se pueden agrupar en **dos grandes ámbitos**, y la mayoría de los productos se centra en servir mejor uno de los dos:

| Ámbito | Características | Ejemplos | Tecnología recomendada |
| --- | --- | --- | --- |
| **Sistemas centrados en los datos** | Estructura bien definida; datos que se pueden actualizar y usar de diversos modos | Noticias, artículos, publicidad, facturas, compras | Bases de datos **relacionales** |
| **Sistemas centrados en los documentos** | Documentos impredecibles en tamaño y contenido; más tipos de datos, campos opcionales y reglas flexibles | Informes, manuales, contratos, fichas heterogéneas | Sistemas de **gestión de contenido y documentos** |

💡 **Clave:** un sistema de almacenamiento XML debe acomodarse eficientemente a **ambos** tipos de requerimientos, porque XML se usa en sistemas que administran datos y documentos a la vez.

## **XML como formato de intercambio, no solo de almacenamiento**

Es importante tener clara una idea: **XML nació para intercambiar información entre sistemas**, no necesariamente para almacenarla de forma definitiva.

- En el **intercambio** (dos empresas que se pasan un pedido), XML es ideal: estándar, legible, validable.

- En el **almacenamiento** a largo plazo, a veces conviene convertir ese XML a una estructura de base de datos, o bien guardarlo en una base de datos preparada para documentos.

### 💡 Ejemplo: el catálogo de la librería

Una librería recibe cada mañana un fichero `catalogo.xml` del distribuidor:

```html
<libros>
    <libro id="l001">
        <titulo>Lenguajes de marcas</titulo>
        <autor>María López</autor>
        <precio>29.95</precio>
    </libro>
    <libro id="l002">
        <titulo>Sistemas de gestión</titulo>
        <autor>Javier Ruiz</autor>
        <precio>24.50</precio>
    </libro>
</libros>
```

La librería no quiere dejar ese archivo en una carpeta. Quiere:
- **Buscar** un título en menos de un segundo.
- **Consultar** todos los libros por debajo de 25 €.
- **Actualizar** precios sin reescribir todo el archivo.
- **Protegerlo** para que solo el personal autorizado lo modifique.

Todas esas necesidades se resuelven moviendo los datos a un **SGBD**. En los próximos apartados veremos las dos grandes familias que podemos elegir: las **bases de datos relacionales** y las **bases de datos nativas XML**.

## **Resumen**

- Los **ficheros planos** solo sirven para proyectos pequeños.

- Un **SGBD** aporta eficiencia, concurrencia, integridad, seguridad y consultas.

- Las principales opciones para XML son: **relacional**, **nativa XML** y **NoSQL documental**.

- XML es un formato de **intercambio**; su almacenamiento debe decidirse según las necesidades de cada sistema.

---

## 8.2 Métodos de almacenamiento de la información

# **Métodos de almacenamiento de la información**

En el apartado anterior vimos que existen cuatro grandes métodos para almacenar documentos XML. Ahora vamos a profundizar en cada uno de ellos, a conocer sus **ventajas e inconvenientes** y a aprender a **elegir la tecnología más eficiente** según las características del problema.

## **1. Almacenamiento en ficheros planos**

Es la opción más simple: el documento XML se guarda como un archivo de texto en una carpeta del sistema.

**Ventajas:**
- Sencillez total: no hace falta instalar ningún programa.
- Portabilidad: se puede copiar, enviar por correo o subir a un servidor web sin configuración.
- Legibilidad: cualquier editor de texto permite ver el contenido.

**Inconvenientes:**
- Las búsquedas requieren recorrer el archivo completo (lineal).
- No soporta **concurrencia**: dos procesos no pueden escribir a la vez.
- No garantiza **transacciones** (si el proceso falla a mitad, el archivo queda corrupto).
- No hay control de acceso granular ni copias de seguridad automáticas.
- Difícil de escalar cuando hay miles o millones de documentos.

💡 **Ejemplo:** el archivo `configuracion.xml` de una aplicación es un caso legítimo de fichero plano. Pero el millón de facturas de la empresa **no** debe guardarse así.

## **2. Almacenamiento en SGBD relacionales**

Las bases de datos relacionales (SQL) almacenan la información en **tablas** formadas por filas y columnas, y permiten relacionar unas tablas con otras mediante claves. Un documento XML se puede guardar en una base de datos relacional de dos formas distintas:

### A. Documento completo como texto o tipo XML

El documento XML se guarda en una columna de la tabla, sin descomponer. Muchos SGBD ofrecen un tipo de dato específico (`xml` en SQL Server y PostgreSQL, `XMLType` en Oracle).

```html
CREATE TABLE facturas (
    id       INTEGER PRIMARY KEY,
    fecha    DATE,
    xml_doc  XML
);

INSERT INTO facturas VALUES (1, '2027-03-02', '
    <factura id="f001">
        <cliente>Ana Pérez</cliente>
        <total>125.80</total>
    </factura>
');
```

**Ventaja:** el documento se guarda íntegro y se puede validar con el tipo XML. **Inconveniente:** para consultar dentro del documento hay que usar extensiones específicas (SQL/XML).

### B. Descomposición del documento en tablas

El contenido del XML se reparte en las tablas de la base de datos siguiendo el modelo relacional (una tabla para `facturas`, otra para `lineas_factura`, etc.).

**Ventaja:** las consultas SQL clásicas funcionan perfectamente. **Inconveniente:** se pierde la estructura del documento y hay que reconstruirla al exportar.

## **3. Almacenamiento en SGBD nativos XML**

Una **base de datos nativa XML** almacena el documento XML **como una unidad**, respetando su estructura jerárquica, y permite consultarlo con **XQuery** y **XPath**. Los principales sistemas son **eXist-db** y **BaseX**.

**Ventajas:**
- Guarda el documento íntegro, sin descomponer.
- Consultas potentes sobre la estructura (XQuery/XPath).
- Gestión de colecciones de documentos.
- Validación con esquemas (DTD, XSD) integrada.

**Inconvenientes:**
- Menos maduras y conocidas que las bases relacionales.
- Herramientas de administración más limitadas.
- No son la mejor opción para datos muy estructurados tipo facturación masiva.

## **4. Almacenamiento en SGBD NoSQL documentales**

Las bases **documentales** (el ejemplo más famoso es **MongoDB**) almacenan documentos en formato **JSON** dentro de colecciones. Aunque no son bases nativas XML, son fundamentales en el panorama actual porque JSON es el formato de intercambio dominante en la Web.

```html
{
  "titulo": "Lenguajes de marcas",
  "autor": "María López",
  "precio": 29.95
}
```

**Ventajas:** gran escalabilidad horizontal, esquema flexible, integración natural con JavaScript. **Inconveniente:** no validan XML de forma nativa; el XML debe convertirse antes a JSON.

## **5. Almacenamiento en SGBD orientados a objetos**

Las bases de datos orientadas a objetos (**DBOO**) soportan un **modelo de objetos puro**, es decir, no están basadas en extensiones de otros modelos más clásicos como el relacional.

**Características:**
- Están influenciadas por los lenguajes de programación orientados a objetos.
- Pueden verse como un intento de añadir la funcionalidad de un SGBD a un lenguaje de programación.
- Son una alternativa para el almacenamiento y gestión de documentos XML.

**Componentes:**
- **Modelo de objetos:** proporciona un modelo de objetos estándar en el que se basan los demás componentes.
- **ODL** (*Lenguaje de Especificación de Objetos*): lenguaje específico para la definición de objetos.
- **OQL** (*Lenguaje de Consulta de Objetos*): lenguaje específico para realizar consultas contra los objetos.
- **OML** (*Lenguaje de Manipulación de Objetos*): extiende el lenguaje de programación para soportar objetos persistentes, consultas OQL, navegación y transacciones, gracias a los *bindings* para lenguajes como C++ o Java.

**Relación con XML:** la transformación de un documento XML a objetos es inmediata; una vez transformado, los objetos los gestiona directamente el SGBD y se consultan con OQL. En cambio, los mecanismos del SGBD (indexación, optimización, procesamiento de consultas) no son específicos del modelo XML.

## **Inconvenientes generales de almacenar información en XML**

Independientemente del método elegido, conviene conocer los problemas típicos del XML como formato de almacenamiento:

1. **Verboso y pesado:** las etiquetas de apertura y cierre repiten información, lo que infla el tamaño del documento.

1. **Coste de procesamiento:** analizar (parsear) un XML exige más CPU y memoria que leer formatos más simples.

1. **Falta de tipado natural:** los valores se guardan como texto y hay que convertirlos explícitamente.

1. **Consultas complejas:** sobre un fichero plano resultan lentas; sobre una base de datos requieren lenguajes especializados (XPath, XQuery, SQL/XML).

1. **Redundancia y desnormalización:** el mismo dato puede aparecer repetido en muchos documentos.

💡 **Ejemplo de peso:** un documento que en JSON ocupa 2 KB puede ocupar 5 KB en XML por las etiquetas. Si se almacenan un millón de documentos, esa diferencia se traduce en gigabytes extra en disco y en tiempo de transmisión.

## **Cómo elegir la tecnología eficiente (CE6c)**

La regla práctica para decidir el método de almacenamiento se basa en **las características del problema**:

| Característica del problema | Tecnología recomendada |
| --- | --- |
| Volumen pequeño, sin consultas complejas | Fichero plano |
| Ya existe una base relacional y el XML es esporádico | SGBD relacional (tipo XML) |
| Datos muy estructurados con relaciones | SGBD relacional (descompuesto) |
| Documentos jerárquicos con consultas por estructura | SGBD nativo XML (XQuery) |
| Gran volumen, esquema flexible, entorno web/JS | NoSQL documental (MongoDB) |

### 💡 Ejemplo de decisión

- **Biblioteca** con 50.000 fichas de libros → SGBD **nativo XML** o **relacional** según queramos consultar por estructura (XQuery) o por campos (SQL).

- **Facturación** de una empresa con datos muy regulares y relaciones (cliente, pedido, línea) → SGBD **relacional** descompuesto.

- **Logs** de una aplicación web que genera miles de documentos por minuto → **NoSQL** (MongoDB).

## **Resumen**

- Los métodos de almacenamiento son: **ficheros planos**, **SGBD relacional**, **SGBD nativo XML**, **NoSQL documental** y, en menor medida, los **SGBD orientados a objetos**.

- El XML como almacenamiento tiene **inconvenientes** propios: verbosidad, coste de procesamiento y consultas complejas.

- La elección de la **tecnología eficiente** depende del volumen, la estructura de los datos y el tipo de consultas que se necesiten.

---

## 8.3 Almacenamiento de XML en bases de datos relacionales

# **Almacenamiento de XML en bases de datos relacionales**

Las bases de datos relacionales son las más extendidas en el mundo empresarial. Por eso, una de las tareas más habituales es **guardar documentos XML en ellas** y, a la inversa, **generar documentos XML a partir de sus datos**. En este apartado veremos cómo hacer ambas cosas con SQL estándar y con las extensiones SQL/XML.

## **¿Cómo guardar un documento XML en una tabla?**

Existen dos estrategias principales: **guardar el documento entero** o **descomponerlo** en las columnas de las tablas.

### A. El documento completo en una columna XML

Los principales SGBD relacionales ofrecen un tipo de dato nativo para XML:

| SGBD | Tipo de dato XML | Observaciones |
| --- | --- | --- |
| **PostgreSQL** | `xml` | Validación básica de bien formado |
| **SQL Server** | `xml` | Permite índices sobre XML y consultas XQuery integradas |
| **Oracle** | `XMLType` | Muy completo, con soporte XQuery |
| **MySQL** | `LONGTEXT` | No tiene tipo XML; se guarda como texto |

```html
CREATE TABLE productos (
    id         INTEGER PRIMARY KEY,
    categoria  VARCHAR(30),
    ficha      XML
);

INSERT INTO productos VALUES (1, 'portatil', '<producto>
    <nombre>Portátil Pro 14</nombre>
    <precio>899.00</precio>
    <stock>12</stock>
</producto>');
```

**Ventajas:** se conserva la estructura del documento, se puede validar y consultar con XPath/XQuery dentro de SQL. **Inconvenientes:** el acceso a los datos "internos" exige usar extensiones no estándar.

### B. Descomposición del documento en tablas

Consiste en traducir la jerarquía XML al modelo relacional: cada elemento con repeticiones se convierte en una tabla hija y los atributos en columnas.

```html
<pedido id="p10">
    <cliente>Ana Pérez</cliente>
    <fecha>2027-03-02</fecha>
    <linea ref="l01" cantidad="2" precio="15.00"/>
    <linea ref="l02" cantidad="1" precio="48.50"/>
</pedido>
```

```html
CREATE TABLE pedidos (
    id      VARCHAR(10) PRIMARY KEY,
    cliente VARCHAR(50),
    fecha   DATE
);

CREATE TABLE lineas_pedido (
    id       VARCHAR(10),
    linea    INTEGER,
    ref      VARCHAR(10),
    cantidad INTEGER,
    precio   NUMERIC(8,2),
    PRIMARY KEY (id, linea),
    FOREIGN KEY (id) REFERENCES pedidos(id)
);
```

**Ventajas:** consultas SQL clásicas (JOIN, agregados) y rendimiento óptimo. **Inconveniente:** hay que reconstruir el XML al exportar.

## **SQL/XML: construir XML desde una base relacional (CE6g)**

Para **crear documentos XML a partir de los datos de la base de datos**, SQL estándar define una familia de funciones conocida como **SQL/XML**. Las más útiles son:

- `XMLELEMENT(nombre, valor...)` → crea un elemento.

- `XMLATTRIBUTES(...)` → añade atributos al elemento.

- `XMLFOREST(...)` → crea varios elementos hermanos.

- `XMLAGG(...)` → agrupa filas en elementos (necesario para las repeticiones).

### 💡 Ejemplo: generar un catálogo XML con PostgreSQL

Partimos de las tablas anteriores y queremos obtener un documento XML con todos los pedidos:

```html
SELECT XMLELEMENT(name "pedidos",
    XMLAGG(
        XMLELEMENT(name "pedido",
            XMLATTRIBUTES(p.id AS id),
            XMLELEMENT(name "cliente", p.cliente),
            XMLELEMENT(name "fecha", p.fecha),
            XMLAGG(
                XMLELEMENT(name "linea",
                    XMLATTRIBUTES(l.ref AS ref, l.cantidad AS cantidad,
                                  l.precio AS precio)
                )
                ORDER BY l.linea
            )
        )
    )
) AS documento
FROM pedidos p
JOIN lineas_pedido l ON l.id = p.id
GROUP BY p.id, p.cliente, p.fecha;
```

El resultado es un documento XML bien formado que puede enviarse a otro sistema:

```html
<pedidos>
    <pedido id="p10">
        <cliente>Ana Pérez</cliente>
        <fecha>2027-03-02</fecha>
        <linea ref="l01" cantidad="2" precio="15.00"/>
        <linea ref="l02" cantidad="1" precio="48.50"/>
    </pedido>
</pedidos>
```

En **SQL Server** existe una sintaxis alternativa muy popular, `FOR XML`:

```html
SELECT id, cliente, fecha
FROM pedidos
FOR XML PATH('pedido'), ROOT('pedidos');
```

## **Consultar XML dentro de una base relacional**

Además de generar XML, los SGBD relacionales permiten **consultar dentro** de las columnas XML usando XPath y XQuery.

### 💡 Ejemplo con PostgreSQL

Buscar el nombre de los productos de la tabla `productos` cuyo precio supera 500 €:

```html
SELECT
    xpath('/producto/nombre/text()', ficha) AS nombre,
    xpath('/producto/precio/text()', ficha) AS precio
FROM productos
WHERE (xpath('/producto/precio/text()', ficha))[1]::text::numeric > 500;
```

En **SQL Server** es más directo gracias a los métodos del tipo `xml`:

```html
SELECT
    ficha.value('(/producto/nombre)[1]', 'VARCHAR(50)') AS nombre,
    ficha.value('(/producto/precio)[1]', 'DECIMAL(8,2)') AS precio
FROM productos
WHERE ficha.exist('/producto[precio > 500]') = 1;
```

## **Ventajas e inconvenientes de almacenar XML en una base relacional**

| Ventajas | Inconvenientes |
| --- | --- |
| Reutiliza la infraestructura SQL existente | La sintaxis SQL/XML varía entre SGBD |
| Consultas y transacciones potentes | Descomponer un documento es laborioso |
| Seguridad y permisos estándar | El tipo XML pierde la "frescura" del fichero original |
| Generación y consulta de XML desde SQL | Menos natural para jerarquías profundas |

## **Resumen**

- Un documento XML se puede guardar en una base relacional **entero** (tipo `xml`) o **descompuesto** en tablas.

- La familia de funciones **SQL/XML** (`XMLELEMENT`, `XMLATTRIBUTES`, `XMLAGG`...) permite **crear documentos XML** a partir de tablas.

- Los SGBD relacionales permiten **consultar dentro del XML** con XPath/XQuery integrado en SQL.

- La elección entre documento completo o descomposición depende de cómo se vaya a usar después la información.

---

## 8.4 Bases de datos nativas XML

# **Bases de datos nativas XML**

Las bases de datos relacionales guardan los datos en tablas. Pero cuando la información es **documental y jerárquica** (catálogos, facturas, informes, fichas), a veces es más natural guardar el **documento XML completo** y consultarlo con **XPath y XQuery**. Para eso existen las **bases de datos nativas XML**.

## **¿Qué es una base de datos nativa XML?**

Una **base de datos nativa XML** (o NXD, del inglés *Native XML Database*) es un sistema gestor que:

- Almacena el documento XML **como una unidad lógica**, sin descomponerlo en tablas.

- Respeta la **estructura jerárquica** del documento (el modelo de datos XDM).

- Permite **consultar** los documentos con **XPath** y **XQuery**.

- Permite organizar los documentos en **colecciones**.

Las más conocidas son:

| Sistema | Licencia | Características destacadas |
| --- | --- | --- |
| **eXist-db** | Open Source | Servidor web integrado, REST, muy usada en bibliotecas y archivos |
| **BaseX** | Open Source | Rápida, con interfaz gráfica y consola, buena documentación |
| **Sedna** | Open Source | SGBD nativa académica |

## **Características principales**

1. **Almacenamiento documental:** se guarda el documento íntegro (no troceado).

1. **Consultas potentes:** XQuery permite filtrar, ordenar, agrupar y transformar documentos en una sola consulta.

1. **Colecciones:** los documentos se agrupan en carpetas lógicas llamadas *collections*, equivalentes a las tablas de una base relacional.

1. **Validación:** se pueden asociar esquemas (DTD, XSD, Relax NG) a las colecciones para validar los documentos al insertarlos.

1. **Índices:** para acelerar las consultas sobre elementos o atributos frecuentes.

## **Instalación de eXist-db (CE6i)**

Vamos a instalar **eXist-db**, la base de datos nativa XML más utilizada en entornos educativos y culturales.

### Paso 1: requisitos previos

- Tener instalada una **máquina virtual de Java** (JRE 11 o superior). Comprobamos con:

```html
java -version
```

### Paso 2: descarga y arranque

1. Descarga eXist-db desde su página oficial y descomprime el archivo.

1. Entra en la carpeta descomprimida y ejecuta el script de arranque:

```html
./bin/startup.sh
```

1. Al terminar el arranque, se abre automáticamente la interfaz web de administración en:

```html
http://localhost:8080/exist/
```

💡 **Truco:** si el puerto 8080 está ocupado, se puede cambiar editando el archivo `conf.xml` de la instalación.

### Paso 3: almacenar documentos en colecciones

1. En la interfaz web, entra en **Apps → eXide** (el editor integrado).

1. Crea una colección `catalogo`.

1. Sube el documento `productos.xml` a esa colección:

```html
<productos>
    <producto id="p1" categoria="portatil">
        <nombre>Portátil Pro 14</nombre>
        <precio>899.00</precio>
    </producto>
    <producto id="p2" categoria="periferico">
        <nombre>Teclado inalámbrico</nombre>
        <precio>34.90</precio>
    </producto>
    <producto id="p3" categoria="monitor">
        <nombre>Monitor 27"</nombre>
        <precio>219.00</precio>
    </producto>
</productos>
```

1. En la ventana de consultas de eXide, comprueba que el documento se puede recuperar:

```html
collection('/db/catalogo')/productos
```

Si la consulta devuelve el documento, la base de datos nativa XML está funcionando y almacenando nuestros documentos.

## **Gestión de la información en la base nativa (CE6i)**

Una vez instalada, la información almacenada se puede gestionar de varias formas:

### Insertar un documento desde la consola

Además de subirlo por la interfaz, se puede almacenar un documento mediante XQuery:

```html
xquery version "3.1";

let $doc := document {
    <producto id="p4" categoria="raton">
        <nombre>Ratón ergonómico</nombre>
        <precio>22.50</precio>
    </producto>
}
return xmldb:store('/db/catalogo', 'p4.xml', $doc)
```

### Modificar y borrar documentos

Con la extensión `xmldb:` se pueden actualizar o eliminar documentos de la colección:

```html
xmldb:remove('/db/catalogo', 'p4.xml')
```

### Control de permisos

eXist-db gestiona usuarios, grupos y permisos (lectura, escritura, ejecución) sobre colecciones y documentos, igual que un sistema de archivos.

## **Cuándo usar una base de datos nativa XML**

Es la opción natural cuando:

- La unidad de información es **el documento completo** (una factura, una ficha, un informe), no un registro.

- Las consultas se hacen **sobre la estructura** del documento ("dame todos los productos con precio menor que 50").

- Se necesitan **colecciones** de documentos heterogéneos.

- Interesa **publicar** los documentos en la Web (eXist-db trae servidor HTTP y servicios REST).

En cambio, para datos masivos y muy regulares (miles de filas idénticas), una base relacional sigue siendo más eficiente.

## **Resumen**

- Una **base de datos nativa XML** guarda documentos XML íntegros y los consulta con XPath/XQuery.

- **eXist-db** y **BaseX** son las herramientas más representativas.

- Los documentos se organizan en **colecciones** y se gestionan desde la interfaz web o mediante XQuery (`xmldb:store`, `xmldb:remove`).

- Es la mejor opción para información **documental y jerárquica**.

---

## 8.5 Lenguajes de consulta

# **Lenguajes de consulta**

Disponer de los datos almacenados solo es útil si sabemos **recuperarlos**. Cada tecnología de almacenamiento tiene su lenguaje de consulta: SQL para bases relacionales, XQuery/XPath para bases nativas XML y JSONPath/jq para JSON. En este apartado nos centramos en **XQuery**, el lenguaje de consulta de los documentos XML.

## **Panorama de los lenguajes de consulta**

| Lenguaje | Se usa sobre... | Sirve para... |
| --- | --- | --- |
| **SQL** | Bases de datos relacionales | Seleccionar, insertar, actualizar y borrar datos en tablas |
| **XPath** | Documentos XML | Localizar nodos dentro de un documento |
| **XQuery** | Documentos y colecciones XML | Consultas y transformaciones complejas sobre XML |
| **JSONPath** | Documentos JSON | Localizar elementos dentro de un documento JSON |
| **jq** | Documentos JSON | Filtrar y transformar JSON desde la terminal |

💡 **Clave:** XPath es un subconjunto de XQuery. Todo lo que se puede hacer con XPath se puede hacer con XQuery, pero XQuery añade variables, condiciones, ordenación y agregación.

## **XQuery: qué es y para qué se usa**

**XQuery** es un lenguaje estándar del W3C para consultar y transformar documentos XML. Se parece a SQL en su filosofía (seleccionar información), pero trabaja con la estructura jerárquica de los documentos en lugar de con tablas. XQuery es a XML lo que SQL es a las bases de datos relacionales.

**Aplicaciones:**

- **Recuperar** información a partir de conjuntos de datos XML.

- **Transformar** unas estructuras XML en otras que organizan la información de forma diferente.

- **Alternativa a XSLT** para transformar XML a otros formatos (HTML, PDF, texto).

- Realizar **agregaciones** (contar, sumar, promediar).

- Combinar información de varios documentos o colecciones.

**Requerimientos técnicos principales** (definidos por el W3C):

- Es un lenguaje **declarativo**.

- Es **independiente del origen de los datos**: la misma consulta funciona sobre un fichero local, un fichero en un servidor web o una base de datos.

- Las consultas y los resultados respetan el **modelo de datos XML** y soportan *namespaces*, XSD y DTD (aunque también puede trabajar sin ellos).

- Es **independiente de la estructura** del documento: funciona sin conocerla.

- Soporta tipos simples (enteros, cadenas) y complejos (nodos), cuantificadores universales y existenciales, y la combinación de varias fuentes en una consulta.

## **El modelo de datos de XQuery**

El modelo de datos sobre el que se sustenta XQuery es muy distinto del relacional, porque XML incluye conceptos como **jerarquía** y **orden de los datos** que no existen en SQL. La entrada y la salida de una consulta se definen en términos de este modelo, que proporciona una representación abstracta de uno o más documentos XML.

Las principales características son:

- **Secuencias:** una colección **ordenada** de cero o más ítems. Pueden ser heterogéneas (mezclar nodos y valores atómicos), pero una secuencia nunca puede ser un ítem de otra secuencia.

- **Orden del documento:** corresponde al orden en que aparecen los nodos si la jerarquía se representara en XML. Si el primer carácter de un nodo ocurre antes que el de otro, lo precede también en el orden del documento.

- **Error value:** un valor especial resultado de evaluar una expresión que contiene un error.

💡 **Ejemplo de orden:** no es lo mismo buscar una etiqueta `<b>` dentro de una `<a>` (`/root/a/b`) que todas las `<b>` del documento (`//b`), que pueden estar anidadas o no.

## **Expresiones**

Una **consulta** en XQuery es una **expresión** que lee una secuencia de datos en XML y devuelve otra **secuencia de datos** como **resultado**.

- En XQuery **todo es una expresión** que se evalúa a un **valor** (una secuencia heterogénea de nodos y valores atómicos).

- La mayoría de las expresiones se componen combinando expresiones más simples mediante operadores y palabras reservadas.

- Puesto que XQuery se construye sobre XPath, **toda expresión XPath es también una consulta XQuery válida**.

## **Sintaxis de XQuery**

Para escribir una consulta XQuery hay que tener en cuenta:

- Los caracteres `{` y `}` delimitan las **expresiones** que se **evalúan** para crear un documento nuevo.

- Los **comentarios** se escriben entre `(:` y `:)`.

- XQuery admite expresiones **condicionales** `if-then-else`, con la misma semántica que en los lenguajes de programación habituales.

- Las cláusulas FLWOR son **case sensitive**: solo se escriben en **minúsculas** (`for`, `let`, `where`, `order by`, `return`).

Ejemplo completo:

```html
(: Selecciona los títulos de los libros de O'Reilly Media :)
<ul>{
    for $x in doc("libros.xml")/biblioteca/libros/libro
    where $x/editorial = "O'Reilly Media"
    order by $x/titulo
    return <li>{data($x/titulo)}</li>
}</ul>
```

## **La expresión FLWOR**

El corazón de XQuery es la expresión **FLWOR**, cuyas siglas corresponden a:

| Cláusula | Significado | Ejemplo |
| --- | --- | --- |
| **F**or | Itera sobre una secuencia de nodos | `for $p in /productos/producto` |
| **L**et | Asigna una variable a un valor | `let $total := 100` |
| **W**here | Filtra los elementos de la iteración | `where $p/precio > 50` |
| **O**rder by | Ordena los resultados | `order by $p/precio descending` |
| **R**eturn | Produce el resultado de la consulta | `return $p/nombre` |

En una sentencia FLWOR ha de existir, al menos, una cláusula `for` o una `let`. El resto, si existen, deben respetar el orden del nombre FLWOR.

### Cláusula `for`

Asocia una o más **variables** con cada **nodo** de la colección de datos. Si aparece más de una cláusula `for` (o más de una variable en una misma `for`), el resultado es el **producto cartesiano** de las variables.

```html
for $p in /libros/libro
return $p/titulo
```

Con filtro en la propia expresión:

```html
for $p in /empleados/empleado[apellido = "García"]
return $p/nombre
```

### Cláusula `let`

Asigna un **valor inmutable** a una variable, que se puede utilizar después. Las variables de XQuery son **inmutables**: una vez definidas no se pueden modificar, por lo que se comportan como constantes.

```html
let $a := 5
let $b := 10
return $a + $b
```

Combinada con funciones de agregación permite obtener un **único valor**:

```html
let $nombres := /empleados/empleado[edad >= 18]/nombre
return count($nombres)
```

### Cláusula `where`

Filtra los resultados de las cláusulas `for` y `let` según una **expresión booleana**.

- Con un **`for`**, la condición se evalúa a **cada elemento** de la lista:

```html
for $libro in //libro
where $libro/precio > 50
return $libro/titulo
```

```html
for $estudiante in //estudiante
where avg($estudiante/calificaciones/calificacion) > 8.5
return $estudiante/nombre
```

- Con un **`let`**, la condición se evalúa a toda la **variable como un único valor**. No filtra elemento a elemento: si el valor de la variable es una lista, se devuelve completa o no se devuelve nada.

```html
let $n := 2
where $n > 1
return $n
```

### Cláusula `order by`

Ordena los resultados según uno o varios **criterios**. Por defecto el orden es **ascendiente**; se añade el modificador `descending` para el descendiente.

```html
for $libro in //libro
order by $libro/autor, $libro/titulo
return $libro/titulo
```

```html
for $estudiante in //estudiante
let $promedio := avg($estudiante/calificaciones/calificacion)
order by $promedio descending
return $estudiante/nombre
```

### Cláusula `return`

Especifica **qué información** se devuelve. Puede contener desde valores simples hasta estructuras XML complejas, y se pueden usar funciones y expresiones en su interior.

```html
for $libro in //libro
return $libro/titulo
```

```html
for $estudiante in //estudiante[nombre = 'Juan']
let $promedio := avg($estudiante/calificaciones/calificacion)
return $promedio
```

### 💡 Ejemplos completos

**Ejemplo 1: seleccionar con for y return.** Partimos del catálogo de productos de la base de datos eXist-db:

```html
for $p in collection('/db/catalogo')/productos/producto
return $p/nombre
```

Resultado: la lista de todos los nombres de productos.

**Ejemplo 2: filtrar con where.** Productos de la categoría `monitor` con precio superior a 200:

```html
for $p in collection('/db/catalogo')/productos/producto
where $p/@categoria = 'monitor' and $p/precio > 200
return $p/nombre
```

**Ejemplo 3: ordenar y construir un documento nuevo.** Generamos un documento HTML con los productos ordenados de más barato a más caro:

```html
<ul>{
    for $p in collection('/db/catalogo')/productos/producto
    order by xs:decimal($p/precio)
    return <li>{ $p/nombre } -- { $p/precio } €</li>
}</ul>
```

## **Funciones de XQuery**

XQuery incluye **funciones integradas** para procesar y manipular datos, pero también permite definir **funciones propias**.

### Funciones numéricas

| Función | Qué calcula |
| --- | --- |
| `floor(secuencia)` | Redondea al valor numérico **inferior** más próximo |
| `ceiling(secuencia)` | Redondea al valor numérico **superior** más próximo |
| `round(secuencia)` | Redondea al valor más próximo |
| `count(secuencia)` | Cuenta la cantidad de ítems |
| `min(secuencia)` | Mínimo de los valores |
| `max(secuencia)` | Máximo de los valores |
| `avg(secuencia)` | Media aritmética |
| `sum(secuencia)` | Suma de los valores |

### Funciones de cadenas de texto

| Función | Qué calcula |
| --- | --- |
| `concat(c1, c2, ...)` | Une varias cadenas de texto |
| `string-length(cadena)` | Número de caracteres de una cadena |
| `starts-with(cadena, sub)` | Comprueba si una cadena **empieza** por otra |
| `ends-with(cadena, sub)` | Comprueba si una cadena **termina** por otra |
| `upper-case(cadena)` | Convierte la cadena a **mayúsculas** |
| `lower-case(cadena)` | Convierte la cadena a **minúsculas** |

### Funciones de uso general

| Función | Qué calcula |
| --- | --- |
| `empty(secuencia)` | Devuelve `true` si la secuencia no contiene ningún elemento |
| `exists(secuencia)` | Devuelve `true` si la secuencia contiene al menos un elemento |
| `distinct-values(secuencia)` | Devuelve los valores **únicos** de una secuencia |
| `data(nodos)` | Devuelve el **valor** de los nodos, sin etiquetas |

### Cuantificadores

| Palabra clave | Qué comprueba |
| --- | --- |
| `some $x in secuencia satisfies condición` | Que **algún** elemento verifica la condición |
| `every $x in secuencia satisfies condición` | Que **todos** los elementos verifican la condición |

### Definición de funciones propias

Permite definir operaciones que no están incluidas de forma nativa, modularizar el código y reutilizarlo. Se usa `declare function` seguida del nombre, los argumentos y el cuerpo:

```html
declare function minPrice($p as xs:decimal?, $d as xs:decimal?) as xs:decimal? {
    let $disc := ($p * $d) div 100
    return ($p - $disc)
}
```

Para utilizar la función en una consulta:

```html
for $libro in /biblioteca/libros/libro
return <minPrice>{ minPrice($libro/precio, $libro/descuento) }</minPrice>
```

## **Operadores**

Los operadores más importantes se agrupan según su funcionalidad.

### Comparación de valores

Comparan dos **valores escalares** y producen un error si alguno de los operandos es una secuencia de longitud mayor que 1.

| Operador | Descripción |
| --- | --- |
| `eq` | Igual a |
| `ne` | Distinto de |
| `lt` | Menor que |
| `le` | Menor o igual que |
| `gt` | Mayor que |
| `ge` | Mayor o igual que |

### Comparación general

Comparan operandos que pueden ser **secuencias**.

| Operador | Descripción |
| --- | --- |
| `=` | Igual a |
| `!=` | Distinto de |
| `>` | Mayor que |
| `>=` | Mayor o igual que |
| `<` | Menor que |
| `<=` | Menor o igual que |

### Comparación de nodos y de su orden

| Operador | Descripción |
| --- | --- |
| `is` | `true` si las dos variables están ligadas al mismo nodo |
| `is not` | `true` si las dos variables no están ligadas al mismo nodo |
| `<<` | `true` si el primer nodo ocurre antes en el orden del documento |

### Lógicos

| Operador | Descripción |
| --- | --- |
| `and` | Operador «y» |
| `or` | Operador «o» |

### Secuencias de nodos

Devuelven secuencias en el orden del documento y eliminan los duplicados.

| Operador | Descripción |
| --- | --- |
| `union` | Nodos que aparecen en alguno de los dos operandos |
| `intersect` | Nodos que aparecen en los dos operandos |
| `except` | Nodos del primer operando que no aparecen en el segundo |

### Aritméticos

| Operador | Descripción |
| --- | --- |
| `+` | Suma |
| `-` | Diferencia |
| `*` | Producto |
| `div` | Cociente |
| `mod` | Módulo (resto de la división) |

## **Ficheros de consultas**

Las consultas se pueden escribir directamente en un software con motor XQuery, o **almacenarse en ficheros** para su reutilización. Para ello se crea un fichero de texto con la consulta y se guarda con una de estas extensiones:

```html
.xq   .xqm   .xqy   .xql   .xqu   .xquery
```

Por ejemplo, un fichero `consulta.xq`:

```html
for $libro in /biblioteca/libros/libro
return $libro/titulo
```

## **Comparación: XQuery frente a SQL**

| Aspecto | SQL | XQuery |
| --- | --- | --- |
| Unidad de trabajo | Filas de una tabla | Nodos de un documento |
| Estructura de los datos | Plana (tablas) | Jerárquica (árbol) |
| Iteración | `SELECT` + `JOIN` | `for` / `let` |
| Filtro | `WHERE` | `where` |
| Ordenación | `ORDER BY` | `order by` |
| Resultado | Conjunto de filas | Documento o secuencia de nodos |

Ambos conviven: un sistema real puede tener los datos en una base relacional (SQL) y exportarlos a XML para que una base nativa los consulte con XQuery.

## **Resumen**

- XQuery es el **lenguaje de consulta de XML**, estándar del W3C, equivalente a SQL para documentos.

- Se sustenta en un **modelo de datos** basado en secuencias ordenadas, distinto del relacional.

- La expresión **FLWOR** (for, let, where, order by, return) permite consultas y transformaciones completas.

- Dispone de **funciones** (numéricas, de cadenas, de uso general), **cuantificadores** (`some`, `every`), definición de **funciones propias** y una amplia variedad de **operadores**.

- Las consultas se pueden guardar en ficheros `.xq`, `.xqm`, `.xqy`, `.xql`, `.xqu` o `.xquery`.

- SQL consulta **tablas**; XQuery consulta **documentos**; ambos se complementan en un sistema real.

---

## 8.6 Herramientas y casos prácticos

# **Herramientas y casos prácticos**

En este último apartado reunimos las **herramientas** que se utilizan para almacenar y consultar información y las aplicamos en una serie de **casos prácticos** que recorren todo el ciclo: datos relacionales, documentos XML, base de datos nativa y consultas.

## **Herramientas para el almacenamiento y la consulta**

### Bases de datos nativas XML

| Herramienta | Tipo | Uso principal |
| --- | --- | --- |
| **eXist-db** | Servidor | Base de datos nativa con interfaz web, editor eXide y servicios REST |
| **BaseX** | Escritorio | Base de datos nativa con interfaz gráfica, consola y cliente HTTP |

### Bases de datos relacionales

| Herramienta | Tipo | Uso principal |
| --- | --- | --- |
| **PostgreSQL / SQL Server / Oracle** | SGBD | Almacenar XML en columnas de tipo `xml` |
| **DBeaver** | Cliente SQL | Conectarse a distintos SGBD desde una única interfaz |
| **psql / SSMS** | Consola | Ejecutar SQL y SQL/XML desde la terminal |

### Consulta y transformación

| Herramienta | Tipo | Uso principal |
| --- | --- | --- |
| **XQuery / XPath** | Lenguaje | Consultar documentos y colecciones XML |
| **jq** | Terminal | Filtrar y transformar documentos JSON |
| **xsltproc / Saxon** | Procesadores | Transformar XML con XSLT (visto en la UP07) |

### Motores XQuery

| Herramienta | Tipo | Uso principal |
| --- | --- | --- |
| **BaseX** | BD nativa + motor | Motor completo de XPath, XQuery y XSLT con interfaz gráfica y consola |
| **Saxon** | Procesador | Motor XSLT/XQuery en Java (también C, .NET, PHP, Python, JavaScript) |
| **Fonto** | Online | Probador de consultas **XQuery 3.1** contra un documento XML en el navegador |
| **XPath 3.1 Online Tester** | Online | Probador de consultas XQuery 3.1 contra un documento XML en el navegador |

#### Probar consultas XQuery con BaseX

**BaseX** es una base de datos XML nativa y una herramienta de procesamiento de documentos XML de código abierto y multiplataforma. Algunos resultados en BaseX no salen correctamente indentados; para forzar una indentación correcta y facilitar la lectura del resultado, se añade esta instrucción en la primera línea de la consulta:

```html
declare option output:indent "yes";
```

#### Ejecutar XQuery con Saxon desde Java

**Saxon** implementa los estándares XSLT y XQuery. Para ejecutar una consulta desde Java se necesitan el **SDK de Java** y la **utilidad Saxon**, y se utiliza el siguiente comando:

```html
java -cp saxon-ee-12.1.jar net.sf.saxon.Query -s:doc.xml -q:query.xq -o:out.xml
```

Donde:
- `saxon-ee-12.1.jar` es el JAR de Saxon (junto al directorio `lib`, ambos en el directorio de ejecución).
- `doc.xml` es el documento XML sobre el que se realiza la consulta.
- `query.xq` es la consulta XQuery.
- `out.xml` es el resultado de la consulta.

#### Probar XQuery en línea: Fonto y XPath 3.1 Online Tester

**Fonto** ([xpath.playground.fontoxml.com](https://xpath.playground.fontoxml.com/)) permite probar consultas **XQuery 3.1**: se copia el documento XML en la parte izquierda, se selecciona la opción *XQuery 3.1* y se escribe la consulta; los resultados aparecen al instante a la derecha.

El **XPath 3.1 Online Tester** ([videlibri.de](https://videlibri.de/cgi-bin/xidelcgi)) funciona de forma similar: necesita un documento XML, la consulta a evaluar y tener seleccionada la opción *XQuery 3.1*.

## **Caso práctico 1: biblioteca con base de datos nativa XML**

Una biblioteca almacena sus fichas de libros como documentos XML en eXist-db, en la colección `/db/biblioteca`.

**Documento de ejemplo (`libro.xml`):**

```html
<libro isbn="978-84-00000-01-2">
    <titulo>Lenguajes de marcas</titulo>
    <autor>María López</autor>
    <anio>2026</anio>
    <precio>29.95</precio>
    <disponible>true</disponible>
</libro>
```

**Consulta 1:** libros disponibles ordenados por título:

```html
for $l in collection('/db/biblioteca')/libro
where $l/disponible = 'true'
order by $l/titulo
return $l/titulo
```

**Consulta 2:** número de libros por autor:

```html
for $a in distinct-values(collection('/db/biblioteca')/libro/autor)
let $n := count(collection('/db/biblioteca')/libro[autor = $a])
return <autor nombre="{ $a }" obras="{ $n }"/>
```

## **Caso práctico 2: de la base relacional al XML (CE6g)**

Una tienda guarda sus pedidos en una base de datos relacional. Al final del día necesita enviar a su central un **documento XML** con todos los pedidos del día para su análisis.

Con SQL/XML en PostgreSQL:

```html
SELECT XMLELEMENT(name "pedidos",
    XMLAGG(
        XMLELEMENT(name "pedido",
            XMLATTRIBUTES(p.id AS id),
            XMLELEMENT(name "cliente", p.cliente),
            XMLELEMENT(name "total",
                (SELECT sum(l.cantidad * l.precio)
                 FROM lineas_pedido l
                 WHERE l.id = p.id)
            )
        )
    )
) AS xml_dia
FROM pedidos p
WHERE p.fecha = CURRENT_DATE;
```

El resultado se exporta a un fichero `pedidos_dia.xml` y se integra con el resto de sistemas. De esta forma **la misma información viaja en dos formatos**: filas para la base de datos y XML para el intercambio.

## **Caso práctico 3: consulta con agregación y salida HTML**

Un analista quiere un informe **HTML** con las ventas agrupadas por categoría a partir del catálogo almacenado en eXist-db:

```html
xquery version "3.1";

let $productos := collection('/db/catalogo')/productos/producto
let $categorias := distinct-values($productos/@categoria)
return
    <html>
        <head><title>Informe de ventas</title></head>
        <body>
            <h1>Ventas por categoría</h1>
            <table border="1">
                <tr><th>Categoría</th><th>N.º productos</th><th>Precio medio</th></tr>
                {
                    for $c in $categorias
                    let $grupo := $productos[@categoria = $c]
                    return
                        <tr>
                            <td>{ $c }</td>
                            <td>{ count($grupo) }</td>
                            <td>{ avg($grupo/precio) }</td>
                        </tr>
                }
            </table>
        </body>
    </html>
```

Este documento HTML se puede servir directamente desde eXist-db como una página web, cerrando el círculo: **relacional → XML → base nativa → consulta → presentación web**.

## **Caso práctico 4: JSON y jq para el mismo problema**

En entornos web modernos, la información almacenada en XML suele convertirse a JSON para consumirla desde una App. Con `jq` podemos consultar un documento JSON tan fácilmente como XQuery consulta un XML:

```html
jq '[.libros[] | select(.precio > 20)] | length' biblioteca.json
```

La **integración de tecnologías** es la conclusión de esta unidad: elegir el **método de almacenamiento** adecuado y el **lenguaje de consulta** correspondiente es lo que permite que los sistemas intercambien y aprovechen la información.

## **Resumen**

- Las herramientas principales son las **bases de datos nativas XML** (eXist-db, BaseX), las **relacionales** con tipo XML y los **lenguajes de consulta** (XQuery, XPath, SQL/XML, jq).

- Los casos prácticos muestran el **ciclo completo**: datos relacionales → XML → almacenamiento en colecciones → consulta XQuery → salida HTML o JSON.

- La combinación adecuada de almacenamiento y consulta es lo que hace posible gestionar la información de forma **eficiente**.

---

## ✏️ Actividades y Prácticas de la Unidad


---

### Actividad Práctica ACT801 — Ejercicios Almacenamiento de información

# **Ejercicios Almacenamiento de información**

## **Actividad 1 - Análisis de métodos de almacenamiento (CE6a)**

> **📌 Enunciado**
> 

> 1. Lee el apartado 8.2 Métodos de almacenamiento de la información.

> 1. Para cada uno de los siguientes casos, indica el **método de almacenamiento** más adecuado y justifica tu respuesta:

>   - Un archivo de configuración de una aplicación.

>   - Un millón de facturas XML de una empresa.

>   - Las fichas de los libros de una biblioteca que se consultan por estructura.

>   - Los registros (*logs*) que genera una aplicación web cada segundo.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

- Configuración → **fichero plano**: volumen pequeño, sin consultas complejas.

- Facturas → **SGBD relacional** (descompuesto o tipo XML): consultas y transacciones eficientes.

- Biblioteca → **SGBD nativo XML** (XQuery sobre colecciones) o relacional según las consultas.

- Logs → **NoSQL documental** (MongoDB): gran volumen y esquema flexible.

</details>

## **Actividad 2 - Inconvenientes de almacenar en XML (CE6b)**

> **📌 Enunciado**
> 

> Escribe al menos **cuatro inconvenientes** de almacenar la información en formato XML y propón una situación concreta donde cada uno de ellos cause un problema real.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

- **Verboso y pesado** (etiquetas repetidas) → transmisión lenta de millones de pedidos.

- **Coste de procesamiento** (parsear) → una API que recibe un XML enorme tarda demasiado en responder.

- **Falta de tipado** → hay que convertir manualmente cada valor al comparar precios.

- **Consultas complejas sobre ficheros planos** → buscar un dato recorre el archivo entero.

- **Redundancia** → el mismo cliente repetido en miles de documentos sin coherencia.

</details>

## **Actividad 3 - Elección de tecnología eficiente (CE6c)**

> **📌 Enunciado**
> 

> Para cada pareja de características, elige la tecnología de almacenamiento adecuada:

> 1. Documentos jerárquicos + consultas por estructura → ?

> 1. Datos muy regulares con muchas relaciones entre ellos → ?

> 1. Gran volumen + esquema flexible + entorno JavaScript → ?

> 1. Proyecto pequeño + sin necesidad de consultas → ?

> Justifica cada elección con un argumento.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

- SGBD **nativo XML**: XQuery consulta la estructura directamente.

- SGBD **relacional**: las relaciones (JOIN) son su punto fuerte.

- **NoSQL documental** (MongoDB): escalabilidad horizontal y JSON nativo.

- **Fichero plano**: simplicidad suficiente para el volumen.

</details>

## **Actividad 4 - XML en una base relacional (CE6f)**

> **📌 Enunciado**
> 

> Crea una base de datos relacional (con PostgreSQL o SQLite) con la tabla `productos` y guarda el siguiente documento en una columna de tipo `xml` (o `TEXT` si no dispones de tipo XML):

```html
<producto id="p1" categoria="portatil">
    <nombre>Portátil Pro 14</nombre>
    <precio>899.00</precio>
    <stock>12</stock>
</producto>
```

1. Escribe las sentencias `CREATE TABLE` e `INSERT` necesarias.

1. Añade un segundo producto de tu elección.

1. Escribe una consulta que devuelva todos los documentos almacenados.

<details markdown="1">

<summary>💡 Solució</summary>

```html
CREATE TABLE productos (
    id        INTEGER PRIMARY KEY,
    categoria VARCHAR(30),
    ficha     XML
);

INSERT INTO productos VALUES (1, 'portatil',
    '<producto id="p1" categoria="portatil">
        <nombre>Portátil Pro 14</nombre>
        <precio>899.00</precio>
        <stock>12</stock>
    </producto>');

INSERT INTO productos VALUES (2, 'monitor',
    '<producto id="p3" categoria="monitor">
        <nombre>Monitor 27"</nombre>
        <precio>219.00</precio>
        <stock>30</stock>
    </producto>');

SELECT ficha FROM productos;
```

</details>

## **Actividad 5 - Generar XML desde una base relacional (CE6g)**

> **📌 Enunciado**
> 

> Con las tablas `pedidos` y `lineas_pedido` del apartado 8.3, escribe la consulta SQL/XML que genere el siguiente documento:

```html
<pedidos>
    <pedido id="p10">
        <cliente>Ana Pérez</cliente>
        <fecha>2027-03-02</fecha>
        <linea ref="l01" cantidad="2" precio="15.00"/>
        <linea ref="l02" cantidad="1" precio="48.50"/>
    </pedido>
</pedidos>
```

<details markdown="1">

<summary>💡 Solució orientativa</summary>

```html
SELECT XMLELEMENT(name "pedidos",
    XMLAGG(
        XMLELEMENT(name "pedido",
            XMLATTRIBUTES(p.id AS id),
            XMLELEMENT(name "cliente", p.cliente),
            XMLELEMENT(name "fecha", p.fecha),
            XMLAGG(
                XMLELEMENT(name "linea",
                    XMLATTRIBUTES(l.ref AS ref, l.cantidad AS cantidad,
                                  l.precio AS precio)
                )
                ORDER BY l.linea
            )
        )
    )
) AS documento
FROM pedidos p
JOIN lineas_pedido l ON l.id = p.id
GROUP BY p.id, p.cliente, p.fecha;
```

</details>

## **Actividad 6 - Instalar y usar eXist-db (CE6i)**

> **📌 Enunciado**
> 

> 1. Instala **eXist-db** en tu equipo siguiendo el apartado 8.4 Bases de datos nativas XML y comprueba con `java -version` el requisito previo.

> 1. Crea una colección `biblioteca` y sube a ella al menos **tres libros** en formato XML (título, autor, año, precio, disponible).

> 1. Comprueba que el documento se recupera con la consulta:

```html
collection('/db/biblioteca')/libro
```

1. Utiliza `xmldb:store` para añadir un cuarto libro desde la consola de consultas.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

```html
# Comprobar Java
java -version

# Arrancar eXist-db desde la carpeta de instalación
./bin/startup.sh
```

Desde eXide: colección `/db/biblioteca`, documentos `libro1.xml`, `libro2.xml`, `libro3.xml`.
Para el cuarto libro:

```html
xquery version "3.1";
let $doc := document {
    <libro isbn="978-84-00000-00-4">
        <titulo>Bases de datos XML</titulo>
        <autor>Luis García</autor>
        <anio>2026</anio>
        <precio>32.00</precio>
        <disponible>false</disponible>
    </libro>
}
return xmldb:store('/db/biblioteca', 'libro4.xml', $doc)
```

</details>

## **Actividad 7 - Consultas XQuery (CE6e)**

> **📌 Enunciado**
> 

> Sobre la colección `/db/biblioteca` del ejercicio anterior, escribe las consultas XQuery que:

> 1. Devuelvan los títulos de los libros disponibles.

> 1. Devuelvan los libros ordenados por precio de menor a mayor.

> 1. Devuelvan el número total de libros y el precio medio.

> 1. Generen un documento HTML con una tabla de libros y su disponibilidad.

<details markdown="1">

<summary>💡 Solució</summary>

```html
(: 1. Libros disponibles :)
for $l in collection('/db/biblioteca')/libro
where $l/disponible = 'true'
return $l/titulo
```

```html
(: 2. Ordenados por precio :)
for $l in collection('/db/biblioteca')/libro
order by xs:decimal($l/precio)
return <li>{ $l/titulo } -- { $l/precio } €</li>
```

```html
(: 3. Total y media :)
let $libros := collection('/db/biblioteca')/libro
return
    <resumen>
        <total>{ count($libros) }</total>
        <media>{ avg($libros/precio) }</media>
    </resumen>
```

</details>

## **Actividad 8 - Práctica final: ciclo completo de almacenamiento (CE6.d - CE6.e - CE6.f - CE6.g - CE6.i)**

> **📌 Enunciado**
> 

> Realiza el **ciclo completo** de almacenamiento y consulta de información:

> 1. **Relacional:** crea la tabla `ventas` (id, producto, unidades, precio) e inserta al menos cinco ventas.

> 1. **XML desde relacional:** genera con SQL/XML un documento `ventas.xml` con todas las ventas.

> 1. **Base nativa:** sube el documento a una colección de eXist-db llamada `ventas`.

> 1. **Consulta:** escribe una consulta XQuery que devuelva las ventas cuyo total (unidades × precio) supere 50 €.

> 1. **Salida:** genera un informe HTML con el resultado y, opcionalmente, convierte el resultado a JSON con `jq`.

> Documenta en un pequeño informe cada paso, los comandos utilizados y las salidas obtenidas.

<details markdown="1">

<summary>💡 Solució orientativa</summary>

```html
-- 1. Relacional
CREATE TABLE ventas (
    id       INTEGER PRIMARY KEY,
    producto VARCHAR(50),
    unidades INTEGER,
    precio   NUMERIC(8,2)
);

-- 2. XML desde relacional
SELECT XMLELEMENT(name "ventas",
    XMLAGG(
        XMLELEMENT(name "venta",
            XMLATTRIBUTES(v.id AS id),
            XMLELEMENT(name "producto", v.producto),
            XMLELEMENT(name "unidades", v.unidades),
            XMLELEMENT(name "precio", v.precio)
        )
    )
) FROM ventas v;
```

```html
(: 4. Ventas con total > 50 :)
for $v in collection('/db/ventas')/ventas/venta
where xs:decimal($v/unidades) * xs:decimal($v/precio) > 50
return
    <venta>
        <producto>{ $v/producto }</producto>
        <total>{ xs:decimal($v/unidades) * xs:decimal($v/precio) }</total>
    </venta>
```

```html
# 5. Opcional: resultado JSON con jq
jq '[.ventas[] | select((.unidades * .precio) > 50)]' ventas.json
```

</details>
