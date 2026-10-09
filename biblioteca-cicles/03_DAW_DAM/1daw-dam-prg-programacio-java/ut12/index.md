---
layout: default
title: "UT12 — Utilización avanzada de clases — Programació en Java (1r DAW / DAM) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT12 Completa"
prev_url: "../ut11/ut1121.html"
prev_label: "⬅️ 11.21 Programación orientada a objetos (versión extend"
next_url: "../ut12/ut1201.html"
next_label: "12.1 08b - Utilizacion avanzada de clases ➡️"
---

# 📘 UT12 — Utilización avanzada de clases (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**12.1 08b - Utilizacion avanzada de clases**](#ut1201) (o [obrir en pàgina individual ➡️](./ut1201.md) )
> - [**12.2 Códigos de classe**](#ut1202) (o [obrir en pàgina individual ➡️](./ut1202.md) )
> - [**12.3 08a - Ejercicios I (Relaciones entre clases)**](#ut1203) (o [obrir en pàgina individual ➡️](./ut1203.md) )
> - [**12.4 08b - Ejercicios II**](#ut1204) (o [obrir en pàgina individual ➡️](./ut1204.md) )
> - [**12.5 Ejercicios III (Herencia)**](#ut1205) (o [obrir en pàgina individual ➡️](./ut1205.md) )
> - [**12.6 08a - Utilización avanzada de clases (Versión ex**](#ut1206) (o [obrir en pàgina individual ➡️](./ut1206.md) )

---

## 12.1 08b - Utilizacion avanzada de clases

> **📌 🏷️ Apunt de la Unitat**
> #### Contenido de la unidad

> **🔗 Recurs Web: Enumerados**
> [**🌐 Obrir recurs extern (https://jarroba.com/enum-enumerados-en-java-con-ejemplos/) ↗️**](https://jarroba.com/enum-enumerados-en-java-con-ejemplos/)

> **🔗 Recurs Web: Uso de instanceof**
> [**🌐 Obrir recurs extern (https://ifgeekthen.nttdata.com/es/que-es-y-como-utilizar-instanceof-en-java) ↗️**](https://ifgeekthen.nttdata.com/es/que-es-y-como-utilizar-instanceof-en-java)

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

> **📌 🏷️ Apunt de la Unitat**
> #### Otros recursos

---

Programación

### UD 8: Utilización avanzada de clases

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

Programación

Utilización avanzada de clases 1.− Relación entre clases 2.− Composición 3.− Herencia. Superclases y subclases 4.− Clases y métodos abstractos y finales 5.− Constructores y herencia. Sobreescritura 6.− Interfaces 7.− Polimorfismo 8.- Terminología

1.- Relación entre clases Programación

### UD 11: Utilización avanzada de clases

1.- Relación entre clases Se pueden distinguir diversos tipos de relaciones entre clases: Clientela: Cuando una clase utiliza objetos de otra clase (por ejemplo al pasarlos como parámetros a través de un método). Composición: Cuando alguno de los atributos de una clase es un objeto de otra clase.

Anidamiento: Cuando se definen clases en el interior de otra clase. Herencia: Cuando una clase comparte determinadas características con otra (clase base), añadiéndole alguna funcionalidad específica (especialización). Programación

1.- Relación entre clases ¿Herencia o composición? Cuando escribas tus propias clases, debes intentar tener claro en qué casos utilizar la composición y cuándo la herencia: Composición: cuando una clase está formada por objetos de otras clases. En estos casos se incluyen objetos de esas clases, pero no necesariamente se comparten características con ellos (no se heredan características de esos objetos, sino que directamente se utilizarán sus atributos y sus métodos).

Esos objetos incluidos no son más que atributos miembros de la clase que se está definiendo. Herencia: cuando una clase cumple todas las características de otra. En estos casos la clase derivada es una especialización (o particularización, extensión o restricción) de la clase base. Desde otro punto de vista se diría que la clase base es una generalización de las clases derivadas.

Programación

2.- Composición Programación

2.- Composición Sintaxis de la composición en Java class <NombreClase> { [modificadores] <NombreClase1> nombreAtributo1; [modificadores] <NombreClase2> nombreAtributo2; } Programación

3.- Herencia Programación

Proceso mediante el cual una clase adquiere las propiedades de otra clase Permite definir una nueva clase o subclase a partir de otra clase o superclase. Una subclase incluye todo el comportamiento y especificación de sus antecesores. Las subclases redefinen la estructura y el comportamiento de sus superclases.

La herencia permite reutilizar código 3.- Herencia Programación

3.- Herencia Uno de los objetivos fundamentales de la POO es la de facilitar la reutilización del código. Ello permite volver a emplear elementos que al haber sido ya realizados son bien conocidos y están, posiblemente, exhaustivamente probados. En particular, en los lenguajes de programación orientados a objetos el mecanismo básico para la reutilización del código es la herencia.

Mediante ella es posible definir nuevas clases extendiendo o restringiendo las funcionalidades de otras clases ya existentes. La herencia es un mecanismo que permite modelar relaciones jerárquicas entre elementos, del tipo is a (es un(a)), por ejemplo, esta es la relación que se da entre una máquina y un ordenador, en la que un ordenador es una máquina. En una relación así un elemento, el heredero, tiene las características de otro elemento pero, tal vez, refinándolas para definirlo como un caso especial del primero.

Nótese que, para el ejemplo anterior, si un Ordenador es una Maquina, también un PCCompatible es un Ordenador, así como miPC es, a su vez, un PCCompatible. Naturalmente, desde la POO Maquina, Ordenador y PCCompatible son todos ellos clases, que forman una jerarquía, siendo una instancia de todos ellos (un objeto) miPC.

Programación

Animal Mamífero Canino Doméstico Collie Reptil ... Felino ... Salvaje Lobo Pastor alemán 3.- Herencia Programación

3.- Herencia Acceso a miembros heredados Programación

Cuadro de accesibilidad a los atributos y métodos de una clase Misma clase Subclase Mismo paquete Otro paquete Sin modificador (paquete) X X X public X X X X private X protected X X X

3.- Herencia Diseño de las clases base y derivadas: extends, protected y super [modificador] class ClasePadre { // Cuerpo de la clase … } [modificador] class ClaseHija extends ClasePadre { // Cuerpo de la clase … } NOTA: Si queremos prohibir que una clase pueda ser extendida (sellar la clase), deberemos añadir el modificador final en la declaración de la clase. De este modo, no se podrá crear una clase que herede de ésta.

[modificador] final class ClaseFinal { // Cuerpo de la clase … } Programación

4.- Clases y métodos abstractos y finales Programación

4.- Clases y métodos abstractos y finales Clase abstracta Una clase abstracta es aquella que no va a tener instancias (objetos) de forma directa, aunque sí habrá instancias de las subclases (siempre que esas subclases no sean también abstractas). Por ejemplo, si se define la clase Animal como abstracta, no se podrán crear objetos de la clase Animal, es decir, no se podrá hacer Animal mascota = new Animal(), pero sí se podrán crear instancias de la clase Gato, Ave o Delfín que son subclases de Animal.

La idea es permitir que otras clases deriven de ella, proporcionando un modelo genérico y algunos métodos de utilidad general. Programación

4.- Clases y métodos abstractos y finales Clase abstracta La posibilidad de declarar clases abstractas es una de las características más útiles de los lenguajes orientados a objetos, pues permiten dar unas líneas generales de cómo es una clase sin tener que implementar todos sus métodos o implementando solamente algunos de ellos.

Esto resulta especialmente útil cuando las distintas clases derivadas deban proporcionar los mismos métodos indicados en la clase base abstracta, pero su implementación sea específica para cada subclase. Programación

4.- Clases y métodos abstractos y finales Método abstracto Un método abstracto es un método declarado en una clase para el cual esa clase no proporciona la implementación. Si una clase dispone de al menos un método abstracto se dice que es una clase abstracta. Toda clase que herede (sea subclase) de una clase abstracta debe implementar todos los métodos abstractos de su superclase o bien volverlos a declarar como abstractos (y por tanto también sería abstracta). Para declarar un método abstracto en Java se utiliza el modificador abstract.

Un método abstracto es un método cuya implementación no se define, sino que se declara únicamente su interfaz (cabecera) para que su cuerpo sea implementado más adelante en una clase derivada. Un método se declara como abstracto mediante el uso del modificador abstract (como en las clases abstractas)

```java
[modificador_acceso] abstract <tipo> <nombreMetodo> ([parámetros]) [excepciones];
```

Programación

4.- Clases y métodos abstractos y finales Método abstracto Estos métodos tendrán que ser obligatoriamente redefinidos (en realidad “definidos”, pues aún no tienen contenido) en las clases derivadas. Si en una clase derivada se deja algún método abstracto sin implementar, esa clase derivada será también una clase abstracta.

Cuando una clase contiene un método abstracto tiene que declararse como abstracta obligatoriamente. Cuando trabajes con clases abstractas debes tener en cuenta: Una clase abstracta sólo puede usarse para crear nuevas clases derivadas. No se puede hacer un new de una clase abstracta. Se produciría un error de compilación.

Una clase abstracta puede contener métodos totalmente definidos (no abstractos) y métodos sin definir (métodos abstractos). Programación

4.- Clases y métodos abstractos y finales Clases y métodos finales El modificador final, sólo lo has utilizado por ahora para atributos y variables (por ejemplo para declarar atributos constantes, que una vez que toman un valor ya no pueden ser modificados). Pero este modificador también puede ser utilizado con clases y con métodos (con un comportamiento que no es exactamente igual, aunque puede encontrarse cierta analogía: no se permite heredar o no se permite redefinir).

Una clase final no puede ser heredada, es decir, no puede tener clases derivadas. La jerarquía de clases a la que pertenece acaba en ella (no tendrá clases hijas) Un método final no podrá ser redefinido en una clase derivada. Si intentas redefinir un método final en una subclase se producirá un error de compilación.

Programación

5.- Constructores y herencia Programación

5.- Constructores y herencia. Sobreescritura Recuerda que un constructor de una clase puede llamar a otro constructor de la misma clase, previamente definido, a través de la referencia this. En estos casos, la utilización de this sólo podía hacerse en la primera línea de código del constructor.

Un constructor de una clase derivada puede hacer algo parecido para llamar al constructor de su clase base mediante el uso de a palabra super. De esta manera, el constructor de una clase derivada puede llamar primero al constructor de su superclase para que inicialice los atributos heredados y posteriormente se inicializarán los atributos específicos de la clase: los no heredados.

Nuevamente, esta llamada también debe ser la primera sentencia de un constructor (con la única excepción de que exista una llamada a otro constructor de la clase mediante this). Programación

5.- Constructores y herencia. Sobreescritura Si no se incluye una llamada a super() dentro del constructor, el compilador incluye automáticamente una llamada al constructor por defecto de clase base (llamada a super()). Esto da lugar a una llamada en cadena de constructores de superclase hasta llegar a la clase más alta de la jerarquía (que en Java es la clase Object).

En el caso del constructor por defecto (el que crea el compilador si el programador no ha escrito ninguno), el compilador añade lo primero de todo, antes de la inicialización de los atributos a sus valores por defecto, una llamada al constructor de la clase base mediante la referencia super.

Programación

5.- Constructores y herencia. Sobreescritura Ejemplo: Si la clase Persona tuviera un constructor de este tipo

```java
public Persona (String nombre, String apellidos, GregorianCalendar fechaNacim) {
this.nombe= nombre;
this.apellidos= apellidos;
this.fechaNacim= new GregorianCalendar (fechaNacim);
}
```

Podrías llamarlo desde un constructor de una clase derivada (por ejemplo Alumno) de la siguiente forma: public Alumno (String nombre, String apellidos, GregorianCalendar fechaNacim,

```java
String grupo, double notaMedia) {
super (nombre, apellidos, fechaNacim);
this.grupo= grupo;
this.notaMedia= notaMedia;
}
```

En realidad se trata de otro recurso más para optimizar la reutilización de código, en este caso el del constructor, que aunque no es heredado, sí puedes invocarlo para no tener que rescribirlo. Programación

6.- Interfaces Programación

6.- Interfaces Hemos visto cómo la herencia permite definir especializaciones (o extensiones) de una clase base que ya existe sin tener que volver a repetir de todo el código de ésta. Este mecanismo da la oportunidad de que la nueva clase especializada (o extendida) disponga de toda la interfaz que tiene su clase base.

También hemos estudiado cómo los métodos abstractos permiten establecer una interfaz para marcar las líneas generales de un comportamiento común de superclase que deberían compartir de todas las subclases. Si llevamos al límite esta idea de interfaz, podrías llegar a tener una clase abstracta donde todos sus métodos fueran abstractos. De este modo estarías dando únicamente el marco de comportamiento, sin ningún método implementado, de las posibles subclases que heredarán de esa clase abstracta.

La idea de una interfaz (o interface) es precisamente ésa: disponer de un mecanismo que permita especificar cuál debe ser el comportamiento que deben tener todos los objetos que formen arte de una determinada clasificación (no necesariamente jerárquica). Programación

6.- Interfaces Una interfaz en Java consiste esencialmente en una lista de declaraciones de métodos sin implementar, junto con un conjunto de constantes. Estos métodos sin implementar indican un comportamiento, un tipo de conducta, aunque no especifican cómo será ese comportamiento (implementación), pues eso dependerá de las características específicas de cada clase que decida implementar esa interfaz.

Podría decirse que una interfaz se encarga de establecer qué comportamientos hay que tener (qué métodos), pero no dice nada de cómo deben llevarse a cabo esos comportamientos (implementación). Se indica sólo la forma, no la implementación. En cierto modo podrías imaginar el concepto de interfaz como un guión que dice: "éste es el protocolo de comunicación que deben presentar todas las clases que implementen esta interfaz".

Se proporciona una lista de métodos públicos y, si quieres dotar a tu clase de esa interfaz, tendrás que definir todos y cada uno de esos métodos públicos. Programación

6.- Interfaces En conclusión: una interfaz se encarga de establecer unas líneas generales sobre los comportamientos (métodos) que deberían tener los objetos de toda clase que implemente esa interfaz, es decir, que no indican lo que el objeto es (de eso se encarga la clase y sus superclases), sino acciones (capacidades) que el objeto debería ser capaz de realizar.

Es por esto que el nombre de muchas interfaces en Java termina con sufijos del tipo "‐able", "‐or", "‐ente" y cosas del estilo, que significan algo así como capacidad o habilidad para hacer o ser receptores de algo (configurable, serializable, modificable, clonable, ejecutable, administrador, servidor, buscador, etc.), dando así la idea de que se tiene la capacidad de llevar a cabo el conjuntode acciones especificadas en la interfaz.

Programación

6.- Interfaces Definición de interfaces La declaración de una interfaz en Java es similar a la declaración de una clase, aunque con algunas variaciones: Se utiliza la palabra reservada interface en lugar de class. Puede utilizarse el modificador public. Si incluye este modificador la interfaz debe tener el mismo nombre que el archivo .java en el que se encuentra (exactamente igual que sucedía con las clases). Si no se indica el modificador public, el acceso será por omisión o "de paquete" (como sucedía con las clases).

Todos los miembros de la interfaz (atributos y métodos) son public de manera implícita. No es necesario indicar el modificador public, aunque puede hacerse. Todos los atributos son de tipo final y public (tampoco es necesario especificarlo), es decir, constantes y públicos. Hay que darles un valor inicial.

Todos los métodos son abstractos también de manera implícita (tampoco hay que indicarlo). No tienen cuerpo, tan solo la cabecera. Programación

6.- Interfaces Como puedes observar, una interfaz consiste esencialmente en una lista de… atributos finales (constantes) y métodos abstractos (sin implementar). Su sintaxis, en Java, quedaría entonces: [public] interface <NombreInterfaz> {

```java
[public] [final] <tipo1> <atributo1>= <valor1>;
[public] [final] <tipo2> <atributo2>= <valor2>;
```

...

```java
[public] [abstract] <tipo_devuelto1> <nombreMetodo1> ([lista_parámetros]);
[public] [abstract] <tipo_devuelto2> <nombreMetodo2> ([lista_parámetros]);
```

... } Programación

6.- Interfaces Clases abstractas Vs Interfaces Similaridades  No pueden ser instanciadas.  No pueden ser selladas (final). Diferencias  Las Interfaces no pueden contener ninguna implementación.  Las Interfaces no pueden declarar miembros no públicos.  Las Interfaces no pueden extender clases.

Programación

7.- Polimorfismo Programación

7.- Polimorfismo El polimorfismo se refiere al hecho de que una misma función adopte múltiples formas. Esto se consigue por medio de la sobrecarga: Sobrecarga de funciones: un mismo nombre de función para distintas funciones.

```java
a = sumar(c, d);
a = sumar(c, d, 5);
```

Sobrecarga de operadores: un mismo operador con distintas funcionalidades.

```java
entero1 = entero2 + 5;
cadena1 = cadena2 + cadena3;
```

Programación

7.- Polimorfismo En la sobrecarga de funciones se desarrollan distintas funciones con un mismo nombre pero distinto código. Las funciones que comparten un mismo nombre deben tener una relación en cuanto a su funcionalidad. Aunque comparten el mismo nombre, deben tener distintos parámetros.

Éstos pueden diferir en

- El número
- El tipo
- El orden

El tipo del valor de retorno de una función no es válido como distinción. Programación

8.- Terminología Programación

Clase Objeto Atributos Métodos Instancia Abstracción Encapsulamiento Modularidad Jerarquía Generalización Herencia Asociación Agregación Polimorfismo Constructor Destructor Miembro Público Miembro Privado Miembro Protegido 8.- Terminología Programación

Abstracción: La abstracción es la capacidad que permite representar las características esenciales de un objeto sin preocuparse de las restantes características (no esenciales). Encapsulamiento: Es la propiedad que permite asegurar que los aspectos externos de un objeto se diferencie de sus detalles internos.

Modularidad: La modularidad es la propiedad que permite dividir una aplicación en partes más pequeñas ( llamadas módulos ), cada una de las cuales debe ser tan independiente como sea posible de la aplicación en si y de las restantes partes. Jerarquía: Es una clasificación u ordenación de las abstracciones.

8.- Terminología Programación

Generalización: Una clase que comparte atributos y métodos similares con otras clases se le llama superclase o clase padre. Cuando definimos una clase padre estamos generalizando. Herencia: Del mismo modo, cuando definimos una clase a partir de una clase padre estamos creando una subclase. La definición de una subclase se le denomina herencia.

Asociación: Una asociación es una relación semántica entre objetos. Cuando un objeto accede a los atributos y métodos de otro objeto estamos definiendo una asociación entre ellos. Agregación: La agregación es una relación que define que un objeto es parte de otro objeto. Cuando definimos que un objeto tiene como atributo otro objeto decimos que es una agregación. A través de la agregación se definen objetos compuestos.

8.- Terminología Programación

Polimorfismo: Es el mecanismo de definir un mismo método en varios objetos de diferentes clases pero con distintas formas de implementación. Constructor: Es un método que se invoca cuando un objeto es construido Destructor: Es un método que se invoca cuando un objeto es destruido.

Miembro Público: Atributo o método de una clase que puede ser accedido desde cualquier parte del programa. Miembro Privado: Atributo o método de una clase que puede ser accedido solo dentro de esa clase. Miembro Protegido: Atributo o método de una clase que puede ser accedido desde esa clase y sus clases heredadas.

8.- Terminología Programación

Bibliografía Programación

Bibliografía Programación

Aprende JAVA con ejercicios. Edición 2018. Luis José Sánchez. Empezar a programar usando Java. 2ª edición. UniversitatPolitècnica de València https://github.com/statickidz/TemarioDAW https://es.stackoverflow.com

---

## 12.2 Códigos de classe

Recuerda insertar las clases en el paquete que le corresponda para poder compilar y ejecutar.

### 📄 TestPersona.java

```java
package claseobject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

/*
 * COMPARACIÓN ENTRE OBJETOS
 */
public class TestPersona {
	public static void main(String[] args) {
		Persona p1 = new Persona(24, 1000);
		Persona p2 = new Persona(22, 2000);
		
		// Sobrescribir método equals de la clase Object
		if (p1.equals(p2))
			System.out.println("Tienen la misma edad.");
		else
			System.out.println("NO tienen la misma edad.");
		
		// INTERFAZ Comparable
		if (p1.compareTo(p2) > 0)
			System.out.println("P1 es mayor que P2");
		else if(p1.compareTo(p2) < 0)
			System.out.println("P1 es menor que P2");
		else
			System.out.println("P1 y P2 tienen la misma edad.");
		
		// INTERFAZ Comparator
		PersonaComparadorEdad comparadorEdad = new PersonaComparadorEdad();

		if (comparadorEdad.compare(p1, p2) > 0)
			System.out.println("P1 es mayor que P2");
		else if(comparadorEdad.compare(p1, p2) < 0)
			System.out.println("P1 es menor que P2");
		else
			System.out.println("P1 y P2 tienen la misma edad.");
		
		PersonaComparadorSueldo comparadorSueldo = new PersonaComparadorSueldo();
				
		// ORDENACIÓN DE ARRAYS
		ArrayList<Persona> listaPersonas = new ArrayList<Persona>();
		
		listaPersonas.add(new Persona(20, 1000));
		listaPersonas.add(new Persona(18, 2000));
		listaPersonas.add(new Persona(40, 1500));
		listaPersonas.add(new Persona(35, 1800));
		System.out.println(listaPersonas);
		
		// Arrays dinámicos
		Collections.sort(listaPersonas, new PersonaComparadorEdad());
		System.out.println(listaPersonas);
		
		Collections.sort(listaPersonas, new PersonaComparadorSueldo());
		System.out.println(listaPersonas);
		
		// Ordenar por Comparable
		Collections.sort(listaPersonas); 
		System.out.println(listaPersonas);
		
		// Arrays estáticos
		Persona[] personas = new Persona[3];
		
		personas[0] = new Persona(29,3000);
		personas[1] = new Persona(20,2000);
		personas[2] = new Persona(50,4000);

		Arrays.sort(personas);
		System.out.println(Arrays.asList(personas));
		
	}
}
```

### 📄 TestClaseObject.java

```java
package claseobject;

public class TestClaseObject {

	public static void main(String[] args) {

		String s1 = "cadena";
		String s2 = "cadena";
		String s3 = new String("cadena");
		
		System.out.println(System.identityHashCode(s1));
		System.out.println(System.identityHashCode(s2));
		System.out.println(System.identityHashCode(s3));

		if (s1.equals(s3))
			System.out.println("son iguales.");
		else
			System.out.println("son diferentes.");
	}

}
```

### 📄 PersonaComparadorSueldo.java

```java
package claseobject;

import java.util.Comparator;

public class PersonaComparadorSueldo implements Comparator<Persona> {

	@Override
	public int compare(Persona o1, Persona o2) {
		return Double.compare(o1.getSueldo(), o2.getSueldo());
	}

}
```

### 📄 PersonaComparadorEdad.java

```java
package claseobject;

import java.util.Comparator;

public class PersonaComparadorEdad implements Comparator<Persona> {

	@Override
	public int compare(Persona o1, Persona o2) {
		return Integer.compare(o1.getEdad(), o2.getEdad());
	}

}
```

### 📄 Persona.java

```java
package claseobject;

public class Persona implements Comparable<Persona>{
	private int edad;
	private double sueldo;
	
	public Persona(int edad, double sueldo) {
		this.edad = edad;
		this.sueldo = sueldo;
	}
	
	@Override
	public boolean equals(Object objeto) {
		
		// Caso 1: Estoy comparando con el objeto consigo mismo
		if (objeto == this)
			return true;
		
		// Caso 2: 
		if (!(objeto instanceof Persona))
			return false;
		
		//Persona otra = (Persona)objeto;
		
		return this.edad == ((Persona)objeto).edad;
	}

	
	
	@Override
	public int compareTo(Persona otra) {
		//return Integer.compare(this.edad, otra.edad);
		
		if(this.edad > otra.edad)
			return 1;
		else if(this.edad < otra.edad)
			return -1;
		else
			return 0;
			
	}
	
	public int getEdad() {
		return this.edad;
	}
	
	public double getSueldo() {
		return this.sueldo;
	}
	
	@Override
	public String toString() {
		return "[" + this.edad + ", " + this.sueldo + "]";
	}
}
```

### 📄 Calle.java

```java
package jrsimo.ejemplos.enumerados;

public class Calle {

	private Semaforo semaforo;

	

	public Calle() {

		this.semaforo = Semaforo.APAGADO;

	}

	

	public Semaforo getSemaforo() {

		return this.semaforo;

	}

	

	public void setSemaforo(Semaforo semaforo) {

		this.semaforo = semaforo;

	}

}
```

### 📄 TestSemaforo.java

```java
package jrsimo.ejemplos.enumerados;

public class TestSemaforo {

	public static void main(String[] args) {

		

		Calle calle = new Calle();

		System.out.println(calle.getSemaforo()); // Llama a calle.getSemaforo.toString()

		

		// Otra forma de hacer lo anterior paso a paso

		String estadoSemaforo = calle.getSemaforo().toString();

		System.out.println(estadoSemaforo);

		

		// También usando el método name() de los tipo enum

		System.out.println(calle.getSemaforo().name());

				

		// Mostrar la posición que ocupe el valor mostrado por el semaforo en el enum

		int posicion = calle.getSemaforo().ordinal();

		System.out.println(calle.getSemaforo() + " en posición: " + posicion);

		

		// Cambio estado del semaforo

		calle.setSemaforo(Semaforo.VERDE);

		

		posicion = calle.getSemaforo().ordinal();

		System.out.println(calle.getSemaforo() + " en posición: " + posicion);

		

		// Obtener todos los estados del semaforo en un array de Semaforo

		Semaforo[] estadosSemaforo = Semaforo.values();

		for(Semaforo estado : estadosSemaforo)

			System.out.print(estado + " ");

				

	}

}
```

### 📄 Semaforo.java

```java
package jrsimo.ejemplos.enumerados;

public enum Semaforo {

	APAGADO,

	VERDE,

	AMARILLO,

	ROJO

}
```

### 📄 TestInterfaces.java

```java
package jrsimo.ejemplos.interfaces;

public class TestInterfaces {

	public static void main(String[] args) {

		D d = new D();

		

		d.metodoA();

		d.metodoB();

		d.metodoC();

		

		d.imprimir();

	}

}
```

### 📄 D.java

```java
package jrsimo.ejemplos.interfaces;

/*

 * La clase de hereda directamente de A e implementa las interfaces B y C

 * De esta manera, la clase D debe implementar obligatoriamente los métodos definidos en 

 * las interfaces que implementa.

 * 

 * Observa que no obliga a que se implemente el método imprimirA de la clase A,

 * pero si metodoA(), ya que este es abstract

 */

public class D extends A implements B,C {

	@Override

	public void metodoB() {

		System.out.println("metodoB() implementado en la clase D");

	}

	@Override

	public void metodoC() {

		System.out.println("metodoC() implementado en la clase D");

	}

	@Override

	public void metodoA() {

		System.out.println("metodoA() implementado en la clase D");

	}

}
```

### 📄 C.java

```java
package jrsimo.ejemplos.interfaces;

public interface C {

	public void metodoC();

}
```

### 📄 B.java

```java
package jrsimo.ejemplos.interfaces;

public interface B {

	public void metodoB();

}
```

### 📄 A.java

```java
package jrsimo.ejemplos.interfaces;

public abstract class A {

	

	public void imprimir() {

		System.out.println("imprimir() implementado en la clase A");

	}

	

	// Método abstracto

	public abstract void metodoA();

}
```

### 📄 Rectangulo.java

```java
package jrsimo.figuras;

public class Rectangulo extends Figura {
	private double ancho;
	private double alto;
	private Punto2D centro;
	
	public Rectangulo(double ancho, double alto, Punto2D centro) {
		super("RECTÁNGULO");
		this.ancho = ancho;
		this.alto = alto;
		this.centro = centro;
	}
	
	public double getAncho() {
		return ancho;
	}

	public void setAncho(double ancho) {
		this.ancho = ancho;
	}

	public double getAlto() {
		return alto;
	}

	public void setAlto(double alto) {
		this.alto = alto;
	}

	public Punto2D getCentro() {
		return centro;
	}

	public void setCentro(Punto2D centro) {
		this.centro = centro;
	}
	
	@Override
	public double calcularArea() {
		return this.ancho * this.alto;
	}
	
	@Override
	public double calcularPerimetro() {
		return 2 * (this.ancho + this.alto);
	}
}
```

### 📄 Punto2D.java

```java
package jrsimo.figuras;

public class Punto2D {
	private double x;
	private double y;
	
	public Punto2D() {
		this.x = 0;
		this.y = 0;
	}
	
	public Punto2D(double x, double y) {
		this.x = x;
		this.y = y;
	}
	
	public double getX() {
		return this.x;
	}
	
	public void setX(double x) {
		this.x = x;
	}
	
	public double getY() {
		return this.y;
	}
	
	public void setY(double y) {
		this.y = y;
	}
	
	@Override
	public String toString() {
		return "Centro: " + this.x + ", " + this.y;
	}
}
```

### 📄 Figura.java

```java
package jrsimo.figuras;

public abstract class Figura {
	private String tipoFigura;
		
	public Figura() {
		this.tipoFigura = "Figura desconocida";
	}
	
	public Figura(String tipoFigura) {
		this.tipoFigura = tipoFigura;
	}
	
	public String getTipoFigura() {
		return this.tipoFigura;
	}
	
	public void setTipoFigura(String tipoFigura) {
		this.tipoFigura = tipoFigura;
	}
	
	// Métodos abstractos
	public abstract double calcularArea();
	public abstract double calcularPerimetro();
}
```

### 📄 CirculoColor.java

```java
package jrsimo.figuras;

public class CirculoColor extends Circulo {
	private String color;
	
	public CirculoColor(double radio, Punto2D centro, String color) {
		super(radio, centro);
		this.color = color;
		//this.radio = radio;
	}
	
	// Sobrescribimos el método mostrar de Circulo
	public void mostrar(String dispositivo) {
		System.out.println("Mostrar círculo en: " + dispositivo);
	}

}
```

### 📄 Circulo.java

```java
package jrsimo.figuras;

public class Circulo extends Figura{
	protected double radio;
	private Punto2D centro;
	
	private final double PI = 3.1415;
	
	public Circulo(double radio, Punto2D centro) {
		super("Círculo");
		this.radio = radio;
		this.centro = centro;
	}
	
	public double getRadio() {
		return this.radio;
	}
	
	public void setRadio(double radio) {
		this.radio = radio;
	}
	
	public Punto2D getCentro() {
		return this.centro;
	}
	
	public void setCentro(Punto2D centro) {
		this.centro = centro;
	}
	
	public void mostrar() {
		System.out.println("Mostrar en dispositivo por defecto.");
	}
		
	@Override
	public double calcularArea() {
		// TODO Auto-generated method stub
		return Math.PI * Math.pow(radio, 2);
	}

	@Override
	public double calcularPerimetro() {
		// TODO Auto-generated method stub
		return 2 * Math.PI * this.radio;
	}
	
	@Override
	public String toString() {
		return this.centro + " => " + "Radio: " + this.radio;
	}
}
```

### 📄 Test2Figuras.java

```java
package jrsimo.test;

import jrsimo.figuras.Circulo;
import jrsimo.figuras.Figura;
import jrsimo.figuras.Punto2D;
import jrsimo.figuras.Rectangulo;

public class Test2Figuras {
	public static void main(String[] args) {
		
		// POLIMORFISMO
		Figura f1 = new Circulo(2, new Punto2D(3,2));
		Figura f2 = new Rectangulo(3,4, new Punto2D(8,7));
		
		System.out.println(f1.getTipoFigura());
		System.out.println(f1.calcularArea());
		
		System.out.println(f2.getTipoFigura());
		System.out.println(f2.calcularArea());
		
		
		// POLIMORFIMOS + ARRAYS
		Figura figuras[] = new Figura[2];
		
		figuras[0] = new Circulo(2, new Punto2D(3,2)); 
		figuras[1] = new Rectangulo(3,4, new Punto2D(8,7)); 

		// MUESTRA LA FIGURA QUE CONTIENE EL ARRAY EN TIEMPO DE EJECUCIÓN
		// A PRIORI NO SABEMOS EL TIPO DE FIGURA QUE SE VA A MOSTRAR: UN CUADRADO, UN CÍRCULO,...
		// AQUÍ RADICA LA POTENCIA DEL POLIMORFIMO
		for (int i = 0; i < figuras.length; i++) {
			System.out.println(figuras[i].getTipoFigura());
			System.out.println(figuras[i].calcularArea());
		}
		

		
	}
}
```

### 📄 Test1Figuras.java

```java
package jrsimo.test;

import jrsimo.figuras.Circulo;
import jrsimo.figuras.CirculoColor;
import jrsimo.figuras.Figura;
import jrsimo.figuras.Punto2D;

public class Test1Figuras {
	
	
	public static void main(String[] args) {
		Circulo c1 = new Circulo(2, new Punto2D(2,3));
		CirculoColor c2color = new CirculoColor(5, new Punto2D(7,8), "rojo");
			
		c1.mostrar();
		c2color.mostrar(); // Lo puede usar porque lo hereda de Circulo
		c2color.mostrar("proyector");
			
		System.out.printf("Area: %.2f\n", c1.calcularArea());
		System.out.printf("Area: %.2f\n", c2color.calcularArea());	
		
		System.out.println(c2color.getCentro());
		
		System.out.println(c1.getTipoFigura());
		System.out.println(c2color.getTipoFigura());
	}
}
```

---

## 12.3 08a - Ejercicios I (Relaciones entre clases)

46001199 Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email: Repaso POO: Relaciones de asociación, agregación y composición Ejercicio 1: Sistema de Biblioteca Diseña un sistema de biblioteca que conste de las siguientes clases: Libro, Usuario y Biblioteca. Cada libro tiene un título, un autor y un año de publicación. Cada usuario tiene un nombre y puede tener varios libros en préstamo. La biblioteca puede contener varios libros y usuarios. Implementa métodos para que un usuario pueda tomar prestado un libro de la biblioteca, devolver un libro y consultar los libros que tiene en préstamo.

Configuración del proyecto: • Crea un proyecto llamado SistemaBiblioteca • Ubica las clases relacionadas con la biblioteca en un paquete llamado “tunombre.biblioteca” y la clase TestBiblioteca en el paquete “tunombre.test” Código para testear el proyecto SistemaBiblioteca

```java
public class TestBiblioteca {
    public static void main(String[] args) {
        Libro libro1 = new Libro("Criptonomicon", "Neal Stepthenson", 1999);
        Libro libro2 = new Libro("Mañana,mañana,mañana","Gabrielle Zevin",2023);
        Usuario usuario1 = new Usuario("Usuario1");
        Usuario usuario2 = new Usuario("Usuario2");
        Biblioteca biblioteca = new Biblioteca();
        biblioteca.agregarLibro(libro1);
        biblioteca.agregarLibro(libro2);
        biblioteca.agregarUsuario(usuario1);
        biblioteca.agregarUsuario(usuario2);
        usuario1.tomarPrestado(libro1);
        usuario1.tomarPrestado(libro2);
        usuario2.tomarPrestado(libro1);
        usuario1.devolverLibro(libro1);
        usuario1.consultarLibrosEnPrestamo();
        usuario2.consultarLibrosEnPrestamo();
    }
}
```

1DAW 23-24 JR Simó

46001199 Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email: Ejercicio 2: Sistema de Hospital Crea un sistema de gestión hospitalaria que incluya las clases Doctor, Paciente y Hospital. Un doctor tiene un nombre y una especialidad. Un paciente tiene un nombre y una edad. El hospital puede tener varios doctores y pacientes. Implementa métodos para asignar un doctor a un paciente y para consultar la lista de pacientes asignados a un doctor específico.

Configuración del proyecto: • Crea un proyecto llamado SistemaHospital • Ubica las clases en sus paquetes más adecuados según se hizo en el ejercicio 1. Código para testear el proyecto SistemaHospital

```java
public class TestHospita {
    public static void main(String[] args) {
        Doctor doctor1 = new Doctor("Dr. González", "Cardiología");
        Doctor doctor2 = new Doctor("Dra. Ramírez", "Pediatría");
        Paciente paciente1 = new Paciente("Paciente1", 25);
        Paciente paciente2 = new Paciente("Paciente2", 40);
        Hospital hospital = new Hospital();
        hospital.agregarDoctor(doctor1);
        hospital.agregarDoctor(doctor2);
        hospital.agregarPaciente(paciente1);
        hospital.agregarPaciente(paciente2);
        paciente1.asignarDoctor(doctor1);
        paciente2.asignarDoctor(doctor2);
    }
}
```

1DAW 23-24 JR Simó

46001199 Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email: Ejercicio 3: Sistema de Escuela (En este ejercicio practicarás la composición) Diseña un sistema de gestión escolar que incluya las clases Estudiante, Curso y Escuela. La clase Estudiante contendrá un nombre y año de ingreso, mientras que Curso tendrá nombre, profesor y una lista de estudiantes matriculados. La clase Escuela mantendrá una lista de cursos disponibles. Al instanciar Escuela, automáticamente se crean dos cursos predefinidos. Implementa un método agregarEstudiante en Curso para añadir estudiantes a la lista. En el main, crea una Escuela y dos estudiantes, y añade ambos estudiantes a todos los cursos disponibles en la escuela.

Configuración del proyecto: • Crea un proyecto llamado SistemaEscuela • Ubica las clases en sus paquetes más adecuados según se hizo en el ejercicio 1. Código para testear el proyecto SistemaEscuela

```java
public class TestEscuela {
    public static void main(String[] args) {
        Estudiante estudiante1 = new Estudiante("Anakin", 2022);
        Estudiante estudiante2 = new Estudiante("Obijuan", 2022);
        Escuela escuela = new Escuela();
        // Agregar más cursos si es necesario
        // escuela.agregarCurso(new Curso("Nombre del curso", "Profesor del curso"));
        for (Curso curso : escuela.getCursos()) {
            curso.agregarEstudiante(estudiante1);
            curso.agregarEstudiante(estudiante2);
        }
```

```java
for (Curso curso : escuela.getCursos()) {
```

```java
System.out.println("Curso: " + curso.getNombre());
```

```java
System.out.println("Lista de estudiantes:");
```

for (Estudiante e : curso.getEstudiantes())

```java
System.out.println("\t" + e.getNombre());
```

```java
System.out.println();
        }
    }
}
```

1DAW 23-24 JR Simó

---

## 12.4 08b - Ejercicios II

Programación

- Ejercicios

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS Utilización avanzada de clases Programación

Ejercicio 1 Si no se pueden crear objetos de una clase abstracta vía operador new, ¿qué utilidad tienen los métodos constructores de las clases abstractas? ¿Qué consecuencias tiene la siguiente definición en la clase Figura?

```java
private Color color;
private Point2D.Double posicion;
Figura(Color color, int x, int y) {
```

```java
this.color = color;
```

```java
posicion = new Point2D.Double(x,y);
}
```

Programación

Ejercicio 2 Se dispone de las siguientes clases en el paquete losAnimales

```java
public class Milpies {
```

```java
protected int numeroDePies;
```

```java
public Milpies() {
```

```java
numeroDePies = 1000;
```

```java
escribirPies();
```

}

```java
public void escribirPies() {
```

```java
System.out.println("Un Milpiés o Cochinilla tiene " +
```

```java
numeroDePies + " pies");
```

} }

```java
public class MilpiesEsquiador extends Milpies {
```

```java
protected int numeroDePiesRotos;
```

```java
public MilpiesEsquiador() {
```

```java
numeroDePiesRotos = 100;
```

} Programación

Ejercicio 2

```java
public void escribirPies() {
```

```java
System.out.println("A un Milpiés esquiador le quedan " +
```

```java
(numeroDePies - numeroDePiesRotos) + " pies");
```

} }

```java
public class TestMilpies {
```

```java
public static void main(String[] args) {
```

```java
MilpiesEsquiador m = new MilpiesEsquiador();
```

} } Indicar el motivo por el que el resultado de la ejecución del main de TestMilpies es: "A un Milpiés esquiador le quedan 1000 pies." Programación

Ejercicio 3 Sean las siguientes clases del paquete losAnimales

```java
public class Animal {
```

```java
public void emitirSonido() {
```

```java
System.out.println("Grunt");
```

} }

```java
public class Muflon extends Animal {
```

```java
public void emitirSonido() { System.out.println("MOOOO!"); }
```

```java
public void alimentarCon() { System.out.println("Hierba!"); }
}
public class Armadillo extends Animal { }
public class Guepardo extends Animal {
```

```java
public void emitirSonido() { System.out.println("Groar!"); }
}
```

Programación

Ejercicio 3 Si el siguiente programa Java se ubica también en el paquete losAnimales, indicar las instrucciones de su main que provocan error y las que no y explicar brevemente el motivo.

```java
public class Test1Animal {
```

```java
public static void main(String[] args) {
```

```java
adoptar(new Armadillo());
```

```java
Object o = new Armadillo();
```

```java
Armadillo a1 = new Animal();
```

```java
Armadillo a2 = new Muflon();
```

}

```java
private static void adoptar(Animal a) {
```

```java
System.out.println("Ven, cachorrito!");
```

} } Programación

Ejercicio 3 Tracear el resultado de la ejecución del siguiente programa

```java
package losAnimales;
public class Test2Animal {
```

```java
public static void main(String[] args) {
```

```java
Animal a = new Armadillo();
```

```java
a.emitirSonido();
```

```java
a = new Muflon();
```

```java
a.emitirSonido();
```

```java
a = new Guepardo();
```

```java
a.emitirSonido();
```

} } En función del resultado obtenido y siguiendo las reglas de la herencia, ¿qué modificaciones se deberían realizar en la jerarquía para exigir que todos los animales emitan el sonido Grunt? ¿Cómo se podría conseguir saber el tipo de alimentación de cada animal? Programación

Ejercicio 4 Modificar la jerarquía Animal para garantizar que cada clase derivada de Animal defina el método alimentarCon() y con ello conocer el tipo de alimentación de cada Animal. Programación

Ejercicio 5 Crea la clase Vehiculo, así como las clases Bicicleta y Coche como subclases de la primera. Para la clase Vehiculo, crea los atributos de clase vehiculosCreados y kilometrosTotales, así como el atributo de instancia kilometrosRecorridos. Crea también algún método específico para cada una de las subclases.

Prueba las clases creadas mediante un programa con un menú como el que se muestra a continuación: VEHÍCULOS =========

### 1. Anda con la bicicleta

### 2. Haz el caballito con la bicicleta

### 3. Anda con el coche

### 4. Quema rueda con el coche

### 5. Ver kilometraje de la bicicleta

### 6. Ver kilometraje del coche

### 7. Ver kilometraje total

### 8. Salir

Elige una opción (1-8): Programación

### UD 8: Programación Orientada a Objetos

EJERCICIOS Interfaces Programación

Ejercicio 1 Haz que las clases Carta y Fracción implementen la interfaz Relacionable. //Interfaz que define relaciones de orden entre objetos.

```java
public interface Relacionable {
```

```java
boolean esMayorQue(Relacionable a);
```

```java
boolean esMenorQue(Relacionable a);
```

```java
boolean esIgualQue(Relacionable a);
}
```

Programación

Ejercicio 2 Escribe un programa para una biblioteca que contenga libros y revistas. Las características comunes que se almacenan tanto para las revistas como para los libros son el código, el título, y el año de publicación. Estas tres características se pasan por parámetro en el momento de crear los objetos.

Los libros tienen además un atributo prestado. Los libros, cuando se crean, no están prestados. Las revistas tienen un número. En el momento de crear las revistas se pasa el número por parámetro. Tanto las revistas como los libros deben tener (aparte de los constructores) un método toString() que devuelve el valor de todos los atributos en una cadena de caracteres.

También tienen un método que devuelve el año de publicación, y otro el código. Para prevenir posibles cambios en el programa se tiene que implementar una interfaz Prestable con los métodos prestar(), devolver() y prestado(). La clase Libro implementa esta interfaz.

Programación

Ejercicio 2 ¿Como puede hacerse? Se implementa una superclase de Libro y Revista con sus características comunes, que se llama Publicación. Esta clase deberá ser abstracta para no poder instanciarla, es decir, crear un objeto de tipo Publicación. En esta clase además de declarar los tres atributos, se implementa un constructor que reciba por parámetro el valor de los tres atributos. También se implementan los métodos getAnyo(), getCodigo() y un método toString() que devuelve la información de estos tres atributos en forma de cadena.

Se implementan las clases Libro y Revista que añaden sus nuevos atributos. Se escriben constructores, que llaman al constructor de la clase padre. Se sobreescribe el método toString(), que también llama al método toString() de la superclase. La interfaz Prestable declara los métodos indicados sin implementarlos. La clase Libro la implementa.

• Crear una clase Principal para poder probar la funcionalidad de las clases creadas anteriormente. Programación

Ejercicio 3 Construir una clase ArrayReales que declare un atributo de tipo double[] y que implemente una interfaz llamada Estadisticas. El contenido de esta interfaz es el siguiente

```java
public interface Estadisticas {
```

```java
double minimo();
```

```java
double maximo();
```

```java
double sumatorio();
```

} Programación

Programación

Ejercicio 4 Crearemos una clase llamada Serie con las siguientes características: Sus atributos son titulo, numero de temporadas, entregado, genero y creador. Por defecto, el numero de temporadas es de 3 temporadas y entregado false. El resto de atributos serán valores por defecto según el tipo del atributo.

Los constructores que se implementaran serán: Un constructor por defecto. Un constructor con el titulo y creador. El resto por defecto. Un constructor con todos los atributos, excepto de entregado. Los métodos que se implementara serán: Métodos get de todos los atributos, excepto de entregado.

Métodos set de todos los atributos, excepto de entregado. Sobrescribe los métodos toString. Programación

Ejercicio 4 Crearemos una clase Videojuego con las siguientes características: Sus atributos son titulo, horas estimadas, entregado, genero y compañía. Por defecto, las horas estimadas serán de 10 horas y entregado false. El resto de atributos serán valores por defecto según el tipo del atributo.

Los constructores que se implementaran serán: Un constructor por defecto. Un constructor con el titulo y horas estimadas. El resto por defecto. Un constructor con todos los atributos, excepto de entregado. Los métodos que se implementara serán: Métodos get de todos los atributos, excepto de entregado.

Métodos set de todos los atributos, excepto de entregado. Sobrescribe los métodos toString. Programación

Ejercicio 4 Como vemos, en principio, las clases anteriores no son padre-hija, pero si tienen en común, por eso vamos a hacer una interfaz llamada Entregable con los siguientes métodos: entregar(): cambia el atributo prestado a true. devolver(): cambia el atributo prestado a false.

isEntregado(): devuelve el estado del atributo prestado. Método compareTo (Object a), compara las horas estimadas en los videojuegos y en las series el numero de temporadas. Como parámetro que tenga un objeto, no es necesario que implementes la interfaz Comparable. Recuerda el uso de los casting de objetos.

Programación

Ejercicio 4 Implementa los anteriores métodos en las clases Videojuego y Serie. Ahora crea una aplicación ejecutable y realiza lo siguiente: Crea dos arrays, uno de Series y otro de Videojuegos, de 5 posiciones cada uno. Crea un objeto en cada posición del array, con los valores que desees, puedes usar distintos constructores.

Entrega algunos Videojuegos y Series con el método entregar(). Cuenta cuantos Series y Videojuegos hay entregados. Al contarlos, devuélvelos. Por último, indica el Videojuego tiene más horas estimadas y la serie con mas temporadas. Muéstralos en pantalla con toda su información (usa el método toString()).

Programación

Ejercicio 5 Para los “futboleros” (… y los que no), podéis ver un ejemplo completo en: https://jarroba.com/polimorfismo-en-java-interface-parte-ii-con-ejemplos/ Programación

---

## 12.5 Ejercicios III (Herencia)

46001199 Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email: Repaso POO: Herencia I Ejercicio 1: Figuras Crea un programa en Java que modele figuras geométricas en un plano 2D. Para ello, define una clase Punto2D que represente un punto en dicho plano con coordenadas x e y.

A continuación, crea una clase abstracta Figura que contenga un atributo centro de tipo Punto2D y métodos abstractos para calcular el área y el perímetro de la figura. Esta clase Figura no podrá ser instanciada directamente. Las subclases concretas de Figura serán Cuadrado2D, Triangulo2D, Circulo2D y Rectangulo2D.

Implementa las clases Cuadrado2D, Triangulo2D, Circulo2D y Rectangulo2D, que heredan de Figura y proporcionan implementaciones concretas para los métodos abstractos calcularArea y calcularPerímetro. Cada una de estas clases deberá tener los atributos específicos necesarios para representar las propiedades de la figura correspondiente.

Por último, crea un programa principal que demuestre el funcionamiento del código. Este programa deberá crear instancias de cada tipo de figura, calcular su área y perímetro, y mostrar los resultados. Crea un paquete llamado tunombre.figuras para añadir todas las figuras que vayas a crear y otro paquete llamado tunombre.test para testearlas.

Código principal para testar el ejercicio1: // Ejemplo de uso del código

```java
public class TestFiguras1 {
    public static void main(String[] args) {
        // Crear una figura de cada tipo
        Punto2D centro = new Punto2D(0, 0);
        Cuadrado2D cuadrado = new Cuadrado2D(centro, 5);
        Triangulo2D triangulo = new Triangulo2D(centro, 4, 3);
        Circulo2D circulo = new Circulo2D(centro, 6);
        Rectangulo2D rectangulo = new Rectangulo2D(centro, 4, 5);
        // Calcular el área y el perímetro de cada figura
        double areaCuadrado = cuadrado.calcularArea();
        double perimetroCuadrado = cuadrado.calcularPerimetro();
        double areaTriangulo = triangulo.calcularArea();
        double perimetroTriangulo = triangulo.calcularPerimetro();
        double areaCirculo = circulo.calcularArea();
        double perimetroCirculo = circulo.calcularPerimetro();
        double areaRectangulo = rectangulo.calcularArea();
        double perimetroRectangulo = rectangulo.calcularPerimetro();
        // Imprimir resultados
        System.out.println("Área del cuadrado: " + areaCuadrado);
        System.out.println("Perímetro del cuadrado: " + perimetroCuadrado);
        System.out.println("Área del triángulo: " + areaTriangulo);
        System.out.println("Perímetro del triángulo: " + perimetroTriangulo);
        System.out.println("Área del círculo: " + areaCirculo);
        System.out.println("Perímetro del círculo: " + perimetroCirculo);
        System.out.println("Área del rectángulo: " + areaRectangulo);
        System.out.println("Perímetro del rectángulo: " + perimetroRectangulo);
    }
}
```

1DAW 23-24 JR Simó

46001199 Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email: Ejercicio 2: Figuras polimórficas Implementa un programa principal que utilice el polimorfismo en Java. Crea una lista de Figuras que pueda contener instancias de cualquier subtipo de Figura. Llena esta lista con instancias de diferentes tipos de figuras y utiliza un bucle para iterar sobre la lista y llamar a los métodos calcularArea y calcularPerimetro de cada figura. Muestra los resultados por pantalla.

Llama a este programa Test2Figuras.java Ejercicio 3: Dibujo 2D Amplía el ejercicio anterior añadiendo una clase Dibujo2D para representar un objeto dibujo que pueda contener muchas figuras. Al dibujo se le podrán agregar figuras o borrar figuras, también se podrá obtener el área total o perímetro total de las figuras que hay en el dibujo.

Código principal para testar el ejercicio 3

```java
public class Test3Figura {
    public static void main(String[] args) {
        // Crear un dibujo
        Dibujo2D dibujo = new Dibujo2D();
        // Crear puntos de referencia para las figuras
        Punto2D centro1 = new Punto2D(0, 0);
        Punto2D centro2 = new Punto2D(2, 3);
        // Crear instancias de diferentes tipos de figuras y agregarlas al dibujo
        Figura cuadrado = new Cuadrado2D(centro1, 5);
        Figura triangulo = new Triangulo2D(centro1, 4, 3);
        Figura circulo = new Circulo2D(centro1, 6);
        Figura rectangulo = new Rectangulo2D(centro2, 4, 5);
        dibujo.agregarFigura(cuadrado);
        dibujo.agregarFigura(triangulo);
        dibujo.agregarFigura(circulo);
        dibujo.agregarFigura(rectangulo);
        // Calcular y mostrar el área y el perímetro total del dibujo
        double areaTotal = dibujo.calcularAreaTotal();
        double perimetroTotal = dibujo.calcularPerimetroTotal();
        System.out.println("Área total del dibujo: " + areaTotal);
        System.out.println("Perímetro total del dibujo: " + perimetroTotal);
    }
}
```

1DAW 23-24 JR Simó

46001199 Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email: Ejercicio 4: Interfaz Amplía el programa en Java que modela figuras geométricas en un plano 2D. En este caso, añade una interfaz llamada EsDibujable para las figuras que pueden ser dibujadas en un plano.

Define la interfaz EsDibujable, que contiene un método dibujar() que representa la acción de dibujar la figura en el plano. Modifica las clases Cuadrado2D, Triangulo2D, Circulo2D y Rectangulo2D para que implementen la interfaz EsDibujable y proporcionen una implementación para el método dibujar(). Cada implementación de dibujar() debería mostrar un mensaje indicando qué figura se está dibujando.

Código principal para testar el ejercicio 4

```java
public class Test4Figura {
    public static void main(String[] args) {
        // Crear un dibujo
        Dibujo2D dibujo = new Dibujo2D();
        // Crear puntos de referencia para las figuras
        Punto2D centro1 = new Punto2D(0, 0);
        Punto2D centro2 = new Punto2D(2, 3);
        // Crear instancias de diferentes tipos de figuras y agregarlas al dibujo
        Figura cuadrado = new Cuadrado2D(centro1, 5);
        Figura triangulo = new Triangulo2D(centro1, 4, 3);
        Figura circulo = new Circulo2D(centro1, 6);
        Figura rectangulo = new Rectangulo2D(centro2, 4, 5);
        dibujo.agregarFigura(cuadrado);
        dibujo.agregarFigura(triangulo);
        dibujo.agregarFigura(circulo);
        dibujo.agregarFigura(rectangulo);
        // Dibujar cada figura del dibujo
        for (Figura figura : dibujo.getFiguras()) {
            if (figura instanceof EsDibujable) {
                EsDibujable dibujable = (EsDibujable) figura;
                dibujable.dibujar();
            } else {
                System.out.println("La figura no es dibujable.");
            }
        }
        // Calcular y mostrar el área y el perímetro total del dibujo
        double areaTotal = dibujo.calcularAreaTotal();
        double perimetroTotal = dibujo.calcularPerimetroTotal();
        System.out.println("Área total del dibujo: " + areaTotal);
        System.out.println("Perímetro total del dibujo: " + perimetroTotal);
    }
}
```

1DAW 23-24 JR Simó

---

## 12.6 08a - Utilización avanzada de clases (Versión ex

### UNIDAD 8: UTILIZACIÓN AVANZADA DE CLASES

V1.07.02.23

Profesor: José Ramón Simó Martínez Contenido

- Introducción ............................................................................................................................ 2
- Relaciones entre clases ............................................................................................................ 3

2.1. Asociación con Java .................................................................................................................................. 3 2.2. Agregación con Java ................................................................................................................................. 5 2.3. Composición con Java ............................................................................................................................... 5

- Herencia ................................................................................................................................. 7

3.1. Herencia simple entre clases .................................................................................................................... 7 3.2. Llamada a constructores en la herencia ................................................................................................... 9 3.3. Acceso a métodos y constructores de la superclase: uso de super ....................................................... 10 3.4. Sobrecarga de métodos de la superclase ............................................................................................... 11 3.5. Clases y métodos abstractos .................................................................................................................. 12 3.6. Clases y métodos finales: uso de final .................................................................................................... 15

- Interfaces ............................................................................................................................... 16

4.1. Concepto de interfaz .............................................................................................................................. 16 4.2. Definición de interfaces en Java ............................................................................................................. 16 4.3. Clases abstractas vs interfaces ............................................................................................................... 17 4.4. Ejemplo de creación y uso de una interfaz............................................................................................. 17 4.5. Herencia múltiple ................................................................................................................................... 19 4.6. Métodos default y static ......................................................................................................................... 21

- Polimorfismo ......................................................................................................................... 23

5.1. Concepto de polimorfismo ..................................................................................................................... 23 5.2. Ejemplo de polimorfismo ....................................................................................................................... 23

- Jerarquía de la API de Java ..................................................................................................... 25

6.1. La clase Object ........................................................................................................................................ 25 6.2. La interfaz Comparable<T> ..................................................................................................................... 28

- Terminología .......................................................................................................................... 31
- Bibliografía ............................................................................................................................. 32

V1.07.02.23

### 1. Introducción

En la anterior unidad introducimos los elementos que componen la Programación Orientada a Objetos (POO). Sin embargo, dejamos para la presente los que marcan la importancia de la POO: la Herencia y el Polimorfismo. En esta unidad estudiaremos todos los aspectos de implementación de la herencia y el polimorfismo en la POO en el lenguaje Java. Empezaremos con una aproximación a las relaciones que se pueden establecer entre las clases. A continuación, profundizaremos en aquellas que establecen relaciones jerárquicas con la herencia simple, el uso de clases abstractas y finales. También introduciremos el concepto de interfaz como solución a la herencia múltiple en Java. Continuaremos con la técnica del polimorfismo y su importancia en la POO.

Finalizaremos presentando la jerarquía de la API de Java y el uso de alguna de sus clases e interfaces más comunes. Al terminar esta unidad deberás ser capaz de: • Escribir programas estableciendo relaciones de asociación entre clases. • Escribir programas estableciendo relaciones de herencia entre clases.

• Comprender y aplicar el concepto de herencia y polimorfismo. • Crear clases abstractas e interfaces y conocer las ventajas de su uso. • Sobrecargar y sobrescribir métodos de la superclase. • Conocer la jerarquía de la API de Java. • Comparar y ordenar objetos de nuestra propia clase.

• Desarrollar programas en Java aplicando técnicas avanzadas del paradigma orientado a objetos.

V1.07.02.23

### 2. Relaciones entre clases

Las relaciones entre clases son cruciales en la programación orientada a objetos. Así como los conceptos como clases y objetos en la programación orientada a objetos se crean para modelar entidades del mundo real, las relaciones entre clases en la programación orientada a objetos se crean para modelar las relaciones entre entidades del mundo real que representan estas clases.

En nuestro primer contacto con la POO hemos comprendido la importancia del concepto de clase para modelar los objetos (y conceptos) del mundo real. Sin embargo, los objetos no están aislados unos de otros, sino que mantienen, de una forma u otra, relaciones entre ellos.

En Java se pueden modelar principalmente dos tipos de relaciones entre clases: • Asociación: una clase contiene o usa objetos de otra clase. Se conoce como relación HAS-A (en inglés). Se conocen dos tipos de asociación: o Agregación: una clase puede existir independientemente de la otra. Se conoce como relaciones débiles.

o Composición: una la existencia de una clase depende de la existencia de la otra. Se conoce como relaciones fuertes. • Herencia: una clase es una subcategoría de otra clase. Se conoce como relación IS-A (en inglés) En este apartado estudiaremos cómo se representan en Java las relaciones de asociación y en otros apartados entraremos en profundidad con la relación de herencia entre clases.

Nota En el módulo de Entornos de Desarrollo (ED) se estudia con más detalle los conceptos teórico-prácticos del paradigma orientado a objeto, como por ejemplo los diagramas UML. En esta unidad se dará por entendido que el estudiante ha adquirido dichos conocimientos del módulo de ED.

#### 2.1. Asociación con Java

La relación más simple es la de asociación. En el caso de que una clase haga uso o contenga a otra decimos que tiene una relación de asociación. En Java podemos representar este tipo de relación según sea: • Unidireccional: una clase usa o contiene a otra, pero no a la inversa. También se dice que una clase puede ver a otra.

• Bidireccional: ambas clases hacen referencia una a otra. Es decir, ambas se ven. En el siguiente ejemplo podemos ver tanto la representación UML como el código correspondiente en Java de una relación unidireccional

V1.07.02.23 // Fichero B.java

```java
public class B {
```

```java
private int atributoB;
```

```java
public B(){
```

```java
this.atributoB = 0;
```

} } // Fichero A.java

```java
public class A {
```

```java
private int atributoA;
```

```java
private B b1; // La clase A tiene una referencia a la clase B.
```

```java
public A(){
```

```java
this.atributoA = 0;
```

}

} Podemos ver en el código que para representar que la clase A puede ver a la clase B, añadimos a la clase A un atributo de tipo B. En el anterior ejemplo la cardinalidad la relación es uno. Si quisiéramos representar una cardinalidad de uno a muchos simplemente declararíamos una lista de objetos de la clase relacionada

// Fichero B.java

```java
public class B {
```

```java
private int atributoB;
```

```java
public B(){
```

```java
this.atributoB = 0;
```

} }

// Fichero A.java

```java
public class A {
```

```java
private int atributoA;
```

// La clase A tiene uno o más objetos de B

```java
private ArrayList<B> b1;
```

```java
public B(){
```

```java
this.atributoA = 0;
```

}

}

V1.07.02.23 En la representación bidireccional debemos añadir una referencia del objeto referenciado a cada clase: // Fichero B.java

```java
public class B {
```

```java
private int atributoB;
```

// Referencia a la clase A

```java
private A a1;
```

```java
public B(){
```

```java
this.atributoB = 0;
```

} } // Fichero A.java

```java
public class A {
```

```java
private int atributoA;
```

// Referencia a la clase B

```java
private B b1;
```

```java
public A(){
```

```java
this.atributoA = 0;
```

}

}

#### 2.2. Agregación con Java

Una agregación es una asociación (pero no viceversa) entre dos clases de manera que una clase contiene uno o más elementos de la otra con la que está relacionada. Sin embargo, en Java la implementación de una agregación es la misma que una asociación. Para la siguiente representación en UML se aplica el mismo ejemplo de código Java que hemos visto en la asociación unidireccional

#### 2.3. Composición con Java

Una composición es una asociación (pero no viceversa) entre dos clases de manera que una clase contiene un o más elementos de la otra con la que está relacionada. Se considera que se establece una relación de tipo fuerte, ya que la existencia de un objeto de una clase depende de la existencia del objeto de la otra clase que lo contiene.

V1.07.02.23 En Java podemos representar la composición del modelo UML como se indica en el siguiente ejemplo: // Fichero B.java

```java
public class B {
```

```java
private int atributoB;
```

```java
public B(){
```

```java
this.atributoB = 0;
```

} }

// Fichero A.java

```java
public class A {
```

```java
private int atributoA;
```

```java
private B b1; // Referencia a la clase B
```

```java
public A(){
```

```java
this.atributoA = 0;
```

// Se instancia el objeto de B en el constructor de la clase A

```java
this.b1 = new B();
```

}

} Para reflejar una composición en Java tenemos que indicar que el objeto de la clase a la que se hace referencia se instancia en el constructor. En el ejemplo, cuando instanciemos la clase A a su vez se instanciará un objeto de la clase B. De esta forma cuando un objeto de la clase A deje de existir a su vez dejará de existir el objeto de la clase B con el que estaba relacionado.

En resumen: • Tanto la agregación como la composición son asociaciones, pero no a la inversa. • Tanto la agregación como la composición son unidireccionales, mientras que la asociación puede ser bidireccional. • La implementación en Java es la misma para representar tanto una asociación como una agregación.

La diferencia es a nivel lógico y de modelado. • Una composición es una agregación, pero no a la inversa.

V1.07.02.23

### 3. Herencia

Definición: La herencia en la POO es un mecanismo que permite adquirir las características de otras clases, esto es, sus atributos y métodos. En consecuencia, podemos establecer relaciones jerárquicas entre las clases de nuestro proyecto. Esto supone muchas ventajas para nuestro proyecto software, entre las cuales están las siguientes

• Reutilización del código. • Extender los requisitos funcionales de manera relativamente sencilla. • Reducir los costes de desarrollo y mantenimiento. • Facilitar las pruebas y la documentación. • Seguridad de los datos. A continuación, vamos a estudiar cómo el lenguaje Java permite implementar este mecanismo.

#### 3.1. Herencia simple entre clases

En Java se utiliza la palabra reservada extends para indicar que una clase hereda de otra

// Fichero A.java

```java
public class A {
```

```java
private int atributoA;
```

```java
public A(){}
```

```java
public void metodoA() {}
}
```

// Fichero B.java

```java
public class B extends A {
```

```java
private int atributoB;
```

```java
public B(){}
```

```java
public void metodoB() {}
}
```

En el anterior ejemplo decimos que la clase B extiende a la clase A. Dicho de otra forma, la clase B hereda los atributos y métodos de la clase A. No obstante, cabe tener en cuenta los modificadores de acceso que permiten mantener el encapsulamiento de las clases tal y como estudiamos en la unidad anterior. En el ejemplo anterior la clase B hereda los métodos públicos de A, pero no sus atributos ya que estos son privados.

V1.07.02.23 Recordemos la tabla resumen sobre los modificadores de acceso que vimos en la unidad anterior: Modificador Clase Clase o subclase del mismo Paquete Subclase (de otro paquete) Otros public Sí Sí Sí Sí protected Sí Sí Sí No (default) Sí Sí No No private Sí No No No

Como podemos ver en esta tabla, una solución al ejemplo anterior para que clase B pueda heredar de la clase A sería declarar los atributos de B como public, aunque como ya dijimos esto no es para nada una buena práctica. Por tanto, nos queda utilizar el modificador protected

// Fichero A.java

```java
public class A {
```

```java
protected int atributoA;
```

```java
public A(){}
```

```java
public void metodoA() {}
}
```

Ahora la clase B sí que podrá heredar el atributoA de la clase A. De todas formas, no es necesario que una clase herede todos los componentes de otra. Podemos elegir, por tanto, qué atributos y métodos hereda (o no) una clase de otra indicando los modificadores de acceso adecuados

// Fichero A.java

```java
public class A {
```

```java
protected int atributoA; // se hereda
```

```java
private String otroAtributoA; // no se hereda
```

```java
public A(){}
```

```java
public void metodoA() {} // se hereda
```

```java
private void otroMetodoA() {} // no se hereda
}
```

Vamos a tener en cuenta las siguientes consideraciones con el uso de los modificadores de acceso en general y en la herencia en particular: • En general: o Declarar los atributos como private y los métodos como public. o Crear los getters y setters necesarios (ambos siempre public) para acceder a los atributos de la clase.

V1.07.02.23 o Si queremos que un atributo sea de solo de lectura, crear solo su getter. o Si queremos que un atributo sea de solo de escritura, crear solo su setter. o Lo métodos que no pertenezcan a la API de nuestra clase, declararlos como private. o Al declarar métodos public o protected nos comprometemos a mantenerlos durante el tiempo de mantenimiento de nuestra clase (o librería).

• En la herencia: o El modificador protected usarlo en caso de que queramos publicar nuestro método solo para las clases que heredan y no sea usado como parte de la API de nuestra librería. o El modificador protected limitarlo para los métodos y no para atributos, que deberían ser aconsejablemente private; accederemos a los atributos de la clase heredada a través de sus getters y setters.

#### 3.2. Llamada a constructores en la herencia

Cuando instanciamos un objeto de una subclase a través de su constructor, Java primero llama al constructor de su superclase: // Fichero UnaSuperClase.java

```java
public class UnaSuperClase {
```

// Constructor por defecto de la superclase

```java
public UnaSuperClase() {
```

```java
System.out.println(“Constructor de la super clase…”);
```

} } // Fichero UnaSubClase.java

```java
public class UnaSubClase extends UnaSuperClase{
```

// Constructor por defecto de la subclase

```java
public UnaSubClase() {
```

```java
System.out.println(“Constructor de la subclase…”);
```

} } // Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
UnaSubClase subclase = new UnaSubClase();
```

} } Salida por pantalla: Constructor de la super clase… Constructor de la subclase…

V1.07.02.23

#### 3.3. Acceso a métodos y constructores de la superclase: uso de super

Una subclase puede acceder a los métodos de su superclase a través de la palabra reservada super. // Fichero UnaSuperClase.java

```java
public class UnaSuperClase {
```

// Método de la superclase

```java
public void metodoSuperClase() {
```

```java
System.out.println(“Método de la superclase…”);
```

} }

// Fichero UnaSubClase.java

```java
public class UnaSubClase extends UnaSuperClase{
```

// Método de la subclase

```java
public metodoSuclase() {
```

super.metodoSuperClase(); // llamada al método de la superclase

```java
System.out.println(“Método de la subclase…”);
```

} }

// Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
UnaSubClase subclase = new UnaSubClase();
```

```java
suclase.metodoSubclase();
```

} } Salida por pantalla: Método de la superclase… Método de la subclase… Otro uso destacado de la palabra reservada super es para llamar a constructores con argumentos de la superclase: // Fichero UnaSuperClase.java

```java
public class UnaSuperClase {
```

```java
private String s;
```

```java
private int a;
```

// Constructor con parámetros de la superclase

```java
public UnaSuperClase(String s, int a) {
```

```java
this.s = s;
```

```java
this.a = a;
```

} }

// Fichero UnaSubClase.java

V1.07.02.23

```java
public class UnaSubClase extends UnaSuperClase{
```

```java
private int b;
```

// Constructor por defecto de la subclase

```java
public UnaSubClase(String s, int a, int b) {
```

super(s, a); // Llamada al constructor de la superclase

```java
this.b = b;
```

} } Nota En caso querer acceder al constructor de la superclase, super(…) debe ir siempre como primera instrucción dentro del constructor. // super debería ir siempre como primera instrucción

```java
public UnaSubClase(String s, int a, int b) {
```

```java
this.b = b;
```

super(s, a); // Error }

#### 3.4. Sobrecarga de métodos de la superclase

En la unidad anterior ya estudiamos la sobrecarga de métodos de una clase. Recordemos que una clase puede redefinir un método de manteniendo el mismo nombre, pero distinta lista de argumentos (y el tipo de retorno da igual si cambia o no). En la sobrecarga de métodos de la superclase la idea es la misma: una subclase puede redefinir un método o métodos de la superclase manteniendo el mismo nombre, pero distinta lista de argumentos (y el tipo de retorno da igual si cambia o no).

Veamos un ejemplo: // Fichero UnaSuperClase.java

```java
public class UnaSuperClase {
```

```java
public void saludar(String nombre){
```

```java
System.out.println(“Hola” + nombre);
```

} }

// Fichero UnaSubClase.java

```java
public class UnaSubClase extends UnaSuperClase{
```

// Sobrecarga el método de la clase padre

```java
public void saludar(String nombre, int nVeces){
```

```java
for(int i = 0; i < nVeces; i++) {
```

```java
System.out.println(“Hola” + nombre);
```

}

}

V1.07.02.23 }

// Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
UnaSubClase subclase = new UnaSubClase();
```

subclase.saludar(“Ana”); // usa saludar de la clase padre

subclase.saludar(“Pepe”, 3); // usa saludar de su propia clase

} }

#### 3.5. Clases y métodos abstractos

Veamos el siguiente ejemplo de jerarquía de clases en UML

Ahora ya sabemos que en este ejemplo se representa que tanto la clase Circulo como la clase Rectangulo heredan de una clase llamada Figura. También conocemos los mecanismos para representar dicho ejemplo en Java. En este punto debemos hacernos la siguiente pregunta, ¿tiene sentido que podamos instanciar un objeto de la clase Figura? En principio, no parece que tenga mucho sentido ya que no sabríamos, por ejemplo, cómo representar gráficamente una figura en general. Tal y como ocurre en la vida real diremos que una figura general es un objeto abstracto.

Nota En el ejemplo anterior decimos que Figura es una clase abstracta, mientras que Circulo y Rectangulo son clases concretas. Java tiene un mecanismo para crear clases abstractas, es decir, clases de las cuales no podremos instanciar objetos. Para ello, usaremos la palabra reservada abstract.

V1.07.02.23 Una clase abstracta la implementaremos de la siguiente manera: // Fichero Figura.java public abstract class Figura {

// Atributos

// Constructores

// Métodos (concretos o abstractos) } Una clase abstracta puede contener dos tipos de métodos: • Concretos: los que ya conocemos de las clases concretas y que necesitan contener la implementación de lo que hacen. • Abstractos: métodos propios de una clase abstracta. Estos métodos no deben contener ninguna implementación, solo la definición del método. Su implementación, por tanto, deberá ser a cargo de las clases que heredan los métodos de la clase abstracta. Al igual que la clase abstracta, estos métodos también utilizan la palabra clave abstract.

Un método abstracto se declara de la siguiente manera

```java
modificador abstract tipoDeVariable metodo1(parámetros);
```

Un ejemplo de implementación de la clase Figura sería el siguiente: // Fichero Figura.java public abstract class Figura {

```java
private String nombre;
```

// Constructor

```java
public Figura() {
```

```java
this.nombre = “Figura desconocida”;
```

}

// Métodos concretos

```java
public Figura(String nombre) {
```

```java
this.nombre = nombre;
```

```java
public String getNombre() {
```

```java
return this.nombre;
```

}

```java
public void setNombre(String nombre) {
```

```java
this.nombre = nombre;
```

}

// Métodos abstractos

```java
public abstract double getArea();
```

```java
public abstract double getPerimetro();
}
```

V1.07.02.23 En el anterior ejemplo vemos como se implementan los métodos concretos, pero no los abstractos. Estos se deberán implementar en las clases que heredan de la clase Figura. Por ejemplo, veamos la cómo se implementa la clase Cuadrado que hereda de la clase Figura

// Fichero Figura.java

```java
public class Rectangulo extends Figura {
```

```java
private double ancho;
```

```java
private double alto;
```

// Constructor

```java
public Rectangulo(double ancho, double alto) {
```

```java
super(“Rectángulo”);
```

```java
this.ancho = ancho;
```

```java
this.alto = alto;
```

}

```java
@Override
```

```java
public double getArea() {
```

```java
return this.ancho * this.alto;
```

}

```java
@Override
```

```java
public double getPerimetro() {
```

```java
return 2.0 * (this.ancho + this.alto);
```

} } Nota Cuando la subclase implementa los métodos heredados de la clase abstracta se dice que los está sobrescribiendo. El concepto de sobrescritura de métodos es de vital importancia para el polimorfismo, concepto que trataremos en siguientes apartados.

```java
@Override es una etiqueta informativa para el compilador de Java.  En este caso, indica indica al
```

compilador que estamos sobrescribiendo los métodos de la interfaz. Esto nos ayudará a evitar errores en la denominación de los métodos sobrescritos. En el ejemplo de la clase Rectangulo podemos observar que implementamos los métodos abstractos que heredamos de la clase Figura. Atención, en este caso ya son métodos concretos y por tanto no debemos usar la palabra clave abstract.

Ahora, implementamos la clase Circulo: // Fichero Circulo.java

```java
public class Circulo extends Figura {
```

```java
private double radio;
```

// Constructor

```java
public Circulo(double radio) {
```

V1.07.02.23

```java
super(“Círculo”);
```

this.radio

}

```java
@Override
```

```java
public double getArea() {
```

```java
return Math.PI * radio * radio;
```

}

```java
@Override
```

```java
public double getPerimetro() {
```

```java
return 2.0 * Math.PI * radio;
```

} } Veamos cómo probar estas clases que hemos creado: // Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
Rectangulo r = new Rectangulo(10.0, 2.0);
```

```java
Circulo c = new Circulo(2.0);
```

```java
double areaCuadrado = r.getArea();
```

```java
double areaCirculo = c.getArea();
```

```java
System.out.println(“Área cuadrado: “ + areaCuadrado);
```

```java
System.out.println(“Área círculo: “ + areaCirculo);
}
```

#### 3.6. Clases y métodos finales: uso de final

Hay casos en nuestro diseño por el que deseamos que nuestra clase no se pueda heredar. Para ello Java proporciona la palabra clave final. Por tanto, podemos restringir el uso de la herencia utilizado las conocidas como clases finales. Su sintaxis es la siguiente: public final class UnaClase { } Si intentamos hacer esto nos dará error

```java
public class OtraClase extends UnaClase {
}
```

También podemos declarar dentro de una superclase no final un método final. El objetivo es que dicho método no se pueda sobrescribir en las subclases que hereden de dicha superclase. La sintaxis es la siguiente

```java
public final void unMetodoFinal() { }
```

V1.07.02.23

### 4. Interfaces

Hemos visto cómo la herencia permite definir especializaciones (o extensiones) de una clase base que ya existe sin tener que repetir el código de ésta. Este mecanismo da la oportunidad de que la nueva clase especializada (o extendida) disponga de toda la interfaz que tiene su clase base.

También hemos estudiado cómo los métodos abstractos permiten establecer una interfaz para marcar las líneas generales de un comportamiento común de superclase que deberían compartir de todas las subclases. Si llevamos al límite esta idea de interfaz, podrías llegar a tener una clase abstracta donde todos sus métodos fueran abstractos. De este modo estarías dando únicamente el marco de comportamiento, sin ningún método implementado, de las posibles subclases que heredarán de esa clase abstracta.

La idea de una interfaz (o interface) es precisamente ésa: disponer de un mecanismo que permita especificar cuál debe ser el comportamiento que deben tener todos los objetos que formen parte de una determinada clasificación (no necesariamente jerárquica).

#### 4.1. Concepto de interfaz

Una interfaz en Java consiste esencialmente en una lista de declaraciones de métodos sin implementar, junto con un conjunto de constantes. Estos métodos sin implementar indican un comportamiento, un tipo de conducta, aunque no especifican cómo será ese comportamiento (implementación), pues eso dependerá de las características específicas de cada clase que decida implementar esa interfaz.

En resumen: • Una interfaz se encarga de establecer qué comportamientos hay que tener (qué métodos), pero no dice nada de cómo deben llevarse a cabo esos comportamientos (implementación). • En una interfaz solo se indica sólo la forma, no la implementación. • En cierto modo podrías imaginar el concepto de interfaz como un guion que dice: "éste es el protocolo de comunicación que deben presentar todas las clases que implementen esta interfaz".

• Se proporciona una lista de métodos públicos y, si quieres dotar a tu clase de esa interfaz, tendrás que definir todos y cada uno de esos métodos públicos. • Los nombre de las interfaces en Java terminan con sufijos del tipo "‐able", "‐or", "‐ente" y cosas del estilo, que significan algo así como capacidad o habilidad para hacer o ser receptores de algo (configurable, serializable, modificable, clonable, ejecutable, etc).

#### 4.2. Definición de interfaces en Java

La declaración de una interfaz en Java es similar a la declaración de una clase, aunque con algunas variaciones: • Se utiliza la palabra reservada interface en lugar de class.

V1.07.02.23 • Puede utilizarse el modificador public. Si incluye este modificador la interfaz debe tener el mismo nombre que el archivo .java en el que se encuentra (exactamente igual que sucedía con las clases). Si no se indica el modificador public, el acceso será por omisión o "de paquete" (como sucedía con las clases).

• Todos los miembros de la interfaz (atributos y métodos) son public de manera implícita. No es necesario indicar el modificador public, aunque puede hacerse. • Todos los atributos son de tipo final y public (tampoco es necesario especificarlo), es decir, constantes y públicos. Hay que darles un valor inicial.

• Todos los métodos son abstractos también de manera implícita (tampoco hay que indicarlo). No tienen cuerpo, tan solo la cabecera. Como puedes observar, una interfaz consiste esencialmente en una lista de… • Atributos finales (constantes) y • Métodos abstractos (sin implementar).

Su sintaxis, en Java, quedaría entonces: [public] interface <NombreInterfaz> {

```java
[public] [final] <tipo1> <atributo1>= <valor1>;
```

```java
[public] [final] <tipo2> <atributo2>= <valor2>;
```

...

```java
[public] [abstract] <tipo_devuelto1> <nombreMetodo1> ([lista_parámetros]);
```

```java
[public] [abstract] <tipo_devuelto2> <nombreMetodo2> ([lista_parámetros]);
```

... }

#### 4.3. Clases abstractas vs interfaces

En este punto puedes pensar que la idea de clase abstracta e interfaz es la misma. Ciertamente podría ser así, pero veamos a continuación las similitudes y diferencias que existen entre estos dos conceptos: SIMILITUDES DIFERENCIAS No pueden ser instanciadas. Las Interfaces no pueden contener ninguna implementación.

No pueden ser selladas (final). Las Interfaces no pueden declarar miembros no públicos.

Las Interfaces no pueden extender clases.

#### 4.4. Ejemplo de creación y uso de una interfaz

Vamos a escribir una interfaz que declare el comportamiento que debe tener todo objeto multimedia que pueda ser reproducido (discos, películas, etc)

V1.07.02.23 // Fichero Reproducible.java interface Reproducible {

```java
void reproducir();
```

```java
void parar();
```

```java
void pausar();
}
```

Para utilizar esta interfaz crearemos, por ejemplo, una clase ReproductorMusica

```java
public class ReproductorMusica implements Reproducible {
    private boolean estaReproduciendo;
    @Override
    public void reproducir() {
        if (!estaReproduciendo) {
            System.out.println("Reproduciendo la música…");
            estaReproduciendo = true;
        }
    }
    @Override
    public void pausar() {
        if (estaReproduciendo) {
            System.out.println("Pausando la música…");
            estaReproduciendo = false;
        }
    }
    @Override
    public void parar() {
        if (estaReproduciendo) {
            System.out.println("Parando la música…");
            estaReproduciendo = false;
        }
    }
}
```

Nota Atención al uso de la etiqueta @Override para indicar al compilador que estamos sobrescribiendo los métodos de la interfaz. Esto nos ayudará a evitar errores en la denominación de los métodos sobrescritos.

V1.07.02.23

#### 4.5. Herencia múltiple

Hasta ahora hemos visto los casos de herencia simple. Recordemos el ejemplo de las figuras

Se puede dar el caso de que en nuestro programa tengamos figuras que se puedan dibujar y otras no. En este ejemplo, queremos indicar que los objetos de la clase Circulo se pueden dibujar mientras que de la clase Rectangulo no

Este diagrama refleja lo que se conoce como herencia múltiple. El concepto de herencia múltiple existe a nivel conceptual, pero no a nivel de implementación en Java de forma directa: no podemos hacer que una clase herede de dos clases diferentes directamente a través de la palabra reservada extends

```java
public class Circulo extends Figura, Dibujable {…}
```

Esto se debe a razones de conflictos de nombre de métodos o atributos derivados. Si la clase Figura y Dibujable tienen un método llamado mostrar(), no hay manera de indicarle a la clase Figura si utiliza el método mostrar() de Dibujable o de Figura, ya que lo ha heredado de ambas.

Para solucionar este diseño Java hace uso de las interfaces que estamos tratando en este apartado.

V1.07.02.23 Por tanto, siguiendo el anterior ejemplo, Dibujable dejará de ser una clase y pasará a ser una interfaz: // Dibujable.java interfaz Dibujable {

```java
void dibujar();
}
```

```java
public class Circulo extends Figura implements Dibujable {
```

```java
@Override
```

```java
public double getArea() {
```

```java
return this.ancho * this.alto;
```

}

```java
@Override
```

```java
public double getPerimetro() {
```

```java
return 2.0 * (this.ancho + this.alto);
```

}

```java
@Override
```

```java
public void dibujar() {
```

```java
System.out.println(“Dibujando círculo…”);
```

} }

```java
public class Rectangulo extends Figura {
```

```java
@Override
```

```java
public double getArea() {
```

```java
return this.ancho * this.alto;
```

}

```java
@Override
```

```java
public double getPerimetro() {
```

```java
return 2.0 * (this.ancho + this.alto);
```

} } Consideraciones para tener en cuenta sobre la herencia múltiple: • Una clase solo puede heredar como máxima de una clase. • Una clase puede implementar múltiples interfaces. Por ejemplo

```java
public class A implements interfaceB, interfaceC {…}
```

• Una interfaz puede heredar de varias interfaces y permitir diseños más jerárquicos. Por ejemplo: interface A {…}

interface B {…}

interface C extends A, B {…} // Hereda los métodos de A y B

V1.07.02.23

#### 4.6. Métodos default y static

A partir de Java 8 se pueden definir dos tipos de métodos dentro de la interfaz: default y static.

#### 4.6.1. Método default

Los métodos definidos como default se implementan en la misma interfaz y, por tanto, todas las clases que implementen la interfaz heredarán este método y su comportamiento. No obstante, también podemos sobrescribir el método para afinar el comportamiento. La sintaxis es la siguiente

```java
public interface MiInterfaz {
```

// Métodos regulares de la interfaz

// Métodos default

```java
default void metodoPorDefecto() {
```

// Aquí implementación del método

} } El objetivo de los métodos default es evitar que cuando una interfaz añada métodos nuevos, haya que actualizar todas las clases que implementen dicha interfaz implementando dichos métodos. Veamos un ejemplo. Tenemos una interfaz definida de la siguiente manera

```java
public interface Dibujable {
```

```java
public void dibujar2D();
}
```

Todos las clases que incluyan la interfaz Dibujable deben implementar el método dibujar2D().

```java
public class Rectangulo implements Dibujable {
```

```java
public void dibujar2D() { // Implementación…};
}
```

```java
public class Ciruclo implements Dibujable {
```

```java
public void dibujar2D() { // Implementación…};
}
```

```java
public class Triangulo implements Dibujable {
```

```java
public void dibujar2D() { // Implementación…};
}
```

// … y muchas más clases

V1.07.02.23 Después de un tiempo queremos actualizar dicha interfaz de manera que también se pueda dibujar en 3D

```java
public interface Dibujable {
```

```java
void dibujar2D();
```

```java
void dibujar3D();
}
```

Como consecuencia, todas las clases que hayan implementado dicha interfaz quedan inutilizadas ya que necesitan actualizarse al nuevo método de la interfaz. Para solucionar este problema, en parte, sería declarar el nuevo método dibujar3D() como default e implementarle, por ejemplo, un algoritmo básico para dibujar en 3D

```java
public interface Dibujable {
```

```java
void dibujar2D();
```

```java
default void dibujar3D() {
```

// Aquí implementar algoritmo básico para dibujar en 3D… } }

#### 4.6.2. Método static

Por otro lado, los métodos static se definen para indicar que el método es propio de la interfaz y no pertenecerá a la API de las clases que implementan dicha interfaz. Para acceder a este método deberemos indicar el nombre de la interfaz y el nombre del método. La sintaxis es la siguiente

```java
public interface MiInterfaz {
```

// Métodos regulares de la interfaz

// Métodos default

```java
static void metodoPorDefecto() {
```

// Aquí implementación del método

} } Utilizaríamos dicho método en las clases que implementan la interfaz de esta manera

```java
MiInterfaz.metodoPorDefecto();
```

La idea detrás de los métodos static en una interfaz es la de proporcionar un mecanismo simple que permita agrupar en un mismo lugar métodos relacionados sin tener que crear un objeto nuevo para ser usados. Nota La misma idea se puede aplicar con el uso de clases abstractas. No obstante, se debe tener en cuenta las ventajas y desventajas de usar clases e interfaces.

V1.07.02.23

### 5. Polimorfismo

#### 5.1. Concepto de polimorfismo

El diccionario define polimorfismo en el ámbito de la biología como: “Propiedad de las especies de seres vivos cuyos individuos pueden presentar diferentes formas o aspectos…” Este principio se puede aplicar al ámbito de la POO y en lenguajes de programación como Java. La idea parte del concepto de herencia donde una superclase se puede comportar o tomar la forma de las subclases que heredan de ella.

Recordemos que hemos hablado del concepto de sobrescritura de métodos (y el uso de la etiqueta @Override) en anteriores apartados: • Las subclases opcionalmente sobrescriben métodos de superclases concretas • Las subclases obligatoriamente sobrescriben los métodos abstractos de la superclase abstracta.

En este caso, hablamos del conocido técnicamente como polimorfismo de inclusión o herencia. Nota Existen otros tipos de polimorfismos que se pueden aplicar en Java. No obstante, en esta unidad nos centramos en el polimorfismo aplicado a la herencia.

#### 5.2. Ejemplo de polimorfismo

A partir del ejemplo del apartado 3.3 de la jerarquía de clases sobre figuras geométricas, veamos cómo funciona el polimorfismo en una clase de prueba

```java
public class Test {
```

```java
public static void main(String[] args) {
```

Figura f1 = new Rectangulo(2.0, 5.0); // polimorfismo de herencia

```java
Figura f2 = new Circulo(2.0);
```

double area1 = f1.getArea(); // área del rectángulo!!

double area2 = f2.getArea(); // ahora área del círculo!!

} } Vemos que podemos declarar un objeto Figura asignándole una instancia de un objeto Rectangulo o Circulo. Esto es puro polimorfismo: la clase Figura puede tomar la forma de un Rectangulo o Circulo.

V1.07.02.23 Otra manera de aprovechar el polimorfismo es a través de los parámetros pasados a una función

```java
public class Test {
```

```java
public void mostrarInformacion (Figura f) {
```

```java
System.out.println("Área: “ + f.getArea());
```

```java
System.out.println("Perímetro: “ + f.getPerímetro());
```

}

```java
public static void main(String[] args) {
```

```java
Rectangulo r = new Rectangulo(2.0, 5.0);
```

```java
Ciruclo c = new Circulo(2.0);
```

```java
mostrarInformacion(r);
```

```java
mostrarInformacion(c);
```

} } En este caso pasamos como parámetro un objeto de tipo Rectangulo o Circulo a una función que recibe objetos de tipo Figura como parámetro. Continuamos con más ejemplos para desplegar la potencia del polimorfismo, esta vez haremos uso de los arrays

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
ArrayList<Figura> figuras = new ArrayList<Figura>();
```

```java
Rectangulo r1 = new Rectangulo(2.0, 5.0);
```

```java
Circulo c1 = new Circulo(2.0);
```

```java
figuras.add(r1);
```

```java
figuras.add(c1);
```

// Atención a este fragmento

```java
for(Figura f : figuras) {
```

```java
System.out.println("Área: “ + f.getArea());
```

```java
System.out.println("Perímetro: “ + f.getPerímetro());
```

}

} } En el ejemplo declaramos un ArrayList donde almacenaremos objetos de tipo Figura. Como Rectangulo y Circulo son Figura podemos añadirlos a este array. Luego, la gracia está en f.getArea() dentro del bucle: si sacamos un objeto de tipo Rectangulo llamará al getArea() de Rectangulo, y si el objetos es Circulo llamará al getArea() de la clase Circulo.

V1.07.02.23

### 6. Jerarquía de la API de Java

En la jerarquía de Java existen: clases e interfaces. En el siguiente enlace se presenta el esquema de la jerarquía oficial de la API de Java 8: https://docs.oracle.com/javase/8/docs/api/java/lang/package-tree.html Nota Aunque estemos usando el compilador JDK 17 es perfectamente válido para nuestro propósito educativo.

En este apartado vamos a estudiar el objecto Object y algunos de sus métodos de uso común. También veremos la interfaz Comparable<T>, la cual nos resultará de bastante utilidad a la hora de comparar nuestras propias clases. Ambos elementos pertenecen al paquete java.lang (recuerda que este paquete se añade por defecto a nuestras aplicaciones).

#### 6.1. La clase Object

En la jerarquía de la API de Java todas sus clases son realmente subclases, excepto una: la clase Object. Sin embargo, cuando definimos una clase en Java de manera implícita hereda de la clase Object (no hace falta poner un extend). La clase Object está definida en el paquete java.lang, que a estas alturas del curso podrás adivinar que se importa automáticamente cada vez que escribimos un program. En otras palabras, las dos siguientes declaraciones son lo mismo

```java
public class Circulo {
}
public class Circulo extends Object {
}
```

Por otra parte, la clase Object incluye métodos que las subclases pueden usar, sobrecargar o sobrescribir. En el siguiente enlace se describen los métodos de la clase Object: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Object.html La mayoría de estos métodos se aplican en conceptos avanzados de programación en Java y que en principio no se tratarán en este curso. No obstante, entraremos en detalle con dos métodos que sí se utilizan habitualmente: toString() y equals().

#### 6.1.1. Sobrescribir el método toString

Este método de la clase Object convierte un objeto en una cadena de texto (objeto String) que contiene información sobre dicho objeto. Veamos un ejemplo

V1.07.02.23 // Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
Rectangulo r = new Rectangulo(2.0, 5.0);
```

```java
System.out.println(r.toString());
}
```

Salida por pantalla: Rectangulo@6d06d69c Este código un valor que muestra el identificador único que Java asigna a un objeto, y podemos deducir que dicho valor no muestra información útil al usuario. Si añadimos método toString() a nuestra clase estaremos sobrescribiendo el método de la clase Object; de esta manera, podemos adaptar la información que queremos mostrar sobre nuestro objeto en concreto

// Fichero Rectangulo.java

```java
public class Rectangulo extends Figura {
```

// Añadimos el método toString

```java
@Override
```

```java
public String toString() {
```

```java
System.out.println(“Area del rectángulo: “ + getArea());
```

```java
System.out.println(“Perímetro del rectangulo: “ + getPerimetro());
}
}
```

Ahora, la salida por pantalla de Test.java sería: Área del rectángulo: 10.0 Perímetro del rectángulo: 14.0 Una de las ventajas de sobrescribir el método toString() es que es el método por defecto que utiliza Java para formatear la información de un objeto a String. En el ejemplo Test.java podemos obviar la referencia al método toString() y funcionaría de la misma manera

```java
System.out.println(r);
```

#### 6.1.2. Sobrescribir el método equals

La clase Object también contiene un método equals() con la siguiente cabecera

```java
public boolean equals(Object obj)
```

El método toma un parámetro de tipo Object, esto es, que podemos incluir cualquier tipo de objeto de Java o que hayamos creado nosotros. Este método ya lo hemos utilizado a lo largo del curso para la comparación de cadenas con la clase String. Por ejemplo

V1.07.02.23

```java
String s1 = “cadena”;
String s2 = “cadena”;
String s3 = new String(“cadena”);
if (s1.equals(s2) {
    System.out.println(“Son iguales”);
```

El objetivo de equals() es comparar si los datos que contiene el objeto son iguales, y no tanto si ambos objetos son iguales a nivel de referencia en memoria. Nota Recordemos que en el caso de los String si comparamos con == no funcionaba correctamente, porque en el ejemplo s1 y s2 son el mismo objeto (s3 sería un objeto diferente). Por tanto, la clase String tiene sobrescrito el método equals() que compara las cadenas de texto de sus objetos (que es el contenido) y por eso funciona.

Vamos a aprender cómo sobrescribir el método equals() de la clase Object para poder comparar adecuadamente objetos de nuestra propia clase. Tomemos como ejemplo la clase Rectangulo

```java
public class Rectangulo extends Figura {
```

// Añadimos el método equals()

```java
@Override
```

```java
public boolean equals(Object obj) {
```

```java
Rectangulo r = (Rectangulo) obj;
```

```java
return this.getArea() == r.getArea();
```

} } Esta es la forma más simple de sobrescribir el método equals() en nuestra clase. En caso de utilizarlo para programas sencillos podría valer perfectamente. No obstante, cuando empecemos a utilizar técnicas de Java más avanzadas podremos encontrarnos con ciertos errores al usar esta versión.

Estas son las recomendaciones que dan los creadores de Java sobre la implementación más adecuada del método equals(): • Determinar si el parámetro Object es el mismo objeto que el objeto que llama al método. Para ello hacemos la comparación obj == this, devolviendo true en ese caso.

• Devolver false el parámetro Object es null. • Devolver false si el parámetro Object y el objeto que llama al método no son la misma clase. • Hacer casting del parámetro Object al mismo tipo que el objeto que llama al método, solo si ambos son de la misma clase. Veamos el ejemplo anterior ampliado para seguir estas recomendaciones

```java
public class Rectangulo extends Figura {
```

// Atributos y métodos ya implementados en anteriores ejemplos

// Añadimos el método equals()

```java
@Override
```

V1.07.02.23

```java
public boolean equals(Object obj) {
```

if(obj == this)

```java
return true;
```

else

if(obj == null)

```java
return false;
```

else

if(obj.getClass() != this.getClass())

```java
return = false;
```

```java
Rectangulo r = (Rectangulo) obj;
```

```java
return this.getArea() == r.getArea();
```

} } Ahora hagamos una prueba: // Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
Rectangulo r1 = new Rectangulo(2.0, 5.0);
```

```java
Rectangulo r2 = new Rectangulo(2.0, 5.0);
```

```java
Rectangulo r3 = new Rectangulo(10.0, 5.0);
```

```java
System.out.println(r1.equals(r2));
```

```java
System.out.println(r1.equals(r3));
```

} }

Salida por pantalla: true false

#### 6.2. La interfaz Comparable<T>

Otra forma de poder comparar dos objetos es haciendo uso del método compareTo de la interfaz Comparable<T>. Esta interfaz se define de la siguiente manera

```java
public interface Comparable<T> {
```

```java
public int compareTo(T obj);
}
```

Nota El <T> hace referencia al concepto de programación genérica, que básicamente indica que podemos sustitur la T por cualquier objeto sobre el que queramos implementar la comparación.

V1.07.02.23 El método compareTo(), a diferencia del método equals(), devuelve un entero. Normalmente según su valor indicará: • Devuelve 1: el objeto que llama al método es mayor que el objeto del parámetro. • Devuelve -1: el objeto que llama al método es menor que el objeto del parámetro.

• Devuelve 0 (cero): ambos objetos son iguales. Vamos un ejemplo implementando la interfaz en el ejemplo de la clase Rectangulo

```java
public class Rectangulo extends Figura implements Comparable<Rectangulo> {
```

// Atributos y métodos ya implementados en anteriores ejemplos

// Añadimos el método compareTo()

```java
@Override
```

```java
public int compareTo(Rectangulo r) {
```

if(this.getArea() > r.getArea())

```java
return 1;
```

else if(this.getArea() < r.getArea())

```java
return -1;
```

else

```java
return 0;
}
}
```

Ahora hagamos una prueba: // Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
Rectangulo r1 = new Rectangulo(2.0, 5.0);
```

```java
Rectangulo r2 = new Rectangulo(2.0, 5.0);
```

```java
Rectangulo r3 = new Rectangulo(10.0, 5.0);
```

if(r1.compareTo(r2) > 0)

```java
System.out.println(“Es mayor”);
```

else if(r1.comparteTo(r2) < 0)

```java
System.out.println(“Es menor”);
```

else

```java
System.out.println(“Son iguales”);
```

} } Por otra parte, el uso de la interfaz Comparable<T> es de gran utilidad cuando queremos ordenar objetos dentro de una lista. En el caso de listas estáticas utilizaremos el método sort() de la clase Arrays: // Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
Rectangulo rectangulos = new Rectangulo[3];
```

```java
rectangulos[0] = new Rectangulo(2.0, 5.0);
```

```java
rectangulos[1] = new Rectangulo(2.0, 5.0);
```

V1.07.02.23

```java
rectangulos[2] = new Rectangulo(10.0, 5.0);
```

```java
Arrays.sort(rectangulos);
```

} }

En el caso de de listas dinámicas, utilizaremos el método el método sort() de la clase Collections: // Fichero Test.java

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
ArrayList<Rectangulo> rectangulos = new ArrayList<Rectangulo>();
```

```java
rectangulos.add(new Rectangulo(2.0, 5.0));
```

```java
rectangulos.add(new Rectangulo(2.0, 5.0));
```

```java
rectangulos.add(new Rectangulo(10.0, 5.0));
```

```java
Collections.sort(rectangulos);
```

} } En ambos casos, el resultado es la ordenación de la lista que hayamos pasado al método sort(). Nota Es fundamental que para que Arrays.sort() y Collections.sort() puedan ordenar los objetos, la clase del objeto a ordenar tenga implementado el método compareTo() de la interfaz Comparable.

Por último, debemos tener en cuenta la relación entre el método compareTo() y equals(): • En caso de tener intención de comparar objetos de la clase, es recomendable implementar ambos métodos para que haya consistencia en la comparación de los objetos de dicha clase.

V1.07.02.23

### 7. Terminología

agregación, api de java, asociación, clases abstractas, clases finales, comparación de objectos, composición, herencia, herencia múltiple, interfaces, interfaz Comparable, jerarquía, métodos abstractos, métodos finales, objeto object, interfaz comparable, polimorfismo, sobrecarga, sobrescritura, subclase, super, superclase, this.

V1.07.02.23

### 8. Bibliografía

Libro “Java Programming 9th Edition” de Joyce Farrell Apuntes de José Chamorro del CFGS DAW del . https://docs.oracle.com/
