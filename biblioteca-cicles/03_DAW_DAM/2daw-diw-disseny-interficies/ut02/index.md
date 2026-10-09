---
layout: default
title: "UD2 — USO DE ESTILOS · Temari Complet"
course_root: ".."
badge: "2n DAW · Grau Superior · UT2 Completa"
prev_url: "../ut01/ut0106.html"
prev_label: "⬅️ 1.5 DIW: DIAPOSITIVAS UD 1 SECCIÓN 4"
next_url: "../ut02/ut0201.html"
next_label: "2.1 DIW: DIAPOSITIVAS UD 2 SECCIÓN 1: INTRODUCCIÓN A ➡️"
---

# 📘 UD2 — USO DE ESTILOS (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 DIW: DIAPOSITIVAS UD 2 SECCIÓN 1: INTRODUCCIÓN A**](./ut0201.md)
- [**2.2 TEORÍA CSS PROPIEDAD DISPLAY**](./ut0203.md)
- [**2.3 DIW: DIAPOSITIVAS UD 2 SECCIÓN 2: PROPIEDADES DE**](./ut0204.md)
- [**2.4 DIW DIAPOSITIVAS UD 2 SECCIÓN 3: COLORES Y FONDO**](./ut0205.md)
- [**2.5 DIW DIAPOSITIVAS UD 2 SECCIÓN 4: FLOTAR Y POSICI**](./ut0206.md)

---

# 2.1 DIW: DIAPOSITIVAS UD 2 SECCIÓN 1: INTRODUCCIÓN A

> **📌 🏷️ Apunt de la Unitat**
> #### **SECCIÓN 1: INTRODUCCIÓN A CSS**

> **📌 🏷️ Apunt de la Unitat**
> #### **SECCIÓN 2: PROPIEDADES DE FUENTE Y TEXTO**

> **📌 🏷️ Apunt de la Unitat**
> #### **SECCIÓN 3: LOS COLORES Y LOS FONDOS**

> **📌 🏷️ Apunt de la Unitat**
> #### **SECCIÓN 4: FLOTAR Y POSICIONAR**

---

BLOQUE 2: USO DE ESTILOS Docente: Belén Gil TEMA 1: INTRODUCCIÓN A CSS

### TEMA 5: TABLAS

T1. INTRODUCCIÓN A CSS

### 1. Añadir estilos a un documento con CSS

### 2. Conceptos clave de CSS

### 3. El modelo de cajas de CSS

Introducción

- CSS es el lenguaje para describir la presentación de las páginas

Web, incluyendo colores y fuentes.

- CSS es independiente de HTML y puede usarse con cualquier

lenguaje basado en XML.

- La separación de HTML y CSS hace más sencillo el

mantenimiento de los sites, compartir hojas de estilo entre páginas y ajustar las páginas a diferentes entornos. Esto se denomina como: separación de la estructura o contenido de la presentación.

- Las CSS son reutilizables por varias páginas HTML.

Introducción

- Mayor control en el diseño de las páginas: Se puede llegar a

diseños fuera del alcance de HTML.

- Menos trabajo: Se puede cambiar el estilo de todo un sitio con

la modificación de un único archivo.

- Documentos más pequeños
- Documentos mucho más estructurados: Los documentos

bien estructurados son accesibles a más dispositivos y usuarios.

- El HTML de presentación está en vías de desaparecer

elementos y atributos de presentación de las especificaciones HTMLy XHTML fueron declarados obsoletos por el W3C.

- Tiene buen soporte: En este momento, casi todos los

navegadores soportan casi toda la especificación CSS1 y la mayoría también las recomendaciones de nivel 2 y 2.1. con CSS

h1{color:#990000;} Selector Declaración Propiedad Valor Comentarios: /* Este es un comentario en CSS */ <!-- Este es un comentario en HTML --> con CSS

con CSS Existen 3 formas de incluir estilos en una página

- Estilos en línea
- Hojas de estilo internas
- Hojas de estilo externas

con CSS Estilos en linea. Atributo style

- Los elementos HTML tienen un atributo style, al cual se le

puede asignar una o varias declaraciones CSS.

- Es la forma más sencilla de asignar estilos.
- Solamente se aplica a ese elemento en concreto, habría que

especificar a cada elemento el suyo propio.

- No hay separación entre la estructura y la presentación.

<div style=“background:#98bf21;height:100px;position:absolute;”> </div>

con CSS Hojas de estilo internas. Etiqueta <style>

- Debe ir dentro de <head>
- Nos permite incluir en la propia página los estilos mediante reglas

CSS.

- Permite solamente reutilizar un estilo en la misma página.
- Sigue sin existir separación entre estructura y presentación.

```html
<head>
<style>
```

//reglas CSS </style> </head>

con CSS Definir CSS en un archivo externo

- Se declara en la sección <head>
- Permite la separación completa de la estructura HTML de la

presentación.

- Permite reutilizar los estilos en todas las páginas de la aplicación.

```html
<head>
```

<link rel=“stylesheet” type=“text/css” href=“/css/estilos.css” media=“screen”/> </head> rel:indica el tipo de relación entre el recurso enlazado y la página HTML type:tipo de recurso enlazado href:indica la URL del archivo CSS media:indica el medio en el que se van a aplicar los estilos del archivo

con CSS Valores que puede tomar el atributo media

con CSS Definir CSS en un archivo externo

- Las reglas de tipo @import siempre preceden a cualquier otra

regla CSS

```html
<head>
```

<meta http-equiv="Content-Type" content="text/ html; charset=iso-8859-1" /> <title>Ejemplo de estilos CSS en un archivo externo</title>

```html
<style type="text/css" media="screen">
```

@import '/css/estilos.css'; </style> </head>

```html
<body>
```

<p>Un párrafo de texto.</p> </body> </html> @import '/css/estilos.css'; @import "/css/estilos.css";

```html
@import url('/css/estilos.css');
@import url("/css/estilos.css");
```

con CSS Ejercicio 1. A partir del codigo HTML aplicar los siguientes estilos utilizando estilos en línea, una hoja de estilos interna, y una hoja de estilos externa

```html
<html>
<head>
```

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <title>Ejemplo deestilos</title> </head>

```html
<body>
```

<h1>Titular delapagina</h1> <p>Un parrafo detexto nomuy largo.</p> </body> </html>

- h1 color de la fuente rojo, tipo de fuente Arial y tamaño 5
- p color gris, tipo de fuente Verdana y tamaño 2.

con CSS Ejercicio 2. Identifica las distintas partes de esta regla de estilo

- selector
- propiedad
- valor
- declaracion

blockquote { } line-height: 1.5;

con CSS Selector Descripción * Selector universal. Selecciona todos los elementos elemento Selector de elementos del tipo especificado *.clase Selector de clase. Selecciona los elementos de una clase específica (independiente del tipo del elemento) #id Selector de id. Selecciona el elemento con el identificador indicado (atributo id) elemento.clase Se pueden combinar los selectores, esta combinación selecciona los elementos que son de una clase específica #id.clase Elemento que tenga el identificador indicado y de una clase específica Selectores Básicos

con CSS Selectores Básicos

- {

margin: 0; padding: 0; } Selector universal: Se utiliza para seleccionar todos los elementos de la página.

con CSS Selectores Básicos h2 { color: blue; } p { color: black; } Selector de elementos: Selecciona todos los elementos de la página cuya etiqueta HTML coincide con el valor del selector. h1, h2, h3 { color: #8A8E27; font-weight: normal; font-family: Arial, Helvetica, sans-serif; }

con CSS Selectores Básicos Selector de elementos descendente: Selecciona los elementos que se encuentran dentro de otros elementos. Sólo se seleccionan los elementos em dentro de los elementos li. Los otros elementos em no se ven afectados .

con CSS Selectores Básicos p span { color: red; } Selector de elementos descendente: <p> ... <span>texto1</span> ... <a href="">...<span>texto2</span></a> ... </p> h1 span { color: blue; } p a span em { text-decoration: underline; } Los estilos de la regla anterior se aplican a los elementos de tipo <em> que se encuentren dentro de elementos de tipo <span>, que a su vez se encuentren dentro de elementos de tipo <a> que se encuentren dentro de elementos de tipo <p>.

con CSS Selectores Básicos .destacado { color: red; } Selector de clase

```html
<body>
```

<p class="destacado">Lorem ipsum...</p> <p>Nunc sed lacus et est...</p> <p>Class aptent taciti...</p> </body> .aviso { padding: 0.5em; border: 1px solid #98be10; background: #f6feda; } #destacado { color: red; } Selector de Id <p>Primer párrafo</p> <p id="destacado">Segundo párrafo</p> <p>Tercer párrafo</p>

con CSS Selectores Básicos IMPORTANTE DIFERENCIAR ENTRE ESTOS TRES TIPOS DE SELECTORES!!! /* Todos los elementos de tipo "p" con atributo class="aviso" */ p.aviso { ... } /* Todos los elementos con atributo class="aviso" que estén dentro de cualquier elemento de tipo "p" */ p .aviso { ... } /* Todos los elementos "p" de la página y todos los elementos con atributo class="aviso" de la página */ p, .aviso { ... }

con CSS Selectores Básicos Ejercicio 3. ¿De qué color serán los párrafos cuando se aplica esta hoja de estilo incrustada en un documento ? ¿Por qué?

```html
<style type="text/css">
```

p { color: purple; } p { color: green; } p { color: gray; } </style>

con CSS Selectores Básicos EJERCICIO 4: Vuelva a escribir cada uno de ellos son completamente incorrectos y algunos mas eficiente. 1. p {font-face: sans-serif;} p {font-size: 1em;} p {line-height: 1.2em;} 2. blockquote { font-size:1em line-height: 150% color: gray } 3. body {background-color: black;} {color: #666;} {margin-left: 12em;} {margin-right: 12em;} 4.

p {color: white;} blockquote {color: white;} li {color: white;} 5. <strong style="red">Act now!</strong>

con CSS Selectores Básicos EJERCICIO 4: Vuelva a escribir cada uno de ellos son completamente incorrectos y algunos mas eficiente. 1. p {font-face: sans-serif;} p {font-size: 1em;} p {line-height: 1.2em;} 2. blockquote { font-size:1em line-height: 150% color: gray } 3. body {background-color: black;} {color: #666;} {margin-left: 12em;} {margin-right: 12em;} 4.

p {color: white;} blockquote {color: white;} li {color: white;} 5. <strong style="red">Act now!</strong>

con CSS Selectores Avanzados p > span { color: blue; } Selector de hijos: Se utiliza para seleccionar un elemento que es hijo directo de otro elemento <p><span>Texto1</span></p> <p><a href="#"><span>Texto2</span></a></p> p span { color: red; } <p><span>Texto1</span></p> <p><a href="#"><span>Texto2</span></a></p> No confundir con el selector descendente Sólo se aplicaría aquí Se aplica a ambos

con CSS Selectores Avanzados Selector de hijos: Se utiliza para seleccionar un elemento que es hijo directo de otro elemento /*Selecciona todos los elementos de la clase resaltado que sean hijos directos del elemento con identificador principal*/ #principal > .resaltado /*Selecciona todos los elementos li que sean hijos directos de elementos de la clase lista*/ .lista > li

con CSS Selectores Básicos Qué elementos en el diagrama siguiente se puede esperar que aparezcan en verded cuando se aplica la regla de estilo: div#intro { color: green; }

con CSS Selectores Avanzados Selector adyacente: Se utiliza para seleccionar elementos que en el código HTML de la página se encuentran justo a continuación de otros elementos h2 { color: green; } h1 + h2 { color: red } <h1>Ti tulo1</ h1> <h2>Subtítulo</h2> ... <h2>Otro subtítulo</h2> ...

</body> tienen que ser hermanos y aparecer de manera consecutiva

con CSS Selectores Avanzados Selector adyacente: /*Selecciona los elementos span que están a continuación de un elemento p y es hermano*/ p+span /*Selecciona todos los elementos de clase resaltado que están a continuación de un elemento con id principal y que es hermano*/ #principal + .resaltado /*Selecciona los elementos li que están a continuación de un elemento con clase lista y que es hermano*/ .lista + li /*Selecciona los elementos con clase resaltado que están a continuación de un elemento hr (que es hermano) que está dentro de un div*/ div hr + .resaltado

con CSS Selectores Avanzados Selector de atributos: permiten seleccionar elementos HTML en función de sus atributos y/o valores de esos atributos Selector Descripción [attr] selecciona elementos que definen el attr, independientemente de su valor [attr=“val”] selecciona los elementos que tienen establecido un atributo llamado attr con un valor igual a val [attr]~=val selecciona los elementos que tienen establecido un atributo llamado attr y al menos uno de los valores del atributo es valor [attr|=valor], selecciona los elementos que tienen establecido un atributo llamado attr y cuyo valor es una serie de palabras separadas con guiones, pero que comienza con valor. Este tipo de selector sólo es útil para los atributos de tipo lang que indican el idioma del contenido del elemento.

con CSS Selectores Avanzados Selector de atributos: permiten seleccionar elementos HTML en función de sus atributos y/o valores de esos atributos Selector Descripción [attr^=“val”] selecciona elementos que definen el attr y que su valor empieza por val [attr$=“val”] selecciona los elementos que que definen el atributo attr y que su valor termina con val ele[attr=“val”] selecciona los elementos de tipo ele que tiene un atributo attr con el valor val.

con CSS Selectores Avanzados Selector de atributos: /* Se muestran de color azul todos los enlaces que tengan un atributo "class", independientemente de su valor */ a[class] { color: blue; } /* Se muestran de color azul todos los enlaces que tengan un atributo "class" con el valor "externo" */

```html
a[class="externo"] { color: blue; }
```

/* Se muestran de color azul todos los enlaces que apunten al sitio "http://www.ejemplo.com" */

```html
a[href="http://www.ejemplo.com"] { color: blue; }
```

con CSS Selectores Avanzados Selector de atributos: /* Se muestran de color azul todos los enlaces que tengan un atributo "class" en el que al menos uno de sus valores sea "externo" */

```html
a[class~="externo"] { color: blue; }
```

/* Selecciona todos los elementos de la página cuyo atributo "lang" sea igual a "en", es decir, todos los elementos en inglés */

```html
*[lang=en] { ... }
```

/* Selecciona todos los elementos de la página cuyo atributo "lang" empiece por "es", es decir, "es", "es-ES", "es-AR", etc. */

```html
*[lang|="es"] { color : red }
```

con CSS Agrupación Cuando el selector de dos o más reglas CSS es idéntico, se pueden agrupar las declaraciones de las reglas para hacer las hojas de estilos más eficientes: h1 { color: red; } ... h1 { font-size: 2em; } ... h1 { font-family: Verdana; } h1 { color: red; font-size: 2em; font-family: Verdana; } h1 { color: red; font-size: 2em; font-family: Verdana; }

con CSS Agrupación /* Selecciona los elementos de tipo h1, h2, y h3 */ h1, h2, h3 /* Selecciona elementos de tipo h2 y los que tengan de la clase azul*/ h2, .azul h2, *.azul /*Selecciona los elementos con identificador uno y dos*/ #uno, #dos /* Selecciona los elementos de la clase verde, los de tipo h1 y el que tenga el identificador ‘tres’*/ .verde, h1, #tres

con CSS Selectores de pseudo clases: El navegador realiza un seguimiento de los enlaces, por ejemplo, si el usuario ha hecho click sobre un enlace. En CSS , puede aplicar estilos a los enlaces en distintos estados utilizando una pseudo clase. Hay cuatro principales: a: link Aplica un estilo a los enlaces unclicked ( no visitados ) a: visited Se aplica un estilo a los enlaces que ya se han hecho clic a: hover Se aplica un estilo cuando el puntero del ratón está sobre el enlace a: active Aplica un estilo a la vez que se presiona el botón del ratón

con CSS a:link { color: maroon; text-decoration: none; } a:visited { color: gray; text-decoration: none; } a:hover { color: maroon; text-decoration: underline; background-color: #C4CEF8; } a:active { color: red; text-decoration: underline; background-color: #C4CEF8; }

con CSS Selectores de pseudo clases: Cuando se aplican varias pseudo-clases diferentes sobre un mismo enlace, se producen colisiones entre los estilos de algunas pseudo-clases. Si se pasa por ejemplo el ratón por encima de un enlace visitado, se aplican los estilos de las pseudo-clases :hover y :visited. Si el usuario pincha sobre un enlace no visitado, se aplican las pseudo-clases :hover, :link y :active y así sucesivamente.

Si se definen varias pseudo-clases sobre un mismo enlace, el único orden que asegura que todos los estilos de las pseudo-clases se aplican de forma coherente es el siguiente: :link, :visited, :hover y :active. De hecho, en muchas hojas de estilos es habitual establecer los estilos de los enlaces de la siguiente forma

a:link, a:visited { ... } a:hover, a:active { ... } Las pseudo-clases :link y :visited solamente están definidas para los enlaces, pero las pseudo- clases :hover y :active se definen para todos los elementos HTML.

con CSS Selectores de pseudo clases: Ejercicio 8. De acuerdo con la siguiente hoja de estilo, ¿de que color es el enlace? a.context:link { color: blue; } a.context:visited { color: purple; } a.context:hover { color: green; } a.context:active { color: red; } Ejercicio 9. De acuerdo con la siguiente hoja de estilo, ¿de qu´e color es el enlace?

a.context:visited { color: purple; } a.context:hover { color: green; } a.context:active { color: red; } a.context:link { color: blue; } Ejercicio 10. De acuerdo con la siguiente hoja de estilo, ¿de qu´e color es el enlace? a.context:link { color: blue; } a.context:visited { color: purple !important; } a.context:hover { color: green; } a.context:active { color: red; }

Estructura y herencia: clave de CSS Controlar la relación padre-hijo es fundamental para el funcionamiento de CSS. Un hijo puede "heredar" valores de propiedad de su padre. Con una buena planificación, la herencia puede emplearse para hacer más eficiente la especificación de los estilos.

Estructura y herencia: clave de CSS Algunas propiedades aplicadas al elemento p pueden ser heredadas por sus hijos. Es importante tener en cuenta que algunas propiedades de la hoja de estilo se heredan y otras no. En general,

- las propiedades relacionadas con el estilo del tamaño del texto (fuente,

color, estilo, etc.), se transmiten.

- las propiedades tales como bordes, márgenes, fondos , etc., que afectan a la

zona en caja alrededor del elemento no tienden a ser transmitido.

Estructura y herencia: clave de CSS La herencia se suele utilizar en la definición de hojas de estilos. Por ejemplo, si queremos que todos los elementos de texto que se presentaran en el tipo de letra Verdana

- se podría escribir reglas de estilo separados para cada elemento en el

documento y establecer el font-face a Verdana .

- escribir una regla de estilo único que se aplica la propiedad font-face con el

elemento del cuerpo.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
```

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

```html
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html;
```

charset=iso-8859-1" /> <title>Ejemplo de herencia de estilos</title>

```html
<style type="text/css">
```

body { color: blue; } </style> </head>

```html
<body>
```

<h1>Titular de la página</h1> <p>Un párrafo de texto no muy largo.</p> </body> </html> Estructura y herencia: clave de CSS

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
```

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

```html
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html;
```

charset=iso-8859-1" /> <title>Ejemplo de herencia de estilos</title>

```html
<style type="text/css">
```

body { font-family: Arial; color: black; } h1 { font-family: Verdana; } p { color: red; } </style> </head>

```html
<body>
```

<h1>Titular de la página</h1> <p>Un párrafo de texto no muy largo.</p> </body> </html> Estructura y herencia: clave de CSS

Estructura y herencia: Concepto de cascada: qué ocurre si varias fuentes de información de estilo quieren dar formato al mismo elemento de una página. El navegador ordena las declaraciones de estilo de acuerdo a

- el origen de la hoja de estilo,
- la especificidad de los selectores,
- el orden de la regla para determinar cuál aplicar.

clave de CSS

Estructura y herencia: El origen de las hojas de estilo ordenadas de menor a mayor peso: • (+) Hojas de estilo externas vinculadas (empleando el elemento link en la cabecera del documento). • (++) Hojas de estilo externas importadas (empleando el elemento @import dentro del elemento style en la cabecera del documento).

• (+++) Hojas de estilo incrustadas (empleando el elemento style en la cabecera del documento). • (++++) Estilos en línea (empleando el atributo style en la etiqueta del elemento). Declaraciones de estilo marcadas como !important. Es importante entender esta jerarquía y tener en cuenta que las reglas de estilo que están al final de la lista ignorarán a las primeras.

clave de CSS

Especificidad del selector: Puede existir algún conflicto a nivel de reglas. Por esa razón, "la cascada" continúa a nivel de reglas. clave de CSS strong {color: red;} h1 strong {color: blue;} Cuanto más específico sea el selector se le dará más peso para ignorar las declaraciones en conflicto

id (++++) -class (+++) -contextos (++) -elementos individuales (+) Pinta todos los elementos strong de la página a rojo Pinta todos los elementos strong de los encabezados h1 a azul

Orden de las reglas: Cuando una hoja de estilo contiene varias reglas en conflicto de igual peso, sólo se tendrá en cuenta la que está en último lugar. clave de CSS strong {color: red;} strong {color: blue;} Pinta todos los elementos strong de la página a rojo Pinta todos los elementos strong de la página a azul

clave de CSS Ejercicio 11. A partir del código HTML, ¿de qué color será el párrafo?.

```html
<!doctype html>
<html>
<head>
<style>
```

p { color: red; } .heading { color: blue; }

```html
<style>
```

</head>

```html
<body>
```

<pclass="heading">Welcome!</p> </body> </html>

clave de CSS Ejercicio 12. A partir del código HTML, ¿de qué color será el parrafo?. >

El modelo de cajas: Todos los elementos de una página web generan una caja rectangular alrededor. de CSS Cuanto es el ancho y alto total de una caja??

El modelo de cajas: de CSS

El modelo de cajas: 4 Componentes: Contenido del elemento: es lo que está en el núcleo de la caja está el elemento. Relleno(padding): es el espacio que rodea al contenido. Borde (border): es la parte que perfila el relleno. Margen (margin): es el espacio que rodea al borde, la parte más externa del elemento.

de CSS

de CSS

de CSS

de CSS

El modelo de cajas: Área de contenido

- es la parte más interna de la caja
- las propiedades que afectan al tamaño del área de contenido

su ancho width y su altura height. div {width:100px; height:200px; } Existen otras propiedades interesantes max-height, max- width, min-height y min-width. Atención! cuando se proporcionen valores de medidas, la unidad debe ir inmediatamente después que el número: {margin: 2em;} Si añadimos un espacio después de la unidad, esto causará que la propiedad no funcione

{margin: 2 em;} INCORRECTO de CSS

de CSS

El modelo de cajas: relleno o padding: El relleno es una cantidad opcional de espacio existente entre el área de contenido de un elemento y su borde. {arriba,derecha,abajo,izquierda} {arri/abj,der/izq} {todo} de CSS

de CSS

de CSS

El modelo de cajas: Borde: es una línea dibujada alrededor del área de contenido de un elemento y de su relleno. Los bordes funcionan como en el padding: superior, derecho, inferior, izquierdo. de CSS

El modelo de cajas - Borde: Border-style: div {border-style: solid dashed dotted double; } Border-width: div {border-style: solid; border-width: thin medium thick 12px; } Border-color

```html
div {border-style: solid; border-width: 4px; border-color: #333 #red rgb(0,0,255) #0044AC; }
```

Border: une todas las propiedades “border”. No hay que colocar los valores en ningún orden concreto. La propiedad border se utiliza cuando se quieren configurar los 4 lados iguales. También tenemos las propiedades: border-top, border-right, border-bottom y border-left de CSS

de CSS

de CSS

El modelo de cajas: Margen: El margen es la cantidad de espacio que se puede añadir alrededor del borde de un elemento. Los márgenes top y bottom de dos elementos que van seguidos se "colapsan". Es decir, se asume como margen entre ambos elementos el mayor de ellos. h1 {margin: 10px 20px 10px 20px; } h2 {margin: 20px; } El espacio resultante entre los dos elementos será de 20px En los elementos en línea, hay que tener en cuenta que los márgenes left y right no colapsan, sino que suman.

de CSS

de CSS

El modelo de cajas

- El relleno, los bordes y los márgenes son opcionales, por lo que, si ajustas

a cero sus valores se eliminarán de la caja.

- Cualquier color o imagen que apliques de fondo al elemento se extenderá

por el relleno.

- Los bordes se generan con propiedades de estilo que especifican su

estilo (por ejemplo: sólido), grosor y color.

- Cuando el borde tiene huecos, el color o imagen de fondo parecerá a

través de esos huecos.

- Los márgenes siempre son transparentes (el color del elemento padre

se verá a través de ellos).

- Cuando definas el largo de un elemento estás definiendo el largo del área

de contenido (los largos de relleno, de borde y de márgenes se sumarían a esta cantidad).

- Puedes cambiar el estilo de los lados superior, derecho, inferior e

izquierdo de una caja de un elemento por separado. de CSS

---

# 2.2 TEORÍA CSS PROPIEDAD DISPLAY

Diseño Interfaces Web Teoría UD2

UD2: USO DE ESTILOS SECCIÓN 1: PROPIEDAD DISPLAY Como hemos visto en las diapositivas, en CSS todo tiene una caja alrededor y comprender estas cajas es clave para poder crear diseños con CSS o para alinear elementos con otros elementos.

En CSS, hay dos tipos de cajas

- En bloque

Las características que definen una caja en bloque son: - La caja fuerza un salto de línea al llegar al final de la línea. - La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.

Se respetan las propiedades width y height. - El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja. A menos que decidamos cambiar el tipo de visualización a en línea, elementos como los encabezados (por ejemplo, <h1>) y todos los elementos <p> usan por defecto block como tipo de visualización externa.

- En línea

Las características que definen una caja en línea son: - La caja no fuerza ningún salto de línea al llegar al final de la línea. - Las propiedades width y height no se aplican. - Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea. Es decir, no se aplica.

Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.

Diseño Interfaces Web Teoría UD2

El elemento <a>, que se utiliza para los enlaces, y los elementos <span>, <em> y <strong> son ejemplos de elementos que se muestran en línea por defecto. Para poder jugar con CSS en el modo en que se van a mostrar los elementos, tenemos la propiedad display. Podemos jugar con varios valores, pudiendo convertir elementos inline en block, como veremos en el siguiente ejemplo

Ejemplo 1: Visualizar como quedaría un elemento <i>, que es inline, al pasarlo a block. En la hoja de estilos definiríamos lo siguiente: i { display: block; } El resultado sería el siguiente: El texto “a los años sesenta” que está en Italic, se comporta como un elemento block forzando un salto de línea.

Lo mismo podríamos hacer pasando un elemento block a inline. Con la propiedad display existe una tercera opción, display inline-block, que tiene unas características que podríamos decir, son una combinación de inline y block: Con display:inline-block: - Se respecta la anchura y la altura que le asignemos: width y height. (inline no) - El top y bottom de los márgenes y rellenos se respetan. Es decir podemos asignar margin y padding a los 4 lados. (inline no, solamente el right y left) - Se comporta como un elemento inline, es decir, no añade un salto de línea.

En W3schools, tenemos un ejemplo para visualizar todos estos conceptos: https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1 Donde podéis comprobar aspectos como: - ¿Qué sucede cuando aumentáis el ancho de los elementos inline con la propiedad width? Nada, no cambia el tamaño. Es el propio del elemento span.

¿Cuándo aumenta padding en un elemento con display inline-block, aumenta en los 4 lados? Sí, a diferencia de un elemento con display inline, que solamente lo aplica en el lado izquierdo y derecho.

Diseño Interfaces Web Teoría UD2

Variad las características de los elementos <span> del ejercicio para comprender las diferentes posibilidades que ofrece la propiedad display.

---

# 2.3 DIW: DIAPOSITIVAS UD 2 SECCIÓN 2: PROPIEDADES DE

Docente: Marc Salom SECCIÓN 1: INTRODUCCIÓN A CSS SECCIÓN 2: PROPIEDADES DE FUENTE Y TEXTO SECCIÓN 3: LOS COLORES Y LOS FONDOS SECCIÓN 4: FLOTAR Y POSICIONAR SECCIÓN 5: TABLAS

### UNIDAD 2: USO DE ESTILOS

S2. PROPIEDADES DE FUENTE Y TEXTO

### 1. Medidas

### 2. Propiedades de fuente

### 3. Propiedades de texto

Absolutas: su valor no depende de otro valor de referencia.

- in, pulgadas ("inches", en inglés). Una pulgada equivale a

2.54 centímetros.

- cm, centímetros.
- mm, milímetros.
- pt, puntos. Un punto equivale a 1 pulgada/72, es decir, unos

0.35 milímetros.

- pc, picas. Una pica equivale a 12 puntos, es decir, unos

4.23 milímetros. S2. PROPIEDADES DE FUENTE

Unidades de TICsc

Relativas: no están completamente definidas, ya que su valor siempre está referenciado respecto a otro valor.

- em, relativa al font-size del elemento
- px, (píxel) relativa respecto de la resolución de la pantalla

del dispositivo en el que se visualiza la página HTML. La unidad em y rem hace referencia al tamaño en puntos de la letra que se está utilizando. Si se utiliza una tipografía de 12 puntos, 1em equivale a 12 puntos. En una pagina html el font-size por defecto es de 16px.

S2. PROPIEDADES DE FUENTE

- rem, relativa al font-size del root element

Porcentajes: Un porcentaje está formado por un valor numérico seguido del símbolo % y siempre está referenciado a otra medida. Los porcentajes se pueden utilizar por ejemplo para establecer el valor del tamaño de letra de los elementos: html { font-size: 62.5%; } o html {font-size: 100%}

```html
1 rem=10px;
1 rem=16px;
1.5 rem= 15px;
1.5 rem= 24px;
```

S2. PROPIEDADES DE FUENTE

Unidades de TICsc

Las propiedades de las fuentes en CSS son usadas para configurar la apariencia deseada para el texto de un documento.

- font-family
- font-size
- font-weight
- font-style
- font-variant

S2. PROPIEDADES DE FUENTE

Font-family: se utiliza para indicar el tipo de letra con el que se muestra el texto. El tipo de letra del texto se puede indicar de dos formas diferentes

- Mediante el nombre de una familia tipográfica: "Arial",

"Verdana", “Garamond"

- Mediante el nombre genérico de una familia tipográfica: serif

(tipo de letra similar a Times New Roman), sans-serif (tipo Arial), cursive (tipo Comic Sans), fantasy (tipo Impact) y monospace (tipo Courier New) —>“Utiliza la fuente que más se parezca a la seleccionada de todas las que tiene instaladas el usuario" CSS permite indicar en la propiedad font-family más de un tipo de letra.

El navegador probará en primer lugar con el primer tipo de letra indicado. S2. PROPIEDADES DE FUENTE

Font-family: S2. PROPIEDADES DE FUENTE

S2. PROPIEDADES DE FUENTE

Font-family: Las listas de tipos de letra más utilizadas son las siguientes: font-family: Arial, Helvetica, sans-serif; font-family: "Times New Roman", Times, serif; font-family: "Courier New", Courier, monospace; font-family: Georgia, "Times New Roman", Times, serif; font-family: Verdana, Arial, Helvetica, sans-serif;

Font size: CSS permite utilizar una serie de palabras clave para indicar el tamaño de letra del texto: CSS recomienda indicar el tamaño del texto

- en la unidad rem
- en porcentaje (%)

S2. PROPIEDADES DE FUENTE

Font-weight: Controla la anchura de la letra. Los valores que normalmente se utilizan son normal (el valor por defecto) y bold para los textos en negrita. S2. PROPIEDADES DE FUENTE

#especial em { font-weight: bold; } #especial strong { font-weight: normal; background-color: #FFFF66; padding: 2px; }

Font-style: Normalmente se emplea para mostrar un texto en cursiva mediante el valor italic. S2. PROPIEDADES DE FUENTE

#especial strong { font-weight: normal; font-style: italic; background-color:#FFFF66; padding: 2px; }

Font-variant Este tipo de fuente convierte todas las letras de minúsculas a mayúsculas, aunque establece un tamaño de letra mayúscula de menor tamaño que el original. S2. PROPIEDADES DE FUENTE

Las propiedades de texto permiten aplicar estilos a los textos espaciando sus palabras o sus letras, decorándolo, alineándolo, o transformándolo. Algunas de estas propiedades son

- text-align
- line-height
- text-decoration
- text-transform
- text-indent
- letter-spacing

S2. PROPIEDADES DE FUENTE

text-align: Es la propiedad que define la alineación del texto. Los valores tradicionales: a la izquierda (left), a la derecha (right), centrado (center) y justificado (justify). S2. PROPIEDADES DE FUENTE

line-height: Es la propiedad que permite controlar la altura ocupada por cada línea de texto: Se puede utilizar unidades de medida, uso de porcentajes e indicar un número sin unidades (se interpreta como el múltiplo del tamaño de letra del elemento) para asignarle un valor a la propiedad.

S2. PROPIEDADES DE FUENTE

p { line-height: 1.2; font-size: 1em } p { line-height: 1.2em; font-size: 1em } p { line-height: 120%; font-size: 1em }

S2. PROPIEDADES DE FUENTE

line-height

S2. PROPIEDADES DE FUENTE

line-height

text-decoration: Esta propiedad puede tomar los siguientes valores

- underline subraya el texto
- overline: añade una línea en la parte superior del texto
- line-through: muestra el texto tachado con una línea

continua

- blink: muestra el texto parpadeante

S2. PROPIEDADES DE FUENTE

text-transform: Esta propiedad permite mostrar el texto original transformado en un texto

- completamente en mayúsculas (uppercase)
- minúsculas (lowercase)
- con la primera letra de cada palabra en mayúscula

(capitalize) S2. PROPIEDADES DE FUENTE

text-indent: Esta propiedad permite tabular la primera línea de cada párrafo para facilitar su lectura. Se puede especificar con una unidad de medida o con un porcentaje. S2. PROPIEDADES DE FUENTE

text-indent: S2. PROPIEDADES DE FUENTE

letter-spacing y word-spacing: Permiten controlar la separación entre las letras que forman las palabras y la separación entre las palabras que forman los textos. S2. PROPIEDADES DE FUENTE

.especial h1 { letter-spacing: .2em; } .especial p { word-spacing: .5em; }

---

# 2.4 DIW DIAPOSITIVAS UD 2 SECCIÓN 3: COLORES Y FONDO

### UNIDAD 2: USO DE ESTILOS

SECCIÓN 1: INTRODUCCIÓN A CSS SECCIÓN 2: PROPIEDADES DE FUENTE Y TEXTO SECCIÓN 3: LOS COLORES Y LOS FONDOS SECCIÓN 4: FLOTAR Y POSICIONAR SECCIÓN 5: TABLAS Docente: Marc Salom

S3: LOS COLORES Y LOS FONDOS

### 1. Color del primer plano y del fondo

### 2. Imágenes de fondo

### 3. Opacidades

S3: LOS COLORES Y LOS FONDOS 1. Color del primer plano y del fondo

- Se usa la propiedad color para establecer el color del primer plano.

p { color: #0000FF; } CSS/HTML soporta más de 140 colores.

- Se pueden especificar los colores directamente, o usando valores RGB, HEX, RGBA, HSLA.

https://www.w3schools.com/css/css_colors_rgb.asp Las transparencia se pueden aplicar usando RGBA: https://www.w3schools.com/css/css_background.asp

S3: LOS COLORES Y LOS FONDOS 1. Color del primer plano y del fondo

- Se usa la propiedad background-color para establecer el color de fondo.

body { background-color: lightblue; } https://www.w3schools.com/css/tryit.asp?filename=trycss_background-color_body

S3: LOS COLORES Y LOS FONDOS

En CSS la propiedad para insertar una imagen de fondo es

```html
body { background-image: url(“imagen.gif”);  }
```

https://www.w3schools.com/css/tryit.asp?filename=trycss_background-image En este caso la imagen.gif está en el mismo directorio que el archivo css. Si estuviera la imagen en la carpeta superior respecto donde se encuentra el archivo css: ../imagen.gif Si estuviera en otras carpetas: ../imágenes/imagen.gif Si la imagen la tomamos de Internet

```html
body { background-image: url(“http://www.html.net/imagen.gif”);  }
```

S3: LOS COLORES Y LOS FONDOS

La propiedad background-repeat nos permite controlar la forma de repetición de las imágenes de fondo ya que por defecto, la propiedad background-image repite la imagen horizontal y verticalmente. Con la propiedad background-repeat tenemos 3 posibles valores: repeat (por defecto), no repeat, repeat-x y repeat-y.

body {

```html
background-image: url("gradient_bg.png");
```

background-repeat: repeat; } body {

```html
background-image: url("gradient_bg.png");
```

background-repeat: repeat-x; }

S3: LOS COLORES Y LOS FONDOS

La propiedad background-position especifica la posición de la imagen, definida esta propiedad mediante coordenadas tomando de referencia el extremo izquierdo de la pantalla.

- % (ancho de la pantalla): background-position: 50% 25%
- Unidades fijas (px, cm, …): background-position: 2cm 2cm
- Unidades relativas (em, rem): background-position: 2rem 2rem
- Palabras (top, bottom, center, left, right): background position: top right

Mediante el siguiente enlace se pueden visualizar varios casos jugando con esta propiedad: http://www.w3schools.com/cssref/playit.asp?filename=playcss_background- position&preval=50%25%2050%25

S3: LOS COLORES Y LOS FONDOS

La propiedad background-attachment puede fijar la imagen en una posición concreta. Puede tomar 3 valores diferentes

- Scroll: (valor por defecto)

https://www.w3schools.com/css/tryit.asp?filename=trycss_background-image_attachment2

- Fixed

https://www.w3schools.com/css/tryit.asp?filename=trycss_background-image_attachment

- Inherit: hereda el valor del background-attachment del elemento padre al que pertenece.

S3: LOS COLORES Y LOS FONDOS

La propiedad background permite configurar todas las propiedades de fondo vistas anteriormente usando una única declaración.

```html
Body { background: url(“fondo.gif”) fixed top center no-repeat; }
div.Cabecera {background: repeat-x url(“fondo.gif”) red; }
```

S3: LOS COLORES Y LOS FONDOS

- Opacidades o transparencias.

Es una característica de los elementos que nos permiten mostrar o no otros elementos que tengan por debajo. La propiedad es opacity y puede tomar entre un valor 0 (no deja pasar nada) y valor 1 (lo deja pasar todo) pudiendo jugar con valores intermedios, por ejemplo 0.3, 0.6, 0.7.

Aplicado sobre imágenes aquí tenemos 3 ejemplos

S3: LOS COLORES Y LOS FONDOS

Cuando la opacidad se aplica sobre un elemento contenedor de otros elementos hijo, todos los elementos hijo heredan la opacidad, pudiendo suceder que algún texto sea difícil de leer. https://www.w3schools.com/css/tryit.asp?filename=trycss_opacity_box

S3. LOS COLORES Y LOS FONDOS

Si no queremos que hereden la opacidad los elementos hijo, usando valores de color RGBA solamente lo aplicará al background-color y no al texto: https://www.w3schools.com/css/tryit.asp?filename=trycss_opacity_box2

---

# 2.5 DIW DIAPOSITIVAS UD 2 SECCIÓN 4: FLOTAR Y POSICI

DE ESTILOS SECCIÓN 1: INTRODUCCIÓN A CSS SECCIÓN 2: PROPIEDADES DE FUENTE Y SECCIÓN 3: LOS COLORES Y LOS FONDOS SECCIÓN 4: FLOTAR Y POSICIONAR SECCIÓN 5: TABLAS

### UNIDAD 2: USO

Docente: Marc Salom

SECCIÓN 4. FLOTAR Y POSICIONAR

### 1. Flotar

### 2. Posicionamiento

### 3. Estrategias para el layout de las páginas

### 4. Características avanzadas de CSS

SECCIÓN 4. FLOTAR Y POSICIONAR CSS utiliza el flotado y el posicionamiento para tener el máximo control sobre el lugar que ocupa cada elemento en una página web, sus condiciones de visibilidad y "flotabilidad", así como controlar el manejo de capas. Algunas de las propiedades de CSS que se utilizan para controlar el posicionamiento de los elementos son

float, clear, position, bottom, top, left, right, over-flow, clip, visibility, y z-index. Cuando hablamos de que los objetos de una página siguen el flujo normal del documento, queremos indicar que la forma en la que se disponen en la ventana del navegador coincide con el lugar que ocupan en el documento escrito.

SECCIÓN 4. FLOTAR Y POSICIONAR

SECCIÓN 4. FLOTAR Y POSICIONAR

Flotar sirve para mover una caja a la izquierda o a la derecha hasta que su borde exterior toque el borde de la caja que lo contiene o toque otra caja flotante. Para que un elemento pueda flotar debe tener definido implícita o explícitamente su tamaño. Las cajas flotantes no se encuentran en el "flujo normal" del documento aunque las cajas que sí siguen el flujo normal se situan alrededor del elemento flotado.

SECCIÓN 4. FLOTAR Y POSICIONAR

float: Sirve para crear diseños multicolumna, barras de navegación de listas no numeradas, poner contenido en forma tabular pero sin emplear tablas. Valores que puede tener la propiedad float

- none hará que el objeto no sea flotante.
- left hace que el elemento flote a la izquierda.
- right hace que el elemento flote a la derecha.
- inherit hará que el elemento tome el valor de esta propiedad

de su elemento padre.

SECCIÓN 4. FLOTAR Y POSICIONAR

float: imágenes

SECCIÓN 4. FLOTAR Y POSICIONAR

float: imágenes

SECCIÓN 4. FLOTAR Y POSICIONAR

float: imágenes Algunos comportamientos clave de elementos flotantes evidentes en las figuras anteriores

- Un elemento flotante es como una isla.
- En primer lugar, se puede ver que la imagen es a la vez

removida de su posición en el flujo normal, sin embargo, sigue influyendo en el contenido de los alrededores.

- El texto del párrafo hace el espacio para el elemento img.
- Los elementos flotantes permanecen en el área de contenido del

elemento contenedor.

- Es importante tener en cuenta que la imagen flotada se coloca

dentro del área de contenido (los bordes interiores) del párrafo que lo contiene. No se extiende a la zona de relleno del párrafo.

SECCIÓN 4. FLOTAR Y POSICIONAR

float: elementos de texto inline

SECCIÓN 4. FLOTAR Y POSICIONAR

float: elementos de texto inline Algunos comportamientos clave de elementos de texto inline que son flotantes evidentes en la figura anterior

- Siempre hay que proporcionar una anchura (width)
- Si no pusiéramos una achura, la caja del área del contenido se

expandiría a la máxima achura.

- Es importante tener en cuenta que la imagen flotada se coloca

dentro del área de contenido (los bordes interiores) del párrafo que lo contiene. No se extiende a la zona de relleno del párrafo.

- El elemento de texto inline pasa a ser una isla, la cual se posiciona en

función del valor asignado, teniendo en cuenta los elementos que lo acompañan.

SECCIÓN 4. FLOTAR Y POSICIONAR

float: elementos de bloque

SECCIÓN 4. FLOTAR Y POSICIONAR

float: elementos de bloque Algunos comportamientos clave de elementos de bloque flotantes evidentes en la figura anterior

- El párrafo flotado se mueve a la izquierda y el contenido siguiente lo

envuelve.

- Tiene el mismo comportamiento que un elemento de texto en línea

cuando se posiciona mediante el float.

- Hay que proporcionar una achura (width), si no completarán toda la

anchura disponible.

SECCIÓN 4. FLOTAR Y POSICIONAR

clear: Sirve para mantener limpia el área que está al lado del elemento flotante y que el siguiente elemento comience en su posición normal dentro del bloque que lo contiene. Valores que puede tener la propiedad clear

- left indica que el elemento se colocará debajo de cualquier

otro elemento del bloque al que pertenece que estuviese flotando a la izquierda.

- right funciona como el left pero en este caso el elemento

deberá estar flotando a la derecha.

- both mueve hacia abajo el elemento hasta que esté limpio

de elementos flotantes a ambos lados.

- none permite elementos flotantes a ambos lados. Es el valor

por defecto.

- inherit indica que heredará el valor de la propiedad clear de

su elemento padre.

SECCIÓN 4. FLOTAR Y POSICIONAR

clear

SECCIÓN 4. FLOTAR Y POSICIONAR

```html
<html>
<head>
```

<link rel="stylesheet" type="text/css" href="estilos.css" /> <title>Flotar</title> </head>

```html
<body>
```

<div id="contenido"> <div id="caja1"> Caja 1 </div> <div id="caja2"> Caja 2 </div> <div id="caja3"> Caja 3 </div> </div> </body> </html>

SECCIÓN 4. FLOTAR Y POSICIONAR

body { font-weight: bold; color: white; } #contenido { /* Ancho de 700px y centrado en el navegador */ width: 700px; margin: auto; /* Borde sólido y fondo gris claro */ border: solid 1px black; background-color: #CCCCCC; } #caja1 { width: 100px; height: 100px; background-color:#FF0000; border: solid 1px black; margin: 10px; } #caja2 { width: 130px; height: 130px; background-color:#00FF00; border: solid 1px black; margin: 10px; } #caja3 { width: 160px; height: 160px; background-color:#0000FF; border: solid 1px black; margin: 10px; }

SECCIÓN 4. FLOTAR Y POSICIONAR

SECCIÓN 4. FLOTAR Y POSICIONAR

Flotar la Caja1 a la derecha #caja1{ width: 100px; height: 100px; background-color: #FF0000; border: solid 1px black; margin: 10px; /* Flotar a la derecha */ float: right; } La caja1 ya no se encuentra en el flujo del documento, no ocupa espacio.

SECCIÓN 4. FLOTAR Y POSICIONAR

Flotar la Caja1 a la izquierda #caja1{ width: 100px; height: 100px; background-color: #FF0000; border: solid 1px black; margin: 10px; /* Flotar a la izquierda */ float: left; } La caja1 ya no se encuentra en el flujo del documento, no ocupa espacio y se situa sobre la caja2, ocultando así parte de ella.

SECCIÓN 4. FLOTAR Y POSICIONAR

Flotar la Caja2 a la izquierda #caja2{ width: 130px; height: 130px; background-color: #00FF00; border: solid 1px black; margin: 10px; /* Flotar a la izquierda */ float: left; } La Caja3, junto con el Contenedor, es la única que queda en el flujo normal del documento. Debemos fijarnos que el tamaño del Contenedor se adapta al de los elementos que siguen en el flujo normal.

SECCIÓN 4. FLOTAR Y POSICIONAR

Flotar la Caja3 a la izquierda #caja3{ width: 160px; height: 160px; background-color: #0000FF; border: solid 1px black; margin: 10px; /* Flotar a la izquierda */ float: left; } El div Contenido tiene ahora una altura de 0px, ya que todo lo que tiene en su interior está fuera del flujo del documento.

Como no tiene nada dentro, no necesita tener una altura determinada. Los div de las cajas de colores siguen estando en el interior del div contenido y eso se nota en que no salen del ancho marcado por éste y que su alineamiento es con respecto a él.

SECCIÓN 4. FLOTAR Y POSICIONAR

Alternativas para volver a ver el Contenido

- aplicar una altura configurando en el selector #contenido la

propiedad height con una altura mayor que el alto de la caja más grande.

- Se puede flotar a la izquierda la caja con id #contenido. De esta

forma volvería a aparecer pero flotando a la izquierda de su contenedor (body).

- Añadir, dentro del div Contenido y a continuación de las tres

cajas flotadas, un div totalmente vacío. Este div lo configuramos estableciendo la propiedad clear con el valor both (en este caso también serviría left, pues todas las cajas flotan a la izquierda). Esta es la solución más utilizada.

SECCIÓN 4. FLOTAR Y POSICIONAR

Añadir un div dentro del div contenido: fichero .html

```html
<body>
```

<div id="contenido"> <div id="caja1"> Caja 1 </div> <div id="caja2"> Caja 2 </div> <div id="caja3"> Caja 3 </div> <!-- Caja vacía para limpiar flotados -->

```html
<div class="clearboth"></div>
```

</div> </body> fichero .css /* Limpiar flotados a izquierda y derecha */ .clearboth{clear: both;}

SECCIÓN 4. FLOTAR Y POSICIONAR

Diseño a 2 columnas con cabecera y pie de página

SECCIÓN 4. FLOTAR Y POSICIONAR

Diseño a 2 columnas con cabecera y pie de página: #contenedor { width: 700px; } #cabecera { } #menu { float: left; width: 150px; } #contenido { float: left; width: 550px; } #pie { clear: both; }

```html
<body>
```

<div id="contenedor"> <div id="cabecera"> </div> <div id="menu"> </div> <div id="contenido"> </div> <div id="pie"> </div> </div> </body>

SECCIÓN 4. FLOTAR Y POSICIONAR

Diseño a 3 columnas con cabecera y pie de página

SECCIÓN 4. FLOTAR Y POSICIONAR

Diseño a 3 columnas con cabecera y pie de página: #contenedor {} #cabecera {} #menu { float: left; width: 15%;} #contenido { float: left; width: 85%;} #contenido #principal { float: left; width: 80%;} #contenido #secundario { float: left; width: 20%;} #pie { clear: both;}

```html
<body>
```

<div id="contenedor"> <div id="cabecera"> </div> <div id="menu"> </div> <div id="contenido"> <div id="principal"> </div> <div id="secundario"> </div> </div> <div id="pie"> </div> </div> </body>

SECCIÓN 4. FLOTAR Y POSICIONAR

display: propiedad que permite al documento interpretar de otra forma los elementos de tipo bloque y los elementos de tipo línea. Valores que puede tomar la propiedad display

- block: si quieres que un elemento "en línea" se comporte

como un elemento de tipo bloque (enlaces que forman el menú de navegación).

- inline: si quieres que un elemento de tipo bloque se

comporte como un elemento en linea (listas que se quieren mostrar horizontalmente).

- none: si quieres que un elemento de bloque no genere caja,

no muestre su contenido y no ocupe espacio en la página.

- inline-block: se comporta como en línea pero respeta el

margin y padding a los 4 lados.

SECCIÓN 4. FLOTAR Y POSICIONAR

<div>DIV normal</div> <div style="display:inline">DIV con display:inline</div> <a href="#">Enlace normal</a> <a href="#" style="display:block">Enlace con display:block</a>

SECCIÓN 4. FLOTAR Y POSICIONAR

position: propiedad que permite posicionar los elementos en un documento. Valores que puede tomar la propiedad position

- static
- relative
- absolute
- fixed

SECCIÓN 4. FLOTAR Y POSICIONAR

position

- static: permite colocar a los elementos según el flujo

normal. Es el valor que asumirá por defecto en todos los elementos HTML.

- relative: consiste en posicionar una caja según el

posicionamiento normal y después desplazarla respecto de su posición original estableciendo para ello una distancia vertical y/o horizontal.

SECCIÓN 4. FLOTAR Y POSICIONAR

position: • relative: El desplazamiento relativo de una caja no afecta al resto de cajas adyacentes, que se muestran en la misma posición que si la caja desplazada no se hubiera movido de su posición original. #caja2 { width: 130px; height: 130px; background-color:#00FF00; border: solid 1px black; margin: 10px; /* Posicionamento relativo */ position: relative; left: 50px; top: 50px; }

SECCIÓN 4. FLOTAR Y POSICIONAR

position

- relative

img.desplazada { position: relative; top: 8em; } <img class="desplazada" src="imagenes/imagen.png" alt="Imagen genérica" /> <img src="imagenes/imagen.png" alt="Imagen genérica" /> <img src="imagenes/imagen.png" alt="Imagen genérica" />

SECCIÓN 4. FLOTAR Y POSICIONAR

position

- absolute la posición de una caja se establece de forma

absoluta respecto de su elemento contenedor y el resto de elementos de la página ignoran la nueva posición del elemento.

SECCIÓN 4. FLOTAR Y POSICIONAR

position

- absolute

div { border: 2px solid #CCC; padding: 1em; margin: 1em 0 1em 4em; width: 300px; } <div> <img src="imagenes/imagen.png" alt="Imagen genérica" /> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus ullamcorper velit eu ipsum. Ut pellentesque, est in volutpat cursus, risus mi viverra augue, at pulvinar turpis leo sed orci. Donec ipsum. Curabitur felis dui, ultrices ut, sollicitudin vel, rutrum at, tellus.</p> </div>

SECCIÓN 4. FLOTAR Y POSICIONAR

position

- absolute

div img { position: absolute; top: 50px; left: 50px; } La imagen posicionada de forma absoluta no toma como referencia su elemento contenedor <div>, sino la ventana del navegador. Como ningún elemento contenedor está posicionado, la referencia es la ventana del navegador.

Como la imagen se posiciona de forma absoluta, el resto de elementos de la página se mueven para ocupar el lugar libre dejado por la imagen.

SECCIÓN 4. FLOTAR Y POSICIONAR

position

- absolute

div { border: 2px solid #CCC; padding: 1em; margin: 1em 0 1em 4em; width: 300px; position: relative; } div img { position: absolute; top: 50px; left: 50px; } La única propiedad añadida al <div> es position: relative por lo que el elemento contenedor se posiciona pero no se desplaza respecto de su posición original.

En este caso, como el elemento contenedor de la imagen está posicionado, se convierte en la referencia para el posicionamiento absoluto.

SECCIÓN 4. FLOTAR Y POSICIONAR

position

- absolute

En este caso, como el elemento contenedor de la imagen está posicionado, se convierte en la referencia para el posicionamiento.

SECCIÓN 4. FLOTAR Y POSICIONAR

En este caso, el valor del desplazamiento se aplica a partir del margen de la caja del elemento. position

- absolute

SECCIÓN 4. FLOTAR Y POSICIONAR

position

- fixed: es parecido al posicionamiento absoluto pero

posiciona con respecto a la ventana del navegador apareciendo en la misma posición aunque el usuario se desplace por la página con las barras de desplazamiento. Esta característica puede ser útil para crear encabezados o pies de página en páginas HTML preparadas para imprimir.

SECCIÓN 4. FLOTAR Y POSICIONAR

visibility: propiedad que controla si el elemento será visualizado según le asignes el valor visible o hidden. Aunque un elemento no sea visible, éste continúa ocupando su espacio en el flujo normal del documento al contrario de lo que ocurría con la propiedad display cuando se le asignaba el valor none.

SECCIÓN 4. FLOTAR Y POSICIONAR

overflow: controlar la forma en la que se visualizan los contenidos que sobresalen de sus elementos. Los valores de la propiedad overflow: • visible: el contenido no se corta y se muestra sobresaliendo la zona reservada para visualizar el elemento. Este es el comportamiento por defecto.

• hidden: el contenido sobrante se oculta y sólo se visualiza la parte del contenido que cabe dentro de la zona reservada para el elemento. • scroll: solamente se visualiza el contenido que cabe dentro de la zona reservada para el elemento, pero también se muestran barras de scroll que permiten visualizar el resto del contenido.

• auto: el comportamiento depende del navegador, aunque normalmente es el mismo que la propiedad scroll.

SECCIÓN 4. FLOTAR Y POSICIONAR

overflow

SECCIÓN 4. FLOTAR Y POSICIONAR

z-index: Permite controlar el orden en el que se presentan los elementos que quedan solapados por efecto de otras propiedades. z-index permite especificar el orden en el eje z de los elementos, estos es, el orden de apilamiento en capas del documento. Los elementos se apilan en el orden en que aparecen: el elemento situado más abajo en el flujo normal del documento quedará encima.

Si quieres que esta posición no sea tenida en cuenta, debes saber que los elementos con un valor mayor de la propiedad z-index son colocados encima de los que tienen un valor menor z-index, quedando estos últimos tapados por los primeros. Esta propiedad sólo se aplica a elementos que tengan la propiedad position con valores absolute o relative.

SECCIÓN 4. FLOTAR Y POSICIONAR

z-index: div { position: absolute; } #caja1 { z-index: 5; top: 1em; left: 8em;} #caja2 { z-index: 15; top: 5em; left: 5em;} #caja3 { z-index: 25; top: 2em; left: 2em;}

SECCIÓN 4. FLOTAR Y POSICIONAR

SECCIÓN 4. FLOTAR Y POSICIONAR

Liquid pages: ajustan su tamaño según la ventana del navegador. Fixed pages: ponen el contenido en un área de la página específica, independientemente de las dimensiones de la ventada del navegador. Elastic pages: tienen áreas que se hacen más grande o más pequeño cuando se cambia el tamaño del texto.

SECCIÓN 4. FLOTAR Y POSICIONAR

Liquid pages: ajustan su tamaño según la ventana del navegador. En este diseño de dos columnas, la anchura de cada div se ha especificado como un porcentaje del ancho de página disponible. La columna principal siempre será 70% de la anchura de la ventana, y la columna derecha llena 25% (el 5% restante se utiliza para el margen entre las columnas), independientemente del tamaño de la ventana .

SECCIÓN 4. FLOTAR Y POSICIONAR

Liquid pages: ajustan su tamaño según la ventana del navegador. La columna secundaria de la izquierda se establece en un ancho de píxel específico, y de la principal área de contenido se establece en automático y llena el espacio restante en la ventana (que también podría haber dejado sin especificar para el mismo resultado). Aunque esta disposición utiliza un ancho fijo para una columna, todavía se considera líquido debido a que el ancho de la página se basa en la anchura de la ventana del navegador.

SECCIÓN 4. FLOTAR Y POSICIONAR

Fixed pages: ponen el contenido en un área de la página específica, independientemente de las dimensiones de la ventada del navegador. Este enfoque se basa en los principios tradicionales de diseño gráfico: una cuadrícula constante y la relación de los elementos de la página.

Al configurar su página a un ancho específico, tienes que decidir un par de cosas: - un ancho de página, por lo general basado en resoluciones de monitor común. - La mayoría de las páginas web de ancho fijo como de este escrito están diseñados para encajar en una ventana del explorador de píxeles 800 × 600 .

- dónde se debe colocar en la ventana del navegador. Por defecto, se

queda en el borde izquierdo del navegador, con el espacio adicional a la derecha de la misma. Algunos diseñadores optan por centrar la página, dividiendo el espacio extra sobre los márgenes izquierdo y derecho, lo que puede hacer la mirada la página como si se llena mejor la ventana del navegador

SECCIÓN 4. FLOTAR Y POSICIONAR

Fixed pages: ponen el contenido en un área de la página específica, independientemente de las dimensiones de la ventada del navegador. Estos son dos diseños de ancho fijo. Ambos utilizan páginas de ancho fijo, pero la posición del contenido es diferente en la ventana del navegador .

SECCIÓN 4. FLOTAR Y POSICIONAR

Fixed pages: Una de las principales preocupaciones con el uso de diseños de ancho fijo es si la ventana del navegador del usuario no es tan amplia como la página, el contenido en el borde derecho de la página no será visible. Aunque es posible que desplazarse horizontalmente, no siempre puede ser evidente que hay más contenido que hay en el primer lugar.

Diseños de ancho fijo se crean mediante la especificación de valores de anchura en unidades de píxel. Por lo general, el contenido de la página entera se pone en un div (a menudo llamado " contenido ", "container ", " envoltorio " o " página") que puede ser ajustado a un ancho de píxel específico. Este div también puede estar centrado en la ventana del navegador. Los anchos de elementos de columna, y los márgenes de pares y relleno, también se especifican en píxeles.

SECCIÓN 4. FLOTAR Y POSICIONAR

Elastic pages: tienen áreas que se hacen más grande o más pequeño cuando se cambia el tamaño del texto. Si el usuario hace el texto más grande, la caja que lo contiene se expande proporcionalmente. Si el usuario hace el tamaño de texto muy pequeño , la caja que contiene encoge para caber.

El resultado es que las longitudes de línea (en términos de palabras o caracteres por línea) permanecen igual independientemente del tamaño del texto.

SECCIÓN 4. FLOTAR Y POSICIONAR

Elastic pages: tienen áreas que se hacen más grande o más pequeño cuando se cambia el tamaño del texto. La clave para los diseños elásticos es el em, una unidad de medida que se basa en el tamaño del texto.

T4. FLOTAR Y POSICIONAR SECCIÓN 4. Características avanzadas de CSS CSS3 incorpora mayor control sobre el estilo de los elementos de nuestra página web. La principal desventaja es que actualmente solo algunos navegadores dan soporte. Algunas novedades: • Transiciones • Transformaciones • Las rotaciones • Escalar un elemento • Trasladar un elemento

SECCIÓN 4. FLOTAR Y POSICIONAR

Transiciones Las transiciones permiten realizar cambios en los valores CSS de forma progresiva, aunque la transicion se puede indicar a cada una de las propiedades y se puede detallar, nosotros utilizaremos la forma abreviada, la aplicaremos a todas las propiedades hay una lista de elementos sobre los que se puede crear la transición, para ello basta con indicar

SECCIÓN 4. FLOTAR Y POSICIONAR

Transiciones En este ejemplo estamos indicando que la propiedad de transición a variar es el color del background y que se tome segundos en hacer progresivamente el cambio de color. Las transiciones de CSS3 pueden tomar estos valores: transition-property transition-duration transition-delay transition-timing- function

SECCIÓN 4. FLOTAR Y POSICIONAR

Transiciones LISTA DE VALORES QUE PUEDE TOMAR TRANSITION-PROPERTY

SECCIÓN 4. FLOTAR Y POSICIONAR

Transiciones Duración de la transición

SECCIÓN 4. FLOTAR Y POSICIONAR

Transiciones RETRASO EN LA TRANSICIÓN DE CSS3 Con la propiedad transition-delay podemos indicar un tiempo de espera antes de empezar a realizar la transición. Esta propiedad puede tomar tanto valores positivos como negativos. En el caso que le demos un valor negativo, lo que sucede es que la transición tiene lugar en el momento de accionar el evento, lo que empieza en el punto que habría empezado en caso de haberlo hecho en el tiempo indicado. Así, si indico un retraso de -3s y tengo una animación de 10s, en el momento de empezar no lo hará en el segundo 0, sino en el segundo 3.

En el caso de IE y Opera no aceptan valores comprendidos entre los -10ms y los 10ms.

SECCIÓN 4. FLOTAR Y POSICIONAR

Transformaciones Nos permiten girar, desplazar, aumentar e inclinar. } De las transformaciones de CSS3 en 2D, las más usadas son: •Rotate. Rotate te permite rotar un elemento dándole un ángulo de giro en grados. •Scale. Scale te permite escalar un elemento, toma valores positivos y negativos y se le pueden poner decimales.

•Translate. Translate nos permite trasladar un elemento a la vez en el eje de las X y de las Y, dándole las coordenadas iniciales y finales. Si no queremos que se aplique ninguna transformación, la propiedad será de none .ejemplo { transform:none; }

SECCIÓN 4. FLOTAR Y POSICIONAR

Transformaciones LAS ROTACIONES DE CSS3 Como hemos visto, la propiedad de transformación de CSS3 tiene muchas aplicaciones, una de ellas la de rotar un elemento. Se puede aplicar tanto a elemento inline como a elementos de bloque.

SECCIÓN 4. FLOTAR Y POSICIONAR

Transformaciones Escalar un elemento

SECCIÓN 4. FLOTAR Y POSICIONAR

Transformaciones

---
