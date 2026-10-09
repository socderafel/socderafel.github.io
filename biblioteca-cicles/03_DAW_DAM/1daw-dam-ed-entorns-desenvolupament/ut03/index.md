---
layout: default
title: "UT3 — Debugging y testing — Entorns de Desenvolupament | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT3 Completa"
prev_url: "../ut02/ut02actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT2"
next_url: "../ut03/ut0301.html"
next_label: "3.1 U4 - Debugging y testing ➡️"
---

# 📘 UT3 — Debugging y testing (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**3.1 U4 - Debugging y testing**](#ut0301) (o [obrir en pàgina individual ➡️](./ut0301.md) )
> - [**3.2 EjercicioGrafo2**](#ut0302) (o [obrir en pàgina individual ➡️](./ut0302.md) )
> - [**3.3 EjercicioGrafo3**](#ut0303) (o [obrir en pàgina individual ➡️](./ut0303.md) )
> - [**3.4 Códigos debugging**](#ut0304) (o [obrir en pàgina individual ➡️](./ut0304.md) )
> - [**✍️ Activitats pràctiques UT3**](#ut03actividades) (o [obrir en pàgina individual ➡️](./ut03actividades.md) )

---

## 3.1 U4 - Debugging y testing

---

U4 - Debugging y testing 1º DAW

Introducción

- La prueba del software es un elemento crítico para la garantía de la calidad

del software y representa una revisión final de las especificaciones, del diseño y de la codificación.

- La prueba de software es un elemento que a menudo se le conoce como

verificación y validación (V & V).

- Bohem lo define
- Verificación: ¿Estamos construyendo el software correctamente?
- Validación: ¿Estamos construyendo el producto correcto?

Objetivos de la prueba

- La prueba es un proceso de ejecución de un programa con la intención de

descubrir un error.

- Buen caso de prueba: aquel que tiene una alta probabilidad de mostrar un

error no descubierto hasta entonces.

- Éxito de una prueba: si descubre un error no detectado hasta entonces.

“La prueba no puede asegurar la ausencia de defectos, sólo puede demostrar que existen defectos en el software”.

Principios de la prueba

- Las pruebas deberán planificarse mucho antes de que empiecen para

garantizar la calidad de acuerdo a lo establecido en el ciclo de vida.

- Las pruebas deberán empezar por lo pequeño y progresar hacia lo grande.
- No son posibles las pruebas exhaustivas.
- Para ser más efectivas, las pruebas deberán ser conducidas por un equipo

independiente.

Pruebas de caja blanca

- Se comprueban los caminos lógicos del software proponiendo casos de prueba que

ejerciten conjuntos específicos de condiciones y/o bucles.

- Se puede examinar el estado del programa en varios puntos para determinar si el estado

real coincide con el esperado.

- Mediante los métodos de prueba de caja blanca, el ingeniero del software puede

obtener casos de prueba que: 1. Garanticen que se ejercita por lo menos una vez todos los caminos independientes de cada módulo. 2. Ejerciten todas las decisiones lógicas en sus vertientes verdadera y falsa. 3. Ejecuten todos los bucles en sus límites y con sus límites operacionales.

4. Ejerciten las estructuras internas de datos para asegurar su validez.

Pruebas de caja blanca

- La prueba de caja blanca denominada a veces prueba de caja de cristal se

examina de forma detallada la arquitectura de la aplicación.

- Emplean análisis del código fuente.
- Suelen requerir herramientas especializadas para realizar la prueba.

Pruebas de caja negra

- También se le conoce como prueba de comportamiento.
- Se realiza sobre la interfaz sin necesidad de conocer la estructura

interna del programa ni cómo está implementado.

- Se busca conocer si las funciones del software son operativas (las que

se esperan).

Pruebas de caja negra

- Se buscan errores de interfaz, en el acceso a los datos, por ejemeplo.
- Funcionalidades erróneas en el inicio o la finalización del programa.
- Algunas de las técnicas más utilizadas para este tipo de pruebas son

clases de equivalencia, análisis de valores límites, pruebas de comparación, etc.

Tipos de pruebas

- En los módulos, Pruebas de unidad o unitarias.
- En la unión de los módulos, Pruebas de integración.
- Cuando tenemos todos unidos, Prueba de validación.
- Cuando el sistema está funcionando, Prueba de sistema.

Tipos de pruebas

Pruebas de unidad o unitarias

- Se suelen realizar durante las fases de desarrollo.
- La prueba de unidad centra el proceso de verificación en la menor unidad

del diseño del software: “el módulo”.

- Se pueden paralelizar varias pruebas unitarias.
- Algunas herramientas para realizar estas pruebas son Junit, PHPUnit, etc.

Pruebas de integración

- Se comprobará la interacción de los distintos módulos del programa.
- La integración puede ser
- Súbita: Se comprueban los módulos de forma separada y después se prueba

de forma conjunta. Puede dar lugar a muchos errores difíciles de corregir.

- Incremental: Se va creando e integrando poco a poco. Puede ser de dos

formas

- Ascendente: Se empieza por los módulos más pequeños hasta integrarse con el más

grande.

- Descendente: Desde el más grande, se van integrando los módulos más pequeños.

Pruebas de validación

- La prueba de validación se lleva a cabo para verificar que el programa

funciona de acuerdo a las expectativas y requisitos del cliente.

- Estas pruebas pueden ser de dos formas
- Alfa: realizada por el cliente o usuario en el lugar de desarrollo, de forma

controlada, anotando todas las acciones realizadas por éste.

- Beta: se reparte una versión del programa a los usuarios finales con la

finalidad que las prueben y informen de los errores.

Pruebas de sistema

- Pruebas para ver cuan estable es nuestro programa respecto a su

ejecución en diferentes sistemas.

- Se realizan pruebas de diferentes tipos
- Recuperación: se fuerza fallo de software y se comprueba como se recupera

de éste

- Seguridad: se comprueba que está protegido frente acciones ilegales.
- Resistencia: Se realizan acciones que requieran de una gran cantidad de

recursos.

Prueba del camino básico

- La prueba del camino básico es una técnica de prueba de caja blanca

propuesta inicialmente por Tom McCabe.

- Esta técnica permite al diseñador de casos de prueba obtener una

medida de la complejidad de nuestro sistema.

- Para obtener esta medida de complejidad, utilizaremos la técnica de

representación de grafo de flujo.

Prueba del camino básico

- Notación del grafo de flujo
- Cada círculo denominado nodo del grafo de flujo, representa una o más sentencias procedimentales.
- Un solo nodo puede corresponder a una secuencia de cuadros de proceso y a un rombo de decisión.
- Las flechas del grafo denominadas aristas o enlaces, representan flujo de control. Una arista

debe terminar en un nodo, incluso aunque el nodo no represente ninguna sentencia procedimental.

- Las áreas delimitadas por aristas y nodos de denominan regiones. Cuando contabilizamos las

regiones incluimos el área exterior del grafo, contando como otra región más.

- El nodo que contiene una condición se llama nodo predicado y se caracteriza porque de él

salen dos o más aristas.

Pruebas de caja blanca: Prueba del camino básico

Prueba del camino básico: Complejidad ciclomática (VG)

- Define el número de caminos independientes del conjunto básico de un programa y nos da un límite inferior para el

número de pruebas que se deben realizar para asegurar que se ejecuta cada sentencia al menos una vez.

- Un camino independiente es cualquier camino del programa que introduce por lo menos un nuevo conjunto de

sentencias de procesamiento o una nueva condición. En términos del grafo de flujo, un camino independiente se debe mover por lo menos por una arista que no haya sido recorrida anteriormente a la definición de un camino.

- La complejidad ciclomática V(G) se puede calcular de tres formas
- 1. El número de regiones del grafo de flujo coincide con la complejidad ciclomática.
- 2. Aristas - Nodos + 2, es decir V (G) = A – N + 2.
- 3. Nodos Predicado + 1 (un nodo predicado es el que representa una condicional if o case, es decir, que de él salen

varios caminos).

- Por tanto se deben preparar los casos de prueba que forzarán la ejecución de cada camino del conjunto básico.

Prueba del camino básico

Prueba del camino básico

Prueba del camino básico

- Diseñar el conjunto de casos de prueba mediante el método de la

complejidad ciclomática para el siguiente código

Prueba del camino básico

- 1. Conversión al grafo

Prueba del camino básico

- 2. Cálculo de la complejidad ciclomática
- V(G) = 3 regiones = 3
- V(G) = 7A – 6N + 2 = 3
- V(G) = 2NP + 1 = 3

Prueba del camino básico

- 3. Conjunto de caminos básicos (pruebas básicas)

JUnit

- Junit es una herramienta para realizar pruebas unitarias

automatizadas.

- Está integrada en la gran mayoría de ED (eclipse incluido).

JUnit

- Las pruebas unitarias se realizan sobre una clase para probar su

comportamiento de modo aislado independientemente del resto de clases de la aplicación.

- Ejercicio: Crea una clase llamada Calculadora cuyo constructor reciba

los dos números a utilizar y que tenga 4 métodos, suma(), resta(), multiplica() y divide() que devuelvan el resultado de aplicar la operación sobre los números pasados en el constructor.

JUnit

- Para crear la clase de prueba sobre esta clase, seleccionamos con el

botón derecho la clase a probar (en este caso Calculadora) y pulsamos en New->Junit Test Case y le llamaremos CalculadoraTest.

- Seleccionamos los métodos que queremos probar y y finalizamos.
- La clase de prueba se generará con los métodos dentro. Cada método

tendrá el mismo nombre que el método original precedido de la palabra test.

JUnit

- Además, como cabecera del método aparecerá la palabra @Test que

indica al compilador que es un método de prueba.

- Cada método de prueba tiene una llamada al método fail para forzar

que la prueba falle con el mensaje que no está implementado todavía

JUnit

- Ahora es momento de preparar cada uno de los test.
- Para ello hay que indicar que es lo que esperamos de la ejecución de

una serie de instrucciones (valor esperado del caso de prueba).

- Los métodos que podemos utilizar son los que se encuentran en la

infografía de la siguiente diapositiva

JUnit Método Descripción assertTrue([mensaje], condición booleana) Comprueba que la condición sea verdadera. assertFalse([mensaje], condición booleana) Comprueba que la condición sea falsa. assertEquals([mensaje], valor esperado, valor actual) Comprueba que dos valores sean iguales. Nota: en arrays comprueba su referencia, no el contenido!) assertSame([mensaje], valor esperado, valor actual) Comprueba que ambos parámetros sean el mismo objeto.

assertNotSame([mensaje], valor esperado, valor actual) Comprueba que ambos parámetros no sean el mismo objeto. assertNull([mensaje], objeto) Comprueba que el objeto sea nulo. assertNotNull([mensaje], objeto) Comprueba que el objeto no sea nulo. fail([mensaje]) Hace que el método falle. Debería ser utilizado solo para comprobar que una parte del código de test no se ejecute o para hacer fallar un test no implementado.

JUnit

- Si queremos definir un test unitario para el método suma, deberemos

llamar al método, recoger su resultado y comprobar mediante un “assert” que el valor esperado es correcto.

JUnit

- Podemos ejecutar la clase de prueba o bien mediante la opción “Run

as Junit Test”.

- Se abrirá una pestaña con los resultados de las pruebas.
- Se puede forzar la prueba de los errores mediante fail, por ejemplo,

muy utilizado para testear las excepciones

Debuggeando código

- El debugging de código en Java es el proceso de encontrar y corregir

errores en un programa Java usando una herramienta llamada depurador.

- Un depurador te permite ejecutar tu programa paso a paso, ver el valor de

las variables, establecer puntos de interrupción y evaluar expresiones.

- El debugging te ayuda a entender mejor el flujo de tu programa y a

resolver los problemas que puedan surgir.

Testing vs Debugging

- El testing consiste en verificar y validar que un software o aplicación

funciona correctamente, cumple los requisitos técnicos y satisface las necesidades de los usuarios.

- El debugging consiste en encontrar y corregir los defectos o errores

que se detectan en el testing, con el objetivo de eliminar los problemas y asegurar el buen funcionamiento del software.

Debuggeando código

- Punto de interrupción: Mediante doble click en la parte izquierda de

la línea añadiremos lo que se llama breakpoint o punto de ruptura que sirve para indicarle al debugguer que cuando se ejecute, tiene que detener ahí la ejecución para poder “observar” los diferentes valores

Debuggeando código

- Para lanzar la ejecución del programa en modo debug pulsaremos el

botón a la izquierda del ejecutar con un símbolo de un bicho.

- Tras pulsar en este botón, el programa se ejecutará con normalidad

hasta que encuentre el punto de ruptura o interrupción, donde se parará.

Debuggeando código

Debuggeando código

- Al abrir la perspectiva “Debug” podemos observar los valores de las

variables de nuestro programa en ese momento en el que se ha “pausado” la ejecución del programa.

Debuggeando código

- Estos valores se pueden modificar en tiempo de ejecución para poder

realizar pruebas con los valores que nosotros deseemos sin tener que estar modificando el código

Debuggeando código

- Una vez inspeccionado todo lo que necesitamos en nuestro

breakpoint podemos navegar a la siguiente instrucción en una ejecución paso a paso o bien decirle que siga sin parar otra vez (salgo que tenga otro breakpoint).

- Para ello, utilizaremos los botones de navegación de debug.

Debuggeando código

- También se pueden incluir puntos de ruptura condicionales. Es decir,

la ejecución parará en el punto de interrupción si una condición dada se cumple.

- Para ello, desde la pestaña de breakpoints se seleccionará el

breakpoint al cual queremos incluir la condición y se indica como si fuera parte de un if normal.

Debuggeando código

Debuggeando código

- Por último, se puede añadir una vista más llamada expresiones donde

se puede evaluar (ejecutar) en tiempo de ejecución expresiones como añadir un nuevo valor a un array o pasar a string un objeto.

¿Dudas?

---

## 3.2 EjercicioGrafo2

```java
package U03EstructurasDeControl;

public class Ejercicio02 {

	public static void main(String[] args) {

		int x  = -10;
		char c = 'd';

		if (x<0 && c=='x')       System.out.println("Caso 1");
		else if (x<0 && c!='x')  System.out.println("Caso 2");
		else if (x>=0 && c=='y') System.out.println("Caso 3");
		else if (x>=0 && c!='y') System.out.println("Caso 4");

		if ( x < 0 ) {
			if (c=='x') {
				System.out.println("Caso 1");
			}
			else {
				System.out.println("Caso 2");
			}
		}
		else {
			if (c=='y') {
				System.out.println("Caso 3");
			}
			else {
				System.out.println("Caso 4");
			}
		}
	}

}
```

---

## 3.3 EjercicioGrafo3

```java
package U03EstructurasDeControl;

public class Ejercicio10 {

	public static void main(String[] args) {

		int n = 7;

		//******************************
		System.out.println("Primer bucle: ");
		int i = 3;
		while (i<=n) {
			System.out.println(i);
			i = i+3;
		}
		//******************************
		System.out.println("Segundo bucle: ");
		i = 0;
		while (i<n) {
			i = i+3;
			System.out.println(i);
		}
		//******************************
	}

}
```

---

## 3.4 Códigos debugging

### 📄 Test06Arrays.java

```java
package ud05EstructurasEstaticasDeDatos;

import java.util.Scanner;

public class Test06Arrays {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		final int MAX_ALUMNOS = 20;
		
		int[] notas = new int[20];
		
		// Pedir las notas al usuario y guardalas en el array
		for(int i = 0; i < notas.length; i++) {
			notas[i] = sc.nextInt();
		}
		
		for(int i = 0; i < notas.length; i++) {
			if (notas[i] >= 0 && notas[i] <= 10) {
				if (notas[i] >= 5) {
					System.out.println("Aprovado");
				} else if (notas[i] < 5) {
					System.out.println("Suspendido");
			} else {
					System.out.println("No válido");
			}
		}
	}
		
	}
}
```

### 📄 Rectangulo.java

```java
import java.util.Scanner;

public class Rectangulo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Introduce la longitud del rectángulo:");
        double longitud = sc.nextDouble();
        System.out.println("Introduce la anchura del rectángulo:");
        double anchura = sc.nextDouble();
        double area = calcularArea(longitud, anchura);
        double perimetro = calcularPerimetro(longitud, anchura);
        System.out.println("El área del rectángulo es " + area);
        System.out.println("El perímetro del rectángulo es " + perimetro);
    }

    public static double calcularArea(double longitud, double anchura) {
        double area = longitud / anchura; 
        return area;
    }

    public static double calcularPerimetro(double longitud, double anchura) {
        double perimetro = 2 * (longitud + anchura);
        return perimetro;
    }
}
```

---

## ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — U4 A1**
> Unidad 4 – Testing y debugging
>
> U4 – A1
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - En cada paso, adjunta una captura de pantalla de la terminal donde
>
> se vea la instrucción ejecutada y el resultado obtenido.
>
> - Asegúrate que la imagen se vea correctamente.
> - No copies y pegues. Utiliza tus palabras
>
> 1. ¿Por qué crees importante la realización de las pruebas en los programas? ¿Cuánto tiempo del total (en porcentaje) crees que se debería dedicar a las pruebas? ¿Por qué?
>
> 2. Si pasamos todas las pruebas, ¿implica que nuestro código sea correcto y libre de errores?
>
> 3. Investiga un poco más sobre las pruebas de caja blanca y pruebas de caja negra y escribe con tus palabras cuales son las principales características, similitudes y diferencias entre ambas.
>
> 4. De forma general, ¿qué tipo de pruebas existen? Enlázalas con las diferentes fases de desarrollo de un proyecto.

> **✍️ 📋 Exercici / Qüestionari 3.2 — Actividad propuesta 2**
> Actividad propuesta 2
>
> Analiza el siguiente fragmento en pseudocódigo y, a partir del grafo de flujo debes calcular
>
> - La complejidad ciclomática de McCabe V(G) de las tres formas posible.
>
> ### 2. El conjunto de caminos independientes
>
> ### 3. Obtención de los casos de pueba

> **✍️ 📋 Exercici / Qüestionari 3.3 — Actividad propuesta 2 SOLUCIÓN**
> Actividad propuesta 2: Analiza el siguiente fragmento en pseudocódigo y, a partir del grafo de flujo debes calcular
>
> - La complejidad ciclomática de McCabe V(G) de las tres formas posible.
>
> SOLUCIÓN
>
> ### 1. Calculamos la complejidad ciclomática de las tres formas posibles
>
> - Número de regiones:= 3
>
> - Nodos predicado +1= 3
>
> - Aristas-nodos+2= 8-7+2= 3
>
> ### 2. Conjunto de caminos independientes
>
> Camino 1: 1 - 2 - 3 - 7
>
> Camino 2: 1 - 2 - 4 - 6 - 7
>
> Camino 3: 1 - 2 - 4 - 5 - 7
>
> ### 3. Obtención de los casos de prueba
>
> Camino Caso de prueba Resultado esperado Cantidad >1000 cant= 2000, pvp= 125 Visualizar el importeTotal 225000 Cantidad <=1000 y cantidad <=100 cant= 5, pvp= 125 Visualizar el importeTotal 625 Cantidad <=1000 y cant idad >101 cant= 200, pvp= 125 Visualizar el importeTotal 23750

> **✍️ Activitat Pràctica 3.4 — U4 A2**
> Pruebas de software............................................................................................Ejercicios
>
> Ejercicios de Pruebas de Software
>
> Ejercicio1 : Dado el siguiente programa en java
>
> ```java
> import java.util.Scanner;
> ```
>
> ```java
> public class Maximo {
> ```
>
> ```java
> public static void main(String[] args) {
> ```
>
> ```java
> int a = 0;
> ```
>
> ```java
> int b = 0;
> ```
>
> ```java
> int c = 0;
> ```
>
> ```java
> int max = 0;
> ```
>
> ```java
> Scanner sc = new Scanner(System.in);
> ```
>
> ```java
> System.out.println("Introducir valor de A: ");
> ```
>
> ```java
> a = sc.nextInt();
> ```
>
> ```java
> System.out.println("Introducir valor de B: ");
> ```
>
> ```java
> b = sc.nextInt();
> ```
>
> ```java
> System.out.println("Introducir valor de C: ");
> ```
>
> ```java
> c = sc.nextInt();
> ```
>
> ```java
> if ((a>b) && (a>c)){
> ```
>
> ```java
> max = a;
> ```
>
> }
>
> else{
>
> ```java
> if (c>b){
> ```
>
> ```java
> max = c;
> ```
>
> }
>
> else{
>
> ```java
> max = b;
> ```
>
> }
>
> }
>
> ```java
> System.out.println ("El máximo es: " + max);
> ```
>
> } }
>
> Se pide
>
> - Obtener el grafo de flujo
> - Calcular la complejidad ciclomática de McCabe V(G)
> - Definir conjuntos de caminos básicos y realización de las pruebas mínimas.
>
> Pruebas de software............................................................................................Ejercicios
>
> > **✍️ Ejercicio 2: Dado el siguiente fragmento de programa en java**
> > Ejercicio 2: Dado el siguiente fragmento de programa en java
>
> ```java
> x = 0;
> ```
>
> ```java
> if ((a>1) || (b>5) || (c<2)){
> ```
>
> ```java
> x = x + 1;
> ```
>
> }else{
>
> ```java
> x = x - 1;
> ```
>
> }
>
> ```java
> System.out.println ("El valor de x es: " + x);
> ```
>
> Se pide
>
> - Obtener el grafo de flujo
> - Calcular la complejidad ciclomática de McCabe V(G)
> - Definir conjuntos de caminos básicos y realización de las pruebas mínimas.
>
> Pruebas de software............................................................................................Ejercicios
>
> Ejercicio 3 : Dado el siguiente programa en java
>
> ```java
> public class NumeroPrimo {
> ```
>
> ```java
> public static void main(String[] args) {
> ```
>
> ```java
> int i = 0;
> ```
>
> ```java
> int n = 0;
> ```
>
> ```java
> String op = "s";
> ```
>
> ```java
> boolean primo = true;
> ```
>
> ```java
> Scanner sc = new Scanner(System.in);
> ```
>
> ```java
> while (op.equals("s")){
> ```
>
> ```java
> System.out.println("Introduce un número: ");
> ```
>
> ```java
> n = sc.nextInt();
> ```
>
> ```java
> if (n > 1){
> ```
>
> ```java
> primo = true;
> ```
>
> ```java
> i = 2;
> ```
>
> ```java
> while((i<n) && (primo)){
> ```
>
> ```java
> if (n%i==0){
> ```
>
> ```java
> primo = false;
> ```
>
> }
>
> i++;
>
> }
>
> ```java
> if(primo){
> ```
>
> ```java
> System.out.println("SI PRIMO");
> ```
>
> }
>
> else{
>
> ```java
> System.out.println("NO PRIMO");
> ```
>
> }
>
> ```java
> System.out.println("¿Otro número? (s/n)");
> ```
>
> ```java
> sc.nextLine();
> ```
>
> ```java
> op = sc.nextLine();
> ```
>
> }
>
> else{
>
> ```java
> System.out.println("El número debe ser mayor que 1");
> ```
>
> }
>
> }
>
> ```java
> System.out.println("");
> ```
>
> ```java
> System.out.println("FIN DEL PROGRAMA !!!");
> ```
>
> } }
>
> Se pide
>
> - Obtener el grafo de flujo
> - Calcular la complejidad ciclomática de McCabe V(G)
>
> Pruebas de software............................................................................................Ejercicios
>
> Ejercicio 4 : Dado el siguiente programa en java
>
> ```java
> Scanner sc = new Scanner(System.in);
> System.out.println("Escoja una opción");
> ```
>
> ```java
> int opcion = sc.nextInt();
> ```
>
> ```java
> switch (opcion) {
> ```
>
> case 1
>
> {
>
> ```java
> int multi = 1;
> ```
>
> ```java
> int total = 0;
> ```
>
> ```java
> while (total<100) {
> ```
>
> ```java
> total = 11 * multi;
> ```
>
> ```java
> if (total <= 100) {
> ```
>
> ```java
> System.out.printf("%d %n", total);
> ```
>
> }
>
> multi++;
>
> }
>
> break;
>
> }
>
> case 2
>
> {
>
> ```java
> int cont = 1;
> ```
>
> ```java
> for (int i=2; i<=1000; i++){
> ```
>
> ```java
> if ( esPrimo(i) ){
> ```
>
> ```java
> if (cont<5){
> ```
>
> ```java
> System.out.printf("%5d", i);
> ```
>
> cont++;
>
> }
>
> else{
>
> ```java
> System.out.printf("%5d%n", i);
> ```
>
> ```java
> cont = 1;
> ```
>
> }
>
> }
>
> }
>
> break;
>
> }
>
> case 3
>
> {
>
> ```java
> System.out.println("Este caso parece fácil, pero tiene trampa...");
> ```
>
> }
>
> default
>
> {
>
> ```java
> System.out.println("Opción incorrecta");
> ```
>
> break;
>
> } }
>
> ```java
> System.out.println("FIN del programa.");
> ```
>
> Se pide: Obtener el grafo de flujo y Calcular la complejidad ciclomática de McCabe V(G)
>
> Pruebas de software............................................................................................Ejercicios
>
> NOTA IMPORTANTE: Debido a que las sentencias tipo CASE pueden convertirse en IFs encadenados, hay que tener en cuenta cómo se calcula la complejidad ciclomática contando nodos predicados: Cada valor con el que se compara la variable es equivalente a un nodo predicado ("default" no se cuenta como opción).
>
> Sea el siguiente fragmento de código
>
> ```java
> switch (opcion) {
> ```
>
> case 1:{
>
> break;
>
> }
>
> case 2:{
>
> break;
>
> }
>
> case 3:{
>
> break;
>
> }
>
> default:{
>
> break;
>
> } }
>
> V(G) = Nodos Predicados + 1 = 3 + 1 = 4

> **✍️ 📋 Exercici / Qüestionari 3.5 — Actividad propuesta JUnit 1**
> Actividad propuesta: Un alumno quiere realizar una clase que convierta grados Fahrenheit a Celsius, y viceversa. Conoce la fórmula y quiere implementar dos métodos en la clase fahrenheittocelsius() y celsiustofahrenheit() que conviertan grados de una unidad a otra, y viceversa.
>
> Además, quiere testear que conviertan los métodos correctamente los valores -5, 0, 15 y 32. ¿Puedes ayudarlo a crear la clase y el test con JUnit 5? Para facilitarte la tarea te facilitamos el código de la clase que convierte los grados fahrenheit a celsius y viceversa

> **✍️ 📋 Exercici / Qüestionari 3.6 — Actividad propuesta JUnit 2**
> Actividad propuesta 2: El alumno se ha animado y, dentro del mismo proyecto, quiere realizar una clase que convierta dólares a euros y viceversa (métodos dollar2euro y euro2dollar), también con sus test en JUnit que testeen 10,5 dólares y 20,20 euros. Primero deberás elaborar el código de la clase que convierte los dólares a euros y viceversa, y a continuación el test con JUnit.

> **✍️ 📋 Exercici / Qüestionari 3.7 — Actividad propuesta JUnit 3**
> Última actividad propuesta Realiza un clase que se llame FiguraGeométrica e implementa tres funciones, una que calcule el área del rectángulo, otra que calcule el área del círculo y otra que calcule el área del triángulo. Para facilitarte la tarea te proporcionaremos las cabeceras de las tres funciones
>
> public double areaRectangulo(double base, double altura) public double areaCirculo(double radio) public double areaTriangulo(double base, double altura) A continuación genera la clase Test con JUnit y prueba el método assertEquals.
