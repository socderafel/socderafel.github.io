---
layout: default
title: "UD2 — Fonaments de Programació en Python · Temari Complet"
course_root: ".."
badge: "CE IA i Big Data · UD2 — Fonaments de Programació en Python"
prev_url: "../ut01/ut0102.html"
prev_label: "⬅️ 1.2 SO LINUX MINT MATE"
next_url: "../ut02/ut0201.html"
next_label: "2.1 Python apuntes de clase ➡️"
---

# 📘 UD2 — Fonaments de Programació en Python (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 Python apuntes de clase**](./ut0201.md)
- [**2.2 Python para todos (libro).**](./ut0202.md)

---

# 2.1 Python apuntes de clase

---

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. UT2. Programación en Python. Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Taula de continguts

- Introducción..........................................................................................................................................4

1.1. Instalación de Python.....................................................................................................................4 1.2. Entorno de desarrollo de Python (IDE)..........................................................................................4

- Programación en Python.......................................................................................................................6

2.1. Elementos de un programa de Python (1/2)...................................................................................6 2.1.1. Lineas y espacios....................................................................................................................6 2.1.2. Delimitadores..........................................................................................................................7 2.1.3. Palabras reservadas...............................................................................................................10 2.1.4. Variables................................................................................................................................11 2.1.5. Operadores aritméticos.........................................................................................................14 2.1.6. Operadores relacionales (o de comparación)........................................................................16 2.1.7. Operadores lógicos...............................................................................................................17 2.1.8. Resumen de operadores........................................................................................................18 2.2. Estructuras de control...................................................................................................................18 2.2.1. Bucle condicional if-elif-else................................................................................................19 2.2.2. Bucle de repetición for..........................................................................................................20 2.2.3. Bucle de repetición while.....................................................................................................22 2.2.4. Elementos adicionales a las estructuras de control...............................................................23 2.3. Funciones de entrada y salida.......................................................................................................26 2.3.1. Print(): Función de salida de datos por consola....................................................................26 2.3.2. Input(): Función de entrada de datos por consola.................................................................33 2.4. Refundición de variables (casting)...............................................................................................35 2.4.1. Conversión implícita.............................................................................................................35 2.4.2. Conversión explícita.............................................................................................................36 2.5. Elementos de un programa en Python (2/2).................................................................................37 2.5.1. Listas.....................................................................................................................................37 2.5.2. Manipulación de listas..........................................................................................................38 2.5.3. Tuplas....................................................................................................................................46 2.5.4. Diccionarios..........................................................................................................................47 2.5.5. Operaciones sobre diccionarios............................................................................................49 2.6. Funciones......................................................................................................................................52 2.6.1. Definición de funciones en Python.......................................................................................52 2.6.2. Paso de argumentos a las funciones......................................................................................53 2.6.3. Paso de argumentos de longitud variable a las funciones.....................................................55 2.6.4. Sentencia return....................................................................................................................56 2.6.5. Anotaciones en funciones.....................................................................................................57 2.6.6. Paso por valor y paso por referencia.....................................................................................57 2.6.7. Funciones Lambda................................................................................................................60 2.6.8. Función filter()......................................................................................................................62 2.6.9. Función map().......................................................................................................................63

- Programación orientada a objetos.......................................................................................................64

3.1. Creación de una clase en Python:.................................................................................................65 3.2. Creación de un objeto a partir de la clase.....................................................................................65 3.3. Definiendo atributos de clase.......................................................................................................65 3.4. Cambiando los atributos de clase.................................................................................................66 3.5. Definiendo métodos de clase........................................................................................................67 3.6. Encapsulación de métodos...........................................................................................................68 2 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 3.7. Acceso a métodos.........................................................................................................................70 3.8. Acceso a atributos.........................................................................................................................71

- Excepciones.........................................................................................................................................72

4.1. Uso de try y except.......................................................................................................................72

- Acceso a archivos................................................................................................................................74

5.1. Abrir un archivo............................................................................................................................74 5.2. Leer un archivo.............................................................................................................................74 5.3. Leer un archivo linea a linea........................................................................................................75 5.4. Cerrar un archivo..........................................................................................................................76 5.5. Argumentos adicionales de open()...............................................................................................76 5.6. Otra forma de abrir archivos.........................................................................................................77

- Escritura en archivos...........................................................................................................................78

6.1. Método write()..............................................................................................................................78 3 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- INTRODUCCIÓN.

```python
Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en una
```

sintaxis muy limpia y un código legible. Ideado por Guido Van Rossum, Empezó su desarrollo en 1989. Es un lenguaje de alto nivel con una gramática sencilla, clara y muy legible. Tipado dinámico fuerte. Como todos los lenguajes de programación en uso actualmente es orientado a objetos.

Open Source, código abierto (gratuito). Relativamente fácil de aprender. Presenta numerosas librerías que lo convierten en un firme candidato para la programación de IA. Lenguaje interpretado (no compilado). Lenguaje “todo terreno”. Sirve tanto para aplicaciones de escritorio, programación en entorno servidor, programación web, etc.

Multiplataforma (Mac, Windows, Linux, …). 1.1. Instalación de Python. Ir a la página de python, descargar e instalar. 1.2. Entorno de desarrollo de Python (IDE). Un IDE es un software con herramientas para desarrolladores para desarrollar software y probarlo. El IDE proporciona un entorno de desarrollo en el que todas las herramientas están disponibles en una única interfaz gráfica de usuario (GUI).

Un IDE incluye principalmente: • Editor de código para escribir los códigos del software. • Automatización de la ejecución local. • Depurador de programas. • ... 4 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. E jemplos de IDEs

- IDLE (por defecto con Python).
- Visual Studio Code.
- Sublime Text.
- Atom
- Spyder
- PyDev

• Dentro del ámbito de este curso no será necesario instalar ningún IDE, ya que usaremos el framework de Anaconda para programar en Python. 5 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- PROGRAMACIÓN EN PYTHON.

2.1. Elementos de un programa de Python (1/2). Un programa de Python es un fichero de texto (codificado en formato UTF-8) que contiene expresiones y sentencias que se consiguen combinando los elementos básicos del lenguaje. El lenguaje Python está formado por elementos (tokens) de diferentes tipos

• Lineas y espacios. • Palabras reservadas (keywords) • Variables, operadores y expresiones • Funciones integradas (built-in functions). • Delimitadores • Identificadores En la documentación de Python se puede consultar una descripción mucho más detallada y completa de los elementos constitutivos del lenguaje Python.

Para que un programa se pueda ejecutar, el programa debe ser sintácticamente correcto, es decir, utilizar los elementos del lenguaje Python respetando su reglas de "ensamblaje". Esas reglas se comentan en otras lecciones de este curso. Obviamente, que un programa se pueda ejecutar no significa que un programa vaya a realizar la tarea deseada, ni que lo vaya a hacer en todos los casos.

#### 2.1.1. Lineas y espacios

Un programa de Python está formado por líneas de texto. Se recomienda que cada línea contenga una única instrucción, aunque puede haber varias instrucciones en una línea, separadas por un punto y coma (;). 6 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Los elementos del lenguaje se separan por espacios en blanco (normalmente, uno), aunque en algunos casos no se escriben espacios: • Entre los nombres de las funciones y el paréntesis • Antes de una coma (,) • Entre los delimitadores y su contenido (paréntesis, llaves, corchetes o comillas) Nota: No poner nunca espacios al principio de una línea.

Los espacios al principio de una línea (el sangrado) son significativos porque indican un nivel de agrupamiento. El sangrado inicial es una de las características de Python que lo distinguen de otros lenguajes, que utilizan un carácter para delimitar agrupamientos.

#### 2.1.2. Delimitadores

Los delimitadores son los caracteres que permiten delimitar, separar o representar expresiones. ' " # \ ( ) [ ] { } , : . ; @ = -> += -= *= /= //= %= @= &= |= ⁼ >>= <<= **= 7 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Nota: No se pueden usar para otra cosa que no sea su uso como delimitador. Cualquier uso indebido generará un error en tiempo de ejecución. Nota: Los delimitadores # y “”” “”” permiten insertar comentarios dentro de un programa.

> **⚠️ Nota: El delimitador ‘’ y “” se usan para definir varia...**
> Nota: El delimitador ‘’ y “” se usan para definir variables de tipo string. 8 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Nota: El delimitador \ permite truncar una linea muy larga. Por motivos de legibilidad, se recomienda que las líneas no superen los 79 caracteres. Si una instrucción supera esa longitud, se puede dividir en varias líneas usando el carácter contrabarra (\)

9 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

#### 2.1.3. Palabras reservadas

Las palabras reservadas de Python son las que forman el núcleo del lenguaje Python y no se pueden usar para nombrar otros elementos (variables, funciones, …). Se puede acceder al listado de las palabras reservadas desde la ayuda de IDLE (Python 3.11, 64bits).

- Condicionales: if, elif, else
- Bucles: while, for, break, continue
- Valores: False, True, None
- Operadores lógicos: and, or, not
- Funciones: def, return, lambda, pass, yield
- Clases: class
- Excepciones: assert, try, except, finally, raise
- Variables: global, nonlocal

10 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- Concurrencia: async, await
- Eliminar variables: del
- Context Managers: with, as
- Módulos: from, import
- Pertenencia e Identidad: in, is

#### 2.1.4. Variables

➢ Declaración de variables¶

```python
Python es un lenguaje de tipado dinámico en el que no hace falta declarar el tipo de
```

dato que asignará a una variable, de igual manera una variable puede cambiar de tipo conforme la ejecución del programa, por ello se debe tener cuidado con la sintaxis para definir cada tipo de dato. Como veremos más adelante en Python todo lo que creamos son objetos y las variables son referencias a esos objetos. Las variables se definen por asignación utilizando el signo =.

Los tipos de datos básicos en Python son: ➢ Enteros (int)¶ Los enteros son un tipo de dato básico en cualquier lenguaje de programación. Si se usan enteros de 32 bits el rango a representar es de -2^31 a 2^31–1. Con 64 bits, el rango es de -2^63 a 2^63–1. No tenemos que preocuparnos de la codificación de los enteros, ya que Python se encarga de asignar más o menos memoria al número.

11 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. ➢ De coma flotante (float)¶ ➢ Booleanos (bool) Las variables booleanas sólo pueden adoptar dos valores: verdadero (True) o falso (False). ➢ Números complejos 12 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. ➢ Cadena de caracteres (string) Es un tipo de dato que contiene una secuencia de símbolos (alfanuméricos). Los strings se definen utilizando comillas dobles o simples.

➢ Resumen de variables 13 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

#### 2.1.5. Operadores aritméticos

Los operadores aritméticos permiten realizar las operaciones aritméticas básicas con tipos numéricos. La sintaxis en Python es la siguiente: Operación Operador Suma + Resta - Multiplicación * División / División entera // Módulo % Potencia ** Ejercicios: Escribir la expresión que permita calcular los siguientes valores

3+ 8 60+ 29 2+ 40 3= 3,1415740740740743 √7+√6+√5= 3.1416325445036177 5+ 1−1 0,35 = 7.321938217183423 14 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Soluciones: 15 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Aunque no lo hayamos visto aun, existe una manera más simple de escribir las expresiones. Si usamos la biblioteca math accedemos a todos sus operadores matemáticos (métodos) lo que permite dar más claridad al código.

#### 2.1.6. Operadores relacionales (o de comparación)

Permiten efectuar comparaciones entre objetos de Python. El resultado de una comparación es un valor booleano (True o False). La sintaxis en Python es la siguiente

- "igual que"

1 == 1 (True)

- "diferente a"

"a" != "a" (False)

- "mayor que"

10 > 5 (True)

- "menor que"

5 < 1 (False)

- "mayor o igual que"

30 >= 30 (True)

- "menor o igual que"

20 <= 10 (False) 16 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Nota: Los operadores relacionales solo se pueden ejecutar para comparar valores del mismo tipo.

- "a" > 10 devolverá un error.
- [0,4] < (1,2) devolverá un error al no poder comparar una lista con una tupla.

También se pueden concatenar

- 3 == 3 >= 2 (true)

#### 2.1.7. Operadores lógicos

Sirven para realizar operaciones de lógica booleana entre valores de tipo bool. Los operadores lógicos son and, or y not. Ejemplos

- True and True devuelve True.
- True or False devuelve True.
- not True devuelve False.
- (1 == 1) and (2 > 1) devuelve True
- (0 != 0) or (10 > 20) devuelve False
- (0 != 0) or (10 < 20)devuelve True

> **⚠️ Nota: Cuidado con la sintaxis. Si usamos los símbolos d...**
> Nota: Cuidado con la sintaxis. Si usamos los símbolos de la lógica combinatoria los resultados no serán los esperados. 17 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

#### 2.1.8. Resumen de operadores

2.2. Estructuras de control. Un código es una secuencia de instrucciones, que por norma general son ejecutadas una tras otra. Sin embargo, en muchas ocasiones no basta con ejecutar las instrucciones una tras otra desde el principio hasta llegar al final. Puede ser que ciertas instrucciones se tengan que ejecutar si y sólo si se cumple una determinada condición.

En un lenguaje de programación, las estructuras de control permiten modificar el flujo de la ejecución de un conjunto de instrucciones. Se pueden distinguir tres tipos básicos de control de flujo, a saber

- Bucle condicional if-elif-else
- Bucle for
- Bucle while¶

18 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

#### 2.2.1. Bucle condicional if-elif-else

La estructura de control if ... permite que un programa ejecute unas instrucciones cuando se cumpla una condición. La estructura de control if … else ... permite que un programa ejecute unas instrucciones cuando se cumple una condición y otras instrucciones cuando no se cumple esa condición.

19 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. La estructura de control if … elif … else ... permite encadenar varias condiciones (elif es una contracción de else if). Nota: A diferencia de otros lenguajes de programación, Python no incorpora la función switch.

#### 2.2.2. Bucle de repetición for

El bucle for es una estructura de control de repetición, en la cual se conocen (a priori) el número de iteraciones a realizar. El bucle for usa un iterable que define las veces que se ejecutará el código. En el siguiente ejemplo vemos un bucle for que se ejecuta 5 veces y donde la i incrementa su valor automáticamente en 1 a cada iteración.

20 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. En Python se puede iterar prácticamente todo, como por ejemplo un string, una matriz, una lista, una tupla... 21 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. También se puede usar la función enumerate: Ejemplo donde se devuelve el indice y el valor de la lista.

#### 2.2.3. Bucle de repetición while

El bucle while ejecuta un bloque de instrucciones mientras haya una condición que se cumpla. En el siguiente ejemplo tenemos un bucle infinito del cual saldremos si se cumple una condición. 22 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.2.4. Elementos adicionales a las estructuras de control.

- Break¶

Como acabamos de ver en el ejemplo anterior, la sentencia break nos permite alterar el comportamiento de los bucles while y for. Concretamente, permite terminar con la ejecución del bucle. Break en un bucle for: Break en un bucle while: 23 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- Bucles anidados.

Un bucle anidado es un bucle que se encuentra incluido en el bloque de sentencias de otro bloque. Los bucles pueden tener varios niveles de anidamiento. En los bucles anidados es importante utilizar variables de control distintas, para no obtener resultados inesperados.

Continue¶ Al igual que break, continue permite modificar el comportamiento de los bucles while y for. En este caso continue se salta todo el código restante en la iteración actual y vuelve al principio en el caso de que aún queden iteraciones por completar. La diferencia entre break y continue es que continue no rompe el bucle, sino que pasa a la siguiente iteración saltando el código pendiente.

En este ejemplo podemos ver que cuando el programa encuentra la letra t, no se imprime por consola. No obstante el bucle no se interrumpe y continua hasta completar todas las letras. 24 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- Iteración en paralelo con zip¶

La función zip() crea un iterador que irá agregando elementos procedentes de varios elementos iterables a la vez. Ejemplo de creación de una lista de tuplas: Nota: Como se puede ver, las listas no tienen la misma longitud si usamos esa lista para iterar un bucle for

Como podemos ver la iteración se hace sobre la lista más pequeña 25 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.3. Funciones de entrada y salida. Llevamos usando desde el principio la función print() sin saber muy bien como usarla. De igual manera vamos a describir la función input().

2.3.1. Print(): Función de salida de datos por consola. En Python 3 print() es una función, por lo que el contenido siempre debe estar entre paréntesis. La finalidad de la función print() es imprimir (pintar / visualizar) los resultados que deseamos visualizar en la consola del IDE con el que estamos programando.

Existen diversas maneras de visualizar los datos: • Print() → Texto, escribir texto. Para mostrar texto en la consola se pueden usar las siguientes sintaxis: 26 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. • Print() → Números, escribir datos. Para escribir datos (números, operaciones, ...) el interior del paréntesis debe ir sin comillas. Nota: Para escribir el resultado de una operación es suficiente escribir la operación dentro de los paréntesis de la función print().

27 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. • Print() → Escribir variables y textos La función print() permite permite combinar texto y variables. Nota: Cuidado con el operador + de otros lenguajes de programación. En Python, no sirve para concatenar argumentos en la función print().

28 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. • Cadenas f → Print(f{}), Introducir valores o strings en la función print(). Introducido por primera vez en la versión 3.6 de Python, esta nueva notación, hace más sencillo introducir variables y expresiones en la función print().

Una cadena f contiene variables y expresiones entre llaves "{}" que se sustituyen directamente por su valor. Las cadenas "f" se reconocen porque comienzan por una letra f{}. Cadena f con texto: 29 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Nota: Los {} también pueden devolver operaciones aritméticas. Ya hemos visto que la secuencia de escape “\” nos permite dividir lineas de código (demasiado largas).

También existen otras secuencias como \t, \n y \r (tabulación, linea nueva y retroceso de linea) que pueden tener alguna utilidad a la hora de usar la función print(). Salto de linea \n: 30 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Tabulación \t: Retroceso \r: Nota: Cuidado con el retroceso ya que sobrescribe el texto inicial. 31 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. end= “”: En Python, el valor predeterminado de end es \n. Eso significa que después de la instrucción print, sin especificar el valor de end, se salta de linea. Si el valor no es nulo, entonces se imprimirá al final de la linea el contenido de end y no se saltará a la linea siguiente.

32 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.3.2. Input(): Función de entrada de datos por consola. La entrada de datos en Python se realiza con la función input() pero hay una consideración a tener en cuenta al momento de usar input(): La función input solo devuelve cadenas de caracteres.

En este ejemplo vemos como la clase de la variable var es un string. Otro ejemplo donde el resultado no es el esperado. Para poder introducir datos numéricos deberemos hacer una refundición (que veremos en el siguiente capitulo). 33 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Nota: Se puede añadir texto a la función input() para dar más información al usuario sobre lo que tiene que hacer. 34 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.4. Refundición de variables (casting). Hacer un cast o casting significa convertir un tipo de dato a otro. Hemos visto que los tipos de datos en Python son enteros (int), flotantes (float) y texto (string) Ahora veremos que es posible convertir un tipo de dato a otro.

Antes de nada, es necesario recordar que la asignación de la variables es dinámica, es decir que el interprete de Python decide en cada momento el tipo de los datos que contiene una variable. Eso nos lleva a distinguir 2 tipos de conversiones. Conversión implícita: Es realizada automáticamente por Python. Sucede cuando se realizan operaciones con dos tipos distintos.

Conversión explícita: Es realizada expresamente por el programador (convertir un string a int).

#### 2.4.1. Conversión implícita

Esta conversión de tipos es realizada automáticamente por Python, prácticamente sin que nos demos cuenta. Aún así, es importante saber lo que pasa por debajo para evitar problemas futuros. Aquí abajo un ejemplo donde podemos ver este comportamiento: 35 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

#### 2.4.2. Conversión explícita

Para hacer una conversión explicita haremos uso de las funciones float(), str(), int(), list(), set() entre otras. Si retomamos el ejemplo anterior para introducir datos por consola: 36 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.5. Elementos de un programa en Python (2/2). Hemos usado varias estructuras de datos sin explicarlas previamente. En este apartado hablaremos de las listas, tuplas y diccionarios.

2.5.1. Listas. Las listas son conjuntos ordenados de elementos (números, cadenas, otras listas, etc). Las listas se delimitan por [ ... ] y los elementos se separan por comas. La cantidad de elementos de una lista se puede modificar removiendo o añadiendo elementos.

Ejemplo de una lista de apellidos (strings): Ejemplo de una lista con varios tipos de datos: 37 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Ejemplo de una lista que incluye una lista: 2.5.2. Manipulación de listas.

- Acceso a los elementos de una lista.

Como hemos visto, las listas son elementos iterables lo que también implica que se puede acceder a sus elementos mediante indexación. La sintaxis es lista[índice]. Cuidado: Los índices siempre empiezan en ‘0’. Incorrecto: Correcto: 38 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- Modificación de los elementos de una lista.

Las listas son estructuras de datos dinámicas y por tanto se puede modificar, agregar y quitar sus elementos. Evidentemente, antes de realizar ninguna operación sobre una lista, puede resultar útil conocer su tamaño. Eso se hace utilizando la función len(). Para sustituir un elemento de una lista se accede al elemento correspondiente por indexación y se le asigna un nuevo valor.

También se puede modificar más de un elemento a la vez: 39 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- Agregar elementos a una lista.

Para agregar elementos a una lista podemos utilizar los métodos append, insert y extend del objeto lista (veremos en detalle qué son los métodos y atributos de un objeto en la unidad de programación orientada a objetos POO). ➢ Método append() El método append agrega un nuevo elemento al final de la lista.

Además, solo permite agregar un elemento a la vez. Si pasamos a la lista más de un elemento, se creará una lista anidada. Incorrecto: 40 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Correcto: ➢ Método insert() A diferencia del método append, insert agrega un nuevo elemento en una posición que pasaremos por parámetro a la función insert(). La sintaxis de insert es: lista.insert(índice, elemento a insertar).

Ejemplo donde intercalamos el elemento Sandía a la posición 2 de la lista frutas. 41 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Ejemplo: llenar una lista vacía con los resultados de la ecuación y= x2 con un bucle for.

- Eliminar elementos a una lista.

Para eliminar elementos de una lista se pueden usar los métodos remove, pop y clear. ➢ Método remove() El método remove elimina el elemento de la lista pasado como argumento el elemento a eliminar. Nota importante: En el ejemplo podemos ver que el método remove solo elimina el primer elemento encontrado. De existir varias veces, solo se eliminará el primero.

42 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. ➢ Método pop() El método pop elimina el elemento de una lista cuyo índice ha sido pasado como argumento. Si no se pasa ningún argumento se toma por defecto el índice -1, (último elemento de la lista).

➢ Método clear() Vacía completamente una lista de todos sus elementos. 43 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. ➢ Función del() Para eliminar totalmente una lista podemos usar la palabra reservada para la función del(). Como podemos ver, se genera un error en tiempo de ejecución al haber dejado de existir la lista “frutas”.

- Buscar elementos a una lista.

En cualquier aplicación puede ser necesario buscar o identificar ciertos valores dentro de una lista. Count(): El método count nos permite contar las apariciones de un elemento dentro de una lista. 44 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Index(): El método index devuelve la posición del elemento dentro de esa misma lista. Nota: al igual que para el método remove(), index() solo devuelve el índice del primer elemento encontrado. Si hay más elementos estos no se tendrán en cuenta.

In (palabra reservada): Permite identificar si un elemento (o una secuencia) está presente dentro de un objeto de tipo secuencia. El valor devuelto será de tipo booleano. 45 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.5.3. Tuplas. Al igual que las listas, las tuplas son estructuras de datos que se utilizan para almacenar una colección de elementos. Sin embargo se distinguen en que las tuplas son inmutables, es decir que no se pueden modificar por lo que carecen de los métodos append() o insert().

La sintaxis de la tupla es: tupla=(item1, item2 , 3 ,4, …). Las listas también disponen de métodos para que aparezcan, basta con poner un punto después del nombre de la tupla y el entorno de desarrollo (IDE) los hará aparecer. Para obtener más información sobre los métodos disponibles, consultar la documentación oficial de Python.

46 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.5.4. Diccionarios. Son también unas estructuras que contienen una colección de elementos puestos entre corchetes {…} y ordenados de la siguiente manera: Clave: Valor y separados por comas.

Las claves son objetos inmutables y los valores pueden ser de cualquier tipo. De una manera similar a los valores de las claves primarias de las bases de datos, las claves de los diccionarios deben ser únicas en cada diccionario (no así los valores). Se puede acceder a cada valor de un diccionario mediante su clave

47 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Un diccionario es un elemento iterable y se puede recorrer con un bucle for. 48 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.5.5. Operaciones sobre diccionarios. Al igual que las listas, los diccionarios se puede modificar y como todo objeto dispone de una seria de métodos.

- Añadir elementos a un diccionario.

Para añadir un nuevo elemento a un diccionario existente, se usa el operador de asignación = [nueva clave]= valor nueva clave.

- Modificar elementos a un diccionario.

Lo mismo que para añadir un elemento pero esta vez ponemos el nuevo valor de la clave. 49 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- Eliminar elementos a un diccionario.

Se pueden usar los métodos, pop() y popitem().

- Vaciar o eliminar un diccionario.

Se pueden usar la función del() y el método clear(). 50 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- Comprobar si un elemento existe en un diccionario.

Usar el operador de pertenencia in.

- Comparar 2 diccionarios.

Usar el operador de igualdad ==. 51 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.6. Funciones. Por el momento solo se ha escrito código sin ningún tipo de estructura, lo que implica que todas las líneas del programa se ejecuten. Además, si debemos realizar en varias partes del programa la misma operación, deberemos volver a escribir exactamente el mismo código.

Esos 2 inconvenientes contradicen 2 principios de buenas practicas

- El principio de reusabilidad nos dice que si un fragmento de código se usa en

muchos sitios, la mejor solución será pasarlo a una función.

- El principio de modularidad defiende que en vez de escribir largos trozos de

código, es mejor crear módulos o funciones que agrupen ciertos fragmentos de código, haciendo que el código resultante sea más fácil de leer. Para evitar esos inconvenientes se hace uso de funciones. 2.6.1. Definición de funciones en Python. ➢Las funciones se pueden crear en cualquier punto de un programa.

➢La primera línea de la definición de una función contiene la palabra reservada def. Nota: La guía de estilo de Python recomienda escribir todos los caracteres en minúsculas separando las palabras por guiones bajos). ➢Las instrucciones que forman la función se escriben con sangría con respecto a la primera línea.

➢Al final de la función se puede escribir la palabra reservada return (no siempre es obligatorio). El uso de la sentencia return permite: • Salir de la función y transferir la ejecución de vuelta a donde se realizó la llamada. • Devolver uno o varios parámetros, fruto de la ejecución de la función.

Nota importante: Aunque la función se puede definir en cualquier posición del programa, solo se podrá utilizar si se ha declarado previamente. Para ese motivo se recomienda escribir las funciones al principio de los programas. 52 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.6.2. Paso de argumentos a las funciones. A las funciones se les puede (o no) pasar argumentos es decir variables. Ejemplo 1: Funciones sin argumentos. Ejemplo 2: Funciones con argumentos.

53 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Nota: No se puede no pasar argumentos a una función que sí los requiere. No obstante se le puede pasar argumentos por defecto. Nota importante: Con el siguiente programa vemos que el IDE da error con las variables var3 y var4. Así pues, a la hora de hacer la declaración de variables para escribir las funciones, siempre tendremos que tener en cuenta el ámbito de declaración de las variables (como lo veremos a continuación).

54 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.6.3. Paso de argumentos de longitud variable a las funciones. Imaginemos que queremos una función suma(), pero necesitamos que sume todos los números de entrada que se le pasen (1, 5 , 100...). Una primera forma de hacerlo sería con una lista.

En este caso vemos que estamos pasando una lista de valores variable a la función, pero no estamos pasando una cantidad de argumentos variables. Realmente para pasar un argumento de longitud variable se usa el ‘*’.

55 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. También es posible pasar como parámetro de entrada una lista de elementos almacenados en forma de clave y valor usando ‘**kwargs’.

2.6.4. Sentencia return. Como hemos visto la sentencia return permite devolver uno o varios parámetros, resultado de la ejecución de la función. También indica una salida incondicional de la función y un retorno al punto del programa donde se realizó la llamada a la función.

56 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.6.5. Anotaciones en funciones. Pyrhon permite añadir metadatos a las funciones es decir indicar al programa qué tipo de datos debe devolver la función. 2.6.6. Paso por valor y paso por referencia.

El concepto de paso por valor y por referencia viene a definir como trata la función a los parámetros que se le pasan.

- Si usamos un parámetro pasado por valor, se creará una copia local de la

variable, lo que implica que cualquier modificación sobre la misma no tendrá efecto sobre la original. 57 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- Con una variable pasada como referencia, se actuará directamente sobre la

variable pasada, por lo que las modificaciones afectarán a la variable original.

- Cuidado las listas pasadas por valor. En este caos Python se comporta como si

estuviesen pasadas por parámetro. 58 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- En caso de confusión, usar la función id(). Esa función devuelve el identificador

(único) de cada parámetro. Si los identificadores internos y externos a la función son diferentes, eso significa que los parámetros son diferentes. 59 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.6.7. Funciones Lambda. Sintaxis: lambda argumentos: expresión Es una función que NO tiene nombre, pero es muy útil cuando queremos escribir funciones muy cortas (o muy complejas).

Como cualquier función, se le puede pasar varios parámetros. 60 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Otro ejemplo de declaración de función lambda instanciando con varios métodos. Nota: Este código no genera errores en tiempo de ejecución pero no funciona. 61 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.6.8. Función filter(). A partir de una lista o iterador y una función condicional, devuelve una colección con los elementos filtrados que cumplan la condición.

62 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 2.6.9. Función map(). Aplica una función sobre todos los elementos de una lista y como resultado devuelve un iterable de tipo map: Lo mismo con una función lambda.

63 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 3. PROGRAMACIÓN ORIENTADA A OBJETOS. La programación orientada a objetos (POO) es un paradigma de programación que parte del concepto de "objetos" como base, los cuales contienen información en forma de campos (atributos) y código en forma de métodos.

Ejemplo del objeto coche en la vida real: Atributos: color / cantidad de ruedas / peso / tamaño... Métodos: arrancar, frenar, acelerar, girar... Si trasladamos el objeto coche a los lenguajes de programación tendremos: Objeto coche en un lenguaje informático. Atributos color ruedas peso tamaño ...

Métodos arrancar frenar acelerar girar ... 64 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

#### 3.1. Creación de una clase en Python

En python y en otros lenguajes de programación los objetos se definen mediante clases (class). Ejemplo de creación de la clase coche: 3.2. Creación de un objeto a partir de la clase. 3.3. Definiendo atributos de clase. Los definiremos como a continuación. Después de definir los atributos se pueden instanciar poniendo un punto después del objeto.

65 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 3.4. Cambiando los atributos de clase. Para poder cambiar los atributos de clase, es decir crear un objeto con unos atributos que lle pasaremos, crearemos la función init con la sintaxis: __init__().

A partir de ahora para crear el objeto micoche podremos pasar a la clase coche parámetros que definirán completamente nuestro nuevo objeto. El método __init__ es un método reservado para un uso especial del lenguaje y se conoce como método constructor. 66 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 3.5. Definiendo métodos de clase. Para definir un método usaremos la misma sintaxis que para __init__: A esos métodos se les podrá pasar (o no) argumentos. 67 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 3.6. Encapsulación de métodos. Puede resultar útil hacer que los métodos no sean accesibles desde fuera de la clase: Hablaremos entonces de métodos encapsulados o métodos de clase.

La sintaxis en ese caso es def __metododeclase(): En el ejemplo anterior, si encapsulamos el método __arranca, el editor ya no autocompletará al poner un punto después del objeto micoche. Si seguimos instanciando el objeto micoche y ejecutamos el programa, el IDE nos devolverá un error en tiempo de ejecución.

68 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Nota: Aparece el método __arranca pero tampoco se ejecuta. 69 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 3.7. Acceso a métodos. A diferencia de otros lenguajes de programación los métodos de las clases son globales y siempre son accesibles desde fuera de la clase sin necesidad de crear un objeto de clase.

Como podemos ver en el ejemplo, un método que no requiere objeto (no necesita que le pasen el parámetro “self”) se ejecuta correctamente pero el otro no.

70 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 3.8. Acceso a atributos. Al igual que los métodos, los atributos también son globales y son accesibles desde fuera de la clase. Para encapsular el atributo añadiremos __nombreDelAtributo delante de la variable.

71 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 4. EXCEPCIONES. Las excepciones son herramientas muy útiles a la hora de anticipar errores de ejecución de los programas. Ejemplos

- División por cero.
- Acceder a un archivo que no existe, o una ruta mal definida.
- Realizar una conexión a una base de datos, pero el servidor tarda en responder.

#### 4.1. Uso de try y except

La sintaxis para la gestión de las excepciones con try y except es la siguiente. try: código con posibilidades de generar una excepción. except: código a ejecutar si se ha producido una excepción. Ejemplo: 72 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Ejecución. 73 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 5. ACCESO A ARCHIVOS. 5.1. Abrir un archivo. Para abrir un archivo se puede usar la función open() pasando por argumento la ruta y el nombre del archivo al cual queremos acceder.

5.2. Leer un archivo. Para leer un archivo de texto se puede usar el método .read() del objeto fichero. 74 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 5.3. Leer un archivo linea a linea. También se puede leer un archivo linea a linea con el método .readlline(). En este caso len() nos devuelve la cantidad de lineas del archivo.

Otro ejemplo: 75 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 5.4. Cerrar un archivo. Aunque el SO termina liberando el archivo, es conveniente cerrar el archivo. Para ello se usa el metodo .close(). 5.5. Argumentos adicionales de open().

Normalmente cuando se trabajan con archivos es importante también especificar el modo de apertura. De ese modo es el editor el que se encarga de la gestión de las excepciones (en el caso de producirse). 76 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. 5.6. Otra forma de abrir archivos. Existe una sintaxis más simple para abrir archivos: with open(archivo, argumento) as variable. Ademas la salida del bloque de instrucción implica el cierre (automatico) del archivo.

> **💡 Apunt Tècnic**
> Ejemplo: 77 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial.

- ESCRITURA EN ARCHIVOS.

6.1. Método write(). 78 / 79

Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial. Mismo programa pero usando el with. 79 / 79

---

# 2.2 Python para todos (libro).

Python PARA TODOS Raúl González Duque

Python PARA TODOS Raúl González Duque

```python
Python para todos
```

por Raúl González Duque Este libro se distribuye bajo una licencia Creative Commons Reconocimien­ to 2.5 España. Usted es libre de: copiar, distribuir y comunicar públicamente la obra hacer obras derivadas Bajo las condiciones siguientes: Reconocimiento. Debe reconocer y dar crédito al autor original (Raúl González Duque) Puede descargar la versión más reciente de este libro gratuitamente en la web http://mundogeek.net/tutorial-python/ La imágen de portada es una fotografía de una pitón verde de la especie Morelia viridis cuyo autor es Ian Chien. La fotografía está licenciada bajo Creative Commons Attribution ShareAlike 2.0

Contenido Introducción ¿Qué es Python? ¿Por qué Python? Instalación de Python Herramientas básicas Mi primer programa en Python Tipos básicos Números Cadenas Booleanos Colecciones Listas Tuplas Diccionarios Control de flujo Sentencias condicionales Bucles Funciones Orientación a Objetos Clases y objetos Herencia Herencia múltiple Polimorfismo Encapsulación Clases de “nuevo-estilo” Métodos especiales Revisitando Objetos Diccionarios Cadenas Listas

Programación funcional Funciones de orden superior Iteraciones de orden superior sobre listas Funciones lambda Comprensión de listas Generadores Decoradores Excepciones Módulos y Paquetes Módulos Paquetes Entrada/Salida Y Ficheros Entrada estándar Parámetros de línea de comando Salida estándar Archivos Expresiones Regulares Patrones Usando el módulo re Sockets Interactuar con webs Threads ¿Qué son los procesos y los threads? El GIL Threads en Python Sincronización Datos globales independientes Compartir información Serialización de objetos Bases de Datos DB API Otras opciones Documentación Docstrings Pydoc Epydoc y reStructuredText Pruebas Doctest unittest / PyUnit

Distribuir aplicaciones Python distutils setuptools Crear ejecutables .exe Índice

Introducción ¿Qué es Python?

```python
Python es un lenguaje de programación creado por Guido van Rossum
```

a principios de los años 90 cuyo nombre está inspirado en el grupo de cómicos ingleses “Monty Python”. Es un lenguaje similar a Perl, pero con una sintaxis muy limpia y que favorece un código legible. Se trata de un lenguaje interpretado o de script, con tipado dinámico, fuertemente tipado, multiplataforma y orientado a objetos.

Lenguaje interpretado o de script Un lenguaje interpretado o de script es aquel que se ejecuta utilizando un programa intermedio llamado intérprete, en lugar de compilar el código a lenguaje máquina que pueda comprender y ejecutar directa­ mente una computadora (lenguajes compilados).

La ventaja de los lenguajes compilados es que su ejecución es más rápida. Sin embargo los lenguajes interpretados son más flexibles y más portables.

```python
Python tiene, no obstante, muchas de las características de los lengua­
```

jes compilados, por lo que se podría decir que es semi interpretado. En Python, como en Java y muchos otros lenguajes, el código fuente se traduce a un pseudo código máquina intermedio llamado bytecode la primera vez que se ejecuta, generando archivos .pyc o .pyo (bytecode optimizado), que son los que se ejecutarán en sucesivas ocasiones.

Tipado dinámico La característica de tipado dinámico se refiere a que no es necesario declarar el tipo de dato que va a contener una determinada variable,

```python
Python para todos
```

sino que su tipo se determinará en tiempo de ejecución según el tipo del valor al que se asigne, y el tipo de esta variable puede cambiar si se le asigna un valor de otro tipo. Fuertemente tipado No se permite tratar a una variable como si fuera de un tipo distinto al que tiene, es necesario convertir de forma explícita dicha variable al nuevo tipo previamente. Por ejemplo, si tenemos una variable que contiene un texto (variable de tipo cadena o string) no podremos tra­ tarla como un número (sumar la cadena “9” y el número 8). En otros lenguajes el tipo de la variable cambiaría para adaptarse al comporta­ miento esperado, aunque esto es más propenso a errores.

Multiplataforma El intérprete de Python está disponible en multitud de plataformas (UNIX, Solaris, Linux, DOS, Windows, OS/2, Mac OS, etc.) por lo que si no utilizamos librerías específicas de cada plataforma nuestro programa podrá correr en todos estos sistemas sin grandes cambios.

Orientado a objetos La orientación a objetos es un paradigma de programación en el que los conceptos del mundo real relevantes para nuestro problema se tras­ ladan a clases y objetos en nuestro programa. La ejecución del progra­ ma consiste en una serie de interacciones entre los objetos.

```python
Python también permite la programación imperativa, programación
```

funcional y programación orientada a aspectos. ¿Por qué Python?

```python
Python es un lenguaje que todo el mundo debería conocer. Su sintaxis
```

simple, clara y sencilla; el tipado dinámico, el gestor de memoria, la gran cantidad de librerías disponibles y la potencia del lenguaje, entre otros, hacen que desarrollar una aplicación en Python sea sencillo, muy rápido y, lo que es más importante, divertido. La sintaxis de Python es tan sencilla y cercana al lenguaje natural que

Introducción los programas elaborados en Python parecen pseudocódigo. Por este motivo se trata además de uno de los mejores lenguajes para comenzar a programar.

```python
Python no es adecuado sin embargo para la programación de bajo
```

nivel o para aplicaciones en las que el rendimiento sea crítico. Algunos casos de éxito en el uso de Python son Google, Yahoo, la NASA, Industrias Light & Magic, y todas las distribuciones Linux, en las que Python cada vez representa un tanto por ciento mayor de los programas disponibles.

Instalación de Python Existen varias implementaciones distintas de Python: CPython, Jython, IronPython, PyPy, etc. CPython es la más utilizada, la más rápida y la más madura. Cuando la gente habla de Python normalmente se refiere a esta implementación. En este caso tanto el intérprete como los módulos están escritos en C.

Jython es la implementación en Java de Python, mientras que IronPython es su contrapartida en C# (.NET). Su interés estriba en que utilizando estas implementaciones se pueden utilizar todas las librerías disponibles para los programadores de Java y .NET. PyPy, por último, como habréis adivinado por el nombre, se trata de una implementación en Python de Python.

CPython está instalado por defecto en la mayor parte de las distribu­ ciones Linux y en las últimas versiones de Mac OS. Para comprobar si está instalado abre una terminal y escribe python. Si está instalado se iniciará la consola interactiva de Python y obtendremos parecido a lo siguiente

```python
Python 2.5.1 (r251:54863, May 2 2007, 16:56:35)
```

[GCC 4.1.2 (Ubuntu 4.1.2-0ubuntu4)] on linux2 Type “help”, “copyright”, “credits” or “license” for more information. >>>

```python
Python para todos
```

La primera línea nos indica la versión de Python que tenemos ins­ talada. Al final podemos ver el prompt (>>>) que nos indica que el intérprete está esperando código del usuario. Podemos salir escribiendo exit(), o pulsando Control + D. Si no te muestra algo parecido no te preocupes, instalar Python es muy sencillo. Puedes descargar la versión correspondiente a tu sistema ope­ rativo desde la web de Python, en http://www.python.org/download/.

Existen instaladores para Windows y Mac OS. Si utilizas Linux es muy probable que puedas instalarlo usando la herramienta de gestión de paquetes de tu distribución, aunque también podemos descargar la aplicación compilada desde la web de Python. Herramientas básicas Existen dos formas de ejecutar código Python. Podemos escribir líneas de código en el intérprete y obtener una respuesta del intérprete para cada línea (sesión interactiva) o bien podemos escribir el código de un programa en un archivo de texto y ejecutarlo.

A la hora de realizar una sesión interactiva os aconsejo instalar y uti­ lizar iPython, en lugar de la consola interactiva de Python. Se puede encontrar en http://ipython.scipy.org/. iPython cuenta con características añadidas muy interesantes, como el autocompletado o el operador ?.

(para activar la característica de autocompletado en Windows es nece­ sario instalar PyReadline, que puede descargarse desde http://ipython. scipy.org/ moin/PyReadline/Intro) La función de autocompletado se lanza pulsando el tabulador. Si escribimos fi y pulsamos Tab nos mostrará una lista de los objetos que comienzan con fi (file, filter y finally). Si escribimos file. y pulsamos Tab nos mostrará una lista de los métodos y propiedades del objeto file.

El operador ? nos muestra información sobre los objetos. Se utiliza añadiendo el símbolo de interrogación al final del nombre del objeto del cual queremos más información. Por ejemplo: In [3]: str?

Introducción Type: type Base Class: String Form: Namespace: Python builtin Docstring: str(object) -> string Return a nice string representation of the object. If the argument is a string, the return value is the same object. En el campo de IDEs y editores de código gratuitos PyDEV (http:// pydev.sourceforge.net/) se alza como cabeza de serie. PyDEV es un plu­ gin para Eclipse que permite utilizar este IDE multiplataforma para programar en Python. Cuenta con autocompletado de código (con información sobre cada elemento), resaltado de sintaxis, un depurador gráfico, resaltado de errores, explorador de clases, formateo del código, refactorización, etc. Sin duda es la opción más completa, sobre todo si instalamos las extensiones comerciales, aunque necesita de una canti­ dad importante de memoria y no es del todo estable.

Otras opciones gratuitas a considerar son SPE o Stani’s Python Editor (http://sourceforge.net/projects/spe/), Eric (http://die-offenbachs.de/eric/), BOA Constructor (http://boa-constructor.sourceforge.net/) o incluso emacs o vim. Si no te importa desembolsar algo de dinero, Komodo (http://www.

activestate.com/komodo_ide/) y Wing IDE (http://www.wingware.com/) son también muy buenas opciones, con montones de características interesantes, como PyDEV, pero mucho más estables y robustos. Ade­ más, si desarrollas software libre no comercial puedes contactar con Wing Ware y obtener, con un poco de suerte, una licencia gratuita para Wing IDE Professional :)

Mi primer programa en Python Como comentábamos en el capítulo anterior existen dos formas de ejecutar código Python, bien en una sesión interactiva (línea a línea) con el intérprete, o bien de la forma habitual, escribiendo el código en un archivo de código fuente y ejecutándolo.

El primer programa que vamos a escribir en Python es el clásico Hola Mundo, y en este lenguaje es tan simple como: print “Hola Mundo” Vamos a probarlo primero en el intérprete. Ejecuta python o ipython según tus preferencias, escribe la línea anterior y pulsa Enter. El intér­ prete responderá mostrando en la consola el texto Hola Mundo.

Vamos ahora a crear un archivo de texto con el código anterior, de forma que pudiéramos distribuir nuestro pequeño gran programa entre nuestros amigos. Abre tu editor de texto preferido o bien el IDE que hayas elegido y copia la línea anterior. Guárdalo como hola.py, por ejemplo.

Ejecutar este programa es tan sencillo como indicarle el nombre del archivo a ejecutar al intérprete de Python

```python
python hola.py
```

Mi primer programa en Python pero vamos a ver cómo simplificarlo aún más. Si utilizas Windows los archivos .py ya estarán asociados al intérprete de Python, por lo que basta hacer doble clic sobre el archivo para eje­ cutar el programa. Sin embargo como este programa no hace más que imprimir un texto en la consola, la ejecución es demasiado rápida para poder verlo si quiera. Para remediarlo, vamos a añadir una nueva línea que espere la entrada de datos por parte del usuario.

print “Hola Mundo” raw_input() De esta forma se mostrará una consola con el texto Hola Mundo hasta que pulsemos Enter. Si utilizas Linux (u otro Unix) para conseguir este comportamiento, es decir, para que el sistema operativo abra el archivo .py con el intérprete adecuado, es necesario añadir una nueva línea al principio del archivo

#!/usr/bin/python print “Hola Mundo” raw_input() A esta línea se le conoce en el mundo Unix como shebang, hashbang o sharpbang. El par de caracteres #! indica al sistema operativo que dicho script se debe ejecutar utilizando el intérprete especificado a continuación. De esto se desprende, evidentemente, que si esta no es la ruta en la que está instalado nuestro intérprete de Python, es necesario cambiarla.

Otra opción es utilizar el programa env (de environment, entorno) para preguntar al sistema por la ruta al intérprete de Python, de forma que nuestros usuarios no tengan ningún problema si se diera el caso de que el programa no estuviera instalado en dicha ruta: #!/usr/bin/env python print “Hola Mundo” raw_input() Por supuesto además de añadir el shebang, tendremos que dar permi­ sos de ejecución al programa.

```python
Python para todos
chmod +x hola.py
```

Y listo, si hacemos doble clic el programa se ejecutará, mostrando una consola con el texto Hola Mundo, como en el caso de Windows. También podríamos correr el programa desde la consola como si trata­ ra de un ejecutable cualquiera: ./hola.py

Tipos básicos En Python los tipos básicos se dividen en: Números, como pueden ser • 3 (entero), 15.57 (de coma flotante) o 7 + 5j (complejos) Cadenas de texto, como • “Hola Mundo” Valores booleanos: • True (cierto) y False (falso). Vamos a crear un par de variables a modo de ejemplo. Una de tipo cadena y una de tipo entero

```python
# esto es una cadena
```

c = “Hola Mundo”

```python
# y esto es un entero
```

e = 23

```python
# podemos comprobarlo con la función type
```

type(c) type(e) Como veis en Python, a diferencia de muchos otros lenguajes, no se declara el tipo de la variable al crearla. En Java, por ejemplo, escribiría­ mos

```python
String c = “Hola Mundo”;
int e = 23;
```

Este pequeño ejemplo también nos ha servido para presentar los comentarios inline en Python: cadenas de texto que comienzan con el carácter # y que Python ignora totalmente. Hay más tipos de comenta­ rios, de los que hablaremos más adelante.

```python
Python para todos
```

Números Como decíamos, en Python se pueden representar números enteros, reales y complejos. Enteros Los números enteros son aquellos números positivos o negativos que no tienen decimales (además del cero). En Python se pueden repre­ sentar mediante el tipo int (de integer, entero) o el tipo long (largo).

La única diferencia es que el tipo long permite almacenar números más grandes. Es aconsejable no utilizar el tipo long a menos que sea necesario, para no malgastar memoria. El tipo int de Python se implementa a bajo nivel mediante un tipo long de C. Y dado que Python utiliza C por debajo, como C, y a dife­ rencia de Java, el rango de los valores que puede representar depende de la plataforma.

En la mayor parte de las máquinas el long de C se almacena utilizando 32 bits, es decir, mediante el uso de una variable de tipo int de Python podemos almacenar números de -231 a 231 - 1, o lo que es lo mismo, de -2.147.483.648 a 2.147.483.647. En plataformas de 64 bits, el rango es de -9.223.372.036.854.775.808 hasta 9.223.372.036.854.775.807.

El tipo long de Python permite almacenar números de cualquier preci­ sión, estando limitados solo por la memoria disponible en la máquina. Al asignar un número a una variable esta pasará a tener tipo int, a menos que el número sea tan grande como para requerir el uso del tipo long.

```python
# type(entero) devolvería int
```

entero = 23 También podemos indicar a Python que un número se almacene usan­ do long añadiendo una L al final

```python
# type(entero) devolvería long
```

entero = 23L

Tipos básicos El literal que se asigna a la variable también se puede expresar como un octal, anteponiendo un cero

```python
# 027 octal = 23 en base 10
```

entero = 027 o bien en hexadecimal, anteponiendo un 0x

```python
# 0×17 hexadecimal = 23 en base 10
```

entero = 0×17 Reales Los números reales son los que tienen decimales. En Python se expre­ san mediante el tipo float. En otros lenguajes de programación, como C, tenemos también el tipo double, similar a float pero de mayor precisión (double = doble precisión). Python, sin embargo, implementa su tipo float a bajo nivel mediante una variable de tipo double de C, es decir, utilizando 64 bits, luego en Python siempre se utiliza doble precisión, y en concreto se sigue el estándar IEEE 754: 1 bit para el signo, 11 para el exponente, y 52 para la mantisa. Esto significa que los valores que podemos representar van desde ±2,2250738585072020 x 10-308 hasta ±1,7976931348623157×10308.

La mayor parte de los lenguajes de programación siguen el mismo esquema para la representación interna. Pero como muchos sabréis esta tiene sus limitaciones, impuestas por el hardware. Por eso desde

```python
Python 2.4 contamos también con un nuevo tipo Decimal, para el
```

caso de que se necesite representar fracciones de forma más precisa. Sin embargo este tipo está fuera del alcance de este tutorial, y sólo es necesario para el ámbito de la programación científica y otros rela­ cionados. Para aplicaciones normales podeis utilizar el tipo float sin miedo, como ha venido haciéndose desde hace años, aunque teniendo en cuenta que los números en coma flotante no son precisos (ni en este ni en otros lenguajes de programación).

Para representar un número real en Python se escribe primero la parte entera, seguido de un punto y por último la parte decimal. real = 0.2703

```python
Python para todos
```

También se puede utilizar notación científica, y añadir una e (de expo­ nente) para indicar un exponente en base 10. Por ejemplo: real = 0.1e-3 sería equivalente a 0.1 x 10-3 = 0.1 x 0.001 = 0.0001 Complejos Los números complejos son aquellos que tienen parte imaginaria. Si no conocías de su existencia, es más que probable que nunca lo vayas a necesitar, por lo que puedes saltarte este apartado tranquilamente. De hecho la mayor parte de lenguajes de programación carecen de este tipo, aunque sea muy utilizado por ingenieros y científicos en general.

En el caso de que necesitéis utilizar números complejos, o simplemen­ te tengáis curiosidad, os diré que este tipo, llamado complex en Python, también se almacena usando coma flotante, debido a que estos núme­ ros son una extensión de los números reales. En concreto se almacena en una estructura de C, compuesta por dos variables de tipo double, sirviendo una de ellas para almacenar la parte real y la otra para la parte imaginaria.

Los números complejos en Python se representan de la siguiente forma: complejo = 2.1 + 7.8j Operadores Veamos ahora qué podemos hacer con nuestros números usando los operadores por defecto. Para operaciones más complejas podemos recurrir al módulo math. Operadores aritméticos Operador Descripción Ejemplo + Suma r = 3 + 2 # r es 5 - Resta r = 4 - 7 # r es -3

Tipos básicos Operador Descripción Ejemplo - Negación r = -7 # r es -7 * Multiplicación r = 2 * 6 # r es 12 ** Exponente r = 2 ** 6 # r es 64 / División r = 3.5 / 2 # r es 1.75 // División entera r = 3.5 // 2 # r es 1.0 % Módulo r = 7 % 2 # r es 1 Puede que tengáis dudas sobre cómo funciona el operador de módulo, y cuál es la diferencia entre división y división entera.

El operador de módulo no hace otra cosa que devolvernos el resto de la división entre los dos operandos. En el ejemplo, 7/2 sería 3, con 1 de resto, luego el módulo es 1. La diferencia entre división y división entera no es otra que la que indica su nombre. En la división el resultado que se devuelve es un número real, mientras que en la división entera el resultado que se devuelve es solo la parte entera.

No obstante hay que tener en cuenta que si utilizamos dos operandos enteros, Python determinará que queremos que la variable resultado también sea un entero, por lo que el resultado de, por ejemplo, 3 / 2 y 3 // 2 sería el mismo: 1. Si quisiéramos obtener los decimales necesitaríamos que al menos uno de los operandos fuera un número real, bien indicando los decimales r = 3.0 / 2 o bien utilizando la función float (no es necesario que sepais lo que significa el término función, ni que recordeis esta forma, lo veremos un poco más adelante)

r = float(3) / 2 Esto es así porque cuando se mezclan tipos de números, Python con­

```python
Python para todos
```

vierte todos los operandos al tipo más complejo de entre los tipos de los operandos. Operadores a nivel de bit Si no conocéis estos operadores es poco probable que vayáis a necesi­ tarlos, por lo que podéis obviar esta parte. Si aún así tenéis curiosidad os diré que estos son operadores que actúan sobre las representaciones en binario de los operandos.

Por ejemplo, si veis una operación como 3 & 2, lo que estais viendo es un and bit a bit entre los números binarios 11 y 10 (las representacio­ nes en binario de 3 y 2). El operador and (&), del inglés “y”, devuelve 1 si el primer bit operando es 1 y el segundo bit operando es 1. Se devuelve 0 en caso contrario.

El resultado de aplicar and bit a bit a 11 y 10 sería entonces el número binario 10, o lo que es lo mismo, 2 en decimal (el primer dígito es 1 para ambas cifras, mientras que el segundo es 1 sólo para una de ellas). El operador or (|), del inglés “o”, devuelve 1 si el primer operando es 1 o el segundo operando es 1. Para el resto de casos se devuelve 0.

El operador xor u or exclusivo (^) devuelve 1 si uno de los operandos es 1 y el otro no lo es. El operador not (~), del inglés “no”, sirve para negar uno a uno cada bit; es decir, si el operando es 0, cambia a 1 y si es 1, cambia a 0. Por último los operadores de desplazamiento (<< y >>) sirven para desplazar los bits n posiciones hacia la izquierda o la derecha.

Operador Descripción Ejemplo & and r = 3 & 2 # r es 2 | or r = 3 | 2 # r es 3 ^ xor r = 3 ^ 2 # r es 1 ~ not r = ~3 # r es -4

Tipos básicos << Desplazamiento izq. r = 3 << 1 # r es 6 >> Desplazamiento der. r = 3 >> 1 # r es 1 Cadenas Las cadenas no son más que texto encerrado entre comillas simples (‘cadena’) o dobles (“cadena”). Dentro de las comillas se pueden añadir caracteres especiales escapándolos con \, como \n, el carácter de nueva línea, o \t, el de tabulación.

Una cadena puede estar precedida por el carácter u o el carácter r, los cuales indican, respectivamente, que se trata de una cadena que utiliza codificación Unicode y una cadena raw (del inglés, cruda). Las cade­ nas raw se distinguen de las normales en que los caracteres escapados mediante la barra invertida (\) no se sustituyen por sus contrapartidas.

Esto es especialmente útil, por ejemplo, para las expresiones regulares, como veremos en el capítulo correspondiente. unicode = u”äóè” raw = r”\n” También es posible encerrar una cadena entre triples comillas (simples o dobles). De esta forma podremos escribir el texto en varias líneas, y al imprimir la cadena, se respetarán los saltos de línea que introdujimos sin tener que recurrir al carácter \n, así como las comillas sin tener que escaparlas.

triple = “““primera linea esto se vera en otra linea””” Las cadenas también admiten operadores como +, que funciona reali­ zando una concatenación de las cadenas utilizadas como operandos y *, en la que se repite la cadena tantas veces como lo indique el número utilizado como segundo operando.

a = “uno” b = “dos” c = a + b # c es “unodos” c = a * 3 # c es “unounouno”

```python
Python para todos
```

Booleanos Como decíamos al comienzo del capítulo una variable de tipo boolea­ no sólo puede tener dos valores: True (cierto) y False (falso). Estos valores son especialmente importantes para las expresiones condicio­ nales y los bucles, como veremos más adelante. En realidad el tipo bool (el tipo de los booleanos) es una subclase del tipo int. Puede que esto no tenga mucho sentido para tí si no conoces los términos de la orientación a objetos, que veremos más adelante, aunque tampoco es nada importante.

Estos son los distintos tipos de operadores con los que podemos traba­ jar con valores booleanos, los llamados operadores lógicos o condicio­ nales: Operador Descripción Ejemplo and ¿se cumple a y b? r = True and False # r es False or ¿se cumple a o b? r = True or False # r es True not No a r = not True # r es False Los valores booleanos son además el resultado de expresiones que utilizan operadores relacionales (comparaciones entre valores)

Operador Descripción Ejemplo == ¿son iguales a y b? r = 5 == 3 # r es False != ¿son distintos a y b? r = 5 != 3 # r es True < ¿es a menor que b? r = 5 < 3 # r es False > ¿es a mayor que b? r = 5 > 3 # r es True

Tipos básicos <= ¿es a menor o igual que b? r = 5 <= 5 # r es True >= ¿es a mayor o igual que b? r = 5 >= 3 # r es True

Colecciones En el capítulo anterior vimos algunos tipos básicos, como los números, las cadenas de texto y los booleanos. En esta lección veremos algunos tipos de colecciones de datos: listas, tuplas y diccionarios. Listas La lista es un tipo de colección ordenada. Sería equivalente a lo que en otros lenguajes se conoce por arrays, o vectores.

Las listas pueden contener cualquier tipo de dato: números, cadenas, booleanos, … y también listas. Crear una lista es tan sencillo como indicar entre corchetes, y separa­ dos por comas, los valores que queremos incluir en la lista: l = [22, True, “una lista”, [1, 2]] Podemos acceder a cada uno de los elementos de la lista escribiendo el nombre de la lista e indicando el índice del elemento entre corchetes.

Ten en cuenta sin embargo que el índice del primer elemento de la lista es 0, y no 1: l = [11, False] mi_var = l[0] # mi_var vale 11 Si queremos acceder a un elemento de una lista incluida dentro de otra lista tendremos que utilizar dos veces este operador, primero para in­ dicar a qué posición de la lista exterior queremos acceder, y el segundo para seleccionar el elemento de la lista interior

l = [“una lista”, [1, 2]]

Colecciones mi_var = l[1][0] # mi_var vale 1 También podemos utilizar este operador para modificar un elemento de la lista si lo colocamos en la parte izquierda de una asignación: l = [22, True] l[0] = 99 # Con esto l valdrá [99, True] El uso de los corchetes para acceder y modificar los elementos de una lista es común en muchos lenguajes, pero Python nos depara varias sorpresas muy agradables.

Una curiosidad sobre el operador [] de Python es que podemos utili­ zar también números negativos. Si se utiliza un número negativo como índice, esto se traduce en que el índice empieza a contar desde el final, hacia la izquierda; es decir, con [-1] accederíamos al último elemento de la lista, con [-2] al penúltimo, con [-3], al antepenúltimo, y así sucesivamente.

Otra cosa inusual es lo que en Python se conoce como slicing o parti­ cionado, y que consiste en ampliar este mecanismo para permitir selec­ cionar porciones de la lista. Si en lugar de un número escribimos dos números inicio y fin separados por dos puntos (inicio:fin) Python interpretará que queremos una lista que vaya desde la posición inicio a la posición fin, sin incluir este último. Si escribimos tres números (inicio:fin:salto) en lugar de dos, el tercero se utiliza para determi­ nar cada cuantas posiciones añadir un elemento a la lista.

l = [99, True, “una lista”, [1, 2]] mi_var = l[0:2] # mi_var vale [99, True] mi_var = l[0:4:2] # mi_var vale [99, “una lista”] Los números negativos también se pueden utilizar en un slicing, con el mismo comportamiento que se comentó anteriormente. Hay que mencionar así mismo que no es necesario indicar el principio y el final del slicing, sino que, si estos se omiten, se usarán por defecto las posiciones de inicio y fin de la lista, respectivamente

l = [99, True, “una lista”] mi_var = l[1:] # mi_var vale [True, “una lista”]

```python
Python para todos
```

mi_var = l[:2] # mi_var vale [99, True] mi_var = l[:] # mi_var vale [99, True, “una lista”] mi_var = l[::2] # mi_var vale [99, “una lista”] También podemos utilizar este mecanismo para modificar la lista: l = [99, True, “una lista”, [1, 2]] l[0:2] = [0, 1] # l vale [0, 1, “una lista”, [1, 2]] pudiendo incluso modificar el tamaño de la lista si la lista de la parte derecha de la asignación tiene un tamaño menor o mayor que el de la selección de la parte izquierda de la asignación

l[0:2] = [False] # l vale [False, “una lista”, [1, 2]] En todo caso las listas ofrecen mecanismos más cómodos para ser mo­ dificadas a través de las funciones de la clase correspondiente, aunque no veremos estos mecanismos hasta más adelante, después de explicar lo que son las clases, los objetos y las funciones.

Tuplas Todo lo que hemos explicado sobre las listas se aplica también a las tuplas, a excepción de la forma de definirla, para lo que se utilizan paréntesis en lugar de corchetes. t = (1, 2, True, “python”) En realidad el constructor de la tupla es la coma, no el paréntesis, pero el intérprete muestra los paréntesis, y nosotros deberíamos utilizarlos, por claridad.

```python
>>> t = 1, 2, 3
>>> type(t)
```

type “tuple” Además hay que tener en cuenta que es necesario añadir una coma para tuplas de un solo elemento, para diferenciarlo de un elemento entre paréntesis.

```python
>>> t = (1)
>>> type(t)
```

Colecciones type “int”

```python
>>> t = (1,)
>>> type(t)
```

type “tuple” Para referirnos a elementos de una tupla, como en una lista, se usa el operador []: mi_var = t[0] # mi_var es 1 mi_var = t[0:2] # mi_var es (1, 2) Podemos utilizar el operador [] debido a que las tuplas, al igual que las listas, forman parte de un tipo de objetos llamados secuencias.

Permitirme un pequeño inciso para indicaros que las cadenas de texto también son secuencias, por lo que no os extrañará que podamos hacer cosas como estas: c = “hola mundo” c[0] # h c[5:] # mundo c[::3] # hauo Volviendo al tema de las tuplas, su diferencia con las listas estriba en que las tuplas no poseen estos mecanismos de modificación a través de funciones tan útiles de los que hablábamos al final de la anterior sección.

Además son inmutables, es decir, sus valores no se pueden modificar una vez creada; y tienen un tamaño fijo. A cambio de estas limitaciones las tuplas son más “ligeras” que las listas, por lo que si el uso que le vamos a dar a una colección es muy básico, puedes utilizar tuplas en lugar de listas y ahorrar memoria.

Diccionarios Los diccionarios, también llamados matrices asociativas, deben su nombre a que son colecciones que relacionan una clave y un valor. Por ejemplo, veamos un diccionario de películas y directores: d = {“Love Actually “: “Richard Curtis”, “Kill Bill”: “Tarantino”,

```python
Python para todos
     “Amélie”: “Jean-Pierre Jeunet”}
```

El primer valor se trata de la clave y el segundo del valor asociado a la clave. Como clave podemos utilizar cualquier valor inmutable: podríamos usar números, cadenas, booleanos, tuplas, … pero no listas o diccionarios, dado que son mutables. Esto es así porque los diccio­ narios se implementan como tablas hash, y a la hora de introducir un nuevo par clave-valor en el diccionario se calcula el hash de la clave para después poder encontrar la entrada correspondiente rápidamente.

Si se modificara el objeto clave después de haber sido introducido en el diccionario, evidentemente, su hash también cambiaría y no podría ser encontrado. La diferencia principal entre los diccionarios y las listas o las tuplas es que a los valores almacenados en un diccionario se les accede no por su índice, porque de hecho no tienen orden, sino por su clave, utilizando de nuevo el operador [].

d[“Love Actually “] # devuelve “Richard Curtis” Al igual que en listas y tuplas también se puede utilizar este operador para reasignar valores. d[“Kill Bill”] = “Quentin Tarantino” Sin embargo en este caso no se puede utilizar slicing, entre otras cosas porque los diccionarios no son secuencias, si no mappings (mapeados, asociaciones).

Control de flujo En esta lección vamos a ver los condicionales y los bucles. Sentencias condicionales Si un programa no fuera más que una lista de órdenes a ejecutar de forma secuencial, una por una, no tendría mucha utilidad. Los con­ dicionales nos permiten comprobar condiciones y hacer que nuestro programa se comporte de una forma u otra, que ejecute un fragmento de código u otro, dependiendo de esta condición.

Aquí es donde cobran su importancia el tipo booleano y los operadores lógicos y relacionales que aprendimos en el capítulo sobre los tipos básicos de Python. if La forma más simple de un estamento condicional es un if (del inglés si) seguido de la condición a evaluar, dos puntos (:) y en la siguiente línea e indentado, el código a ejecutar en caso de que se cumpla dicha condición.

fav = “mundogeek.net”

```python
# si (if) fav es igual a “mundogeek.net”
```

if fav == “mundogeek.net”: print “Tienes buen gusto!” print “Gracias” Como veis es bastante sencillo. Eso si, aseguraros de que indentáis el código tal cual se ha hecho en el ejemplo, es decir, aseguraros de pulsar Tabulación antes de las dos ór­ denes print, dado que esta es la forma de Python de saber que vuestra intención es la de que los dos print se ejecuten sólo en el caso de que

```python
Python para todos
```

se cumpla la condición, y no la de que se imprima la primera cadena si se cumple la condición y la otra siempre, cosa que se expresaría así: if fav == “mundogeek.net”: print “Tienes buen gusto!” print “Gracias” En otros lenguajes de programación los bloques de código se determi­ nan encerrándolos entre llaves, y el indentarlos no se trata más que de una buena práctica para que sea más sencillo seguir el flujo del progra­ ma con un solo golpe de vista. Por ejemplo, el código anterior expresa­ do en Java sería algo así

```python
String fav = “mundogeek.net”;
if (fav.equals(“mundogeek.net”)){
    System.out.println(“Tienes buen gusto!”);
    System.out.println(“Gracias”);
}
```

Sin embargo, como ya hemos comentado, en Python se trata de una obligación, y no de una elección. De esta forma se obliga a los progra­ madores a indentar su código para que sea más sencillo de leer :) if … else Vamos a ver ahora un condicional algo más complicado. ¿Qué haría­ mos si quisiéramos que se ejecutaran unas ciertas órdenes en el caso de que la condición no se cumpliera? Sin duda podríamos añadir otro if que tuviera como condición la negación del primero

if fav == “mundogeek.net”: print “Tienes buen gusto!” print “Gracias” if fav != “mundogeek.net”: print “Vaya, que lástima” pero el condicional tiene una segunda construcción mucho más útil: if fav == “mundogeek.net”: print “Tienes buen gusto!” print “Gracias” else: print “Vaya, que lástima”

Control de flujo Vemos que la segunda condición se puede sustituir con un else (del inglés: si no, en caso contrario). Si leemos el código vemos que tiene bastante sentido: “si fav es igual a mundogeek.net, imprime esto y esto, si no, imprime esto otro”. if … elif … elif … else Todavía queda una construcción más que ver, que es la que hace uso del elif.

if numero < 0: print “Negativo” elif numero > 0: print “Positivo” else: print “Cero” elif es una contracción de else if, por lo tanto elif numero > 0 puede leerse como “si no, si numero es mayor que 0”. Es decir, primero se evalúa la condición del if. Si es cierta, se ejecuta su código y se con­ tinúa ejecutando el código posterior al condicional; si no se cumple, se evalúa la condición del elif. Si se cumple la condición del elif se ejecuta su código y se continua ejecutando el código posterior al condicional; si no se cumple y hay más de un elif se continúa con el siguiente en orden de aparición. Si no se cumple la condición del if ni de ninguno de los elif, se ejecuta el código del else.

A if C else B También existe una construcción similar al operador ? de otros lengua­ jes, que no es más que una forma compacta de expresar un if else. En esta construcción se evalúa el predicado C y se devuelve A si se cumple o B si no se cumple: A if C else B. Veamos un ejemplo

var = “par” if (num % 2 == 0) else “impar” Y eso es todo. Si conocéis otros lenguajes de programación puede que esperarais que os hablara ahora del switch, pero en Python no existe esta construcción, que podría emularse con un simple diccionario, así que pasemos directamente a los bucles.

```python
Python para todos
```

Bucles Mientras que los condicionales nos permiten ejecutar distintos frag­ mentos de código dependiendo de ciertas condiciones, los bucles nos permiten ejecutar un mismo fragmento de código un cierto número de veces, mientras se cumpla una determinada condición. while El bucle while (mientras) ejecuta un fragmento de código mientras se cumpla una condición.

edad = 0 while edad < 18: edad = edad + 1 print “Felicidades, tienes “ + str(edad) La variable edad comienza valiendo 0. Como la condición de que edad es menor que 18 es cierta (0 es menor que 18), se entra en el bucle. Se aumenta edad en 1 y se imprime el mensaje informando de que el usuario ha cumplido un año. Recordad que el operador + para las cadenas funciona concatenando ambas cadenas. Es necesario utilizar la función str (de string, cadena) para crear una cadena a partir del número, dado que no podemos concatenar números y cadenas, pero ya comentaremos esto y mucho más en próximos capítulos.

Ahora se vuelve a evaluar la condición, y 1 sigue siendo menor que 18, por lo que se vuelve a ejecutar el código que aumenta la edad en un año e imprime la edad en la pantalla. El bucle continuará ejecutándose hasta que edad sea igual a 18, momento en el cual la condición dejará de cumplirse y el programa continuaría ejecutando las instrucciones siguientes al bucle.

Ahora imaginemos que se nos olvidara escribir la instrucción que aumenta la edad. En ese caso nunca se llegaría a la condición de que edad fuese igual o mayor que 18, siempre sería 0, y el bucle continuaría indefinidamente escribiendo en pantalla Has cumplido 0. Esto es lo que se conoce como un bucle infinito.

Control de flujo Sin embargo hay situaciones en las que un bucle infinito es útil. Por ejemplo, veamos un pequeño programa que repite todo lo que el usua­ rio diga hasta que escriba adios. while True: entrada = raw_input(“> “) if entrada == “adios”: break else: print entrada Para obtener lo que el usuario escriba en pantalla utilizamos la función raw_input. No es necesario que sepais qué es una función ni cómo funciona exactamente, simplemente aceptad por ahora que en cada iteración del bucle la variable entrada contendrá lo que el usuario escribió hasta pulsar Enter.

Comprobamos entonces si lo que escribió el usuario fue adios, en cuyo caso se ejecuta la orden break o si era cualquier otra cosa, en cuyo caso se imprime en pantalla lo que el usuario escribió. La palabra clave break (romper) sale del bucle en el que estamos. Este bucle se podría haber escrito también, no obstante, de la siguiente forma

salir = False while not salir: entrada = raw_input() if entrada == “adios”: salir = True else: print entrada pero nos ha servido para ver cómo funciona break. Otra palabra clave que nos podemos encontrar dentro de los bucles es continue (continuar). Como habréis adivinado no hace otra cosa que pasar directamente a la siguiente iteración del bucle.

edad = 0 while edad < 18

```python
Python para todos
    edad = edad + 1
    if edad % 2 == 0:
        continue
    print “Felicidades, tienes “ + str(edad)
```

Como veis esta es una pequeña modificación de nuestro programa de felicitaciones. En esta ocasión hemos añadido un if que comprueba si la edad es par, en cuyo caso saltamos a la próxima iteración en lugar de imprimir el mensaje. Es decir, con esta modificación el programa sólo imprimiría felicitaciones cuando la edad fuera impar.

for … in A los que hayáis tenido experiencia previa con según que lenguajes este bucle os va a sorprender gratamente. En Python for se utiliza como una forma genérica de iterar sobre una secuencia. Y como tal intenta facilitar su uso para este fin. Este es el aspecto de un bucle for en Python

secuencia = [“uno”, “dos”, “tres”] for elemento in secuencia: print elemento Como hemos dicho los for se utilizan en Python para recorrer secuen­ cias, por lo que vamos a utilizar un tipo secuencia, como es la lista, para nuestro ejemplo. Leamos la cabecera del bucle como si de lenguaje natural se tratara

“para cada elemento en secuencia”. Y esto es exactamente lo que hace el bucle: para cada elemento que tengamos en la secuencia, ejecuta estas líneas de código. Lo que hace la cabecera del bucle es obtener el siguiente elemento de la secuencia secuencia y almacenarlo en una variable de nombre ele­ mento. Por esta razón en la primera iteración del bucle elemento valdrá “uno”, en la segunda “dos”, y en la tercera “tres”.

Fácil y sencillo. En C o C++, por ejemplo, lo que habríamos hecho sería iterar sobre las

Control de flujo posiciones, y no sobre los elementos

```python
int mi_array[] = {1, 2, 3, 4, 5};
int i;
for(i = 0; i < 5; i++) {
    printf(“%d\n”, mi_array[i]);
}
```

Es decir, tendríamos un bucle for que fuera aumentando una variable i en cada iteración, desde 0 al tamaño de la secuencia, y utilizaríamos esta variable a modo de índice para obtener cada elemento e imprimir­ lo. Como veis el enfoque de Python es más natural e intuitivo.

Pero, ¿qué ocurre si quisiéramos utilizar el for como si estuviéramos en C o en Java, por ejemplo, para imprimir los números de 30 a 50? No os preocupéis, porque no necesitaríais crear una lista y añadir uno a uno los números del 30 al 50. Python proporciona una función llamada range (rango) que permite generar una lista que vaya desde el primer número que le indiquemos al segundo. Lo veremos después de ver al fin a qué se refiere ese término tan recurrente: las funciones.

Funciones Una función es un fragmento de código con un nombre asociado que realiza una serie de tareas y devuelve un valor. A los fragmentos de código que tienen un nombre asociado y no devuelven valores se les suele llamar procedimientos. En Python no existen los procedimien­ tos, ya que cuando el programador no especifica un valor de retorno la función devuelve el valor None (nada), equivalente al null de Java.

Además de ayudarnos a programar y depurar dividiendo el programa en partes las funciones también permiten reutilizar código. En Python las funciones se declaran de la siguiente forma

```python
def mi_funcion(param1, param2):
    print param1
    print param2
```

Es decir, la palabra clave def seguida del nombre de la función y entre paréntesis los argumentos separados por comas. A continuación, en otra línea, indentado y después de los dos puntos tendríamos las líneas de código que conforman el código a ejecutar por la función.

También podemos encontrarnos con una cadena de texto como primera línea del cuerpo de la función. Estas cadenas se conocen con el nombre de docstring (cadena de documentación) y sirven, como su nombre indica, a modo de documentación de la función.

```python
def mi_funcion(param1, param2):
    “““Esta funcion imprime los dos valores pasados
    como parametros”””
    print param1
    print param2
```

Esto es lo que imprime el opeardor ? de iPython o la función help

Funciones del lenguaje para proporcionar una ayuda sobre el uso y utilidad de las funciones. Todos los objetos pueden tener docstrings, no solo las funciones, como veremos más adelante. Volviendo a la declaración de funciones, es importante aclarar que al declarar la función lo único que hacemos es asociar un nombre al fragmento de código que conforma la función, de forma que podamos ejecutar dicho código más tarde referenciándolo por su nombre. Es decir, a la hora de escribir estas líneas no se ejecuta la función. Para llamar a la función (ejecutar su código) se escribiría

mi_funcion(“hola”, 2) Es decir, el nombre de la función a la que queremos llamar seguido de los valores que queramos pasar como parámetros entre paréntesis. La asociación de los parámetros y los valores pasados a la función se hace normalmente de izquierda a derecha: como a param1 le hemos dado un valor “hola” y param2 vale 2, mi_funcion imprimiría hola en una línea, y a continuación 2.

Sin embargo también es posible modificar el orden de los parámetros si indicamos el nombre del parámetro al que asociar el valor a la hora de llamar a la función: mi_funcion(param2 = 2, param1 = “hola”) El número de valores que se pasan como parámetro al llamar a la fun­ ción tiene que coincidir con el número de parámetros que la función acepta según la declaración de la función. En caso contrario Python se quejará

```python
>>> mi_funcion(“hola”)
```

Traceback (most recent call last): File “<stdin>”, line 1, in <module> TypeError: mi_funcion() takes exactly 2 arguments (1 given) También es posible, no obstante, definir funciones con un número va­ riable de argumentos, o bien asignar valores por defecto a los paráme­ tros para el caso de que no se indique ningún valor para ese parámetro al llamar a la función.

```python
Python para todos
```

Los valores por defecto para los parámetros se definen situando un signo igual después del nombre del parámetro y a continuación el valor por defecto

```python
def imprimir(texto, veces = 1):
    print veces * texto
```

En el ejemplo anterior si no indicamos un valor para el segundo parámetro se imprimirá una sola vez la cadena que le pasamos como primer parámetro

```python
>>> imprimir(“hola”)
```

hola si se le indica otro valor, será este el que se utilice

```python
>>> imprimir(“hola”, 2)
```

holahola Para definir funciones con un número variable de argumentos coloca­ mos un último parámetro para la función cuyo nombre debe preceder­ se de un signo *

```python
def varios(param1, param2, *otros):
    for val in otros:
        print val
```

varios(1, 2) varios(1, 2, 3) varios(1, 2, 3, 4) Esta sintaxis funciona creando una tupla (de nombre otros en el ejemplo) en la que se almacenan los valores de todos los parámetros extra pasados como argumento. Para la primera llamada, varios(1, 2), la tupla otros estaría vacía dado que no se han pasado más parámetros que los dos definidos por defecto, por lo tanto no se imprimiría nada.

En la segunda llamada otros valdría (3, ), y en la tercera (3, 4). También se puede preceder el nombre del último parámetro con **, en cuyo caso en lugar de una tupla se utilizaría un diccionario. Las claves de este diccionario serían los nombres de los parámetros indicados al

Funciones llamar a la función y los valores del diccionario, los valores asociados a estos parámetros. En el siguiente ejemplo se utiliza la función items de los diccionarios, que devuelve una lista con sus elementos, para imprimir los parámetros que contiene el diccionario.

```python
def varios(param1, param2, **otros):
    for i in otros.items():
        print i
```

varios(1, 2, tercero = 3) Los que conozcáis algún otro lenguaje de programación os estaréis preguntando si en Python al pasar una variable como argumento de una función estas se pasan por referencia o por valor. En el paso por referencia lo que se pasa como argumento es una referencia o puntero a la variable, es decir, la dirección de memoria en la que se encuentra el contenido de la variable, y no el contenido en si. En el paso por valor, por el contrario, lo que se pasa como argumento es el valor que conte­ nía la variable.

La diferencia entre ambos estriba en que en el paso por valor los cambios que se hagan sobre el parámetro no se ven fuera de la fun­ ción, dado que los argumentos de la función son variables locales a la función que contienen los valores indicados por las variables que se pasaron como argumento. Es decir, en realidad lo que se le pasa a la función son copias de los valores y no las variables en si.

Si quisiéramos modificar el valor de uno de los argumentos y que estos cambios se reflejaran fuera de la función tendríamos que pasar el pará­ metro por referencia. En C los argumentos de las funciones se pasan por valor, aunque se puede simular el paso por referencia usando punteros. En Java también se usa paso por valor, aunque para las variables que son objetos lo que se hace es pasar por valor la referencia al objeto, por lo que en realidad parece paso por referencia.

En Python también se utiliza el paso por valor de referencias a objetos,

```python
Python para todos
```

como en Java, aunque en el caso de Python, a diferencia de Java, todo es un objeto (para ser exactos lo que ocurre en realidad es que al objeto se le asigna otra etiqueta o nombre en el espacio de nombres local de la función). Sin embargo no todos los cambios que hagamos a los parámetros dentro de una función Python se reflejarán fuera de esta, ya que hay que tener en cuenta que en Python existen objetos inmutables, como las tuplas, por lo que si intentáramos modificar una tupla pasada como parámetro lo que ocurriría en realidad es que se crearía una nueva ins­ tancia, por lo que los cambios no se verían fuera de la función.

Veamos un pequeño programa para demostrarlo. En este ejemplo se hace uso del método append de las listas. Un método no es más que una función que pertenece a un objeto, en este caso a una lista; y append, en concreto, sirve para añadir un elemento a una lista.

```python
def f(x, y):
    x = x + 3
    y.append(23)
    print x, y
```

x = 22 y = [22] f(x, y) print x, y El resultado de la ejecución de este programa sería 25 [22, 23] 22 [22, 23] Como vemos la variable x no conserva los cambios una vez salimos de la función porque los enteros son inmutables en Python. Sin embargo la variable y si los conserva, porque las listas son mutables.

En resumen: los valores mutables se comportan como paso por refe­ rencia, y los inmutables como paso por valor. Con esto terminamos todo lo relacionado con los parámetros de las funciones. Veamos por último cómo devolver valores, para lo que se utiliza la palabra clave return

Funciones

```python
def sumar(x, y):
    return x + y
```

print sumar(3, 2) Como vemos esta función tan sencilla no hace otra cosa que sumar los valores pasados como parámetro y devolver el resultado como valor de retorno. También podríamos pasar varios valores que retornar a return.

```python
def f(x, y):
    return x * 2, y * 2
```

a, b = f(1, 2) Sin embargo esto no quiere decir que las funciones Python puedan de­ volver varios valores, lo que ocurre en realidad es que Python crea una tupla al vuelo cuyos elementos son los valores a retornar, y esta única variable es la que se devuelve.

Orientación a Objetos En el capítulo de introducción ya comentábamos que Python es un lenguaje multiparadigma en el se podía trabajar con programación es­ tructurada, como veníamos haciendo hasta ahora, o con programación orientada a objetos o programación funcional.

La Programación Orientada a Objetos (POO u OOP según sus siglas en inglés) es un paradigma de programación en el que los conceptos del mundo real relevantes para nuestro problema se modelan a través de clases y objetos, y en el que nuestro programa consiste en una serie de interacciones entre estos objetos.

Clases y objetos Para entender este paradigma primero tenemos que comprender qué es una clase y qué es un objeto. Un objeto es una entidad que agrupa un estado y una funcionalidad relacionadas. El estado del objeto se define a través de variables llamadas atributos, mientras que la funcionalidad se modela a través de funciones a las que se les conoce con el nombre de métodos del objeto.

Un ejemplo de objeto podría ser un coche, en el que tendríamos atri­ butos como la marca, el número de puertas o el tipo de carburante y métodos como arrancar y parar. O bien cualquier otra combinación de atributos y métodos según lo que fuera relevante para nuestro progra­ ma.

Una clase, por otro lado, no es más que una plantilla genérica a partir

Orientación a objetos de la cuál instanciar los objetos; plantilla que es la que define qué atri­ butos y métodos tendrán los objetos de esa clase. Volviendo a nuestro ejemplo: en el mundo real existe un conjunto de objetos a los que llamamos coches y que tienen un conjunto de atribu­ tos comunes y un comportamiento común, esto es a lo que llamamos clase. Sin embargo, mi coche no es igual que el coche de mi vecino, y aunque pertenecen a la misma clase de objetos, son objetos distintos.

En Python las clases se definen mediante la palabra clave class segui­ da del nombre de la clase, dos puntos (:) y a continuación, indentado, el cuerpo de la clase. Como en el caso de las funciones, si la primera línea del cuerpo se trata de una cadena de texto, esta será la cadena de documentación de la clase o docstring.

class Coche: “””Abstraccion de los objetos coche.”””

```python
def __init__(self, gasolina):
        self.gasolina = gasolina
        print “Tenemos”, gasolina, “litros”
    def arrancar(self):
        if self.gasolina > 0:
            print “Arranca”
        else:
            print “No arranca”
    def conducir(self):
        if self.gasolina > 0:
            self.gasolina -= 1
            print “Quedan”, self.gasolina, “litros”
        else:
            print “No se mueve”
```

Lo primero que llama la atención en el ejemplo anterior es el nombre tan curioso que tiene el método __init__. Este nombre es una conven­ ción y no un capricho. El método __init__, con una doble barra baja al principio y final del nombre, se ejecuta justo después de crear un nuevo objeto a partir de la clase, proceso que se conoce con el nombre de instanciación. El método __init__ sirve, como sugiere su nombre, para realizar cualquier proceso de inicialización que sea necesario.

Como vemos el primer parámetro de __init__ y del resto de métodos

```python
Python para todos
```

de la clase es siempre self. Esta es una idea inspirada en Modula-3 y sirve para referirse al objeto actual. Este mecanismo es necesario para poder acceder a los atributos y métodos del objeto diferenciando, por ejemplo, una variable local mi_var de un atributo del objeto self.

mi_var. Si volvemos al método __init__ de nuestra clase Coche veremos cómo se utiliza self para asignar al atributo gasolina del objeto (self.gaso­ lina) el valor que el programador especificó para el parámetro gasoli­ na. El parámetro gasolina se destruye al final de la función, mientras que el atributo gasolina se conserva (y puede ser accedido) mientras el objeto viva.

Para crear un objeto se escribiría el nombre de la clase seguido de cual­ quier parámetro que sea necesario entre paréntesis. Estos parámetros son los que se pasarán al método __init__, que como decíamos es el método que se llama al instanciar la clase. mi_coche = Coche(3) Os preguntareis entonces cómo es posible que a la hora de crear nues­ tro primer objeto pasemos un solo parámetro a __init__, el número 3, cuando la definición de la función indica claramente que precisa de dos parámetros (self y gasolina). Esto es así porque Python pasa el primer argumento (la referencia al objeto que se crea) automágicamen­ te.

Ahora que ya hemos creado nuestro objeto, podemos acceder a sus atributos y métodos mediante la sintaxis objeto.atributo y objeto. metodo()

```python
>>> print mi_coche.gasolina
>>> mi_coche.arrancar()
```

Arranca

```python
>>> mi_coche.conducir()
```

Quedan 2 litros

```python
>>> mi_coche.conducir()
```

Quedan 1 litros

```python
>>> mi_coche.conducir()
```

Quedan 0 litros

```python
>>> mi_coche.conducir()
```

Orientación a objetos No se mueve

```python
>>> mi_coche.arrancar()
```

No arranca

```python
>>> print mi_coche.gasolina
```

Como último apunte recordar que en Python, como ya se comentó en repetidas ocasiones anteriormente, todo son objetos. Las cadenas, por ejemplo, tienen métodos como upper(), que devuelve el texto en mayúsculas o count(sub), que devuelve el número de veces que se encontró la cadena sub en el texto.

Herencia Hay tres conceptos que son básicos para cualquier lenguaje de pro­ gramación orientado a objetos: el encapsulamiento, la herencia y el polimorfismo. En un lenguaje orientado a objetos cuando hacemos que una clase (subclase) herede de otra clase (superclase) estamos haciendo que la subclase contenga todos los atributos y métodos que tenía la supercla­ se. No obstante al acto de heredar de una clase también se le llama a menudo “extender una clase”.

Supongamos que queremos modelar los instrumentos musicales de una banda, tendremos entonces una clase Guitarra, una clase Batería, una clase Bajo, etc. Cada una de estas clases tendrá una serie de atribu­ tos y métodos, pero ocurre que, por el mero hecho de ser instrumentos musicales, estas clases compartirán muchos de sus atributos y métodos; un ejemplo sería el método tocar().

Es más sencillo crear un tipo de objeto Instrumento con las atributos y métodos comunes e indicar al programa que Guitarra, Batería y Bajo son tipos de instrumentos, haciendo que hereden de Instrumento. Para indicar que una clase hereda de otra se coloca el nombre de la cla­ se de la que se hereda entre paréntesis después del nombre de la clase

class Instrumento

```python
def __init__(self, precio):
```

```python
Python para todos
        self.precio = precio
    def tocar(self):
        print “Estamos tocando musica”
    def romper(self):
        print “Eso lo pagas tu”
        print “Son”, self.precio, “$$$”
```

class Bateria(Instrumento): pass class Guitarra(Instrumento): pass Como Bateria y Guitarra heredan de Instrumento, ambos tienen un método tocar() y un método romper(), y se inicializan pasando un parámetro precio. Pero, ¿qué ocurriría si quisiéramos especificar un nuevo parámetro tipo_cuerda a la hora de crear un objeto Guitarra?

Bastaría con escribir un nuevo método __init__ para la clase Guitarra que se ejecutaría en lugar del __init__ de Instrumento. Esto es lo que se conoce como sobreescribir métodos. Ahora bien, puede ocurrir en algunos casos que necesitemos sobrees­ cribir un método de la clase padre, pero que en ese método queramos ejecutar el método de la clase padre porque nuestro nuevo método no necesite más que ejecutar un par de nuevas instrucciones extra. En ese caso usaríamos la sintaxis SuperClase.metodo(self, args) para llamar al método de igual nombre de la clase padre. Por ejemplo, para llamar al método __init__ de Instrumento desde Guitarra usaríamos Instru­ mento.__init__(self, precio) Observad que en este caso si es necesario especificar el parámetro self.

Herencia múltiple En Python, a diferencia de otros lenguajes como Java o C#, se permite la herencia múltiple, es decir, una clase puede heredar de varias clases a la vez. Por ejemplo, podríamos tener una clase Cocodrilo que heredara de la clase Terrestre, con métodos como caminar() y atributos como velocidad_caminar y de la clase Acuatico, con métodos como nadar() y atributos como velocidad_nadar. Basta con enumerar las clases de

Orientación a objetos las que se hereda separándolas por comas: class Cocodrilo(Terrestre, Acuatico): pass En el caso de que alguna de las clases padre tuvieran métodos con el mismo nombre y número de parámetros las clases sobreescribirían la implementación de los métodos de las clases más a su derecha en la definición.

En el siguiente ejemplo, como Terrestre se encuentra más a la iz­ quierda, sería la definición de desplazar de esta clase la que prevale­ cería, y por lo tanto si llamamos al método desplazar de un objeto de tipo Cocodrilo lo que se imprimiría sería “El animal anda”.

class Terrestre

```python
def desplazar(self):
        print “El animal anda”
```

class Acuatico

```python
def desplazar(self):
        print “El animal nada”
```

class Cocodrilo(Terrestre, Acuatico): pass c = Cocodrilo() c.desplazar() Polimorfismo La palabra polimorfismo, del griego poly morphos (varias formas), se re­ fiere a la habilidad de objetos de distintas clases de responder al mismo mensaje. Esto se puede conseguir a través de la herencia: un objeto de una clase derivada es al mismo tiempo un objeto de la clase padre, de forma que allí donde se requiere un objeto de la clase padre también se puede utilizar uno de la clase hija.

Python, al ser de tipado dinámico, no impone restricciones a los tipos que se le pueden pasar a una función, por ejemplo, más allá de que el objeto se comporte como se espera: si se va a llamar a un método f() del objeto pasado como parámetro, por ejemplo, evidentemente el objeto tendrá que contar con ese método. Por ese motivo, a diferencia

```python
Python para todos
```

de lenguajes de tipado estático como Java o C++, el polimorfismo en

```python
Python no es de gran importancia.
```

En ocasiones también se utiliza el término polimorfismo para referirse a la sobrecarga de métodos, término que se define como la capacidad del lenguaje de determinar qué método ejecutar de entre varios méto­ dos con igual nombre según el tipo o número de los parámetros que se le pasa. En Python no existe sobrecarga de métodos (el último método sobreescribiría la implementación de los anteriores), aunque se puede conseguir un comportamiento similar recurriendo a funciones con va­ lores por defecto para los parámetros o a la sintaxis *params o **params explicada en el capítulo sobre las funciones en Python, o bien usando decoradores (mecanismo que veremos más adelante).

Encapsulación La encapsulación se refiere a impedir el acceso a determinados mé­ todos y atributos de los objetos estableciendo así qué puede utilizarse desde fuera de la clase. Esto se consigue en otros lenguajes de programación como Java utili­ zando modificadores de acceso que definen si cualquiera puede acceder a esa función o variable (public) o si está restringido el acceso a la propia clase (private).

En Python no existen los modificadores de acceso, y lo que se suele hacer es que el acceso a una variable o función viene determinado por su nombre: si el nombre comienza con dos guiones bajos (y no termina también con dos guiones bajos) se trata de una variable o función pri­ vada, en caso contrario es pública. Los métodos cuyo nombre comien­ za y termina con dos guiones bajos son métodos especiales que Python llama automáticamente bajo ciertas circunstancias, como veremos al final del capítulo.

En el siguiente ejemplo sólo se imprimirá la cadena correspondiente al método publico(), mientras que al intentar llamar al método __pri­ vado() Python lanzará una excepción quejándose de que no existe (evidentemente existe, pero no lo podemos ver porque es privado).

Orientación a objetos class Ejemplo

```python
def publico(self):
        print “Publico”
    def __privado(self):
        print “Privado”
```

ej = Ejemplo() ej.publico() ej.__privado() Este mecanismo se basa en que los nombres que comienzan con un doble guión bajo se renombran para incluir el nombre de la clase (característica que se conoce con el nombre de name mangling). Esto implica que el método o atributo no es realmente privado, y podemos acceder a él mediante una pequeña trampa

ej._Ejemplo__privado() En ocasiones también puede suceder que queramos permitir el acceso a algún atributo de nuestro objeto, pero que este se produzca de forma controlada. Para esto podemos escribir métodos cuyo único cometido sea este, métodos que normalmente, por convención, tienen nombres como getVariable y setVariable; de ahí que se conozcan también con el nombre de getters y setters.

class Fecha()

```python
def __init__(self):
        self.__dia = 1
    def getDia(self):
        return self.__dia
    def setDia(self, dia):
        if dia > 0 and dia < 31:
            self.__dia = dia
        else:
            print “Error”
```

mi_fecha = Fecha() mi_fecha.setDia(33) Esto se podría simplificar mediante propiedades, que abstraen al usua­ rio del hecho de que se está utilizando métodos entre bambalinas para obtener y modificar los valores del atributo

```python
Python para todos
```

class Fecha(object)

```python
def __init__(self):
        self.__dia = 1
    def getDia(self):
        return self.__dia
    def setDia(self, dia):
        if dia > 0 and dia < 31:
            self.__dia = dia
        else:
            print “Error”
    dia = property(getDia, setDia)
```

mi_fecha = Fecha() mi_fecha.dia = 33 Clases de “nuevo-estilo” En el ejemplo anterior os habrá llamado la atención el hecho de que la clase Fecha derive de object. La razón de esto es que para poder usar propiedades la clase tiene que ser de “nuevo-estilo”, clases enriquecidas introducidas en Python 2.2 que serán el estándar en Python 3.0 pero que aún conviven con las clases “clásicas” por razones de retrocompa­ tibilidad. Además de las propiedades las clases de nuevo estilo añaden otras funcionalidades como descriptores o métodos estáticos.

Para que una clase sea de nuevo estilo es necesario, por ahora, que extienda una clase de nuevo-estilo. En el caso de que no sea necesa­ rio heredar el comportamiento o el estado de ninguna clase, como en nuestro ejemplo anterior, se puede heredar de object, que es un objeto vacio que sirve como base para todas las clases de nuevo estilo.

La diferencia principal entre las clases antiguas y las de nuevo estilo consiste en que a la hora de crear una nueva clase anteriormente no se definía realmente un nuevo tipo, sino que todos los objetos creados a partir de clases, fueran estas las clases que fueran, eran de tipo instan­ ce.

Métodos especiales

Orientación a objetos Ya vimos al principio del artículo el uso del método __init__. Exis­ ten otros métodos con significados especiales, cuyos nombres siempre comienzan y terminan con dos guiones bajos. A continuación se listan algunos especialmente útiles. __init__(self, args) Método llamado después de crear el objeto para realizar tareas de inicialización.

__new__(cls, args) Método exclusivo de las clases de nuevo estilo que se ejecuta antes que __init__ y que se encarga de construir y devolver el objeto en sí. Es equivalente a los constructores de C++ o Java. Se trata de un método estático, es decir, que existe con independencia de las instancias de la clase: es un método de clase, no de objeto, y por lo tanto el primer parámetro no es self, sino la propia clase: cls.

__del__(self) Método llamado cuando el objeto va a ser borrado. También llamado destructor, se utiliza para realizar tareas de limpieza. __str__(self) Método llamado para crear una cadena de texto que represente a nues­ tro objeto. Se utiliza cuando usamos print para mostrar nuestro objeto o cuando usamos la función str(obj) para crear una cadena a partir de nuestro objeto.

__cmp__(self, otro) Método llamado cuando se utilizan los operadores de comparación para comprobar si nuestro objeto es menor, mayor o igual al objeto pasado como parámetro. Debe devolver un número negativo si nuestro objeto es menor, cero si son iguales, y un número positivo si nuestro objeto es mayor. Si este método no está definido y se intenta com­ parar el objeto mediante los operadores <, <=, > o >= se lanzará una excepción. Si se utilizan los operadores == o != para comprobar si dos objetos son iguales, se comprueba si son el mismo objeto (si tienen el mismo id).

__len__(self) Método llamado para comprobar la longitud del objeto. Se utiliza, por

```python
Python para todos
```

ejemplo, cuando se llama a la función len(obj) sobre nuestro objeto. Como es de suponer, el método debe devolver la longitud del objeto. Existen bastantes más métodos especiales, que permite entre otras cosas utilizar el mecanismo de slicing sobre nuestro objeto, utilizar los operadores aritméticos o usar la sintaxis de diccionarios, pero un estudio exhaustivo de todos los métodos queda fuera del propósito del capítulo.

Revisitando Objetos En los capítulos dedicados a los tipos simples y las colecciones veíamos por primera vez algunos de los objetos del lenguaje Python: números, booleanos, cadenas de texto, diccionarios, listas y tuplas. Ahora que sabemos qué son las clases, los objetos, las funciones, y los métodos es el momento de revisitar estos objetos para descubrir su verdadero potencial.

Veremos a continuación algunos métodos útiles de estos objetos. Evi­ dentemente, no es necesario memorizarlos, pero si, al menos, recordar que existen para cuando sean necesarios. Diccionarios D.get(k[, d]) Busca el valor de la clave k en el diccionario. Es equivalente a utilizar D[k] pero al utilizar este método podemos indicar un valor a devolver por defecto si no se encuentra la clave, mientras que con la sintaxis D[k], de no existir la clave se lanzaría una excepción.

D.has_key(k) Comprueba si el diccionario tiene la clave k. Es equivalente a la sin­ taxis k in D. D.items() Devuelve una lista de tuplas con pares clave-valor.

```python
Python para todos
```

D.keys() Devuelve una lista de las claves del diccionario. D.pop(k[, d]) Borra la clave k del diccionario y devuelve su valor. Si no se encuentra dicha clave se devuelve d si se especificó el parámetro o bien se lanza una excepción. D.values() Devuelve una lista de los valores del diccionario.

Cadenas S.count(sub[, start[, end]]) Devuelve el número de veces que se encuentra sub en la cadena. Los parámetros opcionales start y end definen una subcadena en la que buscar. S.find(sub[, start[, end]]) Devuelve la posición en la que se encontró por primera vez sub en la cadena o -1 si no se encontró.

S.join(sequence) Devuelve una cadena resultante de concatenar las cadenas de la se­ cuencia seq separadas por la cadena sobre la que se llama el método. S.partition(sep) Busca el separador sep en la cadena y devuelve una tupla con la sub­ cadena hasta dicho separador, el separador en si, y la subcadena del separador hasta el final de la cadena. Si no se encuentra el separador, la tupla contendrá la cadena en si y dos cadenas vacías.

S.replace(old, new[, count]) Devuelve una cadena en la que se han reemplazado todas las ocurren­ cias de la cadena old por la cadena new. Si se especifica el parámetro count, este indica el número máximo de ocurrencias a reemplazar. S.split([sep [,maxsplit]]) Devuelve una lista conteniendo las subcadenas en las que se divide nuestra cadena al dividirlas por el delimitador sep. En el caso de que

Revisitando objetos no se especifique sep, se usan espacios. Si se especifica maxsplit, este indica el número máximo de particiones a realizar. Listas L.append(object) Añade un objeto al final de la lista. L.count(value) Devuelve el número de veces que se encontró value en la lista.

L.extend(iterable) Añade los elementos del iterable a la lista. L.index(value[, start[, stop]]) Devuelve la posición en la que se encontró la primera ocurrencia de value. Si se especifican, start y stop definen las posiciones de inicio y fin de una sublista en la que buscar.

L.insert(index, object) Inserta el objeto object en la posición index. L.pop([index]) Devuelve el valor en la posición index y lo elimina de la lista. Si no se especifica la posición, se utiliza el último elemento de la lista. L.remove(value) Eliminar la primera ocurrencia de value en la lista.

L.reverse() Invierte la lista. Esta función trabaja sobre la propia lista desde la que se invoca el método, no sobre una copia. L.sort(cmp=None, key=None, reverse=False) Ordena la lista. Si se especifica cmp, este debe ser una función que tome como parámetro dos valores x e y de la lista y devuelva -1 si x es menor que y, 0 si son iguales y 1 si x es mayor que y.

El parámetro reverse es un booleano que indica si se debe ordenar la lista de forma inversa, lo que sería equivalente a llamar primero a L.sort() y después a L.reverse().

```python
Python para todos
```

Por último, si se especifica, el parámetro key debe ser una función que tome un elemento de la lista y devuelva una clave a utilizar a la hora de comparar, en lugar del elemento en si.

Programación funcional La programación funcional es un paradigma en el que la programa­ ción se basa casi en su totalidad en funciones, entendiendo el concepto de función según su definición matemática, y no como los simples subprogramas de los lenguajes imperativos que hemos visto hasta ahora.

En los lenguajes funcionales puros un programa consiste exclusiva­ mente en la aplicación de distintas funciones a un valor de entrada para obtener un valor de salida. Python, sin ser un lenguaje puramente funcional incluye varias caracte­ rísticas tomadas de los lenguajes funcionales como son las funciones de orden superior o las funciones lambda (funciones anónimas).

Funciones de orden superior El concepto de funciones de orden superior se refiere al uso de fun­ ciones como si de un valor cualquiera se tratara, posibilitando el pasar funciones como parámetros de otras funciones o devolver funciones como valor de retorno. Esto es posible porque, como hemos insistido ya en varias ocasiones, en Python todo son objetos. Y las funciones no son una excepción.

Veamos un pequeño ejemplo

```python
def saludar(lang):
    def saludar_es():
```

```python
Python para todos
        print “Hola”
    def saludar_en():
        print “Hi”
    def saludar_fr():
        print “Salut”
    lang_func = {“es”: saludar_es,
                 “en”: saludar_en,
                 “fr”: saludar_fr}
    return lang_func[lang]
```

f = saludar(“es”) f() Como podemos observar lo primero que hacemos en nuestro pequeño programa es llamar a la función saludar con un parámetro “es”. En la función saludar se definen varias funciones: saludar_es, saludar_en y saludar_fr y a continuación se crea un diccionario que tiene como cla­ ves cadenas de texto que identifican a cada lenguaje, y como valores las funciones. El valor de retorno de la función es una de estas funciones.

La función a devolver viene determinada por el valor del parámetro lang que se pasó como argumento de saludar. Como el valor de retorno de saludar es una función, como hemos visto, esto quiere decir que f es una variable que contiene una función. Podemos entonces llamar a la función a la que se refiere f de la forma en que llamaríamos a cualquier otra función, añadiendo unos parénte­ sis y, de forma opcional, una serie de parámetros entre los paréntesis.

Esto se podría acortar, ya que no es necesario almacenar la función que nos pasan como valor de retorno en una variable para poder llamarla

```python
>>> saludar(“en”)()
```

Hi

```python
>>> saludar(“fr”)()
```

Salut En este caso el primer par de paréntesis indica los parámetros de la función saludar, y el segundo par, los de la función devuelta por salu­ dar.

Programación funcional Iteraciones de orden superior so­ bre listas Una de las cosas más interesantes que podemos hacer con nuestras funciones de orden superior es pasarlas como argumentos de las fun­ ciones map, filter y reduce. Estas funciones nos permiten sustituir los bucles típicos de los lenguajes imperativos mediante construcciones equivalentes.

map(function, sequence[, sequence, ...]) La función map aplica una función a cada elemento de una secuencia y devuelve una lista con el resultado de aplicar la función a cada elemen­ to. Si se pasan como parámetros n secuencias, la función tendrá que aceptar n argumentos. Si alguna de las secuencias es más pequeña que las demás, el valor que le llega a la función function para posiciones mayores que el tamaño de dicha secuencia será None.

A continuación podemos ver un ejemplo en el que se utiliza map para elevar al cuadrado todos los elementos de una lista

```python
def cuadrado(n):
    return n ** 2
```

l = [1, 2, 3] l2 = map(cuadrado, l) filter(function, sequence) La funcion filter verifica que los elementos de una secuencia cum­ plan una determinada condición, devolviendo una secuencia con los elementos que cumplen esa condición. Es decir, para cada elemento de sequence se aplica la función function; si el resultado es True se añade a la lista y en caso contrario se descarta.

A continuación podemos ver un ejemplo en el que se utiliza filter para conservar solo los números que son pares.

```python
def es_par(n):
    return (n % 2.0 == 0)
```

l = [1, 2, 3]

```python
Python para todos
```

l2 = filter(es_par, l) reduce(function, sequence[, initial]) La función reduce aplica una función a pares de elementos de una secuencia hasta dejarla en un solo valor. A continuación podemos ver un ejemplo en el que se utiliza reduce para sumar todos los elementos de una lista.

```python
def sumar(x, y):
    return x + y
```

l = [1, 2, 3] l2 = reduce(sumar, l) Funciones lambda El operador lambda sirve para crear funciones anónimas en línea. Al ser funciones anónimas, es decir, sin nombre, estas no podrán ser referen­ ciadas más tarde. Las funciones lambda se construyen mediante el operador lambda, los parámetros de la función separados por comas (atención, SIN parénte­ sis), dos puntos (:) y el código de la función.

Esta construcción podrían haber sido de utilidad en los ejemplos an­ teriores para reducir código. El programa que utilizamos para explicar filter, por ejemplo, podría expresarse así: l = [1, 2, 3] l2 = filter(lambda n: n % 2.0 == 0, l) Comparemoslo con la versión anterior

```python
def es_par(n):
    return (n % 2.0 == 0)
```

l = [1, 2, 3] l2 = filter(es_par, l) Las funciones lambda están restringidas por la sintaxis a una sola

Programación funcional expresión. Comprensión de listas En Python 3000 map, filter y reduce perderán importancia. Y aun­ que estas funciones se mantendrán, reduce pasará a formar parte del módulo functools, con lo que quedará fuera de las funciones dispo­ nibles por defecto, y map y filter se desaconsejarán en favor de las list comprehensions o comprensión de listas.

La comprensión de listas es una característica tomada del lenguaje de programación funcional Haskell que está presente en Python desde la versión 2.0 y consiste en una construcción que permite crear listas a partir de otras listas. Cada una de estas construcciones consta de una expresión que deter­ mina cómo modificar el elemento de la lista original, seguida de una o varias clausulas for y opcionalmente una o varias clausulas if.

Veamos un ejemplo de cómo se podría utilizar la comprensión de listas para elevar al cuadrado todos los elementos de una lista, como hicimos en nuestro ejemplo de map. l2 = [n ** 2 for n in l] Esta expresión se leería como “para cada n en l haz n ** 2”. Como vemos tenemos primero la expresión que modifica los valores de la lista original (n ** 2), después el for, el nombre que vamos a utilizar para referirnos al elemento actual de la lista original, el in, y la lista sobre la que se itera.

El ejemplo que utilizamos para la función filter (conservar solo los números que son pares) se podría expresar con comprensión de listas así: l2 = [n for n in l if n % 2.0 == 0] Veamos por último un ejemplo de compresión de listas con varias clausulas for

```python
Python para todos
```

l = [0, 1, 2, 3] m = [“a”, “b”] n = [s * v for s in m for v in l if v > 0] Esta construcción sería equivalente a una serie de for-in anidados: l = [0, 1, 2, 3] m = [“a”, “b”] n = [] for s in m: for v in l: if v > 0: n.append(s* v) Generadores Las expresiones generadoras funcionan de forma muy similar a la comprensión de listas. De hecho su sintaxis es exactamente igual, a excepción de que se utilizan paréntesis en lugar de corchetes

l2 = (n ** 2 for n in l) Sin embargo las expresiones generadoras se diferencian de la compren­ sión de listas en que no se devuelve una lista, sino un generador.

```python
>>> l2 = [n ** 2 for n in l]
>>> l2
```

[0, 1, 4, 9]

```python
>>> l2 = (n ** 2 for n in l)
>>> l2
```

<generator object at 0×00E33210> Un generador es una clase especial de función que genera valores sobre los que iterar. Para devolver el siguiente valor sobre el que iterar se utiliza la palabra clave yield en lugar de return. Veamos por ejemplo un generador que devuelva números de n a m con un salto s.

```python
def mi_generador(n, m, s):
    while(n <= m):
        yield n
        n += s
```

Programación funcional

```python
>>> x = mi_generador(0, 5, 1)
>>> x
```

<generator object at 0×00E25710> El generador se puede utilizar en cualquier lugar donde se necesite un objeto iterable. Por ejemplo en un for-in: for n in mi_generador(0, 5, 1): print n Como no estamos creando una lista completa en memoria, sino gene­ rando un solo valor cada vez que se necesita, en situaciones en las que no sea necesario tener la lista completa el uso de generadores puede suponer una gran diferencia de memoria. En todo caso siempre es po­ sible crear una lista a partir de un generador mediante la función list

lista = list(mi_generador) Decoradores Un decorador no es es mas que una función que recibe una función como parámetro y devuelve otra función como resultado. Por ejem­ plo podríamos querer añadir la funcionalidad de que se imprimiera el nombre de la función llamada por motivos de depuración

```python
def mi_decorador(funcion):
    def nueva(*args):
        print “Llamada a la funcion”, funcion.__name__
        retorno = funcion(*args)
        return retorno
    return nueva
```

Como vemos el código de la función mi_decorador no hace más que crear una nueva función y devolverla. Esta nueva función imprime el nombre de la función a la que “decoramos”, ejecuta el código de dicha función, y devuelve su valor de retorno. Es decir, que si llamáramos a la nueva función que nos devuelve mi_decorador, el resultado sería el mismo que el de llamar directamente a la función que le pasamos como parámetro, exceptuando el que se imprimiría además el nombre de la función.

```python
Python para todos
```

Supongamos como ejemplo una función imp que no hace otra cosa que mostrar en pantalla la cadena pasada como parámetro.

```python
>>> imp(“hola”)
```

hola

```python
>>> mi_decorador(imp)(“hola”)
```

Llamada a la función imp hola La sintaxis para llamar a la función que nos devuelve mi_decorador no es muy clara, aunque si lo estudiamos detenidamente veremos que no tiene mayor complicación. Primero se llama a la función que decora con la función a decorar: mi_decorador(imp); y una vez obtenida la función ya decorada se la puede llamar pasando el mismo parámetro que se pasó anteriormente: mi_decorador(imp)(“hola”) Esto se podría expresar más claramente precediendo la definición de la función que queremos decorar con el signo @ seguido del nombre de la función decoradora

@mi_decorador

```python
def imp(s):
    print s
```

De esta forma cada vez que se llame a imp se estará llamando realmen­ te a la versión decorada. Python incorpora esta sintaxis desde la versión 2.4 en adelante. Si quisiéramos aplicar más de un decorador bastaría añadir una nueva línea con el nuevo decorador. @otro_decorador @mi_decorador

```python
def imp(s):
    print s
```

Es importante advertir que los decoradores se ejecutarán de abajo a arriba. Es decir, en este ejemplo primero se ejecutaría mi_decorador y después otro_decorador.

Excepciones Las excepciones son errores detectados por Python durante la eje­ cución del programa. Cuando el intérprete se encuentra con una situación excepcional, como el intentar dividir un número entre 0 o el intentar acceder a un archivo que no existe, este genera o lanza una excepción, informando al usuario de que existe algún problema.

Si la excepción no se captura el flujo de ejecución se interrumpe y se muestra la información asociada a la excepción en la consola de forma que el programador pueda solucionar el problema. Veamos un pequeño programa que lanzaría una excepción al intentar dividir 1 entre 0.

```python
def division(a, b):
    return a / b
def calcular():
    division(1, 0)
```

calcular() Si lo ejecutamos obtendremos el siguiente mensaje de error

```python
$ python ejemplo.py
```

Traceback (most recent call last): File “ejemplo.py”, line 7, in calcular() File “ejemplo.py”, line 5, in calcular division(1, 0) File “ejemplo.py”, line 2, in division a / b ZeroDivisionError: integer division or modulo by zero Lo primero que se muestra es el trazado de pila o traceback, que con­ siste en una lista con las llamadas que provocaron la excepción. Como

```python
Python para todos
```

vemos en el trazado de pila, el error estuvo causado por la llamada a calcular() de la línea 7, que a su vez llama a division(1, 0) en la línea 5 y en última instancia por la ejecución de la sentencia a / b de la línea 2 de division. A continuación vemos el tipo de la excepción, ZeroDivisionError, junto a una descripción del error: “integer division or modulo by zero” (módulo o división entera entre cero).

En Python se utiliza una construcción try-except para capturar y tratar las excepciones. El bloque try (intentar) define el fragmento de código en el que creemos que podría producirse una excepción. El blo­ que except (excepción) permite indicar el tratamiento que se llevará a cabo de producirse dicha excepción. Muchas veces nuestro tratamiento de la excepción consistirá simplemente en imprimir un mensaje más amigable para el usuario, otras veces nos interesará registrar los errores y de vez en cuando podremos establecer una estrategia de resolución del problema.

En el siguiente ejemplo intentamos crear un objeto f de tipo fichero. De no existir el archivo pasado como parámetro, se lanza una excep­ ción de tipo IOError, que capturamos gracias a nuestro try-except. try: f = file(“archivo.txt”) except: print “El archivo no existe”

```python
Python permite utilizar varios except para un solo bloque try, de
```

forma que podamos dar un tratamiento distinto a la excepción de­ pendiendo del tipo de excepción de la que se trate. Esto es una buena práctica, y es tan sencillo como indicar el nombre del tipo a continua­ ción del except. try: num = int(“3a”) print no_existe except NameError

print “La variable no existe” except ValueError: print “El valor no es un numero”

Excepciones Cuando se lanza una excepción en el bloque try, se busca en cada una de las clausulas except un manejador adecuado para el tipo de error que se produjo. En caso de que no se encuentre, se propaga la excep­ ción. Además podemos hacer que un mismo except sirva para tratar más de una excepción usando una tupla para listar los tipos de error que queremos que trate el bloque

try: num = int(“3a”) print no_existe except (NameError, ValueError): print “Ocurrio un error” La construcción try-except puede contar además con una clausula else, que define un fragmento de código a ejecutar sólo si no se ha producido ninguna excepción en el try. try

num = 33 except: print “Hubo un error!” else: print “Todo esta bien” También existe una clausula finally que se ejecuta siempre, se pro­ duzca o no una excepción. Esta clausula se suele utilizar, entre otras cosas, para tareas de limpieza. try: z = x / y except ZeroDivisionError

print “Division por cero” finally: print “Limpiando” También es interesante comentar que como programadores podemos crear y lanzar nuestras propias excepciones. Basta crear una clase que herede de Exception o cualquiera de sus hijas y lanzarla con raise. class MiError(Exception)

```python
def __init__(self, valor):
        self.valor = valor
```

```python
Python para todos
    def __str__(self):
        return “Error “ + str(self.valor)
```

try: if resultado > 20: raise MiError(33) except MiError, e: print e Por último, a continuación se listan a modo de referencia las excepcio­ nes disponibles por defecto, así como la clase de la que deriva cada una de ellas entre paréntesis. BaseException: Clase de la que heredan todas las excepciones.

Exception(BaseException): Super clase de todas las excepciones que no sean de salida. GeneratorExit(Exception): Se pide que se salga de un generador. StandardError(Exception): Clase base para todas las excepciones que no tengan que ver con salir del intérprete. ArithmeticError(StandardError): Clase base para los errores aritmé­ ticos.

FloatingPointError(ArithmeticError): Error en una operación de coma flotante. OverflowError(ArithmeticError): Resultado demasiado grande para poder representarse. ZeroDivisionError(ArithmeticError): Lanzada cuando el segundo argumento de una operación de división o módulo era 0.

AssertionError(StandardError): Falló la condición de un estamento assert. AttributeError(StandardError): No se encontró el atributo.

Excepciones EOFError(StandardError): Se intentó leer más allá del final de fichero. EnvironmentError(StandardError): Clase padre de los errores relacio­ nados con la entrada/salida. IOError(EnvironmentError): Error en una operación de entrada/salida. OSError(EnvironmentError): Error en una llamada a sistema.

WindowsError(OSError): Error en una llamada a sistema en Windows. ImportError(StandardError): No se encuentra el módulo o el elemen­ to del módulo que se quería importar. LookupError(StandardError): Clase padre de los errores de acceso. IndexError(LookupError): El índice de la secuencia está fuera del rango posible.

KeyError(LookupError): La clave no existe. MemoryError(StandardError): No queda memoria suficiente. NameError(StandardError): No se encontró ningún elemento con ese nombre. UnboundLocalError(NameError): El nombre no está asociado a ninguna variable. ReferenceError(StandardError): El objeto no tiene ninguna referen­ cia fuerte apuntando hacia él.

RuntimeError(StandardError): Error en tiempo de ejecución no espe­ cificado. NotImplementedError(RuntimeError): Ese método o función no está implementado. SyntaxError(StandardError): Clase padre para los errores sintácticos.

```python
Python para todos
```

IndentationError(SyntaxError): Error en la indentación del archivo. TabError(IndentationError): Error debido a la mezcla de espacios y tabuladores. SystemError(StandardError): Error interno del intérprete. TypeError(StandardError): Tipo de argumento no apropiado. ValueError(StandardError): Valor del argumento no apropiado.

UnicodeError(ValueError): Clase padre para los errores relacionados con unicode. UnicodeDecodeError(UnicodeError): Error de decodificación unicode. UnicodeEncodeError(UnicodeError): Error de codificación unicode. UnicodeTranslateError(UnicodeError): Error de traducción unicode.

StopIteration(Exception): Se utiliza para indicar el final del iterador. Warning(Exception): Clase padre para los avisos. DeprecationWarning(Warning): Clase padre para avisos sobre caracte­ rísticas obsoletas. FutureWarning(Warning): Aviso. La semántica de la construcción cam­ biará en un futuro.

ImportWarning(Warning): Aviso sobre posibles errores a la hora de importar. PendingDeprecationWarning(Warning): Aviso sobre características que se marcarán como obsoletas en un futuro próximo. RuntimeWarning(Warning): Aviso sobre comportmaientos dudosos en tiempo de ejecución.

Excepciones SyntaxWarning(Warning): Aviso sobre sintaxis dudosa. UnicodeWarning(Warning): Aviso sobre problemas relacionados con Unicode, sobre todo con problemas de conversión. UserWarning(Warning): Clase padre para avisos creados por el progra­ mador. KeyboardInterrupt(BaseException): El programa fué interrumpido por el usuario.

SystemExit(BaseException): Petición del intérprete para terminar la ejecución.

Módulos y Paquetes Módulos Para facilitar el mantenimiento y la lectura los programas demasiado largos pueden dividirse en módulos, agrupando elementos relaciona­ dos. Los módulos son entidades que permiten una organización y divi­ sión lógica de nuestro código. Los ficheros son su contrapartida física

cada archivo Python almacenado en disco equivale a un módulo. Vamos a crear nuestro primer módulo entonces creando un pequeño archivo modulo.py con el siguiente contenido

```python
def mi_funcion():
    print “una funcion”
```

class MiClase

```python
def __init__(self):
        print “una clase”
```

print “un modulo” Si quisiéramos utilizar la funcionalidad definida en este módulo en nuestro programa tendríamos que importarlo. Para importar un mó­ dulo se utiliza la palabra clave import seguida del nombre del módulo, que consiste en el nombre del archivo menos la extensión. Como ejem­ plo, creemos un archivo programa.py en el mismo directorio en el que guardamos el archivo del módulo (esto es importante, porque si no se encuentra en el mismo directorio Python no podrá encontrarlo), con el siguiente contenido

import modulo

Módulos y paquetes modulo.mi_funcion() El import no solo hace que tengamos disponible todo lo definido dentro del módulo, sino que también ejecuta el código del módulo. Por esta razón nuestro programa, además de imprimir el texto “una fun­ cion” al llamar a mi_funcion, también imprimiría el texto “un modulo”, debido al print del módulo importado. No se imprimiría, no obstante, el texto “una clase”, ya que lo que se hizo en el módulo fue tan solo definir de la clase, no instanciarla.

La clausula import también permite importar varios módulos en la misma línea. En el siguiente ejemplo podemos ver cómo se importa con una sola clausula import los módulos de la distribución por defecto de Python os, que engloba funcionalidad relativa al sistema operativo; sys, con funcionalidad relacionada con el propio intérprete de Python y time, en el que se almacenan funciones para manipular fechas y horas.

```python
import os, sys, time
```

print time.asctime() Sin duda os habréis fijado en este y el anterior ejemplo en un detalle importante, y es que, como vemos, es necesario preceder el nombre de los objetos que importamos de un módulo con el nombre del módulo al que pertenecen, o lo que es lo mismo, el espacio de nombres en el que se encuentran. Esto permite que no sobreescribamos accidental­ mente algún otro objeto que tuviera el mismo nombre al importar otro módulo.

Sin embargo es posible utilizar la construcción from-import para ahorrarnos el tener que indicar el nombre del módulo antes del objeto que nos interesa. De esta forma se importa el objeto o los objetos que indiquemos al espacio de nombres actual.

```python
from time import asctime
```

print asctime()

```python
Python para todos
```

Aunque se considera una mala práctica, también es posible importar todos los nombres del módulo al espacio de nombres actual usando el caracter *

```python
from time import *
```

Ahora bien, recordareis que a la hora de crear nuestro primer módulo insistí en que lo guardarais en el mismo directorio en el que se en­ contraba el programa que lo importaba. Entonces, ¿cómo podemos importar los módulos os, sys o time si no se encuentran los archivos os.py, sys.py y time.py en el mismo directorio?

A la hora de importar un módulo Python recorre todos los directorios indicados en la variable de entorno PYTHONPATH en busca de un archivo con el nombre adecuado. El valor de la variable PYTHONPATH se puede consultar desde Python mediante sys.path

```python
>>> import sys
>>> sys.path
```

De esta forma para que nuestro módulo estuviera disponible para todos los programas del sistema bastaría con que lo copiáramos a uno de los directorios indicados en PYTHONPATH. En el caso de que Python no encontrara ningún módulo con el nom­ bre especificado, se lanzaría una excepción de tipo ImportError.

Por último es interesante comentar que en Python los módulos también son objetos; de tipo module en concreto. Por supuesto esto significa que pueden tener atributos y métodos. Uno de sus atributos, __name__, se utiliza a menudo para incluir código ejecutable en un módulo pero que este sólo se ejecute si se llama al módulo como pro­ grama, y no al importarlo. Para lograr esto basta saber que cuando se ejecuta el módulo directamente __name__ tiene como valor “__main__”, mientras que cuando se importa, el valor de __name__ es el nombre del módulo

print “Se muestra siempre” if __name__ == “__main__”: print “Se muestra si no es importacion”

Módulos y paquetes Otro atributo interesante es __doc__, que, como en el caso de fun­ ciones y clases, sirve a modo de documentación del objeto (docstring o cadena de documentación). Su valor es el de la primera línea del cuerpo del módulo, en el caso de que esta sea una cadena de texto; en caso contrario valdrá None.

Paquetes Si los módulos sirven para organizar el código, los paquetes sirven para organizar los módulos. Los paquetes son tipos especiales de módulos (ambos son de tipo module) que permiten agrupar módulos relacio­ nados. Mientras los módulos se corresponden a nivel físico con los archivos, los paquetes se representan mediante directorios.

En una aplicación cualquiera podríamos tener, por ejemplo, un paque­ te iu para la interfaz o un paquete bbdd para la persistencia a base de datos. Para hacer que Python trate a un directorio como un paquete es nece­ sario crear un archivo __init__.py en dicha carpeta. En este archivo se pueden definir elementos que pertenezcan a dicho paquete, como una constante DRIVER para el paquete bbdd, aunque habitualmente se trata­ rá de un archivo vacío. Para hacer que un cierto módulo se encuentre dentro de un paquete, basta con copiar el archivo que define el módulo al directorio del paquete.

Como los modulos, para importar paquetes también se utiliza import y from-import y el caracter . para separar paquetes, subpaquetes y módulos. import paq.subpaq.modulo paq.subpaq.modulo.func() A lo largo de los próximos capítulos veremos algunos módulos y pa­ quetes de utilidad. Para encontrar algún módulo o paquete que cubra una cierta necesidad, puedes consultar la lista de PyPI (Python Pac­ kage Index) en http://pypi.python.org/, que cuenta a la hora de escribir

```python
Python para todos
```

estas líneas, con más de 4000 paquetes distintos.

Entrada/Salida Y Ficheros Nuestros programas serían de muy poca utilidad si no fueran capaces de interaccionar con el usuario. En capítulos anteriores vimos, de pasa­ da, el uso de la palabra clave print para mostrar mensajes en pantalla. En esta lección, además de describir más detalladamente del uso de print para mostrar mensajes al usuario, aprenderemos a utilizar las funciones input y raw_input para pedir información, así como los argumentos de línea de comandos y, por último, la entrada/salida de ficheros.

Entrada estándar La forma más sencilla de obtener información por parte del usuario es mediante la función raw_input. Esta función toma como paráme­ tro una cadena a usar como prompt (es decir, como texto a mostrar al usuario pidiendo la entrada) y devuelve una cadena con los caracteres introducidos por el usuario hasta que pulsó la tecla Enter. Veamos un pequeño ejemplo

nombre = raw_input(“Como te llamas? “) print “Encantado, “ + nombre Si necesitáramos un entero como entrada en lugar de una cadena, por ejemplo, podríamos utilizar la función int para convertir la cadena a entero, aunque sería conveniente tener en cuenta que puede lanzarse una excepción si lo que introduce el usuario no es un número.

try: edad = raw_input(“Cuantos anyos tienes? “)

```python
Python para todos
    dias = int(edad) * 365
    print “Has vivido “ + str(dias) + “ dias”
```

except ValueError: print “Eso no es un numero” La función input es un poco más complicada. Lo que hace esta fun­ ción es utilizar raw_input para leer una cadena de la entrada estándar, y después pasa a evaluarla como si de código Python se tratara; por lo tanto input debería tratarse con sumo cuidado.

Parámetros de línea de comando Además del uso de input y raw_input el programador Python cuen­ ta con otros métodos para obtener datos del usuario. Uno de ellos es el uso de parámetros a la hora de llamar al programa en la línea de comandos. Por ejemplo

```python
python editor.py hola.txt
```

En este caso hola.txt sería el parámetro, al que se puede acceder a través de la lista sys.argv, aunque, como es de suponer, antes de poder utilizar dicha variable debemos importar el módulo sys. sys.argv[0] contiene siempre el nombre del programa tal como lo ha ejecutado el usuario, sys.argv[1], si existe, sería el primer parámetro; sys.argv[2] el segundo, y así sucesivamente.

```python
import sys
```

if(len(sys.argv) > 1): print “Abriendo “ + sys.argv[1] else: print “Debes indicar el nombre del archivo” Existen módulos, como optparse, que facilitan el trabajo con los argu­ mentos de la línea de comandos, pero explicar su uso queda fuera del objetivo de este capítulo.

Salida estándar La forma más sencilla de mostrar algo en la salida estándar es median­ te el uso de la sentencia print, como hemos visto multitud de veces en

Entrada/Salida. Ficheros ejemplos anteriores. En su forma más básica a la palabra clave print le sigue una cadena, que se mostrará en la salida estándar al ejecutarse el estamento.

```python
>>> print “Hola mundo”
```

Hola mundo Después de imprimir la cadena pasada como parámetro el puntero se sitúa en la siguiente línea de la pantalla, por lo que el print de Python funciona igual que el println de Java. En algunas funciones equivalentes de otros lenguajes de programación es necesario añadir un carácter de nueva línea para indicar explícita­ mente que queremos pasar a la siguiente línea. Este es el caso de la función printf de C o la propia función print de Java.

Ya explicamos el uso de estos caracteres especiales durante la explica­ ción del tipo cadena en el capítulo sobre los tipos básicos de Python. La siguiente sentencia, por ejemplo, imprimiría la palabra “Hola”, seguida de un renglón vacío (dos caracteres de nueva línea, ‘\n’), y a continuación la palabra “mundo” indentada (un carácter tabulador, ‘\t’).

print “Hola\n\n\tmundo” Para que la siguiente impresión se realizara en la misma línea tendría­ mos que colocar una coma al final de la sentencia. Comparemos el resultado de este código

```python
>>> for i in range(3):
>>> ...print i,
```

0 1 2 Con el de este otro, en el que no utiliza una coma al final de la senten­ cia

```python
>>> for i in range(3):
>>> ...print i
```

```python
Python para todos
```

Este mecanismo de colocar una coma al final de la sentencia funcio­ na debido a que es el símbolo que se utiliza para separar cadenas que queramos imprimir en la misma línea.

```python
>>> print “Hola”, “mundo”
```

Hola mundo Esto se diferencia del uso del operador + para concatenar las cadenas en que al utilizar las comas print introduce automáticamente un espa­ cio para separar cada una de las cadenas. Este no es el caso al utilizar el operador +, ya que lo que le llega a print es un solo argumento: una cadena ya concatenada.

```python
>>> print “Hola” + “mundo”
```

Holamundo Además, al utilizar el operador + tendríamos que convertir antes cada argumento en una cadena de no serlo ya, ya que no es posible concate­ nar cadenas y otros tipos, mientras que al usar el primer método no es necesaria la conversión.

```python
>>> print “Cuesta”, 3, “euros”
```

Cuesta 3 euros

```python
>>> print “Cuesta” + 3 + “euros”
```

<type ‘exceptions.TypeError’>: cannot concatenate ‘str’ and ‘int’ objects La sentencia print, o más bien las cadenas que imprime, permiten también utilizar técnicas avanzadas de formateo, de forma similar al sprintf de C. Veamos un ejemplo bastante simple: print “Hola %s” % “mundo” print “%s %s” % (“Hola”, “mundo”) Lo que hace la primera línea es introducir los valores a la derecha del símbolo % (la cadena “mundo”) en las posiciones indicadas por los espe­ cificadores de conversión de la cadena a la izquierda del símbolo %, tras convertirlos al tipo adecuado.

En la segunda línea, vemos cómo se puede pasar más de un valor a sustituir, por medio de una tupla.

---
