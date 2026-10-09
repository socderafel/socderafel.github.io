---
layout: default
title: "UD1 — HTML · Temari Complet"
course_root: ".."
badge: "4t ESO · UD1 — HTML"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut01/ut0101.html"
next_label: "1.1 Introducción ➡️"
---

# 📘 UD1 — HTML (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**1.1 Introducción**](./ut0101.md)
- [**1.2 Estructura básica**](./ut0102.md)
- [**1.3 Etiquetas para estructurar el texto**](./ut0103.md)
- [**1.4 Etiquetas básicas de marcado**](./ut0104.md)
- [**1.5 listas**](./ut0105.md)
- [**1.6 enlaces**](./ut0106.md)
- [**1.7 Tablas**](./ut0107.md)
- [**1.8 Formularios**](./ut0108.md)

---

# 1.1 Introducción

Introducción a HTML5

- ¿Por qué es importante Internet?

Hoy en día casi todo pasa por Internet: buscar información, ver vídeos, chatear, jugar, compartir fotos… Antes solo podíamos leer lo que otras personas publicaban. Con el tiempo, cualquiera puede crear contenido: escribir en un blog, subir vídeos, publicar en redes sociales… Para que todo esto funcione hay unas reglas que permiten que los navegadores (Chrome, Firefox, Edge, Safari…) entiendan y muestren la información correctamente.

La base de esas reglas es el HTML.

- ¿Qué es HTML?

HTML significa HyperText Markup Language (Lenguaje de Marcado de Hipertexto). Es el idioma que usan las páginas web para decirle al navegador qué debe mostrar: textos, imágenes, enlaces, vídeos… HTML funciona mediante etiquetas. Las etiquetas indican qué tipo de contenido es cada parte de la página.

Ejemplo de etiqueta para un párrafo: <p>Este es un párrafo de texto.</p> • <p> → abre el párrafo • </p> → cierra el párrafo En HTML5 todo es más simple que en versiones antiguas y admite nuevos elementos como <header>, <footer>, <section> o <video>.

### 3. Conceptos básicos

• Internet: red mundial que conecta ordenadores y dispositivos. • Servidor: ordenador que guarda páginas web o archivos y los “sirve” a quien los pide. • Navegador: programa que usamos para ver esas páginas (Chrome, Firefox, Safari, Edge).

• URL: dirección única para localizar un recurso en Internet, como https://www.google.es. • DNS: sistema que traduce nombres fáciles de recordar (google.es) en direcciones numéricas (IP).

- ¿Cómo funciona una página web?

Cuando escribes una dirección en el navegador

- El navegador pide la página al servidor.
- El servidor responde enviando el archivo HTML.
- El navegador interpreta el código y lo muestra con colores, imágenes, etc.

> **💡 Apunt Tècnic**
> Ejemplo: Cuando visitas https://www.wikipedia.org, tu navegador recibe un archivo HTML con instrucciones sobre cómo mostrar la página.

### 5. Herramientas para crear webs

Para empezar solo necesitas: • Un editor de texto (Bloc de notas, TextEdit, KWrite, Visual Studio Code…). • Un navegador para abrir tu página y ver cómo queda. Más adelante podrás usar: • Editores avanzados (VS Code, Sublime Text…). • Programas de diseño de imágenes (GIMP, Photoshop).

• Aplicaciones para subir archivos a Internet (FileZilla).

---

# 1.2 Estructura básica

HTML5: Etiquetas y estructura básica

Objetivos • Comprender cómo funcionan las etiquetas HTML. • Identificar la estructura básica de una página web. • Crear una página sencilla con un editor de texto.

### 1. Introducción

Para crear páginas web escribimos etiquetas HTML dentro de un archivo de texto. En esta unidad vamos a conocer algunas de las más importantes y cómo se organizan.

- ¿Qué es una etiqueta HTML?

Una etiqueta es una palabra o abreviatura rodeada por los signos < y >. Ejemplo: <strong> Esta etiqueta sirve para que el navegador muestre el texto en negrita. La mayoría de etiquetas necesitan abrirse y cerrarse: <strong>Texto destacado</strong> • <strong> → inicio (apertura) • </strong> → final (cierre) Algunos elementos no necesitan cierre porque representan algo puntual.

Por ejemplo, <hr> inserta una línea horizontal en la página. En HTML5 ya no hace falta escribir la barra al final (<hr />), basta con <hr>.

Todas las etiquetas: • Se escriben en minúsculas (aunque los navegadores aceptan mayúsculas). • Se pueden anidar: poner unas dentro de otras, por ejemplo

<p>Este es un párrafo con <strong>texto en negrita</strong> y un <a href="#">enlace</a>.</p>

#### 2.1. Parámetros o atributos

Algunas etiquetas necesitan atributos (parámetros) para funcionar. Por ejemplo, para insertar una imagen: <img src="fotodelgrupo.jpg" alt="Foto del grupo"> • src indica el archivo de la imagen. • alt es un texto alternativo (importante para accesibilidad). Podemos añadir más atributos, como el tamaño

<img src="fotodelaula5.jpg" width="300" height="150" alt="Foto del aula">

### 3. Estructura básica de una página

Toda página HTML5 debe seguir una forma parecida a esta

•

```html
<!DOCTYPE html> → indica que usamos HTML5.
```

•

```html
<html> → inicio del documento.
```

•

```html
<head> → información para el navegador (título, autor, estilos, etc.).
```

•

```html
<body> → el contenido que verá el usuario.
```

Cuando abres tu archivo en el navegador, solo ves lo que está dentro de <body>. Si lo abres con un editor de texto, podrás modificarlo y refrescar la página para ver los cambios.

```html
<!DOCTYPE html>
<html lang="es">
<head>
     <meta charset="UTF-8">
     <title>Título de la página</title>
```

</head>

```html
<body>
     <p>Contenido visible en el navegador.</p>
```

</body> </html>

### 4. Etiquetas de estructura en HTML5

Además de párrafos y títulos, HTML5 incorpora elementos para organizar mejor la información: •

```html
<header> → cabecera de la página.
```

• <footer> → pie de página. • <nav> → menú de navegación. • <section> → secciones de contenido. • <article> → contenido independiente (entrada de blog, noticia…). • <mark> → resalta texto importante. Aunque visualmente puedan parecer iguales sin estilos, usar estas etiquetas ayuda a buscadores y herramientas de accesibilidad a entender mejor tu web.

### 5. El bloque <head>

Dentro de <head> colocamos información que no se muestra directamente, pero influye en el comportamiento y el aspecto de la página: • <title> → título que aparece en la pestaña del navegador. • <meta> → datos sobre el autor, descripción, palabras clave, codificación, etc.

• <link> → enlaza con hojas de estilo (CSS). •

```html
<style> → estilos internos.
```

•

```html
<script> → funciones en JavaScript.
```

Ejemplo de etiquetas <meta> recomendadas: <meta charset="UTF-8"> <meta name="author" content="Tu nombre"> <meta name="description" content="Practicando con las etiquetas HTML"> <meta name="keywords" content="HTML, aprendizaje, web">

---

# 1.3 Etiquetas para estructurar el texto

Etiquetas para estructurar mejor el texto

- ¿Qué es HTML?

HTML, siglas en inglés de HyperText Markup Language (Lenguaje de Marcado de Hipertexto), es el código estándar que se utiliza para crear y estructurar la información de las páginas web. A través de etiquetas, el HTML define la estructura del contenido, indicando al navegador cómo organizar y mostrar elementos como texto, imágenes, vídeos y enlaces.

### 2. Editores HTML

- Sublime Text
- KWrite
- Bloc de notas (Windows)
- Phoenix Code

Aunque existen muchos más, usaremos el editor de texto online “Phoenix Code”. Este nos permitirá de una forma más visual escribir nuestro código y guardar los proyectos creados.

- Elementos, etiquetas y atributos.

- Etiqueta: es el código entre < > que indica el tipo de contenido (por ejemplo,

<p> o <h1>).

- Elemento: es el conjunto formado por la etiqueta de apertura, el contenido

y la etiqueta de cierre (por ejemplo, <p>Hola</p>).

- Atributo: es una propiedad dentro de la etiqueta que añade información o

cambia su comportamiento (por ejemplo, <img src="foto.jpg">).

### 4. Estructura

- <!DOCTYPE html>

o Va en la primera línea del documento. o Indica al navegador que el archivo está escrito en HTML5. o No es una etiqueta, sino una declaración. o Sirve para que el navegador interprete correctamente las etiquetas y la estructura del documento.

- Cabecera <head>

o Contiene información sobre la página, no visible directamente en pantalla. o Sirve para definir el título, la codificación, los estilos, los scripts o metadatos.

- Cuerpo <body>

o Es la parte visible de la página. o Contiene todo lo que el usuario ve: texto, imágenes, enlaces, tablas, listas, etc.

- Etiquetas para estructurar el texto.
- Cara párrafo estará dentro de las etiquetas <p> y </p>.
- Los títulos aparecerán dentro de las etiquetas <h1>, <h2>, …<h6>. Siendo

<h1> la de mayor importancia y <h6> la de menor.

- La etiqueta <br /> ayuda a dejar espacios entre líneas.

---

# 1.4 Etiquetas básicas de marcado

Etiquetas de marcado en HTML

- Etiquetas principales de marcado.

- <b> → Muestra el texto en negrita, con un cambio visual sin añadir

importancia semántica.

- <strong> → Destaca el texto como importante o relevante dentro del

contenido.

- <i> → Aplica cursiva al texto, normalmente para títulos, palabras extranjeras

o nombres científicos.

- <em> → Indica énfasis semántico, resaltando una palabra o frase con

intención expresiva.

- <u> → Subraya el texto, aunque su uso es menos común para evitar

confusión con los enlaces.

- <mark> → Resalta texto como si se usara un rotulador, útil para destacar

información clave.

- <small> → Muestra el texto en tamaño más pequeño, ideal para notas o

aclaraciones.

- <del> → Marca texto eliminado o tachado, indicando que ha sido sustituido

o corregido.

- <ins> → Indica texto añadido recientemente, generalmente aparece

subrayado.

- <sup> → Coloca el texto en superíndice, sobre la línea de base (usado en

potencias o notas).

- <sub> → Coloca el texto en subíndice, debajo de la línea (usado en fórmulas

químicas o matemáticas).

- <br> → Inserta un salto de línea dentro del texto, sin necesidad de etiqueta

de cierre.

- <hr> → Inserta una línea horizontal que separa secciones del contenido.
- Ejemplo de uso.

Código creado.

Ejemplo visual.

---

# 1.5 listas

Tema: Listas en HTML Objetivo Aprender a crear listas ordenadas, desordenadas y de definición en HTML, comprendiendo su estructura y utilidad.

- ¿Qué son las listas?

Las listas en HTML sirven para organizar información relacionada de manera clara. Existen tres tipos principales de listas: desordenadas (), ordenadas () y de definición ().

### 2. Listas desordenadas

Se usan cuando el orden de los elementos no importa. Cada elemento va dentro de la etiqueta . <ul> <li>Café</li> <li>Té</li> <li>Leche</li> </ul>

### 3. Listas ordenadas

Se usan cuando el orden sí importa, por ejemplo para pasos o instrucciones. También usan la etiqueta para cada elemento. <ol> <li>Encender el horno</li> <li>Mezclar los ingredientes</li> <li>Hornear durante 30 minutos</li> </ol>

### 4. Listas de definición

Se usan para mostrar términos y sus definiciones. Utilizan las etiquetas (término) y (definición). <dl> <dt>HTML</dt> <dd>Lenguaje para estructurar el contenido de una página web.</dd> </dl>

---

# 1.6 enlaces

### 1. ENLACES

Los enlaces se utilizan para establecer relaciones entre dos recursos. Aunque la mayoría de enlaces relacionan páginas Web, también es posible enlazar otros recursos como imágenes, documentos y archivos. Los enlaces pueden ser internos o externos en función de si enlazan hacia otra parte del mismo documento Web o hacia un recurso Web externo.

Los enlaces en HTML se crean mediante la etiqueta <a>...</a>, y siempre va acompañada de un atributo muy especial: href. El valor de este atributo indica el objetivo del enlace, es decir, el lugar donde el navegador tiene que ir cuando el usuario haga clic sobre el enlace.

1.1. ENLACES RELATIVOS Y ABSOLUTOS Si se establece un enlace a un recurso externo a nuestra Web tenemos que poner la URL completa al recurso, como en el anterior ejemplo. Pero si el enlace es a un recurso de nuestra Web es mejor poner la ruta relativa, por ejemplo

Si desde la página professors.html quieres enlazar a la página notes.html

1.2. ENLACES INTERNOS Son enlaces a una parte específica del documento. El primer paso es identificar el elemento al que queremos enlazar. El segundo paso será poner un enlace interno a dicho identificador. Se utilizan por ejemplo si una página es muy larga, para ir al principio o al final del documento. Enlaces del tipo "Saltar hasta la segunda sección", "Volver al principio de la página".

También se puede hacer un enlace interno desde otra página

ENLAZAR EL FAVICON El favicon o icono para favoritos es el pequeño icono que muestran las páginas en varias partes del navegador. Dependiendo del navegador que se utilice, este icono

se muestra en la barra de direcciones, en la barra de título del navegador y/o en el menú de favoritos/marcadores. Vamos a descargar un icono favicon de internet, y lo vamos a guardar en la carpeta images.

Aunque en principio la imagen debería ser de tipo .ICO (formato gráfico de los iconos), algunos navegadores soportan otros formatos (ej.: .PNG).

---

# 1.7 Tablas

Tablas en HTML Las tablas en HTML se utilizan para organizar información en filas y columnas, como horarios, listados o resultados. Estructura básica de una tabla Una tabla se crea con la etiqueta <table> y se organiza así: • <tr> → fila (table row) • <th> → celda de encabezado (table header) • <td> → celda de datos (table data)

Combinar celdas HTML permite unir celdas para que ocupen más espacio. ➤ colspan Une columnas (horizontal).

➤ rowspan Une filas (vertical).

### 1. Estilos dentro de celdas (HTML)

Los estilos se pueden aplicar directamente dentro de cada celda usando el atributo style. Propiedades más usadas

• Color de fondo o background-color: lightblue; • Color del texto o color: darkblue; • Texto centrado o text-align: center; Se pueden combinar varias propiedades separándolas por ;.

> **💡 Apunt Tècnic**
> Ejemplo

Muestra

---

# 1.8 Formularios

Formularios en HTML Los formularios en HTML se utilizan para recoger información del usuario, como nombres, correos, contraseñas o respuestas. Un formulario se crea con la etiqueta

Dentro del formulario se colocan campos de entrada, etiquetas y botones.

### 1. Elementos principales de un formulario

- <form>

Contiene todo el formulario. Atributos más importantes: • action → a dónde se envían los datos • method → cómo se envían (get o post)

- <label>

Sirve para describir cada campo. Mejora la accesibilidad. o Un id (identificador único) o Un label asociado con for="id" Es importante añadir para cada “label” su identificador para mejorar la accesibilidad de la web.

- <input>

Campo para introducir datos. Tipos más comunes

Tipo Uso text Texto number Números email Correo password Contraseña date Fecha radio Opción única checkbox Varias opciones submit Enviar

> **💡 Apunt Tècnic**
> Ejemplo

- <textarea>

Caja de texto grande (comentarios, opiniones).

- <select> y <option>

Lista desplegable.

- Botón de envío

> **💡 Apunt Tècnic**
> Ejemplo

Visualización

---
