---
layout: default
title: "✍️ Activitats pràctiques UT3 — Entorns de Desenvolupament | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT3 — Debugging y testing"
prev_url: "../ut03/ut0304.html"
prev_label: "⬅️ 3.4 Códigos debugging"
next_url: "../ut04/index.html"
next_label: "📘 UT4 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT3

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
