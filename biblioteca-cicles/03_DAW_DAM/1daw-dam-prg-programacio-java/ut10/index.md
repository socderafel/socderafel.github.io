---
layout: default
title: "UT10 — Estructuras de datos dinámicas — Programació en Java (1r DAW / DAM) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT10 Completa"
prev_url: "../ut09/ut0906.html"
prev_label: "⬅️ 9.6 05b - Ejercicios - AyR"
next_url: "../ut10/ut1001.html"
next_label: "10.1 06a - Estructuras de datos dinámicas ➡️"
---

# 📘 UT10 — Estructuras de datos dinámicas (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**10.1 06a - Estructuras de datos dinámicas**](#ut1001) (o [obrir en pàgina individual ➡️](./ut1001.md) )
> - [**10.2 06b - Estructuras de datos dinamicas**](#ut1002) (o [obrir en pàgina individual ➡️](./ut1002.md) )
> - [**10.3 Código de aula**](#ut1003) (o [obrir en pàgina individual ➡️](./ut1003.md) )
> - [**10.4 06a - Ejercicios**](#ut1004) (o [obrir en pàgina individual ➡️](./ut1004.md) )
> - [**10.5 06b - Ejercicios**](#ut1005) (o [obrir en pàgina individual ➡️](./ut1005.md) )
> - [**10.6 Ejercicios de Repaso: Estructuras de datos dinám**](#ut1006) (o [obrir en pàgina individual ➡️](./ut1006.md) )
> - [**10.7 SolucionesEjerciciosRepaso**](#ut1007) (o [obrir en pàgina individual ➡️](./ut1007.md) )
> - [**10.8 EjercicioVuelosPythonJava**](#ut1008) (o [obrir en pàgina individual ➡️](./ut1008.md) )
> - [**10.9 06b - Recursividad**](#ut1009) (o [obrir en pàgina individual ➡️](./ut1009.md) )
> - [**10.10 06b - Ejercicios básicos de recursividad**](#ut1010) (o [obrir en pàgina individual ➡️](./ut1010.md) )
> - [**10.11 06b - Ejercicios Recursividad**](#ut1011) (o [obrir en pàgina individual ➡️](./ut1011.md) )

---

## 10.1 06a - Estructuras de datos dinámicas

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

## 10.2 06b - Estructuras de datos dinamicas

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

## 10.3 Código de aula

### 📄 TestPila02.java

```java
import java.util.Stack;

public class TestPila02 {

	public static void main(String[] args) {

		// Definir una Pila
		Stack<Integer> pila1 = new Stack<Integer>();
		Stack<Integer> pila2 = new Stack<Integer>();

		// Rellenar Pila con dates
		for (int i = 1; i <= 10; i++) {
			pila1.push(i);
		}

		// Mostrar cima Pila e apilar en Pila 2
		while (!pila1.empty()) {
			int elemento = pila1.pop();
			pila2.push(elemento);
		}

		System.out.println("Pila 1 size: " + pila1.size());
		
		// Restructura la pila 1
		while (!pila2.empty()) {
			int elemento = pila2.pop();
			pila1.push(elemento);
			System.out.println(elemento);
		}
		
		System.out.println("Pila 1 size: " + pila1.size());

	}

}
```

### 📄 TestPila01.java

```java
import java.util.Stack;

public class TestPila01 {

	public static void main(String[] args) {
		
		// Definir una Pila
		Stack<String> pila = new Stack<String>();

		// Apilar elementos en la pila
		pila.push("manzana");
		pila.push("pera");
		pila.push("kiwi");
		pila.push("persimon");
		pila.push("naranja");
		
		// Consultar Pila
		String s = pila.peek();
		System.out.println(s);
		int tamanyo = pila.size();
		System.out.println(tamanyo);

		// Desapilar elementos de la pila
		pila.pop();
		
		// Consultar Pila
		System.out.println(pila.peek());
		
		// Consultar tamaño de la Pila
		System.out.println(pila.size());
		
		System.out.println("MOSTRAR ELEMENTOS");
		while(!pila.empty()) {
			System.out.println(pila.peek());
			//pila.pop();
		}
		System.out.println();
		
		// Consultar tamaño de la Pila
		System.out.println(pila.size());
		
	}

}
```

### 📄 TestCola01.java

```java
import java.util.LinkedList;
import java.util.Queue;

public class TestCola01 {

	public static void main(String[] args) {

		// Definir una cola de Integer
		Queue<Integer> cola = new LinkedList<Integer>();

		// Añadir elementos a la cola (Encolar)
		cola.add(0);

		for (int i = 1; i <= 10; i++)
			cola.add(i);

		// Consultar la cola
		int elemento = cola.peek();
		System.out.println(elemento);

		// Eliminar elemento de la cola (Desencolar)
		cola.remove();

		// Consultar la cola
		elemento = cola.peek();
		System.out.println(elemento);
		
		// Mostrar elementos de la cola
		while (!cola.isEmpty()) {
			int cabeza = cola.remove();
			System.out.println(cabeza);
		}
		
		// Ver tamaño de la cola
		System.out.println("Tamaño cola: " + cola.size());
	}
}
```

### 📄 TestHashSet01.java

```java
import java.util.HashSet;
import java.util.Set;

public class TestHashSet01 {
	public static void main(String[] args) {
		// Crear un HashSet
		Set<Integer> numeros = new HashSet<Integer>();
		
		// Añadir elementos al conjunto "numeros"
		numeros.add(1);
		numeros.add(2);
		numeros.add(3);
		numeros.add(1);
		System.out.println(numeros);
		
		// Comprobar si contiene ciertos elementos en el conjunto
		System.out.println(numeros.contains(3));
		System.out.println(numeros.contains(4));

		if(numeros.contains(1))
			System.out.println("Está");
		else
			System.out.println("No está");
		
		// Eliminar elementos del conjunto
		System.out.println(numeros.remove(4));
		System.out.println(numeros);
	}
}
```

### 📄 TestHashMap01.java

```java
import java.util.HashMap;
import java.util.Map;

public class TestHashMap01 {
	public static void main(String[] args) {
		// Crear un diccionario HashMap con la clave de tipo String y el valor de tipo Integer
		Map<String,Integer> puntosCarnet = new HashMap<String,Integer>();
		
		// Añadir elementos al HashMap
		puntosCarnet.put("12345678Z", 15);
		puntosCarnet.put("23784236H", 10);
		puntosCarnet.put("44773837L", 5);
		
		System.out.println(puntosCarnet);
		
		// Mostrar las claves y los correspondientes valores del HashMap
		for (String dni : puntosCarnet.keySet()) {
			System.out.println(dni + "->" +puntosCarnet.get(dni));
		}
	}
}
```

### 📄 TestArrayList01.java

```java
import java.util.ArrayList;
import java.util.List;

public class TestArrayList01 {
	public static void main(String[] args) {
		// Crear una lista dinámica de números enteros
		List<Integer> listaDeNumeros = new ArrayList<Integer>();
		
		// Añadir elementos a la lista
		listaDeNumeros.add(8);
		listaDeNumeros.add(15);
		listaDeNumeros.add(29);
		
		// Mostrar los elementos de la lista
		for (Integer num : listaDeNumeros)
			System.out.print(num + " ");
		
		// Obtener el tamaño de la lista
		System.out.println(" -> Tamaño lista: " + listaDeNumeros.size());
		
		// Obtener el primer elemento de la lista
		int primero = listaDeNumeros.get(0);
		System.out.println("Primer elemento -> " + primero);
		
		// Obtener el último elemento de la lista
		int ultimo = listaDeNumeros.get(listaDeNumeros.size()-1);
		System.out.println("Último elemento -> " + ultimo);

		// Sumar los elementos de la lista
		int suma = 0;
		for(int i = 0; i < listaDeNumeros.size(); i++) {
			suma += listaDeNumeros.get(i);
		}
		System.out.println("Suma -> " + suma);

		// Sumar los elementos de la lista con bucle foreach
		suma = 0;
		for (Integer num : listaDeNumeros)
			suma += num;
		System.out.println("Suma (foreach) -> " + suma);

		// Añadir más elemento a la lista
		listaDeNumeros.add(10);
		listaDeNumeros.add(20);
		
		// Mostrar los elementos de la lista
		for (Integer num : listaDeNumeros)
			System.out.print(num + " ");

		// Ahora el tamaño de la lista ha cambiado
		System.out.println(" -> Tamaño lista: " + listaDeNumeros.size());

		// Eliminar el primer elemento de la lista
		System.out.println("Eliminando el primer elemento de la lista...");
		listaDeNumeros.remove(0);
		
		// Eliminar el último elemento de la lista
		System.out.println("Eliminando el último elemento de la lista...");
		listaDeNumeros.remove(listaDeNumeros.size()-1);

		// Mostrar los elementos de la lista
		for (Integer num : listaDeNumeros)
			System.out.print(num + " ");

		// Ahora el tamaño de la lista ha cambiado
		System.out.println(" -> Tamaño lista: " + listaDeNumeros.size());
		
		// Comprobar si un elemento está en la lista
		boolean esta = listaDeNumeros.contains(20);
		System.out.println("Comprobar si esta el número 20 en la lista -> " + esta);
	
		// Comprobar si la lista contiene elementos
		boolean esVacia = listaDeNumeros.isEmpty();
		System.out.println("Comprobar si la lista está vacia -> " + esVacia);
		
		// Borrar los elementos de la lista
		System.out.println("Borrar los elementos de la lista...");
		listaDeNumeros.clear();
		
		// Ahora el tamaño de la lista ha cambiado
		System.out.println("Tamaño lista: " + listaDeNumeros.size());
	}
}
```

---

## 10.4 06a - Ejercicios

V2.04.12.23

Ejercicios LISTAS Ejercicio 1. Practicando listas dinámicas Escribe un programa que pida al usuario números enteros positivos hasta introducir un número negativo. Los valores introducidos, menos el negativo, los irá guardando en una lista dinámica. A continuación, se indican los diferentes apartados de funcionalidades que irás añadiendo a este programa

- Muestra la lista por defecto.
- Inserta el 101 en la primera posición.
- Comprueba que el 101 y el -1 estén en la lista. Si está muestra “X: Encontrado” o en caso

contrario “X: No encontrado”.

- Obtén la media aritmética de los valores introducidos.
- Lee el elemento que está en la posición X, siendo X un valor introducido por el usuario.

Comprueba que esté dentro del rango de índices de la lista.

- Actualiza el valor que está en la última posición incrementándolo en 1.
- Elimina el elemento que está en la primera posición.
- Ordena de forma ascendente la lista.
- Ordena de forma descendente la lista.
- Desordena aleatoriamente los elementos de la lista.
- Crea otra lista dinámica (ArrayList). Añade tantos números enteros como tenga la lista

anterior, pero estos deben ser generados aleatoriamente entre 5 y 100. Compara esta nueva lista con la anterior e indica si son o no iguales.

- Ahora que tienes dos listas únelas en una tercera lista.

V2.04.12.23 Ejercicio 2. Practicando de estructura Pila Escribe un programa que pida al usuario números enteros y los vaya apilando en el tipo de lista más adecuada. Estas las siguientes tareas a hacer

- Obtener la cima de la pila.
- Eliminar la cima de la pila.
- Imprimir el contenido de la pila. Mostrarlo al usuario en formato vertical como se vería en

una pila lógica, es decir, el elemento de más abajo es el primero en entrar y el de arriba el último.

- Eliminar todos los elementos de la pila, de golpe.
- Comprobar que la pila está vacía.

> **✍️ Ejercicio 3. Practicando de estructura Cola Escribe un programa q**
> Ejercicio 3. Practicando de estructura Cola Escribe un programa que pida al usuario números enteros y los vaya encolando en el tipo de lista más adecuada. Estas las siguientes tareas a hacer

- Obtener la cabeza de la cola.
- Eliminar la cabeza de la cola.
- Imprimir el contenido original de la cola.
- Eliminar todos los elementos de la cola, de golpe.
- Comprobar que la cola está vacía.

> **✍️ Ejercicio 4. Practicando de estructura Conjunto Escribe un progra**
> Ejercicio 4. Practicando de estructura Conjunto Escribe un programa que pida al usuario que agregue dorsales (números) de jugadores a un equipo de fútbol y estos no pueden estar repetidos. Estas las siguientes tareas a hacer

- Comprobar si el dorsal 10 existe en el equipo.
- Muestra todos los dorsales del equipo.
- Elimina el dorsal 13 del equipo.
- Elimina todos los dorsales del equipo.
- Comprueba que no hay dorsales en el equipo.

V2.04.12.23 Ejercicio 5. Gestión de colas procesos Escribe un programa para que la CPU atienda procesos. Para ello la CPU necesita una lista de PID (process ID) que serán números enteros. El programa empezará pidiendo al usuario que introduzca PIDs, hasta que se introduzca un valor negativo. Los PID se almacenarán en una Cola de números enteros.

Ahora, el programa mostrará un menú con las siguientes opciones

- Atender proceso.
- Eliminar proceso.

### 3. Mostrar procesos restantes

- Mostrar total de procesos atendidos.
- Atender a todos los procesos.

### 6. Salir

Las opciones harán los siguiente

- Atender proceso: mostrará el proceso a atender y se eliminará de la cola. Se indicará que el

proceso con el PID X ha sido atendido.

- Eliminar proceso: se eliminar un proceso sin ser atendido por la CPU.
- Mostrar procesos restantes: muestra la lista de PIDs que quedan por atender en formato

vertical.

- Mostrar total de procesos atendidos: muestra el total de procesos atendidos. Puede que no

todos hayan sido atendidos por la CPU.

- Atender a todos los procesos: la CPU atiende de golpe a todos los procesos y por tanto la cola

de procesos se vacía. Para cada una de las opciones escribir una función estática que la solucione.

V2.04.12.23 Ejercicio 6. Implementar un filtro de fechas Escribe un programa que pida fechas en formato DD/MM/AAAA hasta que introduzcas la palabra “fin”. Luego, el programa deberá mostrar cuantos de los días introducidos son únicos. Por ejemplo, si tenemos las siguientes fechas

• 01/01/2023 • 02/01/2023 • 01/01/2023 • 03/01/2013 En total hay tres fechas únicas (ignora la que está repetida). Por cada fecha introducida por el usuario debes comprobar si es válida (formato DD/MM/AAAA, rango de valores, etc). Deberás almacenar las fechas introducidas en un array de cadenas (ArrayList). Luego, por cada fecha (String) deberás tomar el día, mes y año por separado (subcadenas), con el objetivo de convertir cada fecha (String) en un objeto Calendar. Una vez ya tienes creado el objeto Calendar de una fecha, añadirlo a una lista de calendarios. Esta lista será una colección de tipo HashSet que almacenará objetos de tipo Calendar. Y así hasta que no queden fechas en el array de cadenas.

Cuando ya hayas insertado todas las fechas correctamente en el HashSet, el programa mostrará un número que será el de fechas únicas. Lo puedes obtener a partir del tamaño del HashSet que contiene estas fechas (ya que en un HashSet no puede haber elementos duplicados).

Por tanto, en este programa deberás usar la clase String, Calendar, ArrayList y HashSet.

V2.04.12.23 Ejercicio 7. Implementa el control de acceso al área restringida de un programa. Lo primero que pedirá el programa será usuario/contraseña. En caso de que sea el usuario administrador el sistema mostrará el mensaje “Ha accedido al área restringida como administrador” y mostrará el siguiente menú

### 1. Registrar nuevo usuario

### 2. Listar usuarios del sistema

### 3. Eliminar usuario del sistema

### 4. Actualizar contraseña de usuario

### 5. Salir

En caso de que sea un usuario no administrador el sistema le mostrará “Ha accedido al área restrigida” y terminará el programa. En cualquier caso, el usuario tendrá un máximo de 3 oportunidades. Si se agotan las oportunidades el programa dirá “Lo siento, no tiene acceso al área restringida”.

El usuario (admin) y contraseña (1234) del administrador se debe de introducir en el código fuente del programa. Cada una de las opciones del menú del administrador: • Registrar nuevo usuario: pedirá usuario y contraseña nuevos. En caso de que ya exista el usuario el sistema debe advertirlo. La contraseña debe ser numérica y no puede tener más de 4 caracteres.

• Listar usuarios: muestra los usuarios que hay en el sistema, pero no sus contraseñas. Por ejemplo, en caso de tener los usuario usu1, usu2 y usu3, el formato de salida será: (usu1:usu2:usu3) • Eliminar usuario: el sistema pedirá el nombre del usuario y deberá confirmar si se ha podido eliminar del sistema.

• Actualizar usuario: el sistema pedirá el nombre de un usuario del sistema y contraseña. En caso de no existir el usuario lo advertirá.

---

## 10.5 06b - Ejercicios

22/01/24 -> Hacer ejercicios de pilas y colas de acepta el reto

Programación

- Ejercicios

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS E s t r u c t u ra s d e d a t o s d i n á m i c a s Programación

Ejercicio 1 Programación

Ejecuta e interpreta los resultados del siguiente código fuente

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

Ejercicio 2 Realiza una prueba de inserción (puedes basarte en el ejercicio 1) con las tres implementaciones de la interfaz Map: HashMap TreeMap LinkedHashMap Analiza e interpreta los resultados. Programación

Ejercicio 3 Crea un ArrayList con los nombres de compañeros de clase. A continuación, muestra esos nombres por pantalla. Utiliza para ello un bucle for que recorra todo el ArrayList sin usar ningún índice. Programación

Ejercicio 4

- Realiza un programa que introduzca valores aleatorios (entre 0 y 100) en

un ArrayList y que luego calcule la suma, la media, el máximo y el mínimo de esos números. El tamaño de la lista también será aleatorio y podrá oscilar entre 10 y 20 elementos ambos inclusive. Programación

Ejercicio 5

- Escribe un programa que ordene 10 números enteros introducidos por

teclado y almacenados en un objeto de la clase ArrayList.

- Realiza un programa equivalente al anterior pero en esta ocasión, el

programa debe ordenar palabras en lugar de números. Programación

Ejercicio 6 Implementa el control de acceso al área restringida de un programa. Se debe pedir un nombre de usuario y una contraseña. Si el usuario introduce los datos correctamente, el programa dirá “Ha accedido al área restringida”. El usuario tendrá un máximo de oportunidades.

Si se agotan las oportunidades el programa dirá “Lo siento, no tiene acceso al área restringida”. Los nombres de usuario con sus correspondientes contraseñas deben estar almacenados en una estructura de la clase HashMap. Programación

Ejercicio 7 - ArrayList Doblando calcentines #624 de aceptaelreto.com Programación

Ejercicio 8 – Set Potitos #185 de aceptaelreto.com ¿Podemos empezar? #521 de aceptaelreto.com Haciendo inventario #578 de aceptaelreto.com Programación

Ejercicio 9 – Map Va de modas... #152 de aceptaelreto.com Abdicación de un rey #214 de aceptaelreto.com Intercambiando cromos #546 de aceptaelreto.com Foto con Mafalda #580 de aceptaelreto.com Programación

Ejercicio 10 – Stack / Queue Paréntesis balanceados #141 de aceptaelreto.com Mensaje interceptado #197 de aceptaelreto.com Programación

---

## 10.6 Ejercicios de Repaso: Estructuras de datos dinám

**Ejercicio 1**

Crea un ArrayList con los nombres de 6 compañeros de clase.
A continuación, muestra esos nombres por pantalla. Utiliza para ello un bucle
for que recorra todo el ArrayList sin usar ningún índice.

**Ejercicio 2**

Realiza un programa que introduzca valores aleatorios (entre
0 y 100) en un ArrayList y que luego calcule la suma, la media, el máximo y el
mínimo de esos números. El tamaño de la lista también será aleatorio y podrá
oscilar entre 10 y 20 elementos ambos inclusive.

**Ejercicio 3**

Escribe un programa que ordene 10 números enteros
introducidos por teclado y almacenados en un objeto de la clase ArrayList.

**Ejercicio 4**

Realiza un programa equivalente al anterior pero en esta
ocasión, el programa debe ordenar palabras en lugar de números.

**Ejercicio 5**

Implementa el control de acceso al área restringida de un
programa. Se debe pedir un nombre de usuario y una contraseña. Si el usuario
introduce los datos correctamente, el programa dirá “Ha accedido al área
restringida”. El usuario tendrá un máximo de 3 oportunidades. Si se agotan las
oportunidades el programa dirá “Lo siento, no tiene acceso al área
restringida”. Los nombres de usuario con sus correspondientes contraseñas deben
estar almacenados en una estructura de la clase HashMap.

**Ejercicio 6**

La máquina Eurocoin genera una moneda de curso legal cada
vez que se pulsa un botón siguiendo la siguiente pauta: o bien coincide el
valor con la moneda anteriormente generada - 1 céntimo, 2 céntimos, 5 céntimos,
10 céntimos, 25 céntimos, 50 céntimos, 1 euro o 2 euros - o bien coincide la
posición – cara o cruz. Simula, mediante un programa, la generación de 6
monedas aleatorias siguiendo la pauta correcta. La secuencia se debe ir almacenando en una
lista.

Ejemplo

2 céntimos – cara

2 céntimos – cruz

50 céntimos – cruz

1 euro – cruz

1 euro – cara

10 céntimos – cara

**Ejercicio 7**

Crea un mini-diccionario español-inglés que contenga, al
menos, 20 palabras (con su correspondiente traducción). Utiliza un objeto de la
clase HashMap para almacenar las parejas de palabras. El programa pedirá una
palabra en español y dará la correspondiente traducción en inglés.

**Ejercicio 8**

Realiza un programa que escoja al azar 5 palabras en español
del mini-diccionario del ejercicio anterior. El programa irá pidiendo que el
usuario teclee la traducción al inglés de cada una de las palabras y comprobará
si son correctas. Al final, el programa deberá mostrar cuántas respuestas son
válidas y cuántas erróneas.

**Ejercicio 9**

Un supermercado de productos ecológicos nos ha pedido hacer
un programa para vender su mercancía. En esta primera versión del programa se
tendrán en cuenta los productos que se indican en la tabla junto con su precio.
Los productos se venden en bote, brick, etc. Cuando se realiza la compra, hay
que indicar el producto y el número de unidades que se compran, por ejemplo “guisantes”
si se quiere comprar un bote de guisantes y la cantidad, por ejemplo “3” si se
quieren comprar 3 botes. La compra se termina con la palabra “fin. Suponemos
que el usuario no va a intentar comprar un producto que no existe. Utiliza un
diccionario para almacenar los nombres y precios de los productos y una o
varias listas para almacenar la compra que realiza el usuario.

A continuación se muestra una tabla con los productos
disponibles y sus respectivos precios

| avena | garbanzos | tomate | jengibre | quinoa | guisantes |
| --- | --- | --- | --- | --- | --- |
| 2,21 | 2,39 | 1,59 | 3,13 | 4,50 | 1,60 |

Ejemplo

Producto: tomate

Cantidad: 1

Producto: quinoa

Cantidad: 2

Producto: avena

Cantidad: 1

Producto: tomate

Cantidad: 2

Producto: fin

Producto Precio Cantidad Subtotal

Tomate 1,59 1 1,59

quinoa 4,50 2 9,00

avena 2,21 1 2,21

tomate 1,59 2 3,18

TOTAL: 15,98

**Ejercicio 10**

A Dora la exploradora le encanta aventurarse por cualquier rincón del mundo llevando siempre su archiconocida mochila. Entre otras cosas, a Dora le encanta recoger cualquier objeto curioso de cualquier país exótico. Sin embargo, a Dora no le gusta tener dos objetos iguales. No importa si se acuerda o no de tener dicho objeto en la mochila, ya que al introducirlo, la mochila no le deja.

Escribe un programa que pida introducir objetos en la mochila de dora (hasta que escribas "cerrar") y luego muestre los objetos que hay en la mochila.

Ejemplo de ejecución

```java
Introduce objetos:Bigote de dragónBolígrafo 3DAnillo de invisibilidadBola antigravedadBola antigravedadBolígrafo 3DCapa de teletransporte
```

```java
Contenido de la mochila:Bigote de dragónBolígrafo 3DAnillo de invisibilidadBola antigravedadCapa de teletransporte
```

**Ejercicio 11**

Escribe otro programa para Dora en el que pida el listado de objetos, pero esta vez indique por cada objeto la cantidad se ha encontrado.

```java
Introduce objetos:Bigote de dragónBolígrafo 3DAnillo de invisibilidadBola antigravedadBola antigravedadBolígrafo 3DCapa de teletransporte
```

```java
Contenido de la mochila:Bigote de dragón (1)Bolígrafo 3D (2)Anillo de invisibilidad (1)Bola antigravedad (2)Capa de teletransporte (1)
```

---

## 10.7 SolucionesEjerciciosRepaso

#### 📦 Ejercicio1.java

```java
package ud06EjerciciosRepaso;

import java.util.ArrayList;

public class Ejercicio1 {

    public static void main(String[] args) {

        ArrayList<String> companeros = new ArrayList<>();

        companeros.add("Companero1");

        companeros.add("Companero2");

        companeros.add("Companero3");

        companeros.add("Companero4");

        companeros.add("Companero5");

        companeros.add("Companero6");

        for (String nombre : companeros) {

            System.out.println(nombre);

        }

    }

}
```

---

#### 📦 Ejercicio2.java

```java
package ud06EjerciciosRepaso;

import java.util.ArrayList;

import java.util.Random;

public class Ejercicio2 {

    public static void main(String[] args) {

        ArrayList<Integer> numeros = new ArrayList<>();

        Random rand = new Random();

        int tamano = rand.nextInt(11) + 10; // Tamaño aleatorio entre 10 y 20

        for (int i = 0; i < tamano; i++) {

            numeros.add(rand.nextInt(101)); // Números aleatorios entre 0 y 100

        }

        int suma = 0;

        int maximo = Integer.MIN_VALUE;

        int minimo = Integer.MAX_VALUE;

        for (int num : numeros) {

            suma += num;

            maximo = Math.max(maximo, num);

            minimo = Math.min(minimo, num);

        }

        double media = (double) suma / tamano;

        System.out.println("Suma: " + suma);

        System.out.println("Media: " + media);

        System.out.println("Máximo: " + maximo);

        System.out.println("Mínimo: " + minimo);

    }

}
```

---

#### 📦 Ejercicio3.java

```java
package ud06EjerciciosRepaso;

import java.util.ArrayList;

import java.util.Collections;

import java.util.Scanner;

public class Ejercicio3 {

    public static void main(String[] args) {

        ArrayList<Integer> numeros = new ArrayList<>();

        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduce 10 números enteros:");

        for (int i = 0; i < 10; i++) {

            numeros.add(scanner.nextInt());

        }

        Collections.sort(numeros);

        System.out.println("Números ordenados:");

        for (int num : numeros) {

            System.out.print(num + " ");

        }

    }

}
```

---

#### 📦 Ejercicio4.java

```java
package ud06EjerciciosRepaso;

import java.util.ArrayList;

import java.util.Collections;

import java.util.Scanner;

public class Ejercicio4 {

    public static void main(String[] args) {

        ArrayList<String> palabras = new ArrayList<>();

        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduce 10 palabras:");

        for (int i = 0; i < 10; i++) {

            palabras.add(scanner.next());

        }

        Collections.sort(palabras);

        System.out.println("Palabras ordenadas:");

        for (String palabra : palabras) {

            System.out.print(palabra + " ");

        }

    }

}
```

---

#### 📦 Ejercicio5.java

```java
package ud06EjerciciosRepaso;

import java.util.HashMap;

import java.util.Scanner;

public class Ejercicio5 {

    public static void main(String[] args) {

        HashMap<String, String> credenciales = new HashMap<>();

        credenciales.put("anakin", "1234");

        credenciales.put("obijuan", "1234");

        credenciales.put("yoda", "1234");

        Scanner scanner = new Scanner(System.in);

        int intentosMaximos = 3;

        while (intentosMaximos > 0) {

            System.out.println("Ingrese nombre de usuario:");

            String usuario = scanner.next();

            System.out.println("Ingrese contraseña:");

            String contrasena = scanner.next();

            if (credenciales.containsKey(usuario) && credenciales.get(usuario).equals(contrasena)) {

                System.out.println("Ha accedido al área restringida.");

                break;

            } else {

                System.out.println("Datos incorrectos. Intentos restantes: " + (--intentosMaximos));

            }

        }

        if (intentosMaximos == 0) {

            System.out.println("Lo siento, no tiene acceso al área restringida.");

        }

    }

}
```

---

#### 📦 Ejercicio6.java

```java
package ud06EjerciciosRepaso;

import java.util.ArrayList;

import java.util.Arrays;

import java.util.List;

import java.util.Random;

public class Ejercicio6 {

	public static void main(String[] args) {

		List<String> valores = Arrays.asList("1 céntimo", "2 céntimos", "5 céntimos", "10 céntimos",

				"25 céntimos", "50 céntimos", "1 euro", "2 euros");

		List<String> posiciones = Arrays.asList("cara", "cruz");

		Random r = new Random();

		

		String ultimoValor = valores.get(r.nextInt(8));

		String ultimaPosicion = posiciones.get(r.nextInt(2));

		

		System.out.println(ultimoValor + " - " + ultimaPosicion);

		

		String posicion = "";

		String valor = "";

		for (int i = 1; i < 10; i++) {

			do {

				valor = valores.get(r.nextInt(8));

				posicion = posiciones.get(r.nextInt(2));

			}while (!((valor.equals(ultimoValor))) && !((posicion.equals(ultimaPosicion))));

			

			System.out.println(valor + " - " + posicion);

			ultimaPosicion = posicion;

			ultimoValor = valor;

		}

	}

}
```

---

#### 📦 Ejercicio7.java

```java
package ud06EjerciciosRepaso;

import java.util.HashMap;

import java.util.Map;

import java.util.Scanner;

public class Ejercicio7 {

    public static void main(String[] args) {

        Map<String, String> miniDiccionario = new HashMap<>();

        miniDiccionario.put("casa", "house");

        miniDiccionario.put("perro", "dog");

        miniDiccionario.put("gato", "cat");

        miniDiccionario.put("sol", "sun");

        miniDiccionario.put("libro", "book");

        miniDiccionario.put("agua", "water");

        // Añadir más palabras según sea necesario

        Scanner scanner = new Scanner(System.in);

        while (true) {

            System.out.print("Introduce una palabra en español (o 'salir' para terminar): ");

            String palabra = scanner.nextLine().toLowerCase();

            if (palabra.equals("salir")) {

                break;

            }

            if (miniDiccionario.containsKey(palabra)) {

                System.out.println("Traducción al inglés: " + miniDiccionario.get(palabra));

            } else {

                System.out.println("Palabra no encontrada en el diccionario.");

            }

        }

    }

}
```

---

#### 📦 Ejercicio8.java

```java
package ud06EjerciciosRepaso;

import java.util.HashMap;

import java.util.Map;

import java.util.Random;

import java.util.Scanner;

public class Ejercicio8 {

    public static void main(String[] args) {

        Map<String, String> miniDiccionario = new HashMap<>();

        miniDiccionario.put("casa", "house");

        miniDiccionario.put("perro", "dog");

        miniDiccionario.put("gato", "cat");

        miniDiccionario.put("sol", "sun");

        miniDiccionario.put("libro", "book");

        miniDiccionario.put("agua", "water");

        // Añadir más palabras según sea necesario

        Random rand = new Random();

        Object[] palabrasAleatorias = miniDiccionario.keySet().toArray();

        int respuestasCorrectas = 0;

        int respuestasIncorrectas = 0;

        for (int i = 0; i < 5; i++) {

            String palabraEspanol = (String) palabrasAleatorias[rand.nextInt(palabrasAleatorias.length)];

            String traduccionCorrecta = miniDiccionario.get(palabraEspanol);

            System.out.print("Traduce '" + palabraEspanol + "' al inglés: ");

            String respuestaUsuario = new Scanner(System.in).nextLine().toLowerCase();

            if (respuestaUsuario.equals(traduccionCorrecta)) {

                System.out.println("¡Correcto!");

                respuestasCorrectas++;

            } else {

                System.out.println("Incorrecto. La respuesta correcta es: " + traduccionCorrecta);

                respuestasIncorrectas++;

            }

        }

        System.out.println("\nResumen:");

        System.out.println("Respuestas correctas: " + respuestasCorrectas);

        System.out.println("Respuestas incorrectas: " + respuestasIncorrectas);

    }

}
```

---

#### 📦 Ejercicio9.java

```java
package ud06EjerciciosRepaso;

import java.util.ArrayList;

import java.util.HashMap;

import java.util.Scanner;

public class Ejercicio9 {

  public static void main(String[] args) {

    HashMap<String, Double> productos = new HashMap<String, Double>();

    productos.put("avena", 2.21);

    productos.put("garbanzos", 2.39);

    productos.put("tomate", 1.59);

    productos.put("jengibre", 3.13);

    productos.put("quinoa", 4.50);

    productos.put("guisantes", 1.60);

    

    Scanner s = new Scanner(System.in);

    String productoIntroducido = "";

    int cantidadIntroducida = 0;

    ArrayList<String> listaProductos = new ArrayList<>();

    ArrayList<Integer> listaCantidades = new ArrayList<>();

    

    do {

      System.out.print("Producto: ");

      productoIntroducido = s.nextLine();

      

      if (!productoIntroducido.equals("fin")) {

        System.out.print("Cantidad: ");

        cantidadIntroducida = Integer.parseInt(s.nextLine());

        listaProductos.add(productoIntroducido);

        listaCantidades.add(cantidadIntroducida);

      }

      

    } while (!productoIntroducido.equals("fin"));

    

    System.out.println("Producto Precio Cantidad Subtotal");

    System.out.println("---------------------------------");

    

    double total = 0;

    

    for (int i = 0; i < listaProductos.size(); i++) {

      String producto = listaProductos.get(i);

      double precio = productos.get(producto);

      int cantidad = listaCantidades.get(i);

      double subtotal = precio * cantidad;

      total += subtotal;

      System.out.printf("%-8s %7.2f %6d  %7.2f\n", producto, precio, cantidad, subtotal);

    }

    

    System.out.println("---------------------------------");

    System.out.printf("TOTAL: %.2f", total);

  }

}
```

---

## 10.8 EjercicioVuelosPythonJava

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Módulos, estructuras y tipos de datos Ejercicio obligatorio Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio CONTENIDO

- Introducción.....................................................................................................................................2
- Enunciado........................................................................................................................................2
- Ejemplos de uso...............................................................................................................................4

3.1. Imprimir todos los vuelos........................................................................................................4 3.2. Buscar un número de vuelo.....................................................................................................5 3.3. Buscar vuelo por clave.............................................................................................................6 3.4. Añadir vuelo nuevo..................................................................................................................7 3.5. Borrar vuelo por número..........................................................................................................7

Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio

En este documento puedes encontrar el ejercicio obligatorio de esta unidad. Es imprescindible entregarlo en tiempo y forma para superar esta parte del curso. Tendrás la oportunidad de realizar la entrega de varias versiones del ejercicio hasta que consigas superarlo y la profesora te indicará en cada corrección las mejoras necesarias.

En cualquier momento puedes lanzar preguntas al foro del curso o realizar una entrega parcial del ejercicio acompañada de una lista de dudas para que la profesora pueda orientarte en su resolución.

### 2. Enunciado

Vamos a crear un programa llamado ud2_ejercicio_obligatorio.py que gestione los datos de la lista de vuelos del Aeropuerto de Valencia. Cada vuelo dispondrá de la siguiente información: número de vuelo, origen, destino, día y clase e, inicialmente, ya se dispondrá de la información de los siguientes vuelos

número origen destino día clase Valencia Menorca 15-08 turista Valencia Tenerife 20-08 turista París Valencia 15-08 primera Atenas Valencia 20-08 primera El programa mostrará el siguiente menú

Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio Según la opción seleccionada, el programa reaccionará como se indica en la siguiente tabla: Opción Respuesta Se imprimen los datos de todos los vuelos de la lista. Si la lista estuviese vacía, habría que mostrar un mensaje al usuario.

Se pide al usuario el número de vuelo y se muestran sus datos. Si la lista estuviese vacía o el número de vuelo no existiese, habrá que mostrar un mensaje al usuario. Se pregunta al usuario el nombre de la clave por la que se quiere buscar. Si es una clave correcta, se muestra el valor asociado. Si no, se avisa del error.

Si la lista estuviese vacía, habría que mostrar un mensaje al usuario. Se piden los datos para el nuevo vuelo y se añade dicho vuelo a la lista. Se pide al usuario el número de vuelo. Si se encuentra el vuelo entonces se borra de la lista. Si la lista estuviese vacía o el número de vuelo no existiese, habrá que mostrar un mensaje al usuario.

El programa acaba. Después de realizar las tareas correspondientes a la opción seleccionada, se volverá a mostrar el menú al usuario. Aunque el programa podría mejorarse para realizar una mejor gestión de la lista de vuelos, no vamos a preocuparnos de detalles de la gestión de datos como, por ejemplo, que no existan vuelos repetidos, que no existan vuelos con todos los datos en blanco, que se escriba el día con el formato requerido, etc.

Puedes crear el programa desde cero o basarte en el esquema que tienes en el fichero ud2_ejercicio_obligatorio (ESQUEMA).py del aula virtual. En este caso, deberás sustituir las instrucciones pass por las instrucciones adecuadas para que funcione el programa según el enunciado.

Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio

### 3. Ejemplos de uso

En este apartado puedes ver algunos ejemplos de la ejecución del programa, para que te ayuden a entenderlo mejor.

#### 3.1. Imprimir todos los vuelos

Si existen vuelos en la lista, se muestran sus datos: Si no existen vuelos en la lista, se muestra mensaje de aviso

Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio

#### 3.2. Buscar un número de vuelo

Si existe el vuelo en la lista, se muestran sus datos: Si no existe el vuelo pero sí otros vuelos en la lista, se muestra error: Si no existen vuelos en la lista, se muestra aviso

Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio

#### 3.3. Buscar vuelo por clave

Si existen la clave y el valor introducidos por el usuario, se muestran sus datos: Si existe la clave pero no hay ningún vuelo con ese valor, se muestra un error: Si no existe la clave introducida, se muestra un error

Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio Si no existen vuelos en la lista, se muestra aviso

#### 3.4. Añadir vuelo nuevo

#### 3.5. Borrar vuelo por número

Se encuentra el número de vuelo indicado

Escuela de programación - Python Módulos, estructuras y tipos de datos: ejercicio obligatorio No se encuentra el número de vuelo indicado pero hay más vuelos en la lista: Si no existen vuelos en la lista, se muestra aviso

---

## 10.9 06b - Recursividad

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

## 10.10 06b - Ejercicios básicos de recursividad

Actualizado 15/01/24

### UNIDAD 6B: RECURSIVIDAD

V2.15.01.24

Ejercicios Ejercicio 1. Crea un método que obtenga la suma de los números naturales desde 1 hasta N. Se debe pasar como parámetro el número N. • Caso base: Si N = 1 → sumar(N) = 1 • Caso recursivo: Si N > 1 → sumar(N) = sumar(N-1) + N Ejercicio 2. Crea un método que imprima los dígitos desde 1 hasta N. Se debe pasar como parámetro el número N.

• Caso base: Si N = 1 → imprimir(N) = muestra 1 por pantalla • Caso recursivo: Si N > 1 → imprimir(N) = imprimir(N-1) y mostrar N Ejercicio 3. Crea un método que imprima los dígitos desde N hasta 1. Se debe pasar como parámetro el número N. • Caso base: n = 1 -> no hace nada • Caso recursivo: muestra(n) -> imprime(n-1) Ejercicio 4. Crea un método que obtenga la cantidad de dígitos de un número N. Se debe pasar como parámetro el número N.

• Caso base: Si 0 <= N <= 9 -> digitos(N) = 1… Si N tiene sólo 1 dígito • Caso recursivo: Si N > 9 → 1 + digitos(N/10)… Si N tiene más de 1 dígito Ejercicio 5. Crea un método que obtenga el factorial de un número N. Se debe pasar como parámetro el número N. • Caso base: Si N = 1 → factorial(N) = 1 • Caso recursivo: Si N > 1 → factorial(N) = N * factorial(N-1) Ejercicio 6. Crea un método que calcule el número de fibonacci a partir de un número pasado como parámetro.

• Caso base: Si N = 1 ó N = 0 → fibonacci(N) = N… También se expresa fibonacci(0) = 0 y fibonacci(1) = 1 • Caso recursivo: Si N > 1 → fibonacci(N) = fibonacci(N-2) + fibonacci(N-1)

V2.15.01.24 Ejercicio 7. Crear un método que obtenga el resultado de elevar un número a otro. Ambos números se deben pasar como parámetros. Ejercicio 8. Crea un método que dado un número, lo imprima invertido por pantalla. Ejercicio 9. Crea un método que compruebe si una palabra está ordenada alfabéticamente.

> **✍️ Ejercicio 10. Crea un método que compruebe si una palabra es un p**
> Ejercicio 10. Crea un método que compruebe si una palabra es un palíndromo. Ejercicio 11. Crea un método que obtenga el número binario de un número N pasado como parámetro binario. Ejercicio 12. Crea un método que compruebe si un número es binario. Un número binario está formado únicamente por ceros y unos.

> **✍️ Ejercicio 13. Crea un método que compruebe si un número está orde**
> Ejercicio 13. Crea un método que compruebe si un número está ordenado de forma decreciente y creciente. Ejercicio 14. Los números simétricos son iguales a partir del dígito central pero comparando en dirección opuesta.

---

## 10.11 06b - Ejercicios Recursividad

Programación

### UD 6b: Recursividad

Ejercicios - Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

EJERCICIOS Recursividad Programación

UD6: Programación estructurada - Recursividad

Ejercicio 1 Programación

UD6: Programación estructurada - Recursividad Mostrar la evolución de la pila de llamadas para el siguiente método, suponiendo que la llamada inicial es fact(5).

```java
public static int factorial(int n){
```

// Si n = 0 entonces // 0! = 1 // si n > 0 entonces // n! = n * (n-1)! = n * (n-1) * (n-2) * ... * 3 * 2 * 1

```java
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

Ejercicio 2 a.- Escribir un método de clase recursivo que muestre en pantalla los números naturales del 1 al n, donde n > 0 es el valor pasado como parámetro en la llamada inicial. b.- Escribir un método de clase recursivo que muestre en pantalla los números naturales del n al 1, donde n > 0 es el valor pasado como parámetro en la llamada inicial.

Programación

UD6: Programación estructurada - Recursividad

Ejercicio 3 Escribir qué se muestra por pantalla al ejecutar este programa

```java
public static void escribeRaro(int n) {
if (n>0) {
System.out.print(n);
escribeRaro(n-1);
System.out.print(n);
}
```

else {

```java
System.out.print(0);
}
}
public static void main(String[] args) {
escribeRaro(5);
}
```

Programación

UD6: Programación estructurada - Recursividad

Ejercicio 4 Escribir un método de clase recursivo que, dados 2 números naturales a ≥ 0 y b > 0, calcule el cociente de su división entera, basándose en el hecho de que dicha operación se puede realizar como una serie de restas sucesivas, siguiendo la recurrencia

a/b = 0, si a < b,

a/b = (a−b)/b + 1, si a ≥ b. Programación

UD6: Programación estructurada - Recursividad

Ejercicio 5 Dados dos números enteros a y b, siendo b ≥ 0, se puede deﬁnir recursivamente su producto a·b del modo siguiente

a·b = 0, si b = 0,

a·b = a·(b−1) + a, si b > 0. Nótese que, para esta definición, la multiplicación se reduce a una secuencia de sumas. Considerando que tan sólo es posible utilizar operaciones aditivas, escribir un método de clase recursivo para realizar la operación pedida, siguiendo la definición anterior.

Programación

UD6: Programación estructurada - Recursividad

Definición

Recursividad: -ver Recursividad. Acrónimos recursivos

GNU: GNU's Not Unix

PHP: PHP Hypertext Preprocessor

WINE: WINE Is Not an Emulator Programación

UD6: Programación estructurada - Recursividad

Ejercicio 6 Dados dos números enteros a y b, siendo b ≥ 0, otra forma de deﬁnir recursivamente su producto a·b es la siguiente

a·b = 0, si b = 0,

a·b = (a·2)·(b/2), si b > 0 y b es par, y

a·b = (a·2)·(b/2) + a, si b > 0 y b es impar. Este tipo de multiplicación se conoce como multiplicación a la rusa, siendo utilizada antiguamente por los comerciantes de dicho país, que no conocían la tabla de multiplicar, para efectuar el producto de dos números positivos cualesquiera utilizando solamente sumas, productos y divisiones por 2.

Considerando que tan sólo se pueden utilizar productos y divisiones por 2, así como sumas, escribir un método de clase recursivo para realizar la operación pedida, siguiendo la definición anterior. Programación

UD6: Programación estructurada - Recursividad

Ejercicio 7 Dados dos números enteros a ≥ 0 y b ≥ 0, se puede deﬁnir recursivamente la potencia ab del modo siguiente

ab = 1, si b = 0,

ab = a, si b = 1,

ab = (ab/2)·(ab/2), si b > 1 y b es par, y

ab = (ab/2)·(ab/2)·a, si b > 1 y b es impar. Considerando que tan sólo se pueden utilizar divisiones por 2 y productos, escribir un método de clase recursivo para realizar la operación pedida, siguiendo la definición anterior. Programación

UD6: Programación estructurada - Recursividad

Recordatorio… se puede usar en el siguiente ejercicio… o no //Convierte un Entero (int) en una Cadena (String)

```java
String cadena = Integer.toString(n);
```

//Convierte un Char (que tiene que ser un número) en un Entero (int)

```java
int a = Character.getNumericValue( cadena.charAt(0) );
```

//Convierte una Cadena (String) en un Entero (int)

```java
int b = Integer.parseInt( cadena );
```

//Devuelve una subcadena entre 1 y 4

```java
cadena = cadena.substring(1, 4);
```

Programación

UD6: Programación estructurada - Recursividad

Ejercicio 8

- Escribir un método de clase recursivo que devuelva la suma de los dígitos

de un número natural n ≥ 0 pasado como parámetro.

- Escribir un método de clase recursivo que devuelva el número de dígitos

de un número natural n ≥ 0 pasado como parámetro.

- Escribir un método de clase recursivo que devuelva en orden inverso los

dígitos que componen un número natural n ≥ 0 dado. Programación

UD6: Programación estructurada - Recursividad

Ejercicio 9 Escribir un método de clase recursivo que devuelva el valor binario de un número natural n ≥ 0 dado. Por ejemplo

si n=5 el método devuelve 101

si n=31 el método devuelve 11111 Programación

UD6: Programación estructurada - Recursividad 15310 = 100110012

Ejercicio 10 Escribir qué se muestra por pantalla al ejecutar este programa

```java
public static void main(String[] args) {
int[] v1 = {1, 2, 3, 4, 5};
System.out.println("Suma total: " + sumav(v1, 4, 2));
}
public static int sumav(int[] v, int i, int x) {
int suma = 0;
if (i<0) return suma;
if (v[i]==x) return suma;
for (int j=0; j<=i; j++) {
suma = suma + v[j];
}
System.out.println("Suma parcial: " + suma);
return suma + sumav(v, i-1, x);
}
```

Programación

UD6: Programación estructurada - Recursividad

Ejercicio 11 Indicar qué se muestra por pantalla al ejecutar este código

```java
public static void main(String[] args) {
int v2[] = {0, 11, 2, 13, 4, 5, 6, 17, 8};
f(v2, 0);
}
public static void f(int[] v, int i) {
if (i>=v.length) {
System.out.println("-------------");
}
```

else {

```java
if (i==v[i]) {
System.out.printf("v[%d]==%d\n", i, v[i]);
f(v,i+1);
}
```

else {

```java
f(v,i+1);
System.out.printf("v[%d]!=%d\n", i, i);
}
}
}
```

Programación

UD6: Programación estructurada - Recursividad

EJERCICIOS Recursividad & Vectores Programación

UD6: Programación estructurada - Recursividad

Ejercicio 12 Programación

UD6: Programación estructurada - Recursividad Dado un array de enteros v, escribir un método de clase recursivo que

- Imprima todos los elementos del vector de forma Ascendente.
- Imprima todos los elementos del vector de forma Descendente.
- Obtenga la suma de todos los elementos del array.
- Dado un entero x, cuente cuántas veces aparece en el array.
- Compruebe si el array está ordenado ascendentemente.
- Obtenga la posición en el vector de un valor pasado como parámetro.
- Dadas dos posiciones, izq y der, del array, 0≤izq≤der≤v.length-1, duplique

el valor de los elementos del array situados entre dichas posiciones.

- Obtenga el valor máximo (mínimo) del array.
- Obtenga la posición del máximo (mínimo) del array.
- Determine la posición del primer (último) elemento no nulo del array.

```java
if( !empty( stomach ) ){
```

```java
keepCoding();
```

}else{

```java
orderPizza();
```

} Programación

UD6: Programación estructurada - Recursividad

Ejercicio 12

- Determine cuántos ceros consecutivos hay al ﬁnal del array.
- Dadas dos posiciones, izq y der, del array, 0≤izq≤der≤v.length-1, invierta

todos los elementos del array situados entre dichas posiciones, esto es, al ﬁnalizar la ejecución del método el array contendrá en su posición izq el elemento que inicialmente ocupaba la posición der, en su posición izq+1 el elemento que inicialmente ocupaba la posición der-1 y así sucesivamente.

- Dado un entero b>0, determine si b es igual a la suma de todas las

componentes de v.

- Dado un entero x, determine la cantidad de elementos del array que son

menores que x.

- Determine la cantidad de elementos impares que ocupan posiciones pares

del array.

- Determine la posición, si existe, de la primera subsecuencia del array que

comprenda, al menos tres números enteros consecutivos en posiciones consecutivas del array. Programación

UD6: Programación estructurada - Recursividad

Ejercicio 13 Escribir un método de clase recursivo que, datos dos String s1 y s2 y sin hacer uso de los métodos definidos en la clase String que resuelven el mismo problema, determine

- si s2 es preﬁjo de s1.
- si s2 es suﬁjo de s1.
- si s2 es una subcadena de s1.

Programación

UD6: Programación estructurada - Recursividad

Ejercicio 14

- Escribir un método de clase recursivo que, dados un String s y su longitud

l, muestre en orden inverso los caracteres de s.

- Escribir un método de clase recursivo que dé el mismo resultado que el

apartado anterior pero recibiendo sólo la cadena (String). Ayuda: usar el método substring. Programación

UD6: Programación estructurada - Recursividad

Ejercicio 15 Escribir un método de clase recursivo que compruebe si un String s dado es palíndromo. Ayuda: usar el método substring para reducir la longitud de s en cada llamada recursiva. Programación

UD6: Programación estructurada - Recursividad

Ejercicio 16 Dado un array de String v, escribir un método de clase recursivo que

- determine si es capicúa, esto es, si la primera y última palabra del array

son la misma, la segunda y la penúltima palabras también lo son, y así sucesivamente. El método retornará true si el array es capicúa o false en caso contrario.

- dada una palabra pal, determine la existencia de dicha palabra en el array

entre dos posiciones dadas ini y fin que cumplen inicialmente: 0≤ini≤fin<v.length. Caso de existir la palabra, el método devolverá la primera posición donde se encuentre la misma, y de no existir el método devolverá el valor -1. Programación

UD6: Programación estructurada - Recursividad
