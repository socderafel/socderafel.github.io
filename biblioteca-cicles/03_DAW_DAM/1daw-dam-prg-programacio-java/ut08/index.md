---
layout: default
title: "UD4 — Programación Estructurada y Modular · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT8 Completa"
prev_url: "../ut07/ut0701.html"
prev_label: "⬅️ 3.1 Uso de estructuras de control"
next_url: "../ut08/ut0801.html"
next_label: "4.1 Programación estructurada y modular ➡️"
---

# 📘 UD4 — Programación Estructurada y Modular (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**4.1 Programación estructurada y modular**](./ut0801.md)
- [**4.2 Programación estructurada y modular**](./ut0802.md)

---

# 4.1 Programación estructurada y modular

> **📌 🏷️ Apunt de la Unitat**
> # BLOQUE 2: Programación básica en Java

> **📌 🏷️ Apunt de la Unitat**
> #### Contenido de la unidad

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

> **📌 🏷️ Apunt de la Unitat**
> #### Ampliación y refuerzo

> **📌 🏷️ Apunt de la Unitat**
> #### Otros Recursos

---

### UNIDAD 4: PROGRAMACIÓN ESTRUCTURADA Y MODULAR

J.R. Simó

v3.30.10.23

### UNIDAD 4: PROGRAMACIÓN ESTRUCTURADA Y

MODULAR Profesor: José Ramón Simó Martínez Contenido 4.1 Introducción .................................................................................................................................................. 2 4.2 Concepto de función ..................................................................................................................................... 2 4.3 Definición de una función.............................................................................................................................. 3 4.4 Llamada a una función................................................................................................................................... 5 4.5 Paso de parámetros ....................................................................................................................................... 6 4.6 Retorno de un valor ....................................................................................................................................... 8 4.7 Ámbito de variables ....................................................................................................................................... 9 4.8 La función main ........................................................................................................................................... 12 4.9 Recursividad ................................................................................................................................................ 15

J.R. Simó

v3.30.10.23 4.1 Introducción Hasta ahora hemos escrito todo el código de nuestros programas dentro de un bloque único conocido como bloque principal o main

```java
public static void main(String[] args)
```

{ // Nuestro código… } Sin embargo, estas son alguna de las consecuencias cuando aumenta la complejidad de nuestro programa: • Código redundante: bloques de código repetidos. • Algoritmos extensos: solo hay un algoritmo que puede ser difícil de entender por su extensión.

• Conflicto entre variables: puede haber un gran número de variables que no tienen relación entre ellas y podemos confundir la finalidad de unas con otras. En esta unidad aprenderemos, en primer lugar, a crear y utilizar nuestras propias funciones. En segundo lugar, estudiaremos las funciones recursivas, las cuales nos permitirán escribir versiones más sencillas de algoritmos complejos. Finalmente, veremos las ventajas de la programación modular y el diseño descendente.

4.2 Concepto de función En programación, una función es un bloque de código destinado a realizar una función específica dentro de nuestro programa. Una forma de ver una función es como si fuera una caja negra. Esta caja realiza una única tarea a partir de unos datos de entrada y, como resultado de procesar esos datos, puede devolver o no datos de salida.

El concepto de caja negra viene porque no nos importa como la función haga su tarea. Sólo nos importa que hace y qué necesita para hacerlo. Por ejemplo, necesitamos una función que sume dos números x e y. Esta función se puede representar matemáticamente como: sumar(x, y) = x + y. Sin embargo, al usuario sólo debe preocuparle los datos que se piden de entrada, x e y, y no cómo hace la operación.

En formato de caja negra, la función sumar se representaría así

FUNCIÓN Datos entrada Datos de salida

J.R. Simó

v3.30.10.23

Las ventajas del uso de funciones es nuestros programas serían las siguientes: • Evitar repeticiones de código. • Incrementar la legibilidad de nuestro programa. • Dividir un problema complejo en otros más simples. • Reducir la probabilidad de cometer errores. • Facilidad en la modificación de nuestro programa.

En Java a las funciones se las llama métodos debido a que están asociada un objeto. Por tanto, el término “método” está asociado al paradigma de programación orientada a objetos que estudiaremos en las siguientes unidades. 4.3 Definición de una función Al definir una función estamos construyendo un bloque de código que posteriormente podremos utilizar. La definición de una función tiene la siguiente sintaxis

modificador tipoDatoDevuelto nombreDeFuncion (lista de parámetros de entrada) { // Cuerpo de la función

```java
return datoDevuelto;
}
```

Veamos cada componente de la función: • modificador: define ciertas características de la función. Por ahora escribiremos delante de cada función el modificador public static. • tipoDatoDevuelto: el dato de salida de la función. Puede ser de tipo primitivo (int, float, etc) u objeto.

• nombreDeFunción: es el nombre identificador que utilizaremos para que la función se ejecute. SUMAR (X,Y)

J.R. Simó

v3.30.10.23 • lista de parámetros de entrada: es el conjunto de datos de entrada que tendrá la función. Los parámetros se definen con tipo de variable e identificador y separados por comas. Sin embargo, puede haber funciones donde no tengan parámetros de entrada. • return datoDevuelto: la palabra reservada return indica que la variable o valor que se pone a continuación (datoDevuelto) es la salida de la función.

Veamos el siguiente ejemplo donde definimos una función que simplemente muestra un mensaje por pantalla

```java
public static void saludar()
```

{

```java
System.out.println(“¿Quién es Niklaus Wirth?”);
}
```

Podemos apreciar dos detalles característicos de esta función: • La lista de parámetros está vacía. • El tipo de dato se llama void. • No utilizamos la palabra reservada return. En primer lugar, al definir esta función sin parámetros estamos diciendo que no recibe datos de entrada.

En segundo lugar, el tipo de dato void es no lo hemos visto hasta ahora. Se utiliza en la gran mayoría de veces en la definición de las funciones. Sirve para indicar que la función no devuelve ningún resultado después de realizar terminar el bloque de instrucciones que contiene. En programación, a este tipo de funciones que no devuelven ningún dato de salida se les conoce como subprogramas.

Por último, al definir esta función como subprograma, no utilizaremos por tanto la palabra reservada return. Otro ejemplo más completo sería definir una función que recibe dos números enteros, hace el algoritmo que calcula el cuál es mayor y por último devuelve el número mayor.

```java
public static int mayor(int a, int b)
```

{ if(a >= b)

```java
mayor = a;
    else
        mayor = b;
```

```java
return mayor;
}
```

Iremos viendo con más detalle los conceptos que hemos visto hasta ahora. En el siguiente apartado aprenderemos a acceder al código fuente que se encuentra en el bloque de la función que hayamos creado.

J.R. Simó

v3.30.10.23 4.4 Llamada a una función Cuando definimos una función podemos entender que estamos etiquetando un bloque de código al cuál podremos acceder en cualquier momento para que se ejecute. Para llamar a una función podemos hacerlo de dos formas: • Si la función no devuelve ningún dato se ejecuta como una instrucción sin tener que almacenar el resultado de salida en ninguna variable, por ejemplo

```java
saludar();
```

• Si la función devuelve un dato, por ejemplo

```java
int resultado = mayor (3,4);
```

Observa que podemos hacer lo siguiente

```java
mayor(3, 4);
```

Esto lo que haría es llamar a la función, pero no guardaría en ningún sitio el resultado de vuelta. Hay veces que nos interesa recoger lo que devuelve la función y otras no, dependerá de la lógica del programa. Por otra parte, también podemos mostrar directamente el valor devuelto por la función

```java
System.out.println(mayor(3, 4));
```

¿Y desde dónde se puede llamar a las funciones? Desde cualquier otra función de nuestro programa. Por ahora, haremos las llamadas desde la función que más conocemos: el main. ¿Cómo se comporta nuestro programa cuando se hace una llamada a una función? Cuando estamos ejecutando una serie de instrucciones en la función F1 y hacemos una llamada a la función F2, nuestro programa pasa a ejecutar el código que está en el cuerpo de F2. Al finalizar el bloque de código que contiene F2, el programa devuelve el control a F1 en el mismo punto donde se hizo la llamada a F2.

El siguiente esquema ilustra los descrito anteriormente e indicando el orden de ejecución de cada instrucción

```java
F1(){
```

Instrucción1; Instrucción2; F2(); // Punto de llamada y regreso. Instrucción5; }

```java
F2(){
```

Instrucción3; Instrucción4; } Un ejemplo completo donde podemos ejecutar la función saludar y mayor que hemos definido sería

J.R. Simó

v3.30.10.23

4.5 Paso de parámetros Ya hemos visto que a las funciones le podemos pasar una serie de parámetros que serán los datos de entrada a la función. Sin embargo, tenemos que tener presente que existen técnicamente dos formas de pasar parámetros: • Paso por valor • Paso por referencia Es importante entender bien en qué se diferencia y por tanto vamos a verlo en detalle.

4.5.1 Por valor La función hace una copia de los parámetros que le pasamos, es decir, no modifica los valores de las variables desde donde se llama a la función.

J.R. Simó

v3.30.10.23 En el siguiente ejemplo podemos ver que a la función incrementar le pasamos un parámetro de tipo entero, pero los cambios realizados a ese parámetro dentro de la función incrementar no afectan a su valor en la función main. El ejemplo, además, ilustra el comportamiento de la llamada a una función

Salida

Para obtener los cambios realizados en la función incrementar deberemos definirla para que devuelva un entero y recogeremos ese valor devuelto en la función main

J.R. Simó

v3.30.10.23

Salida

4.5.2 Por referencia Estudiaremos esta técnica en las unidad de estructuras estáticas (arrays). 4.6 Retorno de un valor Como hemos visto hasta ahora, siempre que queramos devolver un dato desde una función utilizaremos la palabra reservada return.

J.R. Simó

v3.30.10.23 Normalmente situaremos el return al final del bloque de la función, como hemos hecho en los ejemplos anteriores. Sin embargo, hay soluciones en las se puede utilizar el return en diversas partes del código para simplificar o por otros motivos. Por ejemplo

Hay que tener en cuenta que cuando la función termina cuando ejecuta una sentencia return. En el anterior ejemplo si a es mayor que b, se ejecutará return a y terminará el bloque de la función mayor. Por tanto, no se ejecutará return b. 4.7 Ámbito de variables Hay dos tipos de ámbitos de variables

• Global: se declara fuera de cualquier función. El tiempo de vida de la variable afecta a todo el bloque de la clase, es decir, la variable puede ser usada en todas las funciones y bloques. La variable deja de existir al terminar el programa. • Local: se define dentro de una función. El tiempo de vida de la variable afecta al bloque de la función.

La variable deja de existir al terminar la función. 4.7.1 Ámbito global Observemos el siguiente ejemplo donde hacemos uso de una variable global

J.R. Simó

v3.30.10.23

Salida: Podemos observar, por tanto, que la variable x siendo global se puede utilizar y modificar en cualquier función que esté dentro de la clase. ¡Atención! El uso de variables globales tipo static debe evitarse todo lo posible. Su uso debe estar restringido para programadores expertos en casos totalmente controlados. Estudiaremos mejor el modificador static en las unidades de programación orientada a objetos.

4.7.2 Ámbito local En el siguiente ejemplo podemos observar que la variable x se declara de forma local dentro del bloque de la función incrementar y de la función main

J.R. Simó

v3.30.10.23

Salida: Valor de x en incrementar: 6 Valor de x en main: 3 Asimismo, podemos declarar el mismo nombre de variable en distintas funciones ya que Java trata estas variables como locales y por tanto no tienen relación entre sí. 4.7.3 Conflicto entre variables Podríamos pensar que si declaramos una variable global ya no podremos declarar una variable local con el mismo nombre identificador. Sin embargo, esto se puede hacer y en Java la variable local tiene prioridad sobre la global. Esto es, si en una función declaramos una variable local con el mismo nombre que la global, entonces la variable global ya no tiene validez dentro de esa función.

Veamos el siguiente ejemplo para entenderlo mejor

J.R. Simó

v3.30.10.23

Salida: Valor de x en test1: 3 Valor de x en test2: 5 Valor de x en main: 7 En test1() al declarar int x = 3 la variable x ya no hará referencia a la global (x = 5) sino a la local (x = 3). Lo mismo para la función main. En cambio, en test2() hace uso de la variable global al no declararse una variable con el mismo nombre que esta.

4.8 La función main Ya sabemos que la función main (o método main en Java) es la función principal o punto de entrada de nuestro programa. Es decir, todo programa empezará en la función main. En este apartado vamos a analizar otros aspectos importantes de esta función, como el paso de parámetros por consola.

La función main siempre se declara con este encabezado

```java
public static void main (String[] args)
```

Nota Ahora ya sabes que la función main no devuelve nada. En otros lenguajes, como C o C++, la función main sí que devuelve un entero.

J.R. Simó

v3.30.10.23 4.8.1 Parámetros de entrada a la función main Nota En este apartado hacemos una breve aproximación al concepto de array. Por tanto, no hace falta entender completamente el concepto de array, simplemente seguir los pasos que se indican en este apartado para obtener parámetros de entrada a la función main.

Analizando el encabezado de la función main, también podemos entender ahora que tiene un parámetro de entrada: String[] args También sabemos que este parámetro es un array de tipo String, es decir, que en cada elemento del array almacenará una cadena de texto de tipo String.

Sin embargo, ¿para qué sirve este parámetro? Vamos a verlo. Es muy frecuente que un programa llamado desde la línea de comandos (la consola de Windows o Linux) tenga ciertas opciones que le indicamos como argumentos. Por ejemplo, bajo Linux podemos ver la lista detallada de ficheros que terminan en .java haciendo

```java
ls -l *.java
```

En este caso, la orden sería ls y las dos opciones (o parámetros) que le indicamos son -l y *.java La orden equivalente en la consola de comandos de Windows sería: dir *.java Pues bien, estas opciones que se les pasa al programa en línea de comandos se pueden leer desde Java. Hay que tener en cuenta que dir o ls sería el programa propiamente.

Ahora ya podemos imaginar que la utilidad del parámetro String[] args será almacenar estas opciones que se les pasa al programa ya que son cadenas de texto. Veamos un ejemplo práctico de cómo funciona.

Si ejecutamos el programa LineaComandos desde consola y queremos pasar dos parámetros, por ejemplo, “uno” y “dos”, sería así

J.R. Simó

v3.30.10.23 java LineaComandos uno dos Si lo queremos pasar los parámetros desde un IDE, como por ejemplo Eclipse, deberemos hacer click derecho sobre el fichero .java que queramos ejecutar → Run as → Run Configurations → Pestaña “(x)=Arguments” → Escribir los parámentros, separados por espacions, en el campo de texto “Program arguments”. Por ejemplo, si le quiero pasar los valores 15 y 30 a “EjercicioPrueba.java”, quedaría así en el Run Configurations

Salida: Parámetro 1: uno Parámetro 2: dos

J.R. Simó

v3.30.10.23 4.9 Recursividad La recursividad es una técnica que permite solucionar un problema a partir de casos más simples del mismo problema. ¿Cómo se aplica esta técnica a las funciones? Llamando una función a sí misma

```java
public static void funcion1()
```

{ // Instrucciones...

```java
funcion1();
    // Instrucciones....
}
```

En el anterior ejemplo podemos ver, en forma de código, que una de las instrucciones que tiene la funcion1() es llamarse a sí misma. Ahora nos podemos preguntar que si una función se llama a sí misma, ¿cuándo va a parar? En este punto debemos tener en cuenta dos conceptos importantes de la recursión

• Caso recursivo: es una versión más sencilla (o subproblema) que la del problema original. También se conoce como la llamada recursiva. • Caso base: es el caso más simple del problema original. También se conoce como Condición de Parada. Nota Para afrontar una solución recursiva siempre debemos pensar en la versión recursiva del problema y cuál es su caso base. Además, debemos tener en cuenta que en cada llamada recursiva el problema se vuelve más simple, hasta llegar a la versión más simple de todas que es el caso base.

4.9.1 Ejemplo del factorial de un número En matemáticas, un problema típico que se puede afrontar recursivamente es el factorial de un número. Por ejemplo, el factorial del número 4 sería: 4! = 4 𝑥 3 𝑥 2 𝑥 1 = 24 Por tanto, podemos definir el factorial de un número es el resultado de multiplicar ese número por los que le siguen hasta llegar a 1.

El problema original sería calcular el factorial de cualquier número, que llamamos n: 𝑛! = 𝑛 𝑥 (𝑛 – 1) 𝑥 (𝑛 – 2) 𝑥 . . . 𝑥 3 𝑥 2 𝑥 1 Ahora podemos pensar en una versión más simple de 𝑛!, que sería (𝑛 – 1)! (𝑛 – 1)! = (𝑛 – 1) 𝑥 (𝑛 – 2) 𝑥 . . . 𝑥 3 𝑥 2 𝑥 1

J.R. Simó

v3.30.10.23 Finalmente, debemos encontrar el caso más simple. Este caso puede ser cuando n = 1, ya que por definición el factorial de 1 es 1: 1! = 1 Por tanto, ya tenemos los dos componentes esenciales para afrontar recursivamente el factorial de un número: • Caso recursivo: 𝑛! = 𝑛 𝑥 (𝑛 – 1)! para n > 1 • Caso base: 1!

Nota También podríamos pensar que el caso base es 0, ya que el el factorial de 0! = 1 Ahora ya podemos programar el caso factorial con una función recursiva de la siguiente forma

---

# 4.2 Programación estructurada y modular

Programación

### UD 4: Programación estructurada y modular

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

Programación estructurada y modular ORDEN 60/2012, de 25 de septiembre, de la Conselleria de Educación, Formación y Empleo por la que se establece para la Comunitat Valenciana el currículo del ciclo formativo de Grado Superior correspondiente al título de Técnico Superior en Desarrollo de Aplicaciones Web. [2012/9149] Contenidos

2.8.− Codificación de métodos estáticos. 2.9.− Utilización de métodos estáticos. 2.10.− Parámetros y valores devueltos. 2.11.− Librerías de objetos. Real Decreto 686/2010, de 20 de mayo, por el que se establece el título de Técnico Superior en Desarrollo de Aplicaciones Web y se fijan sus enseñanzas mínimas.

Resultados de aprendizaje

- Escribe y prueba programas sencillos, reconociendo y aplicando los fundamentos de la programación orientada a

objetos. Criterios de evaluación

- b) Se han escrito programas simples.

2.e) Se han escrito llamadas a métodos estáticos. 2.f) Se han utilizado parámetros en la llamada a métodos. Competencias profesionales, personales y sociales

- Desarrollar servicios para integrar sus funciones en otras aplicaciones web, asegurando su funcionalidad.

Programación

UD6: Programación estructurada y modular

Programación

UD6: Programación estructurada y modular Programación estructurada y modular 1.- ¿Qué es la programación estructurada y modular? 2.- Ventajas 3.- Descomposición modular. Técnicas 4.- Funciones.

Declaración, Invocación e Implementación 5.- Paso de parámetros 6.- Sobrecarga de funciones 7.- Reutilización de código

1.- ¿Qué es la programación estructurada? ¿Qué es la programación modular? Programación

UD6: Programación estructurada y modular

1.- ¿Qué es la programación estructurada? “La programación estructurada es un paradigma de programación orientado a mejorar la claridad, calidad y tiempo de desarrollo de un programa de computadora recurriendo únicamente a subrutinas y tres estructuras básicas

secuencia,

selección (if y switch) e

```java
iteración (bucles for y while);
```

asimismo, se considera innecesario y contraproducente el uso de la instrucción de transferencia incondicional (GOTO), que podría conducir a código espagueti, mucho más difícil de seguir y de mantener, y fuente de numerosos errores de programación.” Programación

UD6: Programación estructurada y modular

1.- ¿Qué es la programación modular? “La programación modular es un paradigma de programación que consiste en dividir un programa en módulos o subprogramas con el fin de hacerlo más legible y manejable. Se presenta históricamente como una evolución de la programación estructurada para solucionar problemas de programación más grandes y complejos de lo que esta puede resolver.

Al aplicar la programación modular, un problema complejo debe ser dividido en varios subproblemas más simples, y estos a su vez en otros subproblemas más simples. Esto debe hacerse hasta obtener subproblemas lo suficientemente simples como para poder ser resueltos fácilmente con algún lenguaje de programación. Esta técnica se llama refinamiento sucesivo, divide y vencerás o análisis descendente (Top-Down).” Programación

UD6: Programación estructurada y modular

2.- Ventajas Programación

UD6: Programación estructurada y modular

2.- Ventajas - Programación Estructurada - ✓ Los programas son más fáciles de entender, pueden ser leídos de forma secuencial y no hay necesidad de tener que rastrear saltos de líneas (GOTO) dentro de los bloques de código para intentar entender la lógica interna. ✓ La estructura de los programas es clara, puesto que las instrucciones están más ligadas o relacionadas entre sí.

✓ Se optimiza el esfuerzo en las fases de pruebas y depuración. El seguimiento de los fallos o errores del programa (debugging), y con él su detección y corrección, se facilita enormemente. ✓ Se reducen los costos de mantenimiento. Análogamente a la depuración, durante la fase de mantenimiento, modificar o extender los programas resulta más fácil.

✓ Los programas son más sencillos y más rápidos de confeccionar. ✓ Se incrementa el rendimiento de los programadores. Programación

UD6: Programación estructurada y modular

2.- Ventajas - Programación Modular - ✓ Facilita la comprensión del problema y su resolución escalonada. ✓ Aumenta la claridad y legibilidad de los programas. ✓ Permite que varios programadores trabajen en el mismo problema a la vez, puesto que cada uno puede trabajar en uno o varios módulos de manera bastante independiente.

✓ Reduce el tiempo de desarrollo, reutilizando módulos previamente desarrollados. ✓ Mejora la fiabilidad de los programas, porque es más sencillo diseñar y depurar módulos pequeños que programas enormes. ✓ Facilita el mantenimiento de los programas. ✓ Se consigue la reutilización de código. En lugar de escribir el mismo código repetido cuando se necesite, se hace una llamada al método que lo realiza.

Programación

UD6: Programación estructurada y modular

3.- Descomposición modular. Técnicas Programación

UD6: Programación estructurada y modular

3.- Descomposición modular. Técnicas Es necesario un compromiso entre el tamaño de los módulos y la complejidad de la aplicación. ✓ Si un programa se descompone en demasiadas unidades, decrece la efectividad. ✓ Cuando el número de módulos se incrementa, decrece el esfuerzo para realizarlos, pero aumenta el esfuerzo de integración y la carga en memoria.

Algunos criterios de descomposición (no válidos). ✓ Descomposición por tamaño (50 líneas por módulo) Descomposición por tamaño (50 líneas por módulo). ✓ Complejidad del módulo: niveles de anidamiento (menos de 7 niveles). Programación

UD6: Programación estructurada y modular

3.- Descomposición modular. Técnicas ‰ Independencia funcional Un módulo debe realizar una única tarea y comunicarse lo menos posible con el resto de módulos. ‰ Un módulo se debe dividir hasta que se consiga un nivel mínimo aceptable de independencia funcional. La independencia funcional se puede medir según dos criterios

Cohesión

Mide la relación entre las partes internas de un módulo.

Todas deben estar encaminadas a realizar una única función. Acoplamiento

Mide la relación del módulo con el resto de los módulos.

Debe comunicarse lo menos posible.

Pocas veces se conseguirá un acoplamiento nulo. ✓ Un módulo debe tener mucha cohesión y poco acoplamiento. Programación

UD6: Programación estructurada y modular

4.- Funciones (métodos) Programación

UD6: Programación estructurada y modular

4.- Funciones Algoritmo principal y subalgoritmos En general, el problema principal se resuelve en un algoritmo que denominaremos algoritmo o módulo principal, mientras que los subproblemas sencillos se resolverán en subalgoritmos, también llamados módulos a secas. Los subalgoritmos están subordinados al algoritmo principal, de manera que éste es el que decide cuándo debe ejecutarse cada subalgoritmo y con qué conjunto de datos.

El algoritmo principal realiza llamadas o invocaciones a los subalgoritmos, mientras que éstos devuelven resultados a aquél. Así, el algoritmo principal va recogiendo todos los resultados y puede generar la solución al problema global. Programación

UD6: Programación estructurada y modular

4.- Funciones Cuando el algoritmo principal hace una llamada al subalgoritmo (es decir, lo invoca), se empiezan a ejecutar las instrucciones del subalgoritmo. Cuando éste termina, devuelve los datos de salida al algoritmo principal, y la ejecución continúa por la instrucción siguiente a la de invocación.

También se dice que el subalgoritmo devuelve el control al algoritmo principal, ya que éste toma de nuevo el control del flujo de instrucciones después de habérselo cedido temporalmente al subalgoritmo. Programación

UD6: Programación estructurada y modular

4.- Funciones El programa principal puede invocar a cada subalgoritmo el número de veces que sea necesario. A su vez, cada subalgoritmo puede invocar a otros subalgoritmos, y éstos a otros, etc. Cada subalgoritmo devolverá los datos y el control al algoritmo que lo invocó.

Programación

UD6: Programación estructurada y modular

4.- Funciones Ejemplo: Algoritmo que pide el radio de una circunferencia al usuario y devuelve su área y perímetro. Programación

UD6: Programación estructurada y modular

4.- Funciones La estructura general de una función Java es la siguiente: [acceso] [modificador] tipoDevuelto nombreMetodo([lista parámetros]) [throws listaExcepciones] {

/*

- Bloque de instrucciones

*/

[return valor;] } Los elementos que aparecen entre corchetes son opcionales. acceso (opcional): determinan el tipo de acceso al método. Se verán en detalle más adelante. modificador (opcional) : puede ser final a static. Se verán en detalle más adelante. tipoDevuelto: indica el tipo del valor que devuelve el método. En Java es imprescindible que en la declaración de un método, se indique el tipo de dato que ha de devolver. El dato se devuelve mediante la instrucción return. Si el método no devuelve ningún valor este tipo será void (procedimiento).

nombreMetodo: es el nombre que se le da al método. Para crearlo hay que seguir las mismas normas que para crear nombres de variables. Programación

UD6: Programación estructurada y modular

4.- Funciones lista de parámetros (opcional): después del nombre del método y siempre entre paréntesis puede aparecer una lista de parámetros (también llamados argumentos) separados por comas. Estos parámetros son los datos de entrada que recibe el método para operar con ellos. Un método puede recibir cero o más argumentos. Se debe especificar para cada argumento su tipo. Los paréntesis son obligatorios aunque estén vacíos. Se denominan parámetros formales.

throws listaExcepciones (opcional): indica las excepciones que puede generar y manipular el método. return: se utiliza para devolver un valor. La palabra clave return va seguida de una expresión que será evaluada para saber el valor de retorno. Esta expresión puede ser compleja o puede ser simplemente el nombre de un objeto, una variable de tipo primitivo o una constante.

El tipo del valor de retorno debe coincidir con el tipoDevuelto que se ha indicado en la declaración del método. Si el método no devuelve nada (tipoDevuelto = void) la instrucción return no se indica. Un método puede devolver un tipo primitivo, un array, un String o un objeto.

La instrucción return puede aparecer en cualquier lugar dentro del método, no tiene que estar necesariamente al final. Programación

UD6: Programación estructurada y modular

5.- Paso de parámetros Programación

UD6: Programación estructurada y modular

5.- Paso de parámetros A los parámetros que aparecen en la cabecera de las funciones se les denomina parámetros formales del método, mientras que los valores que se pasan como argumentos en la llamada al método se denominan los parámetros reales de la llamada. El paso de parámetros en Java siempre se hace por el método de paso de parámetros por valor (o por copia). En Java no existe el paso por referencia.

//a y b son parámetros formales

```java
public static void intercambio(double a, double b) {
```

…

}

//x e y son parámetros reales

```java
intercambio(x, y);
```

Programación

UD6: Programación estructurada y modular

5.- Paso de parámetros Ejemplo: Supóngase el siguiente método que pretende intercambiar el valor de dos variables reales

```java
public static void intercambio(double a, double b) {
double aux = a;
a = b;
b = aux;
}
```

y una llamada al método desde la clase en la que está implementado

```java
double x = 5.0, y = 7.0;
```

intercambio(x, y); // después de la llamada: x = 5 e y = 7 Con esta invocación, los argumentos a y b se inicializan a los valores 5.0 y 7.0, respectivamente. Tras la ejecución de las instrucciones del cuerpo del método, a y b intercambian sus valores, pero las variables x e y no sufren ningún cambio.

Programación

UD6: Programación estructurada y modular

5.- Paso de parámetros Dirás pero yo cuando paso un array por parámetros y lo modifico desde el método al que se lo paso, este cambia, no estoy pasando una copia del array. Parece ser que mi argumento falla, pero te explico: Lo que tú almacenas en una variable no primitiva no es el objeto en sí sino una dirección o identificador del objeto en el espacio dinámico de memoria.

Cuando pasas por parámetros la variable, estás pasando una copia de dicha dirección. Si modificas el objeto dentro de la función, después de devolver el flujo de ejecución, tu objeto habrá cambiado. Programación

UD6: Programación estructurada y modular

6.- Sobrecarga de funciones Programación

UD6: Programación estructurada y modular

6.- Sobrecarga de funciones En java, una clase puede contener dos métodos con el mismo nombre si: ✓ Tienen diferente número de argumentos. ✓ Si el tipo de los argumentos es distinto, aunque tenga el mismo número de ellos. Programación

UD6: Programación estructurada y modular

6.- Sobrecarga de funciones Para entender esta sencilla propiedad de java, lo mejor es contemplar el siguiente ejemplo de dos métodos sobrecargados.

```java
public void unMetodo() {
```

//Código del método }

```java
public void unMetodo(int numero) {
```

//Código del método } En este ejemplo, ambos métodos tienen el mismo nombre y número distinto de argumentos. Cuando se llame al método unMetodo(), se ejecutará el primero, y cuando se llame de esta manera unMetodo(5), se ejecutará el segundo. Programación

UD6: Programación estructurada y modular

6.- Sobrecarga de funciones Veamos otro ejemplo

```java
public void otroMetodo(int numeroEntero) {
```

//Código del método }

```java
public void otroMetodo(float numeroReal) {
```

//Código del método } Como vemos, ambos métodos tienen el mismo nombre y el mismo número de argumentos, en cambio el argumento que reciben es de distinto tipo de modo que cuando se llame al método otroMetodo(15), se ejecutará el primero, y cuando se llame de esta manera otroMetodo(15.5), se ejecutará el segundo.

Programación

UD6: Programación estructurada y modular

7.- Reutilización de código Programación

UD6: Programación estructurada y modular

7.- Reutilización de código A menudo hay que realizar una misma operación en varios programas o en distintas partes del mismo programa. Programación

UD6: Programación estructurada y modular Podemos copiar el código varias veces y manipular las entradas para que funcione en otro programa. No obstante, ¿qué pasa si hay que modificar ese código? Habrá que cambiarlo en todos los lugares donde se encuentra. Por esto es mejor tener una única vez el código y poder llamarlo desde donde haga falta.

7.- Reutilización de código Métodos para reutilizar código: ✓ Extraer funciones ✓ Programación Orientada a Objetos ✓ API o librerías. En cualquier clase se pueden definir métodos para agrupar e identificar una secuencia de acciones con el fin de poder ser utilizadas una o más veces a lo largo de la clase.

Es lo que se conoce como subprogramación o encapsulamiento del código. En Programación Orientada a Objetos veremos los mecanismos básicos para la reutilización de código son la composición y herencia. Mediante la herencia es posible definir nuevas clases extendiendo o restringiendo las funcionalidades de otras clases ya existentes.

La interfaz de programación de aplicaciones, conocida también por la sigla API del inglés application programming interface, es un conjunto de subrutinas, funciones y procedimientos (o métodos, en la programación orientada a objetos) que ofrece cierta biblioteca para ser utilizado por otro software como una capa de abstracción.

Programación

UD6: Programación estructurada y modular

Bibliografía Programación

UD6: Programación estructurada y modular

Bibliografía ✓ Aprende JAVA con ejercicios. Edición 2018. Luis José Sánchez. ✓ Empezar a programar usando Java. 2ª edición. Universitat Politècnica de València ✓ https://github.com/statickidz/TemarioDAW ✓ https://es.stackoverflow.com Programación estructurada ✓https://es.wikipedia.org/wiki/Programación_estructurada Programación modular ✓https://es.wikipedia.org/wiki/Programación_modular Programación

UD6: Programación estructurada y modular

---
