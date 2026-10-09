---
layout: default
title: "✍️ Activitats pràctiques UT3 — Programació en Java (1r DAW / DAM) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT3 — EXÁMENES"
prev_url: "../ut03/ut0312.html"
prev_label: "⬅️ 3.12 fichero1"
next_url: "../ut04/index.html"
next_label: "📘 UT4 Completa ➡️"
---

# ✍️ Activitats pràctiques UT3

> **✍️ 📋 Exercici / Qüestionari 3.1 — 27 Examen de Programacion - 1**
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 email
>
> Examen de Programación (1)
>
> 27 de Octubre de 2023
>
> > **✍️ Ejercicio 1: Carrera en pista (3 puntos)**
> > Ejercicio 1: Carrera en pista (3 puntos)
>
> Escribe un programa en Java que pida al usuario el número de participantes de la nueva carrera en pista de Valencia Trinidad Alfonso. Luego, pide el nombre de la ganadora de la carrera y desde qué línea de salida empieza la carrera.
>
> La salida por pantalla muestra la típica salida en pista de una carrera a pie. Los guiones (-) representa la línea de salida y carril, y los asteriscos (*) a cada participante en su correspondiente carril. También se mostrará el nombre de la participante ganadora al lado de su correspondiente línea de salida.
>
> A continuación, se muestra dos ejemplos de ejecución del programa
>
> Aclaraciones
>
> - Debes tener en cuenta que el número de participantes debe ser positivo y la línea de salida de la
>
> ganadora no puede ser superior al número de participantes. En ambos casos, advertir al usuario de que hay error en entrada de datos y cerrar el programa.
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 email
>
> > **✍️ Ejercicio 2: Analizando los dígitos de un número (3 puntos)**
> > Ejercicio 2: Analizando los dígitos de un número (3 puntos)
>
> Escribe un programa que vaya pidiendo al usuario números enteros y muestre, en cada caso, el total de dígitos PARES o MÚLTIPLOS DE TRES que hay en ese número, así como la media aritmética de estos dígitos encontrados.
>
> A continuación, se muestra un ejemplo de ejecución del programa
>
> Aclaraciones
>
> - El cero se considerará como positivo.
> - El cero al principio no cuenta como número.
> - La media debe ser un número válido (no debe mostrar Infinity, NaN, etc).
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 email
>
> > **✍️ Ejercicio 3: Partido de baloncesto (2 puntos)**
> > Ejercicio 3: Partido de baloncesto (2 puntos)
>
> El profesor de Educación Física tiene pensado organizar un partido de baloncesto con la clase de 3º ESO A. No le importa tener muchos estudiantes, pero sí le importa que el número de estudiantes con petos de color rojo sea el mismo que el número de estudiantes con petos de color azul, para que los equipos sean iguales en número.
>
> Escribe un programa que pida introducir cuántos estudiantes hay en clase, y después pregunte el color del peto de cada uno de ellos. Se deberá escribir ‘A’ para identificar un peto azul, y ‘R’ para peto rojo. Si se escribe cualquier otra cosa, el programa mostrará el mensaje de "Color inválido. Prueba de nuevo" y no contará ese peto en el conteo final (es decir, se volverá a pedir ese peto).
>
> Al final del programa, se debe mostrar el mensaje "Hay partido" si el número de petos rojos y azules son iguales, o "No hay partido" si son diferentes o el número de alumnos es impar. A continuación, se muestra un ejemplo de ejecución del programa
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 email
>
> > **✍️ Ejercicio 4: Halloween de Miércoles Addams Cada año Miércoles Add**
> > Ejercicio 4: Halloween de Miércoles Addams Cada año Miércoles Addams se reúne con sus amigas en la noche de Halloween para ir a la Mansión Tenebrosa y recoger tantos amuletos como puedan. Durante el año, pueden tener sus diferencias, pero en Halloween, siempre acuerdan que, al terminar su aventura, juntarán todos los amuletos que han recogido y los compartirán de manera equitativa. Sin embargo, a veces, la cantidad de amuletos no se puede dividir de manera justa entre ellos, y eso provoca que el espíritu de Halloween se convierta en algo más siniestro.
>
> Escribe un programa para ayudar a Miércoles Addams y sus amigas en la noche de Halloween. Se deberá introducir por teclado, por cada línea, una serie de números (separados por espacios) que representan la cantidad de amuletos que cada niña ha recogido. La línea termina con un 0 (ya que cada niña recoge al menos un amuleto). El programa finaliza con una línea de entrada en la que no hay niñas (sólo hay un 0).
>
> Por cada línea, el programa debe imprimir "EQUITATIVO" si es posible dividir los amuletos de manera exacta entre Miércoles y sus amigas, o "DESIGUAL" en caso contrario. A continuación, se muestra un ejemplo de ejecución del programa

> **✍️ Activitat Pràctica 3.2 — Entrega: -27 Examen Bloque 1**
> Entregar los cada ejercicio en un fichero .java

> **✍️ 📋 Exercici / Qüestionari 3.3 — 27 - examen PRG Bloque 2**
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Examen Programación Bloque 2 27 de noviembre de 2023 Ejercicio 1 – Matrices simétricas respecto a la horizontal (2,5 puntos) Una matriz es simétrica respecto a la horizontal si las filas parte superior de la matriz están reflejadas en las filas inferiores. Realiza una función en Java que se le pase como parámetro una matriz (m x n), es decir, no tiene porqué tener el mismo número de filas que de columnas, y devuelva si la matriz es simétrica o no. Si el número de filas es impar se considera que la fila del medio es simétrica a sí misma.
>
> Realiza una función en Java que se le pase como parámetro una matriz y la imprima por pantalla. Imprime en la función principal la matriz utilizando la segunda función y muestra si es simétrica o no utilizando el resultado de la primera función. Puedes realizar las pruebas con las siguientes matrices
>
> ```java
> int[][] m1 = {{1,2,1},{2,2,2},{3,2,3},{4,2,4}};
> int[][] m2 = {{1,1},{2,2},{2,2},{1,1}};
> int[][] m3 = {{1,1,1,1,1},{2,2,2,2,2},{1,1,1,1,1}};
> int[][] m4 = {{1,1},{2,2},{3,3},{2,2},{3,3}};
> ```
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Ejercicio 2 – Esoj Orromach Anilom (2,5 puntos) Crea una función que, dada una cadena de texto, devuelva la misma cadena pero cada una de las palabras que contiene al revés, manteniendo las mayúsculas y minúsculas en las posiciones originales. Realiza las siguientes pruebas en el método principal (main)
>
> Ejercicio 3 – A mi derecha y a mi izquierda (2,5 puntos) Realiza una función en Java que devuelva un vector que contenga 10 números enteros aleatorios entre 0 y 2. Realiza una función en Java que dado un vector, imprima por pantalla el contenido de ese vector junto a los índices (0 – 9) utilizando para ello una tabla.
>
> Realiza una función en Java que dado un vector encuentre un huevo marrón entre dos huevos blancos. Devuelve true si lo encuentra, false en caso contrario. El número 0 representa que no hay huevo, el número 1 representa a los huevos marrones y el número 2 representa los huevos blancos.
>
> Prueba en la función principal (main) las tres funciones anteriores.
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Ejercicio 4 – ¿Cuánto tiempo estudio Programación? (2,5 puntos) Realiza una función en Java que dadas 2 horas (tipo LocalTime), devuelva la diferencia en segundos entre las dos horas pasadas como parámetros. En la función principal (main), realiza un programa que le pida al usuario 2 horas, la hora en la que empiezas a estudiar y en la que terminas en formato HH:mm:ss, le pase como parámetros las dos horas (tipo LocalTime) a la función del apartado a) para que realice el cálculo e imprime el resultado por pantalla mostrando el tiempo que has estado estudiando en horas, minutos y segundos.

> **✍️ Activitat Pràctica 3.4 — Entrega: -27 Examen Bloque 2**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 3.5 — 02 - examen PRG Bloque 2**
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Examen Programación Colecciones dinámicas y Recursividad 2 de febrero de 2024 Ejercicio 1 (2,5 puntos) Escribe el resultado de ejecutar este programa.
>
> ```java
> public static void funcion_1(int n, int d) {
> ```
>
> ```java
> if (d > n) {
> ```
>
> ```java
> System.out.println();
> ```
>
> }
>
> else {
>
> ```java
> if (n % d == 0) {
> ```
>
> ```java
> System.out.print(d + " - ");
> ```
>
> }
>
> ```java
> funcion_1(n, d + 1);
> ```
>
> }
>
> }
>
> ```java
> public static void funcion_2(int[] v, int i, int n) {
> ```
>
> ```java
> if (i >= v.length) {
> ```
>
> ```java
> System.out.println();
> ```
>
> }
>
> else {
>
> ```java
> if (n % v[i] == 0) {
> ```
>
> ```java
> System.out.print(v[i] + " - ");
> ```
>
> }
>
> ```java
> funcion_2(v, i + 1, n);
> ```
>
> } }
>
> ```java
> public static void main(String[] args) {
> ```
>
> ```java
> int[] v1 = {2, 8, 9, 12};
> ```
>
> ```java
> int[] v2 = {73};
> ```
>
> ```java
> funcion_1(6, 1);
> ```
>
> ```java
> funcion_2(v1, 0, 24);
> ```
>
> ```java
> funcion_2(v2, 0, 146);
> }
> ```
>
> Resultado
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Ejercicio 2 (2,5 puntos)
>
> Calcular f (a, b) siendo
>
> f (a, b) = a
>
> si b = 0 f (a, b) = f (b, a % b) si b > 0
>
> La función f devuelve un número entero y recibe como parámetros dos números enteros
>
> ¿Qué nombre le pondrías a la función f? (0,5 puntos extra)
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Ejercicio 3 (2,5 puntos) Dos amigos nostálgicos, Miguel y David, están coleccionando cromos de antiguos de fútbolistas y desean mantener un registro de los cromos que tienen cada uno. Escribe un programa que permita a los dos amigos agregar cromos a sus colecciones y verificar qué cromos tienen en común. Cada cromo está identificado por un nombre único de futbolista (p. ej. Mendieta, Albelda, etc).
>
> Se debe garantizar que para cada amigo no haya cromos duplicados. Ten en cuenta que el programa no es sensible a mayúsculas ni minúsculas (es “case insensitive”). El programa se ejecutará de la siguiente manera: Como entrada pedirá introducir los cromos que tiene Miguel y luego los cromos que tiene David (hasta que introduzcan la palabra “fin” en ambos casos). Luego mostrará la colección de cromos que tiene cada uno y, a continuación, los cromos que tienen en común.
>
> Se valorará hasta en 0,5 puntos extra que el programa sea lo más modular posible.
>
> Ejemplo de ejecución
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Ejercicio 4 (2,5 puntos) En el Racó de l'Olla (Centro de Interpretación del Parque Natural de la Albufera) necesitan un programa para realizar el registro de las especies de aves avistadas en la zona de la Albufera. Además, quieren obtener estadísticas de los resultados obtenidos.
>
> En el programa se introducen como entrada la especie de ave de cada avistamiento realizado. El programa se ejecutará pidiendo las aves avistadas en cada momento y luego mostrará los siguientes datos: • Avistamientos registrados por cada especie. • Porcentaje de avistamientos por cada especie.
>
> • Total de avistamientos. • Total de especies registradas. El formato de salida puede ser como se indica en el siguiente ejemplo de ejecución.
>
> Ejemplo de ejecución

> **✍️ Activitat Pràctica 3.6 — Entrega: -02 Examen Bloque 2**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 3.7 — 01 - Examen 4 PRG Bloque 3**
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Examen Programación Programación orientada a objetos 1 de marzo de 2024 Ejercicio (10 puntos)
>
> En este examen deberás desarrollar un sistema para la gestión de álbumes de fotografía. A partir del código del programa principal y de las instrucciones detalladas en este documento, deberás completar el sistema para que funcione correctamente.
>
> Instrucciones
>
> ### 1. Crea un proyecto nuevo llamado ExamenPOO y adjunta tus iniciales (p.e. ExamenPOOJRS)
>
> - Crea 4 paquetes distintos: modelo, interfaz, enumerado y test.
>
> - Descarga la clase TestFotografia.java y añádela al paquete test (esta clase NO puede ser modificada).
>
> - En el paquete interfaces crea la interfaz llamada Editable, en la que se definen los métodos refinar y
>
> comprimir (sin parámetros de entrada ni de salida en ambos).
>
> - En el paquete enumerado crea dos enumerados: TipoCompresion (baja, media y alta) y TipoRefinado
>
> (con_grano, sin_grano)
>
> - El paquete modelo contiene las siguientes clases: Foto (implementa la interfaz Editable), AlbumDeFotos,
>
> Fotografa (no puede instanciarse), FotografaDePaisaje (hereda de Fotografa), FotografaDeRetrato (hereda de Fotografa)
>
> #### 6.1. Clase Foto
>
> Atributos de instancia* Constructores titulo cadena Crear un constructor con los parámetros título, iso, velocidad y apertura, con la funcionalidad correspondiente. Al crear una foto tiene compresión baja y tiene grano. iso entero velocidad entero apertura doble compresion TipoCompresion refinado TipoRefinado Métodos
>
> - estaMejorada, devuelve true si la foto tiene calidad alta y no tiene grano, en caso contrario false.
> - Sobrescribir los métodos necesarios con la funcionalidad correspondiente.
>
> (*) Todos los atributos de esta clase serán solo accesibles desde dentro de la propia clase
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> #### 6.2. Clase AlbumDeFotos
>
> Atributos de instancia* Constructores titulo cadena Crear un constructor con los parámetros título, autor y capacidad, con la funcionalidad correspondiente. capacidad entero autor Fotografo listaFotos ArrayList de Foto Métodos
>
> - insertarFoto, inserta una foto en la lista de fotos en caso de que el álbum no esté lleno (lo determina la
>
> capacidad), en caso contrario no hace nada.
>
> - estaLleno, devuelve true si el álbum ha llegado al máximo de su capacidad, false en caso contrario.
> - imprimirAlbum, imprime el título del álbum, el nombre del autor, y todas las fotos de dicho álbum. Hay
>
> que copiarlo tal cual aparece a continuación e implementar la funcionalidad correspondiente para que se muestre tal y como aparece al final de este documento. (*) Todos los atributos serán solo accesibles desde dentro de la clase
>
> ```java
> public void imprimirAlbum() {
> ```
>
> ```java
> System.out.println("****************************************");
> ```
>
> ```java
> System.out.println(this.titulo);
> ```
>
> ```java
> System.out.println("****************************************");
> ```
>
> ```java
> System.out.println(this.autor);
> ```
>
> ```java
> for (Foto foto : listaFotos) {
> ```
>
> ```java
> System.out.println(foto);
> ```
>
> }
>
> ```java
> System.out.println();
>     }
> ```
>
> #### 6.3. Clase Fotografa
>
> Atributos de instancia* Atributos de clase** Constructores titulo cadena numeroDeFotografas entero Crear un constructor con el parámetro del atributo de instancia y la funcionalidad correspondiente. Métodos Crear una propiedad de acceso de sólo lectura para el atributo de clase.
>
> (*) Accesible por la propia clase, las subclases y el paquete. (**) Accesible solo por la propia clase
>
> #### 6.4. Clase FotografaDePaisaje
>
> Implementar la funcionalidad correspondiente para que el programa funcione correctamente.
>
> #### 6.5. Clase FotografaDeRetrato
>
> Implementar la funcionalidad correspondiente para que el programa funcione correctamente.
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> - Por último, vuestro programa debe ejecutarse lo más parecido posible a esta muestra de ejecución por
>
> pantalla de la clase TestFotografia.java

> **✍️ Activitat Pràctica 3.8 — Entrega: -01 Examen 4 Bloque 3**
> Entregar solamente los ficheros .java que se pide en el examen.

> **✍️ 📋 Exercici / Qüestionari 3.9 — 12 - PRG Examen 5 Bloque 3**
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Examen Programación Programación orientada a objetos, excepciones y ficheros 12 de abril de 2024
>
> INTRODUCCIÓN
>
> El lenguaje BASIC es un lenguaje de programación de los años 70 y 80, de bajo nivel, que consistía en una secuencia de instrucciones ordenadas por un índice numérico, indicando lo que el programa debía hacer.
>
> Un ejemplo de código código BASIC: 10 PRINT “Escribe un numero” 20 INPUT n1 30 PRINT “Escribe otro numero” 40 INPUT n2 50 PRINT “Su suma es” 60 PRINT n1+n2 Como puede verse, al inicio de cada instrucción hay: • Identificador: identificador numérico que permite ordenar la secuencia de instrucciones. En el ejemplo anterior, primero se ejecutaría la instrucción PRINT con el número 10, luego el INPUT con el número 20… y así sucesivamente.
>
> • Tipo de instrucción: puede ser PRINT o INPUT. • Parámetros: “Escribe un número”, n1, n1+n2, etc.
>
> Sin embargo, el código puede presentarse desordenado, con espacios o, incluso, con identificadores de línea incorrectos (no pueden ser negativos).
>
> Así es como se encuentra en el fichero “CodigoBASIC.bas” que tendréis disponible para el examen
>
> 10 PRINT "Escribe un numero"
>
> 1 PRINT "Escribe una palabra" 30 PRINT "Escribe otro numero" 50 PRINT "Su suma es"
>
> 60 PRINT n1+n2 20 INPUT n1
>
> 40 INPUT n2
>
> ENUNCIADO DEL PROGRAMA
>
> Debes implementar un traductor sencillo de instrucciones BASIC para construir el programa equivalente en lenguaje JAVA. El programa deberá generar dos salidas: • Por pantalla: donde se muestran las instrucciones BASIC ordenadas y sus equivalentes en JAVA. • Fichero generado: fichero .java generado con el código Java completo y equivalente al código BASIC del fichero procesado. Si se ha generado correctamente debería poder compilarse y ejecutarse.
>
> Cada instrucción BASIC tiene su equivalente en JAVA (ver salida por pantalla de este documento)
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> TAREAS A REALIZAR
>
> ### 1. Crear un proyecto llamado ExamenPRG
>
> - Crear tres paquetes llamados: modelos, principal, excepciones.
> - En el paquete principal, añade la clase Principal.java disponible para el examen. NO SE PUEDE MODIFICAR.
> - En el paquete modelos, crear la siguientes clases y enumerados con las siguientes características
>
> (0,5 puntos) TipoInstruccion: Enumerado con el tipo de instrucción que puede ser PRINT o INPUT
>
> (2,5 puntos) InstruccionBASIC: clase que respresentará a cada instrucción del código BASIC. Implementa la interfaz Comparable. Atributos privados: identificador (int), tipo (TipoInstruccion), parametros (String)
>
> Constructor por parámetros: inicializará los atributos de la clase al valor de los parámatros recibidos. Deberá lanzar una excepción del tipo InstruccionIncorrectaException cuando el identificador sea negativo. Esta excepción debe ser creada como se indica en el apartado 5.
>
> convertirAJava(): método público que no recibe parámetros y devolverá una cadena de texto formada por la instrucción Java equivalente a su instrucción BASIC. Recuerda que sólo tendremos dos instrucciones BASIC: PRINT o INPUT.
>
> Implementar el método de la interfaz Comparable de manera que queremos ordenar las instrucciones BASIC respecto al atributo indentificador.
>
> Sobreescribir el método toString() para imprimir una instrucción BASIC.
>
> Implementar los getters de los atributos de la clase.
>
> (6 puntos) TraductorDeCodigo: clase Atributos privados: no tiene.
>
> (3 puntos) cargarFicheroBASIC: método público que recibe como parámetro la ruta del fichero con código BASIC y devuelve la lista de instrucciones BASIC ordenadas. Este método lee cada línea del fichero y la procesa como una instrucción BASIC, de manera que por cada línea se crea un objeto InstruccionBASIC y se añade a una lista de objetos InstruccionBASIC.
>
> Debes tener en cuenta que al crear el objeto InstruccionBASIC debes capturar la excepcion InstruccionIncorrectaException, y en caso que se produzca dicha excepción mostrar el mensaje de error utilizando el método imprimirExcepcion() (ver apartado 5). El programa deberá seguir con su ejecución y leyendo las siguientes instrucciones. (Ver salida por pantalla)
>
> (1 punto) imprimirBASICJava: método público que recibe la lista ordenada de instrucciones BASIC y no devuelve nada. Imprimirá tanto las instrucciones BASIC ordenadas como su equivalente de instrucciones JAVA con el formato aproximado de salida por pantalla que puedes ver en el apartado Salidas del Programa.
>
> (2 punto) crearFicheroBASICJava: método público que recibe la ruta del fichero java que se va a crear y la lista de instrucciones BASIC ordenadas, y no devuelve nada. Escribirá en dicho fichero las instrucciones Java equivalentes al código BASIC, pero esta vez estarán contenidas dentro de un método main de una clase Java, de manera que el fichero .java generado se podrá compilar y ejecutar. Atención, la clase generada debe tener el nombre del fichero sin la extensión .java. Ver apartado Salidas del programa el fichero “CodigoJavaGenerado.java”.
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 96 245 78 20 email
>
> Gestión de excepciones
>
> En la lectura y escritura de ficheros se podrán producir excepciones y estas deben ser capturadas. También deberás cerrar los ficheros adecuadamente. Por otra parte deberás crear una excepción personalizada para comprobar que no haya instrucciones con un número de identificador negativo.
>
> ### 5. En el paquete excepciones crea la siguiente clase
>
> (1 punto) InstruccionIncorrectaException: Esta excepción se lanzará cuando el número de identificador de la instrucción sea negativo. Atributos privados: instruccionBASIC (InstruccionBASIC) Constructor: un único constructor al que se le pasará un parámetro de tipo InstruccionBASIC.
>
> Métodos: un método público llamado imprimirExcepcion() donde se especificará el texto a mostrar en caso que produzca una excepción (ver ejemplo de salida por pantalla.
>
> SALIDAS DEL PROGRAMA
>
> Salida de pantalla
>
> CodigoJavaGenerado.java generado
>
> ```java
> import java.util.Scanner;
> public class CodigoJavaGenerado {
>     public static void main(String[] args) {
>         System.out.print("Escribe un numero");
>         int n1 = Integer.valueOf((new Scanner(System.in)).next());
>         System.out.print("Escribe otro numero");
>         int n2= Integer.valueOf((new Scanner(System.in)).next());
>         System.out.print("Su suma es");
>         System.out.print(n1+n2);
>     }
> }
> ```

> **✍️ Activitat Pràctica 3.10 — Entrega: -12 PRG Examen 5 Bloque 3**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 3.11 — Entrega: Examen Ordinaria 17/06/2024**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 3.12 — Entrega: Aplicación Extraordinaria 26/06/2024**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 3.13 — Entrega: Examen Extraordinaria 26/06/2024**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 3.14 — 21 examen Programacion**
> Examen Programación (21 de noviembre de 2018) Nombre: Nota: 1.- Aprendiendo el código Morse (3 puntos) problema 211 aceptaelreto.com Todos hemos oído hablar del código o alfabeto Morse, que antiguamente servía para transmitir mensajes de telégrafo. El código consiste en la codificación de cada letra del abecedario con una sucesión de puntos y rayas que se traducen a señales auditivas cortas (puntos) o largas (rayas), siguiendo las transformaciones que se indican en la tabla.
>
> Letra Código Letra Código A .- N -. B -... O --- C -.-. P .--. D -.. Q --.- E . R .-. F ..-. S ... G --. T - H .... U ..- I .. V ...- J .--- W .-- K -.- X -..- L .-.. Y -.-- M -- Z --.. El código, no obstante, es bastante complicado de aprender y utilizar. Por una parte hay que aprenderse los códigos de cada letra. Por otra, hay que añadir pausas entre cada símbolo, al existir codificaciones de letras que son prefijos de otras, y pausas más largas entre cada palabra, pues el "espacio" no tiene ningún código asociado.
>
> Una guía de ayuda para aprenderse la tabla de codificación consiste en tener una palabra de referencia para cada letra. Así, por ejemplo, para la letra 'A' podemos memorizar Arco. La palabra elegida para cada letra debe comenzar por esa letra y ser tal que si cada vocal 'o' se sustituye por una raya, y el resto de vocales por un punto, el resultado final sea la codificación de la letra en cuestión.
>
> A continuación aparecen algunos ejemplos de palabras que pueden utilizarse como palabras de referencia: Letra Palabra de referencia Código A Arco .- B Bogavante -... C Corazones -.-. Ahora estamos haciendo una tabla nueva y tenemos que comprobar si, dada una palabra, podemos o no utilizarla como palabra de referencia.
>
> Escribir una función que se le pase una palabra y devuelva si es palabra de referencia o no.
>
> 2.- Y el ganador es… (3 puntos) problema 186 aceptaelreto.com En muchos de los concursos de programación, como en el que hoy participas, cada vez que un equipo resuelve correctamente un problema recibe un globo del color asociado a ese problema. Al final, quien más globos consigue no sólo tiene su ordenador más colorido, sino que será el ganador del concurso.
>
> Dada la lista de los globos colocados a cada equipo, ¿eres capaz de decir quién es el ganador? Entrada La entrada estará compuesta de múltiples casos de prueba, cada uno de ellos simulando un concurso. Cada caso de prueba comienza con una línea con dos números, el primero de ellos indicando el número de equipos participantes (entre 1 y 20) y el segundo el número de globos entregados.
>
> A continuación aparecerá una línea por cada globo entregado, con el número del equipo que lo ha recibido (entre 1 y el número de equipos) y el color (una palabra de un máximo de 20 letras). Un equipo nunca recibirá dos veces el mismo color de globo. La entrada terminará cuando se llegue a un concurso sin equipos ni globos.
>
> Salida Para cada caso de prueba se debe escribir el número del equipo ganador en una línea. En caso de empate, se escribirá EMPATE. Entrada de ejemplo 4 3 2 Rojo 3 Amarillo 3 Azul 4 4 2 Rojo 3 Amarillo 3 Azul 2 Verde 0 0 Salida de ejemplo EMPATE
>
> 3.- Matrices molonas (3 puntos) 3.a.- Una matriz es molona si para cada columna y para cada fila todos los elementos que almacena son 7 excepto un elemento que es igual a 13. Realice una función que determine si una matriz de N x M elementos es molona o no. Ejemplos
>
> Si molona Si molona No molona No molona 3.b.- Generalizar esta función anterior para 2 valores enteros cualesquiera. Si molona (para 0s y 1s)
>
> 4.- Matrices curiosas (3 puntos) Generar la siguiente matriz de orden N x N (sólo para valores impares de N y mayores que 3). Para N = 3: Para N = 5: Para N = 7

> **✍️ 📋 Exercici / Qüestionari 3.15 — 14 examen Programacion**
> Examen Programación (14 de noviembre de 2019) 1.- Suma de vectores (2,5 puntos) Vectores.java Crea una función que imprima un vector pasado como parámetro mostrando el índice y el valor de cada posición del vector (lo más parecido al ejemplo). Crea una función que cree un vector de tamaño aleatorio entre 0 y 15 y que lo rellene con números primos aleatorios entre 0 y 101.
>
> Crea una función que dados 3 vectores pasados como parámetros devuelva un vector con la suma de los 3. Se pueden añadir más funciones a la clase para realizar las tareas que se consideren oportunas. El método main de la clase sería el siguiente (no se pude modificar nada de este método)
>
> ```java
> public static void main(String[] args) {
> ```
>
> //Crear 3 vectores de tamanyo aleatorio con valores primos aleatorios
>
> ```java
> int[] v1 = generarVectorPrimosRandom();
> int[] v2 = generarVectorPrimosRandom();
> int[] v3 = generarVectorPrimosRandom();
> ```
>
> //Imprimir vectores
>
> ```java
> imprimirVector(v1);
> imprimirVector(v2);
> imprimirVector(v3);
> ```
>
> //Sumar los 3 vectores
>
> ```java
> int[] r = sumar(v1, v2, v3);
> ```
>
> //Imprimir resultado
>
> ```java
> imprimirVector(r);
> }
> ```
>
> > **💡 Apunt Tècnic**
> > Ejemplo: Vector: ┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐ │ Índice │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ ├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤ │ Valor │ 11 │ 7 │ 19 │ 23 │ 3 │ 13 │ 13 │ └────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘ Vector
>
> ┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐ │ Índice │ 0 │ 1 │ 2 │ 3 │ ├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤ │ Valor │ 3 │ 5 │ 7 │ 13 │ └────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘ Vector
>
> ┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐ │ Índice │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ │ ├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤ │ Valor │ 2 │ 7 │ 5 │ 2 │ 5 │ 7 │ │ └────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘ Vector
>
> ┌────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐ │ Índice │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ ├────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤ │ Valor │ 16 │ 19 │ 31 │ 38 │ 8 │ 20 │ 13 │ └────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
>
> 2.- Gallinas en los gallineros (2,5 puntos) Gallinas.java Una granja nos ha encargado una aplicación para colocar a sus gallinas en sus 10 gallineros. En un gallinero se pueden poner de 0 (gallinero vacío) a 4 gallinas (gallinero lleno). Cuando el granjero compra “packs” de gallinas, las debe colocar en los distintos gallineros. De momento la granja no está preparada para colocar más de 4 gallinas por gallinero, por tanto, si el granjero compra 6 gallinas, el programa dará el mensaje “Lo siento, no admitimos grupos de 6 gallinas, devuelvalas y compre ‘packs’ de 4 gallinas como máximo e intente de nuevo”.
>
> Para el “pack” que llega, se busca siempre el primer gallinero libre (con 0 gallinas). Si no quedan gallineros libres, se busca donde haya un hueco para todo el grupo, por ejemplo si el grupo es de dos gallinas, se podrá colocar donde haya una o dos gallinas. Inicialmente, los 10 gallineros se cargan con valores aleatorios entre 0 y 4. Cada vez que se meten nuevas gallinas se debe mostrar el estado de los gallineros.
>
> Los “packs” de gallinas no se pueden romper aunque haya huecos sueltos suficientes, las gallinas que se compran siempre son de la misma família y, como es sabido, las famílias de gallinas están muy unidas y no se pueden separar. El funcionamiento del programa se ilustra a continuación
>
> ┌──────────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬────┐ │Gallinero nº │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10 │ ├──────────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼────┤ │Ocupación │ 3 │ 2 │ 0 │ 2 │ 4 │ 1 │ 0 │ 2 │ 1 │ 1 │ └──────────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴────┘ ¿Cuántas gallinas ha comprado? (Introduzca -1 para salir del programa): 2 Por favor, introduzca las gallinas en el gallinero número 3.
>
> ┌──────────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬────┐ │Gallinero nº │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10 │ ├──────────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼────┤ │Ocupación │ 3 │ 2 │ 2 │ 2 │ 4 │ 1 │ 0 │ 2 │ 1 │ 1 │ └──────────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴────┘ ¿Cuántas gallinas ha comprado? (Introduzca -1 para salir del programa): 4 Por favor, introduzca las gallinas en el gallinero número 7.
>
> ┌──────────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬────┐ │Gallinero nº │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10 │ ├──────────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼────┤ │Ocupación │ 3 │ 2 │ 2 │ 2 │ 4 │ 1 │ 4 │ 2 │ 1 │ 1 │ └──────────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴────┘ ¿Cuántas gallinas ha comprado? (Introduzca -1 para salir del programa): 7 “Lo siento, no admitimos grupos de 7 gallinas, devuelvalas y compre ‘packs’ de 4 gallinas como máximo e intente de nuevo” ¿Cuántas gallinas ha comprado? (Introduzca -1 para salir del programa): 3 Tendrán que compartir gallinero. Por favor, introduzca las gallinas en el gallinero número 6.
>
> ┌──────────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬────┐ │Gallinero nº │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10 │ ├──────────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼────┤ │Ocupación │ 3 │ 2 │ 2 │ 2 │ 4 │ 4 │ 4 │ 2 │ 1 │ 1 │ └──────────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴────┘ ¿Cuántas gallinas ha comprado? (Introduzca -1 para salir del programa): 4 Lo siento, en estos momentos no queda sitio en ningún gallinero.
>
> ┌──────────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬────┐ │Gallinero nº │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10 │ ├──────────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼────┤ │Ocupación │ 3 │ 2 │ 2 │ 2 │ 4 │ 4 │ 4 │ 2 │ 1 │ 1 │ └──────────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴────┘
>
> 3.- Matrices en Java (2 puntos) Matrices.java
>
> - (1 punto) Realiza una función en java que dada una matriz calcule y devuelva la 1-norma de dicha matriz.
>
> La 1-norma se define como el máximo de la suma del valor absoluto de los elementos de cada columna de la matriz. Se supondrá que la matriz es cuadrada, de dimensión nxn.
>
> - (1 punto) Realiza una función en Java que multiplique una matriz diagonal (tan sólo tiene elementos no
>
> nulos en su diagonal) por un entero dado. Se deben realizar el mínimo de recorridos posibles. 4.- Sopa de letras (3 puntos) SopaLetras.java Crea una función que genere una sopa de letras de tamaño 20x20 de forma aleatoria. Crea una función que imprima la sopa de letras como en el ejemplo.
>
> Crea una función que busque las palabras del vector pasado como parámetro y las imprima por pantalla como en el ejemplo. La función solo buscará las palabras de arriba a abajo, de abajo a arriba, de izquierda a derecha y de derecha a izquierda. Aunque se valorará con 1 punto extra quien busque en las cuatro opciones de las diagonales.
>
> Se pueden añadir más funciones a la clase para realizar las tareas que se consideren oportunas. El método main de la clase sería el siguiente (no se pude modificar nada de este método)
>
> ```java
> public static void main(String[] args) {
> ```
>
> String[] palabras = {"esa", "edu", "mus", "mar", "ora", "aro", "uva", "ufo", "mes", "oso", "ron", "seo", "pus", "rol", "rio", "oir", "muy", "ras", "ivi", "ojo", "uvi", "veo", "pum", "bus", "gal", "mas"};
>
> ```java
> char[][] sopa = generarSopaDeLetras();
> imprimirSopaDeLetras( sopa );
> imprimirPalabrasEncontradas( sopa, palabras );
> }
> ```
>
> SOPA DE LETRAS ---------------------------------------------------------------- | v v g p x m d f o z n f k g x q h v b i | | v i c m o w u t z x o f b x x i g s w g | | w f p l w w k s l d a s j m u d s n o s | | a r c a d o q o a x n w d o v s z f x f | | e e j b l p o l p s h e b t u t y k y z | | v s b k m v p h u r d b r j j d w r o y | | q e t o i u i b z r h n x r n w d b g j | | a b r v x g r c m c z f q s p a e w l j | | u c u f a u v b c u t g v a g j a r s d | | e o o v g v w w w v l h j z t v k l j s | | l u o s z k t j d b t t a t n s w j z y | | b t g r d q x f k r x v n b j x k a g m | | h u w r w z s s n q x o i x p n c z h n | | u j b m x x r d u r e m r z j r a p v h | | e w p o y u l m y j b a w f t q w l h c | | l e f t a p h f g p i r i o n q y p r k | | w w y v l g w h c k z j r c t d j p l k | | b a d c t l u z k p c g h m l e j i h c | | m t p e a g e s a k g l e w r l n m e a | | a e p d y u y s x j h u f g l f b u g f | ---------------------------------------------------------------- Palabras encontradas
>
> esa (izquierda - derecha) mar (arriba - abajo) rio (izquierda - derecha) oir (derecha - izquierda)

> **✍️ 📋 Exercici / Qüestionari 3.16 — 30 examen Programacion**
> 1.- Vectores en Java (5 puntos) Vectores.java
>
> - (1 punto) Realiza una función en java que rellene un vector de N elementos con números enteros
>
> aleatorios comprendidos entre A y B (ambos incluidos).
>
> - (0,5 puntos) Realiza una función en java que imprima un vector, mostrando el índice y el valor.
> - (2 puntos) Realiza una función en java que rote N posiciones hacia la derecha los elementos de ese vector,
>
> es decir, el elemento de la posición 0 debe pasar a la posición 0+N, el de la 1 a la 1+N, etc. Si, por ejemplo, N=1, el número que se encuentra en la última posición debe pasar a la posición 0.
>
> - (1,5 puntos) Realiza una función en java que imprima un vector, mostrando el índice y resaltando entre
>
> corchetes los múltiplos de un número dado.
>
> - Si la clase NO COMPILA, la nota de todo el ejercicio será un 0.
> - El método main de la clase sería el siguiente (no se pude modificar nada de este método)
>
> ```java
> public static void main(String[] args) {
> Scanner sc = new Scanner(System.in);
> ```
>
> //1-. Generar vector
>
> ```java
> int[] v = generarVectorRandom(14, 0, 400);
> imprimirVector(v);
> ```
>
> //2-. Rotar vector
>
> ```java
> System.out.println("¿Cuantas posiciones a la derecha quieres rotar los elementos del vector?");
> int n = sc.nextInt();
> v = rotarVector(v, n);
> System.out.printf("Vector con los elementos rotados %d posiciones:\n", n);
> imprimirVector(v);
> ```
>
> //3.- Resaltar números
>
> ```java
> System.out.println("De que numero quieres que resalte sus multiplos");
> n = sc.nextInt();
> imprimirVector(v, n);
> }
> ```
>
> - Un posible resultado de la ejecución del programa sería el siguiente
>
> 2.- Sopa de letras (5 puntos) SopaLetras.java
>
> - (1,5 puntos) Crea una función que genere una sopa de letras de tamaño 20x20 de forma aleatoria.
> - (1 punto) Crea una función que imprima la sopa de letras como en el ejemplo.
> - (2,5 puntos) Crea una función que busque las palabras del vector pasado como parámetro y las imprima
>
> por pantalla como en el ejemplo. La función solo buscará las palabras de arriba a abajo, de abajo a arriba, de izquierda a derecha y de derecha a izquierda. Aunque se valorará con 2 puntos extra quien busque en las cuatro opciones de las diagonales.
>
> - Se pueden añadir más funciones a la clase para realizar las tareas que se consideren oportunas.
> - Si la clase NO COMPILA, la nota de todo el ejercicio será un 0.
> - El método main de la clase sería el siguiente (no se pude modificar nada de este método)
>
> ```java
> public static void main(String[] args) {
> ```
>
> String[] palabras = { "esa", "edu", "mus", "mar", "ora", "aro", "uva", "ufo", "mes", "oso", "ron", "seo", "pus", "rol", "rio", "oir", "muy", "ras", "ivi", "ojo", "uvi", "veo", "pum", "bus", "gal", "mas" };
>
> ```java
> char[][] sopa = generarSopaDeLetras();
> imprimirSopaDeLetras( sopa );
> imprimirPalabrasEncontradas( sopa, palabras );
> }
> ```
>
> SOPA DE LETRAS ---------------------------------------------------------------- | v v g p x m d f o z n f k g x q h v b i | | v i c m o w u t z x o f b x x i g s w g | | w f p l w w k s l d a s j m u d s n o s | | a r c a d o q o a x n w d o v s z f x f | | e e j b l p o l p s h e b t u t y k y z | | v s b k m v p h u r d b r j j d w r o y | | q e t o i u i b z r h n x r n w d b g j | | a b r v x g r c m c z f q s p a e w l j | | u c u f a u v b c u t g v a g j a r s d | | e o o v g v w w w v l h j z t v k l j s | | l u o s z k t j d b t t a t n s w j z y | | b t g r d q x f k r x v n b j x k a g m | | h u w r w z s s n q x o i x p n c z h n | | u j b m x x r d u r e m r z j r a p v h | | e w p o y u l m y j b a w f t q w l h c | | l e f t a p h f g p i r i o n q y p r k | | w w y v l g w h c k z j r c t d j p l k | | b a d c t l u z k p c g h m l e j i h c | | m t p e a g e s a k g l e w r l n m e a | | a e p d y u y s x j h u f g l f b u g f | ---------------------------------------------------------------- Palabras encontradas
>
> esa (izquierda - derecha) mar (arriba - abajo) rio (izquierda - derecha) oir (derecha - izquierda)

> **✍️ 📋 Exercici / Qüestionari 3.17 — 29 - examen PRG**
> > **✍️ Ejercicio 1: Se pide la implementación de un valor de tipo boolea**
> > Ejercicio 1: Se pide la implementación de un valor de tipo boolean. El método devolverá true si la ca aunque no esté contenida en un s Por ejemplo, “Castor” está dentro Sin embargo, no está dentro de “A
>
> > **✍️ Ejercicio 2: Se pide la implementación de u devuelva un valor de**
> > Ejercicio 2: Se pide la implementación de u devuelva un valor de tipo boolean El método devolverá true si la cad
>
> > **✍️ Ejercicio 3: Calcular la 1-norma de una matri los elementos de ca**
> > Ejercicio 3: Calcular la 1-norma de una matri los elementos de cada columna de Ejemplo: int[][] m1 = {{5, -9, 7}, {-2, 3, 6}, {-1 devuelve 20
>
> > **✍️ Ejercicio 4: Comprobar si una matriz a cuadr matriz a de dimensió**
> > Ejercicio 4: Comprobar si una matriz a cuadr matriz a de dimensión n es estric absoluto del elemento de la diago del resto de elementos de esa fila Ejemplos: int[][] m1 = {{-9, -1, 7}, {-2, 8, 4}, {- devuelve TRUE
>
> > **⚠️ NOTA: Incluir en el método princi...**
> > NOTA: Incluir en el método princi
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: 46001199@gva.es Examen PROGRAMACIÓN 29 de noviembre de 2021 na función en Java que reciba como argumento adena de caracteres almacenada en s1 está con solo bloque. Es decir, puede estar fragmentada p o de “Ayer, en Castellón hubo tormenta”.
>
> Ayer hubo tormenta en Castellón”. una función en Java que reciba como argumen n. dena de texto contiene las 5 vocales, false en caso z a. La 1-norma se define como el máximo de la e la matriz. Se supondrá que la matriz es cuadrad 1, 8, 4}}; int[][] m2 = {{1, 2, 3}, {4, 5, 6}, {7,
>
> devuelve 18 ada (de dimensión n×n) es estrictamente diagon ctamente diagonal dominante por filas cuando, onal de esa fila es estrictamente mayor que la su . -1, -3, 5}}; int[][] m2 = {{5, -9, 7}, {-2, 3, 6}, {
>
> devuelve FALSE pal (main) al menos una prueba de cada función
>
> os dos Strings y devuelva un ntenida en la que hay en s2, ero en el mismo orden. ntos una cadena de texto y o contrario. a suma del valor absoluto de da, de dimensión n×n. 8, 9}}; nal dominante por filas. Una para todas las filas, el valor uma de los valores absolutos 1, 8, 4}}; .

> **✍️ 📋 Exercici / Qüestionari 3.18 — 01 Examen de programación**
> 46001199 Parc Salvador Castell, 16 46680 - Algemesí Teléfono: 96 245 78 20 Correo electrónico: 46001199 @edu.gva.es Examen de Programación 1r.Trimestre DAW Semipresencial 1 de Diciembre de 2022 Instrucciones: Todos los ejercicios se tienen que resolver según los conceptos impartidos durante todo el curso. Los criterios de calificación se basarán en
>
> ✔Si el código no compila o entre el 0%-19%: 0 puntos. ✔Si el código es funcional entre el 20%-100% (aprox.) se calificará la parte proporcional. ✔En menor medida, se evaluará: el estilo y la claridad del código, uso adecuado de comentarios, uso de nombres de variables adecuados, uso de estructuras, etc. La falta de claridad, estilo y eficiencia pueden llegar a descontar hasta un 20% de la nota del ejercicio.
>
> En resumen, la nota de cada ejercicio será: ✔No compila: 0 puntos ✔Funcionalidad del código: 80% ✔Estilo, claridad y eficiencia: 20% Formato fichero de entrega: Indicar al inicio de cada ejercicio el siguiente comentario: /**
>
> - Nombre y apellidos
>
> *
>
> - Ejercicio Nº EJERCICIO
>
> *
>
> - Completado: Sí / No / Parcialmente
>
> */ Nomenclaturas ficheros y proyecto: ✔ Nombre del proyecto Eclipse: ExamenTUNOMBRE ✔ Nombre de los ficheros: Ejercicio1.java, Ejercicio2.java, Ejercicio3.java ✔ No incluir los ejercicios en ningún paquete propio (solo el default package). ✔ Los ficheros de los 3 ejercicios (solo los .java) se empaquetarán en un ZIP llamado ExamenTUNOMBRE.zip.
>
> ✔ Este fichero es el que se entregará a través de la plataforma Aules cuando indique el profesor. En caso de no estar disponible la plataforma, el fichero se entregará a un dispositivo de memoria externa. proporcionado por el profesor.
>
> 46001199 Parc Salvador Castell, 16 46680 - Algemesí Teléfono: 96 245 78 20 Correo electrónico: 46001199 @edu.gva.es
>
> 46001199 Parc Salvador Castell, 16 46680 - Algemesí Teléfono: 96 245 78 20 Correo electrónico: 46001199 @edu.gva.es Prólogo del examen ¡Bienvenido/a al IES Sant Aclaus! Se te ha contratado para desarrollar aplicaciones con el fin de ayudarnos a digitalizar parte de nuestro centro. ¡Esperamos que tengas mucho éxito!
>
> > **✍️ Ejercicio 1. (4 puntos) Introducción El profesorado del IES Sant**
> > Ejercicio 1. (4 puntos) Introducción El profesorado del IES Sant Aclaus te ha encomendado crear un programa que permita obtener los resultados de cada asignatura en la siguiente evaluación. ¡Es urgente! Descripción del programa Escribir un programa para calcular resultados de la evaluación de los estudiantes de una asignatura. El programa pedirá primero cuántos estudiantes se van a examinar y luego pedirá el nombre de la asignatura. A continuación, se pedirá la nota mínima para aprobar. Después, se introducirán tantas notas como estudiantes examinados se hayan indicado
>
> ¿Cuántos estudiantes se examinan?: 1 Nombre de asignatura: Sistemas Informáticos ¿Cuál es la nota mínima para aprobar?: 5 Introduce nota: 1 Introduce nota: 3 Introduce nota: 6 Al finalizar, el programa devolverá cuántos estudiantes han aprobado y cuántos ha suspendido, la nota más alta, la nota más baja y la media de todas las notas, como se muestra a continuación
>
> == Resultados de Sistemas Informáticos == Nº de estudiantes aprobados: 1 Nº de estudiantes suspendidos: 2 Nota máxima: 6 Nota mínima: 1 Nota media: 3,33 FIN Requisitos que debe cumplir el programa • No se pueden utilizar variables globales. • Las notas introducidas no pueden contener decimales y deben tener un valor entre 0 y 10.
>
> • La nota media debe mostrarse con dos decimales. • Funciones que deberéis crear y luego utilizar dentro de la función main: ◦obtenerNotaMaxima(notaNueva, notaMaxActual):devuelve el mayor valor entre notaNueva y notaMaxActual. ◦obtenerNotaMinima(notaNueva, notaMinActual):devuelve el menor valor entre notaNueva y notaMinActual.
>
> ◦imprimirResultados(…): Muestra los resultados obtenidos como se indica en el ejemplo que viene a continuación. Los puntos suspensivos son los parámetros de entrada necesarios para la función.
>
> 46001199 Parc Salvador Castell, 16 46680 - Algemesí Teléfono: 96 245 78 20 Correo electrónico: 46001199 @edu.gva.es Ejercicio 2. (3 puntos) Introducción El profesor de Educación Física tiene pensado organizar un partido de baloncesto con la clase de 3º ESO A. No le importa tener muchos estudiantes, pero sí le importa que el número de estudiantes con petos de color rojo sea el mismo que el número de estudiantes con petos de color azul, para que los equipos sean iguales en número.
>
> Descripción del programa Escribe un programa que pida introducir cuántos estudiantes hay en clase, y después pregunte el color del peto de cada uno de ellos. Se deberá escribir ‘A’ para identificar un peto azul, y ‘R’ para peto rojo. Si se escribe cualquier otra cosa, el programa mostrará el mensaje de "Color inválido. Prueba de nuevo" y no contará ese peto en el conteo final (es decir, se volverá a pedir ese peto).
>
> Al final del programa, se debe mostrar el mensaje "Hay partido" si el número de petos rojos y azules son iguales, o "No hay partido" si son diferentes. Requisitos que debe cumplir el programa • No se pueden utilizar variables globales. • El programa deberá incluir una función llamada hayPartido a la que se le pasarán dos parámetros de entrada: el número de petos rojos y el número de petos azules. La función deberá devolver un booleano que indique si hay el mismo número de petos rojos que azules, o no. Esta función se debe llamar desde la función main.
>
> • Si el número de estudiantes introducido es impar, el programa debe mostrar directamente "No hay partido", sin pedir los petos, ya que será imposible que el número de petos rojos y azules sea igual. Ejemplo 1 de ejecución: Indica el número de estudiantes: 6 Introduce el color del peto de cada estudiante (R para Rojo, A para Azul) A R C Color inválido. Prueba de nuevo R A R A ¡Hay partido! :) Ejemplo 2 de ejecución
>
> Indica el número de estudiantes: 15 ¡No hay partido! :(
>
> 46001199 Parc Salvador Castell, 16 46680 - Algemesí Teléfono: 96 245 78 20 Correo electrónico: 46001199 @edu.gva.es Ejercicio 3. (3 puntos) Introducción El profesor de matemáticas tiene un hobby muy peculiar: le gusta coleccionar los números pares. Para ello necesita un programa que le permita obtenerlos fácilmente. ¡Ayúdale a encontrar todos los números pares!
>
> Descripción del programa Escribe un programa que vaya pidiendo un número entero y muestre cuántos dígitos PARES tiene ese número. Al finalizar el programa se mostrará todos los dígitos pares encontrados durante su ejecución. Requisitos que debe cumplir el programa • No se pueden utilizar variables globales.
>
> • No se puede utilizar en ningún caso el tipo String ni métodos asociados a este. • El 0 (cero) es un número par, a no ser que que esté a la izquierda. Si el número es todo ceros se contará como un único cero. • El programa deberá incluir al menos una función llamada obtenerCantidadPares a la que se le pasará como parámetro de entrada el número entero escrito, y devolverá el número de dígitos pares que contiene este número entero.
>
> • El programa termina cuando se introduce un número negativo. Ejemplo de ejecución: Escribe un número: 1234 Pares encontrados: 2 Escribe un número: 01234 Pares encontrados: 2 Escribe un número: 202 Pares encontrados: 3 Escribe un número: 0 Pares encontrados: 1 Escribe un número: 0000 Pares encontrados: 1 Escribe un número: -5 Total de pares encontrados: 9 FIN

> **✍️ 📋 Exercici / Qüestionari 3.19 — 30 examen PRG - Recursividad**
> martes, 30 de enero de 2018 Examen PROGRAMACIÓN 1.- 99 Botellas de Cerveza (2 puntos) La primera estrofa de la canción “99 Botellas de Cerveza” dice: Hay 99 botellas de cerveza en la pared, hay 99 botellas de cerveza, una sola agarrarás, y después la pasarás, hay 98 botellas de cerveza en la pared.
>
> Las estrofas siguientes son idénticas excepto por el número de botellas que va haciéndose menor en uno en cada estrofa, hasta que el último verso dice: No hay más botellas de cerveza en la pared, no hay más botellas de cerveza, no las agarrarás, y no las pasarás, porque no hay más botellas de cerveza en la pared.
>
> Y luego la canción (por fin) termina. Escribe una función recursiva que imprima la letra completa de “99 Botellas de Cerveza.” 2.- Pintando fractales (3,5 puntos) Un fractal es un objeto geométrico cuya estructura básica se repite a diferentes escalas. Los fractales, conocidos por los matemáticos desde principios del siglo XX, llegaron al gran público con el auge de los ordenadores pues permiten generar figuras vistosas utilizando fórmulas matemáticas.
>
> Ejemplo de fractal formado por cuadros La figura que hoy nos planteamos, no obstante, no es de una gran vistosidad. Consiste en un simple cuadrado de longitud l cuyas cuatro esquinas son el centro de otros tantos cuadrados de longitud l/2. Las esquinas de cada uno de ellos, a su vez, son el centro de otros cuatro cuadrados con longitud l/4, y así sucesivamente hasta llegar a cuadrados de longitud 1. La figura se construye de tal forma que las longitudes son siempre enteras, por lo que si empezamos con un cuadrado de longitud, pongamos, 5, los cuadrados siguientes serán de longitud 2.
>
> La imagen muestra la figura generada si empezamos con un cuadrado cuyo lado tiene longitud 10. Los cuadrados en sus esquinas tienen longitud 5, los siguientes tienen longitud 2 para terminar con los cuadrados más pequeños con lados de longitud 1. Se han marcado una sucesión de cuadrados según van disminuyendo de tamaño (hacia arriba y a la derecha) para poner de manifiesto esta reducción y la repetición del patrón.
>
> La pregunta que nos hacemos es la cantidad de tinta que necesitaremos para pintar la figura dada la longitud del cuadrado más grande. O, dicho de otra forma, cuál es la suma de las longitudes de los lados de todos los cuadrados. Programar una función recursiva que, dada la longitud del cuadrado más grande, devuelva la suma de las longitudes de los lados de todos los cuadrados que forman la figura.
>
> Ejemplos: Para l = 1, la suma de las longitudes de los lados es 4 Para l = 3, la suma de las longitudes de los lados es 28 Para l = 5, la suma de las longitudes de los lados es 116
>
> 3.- Triángulo de Pascal (1,5 puntos) a.- (0,5 puntos) En un triángulo de Pascal, como se puede observar en el ejemplo de la siguiente figura, cada elemento es la suma de los dos elementos situados sobre él, excepto el primero y último de cada fila que valen 1. Escribir un método de clase recursivo que devuelva el i-ésimo elemento de la fila f de un triángulo de Pascal; su cabecera será entonces del tipo
>
> ```java
> public static int trianguloPascal(int f, int i)
> ```
>
> b.- (1 punto) Además, escribir una clase Java (método Main) que lea de teclado un número de filas y, usando el método diseñado, imprima formando un triángulo todos los elementos del correspondiente triángulo de Pascal. 4.- Recorriendo cadenas (3 puntos) a.- (2 puntos) Dadas dos posiciones, izq y der, de la cadena de texto, 0≤izq≤der≤v.length-1, escribir un método de clase para sustituir en cierto String todas las mayúsculas por minúsculas y viceversa.
>
> Ejemplos: 1eJeMpLo2 devuelve 1EjEmPlO2 Palabra devuelve pALABRA b.- (1 punto) Escribir un método con la misma funcionalidad que el anterior pero que modifique todas las mayúsculas por minúsculas y viceversa de todo el String.

> **✍️ 📋 Exercici / Qüestionari 3.20 — 14 examen Programacion - Recursividad**
> Examen Programación (14 de febrero de 2017) Nombre: Nota: Ejercicio 1 (1,5 puntos): El Algoritmo de Euclides para el cálculo del máximo común divisor (m.c.d.) de dos números naturales a y b mayores que cero se puede describir de forma recursiva según la siguiente recurrencia
>
> Si el resto de a/b es 0, el m.c.d. es b. En otro caso, el m.c.d. es el m.c.d. de b y el resto de a/b. Implementar el método recursivo en Java con la siguiente cabecera
>
> ```java
> public static int euclidesMCD(int a, int b)
> ```
>
> Ejercicio 2 (3,5 puntos): a.- (2,5 puntos) En un triángulo de Pascal, como se puede observar en el ejemplo de la siguiente figura, cada elemento es la suma de los dos elementos situados sobre él, excepto el primero y último de cada fila que valen 1. Escribir un método de clase recursivo que devuelva el i-ésimo elemento de la fila f de un triángulo de Pascal; su cabecera será entonces del tipo
>
> ```java
> public static int trianguloPascal(int f, int i)
> ```
>
> b.- (1 punto) Además, escribir una clase Java (método Main) que lea de teclado un número de filas y, usando el método diseñado, imprima formando un triángulo todos los elementos del correspondiente triángulo de Pascal. Ejercicio 3 (2,5 puntos): a.- (2 puntos) Dadas dos posiciones, izq y der, del vector, 0≤izq≤der≤v.length-1, escribir un método de clase para sustituir en cierto vector s de caracteres todas las apariciones de la pareja de letras ‘no’ por la pareja de letras ‘si’.
>
> b.- (0,5 puntos) Escribir un método con la misma funcionalidad que el anterior pero que modifique las apariciones de la pareja de letras 'no' por la pareja 'si' en todo el vector. Ejercicio 4 (2,5 puntos): Implementar un método recursivo donde dado un String s, devuelva cuántas veces aparece el carácter ‘a’.
>
> ```java
> public static int cuentaAes(String s)
> ```
>
> > **⚠️ NOTA: no se puede pasar el String a Vector de caractere...**
> > NOTA: no se puede pasar el String a Vector de caracteres.

> **✍️ 📋 Exercici / Qüestionari 3.21 — 16 examen PRG**
> > **✍️ Ejercicio 1: ¿Qué día nací? (2,5 puntos) Nacimiento.java**
> > Ejercicio 1: ¿Qué día nací? (2,5 puntos) Nacimiento.java
>
> - Crea una función que reciba como parámetro una fecha y devuelva el día de la semana correspondiente
>
> (lunes, martes, miércoles, jueves, viernes, sábado o domingo). NOTA: No se puede utilizar ni la sentencia switch case ni if anidados para obtener el día.
>
> - Crea un algoritmo en la función principal (main) que pida al usuario su fecha de nacimiento y devuelva el
>
> día de la semana que nació. Ejercicio 2: ¿Cuantos días faltan? (2,5 puntos) Nochebuena.java Dado un día del año, ¿sabrías decir cuantos días faltan para Nochebuena? Entrada La entrada comenzará con un entero para especificar el número de casos de prueba que vendrá a continuación. Para cada caso de prueba se mostrará una línea en la que aparecerán tres enteros, el primero de ellos será correspondiente al día, el segundo correspondiente al mes y el tercera al año de una fecha válida.
>
> Salida Para cada fecha de la entrada, se mostrarán el número de días completos que faltan hasta el día de Nochebuena. Entrada de ejemplo 21 12 2018 25 12 2019 2 1 2020 Salida de ejemplo NOTA 1: Existen los años bisiestos !! NOTA 2: Es obligatorio utilizar la clase Date.
>
> Ejercicio 3 (2 puntos) Regalo.java Dado un array de enteros v, escribir un método de clase recursivo que
>
> - (1 punto) Dadas dos posiciones, izq y der, del array, 0≤izq≤der≤v.length-1, invierta todos los elementos
>
> del array situados entre dichas posiciones, esto es, al finalizar la ejecución del método el array contendrá en suposición izq el finalizar la ejecución del método el array contendrá en suposición izq elelemento que inicialmente ocupaba la posición der, en su posición izq+1 el elemento que inicialmente ocupaba la posición der-1 y así sucesivamente.
>
> - (1 punto) Determine la posición, si existe, de la primera subsecuencia del array que comprenda, al menos
>
> tres números enteros consecutivos en posiciones consecutivas del array. Ejercicio 4 (3 puntos) Firulete.java ¿Vosotros sabéis lo que es un "firulete"? ¿Y una "virgulilla"? Seguro que sí, que muchos lo sabéis, pero yo no, yo no lo sabía, o si lo supe alguna vez se me había olvidado. Así que por si acaso vosotros tampoco y empecéis a pensar mal... vamos a hablar de estas dos palabras raritas, que no infrecuentes, porque anda que no hay veces al día que nos tropezamos con "firuletes" y "virgulillas", sobre todo los que se dedican a leer y escribir...
>
> Dice el diccionario de la Real Academia Española que firulete significa: firulete. (Del gall. port. *ferolete, por florete).
>
> - m. Am. Mer. Adorno superfluo y de mal gusto. U. m. en pl.
>
> Pues con la definición no obtenemos mucho, pero si nos vamos a su etimología, la famosérrima página Etimologías de Chile (http://etimologias.dechile.net/?firulete) que nunca nos decepciona nos dice: La palabra firulete viene del gallego ferolete (pequeña flor), metátesis de ferolete, florete que viene siendo el diminutivo de flor. Se refiere a adornos En términos de letras, se refiere a las tildes (á, é, í, ó, ú), puntos (i, j), diéresis (ü) y virgulilla (ñ) que colocamos en ciertas letras".
>
> Ahí lo tenemos, los firuletes son las tildes, los puntos, la diéresis (¨) y esa rayita que colocamos encima de la n para decir "ñ", o lo que es lo mismo la virgulilla. Pues bien, hablando con un muy buen profesor, y mejor persona, del IES La Sénia me comentó que sería muy interesante saber si una palabra es creciente pero eliminando los caracteres que contienen firuletes.
>
> Para él, una palabra es creciente si las letras aparecen ordenadas respetando el orden alfabético de la a-z. abel, SI es creciente caïn, NO es creciente
>
> - Diseña una función recursiva que dada una cadena de texto, devuelva una cadena de texto eliminando
>
> todos los caracteres que tengan firuletes.
>
> - Diseña una función recursiva que dada una cadena de texto, devuelva si la cadena es creciente o no.
> - En la función principal (main), realiza un algoritmo que pida al usuario una cadena de texto y devuelva si
>
> la cadena es creciente sin firuletes o no.

> **✍️ 📋 Exercici / Qüestionari 3.22 — 16 examen PRG - grupo A**
> 1.- Recursividad (5 puntos) Firulete.java ¿Vosotros sabéis lo que es un "firulete"? ¿Y una "virgulilla"? Seguro que sí, que muchos lo sabéis, pero yo no, yo no lo sabía, o si lo supe alguna vez se me había olvidado. Así que por si acaso vosotros tampoco y empecéis a pensar mal... vamos a hablar de estas dos palabras raritas, que no infrecuentes, porque anda que no hay veces al día que nos tropezamos con "firuletes" y "virgulillas", sobre todo los que se dedican a leer y escribir...
>
> Dice el diccionario de la Real Academia Española que firulete significa: firulete. (Del gall. port. *ferolete, por florete).
>
> - m. Am. Mer. Adorno superfluo y de mal gusto. U. m. en pl.
>
> Pues con la definición no obtenemos mucho, pero si nos vamos a su etimología, la famosérrima página Etimologías de Chile (http://etimologias.dechile.net/?firulete) que nunca nos decepciona nos dice: La palabra firulete viene del gallego ferolete (pequeña flor), metátesis de ferolete, florete que viene siendo el diminutivo de flor. Se refiere a adornos En términos de letras, se refiere a las tildes (á, é, í, ó, ú), puntos (i, j), diéresis (ü) y virgulilla (ñ) que colocamos en ciertas letras".
>
> Ahí lo tenemos, los firuletes son las tildes, los puntos, la diéresis (¨) y esa rayita que colocamos encima de la n para decir "ñ", o lo que es lo mismo la virgulilla. Pues bien, hablando con un muy buen profesor, y mejor persona, del IES La Sénia me comentó que sería muy interesante saber si una palabra es creciente pero eliminando los caracteres que contienen firuletes.
>
> Para él, una palabra es creciente si las letras aparecen ordenadas respetando el orden alfabético de la a-z. abel, SI es creciente caïn, NO es creciente
>
> - (2 puntos) Diseña una función recursiva que dada una cadena de texto, devuelva una cadena de texto
>
> eliminando todos los caracteres que tengan firuletes.
>
> - (2 puntos) Diseña una función recursiva que dada una cadena de texto, devuelva si la cadena es
>
> creciente o no.
>
> - (1 punto) En la función principal (main), realiza un algoritmo que pida al usuario una cadena de texto y
>
> devuelva si la cadena es creciente sin firuletes o no.
>
> 2.- Estructuras dinámicas (5 puntos) Problema521.java ¿Podemos empezar? Siempre que hay reunión de vecinos en el portal, tenemos el mismo problema. Para poder empezar la reunión tiene que haber cuórum, lo que significa que tiene que estar presente una persona de, al menos, la mitad de las viviendas. Para saber si se ha alcanzado, no basta con contar cuántos somos, porque de algunas viviendas bajan a la reunión más de una persona, de modo que hay que apuntar de donde es cada uno de los asistentes para echar la cuenta.
>
> El secretario de la comunidad es el responsable de decidir si se puede o no empezar, pero suele hacerse un poco de lío con la lista y se tiene la sospecha de que no siempre lo hace bien. Entrada El programa recibirá, por la entrada estándar, varios casos de prueba. Cada uno comienza con tres números, 1 ≤ P ≤ 30, 1 ≤ L ≤ 26 y 1 ≤ A ≤ 1.000 indicando respectivamente el número de pisos del portal, el número de letras (viviendas) por piso, y el número de asistentes a la reunión.
>
> A continuación aparece la vivienda de cada uno de los A asistentes. Una vivienda se especifica con el número de piso (entre 1 y P) y la letra, separados por un espacio. Se utilizan únicamente las letras del alfabeto inglés en mayúscula desde la 'A' hasta la última en función del valor de L.
>
> La entrada termina con tres ceros. Salida Por cada caso de prueba el programa escribirá EMPEZAMOS si hay al menos una persona de la mitad de las viviendas, y ESPERAMOS en otro caso. Si el número de viviendas es impar, debe utilizarse la mitad por exceso. Entrada de ejemplo 4 1 3 1 A 2 A 1 A 1 5 3 1 E 1 E 1 C 0 0 0 Salida de ejemplo
>
> EMPEZAMOS ESPERAMOS

> **✍️ 📋 Exercici / Qüestionari 3.23 — 16 examen PRG - grupo B**
> 1.- Recursividad (1,5 puntos) Calcular C (n, k) siendo: C (n, 0) = C (n, n) = 1 si n >= 0 C (n, k) = C (n-1, k) + C (n-1, k-1) si n > k > 0 2.- Recursividad (2,5 puntos) a.- (1,5 puntos) Dadas dos posiciones, izq y der, de la cadena de texto, 0≤izq≤der≤v.length-1, escribir un método de clase para sustituir en cierto String todas las mayúsculas por minúsculas y viceversa.
>
> Ejemplos: 1eJeMpLo2 devuelve 1EjEmPlO2 Palabra devuelve pALABRA b.- (0,5 puntos) Escribir un método con la misma funcionalidad que el anterior pero que modifique todas las mayúsculas por minúsculas y viceversa de todo el String. 3.- Recursividad y colecciones dinámicas (4 puntos) Escribir un método recursivo para invertir una pila.
>
> 4.- Triángulo recursivo (2 puntos) Se tiene un triangulo hecho de bloques. En la cima del triangulo hay 1 bloque, la siguiente línea tiene 2 bloques, la que sigue tiene 3 bloques y así sucesivamente. Calcule de forma recursiva el número total de bloques que se deben utilizar para completar el triangulo de acuerdo al numero de líneas indicadas.
>
> > **💡 Apunt Tècnic**
> > EJEMPLO: Triangulo( 0 ) -> 0 Triangulo( 1 ) -> 1 Triangulo( 2 ) -> 3 Triangulo( 4 ) -> 10 Etc….

> **✍️ 📋 Exercici / Qüestionari 3.24 — 03 - Examen PRG**
> C
>
> 1.- No tengo 40 años, teng
>
> ¡¡Tu profesor de Programación “la crisis de los 40” y por pri alumnos.
>
> Aunque podría programar-lo él así que ha decidido que sean su
>
> El profesor no te va a decir exa debes ser tú el que indique las d
>
> - Realiza una función en
>
> entre las dos fechas pasa
>
> - En la función principal
>
> de tu profesor en format función del apartado a mostrando la diferenci profesor.
>
> 2.- ¿Cuántos 4 tiene un nú
>
> La obsesión con el 40 hace qu número 4 en cualquier número,
>
> Realiza una función recursiva número 4 en dicho número.
>
> Por ejemplo
>
> devuelve 1 44.541 devuelve 3
>
> devuelve 0 45.463 devuelve 2
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: 46001199@gva.es Examen Programación ClaseDate + Recursividad + ColeccionesDinámicas go 18 con 22 de experiencia n cumple a finales de este año 40 años!! Está imera vez se pregunta cuantos años, meses l mismo, no se atreve a ejecutar el algoritmo us alumnos quien lo programen y vean la difer actamente el día en el que cambiará de década dos fechas.
>
> n Java que dadas 2 fechas (tipo Date), devue adas como parámetros. (main), realiza un programa que le pida al us to dd-MM-aaaa, le pase como parámetros las
>
> - para que realice el cálculo e imprime
>
> ia en años, meses y días, entre tu fecha úmero? ue tu profesor se fije siempre en el número tenga la cantidad de cifras que tenga. a que dado un número n, devuelva el númer
>
> 3 de febrero de 2022 en lo que se conoce como y días tiene más que sus para no ver los resultados, rencia. a y pasará a los 40, así que elva la diferencia en días suario 2 fechas, la tuya y la dos fechas (tipo Date) a la el resultado por pantalla de nacimiento y la de tu o de veces que aparece el ro de veces que aparece el
>
> 3.- ¿Cuántos equipos hay
>
> Entrada
>
> Aparecerán 7 partidos por jorna el nombre del primer equipo, el de goles marcados. Todos los c tres guiones “---“.
>
> Se deberá leer jornadas mientra
>
> Salida
>
> Imprime la lista de los equipos
>
> Entrada de ejemplo
>
> BETIS 1 LEVANTE 0 CÁDIZ 3 VILLARREAL 2 MALLORCA 0 SEVILLA 5 CELTA 3 MADRID 0 BARCELONA 1 VALENCIA 4 GRANADA 2 OSASUNA 2 ELCHE 0 GETAFE 0
>
> Salida de ejemplo
>
> BARCELONA BETIS CÁDIZ CELTA ELCHE GETAFE GRANADA LEVANTE MADRID MALLORCA OSASUNA SEVILLA VALENCIA VILLARREAL
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: 46001199@gva.es y en la liga? ada. Cada partido aparecerá en una única líne l número de goles marcados, el nombre del se campos aparecerán separados por un espacio as queden datos por leer. participantes en la liga ordenados de la A a la
>
> ea. Cada partido contendrá egundo equipo y el número . La jornada terminará con a Z
>
> 4.- Clasificación general
>
> En función del resultado al final d cero para el perdedor y un punto una clasificación en función de los Si dos equipos terminaran en i enfrentamiento directo entre aque mejor diferencia entre goles anota goles.
>
> Estos criterios de desempate los d orden en el que se mostrarán los eq
>
> Para ordenar el Map, disponéis de
>
> Entrada
>
> Los datos de entrada son los mism
>
> Salida
>
> Se mostrará la clasificación compl
>
> La clasificación se mostrará en do número total de puntos conseguido
>
> Se valorará que la salida sea lo má
>
> Entrada de ejemplo
>
> La misma que en el ejercicio 3 de
>
> Salida de ejemplo
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: 46001199@gva.es de cada partido, los equipos obtienen una serie de para cada equipo en caso de empate. Al término s puntos acumulados a lo largo del campeonato. igualdad de puntos, el primer criterio de des ellos equipos que terminen el torneo en igualdad ados y recibidos, si el empate persiste, ganará el eq dejamos para más adelante, para nosotros, en cas quipos empatados.
>
> una función que ordena por los valores (no por c mos que en el ejercicio 3 de este mismo examen. leta al final de todos los partidos de todas las jorn os columnas: la primera columna con el nombre os durante todos los partidos de todas las jornadas ás parecida a la salida de ejemplo.
>
> este mismo examen.
>
> e puntos: tres para el ganador, o de la temporada se elabora sempate es el resultado del de puntos. Segundo criterio: quipo que haya anotados más so de empate no importará el clave). nadas de los datos de entrada. y la segunda columna con el s.

> **✍️ 📋 Exercici / Qüestionari 3.25 — 03 examen Programacion**
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 email
>
> Examen Programación Estructuras Dinámicas & Recursividad 3 de febrero de 2023 Ejercicio 1 (2 puntos) ¿Qué imprime este programa por consola?
>
> ```java
> public static void main(String[] args) {
> ```
>
> ```java
> int[][] a = {{2,4,4},{6,6,9},{8,10,12}};
> ```
>
> ```java
> funcion(a, 1, 0);
> ```
>
> ```java
> System.out.println("\n-----------");
> ```
>
> ```java
> funcion(a, 0, 0);
> }
> ```
>
> ```java
> public static void funcion(int[][] m, int x, int y) {
> ```
>
> ```java
> if (y < m[0].length) {
> ```
>
> ```java
> System.out.printf( "%3d", m[x][y] );
> ```
>
> ```java
> funcion(m, x, y+1);
> ```
>
> ```java
> if ( (x+1 < m.length) && (y == m[0].length-1)) {
> ```
>
> ```java
> System.out.println();
> ```
>
> ```java
> funcion(m, x+1, 0);
> ```
>
> }
>
> } }
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 email
>
> Ejercicio 2 (2,5 puntos) Los invitados están al llegar y la mesa sigue sin poner. En la mesa de la cocina, tus padres han preparado ya todo lo que hay que trasladar: pilas de platos, cubiertos y copas. Por delante, un montón de paseos de la cocina al salón y muy poco tiempo.
>
> Como las prisas en este caso no son buenas (que haya que pararlo todo para recoger del pasillo los pedazos de una copa rota puede ser desastroso) la única solución es paralelizar el trabajo. Tu hermano pequeño es el candidato perfecto para ayudarte.
>
> Empezaréis por llevar todas las copas. Como son delicadas, tu hermano las llevará de una en una. Y para que se sienta "mayor" le has dicho que tú harás lo mismo: las llevarás también de una en una a no ser que el número de copas que queden en la cocina sea par. En ese caso en lugar de una, llevarás dos.
>
> Si el primer paseo lo da tu hermano y os vais alternando los viajes, ¿cuántos necesitaréis para llevar todas las copas?
>
> Crea una función recursiva que dado el número de copas (copas > 1) que hay en la cocina, devuelva el número de paseos que hay que dar en total, teniendo en cuenta que el primer paseo lo da el hermano pequeño.
>
> La cabecera de la función de ser la siguiente
>
> ```java
> public static int calcularPaseos(int copas)
> ```
>
> Ejemplos
>
> devuelve 1
>
> devuelve 2
>
> devuelve 16
>
> Ejercicio 3 (1 punto) Dado un array de enteros v, escribir un método de clase recursivo que determine cuántos ceros consecutivos hay al final del array.
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 email
>
> Ejercicio 4 (2,5 puntos) Realiza una función en Java que dada una frase, devuelva cuántas sílabas distintas contiene. La frase contendrá letras del alfabeto inglés, en mayúsculas y minúsculas, y espacios. Las palabras están separadas por un único espacio. Una sílaba es una consonante seguida de una vocal, seguida, opcionalmente, de otra consonante. Las palabras pueden empezar en vocal, que se considerará una sílaba en sí misma. La letra ‘y’ no se considera vocal.
>
> Ejemplos: Mi mama me mima
>
> devuelve 3 Ramses amaba a Nefertari
>
> devuelve 9 Egipto depende del Nilo para beber devuelve 12
>
> Ejercicio 5 (2 puntos) Imagina que estás en clase de 1ero de primaria. La profesora necesita realizar una lista con las verduras que menos les gusta a sus alumnos y les va a ir preguntando a cada uno de ellos. Realiza un programa en Java que pida nombres de verduras hasta escribir la palabra “tomate”, todo el mundo sabe que el tomate es una fruta.
>
> Finalmente, el programa imprimirá por consola la lista de verduras, ordenadas alfabéticamente, con el número de alumnos a los que no les gusta esa verdura.

> **✍️ 📋 Exercici / Qüestionari 3.26 — 27 examen Programacion - POO**
> Examen Programación (27 de febrero de 2019) Nombre: Nota: Menú del dia 1.- Crea un proyecto nuevo llamado ExamenPOO. 2.- Crea 4 paquetes distintos: excepciones, dominio, interfaces y principal. 3.- Descarga la clase Principal.java y añádela al paquete principal (esta clase NO puede ser modificada).
>
> 4.- En el paquete interfaces crea la siguiente interfaz: • Cocinable 4.1.- En la interfaz Cocinable define las constantes: CRUDA = 0, FRITA = 1, COCIDA = 2 y ASADA = 3. 4.2.- En la interfaz Cocinable define los métodos: freir, cocer y asar. (sin parámetros y no devuelven nada).
>
> 5.- En el paquete excepciones crea las siguientes excepciones: • MenuIncompletoException • NoCocinadoException 5.1.- Para cada una de las excepciones crea un método que devuelva un mensaje de error.
>
> ```java
> public String mensajeError() {...}
> ```
>
> 6.- En el paquete dominio crea las siguientes clases: • Menu. • Ingrediente (clase abstracta). • Comida (clase abstracta), hereda de Ingrediente. • Bebida (clase abstracta), hereda de Ingrediente. • Hamburguesa, hereda de Comida. • Patata, hereda de Comida e implementa la interfaz Cocinable.
>
> • Agua, hereda de Bebida. • Cola, hereda de Bebida. 6.1.- Clase Menu Atributos de clase: numeroMenus (público) Atributos de instancia (privados): numeroIngredientes (entero) listaIngredientes (ArrayList de Ingrediente) Crear un Constructor sin parámetros con la funcionalidad correspondiente.
>
> Métodos: Añadir los métodos necesarios para que compile y funcione la clase Principal.java. Añadir también el siguiente método que NO puede ser modificado
>
> ```java
> public void imprimirMenu() {
> for (int i = 0; i < this.listaIngredientes.size(); i++) {
> System.out.println( this.listaIngredientes.get(i) );
> }
> }
> ```
>
> Consideraciones: El método anyadirComida(), propaga la excepción NoCocinadoException si el ingrediente a insertar no está cocinado. El método obtenerPrecioMenu(), propaga la excepción MenuIncompletoException si el menú, o bien, no tiene ningún ingrediente que sea comida, o bien, no tiene ningún ingrediente que sea bebida.
>
> 6.2.- Clase Ingrediente Atributos de instancia (privados): nombre (String), el nombre del ingrediente concreto (hamburguesa, agua, …). tipoIngrediente (String), si es comida o bebida. Getters y Setters para los 2 atributos de instancia Añadir el siguiente método abstracto
>
> //Métodos abstractos
>
> ```java
> public abstract double obtenerPrecio();
> ```
>
> Añadir los métodos necesarios para que compile y funcione la clase Principal.java. 6.3.- Clase Bebida Atributos de instancia (privados): refrigerada (boolean) Crear un constructor sin parámetros con la funcionalidad correspondiente. Añadir los métodos necesarios para que compile y funcione la clase Principal.java.
>
> Consideraciones: Cuando se crea una bebida, por defecto, NO está refrigerada. El precio de TODAS las bebidas es: 1€ si NO está refrigerada. 1,50€ SI está refrigerada. 6.4.- Clase Agua Crear un constructor sin parámetros con la funcionalidad correspondiente. 6.5.- Clase Cola Crear un constructor sin parámetros con la funcionalidad correspondiente.
>
> 6.6.- Clase Comida Atributos de instancia (protegidos): cocinado (boolean) Crear un constructor sin parámetros con la funcionalidad correspondiente. Consideraciones: Cuando se crea una comida, por defecto, NO está cocinada.
>
> 6.7.- Clase Hamburguesa Atributos de instancia (privados): fechaCaducidad (Date) Crear un constructor que recibe la fechaCaducidad como un string y crea la funcionalidad correspondiente. Añadir los métodos necesarios para que compile y funcione la clase Principal.java.
>
> Consideraciones: El precio de una hamburguesa es de 3,50€. Si falta 1 dia para que caduque, se le hará un descuento del 50%. Si faltan 2 dias para que caduque, se le hará un descuento del 40%. Si faltan 3 dias para que caduque, se le hará un descuento del 30%. Si faltan 4 dias para que caduque, se le hará un descuento del 20%.
>
> 6.8.- Clase Patata Atributos de instancia (privados): estado (entero), podrá ser cruda, frita, cocida o asada. Crear un constructor sin parámetros con la funcionalidad correspondiente. Añadir los métodos necesarios para que compile y funcione la clase Principal.java.
>
> Consideraciones: El precio de las patatas fritas es de 1,10€. El precio de la patata cocida es de 0,80€. El precio de la patata asada es de 0,90€.
>
> 7.- El resultado de ejecutar la clase Principal.java debe ser lo más parecido posible a esta impresión de pantalla

> **✍️ 📋 Exercici / Qüestionari 3.27 — 08 - examen POO**
> Jose Chamorro Molina 1.- Crea un proyecto nuevo llamado Examen 2.- Crea 3 paquetes distintos: dominio, interfa 3.- Descarga la clase Principal.java y añádela 4.- En el paquete interfaces crea la siguiente
>
> - Remasterizable
>
> 4.1.- En la interfaz Remasterizable define las
>
> SIN_DEFECTOS = 33
>
> CON_DEFECTOS = 36
>
> BUENA_CALIDAD = 77
>
> MALA_CALIDAD = 79 4.2.- En la interfaz Remasterizable define los 5.- En el paquete dominio crea las siguientes
>
> - Canción, implementa la interfaz Re
>
> - Disco.
>
> - Rockero (clase abstracta).
>
> - RockeroAlternativo, hereda de Roc
>
> - RockeroClasico, hereda de Rocker
>
> 5.1.- Clase Canción
>
> Atributos de instancia (privados)
>
> - titulo (String), duracion (in
>
> Constructor
>
> - Crear un Constructor con
>
> canción tiene defectos y mala calidad.
>
> Métodos
>
> - estaEditada, devuelve true
>
> - sobreescribir los métodos
>
> 6.2.- Clase Disco
>
> Atributos de instancia (privados)
>
> - titulo (String), autor (Rock
>
> Constructor
>
> - Crear un Constructor con
>
> Métodos
>
> - anyadirCancion, inserta la canción
>
> - estaCompleto, devuelve true si el d
>
> - imprimirDisco, imprime el título del
>
> implementar la funcionalidad correspondiente Programación 1ºDAW
>
> nPOO. aces y principal. a al paquete principal (esta clase NO puede ser modific interfaz: constantes: métodos: eliminarDefectos y mejorarCalidad (sin pará s clases: emasterizable. ckero. ro. t), defectos (int), calidad (int) n los parámetros título y duración con la funcionalida e si la canción no tiene defectos y tiene buena calidad necesarios con la funcionalidad correspondiente.
>
> ero), listaCanciones (ArrayList de Cancion) los parámetros título y autor con la funcionalidad corre a la lista de canciones
>
> disco tiene al menos 4 canciones, false en caso contra disco, el nombre del autor y todas las canciones del d e para que se imprima como en la imagen del final del cada). ámetros y no devuelven nada). ad correspondiente, al crear una , false en caso contrario. espondiente.
>
> rio. disco, hay que copiarlo tal cual e examen.
>
> Jose Chamorro Molina
>
> ```java
> public void imprimirDisco() {
> ```
>
> ```java
> System.out.println( "-
> ```
>
> ```java
> System.out.println( th
> ```
>
> ```java
> System.out.println( "-
> ```
>
> ```java
> System.out.println( th
> ```
>
> for (Cancion cancion
>
> System.out.prin
>
> }
>
> ```java
> System.out.println();
> ```
>
> }
>
> 6.3.- Clase Rockero
>
> Atributos de clase (privado)
>
> - numRockeros
>
> Atributos de instancia (protegido)
>
> - nombre (String)
>
> Constructor
>
> - Constructor con el paráme
>
> Propiedad (método de clase)
>
> - De sólo lectura para el atr
>
> 6.4.- Clase RockeroAlternativo
>
> Implementar la funcionalidad corresp 6.5.- Clase RockeroClasico
>
> Implementar la funcionalidad corresp 7.- El resultado de ejecutar la clase Principal.j
>
> Programación 1ºDAW
>
> ```java
> is.titulo );
> ```
>
> ```java
> is.autor );
>  listaCanciones) {
> ntln( cancion );
> ```
>
> etro del atributo de instancia y la funcionalidad corresp ributo de clase. pondiente para que el programa funcione correctamen pondiente para que el programa funcione correctamen .java debe ser lo más parecido posible a esta impresió
>
> ```java
> ----" );
> ----" );
> ```
>
> pondiente. nte. nte. n de pantalla

> **✍️ 📋 Exercici / Qüestionari 3.28 — 07 examen PRG - POO**
> El Restaurante de Entorno Acabas de realizar un diagrama de cla
>
> - Crea un proyecto nuevo llamado Res
> - Crea 4 paquetes distintos: dominio,
> - Descarga la clase Principal.java y añ
> - En el package dominio crea las sigui
> - Restaurante, Cliente, Cliente_
>
> Camarero_fijo
>
> - Implementa en Java las relaciones d
>
> AULES para verla con mayor calidad).
>
> - El resto de relaciones del diagrama
>
> Restaurante y las clases Cliente y Emp
>
> - En la clase Restaurante se debe
> - En el package enumerados crea los
>
> - TipoCocina: asiática, francesa, m
>
> - Zona: cafetería, comedor, terraz
> - Para todas las clases del diagrama, c
> - Todos los atributos deben ser p
> - Los tipos de datos de los atrib
>
> Camarero que será de tipo Zona (enu (enumerado).
>
> - Crea los constructores, en todas las
>
> clase. Fíjate en la clase Principal para
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: Examen Programación Programación Orientada a Objetos os ases en UML de un restaurante, ahora llega el momen stauranteEDE. interfaces, enumerados y principal. ádela al package principal (esta clase NO puede ser m entes clases
>
> _del_dia, Cliente_abonado, Empleado, Camarero, C de herencia según el siguiente diagrama de clases (pu Además, debes indicar como abstractas las clases qu a de clases no se implementan, únicamente la relaci pleado, para ello: n añadir los atributos privados listaClientes y listaEmp siguientes enumerados con los valores indicados
>
> mexicana, vanguardista y vegana za y zonaVip crea los atributos correspondientes (los métodos NO) rivados, excepto los de aquellas clases que sean abstr butos son los indicados en el diagrama UML, excepto umerado) y el atributo “tipo_cocina” de la clase Cocin s clases que consideres, con los que se pueda inicial que compile la creación de objetos con los constructo
>
> 7 de marzo de 2022 nto de implementarlo en Java: modificada). Cocinero, Camarero_eventual y edes descargar la imagen desde e consideres.
>
> ón de agregación entre la clase pleados de tipo ArrayList. . ractas, que deben ser protected. o el atributo “zona” de la clase ero que será de tipo TipoCocina izar todos los atributos de cada ores que acabas de programar.
>
> - En el package interfaces crea la inte
> - En la interfaz Inspeccionable define
>
> MIN_CLIENTES = 3
>
> MAX_CLIENTES = 100
>
> MIN_EMPLEADOS = 4
>
> MAX_EMPLEADOS = 25
>
> - En la interfaz Inspeccionable define
> - numeroClientes() y numeroEm
>
> actuales en el Restaurante y con el nú
>
> - inspeccionFavorable(), sin pará
>
> [MIN_CLIENTES, MAX_CLIENTES] y el
>
> - La clase Restaurante implementa la
>
> Métodos
>
> - En la clase Restaurante, crea el méto
> - En la clase Restaurante, crea un mé
>
> de clientes del Restaurante
>
> - En la clase Restaurante, crea un mét
>
> la lista de empleados del Restaurante
>
> - En la clase Camarero_fijo crea un m
>
> partir de la fecha de incorporación. E
>
> - En la clase Restaurante crea un mét
>
> método devuelve un HashMap<Empl
>
> - Sobreescribir el método toString() ú
>
> Resultado
>
> - El resultado de ejecutar el programa
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: erfaz Inspeccionable las siguientes constantes de tipo entero y públicas: los siguientes métodos abstractos: pleados(), sin parámetros y devuelven un numero en úmero de empleados actuales respectivamente.
>
> ámetros que devuelve TRUE en caso de que el núme número de empleados esté en el rango [MIN_EMPLE interfaz Inspeccionable. odo get para el atributo listaClientes con el nombre “g étodo público “recibirCliente” que inserta un cliente todo público “contratarEmpleado” que inserta un em e método público sin parámetros que calcule los años l método devolverá el cálculo y se llamara getExperien odo que asigne a todos los empleados un salario rand eado, Integer>. El nombre del método debe ser “salar nicamente para las clases que sea necesario.
>
> a debe ser lo más parecido a la siguiente imagen
>
> ntero con el número de clientes ero de clientes esté en el rango ADOS, MAX_EMPLEADOS] getListaClientes”. pasado por parámetro a la lista pleado pasado por parámetro a de experiencia del camarero a ncia(). dom entre 1.000€ y 2.500€. Este riosRandom”.
>
> 1.- ¿Qué es la programación orientad
>
> 2.- ¿Qué es la abstracción en POO?
>
> 3.- ¿Qué es una clase?
>
> 4.- ¿Qué es un objeto?
>
> 5.- ¿Para qué se utiliza la palabra rese
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: a a objetos (POO)? ervada this?
>
> 6.- Diferencia entre métodos de insta
>
> 7.- ¿Qué es el polimorfismo en POO?
>
> 8.- ¿Qué es el encapsulamiento?
>
> 9.- ¿Qué es un constructor?
>
> 10.- ¿Qué es la herencia en POO? ¿Qu
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: ncia y métodos de clase. ¿Cómo se implementa en Ja ¿Con que técnica se consigue en Java? ué ventajas tiene? ¿Cómo se implementa en Java?
>
> va?
>
> Autoevaluación Teoria 1.- ¿Qué es la programación orientad 2.- ¿Qué es la abstracción en POO? 3.- ¿Qué es una clase? 4.- ¿Qué es un objeto? 5.- ¿Para qué se utiliza la palabra rese 6.- Diferencia entre métodos de insta 7.- ¿Qué es el polimorfismo en POO? 8.- ¿Qué es el encapsulamiento?
>
> 9.- ¿Qué es un constructor? 10.- ¿Qué es la herencia en POO? ¿Qu Práctica Compila la clase Principal (-0,2 punto Utilización de super() en los construct Clases abstractas (Cliente, Empleado recibirCliente() contratarEmpleado() getExperiencia() salariosRandom() Se imprime igual que en el enunciado
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: a a objetos (POO)? ervada this? ncia y métodos de clase. ¿Cómo se implementa en Ja ¿Con que técnica se consigue en Java? ué ventajas tiene? ¿Cómo se implementa en Java? s por cada línea que no compila) tores y Camarero) (-0,2 puntos por cada clase) o
>
> 2 puntos
>
> 0,2 puntos
>
> 0,2 puntos
>
> 0,2 puntos
>
> 0,2 puntos
>
> 0,2 puntos
>
> va? 0,2 puntos
>
> 0,2 puntos
>
> 0,2 puntos
>
> 0,2 puntos
>
> 0,2 puntos
>
> 8 puntos
>
> 5 puntos
>
> 0,5 puntos
>
> 0,6 puntos
>
> 0,2 puntos
>
> 0,2 puntos
>
> 0,5 puntos
>
> 0,5 puntos
>
> 0,5 puntos

> **✍️ 📋 Exercici / Qüestionari 3.29 — Examen EDE Class Diagram**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 3.30 — 07 Examen de Programación - POO**
> 46001199 Parc Salvador Castell, 16 46680 - Algemesí Teléfono: 96 245 78 20 Correo electrónico: 46001199 @edu.gva.es Examen de Programación 2n.Trimestre DAW Semipresencial 7 de Marzo de 2023 Instrucciones: Todos los ejercicios se tienen que resolver según los conceptos impartidos durante todo el curso.
>
> Criterios de calificación: ✔ El valor de cada ejercicio está indicado (sobre 10). ✔ Los criterios de calificación se indicarán en la rúbrica de corrección. Nomenclaturas ficheros y proyecto: Nomenclatura: ✔ Cada ejercicio es un proyecto en Eclipse.  El nombre del proyecto está indicado en cada ejercicio.
>
> Entrega: ✔ Cada proyecto se debe exportar en Eclipse. ✔ Se entregarán tantos proyectos como ejercicios tenga el examen. ✔ Los ficheros exportados (.zip) se entregarán a través de la plataforma Aules cuando indique el profesor. Prólogo del examen ¡Bienvenidos al examen de programación de segundo trimestre!
>
> En este examen encontraréis dos ejercicios. En el primero vamos a tratar de simular la gestión de un panel de luces led y en el segundo una tienda en línea. Leed con atención el enunciado de cada ejercicio para resolver con éxito. ¡Mucha suerte!
>
> > **✍️ Ejercicio 1. (4 puntos) Introducción En este ejercicio vamos a cr**
> > Ejercicio 1. (4 puntos) Introducción En este ejercicio vamos a crear un programa para gestionar el panel de luces led para controlar sistemas que necesiten saber el estado de cualquier elemento. Ejemplos de aplicaciones: parking de vehículos, habitaciones ocupadas en hoteles, etc. Haz primero lo siguientes pasos
>
> • Descarga el fichero TableroTest.java que te ofrece el profesor. ¡NO SE PUEDE MODIFICAR! • Crea un proyecto en Eclipse llamado Ejercicio1 y añade a éste el fichero descargado. Descripción del proyecto En resumen, debes organizar el proyecto en paquetes e implementar la clase
>
> TableroLeds
>
> para que el código de la clase TableroTest obtenga la salida lógica por pantalla que se detalla en la siguiente página. A continuación, se explican los detalles de la implementación: Paquetes: • tunombre.tableros, donde estará la clase TableroLeds • tunombre.test, donde estará la clase TableroTest Clases
>
> • TableroTest, que contiene el código para probar la clase TableroLeds. ¡NO SE PUEDE MODIFICAR! • TableroLeds, que debes crear y completar según la siguiente descripción: Atributos: ◦ Un atributo para guardar el tamaño de las filas de leds que tendrá el tablero. ◦ Un atributo para guardar el tamaño de las columnas de leds que tendrá el tablero.
>
> ◦ Un atributo de tipo matriz de caracteres almacenar el estado de cada led: ‘ . ‘ (punto) para apagado, ‘ * ‘ (asterisco) para encendido.
>
> Métodos: ◦ Constructor con parámetros: a partir de el número de filas y columnas creará el tablero con todos los leds apagados. ◦ mostrar(): mostrará el tablero de leds en forma de matriz. ◦ encenderLed(fila, columna): actualizará el estado de un led a encedido. La posición del led la determina la fila y columna de entrada. Comprobar que la fila y columna indicadas están dentro del tablero (ver salida).
>
> ◦ apagarLed(fila, columna): actualizará el estado de un led a apagado. La posición del led la determina la fila y columna de entrada. Comprobar que la fila y columna indicadas están dentro del tablero (ver salida). ◦ Los modificadores de acceso deben ser los más adecuados para cada elemento de la estructura de clases (clases, atributos, métodos) ◦ Debes aplicar las técnicas más adecuadas de la programación orientada a objetos y la modularidad.
>
> Salida por pantalla Una vez completada correctamente la clase TableroLeds el programa, según el código que implementa la clase TableroTest, debería mostrar por pantalla lo siguiente: Mostrando tablero de leds: . . . . . . . . . => Encendiendo led [1, 1]. => Encendiendo led [3, 3].
>
> Mostrando tablero de leds
>
> - . .
>
> . . . . . * => Encendiendo led [4, 4]... Error: El led no está dentro del tablero. => Apagando led [0, 0]... Error: El led no está dentro del tablero. => Apagando led [1, 1]... Mostrando tablero de leds: . . . . . . . . *
>
> > **✍️ Ejercicio 2. (6 puntos) Introducción En este ejercicio vamos a cr**
> > Ejercicio 2. (6 puntos) Introducción En este ejercicio vamos a crear un programa para la gestión de una tienda de libros. Haz primero lo siguientes pasos: • Descarga el fichero TiendaTest.java que te ofrece el profesor. ¡NO SE PUEDE MODIFICAR! • Crea un proyecto en Eclipse llamado Ejercicio2 y añade a éste el fichero descargado.
>
> Descripción del proyecto En resumen, debes organizar el proyecto en paquetes e implementar las clases necesarias para que el código de la clase TiendaTest obtenga la salida lógica por pantalla que se detalla en la siguiente página. A partir del código fuente de la clase TiendaTest y de la salida por pantalla se deducen las principales clases, sus relaciones, métodos, constructores y atributos que se deben implementar correctamente para que funcione el programa.
>
> No obstante, como soporte a continuación se explican algunos detalles de la implementación: Paquetes: Debes organizar las diferentes clases que hayas implementado en los paquetes que creas lógicamente necesarios. Clases, atributos y métodos: • La clase Libro contiene, entre otros, un método abstracto llamado comprar.
>
> • La clase LibroElectronico implementa una interfaz. • Los métodos comprar y previsualizar sólo muestra información textual de la acción realizada (ver salida por pantalla). • Los tipos de libros enumerados son los que se pueden ver en el código. • La clase Cesta implementa una estructura dinámica y contiene métodos para gestionar dicha estructura.
>
> • El método verCesta muestra el contenido de la cesta y el precio total de los libros que hay en la cesta. • El método pagarCesta compra todos los libros que contiene la cesta, muestra el precio total pagado y finalmente vacía la cesta. • Sobre el método validarISBN
>
> ◦
>
> ```java
> El formato correcto del ISBN (simplificado) es: 3 dígitos + guión + 4 dígitos. Por ejemplo: “123-1234” es correcto;
> ```
>
> “1234-123” es incorrecto; “123123” es incorrecto. Se debe poder validar si el ISBN de un libro es correcto. • Del resto de clases: sus relaciones, constructores, métodos y atributos se deducen de la clase TiendaTest • Otras implementaciones a tener en cuenta: ◦ Debes implementar los getters y setters
>
> necesarios
>
> para que el programa funcione, en cada clase. ◦ Puede que necesites sobrescribir algún método de la clase clase Object. ◦ Debes implementar el método necesario para que se puedan ordenar correctamente la lista de libros a partir de su precio. ◦ Los modificadores de acceso deben ser los más adecuados para cada elemento de la estructura de clases (clases, atributos, métodos) ◦ Debes aplicar las técnicas más adecuadas de la programación orientada a objetos y la modularidad.
>
> Salida por pantalla Una vez completadas la clases necesarios para el proyecto el programa, según el código que implementa la clase TiendaTest, debería mostrar por pantalla lo siguiente: *** VALIDAR ISBN *** 9728-1001: formato isbn incorrecto. *** VIENDO INFORMACIÓN DEL LIBRO *** isbn=978-1001, titulo=Criptonomicón, autor=Neal Stephenson, categoria=CIENCIAFICCION, precio=8.0, peso=200 isbn=978-1002, titulo=Cuento de Hadas, autor=Stephen King, categoria=TERROR, precio=5.0, kilobytes=3000 *** COMPRANDO DIRECTAMENTE EL LIBRO *** El libro Criptonomicón ha sido comprado y será enviado. Peso: 200g *** PREVISUALIZANDO EL LIBRO *** Previsualizando Cuento de Hadas *** VER CESTA *** isbn=978-1003, titulo=El imperio final, autor=Brandon Sanderson, categoria=FANTASIA, precio=6.0, peso=150 isbn=978-1002, titulo=Ready Player One, autor=Ernest Cline, categoria=CIENCIAFICCION, precio=12.0, peso=500 isbn=978-1004, titulo=Fundación, autor=Isaac Asimov, categoria=CIENCIAFICCION, precio=16.0, kilobytes=8000 isbn=978-1004, titulo=Fundación, autor=Isaac Asimov, categoria=CIENCIAFICCION, precio=16.0, kilobytes=8000 ==> Valor cesta: 50.0€ *** ELIMINAR LIBRO *** isbn=978-1002, titulo=Ready Player One, autor=Ernest Cline, categoria=CIENCIAFICCION, precio=12.0, peso=500 *** PAGAR CESTA *** El libro El imperio final ha sido comprado y será enviado. Peso: 150g El libro Fundación ha sido comprado y será descargado. Kilobytes: 8000KB El libro Fundación ha sido comprado y será descargado. Kilobytes: 8000KB ==> Total pagado: 38.0€ *** VACIAR CESTA *** *** VER CESTA *** ==> Valor cesta: 0.0€ *** VACIAR CESTA ***

> **✍️ 📋 Exercici / Qüestionari 3.31 — 31 examen PRG (Excepciones y ficheros)**
> Operaciones básicas
>
> - Crea un proyecto nuevo llama
> - Crea 3 paquetes distintos: prin
> - En el paquete “principal” cop
> - En el paquete “excepciones” c
> - En la excepción Operacion
>
> error que se imprime cuando se
>
> - En el paquete “dominio” crea
> - Clase Operacion
>
> - Atributos privados: num1,
>
> y op (String). NOTA: res = resultado y
>
> - Constructor que se le p
>
> num1, num2 y op
>
> - Método calcular(): mét
>
> operación op entre les núme guarda el resultado en res. S ninguna de las indicadas en la página, se lanzará y capt OperacionIncorrectaException.
>
> - Añadir los métodos nec
>
> operaciones se impriman como
>
> - Clase Calculadora
>
> - Atributo privado: fichero (
>
> - Atributo público: ArrayList
>
> - Constructor con un único p
>
> - Métodos
>
> - cargarFichero(): métod
>
> - guardarFichero(): mét
>
> cómo se muestra en la imagen
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: Examen Programación Excepciones y Ficheros ado ExamenPRG. ncipal, dominio y excepciones ia la clase “ExamenPRG.java” que puedes de crea la excepción “OperacionIncorrectaExcep nIncorrectaException crea un método error() e genera la excepción.
>
> las siguientes clases: , num2 y res (enteros) op = operación. asa como parámetro todo que realiza la eros num1 y num2 y Si la operación no es a tabla de la siguiente turará la excepción
>
> cesarios para que las o en la imagen. (String) t de operaciones. parámetro, la ruta del fichero. Añadir la funci do que lee las operaciones del fichero todo que guarda en un fichero las operacion anterior.
>
> 31 de marzo de 2022 escargar de AULES. ption” ) que devuelva el texto de ionalidad correspondiente. nes con los resultados tal y
>
> Explicación del fichero: En el fichero aparece en prime una coma. Son los dos númer operación. A continuación viene el texto ninguna tarea. Por último, viene indicado la primeros números. Las operaci
>
> + Sumar - Restar * Multiplicar Mod Módulo. Resto Pow Potencia. Elev segundo núm
>
> Tanto el texto “mod” como el combinación de mayúsculas y m Excepciones: - Si uno de los dos númer - Si la operación no es u usuario “OperacionInco
>
> 46001199
>
> Parc Salvador Castell, 16 46680-Algemesí Tel: 962457820 Fax:962457821 email: er lugar dos números separados por ros que se utilizarán para realizar la “ -> “ que no se ha de utilizar para a operación a realizar con los dos ones posibles serán: o de la división entera.
>
> var el primer número al ero. texto “pow” podrán aparecer en mayúscula minúsculas. ros no está en el formato numérico, se produ una de las indicadas en la tabla anterior, la orrectaException”.
>
> as, minúsculas o cualquier ucirá una excepción. nzaremos la excepción de

> **✍️ 📋 Exercici / Qüestionari 3.32 — 03 examen Programacion (Excepciones y ficheros)**
> Examen Programación (3 de mayo de 2018) Nombre: Nota: 1.- Crea un proyecto nuevo llamado ExamenPRG 2.- Crea tres paquetes distintos, uno llamado excepciones, otro llamado ficheros y otro llamado examen. 3.- Añade la siguiente clase al paquete examen
>
> ```java
> public class ExamenPRG {
> public static void main(String[] args) {
> Actividad a = new Actividad("fichero1.txt");
> a.cargarFichero();
> a.cargarFichero("fichero2.txt");
> a.imprimirDatos();
> }
> }
> ```
>
> 4.- En el paquete ficheros, crea las siguientes clases e interfaces con las siguientes características: Habitación Atributos privados: nombre (string), dificultad (int), tipo (string), maxJugadores (int). Un único constructor que se le pase todos los atributos como parámetros.
>
> Getters y Setters para todos los atributos. EscapeRoom Atributos privados: nombre (string), dirección (string) y número de habitaciones (int). Atributo público: Vector de habitaciones. Un constructor que se le pase los atributos nombre, dirección y numHabitaciones como parámetros.
>
> Un constructor sin parámetros donde se creará el vector de alumnos (sólo se puede crear el vector en este constructor) Getters y Setters para los atributos nombre, dirección y numHabitaciones. Actividad (implementa la interface Fichero) Atributos privados: rutaFichero (string) y vector de EscapeRoom Un único constructor al que se le pase como parámetro rutaFichero.
>
> Los métodos públicos necesarios para que la clase ExamenPRG compile y ejecute los siguiente. (Si lo necesitas, puedes añadir métodos privados para implementar toda la funcionalidad.) Fichero Interface con los 2 métodos de cargar fichero. Donde
>
> ```java
> c.cargarFichero();
> ```
>
> Carga los EscapeRoom y Habitaciones que están en el fichero cuya ruta se encuentra en el atributo de la clase.
>
> ```java
> c.cargarFichero("fichero2.txt");
> ```
>
> Carga los EscapeRoom y Habitaciones que están en el fichero cuya ruta se pasa como parámetro.
>
> ```java
> c.imprimirDatos();
> ```
>
> Imprime los EscapeRoom y Habitaciones que se han cargado anteriormente de los ficheros en la clase Actividad. Debe imprimir los datos cargados en los vectores de EscapeRoom y Habitaciones. No debe imprimir leyendo datos de fichero. Se debe imprimir lo más parecido posible al siguiente ejemplo
>
> Gestión de excepciones: En la lectura de fichero podrán aparecer dos tipos de excepciones. Estas excepciones SIEMPRE aparecerán en la lectura de la dificultad de la habitación y será o bien porque el dato leído no es un número, o bien, porque la dificultad leída no está entre 1 y 5 que es el número de dificultad máxima de las habitaciones.
>
> Estas excepciones deberán ser capturadas y tratadas en los métodos de cargar fichero. 5.- En el paquete excepciones, crea la siguiente clase: DificultadIncorrectaException Esta excepción aparecerá cuando el número de dificultad no esté entre 1 y 5. Atributos privados: nombreHabitación Constructor: un único constructor al que se le pasará nombreHabitación.
>
> Métodos: un método público donde se especificará el texto a mostrar en caso de que se produzca una excepción.
