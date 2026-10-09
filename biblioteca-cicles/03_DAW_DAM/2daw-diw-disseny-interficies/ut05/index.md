---
layout: default
title: "UT5 — BOOTSTRAP — Disseny d'Interfícies Web | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT5 Completa"
prev_url: "../ut04/ut04actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT4"
next_url: "../ut05/ut0501.html"
next_label: "5.1 DIW INTRODUCCIÓN A BOOTSTRAP5 ➡️"
---

# 📘 UT5 — BOOTSTRAP (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**5.1 DIW INTRODUCCIÓN A BOOTSTRAP5**](#ut0501) (o [obrir en pàgina individual ➡️](./ut0501.md) )
> - [**5.2 PROPIEDAD FLEX DE BOOTSTRAP5**](#ut0502) (o [obrir en pàgina individual ➡️](./ut0502.md) )
> - [**5.3 FICHERO INDEX_EJ6**](#ut0503) (o [obrir en pàgina individual ➡️](./ut0503.md) )
> - [**5.4 FICHERO BASE DISEÑO TARJETAS BOOTSTRAP5**](#ut0504) (o [obrir en pàgina individual ➡️](./ut0504.md) )
> - [**✍️ Activitats pràctiques UT5**](#ut05actividades) (o [obrir en pàgina individual ➡️](./ut05actividades.md) )

---

## 5.1 DIW INTRODUCCIÓN A BOOTSTRAP5

> **📌 🏷️ Apunt de la Unitat**
> #### **SECCIÓN 1: INTRODUCCIÓN A BOOTSTRAP**

> **📌 🏷️ Apunt de la Unitat**
> #### **SECCIÓN 2: FLEXBOX CON CSS Y CON BOOTSTRAP**

> **📌 🏷️ Apunt de la Unitat**
> ##### **TEORÍA BOOTSTRAP5**

> **📌 🏷️ Apunt de la Unitat**
> #### **SECCIÓN 3: DISEÑO CON TARJETAS (CARDS) EN BOOTSTRAP5**

📎 **Material de laboratori (DIW VÍDEO BOOTSTRAP5 DISEÑO CON TARJETAS):** `Video_Bootrstrap5_DisenyCards_UD4_Sec3.mp4`

> **📌 🏷️ Apunt de la Unitat**
> #### **SECCIÓN 4: DISEÑO WEB CON VARIOS ELEMENTOS BOOTSTRAP5**

---

### UNIDAD 3: BOOTSTRAP 5

SECCIÓN 1: INTRODUCCIÓN A BOOTSTRAP 5 ¿Qué es Bootstrap? Bootstrap es un framework de CSS y JavaScript que nos permite trabajar para crear diseños “responsive”. Un framework no es nada más que un entorno de trabajo que nos permite trabajar en este caso, sobre CSS y JavaScript, siguiendo unas reglas o patrones que nos permiten conseguir unos diseños determinados y muy importante, siempre “responsive”.

Cuando decimos “responsive” nos referimos a la capacidad que tiene un diseño o sitio web a adaptarse a los diferentes tamaños de los dispositivos que utilizamos en nuestro día a día, bien sea un smartphone, una tableta o la pantalla de un ordenador portátil o de sobremesa.

Si visitamos un sitio web “responsive” podemos apreciar al modificar el tamaño de la pantalla, como se va adaptando y se va modificando el diseño a esta nueva resolución de pantalla. Por ejemplo, si visitamos la url: https://www.frontendmentor.io/ usando el navegador Google Chrome y pulsáis F12 primero y después pulsáis sobre el icono mostrado a continuación y sombreado en amarillo

Podéis apreciar como al cambiar el tamaño de la pantalla, el diseño se modifica en el modo en cómo se distribuyen los diferentes elementos del diseño web. Por ejemplo, se aprecia que cuando se hace pequeña la pantalla, el elemento que compone el menú de navegación desaparece convirtiéndose en un menú desplegable. Es decir

Este concepto que trata “cómo cambia” el diseño en función del tamaño de la pantalla es debido a lo que se conoce en Bootstrap como breakpoints y es el primer concepto que vamos a tratar aquí. Breakpoints Los breakpoints hacen referencia a los puntos de interrupción dependiendo del tamaño del dispositivo que esté visitando nuestro sitio web.

Bootstrap define estos breakpoints como vemos a continuación

En esta tabla lo que debe quedar claro es que estas medidas en pixels, indica los puntos donde Bootstrap permite realizar modificaciones en el diseño usando sus clases determinadas. Ejercicio rápido: En base a la url que hemos visto anteriormente: https://www.frontendmentor.io/, y en base a estos breakpoints vistos en la anterior tabla: 576, 768, 992, 1200 y 1400 pixels, podrás apreciar si aumentas o disminuyes el tamaño que en 768 pixels se producen cambios en el diseño web. Eso es debido a que se produce un cambio de configuración en el breakpoint 768px.

También avanzar que, para intervenir en el diseño en cada uno de estos breakpoint, como se ve en la columna central de la imagen anterior, se utilizan unas clases (sm, md, lg, etc) del mismo modo como hacemos en CSS, que luego veremos cómo utilizar. Contenedores Como ya avanzábamos antes, las clases se utilizan y son fundamentales a la hora de utilizar Bootstrap.

Un contenedor es el “padre” de todos los elementos de nuestra página web. Es una etiqueta que, como regla general, va a contener todas las otras etiquetas del contenido de nuestra página. En Bootstrap5 tenemos dos clases container: .container y .container-fluid.

- La clase “container” se comporta en función de los breakpoints de la siguiente

manera

Es decir, esta clase “container” aplicada en un elemento contenedor, como podría ser un elemento div o main, con tamaño de pantalla menores de 576px ocupará el 100% de la anchura(width) de la pantalla y conforme vaya creciendo en tamaño el tamaño de la pantalla, ya se irá adaptando a diferentes medidas: 540, 720, 960 pixels, etc.

Ejercicio rápido: Comprueba creando una clase container como en el ejemplo siguiente, que se cumplen las medidas vistas en la tabla anterior respecto al elemento con clase container

```html
<div class="container">
    <h1>unitat4: bootstrap5</h1>
    </div>
```

Aparte de las dos clases antes citadas, jugando con los prefijos de las clases de los breakpoints, se muestran a continuación como se pueden crear contenedores “responsive” que ocupan el 100% del ancho de la pantalla hasta que alcanzan a un determinado breakpoint.

```html
<div class="container-sm">100% de anchura hasta llegar al small breakpoint</div>
<div class="container-md">100% de anchura hasta llegar al medium breakpoint</div>
<div class="container-lg">100% de anchura hasta llegar al large breakpoint</div>
<div class="container-xl">100% de anchura hasta llegar al extra large breakpoint</div>
<div class="container-xxl">100% de anchura hasta llegar al extra extra large
```

breakpoint</div>

Grid Otro elemento muy importante en Bootstrap es como organizar una cuadrícula o grid, que nos permite crear todo tipo de layouts, con diferentes tamaños y formas gracias al sistema de las doce columnas basado en Flexbox. Este sistema de las doce columnas especifica que se puede crear un grid partiendo de las siguientes clases

Es decir, partiendo del elemento body y container, podemos crear una grid o cuadrícula, usando la clase row (fila) y dentro de la clase row, usamos la clase col, que con el sistema de las doce columnas podemos crear cajas que ocupen desde un tamaño de 12 columnas convirtiéndose en una columna de tamaño 12 columnas o bien usar diferentes tamaños, según nos interese.

Es decir, si dentro de cada row represente que tenemos 12 columnas, si usamos una columna de tamaño 4, significa que ocupa 4 de 12 columnas y podremos tener 3 columnas en una fila de tamaño 4. Podréis comprobar que el tamaño de la columna se especifica añadiendo a la clase “col” el tamaño que queremos que ocupe el elemento. Es decir, si queremos que ocupe el tamaño de 1 columna, se pondría col-1, y así sucesivamente para todas las columnas.

Viendo un ejemplo gráfico como el siguiente en el que tenemos un grid con varias filas con diferentes tamaños de columna

Tendríamos la siguiente configuración en nuestro fichero html.

```html
<div class="container">
```

```html
<div class="row">
```

```html
<div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
                <div class="col-1 border">1</div>
            </div>
```

```html
<div class="row">
```

```html
<div class="col-4 border">4</div>
            <div class="col-4 border">4</div>
            <div class="col-4 border">4</div>
```

</div>

```html
<div class="row">
```

```html
<div class="col-3 border">3</div>
```

```html
<div class="col-3 border">3</div>
            <div class="col-3 border">3</div>
            <div class="col-3 border">3</div>
            <div class="col-12 border">12</div>
```

</div>

</div>

Como se ve en la configuración, hemos añadido una nueva clase, border, que le da a cada elemento de la cuadricula el borde que se ve en la imagen. Es decir, se pueden añadir clases para conseguir el diseño adecuado, como se puede hacer en CSS. Es por ello, que jugando con la clase columna (.col) se pueden añadir para hacer un grid “responsive” los 6 breakpoints por defecto, que son como hemos visto antes, los siguientes

• Extra small (xs) • Small (sm) • Medium (md) • Large (lg) • Extra large (xl) • Extra extra large (xxl) Quedando del siguiente modo

A estas clases, solamente faltaría añadir el tamaño de columna para especificar en cada breakpoint cuantas columnas va a ocupar. Un ejemplo podría ser el siguiente

```html
<div class="container">
```

```html
<div class="row">
```

```html
<div class="col-12 col-sm-6 col-md-4 border">3</div>
            <div class="col-12 col-sm-6 col-md-4 border">3</div>
            <div class="col-12 col-sm-6 col-md-4 border">3</div>
            <div class="col-12 col-sm-6 col-md-12 border">3</div>
```

</div>

</div>

Fijaros que la primera clase, para tamaño menor de 575 no tiene prefijo el breakpoint. Viendo como ejemplo la primera línea de código

```html
<div class="col-12 col-sm-6 col-md-4 border">3</div>
```

Indica que si el tamaño de la pantalla es menor de 576 pixels ocupará la columna un tamaño de 12 columnas. Si se encuentra entre 576 y 768 pixels, la columna ocupará 6 columnas. Si se encuentra entre 768 y 992, cada columna ocupará tamaño 4 y para el resto de breakpoints, si no indica nada, se quedará con el valor superior indicado.

El resultado tomando como referencia un monitor de 1366 pixels de anchura quedaría del siguiente modo

A medida que vamos haciendo la resolución más pequeña, al unir diferentes clases irá adaptando de manera “responsive” el tamaño de las cuadrículas. En la medida más baja, menor de 576 pixels, podrás comprobar que el layout sería como te muestro a continuación

Ocupando cada elemento de la cuadrícula un tamaño de 12 columnas. Ejercicio rápido: Comprueba como se va adaptando la cuadrícula y como organiza las columnas a medida que la resolución de la pantalla va disminuyendo y confirma si se cumple lo indicado. También es importante indicar, que se pueden anidar elementos row dentro de otro elemento row, como podemos ver a continuación, creando ya un grid con diferentes elementos y diferentes formas.

Por ejemplo, aquí tenemos 1 primera fila, con dos columnas de tamaño 9 y 3, y dentro de la columna de 9, tenemos otra fila con una columna de 8 y otra de 4. Ese tamaño que indico es para medidas por encima de los 900 pixeles. Después, al disminuir el tamaño de pantalla, ya va adaptándose a filas con columnas de tamaño 12. Mirad el ejemplo

Ejercicio rápido: Construye la grid del último ejemplo paso a paso, construyendo primero las dos columnas de 9 y 3, y después, incluyendo dentro de la de 9, las dos columnas de 8 y 4. Ejercicio rápido: Comprueba como se va adaptando la cuadrícula y como organiza las columnas a medida que la resolución de la pantalla va disminuyendo y confirma si se cumple lo indicado.

Referencias utilizadas: - https://getbootstrap.com/docs/5.1 - W3schools: Bootstrap5: https://www.w3schools.com/bootstrap5/

---

## 5.2 PROPIEDAD FLEX DE BOOTSTRAP5

### UNIDAD 4: BOOTSTRAP 5

SECCIÓN 2: FLEXBOX ¿Qué es Flexbox? Flexbox nos permite posicionar en CSS los objetos de una manera muy cómoda. Mediante Bootstrap5, visitando el sitio web getbootstrap5.com, concretamente a Utilities – Flex, podremos ver como se pueden distribuir los elementos de muchas maneras dentro del contenedor.

Si partimos del documento html index_ej6.html que adjunto en Aules, podemos analizar las diferentes clases utilizadas en el elemento main con clase container: Primero hay que mencionar que si usamos en un container la propiedad d-flex convertimos los elementos hijo en elementos flex.

Si a continuación le añadimos las siguientes propiedades

<main class="container d-flex justify-conter-center align-items-center">

d-flex: convierte los elementos hijo en elementos flex. - justify-content-center: posiciona los elementos en fila a lo largo del eje de las x. - align-items-center: posiciona los elementos en fila a lo largo del eje de las y.

Respecto a la propiedad justify-content mencionar que, si fuese un elemento columna lo que estuviéramos manejando, jugaríamos con la posición respecto al eje Y. Y el align-items manejaría respecto a una columna el eje de las X. Hay que tener en cuenta que para que esta utilidad se tenga en cuenta, debe tener el elemento container una altura especificada. Para ello vamos a Utilitites – sizing en getbootstrap.com que tiene la posibilidad de configurar la altura en relación al viewport, y podemos decirle que ocupe el 100% del viewport de la siguiente manera

vw-100: referente a la anchura. (width) - vh-100: referente a la altura. (height) Como queremos configurar la altura, introduciremos vh-100 al elemento container, quedando el elemento main

<main class="container d-flex justify-conter-center align-items-center vh- 100">

Y el resultado obtenido sería el siguiente

Cabe destacar que cuando la pantalla se hace más pequeña y pensando en dispositivos móviles, debido al vh-100, se pierde parte del contenido del cuadrado verde, como se puede visualizar a continuación

Para solucionar este problema, se puede usar media-queries de CSS que nos permite aplicar cierta clase a partir de unas dimensiones de pantalla determinadas

```html
@media (min-width: 992px) {
```

.alto-100 {

height: 100vh; }

}

De este modo, se aplicará la clase nueva que hemos creado, alto-100, a partir de una anchura de 992px en adelante la altura de 100vh. Y cuando se hace más estrecha la pantalla, desaparece el 100vh y se visualiza todo el contenido.

Resumen gráfico de lo explicado

FILA

ALIGN-ITEMS

JUSTIFY CONTENT

COLUMNA

JUSTIFY CONTENT

ALIGN-ITEMS Referencias utilizadas: - https://getbootstrap.com/docs/5.1 - W3schools: Bootstrap5: https://www.w3schools.com/bootstrap5/ - https://www.w3schools.com/css/css3_mediaqueries_ex.asp

---

## 5.3 FICHERO INDEX_EJ6

FICHERO EN EL QUE ME HE BASADO PARA EL PDF DE TEORIA DE FLEXBOX EN BOOTSTRAP5.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap5 Flexbox</title>
    <link
```

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>

```html
<body>
```

<main class="container">

```html
<div class="row">
```

<!-- columna esquerra-->

```html
<div class="col-12 col-lg-9">
                <div class="row">
```

```html
<div class="col12 col-lg-8 bg-success">
```

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?</p>

</div>

```html
<div class="col12 col-lg-4 bg-primary">
```

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?</p>

</div>

```html
<div class="col12 col-lg-4 bg-warning">
```

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?</p>

</div>

```html
<div class="col12 col-lg-8 bg-danger">
```

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?</p>

</div>

</div>

</div>

<!-- columna dreta-->

```html
<div class="col-12 col-lg-3 bg-secondary">
```

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?</p>

</div>

</div>

</main> </body> </html>

---

## 5.4 FICHERO BASE DISEÑO TARJETAS BOOTSTRAP5

ADJUNTO EL FICHERO HTML EN EL QUE OS PODÉIS BASAR PARA HACER EL DISEÑO QUE HE PLASMADO EN EL VIDEO DE LA SECCIÓN3.

columna esquerra

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?
columna dreta

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quidem deserunt soluta nesciunt aliquam, similique blanditiis aspernatur fugit modi voluptas quos molestias quo labore optio quis voluptate delectus facilis. Architecto vero explicabo delectus laboriosam vel corrupti nesciunt voluptatum, aperiam voluptate?

---

## ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — DIW Actividad 1 Sección 1 UD4**
> UNIDAD 3: BOOTSTRAP 5
>
> SECCIÓN 1: INTRODUCCIÓN A BOOTSTRAP
>
> Actividad 1
>
> Objetivos
>
> Trabajar y asentar los conceptos abordados en esta primera sección referentes a la clase container, los breakpoints y el grid de Bootrstrap.
>
> Temporalización
>
> La duración de esta actividad está prevista en 1 hora.
>
> Ejercicio 1: Elaborar un grid en Bootstrap5 como el que muestro a continuación.
>
> Este grid, es el mismo que el utilizado en el siguiente diseño web.
>
> No olvidéis que debéis de subir el trabajo a Aules en formato HTML con vuestro nombre y apellido.
>
> Gracias

> **✍️ Activitat Pràctica 5.2 — DIW ACTIVIDAD 1 SECCIÓN 2 UNIDAD 4: TRABAJANDO FLEXBOX CON CSS**
> ### 📄 estilos_ej1_ud4_sec2.css
>
> ```css
> html {
>
>     font-size: 62.5%;
>
> }
>
> body {
>
>     margin: 0;
>
>     padding: 0;
>
>     font-family: Verdana, serif;
>
> }
>
> header {
>
>  padding:4rem;
>
>  background:#333334;
>
>  color:#FFFFFF;
>
>  font-size: 3rem;
>
>  font-weight: bold;
>
>
>
> }
>
> nav {
>
>
>
>     background-color: #CCC;
>
>
>
> }
>
> nav a {
>
>     color: #555;
>
>     text-decoration: none;
>
>     padding: 1.5rem;
>
>  }
>
>  nav a:hover {
>
>      background:#555;
>
>      color: #CCCCCC;
>
>  }
> ```
>
> ### 📄 DIW_Act_1_UD4_Seccion2.docx
>
> UNIDAD 4: BOOTSTRAP 5
>
> SECCIÓN 2: FLEXBOX
>
> TRABAJANDO LA PROPIEDAD FLEXBOX DE CSS.
>
> Crea la siguiente web usando cajas de tipo flexbox
>
> En todas ellas, partimos del siguiente diseño HTML
>
> ```html
> <body>
> ```
>
> ```html
> <header> Flexbox - Alineado a la izquierda    </header>
> ```
>
> <nav>
>
> <a href="#"> Enlace 1</a>
>
> <a href="#"> Enlace 2</a>
>
> <a href="#"> Enlace 3</a>
>
> <a href="#"> Enlace 4</a>
>
> </nav>
>
> </body>
>
> 1.
>
> 2.
>
> 3.
>
> 4.
>
> 5.
>
> 6.
>
> 7.
>
> Entrega
>
> Entregad en Aules los ejercicios 2, 6 y 7 de esta actividad.
>
> Para entregarlo indicadlo del siguiente modo. Por ejemplo, si tenéis que enviar el ejercicio 2 sería: Act1_ej2_S2_UD4_Nombre_Apellido.css.
>
> Gracias

> **✍️ Activitat Pràctica 5.3 — DIW ACTIVIDAD 2 SECCIÓN 2 UNIDAD 4: TRABAJANDO FLEXBOX CON CSS**
> UNIDAD 4: BOOTSTRAP 5
>
> SECCIÓN 2: FLEXBOX
>
> TRABAJANDO LA PROPIEDAD FLEXBOX DE CSS.
>
> Crea la siguiente web usando cajas de tipo flexbox
>
> En todas ellas, partimos del siguiente diseño HTML
>
> ```html
> <body>
> ```
>
> ```html
> <header>
> ```
>
> FlexBox - Catálogo de imágenes con imágenes espaciadas
>
> </header>
>
> <section>
>
> <article>
>
> <img src="/images/image-daniel.jpg" alt="foto daniel">
>
> <img src="/images/image-jeanette.jpg" alt="foto jean">
>
> <img src="/images/image-jonathan.jpg" alt="foto john">
>
> <img src="/images/image-kira.jpg" alt="foto kira">
>
> <img src="/images/image-patrick.jpg" alt="foto pat">
>
> </article>
>
> </section>
>
> </body>
>
> </html>
>
> 1.
>
> 2.
>
> 3.
>
> 4.
>
> 5.
>
> 6.
>
> Entrega
>
> Entregad en Aules todos los ejercicios añadiendo en este mismo ejercicio que has añadido para conseguir realizar bien el ejercicio.
>
> Para entregarlo indicadlo del siguiente modo. Por ejemplo, si tenéis que enviar el ejercicio 2 sería: Act2_S2_UD4_Nombre_Apellido.css.
>
> Gracias

> **✍️ Activitat Pràctica 5.4 — DISEÑO WEB UTILIZANDO DIFERENTES ELEMENTOS BOOTSTRAP5**
> EN ESTA TAREA SE PRETENDE QUE TRABAJÉIS ESTAS NAVIDADES LA MAYORÍA DE ELEMENTOS QUE HEMOS VISTO HASTA AHORA DE BOOTSTRAP5 Y QUE RECORDÉIS UNIDADES ANTERIORES.
>
> PODÉIS USAR EL EJEMPLO QUE OS PLANTEÉ A PRINCIPIO DE CURSO DE LA EMPRESA **BICISVAL**, O SI QUERÉIS, PODÉIS TRABAJAR **VUESTRO PROPIO PROYECTO** Y ASÍ, QUE OS PUEDA SERVIR PARA EL MÓDULO DE PROYECTO QUE DEBERÉIS DE PRESENTAR A FINAL DE CURSO. AMBAS OPCIONES SON BIEN RECIBIDAS.
>
> LOS ELEMENTOS QUE DEBE TENER SON
>
> 1. MENU DE NAVEGACIÓN (COMPONENTS-NAVBAR)
>
> 2. FONDO DE IMAGEN ( CONTENT-IMAGES)
>
> 3. UN CARRUSEL (COMPONENTS- CARROUSEL)
>
> 4. TRES O MÁS TARJETAS (COMPONENTS- CARD)
>
> 5. 1 FOOTER
>
> ADEMÁS DE TRABAJAR CON BOOTSTRAP5, SE VALORARÁ POSITIVAMENTE EL EJERCICIO SI AÑADÍS ELEMENTOS CSS QUE OS PERMITAN HACER MÁS "PERSONAL" Y ÚNICO VUESTRO DISEÑO.
>
> TAMBIÉN SE VALORARÁ EL HECHO DE USAR ELEMENTOS HTML5 QUE CONVIERTAN EL DISEÑO WEB LO MÁS ACCESIBLE POSIBLE. ES DECIR, NO USAR TODO DIVs SINO TAMBIÉN UTILIZAR HEADER, FOOTER, MAIN, ARTICLE, SECTIONS, ETC.
>
> GRACIAS

> **✍️ Activitat Pràctica 5.5 — DIW: ACTIVIDAD 2 DE DISEÑO WEB CON BOOTSTRAP5 Y CSS**
> EN ESTA OCASIÓN EL ALUMNO TOMARÁ DE REFERENCIA PARA HACER SU PROPIO INDEX.HTML LA SIGUIENTE PÁGINA DE YOUTUBE: https://www.youtube.com/watch?v=WBgw_Fgb4cY&t=959s.
>
> EL ALUMNO DEBERÁ TOMAR SUS PROPIAS IMÁGENES Y EDITARLAS CON EL PROGRAMA GIMP O SIMILARES Y REALIZAR SU PROPIA PÁGINA DE INICIO.
>
> LA ESTRUCTURA QUE HA REALIZADO EL USUARIO DE YOUTUBE SE DEBE MANTENER. LO QUE DEBE VARIAR ES EL CONTENIDO: IMÁGENES, ITEMS DE LA BARRA DE NAVEGACIÓN, COLORES UTILIZADOS, ETC.
>
> COMO EN LA ANTERIOR TAREA DE BOOTSTRAP, SE PUEDE USAR ESTA TAREA PARA IR DESARROLLANDO EL MÓDULO DE PROYECTO.
>
> ESTA TAREA VALDRÁ 1 PUNTO POR LO QUE EN ESTA EVALUACIÓN, EL ALUMNO PUEDE LLEGAR A SACAR UN 11.
>
> ÁNIMO Y APLICAROS ESTUDIANDO BIEN COMO HA HECHO LA PÁGINA EL USUARIO DE YOUTUBE TEMPLUNE, Y REALIZAR OTRA VOSOTROS TOMANDO ESTA DE REFERENCIA.

> **✍️ Activitat Pràctica 5.6 — DIW: ACTIVIDAD 3 DE DISEÑO WEB CON BOOTSTRAP5**
> LA ACTIVIDAD CONSISTE EN REALIZAR EL CHALLENGE DE FRONTENDMENTOR
>
> https://www.frontendmentor.io/solutions/nft-preview-TUVx7JPTm
>
> SE PUEDE REALIZAR MEDIANTE BOOTSTRAP5 O EN CSS3.

> **✍️ Activitat Pràctica 5.7 — DIW: ACTIVIDAD 4 DE DISEÑO WEB CON BOOTSTRAP5**
> LA ACTIVIDAD CONSISTE EN REALIZAR EL CHALLENGE DE FRONTENDMENTOR
>
> https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62
>
> SE PUEDE REALIZAR MEDIANTE BOOTSTRAP5 O EN CSS3.
