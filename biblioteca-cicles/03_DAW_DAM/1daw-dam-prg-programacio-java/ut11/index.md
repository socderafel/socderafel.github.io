---
layout: default
title: "UT11 — Programación orientada a objetos — Programació en Java (1r DAW / DAM) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT11 Completa"
prev_url: "../ut10/ut1011.html"
prev_label: "⬅️ 10.11 06b - Ejercicios Recursividad"
next_url: "../ut11/ut1101.html"
next_label: "11.1 Programación Orientada a Objetos ➡️"
---

# 📘 UT11 — Programación orientada a objetos (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**11.1 Programación Orientada a Objetos**](#ut1101) (o [obrir en pàgina individual ➡️](./ut1101.md) )
> - [**11.2 EstructuraClase**](#ut1102) (o [obrir en pàgina individual ➡️](./ut1102.md) )
> - [**11.3 Ejercicios (I)**](#ut1103) (o [obrir en pàgina individual ➡️](./ut1103.md) )
> - [**11.4 Cafetera**](#ut1104) (o [obrir en pàgina individual ➡️](./ut1104.md) )
> - [**11.5 TestCafetera**](#ut1105) (o [obrir en pàgina individual ➡️](./ut1105.md) )
> - [**11.6 Fraccion**](#ut1106) (o [obrir en pàgina individual ➡️](./ut1106.md) )
> - [**11.7 TestFraccion**](#ut1107) (o [obrir en pàgina individual ➡️](./ut1107.md) )
> - [**11.8 Main Fraccion (.java)**](#ut1108) (o [obrir en pàgina individual ➡️](./ut1108.md) )
> - [**11.9 Pizza**](#ut1109) (o [obrir en pàgina individual ➡️](./ut1109.md) )
> - [**11.10 TestPizza**](#ut1110) (o [obrir en pàgina individual ➡️](./ut1110.md) )
> - [**11.11 Moneda**](#ut1111) (o [obrir en pàgina individual ➡️](./ut1111.md) )
> - [**11.12 EurocoinMain - 1**](#ut1112) (o [obrir en pàgina individual ➡️](./ut1112.md) )
> - [**11.13 Main Eurocoin - 2 (.java)**](#ut1113) (o [obrir en pàgina individual ➡️](./ut1113.md) )
> - [**11.14 Main Eurocoin - 3 (.java)**](#ut1114) (o [obrir en pàgina individual ➡️](./ut1114.md) )
> - [**11.15 Ejercicios (II)**](#ut1115) (o [obrir en pàgina individual ➡️](./ut1115.md) )
> - [**11.16 Soluciones ejercicios ii**](#ut1116) (o [obrir en pàgina individual ➡️](./ut1116.md) )
> - [**11.17 Ejercicios - AyR**](#ut1117) (o [obrir en pàgina individual ➡️](./ut1117.md) )
> - [**11.18 Circulo**](#ut1118) (o [obrir en pàgina individual ➡️](./ut1118.md) )
> - [**11.19 Cuadrado**](#ut1119) (o [obrir en pàgina individual ➡️](./ut1119.md) )
> - [**11.20 Punto**](#ut1120) (o [obrir en pàgina individual ➡️](./ut1120.md) )
> - [**11.21 Programación orientada a objetos (versión extend**](#ut1121) (o [obrir en pàgina individual ➡️](./ut1121.md) )

---

## 11.1 Programación Orientada a Objetos

> **📌 🏷️ Apunt de la Unitat**
> #### Contenido de la unidad

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

> **📌 🏷️ Apunt de la Unitat**
> #### Ampliación y refuerzo

> **📌 🏷️ Apunt de la Unitat**
> #### Otros recursos

---

Programación

### UD 7: Programación Orientada a Objetos

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

Programación

Programación Orientada a Objetos 1.- Introducción a la POO 2.- Abstracción 3.- Clases y Objetos 4.- Atributos y Métodos 5.- Encapsulamiento 6.- Propiedades 7.- Constructores 8.- Instanciación

1.- Introducción a la POO Programación

1.- Introducción a la POO ¿Qué es la programación orientada a objetos (POO)? ✓ Un “paradigma” de programación ✓ Una forma de pensar acerca de los problemas ✓ Una potente disciplina de diseño ✓ Una moderna técnica de programación Programación

1.- Introducción a la POO Significado de Orientada a Objetos El significado de Orientado a Objetos nace como un conjunto de prácticas que definen un estilo de programación. Los seres humanos perciben el mundo como si estuviera formado por objetos: mesas, sillas, computadoras, coches, cuentas bancarias, etc. Donde consciente o inconscientemente tienden a organizarlos, clasificarlos, relacionarlos entre si, y hasta extraen las características más importantes dependiendo de lo que quieren hacer con ellas.

Programación

Programación Orientada a Objetos La POO es un estilo de programación, donde todos los elementos que forman parte del problema se conciben como objetos, definiendo cuales son sus atributos y comportamiento, como se relacionan entre sí y como están organizadas. Estructura Interna de un Objeto

Atributos: Define el estado del objeto Métodos: Define el comportamiento del objeto Programación

1.- Introducción a la POO

2.- Abstracción Programación

Abstracción Nos da una visión simplificada de una realidad de la que sólo consideramos determinados aspectos esenciales. ¿qué entendemos por ... ?

¿... color de un semáforo?

¿... estado de una cuenta bancaria?

¿... estado de una bombilla? ¿qué necesitamos conocer de un coche para utilizarlo? 2.- Abstracción Programación

La abstracción como técnica de programación La programación es una tarea compleja ... ... mediante la abstracción es posible elaborar software que permita solucionar problemas cada vez más grandes. En el módulo Entornos De Desarrollo (EDD) crearemos Diagramas de Clase 2.- Abstracción Programación

3.- Clases y Objetos Programación

Una clase describe un grupo de objetos que comparten propiedades y métodos comunes. Una clase es una plantilla que define qué forma tienen los objetos de la clase. Una clase se compone de: Información: campos (atributos, propiedades) Comportamiento: métodos (operaciones, funciones) Un objeto es una instancia de una clase.

“Juan Pérez” String Ventana (tiempo de ejecución) Ventana (tiempo de diseño) Juan Pérez Empleado La Moneda Casa Sodimac Empresa Objeto Clase Programación

3.- Clases y Objetos

Las clases y los objetos están en todas partes Vehículo Animal Figura Programación

3.- Clases y Objetos

Lavadora marca modelo capacidad... Programar PonerRopa CerrarPuerta Lavar Programación

3.- Clases y Objetos Clases Generalmente, una clase se puede definir como una descripción abstracta de un grupo de objetos, cada uno de los cuales tiene una serie de atributos, un estado específico y es capaz de realizar una serie de operaciones. ✓ Atributos ✓ Operaciones ✓ Comportamiento

ID:Lavadora marca=“Lapava” capacidad=5 estado=enjuagando Programación

3.- Clases y Objetos Objetos Un objeto, no es más que una instancia de una clase. La instancia de una clase significa definir un objeto dándole valores a sus atributos y comportamiento, y realizando operaciones permitidas por la clase. ✓ Valores de los atributos ✓ Estado ✓ Identidad

class NombreClase { //Atributos [public | private | protected ] tipoDato nombreVariable; //Constructores

```java
[public | private | protected ] constructor(parametros) {
```

//Cuerpo de la función } //Métodos

```java
[public | private | protected ] tipoDevuelto nombreMetodo(parametros) {
```

//Cuerpo de la función } } Programación

3.- Clases y Objetos Definición de clase en Java

class NombreClase { [public | private | protected ] nombreVariable;

```java
[public | private | protected ] tipoDevuelto nombreMetodo_1(parametros) {
```

//Cuerpo de la función; }

```java
[public | private | protected ] function nombreMetodo_2(parametros) {
this.nombre_variable = valor;
this.nombreMetodo_1 (parametros);
}
}
```

Programación

3.- Clases y Objetos La palabra reservada this

class clasePersona {

```java
private int nombre;
```

> **⚠️ NOTA: ver clase Persona en Eclipse } Programación...**
> NOTA: ver clase Persona en Eclipse } Programación

3.- Clases y Objetos Ejemplo

class Circulo { // atributos // constructores // métodos } Programación

3.- Clases y Objetos Definición de una Clase

4.- Atributos y Métodos Programación

Programación

4.- Atributos y métodos Atributos (campos) Los objetos almacenan información en sus campos. Existen dos tipos de campos: de instancia y de clase (static). Campos de instancia Hay una copia de un campo de instancia por cada objeto de la clase El campo de instancia es accesible a través del objeto al que pertenece Campos de clase (static) Hay una única copia de un campo static en el sistema (equivalente a lo que en otros lenguajes es una variable global) El campo static es accesible a través de la clase (sin necesidad de instanciar la clase)

class Circulo { // atributos

```java
double radio = 5;
String color;
static int numeroCirculos = 0;
static final double PI = 3.1416;
```

// métodos // constructores // main( ) } radio y color son variables de instancia, hay una copia de ellas por cada objeto Circulo numeroCirculos y PI son variables static, están sólo una vez en memoria; PI además es constante (final): no puede modificarse Programación

4.- Atributos y métodos Atributos (campos)

Programación

4.- Atributos y métodos Acceso a campos Acceso a variables de instancia: se utiliza la sintaxis "objeto.“

```java
Circulo c1 = new Circulo();
c1.radio = 5;
c1.color = "rojo";
```

// si c1 es null, // se genera una excepción NullPointerException Acceso a variables static: se utiliza la sintaxis "clase.“ Circulo.numeroCirculos++;

```java
System.out.println(Circulo.PI);
```

Programación

4.- Atributos y métodos Métodos Instrucciones que operan sobre los datos de un objeto para obtener resultados. Tienen cero o más parámetros. Pueden retornar un valor o pueden ser declarados void para indicar que no retornan ningún valor. Pueden ser de instancia o de clase (static)

✓ Un método de instancia se invoca sobre un objeto de la clase, al cual tiene acceso mediante la palabra this (y sus variables de instancia son accesibles de manera directa). ✓ Un método de clase (static) no opera sobre un objeto de la clase, y la palabra this no es válida en su interior.

Programación

4.- Atributos y métodos Métodos Sintaxis: [static] <tipo retorno> <nombre método> (<tipo> parámetro1, ...) { // cuerpo del método

```java
return <valor de retorno>;
}
```

> **💡 Apunt Tècnic**
> Ejemplo: (siguiente diapositiva)

class Circulo { // atributos

```java
double radio = 5;
String color;
static int numeroCirculos = 0;
static final double PI = 3.1416;
```

// métodos

```java
double getCircunferencia() {
return getCircunferencia(radio);
}
static double getCircunferencia(double r) {
return 2 * r * PI;
}
```

// constructores // main( ) } Método de instancia, tiene acceso directo a las variables de instancia del objeto sobre el que se invoca Método static, no tiene acceso directo a variables de instancia Programación

4.- Atributos y métodos Métodos

Programación

4.- Atributos y métodos Sobrecarga de Métodos Métodos de una clase pueden tener el mismo nombre pero diferentes parámetros. Cuando se invoca un método, el compilador compara el número y tipo de los parámetros y determina qué método debe invocar. Firma (signature) = nombre del método + lista de parámetros.

> **💡 Apunt Tècnic**
> Ejemplo: class Cuenta {

```java
public void depositar(double monto) {
           this.depositar(monto, "$");
       }
       public void depositar(double monto, String moneda) {
           // procesa el depósito
       }
}
```

Programación

4.- Atributos y métodos Acceso a Métodos Acceso a campos y métodos de instancia: se utiliza la sintaxis "objeto.“

```java
Circulo c1 = new Circulo();
c1.radio = 5;
c1.color = "rojo";
double d = c1.getCircunferencia();
```

// Si c1 es null, // se genera una excepción NullPointerException; Acceso a campos y métodos static: se utiliza la sintaxis "clase.“ Circulo.numeroCirculos++;

```java
int n = Circulo.getNumeroCirculos();
System.out.println(Circulo.PI);
```

5.- Encapsulamiento Programación

Es la propiedad que permite asegurar que los aspectos externos de un objeto se diferencie de sus detalles internos. La clase es el espacio donde se empaquetan atributos y métodos Programación

5.- Encapsulamiento

Programación

5.- Encapsulamiento Modificadores de Acceso Nivel de acceso para miembros de clases (campos, métodos y clases anidadas) Public: miembro es accesible en cualquier lugar en que la clase sea accesible Protected: miembro es accesible por subclases y clases del mismo package Package (default): miembro es accesible por clases del mismo package Private: miembro es accesible sólo al interior de la clase Nivel de acceso para clases e interfaces Public: clase/interfaz es accesible globalmente Package (default): clase/interfaz es accesible por clases del mismo package

class Circulo { // atributos

```java
private double radio = 5;
private String color;
private static int numeroCirculos = 0;
public static final double PI = 3.1416;
```

// métodos // constructores } Recomendación: Los campos siempre deben ser privados (a menos que sean constantes). Programación

5.- Encapsulamiento Modificadores de Acceso

6.- Propiedades Programación

En Java, las propiedades se definen por la existencia de métodos getter y setter: class Circulo {

```java
void setRadio(double radio) { ... }
double getRadio() { ... }
double getCircunferencia() { ... }
}
```

Las propiedades pueden basarse en el uso de campos o no: la clase Circulo puede tener un campo radio, pero probablemente no tenga un campo circunferencia. Las propiedades de una clase pueden ser determinadas en ejecución mediante reflection (lo que es utilizado por frameworks como JSP, JSF, JPA) Propiedad radio (read-write) Propiedad circunferencia (read-only) Programación

6.- Propiedades

7.- Constructores Programación

Programación

7.- Constructores ✓ Un constructor es un método especial invocado para instanciar e inicializar un objeto de una clase. ✓ Invocado con la sentencia new. ✓ Tiene el mismo nombre que la clase. ✓ Puede tener cero o más parámetros. ✓ No tiene tipo de retorno, ni siquiera void.

✓ Un constructor no público restringe el acceso a la creación de objetos. ✓ Si la clase no tiene ningún constructor, el sistema provee un constructor default, sin parámetros. ✓ Si la clase tiene algún constructor, debe usarse alguno de los constructores definidos al instanciar la clase (el sistema no provee un constructor default en este caso).

Programación

7.- Constructores Construcción y Manipulación de Objetos Creación de un objeto

```java
NombreClase objeto = new NombreClase(parametros);
```

Acceso a un atributo de una clase

```java
objeto.nombreAtributo = valor;
```

Acceso a un método o función de una clase

```java
objeto.nombreMetodo(parametros);
```

class Circulo { ... // constructores

```java
public Circulo() {
radio = 1;
}
public Circulo(double r) {
radio = r;
}
void funcion() {
Circulo c = new Circulo(30);
```

... } } Programación

7.- Constructores Ejemplo

Programación

7.- Constructores Invocación entre constructores La palabra this puede ser utilizada en la primera línea de un constructor para invocar a otro constructor class Circulo {

```java
private double radio;
    private static int numeroCirculos = 0;
    Circulo(double radio) {
        this.radio = radio;
        Circulo.numeroCirculos++;
    }
    Circulo() {
        this(10);   // radio default: 10
    }
}
```

Programación

7.- Constructores Destructores (Java Garbaje Collector) Un recolector de basura (del inglés garbage collector) es un mecanismo implícito de gestión de memoria. Cuando un lenguaje dispone de recolección de basura, el programador no tiene que invocar a una subrutina para liberar memoria.

En los lenguajes orientados a objetos: se reserva memoria cada vez que el programador crea un objeto, pero éste no tiene que saber cuánta memoria se reserva ni cómo se hace esto. Cuando se compila el programa, automáticamente se incluye en éste una subrutina correspondiente al recolector de basura. Esta subrutina también es invocada periódicamente sin la intervención del programador.

El recolector de basura es informado de todas las reservas de memoria que se producen en el programa.

Stack Heap c1 Memoria c2 Programación

7.- Constructores Instanciación y Referencias Los objetos se crean con el operador new, y se manejan mediante referencias Los objetos se crean en el área de memoria dinámica conocida como el heap. Una referencia contiene la dirección de un objeto (es similar a los punteros de otros lenguajes).

Una asignación entre objetos es una asignación de referencias.

```java
Circulo c1 = new Circulo();
Circulo c2 = c1;
```

Programación

7.- Constructores Paso de Parámetros En Java el paso de parámetros se realiza "por valor". Argumentos de tipos primitivos: Si un método modifica el valor de un parámetro, este cambio sólo ocurre al interior del método; al retornar el método, se mantiene el valor original Argumentos de tipo referencia (objetos)

Al retornar el método, la referencia pasada como parámetro sigue referenciando al mismo objeto; sin embargo, los campos del objeto podrían haber sido modificados por el método

Programación

Resumen ✓ Una clase es una plantilla a partir de la cual se instancian objetos ✓ Los objetos contienen información (en campos de instancia y static) y comportamiento (en métodos de instancia y static) ✓ Los miembros de instancia se utilizan con la sintaxis "objeto.“ ✓ Los miembros static se utilizan con la sintaxis "clase.“ ✓ Una clase puede tener varios métodos con el mismo nombre (sobrecarga), siempre que tengan diferentes parámetros

Programación

Resumen ✓ Para instanciar una clase (crear un objeto) se utiliza el operador new. ✓ Los constructores son métodos especiales invocados al instanciar una clase. ✓ Los objetos se manejan a través de referencias. ✓ La palabra this representa una referencia al objeto sobre el cual se invoca un método de instancia.

✓ Los modificadores de acceso controlan quién tiene acceso a los miembros de una clase.

Bibliografía Programación

Bibliografía ✓ Aprende JAVA con ejercicios. Edición 2018. Luis José Sánchez. ✓ Empezar a programar usando Java. 2ª edición. Universitat Politècnica de València ✓ https://github.com/statickidz/TemarioDAW ✓ https://es.stackoverflow.com Recolector de basura ✓ https://es.wikipedia.org/wiki/Recolector_de_basura Programación

---

## 11.2 EstructuraClase

```java
public class EstructuraClase {

	//1.- Atributos
	
		//1.a- Atributos de clase (static)
					
		//1.b.- Atributos de instancia
			
	//2.- Constructores
	
		//Primero el constructor por defecto y después con parámetros

	//3.- Propiedades && Getters and Setters

	//4.- Métodos sobreescritos de la clase Object o de la superclase
	
	//5.- Métodos propios
		
		//4.a- Métodos estáticos
	
		//4.b- Métodos de instancia
		
}
```

---

## 11.3 Ejercicios (I)

Programación

- Ejercicios

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS P r o g r a m a c i ó n O r i e n t a d a a O b j e t o s Programación

Ejercicio 1 Conceptos de POO

- ¿Cuáles serían los atributos de la clase PilotoDeFormula1? ¿Se te

ocurren algunas instancias de esta clase?

- ¿Cuáles serían los atributos de la clase Vivienda? ¿Qué subclases se te

ocurren?

- Piensa en la liga de baloncesto, ¿qué 5 clases se te ocurren para

representar 5 elementos distintos que intervengan en la liga?

- Lista los atributos de la clase Alumno ¿Sería nombre uno de los atributos

de la clase? Razona tu respuesta.

- ¿Cuáles serían los atributos de la clase Ventana (de ordenador)? ¿cuáles

serían los métodos? Piensa en las propiedades y en el comportamiento de una ventana de cualquier programa. Programación

Ejercicio 2 Conceptos de POO A continuación tienes una lista en la que están mezcladas varias clases con instancias de esas clases. Para ponerlo un poco más difícil, todos los elementos están escritos en minúscula. Di cuáles son las clases, cuáles las instancias, a qué clase pertenece cada una de estas instancias y cuál es la jerarquía entre las clases

Programación

paula goofy gardfiel perro mineral caballo tom silvestre pirita rocinante milu snoopy gato pluto animal javier bucefalo pegaso persona cuarzo laika pato_lucas ayudante_de_santa_claus

Ejercicio 3 Creación de la clase Cafetera Desarrolla una clase Cafetera con atributos capacidadMaxima (la cantidad máxima de café que puede contener la cafetera) y cantidadActual (la cantidad actual de café que hay en la cafetera). Implementa, al menos, los siguientes métodos

✓ Constructor predeterminado: establece la capacidad máxima en 1000 (ml) y la actual en cero (cafetera vacía). ✓ Constructor con la capacidad máxima de la cafetera; inicializa la cantidad actual de café igual a la capacidad máxima. ✓ Constructor con la capacidad máxima y la cantidad actual. Si la cantidad actual es mayor que la capacidad máxima de la cafetera, la ajustará al máximo.

✓ Getters and Setters. ✓ llenarCafetera(): pues eso, hace que la cantidad actual sea igual a la capacidad. ✓ servirTaza(int): simula la acción de servir una taza con la capacidad indicada. Si la cantidad actual de café “no alcanza” para llenar la taza, se sirve lo que quede.

✓ vaciarCafetera(): pone la cantidad de café actual en cero. ✓ agregarCafe(int): añade a la cafetera la cantidad de café indicada. Realizar un programa para probar todas las funcionalidades de la clase Cafetera. Programación

Ejercicio 4 Crea la clase Fracción Los atributos serán numerador y denominador. Algunos de los métodos pueden ser

Invertir

Simplificar

Multiplicar

Dividir

… Realizar un programa para probar todas las funcionalidades de la clase Fracción. Programación

Ejercicio 5 Crea la clase Pizza con los atributos y métodos necesarios. Sobre cada pizza se necesita saber el tamaño - mediana o familiar - el tipo - margarita, cuatro quesos o funghi - y su estado - pedida o servida. La clase debe almacenar información sobre el número total de pizzas que se han pedido y que se han servido. Siempre que se crea una pizza nueva, su estado es “pedida”.

El siguiente código del programa principal debe dar la salida que se muestra

```java
public class PedidosPizza {
public static void main(String[] args) {
Pizza p1 = new Pizza("margarita", "mediana");
Pizza p2 = new Pizza("funghi", "familiar");
p2.sirve();
Pizza p3 = new Pizza("cuatro quesos", "mediana");
System.out.println(p1);
System.out.println(p2);
System.out.println(p3);
p2.sirve();
System.out.println("pedidas: " + Pizza.getTotalPedidas());
System.out.println("servidas: " + Pizza.getTotalServidas());
}
}
```

pizza margarita mediana, pedida pizza funghi familiar, servida pizza cuatro quesos mediana, pedida esa pizza ya se ha servido pedidas: 3 servidas: 1 Programación

Ejercicio 6 La máquina Eurocoin genera una moneda de curso legal cada vez que se pulsa un botón siguiendo la siguiente pauta: o bien coincide el valor con la moneda anteriormente generada - 1 céntimo, 2 céntimos, 5 céntimos, 10 céntimos, 20 céntimos, 50 céntimos, 1 euro o 2 euros - o bien coincide la posición – cara o cruz.

Simula, mediante un programa, la generación de N monedas aleatorias siguiendo la pauta correcta. Cada moneda generada debe ser una instancia de la clase Moneda y la secuencia se debe ir almacenando en una lista (ArrayList). Puedes descargar 2 posibles clases principales para utilizar la clase Eurocoin y la clase Moneda.

> **💡 Apunt Tècnic**
> Ejemplo

2 céntimos – cara

2 céntimos – cruz

50 céntimos – cruz

1 euro – cruz

1 euro – cara

10 céntimos – cara Programación

---

## 11.4 Cafetera

```java
package ud07POO;

public class Cafetera {

	

	// Atributos de instancia

	private int capacidadMaxima;

	private int cantidadActual;

	

	// Atributos de clase

	private static int numCafeteras;

	

	// Constructor por defecto: establece la capacidad de la cafetera

	// en 1000ml y la cantidad actual a cero (vacía)

	public Cafetera() {

		this(1000,0);

		

		//this.capacidadMaxima = 1000;

		//this.cantidadActual = 0;

		//numCafeteras++;

		

	}

	

	// Constructor con parámetros: establece la capacidad máxima de

	// la cafetera a la indicada y la llena

	public Cafetera(int capacidadMaxima) {

		this(capacidadMaxima,capacidadMaxima);

		//this.capacidadMaxima = capacidadMaxima;

		//this.cantidadActual = capacidadMaxima;

		//numCafeteras++;

	}

	

	// Constructor con parámetros: establece la capacidad máxima y

	// la cantidad actual de la cafetera a las indicadas en los

	// parámetros de entrada.

	// Si la cantidad actual supera a la máxima, la ajustará al máximo

	public Cafetera(int capacidadMaxima, int cantidadActual) {

		System.out.println("CREANDO CAFETERA...");

		this.capacidadMaxima = capacidadMaxima;

		

		if(cantidadActual > capacidadMaxima)

			this.cantidadActual = capacidadMaxima;

		else

			this.cantidadActual = cantidadActual;

		

		numCafeteras++;

	}

	/*

	 *  Getters & Setters

	 */

	

	// Obtenemos la capacidad máxima de la cafetera

	public int getCapacidadMaxima() {

		return capacidadMaxima;

	}

	// No tiene sentido modificar la capacidad máxima de la cafetera

	// una vez ya está creada.

	//public void setCapacidadMaxima(int capacidadMaxima) {

	//	this.capacidadMaxima = capacidadMaxima;

	//}

	// Obtenemos la cantidad actual de la cafetera

	public int getCantidadActual() {

		return cantidadActual;

	}

	// Este setter lo hacemos ya en el método agregarCafe,

	// por tanto ya no interesa tener este setter.

	//public void setCantidadActual(int cantidadActual) {

	//	this.cantidadActual = cantidadActual;

	//}

	

	/*

	 * Métodos de instáncia

	 */

	

	// llenarCafetera(): quiere decir que la cantidad actual de café debe

	// alcanzar la máxima capacidad de la cafetera

	public void llenarCafetera() {

		System.out.println("LLENANDO CAFETERA...");

		this.cantidadActual = this.capacidadMaxima;

	}

	

	// servirTaza(int): servimos el café que contenga la cafetera en una

	// taza. Si la taza puede contener más café del que queda en la cafetera,

	// entonces vaciaremos la cafetera.

	public void servirTaza(int capacidadTaza) {

		System.out.println("SIRVIENDO TAZA DE " + capacidadTaza +"ml...");

		if(capacidadTaza > this.cantidadActual)

			//this.cantidadActual = 0;

			vaciarCafetera(); // ahora usamos este método propio

		else

			this.cantidadActual -= capacidadTaza; // si no, servimos tanto café con la taza pueda contener

		

	}

	

	// vaciarCafetera(): ponemos la cantidad actual a cero

	public void vaciarCafetera() {

		System.out.println("VACIANDO CAFETERA...");

		this.cantidadActual = 0;

	}

	

	// agregarCafe(int): agregamos a la cafetera tanto café como indiquemos.

	// Si la cantidad agregada supera a la capacidad de la cafetera, ajustamos.

	public void agregarCafe(int cantidad) {

		System.out.println("AGREGANDO " + cantidad + "ml DE CAFÉ...");

		// Si la cantidad agregada con la que ya había en la cafetera

		// supera a la capacidad máxima...

		if(this.cantidadActual + cantidad > this.capacidadMaxima) {

			System.out.println("\tADVERTENCIA: LA CANTIDAD SUPERA A LA CAPACIDAD DE LA CAFETERA...");

			System.out.print("\t");

			llenarCafetera();

		}

		else

			this.cantidadActual += cantidad; // Si no, pues agregamos café al que había ya

		

	}

	

	// Métodos estáticos

	

	// Método estático para obtener el número de cafeteras creadas

	// Recuerda que los métodos estáticos sólo pueden acceder atributos

	// estáticos.

	public static int getNumeroCafeteras() {

		return numCafeteras;

	}

	

}
```

---

## 11.5 TestCafetera

```java
package ud07POO;

public class TestCafetera {

	public static void main(String[] args) {

		// Creamos una cafetera estándar

		Cafetera estandar = new Cafetera();

		

		System.out.println("\tCafetera estándar -> " + "Capacidad máxima = " + estandar.getCapacidadMaxima());

		System.out.println("\tCafetera estándar -> " + "Cantidad actual = " + estandar.getCantidadActual());

		estandar.llenarCafetera();

		System.out.println("\tCafetera estándar -> " + "Cantidad actual = " + estandar.getCantidadActual());

		

		estandar.servirTaza(100);

		System.out.println("\tCafetera estándar -> " + "Cantidad actual = " + estandar.getCantidadActual());

		

		estandar.agregarCafe(2000);

		System.out.println("\tCafetera estándar -> " + "Cantidad actual = " + estandar.getCantidadActual());

		

		estandar.vaciarCafetera();

		System.out.println("\tCafetera estándar -> " + "Cantidad actual = " + estandar.getCantidadActual());

		

		// Creamos otra cafetera

		Cafetera nespresso = new Cafetera(2000);

		System.out.println("\tCafetera nespresso -> " + "Capacidad máxima = " + estandar.getCapacidadMaxima());

		System.out.println("\tCafetera nespresso -> " + "Cantidad actual = " + nespresso.getCantidadActual());

		

		// Accedemos al método de clase (static) para obtener el número de cafeteras creadas

		System.out.println("\nNº total de cafeteras creadas: " + Cafetera.getNumeroCafeteras());

		

		

	}

}
```

---

## 11.6 Fraccion

```java
package ud07POO;

public class Fraccion {

	private int numerador;

	private int denominador;

	

	public Fraccion(int numerador, int denominador) {

		this.numerador = numerador;

		this.denominador = denominador;

	}

	

	// INVERTIR

	public Fraccion invertir() {

		return new Fraccion(this.denominador, this.numerador);

	}

	

	// SUMAR

	public Fraccion sumar(Fraccion f) {

		int numerador = this.numerador * f.denominador + this.denominador * f.numerador;

		int denominador = this.denominador * f.denominador;

		

		return new Fraccion(numerador, denominador);

	}

	

	// RESTAR

	public Fraccion restar(Fraccion f) {

		int numerador = this.numerador * f.denominador - this.denominador * f.numerador;

		int denominador = this.denominador * f.denominador;

		

		return new Fraccion(numerador, denominador);

	}

	

	// MULTIPLICAR

	public Fraccion multiplicar(Fraccion f) {

		int numerador = this.numerador * f.numerador;

		int denominador = this.denominador * f.denominador;

		

		return new Fraccion(numerador, denominador);

	}

	

	// DIVIDIR

	public Fraccion dividir(Fraccion f) {

		Fraccion invertida = f.invertir();

		

		return this.multiplicar(invertida);

	}

	

	// SIMPLIFICAR

	public void simplificar() {

		int mcd = mcd(this.numerador, this.denominador);

		

		this.numerador = this.numerador/mcd;

		this.denominador = this.denominador/mcd;

	}

	

	private int mcd(int a, int b) {

		

		if (b == 0)

			return a;

		else

			return mcd(b, a%b);

	}

	public int getNumerador() {

		return numerador;

	}

	public void setNumerador(int numerador) {

		this.numerador = numerador;

	}

	public int getDenominador() {

		return denominador;

	}

	public void setDenominador(int denominador) {

		this.denominador = denominador;

	}

	

	

}
```

---

## 11.7 TestFraccion

```java
package ud07POO;

public class TestFraccion {

	public static void main(String[] args) {

		

		// Instancio un objeto fracción: 6/4

		Fraccion f1 = new Fraccion(6,4);

			

		// Instancio un objeto fracción: 6/4

		Fraccion f2 = new Fraccion(8,6);

		

		// Muestro la fracción f1

		System.out.println(f1.getNumerador() + "/" + f1.getDenominador());

		

		// Muestro la fracción f2

		System.out.println(f2.getNumerador() + "/" + f2.getDenominador());	

		

		/*

		 * Operaciones

		 */

		

		// SUMAR:

		// Sumo a la fracción f1 la fracción f2 y guardo el resultado en otra fracción f3

		Fraccion f3 = f1.sumar(f2);

		

		// Muestro f3 habiando sobrescrito toString

		System.out.println(f3);

		

		// RESTAR:

		f3 = f1.restar(f2);

		System.out.println(f3);

		

		// MULTIPLICAR:

		f3 = f1.multiplicar(f2);

		System.out.println(f3);

		// DIVIDIR: Puedo hacer la operación y mostrarla directamente

		// ya que el método dividir devuelve un objeto fracción

		System.out.println(f1.dividir(f2));

		

		// SIMPLIFICAR: Simplifico la fracción f1. No devuelve otra fracción

		// resultado de la simplificado, sino que se modifica f1 (simplificada)

		f1.simplificar();

		System.out.println(f1);

	}

}
```

---

## 11.8 Main Fraccion (.java)

```java
package ud8_fraccion;

public class Principal {

	//public Fraccion() {
	//public Fraccion(int numerador) {	
	//public Fraccion(int numerador, int denominador) {

	//public Fraccion invertir() {
	//public Fraccion simplificar() {

	//public Fraccion sumar( int n ) {		
	//public Fraccion sumar( Fraccion f ){
	//public Fraccion restar( int n ) {		
	//public Fraccion restar( Fraccion f ){
	//public Fraccion dividir( int n ) {
	//public Fraccion dividir( Fraccion f ){
	//public Fraccion multiplicar( int n ) {
	//public Fraccion multiplicar( Fraccion f ){

	//public static Fraccion multiplicar( Fraccion f1, Fraccion f2 ){

	//@Override
	//public String toString(){
	//public boolean equals(Object obj) {		
	
	//private int mcd(int num1, int num2) {
	//private int mcm(int num1, int num2) {

	public static void main(String[] args) {
		
		Fraccion f13 = new Fraccion(18, 27);
		Fraccion f14 = new Fraccion(2, 3);
		
		if (f14.equals(f13)) {
			System.out.println("son iguales");
		}
		else {
			System.out.println("no son iguales");
		}
				
		Fraccion f1 = new Fraccion();
		Fraccion f2 = new Fraccion(3);
		Fraccion f3 = new Fraccion(18, 27);	
		
		System.out.println( "f1:              " + f1 );
		System.out.println( "f2:              " + f2 );
		System.out.println( "f3:              " + f3 );
		System.out.println( "" );
		
		System.out.println( "1 / f3:          " + f3.invertir() );
		System.out.println( "f3 simplificada: " + f3.simplificar() );
		
		System.out.println( "" );
		System.out.println( "f3 + 2:          " + f3.sumar(2) );
		System.out.println( "f1 + (1 / f2):   " + f1.sumar(f2.invertir()) );
		System.out.println( "" );
		System.out.println( "f3 - 3:          " + f3.restar(3) );
		System.out.println( "f1 - (1 / f2):   " + f1.restar(f2.invertir()) );
		System.out.println( "" );
		System.out.println( "f3 * 5:          " + f3.multiplicar(5) );
		System.out.println( "f1 * (1 / f2):   " + f1.multiplicar(f2.invertir()) );
		System.out.println( "" );
		System.out.println( "f3 / 7:          " + f3.dividir(7) );
		System.out.println( "f1 / (1 / f2):   " + f1.dividir(f2.invertir()) );
		System.out.println( "" );
		System.out.println( "f1 * f2:         " + Fraccion.multiplicar(f1, f2) );

	}

}
```

---

## 11.9 Pizza

```java
package Ejercicio5;

public class Pizza {
	// Atributos de instancia
	private String nombre;
	private String tamanyo;
	private boolean servida;
	
	// Atributos de clase
	private static int totalPedidas = 0;
	private static int totalServidas = 0;
	
	// Constructores
	public Pizza(String nombre, String tamanyo) {
		this.nombre = nombre;
		this.tamanyo = tamanyo;
		this.servida = false;
		totalPedidas++;
	}
	
	// Métodos
	
	/*
	 * Este método sirve una pizza
	 */
	public void sirve() {
		if(servida)
			System.out.println("Esa pizza ya se ha servido.");
		else {
			totalServidas++;
			servida = true;
		}	
	}
	
	// Getters & Setters
	public static int getTotalPedidas() {
		return totalPedidas;
	}
	
	public static int getTotalServidas() {
		return totalServidas;
	}
	
	@Override
	public String toString() {
		String resultado = "pedida";
		
		if (servida) 
			resultado = "servida";
		
		return "pizza " + this.nombre + " " + this.tamanyo + ", " + resultado;
	}
}
```

---

## 11.10 TestPizza

```java
package Ejercicio5;

public class TestPizza {

	public static void main(String[] args) {
		Pizza p1 = new Pizza("margarita","mediana");
		Pizza p2 = new Pizza("funghi","familiar");
		
		p2.sirve();
		
		Pizza p3 = new Pizza("cuatro quesos","mediana");
		
		System.out.println(p1);
		System.out.println(p2);
		System.out.println(p3);
		
		p2.sirve();
		
		System.out.println("Pedidas: " + Pizza.getTotalPedidas());
		System.out.println("Servidas: " + Pizza.getTotalServidas());

	}

}
```

---

## 11.11 Moneda

```java
package ud07POO;

import java.util.Random;

public class Moneda {

	  private static String cantidades[] = {"1 céntimo", "2 céntimos", "5 céntimos", "10 céntimos", "25 céntimos", "50 céntimos", "1 euro", "2 euros"};

	  private static String posiciones[] = {"cara", "cruz"};

	  private String cantidad;

	  private String posicion;

	  public Moneda() {

		Random r = new Random();

	    this.cantidad = cantidades[r.nextInt(cantidades.length)];

	    this.posicion = posiciones[r.nextInt(2)];

	  }

	  public String getPosicion() {

	    return this.posicion;

	  }

	  

	  public String getCantidad() {

	    return this.cantidad;

	  }

	  @Override

	  public String toString() {

	    return this.cantidad + " - " + this.posicion;

	  }

}
```

---

## 11.12 EurocoinMain - 1

```java
import java.util.ArrayList;

public class EurocoinMain {

  public static void main(String[] args) {

    ArrayList<Moneda> m = new ArrayList<Moneda>();

    

    Moneda monedaAux = new Moneda();

    m.add(monedaAux);

    

    String ultimaPosicion = monedaAux.getPosicion();

    String ultimaCantidad = monedaAux.getCantidad();

    

    for (int i = 0; i < 5; i++) {

      do {

        monedaAux = new Moneda();

      } while (!((monedaAux.getPosicion()).equals(ultimaPosicion)) && !((monedaAux.getCantidad()).equals(ultimaCantidad)));

      

      m.add(monedaAux);

      ultimaPosicion = monedaAux.getPosicion();

      ultimaCantidad = monedaAux.getCantidad();

    }

    

    for (Moneda mo : m) {

      System.out.println(mo);

    }

  }

}
```

---

## 11.13 Main Eurocoin - 2 (.java)

```java
package ud8_monedas;

import java.util.ArrayList;

public class Principal_1 {

	public static void main(String[] args) {

		// Crear maquina Eurocoin
		Eurocoin e = new Eurocoin();

		// Generar lista monedas
		ArrayList<Moneda> listaMonedas = e.generarListaMonedas(25);

		// Imprimir
		for (Moneda m : listaMonedas) {
			System.out.println(m);
		}
		
		// Calcular e Imprimir importe total de la maquina Eurocoin
		int ctmos = e.calcularImporte();		
		int euros = ctmos / 100;
		
		System.out.println();
		System.out.println( euros + " euros y " + (ctmos%100) + " ctmos.");
	}
}
```

---

## 11.14 Main Eurocoin - 3 (.java)

```java
package ud8_monedas;

import java.util.Scanner;

public class Principal_2 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.println("Pulsa [INTRO] para generar otra moneda.");
		System.out.println("Pulsa [ANYKEY + INTRO] para finalizar!\n");

		// Crear maquina Eurocoin
		Eurocoin e = new Eurocoin();

		do {
			// Generar siguiente moneda
			Moneda m = e.siguienteMoneda();

			// Imprimir moneda
			System.out.println(m);

		} while (sc.nextLine().equals(""));

		System.out.println("Hasta pronto!");
		
		sc.close();
	}
}
```

---

## 11.15 Ejercicios (II)

### UNIDAD 7: PROGRAMACIÓN ORIENTADA A OBJETOS

V19.01.23

### 1. Ejercicios

Los ejercicios están divididos en dos apartados: conceptuales y prácticos.

#### 1.1. EJERCICIOS CONCEPTUALES

Nota En los ejercicios de esta introducción deberás pensar cuál la mejor respuesta según tu razonamiento basándote en los conceptos de Programación Orientada a Objetos (POO). Las soluciones se pueden discutir en el foro del módulo. Ejercicio 1. Conceptos básicos

- ¿Cuáles serían los atributos de la clase PilotoDeFormula1? ¿Se te ocurren algunas instancias de esta

clase?

- ¿Cuáles serían los atributos de la clase Vivienda? ¿Qué subclases se te ocurren?
- Piensa en la liga de baloncesto, ¿qué 5 clases se te ocurren para representar 5 elementos distintos

que intervengan en la liga?

- Lista los atributos de la clase Alumno ¿Sería nombre uno de los atributos de la clase? Razona tu

respuesta.

- ¿Cuáles serían los atributos de la clase Ventana (de ordenador)? ¿cuáles serían los métodos? Piensa

en las propiedades y en el comportamiento de una ventana de cualquier programa. Ejercicio 2. Conceptos básicos A continuación, tienes una lista en la que están mezcladas varias clases con instancias de esas clases. Para ponerlo un poco más difícil, todos los elementos están escritos en minúscula.

Di cuáles son las clases, cuáles las instancias, a qué clase pertenece cada una de estas instancias y cuál es la jerarquía entre las clases: paula goofy gardfiel perro mineral caballo tom silvestre pirita rocinante milu snoopy gato pluto animal javier bucefalo pegaso persona cuarzo laika pato_lucas ayudante_de_santa_claus

### UNIDAD 6: ESTRUCTURAS DE DATOS DINÁMICAS

v1.07.01.23

#### 1.2. EJERCICIOS PRÁCTICOS

Estos ejercicios están pensados para empezar creando clases muy sencillas (apartado A) que luego irás mejorando y ampliando (apartados B, C…) de modo que practiques y aprendas poco a poco los aspectos fundamentales de la POO. Lo importante es que entiendas qué está pasando. Si no lo tienes claro “juega” con el código, haz pruebas “a ver qué sucede si...”, revisa la teoría, etc. Si aun así no lo entiendes, pregunta en el foro (copia-pega el código si procede).

En cada ejercicio debes crear un programa con dos clases: una clase principal (puedes llamarla por ejemplo UD7ProgramaPunto, según el ejercicio) que solo contendrá la función main, además de otra clase (con sus atributos y métodos) que utilizarás desde el main de la clase principal para hacer pruebas sobre su funcionamiento.

En este apartado las clases solo contendrán atributos (variables) y haremos algunas pruebas sencillas con ellas para entender cómo se instancia objetos y se accede a sus atributos. Por ahora no utilices ningún modificador en los atributos (public, private, static, final...).

Apartado A: Clases simples con atributos Nota En este apartado las clases solo contendrán atributos (variables) y haremos algunas pruebas sencillas con ellas para entender cómo se instancia objetos y se accede a sus atirbutos. Por ahora no utilices ningún modificador en los atributos (public, private, static, final...).

Ejercicio A1. Punto Crea un programa con una clase llamada Punto que representará un punto de dos dimensiones en un plano. Solo contendrá dos atributos enteros llamadas x e y (coordenadas). En el main de la clase principal instancia 3 objetos Punto con las coordenadas (5,0), (10,10) y (-3, 7). Muestra por pantalla sus coordenadas (utiliza un println para cada punto). Modifica todas las coordenadas (prueba distintos operadores como = + - += *=...) y vuelve a imprimirlas por pantalla.

Ejercicio A2. Persona Crea un programa con una clase llamada Persona que representará los datos principales de una persona: dni, nombre, apellidos y edad. En el main de la clase principal instancia dos objetos de la clase Persona. Luego, pide por teclado los datos de ambas personas (guárdalos en los objetos). Por último, imprime dos mensajes por pantalla (uno por objeto) con un mensaje del estilo “Azucena Luján García con DNI … es / no es mayor de edad”.

V19.01.23 Ejercicio A3. Rectángulo Crea un programa con una clase llamada Rectangulo que representará un rectángulo mediante dos coordenadas (x1,y1) y (x2,y2) en un plano, por lo que la clase deberá tener cuatro atributos enteros: x1, y1, x2, y2. En el main de la clase principal instancia 2 objetos Rectangulo en (0,0)(5,5) y (7,9)(2,3). Muestra por pantalla sus coordenadas, perímetros (suma de lados) y áreas (ancho x alto). Modifica todas las coordenadas como consideres y vuelve a imprimir coordenadas, perímetros y áreas.

Ejercicio A4. Artículo Crea un programa con una clase llamada Articulo con los siguientes atributos: nombre, precio (sin IVA), iva (siempre será 21) y cuantosQuedan (representa cuantos quedan en el almacén). En el main de la clase principal instancia un objeto de la clase artículo. Asígnales valores a todos sus atributos (los que quieras) y muestra por pantalla un mensaje del estilo “Pijama - Precio:10€ - IVA:21% - PVP:12,1€” (el PVP es el precio de venta al público, es decir, el precio con IVA). Luego, cambia el precio y vuelve a imprimir el mensaje.

Apartado B: Constructores Nota El constructor es el método que se ejecuta cuando se instancia un objeto. Si no está definido Java ejecutará un constructor por defecto que creará el objeto e inicializará todas sus variables a cero, pero esta no es una buena práctica. Es mejor definir nosotros un constructor que controle qué debe suceder cuando se cree el objeto.

En este apartado tienes que modificar los programas del apartado anterior (o haz una copia del proyecto si lo prefieres) y realizar los cambios indicados.

Ejercicio B1. Punto Añade a la clase Punto un constructor con parámetros que copie las coordenadas pasadas como argumento a los atributos del objeto. Así: public Punto(int x, int

```java
y){
```

```java
this.x = x;
```

```java
this.y = y;
}
```

Copiamos los valores pasados como argumento a los atributos del objeto. Ten en cuenta que int x e int y son variables locales del método, NO son los atributos del objeto. Para hacer referencia a los atributos del objeto hay que utilizar this. Fíjate que ya no será posible hacer Punto p = new Punto(). Ahora será obligatorio hacer por ejemplo Punto p = new Punto(2, 7). En el apartado A tenías que recordar asignar valores a x e y tras crear un punto, lo cual no

v1.07.01.23 es una buena idea en proyectos grandes con cientos de objetos (es muy fácil equivocarse). Ahora es imposible equivocarse porque Java no te dejará. Hemos asegurado que todos los puntos siempre tendrán coordenadas. Corrige el main y utiliza el constructor con parámetros para instanciar los objetos, pasándole como argumento los valores deseados.

Ejercicio B2. Persona Añade a Persona el constructor de abajo y corrige el main para utilizarlo

```java
public Persona(String dni, String nombre, String apellidos, int edad) {
```

```java
this.dni = dni;
```

```java
this.nombre = nombre;
```

```java
this.apellidos = apellidos;
```

```java
this.edad = edad;
```

} Ten en cuenta que no es obligatorio que los parámetros del constructor se llamen igual que los atributos del objeto (en tal caso no sería necesario utilizar this). Podríamos hacerlo así

```java
public Persona(String id, String nom, String ap, int e) {
```

```java
dni = id;
```

```java
nombre = nom;
```

```java
apellidos = ap;
```

```java
edad = e;
```

} Tampoco es obligatorio pasar al constructor todos los atributos de la clase. Podríamos decidir por ejemplo que en nuestro software todas las personas deben tener nombre, apellidos y edad, pero no es obligatorio el DNI (recién nacidos y niños). Este constructor también sería válido

```java
public Persona(String nom, String ap, int e) {
```

```java
nombre = nom;
```

```java
apellidos = ap;
```

```java
edad = e;
```

} Una clase puede tener tantos constructores como quieras siempre y cuando tengan distinto número y/o tipo de parámetros (para que no haya ambigüedad en cual utilizar). Ejercicio B3. Rectángulo En nuestro software necesitamos asegurarnos de que la coordenada (x1,y1) represente la esquina inferior izquierda y la (x2,y2) la superior derecha del rectángulo, como en el dibujo.

Añade a Rectangulo un constructor con los 4 parámetros. Incluye un if que compruebe los valores (*). Si son válidos guardará los parámetros en el objeto.

V19.01.23 Si no lo son mostrará un mensaje del estilo “ERROR al instanciar Rectangulo...” utilizando System.err.println(…). No podremos evitar que se instancie el objeto pero al menos avisaremos por pantalla. Corrige el main para utilizar dicho constructor. Debería mostrar un mensaje de error.

(*) Pista: Es suficiente con un if ( (condición) && (condición) ) Ejercicio B4. Artículo Añade un constructor con 4 parámetros que asigne valores a nombre, precio, iva y cuantosQuedan. Dicho constructor deberá mostrar un mensaje de error si alguno de los valores nombre, precio, iva o cuantosQuedan no son válidos. ¿Qué condiciones crees que podrían determinar si son válidos o no? Razónalo e implementa el código.

Corrige el main y prueba a crear varios artículos. Introduce algunos con valores incorrectos para comprobar si avisa del error. Apartado C: Getters y Setters Un pilar fundamental de la programación orientada a objetos (POO) es el encapsulamiento: “Se denomina encapsulamiento al ocultamiento del estado, es decir, de los datos miembro de un objeto de manera que solo se pueda cambiar mediante las operaciones definidas para ese objeto.

Cada objeto está aislado del exterior. El aislamiento protege a los datos asociados a un objeto contra su modificación por quien no tenga derecho a acceder a ellos, eliminando efectos secundarios e interacciones. De esta forma el usuario de la clase puede obviar la implementación de los métodos y propiedades para concentrarse solo en cómo usarlos.

Por otro lado se evita que el usuario pueda cambiar su estado de maneras imprevistas e incontroladas.” Fuente: Wikipedia Por ello, una práctica muy habitual en POO consiste en ocultar todos los atributos (hacerlos private) para que no se puedan modificar directamente desde fuera de la clase. En su lugar añadiremos métodos getters (get = coger) y setters (set = fijar) visibles (public) que permitan leer y modificar dichos atributos desde fuera de la clase. La clave está en que al tratarse de métodos podremos incluir el código necesario para controlar el acceso a los atributos y protegerlas de usos incorrectos.

En este apartado tienes que modificar los programas del apartado anterior (o haz una copia del proyecto si lo prefieres) y realizar los cambios indicados.

v1.07.01.23 Ejercicio C1. Punto Modifica los atributos de Punto para que sean private. Fíjate que desde el main ya no te dejará utilizar ni modificar los atributos x e y de los objetos. Vamos a añadir los getters: int getX() e int getY() que devolverán los valores de x e y respectivamente. Es una forma indirecta de leer sus valores.

Añadiremos también los setters: void setX(int x) y void setY(int y) que copiarán el valor pasado como parámetro a los atributos de la clase. Tanto getters como setters deben ser public. Corrige el main para utilizar los getters y setters. Prueba a instanciar varios objetos, mostrar sus valores por pantalla, modificarlos, etc.

Ejercicio C2. Persona Aplica el encapsulamiento básico a la clase Persona: Declara todos sus atributos como private y crea todos los getters y setters necesarios (un get y un set por atributo). Corrige el main para utilizar los getters y setters. Prueba a instanciar varios objetos, mostrar sus valores por pantalla, modificarlos, etc.

Ejercicio C3. Rectángulo Aplica el encapsulamiento básico a la clase Rectángulo: Declara todos sus atributos como private y crea todos los getters y setters necesarios (un get y un set por atributo). ¿Recuerdas la condición explicada en B3? Tendrás que programar los setters de modo que comprueben el valor pasado como argumento antes de guardarlo en el objeto. Si no fuera correcto se mostrará un mensaje de error (y NO se guardará el valor).

Corrige el main para utilizar los getters y setters. Prueba a instanciar varios objetos, mostrar sus valores, modificarlos, etc. Prueba varios valores erróneos para comprobar si funciona.

V19.01.23 Ejercicio C4. Artículo Aplica el encapsulamiento básico a la clase Articulo: Declara todos sus atributos como private y crea todos los getters y setters necesarios (un get y un set por atributo). Programa los setters para que comprueben los valores y los guarden en el objeto solo si son correctos. En caso contrario muestra un mensaje de error.

Apartado D: Añadiendo métodos útiles Nota Una clase bien diseñada debería incluir métodos que realicen operaciones con la información de los objetos. De ese modo la clase dispondrá de funcionalidades útiles tanto para nosotros como para otros programadores. Esto es una práctica habitual y muy recomendable.

Por ejemplo, la clase Scanner tiene métodos como getInt(), getDouble, getLine(), etc. que alguien ha programado y podremos utilizar cuando los necesitemos sin tener que programarlo nosotros ni preocuparnos por cómo funcionan internamente. Lo mismo sucede con la clase String (charAt, substring, toCharArray, etc.), la clase Math (random, min, max, abs, etc.), la clase Arrays, etc.

Todas estas son clases que Java incorpora por defecto (hay miles). Existen muchas otras que permiten hacer todo tipo de cosas como crear interfaces gráficas con botones, trabajar con imágenes, leer y escribir en archivos, reproducir música, enviar o recibir datos a través de la red, etc.

En esta unidad estamos aprendiendo a diseñar y programar nuestras propias clases, los fundamentos de la Programación Orientada a Objetos, necesario en cualquier proyecto software de cierta envergadura. Recuerda que los métodos pueden ser private (solo pueden utilizarse desde dentro de la clase) o public (pueden utilizarse desde fuera, forman parte de la interfaz de la clase).

En este apartado tienes que modificar los programas del apartado anterior (o haz una copia del proyecto si lo prefieres) y añade los métodos que se indican.

Ejercicio D1 – Punto Añade a la clase Punto los siguientes métodos públicos: •

```java
public void imprime() // Imprime por pantalla las coordenadas. Ejemplo: “(7, -5)”
```

•

```java
public void setXY(int x, int y) // Modifica ambas coordenadas. Es como un setter doble.
```

•

```java
public void desplaza(int dx, int dy) // Desplaza el punto la cantidad (dx,dy) indicada. Ejemplo: Si el
```

punto (1,1) se desplaza (2,5) entonces estará en (3,6).

v1.07.01.23 •

```java
public int distancia(Punto p) // Calcula y devuelve la distancia entre el propio objeto (this) y otro objeto
```

(Punto p) que se pasa como parámetro: distancia entre dos coordenadas. Prueba a utilizar estos métodos desde el main para comprobar su funcionamiento. Ejercicio D2. Persona Añade a la clase Persona los siguientes métodos públicos: •

```java
public void imprime() // Imprime la información del objeto: “DNI:… Nombre:… etc.”
```

•

```java
public boolean esMayorEdad() // Devuelve true si es mayor de edad (false si no).
```

•

```java
public boolean esJubilado() // Devuelve true si tiene 65 años o más (false si no).
```

•

```java
public int diferenciaEdad(Persona p) // Devuelve la diferencia de edad entre ‘this’ y p.
```

Prueba a utilizar estos métodos desde el main para comprobar su funcionamiento. Ejercicio D3. Rectángulo Añade a la clase Rectangulo métodos públicos con las siguientes funcionalidades: • Método para imprimir la información del rectángulo por pantalla. • Métodos setters dobles y cuadruples: setX1Y1, set X2Y2 y setAll(…).

• Métodos getPerimetro y getArea que calculen y devuelvan el paerímetro y área del objeto. Prueba a utilizar estos métodos desde el main para comprobar su funcionamiento. Ejercicio D4. Artículo Añade a la clase Artículo métodos públicos con las siguientes funcionalidades

• Método para imprimir la información del artículo por pantalla. • Método getPVP que devuelva el precio de venta al público (PVP) con iva incluido. • Método getPVPDescuento que devuelva el PVP con un descuento pasado como argumento. • Método vender que actualiza los atributos del objeto tras vender una cantidad ‘x’ (si es posible).

Devolverá true si ha sido posible (false en caso contrario). • Método almacenar que actualiza los atributos del objeto tras almacenar una cantidad ‘x’ (si es posible). Devolverá true si ha sido posible (false en caso contrario).

V19.01.23 Apartado E: Añadiendo métodos útiles Los modificadores static y final son opcionales, pueden utilizarse tanto en atributos como en métodos y pueden combinarse ambos: static: El atributo o método pertenece a la clase (no al objeto). Por ello puede utilizarse sin instanciar ningún objeto, desde el nombre de la clase: NombreClase.atributo o NombreClase.metodo(...). Como el valor se almacena en la clase NO toma valores distintos en cada objeto (como sí sucede con los atirbutos ‘normales’ no static). Por ejemplo

- El atributo salarioMinimo de Empleado (ss común para todos, puede cambiar).

- Métodos útiles como Arrays.fill(…) o String.valueOf(…) que podemos utilizar directamente

desde las clases Arrays y String sin instanciar un objeto. Es importante saber que desde un método static no se pueden utilizar atributos ni métodos no static. Al contrario, sí es posible. final: Un atributo final no se puede modificar. Puede tener valores distintos en cada objeto, pero debe fijarse su valor en el constructor. Un método final no se puede redefinir en una sub-clase heredada (veremos herencia en la siguiente unidad). Por ejemplo

- El DNI de la clase Persona. No puede cambiar y cada objeto tiene el suyo.

La combinación de static y final combina ambas características. Por ejemplo

- El atributo Math.PI es static y final. Pertenece a la clase y no puede cambiar.

Ejercicio E1. Punto Necesitamos un método que nos permita crear un objeto Punto con coordenadas aleatorias. Esta funcionalidad no depende de ningún objeto concreto por lo que será estática. Deberá crear un nuevo Punto (utiliza el constructor) con x e y entre -100 y 100, y luego devolverlo (con return).

•

```java
public static Punto creaPuntoAleatorio()
```

Pruébalo en el main para comprobar que funciona. Crea varios puntos aleatorios con Punto.creaPuntoAleatorio() e imprime su valor por pantalla. Ejercicio E2. Persona El DNI de una persona no puede variar. Añade el modificador final al atributo dni y asegúrate de que se guarde su valor en el constructor. Quita el método setDNI(…) que de todos modos ya no se podrá utilizar porque Java no te dejará modificar el atributo dni.

v1.07.01.23 La mayoría de edad a los 18 años es un valor común a todas las personas y no puede variar. Crea un nuevo atributo llamado mayoriaEdad que sea static y final. Tendrás que inicializarlo a 18 en la declaración. Utilízalo en el método que comprueba si una persona es mayor de edad.

Crea un método static boolean validarDNI(String dni) que devuelva true si dni es válido (tiene 8 números y una letra). Si no, devolverá false. Utilízalo en el constructor para comprobar el dni (si no es válido, muestra un mensaje de error y no guardes los valores).

Realiza algunas pruebas en el main para comprobar el funcionamiento de los cambios realizados. También puedes utilizar Persona.validarDNI(…) por ejemplo para comprobar si unos DNI introducidos por teclado son válidos o no (sin necesidad de crear ningún objeto). Ejercicio E3. Rectángulo Necesitamos hacer algunos cambios para que todas las coordenadas estén entre (0,0) y (100,100). Añade a la clase Rectángulo dos atributos llamados min y max. Estos valores son comunes a todos los objetos y no pueden variar. Piensa qué modificados necesitas añadir a min y max.

Utiliza min y max en el constructor y en los setters para comprobar los valores (como de costumbre, si no son correctos muestra un mensaje de error y apliques los cambios). También necesitamos un método no constructor para crear rectángulos aleatorios. Impleméntalo.

Realiza pruebas en el main para comprobar su funcionamiento. Ejercicio E4. Artículo En España existen tres tipos de IVA según el tipo de producto: • El IVA general (21%): para la mayoría de los productos a la venta. • El IVA reducido (10%): hostelería, transporte, vivienda, etc.

• El IVA super reducido (4%): alimentos básicos, libros, medicamentos, etc. Estos tres tipos de IVA no pueden variar y a cada artículo se le aplicará uno de los tres. Razona qué cambios sería necesario realizar a la clase Articulo e impleméntalos.

V19.01.23

### 2. Bibliografía

Ejercicio Conceptuales: Apuntes de José Chamorro del CFGS DAW del . Ejercicios prácticos: Unidad 8 Programación Orientada a Objetos I Ejercicios (CEEDCV) de Lionel Tarazón

---

## 11.16 Soluciones ejercicios ii

#### 📦 Punto.java

```java
public class Punto {
    
    int x, y;
    
}
```

---

#### 📦 UD8_A1_ProgramaPunto.java

```java
public class UD8_A1_ProgramaPunto {

    public static void main(String[] args) {

        //Instanciamos los tres objetos Punto
        Punto p1 = new Punto();
        Punto p2 = new Punto();
        Punto p3 = new Punto();

        p1.x = 5;
        p1.y = 0;

        p2.x = 10;
        p2.y = 10;

        p3.x = -3;
        p3.y = 7;

        //Imprimimos las coordenadas de los tres puntos        
        System.out.println("Coordenadas del punto p1 (" + p1.x + "," + p1.y + ")");
        System.out.println("Coordenadas del punto p2 (" + p2.x + "," + p2.y + ")");
        System.out.println("Coordenadas del punto p3 (" + p3.x + "," + p3.y + ")");
        System.out.println();

        //Modificamos las coordenadas de los tres puntos
        p1.x += 3;
        p1.y = 6;

        p2.x /= 2;
        p2.y *= 2;

        p3.x -= 5;
        p3.y %= 2;

        //Imprimimos las coordenadas de los tres puntos               
        System.out.println("Nuevas coordenadas del punto p1 (" + p1.x + "," + p1.y + ")");
        System.out.println("Nuevas coordenadas del punto p2 (" + p2.x + "," + p2.y + ")");
        System.out.println("Nuevas coordenadas del punto p3 (" + p3.x + "," + p3.y + ")");
        System.out.println();

    }

}
```

---

#### 📦 Persona.java

```java
public class Persona {

    String dni;
    String nombre;
    String apellidos;
    int edad;

}
```

---

#### 📦 UD8_A2_ProgramaPersona.java

```java
import java.util.Scanner;

public class UD8_A2_ProgramaPersona {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        Persona persona1 = new Persona();
        Persona persona2 = new Persona();

        System.out.println("Introduce los datos de la primera persona");
        System.out.print("DNI: ");
        persona1.dni = sc.nextLine();
        System.out.print("Nombre: ");
        persona1.nombre = sc.nextLine();
        System.out.print("Apellidos: ");
        persona1.apellidos = sc.nextLine();
        System.out.print("Edad: ");
        persona1.edad = sc.nextInt();

        sc.nextLine();

        System.out.println("Introduce los datos de la segunda persona");
        System.out.print("DNI: ");
        persona2.dni = sc.nextLine();
        System.out.print("Nombre: ");
        persona2.nombre = sc.nextLine();
        System.out.print("Apellidos: ");
        persona2.apellidos = sc.nextLine();
        System.out.print("Edad: ");
        persona2.edad = sc.nextInt();

        String cadena1 = persona1.nombre + " " + persona1.apellidos + " con DNI " + persona1.dni;
        String cadena2 = persona2.nombre + " " + persona2.apellidos + " con DNI " + persona2.dni;

        if (persona1.edad >= 18) {
            cadena1 += " es mayor de edad";
        } else {
            cadena1 += " no es mayor de edad";
        }

        if (persona2.edad >= 18) {
            cadena2 += " es mayor de edad";
        } else {
            cadena2 += " no es mayor de edad";
        }

        System.out.println(cadena1);
        System.out.println(cadena2);

    }
}
```

---

#### 📦 Rectangulo.java

```java
public class Rectangulo {

    int x1, y1, x2, y2;

}
```

---

#### 📦 UD8_A3_ProgramaRectangulo.java

```java
public class UD8_A3_ProgramaRectangulo {

    public static void main(String[] args) {

        Rectangulo rec1 = new Rectangulo();
        Rectangulo rec2 = new Rectangulo();

        rec1.x1 = 0;
        rec1.y1 = 0;
        rec1.x2 = 5;
        rec1.y2 = 5;

        rec2.x1 = 7;
        rec2.y1 = 9;
        rec2.x2 = 2;
        rec2.y2 = 3;

        System.out.println("Coordenadas del rectángulo 1 (" + rec1.x1 + "," + rec1.y1 + ") y (" + rec1.x2 + "," + rec1.y2 + ")");
        System.out.println("Coordenadas del rectángulo 2 (" + rec2.x1 + "," + rec2.y1 + ") y (" + rec2.x2 + "," + rec2.y2 + ")");
        System.out.println("El perímetro del rectángulo 1 es: " + perimetro(rec1));
        System.out.println("El perímetro del rectángulo 2 es: " + perimetro(rec2));
        System.out.println("El área del rectángulo 1 es: " + area(rec1));
        System.out.println("El área del rectángulo 2 es: " + area(rec2));
        System.out.println("");

        rec1.x1 = 5;
        rec1.y1 = 5;
        rec1.x2 = 15;
        rec1.y2 = 15;

        rec2.x1 = 17;
        rec2.y1 = 19;
        rec2.x2 = 22;
        rec2.y2 = 24;

        System.out.println("Coordenadas del rectángulo 1 (" + rec1.x1 + "," + rec1.y1 + ") y (" + rec1.x2 + "," + rec1.y2 + ")");
        System.out.println("Coordenadas del rectángulo 2 (" + rec2.x1 + "," + rec2.y1 + ") y (" + rec2.x2 + "," + rec2.y2 + ")");
        System.out.println("El perímetro del rectángulo 1 es: " + perimetro(rec1));
        System.out.println("El perímetro del rectángulo 2 es: " + perimetro(rec2));
        System.out.println("El área del rectángulo 1 es: " + area(rec1));
        System.out.println("El área del rectángulo 2 es: " + area(rec2));

    }

    public static double perimetro(Rectangulo rect) {
        int lado1 = Math.abs(rect.x1 - rect.x2);
        int lado2 = Math.abs(rect.y1 - rect.y2);

        return (lado1 + lado2) * 2;
    }

    public static double area(Rectangulo rect) {
        int lado1 = Math.abs(rect.x1 - rect.x2);
        int lado2 = Math.abs(rect.y1 - rect.y2);

        return lado1 * lado2;
    }

}
```

---

#### 📦 Articulo.java

```java
public class Articulo {

    String nombre;
    double precio;
    int iva;
    int cuantosQuedan;

}
```

---

#### 📦 UD8_A4_ProgramaArticulo.java

```java
public class UD8_A4_ProgramaArticulo {

    public static void main(String[] args) {

        Articulo a1 = new Articulo();
        a1.nombre = "Camisa de cuadros";
        a1.precio = 20;
        a1.iva = 21;
        a1.cuantosQuedan = 5;

        System.out.println(a1.nombre + " - Precio: " + a1.precio + "€ - IVA: " + a1.iva + "% - PVP: " + (a1.precio + (a1.precio * a1.iva / 100)) + "€");

        a1.precio = 10;

        System.out.println(a1.nombre + " - Precio: " + a1.precio + "€ - IVA: " + a1.iva + "% - PVP: " + (a1.precio + (a1.precio * a1.iva / 100)) + "€");

    }

}
```

---

```java
public class Punto {

    int x, y;

    public Punto(int x, int y) {
        this.x = x;
        this.y = y;
    }

}
```

---

#### 📦 UD8_B1_ProgramPunto.java

```java
public class UD8_B1_ProgramPunto {

    public static void main(String[] args) {

        //Instanciamos los tres objetos Punto
        Punto p1 = new Punto(5, 0);
        Punto p2 = new Punto(10, 10);
        Punto p3 = new Punto(-3, 7);

        //Imprimimos las coordenadas de los tres puntos        
        System.out.println("Coordenadas del punto p1 (" + p1.x + "," + p1.y + ")");
        System.out.println("Coordenadas del punto p2 (" + p2.x + "," + p2.y + ")");
        System.out.println("Coordenadas del punto p3 (" + p3.x + "," + p3.y + ")");
        System.out.println();

        //Modificamos las coordenadas de los tres puntos
        p1.x += 3;
        p1.y = 6;

        p2.x /= 2;
        p2.y *= 2;

        p3.x -= 5;
        p3.y %= 2;

        //Imprimimos las coordenadas de los tres puntos               
        System.out.println("Nuevas coordenadas del punto p1 (" + p1.x + "," + p1.y + ")");
        System.out.println("Nuevas coordenadas del punto p2 (" + p2.x + "," + p2.y + ")");
        System.out.println("Nuevas coordenadas del punto p3 (" + p3.x + "," + p3.y + ")");
        System.out.println();
    }

}
```

---

```java
public class Persona {

    String dni;
    String nombre;
    String apellidos;
    int edad;

    public Persona(String dni, String nombre, String apellidos, int edad) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }

}
```

---

#### 📦 UD8_B2_ProgramaPersona.java

```java
public class UD8_B2_ProgramaPersona {

    public static void main(String[] args) {

        Persona persona1 = new Persona("18999548P", "José", "Serrano Márquez", 25);
        Persona persona2 = new Persona("20222444L", "María", "Carcelén Sánchez", 17);

        String cadena1 = persona1.nombre + " " + persona1.apellidos + " con DNI " + persona1.dni;
        String cadena2 = persona2.nombre + " " + persona2.apellidos + " con DNI " + persona2.dni;

        if (persona1.edad >= 18) {
            cadena1 += " es mayor de edad";
        } else {
            cadena1 += " no es mayor de edad";
        }

        if (persona2.edad >= 18) {
            cadena2 += " es mayor de edad";
        } else {
            cadena2 += " no es mayor de edad";
        }

        System.out.println(cadena1);
        System.out.println(cadena2);
    }

}
```

---

```java
public class Rectangulo {

    int x1, y1, x2, y2;

    public Rectangulo(int x1, int y1, int x2, int y2) {
        // Comprobamos si es un rectángulo válido
        if ((x1 < x2) && (y1 < y2)) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            
        } else {
            System.err.println("ERROR al intanciar el Rectángulo (" + x1 + "," + y1 + "),(" + x2 + "," + y2 + ")");
        }
    }

}
```

---

#### 📦 UD8_B3_ProgramaRectangulo.java

```java
public class UD8_B3_ProgramaRectangulo {

    public static void main(String[] args) {

        Rectangulo rec1 = new Rectangulo(0, 0, 5, 5);
        Rectangulo rec2 = new Rectangulo(7, 9, 2, 3);

        System.out.println("Coordenadas del rectángulo 1 (" + rec1.x1 + "," + rec1.y1 + ") y (" + rec1.x2 + "," + rec1.y2 + ")");
        System.out.println("Coordenadas del rectángulo 2 (" + rec2.x1 + "," + rec2.y1 + ") y (" + rec2.x2 + "," + rec2.y2 + ")");
        System.out.println("El perímetro del rectángulo 1 es: " + perimetro(rec1));
        System.out.println("El perímetro del rectángulo 2 es: " + perimetro(rec2));
        System.out.println("El área del rectángulo 1 es: " + area(rec1));
        System.out.println("El área del rectángulo 2 es: " + area(rec2));
        System.out.println("");

    }

    public static double perimetro(Rectangulo rect) {
        int lado1 = Math.abs(rect.x1 - rect.x2);
        int lado2 = Math.abs(rect.y1 - rect.y2);

        return (lado1 + lado2) * 2;
    }

    public static double area(Rectangulo rect) {
        int lado1 = Math.abs(rect.x1 - rect.x2);
        int lado2 = Math.abs(rect.y1 - rect.y2);

        return lado1 * lado2;
    }

}
```

---

```java
public class Articulo {

    String nombre;
    double precio;
    int iva;
    int cuantosQuedan;

    public Articulo(String nombre, double precio, int iva, int cuantosQuedan) {
        if (nombre.equals("")) {
            System.err.println("ERROR: El nombre no puede estar vacío");
        } else if (precio <= 0) {
            System.err.println("ERROR: El precio no puede ser menor o igual a cero");
        } else if (iva != 21) {
            System.err.println("ERROR: El iva debe ser el 21%");
        } else if (cuantosQuedan < 0) {
            System.err.println("ERROR: El stock no puede ser menor que cero");
        } else {
            this.nombre = nombre;
            this.precio = precio;
            this.iva = iva;
            this.cuantosQuedan = cuantosQuedan;
        }
    }

}
```

---

## 11.17 Ejercicios - AyR

Programación

- Ampliación y Refuerzo

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS A m p l i a c i ó n Programación

Ejercicio 1 Crea el programa GESTISIMAL (GESTIón SIMplificada de ALmacén) para llevar el control de los artículos de un almacén. De cada artículo se debe saber el código, la descripción, el precio de compra, el precio de venta y el stock (número de unidades). El menú del programa debe tener, al menos, las siguientes opciones

### 1. Listado

### 2. Alta

### 3. Baja

### 4. Modificación

### 5. Entrada de mercancía

### 6. Salida de mercancía

### 7. Salir

La entrada y salida de mercancía supone respectivamente el incremento y decremento de stock de un determinado artículo. Hay que controlar que no se pueda sacar más mercancía de la que hay en el almacén. Programación

EJERCICIOS R e f u e r z o Programación

Ejercicio 1 Dada la clase Punto que se puede descargar en Moodle, se pide identificar sus elementos y en concreto

- Indicar sus atributos, de qué tipo son cada uno y cuál es su nivel de

visibilidad.

- Escribir el perfil de los métodos constructores. ¿En qué se diferencian del

resto de métodos? ¿Para qué se utilizan?

- Identificar los métodos modificadores.
- Identificar los métodos consultores.

Programación

Ejercicio 2 Dada la clase Punto del ejercicio anterior se pide escribir las instrucciones Java para

- Declarar y crear un objeto de tipo Punto cuyo nombre sea p1.
- Mostrar por pantalla la distancia al origen de dicho punto.
- Escribir la clase PruebaPunto en cuyo main se deben incluir las

instrucciones anteriores. Compilar y ejecutar el programa. Programación

Ejercicio 3 Dada la clase Circulo (descargar en Moodle) ¿Qué error tiene el siguiente programa?

```java
public class PruebaCirculo {
     public static void main(String[] args) {
```

```java
Circulo c = new Circulo(2.5, “rojo”, 1, 1);
```

```java
System.out.println("El radio del circulo es:" + c.radio);
     }
}
```

¿Cómo se resuelve el error? Programación

Ejercicio 4

- Se pide completar el código de la clase Cuadrado (descargar en Moodle)

para que tenga una funcionalidad similar a la clase Circulo.

- Realizar un pequeño programa para comprobar la correcta funcionalidad

de la clase Cuadrado. Programación

Ejercicio 5 Modificar la clase Circulo para sustituir los dos atributos centroX y centroY por un único atributo centro de tipo Punto. Programación

---

## 11.18 Circulo

```java
public class Circulo {

	//Atributos

	

	private double radio; 

	private String color;

	private int centroX;

	private int centroY;

	//Constructores

	

	/** crea un Circulo de radio 50, negro y centro en (100,100). */

	public Circulo() {

		radio = 50; 

		color = "negro"; 

		centroX = 100; 

		centroY = 100; 

	}

	/** crea un Circulo de radio r, color c y centro en (px,py). */

	public Circulo(double r, String c, int px, int py) {

		radio = r; 

		color = c; 

		centroX = px; 

		centroY = py; 

	}

	//Propiedades

	

	/** consulta el radio del Circulo. */

	public double getRadio() { 

		return radio; 

	}

	/** consulta el color del Circulo. */

	public String getColor() { 

		return color; 

	}

	/** consulta la abscisa del centro del Circulo. */

	public int getCentroX() { 

		return centroX; 

	}

	/** consulta la ordenada del centro del Circulo. */

	public int getCentroY() { 

		return centroY; 

	}

	/** actualiza el radio del Circulo a nuevoRadio. */

	public void setRadio(double nuevoRadio) { 

		radio = nuevoRadio; 

	}

	/** actualiza el color del Circulo a nuevoColor. */

	public void setColor(String nuevoColor) { 

		color = nuevoColor; 

	}

	/** actualiza el centro del Circulo a la posición (px,py). */

	public void setCentro(int px, int py) { 

		centroX = px; 

		centroY = py; 

	}

	//Métodos

	

	/** desplaza un poco a la derecha el Circulo. */

	public void aLaDerecha() { 

		centroX += 10; 

	}

	/** incrementa el radio del Circulo. */

	public void crece() { 

		radio = radio * 1.3; 

	}

	/** decrementa el radio del Circulo. */

	public void decrece() { 

		radio = radio / 1.3; 

	}

	/** calcula el área del Circulo. */

	public double area() { 

		return 3.14 * radio * radio; 

	}

	/** calcula el perímetro del Circulo. */

	public double perimetro() { 

		return 2 * 3.14 * radio; 

	}

	/** obtiene un String con las componentes del Circulo. */

	public String toString() { 

		String res = "Circulo de radio "+ radio;

		res += ", color "+color+" y centro ("+centroX+","+centroY+")";

		return res; 

	}

}
```

---

## 11.19 Cuadrado

```java
public class Cuadrado {

	//Atributos

	

	private ... lado;

	private ... color;

	private ... centroX;

	private ... centroY;

	

	//Constructores

	

	/** crea un Cuadrado de lado 50, negro y centro en (100,100).*/

	public Cuadrado() {

		

	}

	/** crea un Cuadrado de lado l, color c y centro en (px,py).*/

	public Cuadrado(double l, String c, int px, int py) {

	

	}

	//Propiedades

	

	/** consulta el lado de un Cuadrado. */

	public double getLado() {  

		

	}

	/** consulta el color de un Cuadrado. */

	public String getColor() {  

		

	}

	/** consulta el centro de un Cuadrado. */

	public int getCentroX() {  

		

	}

	/** consulta el centro de un Cuadrado. */

	public int getCentroY() {  

		

	}

	/** actualiza el lado de un Cuadrado a nuevoLado. */

	public void setLado(double nuevoLado) {  

		

	}

	/** actualiza el color de un Cuadrado a nuevoColor. */

	public void setColor(String nuevoColor) {  

		

	}

	/** actualiza el centro de un Cuadrado. */

	public void setCentro(int px, int py) {  

		

	}

	//Métodos

	

	/** desplaza un poco a la derecha el Cuadrado. */

	public void aLaDerecha() {  

		

	}

	/** incrementa el lado de un Cuadrado. */

	public void crece() {  

		

	}

	/** decrementa el lado de un Cuadrado. */

	public void decrece() {  

		

	}

	/** calcula el área de un Cuadrado. */

	public double area() {  

		

	}

	/** calcula el perímetro de un Cuadrado. */

	public double perimetro() {  

		

	}

	/** obtiene el String con las componentes de un Cuadrado. */

	public String toString() {  

		

	}

	

}
```

---

## 11.20 Punto

```java
public class Punto {

	//Atributos

	

	private int x; // abscisa del punto

	private int y; // ordenada del punto

	//Consturctores

	

	/** crea un punto (0,0). */

	public Punto() { 

		x = 0; 

		y = 0; 

	}

	/** crea un punto (abs, ord). */

	public Punto(int abs, int ord) { 

		x = abs; 

		y = ord; 

	}

	/** crea un punto (coord, coord). */

	public Punto(int coord) { 

		x = coord; 

		y = coord; 

	}

	

	//Propiedades

	

	/** actualiza la abscisa del punto. */

	public void setX(int abs) { 

		x = abs; 

	}

	/** actualiza la ordenada del punto. */

	public void setY(int ord) { 

		y = ord;

	}

	/** consulta la abscisa del punto. */

	public int getX() { 

		return x; 

	}

	

	/** consulta la ordenada del punto. */

	public int getY() { 

		return y; 

	}

	//Métodos

	

	/** consulta la distancia al origen del punto. */

	public double distOrigen() { 

		return Math.sqrt(x*x + y*y); 

	}

	/** actualiza las componentes del punto a (abs, ord). */

	public void asignar(int abs, int ord) { 

		x = abs; 

		y = ord; 

	}

	

}
```

---

## 11.21 Programación orientada a objetos (versión extend

V1.19.01.23

Profesor: José Ramón Simó Martínez Contenido

- Introducción ............................................................................................................................ 2

1.2. Definición de POO ......................................................................................................................... 2

- Abstracción ............................................................................................................................. 3
- Clases y objetos ....................................................................................................................... 3

3.1. Definición de clases ....................................................................................................................... 4 3.2. Instanciación de objetos ................................................................................................................ 4

- Atributos y métodos ................................................................................................................ 5

4.1. Definición y acceso a atributos ....................................................................................................... 5 4.2. Definición y acceso a métodos ....................................................................................................... 6 4.3. Constructores ................................................................................................................................ 8

- Encapsulamiento .................................................................................................................... 10

5.1. Modificadores de acceso .............................................................................................................. 11 5.2. Getters y setters .......................................................................................................................... 13

- Empaquetado de clases .......................................................................................................... 14

6.1. Paquetes integrados .................................................................................................................... 15 6.2. Paquetes definidos por el desarrollador ....................................................................................... 15 6.3. Ejemplo de creación y uso de paquetes propios ............................................................................ 18

- Bibliografía ............................................................................................................................. 19

V1.19.01.23

### 1. Introducción

En este punto del curso y con todo lo que has aprendido ya eres capaz de resolver gran parte de los problemas, a nivel de programación, utilizando las estructuras de control, arrays y métodos. Sin embargo, los proyectos empiezan a ser más complejos, incluyendo por ejemplo interfaces gráficas, bases de datos o software de gran escalabilidad. Esto requiere de un nivel mayor de abstracción en el diseño del software, así como un lenguaje que permita organizar y aplicar ese nivel de abstracción.

En esta unidad introduciremos la programación orientada a objetos (POO) y su aplicación en el lenguaje de programación Java, con el objetivo de aprender a desarrollar proyectos de software de mayor calidad, robustez, eficiencia y seguridad, entre otros. Al terminar esta unidad deberás ser capaz de

• Comprender las bases de la POO. • Entender el concepto de objeto y clase dentro de la POO. • Definir y utilizar tus propias clases. • Definir los atributos y métodos de una clase. • Crear y utilizar constructores de clase. • Desarrollar programas sencillos aplicando el paradigma orientado a objetos básico en lenguaje Java.

#### 1.2. Definición de POO

La POO es un estilo de programación donde todos los elementos que forman parte del problema se conciben como objetos, definiendo cuáles son sus atributos y comportamiento, cómo se relacionan entre sí y cómo están organizados. Los principales elementos que componen la POO

• Abstracción • Clases y objetos • Encapsulamiento • Herencia • Polimorfismo De forma teórica también forman parte el Principio de Ocultación de Información y la Modularidad. No entraremos en definiciones sobre estos conceptos, pero si quieres saber más te dejo este enlace.

En esta unidad estudiaremos los tres primeros elementos. Dejaremos la Herencia y Polimorfismo para la siguiente unidad como conceptos avanzados de POO.

V1.19.01.23

### 2. Abstracción

En el pensamiento humano tendemos a abstraer el mundo real con el objetivo de simplificar la realidad. De un objeto, problema, situación, etc., obtenemos la información esencial y desechamos aquella que no sirve para nuestro objetivo. Por ejemplo: No necesitamos saber la física que hay detrás de un microondas para poder calentar nuestra comida.

Solamente debemos saber: • Las características del microondas (tamaño, potencia, etc.). • Las funciones que nos ofrece (regular tiempo y potencia, descongelar, función grill, etc.). A estas características y funciones las denominamos en los lenguajes de POO como Atributos y Métodos, respectivamente.

Nota A estas características y funciones las denominamos en los lenguajes de POO como Atributos y Métodos, respectivamente. La abstracción como técnica de programación Concluimos que la programación es una tarea compleja y mediante la abstracción es posible elaborar software que permita solucionar problemas cada vez más grandes.

Nota En el módulo de Entornos de Desarrollo (ED) se estudia con más detalle los conceptos teórico-prácticos del paradigma orientado a objeto, como por ejemplo los diagramas UML. En esta unidad se dará por entendido que el estudiante ha adquirido dichos conocimientos del módulo de ED.

### 3. Clases y objetos

En los lenguajes de programación un objeto está compuesto por: • Atributos: definen el estado del objeto. • Métodos: definen el comportamiento del objeto. Una vez entendido el concepto de objeto podemos definir qué es una clase en los lenguajes de programación: “Podemos entender como clase el molde a partir del cual se crearán los objetos de dicha clase.” Una analogía para entender mejor la diferencia entre objeto y clase sería el diccionario, donde la clase sería la palabra y su definición, y los objetos cada elemento real de dicha palabra. Por ejemplo, en el diccionario podemos encontrar la definición de Persona (la clase) y en el mundo real tenemos miles de personas (objetos).

V1.19.01.23 Una clase, al igual que los objetos, se compone de: • Información: campos (atributos, propiedades) • Comportamiento: métodos (operaciones, funciones) Diremos que un objeto es una instancia de una clase. Por ejemplo: Clase Objetos (Instancias) Persona Ramon, Gala, Jose, Reme, Melis… Coche KITT, DeLorean DMC-12, Batmovil… Jedi Luke Skywalker, Yoda, Obi-Wan Kenobi, Ansoka Tano… Nave Halcón milenario, USS Enterprise, USCSS Prometheus… Planeta Tierra, Júpiter, Arrakis, Tatooine, Krypton… String “Hola mundo”… Date 17-01-2023… A continuación, vamos a ver como se definen las clases e instancian los objetos en Java.

#### 3.1. Definición de clases

El esquema de una clase en Java es la siguiente: class NombreDeClase {

// Atributos

// Constructores

// Métodos }

#### 3.2. Instanciación de objetos

A lo largo del curso ya hemos utilizado algunas de las clases predefinidas de Java, como por ejemplo la clase String, Random, Date, etc. Para poder utilizar estas clases hacíamos lo siguiente, por ejemplo: Random r = new Random(); // Instanciamos un objeto de la clase Random Date fecha = new Date(); // Instanciamos un objeto de la clase Date … Ahora ya sabemos que lo que estábamos haciendo era instanciar un objeto de una clase. Hay dos elementos que participan en la instancia de un objeto

• La palabra clave new. • El constructor de clase, que debe coincidir exactamente con el nombre de la clase.

V1.19.01.23 El esquema general para instanciar (crear) un objeto de una clase será

```java
NombreDeClase objeto = new NombreDeClase();
```

Más adelante estudiaremos las particularidades a la hora de instanciar objetos utilizando los constructores de clase con parámetros.

### 4. Atributos y métodos

A continuación, vamos a estudiar cómo se definen en Java los atributos y métodos de un clase, así como su uso por parte de un objeto.

#### 4.1. Definición y acceso a atributos

Definen las propiedades del objeto de la clase. Para ello, los atributos son las variables (tipos de datos primitivos u objetos) que ya conocemos. Por ejemplo: Clase Atributos Persona nombre, edad, teléfono,… Coche nº de bastidor, tipo, marca, color,… Jedi nivel de fuerza, experiencia, categoria, lado,… Nave tamaño, potencia, capacidad,… Existen dos tipos de atributos: de instancia y de clase.

• De instancia: hay una copia de un campo de instancia por cada objeto de la clase. • De clase (static): hay una única copia de un campo static en el sistema. Es el equivalente a una variable global en otros lenguajes de programación. El campo static es accesible a través de la propia clase (sin necesidad de instanciar la clase).

Por ejemplo: Clase Atributos de instancia Atributos de clase Persona nombre, edad, teléfono,… Nº de personas creadas Un ejemplo de clase Persona con sus atributos definidos: class Persona {

```java
String nombre;
```

```java
int edad;
```

```java
String teléfono;
```

```java
static int numeroDePersonasCreadas;
}
```

V1.19.01.23 Para acceder a los atributos de una instancia se utiliza la sintaxis del objeto

```java
Persona p1 = new Persona();
```

p1.nombre = “Leia”;p

```java
p1.edad = 38;
```

Acceso a las variables static se utiliza la sintaxis de clase: Persona.numeroDePersonasCreadas++;

```java
System.out.println(“Persona.numerosDePersonasCreadas”);
```

#### 4.2. Definición y acceso a métodos

En anteriores unidades ya estudiamos el concepto de función como estructura que permite modular un programa. En Java a las funciones se les conoce como métodos. Por tanto, ya conocemos la estructura básica de un método: recibe parámetros (o no), ejecuta instrucciones y devuelve (o no) un dato.

No obstante, al igual que en los atributos existen dos tipos de métodos en la POO: de instancia y de clase. • De instancia: se invoca sobre un objeto de la clase, al cual tiene acceso mediante la palabra reservada this. Sus variables de instancia son accesibles de manera directa.

• De clase (static): no opera sobre un objeto de la clase, y la palabra reservada this no es válida en su interior. Nota En los métodos de clase NO podemos utilizar variables de instancia. Por ejemplo: Clase Métodos de instancia Métodos de clase Persona esMayorDeEdad() obtenerPoblacion(), incrementarPoblacion() En código Java

class Persona {

// Atributos

```java
String nombre;
```

```java
int edad;
```

```java
String teléfono;
```

```java
static int numeroDePersonasCreadas;
```

// Métodos

```java
void esMayorDeEdad() {
```

if (edad > = 18) // atributo de instancia

```java
System.out.println(nombre + “ es mayor de edad”);
```

else

```java
System.out.println(nombre + “ no es mayor de edad”);
```

}

V1.19.01.23

```java
static int obtenerPoblacion() {
```

return numeroDePersonasCreadas; // atributo de clase

}

```java
static void incrementarPoblacion() {
```

numeroDePersonasCreadas++; // atributo de clase

} }

#### 4.2.1. La palabra reservada this

La palabra reservada this permite que se pueda hacer referencia al objeto actual de la clase. De este modo, nos servirá para hacer referencia a los propios atributos y métodos de la clase. Su sintaxis es this.nombreDeVariable. Por ejemplo

```java
void esMayorDeEdad() {
```

if (this.edad > = 18) // atributo de instancia

```java
System.out.println(nombre + “ es mayor de edad”);
```

else

```java
System.out.println(nombre + “ no es mayor de edad”);
```

} En el ejemplo anterior podemos obviar el uso del this, ya que Java detecta que edad es un atributo de la clase. No obstante, como veremos más adelante, el uso del this será necesario en muchos casos dentro de los métodos de la clase. Nota Dependiendo de la guía de estilo del proyecto en el que se trabaje se recomendará usar o no el this siempre que se haga referencia a un atributo o método de la clase.

#### 4.2.2. Acceso a los métodos

Para acceder a los métodos de una instancia se utiliza la sintaxis del objeto (objeto.metodo): Persona p1 = new Persona(); // p1 es un objeto de la clase persona p1.esMayorDeEdad(); // método de instancia Acceso a los métodos de clase (static) se utiliza la sintaxis de clase (Clase.metodo)

int poblacionTotal = Persona.obtenerPoblaciona(); // método de clase

V1.19.01.23

#### 4.2.3. Sobrecarga de métodos

Los métodos de una clase pueden tener el mismo nombre, pero diferentes parámetros. Cuando se invoca un método el compilador compara el número y tipo de los parámetros y determina qué método debe invocar. Ejemplo: class Persona { double ahorros;

```java
void ingresarDinero(double cantidad) {
        this.ahorros += cantidad;
    }
```

```java
void ingresarDinero(double cantidad, String moneda) {
```

// Procesar el ingreso } } Ahora podemos utilizar el mismo nombre de método, pero pasando diferentes parámetros

```java
Persona p1 = new Persona();
p1.ingresarDinero(128.25);
p1.ingresarDinero(50, “€”);
```

En resumen, esta técnica se conoce como sobrecarga de métodos y nos permite definir más de un método con el mismo nombre con la condición de que sus parámetros sean distintos Nota Si no existiera la sobrecarga de métodos deberíamos de haber nombrado a los anteriores métodos del ejemplo como “ingresarDinero1(double cantidad)”, “ingresarDinero2(double cantidad, String moneda)”. La ventaja de esta técnica práctica es reducir el número de nombres de método distintos y agrupar características comunes.

#### 4.3. Constructores

Un constructor es un método especial invocado para instanciar e inicializar un objeto de la clase, y se invoca con la sentencia new.

Los métodos constructores cumplen con estas características

✓ Tienen el mismo que la clase. ✓ Pueden tener cero (conocido como constructor por defecto) o más parámetros (conocido como constructor con parámetros). ✓ Deben declararse públicos (public) para que se puedan invocar fuera de la clase, de otra forma se restringiría el acceso a la creación de objetos.

✓ No tiene tipo de retorno, ni siquiera void.

V1.19.01.23 ✓ Sólo se ejecuta cuando es invocado para crear una instancia de un objeto. ✓ Si la clase no tiene ningún constructor, el sistema crea un constructor por defecto. ✓ Si la clase tiene algún constructor, debe usarse alguno de los constructores definidos al instanciar la clase (en este caso el sistema no crea un constructor por defecto).

#### 4.3.1. Constructores por defecto

El objetivo de crear constructores por defecto es inicializar el valor de los atributos. Debemos hacernos la siguiente pregunte: ¿qué valor queremos que tengan los atributos de un objeto al crear dicho objeto? En la mayoría de los casos los valores iniciales son los cero para valores numéricos, cadena vacía para String, etc. Sin embargo, en algunos casos queremos que tengan un valor concreto. Por ejemplo, en una clase llamada Tripode querremos que su atributo numeroDePatas (de tipo entero) sea inicialmente 3.

Ejemplo de constructor por defecto en la clase Persona: class Persona {

// Atributos

```java
String nombre;
```

```java
int edad;
```

```java
String teléfono;
```

```java
static int numeroDePersonasCreadas;
```

// Constructor por defecto

```java
public Persona() {
```

```java
this.nombre = “”;
```

```java
this.edad = 0;
```

```java
this.teléfono = “”;
```

numeroDePersonasCreadas = 0; // tipos static se usan aquí

} } Nota Observa en ejemplo anterior que no usamos this en el atributo de tipo static. Esto es porque this sólo se usa en atributos de instancia. En caso de no crear el constructor por defecto, Java crea uno internamente e inicializa las variables a un valor inicial. No entraremos en detalle por ahora sobre este aspecto, así que nosotros crearemos siempre el constructor por defecto e inicializaremos los atributos de la clase.

#### 4.3.2. Constructores con parámetros

La sobrecarga de métodos también se aplica a los constructores de la clase. Es decir, podemos tener constructores con el mismo nombre, pero diferentes parámetros. Esto permitirá que podamos tener más de un constructor de clase según nuestras necesidades de diseño a la hora de instanciar objetos de la clase.

V1.19.01.23 Por ejemplo: class Persona {

// Atributos

```java
String nombre;
```

```java
int edad;
```

```java
String teléfono;
```

```java
static int numeroDePersonasCreadas;
```

// Constructor por defecto

```java
public Persona() {
```

```java
this.nombre = “”;
```

```java
this.edad = 0;
```

```java
this.teléfono = “”;
```

numeroDePersonasCreadas = 0; // tipos static se usan aquí

}

// Constructores con parámetros

```java
public Persona(String nombre) {
```

```java
this.nombre = nombre;
```

}

```java
public Persona(String nombre, int edad) {
```

this.nombre = nombre; // Uso necesario del this!!

```java
this.edad = edad;
```

} } Nota Como puedes observar el uso del this es necesario en este caso para diferenciar el nombre del parámetro de entrada y el atributo de la clase, cuando estos por claridad de código se nombran igual. Para instanciar un objeto usando los constructores de parámetros se haría así

```java
Persona p1 = new Persona();
```

```java
Persona p2 = new Persona(“Adrián”);
```

```java
Persona p3 = new Persona(“Reme”, 62);
```

En el ejemplo se han instanciado tres objetos de la clase Persona utilizando diferentes los constructores de clase que hemos definido anteriormente.

### 5. Encapsulamiento

Uno de los objetos de la POO es agrupar tanto los datos como las funciones dentro de una estructura que llamamos Clase. Por otra parte, en el ecosistema de un proyecto software orientado a objetos conviven diferentes clases y objetos, que de una manera u otra se pueden relacionar.

V1.19.01.23 Surge por tanto la necesidad de crear un mecanismo que permita agrupar los datos en una unidad llamada Clase, que permita indicar cuáles de sus atributos y métodos se pueden compartir, y además qué clases pueden acceder o no a ellos. Este mecanismo se denomina Encapsulamiento, que en resumen permite limitar el acceso a los elementos de la propia clase.

El encapsulamiento es consecuencia del concepto de Principio de Ocultación de la Información que indica la necesidad de ocultar la representación interna de un objeto o su estado desde el exterior. En la siguiente imagen podemos observar cómo un objeto incluye diferentes métodos y atributos, pero solamente aquellos que son públicos podrán interactuar con el exterior de la clase. A estos métodos públicos también los denominamos Interfaces de la clase.

A continuación, veremos los diferentes modificadores de acceso que definen la visibilidad de los métodos y atributos de una clase.

#### 5.1. Modificadores de acceso

Durante el curso ya has utilizado el modificador public en el código, aunque lo haya generado el IDE

```java
public class Principal {
    public static void main(String[] args) {
```

// Código… } } La palabra reservada public es un modificador de acceso, que define el nivel de acceso para las clases, atributos, métodos y constructores. Los modificadores de acceso de Java que modifican el acceso a las clases son: • public: la clase es accesible por cualquier otra clase.

• default: la clase solo es accesible por otras clases del mismo paquete. El modificador default es aplicado cuando no se especifica ningún modificador.

V1.19.01.23 Los modificadores de acceso de Java que modifican el acceso a los atributos, métodos y constructores son: • public: es accesible por todas las clases. • private: es accesible solamente dentro de la clase donde está declarado. • default: es accesible solamente dentro del mismo paquete. El modificador default es aplicado cuando no se especifica ningún modificador.

• protected: es accesible en el mismo paquete y las subclases. Nota Los paquetes los veremos en los siguientes apartados mientras que concepto de subclases lo introduciremos en la siguiente unidad. Una tabla de resumen de la accesibilidad de los modificadores de acceso

Modificador Clase Paquete Subclase Otros public Sí Sí Sí Sí protected Sí Sí Sí No (default) Sí Sí No No private Sí No No No Ejemplo

```java
public class Persona {
```

// Atributos

```java
private String nombre;
```

```java
public int edad; // no es nada recomendable hacer public el atributo!!
```

```java
protected String teléfono; // lo estudiaremos en subclases
```

static int numeroDePersonasCreadas; // default

// Métodos

```java
public void esMayorDeEdad() {
```

if (edad > = 18) // atributo de instancia

```java
System.out.println(nombre + “ es mayor de edad”);
```

else

```java
System.out.println(nombre + “ no es mayor de edad”);
```

}

```java
static int obtenerPoblacion() {
```

return numeroDePersonasCreadas; // atributo de clase

}

```java
static void incrementarPoblacion() {
```

numeroDePersonasCreadas++; // atributo de clase

}

V1.19.01.23 Ejemplo de uso en otra clase Principal que esté en el mismo paquete que la clase Persona

```java
public class Principal {
```

```java
public static void main(String[] args) {
    Persona p1 = new Persona();
```

// Dará error al ser private

```java
String miNombre = p1.nombre;
```

// Funcionará, pero no es para nada adecuado acceder de esta forma a los datos da la clase

```java
int miEdad = p1.edad;
}
```

Nota En el ejemplo se indican los atributos con diferentes tipos de modificadores. Como veremos en el siguiente apartado no es recomendable establecer los atributos como public o default (sin definir).

#### 5.2. Getters y setters

Como consecuencia de la Encapsulación y la ocultación de los datos sensibles al usuario, una buena práctica de programación es

- Declarar todos los atributos de la clase como private.
- Ofrecer métodos declarados como public para poder acceder y actualizar los valores de esos atributos

private. Estos métodos se conocen como getters y setters: • getter: método que devolverá el valor de un atributo private de la clase. • setter: método que almacena o actualiza un valor de un atributo private de la clase. La sintaxis para ambos métodos es escribir get o set, seguido del nombre del atributo con el primer carácter en mayúsculas. Por ejemplo

class Persona {

// Atributos

```java
private String nombre;
```

```java
private int edad;
```

```java
private String teléfono;
```

```java
private static int numeroDePersonasCreadas;
```

// Constructores…

// Getter

```java
public int getEdad() {
```

```java
return edad; // o también return this.edad;
```

}

V1.19.01.23

// Setter

```java
public void setEdad(int edad) {
```

```java
this.edad = edad;
```

} } A continuación, un ejemplo para probar los getters y setters

```java
public class Principal {
    public static void main(String[] args) {
        Persona p1 = new Persona();
        p1.setEdad(40);
        int edadPersona = p1.getEdad(); // devolverá 40
        System.out.println(edadPersona); // mostrará 40
}
```

### 6. Empaquetado de clases

Nota Durante el curso has utilizado necesariamente esta herramienta de Java para solucionar los ejercicios propuestos. Quizás lo hacías de forma inconsciente ya que el entorno de desarrollo (en este curso Eclipse) suele advertir o directamente añade los paquetes necesarios conforme los vamos escribiendo en el programa. La motivación de este apartado es entender mejor el concepto de paquete, pero sobre todo aprender a crear tus propios paquetes en Java.

La encapsulación de la información dentro de las clases ha permitido llevara cabo el proceso de ocultación, que es fundamental para el trabajo con clases y objetos. Cuando un proyecto empieza a crecer en cuanto al número de clases y a las relaciones que se establecen entre ellas por el modelo de datos diseñado, quizás necesites organizar dichas clases en un nivel superior de encapsulamiento conocido como empaquetado (package en Java).

Un paquete en Java se utiliza para agrupar clases relacionadas entre sí bajo un mismo nombre. Es aconsejable reunir aquellas clases que tienen unas características en común. Por ejemplo, durante el curso ya hemos utilizado el paquete java.util, en el que podemos encontrar todas las clases fundamentales (útiles) que los desarrolladores del lenguaje Java han creído conveniente agrupar (Scanner, Date, Calendar, Random, etc).

Como consejo, puedes pensar que los paquetes son carpetas de un directorio de archivos. Se usan paquetes para evitar conflictos y facilitar el mantenimiento del código. Los paquetes se dividen en dos categorías: • Paquetes integrados (built-in Packages): paquetes de la API de Java.

• Paquetes definidos por el usuario: Java permite que los desarrolladores puedan crear sus propios paquetes.

V1.19.01.23

#### 6.1. Paquetes integrados

Para acceder a las clases de un paquete se debe utilizar la palabra clave import seguida de una estructura organizativa separada por puntos: import paquete.nombrepaquete.nombreclase; Para utilizar todas las clases del paquete sustituimos la Clase por un asterisco (*)

import paquete.nombrepaquete.*; Nota Es recomendable que importemos únicamente las clases que vayamos a utilizar para nuestro proyecto. Dicho de otra forma, evitar en la medida de lo posible la tentación de usar el asterisco (*).

Ejemplo en Java

```java
import java.util.Scanner;
```

class TestScanner {

```java
public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print(“Introduce tu nombre: “);
        String nombre = sc.nextLine();
}
```

#### 6.2. Paquetes definidos por el desarrollador

Para crear tus propios paquetes necesitas saber que Java utiliza un sistema de directorios para guardarlos. Como habíamos dicho al principio de este apartado, los paquetes son carpetas desde el punto de vista del sistema operativo. En el siguiente ejemplo vemos el árbol de directorios de un paquete en Java en el path C:\MiProyectoJava\src\nombrePaquete\MiClase.java

|___ MiProyectoJava

|___ src

|___ nombrePaquete

|___ MiClase.java Para crear un paquete debemos usar la palabra reservada package seguida del nombre del paquete. Esta instrucción se debe situar al inicio del fichero .java. Por ejemplo

V1.19.01.23

```java
package nombrePaquete;
```

class MiClase {

```java
public static void main(String[] args) {
        System.out.println(“Hola mundo”);
}
```

Sin embargo, en este curso estamos utilizando un entorno de desarrollo que permite crear el paquete desde una ventana gráfica. A continuación, se mostrarán los pasos para crear un paquete en el IDE Eclipse

- Dentro de tu proyecto realiza los pasos abrir la ventana de creación de Clases. Como se ve en el

ejemplo, escribe el nombre del paquete en el segundo campo donde pone Package. Sigue los pasos para rellenar el nombre de clase y demás opciones

- Una vez le das al botón Finish, verás que te crea una clase con la instrucción situada arriba para crear

paquetes

V1.19.01.23

Ahora podrás ver en la vista de Package Explorer que Eclipse ha creado tanto el paquete y la clase

Si nos vamos al sistema de directorios del sistema operativo (Windows en este caso) verás que el paquete es realmente un directorio

Por otra parte, cuando separamos por puntos (.) en el package lo que estamos haciendo es crear cada vez un subdirectorio del directorio anterior. Por ejemplo

```java
package ejemplos.faciles;
```

En este caso, el sistema operativo crear el directorio ejemplos y dentro de este el subdirectorio faciles. Nota En eclipse, cuando quieres añadir algo al proyecto con New… verás que en el desplegable también tienes la opción de crear un paquete directamente. La ventaja de hacerlo así es que cuando queramos añadir una clase directamente a ese paquete (botón derecho sobre el paquete creado, New, Class…) añadirá la clase a ese paquete directamente.

V1.19.01.23

#### 6.3. Ejemplo de creación y uso de paquetes propios

Para cerrar el apartado de paquetes en Java, se mostrará un ejemplo de creación y uso de paquetes. Para ello vamos a simular el paquete que contiene los paquetes básicos de java (java.lang) y la clase Math que contiene métodos para hacer cálculos matemáticos. Por supuesto, el ejemplo es una versión super reducida de la clase Math y con un método simple para sumar dos números enteros.

Desde el IDE de Eclipse, los pasos son

- Creamos un paquete llamado basicos.
- Añadimos este paquete una clase llamada Matematicas.
- Añadimos a esta clase un método llamado suma, que recibe dos parámetros de tipo entero y devuelve

un valor entero que será el resultado de la suma de los dos parámetros. Una vez realizados estos pasos, la estructura del proyecto y el código fuente deberían quedar así

Como puedes observar no hay un método llamado main en esta clase. Esto es correcto, ya que no queremos tener un punto de entrada de programa para ejecutar esta clase. La clase Matematicas sólo nos sirve para usar sus métodos. Ahora si queremos probar la clase Matematicas podemos crear otra clase Test (en otro paquete) y en ella importar el paquete basicos. Por tanto, dicha clase quedaría así

V1.19.01.23

Nota En el código fuente es aconsejable situar los package antes que los import.

### 7. Bibliografía

Documentación oficial: https://docs.oracle.com/en/java/javase/17/docs/api/index.html Web w3schools.com Apuntes de José Chamorro del CFGS DAW del . Apuntes de: https://github.com/statickidz/TemarioDAW/blob/master/PROG/PR05.pdf
