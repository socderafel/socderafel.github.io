---
layout: default
title: "Actividades prácticas UT3 — Programació (1r DAW)"
course_root: ".."
badge: "1a / 2a Avaluació · RA6 · Arrays, ArrayList, HashMap i Recursivitat"
prev_url: "../ut03/ut0305.html"
prev_label: "⬅️ 3.4 Algoritmos recursivos (Recursividad)"
next_url: "../ut03/ut03retos.html"
next_label: "Retos de programación UT3 ➡️"
---

# Actividades UT03

> **📌 Empaquetar actividades**
> Empaqueta las actividades, dentro de la carpeta **`ut03/bloqueX`**

---

## Bloque 3.0 - Arrays

### Actividad 1

Crea un programa que pida al usuario el número de personas participantes en la comida de Navidad. A continuación, el programa pedirá el nombre de cada una de dichas personas.

Finalmente, saca por pantalla todos los nombres, usando la estructura `foreach`.

### Actividad 2

Crea un programa que cree un array de 15 números generados aleatoriamente (entre el 1 y el 100).

A continuación, saca por pantalla la *suma*, el *máximo*, el *mínimo*, la *media* de los números almacenados y cuántos números *pares* hay.

> Para generar los números aleatorios puedes usar `Math` o `Random`

### Actividad 3

Amplia el programa anterior para que muestre también:

- La posición (índice) en la que se han encontrado el *màximo* y el *mínimo*.
- La suma del primer y último elemento del array.
- El mensaje *"existe 50"* en caso de que el array incluya, al menos una vez, el número 50.

### Actividad 4

Crea un programa que cree un array de 15 números generados aleatoriamente (entre el 1 y el 50).

A continuación, el programa pedirá un número al usuario y comprobará si está o no en el array. El proceso se repetirá hasta que el usuario consiga adivinar uno de los números del array.

### Actividad 5

Crea un programa que cree un array de 15 números enteros.

Después comprueba si está ordenado de forma ascendente.

> El array estará ordenado de forma ascendente si **siempre** se cumple que el elemento con índice `i` es menor que el elemento con índice `i+1`.

### Actividad 6

Crea un programa que pida al usuario números enteros para crear un array de 10 valores **no repetidos**.

Para ello, cada vez que el usuario introduzca un valor, se deberá comprobar si esté ya existe en el array. En caso de que exista, no se almacenará.

**El proceso debe repetirse hasta que se consigan almacenar 10 elementos en el array**

### Actividad 7

Crea un programa con los siguientes métodos:

- `public static int[] invertir (int[] v)`: devolverá el array en orden inverso.
- `public static int[] rotarDerecha (int[] v)`: rotará todos los elementos del array una posición a la *derecha*.
- `public static int[] rotarIzquierda (int[] v)`: como el anterior, pero esta vez a la *izquierda*.

Pruebalos todos ellos desde el método `main`.

### Actividad 8

Crea un método que, dados dos arrays de Strings, compruebe si todos sus elementos son iguales: `public static boolean sonIguales (String[] v1, String[] v2)`.

> Recuerda que puedes comparar dos cadenas de texto con la función `cadena1.equals(cadena2)`.

### Actividad 9

Crea un programa que genere un array de 100 posiciones con números aleatorios entre el 1 y el 300. A continuación, se pedirá un dígito (del 0 al 9) al usuario.

El programa creará un nuevo array que almacenará aquellos números del primer array que acaben en el dígito introducido por el usuario y lo mostrará por pantalla.

> Por ejemplo, si el dígito introducido es un 5, el nuevo array tendrá números acabados en 5, como 155, 205, 195, 65, 5, 15, etc.

> **📌 Ayuda**
> Para obtener el último dígito de un número entero usa la expresión: `int ultimo = numero % 10;`.

> **📌 Solución**
> ```java
> import java.util.Scanner;
>
> public class Act09 {
>     public static void main(String[] args) {
>         Scanner sc = new Scanner(System.in);
>
>         int numeros[] = new int[100];
>         int digito, contador=0;
>
>         //rellenar array
>         for (int i = 0; i < numeros.length; i++) {
>             numeros[i] = (int) (Math.random()*300)+1;
>         }
>
>         //Pedir digito
>         System.out.println("Introduce un digito del 0 al 9");
>         digito = sc.nextInt();
>
>         //*
>         //  Contar la cantidad de números de array
>         // que acaban en el digito, para saber la
>         // longitud del nuevo array.*/ 
>         for (int num : numeros) {
>             if(num % 10 == digito){
>                 contador++;
>             }
>         }
>
>         //Crear nuevo array
>         int solucion[] = new int[contador];
>         int j=0;
>         for (int i = 0; i < numeros.length; i++) {
>             if (numeros[i] % 10 == digito) {
>                 solucion[j] = numeros[i];
>                 j++;
>             }
>         }
>
>         //Mostrar el nuevo array
>         System.out.println("Números que terminan en " + digito + ": ");
>         for (int sol : solucion) {
>             System.out.print(sol + " ");
>         }
>
>     }
> }
> ```

### Actividad 10

Crea un programa que pida al usuario el número de alumnos en un aula. A continuación, creará dos arrays, uno de `String` en el que almacenará los nombre de los alumnos, otro de `double` en el que almacenará las notas.

El programa pedirá al usuario el nombre y nota media de cada uno de los alumnos y los irá almacenando en el array correspondiente.

Una vez almacenados todos los datos, los sacará por pantalla:

```java
Pepe: 5.86
Lucia: 9.32
Vicente: 7.89
Maria: 5.43
Ana: 4.5
Carlos: 8.25
```

### Actividad 11

Crea el método `public static int[] seleccion (int[] v, int n)` que devolverá un nuevo array con los elementos de `v` que sean *pares* y mayores que `n`.

Comprueba su funcionamiento desde el método `main` generando un array `test` de 100 posiciones con números aleatorios entre el 1 y el 200.

> **📌 Solución**
> ```java
> import java.util.Scanner;
>
> public class Act11 {
>     public static int[] seleccion(int[] v, int n){
>         //Calcular número elementos nuevo array
>         int contador = 0;
>         for (int i : v) {
>             if ((i%2==0) && (i>n)) {
>                 contador++;
>             }
>         }
>
>         //Crear y rellenar nuevo array
>         int solucion[] = new int[contador];
>         int j=0;
>         for (int i = 0; i < v.length; i++) {
>             if ((v[i] % 2 == 0) && (v[i] > n)) {
>                 solucion[j] = v[i];
>                 j++;
>             }
>         }
>
>         return solucion;
>     }
>
>     public static void main(String[] args) {
>         Scanner sc = new Scanner(System.in);
>
>         int test[] = new int[100];
>         for (int i = 0; i < test.length; i++) {
>             test[i] = (int) (Math.random()*200)+1;
>         }
>
>         System.out.println("Introduce un numer del 1 al 200: ");
>         int n = sc.nextInt();
>         int solucion[] = seleccion(test, n);
>
>         System.out.println("Array solución: ");
>         for (int sol : solucion) {
>             System.out.print(sol + " ");
>         }
>     }
> }
> ```

### Actividad 12

Realizar un programa que defina un array de 10 enteros, a continuación lo inicialice con valores aleatorios (del 1 al 10) y posteriormente muestre en pantalla cada elemento del array junto con su cuadrado y su cubo.

**Para mostrar los elementos se debe utilizar la estructura `foreach`.**

### Actividad 13

Crea un programa que pida al usuario el número de su DNI y calcule la letra.

> **📌 Ayuda**
> En España, la letra del DNI se calcula a partir del número del DNI utilizando una secuencia fija de letras.
>
> La secuencia de letras es la siguiente:
>
> Código Java
>
> 📋 Copiar
> JAVA
>
> `char[] letras = {'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'};`
>
> Cada letra ocupa una posición concreta dentro de un array de carácteres.
>
> El cálculo se realiza de la siguiente forma:
>
> 1. Se divide el número del DNI entre 23.
> 2. Se obtiene el resto de la división ( `%` ).
> 3. Ese resto indica la posición del array donde se encuentra la letra correspondiente.

### Actividad 14

Crea una clase llamada `Alumno` que contenga los atributos `nombre`, `edad`, `notaMedia`. Incluye además, el constructor que reciba los tres atributos, los getters y setters y el método `mostrarDatos()` que muestre toda la información del alumno.

En el método main:

1. Crea un array de tipo Alumno con capacidad para 15 alumnos.
2. Pide al usuario los datos de cada uno de los alumnos e inicializa el objeto Alumno de cada posición del array.
3. Recorre el array de alumnos (con `foreach` ) y muestra la información de cada uno de los objetos almacenados.

> **📌 Solución**
> ```java
> import java.util.*;
>
> public class Alumno {
>
>     private String nombre;
>     private int edad;
>     private double notaMedia;
>
>     // Constructor
>     public Alumno(String nombre, int edad, double notaMedia) {
>         this.nombre = nombre;
>         this.edad = edad;
>         this.notaMedia = notaMedia;
>     }
>
>     // Getters
>     public String getNombre() {
>         return this.nombre;
>     }
>
>     public int getEdad() {
>         return this.edad;
>     }
>
>     public double getNotaMedia() {
>         return this.notaMedia;
>     }
>
>     // Setters
>     public void setNombre(String nombre) {
>         this.nombre = nombre;
>     }
>
>     public void setEdad(int edad) {
>         this.edad = edad;
>     }
>
>     public void setNotaMedia(double notaMedia) {
>         this.notaMedia = notaMedia;
>     }
>
>     // Método para mostrar la información del alumno
>     public void mostrarInfo() {
>         System.out.println(
>             "Nombre: " + this.nombre +
>             ", Edad: " + this.edad +
>             ", Nota media: " + this.notaMedia
>         );
>     }
>
>     public static void main(String[] args) {
>         Scanner sc = new Scanner(System.in);
>         String nombre;
>         int edad;
>         double nota;
>
>         //Crear el array de objetos
>         Alumno[] alumnos = new Alumno[15];
>
>         //Inicializar los objetos
>         for(int i = 0; i < 15; i++){
>             System.out.println("Introduce el nombre del alumno: ");
>             nombre = sc.next();
>             System.out.println("Introduce la edad del alumno: ");
>             edad = sc.nextInt();
>             System.out.println("Introduce la nota del alumno: ");
>             nota = sc.nextDouble();
>
>             alumnos[i] = new Alumno(nombre, edad, nota);
>         }
>
>         //Mostrar todos los alumnos con foreach
>         System.out.println("\nListado de alumnos (foreach):");
>         for (Alumno a : alumnos) {  !
>             a.mostrarInfo();
>         }
>     }
> }
> ```

### Actividad 15

Modifica la actividad anterior para que en el `main` muestre:

1. La información de todos los alumnos.
2. El nombre y la edad de aquellos alumnos **mayores de edad** .
3. El nombre y la nota de los alumnos **aprobados** .
4. La nota media de los alumnos almacenados.
5. El alumno con la nota más alta.
6. El alumno con la nota más baja.

### Actividad 16

Crea una clase llamada `Producto` que contenga los atributos `nombre`, `precio`, `stock`. Incluye además, el constructor que reciba los tres atributos, los getters y setters y el método `mostrarDatos()` que muestre toda la información del producto.

En el método main:

1. Crea un array de tipo Producto con capacidad para 10 productos.
2. Pide al usuario los datos de cada uno de los productos y almacenalo en el array.
3. Recorre el array (con `foreach` ) y muestra la información de cada uno de los objetos almacenados.

### Actividad 17

Reutiliza la clase `Producto` de la actividad anterior.

En el método main:

1. Crea un array de tipo Producto con capacidad para 3 productos.
2. Pide al usuario los datos de cada uno de los productos y almacenalo en el array.
3. Crea un nuevo array de productos `copiaProductos` y asigna los elementos del primer array: Código Java 📋 Copiar JAVA `Producto[] copiaProductos = productos;`
4. Cambia el `nombre` y el `stock` de un producto del array `copiaProductos`.
5. Muestra todos los productos del array `productos` usando un `foreach` y responde:
  - ¿Qué pasa con el `nombre` y el `stock` que has cambiado en el segundo array? ¿Han cambiado tambien en el array original?
  - Busca información del por qué ocurre esto.

### Actividad 18

Repite la actividad anterior, pero esta vez haz la copia del array del siguiente modo: 
 

Código Java

📋 Copiar
JAVA

`Producto[] copiaProductos = new Producto[3];
 for(int i = 0; i < productos.length; i++){
 copiaProductos[i] = new Producto(productos[i].getNombre(), productos[i].getPrecio(), productos[i].getStock());
 }`

Repite los puntos 4 y 5 de la actividad anterior y vuelve a responder a las preguntas planteadas.

### Actividad 19 `Estaturas`

Escribir un programa que lea de teclado la estatura de 10 personas y las almacene en un *array*. Al finalizar la introducción de datos, se mostrarán al usuario los datos introducidos con el siguiente formato:

```java
Persona 1: 1.85 m.
Persona 2: 1.53 m.
...
Persona 10: 1.23 m.
```

### Actividad 20 `Invertir`

Diseñar un método `public static int[] invertirArray(int[] v)`, que dado un array `v` devuelva otro con los elementos en orden inverso. Es decir, el último en primera posición, el penúltimo en segunda, etc.

Desde el método `main` crearemos e inicializaremos un array, llamaremos a `invertirArray` y mostraremos el array invertido.

> Puede ser útil un método que imprima por pantalla un Array `public static void imprimirArray(int[] v)`, y así poder imprimir el Array `inv`.

### Actividad 21 `DosArrays`

Desarrolla los siguientes métodos en los que intervienen dos ar*r*ays y pruébalos desde el método `main`

- `public static double[] sumaArraysIguales (double a[], double b[])` que dados dos arrays de `double` `a` y `b` , del mismo tamaño devuelva un array con la suma de los elementos de `a` y `b` , es decir, devolverá el *array* `{a[0]+b[0], a[1]+b[1], ....}`
- `public static double[] sumaArrays(double a[], double b[])` . Repite el ejercicio anterior pero teniendo en cuenta que `a` y `b` podrían tener longitudes distintas. En tal caso el número de elementos del *array* resultante coincidirá con la longitud del *array* de mayor tamaño.

### Actividad 22 `Rotaciones`

Rotar una posición a la derecha los elementos de un ar*r*ay consiste en mover cada elemento del *array* una posición a la derecha. El último elemento pasa a la posición 0 del array. Por ejemplo si rotamos a la derecha el array `{1,2,3,4}` obtendríamos `{4,1,2,3}`.

- Diseñar un método `public static void rotarDerecha(int v[])`, que dado un *array* de enteros rote sus elementos un posición a la derecha.
- En el método `main` crearemos e inicializaremos un *array* y rotaremos sus elementos tantas veces como elementos tenga el *array* (mostrando cada vez su contenido), de forma que al final el *array* quedará en su estado original. Por ejemplo, si inicialmente el *array* contiene `{7,3,4,2}`, el programa mostrará

```java
Rotación 1: 2 7 3 4
Rotación 2: 4 2 7 3
Rotación 3: 3 4 2 7
Rotación 4: 7 3 4 2
```

- Diseña también un método para rotar a la izquierda y pruébalo de la misma forma.

### Actividad 23 `SumaPostImpar`

Escribir un método que, dado un *array* de enteros, devuelva la suma de los elementos que aparecen tras el primer valor impar. Usar `main` para probar el método.

### Actividad 24

Escribir un programa que pida al usuario el número de alumnos en un aula. A continuación, el programa pedirá la nota de cada uno de esos alumnos, que se almacenará en un array `double notas[]`.

Una vez introducidas todas las notas, el programa calculará y sacará por pantalla: el número total de notas introducidas, la nota media de la clase, la nota más alta y la nota más baja.

### Actividad 25 `MismosValores`

Se desea comprobar si dos arrays de `double` contienen los mismos valores, aunque sea en orden distinto. Para ello se ha escrito el siguiente método, que aparece incompleto:

```java
public static boolean mismosValores(double v1[], double v2[]) {
    boolean encontrado = false;
    int i = 0;
    while (i < v1.length && !encontrado) {
        boolean encontrado2 = false;
        int j = 0;
        while (j < v2.length && !encontrado2) {
            if (v1[?] == v2[?]) {
                encontrado2 = true;
                i++;
            } else {
                ?
            }
        }
        if (encontrado2 == ?) {
            encontrado = true;
        }
    }
    return !encontrado;
}
```

Completa el programa en los lugares donde aparece el símbolo **`?`** .

> Si lo prefieres, implementa tu mismo el programa desde 0.

### Actividad 26 `Dados`

El lanzamiento de un dado es un experimento aleatorio en el que cada número tiene las mismas probabilidades de salir. Según esto, cuantas más veces lancemos el dado, más se igualarán las veces que aparece cada uno de los 6 números. Vamos a hacer un programa para comprobarlo.

- Generaremos un número aleatorio entre *1* y 6 un número determinado de veces (por ejemplo 10.000). Para ello puedes usar la clase `Random`.
- Tras cada lanzamiento incrementaremos un contador correspondiente a la cifra que ha salido. Para ello crearemos un *array* `veces` de 7 componentes, en el que el `veces[1]` servirá para contar las veces que sale un 1, `veces[2]` para contar las veces que sale un 2, etc. *`veces[0]` no se usará*.
- Cada 1.000 lanzamientos mostraremos por pantalla las estadísticas que indican que porcentaje de veces ha aparecido cada número en los lanzamientos hechos hasta ese momento. Por ejemplo:

```java
  Número de lanzamientos: 1000
  1: 16,40%
  2: 18,10%
  3: 15,40%
  4: 16,60%
  5: 18,00%
  6: 15,50%

  Número de lanzamientos: 2000
  1: 16,75%
  2: 17,85%
  3: 15,10%
  4: 15,90%
  5: 17,55%
  6: 16,85%

  ...
```

- Para el número de lanzamientos tope (10.000 en el ejemplo) y para la frecuencia con que se muestran las estadísticas (1.000 en el ejemplo) utilizaremos dos **constantes** enteras, de nombre `LANZAMIENTOS` y `FRECUENCIA` , de esta forma podremos variar de forma cómoda el modo en que probamos el programa.

### Actividad 27 `Notas`

Se dispone de una matriz que contiene las notas de una serie de alumnos en una serie de asignaturas. Cada fila corresponde a un alumno, mientras que cada columna corresponde a una asignatura. Desarrollar métodos para:

1. Imprimir las notas alumno por alumno.
2. Imprimir las notas asignatura por asignatura.
3. Imprimir la media de cada alumno.
4. Imprimir la media de cada asignatura.
5. Indicar cual es la asignatura más fácil, es decir la de mayor nota media.
6. ¿Hay algún alumno que suspenda todas las asignaturas?
7. ¿Hay alguna asignatura en la que suspendan todos los alumnos?

Generar la matriz (al menos 5x5) en el método main, rellenarla, y comprobar los métodos anteriores.

### Actividad 28 `TemperaturaMes`

Se dispone de una estructura de datos bidimensional irregular (array de arrays) que almacena las temperaturas diarias registradas a lo largo de varios meses. Cada fila corresponde a un mes, cada columna representa un día del mes *(No todos los meses tienen la misma cantidad de días, cada fila tenrdrá una longitud distinta)*.

Desarrollar los métodos para:

1. Imprimir las temperaturas mes por mes.
2. Calcular e imprimir la temperatura media de cada mes.
3. Indicar cuál es el mes más cálido.
4. Comprobar si existe un mes en el que todas las temperaturas estén por debajo de un valor dado por el usuario.

Generar el array bidimensional en el método `main`, con al menos 5 meses, cada uno con un número de días distinto, rellenarlo, y comprobar los métodos anteriores.

---

## Bloque 3.1 - La librería Arrays

### Actividad 29

Crea un programa que cree un Array 15 números enteros aleatorios. Muestralos por pantalla usando `Arrays.toString(array)`.

### Actividad 30

Crea un programa que cree un Array 15 números enteros aleatorios. Ordenalos usando `Arrays.sort(array)`.

Repite la operación con un array de `double` y con un array de `String`.

Saca los diferentes resultados por pantalla.

### Actividad 31

Crea un programa que cree un Array 5 números enteros aleatorios entre el 1 y el 10. Ordenalos usando `Arrays.sort(array)`.

A continuación, pide al usuario un número por pantalla (del 1 al 10), e indica si se encuentra o no en el array usando la función `Arrays.binarySearch(array, numero)`.

> La función `Arrays.binarySearch()`solo funciona con arrays **previamente ordenados**.

### Actividad 32

Crea un programa que cree dos arrays de enteros. Después comprueba si estos son exactamente iguales usando la función `Arrays.equals(array1, array2)`.

### Actividad 33

Crea un programa que cree un array de enteros de 7 posiciones. A continuación, rellenalo todo con el mismo valor (por ejemplo, el 5), usando la función `Arrays.fill(array, valor)`. Saca el resultado por pantalla.

### Actividad 34

Crea un programa que cree un Array 15 números enteros aleatorios. Después crea una copia exacta a este usando la función `Arrays.copyOf(array)`.

Muestra ambos arrays por pantalla.

### Actividad 35

Modifica el programa anterior para que copie solo los 10 primeros números del array original. Usa la función `Arrays.copyOfRange(array, inicio, fin)`.

Muestra ambos arrays por pantalla.

---

## Bloque 3.2 - La librería ArrayList

### Actividad 36

Crea un programa que cree un `ArrayList<Integer>` y añada 15 números enteros aleatorios.

Muestra el contenido completo del ArrayList por pantalla.

### Actividad 37

Crea un programa que cree un `ArrayList<Integer>` con 15 números enteros aleatorios. Ordénalo usando `Collections.sort(lista)`.

Repite la operación con:
- Un `ArrayList<Double>`
- Un `ArrayList<String>`

Muestra los resultados por pantalla.

### Actividad 38

Crea un programa que genere un `ArrayList<Integer>` con 5 números aleatorios entre 1 y 10.

Ordénalo usando `Collections.sort(lista)`.

A continuación, pide al usuario un número entre 1 y 10 e indica si se encuentra o no en la lista usando `lista.contains(numero)`

### Actividad 39

Crea dos ArrayList.

Después comprueba si son exactamente iguales usando el método `lista1.equals(lista2)`.

Muestra el resultado por pantalla.

### Actividad 40

Crea un programa que genere un ArrayList con 7 valores aleatorios entre 1 y 100.

Rellena otro ArrayList con los mismos valores, pero en orden inverso.

Para ello, puedes usar el método:Collections.reverse(lista);

Muestra ambos ArrayList por pantalla.

### Actividad 41

Crea un `ArrayList<Integer>` con 15 números enteros aleatorios.

Después crea una copia exacta utilizando el constructor:

```java
ArrayList<Integer> copia = new ArrayList<>(original);
```

Muestra ambas listas por pantalla.

### Actividad 42

Modifica el programa anterior para copiar únicamente los 10 primeros elementos.

### Actividad 43

Crea un `ArrayList<Integer>` con 10 números aleatorios.

Calcula y muestra:
- La suma total.
- La media de los elementos.
- El número más grande.
- El número más pequeño.

### Actividad 44

Crea dos `ArrayList<String>` con varios nombres.

Añade todos los elementos de la segunda lista a la primera usando `lista1.addAll(lista2)`

Muestra el resultado.

### Actividad 45

Crea un menú que permita gestionar una lista de tareas usando un `ArrayList<String>`.

Opciones:
- Añadir tarea.
- Mostrar tareas.
- Eliminar tarea.
- Buscar tarea.
- Salir.

El programa deberá ejecutarse hasta que el usuario elija salir.

---

## Bloque 3.3 - Cadenas de texto

### Actividad 46 `Palindromo`

Implementa, tanto de forma recursiva como de forma iterativa, una función que nos diga si una cadena de caracteres es simétrica (un palíndromo). Por ejemplo, "*DABALEARROZALAZORRAELABAD*" es un palíndromo.

Otros ejemplos:

​ "*La ruta nos aporto otro paso natural*"

​ "*Nada, yo soy Adan*"

​ "*A mama Roma le aviva el amor a papa y a papa Roma le aviva el amor a mama*"

​ "*Ana, la tacaña catalana*"

​ "*Yo hago yoga hoy*"

> ¿Te atreves a implementar una solución que permita la entrada con espacios? ¿Y permitiendo espacios y signos de puntuación?".

### Actividad 47 `ReversoCadena`

Implementa, tanto de forma recursiva como de forma iterativa, una función que le dé la vuelta a una cadena de caracteres.

> Obviamente, si la cadena es un palíndromo, la cadena y su inversa coincidirán.

---

## Bloque 3.4 - Mapas

### Actividad 48

Paquete: **`A1_votaciones`**

Crea un programa que simule una encuesta sobre el lenguaje de programación favorito.

1. Usa un `HashMap<String, Integer>` donde:
  - La clave sea el nombre del lenguaje.
  - El valor sea la cantidad de votos.
2. Añade, al menos, 5 lenguajes de programación (con valor 0 al principio).
3. Pide al usuario a través del `Scanner` que vaya introduciendo votos (hasta 15). Código Java 📋 Copiar JAVA `Indica el indice del lenguaje a votar: 1. Java 2. Python 3. PHP 4. C++ 5. JS`
4. Cada vez que se repita un lenguaje, incrementa su contador.
5. Al final:
  - Muestra todos los lenguajes con su número de votos.
  - Indica cuál fue el lenguaje más votado.

### Actividad 49

Paquete: **`A2_libreria`**

Desarrolla un sistema sencillo para gestionar el inventario de una librería.

1. Usa un `HashMap<String, Integer>` donde:
  - La clave sea el nombre del libro.
  - El valor sea la cantidad disponible en stock.
2. Realizar métodos para:
  - Agregar nuevos libros.
  - Vender un libro (disminuir stock).
  - Mostrar el inventario completo.
  - Mostrar solo los libros con menos de 5 unidades. Si se intenta vender un libro inexistente o sin stock, mostrar un mensaje de error.

> **📌 Ayuda**
> Crea un menú de usuario para las distintas acciones a realizar (dentro del método main):
>
> Código Java
>
> 📋 Copiar
> JAVA
>
> `do {
>  System.out.println("\n MENÚ: ");
>  System.out.println("1. Agregar libro");
>  System.out.println("2. Vender libro");
>  System.out.println("3. Mostrar inventario completo");
>  System.out.println("4. Mostrar libros con menos de 5 unidades");
>  System.out.println("5. Salir");
>  System.out.print("Selecciona una opción: ");
>
>  opcion = scanner.nextInt();
>  scanner.nextLine(); // Limpiar buffer
>
>  switch (opcion) {
>  case 1:
>  //Realizar acciones necesarias para agregar libro
>  break;
>  case 2:
>  //Realizar acciones necesarias para vender libro
>  break;
>  case 3:
>  //Realizar acciones necesarias para mostrar inventario
>  break;
>  case 4:
>  //Realizar acciones necesarias para mostrar libros con menos de 5 unidades en stock
>  break;
>  case 5:
>  System.out.println("Saliendo del sistema...");
>  break;
>  default:
>  System.out.println("Opción inválida. Intenta de nuevo.");
>  }
> } while (opcion != 5);`

???java "Solución actividad 2"
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
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">HashMap</span>;
<span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">Scanner</span>;

<span class="tok-key">public</span> <span class="tok-key">class</span> A2_libreria {
 <span class="tok-key">public</span> <span class="tok-key">HashMap</span>&lt;<span class="tok-key">String</span>, <span class="tok-key">Integer</span>&gt; libros = <span class="tok-key">new</span> <span class="tok-key">HashMap</span>&lt;&gt;();

 <span class="tok-key">public</span> A2_libreria() {
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> agregar(<span class="tok-key">String</span> nombre, <span class="tok-key">Integer</span> stock){
 libros.put(nombre, stock);
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> vender(<span class="tok-key">String</span> nombre){
 <span class="tok-key">if</span> (libros.containsKey(nombre) &amp;&amp; libros.get(nombre) &gt; <span class="tok-bool">0</span>) {
 libros.put(nombre, libros.get(nombre)-<span class="tok-bool">1</span>);
 }<span class="tok-key">else</span>{
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;No hay suficiente stock&quot;</span>);
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrar(){
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : libros.keySet()) {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Libro: &quot;</span> + i + <span class="tok-string">&quot;, stock: &quot;</span> + libros.get(i));
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrarMenos(){
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : libros.keySet()) {
 <span class="tok-key">if</span> (libros.get(i) &lt; <span class="tok-bool">5</span>) {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Libro: &quot;</span> + i + <span class="tok-string">&quot;, stock: &quot;</span> + libros.get(i));
 }
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">static</span> <span class="tok-key">void</span> main(<span class="tok-key">String</span>[] args) {
 <span class="tok-key">int</span> opcion;
 A2_libreria libreria = <span class="tok-key">new</span> A2_libreria();
 <span class="tok-key">Scanner</span> scanner = <span class="tok-key">new</span> <span class="tok-key">Scanner</span>(<span class="tok-key">System</span>.in);
 <span class="tok-key">do</span> {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;\n MENÚ: &quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;1. Agregar libro&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;2. Vender libro&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;3. Mostrar inventario completo&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;4. Mostrar libros con menos de 5 unidades&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;5. Salir&quot;</span>);
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Selecciona una opción: &quot;</span>);

 opcion = scanner.nextInt();
 scanner.nextLine(); <span class="tok-comment">// Limpiar buffer</span>

 <span class="tok-key">switch</span> (opcion) {
 <span class="tok-key">case</span> <span class="tok-bool">1</span>:
 <span class="tok-comment">//Realizar acciones necesarias para agregar libro</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nombre del libro: &quot;</span>);
 <span class="tok-key">String</span> nom = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Stock disponible: &quot;</span>);
 <span class="tok-key">int</span> stock = scanner.nextInt();

 libreria.agregar(nom, stock);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">2</span>:
 <span class="tok-comment">//Realizar acciones necesarias para vender libro</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nombre del libro: &quot;</span>);
 <span class="tok-key">String</span> nom2 = scanner.nextLine();

 libreria.vender(nom2);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">3</span>:
 <span class="tok-comment">//Realizar acciones necesarias para mostrar inventario</span>
 libreria.mostrar();
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">4</span>:
 <span class="tok-comment">//Realizar acciones necesarias para mostrar libros con menos de 5 unidades en stock</span>
 libreria.mostrarMenos();
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">5</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Saliendo del sistema...&quot;</span>);
 <span class="tok-key">break</span>;
 <span class="tok-key">default</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Opción inválida. Intenta de nuevo.&quot;</span>);
 }
 } <span class="tok-key">while</span> (opcion != <span class="tok-bool">5</span>);
 }
}</code></pre>
</div>

### Actividad 50

Paquete: **`A3_agendaTelefonica`**

Crea una agenda telefónica usando `HashMap<String, String>`, donde la clave sea el nombre de la persona y el valor le número telefónico.

Agrega métodos para:

1. Agregar un contacto.
2. Buscar un contacto por su nombre.
3. Eliminar un contacto.
4. Mostrar todos los contactos almacenados.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

### Actividad 51

Paquete: **`A4_notasEstudiantes`**

Se desea crear un sistema que almacene las calificaciones de varios estudiantes.

Para ello, se usará un `HashMap<String, ArrayList<Double>>`, donde la clave sea el nombre del estudiante y el valor su lista de notas.

Agrega métodos para:

1. Agregar nuevos estudiantes.
2. Agregar notas a estudiantes ya almacenados.
3. Calcular la nota media de un estudiante.
4. Mostrar todos los estudiantes almacenados con sus notas.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

???java "Solución actividad 4"
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
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">ArrayList</span>;
<span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">HashMap</span>;
<span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">Scanner</span>;

<span class="tok-key">public</span> <span class="tok-key">class</span> A4_notasEstudiantes {
 <span class="tok-key">private</span> <span class="tok-key">HashMap</span>&lt;<span class="tok-key">String</span>, <span class="tok-key">ArrayList</span>&lt;<span class="tok-key">Double</span>&gt;&gt; notas = <span class="tok-key">new</span> <span class="tok-key">HashMap</span>&lt;&gt;();

 <span class="tok-key">public</span> A4_notasEstudiantes() {
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> agregar(<span class="tok-key">String</span> nombre){
 notas.put(nombre, <span class="tok-key">new</span> <span class="tok-key">ArrayList</span>&lt;&gt;());
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> agregarNota(<span class="tok-key">String</span> nombre, <span class="tok-key">double</span> nota){
 <span class="tok-key">if</span> (notas.containsKey(nombre)) {
 notas.get(nombre).add(nota);
 }<span class="tok-key">else</span>{
 agregar(nombre);
 notas.get(nombre).add(nota);
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">double</span> notaMedia(<span class="tok-key">String</span> nombre){
 <span class="tok-key">ArrayList</span>&lt;<span class="tok-key">Double</span>&gt; notasEstudiante = notas.get(nombre);
 <span class="tok-key">double</span> suma=<span class="tok-bool">0</span>;

 <span class="tok-key">for</span> (<span class="tok-key">Double</span> nota : notasEstudiante) {
 suma+=nota;
 }

 <span class="tok-key">return</span> suma/notasEstudiante.size();
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrar(){
 <span class="tok-key">ArrayList</span>&lt;<span class="tok-key">Double</span>&gt; notasEstudiante;

 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : notas.keySet()) {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Alumno: &quot;</span> + i );
 notasEstudiante = notas.get(i);

 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Notas: &quot;</span>);
 <span class="tok-key">for</span> (<span class="tok-key">Double</span> nota : notasEstudiante) {
 <span class="tok-key">System</span>.out.print(nota + <span class="tok-string">&quot;, &quot;</span>);
 }
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">static</span> <span class="tok-key">void</span> main(<span class="tok-key">String</span>[] args) {
 A4_notasEstudiantes notas = <span class="tok-key">new</span> A4_notasEstudiantes();

 <span class="tok-key">int</span> opcion;
 <span class="tok-key">Scanner</span> scanner = <span class="tok-key">new</span> <span class="tok-key">Scanner</span>(<span class="tok-key">System</span>.in);
 <span class="tok-key">do</span> {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;\n MENÚ: &quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;1. Agregar nuevos estudiantes.&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;2. Agregar notas a estudiantes ya almacenados.&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;3. Calcular la nota media de un estudiante.&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;4. Mostrar todos los estudiantes almacenados con sus notas&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;5. Salir&quot;</span>);
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Selecciona una opción: &quot;</span>);

 opcion = scanner.nextInt();
 scanner.nextLine(); <span class="tok-comment">// Limpiar buffer</span>

 <span class="tok-key">switch</span> (opcion) {
 <span class="tok-key">case</span> <span class="tok-bool">1</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nombre del estudiante: &quot;</span>);
 <span class="tok-key">String</span> nom = scanner.nextLine();

 notas.agregar(nom);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">2</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nombre del estudiante: &quot;</span>);
 <span class="tok-key">String</span> nom2 = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nota del estudiante: &quot;</span>);
 <span class="tok-key">double</span> nota = scanner.nextDouble();

 notas.agregarNota(nom2, nota);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">3</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nombre del estudiante: &quot;</span>);
 <span class="tok-key">String</span> nom3 = scanner.nextLine();

 <span class="tok-key">System</span>.out.println(notas.notaMedia(nom3));
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">4</span>:
 notas.mostrar();
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">5</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Saliendo del sistema...&quot;</span>);
 <span class="tok-key">break</span>;
 <span class="tok-key">default</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Opción inválida. Intenta de nuevo.&quot;</span>);
 }
 } <span class="tok-key">while</span> (opcion != <span class="tok-bool">5</span>);
 }
}</code></pre>
</div>

### Actividad 52

Paquete: **`A5_traductor`**

Crea un mini traductor Español → Inglés usando un `HashMap<String, String>`, en que la clave sea la palabra en español y el valor en inglés.

Además, crea otro `HashMap<String, Integer>` que contenga las mismas palabras en español y la cuenta de las veces que se ha consultado cada palabra.

Añade, al menos, 15 palabras al sistema.

Agrega métodos para:

1. Agregar nuevas palabras y sus traducciones.
2. Introducir una palabra en español y que el sistema muestre su traducción si existe.
3. Mostrar cuántas veces se ha mostrado una palabra en concreto.
4. Mostrar cuántas veces se han mostrado cada una de las palabras.
5. Mostrar todas las traducciones almacenadas.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

???java "Solución actividad 5"
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
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">HashMap</span>;
<span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">Scanner</span>;

<span class="tok-key">public</span> <span class="tok-key">class</span> Traductor {

 <span class="tok-key">private</span> <span class="tok-key">HashMap</span>&lt;<span class="tok-key">String</span>, <span class="tok-key">String</span>&gt; diccionario = <span class="tok-key">new</span> <span class="tok-key">HashMap</span>&lt;&gt;();
 <span class="tok-key">private</span> <span class="tok-key">HashMap</span>&lt;<span class="tok-key">String</span>, <span class="tok-key">Integer</span>&gt; contadorConsultas = <span class="tok-key">new</span> <span class="tok-key">HashMap</span>&lt;&gt;();

 <span class="tok-key">public</span> Traductor() {
 agregar(<span class="tok-string">&quot;hola&quot;</span>, <span class="tok-string">&quot;hello&quot;</span>);
 agregar(<span class="tok-string">&quot;adios&quot;</span>, <span class="tok-string">&quot;goodbye&quot;</span>);
 agregar(<span class="tok-string">&quot;gracias&quot;</span>, <span class="tok-string">&quot;thank you&quot;</span>);
 agregar(<span class="tok-string">&quot;por favor&quot;</span>, <span class="tok-string">&quot;please&quot;</span>);
 agregar(<span class="tok-string">&quot;perro&quot;</span>, <span class="tok-string">&quot;dog&quot;</span>);
 agregar(<span class="tok-string">&quot;gato&quot;</span>, <span class="tok-string">&quot;cat&quot;</span>);
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> agregar(<span class="tok-key">String</span> espanol, <span class="tok-key">String</span> ingles) {
 diccionario.put(espanol, ingles);
 contadorConsultas.put(espanol, <span class="tok-bool">0</span>);
 }

 <span class="tok-key">public</span> <span class="tok-key">String</span> traducirPalabra(<span class="tok-key">String</span> espanol) {
 <span class="tok-key">if</span> (diccionario.containsKey(espanol)) {
 contadorConsultas.put(espanol, contadorConsultas.get(espanol) + <span class="tok-bool">1</span>);
 <span class="tok-key">return</span> diccionario.get(espanol);
 } 

 <span class="tok-key">return</span> <span class="tok-string">&quot;Palabra no encontrada&quot;</span>;
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrarConsultas(<span class="tok-key">String</span> espanol) {
 <span class="tok-key">if</span> (contadorConsultas.containsKey(espanol)) {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;La palabra &#x27;&quot;</span> + espanol + <span class="tok-string">&quot;&#x27; se ha consultado &quot;</span> + contadorConsultas.get(espanol) + <span class="tok-string">&quot; veces.&quot;</span>);
 } <span class="tok-key">else</span> {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;La palabra no existe en el sistema.&quot;</span>);
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrarTodasConsultas() {
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : contadorConsultas.keySet()) {
 <span class="tok-key">System</span>.out.println(i + <span class="tok-string">&quot;: &quot;</span> + contadorConsultas.get(i) + <span class="tok-string">&quot; veces.&quot;</span>);
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrarDiccionario() {
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : diccionario.keySet()) {
 <span class="tok-key">System</span>.out.println(i + <span class="tok-string">&quot;: &quot;</span> + diccionario.get(i));
 }
 }

 <span class="tok-comment">// Método main con menú</span>
 <span class="tok-key">public</span> <span class="tok-key">static</span> <span class="tok-key">void</span> main(<span class="tok-key">String</span>[] args) {
 <span class="tok-key">Scanner</span> scanner = <span class="tok-key">new</span> <span class="tok-key">Scanner</span>(<span class="tok-key">System</span>.in);
 Traductor traductor = <span class="tok-key">new</span> Traductor();
 <span class="tok-key">int</span> opcion;

 <span class="tok-key">do</span> {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;\nMENÚ&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;1. Agregar nueva palabra&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;2. Traducir palabra&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;3. Mostrar consultas de una palabra&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;4. Mostrar todas las consultas&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;5. Mostrar diccionario completo&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;6. Salir&quot;</span>);
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Selecciona una opción: &quot;</span>);

 opcion = scanner.nextInt();

 <span class="tok-key">switch</span> (opcion) {
 <span class="tok-key">case</span> <span class="tok-bool">1</span>:
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Palabra en español: &quot;</span>);
 <span class="tok-key">String</span> esp = scanner.nextLine();
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Traducción en inglés: &quot;</span>);
 <span class="tok-key">String</span> ing = scanner.nextLine();
 traductor.agregar(esp, ing);
 <span class="tok-key">break</span>;

 <span class="tok-key">case</span> <span class="tok-bool">2</span>:
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Palabra en español: &quot;</span>);
 esp = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(traductor.traducirPalabra(esp));
 <span class="tok-key">break</span>;

 <span class="tok-key">case</span> <span class="tok-bool">3</span>:
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Palabra en español: &quot;</span>);
 esp = scanner.nextLine();
 traductor.mostrarConsultas(esp);
 <span class="tok-key">break</span>;

 <span class="tok-key">case</span> <span class="tok-bool">4</span>:
 traductor.mostrarTodasConsultas();
 <span class="tok-key">break</span>;

 <span class="tok-key">case</span> <span class="tok-bool">5</span>:
 traductor.mostrarDiccionario();
 <span class="tok-key">break</span>;

 <span class="tok-key">case</span> <span class="tok-bool">6</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Saliendo del programa...&quot;</span>);
 <span class="tok-key">break</span>;

 <span class="tok-key">default</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Opción no válida.&quot;</span>);
 }

 } <span class="tok-key">while</span> (opcion != <span class="tok-bool">6</span>);

 scanner.close();
 }
}</code></pre>
</div>

### Actividad 53

Paquete: **`A6_pedidos`**

Una tienda online quiere registrar los productos que compra cada cliente. Usa `HashMap<String, ArrayList<String>>`, donde la clave sea el dni del cliente y el valor los códigos de los productos comprados.

Agrega métodos para:

1. Permitir registrar compras.
  - Si el usuario ya existe, se añade el producto comprado a su lista.
  - Si el usuario no existe, se crea automáticamente y se le añade el producto comprado.
2. Mostrar todos los clientes con sus productos.
3. Eliminar un cliente y toda su lista de productos comprados.

> EXTRA: Evitar duplicados si el cliente compra varias veces el mismo producto.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

### Actividad 54

Paquete: **`A7_registroVehiculos`**

Se desea crear un sistema que permita el registro de vehículos. Para ello:

**A.** Crea la clase `Vehiculo`:

- Atributos: marca, modelo, año y kilometraje.
- Constructor, getters, setters y método `toString()`.

**B.** Crea la clase `Registro`, que contenga un `HashMap<String, Vehiculo>`, donde la clave sea la matrícula del vehículo. 

Agrega métodos para:

1. Permitir registrar nuevos vehículos.
2. Buscar un vehículo por matrícula.
3. Mostrar los vehículos con más de 100.000 km.
4. Mostrar todos los vehículos.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

???java "Solución actividad 7"
 === "Vehiculo.java"
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
 <pre><code><span class="tok-key">public</span> <span class="tok-key">class</span> Vehiculo {
 <span class="tok-key">String</span> marca, modelo;
 <span class="tok-key">int</span> anyo;
 <span class="tok-key">double</span> km;

 <span class="tok-key">public</span> Vehiculo(<span class="tok-key">String</span> marca, <span class="tok-key">String</span> modelo, <span class="tok-key">int</span> anyo, <span class="tok-key">double</span> km) {
 <span class="tok-key">this</span>.marca = marca;
 <span class="tok-key">this</span>.modelo = modelo;
 <span class="tok-key">this</span>.anyo = anyo;
 <span class="tok-key">this</span>.km = km;
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> setAnyo(<span class="tok-key">int</span> anyo) {
 <span class="tok-key">this</span>.anyo = anyo;
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> setMarca(<span class="tok-key">String</span> marca) {
 <span class="tok-key">this</span>.marca = marca;
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> setModelo(<span class="tok-key">String</span> modelo) {
 <span class="tok-key">this</span>.modelo = modelo;
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> setKm(<span class="tok-key">double</span> km) {
 <span class="tok-key">this</span>.km = km;
 }

 <span class="tok-key">public</span> <span class="tok-key">int</span> getAnyo() {
 <span class="tok-key">return</span> anyo;
 }

 <span class="tok-key">public</span> <span class="tok-key">String</span> getMarca() {
 <span class="tok-key">return</span> marca;
 }

 <span class="tok-key">public</span> <span class="tok-key">String</span> getModelo() {
 <span class="tok-key">return</span> modelo;
 }

 <span class="tok-key">public</span> <span class="tok-key">double</span> getKm() {
 <span class="tok-key">return</span> km;
 }

 @<span class="tok-key">Override</span>
 <span class="tok-key">public</span> <span class="tok-key">String</span> toString() {
 <span class="tok-key">return</span> <span class="tok-string">&quot;Marca: &quot;</span> + <span class="tok-key">this</span>.marca 
 + <span class="tok-string">&quot;\nModelo: &quot;</span> + <span class="tok-key">this</span>.modelo 
 + <span class="tok-string">&quot;\nAño: &quot;</span> + <span class="tok-key">this</span>.anyo 
 + <span class="tok-string">&quot;\nKM: &quot;</span> + <span class="tok-key">this</span>.km ;
 }

}</code></pre>
</div>
 === "Registro.java"
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
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">HashMap</span>;
<span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">Scanner</span>;

<span class="tok-key">public</span> <span class="tok-key">class</span> Registro {
 <span class="tok-key">HashMap</span>&lt;<span class="tok-key">String</span>, Vehiculo&gt; vehiculos = <span class="tok-key">new</span> <span class="tok-key">HashMap</span>&lt;&gt;();

 <span class="tok-key">public</span> Registro() {
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> agregar(<span class="tok-key">String</span> matricula, Vehiculo v){
 vehiculos.put(matricula, v);
 }

 <span class="tok-key">public</span> Vehiculo buscar(<span class="tok-key">String</span> matricula){
 <span class="tok-key">if</span> (vehiculos.containsKey(matricula)) {
 <span class="tok-key">return</span> vehiculos.get(matricula);
 }
 <span class="tok-key">return</span> <span class="tok-bool">null</span>;
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrarMayor(){
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : vehiculos.keySet()) {
 <span class="tok-key">if</span> (vehiculos.get(i).getKm() &gt; <span class="tok-bool">1000000</span>) {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Matricula: &quot;</span> + i + <span class="tok-string">&quot;\n&quot;</span> + vehiculos.get(i));
 }
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrar(){
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : vehiculos.keySet()) {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Matricula: &quot;</span> + i + <span class="tok-string">&quot;\n&quot;</span> + vehiculos.get(i));
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">static</span> <span class="tok-key">void</span> main(<span class="tok-key">String</span>[] args) {
 Registro r = <span class="tok-key">new</span> Registro();
 <span class="tok-key">int</span> opcion;
 <span class="tok-key">Scanner</span> scanner = <span class="tok-key">new</span> <span class="tok-key">Scanner</span>(<span class="tok-key">System</span>.in);
 <span class="tok-key">do</span> {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;\n MENÚ: &quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;1. Agregar vehículo&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;2. Buscar vehículo&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;3. Mostrar vehículos &gt; 100.000km&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;4. Mostrar todos los vehículos&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;5. Salir&quot;</span>);
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Selecciona una opción: &quot;</span>);

 opcion = scanner.nextInt();
 scanner.nextLine(); <span class="tok-comment">// Limpiar buffer</span>

 <span class="tok-key">switch</span> (opcion) {
 <span class="tok-key">case</span> <span class="tok-bool">1</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Matrícula del coche: &quot;</span>);
 <span class="tok-key">String</span> matricula = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Marca del coche: &quot;</span>);
 <span class="tok-key">String</span> marca = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Modelo del coche: &quot;</span>);
 <span class="tok-key">String</span> modelo = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Año: &quot;</span>);
 <span class="tok-key">int</span> anyo = scanner.nextInt();
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;KM: &quot;</span>);
 <span class="tok-key">double</span> km = scanner.nextDouble();

 Vehiculo v = <span class="tok-key">new</span> Vehiculo(marca, modelo, anyo, km);
 r.agregar(matricula, v);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">2</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Matrícula del coche: &quot;</span>);
 <span class="tok-key">String</span> mat = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(r.buscar(mat));
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">3</span>:
 r.mostrarMayor();
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">4</span>:
 r.mostrar();
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">5</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Saliendo del sistema...&quot;</span>);
 <span class="tok-key">break</span>;
 <span class="tok-key">default</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Opción inválida. Intenta de nuevo.&quot;</span>);
 }
 } <span class="tok-key">while</span> (opcion != <span class="tok-bool">5</span>);
 }
}</code></pre>
</div>

<hr>

### Actividad 8

Paquete: **`A8_controlSalarial`**

Una empresa quiere gestionar información básica de sus empleados. Para ello:

**A.** Crea la clase `Empleado`:

- Atributos: dni, nombre, departamento, salario y antigüedad.
- Constructor, getters, setters y método `toString()`.

**B.** Crea la clase `Registro`, que contenga un `HashMap<Integer, Empleado>`, donde la clave sea un id del empleado (númerico). 

Agrega métodos para:

1. Permitir registrar nuevos empleados.
2. Buscar un empleado por id.
3. Mostrar todos los empleados.
4. Mostrar todos los empleados de un departamento específico.
5. Mostrar la suma del salario de todos los empleados almacenados.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

### Actividad 54

Paquete: **`A9_puntuacionesJuego`**

Una sala de videojuegos quiere llevar un registro de los jugadores y sus puntajes. Para ello, crea un `TreeMap<String, Integer>` donde la clave sea el nombre del jugador y el valor sea su puntaje total.

Agrega métodos para:

1. Permitir registrar nuevos jugadores y su puntaje.
2. Permitir cambiar el puntaje de un jugador.
3. Mostrar la lista de jugadores ordenada automáticamente por nombre.
4. Mostrar el puntaje de un jugador específico por su nombre.
5. Mostrar los jugadores con puntajes mayores a un valor dado.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

---

### Actividad 54.2

Modifica la actividad anterior para añadir una función que muestre los jugadores en orden inverso alfabéticamente.

???java "Solución actividad 9 y 9.2"
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
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">Scanner</span>;
<span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.TreeMap;

<span class="tok-key">public</span> <span class="tok-key">class</span> PuntuacionesJuego {
 TreeMap &lt;<span class="tok-key">String</span>, <span class="tok-key">Integer</span>&gt; puntuaciones = <span class="tok-key">new</span> TreeMap&lt;&gt;();

 <span class="tok-key">public</span> PuntuacionesJuego() {
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> agregar(<span class="tok-key">String</span> nom, <span class="tok-key">Integer</span> punts){
 puntuaciones.put(nom, punts);
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> cambiarPuntos(<span class="tok-key">String</span> nom, <span class="tok-key">Integer</span> punts){
 <span class="tok-key">if</span> (puntuaciones.containsKey(nom)) {
 puntuaciones.put(nom, punts);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Puntos actualizados para el jugador &quot;</span> + nom);
 }<span class="tok-key">else</span> {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;El jugador no existe&quot;</span>);
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrar(){
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : puntuaciones.keySet()) {
 <span class="tok-key">System</span>.out.println(i + <span class="tok-string">&quot;: &quot;</span> + puntuaciones.get(i));
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">Integer</span> mostrarJugador(<span class="tok-key">String</span> nom){
 <span class="tok-key">if</span> (puntuaciones.containsKey(nom)) {
 <span class="tok-key">return</span> puntuaciones.get(nom);
 }

 <span class="tok-key">return</span> <span class="tok-bool">0</span>;
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrarMayor(<span class="tok-key">Integer</span> puntos){
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : puntuaciones.keySet()) {
 <span class="tok-key">if</span> (puntuaciones.get(i) &gt; puntos) {
 <span class="tok-key">System</span>.out.println(i + <span class="tok-string">&quot;: &quot;</span> + puntuaciones.get(i)); 
 }
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">void</span> mostrarReves(){
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : puntuaciones.descendingMap().keySet()) {
 <span class="tok-key">System</span>.out.println(i + <span class="tok-string">&quot;: &quot;</span> + puntuaciones.get(i)); 
 }
 }

 <span class="tok-key">public</span> <span class="tok-key">static</span> <span class="tok-key">void</span> main(<span class="tok-key">String</span>[] args) {
 <span class="tok-key">int</span> opcion;
 PuntuacionesJuego puntuacionesJuego = <span class="tok-key">new</span> PuntuacionesJuego();
 <span class="tok-key">Scanner</span> scanner = <span class="tok-key">new</span> <span class="tok-key">Scanner</span>(<span class="tok-key">System</span>.in);
 <span class="tok-key">do</span> {
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;\n MENÚ: &quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;1. Registrar nuevos jugadores y su puntaje&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;2. Cambiar el puntaje de un jugador&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;3. Mostrar la lista de jugadores ordenada automáticamente por nombre.&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;4. Mostrar el puntaje de un jugador específico por su nombre.&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;5. Mostrar los jugadores con puntajes mayores a un valor dado.&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;6. Mostrar los jugadores en orden inverso.&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;7. Salir.&quot;</span>);
 <span class="tok-key">System</span>.out.print(<span class="tok-string">&quot;Selecciona una opción: &quot;</span>);

 opcion = scanner.nextInt();
 scanner.nextLine(); <span class="tok-comment">// Limpiar buffer</span>

 <span class="tok-key">switch</span> (opcion) {
 <span class="tok-key">case</span> <span class="tok-bool">1</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nombre del jugador: &quot;</span>);
 <span class="tok-key">String</span> nom = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Puntos: &quot;</span>);
 <span class="tok-key">int</span> puntos = scanner.nextInt();

 puntuacionesJuego.agregar(nom, puntos);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">2</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nombre del jugador: &quot;</span>);
 <span class="tok-key">String</span> nom2 = scanner.nextLine();
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Puntos: &quot;</span>);
 <span class="tok-key">int</span> puntos2 = scanner.nextInt();

 puntuacionesJuego.cambiarPuntos(nom2, puntos2);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">3</span>:
 puntuacionesJuego.mostrar();
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">4</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Nombre del jugador: &quot;</span>);
 <span class="tok-key">String</span> nom3 = scanner.nextLine();

 <span class="tok-key">System</span>.out.println(puntuacionesJuego.mostrarJugador(nom3));
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">5</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Puntos: &quot;</span>);
 <span class="tok-key">int</span> puntos3 = scanner.nextInt();

 puntuacionesJuego.mostrarMayor(puntos3);
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">6</span>:
 puntuacionesJuego.mostrarReves();
 <span class="tok-key">break</span>;
 <span class="tok-key">case</span> <span class="tok-bool">7</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Saliendo del sistema...&quot;</span>);
 <span class="tok-key">break</span>;
 <span class="tok-key">default</span>:
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Opción inválida. Intenta de nuevo.&quot;</span>);
 }
 } <span class="tok-key">while</span> (opcion != <span class="tok-bool">7</span>);
 }
}</code></pre>
</div>

### Actividad 55

Paquete: **`A10_listaAdmitidos`**

Una serie de personas han solicitado realizar un curso de inglés. De las que han sido admitidas se quiere almacenar su *nif*, su *nombre* y su *nivel* en un `HashMap<Integer, Inscripcion>`. 

- Implementa la clase **`Incripción`** para representar el nif, nombre y nivel de un solicitante. Además de los atributos implementa aquellos métodos que consideres necesarios (constructor, getters, setters y toString).

- Escribe un programa (clase **`ComprobarAdmision`**) que: 
 - Defina un `HashMap` de inscripciones, llamado `admitidas`.
 - Contenga un método para añadir nuevas inscripciones al HashMap.
 - Permita al usuario introducir un *nif* para comprobar si la persona indicada ha sido admitida. Indicarle si aparece o no en la lista y, en caso afirmativo, mostrar el nombre y el nivel en que ha sido admitido.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

### Actividad 55

Paquete: **`A11_agendaEventos`**

Una persona quiere organizar su agenda de eventos del mes. Para ello, crea un `TreeMap<String, String>` donde la clave sea la fecha (en formato *DD/MM*, es decir *02/11*) y el valor sea el nombre del evento.

Agrega métodos para:

1. Permitir registrar nuevos eventos.
2. Permitir eliminar un evento, buscandolo por fecha.
3. Mostrar la lista de eventos ordenada ascendentemente.
4. Mostrar la lista de eventos ordenada descendentemente.
5. Buscar un evento en una fecha determinada.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

---

### Actividad 12

Paquete: **`A12_biblioteca`**

Una biblioteca quiere registrar sus libros y realizar búsquedas ordenadas. Para ello:

**A.** Crea la clase `Libro`:

- Atributos: titulo, autor, año de publicación y si está disponible.
- Constructor, getters, setters y método `toString()`.

**B.** Crea la clase `Biblioteca`, que contenga un `TreeMap<String, Libro>`, donde la clave sea el ISBN del libro. 

Agrega métodos para:

1. Permitir registrar nuevos libros
2. Buscar un libro por ISBN y mostrar todos sus datos.
3. Mostrar todos los libros en orden ascendente.
4. Pedir prestado un libro (cambiar su disponibilidad).
5. Mostrar los libros disponibles en este momento.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

<hr>

### Actividad 13

Paquete: **`A13_nevera`**

Se quiere crear una aplicación que controla una nevera inteligente.

**A.** Crea la clase `Alimento`:

- Atributos: nombre, supermercado, calorias.
- Constructor, getters, setters y método `toString()`.

**B.** Crea la clase `NeveraInteligente`, que contenga un `TreeMap<Integer, Alimento>`, donde la clave sea el identificador del Alimento. 

Agrega métodos para:

1. Permitir registrar nuevos alimentos
2. Listar todos los alimentos.
3. Listar las calorías totales en la nevera.
4. Eliminar un alimento de la nevera.
5. Mostrar alimentos de un supermercado en concreto.
6. Mostrar los alimentos con menos de X calorías.

En el método main, crea un menú para que el usuario pueda realizar las distintas acciones.

### Actividad 56

Paquete: **`A14_divisas`**

En la clase **`Divisas`**, crear una estructura *Map* llamada **`divisas`**, que almacene pares de *moneda* y *valor* al cambio en euros. Por ejemplo Dólar: 0,81€.

**a**) Añadir los siguientes pares moneda/valor al *Map* divisas:

| moneda | valor en € |
| --- | --- |
| Dólar Americano | 0.81 |
| Franco Suizo | 0.85 |
| Libra Esterlina | 1.14 |
| Corona Danesa | 0.13 |
| Peso Mexicano | 0.04 |
| Dólar Singapur | 0.62 |
| Real Brasil | 0.24 |

**b**) Mostrar el valor de la *Libra Esterlina*.

**c**) Mostrar todas las divisas con las que se opera y su valor.

**d**) Indicar el número de divisas del *Map*.

**e**) Eliminar la divisa Real Brasil y mostrar los datos del *Map*.

**f**) Mostrar si existe la divisa *Peso Mexicano*.

**g**) Mostrar si existe la divisa Euro.

**h**) Mostrar si existe el valor al cambio 0.85 €.

**i**) Mostrar si existe el valor al cambio 0.33 €.

**j**) Indicar si el *Map* divisas está vacío.

**k**) Borra todos los componentes del *Map* divisas.

**l**) Volver a indicar si el *Map* divisas está vacío.

???java "Solución actividad 14"
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
 <pre><code><span class="tok-key">import</span> <span class="tok-cmd">java</span>.util.<span class="tok-key">HashMap</span>;

<span class="tok-key">public</span> <span class="tok-key">class</span> Divisas {

 <span class="tok-key">public</span> <span class="tok-key">static</span> <span class="tok-key">void</span> main(<span class="tok-key">String</span>[] args) {

 <span class="tok-comment">// Crear el Map</span>
 <span class="tok-key">HashMap</span>&lt;<span class="tok-key">String</span>, <span class="tok-key">Double</span>&gt; divisas = <span class="tok-key">new</span> <span class="tok-key">HashMap</span>&lt;&gt;();

 <span class="tok-comment">// a) Añadir monedas</span>
 divisas.put(<span class="tok-string">&quot;Dólar Americano&quot;</span>, <span class="tok-bool">0</span>.<span class="tok-bool">81</span>);
 divisas.put(<span class="tok-string">&quot;Franco Suizo&quot;</span>, <span class="tok-bool">0</span>.<span class="tok-bool">85</span>);
 divisas.put(<span class="tok-string">&quot;Libra Esterlina&quot;</span>, <span class="tok-bool">1</span>.<span class="tok-bool">14</span>);
 divisas.put(<span class="tok-string">&quot;Corona Danesa&quot;</span>, <span class="tok-bool">0</span>.<span class="tok-bool">13</span>);
 divisas.put(<span class="tok-string">&quot;Peso Mexicano&quot;</span>, <span class="tok-bool">0</span>.<span class="tok-bool">04</span>);
 divisas.put(<span class="tok-string">&quot;Dólar Singapur&quot;</span>, <span class="tok-bool">0</span>.<span class="tok-bool">62</span>);
 divisas.put(<span class="tok-string">&quot;Real Brasil&quot;</span>, <span class="tok-bool">0</span>.<span class="tok-bool">24</span>);

 <span class="tok-comment">// b) Mostrar el valor de la Libra Esterlina</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Valor de la Libra Esterlina: &quot;</span> + divisas.get(<span class="tok-string">&quot;Libra Esterlina&quot;</span>) + <span class="tok-string">&quot; €&quot;</span>);

 <span class="tok-comment">// c) Mostrar todas las divisas y su valor</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Listado de divisas:&quot;</span>);
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : divisas.keySet()) {
 <span class="tok-key">System</span>.out.println(i + <span class="tok-string">&quot;: &quot;</span> + divisas.get(i));
 }

 <span class="tok-comment">// d) Número de divisas</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Número de divisas: &quot;</span> + divisas.size());

 <span class="tok-comment">// e) Eliminar Real Brasil y mostrar el Map</span>
 divisas.remove(<span class="tok-string">&quot;Real Brasil&quot;</span>);
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;Después de eliminar Real Brasil:&quot;</span>);
 <span class="tok-key">for</span> (<span class="tok-key">String</span> i : divisas.keySet()) {
 <span class="tok-key">System</span>.out.println(i + <span class="tok-string">&quot;: &quot;</span> + divisas.get(i));
 }

 <span class="tok-comment">// f) Comprobar si existe Peso Mexicano</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;¿Existe Peso Mexicano? &quot;</span> + divisas.containsKey(<span class="tok-string">&quot;Peso Mexicano&quot;</span>));

 <span class="tok-comment">// g) Comprobar si existe Euro</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;¿Existe Euro? &quot;</span> + divisas.containsKey(<span class="tok-string">&quot;Euro&quot;</span>));

 <span class="tok-comment">// h) Comprobar si existe el valor 0.85 €</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;¿Existe el valor 0.85 €? &quot;</span> + divisas.containsValue(<span class="tok-bool">0</span>.<span class="tok-bool">85</span>));

 <span class="tok-comment">// i) Comprobar si existe el valor 0.33 €</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;¿Existe el valor 0.33 €? &quot;</span> + divisas.containsValue(<span class="tok-bool">0</span>.<span class="tok-bool">33</span>));

 <span class="tok-comment">// j) Indicar si el Map está vacío</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;¿El Map está vacío? &quot;</span> + divisas.isEmpty());

 <span class="tok-comment">// k) Borrar todos los componentes</span>
 divisas.clear();

 <span class="tok-comment">// l) Volver a indicar si está vacío</span>
 <span class="tok-key">System</span>.out.println(<span class="tok-string">&quot;¿El Map está vacío después de clear()? &quot;</span> + divisas.isEmpty());
 }
}</code></pre>
</div>
