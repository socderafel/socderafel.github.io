[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT7 Completa](../ut7-bases-dades.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut07/ut07actividades.html)

[⬅️ Anterior: 7.12 Repaso global de acceso a datos](../ut07/ut0712.md) | [➡️ Següent: Retos de programación UT7](../ut07/ut07retos.md)

---

# Actividades UT07

## Bloque 7.0


> 💻 **Empaquetar actividades**
>
> Empaqueta las actividades, dentro de la carpeta **`ut07`**, en la carpeta **`/bloqueX`**.


### Actividad 01

Package: `A01_pedidos`

Desarrolla una clase **`Pedido`** que permita la gestión de pedidos en una base de datos orientada a objetos.

La tabla `pedidos` tiene las columnas `id`, `cliente`, `producto`, `cantidad`, `fecha`.

Implementa los métodos necesarios para:

- Crear un nuevo pedido para un cliente.
- Mostrar todos los pedidos de un cliente específico.
- Eliminar todos los pedidos de un cliente específico.

---

## Bloque 7.1

### Actividad 02

Package: `A02_posts`

Desarrolla una aplicación que permita gestionar los pedidos de una tienda.

La tabla `posts` tiene las columnas `id`, `usuario_id`, `titulo`, `contenido`, `fecha_publicacion`.

Implementa los métodos necesarios para:

- Registrar un nuevo posts.
- Mostrar los posts de un usuario específico.
- Eliminar todos los posts de un usuario específico.
- Cambiar la fecha de un post *(filtra por id)*.
- Mostrar todos los posts de la BBDD.

En el `main` de la clase `Test`, implementa un menú para que el usuario pueda ejecutar todas las funcionalidades anteriores.


<details markdown="1">
<summary><strong>☕ Ayuda menú</strong></summary>

```java
Scanner sc = new Scanner(System.in);
int opcion = 0;
PostsRepository postsDAO = new PostsRepository();

try (Connection con = DbConnect.getInstance().getConnection()) {
    do {
        System.out.println("\n MENÚ: ");
        System.out.println("1. Nuevo post");
        System.out.println("2. Mostrar posts de usuario");
        System.out.println("3. Eliminar posts usuario");
        System.out.println("4. Cambiar la fecha de un post");
        System.out.println("4. Mostrar todos los posts");
        System.out.println("0. Salir");
        System.out.print("Selecciona una opción: ");

        opcion = sc.nextInt();
        sc.nextLine(); // Limpiar buffer

        switch (opcion) {
            case 1:
                //Realizar acciones necesarias 
                break;
            case 2:
                //Realizar acciones necesarias
                System.out.println("Introduce el id de usuario:");
                int uid2 = sc.nextInt();

                postsDAO.listarPostsUsuario(uid2);
                break;
            case 3:
                //Realizar acciones necesarias
                break;
            case 4:
                //Realizar acciones necesarias 
                break;
            case 5:
                //Realizar acciones necesarias 
                break;
            case 0:
                System.out.println("Saliendo del sistema...");
                break;
            default:
                System.out.println("Opción inválida. Intenta de nuevo.");
        }
    } while (opcion != 0);
} catch (SQLException ex) {
        System.out.println("ERROR al conectar: " + ex.getMessage());
}
```

</details>


---

## Bloque 7.2

### Actividad 03

**Análisis de índices en una tabla**: Crea una aplicación que permita analizar los índices de una tabla en una base de datos relacional. Conéctate a la base de datos utilizando JDBC y muestra los índices asociados a la tabla `clientes`.

Operaciones:

- Mostrar los índices de la tabla.
- Comprobar si hay claves primarias o foráneas asociadas.

### Actividad 04

**`_04_GestionProductos`**: Supongamos que tienes una base de datos que almacena información sobre productos. La tabla `productos` tiene las siguientes columnas:

- `id`: Identificador único del producto (entero).
- `nombre`: Nombre del producto (cadena de texto).
- `precio`: Precio del producto (decimal).

Tu tarea es escribir un programa Java `_02_GestionProductos` que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **`mostrarProductosPorPagina()`**: mostrar una página de productos cada vez que el usuario lo solicite. Cada página debe contener 5 productos. Implementa las funciones para mover el cursor a la primera página, página siguiente, página anterior, última página y una página específica utilizando el método `absolute(int row)`.
2. **`buscarProductoPorNombre(String nombre)`**: permitir al usuario buscar un producto por su nombre. Utiliza el método `relative(int registros)` para desplazar el cursor hacia adelante o hacia atrás según la coincidencia del nombre.

---

## Bloque 7.3

### Actividad 05

**`_05_GestionEmpleados`**: Tenemos nuestra base de datos **`pr_tuNombre`** que almacena información sobre *empleados*. La tabla `empleados` tiene las siguientes columnas:

- `id`: identificador único del empleado (entero).
- `nombre`: nombre del empleado (cadena de texto).
- `salario`: salario del empleado (decimal).

Es escribir un programa Java `_01_GestionEmpleados` que realice las siguientes operaciones utilizando diferentes tipos de resultado y opciones de concurrencia:

1. **`listarEmpleados`**: mostrar en la consola todos los empleados y sus salarios.
2. **`incrementoSalarioAnual`**: incrementar el salario de todos los empleados en un 10%.
3. **`eliminarEmpleadosSalario`**: eliminar todos los empleados cuyo salario sea menor que 3000€.
4. **`actualizarSalarioEmpleado`**: actualiza el salario de un empleado filtrado por *nombre*.
5. **`eliminarEmpleadoId`**: eliminar un empleado filtrado por *id*.

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 06

**`_06_GestionVentas`**: Supongamos que tienes una base de datos que almacena información sobre ventas. La tabla `ventas` tiene las siguientes columnas:

- `id`: Identificador único de la venta (entero).
- `producto`: Nombre del producto vendido (cadena de texto).
- `cantidad`: Cantidad de productos vendidos (entero).
- `total`: Total de la venta (decimal).

Tu tarea es escribir un programa Java `_05_GestionVentas` que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **Calcular el total de ventas**: Muestra al usuario la suma del precio total de las ventas almacenadas en el sistema.
2. **Buscar ventas por producto**: Permite al usuario ingresar el nombre de un producto y devuelve las ventas de ese producto.
3. **Calcular el total de € ganados con un producto**: Permite al usuario ingresar el nombre de un producto y devuelve el precio total de las ventas de dicho producto.

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 07

**`_07_GestionLibros`**: Supongamos que tienes una base de datos que almacena información sobre libros. La tabla `libros` tiene las siguientes columnas:

- `id`: Identificador único del libro (entero).
- `titulo`: Título del libro (cadena de texto).
- `autor`: Nombre del autor del libro (cadena de texto).
- `anio_publicacion`: Año de publicación del libro (entero).

Tu tarea es escribir un programa Java que realice las siguientes operaciones utilizando los métodos proporcionados:

- **`buscarLibroPorAutor(String autor)`**: permite al usuario ingresar el nombre de un autor y muestra todos los libros escritos por ese autor.
- **`mostrarLibrosPorDecada(int decada)`**: permite al usuario ingresar una década y mostrar todos los libros publicados en esa década.


<details markdown="1">
<summary><strong>⚠️ Ayuda</strong></summary>

Sugerencia:

- Utiliza el método `preparedStatement(sql)` con una consulta en la que se listen los libros comprendidos en una década y ordenados de forma descendente por el `anio_publiacion`.
- Si el usuario me introduce la decada *1990*, la consulta SQL será: `SELECT * FROM libros WHERE anio_publicacion BETWEEN 1990 AND 1999 ORDER BY anio_publicacion DESC;`

</details>


> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

---

## Bloque 7.4

### Actividad 08

**`_08_GestionLibros`**: Supongamos que tienes una base de datos que almacena información sobre libros. La tabla `libros` tiene las siguientes columnas:

- `id`: Identificador único del libro (entero).
- `titulo`: Título del libro (cadena de texto).
- `autor`: Nombre del autor del libro (cadena de texto).
- `anio_publicacion`: Año de publicación del libro (entero).

Tu tarea es escribir un programa Java que realice las siguientes operaciones utilizando los métodos proporcionados:

- **`buscarLibroPorAutor(String autor)`**: permite al usuario ingresar el nombre de un autor y muestra todos los libros escritos por ese autor.
- **`mostrarLibrosPorDecada(int decada)`**: permite al usuario ingresar una década y mostrar todos los libros publicados en esa década.


<details markdown="1">
<summary><strong>⚠️ Ayuda</strong></summary>

Sugerencia:

- Utiliza el método `preparedStatement(sql)` con una consulta en la que se listen los libros comprendidos en una década y ordenados de forma descendente por el `anio_publiacion`.
- Si el usuario me introduce la decada *1990*, la consulta SQL será: `SELECT * FROM libros WHERE anio_publicacion BETWEEN 1990 AND 1999 ORDER BY anio_publicacion DESC;`

</details>


> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 09

**`_09_GestionEmpleados` (continuación)**: Continuando con el ejercicio de gestión de empleados, copia el programa `GestionEmpleados`, cambia el nombre a `_09_gestionEmpleados` y agrega algunas funcionalidades adicionales:

1. **Mostrar información del empleado por ID**: Permite al usuario ingresar el ID de un empleado y muestra toda la información relacionada con ese empleado. Utiliza el método `absolute(int row)` para posicionarte en el registro del empleado especificado.
2. **Buscar empleados por salario**: Permite al usuario ingresar un rango de salarios y mostrar todos los empleados cuyo salario esté dentro de ese rango. Utiliza el método `next()` para recorrer todas las filas y filtrar los empleados según el criterio de salario.

### Actividad 10

**`_10_GestionEstudiantes`**: Supongamos que tienes una base de datos que almacena información sobre estudiantes. La tabla `estudiantes` tiene las siguientes columnas:

- `id`: Identificador único del estudiante (entero).
- `nombre`: Nombre del estudiante (cadena de texto).
- `edad`: Edad del estudiante (entero).
- `promedio`: Promedio de calificaciones del estudiante (decimal).

Tu tarea es escribir un programa Java que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **Mostrar la posición actual del estudiante**: Muestra la posición del estudiante actual en el conjunto de resultados. Utiliza el método `getRow()` para obtener el número de registro actual.
2. **Validar la posición del cursor**: Verifica si el cursor está antes del primer registro, en el primer registro, en el último registro o después del último registro. Utiliza los métodos `isBeforeFirst()`, `isFirst()`, `isLast()` e `isAfterLast()` para realizar estas verificaciones.

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 11

**`_11_GestionProductos` (continuación)**: Continuando con el ejercicio de gestión de productos, copia el programa `GestionProductos`, cambia el nombre a `_11_gestionProductos` y y agrega algunas funcionalidades adicionales:

1. **Mostrar el número total de productos**: Muestra el número total de productos en la base de datos. Utiliza el método `getRow()` para obtener el número de registro actual y `last()` para mover el cursor a la última fila.
2. **Verificar si hay productos disponibles**: Verifica si hay algún producto disponible en la base de datos. Utiliza los métodos `isBeforeFirst()` e `isAfterLast()` para determinar si el cursor está antes del primer registro o después del último registro, respectivamente.

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

---

## Bloque 7.5

### Actividad 12

`A12_GestionPosts` : Crea una aplicación que permita gestionar los posts y comentarios almacenados en una base de datos.

El usuario podrá:

- Modificar el título de un post. 

  ```java
  UPDATE posts SET titulo = ? WHERE id = ?
  ```
- Eliminar los posts obsoletos (aquellos con más de un año desde su publicación).

  ```java
  DELETE FROM posts WHERE fecha_publicacion < '2024-01-01'
  ```
- Añadir un comentario a un post.

  ```java
  INSERT INTO comentarios(usuario_id, post_id, contenido, fecha_comentario) VALUES (?, ?, ?, ?)
  ```
- Eliminar todos los comentarios de un post.

  ```java
  DELETE FROM comentarios WHERE post_id = ?
  ```
- Consultar los comentarios de un post **(Se debe mostrar el título del post y el nombre del usuario, no su id)**.


<details markdown="1">
<summary><strong>⚠️ Ayuda</strong></summary>

Para este caso necesitaremos tres métodos:

- El primero sacará toda la información de la tabla comentarios filtrando por el id del post buscado. Su SQL será:

  ```java
  SELECT * FROM comentarios WHERE post_id=?
  ```
- Una vez tengamos esta información, le pasaremos el id del usuario obtenido a otro método que nos devolverá su nombre:

  ```java
  public String nombreUsuario(int idUsuario) throws SQLException{
      //...RELLENAR...
  }
  ```

  Su SQL será:

  ```java
  SELECT nombre FROM usuarios WHERE id = ?
  ```
- Igual que lo hemos hecho para el usuario, necesitaremos un método que nos permita conocer el nombre de un post a partir de su id. **Basandote en el ejemplo anterior, ¿cómo lo harías?**

</details>


> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 13

`A13_ActualizaciónProductos` : Desarrolla una aplicación que permita actualizar los precios de los productos en la tabla `productos`.

Implementa:

- Método `actualizarPrecios()` que aplique un incremento del 10% a todos los productos cuyo precio sea inferior a 20 euros.

  ```java
  UPDATE productos SET precio = precio*1.10 WHERE precio < 20
  ```
- Método `actualizarPrecioID(double precio)` que actualice el precio de un producto determinado.

  ```java
  UPDATE productos SET precio = ? WHERE id = ?
  ```

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

---

## Bloque 7.6


> ⚠️ **Archivos sql**
>
> Para realizar las actividades de este bloque deberás importar el archivo [**ventasYbanco.sql**](../../others/code/ut07/ventasYbanco.sql) en tu base de datos.


### Actividad 14

**`_14_ProductosObsoletos`**: Desarrolla una aplicación que permita gestionar los productos obsoletos de una tienda.

La tabla `orders` contiene los productos de la tabla `products` vendidos, con la cantidad y la fecha de cada compra.

Haz métodos para:

- Mostrar todos los pedidos realizados **Mostrando el nombre del producto *(tabla products)*, NO su id**.
- Mostrar los pedidos de un producto **(filtrado por nombre)**.
- **EXTRA:** Eliminar los productos obsoletos (hace más de un año que no se han vendido).

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 15

**`_15_GestionClientesBanco`**: Supongamos que tienes una base de datos que almacena información sobre los clientes de un banco *(clients)* y sus cuentas bancarias *(accounts)*.

Tu tarea es escribir un programa Java que realice las siguientes operaciones:

1. Mostrar el nombre de todos los clientes junto con sus cuentas. 

  ```java
  SELECT * FROM accounts;
  SELECT nombre FROM clients WHERE id = ?;
  ```
2. Actualizar el teléfono de un cliente.

  ```java
  UPDATE clients SET telefono = ? WHERE id = ?;
  ```
3. Actualizar la dirección de un cliente.

  ```java
  UPDATE clients SET direccion = ? WHERE id = ?;
  ```
4. Mostrar el total de dinero almacenado en el banco. 

  ```java
  SELECT saldo FROM accounts;
  ```
5. Insertar un nuevo cliente. 

  ```java
  INSERT INTO clients(nombre, direccion, telefono) VALUES (?, ?, ?);
  ```
6. Insertar una nueva cuenta (asociada a un cliente).

  ```java
  INSERT INTO accounts(saldo, id_cliente) VALUES (?, ?);
  ```
7. Mostrar el cliente propietario de la cuenta con más dinero.

  ```java
  SELECT * FROM accounts ORDER BY saldo DESC LIMIT 1;
  SELECT nombre FROM clients WHERE id = ?;
  ```
8. Actualizar el dinero de una cuenta.

  ```java
  UPDATE accounts SET saldo = ? WHERE id = ?;
  ```
9. Eliminar una cuenta.

  ```java
  DELETE FROM accounts WHERE id = ?;
  ```
10. Eliminar un cliente y todas sus cuentas.

  ```java
  DELETE FROM accounts WHERE id_cliente = ?;
  DELETE FROM clients WHERE id = ?;
  ```

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 16

**`_16_GestionPedidos`**: Supongamos que tienes una base de datos que almacena información sobre pedidos. La tabla `pedidos` tiene las siguientes columnas:

- `id`: Identificador único del pedido (entero).
- `cliente`: Nombre del cliente que realizó el pedido (cadena de texto).
- `producto`: Nombre del producto pedido (cadena de texto).
- `cantidad`: Cantidad del producto solicitada en el pedido (entero).
- `fecha`: Fecha en que se realizó el pedido (fecha).

Tu tarea es escribir un programa Java `_06_GestionPedidos` que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **Listar pedidos por cliente**: Permite al usuario ingresar el nombre de un cliente y mostrar todos los pedidos realizados por ese cliente. Utiliza el método `relative(int registros)` para desplazarte a través de los registros según las coincidencias del cliente.
2. **Buscar pedidos por fecha**: Permite al usuario ingresar una fecha y mostrar todos los pedidos realizados en esa fecha. Utiliza el método `afterLast()` y `previous()` para mover el cursor al final y luego retroceder, así puedes comenzar desde la última fila.

### Actividad 17

**`_17_GestionEmpleados` (continuación)**: Continuando con el ejercicio de gestión de empleados del séptimo ejercicio, copia el programa `_10_GestionEmpleados` y agrega algunas funcionalidades adicionales:

1. **Verificar si hay empleados en la base de datos**: Verifica si hay algún empleado registrado en la base de datos. Utiliza los métodos `isBeforeFirst()` e `isAfterLast()` para determinar si el cursor está antes del primer registro o después del último registro, respectivamente.
2. **Mostrar el primer empleado**: Muestra la información del primer empleado en la base de datos. Utiliza el método `first()` para mover el cursor al primer registro y luego muestra la información del empleado.

### Actividad 18

**`_18_GestionClientes`**: Imagina que tienes una base de datos que almacena información sobre clientes. La tabla `clientes` tiene las siguientes columnas:

- `id`: Identificador único del cliente (entero).
- `nombre`: Nombre del cliente (cadena de texto).
- `correo`: Correo electrónico del cliente (cadena de texto).
- `telefono`: Número de teléfono del cliente (cadena de texto).

Tu tarea es escribir un programa Java `_11_GestionClientes` que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **Mostrar la posición actual del cliente**: Muestra la posición actual del cliente en el conjunto de resultados. Utiliza el método `getRow()` para obtener el número de registro actual.
2. **Mostrar información del último cliente**: Muestra la información del último cliente en la base de datos. Utiliza el método `last()` para mover el cursor al último registro y luego muestra la información del cliente.

---

## Bloque 7.7


> 💻 **Empaquetar actividades**
>
> Empaqueta las actividades, dentro de la carpeta **`ut07`**, en la carpeta **`/bloque7`**.


## Actividad 19

Empaqueta toda esta actividad en: `ut07/actividades/ce6acdef/`redes

Crea una aplicación que nos permita gestionar la base de datos [**redes.sql**](../../others/code/ut07/redes.sql).

![1558290448718](../img/ut07/er.png)

Debe tener un menú desde el que se puedan gestionar (*Create*, *Read*, *Update*, *Delete*) usuarios, posts y comentarios.


<details markdown="1">
<summary><strong>☕ Ayuda SQL</strong></summary>

- SELECT: 

  ```java
  SELECT * FROM comments;
  ```
- INSERT: 

  ```java
  INSERT INTO comments(texto, fecha, userId, postId) VALUES(?, ?, ?, ?);
  ```
- UPDATE: 

  ```java
  UPDATE comments SET texto = ? WHERE id = ?;
  ```
- DELETE: 

  ```java
  DELETE FROM comments WHERE id = ?;
  ```

</details>


---

[⬅️ Anterior: 7.12 Repaso global de acceso a datos](../ut07/ut0712.md) | [➡️ Següent: Retos de programación UT7](../ut07/ut07retos.md) | [📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut07/ut07actividades.html)
