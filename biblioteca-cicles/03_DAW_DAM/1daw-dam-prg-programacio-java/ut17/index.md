---
layout: default
title: "UT17 — Proyecto Integrador — Programació en Java (1r DAW / DAM) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT17 Completa"
prev_url: "../ut16/ut1604.html"
prev_label: "⬅️ 16.4 ContadorSimpleFX mejorado"
next_url: "../ut17/ut1701.html"
next_label: "17.1 Proyectos a elegir ➡️"
---

# 📘 UT17 — Proyecto Integrador (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**17.1 Proyectos a elegir**](#ut1701) (o [obrir en pàgina individual ➡️](./ut1701.md) )
> - [**17.2 AjedrezFX**](#ut1702) (o [obrir en pàgina individual ➡️](./ut1702.md) )
> - [**17.3 ClaseFX**](#ut1703) (o [obrir en pàgina individual ➡️](./ut1703.md) )
> - [**17.4 controlsfx-8.40.11**](#ut1704) (o [obrir en pàgina individual ➡️](./ut1704.md) )
> - [**17.5 Introducción a Canvas**](#ut1705) (o [obrir en pàgina individual ➡️](./ut1705.md) )
> - [**17.6 Introducción a AnimationTimer en JavaFX**](#ut1706) (o [obrir en pàgina individual ➡️](./ut1706.md) )
> - [**17.7 compartirDatos**](#ut1707) (o [obrir en pàgina individual ➡️](./ut1707.md) )

---

## 17.1 Proyectos a elegir

---

Programación Proyecto Integrador

- L i sta d e p roye c tos a e l e g i r

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS Proyectos a elegir Programación

### UD 15: Proyecto Integrador

Ahorcado Programación

Tic Tac Toe & Cuatro en raya Programación

Sudoku Programación

¿Quién quiere ser millonario? Programación

Trivial Programación

Tiendas de campaña & árboles Programación

Hundir la flota Programación

2048 Programación

Logo Quiz Programación

Juegos de memoria Programación

Cruzigramas & Sopa de letras Programación

Aplicación CRUD Programación

Juego de cartas: Solitario, La Brisca, … Programación

Nonogram Programación

Buscaminas Programación

Ajedrez & Damas Programación

Pong Programación

Darkest Dungeon Programación

---

## 17.2 AjedrezFX

#### 📦 Main.java

```java
package aplicacion;

	

import javafx.application.Application;

import javafx.fxml.FXMLLoader;

import javafx.scene.Scene;

import javafx.scene.layout.Pane;

import javafx.stage.Stage;

public class Main extends Application {

	

	@Override

	public void start(Stage primaryStage) {

		

		try {

			

			FXMLLoader loader = new FXMLLoader();

			loader.setLocation(Main.class.getResource("/vista/Tablero.fxml"));

			

			// Cargar la ventana

			Pane ventana = (Pane) loader.load();

			

			// Cargar la Scene

			Scene scene = new Scene(ventana);

			

			// Asignar propiedades al Stage

			primaryStage.setTitle("Ajedrez 1.0");

			primaryStage.setResizable(false);	

			

			// Asignar la scene y mostrar

			primaryStage.setScene(scene);

			primaryStage.show();			

			

		} catch(Exception e) {

			e.printStackTrace();

		}

	}

	

	public static void main(String[] args) {

		launch(args);

	}

	

}
```

---

#### 📦 TableroController.java

```java
package controlador;

import javafx.fxml.FXML;

import javafx.scene.image.ImageView;

import javafx.scene.layout.AnchorPane;

import modelo.Juego;

import util.Figuras;

import util.Util;

import vista.Alfil;

import vista.Caballo;

import vista.Figura;

import vista.Peon;

import vista.Reina;

import vista.Rey;

import vista.Torre;

public class TableroController {

	@FXML private AnchorPane boardPane;

    @FXML private ImageView img_tablero;

        

    //Atributos

    private static Juego juego;    

    

    @FXML

    void initialize() {

    	//Crear el juego nuevo

    	juego = new Juego();    	

    			

    	//Insertar todas las piezas

    	insertarPiezas(Figuras.NEGRO, 135, 45);

    	insertarPiezas(Figuras.BLANCO, 585, 675);		

    }

    

    private void insertarPiezas(char color, int y1, int y2) {

    	

    	// 45 - 135 - 225 - 315 - 405 - 495 - 585 - 675

    	int x = 45;

    	for (int i = 0; i < 8; i++) {

    		

    		Peon peon = new Peon(Figuras.PEON, color, x, y1);

    		this.boardPane.getChildren().add( peon );

    		

    		Figura f = null;

    		

    		//Añadir Figuras

    		switch (i) {

			case 0: 

			case 7: f = new Torre(Figuras.posicion[i], color, x, y2); break;

			case 1: 

			case 6: f = new Caballo(Figuras.posicion[i], color, x, y2); break;

			case 2: 

			case 5: f = new Alfil(Figuras.posicion[i], color, x, y2); break;

			case 3: f = new Rey(Figuras.posicion[i], color, x, y2);   break;

			case 4: f = new Reina(Figuras.posicion[i], color, x, y2); break;

			}

    		this.boardPane.getChildren().add( f );

    		

    		//

    		if (color == Figuras.BLANCO) {

    			juego.piezasBlancas.add(peon);

    			juego.piezasBlancas.add( f );

    		}

    		else {

    			juego.piezasNegras.add(peon);

    			juego.piezasNegras.add( f );

    		}

    		

    		x += 90;

		}    	

    }

    

    public static boolean jugada(Figura f, double x, double y) {

    	

    	int x1 = Util.getPosicionCasilla(y);

    	int y1 = Util.getPosicionCasilla(x);

    	

    	return juego.moverFigura(f, x1, y1);    	

    }

    

}
```

---

#### 📦 Juego.java

```java
package modelo;

import java.util.ArrayList;

import java.util.Iterator;

import util.Figuras;

import util.Util;

import vista.Figura;

public class Juego {

	//Atributos

	private int[][] tablero;

	

	public ArrayList<Figura> piezasBlancas;

	public ArrayList<Figura> piezasNegras;

	

	//Constructor

	public Juego() {

		

		this.tablero = Figuras.tableroInicial;

		

		this.piezasBlancas = new ArrayList<Figura>();

		this.piezasNegras  = new ArrayList<Figura>();

	}

	

	//Devuelve TRUE si se puede mover la figura, FALSE en caso contrario

	public boolean moverFigura(Figura f, int x, int y) {

		

		boolean figuraMovida = false;

		

		//Recuperar casilla INICIAL, la casilla FINAL es la pasada como parámetro...

		int x1 = Util.getPosicionCasilla(f.getY());

    	int y1 = Util.getPosicionCasilla(f.getX());

    	

    	//TODO comentar esto !!! 

		System.out.println("Origen:  " + x1 + " " + y1 + " - " + this.tablero[x1][y1]);

		System.out.println("Destino: " + x + " " + y + " - " + this.tablero[x][y]);

				

		//Si el movimiento está permitido segun la figura que sea...

		if (f.movimientoPermitido(tablero, x1, y1, x, y)) {

		

			//Si la casilla destino NO está vacía...

			if (this.tablero[x][y] != Figuras.VACIO) {

		

				//TODO recuperar ficha de esa posición

				Figura fd = recuperarFiguraPosicion(x, y);

				

				//Si son de distinto color...

				if (f.getColor() != fd.getColor()) {

				

					//TODO si es del rival... matarla

				

					//TODO como desaparece la ficha MUERTA ???? pues la tienes en fd

			

					//TODO Marcar en el tablero donde se ha movido la ficha

					

					//Marcar que SI se ha movido la figura

					figuraMovida = true;

				}				

				else {

					//Marcar que NO se ha movido la figura

					figuraMovida = false;

				}

				

				//TODO comprobar fin partida

				if (finPartida()) {

					

				}

			}

			else {

				//Mover a casilla VACIA

				

				//TODO Marcar en el tablero donde se ha movido la ficha

				

				//Marcar que SI se ha movido la figura

				figuraMovida = true;

			}

		}		

		

		return figuraMovida;		

	}

	private Figura recuperarFiguraPosicion(int x, int y) {

		//Buscar en fichas BLANCAS		

		for (Iterator<Figura> iterator = piezasBlancas.iterator(); iterator.hasNext();) {

			

			Figura figura = (Figura) iterator.next();

			

			if (figura.getX() == x && figura.getY() == y) {

				return figura;

			}			

		}

		

		//Buscar en fichas NEGRAS

		for (Iterator<Figura> iterator = piezasNegras.iterator(); iterator.hasNext();) {

			

			Figura figura = (Figura) iterator.next();

			

			if (figura.getX() == x && figura.getY() == y) {

				return figura;

			}			

		}

		

		return null;

	}

	

	private boolean finPartida() {

		

		//TODO marcar quien gana BLANCAS o NEGRAS

		

		return false;

	}

	

}
```

---

#### 📦 Figuras.java

```java
package util;

public interface Figuras {

	char BLANCO = 'B';

	char NEGRO  = 'N';

	

	int SIZE    = 80;

	

	int VACIO   = -1;

	int PEON    = 0;

	int TORRE   = 1;

	int CABALLO = 2;

	int ALFIL   = 3;

	int REINA   = 4;

	int REY     = 5;

	

	int[] posicion = { TORRE, CABALLO, ALFIL, REINA, REY, ALFIL, CABALLO, TORRE };

	

	int[][] tableroInicial = { 

			{ TORRE, CABALLO, ALFIL, REINA, REY, ALFIL, CABALLO, TORRE },

			{ PEON, PEON, PEON, PEON, PEON, PEON, PEON, PEON },

			{ VACIO, VACIO, VACIO, VACIO, VACIO, VACIO, VACIO, VACIO },

			{ VACIO, VACIO, VACIO, VACIO, VACIO, VACIO, VACIO, VACIO },

			{ VACIO, VACIO, VACIO, VACIO, VACIO, VACIO, VACIO, VACIO },

			{ VACIO, VACIO, VACIO, VACIO, VACIO, VACIO, VACIO, VACIO },

			{ PEON, PEON, PEON, PEON, PEON, PEON, PEON, PEON },

			{ TORRE, CABALLO, ALFIL, REINA, REY, ALFIL, CABALLO, TORRE }

	};

	

	String[] STR_FIGURAS = {"peon", "torre", "caballo", "alfil", "reina", "rey"};

	

}
```

---

#### 📦 Util.java

```java
package util;

public class Util {

	private static int[] rangos = {45, 135, 225, 315, 405, 495, 585, 675};

	

	public static double redondearCoordenada( double x ) {

		

		for (int i = 0; i < rangos.length-1; i++) {

						

			if (isBetween(x-50, rangos[i], rangos[i+1])) {

				return rangos[i];

			}

		}

		

		return 675;

	}

	

	private static boolean isBetween(double x, int lower, int upper) {

		return lower <= x && x <= upper;

	}

	

	public static int getPosicionCasilla( double x ) {

		

		for (int i = 0; i < rangos.length; i++) {

						

			if (x == rangos[i]) {

				return i;	

			}		

		}

		

		return -1;

	}	

	

}
```

---

#### 📦 Alfil.java

```java
package vista;

public class Alfil extends Figura {

	public Alfil(int tipo, char color, double posX, double posY) {

		super(tipo, color, posX, posY);		

	}

	@Override

	public boolean movimientoPermitido(int[][] tablero, int x1, int y1, int x2, int y2) {

		System.out.println("Alfil");

		

		return (Math.random() > 0.5);

	}

}
```

---

#### 📦 Caballo.java

```java
package vista;

public class Caballo extends Figura {

	public Caballo(int tipo, char color, double posX, double posY) {

		super(tipo, color, posX, posY);		

	}

	@Override

	public boolean movimientoPermitido(int[][] tablero, int x1, int y1, int x2, int y2) {

		System.out.println("Caballo");

		

		return (Math.random() > 0.5);

	}

}
```

---

#### 📦 Figura.java

```java
package vista;

import controlador.TableroController;

import javafx.geometry.Point2D;

import javafx.scene.image.Image;

import javafx.scene.image.ImageView;

import javafx.scene.input.MouseEvent;

import util.Figuras;

import util.Util;

// http://bekwam.blogspot.com/2016/02/moving-game-piece-on-javafx-checkerboard.html

// https://docs.oracle.com/javafx/2/drag_drop/HelloDragAndDrop.java.html

public abstract class Figura extends ImageView {

	

	//Atributos

	private char color;

	private double x;

	private double y;

	//Constructor

	public Figura(int tipo, char color, double posX, double posY) {

		super();

		

		this.color = color;		

		this.x = posX;

		this.y = posY;

		

		//Asignar imagen

		String str_img = "/vista/img/" + Figuras.STR_FIGURAS[tipo] + color + ".png";

		Image img = new Image(getClass().getResourceAsStream(str_img));        

		this.setImage(img);        

		//Asignar posición y tamaño

		this.setX(posX);		

		this.setY(posY);

		this.setFitWidth(Figuras.SIZE);

		this.setFitHeight(Figuras.SIZE);

		//Asignar eventos DRAG and DROP

		this.addEventFilter(MouseEvent.MOUSE_PRESSED, this::startMovingPiece);

		this.addEventFilter(MouseEvent.MOUSE_DRAGGED, this::movePiece);

		this.addEventFilter(MouseEvent.MOUSE_RELEASED, this::finishMovingPiece);    	

	}

	//Propiedades

	public int getColor() {

		return color;

	}

	

	//Métodos abstractos

	public abstract boolean movimientoPermitido(int[][] tablero, int x1, int y1, int x2, int y2);

		

	//Métodos Drag and Drop

	public void startMovingPiece(MouseEvent evt) {

		//Cambiar opacidad para arrastrar figura

		this.setOpacity(0.4d);		

	}

	public void movePiece(MouseEvent evt) {

		//TODO que no se pueda salir la Figura del tablero !!!

		

		//Repintar la figura por el tablero

		Point2D mousePoint   = new Point2D(evt.getX(), evt.getY());  

		Point2D mousePoint_p = this.localToParent(mousePoint);

		

		this.relocate(mousePoint_p.getX()-(Figuras.SIZE/2), mousePoint_p.getY()-(Figuras.SIZE/2));

	}

	public void finishMovingPiece(MouseEvent evt) {

	 

		//Redondear coordenadas para cuadrar imagen en casilla

		double x = Util.redondearCoordenada( evt.getSceneX() );

		double y = Util.redondearCoordenada( evt.getSceneY() );

		

		//Si se puede realizar la jugada...

		if (TableroController.jugada(this, x, y)) {

		

			//Posicionar figura en el nuevo lugar

			this.relocate( x, y );

			

			//Marcar la nueva posicion

			this.x = x;

			this.y = y;

		}

		else {

			//Posicionar figura en la posición original

			this.relocate( this.x, this.y );

		}		

		

		//Volver a la opacidad original al soltar la figura

		this.setOpacity(1.0d);

	}

}
```

---

#### 📦 Peon.java

```java
package vista;

import util.Figuras;

public class Peon extends Figura {

	public Peon(int tipo, char color, double posX, double posY) {

		

		super(tipo, color, posX, posY);		

	}

	@Override

	public boolean movimientoPermitido(int[][] tablero, int x1, int y1, int x2, int y2) {

		

		boolean permitido = true;

		

		if (this.getColor() == Figuras.BLANCO) {

			

			//Blancas hacia arriba

			

			if (y1 == y2) {

				//Movimiento hacia adelante

				

			}

			else {

				//Movimiento en diagonal (para matar)

				

			}			

		}

		else {

			//Negras hacia abajo

			

			

		}

		

		System.out.println("Peon");

		

		return permitido;

	}

}
```

---

#### 📦 Reina.java

```java
package vista;

public class Reina extends Figura {

	public Reina(int tipo, char color, double posX, double posY) {

		super(tipo, color, posX, posY);		

	}

	@Override

	public boolean movimientoPermitido(int[][] tablero, int x1, int y1, int x2, int y2) {

		System.out.println("Reina");

		

		return (Math.random() > 0.5);

	}

}
```

---

#### 📦 Rey.java

```java
package vista;

public class Rey extends Figura {

	

	public Rey(int tipo, char color, double posX, double posY) {

		super(tipo, color, posX, posY);		

	}

	@Override

	public boolean movimientoPermitido(int[][] tablero, int x1, int y1, int x2, int y2) {

		boolean permitido = false;

		

		// 4 casos posibles permitidos

		if ((x1 == x2 && y1 == y2 + 1) ||

				(x1 == x2 && y1 == y2 - 1) ||

				(y1 == y2 && x1 == x2 + 1) ||

				(y1 == y2 && x1 == x2 - 1) ) {

			return true;

		}		

		

		return permitido;

	}

}
```

---

#### 📦 Torre.java

```java
package vista;

public class Torre extends Figura {

	public Torre(int tipo, char color, double posX, double posY) {

		

		super(tipo, color, posX, posY);		

	}

	@Override

	public boolean movimientoPermitido(int[][] tablero, int x1, int y1, int x2, int y2) {

		System.out.println("Torre");

		

		return (Math.random() > 0.5);

	}

}
```

---

## 17.3 ClaseFX

```java
package application;

import java.io.IOException;

import javafx.application.Application;

import javafx.fxml.FXMLLoader;

import javafx.scene.Scene;

import javafx.scene.layout.Pane;

import javafx.stage.Stage;

public class Main extends Application {

	

	//https://es.stackoverflow.com/questions/17639/cómo-abrir-varios-archivos-fxml-en-javafx-dentro-de-la-misma-ventana

	

	@Override

	public void start(Stage primaryStage) {

		

		try {

			FXMLLoader loader = new FXMLLoader();

			loader.setLocation(Main.class.getResource("/vista/VentanaPrincipal.fxml"));

			

			// Cargo la ventana

			Pane ventana = (Pane) loader.load();

			

			// Cargo el scene

			Scene scene = new Scene(ventana);

			

			// Asignar la scene y mostrar

			primaryStage.setTitle("Ventana Principal");

			primaryStage.setScene(scene);

			primaryStage.show();

			

		} catch (IOException e) {

			System.out.println(e.getMessage());

		}

	}

	public static void main(String[] args) {

		launch(args);

	}

	

}
```

---

#### 📦 ControllerDetalle.java

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.scene.control.Button;

import javafx.scene.image.ImageView;

import javafx.stage.Stage;

public class ControllerDetalle {

    @FXML

    private ResourceBundle resources;

    @FXML

    private URL location;

    @FXML

    private Button btnCerrar;

    @FXML

    private ImageView imagen;

    @FXML

    void cerrar(ActionEvent event) {

    	// get a handle to the stage

        Stage stage = (Stage) btnCerrar.getScene().getWindow();

        // do what you have to do

        stage.close();

    }

    @FXML

    void initialize() {

        assert btnCerrar != null : "fx:id=\"btnCerrar\" was not injected: check your FXML file 'VentanaDetalle.fxml'.";

        assert imagen != null : "fx:id=\"imagen\" was not injected: check your FXML file 'VentanaDetalle.fxml'.";

    }

    

}
```

---

#### 📦 ControllerPrincipal.java

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;

import javafx.scene.Parent;

import javafx.scene.Scene;

import javafx.scene.control.Button;

import javafx.scene.control.Label;

import javafx.scene.image.ImageView;

import javafx.stage.Modality;

import javafx.stage.Stage;

public class ControllerPrincipal {

    @FXML

    private ResourceBundle resources;

    @FXML

    private URL location;

    @FXML

    private Button btnHola;

    

    @FXML

    private Button btnDetalle;

    @FXML

    private Label lblText;

    @FXML

    private ImageView imagen;

    

    @FXML

    void holaMundo(ActionEvent event) {

    	//Mostrar texto en label

    	lblText.setText("Hola mundo !");

    	

    	//Mostrar otra ventana

    	try{

    		//Léeme el source del archivo que te digo fxml y te pongo el path

    		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/vista/VentanaSecudaria.fxml"));

    		Parent root = (Parent) fxmlLoader.load();

    		//Creame un nuevo Stage (una nueva ventana vacía)

    		//Stage stage= new Stage();

    		Stage stage = (Stage) btnHola.getScene().getWindow();

    		

    		//Asignar al Stage la escena que anteriormente hemos leído y guardado en root

    		stage.setTitle("Ventana Secundaria");    		

    		stage.setScene(new Scene(root));

    		//Mostrar el Stage (ventana)

    		stage.show();

    	}

    	catch (Exception e){

    		e.printStackTrace();

    	}

    }

    @FXML

    void ventanaDetalle(ActionEvent event) {

    	//Mostrar otra ventana

    	try{

    		//Léeme el source del archivo que te digo fxml y te pongo el path

    		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/vista/VentanaDetalle.fxml"));

    		Parent root = (Parent) fxmlLoader.load();

    		//Creame un nuevo Stage (una nueva ventana vacía)

    		Stage stage= new Stage();

    		

    		//Asignar al Stage la escena que anteriormente hemos leído y guardado en root

    		stage.setTitle("Ventana Detalle");

    		stage.initModality(Modality.APPLICATION_MODAL); 

    		stage.setScene(new Scene(root));

    		//Mostrar el Stage (ventana)

    		stage.show();

    	}

    	catch (Exception e){

    		e.printStackTrace();

    	}

    }

    

    @FXML

    void initialize() {

        assert btnHola != null : "fx:id=\"btnHola\" was not injected: check your FXML file 'VentanaPrincipal.fxml'.";

        assert lblText != null : "fx:id=\"lblText\" was not injected: check your FXML file 'VentanaPrincipal.fxml'.";

        assert imagen != null : "fx:id=\"imagen\" was not injected: check your FXML file 'VentanaPrincipal.fxml'.";

        assert btnDetalle != null : "fx:id=\"btnDetalle\" was not injected: check your FXML file 'VentanaPrincipal.fxml'.";

    }

    

}
```

---

#### 📦 ControllerSecundaria.java

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;

import javafx.scene.Parent;

import javafx.scene.Scene;

import javafx.scene.control.Button;

import javafx.scene.control.Label;

import javafx.scene.image.ImageView;

import javafx.stage.Stage;

public class ControllerSecundaria {

    @FXML

    private ResourceBundle resources;

    @FXML

    private URL location;

    @FXML

    private Button btnVolver;

    @FXML

    private Label lblText;

    @FXML

    private ImageView imagen;

    @FXML

    void volver(ActionEvent event) {

    	//Mostrar otra ventana

    	try{

    		//Léeme el source del archivo que te digo fxml y te pongo el path

    		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/vista/VentanaPrincipal.fxml"));

    		Parent root = (Parent) fxmlLoader.load();

    		//Creame un nuevo Stage (una nueva ventana vacía)

    		//Stage stage= new Stage();

    		Stage stage = (Stage) btnVolver.getScene().getWindow();

    		

    		//Asignar al Stage la escena que anteriormente hemos leído y guardado en root

    		stage.setTitle("Ventana Secundaria");

    		stage.setScene(new Scene(root));

    		//Mostrar el Stage (ventana)

    		stage.show();

    	}

    	catch (Exception e){

    		e.printStackTrace();

    	}

    }

    @FXML

    void initialize() {

        assert btnVolver != null : "fx:id=\"btnVolver\" was not injected: check your FXML file 'VentanaSecudaria.fxml'.";

        assert lblText != null : "fx:id=\"lblText\" was not injected: check your FXML file 'VentanaSecudaria.fxml'.";

        assert imagen != null : "fx:id=\"imagen\" was not injected: check your FXML file 'VentanaSecudaria.fxml'.";

    }

}
```

---

```java
package application;

import java.io.IOException;

import javafx.application.Application;

import javafx.fxml.FXMLLoader;

import javafx.scene.Scene;

import javafx.scene.layout.Pane;

import javafx.stage.Stage;

public class Main extends Application {

	

	//https://es.stackoverflow.com/questions/17639/cómo-abrir-varios-archivos-fxml-en-javafx-dentro-de-la-misma-ventana

	

	@Override

	public void start(Stage primaryStage) {

		

		try {

			FXMLLoader loader = new FXMLLoader();

			loader.setLocation(Main.class.getResource("/vista/VentanaPrincipal.fxml"));

			

			// Cargo la ventana

			Pane ventana = (Pane) loader.load();

			

			// Cargo el scene

			Scene scene = new Scene(ventana);

			

			// Asignar la scene y mostrar

			primaryStage.setTitle("Ventana Principal");

			primaryStage.setScene(scene);

			primaryStage.show();

			

		} catch (IOException e) {

			System.out.println(e.getMessage());

		}

	}

	public static void main(String[] args) {

		launch(args);

	}

	

}
```

---

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.scene.control.Button;

import javafx.scene.image.ImageView;

import javafx.stage.Stage;

public class ControllerDetalle {

    @FXML

    private ResourceBundle resources;

    @FXML

    private URL location;

    @FXML

    private Button btnCerrar;

    @FXML

    private ImageView imagen;

    @FXML

    void cerrar(ActionEvent event) {

    	// get a handle to the stage

        Stage stage = (Stage) btnCerrar.getScene().getWindow();

        // do what you have to do

        stage.close();

    }

    @FXML

    void initialize() {

        assert btnCerrar != null : "fx:id=\"btnCerrar\" was not injected: check your FXML file 'VentanaDetalle.fxml'.";

        assert imagen != null : "fx:id=\"imagen\" was not injected: check your FXML file 'VentanaDetalle.fxml'.";

    }

    

}
```

---

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;

import javafx.scene.Parent;

import javafx.scene.Scene;

import javafx.scene.control.Button;

import javafx.scene.control.Label;

import javafx.scene.image.ImageView;

import javafx.stage.Modality;

import javafx.stage.Stage;

public class ControllerPrincipal {

    @FXML

    private ResourceBundle resources;

    @FXML

    private URL location;

    @FXML

    private Button btnHola;

    

    @FXML

    private Button btnDetalle;

    @FXML

    private Label lblText;

    @FXML

    private ImageView imagen;

    

    @FXML

    void holaMundo(ActionEvent event) {

    	//Mostrar texto en label

    	lblText.setText("Hola mundo !");

    	

    	//Mostrar otra ventana

    	try{

    		//Léeme el source del archivo que te digo fxml y te pongo el path

    		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/vista/VentanaSecudaria.fxml"));

    		Parent root = (Parent) fxmlLoader.load();

    		//Creame un nuevo Stage (una nueva ventana vacía)

    		//Stage stage= new Stage();

    		Stage stage = (Stage) btnHola.getScene().getWindow();

    		

    		//Asignar al Stage la escena que anteriormente hemos leído y guardado en root

    		stage.setTitle("Ventana Secundaria");    		

    		stage.setScene(new Scene(root));

    		//Mostrar el Stage (ventana)

    		stage.show();

    	}

    	catch (Exception e){

    		e.printStackTrace();

    	}

    }

    @FXML

    void ventanaDetalle(ActionEvent event) {

    	//Mostrar otra ventana

    	try{

    		//Léeme el source del archivo que te digo fxml y te pongo el path

    		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/vista/VentanaDetalle.fxml"));

    		Parent root = (Parent) fxmlLoader.load();

    		//Creame un nuevo Stage (una nueva ventana vacía)

    		Stage stage= new Stage();

    		

    		//Asignar al Stage la escena que anteriormente hemos leído y guardado en root

    		stage.setTitle("Ventana Detalle");

    		stage.initModality(Modality.APPLICATION_MODAL); 

    		stage.setScene(new Scene(root));

    		//Mostrar el Stage (ventana)

    		stage.show();

    	}

    	catch (Exception e){

    		e.printStackTrace();

    	}

    }

    

    @FXML

    void initialize() {

        assert btnHola != null : "fx:id=\"btnHola\" was not injected: check your FXML file 'VentanaPrincipal.fxml'.";

        assert lblText != null : "fx:id=\"lblText\" was not injected: check your FXML file 'VentanaPrincipal.fxml'.";

        assert imagen != null : "fx:id=\"imagen\" was not injected: check your FXML file 'VentanaPrincipal.fxml'.";

        assert btnDetalle != null : "fx:id=\"btnDetalle\" was not injected: check your FXML file 'VentanaPrincipal.fxml'.";

    }

    

}
```

---

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;

import javafx.scene.Parent;

import javafx.scene.Scene;

import javafx.scene.control.Button;

import javafx.scene.control.Label;

import javafx.scene.image.ImageView;

import javafx.stage.Stage;

public class ControllerSecundaria {

    @FXML

    private ResourceBundle resources;

    @FXML

    private URL location;

    @FXML

    private Button btnVolver;

    @FXML

    private Label lblText;

    @FXML

    private ImageView imagen;

    @FXML

    void volver(ActionEvent event) {

    	//Mostrar otra ventana

    	try{

    		//Léeme el source del archivo que te digo fxml y te pongo el path

    		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/vista/VentanaPrincipal.fxml"));

    		Parent root = (Parent) fxmlLoader.load();

    		//Creame un nuevo Stage (una nueva ventana vacía)

    		//Stage stage= new Stage();

    		Stage stage = (Stage) btnVolver.getScene().getWindow();

    		

    		//Asignar al Stage la escena que anteriormente hemos leído y guardado en root

    		stage.setTitle("Ventana Secundaria");

    		stage.setScene(new Scene(root));

    		//Mostrar el Stage (ventana)

    		stage.show();

    	}

    	catch (Exception e){

    		e.printStackTrace();

    	}

    }

    @FXML

    void initialize() {

        assert btnVolver != null : "fx:id=\"btnVolver\" was not injected: check your FXML file 'VentanaSecudaria.fxml'.";

        assert lblText != null : "fx:id=\"lblText\" was not injected: check your FXML file 'VentanaSecudaria.fxml'.";

        assert imagen != null : "fx:id=\"imagen\" was not injected: check your FXML file 'VentanaSecudaria.fxml'.";

    }

}
```

---

```java
package application;

import java.io.IOException;

import javafx.application.Application;

import javafx.fxml.FXMLLoader;

import javafx.scene.Scene;

import javafx.scene.image.Image;

import javafx.scene.layout.Pane;

import javafx.stage.Stage;

public class Main extends Application {

	

	@Override

	public void start(Stage primaryStage) {

		

		try {

			FXMLLoader loader = new FXMLLoader();

			loader.setLocation(Main.class.getResource("/vista/VentanaPrincipal.fxml"));

			

			// Cargo la ventana

			Pane ventana = (Pane) loader.load();

			

			// Cargo el scene

			Scene scene = new Scene(ventana);

			

			// Asignar la scene y mostrar

			primaryStage.setTitle("Ventana Principal");

			primaryStage.getIcons().add(new Image(getClass().getResource("/images/icono.png").toExternalForm()));

			primaryStage.setResizable(false);	

			

			primaryStage.setScene(scene);

			primaryStage.show();

			

		} catch (IOException e) {

			System.out.println(e.getMessage());

		}

	}

	public static void main(String[] args) {

		launch(args);

	}

	

}
```

---

#### 📦 ControllerComponentes.java

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.fxml.FXML;

import javafx.scene.control.Button;

import javafx.scene.control.TextField;

import javafx.scene.image.ImageView;

public class ControllerComponentes {

    @FXML private ResourceBundle resources;

    @FXML private URL location;

    @FXML private Button btnCerrar;

    @FXML private ImageView imagen;

    @FXML private TextField txtField_Nombres;

    

    

    @FXML

    void initialize() {

    	

    	      

    }

    

}
```

---

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.scene.control.Button;

import javafx.scene.control.Label;

import javafx.scene.control.TextField;

import javafx.scene.image.ImageView;

import javafx.stage.Stage;

public class ControllerDetalle {

	private ControllerPrincipal fxmlLoader;

	

	@FXML private ResourceBundle resources;

    @FXML private URL location;

    @FXML private Button btnCerrar;

    @FXML private ImageView imagen;

    @FXML private Label lblNombre;    

    @FXML private TextField txtFld_Nombre;

    @FXML

    void cerrar(ActionEvent event) {

    	//        

        fxmlLoader.recuperarDatos(txtFld_Nombre.getText());        

        

    	// get a handle to the stage    	

        Stage stage = (Stage) btnCerrar.getScene().getWindow();

        

        // do what you have to do

        stage.close();

    }

    @FXML

    void initialize() {

        

    }

    

    //

    public void setDatos(ControllerPrincipal loader, String datos) {

 

    	this.fxmlLoader = loader;

    	txtFld_Nombre.setText(datos);

    }

    

}
```

---

```java
package controlador;

import java.io.File;

import java.net.URL;

import java.util.Locale;

import java.util.ResourceBundle;

import java.util.Timer;

import java.util.TimerTask;

import javafx.animation.KeyFrame;

import javafx.animation.KeyValue;

import javafx.animation.Timeline;

import javafx.application.Platform;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;

import javafx.fxml.Initializable;

import javafx.scene.Parent;

import javafx.scene.Scene;

import javafx.scene.control.Button;

import javafx.scene.control.Label;

import javafx.scene.image.ImageView;

import javafx.scene.input.KeyCode;

import javafx.scene.input.KeyCodeCombination;

import javafx.scene.input.KeyCombination;

import javafx.scene.input.KeyEvent;

import javafx.scene.media.Media;

import javafx.scene.media.MediaPlayer;

import javafx.scene.shape.Rectangle;

import javafx.stage.Modality;

import javafx.stage.Stage;

import javafx.stage.StageStyle;

import javafx.util.Duration;

public class ControllerPrincipal implements Initializable {

	// Run Configurations

	// --module-path /home/professor/eclipse-workspace/javafx-sdk-18/lib 

	// --add-modules=javafx.controls,javafx.fxml,javafx.base,javafx.media 

	// --add-exports javafx.base/com.sun.javafx.event=ALL-UNNAMED

			

	@FXML private ResourceBundle resources;

	@FXML private URL location;

	@FXML private Button btnSecundaria;    

	@FXML private Button btnHolaMundo;    

	@FXML private Button btnDetalle;

	@FXML private Button btnSonido;

	@FXML private Button btnToast;

	@FXML private Button btnEstilos;

	@FXML private Button btnStart;

	@FXML private Button btnStop;

	@FXML private Button btnReset;

	@FXML private Label lblText;

	@FXML private Label lblTimer;

	@FXML private ImageView imagen;

	@FXML private ImageView imagenCambio;

	@FXML private Button btnComponentes;

	@FXML public Rectangle player1;

	private Timer timer;

	private int segundos;

	

	@Override

	public void initialize(URL arg0, ResourceBundle arg1) {

		//Mover imagen JavaFX

		Timeline t = new Timeline(

				new KeyFrame(Duration.seconds(0), new KeyValue(imagenCambio.translateXProperty(), 0)),

				new KeyFrame(Duration.seconds(1), new KeyValue(imagenCambio.translateYProperty(), 10)),

				new KeyFrame(Duration.seconds(2), new KeyValue(imagenCambio.translateXProperty(), 80)),

				new KeyFrame(Duration.seconds(3), new KeyValue(imagenCambio.translateYProperty(), 90))

				);    	

		t.setAutoReverse(true);

		t.setCycleCount(Timeline.INDEFINITE);

		t.play();

	}

	@FXML

	void holaMundo(ActionEvent event) {

		//Mostrar texto en label

		lblText.setText("Hola mundo !");

	}

	@FXML

	void escogerOpcion(KeyEvent event) {

		KeyCombination cntrlZ = new KeyCodeCombination(KeyCode.Z, KeyCodeCombination.CONTROL_DOWN);    	

		if(cntrlZ.match(event)){

			lblText.setText("Deshacer");

		}    	

	}

	@FXML

	void cambiarEstilo(ActionEvent event) {

		//TODO cambiarEstilo

	}

	

	@FXML

	void mostrarToast(ActionEvent event) {

		//Mostrar toast

		ToastController.showToast(ToastController.TOAST_SUCCESS, btnToast, "Esto es un TOAST!");    	

	}

	@FXML

	void reproducirAudio(ActionEvent event) {

		

		//Afegir en VM arguments: javafx.base,javafx.media

		

		String path = "src/audio/winner.mp3";	

		

		Media sound = new Media(new File(path).toURI().toString());

		MediaPlayer mediaPlayer = new MediaPlayer(sound);

		mediaPlayer.play();    	

	}	

	@FXML

	void ventanaSecundaria(ActionEvent event) {

		mostrarVentana("/vista/VentanaSecudaria.fxml", "Ventana Secundaria", true, false, 0);    	

	}

	@FXML

	void ventanaDetalle(ActionEvent event) {

		mostrarVentana("/vista/VentanaDetalle.fxml", "Insertar alumno", false, true, 1);

	}

	@FXML

	void verComponentes(ActionEvent event) {

		mostrarVentana("/vista/VentanaComponentes.fxml", "Componentes", false, false, 2);

	}

	

	@FXML

	void verFormulario(ActionEvent event) {

		

		mostrarVentana("vista/Formulario.fxml", "Formulario", false, false, 3);

	}

	//Mostrar otra ventana

	private void mostrarVentana(String src, String titulo, boolean mismoStage, boolean modal, int ventana) {    	

		try{

			

			// Indicar el idioma

			Locale locale = new Locale("es");

			ResourceBundle bundle = ResourceBundle.getBundle("strings", locale);

			Parent root = null; 

			FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource(src));

			

			// Cargar la ventana

			if (ventana == 3) {

				

				root = FXMLLoader.load(getClass().getClassLoader().getResource(src), bundle);	

			}

			else {

				//Leeme el source del archivo que te digo fxml y te pongo el path				

				root = (Parent) fxmlLoader.load();	

			}

			Stage stage = null;

			if (mismoStage) {

				//En el mismo Stage, mostrar otra Scene

				stage = (Stage) btnSecundaria.getScene().getWindow();	

			}

			else {

				//Creame un nuevo Stage (una nueva ventana vacia)

				stage = new Stage();

			}    		

			//Asignar al Stage la escena que anteriormente hemos leido y guardado en root

			stage.setTitle(titulo);

			stage.setResizable(false);

			if (!mismoStage && modal) {

				stage.initModality(Modality.APPLICATION_MODAL);

			}    			

			//

			stage.setScene(new Scene(root));

			if (ventana == 1) {

				//Pasar datos a la otra ventana

				ControllerDetalle controller = fxmlLoader.getController();

				controller.setDatos(this, "Nombre...");

				stage.initStyle(StageStyle.UTILITY);

				//stage.initStyle(StageStyle.DECORATED);

				//stage.initStyle(StageStyle.UNDECORATED);

				//stage.initStyle(StageStyle.UNIFIED);

				//stage.initStyle(StageStyle.TRANSPARENT);                

			}    		    		

			//Mostrar el Stage (ventana)

			stage.show();

		}

		catch (Exception e){

			e.printStackTrace();

		}

	}

	public void recuperarDatos(String info) {

		lblText.setText(info);

	}

	

	@FXML

	void startTimer(ActionEvent event) {

		

		timer = new Timer();

		

		timer.scheduleAtFixedRate(new TimerTask() {

			@Override

			public void run() {

				Platform.runLater(new Runnable() {

					

					@Override

					public void run() {

						//Incrementar tu variable de segundos

						segundos++;

						//lblTimer.setText( String.format("%02d:%02d", (segundos / 60), (segundos % 60)) );

						lblTimer.setText( String.format("%02d:%02d:%02d", (segundos / 6000), ((segundos/100)%60), (segundos%100)) );

					}

				});	        	

			}

		}, 0, 10);

	}

	

	@FXML

	void stopTimer(ActionEvent event) {

		timer.cancel();

	}

	

	@FXML

	void resetTimer(ActionEvent event) {

		segundos = 0;

		lblTimer.setText("00:00:00");

	}

}
```

---

```java
package controlador;

import java.net.URL;

import java.util.ResourceBundle;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;

import javafx.scene.Parent;

import javafx.scene.Scene;

import javafx.scene.control.Button;

import javafx.scene.image.ImageView;

import javafx.stage.Stage;

public class ControllerSecundaria {

    @FXML private ResourceBundle resources;

    @FXML private URL location;

    @FXML private Button btnVolver;

    @FXML private ImageView imagen;

    @FXML

    void volver(ActionEvent event) {

    	//Mostrar otra ventana

    	try{

    		//Léeme el source del archivo que te digo fxml y te pongo el path

    		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/vista/VentanaPrincipal.fxml"));

    		Parent root = (Parent) fxmlLoader.load();

    		//Creame un nuevo Stage (una nueva ventana vacía)

    		//Stage stage= new Stage();

    		Stage stage = (Stage) btnVolver.getScene().getWindow();

    		

    		//Asignar al Stage la escena que anteriormente hemos leído y guardado en root

    		stage.setTitle("Ventana Principal");

    		stage.setScene(new Scene(root));

    		//Mostrar el Stage (ventana)

    		stage.show();

    	}

    	catch (Exception e){

    		e.printStackTrace();

    	}

    }

    @FXML

    void initialize() {

        

    }

    

}
```

---

#### 📦 FormularioController.java

```java
package controlador;

import java.io.File;

import java.net.URL;

import java.util.ArrayList;

import java.util.Locale;

import java.util.ResourceBundle;

import java.util.TreeSet;

import org.controlsfx.control.textfield.TextFields;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.scene.control.Alert;

import javafx.scene.control.Alert.AlertType;

import javafx.scene.control.Button;

import javafx.scene.control.Label;

import javafx.scene.control.RadioButton;

import javafx.scene.control.TextField;

import javafx.scene.control.ToggleGroup;

import javafx.scene.image.Image;

import javafx.scene.image.ImageView;

import javafx.scene.input.MouseEvent;

import javafx.stage.FileChooser;

import javafx.stage.Stage;

import utilidades.I18N;

public class FormularioController {

    @FXML private ResourceBundle resources;

    @FXML private URL location;

    @FXML private Label lbl_titulo;

    @FXML private Label lbl_nombre;

    @FXML private Label lbl_apellidos;

    @FXML private Label lbl_usuario;

    @FXML private Label lbl_password;

    @FXML private Label lbl_fecha;

    @FXML private ImageView img_foto;

    @FXML private Button btn_imagen;

    @FXML private Button btn_registrar;

    @FXML private Button btnCerrar;

    @FXML private RadioButton rbtn_programacion;

    @FXML private RadioButton rbtn_baseDeDatos;

    @FXML private TextField txtField_Nombre;

    @FXML private ToggleGroup asignatura;

    @FXML

    void initialize() {

    	ArrayList<String> nombreProfesores     = new ArrayList<String>();

    	nombreProfesores.add("JOAQUIN SABINA");

    	nombreProfesores.add("PEDRO MARMOL");

    	nombreProfesores.add("LETICIA SABATER");

    	nombreProfesores.add("ALEJANDRO SANZ");

    	nombreProfesores.add("PAZ PADILLA");    	

    	TreeSet<String> listaNombresProfesores = new TreeSet<String>(nombreProfesores);

        

    	TextFields.bindAutoCompletion(txtField_Nombre, listaNombresProfesores);  

    	

    	//titulo de la ventana

    	lbl_titulo.textProperty().bind(I18N.createStringBinding("form.titulo"));

    	lbl_nombre.textProperty().bind(I18N.createStringBinding("form.nombre"));

    	lbl_apellidos.textProperty().bind(I18N.createStringBinding("form.apellidos"));

    	lbl_usuario.textProperty().bind(I18N.createStringBinding("form.usuario"));

    	lbl_password.textProperty().bind(I18N.createStringBinding("form.password"));

    	lbl_fecha.textProperty().bind(I18N.createStringBinding("form.fecha"));

    	rbtn_programacion.textProperty().bind(I18N.createStringBinding("form.programacion"));

        rbtn_baseDeDatos.textProperty().bind(I18N.createStringBinding("form.baseDeDatos"));

    	btn_imagen.textProperty().bind(I18N.createStringBinding("form.selectImagen"));

    	btn_registrar.textProperty().bind(I18N.createStringBinding("form.registrar"));

    }

    

    @FXML

    void setCastellano(MouseEvent event) {

    	I18N.setLocale(new Locale("es"));    	

    }

    @FXML

    void setIngles(MouseEvent event) {

    	I18N.setLocale(new Locale("en"));

    }

    @FXML

    void setValenciano(MouseEvent event) {

    	I18N.setLocale(new Locale("ca"));

    }

    

    @FXML

    void registrar(ActionEvent event) {

    	//Recuperar la opci��n escogida de un radioButtonGroup

    	RadioButton selectedRadioButton = (RadioButton) asignatura.getSelectedToggle();

    	String toogleGroupValue = selectedRadioButton.getText();

    	    	

    	//Mostrar opcion escogida

    	Alert alert = new Alert(AlertType.INFORMATION);

    	alert.setTitle("toogleGroupValue");

    	alert.setHeaderText(null);

    	alert.setContentText(toogleGroupValue);

    	alert.showAndWait();

    }

    

    @FXML

    void escogerImagen(ActionEvent event) {

    	FileChooser fileChooser = new FileChooser();

    	fileChooser.getExtensionFilters().addAll(

    		     new FileChooser.ExtensionFilter("PNG Files", "*.png")

    		    ,new FileChooser.ExtensionFilter("JPG Files", "*.jpg")

    		);    	

    	File selectedFile = fileChooser.showOpenDialog(null);

    	

    	if (selectedFile != null && selectedFile.exists()) {    		

    		Image image = new Image(selectedFile.toURI().toString());

    		img_foto.setImage( image );

    	}    	

    }

 

    @FXML

    void cerrar(ActionEvent event) {

        Stage stage = (Stage) btnCerrar.getScene().getWindow();

        stage.close();

    }

}
```

---

#### 📦 ToastController.java

```java
package controlador;

import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Control;
import javafx.scene.control.Label;

import javafx.scene.layout.HBox;
import javafx.stage.Modality;
import javafx.stage.Stage;
import javafx.stage.StageStyle;
import javafx.util.Duration;

import java.io.IOException;

public class ToastController {

    public static final int TOAST_SUCCESS = 11;
    public static final int TOAST_WARN = 12;
    public static final int TOAST_ERROR = 13;

    @FXML private HBox containerToast;
    @FXML private Label textToast;

    private void setToast(int toastType, String content){
    	
        textToast.setText(content);
        switch (toastType){
            case TOAST_SUCCESS:
                containerToast.setStyle("-fx-background-color: #9FFF96");
                break;
            case TOAST_WARN:
                containerToast.setStyle("-fx-background-color: #FFCF82");
                break;
            case TOAST_ERROR:
                containerToast.setStyle("-fx-background-color: #FF777C");
                break;
        }
    }

    public static void showToast(int toastTyoe, Control control, String text){
    	
        Stage dialog = new Stage();
        
        dialog.initOwner(control.getScene().getWindow());
        dialog.setTitle(text);
        dialog.initModality(Modality.APPLICATION_MODAL);
        dialog.setResizable(false);
        dialog.initStyle(StageStyle.UNDECORATED);

        double dialogX = dialog.getOwner().getX();
        double dialogY = dialog.getOwner().getY();
        double dialogW = dialog.getOwner().getWidth();
        double dialogH = dialog.getOwner().getHeight();

        double posX = dialogX + dialogW/2;
        double posY = dialogY + dialogH/3;
        
        dialog.setX(posX);
        dialog.setY(posY);

        try {
            FXMLLoader loader = new FXMLLoader();
            loader.setLocation(ToastController.class.getResource("/vista/Toast.fxml"));
            loader.load();
            ToastController ce = loader.getController();
            ce.setToast(toastTyoe,text);
            dialog.setScene(new Scene(loader.getRoot()));
            dialog.show();
            new Timeline(new KeyFrame(
                    Duration.millis(1500),
                    ae -> {
                        dialog.close();
                    })).play();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
    
}
```

---

## 17.4 controlsfx-8.40.11

**controlsfx** es una librería usada para incorporar controles a la interficie gráfica de JavaFX. Ver web: https://controlsfx.github.io/

---

## 17.5 Introducción a Canvas

1ºDAW: Programación

JR Simó

Introducción a Canvas en JavaFX El Canvas de JavaFX es un nodo que puede usarse para dibujar gráficos directamente en un área rectangular. Es especialmente útil para crear gráficos personalizados, juegos, y aplicaciones que requieran un control preciso del dibujo. A continuación, los pasos básicos para usar Canvas en JavaFX.

### 1. Creación del Canvas

Primero, crea un proyecto JavaFX. Sobre la clase Main, necesitas crear un objeto Canvas. El Canvas requiere un ancho y un alto que definen el área de dibujo.

```java
package application;
```

import javafx.application.Application; import javafx.scene.Scene; import javafx.scene.canvas.Canvas; import javafx.scene.canvas.GraphicsContext; import javafx.scene.layout.StackPane; import javafx.stage.Stage;

```java
public class Main extends Application {
```

```java
@Override
    public void start(Stage primaryStage) {
        // Crear un Canvas con ancho y alto especificados
        Canvas canvas = new Canvas(400, 300);
```

// Obtener el GraphicsContext del Canvas

```java
GraphicsContext gc = canvas.getGraphicsContext2D();
```

// Llamar a método para dibujar

```java
dibujarFormas(gc);
```

// Crear un layout y añadir el Canvas

```java
StackPane root = new StackPane();
        root.getChildren().add(canvas);
```

// Crear la escena y añadir el layout

```java
Scene scene = new Scene(root, 400, 300);
```

// Configurar y mostrar la Stage

```java
primaryStage.setTitle("Introducción a Canvas!");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
```

```java
private void dibujarFiguras(GraphicsContext gc) {
        // Dibujar un rectángulo
        gc.strokeRect(50, 50, 200, 100);
```

// Dibujar un texto

```java
gc.strokeText("Hola, Canvas!", 100, 150);
```

// Dibujar un óvalo

```java
gc.strokeOval(100, 200, 50, 50);
    }
```

```java
public static void main(String[] args) {
        launch(args);
    }
}
```

1ºDAW: Programación

JR Simó

### 2. Explicación del Código

A continuació, una breve explicación del código anterior: • Importaciones: Importamos las clases necesarias de JavaFX. • Clase principal: Extendemos Application para crear una aplicación JavaFX. • Método start: o Creamos un Canvas de 400x300 píxeles. o Obtenemos el GraphicsContext del Canvas, que se utiliza para realizar las operaciones de dibujo.

o Llamamos al método drawShapes para dibujar formas en el Canvas. o Creamos un StackPane y añadimos el Canvas a él. o Creamos una Scene con el StackPane como raíz y la establecemos en la Stage. o Mostramos la Stage.

### 3. Dibujo con GraphicsContext

El GraphicsContext es la clase que proporciona los métodos para dibujar en el Canvas. Algunos métodos comunes son: • strokeRect(x, y, width, height): Dibuja un rectángulo con solo el borde. • fillRect(x, y, width, height): Dibuja un rectángulo relleno. • strokeText(text, x, y): Dibuja texto.

• strokeOval(x, y, width, height): Dibuja un óvalo con solo el borde. • fillOval(x, y, width, height): Dibuja un óvalo relleno. • clearRect(x, y, width, height): Borra una sección del canvas.

### 4. Personalización de Dibujo

Puedes personalizar los colores y el estilo de las formas usando métodos adicionales en GraphicsContext

```java
private void dibujarFiguras (GraphicsContext gc) {
    // Establecer color de trazo
    gc.setStroke(Color.BLUE);
    gc.setLineWidth(2);
    gc.strokeRect(50, 50, 200, 100);
```

// Establecer color de relleno

```java
gc.setFill(Color.GREEN);
    gc.fillRect(300, 50, 50, 50);
```

// Dibujar texto con fuente personalizada

```java
gc.setFill(Color.RED);
    gc.setFont(new Font("Arial", 20));
    gc.fillText("Hola, Canvas!", 100, 150);
```

// Dibujar un óvalo con color de trazo personalizado

```java
gc.setStroke(Color.ORANGE);
    gc.strokeOval(100, 200, 50, 50);
}
```

1ºDAW: Programación

JR Simó

### 6. Ejecución de la aplicación

### 5. Ajustes y Mejoras

A continuación, sugerencias para consolidar los conceptos básicos sobre Canvas

- Juega modificando los parámetros del código de ejemplo.
- Añade nuevas figuras y ubícalas en diferentes posiciones del canvas.
- Configura diferentes formas y colores de las figuras y el canvas.

### 6. Más información sobre Canvas

• Guía oficial de JavaFX OpenJFX (https://openjfx.io/javadoc/22/): sobre todo javafx.graphics y javafx.media • API de JavaFX Canvas: https://openjfx.io/javadoc/17/javafx.graphics/javafx/scene/canvas/Canvas.html • Oracle: https://docs.oracle.com/javafx/2/canvas/jfxpub-canvas.htm

---

## 17.6 Introducción a AnimationTimer en JavaFX

1ºDAW: Programación

JR Simó

Introducción a AnimationTimer en JavaFX AnimationTimer es una clase en JavaFX que facilita la creación de animaciones que se ejecutan en un bucle continuo. Es especialmente útil para aplicaciones que requieren actualizaciones frecuentes de la pantalla, como videojuegos, simulaciones y animaciones interactivas. Esta clase llama a su método handle(long now) una y otra vez, permitiendo actualizar la lógica de la animación y redibujar la pantalla a intervalos de tiempo regulares.

¿Para qué se usa AnimationTimer?

### 1. Juegos: Para actualizar la posición de los personajes, detectar colisiones, manejar la

lógica del juego en tiempo real, etc.

### 2. Simulaciones: Para representar visualmente cambios en tiempo real en sistemas físicos,

económicos, etc.

### 3. Animaciones Interactivas: Para responder a eventos del usuario, como movimientos del

ratón o pulsaciones de teclas, actualizando la animación de manera continua.

### 1. Crear una clase que dibuje un rectángulo en movimiento usando

AnimationTimer 1r. Paso: Crear la clase principal de la aplicación: • Crea una nueva clase llamada EjemploAnimationTimerRectangulo • Asegúrate de que esta clase extienda javafx.application.Application

import javafx.application.Application; import javafx.scene.Scene; import javafx.scene.canvas.Canvas; import javafx.scene.canvas.GraphicsContext; import javafx.scene.layout.Pane; import javafx.stage.Stage;

```java
public class Main extends Application {
```

```java
public static void main(String[] args) {
        launch(args);
    }
```

```java
@Override
    public void start(Stage escenarioPrincipal) {
        escenarioPrincipal.setTitle("Ejemplo de Animation Timer con Rectángulo");
```

// Crear un Canvas y obtener su GraphicsContext

```java
Canvas lienzo = new Canvas(800, 600);
        GraphicsContext gc = lienzo.getGraphicsContext2D();
```

```java
Pane raiz = new Pane();
        raiz.getChildren().add(lienzo);
```

```java
Scene escena = new Scene(raiz);
        escenarioPrincipal.setScene(escena);
        escenarioPrincipal.show();
```

// Crear y comenzar el AnimationTimer

```java
RectanguloAnimationTimer temporizador = new RectanguloAnimationTimer(gc);
        temporizador.start();
    }
}
```

1ºDAW: Programación

JR Simó

2º. Paso: Crear la clase que extiende AnimationTimer • Crear una nueva clase: Crea una nueva clase llamada RectanguloAnimationTimer que extienda AnimationTimer. • Implementar el método handle: Sobrescribe el método handle(long now) para actualizar y redibujar el rectángulo en cada frame.

import javafx.animation.AnimationTimer; import javafx.scene.canvas.GraphicsContext; import javafx.scene.paint.Color;

```java
public class RectanguloAnimationTimer extends AnimationTimer {
    private GraphicsContext gc;
    private double x;
    private double y;
    private double ancho;
    private double alto;
```

```java
public RectanguloAnimationTimer(GraphicsContext gc) {
        this.gc = gc;
        this.x = 0;
        this.y = 0;
        this.ancho = 50;
        this.alto = 50;
    }
```

```java
@Override
    public void handle(long ahora) {
        // Limpiar el canvas
        gc.clearRect(0, 0, gc.getCanvas().getWidth(), gc.getCanvas().getHeight());
```

// Dibujar el rectángulo

```java
gc.setFill(Color.RED);
        gc.fillRect(x, y, ancho, alto);
```

// Actualizar la posición

```java
x += 1;
        y += 1;
    }
}
```

### 1. Clase principal

o EjemploAnimationTimerRectangulo extiende Application, lo que la convierte en una aplicación JavaFX. o En el método main se llama a launch, que inicia la aplicación JavaFX.

### 2. Método start

o Se crea un Canvas y se obtiene su GraphicsContext, que se utiliza para dibujar. o Se agrega el Canvas a un Pane, que se establece como la raíz de la Scene. o Se crea una instancia de RectanguloAnimationTimer y se le pasa el GraphicsContext del Canvas. Luego se inicia el temporizador.

### 3. Clase RectanguloAnimationTimer

o RectanguloAnimationTimer extiende AnimationTimer y contiene la lógica de animación. o handle se llama repetidamente una vez que el temporizador comienza. o En el método handle, primero se limpia el Canvas usando clearRect. o Luego se dibuja un rectángulo rojo en la posición actual usando fillRect.

o Finalmente, se actualizan las coordenadas x y y para mover el rectángulo.

1ºDAW: Programación

JR Simó

### 3. Ajustes y Mejoras

A continuación, una propuestas para consolidar los conceptos básicos sobre AnimationTimer

### 1. Cambiar la velocidad

o Modifica el incremento de x y y en el método handle para aumentar o disminuir la velocidad del rectángulo.

- Investiga sobre el uso del método setTranslationX(…) y setTranslationY(…): sustituye el

uso de clearReact por estos métodos para conseguir el movimiento del objeto.

### 3. Haz que el objeto pare al tocar al llegar a alguna esquina: juega con los métodos

propios de la clase AnimationTimer.

### 4. Añadir más objetos

o Implementa la lógica para dibujar y animar múltiples objetos en el Canvas.

### 5. Interactividad

o Añade eventos de teclado o ratón para hacer la animación interactiva. Este ejemplo proporciona una base sólida para trabajar con animaciones en JavaFX usando AnimationTimer. Tus alumnos pueden expandir este ejemplo para crear aplicaciones más complejas y dinámicas.

### 4. Más información sobre AnimationTimer

• Guía oficial de JavaFX OpenJFX (https://openjfx.io/javadoc/22/): sobre todo javafx.graphics y javafx.media • API de JavaFX Canvas: https://openjfx.io/javadoc/11/javafx.graphics/javafx/animation/AnimationTimer.html

---

## 17.7 compartirDatos

Proyecto de ejemplo para compartir datos entre controladores con una clase singleton.

#### 📦 CompartirDatosController1.java

```java
package application;

import java.io.IOException;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;

import javafx.scene.Node;

import javafx.scene.Scene;

import javafx.scene.control.Button;

import javafx.scene.control.TextField;

import javafx.stage.Stage;

public class CompartirDatosController1 {

    @FXML

    private Button btGuardar;

    @FXML

    private TextField tfMensaje;

    

    @FXML

    void initialize() {

    	

    }

    @FXML

    void clickBotonGuardar(ActionEvent event) {

    	// Accedo al Singleton y guardo los datos...

		DatosCompartidosSingleton dcs = DatosCompartidosSingleton.getInstancia();

		dcs.setNombre(tfMensaje.getText());

		    	

    	// Abro la nueva ventana

    	try {

            FXMLLoader loader = new FXMLLoader(getClass().getResource("CompartirDatos2.fxml"));

		

			Scene scene = new Scene(loader.load());

			scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());

			

			Stage stage = new Stage();

			

			stage.setScene(scene);

			stage.show();

		} catch (IOException e) {

			// TODO Auto-generated catch block

			e.printStackTrace();

		}

    	

    	// Obtengo el nodo para acceder al Stage y poder cerrarlo

    	Node node = (Node)event.getSource();

    	Stage stage1 = (Stage)node.getScene().getWindow();

    	stage1.close();

    }

}
```

---

#### 📦 CompartirDatosController2.java

```java
package application;

import java.io.IOException;

import javafx.event.ActionEvent;

import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;

import javafx.scene.Node;

import javafx.scene.Scene;

import javafx.scene.control.Button;

import javafx.scene.control.Label;

import javafx.scene.layout.AnchorPane;

import javafx.stage.Stage;

public class CompartirDatosController2 {

	DatosCompartidos datosCompartidos;

	

    @FXML

    private Button btVolver;

    

    @FXML

    private Label lbMensaje;

    

    private Stage stageControlador1;

	@FXML

	void initialize() {		

		// Nada más abrir la nueva ventana, cargo los datos del Singleton

		DatosCompartidosSingleton dcs = DatosCompartidosSingleton.getInstancia();

    	lbMensaje.setText(dcs.getNombre());

	}

    

	public void setStageControlador1(Stage stage) {

		this.stageControlador1 = stage;

	}

     

    @FXML

    void clicBotonVolver(ActionEvent event) {

 

    	

		try {

            FXMLLoader loader = new FXMLLoader(getClass().getResource("CompartirDatos1.fxml"));

		

			Scene scene = new Scene(loader.load());

			scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());

			

			Stage stage = new Stage();

			

			stage.setScene(scene);

			stage.show();

		} catch (IOException e) {

			// TODO Auto-generated catch block

			e.printStackTrace();

		}

		

	   	// Obtengo el nodo para acceder al Stage y poder cerrarlo

    	Node node = (Node)event.getSource();

    	Stage stage1 = (Stage)node.getScene().getWindow();

    	stage1.close();

    	

    }

}
```

---

#### 📦 DatosCompartidos.java

```java
package application;

public class DatosCompartidos {

	private CompartirDatosController1 cdc1;

	private CompartirDatosController2 cdc2;

	

	public CompartirDatosController1 getCdc1() {

		return cdc1;

	}

	public void setCdc1(CompartirDatosController1 cdc1) {

		this.cdc1 = cdc1;

	}

	public CompartirDatosController2 getCdc2() {

		return cdc2;

	}

	public void setCdc2(CompartirDatosController2 cdc2) {

		this.cdc2 = cdc2;

	}

}
```

---

#### 📦 DatosCompartidosSingleton.java

```java
package application;

public class DatosCompartidosSingleton {

	  private String nombre;

	  

	  private final static DatosCompartidosSingleton INSTANCIA = new DatosCompartidosSingleton();

	  

	  private DatosCompartidosSingleton() {}

	  

	  public static DatosCompartidosSingleton getInstancia() {

	    return INSTANCIA;

	  }

	  

	  public void setNombre(String nombre) {

	    this.nombre = nombre;

	  }

	  

	  public String getNombre() {

	    return this.nombre;

	  }

}
```

---

```java
package application;

	

import javafx.application.Application;

import javafx.stage.Stage;

import javafx.scene.Scene;

import javafx.scene.layout.AnchorPane;

import javafx.fxml.FXMLLoader;

public class Main extends Application {

	@Override

	public void start(Stage primaryStage) {

		

		try {

            FXMLLoader loader = new FXMLLoader(getClass().getResource("CompartirDatos1.fxml"));

			

			Scene scene = new Scene(loader.load());

			scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());

			primaryStage.setScene(scene);

			primaryStage.show();

	

		} catch(Exception e) {

			e.printStackTrace();

		}

	}

	

	public static void main(String[] args) {

		launch(args);

	}

}
```
