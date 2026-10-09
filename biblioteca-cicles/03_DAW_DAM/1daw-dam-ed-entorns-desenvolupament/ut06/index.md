---
layout: default
title: "UT6 — Refactorización, optimización y documentación — Entorns de Desenvolupament | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT6 Completa"
prev_url: "../ut05/ut05actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT5"
next_url: "../ut06/ut0601.html"
next_label: "6.1 U7. Refactorización ➡️"
---

# 📘 UT6 — Refactorización, optimización y documentación (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**6.1 U7. Refactorización**](#ut0601) (o [obrir en pàgina individual ➡️](./ut0601.md) )
> - [**6.2 U7.2 - Documentación**](#ut0602) (o [obrir en pàgina individual ➡️](./ut0602.md) )
> - [**✍️ Activitats pràctiques UT6**](#ut06actividades) (o [obrir en pàgina individual ➡️](./ut06actividades.md) )

---

## 6.1 U7. Refactorización

---

Unidad 6: Refactorización Módulo: EDE

¿Qué es la refactorización? Técnica disciplinada para efectuar cambios en la estructura interna de un código sin cambiar su comportamiento externo.

¿Por qué refactorizar?

- Para mejorar su diseño
- Conforme se modifica, el software cambia su estructura.
- Eliminar código duplicado simplifica su mantenimiento.
- Para hacerlo más entendible

La legibilidad del código facilita su mantenimiento.

- Para encontrar errores

Al reorganizar un programa, se pueden apreciar con mayor facilidad las suposiciones que hayamos podido hacer.

- Para programar más rápido

Al mejorar el diseño del código, mejorar su legibilidad y reducir los errores que se cometen al programar, se mejora la productividad de los programadores.

¿Cuándo se debe refactorizar?

- Cuando se está escribiendo nuevo código

Al añadir nueva funcionalidad a un programa (o modificar su funcionalidad existente), puede resultar conveniente refactorizar

- para que éste resulte más fácil de entender, o
- para simplificar la implementación de las nuevas funcionalidades.
- Cuando se corrige un error

La mayor dificultad de la depuración de programas radica en que hemos de entender exactamente cómo funciona el programa para encontrar el error. Cualquier refactorización que mejore la calidad del código tendrá efectos positivos en la búsqueda del error.

- Cuando se revisa el código

Una de las actividades más productivas desde el punto de vista de la calidad del software es la realización de revisiones del código (recorridos e inspecciones).

¿Por qué es importante la refactorización? Cuando se corrige un error o se añade una nueva función, el valor actual de un programa aumenta. Sin embargo, para que un programa siga teniendo valor, debe ajustarse a nuevas necesidades (mantenerse), que puede que no sepamos prever con antelación. La refactorización, precisamente, facilita la adaptación del código a nuevas necesidades.

¿Qué síntomas indican que se debería refactorizar? El código es difícil de entender cuando: 1. Usa identificadores mal escogidos 2. Incluye fragmentos de códigos duplicados 3. Incluye lógica condicional compleja 4. Los métodos usan un número elevado de parámetros 5. Está dividido en módulos enormes 6.

Un método accede continuamente a los datos de un objeto de una clase diferente a la clase en la que está definida (posiblemente, el método debería pertenecer a la otra clase). 7. Etc.

Patrones de refactorización más comunes

### 1. Rename

Patrones de refactorización más comunes

### 2. Move

Patrones de refactorización más comunes

### 3. Extract Local Variable

Patrones de refactorización más comunes

### 4. Extract Constant

Patrones de refactorización más comunes

### 5. Convert Local Variable to Field

---

## 6.2 U7.2 - Documentación

U7.2 - Documentación 1º DAW

Introducción

- Cuando empezamos con cualquier lenguaje de programación o

Framework es muy importante que desde el principio controlemos la API.

- Application Program Interface.
- En el caso de Java, en la API vienen descritos todos los paquetes,

clases, métodos y atributos del lenguaje.

Introducción

- Un buen programador debe ser capaz de
- Saber leer e interpretar la documentación.
- Saber documentar sus aplicaciones correctamente.

Leer documentación

- https://docs.oracle.com/javase/8/docs/api/

Leer documentación

- https://docs.oracle.com/en/java/javase/22/docs/api/index.html

Leer documentación

- Independientemente del formato de la documentación, en la

documentación de una clase Java siempre encontraremos

- Paquete al que pertenece
- Nombre de la clase
- Objeto del que hereda (en caso que herede)
- Descripción de la clase
- Resumen de atributos (no privados) y método de la clase. OJO!! RESUMEN!!!

Suele coger solo la primera frase

- Detalle de los atributos
- Detalle de los métodos

Generar documentación

- ¿Qué es Javadoc?
- Herramienta de Oracle para la generación de documentación de APIs en

formato HTML a partir del código fuente Java.

- Es el estándar de la industria para documentar clases Java y es ampliamente

utilizado en el desarrollo de software.

- Genera la documentación automáticamente a partir del código.
- Esta documentación se puede visualizar mediante un navegador web.
- Para otros lenguajes no se utiliza Javadoc pero existen multitud de

herramientas específicas para automatizar la generación de código.

Generar documentación

- Toda la documentación que queramos que se tenga en cuenta para

Javadoc ha de empezar con /** y terminar con */

Generar documentación

- Toda la documentación que queramos que se tenga en cuenta para

Javadoc ha de empezar con /** y terminar con */

Generar documentación

- Vemos que dependiendo de donde estemos escribiendo la anotación,

el propio JavaDoc nos rellena con etiquetas especiales útiles para el tipo de bloque.

- @author: Autor de la clase o método.
- @version: Especifica la versión de la clase o método.
- @param: Describir parámetro del método
- @return: Explica qué devuelve el método
- @see: Referencia a otra clase
- @throws: Documenta excepciones que puede arrojar.
- @deprecated: Marca el método como obsoleto

Generar documentación

Generar documentación

- Una vez tenemos nuestro código correctamente comentado con las

etiquetas necesarias para Javadoc, podemos ver que esta documentación ya es accesible desde el propio código con la ayuda contextual propia de java que aparece cuando pulsamos ctrl+espacio.

- Dependiendo de la visibilidad de los atributos o métodos, esta

documentación será accesible o no.

Generar documentación

- Para generar la documentación en formato HTML y que así sea accesible a

modo de manual es muy sencillo.

- Boton derecho sobre el proyecto
- Exportar->Java->JavaDoc
- Seleccionamos de qué clases queremos crear la documentación (se deben excluir

tests, clases de prueba, etc)

- Finalizamos el asistente
- La documentación estará creada en el proyecto dentro de una carpeta

llamada doc

¿Dudas?

---

## ✍️ Activitats pràctiques UT6

> **✍️ Activitat Pràctica 6.1 — U7A1**
> ### 📄 Ejercicios.pdf
>
> > **✍️ Ejercicio 01. A la vista del siguiente código, identifique y apli**
> > Ejercicio 01. A la vista del siguiente código, identifique y aplique las refactorizaciones que considere más convenientes. (Contestar un texto con una explicación de las mejoras y volver a generar el código con las mejoras propuestas).
>
> ### 📄 ex1.zip
>
> #### 📦 Persona.java
>
> ```java
> package ex1;
>
> public class Persona {
>
>
>
> 	String numtlf;
>
>
>
> 	// Constructor
>
> 	public Persona(String numtlf) {	
>
> 		super();
>
> 		this.numtlf = numtlf;
>
> 	}
>
> 	//Getter y setter
>
> 	public String getNumeroDeTelefono() {
>
> 		return numtlf;
>
> 	}
>
> 	public void setNumeroDeTelefono(String numtlf) {
>
> 		this.numtlf = numtlf;
>
> 	}
>
> }
> ```
>
> ---
>
> #### 📦 Profesor.java
>
> ```java
> package ex1;
>
> public class Profesor extends Persona {
>
>
>
> 	String nombre;
>
> 	int edad;
>
> 	String numtlf;
>
> 	List<Prestamo> prestamos;
>
>
>
> 	//Constructor heredado
>
> 	public Profesor(String nombre, int edad, String numtlf) {
>
> 		super(numtlf);
>
> 		this.nombre = nombre;
>
> 		this.edad = edad;
>
> 	}
>
>
>
> 	//Getters y setters
>
> 	public String getNombre() {
>
> 		return nombre;
>
> 	}
>
> 	public void setNombre(String nombre) {
>
> 		this.nombre = nombre;
>
> 	}
>
> 	public int getEdad() {
>
> 		return edad;
>
> 	}
>
> 	public void setEdad(int edad) {
>
> 		this.edad = edad;
>
> 	}
>
> 	public String getNumeroDeTelefono() {
>
> 		return numtlf;
>
> 	}
>
> 	public void setNumeroDeTelefono(String numtlf) {
>
> 		this.numtlf = numtlf;
>
> 	}
>
> 	//----------------
>
>
>
> 	public void printInformacioPersonal() {
>
> 		System.out.println("Nombre: " + nombre);
>
> 		System.out.println("Edad: " + edad);
>
> 		System.out.println("Telefono: " + numtlf);
>
>
>
> 	}
>
>
>
> 	public void printListaPrestamos() {
>
>
>
> 		for (Prestamo p: prestamos) {
>
> 			System.out.println(p);
>
> 		}
>
> 	}
>
> }
> ```
>
> ---
>
> #### 📦 principal.java
>
> ```java
> package ex1;
>
> //Programa main
>
> public class principal {
>
>
>
> 	public static void main(String[] args) {
>
>
>
> 		Profesor profe = new Profesor("Vicent", 21, "695263711");
>
>
>
> 		profe.printInformacioPersonal();
>
>
>
> 		profe.printListaPrestamos();
>
> 	}
>
> }
> ```

> **✍️ Activitat Pràctica 6.2 — U7A2**
> ### 📄 ex2.zip
>
> #### 📦 Game.java
>
> ```java
> package ex2;
>
> public class Game {
>
>
>
> 	//Constantes
>
> 	final String right = "Derecha";
>
> 	final String left = "Izquierda";
>
> 	final String up = "Arriba";
>
> 	final String down = "Abajo";
>
>
>
> 	Player player1 = new Player();
>
>
>
> 	public void movement(String m) {
>
> 		if(m.equalsIgnoreCase(right)) {
>
> 			player1.setX(player1.getX() + 1);
>
> 			System.out.println(player1.getX() + ", " + player1.getY());
>
> 		}
>
> 		if(m.equalsIgnoreCase(left)) {
>
> 			player1.setX(player1.getX() - 1);
>
> 			System.out.println(player1.getX() + ", " + player1.getY());
>
> 		}
>
> 		if(m.equalsIgnoreCase(up)) {
>
> 			player1.setY(player1.getY() - 1);
>
> 			System.out.println(player1.getX() + ", " + player1.getY());
>
> 		}
>
> 		if(m.equalsIgnoreCase(down)) {
>
> 			player1.setY(player1.getY() + 1);
>
> 			System.out.println(player1.getX() + ", " + player1.getY());
>
> 		}
>
> 	}
>
> }
> ```
>
> ---
>
> #### 📦 Player.java
>
> ```java
> package ex2;
>
> public class Player {
>
>
>
> 	int x, y;
>
>
>
> 	//Getters y setters
>
> 	public int getX() {
>
> 		return x;
>
> 	}
>
> 	public void setX(int x) {
>
> 		this.x = x;
>
> 	}
>
>
>
> 	public int getY() {
>
> 		return y;
>
> 	}
>
> 	public void setY(int y) {
>
> 		this.y = y;
>
> 	}
>
> }
> ```
>
> ---
>
> #### 📦 menu.java
>
> ```java
> package ex2;
>
> //Programa main
>
> public class menu {
>
>
>
> public static void main(String[] args) {
>
>
>
> 		//Crear objeto que va a ejecutar el m�todo
>
> 		Game partida1 = new Game ();
>
>
>
> 		partida1.movement("Abajo");
>
> 		partida1.movement("Derecha");
>
> 		partida1.movement("Derecha");
>
> 		partida1.movement("Abajo");
>
> 		partida1.movement("Arriba");
>
>
>
> 	}
>
> }
> ```
>
> ### 📄 Ejercicios_2.pdf
>
> > **✍️ Ejercicio 02. A continuación tiene un fragmento de un juego, en c**
> > Ejercicio 02. A continuación tiene un fragmento de un juego, en concreto la clase que se encarga de ver el movimiento que se desea hacer y mover las coordenadas del jugador en dicha dirección (considerando que el punto 0,0 está arriba a la izquierda). Identifique qué refactorizaciones puede realizar en ambas clases. (Contestar un texto con una explicación de las mejoras y volver a generar el código con las mejoras propuestas).

> **✍️ Activitat Pràctica 6.3 — U7A3**
> Unidad 7
>
> U7 – A3
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> Una de las prácticas más útiles cuando programamos es mantener un control de versiones de nuestro código. Éste, además de permitirnos guardar en repositorios remotos como GitHub nuestro código nos permitirá mantener un seguimiento de nuestro código, pudiendo volver a versiones anteriores desde el propio entorno o viendo quién ha realizado qué cambio.
>
> Investiga como se integra Git en Eclipse e impleméntalo. Para ello, haz uso de la cuenta que creaste en la unidad 3.
>
> Crea un tutorial paso a paso con explicación y capturas de todos los pasos necesarios para subir desde 0 un proyecto sin seguimiento a GitHub desde Eclipse.
>
> Una vez hecho esto, investiga con qué funcionalidades nos puede ayudar tener nuestro código versionado. Realízalas y explícalo brevemente.

> **✍️ Activitat Pràctica 6.4 — U7A4**
> ### 📄 U7_A4.pdf
>
> Unidad 7
>
> U7 – A4
>
> Instrucciones
>
> - Entrega un fichero comprimido con el proyecto.
>
> Partiendo del código proporcionado, crea un proyecto Java, crea las pertinentes clases y divide el código en éstas.
>
> Una vez realizado, documenta el proyecto y genera la documentación. Asegúrate que esta es accesible desde el navegador web.
>
> ### 📄 proyecto.java
>
> ```java
> public class Persona {
>     private String nombre;
>     private int edad;
>
>     public Persona(String nombre, int edad) {
>         this.nombre = nombre;
>         this.edad = edad;
>     }
>
>     public String getNombre() {
>         return nombre;
>     }
>
>     public void setNombre(String nombre) {
>         this.nombre = nombre;
>     }
>
>     public int getEdad() {
>         return edad;
>     }
>
>     public void setEdad(int edad) {
>         this.edad = edad;
>     }
>
>     public String descripcion() {
>         return "Persona: " + nombre + ", Edad: " + edad;
>     }
> }
>
> public class Empleado extends Persona {
>     private String empresa;
>
>     // Constructor
>     public Empleado(String nombre, int edad, String empresa) {
>         super(nombre, edad);
>         this.empresa = empresa;
>     }
>
>     public String getEmpresa() {
>         return empresa;
>     }
>
>     public void setEmpresa(String empresa) {
>         this.empresa = empresa;
>     }
>
>     @Override
>     public String descripcion() {
>         return super.descripcion() + ", Empresa: " + empresa;
>     }
>
>     public void actualizarDatos(String nombre, int edad, String empresa) {
>         setNombre(nombre);
>         setEdad(edad);
>         setEmpresa(empresa);
>     }
> }
>
> public class Producto {
>     public String nombre;
>     private double precio;
>
>     public Producto(String nombre, double precio) {
>         this.nombre = nombre;
>         this.precio = precio;
>     }
>
>     public double getPrecio() {
>         return precio;
>     }
>
>     public void setPrecio(double precio) {
>         this.precio = precio;
>     }
>
>     public void aplicarDescuento(double porcentaje) {
>         precio -= precio * (porcentaje / 100);
>     }
> }
>
> public class Pedido {
>     public Empleado empleado;
>     public Producto producto;
>
>     public Pedido(Empleado empleado, Producto producto) {
>         this.empleado = empleado;
>         this.producto = producto;
>     }
>
>     public String descripcionPedido() {
>         return "Pedido realizado por: " + empleado.getNombre() + ", Producto: " + producto.nombre;
>     }
>
>     public void actualizarPedido(Empleado empleado, Producto producto) {
>         this.empleado = empleado;
>         this.producto = producto;
>     }
> }
> ```
