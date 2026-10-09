---
layout: default
title: "UD7 — Refactorización, optimización y documentación · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD7 — Refactorización, optimización y documentación"
prev_url: "../ut06/ut0602.html"
prev_label: "⬅️ 6.2 Diagramas de estado"
next_url: "../ut07/ut0701.html"
next_label: "7.1 Refactorización ➡️"
---

# 📘 UD7 — Refactorización, optimización y documentación (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**7.1 Refactorización**](./ut0701.md)
- [**7.2 Documentación**](./ut0702.md)

---

# 7.1 Refactorización

---

Unidad 6: Refactorización Módulo: EDE

¿Qué es la refactorización? Técnica disciplinada para efectuar cambios en la estructura interna de un código sin cambiar su comportamiento externo.

¿Por qué refactorizar?

- Para mejorar su diseño
- Conforme se modifica, el software cambia su estructura.
- Eliminar código duplicado simplifica su mantenimiento.
- Para hacerlo más entendible

La legibilidad del código facilita su mantenimiento.

- Para encontrar errores

Al reorganizar un programa, se pueden apreciar con mayor facilidad las suposiciones que hayamos podido hacer.

- Para programar más rápido

Al mejorar el diseño del código, mejorar su legibilidad y reducir los errores que se cometen al programar, se mejora la productividad de los programadores.

¿Cuándo se debe refactorizar?

- Cuando se está escribiendo nuevo código

Al añadir nueva funcionalidad a un programa (o modificar su funcionalidad existente), puede resultar conveniente refactorizar

- para que éste resulte más fácil de entender, o
- para simplificar la implementación de las nuevas funcionalidades.
- Cuando se corrige un error

La mayor dificultad de la depuración de programas radica en que hemos de entender exactamente cómo funciona el programa para encontrar el error. Cualquier refactorización que mejore la calidad del código tendrá efectos positivos en la búsqueda del error.

- Cuando se revisa el código

Una de las actividades más productivas desde el punto de vista de la calidad del software es la realización de revisiones del código (recorridos e inspecciones).

¿Por qué es importante la refactorización? Cuando se corrige un error o se añade una nueva función, el valor actual de un programa aumenta. Sin embargo, para que un programa siga teniendo valor, debe ajustarse a nuevas necesidades (mantenerse), que puede que no sepamos prever con antelación. La refactorización, precisamente, facilita la adaptación del código a nuevas necesidades.

¿Qué síntomas indican que se debería refactorizar? El código es difícil de entender cuando: 1. Usa identificadores mal escogidos 2. Incluye fragmentos de códigos duplicados 3. Incluye lógica condicional compleja 4. Los métodos usan un número elevado de parámetros 5. Está dividido en módulos enormes 6.

Un método accede continuamente a los datos de un objeto de una clase diferente a la clase en la que está definida (posiblemente, el método debería pertenecer a la otra clase). 7. Etc.

Patrones de refactorización más comunes

### 1. Rename

Patrones de refactorización más comunes

### 2. Move

Patrones de refactorización más comunes

### 3. Extract Local Variable

Patrones de refactorización más comunes

### 4. Extract Constant

Patrones de refactorización más comunes

### 5. Convert Local Variable to Field

---

# 7.2 Documentación

U7.2 - Documentación 1º DAW

Introducción

- Cuando empezamos con cualquier lenguaje de programación o

Framework es muy importante que desde el principio controlemos la API.

- Application Program Interface.
- En el caso de Java, en la API vienen descritos todos los paquetes,

clases, métodos y atributos del lenguaje.

Introducción

- Un buen programador debe ser capaz de
- Saber leer e interpretar la documentación.
- Saber documentar sus aplicaciones correctamente.

Leer documentación

- https://docs.oracle.com/javase/8/docs/api/

Leer documentación

- https://docs.oracle.com/en/java/javase/22/docs/api/index.html

Leer documentación

- Independientemente del formato de la documentación, en la

documentación de una clase Java siempre encontraremos

- Paquete al que pertenece
- Nombre de la clase
- Objeto del que hereda (en caso que herede)
- Descripción de la clase
- Resumen de atributos (no privados) y método de la clase. OJO!! RESUMEN!!!

Suele coger solo la primera frase

- Detalle de los atributos
- Detalle de los métodos

Generar documentación

- ¿Qué es Javadoc?
- Herramienta de Oracle para la generación de documentación de APIs en

formato HTML a partir del código fuente Java.

- Es el estándar de la industria para documentar clases Java y es ampliamente

utilizado en el desarrollo de software.

- Genera la documentación automáticamente a partir del código.
- Esta documentación se puede visualizar mediante un navegador web.
- Para otros lenguajes no se utiliza Javadoc pero existen multitud de

herramientas específicas para automatizar la generación de código.

Generar documentación

- Toda la documentación que queramos que se tenga en cuenta para

Javadoc ha de empezar con /** y terminar con */

Generar documentación

- Toda la documentación que queramos que se tenga en cuenta para

Javadoc ha de empezar con /** y terminar con */

Generar documentación

- Vemos que dependiendo de donde estemos escribiendo la anotación,

el propio JavaDoc nos rellena con etiquetas especiales útiles para el tipo de bloque.

- @author: Autor de la clase o método.
- @version: Especifica la versión de la clase o método.
- @param: Describir parámetro del método
- @return: Explica qué devuelve el método
- @see: Referencia a otra clase
- @throws: Documenta excepciones que puede arrojar.
- @deprecated: Marca el método como obsoleto

Generar documentación

Generar documentación

- Una vez tenemos nuestro código correctamente comentado con las

etiquetas necesarias para Javadoc, podemos ver que esta documentación ya es accesible desde el propio código con la ayuda contextual propia de java que aparece cuando pulsamos ctrl+espacio.

- Dependiendo de la visibilidad de los atributos o métodos, esta

documentación será accesible o no.

Generar documentación

- Para generar la documentación en formato HTML y que así sea accesible a

modo de manual es muy sencillo.

- Boton derecho sobre el proyecto
- Exportar->Java->JavaDoc
- Seleccionamos de qué clases queremos crear la documentación (se deben excluir

tests, clases de prueba, etc)

- Finalizamos el asistente
- La documentación estará creada en el proyecto dentro de una carpeta

llamada doc

¿Dudas?

---
