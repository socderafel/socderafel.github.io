---
layout: default
title: "Actividad Práctica ACT801 — Ejercicios Almacenamiento de información — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT08"
prev_url: "./ut0806.html"
prev_label: "⬅️ 8.6 Herramientas y casos prácticos"
next_url: "../ut09/index.html"
next_label: "UD9 ➡️"
---

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
