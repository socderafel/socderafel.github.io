---
layout: default
title: "UT1 — IDE's y estilo de programación — Entorns de Desenvolupament | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT1 Completa"
prev_url: "../ut00/ut00actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT0"
next_url: "../ut01/ut0101.html"
next_label: "1.1 U2 - IDEs. Estilos de programación ➡️"
---

# 📘 UT1 — IDE's y estilo de programación (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**1.1 U2 - IDEs. Estilos de programación**](#ut0101) (o [obrir en pàgina individual ➡️](./ut0101.md) )
> - [**✍️ Activitats pràctiques UT1**](#ut01actividades) (o [obrir en pàgina individual ➡️](./ut01actividades.md) )

---

## 1.1 U2 - IDEs. Estilos de programación

> **🔗 Recurs Web: Tutorial de instalación de Eclipse (vídeo)**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?feature=shared&v=mAgYA5y9m2M) ↗️**](https://www.youtube.com/watch?feature=shared&v=mAgYA5y9m2M)

> **🔗 Recurs Web: Buenas prácticas de programación**
> [**🌐 Obrir recurs extern (https://github.com/damigarcia/standards/wiki/Buenas-Practicas-de-codificacion) ↗️**](https://github.com/damigarcia/standards/wiki/Buenas-Practicas-de-codificacion)

---

U2 - IDE’s. Estilo de codificación 1º DAW

Objetivos

- Qué se necesita para programar una aplicación?
- Qué es un IDE y cuales son los más importantes?
- Como saco máximo rendimiento a Eclipse?
- Qué estilos de programación existen y por qué?

Entornos de desarrollo

- ¿Qué es un entorno de desarrollo?
- Conjunto de procedimientos y herramientas
- Facilitan la labor del desarrollo de aplicaciones
- Integra herramientas de compilación, ejecución y testeo de aplicaciones
- Posee una interfaz de usuario (UI) que facilita su uso
- Permite la instalación de extensiones (plugins) que añaden nuevas funciones
- Para un lenguaje o para varios

Entornos de desarrollo

- Cuando no se dispone de un IDE, la codificación se realiza utilizando

un editor de texto del sistema.

- Cuando el IDE hace de editor de texto disponemos de ayudas como
- Syntax highlighting: palabras clave reconocidas con colores
- Code completion: reconoce el código y autocompleta
- Corrector de errores: capaz de reconocer errores de sintaxis

Entornos de desarrollo

- Además, el IDE incorpora herramientas que nos permiten compilar el

código y ejecutarlo de forma muy sencilla.

- Anteriormente, el proceso de compilado y ejecución era más

farragoso y delicado.

- javac MiClase.java ->compila y convierte de código fuente a código que

entiende la máquina virtual de Java. Da como resultado fichero MiClase.class

- java MiClase -> convierte el código compilado en código ejecutable por

nuestro ordenador y lo ejecuta por consola.

Programación sin IDE

- Hoy en día, como hemos estudiado, el proceso de compilación y

ejecución de un programa en Java se realiza íntegramente por y en el IDE.

- En el caso de no disponer de uno y querer compilar y ejecutar una

aplicación en Java, necesitaremos

- Java instalado (podemos asegurarnos ejecutando java -versión)
- Terminal

Programación sin IDE

- Arrancamos un terminal (independientemente del SO) y nos situamos

en la carpeta donde tenemos nuestro fichero .java.

Programación sin IDE

- Para la compilación utilizaremos la instrucción

javac nombreFichero.java

- Tras compilar se nos crea el fichero nombreFichero.class
- Para la ejecución (una vez compilado) utilizaremos la instrucción

java nombreFichero

Entornos de desarrollo

- Hoy en dia existen muchos entornos de desarrollo en el mercado.
- Eclipse: multiplataforma, open-source, fundado por IBM en 2001.
- Netbeans: multiplataforma, open-source, fundado por Sun

Microsystems en 2000.

Entornos de desarrollo

- IntelliJ: multiplataforma, open-source y desarrollado por JetBrains en 2019.
- Xcode: Mac, propietario y desarrollado por Apple en 2017
- Visual Studio: Windows y Mac, propietario y lanzado en 2017
- VSCode: NO es un IDE. Editor de código fuente vitaminado.
- Actividad

Eclipse

- Plataforma de desarrollo universal
- Libre
- Código abierto
- Multiplataforma (Windows, Mac, Linux)
- Extensible
- www.eclipse.org

Eclipse

- Para su instalación se necesita JRE (Java

Runtime Environment) instalado. Hoy en día lo incluye el propio Eclipse.

- Pasos para instalar
- Descomprimir la carpeta en una carpeta vacía o

instalar con asistente (dependiendo del SO).

Eclipse

- En primer lugar se elige la carpeta de trabajo o workspace donde se

guardarán los proyectos desarrollados.

Eclipse Navegadores: explorador de paquetes, jerarquía, etc Zona de edición Selector de perspectivas Paneles de mensajes: consola de ejecución, errores, etc

Eclipse

- Perspectivas (Window -> Perspective)
- Java: programar en Java
- Debug: debuguear en Java
- Vistas (Window -> Views)
- Abre nuevas vistas en el IDE
- Algunas interesantes: consola, problemas, buscar…

Eclipse

- Para crear un proyecto nuevo
- File -> New -> Java Project
- Se guarda en el workspace
- Utiliza el JRE indicado
- Diferentes carpetas para .java y .class
- Permet agrupar projectes

Eclipse

- También podemos abrir proyectos ya existentes o exportar el que

tenemos en nuestro workspace.

- File -> Import/Export
- En Java muchas veces se utilizan librerías externas para aportar

funcionalidades adicionales a los proyectos. Para importar librerías (ficheros .jar) a nuestro proyecto

- Project -> Properties -> Java Build Path -> Libraries-> Add external JAR’s

Eclipse

- Para crear elementos Java dentro de nuestro proyecto, como por

ejemplo una clase o una carpeta

- File->New XXX

Eclipse

- Para crear una clase

Eclipse

- La compilación y ejecución a través del IDE es muy fácil
- Una vez ejecutado, el resultado de la ejecución se muestra en la

consola inferior.

Eclipse

- En general, en programación existen dos tipos de errores, en

compilación y en ejecución.

- El IDE es capaz de detectar algunos de estos errores antes de compilar

por lo que nos avisa para que los solucionemos y evitar problemas.

Eclipse

- Dominar Eclipse nos facilitará mucho las tareas. Hay que exprimir las ayudas que

nos da

- Autocompletar: Ctrl + Espacio
- Sugiere una lista de alternativas tras un punto o cuando hemos empezado a escribir un método o

función.

- En el menú Source existen muchas utilidades las cuales es interesante aprenderse sus atajos
- Comentar
- Identar
- Formatear
- Añadir imports
- Generar getters y setters
- Generar constructor
- Refactorizar
- …

Eclipse

- Eclipse incluye un depurador de código que nos permite ver el

resultado de ejecución de las instrucciones paso a paso.

- Se estudia con más detalles en la unidad 4.
- Para lanzarlo, ejecutaremos la aplicación en modo debug

Estilo de codificación

- Al conjunto de instrucciones que conforman el lenguaje de

programación, se le llama código fuente.,

- En cualquier proyecto en el que trabaja un grupo de personas debe

haber unas normas de codificación y estilo.

- Estas normas facilitan las tareas de corrección y mantenimiento de los

programas, sobre todo cuando se realizan por personas que no lo han desarrollado.

Estilo de codificación

```java
import java.util.Scanner;
public class Suma {
public static void main
(String[] args){
int suma = 0;
int contador = 0;
```

while (contador < 10) { contador++; suma = suma + contador; }

```java
System.out.println("Suma => " +
suma);
}
}
import java.util.Scanner;
public class
```

Suma {

```java
public static
void main (String[] args){
int suma = 0; int contador = 0;
```

while (contador < 10) { contador++;

```java
suma = suma + contador; }
System.out.println("Suma => " + suma);
}
}
```

Estilo de codificación

- Cada fichero debe contener una sola clase

pública y debe ser la primera.

- Las clases privadas e interfaces se ponen

después de la clase pública.

- Toda clase debe empezar con un comentario

/**

- Nombre de la clase

*

- @version

*

- @since

*

- @author

* */

Estilo de codificación

- Cuando declaramos una clase o interface
- Comentario de documentación (/**…*/)
- Sentencia class o interface
- Variables estáticas en orden: públicas, protegidas y privadas
- Variables de instancia en orden: públicas, protegidas y privadas
- Constructor
- Métodos.

Estilo de codificación

- Muy importante la indentación del código
- Los niveles ayudan a leer mejor el código.
- Ctrl + mayus + f y Ctrl + i

Estilo de codificación

- Comentarios
- Deben contener solo información relevante para lectura y comprensión del

programa.

- 2 tipos
- Documentación: destinados a describir especificación del código. Describen clases,

métodos, constructores, etc

- Implementación: comentar algo acerca de la aplicación en particular

Estilo de codificación

- Declaraciones
- Una variable por línea
- Al inicio del bloque
- En clases
- No hay espacio entre nombre del método y paréntesis
- Llave de apertura “{“ se coloca en la misma línea que el nombre del método o clase
- Llave de cierra ”}” se coloca en una línea aparte

Estilo de codificación

- Las separaciones entre porciones de código deben atender a unas

reglas que ayudan a mejorar la legibilidad del código

- Dos líneas en blanco: entre clases
- Una línea en blanco
- Entre métodos
- Entre definición de variables locales y la primera instrucción
- Antes de un comentarios
- Entre secciones lógicas de un método

Estilo de codificación

- Los nombres que utilicemos para declarar variables, paquetes, clases

etc deben ser significativos.

- Existen 3 notaciones
- CamelCase
- camelCase
- snake_case
- kebab-case: Prohibida en Java

Estilo de codificación Regla Ejemplo paquetes todo en minúscula dominio clases empiezan con Mayúscula en singular Cliente variables en minúsculas (camelCase) cantidadTotal constantes en mayúsculas (snake_case) VALOR_PTAS métodos en minúsculas verbos en infinitivo asignarDestino()

Creación y seguimiento de trazas

- Cuando se presenta un problema de programación, es necesario

leerlo detenidamente y entenderlo bien antes de ponerse a escribir código.

- Para ello, muchas veces es necesario hacer uso de papel y boli.
- Todo buen programador, delante de su teclado, tiene una libreta.

Creación y seguimiento de trazas

- Cuando se presenta un problema de programación, es necesario

leerlo detenidamente y entenderlo bien antes de ponerse a escribir código.

- Para ello, muchas veces es necesario hacer uso de papel y boli.
- Todo buen programador, delante de su teclado, tiene una libreta.

Creación y seguimiento de trazas

- Además, cuando queremos entender por qué sale un valor

determinado o por qué nos está fallando el programa, es importante la realización de una traza.

- Las trazas sirven para ver el valor de las diferentes variables en

diferentes momentos de la ejecución de nuestra aplicación.

Creación y seguimiento de trazas

Creación y seguimiento de trazas

Creación y seguimiento de trazas

Creación y seguimiento de trazas

Creación y seguimiento de trazas

Creación y seguimiento de trazas

¿Dudas?

---

## ✍️ Activitats pràctiques UT1

> **✍️ Activitat Pràctica 1.1 — U2 A1**
> Unidad 2 – IDE’s. Estilos de programación.
>
> U2 – A1
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - No copies y pegues. Utiliza tus palabras
>
> ### 1. Crea un programa que muestre tu nombre y apellidos. Compílalo y
>
> ejecútalo utilizando un terminal y adjunta capturas del proceso y resultados.
>
> ### 2. Elabora una lista con algunos IDE’s online que soporten Java. Pruébalos
>
> e indica cual te parece más adecuado/intuitivo/mejor para programar y por qué. Puedes añadir capturas para reforzar tu argumento.

> **✍️ Activitat Pràctica 1.2 — U2 Grupal**
> ### 📄 U2_Grupal.pdf
>
> Unidad 2 – IDE’s. Estilos de programación.
>
> U2 – Grupal
>
> Instrucciones
>
> - Entrega en Aules la presentación en pdf o bien enlace a ella.
>
> ### 1. Elegid un IDE de la lista que aparece en las diapositivas y elaborad una
>
> pequeña presentación que abarque como mínimo los siguientes puntos
>
> - Instalación del IDE
> - Características principales
> - Creación de un programa básico
>
> Para ello, debéis apoyaros tanto en texto de las diapositivas como en capturas o ejemplos en vivo.
>
> ### 📄 grups.txt
>
> grupo 1 - Visual Studio 1-Carles 11-Santi 10-Camila
>
> grupo 2 - Visual Studio Code 5-David 14-Tomas 6-Joan
>
> grupo 3 - Intellij 13-Andreu 8-Héctor 16-Oscar
>
> grupo 4 - Netbeans 12-Melero 9-Barquero 4-Arnau
>
> grupo 5 - Eclipse 2-Victor 15-Jorge J. 3-Sergio
>
> grupo 6 - Netbeans 17-Jorge A. 7-Josep
>
> Eclipse Netbeans Intellij Visual Studio Visual Studio Code

> **✍️ Activitat Pràctica 1.3 — U2 A2**
> Unidad 2 – IDE’s. Estilos de programación.
>
> U2 – A2
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - No copies y pegues. Utiliza tus palabras
>
> ### 1. En base a lo aprendido y a los recursos sobre como escribir código con
>
> estilo que tienes en Aules, reescribe las siguientes porciones de código (utiliza eclipse para ello y asegúrate que el código además funciona).
>
> a)
>
> Unidad 2 – IDE’s. Estilos de programación.
>
> b)
>
> c)
