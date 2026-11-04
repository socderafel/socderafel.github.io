---
layout: default
title: "Actividad Práctica ACT701 — Ejercicios Conversión de documentos — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT07"
prev_url: "./ut0706.html"
prev_label: "⬅️ 7.6 Herramientas y casos prácticos de conversión"
next_url: "../ut08/index.html"
next_label: "UD8 ➡️"
---

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
