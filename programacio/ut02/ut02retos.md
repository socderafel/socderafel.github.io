[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT2 Completa](../ut2-estructures-control.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut02/ut02retos.html)

[⬅️ Anterior: Actividades prácticas UT2](../ut02/ut02actividades.md) | [➡️ Següent: Trazas de ejecución UT2](../ut02/ut02trazas.md)

---

# Retos


> 💻 **Empaquetar retos**
>
> Empaqueta las actividades, dentro de la carpeta **`ut02`**, en la carpeta **`retos`**.
>
> Las actividades programadas en esta sección **Retos** no son obligatorias.


### Reto 01

Modifica el programa para que, en lugar de hacer un descuento del *8%* si la compra es de *100 €* o más, aplique una penalización de *2 €* si el precio es inferior a *30 €*.

```java
import java.util.Scanner;
//Un programa que calcula descuento.

public class Descuento {
  public static final float DESCOMPTE = 8;
  public static final float COMPRA_MIN = 100;

  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);
    System.out.print("Cuál es el precio del producto, en euros? ");
    float preu = lector.nextFloat();
    lector.nextLine();
    if (preu >= COMPRA_MIN) {
      float descompteFet = preu * DESCOMPTE / 100;
      preu = preu - descompteFet;
      }
    System.out.println("El precio final para pagar es de " + preu + " euros.");
  }
}
```

---

### Reto 02

Modifica el programa `Adivina` para que, en lugar de un único valor secreto, haya dos. Para ganar, solo hay que acertar uno de los dos.

La condición lógica que os hará falta ya no se puede resolver con una expresión compuesta por una única comparación. Será más compleja.

```java
import java.util.Scanner;

public class Adivina {

  public static final int VALOR_SECRET = 4;

  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);
    System.out.println("Comencemos el juego.");
    System.out.print("Adivina el valor entero, entre 0 y 10: ");
    int valorUsuari = lector.nextInt();
    lector.nextLine();
    if (VALOR_SECRET == valorUsuari) {
      System.out.println("Exacto! Era " + VALOR_SECRET + ".");
    } else {
      System.out.println("Te has equivocado!");
    }
    System.out.println("Hemos terminado el juego.");
  }
}
```

---

### Reto 03

Modifica el ejemplo anterior (`Adivina`) para que  compruebe que el valor que ha introducido el usuario se encuentra dentro del rango de valores correcto (entre *0* y *10*).

---

### Reto 04

Aplica el mismo tipo de control sobre los datos de la entrada del ejemplo siguiente al ejercicio del reto 01.

```java
import java.util.Scanner;

public class AdivinaControlErrorsEntrada {

  public static final int VALOR_SECRET = 4;

  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);
    System.out.println("Comencemos el juego.");
    System.out.print("Adivina el valor entero, entre 0 y 10: ");
    boolean tipusCorrecte = lector.hasNextInt();
    if (tipusCorrecte) {
       //Se ha escrito un entero correctamente. Ya se puede leer.
       int valorUsuari = lector.nextInt();
       lector.nextLine();
       if (VALOR_SECRET == valorUsuari) {
           System.out.println("Exacto! Era " + VALOR_SECRET + ".");
       } else {
           System.out.println("Te has equivocado!");
       }
       System.out.println("Hemos terminado el juego.");
    } else {
       //No se ha escrito un entero.
       System.out.println("El valor introducido no es un entero.");
    }
  }
}
```

---

### Reto 05

Modifica el ejemplo para que primero pregunte al usuario cuántos caracteres "*-*" quieres escribir por pantalla, y entonces los escriba.

Cuando pruebes el programa, no introduzcas un número muy alto!

```java
//Un programa que escribe una línea con 100 caracteres ’ − ’.

public class Linea {

  public static void main(String[] args) {
    //Inicializamos un contador
    int i = 0;
    //Ja hemos hecho esto 100 veces
    while (i < 100) {
      System.out.print("−");
      //Lo hemos hecho una vez, sumamos 1 al contador
      i = i + 1;
    }
    //Forzamos un salto de línea
    System.out.println();
  }
}
```

---

### Reto 06

Un contador tanto puede empezar a contar desde *0* e ir subiendo, como desde el final e ir disminuyendo como una cuenta atrás.

Modifica este programa para que la tabla de multiplicar empiece mostrando el valor para *10* y vaya bajando hasta el *1*.

```java
import java.util.Scanner;
public class TablaMultiplicar {

  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);
    System.out.print("Qué tabla de multiplicar quieres? ");
    int taula = lector.nextInt();
    lector.nextLine();
    int i = 1;
    while (i <= 10) {
       int resultat = taula * i;
       System.out.println(taula + " * " + i + " = " + resultat);
       i = i + 1;
    }
    System.out.println("Esta ha estado la tabla del " + taula);
  }
}
```

---

### Reto 07

El uso de contadores y acumuladores no es excluyente, sino que puede ser complementario.

Piensa cómo se podrías modificar el programa para calcular el resultado del módulo y la división entera a la vez.

Recuerda que la división entera simplemente sería contar cuántas veces se ha podido restar el divisor.

```java
import java.util.Scanner;

public class Modulo {

  public static void main(String[] args) {
     Scanner lector = new Scanner(System.in);
     System.out.print("Cuál es el dividendo? ");
     int dividend = lector.nextInt();
     lector.nextLine();
     System.out.print("Cual es el divisor? ");
     int divisor = lector.nextInt();
     lector.nextLine();
     while (dividend >= divisor) {
        dividend = dividend - divisor;
         System.out.println("Bucle: por ahora el dividendo vale " + dividend + ".");
     }
     System.out.println("El resultado final es " + dividend + ".");
  }
}
```

---

### Reto 08

Realiza un programa que vaya pidiendo números hasta que se introduzca un numero negativo y nos diga cuantos números se han introducido, la media de los impares y el mayor de los pares.

El número negativo sólo se utiliza para indicar el final de la introducción de datos pero no se incluye en el cómputo.

---

### Reto 09 `TablaMult`

Escribe un programa que permita al usuario introducir un número `n` e imprima la tabla de multiplicar (del *0* al *10*) de todos los números entre *1* y `n`.

Ejemplo: Si el usuario introduce en número *5*, el programa imprimiría:

```java
Tabla del 1:
1 por 0, 0
1 por 1, 1
1 por 2, 2
...
1 por 10, 10

Tabla del 2:
2 por 0, 0
2 por 1, 2
....
2 por 10, 20

Tabla del 3:
...

Tabla del 5:
...
5 por 10, 50
```

---

### Reto 10 `Raiz`

Se desea calcular la raíz cuadrada real de un número real cualquiera pedido inicialmente al usuario. Como dicha operación no está definida para los números negativos es necesario tratar, de algún modo, dicho posible error sin que el programa detenga su ejecución.

---

### Reto 11 `IntermedioDeTres`

Escribir un programa que muestre el intermedio de tres números introducidos por teclado.

---

### Reto 12 `Hora12`

Escribir un programa que lea la hora de un dia en notación de 24 horas y la exprese en notación de 12 horas. Por ejemplo, si la entrada es 13 horas 45 minutos, la salida será 1:45 PM. La hora y los minutos se leerán de teclado de forma separada, primero la hora y luego los minutos.

---

### Reto 13 `Fechas`

Escribir un programa que pida al usuario dos fechas (dia, mes y año), que se suponen correctas, y le muestre la menor de ellas. La fecha se mostrará en formato dd/mm/año. Utiliza un método mostrarFecha, para mostrar la fecha por pantalla. La fecha se mostrará siempre con dos dígitos para el dia, dos para el mes y cuatro para el año.

---

### Reto 14 `DiasDelMes`

Escribir un programa que lea de teclado el número de un mes (1 a 12) y visualice el número de días que tiene el mes. Hacerlo utilizando sentencias `if else`. Para hacer el programa, implementa un método en la clase que reciba un número de mes y devuelva el número de días que tiene el mes

---

### Reto 15 `NombreDelMes`

Escribir un programa que lea de teclado el número de un mes (1 a 12) y visualice el nombre del més (enero, febrero, etc). Hacerlo utilizando sentencias `if else`. Para hacer un programa, implementa un método en la clase que reciba un número de mes y devuelva el nombre del mes

---

### Reto 16 `Salario`

Escribir un programa que lea de teclado las horas trabajadas por un empleado en una semana y calcule su salario neto semanal, sabiendo que:

- Las horas ordinarias se pagan a 6 €.
- Las horas extraordinarias se pagan a 10 €.
- Los impuestos a deducir son:  

           _ Un 2 % si el salario bruto semanal es menor o igual a 350 €  

           _ Un 10 % si el salario bruto semanal es superior a 350 €
- La jornada semanal ordinaria son 40 horas. El resto de horas trabajadas se considerarán horas extra.

---

### Reto 17 `Signo`

Dados dos números enteros, num1 y num2, realizar un programa que escriba uno de los dos mensajes:

- "el producto de los dos números es positivo o nulo" o bien
- "el producto de los dos números es negativo".

Resolverlo sin calcular el producto, sino teniendo en cuenta únicamente el signo de los números a multiplicar.

---

### Reto 18 `Comercio`

Un comercio aplica un descuento del 8% por compras superiores a 40 euros. El descuento máximo será de 12 euros. Escribir un programa que solicite al usuario el importe de la compra y muestre un mensaje similar al siguiente:

- Importe de la compra 100 €
- Porcentaje de descuento aplicado: 8%
- Descuento aplicado: 8 €
- Cantidad a pagar: 92 €

---

### Reto 19 `Editorial`

Una compañía editorial dispone de 2 tipos de publicaciones: libros y revistas. El precio de cada pedido depende del número de elementos solicitados al cual se le aplica un determinado descuento, que es diferente para libros y para revistas. La siguiente tabla muestra los descuentos a aplicar en función del número de unidades y del tipo de producto:

| Cantidad pedida | Libros | Revistas |
| --- | --- | --- |
| Hasta 5 unidades | 0 % de descuento | 0 % de descuento |
| De 6 a 10 unidades | 10 % de descuento | 15 % de descuento |
| De 11 a 20 unidades | 15 % de descuento | 20 % de descuento |
| A partir de 20 unidades | 20 % de descuento | 25 % de descuento |

Escribe un método `calcularCoste` que, recibiendo el tipo de publicación (`String`), que puede ser "libro" o "revista", el precio individual (`double`) y el número de unidades solicitado (`int`), devuelva el coste del pedido (aplicando el descuento correspondiente).
Escribe un programa en el que el usuario indique cantidad y precio de revistas y cantidad y precio de libros que incluye un pedido, y muestre el coste del pedido

---

### Reto 20 `Taxi`

Se desea calcular el coste del trayecto realizado en taxi en función de los kilómetros recorridos en las carreras metropolitanas de Valencia. Según las tarifas vigentes para el 2012, el coste se calcula de la siguiente manera:

- Días laborables en horario diurno (de 6:00 a 22:00h): 0.73 €/km.
- Días laborables en horario nocturno: 0.84 €/km.
- Sábados y domingos: 0.93 €/km.
- Además, la tarifa mínima diurna es de 2.95€ y la mínima nocturna de 4€.

Escribir un programa que solicite al usuario:

- La hora (hora y minutos) en que se realizó el trayecto.
- El día de la semana (se supone que el usuario introduce un valor entre 1 para lunes y 7 para domingo)
- Los quilómetros recorridos.

Y muestre el coste del trayecto.

---

### Reto 21 `Nombre`

Escribir un programa en el que el usuario pueda escribir su nombre. El programa le dirá si la primera y la última letra del nombre coinciden o no. Pruébalo con "Ana", "ana", "Angel", "Amanda" y "David"

---

### Reto 22 `Validar`

Se desea implementar un programa que determine si dos datos `x` e `y` de entrada son válidos. Un par de datos es válido si es uno de los que aparecen en la siguiente tabla:

| x : | a | a | a | a | a | b | b | b | b | b |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| y : | 1 | 3 | 5 | 7 | 9 | 2 | 4 | 6 | 8 | 10 |

Se pide implementar un programa que lea de teclado el valor de `x` y el valor de `y`, e indique por pantalla "VALIDOS" o "NO VALIDOS". Se pide hacerlo de forma que no se utilice ninguna estructura condicional (if, switch,...), es decir, se calculará una expresión booleana que determine si x e y son válidos. Se procurará que la expresión booleana propuesta sea breve y concisa.

---

### Reto 23 `PotenciasDe2`

Dado un entero `n` introducido por el usuario*,* mostrar las `n` primeras potencias de 2. Es decir, 2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup>, 2<sup>3</sup>, …, 2<sup>n</sup>.

Soluciona el ejercicio sin utilizar `Math.pow`.

Ten en cuenta que, por ejemplo: *2<sup>3</sup> = 1 * 2 * 2 * 2*;  o que *2<sup>4</sup> = 1 * 2 * 2 * 2 * 2*.

---

### Reto 24 `Etapas`

El ser humano pasa por una serie de etapas en su vida que, con carácter general se asocian a las edades que aparecen en la tabla siguiente.

| Infancia | Hasta los 10 años |
| --- | --- |
| Pubertad | De 11 a 14 años |
| Adolescencia | De 15 a 21 años |
| Adultez | De 22 a 55 años |
| Vejez | De 55 a 70 años |
| Ancianidad | A partir de los 71 años |

Escribe un programa en el que el usuario introduzca las edades de una serie de personas y calcule y muestre que porcentaje de personas que se encuentran en cada etapa. En primer lugar el programa pedirá el número de personas que participan en la muestra y a continuación solicitará la edad de cada una de ellas.

El resultado será similar al siguiente:

```java
Infancia: 5.3 %
Pubertad: 10.7 %
Adolescencia: 21.2 %
...
```

---

### Reto 25 `Primos`

Escribir un programa en el que el usuario escriba un número entero y se le diga todos los números primos entre 1 y el número introducido.

---

### Reto 26 `esPrimoMejorada`

Haz una nueva versión del programa del ejercicio anterior teniendo en cuenta lo siguiente:

- El único número par que es primo es el 2.
- Un número *n* no puede tener divisores mayores que n/2

---

### Reto 27 `Divisores`

Escribir un programa que muestre los tres primeros divisores de un número n introducido por el usuario. Por ejemplo, si el usuario introduce el número 45, el programa mostrará los divisores 1, 3 y 5. Ten en cuenta que la posibilidad de que el número n tenga menos de 3 divisores. Prueba qué pasa si el usuario pide, por ejemplo, los tres primeros divisores de 7.

---

### Reto 28 `SumaSerie`

Dado un número `n`, introducido por el usuario, calcula y muestra por pantalla la siguiente suma 1/1+1/2+1/3+ ··· + 1/`n`

---

### Reto 29 `numeroCifras`

Escribir un programa en el que el usuario introduzca un número entero cualquiera (positivo, negativo o cero) y se le diga cuantas cifras tiene.   

Pistas: ¿Cuantas cifras tiene el nº 25688? ¿Cuántas veces podemos dividir el nº 25688 por 10 hasta que se hace cero? Cuidado, el nº 0 tiene una cifra.

---

### Reto 30 `NotasExtremas`

Modificar el ejercicio anterior para que además calcule la nota máxima y la nota mínima.

---

### Reto 31 `Edades`

Programa que pida al usuario la edad de cinco personas. Si la suma de las edades es inferior a 200, el programa volverá a solicitar las 5 edades.

---

### Reto 32 `NotasPorAlumno`

Programa que pida al usuario las notas de `A` alumnos en `S` asignaturas, alumno por alumno. `A` y `S` se definirán en el programa como `CONSTANTES`.

```java
Alumno 1
Introduce nota de asignatura 1: 8
Introduce nota de asignatura 2:
...
Alumno 2
Introduce nota de asignatura 1:
...
```

---

### Reto 33 `NotasPorAsignatura`

Programa que pida al usuario las notas de `A` alumnos en `S` asignaturas, asignatura por asignatura. `A` y `S` se definirán en el programa como `CONSTANTES`.

```java
Asignatura 1
Introduce nota del alumno 1: 
Introduce nota del alumno 2:
...
Asignatura 2
Introduce nota del alumno 1:
...
```

---

### Reto 34 `MediasPorAsignatura`

Repite el ejercicio anterior haciendo que se muestre la media de cada asignatura

```java
Asignatura 1
Introduce nota del alumno 1: 
Introduce nota del alumno 2:
...
Media asignatura 1: 8.5 puntos

Asignatura 2
Introduce nota del alumno 1:
...
Media asignatura 2: 6.5 puntos
...
```

---

### Reto 35 `PrimosHastaN`

Programa que solicite al usuario un numero `n` y muestre todos los números primos menores o iguales que `n`.

---

### Reto 36 `CombinarLetras2`

Escribir un programa que muestre todas las palabras de dos letras que se pueden formar con los cuatro primeros caracteres del alfabeto en minúsculas ('a', 'b', 'c', 'd'):

```java
aa
ab
ac
ad
ba
bb
bc
bd
...
da
db
dc
dd
```

---

### Reto 37 `CombinarLetras3`

Repite el ejercicio anterior mostrando palabras de tres letras

```java
aaa
aab
...
ddc
ddd
```

---

### Reto 38 `LetraALetra`

Escribe un programa en el que se solicite al usuario un texto de forma repetida hasta que el usuario introduzca la cadena vacía. Con cada texto que introduzca el usuario se le mostrará carácter a carácter, cada carácter en una línea

```java
Introduce texto: Hola
H
o
l
a
Introduce texto: Casa
C
a
s
a
Introduce texto: 
Fin del programa
```

---

### Reto 39 `DibujarFiguras1`

Escribe una clase que contenga los métodos que se indican a continuación. En el método main solicita al usuario las dimensiones de las figuras necesarias en cada caso y llama al método correspondiente para que se muestre por pantalla

1. (`void dibRecAsteriscos (int ancho, int alto)` dibuja un rectángulo utilizando asteriscos, como el siguiente. En el ejemplo ancho es 7 y alto es 3

```java
* * * * * * *
* * * * * * *
* * * * * * *
```

1. (`void dibRecNumeros1 (int ancho, int alto)` dibuja un rectángulo utilizando números, como el siguiente. En el ejemplo ancho es 7 y alto es 3

```java
1 2 3 4 5 6 7
1 2 3 4 5 6 7
1 2 3 4 5 6 7
```

1. (`void dibRecNumeros2 (int ancho, int alto)` dibuja un rectángulo utilizando números, como el siguiente. En el ejemplo ancho es 7 y alto es 3

```java
7 6 5 4 3 2 1
7 6 5 4 3 2 1
7 6 5 4 3 2 1
```

1. (`void dibRecNumeros3 (int ancho, int alto)` dibuja un rectángulo utilizando números, como el siguiente. En el ejemplo ancho es 7 y alto es 3

```java
01 02 03 04 05 06 07
08 09 19 11 12 13 14
15 16 17 18 19 20 21
```

1. (`void dibDiagonal (int ancho, int alto)` dibuja un rectángulo con ceros y unos. Los 1 están en las posiciones en las que fila y columna coinciden. En el ejemplo ancho es 7 y alto es 3

```java
1 0 0 0 0 0 0
0 1 0 0 0 0 0
0 0 1 0 0 0 0
```

1. (`void dibRecLetras (int ancho, int alto)` dibuja un rectángulo letras sucesivas comenzando por la "a". En el ejemplo ancho es 7 y alto es 3

```java
a a a a a a a
b b b b b b b
c c c c c c c
```

1. (`void dibRecLetras2 (int ancho, int alto)` dibuja un rectángulo letras sucesivas terminando por la "a". En el ejemplo ancho es 7 y alto es 3

```java
c c c c c c c
b b b b b b b
a a a a a a a
```

1. (`void dibRecLetras3 (int ancho, int alto)` dibuja un rectángulo letras sucesivas comenzando por la "a". En el ejemplo ancho es 7 y alto es 3

```java
a b c d e f g
h i j k l m n
o p q r s t u
```

---

### Reto 40 `NombreDelMes2`

Escribir un programa que lea de teclado el número de un mes (1 a 12) y visualice el nombre del més (enero, febrero, etc). Resolver utilizando la sentencias switch.

---

### Reto 41 `Calculadora2`

Escribir un programa para simular una calculadora. Considera que los cálculos posibles son del tipo num1 operado num2, donde num1 y num2 son dos números reales cualesquiera y operador es una de entre: +, -, * y /. El programa pedirá al usuario en primer lugar el valor num1, a continuación el operador y finalmente el valor num2. Resolver utilizando la sentencias switch.

---

## En Papel ...

### Reto 42 `Pregunta32`

Qué valor se asignará a consumo en la sentencia `if` siguiente si velocidad es 120?

```java
if (velocidad > 80)
    consumo = 10;
else if (velocidad > 100)
    consumo = 12;
else if (velocidad > 120)
    consumo = 15;
```

---

### Reto 43 `Pregunta33`

Encuentra y corrige los errores de los siguientes fragmentos de programa .

- fragmento a

```java
if x > 25
  y = x
else
  y = z;
```

- fragmento b

```java
if (x<0)
  System.out.println("El valor de x es" +x);
  System.out.println ("x es negativo");
else
  System.out.println ("El valor de x es"+x);
  System.out.println ("x es positivo");
```

- fragmento c

```java
if (x = 0) System.out.println ("x igual a cero");
else System.out.println ("x distinto de cero");
```

---

### Reto 44 `Pregunta34`

Cuál es la salida exacta por pantalla del siguiente fragmento de programa

```java
int x = 20;
System.out.println("Comenzamos");
if (x>= 20)
    if (x>50) System.out.println("Muy grande");
    else {
        if (x%2 != 0) System.out.println("Impar");
    }
else if (x<=20) System.out.println("Pequeño");
System.out.println("Terminamos");
```

---

### Reto 45 `Pregunta35`

En una tienda, por liquidación, se aplican distintos descuentos en función del total de las compras realizadas:

- Si total < 500 €, no se aplica descuento.
- Si 500 € <= total <= 2000 €, se aplica un descuento del 30 %.
- Si total > 2000e, entonces se aplica un descuento del 50 %

¿Cual de los siguientes fragmentos de programa asigna a la variable desc el descuento correcto? Indica "Si" o "NO" al lado de cada fragmento

- fragmento a

```java
double desc = 0.0;
if (total <= 500)
  if (total >= 2000) desc = 30.0;
  else desc = 50.0;
total = total * desc / 100.0;
```

- fragmento b

```java
double desc = 0.0;
if (total >= 500)
  if (total <= 2000) desc = 30.0;
  else desc = 50.0;
total = total * desc / 100.0;
```

- fragmento c

```java
double desc = 0.0;
if (total <= 2000){
  if (total >= 500) desc = 30.0;
  } else desc = 50.0;
total = total * desc / 100.0;
```

- fragmento d

```java
double desc = 0.0;
if (total > 500)
  if (total < 2000) desc = 30.0;
  else desc = 50.0;
total = total * desc /100.0;
```

---

### Reto 46 `Pregunta36`

¿Qué salida producirá el siguiente fragmento de programa si la variable entera platos vale 1? ¿Y si  vale 3? ¿Y si vale 0?

```java
switch (platos ) {
    case 1: System.out.println("\nPrimer plato");
    case 2: System.out.println ("\nSegundo plato");
    case 3: System.out.println ("\nBebida");
            System.out.println ("\nPostre");
            break;
    default: System.out.println("\nCafé");
}
```

---

### Reto 47 `Pregunta37`

Dados tres enteros a, b y c, y un booleano p, el siguiente análisis por casos establece el valor de p en función de los valores de a, b y c:

```java
si a > b entonces p = cierto;
si a < b entonces p = falso;
si a = b entonces 
    si a > c entonces p = cierto;
    si a < c entonces p = falso;
    si a = c entonces p = falso;
```

Se pide la traducción de dicho análisis por casos a Java mediante:

- Una única instrucción if sin anidamientos.
- Una única instrucción, de la forma p = ... , sin sentencias if ni utilizar el operador ternario.
- Una única instrucción, de la forma p = ..., que utilice el operador ternario.

## Excepciones

### Reto 48 `Edades`

Escribe un programa que solicite al usuario la edad de cinco personas y calcule la media. La edad  de una persona debe ser un valor entero comprendido en el rango [0,110]. Realiza tres versiones:

1. Si se introduce mal la edad de una persona se vuelve a pedir la edad de esa persona.
2. Si se introduce mal la edad de una persona, el programa muestra un mensaje de error, no calcula la media y termina.
3. Si se introduce mal la edad de una persona, el programa vuelve a solicitar la edad de las cinco personas (comienza el proceso).

---

### Reto 49 `Dividir2`

Repite el ejercicio anterior utilizando métodos y llamándolos desde el método `main`:

Un método `dividir` que devuelva el cociente de dos números que recibe como parámetro.

Ejecuta los programas provocando errores (como en el ejercicio anterior) y observa los mensajes que se generan.

---

### Reto 50 `Posicion2`

Un método `letraNombre` que, dados un String `nombre` y un entero `pos`, devuelva el carácter del nombre que ocupa la posición indicada.

Ejecuta los programas provocando errores (como en el ejercicio anterior) y observa los mensajes que se generan.

---

### Reto 51 `Pregunta42`

Justifica por qué se produce error en el siguiente fragmento de código

```java
try {
    System.out.println("Introduce edad: ");
    int edad = tec.nextInt();
    if (edad >= 18) {
        System.out.println("Mayor edad");
    } else {
        System.out.println("Menor edad");
    }
    System.out.println("Introduce nif");
    String nif = tec.next();
    int numero = Integer.parseInt(nif.substring(0, nif.length() - 1));
    char letra = nif.charAt(nif.length() - 1);
    System.out.println("Numero: " + numero);
    System.out.println("Letra: " + letra);
} catch (Exception e){  
    System.out.println("Debías introducir un número");
} catch (NumberFormatException e) {
    System.out.println("El nif es incorrecto");
}
```

---

### Reto 52 `Pregunta43`

Indica qué se mostrará por pantalla cuando se ejecute esta clase y por qué:

```java
public class Dos {
    private static int metodo()  {
        int valor=0;
        try {
            valor = valor+1;
            valor = valor + Integer.parseInt("W");
            valor = valor + 1;
            System.out.println("Valor al final del try: " + valor);
        } catch(NumberFormatException e) {
            valor = valor + Integer.parseInt("42");
            System.out.println("Valor al final del catch: " + valor) ;
        } finally {
            valor = valor + 1;
            System.out.println("Valor al final de finally: " + valor) ;
        }
        valor = valor + 1;
        System.out.println ("Valor antes del return: " + valor) ;
        return valor ;
    }

    public static void main (String[] args)  {
        try {
            System .out.println(metodo());
        } catch (Exception e) {
            System.err.println("Excepcion en metodo() ");
            e.printStackTrace();
        }
   }
}
```

---

### Reto 53 `Pregunta44`

Indica qué se mostrará por pantalla cuando se ejecute esta clase y por qué:

```java
public class Tres {
    private static int metodo()  {
        int valor = 0;
        try {
             valor = valor +1;
             valor = valor + Integer.parseInt("W");
             valor = valor + 1;
             System.out.println("Valor al final del try : " + valor);
        } catch (NumberFormatException e) {
             valor = valor + Integer.parseInt("W");
             System.out.println("Valor al final del catch : " + valor);
        } finally {
             valor = valor + 1;
             System.out.println("Valor al final de finally: " + valor);
        }
        valor = valor + 1;
        System.out.println ("Valor antes del return: " + valor);
        return valor ;
    }

    public static void main (String[ ] args)
    {
        try {
            System.out.println(metodo ());
        } catch (Exception e) {
            System.err.println("Excepcion en metodo()") ;
            e.printStackTrace();
        }
   }
}
```

---

### Reto 54 `Pregunta45`

Indica qué se mostrará por pantalla cuando se ejecute esta clase y por qué:

```java
import java.io.*;

public class Cuatro
{
    private static int metodo()  {
        int valor = 0;
        try {
            valor = valor+1;
            valor = valor + Integer.parseInt("W");
            valor = valor + 1;
            System.out.println("Valor al final del try : " + valor) ;
            throw new IOException();
        } catch (IOException e)  {
            valor = valor + Integer.parseInt("42");
            System.out.println("Valor al final del catch : " + valor);
        } finally {
            valor = valor + 1;
            System.out.println("Valor al final de finally: " + valor);
        }
        valor = valor + 1;
        System.out.println ("Valor antes del return: " + valor) ;
        return valor ;
   }

   public static void main(String[] args)  {
        try {
            System.out.println(metodo());
        } catch (Exception e) {
            System.err.println("Excepcion en metodo()");
            e.printStackTrace();
        }
   }
}
```

---

### Reto 55 `Pregunta46`

Indica qué se mostrará por pantalla cuando se ejecute esta clase:

1. Si se ejecuta con java Cinco casa
2. Si se ejecuta con java Cinco 0
3. Si se ejecuta con java Cinco 7

```java
public class Cinco {
   public static void main(String args[])  {
      try  {
            int a = Integer.parseInt(args[0]);
            System.out.println("a = " + a);
            int b=42/a;
            String c = "hola";
            char d = c.charAt(50);
      }  catch (ArithmeticException e) {
         System.out.println("div por 0: " + e);
      }  catch (IndexOutOfBoundsException e) {
         System.out.println("Índice del String fuera de límites: " + e);
      }  finally {
          System.out.println("Ejecución de finally");
      }
   }
}
```

---

### Reto 56 `Pregunta47`

Indica cuál será la salida del siguiente programa y por qué

```java
public class Seis {
   public static void procA()  {
       try {
           System.out.println("dentro del procA"); 2
           throw new RuntimeException("demo"); 3
       } finally {
           System.out.println("Finally del procA"); 4
       }
    }

   public static void procB() {
       try  {
           System.out.println("dentro del procB"); 6
           return; 7
       } finally {
           System.out.println("finally del procB"); 8
       }
    }

    public static void main(String args[])  {
        try  {
            procA(); 1
        } catch(Exception e) {
            procB(); 5
        }
     }
}
```

---

### Reto 57 `Pregunta71`

Indica cuál será la salida del siguiente programa y por qué

```java
public class Siete {
   public static void metodo() {
       try  {
           throw new NullPointerException("demo"); 2
       } catch (NullPointerException e) {
           System.out.println("capturada en método"); 3
           throw e; 4
       }
    }

    public static void main (String args[])  {
        try   {
            metodo(); 1
        }  catch(NullPointerException e)  {
           System.out.println("capturada en main " + e); 5
        }
    }
}
```

### Reto 58

Programa que muestre por pantalla del número 200 al 300.

---

### Reto 59

Programa que muestre en pantalla la tabla de multiplicar del 1 al 10 con el formato:

```java
...
Tabla del 2
***********
2 x 1 = 2
2 x 2 = 4
...
2 x 10 = 20
...
Tabla del 3
***********
...
```

---

### Reto 60

Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.

---

### Reto 61

Leer números hasta que se introduzca un 0. Para cada uno indicar si es par o impar.

---

### Reto 62

Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.

---

### Reto 63

Pedir números hasta que se teclee un 0, mostrar la suma de todos los números introducidos.

---

### Reto 64

Pedir números hasta que se introduzca uno negativo, y calcular la media.

---

### Reto 65

Pedir un número `N`, y mostrar todos los números del 1 al `N`.

---

### Reto 66

Escribir todos los números del 100 al 0 de 7 en 7.

---

### Reto 67

Pedir 15 números y escribir la suma total.

---

### Reto 68

Diseñar un programa que muestre el producto de los 10 primeros números impares.

---

### Reto 69

Pedir un número y calcular su factorial (el factorial se representa con el simbolo  `!`).

​       Aquí tienes el factorial de los 5 primeros números enteros:

```java
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
```

---

### Reto 70

Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.

---

### Reto 71

Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€.

---

### Reto 72

Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75.

---

### Reto 73

Escribe un programa que nos diga el horóscopo a partir del día y el mes de nacimiento.

---

### Reto 74

Realiza un minicuestionario con 4 preguntas tipo test sobre las asignaturas que se imparten en el curso. Cada pregunta acertada sumará un punto. El programa mostrará al final la calificación obtenida.

---

### Reto 75

Escribe un programa que calcule el precio final de un producto según su base imponible (precio antes de impuestos), el tipo de IVA aplicado (general, reducido o superreducido) y el código promocional. Los tipos de IVA general, reducido y superreducido son del 21%, 10% y 4% respectivamente. Los códigos promocionales pueden ser nopro, mitad, meno5 o 5porc que significan respectivamente que no se aplica promoción, el precio se reduce a la mitad, se descuentan 5 euros o se descuenta el 5%.

Ejemplo:

```java
Introduzca la base imponible: 25
Introduzca el tipo de IVA (general, reducido o superreducido): reducido
Introduzca el código promocional (nopro, mitad, meno5 o 5porc): mitad
Base imponible 25.00
Cód. promo. (mitad): -12.50
IVA (10%) 1.25
Precio con IVA 13.75
TOTAL 13.75
```

---

[⬅️ Anterior: Actividades prácticas UT2](../ut02/ut02actividades.md) | [➡️ Següent: Trazas de ejecución UT2](../ut02/ut02trazas.md) | [📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut02/ut02retos.html)
