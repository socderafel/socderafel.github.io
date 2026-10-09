---
layout: default
title: "UT13 — Pentesting web — Hacking Ètic i Auditoria de Seguretat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "CE Ciberseguretat (CETI) · UT13 Completa"
prev_url: "../ut12/ut1201.html"
prev_label: "⬅️ 12.1 Introducción"
next_url: "../ut13/ut1301.html"
next_label: "13.1 Pentesting web ➡️"
---

# 📘 UT13 — Pentesting web (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**13.1 Pentesting web**](#ut1301) (o [obrir en pàgina individual ➡️](./ut1301.md) )
> - [**✍️ Activitats pràctiques UT13**](#ut13actividades) (o [obrir en pàgina individual ➡️](./ut13actividades.md) )

---

## 13.1 Pentesting web

ENUMERACIÓN WEB Pentesting web

Actualmente la mayor parte de las organizaciones emplean mecanismos de seguridad perimetral, controlan y limitan los puertos que exponen en Internet, por lo que no siempre será fácil encontrar servicios vulnerables expuestos. Sin embargo, en Internet resultará habitual encontrar servidores web con aplicaciones web potencialmente vulnerables. De este modo, una aplicación web puede servir como punto de entrada inicial de un ataque y así comprometer toda la red de la organización, haciendo totalmente inefectivas las medidas de protección perimetrales implementadas.

Este tipo de test de penetración se centra en evaluar la seguridad de una aplicación web. Al igual que las aplicaciones de escritorio, las aplicaciones web son programas que proporcionan una funcionalidad concreta a los usuarios que se conectan. En una aplicación web intervienen los siguientes elementos

- Un servidor web donde se aloja el código de una o varias páginas web
- Un protocolo (HTTP o HTTPS) que permita el acceso a los recursos alojados en el

servidor.

- Un cliente que acceda a la página o a los servicios. Puede ser un navegador web

o un cliente especializado

- La aplicación web propiamente dicha en la que se alojan las páginas y donde se

ejecuta el código.

- La base de datos
- Otros servidores

Los ataques web se basan en encontrar vulnerabilidades en alguno de los elementos anteriores o en las interacciones de los mismos, aunque podemos excluir al servidor web propiamente dicho, que entraría en el ámbito del pentesting de red.

Pentesting web

Un pentesting web, al igual que un pentesting de red, se puede realizar de manera "manual" o utilizando herramientas automáticas. Pentesting web manual Si se realiza de forma manual y con el fin de encontrar potenciales vulnerabilidades se debe

- analizar el comportamiento de la aplicación
- analizar la respuesta de la aplicación ante diferentes peticiones HTTP,
- analizar el código HTML,
- buscar archivos que puedan revelar información
- buscar páginas en la aplicación que no deberían estar accesibles.

Todos estos análisis se suelen realizar con ayuda de plugins de navegador o ciertas aplicaciones. Pentesting web manual El pentesting automático se lleva a cabo con un software que lanza contra un servidor una batería de pruebas basadas en unas métricas previamente definidas.

Estas pruebas sirven para detectar potenciales vulnerabilidades en la aplicación web y en el servidor, pero al igual que sucede con todas las herramientas automáticas, es necesario verificar de manera manual las vulnerabilidades identificadas para descartar los falsos positivos.

Es necesario extremar las precauciones cuando se ejecutan las herramientas automáticas en un entorno en producción, pues se pueden causar daños no intencionados en los sistemas. La elección entre una u otra forma de llevar a cabo el test de penetración vendrá determinada por el tiempo disponible y los requisitos del pentesting, pero será habitual emplear una combinación de ambas.

---

## ✍️ Activitats pràctiques UT13

> **✍️ Activitat Pràctica 13.1 — Pentesting web (Ejercicio 1)**
> Elementos a tener en cuenta en la realización del pentesting web
>
> 1. Servidores o servicios web
> 2. Navegadores
> 3. Autentificación de usuarios (clientes)
> 4. Protocolos de comunicación
> 5. Otros servicios o sevidores involucrados o relacionados
> 6. Análisis de bases de datos y su relación con la páginas web

> **✍️ Activitat Pràctica 13.2 — Ejercicio 2**
> Cuales son las características del "lenguaje bien formado"
>
> Por qué se deben cumplir las normas del lbf

> **✍️ Activitat Pràctica 13.3 — Ejercicio 3**
> Que modificaciones se tienen que hacer sobre el archivo de configuración de un servidor web (por ejemplo Apache) para que este se considere más seguro

> **✍️ Activitat Pràctica 13.4 — Ejercicio 4**
> Dados los siguientes métodos de intercambio
>
> - GET
> - HEAD
> - POST
> - PUT
> - PATCH
> - DELETE
> - CONNECT
> - OPTIONS
> - TRACE
> - REQUEST
>
> Qué diferencias hay entre ellos y cual se considera el método más seguro.
> Pon ejemplos aclaratórios

> **✍️ Activitat Pràctica 13.5 — Openwebinars**
> Visualiza los vídeos y haz un extracto
