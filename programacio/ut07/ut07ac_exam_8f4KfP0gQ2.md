[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT7 Completa](../ut7-bases-dades.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut07/ut07ac_exam_8f4KfP0gQ2.html)

---

# UT7 - Examen


<details markdown="1">
<summary><strong>💻 Criterios de Evaluación</strong></summary>

En este examen, se evaluaran los CE:

- **8b**: Se ha analizado su aplicación en el desarrollo de aplicaciones mediante lenguajes orientados a objetos.
- **8f**: Se han programado aplicaciones que almacenan objetos en las bases de datos creadas.
- **9a**: Se han identificado las características y métodos de acceso a sistemas gestores de bases de datos.
- **9b**: Se han programado conexiones con la base de datos.
- **9c**: Se ha escrito código para almacenar información en bases de datos.
- **9d**: Se han creado programas para recuperar y mostrar información almacenada en bases de datos
- **9e**: Se han efectuado borrados y modificaciones sobre la información almacenada.
- **9f**: Se han creado aplicaciones que muestran la información almacenada en bases de datos.
- **9g**: Se han creado aplicaciones para gestionar la información presente en la base de datos.

</details>



> ⚠️ **OJO!**
>
> Antes de empezar, importa la siguiente BD  [**biblioteca.sql**](../../others/code/ut07/biblioteca.sql).


Supongamos que tienes una base de datos que almacena información sobre las películas *(peliculas)* y sus directores *(directores)*.

Tu tarea es escribir un programa Java que realice las siguientes operaciones:

1. Listar toda la información de los directores almacenada.

  ```java
  SELECT * FROM directores;
  ```
2. Listar todas las peliculas almacenadas, **mostrando el nombre del director, no su id.**

  ```java
  SELECT * FROM peliculas;
  SELECT nombre FROM directores WHERE id = ?;
  ```
3. Añadir un nuevo director a la base de datos.

  ```java
  INSERT INTO directores(nombre, fecha_nacimiento, nacionalidad, premios) VALUES(?, ?, ?, ?);
  ```
4. Aumentar en 1 los premios de un director *(filtrado por nombre)*

  ```java
  UPDATE directores SET premios = premios + 1 WHERE nombre = ?;
  ```
5. Eliminar un director *(filtrado por id)*

  ```java
  DELETE FROM directores WHERE id = ?;
  ```
6. Listar todas las peliculas de un genero específico introducido por el usuario. 

  ```java
  SELECT * FROM peliculas WHERE genero = ?;
  ```
7. Mostrar todas las peliculas de un director *(filtrado por nombre)*

  ```java
  SELECT id FROM directores WHERE nombre = ?;
  SELECT * FROM peliculas WHERE director_id = ?;
  ```
8. Eliminar un director y todas sus peliculas.

  ```java
  DELETE FROM peliculas WHERE director_id = ?;
  DELETE FROM directores WHERE id = ?;
  ```


<details markdown="1">
<summary><strong>☕ Ayuda</strong></summary>

=== "DbConnect.java"
    ```java
    import java.sql.*;

    public class DbConnect {
        private static final String JDBC_URL = "jdbc:mysql://localhost:3306/biblioteca";
        private static final String USUARIO = "pr_ana";
        private static final String PASSWORD = "1234";

        private static DbConnect dbInstance; // Variable para almacenar la única instancia de la clase
        private static Connection con;

        // Constructor vacío privado para evitar la instanciación directa
        private DbConnect() {
        }

        // Método estático para obtener la instancia única (Singleton)
        public static DbConnect getInstance() {
            if (dbInstance == null) {
                dbInstance = new DbConnect();
            }
            return dbInstance;
        }

        // Método estático para obtener la conexión a la base de datos
        public Connection getConnection() throws SQLException {
            if (con == null || con.isClosed()) {
                con = DriverManager.getConnection(JDBC_URL, USUARIO, PASSWORD);
            }
            return con;
        }
    }
    ```

=== "Test.java"
    ```java
    public class Test {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int opcion = 0;
            PeliculasRepository peliculasDAO = new PeliculasRepository();
            DirectoresRepository directoresDAO = new DirectoresRepository();

            try (Connection con = DbConnect.getInstance().getConnection()) {
                do {
                    System.out.println("\n MENÚ: ");
                    System.out.println("1. Mostrar todos los directores");
                    System.out.println("2. Mostrar todas las peliculas");
                    System.out.println("3. Añadir un director");
                    System.out.println("4. Aumentar premios a un director (filtrado por nombre)");
                    System.out.println("5. Eliminar un director (filtrado por id)");
                    System.out.println("6. Mostrar todas las peliculas de un genero");
                    System.out.println("7. Mostrar todas las peliculas de un director (filtrado por nombre)");
                    System.out.println("8. Eliminar un director y todas sus peliculas");
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
                        case 6:
                            //Realizar acciones necesarias

                            break;
                        case 7:
                            //Realizar acciones necesarias

                            break;
                        case 8:
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
        }
    }
    ```

</details>


---

[📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut07/ut07ac_exam_8f4KfP0gQ2.html)
