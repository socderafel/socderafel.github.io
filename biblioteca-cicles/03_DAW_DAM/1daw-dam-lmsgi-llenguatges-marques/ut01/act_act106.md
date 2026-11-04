---
layout: default
title: "Actividad Práctica ACT106 — 106 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT01"
prev_url: "./act_act105.html"
prev_label: "⬅️ ✏️ ACT105 105"
next_url: "./act_act107.html"
next_label: "✏️ ACT107 107 ➡️"
---

# Actividad 106

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `106_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA1: Reconoce las características de lenguajes de marcas analizando e interpretando fragmentos de código.

>   - CA1. f) Se han analizado las características propias de diferentes lenguajes de marcas. (5%)

## **Ejercicio 1**

Indica a qué lenguaje de marcas pertenece cada uno de los siguientes fragmentos (HTML, XML, JSON o YAML) y justifica tu respuesta enumerando, al menos, **dos características propias** de ese lenguaje que se observen en el fragmento.

> **📌 Fragmento 1**
> 

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi página</title>
</head>
<body>
    <h1>Bienvenidos</h1>
    <p>Este es un <strong>texto</strong> en negrita.</p>
</body>
</html>
```

> **📌 Fragmento 2**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<catalogo>
    <libro id="11">
        <titulo>El Quijote</titulo>
        <precio divisa="EUR">19.95</precio>
    </libro>
    <libro id="12">
        <titulo>La Celestina</titulo>
    </libro>
</catalogo>
```

> **📌 Fragmento 3**
> 

```html
{
    "usuario": {
        "nombre": "Ana",
        "edad": 28,
        "activo": true,
        "cursos": ["DAW", "ASIR"]
    }
}
```

```html
libro:
  titulo: La Celestina
  autor: Fernando de Rojas
  precio: 12.50
  disponible: true
```

## **Ejercicio 2**

A continuación se muestra un documento XML en el que se combinan varias de las características propias del lenguaje XML.

> **📌 Documento XML**
> 

```html
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- Listado de asignaturas del centro -->
<asignaturas>
    <asignatura codigo="LLM-01" obligatoria="true">
        <nombre>Lenguajes &amp; Marcas</nombre>
        <horas>128</horas>
        <validacion>
            <![CDATA[
            Requisito: curso < 2 faltas de asistencia
            Se usa el símbolo & en expresiones lógicas.
            ]]>
        </validacion>
    </asignatura>
    <asignatura codigo="BD-01">
        <nombre>Bases de Datos</nombre>
        <horas></horas>
    </asignatura>
</asignaturas>
```

Responde a las siguientes preguntas, analizando las **características propias** del lenguaje que aparecen en el documento:

1. ¿Qué parte del documento corresponde al **prólogo**? Indica qué información aporta cada una de sus líneas.

1. ¿Cuál es el **elemento raíz**? ¿Por qué un documento XML solo puede tener uno?

1. Indica dos características de este documento relacionadas con la **sintaxis de las etiquetas** que puedas comprobar en el fragmento (por ejemplo, apertura y cierre, mayúsculas/minúsculas, elementos vacíos, anidación...).

1. En el elemento `<nombre>Lenguajes &amp; Marcas</nombre>` se utiliza la entidad `&amp;`. ¿Qué característica propia de XML obliga a escribirla así y cuál sería el texto que se mostraría al procesarlo?

1. ¿Qué función cumple la **sección CDATA** dentro del elemento `<validacion>`? Explica por qué no podría escribirse su contenido directamente como texto.

1. ¿Qué diferencia existe entre el elemento `<horas>128</horas>` y el elemento `<horas></horas>`?

## **Ejercicio 3**

Analiza las siguientes afirmaciones sobre las **características propias** de los distintos lenguajes de marcas e indica si son **verdaderas (V)** o **falsas (F)**, justificando brevemente tu respuesta:

1. HTML permite que el programador cree etiquetas nuevas para cualquier propósito, igual que XML.

1. En XML, las etiquetas `<Cliente>` y `<cliente>` se refieren al mismo elemento.

1. JSON es un lenguaje de marcas extensible pensado para la presentación de información en páginas web.

1. Tanto XML como JSON pueden utilizarse para el intercambio de datos entre aplicaciones, aunque con sintaxis y enfoques distintos.

1. Un documento HTML mal escrito (sin cerrar algunas etiquetas) puede interpretarse igualmente por los navegadores, mientras que un documento XML mal formado no puede procesarse. Esta es una de las diferencias clave entre ambos.

1. YAML destaca por ser muy fácil de leer para las personas y se utiliza habitualmente en archivos de configuración, mientras que XML es más verboso pero muy adecuado para documentos estructurados y empresariales.

## **Ejercicio 4**

Supón tres escenarios diferentes en los que debes **elegir el lenguaje de marcas más adecuado** entre HTML, XML y JSON. Justifica cada elección a partir de las características propias de cada lenguaje:

| Escenario | Lenguaje elegido | Justificación |
| --- | --- | --- |
| a) Un navegador debe renderizar una página web con títulos, párrafos e imágenes para usuarios. |  |  |
| b) Una empresa debe intercambiar pedidos con sus proveedores durante años, garantizando que se respete una estructura fija (facturas, fechas, importes) validable automáticamente. |  |  |
| c) Una aplicación móvil recibe en cada consulta los datos de los pedidos y necesitan que el intercambio sea ligero y rápido de procesar. |  |  |
