---
layout: default
title: "Actividad Práctica ACT105 — 105 — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT01"
prev_url: "./act_act104.html"
prev_label: "⬅️ ✏️ ACT104 104"
next_url: "./act_act106.html"
next_label: "✏️ ACT106 106 ➡️"
---

# Actividad 105

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `105_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA1: Reconoce las características de lenguajes de marcas analizando e interpretando fragmentos de código.

>   - CA1. e)  Se han reconocido la necesidad y los ámbitos específicos de aplicación de un lenguaje de marcas de propósito general (5%)

Comparación rápida de los ámbitos:

- JSON: Muy popular para APIs web, ya que es más ligero y fácil de manejar por aplicaciones modernas. Es excelente cuando el intercambio de datos es frecuente y se prioriza la eficiencia.

- XML: Preferido para archivos de configuración y almacenamiento estructurado, especialmente en sistemas más complejos o en los que se necesita una mayor formalidad en la estructura de datos (como en documentos o sistemas empresariales).

Ambos lenguajes de propósito general permiten organizar y transportar datos de manera estructurada en diferentes entornos y aplicaciones.

## **Ejercicio 1**

Pasos a seguir:

1. Ves a la web de la AEMET

1. Despliega Datos abiertos

1. Clica sobre Plan RISP (Reutilización de la información del Sector Público)

1. Clica sobre Predicción horaria por municipios, 2 días

1. Selecciona la Provincia sobre el mapa.

1. Selecciona el municipio

1. Por defecto nos sitúa en la predicción para 7 días. Cambia a la pestaña de la predicción por horas.

1. Descargar XML de la predicción por horas de .....

Se nos solicita los fragmentos de información del documento XML en los que se observen los siguientes datos de la fecha actual:
•   Fecha, Orto y Ocaso
•   Temperatura por horas

## **Ejercicio 2**

Supongamos que una empresa está configurando un archivo para gestionar las preferencias de un software empresarial. El formato elegido para las configuraciones es XML:

> **📌 Xml**
> 

```html
<configuracion>
<usuario>
    <id>12345</id>
    <nombre>Juan Pérez</nombre>
    <correo>juan.perez@example.com</correo>
    <activo>true</activo>
</usuario>
<preferencias>
    <tema>oscuro</tema>
    <idioma>es</idioma>
</preferencias>
</configuracion>
```

Indica con base al anterior documento XML cuántas propiedades estamos almacenando de ese usuario y cuántas preferencias tiene el usuario establecidas para el entorno de la aplicación que va a ejecutar.

Para la próxima versión de la aplicación nos dicen que han añadido cinco propiedades más del usuario y otras tantas preferencias que el usuario puede establecer cuando esté utilizando la aplicación.

Amplia el documento XML anterior para que incorpore toda la información que ahora puede manejar la aplicación.

## **Ejercicio 3**

A continuación vemos la información que se está transmitiendo para cada vecino del sistema informático A al B.

> **📌 Json**
> 

```html
{
"resident": {
    "name": "Carlos García",
    "apartment": "A1",
    "phone": "+34 600 123 456",
    "email": "carlos.garcia@example.com",
    "isOwner": true,
    "hasParking": true,
    "balanceDue": 0,
    "lastPaymentDate": "2024-08-10",
    "notes": "Pago al día"
}
}
```

Imaginemos que podemos hacer clic sobre un listado de vecinos que se nos muestra en una página web. Cuando hagamos clic sobre un vecino en cuestión queremos obtener alguna indicación de si el vecino es moroso o no lo es.

Entonces, basándonos en el documento JSON anterior, ¿cuál sería la información esencial a transmitir (cuanta menos información se transmita, mejor) para asegurarnos de que una vez que se ha clicado sobre un vecino desde el navegador web del cliente, el servidor web nos va a hacer llegar la situación de morosidad de ese vecino.
