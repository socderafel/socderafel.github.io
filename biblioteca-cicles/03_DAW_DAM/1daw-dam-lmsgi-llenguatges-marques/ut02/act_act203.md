---
layout: default
title: "Actividad Práctica ACT203 — 203 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT02"
prev_url: "./act_act202.html"
prev_label: "⬅️ ✏️ ACT202 202"
next_url: "./act_act204.html"
next_label: "✏️ ACT204 204 ➡️"
---

# Actividad 203

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `203_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA2: Utiliza lenguajes de marcas para la transmisión y presentación de información a través de la web analizando la estructura de los documentos e identificando sus elementos.

>   - CA2. b) Se ha analizado la estructura de un documento HTML y las secciones que lo componen. (5%)

## **Ejercicio 1**

**Partes del documento**

Lee el apartado 2.2.5 Estructura de un documento HTML y responde:

1. ¿Qué es el prólogo y qué indica en el caso de HTML5?

1. ¿Qué elementos forman la estructura básica de un documento?

1. ¿Qué información contiene la cabecera `<head>` y cuál es el elemento obligatorio dentro de ella?

1. ¿En qué se diferencia la información de la cabecera de la del cuerpo?

1. ¿Dónde se deben escribir los comentarios y para qué sirven?

## **Ejercicio 2**

**Cabecera completa**

Crea un documento HTML que incluya en la cabecera los siguientes elementos:

1. Juego de caracteres UTF-8.

1. Un título obligatorio.

1. Un `meta` con el *viewport*.

1. Un `link` a una hoja de estilos externa.

1. Un bloque `style` interno.

1. Un `script` externo.

1. En el cuerpo, un único párrafo con el texto "Hola, LLMSGI".

## **Ejercicio 3**

**Etiquetas y atributos**

Lee el apartado 2.3.1 Sintaxis: etiquetas y atributos y responde:

1. ¿Qué es una etiqueta de apertura y qué es una etiqueta de cierre?

1. ¿Qué es un elemento vacío? Pon un ejemplo.

1. ¿Para qué sirven los atributos en HTML?

1. ¿Qué ocurre si el valor de un atributo no es válido?

## **Ejercicio 4**

**Documento básico**

Crear una página HTML con la **estructura básica** (elementos `<html>`, `<head>` indicando el juego de caracteres y el título, y `<body>` conteniendo un texto plano). Utilizar un programa de edición de texto plano. Guardar el documento en el ordenador hasta finalizar la clase.

## **Ejercicio 5**

**Tipos de atributos**

Lee el apartado 2.3.2 Tipos de atributos y crea un documento HTML que:

1. Tenga un `<div>` con un `id` único.

1. Tenga un elemento con una clase definida en una hoja de estilos interna.

1. Un enlace con `title` y el atributo `lang="es"`.

1. Un campo de texto con `autofocus`.

## **Ejercicio 6**

**Corregir errores de estructura HTML**

Crea una **página web** que tenga el mismo aspecto que la siguiente imagen:

El documento HTML base es el siguiente:

> **📌 Html**
> 

```html
<html lang=es>
  <head>
    <title>World Wide Web</title>
  </head>
  <body>

    <h1>World Wide Web</h1>

    <p>
    En informática, la <strong><em>World Wide Web</strong></em> (WWW) o Red informática
    mundial comúnmente conocida como la web, es un sistema de distribución de documentos
    de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un
    navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden
    contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de
    esas páginas usando hiperenlaces.

    <h2>Historia</h2>

    <p>
    La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee
    con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra,
    Suiza, y publicado en 1992.
    </p>

    <p>
    Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares
    web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos
    años ha abogado por su visión de una web semántica.
    </p>

    <p>Fuente: <em>Wikipedia</p></em>

</html>
```

## **Ejercicio 7**

**Corregir errores y mejorar**

El documento HTML base es el siguiente:

> **📌 Html**
> 

```html
<html>
  <head>
    <title>World Wide Web</title>
  </head>
  <body>
    <h1>World Wide Web</h1>
    <p>
    En inform&aacute;tica, la <strong><em>World Wide Web</em></strong> (WWW) o
    Red inform&aacute;tica mundial com&uacute;nmente conocida como la web, es
    un sistema de distribuci&oacute;n de documentos de hipertexto o hipermedios
    interconectados y accesibles v&iacute;a Internet. Con un navegador web, un
    usuario visualiza sitios web compuestos de p&aacute;ginas web que pueden
    contener texto, im&aacute;genes, v&iacute;deos u otros contenidos multimedia,
    y navega a trav&eacute;s de esas p&aacute;ginas usando hiperenlaces.
    </p>

    <h3>Historia</h3>

    <p>
    La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés
    Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban
    en el CERN en Ginebra, Suiza, y publicado en 1992.
    </p>

    <p>
    Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo
    de estándares web (como los lenguajes de marcado con los que se crean las
    páginas web), y en los últimos años ha abogado por su visión de una web
    semántica.
    </p>

    <p>
    Una frase famosa de Tim Berners-Lee es:
    </p>

    <blockquote>
    <p>
    There is only one web.
    </p>
    </blockquote>
    <p>Fuente: <em>Wikipedia</em></p>
</html>
```
