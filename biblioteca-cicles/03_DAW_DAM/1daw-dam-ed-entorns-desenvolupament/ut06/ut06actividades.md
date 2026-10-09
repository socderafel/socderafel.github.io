---
layout: default
title: "✍️ Activitats pràctiques UT6 — Entorns de Desenvolupament | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT6 — Refactorización, optimización y documentación"
prev_url: "../ut06/ut0602.html"
prev_label: "⬅️ 6.2 U7.2 - Documentación"
next_url: "../ut07/index.html"
next_label: "📘 UT7 Completa ➡️"
---

# ✍️ Activitats pràctiques UT6

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
