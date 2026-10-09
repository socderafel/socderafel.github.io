---
layout: default
title: "UD5 — Estructuras datos estáticas · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT9 Completa"
prev_url: "../ut08/ut0802.html"
prev_label: "⬅️ 4.2 Programación estructurada y modular"
next_url: "../ut09/ut0901.html"
next_label: "5.1 Estructuras de datos estáticas ➡️"
---

# 📘 UD5 — Estructuras datos estáticas (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**5.1 Estructuras de datos estáticas**](./ut0901.md)
- [**5.2 Estructuras de datos estaticas**](./ut0902.md)

---

# 5.1 Estructuras de datos estáticas

> **📌 🏷️ Apunt de la Unitat**
> #### Contenido de la unidad

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

> **📌 🏷️ Apunt de la Unitat**
> #### Ampliación y refuerzo

> **📌 🏷️ Apunt de la Unitat**
> #### Otros Recursos

---

### UNIDAD 5: ESTRUCTURAS DE DATOS ESTÁTICAS

V3.02.11.23

Profesor: José Ramón Simó Martínez Contenido

- Introducción ............................................................................................................................ 2
- Librerías de clases útiles .......................................................................................................... 2

2.1. La clase Math................................................................................................................................. 2 2.2. La clase Random ............................................................................................................................ 5 2.3. Clases envoltorio (wrapper) ........................................................................................................... 6 2.4. Manejo de fechas de Java: Clase LocalDate, LocalTime y LocalDateTime .......................................... 7 2.5. Gestionando periodos y duraciones de tiempo: Clases Period y Duration ...................................... 10

- Los arrays ............................................................................................................................... 12

3.1. Declaración y acceso a arrays ....................................................................................................... 12 3.2. Operaciones más comunes con arrays .......................................................................................... 18 3.3. La clase Arrays ............................................................................................................................. 22 3.4. Arrays multidimensionales ........................................................................................................... 24

- Cadenas de caracteres ............................................................................................................ 27

4.1. La clase String .............................................................................................................................. 28 4.2. Expresiones regulares con cadenas de texto ................................................................................. 32

- Bibliografía ............................................................................................................................. 37

V3.02.11.23

### 1. Introducción

Los arrays constituyen una de las estructuras de datos estáticas más recurridas en lenguajes de alto nivel. Es por ello que en esta unidad trataremos principalmente este tipo de estructura junto con todas sus operaciones de manipulación (creación, borrado y actualización) y búsqueda.

Los programas informáticos habitualmente tratan con datos de tipo texto y podemos utilizar arrays de caracteres para tratarlos. Sin embargo, en Java ya existe la clase String para crear y manipular cadenas de texto de forma más eficiente. Es por ello que en esta unidad estudiaremos las propiedades de este objeto.

No obstante, antes que nada, presentaremos en esta unidad un conjunto de clases útiles de Java que ayudarán a enriquecer las funcionalidades de nuestros programas.

### 2. Librerías de clases útiles

#### 2.1. La clase Math

Ya vimos en unidades anteriores referencias a esta clase. En este apartado conoceremos algunos de los métodos de cálculo matemático que la clase Math nos ofrece. En Java disponemos de muchas funciones matemáticas predefinidas que nos ayudan ha obtener el resultado, por ejemplo

• Del valor absoluto de un número • De la potencia de números (un número elevado a otro) • Redondeo de números decimales • Logaritmos • etc. Sin embargo, en este apartado sólo aprenderemos a utilizar la clase Math para: • Calcular potencias • Calcular raíz cuadrada En las siguientes unidades iremos ampliando su uso.

Math es una clase de java y podemos utilizar sus métodos al igual que hemos hecho con la clase Scanner; por ejemplo, en Scanner tenemos los métodos nextInt(), nextFloat(), etc. Además, para utilizar estos métodos en la clase Scanner hacemos, por ejemplo

```java
Scanner sc = new Scanner(System.in);
```

sc.nextInt(); // así podemos utilizar el método nextInt() de Scanner No obstante, para utilizar un método de la clase Math no hace falta crear una variable y hacer un new. Asimismo, para acceder a un método de esta clase deberemos escribir Math.nombredelmétodo, por ejemplo

V3.02.11.23 Math.pow(2,3); // Nos da el resultado de 2 elevado a 3 Math.sqrt(9.0); // Nos da el resultado de la raíz cuadrada de 9 Nota La clase Math pertenece al paquete java.lang y por tanto no hace falta importarla como sí hacíamos con la clase Scanner.

#### 2.1.1. Calcular potencias

Math.pow(a,b) devuelve el resultado de la operación de ab y por tanto podemos almacenar este valor en una variable; pero atención, esta variable debe ser de tipo double. Por ejemplo

```java
double resultado = Math.pow(2,3);
```

También podemos hacer el cálculo directamente en la salida del programa

```java
System.out.println(Math.pow(2,3));
```

Nota En Math.pow(a, b) los valores a y b pueden ser números con decimales o variables tipo double.

#### 2.1.2. Calcular raíz cuadrada

Math.sqrt(a) devuelve el resultado de la operación de √𝑎 y por tanto podemos almacenar este valor en una variable; pero atención, esta variable debe ser de tipo double. Por ejemplo

```java
double resultado = Math.sqrt(9);
```

También podemos hacer el cálculo directamente en la salida del programa

```java
System.out.println(Math.sqrt(9));
```

Un ejemplo más completo de uso de la clase Math sería el siguiente

V3.02.11.23 Nota En Math.sqrt(a) el valor de a puede ser un número con decimales o una variable tipo double.

#### 2.1.3. Otros métodos de la clase math

Un resumen de algunos métodos de la clase Math: Método Descripción Ejemplo de uso Resultado abs Devuelve el valor absoluto de un numero.

```java
int x = Math.abs(2.3);
x = 2;
```

ceil Devuelve el entero más cercano por arriba.

```java
double x = Math.ceil(2.5);
x = 3.0;
```

floor Devuelve el entero más cercano por debajo. double x =

```java
Math.floor(2.5);
x = 2.0;
```

round Devuelve el entero más cercano. double x =

```java
Math.round(2.5);
x = 3.0;
```

log Devuelve el logaritmo natural en base e de un número.

```java
double x = Math.log(2.71); x = 0.9996;
```

max Devuelve el mayor de dos entre dos valores.

```java
int x = Math.max(3, 8);
x = 8;
```

min Devuelve el menor de dos entre dos valores.

```java
int x = Math.min(3, 8);
x = 3;
```

random Devuelve un número aleatorio entre 0 y 1. Se pueden cambiar el rango de generación. double x =

```java
Math.ramdom();
x = 0.206178;
```

sqlrt Devuelve la raíz cuadrada de un número.

```java
double x = Math.sqlrt(9);
x = 3.0;
```

pow Devuelve un número elevado a un exponente. double x = Math.pow(2,

```java
10);
x= 1024.0;
```

… … … … MÉTODO DESCRIPCIÓN Ejemplo de uso resultado abs Devuelve el valor absoluto de un numero.

```java
int x = Math.abs(2.3);
x = 2;
```

ceil Devuelve el entero más cercano por arriba.

```java
double x = Math.ceil(2.5);
x = 3.0;
```

floor Devuelve el entero más cercano por debajo. double x =

```java
Math.floor(2.5);
x = 2.0;
```

round Devuelve el entero más cercano. double x =

```java
Math.round(2.5);
x = 3.0;
```

log Devuelve el logaritmo natural en base e de un número.

```java
double x = Math.log(2.71); x = 0.9996;
```

max Devuelve el mayor de dos entre dos valores.

```java
int x = Math.max(3, 8);
x = 8;
```

min Devuelve el menor de dos entre dos valores.

```java
int x = Math.min(3, 8);
x = 3;
```

random Devuelve un número aleatorio entre 0 y 1. Se pueden cambiar el rango de generación. double x =

```java
Math.ramdom();
x = 0.206178;
```

sqlrt Devuelve la raíz cuadrada de un número.

```java
double x = Math.sqlrt(9);
x = 3.0;
```

pow Devuelve un número elevado a un exponente. double x = Math.pow(2,

```java
10);
x= 1024.0;
```

… … … …

Para consultar el resto de métodos de la clase Math: https://docs.oracle.com/en/java/javase/18/docs/api/java.base/java/lang/Math.html

V3.02.11.23

#### 2.2. La clase Random

La clase Random nos permite generar números aleatorios. Esto nos puede servir para aplicarlo a los siguientes ejemplos: • El resultado de tirar un dado en un juego. • El sorteo de la lotería. • Generar claves encriptadas • Simular fenómenos físicos reales • etc. Esta clase, a diferencia de la clase Math, necesita crear un objeto para utilizarla. En nuestra primera aproximación a la creación de objetos en Java, por tanto, tenemos la clase Random. Un objeto de la clase Random se crea así

```java
Random rand = new Random();
```

Para usar la clase Random debemos importarla así en la cabecera de nuestro código

```java
import java.util.Random;
```

Hay cuatro funciones miembro diferentes que generan números aleatorios: Función miembro Descripción Rango r.nextInt() Número aleatorio entero de tipo int 2-32 y 232 r.nextLong() Número aleatorio entero de tipo long 2-64 y 264 r.nextFloat() Número aleatorio real de tipo float [0,1[ r.nextDouble() Número aleatorio real de tipo double [0,1[ En caso de necesitar números aleatorios enteros en un rango determinado, podemos trasladarnos a un intervalo distinto, simplemente multiplicando, aplicando la siguiente fórmula general

(int)(rand.nextDouble()*cantidad_números_rango + término_inicial_rango) donde (int) al inicio, transforma un número decimal double en entero int, eliminando la parte decimal. Por ejemplo, si deseamos números aleatorios enteros comprendidos entre [1,6], que son los lados de un dado, la fórmula quedaría así.

```java
(int)(rnd.nextDouble() * 6 + 1);
```

donde 6 es la cantidad de números enteros en el rango [1,6] y 1 es el término inicial del rango. Más información sobre la clase Random: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Random.html

V3.02.11.23

#### 2.3. Clases envoltorio (wrapper)

Clases envoltorio (wrapper) • En ocasiones es útil tratar los tipos de datos básicos como objetos. int, byte, short, long, char, boolean, float, double • Muchas funciones y clases trabajan con elementos que heredan de la clase Object (la clase que se sitúa en la parte más alta de la jerarquía de objetos en Java).

No funcionarán directamente con estos tipos básicos. • Existe una clase envoltorio por cada tipo básico. • Cada una tiene un único atributo, que es del tipo básico al que “envuelven”. Tipo básico Clase envoltorio int Integer char Character boolean Boolean long Long double Double float Float short Short byte Byte A continuación, veremos la clase Integer como ejemplo de una clase envoltorio en Java

Constantes

```java
int max = Integer.MAX_VALUE;
```

```java
int min = Integer.MIN_VALUE;
```

Métodos //Pasar de INT a String

```java
int a1 = 45678;
String a2 = Integer.toString( a1 );
```

//Pasar de String a INT

```java
String b1 = "45678";
int b2 = Integer.parseInt( b1 );
```

int b3 = Integer.parseInt(CharSequence s, int beginIndex, int endIndex, int radix)

> **💡 Apunt Tècnic**
> Ejemplo: cadena = sc.next(); // Lee la siguiente cadena: “13-14”

```java
String[] separada = cadena.split("-");
```

a = Integer.parseInt( separada[0] ); // Pasar el 13 de texto a número b = Integer.parseInt( separada[1] ); // Pasar el 14 de texto a número Más información sobre la clase Integer: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Integer.html

V3.02.11.23

#### 2.3.1. Boxing y unboxing automáticos

Desde la versión 5 de Java, se convierte automáticamente entre las clases envoltorios y sus correspondientes tipos básicos. • Si se introduce un tipo básico donde se espera un objeto de una clase envoltorio, se llama al constructor correspondiente (boxing). • Si se introduce un objeto de una clase envoltorio donde se espera un tipo básico, se llama al método de acceso correspondiente (unboxing).

Por ejemplo: Integer x = 5, y = 9; //Boxing

```java
int z = x + y;
```

//Unboxing

```java
System.out.printf("%s + %s = %d", x, y, z);
```

#### 2.4. Manejo de fechas de Java: Clase LocalDate, LocalTime y LocalDateTime

Actualmente las clases más comunes para el manejo de fechas en Java son: LocalDate, LocalTime y LocalDateTime. Vamos a ver a continuación cómo utilizarlas.

#### 2.4.1. La clase LocalDate

La clase LocalDate representa una fecha en formato ISO (yyyy-MM-dd) sin indicar el tiempo. Por ejemplo, podemos usar esta clase para guardar fechas de cumpleaños o el día de paga. Esta clase es otro objeto de Java al igual que la clase Random, Scanner, etc. Para crear este objeto haremos lo siguiente

```java
LocalDate fecha = LocalDate.now();
```

Con esto también obtenemos la fecha actual del sistema. Y también podemos obtener con LocalDate una fecha específica (día, mes y año) utilizando los métodos of o parse.

```java
LocalDate.of(2023,05,04);
```

LocalDate.parse(“-04”); // parsea una cadena como fecha Por defecto se trabajo con el formato ISO 8601 que es el más aceptado, pero podemos generar nuestro propio formato: // Utilizamos la clase DateTimeFormatter y su método ofPattern(String). LocalDate aniversarioStarWars = LocalDate.parse(“5/04/2023”,

```java
DateTimeFormatter.ofPattern(“d/M/yyyy”));
```

V3.02.11.23 Asimismo, podemos usar una variedad de métodos de LocalDate para gestionar las fechas. Veamos algunos ejemplos de uso: • Obtener la fecha actual y añadirle un día

```java
LocalDate manyana = LocalDate.now().plusDays(1);
```

• Obtener la fecha actual y restarle un mes (fíjate cómo acepta un enum como unidad de tiempo)

```java
LocalDate mesAnteriorMismoDia = LocalDate.now().minus(1, ChronoUnit.MONTHS);
```

> **⚠️ Nota: La clase ChronoUnit dispone de una serie de const...**
> Nota: La clase ChronoUnit dispone de una serie de constantes que nos permiten obtener las unidades que nos interesen (que a su vez son también objetos de la clase ChronoUnit)

• En el siguiente código, parseamos la fecha “-04” y obtenemos el día de la semana y el día del mes, respectivamente. Observa que cada método devuelve tipos de datos distintos

```java
DayOfWeek viernes = LocalDate.parse(“2023-05-04”).getDayOfWeek();
int cuatro = LocalDate.parse(“2023-05-04”).getDayOfMonth();
```

• Podemos averiguar si un año es bisiesto

```java
boolean esBisiesto = LocalDate.now().isLeapYear();
```

• También podemos saber la relación entre una fecha con otra, respecto a si ocurre antes o después: // -04 no va antes que-01

```java
boolean esAntes = LocalDate.parse(“2023-05-04”).isBefore(LocalDate.parse(“2023-05-01”);
```

// -10 va después que-04

```java
boolean esDespues = LocalDate.parse(“2023-05-10”).isAfter(LocalDate.parse(“2023-05-04”);
```

• Para obtener los límites de una fecha dada: // Obtenemos la hora de inicio del día-04 i usamos LocalDateTime para guardar la hora que devuelve el método

```java
LocalDateTime comienzoDelDia = LocalDate.parse(“2023-05-04”).atStartOfDay();
```

// Obtenemos la fecha del primer día del mes parseado LocalDate firstDayOfMonth = LocalDate.parse(“-04”).

```java
with(TemporalAdjusters.firstDayOfMonth());
```

> **⚠️ Nota: Existe una clase llamada TemporalAdjusters (en pl...**
> Nota: Existe una clase llamada TemporalAdjusters (en plural) cuyos métodos permiten obtener ajustes de fecha (de la clase TemporalAdjuster) de manera sencilla para hacer muchas cosas. Más información de la API: https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html

V3.02.11.23

#### 2.4.2. La clase LocalTime

La clase LocalTime representa el tiempo sin una fecha. Es similar a LocalDate, podemos crear una instancia de LocalTime para obtener la hora del sistema utilizando los métodos of o parse. Veamos algunos ejemplos: • Para crear una hora

```java
LocalTime horaActual = LocalTime.now();
```

• También podemos crear una hora deseada parsenado una cadena o utilizando el método of

```java
LocalTime horaPersonalizada1 = LocalTime.parse(“12:34”);
LocalTime horaPersonalizada2 = LocalTime.of(12,34);
```

• Ahora vamos a crear una hora y sumarle una hora más

```java
LocalTime hora = LocalTime.parse(“12:34”).plus(1, ChronoUnit.HOURS);
```

• Podemos obtener la hora, minutos o segundos: int hora = LocalTime.parse(“12:34”).getHour(); // Devuelve 12 int minuto = LocalTime.parse(“12:34”).getMinute(); // Devuelve 34 • También, al igual que en las fichas, podemos comprobar si una hora es anterior o posterior a otra

```java
boolean esAntes = LocalTime.parse(“12:34”).isBefore(LocalTime.parse(“13:30”));
```

Más información de la API: https://docs.oracle.com/javase/8/docs/api/java/time/LocalTime.html

#### 2.4.3. La clase LocalDateTime

La clase LocalDateTime es una combinación de las dos anteriores para trabajar con fechas y horas simultáneamente. Ejemplos de uso: • Crear una fecha y hora

```java
LocalDateTime.now();
```

• Crear una fecha y hora personalizados

```java
LocalDateTime.of(2023, Month.MAY, 5, 12, 34);
```

Más información de la API: https://docs.oracle.com/javase/8/docs/api/java/time/LocalDateTime.html

V3.02.11.23

#### 2.5. Gestionando periodos y duraciones de tiempo: Clases Period y Duration

Tanto la clase Period como la clase Duration gestionan rangos de tiempo, pero se diferencia en lo siguiente: • Period: representa una cantidad de tiempo en términos de años, meses y días. • Duration: representa una cantidad de tiempo en segundos o nanosegundos.

#### 2.5.1. La clase Period

Algunos ejemplos de uso de la clase Period: • Manipular fechas

```java
LocalDate fechaInicial = LocalDate.parse(“2023-05-04”);
```

LocalDate fechaFinal = fechaInicial.plus(Period.ofDays(5)); // -09 • Calcular la diferencia de días, meses, años entre dos fechas: int nDias = Period.between(fechaInicial, fechaFinal).getDays(); // 5

#### 2.5.2. La clase Duration

Algunos ejemplos de uso de la clase Duration: • Manipular el tiempo: LocalTime tiempoInicial = LocalTime.of(12, 34, 0); // 12:34:00 LocalTime tiempoFinal = tiempoInicial.plus(Duration.ofSeconds(30)); // 12:34:30 • Calcular la diferencia en segundos entre dos tiempos

Long tiempoSegundos = Duration.between(tiempoInicial, tiempoFinal).getSeconds(); // 30

Más información de la API: https://docs.oracle.com/javase/8/docs/api/java/time/Period.html https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html Más información en la web sobre el manejo de fechas: https://www.campusmvp.es/recursos/post/como-manejar-correctamente-fechas-en-java-el-paquete-java- time.aspx https://www.baeldung.com/java-8-date-time-intro

V3.02.11.23 El siguiente código muestra un ejemplo de un programa que usa las clases que hemos introducido para el manejo de fechas

V3.02.11.23

### 3. Los arrays

¿Por qué necesitamos los arrays? Los arrays, también conocidos con el nombre de vectores, son elementos que almacenan de manera estructurada un conjunto de valores que pertenecen al mismo tipo de dato (entero, real, carácter, objetos, etc). Muchas de las soluciones a nivel computacional requieren crear listas de datos. Por ejemplo, si necesitamos almacenar y manipular las notas de 5 alumnos, deberíamos declarar 10 variables

```java
int nota1, nota2, nota3, nota4, nota5;
```

¿Pero qué ocurre si en vez de 5 alumnos son 500 empleados de una multinacional? Evidentemente con la solución anterior nuestro programa sería inviable de tratar y mantener. En este caso, deberíamos de utilizar las estructuras de arrays.

#### 3.1. Declaración y acceso a arrays

#### 3.1.1. Declaración de arrays

Con un array podemos manipular una sola variable pero que a la vez está tratando con múltiples datos. En el caso de los alumnos deberíamos declarar un array de 5 enteros para almacenar cada una de sus notas

```java
int[] notas = new int[5];
```

Por tanto, podemos deducir que la sintaxis para declarar un array de un tamaño fijo es la siguiente

```java
tipo_de_variable[] nombre_de_variable = new tipo_de_variable[tamaño_del_array];
```

ó

```java
tipo_de_variable nombre_de_variable[] = new tipo_de_variable[tamaño_del_array];
```

El estilo más habitual es el del primer caso ya que al declarar int[] y ver los corchetes ya puedes interpretar que la variable es de tipo array. En cualquier caso, debes elegir el estilo en el que más te sientas a gusto. Nota: En esta unidad estamos tratando con los arrays estáticos, es decir, tiene un número fijo de datos que pueden almacenar. En unidades posteriores estudiaremos las clases que Java ofrece para tratar con arrays dinámicos.

V3.02.11.23

#### 3.1.2. Almacenar y recuperar elementos de un array

Un array se puede visualizar como una lista de elementos donde cada elemento ubica en una posición determinada y localizable llamada índice. Además, en el caso de los arrays de tipos primitivos, cuando se declara el array este inicializa a cero todos sus elementos.

El array de notas de alumnos que hemos creado anteriormente se podría visualizar de la siguiente manera

Hay que tener en cuenta que los índices del array siguen estas reglas: • Primer elemento = índice 0 • Último elemento = tamaño del array – 1 En el ejemplo anterior el tamaño del array es 5 y por tanto el último elemento se sitúa en el índice 4. También podemos hablar de que el primer elemento está en la posición 0 y el último elemento está en la posición 4.

Si quisiéramos almacenar un 9 en la primera posición del array de notas deberíamos escribir la siguiente instrucción

```java
notas[0] = 9;
```

El contenido del array se actualizaría y se vería así

Podríamos hacer los mismo con todos los elementos del array. Por ejemplo, el código completo en el que se declara el array de notas y se almacenan los valores correspondientes sería

índices elementos

```java
int[] notas = new int[5];
```

V3.02.11.23 Y finalmente el contenido de array de notas

Por otra parte, también queremos recuperar alguno de los valores almacenados en el array. En este caso, nos puede interesar recuperar las notas de los alumnos para poder hacer alguna operación aritmética con ellas, como por ejemplo calcular la nota media.

```java
int notaAlumno1 = notas[0];
```

Con la anterior instrucción recuperamos la nota guardada en la primera posición del array y la almacenamos en una variable llamada notaAlumno1. Puedes entender mejor este concepto a partir del siguiente ejemplo. Ejemplo: Calcular la nota media de 5 alumnos de clase

#### 3.1.3. Asignar valores iniciales en la declaración del array

Puede que necesitemos declarar el array con unos valores iniciales, bien por los conozcamos a priori o bien porque los necesitemos en la solución de nuestro problema. Siguiendo con el ejemplo de las notas el array se declararía e inicializaría con la siguiente instrucción

```java
int[] notas = new int[] {9,7,8,5,3};
```

ó

```java
int[] notas = {9,7,8,5,3};
```

Como ves el segundo caso es más simple y es estilo más habitual que utilizaremos. Podemos modificar el anterior ejemplo pero con el array ya rellenado de notas en su propia declaración

V3.02.11.23

#### 3.1.4. Recorrer los elementos de array: bucle foreach

La suma de cada uno de los valores del array de nuestro ejemplo puede resultar algo engorrosa y más aún en el caso de que tuviéramos que sumar las notas de 50 alumnos, por ejemplo. Para ello es mejor utilizar una estructura repetitiva y habitualmente una buena opción sería el bucle for.

Por ejemplo, si modificamos el código anterior para que sume las notas una a una lo haga con un bucle for, el fragmento de código que haría esto quedaría así

Sin embargo, en Java existe la estructura de control foreach la cual está diseñada para recorrer y recuperar elementos de un array de una forma más eficiente (o sencilla). El código equivalente al ejemplo anterior con la estructura foreach sería

La sintaxis de este bucle es: for (tipo_de_dato elemento: array) { // Procesar el elemento } En la primera iteración del bucle se guarda notas[0] en notaAlumno y se suma, en la segunda iteración se guarda notas[1] en notaAlumno y se suma, y así sucesivamente hasta llegar al último elemento del array y termina el bucle.

V3.02.11.23 Nota En otros lenguajes como C#, PHP o Javascript la sintaxis para bucle foreach se utiliza el nombre foreach para la estructura. Sin embargo, cabe tener en cuenta que en Java la palabra clave no se llama foreach si no for. Utilizamos la denominación foreach para diferenciarlo del bucle for estándar.

#### 3.1.5. Los límites del array: uso de constantes y el método length

En los arrays estáticos debemos tener en cuenta el tamaño que le hemos dado a nuestro array. Un array tiene por tanto un rango limitado de índices de acceso según su tamaño; si N es el tamaño de nuestro array el rango será desde el índice 0 hasta N-1. Si accedemos a un índice que esté fuera de este rango, nuestro programa compilaría, no obstante, nos daría el siguiente error en la posterior ejecución del programa y terminaría

java.lang.ArrayIndexOutOfBoundsException En el ejemplo que estamos desarrollando, si escribimos la siguiente instrucción

```java
notas[5] = 10;
```

Tendríamos el problema descrito, ya que el tamaño de nuestro array es de 5 y sólo podemos acceder a los índices de 0 a 4. A la hora de recorrer el array debemos tener en cuenta que no accedemos fuera del rango de valores disponibles. Podemos utilizar tres técnicas

• Definir una constante con el tamaño máximo del array. • Utilizar el método length de la clase array que nos da su tamaño. • Una mezcla de las dos anteriores. Un ejemplo utilizando la primera técnica

V3.02.11.23 Un ejemplo utilizando la segunda técnica

Y por último, podemos hacer una mezcla de las dos anteriores

De esta forma, si necesitamos modificar el tamaño del array es más limpio e intuitivo hacer desde la constante declarada y no dentro del array. Además, más adelante podemos utilizar el método length que nos asegura que no nos saldremos del rango del array por la parte superior.

Nota Cuidado, los índices de un array no pueden ser negativos y por tanto debemos ser precavidos en el valor inicial de la variable contador del bucle. Otro ejemplo del uso del método length de la clase array sería para el ejemplo del cálculo de la media de los alumnos, ya que para obtener la media debemos saber el total de alumnos

Un resumen de lo estudiado en el apartado 4.3: • Un array nos permite crear y manipular listas de datos, como por ejemplo, almacenar las notas de los alumnos de una clase.

V3.02.11.23 • Se pueden crear arrays de cualquier tipo de dato: int, float, double, etc. Sin embargo, todos los elementos del mismo arrays deben ser del mismo tipo. • Un array se puede declarar vacío (todo a cero) o con unos valores iniciales. • Los arrays que estamos estudiando se conocen como estáticos, ya que se definen previamente con un tamaño limitado. Hay que tener cuidado con el rango de valores de un array.

• Los arrays se recorren con un bucle for o foreach. • Resumen sintaxis con el ejemplo del array de notas: Tipo Java Rango de valores Crear un array de tamaño 5: int [] notas = new int[5] Guardar una nota en la primera posición

```java
notas[0] = 9;
```

Guardar una nota en la última posición

```java
notas[4] = 3;
```

Obtener el último elemento del array

```java
int notaAlumno1 = notas[4];
```

Obtener el tamaño del array

```java
int numeroAlumnos = notas.length;
```

#### 3.2. Operaciones más comunes con arrays

#### 3.2.1. Elemento máximo o mínimo de un array

Para encontrar el máximo o el mínimo de los elementos de un array, tomaremos el primero de los elementos como valor provisional, y compararemos con cada uno de los demás, para ver si está por encima o debajo de ese máximo o mínimo provisional, y actualizarlo si fuera necesario.

El siguiente fragmento de código muestra el algoritmo descrito para calcular el elemento máximo de un array

Cuidado, un error típico es inicializar la variable del máximo directamente a 0: int notaMax = 0; // Error!

V3.02.11.23 3.2.2 Copia de un array A veces, en un programa, necesitamos duplicar un array o parte de un array. En estos casos, podrías tener la tentación de asignar un array a otro array. Por ejemplo, si tenemos dos arrays llamados notas1 y notas2: notas2 = notas1; // ¡Error! Haciendo esto no se copia Sin embargo, esta instrucción no copia el contenido de un array sobre otro. El motivo de que esto no funcione lo explicaremos en los temas de orientación a objetos que veremos en las siguientes unidades. Por ahora, debes entender que no debes hacer esto para copiar dos arrays.

Evidentemente sí que se pueden copiar arrays, pero debes hacer siguiendo algunas de estas tres técnicas: • Usar un bucle para copiar elemento a elemento de un array a otro. • Usar el método arraycopy de la clase System. • Usar el método clone para copiar arrays. Este método lo estudiaremos en unidades posteriores.

Para copiar elemento a elemento de un array a otro podemos utilizar el siguiente bucle

Y con el método arraycopy lo deberíamos hacer con la siguiente instrucción

Esta instrucción la podríamos leer así: “Copia el array notas1 (notas1) desde el inicio (0) hacia array notas2 (notas2) desde su inicio (0) y copia notas1 completamente (notas1.length)”. La sintaxis del método arraycopy es

```java
System.arraycopy (array_origen, índice_origen, array_destino, elementos_a_copiar);
```

> **⚠️ Nota: Hay que tener en cuenta que en ambos ejemplos el ...**
> Nota: Hay que tener en cuenta que en ambos ejemplos el tamaño del array notas2 debe ser menor o igual que notas1.

#### 3.2.3. Insertar elementos en el array

Un elemento se puede insertar en un array de tres formas: • Al final del array. • En posiciones intermedias.

V3.02.11.23 Insertar elementos al final del array Para insertar un elemento al final del array es lo más sencillo. Sólo debes tener en cuenta el índice del último elemento que se ha insertado en el array. Sin embargo, debemos comprobar si el array está lleno, ya que en tal caso no podremos insertar un elemento nuevo en ese array a no ser que lo redimensionemos.

Por ejemplo: if (cantidad < capacidad) {

```java
notas[cantidad] = 5;
    cantidad++;
}
```

Hasta ahora hemos rellanado completamente nuestro array con un bucle for y por tanto la comprobación anterior no hace falta. Este ejemplo se aplica cuando tenemos un array que no está lleno y vamos insertando elementos en él en cualquier momento del programa. Insertar elementos en posiciones intermedias En este caso, y siempre que haya espacio libre en el array, debemos desplazar todos los elementos hacia la derecha desde la posición donde queramos insertar el nuevo elemento. Finalmente, insertaremos el nuevo elemento en dicha posición.

La clave está en que este movimiento de desplazamiento debe empezar desde el final para que cada elemento que se mueve no sobreescriba el que estaba a continuación de él. Además, debemos actualizar el contador de elementos, para indicar que hay el array tiene un elemento más.

El algoritmo sería el siguiente: for (i = cantidad; i > posicionInsertar; i--)

```java
notas[i] = notas[i-1];
notas[posicionInsertar] = 9;
```

cantidad++;

#### 3.2.4. Borrar elementos de un array

Si queremos borrar el elemento que hay en una cierta posición de un array, los que estaban a continuación deberán desplazarse “hacia la izquierda” para que no queden huecos. Como en el caso anterior, deberemos actualizar el contador, pero ahora para indicar que el array tiene un elemento menos.

for (i = posicionBorrar; i < cantidad-1; i++)

```java
notas[i] = notas[i+1];
```

cantidad--;

V3.02.11.23 Nota: En este algoritmo se supone que posicionBorrar puede ser 0 hasta la cantidad de elementos que hay en el array menos 1.

#### 3.2.5. Buscar elementos en un array

Existen dos formas de buscar un elemento dentro de un array: • Búsqueda lineal • Búsqueda binaria o dicotómica Búsqueda secuencial o lineal El algoritmo para buscar elementos en un array de forma secuencial es el más sencillo e intuitivo. Simplemente deberemos comparar cada elemento del array con el elemento a buscar.

En caso de encontrar el elemento podríamos: • Notificar al usuario que se ha encontrado el elemento. • Almacenar la posición en la que se ha encontrado el elemento. • Almacenar el éxito de haber encontrado el elemento. El ejemplo siguiente hace referencia al segundo caso

La variable posicionBuscado la iniciamos a -1 para indicar que en un principio no hemos encontrado el elemento dentro del array. En caso de no encontrarlo, posicionBuscado seguirá valiendo -1. El anterior algoritmo no es muy eficiente, ya que en caso de encontrar el elemento sigue recorriendo el array hasta el final. Efectivamente, la idea sería que el bucle terminara cuando se haya encontrado el elemento.

¿Cómo lo harías? Búsqueda binaria o dicotómica El algoritmo de búsqueda binaria o dicotómica es un poco más complejo, pero es mucho más eficiente que la búsqueda secuencial. A priori el array debe estar ordenado. El array se dividirá en dos para buscar el elemento en una parte del array o en otra y así sucesivamente hasta encontrar, o no, el elemento.

V3.02.11.23 En el siguiente ejemplo aplicamos el algoritmo de búsqueda binaria al array de notas que hemos estado utilizando en los anteriores ejemplos. Cabe destacar que el array de notas debe estar necesariamente ordenado antes de iniciar la búsqueda

3.2.6 Ordenación de arrays Para terminar con las operaciones más habituales sobre los arrays, cabe comentar alguno de los algoritmos que sirven para ordenar los elementos de un array: • Burbuja • Inserción • Selección • Quicksort Aunque estos algoritmos se estudian en profundidad en niveles universitarios, en el caso de los CFGS DAM/DAW en el módulo de Programación no entraremos en más detalle. Java ya tiene implementados estos algoritmos y podemos utilizar sus métodos de ordenación muy fácilmente (por ejemplo, con el método sort del array).

Sin embargo, para aquellos y aquellas que tengan interés en saber más sobre los algoritmos de ordenación, os dejo el siguiente enlace: https://es.wikipedia.org/wiki/Algoritmo_de_ordenamiento

#### 3.3. La clase Arrays

Aunque no hayamos entrado en los conceptos de la programación orientada a objetos, durante el curso ya hemos tratado de manejar algunos objetos, sus propiedades y métodos, por ejemplo

V3.02.11.23 • La clase System: System.out.println() • La clase Scanner y sus métodos nextInt(), nextFloat() • La clase Math con sus métodos (pow, random...) y propiedades (Math.PI). • etc. De la misma manera los arrays tiene unos métodos, o herramientas si lo quieres pensar así, que nos simplifican la elaboración de los programas. Estos se encuentran en la clase Arrays.

Por ejemplo, si queremos ordenar un array de números enteros, sólo tenemos que utilizar el método sort. En el caso de que queramos ordenar el array de notas de nuestros ejemplos

```java
Arrays.sort(notas);
```

Por tanto, la sintaxis será

```java
Arrays.sort(nombre_array);
```

Cabe destacar que, al igual que hacíamos con la clase Scanner, debemos importar la clase Array a nuestro programa

```java
import java.util.Arrays;
```

Veamos un ejemplo completo

La salida por pantalla será: Notas antes de ordenar: 9 7 8 5 3 Notas después de ordenar: 3 5 7 8 9

V3.02.11.23 Otros métodos interesantes de la clase Arrays son: Métodos Descripción fill Permite rellenar un array unidimensional con un terminado valor. Sus argumentos son el array a rellenar y el valor deseado. Por ejemplo, para rellenar con todo a -1 un array donde almacenemos notas

```java
int[] notas = new int[10];
Arrays.fill(notas, -1);
```

También podemos decidir desde qué índice hasta qué índice rellenamos

Arrays.fill(notas, 5, 8, -1); // almacena -1 desde la posición 5 hasta la 7 del array notas equals Compara dos arrays y devuelve true si son iguales (false en caso contrario). Se consideran iguales si son del mismo tipo, tamaño y contienen los mismos valores.

Arrays.equals(notas1, notas2); // notas1 y notas2 son arrays binarySearch Permite buscar un elemento de forma super eficiente y rápida en un array ordenado (atención, eso es importante, que esté ordenado). Devuelve el índice del elemento buscado. Por ejemplo

```java
int notas[] = {9, 7, 8, 5, 3};
Arrays.sort(notas);
```

Arrays.binarySearch(notas, 5); //Devuelve el índice 3 que es donde está el elemento 5 Nota Toda la información de la clase Arrays la puedes encontrar en su documentación oficial: https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html

#### 3.4. Arrays multidimensionales

En los anteriores apartados estudiamos como usar arrays unidimensionales para guardar una colección de elementos de forma lineal. Sin embargo, Java permite crear arrays bidimensionales también llamados matrices o tablas. En estas estructuras puedes almacenar y manejar elementos como si tuvieras una tabla.

V3.02.11.23 Nota Utilizaremos la denominación matriz para referirnos a los arrays bidimensionales. Por ejemplo, la siguiente tabla que muestra las notas de los alumnos en cada una de las evaluaciones del curso, puede ser almacena en una matriz llamada notasCurso.

1a. Evaluación 2a. Evaluación 3a. Evaluación Baby yoda Luke Leia Rey En este apartado, vamos a estudiar: • Cómo declarar e inicializar una matriz bidimensional. • Cómo acceder a los elementos de una matriz bidimensional.

#### 3.4.1. Declarar e inicializar una matriz bidimensional

La sintaxis es muy parecida a la declaración de un array unidimensional, aunque debemos añadir dos corchetes

```java
tipo_de_variable[][] nombre_de_variable = new tipo_de_variable[nfilas][ncolumnas];
```

Debemos indicar, además, dos tamaños para la matriz. Un tamaño para el número de filas (nfilas) y un tamaño para el número de columnas (ncolumnas) de nuestra matriz. Si piensas en la estructura de una tabla quizá te ayude a visualizarlo. Siguiendo el ejemplo de la tabla anterior, para declarar la matriz notasCurso

int[][] notasCurso = new int[4][3]; // 4 filas y 3 columnas Y si quisiéramos rellenar los datos del alumno Baby yoda: notasCurso[0][0] = 9; // fila 0, columna 0 notasCurso[0][1] = 10; // fila 0, columna 1 notasCurso[0][2] = 10; // fila 0, columna 2 notasCurso[1][0] = 3; // fila 1, columna 0 notasCurso[1][1] = 4; // fila 1, columna 1 notasCurso[1][2] = 5; // fila 1, columna 2 notasCurso[2][0] = 9; // fila 2, columna 0 notasCurso[2][1] = 8; // fila 2, columna 1 notasCurso[2][2] = 10; // fila 2, columna 2 notasCurso[3][0] = 8; // fila 3, columna 0 notasCurso[3][1] = 9; // fila 3, columna 1 notasCurso[3][2] = 9; // fila 3, columna 2

V3.02.11.23 Los datos de la tabla de alumnos se almacenan en este tipo de estructura, con los índices de filas y columnas para acceder a cada elemento

índices columnas

índices filas Sin embargo, hay una forma más sencilla de inicializar la matriz con unos valores predeterminados

```java
int[][] notasCurso = {
```

{9,10,10}, {3,4,5}, {9,8,10}, {8,9,9}, };

#### 3.4.2. Recorrer una matriz bidimensional

Una vez tengamos la matriz rellanada con datos, podremos recorrer los elementos de la matriz para mostrarlos por pantalla. Como tenemos un array bidimensional, a diferencia del array unidimensional, deberemos utilizar un bucle anidado: un bucle para recorrer las filas y otro bucle para recorrer las columnas.

Como puedes observar en este código, para controlar que estamos dentro del rango del tamaño de la fila o columna, utilizamos el método length Sin embargo, debes fijarte que a diferencia de como lo hacíamos con el array unidimensional, se debe indicar de que array queremos obtener el tamaño (el de las filas o el de las columnas)

V3.02.11.23 notasCurso.length; // nos devuelve el número de filas de la matriz notasCurso notasCurso[i].length; // nos devuelve el número de columnas que tiene la fila i Nota Una matriz es un array de arrays. Por tanto, podríamos visualizar que una matriz tiene N arrays (n filas) de M elementos cada uno. Por ejemplo, en el ejemplo anterior, tenemos una matriz compuesta por 4 arrays y cada array está compuesto de 3 elementos.

Finalmente, hay que tener en cuenta que las operaciones y restricciones que se aplican a un array unidimensional también valen para los arrays multidimensionales.

### 4. Cadenas de caracteres

Ya sabemos utilizar el tipo de dato char para almacenar un carácter.

```java
char letra = ‘a’;
```

Un texto no es nada más y nada menos que una cadena de caracteres. Por tanto, ahora que ya conocemos el concepto de array, podríamos crear la cadena “apto” como un array de tipo char

```java
char[] calificacion = {‘a’, ‘p’, ‘t’, ‘o’};
```

Aunque como puedes comprobar esta forma de crear cadenas no es eficiente. ¿Y si tuviéramos que crear textos más largos? Es por ello que Java incluye el tipo String, que ha sido especialmente diseñado para la manejar cadenas. En la unidad 3 ya se hizo una introducción al tipo de dato String. Sin embargo, no se profundizó en los métodos de los que este tipo de dato dispone. En los siguientes apartados se hará una descripción detallada del potencial de la clase String para crear y manipular cadenas de texto.

Nota Recuerda que String es una clase. Y al igual que la clase Scanner, Math o Arrays, proporciona una serie de herramientas (métodos) que incluyen algoritmos que nos facilitan la tarea de programar. Estas son las operaciones más habituales que se hacen con una cadena de texto

• Creación de una cadena. • Leer la cadena desde la entrada estándar. • Acceder a un carácter de la cadena. • Determinar la longitud de la cadena. • Concatenar con otras cadenas.

V3.02.11.23 • Comparar con otras cadenas. • Extraer una subcadena. • Buscar texto dentro de la cadena. • Expresiones regulares En los siguientes apartados estudiaremos estas operaciones haciendo uso de los objetos de Java más adecuados.

#### 4.1. La clase String

Hasta ahora hemos utilizado la clase String como variable para crear datos de tipo cadena. A continuación, estudiaremos los métodos que proporciona esta clase para manipular cadenas de texto. 4.1.1 Declaración, creación e inicialización Existen diferentes formas de construir un String. A continuación, se muestra un ejemplo en el que se construye a partir de una secuencia de carateres encerrados entre comillas dobles (“”) y a través de un array de elementos de tipo char.

Nota Una vez que se crea e inicializa un String este es inmutable y no se puede modificar.

#### 4.1.2. Lectura desde teclado

En la unidad 3 ya aprendimos a obtener una cadena de texto desde la entrada estándar (teclado) con la clase Scanner mediante el método nextLine()

```java
Scanner sc = new Scanner(System.in);
String nombre = sc.nextLine();
```

Cuidado, no confundir nextLine() con next(). Por ejemplo, si escribimos “Ada Lovelace” en la entrada del programa y pulsamos la tecla enter

V3.02.11.23 • nextLine(): obtiene una cadena hasta encontrar el retorno de carro (la tecla enter). Por tanto, obtiene la cadena “Ada Lovelace”. • next(): obtiene una cadena hasta encontrar el carácter espacio. En este caso, la cadena que obtiene es “Ada”.

#### 4.1.3. Acceder a un carácter de la cadena

En la unidad 3 también aprendimos a obtener un carácter desde teclado con el método: charAt(int posicion) Y lo utilizábamos de esta forma

```java
Scanner sc = new Scanner(System.in);
String nombre = sc.nextLine().charAt(0);
```

Aunque lo utilizáramos junto con la clase Scanner, este método pertenece realmente a la clase String. Si descomponemos el anterior ejemplo en más instrucciones se puede entender mejor

```java
Scanner sc = new Scanner(System.in);
```

String nombre = sc.nextLine(); // Obtiene “Ada Lovelace”

char caracter = nombre.charAt(0); // Obtiene ‘A’ Hasta ahora le hemos pasado un 0 (cero) al charAt() para obtener el primer carácter de la cadena. En cierta manera, esto se puede ver como un truco para obtener un carácter de entrada. Sin embargo, podemos obtener cualquier carácter de la cadena modificando ese valor. Por ejemplo, si queremos obtener la segunda letra de “Ada Lovelace”

char caracter = nombre.charAt(1); // Me da el carácter ‘d’ Ten en cuenta que la cadena es un array y por tanto sus índices funcionan de la misma manera.

#### 4.1.4. Longitud de la cadena

Al igual que en los arrays, se puede saber cuántas letras forman una cadena con length

```java
String nombre = “Grace Hooper”;
System.out.println( nombre.length() ); // 12
```

Otro ejemplo más completo donde mostramos carácter a carácter una cadena de texto de

V3.02.11.23

Como puedes observar hemos utilizado otra operación sobre String

```java
nombre.toCharArray();
```

Esto convierte la variable nombre, que es de tipo String, en un array de caracteres.

#### 4.1.5. Concatenar cadenas

En el caso de que queramos concatenar (juntar) dos podemos utilizar el método concat. La instrucción que se muestra a continuación concatena la cadena bienvenida y la cadena nombre, y la cadena resultante se guarda en otra cadena llamada saludo

```java
String bienvenida = “Bienvenida “;
String nombre = “Hedy Lamarr”;
String saludo = bienvenida.concat(nombre);
```

O también

```java
String bienvenida = “Bienvenida “;
String saludo = bienvenida.concat(“Hedy Lamarr”);
```

Aunque debido a que la concatenación de cadenas es una operación muy habitual en los programas, Java permite hacer de una manera más simple. Es una operación que hemos ido haciendo durante el curso como puedes ver en el siguiente ejemplo

```java
String saludo = bienvenida + nombre;
```

También se permite concatenar cadenas con números, y en este caso el número se convertirá a String automáticamente

```java
System.out.println(“Nota final: “ + 7.2);
```

O también

```java
String mensajeNota = “Nota final: “ + 7.2;
System.out.println(mensajeNota);
```

Pero recuerda, que si haces operaciones aritméticas dentro del operador de concactenación ‘+’, debes ponerlas entre paréntesis

V3.02.11.23

```java
System.out.println(“Nota final: “ + (7.2 + 2);
```

#### 4.1.6. Comparar cadenas

Ya sabemos cómo ver si una cadena tiene exactamente un cierto valor o si dos cadenas son iguales o no. Para

```java
ello empleamos la operación equals (y no ==). Siendo s1 y s2 variables de tipo String: s1.equals(s2);
```

Sin embargo, no sabemos comprobar qué cadena es mayor que otra (cuál aparecería la última de las dos en un diccionario), y se trata de algo que es necesario si deseamos ordenar textos. El operador mayor que (>), que usamos con los números, no se puede aplicar directamente en cadenas. En su lugar, debemos emplear el operador compareTo, el cual devolverá un número mayor que 0 si nuestra cadena es mayor que la que indicamos como parámetro (o un número negativo si nuestra cadena es menor, o 0 (cero) si son iguales)

#### 4.1.7. Extraer una subcadena

Como hemos visto anteriormente, podemos extraer un carácter de una cadena con charAt. Además, también podemos obtener una subcadena de la cadena utilizando substring. Por ejemplo

```java
String mensaje1 = “Bienvenido a Programación”;
String mensaje2 = mensaje1.substring(0,13) + “Bases de Datos”;
System.out.println(mensaje2); // Muestra “Bienvenido a Bases de Datos”
```

Se puede deducir que la subcadena se toma desde la posicion inicial (por ejemplo, 0) hasta una posición final (sin incluir esa posición final). Por ejemplo, “Bienvenido a “ tiene 13 caracteres (cuenta el último espacio), y queremos obtener la subcadena desde el principio.

#### 4.1.8. Buscar en una cadena

La inmensa mayoría los editores de texto, navegadores, etc, ofrecen la opción de buscar alguna palabra dentro del texto. En los String, para ver si una cadena contiene un cierto texto, podemos usar indexOf (puede leerse como posición de), que nos dice en qué posición se encuentra la cadena buscada. En caso de que sea 0 será la primera, y en caso de que no se encuentre, -1.

Un ejemplo de su uso es el siguiente

V3.02.11.23 Salida: Palabra encontrada en la posición: 4 Ten en cuenta que empieza contando los caracteres de la cadena desde 0.

#### 4.1.9. Otras operaciones con cadenas

Podemos utilizar otras operaciones útiles para tratar cadenas: •

```java
Convertir cadena a minúsculas: cadena.toLowerCase();
```

•

```java
Convertir cadena a mayúsculas: cadena.toUpperCase();
```

•

```java
Eliminar espacios en ambos extremos de la cadena de texto: cadena.trim();
```

•

```java
Comprobar si la cadena está vacía: cadena.isEmpty();
```

Nota Toda la información de la clase String la puedes encontrar en su documentación oficial: https://docs.oracle.com/javase/7/docs/api/java/lang/String.html

#### 4.2. Expresiones regulares con cadenas de texto

A menudo necesitaremos escribir código que valide la entrada del usuario, como por ejemplo comprobar si el dato es un número, una cadena con todos los caracteres en minúscula, o si es el DNI. Este tipo de problemas se pueden solucionar adecuadamente utilizando expresiones regulares.

Una expresión regular (abreviada como regex en inglés) es una carácter o conjunto de caracteres (cadena) que describe un patrón de búsqueda. De esta manera, podemos encontrar, reemplazar o separar una cadena según un determinado patrón de búsqueda. Nota Las expresiones regulares son una herramienta extremadamente útil y potente, muy utilizadas tanto por administradores de sistemas como programadores web con lenguajes de tipo script.

El método que maneja principalmente las expresiones regulares con la clase String es matches. Este método devuelve true si la cadena que se examina coincide con la expresión regular. En principio, matches es muy similar a equals. Por ejemplo, las siguientes dos instrucciones son evaluadas como true.

```java
String lenguaje = “Java”;
```

lenguaje.matches(“Java”); // true

V3.02.11.23 lenguaje.equals(“Java”); // true Sin embargo, la herramienta matches es mucho más potente. No solo puede confirmar la coincidencia de una determinada cadena con otra, sino también un conjunto de cadenas que siguen un patrón determinado (expresión regular). Por ejemplo, a partir de estos tres mensajes

```java
String mensaje1 = “Java mola”;
String mensaje2 = “Java es divertido”;
String mensaje3 = “Java es potente”;
```

Podemos aplicar el método matches, el cual evaluará las siguientes instrucciones como true: mensaje1.matches(“Java.*”); // true mensaje2.matches(“Java.*”); // true mensaje3.matches(“Java.*”); // true “Java.*” es una expresión regular. Describe el patrón de una cadena que empieza por la palabra Java seguida por cero o más caracteres.

Otro ejemplo

```java
String codigo = “440-02-4534”;
```

codigo.matches(\\d{3}-\\d{2}-\\d{4}); // true En el anterior ejemplo \\d representa un único dígito, y \\d{3} representa 3 dígitos. A continuación, se hace un resumen en forma de tablas de los meta caracteres disponibles que pueden utilizarse en expresiones regulares.

Símbolos comunes en expresiones regulares Regex Descripción . Un punto indica cualquier carácter ^regex El símbolo ^ indica el principio del String. En este caso el String debe contener la expresión al principio. regex$ El símbolo $ indica el final del String. En este caso el String debe contener la expresión al final.

[abc] Los corchetes representan una definición de conjunto. En este ejemplo el String debe contener las letras a ó b ó c. [abc][12] El String debe contener las letras a ó b ó c seguidas de 1 ó 2 [^abc] El símbolo ^ dentro de los corchetes indica negación. En este caso el String debe contener cualquier carácter excepto a ó b ó c.

[a-z1-9] Rango. Indica las letras minúsculas desde la a hasta la z (ambas incluidas) y los dígitos desde el 1 hasta el 9 (ambos incluidos) A|B El carácter | es un OR. A ó B

V3.02.11.23 AB Concatenación. A seguida de B Meta caracteres Regex Descripción \d Dígito. Equivale a [0-9] \D No dígito. Equivale a [^0-9] \s Espacio en blanco. Equivale a [ \t\n\x0b\r\f] \S No espacio en blanco. Equivale a [^\s] \w Una letra mayúscula o minúscula, un dígito o el carácter _ Equivale a [a-zA-Z0-9_] \W Equivale a [^\w] \b Límite de una palabra.

Cuantificadores Regex Descripción {X} Indica que lo que va justo antes de las llaves se repite X veces {X,Y} Indica que lo que va justo antes de las llaves se repite mínimo X veces y máximo Y veces. También podemos poner {X,} indicando que se repite un mínimo de X veces sin límite máximo.

* Indica 0 ó más veces. Equivale a {0,} + Indica 1 ó más veces. Equivale a {1,} ? Indica 0 ó 1 veces. Equivale a {0,1}

V3.02.11.23 Ejemplo de uso de expresiones regulares

#### 4.2.1. Reemplazar subcadenas

Muchas veces necesitaremos reemplazar una palabra por otro dentro de un texto. Esto se puede hacer de forma sencilla con replaceAll

```java
String noticia = “Rafa Nadal golpeó la pelota con su raqueta mientras comía una pelota”;
String notificaFake = noticia.replaceAll(“pelota”, “naranja”);
System.out.println(noticiaFake);
```

Salida: Rafa Nadal golpeó la naranja con su raqueta mientras comía una naranja El primer parámetro de replaceAll es la cadena buscada y el segundo parámetro es la cadena por la que se va a reemplazar. Nota Los String son inmutables y es por ello que necesitamos guardar en otro String el resultado de la cadena reemplazada.

Sin embargo, también es posible que queramos reemplazar una cadena según un patrón de caracteres determinado. Ahora ya sabemos que lo podemos resolver con una expresión regular. Asimismo, replaceAll acepta como primer parámetro una expresión regular. En el siguiente ejemplo reemplazamos el patrón “ab”, pero solamente el que aparece al principio de la cadena1

V3.02.11.23

Salida: xyc bca abzd ab cdabs

#### 4.2.2. Separar cadena en subcadenas

Una operación relativamente frecuente, pero trabajosa, es descomponer una cadena en varios fragmentos que estén delimitados por ciertos separadores. Por ejemplo, podríamos descomponer una frase en varias palabras que estaban separadas por espacios en blanco. Si lo queremos hacer "de forma artesanal", podemos recorrer la cadena buscando y contando los espacios (o los separadores que nos interesen). Así podremos saber el tamaño del array que deberá almacenar las palabras (por ejemplo, si hay dos espacios, tendremos tres palabras). En una segunda pasada, obtendremos las subcadenas que hay entre cada dos espacios y las guardaríamos en el array. No es especialmente sencillo.

Afortunadamente, Java nos permite hacerlo con split, que crea un array a partir de los fragmentos de la cadena, usando el separador que le indiquemos, así

Salida: Lenguaje 0 = Java Lenguaje 1 = C# Lenguaje 2 = Python Lenguaje 3 = C++ Aunque también podemos usar expresiones regulares

Obtenemos la misma salida que en el ejemplo anterior.

V3.02.11.23

### 5. Bibliografía

Documentación oficial: https://docs.oracle.com/en/java/javase/17/docs/api/index.html Librerías de clases útiles: Apuntes de José Chamorro del CFGS DAW del .

---

# 5.2 Estructuras de datos estaticas

Programación

### UD 5: Estructuras de datos estáticas

Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web Jose Chamorro Molina Actualizado por: José Ramón Simó

Programación

### UD 1: Introducción a la Programación

Introducción a la Programación ORDEN 60/2012, de 25 de septiembre, de la Conselleria de Educación, Formación y Empleo por la que se establece para la Comunitat Valenciana el currículo del ciclo formativo de Grado Superior correspondiente al título de Técnico Superior en Desarrollo de Aplicaciones Web. [2012/9149] Contenidos

6.- Aplicación de las estructuras de almacenamiento: 6.1.− Librerías de clases. 6.2.− Estructuras. 6.3.− Creación de arrays. 6.4.− Inicialización. 6.5.− Arrays multidimensionales. 6.6.− Clases y métodos genéricos. 6.7.− Cadenas de caracteres. Expresiones regulares. Real Decreto 686/2010, de 20 de mayo, por el que se establece el título de Técnico Superior en Desarrollo de Aplicaciones Web y se fijan sus enseñanzas mínimas.

Resultados de aprendizaje

- Escribe programas que manipulen información, seleccionando y utilizando tipos avanzados de datos.

Criterios de evaluación: 6.a) Se han escrito programas que utilicen arrays. 6.b) Se han reconocido las librerías de clases relacionadas con tipos de datos avanzados. Competencias profesionales, personales y sociales

- Integrar contenidos en la lógica de una aplicación web, desarrollando componentes de acceso a datos adecuados a

las especificaciones.

Programación

Estructuras de datos estáticas 1.- Librerías de clases 2.- Estructuras de datos 3.- Creación de arrays 4.- Arrays multidimensionales 5.- Clases y métodos genéricos 6.- Cadenas de caracteres 7.- Expresiones regulares

1.- Librerías de clases Programación

1.- Librerías de clases Clases envoltorio (wrapper) ✓ En ocasiones es útil tratar los tipos de datos básicos como objetos.

int, byte, short, long, char, boolean, float, double ✓ Muchas funciones y clases trabajan con elementos que heredan de la clase Object.

No funcionarán directamente con estos tipos básicos. ✓ Existe una clase envoltorio por cada tipo básico. ✓ Cada una tiene un único atributo, que es del tipo básico al que “envuelven”. Programación

1.- Librerías de clases Clases envoltorio (wrapper) Programación

Tipo básico Clase envoltorio int Integer char Character boolean Boolean long Long double Double float Float short Short byte Byte

1.- Librerías de clases La clase Integer https://docs.oracle.com/javase/9/docs/api/java/lang/Integer.html Constantes

```java
int max = Integer.MAX_VALUE;
int min = Integer.MIN_VALUE;
```

Métodos //Pasar de INT a String

```java
int a1 = 45678;
String a2 = Integer.toString( a1 );
```

//Pasar de String a INT

```java
String b1 = "45678";
int b2 = Integer.parseInt( b1 );
int b3 = Integer.parseInt​(CharSequence s, int beginIndex, int endIndex, int radix);
```

> **💡 Apunt Tècnic**
> Ejemplo

cadena = sc.next(); // Lee la siguiente cadena: “13-14”

```java
String[] separada = cadena.split("-");
```

a = Integer.parseInt( separada[0] ); // Pasar el 13 de texto a número

b = Integer.parseInt( separada[1] ); // Pasar el 14 de texto a número Programación

1.- Librerías de clases Boxing y Unboxing automáticos Desde la versión 5 de Java, se convierte automáticamente entre las clases envoltorios y sus correspondientes tipos básicos. Si se introduce un tipo básico donde se espera un objeto de una clase envoltorio, se llama al constructor correspondiente (boxing).

Si se introduce un objeto de una clase envoltorio donde se espera un tipo básico, se llama al método de acceso correspondiente (unboxing).

```java
Integer x = 5, y = 9;
```

//Boxing

```java
int z = x + y;
```

//Unboxing

```java
System.out.printf("%s + %s = %d", x, y, z);
```

Programación

1.- Librerías de clases La clase Character https://docs.oracle.com/javase/9/docs/api/java/lang/Character.html Ejemplo: Se ha impuesto una política de contraseñas para seguridad de la información de una empresa. Debemos ayudar a escribir un programa que comprueba si la contraseña es válida (mostrando OK) o inválida (mostrando ERROR).

Los requerimientos son los siguientes: ✓ Al menos una letra minúscula. ✓ Al menos una letra mayúscula. ✓ Al menos un dígito.

```java
✓ Al menos un símbolo del conjunto +_)(*&^%$#@!./,;{}
```

✓ Longitud mínima de 12.

```java
Character.isDigit('3');
```

//Devuelve True

```java
Character.isLetter('3');
```

//Devuelve False

```java
Character.isUpperCase('D');
```

//Devuelve True

```java
Character.toLowerCase('D');
```

//Devuelve ‘d’ Programación

1.- Librerías de clases La clase Random https://docs.oracle.com/javase/9/docs/api/java/util/Random.html Crear un objeto de la clase Random

```java
Random r = new Random();
```

Hay cuatro funciones miembro diferentes que generan números aleatorios: Programación

Función miembro Descripción Rango r.nextInt() Número aleatorio entero de tipo int 2-32 y 232 r.nextLong() Número aleatorio entero de tipo long 2-64 y 264 r.nextFloat() Número aleatorio real de tipo float [0,1[ r.nextDouble() Número aleatorio real de tipo double [0,1[

1.- Librerías de clases La clase Random En el caso de necesitar números aleatorios enteros en un rango determinado, podemos trasladarnos a un intervalo distinto, simplemente multiplicando, aplicando la siguiente fórmula general

(int) (rnd.nextDouble() * cantidad_números_rango + término_inicial_rango) donde (int) al inicio, transforma un número decimal double en entero int, eliminando la parte decimal. Por ejemplo, si deseamos números aleatorios enteros comprendidos entre [1,6], que son los lados de un dado, la fórmula quedaría así.

```java
(int)(rnd.nextDouble() * 6 + 1);
```

donde 6 es la cantidad de números enteros en el rango [1,6] y 1 es el término inicial del rango. Programación

1.- Librerías de clases La clase Math https://docs.oracle.com/javase/9/docs/api/java/lang/Math.html Programación

MÉTODO DESCRIPCIÓN EJEMPLO DE USO RESULTADO abs Devuelve el valor absoluto de un numero.

```java
int x = Math.abs(2.3);
x = 2;
```

ceil Devuelve el entero más cercano por arriba.

```java
double x = Math.ceil(2.5);
x = 3.0;
```

floor Devuelve el entero más cercano por debajo.

```java
double x = Math.floor(2.5);
x = 2.0;
```

round Devuelve el entero más cercano.

```java
double x = Math.round(2.5);
x = 3.0;
```

log Devuelve el logaritmo natural en base e de un número.

```java
double x = Math.log(2.71);
x = 0.9996;
```

max Devuelve el mayor de dos entre dos valores.

```java
int x = Math.max(3, 8);
x = 8;
```

min Devuelve el menor de dos entre dos valores.

```java
int x = Math.min(3, 8);
x = 3;
```

random Devuelve un número aleatorio entre 0 y 1. Se pueden cambiar el rango de generación.

```java
double x = Math.ramdom();
x = 0.206178;
```

sqlrt Devuelve la raíz cuadrada de un número.

```java
double x = Math.sqlrt(9);
x = 3.0;
```

pow Devuelve un número elevado a un exponente.

```java
double x = Math.pow(2, 10);
x= 1024.0;
```

… … … … CONSTANTE DESCRIPCIÓN PI Devuelve el valor de PI. Es un double. E Devuelve el valor de E (Euler). Es un double.

1.- Librerías de clases Manejo de fechas con: • LocalDate • LocalTime • LocalDateTime • Period • Duration Ver apuntes 05a – Estructuras de datos estáticas Programación

1.- Librerías de clases La clase Arrays La clase java.util.Arrays contiene una batería de métodos estáticos útiles para el manejo de arrays de cualquier tipo.

static int binarySearch(int[] a, int clave)

static int[] copyOf(int[] a, int longitud)

static boolean equals(int[] a, int[] b)

static void fill(int[] a, int valor)

System.arrayCopy()

static void sort(int[] a)

static String toString(int[] a) El método System.arrayCopy permite copiar elementos de un array en otro.

```java
static void arrayCopy(Object origen, int posOrigen, Object destino, int posDestino, int longitud);
```

Programación

1.- Librerías de clases La Interfaz Collections Especifica funciones para manejar grupos de objetos, conocidos como elementos. boolean add(Object o) boolean addAll(Collection c) void clear() boolean contains(Object o) boolean isEmpty() boolean remove(Object o) int size() Iterator iterator() Object[] toArray() NOTA: esta interfaz ser verá con mas profundidad en la “U.D.7 Estructuras de Datos Dinámicas” Programación

2.- Estructuras de datos Programación

2.- Estructuras de datos Empecemos recordando que un dato de tipo simple, no esta compuesto de otras estructuras, que no sean los bits, y que por tanto su representación sobre el ordenador es directa, sin embargo existen unas operaciones propias de cada tipo, que en cierta manera los caracterizan.

Una estructura de datos es, a grandes rasgos, una colección de datos (normalmente de tipo simple) que se caracterizan por su organización y las operaciones que se definen en ellos. Llamaremos dato de tipo estructurado a una entidad, con un solo identificador, constituida por datos de otro tipo, de acuerdo con las reglas que definen cada una de las estructuras de datos.

Los datos estructurados se pueden clasificar según la variabilidad de su tamaño durante la ejecución del programa en: estáticos y dinámicos. Programación

2.- Estructuras de datos Estructuras de datos estáticas Las estructuras estáticas son aquellas en las que el tamaño ocupado en memoria se define con anterioridad a la ejecución del programa que los usa, de forma que su dimensión no puede modificarse durante la misma (p.e., un vector o una matriz) aunque no necesariamente se tenga que utilizar toda la memoria reservada al inicio (en todos los lenguajes de programación las estructuras estáticas se representan en memoria de forma contigua).

Estructuras de datos dinámicas Por el contrario, ciertas estructuras de datos pueden crecer o decrecer en tamaño, durante la ejecución, dependiendo de las necesidades de la aplicación, sin que el programador pueda o deba determinarlo previamente: son las llamadas estructuras dinámicas. Las estructuras dinámicas no tienen teóricamente limitaciones en su tamaño, salvo la única restricción de la memoria disponible en el computador.

> **⚠️ NOTA: Las estructuras de datos dinámicas se estudian en...**
> NOTA: Las estructuras de datos dinámicas se estudian en la UD7 Programación

Estructuras de Datos Estáticas Simples boolean char int Compuestas vectores matrices strings archivos Dinámicas pilas colas listas árboles 2.- Estructuras de datos Programación

3.- Creación de arrays Programación

3.- Creación de arrays Los arrays permiten almacenar una colección de objetos o datos del mismo tipo. Son muy útiles y su utilización es muy simple: Declaración del array: La declaración de un array consiste en decir “esto es un array” y sigue la siguiente estructura

tipo[] nombre; El tipo será un tipo de variable o una clase ya existente, de la cual se quieran almacenar varias unidades. Creación del array: La creación de un array consiste en decir el tamaño que tendrá el array, es decir, el número de elementos que contendrá, y se pone de la siguiente forma

nombre = new tipo[dimension] Donde dimensión es un número entero positivo que indicará el tamaño del array. Una vez creado el array este no podrá cambiar de tamaño. Declaración y creación

tipo[] nombre = new tipo[dimension] Programación

3.- Creación de arrays Programación

3.- Creación de arrays Ejemplos: //Declarar un vector int[] numeros; //Declarar y crear un vector de tamaño 7 (0..6)

```java
String[] dias = new String[7];
```

//Crear e Inicializar un vector

```java
int[] inicializado = {1, 2, 3, 4, 5};
```

//Modificar el valor de una posición del vector

```java
dias[0] = "lunes";
dias[3] = "jueves";
```

//Acceder al valor de una posición del vector

```java
int valor = inicializado[2];
```

//valor = 3

```java
System.out.println( valor );
```

Programación

3.- Creación de arrays Programación

Recorrido Ascendente

```java
public static void imprimirVectorAscendente(int[] miVector){
for (int i = 0; i < miVector.length; i++) {
```

```java
System.out.printf("%4d", miVector[i]);
}
System.out.printf("\n");
}
```

Recorrido Descendente

```java
public static void imprimirVectorDescendente(int[] miVector){
for (int i = miVector.length-1; i >= 0; i--) {
System.out.printf("%4d", miVector[i]);
}
System.out.printf("\n");
}
```

3.- Creación de arrays La clase Arrays La biblioteca de clases de Java incluye una clase auxiliar llamada java.util.Arrays que incluye como métodos algunas de las tareas que se realizan más a menudo con vectores: Arrays.sort(v) ordena los elementos del vector. Arrays.equals(v1, v2) comprueba si dos vectores son iguales.

Arrays.fill(v, val) rellena el vector v con el valor val. Arrays.toString(v) devuelve una cadena que representa el contenido del vector. Arrays.binarySearch(v, k) busca el valor k dentro del vector v (que previamente ha de estar ordenado). Programación

4.- Arrays multidimensionales Programación

4.- Arrays multidimensionales //Declarar una matriz int[][] matriz; //Declarar e Inicializar una matriz

```java
int[][] miMatriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```

//Obtener el número de filas y columnas de la Matriz int filas

```java
= miMatriz.length;
int columnas = miMatriz[0].length;
```

//Recorrer e Imprimir todos los elementos de la Matriz

```java
for (int i = 0; i < filas; i++){
for(int j = 0; j < columnas; j++){
```

//Recuperar el valor de la posición (i,j) de la Matriz

```java
System.out.printf("%4d", miMatriz[i][j]);
}
System.out.printf("\n");
}
```

Programación

4.- Arrays multidimensionales //Declarar y crear una matriz vacía

```java
int[][] puntuaciones = new int[3][3];
```

//Asignar valores a todas las posiciones de la matriz

```java
puntuaciones[0][0] = 50;
puntuaciones[0][1] = 100;
puntuaciones[0][2] = 75;
puntuaciones[1][0] = 0;
puntuaciones[1][1] = 84;
puntuaciones[1][2] = 17;
puntuaciones[2][0] = 369;
puntuaciones[2][1] = 8;
puntuaciones[2][2] = 44;
```

Programación

[0] [1] [2] [0] [1] [2]

5.- Clases y métodos genéricos Programación

5.- Clases y métodos genéricos Tipos genéricos o Generic Types son clases o interfaces parametrizadas por un tipo. Métodos genéricos o Generic Methods son métodos donde se definen y utilizan los tipos genéricos pero que están limitados al ámbito del método donde se declara.

Por tanto en una clase genérica o Generic Class podemos tener métodos genéricos y métodos normales, y en una clase normal podemos tener métodos genéricos y métodos normales. La declaración del tipo genérico se encuentra entre los caracteres < y > Para más información

https://www.arquitecturajava.com/uso-de-java-generics/ Programación

6.- Cadenas de caracteres Programación

6.- Cadenas de caracteres La clase String https://docs.oracle.com/javase/9/docs/api/java/lang/String.html Son parte del lenguaje (no hay que importarlos) Se crean

```java
String s = new String(“Hola Mundo”);
```

pero esto se puede resumir con

```java
String s = “Hola Mundo”;
```

Tamaño de un String

```java
int i = s.length();
```

k-esimo carácter

```java
char c = s.charAt(k);
```

Subsecuencias

```java
String sub = s.substring(k);
String sub = s.substring(inicio, fin);
```

Búsqueda de subsecuencias

```java
int i = s.indexOf(“hola”);
int i = s.indexOf(String str, int inicio);
```

Programación

6.- Cadenas de caracteres La clase String Comparacion (boolean)

```java
s1.equals(s2);
```

Comparacion (entero)

```java
int i = s1.compareTo(s2);
```

0 si s1 == s2, >0 si s1 > s2, <0 si s1 < s2

int compareToIgnoreCase(String otra) Pasar a mayúsculas: String.toUpperCase() Pasar a minúsculas: String.toLowerCase() Quitar espacios: String.trim() Separar cadenas

```java
String[] separada = cadena.split("-");
```

Programación

6.- Cadenas de caracteres La clase String

```java
String cadena = "Esto es un ejemplo";
System.out.println(cadena.charAt(2));
```

//t

```java
System.out.println(cadena.indexOf("es"));
```

//5

```java
System.out.println(cadena.toLowerCase());     //esto es un ejemplo
System.out.println(cadena.toUpperCase());
```

//ESTO ES UN EJEMPLO

```java
System.out.printf("|%s|", " cadena ".trim()); //|cadena|
```

La clase StringBuffer Los objetos de la clase String son inmutables. No pueden cambiarse una vez creados. Un objeto StringBuffer puede ser modificado tras su creación.

Método append()

Método delete()

Método insert()

… En el caso de cadenas mutables, es más eficiente que crear Strings desde cero. Programación

7.- Expresiones regulares Programación

7.- Expresiones regulares Una expresión regular es un patrón que describe un conjunto de cadenas. Por ejemplo

[gm]ato describe las palabras “gato” y “mato”.

\d\d\d describe una secuencia de tres dígitos.

(des)?atar describe las palabras “desatar” y “atar”.

[A-Z][a-z]* describe una palabra que comienza con letra mayúscula. Programación

7.- Expresiones regulares Clases de caracteres Programación

Símbolo Caracteres admisibles [abc] a, b, c [^abc] Cualquier carácter excepto a, b, c [a-z] Carácter de a a z [a-z0-9] Carácter de a a z, y de 0 a 9 . Cualquier carácter \d Carácter numérico \D Carácter no numérico (=[^\d]) \s Carácter blanco, tabulador, salto de línea, etc. \S Carácter no blanco, tabulador, salto de línea, etc.

\w Carácter alfanumérico, o símbolo de subrayado. \W Carácter no alfanumérico, ni símbolo de subrayado

7.- Expresiones regulares Capturadores de límites Operadores Programación

Símbolo Captura ^ Inicio de línea $ Fin de línea \b Límite de palabra \A Inicio de entrada \G Fin de entrada Símbolo Captura XY X seguido de Y X|Y X o Y (X) Agrupamiento: X como un grupo de captura \número Referencia a grupo de captura anterior

7.- Expresiones regulares Cuantificadores Si se quiere capturar literalmente uno de los caracteres especiales, ha de introducirse precedido por el carácter especial \. Por ejemplo, \( captura el carácter (. Programación

Expresión Captura X? X una vez, o ninguna. X* X cero o más veces. X+ X una o más veces. X{n} X repetido n veces. X{n,} X repetido n veces o más. X{n,m} X repetido de n a m veces.

7.- Expresiones regulares Programación

7.- Expresiones regulares Cuantificadores (II) [ab]*b

aabaabaa Intenta ajustar la cadena total. Si no es posible,

retrocede hasta lograr un ajuste. [ab]*?b

aabaabaa Intenta ajustar la cadena vacía. Si no es posible,

avanza hasta lograr un ajuste. [ab]*+b

aabaabaa Intenta ajustar la cadena total. Si no es posible,

no hay ajuste. Programación

Voraces Reticentes Posesivos X? X?? X?+ X* X*? X*+ X+ X+? X++ X{n} X{n}? X{n}+ X{n,} X{n,}? X{n,}+ X{n,m} X{n,m}? X{n,m}+

7.- Expresiones regulares La clase Pattern Paquete java.util.regex Sus objetos representan expresiones regulares compiladas. No tiene constructores públicos. Creación

static Pattern compile(String regex) Métodos

static boolean matches(String regex, CharSequence cadena)

Matcher matcher(CharSequence cadena) La clase Matcher Realiza el reconocimiento de una expresión regular a una cadena específica No tiene constructor público. Métodos: boolean matches() boolean find() int start() / int start(int grupo) int end() / int end(int grupo) String group() / String group(int grupo) String replaceAll(String reemplazo) Programación

7.- Expresiones regulares Ejemplo

```java
import java.util.regex.*;
public class RegexTest
```

{

```java
private static final String cadena = "+34 918237173\n" +
```

"+31 628838812\n" + "+49 3055718080\n";

```java
private static final String regex = "\\+(\\d+)\\s+(\\d+)" ;
    public static void main(String[] args) {
Pattern p = Pattern.compile(RegexTest.regex);
Matcher m = p.matcher(RegexTest.cadena);
while (m.find()) {
```

```java
System.out.printf("Ajuste encontrado desde %d hasta %d\n", m.start(), m.end());
System.out.printf("Prefijo: %s, Teléfono: %s\n", m.group(1), m.group(2));
}
}
}
```

+34 918237173\n+31 628838812\n+49 3055718080\n Programación

7.- Expresiones regulares Ejemplo

```java
import java.util.regex.*;
public class RegexTest
```

{

```java
private static final String cadena = "+34 918237173\n" +
```

"+31 628838812\n" + "+49 3055718080\n";

```java
private static final String regex = "\\+(\\d+)\\s+(\\d+)" ;
    public static void main(String[] args) {
Pattern p = Pattern.compile(RegexTest.regex);
Matcher m = p.matcher(RegexTest.cadena);
while (m.find()) {
```

```java
System.out.printf("Ajuste encontrado desde %d hasta %d\n", m.start(), m.end());
System.out.printf("Prefijo: %s, Teléfono: %s\n", m.group(1), m.group(2));
}
}
}
```

m.find() = true

+34 918237173\n+31 628838812\n+49 3055718080\n Programación

7.- Expresiones regulares Ejemplo

```java
import java.util.regex.*;
public class RegexTest
```

{

```java
private static final String cadena = "+34 918237173\n" +
```

"+31 628838812\n" + "+49 3055718080\n";

```java
private static final String regex = "\\+(\\d+)\\s+(\\d+)" ;
    public static void main(String[] args) {
Pattern p = Pattern.compile(RegexTest.regex);
Matcher m = p.matcher(RegexTest.cadena);
while (m.find()) {
```

```java
System.out.printf("Ajuste encontrado desde %d hasta %d\n", m.start(), m.end());
System.out.printf("Prefijo: %s, Teléfono: %s\n", m.group(1), m.group(2));
}
}
}
```

m.find() = true

+34 918237173\n+31 628838812\n+49 3055718080\n Programación

7.- Expresiones regulares Ejemplo

```java
import java.util.regex.*;
public class RegexTest
```

{

```java
private static final String cadena = "+34 918237173\n" +
```

"+31 628838812\n" + "+49 3055718080\n";

```java
private static final String regex = "\\+(\\d+)\\s+(\\d+)" ;
    public static void main(String[] args) {
Pattern p = Pattern.compile(RegexTest.regex);
Matcher m = p.matcher(RegexTest.cadena);
while (m.find()) {
```

```java
System.out.printf("Ajuste encontrado desde %d hasta %d\n", m.start(), m.end());
System.out.printf("Prefijo: %s, Teléfono: %s\n", m.group(1), m.group(2));
}
}
}
```

m.find() = true

+34 918237173\n+31 628838812\n+49 3055718080\n Programación

7.- Expresiones regulares Ejemplo

```java
import java.util.regex.*;
public class RegexTest
```

{

```java
private static final String cadena = "+34 918237173\n" +
```

"+31 628838812\n" + "+49 3055718080\n";

```java
private static final String regex = "\\+(\\d+)\\s+(\\d+)" ;
    public static void main(String[] args) {
Pattern p = Pattern.compile(RegexTest.regex);
Matcher m = p.matcher(RegexTest.cadena);
while (m.find()) {
```

```java
System.out.printf("Ajuste encontrado desde %d hasta %d\n", m.start(), m.end());
System.out.printf("Prefijo: %s, Teléfono: %s\n", m.group(1), m.group(2));
}
}
}
```

m.find() = false

+34 918237173\n+31 628838812\n+49 3055718080\n Programación

Bibliografía Programación

Bibliografía Codificación de caracteres ✓https://es.wikipedia.org/wiki/Codificación_de_caracteres Clases Java ✓https://docs.oracle.com/javase/9/docs/api/java/lang/String.html ✓https://docs.oracle.com/javase/9/docs/api/java/util/Date.html ✓https://docs.oracle.com/javase/9/docs/api/java/lang/Math.html ✓https://docs.oracle.com/javase/9/docs/api/java/util/Random.html ✓https://docs.oracle.com/javase/9/docs/api/java/lang/Character.html ✓https://docs.oracle.com/javase/9/docs/api/java/lang/Integer.html Expresiones regulares ✓https://www.regular-expressions.info Clases y métodos genéricos ✓https://www.arquitecturajava.com/uso-de-java-generics/ Programación

---
