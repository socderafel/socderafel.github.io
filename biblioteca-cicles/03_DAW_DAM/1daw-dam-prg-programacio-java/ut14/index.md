---
layout: default
title: "UT14 — Lectura y escritura de ficheros — Programació en Java (1r DAW / DAM) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT14 Completa"
prev_url: "../ut13/ut1304.html"
prev_label: "⬅️ 13.4 Ejercicios B"
next_url: "../ut14/ut1401.html"
next_label: "14.1 Lectura y escritura de información en ficheros ➡️"
---

# 📘 UT14 — Lectura y escritura de ficheros (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**14.1 Lectura y escritura de información en ficheros**](#ut1401) (o [obrir en pàgina individual ➡️](./ut1401.md) )
> - [**14.2 Códigos de clase**](#ut1402) (o [obrir en pàgina individual ➡️](./ut1402.md) )
> - [**14.3 Ejercicios A**](#ut1403) (o [obrir en pàgina individual ➡️](./ut1403.md) )
> - [**14.4 Ejercicios B**](#ut1404) (o [obrir en pàgina individual ➡️](./ut1404.md) )
> - [**14.5 numeros**](#ut1405) (o [obrir en pàgina individual ➡️](./ut1405.md) )
> - [**14.6 alumnos notas**](#ut1406) (o [obrir en pàgina individual ➡️](./ut1406.md) )
> - [**14.7 Ejercicios C**](#ut1407) (o [obrir en pàgina individual ➡️](./ut1407.md) )
> - [**14.8 Ejercicios D**](#ut1408) (o [obrir en pàgina individual ➡️](./ut1408.md) )
> - [**14.9 Ejercicios - AyR**](#ut1409) (o [obrir en pàgina individual ➡️](./ut1409.md) )

---

## 14.1 Lectura y escritura de información en ficheros

> **📌 🏷️ Apunt de la Unitat**
> #### Contenido de la unidad

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

> **📌 🏷️ Apunt de la Unitat**
> #### Ampliación y refuerzo

---

### UNIDAD 10: LECTURA Y ESCRITURA DE FICHEROS

V2.14.03.24

Profesor: José Ramón Simó Martínez Contenido

- Introducción ............................................................................................................................ 2
- Breve repaso al concepto de ficheros ....................................................................................... 3

2.1. Gestión de ficheros en Java ...................................................................................................................... 3 2.2. Jerarquía del paquete java.io ................................................................................................................... 3

- Utilización del sistema de ficheros ........................................................................................... 5

3.1. Tabla de operaciones sobre ficheros ........................................................................................................ 6

- Ficheros de texto ..................................................................................................................... 8

4.2. Lectura: Scanner ....................................................................................................................................... 8 4.2. Lectura: BufferedReader, FileReader ........................................................................................................ 9 4.3. Escritura: FileWriter, PrintWriter ............................................................................................................ 11

- Ficheros binarios .................................................................................................................... 13

5.1. Lectura/Escritura .................................................................................................................................... 13 5.2. Ficheros de acceso aleatorio .................................................................................................................. 16

- Persistencia de objetos en Java .............................................................................................. 17

6.1. Guardar objetos serializables (Serialización) .......................................................................................... 17 6.2. Recuperar objetos serializados (Deserialización) ................................................................................... 18

- Bibliografía ............................................................................................................................. 21

V2.14.03.24

### 1. Introducción

En los programas que hemos desarrollado hasta el momento, los datos de entrada los introduce el usuario y los datos de salida los imprimimos en la consola del sistema. De cualquier forma, toda la información se pierde una vez cerramos nuestro programa. Aplicaciones como procesadores de texto, sistemas de bases de datos, aplicaciones web o videojuegos, requieren trabajar con datos almacenados de forma permanente.

Los principales componentes que permiten almacenar y recuperar datos en el sistema son: • Los ficheros • Las bases de datos En esta unidad introduciremos la gestión de la información a través de ficheros donde aprenderemos las diferentes operaciones que se pueden realizar con este componente: leer y escribir datos en un fichero, copiar, borrar, mover y renombrar ficheros, etc. En Java los ficheros son tratados como objetos, lo que significa que se pueden utilizar métodos para realizar operaciones en ellos; estudiaremos diferentes las diferentes clases que del paquete java.io como File, FileReader, FileWriter, etc.

En próximas unidades estudiaremos la gestión de la información permanente de nuestro programa a través de una base de datos. Al terminar esta unidad deberás ser capaz de: • Identificar las clases fundamentales del paquete java.io para gestionar la entrada y salida de información.

• Reconocer los tipos de ficheros que podemos utilizar para entrada y salida de información. • Utilizar ficheros para almacenar y recuperar información. • Conocer y utilizar la persistencia de los objetos en Java. • Desarrollar programas que permitan almacenar y recuperar información a través de ficheros.

Nota El tratamiento de excepciones es fundamental en la gestión de datos en ficheros. Por tanto, antes de empezar la presente unidad, se recomienda repasar los conceptos del tratamiento de excepciones introducidos en la unidad anterior.

V2.14.03.24

### 2. Breve repaso al concepto de ficheros

Los ficheros los podemos en dos tipos: • Ficheros de texto • Ficheros binarios Los ficheros de texto los podemos procesar (crear, leer o escribir) usando un editor de textos como el bloc de notas en Windows o el nano en Ubuntu. Todos los demás tipos de ficheros los consideraremos ficheros binarios; no podemos leer ficheros binarios con un editor de textos.

Un ejemplo sería el fichero de código fuente de Java (.java) que lo podemos editar y leer con un editor de textos; sin embargo, el fichero resultado de su compilación (.class) es un fichero binario que sólo puede ser leído y entendido por la máquina virtual de Java (JVM).

Asimismo, y de forma informal, podemos considerar a los ficheros de texto como una secuencia de caracteres y a los ficheros binarios como una secuencia de bits. Los caracteres están codificados utilizando una esquema de codificación, como por ejemplo, ASCII o Unicode.

Por ejemplo, el entero decimal 199 se guarda como una secuencia de tres caracteres (1, 9, 9) en un fichero de texto. Ahora bien, el mismo entero se guarda como valor de byte C7 en un fichero binario, ya que el 199 es igual a C7 en hexadecimal. La ventaja de los ficheros binarios es que son más eficientes de procesar que los ficheros de texto.

#### 2.1. Gestión de ficheros en Java

El lenguaje Java proporciona una gran variedad de clases para gestionar la entrada y salida de datos en ficheros. Estas clases se pueden clasificar según el tipo de ficheros que se vaya a tratar, que son dos: • Ficheros de texto • Ficheros binarios En el siguiente subapartado se presenta la jerarquía de clases para la gestión de ficheros en Java.

#### 2.2. Jerarquía del paquete java.io

Es importante tener una visión global de las clases de Java implicadas en la entrada/salida de datos y sus relaciones. A continuación, el esquema de la jerarquía del paquete java.io (en Java 17)

V2.14.03.24

Fuente: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/package-tree.html

V2.14.03.24

### 3. Utilización del sistema de ficheros

En este apartado haremos una primera aproximación al tratamiento de ficheros. Para ello, Java nos proporciona la clase File que forma parte del paquete java.io. En definitiva, la clase File nos ofrece la posibilidad de trabajar con ficheros y directorios del sistema de ficheros. A continuación, un ejemplo para empezar a crear ficheros en el sistema desde Java

> **💡 Apunt Tècnic**
> Ejemplo: Creación un fichero Primero debemos instanciar un objeto de la clase File indicando la ruta (path) y nombre del fichero. Este objeto representa el nombre de la ruta dada

```java
File fichero = new File("miFichero.txt");
```

Luego, deberos usar el método createNewFile()

```java
fichero.createNewFile();
```

En este ejemplo, habrá creado el fichero el directorio raíz del proyecto (ruta relativa). También podemos indicar la ruta completa del destino del fichero (ruta absoluta)

```java
File fichero = new File ("c:\\usuario\\documentos\\miFichero.txt");
```

Siempre que los directorios de la ruta anterior existan previamente. En el ejemplo completo, hay que tener en cuenta el tratamiento de excepciones ya que el método createNewFile(), según la documentación de Java (ver aquí) , lanza una excepción de tipo IOException

```java
import java.io.File;
import java.io.IOException;
```

```java
public class Test {
```

```java
public static void main(String[] args) {
```

```java
File fichero = new File("miFichero.txt");
```

try {

```java
fichero.createNewFile();
```

}

```java
catch (IOException e) {
```

```java
e.printStackTrace();
```

}

} } Nota Para repasar el concepto de ruta absoluta y relativa en informática tenéis el siguiente enlace: https://es.wikipedia.org/wiki/Ruta_(inform%C3%A1tica)

V2.14.03.24

#### 3.1. Tabla de operaciones sobre ficheros

A continuación, un resumen de las operaciones que se pueden realizar sobre ficheros con la clase File: Método Descripción Salida boolean createNewFile() crea el fichero indicado en la ruta. false si el fichero ya existía. boolean mkdir() crea el directorio indicado en la ruta.

false si el directorio ya existía. boolean delete() borra fichero o directorio indicado en la ruta true si ha sido borrado con éxito. String getParent() devuelve la ruta hasta la carpeta del elemento referido por esa ruta. La cadena de la ruta. String getName() devuelve el nombre del elemento que representa la ruta.

Nombre del elemento. String getAbsolutePath() devuelve el nombre de la ruta absoluta. La cadena de la ruta. boolean exists() comprueba si la ruta existe en el sistema de ficheros. true si existe. boolean isFile() comprueba si existe y es un fichero. true si existe. boolean isDirectory() comprueba si existe y es un directorio.

true si existe. long lenght() devuelve el tamaño de un archivo en bytes. Tamaño del archivo en bytes. long lastModified() devuelve la última fecha de edición del elemento. Milisegundos que han pasado desde el 1 de junio de 1970. String[] list() lista los ficheros y directorios de la ruta indicada.

array de cadenas. File[] listFiles() lista todos los elementos contenidos del directorio indicado. array de objetos tipo File Más información sobre la API de la clase File: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/File.html

V2.14.03.24 Ejemplo: Filtrado de una lista de ficheros El siguiente código lista los ficheros de un directorio y muestra sólo aquellos que con tengan la extensión especificada

```java
import java.io.File;
import java.io.FilenameFilter;
```

```java
public class TestFiltro implements FilenameFilter {
```

```java
String extension;
```

```java
TestFiltro(String extension){
```

```java
this.extension=extension;
```

}

```java
public boolean accept(File dir, String name){
```

```java
return name.endsWith(extension);
```

}

```java
public static void main(String[] args) {
```

try {

```java
File fichero = new File("c:\\datos\\.");
```

```java
String[] listadeArchivos = fichero.list();
```

```java
listadeArchivos = fichero.list(new TestFiltro("odt.txt"));
```

```java
int numarchivos = listadeArchivos.length ;
```

if (numarchivos < 1)

```java
System.out.println("No hay archivos que listar");
```

else {

for(int conta = 0; conta < listadeArchivos.length; conta++)

```java
System.out.println(listadeArchivos[conta]);
```

}

}

```java
catch (Exception ex) {
```

```java
System.out.println("Error al buscar en la ruta indicada");
```

}

} }

V2.14.03.24

### 4. Ficheros de texto

En este apartado aprenderemos a leer y escribir ficheros de texto a través de las clases y métodos del paquete java.io.

#### 4.2. Lectura: Scanner

Hasta ahora hemos utilizado la clase Scanner para obtener datos de la entrada estándar. Sin embargo, también puede utilizarse como una forma sencilla de leer ficheros de texto. Para ello, en vez de pasar como parámetro de entrada System.in, pasaremos un objeto File que tiene indicada la ruta del fichero a leer

```java
File fichero = new File("c:\\datos\\mi_fichero.txt");
sc = new Scanner(fichero);
```

Una vez tenemos creado el objeto de lectura con Scanner procedermos a leer los datos con los métodos de la clase Scanner: nextInt(), next(), nextLine(), etc. Si queremos leer todo el contenido del fichero deberemos usar la estructura de bucle y como condición de parada el método Scanner llamado hasNext() o hasNextLine()

```java
while (sc.hasNext()) {
    String dato = sc.next();
    System.out.println(dato);
}
```

Finalmente, debemos tener en cuenta que la clase Scanner tiene por defecto el delimitador “ “ (espacio) para leer datos consecutivos. Este delimitador lo podremos cambiar con el método useDelimiter(delimitador): sc.useDelimiter(","); // Los datos están separados por ,(comas) Ejemplo: Lectura con Scanner

```java
public class TestLecturaScanner {
    public static void main(String[] args) {
        Scanner sc = null;
        try {
            File fichero = new File("c:\\datos\\mi_fichero.txt");
            sc = new Scanner(fichero);
```

```java
sc.useDelimiter(",");
            while (sc.hasNext()) {
                String dato = sc.next();
                System.out.println(dato);
```

}

```java
} catch(FileNotFoundException e) {
```

```java
System.out.println("ERROR. Fichero no encontrado.");
        } finally {
```

```java
sc.close();
        }
   }
}
```

V2.14.03.24

#### 4.2. Lectura: BufferedReader, FileReader

Para leer un fichero de texto necesitaremos combinar tres clases del paquete java.io: • File • BufferedReader • FileReader Ejemplo: Lectura caracter a caracter

```java
public class LectorDeCaracteres {
    public static void main(String[] args) {
        BufferedReader br = null;
        FileReader fr = null;
```

```java
File fichero = new File("recursos\\datos_entrada.txt");
```

try { // crea el fichero para lectura

```java
fr = new FileReader(fichero);
```

// crea el buffer para optimizar la lectura

```java
br = new BufferedReader(fr);
```

// mientras haya caracteres para leer...

```java
int caracter;
            while ((caracter = br.read()) != -1) {
                System.out.print((char)caracter);
            }
        } catch (FileNotFoundException e) {
            System.out.println("No se ha podido encontrar el fichero.");
        } catch (IOException e) {
            System.out.println("No se ha podido leer el fichero.");
        } finally {
            try {
                if (br != null)
                    br.close();
            } catch (IOException e) {
                    System.out.println("No se ha podido cerrar el fichero.");
            }
        }
    }
}
```

Analicemos las partes más destacadas del ejemplo anterior: • Creamos previamente un fichero de texto llamado “datos_entrada.txt” con el contenido siguiente: cabecera fichero

V2.14.03.24 línea 1 línea 2 Este fichero estará guardado en la carpeta “recursos” del proyecto (se debe crear)

• Los objetos File, BufferedReader y FileReader los iniciamos a null ya que posteriormente necesitaremos acceder a ellos en el bloque finally. • La clase FileReader prepara para lectura el fichero indicado en la ruta del objeto File; en Windows la ruta se marca con doble barra invertida “\\” para escapar la barra simple “\”. Con esta clase ya podríamos leer los datos del fichero; no obstante, tal y como indica la documentación oficial es recomendable crear un buffer de con los datos para mayor eficiencia, haciendo uso de BufferedReader.

• Para leer caracter a caracter utilizamos el método read() de la clase BufferedReader. Cada vez que llamamos a este método, leerá un caracter del buffer y devolverá un entero con el código ASCII de dicho caracter; en caso de no quedar caracteres en el buffer, devolverá el valor -1.

• El valor entero devuelto por read() debe ser casteado a tipo char para mostrar el caracter ASCII correspondiente. • Atención a las excepciones

```java
o El constructor de FileReader() lanza una excepción FileNotFoundException la cual es checked;
```

por tanto debe ser tratada obligatoriamente en tiempo de compilación. o El método read() lanza una excepción IOException y también es checked. o El bloque finally es típicamente usado para cerrar recursos. En este caso, será suficiente con cerrar el BufferedReader ya que automáticamente cerrará los demás recursos. Aquí también trataremos otra excepción ya que el método close() lanza una excepción IOException.

La salida por pantalla del código anterior sería: cabecera fichero línea 1 línea 2

Nota Los saltos de línea también son caracteres por lo que, aunque en el código sólo utilizamos print(), en la salida se han aplicado los saltos de línea. El proceso de apertura y cierre de fichero es el mismo que en el ejemplo anterior. Lo único que cambio es el modo en que vamos a leer los datos; para ello, utilizaremos el método readLine() de la clase BufferedReader.

V2.14.03.24 Así que solamente deberemos cambiar el bloque de lectura del fichero (el bucle) por el siguiente bloque

```java
String linea;
while ((linea = br.readLine()) != null) {
    System.out.println(linea);
}
```

Nota El método readLine() devuelve la línea de texto leída mientras queden líneas de texto por leer; en caso contrario devolverá null. Además, este método no tiene en cuenta los saltos de línea, por ello utilizamos println() en vez de print().

#### 4.3. Escritura: FileWriter, PrintWriter

Para escribir en un fichero de texto necesitaremos combinar tres clases del paquete java.io: • File • FileWriter • PrintWriter Ejemplo: Escritura en ficheros sin buffer

```java
public class EscritorSinBuffer {
    public static void main(String[] args) {
        PrintWriter pw = null;
        FileWriter fw = null;
```

```java
File fichero = new File("recursos\\datos_salida.txt");
```

try { // crea el fichero para escritura

```java
fw = new FileWriter(fichero);
            // crea el PrintWriter para usar los métodos printXXX
            pw = new PrintWriter(fw);
            // escribe la cadena en el fichero
            pw.println("cadena1");
            // escribe un entero
            pw.println(3);
        } catch (IOException e) {
            System.out.println("No se ha podido escribir en el fichero.");
        } finally {
            pw.close(); // no lanza excepción, no requiere tratarla
```

} }} Analicemos las partes más destacadas del ejemplo anterior

V2.14.03.24 • La clase FileWriter prepara para escritura el fichero indicado en la ruta del objeto File. En este caso, por defecto si no existe el fichero lo crea; si existe, borra el contenido del fichero. Para que esto último no suceda, es decir, para que al abrir el fichero adjunte la información nueva, deberemos llamar al constructor con un segundo parámetro booleano con el valor a true

```java
fw = new FileWriter(fichero, true);
```

• La clase PrintWriter se utiliza principalmente para poder usar sus métodos print, println o printf, ya que facilitan el formateo de los datos. Al igual que hacíamos en System.out.printXXX(…) a dichos métodos podemos pasarles como parámetros diferentes tipos de datos (String, int, double, etc).

También podemos concatenar cadena de datos con el símbolo “+”

```java
pw.println("cadena1" + "cadena2" + numero);
```

• Sólo necesitamos cerrar el recurso de PrintWriter y este ya se encargará de cerrar los demás recursos (en este caso los de FileWriter). • En cuanto al tratamiento de excepciones, sólo la clase FileWriter lanza una excepción IOExcepcion. Por otra parte, el método close() de PrintWriter no lanza ninguna excepción y por tanto no hace falta que se trate en el bloque finally.

El uso de PrintWriter tiene la ventaja de hacer que la escritura de datos en el fichero sea muy cómoda para el programador. Sin embargo, arrastra dos inconvenientes: • Oculta las excepciones que puedan ocurrir durante la escritura de datos; los métodos printXXX no lanzan ninguna excepción.

• Es menos eficiente que utilizar un buffer. Para hacer escritura segura y con uso de buffer se utilizará la clase BufferedWriter. Para saber más sobre esta clase: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/BufferedWriter.html

V2.14.03.24

### 5. Ficheros binarios

En este apartado aprenderemos a leer y escribir ficheros binarios a través de las clases y métodos del paquete java.io. Además, veremos el acceso aleatorio (al contrario que secuencial) a los datos de un fichero. En este apartado veremos un ejemplo conjunto de lectura y escritura en un fichero binario para simplificar el concepto y asegurarnos que trabajos con un fichero binario. Primero realizaremos la escritura de datos en binario para luego leernos también en formato binario. Para ello usaremos la extensión de fichero binario .dat

#### 5.1. Lectura/Escritura

Para leer un fichero de texto necesitaremos combinar tres clases del paquete java.io: • File • FileInputStream • FileOutputStream Ejemplo: Escritura y lectura de un fichero binario

```java
public class LectorDeBytesSinBuffer {
    public static void main(String[] args) {
        FileInputStream fis = null;
        FileOutputStream fos = null;
```

```java
File fichero = new File("recursos\\datos_binarios.dat");
```

// Escribimos los datos en un fichero binario try { // crea el fichero para escritura

```java
fos = new FileOutputStream(fichero);
```

// escribimos los datos en formato binario

```java
for(int i = 0; i < 10; i++) {
```

```java
fos.write(i);
```

}

```java
} catch (FileNotFoundException e) {
            System.out.println("No se ha podido encontrar el fichero.");
        } catch (IOException e) {
```

```java
System.out.println("No se ha podido leer el fichero.");
```

} finally {

try {

if (fos != null)

```java
fos.close();
```

```java
} catch (IOException e) {
```

```java
System.out.println("No se ha podido cerrar el fichero.");
```

} }

// Hemos terminado de escribir los datos y cerramos el fichero de escritura

V2.14.03.24

// … continúa

// Leemos los datos del fichero binario creado anteriormente

try {

// crea el fichero para lectura

```java
fis = new FileInputStream(fichero);
```

// leemos los datos en formato binario

```java
int dato = 0;
```

```java
while((dato = fis.read()) != -1) {
```

```java
System.out.print(dato + " ");
            }
        } catch (FileNotFoundException e) {
```

```java
System.out.println("No se ha podido encontrar el fichero.");
```

```java
} catch (IOException e) {
```

```java
System.out.println("No se ha podido leer el fichero.");
```

} finally {

try {

if (fis != null)

```java
fis.close();
```

```java
} catch (IOException e) {
```

```java
System.out.println("No se ha podido cerrar el fichero.");
```

} } } } Analicemos las partes más destacadas del ejemplo anterior: • Utilizamos la clase FileOutputStream para escribir datos en un fichero binario. Primero instanciamos un objeto de esta clase que prepara el fichero para escritura. Luego, utilizamos el método write(int dato) para escribir de byte en byte los datos en el fichero de salida. En la siguiente imagen podemos observar la descripción que nos da la documentación (Java 17) de este método

• Utilizamos la clase FileInputStream para leer los datos de un fichero binario. Primero instanciamos un objeto de esta clase que prepara el fichero para lectura. Luego, utilizamos el método read() para leer

V2.14.03.24 de byte en byte los datos del fichero; en caso de que no haya más datos a leer del fichero, el método devuelve el valor -1. En la siguiente imagen podemos observar la descripción que nos da la documentación (Java 17) de este método

• En este caso es conveniente hacer el tratamiento de las excepciones correspondientes por separado, ya que así separamos y tratamos la lógica de cada acción de forma más específica. Recordemos que también tenemos la opción de realizar la lectura y escritura de forma más eficiente a través de un buffer. Para el caso de los ficheros binarios tenemos la clase BufferedInputStream (lectura) y BufferedOutputStream (escritura).

Por otra parte, también disponemos de dos clases para leer y escribir datos primitivos (int, float, etc) en ficheros binarios; en este caso, debemos conocer de antemano la estructura del fichero. Estas dos clases son: • DataInputstream (para lectura) • DataOutputStream (para escritura Para el resto de los métodos de las clases mencionadas en este apartado es conveniente revisar la documentación oficial (Java 17)

• https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/FileOutputStream.html • https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/FileInputStream.html • https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/BufferedInputStream.html • https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/BufferedOutputStream.html • https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/DataInputStream.html • https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/DataOutputStream.html

V2.14.03.24

#### 5.2. Ficheros de acceso aleatorio

Hasta ahora hemos estudiado los mecanismos que proporciona Java para leer ficheros en modo de acceso secuencial; esto es, como si los ficheros fueran las antiguas cintas de casete (por cierto, los casetes eran esto). La principal desventaja es que, para encontrar cualquier dato concreto, debemos recorrer el fichero desde el inicio hasta llegar al dato buscado.

Otra forma de acceder a los datos de un fichero es el modo de acceso aleatorio; esto es, podemos acceder a una determinada una posición del fichero para leer, escribir o modificar información en el fichero. La ventaja evidente es que no hay que recorrer las posiciones anteriores del fichero. En Java tenemos la clase RandomAccessFile que nos permitirá este tipo de accesos tal y como indica la documentación de Java.

Ejemplo (simplificado): Lectura/escritura de número entero con acceso aleatorio a fichero // Lectura

```java
fichero = new File("recursos\\datos_binarios.dat");
RandomAccessFile raf1 = new RandomAccessFile(fichero, "r");
raf1.seek(1);
int dato = raf1.readInt();
System.out.print(dato);
```

// Escritura

```java
RandomAccessFile raf2 = new RandomAccessFile(fichero, "rw");
raf2.seek(1);
raf2.writeInt(13);
```

Lectura: • El constructor de la clase RandomAccessFile necesita dos parámetros: la ruta del fichero y el modo de acceso. El modo de acceso podrá ser de lectura (“r”) o lectura/escritura (“rw”). • Si el fichero ya existe lo abre; en caso contrario, lo crea. Por tanto, nunca sobrescribirá su contenido.

• Utilizamos el método seek(int X) para posicionarnos en el byte X del fichero. Hay que tener en cuenta que la indexación empieza en cero (al igual que los arrays). Escritura: • El método readInt() leerá un byte de tipo entero y devolverá el dato leído o -1 si es final de fichero.

• El fichero se abre en modo lectura/escritura. • El método writeTIPO(X) escribe el tipo de dato primitivo (Int, Double, etc) del valor X dado. Notas

- Para leer/escribir String utilizaremos los métodos readUTF(String) o writeUTF(String).
- Los anteriores ejemplos necesitan del tratamiento de las excepciones correspondientes.

V2.14.03.24

### 6. Persistencia de objetos en Java

La serialización en Java es el proceso de convertir un objeto Java en una secuencia de bytes, para que pueda ser almacenado en un archivo o transmitido a través de una red. La serialización se utiliza principalmente para la persistencia de objetos, es decir, para guardar el estado actual de un objeto y poder recuperarlo más tarde.

La serialización en Java se realiza utilizando la interfaz Serializable del paquete java.io. Al implementar la interfaz Serializable, una clase se marca como serializable, lo que significa que sus objetos pueden ser convertidos en una secuencia de bytes. Las clases principales para g y recuperar objetos serializables son

• ObjectOutputStream (guarda) • ObjetInputStream (recupera) Ambas clases heredan de las clases OutputStream y InputStream, respectivamente. A continuación, los enlaces a la documentación oficial de las clases mencionadas: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/ObjectOutputStream.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/ObjectInputStream.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/OutputStream.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/InputStream.html Ejemplo: Designar una clase como serializable

```java
import java.io.Serializable;
```

```java
public class Persona implements Serializable {
}
```

Una vez hayamos marcado el objeto como serializable, Java se encargará de su serialización de forma automática.

#### 6.1. Guardar objetos serializables (Serialización)

Supongamos que tenemos la clase Persona creada con sus atributos y métodos correspondientes y la hemos marcado como serializable. Para poder guardar los objetos que hayamos instanciado de la clase Persona, necesitamos la clase ObjetOutputStream y su método writeObject(Object obj). No obstante, también necesitaremos de la clase FileOutputStream para crear y preparar el fichero binario para escritura, al igual que estudiamos en apartados anteriores.

Por otra parte, deberemos seguir tratando las excepciones que son requeridas por el uso de los métodos correspondientes.

V2.14.03.24 Ejemplo: Guardar objeto serializable

```java
public class Test {
  public static void main(String[] args) {
    // Creamos un ObjectOutputStream para escribir el objeto en un archivo
    ObjectOutputStream salida = null;
```

try {

// Abrimos o creamos el fichero para escritura

```java
FileOutputStream fichero = new FileOutputStream("recursos\\persona.ser");
```

// Instanciamos el objeto para serializar en el fichero

```java
salida = new ObjectOutputStream(fichero);
```

Persona persona = new Persona("Anakin", 40); // nombre, edad

// Escribimos el objeto en el archivo

```java
salida.writeObject(persona);
    } catch (IOException e) {
      System.out.println("No se ha podido encontrar el fichero.");
    } catch (IOException e) {
      System.out.println("No se ha podido escribir en el fichero.");
    } finally {
      // Cerramos el ObjectOutputStream
      try {
        out.close();
      } catch (IOException e) {
        System.out.println("No se ha podido cerrar el fichero.");
      }
    }
  }
}
```

Nota El fichero donde se guardará el objeto/s creados lo podemos nombrar con cualquier extensión. Sin embargo, una de las más habituales es la extensión .ser

#### 6.2. Recuperar objetos serializados (Deserialización)

En caso de querer recuperar la información de un objeto serializado necesitaremos de la clase ObjectInputStream y su método readObject(). Además, análogamente al ejemplo de la escritura, en este caso de lectura de datos necesitaremos de la clase FileOutputStream para crear y preparar el fichero binario para lectura.

V2.14.03.24 Ejemplo: Recuperar un objeto serializado

```java
public class Test {
  public static void main(String[] args) {
    // Creamos un ObjectInputStream para leer el objeto en un archivo
    ObjectInputStream entrada = null;
```

try {

```java
FileInputStream fichero = new FileInputStream("recursos\\persona.ser");
```

// Instanciamos el objeto para lectura

```java
entrada = new ObjectInputStream(fichero);
```

// Leemos el objeto del fichero haciendo un casting al objeto original

```java
Persona p = (Persona) entrada.readObject();
```

```java
System.out.println("Nombre: " + p.getNombre());
      System.out.println("Edad: " + p.getEdad());
```

```java
} catch (FileNotFoundException e) {
        System.out.println("No se ha podido encontrar el fichero.");
      } catch (ClassNotFoundException e) {
        System.out.println("No se ha podido encontrar la clase.");
      } catch (IOException e) {
        System.out.println("No se ha podido leer el objeto del fichero .");
      } finally {
        // Cerramos el ObjectOutputStream
      try {
        entrada.close();
      } catch (IOException e) {
        System.out.println("No se ha podido cerrar el fichero.");
      }
    }
  }
}
```

Salida por pantalla: Nombre: Anakin Edad: 40 Analicemos las partes más destacadas del ejemplo anterior: • Leemos el objeto del fichero con el método readObject(). • Debemos hacer casting al tipo de objeto leído; esto es, debemos saber de antemano la estructura del fichero y los objetos que hay almacenados en él.

• Debemos tratar el tipo de excepción ClassNotFoundException lanzada por el método readObject().

V2.14.03.24 Es posible almacenar en el mismo fichero diferentes objetos creados. Los objetos se irán almacenando (en bytes) de forma contigua conforme se vaya añadiendo. Veamos el siguiente ejemplo simplificado para escribir varios objetos serializados en el mismo fichero

// Creamos algunos objetos para serializar

```java
Persona p1 = new Persona("Anakin", 40);
Persona p2 = new Persona("Leia", 19);
Persona p3 = new Persona("Obijuan", 55);
```

// Escribimos los objetos en el archivo

```java
salida.writeObject(p1);
salida.writeObject(p2);
salida.writeObject(p3);
```

Por otra parte, para leer un fichero que contenga varios objetos serializados sería

```java
Persona p1 = (Persona) in.readObject();
Persona p2 = (Persona) in.readObject();
Persona p3 = (Persona) in.readObject();
```

En el caso de la lectura, al llamar al método readObject() leerá los bytes del objeto almacenado y se situará al final de los bytes leídos. Cuando se llame otra vez a dicho método, leerá los siguientes bytes que ocupe el siguiente objeto almacenado, y así sucesivamente.

Si a priori no sabemos cuántos objetos hay almacenados, podemos utilizar un bucle para recupera los objetos serializados. El inconveniente es obtener la información de final de fichero ya que el método readObject() no devuelve el valor null en tal caso; sin embargo, sí que lanza una excepción de tipo EOFException. Por tanto, una posible solución sería recorrer el bucle sin parada (condición a true) y tratar la excepción indicada.

> **💡 Apunt Tècnic**
> Ejemplo: Recuperar un número indeterminado de objetos serializado del fichero try {

// … código de preparación de fichero para deserializar

```java
while(true) {
        Persona p = (Persona) entrada.readObject();
        System.out.println("Nombre: " + p.getNombre());
        System.out.println("Edad: " + p.getEdad());
    }
} catch (EOFException e) {
    System.out.println("Se ha alcanzado el final del fichero.");
}
```

V2.14.03.24

### 7. Bibliografía

Libro “Core Java Volumen I: Fundamentals”, Cary S. Horstmann Apuntes de José Chamorro del CFGS DAW del https://docs.oracle.com/

---

## 14.2 Códigos de clase

### 📄 FicheroEmpleadoMejorado.java

```java
package ejercicios_c;

import java.io.EOFException;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class FicheroEmpleadoMejorado {
	private String nombre;
	
	public FicheroEmpleadoMejorado(String nombre) {
		this.nombre = nombre;
	}
	
	// SERIALIZAR
	public void agregarEmpleado(Empleado empleado) {
		
		// PRIMERO DESERIALIZAR EL FICHERO EXISTENTE...
		FileInputStream fis = null;
		ObjectInputStream ois = null;
		
		File fichero = new File(this.nombre);
		
		List<Empleado> listaEmpleados = new ArrayList<Empleado>();
		
		try {
			// Leo los empleados de un fichero que existe previamente
			// y guardo esos empleados en una lista de empleados			
			if (!fichero.exists()) // Si el fichero no existe...
				fichero.createNewFile();
			else { // ... y si ya existe
				// Deserializar
				fis = new FileInputStream(fichero);
				ois = new ObjectInputStream(fis);
				
				while(fis.available() > 0) {
					Empleado e = (Empleado)ois.readObject();
					listaEmpleados.add(e);
				}
			}
			
			listaEmpleados.add(empleado);
			
		} catch(ClassNotFoundException e) {
			e.printStackTrace(); 
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (fis != null)
					fis.close();
				if (ois != null)
					ois.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
				
		// Ahora voy a Serializar a partir de la lista de empleados...
		FileOutputStream fos = null;
		ObjectOutputStream oos = null;
		
		try {
			fos = new FileOutputStream(fichero);
			oos = new ObjectOutputStream(fos);
			
			// Serializo cada empleado de la lista de empleados en el fichero.
			for (Empleado e : listaEmpleados)
				oos.writeObject(e);			
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (fos != null)
					fos.close();
				if (oos != null)
					oos.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		
		
		
	}
	
	// DESERIALIZAR
	public void mostrarEmpleados() {
		FileInputStream fis = null;
		ObjectInputStream ois = null;
		
		File fichero = new File(this.nombre);
		
		try {
			fis = new FileInputStream(fichero);
			ois = new ObjectInputStream(fis);
			
			while(true) {
				Empleado empleado = (Empleado)ois.readObject();
				System.out.println(empleado);
			}
			/*
			while(fis.available() > 0) {
				Empleado empleado = (Empleado)ois.readObject();
				System.out.println(empleado);
			}*/
			
		} catch(EOFException e) {
			//System.out.println("Final de fichero.");
			//e.printStackTrace();
		} catch(ClassNotFoundException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (fis != null)
					fis.close();
				if (ois != null)
					ois.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
```

### 📄 Empleado.java

```java
package ejercicios_c;

import java.io.Serializable;

public class Empleado implements Serializable{
	String nombre;
	int edad;
	double salario;
	
	public Empleado(String nombre, int edad, double salario) {
		this.nombre = nombre;
		this.edad = edad;
		this.salario = salario;
	}
	
	@Override
	public String toString() {
		return this.nombre + ", " + this.edad + ", " + this.salario;
	}
}
```

### 📄 Ejercicio2c.java

```java
package ejercicios_c;

public class Ejercicio2c {

	public static void main(String[] args) {
		Empleado e1 = new Empleado("Anakin", 20, 2200);
		Empleado e2 = new Empleado("Leia", 25, 3000);
		
		//System.out.println(e1);
		//System.out.println(e2);

		//FicheroEmpleado ficheroEmpleado = new FicheroEmpleado("empleado1.dat");
		FicheroEmpleadoMejorado ficheroEmpleado = new FicheroEmpleadoMejorado("empleado1.dat");

		ficheroEmpleado.agregarEmpleado(e1);
		ficheroEmpleado.agregarEmpleado(e2);

		ficheroEmpleado.mostrarEmpleados();

	}

}
```

### 📄 Ejercicio4bv4.java

```java
package ejercicios_b;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class Ejercicio4bv4 {
	public static void main(String[] args) {
		Scanner sc = null;
		File fichero = new File("ficheros/alumno_notas.txt");
		
		try {
			sc = new Scanner(fichero);
			
			// Leer el contenido del fichero y procesarlo
			ArrayList<Alumno> alumnos = new ArrayList<Alumno>();
			while(sc.hasNext()) {
				String nombre = sc.next();
				String apellido = sc.next();
				
				// Creo un alumno con el nombre y apellido
				Alumno alumno = new Alumno(nombre, apellido);
				
				// Añado cada nota: Atención al uso de hasNextDouble()
				// Leo doubles hasta que no haya más doubles
				while(sc.hasNextDouble()) {
					alumno.anyadirNota(sc.nextDouble());
				}
							
				alumnos.add(alumno);
				
				// Atención: la media no hace falta calcularla
				// explícitamente ya que eso lo hará al ordenar
				// el ArrayList de Alumno (Ver el comparator)
			}
			
			Collections.sort(alumnos, new AlumnosMediaComparatorV4());

			System.out.println("----------ORDENADO-----------");
			for(Alumno a : alumnos) {
				System.out.println(a);
			}		
		
		} catch (FileNotFoundException e) {
			System.out.println("ERROR. Fichero no encontrado.");
		} finally {
			if (sc != null)
				sc.close();
		}
	}
}
```

### 📄 Ejercicio4bv3.java

```java
package ejercicios_b;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class Ejercicio4bv3 {
	public static void main(String[] args) {
		Scanner sc = null;
		File fichero = new File("ficheros/alumno_notas.txt");
		
		try {
			sc = new Scanner(fichero);
			
			// Leer el contenido del fichero y procesarlo
			ArrayList<String> lineas = new ArrayList<String>();
			while(sc.hasNextLine()) {
				String linea = sc.nextLine();
				lineas.add(linea);
			}
			
			// Nombre, Apellido y media
			ArrayList<Alumno> datosAlumnos = new ArrayList<Alumno>();
			
			for (String linea : lineas) {
				String[] datos = linea.split(" ");
				
				Alumno alumno = new Alumno(datos[0], datos[1]);
				for (int i = 2; i < datos.length; i++) {
					alumno.anyadirNota(Double.parseDouble(datos[i]));
				}
				
				double media = alumno.calcularMedia();
				datosAlumnos.add(alumno);
			}
			
			for(Alumno a : datosAlumnos) {
				System.out.println(a);
			}
			
			Collections.sort(datosAlumnos, new AlumnosMediaComparatorV2());

			System.out.println("----------ORDENADO-----------");
			for(Alumno a : datosAlumnos) {
				System.out.println(a);
			}		
		
		} catch (FileNotFoundException e) {
			System.out.println("ERROR. Fichero no encontrado.");
		} finally {
			if (sc != null)
				sc.close();
		}
	}
}
```

### 📄 Ejercicio4bv2.java

```java
package ejercicios_b;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class Ejercicio4bv2 {
	public static void main(String[] args) {
		Scanner sc = null;
		File fichero = new File("ficheros/alumno_notas.txt");
		
		try {
			sc = new Scanner(fichero);
			
			// Leer el contenido del fichero y procesarlo
			ArrayList<String> lineas = new ArrayList<String>();
			while(sc.hasNextLine()) {
				String linea = sc.nextLine();
				lineas.add(linea);
			}
			
			// Nombre, Apellido y media
			ArrayList<String[]> datosAlumnos = new ArrayList<String[]>();
			
			for (String linea : lineas) {
				String[] datos = linea.split(" ");
				
				String[] datoAlumno = new String[3]; // Nombre, Apellido y Media
								
				double suma = 0;
				for (int i = 2; i < datos.length; i++) {
					suma += Double.parseDouble(datos[i]);
				}
				
				double media = suma / (datos.length - 2);
				
				datoAlumno[0] = datos[0]; // Nombre
				datoAlumno[1] = datos[1]; // Apellido
				datoAlumno[2] = Double.toString(media); // Media
				
				datosAlumnos.add(datoAlumno);
			}
			
			for(String[] dato : datosAlumnos) {
				System.out.print(dato[0] + " " + dato[1] + " " + dato[2]);
				System.out.println();
			}
			
			//Collections.sort(datosAlumnos, new AlumnosMediaComparator());
			
			
			Collections.sort(datosAlumnos, new Comparator<String[]>() {
				public int compare(String[] alumno1, String[] alumno2) {
					
					return Double.compare(Double.parseDouble(alumno2[2]), 
							Double.parseDouble(alumno1[2])) ;
				}
			});
			
			
			System.out.println("----------ORDENADO------------------");
			for(String[] dato : datosAlumnos) {
				System.out.print(dato[0] + " " + dato[1] + " " + dato[2]);
				System.out.println();
			}
		
		} catch (FileNotFoundException e) {
			System.out.println("ERROR. Fichero no encontrado.");
		} finally {
			if (sc != null)
				sc.close();
		}
	}
}
```

### 📄 AlumnosMediaComparatorV4.java

```java
package ejercicios_b;

import java.util.Comparator;

public class AlumnosMediaComparatorV4 implements Comparator<Alumno> {

	@Override
	public int compare(Alumno alumno1, Alumno alumno2) {
		return Double.compare(alumno2.calcularMedia(), alumno1.calcularMedia());
	}

}
```

### 📄 AlumnosMediaComparatorV3.java

```java
package ejercicios_b;

import java.util.Comparator;

public class AlumnosMediaComparatorV3 implements Comparator<Alumno> {

	@Override
	public int compare(Alumno alumno1, Alumno alumno2) {
		return Double.compare(alumno2.calcularMedia(), alumno1.calcularMedia());
	}

}
```

### 📄 AlumnosMediaComparatorV2.java

```java
package ejercicios_b;

import java.util.Comparator;

public class AlumnosMediaComparatorV2 implements Comparator<Alumno> {

	@Override
	public int compare(Alumno alumno1, Alumno alumno2) {
		return Double.compare(alumno2.calcularMedia(), alumno1.calcularMedia());
	}

}
```

### 📄 Alumno.java

```java
package ejercicios_b;

import java.util.ArrayList;

public class Alumno {

	private String nombre;
	private String apellido;
	private ArrayList<Double> notas;
	//private double media;
	
	public Alumno(String nombre, String apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.notas = new ArrayList<Double>();
	}
	
	public void anyadirNota(double nota) {
		notas.add(nota);
	}
	
	public double calcularMedia() {
		
		double suma = 0;
		for (double nota : notas) {
			suma += nota;
		}
		
		return suma / notas.size();
	}
	
	public String getNombre() { 
		return this.nombre;
	}
	
	public String getApellido() { 
		return this.apellido;
	}
	
	@Override
	public String toString() {
		return this.nombre + " " + this.apellido + " " + this.calcularMedia();
	}
}
```

---

## 14.3 Ejercicios A

V2.13.03.24 A. Ejercicios Nota - Debes tratar las excepciones que correspondan en cada caso. Puedes consultar las excepciones de cada método del paquete java.io en la documentación oficial. - En algunos casos deberás consultar el manejo de Strings. Ejercicio 1a. Escribe un programa que muestre la lista de ficheros y directorios de una ruta del sistema introducida por el usuario. El programa mostrará el contenido del directorio, si existe, y volverá a pedir otra ruta al usuario; terminará cuando el usuario introduzca una ruta vacía.

Ejercicio 2a. Amplía el programa anterior para que pida al usuario una extensión de fichero concreta (por ejemplo, “.txt”) y muestre todos los ficheros del directorio dado con esa extensión. Crea y utiliza un método llamado ArrayList<String> filtrarPorExtension(File fichero, String extensión) que se encargará de filtrar la ruta según la extensión pasada en el parámetro. Nota: el usuario pasa la extensión sin el punto (.) Ejercicio 3a. Escribe un programa en Java que lea un archivo llamado "datos.txt" línea por línea e imprima cada línea en la consola. Usa la clase Scanner.

Ejercicio 4a. Escribe un programa en Java que lea un archivo llamado " datos.txt" palabra por palabra e imprima cada palabra en la consola. Usa la clase Scanner. Ejercicio 5a. Escribe un programa en Java que lea un archivo CSV llamado "datos.csv" que contiene productos de un supermercado en formato CSV (valores separados por comas). Utiliza la clase Scanner con el delimitador "," para leer cada valor por separado y luego imprime cada valor en la consola. Debes tener en cuenta que pueden haber espacios entre la coma y la cadena. Por ejemplo: “fruta,pasta,arroz, leche, pan” Ejercicio 6a. Escribe un programa que diga cuántos párrafos tiene un fichero de texto. Además, debe mostrar una lista con el número de párrafo y la cantidad de letras que tiene el párrafo correspondiente. Nota: los párrafos están separados por un retorno de carro. Primero hazlo con la clase Scanner y luego con las clases FileReader/BufferedReader.

---

## 14.4 Ejercicios B

V2.13.03.24 B. Ejercicios Nota - Debes tratar las excepciones que correspondan en cada caso. Puedes consultar las excepciones de cada método del paquete java.io en la documentación oficial. - En algunos casos deberás consultar el manejo de Strings estudiados en la unidad 5 Ejercicio 1b. Escribe un programa que vaya pidiendo frases por teclado (separadas por Intro) y que las vaya escribiendo en un archivo de texto. Se guardará cada frase en una línea. El programa terminará cuando se introduzca la palabra Fin, que no se escribirá en el fichero.

Ejercicio 2b. Escribe un programa que simula la agenda de teléfonos. El programa va pidiendo nombre y teléfono y los guarda el un fichero, un par de valores por línea. Por ejemplo, fichero podría quedar así: Anakin-612428333 Leia-683293841

Ejercicio 3b. Implementa un programa que muestre por pantalla los valores máximos y mínimos del archivo ‘numeros.txt’ Ejercicio 4b. El archivo ‘alumnos_notas.txt’ contiene una lista de 10 alumnos y las notas que han obtenido en cada asignatura. El número de asignaturas de cada alumno es variable. Implementa un programa que muestre por pantalla la nota media de cada alumno junto a su nombre y apellido, ordenado por nota media de mayor a menor.

---

## 14.5 numeros

28159058 18662885 20440495 57199674 46393726 89883908 9276007 73021540 87447866 78968920 784359 75390275 98165448 74360364 6579597 20308561 43544573 75999222 66135946 84363559 11982151 320985 7139229 33181657 72090912 86655924 20823079 73153812 79917842 49374152 54588583 15237200 69443175 71790215 79487400 40599348 76489524 18162866 93304348 88304451 6578703 30876076 43943163 56846166 27639717 63239591 78896106 69052092 97569001 7462029 91524834 83762849 73601332 38003406 96261018 78936683 81230081 35173464 4762559 69002427 28936193 77486505 16253919 85009935 68325639 19190073 67248386 60812807 40887210 19360161 43687208 47450419 66462020 39413625 54417226 33227065 13359640 26740084 16924171 45450071 99401040 40116888 22065270 99758542 3420539 52979978 85949477 34688330 95118734 52569285 68082338 1397853 94135445 35298155 70390069 52273957 33076310 85672439 57949860 60184339 46175868 13224115 7762860 70829238 92472111 76724509 54674618 1041867 40058802 74826914 99003566 42895291 79948612 87790618 31709725 43971980 5037324 93679750 51154363 5722906 54548075 54956502 50194012 60127034 85236251 24175282 34197924 69321734 45746127 85235639 7102038 83548107 8662512 84124682 6928754 77385602 89962038 40027109 47329584 79322106 6418032 81258185 70315000 71857896 32027509 49663639 43892120 47669254 5946519 42283542 75859491 11732859 70426871 16360011 88313924 65224736 93602993 41162787 2458188 2715138 64030032 90827251 39666352 88279578 5951258 3772100 67037495 93382859 15727954 8077975 20058488 26805521 2159786 50397659 1572305 62100595 45279684 53715187 38622514 74581186 77209784 93134591 98607212 82257508 10286193 95654428 93998471 95741913 42305099 68301481 8723699 46722253 42473340 55482610 15208503 35042153 85977222 14636299 63049869 60972605 13005821 11747330 39543559 89706807 4257969 5249972 38684565 16925061 90809771 33745405 608215 4383850 30632126 7659301 54626100 24617785 45721395 57465087 65452770 15663381 23123905 41211765 82181560 76928897 25406891 91410105 88516180 19316857 20841855 55773976 36207682 36341957 27001153 53720703 78645139 62759702 92440386 10787954 46216648 86116828 19327864 3588534 32508603 97971229 46164533 27779954 2516954 34308160 98694332 45296002 62852109 26400727 8945685 22504231 97485734 59806585 29335469 45934499 95427126 45911307 82689221 96818669 50015821 54882902 21006506 90897284 24521090 11789691 46128116 17537398 27811676 82130717 98801675 80672224 92865583 87669533 81953288 20487488 58228476 65742462 57229931 82647897 55442525 64089569 68030649 99334809 70842599 51621585 67767709 82965248 13292535 72268118 78942215 83587897 87779590 88760561 72264005 57709729 54284463 35877385 20846726 78383199 92145652 77859995 81951713 19621257 88357902 108227 15169856 41499099 64495790 98729528 95136083 70396203 84422444 90776532 6569530 48487150 94540660 58093463 5821940 69975325 70919003 91871179 66119109 7484664 66675024 47786731 14635648 844855 50983365 9254494 84848665 59191448 10170295 54145361 39238560 98844779 30491381 5511843 86362412 60891605 19874535 29453194 77603615 95525565 48023367 17881720 85088952 1651277 50059311 67507639 5465675 29299699 82897962 46647878 69547766 86275040 42036400 61623991 87269814 92362840 9185299 78109222 98728355 76310249 30351982 22889585 68981443 57403189 47222621 11153990 5180393 42418097 79992810 6391234 42212292 72269713 71227244 96538097 39800008 7994250 9536955 84457409 70054963 13059860 1337923 56307780 19018561 76435198 71255528 45181723 86639694 74824531 88715892 6314087 43145113 71932411 57841932 12485098 58633278 9207375 40705384 38521579 47681049 66216727 70376778 56067557 76717888 60841442 2760747 839349 39860951 4699748 47561827 78697540 29884792 96937986 94274230 74799425 86336786 8083183 21164499 82885663 20353809 41463806 3800021 85212464 71685077 3545934 10340565 16301065 21558061 22010830 96488725 36291354 76501847 38198911 35046970 34470929 49248248 97301519 7879418 31837298 21805179 77007530 6032709 30491054 16044384 24049896 82411682 12014327 87682395 6733886 92827139 86804975 153430 23648553 49095625 34738193 6356084 66062112 37445700 13156544 34302163 67304134 10715722 32317677 70065127 92295320 3951653 91643060 10953216 20151866 83976936 81445491 6779888 58775271 23816199 86393596 73386039 77568432 68343504 99896068 10487209 75279611 80261448 76034464 98463813 90324036 17062251 27885215 84664745 72289238 28091321 27289820 11851482 64627702 25700253 53055171 68040368 32209497 24539265 9727628 61863133 13543065 20180856 94817516 92351830 75932287 50107666 53147383 27174597 11868132 40714166 37448220 23624183 81871316 27854700 91955152 69673112 26523229 34818485 28860472 37580569 92321234 48376743 1847335 69199935 57951952 33215235 97383818 50578952 99262173 76385526 78408576 77000129 64160712 23706805 32378129 67924792 3616283 32927106 72669668 39103085 62161200 64625471 51481335 39155447 70300908 65091202 82005609 42299695 58622820 36055110 51728367 73338431 57535496 86969136 33428321 2182958 56642573 1364123 50265500 49455365 51998440 86374998 96590017 83135169 46933796 30082092 62966133 23282832 10587839 71196943 68882464 24161313 42903892 71656292 98696112 39596417 60302783 16890179 75167531 85124940 35742283 7220287 91796811 54198425 47640288 86967729 38193704 59493409 97529695 38141126 93927346 76474395 80384794 82406361 60060653 47771360 88906343 80426895 41921211 59875477 41938733 50458090 82552353 3032954 9855081 77843880 94486841 92362714 38282581 57911725 90964342 7449082 97018332 70946917 41604221 44744301 39149499 17233806 69075025 927927 45285742 90025904 80654160 19962761 80383679 40188059 91824335 24452836 59675916 83421459 98713223 47978677 65204865 74484202 3098585 20237247 90704390 9795241 26216644 50120428 46996748 49993745 75566307 58257748 21242263 52266774 82221181 44834950 27745063 21575185 37039944 16907498 76226568 88002027 85237803 83662700 91373017 28420435 23582545 98312546 33563204 10104990 11684730 46169588 48911143 76175847 57099949 93110489 95278510 36288759 53027363 13015501 40610284 9844209 78802572 39925840 89357223 25125363 8130529 73467508 31417901 19751145 14140396 23932299 10025295 82874221 97328959 5623366 69115400 65349617 58802575 23958507 58045132 75298597 94776217 45190981 22034312 74526931 46011703 65240080 71329860 45046900 72229781 49175380 98318320 97763289 5343403 3052180 43752000 55514240 37025916 13476926 81329163 77668592 44411690 75818169 17642906 46516856 81829503 18027310 73487404 17538208 8124510 38879634 77851770 80479937 15882602 68585598 39075141 57139823 45469587 36735233 64209 91957367 41663377 4994683 56087665 56567677 64624767 67450292 84445549 9699376 8765436 22672302 81398295 74358826 85648618 10035863 37298153 33922910 21769034 13487702 35600323 96631541 43307834 77708887 56948811 61812119 41108877 56251713 99242026 13844780 74184341 59032157 78567441 72109268 31408002 10785151 94190424 3642744 88667773 65217539 6134006 92701788 72976704 72170449 28782088 76039646 33859784 28871023 34804461 30998981 28945749 26478822 4119426 30055194 63307620 85353436 720831 25491460 69183033 36096214 87911443 53059878 99999999 65665426 99754309 43908395 11372810 51116159 35160001 66444522 47117788 68576465 390998 65702024 20121945 13788263 36877278 76868719 34106662 27986917 47952848 9154087 51053714 28672643 23410845 60727878 53919191 72109738 16179828 87145334 51366892 54534556 42508541 75613759 89967441 22804216 87952613 58244120 89275980 27569793 48921136 36279490 63602151 93261767 97720426 36934456 53107101 76455530 71510637 411811 23938306 27506949 29242133 63240316 92937339 32337254 68443822 69271837 231034 80616071 49092231 15638851 84549928 60374175 29287368 95568035 61940070 15013674 97424865 51012572 10479126 47013991 74547177 46554428 65697705 342714 98473224 56124435 96170991 25550261 80651537 53756780 75967328 82993212 32901638 12640531 16435964 386046 93244870 41120626 42176009 83647753 27092174 15349688 87695658 65592558 70620828 19076662 21359264 7291243 967881 79951453 94574174 39610551 13383972 67076711 41292397 69754780 23523128 77176396 87358421 26797658 13624763 34284028 88348370 54107105 21378464 32000243 7016198 70017257 76064237 31804827 96576742 73983663 6399688 75441053 19701128 71868291 31857285 47982932 43849961 16439614 28743352 19694449 31662268 85613795 93500052 12135131 1408928 3646673 7173389 89934368 11973109 88030156 77408578 60184952 43094475 19271824 12933155 32379013 84852009 60459827 60894168 14950819 75259970 32705083 44831965 5700839 55395481 78716211 74718314 65020733 71985751 68767926 94455061 4975653 96568555 80149896 51154207 74504613 81351668 51798497 23662943 86100791 36696910 28790089 66620600 54736877 48732994 55715689 44161913 93393317 96422345 64504342 2272924 16017598 55336395 87893184 60543577 29086584 7745668 49845645 87741571 13422769 46536524 30105820 25028700 18943630 60993956 77084944 72937108 56440507

---

## 14.6 alumnos notas

Joanna Rogers 10 0 8 6 2 9 Michele Poole 5 9 8 5 4 9 8 2 Toni Harper 10 10 3 4 10 Troy Walters 5 10 1 4 10 10 9 2 3 6 Patrick Santos 5 4 9 8 Gabriel Moreno 6 4 4 4 Malcolm Lindsey 0 3 5 9 10 9 2 Gilbert Santiago 6 7 9 3 5 0 Ron Garza 7 8 5 3 Vivian Chambers 8 2 6 0

---

## 14.7 Ejercicios C

V2.13.03.24 C. Ejercicios Nota - Debes tratar las excepciones que correspondan en cada caso. Puedes consultar las excepciones de cada método del paquete java.io en la documentación oficial. - En algunos casos deberás consultar el manejo de Strings. Ejercicio 1c. Haz un programa que genere un fichero con algunos números enteros, lo cierre y lo vuelve a abrir y muestre el contenido. A continuación, le añadirá más enteros y que vuelva a mostrar el fichero. Para ello

• Haz el método generarFicheroEnteros, al que se le pase un nombre de fichero y una cantidad, y guardará en dicho fichero tantos números como la cantidad indicada. Los números se generarán de forma aleatoria. • Haz el método mostrarFicheroEnteros al que se le pasa como parámetro un fichero y debe mostrar todos los números del fichero (sabemos que son enteros) por pantalla, separados por un tabulador.

Ejercicio 2c. Escribe un programa que permita leer y escribir un fichero binario con información de empleados de una empresa. Cada empleado tendrá los siguientes datos: • Nombre completo (cadena de caracteres) • Edad (entero) • Salario (double) El programa deberá permitir al usuario elegir entre dos opciones

• Crear un nuevo fichero de empleados y agregar información de empleados al mismo. • Leer un fichero existente de empleados y mostrar en pantalla la información de todos los empleados en formato legible. Cuando se seleccione la opción 1, el programa deberá solicitar al usuario que ingrese la información de un nuevo empleado. La información ingresada deberá ser validada antes de ser escrita en el fichero binario. Si el fichero no existe, deberá crearse. Si ya existe, la información del nuevo empleado deberá ser agregada al final del fichero.

Cuando se seleccione la opción 2, el programa deberá solicitar al usuario que ingrese el nombre del fichero que se desea leer. Si el fichero existe y contiene información de empleados, esta información deberá ser leída y mostrada en pantalla de forma legible. Deberás tres clases

• Empleado: clase serializable con los atributos necesarios (nombre, edad y salario), el constructor y los getters/setters.

### UNIDAD 9: GESTIÓN DE EXCEPCIONES

V2.13.03.24 • FicheroEmpleados: clase que manejará el fichero de los empleados. Como atributo tendrá el nombre de fichero, y dos métodos: o public void agregarEmpleado(Empleado empleado): se encargará de añadir un objeto (serializará) Empleado al final del fichero binario.

o public void mostrarEmpleados(): se encargará de leer y mostrar en pantalla todos los objetos Empleado (deserializará) almacenados en el fichero binario. • Ejercicio10Test: contiene el método main. Mostrará el menú y se encargará de pedir el ingreso de datos Ejemplo de salida

Introduce el nombre del fichero de empleados: empleados.dat

Menú

### 1. Agregar empleado

### 2. Mostrar empleados

### 3. Salir

Opción: 1

Nombre: Anakin Edad: 40 Salario: 1.200

Empleado agregado correctamente.

Opción: 2

Nombre Edad Salario Anakin 40 1200.0

Ejercicio 3c. Queremos tener una agenda telefónica en la que podamos guardar el nombre y teléfono de un contacto. Realiza un programa con un bucle y un menú con las siguientes opciones. Evidentemente debes crear una clase Contacto

### 1. Dar de alta un contacto

### 2. Consultar un contacto por su nombre

### 3. Saber la cantidad de amigos grabados

### 4. Mostrar toda la agenda por pantalla

### 5. Borrar un contacto

### 6. Modificar los datos de un contacto

### 7. Importar datos

### 8. Exportar datos

V2.13.03.24 Las opciones más importantes de este ejercicio, en cuanto al uso de ficheros, son las de importar y exportar datos. La opción de importar datos solicitará un nombre de fichero donde están los contactos y lo pasará a ArrayList. Y la opción de exportar datos pedirá un nombre de fichero guardará allí los datos de ArrayList. El resto de las opciones será a través de la gestión del ArrayList.

> **⚠️ Nota: en este ejercicio debes considerar la clase Conta...**
> Nota: en este ejercicio debes considerar la clase Contacto como serializable y utilizar la clase ObjectInputStream y ObjectOutputStream.

---

## 14.8 Ejercicios D

Programación

### UD 10: Lectura y escritura de información

- Ejercicios

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS Ficheros Programación

Ejercicio 1 Construir un programa Java que reciba como argumento de línea de comandos la ruta a un fichero y que muestre por pantalla información básica sobre el mismo (como mínimo el nombre del fichero, directorio donde se encuentra y su tamaño expresado en kbytes).

Programación

Ejercicio 2

- Escribir un método estático que escriba en un fichero binario los números

del 1 al 999.

- Escribir un método estático que lea el fichero generado por el programa

del ejercicio a) y sume dichos números. Comprobar que el resultado es correcto implementando un bucle adicional que realice dicha suma. Programación

Ejercicio 3 Construir un programa que escriba en un fichero de texto los números del 1 al 999 y posteriormente los vuelva a leer de ese fichero para realizar la suma de los mismos. Verificar que el resultado es correcto. Comprobar la diferencia de tamaños entre el fichero generado en el ejercicio 2 y el generado por este ejercicio.

Programación

Ejercicio 4 Construir un programa que permita buscar palabras en un fichero de texto. Se debe mostrar el número de línea y su contenido, para cada línea que contenga la palabra buscada. Programación

Ejercicio 5 Desarrollar un programa que permita eliminar todas las ocurrencias de una palabra dada en un fichero de texto. El programa recibirá como argumentos de línea de comandos la ruta al fichero así como la palabra en cuestión. Este código producirá automáticamente un nuevo fichero con la siguiente nomenclatura: Si el fichero de entrada se llama fichero.txt, el fichero generado se llamará fichero_2.txt.

Programación

Ejercicio 6 Escribir un método estático que reciba como entrada el nombre de un fichero de texto y devuelva estadísticas básicas sobre el mismo (como mínimo se debe incluir el número de palabras, el número de caracteres totales del texto y la longitud media de una palabra medida en número de caracteres).

Programación

Ejercicio 7 Guarda la información del cuadro en un fichero de texto. Recorre el fichero, ignorando las líneas que comienzan por “#” y mostrando por pantalla la información correspondiente. Crea un archivo de texto por cada línea sin #, con el nombre correspondiente y que contenga el tipo de informe en la primera línea y el resultado de la operación aritmética, en la segunda.

Programación

```java
# Recorre el fichero, ignorando las líneas que
# comienzan por “#” y mostrando por pantalla
# la siguiente información el resultado
# a modo de ejemplo :
# “Estamos trabajando con informes_Ventas y creamos totalventas.txt que contiene
```

479232” informes_Ventas,totalventas.txt,8*8*78*96 informes_Compras,totalcompras.txt,4*8*69+12 informes_Finales,totalfinales.txt,7*8*54*65 informes_Usuarios,totalusuarios.txt,43+58+98

Ejercicio 8 Almacenamiento de objetos en ficheros Crear las clases siguientes para guardar y obtener la información de objetos. • Amigo • Lectura • Escritura Utiliza el código fuente del apartado 5 de los apuntes del tema y comprueba su correcto funcionamiento. Programación

Ejercicio 9 Agenda de contactos A partir de las clases que puedes descargar en AULES, crea una aplicación para gestionar una agenda de contactos. Debes guardar los contactos en un fichero binario en forma de objetos. Programación

Ejercicio 10 Escribir un método estático que reciba como entrada el nombre de un documento XML y muestre por pantalla la información. Crear las clases que correspondan para guardar la información en objetos. Se utilizarán los documentos XML del módulo Lenguaje de Marcas.

Programación

---

## 14.9 Ejercicios - AyR

Programación

- Ejercicios

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS Ampliación Programación

Ejercicio 1 Una estación meteorológica necesita gestionar las medidas diarias de la pluviosidad en una determinada zona a lo largo de un año con las siguientes características: Se ha decidido construir una clase, denominada Pluviometro que tenga como atributos dos arrays, uno para almacenar el número de días de cada mes y otro para guardar las medidas de pluviosidad de dichos días.

Por comodidad para el programador se ha decidido prescindir de usar la posición 0 de los arrays, para que el índice coincida con el número de mes o el número de día, de manera que las posiciones [0] de los arrays no se usarán. diasM es un array de 13 int tal que diasM[i] es el numero total de días del mes i siendo 1<=i<=12, de tal manera que como se ha comentado, dia[0] no se usará.

lluvia es un array bidimensional con 13 filas. lluvia[i] es un array de diasM[i]+1 valores de tipo double (dicho de otra manera su longitud es lluvia[i].length==diasM[i]+1) tal que lluvia[i][j] representa la medida del día j del mes i, siendo 1<=i<=12 y 1<=j<=diasM[i]. Las posiciones lluvia[0][j] y lluvia[i][0] no se usarán.

Programación

Ejercicio 1 Se pide escribir un programa con la siguiente funcionalidad

- leer los datos de pluviosidad desde un fichero pluvio.dat en el que cada línea tiene el

siguiente formato: dia mes medida ... y almacenarlos en la matriz lluvia, validando los valores de día y mes leídos. Las medidas no tienen por qué estar ordenadas cronológicamente. Un ejemplo de algunas líneas del fichero es el siguiente: ... 24 11 312.12 15 3 6.756 14 8 12.5 15 1 31.3 16 3 212.0 17 3 87.9 18 3 3.56 23 6 11.11 ...

Programación

Ejercicio 1

- Dada la matriz lluvia y cierto mes m, determinar la cantidad máxima llovida en un

solo día a lo largo de dicho mes así como el día en que esta se produjo.

- Dada la matriz lluvia, cierto mes m y una cantidad lt de litros, determinar un día de

dicho mes en que la pluviosidad haya superado dicha cantidad. Si no existe, indicarlo con un mensaje.

- Dada la matriz lluvia y cierto mes m, determinar si hubo al menos tres días

consecutivos en dicho mes con una pluviosidad mayor a 100 litros cada uno de ellos.

- Mostrar por pantalla las medidas del fichero de entrada pluvio.dat pero ordenadas

cronológicamente. Programación

Ejercicio 2 Se tienen los siguientes datos referentes a la última vuelta ciclista local: ciclistas: array con los nombres de cada ciclista. tiempos: matriz en la que en cada fila i se tienen los tiempos de ciclistas[i] en cada una de las cinco etapas, el tiempo máximo empleado en una etapa es 180 minutos (se consideran valores enteros).

Se pide escribir un programa con la siguiente funcionalidad

- diseñar la clase VueltaCiclista que tenga como atributos los arrays anteriormente

mencionados.

- leer los datos de un fichero de texto con el formato

no de participantes nombre t1 t2 t3 t4 t5 otronombre t1 t2 t3 t4 t5 ... Programación

Ejercicio 2

- dado el nombre de un ciclista, mostrar por pantalla los tiempos empleados por este

en cada una de las etapas si ha participado o el mensaje “No ha participado en esta vuelta” en caso contrario.

- mostrar por pantalla el nombre del ciclista ganador de la vuelta y el tiempo que este

empleó. Gana la vuelta el ciclista cuya suma de tiempos de las cinco etapas es menor.

- mostrar por pantalla los ciclistas y sus tiempos ordenados según el tiempo

empleado. En todos los casos, los tiempos se mostrarán en horas y minutos. Programación

Ejercicio 3 Para resolver el problema anterior desde la perspectiva de la programación orientada a objetos, se plantea la siguiente organización de la información, que deberáser implementadaadecuadamente: Una clase Ciclista, mediante la que se mantendrá información relativa a cada uno de los mismos, en particular su nombre así como sus tiempos, array de 5 elementos enteros en los que, en cada uno de ellos, se mantendrá el tiempo empleado porel ciclista en cubrir la etapa correspondiente (el tiempo máximo empleado en una etapa es 180 minutos). Se deberá diseñar esta clase definiendo, además, los métodos constructores, consultores y modificadores que se consideren pertinentes.

Una clase VueltaCiclista que contendrá un array ciclistas, de elementos de la clase Ciclista. Se considerará que el array tiene los elementos estrictamente necesarios; esto es, no existen posicionesdelarray no ocupadas. Se deberá diseñar esta clase definiendo, además de los métodos que se consideren pertinentes (tales como constructores, etc.), métodos para almacenar y recuperar los datos de una VueltaCiclista en y desde un fichero de objetos (esto es, usando ObjectInputStream y ObjectOutputStream,así como los métodosnecesariospara, al igual que en el problemaanterior

Dado el nombre de un ciclista, mostrar por pantalla los tiempos empleados por este en cada una de las etapas si ha participado o el mensaje “No ha participado en esta vuelta” en caso contrario. Mostrar por pantalla el nombre del ciclista ganador de la vuelta y el tiempo que este empleó.

Gana la vuelta el ciclista cuya suma de tiempos de las cinco etapas es menor. Mostrar por pantalla los ciclistas y sus tiempos ordenadossegúnel tiempo empleado. Programación

Ejercicio 4 Si se han resuelto los dos problemas anteriores, se está en posición de discutir las mejoras (y tal vez inconvenientes) que haya podido introducir la solución orientada a objetos. Se pide señalar las diferencias más significativas entre las dos soluciones al problema de la vuelta ciclista, desde el punto de vista del almacenamiento y recuperación de la información en memoria externa.

Tratar de responder a la cuestión planteada, determinando cómo la posible variación de elementos en las clases, altera la organización de los ficheros y/o de las operaciones encargadas de su lectura o escritura. ¿Cuál de las organizaciones de los datos parece más cómoda para trabajar si tiene que sufrir modificaciones posteriores?

Programación

EJERCICIOS Refuerzo Programación

Ejercicios Programación

Página 200: Ejercicios 1 y 2 Página 201: Ejercicios del 3 al 6
