[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT6 Completa](../ut6-fitxers-streams.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut06/ut06retos.html)

[⬅️ Anterior: Actividades prácticas UT6](../ut06/ut06actividades.md) | [➡️ Següent: Proyecto Intermodular UT6](../ut06/ut06pi.md)

---

# Retos


> 💻 **Empaquetar retos**
>
> Empaqueta las actividades, dentro de la carpeta **`ut06`**, en la carpeta **`retos`**.
>
> Las actividades programadas en esta sección **Retos** no son obligatorias.


### Reto 01

Reto **`R01_leeNombre`**

Escribir un programa que solicite al usuario su nombre y, utilizando directamente `System.in`, lo lea de teclado y muestre por pantalla un mensaje del estilo "*Su nombre es Miguel*".  Recuerda que `System.in` es un objeto de tipo `InputStream`. La clase `InputStream` permite **leer bytes** utilizando el método `read()`. Será tarea nuestra ir construyendo un `String` a partir de los bytes leídos. Prueba el programa de manera que el usuario incluya en su nombre algún carácter “extraño”, por ejemplo el símbolo "€" ¿*Funciona bien el programa*? ¿*Por qué*?

### Reto 02

Reto **`R02_leerNombre`**

Repite la *Actividad 01* utilizando un `BufferedReader` asociado a la entrada estándar. La clase `BufferedReader`, está orientada a leer caracteres en lugar de bytes. ¿Qué ocurre ahora si el usuario introduce un carácter "extraño" en su nombre?

### Reto 03

Reto **`R03_sumarEdades`**

Escribir método `void sumaEdades()` que lea de teclado las edades de una serie de personas y muestre cuánto suman.  El método finalizará cuando el usuario introduzca una edad negativa.

Escribir un método `main` que llame al método anterior para probarlo.

- Modificar el método `main` de forma que, antes de llamar al método `sumaEdades`, se cambie la entrada estándar para que tome los datos del fichero `edades.txt` en lugar de leerlos de teclado.

### Reto 04

Reto **`R04_leerByte`**

`System.in` (`InputStream`) está orientado a lectura de  bytes. Escribe un programa que lea un byte de teclado y muestre su valor (int) por pantalla. Pruébalo con un carácter “extraño”, por ejemplo ‘€’.

### Reto 05

Reto **`R05_leerCaracter`**

`InputStreamReader` (`StreamReader`) está orientado a caracteres. Escribe un programa que lea un carácter de teclado usando un `InputStreamReader` y muestre su valor (`int`) por pantalla. Pruébalo con un carácter “extraño”, por ejemplo ‘€’. ¿Se obtiene el mismo resultado que en el reto anterior?

### Reto 06

Reto **`R06_concatenar1`**

Escribe un programa que dados dos ficheros de texto `f1` y `f2` confeccione un tercer fichero `f3` cuyo contenido sea el de `f1` y a continuación el de `f2`.

### Reto 07

Reto **`R07_nombreApellidos`**

Implementa un programa que genere aleatoriamente nombres de persona (combinando nombres y apellidos de `usa_nombres.txt` y `usa_apellidos.txt`). Se le pedirá al usuario cuántos nombres de persona desea generar y a qué archivo **añadirlos** (por ejemplo `usa_personas.txt`).

### Reto 08

Reto **`R08_signoZodiaco`**

Programar un Servidor que reciba una fecha (previamente validada por el cliente) y nos diga cual es nuestro signo del zodíaco occidental y el animal que corresponde en el zodíaco oriental (animales).

### Reto 09

Reto **`R09_cuentaLineas`**

Escribe un programa que, sin utilizar la clase `Scanner`, muestre el número de líneas que contiene un fichero de texto. El nombre del fichero se solicitará al usuario al comienzo de la ejecución.

### Reto 10

Reto **`R10_diccionario`**

Implementa un programa que cree la carpeta `Diccionario` con tantos archivos como letras del abecedario (`A.txt`, `B.txt`… `Z.txt`). Introducirá en cada archivo las palabras de `diccionario.txt` que comiencen por dicha letra.

### Reto 11

Reto  **`R11_cuentaPalabras`**

Escribe un programa que, sin utilizar la clase `Scanner`, muestre el número de palabras que contiene un fichero de texto. El nombre del fichero se solicitará al usuario al comienzo de la ejecución.


> 📝 **Sugerencia**
>
> Lee el fichero, línea a línea y utiliza la clase `StringTokenizer` o bien el método `split` de la clase `String` para averiguar el nº de palabras.


### Reto 12

Reto **`R12_busquedaEnPi`**

Implementa un programa que pida al usuario un número de cualquier longitud, como por ejemplo "1234", y le diga al usuario si dicho número aparece en el primer millón de decimales del nº pi (están en el archivo `pi-million.txt`). No está permitido utilizar ninguna librería ni clase ni método que realice la búsqueda. Debes implementar el algoritmo de búsqueda tú.

### Reto 13

Reto **`R13__censura`**

Escribir un programa que sustituya por otras, ciertas palabras de un fichero de texto. Para ello, se desarrollará y llamará al método `void aplicaCensura(String entrada, String censura, String salida)`, que lee de un fichero de entrada y mediante un fichero de censura, crea el correspondiente fichero modificado. Por ejemplo:

Fichero de entrada:

```java
En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero
```

Fichero de censura:

```java
lugar sitio
quiero debo
hidalgo noble
```

Fichero de salida:

```java
En un sitio de la Mancha, de cuyo nombre no debo acordarme, no ha mucho tiempo que vivía un noble de los de lanza en astillero
```

> **Sugerencia**:  Valora la posibilidad de cargar el fichero de censura en un mapa o par clave, valor.

### Reto 14

Reto **`R14_concatenar2`**

Escribe un programa que dados dos ficheros de texto `f1` y `f2`, añada al final de `f1` el contenido de `f2`. Es decir, como la Actividad 06, pero sin producir un nuevo fichero.

### Reto 15

Reto **`R15_iguales`**

Escribir un programa que compruebe si el contenido de dos ficheros es idéntico. Puesto que no sabemos de qué tipo de ficheros se trata, (de texto, binarios, …) habrá que hacer una comparación byte por byte.

### Reto 16

Reto **`R16_calculosPersonas`**

Realizar un programa que lea la información del fichero `personas.dat` y muestre por pantalla la estatura que tienen de media las personas cuya edad está entre 20 y 30 años.

---

[⬅️ Anterior: Actividades prácticas UT6](../ut06/ut06actividades.md) | [➡️ Següent: Proyecto Intermodular UT6](../ut06/ut06pi.md) | [📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut06/ut06retos.html)
