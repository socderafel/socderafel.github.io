---
layout: default
title: "Actividad Práctica ACT104 — 104 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT01"
prev_url: "./act_act103.html"
prev_label: "⬅️ ✏️ ACT103 103"
next_url: "./act_act105.html"
next_label: "✏️ ACT105 105 ➡️"
---

# Actividad 104

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `104_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA1: Reconoce las características de lenguajes de marcas analizando e interpretando fragmentos de código.

>   - CA1. d) Se han diferenciado sus ámbitos de aplicación. (5%)

## **Ejercicio 1**

A continuación se muestra el contenido de un archivo XML. **Transforma** esa información al formato **CSV**.

> **📌 Xml**
> 

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE cataleg>
<cataleg>
    <llibreid="bk101">
        <autor>Garcia, Frederic</autor>
        <titol>La formiga</titol>
        <preu>14.95</preu>
        <publicacio>2011-05-01</publicacio>
        <descripcio>En aquest llibre es descriuen amb detall les tasques diàries que fan les formigues</descripcio>
    </llibre>
    <llibreid="bk102">
        <autor>Puigdevall Garcés, Marcel</autor>
        <titol>Carns a la brasa</titol>
        <preu>5.95</preu>
        <publicacio>2012-10-01</publicacio>
        <descripcio>S'hi descriuen les bondats alimentàries de coure la carn a la brasa a més de truquets per incrementar-ne el gust</descripcio>
    </llibre>
    <llibreid="bk103">
        <autor>Bisbe, Bernat</autor>
        <titol>Diari d'un idiota</titol>
        <preu>14.5</preu>
        <publicacio>2012-07-30</publicacio>
        <descripcio>L'autor descriu en clau d'humor la vida de la gent actual, que descriu genèricament com a &quot;idiotes&quot;</descripcio>
    </llibre>
</cataleg>
```
