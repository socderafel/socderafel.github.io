---
layout: default
title: "Actividades prácticas UT7 — Programació (1r DAW)"
course_root: ".."
badge: "3a Avaluació · RA8 i RA9 · JDBC, Consultes SQL, PreparedStatement i DAO"
prev_url: "../ut07/ut0712.html"
prev_label: "⬅️ 7.12 Repaso global de acceso a datos"
next_url: "../ut07/ut07retos.html"
next_label: "Retos de programación UT7 ➡️"
---

# Actividades UT07

## Bloque 7.0

> **📌 Empaquetar actividades**
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
- Cambiar la fecha de un post *(filtra por id)* .
- Mostrar todos los posts de la BBDD.

En el `main` de la clase `Test`, implementa un menú para que el usuario pueda ejecutar todas las funcionalidades anteriores.

> **📌 Ayuda menú**
> ```java
> Scanner sc = new Scanner(System.in);
> int opcion = 0;
> PostsRepository postsDAO = new PostsRepository();
>
> try (Connection con = DbConnect.getInstance().getConnection()) {
>     do {
>         System.out.println("\n MENÚ: ");
>         System.out.println("1. Nuevo post");
>         System.out.println("2. Mostrar posts de usuario");
>         System.out.println("3. Eliminar posts usuario");
>         System.out.println("4. Cambiar la fecha de un post");
>         System.out.println("4. Mostrar todos los posts");
>         System.out.println("0. Salir");
>         System.out.print("Selecciona una opción: ");
>
>         opcion = sc.nextInt();
>         sc.nextLine(); // Limpiar buffer
>
>         switch (opcion) {
>             case 1:
>                 //Realizar acciones necesarias 
>                 break;
>             case 2:
>                 //Realizar acciones necesarias
>                 System.out.println("Introduce el id de usuario:");
>                 int uid2 = sc.nextInt();
>
>                 postsDAO.listarPostsUsuario(uid2);
>                 break;
>             case 3:
>                 //Realizar acciones necesarias
>                 break;
>             case 4:
>                 //Realizar acciones necesarias 
>                 break;
>             case 5:
>                 //Realizar acciones necesarias 
>                 break;
>             case 0:
>                 System.out.println("Saliendo del sistema...");
>                 break;
>             default:
>                 System.out.println("Opción inválida. Intenta de nuevo.");
>         }
>     } while (opcion != 0);
> } catch (SQLException ex) {
>         System.out.println("ERROR al conectar: " + ex.getMessage());
> }
> ```

---

## Bloque 7.2

### Actividad 03

**Análisis de índices en una tabla**: Crea una aplicación que permita analizar los índices de una tabla en una base de datos relacional. Conéctate a la base de datos utilizando JDBC y muestra los índices asociados a la tabla `clientes`.

Operaciones:

- Mostrar los índices de la tabla.
- Comprobar si hay claves primarias o foráneas asociadas.

### Actividad 04

**`_04_GestionProductos`**: Supongamos que tienes una base de datos que almacena información sobre productos. La tabla `productos` tiene las siguientes columnas:

- `id` : Identificador único del producto (entero).
- `nombre` : Nombre del producto (cadena de texto).
- `precio` : Precio del producto (decimal).

Tu tarea es escribir un programa Java `_02_GestionProductos` que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **`mostrarProductosPorPagina()`** : mostrar una página de productos cada vez que el usuario lo solicite. Cada página debe contener 5 productos. Implementa las funciones para mover el cursor a la primera página, página siguiente, página anterior, última página y una página específica utilizando el método `absolute(int row)` .
2. **`buscarProductoPorNombre(String nombre)`** : permitir al usuario buscar un producto por su nombre. Utiliza el método `relative(int registros)` para desplazar el cursor hacia adelante o hacia atrás según la coincidencia del nombre.

---

## Bloque 7.3

### Actividad 05

**`_05_GestionEmpleados`**: Tenemos nuestra base de datos **`pr_tuNombre`** que almacena información sobre *empleados*. La tabla `empleados` tiene las siguientes columnas:

- `id` : identificador único del empleado (entero).
- `nombre` : nombre del empleado (cadena de texto).
- `salario` : salario del empleado (decimal).

Es escribir un programa Java `_01_GestionEmpleados` que realice las siguientes operaciones utilizando diferentes tipos de resultado y opciones de concurrencia:

1. **`listarEmpleados`** : mostrar en la consola todos los empleados y sus salarios.
2. **`incrementoSalarioAnual`** : incrementar el salario de todos los empleados en un 10%.
3. **`eliminarEmpleadosSalario`** : eliminar todos los empleados cuyo salario sea menor que 3000€.
4. **`actualizarSalarioEmpleado`** : actualiza el salario de un empleado filtrado por *nombre* .
5. **`eliminarEmpleadoId`** : eliminar un empleado filtrado por *id* .

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 06

**`_06_GestionVentas`**: Supongamos que tienes una base de datos que almacena información sobre ventas. La tabla `ventas` tiene las siguientes columnas:

- `id` : Identificador único de la venta (entero).
- `producto` : Nombre del producto vendido (cadena de texto).
- `cantidad` : Cantidad de productos vendidos (entero).
- `total` : Total de la venta (decimal).

Tu tarea es escribir un programa Java `_05_GestionVentas` que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **Calcular el total de ventas** : Muestra al usuario la suma del precio total de las ventas almacenadas en el sistema.
2. **Buscar ventas por producto** : Permite al usuario ingresar el nombre de un producto y devuelve las ventas de ese producto.
3. **Calcular el total de € ganados con un producto** : Permite al usuario ingresar el nombre de un producto y devuelve el precio total de las ventas de dicho producto.

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 07

**`_07_GestionLibros`**: Supongamos que tienes una base de datos que almacena información sobre libros. La tabla `libros` tiene las siguientes columnas:

- `id` : Identificador único del libro (entero).
- `titulo` : Título del libro (cadena de texto).
- `autor` : Nombre del autor del libro (cadena de texto).
- `anio_publicacion` : Año de publicación del libro (entero).

Tu tarea es escribir un programa Java que realice las siguientes operaciones utilizando los métodos proporcionados:

- **`buscarLibroPorAutor(String autor)`**: permite al usuario ingresar el nombre de un autor y muestra todos los libros escritos por ese autor.
- **`mostrarLibrosPorDecada(int decada)`**: permite al usuario ingresar una década y mostrar todos los libros publicados en esa década.

> **⚠️ Ayuda**
> Sugerencia:
>
> - Utiliza el método `preparedStatement(sql)` con una consulta en la que se listen los libros comprendidos en una década y ordenados de forma descendente por el `anio_publiacion` .
> - Si el usuario me introduce la decada *1990* , la consulta SQL será: `SELECT * FROM libros WHERE anio_publicacion BETWEEN 1990 AND 1999 ORDER BY anio_publicacion DESC;`

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

---

## Bloque 7.4

### Actividad 08

**`_08_GestionLibros`**: Supongamos que tienes una base de datos que almacena información sobre libros. La tabla `libros` tiene las siguientes columnas:

- `id` : Identificador único del libro (entero).
- `titulo` : Título del libro (cadena de texto).
- `autor` : Nombre del autor del libro (cadena de texto).
- `anio_publicacion` : Año de publicación del libro (entero).

Tu tarea es escribir un programa Java que realice las siguientes operaciones utilizando los métodos proporcionados:

- **`buscarLibroPorAutor(String autor)`**: permite al usuario ingresar el nombre de un autor y muestra todos los libros escritos por ese autor.
- **`mostrarLibrosPorDecada(int decada)`**: permite al usuario ingresar una década y mostrar todos los libros publicados en esa década.

> **⚠️ Ayuda**
> Sugerencia:
>
> - Utiliza el método `preparedStatement(sql)` con una consulta en la que se listen los libros comprendidos en una década y ordenados de forma descendente por el `anio_publiacion` .
> - Si el usuario me introduce la decada *1990* , la consulta SQL será: `SELECT * FROM libros WHERE anio_publicacion BETWEEN 1990 AND 1999 ORDER BY anio_publicacion DESC;`

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 09

**`_09_GestionEmpleados` (continuación)**: Continuando con el ejercicio de gestión de empleados, copia el programa `GestionEmpleados`, cambia el nombre a `_09_gestionEmpleados` y agrega algunas funcionalidades adicionales:

1. **Mostrar información del empleado por ID** : Permite al usuario ingresar el ID de un empleado y muestra toda la información relacionada con ese empleado. Utiliza el método `absolute(int row)` para posicionarte en el registro del empleado especificado.
2. **Buscar empleados por salario** : Permite al usuario ingresar un rango de salarios y mostrar todos los empleados cuyo salario esté dentro de ese rango. Utiliza el método `next()` para recorrer todas las filas y filtrar los empleados según el criterio de salario.

### Actividad 10

**`_10_GestionEstudiantes`**: Supongamos que tienes una base de datos que almacena información sobre estudiantes. La tabla `estudiantes` tiene las siguientes columnas:

- `id` : Identificador único del estudiante (entero).
- `nombre` : Nombre del estudiante (cadena de texto).
- `edad` : Edad del estudiante (entero).
- `promedio` : Promedio de calificaciones del estudiante (decimal).

Tu tarea es escribir un programa Java que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **Mostrar la posición actual del estudiante** : Muestra la posición del estudiante actual en el conjunto de resultados. Utiliza el método `getRow()` para obtener el número de registro actual.
2. **Validar la posición del cursor** : Verifica si el cursor está antes del primer registro, en el primer registro, en el último registro o después del último registro. Utiliza los métodos `isBeforeFirst()` , `isFirst()` , `isLast()` e `isAfterLast()` para realizar estas verificaciones.

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 11

**`_11_GestionProductos` (continuación)**: Continuando con el ejercicio de gestión de productos, copia el programa `GestionProductos`, cambia el nombre a `_11_gestionProductos` y y agrega algunas funcionalidades adicionales:

1. **Mostrar el número total de productos** : Muestra el número total de productos en la base de datos. Utiliza el método `getRow()` para obtener el número de registro actual y `last()` para mover el cursor a la última fila.
2. **Verificar si hay productos disponibles** : Verifica si hay algún producto disponible en la base de datos. Utiliza los métodos `isBeforeFirst()` e `isAfterLast()` para determinar si el cursor está antes del primer registro o después del último registro, respectivamente.

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

---

## Bloque 7.5

### Actividad 12

`A12_GestionPosts` : Crea una aplicación que permita gestionar los posts y comentarios almacenados en una base de datos.

El usuario podrá:

- Modificar el título de un post. Código Java 📋 Copiar JAVA `UPDATE posts SET titulo = ? WHERE id = ?`
- Eliminar los posts obsoletos (aquellos con más de un año desde su publicación). Código Java 📋 Copiar JAVA `DELETE FROM posts WHERE fecha_publicacion < '2024-01-01'`
- Añadir un comentario a un post. Consulta SQL 📋 Copiar SQL `INSERT INTO comentarios(usuario_id, post_id, contenido, fecha_comentario) VALUES (?, ?, ?, ?)`
- Eliminar todos los comentarios de un post. Código Java 📋 Copiar JAVA `DELETE FROM comentarios WHERE post_id = ?`
- Consultar los comentarios de un post **(Se debe mostrar el título del post y el nombre del usuario, no su id)** .

> **⚠️ Ayuda**
> Para este caso necesitaremos tres métodos:
>
> - El primero sacará toda la información de la tabla comentarios filtrando por el id del post buscado. Su SQL será: Consulta SQL 📋 Copiar SQL `SELECT * FROM comentarios WHERE post_id=?`
> - Una vez tengamos esta información, le pasaremos el id del usuario obtenido a otro método que nos devolverá su nombre: Código Java 📋 Copiar JAVA `public String nombreUsuario(int idUsuario) throws SQLException{ //...RELLENAR... }` Su SQL será: Consulta SQL 📋 Copiar SQL `SELECT nombre FROM usuarios WHERE id = ?`
> - Igual que lo hemos hecho para el usuario, necesitaremos un método que nos permita conocer el nombre de un post a partir de su id. **Basandote en el ejemplo anterior, ¿cómo lo harías?**

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 13

`A13_ActualizaciónProductos` : Desarrolla una aplicación que permita actualizar los precios de los productos en la tabla `productos`.

Implementa:

- Método `actualizarPrecios()` que aplique un incremento del 10% a todos los productos cuyo precio sea inferior a 20 euros. Código Java 📋 Copiar JAVA `UPDATE productos SET precio = precio*1.10 WHERE precio < 20`
- Método `actualizarPrecioID(double precio)` que actualice el precio de un producto determinado. Código Java 📋 Copiar JAVA `UPDATE productos SET precio = ? WHERE id = ?`

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

---

## Bloque 7.6

> **⚠️ Archivos sql**
> Para realizar las actividades de este bloque deberás importar el archivo [**ventasYbanco.sql**](../../others/code/ut07/ventasYbanco.sql) en tu base de datos.

### Actividad 14

**`_14_ProductosObsoletos`**: Desarrolla una aplicación que permita gestionar los productos obsoletos de una tienda.

La tabla `orders` contiene los productos de la tabla `products` vendidos, con la cantidad y la fecha de cada compra.

Haz métodos para:

- Mostrar todos los pedidos realizados **Mostrando el nombre del producto *(tabla products)*, NO su id** .
- Mostrar los pedidos de un producto **(filtrado por nombre)** .
- **EXTRA:** Eliminar los productos obsoletos (hace más de un año que no se han vendido).

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

???java "Solución"
 === "DbConnect.java"
 <div class="terminal-box">
 <div class="terminal-bar">
 <div class="terminal-dots">
 <span class="dot dot-red"></span>
 <span class="dot dot-yellow"></span>
 <span class="dot dot-green"></span>
 </div>
 <div class="terminal-title">Código Java</div>
 <div class="terminal-actions">
 <button class="btn-copy" onclick="copyCode(this)" title="Copiar código">📋 Copiar</button>
 <span class="terminal-lang">JAVA</span>
 </div>
 </div>
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.sql.*;

<span class="tok-key">public</span> <span class="tok-key">class</span> DbConnect {
 <span class="tok-key">private</span> <span class="tok-key">static</span> <span class="tok-key">final</span> <span class="tok-key">String</span> JDBC_URL = &quot;jdbc:mysql:<span class="tok-comment">//localhost:3306/pr_ana&quot;;</span>
 <span class="tok-key">private</span> <span class="tok-key">static</span> <span class="tok-key">final</span> <span class="tok-key">String</span> USUARIO = <span class="tok-string">&quot;pr_ana&quot;</span>;
 <span class="tok-key">private</span> <span class="tok-key">static</span> <span class="tok-key">final</span> <span class="tok-key">String</span> PASSWORD = <span class="tok-string">&quot;1234&quot;</span>;

 <span class="tok-key">private</span> <span class="tok-key">static</span> DbConnect dbInstance; <span class="tok-comment">// Variable para almacenar la única instancia de la clase</span>
 <span class="tok-key">private</span> <span class="tok-key">static</span> <span class="tok-key">Connection</span> con;

 <span class="tok-comment">// Constructor vacío privado para evitar la instanciación directa</span>
 <span class="tok-key">private</span> DbConnect() {
 }

 <span class="tok-comment">// Método estático para obtener la instancia única (Singleton)</span>
 <span class="tok-key">public</span> <span class="tok-key">static</span> DbConnect getInstance() {
 <span class="tok-key">if</span> (dbInstance == <span class="tok-bool">null</span>) {
 dbInstance = <span class="tok-key">new</span> DbConnect();
 }
 <span class="tok-key">return</span> dbInstance;
 }

 <span class="tok-comment">// Método estático para obtener la conexión a la base de datos</span>
 <span class="tok-key">public</span> <span class="tok-key">Connection</span> getConnection() <span class="tok-key">throws</span> <span class="tok-key">SQLException</span> {
 <span class="tok-key">if</span> (con == <span class="tok-bool">null</span> || con.isClosed()) {
 con = <span class="tok-key">DriverManager</span>.getConnection(JDBC_URL, USUARIO, PASSWORD);
 }
 <span class="tok-key">return</span> con;
 }
}</code></pre>
</div>

 === "OrdersRepository.java"
 <div class="terminal-box">
 <div class="terminal-bar">
 <div class="terminal-dots">
 <span class="dot dot-red"></span>
 <span class="dot dot-yellow"></span>
 <span class="dot dot-green"></span>
 </div>
 <div class="terminal-title">Consulta SQL</div>
 <div class="terminal-actions">
 <button class="btn-copy" onclick="copyCode(this)" title="Copiar código">📋 Copiar</button>
 <span class="terminal-lang">SQL</span>
 </div>
 </div>
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.sql.*;

<span class="tok-key">public</span> <span class="tok-key">class</span> OrdersRepository {
 <span class="tok-key">public</span> <span class="tok-key">void</span> pedidosRealizados() <span class="tok-key">throws</span> <span class="tok-key">SQLException</span> {

 <span class="tok-key">String</span> sql = <span class="tok-string">&quot;SELECT * FROM orders&quot;</span>;
 <span class="tok-key">Connection</span> con = DbConnect.getInstance().getConnection();

 ProductsRepository productsDAO = <span class="tok-key">new</span> ProductsRepository();

 <span class="tok-key">try</span> (<span class="tok-key">Statement</span> st = con.createStatement()) {

 <span class="tok-key">ResultSet</span> rs = st.executeQuery(sql);

 <span class="tok-key">while</span> (rs.next()) {
 <span class="tok-key">int</span> id = rs.getInt(<span class="tok-string">&quot;id&quot;</span>);
 <span class="tok-key">String</span> fecha = rs.getString(<span class="tok-string">&quot;fecha&quot;</span>);
 <span class="tok-key">int</span> cantidad = rs.getInt(<span class="tok-string">&quot;cantidad&quot;</span>);
 <span class="tok-key">int</span> id_prod = rs.getInt(<span class="tok-string">&quot;id_producto&quot;</span>);
 <span class="tok-key">String</span> nom = productsDAO.nombreProducto(id_prod);

 <span class="tok-key">System</span>.out.println(id + <span class="tok-string">&quot;. Producto: &quot;</span>+nom+<span class="tok-string">&quot;, cantidad: &quot;</span> + cantidad + <span class="tok-string">&quot;, fecha: &quot;</span> + fecha);
 }

 }
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> pedidosProducto(<span class="tok-key">String</span> prod) <span class="tok-key">throws</span> <span class="tok-key">SQLException</span> {

 <span class="tok-key">String</span> sql = <span class="tok-string">&quot;SELECT * FROM orders WHERE id_producto = ?&quot;</span>;
 <span class="tok-key">Connection</span> con = DbConnect.getInstance().getConnection();

 ProductsRepository productsDAO = <span class="tok-key">new</span> ProductsRepository();
 <span class="tok-key">int</span> id_prod= productsDAO.idProducto(prod);

 <span class="tok-key">try</span> (<span class="tok-key">PreparedStatement</span> pst = con.prepareStatement(sql)) {

 pst.setInt(<span class="tok-bool">1</span>, id_prod);

 <span class="tok-key">ResultSet</span> rs = pst.executeQuery();

 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Pedidos del producto: &quot;</span> + prod + <span class="tok-string">&quot;(&quot;</span>+id_prod+<span class="tok-string">&quot;)&quot;</span>);
 <span class="tok-key">while</span> (rs.next()) {
 <span class="tok-key">int</span> id = rs.getInt(<span class="tok-string">&quot;id&quot;</span>);
 <span class="tok-key">String</span> fecha = rs.getString(<span class="tok-string">&quot;fecha&quot;</span>);
 <span class="tok-key">int</span> cantidad = rs.getInt(<span class="tok-string">&quot;cantidad&quot;</span>);

 <span class="tok-key">System</span>.out.println(id + <span class="tok-string">&quot;. Cantidad: &quot;</span> + cantidad + <span class="tok-string">&quot;, fecha: &quot;</span> + fecha);
 }
 }
 }
}</code></pre>
</div>

 === "ProductsRepository.java"
 <div class="terminal-box">
 <div class="terminal-bar">
 <div class="terminal-dots">
 <span class="dot dot-red"></span>
 <span class="dot dot-yellow"></span>
 <span class="dot dot-green"></span>
 </div>
 <div class="terminal-title">Consulta SQL</div>
 <div class="terminal-actions">
 <button class="btn-copy" onclick="copyCode(this)" title="Copiar código">📋 Copiar</button>
 <span class="terminal-lang">SQL</span>
 </div>
 </div>
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.sql.*;

<span class="tok-key">public</span> <span class="tok-key">class</span> ProductsRepository {
 <span class="tok-key">public</span> <span class="tok-key">String</span> nombreProducto(<span class="tok-key">int</span> id) <span class="tok-key">throws</span> <span class="tok-key">SQLException</span> {

 <span class="tok-key">String</span> sql = <span class="tok-string">&quot;SELECT nombre FROM products WHERE id = ?&quot;</span>;
 <span class="tok-key">Connection</span> con = DbConnect.getInstance().getConnection();

 <span class="tok-key">String</span> nom=<span class="tok-string">&quot;&quot;</span>;

 <span class="tok-key">try</span> (<span class="tok-key">PreparedStatement</span> pst = con.prepareStatement(sql)) {

 pst.setInt(<span class="tok-bool">1</span>, id);

 <span class="tok-key">ResultSet</span> rs = pst.executeQuery();

 <span class="tok-key">if</span> (rs.next()) {
 nom = rs.getString(<span class="tok-string">&quot;nombre&quot;</span>);
 }
 }

 <span class="tok-key">return</span> nom;
 }

 <span class="tok-key">public</span> <span class="tok-key">int</span> idProducto(<span class="tok-key">String</span> nombre) <span class="tok-key">throws</span> <span class="tok-key">SQLException</span> {

 <span class="tok-key">String</span> sql = <span class="tok-string">&quot;SELECT id FROM products WHERE nombre = ?&quot;</span>;
 <span class="tok-key">Connection</span> con = DbConnect.getInstance().getConnection();

 <span class="tok-key">int</span> id=<span class="tok-bool">0</span>;

 <span class="tok-key">try</span> (<span class="tok-key">PreparedStatement</span> pst = con.prepareStatement(sql)) {

 pst.setString(<span class="tok-bool">1</span>, nombre);

 <span class="tok-key">ResultSet</span> rs = pst.executeQuery();

 <span class="tok-key">if</span> (rs.next()) {
 id = rs.getInt(<span class="tok-string">&quot;id&quot;</span>);
 }
 }

 <span class="tok-key">return</span> id;
 }
}</code></pre>
</div>

 === "Test.java"
 <div class="terminal-box">
 <div class="terminal-bar">
 <div class="terminal-dots">
 <span class="dot dot-red"></span>
 <span class="dot dot-yellow"></span>
 <span class="dot dot-green"></span>
 </div>
 <div class="terminal-title">Código Java</div>
 <div class="terminal-actions">
 <button class="btn-copy" onclick="copyCode(this)" title="Copiar código">📋 Copiar</button>
 <span class="terminal-lang">JAVA</span>
 </div>
 </div>
 <pre><code><span class="tok-key">public</span> <span class="tok-key">class</span> Test {
 <span class="tok-key">public</span> <span class="tok-key">static</span> <span class="tok-key">void</span> main(<span class="tok-key">String</span>[] args) {
 <span class="tok-key">Scanner</span> sc = <span class="tok-key">new</span> <span class="tok-key">Scanner</span>(<span class="tok-key">System</span>.in);
 <span class="tok-key">int</span> opcion = <span class="tok-bool">0</span>;
 OrdersRepository ordersDAO = <span class="tok-key">new</span> OrdersRepository();

 <span class="tok-key">try</span> (<span class="tok-key">Connection</span> con = DbConnect.getInstance().getConnection()) {
 <span class="tok-key">do</span> {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;\n MENÚ: &quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;1. Mostrar todos los pedidos&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;2. Mostrar los pedidos de un producto (filtrado por nombre)&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;0. Salir&quot;</span>);
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Selecciona una opción: &quot;</span>);

 opcion = sc.nextInt();
 sc.nextLine(); <span class="tok-comment">// Limpiar buffer</span>

 <span class="tok-key">switch</span> (opcion) {
 <span class="tok-key">case</span> <span class="tok-bool">1</span>:
 <span class="tok-comment">//Realizar acciones necesarias </span>
 ordersDAO.pedidosRealizados();
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">2</span>:
 <span class="tok-comment">//Realizar acciones necesarias</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Introduce el nombre del producto:&quot;</span>);
 <span class="tok-key">String</span> nombre = sc.nextLine();

 ordersDAO.pedidosProducto(nombre);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">0</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Saliendo del sistema...&quot;</span>);
 <span class="tok-key">break</span>;
 <span class="tok-key">default</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Opción inválida. Intenta de nuevo.&quot;</span>);
 }
 } <span class="tok-key">while</span> (opcion != <span class="tok-bool">0</span>);
 } <span class="tok-key">catch</span> (<span class="tok-key">SQLException</span> ex) {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;ERROR al conectar: &quot;</span> + ex.getMessage());
 }
 }
}</code></pre>
</div>

### Actividad 15

**`_15_GestionClientesBanco`**: Supongamos que tienes una base de datos que almacena información sobre los clientes de un banco *(clients)* y sus cuentas bancarias *(accounts)*.

Tu tarea es escribir un programa Java que realice las siguientes operaciones:

1. Mostrar el nombre de todos los clientes junto con sus cuentas. Consulta SQL 📋 Copiar SQL `SELECT * FROM accounts; SELECT nombre FROM clients WHERE id = ?;`
2. Actualizar el teléfono de un cliente. Código Java 📋 Copiar JAVA `UPDATE clients SET telefono = ? WHERE id = ?;`
3. Actualizar la dirección de un cliente. Código Java 📋 Copiar JAVA `UPDATE clients SET direccion = ? WHERE id = ?;`
4. Mostrar el total de dinero almacenado en el banco. Consulta SQL 📋 Copiar SQL `SELECT saldo FROM accounts;`
5. Insertar un nuevo cliente. Consulta SQL 📋 Copiar SQL `INSERT INTO clients(nombre, direccion, telefono) VALUES (?, ?, ?);`
6. Insertar una nueva cuenta (asociada a un cliente). Consulta SQL 📋 Copiar SQL `INSERT INTO accounts(saldo, id_cliente) VALUES (?, ?);`
7. Mostrar el cliente propietario de la cuenta con más dinero. Consulta SQL 📋 Copiar SQL `SELECT * FROM accounts ORDER BY saldo DESC LIMIT 1; SELECT nombre FROM clients WHERE id = ?;`
8. Actualizar el dinero de una cuenta. Código Java 📋 Copiar JAVA `UPDATE accounts SET saldo = ? WHERE id = ?;`
9. Eliminar una cuenta. Código Java 📋 Copiar JAVA `DELETE FROM accounts WHERE id = ?;`
10. Eliminar un cliente y todas sus cuentas. Código Java 📋 Copiar JAVA `DELETE FROM accounts WHERE id_cliente = ?; DELETE FROM clients WHERE id = ?;`

> En el `main` crea un menú que permita al usuario acceder a las diferentes funcionalidades.

### Actividad 16

**`_16_GestionPedidos`**: Supongamos que tienes una base de datos que almacena información sobre pedidos. La tabla `pedidos` tiene las siguientes columnas:

- `id` : Identificador único del pedido (entero).
- `cliente` : Nombre del cliente que realizó el pedido (cadena de texto).
- `producto` : Nombre del producto pedido (cadena de texto).
- `cantidad` : Cantidad del producto solicitada en el pedido (entero).
- `fecha` : Fecha en que se realizó el pedido (fecha).

Tu tarea es escribir un programa Java `_06_GestionPedidos` que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **Listar pedidos por cliente** : Permite al usuario ingresar el nombre de un cliente y mostrar todos los pedidos realizados por ese cliente. Utiliza el método `relative(int registros)` para desplazarte a través de los registros según las coincidencias del cliente.
2. **Buscar pedidos por fecha** : Permite al usuario ingresar una fecha y mostrar todos los pedidos realizados en esa fecha. Utiliza el método `afterLast()` y `previous()` para mover el cursor al final y luego retroceder, así puedes comenzar desde la última fila.

### Actividad 17

**`_17_GestionEmpleados` (continuación)**: Continuando con el ejercicio de gestión de empleados del séptimo ejercicio, copia el programa `_10_GestionEmpleados` y agrega algunas funcionalidades adicionales:

1. **Verificar si hay empleados en la base de datos** : Verifica si hay algún empleado registrado en la base de datos. Utiliza los métodos `isBeforeFirst()` e `isAfterLast()` para determinar si el cursor está antes del primer registro o después del último registro, respectivamente.
2. **Mostrar el primer empleado** : Muestra la información del primer empleado en la base de datos. Utiliza el método `first()` para mover el cursor al primer registro y luego muestra la información del empleado.

### Actividad 18

**`_18_GestionClientes`**: Imagina que tienes una base de datos que almacena información sobre clientes. La tabla `clientes` tiene las siguientes columnas:

- `id` : Identificador único del cliente (entero).
- `nombre` : Nombre del cliente (cadena de texto).
- `correo` : Correo electrónico del cliente (cadena de texto).
- `telefono` : Número de teléfono del cliente (cadena de texto).

Tu tarea es escribir un programa Java `_11_GestionClientes` que realice las siguientes operaciones utilizando los métodos proporcionados:

1. **Mostrar la posición actual del cliente** : Muestra la posición actual del cliente en el conjunto de resultados. Utiliza el método `getRow()` para obtener el número de registro actual.
2. **Mostrar información del último cliente** : Muestra la información del último cliente en la base de datos. Utiliza el método `last()` para mover el cursor al último registro y luego muestra la información del cliente.

---

## Bloque 7.7

> **📌 Empaquetar actividades**
> Empaqueta las actividades, dentro de la carpeta **`ut07`**, en la carpeta **`/bloque7`**.

## Actividad 19

Empaqueta toda esta actividad en: `ut07/actividades/ce6acdef/`redes

Crea una aplicación que nos permita gestionar la base de datos [**redes.sql**](../../others/code/ut07/redes.sql).

![1558290448718](../img/ut07/er.png)
Debe tener un menú desde el que se puedan gestionar (*Create*, *Read*, *Update*, *Delete*) usuarios, posts y comentarios.

> **📌 Ayuda SQL**
> - SELECT: Consulta SQL 📋 Copiar SQL `SELECT * FROM comments;`
> - INSERT: Consulta SQL 📋 Copiar SQL `INSERT INTO comments(texto, fecha, userId, postId) VALUES(?, ?, ?, ?);`
> - UPDATE: Código Java 📋 Copiar JAVA `UPDATE comments SET texto = ? WHERE id = ?;`
> - DELETE: Código Java 📋 Copiar JAVA `DELETE FROM comments WHERE id = ?;`
