---
layout: default
title: "Actividad Práctica ACT705 — 705 — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT07"
prev_url: "./act_act704.html"
prev_label: "⬅️ ✏️ ACT704 704"
next_url: "./act_act706.html"
next_label: "✏️ ACT706 706 ➡️"
---

# **Actividad 705**

> **📌 Entrega**
> 

> - La entrega será un **fichero `.sql`** con el script que resuelve todos los apartados de la actividad.

> - El nombre del fichero debe ser `705_NombreApellidos.sql`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La correcta definición de **eventos** (`CREATE EVENT`).

> - La correcta configuración del **calendario de ejecución** (`AT`, `EVERY`, `STARTS`, `ENDS`, `ON COMPLETION`).

> - El correcto uso de **`ALTER EVENT`** y **`DROP EVENT`**.

> - La consulta de los eventos creados (`SHOW EVENTS`, `information_schema.EVENTS`).

> - El resultado obtenido al ejecutar el script.

> Esta actividad servirá para calificar:

> - RA5: Desarrolla procedimientos almacenados evaluando y utilizando las sentencias del lenguaje incorporado en el sistema gestor de bases de datos.

>   - CA5. h) Se han definido acontecimientos y disparadores.

> **📌 Aviso**
> 

> Para que los eventos se ejecuten es necesario que el **planificador de eventos** esté activado: `SET GLOBAL event_scheduler = ON;`

## **Eventos**

Trabajaremos con la base de datos **`employees`** (datos de una empresa) que ya deberías tener importada en tu servidor MySQL, y sobre la base de datos **`CIRCO`**.

**Ejercicio 1.** Queremos registrar, **cada 1 minuto en el día de hoy y durante unos 10 minutos** desde el momento de creación del evento, qué usuarios están accediendo a la base de datos `employees`. Estos usuarios (sus nombres y equipos) deberán quedar registrados en una tabla de nombre `'historico_usuarios_hora'` en la que se guardará el nombre del usuario así como el día-hora-minuto en el que se produjo el registro de actividad.

- Crea **dos usuarios** y conéctate a la base de datos. Después haz que uno de ellos se desconecte de la base de datos.

- **Modifica el evento** y haz que el evento **no desaparezca** cuando termine el intervalo de ejecución.

- Modifica el evento para que se vuelva a ejecutar **en el minuto siguiente al actual** y comprueba que registra nuevamente a uno de los usuarios anteriores (que se vuelva a conectar).

> **📌 Pistas**
> 

> - Para saber qué usuarios están conectados: `SELECT DISTINCT user, host FROM information_schema.PROCESSLIST;`

> - El campo fecha-hora se puede guardar con `NOW()` o `SYSDATE()`.

**Ejercicio 2.** Haz que el **día 15 de Mayo del 2025 a las 23:15** se guarde una copia de los datos de la tabla `departments` en una tabla creada por ti previamente de nombre `dept_copia_temp`.

> **📌 Pista**
> 

> `AT '2025-05-15 23:15:00'`.

**Ejercicio 3.** Crea una tabla de nombre `empleados_numero_mensual` que guarde el número de empleados que tiene la empresa. Haz que se ejecute **una vez 4 días después** de que se cree el evento.

- Ejecuta la orden que muestre el **momento en que se va a ejecutar**.

- Modifica el evento para que se ejecute **desde el día de hoy hasta dentro de un año** y que lo haga **cada mes**.

- Ejecuta la orden que muestre el momento en que se va a ejecutar.

> **📌 Pista**
> 

> El *next execution* se puede consultar con `SELECT * FROM information_schema.EVENTS WHERE event_name = '...'\G` o con `SHOW EVENTS`.

**Ejercicio 4.** Haz que el **día 1 de Enero de cada año** se actualicen los salarios de los manager de cada departamento un **10%** (trabajan mucho :) que estén trabajando actualmente en la empresa. Esta actualización se debe producir **durante 5 años a partir del actual**.

- Cambia la hora del sistema para comprobar que se ejecuta el evento.

> **📌 Pistas**
> 

> - `EVERY 1 YEAR STARTS '2025-01-01 00:00:00' ENDS '2029-01-01 00:00:00'` (los años del ejemplo se deben adaptar al curso actual).

> - Los managers actuales de cada departamento están en la tabla `dept_manager` (empleados cuyo `to_date` es una fecha futura, por ejemplo `'9999-01-01'`).

**Ejercicio 5.** Realiza las siguientes consultas:

- Muestra **todos los eventos** creados.

- Muestra todos los eventos creados por el usuario **`root`**.

- **Borra uno de los eventos**, asegurándote de que exista.
