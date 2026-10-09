---
layout: default
title: "UT13 — Gestión de excepciones — Programació en Java (1r DAW / DAM) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT13 Completa"
prev_url: "../ut12/ut1206.html"
prev_label: "⬅️ 12.6 08a - Utilización avanzada de clases (Versión ex"
next_url: "../ut13/ut1301.html"
next_label: "13.1 Gestión de excepciones ➡️"
---

# 📘 UT13 — Gestión de excepciones (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**13.1 Gestión de excepciones**](#ut1301) (o [obrir en pàgina individual ➡️](./ut1301.md) )
> - [**13.2 Códigos de clase**](#ut1302) (o [obrir en pàgina individual ➡️](./ut1302.md) )
> - [**13.3 Ejercicios A**](#ut1303) (o [obrir en pàgina individual ➡️](./ut1303.md) )
> - [**13.4 Ejercicios B**](#ut1304) (o [obrir en pàgina individual ➡️](./ut1304.md) )

---

## 13.1 Gestión de excepciones

> **📌 🏷️ Apunt de la Unitat**
> #### Contenido de la unidad

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

---

### UNIDAD 9: GESTIÓN DE EXCEPCIONES

V1.13.03.23

Profesor: José Ramón Simó Martínez Contenido

- Introducción ............................................................................................................................ 2
- Concepto de excepción ............................................................................................................ 3
- Jerarquía de excepciones en Java ............................................................................................ 6

3.1. Tabla de excepciones más frecuentes ...................................................................................................... 7

- Lanzar excepciones: throw vs throws ....................................................................................... 8

4.1. Lanzar excepciones desde métodos: throws ............................................................................................ 9 4.2. Propagación de excepciones .................................................................................................................. 10

- Captura y manejo de excepciones: try-catch-finally ................................................................ 11
- Creación de excepciones de usuario ....................................................................................... 14
- Recomendaciones .................................................................................................................. 16
- Bibliografía ............................................................................................................................. 17

V1.13.03.23

### 1. Introducción

Hasta ahora hemos estudiado los fundamentos de la programación estructurada y la programación orientada a objetos. Sin embargo, en los diversos programas desarrollados hemos tenido que lidiar con los siguientes inconvenientes: • Errores de compilación: mensajes que te indicaban que no podías compilar el programa.

Por ejemplo: o “Syntax error, insert ";" to complete BlockStatements” • Advertencias (Warnings): puedes compilar el programa, pero ten en cuenta que algo puede ir mal.

Por ejemplo: o “the value of the local variable X is never read” • Excepciones: cuando el programa terminaba de forma abrupta.

Por ejemplo: o “Exception in thread “main” java.lang.ArrayIndexOutOfBoundsException”. Los errores de compilación y los conocidos como Warnings los hemos resuelto rectificando las partes del código requeridas, normalmente siguiendo los consejos del entorno de desarrollo correspondiente. No obstante, a veces nuestro programa terminaba de forma abrupta con algún mensaje relacionado con la palabra “Exception”; la mayoría de las veces no sabíamos a que se referían dichos mensajes, pero resolvíamos el inconveniente de alguna forma u otra.

En esta unidad nos centraremos en la gestión de las excepciones en el lenguaje de programación Java. Al terminar esta unidad deberás ser capaz de: • Conocer la jerarquía y los tipos de excepciones. • Identificar las posibles excepciones en el código. • Saber lanzar excepciones y propagarlas desde métodos.

• Saber tratar y capturar excepciones con los bloques try-catch-finally. • Saber crear excepciones propias. • Desarrollar programas más robustos aplicando la gestión de excepciones en Java

V1.13.03.23

### 2. Concepto de excepción

En programación se conoce como excepción al error que se produce en tiempo de ejecución del programa. Como indica el propio termino, es un problema que ocurre con poca frecuencia; se debe a un dato o instrucción que está fuera de contexto del funcionamiento normal del programa.

El objetivo principal de la gestión de excepciones es crear programas robustos que permitan controlar estas excepciones y seguir con la ejecución del programa sin verse afectados por el problema. A continuación, veamos unos ejemplos de programas que producen excepciones durante su ejecución.

Ejemplo 1: Dividiendo entre cero Código: 1: /* Ejemplo 1: Dividiendo entre cero */ 2: public class Ejemplo1 {

```java
3:  public static void main(String[] args) {
```

5

int resultado = 5/0; // Error en ejecución 6

```java
System.out.println(resultado);
```

7: } 8:} Salida

Explicación del mensaje de error: • La máquina virtual de Java (JVM) ha detectado la división por 0 (error) y ha creado un objeto de la clase java.lang.ArithmeticException. El método main no es capaz de tratar dicha excepción y por tanto la JVM finaliza el programa en la línea 5 y muestra un mensaje de error con la información sobre el tipo de excepción que se ha producido.

Ejemplo 2: Conversión de cadena a entero Código: 1: /* Ejemplo 2: conversión de cadena a entero */ 2: public class Ejemplo2 {

```java
3:  public static void main(String[] args) {
```

4

```java
int num = Integer.parseInt(“23b”);
```

5

```java
System.out.println(num);
```

6:}}

V1.13.03.23 Salida: Explicación del mensaje de error: • El método Integer.parseInt(…) no puede convertir una cadena a entero ya que el formato no es el adecuado, “23b”. Por tanto se lanza una excepción de tipo java.lang.NumberFormatException. La JVM termina el programa en la línea 4 y muestra por pantalla la información sobre la excepción que se ha producido. En este caso fíjate que se indican también el lugar y la línea de cada método donde se ha producido el error, por ejemplo “java.lang.Integer.parseInt(Integer.java:668)” hasta llegar a la clase que maneja la Excepción.

Ejemplo 3: Rango de índices del array Código: 1: /* Ejemplo 3: Rango de índices del array */ 2: public class Ejemplo2 {

```java
3:  public static void main(String[] args) {
```

4

```java
int miArray = {1,2};
```

5

```java
int valor = miArray[4];
```

6: } 7:} Salida

Explicación del mensaje de error: • En este programa intentamos acceder al elemento que se encuentra en la cuarta posición de un array de 2 elementos. La JVM finaliza el programa en la línea 5 y muestra un mensaje de error sobre la excepción que se ha producido.

V1.13.03.23 Ejemplo 4: Entrada de datos incompatible Código: 1: /* Ejemplo 4: Entrada de datos incompatible */ 2: public class Ejemplo2 {

```java
3:  public static void main(String[] args) {
```

4

```java
Scanner sc = new Scanner(System.in);
```

5

```java
System.out.println(“Introduce un número entero: “);
```

6

sc.nextInt(); // Si introduces un carácter, lanza excepción. 7: } 8:} Salida

Explicación del mensaje de error: • En la entrada de datos se ha detectado un dato no compatible con el esperado por el método nextInt() de la clase Scanner (un número entero); en cambio, se introduce un caracter. La JVM finaliza el programa en la línea 6 y muestra un mensaje de error sobre la excepción que se ha producido, así como la traza de llamadas a métodos implicados en la excepción.

V1.13.03.23

### 3. Jerarquía de excepciones en Java

Java, como lenguaje de programación orientada a objetos, permite gestionar las excepciones a través de una serie de objetos de clases que heredan, en última instancia, de la clase java.lang.Throwable. Dicha clase representa cualquier fallo de ejecución independientemente de su tipo.

A continuación, veamos el esquema completo de la jerarquía

Visto que una excepción es un fallo de ejecución (recuperable) y que también un error es un fallo de ejecución (irrecuperable), las clases Error y Exception se diseñan como derivadas directas de Throwable. Por otra parte, tanto de la clase Error como Exception derivan otras subclases que especifican en mayor medida el tipo de error o excepción que se puede dar.

Nota En Java, la clase Error hace referencia a problemas serios fuera del control de la aplicación, como por ejemplo memoria insuficiente para alojar un objeto (OutOfMemoryError) Las excepciones se pueden clasificar en: • Checked: representan errores de los que puede recuperar el programa. Todas estas excepciones deben ser capturadas y manejadas en tiempo de compilación. Las clases Throwable, Exception y sus derivadas son de este tipo.

• Unchecked: representan errores de programación. Estas excepciones no deben ser forzosamente declaradas ni capturadas, aunque el programa puede terminar erróneamente. Las clases Error y RuntimeException son de este tipo.

V1.13.03.23

#### 3.1. Tabla de excepciones más frecuentes

A continuación, veamos la tabla de algunas excepciones de Java (en negrita las más comunes): Excepción Descripción Tipo IOException Fallo en operación de entrada/salida. Checked ParseException Parseo de datos incompatible. Checked InterruptedException Un hilo (thread) interrumpe a otro.

Checked ClassNotFoundException No se encuentra la clase especificada. Checked InputMismatchException Lanzada por Scanner indicando entrada no compatible. Unchecked NullPointerException Intento de usar un objeto a null. UnChecked ArrayIndexOutOfBoundsException Acceso a un índice del array fuera de rango.

UnChecked StringIndexOutOfBoundsException Acceso a un índice de la cadena fuera de rango. UnChecked NumberFormatException Al convertir una cadena a número. UnChecked ArithmeticException Al evaluar una operación aritmética. UnChecked ClasCastException Al hacer casting hacia una subclase incompatible.

UnChecked IllegalArgumentException Parámetros del método incorrectos. UnChecked

V1.13.03.23

### 4. Lanzar excepciones: throw vs throws

Una buena práctica en la programación de aplicaciones es lanzar excepciones cuando intentamos realizar acciones incorrectas o inesperadas. Recordemos que en la programación orientada a objetos es la clase la responsable de la validez de sus datos y de las acciones que se pueden o no realizar.

Por ejemplo, en una clase Coche: • Instanciar un objeto con un identificador de matrícula de coche incorrecta. • Valor negativo en el número de kilómetros. • Número de ocupantes mayor a la capacidad del coche. En este sentido, es apropiado lanzar las excepciones en los setters o en cualquier otro método de la clase que reciba datos para realizar acciones no permitidas o que violen la integridad del objeto; como por ejemplo cambiar el valor del kilometraje directamente.

Nota Lanzar una excepción no implica necesariamente que el programa termine; es una simple forma de avisar de un error. Para lanzar una excepción utilizaremos la palabra reservada throw seguido de la instanciación un objeto de tipo Exception o alguna de sus subclases.

Por ejemplo, para lanzar una excepción genérica tal y como conocemos los objetos en Java sería

```java
Exception e = new Exception();
```

throw e; Sin embargo, la forma más adecuada de hacerlo es la siguiente

```java
throw new Exception();
```

Además, el constructor de la clase Exception puede recibir una cadena de texto (String) para indicar cuál es el problema. Si la excepción no se gestiona y el programa se para, el mensaje de error se mostrará por la consola.

```java
throw new Exception(“El kilometraje no puede ser negativo”);
```

Por otra parte, también podemos lanzar excepciones específicas de Java como las que se indican en el anterior apartado de jerarquía de excepciones

```java
throw new NumberFormatException(“mensaje…”);
```

V1.13.03.23

#### 4.1. Lanzar excepciones desde métodos: throws

Para crear un método que lance excepciones debemos añadir a la cabecera del método la palabra reservada throws

```java
public static void setKilometros(int km) throws Exception {
```

if(km < 0)

```java
new throw Exception(“Kilómetros negativos no permitidos.”);
```

else

```java
this.km = km;
}
```

Hay que tener en cuenta que al lanzar una excepción se parará la ejecución de dicho método (no se ejecutará el resto del código del método) y se lanzará la excepción al método que lo llamó. Si por ejemplo, desde la función main llamamos a setKilometros(), y setKilometros() es candidato a que lance un excepción, entonces en la práctica es posible que el main lance una excepción (no directamente con un throw, sino por la excepción que nos lanza setEdad()). Por lo tanto, también tenemos que especificar en el main que se puede lanzar una excepción

```java
public static void main(String[] args) throws Exception {
```

```java
Coche c = new Coche(“Toyota”);
```

```java
c.setKilometros(10000);
```

// … más código } Nota El anterior código es un ejemplo para explicar el concepto de cómo funciona el lanzamiento de excepciones desde un método. No es nada común indicar que el método main lanza una excepción añadiendo throws en su cabecera. Lo más adecuado es capturar las excepciones en el método main o antes. En siguientes apartados estudiaremos la captura de excepciones.

Puede que un método necesite lanzar más de una excepción. Para ello, indicaremos en la cabecera del método tantas excepciones como sean necesarias separadas por comas: public Coche(String matricula, int kilometros) throws ArithmeticException, MatriculaException {

if(km < 0)

```java
new throw Exception(“Kilómetros negativos no permitidos.”);
```

if(!esMatriculaValida(matricula))

```java
new throw MatriculaException(“Matricula incorrecta”);
```

```java
this.km = km;
```

```java
this.matricula = matricula;
}
```

Nota MatriculaException sería una excepción de usuario que estudiaremos en próximos apartados.

V1.13.03.23

#### 4.2. Propagación de excepciones

Recordemos la salida del ejemplo 2

Podemos observar la pila de llamadas a métodos desde donde se produce la excepción. De manera genérica, imaginemos que en un método A llamamos a un método B, que llama a un método C, etc, hasta llegar a E. A → B → C → D → E (secuencia de llamadas de métodos) Si el método E lanza una excepción, esta le llegará a D que a su vez se la lanzará a C, etc, recorriendo el camino hasta llegar al método inicial A.

A  B  C  D  E (secuencia de lanzamiento de excepciones) Por lo tanto, como todos estos métodos pueden acabar lanzando una excepción, en sus cabeceras habrá que incluir el throws Exception (o el que corresponda según el tipo de excepción). Nota Quiero volver a recordar que no es recomendable dejar que las excepciones del programa lleguen de forma descontrolada hasta el main y termine el programa. La idea es manejar las excepciones tal y como veremos en el siguiente apartado.

V1.13.03.23

### 5. Captura y manejo de excepciones: try-catch-finally

Para la gestión de excepciones en el programa se utilizan mecanismos que funcionan en tres bloques de código: • try{}: bloque donde están las instrucciones que pueden provocar alguna excepción. • catch{}: bloque donde se capturará la excepción lanzada en el bloque try {} que tiene asociado.

• finally{}: bloque opcional. Se ejecutará tanto si se lanza o no una excepción. Se utiliza normalmente para tareas de limpieza (cerrar ficheros, entrada/salida, etc). Estructura del bloque try-catch-finally: try {

// Instrucciones que pueden provocar alguna excepción }

```java
catch (NombreDeExcepcion1 e) {
```

// Instrucción a realizar si se produce la excepción NombreDeExcepcion1 }

```java
catch (NombreDeExcepcion2 e) {
```

// Instrucción a realizar si se produce la excepción NombreDeExcepcion2 } // Aquí pueden haber más bloques catch

```java
catch (NombreDeExcepcionX e) {
```

// Instrucción a realizar si se produce la excepción NombreDeExcepcionX } finally {

// Bloque opcional, se ejecuta tanto si se produce como si no una excepción } Pueden haber de uno a varios bloques catch para captura cada una de las excepciones que se produzcan en el bloque try. Si reescribimos el código del ejemplo 1 (división entre cero), visto en el apartado 2, para tratar la excepción de forma general quedaría así

/* Ejemplo 1: Dividiendo entre cero con try-catch y excepción genérica*/

```java
public class Ejemplo1 {
```

```java
public static void main(String[] args) {
```

try {

int resultado = 5/0; // Lanza excepción

```java
System.out.println(resultado);
```

}

```java
catch(Exception e) {
```

```java
System.out.println(“Se ha capturado excepción.”);
```

}

} }

V1.13.03.23 Sin embargo, el tratamiento de excepciones debe hacerse de la más concreta a la más genérica dentro del bloque catch. Si observamos la jerarquía de excepciones, encontramos la clase java.lang.ArithmeticException, la cual es la más adecuada para el ejemplo anterior

/* Ejemplo 1: Dividiendo entre cero con try-catch y excepción concreta*/

```java
public class Ejemplo1 {
```

```java
public static void main(String[] args) {
```

try {

int resultado = 5/0; // Lanza excepción

}

```java
catch(ArithmeticException e) {
```

```java
System.out.println(“Se ha capturado excepción aritmética.”);
```

}

} } También podemos capturar varias excepciones; en este caso, la primera que se produzca será la primera que se capture. Si añadimos el caso del ejemplo 3 (rango de índices del array), visto en el apartado 2, tendremos el siguiente código para tratar varias excepciones

```java
public class Ejemplo1 {
```

```java
public static void main(String[] args) {
```

```java
int miArray = {1,2};
```

try {

int resultado = 5/0; // Lanza excepción

```java
int valor = miArray[4];
```

}

```java
catch(ArithmeticException e) {
```

```java
System.out.println(“Se ha capturado excepción aritmética.”);
```

}

```java
catch(IndexOutOfBoundsException e) {
```

```java
System.out.println(“Se ha capturado excepción de índice fuera de
```

```java
rango”);
```

}

} }

#### 5.1. Mensajes de la excepción

Una excepción es un objeto que, como toda clase, contiene ciertos miembros a los que podemos acceder para obtener información. Algunos de los más destacados son: • String toString(): devuelve “TipoExcepción: mensaje”. • Class<?> getClass(): devuelve la clase a la que pertenece la excepción.

• String getMessage(): devuelve el mensaje con el que se crea la excepción.

V1.13.03.23 • printStackTrace(): Imprime por la salida de error el objeto desde el que se invoca con una traza de las llamadas a los miembros desde los que se ha producido la excepción. Es muy útil para depurar programas. Un ejemplo de uso de alguno de estos métodos

```java
public class Ejemplo1 {
```

```java
public static void main(String[] args) {
```

```java
int miArray = {1,2};
```

try {

int resultado = 5/0; // Lanza excepción

```java
int valor = miArray[4];
```

}

```java
catch(ArithmeticException e) {
```

```java
System.out.println(“Se ha capturado excepción aritmética.”);
```

}

```java
catch(IndexOutOfBoundsException e) {
```

```java
System.out.println(“Se ha capturado excepción de índice fuera de
```

```java
rango”);
```

```java
System.out.println(e.getMessage());
```

```java
System.out.println(e.getStackTrace());
```

}

} }

V1.13.03.23

### 6. Creación de excepciones de usuario

Existe otro tipo de excepciones que no pueden ser advertidas por el compilador. Para que podamos tratarlas será necesario añadir excepciones propias, es decir, clases que extiendan de la clase Exception: a estas excepciones se les conoce como excepciones de usuario.

Para crear excepciones de usuario podemos seguir los siguientes pasos

- Definir una clase propia que herede de la clase Exception.
- Crear un constructor con un String como argumento.
- Dentro del constructor llamar al constructor super(), pasándole el String recibido.

A continuación, vamos a detallar un ejemplo de creación de una clase que llamaremos ExcepcionIntervalo para tratar excepciones que se produzcan cuando haya un entero que esté fuera de un rango determinado de valores

```java
public class ExcepcionIntervalo extends Exception {
```

// Constructor

```java
public ExcepcionIntervalo(String msg) {
```

```java
super(msg);
```

} } Y con esto ya tendríamos nuestra excepción de usuario lista para utilizarse. Para poder utilizar la excepción de usuario, debemos utilizarla o lanzarla. Así que en nuestro código debemos detectar cuándo se produce la situación anómala y lanzarla. El siguiente esquema de código refleja esta idea

```java
public void algunMetodo() throws nuevaExcepcion {
```

// con throws propagamos la excepción hacia donde se ha llamado el método

// código del método

if (situaciónAnómala) // La comprobación estará dentro de un método

```java
throw new nuevaExcepcion(“Descripcion del Error”);
```

// con throw se lanza la Excepción.

// más código } Concretamente, el código para lanzar la excepción ExcepcionIntervalo que hemos creado sería el siguiente

```java
public static void rango(int num) throws ExcepcionIntervalo {
```

```java
if (num < 0 || num > 100) {
```

```java
throw new ExcepcionIntervalo(“Número fuera del intérvalo”);
```

} }

V1.13.03.23 Debemos tener en cuenta lo siguiente: • El método que puede lanzar (throw) la excepción debe dejarla salir (throws). • El lanzamiento de las excepciones siempre estará dentro de las sentencias condicionales. • La descripción (mensaje) debe ser breve y clarificadora.

Por otra parte, si intentamos llamar a este método rango(…) sin más, el IDE dará error, diciéndonos que la excepción no está tratada (unhandled); esto se debe a que el método la puede lanzar, pero desde donde llamamos al método no estamos tratando la excepción. Por ejemplo

```java
public class Test {
```

```java
public static void main(String args[]) {
```

rango(200); // Dará error “unhandled exception type”

}

// Método rango… } En la llamada a rango(10) dará error y por tanto debemos tratar la excepción

```java
public class Test {
```

```java
public static void main(String args[]) {
```

try {

```java
rango(200);
```

}

```java
catch(ExcepcionIntervalo e) {
```

```java
System.out.println(e.getMessage());
```

}

}

// Método rango… } Salida por pantalla: Número fuera del intérvalo

V1.13.03.23

### 7. Recomendaciones

A continuación, una serie de recomendaciones sobre la buena práctica en la gestión de excepciones en Java: • No escatimar en el uso de la propagación de excepciones. Moraleja: lanza pronto, captura tarde. • Usar la excepción más adecuada en cada situación, evitar las excepciones genéricas.

• Las excepciones tienen un coste muy alto respecto a las comprobaciones sencillas (con condicionales). Moraleja: usar excepciones para circunstancias excepcionales. • Evitar bloques catch vacíos; siempre incluir al menos un mensaje informando del error o imprimir un rastro completo de este.

• Liberar recursos en el bloque finally. • Si ya existe una excepción no es necesario personalizarla.

V1.13.03.23

### 8. Bibliografía

Libro “Core Java Volumen I: Fundamentals”, Cary S. Horstmann Apuntes de Programación del CEEDCV (Licencia Creative Common) Apuntes de José Chamorro del CFGS DAW del https://docs.oracle.com/

---

## 13.2 Códigos de clase

### 📄 TestCoche.java

```java
package ud09Excepciones;

public class TestCoche {

	
	public static void main(String[] args) {
		
		try {
			Coche c = new Coche(-20);
		} 
		catch(KilometrosNegativosException e) {
			//System.out.println("ERROR");
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		
	}

}
```

### 📄 Test5.java

```java
package ud09Excepciones;

public class Test5 {

	public static void main(String[] args) {
		
		metodoA();
		
	}
	
	public static void metodoA() {
		System.out.println("A");

		try {
			metodoB();
		} catch (Exception e) {
			//System.out.println("ERROR. Algo ha pasado...");
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}
	
	public static void metodoB() throws Exception {
		System.out.println("B");
		metodoC();
	}
	
	public static void metodoC() throws Exception {
		System.out.println("C");
		throw new Exception("ERROR. Excepción ocurrida en C");
	}

}
```

### 📄 Test4.java

```java
package ud09Excepciones;

public class Test4 {

	public static void main(String[] args) {

		try {
			metodoA();
		} catch (Exception e) {
			//System.out.println("ERROR. Algo ha pasado...");
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}
	
	public static void metodoA() throws Exception {
		System.out.println("A");
		metodoB();
	}
	
	public static void metodoB() throws Exception {
		System.out.println("B");
		metodoC();
	}
	
	public static void metodoC() throws Exception {
		System.out.println("C");
		throw new Exception("ERROR. Excepción ocurrida en C");
	}

}
```

### 📄 Test3.java

```java
package ud09Excepciones;

public class Test3 {
	
	public static void main(String[] args) {

		metodoA();
		/*try {
			metodoA();
		} catch (NumberFormatException e) {
			System.out.println("ERROR. Operación no permitida.");
			//e.getStackTrace();
		}*/
	}
	
	public static void metodoA() throws ArithmeticException {
		int a = 3;
		int b = 0;
		
		if (b == 0) {
			//ArithmeticException ae = new ArithmeticException();
			throw new ArithmeticException();
		} else {
			System.out.println(a/b);
		}
			
	}
}
```

### 📄 KilometrosNegativosException.java

```java
package ud09Excepciones;

public class KilometrosNegativosException 
	extends Exception{

	public KilometrosNegativosException() {
		super("ERROR. KM negativos");
	}
	
	public KilometrosNegativosException(String msg) {
		super(msg);
	}
}
```

### 📄 Coche.java

```java
package ud09Excepciones;

public class Coche {
	private int km;
	
	public Coche(int km) throws KilometrosNegativosException{
		if (km < 0) {
			throw new KilometrosNegativosException();
		} else {
			this.km = km;
		}
	}
}
```

### 📄 Test2.java

```java
package ud09Excepciones;

public class Test2 {
	public static void main(String[] args) {
		int a = 5;
		int b = 0;
		int resultado; 
		
		try {
			resultado = a / b;
		} catch(ArithmeticException e) {
			System.out.println("ERROR. No se puede dividir por cero.");
			//e.printStackTrace();
			System.out.println(e.getMessage());
		} catch(Exception e) {
			System.out.println("ERROR. Se ha dado un error inesperado.");
		} finally {
			System.out.println("Ejecuto siempre esto se de o no excepción");
		}
		
		System.out.println("FIN DEL PROGRAMA");
	
	}
}
```

### 📄 Test1.java

```java
package ud09Excepciones;

public class Test1 {
	public static void main(String[] args) {
		int a = 5;
		int b = 0;
		int resultado; 
		
		// División por cero no permitida
		//if (b == 0)
		//	System.out.println("ERROR. No se puede dividir por cero.");
		//else 
			resultado = a / b;
		
		// Formato numérico no adecuado
		int c = Integer.parseInt("23");
		
		System.out.println(c);
		
		// Arrays fuera de rango
		int[] numeros = new int[3];
		
		System.out.println(numeros[5]);
		
	}
}
```

---

## 13.3 Ejercicios A

V2.06.03.24

### 1. Ejercicios

Nota En estos ejercicios es fundamental hacer varias pruebas para comprobar y comprender qué sucede en cada caso (según el tipo de excepción, cuando no hay excepciones, etc.). A no ser que se indique lo contrario, al lanzar una excepción deberás incluir un mensaje breve sobre el error (new Exception(“...”)), y cuando captures excepciones deberás mostrar la pila de llamadas (printStackTrace()).

> **✍️ Ejercicio 1. Implementa un programa que pida al usuario un valor**
> Ejercicio 1. Implementa un programa que pida al usuario un valor entero utilizando un nextInt() (de Scanner) y luego muestre por pantalla el mensaje “Valor introducido: …”. Se deberá tratar la excepción InputMismatchException que lanza nextInt() cuando no se introduce un entero válido. En tal caso se mostrará el mensaje “Valor introducido incorrecto”.

> **✍️ Ejercicio 2. Implementa un programa que pida dos valores enteros**
> Ejercicio 2. Implementa un programa que pida dos valores enteros (a y b) utilizando un nextInt() (de Scanner), calcule su división (a/b) y muestre el resultado por pantalla. Se deberán tratar de forma independiente las dos posibles excepciones, InputMismatchException y ArithmeticException, mostrando en cada caso un mensaje de error diferente en cada caso.

> **✍️ Ejercicio 3. Implementa un programa que cree un array tipo double**
> Ejercicio 3. Implementa un programa que cree un array tipo double de tamaño 5 y luego, utilizando un bucle, pida cinco valores por teclado y los introduzca en el array. Tendrás que manejar la posible (o posibles) excepciones y seguir pidiendo valores hasta rellenar completamente el array.

> **✍️ Ejercicio 4. Implementa un programa que solicite al usuario ingre**
> Ejercicio 4. Implementa un programa que solicite al usuario ingresar 5 números separados por espacios en una sola línea. El programa debe leer la entrada del usuario, separar los números y almacenarlos en un array de tipo double. Luego, el programa debe imprimir los números almacenados en el array. Si el usuario ingresa más de 5 números, el programa debe manejar la excepción ArrayIndexOutOfBoundsException e imprimir "ERROR. Ha insertado valores fuera de rango en el array." y terminar. Finalmente, el programa debe imprimir "Fin del programa".

> **✍️ Ejercicio 5. Implementa un programa que cree un vector de enteros**
> Ejercicio 5. Implementa un programa que cree un vector de enteros de tamaño N (número aleatorio entre 1 y 100) con valores aleatorios entre 1 y 10. Luego se le preguntará al usuario qué posición del vector quiere mostrar por pantalla, repitiéndose una y otra vez hasta que se introduzca un valor negativo. Maneja todas las posibles excepciones. En caso de producirse una expceción, muestra mensaje de excepción, la traza y finaliza el programa.

> **✍️ Ejercicio 6. Implementa un programa con tres métodos: • void impr**
> Ejercicio 6. Implementa un programa con tres métodos: • void imprimePositivo(int positivo): Imprime el valor p. Lanza una Exception si p < 0 • void imprimeNegativo(int negativo): Imprime el valor n. Lanza una Exception si p >= 0

V2.06.03.24 • La función main para realizar pruebas. Puedes llamar a ambos métodos varias veces con distintos valores, hacer un bucle para pedir valores por teclado y pasarlos a las funciones, etc. Maneja las posibles excepciones. Ejercicio 7. Crea una excepción de usuario llamada NegativoPositivoExcepcion y modifica el código del ejercicio 5 para utilizar tu excepción personalizada en vez de la excepción genérica.

### 2. Bibliografía

Adaptación de los ejercicios prácticos del CEEDCV.

---

## 13.4 Ejercicios B

Programación

### UD 9: Gestión de excepciones

- Ejercicios

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS Gestión de excepciones Programación

Ejercicio 1 Escribir una clase de utilidades LecturaValidada que permita

- Leer un número entero.
- Leer un número entero en un rango determinado.
- Leer un número real.
- Leer un número real positivo.
- Leer un número real en un rango determinado.

Se deben prever todos los errores posibles que puedan suceder y tratarlos en los métodos correspondientes. Programación

Ejercicio 2 Dada la clase Figura que contiene los atributos String color, String nombre y el método double area(), se ha definido el método equals de la manera siguiente

```java
public boolean equals(Object o) {
Figura f = (Figura) o;
```

return this.color.equals(f.color) && this.nombre.equals(f.nombre) &&

```java
this.area() == f.area();
}
```

Sin embargo, esto no es del todo correcto. Si se ejecutasen las siguientes instrucciones

```java
Figura f1 = new Figura("rojo","cuadrado");
Figura f2 = new Figura("rojo","cuadrado");
Double d = new Double(1.0);
String k = "Hello";
boolean b1 = f1.equals(f2);
boolean b2 = d.equals(k);
boolean b3 = k.equals(f2);
boolean b4 = f1.equals(d);
```

b1, b2 y b3 se evaluarían, respectivamente, a true, false y false pero al evaluar b4 se produciría la excepción unchecked ClassCastException. Modificar el método equals para que si se produce la excepción unchecked ClassCastException ésta sea capturada y tratada en el cuerpo de dicho método y se comporte como el equals definido en la clase Object.

Programación

Ejercicio 3 Se está implementando una aplicación para la gestión de una agenda telefónica. Se dispone de un método menu que muestra por pantalla un menú de opciones

```java
private int menu(Scanner teclado) {
System.out.println(" Menú de Agenda ");
System.out.println("--------------------------");
System.out.println("1.- Cargar Fichero Agenda");
System.out.println("2.- Guardar Fichero Agenda");
System.out.println("3.- Buscar Nombre");
System.out.println("4.- Insertar Nuevo Nombre");
System.out.println("5.- Eliminar Nombre");
System.out.println("0.- Salir");
System.out.print("Seleccione [0..5]: ");
return teclado.nextInt();
}
```

Dicho método es invocado desde otro método como sigue

```java
Scanner tec = new Scanner(System.in);
```

...

```java
int opcion = menu(tec);
switch(opcion) {
```

case 0: ... case 1: ... case 2: ... case 3: ... case 4: ... case 5: ... } Programación

Ejercicio 3 Cuando el programa es probado por el usuario, se detecta que, en ocasiones, el programa aborta su ejecución porque el usuario se equivoca y escribe números que no están en el menú o texto en lugar de dichos números. Se pide

- Definir una nueva excepción de usuario NumeroFueraDeRango para identificar

el error de que el usuario haya escrito un número de opción en el menú fuera del rango [0..5].

- Modificar el método menu para que, en caso de que el número introducido esté

fuera del rango [0..5], se lance la nueva excepción conteniendo como mensaje “la opción elegida ha sido X”.

- Modificar el fragmento de código dado para que se detecte si el número

introducido está en el rango correcto y si no es así se vuelva a presentar el menú hasta que el usuario acierte.

- Modificar el fragmento de código dado para que también se detecte si el

usuario ha introducido un valor que no sea un entero y si no es así se vuelva a presentar el menú. Programación

Ejercicio 4 Dado el siguiente fragmento de código

```java
static void metodo1() throws Excepcion1, Excepcion2 {
```

... (1) }

```java
static void metodo2(){
try { ... (2) }
catch (IndexOutOfBoundsException e) {
System.out.println("texto0");
}
}
static void metodo3() throws Excepcion3, Excepcion1 {
```

... (3) }

```java
static void main(String[] args) {
```

try {

```java
metodo1();
metodo2();
metodo3();
}
catch (Excepcion1 e) { System.out.println("texto1"); }
catch (Excepcion2 e) { System.out.println("texto2"); }
catch (Excepcion3 e) { System.out.println("texto3"); }
catch (InputMismatchException e) { System.out.println("texto4"); }
finally { System.out.println("texto5"); }
}
```

Programación

Ejercicio 4 Indicar qué aparece por pantalla si en los puntos suspensivos marcados se producen las siguientes excepciones

- En (1) la excepción de usuario Excepcion1.
- En (1) la excepción unchecked IndexOutOfBoundsException.
- En (1) la excepción de usuario Excepcion2.
- En (2) la excepción unchecked InputMismatchException.
- En (2) la excepción unchecked IndexOutOfBoundsException.

f ) En (3) la excepción de usuario Excepcion3.

- En (3) la excepción unchecked InputMismatchException.

Programación

Ejercicio 5 Ampliar la clase LecturaValidada del ejercicio 1 para que permita leer un String que deberá pertenecer a los existentes previamente en un array de elementos de dicho tipo. En caso de que el String leído exista en el array, el método de lectura que se construya deberá devolver el índice con la posición en el array del String leído o, en caso de no existir, deberá lanzar la excepción ElementoNoExistente que se habrá definido previamente.

Por ejemplo, dada la declaración de la constante array

```java
public static final String[] COMPOSITORES = {"Bach","Haydn","Mozart","Beethoven","Brahms",
```

"Mahler","Bartok","Webern"}; El método que se pide deberá, si se utiliza el array COMPOSITORES al ejecutarlo, leer un String desde el teclado, devolviendo la posición del texto encontrado en el array (en el caso del ejemplo, el nombre del compositor) o lanzar la excepción correspondiente (ElementoNoExistente), en caso de que éste no exista.

Programación
