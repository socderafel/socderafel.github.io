---
layout: default
title: "UD2 — Entrada y salida de información · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD2 — Entrada y salida de información"
prev_url: "../ut01/ut0104.html"
prev_label: "⬅️ 1.4 Estilo de codificacion"
next_url: "../ut02/ut0201.html"
next_label: "2.1 Entrada y salida de información ➡️"
---

# 📘 UD2 — Entrada y salida de información (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 Entrada y salida de información**](./ut0201.md)
- [**2.2 Colores**](./ut0202.md)
- [**2.3 ClasePrintf**](./ut0203.md)

---

# 2.1 Entrada y salida de información

> **🔗 Recurs Web: Tabla código ASCII**
> [**🌐 Obrir recurs extern (https://concepto.de/ascii/) ↗️**](https://concepto.de/ascii/)

> **🔗 Recurs Web: Web Baeldung: Uso de printf (Inglés)**
> [**🌐 Obrir recurs extern (https://www.baeldung.com/java-printstream-printf) ↗️**](https://www.baeldung.com/java-printstream-printf)

> **🔗 Recurs Web: UC3M: Uso de printf (Castellano)**
> [**🌐 Obrir recurs extern (https://www.it.uc3m.es/pbasanta/asng/course_notes/input_output_printf_es.html) ↗️**](https://www.it.uc3m.es/pbasanta/asng/course_notes/input_output_printf_es.html)

> **🔗 Recurs Web: Caracteres UNICODE: Box Drawing (para crear tablas)**
> [**🌐 Obrir recurs extern (https://en.wikipedia.org/wiki/Box_Drawing) ↗️**](https://en.wikipedia.org/wiki/Box_Drawing)

---

Programación

### UD 2: Entrada y salida de información

Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web Jose Chamorro Molina Actualizado por: José Ramón Simó

Programación

ORDEN 60/2012, de 25 de septiembre, de la Conselleria de Educación, Formación y Empleo por la que se establece para la Comunitat Valenciana el currículo del ciclo formativo de Grado Superior correspondiente al título de Técnico Superior en Desarrollo de Aplicaciones Web. [2012/9149] Contenidos

5.- Lectura y escritura de información: 5.1.− Programación de la consola: entrada y salida de información. 5.2.− Concepto de flujo. 5.3.− Tipos de flujos. Flujos de bytes y de caracteres. 5.4.− Flujos predefinidos. 5.5.− Clases relativas a flujos. 5.6.− Utilización de flujos.

5.7.− Entrada desde teclado. 5.8.− Salida a pantalla. Real Decreto 686/2010, de 20 de mayo, por el que se establece el título de Técnico Superior en Desarrollo de Aplicaciones Web y se fijan sus enseñanzas mínimas. Resultados de aprendizaje

- Realiza operaciones de entrada y salida de información, utilizando procedimientos específicos del lenguaje y librerías de clases.

Criterios de evaluación: 5.a) Se ha utilizado la consola para realizar operaciones de entrada y salida de información. 5.b) Se han aplicado formatos en la visualización de la información. 5.c) Se han reconocido las posibilidades de entrada / salida del lenguaje y las librerías asociadas.

Competencias profesionales, personales y sociales

- Adaptarse a las nuevas situaciones laborales, manteniendo actualizados los conocimientos científicos, técnicos y tecnológicos relativos a

su entorno profesional, gestionando su formación y los recursos existentes en el aprendizaje a lo largo de la vida y utilizando las tecnologías de la información y la comunicación. Entrada y salida de información

Programación

Entrada y salida de información 1.− Programación de la consola: entrada y salida de información 2.− Concepto de flujo 3.− Tipos de flujos. Flujos de bytes y de caracteres 4.− Flujos predefinidos 5.− Clases relativas a flujos 6.− Utilización de flujos 7.− Entrada desde teclado 8.− Salida a pantalla

1.− Programación de la consola Programación

1.− Programación de la consola Una aplicación de consola es un programa informático diseñado para ser utilizado a través de una interfaz de solo texto, como un terminal de texto, la interfaz de línea de comando de algunos sistemas operativos (Unix, DOS, etc.), o la consola Win32 en Microsoft Windows y la terminal en MacOS.

Un usuario generalmente interactúa con una aplicación de consola usando solo un teclado y una pantalla, a diferencia de las aplicaciones de IGU, que normalmente requieren el uso de un mouse u otro dispositivo señalador. Muchas aplicaciones de consola, como los intérpretes de línea de comandos, son herramientas de línea de comandos, pero también existen numerosos programas de interfaz de usuario basada en texto.

Programación

1.− Programación de la consola A medida que la velocidad y la facilidad de uso de las aplicaciones de IGU han mejorado con el tiempo, el uso de las aplicaciones de consola ha disminuido en gran medida, pero no ha desaparecido. Algunos usuarios simplemente prefieren las aplicaciones basadas en consola, mientras que algunas organizaciones aún dependen de las aplicaciones de consola existentes para manejar las tareas clave de procesamiento de datos.

Programación

1.− Programación de la consola La capacidad de crear aplicaciones de consola se mantiene como una característica de los entornos de programación modernos porque simplifica enormemente el proceso de aprendizaje de un nuevo lenguaje de programación al eliminar la complejidad de una interfaz gráfica de usuario.

Para tareas de procesamiento de datos y administración de computadoras, es posible que no haya necesidad de una interfaz de usuario bastante gráfica, dejando la aplicación más ágil, más rápida y más fácil de mantener. Coloreado de texto El texto que se muestra por pantalla se puede colorear (únicamente en un terminal de Linux), para ello es necesario insertar unas secuencias de caracteres - que indican el color con el que se quiere escribir – justo antes del propio texto.

```java
String rojo    = "\033[31m";
String verde   = "\033[32m";
String naranja = "\033[33m";
String azul    = "\033[34m";
System.out.print(rojo + " rojo " + verde + " verde");
System.out.print(naranja + " naranja " + azul + " azul");
```

Programación

2.− Concepto de flujo Programación

2.− Concepto de flujo ✓ En Java se define la abstracción de stream (flujo) para tratar la comunicación de información entre el programa y el exterior.

- Entre una fuente y un destino fluye una secuencia de datos .

✓ Los flujos actúan como interfaz con el dispositivo o clase asociada.

- Operación independiente del tipo de datos y del dispositivo.

- Mayor flexibilidad (p.e. redirección, combinación).

- Diversidad de dispositivos (fichero, pantalla, teclado, red, ...).

- Diversidad de formas de comunicación

- Modo de acceso: secuencial, aleatorio

- Información intercambiada: binaria, caracteres, líneas

Programación

2.− Concepto de flujo Programación

3.− Tipos de flujos: Flujos de bytes y de caracteres. Programación

3.− Tipos de flujos java.io Flujos de bytes

clases InputStream y OutputStream Flujos de caracteres

clases Reader y Writer Se puede pasar de un flujo de bytes a uno de caracteres con InputStreamReader y OutputStreamWriter Programación

4.− Flujos predefinidos Programación

4.− Flujos predefinidos System.in Instancia de la clase InputStream: flujo de bytes de entrada Métodos

- read() permite leer un byte de la entrada como entero

- skip(n ) ignora n bytes de la entrada

- available() número de bytes disponibles para leer en la entrada

System.out Instancia de la clase PrintStream: flujo de bytes de salida Métodos para impresión de datos

- print(), println(), printf()

- flush() vacía el buffer de salida escribiendo su contenido

System.err Funcionamiento similar a System.out Se utiliza para enviar mensajes de error (por ejemplo a un fichero de log o a la consola) Programación

5.− Clases relativas a flujos Programación

5.− Clases relativas a flujos Las clases del paquete java.io relativas a flujos: BufferedInputStream: permite leer datos a través de un flujo con un buffer intermedio. BufferedOutputStream: implementa los métodos para escribir en un flujo a través de un buffer. FileInputStream: permite leer bytes de un fichero.

FileOutputStream: permite escribir bytes en un fichero o descriptor. StreamTokenizer: esta clase recibe un flujo de entrada, lo analiza (parse) y divide en diversos pedazos (tokens), permitiendo leer uno en cada momento. StringReader: es un flujo de caracteres cuya fuente es una cadena de caracteres o string.

StringWriter: es un flujo de caracteres cuya salida es un buffer de cadena de caracteres, que puede utilizarse para construir un string. Programación

5.− Clases relativas a flujos Flujos de bytes Programación

5.− Clases relativas a flujos Flujos de caracteres Programación

6.− Utilización de flujos Programación

6.− Utilización de flujos Lectura

### 1. Abrir un flujo a una fuente de datos (creación del objeto stream)

- Teclado

- Fichero

- Socket remoto

### 2. Mientras existan datos disponibles

- Leer datos

### 3. Cerrar el flujo (método close)

Escritura

- Pantalla

- Fichero

- Socket local

- Escribir datos

> **⚠️ Nota: para los flujos estándar ya se encarga el sistema...**
> Nota: para los flujos estándar ya se encarga el sistema de abrirlos y cerrarlos Programación

6.− Utilización de flujos Ejemplo: try {

```java
BufferedReader reader = new BufferedReader(new FileReader("nombrefichero"));
String linea = reader.readLine();
```

```java
while(linea != null) {
```

// procesar el texto de la línea

```java
linea = reader.readLine();
}
reader.close();
}
catch(FileNotFoundException e) {
```

// no se encontró el fichero }

```java
catch(IOException e) {
```

// algo fue mal al leer o cerrar el fichero } *Este punto se verá de manera más detallada en la UD10 - Lectura y escritura de información Programación

7.− Entrada desde teclado Programación

7.− Entrada desde teclado La clase Scanner de Java provee métodos para leer valores de entrada de varios tipos y está localizada en el paquete java.util. Los valores de entrada pueden venir de varias fuentes, incluyendo valores que se entren por el teclado o datos almacenados en un archivo.

Tenemos que crear un objeto de la clase Scanner asociado al dispositivo de entrada. Si el dispositivo de entrada es el teclado escribiremos

```java
Scanner teclado = new Scanner(System.in);
```

Se ha creado el objeto teclado asociado al teclado representado por System.in Una vez hecho esto podemos leer datos por teclado. Programación

7.− Entrada desde teclado Programación

Principales constructores y métodos de la clase Scanner public Scanner (InputStream source) Crea un nuevo Scanner a partir de un flujo de entrada de datos como es el caso de System.in (para poder leer desde teclado).

```java
public String next ()
public String next (String pattern)
```

Obtiene el siguiente elemento leído del teclado como un String (si coincide con el patrón especificado). Lanza NoSuchElementException si no quedan más elementos por leer.

```java
public String nextLine ()
```

Se lee el resto de línea completa, descartando el salto de línea. Devuelve el resultado como un String. Lanza NoSuchElementException si no quedan más elementos por leer.

```java
public int nextInt ()
```

public long nextLong () public short nextShort () public byte nextByte () public float nextFloat () public double nextDouble ()

```java
public boolean nextBoolean ()
```

Devuelve el siguiente elemento como un int siempre que se trate de un int. Ídem para long, short, byte, float, double y boolean. Lanza InputMismatchException en caso de no poder obtener un valor del tipo apropiado. Lanza NoSuchElementException si no quedan más elementos por leer.

```java
public boolean hasNext ()
```

Devuelve true si queda algún elemento por leer.

```java
public boolean hasNextLine ()
```

Devuelve true si queda alguna línea por leer.

```java
public boolean hasNextInt ()
public boolean hasNextLong ()
public boolean hasNextShort ()
public boolean hasNextByte ()
public boolean hasNextFloat ()
public boolean hasNextDouble ()
public boolean hasNextBoolean ()
```

Devuelve true si el siguiente elemento a obtener se puede interpretar como un int. Ídem para long, short, byte, float, double y boolean. public Scanner useLocale (Locale l) Establece la configuración local del Scanner a la configuración especificada por el Locale l.

7.− Entrada desde teclado Ejemplo

```java
Scanner sc = new Scanner(System.in);
int numClase;
String nombre;
```

double nota;

```java
System.out.println("Introduce el número de clase:");
numClase = sc.nextInt();
```

//NOTA: esta línea es para capturar el retorno de carro

```java
sc.nextLine();
System.out.println("Introduce el nombre del alumno:");
nombre = sc.nextLine();
System.out.println("Introduce la nota del exámen:");
nota = sc.nextDouble();
```

Programación

8.− Salida a pantalla Programación

8.− Salida a pantalla Salida por pantalla

```java
System.out.println
```

```java
System.out.print
```

Salida por pantalla formateada

```java
System.out.printf
```

Programación

8.− Salida a pantalla Imprimir números enteros con System.out.printf

…

//Declaración de variables

```java
int a = 8;
int b = 3;
int resultado = 0;
```

//%d se sustituye por la variable entera, resultado //%n indica un salto de línea

```java
resultado = (a + b);
System.out.printf(“La suma es: %d %n”, resultado);
resultado = (a - b);
System.out.printf("La resta es: %d %n", resultado);
```

… Programación

8.− Salida a pantalla Imprimir números decimales con System.out.printf

…

//%f se sustituye por la variable decimal, res //2.6666666666666667

```java
res = (double) a / b;
System.out.printf("La división es: %f\n", res);
```

//Se pueden imprimir diferentes variables en una misma instrucción

```java
System.out.printf("La división entre %d y %d es igual a %f \n", a, b, res);
```

//2,67

```java
System.out.printf("%.2f %n",  res);
```

// 2,67

```java
System.out.printf("%5.2f %n", res);
```

// 2,667

```java
System.out.printf("%7.3f %n", res);
```

//002,667

```java
System.out.printf("%07.3f %n", res);
```

// 2,6667

```java
System.out.printf("%10.4f %n", res);
```

//2,667

```java
System.out.printf ("%5.3f %n", res);
```

// 2,66667

```java
System.out.printf ("%10.5f %n", res);
```

//0000000003

```java
System.out.printf("%010.0f %n", res);
```

… Programación

8.− Salida a pantalla Imprimir texto con System.out.printf

…

//%s se sustituye por la variable de texto, imprime en minúsculas //%S se sustituye por la variable de texto, imprime en mayúsculas //El salto de línea se puede indicar con \n o %n

```java
String texto = "Mayor";
```

//Imprime: El resultado es Mayor

```java
System.out.printf("El resultado es: %s \n", texto);
```

//Imprime: El resultado es MAYOR

```java
System.out.printf("El resultado es: %S %n", texto);
```

… Programación

8.− Salida a pantalla Uso de la clase DecimalFormat

…

```java
DecimalFormat formateador = new DecimalFormat("####.####");
```

//Imprime el número pasado como parámetro con cuatro decimales, es decir: 7,1234

```java
System.out.println(formateador.format(7.12342383));
formateador = new DecimalFormat("0000.0000");
```

//Imprime con 4 cifras enteras y 4 decimales: 0001,8200

```java
System.out.println(formateador.format (1.82));
```

//Redondeo

```java
double aa = 1.2345;
double bb = 1.2356;
formateador = new DecimalFormat(“#.##”);
System.out.println(formateador.format( aa ));   // La salida es 1,23
System.out.println(formateador.format( bb ));   // La salida es 1,24
```

//Porcentajes

```java
formateador = new DecimalFormat(“###.##%”);
```

// Imprime: 68,44%

```java
System.out.println (formateador.format(0.6844));
```

//Simbolos

```java
DecimalFormatSymbols simbolos = new DecimalFormatSymbols();
simbolos.setDecimalSeparator(‘.’);
formateador = new DecimalFormat(“####.####”, simbolos);
```

// Imprime: 3.4324

```java
System.out.println (formateador.format (3.43242383));
```

… Programación

Bibliografía Programación

Bibliografía ✓ Aprende JAVA con ejercicios. Edición 2018. Luis José Sánchez. ✓ Empezar a programar usando Java. 2ª edición. Universitat Politècnica de València ✓ Apuntes de la asignatura Ingeniería del Software de la Universitat Politècnica de València. ✓ https://github.com/statickidz/TemarioDAW ✓ https://es.stackoverflow.com ✓ https://en.wikipedia.org/wiki/Console_application Programación

---

# 2.2 Colores

```java
import java.util.Scanner;

public class Colores {

	static final int ROJO     = 1;
	static final int VERDE    = 2;
	static final int AMARILLO = 3;
	static final int AZUL     = 4;
	static final int MORADO   = 5;
	static final int TURQUESA = 6;
	static final int BLANCO   = 7;
	
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		boolean continuar = true;
		int color;
		String texto;
		
		while (continuar) {
			
			imprimirMenu();
		
			color = sc.nextInt(); sc.nextLine();
		
			if (color == 0) {
				continuar = false;
				System.out.println("Hasta pronto!");
			}
			else {
				System.out.println("Dime el texto que quieres mostrar:");
				
				texto = sc.nextLine();
				
				System.out.println(color(color) + texto + color(BLANCO));	
				
				//NOTA: ver la diferncia entre la línea anterior y la comentada
				//      comentad la linea 36 y descomentar la linea 40 para ver la diferencia
				//System.out.println(color(color) + texto );
			}			
		}
	}

	public static String color(int c) {
		
		String color = "";
		switch (c) {
		case ROJO:     color = "\033[31m"; break;
		case VERDE:    color = "\033[32m"; break;
		case AMARILLO: color = "\033[33m"; break;
		case AZUL:     color = "\033[34m"; break;
		case MORADO:   color = "\033[35m"; break;
		case TURQUESA: color = "\033[36m"; break;
		case BLANCO:   color = "\033[37m"; break;		
		}		
		return color;
	}
	
	public static void imprimirMenu() {
				
		System.out.println("Dime en que color quieres mostrar el texto:");
		System.out.println("1.- Rojo");
		System.out.println("2.- Verde");
		System.out.println("3.- Amarillo");
		System.out.println("4.- Azul");
		System.out.println("5.- Morado");
		System.out.println("6.- Turquesa");
		System.out.println("0.- FIN DE PROGRAMA");
	}
	
}
```

---

# 2.3 ClasePrintf

```java
package clasesEjemplo;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;

public class ClasePrintf {

	public static void main(String[] args) {

		//Declaración de variables
		int a = 8;
		int b = 3;
		int resultado = 0;
		double res = 0.0;		
		
		//1.- Imprimir números enteros
		
		//%d se sustituye por la variable entera, resultado
		//%n indica un salto de línea
		resultado = (a + b);
		System.out.printf("La suma es: %d %n", resultado);
		
		System.out.printf("La suma de %d más %d es %d %n", a, b, resultado);
		System.out.println("La suma de " + a + " más " + b + " es " + resultado);		
		
		resultado = (a - b);
		System.out.printf("La resta es: %d %n", resultado);
		resultado = (a * b);
		System.out.printf("La multiplicación es: %d %n", resultado);
		
		//2.- Imprimir números decimales

		//%f se sustituye por la variable decimal, res
		//2.6666666666666667
		res = (double) a / b;
		System.out.printf("La división es: %f\n", res);

		//Se pueden imprimir diferentes variables en una misma instrucción
		System.out.printf("La división entre %d y %d es igual a %f \n", a, b, res);

		//3.- Imprimir texto

		//%s se sustituye por la variable de texto, para que imprima en minúsculas
		//%S se sustituye por la variable de texto, para que imprima en mayúsculas
		//El salto de línea se puede indicar con \n o %n
		String texto = "Mayor";		
		System.out.printf("El resultado es: %s \n", texto);
		System.out.printf("El resultado es: %S %n", texto);	
		 
		//4.- Más formatos para imprimir números decimales
		
		//2,67
		System.out.printf("%.2f %n", res);		
		// 2,67
		System.out.printf("%10.2f %n", res);		
		//  2,667 
		System.out.printf("%7.3f %n", res);
		//002,667 
		System.out.printf("%07.3f %n", res);
		//    2,6667 
		System.out.printf("%10.4f %n", res);
		//2,667 
		System.out.printf ("%5.3f %n", res);
		//   2,66667 
		System.out.printf ("%10.5f %n", res);
		//0002,66667 
		System.out.printf ("%010.0f %n", res);

		System.out.println ("-------------------------------------------------");
		
		//5.- Uso de la clase Decimal Format

		DecimalFormat formateador = new DecimalFormat("####.####");
		//Imprime esto con cuatro decimales, es decir: 7,1234
		System.out.println(formateador.format(7.12342383));
		
		formateador = new DecimalFormat("0000.0000");
		//Imprime con 4 cifras enteras y 4 decimales: 0001,8200
		System.out.println(formateador.format (1.82));

		//Redondeo
		double aa = 1.2345;
		double bb = 1.2356;

		formateador = new DecimalFormat("#.##");

		System.out.println(formateador.format( aa ));   // La salida es 1,23
		System.out.println(formateador.format( bb ));   // La salida es 1,24

		//Porcentajes
		formateador = new DecimalFormat("###.##%");
		// Imprime: 68,44%
		System.out.println (formateador.format(0.6844));
				
		//Simbolos
		DecimalFormatSymbols simbolos = new DecimalFormatSymbols();
		simbolos.setDecimalSeparator('.');
		formateador = new DecimalFormat("####.####", simbolos);
		// Imprime: 3.4324
		System.out.println (formateador.format (3.43242383));		

	}
}
```

---
