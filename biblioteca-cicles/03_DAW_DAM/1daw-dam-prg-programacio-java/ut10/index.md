---
layout: default
title: "UD6 — Estructuras de datos dinámicas · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT10 Completa"
prev_url: "../ut09/ut0902.html"
prev_label: "⬅️ 5.2 Estructuras de datos estaticas"
next_url: "../ut10/ut1001.html"
next_label: "6.1 Estructuras de datos dinámicas ➡️"
---

# 📘 UD6 — Estructuras de datos dinámicas (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**6.1 Estructuras de datos dinámicas**](./ut1001.md)
- [**6.2 Estructuras de datos dinamicas**](./ut1002.md)
- [**6.3 Recursividad**](./ut1009.md)

---

# 6.1 Estructuras de datos dinámicas

> **📌 🏷️ Apunt de la Unitat**
> #### Contenido de la unidad

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

> **📌 🏷️ Apunt de la Unitat**
> ---
>
> #### RECURSIVIDAD
>
> ---

> **🔗 Recurs Web: [Vídeo] La MAGIA de la RECURSIVIDAD**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=yX5kR63Dpdw) ↗️**](https://www.youtube.com/watch?v=yX5kR63Dpdw)

---

### UNIDAD 6: ESTRUCTURAS DE DATOS DINÁMICAS

V2.04.12.23

Profesor: José Ramón Simó Martínez Contenido

- Introducción ............................................................................................................................ 2
- Estructuras de datos dinámicas ............................................................................................... 3

2.1. Listas ............................................................................................................................................. 4 2.2. Pilas .............................................................................................................................................. 7 2.3. Colas ............................................................................................................................................. 9 2.4. Conjuntos .................................................................................................................................... 11 2.5. Diccionarios ................................................................................................................................. 13

- La clase Collections ................................................................................................................. 16

3.1. Uso de la clase Collections ........................................................................................................... 17

- Diagrama de decisión para el uso de Colecciones de Java ........................................................ 18
- Bibliografía ............................................................................................................................. 18

V2.04.12.23

### 1. Introducción

Empecemos recordando que un dato de tipo simple no está compuesto de otras estructuras que no sean los bits, y que por tanto su representación sobre el ordenador es directa, sin embargo, existen unas operaciones propias de cada tipo, que en cierta manera los caracterizan.

Una estructura de datos es, a grandes rasgos, una colección de datos (normalmente de tipo simple) que se caracterizan por su organización y las operaciones que se definen en ellos. Llamaremos dato de tipo estructurado a una entidad, con un solo identificador, constituida por datos de otro tipo, de acuerdo con las reglas que definen cada una de las estructuras de datos.

Los datos estructurados se pueden clasificar según la variabilidad de su tamaño durante la ejecución del programa en: • Estructuras de datos estáticas: Las estructuras estáticas son aquellas en las que el tamaño ocupado en memoria se define con anterioridad a la ejecución del programa que los usa, de forma que su dimensión no puede modificarse durante la misma (p.e., un vector o una matriz) aunque no necesariamente se tenga que utilizar toda la memoria reservada al inicio (en todos los lenguajes de programación las estructuras estáticas se representan en memoria de forma contigua).

• Estructuras de datos dinámicas: Por el contrario, ciertas estructuras de datos pueden crecer o decrecer en tamaño, durante la ejecución, dependiendo de las necesidades de la aplicación, sin que el programador pueda o deba determinarlo previamente: son las llamadas estructuras dinámicas. Las estructuras dinámicas no tienen teóricamente limitaciones en su tamaño, salvo la única restricción de la memoria disponible en el computador.

Las estructuras estáticas las estudiamos en anteriores unidades. En esta unidad introduciremos las estructuras dinámicas más utilizadas en Java: • ArrayList (interfaz List) • Stack • Queue • HashMap • HashSet A estas estructuras también las conocemos en Java como Colecciones.

Nota En este tema aparecerán conceptos de programación orientada a objetos que se estudiará en unidades posteriores. Al igual que hemos hecho con otros objetos de Java presentados hasta el momento (String, Arrays, Date, etc), nos centraremos en el uso de estos objetos.

V2.04.12.23

### 2. Estructuras de datos dinámicas

A continuación, se presenta un esquema resumen de los tipos de datos estáticos y dinámicos disponibles en el lenguaje Java

Las estructuras de datos dinámicas son conceptos abstractos conocidos como Tipos Abstractos de Datos (TAD). No definen cómo se guardan los datos sino como estos se comportan a la hora, principalmente, de: • Crear • Leer o recuperar datos • Escribir o actualizar datos • Eliminar datos Estas acciones también son conocidas como CRUD (Create, Read, Update, Delete).

A continuación, se hará una breve definición de cada uno de los TAD principales.

Estructuras de Datos Estáticas Simples boolean char int Compuestas vectores matrices strings archivos Dinámicas Listas Pilas Colas Diccionarios

V2.04.12.23

#### 2.1. Listas

Una lista es un TAD que representa un número de valores ordenados, donde el mismo valor puede aparecer más de una vez. Las operaciones que se pueden hacer sobre una lista son muy variadas, pero principalmente son las siguientes: • Crear: crear una lista vacía. • Insertar: añadir elementos a la lista.

• Eliminar: eliminar elementos de la lista. • Consultar: consultar un elemento de la lista. • Vacía: consultar si la lista está vacía. La inserción/eliminación/consulta de una lista se podrá hacer sobre cualquier posición del elemento en la lista. Como analogía, tenemos los siguientes ejemplos de pilas en el mundo real

• Lista de la compra: creamos una lista de la compra con diferentes productos que vamos consultando y/o eliminando de la lista conforme compramos. • Lista de tareas. • Etc. Actualmente las principales clases que utilizan la interfaz List1 para implementar una lista son

• ArrayList • LinkedList • Vector (se utiliza ArrayList en vez de esta) • Stack En esta unidad nos centraremos en el uso de la clase ArrayList. Decir que la clase LinkedList también se usa para la creación de listas, sin embargo en este tema sólo la veremos para su uso en la creación Colas.

Nota (1) El concepto de interfaz se estudiará en unidades posteriores. Por ahora, entenderemos interfaz algo que define el comportamiento de una clase, pero no podemos usar directamente. Por ejemplo, la clase ArrayList define el comportamiento de la interfaz List.

Recordad que en unidades anteriores hemos utilizado clases de Java como String, Random, etc.

V2.04.12.23

#### 2.1.1. Uso del TAD Lista: la clase ArrayList

La clase ArrayList es un tipo de Lista e implementa la interfaz List. Destacar que ArrayList será una de las clases más utilizadas para la creación de listas en Java. A continuación, un ejemplo de uso de la clase ArrayList en Java

Para crear una lista debemos decir qué tipo de datos1 va a contener dicha lista. En el ejemplo anterior se puede ver que el ArrayList sólo va a contener datos de tipo String. La sintaxis es la siguiente

```java
TipoDatoDinamico<Objeto> nombreVariable = new TipoDatoDinamico<Objeto>();
```

Esta sintaxis se puede aplicar al resto de tipos de datos dinámicos que estudiaremos en esta unidad.

V2.04.12.23 Para recorrer una lista también podemos hacer uso de la variante for (conocida como foreach) que estudiamos en la unidad anterior. Por ejemplo, podríamos recorrer el ArrayList del ejemplo así

Por otra parte, observa que necesitamos importar la clase ArrayList del paquete java.util. La clase ArrayList utiliza varios métodos para su uso. Los principales son: • add(elemento): añade un elemento al final de la lista. • add(X, elemento): añade un elemento en la posición X.

• get(X): consulta un elemento de la posición X. • remove(X): elimina un elemento de la posición X. • size(): devuelve el número de elemento que tiene la lista. • isEmpty(): devuelve verdadero si la lista está vacía, en caso contrario falso. • clear(): elimina todos los elementos pero no borra la lista.

• indexOf(elemento): devuelve la posición de la primera ocurrencia del elemento que se indica entre paréntesis. • contains(elemento): devuelve true si el elemento se encuentra en la lista y false en caso contrario. • addAll(nuevaLista): añade todos los elementos de nuevaLista al final de la lista.

Nota Hay que tener en cuenta que la clase ArrayList sólo admite tipos de datos objeto como elementos de la lista. Dicho de otra manera, no podemos crear listas directamente con tipos de datos primitivos como int, float, double, etc. Para ello, deberíamos usar las clases envoltorio estudiadas en unidades anteriores (Integer, Double, Float, etc).

Más información de la interfaz List y sus clases que la implementan: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/List.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/ArrayList.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/LinkedList.html A continuación, estudiaremos dos casos especiales de listas: Pilas y Colas. Estos TAD definirán el comportamiento que deberá tener la lista.

V2.04.12.23

#### 2.2. Pilas

Es una colección de elementos sobre los que se tiene dos principales operaciones: • Apilar: añades un elemento en la cima de la colección (o array). • Desapilar: elimina un elemento de la cima de la colección (o array). El comportamiento de la pila se conoce como LIFO (Last In, First Out), es decir, el último elemento que se añade será el primero en eliminarse/consultarse. Esta forma de actuar gráficamente se vería así

Otro ejemplo gráfico de su funcionamiento se vería así (push es apilar, pop es desapilar)

Puedes pensar que la colección de elementos del anterior ejemplo es un array. Como analogía, tenemos los siguientes ejemplos de pilas en el mundo real: • Pila de platos: en una pila de platos, vamos desapilando para lavar cada plato y por otro lado vamos apilándolos cuando ya están secos.

• Deshacer/Rehacer: en software, se van Apilando las acciones que se realizan en un programa. Por otro lado, cuando hacemos click en Deshacer lo que estamos es desapilando la última acción, o en Rehacer estamos apilando otra vez la última acción.

V2.04.12.23

#### 2.2.1. Uso del TAD Pila en Java: la clase Stack

En Java tenemos la clase Stack para hacer implementa el TAD pila. Esta clase también implementa la interfaz List. En el siguiente código podemos ver su uso

Observa que necesitamos importar la clase Stack del paquete java.util. La clase Stack utiliza varios métodos para su uso. Los principales son: • push(elemento): para añadir un elemento a la pila. • peek(): para mostrar el elemento que está en la cima de la pila (no lo elimina).

• pop(): elimina el elemento de la cima de la pila. • size(): devuelve el números de elementos que contiene la pila. • clear(): vacía los elementos que contiene la pila. • isEmpty(): comprueba que la pila está vacía. Se puede implementar el concepto de Pila con estructuras estáticas en Java, como los arrays. Sin embargo, está fuera de este curso presentar el estudio de su implementación (se deja como ampliación).

Más información de la clase Stack: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Stack.html

V2.04.12.23

#### 2.3. Colas

Es una colección de elementos sobre los que se tiene dos principales operaciones: • Encolar: añades un elemento a la cola de la colección (o array). • Desencolar: elimina un elemento de la cola de la colección (o array). El comportamiento de la pila se conoce como FIFO (First In, First Out), es decir, el primer elemento que se añade será el primero en eliminarse/consultarse. Esta forma de actuar gráficamente se vería así

Otro ejemplo gráfico sería el siguiente

### 1. Tenemos originalmente este contenido dentro de una Cola

### 2. Añadimos el elemento 8 a la cola y este se añade en la cabeza de la cola

### 3. Si ahora eliminamos un elemento de la cola

Como analogía, tenemos los siguientes ejemplos de pilas en el mundo real: • Cola del cine, discoteca, teatro, etc. • Cola de procesos en una CPU: el primer proceso en llegar será el primero en ejecutarse.

V2.04.12.23

#### 2.3.1. Uso del TAD Cola: la clase LinkedList

En Java tenemos la interfaz (que NO clase) Queue para hacer uso del TAD Cola. Esto significa que no podemos instanciar (hacer un new) de una clase Queue, pero si que podremos usar en este caso la clase LinkedList (tipo de lista) que implementa a la interfaz Queue.

En este punto del curso insisto en que no importa tanto que no sepas la diferencia entre la clase y la interfaz, sino en la creación y uso de TADs en Java. Fíjate en el siguiente código de ejemplo para saber cómo se hace

Observa que en la creación de la Cola participan tanto la interfaz Queue, que define lo que podemos hacer con la cola, y la clase LinkedList para instanciar (crear) la cola. Por otra parte, necesitamos importar tanto Queue como LinkedList del paquete java.util. La interfaz Queue utiliza varios métodos para su uso. Los principales son

• add(elemento): para añadir un elemento a la cola de la cola. • peek(): mostrar primer elemento que llegó a la cola (la cabeza de la cola). • remove(): elimina el primer elemento que llegó a la cola (la cabeza de la cola). • clear(): elimina todos los elementos de la cola.

• isEmpty(): comprueba que la cola está vacía.

V2.04.12.23 También observamos que hacemos uso de la clase LinkedList. Esto es necesario para poder implementar la interfaz Queue. Otra opción es usar, en vez de LinkedList, la clase PriorityQueue. Se deja como ejercicio de ampliación al estudiante. Más información de la interfaz Queue

https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Queue.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/LinkedList.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/PriorityBlockingQueue.

html

#### 2.4. Conjuntos

Matemáticamente un conjunto es una colección no ordenada de elementos no repetidos. Por una parte, es no ordenada porque no podemos acceder a los elementos a través de un índice. Y por otra, no repetidos porque cada elemento de del conjunto es único. Por tanto, en este punto cabe recalcar la diferencia entre

• Lista: colección de elementos ordenados y pueden estar repetidos. Se accede a los elementos a través de un índice. • Conjunto: colección de elementos no ordenados y no duplicados. No se puede acceder a través de un índice. Principales operaciones: • Añadir: añades un elemento al conjunto SI este no existe ya en dicho conjunto.

• Consultar: consulta si un elemento concreto está en el conjunto. • Eliminar: elimina un elemento del conjunto SI este existe en dicho conjunto. A diferencia de las Listas, Pilas y Colas, los conjuntos no tienen comportamiento LIFO o FIFO. ¡Es decir, no nos importa cómo ni dónde se añaden los elementos en el conjunto… porque es un conjunto!

Por tanto, gráficamente podemos ver un Conjunto como un “saco” de elementos: los conjuntos matemáticos de toda la vida

Gala Melis Ramon Reme Colección de enteros Colección de nombres

V2.04.12.23 Como analogía, tenemos los siguientes ejemplos de pilas en el mundo real: • Conjunto de números enteros, reales, etc. • Conjunto de todos los DNI de España. • Conjunto de todas las matrículas de coche. • Etc.

#### 2.4.1. Uso del TAD Conjunto: la clase HashSet

En Java tenemos la interfaz (que NO clase) Set para hacer uso del TAD Conjunto. En este caso, Java implementa la interfaz Set en las siguientes clases: • HashSet • TreeSet • LinkedHashSet En esta unidad estudiaremos el uso de la clase HashSet para el uso de conjuntos en Java. A continuación, un ejemplo de código para crear conjuntos de elementos con la clase HashSet

V2.04.12.23 Salida por pantalla

Observa que necesitamos importar las clase HashSet del paquete java.util. La clase HashSet utiliza varios métodos para su uso. Los principales son: • add(elemento): añade un elemento al conjunto, si este no existe todavía. • contains(elemento): nos dice si un elemento en concreto existe en el conjunto.

• remove(elemento): elimina el elemento del conjunto si este existe en dicho conjunto. • clear(): elimina todos los elementos del conjunto. • size(): devuelve el número de elementos que contiene el conjunto. • isEmpty(): comprueba que no hay elementos en el conjunto. Más información de la interfaz Set y la clase HashSet

https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Set.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashSet.html

#### 2.5. Diccionarios

Hasta ahora hemos estudiado dos tipos de datos dinámicos: listas y conjuntos. En las listas cada elemento esta indexado y podemos acceder a este indicando un número entero como índice. Los Diccionarios, al igual que las listas, los datos están indexados. Sin embargo, sus índices (claves) pueden ser cualquier tipo de valor. Por tanto, a los Diccionarios se les conoce como dato dinámico de tipo CLAVE-VALOR.

Ejemplos de su uso pueden ser: • Almacenar nombres de capitales (VALOR) y acceder a ellas mediante el nombre de su país (CLAVE).

• En un juego de Star Wars, para cada personaje (CLAVE) se puede almacenar su fuerza (VALOR).

1000.0 500.0 500.0 5000.0 Anakin Luke Leia Yoda 0.0 C3PO Londres Madrid Berlín Lisboa UK ES DE PT

V2.04.12.23 Como podrás intuir, no puede haber claves duplicadas en el diccionario (pero sí valores).

#### 2.5.1. Uso del TAD Diccionario: la clase HashMap

En Java los diccionarios se implementan a partir de la interfaz Map. Y recuerdo que no importa tanto ahora que sepamos que es la interfaz. Lo importante es que sepamos que existen las siguientes tres clases para usar Diccionarios: • HashMap • TreeMap • LinkedHashMap En esta unidad sólo estudiaremos el uso de la clase HashMap para la creación de diccionarios. A continuación, un ejemplo de código para crear conjuntos de elementos con la clase HashMap

V2.04.12.23 Salida por pantalla

Antes que nada, observa que necesitamos importar las clase HashMap del paquete java.util. La clase HashMap utiliza varios métodos para su uso. Los principales son: • put: añade un elemento al diccionario. Necesita la clave y el valor. • get: devuelve un elemento del diccionario a partir de su clave.

• remove: elimina un elemento del diccionario a partir de su clave. • replace: actualiza un elemento del diccionario a partir de su clave y el nuevo valor • keySet: devuelve un Set, que será el conjunto de claves de nuestro HashMap. • values(): devuelve una colección con todos los valores (los valores pueden estar duplicados a diferencia de las claves).

• entrySet(): devuelve un Set con todos los pares CLAVE-VALOR. • containsKey(clave): devuelve true si el diccionario contiene la clave indicada y false en caso contrario. • size(): devuelve el número de elementos que hay en el HashMap. • clear(): elimina todos los elementos del HashMap.

• isEmpty(): comprueba si el HashMap ya no contiene elementos CLAVE-VALOR. Ahora estudiaremos dos peculiaridades del HashMap: creación y recorrido. Creación de HashMap Para empezar, en la creación de Diccionarios hay una diferencia a destacar respeto a las Listas o Conjuntos.

Los diccionarios necesitan dos tipos de datos para poder crearse: la clave y el valor. Además, estos deben ser de tipo objeto (no datos primitivos int, float,etc). La sintaxis para crear HashMap será

```java
HashMap<Objeto1, Objeto2> nombreVariable = new HashMap<Objeto1, Objeto2>();
```

En el ejemplo anterior se puede ver que el HashMap tendrá como clave un String y como valor un Double.

V2.04.12.23 Recorrer el HashMap Por otra parte, hay que destacar la manera de recorrer los datos del HashMap. Para ello, como se puede observar, utilizaremos una variante del bucle for (conocida en otros lenguajes como foreach) que permite recorrer de forma óptima el HashMap.

Para ello usamos el método keySet() que devuelve el conjunto de CLAVES de nuestro HashMap en forma de tipo de dato Set. Luego ya podemos acceder al VALOR de cada uno de nuestros datos en el HashMap a partir de su CLAVE. Más información de la interfaz Map y sus clases

https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Map.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashMap.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeMap.html https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/LinkedHashMap.html

### 3. La clase Collections

Una vez estudiados los principales TAD y las estructuras dinámicas (Colecciones) que ofrece Java para su uso, es conveniente presentar una clase que resultará bastante útil para manipular dichas estructuras. Esta clase se conoce como Collections. La clase Collections está formada por un conjunto de métodos (recuerda, funciones en Java) que son estáticos (al igual por ejemplo que la clase Math). Por tanto, al ser estáticos no hace falta instanciar (crear con new) la clase Collections.

Los métodos más destacados de la clase Collections son: • sort(): recibe como parámetro un objeto de tipo List (ArrayList por ejemplo) y ordena sus elementos. • reverse(): recibe como parámetro un objeto de tipo List (ArrayList por ejemplo) e invierte el orden de sus elementos.

• shuffle(): recibe como parámetro un objeto de tipo List (ArrayList por ejemplo) y mezcla aleatoriamente sus elementos, es decir, como en una baraja de cartas. • max(): recibe como parámetro cualquier objeto de tipo Collection (cualquiera de los que hemos estudiado) y devuelve el máximo del orden natural de los valores que contiene dicha colección.

• min(): recibe como parámetro cualquier objeto de tipo Collection (cualquiera de los que hemos estudiado) y devuelve el mínimo del orden natural de los valores que contiene dicha colección.

V2.04.12.23 Nota No confundir la clase Collections con Collection.

#### 3.1. Uso de la clase Collections

A continuación, un ejemplo de uso de la clase Collections

Observa que necesitamos importar las clase Collections del paquete java.util. Por otra parte, fíjate que en el caso del método sort no hace falta guardar la lista ordenada en otra lista, es decir, la lista que recibe como parámetro la modifica directamente. Sin embargo, el método max sí que devuelve un objeto: en este caso como tenemos tipos de datos Integer dentro de la lista, debemos guardar el valor devuelto en una variable de tipo Integer.

De todas formas, habrá que leer la documentación oficial para consultar los parámetros que recibe y lo que devuelve cada método. Más información de la clase Collections y sus métodos: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Collections.html

V2.04.12.23

### 4. Diagrama de decisión para el uso de Colecciones de Java

Diagrama de decisión para uso de Colecciones en Java

### 5. Bibliografía

Documentación oficial: https://docs.oracle.com/en/java/javase/17/docs/api/index.html Web w3schools.com Librerías de clases útiles: Apuntes de José Chamorro del CFGS DAW del .

---

# 6.2 Estructuras de datos dinamicas

Programación

### UD 6: Estructuras de datos dinámicas

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

Programación

### UD 7: Estructuras de datos dinámicas

Estructuras de datos dinámicas 1.- Estructuras de datos dinámicas 2.- ¿Qué son las colecciones? 3.- Tipos de colecciones Java 3.1.- Set 3.2.- List 3.3.- Map 3.4.- Queue 3.5.- Stack

1.- Estructuras de datos dinámicas Programación

1.- Estructuras de datos dinámicas Empecemos recordando que un dato de tipo simple, no esta compuesto de otras estructuras, que no sean los bits, y que por tanto su representación sobre el ordenador es directa, sin embargo existen unas operaciones propias de cada tipo, que en cierta manera los caracterizan.

Una estructura de datos es, a grandes rasgos, una colección de datos (normalmente de tipo simple) que se caracterizan por su organización y las operaciones que se definen en ellos. Llamaremos dato de tipo estructurado a una entidad, con un solo identificador, constituida por datos de otro tipo, de acuerdo con las reglas que definen cada una de las estructuras de datos.

Los datos estructurados se pueden clasificar según la variabilidad de su tamaño durante la ejecución del programa en: estáticos y dinámicos. Programación

1.- Estructuras de datos dinámicas Estructuras de datos estáticas Las estructuras estáticas son aquellas en las que el tamaño ocupado en memoria se define con anterioridad a la ejecución del programa que los usa, de forma que su dimensión no puede modificarse durante la misma (p.e., un vector o una matriz) aunque no necesariamente se tenga que utilizar toda la memoria reservada al inicio (en todos los lenguajes de programación las estructuras estáticas se representan en memoria de forma contigua).

> **⚠️ NOTA: Las estructuras de datos estáticas se estudian en...**
> NOTA: Las estructuras de datos estáticas se estudian en la UD5 Estructuras de datos dinámicas Por el contrario, ciertas estructuras de datos pueden crecer o decrecer en tamaño, durante la ejecución, dependiendo de las necesidades de la aplicación, sin que el programador pueda o deba determinarlo previamente: son las llamadas estructuras dinámicas. Las estructuras dinámicas no tienen teóricamente limitaciones en su tamaño, salvo la única restricción de la memoria disponible en el computador.

Programación

1.- Estructuras de datos dinámicas Programación

Estructuras de Datos Estáticas Simples boolean char int Compuestas vectores matrices strings archivos Dinámicas pilas colas listas árboles

2.- ¿Qué son las colecciones? Programación

2.- ¿Qué son las colecciones? Una colección representa un grupo de objetos. Estos objetos son conocidos como elementos. Cuando queremos trabajar con un conjunto de elementos, necesitamos un almacén donde poder guardarlos. En Java, se emplea la interfaz genérica Collection para este propósito.

Programación

2.- ¿Qué son las colecciones? Gracias a la interfaz Collection, podemos almacenar cualquier tipo de objeto y podemos usar una serie de métodos comunes, como pueden ser: Añadir Eliminar Obtener el tamaño de la colección etc. Partiendo de la interfaz genérica Collection extienden otra serie de interfaces genéricas.

Estas subinterfaces aportan distintas funcionalidades sobre la interfaz anterior. Programación

3.- Tipos de colecciones Programación

3.- Tipos de colecciones Tipos de colecciones en Java: Set HashSet TreeSet LinkedHashSet List ArrayList Vector LinkedList Map HashMap TreeMap LinkedHashMap Queue PriorityQueue Stack Programación

3.- Tipos de colecciones Diagrama de Clases e Interfaces completa del lenguaje de programación Java. Programación

3.- Tipos de colecciones 3.1.- Set: La interfaz Set define una colección que no puede contener elementos duplicados. Esta interfaz contiene, únicamente, los métodos heredados de Collection añadiendo la restricción de que los elementos duplicados están prohibidos. Para comprobar si los elementos son elementos duplicados o no lo son, es necesario que dichos elementos tengan implementada, de forma correcta, los métodos equals y hashCode.

Para comprobar si dos Set son iguales, se comprobarán si todos los elementos que los componen son iguales sin importar el orden que ocupen dichos elementos. Dentro de la interfaz Set existen los siguientes tipos de implementaciones realizadas dentro de la plataforma Java

HashSet TreeSet LinkedHashSet Programación

3.- Tipos de colecciones HashSet: Esta implementación almacena los elementos en una tabla hash. Es la implementación con mejor rendimiento de todas pero no garantiza ningún orden a la hora de realizar iteraciones. Es la más empleada debido a su rendimiento y a que, generalmente, no nos importa el orden que ocupen los elementos.

Proporciona tiempos constantes en las operaciones básicas siempre y cuando la función hash disperse de forma correcta los elementos dentro de la tabla hash. Es importante definir el tamaño inicial de la tabla ya que este tamaño marcará el rendimiento de esta implementación.

Programación

3.- Tipos de colecciones TreeSet: Esta implementación almacena los elementos ordenados en función de sus valores. Es bastante más lento que HashSet. Los elementos almacenados deben implementar la interfaz Comparable. Esta implementación garantiza, siempre, un rendimiento de log(N) en las operaciones básicas, debido a la estructura de árbol empleada para almacenar los elementos.

Programación

3.- Tipos de colecciones LinkedHashSet: Esta implementación almacena los elementos en función del orden de inserción. Es, simplemente, un poco más costosa que HashSet.

```java
import java.util.Iterator;
import java.util.LinkedHashSet;
public class LinkedHashSet_Ejemplo {
public static void main(String[] args) {
LinkedHashSet<String> set = new LinkedHashSet();
set.add("Uno");
set.add("Dos");
set.add("Tres");
set.add("Uno");
set.add("Cuatro");
Iterator<String> i=set.iterator();
```

while (i.hasNext()) {

```java
System.out.println(i.next());
}
}
}
```

Programación

3.- Tipos de colecciones Comparación Colecciones Set

```java
final Set<Integer> hashSet = new HashSet<Integer>(1_000_000);
final Long startHashSetTime = System.currentTimeMillis();
for (int i = 0; i < 1_000_000; i++) {
hashSet.add(i);
}
final Long endHashSetTime = System.currentTimeMillis();
System.out.println("Time spent by HashSet: " + (endHashSetTime - startHashSetTime));
final Set<Integer> treeSet = new TreeSet<Integer>();
final Long startTreeSetTime = System.currentTimeMillis();
for (int i = 0; i < 1_000_000; i++) {
treeSet.add(i);
}
final Long endTreeSetTime = System.currentTimeMillis();
System.out.println(“Time spent by TreeSet: ” + (endTreeSetTime - startTreeSetTime));
final Set<Integer> linkedHashSet = new LinkedHashSet<Integer>(1_000_000);
final Long startLinkedHashSetTime = System.currentTimeMillis();
for (int i = 0; i < 1_000_000; i++) {
linkedHashSet.add(i);
}
final Long endLinkedHashSetTime = System.currentTimeMillis();
System.out.println("Time spent by LinkedHashSet: " + (endLinkedHashSetTime - startLinkedHashSetTime));
```

Se deja al alumno la tarea de ejecutar este código e interpretar los resultados. Programación

3.- Tipos de colecciones 3.2.- List: La interfaz List define una sucesión de elementos. A diferencia de la interfaz Set, la interfaz List sí admite elementos duplicados. A parte de los métodos heredados de Collection, añade métodos que permiten mejorar los siguientes puntos

- Acceso posicional a elementos: manipula elementos en función de su posición en la

lista.

- Búsqueda de elementos: busca un elemento concreto de la lista y devuelve su

posición.

- Iteración sobre elementos: mejora el Iterator por defecto.
- Rango de operación: permite realizar ciertas operaciones sobre rangos de elementos

dentro de la propia lista. Dentro de la interfaz List existen los siguientes tipos de implementaciones realizadas dentro de la plataforma Java: ArrayList Vector LinkedList Programación

3.- Tipos de colecciones ArrayList: Esta es la implementación típica. Se basa en un array redimensionable que aumenta su tamaño según crece la colección de elementos. Es la que mejor rendimiento tiene sobre la mayoría de situaciones. Vector: Vector implementa la interfaz List.

Al igual que ArrayList, también mantiene el orden de inserción. Programación

3.- Tipos de colecciones ArrayList (métodos más utilizados): Programación

MÉTODO DESCRIPCIÓN size() Devuelve el número de elementos (int) add(X) Añade el objeto X al final. Devuelve true. add(posición, X) Inserta el objeto X en la posición indicada. get(posicion) Devuelve el elemento que está en la posición indicada. remove(posicion) Elimina el elemento que se encuentra en la posición indicada. Devuelve el elemento eliminado.

remove(X) Elimina la primera ocurrencia del objeto X. Devuelve true si el elemento está en la lista. clear() Elimina todos los elementos. set(posición, X) Sustituye el elemento que se encuentra en la posición indicada por el objeto X. Devuelve el elemento sustituido.

contains(X) Comprueba si la colección contiene al objeto X. Devuelve true o false. indexOf(X) Devuelve la posición del objeto X. Si no existe devuelve -1 Los puedes consultar todos en: https://docs.oracle.com/javase/9/docs/api/java/util/ArrayList.html

3.- Tipos de colecciones LinkedList: Esta implementación permite que mejore el rendimiento en ciertas ocasiones. Esta implementación se basa en una lista doblemente enlazada de los elementos, teniendo cada uno de los elementos un puntero al anterior y al siguiente elemento.

Programación

3.- Tipos de colecciones 3.3.- Map: La interfaz Map asocia pares de claves y valores. Esta interfaz no puede contener claves duplicadas y; cada una de dichas claves, sólo puede tener asociado un valor como máximo. Dentro de la interfaz Map existen los siguientes tipos de implementaciones realizadas dentro de la plataforma Java

HashMap TreeMap LinkedHashMap Programación

3.- Tipos de colecciones HashMap: Esta implementación almacena las claves en una tabla hash. Es la implementación con mejor rendimiento de todas pero no garantiza ningún orden a la hora de realizar iteraciones. Proporciona tiempos constantes en las operaciones básicas siempre y cuando la función hash disperse de forma correcta los elementos dentro de la tabla hash.

Es importante definir el tamaño inicial de la tabla ya que este tamaño marcará el rendimiento de esta implementación. Programación

3.- Tipos de colecciones TreeMap: Esta implementación almacena las claves ordenadas en función de sus valores. Es bastante más lento que HashMap. Las claves almacenadas deben implementar la interfaz Comparable. Esta implementación garantiza, siempre, un rendimiento de log(N) en las operaciones básicas, debido a la estructura de árbol empleada para almacenar los elementos.

Programación

3.- Tipos de colecciones LinkedHashMap: Esta implementación almacena las claves en función del orden de inserción. Es, simplemente, un poco más costosa que HashMap. Se deja al alumno la tarea realizar una prueba de inserción en las tres implementaciones Map e interpretar los resultados.

Programación

3.- Tipos de colecciones 3.4.- Queue (Cola): Una cola es una estructura de datos First In First Out (FIFO). Simula una cola en la vida real. Sí, la que podrías haber visto frente a un cine, un centro comercial, un metro o un autobús. Al igual que las colas en la vida real, los elementos nuevos en una estructura de datos de cola se agregan en la parte posterior y se eliminan de la parte frontal. Una cola se puede visualizar como se muestra en la figura a continuación.

Programación

3.- Tipos de colecciones PriorityQueue: Una cola de prioridad en Java es un tipo especial de cola en el que todos los elementos se ordenan según su orden natural o se basan en un comparador personalizado suministrado en el momento de la creación. La parte frontal de la cola de prioridad contiene el menor elemento de acuerdo con el orden especificado, y la parte posterior de la cola de prioridad contiene el mayor elemento.

Programación

3.- Tipos de colecciones Queue (métodos): Programación

MÉTODO DESCRIPCIÓN offer() Inserta un elemento al final de la cola. remove() Elimina, y devuelve, la cabeza de la cola. element() Devuelve, pero no elimina, la cabeza de la cola. add() Inserta un elemento al final de la cola. Devuelve true. pool() Elimina, y devuelve, la cabeza de la cola. Si la cola está vacía devuelve null.

peek() Devuelve, pero no elimina, la cabeza de la cola. Si la cola está vacía devuelve null. Además de todos los métodos heredados de la clase Collection: clear, contains, isEmpty, size, … Los puedes consultar todos en: https://docs.oracle.com/javase/9/docs/api/java/util/Queue.html

3.- Tipos de colecciones 3.5.- Stack (Pila): Una pila es una estructura de datos Last In First Out (LIFO). Soporta dos operaciones básicas llamadas push y pop. La operación de inserción agrega un elemento en la parte superior de la pila, y la operación de apertura elimina un elemento de la parte superior de la pila.

Programación

3.- Tipos de colecciones Stack (métodos): Programación

MÉTODO DESCRIPCIÓN empty() Devuelve True si la pila está vacía. False, en caso contrario. peek() Devuelve el elemento de la cima de la pila sin eliminarlo. pop() Elimina el elemento de la cima de la pila y lo devuelve. push() Inserta un elemento en la cima de la pila. search() Devuelve la posición del elemento en la pila.

Además de todos los métodos heredados de la clase Vector: clear, contains, isEmpty, size, … Los puedes consultar todos en: https://docs.oracle.com/javase/9/docs/api/java/util/Stack.html

3.- Tipos de colecciones Diagrama de decisión para uso de colecciones Java: Programación

3.- Tipos de colecciones Stream API: Gracias a la llegada de Java 8, las colecciones han aumentado su funcionalidad con la llegada de los streams. Los streams permiten realizar operaciones funcionales sobre los elementos de las colecciones. A continuación, mostramos un ejemplo de las bondades de los streams donde, a partir de una lista de personas (donde cada una de ellas tiene un nombre), obtenemos una lista con todos los nombres

```java
List<Person> people = new ArrayList<Person>();
```

List<String> names

```java
= people.stream().map(Person::getName).collect(Collectors.toList());
```

Programación

Bibliografía Programación

Bibliografía Aprende JAVA con ejercicios. Edición 2018. Luis José Sánchez. Empezar a programar usando Java. 2ª edición. Universitat Politècnica de València https://github.com/statickidz/TemarioDAW https://es.stackoverflow.com Colecciones https://docs.oracle.com/javase/tutorial/collections/interfaces/collection.html https://www.callicoder.com/ Programación

---

# 6.3 Recursividad

Programación

### UD 6b: Programación estructurada

- Recursividad

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

Programación

UD6: Programación estructurada - Recursividad Recursividad 1.- Introducción 2.- Definición de un método recursivo 3.- Resolver un problema recursivo 4.- Tipos de recursión 5.- Recursión Vs Iteración 6.- Recursividad & Vectores

1.- Introducción Programación

UD6: Programación estructurada - Recursividad

1.- Introducción Una función recursiva es aquella que se llama a sí misma. La recursividad es una alternativa a la repetición o iteración. En tiempo de computadora y ocupación de memoria, la solución recursiva es menos eficiente que la iterativa, existen situaciones en las que la recursividad es una solución simple y natural a un problema que en otro caso será difícil de resolver.

Programación

UD6: Programación estructurada - Recursividad

2.- Definición de un método recursivo Programación

UD6: Programación estructurada - Recursividad

2.- Definición de un método recursivo La característica principal de la recursividad es que siempre existe un medio de salir de la definición (caso base o salida), y la segunda condición (caso recursivo) es propiamente donde se llama a sí misma. Una función recursiva simple en Java es

```java
public void infinito()
```

{

```java
infinito();
}
```

Programación

UD6: Programación estructurada - Recursividad

2.- Definición de un método recursivo De manera más formal, una función recursiva es invocada para solucionar un problema y dicha función sabe cómo resolver los casos más sencillo (casos bases). Donde si la función es llamada desde un caso base, ésta simplemente devuelve el resultado.

Si es llamada mediante un problema más complejo, la función lo divide en dos partes conceptuales: una parte de dicha función sabe resolver y otra que no sabe resolver. Además esta segunda parte debe parecerse al problema en sí; para tener la recursividad; pero debe ser más simple.

Debido a que se parece a la original la función lanza una copia de ella misma, que se encargará del problema más sencillo (llamado recursivo o paso de recursión). En esta parte se tendrá la devolución de un valor que era desconocido inicialmente. Programación

UD6: Programación estructurada - Recursividad

3.- Resolver un problema recursivo Programación

UD6: Programación estructurada - Recursividad

3.- Resolver un problema recursivo Caso base Es el caso más simple de una función recursiva, y simplemente devuelve un resultado (el caso base se puede considerar como una salida no recursiva). Caso general Relaciona el resultado del algoritmo con resultados de casos más simples. Dado que cada caso de problema aparenta o se ve similar al problema original, la función llama una copia nueva de si misma, para que empiece a trabajar sobre el problema más pequeño y esto se conoce como una llamada recursiva y también se llama el paso de recursión.

Programación

UD6: Programación estructurada - Recursividad

3.- Resolver un problema recursivo 1. Obtener una definición exacta del problema a resolver. (Esto, por supuesto, es el primer paso en la resolución de cualquier problema de programación). 2. A continuación, determinar el tamaño del problema completo que hay que resolver. Este tamaño determinará los valores de los parámetros en la llamada inicial a la función.

3. Resolver el caso base en el que el problema puede expresarse no recursivamente. Por último, resolver el caso general correctamente en términos de un caso más pequeño del mismo problema, una llamada recursiva. Programación

UD6: Programación estructurada - Recursividad

3.- Resolver un problema recursivo Factorial de un número El factorial de un entero no negativo n, esta definido como: n! = n * (n-1) * (n-2) * … *2 *1 Donde 1! es igual a 1 y 0! se define como 1. El factorial de un entero k puede calcularse de manera iterativa como sigue

```java
fact  = 1;
```

for (int i = k; i>=1; i--)

```java
fact *= i;
```

Programación

UD6: Programación estructurada - Recursividad

3.- Resolver un problema recursivo Factorial de un número Ahora de manera recursiva se puede definir el factorial como: Donde el caso base es: 1 Si n = 0. El caso general es: n * (n-1)! Si n > 0. Por ejemplo si se quiere calcular el factorial de 5, se tendría: 5! = 5*4*3*2*1 5! = 5*(4*3*2*1) 5! = 5*4!

Programación

UD6: Programación estructurada - Recursividad

3.- Resolver un problema recursivo Factorial de un número Programación

UD6: Programación estructurada - Recursividad

4.- Tipos de recursión Programación

UD6: Programación estructurada - Recursividad

4.- Tipos de recursión ✓ Recursividad simple ✓ Recursividad múltiple ✓ Recursividad anidada ✓ Recursividad cruzada o indirecta Programación

UD6: Programación estructurada - Recursividad

4.- Tipos de recursión Recursividad simple Aquella en cuya definición sólo aparece una llamada recursiva. Se puede transformar con facilidad en algoritmos iterativos. Ejemplo: Factorial //Si n = 0 entonces // 0! = 1 //si n > 0 entonces // n! = n * (n-1)! = n * (n-1) * (n-2) * ... * 3 * 2 * 1

```java
private static int factorial(int n){
if (n == 0){
return 1;
}
```

else{

```java
return n * factorial(n - 1);
}
}
```

Programación

UD6: Programación estructurada - Recursividad

4.- Tipos de recursión Recursividad múltiple Se da cuando hay más de una llamada a sí misma dentro del cuerpo de la función, resultando más difícil de hacer de forma iterativa. Ejemplo: Fibonacci

```java
private static int fibonacci(int n) {
```

```java
if (n <= 1){
```

```java
return n;
```

}

else{

```java
return fibonacci(n-1) + fibonacci(n-2);
```

} } Programación

UD6: Programación estructurada - Recursividad

4.- Tipos de recursión Recursividad anidada En algunos de los argumentos de la llamada recursiva hay una nueva llamada a sí misma. Ejemplo: Ackerman

```java
private long ackermann(long m, long n){
if (m == 0){
return (n + 1);
}else if (m > 0 && n == 0){
return ackermann(m - 1, 1);
```

}else{

```java
return ackermann(m - 1, ackermann(m, n - 1));
}
}
```

Programación

UD6: Programación estructurada - Recursividad

4.- Tipos de recursión Recursividad cruzada o indirecta Son algoritmos donde una función provoca una llamada a sí misma de forma indirecta, a través de otras funciones. Es decir es aquella en la que una función es llamada a otra función y esta a su vez llama a la función que la llamó.

> **💡 Apunt Tècnic**
> Ejemplo: Par / Impar

```java
private int par(int nump) {
```

if (nump == 0)

```java
return (1);
return( impar(nump-1) );
}
private int impar (int numi) {
```

if (numi == 0)

```java
return (0);
return( par(numi-1) );
}
```

Programación

UD6: Programación estructurada - Recursividad

5.- Recursión Vs Iteración Programación

UD6: Programación estructurada - Recursividad

5.- Recursión Vs Iteración Las principales cuestiones son la claridad y la eficiencia de la solución. En general: Una solución no recursiva es más eficiente en términos de tiempo y espacio de computadora. La solución recursiva puede requerir gastos considerables, y deben guardarse copias de variables locales y temporales.

Aunque el gasto de una llamada a una función recursiva no es peor, esta llamada original puede ocultar muchas capas de llamadas recursivas internas. El sistema puede no tener suficiente espacio para ejecutar una solución recursiva de algunos problemas. Programación

UD6: Programación estructurada - Recursividad

5.- Recursión Vs Iteración Una solución recursiva particular puede tener una ineficiencia inherente. Tal ineficiencia no es debida a la elección de la implementación del algoritmo; más bien, es un defecto del algoritmo en si mismo. Un problema inherente es que algunos valores son calculados una y otra vez causando que la capacidad de la computadora se exceda antes de obtener una respuesta.

La cuestión de la claridad en la solución es, no obstante, un factor importante. En algunos casos una solución recursiva es más simple y más natural de escribir. Programación

UD6: Programación estructurada - Recursividad

6.- Recursividad & Vectores Programación

UD6: Programación estructurada - Recursividad

6.- Recursividad & Vectores Esquemas recursivos de RECORRIDO En base a la definición de recorrido de un array a y la descomposición recursiva ascendente de a, el esquema recursivo de recorrido ascendente del array a desde una posición izq hasta una posición der, 0≤izq≤der<a.length, es el siguiente

/** 0<=inicio<=der+1 y fin=der */

```java
public static void recorrerAscendente(tipoBase[] a, int inicio, int fin) {
if (inicio>fin){
tratarVacio();
}
```

else {

```java
tratar(a[inicio]);
recorrerAscendente(a, inicio+1, fin);
}
}
```

Programación

UD6: Programación estructurada - Recursividad

6.- Recursividad & Vectores Esquemas recursivos de RECORRIDO donde tratarVacio() indica la operación a realizar para un (sub)array sin elementos y tratar(a[inicio]) indica la operación a realizar con el elemento que ocupa la posición inicio del array; siendo la primera llamada o llamada inicial recorrer(a, izq, der), esto es, inicialmente inicio = izq y fin = der.

Nótese que si se trata de un recorrido de todos los elementos del array a, en la llamada inicial inicio = 0 y fin = a.length-1, es decir, la talla iniciales t = a.length. En este caso, es habitual deﬁnir un método público homónimo, denominado guía o lanzadera, que realiza la llamada inicial, con el ﬁn de ocultar la estructura recursiva del array a que muestran los parámetros inicio y fin de la cabecera del método recursivo recorrer anterior que ahora se deﬁne privado.

```java
public static void recorrerAscendente(tipoBase[] a) {
```

```java
recorrerAscendente(a, 0, a.length-1);
```

} Programación

UD6: Programación estructurada - Recursividad

6.- Recursividad & Vectores Esquemas recursivos de RECORRIDO El esquema recursivo de recorrido descendente es el siguiente: /* inicio=izq y izq-1<=fin<a.length */

```java
public static void recorrer(tipoBase[] a, int inicio, int fin) {
if (fin<inicio){
tratarVacio();
}
```

else {

```java
tratar(a[fin]);
recorrer(a, inicio, fin-1);
}
}
```

donde tratarVacio() indica la operación a realizar para un (sub)array sin elementos y tratar(a[fin]) indica la operación a realizar con el elemento que ocupa la posición fin del array; siendo la llamada inicial recorrer(a,izq,der), esto es, inicialmente inicio = izq y fin = der.

Nótese que, al igual que en el recorrido ascendente, si se trata de un recorrido de todos los elementos del array a, en la llamada inicial inicio = 0 y fin = a.length-1, es decir, la talla inicial es t = a.length; pudiéndose deﬁnir también, en este caso, un método guía idéntico al del esquema ascendente.

Programación

UD6: Programación estructurada - Recursividad

6.- Recursividad & Vectores Esquemas recursivos de BÚSQUEDA /* 0<=inicio<=der+1 y fin=der*/

```java
public static int buscar(tipoBase[] a, int inicio, int fin) {
int resMetodo = -1;
if (inicio<=fin) {  //No hacer nada  }
```

else{

```java
if (propiedad(a[inicio])){
```

```java
resMetodo = inicio;
```

}

else{

```java
resMetodo = buscar(a, inicio+1, fin);
```

} }

```java
return resMetodo;
}
```

Programación

UD6: Programación estructurada - Recursividad

Bibliografía Programación

UD6: Programación estructurada - Recursividad

Bibliografía Programación

UD6: Programación estructurada - Recursividad ✓ Aprende JAVA con ejercicios. Edición 2018. Luis José Sánchez. ✓ Empezar a programar usando Java. 2ª edición. Universitat Politècnica de València ✓ https://github.com/statickidz/TemarioDAW ✓ https://es.stackoverflow.com Recursividad https://es.wikipedia.org/wiki/Recursión Función de Ackerman https://es.wikipedia.org/wiki/Función_de_Ackermann

---
