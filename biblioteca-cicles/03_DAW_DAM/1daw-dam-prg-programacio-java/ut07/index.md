---
layout: default
title: "UT7 — Estructuras de control — Programació en Java (1r DAW / DAM) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT7 Completa"
prev_url: "../ut06/ut0605.html"
prev_label: "⬅️ 6.5 Ejercicios - AyR"
next_url: "../ut07/ut0701.html"
next_label: "7.1 Uso de estructuras de control ➡️"
---

# 📘 UT7 — Estructuras de control (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**7.1 Uso de estructuras de control**](#ut0701) (o [obrir en pàgina individual ➡️](./ut0701.md) )
> - [**7.2 Ejercicios**](#ut0702) (o [obrir en pàgina individual ➡️](./ut0702.md) )
> - [**7.3 Ejercicios AyR - Condicionales Parte 1**](#ut0703) (o [obrir en pàgina individual ➡️](./ut0703.md) )
> - [**7.4 Ejercicios AyR - Condicionales Parte 2**](#ut0704) (o [obrir en pàgina individual ➡️](./ut0704.md) )
> - [**7.5 Ejercicios AyR - Estructrura repetitiva while do**](#ut0705) (o [obrir en pàgina individual ➡️](./ut0705.md) )
> - [**7.6 Ejercicios AyR - Estructura repetitiva for - mis**](#ut0706) (o [obrir en pàgina individual ➡️](./ut0706.md) )
> - [**7.7 Ejercicios AyR - Mortadelo y Filemon**](#ut0707) (o [obrir en pàgina individual ➡️](./ut0707.md) )
> - [**7.8 Ejercicios - AyR**](#ut0708) (o [obrir en pàgina individual ➡️](./ut0708.md) )
> - [**✍️ Activitats pràctiques UT7**](#ut07actividades) (o [obrir en pàgina individual ➡️](./ut07actividades.md) )

---

## 7.1 Uso de estructuras de control

> **📌 🏷️ Apunt de la Unitat**
> #### Contenido de la unidad

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

> **📌 🏷️ Apunt de la Unitat**
> #### Ampliación y refuerzo

> **📌 🏷️ Apunt de la Unitat**
> #### Otros Recursos

---

Programación

### UD 3: Uso de estructuras de control

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

Uso de estructuras de control ORDEN 60/2012, de 25 de septiembre, de la Conselleria de Educación, Formación y Empleo por la que se establece para la Comunitat Valenciana el currículo del ciclo formativo de Grado Superior correspondiente al título de Técnico Superior en Desarrollo de Aplicaciones Web. [2012/9149] Contenidos

3.- Uso de estructuras de control: 3.1.−Estructuras de selección. 3.2.−Estructuras de repetición. 3.3.−Estructuras de salto. 3.5.−Codificación, edición y compilación de programas con estructuras de control. 3.6.−Prueba y depuración. 3.7.−Documentación. Real Decreto 686/2010, de 20 de mayo, por el que se establece el título de Técnico Superior en Desarrollo de Aplicaciones Web y se fijan sus enseñanzas mínimas.

Resultadosde aprendizaje

- Escribe y depura código, analizando y utilizando las estructuras de control del lenguaje.

Criterios de evaluación: 3.a) Se ha escrito y probado código que haga uso de estructuras de selección. 3.b) Se han utilizado estructuras de repetición. 3.c) Se han reconocido las posibilidades de las sentencias de salto. Competenciasprofesionales,personales y sociales

- Desarrollar e integrar componentes software en el entorno del servidor web, empleando herramientas y lenguajes

específicos, para cumplir las especificaciones de la aplicación. Programación

Uso de estructuras de control 1.− Estructura secuencial 2.− Estructuras de selección 3.− Estructuras de repetición 4.− Estructuras de salto 5.- Prueba y depuración 6.- Documentación Programación

1.- Estructura secuencial Programación

1.- Estructura secuencial El orden en que se ejecutan por defecto las sentencias de un programa es secuencial. Es decir, las sentencias se ejecutan una después de otra, en el orden en que aparecen escritas dentro del programa. Cada una de las instrucciones están separadas por el carácter punto y coma (;).

Las instrucciones se suelen agrupar en bloques. El bloque de sentencias se define por el carácter llave de apertura ({) para marcar el inicio del mismo, y el carácter llave de cierre (}) para marcar el final. Ejemplo: { instrucción 1; instrucción 2; instrucción 3; } En Java si el bloque de sentencias está constituido por una única sentencia no es obligatorio el uso de las llaves de apertura y cierre ({ }), aunque sí recomendable.

Programación

1.- Estructura secuencial Ejemplo: Programa que pide 2 números enteros y los muestra por pantalla.

```java
import java.util.Scanner;
public class Secuencial {
public static void main(String[] args){
```

//Declaración de variables

```java
int n1, n2;
Scanner sc = new Scanner(System.in);
```

//Leer el primer número

```java
System.out.println("Introduce un número entero: ");
n1 = sc.nextInt();
```

//Leer el segundo número

```java
System.out.println("Introduce otro número entero: ");
n2 = sc.nextInt();
```

//Mostrar resultado

```java
System.out.println("Los números son: " + n1 + " y " + n2);
}
}
```

Programación

2.- Estructuras de selección Programación

2.- Estructuras de selección La estructura de selección o condicional permite al programa bifurcar el flujo de ejecución de instrucciones dependiendo del valor de una expresión (condición). Se puede diferenciar entre selección simple, selección doble y selección múltiple.

En java las estructuras condicionales se implementan mediante: Selección simple: if … Selección doble: if … else … operador condicional ? : Selección múltiple: if … else … encadenados (if … else if … else) switch case Programación

2.- Estructuras de selección La condición debe ser una expresión booleana, es decir, debe dar como resultado un valor booleano (true ó false). Selección simple: se evalúa la condición y si ésta se cumple se ejecuta una determinada acción o grupo de acciones. En caso contrario se saltan dicho grupo de acciones.

```java
if (expresión_booleana) {
```

instrucción 1 instrucción 2 ....... } Si el bloque de instrucciones tiene una sola instrucción no es necesario escribir las llaves { } aunque para evitar confusiones se recomienda escribir las llaves siempre. Programación

2.- Estructuras de selección Ejemplo: Programa que pide la edad al usuario y determina si es mayor de edad.

```java
import java.util.Scanner;
public class Edades {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
int edad;
System.out.println("Introduzca la edad: ");
edad = sc.nextInt();
```

//Comprobar si es mayor de edad

```java
if (edad >= 18){
System.out.println("Eres mayor de edad.");
}
}
}
```

Programación

2.- Estructuras de selección Selección doble: Se evalúa la condición y si ésta se cumple se ejecuta una determinada instrucción o grupo de instrucciones. Si no se cumple se ejecuta otra instrucción o grupo de instrucciones.

```java
if (expresión booleana) {
```

instrucciones 1 } else{ instrucciones 2 } Operador condicional ? : Se puede utilizar en sustitución de la sentencia de control if-else.Los forman los caracteres ? y : Se utiliza de la forma siguiente: expresión1 ? expresión2 : expresión3 Si expresión1 es cierta entonces se evalúa expresión2 y éste será el valor de la expresión condicional. Si expresión1 es falsa, se evalúa expresión3 y éste será el valor de la expresión condicional.

Programación

2.- Estructuras de selección Ejemplo: Programa que pide por teclado un número y devuelve si es par o impar. Estructura if … else … Operador condicional ?

```java
import java.util.Scanner;
public class ParImpar1 {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
int num;
System.out.println("Introduzca numero: ");
num = sc.nextInt();
```

//Mostrar si el número es par o impar

```java
if ((num%2) == 0){
System.out.println("PAR");
}
```

else{

```java
System.out.println("IMPAR");
}
}
}
import java.util.Scanner;
public class ParImpar2 {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
int num;
System.out.println("Introduzca numero: ");
num = sc.nextInt();
```

//Mostrar si el número es par o impar

```java
System.out.println((num%2)==0 ? "PAR" : "IMPAR");
}
}
```

Programación

2.- Estructuras de selección Selección múltiple: Se obtiene anidando sentencias if ... else. Permite construir estructuras de selección más complejas.

```java
if (expresion_booleana1){
```

instrucciones; }

```java
else if (expresion_booleana2){
```

instrucciones; } else{ instrucciones; } Cada else se corresponde con el if más próximo que no haya sido emparejado. Una vez que se ejecuta un bloque de instrucciones, la ejecución continúa en la siguiente instrucción que aparezca después de las sentencias if .. else anidadas.

Programación

2.- Estructuras de selección Ejemplo: Programa que muestra un saludo según la hora indicada.

```java
import java.util.Scanner;
public class Saludo {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
int hora;
System.out.println("Introduzca una hora (un valor entero): ");
hora = sc.nextInt();
```

if (hora >= 0 && hora < 12)

```java
System.out.println("Buenos días");
```

else if (hora >= 12 && hora < 21)

```java
System.out.println("Buenas tardes");
```

else if (hora >= 21 && hora < 24)

```java
System.out.println("Buenas noches");
```

else

```java
System.out.println("Hora no válida");
}
}
```

Programación

2.- Estructuras de selección Selección múltiple. Instrucción Switch: Se utiliza para seleccionar una de entre múltiples alternativas. La forma general de la instrucción switch en Java es la siguiente

```java
switch (expresión){
```

case valor 1: instrucciones; break; case valor 2: instrucciones; break; · · · default: instrucciones; } La instrucción switch se puede usar con datos de tipo byte, short, char e int. También con tipos enumerados y con las clases envolventes Character, Byte, Short e Integer.

A partir de Java 7 también pueden usarse datos de tipo String en un switch. Programación

2.- Estructuras de selección Funcionamiento de la instrucción switch: 1.- Primero se evalúa la expresión y salta al case cuya constante coincida con el valor de la expresión. 2.- Se ejecutan las instrucciones que siguen al case seleccionado hasta que se encuentra un break o hasta el final del switch. El break produce un salto a la siguiente instrucción a continuación del switch.

3.- Si ninguno de estos casos se cumple se ejecuta el bloque default (si existe). No es obligatorio que exista un bloque default y no tiene porqué ponerse siempre al final, aunque es lo habitual. Programación

2.- Estructuras de selección Ejemplo: Programa que pide el número del mes y muestra el nombre correspondiente.

```java
import java.util.Scanner;
public class Meses {
public static void main(String[] args) {
int mes;
Scanner sc = new Scanner(System.in);
System.out.print("Introduzca un numero de mes: ");
mes = sc.nextInt();
```

switch (mes) {

```java
case 1:   System.out.println("ENERO");      break;
case 2:   System.out.println("FEBRERO");    break;
case 3:   System.out.println("MARZO");      break;
case 4:   System.out.println("ABRIL");      break;
case 5:   System.out.println("MAYO");       break;
case 6:   System.out.println("JUNIO");      break;
case 7:   System.out.println("JULIO");      break;
case 8:   System.out.println("AGOSTO");     break;
case 9:   System.out.println("SEPTIEMBRE"); break;
case 10:  System.out.println("OCTUBRE");    break;
case 11:  System.out.println("NOVIEMBRE");  break;
case 12:  System.out.println("DICIEMBRE");  break;
default : System.out.println("Mes no válido");
}
}
}
```

Programación

2.- Estructuras de selección Instrucción switch VS if… else… encadenados: Programa que pide el número del mes y muestra el nombre correspondiente.

```java
import java.util.Scanner;
public class Meses {
public static void main(String[] args) {
int mes;
Scanner sc = new Scanner(System.in);
System.out.print("Introduzca un numero de mes: ");
mes = sc.nextInt();
```

switch (mes) {

```java
case 1:   System.out.println("ENERO");      break;
case 2:   System.out.println("FEBRERO");    break;
case 3:   System.out.println("MARZO");      break;
case 4:   System.out.println("ABRIL");      break;
case 5:   System.out.println("MAYO");       break;
case 6:   System.out.println("JUNIO");      break;
case 7:   System.out.println("JULIO");      break;
case 8:   System.out.println("AGOSTO");     break;
case 9:   System.out.println("SEPTIEMBRE"); break;
case 10:  System.out.println("OCTUBRE");    break;
case 11:  System.out.println("NOVIEMBRE");  break;
case 12:  System.out.println("DICIEMBRE");  break;
default : System.out.println("Mes no válido");
}
}
}
if (mes == 1){
System.out.println("ENERO");
}else if (mes == 2){
System.out.println("FEBRERO");
}else if (mes == 3){
System.out.println("MARZO");
}else if (mes == 4){
System.out.println("ABRIL");
}else if (mes == 5){
System.out.println("MAYO");
}else if (mes == 6){
System.out.println("JUNIO");
}else if (mes == 7){
System.out.println("JULIO");
}else if (mes == 8){
System.out.println("AGOSTO");
}else if (mes == 9){
System.out.println("SEPTIEMBRE");
}else if (mes == 10){
System.out.println("OCTUBRE");
}else if (mes == 11){
System.out.println("NOVIEMBRE");
}else if (mes == 12){
System.out.println("DICIEMBRE");
```

}else{

```java
System.out.println("Mes no válido");
}
```

Programación

3.- Estructuras de repetición Programación

3.- Estructuras de repetición Permiten ejecutar de forma repetida un bloque específico de instrucciones. Las instrucciones se repiten mientras o hasta que se cumpla una determinada condición. Esta condición se conoce como condición de salida. Tipos de estructuras repetitivas

✓while ✓do – while ✓for ✓foreach Programación

3.- Estructuras de repetición While Las instrucciones se repiten mientras la condición sea cierta. La condición se comprueba al principio del bucle por lo que las acciones se pueden ejecutar 0 ó más veces. La ejecución de un bucle while sigue los siguientes pasos: 1.- Se evalúa la condición.

2.- Si el resultado es false las instrucciones no se ejecutan y el programa sigue ejecutándose por la siguiente instrucción a continuación del while. 3.- Si el resultado es true se ejecutan las instrucciones y se vuelve al paso 1 Programación

3.- Estructuras de repetición Ejemplo: Función que imprime línea a línea un fichero de texto completo.

```java
public void imprimirFichero() throws FileNotFoundException{
Scanner teclado = new Scanner(new File("fichero.txt"));
```

//Mientras hay líneas por leer…

```java
while(teclado.hasNext()){
```

//…leer la línea del fichero…

```java
String s = teclado.nextLine();
```

//…e imprimirla por pantalla.

```java
System.out.println( s );
}
}
```

Programación

3.- Estructuras de repetición Do while Las instrucciones se ejecutan mientras la condición sea cierta. La condición se comprueba al final del bucle por lo que el bloque de instrucciones se ejecutarán al menos una vez. Esta es la diferencia fundamental con la instrucción while. Las instrucciones de un bucle while es posible que no se ejecuten si la condición inicialmente es falsa.

La ejecución de un bucle do - while sigue los siguientes pasos

### 1. Se ejecutan las instrucciones a partir de do{

- Se evalúa la condición.

### 3. Si el resultado es false el programa sigue ejecutándose por la siguiente instrucción a

continuación del while.

### 4. Si el resultado es true se vuelve al paso 1

Programación

3.- Estructuras de repetición Ejemplo: Función que calcula el perímetro de un círculo.

```java
public double perimetroCirculo() {
Scanner teclado = new Scanner(System.in);
```

double radio; do {

```java
System.out.print("Teclee un valor del radio > 0: ");
radio = teclado.nextDouble();
} while (radio <= 0);
return 2 * Math.PI * radio;
}
```

Programación

3.- Estructuras de repetición For Hace que una instrucción o bloque de instrucciones se repitan un número determinado de veces mientras se cumpla la condición. La estructura general de una instrucción for en Java es la siguiente

```java
for( inicialización; condición; incremento/decremento){
```

instrucción 1; ........... instrucción N; } A continuación de la palabra for y entre paréntesis debe haber siempre tres zonas separadas por punto y coma

- zona de inicialización.
- zona de condición
- zona de incremento ó decremento.

Programación

3.- Estructuras de repetición For (continuación…) Inicialización es la parte en la que la variable o variables de control del bucle toman su valor inicial. Puede haber una o más instrucciones en la inicialización, separadas por comas. La inicialización se realiza sólo una vez.

Condición es una expresión booleana que hace que se ejecute la sentencia o bloque de sentencias mientras que dicha expresión sea cierta. Generalmente en la condición se compara la variable de control con un valor límite. Incremento/decremento es una expresión que decrementa o incrementa la variable de control del bucle.

La ejecución de un bucle for sigue los siguientes pasos

### 1. Se inicializa la variable o variables de control (inicialización)

- Se evalúa la condición.
- Si la condición es cierta se ejecutan las instrucciones. Si es falsa, finaliza la ejecución del bucle y

continúa el programa en la siguiente instrucción después delfor.

### 4. Se actualiza la variable o variables de control (incremento/decremento)

- Se vuelve al punto 2.

Programación

3.- Estructuras de repetición Ejemplo: Función que recorre e imprime un vector de enteros.

```java
public void imprimirVector(int[] v) {
```

//Recorrer el vector desde la posición 0 hasta longitud-1...

```java
for (int i = 0; i < v.length; i++) {
```

//...e imprir el valor de la posición i-ésima

```java
System.out.println( v[i] );
}
}
```

Programación

3.- Estructuras de repetición Foreach o For extendido Esta forma de uso del for facilita el recorrido de objetos existentes en una colección sin necesidad de definir el número de elementos a recorrer. La sintaxis que se emplea es

```java
for ( TipoARecorrer nombreVariableTemporal : nombreDeLaColección ) {
```

instrucciones } Ejemplo

```java
String[] listaNombres = {"Alejandro", "Ana", "Belén", "Jose", "Luis"};
for (String nombre: listaNombres){
System.out.println(nombre);
}
```

Programación

3.- Estructuras de repetición Bucles infinitos Java permite la posibilidad de construir bucles infinitos, los cuales se ejecutarán indefinidamente, a no ser que provoquemos su interrupción. Tres ejemplos

```java
for(;;){
```

instrucciones }

```java
for(;true;){
```

instrucciones }

```java
while(true){
```

instrucciones } Los bucles infinitos también suelen producirse de forma involuntaria al no modificar correctamente la condiciónde salida de un bucle. Es un ERROR común al iniciarse en Programación. Programación

3.- Estructuras de repetición Bucles anidados Bucles anidados son aquellos que incluyen instrucciones for, while o do-while unas dentro de otras. Debemos tener en cuenta que las variables de control que utilicemos deben ser distintas. Los anidamientos de estructuras tienen que ser correctos, es decir, que una estructura anidada dentro de otra lo debe estar totalmente.

> **💡 Apunt Tècnic**
> Ejemplo

```java
public void imprimirVector(int[][] m) {
```

//Recorrer todas las filas de la matriz...

```java
for (int i = 0; i < m.length; i++) {
```

//Para cada fila, recorrer las columnas...

```java
for (int j = 0; j < m.length; j++) {
```

//...e imprir el valor de la posición (i, j)

```java
System.out.println( m[i][j] );
}
}
}
```

Programación

4.- Estructuras de salto Programación

4.- Estructuras de salto Las estructuras de salto son instrucciones que nos permiten romper con el orden natural de ejecución de nuestros programas, pudiendo saltar a un determinado punto o instrucción. Las siguientes instrucciones de salto son

- break
- continue
- return

Las sentencias break y continue se utilizan con las estructuras de repetición. Para interrumpir la ejecución con break o volver al principio con continue. Además, el break se utiliza para interrumpir la ejecución de un switch. La sentencia return se utiliza para finalizar una función o método.

Programación

4.- Estructuras de salto Las palabras reservadas break y continue, se utilizan en Java para detener completamente un bucle (break) o detener únicamente la iteración actual y saltar a la siguiente (continue). Normalmente si usamos break o continue, lo haremos dentro de una sentencia if, que indicará cuándo debemos detener el bucle al cumplirse o no una determinada condición.

La gran diferencia entre ambos es que, break, detiene la ejecución del bucle y salta a la primera línea del programa tras el bucle y continue, detiene la iteración actual y pasa a la siguiente iteración del bucle sin salir de él (a menos, que el propio bucle haya llegado al límite de sus iteraciones).

Programación

4.- Estructuras de salto break La sentencia break se utiliza para interrumpir la ejecución de una estructura de repetición o de un switch. Cuando se ejecuta el break, el flujo del programa continúa en la sentencia inmediatamente posteriora la estructura de repeticióno al switch.

> **💡 Apunt Tècnic**
> Ejemplo

```java
for (int i = 0; i < 10; i++) {
System.out.println("Dentro del bucle");
```

break;

```java
System.out.println("Nunca lo escribira");
}
System.out.println(“Tras el bucle”);
```

Cuando el programa alcance la sentencia break, detendrá la ejecución del bucle y saldrá de él. Por tanto el resultado de la ejecucióndel programa será: Dentro del Bucle Tras el bucle El bucle for, sólo ejecuta una iteración y después termina, continuando el programa desde la primera línea tras el bucle.

Programación

4.- Estructuras de salto continue La sentencia continue únicamente puede aparecer dentro de una estructura de repetición. El efecto que produce es que se deja de ejecutar el resto del bucle para volver a evaluar la condición del bucle, continuando con la siguiente iteración, si el bucle lo permite.

> **💡 Apunt Tècnic**
> Ejemplo

```java
for (int i = 0; i < 10; i++) {
System.out.println("Dentro del bucle");
```

continue;

```java
System.out.println("Nunca lo escribira");
}
```

Cada vez que el programa alcance la sentencia continue, saltará a una nueva iteración del bucle y por tanto la última sentencia System.out.println nunca llegará a escribirse. El resultado del programa será escribir 10 veces “Dentro del bucle”. Programación

4.- Estructuras de salto return La sentencia return se utiliza para terminar la ejecución de un método o función. De esta forma volvemos a la instrucción que hizo la llamada a dicho método. Con la instrucción return podemos devolver un valor o no

```java
✓Devuelvo valor: return variable;
```

✓No devuelvo nada: return; Programación

5.- Prueba y depuración Programación

5.- Prueba y depuración Para abordar y resolver los errores de ejecución, es necesario probar exhaustivamente los programas para comprobar que su comportamiento se corresponde con el pretendido. Muchas veces se elaboran sistemáticamente bancos de pruebas que son conjuntos de tests que tratan de someter a los programas a todas las posibles combinaciones de uso o, si eso es muy difícil, se intenta probar al menos un subconjunto relevante de las mismas.

Programación

5.- Prueba y depuración Por otra parte, existen programas especializados, denominados depuradores, en inglés debuggers, que permiten la ejecución controlada de un programa o segmento del mismo. Con ellos es posible ejecutar, por ejemplo, instrucción a instrucción un segmento de código, examinando mientras tanto el valor de las variables implicadas, el estado de la memoria, las ejecuciones realizadas junto con sus características, etc.

Los depuradores son en muchas ocasiones una herramienta imprescindible para determinar con precisión el funcionamiento de un segmento de código y el porqué de un determinado error. Programación

6.- Documentación Programación

6.- Documentación Como se ha explicado en la UD.2, las líneas de código delimitadas con // o con /* */ son considerados comentarios, de los que el compilador hará caso omiso y que serán irrelevantes durante la ejecución del programa. Este tipo de comentarios se utiliza por lo general para documentar aquellos aspectos del código de los programas que se considere relevante. En concreto, los comentarios que anoten aspectos de implementación deberán aparecer en el cuerpo de los métodos, para uso exclusivo del implementador.

Se debe destacar la importancia de documentar de forma correcta las clases que se diseñan. La documentación de los métodos de una clase sirve para indicar cómo usarlos, es decir, cuál es su cabecera, qué condiciones especiales deben cumplir los parámetros, si las hubiera, y cuál es el resultado que se puede esperar en cada caso de los datos. Nótese que para saber utilizar una clase basta con su documentación; no es necesario conocer los detalles de cómo esta implementada.

> **⚠️ NOTA: Dada la importancia de la Documentación, junto co...**
> NOTA: Dada la importancia de la Documentación, junto con el de Prueba y Depuración, los tres serán tratados con mucho más detalle en el Módulo Formativo Entornos de Desarrollo de este mismo curso (1º DAW). Programación

Bibliografía Programación

Bibliografía ✓Aprende JAVA con ejercicios. Edición 2018. Luis José Sánchez. ✓Empezar a programar usando Java. 2ª edición. Universitat Politècnica de València ✓https://github.com/statickidz/TemarioDAW ✓https://es.stackoverflow.com Estructuras de control: ✓http://puntocomnoesunlenguaje.blogspot.com.es//estructuras-de-control.html Estructuras de salto

✓https://es.slideshare.net/DaniSantia/t7-estructuras-de-salto ✓http://www.ingenieriasystems.com//estructuras-de-salto-en-java.html ✓https://javaparajavatos.wordpress.com/category/estructuras-de-salto/ Programación

---

## 7.2 Ejercicios

Programación

- Ejercicios

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS Estructuras de control Programación

Ejercicio 1 ¿Qué valor se asigna a consumo en la sentencia if siguiente si velocidad es 120?

```java
if (velocidad > 80) {
consumo = 10.00;
}
else if (velocidad > 100) {
consumo = 12.00;
}
else if (velocidad > 120) {
consumo = 15.00;
}
```

Programación

Ejercicio 2 Supóngase el siguiente fragmento de código, donde x es una variable int y c es una variable char que han sido convenientemente inicializadas

```java
if (x<0 && c=='x') System.out.println("Caso 1");
else if (x<0 && c!='x') System.out.println("Caso 2");
else if (x>=0 && c=='y') System.out.println("Caso 3");
else if (x>=0 && c!='y') System.out.println("Caso 4");
```

Se debe reescribir dicho código con la siguiente estructura, colocando las condiciones e instrucciones System.out.println() adecuadas, de forma que dados cualesquiera x y c el resultado escrito en la salida estándar coincida: if ( x < 0 ) else Programación

Ejercicio 3 Para cada uno de los siguientes 4 bloques de código Java que contienen instrucciones condicionales, deducir el valor final de x si el valor inicial de x es 0: 1.- if (x >= 0) x++; else if (x >= 1)

```java
x = x+2;
```

3.- if (x < 0)

```java
x = x+2;
```

else x++; x--; 2.- if (x >= 0) x++; if (x >= 1)

```java
x = x+2;
```

4.- if (x > 0) if (x <= 1) x++; else x--; Programación

Ejercicio 4 ¿Qué se muestra por pantalla tras ejecutar el siguiente fragmento de código?

```java
switch(2){
case 1: System.out.println(1); break;
case 2: System.out.println(2);
case 3: System.out.println(3); break;
default: System.out.println(4);
}
```

Programación

Ejercicio 5 ¿Cuál es la salida que produce este programa si primOpcion de tipo int vale 1? ¿Y si vale 2?

```java
switch (primOpcion + 1) {
case 1: System.out.print("Ensalada ");
```

break;

```java
case 2: System.out.print("Paella ");
```

break;

```java
case 3: System.out.print("Emperador ");
case 4: System.out.print("Helado ");
```

break;

```java
default: System.out.print("Buen provecho");
}
```

Programación

Ejercicio 6 Escribir un método estático que, dadas las coordenadas del centro (x, y) de una circunferencia, muestre por pantalla si dicho centro está situado en: ✓el primer cuadrante x > 0 e y > 0, ✓el segundo cuadrante x < 0 e y > 0, ✓el tercer cuadrante x < 0 e y < 0, ✓el cuarto cuadrante x > 0 e y < 0, ✓el eje de abscisas x != 0 e y = 0, ✓el eje de ordenadas x = 0 e y != 0 ✓el origen de coordenadas x = 0 e y = 0.

Programación

Ejercicio 7 Dados dos números enteros, num1 y num2, diseña un método estático que escriba uno de los dos mensajes: “el producto de los dos números es positivo o nulo” o bien “el producto de los dos números es negativo”. No hay que calcular el producto. Programación

Ejercicio 8 Escribir un programa en Java que implemente el juego “Piedra, papel o tijeras”. En el programa, el papel de uno de los jugadores lo realizará el ordenador, mientras que el del otro lo realizará el usuario. Cuando el programa se ejecute deberá: a) Seleccionar al azar uno de los tres elementos: “Piedra”, “Papel” o “Tijeras”.

- Pedir al usuario que elija uno de ellos. La introducción debe de realizarse mediante

una cadena de texto, de forma que mayúsculas y minúsculas se considerarán irrelevantes. En el caso de que el usuario introduzca una palabra distinta de las tres posibles, entonces el programa acabará, diciendo que la palabra no ha sido reconocida.

- En función de lo que se haya seleccionado inicialmente de forma aleatoria en el

paso primero del programa y de lo que haya elegido el usuario en el segundo paso, el programa anunciará lo que ha elegido cada uno de los contrincantes y deberá señalar el vencedor, caso de que exista, o que se ha producido un empate, caso de no haberlo. Programación

Ejercicio 9 Piedra, papel o tijeras, lagarto, spock Programación

Ejercicio 10 Dados los siguientes bucles: ¿Cuál de ellos escribe únicamente los múltiplos de 3, entre 3 y n inclusive?

- los dos,
- sólo el de la izquierda,
- sólo el de la derecha.

```java
int i = 3;
while (i<=n) {
System.out.println(i);
i = i+3;
}
int i = 0;
while (i<n) {
i = i+3;
System.out.println(i);
}
```

Programación

Ejercicio 11 Escribir a mano el resultado de ejecutar los siguientes bucles, donde n vale 5

```java
int i = n;
while (i>=0) {
System.out.println(i*i);
```

i--; }

```java
int i = n+1;
while (i>0) {
```

i--;

```java
System.out.println(i*i);
}
int i = 0;
while (i<=n) {
System.out.println(i*i);
```

i++; }

```java
int i = 0;
while (i<=n) {
System.out.println((n-i)*(n-i));
```

i++; }

```java
for (int i=n; i>=0; i--) {
System.out.println(i*i);
}
for (int i=0; i<=n; i++) {
System.out.println((n-i)*(n-i));
}
```

Programación

Ejercicio 12 Reescribir el siguiente bucle while con instrucciones do ... while y for.

```java
int num=10;
while (num<=100) {
System.out.println(num);
num += 10;
}
```

Programación

Ejercicio 13 ¿Cuál es la salida del siguiente bucle?

```java
for (int i=1; i<4; i++) {
System.out.print(i);
System.out.print(" ");
for (int j=i; j>=1; j--) {
System.out.print(j);
System.out.print(" ");
}
System.out.print("\n");
}
```

Programación

Ejercicio 14 ¿Cuál es la salida del siguiente bucle?

```java
int i, j;
i = 1;
while (i*i<10) {
j = i;
while (j*j<100) {
System.out.print(i + j);
System.out.print(“ ”);
j *= 2;
}
```

i++;

```java
System.out.print(“\n”);
}
System.out.print("\n*****");
```

Programación

Ejercicio 15 Describir qué hace el siguiente segmento de código en Java. Se supone que n es una variable de tipo int previamente inicializada. double resultado;

```java
int i;
if (n<0) i = -n;
else i = n;
resultado = 0.0;
while (i>=1) {
resultado += (1/i);
```

i--; } Programación

Ejercicio 16 Escribir un programa que lea un n positivo de teclado y que escriba en la salida, línea a línea, los pares de enteros i, j, 1≤i ≤n, 1 ≤j ≤n y el valor que toma la expresión i + j + 2 * i * j. Dado que la suma y el producto son conmutativos, la expresión toma el mismo valor para el par (j; i) que para el par (i; j), por lo que sólo se deberá calcular para uno de los pares.

A continuación se muestra cuál debería ser el resultado del programa para n = 4: Par 1,1: 1+1+2*1*1 vale 4 Par 1,2: 1+2+2*1*2 vale 7 Par 1,3: 1+3+2*1*3 vale 10 Par 1,4: 1+4+2*1*4 vale 13 Par 2,2: 2+2+2*2*2 vale 12 Par 2,3: 2+3+2*2*3 vale 17 Par 2,4: 2+4+2*2*4 vale 22 Par 3,3: 3+3+2*3*3 vale 24 Par 3,4: 3+4+2*3*4 vale 31 Par 4,4: 4+4+2*4*4 vale 40 Programación

---

## 7.3 Ejercicios AyR - Condicionales Parte 1

### UNIDAD 3: ESTRUCTURAS DE CONTROL

V2.16.10.23 EJERCICIOS DE REFUERZO/AMPLIACIÓN (PARTE 1) Refuerzo

- Pedir dos números y decir si son iguales o no.
- Pedir un número e indicar si es positivo o negativo.
- Pedir dos números y decir cuál es el mayor.
- Pedir dos números y mostrarlos ordenados de mayor a menor.
- Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene.

### 6. Pedir una nota numérica entera entre 0 y 10, y mostrar dicha nota de la forma: cero,

uno, dos, tres... Utilizando estructura switch. Ampliación

- Pedir un número entre 0 y 9.999 y mostrarlo con las cifras al revés.
- Pedir un número entre 0 y 9.999, decir si es capicúa.
- Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, Notable

y Sobresaliente.

- Utilizando estructura if-else.
- Utilizando estructura switch.

### 10. Pedir un número de 0 a 99 y mostrarlo escrito. Por ejemplo, para 56 mostrar: cincuenta

y seis. Utilizando estructura switch.

---

## 7.4 Ejercicios AyR - Condicionales Parte 2

V2.16.10.23 EJERCICIOS DE REFUERZO/AMPLIACIÓN (PARTE 2) Refuerzo

### 1. Escribe un programa que pida una hora por teclado y que muestre luego buenos días,

buenas tardes o buenas noches, según la hora. Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5 respectivamente. Sólo se tienen en cuenta las horas, los minutos no se deben introducir por teclado.

### 2. Escribe un programa que calcule el salario semanal de un trabajador teniendo en

cuenta que las horas ordinarias (40 primeras horas de trabajo) se pagan a 12 euros la hora. A partir de la hora 41, se pagan a 16 euros la hora.

- Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, Notable

y Sobresaliente. Utilizando estructura if-else.

- Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, Notable

y Sobresaliente. Utilizando estructura switch de la forma más eficiente.

### 5. Escribe un programa que nos diga el horóscopo a partir del día y el mes de

nacimiento. Podéis consultar las fechas del horóspoco en “Tabla de fechas” de https://es.wikipedia.org/wiki/Zodiaco

---

## 7.5 Ejercicios AyR - Estructrura repetitiva while do

V2.18.10.23

Profesor: José Ramón Simó Martínez

#### 3.2. ESTRUCTURAS REPETITIVAS

Hemos visto cómo comprobar condiciones, pero no cómo hacer que una cierta parte de un programa se repita un cierto número de veces o mientras se cumpla una condición (lo que llamaremos un “bucle”). Tenemos varias formas de conseguirlo, según si queremos comprobar la condición antes de repetir, o después de cada repetición, o realizar la tarea una cierta cantidad de veces.

En esta unidad veremos tres tipos de estructuras de repetición: • while • do-while • for 3.2.1. while Estructura básica de un bucle while Si queremos hacer que una sección de nuestro programa se repita mientras se cumpla una cierta condición, usaremos la orden “hile”. Esta orden tiene dos formatos distintos, según comprobemos al principio (while) o al final del bloque repetitivo (do-while).

En el primer caso, su sintaxis es while(condición) sentencia; Es decir, la sentencia se repetirá mientras la condición sea cierta. Si la condición es falsa ya desde un principio, la sentencia no se ejecuta nunca. Si queremos que se repita más de una sentencia, basta agruparlas entre llaves: { y }. Como ocurría con if, puede ser recomendable incluir siempre las llaves, aunque se trate de una única sentencia, para evitar errores posteriores difíciles de localizar.

while(condición) { sentencia1; sentencia2; sentencia3; . . . sentenciaN; }

V2.18.10.23 Su representación en diagrama de flujo es

Un ejemplo sencillo sería un bucle que se repite 10 veces, pero no muestra nada

```java
int i =  0;
```

while (i < 10)

```java
i = i + 1;
```

Otro ejemplo más útil es que muestre los dígitos del 0 al 9

```java
int i = 0;
```

while (i < 10) {

```java
System.out.println(“i: “ + i);
    i = i + 1;
}
```

Como ves, un bucle puede ser utilizado para contar. Aunque típicamente el bucle más adecuado para esto será el bucle for que veremos más adelante. Dentro del bloque del bucle while (y otros tipos de bucles) podrás poner cualquier sentencia o estructura de control

```java
i  = 10;
```

while (i >= 0) { if (i == 5)

```java
System.out.println(“El cinco está incluido”);
```

```java
i = i – 1;
}
```

V2.18.10.23

EJERCICIOS PROPUESTOS

- Escribe un programa que escriba en pantalla los números entre 10 y 20, usando while.

### 2. Escribe un programa que muestre por pantalla los números pares del 26 al 10

(descendiendo), usando while.

### 3. Escribe un programa que muestre tantos asteriscos (*) en la misma línea, como indique

el usuario.

- Escribe un programa que calcule cuantas cifras tiene un número entero positivo.

(pista: se puede hacer dividiendo varias veces entre 10). 3.2.2. do-while El formato do-while es do sentencia;

```java
while (condición);
```

También usando las llaves para varias sentencias: do { sentencia1; sentencia2; sentencia3; . . . sentenciaN;

```java
} while (condición);
```

La única diferencia entre while y do-while es que la sentencia o sentencias del do-while se ejecutan siempre, al menos una vez, aunque la expresión se evalúe como falsa la primera vez. En un while, si la condicional es falsa la primera vez, la sentencia no se ejecuta nunca. En la práctica, do-while es menos común que while.

Su representación en diagrama de flujo es

V2.18.10.23

Un ejemplo típico de uso del do-while es para pedir al usuario al menos un dato y luego compruebe la condición para determinar si el bucle continúa o termina

```java
int suma, numero;
```

```java
suma = 0;
```

do {

```java
System.out.print(“Dame un número: “);
    numero = sc.nextInt();
    suma = suma + numero;
} while (suma <= 10);
```

Esto se hubiera escrito con bucle while de la siguiente forma equivalente

```java
int suma, numero;
```

suma = 0; // iniciamos el valor de suma

```java
System.out.print(“Dame un número: “);
numero = sc.nextInt();
```

// Si no ponemos suma = 0 arriba esto daría error de compilación // porque se intenta hacer una operación con una variable que no // tiene un valor adecuado. En otros lenguajes esto no daría error // de compilación, pero el programa no sumaría lo esperado.

```java
suma = suma + numero;
```

while (suma < 10) {

```java
System.out.print(“Dame un número: “);
    numero = sc.nextInt();
    suma = suma + numero;
}
```

V2.18.10.23 EJERCICIOS PROPUESTOS

### 5. Escribe un programa que muestre en pantalla los números entre 10 y 20, usando do

while.

### 6. Escribe un programa que muestre por pantalla los números impares del 26 al 10

(descendiendo), usando do-while.

#### 2.2.3. Terminación del bucle mediante valor centinela

Otra técnica para controlar las iteraciones de un bucle es designar un valor especial cuando se leen y procesan un conjunto de valores. Este valor de entrada especial, conocido como centinela, significará el final de la entrada de valores (o datos). Un bucle que utilice centinelas para controlar su ejecución es conocido “Bucle controlado por centinela”.

El siguiente programa lee y calcula la suma de una cantidad no especificada de valores enteros. Al introducir el valor 0 (cero) significará el final de la introducción de datos. Necesitas declarar una nueva variable para cada número entero introducido? No. Solamente utiliza una variable que podemos llamar numero para guardar el valor y utilizar una variable llamada suma para guardar el total (también se conoce como variable acumulativa). Sea cuando se que un valor de entrada por teclado es leída, se asignará a la variable numero, y si esta no es 0, se sumará a la variable suma.

La explicación del ejemplo se plasma en el siguiente código fuente

EJERCICIOS PROPUESTOS Nota: utiliza el tipo de bucle más adecuado si no se especifica.

- Reescribe el ejemplo 2231 utilizando bucle do-while.

8 Escribe un programa que pida al usuario un número y le diga si este es positivo o negativo. Se repetirá mientras el número introducido no sea cero.

V2.18.10.23

### 9. Escribe un programa que pida al usuario su contraseña (numérica). Deberá terminar

cuando introduzca como contraseña el número 1111, de lo contrario será solicitada tantas veces como sea necesario.

### 10. Escribe un programa que pida de forma repetitiva pares de números al usuario. Tras

introducir cada par de números, responderá si el primero es múltiplo del segundo. Se repetirá mientras los dos números sean distintos de cero (terminará cuando uno de ellos sea cero).

### 11. Escribe una versión mejorada del programa anterior, que, tras introducir cada par

de números, responderá si el primero es múltiplo del segundo, o el segundo es múltiplo del primero, o ninguno de ellos es múltiplo del otro.

---

## 7.6 Ejercicios AyR - Estructura repetitiva for - mis

V2.16.10.23

Profesor: José Ramón Simó Martínez 3.2.4. for Hasta ahora hemos escrito un bucle de la siguiente forma

```java
int i =  0;
```

while (i < valorFinal) { // Sentencias…

```java
i = i + 1;
}
```

Un bucle for se utiliza para simplificar el anterior ejemplo

```java
int i;
```

for (i = 0; i < valorFinal; i++) { // Sentencias… } En general, la sintaxis de un bucle for es: for (acción-inicial; condición-bucle; acción-posterior) { // Sentencias… } El orden de ejecución de cada elemento del bucle for es la siguiente

### 1. Se realiza la acción inicial, comúnmente es inicializar una variable que hará de

controlador de iteraciones del bucle.

### 2. Se comprueba la condición de continuación del bucle. Si la condición es cierta, el

bucle continúa, ejecutando las sentencias de su bloque; si es falsa, entonces termina.

### 3. Al final de cada iteración se realiza la acción posterior, comúnmente es un incremento

del valor de la variable controlador de iteraciones del bucle.

- Volver al paso 2.

El diagrama de flujo correspondiente sería este (versión en inglés, pero fácil de entender)

V2.16.10.23

Por ejemplo, el siguiente bucle for muestra 100 veces el mensaje ‘Bienvenidos a DAM Semipresencial’

```java
int i = 0;
```

for (i = 0; i < 100; i++) {

```java
System.out.println(“Bienvenidos a DAM Semipresencial 2020/2021”;
}
```

Se puede declarar la variable dentro del bucle for: for (int i = 0; i < 100; i++) {

```java
System.out.println(“Bienvenidos a DAM Semipresencial 2020/2021”;
}
```

El valor final de comparación (100) puede ser una variable

```java
int tamanyo = 100;
```

for (int i = 0; i < tamanyo; i++) {

```java
System.out.println(“Bienvenidos a DAM Semipresencial 2020/2021”;
}
```

Como habréis comprobado, introducimos una nueva forma de incrementar el valor de una variable en una unidad con ‘i++’. Es el equivalente a hacer ‘i = i + 1’ pero de una forma más corta. Esta forma de hacerlo es muy utilizada en los bucles.

V2.16.10.23 Por último, recordar que dentro del bloque de un bucle while, do-while o for, se pueden utilizar otras estructuras de control (por ejemplo, estructuras if-else). En los siguientes apartados veremos como funciona un bucle dentro de otro bucle. EJERCICIOS PROPUESTOS Nota: En todos estos ejercicios se debe usar el bucle for

### 1. Escribe un programa que muestre los números del 10 al 20, ambos incluidos, usando

for.

### 2. Escribe un programa que escriba en pantalla los números del 1 al 50 que sean múltiplos

de 3. Pista: habrá que recorrer todos esos números y ver si el resto de la división entre 3 resulta 0.

### 3. Escribe un programa que muestre los números del 100 al 200 (ambos incluidos) que

sean divisibles entre 7 y a la vez entre 3.

- Escribe un programa que muestre la tabla de multiplicar del 9.

### 5. Escribe un programa que muestre los primeros ocho números pares: 2 4 6 8 10 12 14

16. Pista: en cada pasada habrá que aumentar de 2 en 2, o bien mostrar el doble del valor que hace de contador.

### 6. Escribe un programa que muestre los números del 15 al 5, descendiendo

Pista: en cada pasada habrá que descontar 1, por ejemplo, haciendo i=i-1, que se puede abreviar i--.

#### 3.2.5. Bucles anidados

Uno o más bucles (bucles interiores) pueden formar parte del bloque de otro bucle (bucle exterior). Cada vez que el bucle más exterior ser repite, lo bucles interiores se vuelven a ejecutar de nuevo desde el inicio. En el siguiente ejemplo escribimos un programa que muestra la tabla de multiplicar completa

V2.16.10.23 Podemos repetir sentencias compuestas dentro del bucle for al igual que hacíamos en las estructuras if, while o do-while. Para ello basta definir el bucle como un bloque mediante las llaves { }. Por ejemplo, si queremos que en el ejemplo anterior se separen con una línea en blanco cada tabla de multiplicar, haremos lo siguiente

Si repetimos la escritura de varias líneas, cada una formadas por varias columnas, podremos dibujar varias figuras geométricas sencillas (bastantes de las cuales quedarán propuestas para que tú las intentes). Por ejemplo, se puede dibujar un rectángulo con

El anterior código mostraría por pantalla esto

V2.16.10.23

Por supuesto, también se pueden anidar bucles while en bucles while, bucles for en bucles, etc. Se propone como ejercicio en los ejercicios propuestos de este apartado. EJERCICIOS PROPUESTOS

### 7. Escribe un programa escriba 4 veces los números del 1 al 5, en una misma línea,

usando for: 12345123451234512345.

### 8. Escribe un programa escriba 4 veces los números del 1 al 5, en una misma línea,

usando while: 12345123451234512345.

### 9. Escribe un programa que, para los números entre el 10 y el 20 (ambos incluidos) diga

si son divisibles entre 5, si son divisibles entre 6 y si son divisibles entre 7, usando dos bucles anidados.

### 10. Escribe un programa que escriba 4 líneas de texto, cada una de las cuales estará

formada por los números del 1 al 5.

### 11. Escribe un programa que pida al usuario el ancho (por ejemplo, 4) y el alto (por

ejemplo, 3) y escriba un rectángulo formado por esa cantidad de asteriscos: **** **** ****

### 12. Haz un programa que dibuje un cuadrado de asteriscos, cuyo ancho (y alto, que

tendrá el mismo valor) será introducido por el usuario.

### 13. Crea un triángulo de asteriscos, que mostrará uno en la primera fila, dos en la

segunda, tres en la tercera y así sucesivamente, hasta llegar al tamaño indicado por el usuario.

### 14. Dibuja un triángulo de asteriscos descendente. Por ejemplo, si el usuario escoge "4"

como tamaño, la primera fila tendrá 4 asteriscos, la segunda tendrá 3, la siguiente tendrá 2 y la última tendrá 1.

#### 3.2.6. Bucles infinitos

Un bucle puede ejecutarse indefinidamente. Esta peculiaridad puede ser beneficiosa si se hace intencionadamente, sobre todo en conceptos de programación avanzada. Sin embargo, es un desastre si se produce por un descuido en nuestro código fuente.

V2.16.10.23 En general, el bucle no parará debido a que la condición de continuidad del bucle siempre será cierta. while (1 == 1) { //Sentencias } Esto también se puede producir, por supuesto, en un bucle do-while... do { //Sentencias }

```java
while (1 == 1);
```

… o en un bucle for: for ( ; ; ) { //Sentencias } Típicamente, un programa con un bucle infinito por descuido sería

```java
int i = 0;
```

while (i < 100) {

```java
System.out.println(i);
}
```

Esto es debido a que no estamos actualizando el valor de la variable ‘i’ en cada iteración del bucle. Para solucionarlo, haríamos esto

```java
int i = 0;
```

while (i < 100) {

```java
System.out.println(i);
    i++;
}
```

EJERCICIOS PROPUESTOS Nota: para parar el bucle debéis cerrar la consola o pulsar ctrl + c (a la vez).

### 15. Escribe un programa que contenga un bucle sin fin que escriba "Hola " en pantalla,

sin avanzar de línea.

### 16. Escribe un programa que contenga un bucle sin fin que muestre los números enteros

positivos a partir del uno, separados por un espacio en blanco.

V2.16.10.23

#### 3.2.7. Ámbito de variables en las estructuras de control

Las variables, generalmente, tiene su ámbito de ser (su validez) dentro del bloque donde es declarada. Por ejemplo

La variable ‘a’ tiene validez (se puede utilizar) en todo el bloque del main. En cambio, la variable ‘b’ está declarada dentro del bloque if y, como consecuencia, el compilador nos dará un error: nos dirá que la variable ‘b’ de la última instrucción no está declarada.

En definitiva, la variable ‘b’ sólo será válida, en este caso, dentro del bloque if y fuera de este bloque es como si no existiera. Cuidado, que el ámbito de la variable se aplica a todo el bloque donde sea declarada, incluido los bloques interiores que contenga. Por ejemplo, en el siguiente código la variable ‘b’ del segundo bloque if sí que es válida.

V2.16.10.23

Todos estos conceptos los podemos aplicar a los bucles while, do-while y for. Por otra parte, tenemos que tener en cuenta el ámbito de las variables cuando estas son reutilizadas. De vez en cuando, puede que tengamos resultados no esperados.

En el anterior ejemplo cuando termina el bucle for la variable ‘i’ es igual a 5 y por tanto no entra en el siguiente bucle while ( 5 no es menor que 5 ). En el siguiente caso, si declaramos la variable dentro del for, la zona de while no compilará, lo que hace que el error de diseño sea evidente

V2.16.10.23

Es buena práctica escribir el for de esa forma: declarando la variable contador dentro. En consecuencia, obtendremos programas más seguros. EJERCICIOS PROPUESTOS 17.Escribe un programa que escriba 6 líneas de texto, cada una de las cuales estará formada por los números del 1 al 7. Debes usar dos variables llamadas "linea" y "numero", y ambas deben estar declaradas en el "for".

#### 3.2.8. Uso de llaves en los bloques

Hasta ahora hemos visto ejemplos y ejercicios en los cuales hemos incluido llaves en las estructuras de control (if-else, while, do-while, for) en unos casos y en otros no. Ya se ha explicado que cuando solo tenemos una instrucción no hace falta poner llaves. En cambio, si queremos ejecutar un conjunto de instrucciones dentro de la estructura, sí que es necesario poner llaves; en caso contrario, solo se ejecutaría la primera instrucción del conjunto.

La salida del programa del anterior ejemplo sería

V2.16.10.23 Hola Hola Hola me llamo Aitor Tilla Esto no sería lo esperado y lo solucionaríamos con las llaves para que se ejecute dentro del bucle for todas las instrucciones esperadas

La salida del programa en este caso sería la correcta: Hola me llamo Aitor Tilla Hola me llamo Aitor Tilla Hola me llamo Aitor Tilla Otro ejemplo, que ya hemos tratado anteriormente, sería el del programa de las tablas de multiplicar. En el siguiente ejemplo, la instrucción System.out.println(“”) que imprime una línea en blanco, será ejecutada fuera de los bucles; realmente lo que queremos es que se ejecute después de mostrar cada una de las tablas de multiplicar.

Se soluciona de la siguiente forma

V2.16.10.23

Aunque hayamos puesto llaves en el for interior, no harían falta ya que sólo queremos que se ejecute una instrucción. En cambio, si que son necesarias la llaves en el bucle exterior para forzar a que System.out.println(“”) esté dentro de este bucle. La recomendación

• Si se empieza en el mundo de la programación es conveniente utilizar las llaves aunque no hagan falta, siempre que su uso no cambio el sentido lógico del programa que queremos. • Cuando ya tengáis más experiencia, podéis ir reduciendo su uso cuando no sea imprescindible. El motivo por el cual los programadores experimentados hacen esto es porque la legibilidad del código es más limpia, se reduce el número de líneas y, en definitiva, se obtiene un código más “elegante”.

EJERCICIOS PROPUESTOS

### 17. Crea un programa que pida un número al usuario y escriba los múltiplos de 9 que

haya entre 1 y ese número. Debes usar llaves en todas las estructuras de control, aunque sólo incluyan una sentencia.

- Crea un programa que pida al usuario dos números y escriba sus divisores comunes.

Debes usar llaves en todas las estructuras de control, aunque sólo incluyan una sentencia.

#### 2.2.9. Instrucciones de salto: break

La instrucción break ya la conocemos por su uso en la estructura switch. En un bucle también se puede utilizar el break para salir del bucle inmediatamente.

V2.16.10.23

En este ejemplo se ejecuta el bucle for, en principio, desde i=1 hasta i=9. Sin embargo, cuando i = 6 se ejecuta la instrucción break y termina el bucle. Por tanto, como salida del programa se obtiene: 1 2 3 4 5 Cabe tener en cuenta que, en los bucles anidados, la instrucción break solo afecta al bucle en el que se ha utilizado.

Un apunte importante sobre esta instrucción es que debe ser evitada en la medida de lo posible. ¿Y entonces para qué existe? Porque a los programadores experimentados les puede simplificar el código. Sin embargo, su uso y abuso puede conllevar a escribir programas difíciles de leer y depurar.

Todo bucle que utilice la instrucción break se puede reescribir sin ésta. Asimismo, en anterior ejemplo, lo podríamos escribir de la siguiente forma

Aunque evidentemente esta solución es muy forzada (por no decir rebuscada o rara). Dejo para el alumnado que lo reescriba de una forma más inteligente. Otro ejemplo sería utilizando bucle while

V2.16.10.23

En este caso, podríamos reescribir el programa sin utilizar el bucle for de la siguiente forma

Por supuesto, mantiene el mismo comportamiento. EJERCICIOS PROPUESTOS

### 19. Escribe un programa que pida al usuario dos números y escriba su máximo común

divisor. Pista: una solución lenta pero sencilla es probar con un for todos los números descendiendo a partir del menor de ambos, hasta llegar a 1; cuando encuentres un número que sea divisor de ambos, interrumpe la búsqueda con break.

### 20. Escribe un programa que pida al usuario dos números y escriba su mínimo común

múltiplo. Pista: una solución lenta pero sencilla es probar con un for todos los números a partir del mayor de ambos, de forma creciente; cuando encuentres un número que sea múltiplo de ambos, interrumpes la búsqueda con break.

### 21. Escribe una versión alternativa del ejercicio 2.2.9.1 (máximo común divisor) usando

while, en vez de for y break.

V2.16.10.23

### 22. Escribe una versión alternativa del ejercicio 2.2.9.2 (mínimo común múltiplo) usando

while, en vez de for y break.

#### 3.2.10. Instrucciones de salto: continue

La otra instrucción de salto que permite el lenguaje Java se llama continue. Cuando un bucle se encuentra con esta instrucción, inmediatamente pasa a la siguiente iteración si ejecutar el resto de instrucción que haya después del continue. Atención, mientras la instrucción break hace que el bucle termine completamente, la instrucción continue sólo rompe con una iteración del bucle, pasando a la siguiente.

Un ejemplo del uso de continue sería el siguiente

Cuya salida por pantalla sería: 1 2 3 4 5 6 8 9 Al igual que ocurre con el break, no es aconsejable el uso de continue si no se sabe bien lo que se está haciendo. El anterior ejemplo se puede reescribir así

V2.16.10.23 EJERCICIOS PROPUESTOS

### 23. Escribe un programa que escriba los números del 20 al 10, descendiendo, excepto

el 13, usando continue.

### 24. Escribe un programa que escriba los números pares del 2 al 106, excepto los que

sean múltiplos de 10, usando continue.

- Escribe una versión alternativa del ejercicio 2.2.10.1, que no utilice continue sino el if

contrario.

### 26. Escribe una versión alternativa del ejercicio 2.2.10.2, que no emplee continue sino el

if contrario.

#### 3.2.11. Equivalencia bucle for y while

En anteriores apartados hemos comentado el uso recomendado para los bucles while o los bucles for: Uso del for: si de antemano sabemos el número de veces que se quiere ejecutar el bucle, hasta un valor tope. Dicho de otra forma, cuando conocemos el final del bucle.

Uso del while: para el resto de casos. Queremos que las condiciones de repetición se basen en otros casos lógicos. De todas formas, debemos tener en cuenta que todo bucle for se puede reescribir como un bucle while. Se podría decir que un bucle for es como un bucle while, pero compactado y para un propósito más concreto.

Por ejemplo

V2.16.10.23 EJERCICIOS PROPUESTOS

### 27. Escribe un programa que escriba los números del 100 al 200, separados por un

espacio, sin avanzar de línea, usando for. En la siguiente línea, vuelve a escribirlos usando while.

### 28. Escribe un programa que escriba los números pares del 20 al 10, descendiendo,

excepto el 14, primero con for y luego con while.

---

## 7.7 Ejercicios AyR - Mortadelo y Filemon

V2.18.10.23 EJERCICIOS DE REFUERZO/AMPLIACIÓN (PARTE 3) Profesor: José Ramón Simó LOS EJERCICIOS...¡ÁNIMO! En homenaje a...

> **✍️ Ejercicio 1: Notas del profesor Bacterio Ha llegado la semana de**
> Ejercicio 1: Notas del profesor Bacterio Ha llegado la semana de evaluación y el Profesor Bacterio quiere saber las estadísticas de aprobados, suspensos, etc, de los 10 alumnos/as que tiene en su laboratorio. Para ello, necesita que le escribas un programa en el que pueda ir insertando las notas de sus alumnos/as y como resultado el programa le devolverá la cantidad de alumnos/as que son

• Brillantes: que saquen un 9 o un 10. • Aprobados: que hayan superado el 5. • Condicionados: que estén entre el 4 y el 5 (ahí ahí). • Suspensos: que hayan obtenido menos de 4. • Cazurros: alumnos que hayan sacado un 0. Ejemplo de salida del programa una vez introducidas las notas de cada alumno

2 alumno/s brillantes 4 alumno/s aprobados 1 alumno/s condicionado 2 alumno/s suspensos 1 alumno/s cazurros

V2.18.10.23 Ejercicio 2: Sueldos en la TIA

En la TIA (Organización de Técnicos de Investigación Aero terráquea) han perdido los datos de las nóminas por culpa del programa que el Profesor Bacterio escribió para gestionar las notas de sus alumnos. Te han contratado de urgencia y, por favor, no se puede enterar el Profesor Bacterio de todo esto. Tu misión secretísima será escribir un programita que te vaya pidiendo los sueldos de cada uno de los empleados. Al terminar, el programa informará de cuál es el sueldo máximo y mínimo que se cobra en esta desastrosa organización.

Como nadie te dice nada, supones que el programa te pedirá al principio la cantidad de sueldos que quieras introducir. Ejemplo de ejecución del programa: ¿Cuántos empleados quiere introducir?: 4

Introduce sueldo de empleado 1: 1200 Introduce sueldo de empleado 2: 3000 Introduce sueldo de empleado 3: 600 Introduce sueldo de empleado 4: 600

Sueldo máximo: 3000€ Sueldo mínimo: 600€

V2.18.10.23 Ejercicio 3: Sueldos en la TIA (Parte 2)

- ¡Todo mal! ¡Lo has hecho todo mal! – te grita desesperadamente

la señorita Ofelia. Resulta que la guía de estilo de programación dice que sólo se pueden utilizar bucles infinitos en los programas de la TIA. No se podía esperar menos de esta caótica organización No te queda otra que reescribir el programa (si no quieres que la ira de la señorita Ofelia caiga sobre ti), pero esta vez ten en cuenta que nada de bucles finitos. Además, también te exige que

• A priori no se sabe cuántos sueldos se van a almacenar. • El programa debe terminar si se introduce un sueldo 0 (cero). Aquí tienes ejemplos de ejecución del programa según que casos: Ejemplo 1 de ejecución del programa: Introduce sueldo de empleado 1: 1200 Introduce sueldo de empleado 2: 3000 Introduce sueldo de empleado 3: 600 Introduce sueldo de empleado 4: 600 Introduce sueldo de empleado 5: 0

Sueldo máximo: 3000€ Sueldo mínimo: 600€ Ejemplo 2 de ejecución del programa (sólo hay un empleado): Introduce sueldo de empleado 1: 1200 Introduce sueldo de empleado 2: 0

Sueldo máximo: 1200€ Sueldo mínimo: 1200€ Ejemplo 3 de ejecución del programa (no hay empleados): Introduce sueldo de empleado 1: 0

No hay empleados

V2.18.10.23 Ejercicio 4: Clave secreta del Superintendente Vicente El Superintendente Vicente está desesperado porque no se acuerda de la contraseña de la caja fuerte. En ella está guardado el regalo de aniversario para su mujer, Felisa. De repente, se produce una explosión en el laboratorio del Profesor Bacterio y su trofeo más apreciado del club de petanca le cae en la cabeza.

Después de unos minutos de aturdimiento, el Superintendente Vicente recoge el trofeo y se da cuenta que en la base hay un papel con un número escrito que pone “número secretísimo de la caja fuerte: 7542”. ¡Muy emocionado prueba el número en la caja fuerte, pero... no abre! Sin embargo, hay esperanzas. En el reverso del mismo papel hay escrito un mensaje que dice lo siguiente

“El número secreto tiene que dislocarse, de tal forma que a cada dígito se le suma 1 si es par y se le resta 1 si es impar”. Pues eso, escribe un programa que ayude al Superintendente Vicente a desvelar la clave (no tiene la cabeza para pensar mucho ahora mismo). Ejemplo 1 de ejecución del programa

Introduce un número: 7542 La clave generada para el número 7542 es 6453 Ejemplo 2 de ejecución del programa: Introduce un número: 476 La clave generada para el número 476 es 567

---

## 7.8 Ejercicios - AyR

Programación

- Ampliación y Refuerzo

Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web Jose Chamorro Molina Actualizado por: José Ramón Simó

EJERCICIOS Ampliación Programación

Ejercicio 1 Escribir un programa para calcular, mediante restas sucesivas, el cociente y resto de la división de dos números enteros a y b, con a ≥ 0 y b > 0. ¿Qué ocurriría si se ejecutase el programa con b valiendo inicialmente 0? ¿Y si a fuese menor que 0? Programación

Ejercicio 2 Se desea resolver de forma general, la siguiente ecuación de segundo grado

ax2 + bx + c = 0 donde, a, b y c, que son los coeficientes de la ecuación, son números reales cualesquiera, y x, la variable, cuyo valor o valores se desea conocer, puede ser un número real o complejo. La solución de la ecuación anterior depende de los valores de los coeficientes y, en función de los mismos, cabe distinguir entre los siguientes casos

si a es 0 (no hay término de segundo orden), entonces

- si b es también 0, y dependiendo de si c es 0 o no, la ecuación tiene infinitas

soluciones (es de la forma 0 = 0), o es imposible (es de la forma c = 0),

- si b es distinto de 0, entonces la ecuación es de primer grado, y la solución x es el

número real −c/b. Programación

Ejercicio 2 si a es distinto de 0, entonces la solución de la ecuación se puede obtener siempre aplicando la fórmula

x = (−b ± √ b 2 − 4ac) / 2ª donde al valor (b 2 − 4ac) se denomina discriminante. En dicho caso

- si el discriminante es 0 la solución es única y es un número real,
- si el discriminante es positivo las dos soluciones son números reales,
- si el discriminante es negativo las dos soluciones son números complejos.

Para resolver el problema, de forma general, mediante un programa, se puede seguir una estrategia como la siguiente: a) Pedir inicialmente los valores de los coeficientes al usuario, leyéndolos de teclado. Programación

Ejercicio 2

- En función de ellos, decidir si la ecuación

Es imposible, tiene un número infinito de soluciones, es una ecuación de primer grado, con solución real, o es una ecuación de segundo grado y: ✓ tiene una única solución real, ✓ tiene soluciones reales, o ✓ tiene soluciones complejas. Para ello, se recomienda considerar el análisis de casos que se ha esbozado anteriormente.

Programación

Ejercicio 2

- Escribir en la salida la advertencia o solución hallada según corresponda.

Tanto los coeficientes, a, b y c, como otros posibles números, como el discriminante, son números reales, por lo que se mantendrán a lo largo de la ejecución mediante variables de dicho tipo, por ejemplo se pueden declarar como variables de tipo double. Como se ha visto, según el tipo de ecuación, algunas soluciones pueden ser números complejos. Sin embargo, en el lenguaje no existe el tipo de datos número complejo de forma predefinida, por lo que se hace necesario representar dichos números de alguna forma alternativa. Se puede utilizar, por su sencillez, la forma cartesiana, en la que cada número complejo se representa mediante un par de valores de tipo real (double), uno para la parte real, y otro para la imaginaria. De esta manera, si n es un número p real negativo cualquiera, entonces el valor complejo √n, es p equivalente a |n|i.

Por ejemplo, el valor complejo −16, es equivalente a | − 16|i, esto es: 4i. Programación

EJERCICIOS Refuerzo Programación

Ejercicio 1 Escribir un programa en Java que, dados tres valores enteros a, b y c, implemente distintas soluciones al análisis por casos siguiente: a > b -> true a < b -> false a == b y a > c -> true a == b y a < c -> false a == b y a == c -> false Programación

Ejercicio 2 Escribir un programa en Java que calcule el salario semanal de un empleado pidiendo el número de horas trabajadas a la semana y el pago por hora, teniendo en cuenta que las horas extra (las que superan las 40) se pagan a un 50 % más. Programación

Ejercicio 3 Realizar un programa que calcule la tarifa de una autoescuela teniendo en cuenta el tipo de carnet (A, B, C o D) y el número de prácticas realizadas. Precios de las matrículas: A 150 euros, B 325 euros, C 520 euros, D 610 euros. Precios por práctica según carnet: A 15 euros, B 21 euros, C 36 euros, D 50 euros.

Programación

---

## ✍️ Activitats pràctiques UT7

> **✍️ 📋 Exercici / Qüestionari 7.1 — Práctica bucles: Dibujo de formas**
> 1. Realiza un programa que permita el ingreso de un valor y muestre dibujado con * un rectángulo.
>
> ```java
> Introduce la anchura del rectángulo: 4Introduce la altura del rectángulo: 3
> ```
>
> ```java
> * * * ** * * ** * * *
> ```
>
> 2. Realiza un programa que pinte por pantalla un rectángulo hueco hecho con asteriscos. Se debe pedir al usuario la anchura y la altura. Hay que comprobar
> que tanto la anchura como la altura sean mayores o iguales que 2, en caso contrario se debe mostrar un mensaje de error.
>
> 3. Realiza un programa que pinte una diagonal de esta forma.
>
> ```java
> Introduce la altura de la figura: 5
> ```
>
> ```java
> * * * **
> ```
> 4. Realiza un programa que presente por pantalla una figura de asteriscos como la siguiente
>
> ```java
> Introduce la altura de la figura: 5
> ```
>
> ```java
> *
> **
> ***
> ****
> *****
> ```
> 5. Realiza un programa que pinte un triángulo relleno tal como se muestra en los ejemplos. El usuario debe introducir la altura de la figura.
>
> 6. Realiza un programa que pinte un triángulo hueco tal como se muestra en los ejemplos. El usuario debe introducir la altura de la figura.
>
> 7. Realiza un programa que pinte un triángulo relleno tal como se muestra en los ejemplos. El usuario debe introducir la altura de la figura.
>
> 8. Realiza un programa que pinte un triángulo hueco tal como se muestra en los ejemplos. El usuario debe introducir la altura de la figura.
