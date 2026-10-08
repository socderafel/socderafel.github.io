[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT7 Completa](../ut7-bases-dades.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut07/ut07retos.html)

[⬅️ Anterior: Actividades prácticas UT7](../ut07/ut07actividades.md) | [➡️ Següent: Proyecto Intermodular UT7](../ut07/ut07pi.md)

---

# Retos

**[< volver a actividades](./ut07ac.md)**


> 💻 **Empaquetar retos**
>
> Empaqueta las actividades, dentro de la carpeta **`ut07`**, en la carpeta **`retos`**.
>
> Las actividades programadas en esta sección **Retos** no son obligatorias.



<details markdown="1">
<summary><strong>☕ Ejemplo de conexión y acceso a base de datos</strong></summary>

Veamos un ejemplo completo de conexión y acceso a una base de datos utilizando todos los elementos mencionados en este apartado.

```java
try {
  // Cargamos la clase que implementa el Driver
  Class.forName("com.mysql.cj.jdbc.Driver").newInstance();

  // Creamos una nueva conexión a la base de datos 'miBaseDeDatos'
  String jdbc_url = "jdbc:mysql://localhost:3306/pr_tuNombre";
  String usuario = "pr_tuNombre";
  String passwd = "tuContraseña";

  Connection conn = DriverManager.getConnection(jdbc_url,usuario,passwd);

  // Obtenemos un Statement de la conexión
  Statement st = conn.createStatement();

  // Ejecutamos una consulta SELECT para obtener la tabla vendedores
  String sql = "SELECT * FROM vendedores";

  ResultSet rs = st.executeQuery(sql);

  // Recorremos todo el ResultSet y mostramos sus datos

  while(rs.next()) {
    int id        = rs.getInt("id");
    String nombre = rs.getString("nombre");
    Date fecha    = rs.getDate("fecha_ingreso");
    float salario = rs.getFloat("salario");
    System.out.println(id + " " + nombre + " " + fecha + " " + salario);
  }

  // Cerramos el statement y la conexión
  st.close();
  conn.close();

} catch (SQLException e) {
    System.out.println("ERROR: " + e.getMessage());

} catch (Exception e) {
    System.out.println("ERROR: " + e.getMessage());
} finally {
    try{
        if (rs != null){
            rs.close();
        }
    } catch (){
        System.out.println("ERROR: " + e.getMessage());
    }
} finally {
    try{
        if (st != null){
            rs.close();
        }
    } catch (){
        System.out.println("ERROR: " + e.getMessage());
    }   
} finally {
    try{
        if (conn != null){
            rs.close();
        }
    } catch (){
        System.out.println("ERROR: " + e.getMessage());
    }   
}
```

</details>


### Reto 01

**Gestión de inventario en un sistema de tienda**: Crea una aplicación Java que gestione una base de datos de productos para una tienda.

La tabla `productos` contiene columnas como `id`, `nombre`, `precio` y `cantidad`.

Implementa una clase **`Producto`** y utiliza un método `mostrarInventario()` para mostrar la información de los productos almacenados en la base de datos.

Operaciones:

- Mostrar todos los productos en inventario.
- Consultar un producto específico por su ID.

---

### Reto 02

**Registro de empleados en una base de datos**: Crea una aplicación Java que permita registrar empleados en una base de datos.

La tabla `empleados` tiene columnas como `id`, `nombre`, `departamento`, y `salario`.

Implementa una clase **`Empleado`** y un método `registrarEmpleado()` que almacene los datos en la base de datos.

Operaciones:

- Registrar un nuevo empleado.
- Mostrar la lista de empleados registrados.

---

### Reto 03

**Identificación de las propiedades de una conexión JDBC**: Desarrolla un programa en Java que conecte a una base de datos utilizando JDBC.

El programa debe identificar y mostrar las propiedades de la conexión, como el nombre de la base de datos, el usuario actual, y las características del sistema gestor de bases de datos.

Operaciones:

- Mostrar la versión del sistema gestor de la base de datos.
- Mostrar el nombre del usuario conectado.

---

### Reto 04

**Registrar productos en una base de datos**: Crea una aplicación que permita registrar productos en una base de datos relacional.

La tabla `productos` contiene columnas como `id`, `nombre`, `precio`, `stock`.

Implementa un método para insertar un nuevo producto y almacenar la información.

Operaciones:

- Insertar un nuevo producto.
- Verificar si el producto se ha almacenado correctamente.

---

### Reto 05

**Registro de transacciones bancarias**: Desarrolla una aplicación que permita registrar transacciones en una tabla `transacciones` con columnas como `id`, `cuenta_origen`, `cuenta_destino`, `monto`, y `fecha`.

El programa debe almacenar la transacción en la base de datos.

Operaciones:

- Registrar una nueva transacción.
- Verificar si la transacción se ha registrado correctamente.

---

### Reto 06

**Consultar clientes en una base de datos**: Desarrolla una aplicación Java que permita consultar los datos de la tabla `clientes`.

Implementa un método `mostrarClientes()` que recupere y muestre todos los registros de clientes almacenados en la base de datos.

Operaciones:

- Mostrar todos los clientes.
- Consultar un cliente por su ID.

---

### Reto 07

**Mostrar el catálogo de una tienda en línea**: Crea una aplicación que conecte a la base de datos de una tienda en línea y muestre el catálogo de productos almacenados.

Los productos deben visualizarse con su `id`, `nombre`, `precio`, y `disponibilidad`.

Operaciones:

- Mostrar todos los productos disponibles.
- Consultar un producto por su nombre.

**[< volver a actividades](./ut07ac.md)**

---

[⬅️ Anterior: Actividades prácticas UT7](../ut07/ut07actividades.md) | [➡️ Següent: Proyecto Intermodular UT7](../ut07/ut07pi.md) | [📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut07/ut07retos.html)
