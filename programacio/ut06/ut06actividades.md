[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT6 Completa](../ut6-fitxers-streams.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut06/ut06actividades.html)

[⬅️ Anterior: 6.5 Manejo del sistema de ficheros y carpetas (File / NIO)](../ut06/ut0605.md) | [➡️ Següent: Retos de programación UT6](../ut06/ut06retos.md)

---

# Actividades UT06


> 💻 **Empaquetar actividades**
>
> Empaqueta las actividades, dentro de la carpeta **`ut06/bloqueX`**


---

## Bloque 6.0

### Actividad 01

Actividad **`A01_leeEdad`**

Escribir un programa que solicite al usuario su edad y, utilizando directamente `Scanner`, la lea de teclado y muestre por pantalla un mensaje del estilo "Su edad es 32 años".

### Actividad 02

Actividad **`A02_leeEdad`**

Repite la *Actividad 01* utilizando un `BufferedWriter` para escribirlo en un archivo llamado *edad.txt*.

### Actividad 03

Actividad **`A03_notas`**

Escribir un programa que almacene en un fichero las notas de (máximo) 20 alumnos. El programa tendrá el siguiente funcionamiento:

- En el fichero se guardarán como máximo 20 notas, pero se pueden guardar menos. El proceso de introducción de notas (y en consecuencia, el programa) finalizará cuando el usuario introduzca una nota no válida (menor que cero o mayor que 10).
- Al incio de la ejecución se pedirá al usuario el nombre que desea que tenga el archivo.
- Al finalizar la entrada de notas, se mostraran todas las introducidas por pantalla (leyendolas del mismo archivo).

### Actividad 04

Actividad **`A04_informacionFicheros`**

Implementa un programa que pida al usuario introducir por teclado una ruta del sistema de archivos (por ejemplo, `C:/Windows` o `Documentos`) y muestre información sobre dicha ruta (ver función más abajo). El proceso se repetirá una y otra vez hasta que el usuario introduzca una ruta vacía (tecla *intro*). Deberá manejar las posibles excepciones.

Necesitarás crear la función `void muestraInfoRuta(File ruta)` que dada una ruta de tipo `File` haga lo siguiente:

- Si es un archivo, mostrará por pantalla el nombre del archivo.
- Si es un directorio, mostrará por pantalla la lista de directorios y archivos que contiene (sus nombres).
- Si el path no existe lanzará un `FileNotFoundException`.

### Actividad 05

Actividad **`A05_informacionFicheros2`**

Partiendo de una copia del programa anterior, modifica la función `muestraInfoRuta`:

- En el caso de un directorio, mostrará la lista de directorios y archivos en orden alfabético. Es decir, primero los directorios en orden alfabético y luego los archivos en orden alfabético. Te será útil `Arrays.sort()`.
- Añade un segundo argumento `boolean info` que cuando sea `true` mostrará, junto a la información de cada directorio o archivo, su tamaño en bytes y la fecha de la última modificación. Cuando `info` sea `false` mostrará la información como en el Actividad anterior.

### Actividad 06

Actividad **`A06_escribirFichero2`**

Empaqueta toda esta actividad en: **`ut06/actividades/ce5d/`****gestionaLibros**

- (`Autor`) Crea la clase autor, con los atributos *nombre*, *año de nacimiento* y *nacionalidad*. Incorpora un constructor que reciba todos los datos y el método `toString()`.
- (`Libro`) Crea la clase Libro, con los atributos *titulo*, *año de edición* y *autor* (Objeto de la clase autor). Incorpora un constructor que reciba todos los datos y el método `toString()`.
- Escribe un programa (`GuardaLibros`) que cree tres libros y los almacene en el fichero `biblioteca.obj`.

> **Nota**: Las clases deberán implementar el interfaz `Serializable`.

### Actividad 07

Escribe un programa de nombre `LeeLibros`que lea los objetos del fichero `biblioteca.obj` y los muestre por pantalla.

### Actividad 08

Escribe un programa que, usando las clases `FileReader` y `FileWriter`:

- Escriba los caracteres de tu nombre en un fichero ( **nombre.txt** ).
- Lea el fichero creado y lo muestre por pantalla.
- Si abrimos el fichero creado con un editor de textos, ¿su contenido es legible?

### Actividad 09

Escribe un programa que, usando las clases `FileOutputStream` y `FileInputStream`,

- Escriba los caracteres de tu nombre en un fichero y los vaya añadiendo (`nombres.log`).
- Lea el fichero creado y lo muestre por pantalla.
- Si abrimos el fichero creado con un editor de textos, ¿su contenido es legible?

### Actividad 10

Escribe un programa que, utilizando entre otras la clase `DataOutputStream`, almacene en un fichero llamado `personas.dat` la información relativa a una serie de personas que va introduciendo el usuario desde teclado:

- `Nombre` (String)
- `Edad` (entero)
- `Peso` (double)
- `Estatura` (double)

La entrada del usuario terminará cuando se introduzca un nombre vacío.

> **Nota**: Utiliza la clase `Scanner` para leer desde teclado y los métodos `writeDouble`, `writeInt` y `writeUTF` de la clase `DataOutputStream` para escribir en el fichero.

Al finalizar el programa, abre el fichero resultante con un editor de texto ¿La información que contiene es legible?

### Actividad 11

Realizar un programa que lea la información del fichero `personas.dat` y la muestre por pantalla. Para determinar que no quedan más datos en el fichero podemos capturar la excepción `EOFException` .

### Actividad 12

Modifica el programa anterior para que el usuario, al comienzo del programa, pueda elegir si quiere añadir datos al fichero o sobre escribir la información que contiene.

### Actividad 13

> Para esta actividad utilizaremos el fichero de texto **[productos.txt](../docsActividades/productos.txt)**. Descárgalo en la carpeta `src/test`.

Se desea simular el funcionamiento de una máquina expendedora. Se trata de una expendedora sencilla que, por el momento, será capaz de dispensar únicamente un producto.

Su funcionamiento, a grandes rasgos, es el siguiente:

1. El cliente introduce dinero en la máquina. Al dinero introducido lo llamaremos `credito`.
2. Selecciona el producto que quiere comprar (ya hemos comentado que por el momento habrá un solo producto).
3. Si hay stock del producto seleccionado, la máquina dispensa el artículo elegido y devuelve el importe sobrante (diferencia entre el crédito introducido y el precio del producto).

Durante el proceso se pueden producir diversas incidencias, como por ejemplo, que el cliente no haya introducido suficiente crédito para comprar el producto, que no quede producto o que no haya cambio suficiente para la devolución. La máquina también da la posibilidad de solicitar la devolución del crédito sin realizar la compra.

**A**) Diseñar la **clase `Expendedora`** con los atributos y métodos que se describen a continuación.

- Atributos (privados):
- `credito`: Cantidad de dinero (en euros) introducida por el cliente.
- `stock`: Número de unidades que quedan en la máquina disponibles para la venta. Se reducirá con cada nueva venta.
- `precio`: Precio del único artículo que dispensa la máquina (en euros).
- `cambio`: Cambio del que dispone la máquina. El cambio disponible se reduce cada vez que se devuelve al cliente la diferencia entre el crédito introducido y el precio del producto comprado. El cambio nunca se ve incrementado por las compras de los clientes.
- `recaudación`: Representa la suma de las ventas realizadas por la máquina (en euros). Se ve incrementada con cada nueva compra.
- Métodos:
- Constructor: **`public Expendedora (double cambio, int stock, double precio)`**: Crea la expendedora inicializando los atributos cambio, stock y precio con los valores indicados en los parámetros). El crédito y la recaudación serán cero.
- Consultores:

    - **Métodos consultores** para los atributos crédito, cambio, y recaudación.
      > **Los consultores para el stock y el precio** los haremos previendo que en el futuro la máquina pueda expender más de un tipo de producto. Para consultar el stock y el precio se indicará como parámetro el número de producto que se quiere consultar aunque, por el momento se ignorará el valor de dicho atributo.
      >   - **`public int getStock (int producto)`**: Devuelve el stock disponible del producto indicado. En esta versión simplificada se devolverá el valor del atributo stock, sea cual sea el valor de producto (no hacer caso, por ahora, del argumento `producto`).
      >   - **`public double getPrecio (int producto)`**: Devuelve el precio del producto indicado. En esta versión simplificada se devolverá el valor del atributo precio , sea cual sea el valor de producto (no hacer caso, por ahora, del argumento `producto`).
    - Modificadores: Para simplificar, consideramos que los atributos de la máquina solo van a cambiar por operaciones derivadas de su funcionamiento, por lo que **no proporcionamos modificadores públicos**.
    - Otros métodos:
    - **`public String toString()`**: Devuelve un `String` de la forma:

      ```java
        Crédito: 3.0 euros
        Cambio: 12.73 euros
        Stock: 12 unidades
        Recaudación: 127.87 euros
      ```
    - **`public void introducirDinero(double importe)`**: Representa la operación mediante la cual el cliente añade dinero (crédito) a la máquina. Esta operación incrementa el crédito introducido por el cliente en el importe indicado como parámetro.
    - **`public double solicitarDevolucion()`**: Representa la operación mediante la cual el cliente solicita la devolución del crédito introducido sin realizar la compra. El método devuelve la cantidad de dinero que se devuelve al cliente.
    - **`public double comprarProducto(int producto) throws NoHayCambioException, NoHayProductoException, CreditoInsuficienteException`**: Representa la operación mediante la cual el cliente selecciona un producto para su compra. El método devuelve la cantidad de dinero que se devuelve al cliente.
        Si no se produce ninguna situación inesperada, se reduce el stock del producto, se devuelve el cambio, se pone el crédito a cero y se incrementa la recaudación.
        Si la venta no es posible se lanzará la excepción correspondiente a la situación que impide completar la venta.

**B**) La **clase `Producto`** permite representar uno de los artículos de los que vende una máquina expendedora. Para ello utilizaremos tres atributos privados `nombre` (`String`), `precio` (`double`) y `stock` (`int`), y los siguientes métodos:

- **`public Producto(String nombre, double precio, int stock)`** Constructor que inicializa el producto con los parámetros indicados.
- Consultores de los tres atributos: **`getNombre`**, **`getPrecio`** y **`getStock`**.
- **`public int decrementarStock()`**: decrementa en 1 el stock del producto y devuelve el stock resultante.

**C**) La **clase `TestExpendedora`** sirve para provar los métodos desarrollados en las clases `Expendedora` y `Producto`.

- (punto 1) Crea un Objeto de tipo `Expendedora` e inicializalo con: 12 unidades de stock, 5 euros de cambio y un precio de 3.75 euros. Muestra por pantalla su estado actual.
- (punto 2) Simula la introducción por parte del cliente de un billete de 5 euros y muestra el estado de la máquina `Expendedora`.
- (punto 3) Simula la compra de un `producto` y muestra la cantidad devuelta.
- (punto 4) Simula la introducción de una moneda de 2 euros y solicita la devolución sin realizar ninguna compra y muestra la cantidad devuelta.
- (punto 5) Intenta realizar una compra sin tener suficiente crédito y gestiona la excepción.
- (punto 6) Crea otro objeto de tipo `Expendedora` que inicialmente tenga 0 unidades de stock (el resto de valores a tu gusto), simula la compra de un producto teniendo suficiente crédito y cambio. Gestiona la excepción.
- (punto 7) Crea un último objeto de tipo `Expendedora` que inicialmente tenga 0 euros de cambio (el resto de valores a tu gusto), simula la compra de un producto para el que la máquina tenga que devolver algún importe, gestiona la excepción.
- (punto 8) Muestra las recaudaciones para las 3 máquinas expendedoras.

**D**) La **clase `Surtido`** representa una colección de productos. Para ello se usará un atributo `listaProductos`, array de `Productos`. El array se rellenará con los datos de productos extraídos de un fichero de texto y, una vez creado el surtido no será posible añadir o quitar productos. Así, el array de productos estará siempre completo y no es necesario ningún atributo que indique cuántos productos existen en el array.

Se implementarán los siguientes métodos:

- **`public Surtido() throws FileNotFoundException`**: crea el surtido con los datos de los productos que se encuentran en el fichero **[productos.txt](../docsActividades/productos.txt)**. El fichero tiene el siguiente formato:

```java
<nº de productos>
<nombre de producto> <precio> <stock>
<nombre de producto> <precio> <stock>
<nombre de producto> <precio> <stock>
...
```

Como vemos, la primera línea del fichero indica el número de productos que contiene el surtido. Este dato lo usaremos para dar al array de productos el tamaño adecuado.

- **`public int numProductos()`**: devuelve el número de productos que componen el surtido.
- **`public Producto getProducto(int numProducto)`**: devuelve el producto que ocupa la posición `numProducto` del surtido. La primera posición válida es la `1`. La posición `0` no se utiliza.
- **`public String[] getNombresProductos()`**: devuelve un array con los nombres de los productos. La posición `0` del array no se utilizará (será `null`).

**E**) Crea una copia de la **clase** `Expendedora` y llámala **`ExpendedoraSurtido`**. Añadir los atributos y hacer los cambios necesarios en la clase para que sea capaz de dispensar varios productos usando la nueva clase `Surtido`. Por ejemplo, ya no tienen sentido los atributos stock y precio ya que pertenecen al `Surtido`.

Añade también el método `public String toStringSurtido()`, que muestre por pantalla el listado de productos con su nombre, precio y stock para mostrar al cliente que productos puede elegir. El código del producto coincidirá con su posición al leer el surtido.

**F**) Crea una copia de la **clase** `TestExpendedora` y renómbrala como **`TestExpendedora2`** para adaptarla a los cambios hechos en la clase `Expendedora` y usando la nueva posibilidad de comprar diferentes productos y usando solamente un único objeto `Expendedora`. Al final en lugar de mostrar la recaudación de las 3 máquinas expendedoras, muestra solo la de la única que hay y muestra el surtido.

### Actividad 14

> Para esta actividad utilizaremos el fichero de texto **[AirVostrum.txt](../docsActividades/AirVostrum.txt)**. Descárgalo en la carpeta `src/test`.

Se desea realizar una aplicación `GestorVuelos` para gestionar la reserva y cancelación de vuelos en una agencia de viajes. Dicha agencia trabaja únicamente con la compañía aérea *AirVostrum*, que ofrece vuelos desde/hacia varias ciudades de Europa. Se deben definir las clases que siguen, teniendo en cuenta que sus atributos serán privados y sus métodos sólo los que se indican en cada clase.

**A)** Implementación de la **clase `Vuelo`**, que permite representar un vuelo mediante los atributos:

- `identificador` (`String`)
- `origen` (`String`)
- `destino` (`String`)
- `hSalida` (un tipo que te permita controlar la hora, no es un `String` ni un `int`, etc.)
- `hLlegada` (un tipo que te permita controlar la hora, no es un `String` ni un `int`, etc.)
- Además, cada vuelo dispone de 50 asientos, es decir, pueden viajar, como mucho, 50 pasajeros en cada vuelo. Para representarlos, se hará uso de `asiento`, un array de `String` (nombres de los pasajeros) junto con un atributo `numP` que indique el número actual de asientos reservados. Si el asiento `i` está reservado, `asiento[i]` contendrá el nombre del pasajero que lo ha reservado. Si no lo está, `asiento[i]` será `null`. En el array `asiento`, las posiciones impares pertenecen a asientos de ventanilla y las posiciones pares, a asientos de pasillo (la posición 0 no se utilizará).

En esta clase, se deben implementar los siguientes métodos:

- **`public Vuelo(String id, String orig, String dest, LocalTime hsal, LocalTime hlleg)`**: Constructor que crea un vuelo con identificador, ciudad de origen, ciudad de destino, hora de salida y hora de llegada indicados en los respectivos parámetros, y sin pasajeros.
- **`public String getIdentificador()`**: Devuelve el `identificador`
- **`public String getOrigen()`**: Devuelve `origen`.
- **`public String getDestino()`**: Devuelve `destino`.
- **`public boolean hayLibres()`**: Devuelve `true` si quedan asientos libres y `false` si no quedan.
- **`public boolean equals(Object o)`**: Dos vuelos son iguales si tienen el mismo identificador.
- **`public int reservarAsiento(String pas, char pref) throws VueloCompletoException`**: Si el vuelo ya está completo se lanza una excepción. Si no está completo, se reserva al pasajero `pas` el primer asiento libre en `pref`. El carácter `pref` será '`V`' o '`P`' en función de que el pasajero desee un asiento de ventanilla o de pasillo. En caso de que no quede ningún asiento libre en la preferencia indicada (`pref`), se reservará el primer asiento libre de la otra preferencia. El método devolverá el número de asiento que se le ha reservado. Este método hace uso del método privado `asientoLibre`, que se explica a continuación.
- **`private int asientoLibre(char pref)`**: Dado un tipo de asiento `pref` (pasillo '`P`' o ventanilla '`V`'), devuelve el primer asiento libre (el de menor numero) que encuentre de ese tipo. O devuelve `0` si no quedan asientos libres de tipo `pref`.
- **`public void cancelarReserva(int numAsiento)`**: Se cancela la reserva del asiento `numasiento`.
- **`public String toString()`**: Devuelve una `String` con los datos del vuelo y los nombres de los pasajeros, con el siguiente formato:

```java
Vuelo:
  AV101 Valencia París 19:05:00 21:00:00
Pasajeros (23):
  Asiento 1: Sonia Dominguez
  …
  Asiento 23: Fernando Romero
```

**B)** Diseñar e implementar una **clase `TestVuelo`** que permita probar la clase `Vuelo` y sus métodos. Para ello se desarrollará el método `main` en el que:

- Se cree el vuelo IB101 de Valencia a París, que sale a las 19:05 y llega a las 21:00
- Reservar:
- Un asiento de ventanilla a "Miguel Fernández"
- Un asiento de ventanilla a "Ana Folgado"
- Un asiento de pasillo a "David Más"
- Mostrar el vuelo por pantalla.
- Cancelar la reserva del asiento que indique el usuario.

**C)** Implementación de la **clase `Compañía`** para representar todos los vuelos de una compañía aérea. Una Compañía tiene un nombre y puede ofrecer, como mucho, 10 vuelos distintos. Para representarlos se utilizará `listaVuelos`, un array de objetos `Vuelo` junto con un atributo `numVuelos` que indique el número de vuelos que la compañía ofrece en un momento dado. Las operaciones de esta clase son:

- **`public Compania(String n) throws FileNotFoundException`**: Constructor de una compañía de nombre `n`. Cuando se crea una compañía, se invoca al método privado `leeVuelos()` para cargar la información de vuelos desde un fichero. Si el fichero no existe, se propaga la excepción `FileNotFoundException`
- **`private void leeVuelos() throws FileNotFoundException`**: Lee desde un fichero toda la información de los vuelos que ofrece la compañía y los va almacenando en el array de vuelos `listaVuelos`. El nombre del fichero coincide con el nombre de la compañía y tiene extensión `.txt`. La información de cada vuelo se estructura en el fichero como sigue:

```java
<Identificador>
<Origen>
<Destino>
<Hora de salida>
<Minuto de salida>
<Hora de llegada>
<Minuto de llegada>
...
...
```

Si el fichero no existe, se propaga la excepción `FileNotFoundException`.

- **`public Vuelo buscarVuelo(String id) throws ElementoNoEncontradoException`**: Dado un identificador de vuelo `id`, busca dicho vuelo en el array de vuelos `listaVuelos`. Si lo encuentra, lo devuelve. Si no, lanza `ElementoNoEncontradoException`.
- **`public void mostrarVuelosIncompletos(String o, String d)`**: Muestra por pantalla los vuelos con origen `o` y destino `d`, y que tengan asientos libres. Por ejemplo, vuelos con asientos libres de la compañía AirVostrum con origen Milán y destino Valencia:

```java
AirVostrum - Vuelo AV201 - Milán València - 14:25:00 16:20:00
AirVostrum - Vuelo AV202 - Mílán València - 21:40:00 23:35:00
```

**D)** En la **clase `GestorVuelos`** se probará el comportamiento de las clases anteriores. En esta clase se debe implementar el método `main` en el que, por simplificar, se pide únicamente:

- La creación de la compañía aérea `AirVostrum`. Se dispone de un fichero de texto **[AirVostrum.txt](../docsActividades/AirVostrum.txt)**, con la información de los vuelos que ofrece.
- Reserva de un asiento de ventanilla en un vuelo de *València* a *Milán* por parte de *Manuel* *Soler Roca*. Para ello:
- Mostraremos vuelos con origen *València* y destino *Milán*, que no estén completos.
- Pediremos al usuario el identificador del vuelo en que quiere hacer la reserva.
- Buscaremos el vuelo que tiene el identificador indicado. Si existe realizaremos la reserva y mostraremos un mensaje por pantalla. En caso contrario mostraremos un mensaje de error por pantalla.

---

[⬅️ Anterior: 6.5 Manejo del sistema de ficheros y carpetas (File / NIO)](../ut06/ut0605.md) | [➡️ Següent: Retos de programación UT6](../ut06/ut06retos.md) | [📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut06/ut06actividades.html)
