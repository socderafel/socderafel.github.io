---
layout: default
title: "Actividad Práctica ACT404 — 404 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT04"
prev_url: "./act_act403.html"
prev_label: "⬅️ ✏️ ACT403 403"
next_url: "./act_act405.html"
next_label: "✏️ ACT405 405 ➡️"
---

# **Actividad 404**

> **📌 Entrega**
> 

> - La entrega será un **documento** que contenga la respuesta a cada uno de los ejercicios: las instrucciones SQL utilizadas y la salida obtenida en cada caso (puedes copiar las consultas y realizar capturas de pantalla).

> - El nombre del fichero debe ser `404_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta creación de usuarios.

> - La correcta asignación y revocación de privilegios.

> - La correcta utilización de los niveles de privilegio (global, base de datos, tabla y columna).

> - La correcta comprobación de los permisos mediante `SHOW GRANTS`.

> Esta actividad servirá para calificar:

> - RA2: Crea bases de datos definiendo su estructura y las características de sus elementos según el modelo relacional.

>   - CE2. g) Se han creado los usuarios y se les han asignado privilegios. (5%)

>   - CE2. h) Se han utilizado asistentes, herramientas gráficas y los lenguajes de definición y control de datos. (5%)

## **Lenguaje de Control de Datos (DCL)**

Para realizar esta actividad necesitarás la base de datos **futbol**. Puedes descargar el script que la crea en futbol.sql.

> **📌 Recuerda**
> 

> Recuerda que en MySQL un usuario se identifica mediante `usuario@host`, por ejemplo `'root'@'localhost'`.

Realiza los siguientes ejercicios en MySQL:

1. Crea un usuario `'tengopermisos'` y otórgale permisos para que pueda crear usuarios.

1. Conectado como `'tengopermisos'`, crea un nuevo usuario `'user1'`.

1. Conectado como `root`, otórgale permisos al usuario `'user1'` para que pueda consultar las tablas de las bases de datos.

1. Conectado como `root`, muestra los permisos que tiene el usuario `'user1'`.

1. Conectado como `'user1'`, muestra los permisos que posee y comprueba que son los mismos del orden anterior.

1. Conectado como `root`, otorga permiso de creación y borrado de tablas al usuario `'user1'` sobre la base de datos `jardinería`.

1. Conectado como `root`, crea un usuario de nombre `'creartablas'` que tenga permisos para crear, borrar y modificar tablas de la base de datos `fútbol`.

1. Conectado como `'creartablas'`, crea una tabla sencilla de al menos dos columnas. Las columnas se llamarán `estadio` y deberá tener un `nombre_estadio varchar(25)`, que será la *primary key*, y otro campo que será `ciudad varchar(25)` y que por defecto será `null`.

1. Conectado como `root`, crea un usuario de nombre `'accesoglobal'` que pueda realizar operaciones de selección e inserción sobre todas las tablas de todas las bases de datos.

1. Conectado como `'accesoglobal'`, añade una fila a la tabla `futbol.estadios`. Intenta borrar la fila creada.

1. Conectado como `root`, crea un usuario de nombre `'accesolocal'` que pueda seleccionar todas las tablas de la base de datos anterior.

1. Conéctate como `'accesolocal'` y comprueba que puedes seleccionar la fila `futbol.estadios.nombre_estadio`.

1. Conectado como `root`, crea un usuario de nombre `'accesolimitado'` que pueda realizar operaciones de inserción, actualización y selección sobre la primera columna de la tabla `futbol.estadios`.

1. Conéctate como `'accesolimitado'` y comprueba que tienes los permisos ejecutando las órdenes SQL `SELECT`, `UPDATE` e `INSERT`. Comprueba qué permisos tienes.

1. Conectado como `root`, revoca todos los permisos del usuario `'user1'`.

1. Conectado como `'user1'`, valida que no puedes realizar ninguna acción.

1. Conectado como `root`, revoca el permiso de modificar las tablas de la base de datos `fútbol` del usuario `'creartablas'`.

1. Conectado como `'creartablas'`, intenta incluir una nueva columna en la tabla `futbol.estadios`.
