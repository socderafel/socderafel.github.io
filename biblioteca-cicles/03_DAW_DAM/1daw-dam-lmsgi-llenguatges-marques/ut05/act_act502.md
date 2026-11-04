---
layout: default
title: "Actividad Práctica ACT502 — es sobre asincronía y DOM dinámico — Lenguajes de Marcas y Sistemas de Gestión de Información"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Lenguajes de Marcas (LMSGI) · UT05"
prev_url: "./act_act501.html"
prev_label: "⬅️ ✏️ ACT501 Ejercicios de DOM"
next_url: "../ut06/index.html"
next_label: "UD6 ➡️"
---

# **Actividades sobre asincronía y DOM dinámico**

## **Bloque 1. Callback**

### **Actividad 1. Comprender la asincronía con setTimeout**

> **📌 Enunciado**
> 

> Observa el siguiente código y responde:

> **📌 JS**
> 

```html
console.log("Inicio");

setTimeout(() => {
console.log("Mensaje asíncrono");
}, 2000);

console.log("Fin");
```

Indica en qué orden se mostrarán los mensajes en consola.
Explica por qué "Fin" aparece antes que "Mensaje asíncrono".
Indica qué papel desempeña la función que está dentro de setTimeout().

<details markdown="1">

<summary>💡 Solució</summary>

1. Orden de salida
El resultado será:

```html
Inicio
Fin
Mensaje asíncrono
```

1. Explicación
JavaScript ejecuta primero las instrucciones síncronas.
La llamada a setTimeout() programa una tarea para ejecutarse más tarde, pero no bloquea el resto del programa. Por eso "Fin" se muestra antes.

1. Papel de la función
La función que está dentro de setTimeout() es un callback, es decir, una función que se ejecutará más adelante cuando se cumpla la condición indicada, en este caso haber esperado 2 segundos.

</details>

### **Actividad 2. Identificar callbacks**

> **📌 Enunciado**
> 

> Lee el siguiente código:

> **📌 JS**
> 

```html
function saludar(nombre) {
console.log("Hola, " + nombre);
}

function procesarUsuario(callback) {
const nombre = "Lucía";
callback(nombre);
}

procesarUsuario(saludar);
```

Responde:
¿Qué función actúa como callback?
¿Qué mostrará la consola?
Explica con tus palabras qué es un callback.

<details markdown="1">

<summary>💡 Solució</summary>

1. Función callback
La función saludar actúa como callback porque se pasa como argumento a procesarUsuario() para ejecutarse después.

1. Salida
La consola mostrará:
Hola, Lucía

1. Explicación
Un callback es una función que se pasa como parámetro a otra función para que esta la ejecute más tarde.

</details>

### **Actividad 3. Crear un callback propio**

> **📌 Enunciado**
> 

> Crea una función llamada **mostrarResultado** que reciba un texto y lo muestre por consola.

> Después, crea una función llamada **realizarTarea** que reciba un **callback** y, tras **1 segundo**, ejecute ese **callback** con el texto "**Tarea completada**".

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
function mostrarResultado(texto) {
console.log(texto);
}

function realizarTarea(callback) {
setTimeout(() => {
    callback("Tarea completada");
}, 1000);
}

realizarTarea(mostrarResultado);
```

Explicación:

- mostrarResultado recibe un mensaje y lo muestra.

- realizarTarea espera 1 segundo con setTimeout.

- cuando termina, ejecuta el callback.

</details>

## **Bloque 2. Promesas y async/await**

### **Actividad 4. Comprender una promesa**

> **📌 Enunciado**
> 

> **📌 JS**
> 

```html
Analiza este código:
const promesa = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("Datos cargados");
}, 1500);
});

promesa.then(resultado => {
console.log(resultado);
});
```

Responde:

- ¿Qué representa la variable promesa?

- ¿Qué método se usa cuando la operación sale bien?

- ¿Qué se mostrará en consola?

<details markdown="1">

<summary>💡 Solució</summary>

1. La **promesa** es un objeto de JavaScript que representa una operación asíncrona cuyo resultado estará disponible en el futuro.

1. Se utiliza **then ( )** para indicar qué hacer cuando la promesa se resuelve correctamente.

1. Tras 1,5 segundos, se mostrará: "Datos cargados".

</details>

### **Actividad 5. Gestionar errores con catch**

> **📌 Enunciado**
> 

> Completa el siguiente código para que, si la promesa falla, se muestre el mensaje de error:

> **📌 JS**
> 

```html
const promesa = new Promise((resolve, reject) => {
setTimeout(() => {
    reject("No se pudo cargar la información");
}, 1000);
});

promesa
.then(resultado => {
    console.log(resultado);
})
// Completa aquí
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
const promesa = new Promise((resolve, reject) => {
setTimeout(() => {
    reject("No se pudo cargar la información");
}, 1000);
});

promesa
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.log(error);
});
```

</details>

### **Actividad 6. Reescribir una promesa con async/await**

> **📌 Enunciado**
> 

> Observa este código:

> **📌 JS**
> 

```html
function obtenerMensaje() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Operación finalizada");
    }, 1000);
});
}

obtenerMensaje()
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.log(error);
});
```

Reescríbelo usando async/await.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
function obtenerMensaje() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Operación finalizada");
    }, 1000);
});
}

async function mostrarMensaje() {
try {
    const resultado = await obtenerMensaje();
    console.log(resultado);
} catch (error) {
    console.log(error);
}
}

mostrarMensaje();
```

</details>

## **Bloque 3. Uso de fetch**

### **Actividad 7. Primera petición GET**

> **📌 Enunciado**
> 

> Realiza una petición GET a la siguiente API: https://jsonplaceholder.typicode.com/users

> Debes:

> - usar **fetch ( )**.

> - convertir la respuesta a **JSON**.

> - mostrar en consola el **array** completo de usuarios.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error:", error);
});
```

</details>

### **Actividad 8. Mostrar solo nombres**

> **📌 Enunciado**
> 

> A partir de la misma API: https://jsonplaceholder.typicode.com/users

> Muestra en consola únicamente el nombre de cada usuario.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(usuario => {
    console.log(usuario.name);
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

</details>

### **Actividad 9. Comprobar errores con response.ok**

> **📌 Enunciado**
> 

> Realiza una petición a esta URL incorrecta: https://jsonplaceholder.typicode.com/userrrr

> Debes:

> - comprobar si la respuesta es correcta con **response.ok**.

> - lanzar un error si no lo es.

> - mostrar el mensaje en consola con **.catch ( )**.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/userrrr")
.then(response => {
    if (!response.ok) {
    throw new Error("La URL no es válida o el recurso no existe");
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error:", error.message);
});
```

Explicación
Aunque haya respuesta del servidor, puede no ser satisfactoria. Por eso hay que revisar **response.ok**.

</details>

### **Actividad 10. fetch con async/await**

> **📌 Enunciado**
> 

> Realiza una petición GET con async/await a: https://jsonplaceholder.typicode.com/user

> Muestra en consola la propiedad results.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
async function cargarPersonajes() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/user");

        if (!response.ok) {
        throw new Error("No se pudieron obtener los personajes");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

cargarPersonajes();
```

</details>

## **Bloque 4. Tratamiento de datos**

### **Actividad 11. Recorrer arrays de una API**

> **📌 Enunciado**
> 

> Usa la API de JsonPlaceHolder: https://jsonplaceholder.typicode.com/users

> Recorre el array de usuarios y muestra en consola:

> - nombre

> - email

> - Formato deseado:

>   - Leanne Graham - Sincere@april.biz

>   - Ervin Howell - Shanna@melissa.tv

>   - ...

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(users => {
    console.log(users.name + " - " + users.email);
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

</details>

### **Actividad 12. Acceder a propiedades concretas**

> **📌 Enunciado**
> 

> De cada usuario de la API anterior, muestra:

> - nombre

> - username

> - teléfono

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(users => {
    console.log("Nombre:", users.name);
    console.log("UserName:", users.username);
    console.log("Teléfono:", users.phone);
    console.log("-----");
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

</details>

### **Actividad 13. Filtrar resultados**

> **📌 Enunciado**
> 

> Muestra únicamente aquellos usuarios cuya ciudad sea **"South Christy"**.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const usuariosFiltrados = data.filter(user => user.address.city === "South Christy");

    usuariosFiltrados.forEach(user => {
    console.log(user.name + " - " + user.address.city);
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

Explicación

- **filter()**

  - Crea un nuevo array con los elementos que cumplen una condición

  - En este caso: usuarios cuya ciudad es "South Christy"

- **user.address.city**

  - Accede a un dato anidado dentro del JSON

- **forEach()**

  - Recorre el array filtrado para mostrar los resultados

</details>

### **Actividad 14. Filtrado combinado**

> **📌 Enunciado**
> 

> Muestra solo aquellos usuarios que cumplan las dos condiciones:

> - Que su ciudad sea "South Christy"

> - Que su empresa sea "Considine-Lockman"

> Formato de salida:

> - Nombre - Empresa - Ciudad

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 JS**
> 

```html
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const filtrados = data.filter(user =>
    user.address.city === "South Christy" &&
    user.company.name === "Considine-Lockman"
    );

    filtrados.forEach(user => {
    console.log(user.name + " - " + user.company.name + " - " + user.address.city);
    });
})
.catch(error => {
    console.error("Error:", error);
});
```

Explicación

- **filter()**

  - Permite aplicar varias condiciones a la vez

- **&& (AND lógico)**

  - El usuario debe cumplir ambas condiciones

- **Acceso a propiedades anidadas:**

  - user.address.city

  - user.company.name

- **forEach()**

  - Recorre el resultado filtrado

</details>

## **Bloque 5. Renderizado dinámico en el DOM**

### Actividad 15. Pintar una lista en el DOM

> **📌 Enunciado**
> 

> Crea una página con un contenedor vacío:

```html
<div id="contenedor"></div>
```

Haz una petición a: https://jsonplaceholder.typicode.com/users y muestra en el contenedor una lista con el nombre de cada usuario.

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Usuarios</title>
    </head>
    <body>
        <div id="contenedor"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const contenedor = document.getElementById("contenedor");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const ul = document.createElement("ul");

    data.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = usuario.name;
    ul.appendChild(li);
    });

    contenedor.appendChild(ul);
})
.catch(error => {
    contenedor.textContent = "Error al cargar los usuarios";
});
```

</details>

### Actividad 16. Crear tarjetas dinámicas

> **📌 Enunciado**
> 

> A partir de la API: https://jsonplaceholder.typicode.com/users

> Crea tarjetas en el DOM que muestren:

> - Nombre

> - Email

> - Ciudad

> Usa este contenedor:

```html
<div id="usuarios"></div>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ficha Usuarios</title>
    </head>
    <body>
        <div id="usuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const usuariosDiv = document.getElementById("usuarios");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(user => {
    const tarjeta = document.createElement("div");

    const nombre = document.createElement("h3");
    nombre.textContent = user.name;

    const email = document.createElement("p");
    email.textContent = "Email: " + user.email;

    const ciudad = document.createElement("p");
    ciudad.textContent = "Ciudad: " + user.address.city;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(email);
    tarjeta.appendChild(ciudad);

    usuariosDiv.appendChild(tarjeta);
    });
})
.catch(error => {
    usuariosDiv.textContent = "No se pudieron cargar los usuarios";
});
```

</details>

### Actividad 17. Limpiar y volver a renderizar

> **📌 Enunciado**
> 

> Crea una función llamada **mostrarUsuarios(lista)** que reciba un array de usuarios y los pinte en el contenedor.

> Antes de pintar los usuarios:

> - Debes vaciar el contenido anterior del contenedor con innerHTML = ""

> Después:

> - usa esa función para mostrar los usuarios obtenidos desde la API https://jsonplaceholder.typicode.com/users

> Usa este contenedor:

```html
<div id="usuarios"></div>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ficha Usuarios</title>
    </head>
    <body>
        <div id="usuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const contenedor = document.getElementById("usuarios");

function mostrarUsuarios(lista) {
// Limpiar contenido anterior
contenedor.innerHTML = "";

lista.forEach(user => {
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Ciudad: ${user.address.city}</p>
    `;

    contenedor.appendChild(tarjeta);
});
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    mostrarUsuarios(data);
})
.catch(error => {
    contenedor.textContent = "Error al cargar los datos";
});
```

Explicación

- Vaciar el contenedor evita que los resultados se acumulen si se vuelve a ejecutar la función.

</details>

### Actividad 18. Filtrar y renderizar

> **📌 Enunciado**
> 

> Modifica la actividad anterior para que solo se muestren en el DOM los usuarios cuya ciudad sea "South Christy".

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ficha Usuarios con filtro</title>
    </head>
    <body>
        <div id="usuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const contenedor = document.getElementById("usuarios");

function mostrarUsuarios(lista) {
contenedor.innerHTML = "";

lista.forEach(user => {
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Ciudad: ${user.address.city}</p>
    `;

    contenedor.appendChild(tarjeta);
});
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const filtrados = data.filter(user => user.address.city === "South Christy");

    mostrarUsuarios(filtrados);
})
.catch(error => {
    contenedor.textContent = "Error al cargar los datos";
});
```

</details>

### Actividad 19. Mostrar errores en pantalla

> **📌 Enunciado**
> 

> Realiza una petición a una URL incorrecta y muestra el error dentro del contenedor HTML, no solo en consola.
Contenedor:

```html
<div id="resultado"></div>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ficha Usuarios con filtro</title>
    </head>
    <body>
        <div id="usuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const resultado = document.getElementById("resultado");

// URL incorrecta (provoca error 404)
fetch("https://jsonplaceholder.typicode.com/userrrr")
.then(response => {
    if (!response.ok) {
    throw new Error("No se ha encontrado el recurso solicitado");
    }
    return response.json();
})
.then(data => {
    resultado.textContent = "Datos cargados correctamente";
})
.catch(error => {
    resultado.textContent = "Error: " + error.message;
});
```

</details>

### Actividad 20. Tabla dinámica desde API

> **📌 Enunciado**
> 

> Usa esta API: https://jsonplaceholder.typicode.com/users
Crea una tabla dinámica que muestre:

> - nombre

> - correo electrónico

> - ciudad
La tabla debe insertarse dentro del contenedor:

```html
<div id="tablaUsuarios"></div>
```

<details markdown="1">

<summary>💡 Solució</summary>

> **📌 HTML**
> 

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Tabla de usuarios</title>
    </head>
    <body>
        <div id="tablaUsuarios"></div>
        <script src="script.js"></script>
    </body>
</html>
```

> **📌 JS**
> 

```html
const tablaUsuarios = document.getElementById("tablaUsuarios");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const table = document.createElement("table");
    table.border = "1";

    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Ciudad</th>
    </tr>
    `;

    const tbody = document.createElement("tbody");

    data.forEach(usuario => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>
        <td>${usuario.address.city}</td>
    `;
    tbody.appendChild(fila);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tablaUsuarios.appendChild(table);
})
.catch(error => {
    tablaUsuarios.textContent = "Error al cargar la tabla";
});
```

</details>
