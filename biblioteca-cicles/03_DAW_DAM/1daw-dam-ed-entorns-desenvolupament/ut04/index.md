---
layout: default
title: "UT4 — Diagramas de clase — Entorns de Desenvolupament | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT4 Completa"
prev_url: "../ut03/ut03actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT3"
next_url: "../ut04/ut0401.html"
next_label: "4.1 U5 - Diagramas de clase ➡️"
---

# 📘 UT4 — Diagramas de clase (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**4.1 U5 - Diagramas de clase**](#ut0401) (o [obrir en pàgina individual ➡️](./ut0401.md) )
> - [**4.2 U5 - Diagramas de clase profe**](#ut0402) (o [obrir en pàgina individual ➡️](./ut0402.md) )
> - [**4.3 Actividades de clase**](#ut0403) (o [obrir en pàgina individual ➡️](./ut0403.md) )
> - [**✍️ Activitats pràctiques UT4**](#ut04actividades) (o [obrir en pàgina individual ➡️](./ut04actividades.md) )

---

## 4.1 U5 - Diagramas de clase

---

Diagrama de Clases

ÍNDICE 1. Qué es UML 2. Diagramas de Clases 3. Clases 4. Atributos 5. Métodos 6. Relaciones

### 1. Asociación. El concepto de Navegabilidad

### 2. Clase Asociación

### 3. Herencia

### 4. Composición

### 5. Agregación

### 6. Realización

### 7. Dependencia

UML

- UML (Unified Modeling Languaje) [Lenguaje de Modelado Unificado]
- Lenguaje de modelado basado en diagramas que sirve para expresar

modelos en Diseño Orientado a Objetos.

- Un modelo es una representación de la realidad donde se ignoran

detalles de menor importancia

- Se ha convertido en el estándar de facto de la mayor parte de las

metodologías de desarrollo oo de la actualidad.

- UML define 9 tipos de diagramas
- Cada uno representa el sistema desde un punto de vista
- Los más usados son
- Diagrama de Casos de Uso: usado durante la recopilación de requisitos
- Diagrama de Clases: es un diagrama estático que muestra las distintas clases

que conforman un sistema y cómo se relacionan entre ellas. Se parece mucho al diagrama ER que dibujamos en BBDD

Diagramas de UML 1.5 •(1)Diagrama de Casos de Uso

- (2) Diagrama de Clases

•(3) Diagrama de Objetos Diagramas de Comportamiento

- (4) Diagrama de Estados
- (5) Diagrama de Actividad

Diagramas de Interacción

- (6) Diagrama de Secuencia
- (7) Diagrama de Colaboración

Diagramas de implementación

- (8) Diagrama de Componentes
- (9) Diagrama de Despliegue

DIAGRAMA DE CLASES

- Compuesto por
- Clases: atributos, métodos y la visibilidad de estos.
- Atributos: variables.
- Métodos: operaciones. Cómo interactúa el objeto con su entorno.
- Relaciones: asociación (relación), herencia, agregación, composición,

realización y dependencia

CLASE

- Unidad básica que encapsula la i de un Objeto.
- Un objeto es una instancia de una clase.
- A través de ella podemos modelar el entorno de estudio (un

empleado, un departamento, una cc, un artículo,…)

- En UML una clase se representa así
- Podemos omitir atributos y métodos al representar una clase.

ATRIBUTO

- Representa una propiedad de la Clase que se encuentra en todas las instancias de

la clase.

- Se representa mostrando su nombre y si quieres también su tipo y valor por

defecto.

- Los tipos básicos en UML son: Integer, String y Boolean.
- Al crear el atributo indicarás su visibilidad en el entorno.
- Su visibilidad es
- Public: se representa con el símbolo “+”. Visible desde todas partes del programa
- Private: “-”. Visible solo desde dentro de la Clase, es decir, que solo sus Métodos pueden

acceder al Atributo. Los atributos de una clase por defecto son Private

- Protected: “#”. NO accesible desde fuera de la Clase.

SÍ accesible por los Métodos de la propia Clase y de las subclases que de él deriven.

- Pakage: “~”. Visible a las clases del mismo paquete

MÉTODO

- Implementa un servicio de la clase que muestra un comportamiento

común a todos los objetos.

- Define la forma de cómo la clase interactúa con su entorno.
- Visibilidad
- Public: “+”. Método visible desde todas partes del programa.

Los métodos de una clase por defecto son Public

- Private: “-”. Accesible solo por los Métodos de la Clase.
- Protected: “#”. Accesible por los Métodos de la propia Clase y por Métodos de las

subclases que de él deriven.

- Pakage: “~”. Visible a las Clases del mismo paquete

RELACIONES (también llamadas ASOCIACIONES)

- Las relaciones tienen un NOMBRE
- MULTIPLICIDAD: Es como la CARDINALIDAD del modelo ER que

usábamos en BD y se lee en el mismo sentido. Es el número de instancias de una clase que se representan con otra clase. Indicamos la multiplicidad mínima y la máxima

- Ejemplo de 2 asociaciones con sus multiplicidades
- Dependiendo de la herramienta de modelado que usemos, las multiplicidades destino >1 se

implementan con un atributo del tipo array, colección o set.

- Tipos de Relaciones

### 1. Asociación

### 3. Herencia (Generalización y Especialización)

1-ASOCIACIÓN

- Puede ser bidireccional o unidireccional, dependiendo de si ambas

conocen de la existencia de la otra o no.

- Cada Clase juega un rol que se indica en la flecha.
- Además, la asociación también tiene nombre

MULTIPLICIDAD

JAVA

- Si conviertes a Java 2 clases unidas por una asociación…
- Bidireccional
- Cada clase tendrá un objeto (1) o un set de objetos (*), dependiendo de la multiplicidad

entre ellas.

- Unidireccional
- La clase destino no sabrá de la existencia de la clase origen.

En el ejemplo: Zonas no sabe nada de la clase Almacén.

- La clase origen contendrá un objeto (1) o set de objetos (*) de la clase destino.

NAVEGABILIDAD entre clases

- Muestra que es posible pasar de un objeto de la clase origen a uno o

más objetos de la clase destino, dependiendo de la Multiplicidad.

- Unidireccional: la navegabilidad va en un solo sentido, de origen a destino.

El destino no es navegable al origen.

- Ambas clases son navegables
- La asociación es unidireccional

solo la clase origen Almacén conoce la existencia de la clase destino Zonas. Almacen a Zonas es navegable pero no al contrario.

NOTA

- NO todas las herramientas usan la misma notación para expresar la

Navegabilidad.

- En UML2 existen varias notaciones para expresar la navegabilidad, en

la práctica más estándar se usa esta notación

ASOCIACIONES REFLEXIVAS

- Una clase puede asociarse consigo misma creando una asociación

reflexiva como ocurría en el Diagram ER que vimos en BD.

- Ejemplo1: un alumno es delegado de muchos alumnos
- Ejmeplo2: un empleado-jefe es jefe de muchos empleados.

2-CLASE ASOCIACION

- Una asociación entre dos clases puede llevar información necesaria

para esta asociación. A eso se le llama Clase Asociación.

- Es como cuando surgían atributos en una relación N:M en el ER.
- La nueva clase asociación…
- Recibe el estatus de Clase
- Sus instancias son elementos de la asociación.
- Pueden estar dotadas de Atributos y Operaciones
- Pueden estar vinculadas a otras Clases a través de ASOCIACIONES.

EJEMPLO CLASE ASOCIACION

- Un cliente compra muchos artículos
- Un artículo es comprado por muchos clientes
- De la relación compra se necesita saber la fecha en que de produjo y

las unidades adquiridas.

- Fíjate que la relación ya no tiene nombre, se lo ha quedado la propia Clase

Asociación.

3-HERENCIA /GENERALIZACIÓN /ESPECIALIZACIÓN (las 3 son lo mismo)

- La clase hija hereda los atributos y métodos de la padre.
- Se representa mediante una flecha de este tipo

donde la punta de la flecha apunta a la superclase o clase padre.

- Ejemplo: todas estas clases

comparten los atributos de la clase Persona

- El código JAVA generado para estas clases sería el siguiente

4-COMPOSICIÓN

- Representa un objeto compuesto por otros objetos.
- Asocia un objeto complejo con los objetos que lo constituyen, sus

componentes.

- Hay 2 formas de composición
- Fuerte: composición (es la que explicamos ahora)
- Débil: agregación (es el tipo de Asociación del punto 5-AGREGACION)

- Los componentes constituyen una parte del objeto compuesto y estos

no pueden ser compartidos por varios objetos compuestos.

- Por tanto, la cardinalidad máxima es 1
- La supresión del objeto compuesto, comporta la supresión de los

componentes

- Se representa con una línea con un

rombo relleno

- Ejemplo: el PC se compone de una

Placa Base, Una o varias Memorias, un Teclado y uno o varios HD.

- Código JAVA generado para la clase Ordenador

5-AGREGACIÓN

- Es la composición débil, como hemos dicho antes.
- Los componentes pueden ser compartidos por varios compuestos
- La destrucción del compuesto no implica la destrucción de los

componentes

- Se da con más frecuencia que la COMPOSICIÓN en las primeras fases

del modelado. Es posible usar solo la agregación y determinar más adelante qué Asociaciones son Compomposiciones.

- Se representa con un rombo vacío
- Ejemplo: un equipo está compuesto por jugadores, pero el jugador

puede jugar a su vez en otros equipos. Si desaparece el Equipo, el Jugador no desaparece.

DIFERENCIAS ENTRE AGREGRACIÓN Y COMPOSICIÓN

6-REALIZACIÓN

- Relación de herencia que existe entre una Clase Interfaz y la Subclase

que implementa esta interfaz.

- Una Interfaz es una Clase totalmente Abstracta, es decir, que no tiene

Atributos y todos sus Métodos son Abstractos y Públicos, sin desarrollar. Estas Clases no desarrollan ningún Método. Gráficamente se representan como una Clase con el estereotipo <<interface>>.

- Se representa así

- EJEMPLO: Esta imagen muestra una Asociación de Realización entre

una Clase Interfaz Animal y las Clases Perro, Gallina y Calamar. SE considera que cualquier animal come, se comunica y se reproduce, sin embargo cada tipo de animal lo hace de diferente manera. Cada Subclase implementará los métodos de la interfaz.

- Código JAVA generado

7-DEPENDENCIA

- Relación que se establece entre dos clases cuando una clase usa la

otra, es decir, que la necesita para su cometido. Las instancias de la Clase se crean y se emplean cuando se necesitan.

- Se representa: - - - - - - - ->

desde la Clase utilizadora a la utilizada.

- Un cambio en la Clase Utilizada puede afectar al funcionamiento de la

Clase Utilizadora, pero no al contrario.

- Ejemplo1: Clase Impresora y Clase Documento. La impresora imprime

documentos, por tanto necesita el documento para imprimirlo.

- Ejemplo2: El viajero necesita su equipaje para viajar. El viajero

depende de la Clase Equipaje porque la necesita.

---

## 4.2 U5 - Diagramas de clase profe

Diagrama de Clases

ÍNDICE 1. Qué es UML 2. Diagramas de Clases 3. Clases 4. Atributos 5. Métodos 6. Relaciones

UML

- UML (Unified Modeling Languaje) [Lenguaje de Modelado Unificado]
- Lenguaje de modelado basado en diagramas que sirve para expresar

modelos en Diseño Orientado a Objetos.

- Un modelo es una representación de la realidad donde se ignoran

detalles de menor importancia

- Se ha convertido en el estándar de facto de la mayor parte de las

metodologías de desarrollo oo de la actualidad.

- UML define 9 tipos de diagramas
- Cada uno representa el sistema desde un punto de vista
- Los más usados son
- Diagrama de Casos de Uso: usado durante la recopilación de requisitos
- Diagrama de Clases: es un diagrama estático que muestra las distintas clases

que conforman un sistema y cómo se relacionan entre ellas. Se parece mucho al diagrama ER que dibujamos en BBDD

Diagramas de UML 1.5 •(1)Diagrama de Casos de Uso

- (2) Diagrama de Clases

•(3) Diagrama de Objetos Diagramas de Comportamiento

- (4) Diagrama de Estados
- (5) Diagrama de Actividad

Diagramas de Interacción

- (6) Diagrama de Secuencia
- (7) Diagrama de Colaboración

Diagramas de implementación

- (8) Diagrama de Componentes
- (9) Diagrama de Despliegue

DIAGRAMA DE CLASES

- Compuesto por
- Clases: atributos, métodos y la visibilidad de estos.
- Atributos: variables.
- Métodos: operaciones. Cómo interactúa el objeto con su entorno.
- Relaciones: asociación (relación), herencia, agregación, composición,

realización y dependencia

CLASE

- Unidad básica que encapsula la información de un Objeto.
- Un objeto es una instancia de una clase.
- A través de ella podemos modelar el entorno de estudio (un

empleado, un departamento, una cuenta corriente, un artículo,…)

- En UML una clase se representa así
- Podemos omitir atributos y métodos al representar una clase.

ATRIBUTO

- Representa una propiedad de la Clase que se encuentra en todas las instancias de

la clase.

- Se representa mostrando su nombre y si quieres también su tipo y valor por

defecto.

- Los tipos básicos en UML son: Integer, String y Boolean.
- Al crear el atributo indicarás su visibilidad en el entorno.
- Su visibilidad es
- Public: se representa con el símbolo “+”. Visible desde todas partes del programa
- Private: “-”. Visible solo desde dentro de la Clase, es decir, que solo sus Métodos pueden

acceder al Atributo.

- Protected: “#”. NO accesible desde fuera de la Clase.

SÍ accesible por los Métodos de la propia Clase y de las subclases que de él deriven.

- Pakage: “~”. Visible a las clases del mismo paquete

MÉTODO

- Implementa un servicio de la clase que muestra un comportamiento

común a todos los objetos.

- Define la forma de cómo la clase interactúa con su entorno.
- Visibilidad
- Public: “+”. Método visible desde todas partes del programa.
- Private: “-”. Accesible solo por los Métodos de la Clase.
- Protected: “#”. Accesible por los Métodos de la propia Clase y por Métodos de las

subclases que de él deriven.

- Pakage: “~”. Visible a las Clases del mismo paquete

RELACIONES (también llamadas ASOCIACIONES)

- Las relaciones tienen un NOMBRE
- MULTIPLICIDAD: Es como la CARDINALIDAD del modelo ER que

usábamos en BD y se lee en el mismo sentido. Es el número de instancias de una clase que se representan con otra clase. Indicamos la multiplicidad mínima y la máxima

- Ejemplo de 2 asociaciones con sus multiplicidades
- Dependiendo de la herramienta de modelado que usemos, las multiplicidades destino >1 se

implementan con un atributo del tipo array, colección o set.

- Tipos de Relaciones

1-ASOCIACIÓN

- Puede ser bidireccional o unidireccional, dependiendo de si ambas

conocen de la existencia de la otra o no.

- Cada Clase juega un rol que se indica en la flecha.
- Además, la asociación también tiene nombre

MULTIPLICIDAD

JAVA

- Si conviertes a Java 2 clases unidas por una asociación…
- Bidireccional
- Cada clase tendrá un objeto (1) o un set de objetos (*), dependiendo de la multiplicidad

entre ellas.

- Unidireccional
- La clase destino no sabrá de la existencia de la clase origen.

En el ejemplo: Zonas no sabe nada de la clase Almacén.

- La clase origen contendrá un objeto (1) o set de objetos (*) de la clase destino.

NAVEGABILIDAD entre clases

- Muestra que es posible pasar de un objeto de la clase origen a uno o

más objetos de la clase destino, dependiendo de la Multiplicidad.

- Unidireccional: la navegabilidad va en un solo sentido, de origen a destino.

El destino no es navegable al origen.

- Ambas clases son navegables
- La asociación es unidireccional

solo la clase origen Almacén conoce la existencia de la clase destino Zonas. Almacen a Zonas es navegable pero no al contrario.

NOTA

- NO todas las herramientas usan la misma notación para expresar la

Navegabilidad.

- En UML2 existen varias notaciones para expresar la navegabilidad, en

la práctica más estándar se usa esta notación

ASOCIACIONES REFLEXIVAS

- Una clase puede asociarse consigo misma creando una asociación

reflexiva como ocurría en el Diagram ER que vimos en BD.

- Ejemplo1: un alumno es delegado de muchos alumnos
- Ejmeplo2: un empleado-jefe es jefe de muchos empleados.

2-CLASE ASOCIACION

- Una asociación entre dos clases puede llevar información necesaria

para esta asociación. A eso se le llama Clase Asociación.

- Es como cuando surgían atributos en una relación N:M en el ER.
- La nueva clase asociación…
- Recibe el estatus de Clase
- Sus instancias son elementos de la asociación.
- Pueden estar dotadas de Atributos y Operaciones
- Pueden estar vinculadas a otras Clases a través de ASOCIACIONES.

EJEMPLO CLASE ASOCIACION

- Un cliente compra muchos artículos
- Un artículo es comprado por muchos clientes
- De la relación compra se necesita saber la fecha en que de produjo y

las unidades adquiridas.

- Fíjate que la relación ya no tiene nombre, se lo ha quedado la propia Clase

Asociación.

3-HERENCIA /GENERALIZACIÓN /ESPECIALIZACIÓN (las 3 son lo mismo)

- La clase hija hereda los atributos y métodos de la padre.
- Se representa mediante una flecha de este tipo

donde la punta de la flecha apunta a la superclase o clase padre.

- Ejemplo: todas estas clases

comparten los atributos de la clase Persona

- El código JAVA generado para estas clases sería el siguiente

```java
public class Persona{
```

```java
private int dni;
```

```java
private char nombre;
```

```java
private char sexo;
```

```java
private char fechaNacimiento;
```

```java
public Persona(){   }
```

}

```java
public class Alumno extends Persona{
```

```java
private int numMatricula;
```

```java
private int curso;
```

```java
public Alumno(){   }
```

}

```java
public class Empleado extends Persona{
```

```java
private char numSegSocial;
```

```java
private char puestoTrabajo;
```

```java
private int salario;
```

```java
public Empleado(){   }
```

}

4-COMPOSICIÓN

- Representa un objeto compuesto por otros objetos.
- Asocia un objeto complejo con los objetos que lo constituyen, sus

componentes.

- Hay 2 formas de composición
- Fuerte: composición (es la que explicamos ahora)
- Débil: agregación (es el tipo de Asociación del punto 5-AGREGACION)

- Los componentes constituyen una parte del objeto compuesto y estos

no pueden ser compartidos por varios objetos compuestos.

- Por tanto, la cardinalidad máxima es 1
- La supresión del objeto compuesto, comporta la supresión de los

componentes

- Se representa con una línea con un

rombo relleno

- Ejemplo: el PC se compone de una

Placa Base, Una o varias Memorias, un Teclado y uno o varios HD.

5-AGREGACIÓN

- Es la composición débil, como hemos dicho antes.
- Los componentes pueden ser compartidos por varios compuestos
- La destrucción del compuesto no implica la destrucción de los

componentes

- Se da con más frecuencia que la COMPOSICIÓN en las primeras fases

del modelado. Es posible usar solo la agregación y determinar más adelante qué Asociaciones son Compomposiciones.

- Se representa con un rombo vacío
- Ejemplo: un equipo está compuesto por jugadores, pero el jugador

puede jugar a su vez en otros equipos. Si desaparece el Equipo, el Jugador no desaparece.

DIFERENCIAS ENTRE AGREGRACIÓN Y COMPOSICIÓN

6-REALIZACIÓN

- Relación de herencia que existe entre una Clase Interfaz y la Subclase

que implementa esta interfaz.

- Una Interfaz es una Clase totalmente Abstracta, es decir, que no tiene

Atributos y todos sus Métodos son Abstractos y Públicos, sin desarrollar. Estas Clases no desarrollan ningún Método. Gráficamente se representan como una Clase con el estereotipo <<interface>>.

- Se representa así

- EJEMPLO: Esta imagen muestra una Asociación de Realización entre

una Clase Interfaz Animal y las Clases Perro, Gallina y Calamar. Se considera que cualquier animal come, se comunica y se reproduce, sin embargo cada tipo de animal lo hace de diferente manera. Cada Subclase implementará los métodos de la interfaz.

- Código JAVA generado

```java
public interface Animal {
      public void comer();
      public void comunicarse();
      public void reproducirse();
}
public class Perro implements Animal{
      public Perro(){   }
      public void comer(){   }
      public void comunicarse(){   }
      public void reproducirse(){   }
}
public class Calamar implements Animal{
      public Calamar(){   }
      public void comer(){   }
      public void comunicarse(){   }
      public void reproducirse(){   }
}
public class Gallina implements Animal{
      public Gallina(){   }
      public void comer(){   }
      public void comunicarse(){   }
      public void reproducirse(){   }
}
```

7-DEPENDENCIA

- Relación que se establece entre dos clases cuando una clase usa la

otra, es decir, que la necesita para su cometido. Las instancias de la Clase se crean y se emplean cuando se necesitan.

- Se representa: - - - - - - - ->

desde la Clase utilizadora a la utilizada.

- Un cambio en la Clase Utilizada puede afectar al funcionamiento de la

Clase Utilizadora, pero no al contrario.

- Ejemplo1: Clase Impresora y Clase Documento. La impresora imprime

documentos, por tanto necesita el documento para imprimirlo.

- Ejemplo2: El viajero necesita su equipaje para viajar. El viajero

depende de la Clase Equipaje porque la necesita.

EJERCICIO 1 RESUELTO PASO A PASO

Enunciado

- Crear un proyecto UML llamado Piscina en el que se diseñe un

diagrama de clases que modele el proceso de dar de alta a cada una de las personas que se apuntan a una Piscina.

- De cada persona interesa saber sus datos básicos: NIF, nombre

completo y fecha de nacimiento. Cuando cada nuevo socio se da de alta, se le asigna un código de socio alfanumérico y se anota la fecha de alta.

- La clase Fecha se modela con tres campos (día, mes y año) de tipo entero.

La clase Nif se modela con un campo de tipo entero llamado dni y un campo de tipo carácter llamado letra.

Análisis del Enunciado

- El primer paso a realizar consiste en leer detenidamente el enunciado

y extraer de el toda la información posible. A veces es cuestión de aplicar el sentido común, a veces es cuestión de unir piezas, a veces es cuestión de lógica y a veces es cuestión de pura deducción, pero siempre siempre es cuestión de razonar por aproximaciones sucesivas y de experiencia.

- Bien, parece que el enunciado refiere únicamente un modelado de

datos, no de comportamiento, por lo que se procederá a realizar una lista de los elementos más significativos para el proyecto que se puedan extraer del enunciado.

- Nombre del proyecto – Piscina
- Nombre del diagrama – AltaSocio
- Ítems – Elementos significativos del enunciado.
- Persona
- Socio
- Nif
- Nombre completo
- Fecha de nacimiento
- Código de socio
- Día
- Mes
- Año
- Dni
- Letra
- Tipos de datos
- Integer
- Char
- String
- Nif
- Fecha
- Nombre

Clases

- Las clases son entidades que encapsulan información, se trata por tanto de

ver qué información de la lista anterior está relacionada entre sí y ver la forma de encapsularla en sus respectivas clases.

- Se procederá a identificar las clases a partir del enunciado y de encapsular

en ellas la información relacionada. Este paso se realizará considerando las clases de forma aislada las unas de las otras. Posteriormente, cuando se vean las relaciones, se depurará su composición.

- En esta fase del modelado se procede siempre desde las clases más

triviales a las más complejas.

Clase NIF Clase Fecha Clase Nombre Clase Persona Clase Socio

Relaciones

- En esta fase se va a evaluar qué clases tienen que ver con qué otras,

es decir sus relaciones. Para que el procedimiento resulte lo más sencillo posible se estudiarán las relaciones dos a dos.

3-Herencia

- Primero se abordan las relaciones de herencia empezando por

aquellas que resulten triviales o más evidentes.

- Aunque estrictamente hablando no es así del todo, la regla para

detectarlas es ver si entre las clases definidas en el diseño existe alguna cuyos atributos sean un subconjunto de alguna otra.

Persona – Socio

- Los atributos de la clase Persona son un subconjunto de los de la clase Socio.
- O lo que es lo mismo: La clase Socio sea una especialización de la clase Persona.
- Los atributos que hereda la clase especializada no se representan.
- La flecha que representa esta relación
- Va desde la clase hija a la clase madre
- Tiene línea continua y punta de flecha cerrada
- No tiene cardinalidad
- No está etiquetada por ningún rol.

1-Asociación

- Una vez se han resuelto las relaciones de herencia le toca el turno a

los demás tipos de relaciones que son asociaciones.

- Se procederá siempre abordando primero las triviales o más simples y

continuando por las demás.

- Para que resulte más claro, el análisis se realizará considerando las

clases dos a dos.

Socio – Fecha

- Aun a riesgo de resultar tedioso pero con el objetivo de que resulte lo

más clarificador posible, el análisis de la relación entre estas dos clases se realizará paso a paso.

Roles

- La clase Socio tiene un campo de tipo Fecha.
- Dicho de otra manera, la clase Socio tiene una referencia a un objeto

de la clase Fecha.

- Este campo pasa a ser el rol de la relación que vincula a ambas clases.
- Por lo tanto, desaparece de la clase Socio y aparece en la linea de

vinculación junto a la clase de su tipo.

Navegabilidad

- Tratamos de ver si desde una clase se puede ir a la otra.
- La clase Fecha no tiene información de la clase Socio por lo que la

navegabilidad desde la clase Fecha no es posible.

- La clase Socio tiene una referencia a la clase Fecha por lo que si es

viable la navegabilidad en este sentido.

- La navegabilidad se expresa con una punta de flecha abierta puesta

en el lado de la clase a la que se llega.

Cardinalidades o Multiplicidades

- Es el número de instancias de cada clase que intervienen en la

relación.

- Para resolver este paso hay que preguntar: “¿Por cada instancia de

una de las dos clases cuantas instancias de la otra clase pueden en extremo intervenir como mínimo (Cardinalidad mínima) y como máximo(Cardinalidad máxima)?”. Y luego hacer las preguntas al revés.

- Cuántas fechas de alta como mínimo tiene cada socio : 1
- Cuántas fechas de alta como máximo tiene cada socio: 1
- Cuántos socios se dan de alta como mínimo en una fecha: 0
- Cuántos socios se dan de alta como máximo en una fecha: Varios
- Cuando la cardinalidad mínima y máxima coinciden sólo se representa

una de ellas.

- Cuando la cardinalidad máxima es múltiple y la cardinalidad

mínima es cero refiere una cardinalidad múltiple opcional y se representa con un asterisco.

Todo – Parte

- Qué clase es PARTE y

Qué clase es TODO.

- Dicho de otro modo quien contiene a quien.
- En este caso la discriminación es trivial
- la clase Socio es la parte TODO porque tiene una referencia a la clase Fecha
- Fecha es la parte PARTE.

5-Agregación ¿Agregación o Composición?

- Determinar si la relación entre las clases es de agregación o si bien es de

composición.

- Para que la relación sea de composición es condición necesaria que la

cardinalidad de la parte TODO (socio) sea 1.

- Como este no es el caso la relación es de agregación.
- Obsérvese que el rombo se ha representado en blanco

4-Composición Persona – Nif

- Cada objeto de la clase Nif está unívocamente unido a un solo objeto de la

clase Persona, y viceversa, por lo que la cardinalidad en ambos lados es 1, tanto mínima como máxima.

- Además semánticamente si desaparece la parte TODO, el objeto de la clase Persona, la

existencia de la parte PARTE ya no tiene sentido y debería desaparecer también. Esta dependencia existencial apunta a una relación de tipo Composición.

- Obsérvese….
- que el rombo se ha representado relleno en negro.
- que el campo correspondiente al Nif ha desaparecido de la clase persona pasando a ser el rol de la

relación.

Persona – Nombre

- La relación entre la clase Persona y la clase Nombre es muy parecida

a la relación existente entre la clase Persona y la clase Fecha.

- Obsérvese que al trasladar el campo nombre al rol de la relación, el

diagrama que representa la clase Persona ya no contiene ningún atributo.

Diagrama de clases completo

ACTIVIDAD 1 - PARA EL ALUMNO

- Con el SW de modelado UML DESIGNER de Ecliplse,

implementad el ejercicio anterior

EJEMPLOS

EJEMPLO 1 - FAMILIAS

- Una familia se compone de un padre, una madre e hijos, es decir, las

personas incluidas en una familia están relacionadas entre sí.

- Dejando de lado la poligamia y la orfandad, suponemos que una

familia debe tener un solo padre, una sola madre y que ellos pueden tener varios hijos en conjunto

EJEMPLO 2 - EMPRESAS

---

## 4.3 Actividades de clase

Ejercicio 1. Biblioteca. Representa mediante un diagrama de clases la siguiente
especificación

- Una biblioteca tiene copias de libros. Los libros se caracterizan por su nombre, tipo (novela, teatro, poesía, ensayo), editorial, año y autor.
- Los autores se caracterizan por su nombre, nacionalidad y fecha de nacimiento.
- Cada copia tiene un identificador, y puede estar en la biblioteca prestada, con retraso o en reparación.
- Los lectores pueden tener un máximo de 3 libros en préstamo.
- Cada libro se presta un máximo de 30 días, por cada día de retraso, seimpone una "multa" de dos días sin posibilidad de coger un nuevo libro.
Ejercicio 2. Empresa. Representa mediante un diagrama de clases la siguiente
especificación

- Una aplicación necesita almacenar información sobre empresas, sus empleados y sus clientes.
- Empleados y clientes se caracterizan por su nombre y edad.
- Los empleados tienen un sueldo bruto, los empleados que son directivos tienen una categoria, así como un conjunto de empleados subordinados.
- De los clientes además se necesita conocer su teléfono de contacto.
- La aplicación necesita mostrar los datos de los empleados y clientes.

Ejercicio 3 . Programa Facturas. Representa mediante un diagrama de clases la
siguiente especificación

- En un programa de ordenador, las facturas tienen necesariamente un conjunto de datos del proveedor, un conjunto de datos del cliente, un importe (valor decimal) y una fecha (vector de enteros).
- Los datos del cliente son la cadena de caracteres nombre y el entero fiabilidad de pago, mientras que los datos del proveedor son sólo su nombre.
- Dentro de la categoría cliente está el subtipo “cliente moroso”, que lleva también asociado el número decimal deuda.
- Se pide dibujar el diagrama UML.

---

## ✍️ Activitats pràctiques UT4

> **✍️ Activitat Pràctica 4.1 — U5 A1**
> Unidad 4 – Testing y debugging
>
> U5 – A1
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - Utiliza el sistema que prefieras para la realización del diagrama de
>
> clases (Dia, draw.io, herramientas online, etc).
>
> ### 1. Se propone realizar un modelo simplificado de los distintos miembros de
>
> la comunidad universitaria. Todos los miembros de la comunidad universitaria se caracterizan por un nombre y un D.N.I. Los miembros se dividen en estudiantes o personal de la universidad. Todos los estudiantes tienen un número de identificación asociado: el nie. En cuanto al personal, todos tienen un salario asignado y a su vez estos pueden ser personal docente investigador (pdi) ó personal de administración y servicios (pas). Los pdi tienen asignada una asignatura que impartir (se identificará por el título) y los pas un edificio donde trabajan (se identificará por el nombre del edificio). Además de los anteriores, existen los doctorandos que son a la vez pdi y estudiantes. Los doctorandos se caracterizan por el título de la tesis doctoral sobre la que investigan.
>
> Se pide que, utilizando herencia siempre que se pueda, se realice un diseño UML de las clases Miembro, Personal, Estudiante, Pdi, Pas y Doctorando.
>
> ### 2. Se desea diseñar un diagrama de clases sobre la información de las
>
> reservas de una empresa dedicada al alquiler de automóviles, teniendo en cuenta que: • Un cliente puede tener en un momento determinado varias reservas • De cada cliente se almacena su DNI, nombre, dirección y teléfono. Además, dos clientes se diferencian por un código único.
>
> • Cada cliente puede ser avalado por otro cliente de la empresa • Una reserva la realiza un único cliente pero puede involucrar varios coches • Es importante indicar la fecha inicio y fin de la reserva, el precio de alquiler de cada coche, los litros de gasolina en depósito en el momento de realizar la reserva, el precio total de la reserva y un indicador de si el coche o los coches han sido entregados.
>
> Unidad 4 – Testing y debugging • Todo coche tiene siempre un determinado garaje, no puede cambiar. De cada coche necesitamos la matrícula, modelo, marca y color. • Cada reserva se realiza en una determinada agencia.

> **✍️ Activitat Pràctica 4.2 — U5 A2 (opcional)**
> Unidad 5 – Diagramas de clases
>
> U5 – A2
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - Utiliza el sistema que prefieras para la realización del diagrama de
>
> clases (Dia, draw.io, herramientas online, etc).
>
> La Policía quiere crear una base de datos sobre la seguridad en algunas entidades bancarias. Para ello tiene en cuenta: - Que cada entidad bancaria se caracteriza por un código y por el domicilio de su Central. - Que cada entidad bancaria tiene más de una sucursal que también se caracteriza por un código y por el domicilio, así como por el número de empleados de dicha sucursal.
>
> Que cada sucursal contrata, según el día, algunos vigilantes jurados, que se caracterizan por un código y su edad. Un vigilante puede ser contratado por diferentes sucursales (incluso de diferentes entidades), en distintas fechas y es un dato de interés dicha fecha, así como si se ha contratado con arma o no.
>
> Por otra parte, se quiere controlar a las personas que han sido detenidas por atracar las sucursales de dichas entidades. Estas personas se definen por una clave (código) y su nombre completo. - Alguna de estas personas están integradas en algunas bandas organizadas y por ello se desea saber a qué banda pertenecen, sin ser de interés si la banda ha participado en el delito o no Dichas bandas se definen por un número de banda y por el número de miembros.
>
> Así mismo, es interesante saber en qué fecha ha atracado cada persona una sucursal. Evidentemente, una persona puede atracar varias sucursales en diferentes fechas, así como que una sucursal puede ser atracada por varias personas. - Igualmente, se quiere saber qué Juez ha estado encargado del caso, sabiendo que un individuo, por diferentes delitos, puede ser juzgado por diferentes jueces, pero por el mismo delito solo puede ser juzgado por un juez. Es de interés saber, en cada delito, si la persona detenida ha sido condenada o no y de haberlo sido, cuánto tiempo pasará en la cárcel. Un Juez se caracteriza por una clave interna del juzgado, su nombre y los años de servicio.
>
> > **⚠️ NOTA: En ningún caso interesa saber si un vigilante ha ...**
> > NOTA: En ningún caso interesa saber si un vigilante ha participado en la detención de un atracador.

> **✍️ Activitat Pràctica 4.3 — U5 A3**
> Adjunta captura de pantalla de umbrello y todas las clases generadas mediante Umbrello.
