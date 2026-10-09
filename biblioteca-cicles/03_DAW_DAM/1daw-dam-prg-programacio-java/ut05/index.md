---
layout: default
title: "UD1 — Introducción a la programación con Java · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT5 Completa"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut05/ut0501.html"
next_label: "1.1 Introducción a la Programacion ➡️"
---

# 📘 UD1 — Introducción a la programación con Java (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**1.1 Introducción a la Programacion**](./ut0501.md)
- [**1.2 Algoritmos**](./ut0502.md)
- [**1.3 Introduccion a Java**](./ut0503.md)
- [**1.4 Estilo de codificacion**](./ut0509.md)

---

# 1.1 Introducción a la Programacion

> **📌 🏷️ Apunt de la Unitat**
> # BLOQUE 1: Introducción a la programación
>
> #### INTRODUCCIÓN A LA PROGRAMACIÓN

> **📌 🏷️ Apunt de la Unitat**
> #### INTRODUCCIÓN A JAVA

> **📌 🏷️ Apunt de la Unitat**
> #### Prácticas de aula

> **📌 🏷️ Apunt de la Unitat**
> #### Ampliación y refuerzo

> **📌 🏷️ Apunt de la Unitat**
> #### Estilos de codificación

> **📌 🏷️ Apunt de la Unitat**
> #### Otros Recursos

> **🔗 Recurs Web: [YOUTUBE] 01e - Instalación del IDE Eclipse en Windows**
> [**🌐 Obrir recurs extern (https://youtu.be/mAgYA5y9m2M?si=mCfhCAiboDACWBGJ) ↗️**](https://youtu.be/mAgYA5y9m2M?si=mCfhCAiboDACWBGJ)

---

Programación

### UD 1: Introducción a la Programación

Jose Chamorro Molina Actualizado por: José Ramón Simó Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

Programación

Introducción a la Programación ORDEN 60/2012, de 25 de septiembre, de la Conselleria de Educación, Formación y Empleo por la que se establece para la Comunitat Valenciana el currículo del ciclo formativo de Grado Superior correspondiente al título de Técnico Superior en Desarrollo de Aplicaciones Web. [2012/9149] Contenidos

1.- Identificación de los elementos de un programa informático: 1.1.− Estructura y bloques fundamentales. 1.2.− Soluciones y proyectos. 1.3.− Utilización de los entornos integrados de desarrollo. Real Decreto 686/2010, de 20 de mayo, por el que se establece el título de Técnico Superior en Desarrollo de Aplicaciones Web y se fijan sus enseñanzas mínimas.

Resultados de aprendizaje

- Reconoce la estructura de un programa informático, identificando y relacionando los elementos propios del lenguaje

de programación utilizado. Criterios de evaluación: 1.a) Se han identificado los bloques que componen la estructura de un programa informático. 1.b) Se han creado proyectos de desarrollo de aplicaciones 1.c) Se han utilizado entornos integrados de desarrollo. Competencias profesionales, personales y sociales

- Adaptarse a las nuevas situaciones laborales, manteniendo actualizados los conocimientos científicos, técnicos y

tecnológicos relativos a su entorno profesional, gestionando su formación y los recursos existentes en el aprendizaje a lo largo de la vida y utilizando las tecnologías de la información y la comunicación.

Introducción a la Programación 1.- Algoritmos y Programas 2.- Lenguajes de Programación. Tipos 3.- Entornos de desarrollo 4.- Representación de los algoritmos

4.1.- Pseudocódigo

4.2.- Diagramas de Flujo Programación

1.- Algoritmos y programas Programación

1.- Algoritmos y programas Definiciones: Algoritmo: Secuencia finita de reglas o instrucciones que especifican un conjunto de operaciones, que al ser ejecutadas por un agente ejecutor (máquina real o abstracta), resuelve cualquier problema de un tipo determinado en un tiempo finito.

Programa informático: Conjunto de instrucciones que implementan un algoritmo. Una vez ejecutadas, las instrucciones realizarán una o varias tareas en un ordenador. Programación: Es el proceso por el cual una persona desarrolla un programa valiéndose de una herramienta que le permita escribir el código (el cual puede estar en uno o varios lenguajes, tales como C++, Java y Python entre otros) y de otra que sea capaz de “traducirlo” a lo que se conoce como lenguaje de máquina, el cual puede ser entendido por un microprocesador.

PROGRAMACIÓN = ALGORITMOS + ESTRUCTURAS DE DATOS Programación

1.- Algoritmos y programas Problema Enunciado Algoritmo Programa Solución (Modelo formal) (Diseño) (Codificación) (Máquina)

- Dado

un problema intentaremos encontrar un modelo formal que nos permita representarlo como un enunciado.

- Mediante

una técnica de diseño realizaremos un algoritmo que resuelva el problema

- Mediante un lenguaje de programación

realizaremos el programa.

- Una vez ejecutado el programa por un

agente ejecutor obtendremos un resultado que nos dará la solución del problema. Programación

1.- Algoritmos y programas Algoritmos: Datos y variables: ALGORITMO = Técnica para resolver problemas a través de una serie de pasos intermedios hasta llegar a resultado. Pero siempre vamos a manejar distintos tipos de datos en un algoritmo ... tiempo, euros, cantidad de productos ...

Y necesitaremos almacenar los resultados de los cálculos intermedios de cada algoritmo. Programación

Ejemplo de algoritmo: Resolver un cubo de rubik Programación

1.- Algoritmos y programas https://www.youtube.com/watch?v=CLzWY-SKAqk

Movimientos en un cubo de rubik Programación

1.- Algoritmos y programas

Ejemplo de algoritmo: Resolver un cubo de rubik Programación

1.- Algoritmos y programas D – R’ – D’- R D – R’ – D’- R Lo difícil es obtener el algoritmo, realizarlo (o programarlo) es sencillo

Constantes Variables Almacena información que no va a ser modificada por el algoritmo Almacena un tipo de dato cuyo valor va a sufrir modificaciones durante la ejecución del algoritmo Nombre: letras, números y guiones. Siempre empieza por letra Tipo: número entero, número real, carácter, cadena, lógico Valor: información que almacena Datos Programación

1.- Algoritmos y programas

- Me traen un ordenador estropeado
- Empiezo a contar el tiempo.
- Cambio las piezas estropeadas y ... funciona.
- Anoto las piezas cambiadas.
- Cobro al dueño del pc por el tiempo trabajado por horas y las piezas

cambiadas.

- Compruebo el pc y detecto las averias.
- Le pregunto al dueño si paga con tarjeta o en efectivo. Con tarjeta

se recarga un 2%. •Anoto sus datos de cliente en base datos. Fin Ejemplo de algoritmo: Reparación de un ordenador Programación

1.- Algoritmos y programas

He almacenado el tiempo de reparación. Variable numérica entera.

- El precio por hora es constante.
- El precio de cada pieza no es exacto en euros, tiene céntimos.

Variable numérica real.

- Pago con tarjeta. Verdadero o falso. Variable lógica.
- Almaceno la suma total en variable. ¿Tipo?
- Almaceno los datos de cliente en variable tipo cadena de

caracteres. Elementos usados Programación

1.- Algoritmos y programas

Enteros: Son los números enteros. Como horas exactas o euros sin céntimos Reales: Son los números con decimales. Como precios de productos. Lógicos: Tienen dos valores Verdadero o Falso. Carácter: Son las letras del alfabeto. Cadena de caracteres: Son un conjunto de caracteres como el nombre y apellidos de una persona.

Tipos de datos Programación

1.- Algoritmos y programas

Expresión: constante o variable, es un conjunto de operadores y operandos. Ejemplo: x = 12 + 3 * 4 Operador Numérico: +, -, *, /, div, mod Relaciones: >, <, ==, >=, <=, <> Lógicos: NOT, AND, OR Operando: es una variable, una constante, etc.. un elemento que tiene un valor.

Instrucciones Programación

1.- Algoritmos y programas

Un algoritmo debe ser: ✓ Preciso, debe indicar el orden de realización de cada paso. ✓ Definido, si se sigue un algoritmo dos veces se debe obtener el mismo resultado cada vez. ✓ Finito, debe terminar en un número finito de pasos Características de los algoritmos Programación

1.- Algoritmos y programas

2.- Lenguajes de Programación. Tipos Programación

2.- Lenguajes de Programación Programación

Definición: “Un lenguaje de programación es un lenguaje formal que especifica una serie de instrucciones para que una computadora produzca diversas clases de datos. Los lenguajes de programación pueden usarse para crear programas que pongan en práctica algoritmos específicos que controlen el comportamiento físico y lógico de una computadora.” (Wikipedia) #include <iostream> using namespace std;

```java
int main() {
    cout << "Hola Mundo" << endl;
    return 0;
}
```

Ejemplo. Hola mundo en c++

```java
public class Hello {
  public static void main(String[] args) {
    System.out.println("Hola mundo");
  }
}
```

Ejemplo. Hola mundo en Java

2.- Lenguajes de Programación Programación

2.- Lenguajes de Programación Programación

2.- Lenguajes de Programación Programación

> **✍️ Ejercicio: ✓ Otras definiciones de Lenguaje de Programación ✓ Len**
> Ejercicio: ✓ Otras definiciones de Lenguaje de Programación ✓ Lenguajes de 1era, 2nda, 3era y 4rta generación (¿5nta?) ✓ Clasificación de los lenguajes de programación según

- La proximidad del lenguaje a la máquina (Alto nivel Vs Bajo nivel)
- En función del paradigma de programación (Imperativos Vs Declarativos)
- La traducción al código máquina (Interpretados Vs Compilados)
- Según su funcionalidad

3.- Entornos de Desarrollo Programación

3.- Entornos de Desarrollo Programación

Definición: “Un entorno de desarrollo integrado, en inglés Integrated Development Environment (IDE), es una aplicación informática que proporciona servicios integrales para facilitarle al desarrollador o programador el desarrollo de software.” (Wikipedia) Los IDEs pueden estar dedicados a un lenguaje de programación específico o servir para distintos lenguajes aunque hoy en día suelen ser multilenguaje.

Existen IDEs multiplataforma, es decir, se pueden ejecutar sobre distintos SO y arquitecturas. Normalmente desarrollados en JAVA.

3.- Entornos de Desarrollo Programación

Un IDE, consta al menos de los siguientes elementos: ✓ Un editor de texto o código. Actualmente con sintaxis coloreada, predicción de texto y navegación por el código ✓ Un compilador y/o intérprete. ✓ Un depurador de errores. (Breakpoints, ejecución paso a paso, visualización de variables, pila, etc...) ✓ Opcionalmente. Funciones para la construcción de interfaces gráficas (GUI) ✓ Opcionalmente. Algún sistema de control de versiones.

✓ Opcionalmente. Herramientas de generación de pruebas y documentación de código. ✓ Etc, etc...

3.- Entornos de Desarrollo Programación

Algunos de los IDE más utilizados son: Windows Linux Java Código abierto

- DevC++. IDE completo para

utilizar MinGW (Minimalist GNU for Windows)

- Visual-MinGW. Diseñado

para utilizar MinGW

- Emacs, Vim. Editores de

textos tradicionales de Unix, muy engorrosos.

- Anjuta. C/C++, incorpora las

heramientas GNU gcc, make, gdb, entre otros

- Kdevelop. C/C++, Fortran,

Pascal, Perl... Permite desarrollo de interfaces gráficas.

- Eclipse. IDE independiente

de la plataforma. Extensible mediante módulos. Da soporte por defecto para Java ampliable a otros lenguajes. Recomendado por Google para el desarrollo para Android

- Netbeans. Idem eclipse

Propietarios

- Visual Studio. El IDE más

popular de Microsoft. Admite C#, C++ y Visual Basic

- C++ Builder. Delphi. RAD

multiplataforma de Embarcadero basados en ObjectPascal y C++

- Code Forge. Admite mas de

30 lenguajes.

- Maguma Workbench
- Jbuilder. El más popular de

los IDE comerciales para Java. Producto de Embarcadero compañía que cuenta también con Delphi y C++ Builder.

- AIDE. Android para Android

3.- Entornos de Desarrollo Programación

IDE para 1ºDAW

La última versión de Eclipse

4.- Representación de algoritmos Programación

4.- Representación de algoritmos Programación

4.- Representación de algoritmos Programación

4.- Representación de algoritmos Programación

4.- Representación de algoritmos Programación

Ordinograma (Diagrama de flujo): Representa el flujo de datos de un proceso Si No Inicio Entrada / Salida Instrucción Decisión Fin Elementos de un ordinograma

- Lenguaje natural
- Permite escribir las instrucciones que conducen a la resolución

de problema utilizando estructuras básicas de programación

- Reglas
- Cada instrucción en una línea
- Conjunto de palabras reservadas en minusculas: si,

entonces, fsi, mientras, fmientras, etc …

- Referencia a módulos entre <NOMBRE-MODULO>
- Código indentado

Pseudocódigo Programación

4.- Representación de algoritmos

Programa: NOMBRE correspondiente al programa Entorno: Declaración de las estructuras de datos en general. Algoritmo: Secuencia de instrucciones que forman el programa. Fin del programa. Programa: ARRANCA_COCHE Entorno: Algorítmo: Pisar embrague con pie izquierdo Poner punto muerto Dar a llave de contacto Pisar embrague Meter la marcha primera Quitar el freno de mano Levantar el pie del embrague Fin del programa Ejemplo Pseudocódigo. Estructura Programación

4.- Representación de algoritmos

Bibliografía Programación

Bibliografía ✓ Aprende JAVA con ejercicios. Edición 2019. Luis José Sánchez. ✓ Empezar a programar usando Java. 2ª edición. Universitat Politècnica de València ✓ Apuntes de la asignatura Ingeniería del Software de la Universitat Politècnica de València. ✓ https://github.com/statickidz/TemarioDAW ✓https://es.khanacademy.org/computing/computer-science/algorithms ✓https://es.wikipedia.org/wiki/Lenguaje_de_programación ✓https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado Programación

---

# 1.2 Algoritmos

Programación

### UD 1: Introducción a la programación

ALGORITMOS Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web Jose Chamorro Molina Actualizado por: José Ramón Simó

Programación

### UD 1: Introducción a la programación - ALGORITMOS

Algoritmos 1.- ¿Qué es un algoritmo? 2.- ¿Cómo resuelvo un problema?

2.1.- Entender el problema

2.2.- Trazar un plan

2.3.- Ejecutar el plan

2.4.- Revisar 3.- ¿Cómo resuelvo un algoritmo?

3.1.- Análisis del problema

3.2.- Diseñar un algoritmo

3.3.- Traducir un algoritmo

3.4.- Depurar el programa 4.- Ejercicios propuestos

1.- ¿Qué es un algoritmo? Programación

1.- ¿Qué es un algoritmo? De acuerdo a Wikipedia la definición del un algoritmo es: "...es un conjunto preescrito de instrucciones o reglas bien definidas, ordenadas y finitas que permite realizar una actividad mediante pasos sucesivos que no generen dudas a quien deba realizar dicha actividad. Dados un estado inicial y una entrada, siguiendo los pasos sucesivos se llega a un estado final y se obtiene una solución..." Programación

2.- ¿Cómo resuelvo un problema? Programación

2.- ¿Cómo resuelvo un problema? Programación

Para entender cómo resolver un problema debemos entender el siguiente esquema, según Polya.

Inicio ¿Cómo resuelvo un problema?

Básicamente es poner a prueba nuestra comprensión de lectura (también puede ser oral) del problema. Debemos seguir estos pasos

### 1. Leer y releer el problema

### 2. Entender la pregunta, es decir, tener claro cuál es el

resultado esperado.

### 3. Identificar los datos importantes

### 4. Organizar y clasificar los datos e información

- Realizar un esquema o figura.

Programación

2.- ¿Cómo resuelvo un problema? Entender el problema

Esto quiere decir que acciones debemos hacer con los datos y verificar nuestros datos, por lo que debemos tener presente estas preguntas: ✓ ¿Qué operaciones (acciones) necesito? ✓ ¿Qué datos que poseo no son importantes? ✓ ¿Será mejor descomponer el problema en otros más pequeños?

✓ ¿Tengo más alternativas? Programación

2.- ¿Cómo resuelvo un problema? Trazar (configurar) un plan

✓ Ahora que entendemos el problema y hemos elegido nuestras operaciones debemos ejecutarlo, esto quiere decir seguir paso a paso nuestra traza (configuración) y verificar si vamos llegando al resultado esperado. ✓ Debemos ejecutar las operaciones y preguntarnos ¿vamos por camino correcto? si es así seguimos con las siguientes operaciones y comprobar si nos acercamos a la solución.

Recuerda en apoyarte con dibujos o diagramas. Programación

2.- ¿Cómo resuelvo un problema? Ejecutar Plan

✓ Luego de ejecutar nuestro plan y al comprobar que hemos llegado al resultado esperado debemos entregar una respuesta completa. ✓ Podemos preguntarnos si existe otra forma de resolver el problema y comenzamos el ciclo de nuevo. Ver si podemos hacerlo más genérico para casos similares.

✓ Tener en la mente el problema porque puede servir de ayuda en un caso similar. Programación

2.- ¿Cómo resuelvo un problema? Revisar

En un juego, el ganador obtiene una ficha roja; el segundo, una ficha azul; y el tercero, una amarilla. Al final de varias rondas, la puntuación se calcula de la siguiente manera: Al cubo de la cantidad de fichas rojas se adiciona el doble de fichas azules y se descuenta el cuadrado de las fichas amarillas. Si Andrés llegó 3 veces en primer lugar, 4 veces de último y 6 veces de intermedio, ¿Qué puntuación obtuvo?

(Adaptado de Melo (2001), página 30). Programación

2.- ¿Cómo resuelvo un problema? Manos a la obra!

Esto es lo que pensamos... o ¿no? ¿Qué dijo?! ¿Cómo fue? AAAAAH!!!! Programación

2.- ¿Cómo resuelvo un problema? Primera reacción

Entonces ahora comenzamos aplicar nuestro ciclo. Primero ENTENDER el problema, leamos de nuevo pero más lento y por partes. Programación

2.- ¿Cómo resuelvo un problema? Respiramos y continuamos

En un juego, el ganador obtiene una ficha roja; el segundo, una ficha azul; y el tercero, una amarilla. ¿Tenemos datos importantes? Así es, debemos entender que existen 3 tipos de fichas para cada lugar Ayudas: Subrayar y colorear Programación

2.- ¿Cómo resuelvo un problema? Parte 1 del enunciado

Al final de varias rondas, el puntaje se calcula de la siguiente manera: Al cubo de la cantidad de fichas rojas se adiciona el doble de fichas azules y se descuenta el cuadrado de las fichas amarillas. ¿Tenemos datos importantes? Sí! tenemos una fórmula para calcular el puntaje final.

Programación

2.- ¿Cómo resuelvo un problema? Parte 2 del enunciado

Si Andrés llegó 3 veces en primer lugar, 4 veces de último y 6 veces de intermedio, ¿Qué puntuación obtuvo? ¿Tenemos datos importantes? Sí, tenemos la cantidad de veces que Andrés ha ganado en los 3 distintos lugares. Además tenemos la pregunta, es decir, sabemos que debemos tener un resultado concreto.

Programación

2.- ¿Cómo resuelvo un problema? Parte 3 del enunciado

Hemos leído el enunciado y releído, obtuvimos los datos de acuerdo a cada parte del enunciado, por lo que ahora pasamos a TRAZAR un plan según los datos que tenemos. Es decir ordenarlos según por cada parte del enunciado y verificar que operaciones necesito para resolver el problema.

Programación

2.- ¿Cómo resuelvo un problema? ¿Y ahora?

Parte 1: Roja para el primer lugar Azul para el segundo lugar Amarilla para el tercer lugar Parte 2: Armamos la fórmula para calcular puntuación final: PF = (R3)+ (2 x Az) - (Am2) Parte 3: Andrés tiene: 3 fichas rojas (R), 6 azules (Az) y 4 amarillas (Am). Programación

2.- ¿Cómo resuelvo un problema? Trazando nuestro plan

Nuestro tercer paso es EJECUTAR nuestra traza según los datos obtenidos al entender el problema. Quiere decir unir las operaciones elegidas y aplicar los datos en dichas operaciones. Programación

2.- ¿Cómo resuelvo un problema? Continuamos…

Por lo que tenemos: Andrés tiene: 3 fichas rojas (R), 6 azules (Az) y 4 amarillas (Am). Y la fórmula obtenida: PF = (R3)+ (2 x Az) - (Am2) Reemplazando tenemos: PF = (33) + (2x6) - (42) Continuando cada operación: PF = 27 + 12 - 16 Nuestro resultado final es: PF = 23 Programación

2.- ¿Cómo resuelvo un problema? Ejecutando el plan

Al ejecutar nuestro plan ahora debemos REVISAR, para ello debemos comprobar que nuestro resultado es correcto, quiere decir que debemos revisar los cálculos y verificar con la solución estimada. Tenemos que dar una solución completa, en nuestro caso sería como respuesta según la pregunta del problema

La puntuación final que obtuvo Andrés fue de 23 Programación

2.- ¿Cómo resuelvo un problema? Revisando

Entonces para resolver un problema debemos: Entender Trazar Ejecutar Revisar Programación

2.- ¿Cómo resuelvo un problema? Resumiendo

3.- ¿Cómo resuelvo un algoritmo? Programación

Ahora que entendemos un poco más de cómo resolver un problema ahora llevemos el mismo teorema para resolver un algoritmo en computación. Cuyas fases serían entonces: Programación

3.- ¿Cómo resuelvo un algoritmo? ¿Cómo resuelvo un algoritmo?

Esta etapa sería Entender el problema por lo que aquí debemos: ✓ Formular el problema ✓ Conocer el resultado esperado ✓ Identificar datos e información ✓ Definir las operaciones ✓ Restricciones del problema Programación

3.- ¿Cómo resuelvo un algoritmo? Analizar el problema

Es la representación gráfica mediante un diagrama la secuencia de las operaciones de forma lógica. Esta etapa sería Trazar el problema. Programación

3.- ¿Cómo resuelvo un algoritmo? Diseñar un algoritmo (I) El diagrama puede ser un diagrama de flujo, pseudocódigo o cualquier otro tipo de representación gráfica que te ayude a visualizar el algoritmo para resolver el programa.

El diagrama para diseñar un algoritmo es conocido como Diagrama de Flujo, representa la secuencia lógica de nuestro análisis. Cuya simbología es: Programación

3.- ¿Cómo resuelvo un algoritmo? Diseñar un algoritmo (II)

Programación

3.- ¿Cómo resuelvo un algoritmo? Diseñar un algoritmo (III)

Es Ejecutar el problema, es decir que debemos pasar nuestro diagrama a un lenguaje (idioma), en donde cada lenguaje posee su propia gramática y sintaxis: ✓ Comenzar y terminar un programa: INICIO, FIN ✓ Declarar los tipos de los datos: entero, decimal, letra, texto.

✓ Entrada por teclado: leer ✓ Desición: si - sino ✓ Iteración: mientras ✓ Mostrar por pantalla: imprimir Programación

3.- ¿Cómo resuelvo un algoritmo? Traducir un algoritmo

✓ Esta etapa es Revisar. ✓ Aquí revisamos y se corrigen los errores de nuestra traducción mediante el resultado obtenido que debemos probar y validar. ✓ Para depurar nuestro programa debemos asignar valores a nuestras variables y seguir el flujo (secuencia) de nuestro diseño y nuestra traducción.

✓ Nos podemos ayudar haciendo una tabla para seguir el flujo de nuestro programa y anotar los valores de las variables a medida se vayan modificando. Programación

3.- ¿Cómo resuelvo un algoritmo? Depurar un programa

✓ Tenemos el mismo enunciado del ejercicio ya visto anteriormente. ✓ En un juego, el ganador obtiene una ficha roja; el segundo, una ficha azul; y el tercero, una amarilla. Al final de varias rondas, el puntaje se calcula de la siguiente manera: Al cubo de la cantidad de fichas rojas se adiciona el doble de fichas azules y se descuenta el cuadrado de las fichas amarillas. Si Andrés llegó 3 veces en primer lugar, 4 veces de último y 6 veces de intermedio, ¿Qué puntaje obtuvo?

Programación

3.- ¿Cómo resuelvo un algoritmo? Manos a la obra!

Para nuestro ejercicio tenemos en esta etapa, según lo entendido al leer el problema: ✓ Existen 3 tipos de fichas para cada lugar o Rojas, Azules y Amarillas ✓ Fórmula para calcular el puntaje final. o PF = (R3)+ (2 x Az) - (Am2) ✓ Cantidad de veces que Andrés ha ganado en los 3 distintos lugares o 3 fichas rojas, 6 azules y 4 amarillas ✓ Debemos tener un resultado concreto.

Programación

3.- ¿Cómo resuelvo un algoritmo? Análisis del problema

✓ Quiere decir que debemos utilizar la simbología de Diagrama de Flujo (ir a diapositiva) para diseñar nuestra solución. ✓ Básicamente es "dibujar" el análisis realizado anteriormente utilizando Diagrama de Flujo (ir a diapositiva). ✓ Debemos definir nuestros datos, las operaciones y el resultado a mostrar Programación

3.- ¿Cómo resuelvo un algoritmo? Diseñar un algoritmo

3.- ¿Cómo resuelvo un algoritmo? Diseñar un algoritmo (II) Programación

✓ Ahora es el momento de escribir nuestro diagrama en un lenguaje de programación el cual es conocido como Pseudo - código ✓ Para ello escribiremos con las palabras reservadas mencionadas anteriormente (ver diapositiva Traducir un algoritmo) Programación

3.- ¿Cómo resuelvo un algoritmo? Traducir un algoritmo (I)

//Indicamos el inicio del programa INICIO //Declaramos las variables y las iniciamos ENTERO ENTERO ENTERO ENTERO

```java
fichas_rojas = 3;
fichas_azules = 6;
fichas_amarillas = 4;
puntaje_final = 0;
```

//Escribirmos la operación a utilizar puntaje_final = fichas_rojas^3 + 2*fichas_azules

- fichas_amarillas^2;

//Imprimimos IMPRIMIR "El //Imprimimos por pantalla el texto que queremos mostrar puntaje final de Andres es de " por pantalla la variable que queremos mostrar IMPRIMIR puntaje_final; //Indicamos el fin del programa FIN Ayudas: // indica comentario Programación

3.- ¿Cómo resuelvo un algoritmo? Traducir un algoritmo (II)

Para hacer la depuración debemos ir reemplazando los valores de las variables en nuestro programa. ✓ Tenemos los valores ya dados por el enunciado: f_rojas = 3, f_azules = 6 y f_amarillas = 4, estos valores debemos reemplazarlos en nuestra fórmula inicial

```java
puntaje_final = 3^3 + 2*6 - 4^2;
```

✓ Realizando el cálculo nos da como resultado

```java
puntaje_final = 39;
```

✓ Impresión por pantalla: El puntaje final de Andres es de 39 Programación

3.- ¿Cómo resuelvo un algoritmo? Depurar el programa

¿Qué sucede si existen más jugadores? ¿Cómo podríamos calcular el puntaje final para un nuevo jugador y con cantidades de fichas distintas a Andrés? ¿Tienes alguna idea? Programación

3.- ¿Cómo resuelvo un algoritmo? Veamos si generalizamos el problema

✓ Tenemos la base del problema, en el ejercicio teníamos el cálculo para una persona (Andrés) con una cantidad de fichas determinadas (3 rojas, 6 azules y 4 amarillas) ✓ Nos preguntamos: o ¿Tengo que cambiar la fórmula? No, el cálculo se mantiene igual. o ¿De dónde obtengo las fichas?

o ¿Como puedo cambiar los valores de las fichas? ✓ Como no sabemos dónde obtengo los datos podemos decir que esos datos me los entrega el usuario, al ser asi el usuario debe ingresar los datos, esta entrada seria por teclado. Programación

3.- ¿Cómo resuelvo un algoritmo? Análisis del problema

Programación

3.- ¿Cómo resuelvo un algoritmo? Diseñar un algoritmo

INICIO

```java
ENTERO f_rojas=0, f_azules=0, f_amarillas=0, puntaje_final=0;
```

espacio TEXTO nombre_jugador = " "; //se inicia con un IMPRIMIR "Ingrese el nombre del jugador: "; LEER nombre_jugador; cantidad fichas rojas:"; cantidad fichas azules:"; cantidad fichas amarillas:"; IMPRIMIR "Ingrese LEER f_rojas; IMPRIMIR "Ingrese LEER f_azules; IMPRIMIR "Ingrese LEER f_amarillas;

```java
puntaje_final = f_rojas^3 + 2*f_azules - f_amarillas^2;
```

"El puntaje final de "; nombre_jugador; " es de: "; puntaje_final; IMPRIMIR IMPRIMIR IMPRIMIR IMPRIMIR FIN Programación

3.- ¿Cómo resuelvo un algoritmo? Traducir un algoritmo

✓ En este caso nuestra depuracion seria distinta porque ahora debemos hacer un par de pruebas, con valores distintos dado que es el usuario quien ingresa los valores de las fichas y el nombre del jugador. ✓ Tenemos que usar valores supuestos, es decir nos imaginamos que valores podria ingresar el usuario y dados a estos valores hacemos la depuracion.

Programación

3.- ¿Cómo resuelvo un algoritmo? Depurar el programa

Debemos imaginarnos la ejecución del programa, suponiendo que el usuario nos ingresa los valores siguientes. Ingrese nombre jugador: Jorge Se asigna el texto Jorge en la variable nombre_jugador Ingrese cantidad fichas rojas: 2 Se asigna el número 2 en la variable f_rojas Ingrese cantidad fichas azules: 4 Se asigna el número 4 en la variable f_azules Ingrese cantidad fichas amarillas: 2 Se asigna el número 6 en la variable f_amarillas Programación

3.- ¿Cómo resuelvo un algoritmo? Depurar el programa

Reemplazando los valores ingresados por el usuario en la formula quedaría puntaje_final = 2^3 + 2*4 - 6^2 Resultado de la operación: puntaje_final = -20 Impresión por pantalla: El puntaje final de Jorge es de -20 Programación

3.- ¿Cómo resuelvo un algoritmo? Depurar el programa

✓ Sucede que ahora queremos seguir calculando más jugadores, por ejemplo 50 o 15 o 1000, pero sin tener que ejecutar tantas veces nuestro programa, solo sabemos que el usuario me diría cuantos jugadores se desea que le calculemos el puntaje. ✓¿Alguna idea? ¿como puedo modificar mi programa para que calcule los puntajes tantas veces según el usuario me ha dicho en un inicio la cantidad de jugadores?

Programación

3.- ¿Cómo resuelvo un algoritmo? ¿Y si agregamos algo más?

✓ Ya sabemos cómo calcular para un jugador en donde el usuario ingresa la cantidad de las distintas fichas, solo sabemos que funciona para un jugador. ✓ Nos preguntamos entonces: o ¿que necesito para "n" jugadores? solo se que "n" me lo da el usuario o ¿como puedo hacer que repita la operación de calcular el puntaje?

Programación

3.- ¿Cómo resuelvo un algoritmo? Análisis del problema

✓ Bueno en realidad si pensamos que son 5 jugadores copiamos nuestro código 5 veces ¿o no?... pero creo que eso no es muy eficiente porque si fuesen 50 o 100 o 1000. ✓ La verdad tenemos pensar que no sabemos realmente cuántos jugadores son, solo sabemos que el usuario nos dirá en el inicio la cantidad.

✓ Como la operación se repite tantas veces según la cantidad de jugadores, sabemos que debemos usar una condición de iteración Programación

3.- ¿Cómo resuelvo un algoritmo? Análisis del problema

✓El diseño de éste algoritmo es tan grande que en la siguiente diapositiva la puedes encontrar. Programación

3.- ¿Cómo resuelvo un algoritmo? Diseñar un algoritmo

Programación

Creo que estás así nuevamente... o ¿no? AAAAAH!!!! Programación

3.- ¿Cómo resuelvo un algoritmo? Reacción

Reacción Respira y.... meditar Programación

3.- ¿Cómo resuelvo un algoritmo?

INICIO

```java
ENTERO f_rojas=0, f_azules=0, f_amarillas=0, puntaje_final=0;
ENTERO cantidad_jugadores = 0, contador = 0;
```

un espacio "; TEXTO nombre_jugador = " "; //se inicia con IMPRIMIR "Ingrese la cantidad de jugadores: LEER cantidad_jugadores; MIENTRAS (contador < cantidad_jugadores) IMPRIMIR "Ingrese el nombre del jugador: "; LEER nombre_jugador; IMPRIMIR "Ingrese cantidad fichas rojas:"; LEER f_rojas; IMPRIMIR "Ingrese cantidad fichas azules:"; LEER f_azules; IMPRIMIR "Ingrese cantidad fichas amarillas:"; LEER f_amarillas; Programación

3.- ¿Cómo resuelvo un algoritmo? Traducir un algoritmo

Traducir un algoritmo

```java
puntaje_final = f_rojas^3 + 2*f_azules - f_amarillas^2;
```

"El puntaje final de "; nombre_jugador; " es de: "; puntaje_final;

```java
= contador + 1;
```

IMPRIMIR IMPRIMIR IMPRIMIR IMPRIMIR contador FIN MIENTRAS los jugadores"; IMPRIMIR "Se ha calculado los puntajes de FIN Programación

3.- ¿Cómo resuelvo un algoritmo?

✓En este caso haremos una tabla para mostrar la depuración del programa, imaginándonos las impresiones por pantalla. ✓Suponemos que el usuario quiere calcular el puntaje de 4 jugadores. ✓Iniciamos nuestras variables. Variables / n° vueltas valor inicial cantidad_jugadores contador (valor inicial) nombre_jugador " " f_rojas f_azules f_amarillas puntaje_final Programación

3.- ¿Cómo resuelvo un algoritmo? Depurar un algoritmo

Variables / n° vueltas valor inicial cantidad_jugadores contador (valor inicial) nombre_jugador " " Jorge f_rojas f_azules f_amarillas puntaje_final 1010 Validamos la condición mientras: contador < cantidad_jugadores Reemplazamos los valores: 0 < 4 Donde el resultado de esta operación es VERDADERA, por lo que entra al ciclo mientras y ejecuta las operaciones que están dentro.

Vuelta (iteración) 1 ●El usuario ingresa los valores de cada ficha y las reemplazamos en la fórmula donde obtenemos el resultado final. ●La última operación del ciclo mientras es: ●contador = contador + 1, es decir estamos aumentando en 1 la variable contador por lo que su nuevo valor es 1, este valor inicial de la siguiente vuelta.

Programación

3.- ¿Cómo resuelvo un algoritmo?

Volvemos a validar la condición mientras con nuevo valor de la variable contador: 1 < 4 Donde el resultado VERDADERA, se entra al ciclo mientras y ejecuta las operaciones nuevamente Variables / n° vueltas valor inicial cantidad_jugadores contador (valor inicial) nombre_jugador " " Jorge Ana f_rojas f_azules f_amarillas puntaje_final 1010 El usuario ingresa los valores de cada ficha y las reemplazamos en la fórmula donde obtenemos el resultado final.

La última operación del ciclo mientras es: contador = contador + 1, es decir estamos aumentando en 1 la variable contador por lo que su nuevo valor es 2, este valor inicial de la siguiente vuelta. Programación

3.- ¿Cómo resuelvo un algoritmo? Vuelta (iteración) 2

Volvemos a validar la condición mientras con nuevo valor de la variable contador: 2 < 4 Donde el resultado VERDADERA, se entra al ciclo mientras y ejecuta las operaciones nuevamente Variables / n° vueltas valor inicial cantidad_jugadores contador (valor inicial) nombre_jugador " " Jorge Ana Fran f_rojas f_azules f_amarillas puntaje_final 1010 El usuario ingresa los valores de cada ficha y las reemplazamos en la fórmula donde obtenemos el resultado final.

La última operación del ciclo mientras es: contador = contador + 1, es decir estamos aumentando en 1 la variable contador por lo que su nuevo valor es 3, este valor inicial de la siguiente vuelta. Programación

3.- ¿Cómo resuelvo un algoritmo? Vuelta (iteración) 3

Variables / n° vueltas VI cantidad_jugadores contador (valor inicia) nombre_jugador " " Jorge Ana Fran Fabiola f_rojas f_azules f_amarillas puntaje_final 1010 Volvemos a validar la condición mientras con nuevo valor de la variable contador: 3 < 4 Donde el resultado VERDADERA, se entra al ciclo mientras y ejecuta las operaciones nuevamente El usuario ingresa los valores de cada ficha y las reemplazamos en la fórmula donde obtenemos el resultado final.

La última operación del ciclo mientras es: contador = contador + 1, es decir estamos aumentando en 1 la variable contador por lo que su nuevo valor es 4, este valor inicial de la siguiente vuelta. Programación

3.- ¿Cómo resuelvo un algoritmo? Vuelta (iteración) 4

Variables / n° vueltas valor inicial cantidad_jugadores contador (valor que inicia) nombre_jugador " " Jorge Ana Francisco Fabiola - f_rojas - f_azules - f_amarillas - puntaje_final 1010 - Volvemos a validar la condición mientras con nuevo valor de la variable contador: 4 < 4 Donde el resultado FALSA, no entra al ciclo mientras y muestra por pantalla el mensaje final y finaliza nuestro programa.

Programación

3.- ¿Cómo resuelvo un algoritmo? Vuelta (iteración) 5

Así se resuelven las depuraciones de nuestra traducción. La finalidad, recordar, es verificar si nuestro análisis, diseño y traducción están correctos. En caso de haber error sabremos en que parte tenemos el error y así corregirlo. La depuración también se realiza en caso de un programa ya existente.

¡Solo debes practicar! Programación

3.- ¿Cómo resuelvo un algoritmo? Depurar el programa

✓ Te dejo una pregunta para que resuelvas y con el fin de mejorar las soluciones ya planteadas. ✓ ¿Qué sucede si el usuario ingresa números negativos o letras? ✓ ¿Sigue funcionando el programa o existen errores? Son cosas que también debemos tener presente al analizar el problema aunque no estén en el enunciado Programación

3.- ¿Cómo resuelvo un algoritmo? Validaciones

4.- Ejercicios propuestos Programación

Dejo 2 ejercicios propuestos

### 1. Dado tres números ingresados por teclado enteros

mostrar por pantalla los números ordenados de mayor a menor, en caso de ser iguales mostrar un aviso.

### 2. Calcular el promedio de "n" números ingresados

por teclado, mostrar por pantalla el resultado. Recuerda seguir las etapas Programación

4.- Ejercicios propuestos Ejercicios propuestos

✓ Espero que con esta presentación se pueda entender más o tener una idea más clara de cómo resolver problemas de algoritmos. ✓ Recuerda seguir los pasos: Analizar (Entender), Diseñar (Trazar), Traducir (Ejecutar) y Depurar (Revisar). ✓ Siempre puede haber otra solución, trata de hacer el mismo problema con diferentes soluciones y/o agregar restricciones.

Programación

4.- Ejercicios propuestos Comentarios finales

Bibliografía Programación

Bibliografía Programación

✓ Empezar a programar usando Java. 2ª edición. Universitat Politècnica de València ✓ Apuntes de la asignatura Ingeniería del Software de la Universitat Politècnica de València. ✓https://es.wikipedia.org/wiki/Algoritmo ✓https://es.wikipedia.org/wiki/Lenguaje_de_programación ✓https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado

---

# 1.3 Introduccion a Java

Programación

### UD 1: Introducción a JAVA

Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web Jose Chamorro Molina Actualizado por: José Ramón Simó

Introducción a Java 1.- Variables e Identificadores 2.- Palabras reservadas 3.- Tipos de datos primitivos 4.- Declaración e inicialización 5.- Literales 6.- Constantes 7.- Operadores y expresiones 8.- Conversiones de tipo 9.- Comentarios Programación

El lenguaje de programación Java ¿Qué es Java? El lenguaje de programación Java es un lenguaje sencillo de aprender. Su sintaxis es la de C++ “simplificada”. Los creadores de Java partieron de la sintaxis de C++ y trataron de eliminar de este todo lo que resultase complicado o fuente de errores en este lenguaje.

Java es un lenguaje orientado a objetos, aunque no de los denominados puros; en Java todos los tipos, a excepción de los tipos fundamentales de variables (int, char, long...) son clases. Sin embargo, en los lenguajes orientados a objetos puros incluso estos tipos fundamentales son clases, por ejemplo en Smalltalk.

Programación

El lenguaje de programación Java Historia El 23 de Mayo de 1995, Java vio la luz de forma pública, durante la conferencia SunWorld. La compañía Sun Microsystems presentó el lenguaje en el que había estado trabajando durante más de cinco años de forma interna el equipo de James Gosling (el padre de la criatura).

Un auténtico lenguaje moderno concebido para funcionar en cualquier dispositivo, esa fue la idea. Programación

El lenguaje de programación Java Características Está diseñado para facilitar el trabajo en la WWW, mediante el uso de los programas navegadores de uso completamente difundido hoy en día. Los programas de Java que se ejecutan a través de la red se denominan applets (aplicación pequeña).

Inclusión en el lenguaje de un entorno para la programación gráfica (AWT y Swing) Su ejecución es independiente de la plataforma, lo que significa que un mismo programa se ejecutará exactamente igual en diferentes sistemas. Write Once, Run Anywhere "Escríbelo una vez, ejecútalo en cualquier lugar" Programación

El lenguaje de programación Java Java Runtime Environment o JRE es un conjunto de utilidades que permite la ejecución de programas Java. En su forma más simple, el entorno en tiempo de ejecución de Java está conformado por una Máquina Virtual de Java o JVM, un conjunto de bibliotecas Java y otros componentes necesarios para que una aplicación escrita en lenguaje Java pueda ser ejecutada. El JRE actúa como un "intermediario" entre el sistema operativo y Java.

La JVM es el programa que ejecuta el código Java previamente compilado (bytecode) mientras que las librerías de clases estándar son las que implementan el API de Java. Ambas JVM y API deben ser consistentes entre sí, de ahí que sean distribuidas de modo conjunto. Un usuario sólo necesita el JRE para ejecutar las aplicaciones desarrolladas en lenguaje Java, mientras que para desarrollar nuevas aplicaciones en dicho lenguaje es necesario un entorno de desarrollo, denominado Java Development Kit o JDK, que además del JRE (mínimo imprescindible) incluye, entre otros, un compilador para Java.

Programación

El lenguaje de programación Java Programación

El lenguaje de programación Java Simplificando… Programación

El lenguaje de programación Java De codificar a ejecutar… Programación

El lenguaje de programación Java ¿Por qué Java? ✓ Es un lenguaje sencillo de aprender. ✓ Es un lenguaje Orientado a Objetos. ✓ Gran comunidad de desarrolladores. ✓ Su ejecución es independiente de la plataforma. ✓ Se pueden desarrollar todos los contenidos del currículo de 1º DAW.

✓ Incorporación al mundo laboral actual. Programación

El lenguaje de programación Java ¿Por qué Java en 1ºDAW? Hay que escoger un Lenguaje Orientado a Objetos… Concurso nacional ciclos formativos ProgramaMe: Java o C++ Entonces… ¿Java o C++? El módulo Programación es común para 1º DAW y 1º DAM 2º DAW

2º DAM Servlets en Java (MVC)

Programar para Android: Programación

El lenguaje de programación Java https://www.tiobe.com/tiobe-index/ Programación

TIOBE Index for September 2023

El lenguaje de programación Java Programación

El lenguaje de programación Java Programación

Oracle Java SE Support Roadmap https://www.oracle.com/java/technologies/java-se-support-roadmap.html

Programación

1.- Variables e Identificadores

1.- Variables e identificadores Una variable es una zona en la memoria del ordenador con un valor que puede ser almacenado para ser usado más tarde en el programa. Las variables vienen determinadas por

- un nombre, que permite al programa acceder al valor que contiene

en memoria. Debe ser un identificador válido.

- un tipo de dato, que especifica qué clase de información guarda la

variable en esa zona de memoria

- un rango de valores que puede admitir dicha variable.

Programación

1.- Variables e identificadores Sirven para referirse tanto a objetos como a tipos primitivos. Tienen que declararse antes de usarse

tipo identificador;

```java
int posicion;
```

Se puede inicializar mediante una asignación

```java
tipo identificador = valor;
```

```java
int posicion = 0;
```

Definición de constantes

```java
static final float PI = 3.14159f;
```

Programación

1.- Variables e identificadores Se llama identificador al nombre que le damos a la variable. Los identificadores

- Nombran variables, funciones, clases y objetos.
- Comienza con una letra. Los siguientes caracteres pueden ser

letras o dígitos.

- Se distinguen las mayúsculas de las minúsculas.
- No hay una longitud máxima establecida para el identificador.

Programación

1.- Variables e identificadores Tipos de variables: ✓ Variables de tipos primitivos y variables referencia. ✓ Variables y constantes. ✓ Variables miembro y variables locales. Programación

1.- Variables e identificadores Variables de tipos primitivos y variables referencia, según el tipo de información que contengan. En función de a qué grupo pertenezca la variable, tipos primitivos o tipos referenciados, podrá tomar unos valores u otros, y se podrán definir sobre ella unas operaciones u otras.

Variables y constantes, dependiendo de si su valor cambia o no durante la ejecución del programa. La definición de cada tipo sería: ✓ Variables. Sirven para almacenar los datos durante la ejecución del programa, pueden estar formadas por cualquier tipo de dato primitivo o referencia. Su valor puede cambiar varias veces a lo largo de todo el programa.

✓ Constantes o variables finales. Son aquellas variables cuyo valor no cambia a lo largo de todo el programa. Programación

1.- Variables e identificadores Programación

### UD 2: Introducción a JAVA

Variables miembro y variables locales, en función del lugar donde aparezcan en el programa. La definición concreta sería: Variables miembro. Son las variables que se crean dentro de una clase, fuera de cualquier método. Pueden ser de tipos primitivos o referencias, variables o constantes. En un lenguaje puramente orientado a objetos como es Java, todo se basa en la utilización de objetos, los cuales se crean usando clases.

Variables locales. Son las variables que se crean y usan dentro de un método o, en general, dentro de cualquier bloque de código. La variable deja de existir cuando la ejecución del bloque de código o el método finaliza. Al igual que las variables miembro, las variables locales también pueden ser de tipos primitivos o referencias.

2.- Palabras reservadas Programación

2.- Palabras reservadas En el lenguaje de programación Java se puede hacer uso de las palabras clave (keywords), también llamadas palabras reservadas, mostradas en la siguiente tabla. Dichas palabras, no pueden ser utilizadas como identificadores por los programadores para definir variables, constantes, etc.

true, false y null no son considerados palabras clave de Java, sino literales. Ahora bien, tampoco se pueden utilizar como indentificadores. La descripción de la funcionalidad de todas las palabras reservadas se puede encontrar en: https://www.abrirllave.com/java/palabras-clave.php Programación

abstract default if private this boolean do implements protected throw break double import public throws byte else instanceof return transient case extends int short try catch final interface static void char finally long strictfp volatile class float native super while const for new switch assert continue goto package synchronized enum

3.- Tipos de datos primitivos Programación

3.- Tipos de datos primitivos Programación

Tipo Descripción Bytes Rango Valor por defecto byte Entero muy corto -128 a 127 short Entero corto -32.768 a 32.767 int Entero -2.147.486.648 a 2.147.486.647 ( -231 a 231-1 ) long Entero largo -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807 0L float Número con punto flotante de precisión individual con hasta 7 dígitos significativos +/-1.4E-45 (+/-1.4 times 10-45) a +/-3.4E38 (+/-3.4 times 1038) 0.0f double Número con punto flotante de precisión doble con hasta 16 dígitos significativos +/-4.9E-324 (+/-4.9 times 10-324) a +/-1.7E308 (+/-1.7 times 10308) 0.0d char Carácter Unicode https://en.wikipedia.org/wiki/Li st_of_Unicode_characters \u0000 a \uFFFF ‘\u0000’ boolean Valor verdadero o false true o false false

3.- Tipos de datos primitivos Tipos referenciados A partir de los ocho tipos datos primitivos, se pueden construir otros tipos de datos. Estos tipos de datos se llaman tipos referenciados o referencias, porque se utilizan para almacenar la dirección de los datos en la memoria del ordenador.

int[] arrayDeEnteros;

Cuenta cuentaCliente; En la primera instrucción declaramos una lista de números del mismo tipo, en este caso, enteros. En la segunda instrucción estamos declarando la variable u objeto cuentaCliente como una referencia de tipo Cuenta. Cuando el conjunto de datos utilizado tiene características similares se suelen agrupar en estructuras para facilitar el acceso a los mismos, son los llamados datos estructurados.

Son datos estructurados los arrays, listas, árboles, etc. Pueden estar en la memoria del programa en ejecución, guardados en el disco como ficheros, o almacenados en una base de datos. Programación

3.- Tipos de datos primitivos Tipos enumerados Los tipos de datos enumerados son una forma de declarar una variable con un conjunto restringido de valores. Por ejemplo, los días de la semana, las estaciones del año, los meses, etc. Es como si definiéramos nuestro propio tipo de datos.

La forma de declararlos es con la palabra reservada enum, seguida del nombre de la variable y la lista de valores que puede tomar entre llaves. A los valores que se colocan dentro de las llaves se les considera como constantes, van separados por comas y deben ser valores únicos.

La lista de valores se coloca entre llaves, porque un tipo de datos enum no es otra cosa que una especie de clase en Java, y todas las clases llevan su contenido entre llaves. Programación

4.- Declaración e inicialización Programación

4.- Declaración e inicialización Las declaraciones de variables pueden ir en cualquier parte del programa pero siempre antes de que la variable sea usada. Hay que tener cuidado con el rango de validez (scope) de la declaración. Ejemplos

```java
int i;
int j = 1;
double pi = 3.14159;
char c = 'a';
boolean estamosBien = true;
```

Programación

5.- Literales Programación

5.- Literales Un literal, valor literal o constante literal es un valor concreto para los tipos de datos primitivos del lenguaje, el tipo String o el tipo null. Los distintos tipos de literales son: ✓ Literales booleanos ✓ Literales enteros ✓ Literales reales ✓ Literales caracter ✓ Literales cadenas de caracteres Programación

5.- Literales Literales booleanos Los literales booleanos tienen dos únicos valores que puede aceptar el tipo: true y false. Por ejemplo, con la instrucción

```java
boolean encontrado = true;
```

estamos declarando una variable de tipo booleana a la cual le asignamos el valor literal true. Literales enteros Los literales enteros se pueden representar en tres notaciones: Decimal: por ejemplo 20. Es la forma más común. Octal: por ejemplo 024. Un número en octal siempre empieza por cero, seguido de dígitos octales (del 0 al 7).

Hexadecimal: por ejemplo 0x14. Un número en hexadecimal siempre empieza por 0x seguido de dígitos hexadecimales (del 0 al 9, de la ‘a’ a la ‘f’ o de la ‘A’ a la ‘F’). Las constantes literales de tipo long se le debe añadir detrás una l ó L, por ejemplo 873L, si no se considera por defecto de tipo int. Se suele utilizar L para evitar la confusión de la ele minúscula con 1.

Programación

5.- Literales Literales reales Los literales reales o en coma flotante se expresan con coma decimal o en notación científica, o sea, seguidos de un exponente e ó E. El valor puede finalizarse con una f o una F para indica el formato float o con una d o una D para indicar el formato double (por defecto es double).

Por ejemplo, podemos representar un mismo literal real de las siguientes formas

13.2, 13.2D, 1.32e1, 0.132E2. Otras constantes literales reales son por ejemplo

.54, 31.21E-5, 2.f, 6.022137e+23f, 3.141e-9d. Programación

5.- Literales Literal carácter Un literal carácter puede escribirse como un carácter entre comillas simples como 'a', 'ñ', 'Z', 'p', etc. o por su código de la tabla Unicode, anteponiendo la secuencia de escape ‘\’ si el valor lo ponemos en octal o ‘\u’ si ponemos el valor en hexadecimal.

Por ejemplo, si sabemos que tanto en ASCII como en Unicode, la letra A (mayúscula) es el símbolo número 65, y que 65 en octal es 101 y 41 en hexadecimal, podemos representar esta letra como '\101' en octal y '\u0041' en hexadecimal. Existen unos caracteres especiales que se representan utilizando secuencias de escape

Programación

Secuencia de escape Significado Secuencia de escape Significado \b Retroceso \r Retorno de carro \t Tabulador \” Carácter comillas dobles \n Salto de línea \’ Carácter comillas simples \f Salto de página \\ Barra diagonal

5.- Literales Literales de cadenas de caracteres Los literales de cadenas de caracteres se indican entre comillas dobles. En el ejemplo anterior “El primer programa” es un literal de tipo cadena de caracteres. Al construir una cadena de caracteres se puede incluir cualquier carácter Unicode excepto un carácter de retorno de carro, por ejemplo en la siguiente instrucción utilizamos la secuencia de escape \” para escribir dobles comillas dentro del mensaje

```java
String texto = “Pedro dijo: \"Hoy hace un día fantástico…\"";
```

En el ejemplo anterior de tipos enumerados ya estábamos utilizando secuencias de escape, para introducir un salto de línea en una cadena de caracteres, utilizando el carácter especial \n. Normalmente, los objetos en Java deben ser creados con la orden new. Sin embargo, los literales String no lo necesitan ya que son objetos que se crean implícitamente por Java.

Programación

6.- Constantes Programación

6.- Constantes Constantes o variables finales Son aquellas variables cuyo valor no cambia a lo largo de todo el programa. Declaración de constantes en Java

```java
final double PI = 3.1415926536;
```

En nombre de las constantes se deben ser en mayúsculas. Programación

7.- Operadores y expresiones Programación

7.- Operadores y expresiones Operadores Aritméticos: Suma + Resta - Multiplicación * División / Resto de la División % Programación

7.- Operadores y expresiones Operadores de Asignación: El principal es '=' pero hay más operadores de asignación con distintas funciones. '+=': op1 += op2

op1 = op1 + op2 '-=': op1 -= op2

op1 = op1 - op2 '*=': op1 *= op2

op1 = op1 * op2 '/=': op1 /= op2

op1 = op1 / op2 '%=': op1 %= op2

op1 = op1 % op2 Programación

7.- Operadores y expresiones Operadores Relacionales: Permiten comparar variables según relación de igualdad/desigualdad o relación mayor/menor. Devuelven siempre un valor boolean. '>': Mayor que '<': Menor que '==': Iguales '!=': Distintos '>=': Mayor o igual que '<=': Menor o igual que Programación

7.- Operadores y expresiones Operadores Lógicos: Nos permiten construir expresiones lógicas. '&&' : devuelve true si ambos operandos son true. '||' : devuelve true si alguno de los operandos son true. '!' : Niega el operando que se le pasa. Programación

A B A && B A || B ! A true true true true false true false false true false false true false true true false false false false true

7.- Operadores y expresiones Operador de Concatenación: Operador de concatenación con cadena de caracteres '+': Ejemplo

```java
System.out.println(“El total es “ + result + “ unidades.“);
```

Operadores Incrementales: Son los operadores que nos permiten incrementar las variables en una unidad. Prefija ó sufija. '++' '--' Programación

7.- Operadores y expresiones Operadores de Desplazamiento de bits: Para saber más: Los operadores de bits raramente los vas a utilizar en tus aplicaciones de gestión. No obstante, si sientes curiosidad sobre su funcionamiento, puedes ver el siguiente enlace dedicado a este tipo de operadores

http://www.zator.com/Cpp/E4_9_3.htm Programación

Operador Ejemplo en Java Significado ~ ~op Realiza el complemento binario de op (invierte el valor de cada bit) & op1 & op2 Realiza la operación AND binaria sobre op1 y op2 | op1 | op2 Realiza la operación OR binaria sobre op1 y op2 ^ op1 ^ op2 Realiza la operación OR-exclusivo (XOR) binaria sobre op1 y op2 << op1 << op2 Desplaza op2 veces hacia la iquierda los bits de op1 >> op1 >> op2 Desplaza op2 veces hacia la derecha los bits de op1 >>> op1 >>> op2 Desplaza op2 (en positivo) veces hacia la derecha los bits de op1

7.- Operadores y expresiones Operador Condicional: condición ? exp1 : exp2 Se explica con detalle en la UD04 - Uso de estructuras de control Programación

7.- Operadores y expresiones Operadores en orden de precedencia Programación

8.- Conversiones de tipo Programación

8.- Conversiones de tipo El casting es un procedimiento para transformar una variable primitiva de un tipo a otro. También se utiliza para transformar un objeto de una clase a otra clase siempre y cuando haya una relación de herencia entre ambas. *En este tema nos centraremos en el primer tipo de casting.

Dentro de este casting de variables primitivas se distinguen dos clases

Casting implícito

Casting explícito Las conversiones de tipo se realizan para hacer que el resultado de una expresión sea del tipo que nosotros deseamos. Programación

8.- Conversiones de tipo Casting implícito o automático Cuando a una variable de un tipo se le asigna un valor de otro tipo numérico con menos bits para su representación, se realiza una conversión automática. En ese caso, el valor se dice que es promocionado al tipo más grande (el de la variable), para poder hacer la asignación.

También se realizan conversiones automáticas en las operaciones aritméticas, cuando estamos utilizando valores de distinto tipo, el valor más pequeño se promociona al valor más grande, ya que el tipo mayor siempre podrá representar cualquier valor del tipo menor (por ejemplo, de int a long o de float a double).

En este caso no se necesita escribir código para que la conversión se lleve a cabo. Ocurre cuando se realiza lo que se llama una conversión ancha (widening casting), es decir, cuando se coloca un valor pequeño en un contenedor grande. Ejemplo

```java
int  num1 = 100;
```

long num2 = num1; //Un int "cabe" en un long Programación

8.- Conversiones de tipo Casting explícito Cuando hacemos una conversión de un tipo con más bits a un tipo con menos bits. En estos casos debemos indicar que queremos hacer la conversión de manera expresa, ya que se puede producir una pérdida de datos y hemos de ser conscientes de ello. Este tipo de conversiones se realiza con el operador cast.

El operador cast es un operador unario que se forma colocando delante del valor a convertir el tipo de dato entre paréntesis. Tiene la misma precedencia que el resto de operadores unarios y se asocia de izquierda a derecha. El formato general para indicar que queremos realizar la conversión es

(tipo) valor_a_convertir En el casting explícito sí es necesario escribir código. Ocurre cuando se realiza una conversión estrecha (narrowing casting), es decir, cuando se coloca un valor grande en un contenedor pequeño.

```java
int num1   = 100;
```

short num2 = (short) num1; //Casting explícito

//short tiene menor rango que int Programación

8.- Conversiones de tipo Debemos tener en cuenta que un valor numérico nunca puede ser asignado a una variable de un tipo menor en rango, si no es con una conversión explícita. Ejemplo

```java
int a;
```

byte b; a = 12; // no se realiza conversión alguna b = 12; // se permite porque 12 está dentro del rango permitido de valores para b b = a; // error, no permitido (incluso aunque 12 podría almacenarse en un byte) byte b = (byte) a; // Correcto, forzamos conversión explícita En el ejemplo anterior vemos un caso típico de error de tipos, ya que estamos intentando asignarle a b el valor de a, siendo b de un tipo más pequeño. Lo correcto es promocionar a al tipo de datos byte, y entonces asignarle su valor a la variable b.

Programación

8.- Conversiones de tipo N: Conversión no permitida (un boolean no se puede convertir a ningún otro tipo y viceversa). CI: Conversión implícita o automática. CI*: Conversión implícita o automática. Puede haber posible pérdida de datos. C: Casting de tipos o conversión explícita.

Programación

Tabla de Conversión de Tipos de Datos Primitivos Tipo destino boolean char byte short int long float double Tipo origen boolean - N N N N N N N char N - C C CI CI CI CI byte N C - CI CI CI CI CI short N C C - CI CI CI CI int N C C C - CI CI* CI long N C C C C - CI* CI* float N C C C C C - CI double N C C C C C C

8.- Conversiones de tipo Reglas de Promoción de Tipos de Datos Cuando en una expresión hay datos o variables de distinto tipo, el compilador realiza la promoción de unos tipos en otros, para obtener como resultado el tipo final de la expresión. Esta promoción de tipos se hace siguiendo unas reglas básicas en base a las cuales se realiza esta promoción de tipos, y resumidamente son las siguientes

- Si uno de los operandos es de tipo double, el otro es convertido a double.
- En cualquier otro caso

- Si el uno de los operandos es float, el otro se convierte a float

- Si uno de los operandos es long, el otro se convierte a long

- Si no se cumple ninguna de las condiciones anteriores, entonces

ambos operandos son convertidos al tipo int. Programación

8.- Conversiones de tipo Conversión de números en Coma flotante (float, double) a enteros (int) Cuando convertimos números en coma flotante a números enteros, la parte decimal se trunca (redondeo a cero). Si queremos hacer otro tipo de redondeo, podemos utilizar, entre otras, las siguientes funciones

Math.round(num): Redondeo al siguiente número entero. Math.ceil(num): Mínimo entero que sea mayor o igual a num. Math.floor(num): Entero mayor, que sea inferior o igual a num. Ejemplo

```java
double num = 3.5;
```

x = Math.round(num); // x = 4 y = Math.ceil(num); // y = 4 z = Math.floor(num); // z = 3 Programación

8.- Conversiones de tipo Conversiones entre caracteres (char) y enteros (int) Como un tipo char lo que guarda en realidad es el código Unicode de un carácter, los caracteres pueden ser considerados como números enteros sin signo. Ejemplo

```java
int num;
```

char c;

```java
num = (int) 'A';
```

// num = 65 c

```java
= (char) 65;
```

// c = 'A' c = (char) ((int) 'A' + 1); // c = 'B' Programación

8.- Conversiones de tipo Conversiones de tipo con cadenas de caracteres (String) Para convertir cadenas de texto a otros tipos de datos se utilizan las siguientes funciones

```java
num = Byte.parseByte(cad);
num = Short.parseShort(cad);
num = Integer.parseInt(cad);
num = Long.parseLong(cad);
num = Float.parseFloat(cad);
num = Double.parseDouble(cad);
```

Por ejemplo, si hemos leído de teclado un número que está almacenado en una variable de tipo String llamada cadena, y lo queremos convertir al tipo de datos byte, haríamos lo siguiente

```java
byte n = Byte.parseByte(cadena);
```

Programación

9.- Comentarios Programación

9.- Comentarios Los comentarios son muy importantes a la hora de describir qué hace un determinado programa. A lo largo de la unidad los hemos utilizado para documentar los ejemplos y mejorar la comprensión del código. Para lograr ese objetivo, es normal que cada programa comience con unas líneas de comentario que indiquen, al menos, una breve descripción del programa, el autor del mismo y la última fecha en que se ha modificado.

Todos los lenguajes de programación disponen de alguna forma de introducir comentarios en el código. En el caso de Java, nos podemos encontrar los siguientes tipos de comentarios: ✓ Comentarios de una sola línea ✓ Comentarios de múltiples líneas ✓ Comentarios Javadoc Programación

9.- Comentarios Comentarios de una sola línea: Utilizaremos el delimitador // para introducir comentarios de sólo una línea. Ejemplo

// comentario de una sola línea Comentarios de múltiples líneas: Para introducir este tipo de comentarios, utilizaremos una barra inclinada y un asterisco (/*), al principio del párrafo y un asterisco seguido de una barra inclinada (*/) al final del mismo. Ejemplo

/* Esto es un comentario

- de varias líneas.
- En concreto, de 3 líneas. */

Programación

9.- Comentarios Programación

Comentarios Javadoc: Utilizaremos los delimitadores /** y */. Al igual que con los comentarios tradicionales, el texto entre estos delimitadores será ignorado por el compilador. Este tipo de comentarios se emplean para generar documentación automática del programa. A través del programa javadoc, incluido en JavaSE, se recogen todos estos comentarios y se llevan a un documento en formato .html.

> **💡 Apunt Tècnic**
> Ejemplo

/** Comentario de documentación.

- Javadoc extrae los comentarios del código y
- genera un archivo html a partir de este tipo de comentarios */

9.- Comentarios Programación

Comentarios Javadoc: Cuando se crea una clase nueva el código debe venir precedido por un comentario de documentación que incluye la descripción de la clase y, precedidas por las etiquetas @author y @version respectivamente, el nombre del autor o autores y el número de versión o fecha de creación de la clase.

En los comentarios de documentación en Java también se puede usar código html (por ejemplo, para resaltar texto en negrita <b> </b> o para incluir un cambio de línea <br>). Desde Eclipse se puede producir automáticamente la documentación html de un código comentado de esta forma. El resultado es un fichero html que se puede abrir con cualquier navegador y cuyo resultado es idéntico a la documentación online de Oracle sobre Java.

Bibliografía Programación

Bibliografía ORACLE Java Documentation: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html ¿Qué es Java?: https://www.java.com/es/download/help/whatis_java.html Características del lenguaje de programación Java: https://es.wikibooks.org/wiki/Programación_en_Java/Características_del_lenguaje Utilización de los distintos lenguajes de programación

https://www.tiobe.com/ ¿Por qué Java en 2023? https://www.computerweekly.com/es/consejo/Por-que-Java-en-2023 Programación

---

# 1.4 Estilo de codificacion

Programación

### UD 1: Introducción a JAVA

- Estilo de Codificación

Jose Chamorro Molina Ciclo Formativo de Grado Superior Desarrollo de Aplicaciones Web

Programación

### UD 2: Introducción a JAVA – Estilo de codificación

Estilo de Codificación 1.- Introducción 2.- Normas y estilo de codificación

2.1.- Nombres de ficheros

2.2.- Organización de ficheros

2.3.- Identación

2.4.- Comentarios

2.5.- Declaraciones

2.6.- Sentencias

2.7.- Separaciones

2.8.- Nombres

1.- Introducción Programación

1.- Introducción Una vez realizado el diseño se realiza el proceso de codificación. En esta etapa, el programador recibe las especificaciones del diseño y las transforma en un conjunto de instrucciones escritas en un lenguaje de programación. A este conjunto de instrucciones se le llama código fuente.

En cualquier proyecto en el que trabaja un grupo de personas debe haber unas normas de codificación y estilo, claras y homogéneas. Estas normas facilitan las tareas de corrección y mantenimiento de los programas, sobre todo cuando se realizan por personas que no los han desarrollado.

Programación

1.- Introducción

```java
import java.util.Scanner;
public class Suma {
     public static void main (String[] args){
int suma = 0;
int contador = 0;
```

```java
while (contador < 10) {
```

contador++;

```java
suma = suma + contador;
}
System.out.println("Suma => " + suma);
}
}
```

Programación

```java
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

2.- Normas y estilo de codificación Programación

2.- Normas y estilo de codificación 2.1.- Nombres de ficheros: La extensión para los ficheros de código fuente es .java La extensión para los ficheros compilados es .class Programación

2.- Normas y estilo de codificación 2.2.- Organización de ficheros: Cada fichero debe contener una sola clase pública y debe ser la primera. Las clases privadas e interfaces asociados con esa clase pública se pueden poner en el mismo fichero después de la clase pública.

Las secciones en las que se divide el fichero son

- Comentarios

- Sentencias del tipo package e import

- Declaraciones de clases e interfaces

Programación

2.- Normas y estilo de codificación 2.2.- Organización de ficheros: Comentarios: Todos los ficheros fuente deben comenzar con un comentario que muestre

- El nombre de la clase
- Información de la versión
- La fecha de creación y/o modificación
- Aviso de derechos de autor

Programación

/**

- Nombre de la clase

*

- @version

*

- @since

*

- @author

* */

2.- Normas y estilo de codificación 2.2.- Organización de ficheros: Package e import: Van después de los comentarios, la sentencia package va delante de import. Ejemplo

```java
package paquete.ejemplo;
```

```java
import java.util.ArrayList;
```

Programación

2.- Normas y estilo de codificación 2.2.- Organización de ficheros: Clases e interfaces: Comentario de documentación (/** … */) Sentencia class o interface Variables estáticas, en este orden: públicas, protegidas y luego privadas. Variables de instancia, en este orden: públicas, protegidas y luego privadas.

Constructores Métodos. Se agrupan por su funcionalidad, no por su alcance. Programación

2.- Normas y estilo de codificación 2.3.- Identación Como norma general se usarán cuatro espacios. La longitud de las líneas de código no debe superar 80 caracteres. La longitud de las líneas de comentarios no debe superar 70 caracteres. Cuando una expresión no cabe en una solo línea: romper después de una coma, romper antes de un operador, alinear la nueva línea al principio de la anterior.

IMPORTANTE

ctrl + i ( en Eclipse ) Programación

2.- Normas y estilo de codificación 2.4.- Comentarios Los comentarios deben contener solo la información que es relevante para la lectura y la comprensión del programa. Existen 2 tipos de comentarios: De documentación: Están destinados a describir la especificación del código. Se utilizan para describir las clases Java, las interfaces, los constructores, los métodos, ...

De implementación: Son para comentar algo acerca de la aplicación particular, de qué está realizando el algoritmo, ... Programación

2.- Normas y estilo de codificación 2.5.- Declaraciones Se recomienda declarar una variable por línea. Inicializar las variables locales donde están declaradas y colocarlas al comienzo del bloque. En las clases e interfaces

- No se ponen espacios en blanco entre el nombre del método y el

paréntesis “(”.

- La llave de apertura “{” se coloca en la misma línea que el nombre

del método o clase.

- La llave de cierre “}” aparece en una línea aparte.

Programación

2.- Normas y estilo de codificación 2.6.- Sentencias Cada línea debe contener una sentencia. Si hay un bloque de sentencias, este debe ser sangrado con respecto a la sentencia que lo genera y debe estar entre llaves aunque solo tenga una sentencia. Programación

2.- Normas y estilo de codificación 2.7.- Separaciones Mejoran la legibilidad del código. Se utilizan: Dos líneas en blanco: entre las definiciones de clases e interfaces. Una línea en blanco: entre los métodos, la definición de las variables locales de un método y la primera instrucción, antes de un comentario, entre secciones lógicas de un método para mejorar la legibilidad.

Un carácter en blanco: entre una palabra y un paréntesis, después de una coma, los operadores binarios menos el punto, las expresiones del for, y entre un cast y la variable. Programación

2.- Normas y estilo de codificación 2.8.- Nombres Los nombres de las variables, métodos, clases, etc., hacen que los programas sean más fáciles de leer ya que pueden darnos información acerca de su función. Las normas para asignar nombres son las siguientes: Programación

2.- Normas y estilo de codificación 2.8.- Nombres Paquetes: El nombre se escribe en minúscula, se pueden utilizar puntos para reflejar algún tipo de jerarquía. Ejemplo: java.io Clases e interfaces: Los nombres deben ser sustantivos. Se deben utilizar nombres descriptivos. La primera letra siempre será en mayúscula.

> **💡 Apunt Tècnic**
> Ejemplo: Clientes Métodos*: Se deben usar verbos en infinitivo. Ejemplo: asignarDestino() Variables*: Deben ser cortas y significativas. Ejemplo: sumaTotal. Constantes: El nombre debe ser descriptivo. Se escriben en mayúsculas y si son varias palabras unidas por subrayado. Ejemplo: MAX_VALOR *ver siguiente diapositiva Programación

2.- Normas y estilo de codificación 2.8.- Nombres Si las variables o métodos tienen varias palabras para hacerlas mas entendibles, se puede utilizar una de las siguientes 3 notaciones: CamelCase camelCase snake_case kebab-case: no se puede utilizar en Java Programación

RESUMEN Programación

Regla Ejemplo paquetes todo en minúscula dominio clases empiezan con Mayúscula en singular Cliente variables en minúsculas (camelCase) cantidadTotal constantes en mayúsculas (snake_case) VALOR_PTAS métodos en minúsculas verbos en infinitivo asignarDestino() En instrucciones

Una instrucción por línea.

Líneas de separación antes condicionales, bucles, comentarios y métodos. En expresiones

Poner espacios entre las variables y los operadores; En Eclipse

ctrl + i

> identar el código

ctrl + mayus + f -> separación entre expresiones (espacios en blanco e intros)

Bibliografía Programación

Bibliografía Buenas Prácticas de Codificación https://github.com/kosme10/standards/wiki/Buenas-Practicas-de-codificacion Java - Estándares de programación http://javafoundations.blogspot.com.es//java-estandares-de-programacion.html Programación

---
