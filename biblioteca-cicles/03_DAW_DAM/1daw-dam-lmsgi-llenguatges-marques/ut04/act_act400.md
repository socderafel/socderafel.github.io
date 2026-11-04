---
layout: default
title: "Actividad Práctica ACT400 — Introducción a Javascript — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT04"
prev_url: "./ut0462.html"
prev_label: "⬅️ 4.6.2 Formato JSON"
next_url: "./act_act401.html"
next_label: "✏️ ACT401 es 01-05 ➡️"
---

# **Introducción a Javascript**

## **Instrucciones**

Tenemos 3 formas de introducir código javascript en mi página web.

### **Dentro de la etiqueta head**

> **📌 HTML**
> 

```html
<head>
<!-- ... -->
    <script>
        function holaMundo(){
            alert("Hola mundo");
        }
        holaMundo();
    </script>
</head>
```

### **Dentro de la etiqueta body**

Podemos ver que el código se ejecuta de forma secuencial.

> **📌 HTML**
> 

```html
<body>
    <h1>Benvingut al tema de Javascript</h1>
    <script>
        function holaMundo(){
            alert("Hola mundo");
        }
        holaMundo();
    </script>
    <h1>fins després!!</h1>
</body>
```

### **Dentro de un fichero_externo.js y haciendo referencia a él en el fichero .html**

**Recomendable esta opción para que**:

- Separamos, por un lado, el código html y, por otro lado, el código javascript; hace más fácil leer y mantener.

- Si nuestro navegador almacena los ficheros javascript en caché no será necesario que vuelva a buscarlos en el servidor web porque ya los tiene en local.

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Primer programa Java Script</title>
        <script src="prac01.js"></script>
    </head>
    <body>
        <script>intro();</script>
        <script>holaMundo();</script>
        <script>fin();</script>
    </body>
</html>
```
