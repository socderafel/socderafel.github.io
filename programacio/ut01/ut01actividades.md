---
layout: default
title: "Actividades prácticas UT1 — Programació (1r DAW)"
course_root: ".."
badge: "1a Avaluació · RA1 (a-i) · Elements bàsics i Operadors"
prev_url: "../ut01/ut01ejemplos.html"
prev_label: "⬅️ Ejemplos guiados UT1"
next_url: "../ut01/ut01retos.html"
next_label: "Retos de programación UT1 ➡️"
---

# Actividades UT01

> **📌 Empaquetar actividades**
> Empaqueta las actividades, dentro de la carpeta **`ut01/bloqueX`**

---

## Bloque 1.0

> **📌 Empaquetar actividades**
> Estas actividades pueden ser realizadas en papel si lo consideras oportuno. También se admite en programas como 'Draw.io'.

### Actividad 01

Usando los ejemplos de representación de algoritmos edtudiados en los primeros apartados de la unidad, crea **el pseudocódigo y diagrama de flujo** de los siguientes ejercicios. *Son ejercicios relativamente sencillos, el objetivo es que pensemos qué pasos son necesarios y de qué condiciones deberíamos evaluar para continuar:*

1. Calcular el mayor de tres números.
2. Verificar si un número es positivo, negativo o cero.
3. Intercambio de valores de dos variables.
4. Comprobar si un número está dentro de un rango.
5. Determinar si una persona es mayor de edad.
6. Comprobar si un número de 5 cifras es capicúa.
7. Verificar si un número es par o impar.
8. Calcular la media de 3 números.
9. Determinar si un año es bisiesto.
10. Calcular el área de un triangulo.

---

## Bloque 1.1

> **📌 Empaquetar actividades**
> Crea un documento PDF con la solución a las siguientes actividades.

### Actividad 02

Escribe las siguientes expresiones siguiendo la sintaxis de Java.

![formulas](../img/ut01/formulas.png)

### Actividad 03

Indica cuales serán los valores de las variables después de ejecutar cada uno de los siguientes fragmentos de código. **Resuelve el ejercicio sin escribir los programas correspondientes y probarlos:**

prueba 1
 `int a=3, b = 2; a = b + b; b = a + a;`

prueba 2
 `int a=3,b=0; b = b - 1; a = a + b;`

prueba 3
 `int a, b=5; b++; ++b; a= b+1;`

prueba 4
 `int a = 5,b; b = a++;`

prueba 5
 `int a = 5,b; b = ++a;`

prueba 6
 `int a=2, b=3; b+=a;`

prueba 7
 `int a=2, b=3; b-=a; a=-b;`

prueba 8
 `int a=2, b=3; b%=a;`

prueba 9
 `int a=2,b=3,c=4; a = --b + c++; b+=a;`

### Actividad 04

Sean 4 variables enteras:

```java
int m, j, p, v ;
```

que contienen respectivamente la edad de Miguel, Julio, Pablo y Vicente.

Expresar las siguientes afirmaciones utilizando operadores lógicos y relacionales

> Ejemplo: `Miguel es mayor de edad.`
>
> Solución: `m >= 18`

1. *Miguel es menor de edad.*
2. *Miguel es mayor que Julio*
3. *Miguel es el más viejo.*
4. *Miguel es el más joven.*
5. *Miguel no es el más joven.*
6. *Miguel no es el más viejo.*
7. *Alguno de ellos es mayor de edad.*
8. *Miguel y Julio son los más jóvenes.*
9. *Entre todos tienen más de 100 años.*
10. *Entre Miguel y Julio suman más edad que Pablo.*
11. *Entre Miguel y Julio suman más edad que Pablo y Vicente juntos.*
12. *Si los ordenamos por edades de menor a mayor, Julio es el segundo.*
13. *Si los ordenamos por edades de menor a mayor, Julio es el segundo y Pablo el tercero.*
14. *Al menos uno de ellos es menor de edad.*
15. *Al menos dos de ellos son menores de edad.*
16. *Todos son menores de edad.*
17. *Solo dos de ellos son menores de edad.*
18. *Al menos dos de ellos nacieron el mismo año.*
19. *Solo dos de ellos nacieron el mismo año.*
20. *Al menos uno de ellos es menor que Julio*
21. *Solo uno de ellos es menor que Julio*
22. *Miguel es mayor de edad y alguno de los otros es menor de edad.*

---

## Bloque 1.2

### Actividad 05

En tu entorno de trabajo, crea el programa siguiente. Observa qué pasa exactamente. Entonces, intenta arreglar el problema.

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
 <pre><code><span class="tok-comment">// Un programa que usa un entero muuuuy grande</span>
<span class="tok-key">public</span> <span class="tok-key">class</span> TresMilMilions {
 <span class="tok-key">public</span> <span class="tok-key">static</span> <span class="tok-key">void</span> main (<span class="tok-key">String</span> [] args) {
 <span class="tok-key">System</span>.out.println (<span class="tok-bool">3000000000</span>);
 }
}</code></pre>
</div>

### Actividad 06

Indicar qué valor devolverá la ejecución del siguiente programa:

```java
public class activ06 {
    public static void main(String[] args) {
        int num = 5;
        num += num - 1 * 4 + 1;
        System.out.println(num);
    }
}
```

### Actividad 07

Indicar qué valor devolverá la ejecución del siguiente programa:

```java
public class activ07 {
    public static void main(String[] args) {
        int num = 4;
        num %= 7 * num % 3 * 3;
        System.out.println(num);
    }
}
```

### Actividad 08

Probar la E/S elemental: Escribe el pequeño programa que aparece a continuación.

```java
import java.util.*;

public class EntradaSalida {
    public static void main (String arg[]){
        Scanner sc = new Scanner(System.in);
        int a, b;
        System.out.println("Introduce un número entero");
        a = sc.nextInt();
        System.out.println("Introduce otro número entero");
        b = sc.nextInt();
        System.out.println("Los números introducidos son " + a + " y " + b);
    }
}
```

Ejecútalo para ver cómo se comporta el programa.

- ¿Qué ocurre si cuando nos pide un número entero le damos un número real? ¿Y si le damos un carácter no numérico?
- ¿Qué ocurre si eliminamos la instrucción `import java.util.*` ;

### Actividad 09

Averigua mediante pruebas:

1. ¿Es posible escribir dos instrucciones en la misma línea de un programa?
2. ¿Se puede "romper" una instrucción entre varias líneas?
3. Algunos lenguajes de programación dan un valor por defecto a las variables cuando las declaramos sin inicializarlas. Otros no permiten usar el contenido de una variable que no haya sido previamente inicializada. ¿Cuál es comportamiento de Java?

### Actividad 10

Crea un programa donde crees variables para los siguientes datos:

- Nombre
- Inicial del nombre
- Apellidos
- Iniciales (nombre y apellidos)
- Población
- Edad
- Indicador de si cree que va a aprobar programación
- Horas a la semana que dedica a estudiar (mínimo un cuarto de hora).

Puedes utilizar el siguiente código para empezar y rellenar el cuerpo del método `main` con lo que consideres.

```java
public class DatosPersonales {
    public static void main (String arg[]){

    }
}
```

### Actividad 11

Modifica el programa anterior para que sea el usuario el que introduzca la información a almacenar en las variables. Utiliza la libreria 'Scanner' importandola con la orden `import java.util.*`

---

## Bloque 1.3

> **📌 Empaquetar actividades**
> Empaqueta las actividades, dentro de la carpeta **`ut01/bloque3`**

### Actividad 12

Modificar el siguiente programa para que compile y funcione:

```java
public class activ12 {
    public static void main(String[] args) {
        int n1 = 50, n2 = 30,
        boolean suma = 0;
        suma = n1 + n2;
        System.out.println("LA SUMA ES: " + suma);
    }
}
```

### Actividad 13

Modificar el siguiente programa para que compile y funcione:

```java
public class activ13 {
    public static void main(String[] args) { 
        int numero = 2;
        cuad = numero * número;
        System.out.println("EL CUADRADO DE "+NUMERO+" ES: "+cuad);
    }
}
```

### Actividad 14

Haz un programa que pida al usuario tres números reales y muestre por pantalla el resultado de multiplicarlos.

### Actividad 15

Realiza un conversor de pesetas a euros (`euros = pesetas / 166.386`). 
La cantidad de pesetas que se quiere convertir debe ser introducida por el usuario. Una vez hecha la conversión, se mostrará por pantalla el resultado en pesetas y en euros.

### Actividad 16

Escribe un programa que calcule el área de un triángulo ( `area = (base * altura) / 2` ).
La base y la altura deben ser introducidas por el usuario. Al finalizar el calculo, el programa mostrará el resultado por pantalla.

### Actividad 17

Realiza un conversor de KB a MB. ( `MB = KB/1024` ). La cantidad de KB debe ser introducida por el usuario.

### Actividad 18

Experimenta qué pasa si en el siguiente programa inicializas la variable *realLlarg* con un valor con varios decimales. ¿El programa continúa compilando?. ¿Qué resultado da? Después inténtalo asignando un valor superior al rango de los enteros (*por ejemplo, 3000000000.0*).

```java
public class ConversionExplicita {
    public static void main (String [] args) {
        double realLlarg = 300.0;
        // Asignación incorrecta. ¿Un real tiene decimales, no?
        long enterLlarg = (long) realLlarg;
        // Asignación incorrecta. ¿Un entero largo tiene un rango mayor que un entero, no?
        int enter = (int) enterLlarg;
        System.out.println (enter);
    }
}
```

---

## Bloque 1.4

> **📌 Empaquetar actividades**
> Empaqueta las actividades, dentro de la carpeta **`ut01/bloque4`**

### Actividad 19

Haz un programa que muestre en pantalla de forma tabulada la tabla de verdad de una expresión de disyunción entre dos variables booleanas.

### Actividad 20 `Fuerza`

La fuerza de atracción entre dos masas m1 y m2 separadas por una distancia d, está dada por la fórmula:

![formula10](../img/ut01/formula10.png)
*donde G es la constante de gravitación universal G= 6.693 · 10 ^(–11).*

Escribir un programa que lea la masa de dos cuerpos y la distancia entre ellos y a continuación obtenga su fuerza de atracción.

### Actividad 21 `Circulo`

Escribir un programa que calcule la longitud de la circunferencia y el área del círculo para un valor del radio introducido por teclado.

### Actividad 22

Realizar un programa que calcule el precio de un producto teniendo en cuenta que el producto vale 120 €, tiene un descuento del 15% y el IVA que se le aplica es del 21%.

---

## Bloque 1.5

> **📌 Empaquetar actividades**
> Empaqueta las actividades, dentro de la carpeta **`ut01/bloque5`**

### Actividad 23 `Medidas`

Escribir un programa que convierta una medida dada en pies a sus equivalentes en *yardas*, *pulgadas*, *centímetros* y *metros*, sabiendo que:

1 *pie* = 12 *pulgadas*

1 *yarda* = 3 *pies*

1 *pulgada* = 2.54 *cm*

1 *m* = 100 *cm*

### Actividad 24 `UltimaCifra`

Escribir un programa que muestre la última cifra de un número entero que introduce el usuario por teclado. *Pista: ¿Qué devuelve a%10 ?*

```text
Introduce un número entero: 3761
La última cifra de 3761 es 1
```

### Actividad 25 `PenultimaCifra`

Escribir un programa que muestre la penúltima cifra de un número entero que introduce el usuario por teclado.

```text
Introduce un número entero: 3761
La última cifra de 3761 es 6
```
Una vez hayas comprobado que el programa funciona correctamente, prueba qué ocurre si el usuario introduce un valor de una sola cifra (por ejemplo 4). Explica el resultado mostrado por el programa.

### Actividad 26 `Redondear1`

`Math.round(x)` redondea x de manera que este queda sin decimales. (*`Math.round(35.5289)` da como resultado `36`)*

Trata de escribir un programa en el que el usuario introduzca un número real y a continuación se muestre redondeado a un solo decimal.

*Pista : combinar productos, divisiones y Math.round()*

Ejemplo de ejecución:

```java
Introduce un número real: 35.5289
El número 35.5289, redondeado a un decimal es 35.5
```

### Actividad 27

Realiza un programa en Java que genere el número premiado del Cupón de la ONCE.

*Pista: Usa Math.random()*
