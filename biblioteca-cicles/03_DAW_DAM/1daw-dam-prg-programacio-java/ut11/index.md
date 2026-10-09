---
layout: default
title: "UD7 — Programación orientada a objetos · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT11 Completa"
prev_url: "../ut10/ut1009.html"
prev_label: "⬅️ 6.3 Recursividad"
next_url: "../ut11/ut1101.html"
next_label: "7.1 Programación Orientada a Objetos ➡️"
---

# 📘 UD7 — Programación orientada a objetos (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**7.1 Programación Orientada a Objetos**](./ut1101.md)
- [**7.2 EstructuraClase**](./ut1102.md)
- [**7.3 Programación orientada a objetos (versión extend**](./ut1121.md)

---

# 7.1 Programación Orientada a Objetos

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

# 7.2 EstructuraClase

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

# 7.3 Programación orientada a objetos (versión extend

### UNIDAD 7: PROGRAMACIÓN ORIENTADA A OBJETOS

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

---
